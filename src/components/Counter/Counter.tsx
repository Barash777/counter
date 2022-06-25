import React, {useState} from 'react';
import Button from '../Button/Button';
import css from './Counter.module.css'
import Display from '../Display/Display';

export type CounterPropsType = {
    minValue: number
    maxValue: number
    incorrectParameters?: boolean
    changedParameters?: boolean
    setButton?: boolean
}

// const Counter: React.FC<CounterPropsType> = ({minValue, maxValue}) => {
const Counter = ({
                     minValue, maxValue, setButton, incorrectParameters, changedParameters
                 }: CounterPropsType) => {

    const [number, setNumber] = useState<number>(minValue)

    // check the number after the settings were changed
    number < minValue && setNumber(minValue)
    number > maxValue && setNumber(maxValue)

    const inc = () => {
        // number < maxValue && setNumber(++number)
        number < maxValue && setNumber(number + 1) // !!! changed !!!
    }
    const reset = () => {
        number !== minValue && setNumber(minValue)
    }

    // const dataClassName = `${css.data} ${number >= maxValue ? css.maxNumber : ''}`
    let dataClassName = `${css.data} ${number >= maxValue ? css.maxNumber : ''}`
    let dataString = number.toString()

    if (incorrectParameters) {
        dataString = 'Incorrect value!'
        dataClassName = `${css.data} ${css.incorrectParameters}`
    } else if (changedParameters) {
        dataString = 'enter values\n and press \'set\''
        dataClassName = `${css.data} ${css.changedParameters}`
    }

    function isDisabled() {
        return incorrectParameters || changedParameters
    }

    return (
        <div className={css.table}>
            <Display
                divClassName={css.displayArea}
                dataClassName={dataClassName}
                data={dataString}
                // data={'Hello my team! You are awesome!'}
            />
            <div className={css.buttonsArea}>
                <Button disabled={number >= maxValue || isDisabled()} name={'inc'} callback={inc}/>
                <Button disabled={number <= minValue || isDisabled()} name={'reset'} callback={reset}/>
                {setButton && <Button name={'set'} callback={() => {
                }}/>}
            </div>
        </div>
    );
};

export default Counter;