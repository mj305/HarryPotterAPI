import React, { useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

import Footer from '../components/FooterComponent';
import NavBarComponent from '../components/NavBarComponent';

const SignUp = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
 
  const history = useHistory()

  /* useEffect(() => {
    if (props.user) {
      history.push("/allcharacters")
    } 
  }, []) */

  const onSubmit = (data, event) => {
    axios({
      method: "post",
      url: "http://localhost:4000/signUp",
      data,
    }).then((result) => {
      console.log(result)
      toast(result.data.message)
      event.target.reset()
    }).catch((error) => {
      console.log(error)
    })
  };
 
  return (
    <>
        <div>
          <NavBarComponent user={props.user} />
        </div>

            <div className="sign-up-page-container" >

                <div className="sign-up-page-wrapper">
                    <div className="sign-up-header-wrapper">
                      <h1 className="sign-up-header">Sign-Up</h1>
                    </div>

                    <div className="sign-up-form-container">
                        <form onSubmit={handleSubmit(onSubmit)} > 
                            <div className="sign-up-page-form-group" >
                                <label>Name *</label>
                                <input name="name" autoFocus="autofocus" ref={register({ required: true })} type="text"/>
                            </div>
                            {errors.name && <span>This field is required</span>}

                            <div className="sign-up-page-form-group" >
                                <label>Email *</label>
                                <input name="email" autoFocus="autofocus" ref={register({ required: true })} type="email"/>
                            </div>
                            {errors.email && <span>This field is required</span>}

                            <div className="sign-up-page-form-group" >
                                <label>Password *</label>
                                <input className="" name="password" type="password" ref={register({ required: true })}/>
                                <p>(what is the condition for the password?)</p>
                            </div> 
                            {errors.password && <span>This field is required</span>}

                            <div  className="sign-up-page-form-group" >
                                <label>Password Confirmation *</label>
                                <input type="password" name="passwordConfirmation" />
                            </div>

                            <div>
                                <div className="sign-up-button-wrapper" >
                                    <button type="submit" className="sign-up-button"> Sign-Up </button>
                                </div>
                            </div>

                            <div className="sign-up-page-log-in-button-wrapper">
                               <Link to="/login" >Login </Link>
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

export default SignUp