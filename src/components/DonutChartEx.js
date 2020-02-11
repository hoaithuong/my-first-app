import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { DonutChart, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    avgWon } from "../utils/fixtures"

export class DonutChartApp extends Component {
    render() {
        const measures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0"),
            Model.measure(avgWon)
                .localIdentifier("minAmount")
                .format("#,##0")
        ];

        return (
            <div style={{ height: 300 }}>
                <DonutChart
                    projectId = {projectId}
                    measures = {measures}
                    config = {{
                        colors: ['#14b2e2','#04d438','#1423c9']
                    }}
                />
            </div>
        );
    }
}

export default DonutChartApp;
