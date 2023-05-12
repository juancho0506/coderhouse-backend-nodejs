//Suma Refactored and optimized with Functional Programming.
export default (...numbers) => {
    console.log("Entrando a la suma con arreglo de numeros: ");
    console.log(numbers);
    if (numbers.length === 0) return 0;
    if (!numbers.every(num => typeof num === "number")) return null;
    let result = 0;
    result = numbers.reduce((prev, current) => prev + current);
    console.log("Resultado de la suma:");
    console.log(result);
    return result;
};