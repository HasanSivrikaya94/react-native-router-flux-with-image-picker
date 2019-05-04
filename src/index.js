import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import start from './startPage';
import img from './img';

const app = () =>{
    return(
        <Router>
            <Scene key = 'root'
                    headerLayoutPreset="center">
                    <Scene key = 'start'
                            component = {start}
                            title = 'Start Page'/>
                    
                    <Scene key = 'img'
                            component = {img}
                            title = 'Import Image' />
            </Scene>
        </Router>
    )
}
export default app;