import React from 'react';
import TextField from 'material-ui/TextField';


class InputField extends React.Component {
    render() {
        return (
            <div>
                <TextField
                    type='text'
                    value={this.props.userInput}
                    onChange={(e)=>{this.props.onchangeEvent(e)}}
                    hintText=""
                /><br />

            </div>
        )
    }
}
export default InputField;