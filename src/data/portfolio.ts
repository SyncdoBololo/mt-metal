import { servicos } from './servicos';
export const portfolio = servicos.map(s=>({categoria:s.slug,titulo:s.titulo,imagem:s.imagem,alt:s.alt,legenda:'Imagem ilustrativa · referência de aplicação'}));
