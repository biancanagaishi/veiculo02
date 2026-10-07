import { VeiculoProps } from "../interfaces/VeiculoProps.js";

// A classe recebe o Generic <T> para entender as propriedades das classes filhas
export class Veiculo<T extends VeiculoProps = VeiculoProps> {
  // O 'protected' permite que as filhas enxerguem o objeto 'props'
  constructor(protected props: T) {}

  public get getMarca(): string {
    return this.props.marca;
  }

  public get getModelo(): string {
    return this.props.modelo;
  }

  public get getAno(): number {
    return this.props.ano;
  }

  public set setMarca(novaMarca: string) {
    if (novaMarca.trim().length === 0) {
      console.log("\n ERRO: A marca não pode ser vazia!");
      return;
    }
    this.props.marca = novaMarca;
  }

  public set setModelo(novoModelo: string) {
    if (novoModelo.trim().length === 0) {
      console.log("\n ERRO: O modelo não pode ser vazio!");
      return;
    }
    this.props.modelo = novoModelo;
  }
}
