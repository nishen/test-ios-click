import React from "react";
import { Page, BasicSegment, Padding, Listview, ListviewItem } from "@ombiel/aek-lib";
import router from "../util/router";

export default class ListOnClickScreenNoHash extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <Page>
                <BasicSegment nopadding size={150}>
                    <Padding>
                        <p>This Listview/ListviewItem uses onClick to route to the result page.</p>
                        <Listview>
                            <ListviewItem onClick={() => router.goto("/result")}>Go to result page</ListviewItem>
                        </Listview>
                    </Padding>
                </BasicSegment>
            </Page>
        );
    };
}
