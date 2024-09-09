"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6232], {
        60546: function(t, e, n) {
            n.d(e, {
                OC: function() {
                    return d
                }
            });
            var i = n(85893),
                o = n(67294),
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
                        o = t.strokeWidth,
                        c = t.strokeColor,
                        r = t.strokeType,
                        d = a.find((function(t) {
                            return t.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        s = Math.floor(e),
                        u = "none" === d.id ? Math.floor(o) : Math.floor(s / l.c8),
                        h = d.getPath(s, u);
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, i.jsx)("path", {
                            d: h,
                            stroke: c,
                            strokeWidth: o,
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
                        s = a.width,
                        u = a.color,
                        h = (0, o.useState)(0),
                        v = h[0],
                        g = h[1],
                        f = (0, o.useCallback)((function() {
                            var t;
                            g(null !== (t = e.current.offsetWidth) && void 0 !== t ? t : 0)
                        }), [e]);
                    return (0, c.Z)(f, n ? e : null), n ? (0, i.jsx)(r, {
                        width: v,
                        shape: l,
                        strokeType: d,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        86232: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return x
                }
            });
            var i = n(14251),
                o = n(52875),
                c = n(85893),
                l = n(67294),
                a = n(29260),
                r = n.n(a),
                d = n(399),
                s = n(11942),
                u = n(21123),
                h = n(52077),
                v = n(10124),
                g = n(60546),
                f = n(4433),
                m = n(41370);

            function x(t) {
                var e, n, a = t.id,
                    x = t.block,
                    p = t.website,
                    b = t.previousBlock,
                    w = t.isSeoHeadline,
                    y = t.stickyHeaderOffsetStyle,
                    j = null === x || void 0 === x ? void 0 : x.headline,
                    k = null === x || void 0 === x ? void 0 : x.showImage,
                    C = null === x || void 0 === x ? void 0 : x.showContent,
                    N = null === x || void 0 === x ? void 0 : x.showButton,
                    L = null === x || void 0 === x ? void 0 : x.showSubItems,
                    P = null === x || void 0 === x ? void 0 : x.aspectRatio,
                    Z = "default" === (null === x || void 0 === x ? void 0 : x.cornerRadius) ? null === p || void 0 === p ? void 0 : p.cornerRadius : null === x || void 0 === x ? void 0 : x.cornerRadius,
                    M = null !== (n = null === x || void 0 === x ? void 0 : x.imageFit) && void 0 !== n ? n : "cover",
                    R = null === x || void 0 === x ? void 0 : x.align,
                    S = null === x || void 0 === x ? void 0 : x.animation,
                    H = null === p || void 0 === p ? void 0 : p.animation,
                    A = null === x || void 0 === x ? void 0 : x.divider,
                    W = null === x || void 0 === x ? void 0 : x.border,
                    z = (0, l.useRef)(null),
                    E = (0, l.useState)("#000000"),
                    K = E[0],
                    B = E[1],
                    D = (0, d.Z)(x).minHeight;
                return (0, c.jsxs)("section", {
                    className: "relative",
                    children: [(0, c.jsxs)("div", {
                        id: a,
                        className: (0, s.AK)("relative z-10 flex flex-none flex-shrink-0 break-word", (0, s.A2)((null === x || void 0 === x ? void 0 : x.verticalAlign) || "center")),
                        style: (0, i.Z)({
                            minHeight: D,
                            color: K
                        }, (0, f.$h)(x), y),
                        ref: z,
                        children: [(0, c.jsx)(u.Z, {
                            block: x,
                            website: p,
                            setTextColor: B
                        }), (0, c.jsxs)("div", {
                            className: (0, s.AK)("relative z-10 container mx-auto", (0, s.bG)(null === x || void 0 === x ? void 0 : x.spacing)),
                            children: [j && (0, c.jsx)(m.Z, {
                                settings: S,
                                globalSettings: H,
                                children: (0, c.jsx)(s.s0, {
                                    className: (0, s.AK)("heading-large mb-10 transition-all duration-300", "text-".concat(R)),
                                    style: (0, i.Z)({
                                        color: K
                                    }, (0, s.j2)(p)),
                                    h1: w,
                                    children: j
                                })
                            }), (null === x || void 0 === x ? void 0 : x.items) && (0, c.jsxs)("div", {
                                className: (0, s.AK)("flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:gap-0 transition-all duration-300", (null === x || void 0 === x || null === (e = x.items) || void 0 === e ? void 0 : e.find((function(t) {
                                    return t.highlighted
                                }))) && ("large" === Z ? "lg:py-8" : "lg:py-4"), "justify-".concat("left" === R ? "start" : "center" === R ? "center" : "end")),
                                children: [(0, c.jsx)("span", {
                                    className: "hidden align-start align-center align-end"
                                }), x.items.map((function(t, e) {
                                    var n;
                                    return (0, c.jsx)("div", {
                                        className: (0, s.AK)("relative flex w-full max-w-xl child-w-full transition-all duration-300", t.highlighted && ("large" === Z ? "lg:-my-8" : "lg:-my-4"), e > 0 && t.highlighted && "lg:!-ml-0.5"),
                                        children: (0, c.jsx)(m.Z, {
                                            settings: S,
                                            globalSettings: H,
                                            delay: 100 * (e + 1),
                                            children: (0, c.jsx)("div", {
                                                className: (0, s.AK)("flex flex-col gap-6 w-full h-full p-6 transition-all duration-300", t.highlighted ? "border-2 border-opacity-40 lg:py-10" : "border border-opacity-20", t.highlighted && "large" === Z && "lg:py-14", e >= 0 && e < x.items.length - 1 && !t.highlighted && "lg:!rounded-r-none", e > 0 && e <= x.items.length - 1 && !t.highlighted && "lg:!rounded-l-none", e > 0 && e <= x.items.length - 1 && !t.highlighted && "lg:!border-l-0", (0, s.yW)(Z)),
                                                style: {
                                                    borderColor: K
                                                },
                                                children: (0, c.jsxs)("div", {
                                                    className: "flex flex-col gap-6",
                                                    style: {
                                                        color: K
                                                    },
                                                    children: [k && (0, s.QW)(t.image) && (0, c.jsx)("div", {
                                                        className: (0, s.AK)("flex-shrink-0 relative w-full mx-auto transition-all duration-300", (0, s.n3)(P)),
                                                        children: (0, c.jsx)(r(), {
                                                            sizes: "200vw",
                                                            quality: 90,
                                                            src: (0, s.QW)(t.image),
                                                            objectFit: M,
                                                            layout: "fill",
                                                            objectPosition: "".concat(t.imagePositionX || "center", " ").concat(t.imagePositionY || "center"),
                                                            alt: t.imageAltText || t.title || t.image.description || t.image.author,
                                                            title: t.imageAltText || t.title,
                                                            className: (0, s.yW)(Z)
                                                        })
                                                    }), (0, c.jsxs)("div", {
                                                        className: "space-y-2",
                                                        children: [t.highlighted && (0, c.jsx)("div", {
                                                            className: "flex-shrink-0 inline-block min-w-20 px-3 py-1 body-small font-semibold text-center rounded-3xl",
                                                            style: {
                                                                backgroundColor: K,
                                                                color: (0, s.$O)(K || "#000")
                                                            },
                                                            children: t.highlightLabel || "Popular"
                                                        }), (0, c.jsx)("p", {
                                                            className: "heading-small transition-all duration-300",
                                                            style: (0, i.Z)({
                                                                color: "currentColor"
                                                            }, (0, s.j2)(p)),
                                                            children: t.title
                                                        })]
                                                    }), (t.price || t.unit) && (0, c.jsxs)("div", {
                                                        children: [(0, c.jsx)("p", {
                                                            className: "heading-large",
                                                            style: (0, i.Z)({
                                                                color: "currentColor"
                                                            }, (0, s.j2)(p)),
                                                            children: t.price
                                                        }), t.unit && (0, c.jsx)("p", {
                                                            className: "body-normal",
                                                            style: (0, i.Z)({
                                                                color: "currentColor"
                                                            }, (0, s.SV)(p)),
                                                            children: t.unit
                                                        })]
                                                    }), N && (null === t || void 0 === t ? void 0 : t.button) && (0, c.jsx)(h.Z, {
                                                        button: (0, o.Z)((0, i.Z)({}, t.button), {
                                                            style: null === (n = x.button) || void 0 === n ? void 0 : n.style
                                                        }),
                                                        block: x,
                                                        website: p,
                                                        fallbackSize: "md"
                                                    }), C && (0, c.jsx)("div", {
                                                        className: "body-normal transition-all duration-300",
                                                        style: (0, i.Z)({
                                                            color: "currentColor"
                                                        }, (0, s.SV)(p)),
                                                        children: t.content
                                                    }), L && (null === t || void 0 === t ? void 0 : t.items) && (0, c.jsx)("div", {
                                                        className: "flex flex-col gap-3",
                                                        children: t.items.map((function(t, e) {
                                                            return (0, c.jsxs)("div", {
                                                                className: "flex items-center gap-3",
                                                                style: (0, i.Z)({
                                                                    color: "currentColor"
                                                                }, (0, s.SV)(p)),
                                                                children: [(0, c.jsx)(v.Z, {
                                                                    className: "flex-shrink-0 w-6 h-6"
                                                                }), (0, c.jsx)("p", {
                                                                    className: "body-normal",
                                                                    children: t
                                                                })]
                                                            }, e)
                                                        }))
                                                    }, e)]
                                                })
                                            })
                                        })
                                    }, "pricing-table-".concat(null === x || void 0 === x ? void 0 : x.idx, "-item-").concat(e))
                                }))]
                            })]
                        }), (0, c.jsx)(f.iz, {
                            contentRef: z,
                            divider: A,
                            previousDivider: null === b || void 0 === b ? void 0 : b.divider,
                            border: W,
                            previousBorder: null === b || void 0 === b ? void 0 : b.border,
                            dividerUniqueId: "".concat(a, "-").concat(A)
                        })]
                    }), W && (0, c.jsx)(g.OC, {
                        contentRef: z,
                        border: W,
                        sectionDivider: A
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
            var i = n(67294),
                o = "website-header";

            function c(t) {
                var e;
                return t && 1 === t.idx ? (null === (e = null === document || void 0 === document ? void 0 : document.getElementById(o)) || void 0 === e ? void 0 : e.offsetHeight) || 80 : 0
            }

            function l(t) {
                var e, n, o = (0, i.useState)(0),
                    l = o[0],
                    a = o[1],
                    r = (0, i.useState)([0, 0]),
                    d = r[0],
                    s = r[1];
                return (0, i.useEffect)((function() {
                    var e, n = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var i = document.getElementById("website-header");
                        e = new ResizeObserver((function() {
                            t && a(c(t))
                        })), i && e.observe(i)
                    } catch (o) {}
                    return window.addEventListener("resize", n), n(),
                        function() {
                            window.removeEventListener("resize", n), e && e.disconnect()
                        }
                }), []), (0, i.useEffect)((function() {
                    t && a(c(t))
                }), [t, d]), {
                    minHeight: (null === t || void 0 === t || null === (e = t.spacing) || void 0 === e ? void 0 : e.minHeight) ? "calc(".concat("min-h-screen" === (null === t || void 0 === t || null === (n = t.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === t || void 0 === t ? void 0 : t.combineWithHeader) ? 0 : l, "px)") : "134px",
                    headerHeight: l
                }
            }
        }
    }
]);