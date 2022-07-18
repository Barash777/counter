import React, {useEffect} from 'react';
import Button from '../Button/Button';
import css from './Counter.module.css'
import Display from '../Display/Display';

export type CounterPropsType = {
    counter: number,
    setCounter: (value: number) => void,
    minValue: number
    maxValue: number
    incorrectParameters?: boolean
    changedParameters?: boolean
    setButton?: boolean
    callbackSetButton?: () => void
    // hide?: boolean
}

// const Counter: React.FC<CounterPropsType> = ({minValue, maxValue}) => {
const Counter = ({
                     counter,
                     setCounter,
                     minValue,
                     maxValue,
                     setButton,
                     incorrectParameters,
                     changedParameters,
                     callbackSetButton
                 }: CounterPropsType) => {

    // const [number, setNumber] = useState<number>(minValue)

    // check the number after the settings were changed and the number is outside of the range
    useEffect(() => {
        if (counter < minValue || counter > maxValue) {
            setCounter(minValue)
        }
    }, [counter, minValue, maxValue])
    // number > maxValue && setNumber(maxValue)

    const inc = () => {
        // number < maxValue && setNumber(++number)
        counter < maxValue && setCounter(counter + 1) // !!! changed !!!
    }
    const reset = () => {
        counter !== minValue && setCounter(minValue)
    }

    // const dataClassName = `${css.data} ${number >= maxValue ? css.maxNumber : ''}`
    let dataClassName = `${css.data} ${counter >= maxValue ? css.maxNumber : ''}`
    let dataString = counter.toString()

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
                <Button disabled={counter >= maxValue || isDisabled()} name={'inc'} callback={inc}/>
                <Button disabled={counter <= minValue || isDisabled()} name={'reset'} callback={reset}/>
                {setButton && <Button name={'set'} callback={callbackSetButton ? callbackSetButton : () => {
                }}/>}
            </div>
        </div>
    );
};

export default Counter;