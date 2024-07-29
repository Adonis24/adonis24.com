import styles from "./style.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Top({ country }) {
  const { data: session } = useSession();
  const [visible, setVisible] = useState(false);
  if (session) {
  return (
    
   /* 
    <div >
      <div >
     
        <ul className="nav-link">
          <li
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          >
            {session ? (
              <li className={styles.li}>
                <div className={styles.flex}>
                  
                  <span>{session?.user?.name}</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Личный кабинет</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
    */


    
      
          <>
            Signed in as {session.user.email} <br />
            <Link href="#signOut" className="nav-link">Выйти</Link>
           
          </>
        )
      } else {
      return (
        <>
       
          <Link href="/signin"  onSubmit={() => signIn()} className="nav-link">Войти</Link>
         
        </>
      )
    }
  }

 /* 
 onClick={() => signIn() 
 onClick={() => signOut()
     <RiAccountPinCircleLine />
  */
