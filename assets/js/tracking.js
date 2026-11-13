/* ============================================================
   [QH4 SLOT 7] CONFIGURAÇÃO DE RASTREAMENTO E CONTATO
   Edite SÓ este objeto. O resto do site lê daqui.
   ============================================================ */
window.QH4_CONFIG = {
  // WhatsApp que recebe os leads (somente números, com 55 + DDD)
  whatsapp: "5596991912217",

  // Mensagem padrão dos botões de WhatsApp
  mensagemPadrao: "Olá, vim pelo site da marmoraria e gostaria de mais informações.",

  // Mensagem dos botões que falam de orçamento (data-wa-msg="orcamento")
  mensagemOrcamento: "Olá, vim pelo site da marmoraria e gostaria de solicitar um orçamento.",

  // Mensagem enviada depois do formulário quando há webhook (página de obrigado)
  mensagemObrigado: "Olá, acabei de preencher o formulário no site. Aguardo mais informações.",

  // Google Apps Script / webhook que recebe o formulário.
  // VAZIO = o formulário monta a mensagem completa e envia direto pro WhatsApp.
  // PREENCHIDO = envia pro webhook, abre obrigado.html e redireciona pro WhatsApp.
  webhook: "",

  // Rótulos de conversão (usados no SLOT 8 do obrigado.html, se precisar)
  conversao: {
    googleAdsLabel: "",   // exemplo: "AW-XXXXXXXXX/ROTULO"
    metaEvent: "Lead"
  },

  // Segundos até redirecionar do obrigado.html para o WhatsApp
  redirecionarEm: 4
};

/* Eventos padronizados (dataLayer):
   whatsapp_click  { wa_local }  clique em qualquer botão de WhatsApp
   form_start                    primeiro foco no formulário
   generate_lead   { projeto }   envio válido do formulário
   thank_you_view                visualização da página de obrigado
*/
window.dataLayer = window.dataLayer || [];
window.QH4 = {
  config: window.QH4_CONFIG,
  track: function (evento, params) {
    var payload = { event: evento };
    if (params) { for (var k in params) { payload[k] = params[k]; } }
    window.dataLayer.push(payload);
  },
  waLink: function (mensagem) {
    return "https://wa.me/" + window.QH4_CONFIG.whatsapp + "?text=" + encodeURIComponent(mensagem);
  }
};

/* Aponta todos os botões [data-wa] para o número do config */
document.addEventListener("DOMContentLoaded", function () {
  var els = document.querySelectorAll("[data-wa]");
  for (var i = 0; i < els.length; i++) {
    var tipo = els[i].getAttribute("data-wa-msg");
    var msg = tipo === "orcamento" ? window.QH4_CONFIG.mensagemOrcamento : window.QH4_CONFIG.mensagemPadrao;
    els[i].setAttribute("href", window.QH4.waLink(msg));
    els[i].addEventListener("click", function (e) {
      window.QH4.track("whatsapp_click", { wa_local: e.currentTarget.getAttribute("data-wa-local") || "outro" });
    });
  }
});
