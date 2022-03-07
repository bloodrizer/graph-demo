import React from 'react';
import TextField from '@mui/material/TextField';

class Graph extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: "D DEPENDS A B \nE DEPENDS C \nF DEPENDS D E"
        }
    }
    componentDidMout(){
    }

    onChange = (e) =>{
        this.props.onParserInputChange(e.target.value);
    }

    render(){
        return (
            <>
                <TextField
                    onChange={this.onChange}
                    multiline
                    maxRows={7}
                    isError={this.props.isError}
                    helperText={this.props.errorMessage}
                    label="Graph definition"
                    style={{
                        width: "550px"
                    }}
                    value={this.props.value}
                    placeholder={
                        "e.g. D DEPENDS A B \nE DEPENDS C \nF DEPENDS D E"
                    }
                />
            </>
        )
    }
}

export default Graph;