import { livros } from "./biblioteca";
import * as Livraria from "./funcionalidades";
import readlineSync from 'readline-sync';
let id;
let op = "0"
let aviso = "sPor favor, digite um número inteiro válido."
while (op != "6") {
    console.log(`
        --------------------------
                Livraria Quatro Casas
        --------------------------
        1. Adicionar Livros
        2. Buscar Livros(Id, Titulo ou Ano)
        3. Registrar Emprestimo
        4. Devolução
        5. Listar Livros Disponiveis
        6. Encerrar Programa
        `)


    op = readlineSync.question("Informe: ")
    switch (op) {
        case "1":

            console.log("------------------------------Adiconar novo livro------------------------------")
            id = livros.length + 1
            let titulo = ""
            while (titulo.trim() === "") {
                titulo = readlineSync.question("Informe o titulo do livro: ")
            }
            let ano = readlineSync.questionInt("Informe o ano do livro: ", {
                limitMessage: aviso
            })
            Livraria.adicionarLivro({ id: id, titulo: titulo, ano: ano, disponivel: true })
            break;

        case "2":

            type Filtro = {
                id?: number;
                titulo?: string;
                ano?: number;
            };
            let filtros: Filtro = {};
            const opcoesBusca: Array<keyof Filtro> = ["id", "titulo", "ano"];
            let continuarLoop = true;
            while (opcoesBusca.length > 0 && continuarLoop) {
                const indiceOpcao = readlineSync.keyInSelect(opcoesBusca, 'Selecione o criterio de busca (ou pressione 0 para cancelar):')
                if (indiceOpcao == -1) {
                    console.log("Opção cancelada")
                    continuarLoop = false;
                    break;
                }

                const chave = opcoesBusca[indiceOpcao];

                switch (chave) {
                    case "id":
                        filtros[chave] = readlineSync.questionInt("Informe o id do livro: ", {
                            limitMessage: aviso
                        })
                        break;
                    case "titulo":
                        do {
                            filtros[chave] = readlineSync.question("Informe o titulo do livro: ");
                        } while (filtros[chave].trim() === "");
                        break;
                    case "ano":
                        filtros[chave] = readlineSync.questionInt("Informe o ano do livro: ", {
                            limitMessage: aviso
                        });
                        break;
                }
                opcoesBusca.splice(indiceOpcao, 1)
                if (!readlineSync.keyInYN("Deseja adicionar outro filtro?")) {
                    continuarLoop = false;
                }
            }
            let tamanho = Object.keys(filtros).length;

            if (tamanho > 0) {
                let resposta = Livraria.buscarLivro(filtros).length
                if (resposta = 0) {
                    console.log("Nenhum Livro corresponde aos criterios fornecidos")
                }else {
                    console.log(Livraria.buscarLivro(filtros))
                }
                
            }

            break;
        case "3":

            console.log("------------ Fazer Emprestimo-----------\nLivros Disponiveis")
            console.log(Livraria.livrosDisponiveis())
            id = readlineSync.questionInt("Informe o id do livro: ", {
                limitMessage: aviso
            });
            Livraria.alugarLivro(id)
            break;
        case "4":

            console.log("------------ Devolver Livro-----------\nLivros em aluguel")
            console.log(Livraria.livrosAlugados())
            id = readlineSync.questionInt("Informe o id do livro: ", {
                limitMessage: aviso
            });
            Livraria.devolverLivro(id)
            break;
        case "5":

            console.log("------------ Livros disponiveis-----------\n")
            console.log(Livraria.livrosDisponiveis())
            break;
        case "6":
            console.log("Encerrando.....")
            break;
        default:
            console.log("Opção Invalida")
            break;
    }

}


// console.log(Livraria.livrosDisponiveis())

// console.log(Livraria.livrosDisponiveis())
// console.log(Livraria.buscarLivro({ano: 1943}))

// Livraria.alugarLivro(5)
// console.log(Livraria.livrosDisponiveis())

// Livraria.devolverLivro(2)
