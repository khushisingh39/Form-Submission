import React, { Component } from 'react';
import './App.css';
import FirstStep from './Components/FirstStep';

function App() {
    return ( 
        <div className = "App" >
        <header className = "App-header">
            <h3 style = {{color : 'red', textDecoration: 'underline'}}>Form Submission</h3>
        <FirstStep/>
        </header> 
        </div>
    );
}
export default App;