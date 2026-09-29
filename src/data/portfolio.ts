import fundacao from '../assets/portfolio/fundacao-estrutura.jpg';
import cobertura from '../assets/portfolio/cobertura-arqueada.jpg';
import galpao from '../assets/portfolio/montagem-galpao.jpg';
import fachada from '../assets/portfolio/fachada-galpao.jpg';
import coberturaMetalica from '../assets/portfolio/cobertura-metalica.jpg';
import montagem from '../assets/portfolio/montagem-estrutura.jpg';
import reservatorio from '../assets/portfolio/reservatorio-metalico.jpg';
import guardaCorpo from '../assets/portfolio/guarda-corpo.jpg';
import escada from '../assets/portfolio/escada-metalica.jpg';
import estruturaFachada from '../assets/portfolio/estrutura-fachada.jpg';
import icamento from '../assets/portfolio/icamento-estrutura.jpg';
import arco from '../assets/portfolio/estrutura-arqueada.jpg';

// Extraídas do PDF fornecido pelo cliente. Sem atribuir cliente, local ou data não informados.
export const portfolio = [
 {categoria:'estruturas-metalicas',titulo:'Galpão em montagem',imagem:galpao,alt:'Pilares e treliças metálicas montados em terreno aberto',pagina:3},
 {categoria:'estruturas-metalicas',titulo:'Cobertura arqueada',imagem:cobertura,alt:'Galpão aberto com estrutura e cobertura arqueada',pagina:3},
 {categoria:'construcao-civil',titulo:'Estrutura e fundação',imagem:fundacao,alt:'Vista aérea de obra com fundações, paredes e estrutura de cobertura',pagina:3},
 {categoria:'estruturas-metalicas',titulo:'Fechamento de galpão',imagem:fachada,alt:'Fachada de galpão com fechamento metálico cinza e azul',pagina:5},
 {categoria:'estruturas-metalicas',titulo:'Estrutura de cobertura',imagem:coberturaMetalica,alt:'Perfis metálicos sustentando painéis de uma cobertura',pagina:6},
 {categoria:'estruturas-metalicas',titulo:'Montagem de perfis',imagem:montagem,alt:'Equipe trabalhando sobre perfis de uma estrutura metálica',pagina:7},
 {categoria:'reservatorios',titulo:'Reservatório metálico',imagem:reservatorio,alt:'Reservatório metálico verde com escada externa',pagina:9},
 {categoria:'estruturas-metalicas',titulo:'Guarda-corpo metálico',imagem:guardaCorpo,alt:'Guarda-corpo metálico instalado ao longo de uma passagem',pagina:9},
 {categoria:'estruturas-metalicas',titulo:'Escada e corrimãos',imagem:escada,alt:'Escada metálica com corrimãos nas laterais',pagina:10},
 {categoria:'estruturas-metalicas',titulo:'Estrutura de fachada',imagem:estruturaFachada,alt:'Estrutura metálica de fachada vista pela lateral de um edifício',pagina:11},
 {categoria:'estruturas-metalicas',titulo:'Içamento de estrutura',imagem:icamento,alt:'Guindaste içando componente de uma estrutura metálica',pagina:14},
 {categoria:'estruturas-metalicas',titulo:'Treliças em arco',imagem:arco,alt:'Treliças metálicas arqueadas montadas antes da instalação da cobertura',pagina:15},
].map(item=>({...item,legenda:'Acervo MT METAL'}));

export const categoriasPortfolio = [
 {slug:'estruturas-metalicas',titulo:'Estruturas metálicas'},
 {slug:'construcao-civil',titulo:'Construção civil'},
 {slug:'reservatorios',titulo:'Reservatórios'},
];
