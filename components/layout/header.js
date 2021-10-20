import { useState } from "react";
import Link from "next/link";

import Menu from "../menu/menu";
import Logotipo from "./logotipo";
import SharedLinks from "../ui/shared-links/shared-links";
import Modal from "../modal/modal";

export default function Header(props) {
  const [openModal, setOpenModal] = useState(false);

  function modalClickHandler(boolean) {
    setOpenModal(boolean)
  }

  return (
    <header className={props.className}>
      <div className="wrapper">
        <Logotipo />
        <div className="links-content">
          <Link href="#">Зв'язатись</Link>
          <Link href="#">Галерея</Link>
          <Modal clicked={modalClickHandler} open={openModal}>
            <Menu className='menu-main' clicked={modalClickHandler} />
            <SharedLinks />
          </Modal>
        </div>
      </div>
    </header>
  )
}