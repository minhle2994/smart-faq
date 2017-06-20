import React from 'react';
import {ResourceList, Card, Collapsible} from '@shopify/polaris';

export default class KnowledgeBaseSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        };
    }

    render() {
        const onClickCollapse = () => {
            this.setState({isCollapsed: !this.state.isCollapsed})
        };
        return (
            <Card
                title="General Questions"
                actions={[{content: 'Edit'}, {content: 'Collapse', onClick: onClickCollapse}]}
            >

                <Collapsible
                    open={!this.state.isCollapsed}
                >
                    <Card.Section
                    >
                        <ResourceList
                            items={[
                                {
                                    attributeOne: 'What is the warranty period?',
                                },
                                {
                                    attributeOne: 'What payment options are there?',
                                },
                                {
                                    attributeOne: 'What shipping options are available?',
                                },
                                {
                                    attributeOne: 'How do I track my order?',
                                },
                                {
                                    attributeOne: 'Do I need to be home for my delivery?',
                                },
                                {
                                    attributeOne: 'How do I return a product?',
                                },
                            ]}
                            renderItem={(item, index) => {

                                return <ResourceList.Item key={index} {...item} />;
                            }}
                        />
                    </Card.Section>
                </Collapsible>
            </Card>
        );
    }
}