class ToDo {
    constructor(id, title, description, dueDate, priority, favorite, completed, projectId)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.favorite = favorite;
        this.completed = completed;
        this.projectId = projectId;
    }
}

export { ToDo }