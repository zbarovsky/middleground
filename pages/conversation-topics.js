import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function FirstTopic() {
  return (
    <Link href="/reopening-schools">
        <div className={styles.card}>
        <h2>
            Reopening schools
        </h2>
        </div>
    </Link>
  )
}

function SecondTopic() {
  return (
    <Link href="/gun-reform">
        <div className={styles.card}>
        <h2>
            Gun reform
        </h2>
        </div>
    </Link>
  )
}

function ThirdTopic() {
  return (
    <Link href="/healthcare">
        <div className={styles.card}>
        <h2>
            Healthcare
        </h2>
        </div>
    </Link>
  )
}

function FourthTopic() {
  return (
    <Link href="/economic-racism">
        <div className={styles.card}>
        <h2>
            Economic racism
        </h2>
        </div>
    </Link>
  )
}

function FifthTopic() {
  return (
    <Link href="/reproductive-rights">
        <div className={styles.card}>
        <h2>
            Reproductive rights
        </h2>
        </div>
    </Link>
  )
}

function SixthTopic() {
  return (
    <Link href="/unions">
        <div className={styles.card}>
        <h2>
            Unions
        </h2>
        </div>
    </Link>
  )
}

export default function TopicOfConversation() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Topics of Conversation
        </h1>

        <p className={styles.description}>
          Choose a topic<br/>Read an article or watch a video<br/>Discuss!
        </p> */}

        <div className={styles.topic}>
            <FirstTopic />
            <SecondTopic />
            <ThirdTopic />
        </div>
        <div className={styles.topic}>
            <FourthTopic />
            <FifthTopic />
            <SixthTopic />
        </div>
        
      </main>
    </div>
  )
}