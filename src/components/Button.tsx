import React from 'react';

type ButtonType = {
    title: string
}

export const Button = (props: ButtonType) => {
    return (
        <div>
            <button>{props.title}</button>
        </div>
    );
};
