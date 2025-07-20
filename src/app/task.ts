export class Task {
    /* Task class has fields name, date, description, and topic. It keeps track of all the information of each task
     */
    public name: string;
    public date: string = "1900 01 01";
    public description: string;
    public topic: string;

    constructor(
        name: string,
        date: string,
        description: string = "",
        topic: string = "",
    ) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.topic = topic;
    }
}
