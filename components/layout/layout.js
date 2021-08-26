import { Fragment, useState } from "react";
import { signOut, useSession } from "next-auth/client";
import Menu from "./menu";
import Link from "next/link";

export default function Layout(props){
  const [ session, loading ] = useSession();
  const [ menuOpen, setMenuOpen ] = useState(false);
  function logoutHandler(){
    signOut()
  }

  function openMenuHandler(event){
    event.preventDefault();    
    if(menuOpen){
      document.body.style = "overflow: hidden;"
    }
    setMenuOpen(!menuOpen)
  }

  let menu = (
    <div className="modal-menu">
     <div className="wrapper">
     <div className="close-button-menu">
        <button onClick={openMenuHandler} className={`menu-button${menuOpen ? " active" : ""}`}><span></span><span></span><span></span></button>
      </div>
      <Menu />
      <div>
        Contact
      </div>
     </div>
    </div>
  )
  return (
    <Fragment>
      <header>
        <div className="wrapper">
          <div>Logo</div>
          <div className="button-wrapper">
            <Link href="#">Зв'язатись</Link>
            <Link href="#">Галерея</Link>
            <div>UA</div>
            <button onClick={openMenuHandler} className={`menu-button${menuOpen ? " active" : ""}`}><span></span><span></span><span></span></button>
            {menuOpen && menu} 
          </div>
          
          {/* <div>
          {session && (<p>{session.user.email}</p>) }
          {session && (<button onClick={logoutHandler}>Log Out</button>)}
          </div> */}
        </div>
      </header>
      <main>
        <div id="main-content" className="wrapper">
          {props.children}
        </div>
      </main>
      <footer>
        <div className="wrapper">
          Footer
        </div>
      </footer>
    </Fragment>
  )
}