import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './Input.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeNumber?: (value: number) => void
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: boolean
    spanClassName?: string
}

const Input: React.FC<SuperInputTextPropsType> = (
    {
        onChange, onChangeNumber, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps
    }
) => {


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeNumber && onChangeNumber(parseInt(e.currentTarget.value))

        onChangeText && onChangeText(e.currentTarget.value)
    }

    /*const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {


        if (restProps.type === 'number') {
            const charCode = +e.key
            console.log(charCode)
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                // e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.value.length)
                console.log('here')
                return
            }


            if (charCode === NaN) {
                console.log('here 2')
                return
            }
        }
    }*/

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    // const finalSpanClassName = `${s.error} ${spanClassName ?? ''}`
    const finalInputClassName = `${s.superInput} ${className ?? ''} ${error ? s.errorInput : ''}`

    return (
        <>
            <input
                // type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                // onKeyDown={onKeyDownCallback}
                className={finalInputClassName}

                {...restProps}
            />
            {/*{error && <span className={finalSpanClassName}>{error}</span>}*/}
        </>
    )
}

export default Input
