import React, {useState} from 'react';
import Button from '../Button/Button';
import css from './Counter.module.css'
import Input from '../Input/Input';

export type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    startCantBeLessThan: number
    onChangeMinValue?: (value: number) => void
    onChangeMaxValue?: (value: number) => void
    saveSettings: () => void
    disabled?: boolean
}

// const Counter: React.FC<CounterPropsType> = ({minValue, maxValue}) => {
const CounterSettings = ({
                             minValue,
                             maxValue,
                             startCantBeLessThan,
                             disabled,
                             ...restProps
                         }: CounterSettingsPropsType) => {


    const onClickSetButton = () => {
        restProps.saveSettings()
    }

    return (
        <div className={css.table}>
            <div className={css.settingsArea}>
                <div className={css.settingsLine}>
                    <span className={css.settingsLabel}>max value:</span>
                    <Input
                        type={'number'}
                        name={'max'}
                        value={maxValue}
                        onChangeNumber={restProps.onChangeMaxValue}
                        error={maxValue <= minValue || maxValue <= startCantBeLessThan}
                    />
                </div>
                <div className={css.settingsLine}>
                    <span className={css.settingsLabel}>min value:</span>
                    <Input
                        type={'number'}
                        name={'min'}
                        value={minValue}
                        onChangeNumber={restProps.onChangeMinValue}
                        error={maxValue <= minValue || minValue < startCantBeLessThan}
                    />
                </div>
            </div>


            <div className={css.buttonsArea}>
                <Button disabled={disabled} name={'set'} callback={onClickSetButton}/>
            </div>
        </div>
    );
};

export default CounterSettings;