import React, {useState} from 'react';
import Counter from '../Counter/Counter';
import css from './TuesdayHWCounter.module.css';
import CounterSettings from '../Counter/CounterSettings';

const keyForSettingsMinValue = 'TuesdayHW2SettingsMin'
const keyForSettingsMaxValue = 'TuesdayHW2SettingsMax'
const startCantBeLessThan = 0;

const TuesdayHWCounter2 = () => {

    function getFromLocalStorageHandler(key: string) {
        const valueFromLocal = localStorage.getItem(key)
        return valueFromLocal ? JSON.parse(valueFromLocal) : false
    }

    function setToLocalStorageHandler(key: string, value: number) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const [showSettings, setShowSettings] = useState<boolean>(false)

    const [minSettingsValue, setMinSettingsValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMinValue) || startCantBeLessThan)
    const [maxSettingsValue, setMaxSettingsValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMaxValue) || 5)

    const [minCounterValue, setMinCounterValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMinValue) || startCantBeLessThan)
    const [maxCounterValue, setMaxCounterValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMaxValue) || 5)

    const [counter, setCounter] = useState(startCantBeLessThan)

    const onChangeMinValue = (value: number) => setMinSettingsValue(value)
    const onChangeMaxValue = (value: number) => setMaxSettingsValue(value)

    const saveSettings = () => {
        // save to localStorage
        setToLocalStorageHandler(keyForSettingsMinValue, minSettingsValue)
        setToLocalStorageHandler(keyForSettingsMaxValue, maxSettingsValue)
        // set values for min/max states
        setMaxCounterValue(maxSettingsValue)
        setMinCounterValue(minSettingsValue)
        setShowSettings(false)
    }

    function invalidParameters(): boolean {
        // 1. check min value; 2. max can't be less than min
        return (minSettingsValue < startCantBeLessThan || maxSettingsValue <= minSettingsValue)
    }

    function parametersChanged(): boolean {
        // min and max values are the same as
        return minSettingsValue === getFromLocalStorageHandler(keyForSettingsMinValue) &&
            maxSettingsValue === getFromLocalStorageHandler(keyForSettingsMaxValue)
    }

    // disable or not 'set' button
    function isDisabledButton(): boolean {
        return invalidParameters() || parametersChanged()
    }

    const callbackSetButtonHandler = () => {
        setShowSettings(true)
    }

    return (
        <div>
        <span className={css.likeInlineBlock}>
            {showSettings && <CounterSettings
                minValue={minSettingsValue}
                maxValue={maxSettingsValue}
                startCantBeLessThan={startCantBeLessThan}
                onChangeMinValue={onChangeMinValue}
                onChangeMaxValue={onChangeMaxValue}
                saveSettings={saveSettings}
                disabled={isDisabledButton()}
            />}
        </span>
            <span className={css.likeInlineBlock}>
            {!showSettings && <Counter
                counter={counter}
                setCounter={setCounter}
                minValue={minCounterValue}
                maxValue={maxCounterValue}
                incorrectParameters={invalidParameters()}
                changedParameters={!parametersChanged()}
                setButton={true}
                callbackSetButton={callbackSetButtonHandler}
            />}
        </span>
        </div>
    );

};

export default TuesdayHWCounter2;