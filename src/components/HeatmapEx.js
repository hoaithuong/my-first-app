import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Heatmap, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    Department, 
    productName } from "../utils/fixtures"

export class HeatmapApp extends Component {
    render() {
        const aveAmount = 
            Model.measure(avgAmount)
                .localIdentifier("AverageAmount");
        
        const product = 
            Model.attribute(productName)
                .localIdentifier("Product Name");
        
        const department = 
            Model.attribute(Department)
                .localIdentifier("Department");
        
        return (
            <div style={{ height: 300 }}>
                <Heatmap
                    projectId = {projectId}
                    measure = {aveAmount}
                    rows = {product}
                    columns = {department}
                />
            </div>
        );
    }
}
    
export default HeatmapApp;
