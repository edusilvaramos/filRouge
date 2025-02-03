(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _public_assets_js_getUser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/js/getUser.js */ "./public/assets/js/getUser.js");
/* harmony import */ var _public_assets_js_getUser_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_js_getUser_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_js_recentProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/js/recentProjects.js */ "./public/assets/js/recentProjects.js");
/* harmony import */ var _public_assets_js_recentProjects_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_js_recentProjects_js__WEBPACK_IMPORTED_MODULE_3__);

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */



console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)();
// Tu peux enregistrer ici des contrôleurs supplémentaires
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./public/assets/js/getUser.js":
/*!*************************************!*\
  !*** ./public/assets/js/getUser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener("DOMContentLoaded", function () {
  var collectionHolder = document.querySelector("#employe-fields");
  var addButton = document.querySelector("#add-employe");
  if (addButton) {
    addButton.addEventListener("click", function () {
      var prototype = collectionHolder.dataset.prototype;
      var index = collectionHolder.children.length;
      var newField = prototype.replace(/__name__/g, index);
      var div = document.createElement("div");
      div.classList.add("input-group", "mb-2", "employe-entry");
      div.innerHTML = newField + '<button type="button" class="btn btn-danger remove-employe">Remover</button>';
      collectionHolder.appendChild(div);
      attachRemoveEvent(div);
    });
  }
  function attachRemoveEvent(element) {
    var removeButton = element.querySelector(".remove-employe");
    if (removeButton) {
      removeButton.addEventListener("click", function () {
        element.remove();
      });
    }
  }
  document.querySelectorAll(".employe-entry").forEach(attachRemoveEvent);
});

/***/ }),

/***/ "./public/assets/js/recentProjects.js":
/*!********************************************!*\
  !*** ./public/assets/js/recentProjects.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener("DOMContentLoaded", function () {
  var projectButtons = document.querySelectorAll(".projectButton");
  projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var projectId = button.id;
      console.log("clicado", projectId);
      var listRecent = JSON.parse(localStorage.getItem("listRecent")) || [];
      var oneWeek = 7 * 24 * 60 * 60 * 1000;
      var now = Date.now();

      // Filtrar projetos que ainda não expiraram
      listRecent = listRecent.filter(function (item) {
        return now - item.timestamp < oneWeek;
      });

      // Verifica se o ID já está salvo para evitar duplicatas
      if (!listRecent.some(function (item) {
        return item.id === projectId;
      })) {
        listRecent.push({
          id: projectId,
          timestamp: now
        });
      }

      // Salva a lista no localStorage
      localStorage.setItem("listRecent", JSON.stringify(listRecent));

      // 🔥 Envia a lista para o Symfony via AJAX
      fetch('/save-recent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          projects: listRecent
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return console.log("Resposta do servidor:", data);
      });
    });
  });
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-a3a3e2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQyxJQUFJO1FBQUEsT0FBSUgsR0FBRyxHQUFHRyxJQUFJLENBQUNDLFNBQVMsR0FBR0wsT0FBTztNQUFBLEVBQUM7O01BRXRFO01BQ0EsSUFBSSxDQUFDTCxVQUFVLENBQUNXLElBQUksQ0FBQyxVQUFBRixJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDVixFQUFFLEtBQUtELFNBQVM7TUFBQSxFQUFDLEVBQUU7UUFDakRFLFVBQVUsQ0FBQ1ksSUFBSSxDQUFDO1VBQUViLEVBQUUsRUFBRUQsU0FBUztVQUFFWSxTQUFTLEVBQUVKO1FBQUksQ0FBQyxDQUFDO01BQ3REOztNQUVBO01BQ0FILFlBQVksQ0FBQ1UsT0FBTyxDQUFDLFlBQVksRUFBRVosSUFBSSxDQUFDYSxTQUFTLENBQUNkLFVBQVUsQ0FBQyxDQUFDOztNQUU5RDtNQUNBZSxLQUFLLENBQUMsY0FBYyxFQUFFO1FBQ2xCQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7VUFDTCxjQUFjLEVBQUU7UUFDcEIsQ0FBQztRQUNEQyxJQUFJLEVBQUVqQixJQUFJLENBQUNhLFNBQVMsQ0FBQztVQUFFSyxRQUFRLEVBQUVuQjtRQUFXLENBQUM7TUFDakQsQ0FBQyxDQUFDLENBQUNvQixJQUFJLENBQUMsVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQUcsSUFBSTtRQUFBLE9BQUl2RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRXNELElBQUksQ0FBQztNQUFBLEVBQUM7SUFDL0QsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNuQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9qcy9nZXRVc2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvanMvcmVjZW50UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9nZXRVc2VyLmpzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9yZWNlbnRQcm9qZWN0cy5qcyc7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcCgpO1xuLy8gVHUgcGV1eCBlbnJlZ2lzdHJlciBpY2kgZGVzIGNvbnRyw7RsZXVycyBzdXBwbMOpbWVudGFpcmVzXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjb2xsZWN0aW9uSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llLWZpZWxkc1wiKTtcbiAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWVtcGxveWVcIik7XG4gIGlmIChhZGRCdXR0b24pIHtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBwcm90b3R5cGUgPSBjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQucHJvdG90eXBlO1xuICAgICAgbGV0IGluZGV4ID0gY29sbGVjdGlvbkhvbGRlci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBsZXQgbmV3RmllbGQgPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZ3JvdXBcIiwgXCJtYi0yXCIsIFwiZW1wbG95ZS1lbnRyeVwiKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPVxuICAgICAgICBuZXdGaWVsZCArXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIHJlbW92ZS1lbXBsb3llXCI+UmVtb3ZlcjwvYnV0dG9uPic7XG4gICAgICBjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgIGF0dGFjaFJlbW92ZUV2ZW50KGRpdik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2hSZW1vdmVFdmVudChlbGVtZW50KSB7XG4gICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtZW1wbG95ZVwiKTtcbiAgICBpZiAocmVtb3ZlQnV0dG9uKSB7XG4gICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZW1wbG95ZS1lbnRyeVwiKS5mb3JFYWNoKGF0dGFjaFJlbW92ZUV2ZW50KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEJ1dHRvblwiKTtcblxuICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBidXR0b24uaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNhZG9cIiwgcHJvamVjdElkKTtcblxuICAgICAgICAgICAgbGV0IGxpc3RSZWNlbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFJlY2VudFwiKSkgfHwgW107XG5cbiAgICAgICAgICAgIGxldCBvbmVXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgLy8gRmlsdHJhciBwcm9qZXRvcyBxdWUgYWluZGEgbsOjbyBleHBpcmFyYW1cbiAgICAgICAgICAgIGxpc3RSZWNlbnQgPSBsaXN0UmVjZW50LmZpbHRlcihpdGVtID0+IG5vdyAtIGl0ZW0udGltZXN0YW1wIDwgb25lV2Vlayk7XG5cbiAgICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gSUQgasOhIGVzdMOhIHNhbHZvIHBhcmEgZXZpdGFyIGR1cGxpY2F0YXNcbiAgICAgICAgICAgIGlmICghbGlzdFJlY2VudC5zb21lKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvamVjdElkKSkge1xuICAgICAgICAgICAgICAgIGxpc3RSZWNlbnQucHVzaCh7IGlkOiBwcm9qZWN0SWQsIHRpbWVzdGFtcDogbm93IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTYWx2YSBhIGxpc3RhIG5vIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0UmVjZW50XCIsIEpTT04uc3RyaW5naWZ5KGxpc3RSZWNlbnQpKTtcblxuICAgICAgICAgICAgLy8g8J+UpSBFbnZpYSBhIGxpc3RhIHBhcmEgbyBTeW1mb255IHZpYSBBSkFYXG4gICAgICAgICAgICBmZXRjaCgnL3NhdmUtcmVjZW50Jywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcm9qZWN0czogbGlzdFJlY2VudCB9KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coXCJSZXNwb3N0YSBkbyBzZXJ2aWRvcjpcIiwgZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29sbGVjdGlvbkhvbGRlciIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRCdXR0b24iLCJwcm90b3R5cGUiLCJkYXRhc2V0IiwiaW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCIsIm5ld0ZpZWxkIiwicmVwbGFjZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImF0dGFjaFJlbW92ZUV2ZW50IiwiZWxlbWVudCIsInJlbW92ZUJ1dHRvbiIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicHJvamVjdEJ1dHRvbnMiLCJidXR0b24iLCJwcm9qZWN0SWQiLCJpZCIsImxpc3RSZWNlbnQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25lV2VlayIsIm5vdyIsIkRhdGUiLCJmaWx0ZXIiLCJpdGVtIiwidGltZXN0YW1wIiwic29tZSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInByb2plY3RzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9