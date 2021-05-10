/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log('Loaded');
}

/***/ }),

/***/ "./src/js/deleteButton.js":
/*!********************************!*\
  !*** ./src/js/deleteButton.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteButton)
/* harmony export */ });
/* global XMLHttpRequest */
function deleteButton(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', url, true);
  xhr.responseType = 'json';
  xhr.send();
}

/***/ }),

/***/ "./src/js/generateTable.js":
/*!*********************************!*\
  !*** ./src/js/generateTable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTable)
/* harmony export */ });
/* harmony import */ var _deleteButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteButton */ "./src/js/deleteButton.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* global document */

function generateTable(table, data) {
  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      var row = table.insertRow();
      console.log(element);
      var id = element.id;

      for (var key in element) {
        var _cell = row.insertCell();

        var text = document.createTextNode(element[key]);

        _cell.appendChild(text);
      }

      var cell = row.insertCell();
      var b = document.createElement('button');
      b.innerText = 'Edit';
      cell.appendChild(b);
      var cell2 = row.insertCell();
      var b2 = document.createElement('button');
      b2.innerText = 'Delete';
      b2.onclick = (0,_deleteButton__WEBPACK_IMPORTED_MODULE_0__.default)('http://localhost:8000/api/v1/cities' + id.toString());
      cell2.appendChild(b2);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/js/generateTableHead.js":
/*!*************************************!*\
  !*** ./src/js/generateTableHead.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTableHead)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* global document */
function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var th = document.createElement('th');
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
/* global XMLHttpRequest */
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs.js */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt.js */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _generateTableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateTableHead */ "./src/js/generateTableHead.js");
/* harmony import */ var _generateTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateTable */ "./src/js/generateTable.js");
/* global document */





(0,_TestJs_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    (0,_generateTableHead__WEBPACK_IMPORTED_MODULE_3__.default)(table, data);
    (0,_generateTable__WEBPACK_IMPORTED_MODULE_4__.default)(table, dataRecords);
  }
});
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9Db25zb2xlTG9nSXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvVGVzdEpzLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2RlbGV0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9nZW5lcmF0ZVRhYmxlLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2dlbmVyYXRlVGFibGVIZWFkLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb25zb2xlTG9nSXQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIlRlc3RKUyIsImRlbGV0ZUJ1dHRvbiIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJnZW5lcmF0ZVRhYmxlIiwidGFibGUiLCJkYXRhIiwiZWxlbWVudCIsInJvdyIsImluc2VydFJvdyIsImlkIiwia2V5IiwiY2VsbCIsImluc2VydENlbGwiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJjZWxsMiIsImIyIiwib25jbGljayIsInRvU3RyaW5nIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwidGgiLCJnZXRKU09OIiwiY2FsbGJhY2siLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsImVyciIsInJlY29yZHMiLCJhbGVydCIsInF1ZXJ5U2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZGF0YVJlY29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNGYyxTQUFTRyxNQUFULEdBQWtCO0FBQy9CRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUNlLFNBQVNFLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVMsUUFBVCxFQUFtQkgsR0FBbkIsRUFBd0IsSUFBeEI7QUFDQUMsS0FBRyxDQUFDRyxZQUFKLEdBQW1CLE1BQW5CO0FBQ0FILEtBQUcsQ0FBQ0ksSUFBSjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFFZSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFBQSw2Q0FDM0JBLElBRDJCO0FBQUE7O0FBQUE7QUFDakQsd0RBQTRCO0FBQUEsVUFBakJDLE9BQWlCO0FBQzFCLFVBQU1DLEdBQUcsR0FBR0gsS0FBSyxDQUFDSSxTQUFOLEVBQVo7QUFDQWYsYUFBTyxDQUFDQyxHQUFSLENBQVlZLE9BQVo7QUFDQSxVQUFNRyxFQUFFLEdBQUdILE9BQU8sQ0FBQ0csRUFB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QSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFQLG1EQUFNO0FBQ05pQyxpREFBTyxDQUFDLEVBQUQsRUFBSyxVQUFDdkIsSUFBRCxFQUFVO0FBQ3BCWixTQUFPLENBQUNDLEdBQVIsQ0FBWVcsSUFBWjtBQUNELENBRk0sQ0FBUDtBQUlBdUIsaURBQU8sQ0FBQyxxQ0FBRCxFQUNMLFVBQUNLLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUNoQixNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQkUsU0FBSyxpQ0FBMEJGLEdBQTFCLEVBQUw7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNN0IsS0FBSyxHQUFHVSxRQUFRLENBQUNzQixhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQSxRQUFNL0IsSUFBSSxHQUFHZ0MsTUFBTSxDQUFDQyxJQUFQLENBQWFKLE9BQU8sQ0FBQzdCLElBQVIsQ0FBYSxDQUFiLENBQWIsQ0FBYjtBQUNBLFFBQU1rQyxXQUFXLEdBQUdMLE9BQU8sQ0FBQzdCLElBQTVCO0FBRUFtQiwrREFBaUIsQ0FBQ3BCLEtBQUQsRUFBUUMsSUFBUixDQUFqQjtBQUNBRiwyREFBYSxDQUFDQyxLQUFELEVBQVFtQyxXQUFSLENBQWI7QUFDRDtBQUNGLENBWkksQ0FBUDtBQWFBaEQseURBQVksQ0FBQywyQkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcclxuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XHJcbiAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xyXG59XHJcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVCdXR0b24odXJsKSB7XHJcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdERUxFVEUnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgIHhoci5zZW5kKCk7XHJcbn1cclxuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXHJcbmltcG9ydCBkZWxldGVCdXR0b24gZnJvbSAnLi9kZWxldGVCdXR0b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xyXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgY29uc3QgaWQgPSBlbGVtZW50LmlkO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRba2V5XSk7XHJcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGIuaW5uZXJUZXh0ID0gJ0VkaXQnO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChiKTtcclxuICAgIGNvbnN0IGNlbGwyID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgIGNvbnN0IGIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBiMi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgIGIyLm9uY2xpY2sgPSBkZWxldGVCdXR0b24oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJysgaWQudG9TdHJpbmcoKSk7XHJcbiAgICBjZWxsMi5hcHBlbmRDaGlsZChiMik7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcclxuICBjb25zdCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XHJcbiAgZm9yIChjb25zdCBrZXkgb2YgZGF0YSkge1xyXG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XHJcbiAgICB0aC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHhocjtcclxuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2soc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgeGhyLnNlbmQoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xyXG5cclxuaW1wb3J0IFRlc3RKUyBmcm9tICcuL1Rlc3RKcy5qcyc7XHJcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSAnLi9Db25zb2xlTG9nSXQuanMnO1xyXG5pbXBvcnQgZ2V0SlNPTiBmcm9tICcuL2dldEpTT04nO1xyXG5pbXBvcnQgZ2VuZXJhdGVUYWJsZUhlYWQgZnJvbSAnLi9nZW5lcmF0ZVRhYmxlSGVhZCc7XHJcbmltcG9ydCBnZW5lcmF0ZVRhYmxlIGZyb20gJy4vZ2VuZXJhdGVUYWJsZSc7XHJcblxyXG5UZXN0SlMoKTtcclxuZ2V0SlNPTignJywgKGRhdGEpID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcblxyXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXHJcbiAgKGVyciwgcmVjb3JkcykgPT4ge1xyXG4gICAgaWYgKGVyciAhPT0gbnVsbCkge1xyXG4gICAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICR7ZXJyfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xyXG4gICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcclxuXHJcbiAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcclxuICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5Db25zb2xlTG9nSXQoJ3RoaXMgd29ya2VkIGluIHRoZSBidW5kbGUnKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==