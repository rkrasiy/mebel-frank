import { Fragment, useRef, useState } from "react";
import { signIn } from 'next-auth/client'
import  Link from "next/link";
import classes from "./auth.module.css";


export default function Auth(){
  const adminer = {
    title: "Web адміністратор",
    button: "Вхід",
    cancel: "Відмінити",
    userEmail:{
      placeholder: "Ім'я",
      text: "Пошта"
    },
    password: "Пароль",
    error: {
      login: "Something went wrong!",
      inputValue: "Ім'я або пароль невірний"
    }
  }

  const [ errorText, setErrorText ] = useState();

  const [ inputPasswordType, setInputPasswordType ] = useState("password");
  
  const [ buttonType, setButtonType ] = useState("submit");

  const userEmailInputRef = useRef();
  const pswInputRef = useRef();
  
  let btnShowPasswordClass = classes.password;
  
  if(inputPasswordType == "text"){
    btnShowPasswordClass = `${classes.password} ${classes.active}`
  }

  async function submitHandler(event){
    event.preventDefault();
    setErrorText("");
    setButtonType("button");

    const userEmail = userEmailInputRef.current.value;
    const password = pswInputRef.current.value;
    
    const result = await signIn('credentials', { 
      redirect: false,
      email: userEmail,
      password: password
    });

    if(result.error){
      setButtonType("submit");
      setErrorText(adminer.error.inputValue)
    }
    return 
  }

  function showPassword(e){
    e.preventDefault()
    if(inputPasswordType == "password")
      setInputPasswordType("text");
    else
      setInputPasswordType("password")
  }

  return (
    <Fragment>
       <p>{errorText}</p>
       <form onSubmit={submitHandler} className={classes.auth}>
        <div className={classes.field}>
          <label htmlFor="email">{adminer.userEmail.text}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="current-email"
            ref={userEmailInputRef}   
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="password">{adminer.password}</label>
          <input
            type={inputPasswordType}
            id="psw"
            required
            name="password"
            autoComplete="current-password"
        
            ref={pswInputRef}
          />
          <button 
            onClick={showPassword} 
            className={btnShowPasswordClass}
            tabIndex="-1"
            >
          </button>
        </div>
        <div className={classes['field-buttons']}>
          <button 
            type={buttonType}
            className={`${classes.button} ${classes.login}`}
            >
            <span>{adminer.button}</span>
          </button>
          <Link href="/"><a className={`${classes.button} ${classes.cancel}`}><span>{adminer.cancel}</span></a></Link>
        </div>
      </form>
    </Fragment>
   
  )
}