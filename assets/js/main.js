(function () {
  "use strict";
  var reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var topo = document.getElementById("topo");

  /* entrada do hero (veio desenhando) */
  requestAnimationFrame(function () { document.documentElement.classList.add("is-ready"); });

  /* header fixo + parallax leve do slab */
  var par = document.querySelector("[data-parallax]");
  var tick = false;
  function onScroll() {
    if (tick) return;
    tick = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || 0;
      if (topo) topo.classList.toggle("is-fixo", y > 40);
      if (par && !reduz && y < window.innerHeight * 1.2) {
        par.style.transform = "translate3d(0," + (y * 0.06).toFixed(1) + "px,0)";
      }
      tick = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* reveal */
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && !reduz) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    rv.forEach(function (el) { io.observe(el); });
  } else {
    rv.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* cliques de CTA: evento + pré-seleção do projeto */
  var select = document.getElementById("f-projeto");
  document.querySelectorAll("[data-evento]").forEach(function (el) {
    el.addEventListener("click", function () {
      if (window.QH4) window.QH4.track("cta_click", { cta: el.getAttribute("data-evento") });
      var p = el.getAttribute("data-projeto");
      if (p && select) { select.value = p; validar(); }
    });
  });

  /* formulário */
  var form = document.getElementById("form-orcamento");
  if (!form) return;
  var btn = document.getElementById("btn-enviar");
  var whats = document.getElementById("f-whats");
  var iniciou = false;

  function mascara(v) {
    v = v.replace(/\D/g, "").slice(0, 11);
    if (v.length > 10) return v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    if (v.length > 6) return v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    if (v.length > 2) return v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    return v ? "(" + v : "";
  }
  function validar() {
    var digitos = whats.value.replace(/\D/g, "");
    whats.setCustomValidity(digitos.length >= 10 ? "" : "Informe o WhatsApp com DDD.");
    btn.disabled = !form.checkValidity();
  }
  whats.addEventListener("input", function () { whats.value = mascara(whats.value); });
  form.addEventListener("input", validar);
  form.addEventListener("change", validar);
  form.addEventListener("focusin", function () {
    if (!iniciou) { iniciou = true; if (window.QH4) window.QH4.track("form_start"); }
  });
  validar();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validar();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var cfg = window.QH4_CONFIG;
    var d = {
      nome: form.nome.value.trim(),
      whatsapp: form.whatsapp.value.trim(),
      projeto: form.projeto.value,
      local: form.local.value.trim(),
      detalhes: form.detalhes.value.trim()
    };
    window.QH4.track("generate_lead", { projeto: d.projeto });
    btn.disabled = true;
    btn.textContent = "Enviando...";

    if (cfg.webhook) {
      var body = new URLSearchParams(d);
      body.append("origem", "lp-azevedo-marmoraria");
      fetch(cfg.webhook, { method: "POST", mode: "no-cors", body: body })
        .catch(function () {})
        .then(function () { window.location.href = "obrigado.html"; });
      return;
    }

    var linhas = [
      window.QH4_CONFIG.mensagemOrcamento,
      "",
      "Nome: " + d.nome,
      "WhatsApp: " + d.whatsapp,
      "O que preciso: " + d.projeto
    ];
    if (d.local) linhas.push("Bairro ou cidade da obra: " + d.local);
    if (d.detalhes) linhas.push("Detalhes: " + d.detalhes);
    window.location.href = window.QH4.waLink(linhas.join("\n"));
  });
})();
