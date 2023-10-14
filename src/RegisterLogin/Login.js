import React, { useState } from 'react'
import "../Components/Components.css"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://vikasecommerce-1ogg.onrender.com/users/login', {
                email, password
            })
                .then(res => {
                    const token = res.data.token
                    if (res.data.message === "User logged in successfully" && token) {
                        localStorage.setItem('recievedToken', token)
                        navigate('/userprofile')
                    }
                    else if (res.data === "User is not registered Register first") {
                        alert("User is not registered Please register first!!")
                    }
                    else if (res.data === "Password does not match Try entering the correct password") {
                        alert("Password does not match Try entering the correct password!!")
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const goBackFromLoginPage = () => {
        navigate(-1)
    }
    return (
        <>
            <div id='login-page'>
                <MdOutlineArrowBackIosNew className='login-register-back-icon' onClick={goBackFromLoginPage} />
                <div className='login-register-header'>
                    <Link to='/' className='shopit-logo-link'><h1>MYSHOP</h1></Link>
                </div>
                <div className='login-register-container'>
                    <div className='login-register-form'>
                        <p className='login-register'>Login</p>
                        <form action='POST'>
                            <label className='login-register'>Email :</label><br />
                            <input type='email' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} className='login-register' /><br />
                            <label className='login-register'>Password :</label><br />
                            <input type='password' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} className='login-register' /><br />
                            <input type='submit' onClick={handleSubmit} value='Login' id='login-btn' />
                        </form>
                    </div>
                    <p>New to SHOPIT?</p>
                    <NavLink to='/register' className='links' id='goto-register-btn'><button className='login-register'>Create Account</button></NavLink>
                </div>
            </div>
        </>
    )
}
