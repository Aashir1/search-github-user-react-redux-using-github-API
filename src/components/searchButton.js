import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class SearchButton extends React.Component {
    render() {
        return (
            <div>
                <RaisedButton label={this.props.btnText} primary={true} onClick={this.props.onclickBtn} />
            </div>
        )
    }
}
export default SearchButton;