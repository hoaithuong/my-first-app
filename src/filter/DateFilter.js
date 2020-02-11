import React, { Component } from "react";
import { DateFilter } from "@gooddata/react-components";
import "@gooddata/react-components/styles/css/dateFilter.css";

const dateFrom = new Date();
dateFrom.setMonth(dateFrom.getMonth() - 1);

const availableGranularities = [
    "GDC.time.month",
    "GDC.time.year",
    "GDC.time.quarter",
    "GDC.time.date"];

const defaultDateFilterOptions = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "",
        visible: true,
    },
    absoluteForm: {
        localIdentifier: "ABSOLUTE_FORM",
        type: "absoluteForm",
        from: dateFrom.toISOString().substr(0, 10), // 'YYYY-MM-DD'
        to: new Date().toISOString().substr(0, 10), // 'YYYY-MM-DD'
        name: "",
        visible: true,
    },
    absolutePreset: [
        {
            from: "2019-12-24",
            to: "2019-12-26",
            name: "Christmas 2019",
            localIdentifier: "christmas-2019",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2018-01-01",
            to: "2018-12-31",
            name: "Year 2018",
            localIdentifier: "year-2018",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2019-10-01",
            to: "2019-11-04",
            name: "",
            localIdentifier: "haloween-2019",
            visible: true,
            type: "absolutePreset",
        },
    ],
    relativeForm: {
        localIdentifier: "RELATIVE_FORM",
        type: "relativeForm",
        granularity: "GDC.time.week_us",
        from: undefined,
        to: undefined,
        name: "",
        visible: true,
        availableGranularities,
    },
    relativePreset: {
        "GDC.time.date": [
            {
                from: -6,
                to: 0,
                granularity: "GDC.time.date",
                localIdentifier: "LAST_7_DAYS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -29,
                to: 0,
                granularity: "GDC.time.date",
                localIdentifier: "LAST_30_DAYS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -89,
                to: 0,
                granularity: "GDC.time.date",
                localIdentifier: "LAST_90_DAYS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
        "GDC.time.week_us": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.week_us",
                localIdentifier: "THIS_WEEK",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.week_us",
                localIdentifier: "LAST_WEEK",
                type: "relativePreset",
                visible: true,
                name: "Last week edit",
            },
            {
                from: -3,
                to: 0,
                granularity: "GDC.time.week_us",
                localIdentifier: "LAST_4_WEEKs",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
        "GDC.time.month": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.month",
                localIdentifier: "THIS_MONTH",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.month",
                localIdentifier: "LAST_MONTH",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -11,
                to: 0,
                granularity: "GDC.time.month",
                localIdentifier: "LAST_12_MONTHS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
        "GDC.time.quarter": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.quarter",
                localIdentifier: "THIS_QUARTER",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.quarter",
                localIdentifier: "LAST_QUARTER",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -3,
                to: 0,
                granularity: "GDC.time.quarter",
                localIdentifier: "LAST_4_QUARTERS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
        "GDC.time.year": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.year",
                localIdentifier: "THIS_YEAR",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.year",
                localIdentifier: "LAST_YEAR",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: 5,
                to: -1,
                granularity: "GDC.time.year",
                localIdentifier: "LAST_6_YEARS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
    },
};

export class DateFilterEx extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFilterOption: defaultDateFilterOptions.allTime,
            excludeCurrentPeriod: false,
        };
    }

    onOpen = () => {
        // eslint-disable-next-line no-console
        console.log("DateFilterExample onOpen");
    };

    onClose = () => {
        // eslint-disable-next-line no-console
        console.log("DateFilterExample onClose");
    };

    onApply = (selectedFilterOption, excludeCurrentPeriod) => {
        this.setState({
            selectedFilterOption,
            excludeCurrentPeriod,
        });
        // eslint-disable-next-line no-console
        console.log(
            "DateFilterExample onApply",
            "selectedFilterOption:",
            selectedFilterOption,
            "excludeCurrentPeriod:",
            excludeCurrentPeriod,
        );
    };

    onCancel = () => {
        // eslint-disable-next-line no-console
        console.log("DateFilterExample onCancel");
    };

    render() {
        return (
            <div style={{ width: 300 }}>
                <DateFilter
                    excludeCurrentPeriod={this.state.excludeCurrentPeriod}
                    selectedFilterOption={this.state.selectedFilterOption}
                    filterOptions={defaultDateFilterOptions}
                    availableGranularities={availableGranularities}
                    customFilterName="Date Filter"
                    dateFilterMode="active"
                    onApply={this.onApply}
                    onCancel={this.onCancel}
                    onOpen={this.onOpen}
                    onClose={this.onClose}
                />
            </div>
        );
    }
}
export default DateFilterEx;