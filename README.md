# MT METAL — A luz do arco

Site institucional estático em Astro e TypeScript. Home, seis páginas de serviço e 404. O vídeo fornecido pelo cliente compõe a hero; a foto 01 aparece imediatamente como capa e fallback. Fotos do ZIP são ilustrativas, sem atribuição a clientes ou obras reais.

## Rodar

Requer Node 22.12+ (validado com Node 24). `npm install`, `npm run dev`, `npm run build`, `npm run preview`. O build executa a verificação TypeScript antes de gerar `dist/`. Em ambientes sem acesso à pasta de configuração do Astro, defina `ASTRO_TELEMETRY_DISABLED=1`.

## Editar

- `src/data/empresa.ts`: dados cadastrais, telefone e WhatsApp. O número 55 65 99329-8833 foi confirmado pelo cliente nesta conversa. Não presumir que o telefone fixo tenha WhatsApp.
- `src/data/servicos.ts`: seis pilares, descrições, CNAEs, fotos, FAQ e metadados. As rotas são geradas a partir desses dados.
- `src/data/portfolio.ts`: aplicações ilustrativas; trocar por obras reais somente com informações confirmadas.
- `src/pages/index.astro`: composição e textos institucionais.
- `src/assets/img/`: imagens originais. `Photo.astro` gera AVIF e WebP em 480, 768, 1080, 1600 e 2400 px, sem ampliar além do original. A foto 02 e a pasta `referencia/` não são usadas na interface.
- `src/assets/logo.svg`: wordmark provisório, com perfil I. O header usa a mesma direção tipográfica; substituir ambos pelo logo oficial.
- `src/styles/tokens.css` e `global.css`: cores e composição responsiva. O cinza de texto foi clareado para leitura sobre grafite.
- `src/scripts/anim/`: módulos GSAP, ScrollTrigger, SplitText, DrawSVG, Flip, Lenis, cursor, transição e hero.

## Vídeo da hero

O original de 10 segundos foi convertido em H.264 sem áudio e com faststart: `public/media/hero-desktop.mp4` (1,64 MB) e `hero-mobile.mp4` (536 KB). Há também versões VP9 (`hero-desktop.webm`, `hero-mobile.webm`), usadas automaticamente em navegadores sem suporte a H.264. Mantidos enquadramento e proporção, com object-fit cover para a viewport. Não há download automático com movimento reduzido ou economia de dados detectada. O vídeo pausa fora da tela e em aba inativa. O controle “Pausar movimento” pausa também os efeitos decorativos. Se autoplay falhar, a foto continua visível e há controle de reprodução.

A linha inicial dura 1,1 s, só na primeira visita da sessão; não cobre a imagem nem o título. As faíscas artificiais aparecem apenas sobre o fallback parado, pois o vídeo já contém solda real. A navegação é MPA com lâminas, preserva cliques modificados, âncoras e Voltar. No modo reduzido, Lenis, pin, cursor, marquee, parallax e faíscas são desligados; o conteúdo permanece acessível sem JavaScript.

## Formulário

Validação nativa no navegador. Nome, telefone, cidade, serviço e mensagem compõem a URL codificada `https://wa.me/5565993298833?text=...`. A página abre o WhatsApp; o visitante revisa e envia a mensagem. Nenhuma informação é armazenada no site. Há link de recuperação caso o navegador bloqueie a nova janela. Testes interceptam a abertura; nenhuma mensagem de teste é enviada.

## Verificação

- `npm run build`: TypeScript e geração estática.
- `npm test`: Playwright. Home e armação em 320×812, 375×812, 768×1024 e 1440×900, com e sem movimento reduzido; verifica console, h1 e rolagem horizontal. Também cobre menu/Esc, filtros, formulário, transição/Voltar, vídeo/pausa e ausência de JavaScript.
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
| `{{TODO: e-mail comercial}}` | empresa.ts; não exibido como contato ativo |
| `{{TODO: @ do Instagram}}` | empresa.ts; não exibido como link ativo |
| `{{TODO: confirmar raio de atendimento}}` | empresa.ts; municípios mencionados conforme briefing |
| `{{TODO: substituir pelo logo oficial}}` | logo.svg, header e rodapé |
| `TODO: confirmar bitolas e capacidade de produção` | FAQ de armação (resposta provisória genérica no site) |
| `TODO: confirmar capacidades dos reservatórios` | FAQ de reservatórios (resposta provisória genérica no site) |
| altura, diâmetro e capacidade (hoje exibidos como “SOB PROJETO”) | ficha técnica ilustrativa da home, comentário TODO em index.astro |
| `TODO: confirmar frota e disponibilidade` | FAQ de infraestrutura (resposta provisória genérica no site) |
| `TODO: confirmar composição da equipe` | FAQ de andaimes; “equipe própria” não foi afirmado |

Também confirmar domínio definitivo e fornecer fotos e informações de obras reais para substituir o portfólio ilustrativo. Certificações, NRs específicas, coordenadas, horários e avaliações foram omitidos porque não foram informados. O diagrama de atendimento é esquemático e não afirma uma coordenada exata. Link do Google Maps pesquisa o endereço completo fornecido.

## Referências técnicas

[Astro Picture](https://docs.astro.build/en/reference/modules/astro-assets/) e [GSAP SplitText](https://gsap.com/docs/v3/Plugins/SplitText/).
