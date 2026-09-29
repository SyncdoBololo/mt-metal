// Números confirmados pelo cliente; funções, nomes e e-mails do portfólio recebido.
export const contatos = [
 {id:'comercial',setor:'Comercial',nome:'GLEIDYSON PIASECKI',numero:'5565996011432',formatado:'(65) 99601-1432',email:'piaseckimanut@gmail.com',mensagem:'Olá! Gostaria de solicitar um orçamento à MT METAL.'},
 {id:'tecnico',setor:'Área técnica',nome:'JOSÉ AUGUSTO DUARTE',numero:'5565993330619',formatado:'(65) 99333-0619',email:'Joseaugustoduartecba@gmail.com',mensagem:'Olá! Gostaria de falar com a área técnica da MT METAL sobre um projeto.'},
].map(contato=>({...contato,url:`https://wa.me/${contato.numero}?text=${encodeURIComponent(contato.mensagem)}`}));

export const empresa = {
 nome:'MT METAL', razaoSocial:'MT METAL LTDA', cnpj:'50.600.094/0001-08', inicio:'09/05/2023',
 endereco:'Rua Mar Vermelho, s/n, Quadra 4, Lote 1, Loteamento Parque Industrial Atlântico, Bairro Santa Isabel, Várzea Grande, MT, CEP 78150-202',
 telefone:'(65) 3682-6688', tel:'+556536826688', whatsapp:contatos[0].numero, whatsappFormatado:contatos[0].formatado,
 email:contatos[0].email, instagram:'{{TODO: @ do Instagram}}',
 area:'Várzea Grande, Cuiabá e região', raio:'{{TODO: confirmar raio de atendimento}}',
};
export const whatsappUrl = contatos[0].url;
