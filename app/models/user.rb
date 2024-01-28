class User < ApplicationRecord
    validates :email, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
    validates :first_name, :last_name, :username, :email, :password_digest, presence: true
    validates :email, :username, uniqueness: true
    validates :password, length: {minimum: 8, allow_nil: true}
    validates :session_token, presence: true, uniqueness: true
    attr_reader :password

    # workouts, moods, mealplans, measurements, etc.

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end
