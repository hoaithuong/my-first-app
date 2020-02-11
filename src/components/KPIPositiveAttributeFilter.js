import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { Kpi } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    Department } from "../utils/fixtures"

export class KPIPositiveAttributeFilterApp extends Component {
    render() {   
        return (
            <div style={{ height: 300 }}>
                <p>KPI Average Amount</p>
                <p>with Department is Direct Sales</p>
                <b>
                    <Kpi
                        projectId={projectId}
                        measure={avgAmount}
                        filters={[
                            {
                                positiveAttributeFilter: {
                                    displayForm: {
                                        identifier: Department
                                    },
                                    in: ['/gdc/md/fuyy58glyoi8xm90rg0h5rcywzv7iu0t/obj/1026/elements?id=1226']
                                    //if user attribute-element-uri then no need add 'textFilter: true'
                                    
                                /*  in:['Direct Sales'], 
                                    textFilter: true  */
                                    //if use attribute-element-value then has to 'textFilter: true'
                                }
                            }
                        ]}
                    />
                </b>
            </div>
        );
    }
}

export default KPIPositiveAttributeFilterApp;
