import React from "react";
import { AekReactRouter, Panel, Page } from "@ombiel/aek-lib";

export class RouterComponent extends React.Component {
    render() {
        return (
            <Page>
                <Panel loading={true} />
            </Page>
        );
    }
}

let router = new AekReactRouter({
    useHash: false,
    defaultHandler: new RouterComponent()
});

export default router;
