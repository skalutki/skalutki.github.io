"use strict";
/*
// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below
*/
const list = document.querySelector('.projects__list-js');

fetch("https://api.github.com/users/skalutki/repos?sort=updated&direction=dest")
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        for (const repo of repos) {
            const { html_url, name, description, homepage } = repo
            console.log(repo)
            list.innerHTML += `
            <li class="projects__list-item"> 
              <section class="project">
                <span class="project__icon1"></span> 
                <h3 class="project__title">${name}</h3> 
                <p class="project__paragraph">${description ? description : "brak opisu repozytorium"}</p>
                <section class="project__link">
                  <div class="project__link-position">
                    <a class="project__link-item" href = "${html_url}"> <span class="project__link-icon2"></span>Demo</a> 
                    <div class="project__link-separation"></div>
                    <a class="project__link-item" href = "${homepage}"> <span class="project__link-icon3"></span>Live</a>
                  </div>
                </section>                
              </section>
            </li>
                  `;
        }
    })
    .catch(err => {
        console.log(err);
    })