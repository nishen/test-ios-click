import React from "react";
import { Page, BasicSegment, Listview, ListviewItem } from "@ombiel/aek-lib";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <Page>
                <BasicSegment nopadding size={150}>
                    <Listview>
                        <ListviewItem href="#/button">Button Based Screen using onClick</ListviewItem>
                        <ListviewItem href="#/list-href">List Based Screen using href</ListviewItem>
                        <ListviewItem href="#/list-onclick">List Based Screen using onClick</ListviewItem>
                    </Listview>
                </BasicSegment>
            </Page>
        );
    };
}
