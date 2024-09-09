"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2258], {
        60546: function(e, t, n) {
            n.d(t, {
                OC: function() {
                    return d
                }
            });
            var i = n(85893),
                o = n(67294),
                l = n(62246),
                c = n(4433),
                a = [{
                    id: "slantLeft",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L-0 ").concat(t)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e, " ").concat(t)
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e, t) {
                        return "M0 0".concat(t, "L").concat(e / 2, " 0L").concat(e, " ").concat(t, "L").concat(1.5 * e, " 0V0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 2, " ").concat(t, "L").concat(e, " 0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e, t) {
                        return "M0 0 C".concat(e / 2, " ").concat(t, " ").concat(e - e / 2, " ").concat(t, " ").concat(e, " 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e, t) {
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(t, " ").concat(.3333 * e, " ").concat(t, "C").concat(.4681 * e, " ").concat(t, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(t, " ").concat(e, " ").concat(t)
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(t, " ").concat(.666 * e, " ").concat(t, "C").concat(.547 * e, " ").concat(t, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(t, " -0.00012207 ").concat(t)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e, t) {
                        return "M0 0L".concat(e / 3, " ").concat(t, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(t)
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(t, "L").concat(e / 3, " 0L0 ").concat(t)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0")
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e, t) {
                        return "M".concat(e, " ").concat(t, "C").concat(e / 2, " 0 0 0 0 0")
                    }
                }, {
                    id: "none",
                    getPath: function(e, t) {
                        return "M0 ".concat(t, "H").concat(e)
                    }
                }],
                r = function(e) {
                    var t = e.width,
                        n = e.shape,
                        o = e.strokeWidth,
                        l = e.strokeColor,
                        r = e.strokeType,
                        d = a.find((function(e) {
                            return e.id === (null !== n && void 0 !== n ? n : "none")
                        })),
                        s = Math.floor(t),
                        u = "none" === d.id ? Math.floor(o) : Math.floor(s / c.c8),
                        v = d.getPath(s, u);
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
                        children: (0, i.jsx)("path", {
                            d: v,
                            stroke: l,
                            strokeWidth: o,
                            strokeDasharray: "dashed" === r ? "40 20" : void 0
                        })
                    })
                },
                d = function(e) {
                    var t = e.contentRef,
                        n = e.border,
                        c = e.sectionDivider,
                        a = n || {},
                        d = a.type,
                        s = a.width,
                        u = a.color,
                        v = (0, o.useState)(0),
                        f = v[0],
                        h = v[1],
                        m = (0, o.useCallback)((function() {
                            var e;
                            h(null !== (e = t.current.offsetWidth) && void 0 !== e ? e : 0)
                        }), [t]);
                    return (0, l.Z)(m, n ? t : null), n ? (0, i.jsx)(r, {
                        width: f,
                        shape: c,
                        strokeType: d,
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        9746: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return s
                }
            });
            var i = n(14251),
                o = n(52875),
                l = n(85893),
                c = n(11942),
                a = n(4433),
                r = n(67294),
                d = n(60546),
                s = (0, r.forwardRef)((function(e, t) {
                    var n = e.children,
                        r = e.block,
                        s = e.textColor,
                        u = e.headerHeight,
                        v = e.stickyHeaderOffsetStyle,
                        f = e.id,
                        h = e.noPadding,
                        m = e.minHeight,
                        g = e.border,
                        x = e.divider,
                        b = 1 === (null === r || void 0 === r ? void 0 : r.idx) && (null === r || void 0 === r ? void 0 : r.combineWithHeader);
                    return (0, l.jsxs)("section", {
                        className: "relative",
                        children: [(0, l.jsx)("div", {
                            ref: t,
                            id: f,
                            "data-text-color": s,
                            className: (0, c.AK)("flex relative break-word", h ? "" : (0, c.A2)(null === r || void 0 === r ? void 0 : r.verticalAlign)),
                            style: (0, o.Z)((0, i.Z)({}, (null === r || void 0 === r ? void 0 : r.combineWithHeader) ? {
                                marginTop: "-".concat(u, "px"),
                                paddingTop: h ? "" : "".concat(u, "px")
                            } : {}, (0, a.$h)(r), v), {
                                minHeight: m
                            }),
                            "data-combine-with-header": b,
                            children: n
                        }), g && (0, l.jsx)(d.OC, {
                            contentRef: t,
                            border: g,
                            sectionDivider: x
                        })]
                    })
                }))
        },
        82258: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var i = n(14251),
                o = n(85893),
                l = n(67294),
                c = n(11942),
                a = n(29260),
                r = n.n(a),
                d = n(399),
                s = n(52077),
                u = n(21123),
                v = n(41370),
                f = n(4433),
                h = (n(60546), n(9746));

            function m(e) {
                var t, n, a, m, g, x = e.id,
                    b = e.block,
                    w = e.website,
                    p = e.previousBlock,
                    j = (e.isSeoHeadline, e.stickyHeaderOffsetStyle),
                    y = (0, l.useState)({
                        top: 0,
                        bottom: 0
                    }),
                    k = y[0],
                    A = y[1],
                    C = (0, l.useState)("#000000"),
                    N = C[0],
                    H = C[1],
                    P = (0, l.useState)("#000000"),
                    L = P[0],
                    M = P[1],
                    S = (0, d.Z)(b).minHeight,
                    K = null === b || void 0 === b ? void 0 : b.tagline,
                    R = null === b || void 0 === b ? void 0 : b.headline,
                    Z = null === b || void 0 === b ? void 0 : b.content,
                    T = (null === b || void 0 === b || null === (t = b.buttons) || void 0 === t ? void 0 : t.items) || [b.button],
                    W = (null === b || void 0 === b || null === (n = b.buttons) || void 0 === n ? void 0 : n.items) ? null === b || void 0 === b || null === (a = b.buttons) || void 0 === a ? void 0 : a.enabled : !!b.button,
                    z = !!(null === b || void 0 === b || null === (m = b.image) || void 0 === m ? void 0 : m.enabled),
                    E = z ? null === b || void 0 === b ? void 0 : b.image : null,
                    O = (null === b || void 0 === b ? void 0 : b.align) || "center",
                    F = null === b || void 0 === b ? void 0 : b.animation,
                    B = null === w || void 0 === w ? void 0 : w.animation,
                    D = null === b || void 0 === b ? void 0 : b.divider,
                    _ = null === b || void 0 === b ? void 0 : b.border,
                    I = (0, d.Z)(b).headerHeight,
                    U = 1 === (null === b || void 0 === b ? void 0 : b.idx) && !!(null === b || void 0 === b ? void 0 : b.combineWithHeader),
                    V = ["left", "right"].includes(null === E || void 0 === E ? void 0 : E.align) && (null === b || void 0 === b || null === (g = b.mobile) || void 0 === g ? void 0 : g.reverseOrder),
                    q = (0, l.useRef)(null),
                    Q = function() {
                        switch (null === E || void 0 === E ? void 0 : E.align) {
                            case "left":
                                return "".concat(V ? "flex-col" : "flex-col-reverse", " lg:flex-row-reverse");
                            case "top":
                                return V ? "flex-col" : "flex-col-reverse";
                            case "bottom":
                                return V ? "flex-col-reverse" : "flex-col";
                            default:
                                return "".concat(V ? "flex-col-reverse" : "flex-col", " lg:flex-row")
                        }
                    },
                    X = function() {
                        switch (O) {
                            case "left":
                                return "justify-start";
                            case "center":
                                return "justify-center";
                            case "right":
                                return "justify-end";
                            case "middle":
                                return (null === E || void 0 === E ? void 0 : E.borderless) ? "justify-center" : "items-center";
                            case "bottom":
                                return (null === E || void 0 === E ? void 0 : E.borderless) ? "justify-end" : "items-end";
                            case "top":
                                return (null === E || void 0 === E ? void 0 : E.borderless) ? "justify-start" : "items-start"
                        }
                    },
                    Y = function() {
                        var e = (0, c.QW)(null === E || void 0 === E ? void 0 : E.media);
                        return e ? (0, o.jsx)(o.Fragment, {
                            children: (null === E || void 0 === E ? void 0 : E.media) ? (0, o.jsx)("div", {
                                className: (0, c.AK)("flex-shrink-0 relative mx-auto w-full h-full transition-all duration-300", (0, c.n3)(null === E || void 0 === E ? void 0 : E.aspectRatio)),
                                children: (0, o.jsx)(r(), {
                                    unoptimized: !0,
                                    layout: "fill",
                                    className: (0, c.AK)("transition-all duration-300", (0, c.yW)((null === E || void 0 === E ? void 0 : E.borderless) ? "no-rounded" : null === E || void 0 === E ? void 0 : E.cornerRadius, null === w || void 0 === w ? void 0 : w.cornerRadius)),
                                    src: e,
                                    objectFit: (null === E || void 0 === E ? void 0 : E.borderless) || !(null === E || void 0 === E ? void 0 : E.imageFit) ? "cover" : null === E || void 0 === E ? void 0 : E.imageFit,
                                    objectPosition: "".concat((null === E || void 0 === E ? void 0 : E.imagePositionX) || "center", " ").concat((null === E || void 0 === E ? void 0 : E.imagePositionY) || "center"),
                                    alt: E.altText || E.media.description || E.media.author,
                                    title: E.altText
                                })
                            }) : (0, o.jsx)("div", {
                                className: (0, c.AK)("flex-shrink-0 bg-gray-100 transition-all duration-300", (0, c.n3)(null === E || void 0 === E ? void 0 : E.aspectRatio))
                            })
                        }) : null
                    },
                    $ = function() {
                        return (0, o.jsxs)(o.Fragment, {
                            children: [K && (0, o.jsx)("p", {
                                className: "body-small !font-bold mb-4",
                                style: {
                                    color: L
                                },
                                children: K
                            }), R && (0, o.jsx)("h2", {
                                className: (0, c.AK)("mb-6 break-word transition-all duration-300", "text-".concat(O), (0, c.Ae)(null === b || void 0 === b ? void 0 : b.headingTextStyle)),
                                style: (0, i.Z)({
                                    color: N
                                }, (0, c.j2)(w)),
                                children: R
                            }), Z && (0, o.jsx)("p", {
                                className: (0, c.AK)("transition-all duration-300", (0, c.e0)((null === b || void 0 === b ? void 0 : b.bodyTextStyle) || (null === b || void 0 === b ? void 0 : b.subtextTextStyle))),
                                style: (0, i.Z)({
                                    color: N
                                }, (0, c.SV)(w)),
                                children: Z
                            }), (null === T || void 0 === T ? void 0 : T.length) > 0 && W && (0, o.jsx)("div", {
                                className: "flex md:inline-flex flex-col md:flex-row md:gap-4 w-full md:w-max",
                                children: null === T || void 0 === T ? void 0 : T.map((function(e, t) {
                                    return (0, o.jsx)(s.Z, {
                                        button: e,
                                        block: b,
                                        website: w,
                                        className: (0, c.AK)("w-full md:w-max", R || Z ? "mt-6 lg:mt-8" : "")
                                    }, "banner-button-".concat(t))
                                }))
                            })]
                        })
                    };
                return (0, o.jsxs)(h.f, {
                    ref: q,
                    block: b,
                    textColor: N,
                    headerHeight: I,
                    noPadding: null === E || void 0 === E ? void 0 : E.borderless,
                    id: x,
                    minHeight: S,
                    stickyHeaderOffsetStyle: j,
                    divider: D,
                    border: _,
                    children: [(0, o.jsx)("div", {
                        className: (0, c.AK)("w-full flex break-word transition-all duration-300", (null === E || void 0 === E ? void 0 : E.borderless) ? Q() : (0, c.A2)(null === b || void 0 === b ? void 0 : b.verticalAlign)),
                        children: (null === E || void 0 === E ? void 0 : E.borderless) ? (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("div", {
                                className: (0, c.AK)("flex-1 relative"),
                                style: (null === E || void 0 === E ? void 0 : E.borderless) && ("right" === (null === E || void 0 === E ? void 0 : E.align) && !V || "left" === (null === E || void 0 === E ? void 0 : E.align) && V) ? {
                                    paddingTop: (null === k || void 0 === k ? void 0 : k.top) || 0,
                                    paddingBottom: (null === k || void 0 === k ? void 0 : k.bottom) || 0
                                } : {},
                                children: [(0, o.jsx)(u.Z, {
                                    block: b,
                                    website: w,
                                    setTextColor: H,
                                    setAccentColor: M
                                }), (0, o.jsx)(v.Z, {
                                    settings: F,
                                    globalSettings: B,
                                    className: "relative z-10 w-full h-full",
                                    children: (0, o.jsx)("div", {
                                        className: (0, c.AK)("relative z-10 container flex flex-col h-full mx-auto px-5 md:px-6 lg:px-20", (null === E || void 0 === E ? void 0 : E.borderless) ? X() : (0, c.A2)(null === b || void 0 === b ? void 0 : b.verticalAlign, !0)),
                                        children: (0, o.jsx)("div", {
                                            className: (0, c.AK)("flex flex-col w-full max-w-3xl", "left" === (null === E || void 0 === E ? void 0 : E.align) ? "lg:mr-auto lg:ml-0" : "lg:mr-0 lg:ml-auto", (0, c.rE)(null === b || void 0 === b ? void 0 : b.spacing)),
                                            children: $()
                                        })
                                    })
                                })]
                            }), z && (0, o.jsx)("div", {
                                className: "lg:flex-1 relative",
                                children: Y()
                            })]
                        }) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(u.Z, {
                                block: b,
                                website: w,
                                setTextColor: H,
                                setAccentColor: M
                            }), (0, o.jsx)("div", {
                                className: (0, c.AK)("relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300", (0, c.rE)(null === b || void 0 === b ? void 0 : b.spacing)),
                                children: (0, o.jsx)(v.Z, {
                                    settings: F,
                                    globalSettings: B,
                                    className: "relative z-10 w-full h-full",
                                    children: (0, o.jsxs)("div", {
                                        className: (0, c.AK)("flex w-full gap-10 lg:gap-20 transition-all duration-300", Q(), X()),
                                        children: [(0, o.jsx)("div", {
                                            className: (0, c.AK)("flex-1 flex flex-col w-full max-w-3xl", function() {
                                                if (["left", "right"].includes(null === E || void 0 === E ? void 0 : E.align)) return "items-start";
                                                switch (O) {
                                                    case "left":
                                                        return "items-start";
                                                    case "center":
                                                        return "items-center text-center mx-auto";
                                                    case "right":
                                                        return "items-end text-right ml-auto"
                                                }
                                            }()),
                                            children: $()
                                        }), z && (0, o.jsx)("div", {
                                            className: (0, c.AK)("flex-1 flex w-full lg:max-w-1/2 h-full transition-all duration-300", function() {
                                                if (["left", "right"].includes(null === E || void 0 === E ? void 0 : E.align)) return "left" === O ? "justify-end" : "justify-center lg:justify-start";
                                                switch (O) {
                                                    case "left":
                                                        return "items-start lg:max-w-1/2";
                                                    case "center":
                                                        return "items-center lg:max-w-1/2 mx-auto text-center";
                                                    case "right":
                                                        return "items-end lg:max-w-1/2 ml-auto text-right"
                                                }
                                            }()),
                                            children: Y()
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, o.jsx)(f.iz, {
                        contentRef: q,
                        divider: D,
                        previousDivider: null === p || void 0 === p ? void 0 : p.divider,
                        border: _,
                        previousBorder: null === p || void 0 === p ? void 0 : p.border,
                        dividerUniqueId: "".concat(x, "-").concat(D),
                        noPadding: !!(null === E || void 0 === E ? void 0 : E.borderless),
                        onPaddingChange: A,
                        combinedWithHeaderOffset: U ? I : 0
                    })]
                })
            }
        },
        399: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = n(67294),
                o = "website-header";

            function l(e) {
                var t;
                return e && 1 === e.idx ? (null === (t = null === document || void 0 === document ? void 0 : document.getElementById(o)) || void 0 === t ? void 0 : t.offsetHeight) || 80 : 0
            }

            function c(e) {
                var t, n, o = (0, i.useState)(0),
                    c = o[0],
                    a = o[1],
                    r = (0, i.useState)([0, 0]),
                    d = r[0],
                    s = r[1];
                return (0, i.useEffect)((function() {
                    var t, n = function() {
                        s([window.innerWidth, window.innerHeight])
                    };
                    try {
                        var i = document.getElementById("website-header");
                        t = new ResizeObserver((function() {
                            e && a(l(e))
                        })), i && t.observe(i)
                    } catch (o) {}
                    return window.addEventListener("resize", n), n(),
                        function() {
                            window.removeEventListener("resize", n), t && t.disconnect()
                        }
                }), []), (0, i.useEffect)((function() {
                    e && a(l(e))
                }), [e, d]), {
                    minHeight: (null === e || void 0 === e || null === (t = e.spacing) || void 0 === t ? void 0 : t.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "134px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : c, "px)") : "134px",
                    headerHeight: c
                }
            }
        }
    }
]);