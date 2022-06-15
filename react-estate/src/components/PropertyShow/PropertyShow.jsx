import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyShow.css';
import house1 from '../../assets/images/1.jpg';
import house2 from '../../assets/images/2.jpg';
import house3 from '../../assets/images/3.jpg';
import house4 from '../../assets/images/4.jpg';
import house5 from '../../assets/images/5.jpg';
import house6 from '../../assets/images/6.jpg';

const myURL = "http://localhost:3000/properties/";
const myMethod = "get";
const myHeader = {'Content-Type': 'application/json'};
const houses = [house1, house2, house3, house4, house5, house6];

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
  },[]);

  return (
    <main>
      <ul>
        <li key={'image_'+propId.toString()}><img src={houses[propId-1]} alt={property.title} /></li>
        <li key={'title_'+propId.toString()}>{property.title}</li>
        <li key={'price_'+propId.toString()}>{property.price} €</li>
        <li key={'descr_'+propId.toString()}>{property.description}</li>
      </ul>
    </main>
  );

}

export default PropertyShow;

