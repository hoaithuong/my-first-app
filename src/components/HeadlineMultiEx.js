import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Headline, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {
    projectId,
    avgAmount,
    avgWon } from "../utils/fixtures"

export class HeadlineMultiApp extends Component {
    render() {
        const primaryMeasure = 
            Model.measure(avgAmount)
                .localIdentifier("avgAmount");

        const secondaryMeasure = 
            Model.measure(avgWon)
                .localIdentifier("avgWon");

        return (
            <Headline
                projectId = {projectId}
                primaryMeasure = {primaryMeasure}
                secondaryMeasure = {secondaryMeasure}
            />
        );
    }
}

export default HeadlineMultiApp;
