import classes from "./banner.module.css";

export default function Banner(props){
  return (
    <div className={classes.banner} style={{backgroundImage: `url(${props.img})`}}>
        <div className={classes.content}>
          <p className={classes['page-subtitle']}>{props.subtitle}</p>
          <h1 className={classes['page-title']}>{props.title}</h1>
        </div>
      </div>
  )
}