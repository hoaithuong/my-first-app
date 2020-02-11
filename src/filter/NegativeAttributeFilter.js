import React, { Component } from "react";
import { AttributeFilter, Model } from "@gooddata/react-components";
import "@gooddata/react-components/styles/css/main.css";
import { productName, projectId } from "../utils/fixtures";

export class NegativeAttributeFilterEx extends Component {
    onApply(params) {
        // eslint-disable-next-line no-console
        console.log('AttributeFilterExample onApply', ...params);
    }

    render() {
        return (
            <div>
                <AttributeFilter
                    filter={Model.negativeAttributeFilter(productName, ["CompuSci"], true)}
                    projectId={projectId}
                    onApply={this.onApply}
                />
            </div>
        );
    }
}

export default NegativeAttributeFilterEx;
