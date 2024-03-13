import React from 'react';
import { Button, TextField } from '@material-ui/core';
import FirstStep from './Components/FirstStep';
export default function SecondStep() {
    return( 
        <div>
            <div>
                <TextField label = "First Name" margin = "normal" variant = "outlined" color = "secondary"/>
            </div>
            <div>
                <TextField label = "Last Name" margin = "normal" variant = "outlined" color = "secondary"/>
            </div>
            <div>
                <TextField label = "Contact Number" margin = "normal" variant = "outlined" color = "secondary"/>
            </div>
            <div>
                <Button variant = "contained" color = "primary">Next</Button> 
            </div>
        </div>
    )
}