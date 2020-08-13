import Link from 'next/link'

export default function Navbar () {
    return (
        <div>
            <navbar className='navbar-custom navbar'>
                <a className='navTitle'>Breaking Bread</a>
                <ul className='nav'>
                    <li className='navItem'>
                        <Link href='/conversation-topics'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link href='/'>
                            <a>Settings</a>
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link href='/'>
                            <a>My Account</a>
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link href='/about-us'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link href='/'>
                            <a>Log Out</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
            
        </div>
    )
}