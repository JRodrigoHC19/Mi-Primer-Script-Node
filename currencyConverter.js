const readLine = require('readline');
rl = readLine.createInterface(process.stdin, process.stdout);

console.log("Hola Mundo!");
rl.question("Indique la cantidad en dólares: ", function(answer){
    cantidad = parseInt(answer);
    console.log(`La conversión fue exitosa, ahora usted cuenta con: ${cantidad*0.85} euros`);
    rl.close();
})
