import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SearchForm = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const dispatch = useDispatch();
    const latitude = useSelector(state => state.zone.lat);
    const longitude = useSelector(state => state.zone.lon);

    let getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e12fbfb0d2835c36bcf78ba622f4eb4c`)
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            dispatch({
                type: 'SET_MAIN',
                payload: res.weather[0].main
            });
            dispatch({
                type: 'SET_TEMP',
                payload: res.main.temp
            });
            dispatch({
                type: 'SET_FEELS_LIKE',
                payload: res.main.feels_like
            });
            dispatch({
                type: 'SET_HUMIDITY',
                payload: res.main.humidity
            });
            dispatch({
                type: 'SET_PRESSURE',
                payload: res.main.pressure
            });
            dispatch({
                type: 'SET_WIND',
                payload: res.wind.speed
            });
        })
        .catch(err=>{console.log('Something went wrong while fetching weather', err)});
    }

    let getCoordinates = (cityName, countryCode) => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=1&appid=e12fbfb0d2835c36bcf78ba622f4eb4c`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res); 
            dispatch({
                type: 'SET_LAT',
                payload: res[0].lat
            });
            dispatch({
                type: 'SET_LON',
                payload: res[0].lon
            });
            dispatch({
                type: 'SET_CITY_NAME',
                payload: city
            });
            
            setTimeout(() => {
                getWeather();
                dispatch({
                    type: 'SET_LOADING',
                    payload: false
                })

            }, 1000);
        })
        .catch(err => console.log('something went wrong while fetching coordinates', err))
    }


    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        dispatch({
            type: 'SET_LOADING',
            payload: true
        })
        getCoordinates(city, country);
        
    }

    return (
        <div>
        <h4 className="mb-3">Choose Location</h4>
        <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="London"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="GB"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
        </div>
    )
};

export default SearchForm;