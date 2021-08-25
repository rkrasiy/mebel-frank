import LinkWrapper from "../ui/input/linkwrapper/linkwrapper";
import  { useRouter } from "next/router";

export default function Menu ( ){
  const router = useRouter()
  const pages = [
    {href: "/", title: "Home"},
    {href: "/admin", title: "Admin"}
  ]

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