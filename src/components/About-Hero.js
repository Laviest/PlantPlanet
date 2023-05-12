import React from 'react'
import Footer from './Footer'
import Employee from './Employee'

export default function AboutHero() {
    return(
        <div>
            <div className='about--hero-div'>
                <div className='about--team-photo-overlay'></div>
                <h1 className='about--together'>Together since 2009</h1>
                <img className='about--team-photo' src='../images/team-photo.jpg'/>
            </div>
            <div>
                <img className='about--title1-img' src="../images/title-background.png"/>
                    <h1 className='about--title1'>About Us</h1>
                
                <div className='about--div1'>
                    <div style={{display: "flex"}}>
                        <img className='about--green-arrow' src="../images/green_arrow.png"/>
                        <h3 className='about--team-title'>Our Team</h3>
                    </div>
                    <h3 className='about--team-text'>
                        We are a team of passionate and talented team of designers who share a common love for nature and its beauty, 
                        inspired by the way plants can transform any space.
                    </h3>
                        <div style={{display: "flex"}}>
                            <img className='about--green-arrow' src="../images/green_arrow.png"/>
                        <h3 className='about--team-title'>Expertise</h3>
                    </div>
                    <h3 className='about--team-text'>
                        Our designs incorporate a wide range of plants, including exotic and rare species, which are sourced from sustainable nurseries around the 
                        world. We are experts in selecting the right plants for each space, taking into account factors such as lighting, humidity, and 
                        temperature.
                    </h3>
                    <div style={{display: "flex"}}>
                        <img className='about--green-arrow' src="../images/green_arrow.png"/>
                    <h3 className='about--team-title'>Different kinds of projects</h3>
                    </div>
                    <h3 className='about--team-text'>
                        Our projects range from small indoor spaces to large outdoor gardens, and we've worked with a diverse range of clients, including homeowners, 
                        businesses, and public institutions. Our designs are not only aesthetically pleasing, but also help to create a healthier and more 
                        vibrant environment for our clients.
                    </h3>
                </div>
            </div>
            <div>
                <img className='about--title2-img' src="../images/title-background.png"/>
                        <h1 className='about--title2'>What we offer</h1>

                <div className='all-offers-m' style={{marginTop: "20px"}}>
                    <img className='about--honesty' src="../images/honesty.png"/>
                    <h3 className='about--offer-text'>Honesty</h3>
                    <img className='about--honesty' src="../images/reliable.png"/>
                    <h3 className='about--offer-text'>Reliabelity</h3>
                </div>

                <div className='all-offers-m'>
                    <img className='about--honesty1' src="../images/cheap.png"/>
                    <h3 className='about--offer-text1'>Cheap Prices</h3>
                </div>

                <div className='all-offers'>
                    <img className='about--honesty' src="../images/honesty.png"/>
                    <h3 className='about--offer-text'>Honesty</h3>
                    <img className='about--honesty' src="../images/reliable.png"/>
                    <h3 className='about--offer-text'>Reliabelity</h3>
                    <img className='about--honesty' src="../images/cheap.png"/>
                    <h3 className='about--offer-text'>Cheap Prices</h3>
                </div>
            </div>
            <div>
                <img className='about--title2-img' src="../images/title-background.png"/>
                <h1 style={{marginTop: "30px"}} className='about--title2'>Meet the team</h1>

                <div className='director-name'></div>
                <h4 className='director-name-text'>George Lewis</h4>
                <div className='container'>
                    <div className='director-overlay'>
                        <div className='content'>
                                <h4 className='director--title'>Director</h4>
                                <p className='director--work'>Working with us for 14 years</p>
                                <div style={{display: "flex"}}>
                                    <img className='director-linkedin' src="../images/linkedin.png"/>
                                    <p className='director-linkedin-text'><a href='linkedin.com' style={{color: "white"}}>LinkedIn</a></p>
                                </div>
                                <p className='director--work'><strong>Number:</strong> +1 212 554 376</p>
                            </div>
                    </div>
                </div>
                <img className='about--employee1-img' src='../images/employee1.jpg'/>


                <div className='employee1-div'>
                    <Employee image="../images/employee2.jpg"/>
                    <Employee image="../images/employee3.jpg"/>
                    <Employee image="../images/employee4.jpg"/>
                    <Employee image="../images/employee5.jpg"/>
                </div>

                <div className='employee-div-m'>
                    <Employee image="../images/employee2.jpg"/>
                    <Employee image="../images/employee3.jpg"/>
                </div>

                <div className='employee-div-m'>
                    <Employee image="../images/employee4.jpg"/>
                    <Employee image="../images/employee5.jpg"/>
                </div>
            </div>
            <div>
                <h1 className='partners-text'>Our partners</h1>
                <div style={{display: "flex"}}>
                    <img className='about-parterns' src="../images/flower_moon1.png"/>
                    <img className='about-parterns' src="../images/patio_mode.png"/>
                    <img className='about-parterns' src="../images/plant_store.png"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}