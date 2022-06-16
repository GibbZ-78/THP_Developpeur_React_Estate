import React from 'react'
import './Cards.css';
import CardItem from '../CardItem/CardItem';

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/26/f0/f2/lagoon-pool-lagoon-villa.jpg?w=900&h=-1&s=1'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Wild'
                            path='/propertiesindex'
                        />
                        <CardItem
                            src='images/2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/propertiesindex'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Fashion'
                            path='/propertiesindex'
                        />
                        <CardItem
                            src='images/4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Confort'
                            path='/propertiesindex'
                        />
                        <CardItem
                            src='images/8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Maniac'
                            path='/propertiesindex'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards