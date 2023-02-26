import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        <div>
                        <p>51-1 Coimbatore</p>
                        <p>India.</p>
                        </div>
                    </div>
                    <div className="phone">
                       <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        +91 9585849085</h4>
                    
                    </div>
                    <div className="email">
                            <h4><FaMailBulk 
                            size={20} 
                            style={{color:"#fff",marginRight: "2rem"}}
                            />
                            mohitmaheshkumarp@gmail.com</h4>
                    
                    </div>
                </div>
            

            <div className="right">
                <h4>About</h4>
                <p>This is me Mohit M B</p>
                <p>Enthusiastic, “Go - Getter” attitude 
                    Fast learner are some of my attributes.</p>
                <div className="social">
                <FaFacebook
                            size={30} 
                            style={{color:"#fff",marginRight: 
                            "1rem"}}
                />
                <FaInstagram
                            size={30} 
                            style={{color:"#fff",marginRight: 
                            "1rem"}}
                />
                <FaLinkedin
                            size={30} 
                            style={{color:"#fff",marginRight: 
                            "1rem"}}
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer