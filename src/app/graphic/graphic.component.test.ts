import { describe, expect, test, beforeAll } from "@jest/globals";
import { GraphicComponent } from "./graphic.component";
import { bootstrap } from "@boots-edu/webz";

describe("GraphicComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<GraphicComponent>(GraphicComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(GraphicComponent);
        });
    });
});
