import React from 'react'

export default function HeroPlans(props) {
    return (
        <div className='hero--plans-box'>
            {/* <div style={{position: "absolute", backgroundColor: "#5e961f", width: "400px", height: "100px", zIndex: "-1"}}></div> */}
            <div style={{justifyContent: "center", display: "flex"}}>
                <img className='hero--plans-image' src={props.img}/>
            </div>
            <h1 className='hero--plans-title'>{props.title}</h1>
            <p className='hero--plans-describe'>{props.describe}</p>
            <h1 className='hero--plans-price'>Price: {props.price}</h1>
        </div>
    )
}