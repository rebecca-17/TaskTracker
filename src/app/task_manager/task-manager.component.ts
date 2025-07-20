import {
    WebzComponent,
    Click,
    BindValue,
    Input,
    ValueEvent,
} from "@boots-edu/webz";
import html from "./task-manager.component.html";
import css from "./task-manager.component.css";
import { Task } from "../task";

export class TaskManagerComponent extends WebzComponent {
    /* TaskManager Component extends WebzComponent. It adds tasks, removes tasks, marks them as complete,
    and displays the tasks based on the filter.
     */

    @BindValue("tasks")
    private tasks: string = " ";

    @BindValue("completeTasks")
    private completetasks: string = " ";

    private date: string = "";
    private filterDate: string = "";
    private taskName: string = "";
    private desName: string = "";
    private topic: string = "";
    private remove: string = "0";
    private complete: string = "0";

    private list: boolean = true;
    private day: boolean = false;

    private month: boolean = false;

    public TaskList: Task[] = [];

    public RemoveList: Task[] = [];
    public CompleteList: Task[] = [];

    constructor() {
        super(html, css);
    }

    showTask() {
        /*Method that displays the tasks that defaults to list view but can also display in day view (show the selected day)
        or month view (display the selected month)
     */

        this.tasks = "";
        this.completetasks = "";

        if (this.list) {
            //Displays tasks in list view and shows completed tasks
            for (let i = 0; i < this.TaskList.length; i++) {
                const task = this.TaskList[i];
                this.tasks += `<div>
            <label>${i + 1}. ${task.name}${task.topic ? ` - ${task.topic}` : ""}${
                task.description ? ` - ${task.description}` : ""
            }${task.date ? ` - Due: ${task.date}` : ""}</label>
            
        </div><br>`;
            }

            for (let i = 0; i < this.CompleteList.length; i++) {
                const task = this.CompleteList[i];
                this.completetasks += `<div>
            <label>${i + 1}. ${task.name}${task.topic ? ` - ${task.topic}` : ""}${
                task.description ? ` - ${task.description}` : ""
            }${task.date ? ` - Due: ${task.date}` : ""}</label>
            
        </div><br>`;
            }
        }

        if (this.day) {
            //Displays tasks in the specific day view
            this.tasks += `<div><br>
            <label>${this.filterDate}</label>
            
        </div><br>`;
            for (let i = 0; i < this.TaskList.length; i++) {
                const task = this.TaskList[i];

                if (task.date === this.filterDate) {
                    this.tasks += `<div>
            <label>${i + 1}. ${task.name}${task.topic ? ` - ${task.topic}` : ""}${
                task.description ? ` - ${task.description}` : ""
            }${task.date ? ` - Due: ${task.date}` : ""}</label>
            
        </div><br>`;
                }
            }
        }

        if (this.month) {
            //Displays tasks in the specific month view
            this.tasks += `<div><br>
            <label>${this.filterDate.substring(0, 7)}</label>
            
        </div><br>`;
            for (let i = 0; i < this.TaskList.length; i++) {
                const task = this.TaskList[i];

                if (
                    task.date.substring(0, 7) ===
                    this.filterDate.substring(0, 7)
                ) {
                    this.tasks += `<div>
            <label>${i + 1}. ${task.name}${task.topic ? ` - ${task.topic}` : ""}${
                task.description ? ` - ${task.description}` : ""
            }${task.date ? ` - Due: ${task.date}` : ""}</label>
            
        </div><br>`;
                }
            }
        }
    }

    @Input("task-input")
    //Reads the task name from the input box
    onTaskInput(e: ValueEvent) {
        this.taskName = e.value;
    }
    @Input("dueDate")
    //Gets the value of the due date from the calendar input
    onDateInput(e: ValueEvent) {
        this.date = e.value;
    }

    @Input("filterDate")
    //Gets the value of the filter date from a calendar input
    onFilterDateInput(e: ValueEvent) {
        this.filterDate = e.value;
    }

    @Input("description-input")
    //Reads the description input of the task
    ondescriptionInput(e: ValueEvent) {
        this.desName = e.value;
    }

    @Input("topic-input")
    //Reads the topic input of the task
    onTopicInput(e: ValueEvent) {
        this.topic = e.value;
    }

    @Input("remove-input")
    //Reads the number of the task that is to be removed
    onRemoveInput(e: ValueEvent) {
        this.remove = e.value;
    }

    @Input("complete-input")
    //Gets the number of the task that is to be marked complete
    oncompleteInput(e: ValueEvent) {
        this.complete = e.value;
    }

    @Click("add")
    addTask() {
        //Adds task to task list and displays tasks
        const newTask = new Task(
            this.taskName,
            this.date,
            this.desName.trim() || "",
            this.topic.trim() || "",
        );
        this.TaskList.push(newTask);

        this.showTask();
    }

    @Click("remove")
    removeCheckedTasks() {
        //Removes task from the list but does not mark them as complete

        const index = Number(this.remove) - 1;

        if (index >= 0 && index < this.TaskList.length) {
            this.RemoveList.push(this.TaskList[index]);
            this.TaskList.splice(index, 1);
            this.showTask();
        } else {
            console.error("Invalid task index for removal.");
        }
    }

    @Click("complete")
    completeCheckedTasks() {
        //Removes tasks from the list but does mark them as complete
        const index = Number(this.complete) - 1;

        if (index >= 0 && index < this.TaskList.length) {
            this.CompleteList.push(this.TaskList[index]);
            this.TaskList.splice(index, 1);
            this.showTask();
        } else {
            console.error("Invalid task index for completion.");
        }
    }

    @Click("list")
    clickList() {
        //Changes the display tasks to a list view

        this.list = true;
        this.day = false;

        this.month = false;

        this.showTask();
    }

    @Click("day")
    dayList() {
        //Changes the display tasks to be a specific day
        this.list = false;
        this.day = true;

        this.month = false;

        this.showTask();
    }
    @Click("month")
    monthList() {
        //Changes the display tasks to be for a specific month
        this.list = false;
        this.day = false;

        this.month = true;

        this.showTask();
    }
}
