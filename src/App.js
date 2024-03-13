import React, { Component } from 'react';
import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import { Stepper , StepLabel, Step } from '@material-ui/core';

function App() {
    function showStep(step) {
        switch (step) {
            case 1:
                return <FirstStep/>;
            case 2:
                return <SecondStep/>;
            case 3:
                return <ThirdStep/>;
            default:
                return <FirstStep/>;
        }
    }
    return ( 
        <div className = "App" >
        <header className = "App-header">
            <h3 style = {{color : 'red', textDecoration: 'underline'}}>Form Submission</h3>
            <div className="center-stepper">
            <Stepper style = {{width : '18%'}} activeStep = "1" orientation = "horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            </div>
            { showStep(2)}
        </header>
        </div>
    );
}
export default App;