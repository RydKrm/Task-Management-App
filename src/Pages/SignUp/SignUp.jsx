    import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {TEInput, TERipple} from 'tw-elements-react';
    
    const SignUp = () => {
    //state 
    const [user,setUser] = useState({});

    //function 
    const handleInput = (e)=>{
        setUser(user=>({...user,[e.target.name]:e.target.value}));
    }

  const handleSubmit = () => {
  console.log("user info ", user);
  let prev = localStorage.getItem('ibos-user');
  let prevData = prev ? JSON.parse(prev) : [];
  let userId = prevData.length;
  setUser(user=>({...user,'userId':userId}));
  let newValue = [...prevData, user];
  console.log('new user', newValue);
  localStorage.setItem('ibos-user', JSON.stringify(newValue));
}


        return (
           <section className="h-screen max-w-max mx-auto">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 hidden md:block">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 shadow-xl p-5">
            <h2 className="text-3xl text-black mb-5 mt-5 md:mt-0">Sign up Form </h2>
            <form>
                 <TEInput
                type="text"
                placeholder='User Name '
                size="lg"
                className="mb-6 h-10 border border-gray-300 ps-3"
                name='name'
                onBlur={handleInput}
              ></TEInput> 
               <TEInput
                type="text"
                placeholder='You Bio'
                size="lg"
                className="mb-6 h-10 border border-gray-300 ps-3"
                 name='bio'
                onBlur={handleInput}
              ></TEInput>

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
                    Signup
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
        );
    };
    
    export default SignUp;