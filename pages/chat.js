import React, { useState, useEffect } from 'react'

export default function Chat() {

    useEffect(() => {
        document.getElementsByClassName("first-message").hidden = false
    }, [])

    return (
        <div>

            <div className="first-message" hidden>
                <p>I thought this article was interesting!</p>
            </div>

            <div className="second-message" hidden>

            </div>

            <form>
                <textarea>Hello! I am filler text. Nice to meet you!</textarea>
                <button onClick={send()}>Send</button>
            </form>
        </div>
    )
}