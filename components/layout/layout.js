import { Fragment } from "react";
import { signOut, useSession } from "next-auth/client";

export default function Layout(props){
  const [ session, loading ] = useSession();

  function logoutHandler(){
    signOut()
  }

  return (
    <Fragment>
      <header>
        <div>Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
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