import React from 'react';
import styles from './style.module.scss'
import Ad from './Ad'
import Top  from './Top'
import Navigation from './Navigation'
import Head from 'next/head';
import Landing from './Landing'
import 'bootstrap/dist/css/bootstrap.css'
import session from 'redux-persist/lib/storage/session';



const Header = () => {

    return (
    <>
       <Navigation />
       
       <Landing />
      </> 
    );
}

export default Header;
