import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { PivotTable, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {  
    projectId, 
    avgAmount, 
    Department, 
    productName,
    DepartmentDirectSales } from "../utils/fixtures"

export class PivotTableApp extends Component {
    render() {
        const aveAmount = [
          Model.measure(avgAmount)
              .localIdentifier("AverageAmount")];
        
        const product = [
          Model.attribute(productName)
              .localIdentifier("Product Name")];
        
        const department = [
          Model.attribute(Department)
              .localIdentifier("Department")];

        const sortBy = [{
          measureSortItem:{
            direction: 'asc',
            locators: [{
              attributeLocatorItem:{
                attributeIdentifier:Department,
                element:DepartmentDirectSales
              }
              },
              {
                measureLocatorItem: {
                  measureIdentifier:avgAmount
              }
            }
          ]
        }
        }];
        
        return (
            <div style={{ height: 300 }}>
                <PivotTable
                    projectId = {projectId}
                    measures = {aveAmount}
                    rows = {product}
                    columns = {department}
                    //sortBy = {sortBy}
                />
            </div>
        );
    }
}
    
export default PivotTableApp;
