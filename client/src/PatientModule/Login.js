import React, { useState } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

import "../components/mix.css"

const Login = () => {

    const [passShow, setPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };


    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            // console.log("user login succesfully done");


            const data = await fetch("/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();
            //  console.log(res);

            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                history("/dash/profile")
                setInpval({...inpval,email:"",password:""});
            }else{
                toast.error("Invalid Credentials", {
                    position: "top-center"
                });
            }
        }
    }

    return (
        <>
            <section>
            <div className="form_data">
                    <div className="image">
                    <img src="https://res.cloudinary.com/dusm4h6cn/image/upload/v1692860408/Screenshot_2023-08-24_122931_vbhmfx.png" alt="Image"  />
                
                    </div>

                    <form>
                    <h2 className='h2'>Log in</h2>
                        <div className="form_input">
                            <label htmlFor="email">Patient Demographics</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder="Enter patient's details" />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={loginuser}>Login</button>

                        <div className='help'>

                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink> </p>
                        <p className='forgotpwd'>Forgot Password  <NavLink to="/password-reset">Click Here</NavLink> </p>
                   </div>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Login