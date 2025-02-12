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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-7cc04d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDZDs7VUFFQXlDLEtBQUksQ0FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDUixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7O1VBRTdCLElBQUlTLEtBQUssR0FBR3hFLFFBQVEsQ0FBQ2lELGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztVQUN0RDs7VUFFQSxJQUFJdUIsS0FBSyxFQUFFO1lBQ1AsSUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNGLEtBQUssQ0FBQ0csU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUN6Qzs7WUFFQSxJQUFJRixLQUFLLEdBQUcsQ0FBQyxFQUFFO2NBQ1hELEtBQUssQ0FBQ0csU0FBUyxHQUFHRixLQUFLLENBQUMsQ0FBQztZQUM3QixDQUFDLE1BQU07Y0FDSEQsS0FBSyxDQUFDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEI7VUFDSjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNyQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9qcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvanMvZ2V0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL2dldFVzZXIuanMnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL25vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvanMvY29tbWVudC5qcyc7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISAnKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5jb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKCk7XG4vLyBUdSBwZXV4IGVucmVnaXN0cmVyIGljaSBkZXMgY29udHLDtGxldXJzIHN1cHBsw6ltZW50YWlyZXNcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29tbWVudHNNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb21tZW50c1wiKTtcbiAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gIH0pO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRCdXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjb21tZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKS52YWx1ZS50cmltKCk7IC8vIHBlZ2FyIGUgbGltcGFyXG5cbiAgICAgIGlmIChjb21tZW50Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIkxlIGNvbW1lbnRhaXJlIG5lIHBldXQgcGFzIMOqdHJlIHZpZGUgIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy9yb3V0ZVxuICAgICAgZmV0Y2goXCIvY29tbWVudC9uZXdcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIGVudmlhbmRvIHVtIEpTT04gOilcbiAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLCAvLyBBSkFYICEhISEhISFcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLCAvLyBjb29raWVzIGRlIGF1dGVudGljYcOnw6NvIHVzZXJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50OiBjb21tZW50Q29udGVudCB9KSxcbiAgICAgIH0pXG4gICAgICAgIC8vIG1pbmhhIHJlc3Bvc3RhLCBkZWZpbmlkYSBubyBtZXUgY29udHJvbGxlclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJldXIgZGUgcmVxdcOqdGUgOiBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIGNvbnZlcnRlbmRvIHByYSBKU09OXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRyYXRhbWVudG8vY3JpYcOnYW8gZG9zIGRhZG9zIHBhcmEgYXByZXNlbnRhciBhb3MgdXNlcnMgZGUgbWFuZWlyYSBkaW5hbWljYSwgZXNwZWxobyBkbyBjb2RlIGphIHJhbmRlcml6YWRvIG5vIHR3aWdcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtY29tbWVudHNcIik7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgIGxldCBuZXdDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld0NvbW1lbnQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgICAgXCJtLTJcIixcbiAgICAgICAgICAgICAgXCJ0ZXh0LWVuZFwiLFxuICAgICAgICAgICAgICBcImQtZmxleFwiLFxuICAgICAgICAgICAgICBcImZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGRhdGEucGhvdG9Vcmw7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWQtY2lyY2xlXCIsIFwiYWxpZ24tc2VsZi1lbmRcIik7XG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjYwcHhcIjtcbiAgICAgICAgICAgIGltZy5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZGF0YS51c2VybmFtZTtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29tbWVudEJveC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICBcImJnLWxpZ2h0XCIsXG4gICAgICAgICAgICAgIFwiYm9yZGVyXCIsXG4gICAgICAgICAgICAgIFwicC0yXCIsXG4gICAgICAgICAgICAgIFwicm91bmRlZFwiLFxuICAgICAgICAgICAgICBcImZsZXgtcm93LXJldmVyc2VcIixcbiAgICAgICAgICAgICAgXCJ3LTUwXCIsXG4gICAgICAgICAgICAgIFwiYWxpZ24tc2VsZi1lbmRcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBjb21tZW50VGV4dC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1lbmRcIik7XG4gICAgICAgICAgICBjb21tZW50VGV4dC50ZXh0Q29udGVudCA9IGRhdGEuY29udGVudDtcblxuICAgICAgICAgICAgbGV0IGNvbW1lbnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb21tZW50RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZnMtNlwiLCBcInRleHQtbXV0ZWRcIik7XG4gICAgICAgICAgICBjb21tZW50RGF0ZS50ZXh0Q29udGVudCA9IGRhdGEuZGF0ZTtcblxuICAgICAgICAgICAgLy8gYWRkIG5vIERPTSBlIGRlcG9pcyBkZXZvbHZlciBvIGltcHV0IHBhcmEgbyB1c2VyIHZhemlvXG4gICAgICAgICAgICBuZXdDb21tZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICBuZXdDb21tZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGNvbW1lbnRCb3guYXBwZW5kQ2hpbGQoY29tbWVudFRleHQpO1xuICAgICAgICAgICAgY29tbWVudEJveC5hcHBlbmRDaGlsZChjb21tZW50RGF0ZSk7XG4gICAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxUb3AgPSBjb21tZW50c0NvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbW1lbnQpO1xuICAgICAgICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudEJveCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlIDogXCIgKyBkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIDogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNvbGxlY3Rpb25Ib2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtcGxveWUtZmllbGRzXCIpO1xuICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtZW1wbG95ZVwiKTtcbiAgaWYgKGFkZEJ1dHRvbikge1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHByb3RvdHlwZSA9IGNvbGxlY3Rpb25Ib2xkZXIuZGF0YXNldC5wcm90b3R5cGU7XG4gICAgICBsZXQgaW5kZXggPSBjb2xsZWN0aW9uSG9sZGVyLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGxldCBuZXdGaWVsZCA9IHByb3RvdHlwZS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XG5cbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1ncm91cFwiLCBcIm1iLTJcIiwgXCJlbXBsb3llLWVudHJ5XCIpO1xuICAgICAgZGl2LmlubmVySFRNTCA9XG4gICAgICAgIG5ld0ZpZWxkICtcbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgcmVtb3ZlLWVtcGxveWVcIj5SZW1vdmVyPC9idXR0b24+JztcbiAgICAgIGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgYXR0YWNoUmVtb3ZlRXZlbnQoZGl2KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjaFJlbW92ZUV2ZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcmVtb3ZlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92ZS1lbXBsb3llXCIpO1xuICAgIGlmIChyZW1vdmVCdXR0b24pIHtcbiAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbXBsb3llLWVudHJ5XCIpLmZvckVhY2goYXR0YWNoUmVtb3ZlRXZlbnQpO1xufSk7XG4iLCJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpZG9cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBub3RpZmljYXRpb25JZCA9IHRoaXMuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIC8vIE9idMOpbSBvIElEIGRhIG5vdGlmaWNhw6fDo28gYSBwYXJ0aXIgZG8gYXRyaWJ1dG8gXCJkYXRhLWlkXCIgZG8gYm90w6NvIGNsaWNhZG9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmV0Y2goYC9ub3RpZmljYXRpb25zL3JlYWQvJHtub3RpZmljYXRpb25JZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gRmF6IHVtYSByZXF1aXNpw6fDo28gUE9TVCBwYXJhIG1hcmNhciBhIG5vdGlmaWNhw6fDo28gY29tbyBsaWRhXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiLCAvLyBJbmRpY2EgcXVlIMOpIHVtYSByZXF1aXNpw6fDo28gQUpBWFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpIC8vIENvbnZlcnRlIGEgcmVzcG9zdGEgcGFyYSBKU09OXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlIGEgcmVzcG9zdGEgaW5kaWNhciBzdWNlc3NvLCByZW1vdmUgYSBub3RpZmljYcOnw6NvIGRhIGxpc3RhXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKTsgLy8gUmVtb3ZlIG8gZWxlbWVudG8gPGxpPiBtYWlzIHByw7N4aW1vIGRvIGJvdMOjbyBjbGljYWRvXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFkZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhZGdlLmJnLWRhbmdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWNpb25hIG8gYmFkZ2UgKGNvbnRhZG9yIGRlIG5vdGlmaWNhw6fDtWVzKSBuYSBuYXZiYXJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWRnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gcGFyc2VJbnQoYmFkZ2UuaW5uZXJUZXh0KSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaW1pbnVpIG8gbsO6bWVybyBkZSBub3RpZmljYcOnw7VlcyBubyBiYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UuaW5uZXJUZXh0ID0gY291bnQ7IC8vIEF0dWFsaXphIG8gbsO6bWVybyBkbyBiYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRnZS5yZW1vdmUoKTsgLy8gUmVtb3ZlIG8gYmFkZ2Ugc2UgbsOjbyBob3V2ZXIgbWFpcyBub3RpZmljYcOnw7Vlc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbW1lbnRzTW9kYWwiLCJjb21tZW50c0NvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY29tbWVudENvbnRlbnQiLCJ2YWx1ZSIsInRyaW0iLCJhbGVydCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsIm5ld0NvbW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW1nIiwic3JjIiwicGhvdG9VcmwiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwibGFiZWwiLCJ0ZXh0Q29udGVudCIsInVzZXJuYW1lIiwiY29tbWVudEJveCIsImNvbW1lbnRUZXh0IiwiY29tbWVudERhdGUiLCJkYXRlIiwiYXBwZW5kQ2hpbGQiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb2xsZWN0aW9uSG9sZGVyIiwicXVlcnlTZWxlY3RvciIsImFkZEJ1dHRvbiIsInByb3RvdHlwZSIsImRhdGFzZXQiLCJpbmRleCIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3RmllbGQiLCJyZXBsYWNlIiwiZGl2IiwiaW5uZXJIVE1MIiwiYXR0YWNoUmVtb3ZlRXZlbnQiLCJlbGVtZW50IiwicmVtb3ZlQnV0dG9uIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJfdGhpcyIsIm5vdGlmaWNhdGlvbklkIiwiaWQiLCJjb25jYXQiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjb3VudCIsInBhcnNlSW50IiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==