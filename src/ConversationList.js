import React from 'react';
import Divider from "material-ui/Divider";
import List from "material-ui/List";
import {Card} from "@shopify/polaris";
import Toolbar from "material-ui/Toolbar";
import Input from 'material-ui/Input/Input';
import ConversationListItem from './ConversationListItem';

export default class ConversationList extends React.Component {
    render() {
        let sections = [];
        this.props.conversations.forEach((conversation, index) => {
            sections.push(<ConversationListItem key={index} customer={conversation.customer} timestamp={conversation.timestamp}/>);
        });
        return (
            <Card>
                <Toolbar>
                    <Input style={{width: '80%'}} placeholder="Search"/>
                    <Divider absolute/>
                </Toolbar>

                <List>
                    {sections}
                </List>
            </Card>
        );
    }
}