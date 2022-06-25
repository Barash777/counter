import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import css from './Button.module.css'


type ButtonPropsType = {
    name: string,
    callback: () => void
    disabled?: boolean
    addClass?: string
}


const Button = (props: ButtonPropsType) => {
    
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <>
            <button
                className={`${css.btn} ${props.addClass}`}
                onClick={onClickHandler}
                disabled={props.disabled}
            >{props.name}</button>
        </>
    );
};

export default Button;


/*
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    name: string,
    callback: () => void,
    addClass?: string
}

const Button: React.FC<ButtonPropsType> = ({name, callback, addClass, ...rest}) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <>
            <button className={`${css.btn} ${addClass}`} onClick={onClickHandler} {...rest}>{name}</button>
        </>
    );
};

export default Button;
*/