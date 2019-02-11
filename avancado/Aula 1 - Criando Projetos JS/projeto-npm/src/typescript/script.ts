class Calculos {

    // public a: number;
    // public b: number;

    // constructor (a: number, b: number) {
    //     this.a = a;
    //     this.b = b;
    // }

    somar (a: number, b: number) {
        return a + b; 
    }

    multiplicar (a: number, b: number) {
        return a * b;
    }

    subtrair (a: number, b: number) {
        return a - b;
    }

    dividir (a: number, b: number) {
        return a / b;
    }
}

let calculo = new Calculos();

let soma = calculo.somar(10, 33);

document.getElementById('#soma').innerHTML = String(soma);

