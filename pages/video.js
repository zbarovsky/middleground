import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar'
import Link from 'next/link'

export default function Video() {
    useEffect(() => {
        let timeToRead = setTimeout(endTimer, 45000)
        document.getElementById("letsChat").style.backgroundColor = "tan"
        document.getElementById("letsChat").disabled = true
        console.log("TIMER STARTED")
      }), []
    
      function endTimer() {
        console.log("TIMER FINISHED YOU CAN letsChat")
        document.getElementById("letsChat").style.backgroundColor = 'dark-tan'
        document.getElementById("letsChat").disabled = false
      }

    return (
        <div>
            <Navbar />
            <div className='vidTitle'>
                <h1>Watch Before you begin</h1>
                <h3>The Rules of Engagement</h3>
                <Link href="/chat"><button id="letsChat">Let's Chat!</button></Link>
            </div>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe id="iframe" class="embed-responsive-item" src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1597342175&f=Rvoc0KiYknB70ZMJ7uhnlA&d=0&m=p&r=360p+480p+720p&volume=100&start_res=720p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=" allow="autoplay; encrypted-media"></iframe>
            </div>
        </div>
    )
}