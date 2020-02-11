import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { PieChart, Model} from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    productName } from "../utils/fixtures"

export class PieChartApp extends Component {
    render() {
        const measures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0")
        ];

        const attribute = 
            Model.attribute(productName)
                .localIdentifier("Product Name");

        return (
            <div style={{ height: 300 }}>
                <PieChart
                    projectId = {projectId}
                    measures = {measures}
                    viewBy = {attribute}
                    config = {{
                        colors: ['#14b2e2','#04d438','#1423c9','#ff0000','#cc00ff','#ffff00']
                    }}
                />
            </div>
        );
    }
}

export default PieChartApp;
