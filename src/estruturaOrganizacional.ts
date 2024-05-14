export interface Unidade {
  nome: string;
  adicionar(unidade: Unidade): void;
  remover(unidade: Unidade): void;
  getFilhos(): Unidade[];
  operacao(): string;
}

export class Departamento implements Unidade {
  nome: string;
  filhos: Unidade[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionar(unidade: Unidade): void {
    this.filhos.push(unidade);
  }

  remover(unidade: Unidade): void {
    this.filhos = this.filhos.filter(filho => filho !== unidade);
  }

  getFilhos(): Unidade[] {
    return this.filhos;
  }

  operacao(): string {
    let resultado = `Departamento: ${this.nome}\n`;
    for (const filho of this.filhos) {
      resultado += `  ${filho.operacao()}\n`;
    }
    return resultado;
  }
}

export class Coordenacao implements Unidade {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionar(_unidade: Unidade): void {
    
  }

  remover(_unidade: Unidade): void {
    
  }

  getFilhos(): Unidade[] {
    return [];
  }

  operacao(): string {
    return `Coordenacao: ${this.nome}`;
  }
}

export class Curso implements Unidade {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionar(_unidade: Unidade): void {
   
  }

  remover(_unidade: Unidade): void {
    
  }

  getFilhos(): Unidade[] {
    return [];
  }

  operacao(): string {
    return `Curso: ${this.nome}`;
  }
}
