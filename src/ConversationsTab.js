import React from 'react';
import {Card, Layout} from '@shopify/polaris';

export default class ConversationsTab extends React.Component {
    render() {
        return (
            <Layout>
                <Layout.Section/>
                <Layout.Section>
                    <Card
                        title="Online Store dashboard"
                        sectioned
                    >
                        <p>Conversation history.</p>
                    </Card>

                </Layout.Section>
            </Layout>
        );
    }
}