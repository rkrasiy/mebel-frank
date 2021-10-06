import { Fragment } from "react";
import  { useRouter } from "next/router";

import Menu from "./menu";
import Link from "next/link";
import Logotipo from "./logotipo";

export default function Layout(props){
  const router = useRouter();
console.log("Layout")
  if(router.pathname === "/admin"){
    return <Fragment>
      {props.children}
    </Fragment>
  }else{
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
}