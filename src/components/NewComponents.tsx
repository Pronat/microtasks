import React from 'react';

// type NewComponentsType = {
//     students:StudentType[];
// }
// type StudentType = {
//     id: number,
//     name: string,
//     age: number
// }


type NewComponentsType = {
    topCars: TopCarsType[];
}
type TopCarsType = {
    manufacturer: string,
    model: string
}


// const topCars = [
//     {manufacturer:'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]


export const NewComponents = (props: NewComponentsType) => {
    return (
        <div>
            <ul>
                {props.topCars.map((objectFromTopCarsArray, index) => {
                    return (
                        <table>
                            <tr>
                                <th id={objectFromTopCarsArray.manufacturer}>
                                    <span>{objectFromTopCarsArray.manufacturer}</span>
                                    <span>, model: {objectFromTopCarsArray.model}</span>
                                </th>
                            </tr>
                        </table>


                    )
                })}
            </ul>
        </div>
    );
};


// export const NewComponents = (props: NewComponentsType) => {
//     return (
//         <div>
//             <ul>
//                 {props.students.map((objectFromStudentArray, index) => {
//                     return (
//                         //т.к. выше мы уже зашли в props.students
//                 <li key={objectFromStudentArray.id}>
//                     <span>{objectFromStudentArray.name}</span>
//                     <span>, age: {objectFromStudentArray.age}</span>
//                     </li>     //выводим name и age
//
//                 )
//                 })}
//             </ul>
//         </div>
//     );
// };
//
