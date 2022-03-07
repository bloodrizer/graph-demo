import './App.css';
import React from 'react';

import { Card, Paper } from '@mui/material';
import Graph from "./app/Graph";
import Parser from "./app/Parser";

import GraphInputParser from "./model/GraphInputParser";
import GraphModel from "./model/GraphModel";

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

  componentDidUpdate(prevProps, prevState){
    if (prevState.input !== this.state.input){
        this.model = new GraphModel();
        try {
          this.parser.parse(this.state.input, this.model);
        } catch (ex){
          this.setState({ hasError: true, errorMessage: ex.message });
        }
    }
}
  
  render(){
    return (
      <div className="app">
        <Paper>
          <Card>
            <Parser 
              onParserInputChange={this.onParserInputChange} 
              value={this.state.input} 
              isError={this.state.hasError}
              errorMessage={this.state.errorMessage}
            />
          </Card>
          <Graph model={this.model.getModelManifest()}/>
        </Paper>
      </div>
    );
  }
  
}

export default App;
