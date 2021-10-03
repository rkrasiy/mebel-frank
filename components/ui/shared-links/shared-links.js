import ShLink from "./sh-link";
import classes from "./sharedlinks.module.css"
export default function SharedLinks(){

  const links = [
    {title: "facebook", href:"https://www.facebook.com"},
    {title: "twitter", href:"https://www.twitter.com"},
    {title: "youtube", href:"https://www.youtube.com"},
    {title: "instagram", href:"https://www.instagram.com"},
    {title: "linkedin", href:"https://www.linkedin.com"}
  ]

  let content = links.map( item => {
    return <li key={item.title} className={classes.shlink}>
        <ShLink href={item.href} className={classes[item.title]} />
      </li>
  })

  return (
  
      <ul className={classes.sharedlinks}>
        {content}
      </ul>

  )
}