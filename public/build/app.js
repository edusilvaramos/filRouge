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
/* harmony import */ var _public_assets_js_notification_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/js/notification.js */ "./public/assets/js/notification.js");
/* harmony import */ var _public_assets_js_notification_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_js_notification_js__WEBPACK_IMPORTED_MODULE_4__);

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */




console.log('This log comes from assets/app.js - welcome to AssetMapper! ');

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

/***/ "./public/assets/js/notification.js":
/*!******************************************!*\
  !*** ./public/assets/js/notification.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".lido").forEach(function (button) {
    button.addEventListener("click", function () {
      var _this = this;
      var notificationId = this.dataset.id;
      // Obtém o ID da notificação a partir do atributo "data-id" do botão clicado

      fetch("/notifications/read/".concat(notificationId), {
        method: "POST",
        // Faz uma requisição POST para marcar a notificação como lida
        headers: {
          "X-Requested-With": "XMLHttpRequest" // Indica que é uma requisição AJAX
        }
      }).then(function (response) {
        return response.json();
      }) // Converte a resposta para JSON
      .then(function (data) {
        if (data.success) {
          // Se a resposta indicar sucesso, remove a notificação da lista

          _this.closest("li").remove(); // Remove o elemento <li> mais próximo do botão clicado

          var badge = document.querySelector(".badge.bg-danger");
          // Seleciona o badge (contador de notificações) na navbar

          if (badge) {
            var count = parseInt(badge.innerText) - 1;
            // Diminui o número de notificações no badge

            if (count > 0) {
              badge.innerText = count; // Atualiza o número do badge
            } else {
              badge.remove(); // Remove o badge se não houver mais notificações
            }
          }
        }
      });
    });
  });
});

/***/ }),

/***/ "./public/assets/js/recentProjects.js":
/*!********************************************!*\
  !*** ./public/assets/js/recentProjects.js ***!
  \********************************************/
/***/ (() => {

// document.addEventListener("DOMContentLoaded", function () {
//     let projectButtons = document.querySelectorAll(".projectButton");

//     projectButtons.forEach((button) => {
//         button.addEventListener("click", function () {
//             let projectId = button.id;
//             console.log("clicado", projectId);

//             let listRecent = JSON.parse(localStorage.getItem("listRecent")) || [];

//             let oneWeek = 7 * 24 * 60 * 60 * 1000;
//             let now = Date.now();

//             listRecent = listRecent.filter(item => now - item.timestamp < oneWeek);

//             if (!listRecent.some(item => item.id === projectId)) {
//                 listRecent.push({ id: projectId, timestamp: now });
//             }

//             localStorage.setItem("listRecent", JSON.stringify(listRecent));

//             fetch('/save-recent', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ projects: listRecent })
//             }).then(response => response.json())
//               .then(data => console.log("Resposta do servidor:", data));
//         });
//     });
// });

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-c9daf1"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDaEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUU3QixJQUFJaUIsS0FBSyxHQUFHdEMsUUFBUSxDQUFDRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7VUFDdEQ7O1VBRUEsSUFBSW1DLEtBQUssRUFBRTtZQUNQLElBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDRixLQUFLLENBQUNHLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekM7O1lBRUEsSUFBSUYsS0FBSyxHQUFHLENBQUMsRUFBRTtjQUNYRCxLQUFLLENBQUNHLFNBQVMsR0FBR0YsS0FBSyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxNQUFNO2NBQ0hELEtBQUssQ0FBQ2pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQjtVQUNKO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNyQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9qcy9nZXRVc2VyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvanMvbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvanMvcmVjZW50UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9nZXRVc2VyLmpzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9yZWNlbnRQcm9qZWN0cy5qcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvanMvbm90aWZpY2F0aW9uLmpzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhICcpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbmNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoKTtcbi8vIFR1IHBldXggZW5yZWdpc3RyZXIgaWNpIGRlcyBjb250csO0bGV1cnMgc3VwcGzDqW1lbnRhaXJlc1xuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBsZXQgY29sbGVjdGlvbkhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZS1maWVsZHNcIik7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1lbXBsb3llXCIpO1xuICBpZiAoYWRkQnV0dG9uKSB7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcHJvdG90eXBlID0gY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LnByb3RvdHlwZTtcbiAgICAgIGxldCBpbmRleCA9IGNvbGxlY3Rpb25Ib2xkZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgbGV0IG5ld0ZpZWxkID0gcHJvdG90eXBlLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImlucHV0LWdyb3VwXCIsIFwibWItMlwiLCBcImVtcGxveWUtZW50cnlcIik7XG4gICAgICBkaXYuaW5uZXJIVE1MID1cbiAgICAgICAgbmV3RmllbGQgK1xuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciByZW1vdmUtZW1wbG95ZVwiPlJlbW92ZXI8L2J1dHRvbj4nO1xuICAgICAgY29sbGVjdGlvbkhvbGRlci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICBhdHRhY2hSZW1vdmVFdmVudChkaXYpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNoUmVtb3ZlRXZlbnQoZWxlbWVudCkge1xuICAgIGxldCByZW1vdmVCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtb3ZlLWVtcGxveWVcIik7XG4gICAgaWYgKHJlbW92ZUJ1dHRvbikge1xuICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVtcGxveWUtZW50cnlcIikuZm9yRWFjaChhdHRhY2hSZW1vdmVFdmVudCk7XG59KTtcbiIsIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlkb1wiKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG5vdGlmaWNhdGlvbklkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgLy8gT2J0w6ltIG8gSUQgZGEgbm90aWZpY2HDp8OjbyBhIHBhcnRpciBkbyBhdHJpYnV0byBcImRhdGEtaWRcIiBkbyBib3TDo28gY2xpY2Fkb1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmZXRjaChgL25vdGlmaWNhdGlvbnMvcmVhZC8ke25vdGlmaWNhdGlvbklkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBGYXogdW1hIHJlcXVpc2nDp8OjbyBQT1NUIHBhcmEgbWFyY2FyIGEgbm90aWZpY2HDp8OjbyBjb21vIGxpZGFcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsIC8vIEluZGljYSBxdWUgw6kgdW1hIHJlcXVpc2nDp8OjbyBBSkFYXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gQ29udmVydGUgYSByZXNwb3N0YSBwYXJhIEpTT05cbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2UgYSByZXNwb3N0YSBpbmRpY2FyIHN1Y2Vzc28sIHJlbW92ZSBhIG5vdGlmaWNhw6fDo28gZGEgbGlzdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VzdChcImxpXCIpLnJlbW92ZSgpOyAvLyBSZW1vdmUgbyBlbGVtZW50byA8bGk+IG1haXMgcHLDs3hpbW8gZG8gYm90w6NvIGNsaWNhZG9cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFkZ2UuYmctZGFuZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY2lvbmEgbyBiYWRnZSAoY29udGFkb3IgZGUgbm90aWZpY2HDp8O1ZXMpIG5hIG5hdmJhclxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSBwYXJzZUludChiYWRnZS5pbm5lclRleHQpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpbWludWkgbyBuw7ptZXJvIGRlIG5vdGlmaWNhw6fDtWVzIG5vIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbm5lclRleHQgPSBjb3VudDsgLy8gQXR1YWxpemEgbyBuw7ptZXJvIGRvIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLnJlbW92ZSgpOyAvLyBSZW1vdmUgbyBiYWRnZSBzZSBuw6NvIGhvdXZlciBtYWlzIG5vdGlmaWNhw6fDtWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuIiwiLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGxldCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEJ1dHRvblwiKTtcblxuLy8gICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuLy8gICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBidXR0b24uaWQ7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNhZG9cIiwgcHJvamVjdElkKTtcblxuLy8gICAgICAgICAgICAgbGV0IGxpc3RSZWNlbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdFJlY2VudFwiKSkgfHwgW107XG5cbi8vICAgICAgICAgICAgIGxldCBvbmVXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vLyAgICAgICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcblxuLy8gICAgICAgICAgICAgbGlzdFJlY2VudCA9IGxpc3RSZWNlbnQuZmlsdGVyKGl0ZW0gPT4gbm93IC0gaXRlbS50aW1lc3RhbXAgPCBvbmVXZWVrKTtcblxuLy8gICAgICAgICAgICAgaWYgKCFsaXN0UmVjZW50LnNvbWUoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9qZWN0SWQpKSB7XG4vLyAgICAgICAgICAgICAgICAgbGlzdFJlY2VudC5wdXNoKHsgaWQ6IHByb2plY3RJZCwgdGltZXN0YW1wOiBub3cgfSk7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGlzdFJlY2VudFwiLCBKU09OLnN0cmluZ2lmeShsaXN0UmVjZW50KSk7XG5cbi8vICAgICAgICAgICAgIGZldGNoKCcvc2F2ZS1yZWNlbnQnLCB7XG4vLyAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByb2plY3RzOiBsaXN0UmVjZW50IH0pXG4vLyAgICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhcIlJlc3Bvc3RhIGRvIHNlcnZpZG9yOlwiLCBkYXRhKSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb2xsZWN0aW9uSG9sZGVyIiwicXVlcnlTZWxlY3RvciIsImFkZEJ1dHRvbiIsInByb3RvdHlwZSIsImRhdGFzZXQiLCJpbmRleCIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3RmllbGQiLCJyZXBsYWNlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYXR0YWNoUmVtb3ZlRXZlbnQiLCJlbGVtZW50IiwicmVtb3ZlQnV0dG9uIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJfdGhpcyIsIm5vdGlmaWNhdGlvbklkIiwiaWQiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjb3VudCIsInBhcnNlSW50IiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==