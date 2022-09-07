"use strict";
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    // incrémenter i et changer la valeur indiquée
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
// utiliser l'add event listener que si le compteur existe
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
