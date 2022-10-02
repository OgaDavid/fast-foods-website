import React from 'react'

const ServicesGrid = (props) => {
  return (
    <div className="tasty-meals">
        <div className="s-card">
            <i class={props.imgClass}></i>
        <div className="services-card-text">
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
        </div>
        </div>
    </div>

  )
}

export default ServicesGrid;