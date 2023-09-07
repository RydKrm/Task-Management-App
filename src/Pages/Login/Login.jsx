import React from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import {useState} from 'react';
const Login = () => {

    const navigator = useNavigate();
       //state 
    const [user,setUser] = useState({});
    const [message,setMessage] = useState(null);

    //function 
    const handleInput = (e)=>{
        setUser(user=>({...user,[e.target.name]:e.target.value}));
    }

   const handleSubmit = () => {
 // console.log("user info ", user);
  let prev = localStorage.getItem('ibos-user');
  let prevData = prev ? JSON.parse(prev) : [];
  //console.log("user ", user.email, user.password);
  //console.log("prev data ", prevData);
  let userFound = false;
  for (let i = 0; i < prevData.length; i++) {
    const item = prevData[i];
   // console.log("item ", item.email, item.password);
    if (item.email === user.email && item.password === user.password) {
      userFound = true;
      break; 
    }
  }
  if (userFound) {
    localStorage.setItem('ibos-login',JSON.stringify(user));
    navigator('/');
  } else {
    setMessage('Email or Password did not match');
  }
}


    return (
        <section className="h-screen max-w-max mx-auto">
      <div className="h-full">
        
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 hidden md:block">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 shadow-xl p-5">
            <h2 className="text-3xl text-black mb-5 mt-5 md:mt-0">Login Form </h2>
            {message && <p className='text-red-500'>{message}</p>}
            <form>

              <TEInput
                type="email"
                placeholder='Email '
                size="lg"
                className="mb-6 h-10 border border-gray-300 ps-3"
                name='email'
                onBlur={handleInput}
              ></TEInput>

              {/* <!--Password input--> */}
              <TEInput
                type="password"
                className="mb-6 h-10 border border-gray-300 ps-3"
                placeholder='Password'
                size="lg"
                name='password'
                onBlur={handleInput}
              ></TEInput>

              <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>

                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <Link to='/signup' className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Login;