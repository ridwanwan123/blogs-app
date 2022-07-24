import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>News | Home</title>
        <meta name="keyword" content="news"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem lorem,sad das asdaj dasd awsa dadsa d</p>
        <p className={styles.text}>Lorem lorem,sad as asdaj dasd awsa dadsa d</p>
        <Link href="/news">
          <a>
            See News
          </a>
        </Link>
      </div>
    </>
  )
}
