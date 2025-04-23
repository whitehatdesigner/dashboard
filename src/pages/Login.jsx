import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminProfile } from '../dummyData/user';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { Images } from '../assets/images/images';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = adminProfile.find(
      (u) => u.emailAddress === email && u.password === password
    );

    if(user){
      dispatch(login(user));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate('/');
    } else {
      alert("Invalid Credentials");
    }
  }


  return (
    <div className='login-page'>
        <div className="login-card">
          <div className="logo-box">
            <img src={Images.logo} alt="" />
          </div>
            <h2>Admin Login</h2>

            <form onSubmit={handleLogin}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' />
                <input type="submit" value={'Login'} />
            </form>
        </div>
    </div>
  )
}

export default Login