import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function FirstTopic() {
  return (
    <div>
      <h2>
        <Link href="/reopening-schools">
          Reopening schools
        </Link>
      </h2>
    </div>
  )
}

function SecondTopic() {
  return (
    <div>
      <h2>
        <Link href="/gun-reform">
          Gun reform
        </Link>
      </h2>
    </div>
  )
}

function ThirdTopic() {
  return (
    <div>
      <h2>
        <Link href="/healthcare">
          Healthcare
        </Link>
      </h2>
    </div>
  )
}

function FourthTopic() {
  return (
    <div>
      <h2>
        <Link href="/economic-racism">
          Economic racism
        </Link>
      </h2>
    </div>
  )
}

function FifthTopic() {
  return (
    <div>
      <h2>
        <Link href="/reproductive-rights">
          Reproductive rights
        </Link>
      </h2>
    </div>
  )
}

function SixthTopic() {
  return (
    <div>
      <h2>
        <Link href="/unions">
          Unions
        </Link>
      </h2>
    </div>
  )
}

export default function TopicOfConversation() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Topics of Conversation
        </h1>

        <p className={styles.description}>
          Choose a topic<br/>Read an article or watch a video<br/>Discuss!
        </p>

        <FirstTopic />
        <SecondTopic />
        <ThirdTopic />
        <FourthTopic />
        <FifthTopic />
        <SixthTopic />
        
      </main>

      <footer className={styles.footer}>
        <div>
          <h3>
            MiddleGround
          </h3>
          <p>
            Created by Joe, Johnii, Thomas, Caitlin, Enrique, Karina, and Zachary
          </p>
        </div>
      </footer>
    </div>
  )
}