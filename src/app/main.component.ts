import html from "./main.component.html";
import css from "./main.component.css";
import { WebzComponent } from "@boots-edu/webz";
import { TaskManagerComponent } from "./task_manager/task-manager.component";
import { GraphicComponent } from "./graphic/graphic.component";

/**
 * @description MainComponent is the main component of the app
 * @extends WebzComponent
 *
 */

export class MainComponent extends WebzComponent {
    //Main Component adds TaskManager and Graphic compoenent to together to form the program
    private taskManager: TaskManagerComponent = new TaskManagerComponent();
    private graphic: GraphicComponent = new GraphicComponent(this.taskManager);

    constructor() {
        super(html, css);
        this.addComponent(this.taskManager, "task-manager");
        this.addComponent(this.graphic, "graphic");
    }
}
