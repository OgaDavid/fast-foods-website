import React from 'react'

const Services = () => {
  return (
    <div className="services-section" id="services-section">
        <div className="services-section-content">
            <div className="services-section-content-heading">
                <h1>Services</h1>
                <p>Topnotch services to keep you satisfied!</p>
            </div>
            <div className="services-section-content-grid">
                <div className="tasty-meals">
                    <div className="s-card">
                        <i class="fa-solid fa-utensils fa-3x"></i>
                    <div className="services-card-text">
                        <h3>Tasty meals</h3>
                        <p>Delicious and fast meals.</p>
                    </div>
                    </div>
                </div>

                <div className="fast-delivery">
                    <div className="s-card">
                    <i class="fa-solid fa-truck-fast fa-3x"></i>
                    <div className="services-card-text">
                        <h3>Fast delivery</h3>
                        <p>Swift delivery service.</p>
                    </div>
                    </div>
                </div>

                <div className="easy-checkout">
                    <div className="s-card">
                    <i class="fa-solid fa-money-check-dollar fa-3x"></i>
                    <div className="services-card-text">
                        <h3>Easy checkout</h3>
                        <p>Seamless checkout service.</p>
                    </div>
                    </div>
                </div>

                <div className="money-back">
                    <div className="s-card">
                    <i class="fa-solid fa-shield-halved fa-3x"></i>
                    <div className="services-card-text">
                        <h3>Money back Guaranteed</h3>
                        <p>Up to 80% refund.</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="businesses">
                <h3>Trusted By</h3>
                <div className="businesses-container">
                    <img src="/images/Dominos.svg" alt="dominos" />
                    <img src="/images/uber.svg" alt="dominos" />
                    <img src="/images/cowrywise.svg" alt="dominos" />
                    <img src="/images/piggyvest.svg" alt="dominos" />
                    <img src="/images/chipper.svg" alt="dominos" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services