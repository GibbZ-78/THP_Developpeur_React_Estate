import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyShow.css';

const myURL = "http://localhost:3000/properties/";
const myMethod = "get";
const myHeader = {'Content-Type': 'application/json'};

const PropertyShow = () => {

  let { propId } = useParams();
  let myDynURL = myURL + propId.toString();
  console.log(`  > Dynamic URL: ${myDynURL}`);
  const [property, setProperty] = useState([]);
  
  useEffect(() => {
    fetch(myDynURL, { method: myMethod, headers: myHeader })
    .then(response => response.json())
    .then(data => setProperty(data))
    .catch(console.error);
  }, []);


  const myImagePath = `../../assets/images/${property.image_url}`;
  console.log(`  > Property: ${property.title}`)
  console.log(`  > Path: ${myImagePath}`)
  const myImage = require(myImagePath);

  return (
    <main>
      <ul>
        <li key={'image_'+propId.toString()}><img src={myImage} alt={property.title} /></li>
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

