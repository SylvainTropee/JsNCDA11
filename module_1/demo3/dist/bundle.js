(() => {
    var e = {
        56: (e, n, t) => {
            "use strict";
            e.exports = function (e) {
                var n = t.nc;
                n && e.setAttribute("nonce", n)
            }
        }, 72: e => {
            "use strict";
            var n = [];

            function t(e) {
                for (var t = -1, o = 0; o < n.length; o++) if (n[o].identifier === e) {
                    t = o;
                    break
                }
                return t
            }

            function o(e, o) {
                for (var r = {}, a = [], s = 0; s < e.length; s++) {
                    var l = e[s], c = o.base ? l[0] + o.base : l[0], d = r[c] || 0, u = "".concat(c, " ").concat(d);
                    r[c] = d + 1;
                    var p = t(u), f = {css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5]};
                    if (-1 !== p) n[p].references++, n[p].updater(f); else {
                        var m = i(f, o);
                        o.byIndex = s, n.splice(s, 0, {identifier: u, updater: m, references: 1})
                    }
                    a.push(u)
                }
                return a
            }

            function i(e, n) {
                var t = n.domAPI(n);
                return t.update(e), function (n) {
                    if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
                        t.update(e = n)
                    } else t.remove()
                }
            }

            e.exports = function (e, i) {
                var r = o(e = e || [], i = i || {});
                return function (e) {
                    e = e || [];
                    for (var a = 0; a < r.length; a++) {
                        var s = t(r[a]);
                        n[s].references--
                    }
                    for (var l = o(e, i), c = 0; c < r.length; c++) {
                        var d = t(r[c]);
                        0 === n[d].references && (n[d].updater(), n.splice(d, 1))
                    }
                    r = l
                }
            }
        }, 113: e => {
            "use strict";
            e.exports = function (e, n) {
                if (n.styleSheet) n.styleSheet.cssText = e; else {
                    for (; n.firstChild;) n.removeChild(n.firstChild);
                    n.appendChild(document.createTextNode(e))
                }
            }
        }, 177: () => {
            const e = document.getElementById("selectSport");
            ["Pétanque", "Palet vendéen", "Fléchettes", "Molky"].forEach((function (n) {
                const t = document.createElement("option");
                t.value = n.toLowerCase(), t.innerText = n, e.append(t)
            })), e.addEventListener("change", (function () {
                console.log(this);
                const e = document.createElement("p");
                e.innerText = this.value, e.style.textTransform = "capitalize", document.body.append(e)
            }))
        }, 275: (e, n, t) => {
            "use strict";
            t.d(n, {A: () => s});
            var o = t(601), i = t.n(o), r = t(314), a = t.n(r)()(i());
            a.push([e.id, '/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */\n@layer properties;\n@layer theme, base, components, utilities;\n@layer theme {\n  :root, :host {\n    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\n      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n      "Courier New", monospace;\n    --color-red-400: oklch(70.4% 0.191 22.216);\n    --spacing: 0.25rem;\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n@layer base {\n  *, ::after, ::before, ::backdrop, ::file-selector-button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n  }\n  html, :host {\n    line-height: 1.5;\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b, strong {\n    font-weight: bolder;\n  }\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub, sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub {\n    bottom: -0.25em;\n  }\n  sup {\n    top: -0.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol, ul, menu {\n    list-style: none;\n  }\n  img, svg, video, canvas, audio, iframe, embed, object {\n    display: block;\n    vertical-align: middle;\n  }\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n  button, input, select, optgroup, textarea, ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    border-radius: 0;\n    background-color: transparent;\n    opacity: 1;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentcolor;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden="until-found"])) {\n    display: none !important;\n  }\n}\n@layer utilities {\n  .capitalize {\n    text-transform: capitalize;\n  }\n}\n.sport-select {\n  margin: calc(var(--spacing) * 5);\n  display: flex;\n  justify-content: center;\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--color-red-400);\n  padding: calc(var(--spacing) * 5);\n}\n@property --tw-border-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *, ::before, ::after, ::backdrop {\n      --tw-border-style: solid;\n    }\n  }\n}', ""]);
            const s = a
        }, 314: e => {
            "use strict";
            e.exports = function (e) {
                var n = [];
                return n.toString = function () {
                    return this.map((function (n) {
                        var t = "", o = void 0 !== n[5];
                        return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), o && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), o && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
                    })).join("")
                }, n.i = function (e, t, o, i, r) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (o) for (var s = 0; s < this.length; s++) {
                        var l = this[s][0];
                        null != l && (a[l] = !0)
                    }
                    for (var c = 0; c < e.length; c++) {
                        var d = [].concat(e[c]);
                        o && a[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = r), t && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = t) : d[2] = t), i && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = i) : d[4] = "".concat(i)), n.push(d))
                    }
                }, n
            }
        }, 540: e => {
            "use strict";
            e.exports = function (e) {
                var n = document.createElement("style");
                return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
            }
        }, 601: e => {
            "use strict";
            e.exports = function (e) {
                return e[1]
            }
        }, 659: e => {
            "use strict";
            var n = {};
            e.exports = function (e, t) {
                var o = function (e) {
                    if (void 0 === n[e]) {
                        var t = document.querySelector(e);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                            t = t.contentDocument.head
                        } catch (e) {
                            t = null
                        }
                        n[e] = t
                    }
                    return n[e]
                }(e);
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(t)
            }
        }, 825: e => {
            "use strict";
            e.exports = function (e) {
                if ("undefined" == typeof document) return {
                    update: function () {
                    }, remove: function () {
                    }
                };
                var n = e.insertStyleElement(e);
                return {
                    update: function (t) {
                        !function (e, n, t) {
                            var o = "";
                            t.supports && (o += "@supports (".concat(t.supports, ") {")), t.media && (o += "@media ".concat(t.media, " {"));
                            var i = void 0 !== t.layer;
                            i && (o += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), o += t.css, i && (o += "}"), t.media && (o += "}"), t.supports && (o += "}");
                            var r = t.sourceMap;
                            r && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), n.styleTagTransform(o, e, n.options)
                        }(n, e, t)
                    }, remove: function () {
                        !function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    }
                }
            }
        }
    }, n = {};

    function t(o) {
        var i = n[o];
        if (void 0 !== i) return i.exports;
        var r = n[o] = {id: o, exports: {}};
        return e[o](r, r.exports, t), r.exports
    }

    t.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, {a: n}), n
    }, t.d = (e, n) => {
        for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, {enumerable: !0, get: n[o]})
    }, t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.nc = void 0, (() => {
        "use strict";
        t(177);
        var e = t(72), n = t.n(e), o = t(825), i = t.n(o), r = t(659), a = t.n(r), s = t(56), l = t.n(s), c = t(540),
            d = t.n(c), u = t(113), p = t.n(u), f = t(275), m = {};
        m.styleTagTransform = p(), m.setAttributes = l(), m.insert = a().bind(null, "head"), m.domAPI = i(), m.insertStyleElement = d(), n()(f.A, m), f.A && f.A.locals && f.A.locals
    })()
})();