import classes from './dashboard-header.module.css';
import Logotipo from '../../layout/logotipo';
import { signOut } from 'next-auth/client';
import Link from 'next/link';
export default function DashboardHeader() {
  return <header className={classes.header}>
    <div className={classes.wrapper}>
      <Logotipo />
      <div className={classes.buttons}>
        <Link href='/'>Web</Link>
        <button onClick={signOut}>Log out</button>
      </div>
    </div>
  </header>
}