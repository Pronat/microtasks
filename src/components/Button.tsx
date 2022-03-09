import React from 'react';

type ButtonType = {
    button: string
}

export const Button = (props: ButtonType) => {
    return (
        <div>
            <button>{props.button}</button>
        </div>
    );
};
