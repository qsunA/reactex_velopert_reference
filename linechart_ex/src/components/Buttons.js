import React from 'react';

const pairs = ['BTCUSD','ETHUSD','XRPUSD'];

const Buttons = ({onChangePair}) => {
    const buttonList = pairs.map(
        pair => (<button key={pair} onClick={()=> onChangePair(pair)}>{pair}</button>)
    );

    return (
        <div className="Buttons">
        {
            buttonList
        }
        </div>
    )
}

export default Buttons;