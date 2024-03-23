import React, { useContext } from 'react';
import './App.css';
import FirstStep from './Components/FirstStep';
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import { Stepper , StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import DisplayData from './Components/DisplayData';

function App() {

    const { currentStep, finalData } = useContext(multiStepContext);
    function showStep(step) {
        console.log(step);
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
        <div className = "App-header">
            <h3 style = {{color : 'red', textDecoration: 'underline'}}>Form Submission</h3>
            <div className="center-stepper">
            <Stepper style = {{width : '18%'}} activeStep = {currentStep - 1} orientation = "horizontal">
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
            { showStep(currentStep)}
            { finalData.length > 0 ? <DisplayData /> : ''}
        </div>
        </div>
    );
}
export default App;