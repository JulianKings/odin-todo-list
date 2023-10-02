// Import methods
import { printToDoTable } from './todoLayout';
import { addListeners } from './todoLayout';
import { getProjects, deleteProject } from './data/projectManager';
import { alternateToDoCompleted, alternateToDoFavorite, deleteToDo } from './data/todoManager';

// Import images
import MenuImage from '../images/menu.svg';
import EditIcon from "../images/edit.svg";
import DeleteIcon from "../images/delete.svg";
import EditIconWhite from "../images/edit-white.svg";
import DeleteIconWhite from "../images/delete-white.svg";
import StarIcon from "../images/star.svg";
import StarGoldIcon from "../images/star-gold.svg";
import CircleIcon from "../images/circle.svg";
import CheckCircleIcon from "../images/check-circle-black.svg";
import CheckGreenIcon from "../images/check-circle.svg";

// Declare variables
let sidebarObject = null;
let sidebarBackground = null;
let currentlySelected = "linkHome";

const printBasicLayout = () => {
    let headerMenuImage = document.querySelector(".menu-image-holder");
    headerMenuImage.addEventListener("click", _clickHandler);

    let menuImage = new Image();
    menuImage.src = MenuImage;
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
    if(content === "linkHome")
    {
        printToDoTable(mainContentBox, "home");
        addListeners(_clickHandler, _mouseInHandler, _mouseOutHandler);
    }

    if(content === "linkWeek")
    {
        printToDoTable(mainContentBox, "week");
        addListeners(_clickHandler, _mouseInHandler, _mouseOutHandler);
    }

    if(content === "linkToday")
    {
        printToDoTable(mainContentBox, "today");
        addListeners(_clickHandler, _mouseInHandler, _mouseOutHandler);
    }

    if(content === "linkFavorites")
    {
        printToDoTable(mainContentBox, "favorite");
        addListeners(_clickHandler, _mouseInHandler, _mouseOutHandler);
    }

    if(content === "linkCompleted")
    {
        printToDoTable(mainContentBox, "completed");
        addListeners(_clickHandler, _mouseInHandler, _mouseOutHandler);
    }

    if(content.startsWith("linkProject-"))
    {
        let projectId = content.split("-")[1];
        printToDoTable(mainContentBox, "project-" + projectId);
        addListeners(_clickHandler, _mouseInHandler, _mouseOutHandler);
    }

    contentBox.appendChild(mainContentBox);

}

const _mouseInHandler = (event) => {
    // id selectors
    if(event.target.id.startsWith("check-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = CheckCircleIcon;
        }
    }
    
    if(event.target.id.startsWith("fav-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = StarGoldIcon;
        }
    }

}

const _mouseOutHandler = (event) => {
    // id selectors
    if(event.target.id.startsWith("check-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = CircleIcon;
        }
    }

    if(event.target.id.startsWith("fav-todo-"))
    {
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.src = StarIcon;
        }
    }

}

const _clickHandler = (event) => {
    console.log(event.target.id);
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
        let todoID = +(event.target.id.split("-")[2]);
        alternateToDoCompleted(todoID);
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.setAttribute("data-status", "check");
            event.target.src = CheckGreenIcon;
        } else {
            event.target.setAttribute("data-status", "none");
            event.target.src = CircleIcon;
        }
    }

    if(event.target.id.startsWith("fav-todo-"))
    {
        let todoID = +(event.target.id.split("-")[2]);
        alternateToDoFavorite(todoID);
        if(event.target.getAttribute("data-status") !== null && event.target.getAttribute("data-status") !== "check")
        {
            event.target.setAttribute("data-status", "check");
            event.target.src = StarGoldIcon;
        } else {
            event.target.setAttribute("data-status", "none");
            event.target.src = StarIcon;
        }
    }

    if(event.target.id.startsWith("delete-todo-"))
    {
        let todoID = +(event.target.id.split("-")[2]);
        let rowComponent = document.querySelector(`tr[data-id="${todoID}"]`);
        if(rowComponent !== null)
        {
            rowComponent.remove();
        }
        deleteToDo(todoID);        
    }

    if(event.target.id.startsWith("delete-project-"))
    {
        let projectID = +(event.target.id.split("-")[2]);
        let projectComponent = document.querySelector(`.projectItem[data-id="${projectID}"]`);
        if(projectComponent !== null)
        {
            projectComponent.remove();
        }
        deleteProject(projectID);
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
        projectHeading.textContent = `My Projects (${getProjects().length})`;
        sidebarObject.appendChild(projectHeading);

        let hrItem = document.createElement("div");
        hrItem.classList.add("hr-item");
        hrItem.innerHTML = "<hr />";
        sidebarObject.appendChild(hrItem);

        getProjects().forEach((project) => {
            sidebarMenu = document.createElement("div");
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
            editImage.src = EditIcon;
            if(currentlySelected === "linkProject-" + project.id)
            {
                editImage.src = EditIconWhite;
            }
            editImage.addEventListener("click", _clickHandler);
            editImage.setAttribute("id", "edit-project-" + project.id);
            sidebarMenuOptions.appendChild(editImage);

            let deleteImage = new Image();
            deleteImage.src = DeleteIcon;
            if(currentlySelected === "linkProject-" + project.id)
            {
                deleteImage.src = DeleteIconWhite;
            }
            deleteImage.addEventListener("click", _clickHandler);
            deleteImage.setAttribute("id", "delete-project-" + project.id);
            sidebarMenuOptions.appendChild(deleteImage);

            sidebarMenu.appendChild(sidebarMenuOptions);

            sidebarObject.appendChild(sidebarMenu);
        });

        contentBox.appendChild(sidebarObject);
    }
}



export { printBasicLayout, appendContent }