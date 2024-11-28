import React from "react";
import { useState } from "react";
import NavBar from "../common/navBar/navBar.js"
import './signup.css';

const Signup = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [alreadyUser,setAllreadyUser] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return emailPattern.test(email);
    };
    
    const handleClick = async () =>{

        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (!valid) {
            return;
        }

        console.log(email,password); 
        if(!email && !password){
            return;
        }
        const res = await fetch(`api/v1/auth/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        });
        
        const data = await res.json();
        if(data.status == "fail"){
            setAllreadyUser("fail");
            setSignupSuccess(false);
        }
        else
            setSignupSuccess(true);
        console.log(data);
    }
  return (
    <div>
            <NavBar page='signup' />
            <div className="signup-main-container">
                <h2>Signup</h2>
                <form>
                    <div className="input-main">
                        <label htmlFor="email">Email:</label>
                        <input
                            type='email'
                            id="email"
                            name="email"
                            placeholder="example@domain.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {emailError && <span className="error">{emailError}</span>}
                    </div>

                    <div className="input-main">
                        <label htmlFor="password">Password:</label>
                        <input
                            type='password'
                            id="password"
                            name="password"
                            placeholder="enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {passwordError && <span className="error">{passwordError}</span>}
                        {alreadyUser && !passwordError && <span className="error">already a User</span>}
                        {signupSuccess && !alreadyUser && !passwordError && <span className="success">Signed Up successfully</span>}
                    </div>
                </form>
                <button onClick={handleClick}>Signup</button>
            </div>
        </div>
  )
}

export default Signup;