import { getNextTodoID } from "./dataManager";
import { ToDo } from "./todo";

const _toDos = [];

const getToDos = () => _toDos;

const appendNewToDo = (name, description, dueDate, priority) => {
    let todo = new ToDo(getNextProjectId(), name, description, 
    dueDate, priority, false, false);
    _toDos.push(todo);
}

const getToDo = (id) => {
    let todoIndex = _toDos.findIndex((todo) => {
        return (todo.id === id);
    });

    if(todoIndex > -1)
    {
        return _toDos[todoIndex];
    } else {
        return null; // none found
    }

}

export { getToDo, getToDos, appendNewToDo }