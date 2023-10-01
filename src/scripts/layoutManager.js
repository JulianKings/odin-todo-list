import MenuImage from '../images/menu.svg';
import { printToDoTable as printHomeLayout, printToDoTable } from './todoLayout';
import { addListeners as addHomeListeners } from './todoLayout';
import { getProject, getProjects } from './data/projectManager';

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
    
    if(content === "linkHome")
    {
        printToDoTable(mainContentBox, "home");
        addHomeListeners(_clickHandler);
    }

    contentBox.appendChild(mainContentBox);

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
            if(currentlySelected === "linkProject-" + project.id)
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = project.name;
            sidebarMenu.setAttribute("id", "linkProject-" + project.id);
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarObject.appendChild(sidebarMenu);
        });

        contentBox.appendChild(sidebarObject);
    }
}



export { printBasicLayout, appendContent }