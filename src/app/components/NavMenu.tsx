"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./navmenu.module.css";
import Link from "next/link";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button className={styles.authButton} onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className={styles.authButton} onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export function NavMenu() {
  const { data: session } = useSession();
  return (

    <nav className={styles.navMenu}>
    <ul className={styles.navMenuList}>
      {session && (
        <li>
          <Link href="/my-books">My Books</Link>
        </li>)}
      <li>
        <AuthButton />
      </li>
    </ul>
  </nav>
  )
}