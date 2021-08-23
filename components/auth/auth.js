import Input from "../ui/input/input"
import { useRef, useState } from "react";

export default function Auth(props){
  const emailInputRef = useRef();
  const pswInputRef = useRef();
  const { submited, login } = props


  function authHandler(event){
    event.preventDefault();
    const email = emailInputRef.current.value;
    const psw = pswInputRef.current.value;
    console.log("auth: ", email,psw)
  }

  return (
    <form onSubmit={authHandler}>
        <div className="field">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
        </div>
        <div className="field">
          <label htmlFor="psw">Your Email</label>
          <input
            type="password"
            id="psw"
            placeholder="*****"
            aria-label="Your password"
            ref={pswInputRef}
          />
        </div>
        <button>Enter</button>
      </form>
  )
}