
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

test('Parser must correctly handle graph cycles', () => {
    const t = () => {
        let parser = new GraphInputParser();
        let model = new GraphModel();

        let input = "A DEPENDS B \n B DEPENDS C \n C DEPENDS A";
        parser.parse(input, model);
    }

    expect(t).toThrow(Error);
});

test('Parser must correctly handle self links', () => {
    const t = () => {
        let parser = new GraphInputParser();
        let model = new GraphModel();

        let input = "A DEPENDS B A";
        parser.parse(input, model);
    }

    expect(t).toThrow(Error);
});