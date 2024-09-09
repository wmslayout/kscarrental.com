"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [258], {
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
                        s = Math.floor(e),
                        u = "none" === d.id ? Math.floor(i) : Math.floor(s / l.c8),
                        v = d.getPath(s, u);
                    return (0, o.jsx)("svg", {
                        className: "absolute bottom-0 left-0 z-50 overflow-visible",
                        fill: "transparent",
                        width: s,
                        height: u,
                        viewBox: "0 0 ".concat(s, " ").concat(u),
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
                        s = a.width,
                        u = a.color,
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
                        strokeWidth: s,
                        strokeColor: u
                    }) : null
                }
        },
        10258: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return b
                }
            });
            var o = n(14251),
                i = n(85893),
                c = n(11942),
                l = n(33752),
                a = n.n(l),
                r = n(40944),
                d = n(29260),
                s = n.n(d),
                u = n(399),
                v = n(21123),
                f = n(67294),
                h = n(4433),
                m = n(60546),
                g = n(41370),
                x = n(52077);

            function b(t) {
                var e, n, l = t.id,
                    d = t.website,
                    b = t.block,
                    p = t.previousBlock,
                    y = t.isSeoHeadline,
                    w = t.stickyHeaderOffsetStyle;
                Array.isArray(b.items) || (b.items = [{
                    content: b.content,
                    by: b.by
                }]);
                var j = (0, f.useState)("#000000"),
                    C = j[0],
                    N = j[1],
                    k = (0, f.useState)("#000000"),
                    A = k[0],
                    S = k[1],
                    L = (0, c.ac)("(min-width: 1536px)"),
                    M = (0, c.ac)("(min-width: 1280px)"),
                    K = (0, c.ac)("(min-width: 1024px)"),
                    R = (0, c.ac)("(min-width: 860px)"),
                    B = null === b || void 0 === b ? void 0 : b.animation,
                    P = null === d || void 0 === d ? void 0 : d.animation,
                    Z = null === b || void 0 === b ? void 0 : b.divider,
                    H = null === b || void 0 === b ? void 0 : b.border,
                    T = null === b || void 0 === b ? void 0 : b.tagline,
                    E = null === b || void 0 === b ? void 0 : b.headline,
                    W = null === b || void 0 === b ? void 0 : b.content,
                    q = (null === b || void 0 === b || null === (e = b.buttons) || void 0 === e ? void 0 : e.items) || [],
                    z = null === b || void 0 === b || null === (n = b.buttons) || void 0 === n ? void 0 : n.enabled,
                    D = (null === b || void 0 === b ? void 0 : b.items) || [],
                    I = (null === b || void 0 === b ? void 0 : b.style) || "basic",
                    O = (null === b || void 0 === b ? void 0 : b.align) || "left",
                    _ = (0, f.useRef)(null),
                    U = (0, u.Z)(b).minHeight,
                    F = "".concat("left" === O ? "ml-0 mr-auto items-start" : "right" === O ? "ml-auto mr-0 items-end" : "mx-auto items-center"),
                    J = "".concat("left" === O ? "ml-0 mr-auto items-start text-left" : "mx-auto items-center text-center"),
                    $ = function(t) {
                        var e = (0, c.QW)(null === t || void 0 === t ? void 0 : t.image);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [e && (0, i.jsx)("div", {
                                className: (0, c.AK)("relative w-24 h-24 rounded-full overflow-hidden"),
                                children: e && (0, i.jsx)(s(), {
                                    sizes: "200vw",
                                    quality: 90,
                                    onContextMenu: function(t) {
                                        t.preventDefault()
                                    },
                                    src: e,
                                    alt: t.by || t.image.description || t.image.author,
                                    title: t.by,
                                    layout: "fill",
                                    objectFit: "cover"
                                })
                            }), (null === t || void 0 === t ? void 0 : t.content) && (0, i.jsx)("h3", {
                                className: "basic" !== I ? "heading-small body-font" : "heading-medium",
                                style: {
                                    color: C
                                },
                                children: t.content
                            }), (null === t || void 0 === t ? void 0 : t.by) && (0, i.jsx)("p", {
                                className: "basic" !== I ? "body-normal" : "body-large",
                                style: {
                                    color: C
                                },
                                children: t.by
                            })]
                        })
                    };
                return (0, i.jsxs)("section", {
                    className: "relative",
                    children: [(0, i.jsxs)("div", {
                        ref: _,
                        id: l,
                        className: (0, c.AK)("relative flex flex-none flex-shrink-0 break-word", (0, c.A2)((null === b || void 0 === b ? void 0 : b.verticalAlign) || "center")),
                        style: (0, o.Z)({
                            minHeight: U
                        }, (0, h.$h)(b), w),
                        children: [(0, i.jsx)(v.Z, {
                            block: b,
                            website: d,
                            setTextColor: N,
                            setAccentColor: S
                        }), (0, i.jsxs)("div", {
                            className: (0, c.AK)("relative z-10 container mx-auto testimonials-carousel", (0, c.bG)(null === b || void 0 === b ? void 0 : b.spacing)),
                            children: [(T || E || W || (null === q || void 0 === q ? void 0 : q.length) > 0 && z) && (0, i.jsxs)(g.Z, {
                                className: (0, c.AK)("flex flex-col gap-4 mb-12", F),
                                settings: B,
                                globalSettings: P,
                                children: [T && (0, i.jsx)("p", {
                                    className: "body-small !font-bold",
                                    style: {
                                        color: A
                                    },
                                    children: T
                                }), E && (0, i.jsx)(c.s0, {
                                    className: (0, c.AK)("break-word", (0, c.Ae)(null === b || void 0 === b ? void 0 : b.headingTextStyle, "lg")),
                                    style: {
                                        color: C
                                    },
                                    h1: y,
                                    children: E
                                }), W && (0, i.jsx)("p", {
                                    className: (0, c.e0)(null === b || void 0 === b ? void 0 : b.bodyTextStyle, "md"),
                                    style: {
                                        color: C
                                    },
                                    children: W
                                }), (null === q || void 0 === q ? void 0 : q.length) > 0 && z && (0, i.jsx)("div", {
                                    className: (0, c.AK)("flex md:inline-flex flex-col md:flex-row gap-4 w-full md:w-max", E || W ? "mt-4" : ""),
                                    children: null === q || void 0 === q ? void 0 : q.map((function(t, e) {
                                        return (0, i.jsx)(x.Z, {
                                            button: t,
                                            block: b,
                                            website: d,
                                            className: "w-full md:w-max"
                                        }, "quote-".concat(null === b || void 0 === b ? void 0 : b.idx, "-button-").concat(e))
                                    }))
                                })]
                            }), "basic" === I && (0, i.jsx)(g.Z, {
                                settings: B,
                                globalSettings: P,
                                children: D.length > 1 ? (0, i.jsx)(a(), {
                                    cellAlign: "center",
                                    slidesToShow: 1,
                                    autoplay: !0,
                                    pauseOnHover: !0,
                                    wrapAround: !0,
                                    transitionMode: "scroll",
                                    defaultControlsConfig: {
                                        nextButtonStyle: {
                                            background: "transparent",
                                            color: C
                                        },
                                        nextButtonText: (0, i.jsx)(r.Z, {
                                            icon: "ChevronRightIcon",
                                            className: "w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0"
                                        }),
                                        prevButtonStyle: {
                                            background: "transparent",
                                            color: C
                                        },
                                        prevButtonText: (0, i.jsx)(r.Z, {
                                            icon: "ChevronLeftIcon",
                                            className: "w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0"
                                        })
                                    },
                                    renderBottomCenterControls: function(t) {
                                        return (0, i.jsx)("ul", {
                                            className: (0, c.AK)("flex gap-4 lg:gap-5 w-full", "right" === O ? "justify-end" : "left" === O ? "justify-start" : "justify-center"),
                                            children: D.map((function(e, n) {
                                                return (0, i.jsx)("li", {
                                                    children: (0, i.jsx)("button", {
                                                        className: (0, c.AK)("w-2.5 h-2.5 rounded-full transition-all", t.currentSlide === n ? "bg-gray-900 ring-4 ring-gray-200" : "", t.currentSlide > n && (C === c.nJ ? "bg-gray-600" : "bg-gray-200"), t.currentSlide < n && (C === c.nJ ? "bg-gray-900" : "bg-gray-50")),
                                                        onClick: function() {
                                                            return t.goToSlide(n)
                                                        }
                                                    })
                                                }, "quote-".concat(null === b || void 0 === b ? void 0 : b.idx, "-dot-").concat(n))
                                            }))
                                        })
                                    },
                                    children: D.map((function(t, e) {
                                        return (0, i.jsx)("div", {
                                            className: (0, c.AK)("px-8 md:px-28 my-auto h-full flex"),
                                            children: (0, i.jsx)("div", {
                                                className: (0, c.AK)("flex flex-col gap-4 justify-center lg:max-w-5xl break-word", "text-".concat(O), F),
                                                children: $(t)
                                            })
                                        }, "quote-".concat(null === b || void 0 === b ? void 0 : b.idx, "-item-").concat(e))
                                    }))
                                }) : (0, i.jsx)("div", {
                                    className: "flex h-full my-auto",
                                    children: (0, i.jsx)("div", {
                                        className: (0, c.AK)("max-w-5xl flex flex-col gap-4 justify-center", "text-".concat(O), F),
                                        children: $(D[0])
                                    })
                                })
                            }), "boxed" === I && (0, i.jsx)("div", {
                                className: "flex flex-wrap gap-4 h-full",
                                children: D.map((function(t, e) {
                                    return (0, i.jsx)(g.Z, {
                                        className: (0, c.AK)("testimonials-flex-basis flex items-start px-4 py-8 md:px-12 md:py-20", C === c._y ? "bg-white bg-opacity-20" : "bg-black bg-opacity-5", (0, c.yW)(null === b || void 0 === b ? void 0 : b.cornerRadius, null === d || void 0 === d ? void 0 : d.cornerRadius)),
                                        settings: B,
                                        globalSettings: P,
                                        delay: 100 * (e + 1),
                                        children: (0, i.jsx)("div", {
                                            className: (0, c.AK)("max-w-5xl flex flex-col justify-center gap-6", J),
                                            children: $(t)
                                        })
                                    }, "quote-".concat(null === b || void 0 === b ? void 0 : b.idx, "-item-").concat(e))
                                }))
                            }), "slider" === I && D.length > 1 && (0, i.jsx)(a(), {
                                className: "md:!overflow-visible mb-20 -mx-2",
                                cellAlign: "left",
                                cellSpacing: 16,
                                slidesToShow: function() {
                                    var t = D.length;
                                    if (t > 3) {
                                        if (L && t > 4) return 3.25;
                                        if (M) return 2.75;
                                        if (K) return 2.25
                                    }
                                    return R ? 1.5 : 1
                                }(),
                                disableEdgeSwiping: !0,
                                transitionMode: "scroll",
                                defaultControlsConfig: {
                                    nextButtonClassName: "hidden",
                                    prevButtonClassName: "hidden"
                                },
                                renderBottomCenterControls: null,
                                renderBottomLeftControls: function(t) {
                                    return (0, i.jsxs)("div", {
                                        className: "flex gap-3",
                                        children: [(0, i.jsx)("button", {
                                            className: "flex items-center justify-center w-12 h-12 rounded-full",
                                            style: {
                                                backgroundColor: A,
                                                color: (0, c.$O)(A)
                                            },
                                            onClick: t.previousSlide,
                                            children: (0, i.jsx)(r.Z, {
                                                icon: "ArrowLeftIcon",
                                                className: "w-6 h-6"
                                            })
                                        }), (0, i.jsxs)("button", {
                                            className: "relative flex items-center justify-center w-12 h-12 rounded-full",
                                            style: {
                                                color: C
                                            },
                                            onClick: t.nextSlide,
                                            children: [(0, i.jsx)("div", {
                                                className: "absolute inset-0 rounded-full opacity-20",
                                                style: {
                                                    backgroundColor: A
                                                }
                                            }), (0, i.jsx)(r.Z, {
                                                icon: "ArrowRightIcon",
                                                className: "w-6 h-6"
                                            })]
                                        })]
                                    })
                                },
                                children: D.map((function(t, e) {
                                    return (0, i.jsx)(g.Z, {
                                        className: (0, c.AK)("h-full px-4 py-8 md:px-12 md:py-20", C === c._y ? "bg-white bg-opacity-20" : "bg-black bg-opacity-5", (0, c.yW)(null === b || void 0 === b ? void 0 : b.cornerRadius, null === d || void 0 === d ? void 0 : d.cornerRadius)),
                                        settings: B,
                                        globalSettings: P,
                                        delay: 100 * (e + 1),
                                        children: (0, i.jsx)("div", {
                                            className: (0, c.AK)("max-w-5xl flex flex-col gap-6 justify-center", J),
                                            children: $(t)
                                        })
                                    }, "quote-".concat(null === b || void 0 === b ? void 0 : b.idx, "-item-").concat(e))
                                }))
                            })]
                        }), (0, i.jsx)(h.iz, {
                            contentRef: _,
                            divider: Z,
                            previousDivider: null === p || void 0 === p ? void 0 : p.divider,
                            border: H,
                            previousBorder: null === p || void 0 === p ? void 0 : p.border,
                            dividerUniqueId: "".concat(l, "-").concat(Z)
                        })]
                    }), H && (0, i.jsx)(m.OC, {
                        contentRef: _,
                        border: H,
                        sectionDivider: Z
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
                    s = r[1];
                return (0, o.useEffect)((function() {
                    var e, n = function() {
                        s([window.innerWidth, window.innerHeight])
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