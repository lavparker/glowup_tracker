import { useRef, useState, useEffect } from 'react'; 

const Login = () => {
    const userRef = useRef();
    const errRef = useRef(); 

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState(''); 
    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState(false); 

    useEffect(() => {
        userRef.current.focus();
    }, [])

        useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        setSuccess(true); 
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>

        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="#"> Go to Home</a>
                </p>
            </section>
        ) : (

      
        <section>
            //error message display //assertive will have the error display immediately
            <p ref={errRef} className={errMsg ? "effmsg" : "offscreen"} arialive="assertive">{errMsg}</p>

            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName:</label>
                <input 
                    type="text" 
                    id="username" 
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user} //makes this a controlled input allows us to clear input upon submission 
                    required 
                    />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)}
                    value={pwd} //makes this a controlled input allows us to clear input upon submission 
                    required 
                    />

                    <button>Sign In</button>
            </form>
            <p>
                Need an Account? <br />
                <span className='line'>
                    {/*put router link here */}
                    <a href="#"> Sign Up </a>
                </span>
            </p>

        </section>
          )}
          </>
    )
}

export default Login; 