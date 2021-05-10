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

/***/ "./src/js/deleteApiRequest.js":
/*!************************************!*\
  !*** ./src/js/deleteApiRequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteApiRequest)
/* harmony export */ });
function deleteApiRequest(url, id) {
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', url + id.toString());
  xhr.send();
}
;

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
/* harmony import */ var _deleteApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteApiRequest */ "./src/js/deleteApiRequest.js");
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
      b2.addEventListener("click", _deleteApiRequest__WEBPACK_IMPORTED_MODULE_0__.default.bind(this, 'http://localhost:8000/api/v1/cities/', element.id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9Db25zb2xlTG9nSXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvVGVzdEpzLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2RlbGV0ZUFwaVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvZ2VuZXJhdGVUYWJsZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9nZW5lcmF0ZVRhYmxlSGVhZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9nZXRKU09OLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJUZXN0SlMiLCJkZWxldGVBcGlSZXF1ZXN0IiwidXJsIiwiaWQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJ0b1N0cmluZyIsInNlbmQiLCJnZW5lcmF0ZVRhYmxlIiwidGFibGUiLCJkYXRhIiwiZWxlbWVudCIsInJvdyIsImluc2VydFJvdyIsImtleSIsImNlbGwiLCJpbnNlcnRDZWxsIiwidGV4dCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImIiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2VsbDIiLCJiMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsInRoZWFkIiwiY3JlYXRlVEhlYWQiLCJ0aCIsImdldEpTT04iLCJjYWxsYmFjayIsInJlc3BvbnNlVHlwZSIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwicXVlcnlTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJkYXRhUmVjb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ0ZjLFNBQVNHLE1BQVQsR0FBa0I7QUFDL0JGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ0ZjLFNBQVNFLGdCQUFULENBQTBCQyxHQUExQixFQUErQkMsRUFBL0IsRUFBbUM7QUFDOUMsTUFBTUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBRCxLQUFHLENBQUNFLElBQUosQ0FBUyxRQUFULEVBQW1CSixHQUFHLEdBQUdDLEVBQUUsQ0FBQ0ksUUFBSCxFQUF6QjtBQUNBSCxLQUFHLENBQUNJLElBQUo7QUFDSDtBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ0E7QUFDZSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFBQSw2Q0FDM0JBLElBRDJCO0FBQUE7O0FBQUE7QUFDakQsd0RBQTRCO0FBQUEsVUFBakJDLE9BQWlCO0FBQzFCLFVBQU1DLEdBQUcsR0FBR0gsS0FBSyxDQUFDSSxTQUFOLEVBQVo7QUFDQWhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZYSxPQUFaOztBQUNBLFdBQUssSUFBTUcsR0FBWCxJ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O1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBUixtREFBTTtBQUNOZ0MsaURBQU8sQ0FBQyxFQUFELEVBQUssVUFBQ3JCLElBQUQsRUFBVTtBQUNwQmIsU0FBTyxDQUFDQyxHQUFSLENBQVlZLElBQVo7QUFDRCxDQUZNLENBQVA7QUFJQXFCLGlEQUFPLENBQUMscUNBQUQsRUFDTCxVQUFDTSxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDaEIsTUFBSUQsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJFLFNBQUssaUNBQTBCRixHQUExQixFQUFMO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTTVCLEtBQUssR0FBR1MsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0EsUUFBTTlCLElBQUksR0FBRytCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhSixPQUFPLENBQUM1QixJQUFSLENBQWEsQ0FBYixDQUFiLENBQWI7QUFDQSxRQUFNaUMsV0FBVyxHQUFHTCxPQUFPLENBQUM1QixJQUE1QjtBQUVBaUIsK0RBQWlCLENBQUNsQixLQUFELEVBQVFDLElBQVIsQ0FBakI7QUFDQUYsMkRBQWEsQ0FBQ0MsS0FBRCxFQUFRa0MsV0FBUixDQUFiO0FBQ0Q7QUFDRixDQVpJLENBQVA7QUFhQWhELHlEQUFZLENBQUMsMkJBQUQsQ0FBWixDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnNvbGVMb2dJdChtZXNzYWdlKSB7XHJcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xyXG4gIGNvbnNvbGUubG9nKCdMb2FkZWQnKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVBcGlSZXF1ZXN0KHVybCwgaWQpIHtcclxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ0RFTEVURScsIHVybCArIGlkLnRvU3RyaW5nKCkpO1xyXG4gICAgeGhyLnNlbmQoKTtcclxufTtcclxuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXHJcbmltcG9ydCBkZWxldGVBcGlSZXF1ZXN0IGZyb20gXCIuL2RlbGV0ZUFwaVJlcXVlc3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xyXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBkYXRhKSB7XHJcbiAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRba2V5XSk7XHJcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGIuaW5uZXJUZXh0ID0gJ0VkaXQnO1xyXG4gICAgY2VsbC5hcHBlbmRDaGlsZChiKTtcclxuICAgIGNvbnN0IGNlbGwyID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgIGNvbnN0IGIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBiMi5pbm5lclRleHQgPSAnRGVsZXRlJztcclxuICAgIGIyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVBcGlSZXF1ZXN0LmJpbmQodGhpcywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzLycsIGVsZW1lbnQuaWQpKTtcclxuICAgIGNlbGwyLmFwcGVuZENoaWxkKGIyKTtcclxuICB9XHJcbn1cclxuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSkge1xyXG4gIGNvbnN0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcclxuICBjb25zdCByb3cgPSB0aGVhZC5pbnNlcnRSb3coKTtcclxuICBmb3IgKGNvbnN0IGtleSBvZiBkYXRhKSB7XHJcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoa2V5KTtcclxuICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcclxuICB9XHJcbn1cclxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcclxuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xyXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0geGhyO1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIGNhbGxiYWNrKG51bGwsIHhoci5yZXNwb25zZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB4aHIuc2VuZCgpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXHJcblxyXG5pbXBvcnQgVGVzdEpTIGZyb20gJy4vVGVzdEpzLmpzJztcclxuaW1wb3J0IENvbnNvbGVMb2dJdCBmcm9tICcuL0NvbnNvbGVMb2dJdC5qcyc7XHJcbmltcG9ydCBnZXRKU09OIGZyb20gJy4vZ2V0SlNPTic7XHJcbmltcG9ydCBnZW5lcmF0ZVRhYmxlSGVhZCBmcm9tICcuL2dlbmVyYXRlVGFibGVIZWFkJztcclxuaW1wb3J0IGdlbmVyYXRlVGFibGUgZnJvbSAnLi9nZW5lcmF0ZVRhYmxlJztcclxuXHJcblRlc3RKUygpO1xyXG5nZXRKU09OKCcnLCAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59KTtcclxuXHJcbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcclxuICAoZXJyLCByZWNvcmRzKSA9PiB7XHJcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XHJcbiAgICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VudCB3cm9uZzogJHtlcnJ9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XHJcbiAgICAgIGNvbnN0IGRhdGFSZWNvcmRzID0gcmVjb3Jkcy5kYXRhO1xyXG5cclxuICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xyXG4gICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhUmVjb3Jkcyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbkNvbnNvbGVMb2dJdCgndGhpcyB3b3JrZWQgaW4gdGhlIGJ1bmRsZScpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9