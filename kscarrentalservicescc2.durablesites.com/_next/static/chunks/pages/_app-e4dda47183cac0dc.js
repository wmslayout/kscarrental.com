(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        8679: function(e, t, n) {
            "use strict";
            var r = n(21296),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                s = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {};

            function l(e) {
                return r.isMemo(e) ? s : a[e.$$typeof] || o
            }
            a[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, a[r.Memo] = s;
            var u = Object.defineProperty,
                c = Object.getOwnPropertyNames,
                p = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                g = Object.getPrototypeOf,
                h = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" !== typeof n) {
                    if (h) {
                        var o = g(n);
                        o && o !== h && e(t, o, r)
                    }
                    var s = c(n);
                    p && (s = s.concat(p(n)));
                    for (var a = l(t), d = l(n), m = 0; m < s.length; ++m) {
                        var y = s[m];
                        if (!i[y] && (!r || !r[y]) && (!d || !d[y]) && (!a || !a[y])) {
                            var v = f(n, y);
                            try {
                                u(t, y, v)
                            } catch (b) {}
                        }
                    }
                }
                return t
            }
        },
        96103: function(e, t) {
            "use strict";
            var n = "function" === typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106,
                i = n ? Symbol.for("react.fragment") : 60107,
                s = n ? Symbol.for("react.strict_mode") : 60108,
                a = n ? Symbol.for("react.profiler") : 60114,
                l = n ? Symbol.for("react.provider") : 60109,
                u = n ? Symbol.for("react.context") : 60110,
                c = n ? Symbol.for("react.async_mode") : 60111,
                p = n ? Symbol.for("react.concurrent_mode") : 60111,
                f = n ? Symbol.for("react.forward_ref") : 60112,
                g = n ? Symbol.for("react.suspense") : 60113,
                h = n ? Symbol.for("react.suspense_list") : 60120,
                d = n ? Symbol.for("react.memo") : 60115,
                m = n ? Symbol.for("react.lazy") : 60116,
                y = n ? Symbol.for("react.block") : 60121,
                v = n ? Symbol.for("react.fundamental") : 60117,
                b = n ? Symbol.for("react.responder") : 60118,
                x = n ? Symbol.for("react.scope") : 60119;

            function S(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case c:
                                case p:
                                case i:
                                case a:
                                case s:
                                case g:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case f:
                                        case m:
                                        case d:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function k(e) {
                return S(e) === p
            }
            t.AsyncMode = c, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = i, t.Lazy = m, t.Memo = d, t.Portal = o, t.Profiler = a, t.StrictMode = s, t.Suspense = g, t.isAsyncMode = function(e) {
                return k(e) || S(e) === c
            }, t.isConcurrentMode = k, t.isContextConsumer = function(e) {
                return S(e) === u
            }, t.isContextProvider = function(e) {
                return S(e) === l
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function(e) {
                return S(e) === f
            }, t.isFragment = function(e) {
                return S(e) === i
            }, t.isLazy = function(e) {
                return S(e) === m
            }, t.isMemo = function(e) {
                return S(e) === d
            }, t.isPortal = function(e) {
                return S(e) === o
            }, t.isProfiler = function(e) {
                return S(e) === a
            }, t.isStrictMode = function(e) {
                return S(e) === s
            }, t.isSuspense = function(e) {
                return S(e) === g
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === p || e === a || e === s || e === g || e === h || "object" === typeof e && null !== e && (e.$$typeof === m || e.$$typeof === d || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === v || e.$$typeof === b || e.$$typeof === x || e.$$typeof === y)
            }, t.typeOf = S
        },
        21296: function(e, t, n) {
            "use strict";
            e.exports = n(96103)
        },
        89774: function(e, t, n) {
            "use strict";
            n.d(t, {
                Jc: function() {
                    return me
                },
                $G: function() {
                    return r.$G
                }
            });
            var r = n(67421),
                o = n(87462),
                i = n(4942),
                s = n(67294),
                a = n(8679),
                l = n.n(a),
                u = n(30907);
            var c = n(40181);

            function p(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, u.Z)(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || (0, c.Z)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var f = n(71002);

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i, s, a = [],
                            l = !0,
                            u = !1;
                        try {
                            if (i = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); l = !0);
                        } catch (e) {
                            u = !0, o = e
                        } finally {
                            try {
                                if (!l && null != n.return && (s = n.return(), Object(s) !== s)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || (0, c.Z)(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var h = n(63366);

            function d(e, t) {
                if (null == e) return {};
                var n, r, o = (0, h.Z)(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var m = {
                    defaultNS: "common",
                    errorStackTraceLimit: 0,
                    i18n: {
                        defaultLocale: "en",
                        locales: ["en"]
                    },
                    get initImmediate() {
                        return "undefined" !== typeof window
                    },
                    interpolation: {
                        escapeValue: !1
                    },
                    load: "currentOnly",
                    localeExtension: "json",
                    localePath: "./public/locales",
                    localeStructure: "{{lng}}/{{ns}}",
                    react: {
                        useSuspense: !1
                    },
                    reloadOnPrerender: !1,
                    serializeConfig: !0,
                    use: []
                },
                y = "undefined" !== typeof window ? s.useLayoutEffect : s.useEffect,
                v = ["i18n"],
                b = ["i18n"];

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var k = ["backend", "detection"],
                O = function(e) {
                    var t, n, r;
                    if ("string" !== typeof(null === e || void 0 === e ? void 0 : e.lng)) throw new Error("config.lng was not passed into createConfig");
                    var o = e.i18n,
                        i = d(e, v),
                        s = m.i18n,
                        a = S(S(S(S({}, d(m, b)), i), s), o),
                        l = a.defaultNS,
                        u = a.lng,
                        c = a.localeExtension,
                        h = a.localePath,
                        y = a.nonExplicitSupportedLngs,
                        x = a.locales.filter((function(e) {
                            return "default" !== e
                        }));
                    if ("cimode" === u) return a;
                    if ("undefined" === typeof a.fallbackLng && (a.fallbackLng = a.defaultLocale, "default" === a.fallbackLng)) {
                        var O = g(x, 1);
                        a.fallbackLng = O[0]
                    }
                    var w = null === e || void 0 === e || null === (t = e.interpolation) || void 0 === t ? void 0 : t.prefix,
                        L = null === e || void 0 === e || null === (n = e.interpolation) || void 0 === n ? void 0 : n.suffix,
                        P = null !== w && void 0 !== w ? w : "{{",
                        C = null !== L && void 0 !== L ? L : "}}";
                    "string" !== typeof(null === e || void 0 === e ? void 0 : e.localeStructure) && (w || L) && (a.localeStructure = "".concat(P, "lng").concat(C, "/").concat(P, "ns").concat(C));
                    var N = a.fallbackLng,
                        $ = a.localeStructure;
                    if (y) {
                        var j = function(e, t) {
                            var n = g(t.split("-"), 1)[0];
                            return e[t] = [n], e
                        };
                        if ("string" === typeof N) a.fallbackLng = a.locales.filter((function(e) {
                            return e.includes("-")
                        })).reduce(j, {
                            default: [N]
                        });
                        else if (Array.isArray(N)) a.fallbackLng = a.locales.filter((function(e) {
                            return e.includes("-")
                        })).reduce(j, {
                            default: N
                        });
                        else if ("object" === (0, f.Z)(N)) a.fallbackLng = Object.entries(a.fallbackLng).reduce((function(e, t) {
                            var n, r = g(t, 2),
                                o = r[0],
                                i = r[1];
                            return e[o] = o.includes("-") ? (n = [o.split("-")[0]].concat(p(i)), Array.from(new Set(n))) : i, e
                        }), N);
                        else if ("function" === typeof N) throw new Error("If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng")
                    }
                    return (null === e || void 0 === e || null === (r = e.use) || void 0 === r ? void 0 : r.some((function(e) {
                        return "backend" === e.type
                    }))) || ("string" === typeof h ? a.backend = {
                        addPath: "".concat(h, "/").concat($, ".missing.").concat(c),
                        loadPath: "".concat(h, "/").concat($, ".").concat(c)
                    } : "function" === typeof h && (a.backend = {
                        addPath: function(e, t) {
                            return h(e, t, !0)
                        },
                        loadPath: function(e, t) {
                            return h(e, t, !1)
                        }
                    })), "string" === typeof a.ns || Array.isArray(a.ns) || (a.ns = [l]), k.forEach((function(t) {
                        e[t] && (a[t] = S(S({}, a[t]), e[t]))
                    })), a
                };
            const w = {
                type: "logger",
                log(e) {
                    this.output("log", e)
                },
                warn(e) {
                    this.output("warn", e)
                },
                error(e) {
                    this.output("error", e)
                },
                output(e, t) {
                    console && console[e] && console[e].apply(console, t)
                }
            };
            class L {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.init(e, t)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:", this.logger = e || w, this.options = t, this.debug = t.debug
                }
                log() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
                warn() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
                error() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
                deprecate() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
                forward(e, t, n, r) {
                    return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
                }
                create(e) {
                    return new L(this.logger, {
                        prefix: `${this.prefix}:${e}:`,
                        ...this.options
                    })
                }
                clone(e) {
                    return (e = e || this.options).prefix = e.prefix || this.prefix, new L(this.logger, e)
                }
            }
            var P = new L;
            class C {
                constructor() {
                    this.observers = {}
                }
                on(e, t) {
                    return e.split(" ").forEach((e => {
                        this.observers[e] || (this.observers[e] = new Map);
                        const n = this.observers[e].get(t) || 0;
                        this.observers[e].set(t, n + 1)
                    })), this
                }
                off(e, t) {
                    this.observers[e] && (t ? this.observers[e].delete(t) : delete this.observers[e])
                }
                emit(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if (this.observers[e]) {
                        Array.from(this.observers[e].entries()).forEach((e => {
                            let [t, r] = e;
                            for (let o = 0; o < r; o++) t(...n)
                        }))
                    }
                    if (this.observers["*"]) {
                        Array.from(this.observers["*"].entries()).forEach((t => {
                            let [r, o] = t;
                            for (let i = 0; i < o; i++) r.apply(r, [e, ...n])
                        }))
                    }
                }
            }

            function N() {
                let e, t;
                const n = new Promise(((n, r) => {
                    e = n, t = r
                }));
                return n.resolve = e, n.reject = t, n
            }

            function $(e) {
                return null == e ? "" : "" + e
            }
            const j = /###/g;

            function R(e, t, n) {
                function r(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(j, ".") : e
                }

                function o() {
                    return !e || "string" === typeof e
                }
                const i = "string" !== typeof t ? t : t.split(".");
                let s = 0;
                for (; s < i.length - 1;) {
                    if (o()) return {};
                    const t = r(i[s]);
                    !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++s
                }
                return o() ? {} : {
                    obj: e,
                    k: r(i[s])
                }
            }

            function E(e, t, n) {
                const {
                    obj: r,
                    k: o
                } = R(e, t, Object);
                if (void 0 !== r || 1 === t.length) return void(r[o] = n);
                let i = t[t.length - 1],
                    s = t.slice(0, t.length - 1),
                    a = R(e, s, Object);
                for (; void 0 === a.obj && s.length;) i = `${s[s.length-1]}.${i}`, s = s.slice(0, s.length - 1), a = R(e, s, Object), a && a.obj && "undefined" !== typeof a.obj[`${a.k}.${i}`] && (a.obj = void 0);
                a.obj[`${a.k}.${i}`] = n
            }

            function A(e, t) {
                const {
                    obj: n,
                    k: r
                } = R(e, t);
                if (n) return n[r]
            }

            function I(e, t, n) {
                const r = A(e, n);
                return void 0 !== r ? r : A(t, n)
            }

            function F(e, t, n) {
                for (const r in t) "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r] instanceof String || "string" === typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : F(e[r], t[r], n) : e[r] = t[r]);
                return e
            }

            function T(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var D = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function V(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (e => D[e])) : e
            }
            const U = [" ", ",", "?", "!", ";"],
                M = new class {
                    constructor(e) {
                        this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
                    }
                    getRegExp(e) {
                        const t = this.regExpMap.get(e);
                        if (void 0 !== t) return t;
                        const n = new RegExp(e);
                        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
                    }
                }(20);

            function z(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (!e) return;
                if (e[t]) return e[t];
                const r = t.split(n);
                let o = e;
                for (let i = 0; i < r.length;) {
                    if (!o || "object" !== typeof o) return;
                    let e, t = "";
                    for (let s = i; s < r.length; ++s)
                        if (s !== i && (t += n), t += r[s], e = o[t], void 0 !== e) {
                            if (["string", "number", "boolean"].indexOf(typeof e) > -1 && s < r.length - 1) continue;
                            i += s - i + 1;
                            break
                        }
                    o = e
                }
                return o
            }

            function K(e) {
                return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
            }
            class _ extends C {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                }
                addNamespaces(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
                removeNamespaces(e) {
                    const t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
                getResource(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    const o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                        i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                    let s;
                    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], n && (Array.isArray(n) ? s.push(...n) : "string" === typeof n && o ? s.push(...n.split(o)) : s.push(n)));
                    const a = A(this.data, s);
                    return !a && !t && !n && e.indexOf(".") > -1 && (e = s[0], t = s[1], n = s.slice(2).join(".")), a || !i || "string" !== typeof n ? a : z(this.data && this.data[e] && this.data[e][t], n, o)
                }
                addResource(e, t, n, r) {
                    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    };
                    const i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator;
                    let s = [e, t];
                    n && (s = s.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (s = e.split("."), r = t, t = s[1]), this.addNamespaces(t), E(this.data, s, r), o.silent || this.emit("added", e, t, n, r)
                }
                addResources(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (const o in n)("string" === typeof n[o] || Array.isArray(n[o])) && this.addResource(e, t, o, n[o], {
                        silent: !0
                    });
                    r.silent || this.emit("added", e, t, n)
                }
                addResourceBundle(e, t, n, r, o) {
                    let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                            silent: !1,
                            skipCopy: !1
                        },
                        s = [e, t];
                    e.indexOf(".") > -1 && (s = e.split("."), r = n, n = t, t = s[1]), this.addNamespaces(t);
                    let a = A(this.data, s) || {};
                    i.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? F(a, n, o) : a = { ...a,
                        ...n
                    }, E(this.data, s, a), i.silent || this.emit("added", e, t, n)
                }
                removeResourceBundle(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }
                hasResourceBundle(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
                getResourceBundle(e, t) {
                    return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? { ...this.getResource(e, t)
                    } : this.getResource(e, t)
                }
                getDataByLanguage(e) {
                    return this.data[e]
                }
                hasLanguageSomeTranslations(e) {
                    const t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find((e => t[e] && Object.keys(t[e]).length > 0))
                }
                toJSON() {
                    return this.data
                }
            }
            var B = {
                processors: {},
                addPostProcessor(e) {
                    this.processors[e.name] = e
                },
                handle(e, t, n, r, o) {
                    return e.forEach((e => {
                        this.processors[e] && (t = this.processors[e].process(t, n, r, o))
                    })), t
                }
            };
            const J = {};
            class H extends C {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(),
                        function(e, t, n) {
                            e.forEach((e => {
                                t[e] && (n[e] = t[e])
                            }))
                        }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = P.create("translator")
                }
                changeLanguage(e) {
                    e && (this.language = e)
                }
                exists(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (void 0 === e || null === e) return !1;
                    const n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
                extractFromKey(e, t) {
                    let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    const r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator;
                    let o = t.ns || this.options.defaultNS || [];
                    const i = n && e.indexOf(n) > -1,
                        s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && ! function(e, t, n) {
                            t = t || "", n = n || "";
                            const r = U.filter((e => t.indexOf(e) < 0 && n.indexOf(e) < 0));
                            if (0 === r.length) return !0;
                            const o = M.getRegExp(`(${r.map((e=>"?"===e?"\\?":e)).join("|")})`);
                            let i = !o.test(e);
                            if (!i) {
                                const t = e.indexOf(n);
                                t > 0 && !o.test(e.substring(0, t)) && (i = !0)
                            }
                            return i
                        }(e, n, r);
                    if (i && !s) {
                        const t = e.match(this.interpolator.nestingRegexp);
                        if (t && t.length > 0) return {
                            key: e,
                            namespaces: o
                        };
                        const i = e.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()), e = i.join(r)
                    }
                    return "string" === typeof o && (o = [o]), {
                        key: e,
                        namespaces: o
                    }
                }
                translate(e, t, n) {
                    if ("object" !== typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" === typeof t && (t = { ...t
                        }), t || (t = {}), void 0 === e || null === e) return "";
                    Array.isArray(e) || (e = [String(e)]);
                    const r = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
                        o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        {
                            key: i,
                            namespaces: s
                        } = this.extractFromKey(e[e.length - 1], t),
                        a = s[s.length - 1],
                        l = t.lng || this.language,
                        u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (l && "cimode" === l.toLowerCase()) {
                        if (u) {
                            const e = t.nsSeparator || this.options.nsSeparator;
                            return r ? {
                                res: `${a}${e}${i}`,
                                usedKey: i,
                                exactUsedKey: i,
                                usedLng: l,
                                usedNS: a,
                                usedParams: this.getUsedParamsDetails(t)
                            } : `${a}${e}${i}`
                        }
                        return r ? {
                            res: i,
                            usedKey: i,
                            exactUsedKey: i,
                            usedLng: l,
                            usedNS: a,
                            usedParams: this.getUsedParamsDetails(t)
                        } : i
                    }
                    const c = this.resolve(e, t);
                    let p = c && c.res;
                    const f = c && c.usedKey || i,
                        g = c && c.exactUsedKey || i,
                        h = Object.prototype.toString.apply(p),
                        d = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                        m = !this.i18nFormat || this.i18nFormat.handleAsObject;
                    if (m && p && ("string" !== typeof p && "boolean" !== typeof p && "number" !== typeof p) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) < 0 && ("string" !== typeof d || !Array.isArray(p))) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            const e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, p, { ...t,
                                ns: s
                            }) : `key '${i} (${this.language})' returned an object instead of string.`;
                            return r ? (c.res = e, c.usedParams = this.getUsedParamsDetails(t), c) : e
                        }
                        if (o) {
                            const e = Array.isArray(p),
                                n = e ? [] : {},
                                r = e ? g : f;
                            for (const i in p)
                                if (Object.prototype.hasOwnProperty.call(p, i)) {
                                    const e = `${r}${o}${i}`;
                                    n[i] = this.translate(e, { ...t,
                                        joinArrays: !1,
                                        ns: s
                                    }), n[i] === e && (n[i] = p[i])
                                }
                            p = n
                        }
                    } else if (m && "string" === typeof d && Array.isArray(p)) p = p.join(d), p && (p = this.extendTranslation(p, e, t, n));
                    else {
                        let r = !1,
                            s = !1;
                        const u = void 0 !== t.count && "string" !== typeof t.count,
                            f = H.hasDefaultValue(t),
                            g = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
                            h = t.ordinal && u ? this.pluralResolver.getSuffix(l, t.count, {
                                ordinal: !1
                            }) : "",
                            d = u && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi(),
                            m = d && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${g}`] || t[`defaultValue${h}`] || t.defaultValue;
                        !this.isValidLookup(p) && f && (r = !0, p = m), this.isValidLookup(p) || (s = !0, p = i);
                        const y = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && s ? void 0 : p,
                            v = f && m !== p && this.options.updateMissing;
                        if (s || r || v) {
                            if (this.logger.log(v ? "updateKey" : "missingKey", l, a, i, v ? m : p), o) {
                                const e = this.resolve(i, { ...t,
                                    keySeparator: !1
                                });
                                e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let e = [];
                            const n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && n && n[0])
                                for (let t = 0; t < n.length; t++) e.push(n[t]);
                            else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                            const r = (e, n, r) => {
                                const o = f && r !== p ? r : y;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(e, a, n, o, v, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, a, n, o, v, t), this.emit("missingKey", e, a, n, p)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && u ? e.forEach((e => {
                                const n = this.pluralResolver.getSuffixes(e, t);
                                d && t[`defaultValue${this.options.pluralSeparator}zero`] && n.indexOf(`${this.options.pluralSeparator}zero`) < 0 && n.push(`${this.options.pluralSeparator}zero`), n.forEach((n => {
                                    r([e], i + n, t[`defaultValue${n}`] || m)
                                }))
                            })) : r(e, i, m))
                        }
                        p = this.extendTranslation(p, e, t, c, n), s && p === i && this.options.appendNamespaceToMissingKey && (p = `${a}:${i}`), (s || r) && this.options.parseMissingKeyHandler && (p = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${i}` : i, r ? p : void 0) : this.options.parseMissingKeyHandler(p))
                    }
                    return r ? (c.res = p, c.usedParams = this.getUsedParamsDetails(t), c) : p
                }
                extendTranslation(e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
                        ...n
                    }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r
                    });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init({ ...n,
                            interpolation: { ...this.options.interpolation,
                                ...n.interpolation
                            }
                        });
                        const s = "string" === typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        let a;
                        if (s) {
                            const t = e.match(this.interpolator.nestingRegexp);
                            a = t && t.length
                        }
                        let l = n.replace && "string" !== typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (l = { ...this.options.interpolation.defaultVariables,
                                ...l
                            }), e = this.interpolator.interpolate(e, l, n.lng || this.language, n), s) {
                            const t = e.match(this.interpolator.nestingRegexp);
                            a < (t && t.length) && (n.nest = !1)
                        }!n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, r = new Array(e), s = 0; s < e; s++) r[s] = arguments[s];
                            return o && o[0] === r[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`), null) : i.translate(...r, t)
                        }), n)), n.interpolation && this.interpolator.reset()
                    }
                    const s = n.postProcess || this.options.postProcess,
                        a = "string" === typeof s ? [s] : s;
                    return void 0 !== e && null !== e && a && a.length && !1 !== n.applyPostProcessor && (e = B.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
                        i18nResolved: { ...r,
                            usedParams: this.getUsedParamsDetails(n)
                        },
                        ...n
                    } : n, this)), e
                }
                resolve(e) {
                    let t, n, r, o, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" === typeof e && (e = [e]), e.forEach((e => {
                        if (this.isValidLookup(t)) return;
                        const a = this.extractFromKey(e, s),
                            l = a.key;
                        n = l;
                        let u = a.namespaces;
                        this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                        const c = void 0 !== s.count && "string" !== typeof s.count,
                            p = c && !s.ordinal && 0 === s.count && this.pluralResolver.shouldUseIntlApi(),
                            f = void 0 !== s.context && ("string" === typeof s.context || "number" === typeof s.context) && "" !== s.context,
                            g = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
                        u.forEach((e => {
                            this.isValidLookup(t) || (i = e, !J[`${g[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(i) && (J[`${g[0]}-${e}`] = !0, this.logger.warn(`key "${n}" for languages "${g.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((n => {
                                if (this.isValidLookup(t)) return;
                                o = n;
                                const i = [l];
                                if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(i, l, n, e, s);
                                else {
                                    let e;
                                    c && (e = this.pluralResolver.getSuffix(n, s.count, s));
                                    const t = `${this.options.pluralSeparator}zero`,
                                        r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (c && (i.push(l + e), s.ordinal && 0 === e.indexOf(r) && i.push(l + e.replace(r, this.options.pluralSeparator)), p && i.push(l + t)), f) {
                                        const n = `${l}${this.options.contextSeparator}${s.context}`;
                                        i.push(n), c && (i.push(n + e), s.ordinal && 0 === e.indexOf(r) && i.push(n + e.replace(r, this.options.pluralSeparator)), p && i.push(n + t))
                                    }
                                }
                                let a;
                                for (; a = i.pop();) this.isValidLookup(t) || (r = a, t = this.getResource(n, e, a, s))
                            })))
                        }))
                    })), {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i
                    }
                }
                isValidLookup(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
                getResource(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
                getUsedParamsDetails() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
                        n = e.replace && "string" !== typeof e.replace;
                    let r = n ? e.replace : e;
                    if (n && "undefined" !== typeof e.count && (r.count = e.count), this.options.interpolation.defaultVariables && (r = { ...this.options.interpolation.defaultVariables,
                            ...r
                        }), !n) {
                        r = { ...r
                        };
                        for (const e of t) delete r[e]
                    }
                    return r
                }
                static hasDefaultValue(e) {
                    const t = "defaultValue";
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                    return !1
                }
            }

            function Z(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            class q {
                constructor(e) {
                    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = P.create("languageUtils")
                }
                getScriptPartFromCode(e) {
                    if (!(e = K(e)) || e.indexOf("-") < 0) return null;
                    const t = e.split("-");
                    return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
                getLanguagePartFromCode(e) {
                    if (!(e = K(e)) || e.indexOf("-") < 0) return e;
                    const t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
                formatLanguageCode(e) {
                    if ("string" === typeof e && e.indexOf("-") > -1) {
                        const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
                        let n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((e => e.toLowerCase())) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Z(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Z(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Z(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
                isSupportedCode(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
                getBestMatchFromCodes(e) {
                    if (!e) return null;
                    let t;
                    return e.forEach((e => {
                        if (t) return;
                        const n = this.formatLanguageCode(e);
                        this.options.supportedLngs && !this.isSupportedCode(n) || (t = n)
                    })), !t && this.options.supportedLngs && e.forEach((e => {
                        if (t) return;
                        const n = this.getLanguagePartFromCode(e);
                        if (this.isSupportedCode(n)) return t = n;
                        t = this.options.supportedLngs.find((e => e === n ? e : e.indexOf("-") < 0 && n.indexOf("-") < 0 ? void 0 : e.indexOf("-") > 0 && n.indexOf("-") < 0 && e.substring(0, e.indexOf("-")) === n || 0 === e.indexOf(n) && n.length > 1 ? e : void 0))
                    })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
                }
                getFallbackCodes(e, t) {
                    if (!e) return [];
                    if ("function" === typeof e && (e = e(t)), "string" === typeof e && (e = [e]), Array.isArray(e)) return e;
                    if (!t) return e.default || [];
                    let n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                }
                toResolveHierarchy(e, t) {
                    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                        r = [],
                        o = e => {
                            e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                        };
                    return "string" === typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" === typeof e && o(this.formatLanguageCode(e)), n.forEach((e => {
                        r.indexOf(e) < 0 && o(this.formatLanguageCode(e))
                    })), r
                }
            }
            let W = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                Y = {
                    1: function(e) {
                        return Number(e > 1)
                    },
                    2: function(e) {
                        return Number(1 != e)
                    },
                    3: function(e) {
                        return 0
                    },
                    4: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    5: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                    },
                    6: function(e) {
                        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                    },
                    7: function(e) {
                        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    8: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                    },
                    9: function(e) {
                        return Number(e >= 2)
                    },
                    10: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                    },
                    11: function(e) {
                        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                    },
                    12: function(e) {
                        return Number(e % 10 != 1 || e % 100 == 11)
                    },
                    13: function(e) {
                        return Number(0 !== e)
                    },
                    14: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                    },
                    15: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    16: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                    },
                    17: function(e) {
                        return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                    },
                    18: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                    },
                    19: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                    },
                    20: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                    },
                    21: function(e) {
                        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                    },
                    22: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                    }
                };
            const G = ["v1", "v2", "v3"],
                Q = ["v4"],
                X = {
                    zero: 0,
                    one: 1,
                    two: 2,
                    few: 3,
                    many: 4,
                    other: 5
                };
            class ee {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.languageUtils = e, this.options = t, this.logger = P.create("pluralResolver"), this.options.compatibilityJSON && !Q.includes(this.options.compatibilityJSON) || "undefined" !== typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = function() {
                        const e = {};
                        return W.forEach((t => {
                            t.lngs.forEach((n => {
                                e[n] = {
                                    numbers: t.nr,
                                    plurals: Y[t.fc]
                                }
                            }))
                        })), e
                    }()
                }
                addRule(e, t) {
                    this.rules[e] = t
                }
                getRule(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi()) try {
                        return new Intl.PluralRules(K("dev" === e ? "en" : e), {
                            type: t.ordinal ? "ordinal" : "cardinal"
                        })
                    } catch (n) {
                        return
                    }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
                needsPlural(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
                getPluralFormsOfKey(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map((e => `${t}${e}`))
                }
                getSuffixes(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = this.getRule(e, t);
                    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort(((e, t) => X[e] - X[t])).map((e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`)) : n.numbers.map((n => this.getSuffix(e, n, t))) : []
                }
                getSuffix(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}` : this.getSuffixRetroCompatible(r, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
                }
                getSuffixRetroCompatible(e, t) {
                    const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
                    let r = e.numbers[n];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                    const o = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
                    return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" === typeof r ? `_plural_${r.toString()}` : o() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? o() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
                }
                shouldUseIntlApi() {
                    return !G.includes(this.options.compatibilityJSON)
                }
            }

            function te(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                    o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    i = I(e, t, n);
                return !i && o && "string" === typeof n && (i = z(e, n, r), void 0 === i && (i = z(t, n, r))), i
            }
            class ne {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = P.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (e => e), this.init(e)
                }
                init() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    const {
                        escape: t,
                        escapeValue: n,
                        useRawValueToEscape: r,
                        prefix: o,
                        prefixEscaped: i,
                        suffix: s,
                        suffixEscaped: a,
                        formatSeparator: l,
                        unescapeSuffix: u,
                        unescapePrefix: c,
                        nestingPrefix: p,
                        nestingPrefixEscaped: f,
                        nestingSuffix: g,
                        nestingSuffixEscaped: h,
                        nestingOptionsSeparator: d,
                        maxReplaces: m,
                        alwaysFormat: y
                    } = e.interpolation;
                    this.escape = void 0 !== t ? t : V, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== r && r, this.prefix = o ? T(o) : i || "{{", this.suffix = s ? T(s) : a || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = p ? T(p) : f || T("$t("), this.nestingSuffix = g ? T(g) : h || T(")"), this.nestingOptionsSeparator = d || ",", this.maxReplaces = m || 1e3, this.alwaysFormat = void 0 !== y && y, this.resetRegExp()
                }
                reset() {
                    this.options && this.init(this.options)
                }
                resetRegExp() {
                    const e = (e, t) => e && e.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
                    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
                }
                interpolate(e, t, n, r) {
                    let o, i, s;
                    const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                    function l(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    const u = e => {
                        if (e.indexOf(this.formatSeparator) < 0) {
                            const o = te(t, a, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                            return this.alwaysFormat ? this.format(o, void 0, n, { ...r,
                                ...t,
                                interpolationkey: e
                            }) : o
                        }
                        const o = e.split(this.formatSeparator),
                            i = o.shift().trim(),
                            s = o.join(this.formatSeparator).trim();
                        return this.format(te(t, a, i, this.options.keySeparator, this.options.ignoreJSONStructure), s, n, { ...r,
                            ...t,
                            interpolationkey: i
                        })
                    };
                    this.resetRegExp();
                    const c = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
                        p = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: e => l(e)
                    }, {
                        regex: this.regexp,
                        safeValue: e => this.escapeValue ? l(this.escape(e)) : l(e)
                    }].forEach((t => {
                        for (s = 0; o = t.regex.exec(e);) {
                            const n = o[1].trim();
                            if (i = u(n), void 0 === i)
                                if ("function" === typeof c) {
                                    const t = c(e, o, r);
                                    i = "string" === typeof t ? t : ""
                                } else if (r && Object.prototype.hasOwnProperty.call(r, n)) i = "";
                            else {
                                if (p) {
                                    i = o[0];
                                    continue
                                }
                                this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), i = ""
                            } else "string" === typeof i || this.useRawValueToEscape || (i = $(i));
                            const a = t.safeValue(i);
                            if (e = e.replace(o[0], a), p ? (t.regex.lastIndex += i.length, t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0, s++, s >= this.maxReplaces) break
                        }
                    })), e
                }
                nest(e, t) {
                    let n, r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};

                    function s(e, t) {
                        const n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0) return e;
                        const r = e.split(new RegExp(`${n}[ ]*{`));
                        let i = `{${r[1]}`;
                        e = r[0], i = this.interpolate(i, o);
                        const s = i.match(/'/g),
                            a = i.match(/"/g);
                        (s && s.length % 2 === 0 && !a || a.length % 2 !== 0) && (i = i.replace(/'/g, '"'));
                        try {
                            o = JSON.parse(i), t && (o = { ...t,
                                ...o
                            })
                        } catch (l) {
                            return this.logger.warn(`failed parsing options string in nesting for key ${e}`, l), `${e}${n}${i}`
                        }
                        return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, e
                    }
                    for (; n = this.nestingRegexp.exec(e);) {
                        let a = [];
                        o = { ...i
                        }, o = o.replace && "string" !== typeof o.replace ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
                        let l = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            const e = n[1].split(this.formatSeparator).map((e => e.trim()));
                            n[1] = e.shift(), a = e, l = !0
                        }
                        if (r = t(s.call(this, n[1].trim(), o), o), r && n[0] === e && "string" !== typeof r) return r;
                        "string" !== typeof r && (r = $(r)), r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), r = ""), l && (r = a.reduce(((e, t) => this.format(e, t, i.lng, { ...i,
                            interpolationkey: n[1].trim()
                        })), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
                    }
                    return e
                }
            }

            function re(e) {
                const t = {};
                return function(n, r, o) {
                    const i = r + JSON.stringify(o);
                    let s = t[i];
                    return s || (s = e(K(r), o), t[i] = s), s(n)
                }
            }
            class oe {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = P.create("formatter"), this.options = e, this.formats = {
                        number: re(((e, t) => {
                            const n = new Intl.NumberFormat(e, { ...t
                            });
                            return e => n.format(e)
                        })),
                        currency: re(((e, t) => {
                            const n = new Intl.NumberFormat(e, { ...t,
                                style: "currency"
                            });
                            return e => n.format(e)
                        })),
                        datetime: re(((e, t) => {
                            const n = new Intl.DateTimeFormat(e, { ...t
                            });
                            return e => n.format(e)
                        })),
                        relativetime: re(((e, t) => {
                            const n = new Intl.RelativeTimeFormat(e, { ...t
                            });
                            return e => n.format(e, t.range || "day")
                        })),
                        list: re(((e, t) => {
                            const n = new Intl.ListFormat(e, { ...t
                            });
                            return e => n.format(e)
                        }))
                    }, this.init(e)
                }
                init(e) {
                    const t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }).interpolation;
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","
                }
                add(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
                addCached(e, t) {
                    this.formats[e.toLowerCase().trim()] = re(t)
                }
                format(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return t.split(this.formatSeparator).reduce(((e, t) => {
                        const {
                            formatName: o,
                            formatOptions: i
                        } = function(e) {
                            let t = e.toLowerCase().trim();
                            const n = {};
                            if (e.indexOf("(") > -1) {
                                const r = e.split("(");
                                t = r[0].toLowerCase().trim();
                                const o = r[1].substring(0, r[1].length - 1);
                                "currency" === t && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : "relativetime" === t && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((e => {
                                    if (e) {
                                        const [t, ...r] = e.split(":"), o = r.join(":").trim().replace(/^'+|'+$/g, ""), i = t.trim();
                                        n[i] || (n[i] = o), "false" === o && (n[i] = !1), "true" === o && (n[i] = !0), isNaN(o) || (n[i] = parseInt(o, 10))
                                    }
                                }))
                            }
                            return {
                                formatName: t,
                                formatOptions: n
                            }
                        }(t);
                        if (this.formats[o]) {
                            let t = e;
                            try {
                                const s = r && r.formatParams && r.formatParams[r.interpolationkey] || {},
                                    a = s.locale || s.lng || r.locale || r.lng || n;
                                t = this.formats[o](e, a, { ...i,
                                    ...r,
                                    ...s
                                })
                            } catch (s) {
                                this.logger.warn(s)
                            }
                            return t
                        }
                        return this.logger.warn(`there was no format function for ${o}`), e
                    }), e)
                }
            }
            class ie extends C {
                constructor(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = P.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, r.backend, r)
                }
                queueLoad(e, t, n, r) {
                    const o = {},
                        i = {},
                        s = {},
                        a = {};
                    return e.forEach((e => {
                        let r = !0;
                        t.forEach((t => {
                            const s = `${e}|${t}`;
                            !n.reload && this.store.hasResourceBundle(e, t) ? this.state[s] = 2 : this.state[s] < 0 || (1 === this.state[s] ? void 0 === i[s] && (i[s] = !0) : (this.state[s] = 1, r = !1, void 0 === i[s] && (i[s] = !0), void 0 === o[s] && (o[s] = !0), void 0 === a[t] && (a[t] = !0)))
                        })), r || (s[e] = !0)
                    })), (Object.keys(o).length || Object.keys(i).length) && this.queue.push({
                        pending: i,
                        pendingCount: Object.keys(i).length,
                        loaded: {},
                        errors: [],
                        callback: r
                    }), {
                        toLoad: Object.keys(o),
                        pending: Object.keys(i),
                        toLoadLanguages: Object.keys(s),
                        toLoadNamespaces: Object.keys(a)
                    }
                }
                loaded(e, t, n) {
                    const r = e.split("|"),
                        o = r[0],
                        i = r[1];
                    t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n, void 0, void 0, {
                        skipCopy: !0
                    }), this.state[e] = t ? -1 : 2;
                    const s = {};
                    this.queue.forEach((n => {
                        ! function(e, t, n, r) {
                            const {
                                obj: o,
                                k: i
                            } = R(e, t, Object);
                            o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n)
                        }(n.loaded, [o], i),
                        function(e, t) {
                            void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
                        }(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((e => {
                            s[e] || (s[e] = {});
                            const t = n.loaded[e];
                            t.length && t.forEach((t => {
                                void 0 === s[e][t] && (s[e][t] = !0)
                            }))
                        })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    })), this.emit("loaded", s), this.queue = this.queue.filter((e => !e.done))
                }
                read(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                        i = arguments.length > 5 ? arguments[5] : void 0;
                    if (!e.length) return i(null, {});
                    if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: n,
                        tried: r,
                        wait: o,
                        callback: i
                    });
                    this.readingCalls++;
                    const s = (s, a) => {
                            if (this.readingCalls--, this.waitingReads.length > 0) {
                                const e = this.waitingReads.shift();
                                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                            }
                            s && a && r < this.maxRetries ? setTimeout((() => {
                                this.read.call(this, e, t, n, r + 1, 2 * o, i)
                            }), o) : i(s, a)
                        },
                        a = this.backend[n].bind(this.backend);
                    if (2 !== a.length) return a(e, t, s);
                    try {
                        const n = a(e, t);
                        n && "function" === typeof n.then ? n.then((e => s(null, e))).catch(s) : s(null, n)
                    } catch (l) {
                        s(l)
                    }
                }
                prepareLoading(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                    "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
                    const o = this.queueLoad(e, t, n, r);
                    if (!o.toLoad.length) return o.pending.length || r(), null;
                    o.toLoad.forEach((e => {
                        this.loadOne(e)
                    }))
                }
                load(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
                reload(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
                loadOne(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    const n = e.split("|"),
                        r = n[0],
                        o = n[1];
                    this.read(r, o, "read", void 0, void 0, ((n, i) => {
                        n && this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`, n), !n && i && this.logger.log(`${t}loaded namespace ${o} for language ${r}`, i), this.loaded(e, n, i)
                    }))
                }
                saveMissing(e, t, n, r, o) {
                    let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {};
                    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    else if (void 0 !== n && null !== n && "" !== n) {
                        if (this.backend && this.backend.create) {
                            const l = { ...i,
                                    isUpdate: o
                                },
                                u = this.backend.create.bind(this.backend);
                            if (u.length < 6) try {
                                let o;
                                o = 5 === u.length ? u(e, t, n, r, l) : u(e, t, n, r), o && "function" === typeof o.then ? o.then((e => s(null, e))).catch(s) : s(null, o)
                            } catch (a) {
                                s(a)
                            } else u(e, t, n, r, s, l)
                        }
                        e && e[0] && this.store.addResource(e[0], t, n, r)
                    }
                }
            }

            function se() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !1,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(e) {
                        let t = {};
                        if ("object" === typeof e[1] && (t = e[1]), "string" === typeof e[1] && (t.defaultValue = e[1]), "string" === typeof e[2] && (t.tDescription = e[2]), "object" === typeof e[2] || "object" === typeof e[3]) {
                            const n = e[3] || e[2];
                            Object.keys(n).forEach((e => {
                                t[e] = n[e]
                            }))
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: e => e,
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !0
                    }
                }
            }

            function ae(e) {
                return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
            }

            function le() {}
            class ue extends C {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    var n;
                    if (super(), this.options = ae(e), this.services = {}, this.logger = P, this.modules = {
                            external: []
                        }, n = this, Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((e => {
                            "function" === typeof n[e] && (n[e] = n[e].bind(n))
                        })), t && !this.isInitialized && !e.isClone) {
                        if (!this.options.initImmediate) return this.init(e, t), this;
                        setTimeout((() => {
                            this.init(e, t)
                        }), 0)
                    }
                }
                init() {
                    var e = this;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    this.isInitializing = !0, "function" === typeof t && (n = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" === typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                    const r = se();

                    function o(e) {
                        return e ? "function" === typeof e ? new e : e : null
                    }
                    if (this.options = { ...r,
                            ...this.options,
                            ...ae(t)
                        }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = { ...r.interpolation,
                            ...this.options.interpolation
                        }), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator), !this.options.isClone) {
                        let t;
                        this.modules.logger ? P.init(o(this.modules.logger), this.options) : P.init(null, this.options), this.modules.formatter ? t = this.modules.formatter : "undefined" !== typeof Intl && (t = oe);
                        const n = new q(this.options);
                        this.store = new _(this.options.resources, this.options);
                        const i = this.services;
                        i.logger = P, i.resourceStore = this.store, i.languageUtils = n, i.pluralResolver = new ee(n, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), !t || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (i.formatter = o(t), i.formatter.init(i, this.options), this.options.interpolation.format = i.formatter.format.bind(i.formatter)), i.interpolator = new ne(this.options), i.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, i.backendConnector = new ie(o(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            e.emit(t, ...r)
                        })), this.modules.languageDetector && (i.languageDetector = o(this.modules.languageDetector), i.languageDetector.init && i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = o(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new H(this.services, this.options), this.translator.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            e.emit(t, ...r)
                        })), this.modules.external.forEach((e => {
                            e.init && e.init(this)
                        }))
                    }
                    if (this.format = this.options.interpolation.format, n || (n = le), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        const e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                    ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((t => {
                        this[t] = function() {
                            return e.store[t](...arguments)
                        }
                    }));
                    ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((t => {
                        this[t] = function() {
                            return e.store[t](...arguments), e
                        }
                    }));
                    const i = N(),
                        s = () => {
                            const e = (e, t) => {
                                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i.resolve(t), n(e, t)
                            };
                            if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e(null, this.t.bind(this));
                            this.changeLanguage(this.options.lng, e)
                        };
                    return this.options.resources || !this.options.initImmediate ? s() : setTimeout(s, 0), i
                }
                loadResources(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le;
                    const n = "string" === typeof e ? e : this.language;
                    if ("function" === typeof e && (t = e), !this.options.resources || this.options.partialBundledLanguages) {
                        if (n && "cimode" === n.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return t();
                        const e = [],
                            r = t => {
                                if (!t) return;
                                if ("cimode" === t) return;
                                this.services.languageUtils.toResolveHierarchy(t).forEach((t => {
                                    "cimode" !== t && e.indexOf(t) < 0 && e.push(t)
                                }))
                            };
                        if (n) r(n);
                        else {
                            this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e => r(e)))
                        }
                        this.options.preload && this.options.preload.forEach((e => r(e))), this.services.backendConnector.load(e, this.options.ns, (e => {
                            e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), t(e)
                        }))
                    } else t(null)
                }
                reloadResources(e, t, n) {
                    const r = N();
                    return e || (e = this.languages), t || (t = this.options.ns), n || (n = le), this.services.backendConnector.reload(e, t, (e => {
                        r.resolve(), n(e)
                    })), r
                }
                use(e) {
                    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && B.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
                setResolvedLanguage(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (let t = 0; t < this.languages.length; t++) {
                            const e = this.languages[t];
                            if (!(["cimode", "dev"].indexOf(e) > -1) && this.store.hasLanguageSomeTranslations(e)) {
                                this.resolvedLanguage = e;
                                break
                            }
                        }
                }
                changeLanguage(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    const r = N();
                    this.emit("languageChanging", e);
                    const o = e => {
                            this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                        },
                        i = (e, i) => {
                            i ? (o(i), this.translator.changeLanguage(i), this.isLanguageChangingTo = void 0, this.emit("languageChanged", i), this.logger.log("languageChanged", i)) : this.isLanguageChangingTo = void 0, r.resolve((function() {
                                return n.t(...arguments)
                            })), t && t(e, (function() {
                                return n.t(...arguments)
                            }))
                        },
                        s = t => {
                            e || t || !this.services.languageDetector || (t = []);
                            const n = "string" === typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                            n && (this.language || o(n), this.translator.language || this.translator.changeLanguage(n), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)), this.loadResources(n, (e => {
                                i(e, n)
                            }))
                        };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e) : s(this.services.languageDetector.detect()), r
                }
                getFixedT(e, t, n) {
                    var r = this;
                    const o = function(e, t) {
                        let i;
                        if ("object" !== typeof t) {
                            for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) a[l - 2] = arguments[l];
                            i = r.options.overloadTranslationOptionHandler([e, t].concat(a))
                        } else i = { ...t
                        };
                        i.lng = i.lng || o.lng, i.lngs = i.lngs || o.lngs, i.ns = i.ns || o.ns, i.keyPrefix = i.keyPrefix || n || o.keyPrefix;
                        const u = r.options.keySeparator || ".";
                        let c;
                        return c = i.keyPrefix && Array.isArray(e) ? e.map((e => `${i.keyPrefix}${u}${e}`)) : i.keyPrefix ? `${i.keyPrefix}${u}${e}` : e, r.t(c, i)
                    };
                    return "string" === typeof e ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = n, o
                }
                t() {
                    return this.translator && this.translator.translate(...arguments)
                }
                exists() {
                    return this.translator && this.translator.exists(...arguments)
                }
                setDefaultNamespace(e) {
                    this.options.defaultNS = e
                }
                hasLoadedNamespace(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    const n = t.lng || this.resolvedLanguage || this.languages[0],
                        r = !!this.options && this.options.fallbackLng,
                        o = this.languages[this.languages.length - 1];
                    if ("cimode" === n.toLowerCase()) return !0;
                    const i = (e, t) => {
                        const n = this.services.backendConnector.state[`${e}|${t}`];
                        return -1 === n || 2 === n
                    };
                    if (t.precheck) {
                        const e = t.precheck(this, i);
                        if (void 0 !== e) return e
                    }
                    return !!this.hasResourceBundle(n, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!i(n, e) || r && !i(o, e)))
                }
                loadNamespaces(e, t) {
                    const n = N();
                    return this.options.ns ? ("string" === typeof e && (e = [e]), e.forEach((e => {
                        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                    })), this.loadResources((e => {
                        n.resolve(), t && t(e)
                    })), n) : (t && t(), Promise.resolve())
                }
                loadLanguages(e, t) {
                    const n = N();
                    "string" === typeof e && (e = [e]);
                    const r = this.options.preload || [],
                        o = e.filter((e => r.indexOf(e) < 0 && this.services.languageUtils.isSupportedCode(e)));
                    return o.length ? (this.options.preload = r.concat(o), this.loadResources((e => {
                        n.resolve(), t && t(e)
                    })), n) : (t && t(), Promise.resolve())
                }
                dir(e) {
                    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
                    const t = this.services && this.services.languageUtils || new q(se());
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                }
                static createInstance() {
                    return new ue(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0)
                }
                cloneInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : le;
                    const n = e.forkResourceStore;
                    n && delete e.forkResourceStore;
                    const r = { ...this.options,
                            ...e,
                            isClone: !0
                        },
                        o = new ue(r);
                    void 0 === e.debug && void 0 === e.prefix || (o.logger = o.logger.clone(e));
                    return ["store", "services", "language"].forEach((e => {
                        o[e] = this[e]
                    })), o.services = { ...this.services
                    }, o.services.utils = {
                        hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
                    }, n && (o.store = new _(this.store.data, r), o.services.resourceStore = o.store), o.translator = new H(o.services, r), o.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        o.emit(e, ...n)
                    })), o.init(r, t), o.translator.options = r, o.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
                    }, o
                }
                toJSON() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }
            const ce = ue.createInstance();
            ce.createInstance = ue.createInstance;
            ce.createInstance, ce.dir, ce.init, ce.loadResources, ce.reloadResources, ce.use, ce.changeLanguage, ce.getFixedT, ce.t, ce.exists, ce.setDefaultNamespace, ce.hasLoadedNamespace, ce.loadNamespaces, ce.loadLanguages;
            var pe = function(e) {
                    void 0 === e.ns && (e.ns = []);
                    var t, n, r = ce.createInstance(e);
                    r.isInitialized ? t = Promise.resolve(ce.t) : (null === e || void 0 === e || null === (n = e.use) || void 0 === n || n.forEach((function(e) {
                        return r.use(e)
                    })), "function" === typeof e.onPreInitI18next && e.onPreInitI18next(r), t = r.init(e));
                    return {
                        i18n: r,
                        initPromise: t
                    }
                },
                fe = s.createElement;

            function ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function he(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ge(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var de = function(e, t) {
                    if (t && e.isInitialized)
                        for (var n = 0, r = Object.keys(t); n < r.length; n++)
                            for (var o = r[n], i = 0, s = Object.keys(t[o]); i < s.length; i++) {
                                var a, l = s[i];
                                null !== e && void 0 !== e && null !== (a = e.store) && void 0 !== a && a.data && e.store.data[o] && e.store.data[o][l] || e.addResourceBundle(o, l, t[o][l], !0, !0)
                            }
                },
                me = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = function(n) {
                            var i, a, l = (n.pageProps || {})._nextI18Next,
                                u = null !== (i = null === l || void 0 === l ? void 0 : l.initialLocale) && void 0 !== i ? i : null === n || void 0 === n || null === (a = n.router) || void 0 === a ? void 0 : a.locale,
                                c = null === l || void 0 === l ? void 0 : l.ns,
                                p = (0, s.useRef)(null),
                                f = (0, s.useMemo)((function() {
                                    var e;
                                    if (!l && !t) return null;
                                    var n = null !== t && void 0 !== t ? t : null === l || void 0 === l ? void 0 : l.userConfig;
                                    if (!n) throw new Error("appWithTranslation was called without a next-i18next config");
                                    if (null === n || void 0 === n || !n.i18n) throw new Error("appWithTranslation was called without config.i18n");
                                    if (null === n || void 0 === n || null === (e = n.i18n) || void 0 === e || !e.defaultLocale) throw new Error("config.i18n does not include a defaultLocale property");
                                    var r = (l || {}).initialI18nStore,
                                        o = null !== t && void 0 !== t && t.resources ? t.resources : r;
                                    u || (u = n.i18n.defaultLocale);
                                    var i = p.current;
                                    return i ? de(i, o) : (i = pe(he(he(he({}, O(he(he({}, n), {}, {
                                        lng: u
                                    }))), {}, {
                                        lng: u
                                    }, c && {
                                        ns: c
                                    }), {}, {
                                        resources: o
                                    })).i18n, de(i, o), i, p.current = i), i
                                }), [l, u, c]);
                            return y((function() {
                                f && u && f.changeLanguage(u)
                            }), [f, u]), null !== f ? fe(r.a3, {
                                i18n: f
                            }, fe(e, n)) : fe(e, (0, o.Z)({
                                key: u
                            }, n))
                        };
                    return l()(n, e)
                }
        },
        91118: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(78510)
            }])
        },
        33273: function(e, t, n) {
            "use strict";
            var r = n(1864);
            e.exports = {
                i18n: {
                    defaultLocale: "en",
                    locales: ["de", "en", "es", "fr", "it", "nl", "pt"],
                    localeDetection: !1
                },
                localePath: r.resolve("./public/locales")
            }
        },
        78510: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(14251),
                o = n(85893),
                i = n(89774),
                s = (n(74831), n(57805), n(9008)),
                a = n.n(s),
                l = n(33273),
                u = n.n(l);
            "undefined" !== typeof navigator && (function() {
                var e, t, n = navigator.userAgent,
                    r = n.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (/trident/i.test(r[1])) return "IE " + ((t = /\brv[ :]+(\d+)/g.exec(n) || [])[1] || "");
                if ("Chrome" === r[1] && null != (t = n.match(/\b(OPR|Edge)\/(\d+)/))) return t.slice(1).join(" ").replace("OPR", "Opera");
                r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = n.match(/version\/(\d+)/i)) && r.splice(1, 1, t[1]);
                var o = {
                    browser: r[0],
                    version: r[1],
                    supported: !0
                };
                switch (null === (e = r[0]) || void 0 === e ? void 0 : e.toLowerCase()) {
                    case "chrome":
                    case "firefox":
                        o.supported = r[1] >= 80;
                        break;
                    case "safari":
                        o.supported = r[1] >= 15;
                        break;
                    case "opera":
                        o.supported = r[1] >= 66;
                        break;
                    case "msie":
                        o.supported = !1;
                        break;
                    default:
                        o.supported = !0
                }
                return o
            }().supported || (window.unsupportedBrowser = !0));
            t.default = (0, i.Jc)((function(e) {
                var t, n = e.Component,
                    i = e.pageProps;
                return (n.getLayout || function(e) {
                    return e
                })((0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(n, (0, r.Z)({}, i)), (0, o.jsx)(a(), {
                        children: (0, o.jsx)("meta", {
                            httpEquiv: "content-language",
                            content: (null === i || void 0 === i || null === (t = i.website) || void 0 === t ? void 0 : t.language) || "en"
                        })
                    })]
                }))
            }), u())
        },
        57805: function() {},
        74831: function() {},
        1864: function(e) {
            ! function() {
                "use strict";
                var t = {
                        114: function(e) {
                            function t(e) {
                                if ("string" !== typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
                            }

                            function n(e, t) {
                                for (var n, r = "", o = 0, i = -1, s = 0, a = 0; a <= e.length; ++a) {
                                    if (a < e.length) n = e.charCodeAt(a);
                                    else {
                                        if (47 === n) break;
                                        n = 47
                                    }
                                    if (47 === n) {
                                        if (i === a - 1 || 1 === s);
                                        else if (i !== a - 1 && 2 === s) {
                                            if (r.length < 2 || 2 !== o || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2))
                                                if (r.length > 2) {
                                                    var l = r.lastIndexOf("/");
                                                    if (l !== r.length - 1) {
                                                        -1 === l ? (r = "", o = 0) : o = (r = r.slice(0, l)).length - 1 - r.lastIndexOf("/"), i = a, s = 0;
                                                        continue
                                                    }
                                                } else if (2 === r.length || 1 === r.length) {
                                                r = "", o = 0, i = a, s = 0;
                                                continue
                                            }
                                            t && (r.length > 0 ? r += "/.." : r = "..", o = 2)
                                        } else r.length > 0 ? r += "/" + e.slice(i + 1, a) : r = e.slice(i + 1, a), o = a - i - 1;
                                        i = a, s = 0
                                    } else 46 === n && -1 !== s ? ++s : s = -1
                                }
                                return r
                            }
                            var r = {
                                resolve: function() {
                                    for (var e, r = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
                                        var s;
                                        i >= 0 ? s = arguments[i] : (void 0 === e && (e = ""), s = e), t(s), 0 !== s.length && (r = s + "/" + r, o = 47 === s.charCodeAt(0))
                                    }
                                    return r = n(r, !o), o ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : "."
                                },
                                normalize: function(e) {
                                    if (t(e), 0 === e.length) return ".";
                                    var r = 47 === e.charCodeAt(0),
                                        o = 47 === e.charCodeAt(e.length - 1);
                                    return 0 !== (e = n(e, !r)).length || r || (e = "."), e.length > 0 && o && (e += "/"), r ? "/" + e : e
                                },
                                isAbsolute: function(e) {
                                    return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                                },
                                join: function() {
                                    if (0 === arguments.length) return ".";
                                    for (var e, n = 0; n < arguments.length; ++n) {
                                        var o = arguments[n];
                                        t(o), o.length > 0 && (void 0 === e ? e = o : e += "/" + o)
                                    }
                                    return void 0 === e ? "." : r.normalize(e)
                                },
                                relative: function(e, n) {
                                    if (t(e), t(n), e === n) return "";
                                    if ((e = r.resolve(e)) === (n = r.resolve(n))) return "";
                                    for (var o = 1; o < e.length && 47 === e.charCodeAt(o); ++o);
                                    for (var i = e.length, s = i - o, a = 1; a < n.length && 47 === n.charCodeAt(a); ++a);
                                    for (var l = n.length - a, u = s < l ? s : l, c = -1, p = 0; p <= u; ++p) {
                                        if (p === u) {
                                            if (l > u) {
                                                if (47 === n.charCodeAt(a + p)) return n.slice(a + p + 1);
                                                if (0 === p) return n.slice(a + p)
                                            } else s > u && (47 === e.charCodeAt(o + p) ? c = p : 0 === p && (c = 0));
                                            break
                                        }
                                        var f = e.charCodeAt(o + p);
                                        if (f !== n.charCodeAt(a + p)) break;
                                        47 === f && (c = p)
                                    }
                                    var g = "";
                                    for (p = o + c + 1; p <= i; ++p) p !== i && 47 !== e.charCodeAt(p) || (0 === g.length ? g += ".." : g += "/..");
                                    return g.length > 0 ? g + n.slice(a + c) : (a += c, 47 === n.charCodeAt(a) && ++a, n.slice(a))
                                },
                                _makeLong: function(e) {
                                    return e
                                },
                                dirname: function(e) {
                                    if (t(e), 0 === e.length) return ".";
                                    for (var n = e.charCodeAt(0), r = 47 === n, o = -1, i = !0, s = e.length - 1; s >= 1; --s)
                                        if (47 === (n = e.charCodeAt(s))) {
                                            if (!i) {
                                                o = s;
                                                break
                                            }
                                        } else i = !1;
                                    return -1 === o ? r ? "/" : "." : r && 1 === o ? "//" : e.slice(0, o)
                                },
                                basename: function(e, n) {
                                    if (void 0 !== n && "string" !== typeof n) throw new TypeError('"ext" argument must be a string');
                                    t(e);
                                    var r, o = 0,
                                        i = -1,
                                        s = !0;
                                    if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                                        if (n.length === e.length && n === e) return "";
                                        var a = n.length - 1,
                                            l = -1;
                                        for (r = e.length - 1; r >= 0; --r) {
                                            var u = e.charCodeAt(r);
                                            if (47 === u) {
                                                if (!s) {
                                                    o = r + 1;
                                                    break
                                                }
                                            } else -1 === l && (s = !1, l = r + 1), a >= 0 && (u === n.charCodeAt(a) ? -1 === --a && (i = r) : (a = -1, i = l))
                                        }
                                        return o === i ? i = l : -1 === i && (i = e.length), e.slice(o, i)
                                    }
                                    for (r = e.length - 1; r >= 0; --r)
                                        if (47 === e.charCodeAt(r)) {
                                            if (!s) {
                                                o = r + 1;
                                                break
                                            }
                                        } else -1 === i && (s = !1, i = r + 1);
                                    return -1 === i ? "" : e.slice(o, i)
                                },
                                extname: function(e) {
                                    t(e);
                                    for (var n = -1, r = 0, o = -1, i = !0, s = 0, a = e.length - 1; a >= 0; --a) {
                                        var l = e.charCodeAt(a);
                                        if (47 !== l) - 1 === o && (i = !1, o = a + 1), 46 === l ? -1 === n ? n = a : 1 !== s && (s = 1) : -1 !== n && (s = -1);
                                        else if (!i) {
                                            r = a + 1;
                                            break
                                        }
                                    }
                                    return -1 === n || -1 === o || 0 === s || 1 === s && n === o - 1 && n === r + 1 ? "" : e.slice(n, o)
                                },
                                format: function(e) {
                                    if (null === e || "object" !== typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                    return function(e, t) {
                                        var n = t.dir || t.root,
                                            r = t.base || (t.name || "") + (t.ext || "");
                                        return n ? n === t.root ? n + r : n + e + r : r
                                    }("/", e)
                                },
                                parse: function(e) {
                                    t(e);
                                    var n = {
                                        root: "",
                                        dir: "",
                                        base: "",
                                        ext: "",
                                        name: ""
                                    };
                                    if (0 === e.length) return n;
                                    var r, o = e.charCodeAt(0),
                                        i = 47 === o;
                                    i ? (n.root = "/", r = 1) : r = 0;
                                    for (var s = -1, a = 0, l = -1, u = !0, c = e.length - 1, p = 0; c >= r; --c)
                                        if (47 !== (o = e.charCodeAt(c))) - 1 === l && (u = !1, l = c + 1), 46 === o ? -1 === s ? s = c : 1 !== p && (p = 1) : -1 !== s && (p = -1);
                                        else if (!u) {
                                        a = c + 1;
                                        break
                                    }
                                    return -1 === s || -1 === l || 0 === p || 1 === p && s === l - 1 && s === a + 1 ? -1 !== l && (n.base = n.name = 0 === a && i ? e.slice(1, l) : e.slice(a, l)) : (0 === a && i ? (n.name = e.slice(1, s), n.base = e.slice(1, l)) : (n.name = e.slice(a, s), n.base = e.slice(a, l)), n.ext = e.slice(s, l)), a > 0 ? n.dir = e.slice(0, a - 1) : i && (n.dir = "/"), n
                                },
                                sep: "/",
                                delimiter: ":",
                                win32: null,
                                posix: null
                            };
                            r.posix = r, e.exports = r
                        }
                    },
                    n = {};

                function r(e) {
                    var o = n[e];
                    if (void 0 !== o) return o.exports;
                    var i = n[e] = {
                            exports: {}
                        },
                        s = !0;
                    try {
                        t[e](i, i.exports, r), s = !1
                    } finally {
                        s && delete n[e]
                    }
                    return i.exports
                }
                r.ab = "//";
                var o = r(114);
                e.exports = o
            }()
        },
        9008: function(e, t, n) {
            e.exports = n(5443)
        },
        71739: function(e) {
            e.exports = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }
        },
        30907: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        4942: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(83997);

            function o(e, t, n) {
                return (t = (0, r.Z)(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        87462: function(e, t, n) {
            "use strict";

            function r() {
                return r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, r.apply(null, arguments)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        63366: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (null == e) return {};
                var n = {};
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                        if (t.indexOf(r) >= 0) continue;
                        n[r] = e[r]
                    }
                return n
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        83997: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(71002);

            function o(e) {
                var t = function(e, t) {
                    if ("object" != (0, r.Z)(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != (0, r.Z)(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == (0, r.Z)(t) ? t : t + ""
            }
        },
        71002: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        40181: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(30907);

            function o(e, t) {
                if (e) {
                    if ("string" == typeof e) return (0, r.Z)(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.Z)(e, t) : void 0
                }
            }
        },
        67573: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        },
        14251: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(67573);

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), o.forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    }))
                }
                return e
            }
        },
        67421: function(e, t, n) {
            "use strict";
            n.d(t, {
                a3: function() {
                    return L
                },
                $G: function() {
                    return w
                }
            });
            var r = n(67294);
            n(71739);
            Object.create(null);

            function o() {
                if (console && console.warn) {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    "string" === typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t)
                }
            }
            const i = {};

            function s() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                "string" === typeof t[0] && i[t[0]] || ("string" === typeof t[0] && (i[t[0]] = new Date), o(...t))
            }
            const a = (e, t) => () => {
                if (e.isInitialized) t();
                else {
                    const n = () => {
                        setTimeout((() => {
                            e.off("initialized", n)
                        }), 0), t()
                    };
                    e.on("initialized", n)
                }
            };

            function l(e, t, n) {
                e.loadNamespaces(t, a(e, n))
            }

            function u(e, t, n, r) {
                "string" === typeof n && (n = [n]), n.forEach((t => {
                    e.options.ns.indexOf(t) < 0 && e.options.ns.push(t)
                })), e.loadLanguages(t, a(e, r))
            }

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const r = t.languages[0],
                    o = !!t.options && t.options.fallbackLng,
                    i = t.languages[t.languages.length - 1];
                if ("cimode" === r.toLowerCase()) return !0;
                const s = (e, n) => {
                    const r = t.services.backendConnector.state[`${e}|${n}`];
                    return -1 === r || 2 === r
                };
                return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || (!(t.services.backendConnector.backend && (!t.options.resources || t.options.partialBundledLanguages)) || !(!s(r, e) || o && !s(i, e))))
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!t.languages || !t.languages.length) return s("i18n.languages were undefined or empty", t.languages), !0;
                const r = void 0 !== t.options.ignoreJSONStructure;
                return r ? t.hasLoadedNamespace(e, {
                    lng: n.lng,
                    precheck: (t, r) => {
                        if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1
                    }
                }) : c(e, t, n)
            }
            const f = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                g = {
                    "&amp;": "&",
                    "&#38;": "&",
                    "&lt;": "<",
                    "&#60;": "<",
                    "&gt;": ">",
                    "&#62;": ">",
                    "&apos;": "'",
                    "&#39;": "'",
                    "&quot;": '"',
                    "&#34;": '"',
                    "&nbsp;": " ",
                    "&#160;": " ",
                    "&copy;": "\xa9",
                    "&#169;": "\xa9",
                    "&reg;": "\xae",
                    "&#174;": "\xae",
                    "&hellip;": "\u2026",
                    "&#8230;": "\u2026",
                    "&#x2F;": "/",
                    "&#47;": "/"
                },
                h = e => g[e];
            let d, m = {
                bindI18n: "languageChanged",
                bindI18nStore: "",
                transEmptyNodeValue: "",
                transSupportBasicHtmlNodes: !0,
                transWrapTextNodes: "",
                transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                useSuspense: !0,
                unescape: e => e.replace(f, h)
            };

            function y() {
                return m
            }

            function v() {
                return d
            }
            const b = (0, r.createContext)();
            class x {
                constructor() {
                    this.usedNamespaces = {}
                }
                addUsedNamespaces(e) {
                    e.forEach((e => {
                        this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
                    }))
                }
                getUsedNamespaces() {
                    return Object.keys(this.usedNamespaces)
                }
            }
            const S = (e, t) => {
                const n = (0, r.useRef)();
                return (0, r.useEffect)((() => {
                    n.current = t ? n.current : e
                }), [e, t]), n.current
            };

            function k(e, t, n, r) {
                return e.getFixedT(t, n, r)
            }

            function O(e, t, n, o) {
                return (0, r.useCallback)(k(e, t, n, o), [e, t, n, o])
            }

            function w(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const {
                    i18n: n
                } = t, {
                    i18n: o,
                    defaultNS: i
                } = (0, r.useContext)(b) || {}, a = n || o || v();
                if (a && !a.reportNamespaces && (a.reportNamespaces = new x), !a) {
                    s("You will need to pass in an i18next instance by using initReactI18next");
                    const e = (e, t) => "string" === typeof t ? t : t && "object" === typeof t && "string" === typeof t.defaultValue ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e,
                        t = [e, {}, !1];
                    return t.t = e, t.i18n = {}, t.ready = !1, t
                }
                a.options.react && void 0 !== a.options.react.wait && s("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                const c = { ...y(),
                        ...a.options.react,
                        ...t
                    },
                    {
                        useSuspense: f,
                        keyPrefix: g
                    } = c;
                let h = e || i || a.options && a.options.defaultNS;
                h = "string" === typeof h ? [h] : h || ["translation"], a.reportNamespaces.addUsedNamespaces && a.reportNamespaces.addUsedNamespaces(h);
                const d = (a.isInitialized || a.initializedStoreOnce) && h.every((e => p(e, a, c))),
                    m = O(a, t.lng || null, "fallback" === c.nsMode ? h : h[0], g),
                    w = () => m,
                    L = () => k(a, t.lng || null, "fallback" === c.nsMode ? h : h[0], g),
                    [P, C] = (0, r.useState)(w);
                let N = h.join();
                t.lng && (N = `${t.lng}${N}`);
                const $ = S(N),
                    j = (0, r.useRef)(!0);
                (0, r.useEffect)((() => {
                    const {
                        bindI18n: e,
                        bindI18nStore: n
                    } = c;

                    function r() {
                        j.current && C(L)
                    }
                    return j.current = !0, d || f || (t.lng ? u(a, t.lng, h, (() => {
                        j.current && C(L)
                    })) : l(a, h, (() => {
                        j.current && C(L)
                    }))), d && $ && $ !== N && j.current && C(L), e && a && a.on(e, r), n && a && a.store.on(n, r), () => {
                        j.current = !1, e && a && e.split(" ").forEach((e => a.off(e, r))), n && a && n.split(" ").forEach((e => a.store.off(e, r)))
                    }
                }), [a, N]), (0, r.useEffect)((() => {
                    j.current && d && C(w)
                }), [a, g, d]);
                const R = [P, a, d];
                if (R.t = P, R.i18n = a, R.ready = d, d) return R;
                if (!d && !f) return R;
                throw new Promise((e => {
                    t.lng ? u(a, t.lng, h, (() => e())) : l(a, h, (() => e()))
                }))
            }

            function L(e) {
                let {
                    i18n: t,
                    defaultNS: n,
                    children: o
                } = e;
                const i = (0, r.useMemo)((() => ({
                    i18n: t,
                    defaultNS: n
                })), [t, n]);
                return (0, r.createElement)(b.Provider, {
                    value: i
                }, o)
            }
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [9774, 179], (function() {
            return t(91118), t(90387)
        }));
        var n = e.O();
        _N_E = n
    }
]);