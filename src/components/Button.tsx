import React from 'react';

type ButtonType = {
    title: string
    callBack: () => void
}

export const Button = (props: ButtonType) => {
        const onclickHandler = () => {
                props.callBack()
        }
    return (
        <div>
            <span>
                  <button onClick={onclickHandler}>{props.title}</button>
            </span>

        </div>
    );
};
