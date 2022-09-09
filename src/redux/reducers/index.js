const initialState = {
    zone: {
        lat: '',
        lon: '',
        cityName: '',
    },
    weather: {
        main : '',
        temp : '',
        feelsLike : '',
        humidity: '',
        pressure: '',
        wind: '',
    },
    loading: false,
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_LAT':
            return {
                ...state,
                zone: {
                    ...state.zone,
                    lat: action.payload,
                },
            }    
        case 'SET_LON':
            return {
                ...state,
                zone: {
                    ...state.zone,
                    lon: action.payload,
                },
            }
        case 'SET_CITY_NAME':
            return {
                ...state,
                zone: {
                    ...state.zone,
                    cityName: action.payload,
                },
            }
        case 'SET_MAIN':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    main: action.payload,
                },
            }
        case 'SET_TEMP':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    temp: action.payload,
                },
            }
        case 'SET_FEELS_LIKE':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    feelsLike: action.payload,
                },
            }
        case 'SET_HUMIDITY':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    humidity: action.payload,
                },
            }
        case 'SET_PRESSURE':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    pressure: action.payload,
                },
            }
        case 'SET_WIND':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    wind: action.payload,
                },
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            }                  
        default:
            return state
    }
}

export default mainReducer;