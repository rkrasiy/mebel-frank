import { useRouter } from "next/router";

export default function MenuWeb(props) {
  const router = useRouter();
  const { className, clicked } = props;

  const pages = [
    { href: "/", title: "Головна" },
    { href: "/order", title: "Замовити" },
    { href: "/kitchens", title: "Кухні" },
    { href: "/wardrobes", title: "Шафи-купе" },
    { href: "/about", title: "Про нас" },
    { href: "/admin", title: "Адмінка" }
  ]

  function handleClick(e, path) {
    e.preventDefault();

    clicked(false);
    router.push(path)
  }

  let menu = pages.map(item => {
    let className = "item"
    if (router.pathname == item.href)
      className += " active"

    return (
      <li
        key={item.title}
        className={className}
        onClick={(e) => handleClick(e, item.href)}
        title={item.path}> {item.title} </li>
    )
  })

  return (
    <ul className={`menu ${className}`}>{menu}</ul>
  )
}