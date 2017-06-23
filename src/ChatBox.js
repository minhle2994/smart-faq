import React from 'react';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import {Card} from '@shopify/polaris';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Message from './Message';

export default class ChatBox extends React.Component {
    render() {
        let sections = [];
        this.props.conversation.messages.forEach((message, index) => {
            sections.push(<Message key={index} message={message}/>);
        });
        return (
            <Card>
                <Toolbar>
                    <Typography type='title' gutterBottom color='inherit'>
                        {this.props.conversation.customer.name}
                    </Typography>
                    <Divider absolute/>
                </Toolbar>
                <List>
                    {sections}
                </List>
            </Card>
        );
    }
}