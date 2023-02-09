import React from 'react';

type CarsType = {
    manufacturer: string
    model: string
}
const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]


export const Map = () => {
    return (
        <div>
            {topCars.map(el => <li key={el.model}>{el.manufacturer}</li>)}
        </div>
    );
};
