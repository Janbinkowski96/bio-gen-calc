/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */\r\nparticlesJS.load('particles-js', '/static/js/assets/particles.json', function () {\r\n  console.log('callback - particles.js config loaded');\r\n});\r\n\r\n$(document).ready(function () {\r\n  $(\"#back-top\").hide();\r\n  $(function () {\r\n    $(window).scroll(function () {\r\n      if ($(this).scrollTop() > 100) {\r\n        $('#back-top').fadeIn();\r\n      } else {\r\n        $('#back-top').fadeOut();\r\n      }\r\n    });\r\n    $('#back-top').click(function () {\r\n      $('body,html').animate({\r\n        scrollTop: 0\r\n      },'slow');\r\n      return false;\r\n    });\r\n  });\r\n});\r\n\r\n$(window).bind(\"load\", function () {\r\n\r\n  let footerHeight = 0,\r\n    footerTop = 0,\r\n    $footer = $(\".footer\");\r\n\r\n  positionFooter();\r\n\r\n  function positionFooter() {\r\n    footerHeight = $footer.height();\r\n    // 20 is as padding height\r\n    footerTop = ($(window).scrollTop() + $(window).height() - footerHeight - 53) + \"px\";\r\n\r\n    if (($(document.body).height() + footerHeight) < $(window).height()) {\r\n      $footer.css({\r\n        position: \"absolute\",\r\n        width: \"100%\"\r\n      }).animate({\r\n        top: footerTop\r\n      })\r\n    }\r\n    else {\r\n      $footer.css({\r\n        position: \"static\"\r\n      })\r\n    }\r\n\r\n  }\r\n\r\n  $(window)\r\n    .scroll(positionFooter)\r\n    .resize(positionFooter)\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwYXJ0aWNsZXNKUy5sb2FkKEBkb20taWQsIEBwYXRoLWpzb24sIEBjYWxsYmFjayAob3B0aW9uYWwpKTsgKi9cclxucGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWpzJywgJy9zdGF0aWMvanMvYXNzZXRzL3BhcnRpY2xlcy5qc29uJywgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCdjYWxsYmFjayAtIHBhcnRpY2xlcy5qcyBjb25maWcgbG9hZGVkJyk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICQoXCIjYmFjay10b3BcIikuaGlkZSgpO1xyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICAgJCgnI2JhY2stdG9wJykuZmFkZUluKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnI2JhY2stdG9wJykuZmFkZU91dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJyNiYWNrLXRvcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgIH0sJ3Nsb3cnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLmJpbmQoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGZvb3RlckhlaWdodCA9IDAsXHJcbiAgICBmb290ZXJUb3AgPSAwLFxyXG4gICAgJGZvb3RlciA9ICQoXCIuZm9vdGVyXCIpO1xyXG5cclxuICBwb3NpdGlvbkZvb3RlcigpO1xyXG5cclxuICBmdW5jdGlvbiBwb3NpdGlvbkZvb3RlcigpIHtcclxuICAgIGZvb3RlckhlaWdodCA9ICRmb290ZXIuaGVpZ2h0KCk7XHJcbiAgICAvLyAyMCBpcyBhcyBwYWRkaW5nIGhlaWdodFxyXG4gICAgZm9vdGVyVG9wID0gKCQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSAtIGZvb3RlckhlaWdodCAtIDUzKSArIFwicHhcIjtcclxuXHJcbiAgICBpZiAoKCQoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkgKyBmb290ZXJIZWlnaHQpIDwgJCh3aW5kb3cpLmhlaWdodCgpKSB7XHJcbiAgICAgICRmb290ZXIuY3NzKHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICB9KS5hbmltYXRlKHtcclxuICAgICAgICB0b3A6IGZvb3RlclRvcFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICRmb290ZXIuY3NzKHtcclxuICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIlxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICQod2luZG93KVxyXG4gICAgLnNjcm9sbChwb3NpdGlvbkZvb3RlcilcclxuICAgIC5yZXNpemUocG9zaXRpb25Gb290ZXIpXHJcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ })

/******/ });