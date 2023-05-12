import React, { useRef, useState, useEffect } from 'react'

// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//     });
// }

export default function Navbar() {
    const burger = useRef(null)
    const nav = useRef(null);
    const navLinks = useRef([])

    const addToRefs = (el) => {
        if(el && !navLinks.current.includes(el)) {
            navLinks.current.push(el);
        }
    }

    
    const navSlide = () => {
        burger.current.addEventListener('click', () => {
            // Toggle nav
            nav.current.classList.toggle('nav-active');

            // Animate links
            navLinks.current.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                }
            });
            // // Burger animation
            burger.current.classList.toggle('toggle');
        });
    }


    return (
        <nav className='navbar-two'>
            <div className='logo'>
                <img className='nav--logo' src="../images/plant-logo.png"/>
                <h4>PlantPlanet</h4>
            </div>
            <ul ref={nav} className='nav--links'>
                <li ref={addToRefs}><a href="/">Home</a></li>
                <li ref={addToRefs}><a href="/about">About</a></li>
                <li ref={addToRefs}><a href="#">Projects</a></li>
                <li ref={addToRefs}><a href="#">Contact</a></li>
            </ul>
            <div ref={burger} className='burger' onClick={navSlide}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}