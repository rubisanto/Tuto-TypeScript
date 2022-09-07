const compteur = document.querySelector('#compteur');
let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    // incrémenter i et changer la valeur indiquée
    i++;
    const span = compteur?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
    
}

// utiliser l'add event listener que si le compteur existe

compteur?.addEventListener('click', increment);