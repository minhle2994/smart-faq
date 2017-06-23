import React from 'react';
import {ListItem, ListItemText} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import defaultAvatar from './logo.svg';

export default class ConversationListItem extends React.Component {
    render() {
        let dateTimeString = (new Date(this.props.timestamp * 1000)).toLocaleDateString();

        return (
            <ListItem button>
                <Avatar alt="Avatar" src={defaultAvatar}/>
                <ListItemText primary={this.props.customer.name}
                              secondary={dateTimeString}/>
            </ListItem>
        );
    }
}