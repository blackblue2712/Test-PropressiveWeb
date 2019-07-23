import React from 'react';
import Card from './Card';

const ListCard  = ( {robots} ) => { 
    return robots.map( (rb, index) => {
        return <Card key={index} robot={rb} />
    })
}


export default ListCard;
