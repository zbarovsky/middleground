function send() {
    return (
        document.getElementsByClassName("first-message").hidden = false
    )
}

export default function Chat() {
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