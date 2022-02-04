/*console.log('1 Inicio');
console.log('2 Ejecutando');
console.log('3 Terminando');*/

const { runInContext } = require("vm")


/*console.log('1 Inicio');
setTimeout(() =>{
    console.log('2 Ejecutando');
}, 1000)
console.log('3 Terminando');*/

function run(){
    console.log('1 Inicio');
    myFuncion(ejecutando);

}

function myFuncion(ejecutando) {
    setTimeout(() =>{
        console.log('2 Ejecutando');
    }, 0000)
}

function ejecutando() {
    console.log('3 Terminando');
    console.log('4 Fin');
}

run();