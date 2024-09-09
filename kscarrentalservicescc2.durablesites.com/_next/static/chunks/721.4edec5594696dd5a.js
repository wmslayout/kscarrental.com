"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [721], {
        60546: function(t, n, e) {
            e.d(n, {
                OC: function() {
                    return d
                }
            });
            var o = e(85893),
                c = e(67294),
                i = e(62246),
                a = e(4433),
                r = [{
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
                l = function(t) {
                    var n = t.width,
                        e = t.shape,
                        c = t.strokeWidth,
                        i = t.strokeColor,
                        l = t.strokeType,
                        d = r.find((function(t) {
                            return t.id === (null !== e && void 0 !== e ? e : "none")
                        })),
                        s = Math.floor(n),
                        u = "none" === d.id ? Math.floor(c) : Math.floor(s / a.c8),
                        v = d.getPath(s, u);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, o.jsx)("path", {
                            d: v,
                            stroke: i,
                            strokeWidth: c,
                            strokeDasharray: "dashed" === l ? "40 20" : void 0
                        })
                    })
                },
                d = function(t) {
                    var n = t.contentRef,
                        e = t.border,
                        a = t.sectionDivider,
                        r = e || {},
                        d = r.type,
                        s = r.width,
                        u = r.color,
                        v = (0, c.useState)(0),
                        f = v[0],
                        h = v[1],
                        g = (0, c.useCallback)((function() {
                            var t;
                            h(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [n]);
                    return (0, i.Z)(g, e ? n : null), e ? (0, o.jsx)(l, {
                        width: f,
                        shape: a,
                        strokeType: d,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        40721: function(t, n, e) {
            e.r(n), e.d(n, {
                default: function() {
                    return g
                }
            });
            var o = e(14251),
                c = e(69779),
                i = e(85893),
                a = e(67294),
                r = e(399),
                l = e(11942),
                d = e(21123),
                s = e(90434),
                u = e(32713),
                v = e(60546),
                f = e(4433),
                h = e(41370);

            function g(t) {
                var n, e = t.id,
                    g = t.block,
                    m = t.website,
                    x = t.previousBlock,
                    w = t.isSeoHeadline,
                    p = t.stickyHeaderOffsetStyle,
                    b = null === g || void 0 === g ? void 0 : g.headline,
                    j = null === g || void 0 === g ? void 0 : g.align,
                    k = null === g || void 0 === g ? void 0 : g.animation,
                    C = null === m || void 0 === m ? void 0 : m.animation,
                    y = null === g || void 0 === g ? void 0 : g.divider,
                    L = null === g || void 0 === g ? void 0 : g.border,
                    M = (0, a.useState)("#000000"),
                    N = M[0],
                    P = M[1],
                    H = (0, r.Z)(g).minHeight,
                    S = (0, a.useState)(null === g || void 0 === g || null === (n = g.items) || void 0 === n ? void 0 : n.map((function(t, n) {
                        return !1
                    }))),
                    Z = S[0],
                    R = S[1],
                    A = (0, a.useRef)(null),
                    E = function() {
                        return "text-".concat(j)
                    };
                return (0, i.jsxs)("section", {
                    className: "relative",
                    children: [(0, i.jsxs)("div", {
                        id: e,
                        className: (0, l.AK)("relative w-full flex flex-none break-word transition-all duration-300", (0, l.A2)((null === g || void 0 === g ? void 0 : g.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: H
                        }, (0, f.$h)(g), p),
                        ref: A,
                        children: [(0, i.jsx)(d.Z, {
                            block: g,
                            website: m,
                            setTextColor: P
                        }), (0, i.jsx)("div", {
                            className: (0, l.AK)("relative z-10 container mx-auto transition-all duration-300", (0, l.bG)(null === g || void 0 === g ? void 0 : g.spacing)),
                            children: (0, i.jsxs)("div", {
                                style: {
                                    color: N
                                },
                                children: [b && (0, i.jsx)(h.Z, {
                                    settings: k,
                                    globalSettings: C,
                                    children: (0, i.jsx)(l.s0, {
                                        className: (0, l.AK)("heading-large mb-10 transition-all cursor-pointer duration-300", "text-".concat(j)),
                                        style: (0, o.Z)({}, (0, l.j2)(m)),
                                        h1: w,
                                        children: b
                                    })
                                }), (null === g || void 0 === g ? void 0 : g.items) && (0, i.jsx)(h.Z, {
                                    settings: k,
                                    globalSettings: C,
                                    className: "relative flex flex-col w-full items-center transition-all duration-300",
                                    children: g.items.map((function(t, n) {
                                        return (0, i.jsxs)("div", {
                                            onClick: function() {
                                                return function(t) {
                                                    var n = (0, c.Z)(Z);
                                                    n[t] = !n[t], R(n)
                                                }(n)
                                            },
                                            className: (0, l.AK)("flex flex-col py-10 w-full cursor-pointer"),
                                            style: n < g.items.length - 1 ? {
                                                boxShadow: "0px -1px 0px 0px ".concat((0, l.mR)(N, 20), " inset")
                                            } : {},
                                            children: [(0, i.jsxs)("div", {
                                                className: (0, l.AK)("flex gap-3 justify-between items-center", "right" === j ? "flex-row-reverse" : ""),
                                                style: (0, o.Z)({
                                                    color: "currentColor"
                                                }, (0, l.SV)(m)),
                                                children: [(0, i.jsx)("p", {
                                                    className: (0, l.AK)("heading-medium w-full", E()),
                                                    children: t.question
                                                }), Z[n] ? (0, i.jsx)(s.Z, {
                                                    className: "flex-shrink-0 w-6 h-6"
                                                }) : (0, i.jsx)(u.Z, {
                                                    className: "flex-shrink-0 w-6 h-6"
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: (0, l.AK)("grid body-large transition-all duration-300 pr-4", Z[n] ? "mt-4" : "mt-0"),
                                                style: {
                                                    gridTemplateRows: Z[n] ? "1fr" : "0fr"
                                                },
                                                children: (0, i.jsx)("div", {
                                                    className: (0, l.AK)("rich-text-block overflow-hidden", E()),
                                                    style: {
                                                        color: "currentColor"
                                                    },
                                                    dangerouslySetInnerHTML: {
                                                        __html: t.answer
                                                    }
                                                })
                                            })]
                                        }, "faq-item-".concat(n))
                                    }))
                                })]
                            })
                        }), (0, i.jsx)(f.iz, {
                            contentRef: A,
                            divider: y,
                            previousDivider: null === x || void 0 === x ? void 0 : x.divider,
                            border: L,
                            previousBorder: null === x || void 0 === x ? void 0 : x.border,
                            dividerUniqueId: "".concat(e, "-").concat(y)
                        })]
                    }), L && (0, i.jsx)(v.OC, {
                        contentRef: A,
                        border: L,
                        sectionDivider: y
                    })]
                })
            }
        },
        399: function(t, n, e) {
            e.d(n, {
                Z: function() {
                    return a
                }
            });
            var o = e(67294),
                c = "website-header";

            function i(t) {
                var n;
                return t && 1 === t.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById(c)) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0
            }

            function a(t) {
                var n, e, c = (0, o.useState)(0),
                    a = c[0],
                    r = c[1],
                    l = (0, o.useState)([0, 0]),
                    d = l[0],
                    s = l[1];
                return (0, o.useEffect)((function() {
                    var n, e = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var o = document.getElementById("website-header");
                        n = new ResizeObserver((function() {
                            t && r(i(t))
                        })), o && n.observe(o)
                    } catch (c) {}
                    return window.addEventListener("resize", e), e(),
                        function() {
                            window.removeEventListener("resize", e), n && n.disconnect()
                        }
                }), []), (0, o.useEffect)((function() {
                    t && r(i(t))
                }), [t, d]), {
                    minHeight: (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : a, "px)") : "134px",
                    headerHeight: a
                }
            }
        }
    }
]);