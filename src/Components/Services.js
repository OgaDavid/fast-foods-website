import React from 'react'
import ServicesGrid from '../utils/ServicesGrid'
import ServiceData from '../Data/ServiceData'
import BusinessesData from '../Data/BusinessesData'
import BusinessGrid from '../utils/BusinessGrid'

// mapping service section
function services(data) {
    return <ServicesGrid 
      key={data.key}
      imgClass={data.imgClass}
      heading={data.heading}
      description={data.description}
    />
  }
//   mapping business section
  function businesses(data) {
    return <BusinessGrid
        key={data.key}
        img={data.img}
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
                <div className="businesses-container">{BusinessesData.map(businesses)}</div>
            </div>

        </div>
    </div>
  )
}

export default Services