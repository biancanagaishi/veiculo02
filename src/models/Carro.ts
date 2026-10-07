
import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "../interfaces/VeiculoProps.js";

// Passamos CarroProps para o Generic da classe mãe
export class Carro extends Veiculo<CarroProps> {
  constructor(props: CarroProps) {
    super(props); // Repassa o objeto inteiro para a mãe de uma vez só
  }

  public get getQuantidadePortas(): number {
    return this.props.quantidadePortas;
  }

  public set setQuantidadePortas(qtd: number) {
    if (qtd <= 0) {
      console.log("\n ERRO: A quantidade de portas deve ser maior que zero!");
      return;
    }
    this.props.quantidadePortas = qtd;
  }
}
