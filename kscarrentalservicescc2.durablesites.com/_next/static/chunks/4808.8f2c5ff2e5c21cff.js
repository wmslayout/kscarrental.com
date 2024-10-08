(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4808], {
        64221: function(e, t, r) {
            const o = r(42502)((function({
                addComponents: e,
                theme: t,
                variants: r,
                e: o
            }) {
                const n = t("aspectRatio");
                e([{
                    [Object.entries(n).map((([e, t]) => `.${o(`aspect-w-${e}`)}`)).join(",\n")]: {
                        position: "relative",
                        paddingBottom: "calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)"
                    },
                    [Object.entries(n).map((([e, t]) => `.${o(`aspect-w-${e}`)} > *`)).join(",\n")]: {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0"
                    },
                    ".aspect-none": {
                        position: "static",
                        paddingBottom: "0"
                    },
                    ".aspect-none > *": {
                        position: "static",
                        height: "auto",
                        width: "auto",
                        top: "auto",
                        right: "auto",
                        bottom: "auto",
                        left: "auto"
                    }
                }, Object.entries(n).map((([e, t]) => ({
                    [`.${o(`aspect-w-${e}`)}`]: {
                        "--tw-aspect-w": t
                    }
                }))), Object.entries(n).map((([e, t]) => ({
                    [`.${o(`aspect-h-${e}`)}`]: {
                        "--tw-aspect-h": t
                    }
                })))], r("aspectRatio"))
            }), {
                theme: {
                    aspectRatio: {
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        10: "10",
                        11: "11",
                        12: "12",
                        13: "13",
                        14: "14",
                        15: "15",
                        16: "16"
                    }
                },
                variants: {
                    aspectRatio: ["responsive"]
                }
            });
            e.exports = o
        },
        50130: function(e, t, r) {
            const o = r(42555),
                n = r(42502),
                i = r(75874),
                [a, {
                    lineHeight: s
                }] = i.fontSize.base,
                {
                    colors: c,
                    spacing: f,
                    borderWidth: p,
                    borderRadius: u,
                    outline: l
                } = i,
                d = n.withOptions((function(e = {
                    strategy: "base"
                }) {
                    return function({
                        addBase: t,
                        theme: r
                    }) {
                        const n = e.strategy;
                        t([{
                            base: ["[type='text']", "[type='email']", "[type='url']", "[type='password']", "[type='number']", "[type='date']", "[type='datetime-local']", "[type='month']", "[type='search']", "[type='tel']", "[type='time']", "[type='week']", "[multiple]", "textarea", "select"],
                            class: [".form-input", ".form-textarea", ".form-select", ".form-multiselect"],
                            styles: {
                                appearance: "none",
                                "background-color": "#fff",
                                "border-color": r("colors.gray.500", c.gray[500]),
                                "border-width": p.DEFAULT,
                                "border-radius": u.none,
                                "padding-top": f[2],
                                "padding-right": f[3],
                                "padding-bottom": f[2],
                                "padding-left": f[3],
                                "font-size": a,
                                "line-height": s,
                                "--tw-shadow": "0 0 #0000",
                                "&:focus": {
                                    outline: l.none[0],
                                    "outline-offset": l.none[1],
                                    "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                                    "--tw-ring-offset-width": "0px",
                                    "--tw-ring-offset-color": "#fff",
                                    "--tw-ring-color": r("colors.blue.600", c.blue[600]),
                                    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                                    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                                    "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
                                    "border-color": r("colors.blue.600", c.blue[600])
                                }
                            }
                        }, {
                            base: ["input::placeholder", "textarea::placeholder"],
                            class: [".form-input::placeholder", ".form-textarea::placeholder"],
                            styles: {
                                color: r("colors.gray.500", c.gray[500]),
                                opacity: "1"
                            }
                        }, {
                            base: ["::-webkit-datetime-edit-fields-wrapper"],
                            class: [".form-input::-webkit-datetime-edit-fields-wrapper"],
                            styles: {
                                padding: "0"
                            }
                        }, {
                            base: ["::-webkit-date-and-time-value"],
                            class: [".form-input::-webkit-date-and-time-value"],
                            styles: {
                                "min-height": "1.5em"
                            }
                        }, {
                            base: ["select"],
                            class: [".form-select"],
                            styles: {
                                "background-image": `url("${o(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${r("colors.gray.500",c.gray[500])}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`)}")`,
                                "background-position": `right ${f[2]} center`,
                                "background-repeat": "no-repeat",
                                "background-size": "1.5em 1.5em",
                                "padding-right": f[10],
                                "color-adjust": "exact"
                            }
                        }, {
                            base: ["[multiple]"],
                            class: null,
                            styles: {
                                "background-image": "initial",
                                "background-position": "initial",
                                "background-repeat": "unset",
                                "background-size": "initial",
                                "padding-right": f[3],
                                "color-adjust": "unset"
                            }
                        }, {
                            base: ["[type='checkbox']", "[type='radio']"],
                            class: [".form-checkbox", ".form-radio"],
                            styles: {
                                appearance: "none",
                                padding: "0",
                                "color-adjust": "exact",
                                display: "inline-block",
                                "vertical-align": "middle",
                                "background-origin": "border-box",
                                "user-select": "none",
                                "flex-shrink": "0",
                                height: f[4],
                                width: f[4],
                                color: r("colors.blue.600", c.blue[600]),
                                "background-color": "#fff",
                                "border-color": r("colors.gray.500", c.gray[500]),
                                "border-width": p.DEFAULT,
                                "--tw-shadow": "0 0 #0000"
                            }
                        }, {
                            base: ["[type='checkbox']"],
                            class: [".form-checkbox"],
                            styles: {
                                "border-radius": u.none
                            }
                        }, {
                            base: ["[type='radio']"],
                            class: [".form-radio"],
                            styles: {
                                "border-radius": "100%"
                            }
                        }, {
                            base: ["[type='checkbox']:focus", "[type='radio']:focus"],
                            class: [".form-checkbox:focus", ".form-radio:focus"],
                            styles: {
                                outline: l.none[0],
                                "outline-offset": l.none[1],
                                "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
                                "--tw-ring-offset-width": "2px",
                                "--tw-ring-offset-color": "#fff",
                                "--tw-ring-color": r("colors.blue.600", c.blue[600]),
                                "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                                "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                                "box-shadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"
                            }
                        }, {
                            base: ["[type='checkbox']:checked", "[type='radio']:checked"],
                            class: [".form-checkbox:checked", ".form-radio:checked"],
                            styles: {
                                "border-color": "transparent",
                                "background-color": "currentColor",
                                "background-size": "100% 100%",
                                "background-position": "center",
                                "background-repeat": "no-repeat"
                            }
                        }, {
                            base: ["[type='checkbox']:checked"],
                            class: [".form-checkbox:checked"],
                            styles: {
                                "background-image": `url("${o('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>')}")`
                            }
                        }, {
                            base: ["[type='radio']:checked"],
                            class: [".form-radio:checked"],
                            styles: {
                                "background-image": `url("${o('<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>')}")`
                            }
                        }, {
                            base: ["[type='checkbox']:checked:hover", "[type='checkbox']:checked:focus", "[type='radio']:checked:hover", "[type='radio']:checked:focus"],
                            class: [".form-checkbox:checked:hover", ".form-checkbox:checked:focus", ".form-radio:checked:hover", ".form-radio:checked:focus"],
                            styles: {
                                "border-color": "transparent",
                                "background-color": "currentColor"
                            }
                        }, {
                            base: ["[type='checkbox']:indeterminate"],
                            class: [".form-checkbox:indeterminate"],
                            styles: {
                                "background-image": `url("${o('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>')}")`,
                                "border-color": "transparent",
                                "background-color": "currentColor",
                                "background-size": "100% 100%",
                                "background-position": "center",
                                "background-repeat": "no-repeat"
                            }
                        }, {
                            base: ["[type='checkbox']:indeterminate:hover", "[type='checkbox']:indeterminate:focus"],
                            class: [".form-checkbox:indeterminate:hover", ".form-checkbox:indeterminate:focus"],
                            styles: {
                                "border-color": "transparent",
                                "background-color": "currentColor"
                            }
                        }, {
                            base: ["[type='file']"],
                            class: null,
                            styles: {
                                background: "unset",
                                "border-color": "inherit",
                                "border-width": "0",
                                "border-radius": "0",
                                padding: "0",
                                "font-size": "unset",
                                "line-height": "inherit"
                            }
                        }, {
                            base: ["[type='file']:focus"],
                            class: null,
                            styles: {
                                outline: "1px solid ButtonText",
                                outline: "1px auto -webkit-focus-ring-color"
                            }
                        }].map((e => null === e[n] ? null : {
                            [e[n]]: e.styles
                        })).filter(Boolean))
                    }
                }));
            e.exports = d
        },
        18552: function(e, t, r) {
            var o = r(10852)(r(55639), "DataView");
            e.exports = o
        },
        1989: function(e, t, r) {
            var o = r(51789),
                n = r(80401),
                i = r(57667),
                a = r(21327),
                s = r(81866);

            function c(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            c.prototype.clear = o, c.prototype.delete = n, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, e.exports = c
        },
        38407: function(e, t, r) {
            var o = r(27040),
                n = r(14125),
                i = r(82117),
                a = r(67518),
                s = r(54705);

            function c(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            c.prototype.clear = o, c.prototype.delete = n, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, e.exports = c
        },
        57071: function(e, t, r) {
            var o = r(10852)(r(55639), "Map");
            e.exports = o
        },
        83369: function(e, t, r) {
            var o = r(24785),
                n = r(11285),
                i = r(96e3),
                a = r(49916),
                s = r(95265);

            function c(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            c.prototype.clear = o, c.prototype.delete = n, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, e.exports = c
        },
        53818: function(e, t, r) {
            var o = r(10852)(r(55639), "Promise");
            e.exports = o
        },
        58525: function(e, t, r) {
            var o = r(10852)(r(55639), "Set");
            e.exports = o
        },
        46384: function(e, t, r) {
            var o = r(38407),
                n = r(37465),
                i = r(63779),
                a = r(67599),
                s = r(44758),
                c = r(34309);

            function f(e) {
                var t = this.__data__ = new o(e);
                this.size = t.size
            }
            f.prototype.clear = n, f.prototype.delete = i, f.prototype.get = a, f.prototype.has = s, f.prototype.set = c, e.exports = f
        },
        62705: function(e, t, r) {
            var o = r(55639).Symbol;
            e.exports = o
        },
        11149: function(e, t, r) {
            var o = r(55639).Uint8Array;
            e.exports = o
        },
        70577: function(e, t, r) {
            var o = r(10852)(r(55639), "WeakMap");
            e.exports = o
        },
        77412: function(e) {
            e.exports = function(e, t) {
                for (var r = -1, o = null == e ? 0 : e.length; ++r < o && !1 !== t(e[r], r, e););
                return e
            }
        },
        34963: function(e) {
            e.exports = function(e, t) {
                for (var r = -1, o = null == e ? 0 : e.length, n = 0, i = []; ++r < o;) {
                    var a = e[r];
                    t(a, r, e) && (i[n++] = a)
                }
                return i
            }
        },
        14636: function(e, t, r) {
            var o = r(22545),
                n = r(35694),
                i = r(1469),
                a = r(44144),
                s = r(65776),
                c = r(36719),
                f = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var r = i(e),
                    p = !r && n(e),
                    u = !r && !p && a(e),
                    l = !r && !p && !u && c(e),
                    d = r || p || u || l,
                    g = d ? o(e.length, String) : [],
                    b = g.length;
                for (var v in e) !t && !f.call(e, v) || d && ("length" == v || u && ("offset" == v || "parent" == v) || l && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, b)) || g.push(v);
                return g
            }
        },
        62488: function(e) {
            e.exports = function(e, t) {
                for (var r = -1, o = t.length, n = e.length; ++r < o;) e[n + r] = t[r];
                return e
            }
        },
        34865: function(e, t, r) {
            var o = r(89465),
                n = r(77813),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r) {
                var a = e[t];
                i.call(e, t) && n(a, r) && (void 0 !== r || t in e) || o(e, t, r)
            }
        },
        18470: function(e, t, r) {
            var o = r(77813);
            e.exports = function(e, t) {
                for (var r = e.length; r--;)
                    if (o(e[r][0], t)) return r;
                return -1
            }
        },
        44037: function(e, t, r) {
            var o = r(98363),
                n = r(3674);
            e.exports = function(e, t) {
                return e && o(t, n(t), e)
            }
        },
        63886: function(e, t, r) {
            var o = r(98363),
                n = r(81704);
            e.exports = function(e, t) {
                return e && o(t, n(t), e)
            }
        },
        89465: function(e, t, r) {
            var o = r(38777);
            e.exports = function(e, t, r) {
                "__proto__" == t && o ? o(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : e[t] = r
            }
        },
        85990: function(e, t, r) {
            var o = r(46384),
                n = r(77412),
                i = r(34865),
                a = r(44037),
                s = r(63886),
                c = r(64626),
                f = r(278),
                p = r(18805),
                u = r(1911),
                l = r(58234),
                d = r(46904),
                g = r(64160),
                b = r(43824),
                v = r(29148),
                h = r(38517),
                m = r(1469),
                x = r(44144),
                w = r(56688),
                y = r(13218),
                k = r(72928),
                j = r(3674),
                _ = r(81704),
                O = "[object Arguments]",
                A = "[object Function]",
                S = "[object Object]",
                C = {};
            C[O] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C[S] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C[A] = C["[object WeakMap]"] = !1, e.exports = function e(t, r, F, z, T, E) {
                var U, D = 1 & r,
                    R = 2 & r,
                    B = 4 & r;
                if (F && (U = T ? F(t, z, T, E) : F(t)), void 0 !== U) return U;
                if (!y(t)) return t;
                var P = m(t);
                if (P) {
                    if (U = b(t), !D) return f(t, U)
                } else {
                    var I = g(t),
                        L = I == A || "[object GeneratorFunction]" == I;
                    if (x(t)) return c(t, D);
                    if (I == S || I == O || L && !T) {
                        if (U = R || L ? {} : h(t), !D) return R ? u(t, s(U, t)) : p(t, a(U, t))
                    } else {
                        if (!C[I]) return T ? t : {};
                        U = v(t, I, D)
                    }
                }
                E || (E = new o);
                var M = E.get(t);
                if (M) return M;
                E.set(t, U), k(t) ? t.forEach((function(o) {
                    U.add(e(o, r, F, o, t, E))
                })) : w(t) && t.forEach((function(o, n) {
                    U.set(n, e(o, r, F, n, t, E))
                }));
                var H = P ? void 0 : (B ? R ? d : l : R ? _ : j)(t);
                return n(H || t, (function(o, n) {
                    H && (o = t[n = o]), i(U, n, e(o, r, F, n, t, E))
                })), U
            }
        },
        3118: function(e, t, r) {
            var o = r(13218),
                n = Object.create,
                i = function() {
                    function e() {}
                    return function(t) {
                        if (!o(t)) return {};
                        if (n) return n(t);
                        e.prototype = t;
                        var r = new e;
                        return e.prototype = void 0, r
                    }
                }();
            e.exports = i
        },
        68866: function(e, t, r) {
            var o = r(62488),
                n = r(1469);
            e.exports = function(e, t, r) {
                var i = t(e);
                return n(e) ? i : o(i, r(e))
            }
        },
        44239: function(e, t, r) {
            var o = r(62705),
                n = r(89607),
                i = r(2333),
                a = o ? o.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : i(e)
            }
        },
        9454: function(e, t, r) {
            var o = r(44239),
                n = r(37005);
            e.exports = function(e) {
                return n(e) && "[object Arguments]" == o(e)
            }
        },
        25588: function(e, t, r) {
            var o = r(64160),
                n = r(37005);
            e.exports = function(e) {
                return n(e) && "[object Map]" == o(e)
            }
        },
        28458: function(e, t, r) {
            var o = r(23560),
                n = r(15346),
                i = r(13218),
                a = r(80346),
                s = /^\[object .+?Constructor\]$/,
                c = Function.prototype,
                f = Object.prototype,
                p = c.toString,
                u = f.hasOwnProperty,
                l = RegExp("^" + p.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!i(e) || n(e)) && (o(e) ? l : s).test(a(e))
            }
        },
        29221: function(e, t, r) {
            var o = r(64160),
                n = r(37005);
            e.exports = function(e) {
                return n(e) && "[object Set]" == o(e)
            }
        },
        38749: function(e, t, r) {
            var o = r(44239),
                n = r(41780),
                i = r(37005),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
                return i(e) && n(e.length) && !!a[o(e)]
            }
        },
        280: function(e, t, r) {
            var o = r(27360),
                n = r(86916),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!o(e)) return n(e);
                var t = [];
                for (var r in Object(e)) i.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
        },
        10313: function(e, t, r) {
            var o = r(13218),
                n = r(27360),
                i = r(33498),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!o(e)) return i(e);
                var t = n(e),
                    r = [];
                for (var s in e)("constructor" != s || !t && a.call(e, s)) && r.push(s);
                return r
            }
        },
        22545: function(e) {
            e.exports = function(e, t) {
                for (var r = -1, o = Array(e); ++r < e;) o[r] = t(r);
                return o
            }
        },
        7518: function(e) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        74318: function(e, t, r) {
            var o = r(11149);
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new o(t).set(new o(e)), t
            }
        },
        64626: function(e, t, r) {
            e = r.nmd(e);
            var o = r(55639),
                n = t && !t.nodeType && t,
                i = n && e && !e.nodeType && e,
                a = i && i.exports === n ? o.Buffer : void 0,
                s = a ? a.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var r = e.length,
                    o = s ? s(r) : new e.constructor(r);
                return e.copy(o), o
            }
        },
        57157: function(e, t, r) {
            var o = r(74318);
            e.exports = function(e, t) {
                var r = t ? o(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.byteLength)
            }
        },
        93147: function(e) {
            var t = /\w*$/;
            e.exports = function(e) {
                var r = new e.constructor(e.source, t.exec(e));
                return r.lastIndex = e.lastIndex, r
            }
        },
        40419: function(e, t, r) {
            var o = r(62705),
                n = o ? o.prototype : void 0,
                i = n ? n.valueOf : void 0;
            e.exports = function(e) {
                return i ? Object(i.call(e)) : {}
            }
        },
        77133: function(e, t, r) {
            var o = r(74318);
            e.exports = function(e, t) {
                var r = t ? o(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length)
            }
        },
        278: function(e) {
            e.exports = function(e, t) {
                var r = -1,
                    o = e.length;
                for (t || (t = Array(o)); ++r < o;) t[r] = e[r];
                return t
            }
        },
        98363: function(e, t, r) {
            var o = r(34865),
                n = r(89465);
            e.exports = function(e, t, r, i) {
                var a = !r;
                r || (r = {});
                for (var s = -1, c = t.length; ++s < c;) {
                    var f = t[s],
                        p = i ? i(r[f], e[f], f, r, e) : void 0;
                    void 0 === p && (p = e[f]), a ? n(r, f, p) : o(r, f, p)
                }
                return r
            }
        },
        18805: function(e, t, r) {
            var o = r(98363),
                n = r(99551);
            e.exports = function(e, t) {
                return o(e, n(e), t)
            }
        },
        1911: function(e, t, r) {
            var o = r(98363),
                n = r(51442);
            e.exports = function(e, t) {
                return o(e, n(e), t)
            }
        },
        14429: function(e, t, r) {
            var o = r(55639)["__core-js_shared__"];
            e.exports = o
        },
        38777: function(e, t, r) {
            var o = r(10852),
                n = function() {
                    try {
                        var e = o(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (t) {}
                }();
            e.exports = n
        },
        31957: function(e, t, r) {
            var o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            e.exports = o
        },
        58234: function(e, t, r) {
            var o = r(68866),
                n = r(99551),
                i = r(3674);
            e.exports = function(e) {
                return o(e, i, n)
            }
        },
        46904: function(e, t, r) {
            var o = r(68866),
                n = r(51442),
                i = r(81704);
            e.exports = function(e) {
                return o(e, i, n)
            }
        },
        45050: function(e, t, r) {
            var o = r(37019);
            e.exports = function(e, t) {
                var r = e.__data__;
                return o(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }
        },
        10852: function(e, t, r) {
            var o = r(28458),
                n = r(47801);
            e.exports = function(e, t) {
                var r = n(e, t);
                return o(r) ? r : void 0
            }
        },
        85924: function(e, t, r) {
            var o = r(5569)(Object.getPrototypeOf, Object);
            e.exports = o
        },
        89607: function(e, t, r) {
            var o = r(62705),
                n = Object.prototype,
                i = n.hasOwnProperty,
                a = n.toString,
                s = o ? o.toStringTag : void 0;
            e.exports = function(e) {
                var t = i.call(e, s),
                    r = e[s];
                try {
                    e[s] = void 0;
                    var o = !0
                } catch (c) {}
                var n = a.call(e);
                return o && (t ? e[s] = r : delete e[s]), n
            }
        },
        99551: function(e, t, r) {
            var o = r(34963),
                n = r(70479),
                i = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols,
                s = a ? function(e) {
                    return null == e ? [] : (e = Object(e), o(a(e), (function(t) {
                        return i.call(e, t)
                    })))
                } : n;
            e.exports = s
        },
        51442: function(e, t, r) {
            var o = r(62488),
                n = r(85924),
                i = r(99551),
                a = r(70479),
                s = Object.getOwnPropertySymbols ? function(e) {
                    for (var t = []; e;) o(t, i(e)), e = n(e);
                    return t
                } : a;
            e.exports = s
        },
        64160: function(e, t, r) {
            var o = r(18552),
                n = r(57071),
                i = r(53818),
                a = r(58525),
                s = r(70577),
                c = r(44239),
                f = r(80346),
                p = "[object Map]",
                u = "[object Promise]",
                l = "[object Set]",
                d = "[object WeakMap]",
                g = "[object DataView]",
                b = f(o),
                v = f(n),
                h = f(i),
                m = f(a),
                x = f(s),
                w = c;
            (o && w(new o(new ArrayBuffer(1))) != g || n && w(new n) != p || i && w(i.resolve()) != u || a && w(new a) != l || s && w(new s) != d) && (w = function(e) {
                var t = c(e),
                    r = "[object Object]" == t ? e.constructor : void 0,
                    o = r ? f(r) : "";
                if (o) switch (o) {
                    case b:
                        return g;
                    case v:
                        return p;
                    case h:
                        return u;
                    case m:
                        return l;
                    case x:
                        return d
                }
                return t
            }), e.exports = w
        },
        47801: function(e) {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        51789: function(e, t, r) {
            var o = r(94536);
            e.exports = function() {
                this.__data__ = o ? o(null) : {}, this.size = 0
            }
        },
        80401: function(e) {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
        },
        57667: function(e, t, r) {
            var o = r(94536),
                n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (o) {
                    var r = t[e];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return n.call(t, e) ? t[e] : void 0
            }
        },
        21327: function(e, t, r) {
            var o = r(94536),
                n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return o ? void 0 !== t[e] : n.call(t, e)
            }
        },
        81866: function(e, t, r) {
            var o = r(94536);
            e.exports = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }
        },
        43824: function(e) {
            var t = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var r = e.length,
                    o = new e.constructor(r);
                return r && "string" == typeof e[0] && t.call(e, "index") && (o.index = e.index, o.input = e.input), o
            }
        },
        29148: function(e, t, r) {
            var o = r(74318),
                n = r(57157),
                i = r(93147),
                a = r(40419),
                s = r(77133);
            e.exports = function(e, t, r) {
                var c = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return o(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new c(+e);
                    case "[object DataView]":
                        return n(e, r);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return s(e, r);
                    case "[object Map]":
                    case "[object Set]":
                        return new c;
                    case "[object Number]":
                    case "[object String]":
                        return new c(e);
                    case "[object RegExp]":
                        return i(e);
                    case "[object Symbol]":
                        return a(e)
                }
            }
        },
        38517: function(e, t, r) {
            var o = r(3118),
                n = r(85924),
                i = r(27360);
            e.exports = function(e) {
                return "function" != typeof e.constructor || i(e) ? {} : o(n(e))
            }
        },
        65776: function(e) {
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, r) {
                var o = typeof e;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == o || "symbol" != o && t.test(e)) && e > -1 && e % 1 == 0 && e < r
            }
        },
        37019: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        },
        15346: function(e, t, r) {
            var o = r(14429),
                n = function() {
                    var e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!n && n in e
            }
        },
        27360: function(e) {
            var t = Object.prototype;
            e.exports = function(e) {
                var r = e && e.constructor;
                return e === ("function" == typeof r && r.prototype || t)
            }
        },
        27040: function(e) {
            e.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        14125: function(e, t, r) {
            var o = r(18470),
                n = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__,
                    r = o(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : n.call(t, r, 1), --this.size, !0)
            }
        },
        82117: function(e, t, r) {
            var o = r(18470);
            e.exports = function(e) {
                var t = this.__data__,
                    r = o(t, e);
                return r < 0 ? void 0 : t[r][1]
            }
        },
        67518: function(e, t, r) {
            var o = r(18470);
            e.exports = function(e) {
                return o(this.__data__, e) > -1
            }
        },
        54705: function(e, t, r) {
            var o = r(18470);
            e.exports = function(e, t) {
                var r = this.__data__,
                    n = o(r, e);
                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
            }
        },
        24785: function(e, t, r) {
            var o = r(1989),
                n = r(38407),
                i = r(57071);
            e.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new o,
                    map: new(i || n),
                    string: new o
                }
            }
        },
        11285: function(e, t, r) {
            var o = r(45050);
            e.exports = function(e) {
                var t = o(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
        },
        96e3: function(e, t, r) {
            var o = r(45050);
            e.exports = function(e) {
                return o(this, e).get(e)
            }
        },
        49916: function(e, t, r) {
            var o = r(45050);
            e.exports = function(e) {
                return o(this, e).has(e)
            }
        },
        95265: function(e, t, r) {
            var o = r(45050);
            e.exports = function(e, t) {
                var r = o(this, e),
                    n = r.size;
                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
            }
        },
        94536: function(e, t, r) {
            var o = r(10852)(Object, "create");
            e.exports = o
        },
        86916: function(e, t, r) {
            var o = r(5569)(Object.keys, Object);
            e.exports = o
        },
        33498: function(e) {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var r in Object(e)) t.push(r);
                return t
            }
        },
        31167: function(e, t, r) {
            e = r.nmd(e);
            var o = r(31957),
                n = t && !t.nodeType && t,
                i = n && e && !e.nodeType && e,
                a = i && i.exports === n && o.process,
                s = function() {
                    try {
                        var e = i && i.require && i.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            e.exports = s
        },
        2333: function(e) {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        5569: function(e) {
            e.exports = function(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }
        },
        55639: function(e, t, r) {
            var o = r(31957),
                n = "object" == typeof self && self && self.Object === Object && self,
                i = o || n || Function("return this")();
            e.exports = i
        },
        37465: function(e, t, r) {
            var o = r(38407);
            e.exports = function() {
                this.__data__ = new o, this.size = 0
            }
        },
        63779: function(e) {
            e.exports = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }
        },
        67599: function(e) {
            e.exports = function(e) {
                return this.__data__.get(e)
            }
        },
        44758: function(e) {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        34309: function(e, t, r) {
            var o = r(38407),
                n = r(57071),
                i = r(83369);
            e.exports = function(e, t) {
                var r = this.__data__;
                if (r instanceof o) {
                    var a = r.__data__;
                    if (!n || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new i(a)
                }
                return r.set(e, t), this.size = r.size, this
            }
        },
        80346: function(e) {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (r) {}
                    try {
                        return e + ""
                    } catch (r) {}
                }
                return ""
            }
        },
        50361: function(e, t, r) {
            var o = r(85990);
            e.exports = function(e) {
                return o(e, 5)
            }
        },
        77813: function(e) {
            e.exports = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        35694: function(e, t, r) {
            var o = r(9454),
                n = r(37005),
                i = Object.prototype,
                a = i.hasOwnProperty,
                s = i.propertyIsEnumerable,
                c = o(function() {
                    return arguments
                }()) ? o : function(e) {
                    return n(e) && a.call(e, "callee") && !s.call(e, "callee")
                };
            e.exports = c
        },
        1469: function(e) {
            var t = Array.isArray;
            e.exports = t
        },
        98612: function(e, t, r) {
            var o = r(23560),
                n = r(41780);
            e.exports = function(e) {
                return null != e && n(e.length) && !o(e)
            }
        },
        44144: function(e, t, r) {
            e = r.nmd(e);
            var o = r(55639),
                n = r(95062),
                i = t && !t.nodeType && t,
                a = i && e && !e.nodeType && e,
                s = a && a.exports === i ? o.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || n;
            e.exports = c
        },
        23560: function(e, t, r) {
            var o = r(44239),
                n = r(13218);
            e.exports = function(e) {
                if (!n(e)) return !1;
                var t = o(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        41780: function(e) {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        56688: function(e, t, r) {
            var o = r(25588),
                n = r(7518),
                i = r(31167),
                a = i && i.isMap,
                s = a ? n(a) : o;
            e.exports = s
        },
        13218: function(e) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        37005: function(e) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        72928: function(e, t, r) {
            var o = r(29221),
                n = r(7518),
                i = r(31167),
                a = i && i.isSet,
                s = a ? n(a) : o;
            e.exports = s
        },
        36719: function(e, t, r) {
            var o = r(38749),
                n = r(7518),
                i = r(31167),
                a = i && i.isTypedArray,
                s = a ? n(a) : o;
            e.exports = s
        },
        3674: function(e, t, r) {
            var o = r(14636),
                n = r(280),
                i = r(98612);
            e.exports = function(e) {
                return i(e) ? o(e) : n(e)
            }
        },
        81704: function(e, t, r) {
            var o = r(14636),
                n = r(10313),
                i = r(98612);
            e.exports = function(e) {
                return i(e) ? o(e, !0) : n(e)
            }
        },
        70479: function(e) {
            e.exports = function() {
                return []
            }
        },
        95062: function(e) {
            e.exports = function() {
                return !1
            }
        },
        42555: function(e, t, r) {
            var o = r(62178),
                n = /\s+/g,
                i = /%[\dA-F]{2}/g,
                a = /"/g;

            function s(e) {
                switch (e) {
                    case "%20":
                        return " ";
                    case "%3D":
                        return "=";
                    case "%3A":
                        return ":";
                    case "%2F":
                        return "/";
                    default:
                        return e.toLowerCase()
                }
            }

            function c(e) {
                if ("string" !== typeof e) throw new TypeError("Expected a string, but received " + typeof e);
                var t, r;
                return 65279 === e.charCodeAt(0) && (e = e.slice(1)), "data:image/svg+xml," + function(e) {
                    return encodeURIComponent(e).replace(i, s)
                }((r = e, t = r.trim().replace(n, " "), Object.keys(o).forEach((function(e) {
                    o[e].test(t) && (t = t.replace(o[e], e))
                })), t).replace(a, "'"))
            }
            c.toSrcset = function(e) {
                return c(e).replace(/ /g, "%20")
            }, e.exports = c
        },
        62178: function(e) {
            e.exports = {
                aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
                azure: /#f0ffff(ff)?(?!\w)/gi,
                beige: /#f5f5dc(ff)?(?!\w)/gi,
                bisque: /#ffe4c4(ff)?(?!\w)/gi,
                black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
                blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
                brown: /#a52a2a(ff)?(?!\w)/gi,
                coral: /#ff7f50(ff)?(?!\w)/gi,
                cornsilk: /#fff8dc(ff)?(?!\w)/gi,
                crimson: /#dc143c(ff)?(?!\w)/gi,
                cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
                darkblue: /#00008b(ff)?(?!\w)/gi,
                darkcyan: /#008b8b(ff)?(?!\w)/gi,
                darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
                darkred: /#8b0000(ff)?(?!\w)/gi,
                deeppink: /#ff1493(ff)?(?!\w)/gi,
                dimgrey: /#696969(ff)?(?!\w)/gi,
                gold: /#ffd700(ff)?(?!\w)/gi,
                green: /#008000(ff)?(?!\w)/gi,
                grey: /#808080(ff)?(?!\w)/gi,
                honeydew: /#f0fff0(ff)?(?!\w)/gi,
                hotpink: /#ff69b4(ff)?(?!\w)/gi,
                indigo: /#4b0082(ff)?(?!\w)/gi,
                ivory: /#fffff0(ff)?(?!\w)/gi,
                khaki: /#f0e68c(ff)?(?!\w)/gi,
                lavender: /#e6e6fa(ff)?(?!\w)/gi,
                lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
                linen: /#faf0e6(ff)?(?!\w)/gi,
                maroon: /#800000(ff)?(?!\w)/gi,
                moccasin: /#ffe4b5(ff)?(?!\w)/gi,
                navy: /#000080(ff)?(?!\w)/gi,
                oldlace: /#fdf5e6(ff)?(?!\w)/gi,
                olive: /#808000(ff)?(?!\w)/gi,
                orange: /#ffa500(ff)?(?!\w)/gi,
                orchid: /#da70d6(ff)?(?!\w)/gi,
                peru: /#cd853f(ff)?(?!\w)/gi,
                pink: /#ffc0cb(ff)?(?!\w)/gi,
                plum: /#dda0dd(ff)?(?!\w)/gi,
                purple: /#800080(ff)?(?!\w)/gi,
                red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
                salmon: /#fa8072(ff)?(?!\w)/gi,
                seagreen: /#2e8b57(ff)?(?!\w)/gi,
                seashell: /#fff5ee(ff)?(?!\w)/gi,
                sienna: /#a0522d(ff)?(?!\w)/gi,
                silver: /#c0c0c0(ff)?(?!\w)/gi,
                skyblue: /#87ceeb(ff)?(?!\w)/gi,
                snow: /#fffafa(ff)?(?!\w)/gi,
                tan: /#d2b48c(ff)?(?!\w)/gi,
                teal: /#008080(ff)?(?!\w)/gi,
                thistle: /#d8bfd8(ff)?(?!\w)/gi,
                tomato: /#ff6347(ff)?(?!\w)/gi,
                violet: /#ee82ee(ff)?(?!\w)/gi,
                wheat: /#f5deb3(ff)?(?!\w)/gi,
                white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi
            }
        },
        16791: function(e, t, r) {
            "use strict";
            t.Z = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), o.forEach((function(t) {
                        n.default(e, t, r[t])
                    }))
                }
                return e
            };
            var o, n = (o = r(43766)) && o.__esModule ? o : {
                default: o
            }
        },
        69808: function(e) {
            let t = !1;
            e.exports = {
                black: "#000",
                white: "#fff",
                rose: {
                    50: "#fff1f2",
                    100: "#ffe4e6",
                    200: "#fecdd3",
                    300: "#fda4af",
                    400: "#fb7185",
                    500: "#f43f5e",
                    600: "#e11d48",
                    700: "#be123c",
                    800: "#9f1239",
                    900: "#881337"
                },
                pink: {
                    50: "#fdf2f8",
                    100: "#fce7f3",
                    200: "#fbcfe8",
                    300: "#f9a8d4",
                    400: "#f472b6",
                    500: "#ec4899",
                    600: "#db2777",
                    700: "#be185d",
                    800: "#9d174d",
                    900: "#831843"
                },
                fuchsia: {
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#d946ef",
                    600: "#c026d3",
                    700: "#a21caf",
                    800: "#86198f",
                    900: "#701a75"
                },
                purple: {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7e22ce",
                    800: "#6b21a8",
                    900: "#581c87"
                },
                violet: {
                    50: "#f5f3ff",
                    100: "#ede9fe",
                    200: "#ddd6fe",
                    300: "#c4b5fd",
                    400: "#a78bfa",
                    500: "#8b5cf6",
                    600: "#7c3aed",
                    700: "#6d28d9",
                    800: "#5b21b6",
                    900: "#4c1d95"
                },
                indigo: {
                    50: "#eef2ff",
                    100: "#e0e7ff",
                    200: "#c7d2fe",
                    300: "#a5b4fc",
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                    800: "#3730a3",
                    900: "#312e81"
                },
                blue: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a"
                },
                get lightBlue() {
                    return t || (console.log("warn - As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`."), console.log("warn - Please update your color palette to eliminate this warning."), t = !0), {
                        50: "#f0f9ff",
                        100: "#e0f2fe",
                        200: "#bae6fd",
                        300: "#7dd3fc",
                        400: "#38bdf8",
                        500: "#0ea5e9",
                        600: "#0284c7",
                        700: "#0369a1",
                        800: "#075985",
                        900: "#0c4a6e"
                    }
                },
                sky: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e"
                },
                cyan: {
                    50: "#ecfeff",
                    100: "#cffafe",
                    200: "#a5f3fc",
                    300: "#67e8f9",
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                    700: "#0e7490",
                    800: "#155e75",
                    900: "#164e63"
                },
                teal: {
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488",
                    700: "#0f766e",
                    800: "#115e59",
                    900: "#134e4a"
                },
                emerald: {
                    50: "#ecfdf5",
                    100: "#d1fae5",
                    200: "#a7f3d0",
                    300: "#6ee7b7",
                    400: "#34d399",
                    500: "#10b981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b"
                },
                green: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#14532d"
                },
                lime: {
                    50: "#f7fee7",
                    100: "#ecfccb",
                    200: "#d9f99d",
                    300: "#bef264",
                    400: "#a3e635",
                    500: "#84cc16",
                    600: "#65a30d",
                    700: "#4d7c0f",
                    800: "#3f6212",
                    900: "#365314"
                },
                yellow: {
                    50: "#fefce8",
                    100: "#fef9c3",
                    200: "#fef08a",
                    300: "#fde047",
                    400: "#facc15",
                    500: "#eab308",
                    600: "#ca8a04",
                    700: "#a16207",
                    800: "#854d0e",
                    900: "#713f12"
                },
                amber: {
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f"
                },
                orange: {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12"
                },
                red: {
                    50: "#fef2f2",
                    100: "#fee2e2",
                    200: "#fecaca",
                    300: "#fca5a5",
                    400: "#f87171",
                    500: "#ef4444",
                    600: "#dc2626",
                    700: "#b91c1c",
                    800: "#991b1b",
                    900: "#7f1d1d"
                },
                warmGray: {
                    50: "#fafaf9",
                    100: "#f5f5f4",
                    200: "#e7e5e4",
                    300: "#d6d3d1",
                    400: "#a8a29e",
                    500: "#78716c",
                    600: "#57534e",
                    700: "#44403c",
                    800: "#292524",
                    900: "#1c1917"
                },
                trueGray: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#e5e5e5",
                    300: "#d4d4d4",
                    400: "#a3a3a3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626",
                    900: "#171717"
                },
                gray: {
                    50: "#fafafa",
                    100: "#f4f4f5",
                    200: "#e4e4e7",
                    300: "#d4d4d8",
                    400: "#a1a1aa",
                    500: "#71717a",
                    600: "#52525b",
                    700: "#3f3f46",
                    800: "#27272a",
                    900: "#18181b"
                },
                coolGray: {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827"
                },
                blueGray: {
                    50: "#f8fafc",
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                    300: "#cbd5e1",
                    400: "#94a3b8",
                    500: "#64748b",
                    600: "#475569",
                    700: "#334155",
                    800: "#1e293b",
                    900: "#0f172a"
                }
            }
        },
        75874: function(e, t, r) {
            const o = r(50361),
                n = r(99962);
            e.exports = o(n.theme)
        },
        9002: function(e, t) {
            "use strict";

            function r(e, t) {
                return {
                    handler: e,
                    config: t
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, r.withOptions = function(e, t = (() => ({}))) {
                const r = function(r) {
                    return {
                        __options: r,
                        handler: e(r),
                        config: t(r)
                    }
                };
                return r.__isOptionsFunction = !0, r.__pluginFunction = e, r.__configFunction = t, r
            };
            var o = r;
            t.default = o
        },
        42502: function(e, t, r) {
            const o = r(9002);
            e.exports = (o.__esModule ? o : {
                default: o
            }).default
        },
        99962: function(e, t, r) {
            const o = r(69808);
            e.exports = {
                purge: [],
                presets: [],
                darkMode: !1,
                theme: {
                    screens: {
                        sm: "640px",
                        md: "768px",
                        lg: "1024px",
                        xl: "1280px",
                        "2xl": "1536px"
                    },
                    colors: {
                        transparent: "transparent",
                        current: "currentColor",
                        black: o.black,
                        white: o.white,
                        gray: o.coolGray,
                        red: o.red,
                        yellow: o.amber,
                        green: o.emerald,
                        blue: o.blue,
                        indigo: o.indigo,
                        purple: o.violet,
                        pink: o.pink
                    },
                    spacing: {
                        px: "1px",
                        0: "0px",
                        .5: "0.125rem",
                        1: "0.25rem",
                        1.5: "0.375rem",
                        2: "0.5rem",
                        2.5: "0.625rem",
                        3: "0.75rem",
                        3.5: "0.875rem",
                        4: "1rem",
                        5: "1.25rem",
                        6: "1.5rem",
                        7: "1.75rem",
                        8: "2rem",
                        9: "2.25rem",
                        10: "2.5rem",
                        11: "2.75rem",
                        12: "3rem",
                        14: "3.5rem",
                        16: "4rem",
                        20: "5rem",
                        24: "6rem",
                        28: "7rem",
                        32: "8rem",
                        36: "9rem",
                        40: "10rem",
                        44: "11rem",
                        48: "12rem",
                        52: "13rem",
                        56: "14rem",
                        60: "15rem",
                        64: "16rem",
                        72: "18rem",
                        80: "20rem",
                        96: "24rem"
                    },
                    animation: {
                        none: "none",
                        spin: "spin 1s linear infinite",
                        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        bounce: "bounce 1s infinite"
                    },
                    backdropBlur: e => e("blur"),
                    backdropBrightness: e => e("brightness"),
                    backdropContrast: e => e("contrast"),
                    backdropGrayscale: e => e("grayscale"),
                    backdropHueRotate: e => e("hueRotate"),
                    backdropInvert: e => e("invert"),
                    backdropOpacity: e => e("opacity"),
                    backdropSaturate: e => e("saturate"),
                    backdropSepia: e => e("sepia"),
                    backgroundColor: e => e("colors"),
                    backgroundImage: {
                        none: "none",
                        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
                        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
                        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
                        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
                        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
                    },
                    backgroundOpacity: e => e("opacity"),
                    backgroundPosition: {
                        bottom: "bottom",
                        center: "center",
                        left: "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        right: "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        top: "top"
                    },
                    backgroundSize: {
                        auto: "auto",
                        cover: "cover",
                        contain: "contain"
                    },
                    blur: {
                        0: "0",
                        none: "0",
                        sm: "4px",
                        DEFAULT: "8px",
                        md: "12px",
                        lg: "16px",
                        xl: "24px",
                        "2xl": "40px",
                        "3xl": "64px"
                    },
                    brightness: {
                        0: "0",
                        50: ".5",
                        75: ".75",
                        90: ".9",
                        95: ".95",
                        100: "1",
                        105: "1.05",
                        110: "1.1",
                        125: "1.25",
                        150: "1.5",
                        200: "2"
                    },
                    borderColor: e => ({ ...e("colors"),
                        DEFAULT: e("colors.gray.200", "currentColor")
                    }),
                    borderOpacity: e => e("opacity"),
                    borderRadius: {
                        none: "0px",
                        sm: "0.125rem",
                        DEFAULT: "0.25rem",
                        md: "0.375rem",
                        lg: "0.5rem",
                        xl: "0.75rem",
                        "2xl": "1rem",
                        "3xl": "1.5rem",
                        full: "9999px"
                    },
                    borderWidth: {
                        DEFAULT: "1px",
                        0: "0px",
                        2: "2px",
                        4: "4px",
                        8: "8px"
                    },
                    boxShadow: {
                        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
                        none: "none"
                    },
                    caretColor: e => e("colors"),
                    contrast: {
                        0: "0",
                        50: ".5",
                        75: ".75",
                        100: "1",
                        125: "1.25",
                        150: "1.5",
                        200: "2"
                    },
                    container: {},
                    content: {
                        none: "none"
                    },
                    cursor: {
                        auto: "auto",
                        default: "default",
                        pointer: "pointer",
                        wait: "wait",
                        text: "text",
                        move: "move",
                        help: "help",
                        "not-allowed": "not-allowed"
                    },
                    divideColor: e => e("borderColor"),
                    divideOpacity: e => e("borderOpacity"),
                    divideWidth: e => e("borderWidth"),
                    dropShadow: {
                        sm: "0 1px 1px rgba(0,0,0,0.05)",
                        DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
                        md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
                        lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
                        xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
                        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
                        none: "0 0 #0000"
                    },
                    fill: {
                        current: "currentColor"
                    },
                    grayscale: {
                        0: "0",
                        DEFAULT: "100%"
                    },
                    hueRotate: {
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-60": "-60deg",
                        "-30": "-30deg",
                        "-15": "-15deg",
                        0: "0deg",
                        15: "15deg",
                        30: "30deg",
                        60: "60deg",
                        90: "90deg",
                        180: "180deg"
                    },
                    invert: {
                        0: "0",
                        DEFAULT: "100%"
                    },
                    flex: {
                        1: "1 1 0%",
                        auto: "1 1 auto",
                        initial: "0 1 auto",
                        none: "none"
                    },
                    flexGrow: {
                        0: "0",
                        DEFAULT: "1"
                    },
                    flexShrink: {
                        0: "0",
                        DEFAULT: "1"
                    },
                    fontFamily: {
                        sans: ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
                        serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
                        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"]
                    },
                    fontSize: {
                        xs: ["0.75rem", {
                            lineHeight: "1rem"
                        }],
                        sm: ["0.875rem", {
                            lineHeight: "1.25rem"
                        }],
                        base: ["1rem", {
                            lineHeight: "1.5rem"
                        }],
                        lg: ["1.125rem", {
                            lineHeight: "1.75rem"
                        }],
                        xl: ["1.25rem", {
                            lineHeight: "1.75rem"
                        }],
                        "2xl": ["1.5rem", {
                            lineHeight: "2rem"
                        }],
                        "3xl": ["1.875rem", {
                            lineHeight: "2.25rem"
                        }],
                        "4xl": ["2.25rem", {
                            lineHeight: "2.5rem"
                        }],
                        "5xl": ["3rem", {
                            lineHeight: "1"
                        }],
                        "6xl": ["3.75rem", {
                            lineHeight: "1"
                        }],
                        "7xl": ["4.5rem", {
                            lineHeight: "1"
                        }],
                        "8xl": ["6rem", {
                            lineHeight: "1"
                        }],
                        "9xl": ["8rem", {
                            lineHeight: "1"
                        }]
                    },
                    fontWeight: {
                        thin: "100",
                        extralight: "200",
                        light: "300",
                        normal: "400",
                        medium: "500",
                        semibold: "600",
                        bold: "700",
                        extrabold: "800",
                        black: "900"
                    },
                    gap: e => e("spacing"),
                    gradientColorStops: e => e("colors"),
                    gridAutoColumns: {
                        auto: "auto",
                        min: "min-content",
                        max: "max-content",
                        fr: "minmax(0, 1fr)"
                    },
                    gridAutoRows: {
                        auto: "auto",
                        min: "min-content",
                        max: "max-content",
                        fr: "minmax(0, 1fr)"
                    },
                    gridColumn: {
                        auto: "auto",
                        "span-1": "span 1 / span 1",
                        "span-2": "span 2 / span 2",
                        "span-3": "span 3 / span 3",
                        "span-4": "span 4 / span 4",
                        "span-5": "span 5 / span 5",
                        "span-6": "span 6 / span 6",
                        "span-7": "span 7 / span 7",
                        "span-8": "span 8 / span 8",
                        "span-9": "span 9 / span 9",
                        "span-10": "span 10 / span 10",
                        "span-11": "span 11 / span 11",
                        "span-12": "span 12 / span 12",
                        "span-full": "1 / -1"
                    },
                    gridColumnEnd: {
                        auto: "auto",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        10: "10",
                        11: "11",
                        12: "12",
                        13: "13"
                    },
                    gridColumnStart: {
                        auto: "auto",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        10: "10",
                        11: "11",
                        12: "12",
                        13: "13"
                    },
                    gridRow: {
                        auto: "auto",
                        "span-1": "span 1 / span 1",
                        "span-2": "span 2 / span 2",
                        "span-3": "span 3 / span 3",
                        "span-4": "span 4 / span 4",
                        "span-5": "span 5 / span 5",
                        "span-6": "span 6 / span 6",
                        "span-full": "1 / -1"
                    },
                    gridRowStart: {
                        auto: "auto",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7"
                    },
                    gridRowEnd: {
                        auto: "auto",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7"
                    },
                    gridTemplateColumns: {
                        none: "none",
                        1: "repeat(1, minmax(0, 1fr))",
                        2: "repeat(2, minmax(0, 1fr))",
                        3: "repeat(3, minmax(0, 1fr))",
                        4: "repeat(4, minmax(0, 1fr))",
                        5: "repeat(5, minmax(0, 1fr))",
                        6: "repeat(6, minmax(0, 1fr))",
                        7: "repeat(7, minmax(0, 1fr))",
                        8: "repeat(8, minmax(0, 1fr))",
                        9: "repeat(9, minmax(0, 1fr))",
                        10: "repeat(10, minmax(0, 1fr))",
                        11: "repeat(11, minmax(0, 1fr))",
                        12: "repeat(12, minmax(0, 1fr))"
                    },
                    gridTemplateRows: {
                        none: "none",
                        1: "repeat(1, minmax(0, 1fr))",
                        2: "repeat(2, minmax(0, 1fr))",
                        3: "repeat(3, minmax(0, 1fr))",
                        4: "repeat(4, minmax(0, 1fr))",
                        5: "repeat(5, minmax(0, 1fr))",
                        6: "repeat(6, minmax(0, 1fr))"
                    },
                    height: e => ({
                        auto: "auto",
                        ...e("spacing"),
                        "1/2": "50%",
                        "1/3": "33.333333%",
                        "2/3": "66.666667%",
                        "1/4": "25%",
                        "2/4": "50%",
                        "3/4": "75%",
                        "1/5": "20%",
                        "2/5": "40%",
                        "3/5": "60%",
                        "4/5": "80%",
                        "1/6": "16.666667%",
                        "2/6": "33.333333%",
                        "3/6": "50%",
                        "4/6": "66.666667%",
                        "5/6": "83.333333%",
                        full: "100%",
                        screen: "100vh"
                    }),
                    inset: (e, {
                        negative: t
                    }) => ({
                        auto: "auto",
                        ...e("spacing"),
                        ...t(e("spacing")),
                        "1/2": "50%",
                        "1/3": "33.333333%",
                        "2/3": "66.666667%",
                        "1/4": "25%",
                        "2/4": "50%",
                        "3/4": "75%",
                        full: "100%",
                        "-1/2": "-50%",
                        "-1/3": "-33.333333%",
                        "-2/3": "-66.666667%",
                        "-1/4": "-25%",
                        "-2/4": "-50%",
                        "-3/4": "-75%",
                        "-full": "-100%"
                    }),
                    keyframes: {
                        spin: {
                            to: {
                                transform: "rotate(360deg)"
                            }
                        },
                        ping: {
                            "75%, 100%": {
                                transform: "scale(2)",
                                opacity: "0"
                            }
                        },
                        pulse: {
                            "50%": {
                                opacity: ".5"
                            }
                        },
                        bounce: {
                            "0%, 100%": {
                                transform: "translateY(-25%)",
                                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
                            },
                            "50%": {
                                transform: "none",
                                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
                            }
                        }
                    },
                    letterSpacing: {
                        tighter: "-0.05em",
                        tight: "-0.025em",
                        normal: "0em",
                        wide: "0.025em",
                        wider: "0.05em",
                        widest: "0.1em"
                    },
                    lineHeight: {
                        none: "1",
                        tight: "1.25",
                        snug: "1.375",
                        normal: "1.5",
                        relaxed: "1.625",
                        loose: "2",
                        3: ".75rem",
                        4: "1rem",
                        5: "1.25rem",
                        6: "1.5rem",
                        7: "1.75rem",
                        8: "2rem",
                        9: "2.25rem",
                        10: "2.5rem"
                    },
                    listStyleType: {
                        none: "none",
                        disc: "disc",
                        decimal: "decimal"
                    },
                    margin: (e, {
                        negative: t
                    }) => ({
                        auto: "auto",
                        ...e("spacing"),
                        ...t(e("spacing"))
                    }),
                    maxHeight: e => ({ ...e("spacing"),
                        full: "100%",
                        screen: "100vh"
                    }),
                    maxWidth: (e, {
                        breakpoints: t
                    }) => ({
                        none: "none",
                        0: "0rem",
                        xs: "20rem",
                        sm: "24rem",
                        md: "28rem",
                        lg: "32rem",
                        xl: "36rem",
                        "2xl": "42rem",
                        "3xl": "48rem",
                        "4xl": "56rem",
                        "5xl": "64rem",
                        "6xl": "72rem",
                        "7xl": "80rem",
                        full: "100%",
                        min: "min-content",
                        max: "max-content",
                        prose: "65ch",
                        ...t(e("screens"))
                    }),
                    minHeight: {
                        0: "0px",
                        full: "100%",
                        screen: "100vh"
                    },
                    minWidth: {
                        0: "0px",
                        full: "100%",
                        min: "min-content",
                        max: "max-content"
                    },
                    objectPosition: {
                        bottom: "bottom",
                        center: "center",
                        left: "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        right: "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        top: "top"
                    },
                    opacity: {
                        0: "0",
                        5: "0.05",
                        10: "0.1",
                        20: "0.2",
                        25: "0.25",
                        30: "0.3",
                        40: "0.4",
                        50: "0.5",
                        60: "0.6",
                        70: "0.7",
                        75: "0.75",
                        80: "0.8",
                        90: "0.9",
                        95: "0.95",
                        100: "1"
                    },
                    order: {
                        first: "-9999",
                        last: "9999",
                        none: "0",
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        10: "10",
                        11: "11",
                        12: "12"
                    },
                    outline: {
                        none: ["2px solid transparent", "2px"],
                        white: ["2px dotted white", "2px"],
                        black: ["2px dotted black", "2px"]
                    },
                    padding: e => e("spacing"),
                    placeholderColor: e => e("colors"),
                    placeholderOpacity: e => e("opacity"),
                    ringColor: e => ({
                        DEFAULT: e("colors.blue.500", "#3b82f6"),
                        ...e("colors")
                    }),
                    ringOffsetColor: e => e("colors"),
                    ringOffsetWidth: {
                        0: "0px",
                        1: "1px",
                        2: "2px",
                        4: "4px",
                        8: "8px"
                    },
                    ringOpacity: e => ({
                        DEFAULT: "0.5",
                        ...e("opacity")
                    }),
                    ringWidth: {
                        DEFAULT: "3px",
                        0: "0px",
                        1: "1px",
                        2: "2px",
                        4: "4px",
                        8: "8px"
                    },
                    rotate: {
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-45": "-45deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg",
                        0: "0deg",
                        1: "1deg",
                        2: "2deg",
                        3: "3deg",
                        6: "6deg",
                        12: "12deg",
                        45: "45deg",
                        90: "90deg",
                        180: "180deg"
                    },
                    saturate: {
                        0: "0",
                        50: ".5",
                        100: "1",
                        150: "1.5",
                        200: "2"
                    },
                    scale: {
                        0: "0",
                        50: ".5",
                        75: ".75",
                        90: ".9",
                        95: ".95",
                        100: "1",
                        105: "1.05",
                        110: "1.1",
                        125: "1.25",
                        150: "1.5"
                    },
                    sepia: {
                        0: "0",
                        DEFAULT: "100%"
                    },
                    skew: {
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg",
                        0: "0deg",
                        1: "1deg",
                        2: "2deg",
                        3: "3deg",
                        6: "6deg",
                        12: "12deg"
                    },
                    space: (e, {
                        negative: t
                    }) => ({ ...e("spacing"),
                        ...t(e("spacing"))
                    }),
                    stroke: {
                        current: "currentColor"
                    },
                    strokeWidth: {
                        0: "0",
                        1: "1",
                        2: "2"
                    },
                    textColor: e => e("colors"),
                    textOpacity: e => e("opacity"),
                    transformOrigin: {
                        center: "center",
                        top: "top",
                        "top-right": "top right",
                        right: "right",
                        "bottom-right": "bottom right",
                        bottom: "bottom",
                        "bottom-left": "bottom left",
                        left: "left",
                        "top-left": "top left"
                    },
                    transitionDelay: {
                        75: "75ms",
                        100: "100ms",
                        150: "150ms",
                        200: "200ms",
                        300: "300ms",
                        500: "500ms",
                        700: "700ms",
                        1e3: "1000ms"
                    },
                    transitionDuration: {
                        DEFAULT: "150ms",
                        75: "75ms",
                        100: "100ms",
                        150: "150ms",
                        200: "200ms",
                        300: "300ms",
                        500: "500ms",
                        700: "700ms",
                        1e3: "1000ms"
                    },
                    transitionProperty: {
                        none: "none",
                        all: "all",
                        DEFAULT: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        colors: "background-color, border-color, color, fill, stroke",
                        opacity: "opacity",
                        shadow: "box-shadow",
                        transform: "transform"
                    },
                    transitionTimingFunction: {
                        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
                        linear: "linear",
                        in: "cubic-bezier(0.4, 0, 1, 1)",
                        out: "cubic-bezier(0, 0, 0.2, 1)",
                        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    translate: (e, {
                        negative: t
                    }) => ({ ...e("spacing"),
                        ...t(e("spacing")),
                        "1/2": "50%",
                        "1/3": "33.333333%",
                        "2/3": "66.666667%",
                        "1/4": "25%",
                        "2/4": "50%",
                        "3/4": "75%",
                        full: "100%",
                        "-1/2": "-50%",
                        "-1/3": "-33.333333%",
                        "-2/3": "-66.666667%",
                        "-1/4": "-25%",
                        "-2/4": "-50%",
                        "-3/4": "-75%",
                        "-full": "-100%"
                    }),
                    width: e => ({
                        auto: "auto",
                        ...e("spacing"),
                        "1/2": "50%",
                        "1/3": "33.333333%",
                        "2/3": "66.666667%",
                        "1/4": "25%",
                        "2/4": "50%",
                        "3/4": "75%",
                        "1/5": "20%",
                        "2/5": "40%",
                        "3/5": "60%",
                        "4/5": "80%",
                        "1/6": "16.666667%",
                        "2/6": "33.333333%",
                        "3/6": "50%",
                        "4/6": "66.666667%",
                        "5/6": "83.333333%",
                        "1/12": "8.333333%",
                        "2/12": "16.666667%",
                        "3/12": "25%",
                        "4/12": "33.333333%",
                        "5/12": "41.666667%",
                        "6/12": "50%",
                        "7/12": "58.333333%",
                        "8/12": "66.666667%",
                        "9/12": "75%",
                        "10/12": "83.333333%",
                        "11/12": "91.666667%",
                        full: "100%",
                        screen: "100vw",
                        min: "min-content",
                        max: "max-content"
                    }),
                    zIndex: {
                        auto: "auto",
                        0: "0",
                        10: "10",
                        20: "20",
                        30: "30",
                        40: "40",
                        50: "50"
                    }
                },
                variantOrder: ["first", "last", "odd", "even", "visited", "checked", "empty", "read-only", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"],
                variants: {
                    accessibility: ["responsive", "focus-within", "focus"],
                    alignContent: ["responsive"],
                    alignItems: ["responsive"],
                    alignSelf: ["responsive"],
                    animation: ["responsive"],
                    appearance: ["responsive"],
                    backdropBlur: ["responsive"],
                    backdropBrightness: ["responsive"],
                    backdropContrast: ["responsive"],
                    backdropFilter: ["responsive"],
                    backdropGrayscale: ["responsive"],
                    backdropHueRotate: ["responsive"],
                    backdropInvert: ["responsive"],
                    backdropOpacity: ["responsive"],
                    backdropSaturate: ["responsive"],
                    backdropSepia: ["responsive"],
                    backgroundAttachment: ["responsive"],
                    backgroundBlendMode: ["responsive"],
                    backgroundClip: ["responsive"],
                    backgroundColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
                    backgroundImage: ["responsive"],
                    backgroundOpacity: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
                    backgroundPosition: ["responsive"],
                    backgroundRepeat: ["responsive"],
                    backgroundSize: ["responsive"],
                    backgroundOrigin: ["responsive"],
                    blur: ["responsive"],
                    borderCollapse: ["responsive"],
                    borderColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
                    borderOpacity: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
                    borderRadius: ["responsive"],
                    borderStyle: ["responsive"],
                    borderWidth: ["responsive"],
                    boxDecorationBreak: ["responsive"],
                    boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
                    boxSizing: ["responsive"],
                    brightness: ["responsive"],
                    clear: ["responsive"],
                    container: ["responsive"],
                    contrast: ["responsive"],
                    cursor: ["responsive"],
                    display: ["responsive"],
                    divideColor: ["responsive", "dark"],
                    divideOpacity: ["responsive", "dark"],
                    divideStyle: ["responsive"],
                    divideWidth: ["responsive"],
                    dropShadow: ["responsive"],
                    fill: ["responsive"],
                    filter: ["responsive"],
                    flex: ["responsive"],
                    flexDirection: ["responsive"],
                    flexGrow: ["responsive"],
                    flexShrink: ["responsive"],
                    flexWrap: ["responsive"],
                    float: ["responsive"],
                    fontFamily: ["responsive"],
                    fontSize: ["responsive"],
                    fontSmoothing: ["responsive"],
                    fontStyle: ["responsive"],
                    fontVariantNumeric: ["responsive"],
                    fontWeight: ["responsive"],
                    gap: ["responsive"],
                    gradientColorStops: ["responsive", "dark", "hover", "focus"],
                    grayscale: ["responsive"],
                    gridAutoColumns: ["responsive"],
                    gridAutoFlow: ["responsive"],
                    gridAutoRows: ["responsive"],
                    gridColumn: ["responsive"],
                    gridColumnEnd: ["responsive"],
                    gridColumnStart: ["responsive"],
                    gridRow: ["responsive"],
                    gridRowEnd: ["responsive"],
                    gridRowStart: ["responsive"],
                    gridTemplateColumns: ["responsive"],
                    gridTemplateRows: ["responsive"],
                    height: ["responsive"],
                    hueRotate: ["responsive"],
                    inset: ["responsive"],
                    invert: ["responsive"],
                    isolation: ["responsive"],
                    justifyContent: ["responsive"],
                    justifyItems: ["responsive"],
                    justifySelf: ["responsive"],
                    letterSpacing: ["responsive"],
                    lineHeight: ["responsive"],
                    listStylePosition: ["responsive"],
                    listStyleType: ["responsive"],
                    margin: ["responsive"],
                    maxHeight: ["responsive"],
                    maxWidth: ["responsive"],
                    minHeight: ["responsive"],
                    minWidth: ["responsive"],
                    mixBlendMode: ["responsive"],
                    objectFit: ["responsive"],
                    objectPosition: ["responsive"],
                    opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
                    order: ["responsive"],
                    outline: ["responsive", "focus-within", "focus"],
                    overflow: ["responsive"],
                    overscrollBehavior: ["responsive"],
                    padding: ["responsive"],
                    placeContent: ["responsive"],
                    placeItems: ["responsive"],
                    placeSelf: ["responsive"],
                    placeholderColor: ["responsive", "dark", "focus"],
                    placeholderOpacity: ["responsive", "dark", "focus"],
                    pointerEvents: ["responsive"],
                    position: ["responsive"],
                    resize: ["responsive"],
                    ringColor: ["responsive", "dark", "focus-within", "focus"],
                    ringOffsetColor: ["responsive", "dark", "focus-within", "focus"],
                    ringOffsetWidth: ["responsive", "focus-within", "focus"],
                    ringOpacity: ["responsive", "dark", "focus-within", "focus"],
                    ringWidth: ["responsive", "focus-within", "focus"],
                    rotate: ["responsive", "hover", "focus"],
                    saturate: ["responsive"],
                    scale: ["responsive", "hover", "focus"],
                    sepia: ["responsive"],
                    skew: ["responsive", "hover", "focus"],
                    space: ["responsive"],
                    stroke: ["responsive"],
                    strokeWidth: ["responsive"],
                    tableLayout: ["responsive"],
                    textAlign: ["responsive"],
                    textColor: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
                    textDecoration: ["responsive", "group-hover", "focus-within", "hover", "focus"],
                    textOpacity: ["responsive", "dark", "group-hover", "focus-within", "hover", "focus"],
                    textOverflow: ["responsive"],
                    textTransform: ["responsive"],
                    transform: ["responsive"],
                    transformOrigin: ["responsive"],
                    transitionDelay: ["responsive"],
                    transitionDuration: ["responsive"],
                    transitionProperty: ["responsive"],
                    transitionTimingFunction: ["responsive"],
                    translate: ["responsive", "hover", "focus"],
                    userSelect: ["responsive"],
                    verticalAlign: ["responsive"],
                    visibility: ["responsive"],
                    whitespace: ["responsive"],
                    width: ["responsive"],
                    wordBreak: ["responsive"],
                    zIndex: ["responsive", "focus-within", "focus"]
                },
                plugins: []
            }
        }
    }
]);