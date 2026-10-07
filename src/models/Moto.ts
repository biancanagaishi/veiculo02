import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interfaces/VeiculoProps.js";

// Passamos MotoProps para o Generic da classe mãe
export class Moto extends Veiculo<MotoProps> {
  constructor(props: MotoProps) {
    super(props); // Repassa o objeto inteiro para a mãe de uma vez só
  }

  public get getCilindradas(): number {
    return this.props.cilindradas;
  }

  public set setCilindradas(cc: number) {
    if (cc <= 0) {
      console.log("\n ERRO: As cilindradas devem ser maiores que zero!");
      return;
    }
    this.props.cilindradas = cc;
  }