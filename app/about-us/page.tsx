import Link from 'next/link'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div className='container'>
        <div>
            <h1>About Us</h1>
            <p><Link href="/" >Home</Link> <span>About us</span></p>
        </div>
        
    </div>
  )
}

export default AboutUsPage