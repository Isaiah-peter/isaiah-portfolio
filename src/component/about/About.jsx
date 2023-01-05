import React from 'react'
import "./about.scss"
import {GitHub, Twitter, LinkedIn} from "@material-ui/icons";

const About = () => {
  return (
    <div className="about">
      <div className="container">
      <div className="left"></div>
      <div className="right">
          <h2>About Isaiah</h2>
          <p>A full stack, professional website designer, mobile App, I am good in React, Golang, Rail, python and Sql</p>

          <div className="phone">
            <span className='colored'>Phone:</span>
            <span> 08104663471</span>
          </div>
          <div className="phone">
            <span className='colored'>Email:</span>
            <span> peterisaiah@gmail.com</span>
          </div>

          <div className="social-icons">
          <a href="https://www.linkedin.com/in/peter-isaiah-607943200/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href="https://twitter.com/peteris96371736" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://github.com/Isaiah-peter" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About