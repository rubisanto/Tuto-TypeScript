// Le "!" permet de dire que compteur ne peut pas être nul ou undefined
const compteur = document.querySelector('#compteur')!;
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


function printId(id: string | number) {
    // multiplier par 3 si number
    if (typeof id === 'number') {
        console.log((id * 3).toString());
    } else {
        console.log(id.toUpperCase());
    }
    
}

function example(a: string | string[]) {
    if (Array.isArray(a)) {
        return a[0];
    }
    return a;
    
    
}

function example2 (a : MouseEvent |HTMLInputElement) {
    // narrowing de a en HTMLInputElement
    if ("value" in a) {
        return a.value;
    }
    
}

// vérifier que le paramètre est une date
function isDate(a: any): a is Date {
    return a instanceof Date;
}

// utiliser l'add event listener que si le compteur existe

compteur?.addEventListener('click', increment);