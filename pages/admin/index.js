import Auth from "../../components/auth/auth"
import { Fragment } from "react"
export default function Admin() {
  // const user = localStorage.user
  // console.log("USER:", user)


  return (
    <Fragment>
      <h1>Adminer</h1>
      <Auth />
    </Fragment>
  )
}