import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Participants from './chat-participants'
import Navbar from '../components/navbar'

export default function Chat() {


    // in Home.module.css,
    // i have the display of the first message set to none
    // on click, i want to use useEffect
    // to switch the display to block
    // currently, i think useEffect runs on page render
    // so it immediately overwrites my CSS rule
    useEffect(() => {
        document.getElementById("first-message").style.display = "block"
    })

    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <Participants />
                        <Participants />
                    </div>
                    <div class="col-lg .offset-md-4">
                        <div className={styles.firstMessage} id="first-message">
                            <p>I thought this article was interesting!</p>
                        </div>

                        <div className={styles.secondMessage}>
                            <p>So did I!</p>
                        </div>


                        <form className={styles.chatbox}>
                            <textarea placeholder="Hello! I am filler text. Nice to meet you!"></textarea>
                            <button onClick={useEffect}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
