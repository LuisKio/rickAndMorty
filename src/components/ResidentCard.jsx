import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ResidentCard = ({ resident: urlResident }) => {
    const [resident, setResident] = useState();

    useEffect(() => {
        axios.get(urlResident)
            .then(({ data }) => setResident(data))
            .catch((err) => console.log(err))
    }, []);


    return (
        <article className='resident__card'>
            <div className='card'>
                <header>
                    <div className="img__card">
                        <img src={resident?.image} alt={resident?.name} />
                    </div>
                    <div className='status'>
                        <div className="circle"></div>
                        <span>{resident?.status}</span>
                    </div>
                </header>

                <section>
                    <h2>{resident?.name}</h2>
                    <ul>
                        <li><span>Specie</span>{resident?.species}</li>
                        <li><span>Origin</span>{resident?.origin.name}</li>
                        <li><span>Episodes where apper</span>{resident?.episode.length}</li>
                    </ul>
                </section>
            </div>
        </article>
    )
}

export default ResidentCard