import React from "react";
import { Page, BasicSegment, Padding, Listview, ListviewItem } from "@ombiel/aek-lib";
import router from "../util/router";

export default class ListHrefScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <Page>
                <BasicSegment nopadding size={150}>
                    <Padding>
                        <p>This Listview/ListviewItem uses an href to route to the result page.</p>
                        <Listview>
                            <ListviewItem href="#/result">Go to result page</ListviewItem>
                        </Listview>
                    </Padding>
                </BasicSegment>
            </Page>
        );
    };
}
