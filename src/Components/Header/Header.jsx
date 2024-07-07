import { useEffect, useState } from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import { celsiusAction, cityAction } from '../../Store/reducer'
import { fetchDaily } from '../../Store/fetchDaily'
import { fetchCurrent } from '../../Store/fetchCurrent'

export default function Header() {
  const [city, setCity] = useState("Yerevan")
  const [celsius, setCelsius] = useState('&units=metric')
  const dispatch = useDispatch()

  function handleButtonClick() {
    dispatch(cityAction(city))
    dispatch(fetchDaily(city, celsius))
    dispatch(fetchCurrent(city, celsius))
  }

  useEffect(() => {
    handleButtonClick()
    dispatch(celsiusAction("°C"))
  }, [])

  const handleCheckboxChange = (e) => {
    if (e === '°C') {
      setCelsius('&units=metric')
      dispatch(celsiusAction(e))
      dispatch(fetchDaily(city, '&units=metric'))
      dispatch(fetchCurrent(city, '&units=metric'))
    } else if (e === "°F") {
      setCelsius('&units=imperial')
      dispatch(celsiusAction(e))
      dispatch(fetchDaily(city, '&units=imperial'))
      dispatch(fetchCurrent(city, '&units=imperial'))
    }
  }

  return (
    <div className='header'>
      <div className="searchCity">
        <div>
          <input type="text" onChange={(e) => setCity(e.target.value)} />
          <button onClick={handleButtonClick}>Search</button>
        </div>
      </div>
      <div className='metrical_imperial'>
        <input type="radio" value='°C' checked={celsius === '&units=metric'} onChange={(e) => handleCheckboxChange(e.target.value)} />
        <p style={{ marginRight: '5px' }}>C</p>
        <input type="radio" value='°F' checked={celsius === '&units=imperial'} onChange={(e) => handleCheckboxChange(e.target.value)} />
        <p>F</p>
      </div>
    </div>
  )
}
