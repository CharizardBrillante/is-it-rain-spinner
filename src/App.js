import './App.css';
import {Col, Row, Container } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import WeatherSheet from './components/WeatherSheet';

function App() {
  return (
    <div className="App">
      <h2 className="header">IS IT RAIN?</h2>
      <Container className='displayer'>
        <Row>
          <Col md={3}>
            <SearchForm />
          </Col>
          <Col md={9}>
            <WeatherSheet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
