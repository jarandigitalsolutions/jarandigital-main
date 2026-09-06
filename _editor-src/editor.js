/* ==========================================================================
   Jaran Page Editor
   --------------------------------------------------------------------------
   Opens one of the site's .html files, lets you edit it visually, and exports
   a complete .html file under the same name — ready to drop back into the
   site folder.

   This file is the SOURCE. The thing you actually open is editor.html in the
   project root, which is a single self-contained file built from this script,
   editor.css, shell.html, site.css and the site's images by
   _editor-src/build-editor.ps1. That is what makes the editor work offline,
   from a USB stick, on any device, with no web server.

   Design notes
   - Nothing the editor adds survives export. Editor-only nodes are tagged
     data-jde-ui and every data-jde-* attribute is stripped on the way out.
   - Page scripts are parked as type="text/jde-off" while editing so site.js
     cannot rewrite the DOM under us. Export puts them back exactly as found.
   - site.js rewrites the text of any [data-i18n] element on load. So when you
     retype such an element we drop that attribute, otherwise the live site
     would immediately overwrite your wording.
   - Offline there is no web server, so /assets/... cannot load. The build
     embeds site.css and the site's images; we inject them into the preview
     only, and put the original paths back on export.
   ========================================================================== */
(function(){
  "use strict";

  /* ---------------------------------------------------------------- bundle */

  var BUNDLE = window.JDE_BUNDLE || {pages:[], assets:{}, siteCss:"", builtAt:""};
  var OFFLINE = location.protocol === "file:";

  var PAGES = (BUNDLE.pages && BUNDLE.pages.length) ? BUNDLE.pages : [];

  var LINK_SUGGESTIONS = [
    "/", "/about", "/cv", "/cv-templates", "/e-invitation",
    "/e-invitation-templates", "/contact",
    "https://t.me/jarandigitalservices_cambodia",
    "tel:+855717045533",
    "mailto:jarandigitalsolutions@gmail.com"
  ];

  /* Areas site.js fills in at runtime — they look empty inside the editor. */
  var DYNAMIC_IDS = {
    tplGrid:1, tplCarouselTrack:1, tplCarouselCounter:1, tplResultCount:1,
    vidGrid:1, vidCarouselTrack:1, vidCarouselCounter:1, vidFilters:1, footYear:1
  };

  var PROTECTED_TAGS = {HTML:1, BODY:1, HEAD:1, MAIN:1, HEADER:1, FOOTER:1};

  var EDIT_CSS =
    '[data-jde-hover]{outline:2px dashed rgba(57,135,229,.6)!important;outline-offset:-2px;cursor:pointer}' +
    '[data-jde-sel]{outline:2px solid #3987e5!important;outline-offset:-2px;box-shadow:0 0 0 4px rgba(57,135,229,.16)!important}' +
    '[contenteditable="true"]{outline:2px solid #1a7f5a!important;outline-offset:-2px;cursor:text}' +
    'html.jde-noguides [data-jde-hover],html.jde-noguides [data-jde-sel]{outline:none!important;box-shadow:none!important}' +
    '.reveal{opacity:1!important;transform:none!important}' +
    'html{scroll-behavior:auto!important}';

  /* ----------------------------------------------------------- block library */

  function block(id, name, desc, html){ return {id:id, name:name, desc:desc, html:html}; }

  var CONTENT_BLOCKS = [
    block("heading", "Section heading", "Eyebrow, headline and a line of intro text.",
      '<section>\n  <div class="wrap">\n    <div class="section-head reveal">\n      <div class="eyebrow">Eyebrow</div>\n      <h2>Section headline</h2>\n      <p>One or two sentences introducing what this section is about.</p>\n    </div>\n  </div>\n</section>'),

    block("prose", "Text with cards", "A column of paragraphs beside three small cards.",
      '<section>\n  <div class="wrap">\n    <div class="about-grid">\n      <div class="about-copy prose reveal">\n        <div class="eyebrow">Eyebrow</div>\n        <h2 style="font-size:clamp(24px,3vw,32px);margin-bottom:18px">Headline for this section</h2>\n        <p>Replace this paragraph with your own copy. Keep it short and specific — say what the reader gets.</p>\n        <p>A second paragraph, if you need one.</p>\n      </div>\n      <div class="value-cards reveal">\n        <div class="vcard">\n          <div class="ico" aria-hidden="true">✎</div>\n          <div><h3>First point</h3><p>A sentence explaining it.</p></div>\n        </div>\n        <div class="vcard">\n          <div class="ico" aria-hidden="true">⚡</div>\n          <div><h3>Second point</h3><p>A sentence explaining it.</p></div>\n        </div>\n        <div class="vcard">\n          <div class="ico" aria-hidden="true">$</div>\n          <div><h3>Third point</h3><p>A sentence explaining it.</p></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>'),

    block("features", "Three feature cards", "A row of three cards with an icon, title and text.",
      '<section style="background:var(--paper)">\n  <div class="wrap">\n    <div class="section-head reveal">\n      <div class="eyebrow">Eyebrow</div>\n      <h2>Section headline</h2>\n    </div>\n    <div class="vcards-row reveal">\n      <div class="vcard">\n        <div class="ico" aria-hidden="true">✎</div>\n        <div><h3>First feature</h3><p>A sentence explaining it.</p></div>\n      </div>\n      <div class="vcard">\n        <div class="ico" aria-hidden="true">✦</div>\n        <div><h3>Second feature</h3><p>A sentence explaining it.</p></div>\n      </div>\n      <div class="vcard">\n        <div class="ico" aria-hidden="true">⚡</div>\n        <div><h3>Third feature</h3><p>A sentence explaining it.</p></div>\n      </div>\n    </div>\n  </div>\n</section>'),

    block("steps", "Three numbered steps", "A “how it works” row of three steps.",
      '<section>\n  <div class="wrap">\n    <div class="section-head reveal">\n      <div class="eyebrow">How it Works</div>\n      <h2>Three simple steps</h2>\n    </div>\n    <div class="steps reveal" style="margin-bottom:0">\n      <div class="step">\n        <div class="num">1</div>\n        <h3>First step</h3>\n        <p>What the customer does first.</p>\n      </div>\n      <div class="step">\n        <div class="num">2</div>\n        <h3>Second step</h3>\n        <p>What happens next.</p>\n      </div>\n      <div class="step">\n        <div class="num">3</div>\n        <h3>Third step</h3>\n        <p>What they end up with.</p>\n      </div>\n    </div>\n  </div>\n</section>'),

    block("stats", "Numbers row", "Four headline figures.",
      '<section>\n  <div class="wrap">\n    <div class="stats reveal">\n      <div class="stat"><b>400+</b><span>Design templates</span></div>\n      <div class="stat"><b>2</b><span>Core services</span></div>\n      <div class="stat"><b>&lt; 24 hrs</b><span>Telegram response</span></div>\n      <div class="stat"><b>KH / EN</b><span>Languages served</span></div>\n    </div>\n  </div>\n</section>'),

    block("faq", "FAQ list", "Expandable question and answer list.",
      '<section style="background:var(--paper)">\n  <div class="wrap">\n    <div class="section-head reveal">\n      <div class="eyebrow">FAQ</div>\n      <h2>Frequently asked questions</h2>\n    </div>\n    <div class="faq-list reveal" style="margin:0 auto">\n      <details class="faq-item">\n        <summary>First question?</summary>\n        <div class="faq-a">The answer, in one short paragraph.</div>\n      </details>\n      <details class="faq-item">\n        <summary>Second question?</summary>\n        <div class="faq-a">The answer, in one short paragraph.</div>\n      </details>\n      <details class="faq-item">\n        <summary>Third question?</summary>\n        <div class="faq-a">The answer, in one short paragraph.</div>\n      </details>\n    </div>\n  </div>\n</section>'),

    block("services", "Two service cards", "Two large linked cards side by side.",
      '<section>\n  <div class="wrap">\n    <div class="services-grid reveal">\n      <a class="service-card" href="/cv">\n        <div class="service-body">\n          <h3>Jaran CV</h3>\n          <p>Professionally designed CVs to help you stand out when applying for jobs.</p>\n          <span class="btn primary sm" style="align-self:flex-start">Browse CV Templates</span>\n        </div>\n      </a>\n      <a class="service-card" href="/e-invitation">\n        <div class="service-body">\n          <h3>Digital E-Invitations</h3>\n          <p>Beautiful digital invitations for every occasion.</p>\n          <span class="btn dark sm" style="align-self:flex-start">See Templates</span>\n        </div>\n      </a>\n    </div>\n  </div>\n</section>')
  ];

  var MEDIA_BLOCKS = [
    block("photo", "Photo band", "One wide photo with an optional caption.",
      '<section>\n  <div class="wrap">\n    <figure class="media-band reveal" style="margin:0">\n      <img src="/assets/img/logo.jpg" alt="Describe this photo">\n      <figcaption>Caption for this photo.</figcaption>\n    </figure>\n  </div>\n</section>'),

    block("photogrid", "Photo grid (3)", "Three photos side by side.",
      '<section>\n  <div class="wrap">\n    <div class="media-grid reveal">\n      <figure class="media-band" style="margin:0"><img src="/assets/img/logo.jpg" alt="Describe this photo"></figure>\n      <figure class="media-band" style="margin:0"><img src="/assets/img/logo.jpg" alt="Describe this photo"></figure>\n      <figure class="media-band" style="margin:0"><img src="/assets/img/logo.jpg" alt="Describe this photo"></figure>\n    </div>\n  </div>\n</section>'),

    block("phototext", "Photo beside text", "A photo on one side, copy on the other.",
      '<section style="background:var(--paper)">\n  <div class="wrap">\n    <div class="about-grid">\n      <figure class="media-band reveal" style="margin:0"><img src="/assets/img/logo.jpg" alt="Describe this photo"></figure>\n      <div class="prose reveal">\n        <div class="eyebrow">Eyebrow</div>\n        <h2 style="font-size:clamp(24px,3vw,32px);margin-bottom:18px">Headline beside the photo</h2>\n        <p>Replace this paragraph with your own copy.</p>\n      </div>\n    </div>\n  </div>\n</section>'),

    block("video", "Video (YouTube)", "A responsive YouTube player.",
      '<section>\n  <div class="wrap">\n    <div class="section-head reveal">\n      <div class="eyebrow">Video</div>\n      <h2>Watch a sample</h2>\n    </div>\n    <div class="embed reveal" style="max-width:840px;margin:0 auto">\n      <iframe src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>\n    </div>\n  </div>\n</section>')
  ];

  var CTA_BLOCKS = [
    block("cta", "Call-to-action band", "Dark band with a headline and buttons.",
      '<section>\n  <div class="wrap">\n    <div class="cv-cta reveal">\n      <div>\n        <h3>Ready to get started?</h3>\n        <p>Tell us what you need — we respond fastest on Telegram.</p>\n      </div>\n      <div style="display:flex;gap:12px;flex-wrap:wrap">\n        <a class="btn tg" href="https://t.me/jarandigitalservices_cambodia" target="_blank" rel="noopener">\n          <span><img class="tg-icon" src="/assets/img/telegram.png" alt=""></span><span>Chat on Telegram</span>\n        </a>\n        <a class="btn ghost" href="/contact">Contact us</a>\n      </div>\n    </div>\n  </div>\n</section>'),

    block("contactcards", "Contact cards", "Telegram, phone and email cards.",
      '<section style="background:var(--paper)">\n  <div class="wrap">\n    <div class="section-head reveal">\n      <div class="eyebrow">Contact Us</div>\n      <h2>Get in touch</h2>\n    </div>\n    <div class="contact-grid reveal" style="margin-bottom:0">\n      <a class="ccard" href="https://t.me/jarandigitalservices_cambodia" target="_blank" rel="noopener">\n        <div class="ico"><img class="tg-icon" src="/assets/img/telegram.png" alt=""></div>\n        <h3>Telegram</h3>\n        <div class="val">@jarandigitalservices_cambodia</div>\n        <span class="btn tg block sm">Chat now</span>\n      </a>\n      <a class="ccard" href="tel:+855717045533">\n        <div class="ico" aria-hidden="true">☎</div>\n        <h3>Phone</h3>\n        <div class="val">+855 71 704 5533</div>\n        <span class="btn dark block sm">Call now</span>\n      </a>\n      <a class="ccard" href="mailto:jarandigitalsolutions@gmail.com">\n        <div class="ico" aria-hidden="true">✉</div>\n        <h3>Email</h3>\n        <div class="val">jarandigitalsolutions@gmail.com</div>\n        <span class="btn dark block sm">Send email</span>\n      </a>\n    </div>\n  </div>\n</section>'),

    block("hero", "Dark hero", "Full-width dark banner with buttons.",
      '<section class="hero page solo">\n  <div class="wrap hero-grid">\n    <div class="reveal show">\n      <div class="eyebrow on-dark">Eyebrow</div>\n      <h1>A headline for this page</h1>\n      <p class="lead">One or two sentences that say what this page offers.</p>\n      <div class="hero-ctas">\n        <a class="btn primary" href="/contact">Get started</a>\n        <a class="btn ghost" href="https://t.me/jarandigitalservices_cambodia" target="_blank" rel="noopener">Chat on Telegram</a>\n      </div>\n    </div>\n  </div>\n</section>')
  ];

  /* ----------------------------------------------------------------- state */

  var stage, fdoc, fwin;
  var state = {file:null, loaded:false, dirty:false, replaceMode:false, source:""};
  var selected = null, inlineEl = null;
  var undoStack = [], redoStack = [], baseline = null;
  var i18nMemory = new WeakMap();
  var pendingMount = false;

  var $ = function(id){ return document.getElementById(id); };

  /* ----------------------------------------------------------------- utils */

  function esc(s){
    return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  var toastTimer;
  function toast(msg, kind){
    var t = $("toast");
    t.textContent = msg;
    t.className = "jde-toast show" + (kind ? " " + kind : "");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.className = "jde-toast"; }, kind === "err" ? 7000 : 3400);
  }

  function labelFor(el){
    if(!el) return "";
    var h = el.querySelector("h1,h2,h3");
    var text = h && h.textContent.trim();
    if(!text && el.id) text = "#" + el.id;
    if(!text) text = el.className ? "." + String(el.className).split(/\s+/)[0] : el.tagName.toLowerCase();
    return text.length > 42 ? text.slice(0, 41) + "…" : text;
  }

  function describe(el){
    var s = el.tagName.toLowerCase();
    if(el.id) s += "#" + el.id;
    var cls = (typeof el.className === "string" ? el.className : "").trim();
    if(cls) s += "." + cls.split(/\s+/).filter(function(c){ return c.indexOf("jde") !== 0; }).join(".");
    return s;
  }

  function root(){ return fdoc && (fdoc.querySelector("main") || fdoc.body); }

  function sectionOf(el){
    var r = root();
    if(!r || !el) return null;
    var n = el;
    while(n && n.parentElement && n.parentElement !== r) n = n.parentElement;
    return (n && n.parentElement === r) ? n : null;
  }

  function isTextOnly(el){
    if(!el || !el.childNodes.length) return false;
    for(var i = 0; i < el.childNodes.length; i++){
      if(el.childNodes[i].nodeType === 1) return false;
    }
    return true;
  }

  function isProtected(el){ return !el || PROTECTED_TAGS[el.tagName] === 1; }

  function pageByFile(file){
    for(var i = 0; i < PAGES.length; i++){ if(PAGES[i].file === file) return PAGES[i]; }
    return null;
  }

  function whenText(ts){
    if(!ts) return "";
    var d = new Date(ts);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
  }

  /* ---------------------------------------------------------------- drafts */

  function draftKey(file){ return "jaran-editor-draft:" + file; }

  function readDraft(file){
    try{
      var raw = localStorage.getItem(draftKey(file));
      return raw ? JSON.parse(raw) : null;
    }catch(e){ return null; }
  }

  function writeDraft(file, html){
    try{
      localStorage.setItem(draftKey(file), JSON.stringify({html:html, at:Date.now()}));
      return true;
    }catch(e){ return false; }
  }

  function clearDraft(file){
    try{ localStorage.removeItem(draftKey(file)); }catch(e){}
  }

  var draftTimer = null, draftWarned = false;
  function scheduleDraftSave(){
    clearTimeout(draftTimer);
    draftTimer = setTimeout(function(){
      if(!state.loaded || !state.file) return;
      if(!writeDraft(state.file, buildExportHtml()) && !draftWarned){
        draftWarned = true;
        toast("This browser would not save a backup copy (storage full, or private browsing). Export often.", "err");
      }
      refreshDraftUi();
    }, 1200);
  }

  function refreshDraftUi(){
    var d = state.file ? readDraft(state.file) : null;
    var box = $("draftInfo");
    if(!box) return;
    if(d){
      box.innerHTML = '<p class="fhint" style="margin:0 0 10px">Backup saved in this browser at ' +
        esc(whenText(d.at)) + '.</p>' +
        '<button class="sbtn wide danger" type="button" id="btnClearDraft">Discard the saved backup</button>';
      $("btnClearDraft").addEventListener("click", function(){
        if(!window.confirm("Discard the saved backup of " + state.file + " on this device?")) return;
        clearDraft(state.file);
        refreshDraftUi();
        toast("Backup discarded");
      });
    } else {
      box.innerHTML = '<p class="fhint" style="margin:0">No backup saved for this page yet. One is kept automatically as you edit.</p>';
    }
  }

  function setSource(kind){
    state.source = kind;
    var badge = $("srcBadge");
    if(!badge) return;
    var map = {
      builtin: ["built-in copy", "The copy that shipped with this editor. If you have already published changes, use “From file…” to edit the current version."],
      live:    ["from the website", "Loaded from the live site — this is the current version."],
      device:  ["from your device", "Loaded from a file you picked — this is whatever that file contains."],
      draft:   ["your saved backup", "Restored from the backup this browser saved while you were last editing."]
    };
    var m = map[kind] || ["", ""];
    badge.textContent = m[0];
    badge.title = m[1];
    badge.hidden = !m[0];
    badge.className = "src-badge" + (kind === "builtin" ? " warn" : "");
  }

  /* --------------------------------------------------------------- history */

  function snapshot(){
    if(!fdoc) return "";
    var sel = fdoc.querySelector("[data-jde-sel]");
    var hov = fdoc.querySelector("[data-jde-hover]");
    if(sel) sel.removeAttribute("data-jde-sel");
    if(hov) hov.removeAttribute("data-jde-hover");
    var html = fdoc.body.innerHTML;
    if(sel) sel.setAttribute("data-jde-sel", "");
    if(hov) hov.setAttribute("data-jde-hover", "");
    return html;
  }

  /* Any new baseline first closes off a typing burst that is still pending,
     so a structural edit can never swallow the text edit before it. */
  function rebase(){ flushBurst(); baseline = snapshot(); }

  function commit(){
    if(baseline === null) return;
    var now = snapshot();
    if(now === baseline) return;
    undoStack.push(baseline);
    if(undoStack.length > 60) undoStack.shift();
    redoStack.length = 0;
    baseline = now;
    state.dirty = true;
    syncHistoryButtons();
    buildOutline();
    scheduleDraftSave();
  }

  function restore(html){
    selected = null;
    inlineEl = null;
    fdoc.body.innerHTML = html;
    baseline = html;
    renderInspector();
    buildOutline();
    syncHistoryButtons();
    scheduleDraftSave();
  }

  function undo(){
    if(!undoStack.length) return;
    redoStack.push(snapshot());
    restore(undoStack.pop());
    state.dirty = true;
    toast("Undone");
  }

  function redo(){
    if(!redoStack.length) return;
    undoStack.push(snapshot());
    restore(redoStack.pop());
    state.dirty = true;
    toast("Redone");
  }

  function syncHistoryButtons(){
    $("btnUndo").disabled = !undoStack.length;
    $("btnRedo").disabled = !redoStack.length;
  }

  /* ------------------------------------------------------------ load/mount */

  function transform(htmlText){
    var doc = new DOMParser().parseFromString(htmlText, "text/html");

    // Park page scripts so they cannot run while we edit.
    Array.prototype.forEach.call(doc.querySelectorAll("script"), function(s){
      s.setAttribute("data-jde-type", s.getAttribute("type") || "");
      s.setAttribute("type", "text/jde-off");
    });

    if(OFFLINE){
      // No server, so /assets/css/site.css cannot load. Use the embedded copy,
      // placed FIRST so that when a server is available the real stylesheet
      // (which comes later in <head>) still wins.
      if(BUNDLE.siteCss){
        var siteStyle = doc.createElement("style");
        siteStyle.setAttribute("data-jde-ui", "");
        siteStyle.textContent = BUNDLE.siteCss;
        doc.head.insertBefore(siteStyle, doc.head.firstChild);
      }
      // Same for the site's own images: swap in an embedded copy for the
      // preview and remember the real path for export.
      Array.prototype.forEach.call(doc.querySelectorAll("img[src]"), function(img){
        var src = img.getAttribute("src");
        if(BUNDLE.assets && BUNDLE.assets[src]){
          img.setAttribute("data-jde-src", src);
          img.setAttribute("src", BUNDLE.assets[src]);
        }
      });
    }

    var style = doc.createElement("style");
    style.setAttribute("data-jde-ui", "");
    style.textContent = EDIT_CSS;
    doc.head.appendChild(style);

    return "<!doctype html>\n" + doc.documentElement.outerHTML;
  }

  function mount(htmlText, fileName, source){
    state.file = fileName;
    $("exportName").textContent = fileName;
    $("pgFile").value = fileName;
    $("btnExport").disabled = false;
    setSource(source);
    pendingMount = true;
    stage.srcdoc = transform(htmlText);
  }

  function onFrameLoad(){
    if(!pendingMount) return;
    pendingMount = false;

    fdoc = stage.contentDocument;
    fwin = stage.contentWindow;
    if(!fdoc){ toast("The page could not be opened for editing.", "err"); return; }

    selected = null;
    inlineEl = null;
    undoStack.length = 0;
    redoStack.length = 0;
    state.loaded = true;
    state.dirty = false;

    attachFrameHandlers();
    rebase();
    syncHistoryButtons();
    buildOutline();
    renderInspector();
    readPageSettings();
    refreshDraftUi();

    $("veil").hidden = true;
    toast("Editing " + state.file);
  }

  /* Offer a saved backup first, then the live site, then the built-in copy. */
  function openFile(file){
    var draft = readDraft(file);
    if(draft && draft.html){
      var useDraft = window.confirm(
        "This browser has a backup of " + file + " from " + whenText(draft.at) + ".\n\n" +
        "OK  —  carry on from that backup\n" +
        "Cancel  —  start again from the original"
      );
      if(useDraft){ mount(draft.html, file, "draft"); return; }
    }
    loadOriginal(file);
  }

  function loadOriginal(file){
    var builtin = pageByFile(file);

    if(OFFLINE){
      if(builtin){ mount(builtin.html, file, "builtin"); }
      else { failLoad(file, "There is no built-in copy of this page."); }
      return;
    }

    $("veil").hidden = false;
    $("veil").textContent = "Loading " + file + "…";
    fetch(file, {cache:"no-store"}).then(function(res){
      if(!res.ok) throw new Error("HTTP " + res.status);
      return res.text();
    }).then(function(text){
      mount(text, file, "live");
    }).catch(function(){
      if(builtin){
        mount(builtin.html, file, "builtin");
        toast("Could not reach the website, so the built-in copy was opened instead.");
      } else {
        failLoad(file, "The file could not be read.");
      }
    });
  }

  function failLoad(file, why){
    $("veil").hidden = false;
    $("veil").textContent = why + " Use “From file…” to pick " + file + " from this device.";
    toast(why, "err");
  }

  /* -------------------------------------------------------- frame handlers */

  function attachFrameHandlers(){
    fdoc.addEventListener("click", function(e){
      if(inlineEl && inlineEl.contains(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      select(e.target);
    }, true);

    fdoc.addEventListener("dblclick", function(e){
      if(inlineEl && inlineEl.contains(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      var el = e.target;
      if(isTextOnly(el)) beginInline(el);
      else select(el);
    }, true);

    fdoc.addEventListener("submit", function(e){ e.preventDefault(); }, true);

    fdoc.addEventListener("mouseover", function(e){
      if(inlineEl) return;
      var prev = fdoc.querySelector("[data-jde-hover]");
      if(prev) prev.removeAttribute("data-jde-hover");
      if(e.target && e.target.nodeType === 1 && !isProtected(e.target)){
        e.target.setAttribute("data-jde-hover", "");
      }
    });

    fdoc.addEventListener("keydown", function(e){
      if(e.key === "Escape" && inlineEl){ endInline(); return; }
      if(inlineEl && e.key === "Enter" && !e.shiftKey && inlineEl.tagName !== "P" && inlineEl.tagName !== "DIV"){
        e.preventDefault();
        endInline();
        return;
      }
      // Undo/redo/export must also work while the caret is inside the frame.
      shortcuts(e);
    });
  }

  function shortcuts(e){
    var mod = e.ctrlKey || e.metaKey;
    if(!mod) return;
    var k = e.key.toLowerCase();
    if(k === "z" && !e.shiftKey){ e.preventDefault(); endInline(); undo(); }
    else if((k === "z" && e.shiftKey) || k === "y"){ e.preventDefault(); endInline(); redo(); }
    else if(k === "s"){ e.preventDefault(); exportPage(); }
  }

  /* ------------------------------------------------------------- selection */

  function select(el){
    if(!el || el.nodeType !== 1) return;
    if(el === fdoc.body || el === fdoc.documentElement){ deselect(); return; }
    endInline();
    var prev = fdoc.querySelector("[data-jde-sel]");
    if(prev) prev.removeAttribute("data-jde-sel");
    selected = el;
    el.setAttribute("data-jde-sel", "");
    renderInspector();
    markOutline();
  }

  function deselect(){
    endInline();
    var prev = fdoc.querySelector("[data-jde-sel]");
    if(prev) prev.removeAttribute("data-jde-sel");
    selected = null;
    renderInspector();
    markOutline();
  }

  /* Order matters: select() ends any inline edit, so it has to run before we
     turn this element into a live text field. */
  function beginInline(el){
    select(el);
    rebase();
    inlineEl = el;
    el.setAttribute("contenteditable", "true");
    el.focus();
    try{
      var r = fdoc.createRange();
      r.selectNodeContents(el);
      var s = fwin.getSelection();
      s.removeAllRanges();
      s.addRange(r);
    }catch(err){ /* placing the caret is a nicety, not a requirement */ }
  }

  function endInline(){
    if(!inlineEl) return;
    var el = inlineEl;
    inlineEl = null;
    el.removeAttribute("contenteditable");
    detachI18n(el);
    commit();
    if(selected === el) renderInspector();
  }

  /* ------------------------------------------------------------------ i18n */

  function detachI18n(el){
    var keys = ["data-i18n", "data-i18n-placeholder", "data-i18n-note"];
    var mem = i18nMemory.get(el) || {};
    var changed = false;
    keys.forEach(function(a){
      if(el.hasAttribute(a)){ mem[a] = el.getAttribute(a); el.removeAttribute(a); changed = true; }
    });
    if(changed) i18nMemory.set(el, mem);
    return changed;
  }

  function restoreI18n(el){
    var mem = i18nMemory.get(el);
    if(!mem) return false;
    Object.keys(mem).forEach(function(a){ el.setAttribute(a, mem[a]); });
    i18nMemory["delete"](el);
    return true;
  }

  /* --------------------------------------------------------------- outline */

  function buildOutline(){
    var wrap = $("outline");
    var r = root();
    if(!r){ wrap.innerHTML = ""; return; }
    var kids = Array.prototype.filter.call(r.children, function(n){ return n.nodeType === 1; });
    if(!kids.length){
      wrap.innerHTML = '<p class="pane-hint">This page has no sections yet. Open <strong>Add block</strong> to start one.</p>';
      return;
    }
    wrap.innerHTML = kids.map(function(el, i){
      return '<button type="button" class="outline-item" data-i="' + i + '">' +
        '<span class="oi-n">' + (i + 1) + '</span>' +
        '<span class="oi-t">' + esc(labelFor(el)) + '</span>' +
      '</button>';
    }).join("");
    Array.prototype.forEach.call(wrap.children, function(btn){
      btn.addEventListener("click", function(){
        var el = kids[+btn.getAttribute("data-i")];
        if(!el) return;
        select(el);
        el.scrollIntoView({block:"start", behavior:"smooth"});
      });
    });
    markOutline();
  }

  function markOutline(){
    var r = root();
    if(!r) return;
    var sec = selected ? sectionOf(selected) : null;
    var kids = Array.prototype.filter.call(r.children, function(n){ return n.nodeType === 1; });
    Array.prototype.forEach.call($("outline").children, function(btn){
      var i = btn.getAttribute && btn.getAttribute("data-i");
      if(i === null || i === undefined) return;
      btn.classList.toggle("on", !!sec && kids[+i] === sec);
    });
  }

  /* ------------------------------------------------------------- inspector */

  /* Offline we swap the site's images for embedded copies, so show the author
     the real path, not a data: URI thousands of characters long. */
  function realSrc(img){
    return img.getAttribute("data-jde-src") || img.getAttribute("src") || "";
  }

  function setImageSrc(img, value){
    img.removeAttribute("data-jde-src");
    img.setAttribute("src", value);
  }

  function renderInspector(){
    var box = $("inspector");

    if(!state.loaded){
      box.innerHTML = '<div class="insp-empty"><span class="big">◲</span>Open a page to begin.<br>Everything you change stays in this browser until you press <strong>Export</strong>.</div>';
      return;
    }
    if(!selected){
      box.innerHTML = '<div class="insp-empty"><span class="big">⊹</span>' +
        'Click anything on the page to select it.<br><br>' +
        '<strong>Double-click</strong> text to type over it.<br>' +
        'Selected items can be moved, duplicated, replaced or deleted from here.</div>';
      return;
    }

    var el = selected;
    var sec = sectionOf(el);
    var isSection = sec === el;
    var parts = [];

    parts.push('<div class="insp-head">' +
      '<span class="insp-tag">' + esc(el.tagName.toLowerCase()) + (isSection ? " · section" : "") + '</span>' +
      '<div class="insp-path">' + esc(describe(el)) + '</div>' +
    '</div>');

    var body = [];

    if(el.id && DYNAMIC_IDS[el.id]){
      body.push('<div class="notice">This area is filled in automatically on the live site (from the template lists in <code>assets/</code>), so it looks empty here. Leave it in place.</div>');
    }

    /* -- text -- */
    if(isTextOnly(el)){
      if(el.hasAttribute("data-i18n")){
        body.push('<div class="notice warn">This text switches between Khmer and English automatically. If you change it here it becomes fixed wording and will no longer switch.</div>');
      }
      body.push('<div class="fgroup">' +
        '<label for="fText">Text</label>' +
        '<textarea class="ftext" id="fText">' + esc(el.textContent) + '</textarea>' +
        '<p class="fhint">Tip: you can also double-click the text on the page and type directly.</p>' +
      '</div>');
      if(i18nMemory.get(el)){
        body.push('<button class="sbtn wide" id="fRestoreI18n" type="button" style="margin-top:-8px;margin-bottom:18px">↺ Restore automatic Khmer / English text</button>');
      }
    }

    /* -- image -- */
    if(el.tagName === "IMG"){
      body.push('<div class="fgroup">' +
        '<span class="flabel">Image</span>' +
        '<img class="thumb" id="fThumb" src="' + esc(el.getAttribute("src") || "") + '" alt="">' +
        '<div class="btn-grid">' +
          '<button class="sbtn" id="fPick" type="button">Replace…</button>' +
          '<button class="sbtn" id="fSaveImg" type="button">Save a copy</button>' +
        '</div>' +
      '</div>');
      body.push('<div class="fgroup">' +
        '<label for="fSrc">Image path or URL</label>' +
        '<input class="finput" id="fSrc" type="text" spellcheck="false" value="' + esc(realSrc(el)) + '">' +
        '<p class="fhint">Best practice: put the file in <code>assets/img/</code> and use a path such as <code>/assets/img/team.jpg</code>. “Replace…” embeds the picture directly in the page instead, which is quicker but makes the file bigger.</p>' +
      '</div>');
      body.push('<div class="fgroup">' +
        '<label for="fAlt">Alt text (for screen readers)</label>' +
        '<input class="finput" id="fAlt" type="text" value="' + esc(el.getAttribute("alt") || "") + '">' +
      '</div>');
    }

    /* -- video -- */
    if(el.tagName === "IFRAME"){
      body.push('<div class="fgroup">' +
        '<label for="fVideo">YouTube link or video ID</label>' +
        '<input class="finput" id="fVideo" type="text" spellcheck="false" placeholder="https://youtu.be/xxxxxxxxxxx" value="' + esc(el.getAttribute("src") || "") + '">' +
        '<p class="fhint">Paste any YouTube link — watch, share or shorts. Upload previews as “Unlisted” so they stay out of search.</p>' +
      '</div>');
    }

    /* -- link -- */
    if(el.tagName === "A"){
      body.push('<div class="fgroup">' +
        '<label for="fHref">Link target</label>' +
        '<input class="finput" id="fHref" type="text" spellcheck="false" list="jdeLinks" value="' + esc(el.getAttribute("href") || "") + '">' +
        '<label class="fcheck"><input type="checkbox" id="fBlank"' + (el.getAttribute("target") === "_blank" ? " checked" : "") + '> Open in a new tab</label>' +
      '</div>');
    }

    /* -- section anchor -- */
    if(isSection){
      body.push('<div class="fgroup">' +
        '<label for="fAnchor">Anchor ID (optional)</label>' +
        '<input class="finput" id="fAnchor" type="text" spellcheck="false" value="' + esc(el.id || "") + '" placeholder="our-team">' +
        '<p class="fhint">Lets you link straight to this section, e.g. <code>/about#our-team</code>.</p>' +
      '</div>');
    }

    /* -- structure -- */
    var canDelete = !isProtected(el) && !!el.parentElement;

    body.push('<span class="flabel">This ' + (isSection ? "section" : "element") + '</span>' +
      '<div class="btn-grid" style="margin-bottom:8px">' +
        '<button class="sbtn" id="fUp" type="button"' + (el.previousElementSibling ? "" : " disabled") + '>↑ Move up</button>' +
        '<button class="sbtn" id="fDown" type="button"' + (el.nextElementSibling ? "" : " disabled") + '>↓ Move down</button>' +
        '<button class="sbtn" id="fDup" type="button"' + (canDelete ? "" : " disabled") + '>⧉ Duplicate</button>' +
        '<button class="sbtn danger" id="fDel" type="button"' + (canDelete ? "" : " disabled") + '>🗑 Delete</button>' +
      '</div>');

    if(isSection){
      body.push('<button class="sbtn wide" id="fReplace" type="button" style="margin-bottom:8px">⇄ Replace this section with a block…</button>');
    }
    if(el.parentElement && !isProtected(el.parentElement)){
      body.push('<button class="sbtn wide" id="fParent" type="button">↖ Select the surrounding ' + esc(el.parentElement.tagName.toLowerCase()) + '</button>');
    }

    box.innerHTML = parts.join("") + '<div class="jde-pane">' + body.join("") + '</div>';
    wireInspector(el, isSection);
  }

  function wireInspector(el, isSection){
    var t = $("fText");
    if(t){
      t.addEventListener("input", function(){
        rebaseOnce();
        el.textContent = t.value;
        detachI18n(el);
        scheduleCommit();
      });
    }

    var restore = $("fRestoreI18n");
    if(restore){
      restore.addEventListener("click", function(){
        rebase();
        if(restoreI18n(el)){
          commit();
          renderInspector();
          toast("This text will switch language again on the live site.");
        }
      });
    }

    var src = $("fSrc");
    if(src){
      src.addEventListener("input", function(){
        rebaseOnce();
        setImageSrc(el, src.value);
        var th = $("fThumb"); if(th) th.src = src.value;
        scheduleCommit();
      });
    }

    var alt = $("fAlt");
    if(alt){
      alt.addEventListener("input", function(){
        rebaseOnce();
        el.setAttribute("alt", alt.value);
        scheduleCommit();
      });
    }

    var pick = $("fPick");
    if(pick) pick.addEventListener("click", function(){ pickImageInto(el); });

    var saveImg = $("fSaveImg");
    if(saveImg) saveImg.addEventListener("click", function(){ saveImageCopy(el); });

    var vid = $("fVideo");
    if(vid){
      vid.addEventListener("change", function(){
        rebase();
        el.setAttribute("src", youtubeEmbedUrl(vid.value));
        vid.value = el.getAttribute("src");
        commit();
      });
    }

    var href = $("fHref");
    if(href){
      href.addEventListener("input", function(){
        rebaseOnce();
        el.setAttribute("href", href.value);
        scheduleCommit();
      });
    }

    var blank = $("fBlank");
    if(blank){
      blank.addEventListener("change", function(){
        rebase();
        if(blank.checked){ el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
        else { el.removeAttribute("target"); el.removeAttribute("rel"); }
        commit();
      });
    }

    var anchor = $("fAnchor");
    if(anchor){
      anchor.addEventListener("input", function(){
        rebaseOnce();
        var v = anchor.value.trim().replace(/\s+/g, "-");
        if(v) el.id = v; else el.removeAttribute("id");
        scheduleCommit();
      });
    }

    bind("fUp", function(){
      var prev = el.previousElementSibling;
      if(!prev) return;
      rebase();
      el.parentElement.insertBefore(el, prev);
      commit();
      el.scrollIntoView({block:"center", behavior:"smooth"});
      renderInspector();
    });

    bind("fDown", function(){
      var next = el.nextElementSibling;
      if(!next) return;
      rebase();
      el.parentElement.insertBefore(next, el);
      commit();
      el.scrollIntoView({block:"center", behavior:"smooth"});
      renderInspector();
    });

    bind("fDup", function(){
      rebase();
      var copy = el.cloneNode(true);
      copy.removeAttribute("data-jde-sel");
      copy.removeAttribute("data-jde-hover");
      if(copy.id) copy.removeAttribute("id");
      el.parentElement.insertBefore(copy, el.nextSibling);
      commit();
      select(copy);
      copy.scrollIntoView({block:"center", behavior:"smooth"});
      toast("Duplicated");
    });

    bind("fDel", function(){
      var what = isSection ? ("the section “" + labelFor(el) + "”") : ("this <" + el.tagName.toLowerCase() + ">");
      if(!window.confirm("Delete " + what + "?\n\nYou can undo this with Ctrl+Z.")) return;
      rebase();
      el.remove();
      selected = null;
      commit();
      renderInspector();
      buildOutline();
      toast("Deleted");
    });

    bind("fReplace", function(){
      state.replaceMode = true;
      showTab("blocks");
      renderBlockMode();
      toast("Pick a block to replace “" + labelFor(el) + "”.");
    });

    bind("fParent", function(){ select(el.parentElement); });
  }

  function bind(id, fn){
    var b = $(id);
    if(b) b.addEventListener("click", fn);
  }

  /* Text/attribute fields fire on every keystroke; take one baseline for the
     burst and collapse it into a single undo step when typing stops. */
  var rebasedForBurst = false, commitTimer = null;
  function rebaseOnce(){
    if(!rebasedForBurst){ rebase(); rebasedForBurst = true; }
  }
  function scheduleCommit(){
    clearTimeout(commitTimer);
    commitTimer = setTimeout(flushBurst, 600);
  }
  function flushBurst(){
    if(!rebasedForBurst) return;
    clearTimeout(commitTimer);
    rebasedForBurst = false;
    commit();
  }

  /* ---------------------------------------------------------------- images */

  function pickImageInto(img){
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", function(){
      var file = input.files && input.files[0];
      if(!file) return;
      if(file.size > 1500000){
        if(!window.confirm("That image is " + Math.round(file.size / 1024) + " KB. Embedding it will make the page slow to load.\n\nFor anything this big, put the file in assets/img/ and type its path instead.\n\nEmbed it anyway?")) return;
      }
      var reader = new FileReader();
      reader.onload = function(){
        rebase();
        setImageSrc(img, String(reader.result));
        img.setAttribute("data-jde-origname", file.name);
        commit();
        renderInspector();
        toast("Image replaced — remember to Export when you're done.");
      };
      reader.onerror = function(){ toast("That image could not be read.", "err"); };
      reader.readAsDataURL(file);
    });
    input.click();
  }

  function saveImageCopy(img){
    var src = img.getAttribute("src") || "";
    if(!src){ toast("This image has no source yet.", "err"); return; }
    var name = img.getAttribute("data-jde-origname") || realSrc(img).split("/").pop().split("?")[0] || "image";
    if(src.indexOf("data:") !== 0){
      window.open(src, "_blank", "noopener");
      return;
    }
    download(src, name);
    toast("Saved. Put it in assets/img/ and set the path above to keep the page light.");
  }

  function youtubeEmbedUrl(input){
    var v = String(input || "").trim();
    var m = v.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/|live\/))([A-Za-z0-9_-]{6,})/);
    var id = m ? m[1] : (/^[A-Za-z0-9_-]{6,}$/.test(v) ? v : null);
    return id ? "https://www.youtube-nocookie.com/embed/" + id + "?rel=0" : v;
  }

  /* ---------------------------------------------------------------- blocks */

  function renderBlocks(){
    [["blocksContent", CONTENT_BLOCKS], ["blocksMedia", MEDIA_BLOCKS], ["blocksCta", CTA_BLOCKS]].forEach(function(pair){
      var host = $(pair[0]);
      host.innerHTML = pair[1].map(function(b){
        return '<button type="button" class="block-btn" data-block="' + esc(b.id) + '">' +
          '<b>' + esc(b.name) + '</b><span>' + esc(b.desc) + '</span></button>';
      }).join("");
      Array.prototype.forEach.call(host.children, function(btn){
        btn.addEventListener("click", function(){ insertBlock(btn.getAttribute("data-block")); });
      });
    });
  }

  function findBlock(id){
    var all = CONTENT_BLOCKS.concat(MEDIA_BLOCKS, CTA_BLOCKS);
    for(var i = 0; i < all.length; i++){ if(all[i].id === id) return all[i]; }
    return null;
  }

  function renderBlockMode(){
    var host = $("blockMode");
    if(state.replaceMode && selected){
      host.innerHTML = '<div class="block-mode">Replacing “' + esc(labelFor(sectionOf(selected) || selected)) + '”' +
        '<button type="button" id="cancelReplace">Cancel</button></div>';
      $("cancelReplace").addEventListener("click", function(){
        state.replaceMode = false;
        renderBlockMode();
      });
    } else {
      state.replaceMode = false;
      host.innerHTML = '<p class="pane-hint">Blocks are added after the section you have selected, or at the end of the page if nothing is selected.</p>';
    }
  }

  function insertBlock(id){
    if(!state.loaded){ toast("Open a page first.", "err"); return; }
    var b = findBlock(id);
    if(!b) return;

    var r = root();
    var tmp = fdoc.createElement("div");
    tmp.innerHTML = b.html;
    var node = tmp.firstElementChild;
    if(!node) return;

    // Offline, a freshly inserted block's /assets/img/... would not render.
    if(OFFLINE && BUNDLE.assets){
      Array.prototype.forEach.call(node.querySelectorAll("img[src]"), function(img){
        var s = img.getAttribute("src");
        if(BUNDLE.assets[s]){
          img.setAttribute("data-jde-src", s);
          img.setAttribute("src", BUNDLE.assets[s]);
        }
      });
    }

    rebase();

    if(state.replaceMode && selected){
      var target = sectionOf(selected) || selected;
      target.parentElement.replaceChild(node, target);
      state.replaceMode = false;
      renderBlockMode();
      toast("Section replaced");
    } else {
      var after = selected ? sectionOf(selected) : null;
      if(after && after.parentElement === r) r.insertBefore(node, after.nextSibling);
      else r.appendChild(node);
      toast("“" + b.name + "” added");
    }

    commit();
    select(node);
    buildOutline();
    node.scrollIntoView({block:"center", behavior:"smooth"});
  }

  /* -------------------------------------------------------- page settings */

  function readPageSettings(){
    var title = fdoc.querySelector("title");
    var desc = fdoc.querySelector('meta[name="description"]');
    $("pgTitle").value = title ? title.textContent : "";
    $("pgDesc").value = desc ? (desc.getAttribute("content") || "") : "";
  }

  function wirePageSettings(){
    $("pgTitle").addEventListener("input", function(){
      if(!state.loaded) return;
      var title = fdoc.querySelector("title");
      if(!title){ title = fdoc.createElement("title"); fdoc.head.appendChild(title); }
      title.textContent = $("pgTitle").value;
      state.dirty = true;
      scheduleDraftSave();
    });
    $("pgDesc").addEventListener("input", function(){
      if(!state.loaded) return;
      var desc = fdoc.querySelector('meta[name="description"]');
      if(!desc){
        desc = fdoc.createElement("meta");
        desc.setAttribute("name", "description");
        fdoc.head.appendChild(desc);
      }
      desc.setAttribute("content", $("pgDesc").value);
      state.dirty = true;
      scheduleDraftSave();
    });
    $("pgFile").addEventListener("input", function(){
      var v = $("pgFile").value.trim();
      if(!v) return;
      if(!/\.html?$/i.test(v)) v += ".html";
      state.file = v;
      $("exportName").textContent = v;
    });
  }

  /* ---------------------------------------------------------------- export */

  function buildExportHtml(){
    var clone = fdoc.documentElement.cloneNode(true);

    Array.prototype.forEach.call(clone.querySelectorAll("[data-jde-ui]"), function(n){ n.remove(); });

    Array.prototype.forEach.call(clone.querySelectorAll('script[type="text/jde-off"]'), function(s){
      var original = s.getAttribute("data-jde-type");
      if(original) s.setAttribute("type", original); else s.removeAttribute("type");
    });

    // Put the site's own image paths back in place of the embedded previews.
    Array.prototype.forEach.call(clone.querySelectorAll("[data-jde-src]"), function(n){
      n.setAttribute("src", n.getAttribute("data-jde-src"));
    });

    var all = [clone].concat(Array.prototype.slice.call(clone.querySelectorAll("*")));
    all.forEach(function(node){
      Array.prototype.slice.call(node.attributes || []).forEach(function(attr){
        if(attr.name.indexOf("data-jde") === 0) node.removeAttribute(attr.name);
      });
      if(node.hasAttribute && node.hasAttribute("contenteditable")) node.removeAttribute("contenteditable");
    });
    clone.classList.remove("jde-noguides");
    if(!clone.getAttribute("class")) clone.removeAttribute("class");

    return "<!doctype html>\n" + clone.outerHTML + "\n";
  }

  function download(href, name){
    var a = document.createElement("a");
    a.href = href;
    a.download = name;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function exportPage(){
    if(!state.loaded){ toast("Open a page first.", "err"); return; }
    endInline();
    flushBurst();

    var out = buildExportHtml();
    var name = state.file || "page.html";

    var url = URL.createObjectURL(new Blob([out], {type:"text/html;charset=utf-8"}));
    download(url, name);
    setTimeout(function(){ URL.revokeObjectURL(url); }, 2000);

    state.dirty = false;
    toast("Exported " + name + " — save it into the site folder, replacing the old file, then publish.");
  }

  /* -------------------------------------------------------------- shell UI */

  function showTab(which){
    var map = {outline:["tabOutline","paneOutline"], blocks:["tabBlocks","paneBlocks"], page:["tabPage","panePage"]};
    Object.keys(map).forEach(function(k){
      var on = k === which;
      $(map[k][0]).classList.toggle("on", on);
      $(map[k][0]).setAttribute("aria-selected", on ? "true" : "false");
      $(map[k][1]).hidden = !on;
    });
  }

  function readLocalFile(file){
    if(!file) return;
    var reader = new FileReader();
    reader.onload = function(){ mount(String(reader.result), file.name, "device"); };
    reader.onerror = function(){ toast("That file could not be read.", "err"); };
    reader.readAsText(file);
  }

  function init(){
    stage = $("stage");

    var sel = $("pageSelect");
    sel.innerHTML = PAGES.map(function(p){
      return '<option value="' + esc(p.file) + '">' + esc(p.label) + '</option>';
    }).join("");

    var dl = document.createElement("datalist");
    dl.id = "jdeLinks";
    dl.innerHTML = LINK_SUGGESTIONS.map(function(h){ return '<option value="' + esc(h) + '"></option>'; }).join("");
    document.body.appendChild(dl);

    renderBlocks();
    renderBlockMode();
    renderInspector();
    wirePageSettings();
    refreshDraftUi();

    stage.addEventListener("load", onFrameLoad);

    $("btnLoad").addEventListener("click", function(){
      if(state.dirty && !window.confirm("You have changes that have not been exported. Open a different page and lose them?")) return;
      openFile(sel.value);
    });

    $("btnUpload").addEventListener("click", function(){ $("fileInput").click(); });

    $("fileInput").addEventListener("change", function(){
      readLocalFile(this.files && this.files[0]);
      this.value = "";
    });

    /* drag an .html file onto the canvas */
    var canvas = document.querySelector(".jde-canvas");
    ["dragenter", "dragover"].forEach(function(ev){
      canvas.addEventListener(ev, function(e){ e.preventDefault(); canvas.classList.add("dropping"); });
    });
    ["dragleave", "drop"].forEach(function(ev){
      canvas.addEventListener(ev, function(e){ e.preventDefault(); canvas.classList.remove("dropping"); });
    });
    canvas.addEventListener("drop", function(e){
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if(f) readLocalFile(f);
    });

    $("btnUndo").addEventListener("click", undo);
    $("btnRedo").addEventListener("click", redo);
    $("btnExport").addEventListener("click", exportPage);

    $("btnGuides").addEventListener("click", function(){
      if(!state.loaded) return;
      var off = fdoc.documentElement.classList.toggle("jde-noguides");
      this.textContent = off ? "Show guides" : "Hide guides";
    });

    $("tabOutline").addEventListener("click", function(){ showTab("outline"); });
    $("tabBlocks").addEventListener("click", function(){ showTab("blocks"); renderBlockMode(); });
    $("tabPage").addEventListener("click", function(){ showTab("page"); refreshDraftUi(); });

    Array.prototype.forEach.call($("viewportSeg").children, function(btn){
      btn.addEventListener("click", function(){
        Array.prototype.forEach.call($("viewportSeg").children, function(b){ b.classList.remove("on"); });
        btn.classList.add("on");
        var w = +btn.getAttribute("data-w");
        $("frameWrap").style.maxWidth = w ? w + "px" : "";
      });
    });

    document.addEventListener("keydown", shortcuts);

    window.addEventListener("beforeunload", function(e){
      if(!state.dirty) return;
      e.preventDefault();
      e.returnValue = "";
    });

    if(BUNDLE.builtAt){
      var stamp = $("buildStamp");
      if(stamp) stamp.textContent = "Built-in page copies: " + BUNDLE.builtAt;
    }

    // Land on a working page rather than an empty canvas.
    if(PAGES.length) openFile(sel.value);
    else failLoad("a page", "This editor was built without any page copies.");

    if(OFFLINE){
      setTimeout(function(){
        toast("Working offline. The preview uses system fonts instead of the website's, but exported pages are unaffected.");
      }, 1400);
    }
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
