import Auth from "../../components/auth/auth"
import { Fragment, useState } from "react";
import Head from "next/head";

export default function Admin() {
  const [ isLogin, setIsLogin ] = useState(false);
  let user = "";

  if (typeof window !== 'undefined') {
    user = localStorage.getItem('user');
  }
  

  function loginHandler(user){
    localStorage.setItem('user', user)
    setIsLogin(true)
    return
  }

  return (
    <Fragment>
      <Head>
        <title>Адмінка</title>
      </Head>
      <h1>Адмінка</h1>
      { !isLogin && <Auth loggedIn={loginHandler} /> }
      <p>A1toM0vl</p>
    </Fragment>
  )
}