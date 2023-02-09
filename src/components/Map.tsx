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


const Map = (props: CarsType) => {
    return (
        <div>
            {props.manufacturer}
        </div>
    );
};

export default Map;