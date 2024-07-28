import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";



import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import { Raleway, IBM_Plex_Sans } from "@next/font/google";
// add bootstrap css
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const raleway = Raleway({ subsets: ["latin"] });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
        }
      `}</style>
      <Head>
        <title> Shopee</title>
        <meta
          name="discription"
          content="on-line magazin for shoping goods"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SessionProvider session={session}>
      
 
            <Component {...pageProps} />
       
  
      </SessionProvider>
    </>
  );

  /* 
  import store from "../styles/utils/store";
  import { persistStore } from "redux-persist";
   <Provider store={store}>
   const persistor = persistStore(store);
   import { PersistGate } from "redux-persist/integration/react";
            <PersistGate loading={null} persistor={persistor}>
   */
}
