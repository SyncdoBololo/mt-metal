# Auditoria do site MT METAL

Auditoria feita em 28/09/2026 sobre o site publicado em `https://syncdobololo.github.io/mt-metal/` e sobre o mesmo build servido localmente. O método segue a skill CodeMakers-Design (`.claude/skills/codemakers-design/`), com evidência medida para cada achado. Cada item tem um de quatro status, **verificado**, **corrigido**, **pendente** ou **não verificado**.

## Veredito

O site está tecnicamente pronto. Carrega rápido, funciona sem erros em celular e desktop, cumpre os critérios automáticos de acessibilidade e tem SEO técnico correto por página. O que limita o resultado comercial hoje não é código. Faltam **prova de trabalho real** (fotos de obras, logo, clientes), **domínio próprio** e **presença no Google Maps**. São esses três pontos que fazem uma construtora ou um engenheiro confiar e ligar.

## Placar medido

| Área | Resultado | Como foi medido |
|---|---|---|
| Desempenho, celular | Home 97 a 98, página de serviço 96 | Lighthouse mobile com rede e CPU limitadas, build de produção local |
| Desempenho, desktop | 100 na home e no serviço | Lighthouse desktop |
| Acessibilidade automática | 100 | Lighthouse e axe |
| Boas práticas | 100 | Lighthouse |
| SEO técnico | 100 | Lighthouse e rastreio próprio |
| Peso da página inicial | 874 KB na abertura e 1,5 MB rolando até o fim (23 requisições) | Playwright contando bytes transferidos |
| Links internos | 19 verificados, nenhum quebrado | Rastreio das 8 páginas |
| Erros de console | Nenhum | 8 páginas, celular e desktop |
| Rolagem lateral | Nenhuma em 1440, 390 e 320 px | Playwright |
| Testes automatizados | 19 de 19 aprovados | `npm test` |

O Lighthouse não pôde ser rodado direto no endereço público porque o ambiente da auditoria passa por um proxy. As notas acima são do mesmo build servido localmente. O teste com leitor de tela (NVDA ou VoiceOver) **não foi feito** e continua recomendado.

## Corrigido nesta auditoria

| Achado | Por que importava | Correção |
|---|---|---|
| Palavras vazadas ("SUSTENTA", "INTEIRA", "ENCAIXE", "FORMAS") e o "MT METAL" do rodapé mostravam riscos soltos dentro das letras | O contorno CSS (`-webkit-text-stroke`) sobre a fonte variável Archivo expõe os contornos internos sobrepostos da fonte, e o Chrome no Windows desenha isso como falhas | Palavras em cinza-aço sólido (contraste 7,4:1) e rodapé em degradê de aço escovado, sem contorno e sem a animação de preenchimento subindo |
| Página de serviço com LCP de 3,2 s no celular | Acima do limite de 2,5 s que o Google considera bom | AVIF com qualidade 60 e versão intermediária de 640 px. LCP caiu para 2,7 s e a nota subiu de 92 para 96 |
| CSS bloqueando a primeira pintura por cerca de 0,8 s | Atrasa o primeiro conteúdo na tela em redes móveis | CSS embutido no HTML (`inlineStylesheets: 'always'`) |
| Dado estruturado da empresa apontava para `syncdobololo.github.io/` | O Google associaria a empresa a um endereço que não é o site | URL correta, com `@id`, CNPJ (`taxID`), data de fundação e imagem |
| Páginas de serviço sem dado estruturado próprio | Perde a chance de o Google entender cada serviço e mostrar a trilha de navegação | `Service` e `BreadcrumbList` em cada uma das 6 páginas |
| Página 404 com canonical | Página de erro não deve ser indexada | `noindex` e sem canonical |
| Legenda da foto com seta "↗" sem link | No resto do site a seta indica link, então o visitante clica e nada acontece | Seta removida |
| "MT" exibido como se fosse um número na seção Quem somos | Espaço de destaque sem informação | Trocado por "6 · Frentes de serviço", dado real |

## Pendências, por prioridade

### Crítico para o resultado comercial

**1. Fotos reais e prova de trabalho.** Todas as 14 fotos foram geradas por IA, e o site avisa isso seis vezes na seção "Aplicações" ("Imagem ilustrativa"). O aviso é honesto e deve continuar enquanto as fotos forem ilustrativas, mas um portfólio que diz que não é real enfraquece a confiança justamente na seção que deveria provar capacidade. O ideal são de 10 a 20 fotos de obras e do galpão tiradas com celular em boa luz, com o tipo de serviço e a cidade. Até elas chegarem, uma alternativa é esconder a seção "Aplicações" e deixar as fotos só como ambientação.

**2. Domínio próprio.** O endereço `syncdobololo.github.io/mt-metal` tem três custos. Não passa credibilidade em cartão, orçamento ou lateral de caminhão. O Google só lê o `robots.txt` na raiz do domínio, então o arquivo gerado em `/mt-metal/robots.txt` é ignorado, e o sitemap precisa ser enviado à mão pelo Search Console. E todo o histórico de SEO fica preso a um endereço que vai mudar. Um `.com.br` custa cerca de R$ 40 por ano no registro.br e pode ser ligado ao próprio GitHub Pages, e o `README.md` explica o ajuste. `[Confirmar com o cliente o nome de domínio desejado]`

**3. Perfil da Empresa no Google (Google Maps).** Para quem procura "armação de ferragem Várzea Grande" ou "aluguel de andaime Cuiabá", o mapa aparece antes dos sites. O perfil precisa ter exatamente o mesmo nome, endereço e telefone do site, com fotos reais, categoria (por exemplo "Empreiteiro" ou "Fabricante de estruturas metálicas") e link para o site. É gratuito e costuma trazer mais contatos do que o próprio site.

### Importante

**4. Medição.** Hoje não há nenhuma analítica, então não dá para saber quantas pessoas visitam nem quantas clicam no WhatsApp. Duas opções. Umami ou Plausible não usam cookies e dispensam banner de consentimento. O Google Analytics 4 é gratuito, mas pela LGPD exige aviso de cookies e política de privacidade. Em qualquer caso, vale medir os cliques em "Pedir orçamento", no WhatsApp flutuante, no telefone e no envio do formulário.

**5. Google Search Console.** Cadastre a propriedade, envie `sitemap-index.xml` e acompanhe quais buscas trazem visitas. Com o endereço atual, a verificação pode ser feita por meta tag, que eu consigo incluir no site assim que o código for gerado.

**6. Páginas de serviço com pouco texto.** Cada uma tem cerca de 200 palavras. Para ranquear em buscas locais, cada página precisa responder o que o cliente pergunta antes de ligar, como que tipos de obra atende, que materiais usa, se entrega no canteiro, prazo médio, raio de atendimento e o que enviar para o orçamento. Isso depende de informação do cliente, e nada deve ser inventado. `[Confirmar bitolas e aços trabalhados, capacidade de produção, frota, raio de atendimento, prazos típicos e normas técnicas efetivamente seguidas]`

**7. Público-alvo não declarado.** O site não diz para quem trabalha. Uma linha no topo como "Para construtoras, engenheiros e obras residenciais" ajuda o visitante a se reconhecer em segundos. `[Confirmar com o cliente o público principal]`

**8. Códigos CNAE nos cards da home.** "CNAE 4120-4/00 · 4399-1/03 · 4330-4/99 · 2330-3/01 · 4299-5/01 · 4399-1/99" passa formalidade, mas não ajuda quem está comprando e pesa visualmente no card. Recomendo manter os códigos nas páginas de serviço e no rodapé e tirá-los dos cards.

**9. Logo oficial.** O wordmark atual é provisório. Um logo definitivo em SVG entra no cabeçalho, no rodapé, no favicon e na imagem de compartilhamento.

### Refinamento

**10. Vídeo sem botão de pausa.** Foi uma decisão pedida. Registro que o critério WCAG 2.2.2 pede controle de pausa para movimento automático com mais de 5 segundos. Se o site for usado em licitação ou contrato público, vale recolocar um controle discreto.

**11. Cache do GitHub Pages.** O servidor manda `max-age=600` (10 minutos) até para arquivos com hash, que poderiam ficar em cache por um ano. O efeito é pequeno em visitas de retorno. Com domínio próprio, colocar o Cloudflare na frente resolve e ainda permite cabeçalhos de segurança (CSP, `X-Frame-Options`), que o GitHub Pages não deixa configurar. Para um site estático sem login nem banco de dados, o risco atual é baixo.

**12. E-mail comercial.** Hoje o único canal escrito é o WhatsApp. Construtoras e departamentos de compras costumam exigir e-mail para cotação formal. `[Informar e-mail comercial]`

**13. Horário de atendimento.** Pode entrar no rodapé e no dado estruturado, o que ajuda no Google. `[Informar horário]`

## O que foi verificado e está bom

- **Formulário:** todos os campos com rótulo visível, `autocomplete`, validação nativa e foco no primeiro campo vazio. A mensagem para o WhatsApp é montada corretamente e nada é armazenado.
- **Teclado:** link "Pular para o conteúdo", foco visível em todas as seções (inclusive a clara, corrigida na auditoria anterior) e menu mobile que abre e fecha com Esc.
- **Contraste:** todos os pares de texto medidos entre 6,2:1 e 16,3:1, e textos grandes em cinza acima de 3:1.
- **Tamanho mínimo de texto:** 11 px.
- **Alvos de toque:** 44 px nos controles principais.
- **Transição entre páginas:** preserva o botão Voltar, cliques com Ctrl e âncoras.
- **Sem JavaScript:** todo o conteúdo continua visível.
- **HTTPS com HSTS** ativo no servidor.
- **Página 404** personalizada, respondendo com o código 404 correto.
- **Sitemap** com as 7 páginas indexáveis e **canonical** correto em cada uma.
- **Imagem de compartilhamento** (WhatsApp, Facebook, LinkedIn) de 1200×630.

## Limitações desta auditoria

Não foram testados leitor de tela, navegadores Safari e Firefox reais e aparelhos físicos. O Lighthouse no endereço público também não foi medido, pelo motivo explicado acima. Resultados de laboratório não equivalem a dados de campo. Depois de algumas semanas no ar com tráfego, o relatório de Core Web Vitals do Search Console mostra os números reais dos visitantes.
