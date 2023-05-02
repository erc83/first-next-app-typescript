import { FC } from "react";

import Head from "next/head";

import styles from './MainLayout.module.css'
import Navbar from "../Navbar";



export const MainLayout: FC<any> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={styles.main}>

            { children }
            {/* <div className={styles.description}>
              <div>
                Get started by editing&nbsp;
                <code className={styles.code}>src/app/page.js</code>
              </div>
           
            </div> */}

          </main>
          
        </div>
      )
}

