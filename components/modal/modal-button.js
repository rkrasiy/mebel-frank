export default function ModalButton(props) {
  return <button onClick={props.clicked}
    className={`modal-btn${props.className}`}>
    <span></span>
    <span></span>
    <span></span>
  </button>
}