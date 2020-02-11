import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { ComboChart, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {
    projectId,
    avgAmount,
    avgWon,
    productName } from "../utils/fixtures"

export class ComboChartApp extends Component {
    render() {
        const primaryMeasures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0")
        ];

        const secondaryMeasures = [
            Model.measure(avgWon)
                .localIdentifier("avgWon")
                .format("#,##0")
        ];

        const attribute = 
            Model.attribute(productName)
                .localIdentifier("Product Name");

        return (
            <div style={{ height: 300 }}>
                <ComboChart
                    projectId = {projectId}
                    primaryMeasures = {primaryMeasures}
                    secondaryMeasures = {secondaryMeasures}
                    viewBy = {attribute}
                    config = {{
                        colors: ['#14b2e2','#04d438']
                    }}
                />
            </div>
        );
    }
}

export default ComboChartApp;
