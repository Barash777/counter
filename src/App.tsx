import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import HomeworkCounter from './components/MondayExamCounter/MondayExamCounter';
import TuesdayHWCounter from './components/TuesdayHWCounter/TuesdayHWCounter';
import Links from './components/Links/Links';
import Content from './components/Content/Content';

/*{/!*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*!/}
    {/!*<button onClick={setToLocalStorageHandler}>setToLocalStorage</button>*!/}
        {/!*<button onClick={clearLocalStorageHandler}>clear</button>*!/}*/

// https://stackoverflow.com/questions/72158534/react-strictmode-seems-to-work-differently-in-different-react-version-18-1-0-vs
// https://github.com/reactwg/react-18/discussions/21
//     https://reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching

// const key = 'counterValue'

function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <Links/>
                <Content/>
                {/*<HomeworkCounter/>*/}
                {/*<HomeworkCounterTuesday/>*/}
            </div>
        </BrowserRouter>
    )

    /*
    function getFromLocalStorageHandler() {
        const valueFromLocal = localStorage.getItem(key)
        return valueFromLocal ? JSON.parse(valueFromLocal) : null
    }

    function setToLocalStorageHandler() {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const [value, setValue] = useState(getFromLocalStorageHandler() || 0)


    useEffect(() => {
        setToLocalStorageHandler()
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }


    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
    */

    /*
    // WORKS with strict
    // !!! my realization !!!
    const valueFromLocal = localStorage.getItem(key)
    const newValue = valueFromLocal ? JSON.parse(valueFromLocal) : 0
    const [value, setValue] = useState(newValue)

    const incHandler = () => {
        setValue(value + 1)
        // setToLocalStorageHandler()
    }

    // const getFromLocalStorageHandler = () => {
    //     const valueFromLocal = localStorage.getItem(key)
    //     const newValue = valueFromLocal ? JSON.parse(valueFromLocal) : value
    //     setValue(valueFromLocal)
    // }

    const setToLocalStorageHandler = () => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
    */
}

export default App;