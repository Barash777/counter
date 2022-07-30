import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';

function App() {

    return (
        <HashRouter>
            <div className="App">
                <Navigation/>
                <Content/>
            </div>
        </HashRouter>
    )

}

export default App;