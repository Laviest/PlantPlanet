import React from 'react'

export default function Footer() {
    return(
        <div className='main--book'>
            <div className='footer-overlay'></div>
            <img className='main--book-img' src="../images/plant-background2.jpg"/>
            <img className='main--book-img-mobile' src="../images/plant-background_mobile.jpg"/>
            <img className='main--book-img-comp' src="../images/plant-background_comp.jpg"/>
            <h1 className='main--book-title'>Book us now!</h1>
            <div className='main--book-display'>
                <div className='main--book-display-small'>
                    <img className='main-book-phone-icon' src="../images/123.png"/>
                    <h1 className='main--book-number'>Call: 01632 960564</h1>
                </div>
                <form className='main--book-message'>
                    <input type="text" id="message" name="message" placeholder="Leave us a message"/>
                </form>
            </div>
        </div>
    )
}