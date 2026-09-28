# Verificação — MT METAL

Auditoria local do build de produção em 28/09/2026, refeita após a revisão final, em Chromium headless, Lighthouse mobile com limitação simulada de rede/CPU.

| Métrica | Resultado |
|---|---:|
| Performance | 98 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |
| LCP | 2,1 s |
| CLS | 0,008 |
| Total Blocking Time | 50 ms |
| JavaScript total gzip | aproximadamente 68 KB |

Build: 8 páginas estáticas, zero erros e zero avisos TypeScript.

Playwright: 19 testes passaram. Home e armação verificadas em 320, 375, 768 e 1440 px, com e sem movimento reduzido. Zero erros de console e nenhuma rolagem horizontal nessas condições. Testes funcionais validaram menu/Esc, filtros, mensagem WhatsApp sem envio real, transição/Voltar, vídeo automático em loop, movimento reduzido e conteúdo sem JavaScript. Após a otimização da fonte da hero, foram repetidos os testes afetados de hero e viewport móvel.

Screenshots em `tests/screenshots/`. Relatório em `tests/lighthouse.html`, dados brutos em `tests/lighthouse.json`. Resultados medidos localmente não garantem a mesma nota em toda rede/dispositivo.

A fonte da hero mantém eixos variáveis do Archivo, com subconjunto de caracteres do título (6.984 bytes), auto-hospedada e com font-display swap. Ao alterar o título, regenerar o subconjunto ou usar a fonte Archivo completa de fallback. Demais títulos usam Archivo variável completo. A imagem da hero aparece imediatamente; a medição final identificou o título como maior elemento de conteúdo.

Pontos de revisão visual: hero desktop e mobile, página de armação, seções de serviços e contato, revisão da página inteira. Pin horizontal verificado em viewport normal; screenshots de página inteira registram o espaço reservado para a rolagem.

Dados ainda dependentes do cliente: logo definitivo, e-mail, Instagram, raio de atendimento, especificações técnicas (bitolas, capacidade, dimensões, frota), composição da equipe e fotos de obras reais. Lista detalhada no README.

## Revisão final

- Vídeo da hero ganhou versões VP9 (`.webm`), escolhidas automaticamente quando o navegador não reproduz H.264. Antes, esses navegadores ficavam só com a foto.
- Placeholders `{{TODO}}` deixaram de aparecer para o visitante. A ficha do reservatório mostra "SOB PROJETO" e as FAQs pendentes têm respostas provisórias neutras. As marcações continuam no código como comentários `TODO`.
- A foto do reservatório no portfólio passou a usar `multiply`, e o retângulo branco sobre o fundo claro sumiu.
- O rodapé ganhou espaço inferior para o botão flutuante do WhatsApp não cobrir "Voltar ao topo".
- O link do logo usa o próprio texto visível como nome acessível (correção de `label-content-name-mismatch`).
- A revelação palavra por palavra do manifesto começa com opacidade 0,55, mantendo contraste mínimo de 3:1 também durante a animação.
- `playwright.config.ts`, `scripts/lighthouse.mjs` e `scripts/social-card.mjs` funcionam em Windows e em outros sistemas (variável `CHROME_PATH`), e o `npm test` sobe o preview sozinho.

Resultado: build com 0 erros, 0 avisos e 0 dicas, 19 de 19 testes Playwright aprovados, Lighthouse mobile 98 / 100 / 100 / 100.

## Auditoria com a skill CodeMakers-Design

Skill instalada em `.claude/skills/codemakers-design/` e aplicada no modo redesign com auditoria, seguindo `references/quality-review.md`, `visual-debugging.md`, `interaction-accessibility.md` e `motion-choreography.md`. Contrastes medidos com `scripts/contrast_check.py`.

| Área | Achado | Prioridade | Situação |
|---|---|---|---|
| Legibilidade | 30 rótulos técnicos com 8 a 10 px (6 px no subtítulo do logo no celular) | Importante | Corrigido, mínimo de 11 px. Logo com 8 px no celular e 9 px no desktop |
| Foco por teclado | Contorno azul-claro sobre a seção creme do reservatório, 1,30:1 (mínimo 3:1) | Importante | Corrigido, contorno grafite nessa seção (16,3:1) |
| Alvo de toque | "Voltar ao topo" com 106×17 px | Importante | Corrigido, 44 px de altura |
| Contraste de texto | Pares medidos entre 6,17:1 e 16,31:1. "PROJETO." em #7B7B76 sobre creme tem 3,55:1, válido por ser texto grande | Verificado | Sem alteração |
| Formulário | Rótulos associados, `autocomplete`, `required` e foco no primeiro campo vazio ao enviar | Verificado | Sem alteração |
| Reflow | Rolagem horizontal zero em 1440, 390 e 320 px | Verificado | Sem alteração |
| Leitor de tela | Não testado neste ambiente | Não verificado | Recomendado teste com NVDA ou VoiceOver |

Depois das correções, o build terminou sem erros, os 19 testes passaram e o Lighthouse mobile ficou em 98 / 100 / 100 / 100 (CLS 0).
