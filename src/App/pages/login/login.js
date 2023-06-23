import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Config } from '../../constant/Index'
import { setLocalStorage} from '../../Component/local_storage'
function Login() {

   const navigate= useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target; 
        setData((prevState) => ({
            ...prevState, 
            [name]: value
        }));
    };


    const log1 = async (e) => {
        e.preventDefault();
        const response = await fetch(`${Config.serverUrl}api/login`, {

            // Adding method type 
            method: "POST",
            headers: {

                // Accept: "application/json",
                "Content-Type": "application/json",
            },
            // Adding body or contents to send
            body: JSON.stringify({
                email: data.email,
                password: data.password
            }),

            // Adding headers to the request


        })
        if (response.ok) {
            const responseData = await response.json();
            // const { access_token, token_type } = responseData.data;

            setLocalStorage(Config.userDzFoodToken, responseData.data.access_token)
            navigate('/')
            // Perform further operations with the access token and token type
        } else {
            console.error("Error:", response.status);
        }

    }
    return (
        <>
            {/* <!-- login section --> */}
            <div className="login__section">

                <div className="login__img">
                    <img src="img/loginimg.png" alt="Food 3d image" />
                </div>

                <form className="login__form">

                    <h1 className="title login__title">

                        Welcome back to
                        <br />
                        <span>
                            DZ Food
                        </span>

                    </h1>

                    <div className="form__inputs">


                        <div className="input">

                            <label htmlFor="input">
                                Email or Phone No.
                            </label>

                            <input
                                id="emailInput"
                                type="text"
                                name="email"
                                value={data.email}
                                placeholder="Email or Phone No."
                                onChange={handleInputChange}
                            />

                        </div>


                        <div className="input">

                            <label htmlFor="input">
                                Password

                                <Link to="forget.html" className="underline">
                                    Forget Password ?
                                </Link>

                            </label>

                            <input
                                id="passwordInput"
                                type="password"
                                name="password"
                                value={data.password}
                                placeholder="Password"
                                onChange={handleInputChange}
                            />

                        </div>


                        <div className="checkbox">

                            <input type="checkbox" />

                            Stay
                            <span className="underline" >
                                Logged In
                            </span>

                        </div>

                    </div>

                   
                   <button className="btn" onClick={log1}>
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