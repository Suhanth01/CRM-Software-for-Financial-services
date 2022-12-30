import React, { useRef } from 'react';
import "../Css/login.css";
import {useNavigate,Link} from "react-router-dom";
import { BsCart4} from "react-icons/bs";


const Login = () => {
  const first = useRef("");
  const second = useRef("");
  const navigate = useNavigate();
  
  const login=(a,b)=>{
    if(a!=="" && b!==""){
      navigate("/adminhome");
    }
  }
  return (
    <div className='Login'>
        <p className='admintext'>Admin Panel</p>
        <div className='login_container'>
            <BsCart4 className='logbasket'/>
            <input type="text" placeholder='User_name' className='login_input_cont' ref={first}/>
            <input type="password" placeholder='Password' className='login_input_cont' ref={second}/>
            <button className='login_btn' onClick={()=>{login(first.current.value,second.current.value)}}>Login</button>
            <Link to="/forgotpassword" className='forpass'>Forgot password?</Link>
        </div>
    </div>
  )
}

export default Login