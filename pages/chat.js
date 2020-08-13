import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Chat() {

    useEffect(() => {
        document.getElementById("first-message").style.display = "block"
    })

    return (
        <div>
            <div>
                <div className={styles.firstMessage} id="first-message">
                    <p>I thought this article was interesting!</p>
                </div>

                <div className={styles.secondMessage}>
                    <p>So did I!</p>
                </div>
            </div>


            <form>
                <textarea>Hello! I am filler text. Nice to meet you!</textarea>
                <button onClick={useEffect}>Send</button>
            </form>
        </div>
    )
}