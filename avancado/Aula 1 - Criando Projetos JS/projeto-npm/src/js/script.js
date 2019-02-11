var Calculos = /** @class */ (function () {
    function Calculos() {
    }
    // public a: number;
    // public b: number;
    // constructor (a: number, b: number) {
    //     this.a = a;
    //     this.b = b;
    // }
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
document.getElementById('#soma').innerHTML = String(soma);
