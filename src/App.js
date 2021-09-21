import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/Header';
import SearchForm from './components/SearchForm'
import { Container } from '@mui/material'
import Display from './components/Display'
import { getCityWeather, getLocalWeather } from './utils/func'
import Wait from './components/Wait'

const KEY = '4744245dfa7abc19a9387260236687f2'

function App() {
  const [data, setData] = useState([])
  const [city, setCity] = useState('Lviv')
  const [isLoaded, setIsLoaded] = useState(false)
  const [coords, setCoords] = useState({
    lat:'',
    long: ''
  })
  const [localWeather, setLocalWeather] = useState(false)
  const [titleSpinner, setTitleSpinner] = useState(false)
  const [searchError, setSearchError] = useState(null)


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(pos=>{
      setCoords({
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      })
    })
  }, [])

  useEffect(()=>{
    getLocalWeather(KEY, coords, setData, setTitleSpinner, setSearchError)
  },[localWeather])

  useEffect(()=>{
    getCityWeather(city, KEY, setData, setIsLoaded, setTitleSpinner, setSearchError)
  }, [city])

  return (
    <div className="App">
      <Header />
      <Container sx={{
        mt: 1.5,
        width: '80%'
      }}>
        <SearchForm setCity={setCity} 
        setLocalWeather={setLocalWeather}
        localWeather={localWeather} />
        {
          !isLoaded ?  <Wait /> : <Display data={data} 
          titleSpinner={titleSpinner} 
          searchError={searchError}/>
        }
      </Container>
    </div>
  );
}

export default App;
