
import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
  const router = useRouter();

  if (router.pathname.indexOf("/admin") !== -1) {
    return <>
      {props.children}
    </>
  } else {
    return (
      <>
        <Header className="fixed" />
        <main>
          {props.children}
        </main>
        <Footer />
      </>
    )
  }
}