function Screener() {
    return (
        <div>
            <div>
                onclick function that highlights the div and reveals a column of additional options
            </div>
            <div>
                onclick function that highlights the div and reveals a column of additional options
            </div>
            <div>
                onclick function that highlights the div and reveals a column of additional options
            </div>
        </div>
    )
}

export default function ScreenerPage() {
    return (
        <div>
            <p>Before continuing, please select the following that apply to you.</p>
            <Screener />
        </div>
    )
}