import { currentAction, dailyAction } from "./reducer"


export const fetchCurrent = (city,celsius) => {
    const API = "478c209603d09153e52d68fbb28e8f77"
    return function(dispatch) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}${celsius}`)
            .then(response => response.json())
            .then(json => dispatch(currentAction(json)))
            .catch(error => dispatch(dailyAction(error)))
    }
}