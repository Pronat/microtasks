import React from 'react';

type NewComponentsType = {
    students:Array<StudentType>
}
type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponents = (props: NewComponentsType) => {
    return (
        <div>
            new component
        </div>
    );
};

