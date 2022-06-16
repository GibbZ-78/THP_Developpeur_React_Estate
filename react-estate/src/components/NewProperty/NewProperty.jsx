import React, { useState } from 'react';
import './NewProperty.css';
import { Row, Col, Form, Button } from 'react-bootstrap';

const myURL = "http://localhost:3000/properties/";
const myMethod = "post";
const myHeader = {'Content-Type': 'application/json'};

const NewProperty = () => {

  const [myValidation, setMyValidation] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setMyValidation(true);
  };

  return(
    <main>
      <Form noValidate validated={myValidation} onsubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3 ms-5" controlId="newPropertyTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title of your RE ad" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 me-5" controlId="newPropertyPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price of your property" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="newPropertyDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="newPropertyType">
              <Form.Label>Property type</Form.Label>
              <Form.Select aria-label="Property type selection drop-down list">
                <option>Choose a property type</option>
                <option value="1">House</option>
                <option value="2">Flat / Apartment</option>
                <option value="3">Penthouse</option>
                <option value="4">Loft</option>
                <option value="5">Castle</option>
                <option value="6">Parking spot</option>
                <option value="7">Garage / closed parking box</option>
                <option value="8">Building plot</option>
                <option value="9">Warehouse</option>
                <option value="10">Manor</option>
                <option value="11">Villa</option>
                <option value="12">Tiny house</option>
                <option value="12">Tree house</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
        <Form.Group className="mb-3" controlId="newPropertyTermsConditions">
          <Form.Check
            required
            label="Agree to REACT ESTATE general terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        </Row>
        <Row>
          <Button type="submit">Create property ad</Button>
        </Row>
      </Form>
    </main>
  );
}

export default NewProperty;

// t.string :title x
//       t.float :price x
//       t.text :description x
//       t.belongs_to :property_type x
//       t.belongs_to :user
//       t.timestamps


// data to be sent to the POST request
// let _data = {
//   title: "foo",
//   body: "bar", 
//   userId:1
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify(_data),
//   headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => console.log(json));
// .catch(err => console.log(err));