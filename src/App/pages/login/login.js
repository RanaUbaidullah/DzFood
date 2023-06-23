import React, {useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import {Config} from '../../constant/Index'
function Login() {

    const [users, setUsers] = useState([])
    
      fetch(`${Config.serverUrl}api/login`, {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify({
            email: "ziabzu@gmail.com",
            password: "Test1234"
        }),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    console.log(fetch)
  return (
    <>
    {/* <!-- login section --> */}
    <div className="login__section">

        <div className="login__img">
            <img src="img/loginimg.png" alt="Food 3d image"/>
        </div>

        <form className="login__form">

            <h1 className="title login__title">

                Welcome back to
                <br/>
                <span>
                    DZ Food
                </span>

            </h1>

            <div className="form__inputs">


                <div className="input">

                    <label htmlFor="input">
                        Email or Phone No.
                    </label>

                    <input type="text" placeholder="Email or Phone No."/>

                </div>


                <div className="input">

                    <label htmlFor="input">
                        Password

                        <Link to="forget.html" className="underline">
                            Forget Password ?
                        </Link>

                    </label>

                    <input type="text" placeholder="Password"/>

                </div>


                <div className="checkbox">

                    <input type="checkbox"/>

                    Stay
                    <span className="underline">
                        Logged In
                    </span>   

                </div>

            </div>


            <button className="btn">
                Login
            </button>


            <span className="sign__up">

                Don't have an Account ?

                <Link to="signup.html" className="underline">
                    Sign Up
                </Link>

            </span>

        </form>

    </div>
    </>
  )
}

export default Login