import React from 'react'

const LocationInfo = ({location}) => {
    const { name, type, dimension, residents } = !!location && location;

    return (
        <article className='container article__location'>
            <div className="header-information">
                <h2>{name}</h2>

                <ul>
                    <li>Type <span>{type}</span></li>
                    <li>Dimension <span>{dimension}</span></li>
                    <li>Population <span>{residents?.length}</span></li>
                </ul>

            </div>
        </article>
    )
}

export default LocationInfo