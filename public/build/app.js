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
var button = document.querySelectorAll("button");
button.forEach(function (button) {
  button.addEventListener("click", function () {
    var emailFormButton = button.value;
    console.log(emailFormButton);
    var imputEmail = document.getElementById("task_email");
    imputEmail.value = emailFormButton;
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-7cc04d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2V0RW1wbG95ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2V0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG4vLyBpbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvanMvZ2V0VXNlci5qcyc7XG4vLyBpbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvanMvZ2V0RW1wbG95ZS5qcyc7XG4vLyBpbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvanMvbm90aWZpY2F0aW9uLmpzJztcbi8vIGltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9qcy9jb21tZW50LmpzJztcblxuaW1wb3J0ICcvYXNzZXRzL2pzL2dldFVzZXIuanMnO1xuaW1wb3J0ICcvYXNzZXRzL2pzL2dldEVtcGxveWUuanMnO1xuaW1wb3J0ICcvYXNzZXRzL2pzL25vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgJy9hc3NldHMvanMvY29tbWVudC5qcyc7XG5cblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhICcpO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbmNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoKTtcbi8vIFR1IHBldXggZW5yZWdpc3RyZXIgaWNpIGRlcyBjb250csO0bGV1cnMgc3VwcGzDqW1lbnRhaXJlc1xuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG4gIC8vIHsjIHBhcmEgZmF6ZXIgbyBzY3JvbGwgYXV0b21hdGljbyBubyBtb2RhbCBkaXJldG8gcHJvIGZpbmFsICN9XG5cbiAgY29tbWVudHNNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb21tZW50c1wiKTtcbiAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gIH0pO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRCdXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb21tZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKS52YWx1ZS50cmltKCk7IC8vIHBlZ2FyIGUgbGltcGFyXG5cbiAgICAgIGlmIChjb21tZW50Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIkxlIGNvbW1lbnRhaXJlIG5lIHBldXQgcGFzIMOqdHJlIHZpZGUgIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy9yb3V0ZVxuICAgICAgZmV0Y2goXCIvY29tbWVudC9uZXdcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIGVudmlhbmRvIHVtIEpTT04gOilcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLCAvLyBBSkFYICEhISEhISFcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLCAvLyBjb29raWVzIGRlIGF1dGVudGljYcOnw6NvIHVzZXJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50OiBjb21tZW50Q29udGVudCB9KSxcbiAgICAgIH0pXG4gICAgICAgIC8vIG1pbmhhIHJlc3Bvc3RhLCBkZWZpbmlkYSBubyBtZXUgY29udHJvbGxlclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgZGUgcmVxdcOqdGUgOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIGNvbnZlcnRlbmRvIHByYSBKU09OXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRyYXRhbWVudG8vY3JpYcOnYW8gZG9zIGRhZG9zIHBhcmEgYXByZXNlbnRhciBhb3MgdXNlcnMgZGUgbWFuZWlyYSBkaW5hbWljYSwgZXNwZWxobyBkbyBjb2RlIGphIHJhbmRlcml6YWRvIG5vIHR3aWdcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtY29tbWVudHNcIik7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCBuZXdDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld0NvbW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgXCJtLTJcIixcbiAgICAgICAgICAgICAgXCJ0ZXh0LWVuZFwiLFxuICAgICAgICAgICAgICBcImQtZmxleFwiLFxuICAgICAgICAgICAgICBcImZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGRhdGEucGhvdG9Vcmw7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWQtY2lyY2xlXCIsIFwiYWxpZ24tc2VsZi1lbmRcIik7XG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjYwcHhcIjtcbiAgICAgICAgICAgIGltZy5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZGF0YS51c2VybmFtZTtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29tbWVudEJveC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICBcImJnLWxpZ2h0XCIsXG4gICAgICAgICAgICAgIFwiYm9yZGVyXCIsXG4gICAgICAgICAgICAgIFwicC0yXCIsXG4gICAgICAgICAgICAgIFwicm91bmRlZFwiLFxuICAgICAgICAgICAgICBcImZsZXgtcm93LXJldmVyc2VcIixcbiAgICAgICAgICAgICAgXCJ3LTUwXCIsXG4gICAgICAgICAgICAgIFwiYWxpZ24tc2VsZi1lbmRcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBjb21tZW50VGV4dC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1lbmRcIik7XG4gICAgICAgICAgICBjb21tZW50VGV4dC50ZXh0Q29udGVudCA9IGRhdGEuY29udGVudDtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb21tZW50RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZnMtNlwiLCBcInRleHQtbXV0ZWRcIik7XG4gICAgICAgICAgICBjb21tZW50RGF0ZS50ZXh0Q29udGVudCA9IGRhdGEuZGF0ZTtcblxuICAgICAgICAgICAgLy8gYWRkIG5vIERPTSBlIGRlcG9pcyBkZXZvbHZlciBvIGltcHV0IHBhcmEgbyB1c2VyIHZhemlvXG4gICAgICAgICAgICBuZXdDb21tZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBuZXdDb21tZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGNvbW1lbnRCb3guYXBwZW5kQ2hpbGQoY29tbWVudFRleHQpO1xuICAgICAgICAgICAgY29tbWVudEJveC5hcHBlbmRDaGlsZChjb21tZW50RGF0ZSk7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbW1lbnQpO1xuICAgICAgICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudEJveCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlIDogXCIgKyBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiIsImxldCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuYnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGxldCBlbWFpbEZvcm1CdXR0b24gPSBidXR0b24udmFsdWU7IFxuICAgICAgXHRjb25zb2xlLmxvZyhlbWFpbEZvcm1CdXR0b24pO1xuXHRcdGxldCBpbXB1dEVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrX2VtYWlsXCIpO1xuXHRcdGltcHV0RW1haWwudmFsdWUgPSBlbWFpbEZvcm1CdXR0b25cblxuICAgIH0pO1xuICB9KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjb2xsZWN0aW9uSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llLWZpZWxkc1wiKTtcbiAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWVtcGxveWVcIik7XG4gIGlmIChhZGRCdXR0b24pIHtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBwcm90b3R5cGUgPSBjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQucHJvdG90eXBlO1xuICAgICAgbGV0IGluZGV4ID0gY29sbGVjdGlvbkhvbGRlci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBsZXQgbmV3RmllbGQgPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZ3JvdXBcIiwgXCJtYi0yXCIsIFwiZW1wbG95ZS1lbnRyeVwiKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPVxuICAgICAgICBuZXdGaWVsZCArXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIHJlbW92ZS1lbXBsb3llXCI+UmVtb3ZlcjwvYnV0dG9uPic7XG4gICAgICBjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgIGF0dGFjaFJlbW92ZUV2ZW50KGRpdik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2hSZW1vdmVFdmVudChlbGVtZW50KSB7XG4gICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtZW1wbG95ZVwiKTtcbiAgICBpZiAocmVtb3ZlQnV0dG9uKSB7XG4gICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZW1wbG95ZS1lbnRyeVwiKS5mb3JFYWNoKGF0dGFjaFJlbW92ZUV2ZW50KTtcbn0pO1xuIiwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWRvXCIpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbm90aWZpY2F0aW9uSWQgPSB0aGlzLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAvLyBPYnTDqW0gbyBJRCBkYSBub3RpZmljYcOnw6NvIGEgcGFydGlyIGRvIGF0cmlidXRvIFwiZGF0YS1pZFwiIGRvIGJvdMOjbyBjbGljYWRvXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZldGNoKGAvbm90aWZpY2F0aW9ucy9yZWFkLyR7bm90aWZpY2F0aW9uSWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIEZheiB1bWEgcmVxdWlzacOnw6NvIFBPU1QgcGFyYSBtYXJjYXIgYSBub3RpZmljYcOnw6NvIGNvbW8gbGlkYVxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIiwgLy8gSW5kaWNhIHF1ZSDDqSB1bWEgcmVxdWlzacOnw6NvIEFKQVhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBDb252ZXJ0ZSBhIHJlc3Bvc3RhIHBhcmEgSlNPTlxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZSBhIHJlc3Bvc3RhIGluZGljYXIgc3VjZXNzbywgcmVtb3ZlIGEgbm90aWZpY2HDp8OjbyBkYSBsaXN0YVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZXN0KFwibGlcIikucmVtb3ZlKCk7IC8vIFJlbW92ZSBvIGVsZW1lbnRvIDxsaT4gbWFpcyBwcsOzeGltbyBkbyBib3TDo28gY2xpY2Fkb1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhZGdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWRnZS5iZy1kYW5nZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjaW9uYSBvIGJhZGdlIChjb250YWRvciBkZSBub3RpZmljYcOnw7VlcykgbmEgbmF2YmFyXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHBhcnNlSW50KGJhZGdlLmlubmVyVGV4dCkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGltaW51aSBvIG7Dum1lcm8gZGUgbm90aWZpY2HDp8O1ZXMgbm8gYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLmlubmVyVGV4dCA9IGNvdW50OyAvLyBBdHVhbGl6YSBvIG7Dum1lcm8gZG8gYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UucmVtb3ZlKCk7IC8vIFJlbW92ZSBvIGJhZGdlIHNlIG7Do28gaG91dmVyIG1haXMgbm90aWZpY2HDp8O1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21tZW50c01vZGFsIiwiY29tbWVudHNDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNvbW1lbnRDb250ZW50IiwidmFsdWUiLCJ0cmltIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJuZXdDb21tZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImltZyIsInNyYyIsInBob3RvVXJsIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImxhYmVsIiwidGV4dENvbnRlbnQiLCJ1c2VybmFtZSIsImNvbW1lbnRCb3giLCJjb21tZW50VGV4dCIsImNvbW1lbnREYXRlIiwiZGF0ZSIsImFwcGVuZENoaWxkIiwibWVzc2FnZSIsImVycm9yIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbWFpbEZvcm1CdXR0b24iLCJpbXB1dEVtYWlsIiwiY29sbGVjdGlvbkhvbGRlciIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRCdXR0b24iLCJwcm90b3R5cGUiLCJkYXRhc2V0IiwiaW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCIsIm5ld0ZpZWxkIiwicmVwbGFjZSIsImRpdiIsImlubmVySFRNTCIsImF0dGFjaFJlbW92ZUV2ZW50IiwiZWxlbWVudCIsInJlbW92ZUJ1dHRvbiIsInJlbW92ZSIsIl90aGlzIiwibm90aWZpY2F0aW9uSWQiLCJpZCIsImNvbmNhdCIsImNsb3Nlc3QiLCJiYWRnZSIsImNvdW50IiwicGFyc2VJbnQiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9