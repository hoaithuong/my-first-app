import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Headline, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {
    projectId,
    avgAmount } from "../utils/fixtures"

export class HeadlineSingleApp extends Component {
    render() {
        const measures = 
            Model.measure(avgAmount)
                .localIdentifier("avgAmount");

        return (
            <Headline
                projectId = {projectId}
                primaryMeasure = {measures}
            />
        );
    }
}

export default HeadlineSingleApp;
