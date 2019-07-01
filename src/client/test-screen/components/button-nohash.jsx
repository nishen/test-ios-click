import React from "react";
import { Page, BasicSegment, Padding, Button } from "@ombiel/aek-lib";
import router from "../util/router";

export default class ButtonScreenNoHash extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <Page>
                <BasicSegment nopadding size={150} className="mq-panel">
                    <Padding>
                        <p>This button uses onClick to route to the result page.</p>
                        <Button onClick={() => router.goto("/result")}>Go to result</Button>
                    </Padding>
                </BasicSegment>
            </Page>
        );
    };
}
