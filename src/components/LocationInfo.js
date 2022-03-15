import React from 'react';


const LocationInfo = ({location}) => {
    return (
        <div className='card-location' >
            <h3> {location.name}</h3>
            <section>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension} </p>
                <p>Population: {location.residents?.length} </p>
            </section>
            
        </div>
    )
}

export default LocationInfo