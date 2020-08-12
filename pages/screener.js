export default function Screener() {
    return (
        <form>
            <label for="first-name">First name:</label>
            <input type="text" id="first-name" name="first-name"></input>

            <p>Select what applies best for you:</p>

            <input type="radio" id="left"></input>
            <label for="left">Left</label>

            <input type="radio" id="right"></input>
            <label for="right">Right</label>

            <input type="radio" id="center"></input>
            <label for="center">Center</label>

            <input type="radio" id="other"></input>
            <label for="other">Other</label>
        </form>
    )
}