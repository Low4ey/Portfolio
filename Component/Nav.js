import React from "react";
import styles from "../styles/nav.module.css"
import Link from "next/link"
import Button from "./Button";
import Head from "next/head";

function Nav() {
    return (<>
    <Head>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
    </Head>
        <div className={styles.mainnav}>
            <div className={styles.nav}>
                <ul className={styles.btn}>
                    <Link href="/"><li><a className={styles.item}><Button btn="Home" /></a></li></Link>
                    <Link href="/skills"><li><a className={styles.item}><Button btn="Skills" /></a></li></Link>
                    <Link href="/contact"><li><a className={styles.item}><Button btn="Contact" /></a></li></Link>
                </ul>
            </div>

        </div>
    </>
    )

}

export default Nav;