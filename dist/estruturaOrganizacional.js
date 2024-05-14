"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = exports.Coordenacao = exports.Departamento = void 0;
class Departamento {
    constructor(nome) {
        this.filhos = [];
        this.nome = nome;
    }
    adicionar(unidade) {
        this.filhos.push(unidade);
    }
    remover(unidade) {
        this.filhos = this.filhos.filter(filho => filho !== unidade);
    }
    getFilhos() {
        return this.filhos;
    }
    operacao() {
        let resultado = `Departamento: ${this.nome}\n`;
        for (const filho of this.filhos) {
            resultado += `  ${filho.operacao()}\n`;
        }
        return resultado;
    }
}
exports.Departamento = Departamento;
class Coordenacao {
    constructor(nome) {
        this.nome = nome;
    }
    adicionar(_unidade) {
        
    }
    remover(_unidade) {
        
    }
    getFilhos() {
        return [];
    }
    operacao() {
        return `Coordenacao: ${this.nome}`;
    }
}
exports.Coordenacao = Coordenacao;
class Curso {
    constructor(nome) {
        this.nome = nome;
    }
    adicionar(_unidade) {
        
    }
    remover(_unidade) {
        
    }
    getFilhos() {
        return [];
    }
    operacao() {
        return `Curso: ${this.nome}`;
    }
}
exports.Curso = Curso;
