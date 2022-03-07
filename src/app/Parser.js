import React from 'react';
import TextField from '@mui/material/TextField';

class Graph extends React.Component {
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
                    defaultValue={
                        "D DEPENDS A B \nE DEPENDS C \nF DEPENDS D E"
                    }
                />
                <textarea 
                    label="Graph definition"
                    style={{
                        width: "550px"
                    }}
                    defaultValue={
                        "D DEPENDS A B \nE DEPENDS C \nF DEPENDS D E"
                    }
                    onChange={this.onChange}
                   
                />
            </>
        )
    }
}

export default Graph;