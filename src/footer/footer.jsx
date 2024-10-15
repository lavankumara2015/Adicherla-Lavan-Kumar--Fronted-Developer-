import "./footer.css"

import React from 'react'

function Footer() {
  return (
    <footer>
<div className="footer-innerContainer">
<hr className="footer__hr"/>
<div className="footer-EthAi-icon">
<img src="./assets/Frame 43094.png" alt="EthAi icon"/>
</div>
<div className="footer-social_media-container">
    <img src="./assets/telegram.png"  alt="telegram icon"/>
    <img src="./assets/instagram.png"  alt="telegram icon"/>
    <img src="./assets/discord.png"  alt="telegram icon"/>
    <img src="./assets/Facebook.png"  alt="telegram icon"/>
    <img src="./assets/discord (1).png"  alt="telegram icon"/>

</div>
</div>
<div className="footer-innerContainer2">
    <div>
<h1 className="text-white text-4xl">
“Designed for traders of <br/>&nbsp; today, just like you."
</h1>
    </div>
    <div>
        <input type="text"  placeholder="What's your work email?"/>
   <button className="text-white hover:text-black font-medium">Get Started</button>
    </div>
</div>
    </footer>
  )
}

export default Footer