import React from 'react';

type ButtonType = {
    title: () => void
}

export const Button = (props: ButtonType) => {
      return (
          <div>
              <button>{`show me ${props.title}`}</button>
          </div>
      )



};
