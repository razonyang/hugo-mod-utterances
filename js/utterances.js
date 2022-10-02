"use strict";
(() => {
  // ns-params:@params
  var params_default = { endpoint: "https://utteranc.es/" };

  // ns-hugo:/home/runner/work/hugo-mod-utterances/hugo-mod-utterances/assets/utterances/js/index.ts
  var Utterances = class {
    endpoint = "";
    constructor(endpoint) {
      this.endpoint = endpoint.replace(/\/$/, "");
    }
    setTheme(theme) {
      const msg = {
        type: "set-theme",
        theme
      };
      const iframe = document.querySelector(".utterances-frame");
      iframe?.contentWindow?.postMessage(msg, this.endpoint);
    }
  };
  var js_default = Utterances;

  // <stdin>
  var utterances = new js_default(params_default.endpoint);
  window.Utterances = utterances;
})();
