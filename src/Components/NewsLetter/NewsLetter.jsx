import React from "react"
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exciting Offers On Your Email</h1>
            <p>Subscribe To Stay Updated</p>
            <div>
                <input type="email" placeholder="Your Email Id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter