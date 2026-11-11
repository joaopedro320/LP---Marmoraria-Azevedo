# Rastreamento QH4: onde colar cada código

Os mesmos slots existem em `index.html`, `obrigado.html` e `404.html`, em blocos de comentário grandes e numerados. Procure por `[QH4 SLOT`.

| Slot | Onde fica | O que colar |
|------|-----------|-------------|
| 1 | `<head>` | Snippet do Google Tag Manager |
| 2 | `<head>` | Meta tags de verificação de domínio (Search Console, Meta) |
| 3 | `<head>` | Meta Pixel direto (só se NÃO usar GTM) |
| 4 | `<head>` | gtag.js de Google Ads / GA4 (só se NÃO usar GTM) |
| 5 | logo após `<body>` | `noscript` do GTM |
| 6 | antes de `</body>` | Scripts de terceiros (Clarity, Hotjar, chat, CRM) |
| 7 | `assets/js/tracking.js` | Não cole no HTML. Edite `QH4_CONFIG` (WhatsApp, webhook, rótulos) |
| 8 | `obrigado.html` | Conversão do Google Ads / Meta (Lead). Ativo só nessa página |

Regra: com GTM, use só os slots 1 e 5. Sem GTM, use 3 e/ou 4.

## Eventos de dataLayer

| Evento | Quando dispara | Parâmetros |
|--------|----------------|------------|
| `whatsapp_click` | Clique em qualquer botão de WhatsApp | `wa_local`: header, hero, flutuante, rodape, 404 |
| `cta_click` | Clique em botão que leva ao formulário | `cta` |
| `form_start` | Primeiro foco no formulário | n/d |
| `generate_lead` | Envio válido do formulário | `projeto` |
| `thank_you_view` | Abertura do `obrigado.html` | n/d |

## Fluxo do formulário

- `webhook` vazio (estado atual): o formulário monta a mensagem completa com todos os campos e abre o WhatsApp. O `generate_lead` dispara antes do redirecionamento.
- `webhook` preenchido (Apps Script): envia os dados, abre `obrigado.html` e redireciona ao WhatsApp em 4 segundos com a mensagem "Olá, acabei de preencher o formulário no site. Aguardo mais informações."

## IVO (Funil do LIA & IVO)

Script instalado antes do `</body>` da `index.html` e do `obrigado.html` (não na 404), com `data-lp="lp-azevedo-marmoraria"`.
