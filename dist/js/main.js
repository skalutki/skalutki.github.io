!function(c){var g={};function n(I){if(g[I])return g[I].exports;var r=g[I]={i:I,l:!1,exports:{}};return c[I].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=c,n.c=g,n.d=function(c,g,I){n.o(c,g)||Object.defineProperty(c,g,{enumerable:!0,get:I})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,g){if(1&g&&(c=n(c)),8&g)return c;if(4&g&&"object"==typeof c&&c&&c.__esModule)return c;var I=Object.create(null);if(n.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:c}),2&g&&"string"!=typeof c)for(var r in c)n.d(I,r,function(g){return c[g]}.bind(null,r));return I},n.n=function(c){var g=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(g,"a",g),g},n.o=function(c,g){return Object.prototype.hasOwnProperty.call(c,g)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\n/*\r\n// service worker registration - remove if you\'re not going to use it\r\n\r\nif (\'serviceWorker\' in navigator) {\r\n  window.addEventListener(\'load\', function() {\r\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function(registration) {\r\n      // Registration was successful\r\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log(\'ServiceWorker registration failed: \', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n*/\r\nconst list = document.querySelector(\'.projects__list-js\');\r\n\r\nfetch("https://api.github.com/users/skalutki/repos?sort=updated&direction=dest")\r\n    .then(resp => resp.json())\r\n    .then(resp => {\r\n        const repos = resp;\r\n        for (const repo of repos) {\r\n            const { html_url, name, description, homepage } = repo\r\n            console.log(repo)\r\n            list.innerHTML += `\r\n            <li class="projects__list-item"> \r\n              <section class="project">\r\n                <span class="project__icon1"></span> \r\n                <h3 class="project__title">${name}</h3> \r\n                <p class="project__paragraph">${description ? description : "brak opisu repozytorium"}</p>\r\n                <section class="link">\r\n                  <div class="link__box">\r\n                    <a class="link__box-item" href = "${homepage}"> <span class="link__box-icon2"></span>Demo</a> \r\n                    <div class="link__box-separation"></div>\r\n                    <a class="link__box-item" href = "${html_url}"> <span class="link__box-icon3"></span>Github</a>\r\n                  </div>\r\n                </section>                \r\n              </section>\r\n            </li>\r\n                  `;\r\n        }\r\n    })\r\n    .catch(err => {\r\n        console.log(err);\r\n    })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUF3QztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQsZ0RBQWdELHNEQUFzRDtBQUN0RztBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQSx3REFBd0QsU0FBUztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUsiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vKlxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcclxuICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG4qL1xyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0LWpzJyk7XHJcblxyXG5mZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvc2thbHV0a2kvcmVwb3M/c29ydD11cGRhdGVkJmRpcmVjdGlvbj1kZXN0XCIpXHJcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVwb3MgPSByZXNwO1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVwbyBvZiByZXBvcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IGh0bWxfdXJsLCBuYW1lLCBkZXNjcmlwdGlvbiwgaG9tZXBhZ2UgfSA9IHJlcG9cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVwbylcclxuICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0c19fbGlzdC1pdGVtXCI+IFxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicHJvamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0X19pY29uMVwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0X190aXRsZVwiPiR7bmFtZX08L2gzPiBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdF9fcGFyYWdyYXBoXCI+JHtkZXNjcmlwdGlvbiA/IGRlc2NyaXB0aW9uIDogXCJicmFrIG9waXN1IHJlcG96eXRvcml1bVwifTwvcD5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua19fYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsaW5rX19ib3gtaXRlbVwiIGhyZWYgPSBcIiR7aG9tZXBhZ2V9XCI+IDxzcGFuIGNsYXNzPVwibGlua19fYm94LWljb24yXCI+PC9zcGFuPkRlbW88L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rX19ib3gtc2VwYXJhdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGlua19fYm94LWl0ZW1cIiBocmVmID0gXCIke2h0bWxfdXJsfVwiPiA8c3BhbiBjbGFzcz1cImxpbmtfX2JveC1pY29uM1wiPjwvc3Bhbj5HaXRodWI8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);