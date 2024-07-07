import { dailyAction } from "./reducer"


export const fetchDaily = (city,celsius) => {
    const API = "478c209603d09153e52d68fbb28e8f77"
    return function (dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}${celsius}`)
            .then(response => response.json())
            .then(json => dispatch(dailyAction(json)))
            .catch(error => dispatch(dailyAction(error)))
    }
}