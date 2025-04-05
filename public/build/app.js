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
/* harmony import */ var _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-chartjs/dist/controller.js */ "./node_modules/@symfony/ux-chartjs/dist/controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./node_modules/@symfony/ux-live-component/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./node_modules/@symfony/ux-live-component/dist/live.min.css");
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./node_modules/@symfony/ux-turbo/dist/turbo_controller.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"],
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
/* harmony import */ var _assets_js_getUser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../assets/js/getUser.js */ "./assets/js/getUser.js");
/* harmony import */ var _assets_js_getUser_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_getUser_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js_getEmploye_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../assets/js/getEmploye.js */ "./assets/js/getEmploye.js");
/* harmony import */ var _assets_js_getEmploye_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_js_getEmploye_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_js_notification_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../assets/js/notification.js */ "./assets/js/notification.js");
/* harmony import */ var _assets_js_notification_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_notification_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_js_comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../assets/js/comment.js */ "./assets/js/comment.js");
/* harmony import */ var _assets_js_comment_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_js_comment_js__WEBPACK_IMPORTED_MODULE_5__);

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

// import '../public/assets/js/getUser.js';
// import '../public/assets/js/getEmploye.js';
// import '../public/assets/js/notification.js';
// import '../public/assets/js/comment.js';





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

window.application = app;

/***/ }),

/***/ "./assets/js/comment.js":
/*!******************************!*\
  !*** ./assets/js/comment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
document.addEventListener("DOMContentLoaded", function () {
  // {# para fazer o scroll automatico no modal direto pro final #}
  var commentsModal = document.getElementById("commentsModal");
  if (!commentsModal) {
    return;
  }
  commentsModal.addEventListener("shown.bs.modal", function () {
    var commentsContainer = document.getElementById("content-comments");
    if (!commentsContainer) {
      return;
    }
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
  });
  document.getElementById("commentButton").addEventListener("click", function () {
    var commentContent = document.getElementById("comment").value.trim(); // pegar e limpar

    if (commentContent === "") {
      alert("Le commentaire ne peut pas être vide !");
      return;
    }
    //route
    fetch("/comment/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // enviando um JSON :)
        "X-Requested-With": "XMLHttpRequest" // AJAX !!!!!!!
      },
      credentials: "include",
      // cookies de autenticação user
      body: JSON.stringify({
        content: commentContent
      })
    })
    // minha resposta, definida no meu controller
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Erreur de requête : " + response.status);
      }
      return response.json(); // convertendo pra JSON
    })
    // tratamento/criaçao dos dados para apresentar aos users de maneira dinamica, espelho do code ja randerizado no twig
    .then(function (data) {
      if (data.success) {
        var commentsContainer = document.getElementById("content-comments");
        commentsContainer.scrollTop = commentsContainer.scrollHeight;
        var newComment = document.createElement("div");
        newComment.classList.add("m-2", "text-end", "d-flex", "flex-column");
        var img = document.createElement("img");
        img.src = data.photoUrl;
        img.classList.add("img-fluid", "rounded-circle", "align-self-end");
        img.style.width = "60px";
        img.style.height = "60px";
        img.style.objectFit = "cover";
        var label = document.createElement("label");
        label.textContent = data.username;
        var commentBox = document.createElement("div");
        commentBox.classList.add("bg-light", "border", "p-2", "rounded", "flex-row-reverse", "w-50", "align-self-end");
        var commentText = document.createElement("p");
        commentText.classList.add("p-2", "text-end");
        commentText.textContent = data.content;
        var commentDate = document.createElement("span");
        commentDate.classList.add("fs-6", "text-muted");
        commentDate.textContent = data.date;

        // add no DOM e depois devolver o imput para o user vazio
        newComment.appendChild(img);
        newComment.appendChild(label);
        commentBox.appendChild(commentText);
        commentBox.appendChild(commentDate);
        commentsContainer.scrollTop = commentsContainer.scrollHeight;
        commentsContainer.appendChild(newComment);
        commentsContainer.appendChild(commentBox);
        document.getElementById("comment").value = "";
      } else {
        alert("Une erreur est survenue : " + data.message);
      }
    })["catch"](function (error) {
      alert("Erreur : " + error.message);
    });
  });
});

/***/ }),

/***/ "./assets/js/getEmploye.js":
/*!*********************************!*\
  !*** ./assets/js/getEmploye.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelectorAll("button");
  if (button === null) {
    return;
  }
  button.forEach(function (button) {
    button.addEventListener("click", function () {
      var emailFormButton = button.value;
      if (emailFormButton == null) {
        return;
      }
      var inputEmail = document.getElementById("task_email");
      if (!inputEmail) {
        return;
      }
      inputEmail.value = emailFormButton;
    });
  });
});

/***/ }),

/***/ "./assets/js/getUser.js":
/*!******************************!*\
  !*** ./assets/js/getUser.js ***!
  \******************************/
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

/***/ "./assets/js/notification.js":
/*!***********************************!*\
  !*** ./assets/js/notification.js ***!
  \***********************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-live-compo-26fc8a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDc0QsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1VBQ3REOztVQUVBLElBQUlvQixLQUFLLEVBQUU7WUFDUCxJQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDRyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBQ3pDOztZQUVBLElBQUlGLEtBQUssR0FBRyxDQUFDLEVBQUU7Y0FDWEQsS0FBSyxDQUFDRyxTQUFTLEdBQUdGLEtBQUssQ0FBQyxDQUFDO1lBQzdCLENBQUMsTUFBTTtjQUNIRCxLQUFLLENBQUNOLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQjtVQUNKO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3JDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2V0RW1wbG95ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2V0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWNoYXJ0anMvZGlzdC9jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmUubWluLmNzcyc7XG5pbXBvcnQgY29udHJvbGxlcl8yIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1jaGFydGpzLS1jaGFydCc6IGNvbnRyb2xsZXJfMCxcbiAgJ2xpdmUnOiBjb250cm9sbGVyXzEsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMixcbn07IiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbi8vIGltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9nZXRVc2VyLmpzJztcbi8vIGltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9nZXRFbXBsb3llLmpzJztcbi8vIGltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9ub3RpZmljYXRpb24uanMnO1xuLy8gaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL2NvbW1lbnQuanMnO1xuXG5pbXBvcnQgJy9hc3NldHMvanMvZ2V0VXNlci5qcyc7XG5pbXBvcnQgJy9hc3NldHMvanMvZ2V0RW1wbG95ZS5qcyc7XG5pbXBvcnQgJy9hc3NldHMvanMvbm90aWZpY2F0aW9uLmpzJztcbmltcG9ydCAnL2Fzc2V0cy9qcy9jb21tZW50LmpzJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhICcpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbmNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoKTtcbi8vIFR1IHBldXggZW5yZWdpc3RyZXIgaWNpIGRlcyBjb250csO0bGV1cnMgc3VwcGzDqW1lbnRhaXJlc1xuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuXG53aW5kb3cuYXBwbGljYXRpb24gPSBhcHA7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG4gIC8vIHsjIHBhcmEgZmF6ZXIgbyBzY3JvbGwgYXV0b21hdGljbyBubyBtb2RhbCBkaXJldG8gcHJvIGZpbmFsICN9XG4gIGNvbnN0IGNvbW1lbnRzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRzTW9kYWxcIik7XG4gIGlmICghY29tbWVudHNNb2RhbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbW1lbnRzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInNob3duLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtY29tbWVudHNcIik7XG4gICAgaWYgKCFjb21tZW50c0NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gIH0pO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRCdXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb21tZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKS52YWx1ZS50cmltKCk7IC8vIHBlZ2FyIGUgbGltcGFyXG5cbiAgICAgIGlmIChjb21tZW50Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIkxlIGNvbW1lbnRhaXJlIG5lIHBldXQgcGFzIMOqdHJlIHZpZGUgIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy9yb3V0ZVxuICAgICAgZmV0Y2goXCIvY29tbWVudC9uZXdcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIGVudmlhbmRvIHVtIEpTT04gOilcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLCAvLyBBSkFYICEhISEhISFcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLCAvLyBjb29raWVzIGRlIGF1dGVudGljYcOnw6NvIHVzZXJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50OiBjb21tZW50Q29udGVudCB9KSxcbiAgICAgIH0pXG4gICAgICAgIC8vIG1pbmhhIHJlc3Bvc3RhLCBkZWZpbmlkYSBubyBtZXUgY29udHJvbGxlclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgZGUgcmVxdcOqdGUgOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIGNvbnZlcnRlbmRvIHByYSBKU09OXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRyYXRhbWVudG8vY3JpYcOnYW8gZG9zIGRhZG9zIHBhcmEgYXByZXNlbnRhciBhb3MgdXNlcnMgZGUgbWFuZWlyYSBkaW5hbWljYSwgZXNwZWxobyBkbyBjb2RlIGphIHJhbmRlcml6YWRvIG5vIHR3aWdcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtY29tbWVudHNcIik7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCBuZXdDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld0NvbW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgXCJtLTJcIixcbiAgICAgICAgICAgICAgXCJ0ZXh0LWVuZFwiLFxuICAgICAgICAgICAgICBcImQtZmxleFwiLFxuICAgICAgICAgICAgICBcImZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGRhdGEucGhvdG9Vcmw7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWQtY2lyY2xlXCIsIFwiYWxpZ24tc2VsZi1lbmRcIik7XG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjYwcHhcIjtcbiAgICAgICAgICAgIGltZy5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZGF0YS51c2VybmFtZTtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29tbWVudEJveC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICBcImJnLWxpZ2h0XCIsXG4gICAgICAgICAgICAgIFwiYm9yZGVyXCIsXG4gICAgICAgICAgICAgIFwicC0yXCIsXG4gICAgICAgICAgICAgIFwicm91bmRlZFwiLFxuICAgICAgICAgICAgICBcImZsZXgtcm93LXJldmVyc2VcIixcbiAgICAgICAgICAgICAgXCJ3LTUwXCIsXG4gICAgICAgICAgICAgIFwiYWxpZ24tc2VsZi1lbmRcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBjb21tZW50VGV4dC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1lbmRcIik7XG4gICAgICAgICAgICBjb21tZW50VGV4dC50ZXh0Q29udGVudCA9IGRhdGEuY29udGVudDtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb21tZW50RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZnMtNlwiLCBcInRleHQtbXV0ZWRcIik7XG4gICAgICAgICAgICBjb21tZW50RGF0ZS50ZXh0Q29udGVudCA9IGRhdGEuZGF0ZTtcblxuICAgICAgICAgICAgLy8gYWRkIG5vIERPTSBlIGRlcG9pcyBkZXZvbHZlciBvIGltcHV0IHBhcmEgbyB1c2VyIHZhemlvXG4gICAgICAgICAgICBuZXdDb21tZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBuZXdDb21tZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGNvbW1lbnRCb3guYXBwZW5kQ2hpbGQoY29tbWVudFRleHQpO1xuICAgICAgICAgICAgY29tbWVudEJveC5hcHBlbmRDaGlsZChjb21tZW50RGF0ZSk7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbW1lbnQpO1xuICAgICAgICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudEJveCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlIDogXCIgKyBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGlmIChidXR0b24gPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGVtYWlsRm9ybUJ1dHRvbiA9IGJ1dHRvbi52YWx1ZTtcblx0ICBpZiAoZW1haWxGb3JtQnV0dG9uID09IG51bGwpIHtcblx0XHQgIHJldHVyblxuXHQgIH1cbiAgICAgIGxldCBpbnB1dEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2VtYWlsXCIpO1xuXHQgIGlmICghaW5wdXRFbWFpbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpbnB1dEVtYWlsLnZhbHVlID0gZW1haWxGb3JtQnV0dG9uO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBsZXQgY29sbGVjdGlvbkhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZS1maWVsZHNcIik7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1lbXBsb3llXCIpO1xuICBpZiAoYWRkQnV0dG9uKSB7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcHJvdG90eXBlID0gY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LnByb3RvdHlwZTtcbiAgICAgIGxldCBpbmRleCA9IGNvbGxlY3Rpb25Ib2xkZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgbGV0IG5ld0ZpZWxkID0gcHJvdG90eXBlLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImlucHV0LWdyb3VwXCIsIFwibWItMlwiLCBcImVtcGxveWUtZW50cnlcIik7XG4gICAgICBkaXYuaW5uZXJIVE1MID1cbiAgICAgICAgbmV3RmllbGQgK1xuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciByZW1vdmUtZW1wbG95ZVwiPlJlbW92ZXI8L2J1dHRvbj4nO1xuICAgICAgY29sbGVjdGlvbkhvbGRlci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICBhdHRhY2hSZW1vdmVFdmVudChkaXYpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNoUmVtb3ZlRXZlbnQoZWxlbWVudCkge1xuICAgIGxldCByZW1vdmVCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtb3ZlLWVtcGxveWVcIik7XG4gICAgaWYgKHJlbW92ZUJ1dHRvbikge1xuICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVtcGxveWUtZW50cnlcIikuZm9yRWFjaChhdHRhY2hSZW1vdmVFdmVudCk7XG59KTtcbiIsIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlkb1wiKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG5vdGlmaWNhdGlvbklkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgLy8gT2J0w6ltIG8gSUQgZGEgbm90aWZpY2HDp8OjbyBhIHBhcnRpciBkbyBhdHJpYnV0byBcImRhdGEtaWRcIiBkbyBib3TDo28gY2xpY2Fkb1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmZXRjaChgL25vdGlmaWNhdGlvbnMvcmVhZC8ke25vdGlmaWNhdGlvbklkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBGYXogdW1hIHJlcXVpc2nDp8OjbyBQT1NUIHBhcmEgbWFyY2FyIGEgbm90aWZpY2HDp8OjbyBjb21vIGxpZGFcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsIC8vIEluZGljYSBxdWUgw6kgdW1hIHJlcXVpc2nDp8OjbyBBSkFYXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gQ29udmVydGUgYSByZXNwb3N0YSBwYXJhIEpTT05cbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2UgYSByZXNwb3N0YSBpbmRpY2FyIHN1Y2Vzc28sIHJlbW92ZSBhIG5vdGlmaWNhw6fDo28gZGEgbGlzdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VzdChcImxpXCIpLnJlbW92ZSgpOyAvLyBSZW1vdmUgbyBlbGVtZW50byA8bGk+IG1haXMgcHLDs3hpbW8gZG8gYm90w6NvIGNsaWNhZG9cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFkZ2UuYmctZGFuZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY2lvbmEgbyBiYWRnZSAoY29udGFkb3IgZGUgbm90aWZpY2HDp8O1ZXMpIG5hIG5hdmJhclxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSBwYXJzZUludChiYWRnZS5pbm5lclRleHQpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpbWludWkgbyBuw7ptZXJvIGRlIG5vdGlmaWNhw6fDtWVzIG5vIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbm5lclRleHQgPSBjb3VudDsgLy8gQXR1YWxpemEgbyBuw7ptZXJvIGRvIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLnJlbW92ZSgpOyAvLyBSZW1vdmUgbyBiYWRnZSBzZSBuw6NvIGhvdXZlciBtYWlzIG5vdGlmaWNhw6fDtWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwid2luZG93IiwiYXBwbGljYXRpb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21tZW50c01vZGFsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21tZW50c0NvbnRhaW5lciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNvbW1lbnRDb250ZW50IiwidmFsdWUiLCJ0cmltIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJuZXdDb21tZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImltZyIsInNyYyIsInBob3RvVXJsIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImxhYmVsIiwidGV4dENvbnRlbnQiLCJ1c2VybmFtZSIsImNvbW1lbnRCb3giLCJjb21tZW50VGV4dCIsImNvbW1lbnREYXRlIiwiZGF0ZSIsImFwcGVuZENoaWxkIiwibWVzc2FnZSIsImVycm9yIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbWFpbEZvcm1CdXR0b24iLCJpbnB1dEVtYWlsIiwiY29sbGVjdGlvbkhvbGRlciIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRCdXR0b24iLCJwcm90b3R5cGUiLCJkYXRhc2V0IiwiaW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCIsIm5ld0ZpZWxkIiwicmVwbGFjZSIsImRpdiIsImlubmVySFRNTCIsImF0dGFjaFJlbW92ZUV2ZW50IiwiZWxlbWVudCIsInJlbW92ZUJ1dHRvbiIsInJlbW92ZSIsIl90aGlzIiwibm90aWZpY2F0aW9uSWQiLCJpZCIsImNvbmNhdCIsImNsb3Nlc3QiLCJiYWRnZSIsImNvdW50IiwicGFyc2VJbnQiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9