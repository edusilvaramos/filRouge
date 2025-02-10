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
      return response.json();
    }).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGLEtBQUssQ0FBQ0csU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUN6Qzs7WUFFQSxJQUFJRixLQUFLLEdBQUcsQ0FBQyxFQUFFO2NBQ1hELEtBQUssQ0FBQ0csU0FBUyxHQUFHRixLQUFLLENBQUMsQ0FBQztZQUM3QixDQUFDLE1BQU07Y0FDSEQsS0FBSyxDQUFDVCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEI7VUFDSjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNyQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9qcy9jb21tZW50LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvanMvZ2V0VXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL2dldFVzZXIuanMnO1xuaW1wb3J0ICcuLi9wdWJsaWMvYXNzZXRzL2pzL25vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgJy4uL3B1YmxpYy9hc3NldHMvanMvY29tbWVudC5qcyc7XG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISAnKTtcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG5jb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKCk7XG4vLyBUdSBwZXV4IGVucmVnaXN0cmVyIGljaSBkZXMgY29udHLDtGxldXJzIHN1cHBsw6ltZW50YWlyZXNcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbW1lbnRCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGNvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50XCIpLnZhbHVlLnRyaW0oKTsgLy8gcGVnYXIgZSBsaW1wYXJcblxuICAgICAgICBpZiAoY29tbWVudENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTGUgY29tbWVudGFpcmUgbmUgcGV1dCBwYXMgw6p0cmUgdmlkZSAhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4vL3JvdXRlXG4gICAgICAgIGZldGNoKFwiL2NvbW1lbnQvbmV3XCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIC8vIGVudmlhbmRvIHVtIEpTT04gOilcbiAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwiIC8vIEFKQVggISEhISEhIVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiwgLy8gY29va2llcyBkZSBhdXRlbnRpY2HDp8OjbyB1c2VyIFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50OiBjb21tZW50Q29udGVudCB9KVxuICAgICAgICB9KVxuICAgICAgICAvLyBtaW5oYSByZXNwb3N0YSwgZGVmaW5pZGEgbm8gbWV1IGNvbnRyb2xsZXJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycmV1ciBkZSByZXF1w6p0ZSA6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGxldCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb21tZW50c1wiKTtcblx0XHRcdFx0Y29tbWVudHNDb250YWluZXIuc2Nyb2xsVG9wID0gY29tbWVudHNDb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIG5ld0NvbW1lbnQuY2xhc3NMaXN0LmFkZChcIm0tMlwiLCBcInRleHQtZW5kXCIsIFwiZC1mbGV4XCIsIFwiZmxleC1jb2x1bW5cIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gZGF0YS5waG90b1VybDtcbiAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1mbHVpZFwiLCBcInJvdW5kZWQtY2lyY2xlXCIsIFwiYWxpZ24tc2VsZi1lbmRcIik7XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiNjBweFwiO1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5vYmplY3RGaXQgPSBcImNvdmVyXCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBkYXRhLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvbW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvbW1lbnRCb3guY2xhc3NMaXN0LmFkZChcImJnLWxpZ2h0XCIsIFwiYm9yZGVyXCIsIFwicC0yXCIsIFwicm91bmRlZFwiLCBcImZsZXgtcm93LXJldmVyc2VcIiwgXCJ3LTUwXCIsIFwiYWxpZ24tc2VsZi1lbmRcIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29tbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBjb21tZW50VGV4dC5jbGFzc0xpc3QuYWRkKFwicC0yXCIsIFwidGV4dC1lbmRcIik7XG4gICAgICAgICAgICAgICAgY29tbWVudFRleHQudGV4dENvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29tbWVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBjb21tZW50RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZnMtNlwiLCBcInRleHQtbXV0ZWRcIik7XG4gICAgICAgICAgICAgICAgY29tbWVudERhdGUudGV4dENvbnRlbnQgPSBkYXRhLmRhdGU7XG5cbiAgICAgICAgICAgICAgICBuZXdDb21tZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgICAgICAgICAgbmV3Q29tbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tbWVudEJveC5hcHBlbmRDaGlsZChjb21tZW50VGV4dCk7XG4gICAgICAgICAgICAgICAgY29tbWVudEJveC5hcHBlbmRDaGlsZChjb21tZW50RGF0ZSk7XG5cdFx0XHRcdGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbFRvcCA9IGNvbW1lbnRzQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcblxuXG4gICAgICAgICAgICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29tbWVudCk7XG5cdFx0XHRcdGNvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRCb3gpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgOiBcIiArIGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBjb2xsZWN0aW9uSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbXBsb3llLWZpZWxkc1wiKTtcbiAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWVtcGxveWVcIik7XG4gIGlmIChhZGRCdXR0b24pIHtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBwcm90b3R5cGUgPSBjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQucHJvdG90eXBlO1xuICAgICAgbGV0IGluZGV4ID0gY29sbGVjdGlvbkhvbGRlci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICBsZXQgbmV3RmllbGQgPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZ3JvdXBcIiwgXCJtYi0yXCIsIFwiZW1wbG95ZS1lbnRyeVwiKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPVxuICAgICAgICBuZXdGaWVsZCArXG4gICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIHJlbW92ZS1lbXBsb3llXCI+UmVtb3ZlcjwvYnV0dG9uPic7XG4gICAgICBjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAgIGF0dGFjaFJlbW92ZUV2ZW50KGRpdik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2hSZW1vdmVFdmVudChlbGVtZW50KSB7XG4gICAgbGV0IHJlbW92ZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZW1vdmUtZW1wbG95ZVwiKTtcbiAgICBpZiAocmVtb3ZlQnV0dG9uKSB7XG4gICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZW1wbG95ZS1lbnRyeVwiKS5mb3JFYWNoKGF0dGFjaFJlbW92ZUV2ZW50KTtcbn0pO1xuIiwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWRvXCIpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgbm90aWZpY2F0aW9uSWQgPSB0aGlzLmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAvLyBPYnTDqW0gbyBJRCBkYSBub3RpZmljYcOnw6NvIGEgcGFydGlyIGRvIGF0cmlidXRvIFwiZGF0YS1pZFwiIGRvIGJvdMOjbyBjbGljYWRvXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZldGNoKGAvbm90aWZpY2F0aW9ucy9yZWFkLyR7bm90aWZpY2F0aW9uSWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIEZheiB1bWEgcmVxdWlzacOnw6NvIFBPU1QgcGFyYSBtYXJjYXIgYSBub3RpZmljYcOnw6NvIGNvbW8gbGlkYVxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIiwgLy8gSW5kaWNhIHF1ZSDDqSB1bWEgcmVxdWlzacOnw6NvIEFKQVhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvLyBDb252ZXJ0ZSBhIHJlc3Bvc3RhIHBhcmEgSlNPTlxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZSBhIHJlc3Bvc3RhIGluZGljYXIgc3VjZXNzbywgcmVtb3ZlIGEgbm90aWZpY2HDp8OjbyBkYSBsaXN0YVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZXN0KFwibGlcIikucmVtb3ZlKCk7IC8vIFJlbW92ZSBvIGVsZW1lbnRvIDxsaT4gbWFpcyBwcsOzeGltbyBkbyBib3TDo28gY2xpY2Fkb1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhZGdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWRnZS5iZy1kYW5nZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjaW9uYSBvIGJhZGdlIChjb250YWRvciBkZSBub3RpZmljYcOnw7VlcykgbmEgbmF2YmFyXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFkZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHBhcnNlSW50KGJhZGdlLmlubmVyVGV4dCkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGltaW51aSBvIG7Dum1lcm8gZGUgbm90aWZpY2HDp8O1ZXMgbm8gYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLmlubmVyVGV4dCA9IGNvdW50OyAvLyBBdHVhbGl6YSBvIG7Dum1lcm8gZG8gYmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UucmVtb3ZlKCk7IC8vIFJlbW92ZSBvIGJhZGdlIHNlIG7Do28gaG91dmVyIG1haXMgbm90aWZpY2HDp8O1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50QnlJZCIsImNvbW1lbnRDb250ZW50IiwidmFsdWUiLCJ0cmltIiwiYWxlcnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJjb21tZW50c0NvbnRhaW5lciIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm5ld0NvbW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW1nIiwic3JjIiwicGhvdG9VcmwiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwibGFiZWwiLCJ0ZXh0Q29udGVudCIsInVzZXJuYW1lIiwiY29tbWVudEJveCIsImNvbW1lbnRUZXh0IiwiY29tbWVudERhdGUiLCJkYXRlIiwiYXBwZW5kQ2hpbGQiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb2xsZWN0aW9uSG9sZGVyIiwicXVlcnlTZWxlY3RvciIsImFkZEJ1dHRvbiIsInByb3RvdHlwZSIsImRhdGFzZXQiLCJpbmRleCIsImNoaWxkcmVuIiwibGVuZ3RoIiwibmV3RmllbGQiLCJyZXBsYWNlIiwiZGl2IiwiaW5uZXJIVE1MIiwiYXR0YWNoUmVtb3ZlRXZlbnQiLCJlbGVtZW50IiwicmVtb3ZlQnV0dG9uIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJfdGhpcyIsIm5vdGlmaWNhdGlvbklkIiwiaWQiLCJjb25jYXQiLCJjbG9zZXN0IiwiYmFkZ2UiLCJjb3VudCIsInBhcnNlSW50IiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==