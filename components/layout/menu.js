import  { useRouter } from "next/router";
import { useState } from "react";
import MenuButton from "./menuButton";
import SharedLinks from "../ui/shared-links/shared-links";

export default function Menu ( props ){
  const router = useRouter();
  const [ openMenu, setOpenMenu ] = useState(false);
  let btnClasses = "";
  let content = "";

  let pages = [
    {href: "/", title: "Головна"}
  ]
  
  function buttonHandler(event){
    event.preventDefault();    
    if(!openMenu){
      document.body.className = "open-menu"
    }else{
      document.body.classList.remove("open-menu")
    }
    setOpenMenu(!openMenu)
  }

  function handleClick(e, path){
    e.preventDefault();
    if(openMenu)
      setOpenMenu(false)
    
    router.push(path)
  }

  if(openMenu){
    if(router.pathname === "/admin"){
      pages = [
        ...pages,
        {href: "/admin", title: "Адмінка"}
      ]
    }else{
      pages = [
        ...pages,
        {href: "/order", title: "Замовити"},
        {href: "/citchens", title: "Кухні"},
        {href: "/wardrobes", title: "Шафи-купе"},
        {href: "/about", title: "Про нас"},
        {href: "/admin", title: "Адмінка"}
      ]
    }
    
    let menu = pages.map( item => {
      let className = "item"
      if(router.pathname == item.href)
        className += " active"
      
      return <li key={item.title} className={className} onClick={(e) => handleClick(e, item.href)}>
            {item.title}
        </li>
    })

    btnClasses = " active"
    content = (
      <div className="modal-menu">
        <div className="wrapper">
          <div className="field field-menu">
            <ul className="menu">{menu}</ul>
          </div>
          <div className="field field-submenu">
            <ul><li>Some</li></ul>
          </div>
          <div className="field field-sharelink">
            <SharedLinks />
          </div>
        </div>
      </div>
    )
  }

  return  (
    <nav>
      <MenuButton clicked={buttonHandler} className={btnClasses}/>
      {content}
    </nav>
  )
}