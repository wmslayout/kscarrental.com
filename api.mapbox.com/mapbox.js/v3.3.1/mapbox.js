(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        function corslite(n, t, o) {
            function i(n) {
                return n >= 200 && n < 300 || 304 === n
            }

            function e() {
                void 0 === r.status || i(r.status) ? t.call(r, null, r) : t.call(r, r, null)
            }
            var l = !1;
            if (void 0 === window.XMLHttpRequest) return t(Error("Browser not supported"));
            if (void 0 === o) {
                var u = n.match(/^\s*https?:\/\/[^\/]*/);
                o = u && u[0] !== location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
            }
            var r = new window.XMLHttpRequest;
            if (o && !("withCredentials" in r)) {
                r = new window.XDomainRequest;
                var a = t;
                t = function() {
                    if (l) a.apply(this, arguments);
                    else {
                        var n = this,
                            t = arguments;
                        setTimeout(function() {
                            a.apply(n, t)
                        }, 0)
                    }
                }
            }
            return "onload" in r ? r.onload = e : r.onreadystatechange = function() {
                4 === r.readyState && e()
            }, r.onerror = function(n) {
                t.call(this, n || !0, null), t = function() {}
            }, r.onprogress = function() {}, r.ontimeout = function(n) {
                t.call(this, n, null), t = function() {}
            }, r.onabort = function(n) {
                t.call(this, n, null), t = function() {}
            }, r.open("GET", n, !0), r.send(null), l = !0, r
        }
        "undefined" != typeof module && (module.exports = corslite);
    }, {}],
    2: [function(require, module, exports) {
        function cleanUrl(t) {
            "use strict";
            return /^https?/.test(t.getScheme()) ? t.toString() : /^mailto?/.test(t.getScheme()) ? t.toString() : "data" == t.getScheme() && /^image/.test(t.getPath()) ? t.toString() : void 0
        }

        function cleanId(t) {
            return t
        }
        var html_sanitize = require("./sanitizer-bundle.js");
        module.exports = function(t) {
            return t ? html_sanitize(t, cleanUrl, cleanId) : ""
        };
    }, {
        "./sanitizer-bundle.js": 3
    }],
    3: [function(require, module, exports) {
        var URI = function() {
                function e(e) {
                    var t = ("" + e).match(p);
                    return t ? new s(c(t[1]), c(t[2]), c(t[3]), c(t[4]), c(t[5]), c(t[6]), c(t[7])) : null
                }

                function t(e, t, o, i, l, c, m) {
                    var u = new s(n(e, d), n(t, d), a(o), i > 0 ? i.toString() : null, n(l, f), null, a(m));
                    return c && ("string" == typeof c ? u.setRawQuery(c.replace(/[^?&=0-9A-Za-z_\-~.%]/g, r)) : u.setAllParameters(c)), u
                }

                function a(e) {
                    return "string" == typeof e ? encodeURIComponent(e) : null
                }

                function n(e, t) {
                    return "string" == typeof e ? encodeURI(e).replace(t, r) : null
                }

                function r(e) {
                    var t = e.charCodeAt(0);
                    return "%" + "0123456789ABCDEF".charAt(t >> 4 & 15) + "0123456789ABCDEF".charAt(15 & t)
                }

                function o(e) {
                    return e.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
                }

                function i(e) {
                    if (null === e) return null;
                    for (var t, a = o(e), n = u;
                        (t = a.replace(n, "$1")) != a; a = t);
                    return a
                }

                function l(e, t) {
                    var a = e.clone(),
                        n = t.hasScheme();
                    n ? a.setRawScheme(t.getRawScheme()) : n = t.hasCredentials(), n ? a.setRawCredentials(t.getRawCredentials()) : n = t.hasDomain(), n ? a.setRawDomain(t.getRawDomain()) : n = t.hasPort();
                    var r = t.getRawPath(),
                        o = i(r);
                    if (n) a.setPort(t.getPort()), o = o && o.replace(h, "");
                    else if (n = !!r) {
                        if (47 !== o.charCodeAt(0)) {
                            var l = i(a.getRawPath() || "").replace(h, ""),
                                s = l.lastIndexOf("/") + 1;
                            o = i((s ? l.substring(0, s) : "") + i(r)).replace(h, "")
                        }
                    } else(o = o && o.replace(h, "")) !== r && a.setRawPath(o);
                    return n ? a.setRawPath(o) : n = t.hasQuery(), n ? a.setRawQuery(t.getRawQuery()) : n = t.hasFragment(), n && a.setRawFragment(t.getRawFragment()), a
                }

                function s(e, t, a, n, r, o, i) {
                    this.scheme_ = e, this.credentials_ = t, this.domain_ = a, this.port_ = n, this.path_ = r, this.query_ = o, this.fragment_ = i, this.paramCache_ = null
                }

                function c(e) {
                    return "string" == typeof e && e.length > 0 ? e : null
                }
                var m = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
                    u = new RegExp(m),
                    h = /^(?:\.\.\/)*(?:\.\.$)?/;
                s.prototype.toString = function() {
                    var e = [];
                    return null !== this.scheme_ && e.push(this.scheme_, ":"), null !== this.domain_ && (e.push("//"), null !== this.credentials_ && e.push(this.credentials_, "@"), e.push(this.domain_), null !== this.port_ && e.push(":", this.port_.toString())), null !== this.path_ && e.push(this.path_), null !== this.query_ && e.push("?", this.query_), null !== this.fragment_ && e.push("#", this.fragment_), e.join("")
                }, s.prototype.clone = function() {
                    return new s(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_)
                }, s.prototype.getScheme = function() {
                    return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                }, s.prototype.getRawScheme = function() {
                    return this.scheme_
                }, s.prototype.setScheme = function(e) {
                    return this.scheme_ = n(e, d), this
                }, s.prototype.setRawScheme = function(e) {
                    return this.scheme_ = e || null, this
                }, s.prototype.hasScheme = function() {
                    return null !== this.scheme_
                }, s.prototype.getCredentials = function() {
                    return this.credentials_ && decodeURIComponent(this.credentials_)
                }, s.prototype.getRawCredentials = function() {
                    return this.credentials_
                }, s.prototype.setCredentials = function(e) {
                    return this.credentials_ = n(e, d), this
                }, s.prototype.setRawCredentials = function(e) {
                    return this.credentials_ = e || null, this
                }, s.prototype.hasCredentials = function() {
                    return null !== this.credentials_
                }, s.prototype.getDomain = function() {
                    return this.domain_ && decodeURIComponent(this.domain_)
                }, s.prototype.getRawDomain = function() {
                    return this.domain_
                }, s.prototype.setDomain = function(e) {
                    return this.setRawDomain(e && encodeURIComponent(e))
                }, s.prototype.setRawDomain = function(e) {
                    return this.domain_ = e || null, this.setRawPath(this.path_)
                }, s.prototype.hasDomain = function() {
                    return null !== this.domain_
                }, s.prototype.getPort = function() {
                    return this.port_ && decodeURIComponent(this.port_)
                }, s.prototype.setPort = function(e) {
                    if (e) {
                        if ((e = Number(e)) !== (65535 & e)) throw new Error("Bad port number " + e);
                        this.port_ = "" + e
                    } else this.port_ = null;
                    return this
                }, s.prototype.hasPort = function() {
                    return null !== this.port_
                }, s.prototype.getPath = function() {
                    return this.path_ && decodeURIComponent(this.path_)
                }, s.prototype.getRawPath = function() {
                    return this.path_
                }, s.prototype.setPath = function(e) {
                    return this.setRawPath(n(e, f))
                }, s.prototype.setRawPath = function(e) {
                    return e ? (e = String(e), this.path_ = !this.domain_ || /^\//.test(e) ? e : "/" + e) : this.path_ = null, this
                }, s.prototype.hasPath = function() {
                    return null !== this.path_
                }, s.prototype.getQuery = function() {
                    return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
                }, s.prototype.getRawQuery = function() {
                    return this.query_
                }, s.prototype.setQuery = function(e) {
                    return this.paramCache_ = null, this.query_ = a(e), this
                }, s.prototype.setRawQuery = function(e) {
                    return this.paramCache_ = null, this.query_ = e || null, this
                }, s.prototype.hasQuery = function() {
                    return null !== this.query_
                }, s.prototype.setAllParameters = function(e) {
                    if ("object" == typeof e && !(e instanceof Array) && (e instanceof Object || "[object Array]" !== Object.prototype.toString.call(e))) {
                        var t = [],
                            a = -1;
                        for (var n in e) {
                            var r = e[n];
                            "string" == typeof r && (t[++a] = n, t[++a] = r)
                        }
                        e = t
                    }
                    this.paramCache_ = null;
                    for (var o = [], i = "", l = 0; l < e.length;) {
                        var n = e[l++],
                            r = e[l++];
                        o.push(i, encodeURIComponent(n.toString())), i = "&", r && o.push("=", encodeURIComponent(r.toString()))
                    }
                    return this.query_ = o.join(""), this
                }, s.prototype.checkParameterCache_ = function() {
                    if (!this.paramCache_) {
                        var e = this.query_;
                        if (e) {
                            for (var t = e.split(/[&\?]/), a = [], n = -1, r = 0; r < t.length; ++r) {
                                var o = t[r].match(/^([^=]*)(?:=(.*))?$/);
                                a[++n] = decodeURIComponent(o[1]).replace(/\+/g, " "), a[++n] = decodeURIComponent(o[2] || "").replace(/\+/g, " ")
                            }
                            this.paramCache_ = a
                        } else this.paramCache_ = []
                    }
                }, s.prototype.setParameterValues = function(e, t) {
                    "string" == typeof t && (t = [t]), this.checkParameterCache_();
                    for (var a = 0, n = this.paramCache_, r = [], o = 0; o < n.length; o += 2) e === n[o] ? a < t.length && r.push(e, t[a++]) : r.push(n[o], n[o + 1]);
                    for (; a < t.length;) r.push(e, t[a++]);
                    return this.setAllParameters(r), this
                }, s.prototype.removeParameter = function(e) {
                    return this.setParameterValues(e, [])
                }, s.prototype.getAllParameters = function() {
                    return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length)
                }, s.prototype.getParameterValues = function(e) {
                    this.checkParameterCache_();
                    for (var t = [], a = 0; a < this.paramCache_.length; a += 2) e === this.paramCache_[a] && t.push(this.paramCache_[a + 1]);
                    return t
                }, s.prototype.getParameterMap = function(e) {
                    this.checkParameterCache_();
                    for (var t = {}, a = 0; a < this.paramCache_.length; a += 2) {
                        var n = this.paramCache_[a++],
                            r = this.paramCache_[a++];
                        n in t ? t[n].push(r) : t[n] = [r]
                    }
                    return t
                }, s.prototype.getParameterValue = function(e) {
                    this.checkParameterCache_();
                    for (var t = 0; t < this.paramCache_.length; t += 2)
                        if (e === this.paramCache_[t]) return this.paramCache_[t + 1];
                    return null
                }, s.prototype.getFragment = function() {
                    return this.fragment_ && decodeURIComponent(this.fragment_)
                }, s.prototype.getRawFragment = function() {
                    return this.fragment_
                }, s.prototype.setFragment = function(e) {
                    return this.fragment_ = e ? encodeURIComponent(e) : null, this
                }, s.prototype.setRawFragment = function(e) {
                    return this.fragment_ = e || null, this
                }, s.prototype.hasFragment = function() {
                    return null !== this.fragment_
                };
                var p = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
                    d = /[#\/\?@]/g,
                    f = /[\#\?]/g;
                return s.parse = e, s.create = t, s.resolve = l, s.collapse_dots = i, s.utils = {
                    mimeTypeOf: function(t) {
                        return /\.html$/.test(e(t).getPath()) ? "text/html" : "application/javascript"
                    },
                    resolve: function(t, a) {
                        return t ? l(e(t), e(a)).toString() : "" + a
                    }
                }, s
            }(),
            html4 = {};
        if (html4.atype = {
                NONE: 0,
                URI: 1,
                URI_FRAGMENT: 11,
                SCRIPT: 2,
                STYLE: 3,
                HTML: 12,
                ID: 4,
                IDREF: 5,
                IDREFS: 6,
                GLOBAL_NAME: 7,
                LOCAL_NAME: 8,
                CLASSES: 9,
                FRAME_TARGET: 10,
                MEDIA_QUERY: 13
            }, html4.atype = html4.atype, html4.ATTRIBS = {
                "*::class": 9,
                "*::dir": 0,
                "*::draggable": 0,
                "*::hidden": 0,
                "*::id": 4,
                "*::inert": 0,
                "*::itemprop": 0,
                "*::itemref": 6,
                "*::itemscope": 0,
                "*::lang": 0,
                "*::onblur": 2,
                "*::onchange": 2,
                "*::onclick": 2,
                "*::ondblclick": 2,
                "*::onfocus": 2,
                "*::onkeydown": 2,
                "*::onkeypress": 2,
                "*::onkeyup": 2,
                "*::onload": 2,
                "*::onmousedown": 2,
                "*::onmousemove": 2,
                "*::onmouseout": 2,
                "*::onmouseover": 2,
                "*::onmouseup": 2,
                "*::onreset": 2,
                "*::onscroll": 2,
                "*::onselect": 2,
                "*::onsubmit": 2,
                "*::onunload": 2,
                "*::spellcheck": 0,
                "*::style": 3,
                "*::title": 0,
                "*::translate": 0,
                "a::accesskey": 0,
                "a::coords": 0,
                "a::href": 1,
                "a::hreflang": 0,
                "a::name": 7,
                "a::onblur": 2,
                "a::onfocus": 2,
                "a::shape": 0,
                "a::tabindex": 0,
                "a::target": 10,
                "a::type": 0,
                "area::accesskey": 0,
                "area::alt": 0,
                "area::coords": 0,
                "area::href": 1,
                "area::nohref": 0,
                "area::onblur": 2,
                "area::onfocus": 2,
                "area::shape": 0,
                "area::tabindex": 0,
                "area::target": 10,
                "audio::controls": 0,
                "audio::loop": 0,
                "audio::mediagroup": 5,
                "audio::muted": 0,
                "audio::preload": 0,
                "bdo::dir": 0,
                "blockquote::cite": 1,
                "br::clear": 0,
                "button::accesskey": 0,
                "button::disabled": 0,
                "button::name": 8,
                "button::onblur": 2,
                "button::onfocus": 2,
                "button::tabindex": 0,
                "button::type": 0,
                "button::value": 0,
                "canvas::height": 0,
                "canvas::width": 0,
                "caption::align": 0,
                "col::align": 0,
                "col::char": 0,
                "col::charoff": 0,
                "col::span": 0,
                "col::valign": 0,
                "col::width": 0,
                "colgroup::align": 0,
                "colgroup::char": 0,
                "colgroup::charoff": 0,
                "colgroup::span": 0,
                "colgroup::valign": 0,
                "colgroup::width": 0,
                "command::checked": 0,
                "command::command": 5,
                "command::disabled": 0,
                "command::icon": 1,
                "command::label": 0,
                "command::radiogroup": 0,
                "command::type": 0,
                "data::value": 0,
                "del::cite": 1,
                "del::datetime": 0,
                "details::open": 0,
                "dir::compact": 0,
                "div::align": 0,
                "dl::compact": 0,
                "fieldset::disabled": 0,
                "font::color": 0,
                "font::face": 0,
                "font::size": 0,
                "form::accept": 0,
                "form::action": 1,
                "form::autocomplete": 0,
                "form::enctype": 0,
                "form::method": 0,
                "form::name": 7,
                "form::novalidate": 0,
                "form::onreset": 2,
                "form::onsubmit": 2,
                "form::target": 10,
                "h1::align": 0,
                "h2::align": 0,
                "h3::align": 0,
                "h4::align": 0,
                "h5::align": 0,
                "h6::align": 0,
                "hr::align": 0,
                "hr::noshade": 0,
                "hr::size": 0,
                "hr::width": 0,
                "iframe::align": 0,
                "iframe::frameborder": 0,
                "iframe::height": 0,
                "iframe::marginheight": 0,
                "iframe::marginwidth": 0,
                "iframe::width": 0,
                "img::align": 0,
                "img::alt": 0,
                "img::border": 0,
                "img::height": 0,
                "img::hspace": 0,
                "img::ismap": 0,
                "img::name": 7,
                "img::src": 1,
                "img::usemap": 11,
                "img::vspace": 0,
                "img::width": 0,
                "input::accept": 0,
                "input::accesskey": 0,
                "input::align": 0,
                "input::alt": 0,
                "input::autocomplete": 0,
                "input::checked": 0,
                "input::disabled": 0,
                "input::inputmode": 0,
                "input::ismap": 0,
                "input::list": 5,
                "input::max": 0,
                "input::maxlength": 0,
                "input::min": 0,
                "input::multiple": 0,
                "input::name": 8,
                "input::onblur": 2,
                "input::onchange": 2,
                "input::onfocus": 2,
                "input::onselect": 2,
                "input::placeholder": 0,
                "input::readonly": 0,
                "input::required": 0,
                "input::size": 0,
                "input::src": 1,
                "input::step": 0,
                "input::tabindex": 0,
                "input::type": 0,
                "input::usemap": 11,
                "input::value": 0,
                "ins::cite": 1,
                "ins::datetime": 0,
                "label::accesskey": 0,
                "label::for": 5,
                "label::onblur": 2,
                "label::onfocus": 2,
                "legend::accesskey": 0,
                "legend::align": 0,
                "li::type": 0,
                "li::value": 0,
                "map::name": 7,
                "menu::compact": 0,
                "menu::label": 0,
                "menu::type": 0,
                "meter::high": 0,
                "meter::low": 0,
                "meter::max": 0,
                "meter::min": 0,
                "meter::value": 0,
                "ol::compact": 0,
                "ol::reversed": 0,
                "ol::start": 0,
                "ol::type": 0,
                "optgroup::disabled": 0,
                "optgroup::label": 0,
                "option::disabled": 0,
                "option::label": 0,
                "option::selected": 0,
                "option::value": 0,
                "output::for": 6,
                "output::name": 8,
                "p::align": 0,
                "pre::width": 0,
                "progress::max": 0,
                "progress::min": 0,
                "progress::value": 0,
                "q::cite": 1,
                "select::autocomplete": 0,
                "select::disabled": 0,
                "select::multiple": 0,
                "select::name": 8,
                "select::onblur": 2,
                "select::onchange": 2,
                "select::onfocus": 2,
                "select::required": 0,
                "select::size": 0,
                "select::tabindex": 0,
                "source::type": 0,
                "table::align": 0,
                "table::bgcolor": 0,
                "table::border": 0,
                "table::cellpadding": 0,
                "table::cellspacing": 0,
                "table::frame": 0,
                "table::rules": 0,
                "table::summary": 0,
                "table::width": 0,
                "tbody::align": 0,
                "tbody::char": 0,
                "tbody::charoff": 0,
                "tbody::valign": 0,
                "td::abbr": 0,
                "td::align": 0,
                "td::axis": 0,
                "td::bgcolor": 0,
                "td::char": 0,
                "td::charoff": 0,
                "td::colspan": 0,
                "td::headers": 6,
                "td::height": 0,
                "td::nowrap": 0,
                "td::rowspan": 0,
                "td::scope": 0,
                "td::valign": 0,
                "td::width": 0,
                "textarea::accesskey": 0,
                "textarea::autocomplete": 0,
                "textarea::cols": 0,
                "textarea::disabled": 0,
                "textarea::inputmode": 0,
                "textarea::name": 8,
                "textarea::onblur": 2,
                "textarea::onchange": 2,
                "textarea::onfocus": 2,
                "textarea::onselect": 2,
                "textarea::placeholder": 0,
                "textarea::readonly": 0,
                "textarea::required": 0,
                "textarea::rows": 0,
                "textarea::tabindex": 0,
                "textarea::wrap": 0,
                "tfoot::align": 0,
                "tfoot::char": 0,
                "tfoot::charoff": 0,
                "tfoot::valign": 0,
                "th::abbr": 0,
                "th::align": 0,
                "th::axis": 0,
                "th::bgcolor": 0,
                "th::char": 0,
                "th::charoff": 0,
                "th::colspan": 0,
                "th::headers": 6,
                "th::height": 0,
                "th::nowrap": 0,
                "th::rowspan": 0,
                "th::scope": 0,
                "th::valign": 0,
                "th::width": 0,
                "thead::align": 0,
                "thead::char": 0,
                "thead::charoff": 0,
                "thead::valign": 0,
                "tr::align": 0,
                "tr::bgcolor": 0,
                "tr::char": 0,
                "tr::charoff": 0,
                "tr::valign": 0,
                "track::default": 0,
                "track::kind": 0,
                "track::label": 0,
                "track::srclang": 0,
                "ul::compact": 0,
                "ul::type": 0,
                "video::controls": 0,
                "video::height": 0,
                "video::loop": 0,
                "video::mediagroup": 5,
                "video::muted": 0,
                "video::poster": 1,
                "video::preload": 0,
                "video::width": 0
            }, html4.ATTRIBS = html4.ATTRIBS, html4.eflags = {
                OPTIONAL_ENDTAG: 1,
                EMPTY: 2,
                CDATA: 4,
                RCDATA: 8,
                UNSAFE: 16,
                FOLDABLE: 32,
                SCRIPT: 64,
                STYLE: 128,
                VIRTUALIZED: 256
            }, html4.eflags = html4.eflags, html4.ELEMENTS = {
                a: 0,
                abbr: 0,
                acronym: 0,
                address: 0,
                applet: 272,
                area: 2,
                article: 0,
                aside: 0,
                audio: 0,
                b: 0,
                base: 274,
                basefont: 274,
                bdi: 0,
                bdo: 0,
                big: 0,
                blockquote: 0,
                body: 305,
                br: 2,
                button: 0,
                canvas: 0,
                caption: 0,
                center: 0,
                cite: 0,
                code: 0,
                col: 2,
                colgroup: 1,
                command: 2,
                data: 0,
                datalist: 0,
                dd: 1,
                del: 0,
                details: 0,
                dfn: 0,
                dialog: 272,
                dir: 0,
                div: 0,
                dl: 0,
                dt: 1,
                em: 0,
                fieldset: 0,
                figcaption: 0,
                figure: 0,
                font: 0,
                footer: 0,
                form: 0,
                frame: 274,
                frameset: 272,
                h1: 0,
                h2: 0,
                h3: 0,
                h4: 0,
                h5: 0,
                h6: 0,
                head: 305,
                header: 0,
                hgroup: 0,
                hr: 2,
                html: 305,
                i: 0,
                iframe: 16,
                img: 2,
                input: 2,
                ins: 0,
                isindex: 274,
                kbd: 0,
                keygen: 274,
                label: 0,
                legend: 0,
                li: 1,
                link: 274,
                map: 0,
                mark: 0,
                menu: 0,
                meta: 274,
                meter: 0,
                nav: 0,
                nobr: 0,
                noembed: 276,
                noframes: 276,
                noscript: 276,
                object: 272,
                ol: 0,
                optgroup: 0,
                option: 1,
                output: 0,
                p: 1,
                param: 274,
                pre: 0,
                progress: 0,
                q: 0,
                s: 0,
                samp: 0,
                script: 84,
                section: 0,
                select: 0,
                small: 0,
                source: 2,
                span: 0,
                strike: 0,
                strong: 0,
                style: 148,
                sub: 0,
                summary: 0,
                sup: 0,
                table: 0,
                tbody: 1,
                td: 1,
                textarea: 8,
                tfoot: 1,
                th: 1,
                thead: 1,
                time: 0,
                title: 280,
                tr: 1,
                track: 2,
                tt: 0,
                u: 0,
                ul: 0,
                var: 0,
                video: 0,
                wbr: 2
            }, html4.ELEMENTS = html4.ELEMENTS, html4.ELEMENT_DOM_INTERFACES = {
                a: "HTMLAnchorElement",
                abbr: "HTMLElement",
                acronym: "HTMLElement",
                address: "HTMLElement",
                applet: "HTMLAppletElement",
                area: "HTMLAreaElement",
                article: "HTMLElement",
                aside: "HTMLElement",
                audio: "HTMLAudioElement",
                b: "HTMLElement",
                base: "HTMLBaseElement",
                basefont: "HTMLBaseFontElement",
                bdi: "HTMLElement",
                bdo: "HTMLElement",
                big: "HTMLElement",
                blockquote: "HTMLQuoteElement",
                body: "HTMLBodyElement",
                br: "HTMLBRElement",
                button: "HTMLButtonElement",
                canvas: "HTMLCanvasElement",
                caption: "HTMLTableCaptionElement",
                center: "HTMLElement",
                cite: "HTMLElement",
                code: "HTMLElement",
                col: "HTMLTableColElement",
                colgroup: "HTMLTableColElement",
                command: "HTMLCommandElement",
                data: "HTMLElement",
                datalist: "HTMLDataListElement",
                dd: "HTMLElement",
                del: "HTMLModElement",
                details: "HTMLDetailsElement",
                dfn: "HTMLElement",
                dialog: "HTMLDialogElement",
                dir: "HTMLDirectoryElement",
                div: "HTMLDivElement",
                dl: "HTMLDListElement",
                dt: "HTMLElement",
                em: "HTMLElement",
                fieldset: "HTMLFieldSetElement",
                figcaption: "HTMLElement",
                figure: "HTMLElement",
                font: "HTMLFontElement",
                footer: "HTMLElement",
                form: "HTMLFormElement",
                frame: "HTMLFrameElement",
                frameset: "HTMLFrameSetElement",
                h1: "HTMLHeadingElement",
                h2: "HTMLHeadingElement",
                h3: "HTMLHeadingElement",
                h4: "HTMLHeadingElement",
                h5: "HTMLHeadingElement",
                h6: "HTMLHeadingElement",
                head: "HTMLHeadElement",
                header: "HTMLElement",
                hgroup: "HTMLElement",
                hr: "HTMLHRElement",
                html: "HTMLHtmlElement",
                i: "HTMLElement",
                iframe: "HTMLIFrameElement",
                img: "HTMLImageElement",
                input: "HTMLInputElement",
                ins: "HTMLModElement",
                isindex: "HTMLUnknownElement",
                kbd: "HTMLElement",
                keygen: "HTMLKeygenElement",
                label: "HTMLLabelElement",
                legend: "HTMLLegendElement",
                li: "HTMLLIElement",
                link: "HTMLLinkElement",
                map: "HTMLMapElement",
                mark: "HTMLElement",
                menu: "HTMLMenuElement",
                meta: "HTMLMetaElement",
                meter: "HTMLMeterElement",
                nav: "HTMLElement",
                nobr: "HTMLElement",
                noembed: "HTMLElement",
                noframes: "HTMLElement",
                noscript: "HTMLElement",
                object: "HTMLObjectElement",
                ol: "HTMLOListElement",
                optgroup: "HTMLOptGroupElement",
                option: "HTMLOptionElement",
                output: "HTMLOutputElement",
                p: "HTMLParagraphElement",
                param: "HTMLParamElement",
                pre: "HTMLPreElement",
                progress: "HTMLProgressElement",
                q: "HTMLQuoteElement",
                s: "HTMLElement",
                samp: "HTMLElement",
                script: "HTMLScriptElement",
                section: "HTMLElement",
                select: "HTMLSelectElement",
                small: "HTMLElement",
                source: "HTMLSourceElement",
                span: "HTMLSpanElement",
                strike: "HTMLElement",
                strong: "HTMLElement",
                style: "HTMLStyleElement",
                sub: "HTMLElement",
                summary: "HTMLElement",
                sup: "HTMLElement",
                table: "HTMLTableElement",
                tbody: "HTMLTableSectionElement",
                td: "HTMLTableDataCellElement",
                textarea: "HTMLTextAreaElement",
                tfoot: "HTMLTableSectionElement",
                th: "HTMLTableHeaderCellElement",
                thead: "HTMLTableSectionElement",
                time: "HTMLTimeElement",
                title: "HTMLTitleElement",
                tr: "HTMLTableRowElement",
                track: "HTMLTrackElement",
                tt: "HTMLElement",
                u: "HTMLElement",
                ul: "HTMLUListElement",
                var: "HTMLElement",
                video: "HTMLVideoElement",
                wbr: "HTMLElement"
            }, html4.ELEMENT_DOM_INTERFACES = html4.ELEMENT_DOM_INTERFACES, html4.ueffects = {
                NOT_LOADED: 0,
                SAME_DOCUMENT: 1,
                NEW_DOCUMENT: 2
            }, html4.ueffects = html4.ueffects, html4.URIEFFECTS = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 0,
                "command::icon": 1,
                "del::cite": 0,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 0,
                "q::cite": 0,
                "video::poster": 1
            }, html4.URIEFFECTS = html4.URIEFFECTS, html4.ltypes = {
                UNSANDBOXED: 2,
                SANDBOXED: 1,
                DATA: 0
            }, html4.ltypes = html4.ltypes, html4.LOADERTYPES = {
                "a::href": 2,
                "area::href": 2,
                "blockquote::cite": 2,
                "command::icon": 1,
                "del::cite": 2,
                "form::action": 2,
                "img::src": 1,
                "input::src": 1,
                "ins::cite": 2,
                "q::cite": 2,
                "video::poster": 1
            }, html4.LOADERTYPES = html4.LOADERTYPES, "i" !== "I".toLowerCase()) throw "I/i problem";
        var html = function(e) {
                function t(e) {
                    if (S.hasOwnProperty(e)) return S[e];
                    var t = e.match(P);
                    if (t) return String.fromCharCode(parseInt(t[1], 10));
                    if (t = e.match(D)) return String.fromCharCode(parseInt(t[1], 16));
                    if (I && k.test(e)) {
                        I.innerHTML = "&" + e + ";";
                        var a = I.textContent;
                        return S[e] = a, a
                    }
                    return "&" + e + ";"
                }

                function a(e, a) {
                    return t(a)
                }

                function n(e) {
                    return e.replace(x, "")
                }

                function r(e) {
                    return e.replace(N, a)
                }

                function o(e) {
                    return ("" + e).replace(F, "&amp;").replace(B, "&lt;").replace(q, "&gt;").replace(z, "&#34;")
                }

                function i(e) {
                    return e.replace(U, "&amp;$1").replace(B, "&lt;").replace(q, "&gt;")
                }

                function l(e) {
                    var t = {
                        cdata: e.cdata || e.cdata,
                        comment: e.comment || e.comment,
                        endDoc: e.endDoc || e.endDoc,
                        endTag: e.endTag || e.endTag,
                        pcdata: e.pcdata || e.pcdata,
                        rcdata: e.rcdata || e.rcdata,
                        startDoc: e.startDoc || e.startDoc,
                        startTag: e.startTag || e.startTag
                    };
                    return function(e, a) {
                        return s(e, t, a)
                    }
                }

                function s(e, t, a) {
                    m(t, u(e), 0, {
                        noMoreGT: !1,
                        noMoreEndComments: !1
                    }, a)
                }

                function c(e, t, a, n, r) {
                    return function() {
                        m(e, t, a, n, r)
                    }
                }

                function m(t, a, n, r, o) {
                    try {
                        t.startDoc && 0 == n && t.startDoc(o);
                        for (var i, l, s, m = n, u = a.length; m < u;) {
                            var f = a[m++],
                                g = a[m];
                            switch (f) {
                                case "&":
                                    O.test(g) ? (t.pcdata && t.pcdata("&" + g, o, Y, c(t, a, m, r, o)), m++) : t.pcdata && t.pcdata("&amp;", o, Y, c(t, a, m, r, o));
                                    break;
                                case "</":
                                    (i = /^([-\w:]+)[^\'\"]*/.exec(g)) ? i[0].length === g.length && ">" === a[m + 1] ? (m += 2, s = i[1].toLowerCase(), t.endTag && t.endTag(s, o, Y, c(t, a, m, r, o))) : m = h(a, m, t, o, Y, r): t.pcdata && t.pcdata("&lt;/", o, Y, c(t, a, m, r, o));
                                    break;
                                case "<":
                                    if (i = /^([-\w:]+)\s*\/?/.exec(g))
                                        if (i[0].length === g.length && ">" === a[m + 1]) {
                                            m += 2, s = i[1].toLowerCase(), t.startTag && t.startTag(s, [], o, Y, c(t, a, m, r, o));
                                            var E = e.ELEMENTS[s];
                                            if (E & j) {
                                                var T = {
                                                    name: s,
                                                    next: m,
                                                    eflags: E
                                                };
                                                m = d(a, T, t, o, Y, r)
                                            }
                                        } else m = p(a, m, t, o, Y, r);
                                    else t.pcdata && t.pcdata("&lt;", o, Y, c(t, a, m, r, o));
                                    break;
                                case "\x3c!--":
                                    if (!r.noMoreEndComments) {
                                        for (l = m + 1; l < u && (">" !== a[l] || !/--$/.test(a[l - 1])); l++);
                                        if (l < u) {
                                            if (t.comment) {
                                                var L = a.slice(m, l).join("");
                                                t.comment(L.substr(0, L.length - 2), o, Y, c(t, a, l + 1, r, o))
                                            }
                                            m = l + 1
                                        } else r.noMoreEndComments = !0
                                    }
                                    r.noMoreEndComments && t.pcdata && t.pcdata("&lt;!--", o, Y, c(t, a, m, r, o));
                                    break;
                                case "<!":
                                    if (/^\w/.test(g)) {
                                        if (!r.noMoreGT) {
                                            for (l = m + 1; l < u && ">" !== a[l]; l++);
                                            l < u ? m = l + 1 : r.noMoreGT = !0
                                        }
                                        r.noMoreGT && t.pcdata && t.pcdata("&lt;!", o, Y, c(t, a, m, r, o))
                                    } else t.pcdata && t.pcdata("&lt;!", o, Y, c(t, a, m, r, o));
                                    break;
                                case "<?":
                                    if (!r.noMoreGT) {
                                        for (l = m + 1; l < u && ">" !== a[l]; l++);
                                        l < u ? m = l + 1 : r.noMoreGT = !0
                                    }
                                    r.noMoreGT && t.pcdata && t.pcdata("&lt;?", o, Y, c(t, a, m, r, o));
                                    break;
                                case ">":
                                    t.pcdata && t.pcdata("&gt;", o, Y, c(t, a, m, r, o));
                                    break;
                                case "":
                                    break;
                                default:
                                    t.pcdata && t.pcdata(f, o, Y, c(t, a, m, r, o))
                            }
                        }
                        t.endDoc && t.endDoc(o)
                    } catch (e) {
                        if (e !== Y) throw e
                    }
                }

                function u(e) {
                    var t = /(<\/|<\!--|<[!?]|[&<>])/g;
                    if (e += "", $) return e.split(t);
                    for (var a, n = [], r = 0; null !== (a = t.exec(e));) n.push(e.substring(r, a.index)), n.push(a[0]), r = a.index + a[0].length;
                    return n.push(e.substring(r)), n
                }

                function h(e, t, a, n, r, o) {
                    var i = f(e, t);
                    return i ? (a.endTag && a.endTag(i.name, n, r, c(a, e, t, o, n)), i.next) : e.length
                }

                function p(e, t, a, n, r, o) {
                    var i = f(e, t);
                    return i ? (a.startTag && a.startTag(i.name, i.attrs, n, r, c(a, e, i.next, o, n)), i.eflags & j ? d(e, i, a, n, r, o) : i.next) : e.length
                }

                function d(t, a, n, r, o, l) {
                    var s = t.length;
                    Q.hasOwnProperty(a.name) || (Q[a.name] = new RegExp("^" + a.name + "(?:[\\s\\/]|$)", "i"));
                    for (var m = Q[a.name], u = a.next, h = a.next + 1; h < s && ("</" !== t[h - 1] || !m.test(t[h])); h++);
                    h < s && (h -= 1);
                    var p = t.slice(u, h).join("");
                    if (a.eflags & e.eflags.CDATA) n.cdata && n.cdata(p, r, o, c(n, t, h, l, r));
                    else {
                        if (!(a.eflags & e.eflags.RCDATA)) throw new Error("bug");
                        n.rcdata && n.rcdata(i(p), r, o, c(n, t, h, l, r))
                    }
                    return h
                }

                function f(t, a) {
                    var n = /^([-\w:]+)/.exec(t[a]),
                        r = {};
                    r.name = n[1].toLowerCase(), r.eflags = e.ELEMENTS[r.name];
                    for (var o = t[a].substr(n[0].length), i = a + 1, l = t.length; i < l && ">" !== t[i]; i++) o += t[i];
                    if (!(l <= i)) {
                        for (var s = [];
                            "" !== o;)
                            if (n = G.exec(o)) {
                                if (n[4] && !n[5] || n[6] && !n[7]) {
                                    for (var c = n[4] || n[6], m = !1, u = [o, t[i++]]; i < l; i++) {
                                        if (m) {
                                            if (">" === t[i]) break
                                        } else 0 <= t[i].indexOf(c) && (m = !0);
                                        u.push(t[i])
                                    }
                                    if (l <= i) break;
                                    o = u.join("");
                                    continue
                                }
                                var h = n[1].toLowerCase(),
                                    p = n[2] ? g(n[3]) : "";
                                s.push(h, p), o = o.substr(n[0].length)
                            } else o = o.replace(/^[\s\S][^a-z\s]*/, "");
                        return r.attrs = s, r.next = i + 1, r
                    }
                }

                function g(e) {
                    var t = e.charCodeAt(0);
                    return 34 !== t && 39 !== t || (e = e.substr(1, e.length - 2)), r(n(e))
                }

                function E(t) {
                    var a, n, r = function(e, t) {
                        n || t.push(e)
                    };
                    return l({
                        startDoc: function(e) {
                            a = [], n = !1
                        },
                        startTag: function(r, i, l) {
                            if (!n && e.ELEMENTS.hasOwnProperty(r)) {
                                var s = e.ELEMENTS[r];
                                if (!(s & e.eflags.FOLDABLE)) {
                                    var c = t(r, i);
                                    if (!c) return void(n = !(s & e.eflags.EMPTY));
                                    if ("object" != typeof c) throw new Error("tagPolicy did not return object (old API?)");
                                    if (!("attribs" in c)) throw new Error("tagPolicy gave no attribs");
                                    i = c.attribs;
                                    var m, u;
                                    if ("tagName" in c ? (u = c.tagName, m = e.ELEMENTS[u]) : (u = r, m = s), s & e.eflags.OPTIONAL_ENDTAG) {
                                        var h = a[a.length - 1];
                                        !h || h.orig !== r || h.rep === u && r === u || l.push("</", h.rep, ">")
                                    }
                                    s & e.eflags.EMPTY || a.push({
                                        orig: r,
                                        rep: u
                                    }), l.push("<", u);
                                    for (var p = 0, d = i.length; p < d; p += 2) {
                                        var f = i[p],
                                            g = i[p + 1];
                                        null !== g && void 0 !== g && l.push(" ", f, '="', o(g), '"')
                                    }
                                    l.push(">"), s & e.eflags.EMPTY && !(m & e.eflags.EMPTY) && l.push("</", u, ">")
                                }
                            }
                        },
                        endTag: function(t, r) {
                            if (n) return void(n = !1);
                            if (e.ELEMENTS.hasOwnProperty(t)) {
                                var o = e.ELEMENTS[t];
                                if (!(o & (e.eflags.EMPTY | e.eflags.FOLDABLE))) {
                                    var i;
                                    if (o & e.eflags.OPTIONAL_ENDTAG)
                                        for (i = a.length; --i >= 0;) {
                                            var l = a[i].orig;
                                            if (l === t) break;
                                            if (!(e.ELEMENTS[l] & e.eflags.OPTIONAL_ENDTAG)) return
                                        } else
                                            for (i = a.length; --i >= 0 && a[i].orig !== t;);
                                    if (i < 0) return;
                                    for (var s = a.length; --s > i;) {
                                        var c = a[s].rep;
                                        e.ELEMENTS[c] & e.eflags.OPTIONAL_ENDTAG || r.push("</", c, ">")
                                    }
                                    i < a.length && (t = a[i].rep), a.length = i, r.push("</", t, ">")
                                }
                            }
                        },
                        pcdata: r,
                        rcdata: r,
                        cdata: r,
                        endDoc: function(e) {
                            for (; a.length; a.length--) e.push("</", a[a.length - 1].rep, ">")
                        }
                    })
                }

                function T(e, t, a, n, r) {
                    if (!r) return null;
                    try {
                        var o = URI.parse("" + e);
                        if (o && (!o.hasScheme() || V.test(o.getScheme()))) {
                            var i = r(o, t, a, n);
                            return i ? i.toString() : null
                        }
                    } catch (e) {
                        return null
                    }
                    return null
                }

                function L(e, t, a, n, r) {
                    if (a || e(t + " removed", {
                            change: "removed",
                            tagName: t
                        }), n !== r) {
                        var o = "changed";
                        n && !r ? o = "removed" : !n && r && (o = "added"), e(t + "." + a + " " + o, {
                            change: o,
                            tagName: t,
                            attribName: a,
                            oldValue: n,
                            newValue: r
                        })
                    }
                }

                function M(e, t, a) {
                    var n;
                    return n = t + "::" + a, e.hasOwnProperty(n) ? e[n] : (n = "*::" + a, e.hasOwnProperty(n) ? e[n] : void 0)
                }

                function b(t, a) {
                    return M(e.LOADERTYPES, t, a)
                }

                function y(t, a) {
                    return M(e.URIEFFECTS, t, a)
                }

                function v(t, a, n, r, o) {
                    for (var i = 0; i < a.length; i += 2) {
                        var l, s = a[i],
                            c = a[i + 1],
                            m = c,
                            u = null;
                        if (l = t + "::" + s, (e.ATTRIBS.hasOwnProperty(l) || (l = "*::" + s, e.ATTRIBS.hasOwnProperty(l))) && (u = e.ATTRIBS[l]), null !== u) switch (u) {
                            case e.atype.NONE:
                                break;
                            case e.atype.SCRIPT:
                                c = null, o && L(o, t, s, m, c);
                                break;
                            case e.atype.STYLE:
                                if (void 0 === A) {
                                    c = null, o && L(o, t, s, m, c);
                                    break
                                }
                                var h = [];
                                A(c, {
                                    declaration: function(t, a) {
                                        var r = t.toLowerCase(),
                                            o = C[r];
                                        o && (R(r, o, a, n ? function(t) {
                                            return T(t, e.ueffects.SAME_DOCUMENT, e.ltypes.SANDBOXED, {
                                                TYPE: "CSS",
                                                CSS_PROP: r
                                            }, n)
                                        } : null), h.push(t + ": " + a.join(" ")))
                                    }
                                }), c = h.length > 0 ? h.join(" ; ") : null, o && L(o, t, s, m, c);
                                break;
                            case e.atype.ID:
                            case e.atype.IDREF:
                            case e.atype.IDREFS:
                            case e.atype.GLOBAL_NAME:
                            case e.atype.LOCAL_NAME:
                            case e.atype.CLASSES:
                                c = r ? r(c) : c, o && L(o, t, s, m, c);
                                break;
                            case e.atype.URI:
                                c = T(c, y(t, s), b(t, s), {
                                    TYPE: "MARKUP",
                                    XML_ATTR: s,
                                    XML_TAG: t
                                }, n), o && L(o, t, s, m, c);
                                break;
                            case e.atype.URI_FRAGMENT:
                                c && "#" === c.charAt(0) ? (c = c.substring(1), null !== (c = r ? r(c) : c) && void 0 !== c && (c = "#" + c)) : c = null, o && L(o, t, s, m, c);
                                break;
                            default:
                                c = null, o && L(o, t, s, m, c)
                        } else c = null, o && L(o, t, s, m, c);
                        a[i + 1] = c
                    }
                    return a
                }

                function H(t, a, n) {
                    return function(r, o) {
                        if (!(e.ELEMENTS[r] & e.eflags.UNSAFE)) return {
                            attribs: v(r, o, t, a, n)
                        };
                        n && L(n, r, void 0, void 0, void 0)
                    }
                }

                function _(e, t) {
                    var a = [];
                    return E(t)(e, a), a.join("")
                }

                function w(e, t, a, n) {
                    return _(e, H(t, a, n))
                }
                var A, R, C;
                "undefined" != typeof window && (A = window.parseCssDeclarations, R = window.sanitizeCssProperty, C = window.cssSchema);
                var S = {
                        lt: "<",
                        LT: "<",
                        gt: ">",
                        GT: ">",
                        amp: "&",
                        AMP: "&",
                        quot: '"',
                        apos: "'",
                        nbsp: " "
                    },
                    P = /^#(\d+)$/,
                    D = /^#x([0-9A-Fa-f]+)$/,
                    k = /^[A-Za-z][A-za-z0-9]+$/,
                    I = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null,
                    x = /\0/g,
                    N = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
                    O = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
                    F = /&/g,
                    U = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
                    B = /[<]/g,
                    q = />/g,
                    z = /\"/g,
                    G = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
                    $ = 3 === "a,b".split(/(,)/).length,
                    j = e.eflags.CDATA | e.eflags.RCDATA,
                    Y = {},
                    Q = {},
                    V = /^(?:https?|mailto|data)$/i,
                    X = {};
                return X.escapeAttrib = X.escapeAttrib = o, X.makeHtmlSanitizer = X.makeHtmlSanitizer = E, X.makeSaxParser = X.makeSaxParser = l, X.makeTagPolicy = X.makeTagPolicy = H, X.normalizeRCData = X.normalizeRCData = i, X.sanitize = X.sanitize = w, X.sanitizeAttribs = X.sanitizeAttribs = v, X.sanitizeWithPolicy = X.sanitizeWithPolicy = _, X.unescapeEntities = X.unescapeEntities = r, X
            }(html4),
            html_sanitize = html.sanitize;
        html4.ATTRIBS["*::style"] = 0, html4.ELEMENTS.style = 0, html4.ATTRIBS["a::target"] = 0, html4.ELEMENTS.video = 0, html4.ATTRIBS["video::src"] = 0, html4.ATTRIBS["video::poster"] = 0, html4.ATTRIBS["video::controls"] = 0, html4.ELEMENTS.audio = 0, html4.ATTRIBS["audio::src"] = 0, html4.ATTRIBS["video::autoplay"] = 0, html4.ATTRIBS["video::controls"] = 0, "undefined" != typeof module && (module.exports = html_sanitize);
    }, {}],
    4: [function(require, module, exports) {
        ! function(t, i) {
            "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
        }(this, function(t) {
            "use strict";

            function i(t) {
                var i, e, n, o;
                for (e = 1, n = arguments.length; e < n; e++) {
                    o = arguments[e];
                    for (i in o) t[i] = o[i]
                }
                return t
            }

            function e(t, i) {
                var e = Array.prototype.slice;
                if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
                var n = e.call(arguments, 2);
                return function() {
                    return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
                }
            }

            function n(t) {
                return t._leaflet_id = t._leaflet_id || ++mi, t._leaflet_id
            }

            function o(t, i, e) {
                var n, o, s, r;
                return r = function() {
                    n = !1, o && (s.apply(e, o), o = !1)
                }, s = function() {
                    n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
                }
            }

            function s(t, i, e) {
                var n = i[1],
                    o = i[0],
                    s = n - o;
                return t === n && e ? t : ((t - o) % s + s) % s + o
            }

            function r() {
                return !1
            }

            function a(t, i) {
                var e = Math.pow(10, void 0 === i ? 6 : i);
                return Math.round(t * e) / e
            }

            function h(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }

            function u(t) {
                return h(t).split(/\s+/)
            }

            function l(t, i) {
                t.hasOwnProperty("options") || (t.options = t.options ? pi(t.options) : {});
                for (var e in i) t.options[e] = i[e];
                return t.options
            }

            function c(t, i, e) {
                var n = [];
                for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
            }

            function _(t, i) {
                return t.replace(fi, function(t, e) {
                    var n = i[e];
                    if (void 0 === n) throw new Error("No value provided for variable " + t);
                    return "function" == typeof n && (n = n(i)), n
                })
            }

            function d(t, i) {
                for (var e = 0; e < t.length; e++)
                    if (t[e] === i) return e;
                return -1
            }

            function p(t) {
                return window["webkit" + t] || window["moz" + t] || window["ms" + t]
            }

            function m(t) {
                var i = +new Date,
                    e = Math.max(0, 16 - (i - yi));
                return yi = i + e, window.setTimeout(t, e)
            }

            function f(t, i, n) {
                if (!n || xi !== m) return xi.call(window, e(t, i));
                t.call(i)
            }

            function g(t) {
                t && wi.call(window, t)
            }

            function v() {}

            function y(t) {
                if ("undefined" != typeof L && L && L.Mixin) {
                    t = gi(t) ? t : [t];
                    for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
                }
            }

            function x(t, i, e) {
                this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
            }

            function w(t, i, e) {
                return t instanceof x ? t : gi(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e)
            }

            function P(t, i) {
                if (t)
                    for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
            }

            function b(t, i) {
                return !t || t instanceof P ? t : new P(t, i)
            }

            function T(t, i) {
                if (t)
                    for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
            }

            function z(t, i) {
                return t instanceof T ? t : new T(t, i)
            }

            function M(t, i, e) {
                if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
                this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
            }

            function C(t, i, e) {
                return t instanceof M ? t : gi(t) && "object" != typeof t[0] ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e)
            }

            function S(t, i, e, n) {
                if (gi(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
                this._a = t, this._b = i, this._c = e, this._d = n
            }

            function Z(t, i, e, n) {
                return new S(t, i, e, n)
            }

            function E(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t)
            }

            function k(t, i) {
                var e, n, o, s, r, a, h = "";
                for (e = 0, o = t.length; e < o; e++) {
                    for (r = t[e], n = 0, s = r.length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
                    h += i ? le ? "z" : "x" : ""
                }
                return h || "M0 0"
            }

            function B(t) {
                return navigator.userAgent.toLowerCase().indexOf(t) >= 0
            }

            function A(t, i, e, n) {
                return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this
            }

            function I(t, i, e) {
                var n = t["_leaflet_" + i + e];
                return "touchstart" === i ? t.removeEventListener(de, n, !1) : "touchmove" === i ? t.removeEventListener(pe, n, !1) : "touchend" === i && (t.removeEventListener(me, n, !1), t.removeEventListener(fe, n, !1)), this
            }

            function O(t, i, n) {
                var o = e(function(t) {
                    if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                        if (!(ge.indexOf(t.target.tagName) < 0)) return;
                        Pt(t)
                    }
                    j(t, i)
                });
                t["_leaflet_touchstart" + n] = o, t.addEventListener(de, o, !1), ye || (document.documentElement.addEventListener(de, R, !0), document.documentElement.addEventListener(pe, N, !0), document.documentElement.addEventListener(me, D, !0), document.documentElement.addEventListener(fe, D, !0), ye = !0)
            }

            function R(t) {
                ve[t.pointerId] = t, xe++
            }

            function N(t) {
                ve[t.pointerId] && (ve[t.pointerId] = t)
            }

            function D(t) {
                delete ve[t.pointerId], xe--
            }

            function j(t, i) {
                t.touches = [];
                for (var e in ve) t.touches.push(ve[e]);
                t.changedTouches = [t], i(t)
            }

            function W(t, i, e) {
                var n = function(t) {
                    (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i)
                };
                t["_leaflet_touchmove" + e] = n, t.addEventListener(pe, n, !1)
            }

            function H(t, i, e) {
                var n = function(t) {
                    j(t, i)
                };
                t["_leaflet_touchend" + e] = n, t.addEventListener(me, n, !1), t.addEventListener(fe, n, !1)
            }

            function F(t, i, e) {
                function n(t) {
                    var i;
                    if (oe) {
                        if (!Ri || "mouse" === t.pointerType) return;
                        i = xe
                    } else i = t.touches.length;
                    if (!(i > 1)) {
                        var e = Date.now(),
                            n = e - (s || e);
                        r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e
                    }
                }

                function o(t) {
                    if (a && !r.cancelBubble) {
                        if (oe) {
                            if (!Ri || "mouse" === t.pointerType) return;
                            var e, n, o = {};
                            for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
                            r = o
                        }
                        r.type = "dblclick", i(r), s = null
                    }
                }
                var s, r, a = !1,
                    h = 250;
                return t[Le + we + e] = n, t[Le + Pe + e] = o, t[Le + "dblclick" + e] = i, t.addEventListener(we, n, !1), t.addEventListener(Pe, o, !1), t.addEventListener("dblclick", i, !1), this
            }

            function U(t, i) {
                var e = t[Le + we + i],
                    n = t[Le + Pe + i],
                    o = t[Le + "dblclick" + i];
                return t.removeEventListener(we, e, !1), t.removeEventListener(Pe, n, !1), Ri || t.removeEventListener("dblclick", o, !1), this
            }

            function V(t) {
                return "string" == typeof t ? document.getElementById(t) : t
            }

            function q(t, i) {
                var e = t.style[i] || t.currentStyle && t.currentStyle[i];
                if ((!e || "auto" === e) && document.defaultView) {
                    var n = document.defaultView.getComputedStyle(t, null);
                    e = n ? n[i] : null
                }
                return "auto" === e ? null : e
            }

            function G(t, i, e) {
                var n = document.createElement(t);
                return n.className = i || "", e && e.appendChild(n), n
            }

            function K(t) {
                var i = t.parentNode;
                i && i.removeChild(t)
            }

            function Y(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild)
            }

            function X(t) {
                var i = t.parentNode;
                i && i.lastChild !== t && i.appendChild(t)
            }

            function J(t) {
                var i = t.parentNode;
                i && i.firstChild !== t && i.insertBefore(t, i.firstChild)
            }

            function $(t, i) {
                if (void 0 !== t.classList) return t.classList.contains(i);
                var e = et(t);
                return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
            }

            function Q(t, i) {
                if (void 0 !== t.classList)
                    for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
                else if (!$(t, i)) {
                    var s = et(t);
                    it(t, (s ? s + " " : "") + i)
                }
            }

            function tt(t, i) {
                void 0 !== t.classList ? t.classList.remove(i) : it(t, h((" " + et(t) + " ").replace(" " + i + " ", " ")))
            }

            function it(t, i) {
                void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
            }

            function et(t) {
                return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
            }

            function nt(t, i) {
                "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && ot(t, i)
            }

            function ot(t, i) {
                var e = !1,
                    n = "DXImageTransform.Microsoft.Alpha";
                try {
                    e = t.filters.item(n)
                } catch (t) {
                    if (1 === i) return
                }
                i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
            }

            function st(t) {
                for (var i = document.documentElement.style, e = 0; e < t.length; e++)
                    if (t[e] in i) return t[e];
                return !1
            }

            function rt(t, i, e) {
                var n = i || new x(0, 0);
                t.style[be] = (Xi ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
            }

            function at(t, i) {
                t._leaflet_pos = i, Qi ? rt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
            }

            function ht(t) {
                return t._leaflet_pos || new x(0, 0)
            }

            function ut() {
                mt(window, "dragstart", Pt)
            }

            function lt() {
                ft(window, "dragstart", Pt)
            }

            function ct(t) {
                for (; - 1 === t.tabIndex;) t = t.parentNode;
                t.style && (_t(), Ce = t, Se = t.style.outline, t.style.outline = "none", mt(window, "keydown", _t))
            }

            function _t() {
                Ce && (Ce.style.outline = Se, Ce = void 0, Se = void 0, ft(window, "keydown", _t))
            }

            function dt(t) {
                do {
                    t = t.parentNode
                } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
                return t
            }

            function pt(t) {
                var i = t.getBoundingClientRect();
                return {
                    x: i.width / t.offsetWidth || 1,
                    y: i.height / t.offsetHeight || 1,
                    boundingClientRect: i
                }
            }

            function mt(t, i, e, n) {
                if ("object" == typeof i)
                    for (var o in i) gt(t, o, i[o], e);
                else {
                    i = u(i);
                    for (var s = 0, r = i.length; s < r; s++) gt(t, i[s], e, n)
                }
                return this
            }

            function ft(t, i, e, n) {
                if ("object" == typeof i)
                    for (var o in i) vt(t, o, i[o], e);
                else if (i) {
                    i = u(i);
                    for (var s = 0, r = i.length; s < r; s++) vt(t, i[s], e, n)
                } else {
                    for (var a in t[ke]) vt(t, a, t[ke][a]);
                    delete t[ke]
                }
                return this
            }

            function gt(t, i, e, o) {
                var s = i + n(e) + (o ? "_" + n(o) : "");
                if (t[ke] && t[ke][s]) return this;
                var r = function(i) {
                        return e.call(o || t, i || window.event)
                    },
                    a = r;
                oe && 0 === i.indexOf("touch") ? A(t, i, r, s) : !se || "dblclick" !== i || !F || oe && Ui ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function(i) {
                    i = i || window.event, Ct(t, i) && a(i)
                }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && Di && (r = function(t) {
                    St(t, a)
                }), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[ke] = t[ke] || {}, t[ke][s] = r
            }

            function vt(t, i, e, o) {
                var s = i + n(e) + (o ? "_" + n(o) : ""),
                    r = t[ke] && t[ke][s];
                if (!r) return this;
                oe && 0 === i.indexOf("touch") ? I(t, i, s) : !se || "dblclick" !== i || !U || oe && Ui ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : U(t, s), t[ke][s] = null
            }

            function yt(t) {
                return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Mt(t), this
            }

            function xt(t) {
                return gt(t, "mousewheel", yt), this
            }

            function wt(t) {
                return mt(t, "mousedown touchstart dblclick", yt), gt(t, "click", zt), this
            }

            function Pt(t) {
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
            }

            function Lt(t) {
                return Pt(t), yt(t), this
            }

            function bt(t, i) {
                if (!i) return new x(t.clientX, t.clientY);
                var e = pt(i),
                    n = e.boundingClientRect;
                return new x((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
            }

            function Tt(t) {
                return Ri ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Be : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
            }

            function zt(t) {
                Ae[t.type] = !0
            }

            function Mt(t) {
                var i = Ae[t.type];
                return Ae[t.type] = !1, i
            }

            function Ct(t, i) {
                var e = i.relatedTarget;
                if (!e) return !0;
                try {
                    for (; e && e !== t;) e = e.parentNode
                } catch (t) {
                    return !1
                }
                return e !== t
            }

            function St(t, i) {
                var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                    n = Ze && e - Ze;
                if (n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated) return void Lt(t);
                Ze = e, i(t)
            }

            function Zt(t, i) {
                return new Re(t, i)
            }

            function Et(t, i) {
                if (!i || !t.length) return t.slice();
                var e = i * i;
                return t = Ot(t, e), t = At(t, e)
            }

            function kt(t, i, e) {
                return Math.sqrt(Wt(t, i, e, !0))
            }

            function Bt(t, i, e) {
                return Wt(t, i, e)
            }

            function At(t, i) {
                var e = t.length,
                    n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
                    o = new n(e);
                o[0] = o[e - 1] = 1, It(t, o, i, 0, e - 1);
                var s, r = [];
                for (s = 0; s < e; s++) o[s] && r.push(t[s]);
                return r
            }

            function It(t, i, e, n, o) {
                var s, r, a, h = 0;
                for (r = n + 1; r <= o - 1; r++)(a = Wt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
                h > e && (i[s] = 1, It(t, i, e, n, s), It(t, i, e, s, o))
            }

            function Ot(t, i) {
                for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) jt(t[n], t[o]) > i && (e.push(t[n]), o = n);
                return o < s - 1 && e.push(t[s - 1]), e
            }

            function Rt(t, i, e, n, o) {
                var s, r, a, h = n ? Ye : Dt(t, e),
                    u = Dt(i, e);
                for (Ye = u;;) {
                    if (!(h | u)) return [t, i];
                    if (h & u) return !1;
                    s = h || u, r = Nt(t, i, s, e, o), a = Dt(r, e), s === h ? (t = r, h = a) : (i = r, u = a)
                }
            }

            function Nt(t, i, e, n, o) {
                var s, r, a = i.x - t.x,
                    h = i.y - t.y,
                    u = n.min,
                    l = n.max;
                return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o)
            }

            function Dt(t, i) {
                var e = 0;
                return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
            }

            function jt(t, i) {
                var e = i.x - t.x,
                    n = i.y - t.y;
                return e * e + n * n
            }

            function Wt(t, i, e, n) {
                var o, s = i.x,
                    r = i.y,
                    a = e.x - s,
                    h = e.y - r,
                    u = a * a + h * h;
                return u > 0 && (o = ((t.x - s) * a + (t.y - r) * h) / u, o > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r)
            }

            function Ht(t) {
                return !gi(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
            }

            function Ft(t) {
                return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ht(t)
            }

            function Ut(t, i, e) {
                var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
                for (o = 0, u = t.length; o < u; o++) t[o]._code = Dt(t[o], i);
                for (r = 0; r < 4; r++) {
                    for (l = _[r], n = [], o = 0, u = t.length, s = u - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || (c = Nt(h, a, l, i, e), c._code = Dt(c, i), n.push(c)) : (h._code & l && (c = Nt(h, a, l, i, e), c._code = Dt(c, i), n.push(c)), n.push(a));
                    t = n
                }
                return t
            }

            function Vt(t) {
                return new mn(t)
            }

            function qt(t, i) {
                return new vn(t, i)
            }

            function Gt(t, i) {
                return new xn(t, i)
            }

            function Kt(t, i, e) {
                return new wn(t, i, e)
            }

            function Yt(t, i) {
                return new Pn(t, i)
            }

            function Xt(t, i) {
                return new Ln(t, i)
            }

            function Jt(t, i) {
                var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
                    a = r ? r.coordinates : null,
                    h = [],
                    u = i && i.pointToLayer,
                    l = i && i.coordsToLatLng || $t;
                if (!a && !r) return null;
                switch (r.type) {
                    case "Point":
                        return e = l(a), u ? u(t, e) : new vn(e);
                    case "MultiPoint":
                        for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new vn(e));
                        return new dn(h);
                    case "LineString":
                    case "MultiLineString":
                        return n = Qt(a, "LineString" === r.type ? 0 : 1, l), new Pn(n, i);
                    case "Polygon":
                    case "MultiPolygon":
                        return n = Qt(a, "Polygon" === r.type ? 1 : 2, l), new Ln(n, i);
                    case "GeometryCollection":
                        for (o = 0, s = r.geometries.length; o < s; o++) {
                            var c = Jt({
                                geometry: r.geometries[o],
                                type: "Feature",
                                properties: t.properties
                            }, i);
                            c && h.push(c)
                        }
                        return new dn(h);
                    default:
                        throw new Error("Invalid GeoJSON object.")
                }
            }

            function $t(t) {
                return new M(t[1], t[0], t[2])
            }

            function Qt(t, i, e) {
                for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Qt(t[s], i - 1, e) : (e || $t)(t[s]), o.push(n);
                return o
            }

            function ti(t, i) {
                return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)]
            }

            function ii(t, i, e, n) {
                for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? ii(t[s], i - 1, e, n) : ti(t[s], n));
                return !i && e && o.push(o[0]), o
            }

            function ei(t, e) {
                return t.feature ? i({}, t.feature, {
                    geometry: e
                }) : ni(e)
            }

            function ni(t) {
                return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                    type: "Feature",
                    properties: {},
                    geometry: t
                }
            }

            function oi(t, i) {
                return new bn(t, i)
            }

            function si(t, i, e) {
                return new Sn(t, i, e)
            }

            function ri(t) {
                return new In(t)
            }

            function ai(t) {
                return new On(t)
            }

            function hi(t, i) {
                return new Rn(t, i)
            }

            function ui(t, i) {
                return new Nn(t, i)
            }

            function li(t) {
                return ue ? new jn(t) : null
            }

            function ci(t) {
                return le || ce ? new Un(t) : null
            }

            function _i(t, i) {
                return new Vn(t, i)
            }
            var di = Object.freeze;
            Object.freeze = function(t) {
                return t
            };
            var pi = Object.create || function() {
                    function t() {}
                    return function(i) {
                        return t.prototype = i, new t
                    }
                }(),
                mi = 0,
                fi = /\{ *([\w_-]+) *\}/g,
                gi = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                vi = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
                yi = 0,
                xi = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
                wi = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function(t) {
                    window.clearTimeout(t)
                },
                Pi = (Object.freeze || Object)({
                    freeze: di,
                    extend: i,
                    create: pi,
                    bind: e,
                    lastId: mi,
                    stamp: n,
                    throttle: o,
                    wrapNum: s,
                    falseFn: r,
                    formatNum: a,
                    trim: h,
                    splitWords: u,
                    setOptions: l,
                    getParamString: c,
                    template: _,
                    isArray: gi,
                    indexOf: d,
                    emptyImageUrl: vi,
                    requestFn: xi,
                    cancelFn: wi,
                    requestAnimFrame: f,
                    cancelAnimFrame: g
                });
            v.extend = function(t) {
                var e = function() {
                        this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                    },
                    n = e.__super__ = this.prototype,
                    o = pi(n);
                o.constructor = e, e.prototype = o;
                for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
                return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(pi(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function() {
                    if (!this._initHooksCalled) {
                        n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                        for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this)
                    }
                }, e
            }, v.include = function(t) {
                return i(this.prototype, t), this
            }, v.mergeOptions = function(t) {
                return i(this.prototype.options, t), this
            }, v.addInitHook = function(t) {
                var i = Array.prototype.slice.call(arguments, 1),
                    e = "function" == typeof t ? t : function() {
                        this[t].apply(this, i)
                    };
                return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
            };
            var Li = {
                on: function(t, i, e) {
                    if ("object" == typeof t)
                        for (var n in t) this._on(n, t[n], i);
                    else {
                        t = u(t);
                        for (var o = 0, s = t.length; o < s; o++) this._on(t[o], i, e)
                    }
                    return this
                },
                off: function(t, i, e) {
                    if (t)
                        if ("object" == typeof t)
                            for (var n in t) this._off(n, t[n], i);
                        else {
                            t = u(t);
                            for (var o = 0, s = t.length; o < s; o++) this._off(t[o], i, e)
                        }
                    else delete this._events;
                    return this
                },
                _on: function(t, i, e) {
                    this._events = this._events || {};
                    var n = this._events[t];
                    n || (n = [], this._events[t] = n), e === this && (e = void 0);
                    for (var o = {
                            fn: i,
                            ctx: e
                        }, s = n, r = 0, a = s.length; r < a; r++)
                        if (s[r].fn === i && s[r].ctx === e) return;
                    s.push(o)
                },
                _off: function(t, i, e) {
                    var n, o, s;
                    if (this._events && (n = this._events[t])) {
                        if (!i) {
                            for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
                            return void delete this._events[t]
                        }
                        if (e === this && (e = void 0), n)
                            for (o = 0, s = n.length; o < s; o++) {
                                var a = n[o];
                                if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                            }
                    }
                },
                fire: function(t, e, n) {
                    if (!this.listens(t, n)) return this;
                    var o = i({}, e, {
                        type: t,
                        target: this,
                        sourceTarget: e && e.sourceTarget || this
                    });
                    if (this._events) {
                        var s = this._events[t];
                        if (s) {
                            this._firingCount = this._firingCount + 1 || 1;
                            for (var r = 0, a = s.length; r < a; r++) {
                                var h = s[r];
                                h.fn.call(h.ctx || this, o)
                            }
                            this._firingCount--
                        }
                    }
                    return n && this._propagateEvent(o), this
                },
                listens: function(t, i) {
                    var e = this._events && this._events[t];
                    if (e && e.length) return !0;
                    if (i)
                        for (var n in this._eventParents)
                            if (this._eventParents[n].listens(t, i)) return !0;
                    return !1
                },
                once: function(t, i, n) {
                    if ("object" == typeof t) {
                        for (var o in t) this.once(o, t[o], i);
                        return this
                    }
                    var s = e(function() {
                        this.off(t, i, n).off(t, s, n)
                    }, this);
                    return this.on(t, i, n).on(t, s, n)
                },
                addEventParent: function(t) {
                    return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
                },
                removeEventParent: function(t) {
                    return this._eventParents && delete this._eventParents[n(t)], this
                },
                _propagateEvent: function(t) {
                    for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
                        layer: t.target,
                        propagatedFrom: t.target
                    }, t), !0)
                }
            };
            Li.addEventListener = Li.on, Li.removeEventListener = Li.clearAllEventListeners = Li.off, Li.addOneTimeEventListener = Li.once, Li.fireEvent = Li.fire, Li.hasEventListeners = Li.listens;
            var bi = v.extend(Li),
                Ti = Math.trunc || function(t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t)
                };
            x.prototype = {
                clone: function() {
                    return new x(this.x, this.y)
                },
                add: function(t) {
                    return this.clone()._add(w(t))
                },
                _add: function(t) {
                    return this.x += t.x, this.y += t.y, this
                },
                subtract: function(t) {
                    return this.clone()._subtract(w(t))
                },
                _subtract: function(t) {
                    return this.x -= t.x, this.y -= t.y, this
                },
                divideBy: function(t) {
                    return this.clone()._divideBy(t)
                },
                _divideBy: function(t) {
                    return this.x /= t, this.y /= t, this
                },
                multiplyBy: function(t) {
                    return this.clone()._multiplyBy(t)
                },
                _multiplyBy: function(t) {
                    return this.x *= t, this.y *= t, this
                },
                scaleBy: function(t) {
                    return new x(this.x * t.x, this.y * t.y)
                },
                unscaleBy: function(t) {
                    return new x(this.x / t.x, this.y / t.y)
                },
                round: function() {
                    return this.clone()._round()
                },
                _round: function() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                },
                floor: function() {
                    return this.clone()._floor()
                },
                _floor: function() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                },
                ceil: function() {
                    return this.clone()._ceil()
                },
                _ceil: function() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                },
                trunc: function() {
                    return this.clone()._trunc()
                },
                _trunc: function() {
                    return this.x = Ti(this.x), this.y = Ti(this.y), this
                },
                distanceTo: function(t) {
                    t = w(t);
                    var i = t.x - this.x,
                        e = t.y - this.y;
                    return Math.sqrt(i * i + e * e)
                },
                equals: function(t) {
                    return t = w(t), t.x === this.x && t.y === this.y
                },
                contains: function(t) {
                    return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                },
                toString: function() {
                    return "Point(" + a(this.x) + ", " + a(this.y) + ")"
                }
            }, P.prototype = {
                extend: function(t) {
                    return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                },
                getCenter: function(t) {
                    return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                },
                getBottomLeft: function() {
                    return new x(this.min.x, this.max.y)
                },
                getTopRight: function() {
                    return new x(this.max.x, this.min.y)
                },
                getTopLeft: function() {
                    return this.min
                },
                getBottomRight: function() {
                    return this.max
                },
                getSize: function() {
                    return this.max.subtract(this.min)
                },
                contains: function(t) {
                    var i, e;
                    return t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t), t instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
                },
                intersects: function(t) {
                    t = b(t);
                    var i = this.min,
                        e = this.max,
                        n = t.min,
                        o = t.max,
                        s = o.x >= i.x && n.x <= e.x,
                        r = o.y >= i.y && n.y <= e.y;
                    return s && r
                },
                overlaps: function(t) {
                    t = b(t);
                    var i = this.min,
                        e = this.max,
                        n = t.min,
                        o = t.max,
                        s = o.x > i.x && n.x < e.x,
                        r = o.y > i.y && n.y < e.y;
                    return s && r
                },
                isValid: function() {
                    return !(!this.min || !this.max)
                }
            }, T.prototype = {
                extend: function(t) {
                    var i, e, n = this._southWest,
                        o = this._northEast;
                    if (t instanceof M) i = t, e = t;
                    else {
                        if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
                        if (i = t._southWest, e = t._northEast, !i || !e) return this
                    }
                    return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this
                },
                pad: function(t) {
                    var i = this._southWest,
                        e = this._northEast,
                        n = Math.abs(i.lat - e.lat) * t,
                        o = Math.abs(i.lng - e.lng) * t;
                    return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o))
                },
                getCenter: function() {
                    return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                },
                getSouthWest: function() {
                    return this._southWest
                },
                getNorthEast: function() {
                    return this._northEast
                },
                getNorthWest: function() {
                    return new M(this.getNorth(), this.getWest())
                },
                getSouthEast: function() {
                    return new M(this.getSouth(), this.getEast())
                },
                getWest: function() {
                    return this._southWest.lng
                },
                getSouth: function() {
                    return this._southWest.lat
                },
                getEast: function() {
                    return this._northEast.lng
                },
                getNorth: function() {
                    return this._northEast.lat
                },
                contains: function(t) {
                    t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
                    var i, e, n = this._southWest,
                        o = this._northEast;
                    return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
                },
                intersects: function(t) {
                    t = z(t);
                    var i = this._southWest,
                        e = this._northEast,
                        n = t.getSouthWest(),
                        o = t.getNorthEast(),
                        s = o.lat >= i.lat && n.lat <= e.lat,
                        r = o.lng >= i.lng && n.lng <= e.lng;
                    return s && r
                },
                overlaps: function(t) {
                    t = z(t);
                    var i = this._southWest,
                        e = this._northEast,
                        n = t.getSouthWest(),
                        o = t.getNorthEast(),
                        s = o.lat > i.lat && n.lat < e.lat,
                        r = o.lng > i.lng && n.lng < e.lng;
                    return s && r
                },
                toBBoxString: function() {
                    return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                },
                equals: function(t, i) {
                    return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
                },
                isValid: function() {
                    return !(!this._southWest || !this._northEast)
                }
            }, M.prototype = {
                equals: function(t, i) {
                    return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
                },
                toString: function(t) {
                    return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
                },
                distanceTo: function(t) {
                    return Mi.distance(this, C(t))
                },
                wrap: function() {
                    return Mi.wrapLatLng(this)
                },
                toBounds: function(t) {
                    var i = 180 * t / 40075017,
                        e = i / Math.cos(Math.PI / 180 * this.lat);
                    return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
                },
                clone: function() {
                    return new M(this.lat, this.lng, this.alt)
                }
            };
            var zi = {
                    latLngToPoint: function(t, i) {
                        var e = this.projection.project(t),
                            n = this.scale(i);
                        return this.transformation._transform(e, n)
                    },
                    pointToLatLng: function(t, i) {
                        var e = this.scale(i),
                            n = this.transformation.untransform(t, e);
                        return this.projection.unproject(n)
                    },
                    project: function(t) {
                        return this.projection.project(t)
                    },
                    unproject: function(t) {
                        return this.projection.unproject(t)
                    },
                    scale: function(t) {
                        return 256 * Math.pow(2, t)
                    },
                    zoom: function(t) {
                        return Math.log(t / 256) / Math.LN2
                    },
                    getProjectedBounds: function(t) {
                        if (this.infinite) return null;
                        var i = this.projection.bounds,
                            e = this.scale(t);
                        return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
                    },
                    infinite: !1,
                    wrapLatLng: function(t) {
                        var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
                        return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
                    },
                    wrapLatLngBounds: function(t) {
                        var i = t.getCenter(),
                            e = this.wrapLatLng(i),
                            n = i.lat - e.lat,
                            o = i.lng - e.lng;
                        if (0 === n && 0 === o) return t;
                        var s = t.getSouthWest(),
                            r = t.getNorthEast();
                        return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o))
                    }
                },
                Mi = i({}, zi, {
                    wrapLng: [-180, 180],
                    R: 6371e3,
                    distance: function(t, i) {
                        var e = Math.PI / 180,
                            n = t.lat * e,
                            o = i.lat * e,
                            s = Math.sin((i.lat - t.lat) * e / 2),
                            r = Math.sin((i.lng - t.lng) * e / 2),
                            a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                            h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        return this.R * h
                    }
                }),
                Ci = {
                    R: 6378137,
                    MAX_LATITUDE: 85.0511287798,
                    project: function(t) {
                        var i = Math.PI / 180,
                            e = this.MAX_LATITUDE,
                            n = Math.max(Math.min(e, t.lat), -e),
                            o = Math.sin(n * i);
                        return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
                    },
                    unproject: function(t) {
                        var i = 180 / Math.PI;
                        return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
                    },
                    bounds: function() {
                        var t = 6378137 * Math.PI;
                        return new P([-t, -t], [t, t])
                    }()
                };
            S.prototype = {
                transform: function(t, i) {
                    return this._transform(t.clone(), i)
                },
                _transform: function(t, i) {
                    return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
                },
                untransform: function(t, i) {
                    return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
                }
            };
            var Si, Zi, Ei, ki = i({}, Mi, {
                    code: "EPSG:3857",
                    projection: Ci,
                    transformation: function() {
                        var t = .5 / (Math.PI * Ci.R);
                        return Z(t, .5, -t, .5)
                    }()
                }),
                Bi = i({}, ki, {
                    code: "EPSG:900913"
                }),
                Ai = document.documentElement.style,
                Ii = "ActiveXObject" in window,
                Oi = Ii && !document.addEventListener,
                Ri = "msLaunchUri" in navigator && !("documentMode" in document),
                Ni = B("webkit"),
                Di = B("android"),
                ji = B("android 2") || B("android 3"),
                Wi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
                Hi = Di && B("Google") && Wi < 537 && !("AudioNode" in window),
                Fi = !!window.opera,
                Ui = B("chrome"),
                Vi = B("gecko") && !Ni && !Fi && !Ii,
                qi = !Ui && B("safari"),
                Gi = B("phantom"),
                Ki = "OTransition" in Ai,
                Yi = 0 === navigator.platform.indexOf("Win"),
                Xi = Ii && "transition" in Ai,
                Ji = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !ji,
                $i = "MozPerspective" in Ai,
                Qi = !window.L_DISABLE_3D && (Xi || Ji || $i) && !Ki && !Gi,
                te = "undefined" != typeof orientation || B("mobile"),
                ie = te && Ni,
                ee = te && Ji,
                ne = !window.PointerEvent && window.MSPointerEvent,
                oe = !(!window.PointerEvent && !ne),
                se = !window.L_NO_TOUCH && (oe || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                re = te && Fi,
                ae = te && Vi,
                he = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
                ue = function() {
                    return !!document.createElement("canvas").getContext
                }(),
                le = !(!document.createElementNS || !E("svg").createSVGRect),
                ce = !le && function() {
                    try {
                        var t = document.createElement("div");
                        t.innerHTML = '<v:shape adj="1"/>';
                        var i = t.firstChild;
                        return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
                    } catch (t) {
                        return !1
                    }
                }(),
                _e = (Object.freeze || Object)({
                    ie: Ii,
                    ielt9: Oi,
                    edge: Ri,
                    webkit: Ni,
                    android: Di,
                    android23: ji,
                    androidStock: Hi,
                    opera: Fi,
                    chrome: Ui,
                    gecko: Vi,
                    safari: qi,
                    phantom: Gi,
                    opera12: Ki,
                    win: Yi,
                    ie3d: Xi,
                    webkit3d: Ji,
                    gecko3d: $i,
                    any3d: Qi,
                    mobile: te,
                    mobileWebkit: ie,
                    mobileWebkit3d: ee,
                    msPointer: ne,
                    pointer: oe,
                    touch: se,
                    mobileOpera: re,
                    mobileGecko: ae,
                    retina: he,
                    canvas: ue,
                    svg: le,
                    vml: ce
                }),
                de = ne ? "MSPointerDown" : "pointerdown",
                pe = ne ? "MSPointerMove" : "pointermove",
                me = ne ? "MSPointerUp" : "pointerup",
                fe = ne ? "MSPointerCancel" : "pointercancel",
                ge = ["INPUT", "SELECT", "OPTION"],
                ve = {},
                ye = !1,
                xe = 0,
                we = ne ? "MSPointerDown" : oe ? "pointerdown" : "touchstart",
                Pe = ne ? "MSPointerUp" : oe ? "pointerup" : "touchend",
                Le = "_leaflet_",
                be = st(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
                Te = st(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                ze = "webkitTransition" === Te || "OTransition" === Te ? Te + "End" : "transitionend";
            if ("onselectstart" in document) Si = function() {
                mt(window, "selectstart", Pt)
            }, Zi = function() {
                ft(window, "selectstart", Pt)
            };
            else {
                var Me = st(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                Si = function() {
                    if (Me) {
                        var t = document.documentElement.style;
                        Ei = t[Me], t[Me] = "none"
                    }
                }, Zi = function() {
                    Me && (document.documentElement.style[Me] = Ei, Ei = void 0)
                }
            }
            var Ce, Se, Ze, Ee = (Object.freeze || Object)({
                    TRANSFORM: be,
                    TRANSITION: Te,
                    TRANSITION_END: ze,
                    get: V,
                    getStyle: q,
                    create: G,
                    remove: K,
                    empty: Y,
                    toFront: X,
                    toBack: J,
                    hasClass: $,
                    addClass: Q,
                    removeClass: tt,
                    setClass: it,
                    getClass: et,
                    setOpacity: nt,
                    testProp: st,
                    setTransform: rt,
                    setPosition: at,
                    getPosition: ht,
                    disableTextSelection: Si,
                    enableTextSelection: Zi,
                    disableImageDrag: ut,
                    enableImageDrag: lt,
                    preventOutline: ct,
                    restoreOutline: _t,
                    getSizedParentNode: dt,
                    getScale: pt
                }),
                ke = "_leaflet_events",
                Be = Yi && Ui ? 2 * window.devicePixelRatio : Vi ? window.devicePixelRatio : 1,
                Ae = {},
                Ie = (Object.freeze || Object)({
                    on: mt,
                    off: ft,
                    stopPropagation: yt,
                    disableScrollPropagation: xt,
                    disableClickPropagation: wt,
                    preventDefault: Pt,
                    stop: Lt,
                    getMousePosition: bt,
                    getWheelDelta: Tt,
                    fakeStop: zt,
                    skipped: Mt,
                    isExternalTarget: Ct,
                    addListener: mt,
                    removeListener: ft
                }),
                Oe = bi.extend({
                    run: function(t, i, e, n) {
                        this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = ht(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                    },
                    stop: function() {
                        this._inProgress && (this._step(!0), this._complete())
                    },
                    _animate: function() {
                        this._animId = f(this._animate, this), this._step()
                    },
                    _step: function(t) {
                        var i = +new Date - this._startTime,
                            e = 1e3 * this._duration;
                        i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
                    },
                    _runFrame: function(t, i) {
                        var e = this._startPos.add(this._offset.multiplyBy(t));
                        i && e._round(), at(this._el, e), this.fire("step")
                    },
                    _complete: function() {
                        g(this._animId), this._inProgress = !1, this.fire("end")
                    },
                    _easeOut: function(t) {
                        return 1 - Math.pow(1 - t, this._easeOutPower)
                    }
                }),
                Re = bi.extend({
                    options: {
                        crs: ki,
                        center: void 0,
                        zoom: void 0,
                        minZoom: void 0,
                        maxZoom: void 0,
                        layers: [],
                        maxBounds: void 0,
                        renderer: void 0,
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4,
                        fadeAnimation: !0,
                        markerZoomAnimation: !0,
                        transform3DLimit: 8388608,
                        zoomSnap: 1,
                        zoomDelta: 1,
                        trackResize: !0
                    },
                    initialize: function(t, i) {
                        i = l(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, {
                            reset: !0
                        }), this.callInitHooks(), this._zoomAnimated = Te && Qi && !re && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), mt(this._proxy, ze, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                    },
                    setView: function(t, e, n) {
                        if (e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n) {
                            void 0 !== n.animate && (n.zoom = i({
                                animate: n.animate
                            }, n.zoom), n.pan = i({
                                animate: n.animate,
                                duration: n.duration
                            }, n.pan));
                            if (this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) return clearTimeout(this._sizeTimer), this
                        }
                        return this._resetView(t, e), this
                    },
                    setZoom: function(t, i) {
                        return this._loaded ? this.setView(this.getCenter(), t, {
                            zoom: i
                        }) : (this._zoom = t, this)
                    },
                    zoomIn: function(t, i) {
                        return t = t || (Qi ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
                    },
                    zoomOut: function(t, i) {
                        return t = t || (Qi ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
                    },
                    setZoomAround: function(t, i, e) {
                        var n = this.getZoomScale(i),
                            o = this.getSize().divideBy(2),
                            s = t instanceof x ? t : this.latLngToContainerPoint(t),
                            r = s.subtract(o).multiplyBy(1 - 1 / n),
                            a = this.containerPointToLatLng(o.add(r));
                        return this.setView(a, i, {
                            zoom: e
                        })
                    },
                    _getBoundsCenterZoom: function(t, i) {
                        i = i || {}, t = t.getBounds ? t.getBounds() : z(t);
                        var e = w(i.paddingTopLeft || i.padding || [0, 0]),
                            n = w(i.paddingBottomRight || i.padding || [0, 0]),
                            o = this.getBoundsZoom(t, !1, e.add(n));
                        if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
                            center: t.getCenter(),
                            zoom: o
                        };
                        var s = n.subtract(e).divideBy(2),
                            r = this.project(t.getSouthWest(), o),
                            a = this.project(t.getNorthEast(), o);
                        return {
                            center: this.unproject(r.add(a).divideBy(2).add(s), o),
                            zoom: o
                        }
                    },
                    fitBounds: function(t, i) {
                        if (t = z(t), !t.isValid()) throw new Error("Bounds are not valid.");
                        var e = this._getBoundsCenterZoom(t, i);
                        return this.setView(e.center, e.zoom, i)
                    },
                    fitWorld: function(t) {
                        return this.fitBounds([
                            [-90, -180],
                            [90, 180]
                        ], t)
                    },
                    panTo: function(t, i) {
                        return this.setView(t, this._zoom, {
                            pan: i
                        })
                    },
                    panBy: function(t, i) {
                        if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
                        if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                        if (this._panAnim || (this._panAnim = new Oe, this._panAnim.on({
                                step: this._onPanTransitionStep,
                                end: this._onPanTransitionEnd
                            }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
                            Q(this._mapPane, "leaflet-pan-anim");
                            var e = this._getMapPanePos().subtract(t).round();
                            this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
                        } else this._rawPanBy(t), this.fire("move").fire("moveend");
                        return this
                    },
                    flyTo: function(t, i, e) {
                        function n(t) {
                            var i = t ? -1 : 1,
                                e = t ? g : m,
                                n = g * g - m * m + i * x * x * v * v,
                                o = 2 * e * x * v,
                                s = n / o,
                                r = Math.sqrt(s * s + 1) - s;
                            return r < 1e-9 ? -18 : Math.log(r)
                        }

                        function o(t) {
                            return (Math.exp(t) - Math.exp(-t)) / 2
                        }

                        function s(t) {
                            return (Math.exp(t) + Math.exp(-t)) / 2
                        }

                        function r(t) {
                            return o(t) / s(t)
                        }

                        function a(t) {
                            return m * (s(w) / s(w + y * t))
                        }

                        function h(t) {
                            return m * (s(w) * r(w + y * t) - o(w)) / x
                        }

                        function u(t) {
                            return 1 - Math.pow(1 - t, 1.5)
                        }

                        function l() {
                            var e = (Date.now() - P) / b,
                                n = u(e) * L;
                            e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), {
                                flyTo: !0
                            })) : this._move(t, i)._moveEnd(!0)
                        }
                        if (e = e || {}, !1 === e.animate || !Qi) return this.setView(t, i, e);
                        this._stop();
                        var c = this.project(this.getCenter()),
                            _ = this.project(t),
                            d = this.getSize(),
                            p = this._zoom;
                        t = C(t), i = void 0 === i ? p : i;
                        var m = Math.max(d.x, d.y),
                            g = m * this.getZoomScale(p, i),
                            v = _.distanceTo(c) || 1,
                            y = 1.42,
                            x = y * y,
                            w = n(0),
                            P = Date.now(),
                            L = (n(1) - w) / y,
                            b = e.duration ? 1e3 * e.duration : 1e3 * L * .8;
                        return this._moveStart(!0, e.noMoveStart), l.call(this), this
                    },
                    flyToBounds: function(t, i) {
                        var e = this._getBoundsCenterZoom(t, i);
                        return this.flyTo(e.center, e.zoom, i)
                    },
                    setMaxBounds: function(t) {
                        return t = z(t), t.isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
                    },
                    setMinZoom: function(t) {
                        var i = this.options.minZoom;
                        return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                    },
                    setMaxZoom: function(t) {
                        var i = this.options.maxZoom;
                        return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                    },
                    panInsideBounds: function(t, i) {
                        this._enforcingBounds = !0;
                        var e = this.getCenter(),
                            n = this._limitCenter(e, this._zoom, z(t));
                        return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
                    },
                    panInside: function(t, i) {
                        i = i || {};
                        var e = w(i.paddingTopLeft || i.padding || [0, 0]),
                            n = w(i.paddingBottomRight || i.padding || [0, 0]),
                            o = this.getCenter(),
                            s = this.project(o),
                            r = this.project(t),
                            a = this.getPixelBounds(),
                            h = a.getSize().divideBy(2),
                            u = b([a.min.add(e), a.max.subtract(n)]);
                        if (!u.contains(r)) {
                            this._enforcingBounds = !0;
                            var l = s.subtract(r),
                                c = w(r.x + l.x, r.y + l.y);
                            (r.x < u.min.x || r.x > u.max.x) && (c.x = s.x - l.x, l.x > 0 ? c.x += h.x - e.x : c.x -= h.x - n.x), (r.y < u.min.y || r.y > u.max.y) && (c.y = s.y - l.y, l.y > 0 ? c.y += h.y - e.y : c.y -= h.y - n.y), this.panTo(this.unproject(c), i), this._enforcingBounds = !1
                        }
                        return this
                    },
                    invalidateSize: function(t) {
                        if (!this._loaded) return this;
                        t = i({
                            animate: !1,
                            pan: !0
                        }, !0 === t ? {
                            animate: !0
                        } : t);
                        var n = this.getSize();
                        this._sizeChanged = !0, this._lastCenter = null;
                        var o = this.getSize(),
                            s = n.divideBy(2).round(),
                            r = o.divideBy(2).round(),
                            a = s.subtract(r);
                        return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                            oldSize: n,
                            newSize: o
                        })) : this
                    },
                    stop: function() {
                        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                    },
                    locate: function(t) {
                        if (t = this._locateOptions = i({
                                timeout: 1e4,
                                watch: !1
                            }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                            code: 0,
                            message: "Geolocation not supported."
                        }), this;
                        var n = e(this._handleGeolocationResponse, this),
                            o = e(this._handleGeolocationError, this);
                        return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
                    },
                    stopLocate: function() {
                        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                    },
                    _handleGeolocationError: function(t) {
                        var i = t.code,
                            e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                            code: i,
                            message: "Geolocation error: " + e + "."
                        })
                    },
                    _handleGeolocationResponse: function(t) {
                        var i = t.coords.latitude,
                            e = t.coords.longitude,
                            n = new M(i, e),
                            o = n.toBounds(2 * t.coords.accuracy),
                            s = this._locateOptions;
                        if (s.setView) {
                            var r = this.getBoundsZoom(o);
                            this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r)
                        }
                        var a = {
                            latlng: n,
                            bounds: o,
                            timestamp: t.timestamp
                        };
                        for (var h in t.coords) "number" == typeof t.coords[h] && (a[h] = t.coords[h]);
                        this.fire("locationfound", a)
                    },
                    addHandler: function(t, i) {
                        if (!i) return this;
                        var e = this[t] = new i(this);
                        return this._handlers.push(e), this.options[t] && e.enable(), this
                    },
                    remove: function() {
                        if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                        try {
                            delete this._container._leaflet_id, delete this._containerId
                        } catch (t) {
                            this._container._leaflet_id = void 0, this._containerId = void 0
                        }
                        void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), K(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (g(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
                        var t;
                        for (t in this._layers) this._layers[t].remove();
                        for (t in this._panes) K(this._panes[t]);
                        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                    },
                    createPane: function(t, i) {
                        var e = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                            n = G("div", e, i || this._mapPane);
                        return t && (this._panes[t] = n), n
                    },
                    getCenter: function() {
                        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                    },
                    getZoom: function() {
                        return this._zoom
                    },
                    getBounds: function() {
                        var t = this.getPixelBounds();
                        return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
                    },
                    getMinZoom: function() {
                        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                    },
                    getMaxZoom: function() {
                        return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                    },
                    getBoundsZoom: function(t, i, e) {
                        t = z(t), e = w(e || [0, 0]);
                        var n = this.getZoom() || 0,
                            o = this.getMinZoom(),
                            s = this.getMaxZoom(),
                            r = t.getNorthWest(),
                            a = t.getSouthEast(),
                            h = this.getSize().subtract(e),
                            u = b(this.project(a, n), this.project(r, n)).getSize(),
                            l = Qi ? this.options.zoomSnap : 1,
                            c = h.x / u.x,
                            _ = h.y / u.y,
                            d = i ? Math.max(c, _) : Math.min(c, _);
                        return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
                    },
                    getSize: function() {
                        return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                    },
                    getPixelBounds: function(t, i) {
                        var e = this._getTopLeftPoint(t, i);
                        return new P(e, e.add(this.getSize()))
                    },
                    getPixelOrigin: function() {
                        return this._checkIfLoaded(), this._pixelOrigin
                    },
                    getPixelWorldBounds: function(t) {
                        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                    },
                    getPane: function(t) {
                        return "string" == typeof t ? this._panes[t] : t
                    },
                    getPanes: function() {
                        return this._panes
                    },
                    getContainer: function() {
                        return this._container
                    },
                    getZoomScale: function(t, i) {
                        var e = this.options.crs;
                        return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
                    },
                    getScaleZoom: function(t, i) {
                        var e = this.options.crs;
                        i = void 0 === i ? this._zoom : i;
                        var n = e.zoom(t * e.scale(i));
                        return isNaN(n) ? 1 / 0 : n
                    },
                    project: function(t, i) {
                        return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i)
                    },
                    unproject: function(t, i) {
                        return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i)
                    },
                    layerPointToLatLng: function(t) {
                        var i = w(t).add(this.getPixelOrigin());
                        return this.unproject(i)
                    },
                    latLngToLayerPoint: function(t) {
                        return this.project(C(t))._round()._subtract(this.getPixelOrigin())
                    },
                    wrapLatLng: function(t) {
                        return this.options.crs.wrapLatLng(C(t))
                    },
                    wrapLatLngBounds: function(t) {
                        return this.options.crs.wrapLatLngBounds(z(t))
                    },
                    distance: function(t, i) {
                        return this.options.crs.distance(C(t), C(i))
                    },
                    containerPointToLayerPoint: function(t) {
                        return w(t).subtract(this._getMapPanePos())
                    },
                    layerPointToContainerPoint: function(t) {
                        return w(t).add(this._getMapPanePos())
                    },
                    containerPointToLatLng: function(t) {
                        var i = this.containerPointToLayerPoint(w(t));
                        return this.layerPointToLatLng(i)
                    },
                    latLngToContainerPoint: function(t) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))
                    },
                    mouseEventToContainerPoint: function(t) {
                        return bt(t, this._container)
                    },
                    mouseEventToLayerPoint: function(t) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                    },
                    mouseEventToLatLng: function(t) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                    },
                    _initContainer: function(t) {
                        var i = this._container = V(t);
                        if (!i) throw new Error("Map container not found.");
                        if (i._leaflet_id) throw new Error("Map container is already initialized.");
                        mt(i, "scroll", this._onScroll, this), this._containerId = n(i)
                    },
                    _initLayout: function() {
                        var t = this._container;
                        this._fadeAnimated = this.options.fadeAnimation && Qi, Q(t, "leaflet-container" + (se ? " leaflet-touch" : "") + (he ? " leaflet-retina" : "") + (Oi ? " leaflet-oldie" : "") + (qi ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                        var i = q(t, "position");
                        "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                    },
                    _initPanes: function() {
                        var t = this._panes = {};
                        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), at(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Q(t.markerPane, "leaflet-zoom-hide"), Q(t.shadowPane, "leaflet-zoom-hide"))
                    },
                    _resetView: function(t, i) {
                        at(this._mapPane, new x(0, 0));
                        var e = !this._loaded;
                        this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
                        var n = this._zoom !== i;
                        this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
                    },
                    _moveStart: function(t, i) {
                        return t && this.fire("zoomstart"), i || this.fire("movestart"), this
                    },
                    _move: function(t, i, e) {
                        void 0 === i && (i = this._zoom);
                        var n = this._zoom !== i;
                        return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
                    },
                    _moveEnd: function(t) {
                        return t && this.fire("zoomend"), this.fire("moveend")
                    },
                    _stop: function() {
                        return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                    },
                    _rawPanBy: function(t) {
                        at(this._mapPane, this._getMapPanePos().subtract(t))
                    },
                    _getZoomSpan: function() {
                        return this.getMaxZoom() - this.getMinZoom()
                    },
                    _panInsideMaxBounds: function() {
                        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                    },
                    _checkIfLoaded: function() {
                        if (!this._loaded) throw new Error("Set map center and zoom first.")
                    },
                    _initEvents: function(t) {
                        this._targets = {}, this._targets[n(this._container)] = this;
                        var i = t ? ft : mt;
                        i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Qi && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                    },
                    _onResize: function() {
                        g(this._resizeRequest), this._resizeRequest = f(function() {
                            this.invalidateSize({
                                debounceMoveend: !0
                            })
                        }, this)
                    },
                    _onScroll: function() {
                        this._container.scrollTop = 0, this._container.scrollLeft = 0
                    },
                    _onMoveEnd: function() {
                        var t = this._getMapPanePos();
                        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                    },
                    _findEventTargets: function(t, i) {
                        for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
                            if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
                                a = !0;
                                break
                            }
                            if (e && e.listens(i, !0)) {
                                if (s && !Ct(r, t)) break;
                                if (o.push(e), s) break
                            }
                            if (r === this._container) break;
                            r = r.parentNode
                        }
                        return o.length || a || s || !Ct(r, t) || (o = [this]), o
                    },
                    _handleDOMEvent: function(t) {
                        if (this._loaded && !Mt(t)) {
                            var i = t.type;
                            "mousedown" !== i && "keypress" !== i || ct(t.target || t.srcElement), this._fireDOMEvent(t, i)
                        }
                    },
                    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                    _fireDOMEvent: function(t, e, n) {
                        if ("click" === t.type) {
                            var o = i({}, t);
                            o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                        }
                        if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e)), n.length)) {
                            var s = n[0];
                            "contextmenu" === e && s.listens(e, !0) && Pt(t);
                            var r = {
                                originalEvent: t
                            };
                            if ("keypress" !== t.type) {
                                var a = s.getLatLng && (!s._radius || s._radius <= 10);
                                r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                            }
                            for (var h = 0; h < n.length; h++)
                                if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
                        }
                    },
                    _draggableMoved: function(t) {
                        return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                    },
                    _clearHandlers: function() {
                        for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
                    },
                    whenReady: function(t, i) {
                        return this._loaded ? t.call(i || this, {
                            target: this
                        }) : this.on("load", t, i), this
                    },
                    _getMapPanePos: function() {
                        return ht(this._mapPane) || new x(0, 0)
                    },
                    _moved: function() {
                        var t = this._getMapPanePos();
                        return t && !t.equals([0, 0])
                    },
                    _getTopLeftPoint: function(t, i) {
                        return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                    },
                    _getNewPixelOrigin: function(t, i) {
                        var e = this.getSize()._divideBy(2);
                        return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
                    },
                    _latLngToNewLayerPoint: function(t, i, e) {
                        var n = this._getNewPixelOrigin(e, i);
                        return this.project(t, i)._subtract(n)
                    },
                    _latLngBoundsToNewLayerBounds: function(t, i, e) {
                        var n = this._getNewPixelOrigin(e, i);
                        return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
                    },
                    _getCenterLayerPoint: function() {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                    },
                    _getCenterOffset: function(t) {
                        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                    },
                    _limitCenter: function(t, i, e) {
                        if (!e) return t;
                        var n = this.project(t, i),
                            o = this.getSize().divideBy(2),
                            s = new P(n.subtract(o), n.add(o)),
                            r = this._getBoundsOffset(s, e, i);
                        return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
                    },
                    _limitOffset: function(t, i) {
                        if (!i) return t;
                        var e = this.getPixelBounds(),
                            n = new P(e.min.add(t), e.max.add(t));
                        return t.add(this._getBoundsOffset(n, i))
                    },
                    _getBoundsOffset: function(t, i, e) {
                        var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
                            o = n.min.subtract(t.min),
                            s = n.max.subtract(t.max);
                        return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
                    },
                    _rebound: function(t, i) {
                        return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
                    },
                    _limitZoom: function(t) {
                        var i = this.getMinZoom(),
                            e = this.getMaxZoom(),
                            n = Qi ? this.options.zoomSnap : 1;
                        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
                    },
                    _onPanTransitionStep: function() {
                        this.fire("move")
                    },
                    _onPanTransitionEnd: function() {
                        tt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                    },
                    _tryAnimatedPan: function(t, i) {
                        var e = this._getCenterOffset(t)._trunc();
                        return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0)
                    },
                    _createAnimProxy: function() {
                        var t = this._proxy = G("div", "leaflet-proxy leaflet-zoom-animated");
                        this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
                            var i = be,
                                e = this._proxy.style[i];
                            rt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                        }, this), this.on("load moveend", function() {
                            var t = this.getCenter(),
                                i = this.getZoom();
                            rt(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
                        }, this), this._on("unload", this._destroyAnimProxy, this)
                    },
                    _destroyAnimProxy: function() {
                        K(this._proxy), delete this._proxy
                    },
                    _catchTransitionEnd: function(t) {
                        this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                    },
                    _nothingToAnimate: function() {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                    },
                    _tryAnimatedZoom: function(t, i, e) {
                        if (this._animatingZoom) return !0;
                        if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                        var n = this.getZoomScale(i),
                            o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                        return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function() {
                            this._moveStart(!0, !1)._animateZoom(t, i, !0)
                        }, this), !0)
                    },
                    _animateZoom: function(t, i, n, o) {
                        this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, Q(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                            center: t,
                            zoom: i,
                            noUpdate: o
                        }), setTimeout(e(this._onZoomTransitionEnd, this), 250))
                    },
                    _onZoomTransitionEnd: function() {
                        this._animatingZoom && (this._mapPane && tt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function() {
                            this._moveEnd(!0)
                        }, this))
                    }
                }),
                Ne = v.extend({
                    options: {
                        position: "topright"
                    },
                    initialize: function(t) {
                        l(this, t)
                    },
                    getPosition: function() {
                        return this.options.position
                    },
                    setPosition: function(t) {
                        var i = this._map;
                        return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
                    },
                    getContainer: function() {
                        return this._container
                    },
                    addTo: function(t) {
                        this.remove(), this._map = t;
                        var i = this._container = this.onAdd(t),
                            e = this.getPosition(),
                            n = t._controlCorners[e];
                        return Q(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
                    },
                    remove: function() {
                        return this._map ? (K(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
                    },
                    _refocusOnMap: function(t) {
                        this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                    }
                }),
                De = function(t) {
                    return new Ne(t)
                };
            Re.include({
                addControl: function(t) {
                    return t.addTo(this), this
                },
                removeControl: function(t) {
                    return t.remove(), this
                },
                _initControlPos: function() {
                    function t(t, o) {
                        var s = e + t + " " + e + o;
                        i[t + o] = G("div", s, n)
                    }
                    var i = this._controlCorners = {},
                        e = "leaflet-",
                        n = this._controlContainer = G("div", e + "control-container", this._container);
                    t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
                },
                _clearControlPos: function() {
                    for (var t in this._controlCorners) K(this._controlCorners[t]);
                    K(this._controlContainer), delete this._controlCorners, delete this._controlContainer
                }
            });
            var je = Ne.extend({
                    options: {
                        collapsed: !0,
                        position: "topright",
                        autoZIndex: !0,
                        hideSingleBase: !1,
                        sortLayers: !1,
                        sortFunction: function(t, i, e, n) {
                            return e < n ? -1 : n < e ? 1 : 0
                        }
                    },
                    initialize: function(t, i, e) {
                        l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
                        for (var n in t) this._addLayer(t[n], n);
                        for (n in i) this._addLayer(i[n], n, !0)
                    },
                    onAdd: function(t) {
                        this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                        for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
                        return this._container
                    },
                    addTo: function(t) {
                        return Ne.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                    },
                    onRemove: function() {
                        this._map.off("zoomend", this._checkDisabledLayers, this);
                        for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                    },
                    addBaseLayer: function(t, i) {
                        return this._addLayer(t, i), this._map ? this._update() : this
                    },
                    addOverlay: function(t, i) {
                        return this._addLayer(t, i, !0), this._map ? this._update() : this
                    },
                    removeLayer: function(t) {
                        t.off("add remove", this._onLayerChange, this);
                        var i = this._getLayer(n(t));
                        return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
                    },
                    expand: function() {
                        Q(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                        var t = this._map.getSize().y - (this._container.offsetTop + 50);
                        return t < this._section.clientHeight ? (Q(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : tt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                    },
                    collapse: function() {
                        return tt(this._container, "leaflet-control-layers-expanded"), this
                    },
                    _initLayout: function() {
                        var t = "leaflet-control-layers",
                            i = this._container = G("div", t),
                            e = this.options.collapsed;
                        i.setAttribute("aria-haspopup", !0), wt(i), xt(i);
                        var n = this._section = G("section", t + "-list");
                        e && (this._map.on("click", this.collapse, this), Di || mt(i, {
                            mouseenter: this.expand,
                            mouseleave: this.collapse
                        }, this));
                        var o = this._layersLink = G("a", t + "-toggle", i);
                        o.href = "#", o.title = "Layers", se ? (mt(o, "click", Lt), mt(o, "click", this.expand, this)) : mt(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = G("div", t + "-base", n), this._separator = G("div", t + "-separator", n), this._overlaysList = G("div", t + "-overlays", n), i.appendChild(n)
                    },
                    _getLayer: function(t) {
                        for (var i = 0; i < this._layers.length; i++)
                            if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
                    },
                    _addLayer: function(t, i, n) {
                        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                            layer: t,
                            name: i,
                            overlay: n
                        }), this.options.sortLayers && this._layers.sort(e(function(t, i) {
                            return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
                        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                    },
                    _update: function() {
                        if (!this._container) return this;
                        Y(this._baseLayersList), Y(this._overlaysList), this._layerControlInputs = [];
                        var t, i, e, n, o = 0;
                        for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                        return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
                    },
                    _onLayerChange: function(t) {
                        this._handlingClick || this._update();
                        var i = this._getLayer(n(t.target)),
                            e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                        e && this._map.fire(e, i)
                    },
                    _createRadioElement: function(t, i) {
                        var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                            n = document.createElement("div");
                        return n.innerHTML = e, n.firstChild
                    },
                    _addItem: function(t) {
                        var i, e = document.createElement("label"),
                            o = this._map.hasLayer(t.layer);
                        t.overlay ? (i = document.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), mt(i, "click", this._onInputClick, this);
                        var s = document.createElement("span");
                        s.innerHTML = " " + t.name;
                        var r = document.createElement("div");
                        return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
                    },
                    _onInputClick: function() {
                        var t, i, e = this._layerControlInputs,
                            n = [],
                            o = [];
                        this._handlingClick = !0;
                        for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
                        for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                        for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                        this._handlingClick = !1, this._refocusOnMap()
                    },
                    _checkDisabledLayers: function() {
                        for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
                    },
                    _expandIfNotCollapsed: function() {
                        return this._map && !this.options.collapsed && this.expand(), this
                    },
                    _expand: function() {
                        return this.expand()
                    },
                    _collapse: function() {
                        return this.collapse()
                    }
                }),
                We = function(t, i, e) {
                    return new je(t, i, e)
                },
                He = Ne.extend({
                    options: {
                        position: "topleft",
                        zoomInText: "+",
                        zoomInTitle: "Zoom in",
                        zoomOutText: "&#x2212;",
                        zoomOutTitle: "Zoom out"
                    },
                    onAdd: function(t) {
                        var i = "leaflet-control-zoom",
                            e = G("div", i + " leaflet-bar"),
                            n = this.options;
                        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
                    },
                    onRemove: function(t) {
                        t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                    },
                    disable: function() {
                        return this._disabled = !0, this._updateDisabled(), this
                    },
                    enable: function() {
                        return this._disabled = !1, this._updateDisabled(), this
                    },
                    _zoomIn: function(t) {
                        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _zoomOut: function(t) {
                        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                    },
                    _createButton: function(t, i, e, n, o) {
                        var s = G("a", e, n);
                        return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), wt(s), mt(s, "click", Lt), mt(s, "click", o, this), mt(s, "click", this._refocusOnMap, this), s
                    },
                    _updateDisabled: function() {
                        var t = this._map,
                            i = "leaflet-disabled";
                        tt(this._zoomInButton, i), tt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && Q(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && Q(this._zoomInButton, i)
                    }
                });
            Re.mergeOptions({
                zoomControl: !0
            }), Re.addInitHook(function() {
                this.options.zoomControl && (this.zoomControl = new He, this.addControl(this.zoomControl))
            });
            var Fe = function(t) {
                    return new He(t)
                },
                Ue = Ne.extend({
                    options: {
                        position: "bottomleft",
                        maxWidth: 100,
                        metric: !0,
                        imperial: !0
                    },
                    onAdd: function(t) {
                        var i = G("div", "leaflet-control-scale"),
                            e = this.options;
                        return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
                    },
                    onRemove: function(t) {
                        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                    },
                    _addScales: function(t, i, e) {
                        t.metric && (this._mScale = G("div", i, e)), t.imperial && (this._iScale = G("div", i, e))
                    },
                    _update: function() {
                        var t = this._map,
                            i = t.getSize().y / 2,
                            e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
                        this._updateScales(e)
                    },
                    _updateScales: function(t) {
                        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                    },
                    _updateMetric: function(t) {
                        var i = this._getRoundNum(t),
                            e = i < 1e3 ? i + " m" : i / 1e3 + " km";
                        this._updateScale(this._mScale, e, i / t)
                    },
                    _updateImperial: function(t) {
                        var i, e, n, o = 3.2808399 * t;
                        o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
                    },
                    _updateScale: function(t, i, e) {
                        t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
                    },
                    _getRoundNum: function(t) {
                        var i = Math.pow(10, (Math.floor(t) + "").length - 1),
                            e = t / i;
                        return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e
                    }
                }),
                Ve = function(t) {
                    return new Ue(t)
                },
                qe = Ne.extend({
                    options: {
                        position: "bottomright",
                        prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                    },
                    initialize: function(t) {
                        l(this, t), this._attributions = {}
                    },
                    onAdd: function(t) {
                        t.attributionControl = this, this._container = G("div", "leaflet-control-attribution"), wt(this._container);
                        for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
                        return this._update(), this._container
                    },
                    setPrefix: function(t) {
                        return this.options.prefix = t, this._update(), this
                    },
                    addAttribution: function(t) {
                        return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
                    },
                    removeAttribution: function(t) {
                        return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
                    },
                    _update: function() {
                        if (this._map) {
                            var t = [];
                            for (var i in this._attributions) this._attributions[i] && t.push(i);
                            var e = [];
                            this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
                        }
                    }
                });
            Re.mergeOptions({
                attributionControl: !0
            }), Re.addInitHook(function() {
                this.options.attributionControl && (new qe).addTo(this)
            });
            var Ge = function(t) {
                return new qe(t)
            };
            Ne.Layers = je, Ne.Zoom = He, Ne.Scale = Ue, Ne.Attribution = qe, De.layers = We, De.zoom = Fe, De.scale = Ve, De.attribution = Ge;
            var Ke = v.extend({
                initialize: function(t) {
                    this._map = t
                },
                enable: function() {
                    return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
                },
                disable: function() {
                    return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
                },
                enabled: function() {
                    return !!this._enabled
                }
            });
            Ke.addTo = function(t, i) {
                return t.addHandler(i, this), this
            };
            var Ye, Xe = {
                    Events: Li
                },
                Je = se ? "touchstart mousedown" : "mousedown",
                $e = {
                    mousedown: "mouseup",
                    touchstart: "touchend",
                    pointerdown: "touchend",
                    MSPointerDown: "touchend"
                },
                Qe = {
                    mousedown: "mousemove",
                    touchstart: "touchmove",
                    pointerdown: "touchmove",
                    MSPointerDown: "touchmove"
                },
                tn = bi.extend({
                    options: {
                        clickTolerance: 3
                    },
                    initialize: function(t, i, e, n) {
                        l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
                    },
                    enable: function() {
                        this._enabled || (mt(this._dragStartTarget, Je, this._onDown, this), this._enabled = !0)
                    },
                    disable: function() {
                        this._enabled && (tn._dragging === this && this.finishDrag(), ft(this._dragStartTarget, Je, this._onDown, this), this._enabled = !1, this._moved = !1)
                    },
                    _onDown: function(t) {
                        if (!t._simulated && this._enabled && (this._moved = !1, !$(this._element, "leaflet-zoom-anim") && !(tn._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (tn._dragging = this, this._preventOutline && ct(this._element), ut(), Si(), this._moving)))) {
                            this.fire("down");
                            var i = t.touches ? t.touches[0] : t,
                                e = dt(this._element);
                            this._startPoint = new x(i.clientX, i.clientY), this._parentScale = pt(e), mt(document, Qe[t.type], this._onMove, this), mt(document, $e[t.type], this._onUp, this)
                        }
                    },
                    _onMove: function(t) {
                        if (!t._simulated && this._enabled) {
                            if (t.touches && t.touches.length > 1) return void(this._moved = !0);
                            var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                e = new x(i.clientX, i.clientY)._subtract(this._startPoint);
                            (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Pt(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ht(this._element).subtract(e), Q(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Q(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
                        }
                    },
                    _updatePosition: function() {
                        var t = {
                            originalEvent: this._lastEvent
                        };
                        this.fire("predrag", t), at(this._element, this._newPos), this.fire("drag", t)
                    },
                    _onUp: function(t) {
                        !t._simulated && this._enabled && this.finishDrag()
                    },
                    finishDrag: function() {
                        tt(document.body, "leaflet-dragging"), this._lastTarget && (tt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                        for (var t in Qe) ft(document, Qe[t], this._onMove, this), ft(document, $e[t], this._onUp, this);
                        lt(), Zi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
                                distance: this._newPos.distanceTo(this._startPos)
                            })), this._moving = !1,
                            tn._dragging = !1
                    }
                }),
                en = (Object.freeze || Object)({
                    simplify: Et,
                    pointToSegmentDistance: kt,
                    closestPointOnSegment: Bt,
                    clipSegment: Rt,
                    _getEdgeIntersection: Nt,
                    _getBitCode: Dt,
                    _sqClosestPointOnSegment: Wt,
                    isFlat: Ht,
                    _flat: Ft
                }),
                nn = (Object.freeze || Object)({
                    clipPolygon: Ut
                }),
                on = {
                    project: function(t) {
                        return new x(t.lng, t.lat)
                    },
                    unproject: function(t) {
                        return new M(t.y, t.x)
                    },
                    bounds: new P([-180, -90], [180, 90])
                },
                sn = {
                    R: 6378137,
                    R_MINOR: 6356752.314245179,
                    bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                    project: function(t) {
                        var i = Math.PI / 180,
                            e = this.R,
                            n = t.lat * i,
                            o = this.R_MINOR / e,
                            s = Math.sqrt(1 - o * o),
                            r = s * Math.sin(n),
                            a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                        return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n)
                    },
                    unproject: function(t) {
                        for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), u = Math.PI / 2 - 2 * Math.atan(r * i) - a, a += u;
                        return new M(a * e, t.x * e / n)
                    }
                },
                rn = (Object.freeze || Object)({
                    LonLat: on,
                    Mercator: sn,
                    SphericalMercator: Ci
                }),
                an = i({}, Mi, {
                    code: "EPSG:3395",
                    projection: sn,
                    transformation: function() {
                        var t = .5 / (Math.PI * sn.R);
                        return Z(t, .5, -t, .5)
                    }()
                }),
                hn = i({}, Mi, {
                    code: "EPSG:4326",
                    projection: on,
                    transformation: Z(1 / 180, 1, -1 / 180, .5)
                }),
                un = i({}, zi, {
                    projection: on,
                    transformation: Z(1, 0, -1, 0),
                    scale: function(t) {
                        return Math.pow(2, t)
                    },
                    zoom: function(t) {
                        return Math.log(t) / Math.LN2
                    },
                    distance: function(t, i) {
                        var e = i.lng - t.lng,
                            n = i.lat - t.lat;
                        return Math.sqrt(e * e + n * n)
                    },
                    infinite: !0
                });
            zi.Earth = Mi, zi.EPSG3395 = an, zi.EPSG3857 = ki, zi.EPSG900913 = Bi, zi.EPSG4326 = hn, zi.Simple = un;
            var ln = bi.extend({
                options: {
                    pane: "overlayPane",
                    attribution: null,
                    bubblingMouseEvents: !0
                },
                addTo: function(t) {
                    return t.addLayer(this), this
                },
                remove: function() {
                    return this.removeFrom(this._map || this._mapToAdd)
                },
                removeFrom: function(t) {
                    return t && t.removeLayer(this), this
                },
                getPane: function(t) {
                    return this._map.getPane(t ? this.options[t] || t : this.options.pane)
                },
                addInteractiveTarget: function(t) {
                    return this._map._targets[n(t)] = this, this
                },
                removeInteractiveTarget: function(t) {
                    return delete this._map._targets[n(t)], this
                },
                getAttribution: function() {
                    return this.options.attribution
                },
                _layerAdd: function(t) {
                    var i = t.target;
                    if (i.hasLayer(this)) {
                        if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
                            var e = this.getEvents();
                            i.on(e, this), this.once("remove", function() {
                                i.off(e, this)
                            }, this)
                        }
                        this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
                            layer: this
                        })
                    }
                }
            });
            Re.include({
                addLayer: function(t) {
                    if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                    var i = n(t);
                    return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
                },
                removeLayer: function(t) {
                    var i = n(t);
                    return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
                        layer: t
                    }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
                },
                hasLayer: function(t) {
                    return !!t && n(t) in this._layers
                },
                eachLayer: function(t, i) {
                    for (var e in this._layers) t.call(i, this._layers[e]);
                    return this
                },
                _addLayers: function(t) {
                    t = t ? gi(t) ? t : [t] : [];
                    for (var i = 0, e = t.length; i < e; i++) this.addLayer(t[i])
                },
                _addZoomLimit: function(t) {
                    !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
                },
                _removeZoomLimit: function(t) {
                    var i = n(t);
                    this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
                },
                _updateZoomLevels: function() {
                    var t = 1 / 0,
                        i = -1 / 0,
                        e = this._getZoomSpan();
                    for (var n in this._zoomBoundLayers) {
                        var o = this._zoomBoundLayers[n].options;
                        t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
                    }
                    this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                }
            });
            var cn = ln.extend({
                    initialize: function(t, i) {
                        l(this, i), this._layers = {};
                        var e, n;
                        if (t)
                            for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
                    },
                    addLayer: function(t) {
                        var i = this.getLayerId(t);
                        return this._layers[i] = t, this._map && this._map.addLayer(t), this
                    },
                    removeLayer: function(t) {
                        var i = t in this._layers ? t : this.getLayerId(t);
                        return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
                    },
                    hasLayer: function(t) {
                        return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
                    },
                    clearLayers: function() {
                        return this.eachLayer(this.removeLayer, this)
                    },
                    invoke: function(t) {
                        var i, e, n = Array.prototype.slice.call(arguments, 1);
                        for (i in this._layers) e = this._layers[i], e[t] && e[t].apply(e, n);
                        return this
                    },
                    onAdd: function(t) {
                        this.eachLayer(t.addLayer, t)
                    },
                    onRemove: function(t) {
                        this.eachLayer(t.removeLayer, t)
                    },
                    eachLayer: function(t, i) {
                        for (var e in this._layers) t.call(i, this._layers[e]);
                        return this
                    },
                    getLayer: function(t) {
                        return this._layers[t]
                    },
                    getLayers: function() {
                        var t = [];
                        return this.eachLayer(t.push, t), t
                    },
                    setZIndex: function(t) {
                        return this.invoke("setZIndex", t)
                    },
                    getLayerId: function(t) {
                        return n(t)
                    }
                }),
                _n = function(t, i) {
                    return new cn(t, i)
                },
                dn = cn.extend({
                    addLayer: function(t) {
                        return this.hasLayer(t) ? this : (t.addEventParent(this), cn.prototype.addLayer.call(this, t), this.fire("layeradd", {
                            layer: t
                        }))
                    },
                    removeLayer: function(t) {
                        return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), cn.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                            layer: t
                        })) : this
                    },
                    setStyle: function(t) {
                        return this.invoke("setStyle", t)
                    },
                    bringToFront: function() {
                        return this.invoke("bringToFront")
                    },
                    bringToBack: function() {
                        return this.invoke("bringToBack")
                    },
                    getBounds: function() {
                        var t = new T;
                        for (var i in this._layers) {
                            var e = this._layers[i];
                            t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
                        }
                        return t
                    }
                }),
                pn = function(t) {
                    return new dn(t)
                },
                mn = v.extend({
                    options: {
                        popupAnchor: [0, 0],
                        tooltipAnchor: [0, 0]
                    },
                    initialize: function(t) {
                        l(this, t)
                    },
                    createIcon: function(t) {
                        return this._createIcon("icon", t)
                    },
                    createShadow: function(t) {
                        return this._createIcon("shadow", t)
                    },
                    _createIcon: function(t, i) {
                        var e = this._getIconUrl(t);
                        if (!e) {
                            if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                            return null
                        }
                        var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
                        return this._setIconStyles(n, t), n
                    },
                    _setIconStyles: function(t, i) {
                        var e = this.options,
                            n = e[i + "Size"];
                        "number" == typeof n && (n = [n, n]);
                        var o = w(n),
                            s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
                        t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                    },
                    _createImg: function(t, i) {
                        return i = i || document.createElement("img"), i.src = t, i
                    },
                    _getIconUrl: function(t) {
                        return he && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                    }
                }),
                fn = mn.extend({
                    options: {
                        iconUrl: "marker-icon.png",
                        iconRetinaUrl: "marker-icon-2x.png",
                        shadowUrl: "marker-shadow.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                        shadowSize: [41, 41]
                    },
                    _getIconUrl: function(t) {
                        return fn.imagePath || (fn.imagePath = this._detectIconPath()), (this.options.imagePath || fn.imagePath) + mn.prototype._getIconUrl.call(this, t)
                    },
                    _detectIconPath: function() {
                        var t = G("div", "leaflet-default-icon-path", document.body),
                            i = q(t, "background-image") || q(t, "backgroundImage");
                        return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
                    }
                }),
                gn = Ke.extend({
                    initialize: function(t) {
                        this._marker = t
                    },
                    addHooks: function() {
                        var t = this._marker._icon;
                        this._draggable || (this._draggable = new tn(t, t, !0)), this._draggable.on({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).enable(), Q(t, "leaflet-marker-draggable")
                    },
                    removeHooks: function() {
                        this._draggable.off({
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this).disable(), this._marker._icon && tt(this._marker._icon, "leaflet-marker-draggable")
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved
                    },
                    _adjustPan: function(t) {
                        var i = this._marker,
                            e = i._map,
                            n = this._marker.options.autoPanSpeed,
                            o = this._marker.options.autoPanPadding,
                            s = ht(i._icon),
                            r = e.getPixelBounds(),
                            a = e.getPixelOrigin(),
                            h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                        if (!h.contains(s)) {
                            var u = w((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                            e.panBy(u, {
                                animate: !1
                            }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), at(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t))
                        }
                    },
                    _onDragStart: function() {
                        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
                    },
                    _onPreDrag: function(t) {
                        this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)))
                    },
                    _onDrag: function(t) {
                        var i = this._marker,
                            e = i._shadow,
                            n = ht(i._icon),
                            o = i._map.layerPointToLatLng(n);
                        e && at(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
                    },
                    _onDragEnd: function(t) {
                        g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                    }
                }),
                vn = ln.extend({
                    options: {
                        icon: new fn,
                        interactive: !0,
                        keyboard: !0,
                        title: "",
                        alt: "",
                        zIndexOffset: 0,
                        opacity: 1,
                        riseOnHover: !1,
                        riseOffset: 250,
                        pane: "markerPane",
                        bubblingMouseEvents: !1,
                        draggable: !1,
                        autoPan: !1,
                        autoPanPadding: [50, 50],
                        autoPanSpeed: 10
                    },
                    initialize: function(t, i) {
                        l(this, i), this._latlng = C(t)
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                    },
                    onRemove: function(t) {
                        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                    },
                    getEvents: function() {
                        return {
                            zoom: this.update,
                            viewreset: this.update
                        }
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setLatLng: function(t) {
                        var i = this._latlng;
                        return this._latlng = C(t), this.update(), this.fire("move", {
                            oldLatLng: i,
                            latlng: this._latlng
                        })
                    },
                    setZIndexOffset: function(t) {
                        return this.options.zIndexOffset = t, this.update()
                    },
                    setIcon: function(t) {
                        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                    },
                    getElement: function() {
                        return this._icon
                    },
                    update: function() {
                        if (this._icon && this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(t)
                        }
                        return this
                    },
                    _initIcon: function() {
                        var t = this.options,
                            i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                            e = t.icon.createIcon(this._icon),
                            n = !1;
                        e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), Q(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        });
                        var o = t.icon.createShadow(this._shadow),
                            s = !1;
                        o !== this._shadow && (this._removeShadow(), s = !0), o && (Q(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
                    },
                    _removeIcon: function() {
                        this.options.riseOnHover && this.off({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex
                        }), K(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                    },
                    _removeShadow: function() {
                        this._shadow && K(this._shadow), this._shadow = null
                    },
                    _setPos: function(t) {
                        at(this._icon, t), this._shadow && at(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                    },
                    _updateZIndex: function(t) {
                        this._icon.style.zIndex = this._zIndex + t
                    },
                    _animateZoom: function(t) {
                        var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                        this._setPos(i)
                    },
                    _initInteraction: function() {
                        if (this.options.interactive && (Q(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), gn)) {
                            var t = this.options.draggable;
                            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new gn(this), t && this.dragging.enable()
                        }
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._map && this._updateOpacity(), this
                    },
                    _updateOpacity: function() {
                        var t = this.options.opacity;
                        nt(this._icon, t), this._shadow && nt(this._shadow, t)
                    },
                    _bringToFront: function() {
                        this._updateZIndex(this.options.riseOffset)
                    },
                    _resetZIndex: function() {
                        this._updateZIndex(0)
                    },
                    _getPopupAnchor: function() {
                        return this.options.icon.options.popupAnchor
                    },
                    _getTooltipAnchor: function() {
                        return this.options.icon.options.tooltipAnchor
                    }
                }),
                yn = ln.extend({
                    options: {
                        stroke: !0,
                        color: "#3388ff",
                        weight: 3,
                        opacity: 1,
                        lineCap: "round",
                        lineJoin: "round",
                        dashArray: null,
                        dashOffset: null,
                        fill: !1,
                        fillColor: null,
                        fillOpacity: .2,
                        fillRule: "evenodd",
                        interactive: !0,
                        bubblingMouseEvents: !0
                    },
                    beforeAdd: function(t) {
                        this._renderer = t.getRenderer(this)
                    },
                    onAdd: function() {
                        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                    },
                    onRemove: function() {
                        this._renderer._removePath(this)
                    },
                    redraw: function() {
                        return this._map && this._renderer._updatePath(this), this
                    },
                    setStyle: function(t) {
                        return l(this, t), this._renderer && this._renderer._updateStyle(this), this
                    },
                    bringToFront: function() {
                        return this._renderer && this._renderer._bringToFront(this), this
                    },
                    bringToBack: function() {
                        return this._renderer && this._renderer._bringToBack(this), this
                    },
                    getElement: function() {
                        return this._path
                    },
                    _reset: function() {
                        this._project(), this._update()
                    },
                    _clickTolerance: function() {
                        return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
                    }
                }),
                xn = yn.extend({
                    options: {
                        fill: !0,
                        radius: 10
                    },
                    initialize: function(t, i) {
                        l(this, i), this._latlng = C(t), this._radius = this.options.radius
                    },
                    setLatLng: function(t) {
                        return this._latlng = C(t), this.redraw(), this.fire("move", {
                            latlng: this._latlng
                        })
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setRadius: function(t) {
                        return this.options.radius = this._radius = t, this.redraw()
                    },
                    getRadius: function() {
                        return this._radius
                    },
                    setStyle: function(t) {
                        var i = t && t.radius || this._radius;
                        return yn.prototype.setStyle.call(this, t), this.setRadius(i), this
                    },
                    _project: function() {
                        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                    },
                    _updateBounds: function() {
                        var t = this._radius,
                            i = this._radiusY || t,
                            e = this._clickTolerance(),
                            n = [t + e, i + e];
                        this._pxBounds = new P(this._point.subtract(n), this._point.add(n))
                    },
                    _update: function() {
                        this._map && this._updatePath()
                    },
                    _updatePath: function() {
                        this._renderer._updateCircle(this)
                    },
                    _empty: function() {
                        return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                    },
                    _containsPoint: function(t) {
                        return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                    }
                }),
                wn = xn.extend({
                    initialize: function(t, e, n) {
                        if ("number" == typeof e && (e = i({}, n, {
                                radius: e
                            })), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                        this._mRadius = this.options.radius
                    },
                    setRadius: function(t) {
                        return this._mRadius = t, this.redraw()
                    },
                    getRadius: function() {
                        return this._mRadius
                    },
                    getBounds: function() {
                        var t = [this._radius, this._radiusY || this._radius];
                        return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
                    },
                    setStyle: yn.prototype.setStyle,
                    _project: function() {
                        var t = this._latlng.lng,
                            i = this._latlng.lat,
                            e = this._map,
                            n = e.options.crs;
                        if (n.distance === Mi.distance) {
                            var o = Math.PI / 180,
                                s = this._mRadius / Mi.R / o,
                                r = e.project([i + s, t]),
                                a = e.project([i - s, t]),
                                h = r.add(a).divideBy(2),
                                u = e.unproject(h).lat,
                                l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
                            (isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
                        } else {
                            var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                            this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
                        }
                        this._updateBounds()
                    }
                }),
                Pn = yn.extend({
                    options: {
                        smoothFactor: 1,
                        noClip: !1
                    },
                    initialize: function(t, i) {
                        l(this, i), this._setLatLngs(t)
                    },
                    getLatLngs: function() {
                        return this._latlngs
                    },
                    setLatLngs: function(t) {
                        return this._setLatLngs(t), this.redraw()
                    },
                    isEmpty: function() {
                        return !this._latlngs.length
                    },
                    closestLayerPoint: function(t) {
                        for (var i, e, n = 1 / 0, o = null, s = Wt, r = 0, a = this._parts.length; r < a; r++)
                            for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
                                i = h[u - 1], e = h[u];
                                var c = s(t, i, e, !0);
                                c < n && (n = c, o = s(t, i, e))
                            }
                        return o && (o.distance = Math.sqrt(n)), o
                    },
                    getCenter: function() {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        var t, i, e, n, o, s, r, a = this._rings[0],
                            h = a.length;
                        if (!h) return null;
                        for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
                        if (0 === i) return this._map.layerPointToLatLng(a[0]);
                        for (t = 0, n = 0; t < h - 1; t++)
                            if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
                    },
                    getBounds: function() {
                        return this._bounds
                    },
                    addLatLng: function(t, i) {
                        return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw()
                    },
                    _setLatLngs: function(t) {
                        this._bounds = new T, this._latlngs = this._convertLatLngs(t)
                    },
                    _defaultShape: function() {
                        return Ht(this._latlngs) ? this._latlngs : this._latlngs[0]
                    },
                    _convertLatLngs: function(t) {
                        for (var i = [], e = Ht(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
                        return i
                    },
                    _project: function() {
                        var t = new P;
                        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                        var i = this._clickTolerance(),
                            e = new x(i, i);
                        this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
                    },
                    _projectLatlngs: function(t, i, e) {
                        var n, o, s = t[0] instanceof M,
                            r = t.length;
                        if (s) {
                            for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
                            i.push(o)
                        } else
                            for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds;
                        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                            if (this.options.noClip) return void(this._parts = this._rings);
                            var i, e, n, o, s, r, a, h = this._parts;
                            for (i = 0, n = 0, o = this._rings.length; i < o; i++)
                                for (a = this._rings[i], e = 0, s = a.length; e < s - 1; e++)(r = Rt(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
                        }
                    },
                    _simplifyPoints: function() {
                        for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Et(t[e], i)
                    },
                    _update: function() {
                        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this)
                    },
                    _containsPoint: function(t, i) {
                        var e, n, o, s, r, a, h = this._clickTolerance();
                        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                        for (e = 0, s = this._parts.length; e < s; e++)
                            for (a = this._parts[e], n = 0, r = a.length, o = r - 1; n < r; o = n++)
                                if ((i || 0 !== n) && kt(t, a[o], a[n]) <= h) return !0;
                        return !1
                    }
                });
            Pn._flat = Ft;
            var Ln = Pn.extend({
                    options: {
                        fill: !0
                    },
                    isEmpty: function() {
                        return !this._latlngs.length || !this._latlngs[0].length
                    },
                    getCenter: function() {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        var t, i, e, n, o, s, r, a, h, u = this._rings[0],
                            l = u.length;
                        if (!l) return null;
                        for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
                        return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
                    },
                    _convertLatLngs: function(t) {
                        var i = Pn.prototype._convertLatLngs.call(this, t),
                            e = i.length;
                        return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i
                    },
                    _setLatLngs: function(t) {
                        Pn.prototype._setLatLngs.call(this, t), Ht(this._latlngs) && (this._latlngs = [this._latlngs])
                    },
                    _defaultShape: function() {
                        return Ht(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                    },
                    _clipPoints: function() {
                        var t = this._renderer._bounds,
                            i = this.options.weight,
                            e = new x(i, i);
                        if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                            if (this.options.noClip) return void(this._parts = this._rings);
                            for (var n, o = 0, s = this._rings.length; o < s; o++) n = Ut(this._rings[o], t, !0), n.length && this._parts.push(n)
                        }
                    },
                    _updatePath: function() {
                        this._renderer._updatePoly(this, !0)
                    },
                    _containsPoint: function(t) {
                        var i, e, n, o, s, r, a, h, u = !1;
                        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                        for (o = 0, a = this._parts.length; o < a; o++)
                            for (i = this._parts[o], s = 0, h = i.length, r = h - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
                        return u || Pn.prototype._containsPoint.call(this, t, !0)
                    }
                }),
                bn = dn.extend({
                    initialize: function(t, i) {
                        l(this, i), this._layers = {}, t && this.addData(t)
                    },
                    addData: function(t) {
                        var i, e, n, o = gi(t) ? t : t.features;
                        if (o) {
                            for (i = 0, e = o.length; i < e; i++) n = o[i], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                            return this
                        }
                        var s = this.options;
                        if (s.filter && !s.filter(t)) return this;
                        var r = Jt(t, s);
                        return r ? (r.feature = ni(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
                    },
                    resetStyle: function(t) {
                        return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
                    },
                    setStyle: function(t) {
                        return this.eachLayer(function(i) {
                            this._setLayerStyle(i, t)
                        }, this)
                    },
                    _setLayerStyle: function(t, i) {
                        "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
                    }
                }),
                Tn = {
                    toGeoJSON: function(t) {
                        return ei(this, {
                            type: "Point",
                            coordinates: ti(this.getLatLng(), t)
                        })
                    }
                };
            vn.include(Tn), wn.include(Tn), xn.include(Tn), Pn.include({
                toGeoJSON: function(t) {
                    var i = !Ht(this._latlngs),
                        e = ii(this._latlngs, i ? 1 : 0, !1, t);
                    return ei(this, {
                        type: (i ? "Multi" : "") + "LineString",
                        coordinates: e
                    })
                }
            }), Ln.include({
                toGeoJSON: function(t) {
                    var i = !Ht(this._latlngs),
                        e = i && !Ht(this._latlngs[0]),
                        n = ii(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
                    return i || (n = [n]), ei(this, {
                        type: (e ? "Multi" : "") + "Polygon",
                        coordinates: n
                    })
                }
            }), cn.include({
                toMultiPoint: function(t) {
                    var i = [];
                    return this.eachLayer(function(e) {
                        i.push(e.toGeoJSON(t).geometry.coordinates)
                    }), ei(this, {
                        type: "MultiPoint",
                        coordinates: i
                    })
                },
                toGeoJSON: function(t) {
                    var i = this.feature && this.feature.geometry && this.feature.geometry.type;
                    if ("MultiPoint" === i) return this.toMultiPoint(t);
                    var e = "GeometryCollection" === i,
                        n = [];
                    return this.eachLayer(function(i) {
                        if (i.toGeoJSON) {
                            var o = i.toGeoJSON(t);
                            if (e) n.push(o.geometry);
                            else {
                                var s = ni(o);
                                "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                            }
                        }
                    }), e ? ei(this, {
                        geometries: n,
                        type: "GeometryCollection"
                    }) : {
                        type: "FeatureCollection",
                        features: n
                    }
                }
            });
            var zn = oi,
                Mn = ln.extend({
                    options: {
                        opacity: 1,
                        alt: "",
                        interactive: !1,
                        crossOrigin: !1,
                        errorOverlayUrl: "",
                        zIndex: 1,
                        className: ""
                    },
                    initialize: function(t, i, e) {
                        this._url = t, this._bounds = z(i), l(this, e)
                    },
                    onAdd: function() {
                        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Q(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                    },
                    onRemove: function() {
                        K(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._image && this._updateOpacity(), this
                    },
                    setStyle: function(t) {
                        return t.opacity && this.setOpacity(t.opacity), this
                    },
                    bringToFront: function() {
                        return this._map && X(this._image), this
                    },
                    bringToBack: function() {
                        return this._map && J(this._image), this
                    },
                    setUrl: function(t) {
                        return this._url = t, this._image && (this._image.src = t), this
                    },
                    setBounds: function(t) {
                        return this._bounds = z(t), this._map && this._reset(), this
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._reset,
                            viewreset: this._reset
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                    },
                    setZIndex: function(t) {
                        return this.options.zIndex = t, this._updateZIndex(), this
                    },
                    getBounds: function() {
                        return this._bounds
                    },
                    getElement: function() {
                        return this._image
                    },
                    _initImage: function() {
                        var t = "IMG" === this._url.tagName,
                            i = this._image = t ? this._url : G("img");
                        if (Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), this.options.className && Q(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) return void(this._url = i.src);
                        i.src = this._url, i.alt = this.options.alt
                    },
                    _animateZoom: function(t) {
                        var i = this._map.getZoomScale(t.zoom),
                            e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                        rt(this._image, e, i)
                    },
                    _reset: function() {
                        var t = this._image,
                            i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                            e = i.getSize();
                        at(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
                    },
                    _updateOpacity: function() {
                        nt(this._image, this.options.opacity)
                    },
                    _updateZIndex: function() {
                        this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                    },
                    _overlayOnError: function() {
                        this.fire("error");
                        var t = this.options.errorOverlayUrl;
                        t && this._url !== t && (this._url = t, this._image.src = t)
                    }
                }),
                Cn = function(t, i, e) {
                    return new Mn(t, i, e)
                },
                Sn = Mn.extend({
                    options: {
                        autoplay: !0,
                        loop: !0
                    },
                    _initImage: function() {
                        var t = "VIDEO" === this._url.tagName,
                            i = this._image = t ? this._url : G("video");
                        if (Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
                            for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
                            return void(this._url = n.length > 0 ? o : [i.src])
                        }
                        gi(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
                        for (var a = 0; a < this._url.length; a++) {
                            var h = G("source");
                            h.src = this._url[a], i.appendChild(h)
                        }
                    }
                }),
                Zn = ln.extend({
                    options: {
                        offset: [0, 7],
                        className: "",
                        pane: "popupPane"
                    },
                    initialize: function(t, i) {
                        l(this, t), this._source = i
                    },
                    onAdd: function(t) {
                        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && nt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && nt(this._container, 1), this.bringToFront()
                    },
                    onRemove: function(t) {
                        t._fadeAnimated ? (nt(this._container, 0), this._removeTimeout = setTimeout(e(K, void 0, this._container), 200)) : K(this._container)
                    },
                    getLatLng: function() {
                        return this._latlng
                    },
                    setLatLng: function(t) {
                        return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this
                    },
                    getContent: function() {
                        return this._content
                    },
                    setContent: function(t) {
                        return this._content = t, this.update(), this
                    },
                    getElement: function() {
                        return this._container
                    },
                    update: function() {
                        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                    },
                    getEvents: function() {
                        var t = {
                            zoom: this._updatePosition,
                            viewreset: this._updatePosition
                        };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                    },
                    isOpen: function() {
                        return !!this._map && this._map.hasLayer(this)
                    },
                    bringToFront: function() {
                        return this._map && X(this._container), this
                    },
                    bringToBack: function() {
                        return this._map && J(this._container), this
                    },
                    _updateContent: function() {
                        if (this._content) {
                            var t = this._contentNode,
                                i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                            if ("string" == typeof i) t.innerHTML = i;
                            else {
                                for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                                t.appendChild(i)
                            }
                            this.fire("contentupdate")
                        }
                    },
                    _updatePosition: function() {
                        if (this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng),
                                i = w(this.options.offset),
                                e = this._getAnchor();
                            this._zoomAnimated ? at(this._container, t.add(e)) : i = i.add(t).add(e);
                            var n = this._containerBottom = -i.y,
                                o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                            this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                        }
                    },
                    _getAnchor: function() {
                        return [0, 0]
                    }
                }),
                En = Zn.extend({
                    options: {
                        maxWidth: 300,
                        minWidth: 50,
                        maxHeight: null,
                        autoPan: !0,
                        autoPanPaddingTopLeft: null,
                        autoPanPaddingBottomRight: null,
                        autoPanPadding: [5, 5],
                        keepInView: !1,
                        closeButton: !0,
                        autoClose: !0,
                        closeOnEscapeKey: !0,
                        className: ""
                    },
                    openOn: function(t) {
                        return t.openPopup(this), this
                    },
                    onAdd: function(t) {
                        Zn.prototype.onAdd.call(this, t), t.fire("popupopen", {
                            popup: this
                        }), this._source && (this._source.fire("popupopen", {
                            popup: this
                        }, !0), this._source instanceof yn || this._source.on("preclick", yt))
                    },
                    onRemove: function(t) {
                        Zn.prototype.onRemove.call(this, t), t.fire("popupclose", {
                            popup: this
                        }), this._source && (this._source.fire("popupclose", {
                            popup: this
                        }, !0), this._source instanceof yn || this._source.off("preclick", yt))
                    },
                    getEvents: function() {
                        var t = Zn.prototype.getEvents.call(this);
                        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                    },
                    _close: function() {
                        this._map && this._map.closePopup(this)
                    },
                    _initLayout: function() {
                        var t = "leaflet-popup",
                            i = this._container = G("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                            e = this._wrapper = G("div", t + "-content-wrapper", i);
                        if (this._contentNode = G("div", t + "-content", e), wt(e), xt(this._contentNode), mt(e, "contextmenu", yt), this._tipContainer = G("div", t + "-tip-container", i), this._tip = G("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                            var n = this._closeButton = G("a", t + "-close-button", i);
                            n.href = "#close", n.innerHTML = "&#215;", mt(n, "click", this._onCloseButtonClick, this)
                        }
                    },
                    _updateLayout: function() {
                        var t = this._contentNode,
                            i = t.style;
                        i.width = "", i.whiteSpace = "nowrap";
                        var e = t.offsetWidth;
                        e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
                        var n = t.offsetHeight,
                            o = this.options.maxHeight;
                        o && n > o ? (i.height = o + "px", Q(t, "leaflet-popup-scrolled")) : tt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
                    },
                    _animateZoom: function(t) {
                        var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                            e = this._getAnchor();
                        at(this._container, i.add(e))
                    },
                    _adjustPan: function() {
                        if (this.options.autoPan) {
                            this._map._panAnim && this._map._panAnim.stop();
                            var t = this._map,
                                i = parseInt(q(this._container, "marginBottom"), 10) || 0,
                                e = this._container.offsetHeight + i,
                                n = this._containerWidth,
                                o = new x(this._containerLeft, -e - this._containerBottom);
                            o._add(ht(this._container));
                            var s = t.layerPointToContainerPoint(o),
                                r = w(this.options.autoPanPadding),
                                a = w(this.options.autoPanPaddingTopLeft || r),
                                h = w(this.options.autoPanPaddingBottomRight || r),
                                u = t.getSize(),
                                l = 0,
                                c = 0;
                            s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
                        }
                    },
                    _onCloseButtonClick: function(t) {
                        this._close(), Lt(t)
                    },
                    _getAnchor: function() {
                        return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                    }
                }),
                kn = function(t, i) {
                    return new En(t, i)
                };
            Re.mergeOptions({
                closePopupOnClick: !0
            }), Re.include({
                openPopup: function(t, i, e) {
                    return t instanceof En || (t = new En(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
                },
                closePopup: function(t) {
                    return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
                }
            }), ln.include({
                bindPopup: function(t, i) {
                    return t instanceof En ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new En(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                        click: this._openPopup,
                        keypress: this._onKeyPress,
                        remove: this.closePopup,
                        move: this._movePopup
                    }), this._popupHandlersAdded = !0), this
                },
                unbindPopup: function() {
                    return this._popup && (this.off({
                        click: this._openPopup,
                        keypress: this._onKeyPress,
                        remove: this.closePopup,
                        move: this._movePopup
                    }), this._popupHandlersAdded = !1, this._popup = null), this
                },
                openPopup: function(t, i) {
                    if (t instanceof ln || (i = t, t = this), t instanceof dn)
                        for (var e in this._layers) {
                            t = this._layers[e];
                            break
                        }
                    return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
                },
                closePopup: function() {
                    return this._popup && this._popup._close(), this
                },
                togglePopup: function(t) {
                    return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
                },
                isPopupOpen: function() {
                    return !!this._popup && this._popup.isOpen()
                },
                setPopupContent: function(t) {
                    return this._popup && this._popup.setContent(t), this
                },
                getPopup: function() {
                    return this._popup
                },
                _openPopup: function(t) {
                    var i = t.layer || t.target;
                    if (this._popup && this._map) {
                        if (Lt(t), i instanceof yn) return void this.openPopup(t.layer || t.target, t.latlng);
                        this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng)
                    }
                },
                _movePopup: function(t) {
                    this._popup.setLatLng(t.latlng)
                },
                _onKeyPress: function(t) {
                    13 === t.originalEvent.keyCode && this._openPopup(t)
                }
            });
            var Bn = Zn.extend({
                    options: {
                        pane: "tooltipPane",
                        offset: [0, 0],
                        direction: "auto",
                        permanent: !1,
                        sticky: !1,
                        interactive: !1,
                        opacity: .9
                    },
                    onAdd: function(t) {
                        Zn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                            tooltip: this
                        }), this._source && this._source.fire("tooltipopen", {
                            tooltip: this
                        }, !0)
                    },
                    onRemove: function(t) {
                        Zn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                            tooltip: this
                        }), this._source && this._source.fire("tooltipclose", {
                            tooltip: this
                        }, !0)
                    },
                    getEvents: function() {
                        var t = Zn.prototype.getEvents.call(this);
                        return se && !this.options.permanent && (t.preclick = this._close), t
                    },
                    _close: function() {
                        this._map && this._map.closeTooltip(this)
                    },
                    _initLayout: function() {
                        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                        this._contentNode = this._container = G("div", t)
                    },
                    _updateLayout: function() {},
                    _adjustPan: function() {},
                    _setPosition: function(t) {
                        var i = this._map,
                            e = this._container,
                            n = i.latLngToContainerPoint(i.getCenter()),
                            o = i.layerPointToContainerPoint(t),
                            s = this.options.direction,
                            r = e.offsetWidth,
                            a = e.offsetHeight,
                            h = w(this.options.offset),
                            u = this._getAnchor();
                        "top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), tt(e, "leaflet-tooltip-right"), tt(e, "leaflet-tooltip-left"), tt(e, "leaflet-tooltip-top"), tt(e, "leaflet-tooltip-bottom"), Q(e, "leaflet-tooltip-" + s), at(e, t)
                    },
                    _updatePosition: function() {
                        var t = this._map.latLngToLayerPoint(this._latlng);
                        this._setPosition(t)
                    },
                    setOpacity: function(t) {
                        this.options.opacity = t, this._container && nt(this._container, t)
                    },
                    _animateZoom: function(t) {
                        var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                        this._setPosition(i)
                    },
                    _getAnchor: function() {
                        return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                    }
                }),
                An = function(t, i) {
                    return new Bn(t, i)
                };
            Re.include({
                openTooltip: function(t, i, e) {
                    return t instanceof Bn || (t = new Bn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
                },
                closeTooltip: function(t) {
                    return t && this.removeLayer(t), this
                }
            }), ln.include({
                bindTooltip: function(t, i) {
                    return t instanceof Bn ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new Bn(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
                },
                unbindTooltip: function() {
                    return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
                },
                _initTooltipInteractions: function(t) {
                    if (t || !this._tooltipHandlersAdded) {
                        var i = t ? "off" : "on",
                            e = {
                                remove: this.closeTooltip,
                                move: this._moveTooltip
                            };
                        this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), se && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
                    }
                },
                openTooltip: function(t, i) {
                    if (t instanceof ln || (i = t, t = this), t instanceof dn)
                        for (var e in this._layers) {
                            t = this._layers[e];
                            break
                        }
                    return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (Q(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
                },
                closeTooltip: function() {
                    return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (tt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
                },
                toggleTooltip: function(t) {
                    return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
                },
                isTooltipOpen: function() {
                    return this._tooltip.isOpen()
                },
                setTooltipContent: function(t) {
                    return this._tooltip && this._tooltip.setContent(t), this
                },
                getTooltip: function() {
                    return this._tooltip
                },
                _openTooltip: function(t) {
                    var i = t.layer || t.target;
                    this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
                },
                _moveTooltip: function(t) {
                    var i, e, n = t.latlng;
                    this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
                }
            });
            var In = mn.extend({
                options: {
                    iconSize: [12, 12],
                    html: !1,
                    bgPos: null,
                    className: "leaflet-div-icon"
                },
                createIcon: function(t) {
                    var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                        e = this.options;
                    if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
                        var n = w(e.bgPos);
                        i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
                    }
                    return this._setIconStyles(i, "icon"), i
                },
                createShadow: function() {
                    return null
                }
            });
            mn.Default = fn;
            var On = ln.extend({
                    options: {
                        tileSize: 256,
                        opacity: 1,
                        updateWhenIdle: te,
                        updateWhenZooming: !0,
                        updateInterval: 200,
                        zIndex: 1,
                        bounds: null,
                        minZoom: 0,
                        maxZoom: void 0,
                        maxNativeZoom: void 0,
                        minNativeZoom: void 0,
                        noWrap: !1,
                        pane: "tilePane",
                        className: "",
                        keepBuffer: 2
                    },
                    initialize: function(t) {
                        l(this, t)
                    },
                    onAdd: function() {
                        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
                    },
                    beforeAdd: function(t) {
                        t._addZoomLimit(this)
                    },
                    onRemove: function(t) {
                        this._removeAllTiles(), K(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
                    },
                    bringToFront: function() {
                        return this._map && (X(this._container), this._setAutoZIndex(Math.max)), this
                    },
                    bringToBack: function() {
                        return this._map && (J(this._container), this._setAutoZIndex(Math.min)), this
                    },
                    getContainer: function() {
                        return this._container
                    },
                    setOpacity: function(t) {
                        return this.options.opacity = t, this._updateOpacity(), this
                    },
                    setZIndex: function(t) {
                        return this.options.zIndex = t, this._updateZIndex(), this
                    },
                    isLoading: function() {
                        return this._loading
                    },
                    redraw: function() {
                        return this._map && (this._removeAllTiles(), this._update()), this
                    },
                    getEvents: function() {
                        var t = {
                            viewprereset: this._invalidateAll,
                            viewreset: this._resetView,
                            zoom: this._resetView,
                            moveend: this._onMoveEnd
                        };
                        return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                    },
                    createTile: function() {
                        return document.createElement("div")
                    },
                    getTileSize: function() {
                        var t = this.options.tileSize;
                        return t instanceof x ? t : new x(t, t)
                    },
                    _updateZIndex: function() {
                        this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                    },
                    _setAutoZIndex: function(t) {
                        for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
                        isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
                    },
                    _updateOpacity: function() {
                        if (this._map && !Oi) {
                            nt(this._container, this.options.opacity);
                            var t = +new Date,
                                i = !1,
                                e = !1;
                            for (var n in this._tiles) {
                                var o = this._tiles[n];
                                if (o.current && o.loaded) {
                                    var s = Math.min(1, (t - o.loaded) / 200);
                                    nt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
                                }
                            }
                            e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
                        }
                    },
                    _onOpaqueTile: r,
                    _initContainer: function() {
                        this._container || (this._container = G("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                    },
                    _updateLevels: function() {
                        var t = this._tileZoom,
                            i = this.options.maxZoom;
                        if (void 0 !== t) {
                            for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (K(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
                            var n = this._levels[t],
                                o = this._map;
                            return n || (n = this._levels[t] = {}, n.el = G("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
                        }
                    },
                    _onUpdateLevel: r,
                    _onRemoveLevel: r,
                    _onCreateLevel: r,
                    _pruneTiles: function() {
                        if (this._map) {
                            var t, i, e = this._map.getZoom();
                            if (e > this.options.maxZoom || e < this.options.minZoom) return void this._removeAllTiles();
                            for (t in this._tiles) i = this._tiles[t], i.retain = i.current;
                            for (t in this._tiles)
                                if (i = this._tiles[t], i.current && !i.active) {
                                    var n = i.coords;
                                    this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                                }
                            for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                        }
                    },
                    _removeTilesAtZoom: function(t) {
                        for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
                    },
                    _removeAllTiles: function() {
                        for (var t in this._tiles) this._removeTile(t)
                    },
                    _invalidateAll: function() {
                        for (var t in this._levels) K(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                        this._removeAllTiles(), this._tileZoom = void 0
                    },
                    _retainParent: function(t, i, e, n) {
                        var o = Math.floor(t / 2),
                            s = Math.floor(i / 2),
                            r = e - 1,
                            a = new x(+o, +s);
                        a.z = +r;
                        var h = this._tileCoordsToKey(a),
                            u = this._tiles[h];
                        return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n))
                    },
                    _retainChildren: function(t, i, e, n) {
                        for (var o = 2 * t; o < 2 * t + 2; o++)
                            for (var s = 2 * i; s < 2 * i + 2; s++) {
                                var r = new x(o, s);
                                r.z = e + 1;
                                var a = this._tileCoordsToKey(r),
                                    h = this._tiles[a];
                                h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
                            }
                    },
                    _resetView: function(t) {
                        var i = t && (t.pinch || t.flyTo);
                        this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
                    },
                    _animateZoom: function(t) {
                        this._setView(t.center, t.zoom, !0, t.noUpdate)
                    },
                    _clampZoom: function(t) {
                        var i = this.options;
                        return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
                    },
                    _setView: function(t, i, e, n) {
                        var o = this._clampZoom(Math.round(i));
                        (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                        var s = this.options.updateWhenZooming && o !== this._tileZoom;
                        n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
                    },
                    _setZoomTransforms: function(t, i) {
                        for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
                    },
                    _setZoomTransform: function(t, i, e) {
                        var n = this._map.getZoomScale(e, t.zoom),
                            o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
                        Qi ? rt(t.el, o, n) : at(t.el, o)
                    },
                    _resetGrid: function() {
                        var t = this._map,
                            i = t.options.crs,
                            e = this._tileSize = this.getTileSize(),
                            n = this._tileZoom,
                            o = this._map.getPixelWorldBounds(this._tileZoom);
                        o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
                    },
                    _onMoveEnd: function() {
                        this._map && !this._map._animatingZoom && this._update()
                    },
                    _getTiledPixelBounds: function(t) {
                        var i = this._map,
                            e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                            n = i.getZoomScale(e, this._tileZoom),
                            o = i.project(t, this._tileZoom).floor(),
                            s = i.getSize().divideBy(2 * n);
                        return new P(o.subtract(s), o.add(s))
                    },
                    _update: function(t) {
                        var i = this._map;
                        if (i) {
                            var e = this._clampZoom(i.getZoom());
                            if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
                                var n = this._getTiledPixelBounds(t),
                                    o = this._pxBoundsToTileRange(n),
                                    s = o.getCenter(),
                                    r = [],
                                    a = this.options.keepBuffer,
                                    h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                                if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                                for (var u in this._tiles) {
                                    var l = this._tiles[u].coords;
                                    l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1)
                                }
                                if (Math.abs(e - this._tileZoom) > 1) return void this._setView(t, e);
                                for (var c = o.min.y; c <= o.max.y; c++)
                                    for (var _ = o.min.x; _ <= o.max.x; _++) {
                                        var d = new x(_, c);
                                        if (d.z = this._tileZoom, this._isValidTile(d)) {
                                            var p = this._tiles[this._tileCoordsToKey(d)];
                                            p ? p.current = !0 : r.push(d)
                                        }
                                    }
                                if (r.sort(function(t, i) {
                                        return t.distanceTo(s) - i.distanceTo(s)
                                    }), 0 !== r.length) {
                                    this._loading || (this._loading = !0, this.fire("loading"));
                                    var m = document.createDocumentFragment();
                                    for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                                    this._level.el.appendChild(m)
                                }
                            }
                        }
                    },
                    _isValidTile: function(t) {
                        var i = this._map.options.crs;
                        if (!i.infinite) {
                            var e = this._globalTileRange;
                            if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
                        }
                        if (!this.options.bounds) return !0;
                        var n = this._tileCoordsToBounds(t);
                        return z(this.options.bounds).overlaps(n)
                    },
                    _keyToBounds: function(t) {
                        return this._tileCoordsToBounds(this._keyToTileCoords(t))
                    },
                    _tileCoordsToNwSe: function(t) {
                        var i = this._map,
                            e = this.getTileSize(),
                            n = t.scaleBy(e),
                            o = n.add(e);
                        return [i.unproject(n, t.z), i.unproject(o, t.z)]
                    },
                    _tileCoordsToBounds: function(t) {
                        var i = this._tileCoordsToNwSe(t),
                            e = new T(i[0], i[1]);
                        return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
                    },
                    _tileCoordsToKey: function(t) {
                        return t.x + ":" + t.y + ":" + t.z
                    },
                    _keyToTileCoords: function(t) {
                        var i = t.split(":"),
                            e = new x(+i[0], +i[1]);
                        return e.z = +i[2], e
                    },
                    _removeTile: function(t) {
                        var i = this._tiles[t];
                        i && (K(i.el), delete this._tiles[t], this.fire("tileunload", {
                            tile: i.el,
                            coords: this._keyToTileCoords(t)
                        }))
                    },
                    _initTile: function(t) {
                        Q(t, "leaflet-tile");
                        var i = this.getTileSize();
                        t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, Oi && this.options.opacity < 1 && nt(t, this.options.opacity), Di && !ji && (t.style.WebkitBackfaceVisibility = "hidden")
                    },
                    _addTile: function(t, i) {
                        var n = this._getTilePos(t),
                            o = this._tileCoordsToKey(t),
                            s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
                        this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), at(s, n), this._tiles[o] = {
                            el: s,
                            coords: t,
                            current: !0
                        }, i.appendChild(s), this.fire("tileloadstart", {
                            tile: s,
                            coords: t
                        })
                    },
                    _tileReady: function(t, i, n) {
                        i && this.fire("tileerror", {
                            error: i,
                            tile: n,
                            coords: t
                        });
                        var o = this._tileCoordsToKey(t);
                        (n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (nt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (Q(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                            tile: n.el,
                            coords: t
                        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Oi || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
                    },
                    _getTilePos: function(t) {
                        return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                    },
                    _wrapCoords: function(t) {
                        var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
                        return i.z = t.z, i
                    },
                    _pxBoundsToTileRange: function(t) {
                        var i = this.getTileSize();
                        return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
                    },
                    _noTilesToLoad: function() {
                        for (var t in this._tiles)
                            if (!this._tiles[t].loaded) return !1;
                        return !0
                    }
                }),
                Rn = On.extend({
                    options: {
                        minZoom: 0,
                        maxZoom: 18,
                        subdomains: "abc",
                        errorTileUrl: "",
                        zoomOffset: 0,
                        tms: !1,
                        zoomReverse: !1,
                        detectRetina: !1,
                        crossOrigin: !1
                    },
                    initialize: function(t, i) {
                        this._url = t, i = l(this, i), i.detectRetina && he && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), Di || this.on("tileunload", this._onTileRemove)
                    },
                    setUrl: function(t, i) {
                        return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this
                    },
                    createTile: function(t, i) {
                        var n = document.createElement("img");
                        return mt(n, "load", e(this._tileOnLoad, this, i, n)), mt(n, "error", e(this._tileOnError, this, i, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
                    },
                    getTileUrl: function(t) {
                        var e = {
                            r: he ? "@2x" : "",
                            s: this._getSubdomain(t),
                            x: t.x,
                            y: t.y,
                            z: this._getZoomForUrl()
                        };
                        if (this._map && !this._map.options.crs.infinite) {
                            var n = this._globalTileRange.max.y - t.y;
                            this.options.tms && (e.y = n), e["-y"] = n
                        }
                        return _(this._url, i(e, this.options))
                    },
                    _tileOnLoad: function(t, i) {
                        Oi ? setTimeout(e(t, this, null, i), 0) : t(null, i)
                    },
                    _tileOnError: function(t, i, e) {
                        var n = this.options.errorTileUrl;
                        n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
                    },
                    _onTileRemove: function(t) {
                        t.tile.onload = null
                    },
                    _getZoomForUrl: function() {
                        var t = this._tileZoom,
                            i = this.options.maxZoom,
                            e = this.options.zoomReverse,
                            n = this.options.zoomOffset;
                        return e && (t = i - t), t + n
                    },
                    _getSubdomain: function(t) {
                        var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
                        return this.options.subdomains[i]
                    },
                    _abortLoading: function() {
                        var t, i;
                        for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && (i = this._tiles[t].el, i.onload = r, i.onerror = r, i.complete || (i.src = vi, K(i), delete this._tiles[t]))
                    },
                    _removeTile: function(t) {
                        var i = this._tiles[t];
                        if (i) return Hi || i.el.setAttribute("src", vi), On.prototype._removeTile.call(this, t)
                    },
                    _tileReady: function(t, i, e) {
                        if (this._map && (!e || e.getAttribute("src") !== vi)) return On.prototype._tileReady.call(this, t, i, e)
                    }
                }),
                Nn = Rn.extend({
                    defaultWmsParams: {
                        service: "WMS",
                        request: "GetMap",
                        layers: "",
                        styles: "",
                        format: "image/jpeg",
                        transparent: !1,
                        version: "1.1.1"
                    },
                    options: {
                        crs: null,
                        uppercase: !1
                    },
                    initialize: function(t, e) {
                        this._url = t;
                        var n = i({}, this.defaultWmsParams);
                        for (var o in e) o in this.options || (n[o] = e[o]);
                        e = l(this, e);
                        var s = e.detectRetina && he ? 2 : 1,
                            r = this.getTileSize();
                        n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
                    },
                    onAdd: function(t) {
                        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                        var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
                        this.wmsParams[i] = this._crs.code, Rn.prototype.onAdd.call(this, t)
                    },
                    getTileUrl: function(t) {
                        var i = this._tileCoordsToNwSe(t),
                            e = this._crs,
                            n = b(e.project(i[0]), e.project(i[1])),
                            o = n.min,
                            s = n.max,
                            r = (this._wmsVersion >= 1.3 && this._crs === hn ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                            a = Rn.prototype.getTileUrl.call(this, t);
                        return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
                    },
                    setParams: function(t, e) {
                        return i(this.wmsParams, t), e || this.redraw(), this
                    }
                });
            Rn.WMS = Nn, hi.wms = ui;
            var Dn = ln.extend({
                    options: {
                        padding: .1,
                        tolerance: 0
                    },
                    initialize: function(t) {
                        l(this, t), n(this), this._layers = this._layers || {}
                    },
                    onAdd: function() {
                        this._container || (this._initContainer(), this._zoomAnimated && Q(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                    },
                    onRemove: function() {
                        this.off("update", this._updatePaths, this), this._destroyContainer()
                    },
                    getEvents: function() {
                        var t = {
                            viewreset: this._reset,
                            zoom: this._onZoom,
                            moveend: this._update,
                            zoomend: this._onZoomEnd
                        };
                        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                    },
                    _onAnimZoom: function(t) {
                        this._updateTransform(t.center, t.zoom)
                    },
                    _onZoom: function() {
                        this._updateTransform(this._map.getCenter(), this._map.getZoom())
                    },
                    _updateTransform: function(t, i) {
                        var e = this._map.getZoomScale(i, this._zoom),
                            n = ht(this._container),
                            o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                            s = this._map.project(this._center, i),
                            r = this._map.project(t, i),
                            a = r.subtract(s),
                            h = o.multiplyBy(-e).add(n).add(o).subtract(a);
                        Qi ? rt(this._container, h, e) : at(this._container, h)
                    },
                    _reset: function() {
                        this._update(), this._updateTransform(this._center, this._zoom);
                        for (var t in this._layers) this._layers[t]._reset()
                    },
                    _onZoomEnd: function() {
                        for (var t in this._layers) this._layers[t]._project()
                    },
                    _updatePaths: function() {
                        for (var t in this._layers) this._layers[t]._update()
                    },
                    _update: function() {
                        var t = this.options.padding,
                            i = this._map.getSize(),
                            e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
                        this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                    }
                }),
                jn = Dn.extend({
                    getEvents: function() {
                        var t = Dn.prototype.getEvents.call(this);
                        return t.viewprereset = this._onViewPreReset, t
                    },
                    _onViewPreReset: function() {
                        this._postponeUpdatePaths = !0
                    },
                    onAdd: function() {
                        Dn.prototype.onAdd.call(this), this._draw()
                    },
                    _initContainer: function() {
                        var t = this._container = document.createElement("canvas");
                        mt(t, "mousemove", o(this._onMouseMove, 32, this), this), mt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), mt(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
                    },
                    _destroyContainer: function() {
                        g(this._redrawRequest), delete this._ctx, K(this._container), ft(this._container), delete this._container
                    },
                    _updatePaths: function() {
                        if (!this._postponeUpdatePaths) {
                            var t;
                            this._redrawBounds = null;
                            for (var i in this._layers) t = this._layers[i], t._update();
                            this._redraw()
                        }
                    },
                    _update: function() {
                        if (!this._map._animatingZoom || !this._bounds) {
                            Dn.prototype._update.call(this);
                            var t = this._bounds,
                                i = this._container,
                                e = t.getSize(),
                                n = he ? 2 : 1;
                            at(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", he && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                        }
                    },
                    _reset: function() {
                        Dn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                    },
                    _initPath: function(t) {
                        this._updateDashArray(t), this._layers[n(t)] = t;
                        var i = t._order = {
                            layer: t,
                            prev: this._drawLast,
                            next: null
                        };
                        this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
                    },
                    _addPath: function(t) {
                        this._requestRedraw(t)
                    },
                    _removePath: function(t) {
                        var i = t._order,
                            e = i.next,
                            o = i.prev;
                        e ? e.prev = o : this._drawLast = o, o ? o.next = e : this._drawFirst = e, delete t._order, delete this._layers[n(t)], this._requestRedraw(t)
                    },
                    _updatePath: function(t) {
                        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                    },
                    _updateStyle: function(t) {
                        this._updateDashArray(t), this._requestRedraw(t)
                    },
                    _updateDashArray: function(t) {
                        if ("string" == typeof t.options.dashArray) {
                            var i, e, n = t.options.dashArray.split(/[, ]+/),
                                o = [];
                            for (e = 0; e < n.length; e++) {
                                if (i = Number(n[e]), isNaN(i)) return;
                                o.push(i)
                            }
                            t.options._dashArray = o
                        } else t.options._dashArray = t.options.dashArray
                    },
                    _requestRedraw: function(t) {
                        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
                    },
                    _extendRedrawBounds: function(t) {
                        if (t._pxBounds) {
                            var i = (t.options.weight || 0) + 1;
                            this._redrawBounds = this._redrawBounds || new P, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
                        }
                    },
                    _redraw: function() {
                        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                    },
                    _clear: function() {
                        var t = this._redrawBounds;
                        if (t) {
                            var i = t.getSize();
                            this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
                        } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
                    },
                    _draw: function() {
                        var t, i = this._redrawBounds;
                        if (this._ctx.save(), i) {
                            var e = i.getSize();
                            this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
                        }
                        this._drawing = !0;
                        for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                        this._drawing = !1, this._ctx.restore()
                    },
                    _updatePoly: function(t, i) {
                        if (this._drawing) {
                            var e, n, o, s, r = t._parts,
                                a = r.length,
                                h = this._ctx;
                            if (a) {
                                for (h.beginPath(), e = 0; e < a; e++) {
                                    for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                                    i && h.closePath()
                                }
                                this._fillStroke(h, t)
                            }
                        }
                    },
                    _updateCircle: function(t) {
                        if (this._drawing && !t._empty()) {
                            var i = t._point,
                                e = this._ctx,
                                n = Math.max(Math.round(t._radius), 1),
                                o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                            1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
                        }
                    },
                    _fillStroke: function(t, i) {
                        var e = i.options;
                        e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
                    },
                    _onClick: function(t) {
                        for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) i = o.layer, i.options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
                        e && (zt(t), this._fireEvent([e], t))
                    },
                    _onMouseMove: function(t) {
                        if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                            var i = this._map.mouseEventToLayerPoint(t);
                            this._handleMouseHover(t, i)
                        }
                    },
                    _handleMouseOut: function(t) {
                        var i = this._hoveredLayer;
                        i && (tt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
                    },
                    _handleMouseHover: function(t, i) {
                        for (var e, n, o = this._drawFirst; o; o = o.next) e = o.layer, e.options.interactive && e._containsPoint(i) && (n = e);
                        n !== this._hoveredLayer && (this._handleMouseOut(t), n && (Q(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
                    },
                    _fireEvent: function(t, i, e) {
                        this._map._fireDOMEvent(i, e || i.type, t)
                    },
                    _bringToFront: function(t) {
                        var i = t._order;
                        if (i) {
                            var e = i.next,
                                n = i.prev;
                            e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
                        }
                    },
                    _bringToBack: function(t) {
                        var i = t._order;
                        if (i) {
                            var e = i.next,
                                n = i.prev;
                            n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
                        }
                    }
                }),
                Wn = function() {
                    try {
                        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                            function(t) {
                                return document.createElement("<lvml:" + t + ' class="lvml">')
                            }
                    } catch (t) {
                        return function(t) {
                            return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                        }
                    }
                }(),
                Hn = {
                    _initContainer: function() {
                        this._container = G("div", "leaflet-vml-container")
                    },
                    _update: function() {
                        this._map._animatingZoom || (Dn.prototype._update.call(this), this.fire("update"))
                    },
                    _initPath: function(t) {
                        var i = t._container = Wn("shape");
                        Q(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = Wn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
                    },
                    _addPath: function(t) {
                        var i = t._container;
                        this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
                    },
                    _removePath: function(t) {
                        var i = t._container;
                        K(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
                    },
                    _updateStyle: function(t) {
                        var i = t._stroke,
                            e = t._fill,
                            n = t.options,
                            o = t._container;
                        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = Wn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = gi(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = Wn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
                    },
                    _updateCircle: function(t) {
                        var i = t._point.round(),
                            e = Math.round(t._radius),
                            n = Math.round(t._radiusY || e);
                        this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
                    },
                    _setPath: function(t, i) {
                        t._path.v = i
                    },
                    _bringToFront: function(t) {
                        X(t._container)
                    },
                    _bringToBack: function(t) {
                        J(t._container)
                    }
                },
                Fn = ce ? Wn : E,
                Un = Dn.extend({
                    getEvents: function() {
                        var t = Dn.prototype.getEvents.call(this);
                        return t.zoomstart = this._onZoomStart, t
                    },
                    _initContainer: function() {
                        this._container = Fn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Fn("g"), this._container.appendChild(this._rootGroup)
                    },
                    _destroyContainer: function() {
                        K(this._container), ft(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                    },
                    _onZoomStart: function() {
                        this._update()
                    },
                    _update: function() {
                        if (!this._map._animatingZoom || !this._bounds) {
                            Dn.prototype._update.call(this);
                            var t = this._bounds,
                                i = t.getSize(),
                                e = this._container;
                            this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), at(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
                        }
                    },
                    _initPath: function(t) {
                        var i = t._path = Fn("path");
                        t.options.className && Q(i, t.options.className), t.options.interactive && Q(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
                    },
                    _addPath: function(t) {
                        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                    },
                    _removePath: function(t) {
                        K(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
                    },
                    _updatePath: function(t) {
                        t._project(), t._update()
                    },
                    _updateStyle: function(t) {
                        var i = t._path,
                            e = t.options;
                        i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
                    },
                    _updatePoly: function(t, i) {
                        this._setPath(t, k(t._parts, i))
                    },
                    _updateCircle: function(t) {
                        var i = t._point,
                            e = Math.max(Math.round(t._radius), 1),
                            n = Math.max(Math.round(t._radiusY), 1) || e,
                            o = "a" + e + "," + n + " 0 1,0 ",
                            s = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + o + 2 * e + ",0 " + o + 2 * -e + ",0 ";
                        this._setPath(t, s)
                    },
                    _setPath: function(t, i) {
                        t._path.setAttribute("d", i)
                    },
                    _bringToFront: function(t) {
                        X(t._path)
                    },
                    _bringToBack: function(t) {
                        J(t._path)
                    }
                });
            ce && Un.include(Hn), Re.include({
                getRenderer: function(t) {
                    var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                    return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
                },
                _getPaneRenderer: function(t) {
                    if ("overlayPane" === t || void 0 === t) return !1;
                    var i = this._paneRenderers[t];
                    return void 0 === i && (i = this._createRenderer({
                        pane: t
                    }), this._paneRenderers[t] = i), i
                },
                _createRenderer: function(t) {
                    return this.options.preferCanvas && li(t) || ci(t)
                }
            });
            var Vn = Ln.extend({
                initialize: function(t, i) {
                    Ln.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
                },
                setBounds: function(t) {
                    return this.setLatLngs(this._boundsToLatLngs(t))
                },
                _boundsToLatLngs: function(t) {
                    return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                }
            });
            Un.create = Fn, Un.pointsToPath = k, bn.geometryToLayer = Jt, bn.coordsToLatLng = $t, bn.coordsToLatLngs = Qt, bn.latLngToCoords = ti, bn.latLngsToCoords = ii, bn.getFeature = ei, bn.asFeature = ni, Re.mergeOptions({
                boxZoom: !0
            });
            var qn = Ke.extend({
                initialize: function(t) {
                    this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
                },
                addHooks: function() {
                    mt(this._container, "mousedown", this._onMouseDown, this)
                },
                removeHooks: function() {
                    ft(this._container, "mousedown", this._onMouseDown, this)
                },
                moved: function() {
                    return this._moved
                },
                _destroy: function() {
                    K(this._pane), delete this._pane
                },
                _resetState: function() {
                    this._resetStateTimeout = 0, this._moved = !1
                },
                _clearDeferredResetState: function() {
                    0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
                },
                _onMouseDown: function(t) {
                    if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                    this._clearDeferredResetState(), this._resetState(), Si(), ut(), this._startPoint = this._map.mouseEventToContainerPoint(t),
                        mt(document, {
                            contextmenu: Lt,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                },
                _onMouseMove: function(t) {
                    this._moved || (this._moved = !0, this._box = G("div", "leaflet-zoom-box", this._container), Q(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                    var i = new P(this._point, this._startPoint),
                        e = i.getSize();
                    at(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
                },
                _finish: function() {
                    this._moved && (K(this._box), tt(this._container, "leaflet-crosshair")), Zi(), lt(), ft(document, {
                        contextmenu: Lt,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown
                    }, this)
                },
                _onMouseUp: function(t) {
                    if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                        this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
                        var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                        this._map.fitBounds(i).fire("boxzoomend", {
                            boxZoomBounds: i
                        })
                    }
                },
                _onKeyDown: function(t) {
                    27 === t.keyCode && this._finish()
                }
            });
            Re.addInitHook("addHandler", "boxZoom", qn), Re.mergeOptions({
                doubleClickZoom: !0
            });
            var Gn = Ke.extend({
                addHooks: function() {
                    this._map.on("dblclick", this._onDoubleClick, this)
                },
                removeHooks: function() {
                    this._map.off("dblclick", this._onDoubleClick, this)
                },
                _onDoubleClick: function(t) {
                    var i = this._map,
                        e = i.getZoom(),
                        n = i.options.zoomDelta,
                        o = t.originalEvent.shiftKey ? e - n : e + n;
                    "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
                }
            });
            Re.addInitHook("addHandler", "doubleClickZoom", Gn), Re.mergeOptions({
                dragging: !0,
                inertia: !ji,
                inertiaDeceleration: 3400,
                inertiaMaxSpeed: 1 / 0,
                easeLinearity: .2,
                worldCopyJump: !1,
                maxBoundsViscosity: 0
            });
            var Kn = Ke.extend({
                addHooks: function() {
                    if (!this._draggable) {
                        var t = this._map;
                        this._draggable = new tn(t._mapPane, t._container), this._draggable.on({
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                    }
                    Q(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
                },
                removeHooks: function() {
                    tt(this._map._container, "leaflet-grab"), tt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                moving: function() {
                    return this._draggable && this._draggable._moving
                },
                _onDragStart: function() {
                    var t = this._map;
                    if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                        var i = z(this._map.options.maxBounds);
                        this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                    } else this._offsetLimit = null;
                    t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                },
                _onDrag: function(t) {
                    if (this._map.options.inertia) {
                        var i = this._lastTime = +new Date,
                            e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                        this._positions.push(e), this._times.push(i), this._prunePositions(i)
                    }
                    this._map.fire("move", t).fire("drag", t)
                },
                _prunePositions: function(t) {
                    for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
                },
                _onZoomEnd: function() {
                    var t = this._map.getSize().divideBy(2),
                        i = this._map.latLngToLayerPoint([0, 0]);
                    this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                },
                _viscousLimit: function(t, i) {
                    return t - (t - i) * this._viscosity
                },
                _onPreDragLimit: function() {
                    if (this._viscosity && this._offsetLimit) {
                        var t = this._draggable._newPos.subtract(this._draggable._startPos),
                            i = this._offsetLimit;
                        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                    }
                },
                _onPreDragWrap: function() {
                    var t = this._worldWidth,
                        i = Math.round(t / 2),
                        e = this._initialWorldOffset,
                        n = this._draggable._newPos.x,
                        o = (n - i + e) % t + i - e,
                        s = (n + i + e) % t - i - e,
                        r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
                    this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
                },
                _onDragEnd: function(t) {
                    var i = this._map,
                        e = i.options,
                        n = !e.inertia || this._times.length < 2;
                    if (i.fire("dragend", t), n) i.fire("moveend");
                    else {
                        this._prunePositions(+new Date);
                        var o = this._lastPos.subtract(this._positions[0]),
                            s = (this._lastTime - this._times[0]) / 1e3,
                            r = e.easeLinearity,
                            a = o.multiplyBy(r / s),
                            h = a.distanceTo([0, 0]),
                            u = Math.min(e.inertiaMaxSpeed, h),
                            l = a.multiplyBy(u / h),
                            c = u / (e.inertiaDeceleration * r),
                            _ = l.multiplyBy(-c / 2).round();
                        _.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function() {
                            i.panBy(_, {
                                duration: c,
                                easeLinearity: r,
                                noMoveStart: !0,
                                animate: !0
                            })
                        })) : i.fire("moveend")
                    }
                }
            });
            Re.addInitHook("addHandler", "dragging", Kn), Re.mergeOptions({
                keyboard: !0,
                keyboardPanDelta: 80
            });
            var Yn = Ke.extend({
                keyCodes: {
                    left: [37],
                    right: [39],
                    down: [40],
                    up: [38],
                    zoomIn: [187, 107, 61, 171],
                    zoomOut: [189, 109, 54, 173]
                },
                initialize: function(t) {
                    this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
                },
                addHooks: function() {
                    var t = this._map._container;
                    t.tabIndex <= 0 && (t.tabIndex = "0"), mt(t, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this), this._map.on({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                removeHooks: function() {
                    this._removeHooks(), ft(this._map._container, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this), this._map.off({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                _onMouseDown: function() {
                    if (!this._focused) {
                        var t = document.body,
                            i = document.documentElement,
                            e = t.scrollTop || i.scrollTop,
                            n = t.scrollLeft || i.scrollLeft;
                        this._map._container.focus(), window.scrollTo(n, e)
                    }
                },
                _onFocus: function() {
                    this._focused = !0, this._map.fire("focus")
                },
                _onBlur: function() {
                    this._focused = !1, this._map.fire("blur")
                },
                _setPanDelta: function(t) {
                    var i, e, n = this._panKeys = {},
                        o = this.keyCodes;
                    for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
                    for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
                    for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
                    for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
                },
                _setZoomDelta: function(t) {
                    var i, e, n = this._zoomKeys = {},
                        o = this.keyCodes;
                    for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
                    for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
                },
                _addHooks: function() {
                    mt(document, "keydown", this._onKeyDown, this)
                },
                _removeHooks: function() {
                    ft(document, "keydown", this._onKeyDown, this)
                },
                _onKeyDown: function(t) {
                    if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                        var i, e = t.keyCode,
                            n = this._map;
                        if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                        else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                        else {
                            if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                            n.closePopup()
                        }
                        Lt(t)
                    }
                }
            });
            Re.addInitHook("addHandler", "keyboard", Yn), Re.mergeOptions({
                scrollWheelZoom: !0,
                wheelDebounceTime: 40,
                wheelPxPerZoomLevel: 60
            });
            var Xn = Ke.extend({
                addHooks: function() {
                    mt(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
                },
                removeHooks: function() {
                    ft(this._map._container, "mousewheel", this._onWheelScroll, this)
                },
                _onWheelScroll: function(t) {
                    var i = Tt(t),
                        n = this._map.options.wheelDebounceTime;
                    this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                    var o = Math.max(n - (+new Date - this._startTime), 0);
                    clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Lt(t)
                },
                _performZoom: function() {
                    var t = this._map,
                        i = t.getZoom(),
                        e = this._map.options.zoomSnap || 0;
                    t._stop();
                    var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                        o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                        s = e ? Math.ceil(o / e) * e : o,
                        r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
                    this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
                }
            });
            Re.addInitHook("addHandler", "scrollWheelZoom", Xn), Re.mergeOptions({
                tap: !0,
                tapTolerance: 15
            });
            var Jn = Ke.extend({
                addHooks: function() {
                    mt(this._map._container, "touchstart", this._onDown, this)
                },
                removeHooks: function() {
                    ft(this._map._container, "touchstart", this._onDown, this)
                },
                _onDown: function(t) {
                    if (t.touches) {
                        if (Pt(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                        var i = t.touches[0],
                            n = i.target;
                        this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && Q(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function() {
                            this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                        }, this), 1e3), this._simulateEvent("mousedown", i), mt(document, {
                            touchmove: this._onMove,
                            touchend: this._onUp
                        }, this)
                    }
                },
                _onUp: function(t) {
                    if (clearTimeout(this._holdTimeout), ft(document, {
                            touchmove: this._onMove,
                            touchend: this._onUp
                        }, this), this._fireClick && t && t.changedTouches) {
                        var i = t.changedTouches[0],
                            e = i.target;
                        e && e.tagName && "a" === e.tagName.toLowerCase() && tt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
                    }
                },
                _isTapValid: function() {
                    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                },
                _onMove: function(t) {
                    var i = t.touches[0];
                    this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
                },
                _simulateEvent: function(t, i) {
                    var e = document.createEvent("MouseEvents");
                    e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
                }
            });
            se && !oe && Re.addInitHook("addHandler", "tap", Jn), Re.mergeOptions({
                touchZoom: se && !ji,
                bounceAtZoomLimits: !0
            });
            var $n = Ke.extend({
                addHooks: function() {
                    Q(this._map._container, "leaflet-touch-zoom"), mt(this._map._container, "touchstart", this._onTouchStart, this)
                },
                removeHooks: function() {
                    tt(this._map._container, "leaflet-touch-zoom"), ft(this._map._container, "touchstart", this._onTouchStart, this)
                },
                _onTouchStart: function(t) {
                    var i = this._map;
                    if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                        var e = i.mouseEventToContainerPoint(t.touches[0]),
                            n = i.mouseEventToContainerPoint(t.touches[1]);
                        this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), mt(document, "touchmove", this._onTouchMove, this), mt(document, "touchend", this._onTouchEnd, this), Pt(t)
                    }
                },
                _onTouchMove: function(t) {
                    if (t.touches && 2 === t.touches.length && this._zooming) {
                        var i = this._map,
                            n = i.mouseEventToContainerPoint(t.touches[0]),
                            o = i.mouseEventToContainerPoint(t.touches[1]),
                            s = n.distanceTo(o) / this._startDist;
                        if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
                            if (this._center = this._startLatLng, 1 === s) return
                        } else {
                            var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                            if (1 === s && 0 === r.x && 0 === r.y) return;
                            this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                        }
                        this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
                        var a = e(i._move, i, this._center, this._zoom, {
                            pinch: !0,
                            round: !1
                        });
                        this._animRequest = f(a, this, !0), Pt(t)
                    }
                },
                _onTouchEnd: function() {
                    if (!this._moved || !this._zooming) return void(this._zooming = !1);
                    this._zooming = !1, g(this._animRequest), ft(document, "touchmove", this._onTouchMove), ft(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))
                }
            });
            Re.addInitHook("addHandler", "touchZoom", $n), Re.BoxZoom = qn, Re.DoubleClickZoom = Gn, Re.Drag = Kn, Re.Keyboard = Yn, Re.ScrollWheelZoom = Xn, Re.Tap = Jn, Re.TouchZoom = $n, Object.freeze = di, t.version = "1.4.0", t.Control = Ne, t.control = De, t.Browser = _e, t.Evented = bi, t.Mixin = Xe, t.Util = Pi, t.Class = v, t.Handler = Ke, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = Ie, t.DomUtil = Ee, t.PosAnimation = Oe, t.Draggable = tn, t.LineUtil = en, t.PolyUtil = nn, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = S, t.transformation = Z, t.Projection = rn, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = zi, t.GeoJSON = bn, t.geoJSON = oi, t.geoJson = zn, t.Layer = ln, t.LayerGroup = cn, t.layerGroup = _n, t.FeatureGroup = dn, t.featureGroup = pn, t.ImageOverlay = Mn, t.imageOverlay = Cn, t.VideoOverlay = Sn, t.videoOverlay = si, t.DivOverlay = Zn, t.Popup = En, t.popup = kn, t.Tooltip = Bn, t.tooltip = An, t.Icon = mn, t.icon = Vt, t.DivIcon = In, t.divIcon = ri, t.Marker = vn, t.marker = qt, t.TileLayer = Rn, t.tileLayer = hi, t.GridLayer = On, t.gridLayer = ai, t.SVG = Un, t.svg = ci, t.Renderer = Dn, t.Canvas = jn, t.canvas = li, t.Path = yn, t.CircleMarker = xn, t.circleMarker = Gt, t.Circle = wn, t.circle = Kt, t.Polyline = Pn, t.polyline = Yt, t.Polygon = Ln, t.polygon = Xt, t.Rectangle = Vn, t.rectangle = _i, t.Map = Re, t.map = Zt;
            var Qn = window.L;
            t.noConflict = function() {
                return window.L = Qn, this
            }, window.L = t
        });
    }, {}],
    5: [function(require, module, exports) {
        ! function(e, t) {
            "object" == typeof exports && exports && "string" != typeof exports.nodeName ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e.Mustache = {}, t(e.Mustache))
        }(this, function(e) {
            function t(e) {
                return "function" == typeof e
            }

            function n(e) {
                return v(e) ? "array" : typeof e
            }

            function r(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            function i(e, t) {
                return null != e && "object" == typeof e && t in e
            }

            function o(e, t) {
                return null != e && "object" != typeof e && e.hasOwnProperty && e.hasOwnProperty(t)
            }

            function s(e, t) {
                return w.call(e, t)
            }

            function a(e) {
                return !s(y, e)
            }

            function u(e) {
                return String(e).replace(/[&<>"'`=\/]/g, function(e) {
                    return x[e]
                })
            }

            function c(t, n) {
                function i(e) {
                    if ("string" == typeof e && (e = e.split(k, 2)), !v(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                    o = new RegExp(r(e[0]) + "\\s*"), s = new RegExp("\\s*" + r(e[1])), u = new RegExp("\\s*" + r("}" + e[1]))
                }
                if (!t) return [];
                var o, s, u, c = [],
                    f = [],
                    d = [],
                    g = !1,
                    w = !1;
                i(n || e.tags);
                for (var y, x, T, j, S, V, C = new h(t); !C.eos();) {
                    if (y = C.pos, T = C.scanUntil(o))
                        for (var O = 0, P = T.length; O < P; ++O) j = T.charAt(O), a(j) ? d.push(f.length) : w = !0, f.push(["text", j, y, y + 1]), y += 1, "\n" === j && function() {
                            if (g && !w)
                                for (; d.length;) delete f[d.pop()];
                            else d = [];
                            g = !1, w = !1
                        }();
                    if (!C.scan(o)) break;
                    if (g = !0, x = C.scan(U) || "name", C.scan(b), "=" === x ? (T = C.scanUntil(m), C.scan(m), C.scanUntil(s)) : "{" === x ? (T = C.scanUntil(u), C.scan(E), C.scanUntil(s), x = "&") : T = C.scanUntil(s), !C.scan(s)) throw new Error("Unclosed tag at " + C.pos);
                    if (S = [x, T, y, C.pos], f.push(S), "#" === x || "^" === x) c.push(S);
                    else if ("/" === x) {
                        if (!(V = c.pop())) throw new Error('Unopened section "' + T + '" at ' + y);
                        if (V[1] !== T) throw new Error('Unclosed section "' + V[1] + '" at ' + y)
                    } else "name" === x || "{" === x || "&" === x ? w = !0 : "=" === x && i(T)
                }
                if (V = c.pop()) throw new Error('Unclosed section "' + V[1] + '" at ' + C.pos);
                return l(p(f))
            }

            function p(e) {
                for (var t, n, r = [], i = 0, o = e.length; i < o; ++i)(t = e[i]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
                return r
            }

            function l(e) {
                for (var t, n, r = [], i = r, o = [], s = 0, a = e.length; s < a; ++s) switch (t = e[s], t[0]) {
                    case "#":
                    case "^":
                        i.push(t), o.push(t), i = t[4] = [];
                        break;
                    case "/":
                        n = o.pop(), n[5] = t[2], i = o.length > 0 ? o[o.length - 1][4] : r;
                        break;
                    default:
                        i.push(t)
                }
                return r
            }

            function h(e) {
                this.string = e, this.tail = e, this.pos = 0
            }

            function f(e, t) {
                this.view = e, this.cache = {
                    ".": this.view
                }, this.parent = t
            }

            function d() {
                this.cache = {}
            }
            var g = Object.prototype.toString,
                v = Array.isArray || function(e) {
                    return "[object Array]" === g.call(e)
                },
                w = RegExp.prototype.test,
                y = /\S/,
                x = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                b = /\s*/,
                k = /\s+/,
                m = /\s*=/,
                E = /\s*\}/,
                U = /#|\^|\/|>|\{|&|=|!/;
            h.prototype.eos = function() {
                return "" === this.tail
            }, h.prototype.scan = function(e) {
                var t = this.tail.match(e);
                if (!t || 0 !== t.index) return "";
                var n = t[0];
                return this.tail = this.tail.substring(n.length), this.pos += n.length, n
            }, h.prototype.scanUntil = function(e) {
                var t, n = this.tail.search(e);
                switch (n) {
                    case -1:
                        t = this.tail, this.tail = "";
                        break;
                    case 0:
                        t = "";
                        break;
                    default:
                        t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
                }
                return this.pos += t.length, t
            }, f.prototype.push = function(e) {
                return new f(e, this)
            }, f.prototype.lookup = function(e) {
                var n, r = this.cache;
                if (r.hasOwnProperty(e)) n = r[e];
                else {
                    for (var s, a, u, c = this, p = !1; c;) {
                        if (e.indexOf(".") > 0)
                            for (s = c.view, a = e.split("."), u = 0; null != s && u < a.length;) u === a.length - 1 && (p = i(s, a[u]) || o(s, a[u])), s = s[a[u++]];
                        else s = c.view[e], p = i(c.view, e);
                        if (p) {
                            n = s;
                            break
                        }
                        c = c.parent
                    }
                    r[e] = n
                }
                return t(n) && (n = n.call(this.view)), n
            }, d.prototype.clearCache = function() {
                this.cache = {}
            }, d.prototype.parse = function(t, n) {
                var r = this.cache,
                    i = t + ":" + (n || e.tags).join(":"),
                    o = r[i];
                return null == o && (o = r[i] = c(t, n)), o
            }, d.prototype.render = function(e, t, n, r) {
                var i = this.parse(e, r),
                    o = t instanceof f ? t : new f(t);
                return this.renderTokens(i, o, n, e, r)
            }, d.prototype.renderTokens = function(e, t, n, r, i) {
                for (var o, s, a, u = "", c = 0, p = e.length; c < p; ++c) a = void 0, o = e[c], s = o[0], "#" === s ? a = this.renderSection(o, t, n, r) : "^" === s ? a = this.renderInverted(o, t, n, r) : ">" === s ? a = this.renderPartial(o, t, n, i) : "&" === s ? a = this.unescapedValue(o, t) : "name" === s ? a = this.escapedValue(o, t) : "text" === s && (a = this.rawValue(o)), void 0 !== a && (u += a);
                return u
            }, d.prototype.renderSection = function(e, n, r, i) {
                function o(e) {
                    return s.render(e, n, r)
                }
                var s = this,
                    a = "",
                    u = n.lookup(e[1]);
                if (u) {
                    if (v(u))
                        for (var c = 0, p = u.length; c < p; ++c) a += this.renderTokens(e[4], n.push(u[c]), r, i);
                    else if ("object" == typeof u || "string" == typeof u || "number" == typeof u) a += this.renderTokens(e[4], n.push(u), r, i);
                    else if (t(u)) {
                        if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");
                        u = u.call(n.view, i.slice(e[3], e[5]), o), null != u && (a += u)
                    } else a += this.renderTokens(e[4], n, r, i);
                    return a
                }
            }, d.prototype.renderInverted = function(e, t, n, r) {
                var i = t.lookup(e[1]);
                if (!i || v(i) && 0 === i.length) return this.renderTokens(e[4], t, n, r)
            }, d.prototype.renderPartial = function(e, n, r, i) {
                if (r) {
                    var o = t(r) ? r(e[1]) : r[e[1]];
                    return null != o ? this.renderTokens(this.parse(o, i), n, r, o) : void 0
                }
            }, d.prototype.unescapedValue = function(e, t) {
                var n = t.lookup(e[1]);
                if (null != n) return n
            }, d.prototype.escapedValue = function(t, n) {
                var r = n.lookup(t[1]);
                if (null != r) return e.escape(r)
            }, d.prototype.rawValue = function(e) {
                return e[1]
            }, e.name = "mustache.js", e.version = "3.0.1", e.tags = ["{{", "}}"];
            var T = new d;
            return e.clearCache = function() {
                return T.clearCache()
            }, e.parse = function(e, t) {
                return T.parse(e, t)
            }, e.render = function(e, t, r, i) {
                if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');
                return T.render(e, t, r, i)
            }, e.to_html = function(n, r, i, o) {
                var s = e.render(n, r, i);
                if (!t(o)) return s;
                o(s)
            }, e.escape = u, e.Scanner = h, e.Context = f, e.Writer = d, e
        });
    }, {}],
    6: [function(require, module, exports) {
        module.exports = {
            "author": "Mapbox",
            "name": "mapbox.js",
            "description": "Mapbox plugin for Leaflet",
            "version": "3.3.1",
            "homepage": "http://mapbox.com/",
            "engines": {
                "node": ">=10"
            },
            "repository": {
                "type": "git",
                "url": "git://github.com/mapbox/mapbox.js.git"
            },
            "main": "src/index.js",
            "files": ["dist", "src", "*.md"],
            "dependencies": {
                "@mapbox/corslite": "0.0.7",
                "@mapbox/sanitize-caja": "^0.1.4",
                "leaflet": "1.4.0",
                "mustache": "3.0.1"
            },
            "scripts": {
                "test": "eslint src && phantomjs node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test/index.html && mocha test/docs.js",
                "prepublishOnly": "npm run build",
                "build": "make"
            },
            "license": "BSD-3-Clause",
            "devDependencies": {
                "browserify": "^16.5.0",
                "clean-css-cli": "^4.3.0",
                "eslint": "^6.8.0",
                "expect.js": "0.3.1",
                "happen": "0.3.2",
                "marked": "^0.8.0",
                "minifyify": "^7.3.5",
                "minimist": "1.2.0",
                "mocha": "^7.0.1",
                "mocha-phantomjs-core": "2.1.2",
                "phantomjs-prebuilt": "2.1.16",
                "sinon": "7.2.4"
            },
            "optionalDependencies": {}
        }
    }, {}],
    7: [function(require, module, exports) {
        "use strict";
        module.exports = {
            HTTP_URL: "http://api.mapbox.com",
            HTTPS_URL: "https://api.mapbox.com",
            FORCE_HTTPS: !0,
            REQUIRE_ACCESS_TOKEN: !0,
            TEMPLATE_STYLES: {
                "mapbox.dark": "mapbox/dark-v10",
                "mapbox.light": "mapbox/light-v10",
                "mapbox.osm-bright": "mapbox/bright-v9",
                "mapbox.outdoors": "mapbox/outdoors-v11",
                "mapbox.satellite": "mapbox/satellite-v9",
                "mapbox.streets": "mapbox/streets-v11",
                "mapbox.streets-basic": "mapbox/basic-v9",
                "mapbox.streets-satellite": "mapbox/satellite-streets-v11"
            }
        };
    }, {}],
    8: [function(require, module, exports) {
        "use strict";
        var util = require("./util"),
            format_url = require("./format_url"),
            request = require("./request"),
            marker = require("./marker"),
            simplestyle = require("./simplestyle"),
            FeatureLayer = L.FeatureGroup.extend({
                options: {
                    filter: function() {
                        return !0
                    },
                    sanitizer: require("@mapbox/sanitize-caja"),
                    style: simplestyle.style,
                    popupOptions: {
                        closeButton: !1
                    }
                },
                initialize: function(e, t) {
                    L.setOptions(this, t), this._layers = {}, "string" == typeof e ? util.idUrl(e, this) : e && "object" == typeof e && this.setGeoJSON(e)
                },
                setGeoJSON: function(e) {
                    return this._geojson = e, this.clearLayers(), this._initialize(e), this
                },
                getGeoJSON: function() {
                    return this._geojson
                },
                loadURL: function(e) {
                    return this._request && "abort" in this._request && this._request.abort(), this._request = request(e, L.bind(function(t, i) {
                        this._request = null, t && "abort" !== t.type ? (util.log("could not load features at " + e), this.fire("error", {
                            error: t
                        })) : i && (this.setGeoJSON(i), this.fire("ready"))
                    }, this)), this
                },
                loadID: function(e) {
                    return this.loadURL(format_url("/v4/" + e + "/features.json", this.options.accessToken))
                },
                setFilter: function(e) {
                    return this.options.filter = e, this._geojson && (this.clearLayers(), this._initialize(this._geojson)), this
                },
                getFilter: function() {
                    return this.options.filter
                },
                _initialize: function(e) {
                    var t, i, r = L.Util.isArray(e) ? e : e.features;
                    if (r)
                        for (t = 0, i = r.length; t < i; t++)(r[t].geometries || r[t].geometry || r[t].features) && this._initialize(r[t]);
                    else if (this.options.filter(e)) {
                        var s = {
                                accessToken: this.options.accessToken
                            },
                            o = this.options.pointToLayer || function(e, t) {
                                return marker.style(e, t, s)
                            },
                            n = L.GeoJSON.geometryToLayer(e, {
                                pointToLayer: o
                            }),
                            u = marker.createPopup(e, this.options.sanitizer),
                            a = this.options.style,
                            l = a === simplestyle.style;
                        !(a && "setStyle" in n) || l && (n instanceof L.Circle || n instanceof L.CircleMarker) || ("function" == typeof a && (a = a(e)), n.setStyle(a)), n.feature = e, u && n.bindPopup(u, this.options.popupOptions), this.addLayer(n)
                    }
                }
            });
        module.exports.FeatureLayer = FeatureLayer, module.exports.featureLayer = function(e, t) {
            return new FeatureLayer(e, t)
        };
    }, {
        "./format_url": 10,
        "./marker": 23,
        "./request": 24,
        "./simplestyle": 26,
        "./util": 29,
        "@mapbox/sanitize-caja": 2
    }],
    9: [function(require, module, exports) {
        "use strict";
        var Feedback = L.Class.extend({
            includes: L.Evented.prototype || L.Mixin.Events,
            data: {},
            record: function(e) {
                L.extend(this.data, e), this.fire("change")
            }
        });
        module.exports = new Feedback;
    }, {}],
    10: [function(require, module, exports) {
        "use strict";
        var config = require("./config"),
            version = require("../package.json").version;
        module.exports = function(e, o) {
            if (!(o = o || L.mapbox.accessToken) && config.REQUIRE_ACCESS_TOKEN) throw new Error("An API access token is required to use Mapbox.js. See https://www.mapbox.com/mapbox.js/api/v" + version + "/api-access-tokens/");
            var s = "https:" === document.location.protocol || config.FORCE_HTTPS ? config.HTTPS_URL : config.HTTP_URL;
            if (s = s.replace(/\/v4$/, ""), s += e, config.REQUIRE_ACCESS_TOKEN) {
                if ("s" === o[0]) throw new Error("Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). See https://www.mapbox.com/mapbox.js/api/v" + version + "/api-access-tokens/");
                s += -1 !== s.indexOf("?") ? "&access_token=" : "?access_token=", s += o
            }
            return s
        }, module.exports.tileJSON = function(e, o) {
            if (0 === e.indexOf("mapbox://styles")) throw new Error("Styles created with Mapbox Studio need to be used with L.mapbox.styleLayer, not L.mapbox.tileLayer");
            if (-1 !== e.indexOf("/")) return e;
            var s;
            return s = e in config.TEMPLATE_STYLES ? module.exports("/styles/v1/" + config.TEMPLATE_STYLES[e], o) : module.exports("/v4/" + e + ".json", o), 0 === s.indexOf("https") && (s += "&secure"), s
        }, module.exports.style = function(e, o) {
            if (-1 === e.indexOf("mapbox://styles/")) throw new Error("Incorrectly formatted Mapbox style at " + e);
            var s = e.split("mapbox://styles/")[1];
            return module.exports("/styles/v1/" + s, o)
        };
    }, {
        "../package.json": 6,
        "./config": 7
    }],
    11: [function(require, module, exports) {
        "use strict";
        var util = require("./util"),
            format_url = require("./format_url"),
            feedback = require("./feedback"),
            request = require("./request");
        module.exports = function(e, t) {
            function r(e, t) {
                var r = Math.pow(10, t);
                return e.lat = Math.round(e.lat * r) / r, e.lng = Math.round(e.lng * r) / r, e
            }
            t || (t = {});
            var n = {};
            return util.strict(e, "string"), -1 === e.indexOf("/") && (e = format_url("/geocoding/v5/" + e + "/{query}.json", t.accessToken, 5)), n.getURL = function() {
                return e
            }, n.queryURL = function(e) {
                var t = L.Util.isArray,
                    o = !(t(e) || "string" == typeof e),
                    u = o ? e.query : e;
                if (t(u)) {
                    for (var l = [], i = 0; i < u.length; i++) l[i] = encodeURIComponent(u[i]);
                    u = l.join(";")
                } else u = encodeURIComponent(u);
                feedback.record({
                    geocoding: u
                });
                var a = L.Util.template(n.getURL(), {
                    query: u
                });
                if (o) {
                    if (e.types && (t(e.types) ? a += "&types=" + e.types.join() : a += "&types=" + e.types), e.country && (t(e.country) ? a += "&country=" + e.country.join() : a += "&country=" + e.country), e.bbox && (t(e.bbox) ? a += "&bbox=" + e.bbox.join() : a += "&bbox=" + e.bbox), e.proximity) {
                        var s = r(L.latLng(e.proximity), 3);
                        a += "&proximity=" + s.lng + "," + s.lat
                    }
                    "boolean" == typeof e.autocomplete && (a += "&autocomplete=" + e.autocomplete)
                }
                return a
            }, n.query = function(e, t) {
                return util.strict(t, "function"), request(n.queryURL(e), function(e, r) {
                    if (r && (r.length || r.features)) {
                        var n = {
                            results: r
                        };
                        r.features && r.features.length && (n.latlng = [r.features[0].center[1], r.features[0].center[0]], r.features[0].bbox && (n.bounds = r.features[0].bbox, n.lbounds = util.lbounds(n.bounds))), t(null, n)
                    } else t(e || !0)
                }), n
            }, n.reverseQuery = function(e, t) {
                function o(e) {
                    var t;
                    return t = void 0 !== e.lat && void 0 !== e.lng ? L.latLng(e.lat, e.lng) : void 0 !== e.lat && void 0 !== e.lon ? L.latLng(e.lat, e.lon) : L.latLng(e[1], e[0]), t = r(t, 5), t.lng + "," + t.lat
                }
                var u = "";
                if (e.length && e[0].length) {
                    for (var l = 0, i = []; l < e.length; l++) i.push(o(e[l]));
                    u = i.join(";")
                } else u = o(e);
                return request(n.queryURL(u), function(e, r) {
                    t(e, r)
                }), n
            }, n
        };
    }, {
        "./feedback": 9,
        "./format_url": 10,
        "./request": 24,
        "./util": 29
    }],
    12: [function(require, module, exports) {
        "use strict";
        var geocoder = require("./geocoder"),
            util = require("./util"),
            GeocoderControl = L.Control.extend({
                includes: L.Evented.prototype || L.Mixin.Events,
                options: {
                    proximity: !0,
                    position: "topleft",
                    pointZoom: 16,
                    keepOpen: !1,
                    autocomplete: !1,
                    queryOptions: {}
                },
                initialize: function(t, e) {
                    L.Util.setOptions(this, e), this.setURL(t), this._updateSubmit = L.bind(this._updateSubmit, this), this._updateAutocomplete = L.bind(this._updateAutocomplete, this), this._chooseResult = L.bind(this._chooseResult, this)
                },
                setURL: function(t) {
                    return this.geocoder = geocoder(t, {
                        accessToken: this.options.accessToken
                    }), this
                },
                getURL: function() {
                    return this.geocoder.getURL()
                },
                setID: function(t) {
                    return this.setURL(t)
                },
                setTileJSON: function(t) {
                    return this.setURL(t.geocoder)
                },
                _toggle: function(t) {
                    t && L.DomEvent.stop(t), L.DomUtil.hasClass(this._container, "active") ? (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur()) : (L.DomUtil.addClass(this._container, "active"), this._input.focus(), this._input.select())
                },
                _closeIfOpen: function() {
                    L.DomUtil.hasClass(this._container, "active") && !this.options.keepOpen && (L.DomUtil.removeClass(this._container, "active"), this._results.innerHTML = "", this._input.blur())
                },
                onAdd: function(t) {
                    var e = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder leaflet-bar leaflet-control"),
                        i = L.DomUtil.create("a", "leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder", e),
                        o = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-results", e),
                        s = L.DomUtil.create("div", "leaflet-control-mapbox-geocoder-wrap", e),
                        n = L.DomUtil.create("form", "leaflet-control-mapbox-geocoder-form", s),
                        r = L.DomUtil.create("input", "", n);
                    return i.href = "#", i.innerHTML = "&nbsp;", r.type = "text", r.setAttribute("placeholder", "Search"), L.DomEvent.addListener(n, "submit", this._geocode, this), L.DomEvent.addListener(r, "keyup", this._autocomplete, this), L.DomEvent.disableClickPropagation(e), this._map = t, this._results = o, this._input = r, this._form = n, this.options.keepOpen ? L.DomUtil.addClass(e, "active") : (this._map.on("click", this._closeIfOpen, this), L.DomEvent.addListener(i, "click", this._toggle, this)), e
                },
                _updateSubmit: function(t, e) {
                    if (L.DomUtil.removeClass(this._container, "searching"), this._results.innerHTML = "", t || !e) this.fire("error", {
                        error: t
                    });
                    else {
                        var i = [];
                        e.results && e.results.features && (i = e.results.features), 1 === i.length ? (this.fire("autoselect", {
                            feature: i[0]
                        }), this.fire("found", {
                            results: e.results
                        }), this._chooseResult(i[0]), this._closeIfOpen()) : i.length > 1 ? (this.fire("found", {
                            results: e.results
                        }), this._displayResults(i)) : (this.fire("notfound"), this._displayResults(i))
                    }
                },
                _updateAutocomplete: function(t, e) {
                    if (this._results.innerHTML = "", t || !e) this.fire("error", {
                        error: t
                    });
                    else {
                        var i = [];
                        e.results && e.results.features && (i = e.results.features), i.length ? this.fire("found", {
                            results: e.results
                        }) : this.fire("notfound"), this._displayResults(i)
                    }
                },
                _displayResults: function(t) {
                    for (var e = 0, i = Math.min(t.length, 5); e < i; e++) {
                        var o = t[e],
                            s = o.place_name;
                        if (s.length) {
                            var n = L.DomUtil.create("a", "", this._results);
                            n["innerText" in n ? "innerText" : "textContent"] = s, n.setAttribute("title", s), n.href = "#", L.bind(function(t) {
                                L.DomEvent.addListener(n, "click", function(e) {
                                    this._chooseResult(t), L.DomEvent.stop(e), this.fire("select", {
                                        feature: t
                                    })
                                }, this)
                            }, this)(o)
                        }
                    }
                    if (t.length > 5) {
                        L.DomUtil.create("span", "", this._results).innerHTML = "Top 5 of " + t.length + "  results"
                    }
                },
                _chooseResult: function(t) {
                    t.bbox ? this._map.fitBounds(util.lbounds(t.bbox)) : t.center && this._map.setView([t.center[1], t.center[0]], void 0 === this._map.getZoom() ? this.options.pointZoom : Math.max(this._map.getZoom(), this.options.pointZoom))
                },
                _geocode: function(t) {
                    if (L.DomEvent.preventDefault(t), "" === this._input.value) return this._updateSubmit();
                    L.DomUtil.addClass(this._container, "searching"), this.geocoder.query(L.Util.extend({
                        query: this._input.value,
                        proximity: !!this.options.proximity && this._map.getCenter()
                    }, this.options.queryOptions), this._updateSubmit)
                },
                _autocomplete: function() {
                    if (this.options.autocomplete) return "" === this._input.value ? this._updateAutocomplete() : void this.geocoder.query(L.Util.extend({
                        query: this._input.value,
                        proximity: !!this.options.proximity && this._map.getCenter()
                    }, this.options.queryOptions), this._updateAutocomplete)
                }
            });
        module.exports.GeocoderControl = GeocoderControl, module.exports.geocoderControl = function(t, e) {
            return new GeocoderControl(t, e)
        };
    }, {
        "./geocoder": 11,
        "./util": 29
    }],
    13: [function(require, module, exports) {
        "use strict";

        function utfDecode(t) {
            return t >= 93 && t--, t >= 35 && t--, t - 32
        }
        module.exports = function(t) {
            return function(e, r) {
                if (t) {
                    var u = utfDecode(t.grid[r].charCodeAt(e)),
                        n = t.keys[u];
                    return t.data[n]
                }
            }
        };
    }, {}],
    14: [function(require, module, exports) {
        "use strict";
        var util = require("./util"),
            Mustache = require("mustache"),
            GridControl = L.Control.extend({
                options: {
                    pinnable: !0,
                    follow: !1,
                    sanitizer: require("@mapbox/sanitize-caja"),
                    touchTeaser: !0,
                    location: !0
                },
                _currentContent: "",
                _pinned: !1,
                initialize: function(t, o) {
                    L.Util.setOptions(this, o), util.strict_instance(t, L.Class, "L.mapbox.gridLayer"), this._layer = t
                },
                setTemplate: function(t) {
                    return util.strict(t, "string"), this.options.template = t, this
                },
                _template: function(t, o) {
                    if (o) {
                        var i = this.options.template || this._layer.getTileJSON().template;
                        if (i) {
                            var e = {};
                            return e["__" + t + "__"] = !0, this.options.sanitizer(Mustache.to_html(i, L.extend(e, o)))
                        }
                    }
                },
                _show: function(t, o) {
                    t !== this._currentContent && (this._currentContent = t, this.options.follow ? (this._popup.setContent(t).setLatLng(o.latLng), this._map._popup !== this._popup && this._popup.openOn(this._map)) : (this._container.style.display = "block", this._contentWrapper.innerHTML = t))
                },
                hide: function() {
                    return this._pinned = !1, this._currentContent = "", this._map.closePopup(), this._container.style.display = "none", this._contentWrapper.innerHTML = "", L.DomUtil.removeClass(this._container, "closable"), this
                },
                _mouseover: function(t) {
                    if (t.data ? L.DomUtil.addClass(this._map._container, "map-clickable") : L.DomUtil.removeClass(this._map._container, "map-clickable"), !this._pinned) {
                        var o = this._template("teaser", t.data);
                        o ? this._show(o, t) : this.hide()
                    }
                },
                _mousemove: function(t) {
                    this._pinned || this.options.follow && this._popup.setLatLng(t.latLng)
                },
                _navigateTo: function(t) {
                    window.top.location.href = t
                },
                _click: function(t) {
                    var o = this._template("location", t.data);
                    if (this.options.location && o && 0 === o.search(/^https?:/)) return this._navigateTo(this._template("location", t.data));
                    if (this.options.pinnable) {
                        var i = this._template("full", t.data);
                        !i && this.options.touchTeaser && L.Browser.touch && (i = this._template("teaser", t.data)), i ? (L.DomUtil.addClass(this._container, "closable"), this._pinned = !0, this._show(i, t)) : this._pinned && (L.DomUtil.removeClass(this._container, "closable"), this._pinned = !1, this.hide())
                    }
                },
                _onPopupClose: function() {
                    this._currentContent = null, this._pinned = !1
                },
                _createClosebutton: function(t, o) {
                    var i = L.DomUtil.create("a", "close", t);
                    return i.innerHTML = "close", i.href = "#", i.title = "close", L.DomEvent.on(i, "click", L.DomEvent.stopPropagation).on(i, "mousedown", L.DomEvent.stopPropagation).on(i, "dblclick", L.DomEvent.stopPropagation).on(i, "click", L.DomEvent.preventDefault).on(i, "click", o, this), i
                },
                onAdd: function(t) {
                    this._map = t;
                    var o = L.DomUtil.create("div", "leaflet-control-grid map-tooltip"),
                        i = L.DomUtil.create("div", "map-tooltip-content");
                    return o.style.display = "none", this._createClosebutton(o, this.hide), o.appendChild(i), this._contentWrapper = i, this._popup = new L.Popup({
                        autoPan: !1,
                        closeOnClick: !1
                    }), t.on("popupclose", this._onPopupClose, this), L.DomEvent.disableClickPropagation(o).addListener(o, "mousewheel", L.DomEvent.stopPropagation), this._layer.on("mouseover", this._mouseover, this).on("mousemove", this._mousemove, this).on("click", this._click, this), o
                },
                onRemove: function(t) {
                    t.off("popupclose", this._onPopupClose, this), this._layer.off("mouseover", this._mouseover, this).off("mousemove", this._mousemove, this).off("click", this._click, this)
                }
            });
        module.exports.GridControl = GridControl, module.exports.gridControl = function(t, o) {
            return new GridControl(t, o)
        };
    }, {
        "./util": 29,
        "@mapbox/sanitize-caja": 2,
        "mustache": 5
    }],
    15: [function(require, module, exports) {
        "use strict";
        var util = require("./util"),
            request = require("./request"),
            grid = require("./grid"),
            GridLayer = L.Layer.extend({
                includes: [require("./load_tilejson")],
                options: {
                    template: function() {
                        return ""
                    }
                },
                _mouseOn: null,
                _tilejson: {},
                _cache: {},
                initialize: function(t, i) {
                    L.Util.setOptions(this, i), this._loadTileJSON(t)
                },
                _setTileJSON: function(t) {
                    return util.strict(t, "object"), L.extend(this.options, {
                        grids: t.grids,
                        minZoom: t.minzoom,
                        maxZoom: t.maxzoom,
                        bounds: t.bounds && util.lbounds(t.bounds)
                    }), this._tilejson = t, this._cache = {}, this._update(), this
                },
                getTileJSON: function() {
                    return this._tilejson
                },
                active: function() {
                    return !!(this._map && this.options.grids && this.options.grids.length)
                },
                onAdd: function(t) {
                    this._map = t, this._update(), this._map.on("click", this._click, this).on("mousemove", this._move, this).on("moveend", this._update, this)
                },
                onRemove: function() {
                    this._map.off("click", this._click, this).off("mousemove", this._move, this).off("moveend", this._update, this)
                },
                getData: function(t, i) {
                    if (this.active()) {
                        var e = this._map,
                            o = e.project(t.wrap()),
                            s = Math.floor(o.x / 256),
                            n = Math.floor(o.y / 256),
                            a = e.options.crs.scale(e.getZoom()) / 256;
                        return s = (s + a) % a, n = (n + a) % a, this._getTile(e.getZoom(), s, n, function(t) {
                            var e = Math.floor((o.x - 256 * s) / 4),
                                a = Math.floor((o.y - 256 * n) / 4);
                            i(t(e, a))
                        }), this
                    }
                },
                _click: function(t) {
                    this.getData(t.latlng, L.bind(function(i) {
                        this.fire("click", {
                            latLng: t.latlng,
                            data: i
                        })
                    }, this))
                },
                _move: function(t) {
                    this.getData(t.latlng, L.bind(function(i) {
                        i !== this._mouseOn ? (this._mouseOn && this.fire("mouseout", {
                            latLng: t.latlng,
                            data: this._mouseOn
                        }), this.fire("mouseover", {
                            latLng: t.latlng,
                            data: i
                        }), this._mouseOn = i) : this.fire("mousemove", {
                            latLng: t.latlng,
                            data: i
                        })
                    }, this))
                },
                _getTileURL: function(t) {
                    var i = this.options.grids,
                        e = (t.x + t.y) % i.length,
                        o = i[e];
                    return L.Util.template(o, t)
                },
                _update: function() {
                    if (this.active()) {
                        var t = this._map.getPixelBounds(),
                            i = this._map.getZoom();
                        if (!(i > this.options.maxZoom || i < this.options.minZoom))
                            for (var e = L.bounds(t.min.divideBy(256)._floor(), t.max.divideBy(256)._floor()), o = this._map.options.crs.scale(i) / 256, s = e.min.x; s <= e.max.x; s++)
                                for (var n = e.min.y; n <= e.max.y; n++) this._getTile(i, (s % o + o) % o, (n % o + o) % o)
                    }
                },
                _getTile: function(t, i, e, o) {
                    var s = t + "_" + i + "_" + e,
                        n = L.point(i, e);
                    if (n.z = t, this._tileShouldBeLoaded(n)) {
                        if (s in this._cache) {
                            if (!o) return;
                            return void("function" == typeof this._cache[s] ? o(this._cache[s]) : this._cache[s].push(o))
                        }
                        this._cache[s] = [], o && this._cache[s].push(o), request(this._getTileURL(n), L.bind(function(t, i) {
                            var e = this._cache[s];
                            this._cache[s] = grid(i);
                            for (var o = 0; o < e.length; ++o) e[o](this._cache[s])
                        }, this))
                    }
                },
                _tileShouldBeLoaded: function(t) {
                    if (t.z > this.options.maxZoom || t.z < this.options.minZoom) return !1;
                    if (this.options.bounds) {
                        var i = t.multiplyBy(256),
                            e = i.add(new L.Point(256, 256)),
                            o = this._map.unproject(i),
                            s = this._map.unproject(e),
                            n = new L.LatLngBounds([o, s]);
                        if (!this.options.bounds.intersects(n)) return !1
                    }
                    return !0
                }
            });
        module.exports.GridLayer = GridLayer, module.exports.gridLayer = function(t, i) {
            return new GridLayer(t, i)
        };
    }, {
        "./grid": 13,
        "./load_tilejson": 19,
        "./request": 24,
        "./util": 29
    }],
    16: [function(require, module, exports) {
        "use strict";
        var leaflet = require("./leaflet");
        require("./mapbox"), module.exports = leaflet;
    }, {
        "./leaflet": 17,
        "./mapbox": 21
    }],
    17: [function(require, module, exports) {
        module.exports = window.L = require("leaflet/dist/leaflet-src");
    }, {
        "leaflet/dist/leaflet-src": 4
    }],
    18: [function(require, module, exports) {
        "use strict";
        var LegendControl = L.Control.extend({
            options: {
                position: "bottomright",
                sanitizer: require("@mapbox/sanitize-caja")
            },
            initialize: function(e) {
                L.setOptions(this, e), this._legends = {}
            },
            onAdd: function() {
                return this._container = L.DomUtil.create("div", "map-legends wax-legends"), L.DomEvent.disableClickPropagation(this._container), this._update(), this._container
            },
            addLegend: function(e) {
                return e ? (this._legends[e] || (this._legends[e] = 0), this._legends[e]++, this._update()) : this
            },
            removeLegend: function(e) {
                return e ? (this._legends[e] && this._legends[e]--, this._update()) : this
            },
            _update: function() {
                if (!this._map) return this;
                this._container.innerHTML = "";
                var e = "none";
                for (var t in this._legends)
                    if (this._legends.hasOwnProperty(t) && this._legends[t]) {
                        var n = L.DomUtil.create("div", "map-legend wax-legend", this._container);
                        n.innerHTML = this.options.sanitizer(t), e = "block"
                    }
                return this._container.style.display = e, this
            }
        });
        module.exports.LegendControl = LegendControl, module.exports.legendControl = function(e) {
            return new LegendControl(e)
        };
    }, {
        "@mapbox/sanitize-caja": 2
    }],
    19: [function(require, module, exports) {
        "use strict";
        var request = require("./request"),
            format_url = require("./format_url"),
            util = require("./util");
        module.exports = {
            _loadTileJSON: function(e) {
                if ("string" == typeof e) {
                    var t = e;
                    e = format_url.tileJSON(e, this.options && this.options.accessToken);
                    var i = -1 !== e.indexOf("/styles/v1/");
                    i || util.warn("Warning: this implementation is loading a Mapbox Studio Classic style (" + t + "). Studio Classic styles are scheduled for deprecation: https://blog.mapbox.com/deprecating-studio-classic-styles-c65a744140a6"), request(e, L.bind(function(t, s) {
                        t ? (util.log("could not load TileJSON at " + e), this.fire("error", {
                            error: t
                        })) : s && i ? (s.tiles = [format_url("/styles/v1/" + s.owner + "/" + s.id + "/tiles/256/{z}/{x}/{y}", this.options.accessToken)], this._setTileJSON(s), this.fire("ready")) : s && (this._setTileJSON(s), this.fire("ready"))
                    }, this))
                } else e && "object" == typeof e && this._setTileJSON(e)
            }
        };
    }, {
        "./format_url": 10,
        "./request": 24,
        "./util": 29
    }],
    20: [function(require, module, exports) {
        "use strict";

        function withAccessToken(t, e) {
            return !e || t.accessToken ? t : L.extend({
                accessToken: e
            }, t)
        }
        var tileLayer = require("./tile_layer").tileLayer,
            featureLayer = require("./feature_layer").featureLayer,
            gridLayer = require("./grid_layer").gridLayer,
            gridControl = require("./grid_control").gridControl,
            shareControl = require("./share_control").shareControl,
            legendControl = require("./legend_control").legendControl,
            mapboxLogoControl = require("./mapbox_logo").mapboxLogoControl,
            feedback = require("./feedback"),
            LMap = L.Map.extend({
                includes: [require("./load_tilejson")],
                options: {
                    tileLayer: {},
                    featureLayer: {},
                    gridLayer: {},
                    legendControl: {},
                    gridControl: {},
                    shareControl: !1,
                    sanitizer: require("@mapbox/sanitize-caja")
                },
                _tilejson: {},
                initialize: function(t, e, o) {
                    if (L.Map.prototype.initialize.call(this, t, L.extend({}, L.Map.prototype.options, o)), this.attributionControl) {
                        this.attributionControl.setPrefix("");
                        var i = this.options.attributionControl.compact;
                        (i || !1 !== i && this._container.offsetWidth <= 640) && L.DomUtil.addClass(this.attributionControl._container, "leaflet-compact-attribution"), void 0 === i && this.on("resize", function() {
                            this._container.offsetWidth > 640 ? L.DomUtil.removeClass(this.attributionControl._container, "leaflet-compact-attribution") : L.DomUtil.addClass(this.attributionControl._container, "leaflet-compact-attribution")
                        })
                    }
                    this.options.tileLayer && (this.tileLayer = tileLayer(void 0, withAccessToken(this.options.tileLayer, this.options.accessToken)), this.addLayer(this.tileLayer)), this.options.featureLayer && (this.featureLayer = featureLayer(void 0, withAccessToken(this.options.featureLayer, this.options.accessToken)), this.addLayer(this.featureLayer)), this.options.gridLayer && (this.gridLayer = gridLayer(void 0, withAccessToken(this.options.gridLayer, this.options.accessToken)), this.addLayer(this.gridLayer)), this.options.gridLayer && this.options.gridControl && (this.gridControl = gridControl(this.gridLayer, this.options.gridControl), this.addControl(this.gridControl)), this.options.legendControl && (this.legendControl = legendControl(this.options.legendControl), this.addControl(this.legendControl)), this.options.shareControl && (this.shareControl = shareControl(void 0, withAccessToken(this.options.shareControl, this.options.accessToken)), this.addControl(this.shareControl)), this._mapboxLogoControl = mapboxLogoControl(this.options.mapboxLogoControl), this.addControl(this._mapboxLogoControl), this._loadTileJSON(e), this.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this).on("moveend", this._updateMapFeedbackLink, this), this.whenReady(function() {
                        feedback.on("change", this._updateMapFeedbackLink, this)
                    }), this.on("unload", function() {
                        feedback.off("change", this._updateMapFeedbackLink, this)
                    })
                },
                _setTileJSON: function(t) {
                    return this._tilejson = t, this._initialize(t), this
                },
                getTileJSON: function() {
                    return this._tilejson
                },
                _initialize: function(t) {
                    if (this.tileLayer && (this.tileLayer._setTileJSON(t), this._updateLayer(this.tileLayer)), this.featureLayer && !this.featureLayer.getGeoJSON() && t.data && t.data[0] && this.featureLayer.loadURL(t.data[0]), this.gridLayer && (this.gridLayer._setTileJSON(t), this._updateLayer(this.gridLayer)), this.legendControl && t.legend && this.legendControl.addLegend(t.legend), this.shareControl && this.shareControl._setTileJSON(t), this._mapboxLogoControl._setTileJSON(t), !this._loaded && t.center) {
                        var e = t.zoom ? t.zoom : t.center[2],
                            o = void 0 !== this.getZoom() ? this.getZoom() : e,
                            i = L.latLng(t.center[1], t.center[0]);
                        this.setView(i, o)
                    }
                },
                _updateMapFeedbackLink: function() {
                    if (this._controlContainer && this._controlContainer.getElementsByClassName) {
                        var t = this._controlContainer.getElementsByClassName("mapbox-improve-map");
                        if (t.length && this._loaded) {
                            var e = this.getCenter().wrap(),
                                o = this._tilejson || {},
                                i = o.id || "",
                                r = "#" + i + "/" + e.lng.toFixed(3) + "/" + e.lat.toFixed(3) + "/" + this.getZoom();
                            for (var a in feedback.data) r += "/" + a + "=" + feedback.data[a];
                            for (var n = 0; n < t.length; n++) t[n].hash = r
                        }
                    }
                },
                _onLayerAdd: function(t) {
                    "on" in t.layer && t.layer.on("ready", this._onLayerReady, this), window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0)
                },
                _onLayerRemove: function(t) {
                    "on" in t.layer && t.layer.off("ready", this._onLayerReady, this), window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0)
                },
                _onLayerReady: function(t) {
                    this._updateLayer(t.target)
                },
                _updateLayer: function(t) {
                    if (t.options) {
                        this.attributionControl && this._loaded && t.getAttribution && this.attributionControl.addAttribution(t.getAttribution()), L.stamp(t) in this._zoomBoundLayers || !t.options.maxZoom && !t.options.minZoom || (this._zoomBoundLayers[L.stamp(t)] = t);
                        var e = this._mapboxLogoControl.getContainer();
                        if (!L.DomUtil.hasClass(e, "mapbox-logo-true")) {
                            var o = t._tilejson;
                            this._mapboxLogoControl._setTileJSON(o)
                        }
                        this._updateMapFeedbackLink(), this._updateZoomLevels()
                    }
                }
            });
        module.exports.Map = LMap, module.exports.map = function(t, e, o) {
            return new LMap(t, e, o)
        };
    }, {
        "./feature_layer": 8,
        "./feedback": 9,
        "./grid_control": 14,
        "./grid_layer": 15,
        "./legend_control": 18,
        "./load_tilejson": 19,
        "./mapbox_logo": 22,
        "./share_control": 25,
        "./tile_layer": 28,
        "@mapbox/sanitize-caja": 2
    }],
    21: [function(require, module, exports) {
        "use strict";
        var geocoderControl = require("./geocoder_control"),
            gridControl = require("./grid_control"),
            featureLayer = require("./feature_layer"),
            legendControl = require("./legend_control"),
            shareControl = require("./share_control"),
            tileLayer = require("./tile_layer"),
            map = require("./map"),
            gridLayer = require("./grid_layer"),
            styleLayer = require("./style_layer");
        L.mapbox = module.exports = {
            VERSION: require("../package.json").version,
            geocoder: require("./geocoder"),
            marker: require("./marker"),
            simplestyle: require("./simplestyle"),
            tileLayer: tileLayer.tileLayer,
            TileLayer: tileLayer.TileLayer,
            styleLayer: styleLayer.styleLayer,
            StyleLayer: styleLayer.StyleLayer,
            shareControl: shareControl.shareControl,
            ShareControl: shareControl.ShareControl,
            legendControl: legendControl.legendControl,
            LegendControl: legendControl.LegendControl,
            geocoderControl: geocoderControl.geocoderControl,
            GeocoderControl: geocoderControl.GeocoderControl,
            gridControl: gridControl.gridControl,
            GridControl: gridControl.GridControl,
            gridLayer: gridLayer.gridLayer,
            GridLayer: gridLayer.GridLayer,
            featureLayer: featureLayer.featureLayer,
            FeatureLayer: featureLayer.FeatureLayer,
            map: map.map,
            Map: map.Map,
            config: require("./config"),
            sanitize: require("@mapbox/sanitize-caja"),
            template: require("mustache").to_html,
            feedback: require("./feedback")
        }, window.L.Icon.Default.imagePath = ("https:" === document.location.protocol || "http:" === document.location.protocol ? "" : "https:") + "//api.tiles.mapbox.com/mapbox.js/v" + require("../package.json").version + "/images/";
    }, {
        "../package.json": 6,
        "./config": 7,
        "./feature_layer": 8,
        "./feedback": 9,
        "./geocoder": 11,
        "./geocoder_control": 12,
        "./grid_control": 14,
        "./grid_layer": 15,
        "./legend_control": 18,
        "./map": 20,
        "./marker": 23,
        "./share_control": 25,
        "./simplestyle": 26,
        "./style_layer": 27,
        "./tile_layer": 28,
        "@mapbox/sanitize-caja": 2,
        "mustache": 5
    }],
    22: [function(require, module, exports) {
        "use strict";
        var MapboxLogoControl = L.Control.extend({
            options: {
                position: "bottomleft"
            },
            initialize: function(o) {
                L.setOptions(this, o)
            },
            onAdd: function() {
                return this._container = L.DomUtil.create("div", "mapbox-logo"), this._container
            },
            _setTileJSON: function(o) {
                o.mapbox_logo && L.DomUtil.addClass(this._container, "mapbox-logo-true"), o.tilejson || "mapbox" !== o.owner || L.DomUtil.addClass(this._container, "mapbox-logo-true")
            }
        });
        module.exports.MapboxLogoControl = MapboxLogoControl, module.exports.mapboxLogoControl = function(o) {
            return new MapboxLogoControl(o)
        };
    }, {}],
    23: [function(require, module, exports) {
        "use strict";

        function icon(r, e) {
            r = r || {};
            var i = {
                    small: [20, 50],
                    medium: [30, 70],
                    large: [35, 90]
                },
                t = r["marker-size"] || "medium",
                o = "marker-symbol" in r && "" !== r["marker-symbol"] ? "-" + r["marker-symbol"] : "",
                s = (r["marker-color"] || "7e7e7e").replace("#", "");
            return L.icon({
                iconUrl: format_url("/v4/marker/pin-" + t.charAt(0) + o + "+" + s + (L.Browser.retina ? "@2x" : "") + ".png", e && e.accessToken),
                iconSize: i[t],
                iconAnchor: [i[t][0] / 2, i[t][1] / 2],
                popupAnchor: [0, -i[t][1] / 2]
            })
        }

        function style(r, e, i) {
            return L.marker(e, {
                icon: icon(r.properties, i),
                title: util.strip_tags(sanitize(r.properties && r.properties.title || ""))
            })
        }

        function createPopup(r, e) {
            if (!r || !r.properties) return "";
            var i = "";
            return r.properties.title && (i += '<div class="marker-title">' + r.properties.title + "</div>"), r.properties.description && (i += '<div class="marker-description">' + r.properties.description + "</div>"), (e || sanitize)(i)
        }
        var format_url = require("./format_url"),
            util = require("./util"),
            sanitize = require("@mapbox/sanitize-caja");
        module.exports = {
            icon: icon,
            style: style,
            createPopup: createPopup
        };
    }, {
        "./format_url": 10,
        "./util": 29,
        "@mapbox/sanitize-caja": 2
    }],
    24: [function(require, module, exports) {
        "use strict";
        var corslite = require("@mapbox/corslite"),
            strict = require("./util").strict,
            config = require("./config"),
            protocol = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;
        module.exports = function(t, o) {
            function r(t, r) {
                !t && r && (r = JSON.parse(r.responseText)), o(t, r)
            }
            return strict(t, "string"), strict(o, "function"), t = t.replace(protocol, function(t, o) {
                return "withCredentials" in new window.XMLHttpRequest ? "https:" === o || "https:" === document.location.protocol || config.FORCE_HTTPS ? "https:" : "http:" : document.location.protocol
            }), corslite(t, r)
        };
    }, {
        "./config": 7,
        "./util": 29,
        "@mapbox/corslite": 1
    }],
    25: [function(require, module, exports) {
        "use strict";
        var format_url = require("./format_url"),
            ShareControl = L.Control.extend({
                includes: [require("./load_tilejson")],
                options: {
                    position: "topleft",
                    url: ""
                },
                initialize: function(t, e) {
                    L.setOptions(this, e), this._loadTileJSON(t)
                },
                _setTileJSON: function(t) {
                    this._tilejson = t
                },
                onAdd: function(t) {
                    this._map = t;
                    var e = L.DomUtil.create("div", "leaflet-control-mapbox-share leaflet-bar"),
                        o = L.DomUtil.create("a", "mapbox-share mapbox-icon mapbox-icon-share", e);
                    return o.href = "#", this._modal = L.DomUtil.create("div", "mapbox-modal", this._map._container), this._mask = L.DomUtil.create("div", "mapbox-modal-mask", this._modal), this._content = L.DomUtil.create("div", "mapbox-modal-content", this._modal), L.DomEvent.addListener(o, "click", this._shareClick, this), L.DomEvent.disableClickPropagation(e), this._map.on("mousedown", this._clickOut, this), e
                },
                _clickOut: function(t) {
                    if (this._sharing) return L.DomEvent.preventDefault(t), L.DomUtil.removeClass(this._modal, "active"), this._content.innerHTML = "", void(this._sharing = null)
                },
                _shareClick: function(t) {
                    function e(t, e, o) {
                        var i = document.createElement("a");
                        return i.setAttribute("class", t), i.setAttribute("href", e), i.setAttribute("target", "_blank"), o = document.createTextNode(o), i.appendChild(o), i
                    }
                    if (L.DomEvent.stop(t), this._sharing) return this._clickOut(t);
                    var o = this._tilejson || this._map._tilejson || {},
                        i = encodeURIComponent(this.options.url || o.webpage || window.location),
                        a = encodeURIComponent(o.name),
                        n = format_url("/v4/" + o.id + "/" + this._map.getCenter().lng + "," + this._map.getCenter().lat + "," + this._map.getZoom() + "/600x600.png", this.options.accessToken),
                        r = format_url("/v4/" + o.id + ".html", this.options.accessToken),
                        s = "//twitter.com/intent/tweet?status=" + a + " " + i,
                        l = "//www.facebook.com/sharer.php?u=" + i + "&t=" + a,
                        m = "//www.pinterest.com/pin/create/button/?url=" + i + "&media=" + n + "&description=" + a,
                        c = '<iframe width="100%" height="500px" frameBorder="0" src="' + r + '"></iframe>';
                    L.DomUtil.addClass(this._modal, "active"), this._sharing = L.DomUtil.create("div", "mapbox-modal-body", this._content);
                    var h = e("mapbox-button mapbox-button-icon mapbox-icon-twitter", s, "Twitter"),
                        p = e("mapbox-button mapbox-button-icon mapbox-icon-facebook", l, "Facebook"),
                        d = e("mapbox-button mapbox-button-icon mapbox-icon-pinterest", m, "Pinterest"),
                        u = document.createElement("h3"),
                        b = document.createTextNode("Share this map");
                    u.appendChild(b);
                    var _ = document.createElement("div");
                    _.setAttribute("class", "mapbox-share-buttons"), _.appendChild(p), _.appendChild(h), _.appendChild(d), this._sharing.appendChild(u), this._sharing.appendChild(_);
                    var v = L.DomUtil.create("input", "mapbox-embed", this._sharing);
                    v.type = "text", v.value = c, L.DomUtil.create("label", "mapbox-embed-description", this._sharing).innerHTML = "Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.";
                    var f = L.DomUtil.create("a", "leaflet-popup-close-button", this._sharing);
                    f.href = "#", L.DomEvent.disableClickPropagation(this._sharing), L.DomEvent.addListener(f, "click", this._clickOut, this), L.DomEvent.addListener(v, "click", function(t) {
                        t.target.focus(), t.target.select()
                    })
                }
            });
        module.exports.ShareControl = ShareControl, module.exports.shareControl = function(t, e) {
            return new ShareControl(t, e)
        };
    }, {
        "./format_url": 10,
        "./load_tilejson": 19
    }],
    26: [function(require, module, exports) {
        "use strict";

        function fallback(t, l) {
            var i = {};
            for (var r in l) void 0 === t[r] ? i[r] = l[r] : i[r] = t[r];
            return i
        }

        function remap(t) {
            for (var l = {}, i = 0; i < mapping.length; i++) l[mapping[i][1]] = t[mapping[i][0]];
            return l
        }

        function style(t) {
            return remap(fallback(t.properties || {}, defaults))
        }
        var defaults = {
                stroke: "#555555",
                "stroke-width": 2,
                "stroke-opacity": 1,
                fill: "#555555",
                "fill-opacity": .5
            },
            mapping = [
                ["stroke", "color"],
                ["stroke-width", "weight"],
                ["stroke-opacity", "opacity"],
                ["fill", "fillColor"],
                ["fill-opacity", "fillOpacity"]
            ];
        module.exports = {
            style: style,
            defaults: defaults
        };
    }, {}],
    27: [function(require, module, exports) {
        "use strict";
        var util = require("./util"),
            format_url = require("./format_url"),
            request = require("./request"),
            StyleLayer = L.TileLayer.extend({
                options: {
                    sanitizer: require("@mapbox/sanitize-caja")
                },
                initialize: function(t, e) {
                    L.TileLayer.prototype.initialize.call(this, void 0, L.extend({}, e, {
                        tileSize: 512,
                        zoomOffset: -1,
                        minNativeZoom: 0,
                        tms: !1
                    })), this._url = this._formatTileURL(t), this._getAttribution(t)
                },
                _getAttribution: function(t) {
                    var e = format_url.style(t, this.options && this.options.accessToken);
                    request(e, L.bind(function(i, r) {
                        i && (util.log("could not load Mapbox style at " + e), this.fire("error", {
                            error: i
                        }));
                        var o = [];
                        for (var s in r.sources) {
                            var l = r.sources[s].url.split("mapbox://")[1];
                            o.push(l)
                        }
                        request(format_url.tileJSON(o.join(), this.options.accessToken), L.bind(function(e, i) {
                            e ? (util.log("could not load TileJSON at " + t), this.fire("error", {
                                error: e
                            })) : i && (util.strict(i, "object"), this.options.attribution = this.options.sanitizer(i.attribution), this._tilejson = i, this.fire("ready"))
                        }, this))
                    }, this))
                },
                setUrl: null,
                _formatTileURL: function(t) {
                    if ("string" == typeof t) {
                        -1 === t.indexOf("mapbox://styles/") && (util.log("Incorrectly formatted Mapbox style at " + t), this.fire("error"));
                        var e = t.split("mapbox://styles/")[1];
                        return format_url("/styles/v1/" + e + "/tiles/{z}/{x}/{y}{r}", this.options.accessToken)
                    }
                    if ("object" == typeof t) return format_url("/styles/v1/" + t.owner + "/" + t.id + "/tiles/{z}/{x}/{y}{r}", this.options.accessToken)
                }
            });
        module.exports.StyleLayer = StyleLayer, module.exports.styleLayer = function(t, e) {
            return new StyleLayer(t, e)
        };
    }, {
        "./format_url": 10,
        "./request": 24,
        "./util": 29,
        "@mapbox/sanitize-caja": 2
    }],
    28: [function(require, module, exports) {
        "use strict";
        var util = require("./util"),
            formatPattern = /\.((?:png|jpg)\d*)(?=$|\?)/,
            TileLayer = L.TileLayer.extend({
                includes: [require("./load_tilejson")],
                options: {
                    sanitizer: require("@mapbox/sanitize-caja")
                },
                formats: ["png", "jpg", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90"],
                scalePrefix: "@2x.",
                initialize: function(t, i) {
                    L.TileLayer.prototype.initialize.call(this, void 0, i), this._tilejson = {}, i && i.format && util.strict_oneof(i.format, this.formats), this._loadTileJSON(t)
                },
                setFormat: function(t) {
                    return util.strict(t, "string"), this.options.format = t, this.redraw(), this
                },
                setUrl: null,
                _setTileJSON: function(t) {
                    if (util.strict(t, "object"), !this.options.format) {
                        var i = t.tiles[0].match(formatPattern);
                        i && (this.options.format = i[1])
                    }
                    return L.extend(this.options, {
                        tiles: t.tiles,
                        attribution: this.options.sanitizer(t.attribution),
                        minZoom: t.minzoom || 0,
                        maxZoom: t.maxzoom || 18,
                        tms: "tms" === t.scheme,
                        bounds: t.bounds && util.lbounds(t.bounds)
                    }), this._tilejson = t, this.redraw(), this
                },
                getTileJSON: function() {
                    return this._tilejson
                },
                getTileUrl: function(t) {
                    var i = this.options.tiles,
                        e = Math.floor(Math.abs(t.x + t.y) % i.length),
                        o = i[e],
                        r = L.Util.template(o, t);
                    if (r && this.options.format) return r.replace(formatPattern, (L.Browser.retina ? this.scalePrefix : ".") + this.options.format);
                    return L.Browser.retina && -1 !== o.indexOf("/styles/v1") ? r.replace("?", "@2x?") : r
                },
                _update: function() {
                    this.options.tiles && L.TileLayer.prototype._update.call(this)
                }
            });
        module.exports.TileLayer = TileLayer, module.exports.tileLayer = function(t, i) {
            return new TileLayer(t, i)
        };
    }, {
        "./load_tilejson": 19,
        "./util": 29,
        "@mapbox/sanitize-caja": 2
    }],
    29: [function(require, module, exports) {
        "use strict";

        function contains(n, o) {
            if (!o || !o.length) return !1;
            for (var r = 0; r < o.length; r++)
                if (o[r] === n) return !0;
            return !1
        }
        var warnOnceHistory = {};
        module.exports = {
            idUrl: function(n, o) {
                -1 === n.indexOf("/") ? o.loadID(n) : o.loadURL(n)
            },
            log: function(n) {
                "object" == typeof console && "function" == typeof console.error && console.error(n)
            },
            warn: function(n) {
                warnOnceHistory[n] || "object" == typeof console && "function" == typeof console.warn && (warnOnceHistory[n] = !0, console.warn(n))
            },
            strict: function(n, o) {
                if (typeof n !== o) throw new Error("Invalid argument: " + o + " expected")
            },
            strict_instance: function(n, o, r) {
                if (!(n instanceof o)) throw new Error("Invalid argument: " + r + " expected")
            },
            strict_oneof: function(n, o) {
                if (!contains(n, o)) throw new Error("Invalid argument: " + n + " given, valid values are " + o.join(", "))
            },
            strip_tags: function(n) {
                return n.replace(/<[^<]+>/g, "")
            },
            lbounds: function(n) {
                return new L.LatLngBounds([
                    [n[1], n[0]],
                    [n[3], n[2]]
                ])
            }
        };
    }, {}]
}, {}, [16])


//# sourceMappingURL=mapbox.js.map