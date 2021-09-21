import SearchForm from './SearchForm'
import Wait from './Wait'
import Display from './Display'

const Main = ({ setCity, setLocalWeather, localWeather, data, titleSpinner, searchError, isLoaded }) => {
    return (
        <>
            <SearchForm setCity={setCity}
                setLocalWeather={setLocalWeather}
                localWeather={localWeather} />
            {
                !isLoaded ? <Wait /> : <Display data={data}
                    titleSpinner={titleSpinner}
                    searchError={searchError} />
            }
        </>
    )
}

export default Main