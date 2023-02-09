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
            <table>
            <tr>
            {topCars.map((el,index) => <td key={index}>
                <span> manufactored: {el.manufacturer},</span>
                <span> model: {el.model}
                </span>
            </td>)}
            </tr>
            </table>
        </div>
    );
};
