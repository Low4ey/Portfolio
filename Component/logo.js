import Link from 'next/link'
import Image from "next/image"
import React from 'react'
import styles from "../styles/nav.module.css"


const Logo = () => {
  return (
    <div className={styles.logo}>
                <Link href="https://www.instagram.com/yamate_ajeet/" target="_blank" ><a  target="_blank" className={styles.png}><Image src="/insta.svg" alt="" height={30} width={30}></Image></a></Link>
                <Link href="https://www.linkedin.com/in/ajeet-kumar-639793178/" ><a target="_blank" className={styles.png}><Image src="/linked.svg" alt="" height={30} width={30}></Image></a></Link>
                <Link href="https://discords.com/bio/p/itsmea2z"><a target="_blank" className={styles.png}><Image src="/discord.svg" alt="" height={30} width={35}></Image></a></Link>
                <Link href="https://github.com/Low4ey"><a target="_blank" className={styles.png}><Image src="/git.svg" alt="" height={30} width={30}></Image></a></Link>
            </div>
  )
}

export default Logo;