import React from "react";
import { RouterView, Container, VBox, BannerHeader, Panel, CBox, Button } from "@ombiel/aek-lib";
import { HomeScreen, ResultScreen, ButtonScreen, ListHrefScreen, ListOnClickScreen } from "./components";
import router from "./util/router";

export default class Screen extends React.Component {
    render() {
        return (
            <Container>
                <VBox>
                    <BannerHeader theme="alt" key="header" data-flex={0}>
                        Test Screen
                    </BannerHeader>
                    <Panel>
                        <RouterView router={router}>
                            <HomeScreen path="/" />
                            <ResultScreen path="/result" />
                            <ButtonScreen path="/button" />
                            <ListHrefScreen path="/list-href" />
                            <ListOnClickScreen path="/list-onclick" />
                        </RouterView>
                    </Panel>
                    <CBox size={50}>
                        <Button href="#/">HOME</Button>
                    </CBox>
                </VBox>
            </Container>
        );
    }
}
