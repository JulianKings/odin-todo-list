/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/data/dataManager.js":
/*!*****************************************!*\
  !*** ./src/scripts/data/dataManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendProject: () => (/* binding */ appendProject),
/* harmony export */   appendToDo: () => (/* binding */ appendToDo),
/* harmony export */   getNextProjectId: () => (/* binding */ getNextProjectId),
/* harmony export */   getNextTodoID: () => (/* binding */ getNextTodoID),
/* harmony export */   populateData: () => (/* binding */ populateData),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   removeToDo: () => (/* binding */ removeToDo),
/* harmony export */   updateProject: () => (/* binding */ updateProject),
/* harmony export */   updateToDo: () => (/* binding */ updateToDo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/scripts/data/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/scripts/data/todo.js");
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ "./src/scripts/data/projectManager.js");
/* harmony import */ var _todoManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoManager */ "./src/scripts/data/todoManager.js");





let uniqueToDoID = 0;
let uniqueProjectId = 0;

const getNextTodoID = () => ++uniqueToDoID;

const getNextProjectId = () => ++uniqueProjectId;

const populateData = () => {
    if(!localStorage.getItem("todo-id-collection") && 
    !localStorage.getItem("project-id-collection"))
    {
        // create new storage
        localStorage.clear();
        localStorage.setItem("todo-id-collection", "");
        localStorage.setItem("project-id-collection", "");

        appendProject((0,_projectManager__WEBPACK_IMPORTED_MODULE_2__.appendNewProject)("Example Project 1"));
        appendProject((0,_projectManager__WEBPACK_IMPORTED_MODULE_2__.appendNewProject)("Example Project 2"));

        appendToDo((0,_todoManager__WEBPACK_IMPORTED_MODULE_3__.appendNewToDo)("Example ToDo 1", "Finish working on my ToDo project so i can go on with the rest of the projects in The Odin Project curriculum.", "13/10/2023", "low", -1));
        appendToDo((0,_todoManager__WEBPACK_IMPORTED_MODULE_3__.appendNewToDo)("Example ToDo 2", "Finish working on my ToDo project so i can go on with the rest of the projects in The Odin Project curriculum.", "15/10/2023", "high", -1));
        appendToDo((0,_todoManager__WEBPACK_IMPORTED_MODULE_3__.appendNewToDo)("Example ToDo 3", "Finish working on my ToDo project so i can go on with the rest of the projects in The Odin Project curriculum.", "22/10/2023", "low", -1));


    } else {
        let idSplit = localStorage.getItem("todo-id-collection").split(",");
        let projectSplit = localStorage.getItem("project-id-collection").split(",");

        for (const id of idSplit)
        {
            if(id !== '' && id.length > 0)
            {
                let todoId = +id;
                (0,_todoManager__WEBPACK_IMPORTED_MODULE_3__.appendToDoFromData)(todoId, localStorage.getItem(`todo-${todoId}-title`),
                    localStorage.getItem(`todo-${todoId}-description`), 
                    localStorage.getItem(`todo-${todoId}-dueDate`), 
                    localStorage.getItem(`todo-${todoId}-priority`), 
                    (localStorage.getItem(`todo-${todoId}-favorite`) == 'true'), 
                    (localStorage.getItem(`todo-${todoId}-completed`) == 'true'),
                    localStorage.getItem(`todo-${todoId}-project`));

                if(todoId > uniqueToDoID)
                {
                    uniqueToDoID = todoId;
                }
            }
        }

        for (const id of projectSplit)
        {
            if(id !== '' && id.length > 0)
            {
                let projectId = +id;
                (0,_projectManager__WEBPACK_IMPORTED_MODULE_2__.appendProjectFromData)(projectId, localStorage.getItem(`project-${projectId}-name`));

                if(projectId > uniqueProjectId)
                {
                    uniqueProjectId = projectId;
                }
            }
        }
    }
}

const appendProject = (project) =>
{
    if(!localStorage.getItem("project-id-collection").includes(project.id + ","))
    {
        localStorage.setItem("project-id-collection", (localStorage.getItem("project-id-collection") + project.id + ","));
        localStorage.setItem(`project-${project.id}-name`, project.name);
    }
}

const updateProject = (project) =>
{
    if(localStorage.getItem("project-id-collection").includes(project.id + ","))
    {
        localStorage.setItem(`project-${project.id}-name`, project.name);
    }
}

const removeProject = (project) =>
{
    if(localStorage.getItem("project-id-collection").includes(project.id + ","))
    {
        let newCollection = localStorage.getItem("project-id-collection").replace((project.id + ','), '');
        localStorage.setItem("project-id-collection", newCollection);
        localStorage.removeItem(`project-${project.id}-name`);
    }
}

const appendToDo = (todo) => {
    if(!localStorage.getItem("todo-id-collection").includes(todo.id + ","))
    {
        localStorage.setItem("todo-id-collection", (localStorage.getItem("todo-id-collection") + todo.id + ","));
        localStorage.setItem(`todo-${todo.id}-title`, todo.title);
        localStorage.setItem(`todo-${todo.id}-description`, todo.description);
        localStorage.setItem(`todo-${todo.id}-priority`, todo.priority);
        localStorage.setItem(`todo-${todo.id}-favorite`, todo.favorite);
        localStorage.setItem(`todo-${todo.id}-completed`, todo.completed);
        localStorage.setItem(`todo-${todo.id}-dueDate`, todo.dueDate);
        localStorage.setItem(`todo-${todo.id}-project`, todo.projectId);
    }
}

const updateToDo = (todo) => {
    if(localStorage.getItem("todo-id-collection").includes(todo.id + ","))
    {
        localStorage.setItem(`todo-${todo.id}-title`, todo.title);
        localStorage.setItem(`todo-${todo.id}-description`, todo.description);
        localStorage.setItem(`todo-${todo.id}-priority`, todo.priority);
        localStorage.setItem(`todo-${todo.id}-favorite`, todo.favorite);
        localStorage.setItem(`todo-${todo.id}-completed`, todo.completed);
        localStorage.setItem(`todo-${todo.id}-dueDate`, todo.dueDate);
        localStorage.setItem(`todo-${todo.id}-project`, todo.projectId);
    }
}

const removeToDo = (todo) => {
    if(localStorage.getItem("todo-id-collection").includes(todo.id + ","))
    {
        let newCollection = localStorage.getItem("todo-id-collection").replace((todo.id + ","), '');
        localStorage.setItem("todo-id-collection", newCollection);
        localStorage.removeItem(`todo-${todo.id}-title`);
        localStorage.removeItem(`todo-${todo.id}-description`);
        localStorage.removeItem(`todo-${todo.id}-priority`);
        localStorage.removeItem(`todo-${todo.id}-favorite`);
        localStorage.removeItem(`todo-${todo.id}-completed`);
        localStorage.removeItem(`todo-${todo.id}-dueDate`);
        localStorage.removeItem(`todo-${todo.id}-project`);
    }
}



/***/ }),

/***/ "./src/scripts/data/project.js":
/*!*************************************!*\
  !*** ./src/scripts/data/project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(id, name)
    {
        this.id = id;
        this.name = name;
    }
}



/***/ }),

/***/ "./src/scripts/data/projectManager.js":
/*!********************************************!*\
  !*** ./src/scripts/data/projectManager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendNewProject: () => (/* binding */ appendNewProject),
/* harmony export */   appendProjectFromData: () => (/* binding */ appendProjectFromData),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   getProjects: () => (/* binding */ getProjects)
/* harmony export */ });
/* harmony import */ var _dataManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataManager */ "./src/scripts/data/dataManager.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/scripts/data/project.js");



const _projects = [];

const getProjects = () => _projects;

const appendNewProject = (name) => {
    let proj = new _project__WEBPACK_IMPORTED_MODULE_1__.Project((0,_dataManager__WEBPACK_IMPORTED_MODULE_0__.getNextProjectId)(), name);
    _projects.push(proj);
    return proj;
}

const appendProjectFromData = (id, name) => {
    let proj = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(id, name);
    _projects.push(proj);
    return proj;
}

const deleteProject = (id) => {
    let projectIndex = _projects.findIndex((project) => {
        return (project.id === id);
    });

    if(projectIndex > -1)
    {
        _projects.splice(projectIndex, 1);
    }

}

const getProject = (id) => {
    let projIndex = _projects.findIndex((project) => {
        return (project.id === id);
    });

    if(projIndex > -1)
    {
        return _projects[projIndex];
    } else {
        return null; // none found
    }

}



/***/ }),

/***/ "./src/scripts/data/todo.js":
/*!**********************************!*\
  !*** ./src/scripts/data/todo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
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

    getDueDate() {
        let dateSplit = this.dueDate.split('/');
        let day = dateSplit[0];
        if(day.length == 1)
        {
            day = "0" + day;
        }
        return new Date(`${dateSplit[2]}-${dateSplit[1]}-${day}T12:00:00`);
    }
}



/***/ }),

/***/ "./src/scripts/data/todoManager.js":
/*!*****************************************!*\
  !*** ./src/scripts/data/todoManager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alternateToDoCompleted: () => (/* binding */ alternateToDoCompleted),
/* harmony export */   alternateToDoFavorite: () => (/* binding */ alternateToDoFavorite),
/* harmony export */   appendNewToDo: () => (/* binding */ appendNewToDo),
/* harmony export */   appendToDoFromData: () => (/* binding */ appendToDoFromData),
/* harmony export */   deleteToDo: () => (/* binding */ deleteToDo),
/* harmony export */   getToDo: () => (/* binding */ getToDo),
/* harmony export */   getToDos: () => (/* binding */ getToDos)
/* harmony export */ });
/* harmony import */ var _dataManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataManager */ "./src/scripts/data/dataManager.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/scripts/data/todo.js");



const _toDos = [];

const getToDos = () => _toDos;

const appendNewToDo = (name, description, dueDate, priority, project) => {
    let todo = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDo((0,_dataManager__WEBPACK_IMPORTED_MODULE_0__.getNextTodoID)(), name, description, 
    dueDate, priority, false, false, project);
    _toDos.push(todo);

    return todo;
}

const appendToDoFromData = (id, name, description, dueDate, priority, favorite, completed, project) => {
    let todo = new _todo__WEBPACK_IMPORTED_MODULE_1__.ToDo(id, name, description, 
    dueDate, priority, favorite, completed, project);
    _toDos.push(todo);

    return todo;
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



/***/ }),

/***/ "./src/scripts/dateHelper.js":
/*!***********************************!*\
  !*** ./src/scripts/dateHelper.js ***!
  \***********************************/
/***/ (() => {

/**
 * Returns the week number for this date.  dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getWeek = function (dowOffset) {
    /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.meanfreepath.com */
    
        dowOffset = typeof(dowOffset) == 'number' ? dowOffset : 0; //default dowOffset to zero
        var newYear = new Date(this.getFullYear(),0,1);
        var day = newYear.getDay() - dowOffset; //the day of week the year begins on
        day = (day >= 0 ? day : day + 7);
        var daynum = Math.floor((this.getTime() - newYear.getTime() - 
        (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
        var weeknum;
        //if the year starts before the middle of a week
        if(day < 4) {
            weeknum = Math.floor((daynum+day-1)/7) + 1;
            if(weeknum > 52) {
                nYear = new Date(this.getFullYear() + 1,0,1);
                nday = nYear.getDay() - dowOffset;
                nday = nday >= 0 ? nday : nday + 7;
                /*if the next year starts before the middle of
                  the week, it is week #1 of that year*/
                weeknum = nday < 4 ? 1 : 53;
            }
        }
        else {
            weeknum = Math.floor((daynum+day-1)/7);
        }
        return weeknum;
    };

/***/ }),

/***/ "./src/scripts/layoutManager.js":
/*!**************************************!*\
  !*** ./src/scripts/layoutManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendContent: () => (/* binding */ appendContent),
/* harmony export */   printBasicLayout: () => (/* binding */ printBasicLayout)
/* harmony export */ });
/* harmony import */ var _todoLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLayout */ "./src/scripts/todoLayout.js");
/* harmony import */ var _data_projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/projectManager */ "./src/scripts/data/projectManager.js");
/* harmony import */ var _data_todoManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/todoManager */ "./src/scripts/data/todoManager.js");
/* harmony import */ var _data_dataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/dataManager */ "./src/scripts/data/dataManager.js");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_edit_white_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/edit-white.svg */ "./src/images/edit-white.svg");
/* harmony import */ var _images_delete_white_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/delete-white.svg */ "./src/images/delete-white.svg");
/* harmony import */ var _images_star_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/star.svg */ "./src/images/star.svg");
/* harmony import */ var _images_star_gold_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/star-gold.svg */ "./src/images/star-gold.svg");
/* harmony import */ var _images_circle_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/circle.svg */ "./src/images/circle.svg");
/* harmony import */ var _images_check_circle_black_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/check-circle-black.svg */ "./src/images/check-circle-black.svg");
/* harmony import */ var _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/check-circle.svg */ "./src/images/check-circle.svg");
/* harmony import */ var _images_plus_circle_black_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/plus-circle-black.svg */ "./src/images/plus-circle-black.svg");
// Import methods





// Import images












// Declare variables
let sidebarObject = null;
let sidebarBackground = null;
let currentlySelected = "linkHome";
let dialogObject = null;

const printBasicLayout = () => {
    let headerMenuImage = document.querySelector(".menu-image-holder");
    headerMenuImage.addEventListener("click", _clickHandler);

    let menuImage = new Image();
    menuImage.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_4__;
    headerMenuImage.appendChild(menuImage);
}

const appendContent = (content) => {
    let contentBox = document.querySelector(".content");

    let previousContentBox = document.querySelector(".main-content");

    if(previousContentBox !== null)
    {
        previousContentBox.remove();
    }

    let mainContentBox = document.createElement("div");
    mainContentBox.classList.add("main-content");
    
    // handle each layout
    (0,_todoLayout__WEBPACK_IMPORTED_MODULE_0__.printToDoTable)(mainContentBox, _getLinkType(content));
    (0,_todoLayout__WEBPACK_IMPORTED_MODULE_0__.addListeners)(_clickHandler, _mouseInHandler, _mouseOutHandler);
    
    contentBox.appendChild(mainContentBox);

}

const _getLinkType = (content) => {
    if(content === "linkHome")
    {
        return "home";
    }

    if(content === "linkWeek")
    {
        return "week";
    }

    if(content === "linkToday")
    {
        return "today";
    }

    if(content === "linkFavorites")
    {
        return "favorite";
    }

    if(content === "linkCompleted")
    {
        return "completed";
    }

    if(content.startsWith("linkProject-"))
    {
        let projectId = content.split("-")[1];
        return "project-" + projectId;
    }

    return "unknown";
}

const _mouseInHandler = (event) => {
    // id selectors
    if(event.target.id.startsWith("check-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = _images_check_circle_black_svg__WEBPACK_IMPORTED_MODULE_12__;
        }
    }
    
    if(event.target.id.startsWith("fav-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = _images_star_gold_svg__WEBPACK_IMPORTED_MODULE_10__;
        }
    }

}

const _mouseOutHandler = (event) => {
    // id selectors
    if(event.target.id.startsWith("check-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_11__;
        }
    }

    if(event.target.id.startsWith("fav-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = _images_star_svg__WEBPACK_IMPORTED_MODULE_9__;
        }
    }

}

const _clickHandler = (event) => {
    // id selectors
    if(event.target.id === "linkHome" || event.target.id === "linkToday" ||
    event.target.id === "linkWeek" || event.target.id == "linkFavorites" ||
    event.target.id == "linkCompleted")
    {
        _menuSelected(event.target);
    }

    if(event.target.id.startsWith("linkProject-"))
    {
        _menuSelected(event.target);
    }

    if(event.target.id.startsWith("check-todo-"))
    {
        event.stopPropagation();
        let todoID = +(event.target.id.split("-")[2]);
        (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.alternateToDoCompleted)(todoID);
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.setAttribute("data-status", "check");
            event.target.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_13__;
        } else {
            event.target.setAttribute("data-status", "none");
            event.target.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_11__;
        }

        (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.updateToDo)((0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.getToDo)(todoID));
    }

    if(event.target.id.startsWith("fav-todo-"))
    {
        event.stopPropagation();
        let todoID = +(event.target.id.split("-")[2]);
        (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.alternateToDoFavorite)(todoID);
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.setAttribute("data-status", "check");
            event.target.src = _images_star_gold_svg__WEBPACK_IMPORTED_MODULE_10__;
        } else {
            event.target.setAttribute("data-status", "none");
            event.target.src = _images_star_svg__WEBPACK_IMPORTED_MODULE_9__;
        }

        (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.updateToDo)((0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.getToDo)(todoID));
    }

    if(event.target.id.startsWith("delete-todo-"))
    {
        event.stopPropagation();
        let todoID = +(event.target.id.split("-")[2]);
        let rowComponent = document.querySelector(`tr[data-id="${todoID}"]`);
        if(rowComponent !== null)
        {
            rowComponent.remove();
        }
        (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.removeToDo)((0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.getToDo)(todoID));        
        (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.deleteToDo)(todoID);        
    }

    if(event.target.id.startsWith("delete-project-"))
    {
        event.stopPropagation();
        let projectID = +(event.target.id.split("-")[2]);
        let projectComponent = document.querySelector(`.projectItem[data-id="${projectID}"]`);
        if(projectComponent !== null)
        {
            projectComponent.remove();
        }
        (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.removeProject)((0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectID));
        (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectID);

        let projectCaption = document.querySelector(".project-heading");
        if(projectCaption !== null)
        {
            projectCaption.textContent = `My Projects (${(0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProjects)().length})`;
        }
    }

    if(event.target.id === "add-project" || event.target.id === "add-todo" ||
    event.target.id.startsWith("info-todo-") || event.target.id.startsWith("edit-todo-") ||
    event.target.id.startsWith("edit-project-"))
    {
        _createDialog(event.target.id);
    }

    if(event.target.id === "dialog-main" || event.target.id === "todo-cancel" || event.target.id === "project-cancel")
    {
        event.stopPropagation();
        if(dialogObject !== null)
        {
            dialogObject.close();
            dialogObject.remove();

            dialogObject = null;
            return;
        }
    }

    if(event.target.id === "todo-send")
    {
        if(dialogObject !== null)
        {
            event.stopPropagation();
            let todoName = document.querySelector('#todoName');
            if(todoName !== null)
            {
                if(todoName.classList.contains("error"))
                {
                    todoName.classList.remove("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "";
                    }
                }

                if(todoName.value == '' || todoName.value.length === 0)
                {
                    // error
                    todoName.classList.add("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "Please input something in the title.";
                    }
                } else {
                    // todoName, todoDescription, todoDate, todoPriority, todoProject
                    let todoDescription = document.querySelector("#todoDescription");
                    let todoDate = document.querySelector("#todoDate");
                    let todoPriority = document.querySelector("#todoPriority");
                    let todoProject = document.querySelector("#todoProject");

                    let dueDate = "";
                    if(todoDate.value.length > 0)
                    {
                        let dateSplit = todoDate.value.split("-");
                        dueDate = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
                    } else {
                        let date = new Date();
                        dueDate = `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
                    }
                    let newTodo = (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.appendNewToDo)(todoName.value, todoDescription.value, dueDate, todoPriority.value, todoProject.value);
                    (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.appendToDo)(newTodo);
                    (0,_todoLayout__WEBPACK_IMPORTED_MODULE_0__.appendToDo)(_getLinkType(currentlySelected), document.querySelector("tbody"), newTodo);

                    if(dialogObject !== null)
                    {
                        dialogObject.close();
                        dialogObject.remove();

                        dialogObject = null;
                        return;
                    }

                }
            }
        }
    }

    if(event.target.id.startsWith("todo-save-"))
    {
        let todoId = +(event.target.id.split("-")[2]);
        let editTodo = (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.getToDo)(todoId);
        if(dialogObject !== null && editTodo !== null)
        {
            event.stopPropagation();
            let todoName = document.querySelector('#todoName');
            if(todoName !== null)
            {
                if(todoName.classList.contains("error"))
                {
                    todoName.classList.remove("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "";
                    }
                }

                if(todoName.value == '' || todoName.value.length === 0)
                {
                    // error
                    todoName.classList.add("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "Please input something in the title.";
                    }
                } else {
                    if(todoName.value !== editTodo.title)
                    {
                        editTodo.title = todoName.value;
                        let editValue = document.querySelector(`tr[data-id="${todoId}"] td.nameColumn`);
                        if(editValue !== null)
                        {
                            editValue.textContent = editTodo.title;
                        }  
                    }

                    let todoDescription = document.querySelector("#todoDescription");

                    if(todoDescription.value !== editTodo.description)
                    {
                        editTodo.description = todoDescription.value;                        
                    }

                    let todoPriority = document.querySelector("#todoPriority");
                    
                    if(todoPriority.value !== editTodo.priority)
                    {
                        editTodo.priority = todoPriority.value;    
                        let editValue = document.querySelector(`tr[data-id="${todoId}"] td.priorityColumn`);
                        if(editValue !== null)
                        {
                            editValue.innerHTML = "";
                            let prio = document.createElement("div");
                            prio.classList.add(editTodo.priority.toLowerCase());
                            prio.textContent = editTodo.priority;
                            editValue.appendChild(prio);
                        }                                            
                    }

                    let todoProject = document.querySelector("#todoProject");

                    if(todoProject.value !== editTodo.projectId)
                    {
                        editTodo.projectId = todoProject.value;                        
                    }

                    let todoDate = document.querySelector("#todoDate");
                    
                    let dDate = "";
                    if(todoDate.value.length > 0)
                    {
                        let dateSplit = todoDate.value.split("-");
                        dDate = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
                    } else {
                        let date = new Date();
                        dDate = `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
                    }

                    if(editTodo.dueDate !== dDate)
                    {
                        editTodo.dueDate = dDate;
                        let editValue = document.querySelector(`tr[data-id="${todoId}"] td.dateColumn`);
                        if(editValue !== null)
                        {
                            editValue.textContent = dDate;
                        } 
                    }

                    (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.updateToDo)(editToDo);

                    if(dialogObject !== null)
                    {
                        dialogObject.close();
                        dialogObject.remove();

                        dialogObject = null;
                        return;
                    }

                }
            }
        }
    }

    if(event.target.id.startsWith("project-save-"))
    {
        let projId = +(event.target.id.split("-")[2]);
        let editProject = (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProject)(projId);
        if(dialogObject !== null && editProject !== null)
        {
            event.stopPropagation();
            let projectName = document.querySelector('#projectName');
            if(projectName !== null)
            {
                if(projectName.classList.contains("error"))
                {
                    projectName.classList.remove("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "";
                    }
                }

                if(projectName.value == '' || projectName.value.length === 0)
                {
                    // error
                    projectName.classList.add("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "Please input something in the name.";
                    }
                } else {
                    if(editProject.name !== projectName.value)
                    {
                        editProject.name = projectName.value;

                        if(sidebarObject !== null)
                        {
                            let projectCaption = document.querySelector(`.projectItem[data-id="${projId}"] .projectItem-text`);
                            if(projectCaption !== null)
                            {
                                projectCaption.textContent = projectName.value;
                            }
                        }

                    }

                    (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.updateProject)(editProject);

                    if(dialogObject !== null)
                    {
                        dialogObject.close();
                        dialogObject.remove();

                        dialogObject = null;
                        return;
                    }

                }
            }
        }
    }

    if(event.target.id === "project-send")
    {
        if(dialogObject !== null)
        {
            event.stopPropagation();
            let projectName = document.querySelector('#projectName');
            if(projectName !== null)
            {
                if(projectName.classList.contains("error"))
                {
                    projectName.classList.remove("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "";
                    }
                }

                if(projectName.value == '' || projectName.value.length === 0)
                {
                    // error
                    projectName.classList.add("error");
                    let errorInput = document.querySelector(".input-error");
                    if(errorInput !== null)
                    {
                        errorInput.textContent = "Please input something in the name.";
                    }
                } else {
                    let newProject = (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.appendNewProject)(projectName.value);
                    (0,_data_dataManager__WEBPACK_IMPORTED_MODULE_3__.appendProject)(newProject);

                    if(sidebarObject !== null)
                    {
                        _appendProject(sidebarObject, newProject);
                    }

                    if(dialogObject !== null)
                    {
                        dialogObject.close();
                        dialogObject.remove();

                        dialogObject = null;
                        return;
                    }

                }
            }
        }
    }

    // class selectors
    if(event.target.classList.contains("sidebarBackground"))
    {
        event.stopPropagation();
        _removeSidebar();
        return;
    }

    if(event.target.classList.contains("menu-image-holder") || event.target.parentElement.classList.contains("menu-image-holder"))
    {
        _createSidebar();
    }
}

const _menuSelected = (target) => {
    if(target.id === "secondaryLinkMenu")
    {
        currentlySelected = "linkMenu";
        // Handle layout modification logic
        appendContent("linkMenu");

    } else {
        if(sidebarObject != null)
        {
            _removeSidebar();

            if(!target.classList.contains("selected"))
            {
                let allMenus = document.querySelectorAll(".menuItem");
                allMenus.forEach((menu) => {
                    if(menu.classList.contains("selected"))
                    {
                        menu.classList.remove("selected");
                    }
                });

                target.classList.add("selected");

                currentlySelected = target.id;
                // Handle layout modification logic
                appendContent(target.id);
            }
        }
    }
}

const _removeSidebar = () => {
    if(sidebarObject !== null)
    {
        if(sidebarBackground !== null)
        {
            sidebarBackground.remove();
            sidebarBackground = null;
        }

        if(sidebarObject.classList.contains("slide-in"))
        {
            sidebarObject.classList.remove("slide-in");
        }
        sidebarObject.classList.add("slide-out");
        setTimeout(() => {
            sidebarObject.remove();     
            sidebarObject = null;       
        }, 375);
    }
}

const _createSidebar = () => {

    if(sidebarObject === null)
    {
        let contentBox = document.querySelector(".content");

        sidebarBackground = document.createElement("section");
        sidebarBackground.classList.add("sidebarBackground");
        sidebarBackground.addEventListener("click", _clickHandler);
        contentBox.appendChild(sidebarBackground);

        sidebarObject = document.createElement("section");
        sidebarObject.classList.add("sidebarMenu");
        sidebarObject.classList.add("slide-in");

        let sidebarMenuHolder = document.createElement("div");
        sidebarMenuHolder.classList.add("menuHolder");

        let sidebarMenu = document.createElement("div");
        sidebarMenu.classList.add("menuItem");
        if(currentlySelected === "linkHome")
        {
            sidebarMenu.classList.add("selected");
        }
        sidebarMenu.textContent = "All";
        sidebarMenu.setAttribute("id", "linkHome");
        sidebarMenu.addEventListener("click", _clickHandler);
        sidebarMenuHolder.appendChild(sidebarMenu);

        sidebarMenu = document.createElement("div");
        sidebarMenu.classList.add("menuItem");
        if(currentlySelected === "linkToday")
        {
            sidebarMenu.classList.add("selected");
        }
        sidebarMenu.textContent = "Today";
        sidebarMenu.setAttribute("id", "linkToday");
        sidebarMenu.addEventListener("click", _clickHandler);
        sidebarMenuHolder.appendChild(sidebarMenu);

        sidebarMenu = document.createElement("div");
        sidebarMenu.classList.add("menuItem");
        if(currentlySelected === "linkWeek")
        {
            sidebarMenu.classList.add("selected");
        }
        sidebarMenu.textContent = "This Week";
        sidebarMenu.setAttribute("id", "linkWeek");
        sidebarMenu.addEventListener("click", _clickHandler);
        sidebarMenuHolder.appendChild(sidebarMenu);

        sidebarMenu = document.createElement("div");
        sidebarMenu.classList.add("menuItem");
        if(currentlySelected === "linkFavorites")
        {
            sidebarMenu.classList.add("selected");
        }
        sidebarMenu.textContent = "Favorite Tasks";
        sidebarMenu.setAttribute("id", "linkFavorites");
        sidebarMenu.addEventListener("click", _clickHandler);
        sidebarMenuHolder.appendChild(sidebarMenu);

        sidebarMenu = document.createElement("div");
        sidebarMenu.classList.add("menuItem");
        if(currentlySelected === "linkCompleted")
        {
            sidebarMenu.classList.add("selected");
        }
        sidebarMenu.textContent = "Completed Tasks";
        sidebarMenu.setAttribute("id", "linkCompleted");
        sidebarMenu.addEventListener("click", _clickHandler);
        sidebarMenuHolder.appendChild(sidebarMenu);

        sidebarObject.appendChild(sidebarMenuHolder);
        

        let projectHeading = document.createElement("div");
        projectHeading.classList.add("project-heading");
        projectHeading.textContent = `My Projects (${(0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProjects)().length})`;
        
        let appendProject = document.createElement("div");
        appendProject.classList.add("append-project");

        let addImage = new Image();
        addImage.src = _images_plus_circle_black_svg__WEBPACK_IMPORTED_MODULE_14__;
        addImage.setAttribute("id", "add-project");
        addImage.addEventListener("click", _clickHandler);
        appendProject.appendChild(addImage);

        projectHeading.appendChild(appendProject);
        sidebarObject.appendChild(projectHeading);

        let hrItem = document.createElement("div");
        hrItem.classList.add("hr-item");
        hrItem.innerHTML = "<hr />";
        sidebarObject.appendChild(hrItem);

        (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProjects)().forEach((project) => {
            _appendProject(sidebarObject, project);
        });

        contentBox.appendChild(sidebarObject);
    }
}

const _appendProject = (sidebarObject, project) => {
    let sidebarMenu = document.createElement("div");
    sidebarMenu.classList.add("menuItem");
    sidebarMenu.classList.add("projectItem");
    sidebarMenu.setAttribute("data-id", project.id);
    if(currentlySelected === "linkProject-" + project.id)
    {
        sidebarMenu.classList.add("selected");
    }
    sidebarMenu.setAttribute("id", "linkProject-" + project.id);
    sidebarMenu.addEventListener("click", _clickHandler);

    let sidebarMenuText = document.createElement("div");
    sidebarMenuText.textContent = project.name;
    sidebarMenuText.classList.add("projectItem-text")
    sidebarMenu.appendChild(sidebarMenuText);

    let sidebarMenuOptions = document.createElement("div");
    
    let editImage = new Image();
    editImage.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_5__;
    if(currentlySelected === "linkProject-" + project.id)
    {
        editImage.src = _images_edit_white_svg__WEBPACK_IMPORTED_MODULE_7__;
    }
    editImage.addEventListener("click", _clickHandler);
    editImage.setAttribute("id", "edit-project-" + project.id);
    sidebarMenuOptions.appendChild(editImage);

    let deleteImage = new Image();
    deleteImage.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_6__;
    if(currentlySelected === "linkProject-" + project.id)
    {
        deleteImage.src = _images_delete_white_svg__WEBPACK_IMPORTED_MODULE_8__;
    }
    deleteImage.addEventListener("click", _clickHandler);
    deleteImage.setAttribute("id", "delete-project-" + project.id);
    sidebarMenuOptions.appendChild(deleteImage);

    sidebarMenu.appendChild(sidebarMenuOptions);

    sidebarObject.appendChild(sidebarMenu);
}

const _createDialog = (type) => {

    if(dialogObject !== null)
    {
        dialogObject.close();
        dialogObject.remove();
        dialogObject = null;
    }

    dialogObject = document.createElement("dialog");
    dialogObject.setAttribute("id", "dialog-main");
    dialogObject.addEventListener("click", _clickHandler);

    let dialogContainer = document.createElement("div");
    dialogContainer.setAttribute("id", "dialog-container");

    let dialogTitle = document.createElement("div");
    dialogTitle.classList.add("dialog-title");
    dialogTitle.textContent = type;

    if(type === "add-todo")
    {
        dialogTitle.textContent = "Add a new task";
    }

    if(type === "add-project")
    {
        dialogTitle.textContent = "Add a new project";
    }

    if(type.startsWith("edit-project-"))
    {
        dialogTitle.textContent = "Edit project";
    }

    if(type.startsWith("edit-todo-"))
    {
        dialogTitle.textContent = "Edit task";
    }

    if(type.startsWith("info-todo-"))
    {
        dialogTitle.textContent = "Task information";
    }

    dialogContainer.appendChild(dialogTitle);

    let dialogContent = document.createElement("div");
    dialogContent.classList.add("dialog-content");
    
    if(type === "add-todo")
    {
        appendNewToDoForm(dialogContent);        
    }

    if(type === "add-project")
    {
        appendNewProjectForm(dialogContent);
    }

    if(type.startsWith("edit-project-"))
    {
        let projId = +(type.split('-')[2]);
        let editProject = (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProject)(projId);
        if(editProject != null)
        {
            editProjectForm(dialogContent, editProject);
        }
    }

    if(type.startsWith("edit-todo-"))
    {
        let todoId = +(type.split('-')[2]);
        let editToDo = (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.getToDo)(todoId);
        if(editToDo != null)
        {
            editToDoForm(dialogContent, editToDo);
        }
    }

    if(type.startsWith("info-todo-"))
    {
        let todoId = +(type.split('-')[2]);
        let editToDo = (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_2__.getToDo)(todoId);
        if(editToDo != null)
        {
            infoToDo(dialogContent, editToDo);
        }
    }

    dialogContainer.appendChild(dialogContent);

    dialogObject.appendChild(dialogContainer);
    (document.querySelector("body")).appendChild(dialogObject);
    dialogObject.showModal();

}

const appendNewToDoForm = (dialogContent) => {
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "todoName");
    nameLabel.textContent = "Title: ";
    dialogContent.appendChild(nameLabel);

    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "todoName");
    nameInput.setAttribute("name", "todo_name");
    nameInput.setAttribute("maxlength", "32");
    nameInput.setAttribute("required", "");
    dialogContent.appendChild(nameInput);

    let errorLabel = document.createElement("div");
    errorLabel.classList.add("input-error");
    dialogContent.appendChild(errorLabel);

    let descLabel = document.createElement("label");
    descLabel.setAttribute("for", "todoDescription");
    descLabel.textContent = "Description: ";
    dialogContent.appendChild(descLabel);

    let descInput = document.createElement("textarea");
    descInput.setAttribute("id", "todoDescription");
    descInput.setAttribute("name", "todo_description");
    descInput.setAttribute("rows", "6");
    dialogContent.appendChild(descInput);

    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "todoDate");
    dateLabel.textContent = "Due date: ";
    dialogContent.appendChild(dateLabel);

    let dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "todoDate");
    dateInput.setAttribute("name", "todo_date");
    dialogContent.appendChild(dateInput);

    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "todoPriority");
    priorityLabel.textContent = "Priority: ";
    dialogContent.appendChild(priorityLabel);

    let priorityInput = document.createElement("select");
    priorityInput.setAttribute("id", "todoPriority");
    priorityInput.setAttribute("name", "todo_priority");

    let priorityOption = document.createElement("option");
    priorityOption.setAttribute("value", "low");
    priorityOption.setAttribute("selected", "");
    priorityOption.textContent = "Low";
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.setAttribute("value", "medium");
    priorityOption.textContent = "Medium";
    priorityInput.appendChild(priorityOption);

    priorityOption = document.createElement("option");
    priorityOption.setAttribute("value", "high");
    priorityOption.textContent = "High";
    priorityInput.appendChild(priorityOption);

    dialogContent.appendChild(priorityInput);

    let projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "todoProject");
    projectLabel.textContent = "Project: ";
    dialogContent.appendChild(projectLabel);

    let projectInput = document.createElement("select");
    projectInput.setAttribute("id", "todoProject");
    projectInput.setAttribute("name", "todo_project");

    let projectOption = document.createElement("option");
    projectOption.setAttribute("value", "-1");
    projectOption.setAttribute("selected", "");
    projectOption.textContent = "None";
    projectInput.appendChild(projectOption);

    (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProjects)().forEach((project) => {
        projectOption = document.createElement("option");
        projectOption.setAttribute("value", project.id);
        projectOption.textContent = project.name;
        projectInput.appendChild(projectOption);
    });        
    
    dialogContent.appendChild(projectInput);

    let projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");

    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.setAttribute("id", "todo-cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(cancelButton);

    let sendButton = document.createElement("button");
    sendButton.classList.add("send-button");
    sendButton.setAttribute("id", "todo-send");
    sendButton.textContent = "Add";
    sendButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(sendButton);

    dialogContent.appendChild(projectButtons);
}

const editToDoForm = (dialogContent, todo) => {
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "todoName");
    nameLabel.textContent = "Title: ";
    dialogContent.appendChild(nameLabel);

    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "todoName");
    nameInput.setAttribute("name", "todo_name");
    nameInput.setAttribute("maxlength", "32");
    nameInput.setAttribute("required", "");
    nameInput.setAttribute("value", todo.title);
    dialogContent.appendChild(nameInput);

    let errorLabel = document.createElement("div");
    errorLabel.classList.add("input-error");
    dialogContent.appendChild(errorLabel);

    let descLabel = document.createElement("label");
    descLabel.setAttribute("for", "todoDescription");
    descLabel.textContent = "Description: ";
    dialogContent.appendChild(descLabel);

    let descInput = document.createElement("textarea");
    descInput.setAttribute("id", "todoDescription");
    descInput.setAttribute("name", "todo_description");
    descInput.setAttribute("rows", "6");
    descInput.textContent = todo.description;
    dialogContent.appendChild(descInput);

    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "todoDate");
    dateLabel.textContent = "Due date: ";
    dialogContent.appendChild(dateLabel);

    let dateInput = document.createElement("input");
    let dateSplit = todo.dueDate.split("/");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "todoDate");
    dateInput.setAttribute("name", "todo_date");
    dateInput.setAttribute("value", `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`);
    dialogContent.appendChild(dateInput);

    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "todoPriority");
    priorityLabel.textContent = "Priority: ";
    dialogContent.appendChild(priorityLabel);

    let priorityInput = document.createElement("select");
    priorityInput.setAttribute("id", "todoPriority");
    priorityInput.setAttribute("name", "todo_priority");

    let priorityOption = document.createElement("option");
    priorityOption.setAttribute("value", "low");
    if(todo.priority.toLowerCase() === "low")
    {
        priorityOption.setAttribute("selected", "");
    } else {
        priorityOption.removeAttribute("selected");
    }
    priorityOption.textContent = "Low";
    priorityInput.appendChild(priorityOption);

    let priorityOption2 = document.createElement("option");
    priorityOption2.setAttribute("value", "medium");
    if(todo.priority.toLowerCase() === "medium")
    {
        priorityOption2.setAttribute("selected", "");
    } else {
        priorityOption2.removeAttribute("selected");
    }
    priorityOption2.textContent = "Medium";
    priorityInput.appendChild(priorityOption2);

    let priorityOption3 = document.createElement("option");
    priorityOption3.setAttribute("value", "high");
    if(todo.priority.toLowerCase() === "high")
    {
        priorityOption3.setAttribute("selected", "");
    } else {
        priorityOption3.removeAttribute("selected");
    }
    priorityOption3.textContent = "High";
    priorityInput.appendChild(priorityOption3);

    dialogContent.appendChild(priorityInput);

    let projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "todoProject");
    projectLabel.textContent = "Project: ";
    dialogContent.appendChild(projectLabel);

    let projectInput = document.createElement("select");
    projectInput.setAttribute("id", "todoProject");
    projectInput.setAttribute("name", "todo_project");

    let projectOption = document.createElement("option");
    projectOption.setAttribute("value", "-1");
    if(+todo.projectId === -1)
    {
        priorityOption.setAttribute("selected", "");
    }
    projectOption.textContent = "None";
    projectInput.appendChild(projectOption);

    (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProjects)().forEach((project) => {
        let eProjectOption = document.createElement("option");
        eProjectOption.setAttribute("value", project.id);
        if(+todo.projectId === +project.id)
        {
            eProjectOption.setAttribute("selected", "");
        }
        eProjectOption.textContent = project.name;
        projectInput.appendChild(eProjectOption);
    });        
    
    dialogContent.appendChild(projectInput);

    let projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");

    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.setAttribute("id", "todo-cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(cancelButton);

    let sendButton = document.createElement("button");
    sendButton.classList.add("send-button");
    sendButton.setAttribute("id", "todo-save-" + todo.id);
    sendButton.textContent = "Save";
    sendButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(sendButton);

    dialogContent.appendChild(projectButtons);
}

const infoToDo = (dialogContent, todo) => {
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "todoName");
    nameLabel.textContent = "Title: ";
    nameLabel.style['font-weight'] = 'bold';
    dialogContent.appendChild(nameLabel);

    let nameInput = document.createElement("div");
    nameInput.textContent = todo.title;
    dialogContent.appendChild(nameInput);

    let descLabel = document.createElement("label");
    descLabel.setAttribute("for", "todoDescription");
    descLabel.textContent = "Description: ";
    descLabel.style['font-weight'] = 'bold';
    dialogContent.appendChild(descLabel);

    let descInput = document.createElement("div");
    descInput.textContent = todo.description;
    dialogContent.appendChild(descInput);

    let dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "todoDate");
    dateLabel.textContent = "Due date: ";
    dateLabel.style['font-weight'] = 'bold';
    dialogContent.appendChild(dateLabel);

    let dateInput = document.createElement("div");
    let dateSplit = todo.dueDate.split("/");
    dateInput.textContent =  `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`;
    dialogContent.appendChild(dateInput);

    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "todoPriority");
    priorityLabel.textContent = "Priority: ";
    priorityLabel.style['font-weight'] = 'bold';
    dialogContent.appendChild(priorityLabel);

    let priorityInput = document.createElement("div");
    priorityInput.textContent = todo.priority;
    dialogContent.appendChild(priorityInput);

    let projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "todoProject");
    projectLabel.textContent = "Project: ";
    projectLabel.style['font-weight'] = 'bold';
    dialogContent.appendChild(projectLabel);

    let projectInput = document.createElement("div");
    if(+todo.projectId === -1)
    {
        projectInput.textContent = "None";
    } else {
        let currentProj = (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProject)(+todo.projectId);
        if(currentProj !== null)
        {
            projectInput.textContent = currentProj.name;
        } else {
            projectInput.textContent = "Unknown";
        }
    }
    dialogContent.appendChild(projectInput);

    let projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");

    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.setAttribute("id", "todo-cancel");
    cancelButton.textContent = "Exit";
    cancelButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(cancelButton);
    dialogContent.appendChild(projectButtons);
}

const appendNewProjectForm = (dialogContent) => {
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "projectName");
    nameLabel.textContent = "Name: ";
    dialogContent.appendChild(nameLabel);

    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "projectName");
    nameInput.setAttribute("name", "project_name");
    nameInput.setAttribute("maxlength", "32");
    nameInput.setAttribute("required", "");
    dialogContent.appendChild(nameInput);

    let errorLabel = document.createElement("div");
    errorLabel.classList.add("input-error");
    dialogContent.appendChild(errorLabel);

    let projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");

    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.setAttribute("id", "project-cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(cancelButton);

    let sendButton = document.createElement("button");
    sendButton.classList.add("send-button");
    sendButton.setAttribute("id", "project-send");
    sendButton.textContent = "Add";
    sendButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(sendButton);

    dialogContent.appendChild(projectButtons);
}

const editProjectForm = (dialogContent, project) => {
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "projectName");
    nameLabel.textContent = "Name: ";
    dialogContent.appendChild(nameLabel);

    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "projectName");
    nameInput.setAttribute("name", "project_name");
    nameInput.setAttribute("maxlength", "32");
    nameInput.setAttribute("required", "");
    nameInput.value = project.name;
    dialogContent.appendChild(nameInput);

    let errorLabel = document.createElement("div");
    errorLabel.classList.add("input-error");
    dialogContent.appendChild(errorLabel);

    let projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons");

    let cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.setAttribute("id", "project-cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(cancelButton);

    let sendButton = document.createElement("button");
    sendButton.classList.add("send-button");
    sendButton.setAttribute("id", "project-save-" + project.id);
    sendButton.textContent = "Save";
    sendButton.addEventListener("click", _clickHandler);
    projectButtons.appendChild(sendButton);

    dialogContent.appendChild(projectButtons);
}





/***/ }),

/***/ "./src/scripts/todoLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/todoLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListeners: () => (/* binding */ addListeners),
/* harmony export */   appendToDo: () => (/* binding */ appendToDo),
/* harmony export */   printToDoTable: () => (/* binding */ printToDoTable)
/* harmony export */ });
/* harmony import */ var _data_todoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/todoManager */ "./src/scripts/data/todoManager.js");
/* harmony import */ var _data_projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/projectManager */ "./src/scripts/data/projectManager.js");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_info_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/info.svg */ "./src/images/info.svg");
/* harmony import */ var _images_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/star.svg */ "./src/images/star.svg");
/* harmony import */ var _images_star_gold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/star-gold.svg */ "./src/images/star-gold.svg");
/* harmony import */ var _images_circle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/circle.svg */ "./src/images/circle.svg");
/* harmony import */ var _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/check-circle.svg */ "./src/images/check-circle.svg");
/* harmony import */ var _images_plus_circle_black_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/plus-circle-black.svg */ "./src/images/plus-circle-black.svg");
// Import methods



// Import variables









// Declarations
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
        let selectedProject = (0,_data_projectManager__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectId);
        if(selectedProject !== null)
        {
            tableCaption.textContent = selectedProject.name;
        } else {
            tableCaption.textContent = "Unknown Project";
        }
    }

    let appendTodo = document.createElement("div");
    appendTodo.classList.add("append-todo");

    let addImage = new Image();
    addImage.src = _images_plus_circle_black_svg__WEBPACK_IMPORTED_MODULE_9__;
    addImage.setAttribute("id", "add-todo");
    clickItems.push(addImage);

    appendTodo.appendChild(addImage);
    tableCaption.appendChild(appendTodo);
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

    (0,_data_todoManager__WEBPACK_IMPORTED_MODULE_0__.getToDos)().forEach((todo) => {
        appendToDo(type, tableBody, todo);             
    });

    tableItem.appendChild(tableBody);

    contentBox.appendChild(tableItem);
};

const appendToDo = (type, tableBody, todo) =>
{
    let currentDate = new Date();

    if(type === "home")
    {
        _printRowLayout(tableBody, todo);   
    }

    if(type === "today")
    {
        if(todo.getDueDate().getFullYear() === currentDate.getFullYear() &&
        todo.getDueDate().getMonth() === currentDate.getMonth() &&
        +todo.getDueDate().getDate() === +currentDate.getDate())
        {
            _printRowLayout(tableBody, todo);  
        } 
    }

    if(type === "week")
    {
        if(todo.getDueDate().getFullYear() === currentDate.getFullYear() &&
        todo.getDueDate().getMonth() === currentDate.getMonth() &&
        todo.getDueDate().getWeek() === currentDate.getWeek())
        {
            _printRowLayout(tableBody, todo);  
        }   
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
        let projId = +(type.split("-")[1]);
        if((+todo.projectId) === projId)
        {
            _printRowLayout(tableBody, todo);
        }
    }
}

const _printRowLayout = (tableBody, todo) => {
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("data-id", todo.id);

    let tableCell = document.createElement("td");
    tableCell.classList.add("nameColumn");
    tableCell.textContent = todo.title;
    tableRow.appendChild(tableCell);

    tableCell = document.createElement("td");
    tableCell.classList.add("dateColumn");
    let day = todo.getDueDate().getDate()+"";
    if(day.length === 1)
    {
        day = "0" + day;
    }
    tableCell.textContent = `${day}/${(1+todo.getDueDate().getMonth())}/${todo.getDueDate().getFullYear()}`;
    tableRow.appendChild(tableCell);

    tableCell = document.createElement("td");
    tableCell.classList.add("priorityColumn");
    let priorityDiv = document.createElement("div");
    priorityDiv.classList.add(todo.priority);
    priorityDiv.textContent = todo.priority;
    tableCell.appendChild(priorityDiv);
    tableRow.appendChild(tableCell);

    tableCell = document.createElement("td");

    let editImage = new Image();
    editImage.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
    editImage.setAttribute("id", "edit-todo-" + todo.id);
    clickItems.push(editImage);
    tableCell.appendChild(editImage);

    let deleteImage = new Image();
    deleteImage.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
    deleteImage.setAttribute("id", "delete-todo-" + todo.id);
    clickItems.push(deleteImage);
    tableCell.appendChild(deleteImage);

    let infoImage = new Image();
    infoImage.src = _images_info_svg__WEBPACK_IMPORTED_MODULE_4__;
    infoImage.setAttribute("id", "info-todo-" + todo.id);
    clickItems.push(infoImage);
    tableCell.appendChild(infoImage);

    let circleImage = new Image();
    if(todo.completed)
    {
        circleImage.src = _images_check_circle_svg__WEBPACK_IMPORTED_MODULE_8__;
        circleImage.setAttribute("data-status", "check");
    } else {
        circleImage.src = _images_circle_svg__WEBPACK_IMPORTED_MODULE_7__;
        circleImage.setAttribute("data-status", "none");
    }
    circleImage.setAttribute("id", "check-todo-" + todo.id);
    clickItems.push(circleImage);
    hoverItems.push(circleImage);
    tableCell.appendChild(circleImage);

    let starImage = new Image();
    if(todo.favorite)
    {
        starImage.src = _images_star_gold_svg__WEBPACK_IMPORTED_MODULE_6__;
        starImage.setAttribute("data-status", "check");
    } else {
        starImage.src = _images_star_svg__WEBPACK_IMPORTED_MODULE_5__;
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



/***/ }),

/***/ "./src/images/check-circle-black.svg":
/*!*******************************************!*\
  !*** ./src/images/check-circle-black.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf70c90a080c6ff1b87c.svg";

/***/ }),

/***/ "./src/images/check-circle.svg":
/*!*************************************!*\
  !*** ./src/images/check-circle.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "106a53153ca90a31b797.svg";

/***/ }),

/***/ "./src/images/circle.svg":
/*!*******************************!*\
  !*** ./src/images/circle.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21a41ac72ef730b17e80.svg";

/***/ }),

/***/ "./src/images/delete-white.svg":
/*!*************************************!*\
  !*** ./src/images/delete-white.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b14f820499e2777e8f74.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "63b2215180e59191412b.svg";

/***/ }),

/***/ "./src/images/edit-white.svg":
/*!***********************************!*\
  !*** ./src/images/edit-white.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d27e006f5cde26d740ee.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "93e999078e2936aee7e6.svg";

/***/ }),

/***/ "./src/images/info.svg":
/*!*****************************!*\
  !*** ./src/images/info.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32c47fcc563f5a723454.svg";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "09d7f08a9f31ebd88842.svg";

/***/ }),

/***/ "./src/images/plus-circle-black.svg":
/*!******************************************!*\
  !*** ./src/images/plus-circle-black.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c06f4bd82a11376c673.svg";

/***/ }),

/***/ "./src/images/star-gold.svg":
/*!**********************************!*\
  !*** ./src/images/star-gold.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf1b47275fe1c85c8886.svg";

/***/ }),

/***/ "./src/images/star.svg":
/*!*****************************!*\
  !*** ./src/images/star.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc63c50028b82cd65bcd.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/layoutManager */ "./src/scripts/layoutManager.js");
/* harmony import */ var _scripts_data_dataManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/data/dataManager */ "./src/scripts/data/dataManager.js");
/* harmony import */ var _scripts_dateHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/dateHelper */ "./src/scripts/dateHelper.js");
/* harmony import */ var _scripts_dateHelper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_dateHelper__WEBPACK_IMPORTED_MODULE_3__);





// Load data
(0,_scripts_data_dataManager__WEBPACK_IMPORTED_MODULE_2__.populateData)();

// Load basic layout
(0,_scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__.printBasicLayout)();
(0,_scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__.appendContent)("linkHome");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSwwQkFBMEIscURBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpRUFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxhQUFhLEdBQUcsYUFBYSxHQUFHLGFBQWE7QUFDcEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksaUVBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYSxHQUFHLGFBQWEsR0FBRyxhQUFhO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sMEJBQTBCLGdFQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hzQ0E7QUFDOEM7QUFDSzs7QUFFbkQ7QUFDMEM7QUFDSTtBQUNKO0FBQ0E7QUFDUztBQUNMO0FBQ1U7QUFDRjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdFQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiwwREFBTztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSwyREFBUTtBQUNaO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSSxHQUFHLGlDQUFpQyxHQUFHLGdDQUFnQztBQUMxRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQiw2Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsK0NBQVU7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDZDQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQWM7QUFDeEM7QUFDQSxNQUFNO0FBQ04sMEJBQTBCLCtDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVk7QUFDcEM7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLDZDQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjRCO0FBQzZDO0FBQ2Y7QUFDNUI7O0FBRTlCO0FBQ0EsdUVBQVk7O0FBRVo7QUFDQSx3RUFBZ0I7QUFDaEIscUVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzIzOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kYXRhL2RhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0YS9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0YS9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvdG9kb01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kYXRlSGVscGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvbGF5b3V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgYXBwZW5kTmV3UHJvamVjdCwgYXBwZW5kUHJvamVjdEZyb21EYXRhIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCB7IGFwcGVuZE5ld1RvRG8sIGFwcGVuZFRvRG9Gcm9tRGF0YSB9IGZyb20gXCIuL3RvZG9NYW5hZ2VyXCI7XG5cbmxldCB1bmlxdWVUb0RvSUQgPSAwO1xubGV0IHVuaXF1ZVByb2plY3RJZCA9IDA7XG5cbmNvbnN0IGdldE5leHRUb2RvSUQgPSAoKSA9PiArK3VuaXF1ZVRvRG9JRDtcblxuY29uc3QgZ2V0TmV4dFByb2plY3RJZCA9ICgpID0+ICsrdW5pcXVlUHJvamVjdElkO1xuXG5jb25zdCBwb3B1bGF0ZURhdGEgPSAoKSA9PiB7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kby1pZC1jb2xsZWN0aW9uXCIpICYmIFxuICAgICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3QtaWQtY29sbGVjdGlvblwiKSlcbiAgICB7XG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvLWlkLWNvbGxlY3Rpb25cIiwgXCJcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdC1pZC1jb2xsZWN0aW9uXCIsIFwiXCIpO1xuXG4gICAgICAgIGFwcGVuZFByb2plY3QoYXBwZW5kTmV3UHJvamVjdChcIkV4YW1wbGUgUHJvamVjdCAxXCIpKTtcbiAgICAgICAgYXBwZW5kUHJvamVjdChhcHBlbmROZXdQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0IDJcIikpO1xuXG4gICAgICAgIGFwcGVuZFRvRG8oYXBwZW5kTmV3VG9EbyhcIkV4YW1wbGUgVG9EbyAxXCIsIFwiRmluaXNoIHdvcmtpbmcgb24gbXkgVG9EbyBwcm9qZWN0IHNvIGkgY2FuIGdvIG9uIHdpdGggdGhlIHJlc3Qgb2YgdGhlIHByb2plY3RzIGluIFRoZSBPZGluIFByb2plY3QgY3VycmljdWx1bS5cIiwgXCIxMy8xMC8yMDIzXCIsIFwibG93XCIsIC0xKSk7XG4gICAgICAgIGFwcGVuZFRvRG8oYXBwZW5kTmV3VG9EbyhcIkV4YW1wbGUgVG9EbyAyXCIsIFwiRmluaXNoIHdvcmtpbmcgb24gbXkgVG9EbyBwcm9qZWN0IHNvIGkgY2FuIGdvIG9uIHdpdGggdGhlIHJlc3Qgb2YgdGhlIHByb2plY3RzIGluIFRoZSBPZGluIFByb2plY3QgY3VycmljdWx1bS5cIiwgXCIxNS8xMC8yMDIzXCIsIFwiaGlnaFwiLCAtMSkpO1xuICAgICAgICBhcHBlbmRUb0RvKGFwcGVuZE5ld1RvRG8oXCJFeGFtcGxlIFRvRG8gM1wiLCBcIkZpbmlzaCB3b3JraW5nIG9uIG15IFRvRG8gcHJvamVjdCBzbyBpIGNhbiBnbyBvbiB3aXRoIHRoZSByZXN0IG9mIHRoZSBwcm9qZWN0cyBpbiBUaGUgT2RpbiBQcm9qZWN0IGN1cnJpY3VsdW0uXCIsIFwiMjIvMTAvMjAyM1wiLCBcImxvd1wiLCAtMSkpO1xuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaWRTcGxpdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kby1pZC1jb2xsZWN0aW9uXCIpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgbGV0IHByb2plY3RTcGxpdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdC1pZC1jb2xsZWN0aW9uXCIpLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkU3BsaXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGlkICE9PSAnJyAmJiBpZC5sZW5ndGggPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0b2RvSWQgPSAraWQ7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG9Eb0Zyb21EYXRhKHRvZG9JZCwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG8tJHt0b2RvSWR9LXRpdGxlYCksXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2RvLSR7dG9kb0lkfS1kZXNjcmlwdGlvbmApLCBcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG8tJHt0b2RvSWR9LWR1ZURhdGVgKSwgXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2RvLSR7dG9kb0lkfS1wcmlvcml0eWApLCBcbiAgICAgICAgICAgICAgICAgICAgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2RvLSR7dG9kb0lkfS1mYXZvcml0ZWApID09ICd0cnVlJyksIFxuICAgICAgICAgICAgICAgICAgICAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRvZG8tJHt0b2RvSWR9LWNvbXBsZXRlZGApID09ICd0cnVlJyksXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0b2RvLSR7dG9kb0lkfS1wcm9qZWN0YCkpO1xuXG4gICAgICAgICAgICAgICAgaWYodG9kb0lkID4gdW5pcXVlVG9Eb0lEKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlVG9Eb0lEID0gdG9kb0lkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgaWQgb2YgcHJvamVjdFNwbGl0KVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpZCAhPT0gJycgJiYgaWQubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdElkID0gK2lkO1xuICAgICAgICAgICAgICAgIGFwcGVuZFByb2plY3RGcm9tRGF0YShwcm9qZWN0SWQsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0LSR7cHJvamVjdElkfS1uYW1lYCkpO1xuXG4gICAgICAgICAgICAgICAgaWYocHJvamVjdElkID4gdW5pcXVlUHJvamVjdElkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlUHJvamVjdElkID0gcHJvamVjdElkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgYXBwZW5kUHJvamVjdCA9IChwcm9qZWN0KSA9Plxue1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3QtaWQtY29sbGVjdGlvblwiKS5pbmNsdWRlcyhwcm9qZWN0LmlkICsgXCIsXCIpKVxuICAgIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0LWlkLWNvbGxlY3Rpb25cIiwgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdC1pZC1jb2xsZWN0aW9uXCIpICsgcHJvamVjdC5pZCArIFwiLFwiKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0LSR7cHJvamVjdC5pZH0tbmFtZWAsIHByb2plY3QubmFtZSk7XG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+XG57XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0LWlkLWNvbGxlY3Rpb25cIikuaW5jbHVkZXMocHJvamVjdC5pZCArIFwiLFwiKSlcbiAgICB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0LSR7cHJvamVjdC5pZH0tbmFtZWAsIHByb2plY3QubmFtZSk7XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+XG57XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0LWlkLWNvbGxlY3Rpb25cIikuaW5jbHVkZXMocHJvamVjdC5pZCArIFwiLFwiKSlcbiAgICB7XG4gICAgICAgIGxldCBuZXdDb2xsZWN0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0LWlkLWNvbGxlY3Rpb25cIikucmVwbGFjZSgocHJvamVjdC5pZCArICcsJyksICcnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0LWlkLWNvbGxlY3Rpb25cIiwgbmV3Q29sbGVjdGlvbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBwcm9qZWN0LSR7cHJvamVjdC5pZH0tbmFtZWApO1xuICAgIH1cbn1cblxuY29uc3QgYXBwZW5kVG9EbyA9ICh0b2RvKSA9PiB7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kby1pZC1jb2xsZWN0aW9uXCIpLmluY2x1ZGVzKHRvZG8uaWQgKyBcIixcIikpXG4gICAge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG8taWQtY29sbGVjdGlvblwiLCAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvLWlkLWNvbGxlY3Rpb25cIikgKyB0b2RvLmlkICsgXCIsXCIpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG8tJHt0b2RvLmlkfS10aXRsZWAsIHRvZG8udGl0bGUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kby0ke3RvZG8uaWR9LWRlc2NyaXB0aW9uYCwgdG9kby5kZXNjcmlwdGlvbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvLSR7dG9kby5pZH0tcHJpb3JpdHlgLCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1mYXZvcml0ZWAsIHRvZG8uZmF2b3JpdGUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kby0ke3RvZG8uaWR9LWNvbXBsZXRlZGAsIHRvZG8uY29tcGxldGVkKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1kdWVEYXRlYCwgdG9kby5kdWVEYXRlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1wcm9qZWN0YCwgdG9kby5wcm9qZWN0SWQpO1xuICAgIH1cbn1cblxuY29uc3QgdXBkYXRlVG9EbyA9ICh0b2RvKSA9PiB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvLWlkLWNvbGxlY3Rpb25cIikuaW5jbHVkZXModG9kby5pZCArIFwiLFwiKSlcbiAgICB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvLSR7dG9kby5pZH0tdGl0bGVgLCB0b2RvLnRpdGxlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1kZXNjcmlwdGlvbmAsIHRvZG8uZGVzY3JpcHRpb24pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kby0ke3RvZG8uaWR9LXByaW9yaXR5YCwgdG9kby5wcmlvcml0eSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvLSR7dG9kby5pZH0tZmF2b3JpdGVgLCB0b2RvLmZhdm9yaXRlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1jb21wbGV0ZWRgLCB0b2RvLmNvbXBsZXRlZCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvLSR7dG9kby5pZH0tZHVlRGF0ZWAsIHRvZG8uZHVlRGF0ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvLSR7dG9kby5pZH0tcHJvamVjdGAsIHRvZG8ucHJvamVjdElkKTtcbiAgICB9XG59XG5cbmNvbnN0IHJlbW92ZVRvRG8gPSAodG9kbykgPT4ge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kby1pZC1jb2xsZWN0aW9uXCIpLmluY2x1ZGVzKHRvZG8uaWQgKyBcIixcIikpXG4gICAge1xuICAgICAgICBsZXQgbmV3Q29sbGVjdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kby1pZC1jb2xsZWN0aW9uXCIpLnJlcGxhY2UoKHRvZG8uaWQgKyBcIixcIiksICcnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvLWlkLWNvbGxlY3Rpb25cIiwgbmV3Q29sbGVjdGlvbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGB0b2RvLSR7dG9kby5pZH0tdGl0bGVgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1kZXNjcmlwdGlvbmApO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdG9kby0ke3RvZG8uaWR9LXByaW9yaXR5YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGB0b2RvLSR7dG9kby5pZH0tZmF2b3JpdGVgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1jb21wbGV0ZWRgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYHRvZG8tJHt0b2RvLmlkfS1kdWVEYXRlYCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGB0b2RvLSR7dG9kby5pZH0tcHJvamVjdGApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgZ2V0TmV4dFByb2plY3RJZCwgZ2V0TmV4dFRvZG9JRCwgcG9wdWxhdGVEYXRhLCBhcHBlbmRQcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBcbiAgICBhcHBlbmRUb0RvLCB1cGRhdGVUb0RvLCByZW1vdmVUb0RvIH0iLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSlcbiAgICB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3QgfSIsImltcG9ydCB7IGdldE5leHRQcm9qZWN0SWQgfSBmcm9tICcuL2RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBfcHJvamVjdHMgPSBbXTtcblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBfcHJvamVjdHM7XG5cbmNvbnN0IGFwcGVuZE5ld1Byb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGxldCBwcm9qID0gbmV3IFByb2plY3QoZ2V0TmV4dFByb2plY3RJZCgpLCBuYW1lKTtcbiAgICBfcHJvamVjdHMucHVzaChwcm9qKTtcbiAgICByZXR1cm4gcHJvajtcbn1cblxuY29uc3QgYXBwZW5kUHJvamVjdEZyb21EYXRhID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgbGV0IHByb2ogPSBuZXcgUHJvamVjdChpZCwgbmFtZSk7XG4gICAgX3Byb2plY3RzLnB1c2gocHJvaik7XG4gICAgcmV0dXJuIHByb2o7XG59XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICBsZXQgcHJvamVjdEluZGV4ID0gX3Byb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gKHByb2plY3QuaWQgPT09IGlkKTtcbiAgICB9KTtcblxuICAgIGlmKHByb2plY3RJbmRleCA+IC0xKVxuICAgIHtcbiAgICAgICAgX3Byb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIH1cblxufVxuXG5jb25zdCBnZXRQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgbGV0IHByb2pJbmRleCA9IF9wcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChwcm9qZWN0LmlkID09PSBpZCk7XG4gICAgfSk7XG5cbiAgICBpZihwcm9qSW5kZXggPiAtMSlcbiAgICB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdHNbcHJvakluZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gbm9uZSBmb3VuZFxuICAgIH1cblxufVxuXG5leHBvcnQgeyBnZXRQcm9qZWN0cywgYXBwZW5kTmV3UHJvamVjdCwgZ2V0UHJvamVjdCwgZGVsZXRlUHJvamVjdCwgYXBwZW5kUHJvamVjdEZyb21EYXRhIH0iLCJjbGFzcyBUb0RvIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmF2b3JpdGUsIGNvbXBsZXRlZCwgcHJvamVjdElkKVxuICAgIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmZhdm9yaXRlID0gZmF2b3JpdGU7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICBsZXQgZGF0ZVNwbGl0ID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJyk7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlU3BsaXRbMF07XG4gICAgICAgIGlmKGRheS5sZW5ndGggPT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgZGF5ID0gXCIwXCIgKyBkYXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGAke2RhdGVTcGxpdFsyXX0tJHtkYXRlU3BsaXRbMV19LSR7ZGF5fVQxMjowMDowMGApO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVG9EbyB9IiwiaW1wb3J0IHsgZ2V0TmV4dFRvZG9JRCB9IGZyb20gXCIuL2RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCBfdG9Eb3MgPSBbXTtcblxuY29uc3QgZ2V0VG9Eb3MgPSAoKSA9PiBfdG9Eb3M7XG5cbmNvbnN0IGFwcGVuZE5ld1RvRG8gPSAobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9EbyhnZXROZXh0VG9kb0lEKCksIG5hbWUsIGRlc2NyaXB0aW9uLCBcbiAgICBkdWVEYXRlLCBwcmlvcml0eSwgZmFsc2UsIGZhbHNlLCBwcm9qZWN0KTtcbiAgICBfdG9Eb3MucHVzaCh0b2RvKTtcblxuICAgIHJldHVybiB0b2RvO1xufVxuXG5jb25zdCBhcHBlbmRUb0RvRnJvbURhdGEgPSAoaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmF2b3JpdGUsIGNvbXBsZXRlZCwgcHJvamVjdCkgPT4ge1xuICAgIGxldCB0b2RvID0gbmV3IFRvRG8oaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBcbiAgICBkdWVEYXRlLCBwcmlvcml0eSwgZmF2b3JpdGUsIGNvbXBsZXRlZCwgcHJvamVjdCk7XG4gICAgX3RvRG9zLnB1c2godG9kbyk7XG5cbiAgICByZXR1cm4gdG9kbztcbn1cblxuY29uc3QgZGVsZXRlVG9EbyA9IChpZCkgPT4ge1xuICAgIGxldCB0b2RvSW5kZXggPSBfdG9Eb3MuZmluZEluZGV4KCh0b2RvKSA9PiB7XG4gICAgICAgIHJldHVybiAodG9kby5pZCA9PT0gaWQpO1xuICAgIH0pO1xuXG4gICAgaWYodG9kb0luZGV4ID4gLTEpXG4gICAge1xuICAgICAgICBfdG9Eb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gICAgfVxuXG59XG5cbmNvbnN0IGdldFRvRG8gPSAoaWQpID0+IHtcbiAgICBsZXQgdG9kb0luZGV4ID0gX3RvRG9zLmZpbmRJbmRleCgodG9kbykgPT4ge1xuICAgICAgICByZXR1cm4gKHRvZG8uaWQgPT09IGlkKTtcbiAgICB9KTtcblxuICAgIGlmKHRvZG9JbmRleCA+IC0xKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIF90b0Rvc1t0b2RvSW5kZXhdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBub25lIGZvdW5kXG4gICAgfVxuXG59XG5cbmNvbnN0IGFsdGVybmF0ZVRvRG9Db21wbGV0ZWQgPSAoaWQpID0+IHtcbiAgICBsZXQgY3VycmVudFRvZG8gPSBnZXRUb0RvKGlkKTtcbiAgICBpZihjdXJyZW50VG9kbyAhPSBudWxsKVxuICAgIHtcbiAgICAgICAgY3VycmVudFRvZG8uY29tcGxldGVkID0gIWN1cnJlbnRUb2RvLmNvbXBsZXRlZDtcbiAgICB9XG59XG5cbmNvbnN0IGFsdGVybmF0ZVRvRG9GYXZvcml0ZSA9IChpZCkgPT4ge1xuICAgIGxldCBjdXJyZW50VG9kbyA9IGdldFRvRG8oaWQpO1xuICAgIGlmKGN1cnJlbnRUb2RvICE9IG51bGwpXG4gICAge1xuICAgICAgICBjdXJyZW50VG9kby5mYXZvcml0ZSA9ICFjdXJyZW50VG9kby5mYXZvcml0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGdldFRvRG8sIGdldFRvRG9zLCBhcHBlbmROZXdUb0RvLCBhbHRlcm5hdGVUb0RvQ29tcGxldGVkLCBhbHRlcm5hdGVUb0RvRmF2b3JpdGUsIGRlbGV0ZVRvRG8sIGFwcGVuZFRvRG9Gcm9tRGF0YSB9IiwiLyoqXG4gKiBSZXR1cm5zIHRoZSB3ZWVrIG51bWJlciBmb3IgdGhpcyBkYXRlLiAgZG93T2Zmc2V0IGlzIHRoZSBkYXkgb2Ygd2VlayB0aGUgd2Vla1xuICogXCJzdGFydHNcIiBvbiBmb3IgeW91ciBsb2NhbGUgLSBpdCBjYW4gYmUgZnJvbSAwIHRvIDYuIElmIGRvd09mZnNldCBpcyAxIChNb25kYXkpLFxuICogdGhlIHdlZWsgcmV0dXJuZWQgaXMgdGhlIElTTyA4NjAxIHdlZWsgbnVtYmVyLlxuICogQHBhcmFtIGludCBkb3dPZmZzZXRcbiAqIEByZXR1cm4gaW50XG4gKi9cbkRhdGUucHJvdG90eXBlLmdldFdlZWsgPSBmdW5jdGlvbiAoZG93T2Zmc2V0KSB7XG4gICAgLypnZXRXZWVrKCkgd2FzIGRldmVsb3BlZCBieSBOaWNrIEJhaWNvaWFudSBhdCBNZWFuRnJlZVBhdGg6IGh0dHA6Ly93d3cubWVhbmZyZWVwYXRoLmNvbSAqL1xuICAgIFxuICAgICAgICBkb3dPZmZzZXQgPSB0eXBlb2YoZG93T2Zmc2V0KSA9PSAnbnVtYmVyJyA/IGRvd09mZnNldCA6IDA7IC8vZGVmYXVsdCBkb3dPZmZzZXQgdG8gemVyb1xuICAgICAgICB2YXIgbmV3WWVhciA9IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwwLDEpO1xuICAgICAgICB2YXIgZGF5ID0gbmV3WWVhci5nZXREYXkoKSAtIGRvd09mZnNldDsgLy90aGUgZGF5IG9mIHdlZWsgdGhlIHllYXIgYmVnaW5zIG9uXG4gICAgICAgIGRheSA9IChkYXkgPj0gMCA/IGRheSA6IGRheSArIDcpO1xuICAgICAgICB2YXIgZGF5bnVtID0gTWF0aC5mbG9vcigodGhpcy5nZXRUaW1lKCkgLSBuZXdZZWFyLmdldFRpbWUoKSAtIFxuICAgICAgICAodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLW5ld1llYXIuZ2V0VGltZXpvbmVPZmZzZXQoKSkqNjAwMDApLzg2NDAwMDAwKSArIDE7XG4gICAgICAgIHZhciB3ZWVrbnVtO1xuICAgICAgICAvL2lmIHRoZSB5ZWFyIHN0YXJ0cyBiZWZvcmUgdGhlIG1pZGRsZSBvZiBhIHdlZWtcbiAgICAgICAgaWYoZGF5IDwgNCkge1xuICAgICAgICAgICAgd2Vla251bSA9IE1hdGguZmxvb3IoKGRheW51bStkYXktMSkvNykgKyAxO1xuICAgICAgICAgICAgaWYod2Vla251bSA+IDUyKSB7XG4gICAgICAgICAgICAgICAgblllYXIgPSBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCkgKyAxLDAsMSk7XG4gICAgICAgICAgICAgICAgbmRheSA9IG5ZZWFyLmdldERheSgpIC0gZG93T2Zmc2V0O1xuICAgICAgICAgICAgICAgIG5kYXkgPSBuZGF5ID49IDAgPyBuZGF5IDogbmRheSArIDc7XG4gICAgICAgICAgICAgICAgLyppZiB0aGUgbmV4dCB5ZWFyIHN0YXJ0cyBiZWZvcmUgdGhlIG1pZGRsZSBvZlxuICAgICAgICAgICAgICAgICAgdGhlIHdlZWssIGl0IGlzIHdlZWsgIzEgb2YgdGhhdCB5ZWFyKi9cbiAgICAgICAgICAgICAgICB3ZWVrbnVtID0gbmRheSA8IDQgPyAxIDogNTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3ZWVrbnVtID0gTWF0aC5mbG9vcigoZGF5bnVtK2RheS0xKS83KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2Vla251bTtcbiAgICB9OyIsIi8vIEltcG9ydCBtZXRob2RzXG5pbXBvcnQgeyBwcmludFRvRG9UYWJsZSwgYWRkTGlzdGVuZXJzLCBhcHBlbmRUb0RvIGFzIGxvYWRUb0RvIH0gZnJvbSAnLi90b2RvTGF5b3V0JztcbmltcG9ydCB7IGdldFByb2plY3RzLCBkZWxldGVQcm9qZWN0LCBhcHBlbmROZXdQcm9qZWN0LCBnZXRQcm9qZWN0IH0gZnJvbSAnLi9kYXRhL3Byb2plY3RNYW5hZ2VyJztcbmltcG9ydCB7IGFwcGVuZE5ld1RvRG8sIGFsdGVybmF0ZVRvRG9Db21wbGV0ZWQsIGFsdGVybmF0ZVRvRG9GYXZvcml0ZSwgZGVsZXRlVG9EbywgZ2V0VG9EbyB9IGZyb20gJy4vZGF0YS90b2RvTWFuYWdlcic7XG5pbXBvcnQgeyB1cGRhdGVUb0RvLCByZW1vdmVUb0RvLCBhcHBlbmRUb0RvLCB1cGRhdGVQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBhcHBlbmRQcm9qZWN0IH0gZnJvbSAnLi9kYXRhL2RhdGFNYW5hZ2VyJztcblxuLy8gSW1wb3J0IGltYWdlc1xuaW1wb3J0IE1lbnVJbWFnZSBmcm9tICcuLi9pbWFnZXMvbWVudS5zdmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gXCIuLi9pbWFnZXMvZWRpdC5zdmdcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCIuLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IEVkaXRJY29uV2hpdGUgZnJvbSBcIi4uL2ltYWdlcy9lZGl0LXdoaXRlLnN2Z1wiO1xuaW1wb3J0IERlbGV0ZUljb25XaGl0ZSBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS13aGl0ZS5zdmdcIjtcbmltcG9ydCBTdGFySWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3N0YXIuc3ZnXCI7XG5pbXBvcnQgU3RhckdvbGRJY29uIGZyb20gXCIuLi9pbWFnZXMvc3Rhci1nb2xkLnN2Z1wiO1xuaW1wb3J0IENpcmNsZUljb24gZnJvbSBcIi4uL2ltYWdlcy9jaXJjbGUuc3ZnXCI7XG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gXCIuLi9pbWFnZXMvY2hlY2stY2lyY2xlLWJsYWNrLnN2Z1wiO1xuaW1wb3J0IENoZWNrR3JlZW5JY29uIGZyb20gXCIuLi9pbWFnZXMvY2hlY2stY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIi4uL2ltYWdlcy9wbHVzLWNpcmNsZS1ibGFjay5zdmdcIjtcblxuLy8gRGVjbGFyZSB2YXJpYWJsZXNcbmxldCBzaWRlYmFyT2JqZWN0ID0gbnVsbDtcbmxldCBzaWRlYmFyQmFja2dyb3VuZCA9IG51bGw7XG5sZXQgY3VycmVudGx5U2VsZWN0ZWQgPSBcImxpbmtIb21lXCI7XG5sZXQgZGlhbG9nT2JqZWN0ID0gbnVsbDtcblxuY29uc3QgcHJpbnRCYXNpY0xheW91dCA9ICgpID0+IHtcbiAgICBsZXQgaGVhZGVyTWVudUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWltYWdlLWhvbGRlclwiKTtcbiAgICBoZWFkZXJNZW51SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuXG4gICAgbGV0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1lbnVJbWFnZS5zcmMgPSBNZW51SW1hZ2U7XG4gICAgaGVhZGVyTWVudUltYWdlLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG59XG5cbmNvbnN0IGFwcGVuZENvbnRlbnQgPSAoY29udGVudCkgPT4ge1xuICAgIGxldCBjb250ZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgbGV0IHByZXZpb3VzQ29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXG4gICAgaWYocHJldmlvdXNDb250ZW50Qm94ICE9PSBudWxsKVxuICAgIHtcbiAgICAgICAgcHJldmlvdXNDb250ZW50Qm94LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGxldCBtYWluQ29udGVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnRCb3guY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgICBcbiAgICAvLyBoYW5kbGUgZWFjaCBsYXlvdXRcbiAgICBwcmludFRvRG9UYWJsZShtYWluQ29udGVudEJveCwgX2dldExpbmtUeXBlKGNvbnRlbnQpKTtcbiAgICBhZGRMaXN0ZW5lcnMoX2NsaWNrSGFuZGxlciwgX21vdXNlSW5IYW5kbGVyLCBfbW91c2VPdXRIYW5kbGVyKTtcbiAgICBcbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKG1haW5Db250ZW50Qm94KTtcblxufVxuXG5jb25zdCBfZ2V0TGlua1R5cGUgPSAoY29udGVudCkgPT4ge1xuICAgIGlmKGNvbnRlbnQgPT09IFwibGlua0hvbWVcIilcbiAgICB7XG4gICAgICAgIHJldHVybiBcImhvbWVcIjtcbiAgICB9XG5cbiAgICBpZihjb250ZW50ID09PSBcImxpbmtXZWVrXCIpXG4gICAge1xuICAgICAgICByZXR1cm4gXCJ3ZWVrXCI7XG4gICAgfVxuXG4gICAgaWYoY29udGVudCA9PT0gXCJsaW5rVG9kYXlcIilcbiAgICB7XG4gICAgICAgIHJldHVybiBcInRvZGF5XCI7XG4gICAgfVxuXG4gICAgaWYoY29udGVudCA9PT0gXCJsaW5rRmF2b3JpdGVzXCIpXG4gICAge1xuICAgICAgICByZXR1cm4gXCJmYXZvcml0ZVwiO1xuICAgIH1cblxuICAgIGlmKGNvbnRlbnQgPT09IFwibGlua0NvbXBsZXRlZFwiKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFwiY29tcGxldGVkXCI7XG4gICAgfVxuXG4gICAgaWYoY29udGVudC5zdGFydHNXaXRoKFwibGlua1Byb2plY3QtXCIpKVxuICAgIHtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IGNvbnRlbnQuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgICByZXR1cm4gXCJwcm9qZWN0LVwiICsgcHJvamVjdElkO1xuICAgIH1cblxuICAgIHJldHVybiBcInVua25vd25cIjtcbn1cblxuY29uc3QgX21vdXNlSW5IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gaWQgc2VsZWN0b3JzXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJjaGVjay10b2RvLVwiKSlcbiAgICB7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiKSAhPT0gbnVsbCAmJiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIikgIT09IFwiY2hlY2tcIilcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IENoZWNrQ2lyY2xlSWNvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuaWQuc3RhcnRzV2l0aChcImZhdi10b2RvLVwiKSlcbiAgICB7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiKSAhPT0gbnVsbCAmJiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIikgIT09IFwiY2hlY2tcIilcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IFN0YXJHb2xkSWNvbjtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jb25zdCBfbW91c2VPdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gaWQgc2VsZWN0b3JzXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJjaGVjay10b2RvLVwiKSlcbiAgICB7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiKSAhPT0gbnVsbCAmJiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIikgIT09IFwiY2hlY2tcIilcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IENpcmNsZUljb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihldmVudC50YXJnZXQuaWQuc3RhcnRzV2l0aChcImZhdi10b2RvLVwiKSlcbiAgICB7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiKSAhPT0gbnVsbCAmJiBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIikgIT09IFwiY2hlY2tcIilcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IFN0YXJJY29uO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNvbnN0IF9jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAvLyBpZCBzZWxlY3RvcnNcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwibGlua0hvbWVcIiB8fCBldmVudC50YXJnZXQuaWQgPT09IFwibGlua1RvZGF5XCIgfHxcbiAgICBldmVudC50YXJnZXQuaWQgPT09IFwibGlua1dlZWtcIiB8fCBldmVudC50YXJnZXQuaWQgPT0gXCJsaW5rRmF2b3JpdGVzXCIgfHxcbiAgICBldmVudC50YXJnZXQuaWQgPT0gXCJsaW5rQ29tcGxldGVkXCIpXG4gICAge1xuICAgICAgICBfbWVudVNlbGVjdGVkKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJsaW5rUHJvamVjdC1cIikpXG4gICAge1xuICAgICAgICBfbWVudVNlbGVjdGVkKGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJjaGVjay10b2RvLVwiKSlcbiAgICB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgdG9kb0lEID0gKyhldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzJdKTtcbiAgICAgICAgYWx0ZXJuYXRlVG9Eb0NvbXBsZXRlZCh0b2RvSUQpO1xuICAgICAgICBpZihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIikgIT09IG51bGwgJiYgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIpICE9PSBcImNoZWNrXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiLCBcImNoZWNrXCIpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IENoZWNrR3JlZW5JY29uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zcmMgPSBDaXJjbGVJY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVG9EbyhnZXRUb0RvKHRvZG9JRCkpO1xuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5pZC5zdGFydHNXaXRoKFwiZmF2LXRvZG8tXCIpKVxuICAgIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0b2RvSUQgPSArKGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi1cIilbMl0pO1xuICAgICAgICBhbHRlcm5hdGVUb0RvRmF2b3JpdGUodG9kb0lEKTtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIpICE9PSBudWxsICYmIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXR1c1wiKSAhPT0gXCJjaGVja1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJjaGVja1wiKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zcmMgPSBTdGFyR29sZEljb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9IFN0YXJJY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVG9EbyhnZXRUb0RvKHRvZG9JRCkpO1xuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5pZC5zdGFydHNXaXRoKFwiZGVsZXRlLXRvZG8tXCIpKVxuICAgIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0b2RvSUQgPSArKGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi1cIilbMl0pO1xuICAgICAgICBsZXQgcm93Q29tcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7dG9kb0lEfVwiXWApO1xuICAgICAgICBpZihyb3dDb21wb25lbnQgIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvd0NvbXBvbmVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVUb0RvKGdldFRvRG8odG9kb0lEKSk7ICAgICAgICBcbiAgICAgICAgZGVsZXRlVG9Ebyh0b2RvSUQpOyAgICAgICAgXG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJkZWxldGUtcHJvamVjdC1cIikpXG4gICAge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IHByb2plY3RJRCA9ICsoZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKVsyXSk7XG4gICAgICAgIGxldCBwcm9qZWN0Q29tcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RJdGVtW2RhdGEtaWQ9XCIke3Byb2plY3RJRH1cIl1gKTtcbiAgICAgICAgaWYocHJvamVjdENvbXBvbmVudCAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvamVjdENvbXBvbmVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVQcm9qZWN0KGdldFByb2plY3QocHJvamVjdElEKSk7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElEKTtcblxuICAgICAgICBsZXQgcHJvamVjdENhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGluZ1wiKTtcbiAgICAgICAgaWYocHJvamVjdENhcHRpb24gIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2plY3RDYXB0aW9uLnRleHRDb250ZW50ID0gYE15IFByb2plY3RzICgke2dldFByb2plY3RzKCkubGVuZ3RofSlgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImFkZC1wcm9qZWN0XCIgfHwgZXZlbnQudGFyZ2V0LmlkID09PSBcImFkZC10b2RvXCIgfHxcbiAgICBldmVudC50YXJnZXQuaWQuc3RhcnRzV2l0aChcImluZm8tdG9kby1cIikgfHwgZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJlZGl0LXRvZG8tXCIpIHx8XG4gICAgZXZlbnQudGFyZ2V0LmlkLnN0YXJ0c1dpdGgoXCJlZGl0LXByb2plY3QtXCIpKVxuICAgIHtcbiAgICAgICAgX2NyZWF0ZURpYWxvZyhldmVudC50YXJnZXQuaWQpO1xuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJkaWFsb2ctbWFpblwiIHx8IGV2ZW50LnRhcmdldC5pZCA9PT0gXCJ0b2RvLWNhbmNlbFwiIHx8IGV2ZW50LnRhcmdldC5pZCA9PT0gXCJwcm9qZWN0LWNhbmNlbFwiKVxuICAgIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmKGRpYWxvZ09iamVjdCAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgZGlhbG9nT2JqZWN0LmNsb3NlKCk7XG4gICAgICAgICAgICBkaWFsb2dPYmplY3QucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGRpYWxvZ09iamVjdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwidG9kby1zZW5kXCIpXG4gICAge1xuICAgICAgICBpZihkaWFsb2dPYmplY3QgIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IHRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9OYW1lJyk7XG4gICAgICAgICAgICBpZih0b2RvTmFtZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0b2RvTmFtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvcklucHV0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcklucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRvZG9OYW1lLnZhbHVlID09ICcnIHx8IHRvZG9OYW1lLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvcklucHV0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcklucHV0LnRleHRDb250ZW50ID0gXCJQbGVhc2UgaW5wdXQgc29tZXRoaW5nIGluIHRoZSB0aXRsZS5cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9Qcm9qZWN0XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1ByaW9yaXR5XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Qcm9qZWN0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYodG9kb0RhdGUudmFsdWUubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGVTcGxpdCA9IHRvZG9EYXRlLnZhbHVlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGUgPSBgJHtkYXRlU3BsaXRbMl19LyR7ZGF0ZVNwbGl0WzFdfS8ke2RhdGVTcGxpdFswXX1gO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZSA9IGAke2RhdGUuZ2V0RGF0ZSgpfS8keyhkYXRlLmdldE1vbnRoKCkrMSl9LyR7ZGF0ZS5nZXRGdWxsWWVhcigpfWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBhcHBlbmROZXdUb0RvKHRvZG9OYW1lLnZhbHVlLCB0b2RvRGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUsIHRvZG9Qcmlvcml0eS52YWx1ZSwgdG9kb1Byb2plY3QudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUb0RvKG5ld1RvZG8pO1xuICAgICAgICAgICAgICAgICAgICBsb2FkVG9EbyhfZ2V0TGlua1R5cGUoY3VycmVudGx5U2VsZWN0ZWQpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIiksIG5ld1RvZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGRpYWxvZ09iamVjdCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nT2JqZWN0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dPYmplY3QucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ09iamVjdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5pZC5zdGFydHNXaXRoKFwidG9kby1zYXZlLVwiKSlcbiAgICB7XG4gICAgICAgIGxldCB0b2RvSWQgPSArKGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi1cIilbMl0pO1xuICAgICAgICBsZXQgZWRpdFRvZG8gPSBnZXRUb0RvKHRvZG9JZCk7XG4gICAgICAgIGlmKGRpYWxvZ09iamVjdCAhPT0gbnVsbCAmJiBlZGl0VG9kbyAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgdG9kb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb05hbWUnKTtcbiAgICAgICAgICAgIGlmKHRvZG9OYW1lICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRvZG9OYW1lLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9ySW5wdXQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodG9kb05hbWUudmFsdWUgPT0gJycgfHwgdG9kb05hbWUudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9ySW5wdXQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5wdXQudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBpbnB1dCBzb21ldGhpbmcgaW4gdGhlIHRpdGxlLlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodG9kb05hbWUudmFsdWUgIT09IGVkaXRUb2RvLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0VG9kby50aXRsZSA9IHRvZG9OYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtaWQ9XCIke3RvZG9JZH1cIl0gdGQubmFtZUNvbHVtbmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWRpdFZhbHVlICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRWYWx1ZS50ZXh0Q29udGVudCA9IGVkaXRUb2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRGVzY3JpcHRpb25cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodG9kb0Rlc2NyaXB0aW9uLnZhbHVlICE9PSBlZGl0VG9kby5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFRvZG8uZGVzY3JpcHRpb24gPSB0b2RvRGVzY3JpcHRpb24udmFsdWU7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0b2RvUHJpb3JpdHkudmFsdWUgIT09IGVkaXRUb2RvLnByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0VG9kby5wcmlvcml0eSA9IHRvZG9Qcmlvcml0eS52YWx1ZTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgdHJbZGF0YS1pZD1cIiR7dG9kb0lkfVwiXSB0ZC5wcmlvcml0eUNvbHVtbmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWRpdFZhbHVlICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRWYWx1ZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvLmNsYXNzTGlzdC5hZGQoZWRpdFRvZG8ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpby50ZXh0Q29udGVudCA9IGVkaXRUb2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRWYWx1ZS5hcHBlbmRDaGlsZChwcmlvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvUHJvamVjdFwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0b2RvUHJvamVjdC52YWx1ZSAhPT0gZWRpdFRvZG8ucHJvamVjdElkKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0VG9kby5wcm9qZWN0SWQgPSB0b2RvUHJvamVjdC52YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0RhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgZERhdGUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpZih0b2RvRGF0ZS52YWx1ZS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZVNwbGl0ID0gdG9kb0RhdGUudmFsdWUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZERhdGUgPSBgJHtkYXRlU3BsaXRbMl19LyR7ZGF0ZVNwbGl0WzFdfS8ke2RhdGVTcGxpdFswXX1gO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZERhdGUgPSBgJHtkYXRlLmdldERhdGUoKX0vJHsoZGF0ZS5nZXRNb250aCgpKzEpfS8ke2RhdGUuZ2V0RnVsbFllYXIoKX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZWRpdFRvZG8uZHVlRGF0ZSAhPT0gZERhdGUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRUb2RvLmR1ZURhdGUgPSBkRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlZGl0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLWlkPVwiJHt0b2RvSWR9XCJdIHRkLmRhdGVDb2x1bW5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVkaXRWYWx1ZSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0VmFsdWUudGV4dENvbnRlbnQgPSBkRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUb0RvKGVkaXRUb0RvKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihkaWFsb2dPYmplY3QgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ09iamVjdC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nT2JqZWN0LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dPYmplY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihldmVudC50YXJnZXQuaWQuc3RhcnRzV2l0aChcInByb2plY3Qtc2F2ZS1cIikpXG4gICAge1xuICAgICAgICBsZXQgcHJvaklkID0gKyhldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzJdKTtcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qSWQpO1xuICAgICAgICBpZihkaWFsb2dPYmplY3QgIT09IG51bGwgJiYgZWRpdFByb2plY3QgIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJyk7XG4gICAgICAgICAgICBpZihwcm9qZWN0TmFtZSAhPT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0TmFtZS5jbGFzc0xpc3QuY29udGFpbnMoXCJlcnJvclwiKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvcklucHV0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcklucHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09ICcnIHx8IHByb2plY3ROYW1lLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihlcnJvcklucHV0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcklucHV0LnRleHRDb250ZW50ID0gXCJQbGVhc2UgaW5wdXQgc29tZXRoaW5nIGluIHRoZSBuYW1lLlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWRpdFByb2plY3QubmFtZSAhPT0gcHJvamVjdE5hbWUudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2lkZWJhck9iamVjdCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdENhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdEl0ZW1bZGF0YS1pZD1cIiR7cHJvaklkfVwiXSAucHJvamVjdEl0ZW0tdGV4dGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2plY3RDYXB0aW9uICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENhcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3QoZWRpdFByb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGRpYWxvZ09iamVjdCAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nT2JqZWN0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dPYmplY3QucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ09iamVjdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJwcm9qZWN0LXNlbmRcIilcbiAgICB7XG4gICAgICAgIGlmKGRpYWxvZ09iamVjdCAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcbiAgICAgICAgICAgIGlmKHByb2plY3ROYW1lICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3ROYW1lLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9ySW5wdXQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5wdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT0gJycgfHwgcHJvamVjdE5hbWUudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9ySW5wdXQgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ySW5wdXQudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBpbnB1dCBzb21ldGhpbmcgaW4gdGhlIG5hbWUuXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGFwcGVuZE5ld1Byb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHNpZGViYXJPYmplY3QgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcHBlbmRQcm9qZWN0KHNpZGViYXJPYmplY3QsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZGlhbG9nT2JqZWN0ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dPYmplY3QuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ09iamVjdC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2xhc3Mgc2VsZWN0b3JzXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXJCYWNrZ3JvdW5kXCIpKVxuICAgIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIF9yZW1vdmVTaWRlYmFyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1pbWFnZS1ob2xkZXJcIikgfHwgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1pbWFnZS1ob2xkZXJcIikpXG4gICAge1xuICAgICAgICBfY3JlYXRlU2lkZWJhcigpO1xuICAgIH1cbn1cblxuY29uc3QgX21lbnVTZWxlY3RlZCA9ICh0YXJnZXQpID0+IHtcbiAgICBpZih0YXJnZXQuaWQgPT09IFwic2Vjb25kYXJ5TGlua01lbnVcIilcbiAgICB7XG4gICAgICAgIGN1cnJlbnRseVNlbGVjdGVkID0gXCJsaW5rTWVudVwiO1xuICAgICAgICAvLyBIYW5kbGUgbGF5b3V0IG1vZGlmaWNhdGlvbiBsb2dpY1xuICAgICAgICBhcHBlbmRDb250ZW50KFwibGlua01lbnVcIik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZihzaWRlYmFyT2JqZWN0ICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9yZW1vdmVTaWRlYmFyKCk7XG5cbiAgICAgICAgICAgIGlmKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGFsbE1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51SXRlbVwiKTtcbiAgICAgICAgICAgICAgICBhbGxNZW51cy5mb3JFYWNoKChtZW51KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudGx5U2VsZWN0ZWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGxheW91dCBtb2RpZmljYXRpb24gbG9naWNcbiAgICAgICAgICAgICAgICBhcHBlbmRDb250ZW50KHRhcmdldC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IF9yZW1vdmVTaWRlYmFyID0gKCkgPT4ge1xuICAgIGlmKHNpZGViYXJPYmplY3QgIT09IG51bGwpXG4gICAge1xuICAgICAgICBpZihzaWRlYmFyQmFja2dyb3VuZCAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhckJhY2tncm91bmQucmVtb3ZlKCk7XG4gICAgICAgICAgICBzaWRlYmFyQmFja2dyb3VuZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZihzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlLWluXCIpKVxuICAgICAgICB7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXRcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5yZW1vdmUoKTsgICAgIFxuICAgICAgICAgICAgc2lkZWJhck9iamVjdCA9IG51bGw7ICAgICAgIFxuICAgICAgICB9LCAzNzUpO1xuICAgIH1cbn1cblxuY29uc3QgX2NyZWF0ZVNpZGViYXIgPSAoKSA9PiB7XG5cbiAgICBpZihzaWRlYmFyT2JqZWN0ID09PSBudWxsKVxuICAgIHtcbiAgICAgICAgbGV0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAgICAgc2lkZWJhckJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgc2lkZWJhckJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcInNpZGViYXJCYWNrZ3JvdW5kXCIpO1xuICAgICAgICBzaWRlYmFyQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoc2lkZWJhckJhY2tncm91bmQpO1xuXG4gICAgICAgIHNpZGViYXJPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgc2lkZWJhck9iamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhck1lbnVcIik7XG4gICAgICAgIHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LmFkZChcInNsaWRlLWluXCIpO1xuXG4gICAgICAgIGxldCBzaWRlYmFyTWVudUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNpZGViYXJNZW51SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51SG9sZGVyXCIpO1xuXG4gICAgICAgIGxldCBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcbiAgICAgICAgaWYoY3VycmVudGx5U2VsZWN0ZWQgPT09IFwibGlua0hvbWVcIilcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNpZGViYXJNZW51LnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgICAgICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaW5rSG9tZVwiKTtcbiAgICAgICAgc2lkZWJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICBzaWRlYmFyTWVudUhvbGRlci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICAgICAgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gICAgICAgIGlmKGN1cnJlbnRseVNlbGVjdGVkID09PSBcImxpbmtUb2RheVwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgc2lkZWJhck1lbnUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgICAgIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlua1RvZGF5XCIpO1xuICAgICAgICBzaWRlYmFyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgICAgIHNpZGViYXJNZW51SG9sZGVyLmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICAgICAgICBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcbiAgICAgICAgaWYoY3VycmVudGx5U2VsZWN0ZWQgPT09IFwibGlua1dlZWtcIilcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNpZGViYXJNZW51LnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcbiAgICAgICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaW5rV2Vla1wiKTtcbiAgICAgICAgc2lkZWJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICBzaWRlYmFyTWVudUhvbGRlci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICAgICAgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gICAgICAgIGlmKGN1cnJlbnRseVNlbGVjdGVkID09PSBcImxpbmtGYXZvcml0ZXNcIilcbiAgICAgICAge1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHNpZGViYXJNZW51LnRleHRDb250ZW50ID0gXCJGYXZvcml0ZSBUYXNrc1wiO1xuICAgICAgICBzaWRlYmFyTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpbmtGYXZvcml0ZXNcIik7XG4gICAgICAgIHNpZGViYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgc2lkZWJhck1lbnVIb2xkZXIuYXBwZW5kQ2hpbGQoc2lkZWJhck1lbnUpO1xuXG4gICAgICAgIHNpZGViYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICAgICAgICBpZihjdXJyZW50bHlTZWxlY3RlZCA9PT0gXCJsaW5rQ29tcGxldGVkXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyTWVudS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkIFRhc2tzXCI7XG4gICAgICAgIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlua0NvbXBsZXRlZFwiKTtcbiAgICAgICAgc2lkZWJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICBzaWRlYmFyTWVudUhvbGRlci5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICAgICAgc2lkZWJhck9iamVjdC5hcHBlbmRDaGlsZChzaWRlYmFyTWVudUhvbGRlcik7XG4gICAgICAgIFxuXG4gICAgICAgIGxldCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRpbmdcIik7XG4gICAgICAgIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gYE15IFByb2plY3RzICgke2dldFByb2plY3RzKCkubGVuZ3RofSlgO1xuICAgICAgICBcbiAgICAgICAgbGV0IGFwcGVuZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBlbmRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhcHBlbmQtcHJvamVjdFwiKTtcblxuICAgICAgICBsZXQgYWRkSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYWRkSW1hZ2Uuc3JjID0gQWRkSWNvbjtcbiAgICAgICAgYWRkSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdFwiKTtcbiAgICAgICAgYWRkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICBhcHBlbmRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZEltYWdlKTtcblxuICAgICAgICBwcm9qZWN0SGVhZGluZy5hcHBlbmRDaGlsZChhcHBlbmRQcm9qZWN0KTtcbiAgICAgICAgc2lkZWJhck9iamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGluZyk7XG5cbiAgICAgICAgbGV0IGhySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhySXRlbS5jbGFzc0xpc3QuYWRkKFwiaHItaXRlbVwiKTtcbiAgICAgICAgaHJJdGVtLmlubmVySFRNTCA9IFwiPGhyIC8+XCI7XG4gICAgICAgIHNpZGViYXJPYmplY3QuYXBwZW5kQ2hpbGQoaHJJdGVtKTtcblxuICAgICAgICBnZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIF9hcHBlbmRQcm9qZWN0KHNpZGViYXJPYmplY3QsIHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHNpZGViYXJPYmplY3QpO1xuICAgIH1cbn1cblxuY29uc3QgX2FwcGVuZFByb2plY3QgPSAoc2lkZWJhck9iamVjdCwgcHJvamVjdCkgPT4ge1xuICAgIGxldCBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SXRlbVwiKTtcbiAgICBzaWRlYmFyTWVudS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHByb2plY3QuaWQpO1xuICAgIGlmKGN1cnJlbnRseVNlbGVjdGVkID09PSBcImxpbmtQcm9qZWN0LVwiICsgcHJvamVjdC5pZClcbiAgICB7XG4gICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG4gICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaW5rUHJvamVjdC1cIiArIHByb2plY3QuaWQpO1xuICAgIHNpZGViYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcblxuICAgIGxldCBzaWRlYmFyTWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJNZW51VGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBzaWRlYmFyTWVudVRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RJdGVtLXRleHRcIilcbiAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChzaWRlYmFyTWVudVRleHQpO1xuXG4gICAgbGV0IHNpZGViYXJNZW51T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgbGV0IGVkaXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXRJbWFnZS5zcmMgPSBFZGl0SWNvbjtcbiAgICBpZihjdXJyZW50bHlTZWxlY3RlZCA9PT0gXCJsaW5rUHJvamVjdC1cIiArIHByb2plY3QuaWQpXG4gICAge1xuICAgICAgICBlZGl0SW1hZ2Uuc3JjID0gRWRpdEljb25XaGl0ZTtcbiAgICB9XG4gICAgZWRpdEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICBlZGl0SW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LXByb2plY3QtXCIgKyBwcm9qZWN0LmlkKTtcbiAgICBzaWRlYmFyTWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZWRpdEltYWdlKTtcblxuICAgIGxldCBkZWxldGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUltYWdlLnNyYyA9IERlbGV0ZUljb247XG4gICAgaWYoY3VycmVudGx5U2VsZWN0ZWQgPT09IFwibGlua1Byb2plY3QtXCIgKyBwcm9qZWN0LmlkKVxuICAgIHtcbiAgICAgICAgZGVsZXRlSW1hZ2Uuc3JjID0gRGVsZXRlSWNvbldoaXRlO1xuICAgIH1cbiAgICBkZWxldGVJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgZGVsZXRlSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtcHJvamVjdC1cIiArIHByb2plY3QuaWQpO1xuICAgIHNpZGViYXJNZW51T3B0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSk7XG5cbiAgICBzaWRlYmFyTWVudS5hcHBlbmRDaGlsZChzaWRlYmFyTWVudU9wdGlvbnMpO1xuXG4gICAgc2lkZWJhck9iamVjdC5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG59XG5cbmNvbnN0IF9jcmVhdGVEaWFsb2cgPSAodHlwZSkgPT4ge1xuXG4gICAgaWYoZGlhbG9nT2JqZWN0ICE9PSBudWxsKVxuICAgIHtcbiAgICAgICAgZGlhbG9nT2JqZWN0LmNsb3NlKCk7XG4gICAgICAgIGRpYWxvZ09iamVjdC5yZW1vdmUoKTtcbiAgICAgICAgZGlhbG9nT2JqZWN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBkaWFsb2dPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGRpYWxvZ09iamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpYWxvZy1tYWluXCIpO1xuICAgIGRpYWxvZ09iamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG5cbiAgICBsZXQgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaWFsb2dDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaWFsb2ctY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGRpYWxvZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaWFsb2dUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nLXRpdGxlXCIpO1xuICAgIGRpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gdHlwZTtcblxuICAgIGlmKHR5cGUgPT09IFwiYWRkLXRvZG9cIilcbiAgICB7XG4gICAgICAgIGRpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgdGFza1wiO1xuICAgIH1cblxuICAgIGlmKHR5cGUgPT09IFwiYWRkLXByb2plY3RcIilcbiAgICB7XG4gICAgICAgIGRpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgcHJvamVjdFwiO1xuICAgIH1cblxuICAgIGlmKHR5cGUuc3RhcnRzV2l0aChcImVkaXQtcHJvamVjdC1cIikpXG4gICAge1xuICAgICAgICBkaWFsb2dUaXRsZS50ZXh0Q29udGVudCA9IFwiRWRpdCBwcm9qZWN0XCI7XG4gICAgfVxuXG4gICAgaWYodHlwZS5zdGFydHNXaXRoKFwiZWRpdC10b2RvLVwiKSlcbiAgICB7XG4gICAgICAgIGRpYWxvZ1RpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IHRhc2tcIjtcbiAgICB9XG5cbiAgICBpZih0eXBlLnN0YXJ0c1dpdGgoXCJpbmZvLXRvZG8tXCIpKVxuICAgIHtcbiAgICAgICAgZGlhbG9nVGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2sgaW5mb3JtYXRpb25cIjtcbiAgICB9XG5cbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nVGl0bGUpO1xuXG4gICAgbGV0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpYWxvZy1jb250ZW50XCIpO1xuICAgIFxuICAgIGlmKHR5cGUgPT09IFwiYWRkLXRvZG9cIilcbiAgICB7XG4gICAgICAgIGFwcGVuZE5ld1RvRG9Gb3JtKGRpYWxvZ0NvbnRlbnQpOyAgICAgICAgXG4gICAgfVxuXG4gICAgaWYodHlwZSA9PT0gXCJhZGQtcHJvamVjdFwiKVxuICAgIHtcbiAgICAgICAgYXBwZW5kTmV3UHJvamVjdEZvcm0oZGlhbG9nQ29udGVudCk7XG4gICAgfVxuXG4gICAgaWYodHlwZS5zdGFydHNXaXRoKFwiZWRpdC1wcm9qZWN0LVwiKSlcbiAgICB7XG4gICAgICAgIGxldCBwcm9qSWQgPSArKHR5cGUuc3BsaXQoJy0nKVsyXSk7XG4gICAgICAgIGxldCBlZGl0UHJvamVjdCA9IGdldFByb2plY3QocHJvaklkKTtcbiAgICAgICAgaWYoZWRpdFByb2plY3QgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgZWRpdFByb2plY3RGb3JtKGRpYWxvZ0NvbnRlbnQsIGVkaXRQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKHR5cGUuc3RhcnRzV2l0aChcImVkaXQtdG9kby1cIikpXG4gICAge1xuICAgICAgICBsZXQgdG9kb0lkID0gKyh0eXBlLnNwbGl0KCctJylbMl0pO1xuICAgICAgICBsZXQgZWRpdFRvRG8gPSBnZXRUb0RvKHRvZG9JZCk7XG4gICAgICAgIGlmKGVkaXRUb0RvICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVkaXRUb0RvRm9ybShkaWFsb2dDb250ZW50LCBlZGl0VG9Ebyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0eXBlLnN0YXJ0c1dpdGgoXCJpbmZvLXRvZG8tXCIpKVxuICAgIHtcbiAgICAgICAgbGV0IHRvZG9JZCA9ICsodHlwZS5zcGxpdCgnLScpWzJdKTtcbiAgICAgICAgbGV0IGVkaXRUb0RvID0gZ2V0VG9Ebyh0b2RvSWQpO1xuICAgICAgICBpZihlZGl0VG9EbyAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbmZvVG9EbyhkaWFsb2dDb250ZW50LCBlZGl0VG9Ebyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaWFsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGVudCk7XG5cbiAgICBkaWFsb2dPYmplY3QuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGFpbmVyKTtcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikpLmFwcGVuZENoaWxkKGRpYWxvZ09iamVjdCk7XG4gICAgZGlhbG9nT2JqZWN0LnNob3dNb2RhbCgpO1xuXG59XG5cbmNvbnN0IGFwcGVuZE5ld1RvRG9Gb3JtID0gKGRpYWxvZ0NvbnRlbnQpID0+IHtcbiAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvTmFtZVwiKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvTmFtZVwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9fbmFtZVwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMzJcIik7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGxldCBlcnJvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcnJvckxhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1lcnJvclwiKTtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGVycm9yTGFiZWwpO1xuXG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb0Rlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcblxuICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0Rlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb19kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjZcIik7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb0RhdGVcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0RhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvX2RhdGVcIik7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvUHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Qcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvX3ByaW9yaXR5XCIpO1xuXG4gICAgbGV0IHByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgICBwcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbik7XG5cbiAgICBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZWRpdW1cIik7XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgICBwcmlvcml0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcblxuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9Qcm9qZWN0XCIpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdDogXCI7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb1Byb2plY3RcIik7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvX3Byb2plY3RcIik7XG5cbiAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIi0xXCIpO1xuICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcblxuICAgIGdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH0pOyAgICAgICAgXG4gICAgXG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25zXCIpO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgbGV0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNlbmQtYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXNlbmRcIik7XG4gICAgc2VuZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2VuZEJ1dHRvbik7XG5cbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcbn1cblxuY29uc3QgZWRpdFRvRG9Gb3JtID0gKGRpYWxvZ0NvbnRlbnQsIHRvZG8pID0+IHtcbiAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvTmFtZVwiKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvTmFtZVwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9fbmFtZVwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMzJcIik7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2RvLnRpdGxlKTtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBsZXQgZXJyb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXJyb3JMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZXJyb3JcIik7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChlcnJvckxhYmVsKTtcblxuICAgIGxldCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG5cbiAgICBsZXQgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG9fZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI2XCIpO1xuICAgIGRlc2NJbnB1dC50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb0RhdGVcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgZGF0ZVNwbGl0ID0gdG9kby5kdWVEYXRlLnNwbGl0KFwiL1wiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0RhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvX2RhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2RhdGVTcGxpdFsyXX0tJHtkYXRlU3BsaXRbMV19LSR7ZGF0ZVNwbGl0WzBdfWApO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb1ByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvUHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb19wcmlvcml0eVwiKTtcblxuICAgIGxldCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIik7XG4gICAgaWYodG9kby5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImxvd1wiKVxuICAgIHtcbiAgICAgICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlPcHRpb24ucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblxuICAgIGxldCBwcmlvcml0eU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uMi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcbiAgICBpZih0b2RvLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibWVkaXVtXCIpXG4gICAge1xuICAgICAgICBwcmlvcml0eU9wdGlvbjIuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHlPcHRpb24yLnJlbW92ZUF0dHJpYnV0ZShcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICBwcmlvcml0eU9wdGlvbjIudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24yKTtcblxuICAgIGxldCBwcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByaW9yaXR5T3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG4gICAgaWYodG9kby5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImhpZ2hcIilcbiAgICB7XG4gICAgICAgIHByaW9yaXR5T3B0aW9uMy5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eU9wdGlvbjMucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICAgIHByaW9yaXR5T3B0aW9uMy50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24zKTtcblxuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG5cbiAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvUHJvamVjdFwiKTtcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcblxuICAgIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Qcm9qZWN0XCIpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kb19wcm9qZWN0XCIpO1xuXG4gICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCItMVwiKTtcbiAgICBpZigrdG9kby5wcm9qZWN0SWQgPT09IC0xKVxuICAgIHtcbiAgICAgICAgcHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfVxuICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBcIk5vbmVcIjtcbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cbiAgICBnZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGVQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgZVByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdC5pZCk7XG4gICAgICAgIGlmKCt0b2RvLnByb2plY3RJZCA9PT0gK3Byb2plY3QuaWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVQcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVQcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZVByb2plY3RPcHRpb24pO1xuICAgIH0pOyAgICAgICAgXG4gICAgXG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25zXCIpO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgbGV0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNlbmQtYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXNhdmUtXCIgKyB0b2RvLmlkKTtcbiAgICBzZW5kQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2VuZEJ1dHRvbik7XG5cbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcbn1cblxuY29uc3QgaW5mb1RvRG8gPSAoZGlhbG9nQ29udGVudCwgdG9kbykgPT4ge1xuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9OYW1lXCIpO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiO1xuICAgIG5hbWVMYWJlbC5zdHlsZVsnZm9udC13ZWlnaHQnXSA9ICdib2xkJztcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lSW5wdXQudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGxldCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9EZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICBkZXNjTGFiZWwuc3R5bGVbJ2ZvbnQtd2VpZ2h0J10gPSAnYm9sZCc7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuXG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY0lucHV0LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgICBsZXQgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvRGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlOiBcIjtcbiAgICBkYXRlTGFiZWwuc3R5bGVbJ2ZvbnQtd2VpZ2h0J10gPSAnYm9sZCc7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRhdGVTcGxpdCA9IHRvZG8uZHVlRGF0ZS5zcGxpdChcIi9cIik7XG4gICAgZGF0ZUlucHV0LnRleHRDb250ZW50ID0gIGAke2RhdGVTcGxpdFsyXX0tJHtkYXRlU3BsaXRbMV19LSR7ZGF0ZVNwbGl0WzBdfWA7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvUHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIHByaW9yaXR5TGFiZWwuc3R5bGVbJ2ZvbnQtd2VpZ2h0J10gPSAnYm9sZCc7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eUlucHV0LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gICAgbGV0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb1Byb2plY3RcIik7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0OiBcIjtcbiAgICBwcm9qZWN0TGFiZWwuc3R5bGVbJ2ZvbnQtd2VpZ2h0J10gPSAnYm9sZCc7XG4gICAgZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuXG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYoK3RvZG8ucHJvamVjdElkID09PSAtMSlcbiAgICB7XG4gICAgICAgIHByb2plY3RJbnB1dC50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjdXJyZW50UHJvaiA9IGdldFByb2plY3QoK3RvZG8ucHJvamVjdElkKTtcbiAgICAgICAgaWYoY3VycmVudFByb2ogIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qLm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQudGV4dENvbnRlbnQgPSBcIlVua25vd25cIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBsZXQgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvbnNcIik7XG5cbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1jYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJFeGl0XCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xufVxuXG5jb25zdCBhcHBlbmROZXdQcm9qZWN0Rm9ybSA9IChkaWFsb2dDb250ZW50KSA9PiB7XG4gICAgbGV0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdE5hbWVcIik7XG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOiBcIjtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RfbmFtZVwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMzJcIik7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGxldCBlcnJvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcnJvckxhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1lcnJvclwiKTtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGVycm9yTGFiZWwpO1xuXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25zXCIpO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgbGV0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNlbmQtYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXNlbmRcIik7XG4gICAgc2VuZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2VuZEJ1dHRvbik7XG5cbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcbn1cblxuY29uc3QgZWRpdFByb2plY3RGb3JtID0gKGRpYWxvZ0NvbnRlbnQsIHByb2plY3QpID0+IHtcbiAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3ROYW1lXCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdF9uYW1lXCIpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMlwiKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgIGRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGxldCBlcnJvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcnJvckxhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1lcnJvclwiKTtcbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGVycm9yTGFiZWwpO1xuXG4gICAgbGV0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25zXCIpO1xuXG4gICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgbGV0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNlbmQtYnV0dG9uXCIpO1xuICAgIHNlbmRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXNhdmUtXCIgKyBwcm9qZWN0LmlkKTtcbiAgICBzZW5kQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2VuZEJ1dHRvbik7XG5cbiAgICBkaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcbn1cblxuXG5cbmV4cG9ydCB7IHByaW50QmFzaWNMYXlvdXQsIGFwcGVuZENvbnRlbnQgfSIsIi8vIEltcG9ydCBtZXRob2RzXG5pbXBvcnQgeyBnZXRUb0RvcyB9IGZyb20gXCIuL2RhdGEvdG9kb01hbmFnZXJcIjtcbmltcG9ydCB7IGdldFByb2plY3QgfSBmcm9tIFwiLi9kYXRhL3Byb2plY3RNYW5hZ2VyXCI7XG5cbi8vIEltcG9ydCB2YXJpYWJsZXNcbmltcG9ydCBFZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBJbmZvSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2luZm8uc3ZnXCI7XG5pbXBvcnQgU3Rhckljb24gZnJvbSBcIi4uL2ltYWdlcy9zdGFyLnN2Z1wiO1xuaW1wb3J0IFN0YXJHb2xkSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3N0YXItZ29sZC5zdmdcIjtcbmltcG9ydCBDaXJjbGVJY29uIGZyb20gXCIuLi9pbWFnZXMvY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IENoZWNrR3JlZW5JY29uIGZyb20gXCIuLi9pbWFnZXMvY2hlY2stY2lyY2xlLnN2Z1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIi4uL2ltYWdlcy9wbHVzLWNpcmNsZS1ibGFjay5zdmdcIjtcblxuLy8gRGVjbGFyYXRpb25zXG5jb25zdCBjbGlja0l0ZW1zID0gW107XG5jb25zdCBob3Zlckl0ZW1zID0gW107XG5cbmNvbnN0IHByaW50VG9Eb1RhYmxlID0gKGNvbnRlbnRCb3gsIHR5cGUpID0+IHtcbiAgICBsZXQgdGFibGVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICAgIGxldCB0YWJsZUNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FwdGlvblwiKVxuICAgIFxuICAgIGlmKHR5cGUgPT09IFwiaG9tZVwiKVxuICAgIHtcbiAgICAgICAgdGFibGVDYXB0aW9uLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcbiAgICB9XG5cbiAgICBpZih0eXBlID09PSBcInRvZGF5XCIpXG4gICAge1xuICAgICAgICB0YWJsZUNhcHRpb24udGV4dENvbnRlbnQgPSBcIlRvZGF5J3MgVGFza3NcIjtcbiAgICB9XG5cbiAgICBpZih0eXBlID09PSBcIndlZWtcIilcbiAgICB7XG4gICAgICAgIHRhYmxlQ2FwdGlvbi50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrJ3MgVGFza3NcIjtcbiAgICB9XG5cbiAgICBpZih0eXBlID09PSBcImZhdm9yaXRlXCIpXG4gICAge1xuICAgICAgICB0YWJsZUNhcHRpb24udGV4dENvbnRlbnQgPSBcIkZhdm9yaXRlIFRhc2tzXCI7XG4gICAgfVxuXG4gICAgaWYodHlwZSA9PT0gXCJjb21wbGV0ZWRcIilcbiAgICB7XG4gICAgICAgIHRhYmxlQ2FwdGlvbi50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkIFRhc2tzXCI7XG4gICAgfVxuXG4gICAgaWYodHlwZS5zdGFydHNXaXRoKFwicHJvamVjdC1cIikpXG4gICAge1xuICAgICAgICBsZXQgcHJvamVjdElkID0gKyh0eXBlLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIGlmKHNlbGVjdGVkUHJvamVjdCAhPT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGFibGVDYXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0Lm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZUNhcHRpb24udGV4dENvbnRlbnQgPSBcIlVua25vd24gUHJvamVjdFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFwcGVuZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFwcGVuZFRvZG8uY2xhc3NMaXN0LmFkZChcImFwcGVuZC10b2RvXCIpO1xuXG4gICAgbGV0IGFkZEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgYWRkSW1hZ2Uuc3JjID0gQWRkSWNvbjtcbiAgICBhZGRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC10b2RvXCIpO1xuICAgIGNsaWNrSXRlbXMucHVzaChhZGRJbWFnZSk7XG5cbiAgICBhcHBlbmRUb2RvLmFwcGVuZENoaWxkKGFkZEltYWdlKTtcbiAgICB0YWJsZUNhcHRpb24uYXBwZW5kQ2hpbGQoYXBwZW5kVG9kbyk7XG4gICAgdGFibGVJdGVtLmFwcGVuZENoaWxkKHRhYmxlQ2FwdGlvbik7XG5cbiAgICBsZXQgdGFibGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICAgIGxldCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgIGxldCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICB0YWJsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgIHRhYmxlSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29sdW1uXCIpO1xuICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyKTtcblxuICAgIHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIHRhYmxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyKTtcblxuICAgIHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIHRhYmxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyKTtcblxuICAgIHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIHRhYmxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJPcHRpb25zXCI7XG4gICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXIpO1xuXG4gICAgdGFibGVIZWFkLmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgICB0YWJsZUl0ZW0uYXBwZW5kQ2hpbGQodGFibGVIZWFkKTtcblxuICAgIGxldCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG5cbiAgICBnZXRUb0RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgYXBwZW5kVG9Ebyh0eXBlLCB0YWJsZUJvZHksIHRvZG8pOyAgICAgICAgICAgICBcbiAgICB9KTtcblxuICAgIHRhYmxlSXRlbS5hcHBlbmRDaGlsZCh0YWJsZUJvZHkpO1xuXG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZCh0YWJsZUl0ZW0pO1xufTtcblxuY29uc3QgYXBwZW5kVG9EbyA9ICh0eXBlLCB0YWJsZUJvZHksIHRvZG8pID0+XG57XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGlmKHR5cGUgPT09IFwiaG9tZVwiKVxuICAgIHtcbiAgICAgICAgX3ByaW50Um93TGF5b3V0KHRhYmxlQm9keSwgdG9kbyk7ICAgXG4gICAgfVxuXG4gICAgaWYodHlwZSA9PT0gXCJ0b2RheVwiKVxuICAgIHtcbiAgICAgICAgaWYodG9kby5nZXREdWVEYXRlKCkuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICB0b2RvLmdldER1ZURhdGUoKS5nZXRNb250aCgpID09PSBjdXJyZW50RGF0ZS5nZXRNb250aCgpICYmXG4gICAgICAgICt0b2RvLmdldER1ZURhdGUoKS5nZXREYXRlKCkgPT09ICtjdXJyZW50RGF0ZS5nZXREYXRlKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9wcmludFJvd0xheW91dCh0YWJsZUJvZHksIHRvZG8pOyAgXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgaWYodHlwZSA9PT0gXCJ3ZWVrXCIpXG4gICAge1xuICAgICAgICBpZih0b2RvLmdldER1ZURhdGUoKS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgIHRvZG8uZ2V0RHVlRGF0ZSgpLmdldE1vbnRoKCkgPT09IGN1cnJlbnREYXRlLmdldE1vbnRoKCkgJiZcbiAgICAgICAgdG9kby5nZXREdWVEYXRlKCkuZ2V0V2VlaygpID09PSBjdXJyZW50RGF0ZS5nZXRXZWVrKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9wcmludFJvd0xheW91dCh0YWJsZUJvZHksIHRvZG8pOyAgXG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBpZih0eXBlID09PSBcImZhdm9yaXRlXCIpXG4gICAge1xuICAgICAgICBpZih0b2RvLmZhdm9yaXRlKVxuICAgICAgICB7XG4gICAgICAgICAgICBfcHJpbnRSb3dMYXlvdXQodGFibGVCb2R5LCB0b2RvKTsgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKHR5cGUgPT09IFwiY29tcGxldGVkXCIpXG4gICAge1xuICAgICAgICBpZih0b2RvLmNvbXBsZXRlZClcbiAgICAgICAge1xuICAgICAgICAgICAgX3ByaW50Um93TGF5b3V0KHRhYmxlQm9keSwgdG9kbyk7ICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0eXBlLnN0YXJ0c1dpdGgoXCJwcm9qZWN0LVwiKSlcbiAgICB7XG4gICAgICAgIGxldCBwcm9qSWQgPSArKHR5cGUuc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgICAgaWYoKCt0b2RvLnByb2plY3RJZCkgPT09IHByb2pJZClcbiAgICAgICAge1xuICAgICAgICAgICAgX3ByaW50Um93TGF5b3V0KHRhYmxlQm9keSwgdG9kbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IF9wcmludFJvd0xheW91dCA9ICh0YWJsZUJvZHksIHRvZG8pID0+IHtcbiAgICBsZXQgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgdGFibGVSb3cuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0b2RvLmlkKTtcblxuICAgIGxldCB0YWJsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgdGFibGVDZWxsLmNsYXNzTGlzdC5hZGQoXCJuYW1lQ29sdW1uXCIpO1xuICAgIHRhYmxlQ2VsbC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGFibGVDZWxsKTtcblxuICAgIHRhYmxlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0YWJsZUNlbGwuY2xhc3NMaXN0LmFkZChcImRhdGVDb2x1bW5cIik7XG4gICAgbGV0IGRheSA9IHRvZG8uZ2V0RHVlRGF0ZSgpLmdldERhdGUoKStcIlwiO1xuICAgIGlmKGRheS5sZW5ndGggPT09IDEpXG4gICAge1xuICAgICAgICBkYXkgPSBcIjBcIiArIGRheTtcbiAgICB9XG4gICAgdGFibGVDZWxsLnRleHRDb250ZW50ID0gYCR7ZGF5fS8keygxK3RvZG8uZ2V0RHVlRGF0ZSgpLmdldE1vbnRoKCkpfS8ke3RvZG8uZ2V0RHVlRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YDtcbiAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZUNlbGwpO1xuXG4gICAgdGFibGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRhYmxlQ2VsbC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlDb2x1bW5cIik7XG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKHRvZG8ucHJpb3JpdHkpO1xuICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICB0YWJsZUNlbGwuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlQ2VsbCk7XG5cbiAgICB0YWJsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICBsZXQgZWRpdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdEltYWdlLnNyYyA9IEVkaXRJY29uO1xuICAgIGVkaXRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtdG9kby1cIiArIHRvZG8uaWQpO1xuICAgIGNsaWNrSXRlbXMucHVzaChlZGl0SW1hZ2UpO1xuICAgIHRhYmxlQ2VsbC5hcHBlbmRDaGlsZChlZGl0SW1hZ2UpO1xuXG4gICAgbGV0IGRlbGV0ZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlSW1hZ2Uuc3JjID0gRGVsZXRlSWNvbjtcbiAgICBkZWxldGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS10b2RvLVwiICsgdG9kby5pZCk7XG4gICAgY2xpY2tJdGVtcy5wdXNoKGRlbGV0ZUltYWdlKTtcbiAgICB0YWJsZUNlbGwuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpO1xuXG4gICAgbGV0IGluZm9JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGluZm9JbWFnZS5zcmMgPSBJbmZvSWNvbjtcbiAgICBpbmZvSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbmZvLXRvZG8tXCIgKyB0b2RvLmlkKTtcbiAgICBjbGlja0l0ZW1zLnB1c2goaW5mb0ltYWdlKTtcbiAgICB0YWJsZUNlbGwuYXBwZW5kQ2hpbGQoaW5mb0ltYWdlKTtcblxuICAgIGxldCBjaXJjbGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGlmKHRvZG8uY29tcGxldGVkKVxuICAgIHtcbiAgICAgICAgY2lyY2xlSW1hZ2Uuc3JjID0gQ2hlY2tHcmVlbkljb247XG4gICAgICAgIGNpcmNsZUltYWdlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIsIFwiY2hlY2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2lyY2xlSW1hZ2Uuc3JjID0gQ2lyY2xlSWNvbjtcbiAgICAgICAgY2lyY2xlSW1hZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJub25lXCIpO1xuICAgIH1cbiAgICBjaXJjbGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrLXRvZG8tXCIgKyB0b2RvLmlkKTtcbiAgICBjbGlja0l0ZW1zLnB1c2goY2lyY2xlSW1hZ2UpO1xuICAgIGhvdmVySXRlbXMucHVzaChjaXJjbGVJbWFnZSk7XG4gICAgdGFibGVDZWxsLmFwcGVuZENoaWxkKGNpcmNsZUltYWdlKTtcblxuICAgIGxldCBzdGFySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpZih0b2RvLmZhdm9yaXRlKVxuICAgIHtcbiAgICAgICAgc3RhckltYWdlLnNyYyA9IFN0YXJHb2xkSWNvbjtcbiAgICAgICAgc3RhckltYWdlLnNldEF0dHJpYnV0ZShcImRhdGEtc3RhdHVzXCIsIFwiY2hlY2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhckltYWdlLnNyYyA9IFN0YXJJY29uO1xuICAgICAgICBzdGFySW1hZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1zdGF0dXNcIiwgXCJub25lXCIpO1xuICAgIH1cbiAgICBzdGFySW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmYXYtdG9kby1cIiArIHRvZG8uaWQpO1xuICAgIGNsaWNrSXRlbXMucHVzaChzdGFySW1hZ2UpO1xuICAgIGhvdmVySXRlbXMucHVzaChzdGFySW1hZ2UpO1xuICAgIHRhYmxlQ2VsbC5hcHBlbmRDaGlsZChzdGFySW1hZ2UpO1xuXG4gICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGFibGVDZWxsKTtcblxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG59XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IChjbGlja0hhbmRsZXIsIG1vdXNlSW5IYW5kbGVyLCBtb3VzZU91dEhhbmRsZXIpID0+IHtcbiAgICBjbGlja0l0ZW1zLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcblxuICAgIGhvdmVySXRlbXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VJbkhhbmRsZXIpO1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBtb3VzZU91dEhhbmRsZXIpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBwcmludFRvRG9UYWJsZSwgYWRkTGlzdGVuZXJzLCBhcHBlbmRUb0RvIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBwcmludEJhc2ljTGF5b3V0LCBhcHBlbmRDb250ZW50IH0gZnJvbSAnLi9zY3JpcHRzL2xheW91dE1hbmFnZXInXG5pbXBvcnQgeyBwb3B1bGF0ZURhdGEgfSBmcm9tICcuL3NjcmlwdHMvZGF0YS9kYXRhTWFuYWdlcic7XG5pbXBvcnQgJy4vc2NyaXB0cy9kYXRlSGVscGVyJztcblxuLy8gTG9hZCBkYXRhXG5wb3B1bGF0ZURhdGEoKTtcblxuLy8gTG9hZCBiYXNpYyBsYXlvdXRcbnByaW50QmFzaWNMYXlvdXQoKTtcbmFwcGVuZENvbnRlbnQoXCJsaW5rSG9tZVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==