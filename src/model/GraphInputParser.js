/**
 * Class handling the input of the graph definition
 */

class GraphInputParser {
    /**
     * Parse user input and update the UI model.
     * e.g. 
     * 
     * ```D DEPENDS A B 
     * E DEPENDS C 
     * F DEPENDS D E```
     * 
     * @param {*} input - A set of newline-separated tokens
     * @param {*} model - A reference to a graph model
     */
    parse(input, model){
        console.log("parsing input", input);
        
        let lines = input.split(/\r?\n/);
        for (let i in lines){
            let line = lines[i];

            console.log("parsing line", line);
            let tokens = line.trim().split(/\s+/);
            model.addNode(tokens[0], tokens.slice(2));
        }
    }
}

export default GraphInputParser;