import React from 'react'
import ServicesGrid from '../utils/ServicesGrid'
import ServiceData from '../Data/ServiceData'


function services(data) {
    return <ServicesGrid 
      key={data.key}
      imgClass={data.imgClass}
      heading={data.heading}
      description={data.description}
    />
  }

const Services = () => {
  return (
    <div className="services-section" id="services-section">
        <div className="services-section-content">
            <div className="services-section-content-heading">
                <h1>Services</h1>
                <p>Topnotch services to keep you satisfied!</p>
            </div>
            <div className="services-section-content-grid">
            {ServiceData.map(services)}
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