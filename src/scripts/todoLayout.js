import { getToDos } from "./data/todoManager";
import EditIcon from "../images/edit.svg";
import DeleteIcon from "../images/delete.svg";
import InfoIcon from "../images/info.svg";
import StarIcon from "../images/star.svg";
import StarGoldIcon from "../images/star-gold.svg";
import CircleIcon from "../images/circle.svg";
import CheckGreenIcon from "../images/check-circle.svg";
import { getProject } from "./data/projectManager";

const clickItems = [];
const hoverItems = [];

const printToDoTable = (contentBox, type) => {
    let tableItem = document.createElement("table");
    let tableCaption = document.createElement("caption")
    
    if(type === "home")
    {
        tableCaption.textContent = "All Tasks";
    }

    if(type === "today")
    {
        tableCaption.textContent = "Today's Tasks";
    }

    if(type === "week")
    {
        tableCaption.textContent = "This Week's Tasks";
    }

    if(type === "favorite")
    {
        tableCaption.textContent = "Favorite Tasks";
    }

    if(type === "completed")
    {
        tableCaption.textContent = "Completed Tasks";
    }

    if(type.startsWith("project-"))
    {
        let projectId = +(type.split("-")[1]);
        let selectedProject = getProject(projectId);
        if(selectedProject !== null)
        {
            tableCaption.textContent = selectedProject.name;
        } else {
            tableCaption.textContent = "Unknown Project";
        }
    }


    tableItem.appendChild(tableCaption);

    let tableHead = document.createElement("thead");
    let tableRow = document.createElement("tr");

    let tableHeader = document.createElement("th");
    tableHeader.textContent = "Name";
    tableHeader.classList.add("nameColumn");
    tableRow.appendChild(tableHeader);

    tableHeader = document.createElement("th");
    tableHeader.textContent = "Due Date";
    tableRow.appendChild(tableHeader);

    tableHeader = document.createElement("th");
    tableHeader.textContent = "Priority";
    tableRow.appendChild(tableHeader);

    tableHeader = document.createElement("th");
    tableHeader.textContent = "Options";
    tableRow.appendChild(tableHeader);

    tableHead.appendChild(tableRow);
    tableItem.appendChild(tableHead);

    let tableBody = document.createElement("tbody");

    getToDos().forEach((todo) => {
        if(type === "home")
        {
            _printRowLayout(tableBody, todo);   
        }

        if(type === "today")
        {
            _printRowLayout(tableBody, todo);   
        }

        if(type === "week")
        {
            _printRowLayout(tableBody, todo);   
        }

        if(type === "favorite")
        {
            if(todo.favorite)
            {
                _printRowLayout(tableBody, todo);   
            }
        }

        if(type === "completed")
        {
            if(todo.completed)
            {
                _printRowLayout(tableBody, todo);   
            }
        }

        if(type.startsWith("project-"))
        {
            let projectId = +(type.split("-")[1]);
            if(todo.projectId === projectId)
            {
                _printRowLayout(tableBody, todo);
            }
        }     
    });

    tableItem.appendChild(tableBody);

    contentBox.appendChild(tableItem);
};

const _printRowLayout = (tableBody, todo) => {
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("data-id", todo.id);

    let tableCell = document.createElement("td");
    tableCell.classList.add("nameColumn");
    tableCell.textContent = todo.title;
    tableRow.appendChild(tableCell);

    tableCell = document.createElement("td");
    tableCell.textContent = todo.dueDate;
    tableRow.appendChild(tableCell);

    tableCell = document.createElement("td");
    let priorityDiv = document.createElement("div");
    priorityDiv.classList.add(todo.priority);
    priorityDiv.textContent = todo.priority;
    tableCell.appendChild(priorityDiv);
    tableRow.appendChild(tableCell);

    tableCell = document.createElement("td");

    let editImage = new Image();
    editImage.src = EditIcon;
    editImage.setAttribute("id", "edit-todo-" + todo.id);
    clickItems.push(editImage);
    tableCell.appendChild(editImage);

    let deleteImage = new Image();
    deleteImage.src = DeleteIcon;
    deleteImage.setAttribute("id", "delete-todo-" + todo.id);
    clickItems.push(deleteImage);
    tableCell.appendChild(deleteImage);

    let infoImage = new Image();
    infoImage.src = InfoIcon;
    infoImage.setAttribute("id", "info-todo-" + todo.id);
    clickItems.push(infoImage);
    tableCell.appendChild(infoImage);

    let circleImage = new Image();
    if(todo.completed)
    {
        circleImage.src = CheckGreenIcon;
        circleImage.setAttribute("data-status", "check");
    } else {
        circleImage.src = CircleIcon;
        circleImage.setAttribute("data-status", "none");
    }
    circleImage.setAttribute("id", "check-todo-" + todo.id);
    clickItems.push(circleImage);
    hoverItems.push(circleImage);
    tableCell.appendChild(circleImage);

    let starImage = new Image();
    if(todo.favorite)
    {
        starImage.src = StarGoldIcon;
        starImage.setAttribute("data-status", "check");
    } else {
        starImage.src = StarIcon;
        starImage.setAttribute("data-status", "none");
    }
    starImage.setAttribute("id", "fav-todo-" + todo.id);
    clickItems.push(starImage);
    hoverItems.push(starImage);
    tableCell.appendChild(starImage);

    tableRow.appendChild(tableCell);

    tableBody.appendChild(tableRow);
}

const addListeners = (clickHandler, mouseInHandler, mouseOutHandler) => {
    clickItems.forEach((node) => {
        node.addEventListener("click", clickHandler);
    });

    hoverItems.forEach((node) => {
        node.addEventListener("mouseover", mouseInHandler);
        node.addEventListener("mouseout", mouseOutHandler);
    });
}

export { printToDoTable, addListeners }