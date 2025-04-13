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
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./node_modules/@symfony/ux-turbo/dist/turbo_controller.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
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
/* harmony import */ var _public_assets_js_notification_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/js/notification.js */ "./public/assets/js/notification.js");
/* harmony import */ var _public_assets_js_notification_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_js_notification_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_js_comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/js/comment.js */ "./public/assets/js/comment.js");
/* harmony import */ var _public_assets_js_comment_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_js_comment_js__WEBPACK_IMPORTED_MODULE_4__);

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

/***/ "./public/assets/js/comment.js":
/*!*************************************!*\
  !*** ./public/assets/js/comment.js ***!
  \*************************************/
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

  commentsModal.addEventListener("shown.bs.modal", function () {
    var commentsContainer = document.getElementById("content-comments");
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-bfc56c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLFVBQUFNLElBQUksRUFBSTtRQUNWLElBQUlBLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1VBQ2Q7O1VBRUF5QyxLQUFJLENBQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUU3QixJQUFJUyxLQUFLLEdBQUd4RSxRQUFRLENBQUNpRCxhQUFhLENBQUMsa0JBQWtCLENBQUM7VUFDdEQ7O1VBRUEsSUFBSXVCLEtBQUssRUFBRTtZQUNQLElBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDRixLQUFLLENBQUNHLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDekM7O1lBRUEsSUFBSUYsS0FBSyxHQUFHLENBQUMsRUFBRTtjQUNYRCxLQUFLLENBQUNHLFNBQVMsR0FBR0YsS0FBSyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxNQUFNO2NBQ0hELEtBQUssQ0FBQ1QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCO1VBQ0o7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvanMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL2dldFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9qcy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtY2hhcnRqcy0tY2hhcnQnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC10dXJiby0tdHVyYm8tY29yZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9nZXRVc2VyLmpzJztcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9ub3RpZmljYXRpb24uanMnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL2NvbW1lbnQuanMnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEgJyk7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcCgpO1xuLy8gVHUgcGV1eCBlbnJlZ2lzdHJlciBpY2kgZGVzIGNvbnRyw7RsZXVycyBzdXBwbMOpbWVudGFpcmVzXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgLy8geyMgcGFyYSBmYXplciBvIHNjcm9sbCBhdXRvbWF0aWNvIG5vIG1vZGFsIGRpcmV0byBwcm8gZmluYWwgI31cblxuICBjb21tZW50c01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWNvbW1lbnRzXCIpO1xuICAgIGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbiAgfSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwiY29tbWVudEJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50XCIpLnZhbHVlLnRyaW0oKTsgLy8gcGVnYXIgZSBsaW1wYXJcblxuICAgICAgaWYgKGNvbW1lbnRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTGUgY29tbWVudGFpcmUgbmUgcGV1dCBwYXMgw6p0cmUgdmlkZSAhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvL3JvdXRlXG4gICAgICBmZXRjaChcIi9jb21tZW50L25ld1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgLy8gZW52aWFuZG8gdW0gSlNPTiA6KVxuICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsIC8vIEFKQVggISEhISEhIVxuICAgICAgICB9LFxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsIC8vIGNvb2tpZXMgZGUgYXV0ZW50aWNhw6fDo28gdXNlclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbnRlbnQ6IGNvbW1lbnRDb250ZW50IH0pLFxuICAgICAgfSlcbiAgICAgICAgLy8gbWluaGEgcmVzcG9zdGEsIGRlZmluaWRhIG5vIG1ldSBjb250cm9sbGVyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBkZSByZXF1w6p0ZSA6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gY29udmVydGVuZG8gcHJhIEpTT05cbiAgICAgICAgfSlcbiAgICAgICAgLy8gdHJhdGFtZW50by9jcmlhw6dhbyBkb3MgZGFkb3MgcGFyYSBhcHJlc2VudGFyIGFvcyB1c2VycyBkZSBtYW5laXJhIGRpbmFtaWNhLCBlc3BlbGhvIGRvIGNvZGUgamEgcmFuZGVyaXphZG8gbm8gdHdpZ1xuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb21tZW50c1wiKTtcbiAgICAgICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgbGV0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3Q29tbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICBcIm0tMlwiLFxuICAgICAgICAgICAgICBcInRleHQtZW5kXCIsXG4gICAgICAgICAgICAgIFwiZC1mbGV4XCIsXG4gICAgICAgICAgICAgIFwiZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBpbWcuc3JjID0gZGF0YS5waG90b1VybDtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaW1nLWZsdWlkXCIsIFwicm91bmRlZC1jaXJjbGVcIiwgXCJhbGlnbi1zZWxmLWVuZFwiKTtcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiNjBweFwiO1xuICAgICAgICAgICAgaW1nLnN0eWxlLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcblxuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkYXRhLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICBsZXQgY29tbWVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21tZW50Qm94LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICAgIFwiYmctbGlnaHRcIixcbiAgICAgICAgICAgICAgXCJib3JkZXJcIixcbiAgICAgICAgICAgICAgXCJwLTJcIixcbiAgICAgICAgICAgICAgXCJyb3VuZGVkXCIsXG4gICAgICAgICAgICAgIFwiZmxleC1yb3ctcmV2ZXJzZVwiLFxuICAgICAgICAgICAgICBcInctNTBcIixcbiAgICAgICAgICAgICAgXCJhbGlnbi1zZWxmLWVuZFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgY29tbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGNvbW1lbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwLTJcIiwgXCJ0ZXh0LWVuZFwiKTtcbiAgICAgICAgICAgIGNvbW1lbnRUZXh0LnRleHRDb250ZW50ID0gZGF0YS5jb250ZW50O1xuXG4gICAgICAgICAgICBsZXQgY29tbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbW1lbnREYXRlLmNsYXNzTGlzdC5hZGQoXCJmcy02XCIsIFwidGV4dC1tdXRlZFwiKTtcbiAgICAgICAgICAgIGNvbW1lbnREYXRlLnRleHRDb250ZW50ID0gZGF0YS5kYXRlO1xuXG4gICAgICAgICAgICAvLyBhZGQgbm8gRE9NIGUgZGVwb2lzIGRldm9sdmVyIG8gaW1wdXQgcGFyYSBvIHVzZXIgdmF6aW9cbiAgICAgICAgICAgIG5ld0NvbW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIG5ld0NvbW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgY29tbWVudEJveC5hcHBlbmRDaGlsZChjb21tZW50VGV4dCk7XG4gICAgICAgICAgICBjb21tZW50Qm94LmFwcGVuZENoaWxkKGNvbW1lbnREYXRlKTtcbiAgICAgICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29tbWVudCk7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50Qm94KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgOiBcIiArIGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJldXIgOiBcIiArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBsZXQgY29sbGVjdGlvbkhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1wbG95ZS1maWVsZHNcIik7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1lbXBsb3llXCIpO1xuICBpZiAoYWRkQnV0dG9uKSB7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcHJvdG90eXBlID0gY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LnByb3RvdHlwZTtcbiAgICAgIGxldCBpbmRleCA9IGNvbGxlY3Rpb25Ib2xkZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgbGV0IG5ld0ZpZWxkID0gcHJvdG90eXBlLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImlucHV0LWdyb3VwXCIsIFwibWItMlwiLCBcImVtcGxveWUtZW50cnlcIik7XG4gICAgICBkaXYuaW5uZXJIVE1MID1cbiAgICAgICAgbmV3RmllbGQgK1xuICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciByZW1vdmUtZW1wbG95ZVwiPlJlbW92ZXI8L2J1dHRvbj4nO1xuICAgICAgY29sbGVjdGlvbkhvbGRlci5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICBhdHRhY2hSZW1vdmVFdmVudChkaXYpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0YWNoUmVtb3ZlRXZlbnQoZWxlbWVudCkge1xuICAgIGxldCByZW1vdmVCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtb3ZlLWVtcGxveWVcIik7XG4gICAgaWYgKHJlbW92ZUJ1dHRvbikge1xuICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVtcGxveWUtZW50cnlcIikuZm9yRWFjaChhdHRhY2hSZW1vdmVFdmVudCk7XG59KTtcbiIsIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlkb1wiKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG5vdGlmaWNhdGlvbklkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgLy8gT2J0w6ltIG8gSUQgZGEgbm90aWZpY2HDp8OjbyBhIHBhcnRpciBkbyBhdHJpYnV0byBcImRhdGEtaWRcIiBkbyBib3TDo28gY2xpY2Fkb1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmZXRjaChgL25vdGlmaWNhdGlvbnMvcmVhZC8ke25vdGlmaWNhdGlvbklkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBGYXogdW1hIHJlcXVpc2nDp8OjbyBQT1NUIHBhcmEgbWFyY2FyIGEgbm90aWZpY2HDp8OjbyBjb21vIGxpZGFcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiBcIlhNTEh0dHBSZXF1ZXN0XCIsIC8vIEluZGljYSBxdWUgw6kgdW1hIHJlcXVpc2nDp8OjbyBBSkFYXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkgLy8gQ29udmVydGUgYSByZXNwb3N0YSBwYXJhIEpTT05cbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2UgYSByZXNwb3N0YSBpbmRpY2FyIHN1Y2Vzc28sIHJlbW92ZSBhIG5vdGlmaWNhw6fDo28gZGEgbGlzdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VzdChcImxpXCIpLnJlbW92ZSgpOyAvLyBSZW1vdmUgbyBlbGVtZW50byA8bGk+IG1haXMgcHLDs3hpbW8gZG8gYm90w6NvIGNsaWNhZG9cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFkZ2UuYmctZGFuZ2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY2lvbmEgbyBiYWRnZSAoY29udGFkb3IgZGUgbm90aWZpY2HDp8O1ZXMpIG5hIG5hdmJhclxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSBwYXJzZUludChiYWRnZS5pbm5lclRleHQpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpbWludWkgbyBuw7ptZXJvIGRlIG5vdGlmaWNhw6fDtWVzIG5vIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5pbm5lclRleHQgPSBjb3VudDsgLy8gQXR1YWxpemEgbyBuw7ptZXJvIGRvIGJhZGdlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLnJlbW92ZSgpOyAvLyBSZW1vdmUgbyBiYWRnZSBzZSBuw6NvIGhvdXZlciBtYWlzIG5vdGlmaWNhw6fDtWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tbWVudHNNb2RhbCIsImNvbW1lbnRzQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjb21tZW50Q29udGVudCIsInZhbHVlIiwidHJpbSIsImFsZXJ0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwibmV3Q29tbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbWciLCJzcmMiLCJwaG90b1VybCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJsYWJlbCIsInRleHRDb250ZW50IiwidXNlcm5hbWUiLCJjb21tZW50Qm94IiwiY29tbWVudFRleHQiLCJjb21tZW50RGF0ZSIsImRhdGUiLCJhcHBlbmRDaGlsZCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbGxlY3Rpb25Ib2xkZXIiLCJxdWVyeVNlbGVjdG9yIiwiYWRkQnV0dG9uIiwicHJvdG90eXBlIiwiZGF0YXNldCIsImluZGV4IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJuZXdGaWVsZCIsInJlcGxhY2UiLCJkaXYiLCJpbm5lckhUTUwiLCJhdHRhY2hSZW1vdmVFdmVudCIsImVsZW1lbnQiLCJyZW1vdmVCdXR0b24iLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsIl90aGlzIiwibm90aWZpY2F0aW9uSWQiLCJpZCIsImNvbmNhdCIsImNsb3Nlc3QiLCJiYWRnZSIsImNvdW50IiwicGFyc2VJbnQiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9