
import GraphInputParser from "../model/GraphInputParser";
import GraphModel from "../model/GraphModel";

test('Parser must return proper model manifest', () => {
    let parser = new GraphInputParser();
    let model = new GraphModel();

    let input = "D DEPENDS A B \n E DEPENDS C \n F DEPENDS D E";
    parser.parse(input, model);

    expect(Object.keys(model.nodes).length).toBe(6);
    expect(model.getModelManifest()).toBeDefined();
});