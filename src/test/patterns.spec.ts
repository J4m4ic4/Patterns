// Importação das classes e interfaces
import { Unidade, Departamento, Coordenacao, Curso } from '../estruturaOrganizacional';

// Exemplo de uso das classes
const reitoria = new Departamento("Reitoria");
const proReitoriaEnsino = new Departamento("Pro-Reitoria de Ensino");
const proReitoriaPesquisa = new Departamento("Pro-Reitoria de Pesquisa");

const graduacao = new Coordenacao("Graduação");
const engenharia = new Curso("Engenharia");
const informatica = new Curso("Informática");

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
