import classes from './dashboard-menu.module.css';

export default function DashboardMenu(props) {

  const json = [
    { id: 'a1', title: 'Article' },
    { id: 'a1', title: 'Entity' },
    { id: 'a1', title: 'Galery' },
    { id: 'a1', title: 'Events' },
    { id: 'a1', title: 'States' }
  ]

  let menu = json.map(item => {
    return <li key={item.id}>
      {item.title}
    </li>
  })
  return <div className={classes.menu}>
    {menu}
  </div>
}