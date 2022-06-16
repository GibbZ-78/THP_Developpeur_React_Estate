import React, { useState } from 'react';
import './NewProperty.css';

const myURL = "http://localhost:3000/properties/";
const myMethod = "post";
const myHeader = {'Content-Type': 'application/json'};

const NewProperty = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <main>
      <Form noValidate validated={validated} onsubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="newPropertyTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title of your RE ad" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="newPropertyPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price of your property" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="newPropertyDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
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
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to REACT ESTATE terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Create property ad</Button>
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
