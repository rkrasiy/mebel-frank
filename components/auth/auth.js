import Input from "../ui/input/input"
import { Fragment, useRef, useState } from "react";
import { signIn } from 'next-auth/client'


export default function Auth(){
  const [ isLogin, setIsLogin ] = useState(false)
  const emailInputRef = useRef();
  const pswInputRef = useRef();

  async function createUser(email, password){
    const response = await fetch('/api/auth/signup',{
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if(!response.ok){
      throw new Error( data.message || 'Something went wrong!');
    }

    return data
  }

  async function authHandler(event){
    event.preventDefault();


    const email = emailInputRef.current.value;
    const password = pswInputRef.current.value;

    if(isLogin){
      const result = await signIn('credentials', { 
        redirect: false,
        email: email,
        password: password
      });
      if(!result.error){

      }

      console.log("Rs: ", result)
    }else{
      try{
        const result = await createUser( email, password)
        console.log(result)
      }catch(error){
        console.log(error)
      }
    }

    

    console.log("auth: ", email,password)
  }

  function clickHandler(event){
    event.preventDefault();
    const logg = isLogin
    setIsLogin(!logg)
  }

  let title = isLogin ? "LogIn" : "SignIn"

  return (
    <Fragment>
      <h1>{title}</h1>
       <form onSubmit={authHandler}>
        <div className="field">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="*****"
            ref={pswInputRef}
          />
        </div>
        <button>Enter</button>
        <button onClick={clickHandler}>{isLogin ? "SignIn": "LogIn"}</button>
      </form>
    </Fragment>
   
  )
}