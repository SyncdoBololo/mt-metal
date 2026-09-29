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

  {categoria:'reservatorios',titulo:'Reservatório metálico',imagem:reservatorio,alt:'Reservatório metálico verde com escada externa',pagina:9},
  {categoria:'reservatorios',titulo:'Base de reservatório',imagem:reservatorioBase,alt:'Detalhe da base e dos reforços de um reservatório metálico verde',pagina:9},

  {categoria:'construcao-civil',titulo:'Estrutura e fundação',imagem:fundacao,alt:'Vista aérea de obra com fundações, paredes e estrutura de cobertura',pagina:3},
  {categoria:'construcao-civil',titulo:'Execução de alvenaria',imagem:alvenaria,alt:'Paredes de alvenaria em blocos cerâmicos durante a construção'},

  {categoria:'terraplenagem-infraestrutura',titulo:'Preparação da área',imagem:preparacaoArea,alt:'Área de obra preparada para implantação de estrutura',pagina:7},
  {categoria:'terraplenagem-infraestrutura',titulo:'Fundação e movimentação de solo',imagem:terraplenagem,alt:'Fundação armada com equipamento de terraplenagem ao fundo'},

  {categoria:'andaimes',titulo:'Andaimes em área industrial',imagem:andaimePanorama,alt:'Estrutura de andaimes com trabalhadores ao pôr do sol'},
  {categoria:'andaimes',titulo:'Locação de andaimes',imagem:andaimeLocacao,alt:'Trabalhadores em andaimes com peças organizadas no canteiro'},
  {categoria:'andaimes',titulo:'Torre de andaime',imagem:andaimeTorre,alt:'Torre de andaime montada para trabalho em altura'},
  {categoria:'andaimes',titulo:'Acesso e escoramento',imagem:andaimeEquipe,alt:'Equipe trabalhando em área de obra com estrutura temporária'},
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
