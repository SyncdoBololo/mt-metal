# Verificação da atualização — materiais do cliente

28/09/2026. Alterações sobre a versão aprovada do repositório SyncdoBololo/mt-metal.

## Resultado

- Build Astro: 8 páginas estáticas, sem erros e sem avisos TypeScript.
- 21 testes Playwright passaram: viewports 320, 375, 768 e 1440 px, modos de movimento, navegação e conteúdo sem JavaScript, além das verificações dos novos materiais.
- Os dois testes de materiais foram repetidos após a atualização de metadados: contatos, 12 imagens carregadas, filtros, PDF disponível e formulário encaminhando corretamente para a área técnica. O teste existente confirma o destino comercial. Não houve envio real de mensagens.
- Marca, hero, portfólio e contatos revisados visualmente em desktop e celular. Screenshots em `tests/screenshots/cliente-*.png`.
- Build com `BASE_PATH=/mt-metal` validado: marca, PDF, página de armação e canonical com o prefixo correto. Mantido o workflow existente do GitHub Pages.

## Lighthouse mobile — build local de produção com prefixo do GitHub Pages

| Métrica | Resultado |
|---|---:|
| Performance | 95 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |
| LCP | 2,7 s |
| CLS | 0,003 |
| Total Blocking Time | 0 ms |
| JavaScript gzip | 67.872 bytes |

Relatório: `tests/lighthouse.html`. Dados: `tests/lighthouse.json`. O LCP desta medição ficou acima da meta inicial de 2,5 s; o resultado depende do dispositivo e rede. Estas notas não são uma medição do site remoto após publicação.

## Materiais e limites

Logo extraído como vetor do PDF, com lettering e cores preservados. Fotos extraídas em sua resolução original (aproximadamente 380–414 px), sem ampliar os arquivos. Para fotos maiores ou lightbox em alta resolução, solicitar os originais ao cliente. O PDF integral é baixado apenas mediante clique, sem entrar na carga inicial da página.

Nomes, e-mails e funções provêm do portfólio. Os dois números de WhatsApp foram confirmados diretamente pelo usuário. Nenhum número adicional do PDF foi incluído como WhatsApp; nomes de clientes, datas e localizações de obras não foram inferidos. Mockup do carro usado como referência visual, não como prova de frota.
