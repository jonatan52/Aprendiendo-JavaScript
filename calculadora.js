const args = process.argv.slice(2); // Ignora los primeros 2 elementos
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operacion = args[2].toLowerCase();// Normaliza a minúsculas

if(isNaN(num1) || isNaN(num2)){
    console.warn('Error: Los primeros dos argumentos deben ser números.');
    process.exit(1);// Termina el programa con código de error
}

let resultado;
switch (operacion) {
    case 'suma':
        resultado = num1 + num2
        break;
    case 'resta':
        resultado = num1 - num2
        break;    
    case 'multiplicaion':
        resultado = num1 * num2
        break;    
    case 'division':
        resultado = num1 / num2
        break;    

    default:
        console.warn(`Error: Operación no válida. Usa "suma", "resta" o "multiplicacion".`);
        process.exit(1);
        
}

console.log(`Resultado: ${resultado}`);