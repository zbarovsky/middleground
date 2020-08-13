
import Navbar from '../components/navbar'


export default function Video() {

    return (
        <div>
            <Navbar />
            <div className='vidTitle'>
                <h1>Watch Before you begin</h1>
                <h3>The Rules of Engagement</h3>
            </div>
            <div >
                <img className='instructionVid' src='https://www.placecage.com/c/600/400' />
            </div>
        </div>
    )
}