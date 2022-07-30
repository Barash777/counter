import React, {useState} from 'react';
import Counter from '../Counter/Counter';

const HomeworkCounter = () => {
    const [counter, setCounter] = useState(0)
    const minValue = 0, maxValue = 5;

    return (
        <Counter counter={counter} setCounter={setCounter} minValue={minValue} maxValue={maxValue}/>
    );
};

export default HomeworkCounter;