import React, {useState} from 'react';
import Counter from '../Counter/Counter';

const HomeworkCounter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <Counter counter={counter} setCounter={setCounter} minValue={0} maxValue={5}/>
        </>
    );
};

export default HomeworkCounter;