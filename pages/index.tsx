import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Ad from '../components/header/Ad'


export default function Home() {

  return (
    <>
    <Header />
    <div className={styles.home}>
 
    </div>
    </>
  )
}
