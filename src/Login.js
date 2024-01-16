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

    return (
        <section>
            //error message display 

            <p ref={errRef} className={errMsg ? "effmsg" : "offscreen"} arialive="assertive">{errMsg}</p>

        </section>
    )
}

export default Login; 