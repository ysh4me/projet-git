const x = 5;
const y = 10;
const z = 20;
let a = 30;
const b = 40;

function test() {
    // Utilisation de toutes les variables
    a = x + y + z + b;
    return a;
}

// Appel de la fonction pour l'utiliser
console.log(test());
