import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Kpi } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    dateClosed } from "../utils/fixtures"

export class KPIAbsoluteDateFilterApp extends Component {
    render() {
        return (
            <div style={{ height: 300 }}>
                <p>KPI Average Amount</p>
                <p>Date filter from 2010-01-01 to 2011-01-01</p>
                <b>
                    <Kpi
                        projectId={projectId}
                        measure={avgAmount}
                        filters={[
                        {
                            absoluteDateFilter: {
                                dataSet: {
                                    identifier: dateClosed
                                },
                                from: '2010-01-01',
                                to: '2011-01-01'
                            }
                        }
                        ]}
                    />
                </b>
            </div>
        );
    }
}

export default KPIAbsoluteDateFilterApp;
