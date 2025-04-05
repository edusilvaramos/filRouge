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
      console.log(emailFormButton);
      var imputEmail = document.getElementById("task_email");
      imputEmail.value = emailFormButton;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSW9CLEtBQUssRUFBRTtZQUNQLElBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDRixLQUFLLENBQUNHLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekM7O1lBRUEsSUFBSUYsS0FBSyxHQUFHLENBQUMsRUFBRTtjQUNYRCxLQUFLLENBQUNHLFNBQVMsR0FBR0YsS0FBSyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxNQUFNO2NBQ0hELEtBQUssQ0FBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCO1VBQ0o7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nZXRFbXBsb3llLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9nZXRVc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmltcG9ydCBjb250cm9sbGVyXzIgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWNoYXJ0anMtLWNoYXJ0JzogY29udHJvbGxlcl8wLFxuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMSxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8yLFxufTsiLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuLy8gaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL2dldFVzZXIuanMnO1xuLy8gaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL2dldEVtcGxveWUuanMnO1xuLy8gaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL25vdGlmaWNhdGlvbi5qcyc7XG4vLyBpbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvanMvY29tbWVudC5qcyc7XG5cbmltcG9ydCAnL2Fzc2V0cy9qcy9nZXRVc2VyLmpzJztcbmltcG9ydCAnL2Fzc2V0cy9qcy9nZXRFbXBsb3llLmpzJztcbmltcG9ydCAnL2Fzc2V0cy9qcy9ub3RpZmljYXRpb24uanMnO1xuaW1wb3J0ICcvYXNzZXRzL2pzL2NvbW1lbnQuanMnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEgJyk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcCgpO1xuLy8gVHUgcGV1eCBlbnJlZ2lzdHJlciBpY2kgZGVzIGNvbnRyw7RsZXVycyBzdXBwbMOpbWVudGFpcmVzXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG5cbndpbmRvdy5hcHBsaWNhdGlvbiA9IGFwcDsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgLy8geyMgcGFyYSBmYXplciBvIHNjcm9sbCBhdXRvbWF0aWNvIG5vIG1vZGFsIGRpcmV0byBwcm8gZmluYWwgI31cbiAgY29uc3QgY29tbWVudHNNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudHNNb2RhbFwiKTtcbiAgaWYgKCFjb21tZW50c01vZGFsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tbWVudHNNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb21tZW50c1wiKTtcbiAgICBpZiAoIWNvbW1lbnRzQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgfSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiY29tbWVudEJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50XCIpLnZhbHVlLnRyaW0oKTsgLy8gcGVnYXIgZSBsaW1wYXJcblxuICAgICAgaWYgKGNvbW1lbnRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTGUgY29tbWVudGFpcmUgbmUgcGV1dCBwYXMgw6p0cmUgdmlkZSAhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvL3JvdXRlXG4gICAgICBmZXRjaChcIi9jb21tZW50L25ld1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy8gZW52aWFuZG8gdW0gSlNPTiA6KVxuICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsIC8vIEFKQVggISEhISEhIVxuICAgICAgICB9LFxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsIC8vIGNvb2tpZXMgZGUgYXV0ZW50aWNhw6fDo28gdXNlclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbnRlbnQ6IGNvbW1lbnRDb250ZW50IH0pLFxuICAgICAgfSlcbiAgICAgICAgLy8gbWluaGEgcmVzcG9zdGEsIGRlZmluaWRhIG5vIG1ldSBjb250cm9sbGVyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBkZSByZXF1w6p0ZSA6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gY29udmVydGVuZG8gcHJhIEpTT05cbiAgICAgICAgfSlcbiAgICAgICAgLy8gdHJhdGFtZW50by9jcmlhw6dhbyBkb3MgZGFkb3MgcGFyYSBhcHJlc2VudGFyIGFvcyB1c2VycyBkZSBtYW5laXJhIGRpbmFtaWNhLCBlc3BlbGhvIGRvIGNvZGUgamEgcmFuZGVyaXphZG8gbm8gdHdpZ1xuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb21tZW50c1wiKTtcbiAgICAgICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgbGV0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3Q29tbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICBcIm0tMlwiLFxuICAgICAgICAgICAgICBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgIFwiZC1mbGV4XCIsXG4gICAgICAgICAgICAgIFwiZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWcuc3JjID0gZGF0YS5waG90b1VybDtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsdWlkXCIsIFwicm91bmRlZC1jaXJjbGVcIiwgXCJhbGlnbi1zZWxmLWVuZFwiKTtcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiNjBweFwiO1xuICAgICAgICAgICAgaW1nLnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcblxuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkYXRhLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICBsZXQgY29tbWVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21tZW50Qm94LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgIFwiYmctbGlnaHRcIixcbiAgICAgICAgICAgICAgXCJib3JkZXJcIixcbiAgICAgICAgICAgICAgXCJwLTJcIixcbiAgICAgICAgICAgICAgXCJyb3VuZGVkXCIsXG4gICAgICAgICAgICAgIFwiZmxleC1yb3ctcmV2ZXJzZVwiLFxuICAgICAgICAgICAgICBcInctNTBcIixcbiAgICAgICAgICAgICAgXCJhbGlnbi1zZWxmLWVuZFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgY29tbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGNvbW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWVuZFwiKTtcbiAgICAgICAgICAgIGNvbW1lbnRUZXh0LnRleHRDb250ZW50ID0gZGF0YS5jb250ZW50O1xuXG4gICAgICAgICAgICBsZXQgY29tbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbW1lbnREYXRlLmNsYXNzTGlzdC5hZGQoXCJmcy02XCIsIFwidGV4dC1tdXRlZFwiKTtcbiAgICAgICAgICAgIGNvbW1lbnREYXRlLnRleHRDb250ZW50ID0gZGF0YS5kYXRlO1xuXG4gICAgICAgICAgICAvLyBhZGQgbm8gRE9NIGUgZGVwb2lzIGRldm9sdmVyIG8gaW1wdXQgcGFyYSBvIHVzZXIgdmF6aW9cbiAgICAgICAgICAgIG5ld0NvbW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIG5ld0NvbW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgY29tbWVudEJveC5hcHBlbmRDaGlsZChjb21tZW50VGV4dCk7XG4gICAgICAgICAgICBjb21tZW50Qm94LmFwcGVuZENoaWxkKGNvbW1lbnREYXRlKTtcbiAgICAgICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29tbWVudCk7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50Qm94KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgOiBcIiArIGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbmlmIChidXR0b24gPT09IG51bGwpIHtcblx0cmV0dXJuO1xufVxuYnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGxldCBlbWFpbEZvcm1CdXR0b24gPSBidXR0b24udmFsdWU7IFxuICAgICAgXHRjb25zb2xlLmxvZyhlbWFpbEZvcm1CdXR0b24pO1xuXHRcdGxldCBpbXB1dEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2VtYWlsXCIpO1xuXHRcdGltcHV0RW1haWwudmFsdWUgPSBlbWFpbEZvcm1CdXR0b25cblxuICAgIH0pO1xuICB9KTtcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNvbGxlY3Rpb25Ib2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWUtZmllbGRzXCIpO1xuICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtZW1wbG95ZVwiKTtcbiAgaWYgKGFkZEJ1dHRvbikge1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHByb3RvdHlwZSA9IGNvbGxlY3Rpb25Ib2xkZXIuZGF0YXNldC5wcm90b3R5cGU7XG4gICAgICBsZXQgaW5kZXggPSBjb2xsZWN0aW9uSG9sZGVyLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGxldCBuZXdGaWVsZCA9IHByb3RvdHlwZS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XG5cbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1ncm91cFwiLCBcIm1iLTJcIiwgXCJlbXBsb3llLWVudHJ5XCIpO1xuICAgICAgZGl2LmlubmVySFRNTCA9XG4gICAgICAgIG5ld0ZpZWxkICtcbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgcmVtb3ZlLWVtcGxveWVcIj5SZW1vdmVyPC9idXR0b24+JztcbiAgICAgIGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgYXR0YWNoUmVtb3ZlRXZlbnQoZGl2KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjaFJlbW92ZUV2ZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcmVtb3ZlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92ZS1lbXBsb3llXCIpO1xuICAgIGlmIChyZW1vdmVCdXR0b24pIHtcbiAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbXBsb3llLWVudHJ5XCIpLmZvckVhY2goYXR0YWNoUmVtb3ZlRXZlbnQpO1xufSk7XG4iLCJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpZG9cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb25JZCA9IHRoaXMuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIC8vIE9idMOpbSBvIElEIGRhIG5vdGlmaWNhw6fDo28gYSBwYXJ0aXIgZG8gYXRyaWJ1dG8gXCJkYXRhLWlkXCIgZG8gYm90w6NvIGNsaWNhZG9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmV0Y2goYC9ub3RpZmljYXRpb25zL3JlYWQvJHtub3RpZmljYXRpb25JZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gRmF6IHVtYSByZXF1aXNpw6fDo28gUE9TVCBwYXJhIG1hcmNhciBhIG5vdGlmaWNhw6fDo28gY29tbyBsaWRhXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLCAvLyBJbmRpY2EgcXVlIMOpIHVtYSByZXF1aXNpw6fDo28gQUpBWFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIENvbnZlcnRlIGEgcmVzcG9zdGEgcGFyYSBKU09OXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlIGEgcmVzcG9zdGEgaW5kaWNhciBzdWNlc3NvLCByZW1vdmUgYSBub3RpZmljYcOnw6NvIGRhIGxpc3RhXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKTsgLy8gUmVtb3ZlIG8gZWxlbWVudG8gPGxpPiBtYWlzIHByw7N4aW1vIGRvIGJvdMOjbyBjbGljYWRvXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFkZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhZGdlLmJnLWRhbmdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWNpb25hIG8gYmFkZ2UgKGNvbnRhZG9yIGRlIG5vdGlmaWNhw6fDtWVzKSBuYSBuYXZiYXJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWRnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gcGFyc2VJbnQoYmFkZ2UuaW5uZXJUZXh0KSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaW1pbnVpIG8gbsO6bWVybyBkZSBub3RpZmljYcOnw7VlcyBubyBiYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UuaW5uZXJUZXh0ID0gY291bnQ7IC8vIEF0dWFsaXphIG8gbsO6bWVybyBkbyBiYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5yZW1vdmUoKTsgLy8gUmVtb3ZlIG8gYmFkZ2Ugc2UgbsOjbyBob3V2ZXIgbWFpcyBub3RpZmljYcOnw7Vlc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIndpbmRvdyIsImFwcGxpY2F0aW9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tbWVudHNNb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiY29tbWVudHNDb250YWluZXIiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjb21tZW50Q29udGVudCIsInZhbHVlIiwidHJpbSIsImFsZXJ0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwibmV3Q29tbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbWciLCJzcmMiLCJwaG90b1VybCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJsYWJlbCIsInRleHRDb250ZW50IiwidXNlcm5hbWUiLCJjb21tZW50Qm94IiwiY29tbWVudFRleHQiLCJjb21tZW50RGF0ZSIsImRhdGUiLCJhcHBlbmRDaGlsZCIsIm1lc3NhZ2UiLCJlcnJvciIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZW1haWxGb3JtQnV0dG9uIiwiaW1wdXRFbWFpbCIsImNvbGxlY3Rpb25Ib2xkZXIiLCJxdWVyeVNlbGVjdG9yIiwiYWRkQnV0dG9uIiwicHJvdG90eXBlIiwiZGF0YXNldCIsImluZGV4IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdGaWVsZCIsInJlcGxhY2UiLCJkaXYiLCJpbm5lckhUTUwiLCJhdHRhY2hSZW1vdmVFdmVudCIsImVsZW1lbnQiLCJyZW1vdmVCdXR0b24iLCJyZW1vdmUiLCJfdGhpcyIsIm5vdGlmaWNhdGlvbklkIiwiaWQiLCJjb25jYXQiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjb3VudCIsInBhcnNlSW50IiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==