# LP Azevedo Mármores e Granitos (padrão QH4)

Landing page da Azevedo Mármores e Granitos (Santana/AP). Cliente: Leandro Dias dos Santos ("Léo"). Produto: Método Stones Low Ticket. Contrato de 29/10/2026 a 29/04/2027, renovação automática.

## Estrutura de arquivos

```
index.html           LP principal
obrigado.html        página de obrigado (só abre se houver webhook)
404.html             página de erro personalizada
robots.txt
sitemap.xml
site.webmanifest
vercel.json
TRACKING-QH4.md      guia de GTM, Pixel, eventos e slots
assets/
  css/style.css
  js/main.js         animações, máscara e validação do formulário
  js/tracking.js     QH4_CONFIG: WhatsApp, webhook e rótulos de conversão
  fonts/             Poppins e Inter hospedadas (sem Google Fonts)
  img/               texturas de pedra, favicon, ícones e imagem OG
```

## Como publicar na Vercel (plano gratuito)

1. Suba a pasta como projeto estático (arrastar na Vercel ou via GitHub). Sem build, sem framework.
2. Aponte o domínio e confira o HTTPS.
3. Depois de publicado, rode o checklist abaixo.

## Pendências antes de publicar

- [ ] Domínio definitivo: trocar `https://www.azevedomarmoraria.com.br` (placeholder) em `index.html` (canonical, Open Graph, JSON-LD), `sitemap.xml` e `robots.txt`.
- [ ] Fotos reais do cliente: o cliente ainda não enviou. Hoje a LP usa 4 imagens enviadas pelo Malta (arquivos "Imagem do ChatGPT" e renders de cozinha), que são imagens geradas por IA e não obras do cliente. Por isso a galeria se chama "Ambientes em pedra" (inspirações) e NÃO "Nossos trabalhos". Quando o cliente mandar obras reais, trocar as fotos e, se quiser, voltar o título para "Nossos trabalhos". Para trocar, salve a foto com o MESMO nome em `assets/img/` (ou ajuste `width`/`height` e `alt` no HTML):
  - `hero-cozinha.jpg` (1500x844): foto do hero, com o veio laranja que se desenha e esmaece por cima
  - `foto-cozinha-1.jpg`, `foto-cozinha-2.jpg` (1200x900): faixa abaixo da seção de cozinha (fotos já aplicadas)
  - `foto-cozinha-3.jpg` (1200x900): ainda placeholder
  - `foto-obra-1.jpg` (1200x1200): galeria, foto grande (banheiro, já aplicada); `foto-obra-2.jpg` a `foto-obra-5.jpg` (1000x770): placeholders
  - `foto-equipe.jpg` (1000x1250): seção "Dois amigos, um projeto de cada vez" (placeholder)
  - `foto-profissionais.jpg` (1200x750): seção de arquitetos e engenheiros (placeholder)
  - `pedra-marmore.jpg` (1200x900): painel Mármores, `tex-granito.jpg` e `tex-pedra.jpg`: painéis Granitos e Pedras naturais (texturas geradas, trocar por fotos das chapas)
  - Catálogo https://stonedigital.online/azevedo: página dinâmica, as fotos não puderam ser extraídas automaticamente. Se quiser usar, exporte as imagens das pedras e coloque nos painéis acima.
  - Se faltar foto no lançamento, remova a galeria (`#obras`) e a faixa `.coz-fotos` em vez de publicar com placeholder.
- [ ] Logomarca: o cliente anexou `IMG_6425` no briefing, mas o arquivo não veio. A marca atual é um selo provisório (A com veio laranja) + nome em texto. Trocar no header (`index.html`), em `favicon.svg` e nos ícones quando a logo chegar.
- [ ] Instagram da QH4 no rodapé: está apontando para `https://www.instagram.com/qh4growth/`. Confirmar o @ correto.
- [ ] GTM, Pixel, Google Ads e verificações de domínio: ver `TRACKING-QH4.md` (slots 1 a 8).
- [ ] Webhook (Apps Script): se for usar, preencher `webhook` em `assets/js/tracking.js`. Sem webhook, o formulário monta a mensagem completa e envia direto ao WhatsApp.
- [ ] Região de atendimento: o texto só cita Santana/AP. Se os anúncios também forem para Macapá e Mazagão, confirmar com o Léo e ajustar título, descrição e JSON-LD (`areaServed`).
- [ ] Endereço completo e CEP da empresa: não vieram no briefing. Se o cliente quiser, incluir no rodapé e no JSON-LD (`streetAddress`).
- [ ] Script do IVO já instalado (`data-lp="lp-azevedo-marmoraria"`) na index e no obrigado. Cadastrar a LP no painel se necessário.

## Fonte do conteúdo

Todo o conteúdo vem do briefing em PDF (Formulário de Briefing + Site) e da ficha de contrato. Nada foi inventado:

- Desde 2020, dois amigos da construção civil: história do briefing.
- Serviços: balcões, bancadas, ilhas, escadas, soleiras, peitoris, cozinhas, nichos, pias para banheiros, pias esculpidas, produtos de cemitério e pisos.
- Destaque: cozinha. Diferenciais: acabamento e agilidade. Transformação: qualidade e preço justo.
- Horário: seg a sex 8h às 18h sem fechar para o almoço, sáb 8h às 12h.
- Público: 25 a 55 anos, mais arquitetos, engenheiros, designers de interiores e construtores. Referências: obras públicas, privadas e indicações.
- Paleta: preto, laranja e branco. Fonte sem preferência (Poppins e Inter). Fundo mesclado. Posicionamento: tradicional.
- Sem depoimentos inventados: a seção de prova leva ao Google (`share.google/pnVPET5iek2P1BlWa`) e ao Instagram do cliente.
- Perguntas do FAQ usam só fatos do briefing. Prazo e desconto (dúvida mais comum do cliente) não têm resposta no briefing, então o FAQ remete ao atendimento.

## Direção visual

Carvão (`#1F1E1C`), pedra (`#F2F0EC`), branco e laranja (`#F26A1B`). Um único momento de destaque: o veio laranja que se desenha na chapa de mármore do hero. O restante é tipografia grande e linhas finas. Texto sobre laranja usa carvão, para manter contraste.

## Eventos de rastreamento

`whatsapp_click` (com `wa_local`: header, hero, flutuante, rodapé), `cta_click`, `form_start`, `generate_lead`, `thank_you_view`. Detalhes em `TRACKING-QH4.md`.

## Checklist de SEO e entrega

- [x] Title e meta description com nicho e cidade
- [x] Headline com "Marmoraria" e "perto de você"
- [x] Open Graph e Twitter Card completos (imagem 1200x630)
- [x] Canonical (pendente: domínio)
- [x] JSON-LD HomeAndConstructionBusiness e FAQPage
- [x] robots.txt, sitemap.xml, site.webmanifest
- [x] `width` e `height` nas imagens, preload do hero e das fontes
- [x] Fontes hospedadas, sem requisições externas (cliente reclama de site lento)
- [x] vercel.json (cache de assets e cabeçalhos de segurança)
- [x] Página de obrigado e 404 personalizada (noindex)
- [x] Botão flutuante de WhatsApp à direita
- [x] Formulário com botão desabilitado até os campos obrigatórios estarem válidos
- [x] Rodapé com "Desenvolvido pro QH4 Growth"
- [x] Foco visível, `prefers-reduced-motion` respeitado, responsivo até 360px
