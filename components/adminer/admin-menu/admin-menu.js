import classes from "./adminmenu.module.css";

export default function AdminMenu(props) {
  const activeItem = props;

  const menu = [
    { id: "a1", title: "Articulos" },
    { id: "b2", title: "Entidades" },
    { id: "c3", title: "Galery" },
    { id: "d4", title: "Events" },
    { id: "f5", title: "Email" }
  ];


  return (
    <ul className={classes.menu}>
      {menu.map(item => {
        return <li
          key={item.id}
          onClick={() => clicked(item.id)}
          className={item.active ? classes.active : null}
        >{item.title}</li>
      })}
    </ul>
  )
}