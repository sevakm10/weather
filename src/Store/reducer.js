export const DAILY = 'DAILY'
export const CITY = 'CITY'
export const CURRENT = 'CURRENT'
export const CELSIUS_NAME = "CELSIUS_NAME"

const defaultState = {
    daily: {},
    current: {}
}

export const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case DAILY:
            return {...state, daily: {...action.payload}}
        case CURRENT:
            return {...state, current: {...action.payload}}
        case CITY:
            return {...state, city: action.payload}
        case CELSIUS_NAME:
            return {...state, celsius: action.payload}
        default:
            return state
    }
}

export const dailyAction = (payload) => ({type:DAILY, payload:payload})
export const currentAction = (payload) => ({type:CURRENT, payload:payload})
export const cityAction = (payload) => ({type:CITY, payload:payload})
export const celsiusAction = (payload) => ({type:CELSIUS_NAME, payload:payload})