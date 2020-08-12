export default function Screener() {
    return (
        <form>
            <label className="sr-only"></label>
            <input type="text" id="first-name" name="first-name" placeholder="First name"></input>

            <p>Select what applies best for you:</p>

            <input type="radio" id="left" name="political-affiliation"></input>
            <label for="left">Left</label>

            <input type="radio" id="right" name="political-affiliation"></input>
            <label for="right">Right</label>

            <input type="radio" id="center" name="political-affiliation"></input>
            <label for="center">Center</label>

            <input type="radio" id="other" name="political-affiliation"></input>
            <label for="other">Other</label>

            <input type="submit" id="submit"></input>
            <label for="submit"></label>
        </form>
    )
}