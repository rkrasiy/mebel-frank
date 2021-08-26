import LinkWrapper from "../ui/input/linkwrapper/linkwrapper";
import  { useRouter } from "next/router";

export default function Menu ( ){
  const router = useRouter();
  let pages = [
    {href: "/", title: "Головна"}
  ]

  if(router.pathname === "/admin"){
    pages = [...pages,{href: "/admin", title: "Адмінка"}]
  }else{
    pages = [
      ...pages,
      {href: "/galery", title: "Galery"},
      {href: "/citchens", title: "Citchens"},
      {href: "/about", title: "About"},
      {href: "/contact", title: "Contact"},
      {href: "/admin", title: "Адмінка"}
    ]
  }

  let menu = pages.map( item => {
    let className = "item"
    if(router.pathname == item.href)
      className+= " active"
    
    return <li key={item.title} className={className}>
        <LinkWrapper href={item.href} 
        title={item.title}
        >{item.title}</LinkWrapper>
      </li>
  })

  return <nav>
    <ul className="menu">{menu}</ul>
  </nav>
}