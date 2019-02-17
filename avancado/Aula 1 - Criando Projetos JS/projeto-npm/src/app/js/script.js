var Calculos = /** @class */ (function () {
    function Calculos() {
    }
    Calculos.prototype.somar = function (a, b) {
        return a + b;
    };
    Calculos.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculos.prototype.subtrair = function (a, b) {
        return a - b;
    };
    Calculos.prototype.dividir = function (a, b) {
        return a / b;
    };
    return Calculos;
}());

var calculo = new Calculos();

var soma = calculo.somar(10, 33);

console.log(soma);
