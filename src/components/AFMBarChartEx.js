import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { AfmComponents } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    avgWon, 
    productName } from "../utils/fixtures"

const { BarChart } = AfmComponents;
const afm = {
    measures: [
        {
            localIdentifier: 'avgAmount',
            definition: {
                measure: {
                    item: {
                        identifier: avgAmount
                    }
                }
            },
            alias: 'Avg Amount'
        },
        {
            localIdentifier: 'avgWon',
            definition: {
                measure: {
                    item: {
                        identifier: avgWon
                    }
                }
            },
            alias: 'Avg Won'
        },
    ],
    attributes: [
        {
            localIdentifier: 'productName',
            displayForm: {
                identifier: productName
            }
        }
    ]
}

const AFMBarChartApp = () => {
    return (
        <div style={{ height: 300 }}>
            <BarChart
                afm={afm}
                projectId={projectId}
           />
        </div>
    );
}

export default AFMBarChartApp;
