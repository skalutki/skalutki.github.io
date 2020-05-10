"use strict";

console.log(`Welcom to my CV page. Witam na mojej stronie CV.`)

const list = document.querySelector('.projects__list-js');

fetch("https://api.github.com/users/skalutki/repos?sort=updated&direction=dest")
    .then(resp => resp.json())
    .then(resp => {
            const repos = resp;
            for (const repo of repos) {
                const { html_url, name, description, homepage } = repo

                list.innerHTML += `
            <li class="project">
                        <div class="project__container">
                            <img class="project__logo" src="../assets/img/GithubBlack.svg" alt="" width="48px" height="48px">
                            <h3 class="project__title">${name}</h3>
                            ${
                              description ? `<p class="project__description">${description}</p>` : 'No description'
                            }
                            
                        </div>
                        <div class="project__footer">
                        ${
                          homepage ? `<a class="project__link project__link--demo" href=""${homepage}" target="_blank" rel="nofollor noreferrer" title="Demo: ${name}">Demo</a>` : '' 
                        }
                            
                            <a class="project__link project__link--code" href="${html_url}" target="_blank" rel="nofollor noreferrer" title="Source code: ${name}"> GitHub</a>
                        </div>
                    </li>
                  `;
        }
    })
    .catch(err => {
        console.log(err);
    })