export default (...numbers) => {
    console.log("Entrando a la suma con arreglo de numeros: ");
    console.log(numbers);
    if (numbers.length === 0) return 0;
    let validInputs = true;
    let i = 0;
    while (validInputs && i<numbers.length) {
        if (typeof numbers[i] !== "number") {
            validInputs = false;
            return null;
        }
        i++;
    } 
    console.log("Valid inputs? :" + validInputs);
    if (!validInputs) return null;
    let result = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    console.log("Resultado de la suma:");
    console.log(result);
    return result;
};