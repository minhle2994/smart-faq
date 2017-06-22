import React from "react";
import {Card, Layout} from "@shopify/polaris";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List, {ListItem, ListItemText} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";
import Chip from "material-ui/Chip";
import Button from "material-ui/Button";
import MUICard from "material-ui/Card";
import { CardActions, CardContent } from 'material-ui/Card';

export default class ConversationsTab extends React.Component {
    render() {
        return (
            <Layout>
                <Layout.Section/>
                <Layout.Section>
                    <MuiThemeProvider>
                        <div>
                            {/*<AppBar>*/}
                            {/*<Toolbar>*/}
                            {/*<Typography type="title" color="inherit" noWrap>*/}
                            {/*Conversation*/}
                            {/*</Typography>*/}
                            {/*</Toolbar>*/}
                            {/*</AppBar>*/}
                            {/*<Drawer*/}
                            {/*open={true}*/}
                            {/*docked={true}*/}
                            {/*keepMounted*/}
                            {/*>*/}
                            {/*<div>*/}
                            {/*<Toolbar>*/}
                            {/*<Typography type="title" gutterBottom color="inherit">*/}
                            {/*Material-UI*/}
                            {/*</Typography>*/}
                            {/*<Divider absolute />*/}
                            {/*</Toolbar>*/}
                            {/*<List>*/}
                            {/*<ListItem button>*/}
                            {/*<Avatar alt="Remy Sharp"/>*/}
                            {/*<ListItemText primary="Rose" secondary="Jan 9, 2016" />*/}
                            {/*</ListItem>*/}
                            {/*<ListItem button>*/}
                            {/*<Avatar alt="Remy Sharp"/>*/}
                            {/*<ListItemText primary="Jack" secondary="Jan 7, 2016" />*/}
                            {/*</ListItem>*/}
                            {/*</List>*/}
                            {/*</div>*/}
                            {/*</Drawer>*/}

                            <Grid container gutter={0}>
                                <Grid item xs={12} sm={3}>
                                    <Card>
                                        <Toolbar>
                                            <Divider absolute/>
                                        </Toolbar>

                                        <List>
                                            <ListItem button>
                                                <Avatar alt="Remy Sharp"/>
                                                <ListItemText primary="Rose"
                                                              secondary="Jan 9, 2016"/>
                                            </ListItem>
                                            <ListItem button>
                                                <Avatar alt="Remy Sharp"/>
                                                <ListItemText primary="Jack"
                                                              secondary="Jan 7, 2016"/>
                                            </ListItem>
                                        </List>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={9}>
                                    <Card>
                                        <Toolbar>
                                            <Typography type="title" gutterBottom color="inherit">
                                            </Typography>
                                            <Divider absolute/>
                                        </Toolbar>
                                        <List>
                                            <MUICard style={{margin: '10px', backgroundColor: '#F48FB1', borderRadius: 20, maxWidth: '60%'}}>
                                                <CardContent style={{padding: 10}}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </CardContent>
                                            </MUICard>

                                            <MUICard style={{margin: '10px', marginLeft: 'auto', backgroundColor: '#F1F0F0', borderRadius: 20, maxWidth: '60%'}}>
                                                <CardContent style={{padding: 10}}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </CardContent>
                                            </MUICard>

                                        </List>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </MuiThemeProvider>
                </Layout.Section>
            </Layout>
        );
    }
}