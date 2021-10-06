import Auth from "../../components/auth/auth";
import { signOut, useSession } from "next-auth/client";
import { Fragment } from "react";
import Head from "next/head";
import Logotipo from "../../components/layout/logotipo";

export default function Admin() {
  const [ session, loading ] = useSession();

  console.log("Loading: ", loading);
  console.log("Session: ", session)

  return (
    <Fragment>
      <Head>
        <title>Адмінка</title>
      </Head>
      <header className="adminer">
        <div className="wrapper">
         <Logotipo />
          {session && (<div className="button-wrapper">
            <p>{session.user.email}</p>
            <button onClick={()=>signOut()}>Log Out</button>
          </div>)}
        </div>
      </header>       
      <main>
        { !session && <Auth /> }
      </main>
    </Fragment>
  )
}