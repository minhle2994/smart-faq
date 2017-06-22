import React from 'react';
import {ResourceList, Card, Collapsible, Layout} from '@shopify/polaris';

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

        let items = [];
        this.props.section.questions.forEach(item => {
            items.push({
                attributeOne: item.question,
                actions: [
                    {
                        content: 'Disable',
                    },
                    {
                        icon: 'notes',
                    },
                    {
                        icon: 'delete',
                    },
                ],
                persistActions: true,
                badges: [
                    {
                        status: 'success',
                        content: 'enabled',
                    }
                ],
            })
        });

        return (
            <Layout.Section>
                <Card
                    title={this.props.section.name}
                    actions={[{content: 'Edit'}, {content: 'Remove'}, {content: 'Collapse', onClick: onClickCollapse}]}
                >

                    <Collapsible
                        open={!this.state.isCollapsed}
                    >

                        <Card.Section>
                            <ResourceList
                                items={items}
                                renderItem={(item, index) => {
                                    return <ResourceList.Item key={index} {...item} />;
                                }}
                            />
                        </Card.Section>
                    </Collapsible>
                </Card>
            </Layout.Section>
        );
    }
}