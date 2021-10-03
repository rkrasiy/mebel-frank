import { Fragment, useState } from "react";
import { signOut, useSession } from "next-auth/client";
import Menu from "./menu";
import Link from "next/link";
import Logotipo from "./logotipo";
import Banner from "./banner";
export default function Layout(props){
  const [ session, loading ] = useSession();

  function logoutHandler(){
    signOut()
  }

  return (
    <Fragment>
      <header>
        <div className="wrapper">
          <Logotipo />
          <div className="button-wrapper">
            <Link href="#">Зв'язатись</Link>
            <Link href="#">Галерея</Link>
            <Menu />
          </div>
          
          {/* <div>
          {session && (<p>{session.user.email}</p>) }
          {session && (<button onClick={logoutHandler}>Log Out</button>)}
          </div> */}
        </div>
      </header>
      
      <main>
          {props.children}
      </main>
      <footer>
        <div className="wrapper">
          Footer
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </footer>
    </Fragment>
  )
}