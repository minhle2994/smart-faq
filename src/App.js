import React from 'react';
import {Page, Tabs, FooterHelp, Link} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';
import KnowledgeBaseTab from './KnowledgeBaseTab';
import ConversationsTab from './ConversationsTab';
import URLSearchParams from 'url-search-params';

const shop = new URLSearchParams(window.location.search).get('shop');
const shopOrigin = (shop) ? `https://${shop}` : undefined;
const apiKey = new URLSearchParams(window.location.search).get('apiKey');

const knowledgeBase = {
    sections: [
        {
            name: 'General questions',
            questions: [
                {
                    question: 'HOW DO I CONTACT CUSTOMER SERVICE?',
                    answer: 'Simply email our team: support@commonslane.com and a member of our staff will personally keep in touch. You can also call us: 678-434-5019'
                },
                {
                    question: 'WHAT FORMS OF PAYMENTS DO YOU ACCEPT?',
                    answer: 'We accept forms of payment through PayPal, Visa, Discover, MasterCard, Apple Pay, JCB, DCI, and American Express'
                },
                {
                    question: 'HOW COME MY CREDIT CARD DOES NOT WORK?',
                    answer: 'Sometimes credit cards will not work due to the customer moving to a new address that does not match up with old address where he or she had the bank or credit card.'
                },
                {
                    question: 'HOW LONG WILL MY ORDER TAKE?',
                    answer: 'Apparels take 2-5 days of processing and will usually take 3 days to arrive (5 days at the very most)'
                },
                {
                    question: 'WHAT SHIPPING METHOD IS USED?',
                    answer: 'Mostly all orders will be shipped using USPS'
                },
            ]
        },
        {
            name: 'Returns/Exchanges',
            questions: [
                {
                    question: 'HOW DO I ISSUE A RETURN/EXCHANGE?',
                    answer: 'Visit our return page at https://return.marketify.co'
                },
                {
                    question: 'HOW DO I HANDLE RETURNS AND EXCHANGES?',
                    answer: 'Any problems with misprinted/damaged/defective items must be reported within 7 days after arrival. Our staff will keep in contact to find a solution to this problem. The common solutions are to either exchange with a fresh new product or issue a refund.'
                },
                {
                    question: 'WHERE DO I SEND MY ORDER?',
                    answer: 'Commons Lane, 19749 DEARBORN ST, CHATSWORTH CA 91311, United States'
                },
            ]
        }
    ]
};

const conversations = {
    conversations: [
        {
            user: {
                name: 'Jack',
                email: '',
                time: ''
            },
            messages: [
                {

                }
            ]
        }
    ]
};

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    static renderTabContent(selectedTabIndex) {
        switch (selectedTabIndex) {
            case 0:
                return (
                  <KnowledgeBaseTab knowledgeBase={knowledgeBase}/>
                );
            case 1:
                return (
                    <ConversationsTab conversations={conversations}/>
                );
            default:
        }
    }

    render() {
        return (
            <EmbeddedApp
                apiKey={apiKey}
                shopOrigin={shopOrigin}
            >
                <Page
                    //icon="https://productreviews.shopifycdn.com/assets/header-icon-efc8ebea08d2a56006a1b818e62c599279ac9d5d43533029474dcd32300f4c36.png"
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
                        {MyApp.renderTabContent(this.state.selected)}
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