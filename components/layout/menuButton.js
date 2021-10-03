export default function MenuButton (props){
  return  <button onClick={props.clicked} 
    className={`menu-button${props.className}`}>
    <span></span>
    <span></span>
    <span></span>
  </button>
} 