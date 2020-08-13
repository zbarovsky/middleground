import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Participants from './chat-participants'
import Navbar from '../components/navbar'

export default function Chat() {

    function showThirdMessage() {
        console.log("################ TESTS")
        document.getElementById("third-message").style.display = "block"
    }

    // in Home.module.css,
    // i have the display of the first message set to none
    // on click, i want to use useEffect
    // to switch the display to block
    // currently, i think useEffect runs on page render
    // so it immediately overwrites my CSS rule

    // const [showMessage, setShowMessage] = useState(false)

function showMessage(e) {
    e.preventDefault()
    document.getElementById("first-message").style.display = "block"
    setTimeout(Messages(e), 5000)
}

function showThirdMessage() {
    console.log("################ TESTS")
    document.getElementById("third-message").style.display = "block"
}
function Messages(e) {
    e.preventDefault()
    document.getElementById("second-message").style.display = "block"
    setTimeout(showThirdMessage, 5000)
}

    // ["I thought this article was interesting!", "So did I!"]

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
                        <div className={styles.botResponse}>
                            <p>Hello, My name is Tom. I thought the article was interesting. How about you?</p>
                        </div>
                        <div className={styles.firstMessage} id="first-message">
                            <p>I thought this article was interesting!</p>
                        </div>
                        <div className={styles.botResponseTwo} id='second-message'>
                            <p>Look we agree on something!</p>
                        </div>

                        <div className={styles.secondMessage} id="third-message">
                            <p>I thought this article was interesting!</p>
                        </div>


                        <form className={styles.chatbox}>
                            <textarea placeholder="Hello! I am filler text. Nice to meet you!"></textarea>
                            <button onClick={Messages}>Send</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
