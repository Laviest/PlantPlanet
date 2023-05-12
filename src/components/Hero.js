import React from 'react'
import HeroPlans from './Hero-plans'
import Footer from './Footer'

export default function Hero() {
    return (
        <div>
            <div>
                <img className='hero--plant' src="..\images\aloeverage.jpg"/>
                <div className='hero--plant-square'></div>
                <div className='hero--plant-square-1'></div>
                <h1 className='hero--plant-text'>Find the perfect plant</h1>
                <h5 className='hero--plant-text-1'>For your home</h5>
                <button className='hero--plant-button'>Check Out Plans <i class="arrow"></i></button>
            </div>
            <div className='choose--div'>
                <HeroPlans img="../images/room-plan.png" title="Room Plan" describe="We will choose the plants suitable for the light and humidity levels in your room, 
                determine the lighting conditions in the room, and choose plants that will thrive in those conditions and create a maintenance schedule for 
                your plants" price="200$"/>
                <HeroPlans img="../images/house-plan.png" title="House Plan" describe="We will choose the plants suitable for the light and humidity levels in your room, 
                determine the lighting conditions in the room, and choose plants that will thrive in those conditions and create a maintenance schedule for 
                your plants" price="200$"/>
                <HeroPlans img="../images/house-and-garden-plan.png" title="House & Garden Plan" describe="We will choose the plants suitable for the light and humidity levels in your room, 
                determine the lighting conditions in the room, and choose plants that will thrive in those conditions and create a maintenance schedule for 
                your plants" price="200$"/>
            </div>
            <div className='hero--choose-img-square'></div>
            <div className='hero--choose-img-square2'></div>
            <div className='hero--choose-img-square3'></div>
            <img className='hero--choose-img' src="../images/holdingPlant2.jpg"/>
            <div className='hero--choose-div'>
                <img className='hero--choose-timg' src="../images/title-background.png"/>
                <h1 className='hero--choose-title'>Why choose us?</h1>
                <ul>
                    <div style={{display: "flex"}}>
                        <div className='hero--choose-lsquare'></div>
                        <li style={{textAlign: "left"}}>We have the knowledge and expertise to select and arrange plants that will thrive in your space.</li>
                    </div>
                    <div style={{display: "flex"}}>
                        <li style={{textAlign: "right"}}>We can help you create a cohesive and aesthetically pleasing design that complements the style of your space.</li>
                        <div className='hero--choose-rsquare hero--choose-rsquare-2' style={{width: "13px", height: "90px"}}></div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className='hero--choose-lsquare hero--choose-rsquare-3' style={{width: "13px", height: "120px"}}></div>
                        <li style={{textAlign: "left"}}>Plants can improve the air quality in your space, reduce stress levels, and increase productivity and we can get you started with the
                        right plants to achieve these benefits.</li>
                    </div>
                    <div style={{display: "flex"}}>
                        <li style={{textAlign: "right"}}>If you do not have the time or expertise to create a plant design on your own, we can save you time and energy by taking care of all the 
                        design and maintenance work for you.</li>
                        <div className='hero--choose-rsquare' style={{width: "13px", height: "115px"}}></div>
                    </div>
                </ul>
            </div>
            <div className='hero--customers'>
                <img className='hero--choose-timg2' src="../images/title-background.png"/>
                <h1 className='hero--customers-title'>Satisfied customers</h1>
                <div style={{display: "flex"}}>
                    <img className='hero--customer-image' src="../images/man.jpg"/>
                    <div className='hero--customer-square'>
                        <h2 className='hero--customer-text' style={{}}>
                            I hired PlantPlanet to design my garden and they did an amazing job! The team was professional, attentive to my needs, 
                            and created a beautiful design that I am so happy with. Highly recommend!
                        </h2>
                        <img className='arrow-img' src="../images/arrow.png"/>
                    </div>
                </div>
            </div>
            <div className='main-gallery'>
                <img style={{}} className='hero--choose-timg3' src="../images/title-background.png"/>
                <h1 className='main--gallery-title'>Our work</h1>
                <div className='image-grid'>
                    <img className='image-grid-col-2 image-grid-row-2' src="https://www.thespruce.com/thmb/JwuQlR-GDhd713oS-jxI6VOYxQk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/141994056_211449890722989_3493684505811403859_n-48b950a264964882a6a8dd14ea7ae3ec.jpg" alt="plant-image"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Flower_garden%2C_Botanic_Gardens%2C_Churchtown_2.JPG" alt="plant-image"/>
                    <img src="https://static.standard.co.uk/homesandproperty/s3fs-public/thumbnails/image/2017/10/27/11/plantstyle1.jpg?width=1200&auto=webp&quality=75" alt="plant-image"/>
                    <img src="https://cdn.shopify.com/s/files/1/1740/0017/articles/the-best-and-worst-indoor-plants-for-your-bedroom-5_1024x.jpg?v=1602734196" alt="plant-image"/>
                    <img src="https://jannaschreier.files.wordpress.com/2014/10/img_1858.jpg" alt="plant-image"/>
                </div>
            </div>
            {/* <div className='main--location-div'>
                <img style={{}} className='hero--choose-timg3' src="../images/title-background.png"/>
                    <h1 className='main--location-title'>Our location</h1>
                <p className='main--location-big'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.666093143536!2d-0.109648!3d51.525451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4589e16779%3A0x10b5af15989b214c!2s18%20Exmouth%20Market%2C%20London%20EC1R%204QE%2C%20UK!5e0!3m2!1sen!2smk!4v1680285190989!5m2!1sen!2smk" width="715" height="460" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </p>
                <p className='main--location-small'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4964.563165252855!2d-0.112727!3d51.526395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4589e16779%3A0x10b5af15989b214c!2s18%20Exmouth%20Market%2C%20London%20EC1R%204QE%2C%20UK!5e0!3m2!1sen!2smk!4v1680505195972!5m2!1sen!2smk" width="350" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </p>
            </div> */}
            <Footer/>
        </div>
    )
}
