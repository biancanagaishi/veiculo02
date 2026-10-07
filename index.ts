import readLine from "readline-sync";
import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";

console.log("=== CADASTRO DE VEÍCULOS ===");

// 1. Instanciando um Carro usando o objeto de propriedades (Interface)
const meuCarro = new Carro({
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023,
    quantidadePortas: 4
});

console.log(`\nCarro cadastrado: ${meuCarro.getMarca} ${meuCarro.getModelo}`);
console.log(`Portas: ${meuCarro.getQuantidadePortas}`);

// Interação via teclado utilizando herança (Setters modificando as propriedades)
meuCarro.setMarca = readLine.question("\nDigite a marca atualizada do carro: ");
meuCarro.setModelo = readLine.question("Digite o novo modelo do carro: ");

const portasInput = readLine.question("Digite a nova quantidade de portas: ");
meuCarro.setQuantidadePortas = parseInt(portasInput);

// Exibindo TODOS os dados do Carro
console.log("\n================================================");
console.log("             DADOS COMPLETOS DO CARRO           ");
console.log("================================================");
// Dados herdados da classe Veiculo
console.log(`Marca:                ${meuCarro.getMarca}`);
console.log(`Modelo:               ${meuCarro.getModelo}`);
console.log(`Ano:                  ${meuCarro.getAno}`);
// Dados específicos da classe Carro
console.log(`Qtd de Portas:        ${meuCarro.getQuantidadePortas}`);
console.log("================================================\n");


// 2. Instanciando uma Moto usando o objeto de propriedades (Interface)
console.log("=== CADASTRO DE MOTO ===");
const minhaMoto = new Moto({
    marca: "Honda",
    modelo: "CB 500",
    ano: 2022,
    cilindradas: 500
});

console.log(`\nMoto cadastrada: ${minhaMoto.getMarca} ${minhaMoto.getModelo}`);
console.log(`Cilindradas: ${minhaMoto.getCilindradas}cc`);

// Interação via teclado para a Moto
minhaMoto.setMarca = readLine.question("\nDigite a marca atualizada da moto: ");
minhaMoto.setModelo = readLine.question("Digite o novo modelo da moto: ");

const ccInput = readLine.question("Digite as novas cilindradas: ");
minhaMoto.setCilindradas = parseInt(ccInput);

// Exibindo TODOS os dados da Moto
console.log("\n================================================");
console.log("             DADOS COMPLETOS DA MOTO            ");
console.log("================================================");
// Dados herdados da classe Veiculo
console.log(`Marca:                ${minhaMoto.getMarca}`);
console.log(`Modelo:               ${minhaMoto.getModelo}`);
console.log(`Ano:                  ${minhaMoto.getAno}`);
// Dados específicos da classe Moto
console.log(`Cilindradas:          ${minhaMoto.getCilindradas}cc`);
console.log("================================================\n");

