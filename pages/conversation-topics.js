
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'

function FirstTopic() {
  return (
    <Link href="/schools-reopening">
        <div className={styles.card, styles.school}>
        <h3>
            Schools reopening
        </h3>
        </div>
    </Link>
  )
}

function SecondTopic() {
  return (
    <Link href="/masks">
        <div className={styles.card, styles.mask}>
        <h3>
            To wear or not to wear
        </h3>
        </div>
    </Link>
  )
}

function ThirdTopic() {
  return (
    <Link href="/black-lives-matter">
        <div className={styles.card, styles.blm}>
        <h3>
            BLM
        </h3>
        </div>
    </Link>
  )
}

function FourthTopic() {
  return (
    <Link href="/vaccine">
        <div className={styles.card, styles.vaccine}>
        <h3>
            COVID-19 Vaccine
        </h3>
        </div>
    </Link>
  )
}

function FifthTopic() {
  return (
    <Link href="/voting">
        <div className={styles.card, styles.voting}>
        <h3>
            Mail-in voting
        </h3>
        </div>
    </Link>
  )
}

function SixthTopic() {
  return (
    <Link href="/reproductive-rights">
        <div className={styles.card, styles.reproductive}>
        <h3>
            Reproductive rights
        </h3>
        </div>
    </Link>
  )
}
function SeventhTopic() {
  return (
    <Link href="/healthcare">
        <div className={styles.card, styles.healthcare}>
        <h3>
            Healthcare
        </h3>
        </div>
    </Link>
  )
}
function EighthTopic() {
  return (
    <Link href="/social-disparity">
        <div className={styles.card, styles.social}>
        <h3>
            Social disparity
        </h3>
        </div>
    </Link>
  )
}
function NinthTopic() {
  return (
    <Link href="/climateScience">
        <div className={styles.card, styles.climate}>
        <h3>
            Climate science
        </h3>
        </div>
    </Link>
  )
}
function TenthTopic() {
  return (
    <Link href="/gun-rights">
        <div className={styles.card, styles.gun}>
        <h3>
            Gun rights
        </h3>
        </div>
    </Link>
  )
}
function EleventhTopic() {
  return (
    <Link href="/election">
        <div className={styles.card, styles.election}>
        <h3>
            2020 election
        </h3>
        </div>
    </Link>
  )
}

export default function TopicOfConversation() {
  return (
    <div className={styles.container}>
      <Navbar />
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <FirstTopic />
                    <FourthTopic />
                    <SeventhTopic />
                    <TenthTopic />
                </div>
                <div class="col-sm">
                    <SecondTopic />
                    <FifthTopic />
                    <EighthTopic />
                    <EleventhTopic />
                </div>
                <div class="col-sm">
                    <ThirdTopic />
                    <SixthTopic />
                    <NinthTopic />
                </div>
            </div>
        </div>
    </div>
  )
}