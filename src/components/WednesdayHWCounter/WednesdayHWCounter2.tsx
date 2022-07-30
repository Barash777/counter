import React, {useState} from 'react';
import Counter from '../Counter/Counter';
import css from './WednesdayHWCounter.module.css';
import CounterSettings from '../Counter/CounterSettings';
import {loadState} from '../../app/localStorage';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../app/store';
import {changeCounterValueAC, changeMaxValueAC, changeMinValueAC} from '../../reducers/counterReducer';

// const keyForSettingsMinValue = 'WednesdayHWState'
const startCantBeLessThan = 0;
const defaultMaxValue = 5;

const WednesdayHWCounter2 = () => {

    const state = loadState()
    const minSettingsValueStart = state?.counter.min ?? startCantBeLessThan;
    const maxSettingsValueStart = state?.counter.max ?? defaultMaxValue;

    const [showSettings, setShowSettings] = useState<boolean>(false)

    const [minSettingsValue, setMinSettingsValue] = useState<number>(minSettingsValueStart || startCantBeLessThan)
    const [maxSettingsValue, setMaxSettingsValue] = useState<number>(maxSettingsValueStart || defaultMaxValue)

    const [minCounterValue, setMinCounterValue] = useState<number>(minSettingsValueStart || startCantBeLessThan)
    const [maxCounterValue, setMaxCounterValue] = useState<number>(maxSettingsValueStart || defaultMaxValue)

    const counterValue = useSelector((state: AppStateType) => state.counter.value);
    const dispatch = useDispatch();

    const setCounterHandler = (value: number) => {
        dispatch(changeCounterValueAC(value))
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
        setShowSettings(false)
        // save to localStorage
        dispatch(changeMinValueAC(minSettingsValue))
        dispatch(changeMaxValueAC(maxSettingsValue))
    }

    const invalidParameters: boolean = (minSettingsValue < startCantBeLessThan || maxSettingsValue <= minSettingsValue)

    const parametersChanged: boolean = minSettingsValue === minSettingsValueStart &&
        maxSettingsValue === maxSettingsValueStart

    // disable or not 'set' button
    const isDisabledButton: boolean = invalidParameters || parametersChanged

    const callbackSetButtonHandler = () => {
        setShowSettings(true)
    }

    return (
        <div>
            <span className={css.likeInlineBlock}>
                {showSettings
                    ? <CounterSettings
                        minValue={minSettingsValue}
                        maxValue={maxSettingsValue}
                        startCantBeLessThan={startCantBeLessThan}
                        onChangeMinValue={onChangeMinValue}
                        onChangeMaxValue={onChangeMaxValue}
                        saveSettings={saveSettings}
                        disabled={isDisabledButton}
                    /> : <Counter
                        counter={counterValue}
                        setCounter={setCounterHandler}
                        minValue={minCounterValue}
                        maxValue={maxCounterValue}
                        incorrectParameters={invalidParameters}
                        changedParameters={!parametersChanged}
                        setButton={true}
                        callbackSetButton={callbackSetButtonHandler}
                    />}
            </span>
        </div>
    );

};

export default WednesdayHWCounter2;