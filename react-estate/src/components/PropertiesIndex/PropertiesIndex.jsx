import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import './PropertiesIndex.css';

const myURL = "http://localhost:3000/properties/";
const myMethod = "get";
const myHeader = {'Content-Type': 'application/json'};

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
      <Row xs={1} sm={2} md={3} lg={4} className="g-0 m-3">
      {properties.map(property =>
                      <Col>
                        <Card key={'card_'+property.id.toString()} border="light">
                          <Card.Img variant="top" src={require("../../assets/images/"+property.image_url)} />
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