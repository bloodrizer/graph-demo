import React from 'react';

class Graph extends React.Component {
    componentDidMout(){
    }

    onChange = (e) =>{
        this.props.onParserInputChange(e.target.value);
    }

    render(){
        return (
            <>
                <textarea 
                    style={{
                        width: "550px",
                        height: "120px"
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