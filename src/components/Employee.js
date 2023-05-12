import React from 'react'

export default function Employee(props) {
    return(
        <div>
            <div className="employee-name"></div>
            <h4 className="employee-name-text">George Lewis</h4>
            <div className='container'>
                <div className='employee-overlay'>
                    <div className='content'>
                        <h4 className='employee--title'>Plant Designer</h4>
                        <p className='employee--work'>Working with us for 10 years</p>
                        <div style={{display: "flex"}} className='employee-div'>
                            <img className='employee-linkedin' src="../images/linkedin.png"/>
                            <p className='employee-linkedin-text'><a href='linkedin.com' style={{color: "white"}}>LinkedIn</a></p>
                        </div>
                        <p className='employee-number'><strong>Number:</strong> +1 212 554 376</p>
                    </div>
                </div>
            </div>
            <img className='about-employee-img' src={props.image}/>
        </div>
    )
}