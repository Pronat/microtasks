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
              <button onClick={onclickHandler}>{`show me ${props.title}`}</button>
          </div>
      )



};
