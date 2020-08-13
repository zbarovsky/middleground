function send() {
    return (
        
    )
}

export default function Chat() {
    return (
        <div>
            <form>
                <textarea>Hello! I am filler text. Nice to meet you!</textarea>
                <button onClick={send()}>Send</button>
            </form>
        </div>
    )
}