import { Fragment, useRef, useState } from "react";
import { signIn } from 'next-auth/client'
import  Link from "next/link";

export default function Auth(){
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

  const [ isLogin, setIsLogin ] = useState(false);
  const [ errorText, setErrorText ] = useState();

  let title = isLogin ? "Вхід в адмінку" : adminer.title

  const userNameInputRef = useRef();
  const pswInputRef = useRef();

  async function authHandler(event){
    event.preventDefault();

    const userName = userNameInputRef.current.value;
    const password = pswInputRef.current.value;
    
    const result = await signIn('credentials', { 
      redirect: false,
      userName: userName,
      password: password
    });

    if(!result.error){
      console.log("result",result);
      setIsLogin(true)
      return
    }

    setErrorText(adminer.error.inputValue)
    return 
  }

  return (
    <Fragment>
      <h1>{title}</h1>
       <p>{errorText}</p>
       <form onSubmit={authHandler}>
        <div className="field">
          <label htmlFor="userName">{adminer.userName.text}</label>
          <input
            type="text"
            id="userName"
            placeholder={adminer.userName.placeholder}
            required
            ref={userNameInputRef}
          />
        </div>
        <div className="field">
          <label htmlFor="password">{adminer.password}</label>
          <input
            type="password"
            id="password"
            required
            placeholder="*****"
            ref={pswInputRef}
          />
        </div>
        <button type="submit">{adminer.button}</button>
        <Link href="/">{adminer.cancel}</Link>
      </form>
    </Fragment>
   
  )
}