import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Breaking Bread</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
      </Head>
      
      <main>
          <div>
            <div className='leftIndex'>
              <aside>
                  <div className='logo'>
                    <img src='./logo.png' alt='breaking bread logo: two baguets crossing'/>
                  </div>
                  <div className='title'>
                    <h1>Breaking Bread</h1>
                  </div>
                  <div className='titleTwo'>
                    <p>Read. Talk. Listen.</p>
                  </div>
                </aside>
              </div>
            <div className='slogan'>
              <h3>Have a conversation and see what the other side has to say</h3>
            </div>
            <form className="logIn">
              <div className='form-group'> 
                <label className='sr-only'>Email or Phone Number</label>
                <input className="form-control input" type='text' name='email' placeholder='Email or Phone Number'></input>
              </div>
              <div>
                <label className='sr-only'>Password</label>
                <input className="form-control mb-2 input" type='text' name='password' placeholder='Password' required></input>
              </div>
              <button className='logInBtn'for='email' type='submit' required>Log In</button>
              <br />
              <div className='forgotPwd'>
                <a href='/'>Forgot Password?</a>
              </div>
              <br />
              <button type='submit' className='logInBtnTwo'>Create New Account</button>
            </form>
          </div>
      </main>
    </div>
  )
}
