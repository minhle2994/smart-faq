import React from 'react';
import {Layout} from '@shopify/polaris';
import KnowledgeBaseSection from './KnowledgeBaseSection'

export default class KnowledgeBaseTab extends React.Component {
    render() {
        let sections = [];
        this.props.knowledgeBase.sections.forEach((section, index) => {
            sections.push(<KnowledgeBaseSection key={index} section={section}/>);
        });
        return (
            <Layout>
                <Layout.Section/>
                {sections}
            </Layout>
        );
    }
}