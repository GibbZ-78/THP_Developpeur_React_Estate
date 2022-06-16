import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyShow.css';

const myURL = "http://localhost:3000/properties/";
const myMethod = "get";
const myHeader = {'Content-Type': 'application/json'};

const PropertyShow = () => {

  const [property,setProperty] = useState([]);
  let { propId } = useParams();
  const myDynURL = myURL + propId.toString();

  useEffect(() => {
    fetch(myDynURL, { method: myMethod, headers: myHeader })
    .then(response => response.json())
    .then(data => {
      setProperty(data);
      console.log(data);
    }).catch(console.error);
  },[myDynURL]);

  return (
    <main>
      <ul>
        <li key={'image_'+propId.toString()}><img src={require("../../assets/images/"+property.image_url)} alt={property.title} /></li>
        <li key={'title_'+propId.toString()}>{property.title}</li>
        <li key={'price_'+propId.toString()}>{property.price} €</li>
        <li key={'descr_'+propId.toString()}>{property.description}</li>
      </ul>
    </main>
  );

}

export default PropertyShow;

