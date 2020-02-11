import React, { Component } from "react";
import { AttributeFilter, Model } from "@gooddata/react-components";
import "@gooddata/react-components/styles/css/main.css";
import { Department, projectId } from "../utils/fixtures";

export class PositiveAttributeFilterEx extends Component {
    onApply(params) {
        // eslint-disable-next-line no-console
        console.log('AttributeFilterExample onApply', ...params);
    }

    render() {
        return (
            <div>
                <AttributeFilter
                    filter={Model.positiveAttributeFilter(Department, ["Inside Sales"], true)}
                    projectId={projectId}
                    onApply={this.onApply}
                />
            </div>
        );
    }
}

export default PositiveAttributeFilterEx;
