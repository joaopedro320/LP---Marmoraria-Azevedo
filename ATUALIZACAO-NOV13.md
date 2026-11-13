# Atualização da LP Azevedo (feedback do Guilherme, 13/11/2026)

Este pacote traz só o que mudou. Copie por cima da pasta atual da LP (sobrescrevendo):
- index.html
- favicon.svg
- assets/css/style.css
- assets/js/main.js e assets/js/tracking.js
- assets/fonts/ (fontes agora em arquivo, não mais embutidas)
- assets/img/ (15 fotos do cliente melhoradas, em WebP, versão normal e -m para celular, e og-azevedo.jpg)

Não mexe em: obrigado.html, 404.html, robots.txt, sitemap.xml, vercel.json, site.webmanifest, README.md, TRACKING-QH4.md.

## Ajustes feitos
1. Headline: "Marmoraria de qualidade perto de você, com acabamento de alto padrão".
2. Subheadline: "Banheiros, cozinhas e bancadas. Transformamos seu ambiente com os melhores mármores, granitos e quartzitos!".
3. Hero: horário agora só "Seg a sex: 8h às 18h" e "Sáb: 8h às 12h".
4. Card "Sem fechar para o almoço" removido da faixa de fatos (sobram 3).
5. "Pedir orçamento" e "Chamar no WhatsApp" do hero abrem o WhatsApp.
   - Botões de orçamento: "Olá, vim pelo site da marmoraria e gostaria de solicitar um orçamento."
   - Botões de WhatsApp (hero, topo, flutuante, rodapé): "Olá, vim pelo site da marmoraria e gostaria de mais informações."
   - Mensagens ficam em assets/js/tracking.js (mensagemOrcamento e mensagemPadrao).
6. Fotos do cliente no lugar dos placeholders (hero, cozinha, galeria, pedras, história, profissionais, fundo do formulário, OG).

## Pendências
- "sem fechar para o almoço" ainda aparece no FAQ, no bloco de atendimento do formulário e no JSON-LD. Confirmar com o Guilherme se tira também.
- Foto da seção "Dois amigos, um projeto de cada vez" é de obra (não tem foto da equipe). Se o cliente mandar, trocar.
- Vídeos .MOV do cliente (8 arquivos, 4K) ainda não usados.
