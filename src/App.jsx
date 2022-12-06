import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "./components/Loader";
import LocationFilter from "./components/LocationFilter";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import getRandomNumer from "./utility/getRandomNumber"

function App() {
  const [location, setLocation] = useState();
  const [locationName, setLocationName] = useState('');
  const [showList, setShowList] = useState(false);
  const [loader, setLoader] = useState(false);

  const getDataDimension = (idDimension = 1) => {
    const URL = `https://rickandmortyapi.com/api/location/${idDimension}`;

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log('Ha ocurrido un error'));
  }

  useEffect(() => {
    const randomDimension = getRandomNumer();
    const URL = `https://rickandmortyapi.com/api/location/${randomDimension}`;

    axios.get(URL)
      .then(({ data }) => {
        setLocation(data)
        setTimeout(() => {
          setLoader(true);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      })

      
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const dimensionSearch = e.target.searchValue.value;

    if (!dimensionSearch) {
      getDataDimension(1);
    } else {
      getDataDimension(dimensionSearch);
    }
  }

  const onInputChange = ({ target }) => {
    setLocationName(target.value);

    if (locationName?.length >= 2) {
      //console.log('entro');
      setTimeout(() => {
        setShowList(true)
      }, 100);
    } else {
      setTimeout(() => {
        setShowList(false)
      }, 200);
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowList(false)
    }, 200);
  }

  const getNewLocation = (url, name) => {
    setLocationName(name);
    axios.get(url)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      {
        loader
          ?
          <>
            <header className="first__header">
              <div className="background__header"></div>

              <div className="content__header">
                <h1 className="logo_rick"><span>R</span>ick ANd Mort<span>Y</span> </h1>
              </div>
            </header>

            <section className="form">
              <form onSubmit={handleSubmit}>
                <input
                  id="searchValue"
                  type="text"
                  autoComplete="off"
                  value={locationName}
                  onChange={onInputChange}
                  onBlur={handleBlur}
                  placeholder="ingresa un dato"
                />
                <button type="submit">Buscar</button>
              </form>

              {
                showList && <LocationFilter locationName={locationName} getNewLocation={getNewLocation} />
              }

            </section>

            <section className="section__location">
              <LocationInfo location={location} />
            </section>

            <section className="section__residents container">
              {
                location?.residents.map((resident) => (
                  <ResidentCard key={resident} resident={resident} />
                ))
              }
            </section>
          </>
          :

          <>
            <Loader />
          </>
      }
    </div>

  )
}

export default App
