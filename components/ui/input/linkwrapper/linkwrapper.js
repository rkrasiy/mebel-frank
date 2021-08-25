import Link from "next/link";

export default function LinkWrapper(props){
  return <Link href={props.href}>
          <a className={props.className}
              title={props.title}
              id={props.id}>
              {props.children}
            </a>
          </Link>
}