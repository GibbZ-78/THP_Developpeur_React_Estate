import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import './PropertiesIndex.css';
// import beautifulHouse from '../../assets/images/house.jpg';
import house1 from '../../assets/images/1.jpg';
import house2 from '../../assets/images/2.jpg';
import house3 from '../../assets/images/3.jpg';
import house4 from '../../assets/images/4.jpg';
import house5 from '../../assets/images/5.jpg';
import house6 from '../../assets/images/6.jpg';
import PropertyShow from '../PropertyShow/PropertyShow';

const myURL = "http://localhost:3000/properties/";
const myMethod = "get";
const myHeader = {'Content-Type': 'application/json'};
const houses = [house1, house2, house3, house4, house5, house6];

const PropertiesIndex = () => {

  const [properties,setProperties] = useState([]);
  
  useEffect(() => {
    fetch(myURL, { method: myMethod, headers: myHeader })
    .then(response => response.json())
    .then(data => {
      setProperties(data);
      // console.log(data);
    }).catch(console.error);
  },[]);

  return (
    <section>
      <Row xs={1} sm={2} md={4} lg={6} className="g-0 m-3">
      {properties.map(property =>
                      <Col>
                        <Card key={'card_'+property.id.toString()} border="light">
                          <Card.Img variant="top" src={houses[property.id-1]} />
                          <Card.Body>
                            <Card.Title>{property.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-italic">{property.price}€ - {property.property_type_id} - {property.user_id}</Card.Subtitle>
                            <Card.Text>{property.description.slice(0, 37) + '...'}</Card.Text>
                            <Card.Link href={'/property/'+property.id.toString()}>More info...</Card.Link>
                          </Card.Body>
                        </Card>
                      </Col>
                      )
      }
      </Row>
    </section>
  );
}

export default PropertiesIndex;