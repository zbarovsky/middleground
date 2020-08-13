import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Chat() {

    // useEffect(() => {
    //     document.getElementsByClassName("firstMessage").styles.display = "block"
    // }, [])

    return (
        <div>

            <div className={styles.firstMessage}>
                <p>I thought this article was interesting!</p>
            </div>

            <div className={styles.secondMessage}>

            </div>

            <form>
                <textarea>Hello! I am filler text. Nice to meet you!</textarea>
                <button onClick={useEffect}>Send</button>
            </form>
        </div>
    )
}