import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {

        console.log(name, email, password)
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }

        }
        )
        result= await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result)
        {
            navigate('/')
        }
    }

    return (
        <div className="register">
            <h1> Register here</h1>
            <input className="inputBox" type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="enter name" />
            <input className="inputBox" type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter email" />
            <input className="inputBox" type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" />
            <button onClick={collectData} type="button"> signup</button>
        </div>
    )
}
export default SignUp;
