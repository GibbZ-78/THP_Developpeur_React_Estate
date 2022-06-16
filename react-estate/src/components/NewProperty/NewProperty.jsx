import React, { useState } from 'react';
import './NewProperty.css';
import { Row, Col, Form, Button } from 'react-bootstrap';

const myURL = "http://localhost:3000/properties/";
const myMethod = "post";
const myHeader = {'Content-Type': 'application/json'};
const myOwner = "1";

const NewProperty = () => {

  const [myValidation, setMyValidation] = useState(false);
  const [myTitle, setMyTitle] = useState();
  const [myPrice, setMyPrice] = useState();
  const [myDescription, setMyDescription] = useState();
  const [myPropertyType, setMyPropertyType] = useState();
  const [myUser, setMyUser] = useState();

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    setMyUser(myOwner);

    const myNewProperty = {
      "property": {
        "title": myTitle,
        "price": myPrice,
        "description": myDescription,
        "property_type_id": myPropertyType,
        "user_id": myUser
      }
    };

    fetch(myURL, { method: myMethod, headers: myHeader, body: JSON.stringify(myNewProperty) })
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData))
    .catch(console.error);

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    setMyValidation(true);
  };

  return(
    <main>
      <Form noValidate validated={myValidation} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3 mx-5" controlId="newPropertyTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title of your RE ad" onChange={(e) => setMyTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 mx-5" controlId="newPropertyPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price of your property" onChange={(e) => setMyPrice(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 mx-5" controlId="newPropertyDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setMyDescription(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 mx-5" controlId="newPropertyType">
              <Form.Label>Property type</Form.Label>
              <Form.Select aria-label="Property type selection drop-down list" onChange={(e) => setMyPropertyType(e.target.value)}>
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
          <Col>
            <Form.Group className="mb-3 ms-5" controlId="newPropertyTermsConditions">
              <Form.Check
                required
                label="I hereby agree to REACT ESTATE general terms and conditions"
                feedback="You must agree before submitting each new property ad."
                feedbackType="invalid"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit">Create property ad</Button>
          </Col>
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