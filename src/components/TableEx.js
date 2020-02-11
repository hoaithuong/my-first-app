import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Table, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    avgWon, 
    productName } from "../utils/fixtures"

export class TableApp extends Component {
    render() {
        const measures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0"),
            Model.measure(avgWon)
                .localIdentifier("avgWon")
                .format("#,##0")
        ];

        const attributes = [
            Model.attribute(productName)
                .localIdentifier("Product Name")
        ];

        return (
            <div style={{ height: 300 }}>
                <Table
                    projectId = {projectId}
                    measures = {measures}
                    attributes = {attributes}
                />
            </div>
        );
    }
}

export default TableApp;
