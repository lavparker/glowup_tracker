class ManifestsController < ApplicationController
    def manifest
    # Add logic to handle the manifest.json request
    # For now, you can render a simple JSON response
    render json: { key: 'value' }
  end
end
