"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação das classes e interfaces
const estruturaOrganizacional_1 = require("../estruturaOrganizacional");
// Exemplo de uso das classes
const reitoria = new estruturaOrganizacional_1.Departamento("Reitoria");
const proReitoriaEnsino = new estruturaOrganizacional_1.Departamento("Pro-Reitoria de Ensino");
const proReitoriaPesquisa = new estruturaOrganizacional_1.Departamento("Pro-Reitoria de Pesquisa");
const graduacao = new estruturaOrganizacional_1.Coordenacao("Graduação");
const engenharia = new estruturaOrganizacional_1.Curso("Engenharia");
const informatica = new estruturaOrganizacional_1.Curso("Informática");
// Adicionar cursos à coordenação de graduação
graduacao.adicionar(engenharia);
graduacao.adicionar(informatica);
// Adicionar a coordenação à pró-reitoria de ensino
proReitoriaEnsino.adicionar(graduacao);
// Adicionar as pró-reitorias à reitoria
reitoria.adicionar(proReitoriaEnsino);
reitoria.adicionar(proReitoriaPesquisa);
// Exibir a estrutura organizacional
console.log(reitoria.operacao());
