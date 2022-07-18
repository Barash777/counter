import React, {useState} from 'react';
import Counter from '../Counter/Counter';
import CounterSettings from '../Counter/CounterSettings';
import css from './WednesdayHWCounter.module.css'
import {AppStateType} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux'
import {changeCounterValueAC, changeMaxValueAC, changeMinValueAC} from '../../reducers/counterReducer';
import {loadState, saveState} from '../../app/localStorage';


// const keyForState = 'WednesdayHWState'
const startCantBeLessThan = 0;
const defaultMaxValue = 5;

const WednesdayHWCounter = () => {

    const state = loadState()
    const minSettingsValueStart = state?.counter.min ?? startCantBeLessThan;
    const maxSettingsValueStart = state?.counter.max ?? defaultMaxValue;

    const [minSettingsValue, setMinSettingsValue] = useState<number>(minSettingsValueStart || startCantBeLessThan)
    const [maxSettingsValue, setMaxSettingsValue] = useState<number>(maxSettingsValueStart || defaultMaxValue)

    const [minCounterValue, setMinCounterValue] = useState<number>(minSettingsValueStart || startCantBeLessThan)
    const [maxCounterValue, setMaxCounterValue] = useState<number>(maxSettingsValueStart || defaultMaxValue)


    const counterValue = useSelector((state: AppStateType) => state.counter.value);
    // console.log('counterValue = ', counterValue)
    const dispatch = useDispatch();

    const setCounterHandler = (value: number) => {
        dispatch(changeCounterValueAC(value))
        // saveState(store.getState(), keyForState)
    }

    const onChangeMinValue = (value: number) => {
        // dispatch(changeMinValueAC(value))
        setMinSettingsValue(value)
    }
    const onChangeMaxValue = (value: number) => {
        // dispatch(changeMaxValueAC(value))
        setMaxSettingsValue(value)
    }

    const saveSettings = () => {
        // set values for min/max states
        setMaxCounterValue(maxSettingsValue)
        setMinCounterValue(minSettingsValue)
        // save to localStorage
        dispatch(changeMinValueAC(minSettingsValue))
        dispatch(changeMaxValueAC(maxSettingsValue))
        // saveState(store.getState(), keyForState)
    }

    function invalidParameters(): boolean {
        // 1. check min value; 2. max can't be less than min
        return (minSettingsValue < startCantBeLessThan || maxSettingsValue <= minSettingsValue)
    }

    function parametersChanged(): boolean {
        // min and max values are the same as
        return minSettingsValue === minSettingsValueStart &&
            maxSettingsValue === maxSettingsValueStart
    }

    // disable or not 'set' button
    function isDisabledButton(): boolean {
        return invalidParameters() || parametersChanged()
    }


    return (
        <div>
            <span className={css.likeInlineBlock}>
                <CounterSettings
                    minValue={minSettingsValue}
                    maxValue={maxSettingsValue}
                    startCantBeLessThan={startCantBeLessThan}
                    onChangeMinValue={onChangeMinValue}
                    onChangeMaxValue={onChangeMaxValue}
                    saveSettings={saveSettings}
                    disabled={isDisabledButton()}
                />
            </span>
            <span className={css.likeInlineBlock}>
                <Counter
                    counter={counterValue}
                    setCounter={setCounterHandler}
                    minValue={minCounterValue}
                    maxValue={maxCounterValue}
                    incorrectParameters={invalidParameters()}
                    changedParameters={!parametersChanged()}
                />
            </span>
        </div>
    );
};

export default WednesdayHWCounter;