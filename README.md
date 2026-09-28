# MT METAL — A luz do arco

Site institucional estático em Astro e TypeScript. Home, seis páginas de serviço e 404. O vídeo fornecido pelo cliente compõe a hero; a foto 01 aparece imediatamente como capa e fallback. A galeria usa 12 fotos extraídas do portfólio fornecido pela MT METAL. As imagens das outras seções continuam ilustrativas, sem atribuição a clientes ou obras reais.

## Rodar

Requer Node 22.12+ (validado com Node 24). `npm install`, `npm run dev`, `npm run build`, `npm run preview`. O build executa a verificação TypeScript antes de gerar `dist/`. Em ambientes sem acesso à pasta de configuração do Astro, defina `ASTRO_TELEMETRY_DISABLED=1`.

## Editar

- `src/data/empresa.ts`: dados cadastrais, telefone e WhatsApp. Comercial: (65) 99601-1432; área técnica: (65) 99333-0619. Os dois números substituem o contato anterior e foram confirmados pelo cliente. Nomes, funções e e-mails vêm do PDF recebido. Não presumir que o telefone fixo tenha WhatsApp.
- `src/data/servicos.ts`: seis pilares, descrições, CNAEs, fotos, FAQ e metadados. As rotas são geradas a partir desses dados.
- `src/data/portfolio.ts`: 12 fotos do acervo recebido, descrições visuais e página de origem no PDF. Não há clientes, cidades, datas ou métricas inferidos.
- `src/pages/index.astro`: composição e textos institucionais.
- `src/assets/img/`: imagens originais. `Photo.astro` gera AVIF e WebP em 480, 640, 768, 1080, 1600 e 2400 px, qualidade 60, sem ampliar além do original. A foto 02 e a pasta `referencia/` não são usadas na interface.
- `src/assets/brand/logo-mt-metal.svg`: marca vetorial extraída da página 16 do portfólio, sem redesenho ou geração por IA. A versão horizontal conserva o lettering e a assinatura Metalúrgica. `src/assets/logo.svg` espelha esse arquivo para compatibilidade.
- `src/styles/tokens.css` e `global.css`: cores e composição responsiva. O cinza de texto foi clareado para leitura sobre grafite.
- `src/scripts/anim/`: módulos GSAP, ScrollTrigger, SplitText, DrawSVG, Flip, Lenis, cursor, transição e hero.

## Vídeo da hero

O original de 10 segundos foi convertido em H.264 sem áudio e com faststart: `public/media/hero-desktop.mp4` (1,64 MB) e `hero-mobile.mp4` (536 KB). Há também versões VP9 (`hero-desktop.webm`, `hero-mobile.webm`), usadas automaticamente em navegadores sem suporte a H.264. Mantidos enquadramento e proporção, com object-fit cover para a viewport. O vídeo toca automaticamente, sem som e em loop infinito, para todos os visitantes, sem botão de pausa. Ele só pausa enquanto está fora da tela ou com a aba em segundo plano, e retoma sozinho ao voltar. Se o navegador bloquear o autoplay (alguns celulares em economia de energia), o vídeo começa no primeiro toque ou rolagem, e até lá a foto 01 fica visível.

A linha inicial dura 1,1 s, só na primeira visita da sessão; não cobre a imagem nem o título. As faíscas artificiais aparecem apenas sobre o fallback parado, pois o vídeo já contém solda real. A navegação é MPA com lâminas, preserva cliques modificados, âncoras e Voltar. No modo reduzido, Lenis, pin, cursor, marquee, parallax e faíscas são desligados; o conteúdo permanece acessível sem JavaScript.

## Formulário

Validação nativa no navegador. Nome, telefone, cidade, serviço e mensagem compõem a URL codificada `https://wa.me/5565996011432?text=...` (comercial) ou `https://wa.me/5565993330619?text=...` (área técnica), conforme a seleção do visitante. A página abre o WhatsApp; o visitante revisa e envia a mensagem. Nenhuma informação é armazenada no site. Há link de recuperação caso o navegador bloqueie a nova janela. Testes interceptam a abertura; nenhuma mensagem de teste é enviada.

## Skill de design

A skill CodeMakers-Design está em `.claude/skills/codemakers-design/`. O Claude Code a carrega automaticamente neste repositório. Para checar contraste sem o Claude, rode `python .claude/skills/codemakers-design/scripts/contrast_check.py '#A4A8AF' '#0B0C0E'`.

## Verificação

- `npm run build`: TypeScript e geração estática.
- `npm test`: Playwright. Home e armação em 320×812, 375×812, 768×1024 e 1440×900, com e sem movimento reduzido; verifica console, h1 e rolagem horizontal. Também cobre menu/Esc, filtros, formulário, transição/Voltar, vídeo automático em loop e ausência de JavaScript.
- `tests/screenshots/`: imagens de topo e página inteira. Screenshots de página inteira com pin podem mostrar espaço de rolagem reservado; validar a experiência fixada também em viewport normal.
- `node scripts/lighthouse.mjs`: auditoria mobile do build servido em `http://127.0.0.1:4322/`; resultados em `tests/lighthouse.html` e `tests/lighthouse.json`.
- `node scripts/bundle-size.mjs`: total dos módulos em gzip; medido aproximadamente 68 KB, abaixo de 120 KB.
- Testes e scripts usam o Chrome do Windows em `C:/Program Files/Google/Chrome/Application/chrome.exe` quando ele existe. Em outro sistema, defina `CHROME_PATH` com o caminho do navegador ou deixe vazio para usar o Chromium do Playwright. O `npm test` sobe o preview sozinho se ele não estiver rodando.

Notas Lighthouse e resultados finais estão em `VERIFICACAO.md`. Auditoria automatizada não substitui testes com pessoas usando tecnologias assistivas.

## Publicar

### GitHub Pages (configurado)

O workflow `.github/workflows/deploy.yml` gera e publica o site a cada envio para a branch `main`, em `https://syncdobololo.github.io/mt-metal/`. Na primeira vez, ative em **Settings > Pages > Build and deployment > Source: GitHub Actions**. Depois, rode o workflow em **Actions > Publicar no GitHub Pages > Run workflow** ou faça um novo envio.

O site roda na subpasta `/mt-metal/` por causa das variáveis `SITE_URL` e `BASE_PATH` definidas no workflow. Todos os links internos passam por `withBase()` (`src/lib/url.ts`), e o `robots.txt` é gerado em `src/pages/robots.txt.ts`. Ao criar um link interno novo, use `withBase('/caminho/')`.

### Domínio próprio

Com domínio próprio (no GitHub Pages, na Vercel ou na Netlify), defina `SITE_URL` com o domínio e deixe `BASE_PATH` vazio. No GitHub Pages, configure o domínio em **Settings > Pages > Custom domain** e troque, no workflow, `SITE_URL` pelo domínio e `BASE_PATH` por `/`.

### Outras hospedagens

`npm run build` gera `dist/`, compatível com qualquer hospedagem estática. A imagem de compartilhamento `public/og.jpg` tem 1200×630 e foi composta a partir da foto 01 e da tipografia do site. Para recriá-la, rode `scripts/social-card.mjs` com a prévia local ativa.

## Pendências do cliente, todos os TODOs

| Pendente | Onde |
|---|---|
| `{{TODO: @ do Instagram}}` | empresa.ts; não exibido como link ativo |
| `{{TODO: confirmar raio de atendimento}}` | empresa.ts; municípios mencionados conforme briefing |
| `TODO: confirmar bitolas e capacidade de produção` | FAQ de armação (resposta provisória genérica no site) |
| `TODO: confirmar capacidades dos reservatórios` | FAQ de reservatórios (resposta provisória genérica no site) |
| altura, diâmetro e capacidade (hoje exibidos como “SOB PROJETO”) | ficha técnica ilustrativa da home, comentário TODO em index.astro |
| `TODO: confirmar frota e disponibilidade` | FAQ de infraestrutura (resposta provisória genérica no site) |
| `TODO: confirmar composição da equipe` | FAQ de andaimes; “equipe própria” não foi afirmado |

Também confirmar domínio definitivo e fornecer os arquivos originais das fotos para exibições maiores. O PDF comprime as fotos para aproximadamente 380–414 px; a galeria usa colunas compactas e não gera resoluções acima do original. Certificações, NRs específicas, coordenadas, horários e avaliações foram omitidos porque não foram informados. O diagrama de atendimento é esquemático e não afirma uma coordenada exata. Link do Google Maps pesquisa o endereço completo fornecido.

## Referências técnicas

[Astro Picture](https://docs.astro.build/en/reference/modules/astro-assets/) e [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText/).

## Materiais do cliente — atualização de 28/09/2026

- Marca: vetor extraído do PDF, amarelo oficial `#FFCC29`; aplicado ao cabeçalho e aos destaques sem alterar a composição aprovada.
- Portfólio: 12 fotografias do PDF em `src/assets/portfolio/`. Filtros mostram apenas as três categorias com material recebido. O documento integral está em `public/downloads/portfolio-mt-metal.pdf`, carregado apenas ao clicar no download.
- Contatos: GLEIDYSON PIASECKI (Comercial) e JOSÉ AUGUSTO DUARTE (Área técnica), com WhatsApps e e-mails apresentados no contato e rodapé. Formulário permite escolher o destinatário, comercial por padrão.
- Os dois JPEGs enviados serviram de referência de identidade. O mockup do veículo não foi apresentado como evidência de frota própria.
- Mantidos o vídeo, as animações, as seis páginas de serviço, o prefixo `withBase()` e a publicação existente pelo GitHub Pages.
