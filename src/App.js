import React from 'react';
import {Page, Tabs, FooterHelp, Link} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';
import KnowledgeBaseTab from './KnowledgeBaseTab';
import ConversationsTab from './ConversationsTab';
import URLSearchParams from 'url-search-params';

const shop = new URLSearchParams(window.location.search).get('shop');
const shopOrigin = (shop) ? `https://${shop}` : undefined;
const apiKey = new URLSearchParams(window.location.search).get('apiKey');

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    renderTabContent(selectedTabIndex) {
        switch (selectedTabIndex) {
            case 0:
                return (
                  <KnowledgeBaseTab/>
                );
            case 1:
                return (
                    <ConversationsTab/>
                );
            default:
        }
    }

    render() {
        return (
            <EmbeddedApp
                // apiKey="f177dbe0b2515d61c9c4740e16a0b439"
                // shopOrigin="https://minhle.myshopify.com"
                apiKey={apiKey}
                shopOrigin={shopOrigin}
            >
                <Page
                    icon="https://productreviews.shopifycdn.com/assets/header-icon-efc8ebea08d2a56006a1b818e62c599279ac9d5d43533029474dcd32300f4c36.png"
                    secondaryActions={[
                        {content: 'Add section'},
                        {content: 'Add question'},
                    ]}
                    fullWidth
                >

                    <Tabs
                        selected={this.state.selected}
                        tabs={[
                            {
                                id: 'knowledge-base',
                                title: 'Knowledge base',
                                panelID: 'knowledge-base-content',
                            },
                            {
                                id: 'conversations',
                                title: 'Conversations',
                                panelID: 'conversations-content',
                            },
                        ]}
                        onSelect={(selectedTabIndex) => {
                            this.setState({selected: selectedTabIndex});
                        }}
                    >
                        {this.renderTabContent(this.state.selected)}
                    </Tabs>


                    <FooterHelp>
                        Need help?&nbsp;
                        <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                            Contact us
                        </Link>
                    </FooterHelp>

                </Page>
            </EmbeddedApp>
        );
    }
}