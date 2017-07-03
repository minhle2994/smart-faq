import React from 'react';
import MUICard from "material-ui/Card";
import {CardContent } from 'material-ui/Card';

export default class Message extends React.Component {
    render() {
        let backgroundColor = this.props.message.role === 'customer' ? '#F48FB1' : '#F1F0F0';
        let float = this.props.message.role === 'customer' ? 'left' : 'right';
        let messageStyle = {
            margin: '10px',
            borderRadius: 20,
            maxWidth: '60%',
            backgroundColor: backgroundColor,
            float: float,
            clear: 'both',
        };

        let messageContentStyle = {
            padding: '5px 10px 5px 10px',
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