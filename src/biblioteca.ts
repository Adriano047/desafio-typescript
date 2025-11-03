export type Livro = {
    id: Number;
    titulo: String;
    ano: Number;
    disponivel: Boolean;
    dataEmprestimo?: Date;
}
export const livros: Livro[] = [
    {
        id: 1,
        titulo: "Dom Quixote",
        ano: 1605,
        disponivel: true
    },
    {
        id: 2,
        titulo: "1984",
        ano: 1949,
        disponivel: false,
        dataEmprestimo: new Date("2025-10-20")
    },
    {
        id: 3,
        titulo: "O Hobbit",
        ano: 1937,
        disponivel: true
    },
    {
        id: 4,
        titulo: "O Pequeno Príncipe",
        ano: 1943,
        disponivel: false,
        dataEmprestimo: new Date("2025-10-25")
    },
    {
        id: 5,
        titulo: "Moby Dick",
        ano: 1943,
        disponivel: true
    },
    {
        id: 6,
        titulo: "Hamlet",
        ano: 1603,
        disponivel: false,
        dataEmprestimo: new Date("2025-10-18")
    },
    {
        id: 7,
        titulo: "A Revolução dos Bichos",
        ano: 1945,
        disponivel: true
    },
    {
        id: 8,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        ano: 1954,
        disponivel: true
    },
    {
        id: 9,
        titulo: "Crime e Castigo",
        ano: 1866, disponivel: false,
        dataEmprestimo: new Date("2025-10-22")
    },
    {
        id: 10,
        titulo: "Cem Anos de Solidão",
        ano: 1967,
        disponivel: true
    }
];
// let a = livros[9]?.dataEmprestimo
// if (a == undefined) {
//     console.log("ale")
// }else {


// console.log(a.toISOString().split("T")[0])}