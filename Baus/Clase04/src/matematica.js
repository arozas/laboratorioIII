const sumar = function(num1, num2){
    return num1+num2
};
function restar(num1, num2){
    return num1-num2
};
function multiplicar(num1, num2){
    return num1*num2
};
// solo se puede tener un default export
export default function dividir(num1, num2){
    return num1/num2
};

export {
    sumar,
    restar,
    multiplicar,
    dividir
}