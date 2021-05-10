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
    /*
          let data = Object.keys(records.data[0]);
          generateTable(table, records.data); // generate the table first
          generateTableHead(table, data); // then the head
           */
  }
});
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9Db25zb2xlTG9nSXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvVGVzdEpzLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2RlbGV0ZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9nZW5lcmF0ZVRhYmxlLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2dlbmVyYXRlVGFibGVIZWFkLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb25zb2xlTG9nSXQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIlRlc3RKUyIsImRlbGV0ZUJ1dHRvbiIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJnZW5lcmF0ZVRhYmxlIiwidGFibGUiLCJkYXRhIiwiZWxlbWVudCIsInJvdyIsImluc2VydFJvdyIsImlkIiwia2V5IiwiY2VsbCIsImluc2VydENlbGwiLCJ0ZXh0IiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJjZWxsMiIsImIyIiwib25jbGljayIsInRvU3RyaW5nIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwidGgiLCJnZXRKU09OIiwiY2FsbGJhY2siLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsImVyciIsInJlY29yZHMiLCJhbGVydCIsInF1ZXJ5U2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZGF0YVJlY29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNGYyxTQUFTRyxNQUFULEdBQWtCO0FBQy9CRixTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUNlLFNBQVNFLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVMsUUFBVCxFQUFtQkgsR0FBbkIsRUFBd0IsSUFBeEI7QUFDQUMsS0FBRyxDQUFDRyxZQUFKLEdBQW1CLE1BQW5CO0FBQ0FILEtBQUcsQ0FBQ0ksSUFBSjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05EO0FBQ0E7QUFFZSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFBQSw2Q0FDM0JBLElBRDJCO0FBQUE7O0FBQUE7QUFDakQsd0RBQTRCO0FBQUEsVUFBakJDLE9BQWlCO0FBQzFCLFVBQU1DLEdBQUcsR0FBR0gsS0FBSyxDQUFDSSxTQUFOLEVBQVo7QUFDQWYsYUFBTyxDQUFDQyxHQUFSLENBQVlZLE9BQVo7QUFDQSxVQUFNRyxFQUFFLEdBQUdILE9BQU8sQ0FBQ0csRUFB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QUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFQLG1EQUFNO0FBQ05pQyxpREFBTyxDQUFDLEVBQUQsRUFBSyxVQUFDdkIsSUFBRCxFQUFVO0FBQ3BCWixTQUFPLENBQUNDLEdBQVIsQ0FBWVcsSUFBWjtBQUNELENBRk0sQ0FBUDtBQUlBdUIsaURBQU8sQ0FBQyxxQ0FBRCxFQUNMLFVBQUNLLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUNoQixNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQkUsU0FBSyxpQ0FBMEJGLEdBQTFCLEVBQUw7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNN0IsS0FBSyxHQUFHVSxRQUFRLENBQUNzQixhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQSxRQUFNL0IsSUFBSSxHQUFHZ0MsTUFBTSxDQUFDQyxJQUFQLENBQWFKLE9BQU8sQ0FBQzdCLElBQVIsQ0FBYSxDQUFiLENBQWIsQ0FBYjtBQUNBLFFBQU1rQyxXQUFXLEdBQUdMLE9BQU8sQ0FBQzdCLElBQTVCO0FBRUFtQiwrREFBaUIsQ0FBQ3BCLEtBQUQsRUFBUUMsSUFBUixDQUFqQjtBQUNBRiwyREFBYSxDQUFDQyxLQUFELEVBQVFtQyxXQUFSLENBQWI7QUFDQTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0s7QUFDRixDQWpCSSxDQUFQO0FBa0JBaEQseURBQVksQ0FBQywyQkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcclxuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XHJcbiAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xyXG59XHJcbiIsIi8qIGdsb2JhbCBYTUxIdHRwUmVxdWVzdCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVCdXR0b24odXJsKSB7XHJcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdERUxFVEUnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgIHhoci5zZW5kKCk7XHJcbn1cclxuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5pbXBvcnQgZGVsZXRlQnV0dG9uIGZyb20gJy4vZGVsZXRlQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZGF0YSkge1xuICAgIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIGNvbnN0IGlkID0gZWxlbWVudC5pZDtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBlbGVtZW50KSB7XG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB9XG4gICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGIuaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQoYik7XG4gICAgY29uc3QgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgIGNvbnN0IGIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYjIuaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XG4gICAgYjIub25jbGljayA9IGRlbGV0ZUJ1dHRvbignaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9jaXRpZXMnKyBpZC50b1N0cmluZygpKTtcbiAgICBjZWxsMi5hcHBlbmRDaGlsZChiMik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XHJcbiAgY29uc3QgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xyXG4gIGNvbnN0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xyXG4gIGZvciAoY29uc3Qga2V5IG9mIGRhdGEpIHtcclxuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xyXG4gICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcclxuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0geGhyO1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIGNhbGxiYWNrKG51bGwsIHhoci5yZXNwb25zZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB4aHIuc2VuZCgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRlc3RKUyBmcm9tICcuL1Rlc3RKcy5qcyc7XHJcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSAnLi9Db25zb2xlTG9nSXQuanMnO1xyXG5pbXBvcnQgZ2V0SlNPTiBmcm9tICcuL2dldEpTT04nO1xyXG5pbXBvcnQgZ2VuZXJhdGVUYWJsZUhlYWQgZnJvbSAnLi9nZW5lcmF0ZVRhYmxlSGVhZCc7XHJcbmltcG9ydCBnZW5lcmF0ZVRhYmxlIGZyb20gJy4vZ2VuZXJhdGVUYWJsZSc7XHJcblxyXG5UZXN0SlMoKTtcclxuZ2V0SlNPTignJywgKGRhdGEpID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcblxyXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXHJcbiAgKGVyciwgcmVjb3JkcykgPT4ge1xyXG4gICAgaWYgKGVyciAhPT0gbnVsbCkge1xyXG4gICAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICR7ZXJyfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xyXG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xyXG4gICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcclxuXHJcbiAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcclxuICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xyXG4gICAgICAvKlxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKHJlY29yZHMuZGF0YVswXSk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIHJlY29yZHMuZGF0YSk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxyXG4gICAgICAgICAgICBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7IC8vIHRoZW4gdGhlIGhlYWRcclxuICAgICAgICAgICAgICovXHJcbiAgICB9XHJcbiAgfSk7XHJcbkNvbnNvbGVMb2dJdCgndGhpcyB3b3JrZWQgaW4gdGhlIGJ1bmRsZScpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9