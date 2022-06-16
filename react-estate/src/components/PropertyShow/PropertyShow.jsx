import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import './PropertyShow.css';

const myURL = "http://localhost:3000/properties/";
const myMethod = "get";
const myHeader = {'Content-Type': 'application/json'};

const PropertyShow = () => {

  let { propId } = useParams();
  const [property, setProperty] = useState();
  const [myDynURL, setDynURL] = useState();
  console.log(`  > Dynamic URL: ${myDynURL}`);

  useEffect(() => {
    setDynURL(myURL + propId.toString());
    fetch(myDynURL, { method: myMethod, headers: myHeader })
    .then(response => response.json())
    .then(data => setProperty(data))
    .catch(console.error);
  });


  let myImagePath = `../../assets/images/${property.image_url}`;
  console.log(`  > Property: ${property.title}`)
  console.log(`  > Path: ${myImagePath}`)
  let myImage = require(myImagePath);

  return (
    <main>
      <ul>
        <li key={'image_'+propId.toString()}><Image src={myImage} alt={property.title} fluid="true" /></li>
        <li key={'title_'+propId.toString()}>{property.title}</li>
        <li key={'price_'+propId.toString()}>{property.price} €</li>
        <li key={'descr_'+propId.toString()}>{property.description}</li>
        <li key={'type_'+propId.toString()}>{property.property_type_id}</li>
        <li key={'owner_'+propId.toString()}>{property.user_id}</li>
      </ul>
    </main>
  );

}

export default PropertyShow;

