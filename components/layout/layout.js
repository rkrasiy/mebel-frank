import { Fragment } from "react";
import { signOut, useSession } from "next-auth/client";
import Menu from "./menu"

export default function Layout(props){
  const [ session, loading ] = useSession();

  function logoutHandler(){
    signOut()
  }

  return (
    <Fragment>
      <header>
        <div>Logo</div>
        <Menu/>
        <div>
        {session && (<p>{session.user.email}</p>) }
        {session && (<button onClick={logoutHandler}>Log Out</button>)}
        </div>
      </header>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </Fragment>
  )
}