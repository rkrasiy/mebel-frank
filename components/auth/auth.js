import { Fragment, useRef, useState } from "react";
import { signIn } from 'next-auth/client'
import  Link from "next/link";
import classes from "./auth.module.css";


export default function Auth( props ){
  const adminer = {
    title: "Web адміністратор",
    button: "Вхід",
    cancel: "Відмінити",
    userName:{
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
  const [ inputPasswordType, setInputPasswordType ] = useState("password")
  const userNameInputRef = useRef();
  const pswInputRef = useRef();
  let btnShowPasswordClass = classes.password;
  if(inputPasswordType == "text"){
    btnShowPasswordClass = `${classes.password} ${classes.active}`
  }
  async function authHandler(event){
    event.preventDefault();
    setErrorText("");
    const userName = userNameInputRef.current.value;
    const password = pswInputRef.current.value;
    
    const result = await signIn('credentials', { 
      redirect: false,
      userName: userName,
      password: password
    });

    if(result.error){
      setErrorText(adminer.error.inputValue)
      return
    }else{
      props.loggedIn(userName)
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
       <form onSubmit={authHandler} className={classes.auth}>
        <div className={classes.field}>
          <label htmlFor="userName">{adminer.userName.text}</label>
          <input
            type="text"
            id="userName"
            placeholder={adminer.userName.placeholder}
            required
            ref={userNameInputRef}
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="password">{adminer.password}</label>
          <input
            type={inputPasswordType}
            id="password"
            required
            placeholder="*****"
            ref={pswInputRef}
          />
          <button onClick={showPassword} className={btnShowPasswordClass}>
          </button>
        </div>
        <div className={classes['field-buttons']}>
          <button type="submit" className={`${classes.button} ${classes.login}`}>
            <span>{adminer.button}</span>
          </button>
          <Link href="/"><a className={`${classes.button} ${classes.cancel}`}><span>{adminer.cancel}</span></a></Link>
        </div>
      </form>
    </Fragment>
   
  )
}