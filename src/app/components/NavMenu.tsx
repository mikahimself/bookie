"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./navmenu.module.css";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export function NavMenu() {
  return (

    <nav className={styles.navMenu}>
    <ul className={styles.navMenuList}>
      <li>My Books</li>
      <li>
        <AuthButton />
      </li>
    </ul>
  </nav>
  )
}