import React, {useState} from 'react';
import {login} from './Auth';
import Dashboard from '../src/pages/Dashboard';
import { useHistory } from 'react-router';
  
const Login = () => {
    const history = useHistory();
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const signup = () => {
        console.log("Moving to Demo page");

        history.push({
            pathname: "/Register",
            state: {
                data: "Hello World"
            }
        });
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        let res = await login(form);
        
        if(res === "User Logged Successfully"){
            //redirect to dashboard page using history.push
            history.push({
            pathname: "/Dashboard",
            state: {
                data: "Hello World"
            }
        });
        }
        else if(res === "auth/wrong-password"){
            alert("Wrong Password");
        }
  
    }
    const InputFields = {
        padding:'0.5rem',
        margin:'0.8rem',
        borderRadius: '4px'
    }
    const ButtonStyle = {
        borderRadius: '4px',
        padding:'0.7rem',
        margin:'0.5rem'
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
            <label for="email">Email</label>
            <input type="text" style={InputFields}
                   placeholder="email" id="mail" 
            onChange={(e) => 
            setForm({...form, email: e.target.value})} />
            <br/>
            <label for="password">Password</label>
            <input type="password"  placeholder="Password" 
                   style={InputFields} 
            onChange={(e) => 
            setForm({...form, password: e.target.value})}/>
            <br/>
            <button type="submit" style={ButtonStyle}>
                   Submit
            </button><br></br>
            <button type="submit" style={ButtonStyle} onClick={signup}>
                   New User ? Signup Here
            </button>
            </form>
        </div>
  
    )
}
  
export default Login