import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import './PropertiesIndex.css';
import beautifulHouse from '/assets/images/house.jpg';

const myURL = "http://localhost:3000/property/";
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
      <Row xs={1} sm={2} md={4} lg={6} className="g-2">
      {properties.map(property =>
                      <Col>
                        <Card>
                          <Card.Img variant="top" src={beautifulHouse} />
                          <Card.Body>
                            <Card.Title>{property.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-italic">{property.price}€ - {property.property_type.property_type_title}</Card.Subtitle>
                            <Card.Text>{property.description}</Card.Text>
                            <Card.Link href="#">More info...</Card.Link>
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