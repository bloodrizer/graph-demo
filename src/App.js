import './App.css';
import React from 'react';

import { Card, Paper, Typography} from '@mui/material';
import Graph from "./app/Graph";
import Parser from "./app/Parser";

import GraphInputParser from "./model/GraphInputParser";
import GraphModel from "./model/GraphModel";
import styled from "styled-components";

const CardWrapper = styled.div`
    padding: 25px;
`;

class App extends React.Component {

  parser = null;

  constructor(props){
    super(props);

    this.state = {
      input: "D DEPENDS A B \nE DEPENDS C \nF DEPENDS D E",
      hasError: false,
      errorMessage: null
    }
    this.parser = new GraphInputParser();
    this.model = new GraphModel();
  }

  onParserInputChange = (input) => {
    this.setState({
      input: input,
      hasError: false,
      errorMessage: null
    });
  }

  updateModel(){
    this.model = new GraphModel();
    try {
      this.parser.parse(this.state.input, this.model);
    } catch (ex){
      this.setState({ hasError: true, errorMessage: ex.message });
    }
    this.setState({
      manifest: this.model.getModelManifest()
    })
  }

  componentDidMount(){
    this.updateModel();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.input !== this.state.input){
        this.updateModel();
    }
}
  
  render(){
    return (
      <>
        <div className="app">
          <Paper>
            <Card>
              <CardWrapper>
                <Typography variant="overline">MuleSoft coding assignment</Typography>
                <Typography variant="body2">Please edit the text to see live updates</Typography>
              </CardWrapper>
            </Card>
            <Card>
              <CardWrapper>
                
                <Parser 
                  onParserInputChange={this.onParserInputChange} 
                  value={this.state.input} 
                  isError={this.state.hasError}
                  errorMessage={this.state.errorMessage}
                />
              </CardWrapper>
            </Card>

            <CardWrapper>
              <Graph model={this.state.manifest}/>
            </CardWrapper>

          </Paper>
        </div>
      </>
      
    );
  }
  
}

export default App;
