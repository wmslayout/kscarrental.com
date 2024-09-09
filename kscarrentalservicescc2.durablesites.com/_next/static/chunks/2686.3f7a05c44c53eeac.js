"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2686], {
        60546: function(e, n, t) {
            t.d(n, {
                OC: function() {
                    return r
                }
            });
            var o = t(85893),
                i = t(67294),
                l = t(62246),
                a = t(4433),
                c = [{
                    id: "slantLeft",
                    getPath: function(e, n) {
                        return "M".concat(e, " 0L-0 ").concat(n)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e, n) {
                        return "M0 0L".concat(e, " ").concat(n)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e, n) {
                        return "M0 0".concat(n, "L").concat(e / 2, " 0L").concat(e, " ").concat(n, "L").concat(1.5 * e, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e, n) {
                        return "M0 0L".concat(e / 2, " ").concat(n, "L").concat(e, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e, n) {
                        return "M0 0 C".concat(e / 2, " ").concat(n, " ").concat(e - e / 2, " ").concat(n, " ").concat(e, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e, n) {
                        return "M0 ".concat(n, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(n)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e, n) {
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(n, " ").concat(.3333 * e, " ").concat(n, "C").concat(.4681 * e, " ").concat(n, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(n, " ").concat(e, " ").concat(n)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e, n) {
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(n, " ").concat(.666 * e, " ").concat(n, "C").concat(.547 * e, " ").concat(n, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e, n) {
                        return "M0 0L".concat(e / 3, " ").concat(n, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(n)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e, n) {
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(n, "L").concat(e / 3, " 0L0 ").concat(n)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e, n) {
                        return "M0 ".concat(n, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e, n) {
                        return "M".concat(e, " ").concat(n, "C").concat(e / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(e, n) {
                        return "M0 ".concat(n, "H").concat(e)
                    }
                }],
                d = function(e) {
                    var n = e.width,
                        t = e.shape,
                        i = e.strokeWidth,
                        l = e.strokeColor,
                        d = e.strokeType,
                        r = c.find((function(e) {
                            return e.id === (null !== t && void 0 !== t ? t : "none")
                        })),
                        s = Math.floor(n),
                        u = "none" === r.id ? Math.floor(i) : Math.floor(s / a.c8),
                        x = r.getPath(s, u);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, o.jsx)("path", {
                            d: x,
                            stroke: l,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === d ? "40 20" : void 0
                        })
                    })
                },
                r = function(e) {
                    var n = e.contentRef,
                        t = e.border,
                        a = e.sectionDivider,
                        c = t || {},
                        r = c.type,
                        s = c.width,
                        u = c.color,
                        x = (0, i.useState)(0),
                        p = x[0],
                        v = x[1],
                        h = (0, i.useCallback)((function() {
                            var e;
                            v(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0)
                        }), [n]);
                    return (0, l.Z)(h, t ? n : null), t ? (0, o.jsx)(d, {
                        width: p,
                        shape: a,
                        strokeType: r,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        52686: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return f
                }
            });
            var o = t(14251),
                i = t(85893),
                l = t(67294),
                a = t(41125),
                c = t(5152),
                d = t.n(c),
                r = {
                    dark: "dark-v11",
                    light: "light-v11",
                    outdoors: "outdoors-v12",
                    satellite: "satellite-v9",
                    streets: "streets-v12"
                },
                s = function(e) {
                    var n, o = e.latLng,
                        c = e.markerColor,
                        s = void 0 === c ? a.theme.extend.colors.indigo[600] : c,
                        u = e.theme,
                        x = void 0 === u ? "light" : u,
                        p = e.className,
                        v = e.zoom,
                        h = void 0 === v ? 10 : v,
                        m = (0, l.useState)(null),
                        f = m[0],
                        g = m[1];
                    return (0, l.useEffect)((function() {
                        g(d()((function() {
                            return t.e(6348).then(t.bind(t, 16348)).then((function(e) {
                                return e.StaticMap
                            }))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return [16348]
                                }
                            }
                        }))
                    }), []), f ? (0, i.jsx)(f, {
                        latLng: null !== o && void 0 !== o ? o : {
                            lat: 37.0902,
                            lng: -95.7129
                        },
                        markerColor: s,
                        theme: null !== (n = r[x]) && void 0 !== n ? n : r.light,
                        className: p,
                        zoom: h
                    }) : null
                },
                u = t(399),
                x = t(21123),
                p = t(11942),
                v = t(4433),
                h = t(60546),
                m = t(41370);

            function f(e) {
                var n, t, a, c, d, r, f, g, w, y, b = e.id,
                    j = e.website,
                    k = e.block,
                    L = e.previousBlock,
                    C = e.isSeoHeadline,
                    N = e.stickyHeaderOffsetStyle,
                    H = (0, l.useState)("#000000"),
                    M = H[0],
                    z = H[1],
                    P = null === k || void 0 === k ? void 0 : k.align,
                    S = null !== (w = null === k || void 0 === k ? void 0 : k.cornerRadius) && void 0 !== w ? w : "no-rounded",
                    A = null === k || void 0 === k ? void 0 : k.address,
                    Z = null !== (y = null === k || void 0 === k ? void 0 : k.latLng) && void 0 !== y ? y : {
                        lat: 37.0902,
                        lng: -95.7129
                    },
                    R = null === k || void 0 === k ? void 0 : k.animation,
                    K = null === j || void 0 === j ? void 0 : j.animation;
                !k || null !== k.headline && void 0 !== k.headline || (k.headline = "Location");
                var D, E, F = null === k || void 0 === k ? void 0 : k.divider,
                    W = null === k || void 0 === k ? void 0 : k.border,
                    _ = (0, l.useRef)(null),
                    B = (0, u.Z)(k).minHeight,
                    I = function() {
                        var e, n;
                        if (null === k || void 0 === k || null === (e = k.layers) || void 0 === e ? void 0 : e.palette) {
                            var t, o, i;
                            if ("custom" === (null === k || void 0 === k || null === (t = k.layers) || void 0 === t ? void 0 : t.palette)) return null === k || void 0 === k || null === (o = k.layers) || void 0 === o || null === (i = o.foreground) || void 0 === i ? void 0 : i.accent;
                            var l, a, c = (null === j || void 0 === j || null === (l = j.colorPalette) || void 0 === l ? void 0 : l.Palette) || (null === j || void 0 === j ? void 0 : j.colorPalette);
                            return (0, p.ow)(c, null === k || void 0 === k || null === (a = k.layers) || void 0 === a ? void 0 : a.palette, "accent")
                        }
                        return null !== (n = null === k || void 0 === k ? void 0 : k.marker) && void 0 !== n ? n : j.primaryColor
                    },
                    O = function(e) {
                        var n;
                        z((0, p.$O)((null === e || void 0 === e || null === (n = e.overlay) || void 0 === n ? void 0 : n.color1) || "#FFFFFF"))
                    };
                return (0, i.jsxs)("section", {
                    className: "relative",
                    children: [(0, i.jsxs)("div", {
                        ref: _,
                        id: b,
                        className: (0, p.AK)("relative flex break-word", "min-h-screen" !== (null === k || void 0 === k || null === (n = k.spacing) || void 0 === n ? void 0 : n.minHeight) && "background" === (null === k || void 0 === k ? void 0 : k.style) ? "!min-h-80vh md:!min-h-50vh" : ""),
                        style: (0, o.Z)({
                            minHeight: "min-h-screen" === (null === k || void 0 === k || null === (t = k.spacing) || void 0 === t ? void 0 : t.minHeight) ? B : ""
                        }, (0, v.$h)(k), N),
                        children: ["background" === (null === k || void 0 === k ? void 0 : k.style) ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(m.Z, {
                                settings: R,
                                globalSettings: K,
                                className: "absolute inset-0 w-full",
                                children: Z && (0, i.jsx)(s, {
                                    latLng: Z,
                                    className: (0, p.AK)("min-h-screen" === (null === k || void 0 === k || null === (a = k.spacing) || void 0 === a ? void 0 : a.minHeight) && "h-full w-full", "!absolute inset-0 z-5"),
                                    theme: null !== (D = null === k || void 0 === k ? void 0 : k.theme) && void 0 !== D ? D : "light",
                                    markerColor: I(),
                                    zoom: 17
                                })
                            }), (0, i.jsx)(m.Z, {
                                settings: R,
                                globalSettings: K,
                                className: (0, p.AK)("relative z-10 container mx-auto py-12 lg:py-14 xl:py-20", "min-h-screen" === (null === k || void 0 === k || null === (c = k.spacing) || void 0 === c ? void 0 : c.minHeight) ? "flex ".concat((0, p.A2)(k.verticalAlign)) : ""),
                                children: (0, i.jsx)("div", {
                                    className: (0, p.AK)("flex flex-row w-full", "left" !== P && "md:flex-row-reverse"),
                                    children: (0, i.jsxs)("div", {
                                        className: (0, p.AK)("relative z-10 w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow overflow-hidden", (0, p.yW)(S, null === j || void 0 === j ? void 0 : j.cornerRadius)),
                                        children: [(0, i.jsx)(x.Z, {
                                            block: k,
                                            website: j,
                                            onChange: O
                                        }), (0, i.jsxs)("div", {
                                            className: "relative z-10 flex flex-col gap-4",
                                            children: [(0, i.jsxs)("div", {
                                                children: [(null === k || void 0 === k ? void 0 : k.headline) && (0, i.jsx)(p.s0, {
                                                    className: "heading-medium mb-2",
                                                    style: (0, o.Z)({
                                                        color: M
                                                    }, (0, p.j2)(j)),
                                                    h1: C,
                                                    children: k.headline
                                                }), (0, i.jsx)("pre", {
                                                    className: "body-normal",
                                                    style: (0, o.Z)({
                                                        color: M
                                                    }, (0, p.SV)(j)),
                                                    children: A
                                                })]
                                            }), null === k || void 0 === k || null === (d = k.additional) || void 0 === d ? void 0 : d.map((function(e, n) {
                                                return (0, i.jsxs)("div", {
                                                    children: [(0, i.jsx)("p", {
                                                        className: "heading-medium mb-2",
                                                        style: (0, o.Z)({
                                                            color: M
                                                        }, (0, p.j2)(j)),
                                                        children: e.title
                                                    }), (0, i.jsx)("div", {
                                                        className: (0, p.AK)("rich-text-block website-wysiwyg"),
                                                        style: {
                                                            color: M
                                                        },
                                                        dangerouslySetInnerHTML: {
                                                            __html: e.content
                                                        }
                                                    })]
                                                }, n)
                                            }))]
                                        })]
                                    })
                                })
                            })]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(x.Z, {
                                block: k,
                                website: j,
                                onChange: O
                            }), (0, i.jsx)("div", {
                                className: (0, p.AK)("relative z-10 container mx-auto flex-grow", (0, p.bG)(null === k || void 0 === k ? void 0 : k.spacing)),
                                children: (0, i.jsxs)(m.Z, {
                                    settings: R,
                                    globalSettings: K,
                                    className: (0, p.AK)("flex flex-col w-full h-full gap-10 lg:gap-20", "left" === P ? "lg:flex-row" : "lg:!flex-row-reverse"),
                                    children: [(0, i.jsx)("div", {
                                        className: (0, p.AK)("w-full md:w-1/2  h-full overflow-hidden", (0, p.yW)(S, null === j || void 0 === j ? void 0 : j.cornerRadius)),
                                        children: (0, i.jsx)(s, {
                                            latLng: Z,
                                            className: (0, p.AK)("  w-full z-5", "min-h-screen" === (null === k || void 0 === k || null === (r = k.spacing) || void 0 === r ? void 0 : r.minHeight) ? "h-full" : "h-40 md:h-72 lg:h-96"),
                                            theme: null !== (E = null === k || void 0 === k ? void 0 : k.theme) && void 0 !== E ? E : "light",
                                            markerColor: I(),
                                            zoom: 17
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: (0, p.AK)("w-full md:w-1/2 flex flex-col gap-4", (0, p.A2)("min-h-screen" === (null === k || void 0 === k || null === (f = k.spacing) || void 0 === f ? void 0 : f.minHeight) ? k.verticalAlign : "center", !0)),
                                        children: [(0, i.jsxs)("div", {
                                            children: [(null === k || void 0 === k ? void 0 : k.headline) && (0, i.jsx)(p.s0, {
                                                className: "heading-medium mb-2",
                                                style: (0, o.Z)({
                                                    color: M
                                                }, (0, p.j2)(j)),
                                                h1: C,
                                                children: k.headline
                                            }), (0, i.jsx)("pre", {
                                                className: "body-normal",
                                                style: (0, o.Z)({
                                                    color: M
                                                }, (0, p.SV)(j)),
                                                children: A
                                            })]
                                        }), null === k || void 0 === k || null === (g = k.additional) || void 0 === g ? void 0 : g.map((function(e, n) {
                                            return (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("p", {
                                                    className: "heading-medium mb-2",
                                                    style: (0, o.Z)({
                                                        color: M
                                                    }, (0, p.j2)(j)),
                                                    children: e.title
                                                }), (0, i.jsx)("div", {
                                                    className: (0, p.AK)("rich-text-block website-wysiwyg"),
                                                    style: {
                                                        color: M
                                                    },
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.content
                                                    }
                                                })]
                                            }, n)
                                        }))]
                                    })]
                                })
                            })]
                        }), (0, i.jsx)(v.iz, {
                            contentRef: _,
                            divider: F,
                            previousDivider: null === L || void 0 === L ? void 0 : L.divider,
                            border: W,
                            previousBorder: null === L || void 0 === L ? void 0 : L.border,
                            dividerUniqueId: "".concat(b, "-").concat(F)
                        })]
                    }), W && (0, i.jsx)(h.OC, {
                        contentRef: _,
                        border: W,
                        sectionDivider: F
                    })]
                })
            }
        },
        399: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var o = t(67294),
                i = "website-header";

            function l(e) {
                var n;
                return e && 1 === e.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(i)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
            }

            function a(e) {
                var n, t, i = (0, o.useState)(0),
                    a = i[0],
                    c = i[1],
                    d = (0, o.useState)([0, 0]),
                    r = d[0],
                    s = d[1];
                return (0, o.useEffect)((function() {
                    var n, t = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var o = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            e && c(l(e))
                        })), o && n.observe(o)
                    } catch (i) {}
                    return window.addEventListener("resize", t), t(),
                        function() {
                            window.removeEventListener("resize", t), n && n.disconnect()
                        }
                }), []), (0, o.useEffect)((function() {
                    e && c(l(e))
                }), [e, r]), {
                    minHeight: (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (t = e.spacing) || void 0 === t ? void 0 : t.minHeight) ? "100vh" : "134px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        },
        41125: function(e, n, t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = t(16791).Z,
                i = t(75874);
            e.exports = {
                mode: "jit",
                purge: {
                    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./components/**/**/*.{js,ts,jsx,tsx}", "./hooks/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
                    safelist: ["hidden", "h-12", "h-24", "h-45", "h-48", "h-53", "h-54", "h-64", "h-72", "h-80", "h-85", "h-90", "h-96", "h-106", "h-120", "h-128", "h-132", "h-144", "h-160", "h-192", "h-240", "w-12", "h-36", "w-36", "w-24", "w-48", "w-80", "w-96", "w-128", "mx-auto", "ml-auto", "mr-auto", "justify-start", "justify-end", "justify-center", "align-start", "align-end", "align-center", "flex", "flex-col", "flex-row", "h-150", "z-100", "max-w-full", "items-start", "items-end", "items-center", "min-h-screen", "min-h-80vh", "min-h-50vh", "min-h-100", "delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600", "delay-700", "delay-800", "delay-900", "delay-1000", "delay-1100", "delay-1200", "delay-1300"]
                },
                darkMode: !1,
                theme: {
                    fontFamily: {
                        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"]
                    },
                    screens: o({
                        xs: "440px"
                    }, i.screens),
                    container: {
                        padding: {
                            DEFAULT: "1.25rem",
                            md: "1.5rem"
                        },
                        screens: {
                            sm: "640px",
                            md: "768px",
                            lg: "1024px",
                            xl: "1280px",
                            "2xl": "1536px"
                        }
                    },
                    zIndex: {
                        0: 0,
                        5: 5,
                        10: 10,
                        20: 20,
                        30: 30,
                        40: 40,
                        50: 50,
                        25: 25,
                        60: 60,
                        70: 70,
                        75: 75,
                        80: 80,
                        90: 90,
                        100: 100,
                        max: 999999,
                        auto: "auto"
                    },
                    customForms: function(e) {
                        return {
                            default: {
                                checkbox: {
                                    "&:focus": {
                                        outline: "none",
                                        boxShadow: "none",
                                        borderColor: "none"
                                    }
                                }
                            }
                        }
                    },
                    extend: {
                        fontSize: {
                            base: ["16px", "16px"],
                            "label-sm": ["10px", "12px"],
                            label: ["14px", "16px"],
                            "label-lg": ["16px", "16px"],
                            "body-sm": ["12px", "16px"],
                            body: ["16px", "20px"],
                            "body-lg": ["20px", "24px"],
                            h6: ["16px", "28px"],
                            h5: ["20px", "28px"],
                            h4: ["24px", "32px"],
                            h3: ["32px", "40px"],
                            h2: ["40px", "48px"],
                            h1: ["48px", "56px"],
                            display: ["64px", "72px"],
                            xxl: ["16rem", "1"]
                        },
                        padding: {
                            18: "4.5rem",
                            42: "168px"
                        },
                        width: {
                            18: "4.5rem",
                            20: "80px",
                            22: "5.5rem",
                            30: "120px",
                            40: "160px",
                            50: "200px",
                            60: "240px",
                            64: "256px",
                            75: "300px",
                            80: "320px",
                            90: "360px",
                            96: "384px",
                            100: "400px",
                            120: "480px",
                            128: "512px",
                            140: "560px",
                            150: "600px",
                            160: "640px",
                            182: "728px",
                            240: "960px",
                            "0/1": "0%",
                            "1/1": "100%"
                        },
                        height: {
                            .75: "3px",
                            9.5: "38px",
                            22: "5.5rem",
                            45: "180px",
                            53: "212px",
                            54: "216px",
                            64: "256px",
                            72: "288px",
                            80: "320px",
                            85: "340px",
                            90: "360px",
                            96: "384px",
                            100: "400px",
                            106: "424px",
                            120: "480px",
                            128: "512px",
                            132: "528px",
                            144: "576px",
                            150: "600px",
                            160: "640px",
                            192: "768px",
                            200: "800px",
                            210: "840px",
                            220: "880px",
                            230: "920px",
                            240: "960px",
                            250: "1000px",
                            260: "1040px"
                        },
                        backgroundSize: {
                            full: "100%"
                        },
                        backgroundPosition: {
                            "-top-4": "center top -1rem",
                            "-top-20": "center top -5rem"
                        },
                        minHeight: {
                            0: "0",
                            "1/4": "25%",
                            "1/2": "50%",
                            "3/4": "75%",
                            full: "100%",
                            20: "80px",
                            64: "256px",
                            80: "320px",
                            90: "360px",
                            116: "464px",
                            120: "480px",
                            130: "520px",
                            142: "568px",
                            150: "600px",
                            160: "640px",
                            240: "960px",
                            screen: "100vh",
                            "50vh": "50vh",
                            "80vh": "80vh"
                        },
                        maxHeight: {
                            0: "0",
                            "1/4": "25%",
                            "1/2": "50%",
                            "3/4": "75%",
                            full: "100%",
                            20: "80px",
                            40: "160px",
                            50: "200px",
                            60: "240px",
                            64: "256px",
                            70: "280px",
                            80: "320px",
                            90: "360px",
                            100: "400px",
                            150: "600px",
                            160: "640px",
                            240: "960px",
                            250: "1000px"
                        },
                        minWidth: {
                            36: "144px"
                        },
                        maxWidth: {
                            20: "80px",
                            30: "120px",
                            40: "160px",
                            50: "200px",
                            60: "240px",
                            64: "256px",
                            70: "280px",
                            80: "320px",
                            90: "360px",
                            100: "400px",
                            110: "440px",
                            120: "480px",
                            140: "560px",
                            160: "640px",
                            200: "800px",
                            220: "860px",
                            240: "960px",
                            250: "1000px",
                            "1/2": "50%",
                            full: "100%"
                        },
                        flex: {
                            0: "0 0 auto",
                            "col-1": "flex 1 1 10%"
                        },
                        borderRadius: {
                            "4xl": "2rem"
                        },
                        outline: {
                            "blue-600": ["2px solid #007CDB", "8px"]
                        },
                        colors: {
                            indigo: {
                                600: "#4C35DE"
                            }
                        },
                        transitionDuration: {
                            250: "250ms",
                            750: "750ms"
                        },
                        backdropBlur: {
                            "2xs": "1px",
                            xs: "2px"
                        },
                        transitionDelay: {
                            100: "100ms",
                            200: "200ms",
                            300: "300ms",
                            400: "400ms",
                            500: "500ms",
                            600: "600ms",
                            700: "700ms",
                            800: "800ms",
                            900: "900ms",
                            1e3: "1000ms",
                            1100: "1100ms",
                            1200: "1200ms",
                            1300: "1300ms"
                        },
                        opacity: {
                            4: "0.04",
                            65: "0.65"
                        },
                        margin: {
                            13: "3.25rem"
                        }
                    }
                },
                variants: {
                    extend: {}
                },
                plugins: [t(64221), t(50130)]
            }
        }
    }
]);