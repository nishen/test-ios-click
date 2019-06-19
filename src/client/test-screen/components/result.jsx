import React from "react";
import { Page, BasicSegment, Padding } from "@ombiel/aek-lib";

export default class ResultScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <Page>
                <BasicSegment nopadding size={150} className="mq-panel">
                    <Padding>We have reached here successfully....</Padding>
                </BasicSegment>
            </Page>
        );
    };
}
