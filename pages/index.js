import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Form from '../pcomponents/form'
import Todo from '../pcomponents/todo'
import Button from '../pcomponents/button'
import Keypad from '../pcomponents/keypad'
import Transition from '../pcomponents/transition'
import TodoFun from '../pcomponents/todoFun'
import ElizaBot from '../pcomponents/eliza'
import Gallery from '../pcomponents/gallery'
import Links from '../pcomponents/Links'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Links />
        </div>
      </main>

      {/* <main className={styles.main}>
        <div className={styles.grid}>
          <Button />
        </div>
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
