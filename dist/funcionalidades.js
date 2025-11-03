"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const biblioteca_1 = require("./biblioteca");
// Adicionar filme
function adicionarLivro(novoLivro) {
    biblioteca_1.livros.push(novoLivro);
}
//Buscar Livro
function buscarLivro(ano, id, titulo) {
    biblioteca_1.livros.filter((l) => l.id === id || l.ano === ano || l.titulo === titulo);
}
function alugarLivro(id) {
    const livro = biblioteca_1.livros.find((l) => l.id === id);
    if (livro && livro.disponivel) {
        livro.disponivel = false;
        livro.dataEmprestimo = new Date();
        console.log(`Livro "${livro.titulo}" alugado!`);
    }
    else {
        console.log("Livro não disponivel");
    }
}
function livrosDisponiveis() {
    let disponiveis = biblioteca_1.livros.filter((l) => l.disponivel);
    return disponiveis.map(l => l.titulo);
}
// os cinco primeiros dias sem multa apos: R$3.00 para cada dia.
function devolverLivro(id) {
    const livro = biblioteca_1.livros.find((l) => l.id === id);
    if (livro && livro.dataEmprestimo) {
        const agora = new Date();
        const diffEmMs = agora.getTime() - livro.dataEmprestimo.getTime();
        const diffEmDias = diffEmMs / (1000 * 60 * 60 * 24);
        delete livro.dataEmprestimo;
        if (diffEmDias > 5) {
            let diasMais = diffEmDias - 5;
            let multa = diasMais * 3;
            console.log(`
                Livro entregue com atraso
                o cliente pagará R$3,00 por cada dia de atraso
                dias de atraso: ${diasMais}, total a pagar: R$${multa},00
                `);
        }
        else {
            console.log("Livro Devolvido");
        }
    }
    else {
        console.log("Este livro não foi alugado");
    }
}
// adicionarFilme({ id: "1", titulo: "Matrix", disponivel: true});
// adicionarFilme({ id: "2", titulo: "Avatar", disponivel: true});
// console.log("Filmes disponiveis:", listarDisponiveis().map(f => f.titulo))
// alugarFilme("1")
// console.log("Após aluguel:", listarDisponiveis().map(f => f.titulo))
//# sourceMappingURL=funcionalidades.js.map