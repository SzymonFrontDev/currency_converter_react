import React from 'react';
import './App.css';
import { Form } from './Form';
import { Clock } from "./Clock";

function App({ calculateResult, result }) {

    return (
        <div className="app">
            <Clock />
            <Form/>
        </div>
    );
}

export default App;