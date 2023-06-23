import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
function login() {
  return (
    <>
    {/* <!-- login section --> */}
    <div class="login__section">

        <div class="login__img">
            <img src="img/loginimg.png" alt="Food 3d image"/>
        </div>

        <form class="login__form">

            <h1 class="title login__title">

                Welcome back to
                <br/>
                <span>
                    DZ Food
                </span>

            </h1>

            <div class="form__inputs">


                <div class="input">

                    <label for="input">
                        Email or Phone No.
                    </label>

                    <input type="text" placeholder="Email or Phone No."/>

                </div>


                <div class="input">

                    <label for="input">
                        Password

                        <Link to="forget.html" class="underline">
                            Forget Password ?
                        </Link>

                    </label>

                    <input type="text" placeholder="Password"/>

                </div>


                <div class="checkbox">

                    <input type="checkbox"/>

                    Stay
                    <span class="underline">
                        Logged In
                    </span>

                </div>

            </div>


            <button class="btn">
                Login
            </button>


            <span class="sign__up">

                Don't have an Account ?

                <Link to="signup.html" class="underline">
                    Sign Up
                </Link>

            </span>

        </form>

    </div>
    </>
  )
}

export default login