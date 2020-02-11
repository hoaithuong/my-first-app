import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Treemap, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    Department, 
    productName } from "../utils/fixtures"

export class TreemapApp extends Component {
    render() {
        const measures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
        ];

        const product = 
            Model.attribute(productName)
                .localIdentifier("Product Name");

        const department = 
            Model.attribute(Department)
                .localIdentifier("Department");

        return (
            <div style={{ height: 300 }}>
                <Treemap
                        projectId = {projectId}
                        measures = {measures}
                        viewBy = {product}
                        segmentBy = {department}
                />
            </div>
        );
    }
}

export default TreemapApp;
