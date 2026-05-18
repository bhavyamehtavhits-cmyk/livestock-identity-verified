(function(){
  const NAV = [
    {href:"index.html",label:"Home"},
    {href:"enrollment.html",label:"Enrollment"},
    {href:"verification.html",label:"Verification"},
    {href:"monitoring.html",label:"Pilot Monitoring"},
    {href:"admin.html",label:"Administration"},
    {href:"mobile.html",label:"FLW Mobile"}
  ];
  const current = location.pathname.split("/").pop() || "index.html";
  const lang = localStorage.getItem("ndlm_lang") || "EN";
  const fs = parseInt(localStorage.getItem("ndlm_fs") || "16",10);
  document.documentElement.style.fontSize = fs + "px";
  if(localStorage.getItem("ndlm_hc")==="1") document.documentElement.classList.add("high-contrast");

  document.addEventListener("DOMContentLoaded", function(){
    const header = document.getElementById("gov-header");
    if(header){
      header.innerHTML = `
        <div class="utility-bar"><div class="container">
          <div class="left">
            <span>भारत सरकार | Government of India</span>
            <span>Ministry of Fisheries, Animal Husbandry & Dairying</span>
          </div>
          <div class="right">
            <button onclick="NDLM.font(-1)" aria-label="Decrease font">A-</button>
            <button onclick="NDLM.font(0)" aria-label="Reset font">A</button>
            <button onclick="NDLM.font(1)" aria-label="Increase font">A+</button>
            <button onclick="NDLM.contrast()" aria-label="Toggle contrast">Contrast</button>
            <button onclick="NDLM.lang()" aria-label="Toggle language">${lang==="EN"?"हिं":"EN"}</button>
          </div>
        </div></div>
        <div class="gov-strip"></div>
        <div class="header"><div class="container">
          <div class="emblem">सत्यमेव<br>जयते</div>
          <div class="brand">
            <h1>National Dairy Development Board · NDLM</h1>
            <p>Bovine Biometric Identification System · National Digital Livestock Mission</p>
          </div>
        </div></div>
        <nav class="nav" aria-label="Primary"><div class="container">
          ${NAV.map(n=>`<a href="${n.href}" class="${current===n.href?"active":""}">${n.label}</a>`).join("")}
        </div></nav>`;
    }
    const footer = document.getElementById("gov-footer");
    if(footer){
      footer.innerHTML = `
        <div class="footer-top"><div class="container grid cols-4">
          <div><h5>About NDLM</h5>
            <a href="#">Mission Overview</a><a href="#">NDDB Mandate</a><a href="#">Implementation Partners</a>
          </div>
          <div><h5>Resources</h5>
            <a href="#">Technical Specifications</a><a href="#">API Documentation</a><a href="#">Field Manuals</a>
          </div>
          <div><h5>Compliance</h5>
            <a href="#">Data Protection (DPDP Act)</a><a href="#">RTI</a><a href="#">Accessibility (WCAG 2.1)</a>
          </div>
          <div><h5>Contact</h5>
            <a href="mailto:ndlm@nddb.coop">ndlm@nddb.coop</a><a href="#">NDDB, Anand, Gujarat</a><a href="#">Helpline: 1800-XXX-XXXX</a>
          </div>
        </div></div>
        <div class="container footer-bottom">
          <div>© ${new Date().getFullYear()} National Dairy Development Board · Government of India</div>
          <div class="compliance"><span>STQC Certified</span><span>GIGW 3.0</span><span>WCAG 2.1 AA</span><span>ISO 27001</span></div>
        </div>`;
    }
  });

  window.NDLM = {
    font(d){
      if(d===0){localStorage.removeItem("ndlm_fs");document.documentElement.style.fontSize="16px";return;}
      const next = Math.min(22, Math.max(13, parseInt(document.documentElement.style.fontSize)+d));
      document.documentElement.style.fontSize = next+"px";
      localStorage.setItem("ndlm_fs", next);
    },
    contrast(){
      document.documentElement.classList.toggle("high-contrast");
      localStorage.setItem("ndlm_hc", document.documentElement.classList.contains("high-contrast")?"1":"0");
    },
    lang(){
      localStorage.setItem("ndlm_lang", lang==="EN"?"HI":"EN");
      location.reload();
    },
    async data(){
      const r = await fetch("data.json"); return r.json();
    }
  };
})();
