import React from "react";
import {Layout} from "@shopify/polaris";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Grid from "material-ui/Grid";
import ConversationList from './ConversationList';
import ChatBox from './ChatBox';

export default class ConversationTab extends React.Component {
    render() {
        return (
            <Layout>
                <Layout.Section/>
                <Layout.Section>
                    <MuiThemeProvider>
                        <div>
                            <Grid container gutter={0}>
                                <Grid item xs={12} sm={3}>
                                    <ConversationList conversations={this.props.conversations}/>
                                </Grid>

                                <Grid item xs={12} sm={9}>
                                    <ChatBox conversation={this.props.conversations[0]}/>
                                </Grid>
                            </Grid>
                        </div>
                    </MuiThemeProvider>
                </Layout.Section>
            </Layout>
        );
    }
}