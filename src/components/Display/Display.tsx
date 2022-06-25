import React from 'react';

export type DisplayPropsType = {
    data: string
    divClassName?: string
    dataClassName?: string
}

// const Counter: React.FC<CounterPropsType> = ({minValue, maxValue}) => {
const Display = (props: DisplayPropsType) => {

    // const numberClassName = `${css.number} ${number >= maxValue ? css.maxNumber : ''}`

    return (
        <div className={props.divClassName ?? ''}>
            <span className={props.dataClassName ?? ''}>{props.data}</span>
        </div>
    );
};

export default Display;