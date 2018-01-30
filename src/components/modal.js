import React from 'react';
import Dialog from 'material-ui/Dialog';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';


export default class InfoDialog extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                {/* <RaisedButton label="Dialog" onClick={this.handleOpen} /> */}
                <Dialog
                    title="Dialog With Actions"
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.handleOpen}
                >
                    <Card>
                        <CardMedia
                            overlay={<CardTitle title={this.props.name}/>}
                        >
                            <img style={{    height: '330px'}} src={this.props.showImage} alt="" />
                        </CardMedia>
                        <CardTitle title={this.props.name} subtitle={<a href={`${this.props.link}`}>{this.props.link}</a>}/>
                    </Card>
                </Dialog>
            </div>
        );
    }
}