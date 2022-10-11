import React from 'react';
import BusinessesData from '../Data/BusinessesData';
import BusinessGrid from '../utils/BusinessGrid';

//   mapping business section
function businesses(data) {
    return <BusinessGrid
        key={data.key}
        img={data.img}
    />
  }

const Businesses = (props) => {
    return(
        <div className="businesses">
            <h3>Trusted By</h3>
            <div className="businesses-container">{BusinessesData.map(businesses)}</div>
        </div>
    )
}

export default Businesses;