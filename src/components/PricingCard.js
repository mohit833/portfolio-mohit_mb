import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Starter -</h3>
                <span className="bar"></span>
                <p className="btc">$ 29</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <p>- All Widget Types -</p>
                <p>- 3rd Party Integrations -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Pro -</h3>
                <span className="bar"></span>
                <p className="btc">$ 49</p>
                <p>- All in Starter -</p>
                <p>- Website Personalization -</p>
                <p>- Managing Multiple Websites -</p>
                <p>- Priority Support -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Enterprice -</h3>
                <span className="bar"></span>
                <p className="btc">Custom</p>
                <p>- All in Starter and Pro  -</p>
                <p>- Custom Contract -</p>
                <p>- Custom Integrations -</p>
                <p>- Clearbit -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard