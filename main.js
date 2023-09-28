/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/contactLayout.js":
/*!**************************************!*\
  !*** ./src/scripts/contactLayout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printLayout: () => (/* binding */ printLayout)
/* harmony export */ });
const printLayout = (contentBox) => {
    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-contact");

    let paragraph = document.createElement("p");
    paragraph.textContent = "📞 (+99) 987 654 321";
    contentHolder.appendChild(paragraph);

    paragraph = document.createElement("p");
    paragraph.textContent = "🏠 C/ Luis De Morales 2, 41018, Sevilla, Spain";
    contentHolder.appendChild(paragraph);

    let mapElement = document.createElement("div");
    mapElement.setAttribute("id", "map");
    mapElement.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.532981647481!2d-5.973415623968875!3d37.386712230686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126ea355335b6f%3A0xb4749b86315ebdd4!2sRestaurante%20La%20Tagliatella%20%7C%20Nervi%C3%B3n%2C%20Sevilla!5e0!3m2!1sen!2ses!4v1695844081460!5m2!1sen!2ses" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    contentHolder.appendChild(mapElement);

    contentBox.appendChild(contentHolder);

};



/***/ }),

/***/ "./src/scripts/homeLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/homeLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListeners: () => (/* binding */ addListeners),
/* harmony export */   printLayout: () => (/* binding */ printLayout)
/* harmony export */ });
/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chef.png */ "./src/images/chef.png");


let menuButton = null;

const printLayout = (contentBox) => {

    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-index");

    let chefImage = new Image();
    chefImage.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_0__;
    contentHolder.appendChild(chefImage);

    let paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Order online or visit us!";
    contentHolder.appendChild(paragraph);

    paragraph = document.createElement("p");
    paragraph.innerHTML = "Come and try our food in <em>il Ristorante</em>, serving you the best italian food since 1893";
    contentHolder.appendChild(paragraph);

    menuButton = document.createElement("button");
    menuButton.textContent = "Check the menu";
    menuButton.setAttribute("id", "secondaryLinkMenu");
    contentHolder.appendChild(menuButton);

    paragraph = document.createElement("p");
    paragraph.classList.add("timetable")
    paragraph.innerHTML = "<strong>We service at</strong> <br />" +
    "<span class='restDay'>Mon-Thurs:</span> 11am-9pm<br/>" +
    "<span class='restDay'>Fri-Sun:</span> 10am-11pm";
    contentHolder.appendChild(paragraph);

    contentBox.appendChild(contentHolder);

};

const addListeners = (clickHandler) => {
    if(menuButton != null)
    {
        menuButton.addEventListener("click", clickHandler);
    }
}



/***/ }),

/***/ "./src/scripts/layoutManager.js":
/*!**************************************!*\
  !*** ./src/scripts/layoutManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendContent: () => (/* binding */ appendContent),
/* harmony export */   printBasicLayout: () => (/* binding */ printBasicLayout)
/* harmony export */ });
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _homeLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeLayout */ "./src/scripts/homeLayout.js");
/* harmony import */ var _menuLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuLayout */ "./src/scripts/menuLayout.js");
/* harmony import */ var _contactLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactLayout */ "./src/scripts/contactLayout.js");






let sidebarObject = null;
let sidebarBackground = null;
let currentlySelected = "linkHome";

const printBasicLayout = () => {

    let contentBox = document.querySelector(".content");

    console.log(contentBox);

    let headerBox = document.createElement("div");
    headerBox.classList.add("header");

    let headerTitle = document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.textContent = "Il Ristorante";
    headerBox.appendChild(headerTitle);

    let headerMenu = document.createElement("div");
    headerMenu.classList.add("menu-holder");

    let headerMenuImage = document.createElement("div");
    headerMenuImage.classList.add("menu-image-holder");
    headerMenuImage.addEventListener("click", _clickHandler);

    let menuImage = new Image();
    menuImage.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_0__;
    headerMenuImage.appendChild(menuImage);
    headerMenu.appendChild(headerMenuImage);

    headerBox.appendChild(headerMenu);
    contentBox.appendChild(headerBox);

    let footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Site made for The Odin Project";
    contentBox.appendChild(footer);
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
        (0,_homeLayout__WEBPACK_IMPORTED_MODULE_1__.printLayout)(mainContentBox);
        (0,_homeLayout__WEBPACK_IMPORTED_MODULE_1__.addListeners)(_clickHandler);
    } else if(content === "linkMenu")
    {
        (0,_menuLayout__WEBPACK_IMPORTED_MODULE_2__.printLayout)(mainContentBox);
    } else if(content === "linkContact")
    {
        (0,_contactLayout__WEBPACK_IMPORTED_MODULE_3__.printLayout)(mainContentBox);
    }

    contentBox.appendChild(mainContentBox);

}

const _clickHandler = (event) => {
    let contentBox = document.querySelector(".content");
    // id selectors
    if(event.target.id === "linkHome")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "secondaryLinkMenu")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "linkMenu")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "linkContact")
    {
        _menuSelected(event.target);
    }

    // class selectors
    if(event.target.classList.contains("sidebarBackground"))
    {
        event.stopPropagation();
        event.target.remove();
        if(sidebarBackground !== null)
        {
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

        return;
    }

    if(event.target.classList.contains("menu-image-holder") || event.target.parentElement.classList.contains("menu-image-holder"))
    {
        if(sidebarObject === null)
        {
            sidebarBackground = document.createElement("section");
            sidebarBackground.classList.add("sidebarBackground");
            sidebarBackground.addEventListener("click", _clickHandler);
            contentBox.appendChild(sidebarBackground);

            sidebarObject = document.createElement("section");
            sidebarObject.classList.add("sidebarMenu");
            sidebarObject.classList.add("slide-in");

            let sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkHome")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Home";
            sidebarMenu.setAttribute("id", "linkHome");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarObject.appendChild(sidebarMenu);

            sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkMenu")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Menu";
            sidebarMenu.setAttribute("id", "linkMenu");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarObject.appendChild(sidebarMenu);

            sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkContact")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Contact Us";
            sidebarMenu.setAttribute("id", "linkContact");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarObject.appendChild(sidebarMenu);

            contentBox.appendChild(sidebarObject);
        }
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
            if(sidebarBackground != null)
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



/***/ }),

/***/ "./src/scripts/menuLayout.js":
/*!***********************************!*\
  !*** ./src/scripts/menuLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printLayout: () => (/* binding */ printLayout)
/* harmony export */ });
/* harmony import */ var _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pizza-menu.png */ "./src/images/pizza-menu.png");


const printLayout = (contentBox) => {
    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-menu");

    let pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;

    let menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    let paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Tartufi e funghi";
    let span = document.createElement("span");
    span.innerText = "Crema de tòfona negra, variat de formatges i xampinyons.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "4 Stagioni";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, xampinyons, gambes, guanciale i pernil dolç.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Tagliatella";
    span = document.createElement("span");
    span.innerText = "Salsa de tomàquet confitat groc, mozzarella, Mortadel·la di Bologna IGP, stracciatella, festuc, ruca i oli de mandarina.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Al parmigiano";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, Parmigiano Reggiano DOP, bacó, formatge Taleggio DOP i alfàbrega.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "7 Formaggi";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, Taleggio DOP, Pecorino Romano DOP, Gorgonzola DOP, Mozzarella de Búfala DOP, Parmigiano Reggiano DOP i formatge Montasio DOP.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = _images_pizza_menu_png__WEBPACK_IMPORTED_MODULE_0__;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Bismark";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, pernil dolç i ou.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    contentBox.appendChild(contentHolder);
};



/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21658c309ea0b1ed4408.png";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09d7f08a9f31ebd88842.svg";

/***/ }),

/***/ "./src/images/pizza-menu.png":
/*!***********************************!*\
  !*** ./src/images/pizza-menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d0def33ff8ce71554e03.png";

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/layoutManager */ "./src/scripts/layoutManager.js");



// Load basic layout
(0,_scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__.printBasicLayout)();
(0,_scripts_layoutManager__WEBPACK_IMPORTED_MODULE_1__.appendContent)("linkHome");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOFlBQThZO0FBQzlZOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjJDOztBQUUzQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDZDQUFTO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzJDO0FBQ21CO0FBQ0U7QUFDRjtBQUNNOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw2Q0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLFFBQVEseURBQWdCO0FBQ3hCLE1BQU07QUFDTjtBQUNBLFFBQVEsd0RBQWU7QUFDdkIsTUFBTTtBQUNOO0FBQ0EsUUFBUSwyREFBa0I7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTmlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsbURBQVM7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDbEI0QjtBQUM2Qzs7QUFFekU7QUFDQSx3RUFBZ0I7QUFDaEIscUVBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz8yMzk0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2NvbnRhY3RMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvaG9tZUxheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9sYXlvdXRNYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL21lbnVMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBwcmludExheW91dCA9IChjb250ZW50Qm94KSA9PiB7XG4gICAgbGV0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnRIb2xkZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1jb250YWN0XCIpO1xuXG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwi8J+TniAoKzk5KSA5ODcgNjU0IDMyMVwiO1xuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwi8J+PoCBDLyBMdWlzIERlIE1vcmFsZXMgMiwgNDEwMTgsIFNldmlsbGEsIFNwYWluXCI7XG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgbGV0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1hcEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYXBcIik7XG4gICAgbWFwRWxlbWVudC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ3OTIuNTMyOTgxNjQ3NDgxITJkLTUuOTczNDE1NjIzOTY4ODc1ITNkMzcuMzg2NzEyMjMwNjg2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHhkMTI2ZWEzNTUzMzViNmYlM0EweGI0NzQ5Yjg2MzE1ZWJkZDQhMnNSZXN0YXVyYW50ZSUyMExhJTIwVGFnbGlhdGVsbGElMjAlN0MlMjBOZXJ2aSVDMyVCM24lMkMlMjBTZXZpbGxhITVlMCEzbTIhMXNlbiEyc2VzITR2MTY5NTg0NDA4MTQ2MCE1bTIhMXNlbiEyc2VzXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNDAwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5gO1xuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQobWFwRWxlbWVudCk7XG5cbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGNvbnRlbnRIb2xkZXIpO1xuXG59O1xuXG5leHBvcnQgeyBwcmludExheW91dCB9IiwiaW1wb3J0IENoZWZJbWFnZSBmcm9tICcuLi9pbWFnZXMvY2hlZi5wbmcnO1xuXG5sZXQgbWVudUJ1dHRvbiA9IG51bGw7XG5cbmNvbnN0IHByaW50TGF5b3V0ID0gKGNvbnRlbnRCb3gpID0+IHtcblxuICAgIGxldCBjb250ZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtaW5kZXhcIik7XG5cbiAgICBsZXQgY2hlZkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgY2hlZkltYWdlLnNyYyA9IENoZWZJbWFnZTtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGNoZWZJbWFnZSk7XG5cbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIk9yZGVyIG9ubGluZSBvciB2aXNpdCB1cyFcIjtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJDb21lIGFuZCB0cnkgb3VyIGZvb2QgaW4gPGVtPmlsIFJpc3RvcmFudGU8L2VtPiwgc2VydmluZyB5b3UgdGhlIGJlc3QgaXRhbGlhbiBmb29kIHNpbmNlIDE4OTNcIjtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGVjayB0aGUgbWVudVwiO1xuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWNvbmRhcnlMaW5rTWVudVwiKTtcbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJ0aW1ldGFibGVcIilcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gXCI8c3Ryb25nPldlIHNlcnZpY2UgYXQ8L3N0cm9uZz4gPGJyIC8+XCIgK1xuICAgIFwiPHNwYW4gY2xhc3M9J3Jlc3REYXknPk1vbi1UaHVyczo8L3NwYW4+IDExYW0tOXBtPGJyLz5cIiArXG4gICAgXCI8c3BhbiBjbGFzcz0ncmVzdERheSc+RnJpLVN1bjo8L3NwYW4+IDEwYW0tMTFwbVwiO1xuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29udGVudEhvbGRlcik7XG5cbn07XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IChjbGlja0hhbmRsZXIpID0+IHtcbiAgICBpZihtZW51QnV0dG9uICE9IG51bGwpXG4gICAge1xuICAgICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcHJpbnRMYXlvdXQsIGFkZExpc3RlbmVycyB9IiwiaW1wb3J0IE1lbnVJbWFnZSBmcm9tICcuLi9pbWFnZXMvbWVudS5zdmcnO1xuaW1wb3J0IHsgcHJpbnRMYXlvdXQgYXMgcHJpbnRIb21lTGF5b3V0IH0gZnJvbSAnLi9ob21lTGF5b3V0JztcbmltcG9ydCB7IGFkZExpc3RlbmVycyBhcyBhZGRIb21lTGlzdGVuZXJzIH0gZnJvbSAnLi9ob21lTGF5b3V0JztcbmltcG9ydCB7IHByaW50TGF5b3V0IGFzIHByaW50TWVudUxheW91dCB9IGZyb20gJy4vbWVudUxheW91dCc7XG5pbXBvcnQgeyBwcmludExheW91dCBhcyBwcmludENvbnRhY3RMYXlvdXQgfSBmcm9tICcuL2NvbnRhY3RMYXlvdXQnO1xuXG5sZXQgc2lkZWJhck9iamVjdCA9IG51bGw7XG5sZXQgc2lkZWJhckJhY2tncm91bmQgPSBudWxsO1xubGV0IGN1cnJlbnRseVNlbGVjdGVkID0gXCJsaW5rSG9tZVwiO1xuXG5jb25zdCBwcmludEJhc2ljTGF5b3V0ID0gKCkgPT4ge1xuXG4gICAgbGV0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZW50Qm94KTtcblxuICAgIGxldCBoZWFkZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckJveC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgbGV0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJJbCBSaXN0b3JhbnRlXCI7XG4gICAgaGVhZGVyQm94LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgIGxldCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWhvbGRlclwiKTtcblxuICAgIGxldCBoZWFkZXJNZW51SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlck1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWFnZS1ob2xkZXJcIik7XG4gICAgaGVhZGVyTWVudUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcblxuICAgIGxldCBtZW51SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBtZW51SW1hZ2Uuc3JjID0gTWVudUltYWdlO1xuICAgIGhlYWRlck1lbnVJbWFnZS5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xuICAgIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudUltYWdlKTtcblxuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZChoZWFkZXJNZW51KTtcbiAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKGhlYWRlckJveCk7XG5cbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIlNpdGUgbWFkZSBmb3IgVGhlIE9kaW4gUHJvamVjdFwiO1xuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuY29uc3QgYXBwZW5kQ29udGVudCA9IChjb250ZW50KSA9PiB7XG4gICAgbGV0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBsZXQgcHJldmlvdXNDb250ZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cbiAgICBpZihwcmV2aW91c0NvbnRlbnRCb3ggIT09IG51bGwpXG4gICAge1xuICAgICAgICBwcmV2aW91c0NvbnRlbnRCb3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IG1haW5Db250ZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudEJveC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuICAgIFxuICAgIGlmKGNvbnRlbnQgPT09IFwibGlua0hvbWVcIilcbiAgICB7XG4gICAgICAgIHByaW50SG9tZUxheW91dChtYWluQ29udGVudEJveCk7XG4gICAgICAgIGFkZEhvbWVMaXN0ZW5lcnMoX2NsaWNrSGFuZGxlcik7XG4gICAgfSBlbHNlIGlmKGNvbnRlbnQgPT09IFwibGlua01lbnVcIilcbiAgICB7XG4gICAgICAgIHByaW50TWVudUxheW91dChtYWluQ29udGVudEJveCk7XG4gICAgfSBlbHNlIGlmKGNvbnRlbnQgPT09IFwibGlua0NvbnRhY3RcIilcbiAgICB7XG4gICAgICAgIHByaW50Q29udGFjdExheW91dChtYWluQ29udGVudEJveCk7XG4gICAgfVxuXG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZChtYWluQ29udGVudEJveCk7XG5cbn1cblxuY29uc3QgX2NsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGxldCBjb250ZW50Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIC8vIGlkIHNlbGVjdG9yc1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJsaW5rSG9tZVwiKVxuICAgIHtcbiAgICAgICAgX21lbnVTZWxlY3RlZChldmVudC50YXJnZXQpO1xuICAgIH0gZWxzZSBpZihldmVudC50YXJnZXQuaWQgPT09IFwic2Vjb25kYXJ5TGlua01lbnVcIilcbiAgICB7XG4gICAgICAgIF9tZW51U2VsZWN0ZWQoZXZlbnQudGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImxpbmtNZW51XCIpXG4gICAge1xuICAgICAgICBfbWVudVNlbGVjdGVkKGV2ZW50LnRhcmdldCk7XG4gICAgfSBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJsaW5rQ29udGFjdFwiKVxuICAgIHtcbiAgICAgICAgX21lbnVTZWxlY3RlZChldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIC8vIGNsYXNzIHNlbGVjdG9yc1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyQmFja2dyb3VuZFwiKSlcbiAgICB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldmVudC50YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIGlmKHNpZGViYXJCYWNrZ3JvdW5kICE9PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBzaWRlYmFyQmFja2dyb3VuZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZihzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlLWluXCIpKVxuICAgICAgICB7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZS1pblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXRcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5yZW1vdmUoKTsgICAgIFxuICAgICAgICAgICAgc2lkZWJhck9iamVjdCA9IG51bGw7ICAgICAgIFxuICAgICAgICB9LCAzNzUpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1pbWFnZS1ob2xkZXJcIikgfHwgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS1pbWFnZS1ob2xkZXJcIikpXG4gICAge1xuICAgICAgICBpZihzaWRlYmFyT2JqZWN0ID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBzaWRlYmFyQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICAgICAgc2lkZWJhckJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcInNpZGViYXJCYWNrZ3JvdW5kXCIpO1xuICAgICAgICAgICAgc2lkZWJhckJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgY29udGVudEJveC5hcHBlbmRDaGlsZChzaWRlYmFyQmFja2dyb3VuZCk7XG5cbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXJNZW51XCIpO1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW5cIik7XG5cbiAgICAgICAgICAgIGxldCBzaWRlYmFyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gICAgICAgICAgICBpZihjdXJyZW50bHlTZWxlY3RlZCA9PT0gXCJsaW5rSG9tZVwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNpZGViYXJNZW51LnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpbmtIb21lXCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9jbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgc2lkZWJhck9iamVjdC5hcHBlbmRDaGlsZChzaWRlYmFyTWVudSk7XG5cbiAgICAgICAgICAgIHNpZGViYXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlbGVjdGVkID09PSBcImxpbmtNZW51XCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2lkZWJhck1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlua01lbnVcIik7XG4gICAgICAgICAgICBzaWRlYmFyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2NsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmFwcGVuZENoaWxkKHNpZGViYXJNZW51KTtcblxuICAgICAgICAgICAgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICAgICAgICAgICAgaWYoY3VycmVudGx5U2VsZWN0ZWQgPT09IFwibGlua0NvbnRhY3RcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyTWVudS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWRlYmFyTWVudS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgICAgICAgICAgc2lkZWJhck1lbnUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaW5rQ29udGFjdFwiKTtcbiAgICAgICAgICAgIHNpZGViYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIHNpZGViYXJPYmplY3QuYXBwZW5kQ2hpbGQoc2lkZWJhck1lbnUpO1xuXG4gICAgICAgICAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHNpZGViYXJPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBfbWVudVNlbGVjdGVkID0gKHRhcmdldCkgPT4ge1xuICAgIGlmKHRhcmdldC5pZCA9PT0gXCJzZWNvbmRhcnlMaW5rTWVudVwiKVxuICAgIHtcbiAgICAgICAgY3VycmVudGx5U2VsZWN0ZWQgPSBcImxpbmtNZW51XCI7XG4gICAgICAgIC8vIEhhbmRsZSBsYXlvdXQgbW9kaWZpY2F0aW9uIGxvZ2ljXG4gICAgICAgIGFwcGVuZENvbnRlbnQoXCJsaW5rTWVudVwiKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKHNpZGViYXJPYmplY3QgIT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoc2lkZWJhckJhY2tncm91bmQgIT0gbnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyQmFja2dyb3VuZCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHNpZGViYXJPYmplY3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2xpZGUtaW5cIikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lkZWJhck9iamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWRlYmFyT2JqZWN0LmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXRcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyT2JqZWN0LnJlbW92ZSgpOyAgICAgXG4gICAgICAgICAgICAgICAgc2lkZWJhck9iamVjdCA9IG51bGw7ICAgICAgIFxuICAgICAgICAgICAgfSwgMzc1KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYWxsTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVJdGVtXCIpO1xuICAgICAgICAgICAgYWxsTWVudXMuZm9yRWFjaCgobWVudSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgICAgICAgY3VycmVudGx5U2VsZWN0ZWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICAvLyBIYW5kbGUgbGF5b3V0IG1vZGlmaWNhdGlvbiBsb2dpY1xuICAgICAgICAgICAgYXBwZW5kQ29udGVudCh0YXJnZXQuaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBwcmludEJhc2ljTGF5b3V0LCBhcHBlbmRDb250ZW50IH0iLCJpbXBvcnQgUGl6emFNZW51IGZyb20gJy4uL2ltYWdlcy9waXp6YS1tZW51LnBuZyc7XG5cbmNvbnN0IHByaW50TGF5b3V0ID0gKGNvbnRlbnRCb3gpID0+IHtcbiAgICBsZXQgY29udGVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudEhvbGRlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LW1lbnVcIik7XG5cbiAgICBsZXQgcGl6emFJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphSW1hZ2Uuc3JjID0gUGl6emFNZW51O1xuXG4gICAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBwaXp6YUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emFJbWFnZS5zcmMgPSBQaXp6YU1lbnU7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGl6emFJbWFnZSk7XG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJUYXJ0dWZpIGUgZnVuZ2hpXCI7XG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9IFwiQ3JlbWEgZGUgdMOyZm9uYSBuZWdyYSwgdmFyaWF0IGRlIGZvcm1hdGdlcyBpIHhhbXBpbnlvbnMuXCI7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKVxuICAgIHBhcmFncmFwaC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgcGl6emFJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphSW1hZ2Uuc3JjID0gUGl6emFNZW51O1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBpenphSW1hZ2UpO1xuICAgIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCI0IFN0YWdpb25pXCI7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJUb23DoHF1ZXQsIG1venphcmVsbGEsIHhhbXBpbnlvbnMsIGdhbWJlcywgZ3VhbmNpYWxlIGkgcGVybmlsIGRvbMOnLlwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIHBpenphSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwaXp6YUltYWdlLnNyYyA9IFBpenphTWVudTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwaXp6YUltYWdlKTtcbiAgICBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiVGFnbGlhdGVsbGFcIjtcbiAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBcIlNhbHNhIGRlIHRvbcOgcXVldCBjb25maXRhdCBncm9jLCBtb3p6YXJlbGxhLCBNb3J0YWRlbMK3bGEgZGkgQm9sb2duYSBJR1AsIHN0cmFjY2lhdGVsbGEsIGZlc3R1YywgcnVjYSBpIG9saSBkZSBtYW5kYXJpbmEuXCI7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKVxuICAgIHBhcmFncmFwaC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgcGl6emFJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphSW1hZ2Uuc3JjID0gUGl6emFNZW51O1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBpenphSW1hZ2UpO1xuICAgIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJBbCBwYXJtaWdpYW5vXCI7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJUb23DoHF1ZXQsIG1venphcmVsbGEsIFBhcm1pZ2lhbm8gUmVnZ2lhbm8gRE9QLCBiYWPDsywgZm9ybWF0Z2UgVGFsZWdnaW8gRE9QIGkgYWxmw6BicmVnYS5cIjtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkZXNjXCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpXG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgIG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBwaXp6YUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emFJbWFnZS5zcmMgPSBQaXp6YU1lbnU7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGl6emFJbWFnZSk7XG4gICAgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIjcgRm9ybWFnZ2lcIjtcbiAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBcIlRvbcOgcXVldCwgbW96emFyZWxsYSwgVGFsZWdnaW8gRE9QLCBQZWNvcmlubyBSb21hbm8gRE9QLCBHb3Jnb256b2xhIERPUCwgTW96emFyZWxsYSBkZSBCw7pmYWxhIERPUCwgUGFybWlnaWFubyBSZWdnaWFubyBET1AgaSBmb3JtYXRnZSBNb250YXNpbyBET1AuXCI7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVzY1wiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKVxuICAgIHBhcmFncmFwaC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgcGl6emFJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBpenphSW1hZ2Uuc3JjID0gUGl6emFNZW51O1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHBpenphSW1hZ2UpO1xuICAgIHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJCaXNtYXJrXCI7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJUb23DoHF1ZXQsIG1venphcmVsbGEsIHBlcm5pbCBkb2zDpyBpIG91LlwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSlcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuXG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZChjb250ZW50SG9sZGVyKTtcbn07XG5cbmV4cG9ydCB7IHByaW50TGF5b3V0IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcHJpbnRCYXNpY0xheW91dCwgYXBwZW5kQ29udGVudCB9IGZyb20gJy4vc2NyaXB0cy9sYXlvdXRNYW5hZ2VyJ1xuXG4vLyBMb2FkIGJhc2ljIGxheW91dFxucHJpbnRCYXNpY0xheW91dCgpO1xuYXBwZW5kQ29udGVudChcImxpbmtIb21lXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9