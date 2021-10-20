import { useState } from "react";
import ModalButton from "./modal-button";

export default function Modal(props) {
  const { open, clicked } = props;

  let btnClasses = '';
  let content = '';

  function clickHander(event) {
    event.preventDefault();
    let opened = false;
    if (!open) {
      document.body.className = "open-modal";
      opened = true
    } else {
      document.body.classList.remove("open-modal")
    }
    clicked(opened)
  }

  if (open) {
    btnClasses = " close-btn";
    content = (
      <div className='content'>
        {props.children}
      </div>
    )

  }

  return (
    <div className='modal'>
      <ModalButton clicked={clickHander} className={btnClasses} />
      {content}
    </div>
  )
}