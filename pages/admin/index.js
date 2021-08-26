import Auth from "../../components/auth/auth"
import { Fragment } from "react";
import Head from "next/head";
export default function Admin() {
  // const user = localStorage.user
  // console.log("USER:", user)


  return (
    <Fragment>
      <Head>
        <title>Адмінка</title>
      </Head>
      <h1>Адмінка</h1>
      <Auth />
    </Fragment>
  )
}