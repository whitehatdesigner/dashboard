import React from 'react'

const Login = () => {
  return (
    <div className='login-page'>
        <div className="login-card">
            <h2>Admin Login</h2>

            <form>
                <input type="email" />
                <input type="password" />
                <input type="submit" value={'Login'} />
            </form>
        </div>
    </div>
  )
}

export default Login