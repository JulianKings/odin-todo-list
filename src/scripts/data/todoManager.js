import { getNextTodoID } from "./dataManager";
import { ToDo } from "./todo";

const _toDos = [];

const getToDos = () => _toDos;

const appendNewToDo = (name, description, dueDate, priority) => {
    let todo = new ToDo(getNextTodoID(), name, description, 
    dueDate, priority, false, false, -1);
    _toDos.push(todo);
}

const deleteToDo = (id) => {
    let todoIndex = _toDos.findIndex((todo) => {
        return (todo.id === id);
    });

    if(todoIndex > -1)
    {
        _toDos.splice(todoIndex, 1);
    }

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

const alternateToDoCompleted = (id) => {
    let currentTodo = getToDo(id);
    if(currentTodo != null)
    {
        currentTodo.completed = !currentTodo.completed;
    }
}

const alternateToDoFavorite = (id) => {
    let currentTodo = getToDo(id);
    if(currentTodo != null)
    {
        currentTodo.favorite = !currentTodo.favorite;
    }
}

export { getToDo, getToDos, appendNewToDo, alternateToDoCompleted, alternateToDoFavorite, deleteToDo }