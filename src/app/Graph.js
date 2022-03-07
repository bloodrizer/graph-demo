import React from 'react';
import mermaid from 'mermaid';

import styled from "styled-components";

const GraphWrapper = styled.div`
    padding: 25px;
`;

class Graph extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            svg: null
        }
    }

    componentDidMount(){
        mermaid.initialize({ startOnLoad:true });
    }

    componentDidUpdate(prevProps){
        if (prevProps.model !== this.props.model){
            mermaid.mermaidAPI.render("mermaid-graph", this.props.model, (svg) => {this.setState({svg: svg})});
        }
    }

    render(){    
        return (
            <GraphWrapper> 
                {!this.state.svg && "Loading..."}
                {this.state.svg && <div 
                    className="mermaid"
                    dangerouslySetInnerHTML={{ __html: this.state.svg }}
                >
                </div>}
            </GraphWrapper>
            
        )
    }
}

export default Graph;