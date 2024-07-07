import { useDispatch, useSelector } from 'react-redux'
import './Main.css'
import { useState } from 'react'
import { currentAction } from '../../Store/reducer'


export default function Main() {
    const date = useSelector(date => date)
    console.log(date)
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]) 
    const [clicked,setClicked] = useState(false)
    const dispatch = useDispatch()
    const handleClick = (e) => {
        setCurrentDate(e.dt_txt.slice(0,10))
        setClicked(e.dt_txt.slice(0,10))
        dispatch(currentAction(e))
    }
    console.log(currentDate);
    if(date && date.current  && date.current.main && date.current.main.temp && date.daily && date.daily.list && date.daily.list[0] && date.daily.list[0].dt_txt){
        return (
            <div className='main'>
                <div className="tableau">
                    <div className="today">
                        <p>{date.city[0].toUpperCase() + date.city.slice(1).toLowerCase()}</p>
                        <p>{Math.round(date.current.main.temp)}{date.celsius}</p>
                        <img src={`https://openweathermap.org/img/wn/${date.current.weather[0].icon}@2x.png`} alt="img"/>
                        <p>{date.current.weather[0].main}</p>
                    </div>
                    <div className="everyFreeHours">
                        {date.daily.list.filter((e) => e.dt_txt.startsWith(currentDate)).map((e)=>(
                            <div className='time' key={e.dt}>
                                <p>{e.dt_txt.slice(11)}</p>
                                <p>{Math.round(e.main.temp)}{date.celsius}</p>
                                <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt="" style={{width: '50px', height:'50px'}} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="days">
                    {date.daily.list.filter(e => e.dt_txt.slice(11) === date.daily.list[0].dt_txt.slice(11)).map(e => (
                        <div className={`day ${clicked === e.dt_txt.slice(0,10) ? 'dayActive' : null}`} key={e.dt} onClick={()=> handleClick(e)}>
                            <p className="p1">{e.dt_txt.slice(5,10)}</p>
                            <div>
                                <p className="p2">{Math.round(e.main.temp)}{date.celsius}</p>
                                <img src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          )
    }
    

  return null
}
