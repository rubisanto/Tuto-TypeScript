// Le "!" permet de dire que compteur ne peut pas être nul ou undefined
const compteur = document.querySelector<HTMLButtonElement>('#compteur')!;
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

// créer un type 
type User = {firstname: string, lastname: string}
type DateString = string;
type Id = string | number;

// les génériques 
// même type en entrée et en sortie

function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}

const aa = identity<number>(3);

// avec un tableau 

function first<Type>(arg: Type[]): Type {
    return arg[0];
}

const bb = first(["aze","cze","bze"]);

const cc: Array<string | number> = ["az", "cze", 3];

type Identity<ArgType> = (arg: ArgType) => ArgType;

// avec contraintes 
function consoleSize<Type extends {length: number}>(arg: Type): Type{
    console.log(arg.length);
    return arg;
}

const aab = consoleSize(["3", 2]);

// type qui dépend  un autre avec les clefs  

type P = keyof User

// héritage d un autre type 
type Username = User['firstname']

// extraire un type avec de l'existant 
const user = {
    firstname: "John",
    lastname: "Doe",
    age: 32
}

type User = typeof user;