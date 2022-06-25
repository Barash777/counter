import React, {useState} from 'react';
import Counter from '../Counter/Counter';
import CounterSettings from '../Counter/CounterSettings';
import css from './TuesdayHWCounter.module.css'

const keyForSettingsMinValue = 'TuesdayHWSettingsMin'
const keyForSettingsMaxValue = 'TuesdayHWSettingsMax'
const startCantBeLessThan = 0;

const TuesdayHWCounter = () => {

    function getFromLocalStorageHandler(key: string) {
        const valueFromLocal = localStorage.getItem(key)
        return valueFromLocal ? JSON.parse(valueFromLocal) : false
    }

    function setToLocalStorageHandler(key: string, value: number) {
        localStorage.setItem(key, JSON.stringify(value))
    }


    const [minSettingsValue, setMinSettingsValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMinValue) || startCantBeLessThan)
    const [maxSettingsValue, setMaxSettingsValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMaxValue) || 5)

    const [minCounterValue, setMinCounterValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMinValue) || startCantBeLessThan)
    const [maxCounterValue, setMaxCounterValue] = useState<number>(getFromLocalStorageHandler(keyForSettingsMaxValue) || 5)
    

    const onChangeMinValue = (value: number) => setMinSettingsValue(value)
    const onChangeMaxValue = (value: number) => setMaxSettingsValue(value)

    const saveSettings = () => {
        // save to localStorage
        setToLocalStorageHandler(keyForSettingsMinValue, minSettingsValue)
        setToLocalStorageHandler(keyForSettingsMaxValue, maxSettingsValue)
        // set values for min/max states
        setMaxCounterValue(maxSettingsValue)
        setMinCounterValue(minSettingsValue)
    }

    function invalidParameters() {
        // 1. check min value; 2. max can't be less than min
        if (minSettingsValue < startCantBeLessThan || maxSettingsValue <= minSettingsValue) {
            return true
        }
    }

    function parametersChanged() {
        // min and max values are the same as
        return minSettingsValue === getFromLocalStorageHandler(keyForSettingsMinValue) &&
            maxSettingsValue === getFromLocalStorageHandler(keyForSettingsMaxValue)
    }

    // disable or not 'set' button
    function isDisabledButton() {
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
                minValue={minCounterValue}
                maxValue={maxCounterValue}
                incorrectParameters={invalidParameters()}
                changedParameters={!parametersChanged()}
            />
        </span>
        </div>
    );
};

export default TuesdayHWCounter;