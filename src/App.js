import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutHero from './components/About-Hero'
import NavbarTwo from './components/NavbarTwo'

export default function App() {
    return (
        <div>
            <NavbarTwo/>
            <Routes>
                <Route path="/" element={
                    <Hero/>
            }
                    />
                <Route path="/about" element={
                    <AboutHero/>
            }/>
            </Routes>
        </div>
    )
}