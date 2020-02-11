import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { AreaChart, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    avgWon, 
    productName } from "../utils/fixtures"

/*const measures = [
  {
      measure: {
          localIdentifier: 'avgAmount',
          definition: {
              measureDefinition: {
                  item: {
                      identifier: 'aoJqpe5Ib4mO'
                  }
              }
          },
          format: '#,##0'
      }
  },
  {
    measure: {
        localIdentifier: 'minAmount',
        definition: {
            measureDefinition: {
                item: {
                    identifier: 'agEEuYDOefRs'
                }
            }
        },
        format: '#,##0'
    }
}
]; 

const attribute = {
  visualizationAttribute: {
      displayForm: {
          identifier: 'label.product.id.name'
      },
      localIdentifier: 'Product Name'
  }
};  */

export class AreaChartApp extends Component {
    render() {
        const measures = [
            Model.measure(avgAmount)
                .localIdentifier("avgAmount")
                .format("#,##0"),
            Model.measure(avgWon)
                .localIdentifier("minAmount")
                .format("#,##0")
        ];

        const attribute = 
            Model.attribute(productName)
                .localIdentifier("Product Name");

        return (
            <div style={{ height: 300 }}>
                <AreaChart
                    projectId = {projectId}
                    measures = {measures}
                    viewBy = {attribute}
                    config = {{
                        colors: ['#14b2e2' , '#04d438']
                    }}
                />
            </div>
        );
    }
}

export default AreaChartApp;
