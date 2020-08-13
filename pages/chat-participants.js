import styles from '../styles/Home.module.css'

export default function Participants() {
    return (
        <>
            <div className={styles.participants}>
                <img src="avatarNew.png" />
            </div>
            <p className="participantNames">Josefina</p>
            <p className="participantDescription">I don't think schools should reopen.</p>
            <div className={styles.participants}>
                <img src="/secondAvatar.png" />
            </div>
            <p className="participantNames">Karim</p>
            <p className="participantDescription">Our kids need to be in school!</p>
        </>
    )
}