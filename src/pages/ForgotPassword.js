import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';


import Footer from '../components/FooterComponent'
import NavBarComponent from '../components/NavBarComponent'


const ForgotPassword = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, event) => {
    axios({
      method: "post",
      url: "http://localhost:4000/forgotpassword",
      data,
    }) .then((result) => {
      console.log(result)
        toast(result.data.message)
        event.target.reset()
    }).catch((error) => {
      console.log(error)
      toast("Ups... Something went wrong!")
    })
}


  return (
    <>
        <div>
          <NavBarComponent/>
        </div>



            <div className="forgot-password-page-container" >

                <div className="forgot-password-page-wrapper">
                    <div className="forgot-password-header-wrapper">
                      <h1 className="forgot-password-header">Reset Password</h1>
                    </div>

                    <div className="forgot-password-form-container">
                        <form onSubmit={handleSubmit(onSubmit)} > 

                            <div className="forgot-password-page-form-group" >
                                <label>Email *</label>
                                <input name="email" autoFocus="autofocus" ref={register({ required: true })} type="email"/>
                            </div>
                            {errors.email && <span>This field is required</span>}

                           

                            <div>
                                <div className="forgot-password-button-wrapper">
                                    <button type="submit" className="forgot-password-button"> Reset </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        <div className="sign-up-page-footer" >
          <Footer/>
        </div>
    </>
  ) 
}

export default ForgotPassword