import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { BarChart, Model} from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    avgWon, 
    productName } from "../utils/fixtures"

export class BarChartApp extends Component {
    render() {
        const measures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0"),
            Model.measure(avgWon)
                .localIdentifier("minAmount")
                .format("#,##0")
        ];

        const attribute = 
            Model.attribute(productName)
                .localIdentifier("Product Name");

        return (
            <div style={{ height: 300 }}>
                <BarChart
                    projectId = {projectId}
                    measures = {measures}
                    viewBy = {attribute}
                    config = {{
                        colors: ['#14b2e2','#04d438']
                    }}
                />
            </div>
        );
    }
}

export default BarChartApp;
