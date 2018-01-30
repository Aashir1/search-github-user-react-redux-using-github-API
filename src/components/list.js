import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';


class Lists extends React.Component {
    render() {
        return (
            <div>
                <List>
                    {
                        this.props.allUsers.map(eachUser => {
                            return (
                                <ListItem >
                                    <Card>
                                        <CardHeader
                                            title={`${eachUser.name}`}
                                            avatar={`${eachUser.imageURL}`}
                                        />
                                        <CardText>
                                            {this.props.profileLink}
                                        </CardText>
                                        <CardActions>
                                            <FlatButton label="Show Info" onClick={(ev)=>{this.props.infoClicked(eachUser)}}/>
                                        </CardActions>
                                    </Card>
                                </ListItem>
                            )
                        })

                    }
                </List>


            </div>
        )
    }
}
export default Lists;



