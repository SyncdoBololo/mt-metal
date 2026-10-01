import type { ImageMetadata } from 'astro';
import armacao from '../assets/img/06-armacao-pilares-vigas.jpg';
import terraplenagem from '../assets/img/07-fundacao-armacao-terraplenagem.jpg';
import concretagem from '../assets/img/08-concretagem-laje.jpg';
import alvenaria from '../assets/img/09-alvenaria-estrutural.jpg';
import andaimePanorama from '../assets/img/11-andaimes-por-do-sol-panoramica.jpg';
import andaimeLocacao from '../assets/img/12-andaimes-locacao.jpg';
import andaimeTorre from '../assets/img/13-andaime-torre-pb.jpg';
import andaimeEquipe from '../assets/img/14-equipe-poco-andaime.jpg';
import fundacao from '../assets/portfolio/fundacao-estrutura.jpg';
import cobertura from '../assets/portfolio/cobertura-arqueada.jpg';
import galpao from '../assets/portfolio/montagem-galpao.jpg';
import fachada from '../assets/portfolio/fachada-galpao.jpg';
import coberturaMetalica from '../assets/portfolio/cobertura-metalica.jpg';
import montagem from '../assets/portfolio/montagem-estrutura.jpg';
import reservatorio from '../assets/portfolio/reservatorio-metalico.jpg';
import reservatorioBase from '../assets/portfolio/reservatorio-base.jpg';
import guardaCorpo from '../assets/portfolio/guarda-corpo.jpg';
import escada from '../assets/portfolio/escada-metalica.jpg';
import estruturaFachada from '../assets/portfolio/estrutura-fachada.jpg';
import icamento from '../assets/portfolio/icamento-estrutura.jpg';
import arco from '../assets/portfolio/estrutura-arqueada.jpg';
import preparacaoArea from '../assets/portfolio/preparacao-area.jpg';
import preparacaoPerfis from '../assets/portfolio/preparacao-perfis.jpg';
import estruturaCoberturaIndustrial from '../assets/portfolio/estrutura-cobertura-industrial.jpg';
import coberturaPerfisTercas from '../assets/portfolio/cobertura-perfis-tercas.jpg';
import galpaoFechamentoLateral from '../assets/portfolio/galpao-fechamento-lateral.jpg';
import coberturaIndustrialLaranja from '../assets/portfolio/cobertura-industrial-laranja.jpg';
import escadaMezaninoIndustrial from '../assets/portfolio/escada-mezanino-industrial.jpg';
import coberturaPassarelaExterna from '../assets/portfolio/cobertura-passarela-externa.jpg';
import fabricacaoPerfisMetalicos from '../assets/portfolio/fabricacao-perfis-metalicos.jpg';
import expedicaoPerfisMetalicos from '../assets/portfolio/expedicao-perfis-metalicos.jpg';
import montagemGalpaoAtual from '../assets/portfolio/montagem-galpao-atual.jpg';
import galpaoMetalicoFechado from '../assets/portfolio/galpao-metalico-fechado.jpg';
import execucaoBaseConcreto from '../assets/portfolio/execucao-base-concreto.jpg';
import alvenariaEstruturaMetalica from '../assets/portfolio/alvenaria-estrutura-metalica.jpg';
import andaimeMontagemEstrutura from '../assets/portfolio/andaime-montagem-estrutura.jpg';
import andaimeMontagemVertical from '../assets/portfolio/andaime-montagem-vertical.jpg';
import andaimesFachadaIndustrial from '../assets/portfolio/andaimes-fachada-industrial.jpg';

// Fotos organizadas pelo serviço ao qual pertencem. As imagens do PDF mantêm
// referência à página de origem, sem atribuir cliente, endereço ou data não informados.
type PortfolioItem = {
  categoria: string;
  titulo: string;
  imagem: ImageMetadata;
  alt: string;
  pagina?: number;
};

const itensPortfolio: PortfolioItem[] = [
  {categoria:'armacao',titulo:'Armação de pilares e vigas',imagem:armacao,alt:'Armações de aço preparadas para pilares e vigas'},
  {categoria:'armacao',titulo:'Malha para concretagem',imagem:concretagem,alt:'Malha de aço preparada antes da concretagem de uma laje'},

  {categoria:'estruturas-metalicas',titulo:'Galpão em montagem',imagem:galpao,alt:'Pilares e treliças metálicas montados em terreno aberto',pagina:3},
  {categoria:'estruturas-metalicas',titulo:'Cobertura arqueada',imagem:cobertura,alt:'Galpão aberto com estrutura e cobertura arqueada',pagina:3},
  {categoria:'estruturas-metalicas',titulo:'Fechamento de galpão',imagem:fachada,alt:'Fachada de galpão com fechamento metálico cinza e azul',pagina:5},
  {categoria:'estruturas-metalicas',titulo:'Estrutura de cobertura',imagem:coberturaMetalica,alt:'Perfis metálicos sustentando painéis de uma cobertura',pagina:6},
  {categoria:'estruturas-metalicas',titulo:'Montagem de perfis',imagem:montagem,alt:'Equipe trabalhando sobre perfis de uma estrutura metálica',pagina:7},
  {categoria:'estruturas-metalicas',titulo:'Preparação de perfis metálicos',imagem:preparacaoPerfis,alt:'Equipe preparando e pintando perfis metálicos em área de fabricação',pagina:12},
  {categoria:'estruturas-metalicas',titulo:'Guarda-corpo metálico',imagem:guardaCorpo,alt:'Guarda-corpo metálico instalado ao longo de uma passagem',pagina:9},
  {categoria:'estruturas-metalicas',titulo:'Escada e corrimãos',imagem:escada,alt:'Escada metálica com corrimãos nas laterais',pagina:10},
  {categoria:'estruturas-metalicas',titulo:'Estrutura de fachada',imagem:estruturaFachada,alt:'Estrutura metálica de fachada vista pela lateral de um edifício',pagina:11},
  {categoria:'estruturas-metalicas',titulo:'Içamento de estrutura',imagem:icamento,alt:'Guindaste içando componente de uma estrutura metálica',pagina:14},
  {categoria:'estruturas-metalicas',titulo:'Treliças em arco',imagem:arco,alt:'Treliças metálicas arqueadas montadas antes da instalação da cobertura',pagina:15},
  {categoria:'estruturas-metalicas',titulo:'Cobertura industrial em montagem',imagem:estruturaCoberturaIndustrial,alt:'Treliças de uma cobertura metálica montadas sobre uma edificação'},
  {categoria:'estruturas-metalicas',titulo:'Perfis e terças de cobertura',imagem:coberturaPerfisTercas,alt:'Perfis e terças metálicas distribuídos sobre uma estrutura de cobertura'},
  {categoria:'estruturas-metalicas',titulo:'Fechamento lateral de galpão',imagem:galpaoFechamentoLateral,alt:'Galpão com estrutura metálica, cobertura e fechamento lateral em telhas metálicas'},
  {categoria:'estruturas-metalicas',titulo:'Ampliação de cobertura industrial',imagem:coberturaIndustrialLaranja,alt:'Estrutura metálica laranja com telhas instalada dentro de uma área industrial'},
  {categoria:'estruturas-metalicas',titulo:'Escada e mezanino industrial',imagem:escadaMezaninoIndustrial,alt:'Escada metálica com corrimão ligada a um mezanino dentro de um galpão'},
  {categoria:'estruturas-metalicas',titulo:'Cobertura de acesso externo',imagem:coberturaPassarelaExterna,alt:'Cobertura metálica instalada sobre uma passagem externa elevada'},
  {categoria:'estruturas-metalicas',titulo:'Fabricação de componentes',imagem:fabricacaoPerfisMetalicos,alt:'Perfis, chapas de ligação e tubos metálicos organizados na área de fabricação'},
  {categoria:'estruturas-metalicas',titulo:'Expedição de perfis metálicos',imagem:expedicaoPerfisMetalicos,alt:'Perfis metálicos fabricados e organizados sobre uma carreta para transporte'},
  {categoria:'estruturas-metalicas',titulo:'Montagem de novo galpão',imagem:montagemGalpaoAtual,alt:'Estrutura metálica de galpão em montagem sobre paredes de blocos'},
  {categoria:'estruturas-metalicas',titulo:'Galpão com cobertura e fechamento',imagem:galpaoMetalicoFechado,alt:'Galpão metálico com cobertura, fechamento lateral e base em alvenaria'},

  {categoria:'reservatorios',titulo:'Reservatório metálico',imagem:reservatorio,alt:'Reservatório metálico verde com escada externa',pagina:9},
  {categoria:'reservatorios',titulo:'Base de reservatório',imagem:reservatorioBase,alt:'Detalhe da base e dos reforços de um reservatório metálico verde',pagina:9},

  {categoria:'construcao-civil',titulo:'Estrutura e fundação',imagem:fundacao,alt:'Vista aérea de obra com fundações, paredes e estrutura de cobertura',pagina:3},
  {categoria:'construcao-civil',titulo:'Execução de alvenaria',imagem:alvenaria,alt:'Paredes de alvenaria em blocos cerâmicos durante a construção'},
  {categoria:'construcao-civil',titulo:'Base em concreto em execução',imagem:execucaoBaseConcreto,alt:'Equipe trabalhando na execução de uma base retangular em concreto'},
  {categoria:'construcao-civil',titulo:'Alvenaria integrada à estrutura',imagem:alvenariaEstruturaMetalica,alt:'Parede de blocos construída entre pilares e treliças de uma estrutura metálica'},

  {categoria:'terraplenagem-infraestrutura',titulo:'Preparação da área',imagem:preparacaoArea,alt:'Área de obra preparada para implantação de estrutura',pagina:7},
  {categoria:'terraplenagem-infraestrutura',titulo:'Fundação e movimentação de solo',imagem:terraplenagem,alt:'Fundação armada com equipamento de terraplenagem ao fundo'},

  {categoria:'andaimes',titulo:'Andaimes em área industrial',imagem:andaimePanorama,alt:'Estrutura de andaimes com trabalhadores ao pôr do sol'},
  {categoria:'andaimes',titulo:'Locação de andaimes',imagem:andaimeLocacao,alt:'Trabalhadores em andaimes com peças organizadas no canteiro'},
  {categoria:'andaimes',titulo:'Torre de andaime',imagem:andaimeTorre,alt:'Torre de andaime montada para trabalho em altura'},
  {categoria:'andaimes',titulo:'Acesso e escoramento',imagem:andaimeEquipe,alt:'Equipe trabalhando em área de obra com estrutura temporária'},
  {categoria:'andaimes',titulo:'Apoio à montagem estrutural',imagem:andaimeMontagemEstrutura,alt:'Andaime montado para apoiar a instalação de uma estrutura metálica vertical'},
  {categoria:'andaimes',titulo:'Montagem vertical em área interna',imagem:andaimeMontagemVertical,alt:'Andaime instalado dentro de um vão circular durante a montagem de uma estrutura metálica'},
  {categoria:'andaimes',titulo:'Acesso para montagem de fachada',imagem:andaimesFachadaIndustrial,alt:'Andaimes montados junto à fachada de uma edificação industrial em construção'},
];

export const portfolio = itensPortfolio.map(item=>({...item,legenda:item.pagina ? `Acervo MT METAL · PDF p. ${item.pagina}` : 'Acervo MT METAL'}));

export const categoriasPortfolio = [
  {slug:'armacao',titulo:'Armação'},
  {slug:'estruturas-metalicas',titulo:'Estruturas metálicas'},
  {slug:'reservatorios',titulo:'Reservatórios'},
  {slug:'construcao-civil',titulo:'Construção civil'},
  {slug:'terraplenagem-infraestrutura',titulo:'Terraplenagem'},
  {slug:'andaimes',titulo:'Andaimes'},
];
