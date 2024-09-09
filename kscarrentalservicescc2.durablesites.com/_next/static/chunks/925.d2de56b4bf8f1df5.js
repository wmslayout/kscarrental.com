"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [925], {
        60546: function(t, e, n) {
            n.d(e, {
                OC: function() {
                    return d
                }
            });
            var o = n(85893),
                i = n(67294),
                c = n(62246),
                l = n(4433),
                a = [{
                    id: "slantLeft",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0L-0 ").concat(e)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t, " ").concat(e)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(t, e) {
                        return "M0 0".concat(e, "L").concat(t / 2, " 0L").concat(t, " ").concat(e, "L").concat(1.5 * t, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t / 2, " ").concat(e, "L").concat(t, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(t, e) {
                        return "M0 0 C".concat(t / 2, " ").concat(e, " ").concat(t - t / 2, " ").concat(e, " ").concat(t, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, " C").concat(t / 2, " 0 ").concat(t - t / 2, " 0 ").concat(t, " ").concat(e)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(t, e) {
                        return "M0 0C0 0 ".concat(.2023 * t, " ").concat(e, " ").concat(.3333 * t, " ").concat(e, "C").concat(.4681 * t, " ").concat(e, " ").concat(.5318 * t, " 0 ").concat(.6667 * t, " 0C").concat(.8015 * t, " 0 ").concat(t, " ").concat(e, " ").concat(t, " ").concat(e)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0C").concat(t, " 0 ").concat(.8 * t, " ").concat(e, " ").concat(.666 * t, " ").concat(e, "C").concat(.547 * t, " ").concat(e, " ").concat(.483 * t, " 0 ").concat(.333 * t, " 0C").concat(.184 * t, " 0 -0.00012207 ").concat(e, " -0.00012207 ").concat(e)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(t, e) {
                        return "M0 0L".concat(t / 3, " ").concat(e, "L").concat(t / 1.5, " 0L").concat(t, " ").concat(e)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " 0L").concat(t / 1.5, " ").concat(e, "L").concat(t / 3, " 0L0 ").concat(e)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, "C").concat(t, " 0 ").concat(2 * t, " 0 ").concat(2 * t, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(t, e) {
                        return "M".concat(t, " ").concat(e, "C").concat(t / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(t, e) {
                        return "M0 ".concat(e, "H").concat(t)
                    }
                }],
                r = function(t) {
                    var e = t.width,
                        n = t.shape,
                        i = t.strokeWidth,
                        c = t.strokeColor,
                        r = t.strokeType,
                        d = a.find((function(t) {
                            return t.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        u = Math.floor(e),
                        s = "none" === d.id ? Math.floor(i) : Math.floor(u / l.c8),
                        v = d.getPath(u, s);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: u,
                        height: s,
                        viewBox: "0 0 ".concat(u, " ").concat(s),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: c,
                            strokeWidth: i,
                            strokeDasharray: "dashed" === r ? "40 20" : void 0
                        })
                    })
                },
                d = function(t) {
                    var e = t.contentRef,
                        n = t.border,
                        l = t.sectionDivider,
                        a = n || {},
                        d = a.type,
                        u = a.width,
                        s = a.color,
                        v = (0, i.useState)(0),
                        f = v[0],
                        h = v[1],
                        m = (0, i.useCallback)((function() {
                            var t;
                            h(null !== (t = e.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [e]);
                    return (0, c.Z)(m, n ? e : null), n ? (0, o.jsx)(r, {
                        width: f,
                        shape: l,
                        strokeType: d,
                        strokeWidth: u,
                        strokeColor: s
                    }) : null
                }
        },
        40925: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var o = n(14251),
                i = n(85893),
                c = n(67294),
                l = n(11942),
                a = n(399),
                r = n(21123),
                d = n(4433),
                u = n(60546),
                s = n(41370);

            function v(t) {
                var e = t.block,
                    n = t.color,
                    o = t.cornerRadius,
                    c = (null === e || void 0 === e ? void 0 : e.pictures) || [],
                    a = null === e || void 0 === e ? void 0 : e.removeColor,
                    r = (null === e || void 0 === e ? void 0 : e.pictureStyle) || "basic",
                    d = (null === e || void 0 === e ? void 0 : e.placement) || "bottom",
                    u = null === e || void 0 === e ? void 0 : e.align;
                return (0, i.jsx)("div", {
                    className: "flex overflow-hidden w-full",
                    children: (0, i.jsx)("div", {
                        className: (0, l.AK)("flex flex-wrap items-center w-full", "basic" !== r ? "bottom" === d ? "gap-2" : "gap-4" : "gap-20", "bottom" === d && "center" === u ? "justify-center" : ""),
                        children: c.filter((function(t) {
                            return t.media
                        })).map((function(t, e) {
                            var c, d;
                            return (0, i.jsx)("div", {
                                className: (0, l.AK)("relative flex flex-shrink-0 w-auto transition-all", o, "basic" !== r ? "flex-grow justify-center" : "", "basic" !== r ? "h-20 md:h-24 py-6 px-2.5 md:px-5" : "h-12 md:h-16", "basic" !== r ? n === l._y ? "bg-white bg-opacity-20" : "bg-black bg-opacity-5" : ""),
                                children: (0, i.jsx)("img", {
                                    className: (0, l.AK)("h-full transition-all duration-300", a ? "grayscale" : "", a && n === l._y ? "invert" : ""),
                                    src: null === t || void 0 === t || null === (c = t.media) || void 0 === c ? void 0 : c.url,
                                    alt: null === t || void 0 === t ? void 0 : t.altText
                                })
                            }, "picture-".concat(e, "-").concat(null === t || void 0 === t || null === (d = t.media) || void 0 === d ? void 0 : d.url))
                        }))
                    })
                })
            }
            var f = n(62246),
                h = n(34715),
                m = n(10990);

            function g(t) {
                var e = t.block,
                    n = t.color,
                    o = t.cornerRadius,
                    a = (0, c.useRef)(),
                    r = (0, c.useRef)(),
                    d = (0, c.useRef)(),
                    u = (0, c.useState)(1),
                    s = u[0],
                    v = u[1],
                    g = (null === e || void 0 === e ? void 0 : e.pictures) || [],
                    x = null === e || void 0 === e ? void 0 : e.speed,
                    p = "right" === (null === e || void 0 === e ? void 0 : e.direction) ? 1 : -1,
                    b = null === e || void 0 === e ? void 0 : e.removeColor,
                    w = (null === e || void 0 === e ? void 0 : e.pictureStyle) || "basic",
                    y = null === e || void 0 === e ? void 0 : e.align,
                    j = (0, c.useMemo)((function() {
                        for (var t = function(t) {
                                g.forEach((function(c, a) {
                                    var r, d;
                                    e.push((0, i.jsx)("div", {
                                        className: (0, l.AK)("relative flex flex-shrink-0 w-auto transition-all", o, "basic" !== w ? "h-20 md:h-24 py-6 px-2.5 md:px-5 mr-4" : "h-12 md:h-16 mr-20", "basic" !== w ? n === l._y ? "bg-white bg-opacity-20" : "bg-black bg-opacity-5" : ""),
                                        children: (0, i.jsx)("img", {
                                            className: (0, l.AK)("h-full transition-all duration-300", b ? "grayscale" : "", b && n === l._y ? "invert" : ""),
                                            src: null === c || void 0 === c || null === (r = c.media) || void 0 === r ? void 0 : r.url,
                                            alt: null === c || void 0 === c ? void 0 : c.altText
                                        })
                                    }, "picture-".concat(t, "-").concat(a, "-").concat(null === c || void 0 === c || null === (d = c.media) || void 0 === d ? void 0 : d.url)))
                                }))
                            }, e = [], c = 0; c < s; c++) t(c);
                        return (0, i.jsx)(i.Fragment, {
                            children: e
                        })
                    }), [g, s, b, w, n, o]);
                return (0, f.Z)((function() {
                    var t, e, n, o, i, c = null === (t = a.current) || void 0 === t ? void 0 : t.offsetWidth,
                        l = null === (o = null === (n = Array.from(null !== (i = null === (e = r.current) || void 0 === e ? void 0 : e.children) && void 0 !== i ? i : [])) || void 0 === n ? void 0 : n.slice(0, g.length)) || void 0 === o ? void 0 : o.reduce((function(t, e) {
                            return t + e.offsetWidth
                        }), 0);
                    if (l > 0) {
                        var d = Math.max(1, Math.ceil(c / l));
                        v(2 * d)
                    }
                }), a), (0, h.V)((function() {
                    if (x > 0) {
                        var t, e = (null === (t = r.current) || void 0 === t ? void 0 : t.offsetWidth) / 2 / 2560 * (60 - .3 * x);
                        d.current = m.p8.to(r.current, {
                            x: "-50%",
                            duration: e,
                            repeat: -1,
                            ease: "none",
                            runBackwards: 1 === p
                        })
                    }
                }), {
                    scope: r,
                    dependencies: [p, x, s],
                    revertOnUpdate: !0
                }), (0, i.jsx)("div", {
                    className: "flex overflow-hidden w-full",
                    style: {
                        WebkitMask: "linear-gradient(90deg, transparent, white 5% 95%, transparent)",
                        mask: "linear-gradient(90deg, transparent, white 5% 95%, transparent)"
                    },
                    ref: a,
                    children: (0, i.jsx)("div", {
                        className: (0, l.AK)("flex flex-wrap items-center w-full", "center" === y ? "justify-center" : "", "basic" !== w ? "gap-4" : "gap-20"),
                        ref: r,
                        style: {
                            minWidth: "max-content"
                        },
                        children: j
                    })
                })
            }
            var x = n(52077);

            function p(t) {
                var e = t.id,
                    n = t.block,
                    f = t.website,
                    h = t.previousBlock,
                    m = t.isSeoHeadline,
                    p = t.stickyHeaderOffsetStyle,
                    b = (0, c.useState)("#000000"),
                    w = b[0],
                    y = b[1],
                    j = (0, a.Z)(n).minHeight,
                    k = (0, c.useRef)(null),
                    C = null === n || void 0 === n ? void 0 : n.headline,
                    N = null === n || void 0 === n ? void 0 : n.content,
                    M = null === n || void 0 === n ? void 0 : n.button,
                    R = (null === n || void 0 === n ? void 0 : n.placement) || "bottom",
                    L = null === n || void 0 === n ? void 0 : n.align,
                    A = null === n || void 0 === n ? void 0 : n.style,
                    K = null === n || void 0 === n ? void 0 : n.fullWidth,
                    P = null === n || void 0 === n ? void 0 : n.animation,
                    W = null === f || void 0 === f ? void 0 : f.animation,
                    S = null === n || void 0 === n ? void 0 : n.divider,
                    H = null === n || void 0 === n ? void 0 : n.border;
                return (0, i.jsxs)("section", {
                    className: "relative",
                    children: [(0, i.jsxs)("div", {
                        ref: k,
                        id: e,
                        className: (0, l.AK)("flex flex-none relative", (0, l.A2)((null === n || void 0 === n ? void 0 : n.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: j
                        }, (0, d.$h)(n), p),
                        children: [(0, i.jsx)(r.Z, {
                            block: n,
                            website: f,
                            setTextColor: y
                        }), (0, i.jsx)("div", {
                            className: (0, l.AK)("relative z-10", "carousel" !== A && "bottom" !== R || !K ? "container mx-auto" : "w-full", (0, l.bG)(null === n || void 0 === n ? void 0 : n.spacing)),
                            children: (0, i.jsx)(s.Z, {
                                settings: P,
                                globalSettings: W,
                                children: (0, i.jsxs)("div", {
                                    className: (0, l.AK)("flex gap-x-6 gap-y-12", "carousel" === A || "bottom" === R ? "flex-col" : "right" === R ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"),
                                    children: [(C || N || M) && (0, i.jsx)("div", {
                                        className: "grid" === A && ["left", "right"].includes(R) ? "flex-1 lg:max-w-110" : K ? "container mx-auto" : "w-full",
                                        children: (0, i.jsxs)("div", {
                                            className: (0, l.AK)("flex flex-col max-w-2xl", "grid" === A && ["left", "right"].includes(R) ? "" : (0, l.CE)(L)),
                                            children: [C && (0, i.jsx)(l.s0, {
                                                className: (0, l.AK)("break-word", (0, l.Ae)(null === n || void 0 === n ? void 0 : n.headingTextStyle, "lg")),
                                                style: {
                                                    color: w
                                                },
                                                h1: m,
                                                children: C
                                            }), N && (0, i.jsx)("p", {
                                                className: (0, l.AK)(C && "mt-4", (0, l.e0)(null === n || void 0 === n ? void 0 : n.bodyTextStyle, "md")),
                                                style: {
                                                    color: w
                                                },
                                                children: N
                                            }), M && (0, i.jsx)(x.Z, {
                                                button: M,
                                                block: n,
                                                website: f,
                                                className: (0, l.AK)("w-full md:w-max", N && "mt-8"),
                                                fallbackSize: "md"
                                            })]
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: (0, l.AK)("flex-1", "carousel" !== A && "bottom" !== R || !K ? "" : "px-5 md:px-6"),
                                        children: "grid" === A ? (0, i.jsx)(v, {
                                            block: n,
                                            color: w,
                                            cornerRadius: (0, l.yW)(null === n || void 0 === n ? void 0 : n.cornerRadius, null === f || void 0 === f ? void 0 : f.cornerRadius)
                                        }) : (0, i.jsx)(g, {
                                            block: n,
                                            color: w,
                                            cornerRadius: (0, l.yW)(null === n || void 0 === n ? void 0 : n.cornerRadius, null === f || void 0 === f ? void 0 : f.cornerRadius)
                                        })
                                    })]
                                })
                            })
                        }), (0, i.jsx)(d.iz, {
                            contentRef: k,
                            divider: S,
                            previousDivider: null === h || void 0 === h ? void 0 : h.divider,
                            border: H,
                            previousBorder: null === h || void 0 === h ? void 0 : h.border,
                            dividerUniqueId: "".concat(e, "-").concat(S)
                        })]
                    }), H && (0, i.jsx)(u.OC, {
                        contentRef: k,
                        border: H,
                        sectionDivider: S
                    })]
                })
            }
        },
        399: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return l
                }
            });
            var o = n(67294),
                i = "website-header";

            function c(t) {
                var e;
                return t && 1 === t.idx ? (null === (e = null === document || void 0 === document ? void 0 : document.getElementById(i)) || void 0 === e ? void 0 : e.offsetHeight) || 80 : 0
            }

            function l(t) {
                var e, n, i = (0, o.useState)(0),
                    l = i[0],
                    a = i[1],
                    r = (0, o.useState)([0, 0]),
                    d = r[0],
                    u = r[1];
                return (0, o.useEffect)((function() {
                    var e, n = function() {
                        u([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var o = document.getElementById("website-header");
                        e = new ResizeObserver((function() {
                            t && a(c(t))
                        })), o && e.observe(o)
                    } catch (i) {}
                    return window.addEventListener("resize", n), n(),
                        function() {
                            window.removeEventListener("resize", n), e && e.disconnect()
                        }
                }), []), (0, o.useEffect)((function() {
                    t && a(c(t))
                }), [t, d]), {
                    minHeight: (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : l, "px)") : "134px",
                    headerHeight: l
                }
            }
        }
    }
]);