import Auth from "../../components/auth/auth";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

// import { signOut, useSession } from "next-auth/client";
// import { useState } from "react";
// import { Fragment } from "react";
// import Head from "next/head";
// import Logotipo from "../../components/layout/logotipo";
// import AdminMenu from "../../components/adminer/admin-menu/admin-menu";

export default function Admin() {
  const router = useRouter();
  const [ isLoading, setIsLoading] = useState(true);

  useEffect( () =>{
    getSession().then( session => {
      if(session) {
        router.replace("/admin/dashboard")
      }else{
        setIsLoading(false)
      }
    })
  }, [router])

  if(isLoading){
    return <div className="loading">Loading...</div>
  }
  
  return <Auth />
  // const [ session, loading ] = useSession();
  
  // const [ pageContent, setPageContent] = useState("Articulos");
  // let loggedButtons = null;
  // let content = null;
  
  // const [ menu, setMenu ] = useState([
  //   {id: "a1", title: "Articulos" },
  //   {id: "b2", title: "Entidades" },
  //   {id: "c3", title: "Galery" },
  //   {id: "d4", title: "Events" },
  //   {id: "f5", title: "Email" }
  // ]);

  // function clickHandler(id){
  //   let a = menu;
  //   a.map( item => { 
  //     item.active = false
  //     if(item.id === id){
  //       setPageContent(item.title);
  //       item.active = true 
  //     }
              
  //   });
    
  //   setMenu([...a])
  // }

  // if(session){
  //   loggedButtons = (
  //       <div className="button-wrapper">
  //         <p>{session.user.email}</p>
  //         <a className='signout' title="Вийти" onClick={()=>signOut()}><i></i></a>
  //       </div>
  //   )
  //   content = (
  //       <div className="adminer-content">
  //         <aside>
  //           <AdminMenu 
  //             clicked={clickHandler} 
  //             menu={menu}/>
  //           </aside>
  //         <section>{pageContent}</section>
  //       </div>      
  //   )
  // }else{
  //   content = (
  //     <Auth />
  //   )
  // }

  // return (
  //   <Fragment>
  //     <Head>
  //       <title>Адмінка</title>
  //     </Head>
  //     <header className="adminer">
  //       <div className="wrapper">
  //        <Logotipo />
  //         {loggedButtons}
  //       </div>
  //     </header>       
  //     <main>
  //       {/* {<div className="adminer-content">
  //         <aside>
  //           <AdminMenu 
  //             clicked={clickHandler} 
  //             menu={menu}/>
  //           </aside>
  //         <section>{pageContent}</section>
  //     </div>} */content}
  //     </main>
  //     <footer>
  //       <div className="wrapper">Admin footer</div>
  //     </footer>
  //   </Fragment>
  // )
}