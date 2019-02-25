import NotasAPI from '../../domain/services/NotasAPI'
import InstrutoresAPI from '../../domain/services/InstrutoresAPI'

var tabelaNotas = document.querySelector('#notas');
var tabelaInstrutores = document.querySelector('#instrutores');

function preencheInstrutores () {

    let notas = []
    let instrutores = []

    NotasAPI.obter().then(respostaNotas => {
        this.respostaNotas = notas.data
    })
    InstrutoresAPI.obter().then(respostaInstrutores => {
        this.respostaNotas = instrutores.data
    })

    var instrutores = new Map()
    var notas = new Map()

    for (var instrutor of instrutores.values) {
        console.log(instrutor.nome)
    }

    for (var nota of notas.values) {
        console.log(nota.nome)
    }
}

function updateNotas(notas) {
    tabela.innerHTML = templateNotas(notas);
}
function updateInstrutores(instrutores) {
    tabela.innerHTML = templateInstrutores(instrutores);
}

function templateInstrutores(instrutores = []) {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Nome</th>
            </tr>
        </thead>
        <tbody>
        ${
            instrutores.map(function(instrutores){
                return `
                    <tr>
                        <td>${instrutores.nome}</td>
                    </tr>
                `;
            }).join('')
        }
        </tbody>
    </table>
    `;
}

function templateNotas(notas = []) {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Titulo</th>
                <th>Texto</th>
            </tr>
        </thead>
        <tbody>
        ${
            notas.map(function(notas){
                return `
                    <tr>
                        <td>${notas.titulo}</td>
                        <td>${notas.texto}</td>
                    </tr>
                `;
            }).join('')
        }
        </tbody>
    </table>
    `;
}