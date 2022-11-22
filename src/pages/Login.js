import React from 'react';
import {auth, provider} from '../firebase-config';
import{ signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Login({ setIsAuth }) {
    let navigate = useNavigate();
  
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/')

        });
    };

    return(
        <div>
            <div className='loginPage'>
                <p>Sign in With Google to continue</p>
                <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in With Google</button>
            
                           
            
            </div>
            <div className='lc'>
                <h2 data-text="Login...">Login...</h2>
            </div>
        </div>
    )
}

export default Login;