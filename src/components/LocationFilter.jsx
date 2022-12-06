import axios from 'axios';
import React, { useEffect, useState } from 'react'

const LocationFilter = ({ locationName, getNewLocation }) => {
    const [locationsOptions, setLocationsOptions] = useState();

    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/location/?name=${locationName}`;

        if (locationName?.length > 3) {
            axios.get(URL)
                .then(({ data }) => {
                    setLocationsOptions(data.results);
                })
                .catch((err) => {
                    console.log('Ha ocurrido un error');
                })
        }
    }, [locationName])

    return (
        <div className="form__result">
            <ul>
                {
                    locationsOptions?.map(location => (
                        <li
                            key={location.id}
                            onClick={() => getNewLocation(location.url, location.name)}
                        >
                            {location.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default LocationFilter