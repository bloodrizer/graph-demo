
class GraphInputParser {
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