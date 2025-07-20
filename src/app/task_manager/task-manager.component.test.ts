import { describe, expect, test, beforeAll } from "@jest/globals";
import { TaskManagerComponent } from "./task-manager.component";
import { bootstrap } from "@boots-edu/webz";

describe("AddButtonComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<TaskManagerComponent>(TaskManagerComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(TaskManagerComponent);
        });
    });
});
