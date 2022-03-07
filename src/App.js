import './App.css';
import React from 'react';

import { Card, Paper } from '@mui/material';
import Graph from "./app/Graph";
import Parser from "./app/Parser";

import GraphInputParser from "./model/GraphInputParser";
import GraphModel from "./model/GraphModel";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      input: ""
    }
  }

  onParserInputChange = (input) => {
    this.setState({
      input: input
    });
  }
  
  render(){
    let parser = new GraphInputParser();
    let model = new GraphModel();

    parser.parse(this.state.input, model);

    console.log("model:", model);
    return (
      <div className="app">
        <Paper>
          <Card>
            <Parser onParserInputChange={this.onParserInputChange} value={this.state.input}/>
          </Card>
          <Graph model={model.getModelManifest()}/>
        </Paper>
      </div>
    );
  }
  
}

export default App;
