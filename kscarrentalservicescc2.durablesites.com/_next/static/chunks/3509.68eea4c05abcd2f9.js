"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3509], {
        60546: function(t, n, e) {
            e.d(n, {
                OC: function() {
                    return u
                }
            });
            var o = e(85893),
                i = e(67294),
                l = e(62246),
                c = e(4433),
                a = [{
                    id: "slantLeft",
                    getPath: function(t, n) {
                        return "M".concat(t, " 0L-0 ").concat(n)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(t, n) {
                        return "M0 0L".concat(t, " ").concat(n)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(t, n) {
                        return "M0 0".concat(n, "L").concat(t / 2, " 0L").concat(t, " ").concat(n, "L").concat(1.5 * t, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(t, n) {
                        return "M0 0L".concat(t / 2, " ").concat(n, "L").concat(t, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(t, n) {
                        return "M0 0 C".concat(t / 2, " ").concat(n, " ").concat(t - t / 2, " ").concat(n, " ").concat(t, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(t, n) {
                        return "M0 ".concat(n, " C").concat(t / 2, " 0 ").concat(t - t / 2, " 0 ").concat(t, " ").concat(n)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(t, n) {
                        return "M0 0C0 0 ".concat(.2023 * t, " ").concat(n, " ").concat(.3333 * t, " ").concat(n, "C").concat(.4681 * t, " ").concat(n, " ").concat(.5318 * t, " 0 ").concat(.6667 * t, " 0C").concat(.8015 * t, " 0 ").concat(t, " ").concat(n, " ").concat(t, " ").concat(n)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(t, n) {
                        return "M".concat(t, " 0C").concat(t, " 0 ").concat(.8 * t, " ").concat(n, " ").concat(.666 * t, " ").concat(n, "C").concat(.547 * t, " ").concat(n, " ").concat(.483 * t, " 0 ").concat(.333 * t, " 0C").concat(.184 * t, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(t, n) {
                        return "M0 0L".concat(t / 3, " ").concat(n, "L").concat(t / 1.5, " 0L").concat(t, " ").concat(n)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(t, n) {
                        return "M".concat(t, " 0L").concat(t / 1.5, " ").concat(n, "L").concat(t / 3, " 0L0 ").concat(n)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(t, n) {
                        return "M0 ".concat(n, "C").concat(t, " 0 ").concat(2 * t, " 0 ").concat(2 * t, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(t, n) {
                        return "M".concat(t, " ").concat(n, "C").concat(t / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(t, n) {
                        return "M0 ".concat(n, "H").concat(t)
                    }
                }],
                r = function(t) {
                    var n = t.width,
                        e = t.shape,
                        i = t.strokeWidth,
                        l = t.strokeColor,
                        r = t.strokeType,
                        u = a.find((function(t) {
                            return t.id === (null !== e && void 0 !== e ? e : "none")
                        })),
                        s = Math.floor(n),
                        d = "none" === u.id ? Math.floor(i) : Math.floor(s / c.c8),
                        v = u.getPath(s, d);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: d,
                        viewBox: "0 0 ".concat(s, " ").concat(d),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: l,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === r ? "40 20" : void 0
                        })
                    })
                },
                u = function(t) {
                    var n = t.contentRef,
                        e = t.border,
                        c = t.sectionDivider,
                        a = e || {},
                        u = a.type,
                        s = a.width,
                        d = a.color,
                        v = (0, i.useState)(0),
                        f = v[0],
                        m = v[1],
                        g = (0, i.useCallback)((function() {
                            var t;
                            m(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, l.Z)(g, e ? n : null), e ? (0, o.jsx)(r, {
                        width: f,
                        shape: c,
                        strokeType: u,
                        strokeWidth: s,
                        strokeColor: d
                    }) : null
                }
        },
        33509: function(t, n, e) {
            e.r(n), e.d(n, {
                default: function() {
                    return j
                }
            });
            var o = e(14251),
                i = e(52875),
                l = e(85893),
                c = e(11942),
                a = e(29260),
                r = e.n(a),
                u = e(52077),
                s = e(399),
                d = e(21123),
                v = e(67294),
                f = "below",
                m = {
                    color: "#000000",
                    amount: 80
                },
                g = {
                    below: "",
                    top: "absolute w-full bottom-0 left-0 flex flex-col justify-end",
                    covering: "absolute w-full h-full top-0 left-0 flex flex-col justify-center"
                },
                h = {
                    below: "py-6",
                    top: "p-6 justify-end",
                    covering: "p-10"
                };
            var p = e(62246),
                x = e(7004),
                b = e(4433),
                w = e(60546);
            var C = {
                xsmall: {
                    small: {
                        nColumns: 1,
                        gap: 16
                    },
                    medium: {
                        nColumns: 1,
                        gap: 40
                    },
                    large: {
                        nColumns: 1,
                        gap: 40
                    }
                },
                small: {
                    small: {
                        nColumns: 3,
                        gap: 24
                    },
                    medium: {
                        nColumns: 2,
                        gap: 40
                    },
                    large: {
                        nColumns: 1,
                        gap: 40
                    }
                },
                large: {
                    small: {
                        nColumns: 4,
                        gap: 24
                    },
                    medium: {
                        nColumns: 3,
                        gap: 40
                    },
                    large: {
                        nColumns: 2,
                        gap: 40
                    }
                },
                xlarge: {
                    small: {
                        nColumns: 4,
                        gap: 40
                    },
                    medium: {
                        nColumns: 3,
                        gap: 40
                    },
                    large: {
                        nColumns: 2,
                        gap: 80
                    }
                }
            };

            function k(t) {
                var n = function() {
                        var t = (0, c.ac)("(min-width: 640px)"),
                            n = (0, c.ac)("(min-width: 1024px)");
                        return (0, c.ac)("(min-width: 1280px)") ? "xlarge" : n ? "large" : t ? "small" : "xsmall"
                    }(),
                    e = (0, v.useState)({}),
                    o = e[0],
                    i = e[1],
                    l = (0, v.useState)({}),
                    a = l[0],
                    r = l[1];
                return (0, v.useEffect)((function() {
                    var e = C[n][null !== t && void 0 !== t ? t : "medium"],
                        o = e.nColumns,
                        l = e.gap;
                    i(function(t, n) {
                        return {
                            flex: "0 0 calc(".concat(100 / t, "% - ").concat((t - 1) * n / t, "px")
                        }
                    }(o, l)), r({
                        gap: "".concat(l, "px")
                    })
                }), [n, t]), {
                    itemsContainerStyles: a,
                    itemsStyles: o
                }
            }
            var y = e(41370);

            function j(t) {
                var n, e = t.id,
                    a = t.block,
                    C = t.website,
                    j = t.previousBlock,
                    S = t.isSeoHeadline,
                    M = t.stickyHeaderOffsetStyle,
                    L = null === a || void 0 === a ? void 0 : a.headline,
                    H = null === a || void 0 === a ? void 0 : a.showImage,
                    N = null === a || void 0 === a ? void 0 : a.showIcon,
                    P = null === a || void 0 === a ? void 0 : a.showHeading,
                    R = null === a || void 0 === a ? void 0 : a.showContent,
                    Z = null === a || void 0 === a ? void 0 : a.showButton,
                    A = null === a || void 0 === a ? void 0 : a.fullContentLink,
                    W = null === a || void 0 === a ? void 0 : a.aspectRatio,
                    z = null !== (n = null === a || void 0 === a ? void 0 : a.imageFit) && void 0 !== n ? n : "cover",
                    K = null === a || void 0 === a ? void 0 : a.cornerRadius,
                    E = null === a || void 0 === a ? void 0 : a.align,
                    I = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        return t.position && !n || (t.position = f), t.background && !n || (t.background = m), t
                    }(null === a || void 0 === a ? void 0 : a.textSettings, !H || "cover" !== z || !Z && !R && !P),
                    D = null === a || void 0 === a ? void 0 : a.animation,
                    B = null === C || void 0 === C ? void 0 : C.animation,
                    T = null === a || void 0 === a ? void 0 : a.divider,
                    _ = null === a || void 0 === a ? void 0 : a.border,
                    O = k(null === a || void 0 === a ? void 0 : a.itemsSize),
                    U = O.itemsStyles,
                    $ = O.itemsContainerStyles,
                    q = (0, v.useRef)(null),
                    F = (0, v.useState)("#000000"),
                    G = F[0],
                    Q = F[1],
                    V = (0, v.useState)("below" === (null === I || void 0 === I ? void 0 : I.position) ? void 0 : "0px"),
                    X = V[0],
                    Y = V[1],
                    J = function(t, n) {
                        var e, o, i = t.position,
                            l = t.background,
                            a = {},
                            r = {};
                        return "covering" === i || "top" === i ? (r.backgroundColor = (0, c.mR)(l.color, l.amount), a.color = (0, c.$O)(l.color)) : a.color = n, {
                            containerClasses: null !== (e = g[i]) && void 0 !== e ? e : "",
                            containerStyles: r,
                            contentClasses: null !== (o = h[i]) && void 0 !== o ? o : "",
                            contentStyles: a
                        }
                    }(I, G),
                    tt = (0, v.useRef)([]),
                    nt = (0, v.useCallback)((function() {
                        var t, n, e = tt.current.reduce((function(e, o) {
                            var i, l;
                            return (null !== (t = null === (i = e.current) || void 0 === i ? void 0 : i.offsetHeight) && void 0 !== t ? t : 0) > (null !== (n = null === (l = o.current) || void 0 === l ? void 0 : l.offsetHeight) && void 0 !== n ? n : 0) ? e : o
                        }));
                        e.current && Y(e.current.offsetHeight + "px")
                    }), [tt]);
                (0, p.Z)(nt, "below" === (null === I || void 0 === I ? void 0 : I.position) ? null : tt.current);
                var et = (0, s.Z)(a).minHeight,
                    ot = function() {
                        return "left" === E ? "text-left" : "right" === E ? "text-right" : "text-center"
                    },
                    it = A ? "a" : "div";
                return (0, l.jsxs)("section", {
                    className: "relative",
                    children: [(0, l.jsxs)("div", {
                        ref: q,
                        id: e,
                        className: (0, c.AK)("relative flex flex-none flex-shrink-0 break-word", (0, c.A2)((null === a || void 0 === a ? void 0 : a.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: et
                        }, (0, b.$h)(a), M),
                        children: [(0, l.jsx)(d.Z, {
                            block: a,
                            website: C,
                            setTextColor: Q
                        }), (0, l.jsx)("div", {
                            className: (0, c.AK)("relative z-10 container mx-auto", (0, c.bG)(null === a || void 0 === a ? void 0 : a.spacing)),
                            children: (0, l.jsxs)("div", {
                                children: [L && (0, l.jsx)(y.Z, {
                                    settings: D,
                                    globalSettings: B,
                                    children: (0, l.jsx)(c.s0, {
                                        className: (0, c.AK)("heading-large mb-6", ot()),
                                        style: (0, o.Z)({
                                            color: G
                                        }, (0, c.j2)(C)),
                                        h1: S,
                                        children: L
                                    })
                                }), (null === a || void 0 === a ? void 0 : a.items) && (0, l.jsx)("div", {
                                    className: (0, c.AK)("flex flex-wrap relative", "left" === E ? "justify-start" : "right" === E ? "justify-end" : "justify-center"),
                                    style: $,
                                    children: a.items.map((function(t, n) {
                                        var s, d, v, f, m, g, h;
                                        return (0, l.jsx)(it, {
                                            className: (0, c.AK)("group w-full relative overflow-hidden", (0, c.yW)(K, null === C || void 0 === C ? void 0 : C.cornerRadius), "0px" === X ? "opacity-0" : "", A ? "focus:outline-blue-600 cursor-pointer" : ""),
                                            onClick: A ? function(n) {
                                                return (0, x.Gc)(n, null === t || void 0 === t ? void 0 : t.button)
                                            } : void 0,
                                            target: A ? (0, x.U9)(null === t || void 0 === t ? void 0 : t.button, C) : void 0,
                                            href: A ? (0, x.f$)(null === t || void 0 === t ? void 0 : t.button, C) : void 0,
                                            style: U,
                                            children: (0, l.jsxs)(y.Z, {
                                                settings: D,
                                                globalSettings: B,
                                                delay: 100 * (n + 1),
                                                children: [H && t.image && (0, l.jsxs)("div", {
                                                    className: (0, c.AK)("flex-shrink-0 relative overflow-hidden", (0, c.n3)(W), (0, c.yW)(K, null === C || void 0 === C ? void 0 : C.cornerRadius)),
                                                    style: {
                                                        minHeight: X
                                                    },
                                                    children: ["top" === (null === I || void 0 === I ? void 0 : I.position) && (0, l.jsx)("span", {
                                                        className: "relative block",
                                                        style: {
                                                            height: X
                                                        }
                                                    }), (0, c.QW)(null === t || void 0 === t ? void 0 : t.image) && (0, l.jsx)(r(), {
                                                        sizes: "200vw",
                                                        quality: 90,
                                                        className: A ? "transition-all duration-300 group-hover:scale-110" : "",
                                                        src: (0, c.QW)(null === t || void 0 === t ? void 0 : t.image),
                                                        onContextMenu: function(t) {
                                                            return t.preventDefault()
                                                        },
                                                        objectFit: z,
                                                        objectPosition: "".concat(t.imagePositionX || "center", " ").concat(t.imagePositionY || "center"),
                                                        layout: "fill",
                                                        alt: t.imageAltText || t.title || t.image.description || t.image.author,
                                                        title: t.imageAltText
                                                    })]
                                                }), N && (null === (s = t.icon) || void 0 === s ? void 0 : s.media) && (0, l.jsx)("div", {
                                                    className: (0, c.AK)("flex-shrink-0 relative", (null === a || void 0 === a ? void 0 : a.iconSize) || "w-12 h-12", "left" === E ? "ml-0 mr-auto" : "right" === E ? "ml-auto mr-0" : "mx-auto"),
                                                    children: (0, l.jsx)("div", {
                                                        className: "absolute w-full h-full",
                                                        style: {
                                                            color: G,
                                                            backgroundColor: (null === (d = t.icon) || void 0 === d ? void 0 : d.color) || "currentColor",
                                                            WebkitMaskImage: 'url("'.concat(null === t || void 0 === t || null === (v = t.icon) || void 0 === v || null === (f = v.media) || void 0 === f ? void 0 : f.url, '")'),
                                                            maskImage: 'url("'.concat(null === t || void 0 === t || null === (m = t.icon) || void 0 === m || null === (g = m.media) || void 0 === g ? void 0 : g.url, '")'),
                                                            WebkitMaskPosition: "center",
                                                            maskPosition: "center",
                                                            WebkitMaskRepeat: "no-repeat",
                                                            maskRepeat: "no-repeat",
                                                            WebkitMaskSize: "contain",
                                                            maskSize: "contain"
                                                        }
                                                    })
                                                }), (0, l.jsx)("div", {
                                                    className: J.containerClasses,
                                                    style: (0, i.Z)((0, o.Z)({}, J.containerStyles), {
                                                        minHeight: X
                                                    }),
                                                    children: (0, l.jsxs)("div", {
                                                        ref: function(t) {
                                                            return tt.current[n] = {
                                                                current: t
                                                            }
                                                        },
                                                        className: (0, c.AK)("flex flex-col", ot(), "left" === E ? "items-start" : "right" === E ? "items-end" : "items-center", J.contentClasses),
                                                        style: J.contentStyles,
                                                        children: [P && (0, l.jsx)("p", {
                                                            className: (0, c.AK)("heading-medium mb-4", A ? "group-hover:underline" : ""),
                                                            style: (0, o.Z)({
                                                                color: "currentColor"
                                                            }, (0, c.j2)(C)),
                                                            children: t.title
                                                        }), R && (0, l.jsx)("div", {
                                                            className: (0, c.AK)("rich-text-block", A && !P ? "group-hover:underline" : ""),
                                                            style: {
                                                                color: "currentColor"
                                                            },
                                                            dangerouslySetInnerHTML: {
                                                                __html: t.content
                                                            }
                                                        }), Z && (null === t || void 0 === t ? void 0 : t.button) && (0, l.jsx)(u.Z, {
                                                            button: (0, i.Z)((0, o.Z)({}, t.button), {
                                                                style: null === (h = a.button) || void 0 === h ? void 0 : h.style
                                                            }),
                                                            block: a,
                                                            website: C,
                                                            className: "mt-4",
                                                            fallbackSize: "md"
                                                        })]
                                                    })
                                                })]
                                            })
                                        }, "section-".concat(e, "-item-").concat(n))
                                    }))
                                })]
                            })
                        }), (0, l.jsx)(b.iz, {
                            contentRef: q,
                            divider: T,
                            previousDivider: null === j || void 0 === j ? void 0 : j.divider,
                            border: _,
                            previousBorder: null === j || void 0 === j ? void 0 : j.border,
                            dividerUniqueId: "".concat(e, "-").concat(T)
                        })]
                    }), _ && (0, l.jsx)(w.OC, {
                        contentRef: q,
                        border: _,
                        sectionDivider: T
                    })]
                })
            }
        },
        399: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return c
                }
            });
            var o = e(67294),
                i = "website-header";

            function l(t) {
                var n;
                return t && 1 === t.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(i)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
            }

            function c(t) {
                var n, e, i = (0, o.useState)(0),
                    c = i[0],
                    a = i[1],
                    r = (0, o.useState)([0, 0]),
                    u = r[0],
                    s = r[1];
                return (0, o.useEffect)((function() {
                    var n, e = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var o = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            t && a(l(t))
                        })), o && n.observe(o)
                    } catch (i) {}
                    return window.addEventListener("resize", e), e(),
                        function() {
                            window.removeEventListener("resize", e), n && n.disconnect()
                        }
                }), []), (0, o.useEffect)((function() {
                    t && a(l(t))
                }), [t, u]), {
                    minHeight: (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : c, "px)") : "134px",
                    headerHeight: c
                }
            }
        }
    }
]);