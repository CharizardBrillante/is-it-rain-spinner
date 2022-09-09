import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
    BsCloudRainHeavy,
    BsSun,
    BsClouds,
    BsCloudSnow,
    BsCloudFog,
    BsCloudSun
} from 'react-icons/bs';
import { FaTemperatureLow } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { CgCompressV } from 'react-icons/cg';
import { BiWind } from 'react-icons/bi';
import MySpinner from './MySpinner';

const WeatherSheet = () => {
    let cityName = useSelector(state => state.zone.cityName),
        main = useSelector(state => state.weather.main),
        temperature = parseFloat(useSelector(state => state.weather.temp)),
        feelsLike = parseFloat(useSelector(state => state.weather.feelsLike)),
        humidity = useSelector(state => state.weather.humidity),
        pressure = useSelector(state => state.weather.pressure),
        wind = useSelector(state => state.weather.wind),
        loading = useSelector(state => state.loading);
    
    let getWeatherIcon = () => {
        switch (main) {
            case "Rain":
                return <div><BsCloudRainHeavy size={50}/><p>{main}</p></div>
            case "Clouds":
                return <div><BsClouds size={50}/><p>{main}</p></div>
            case "Snow":
                return <div><BsCloudSnow size={50}/><p>{main}</p></div>
            case "Clear":
                return <div><BsSun size={50}/><p>{main}</p></div>
            case "Fog":
                return <div><BsCloudFog size={50}/><p>{main}</p></div>
            default:
                return <div><BsCloudSun size={50}/><p>{main}</p></div>
        }
    }

    return (
        <Container>
            <Row>
                <h2>Weather in {loading ? <MySpinner/> : cityName}</h2>
            </Row>
            <Row className='p-3 justify-content-around align-items-center'>
                <Col>{getWeatherIcon()}</Col>
                <Col><h4>{temperature ? (temperature - 273.15).toFixed(2) : ''}°C</h4></Col>                
            </Row>
            <Row className='border p-3 justify-content-center'>
                <Col><FaTemperatureLow size={20}/><b> Feels like</b></Col>
                <Col>{feelsLike ? (feelsLike - 273.15).toFixed(2) : ''}°C</Col>
            </Row>
            <Row className='border p-3 justify-content-center'>
                <Col><WiHumidity size={30}/><b>Humidity</b></Col>
                <Col>{humidity}%</Col>
            </Row>
            <Row className='border p-3 justify-content-center'>
                <Col><CgCompressV size={25}/><b>Pressure</b></Col>
                <Col>{pressure}hPa</Col>
            </Row>
            <Row className='border p-3 justify-content-center'>
                <Col><BiWind size={25}/><b> Wind speed</b></Col>
                <Col>{wind}m/s</Col>
            </Row>
        </Container>
    )
}

export default WeatherSheet;