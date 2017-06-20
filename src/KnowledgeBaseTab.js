import React from 'react';
import {Layout} from '@shopify/polaris';
import KnowledgeBaseSection from './KnowledgeBaseSection'
export default class KnowledgeBaseTab extends React.Component {
    render() {
        return (
            <Layout>
                <Layout.Section/>
                <Layout.Section>
                    <KnowledgeBaseSection/>
                </Layout.Section>
                <Layout.Section>
                    <KnowledgeBaseSection/>
                </Layout.Section>
            </Layout>
        );
    }
}