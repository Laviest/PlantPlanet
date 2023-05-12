import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div style={{display: "flex"}}>
                <img className='navbar--logo' src="../images/plant-logo.png"/>
                <h1 className='navbar--title'>PlantPlanet</h1>
            </div>
            <ul className='navbar--right-items'>
                <li><a className='navbar--about' href='http://localhost:3000/about'>About</a></li>
                <li><a>Pricing</a></li>
                <li><a>Contact</a></li>
                <li><a style={{paddingRight: "23px"}} href='http://localhost:3000/'>Home</a></li>
            </ul>
            <div className='parallelogram'></div>
        </nav>
    )
}