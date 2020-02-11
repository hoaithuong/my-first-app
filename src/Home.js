import React from 'react';
//import logo from './logo.svg';
import './App.css';
import "@gooddata/react-components/styles/css/main.css";
import AreaChartApp from "./components/AreaChartEx"
import LineChartApp from "./components/LineChartEx"
import BarChartApp from "./components/BarChartEx"
import BubbleChartApp from "./components/BubbleChartEx"
import ColumnChartApp from "./components/ColunmChartEx"
import ComboChartApp from "./components/CombohartEx"
import DonutChartApp from "./components/DonutChartEx"
import HeadlineSingleApp from "./components/HeadlineSingleEx"
import HeadlineMultiApp from "./components/HeadlineMultiEx"
import KPIAbsoluteDateFilterApp from "./components/KPIAbsoluteDateFilter"
import KPIPositiveAttributeFilterApp from "./components/KPIPositiveAttributeFilter"
import KPINegativeAttributeFilterApp from "./components/KPINegativeAttributeFilter"
import TreemapApp from "./components/TreemapEx"
import TableApp from "./components/TableEx"
import ScatterPlotApp from "./components/ScatterPilotEx"
import PieChartApp from "./components/PieChartEx"
import HeatmapApp from "./components/HeatmapEx"
import PivotTableApp from "./components/PivotTableEx"
import VisualizationColunmchart11FebApp from "./components/VisualizationColunmchart11FebEx"
import VisualizationCombochart11FebApp from "./components/VisualizationCombochart11FebEx"
import AFMTableApp from "./components/AFMTableEx"
import AFMBarChartApp from "./components/AFMBarChartEx"
import NegativeAttributeFilterEx from "./filter/NegativeAttributeFilter"
import PositiveAttributeFilterEx from "./filter/PositiveAttributeFilter"
import DateFilterComponentEx from "./filter/DateFilter"
import DateFilterEx from "./filter/DateFilter"

const Home = () => {
    return (
      // <p>
      //   <ValidatedLoginForm></ValidatedLoginForm>
      // </p>
      <p>        
        <div>
          <h3>KPI:</h3>
          <table border="1" align="center">
            <tr>
              <th>KPI Absolute Date Filter</th>
              <th>KPI Positive Attribute Filter</th>
              <th>KPI Negative Attribute Filter</th>
            </tr>
            <tr>
              <td><KPIAbsoluteDateFilterApp></KPIAbsoluteDateFilterApp></td>
              <td><KPIPositiveAttributeFilterApp></KPIPositiveAttributeFilterApp></td>
              <td><KPINegativeAttributeFilterApp></KPINegativeAttributeFilterApp></td>
            </tr>
          </table>
        </div>
        <div>
          <h3>Area Chart Example: </h3>
          <AreaChartApp></AreaChartApp>
        </div>
        <div>
          <h3>Line Chart Example: </h3>
          <LineChartApp></LineChartApp>
        </div>
        <div>
          <h3>Bubble Chart Example: </h3>
          <BubbleChartApp></BubbleChartApp>
        </div>
        <div>
          <h3>Colunm Chart Example: </h3>
          <ColumnChartApp></ColumnChartApp>
        </div>
        <div>
          <h3>Combo Chart Example: </h3>
          <ComboChartApp></ComboChartApp>
        </div>
        <div>
          <h3>Donut Chart Example: </h3>
          <DonutChartApp></DonutChartApp>
        </div>
        <div>
          <h3>Headline Example: </h3>
          <table border="1" align="center"> 
            <tr>
              <th>Headline Chart with Single Measure Example</th>
              <th>Headline Chart with Multi Measures Example</th>
            </tr>
            <tr>
              <td><HeadlineSingleApp></HeadlineSingleApp></td>
              <td><HeadlineMultiApp></HeadlineMultiApp></td>
            </tr>
          </table>
        </div>
        <div>
          <h3>Treemap Example: </h3>
          <TreemapApp></TreemapApp>
        </div>
        <div>
          <h3>ScatterPlot Example: </h3>
          <ScatterPlotApp></ScatterPlotApp>
        </div>
        <div>
          <h3>Pie Chart Example: </h3>
          <PieChartApp></PieChartApp>
        </div>
        <div>
          <h3>Heatmap Example: </h3>
          <HeatmapApp></HeatmapApp>
        </div>
        <div>
          <h3>Pivot Table Example: </h3>
          <PivotTableApp></PivotTableApp>
        </div>
        <div>
          <h3>Visualization Example: </h3>
            <table border="1" align="center">
              <tr>
                <th>Visualization - Colunmchart11Feb</th>
                <th>Visualization - Combochart11Feb</th>
              </tr>
              <tr>
                <td><VisualizationColunmchart11FebApp></VisualizationColunmchart11FebApp></td>
                <td><VisualizationCombochart11FebApp></VisualizationCombochart11FebApp></td>
              </tr>
            </table>
        </div>
        <div>
          <h3>Table Example: </h3>
          <TableApp></TableApp>
        </div>
         <div>
           <h3>AFM Table Example: </h3>
           <AFMTableApp></AFMTableApp>
         </div>
         <div>
          <h3>Bar Chart Example: </h3>
          <BarChartApp></BarChartApp>
        </div>
         <div>
           <h3>AFM Bar Chart Example: </h3>
           <AFMBarChartApp></AFMBarChartApp>
         </div>
        <div>
          <h3>Filter Example: </h3>
            <table table border="1" align="center">
              <tr>
                <th>Products Name Filter Example</th>
                <th>Deparment Name Filter Example</th>
                <th>Date Filter Example</th>
              </tr>
              <tr>
                <td>Use Negative Attribute Filter</td>
                <td>Use Positive Attribute Filter</td>
                <td>Date Filter</td>
              </tr>
              <tr>
                <td><NegativeAttributeFilterEx></NegativeAttributeFilterEx></td>
                <td><PositiveAttributeFilterEx></PositiveAttributeFilterEx></td>
                <td><DateFilterEx></DateFilterEx></td>
              </tr>
            </table>
        </div>
      </p>
    )
}

export default Home;
