import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Participants from './chat-participants'
import Navbar from '../components/navbar'

export default function Chat() {

    function showMessage(e) {
        e.preventDefault()
        document.getElementById("first-message").style.display = "block"
        setTimeout(Messages(e), 5000)
    }
    function showThirdMessage() {
        console.log("########## TESTS")
        document.getElementById("third-message").style.display = "block"
    }
    function Messages(e) {
        e.preventDefault()
        //document.getElementById(“second-message”).style.display = “block”
        setTimeout(showThirdMessage, 5000)
    }

    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row" id="participantsColumn">
                    <div class="col-sm">
                        <Participants />
                    </div>
                    <div id="chatBox" class="col-lg .offset-md-4">
                        <div className={styles.botResponse}>
                            <p id="commentOne">I thought this article was interesting!</p>
                        </div>
                            <img id="chatImage" src="/avatarTwo.png" /> 
                        <div className={styles.firstMessage} id="first-message">
                            <p>So did I!</p>
                        </div>

                        <div className={styles.botResponseTwo} id="third-message">
                            <p id="commentTwo">Look, we agree on something! </p>
                            <img id="chatImageThree" src="/avatarTwo.png" />
                        </div>
                            

                        <form className={styles.chatbox}>
                            <textarea placeholder="Hello! I am filler text. Nice to meet you!"></textarea>
                            <img id="chatImageTwo" src="/avatarNew.png" />
                            <button onClick={showMessage} id="send">Send</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
