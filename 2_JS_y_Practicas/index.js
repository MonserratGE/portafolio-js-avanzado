operations = require('./function')

function main() {
    let num1 = 10;
    let num2 = 5;

    const resSuma = operations.sum(num1,num2);
    const resResta = operations.substract(num1,num2);
    const resMulti = operations.multiply(num1,num2);
    const resDivi = operations.divide(num1,num2);

    console.log(`resSuma: ${resSuma}`);
    console.log(`resResta: ${resResta}`);
    console.log(`resMulti: ${resMulti}`);
    console.log(`resDivi: ${resDivi}`);
}

main();