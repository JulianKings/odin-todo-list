class ToDo {
    constructor(id, title, description, dueDate, priority, favorite, completed)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.favorite = favorite;
        this.completed = completed;
    }
}

export { ToDo }