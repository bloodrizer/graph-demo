/**
 * Class representing graph nodes and their dependencies.
 * Acts as amediator between input layer and a rendering library
 */
class GraphModel {
    nodes = null;
    constructor(){
        this.nodes = {}
    }

    
    loopExists(fromId, toId){
        let toIds = this.nodes[toId].linksTo;
        if (!toIds.length){
            return false;
        }
        let loopExists = toIds.find((id) => {
            return fromId === id;
        });
        if (loopExists) { return true; }
        loopExists = toIds.find(
            nextToId => this.loopExists(fromId, nextToId)
        );

        return loopExists;
    }

    /**
     * Adds a node to a model and links it based on dependencies.
     * 
     * If graph has duplicate links or circular dependencies, exception will be thrown
     * 
     * @param {*} id 
     * @param {*} dependencies 
     */
    addNode(id, dependencies){

        if (!this.nodes[id]){
            this.nodes[id] = {
                linksTo: []
            };
        }

        for (let i in dependencies){
            let childId = dependencies[i];

            if (!this.nodes[childId]){
                this.nodes[childId] = {
                    linksTo: []
                };
            }

            if (childId === id){
                throw new Error(id + " can't point to itself");
            }
            if (this.loopExists(id, childId)){
                throw new Error("graph can't have circular dependencies");
            }
            this.nodes[id].linksTo.push(childId);
        }
    }

    /**
     * 
     * @returns a string representing a mermaidjs graph definition e.g.
     * ```
     *  graph TD
     *       A[Client] --> B[Load Balancer]
     *       B --> C[Server01]
     *       B --> D[Server02]
     * ```
     */
    getModelManifest(){

        if (!Object.keys(this.nodes).length){
            return null;
        }
        
        let manifest = "graph TD\n";
        for (let id in this.nodes){
            for (let linkToId of this.nodes[id].linksTo){
                manifest = manifest + id + " --> " + linkToId + "\n";
            }
        }

        return manifest;
    }
}

export default GraphModel;