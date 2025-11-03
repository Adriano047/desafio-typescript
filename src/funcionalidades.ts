import { livros, type Livro } from "./biblioteca";

type FiltroLivro = {
    id?: number;
    titulo?: string;
    ano?: number;
};
// Adicionar filme
export function adicionarLivro(novoLivro: Livro) {
    livros.push(novoLivro)
    console.log("Adicionado")
}

//Buscar Livro
export function buscarLivro(filtro: FiltroLivro) {
    return livros.filter(l =>
        (filtro.id === undefined || l.id === filtro.id) &&
        (filtro.titulo === undefined || l.titulo === filtro.titulo) &&
        (filtro.ano === undefined || l.ano === filtro.ano)
    );
}

export function alugarLivro(id: Number) {
    const livro = livros.find((l) => l.id === id);
    if (livro && livro.disponivel) {
        livro.disponivel = false;
        livro.dataEmprestimo = new Date()
        console.log(`Livro "${livro.titulo}" alugado!`)
    } else {
        console.log("Livro não disponivel")
    }
}

export function livrosDisponiveis() {
    let disponiveis = livros.filter((l) => l.disponivel)
    return disponiveis.map(l => ({ id: l.id, titulo: l.titulo }))
}
export function livrosAlugados() {
    let alugados = livros.filter((l) => l.disponivel == false)
    return alugados.map(l => ({ id: l.id, titulo: l.titulo }))
}
// os cinco primeiros dias sem multa apos: R$3.00 para cada dia.
export function devolverLivro(id: Number) {
    const livro = livros.find((l) => l.id === id);
    if (livro && livro.dataEmprestimo) {

        const agora = new Date();
        const diffEmMs = agora.getTime() - livro.dataEmprestimo.getTime();
        const diffEmDias = diffEmMs / (1000 * 60 * 60 * 24);
        delete livro.dataEmprestimo;
        if (diffEmDias > 5) {
            let diasMais = (diffEmDias | 0) - 5;
            let multa = diasMais * 3;
            console.log(`\nLivro entregue com atraso\no cliente pagará R$3,00 por cada dia de atraso\ndias de atraso: ${diasMais}, total a pagar: R$${multa},00`)
        } else {
            console.log("Livro Devolvido")
        }
    } else {
        console.log("Este livro não foi alugado")
    }
}
// adicionarFilme({ id: "1", titulo: "Matrix", disponivel: true});
// adicionarFilme({ id: "2", titulo: "Avatar", disponivel: true});

// console.log("Filmes disponiveis:", listarDisponiveis().map(f => f.titulo))

// alugarFilme("1")

// console.log("Após aluguel:", listarDisponiveis().map(f => f.titulo))