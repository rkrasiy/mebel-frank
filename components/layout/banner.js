import classes from "./banner.module.css";

export default function Banner(props){
  return (
    <div className={classes.banner}>
        <div className={classes.image}>
          <img src={props.img} 
            alt="banner image" />
        </div>
        <div className={classes.content}>
          <p className={classes['page-subtitle']}>{props.subtitle}</p>
          <h1 className={classes['page-title']}>{props.title}</h1>
        </div>
      </div>
  )
}