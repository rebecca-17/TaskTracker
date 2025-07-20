import { BindValue, Click, WebzComponent } from "@boots-edu/webz";
import html from "./graphic.component.html";
import css from "./graphic.component.css";
import { TaskManagerComponent } from "../task_manager/task-manager.component";

export class GraphicComponent extends WebzComponent {
    /* Graphic Component extends WebzComponent. It is responsible for displaying an optional graphic that breaks down the 
    amount of tasks active and how many are completed 
     */
    public checked: boolean = false;

    @BindValue("graphicTasks")
    private completetasks: string = " ";

    private taskManager: TaskManagerComponent;

    constructor(taskManager: TaskManagerComponent) {
        super(html, css);
        this.taskManager = taskManager;
    }

    @Click("optionalGraphic")
    showGraphic() {
        //This is a button that toggles the display of the graphic on and off
        this.checked = !this.checked;
        this.completetasks = "";

        if (this.checked) {
            this.completetasks = `<div>
            <label> ${this.taskManager.TaskList.length} tasks active </label>
            <br>
            <label> ${this.taskManager.CompleteList.length} tasks completed </label>
            <br> </div><br>`;
        } else {
            this.completetasks = `<div>
            
            
        
            
        </div><br>`;
        }
    }
}
