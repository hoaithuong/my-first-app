import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Visualization } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    VisualizationCombochart11Feb } from "../utils/fixtures"

export class VisualizationCombochart11FebApp extends Component {
    render() {
        return (
            <div style={{ height: 400, width: 600 }}>
                <Visualization
                    projectId={projectId}
                    identifier={VisualizationCombochart11Feb}
                    config={{
                        colors: ['#14b2e2','#04d438','#1423c9','#ff0000','#cc00ff','#ffff00'],
                        legend: {
                          enabled: true,
                          position: 'bottom'
                        }
                    }}
                />
            </div>
        );
    }
}

export default VisualizationCombochart11FebApp;
