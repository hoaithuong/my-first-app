import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { ScatterPlot, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    avgWon, 
    productName } from "../utils/fixtures"

export class ScatterPlotApp extends Component {
    render() {
        const measuresAmount = 
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0");

        const measuresWon = 
            Model.measure(avgWon)
                .localIdentifier("avgWon")
                .format("#,##0");

        const attribute = 
            Model.attribute(productName)
                .localIdentifier("Product Name");

        return (
            <div style={{ height: 300 }}>
                <ScatterPlot
                    projectId = {projectId}
                    xAxisMeasure = {measuresAmount}
                    yAxisMeasure = {measuresWon}
                    attribute = {attribute}
                />
            </div>
        );
    }
}

export default ScatterPlotApp;
