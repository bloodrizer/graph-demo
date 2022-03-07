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

    updateGraph(){
        //force parse for easy debugging
        mermaid.mermaidAPI.parse(this.props.model);
        mermaid.mermaidAPI.render("mermaid-graph", this.props.model, (svg) => {this.setState({svg: svg})});
    }

    componentDidMount(){
        if (this.props.model){
            this.updateGraph();
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.model !== this.props.model){
            this.updateGraph();
        }
    }

    render(){    
        return (
            <GraphWrapper> 
                {!this.state.svg && "Please edit the graph textbox to see live updates"}
                {this.state.svg && <div
                    dangerouslySetInnerHTML={{ __html: this.state.svg }}
                >
                </div>}
            </GraphWrapper>
            
        )
    }
}

export default Graph;