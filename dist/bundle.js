/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

// ------------------ Выскакивание описания сайта--------------------//
// Определение узлов
var description = document.querySelector('.types-of-rooms-section__description');
// Проверка положения прокрутки и выдвижение узла description при необходимости
var descriptionViewControl = setInterval(function () {
    if (description.getBoundingClientRect().top + 50 < document.documentElement.clientHeight
        && description.getBoundingClientRect().top > 0) {
        description.style.marginLeft = '0';
        description.style.transition = 'all 500ms';
        clearInterval(descriptionViewControl);
    }
}, 1000);
//-------------------- Перелистывания карусели---------------------//
// Определение узлов
var carouselArrows = document.querySelectorAll('.carousel._first .caruosel__arrow');
var carousel = document.querySelector('.carousel._first .carousel__main');
var flipper = document.querySelector('.carousel._first .carousel__flipper');
// Функция перелистывания карусели
function flipping(target) {
    if (target.className === 'carousel__flipper__radio') {
        carousel.className = "carousel__main ".concat(target.id);
    }
    else if (target.classList.contains('caruosel__arrow')) {
        if (target.classList.contains('_left')) {
            if (carousel.classList.contains('second-image')) {
                carousel.className = "carousel__main first-image";
            }
            else if (carousel.classList.contains('third-image')) {
                carousel.className = "carousel__main second-image";
            }
        }
        else if (target.classList.contains('_right')) {
            if (carousel.classList.contains('first-image')) {
                carousel.className = "carousel__main second-image";
            }
            else if (carousel.classList.contains('second-image')) {
                carousel.className = "carousel__main third-image";
            }
        }
    }
}
// Перелистывание карусели при помощи перелистывателя
flipper.addEventListener('click', function (event) {
    flipping(event.target);
});
// Перелистывание карусели при помощи стрелок
carouselArrows.forEach(function (arrow) {
    arrow.addEventListener('click', function (event) {
        flipping(event.target);
    });
});
// ------------------- Выскакивание принципов ---------------- //
// Определение узлов
var principleImages = document.querySelectorAll('.principles__principle__image');
principleImages.forEach(function (principleImage) {
    var principleImageViewControl = setInterval(function () {
        if (principleImage.getBoundingClientRect().top + 25 < document.documentElement.clientHeight
            && principleImage.getBoundingClientRect().top > 0) {
            principleImage.style.marginLeft = '0';
            principleImage.style.marginRight = '0';
            principleImage.style.transition = 'all 500ms ease-out';
            clearInterval(principleImageViewControl);
        }
    }, 1000);
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map