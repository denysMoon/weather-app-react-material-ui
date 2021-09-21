export const getCityWeather = async (city, KEY, setData, setIsLoaded, setTitleSpinner, setSearchError) => {
  setTitleSpinner(true)
  setSearchError(false)


  setTimeout(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
      .then(res => {
        if(!res.ok){
          setTitleSpinner(false)
          throw Error('Check your city')
        }
        return res.json()
      })
      .then(res => {
        setData(res)
        setIsLoaded(true)
        setTitleSpinner(false)
      })
      .catch(err=>{
        setSearchError(err.message)
      })
  }, 500)

  //  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`)
  //  .then(res=>res.json())
  //  .then(res=>{
  //    setData(res)
  //    setIsLoaded(true)
  //    setTitleSpinner(false)
  //  })
}

export const getLocalWeather = async (KEY, coords, setData, setTitleSpinner, setSearchError) => {
  setTitleSpinner(true)
  setSearchError(false)
  setTimeout(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${KEY}&units=metric`)
    .then(res => res.json())
    .then(res => {
      setData(res)
      setTitleSpinner(false)
    })
    .catch(err => console.log(err))
  }, 500)
  // await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${KEY}&units=metric`)
  //   .then(res => res.json())
  //   .then(res => {
  //     setData(res)
  //   })
  //   .catch(err => console.log(err))
}