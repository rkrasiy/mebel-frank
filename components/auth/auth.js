import Input from "../ui/input/input"
import { Fragment, useRef, useState } from "react";
import { signIn } from 'next-auth/client'


export default function Auth(){
  const [ isLogin, setIsLogin ] = useState(false)
  const emailInputRef = useRef();
  const pswInputRef = useRef();


  async function authHandler(event){
    event.preventDefault();


    const email = emailInputRef.current.value;
    const psw = pswInputRef.current.value;

    if(isLogin){
      console.log("LOGIN")
      // const result = await signIn('credentials', { 
      //   redirect: false,
      //   email: email,
      //   password: psw
      // });
    }else{
      console.log("Register")

    }

    

    console.log("auth: ", email,psw)
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
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            id="psw"
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