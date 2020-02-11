import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { BubbleChart, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {
    projectId,
    avgAmount,
    avgWon,
    productName } from "../utils/fixtures"

export class BubbleChartApp extends Component {
    render() {
        const measures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0"),
            Model.measure(avgWon)
                .localIdentifier("avgWon")
                .format("#,##0")
        ];

        const attribute = 
            Model.attribute(productName)
                .localIdentifier("Product Name");

        return (
            <div style={{ height: 300 }}>
                <BubbleChart
                    projectId = {projectId}
                    xAxisMeasure = {measures[0]}
                    yAxisMeasure = {measures[1]}
                    viewBy = {attribute}
                    config = {{
                        colors: ['#14b2e2','#04d438','#1423c9','#ff0000','#cc00ff','#ffff00']
                    }}
                />
            </div>
        );
    }
}

export default BubbleChartApp;
