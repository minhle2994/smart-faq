import React from 'react';
import MUICard from "material-ui/Card";
import {CardContent } from 'material-ui/Card';

export default class Message extends React.Component {
    render() {
        let backgroundColor = this.props.message.role === 'customer' ? '#F48FB1' : '#F1F0F0';
        let marginLeft = this.props.message.role === 'customer' ? 'auto' : '20px';
        let messageStyle = {
            margin: '20px',
            borderRadius: 20,
            maxWidth: '60%',
            backgroundColor: backgroundColor,
            marginLeft: marginLeft,
        };

        let messageContentStyle = {
            padding: '10px',
        };

        return (
            <MUICard style={messageStyle}>
                <CardContent style={messageContentStyle}>
                    {this.props.message.content}
                </CardContent>
            </MUICard>
        );
    }
}