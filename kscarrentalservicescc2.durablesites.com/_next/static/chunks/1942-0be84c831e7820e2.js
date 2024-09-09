"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1942], {
        52077: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return v
                }
            });
            var o = t(14251),
                l = t(52875),
                i = t(85893),
                r = t(41664),
                a = t.n(r),
                s = t(16494),
                c = t(11942),
                d = t(67294),
                u = t(7004);

            function v(e) {
                var n = e.button,
                    t = e.type,
                    r = e.block,
                    v = e.website,
                    f = e.action,
                    m = e.loading,
                    h = e.className,
                    g = e.fallbackSize,
                    p = e.onClick,
                    x = (0, d.useState)({
                        borderWidth: 2,
                        borderStyle: "solid",
                        boxShadow: "none",
                        fontFamily: "var(--body-fontFamily)",
                        fontWeight: "var(--body-fontWeight, 500)",
                        fontStyle: "var(--body-fontStyle)"
                    }),
                    y = x[0],
                    b = x[1],
                    j = (0, d.useState)(g || "lg"),
                    w = j[0],
                    N = j[1];
                return (0, d.useEffect)((function() {
                    if (n && r && v) {
                        var e, t, i, a = (null === (e = v.colorPalette) || void 0 === e || null === (t = e.Palette) || void 0 === t ? void 0 : t.colors) || (null === (i = v.colorPalette) || void 0 === i ? void 0 : i.colors) || [];
                        if (a.length > 0 && !v.noPaletteSupport) {
                            var s, d, u, f, m, h, p = a[(0, c.dz)(null === (s = r.layers) || void 0 === s ? void 0 : s.palette)] || a[0];
                            if (!n.style) {
                                var x = v.button || {
                                    background: v.secondaryColor,
                                    cornerRadius: 8,
                                    style: "solid"
                                };
                                x.background || (x.background = v.secondaryColor), n.style = {
                                    type: x.style,
                                    cornerRadius: x.cornerRadius,
                                    name: "custom"
                                }
                            }
                            if ("custom" === (null === (d = r.layers) || void 0 === d ? void 0 : d.palette)) p = {
                                color: null === (u = r.layers) || void 0 === u || null === (f = u.overlay) || void 0 === f ? void 0 : f.color1,
                                accent: null === (m = r.layers) || void 0 === m || null === (h = m.foreground) || void 0 === h ? void 0 : h.accent
                            };
                            if ("custom" === n.style.name) b((function(e) {
                                return (0, l.Z)((0, o.Z)({}, e), {
                                    backgroundColor: "outline" === n.style.type ? "transparent" : p.accent,
                                    color: "outline" === n.style.type ? (0, c.$O)(p.color) : (0, c.$O)(p.accent),
                                    borderRadius: n.style.cornerRadius,
                                    borderColor: "outline" === n.style.type ? (0, c.$O)(p.color) : p.accent
                                })
                            })), N(n.style.size || g || "lg");
                            else {
                                var y = v.buttons && v.buttons[n.style.name] || {
                                    type: "solid",
                                    cornerRadius: 0
                                };
                                b((function(e) {
                                    return (0, l.Z)((0, o.Z)({}, e), {
                                        backgroundColor: "outline" === y.type ? "transparent" : p.accent,
                                        color: "outline" === y.type ? (0, c.$O)(p.color) : (0, c.$O)(p.accent),
                                        borderRadius: y.cornerRadius,
                                        borderColor: "outline" === y.type ? (0, c.$O)(p.color) : p.accent
                                    })
                                })), N(y.size || g || "lg")
                            }
                        } else {
                            var j = v.button || {
                                background: v.secondaryColor,
                                cornerRadius: 8,
                                style: "solid"
                            };
                            j.background || (j.background = v.secondaryColor), b((function(e) {
                                return (0, l.Z)((0, o.Z)({}, e), {
                                    backgroundColor: "outline" === j.style ? "transparent" : j.background,
                                    color: "outline" === j.style ? j.background : (0, c.$O)(j.background),
                                    borderRadius: isNaN(j.cornerRadius) ? 8 : j.cornerRadius,
                                    borderColor: j.background
                                })
                            }))
                        }
                    }
                }), [n, r, v]), f || "submit" === t || "section" === n.type ? (0, i.jsx)("button", {
                    type: "submit" === t ? "submit" : "button",
                    onClick: function(e) {
                        return (0, u.Gc)(e, n, f)
                    },
                    className: (0, c.AK)("button", h, w),
                    style: y,
                    disabled: m,
                    children: m ? (0, i.jsx)(s.Z, {}) : n.label || "Button"
                }) : p ? (0, i.jsx)("a", {
                    className: (0, c.AK)("button", h, w),
                    style: y,
                    onClick: p,
                    children: n.label || "Button"
                }) : (0, i.jsx)(a(), {
                    href: (0, u.f$)(n, v),
                    children: (0, i.jsx)("a", {
                        className: (0, c.AK)("button", h, w),
                        target: (0, u.U9)(n, v),
                        rel: "_blank" === (0, u.U9)(n, v) ? "noopener noreferrer" : null,
                        style: y,
                        children: n.label || "Button"
                    })
                })
            }
        },
        4433: function(e, n, t) {
            t.d(n, {
                $h: function() {
                    return d
                },
                c8: function() {
                    return s
                },
                iz: function() {
                    return v
                }
            });
            var o = t(14251),
                l = t(52875),
                i = t(85893),
                r = t(67294),
                a = t(62246),
                s = 1928 / 118,
                c = [{
                    id: "slantLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " 0L-0 ").concat(n, "V0H").concat(e)
                    }
                }, {
                    id: "slantRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0L".concat(e, " ").concat(n, "V0H0")
                    }
                }, {
                    id: "pointUp",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0V".concat(n, "L").concat(e / 2, " 0L").concat(e, " ").concat(n, "L").concat(1.5 * e, " 0V0H0")
                    }
                }, {
                    id: "pointDown",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0L".concat(e / 2, " ").concat(n, "L").concat(e, " 0H0")
                    }
                }, {
                    id: "curveUp",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0 C".concat(e / 2, " ").concat(n, " ").concat(e - e / 2, " ").concat(n, " ").concat(e, " 0 L").concat(e, " 0 L0 0")
                    }
                }, {
                    id: "curveDown",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 ".concat(n, " C").concat(e / 2, " 0 ").concat(e - e / 2, " 0 ").concat(e, " ").concat(n, " L").concat(e, " 0 L0 0")
                    }
                }, {
                    id: "waveLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0C0 0 ".concat(.2023 * e, " ").concat(n, " ").concat(.3333 * e, " ").concat(n, "C").concat(.4681 * e, " ").concat(n, " ").concat(.5318 * e, " 0 ").concat(.6667 * e, " 0C").concat(.8015 * e, " 0 ").concat(e, " ").concat(n, " ").concat(e, " ").concat(n, "V0H0Z")
                    }
                }, {
                    id: "waveRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " 0C").concat(e, " 0 ").concat(.8 * e, " ").concat(n, " ").concat(.666 * e, " ").concat(n, "C").concat(.547 * e, " ").concat(n, " ").concat(.483 * e, " 0 ").concat(.333 * e, " 0C").concat(.184 * e, " 0 -0.00012207 ").concat(n, " -0.00012207 ").concat(n, "V0H").concat(e)
                    }
                }, {
                    id: "jaggedLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 0L".concat(e / 3, " ").concat(n, "L").concat(e / 1.5, " 0L").concat(e, " ").concat(n, "V0H0")
                    }
                }, {
                    id: "jaggedRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " 0L").concat(e / 1.5, " ").concat(n, "L").concat(e / 3, " 0L0 ").concat(n, "V0H").concat(e)
                    }
                }, {
                    id: "swoopLeft",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M0 ".concat(n, "C").concat(e, " 0 ").concat(2 * e, " 0 ").concat(2 * e, " 0H0V").concat(n)
                    }
                }, {
                    id: "swoopRight",
                    getPath: function(e) {
                        var n = Math.floor(e / s);
                        return "M".concat(e, " ").concat(n, "C").concat(e / 2, " 0 0 0 0 0H").concat(2 * e, "V").concat(n)
                    }
                }];

            function d(e) {
                return {
                    zIndex: 40 - (null === e || void 0 === e ? void 0 : e.idx)
                }
            }
            var u = function(e) {
                    var n = e.uniqueId,
                        t = e.width,
                        o = e.height,
                        l = e.divider,
                        r = Math.floor(t / s),
                        a = Math.floor(t),
                        d = Math.floor(o),
                        u = Math.floor(o - r),
                        v = c.find((function(e) {
                            return e.id === l
                        }));
                    return (0, i.jsx)("svg", {
                        className: "absolute bottom-0 left-0",
                        width: a,
                        height: d,
                        viewBox: "0 0 ".concat(a, " ").concat(d),
                        children: (0, i.jsxs)("clipPath", {
                            id: n,
                            children: [(0, i.jsx)("rect", {
                                width: a,
                                height: u,
                                fill: "transparent"
                            }), (0, i.jsx)("path", {
                                d: v.getPath(a),
                                transform: "translate(0, ".concat(u, ")"),
                                fill: "transparent"
                            })]
                        })
                    })
                },
                v = function(e) {
                    var n = e.contentRef,
                        t = e.divider,
                        c = e.previousDivider,
                        d = e.border,
                        v = e.previousBorder,
                        f = e.combinedWithHeaderOffset,
                        m = e.dividerUniqueId,
                        h = e.noPadding,
                        g = e.onPaddingChange,
                        p = function(e) {
                            var n, t, o = getComputedStyle(e);
                            return parseInt(null !== (n = o.paddingTop) && void 0 !== n ? n : "0") + parseInt(null !== (t = o.paddingBottom) && void 0 !== t ? t : "0")
                        },
                        x = (0, r.useState)({
                            width: 0,
                            height: 0
                        }),
                        y = x[0],
                        b = x[1],
                        j = (0, r.useState)({
                            top: 0,
                            bottom: 0
                        }),
                        w = j[0],
                        N = j[1],
                        k = !!t,
                        C = !!c;
                    (0, r.useEffect)((function() {
                        if (C) {
                            var e = Math.floor((y.width || window.innerWidth) / s);
                            n.current.style.marginTop = "-" + (e + 1) + "px", n.current.style.paddingTop = h ? "" : e + 1 + "px", N((function(n) {
                                return (0, l.Z)((0, o.Z)({}, n), {
                                    top: e + 1
                                })
                            }))
                        } else if (void 0 !== f) N((function(e) {
                            return (0, l.Z)((0, o.Z)({}, e), {
                                top: f
                            })
                        }));
                        else {
                            var t = 0;
                            v && (t = v.width / 2), n.current.style.paddingTop = "".concat(t, "px"), n.current.style.marginTop = "", N((function(e) {
                                return (0, l.Z)((0, o.Z)({}, e), {
                                    top: t
                                })
                            }))
                        }
                    }), [C, y.width, f, h, v]), (0, r.useEffect)((function() {
                        if (k) {
                            var e = Math.floor((y.width || window.innerWidth) / s);
                            n.current.style.paddingBottom = h ? "" : e + "px", n.current.style.clipPath = "url(#".concat(m, ")"), n.current.style.WebkitClipPath = "url(#".concat(m, ")"), n.current.classList.add("fix-safari-flickering"), N((function(n) {
                                return (0, l.Z)((0, o.Z)({}, n), {
                                    bottom: e
                                })
                            }))
                        } else {
                            var t = 0;
                            d && (t = d.width / 2), n.current.style.paddingBottom = "".concat(t, "px"), N((function(e) {
                                return (0, l.Z)((0, o.Z)({}, e), {
                                    bottom: t
                                })
                            })), n.current.style.clipPath = ""
                        }
                    }), [k, y.width, h, d]);
                    var F = (0, r.useCallback)((function() {
                        var e, t;
                        b({
                            width: null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0,
                            height: (null !== (t = n.current.offsetHeight) && void 0 !== t ? t : 0) - p(n.current)
                        })
                    }), [n]);
                    return (0, r.useEffect)((function() {
                        "function" === typeof g && g(w)
                    }), [w]), (0, a.Z)(F, k || C ? n : null), t ? (0, i.jsx)(u, {
                        uniqueId: m,
                        width: y.width,
                        height: y.height + (h ? 0 : w.top + w.bottom),
                        divider: t
                    }) : null
                }
        },
        74007: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return d
                }
            });
            var o = t(85893),
                l = t(67294),
                i = t(17258),
                r = t(11355),
                a = t(11942),
                s = t(40944),
                c = t(68116);

            function d(e) {
                var n = e.className,
                    t = e.icon,
                    d = e.iconClassName,
                    u = e.button,
                    v = e.buttonClassName,
                    f = e.openClassName,
                    m = e.iconOpenClassName,
                    h = e.children,
                    g = e.inline,
                    p = e.itemsContainerClass,
                    x = e.disabled,
                    y = e.itemsContainerStyle,
                    b = e.openUp,
                    j = void 0 !== b && b,
                    w = function() {
                        F(function(e) {
                            if (!e) return !1;
                            var n = e.getBoundingClientRect();
                            return !(n.left >= 0 && n.right <= (window.innerWidth || document.documentElement.clientWidth))
                        }(N.current))
                    },
                    N = (0, l.useRef)(),
                    k = (0, l.useState)(!1),
                    C = k[0],
                    F = k[1];
                return (0, o.jsx)(i.v, {
                    as: "div",
                    className: (0, a.AK)("relative inline-block text-left", n),
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    children: function(e) {
                        var n = e.open;
                        return (0, o.jsxs)(c.bv, {
                            portal: !0,
                            children: [(0, o.jsx)(i.v.Button, {
                                className: (0, a.AK)(v, n ? f : "", "cursor-pointer z-5 focus:outline-none"),
                                disabled: x,
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: u || (0, o.jsx)(s.Z, {
                                    icon: t || "DotsVerticalIcon",
                                    className: (0, a.AK)(d, "h-5 w-5", n ? m || "text-indigo-500" : "text-gray-500")
                                })
                            }), (0, o.jsx)(r.u, {
                                show: n,
                                as: l.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                ref: N,
                                beforeEnter: w,
                                afterLeave: function() {
                                    return F(!1)
                                },
                                children: (0, o.jsx)(i.v.Items, {
                                    className: (0, a.AK)(p, "z-100 max-h-60 py-3 px-6 rounded-lg bg-white focus:outline-none overflow-y-auto space-y-2 shadow-lg", g ? "static" : "absolute", j ? "bottom-full mb-10" : "mt-2", C ? "right-0" : "left-0"),
                                    style: y,
                                    children: h
                                })
                            })]
                        })
                    }
                })
            }
        },
        24230: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var o = t(69779),
                l = t(85893),
                i = t(67294),
                r = t(9008),
                a = t.n(r),
                s = t(11942);

            function c(e) {
                var n = e.website,
                    t = (0, i.useState)([]),
                    r = t[0],
                    c = t[1];
                return (0, i.useEffect)((function() {
                    if (null === n || void 0 === n ? void 0 : n.fonts) {
                        var e, t, l, i, r, a, d, u, v, f, m, h, g, p, x, y, b = [];
                        if ("custom" === (null === n || void 0 === n || null === (e = n.fonts) || void 0 === e ? void 0 : e.source))(null === (v = n.fonts.custom) || void 0 === v || null === (f = v.head) || void 0 === f ? void 0 : f.name) && b.push({
                            source: n.fonts.custom.head.source,
                            query: (0, s.pr)(n.fonts.custom.head, !0)
                        }), (null === (m = n.fonts.custom) || void 0 === m || null === (h = m.body) || void 0 === h ? void 0 : h.name) && b.push({
                            source: n.fonts.custom.body.source,
                            query: (0, s.pr)(n.fonts.custom.body, !0)
                        });
                        else(null === n || void 0 === n || null === (g = n.fonts) || void 0 === g || null === (p = g.head) || void 0 === p ? void 0 : p.name) && b.push({
                            source: n.fonts.head.source,
                            query: (0, s.pr)(n.fonts.head)
                        }), (null === n || void 0 === n || null === (x = n.fonts) || void 0 === x || null === (y = x.body) || void 0 === y ? void 0 : y.name) && b.push({
                            source: n.fonts.body.source,
                            query: (0, s.pr)(n.fonts.body)
                        });
                        (null === n || void 0 === n || null === (t = n.header) || void 0 === t || null === (l = t.logo) || void 0 === l || null === (i = l.font) || void 0 === i ? void 0 : i.name) && b.push({
                            source: n.header.logo.font.source,
                            query: (0, s.pr)(n.header.logo.font)
                        }), "header" !== (null === n || void 0 === n || null === (r = n.footer) || void 0 === r ? void 0 : r.logoFrom) && (null === n || void 0 === n || null === (a = n.footer) || void 0 === a || null === (d = a.logo) || void 0 === d || null === (u = d.font) || void 0 === u ? void 0 : u.name) && b.push({
                            source: n.footer.logo.font.source,
                            query: (0, s.pr)(n.footer.logo.font)
                        }), c((0, o.Z)(new Set(b)))
                    }
                }), [n]), r.length > 0 ? function() {
                    var e = r.filter((function(e) {
                            return "fontshare" !== e.source
                        })),
                        n = r.filter((function(e) {
                            return "fontshare" === e.source
                        }));
                    return (0, l.jsxs)(a(), {
                        children: [e.length > 0 && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("link", {
                                rel: "preconnect",
                                href: "https://fonts.googleapis.com"
                            }), (0, l.jsx)("link", {
                                rel: "preconnect",
                                href: "https://fonts.gstatic.com",
                                crossOrigin: !0
                            }), (0, l.jsx)("link", {
                                href: "https://fonts.googleapis.com/css2?".concat(e.map((function(e) {
                                    return e.query
                                })).join("&"), "&display=swap"),
                                rel: "stylesheet"
                            })]
                        }), n.length > 0 && (0, l.jsx)("link", {
                            href: "https://api.fontshare.com/v2/css?".concat(n.map((function(e) {
                                return e.query
                            })).join("&"), "&display=swap"),
                            rel: "stylesheet"
                        })]
                    })
                }() : null
            }
        },
        40944: function(e, n, t) {
            var o = t(6453),
                l = t(85893),
                i = t(34449);
            n.Z = function(e) {
                var n = (0, o.Z)({}, i)[e.icon];
                return n ? (0, l.jsx)(n, {
                    className: e.className,
                    onClick: e.onClick,
                    "aria-hidden": "true"
                }) : "<></>"
            }
        },
        7004: function(e, n, t) {
            t.d(n, {
                Gc: function() {
                    return i
                },
                U9: function() {
                    return l
                },
                f$: function() {
                    return o
                }
            });
            var o = function(e, n) {
                    if (e) {
                        if ("email" === e.type) return "mailto:" + e.link;
                        if ("phone" === e.type) return "tel:" + e.link;
                        if ("page" === e.type) {
                            var t, o, l, i = null === n || void 0 === n || null === (t = n.pages) || void 0 === t ? void 0 : t.find((function(n) {
                                    return n._id === e.page
                                })),
                                r = (null === i || void 0 === i ? void 0 : i.Parent) ? null === n || void 0 === n || null === (o = n.pages) || void 0 === o ? void 0 : o.find((function(e) {
                                    return e._id === (null === i || void 0 === i ? void 0 : i.Parent)
                                })) : null,
                                a = "/";
                            return r && (a += "".concat(r.slug, "/")), a += null !== (l = null === i || void 0 === i ? void 0 : i.slug) && void 0 !== l ? l : ""
                        }
                        return "section" === e.type ? "#" + e.link : (null === e || void 0 === e || null === (s = e.link) || void 0 === s ? void 0 : s.includes("http")) || (null === e || void 0 === e || null === (c = e.link) || void 0 === c ? void 0 : c.includes("https")) ? e.link : (null === e || void 0 === e ? void 0 : e.link) && "#" !== (null === e || void 0 === e ? void 0 : e.link) ? "/" === (null === e || void 0 === e ? void 0 : e.link) ? "/" : "https://" + (null === e || void 0 === e ? void 0 : e.link) : "#";
                        var s, c
                    }
                    return "#"
                },
                l = function(e, n) {
                    var t, o, l, i = null === n || void 0 === n || null === (t = n.pages) || void 0 === t ? void 0 : t.find((function(n) {
                        return n._id === (null === e || void 0 === e ? void 0 : e.page)
                    }));
                    return (null === e || void 0 === e ? void 0 : e.newPage) ? "_blank" : (null === i || void 0 === i ? void 0 : i.forceRender) ? "_parent" : (null === n || void 0 === n || null === (o = n.button) || void 0 === o ? void 0 : o.target) ? null === n || void 0 === n || null === (l = n.button) || void 0 === l ? void 0 : l.target : "_self"
                };
            var i = function(e, n, t) {
                if ("function" !== typeof t) {
                    if ("section" === (null === n || void 0 === n ? void 0 : n.type)) {
                        e.preventDefault();
                        var o = document.getElementById("main-body"),
                            l = document.getElementById("website-header"),
                            i = document.getElementById(n.link);
                        if (i && o && l) {
                            var r = i.getBoundingClientRect().top;
                            if (l.classList.contains("sticky")) r -= l.getBoundingClientRect().height;
                            o.scroll({
                                top: r + o.scrollTop,
                                behavior: "smooth"
                            })
                        }
                    }
                } else t(e)
            }
        },
        16494: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            var o = t(85893),
                l = t(89774),
                i = t(11942);

            function r(e) {
                var n = e.text,
                    t = e.className,
                    r = e.classNameChild,
                    a = e.variant,
                    s = (0, l.$G)("common").t;
                switch (a) {
                    case "form":
                        return (0, o.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, o.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, o.jsx)("hr", {}), (0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, o.jsx)("hr", {}), (0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, o.jsx)("hr", {}), (0, o.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, o.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, o.jsx)("div", {
                            className: t,
                            children: (0, o.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, o.jsx)("div", {
                                    className: (0, i.AK)("h-6 bg-gray-200 rounded", r)
                                })
                            })
                        });
                    case "table":
                        return (0, o.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, o.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, o.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, o.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, o.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, o.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, o.jsxs)("div", {
                            className: (0, i.AK)("inline-flex items-center", t),
                            children: [(0, o.jsxs)("svg", {
                                className: (0, i.AK)("animate-spin ml-1 mr-3 h-4 w-4", t),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, o.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, o.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), n || "" === n ? n : s("loading")]
                        })
                }
            }
        },
        23493: function(e, n, t) {
            t.d(n, {
                TR: function() {
                    return u
                },
                yA: function() {
                    return v
                },
                i6: function() {
                    return d
                }
            });
            var o = t(14251),
                l = t(69779),
                i = t(85893),
                r = t(11942),
                a = t(41664),
                s = t.n(a),
                c = t(67294);
            var d = function(e, n) {
                    var t, o, l, i = (0, r.p$)(e);
                    return i.siteName = i.siteName || i.businessName || "", i.logo = {
                        type: (null === e || void 0 === e ? void 0 : e.showLogo) && ((null === n || void 0 === n ? void 0 : n.logo) || (null === e || void 0 === e ? void 0 : e.customLogo)) ? "image" : "text-icon",
                        showText: !!i.siteName,
                        font: null === n || void 0 === n || null === (t = n.fonts) || void 0 === t ? void 0 : t.head,
                        showIcon: !1,
                        source: (null === e || void 0 === e ? void 0 : e.source) || "branding",
                        media: null === e || void 0 === e ? void 0 : e.customLogo,
                        height: {
                            desktop: (null === e || void 0 === e || null === (o = e.logoDesktop) || void 0 === o ? void 0 : o.height) || 80,
                            mobile: (null === e || void 0 === e || null === (l = e.logoMobile) || void 0 === l ? void 0 : l.height) || 40
                        }
                    }, i
                },
                u = function(e) {
                    var n, t, a, d = e.className,
                        u = e.text,
                        v = e.logo,
                        f = e.color,
                        m = e.forceRender,
                        h = e.location,
                        g = void 0 === h ? "header" : h,
                        p = function() {
                            var e, n, t = function() {
                                    var e, n = [],
                                        t = j.current.cloneNode(!0);
                                    return t.style.position = "fixed", t.style.visibility = "hidden", t.style.width = "auto", document.body.appendChild(t), j.current.innerText.split(" ").forEach((function(e) {
                                        t.innerText = e;
                                        var o = t.getBoundingClientRect().width;
                                        n.push(Number(o.toFixed(2)))
                                    })), t.innerHTML = "&nbsp;", e = Number(t.getBoundingClientRect().width.toFixed(2)), document.body.removeChild(t), {
                                        wordSizes: n,
                                        emptySpaceSize: e
                                    }
                                }(),
                                o = t.wordSizes,
                                i = t.emptySpaceSize,
                                r = [],
                                a = j.current.offsetWidth + 2,
                                s = 0,
                                c = null !== (n = o[0]) && void 0 !== n ? n : 0;
                            r[s] = c;
                            for (var d = 1; d < o.length; d++) {
                                var u = i + o[d];
                                c + u <= a ? (c += u, r[s] = c) : (s++, c = o[d], r[s] = c)
                            }
                            return (e = Math).max.apply(e, (0, l.Z)(r)) + 2
                        },
                        x = function() {
                            if (j.current) {
                                j.current.style.width = "auto", j.current.style.whiteSpace = "normal";
                                var e = p();
                                j.current.style.width = "".concat(e + 2, "px"), j.current.style.whiteSpace = ""
                            }
                        },
                        y = function() {
                            w.current = (0, r.Ds)(x, 150, w.current)()
                        },
                        b = (0, r.ac)("(max-width: 1023px)"),
                        j = (0, c.useRef)(null),
                        w = (0, c.useRef)(null),
                        N = function() {
                            var e = (0, c.useState)(!1),
                                n = e[0],
                                t = e[1];
                            return (0, c.useEffect)((function() {
                                document.fonts.ready.then((function() {
                                    t(!0)
                                })).catch((function(e) {
                                    console.log("Error while loading fonts:", e)
                                }))
                            }), []), n
                        }();
                    return (0, c.useEffect)((function() {
                        if (j.current) return y(), window.addEventListener("resize", y),
                            function() {
                                window.removeEventListener("resize", y), clearTimeout(w.current)
                            }
                    }), [b, N]), (null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v ? void 0 : v.icon) || (null === v || void 0 === v ? void 0 : v.showText) && u ? (0, i.jsx)(s(), {
                        href: "/",
                        children: (0, i.jsxs)("a", {
                            className: (0, r.AK)((null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v || null === (n = v.icon) || void 0 === n ? void 0 : n.url) ? "flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left" : "grid max-w-full", d),
                            target: m ? "_parent" : "_self",
                            children: [(null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v ? void 0 : v.icon) && (0, i.jsx)("div", {
                                className: "flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12",
                                children: (0, i.jsx)("div", {
                                    className: "absolute w-full h-full",
                                    style: {
                                        backgroundColor: f || "#1F2937",
                                        WebkitMaskImage: 'url("'.concat(null === v || void 0 === v || null === (t = v.icon) || void 0 === t ? void 0 : t.url, '")'),
                                        maskImage: 'url("'.concat(null === v || void 0 === v || null === (a = v.icon) || void 0 === a ? void 0 : a.url, '")'),
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain"
                                    }
                                })
                            }), (null === v || void 0 === v ? void 0 : v.showText) && u && (0, i.jsx)("h2", {
                                ref: j,
                                className: (0, r.AK)("heading-small lg:heading-medium max-w-full", (null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v ? void 0 : v.icon) ? "whitespace-normal" : "whitespace-nowrap overflow-hidden overflow-ellipsis"),
                                style: (0, o.Z)({
                                    color: f
                                }, function() {
                                    var e;
                                    if ((null === v || void 0 === v ? void 0 : v.showText) && u && (null === v || void 0 === v ? void 0 : v.showIcon) && (null === v || void 0 === v || null === (e = v.icon) || void 0 === e ? void 0 : e.url)) {
                                        var n = (6 / (u.length || 0) + .66) * (b ? 18 : 22),
                                            t = Math.min(Math.max(n, 16), 40);
                                        return {
                                            fontSize: "".concat(t, "px"),
                                            lineHeight: 1.2
                                        }
                                    }
                                    return {}
                                }(), {
                                    fontFamily: "var(--".concat(g, "-logo-fontFamily)"),
                                    fontWeight: "var(--".concat(g, "-logo-fontWeight)")
                                }),
                                children: u
                            })]
                        })
                    }) : null
                };

            function v(e) {
                var n = e.src,
                    t = e.text,
                    o = e.height;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("img", {
                        className: "hidden lg:block transition-all object-contain",
                        src: n,
                        alt: t,
                        style: {
                            height: ((null === o || void 0 === o ? void 0 : o.desktop) || 80) + "px"
                        }
                    }), (0, i.jsx)("img", {
                        className: "lg:hidden transition-all object-contain",
                        src: n,
                        alt: t,
                        style: {
                            height: ((null === o || void 0 === o ? void 0 : o.mobile) || 40) + "px"
                        }
                    })]
                })
            }
        },
        21123: function(e, n, t) {
            t.d(n, {
                N: function() {
                    return d
                },
                Z: function() {
                    return u
                }
            });
            var o = t(14251),
                l = t(52875),
                i = t(85893),
                r = t(67294),
                a = t(11942),
                s = t(29260),
                c = t.n(s),
                d = function(e, n) {
                    var t, i, r, s, c = (null === e || void 0 === e || null === (t = e.colorPalette) || void 0 === t || null === (i = t.Palette) || void 0 === i ? void 0 : i.colors) || (null === e || void 0 === e || null === (r = e.colorPalette) || void 0 === r ? void 0 : r.colors) || [];
                    if (null === (s = n.layers) || void 0 === s ? void 0 : s.palette) {
                        var d, u = (0, o.Z)({}, n.layers.fade);
                        if (null === (d = n.layers.fade) || void 0 === d ? void 0 : d.enabled)
                            if ("custom" === n.layers.fade.palette) u.color = n.layers.fade.color;
                            else {
                                var v, f = (0, a.dz)(n.layers.fade.palette);
                                u.color = null === (v = c[f]) || void 0 === v ? void 0 : v.color
                            }
                        if ("custom" === n.layers.palette) return (0, l.Z)((0, o.Z)({}, null === n || void 0 === n ? void 0 : n.layers), {
                            fade: u
                        });
                        var m, h, g, p, x, y, b, j, w = (0, a.dz)(n.layers.palette),
                            N = {};
                        return N = "gradient" === (null === (m = n.layers.overlay) || void 0 === m ? void 0 : m.type) ? {
                            type: "gradient",
                            color1: null === (p = c[w]) || void 0 === p ? void 0 : p.color,
                            color2: null === (x = c[w % 2 === 0 ? w + 1 : w - 1]) || void 0 === x ? void 0 : x.color,
                            accent: null === (y = c[w]) || void 0 === y ? void 0 : y.accent
                        } : {
                            type: "solid",
                            color1: null === (b = c[w]) || void 0 === b ? void 0 : b.color,
                            accent: null === (j = c[w]) || void 0 === j ? void 0 : j.accent
                        }, (0, l.Z)((0, o.Z)({}, null === n || void 0 === n ? void 0 : n.layers), {
                            overlay: (0, o.Z)({}, null === n || void 0 === n || null === (h = n.layers) || void 0 === h ? void 0 : h.overlay, N),
                            fade: u,
                            foreground: {
                                accent: (null === (g = c[w]) || void 0 === g ? void 0 : g.accent) || (0, a.$O)(N.color1 || "#FFFFFF")
                            }
                        })
                    }
                    var k, C, F, Z, S, R, A, _, P, T, L, M = {
                            type: "solid"
                        },
                        B = {
                            enabled: !1
                        };
                    if ("object" === typeof(null === n || void 0 === n ? void 0 : n.background))
                        if ("image" === (null === n || void 0 === n || null === (C = n.background) || void 0 === C ? void 0 : C.type)) M.color1 = (null === (Z = n.background.overlay) || void 0 === Z ? void 0 : Z.color.includes("rgba")) ? (0, a.s)(null === (S = n.background.overlay) || void 0 === S ? void 0 : S.color) : null === (R = n.background.overlay) || void 0 === R ? void 0 : R.color, B.enabled = !0, B.media = null === n || void 0 === n || null === (A = n.background) || void 0 === A ? void 0 : A.image, B.positionX = (null === (_ = n.background) || void 0 === _ ? void 0 : _.imagePositionX) || "50%", B.positionY = (null === (P = n.background) || void 0 === P ? void 0 : P.imagePositionY) || "50%", B.opacity = (null === (T = n.background) || void 0 === T || null === (L = T.overlay) || void 0 === L ? void 0 : L.amount) || 50;
                        else if ("gradient" === (null === n || void 0 === n || null === (F = n.background) || void 0 === F ? void 0 : F.type)) {
                        var E, z, I;
                        M.type = "gradient", M.color1 = null === n || void 0 === n || null === (E = n.background) || void 0 === E ? void 0 : E.color, M.color2 = null === n || void 0 === n || null === (z = n.background) || void 0 === z ? void 0 : z.color2, M.direction = null === (I = a.mQ.find((function(e) {
                            var t;
                            return e.value === (null === n || void 0 === n || null === (t = n.background) || void 0 === t ? void 0 : t.direction)
                        }))) || void 0 === I ? void 0 : I.id
                    } else {
                        var W;
                        M.color1 = null === n || void 0 === n || null === (W = n.background) || void 0 === W ? void 0 : W.color
                    } else M.color1 = (null === n || void 0 === n ? void 0 : n.background) || "#FFFFFF";
                    return {
                        palette: "custom",
                        image: B,
                        fade: {
                            enabled: !1
                        },
                        overlay: M,
                        foreground: {
                            accent: (null === (k = c[0]) || void 0 === k ? void 0 : k.accent) || (0, a.$O)(M.color1 || "#FFFFFF")
                        }
                    }
                };

            function u(e) {
                var n, t, o, l = e.block,
                    s = e.website,
                    u = e.setTextColor,
                    v = e.setAccentColor,
                    f = e.onChange,
                    m = (0, r.useState)(null),
                    h = m[0],
                    g = m[1];
                return (0, r.useEffect)((function() {
                    s && l && g(d(s, l))
                }), [l, s]), (0, r.useEffect)((function() {
                    if (h) {
                        var e, n, t, o;
                        if ("function" === typeof u)
                            if (null === (e = h.fade) || void 0 === e ? void 0 : e.enabled) u((0, a.$O)((null === (n = h.fade) || void 0 === n ? void 0 : n.color) || "#FFFFFF"));
                            else u((0, a.$O)((null === (t = h.overlay) || void 0 === t ? void 0 : t.color1) || "#FFFFFF"));
                        if ("function" === typeof v) v((null === h || void 0 === h || null === (o = h.foreground) || void 0 === o ? void 0 : o.accent) || "#000000");
                        "function" === typeof f && f(h)
                    }
                }), [h]), (0, i.jsx)(i.Fragment, {
                    children: h && (0, i.jsxs)("div", {
                        className: "absolute inset-0 z-10 pointer-events-none",
                        children: [(null === (n = h.fade) || void 0 === n ? void 0 : n.enabled) && (0, i.jsx)("div", {
                            className: "absolute inset-0 z-20 transition-all duration-300",
                            style: function() {
                                var e, n, t, o = (null === h || void 0 === h || null === (e = h.fade) || void 0 === e ? void 0 : e.opacity) || 50;
                                return {
                                    backgroundImage: "linear-gradient(".concat(a.mQ.find((function(e) {
                                        var n;
                                        return e.id === ((null === h || void 0 === h || null === (n = h.fade) || void 0 === n ? void 0 : n.direction) || "top-down")
                                    })).value, ", transparent, ").concat(null !== (t = null === h || void 0 === h || null === (n = h.fade) || void 0 === n ? void 0 : n.color) && void 0 !== t ? t : "#D1D5DB", ")"),
                                    opacity: o / 100
                                }
                            }()
                        }), (0, i.jsx)("div", {
                            className: "absolute inset-0 z-10",
                            style: function() {
                                var e, n, t, o, l, i, r, s = {};
                                "solid" === (null === h || void 0 === h || null === (e = h.overlay) || void 0 === e ? void 0 : e.type) ? s = {
                                    backgroundColor: null === h || void 0 === h || null === (t = h.overlay) || void 0 === t ? void 0 : t.color1
                                }: s = {
                                    backgroundImage: "linear-gradient(".concat(a.mQ.find((function(e) {
                                        var n;
                                        return e.id === ((null === h || void 0 === h || null === (n = h.overlay) || void 0 === n ? void 0 : n.direction) || "top-down")
                                    })).value, ", ").concat(null !== (i = null === h || void 0 === h || null === (o = h.overlay) || void 0 === o ? void 0 : o.color1) && void 0 !== i ? i : "#FFFFFF", ", ").concat(null !== (r = null === h || void 0 === h || null === (l = h.overlay) || void 0 === l ? void 0 : l.color2) && void 0 !== r ? r : "#D1D5DB", ")")
                                };
                                if (null === h || void 0 === h || null === (n = h.image) || void 0 === n ? void 0 : n.enabled) {
                                    var c, d, u = isNaN(null === h || void 0 === h || null === (c = h.image) || void 0 === c ? void 0 : c.opacity) ? 50 : null === h || void 0 === h || null === (d = h.image) || void 0 === d ? void 0 : d.opacity;
                                    s.opacity = u / 100
                                }
                                return s
                            }()
                        }), (null === (t = h.image) || void 0 === t ? void 0 : t.enabled) && (0, i.jsxs)(i.Fragment, {
                            children: [(null === (o = h.image) || void 0 === o ? void 0 : o.media) && (0, a.$K)(h.image.blur) && "none" !== h.image.blur && (0, i.jsx)("div", {
                                className: "absolute inset-0 z-5",
                                style: {
                                    backdropFilter: "blur(".concat(a.uR.find((function(e) {
                                        return e.id === (h.image.blur || "none")
                                    })).value, ")"),
                                    WebkitBackdropFilter: "blur(".concat(a.uR.find((function(e) {
                                        return e.id === (h.image.blur || "none")
                                    })).value, ")")
                                }
                            }), h.image.media && (0, i.jsx)("div", {
                                className: "absolute inset-0 z-0 bg-white",
                                children: (0, i.jsx)(c(), {
                                    sizes: "200vw",
                                    quality: 90,
                                    priority: (null === l || void 0 === l ? void 0 : l.idx) <= 1,
                                    alt: "background",
                                    src: h.image.media.url || h.image.media.preview || h.image.media,
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: "".concat(h.image.positionX || "center", " ").concat(h.image.positionY || "center")
                                })
                            })]
                        })]
                    })
                })
            }
        },
        75654: function(e, n, t) {
            t.d(n, {
                Q: function() {
                    return N
                },
                W: function() {
                    return w
                }
            });
            var o = t(85893),
                l = t(11942),
                i = t(71029),
                r = t(85296),
                a = t(44171),
                s = t(43180),
                c = t(10151),
                d = t(36234),
                u = t(66909),
                v = t(49791),
                f = t(28239),
                m = t(48192),
                h = t(94206),
                g = t(95115),
                p = t(13487),
                x = t(23863),
                y = t(14892),
                b = t(62458),
                j = function(e) {
                    var n = e.type,
                        t = e.className,
                        l = e.style;
                    switch (n) {
                        case "angi":
                            return (0, o.jsx)(i.Z, {
                                className: t,
                                style: l
                            });
                        case "behance":
                            return (0, o.jsx)(r.Z, {
                                className: t,
                                style: l
                            });
                        case "dribbble":
                            return (0, o.jsx)(a.Z, {
                                className: t,
                                style: l
                            });
                        case "facebook":
                            return (0, o.jsx)(s.Z, {
                                className: t,
                                style: l
                            });
                        case "homeadvisor":
                            return (0, o.jsx)(c.Z, {
                                className: t,
                                style: l
                            });
                        case "instagram":
                            return (0, o.jsx)(d.Z, {
                                className: t,
                                style: l
                            });
                        case "linkedin":
                            return (0, o.jsx)(u.Z, {
                                className: t,
                                style: l
                            });
                        case "pinterest":
                            return (0, o.jsx)(v.Z, {
                                className: t,
                                style: l
                            });
                        case "tiktok":
                            return (0, o.jsx)(f.Z, {
                                className: t,
                                style: l
                            });
                        case "thumbtack":
                            return (0, o.jsx)(m.Z, {
                                className: t,
                                style: l
                            });
                        case "twitter":
                            return (0, o.jsx)(h.Z, {
                                className: t,
                                style: l
                            });
                        case "twitterold":
                            return (0, o.jsx)(g.Z, {
                                className: t,
                                style: l
                            });
                        case "youtube":
                            return (0, o.jsx)(p.Z, {
                                className: t,
                                style: l
                            });
                        case "medium":
                            return (0, o.jsx)(x.Z, {
                                className: t,
                                style: l
                            });
                        case "threads":
                            return (0, o.jsx)(y.Z, {
                                className: t,
                                style: l
                            });
                        case "telegram":
                            return (0, o.jsx)(b.Z, {
                                className: t,
                                style: l
                            });
                        default:
                            return null
                    }
                },
                w = [{
                    id: "facebook",
                    host: "facebook.com"
                }, {
                    id: "twitter",
                    host: "twitter.com"
                }, {
                    id: "twitterold",
                    host: "twitter.com"
                }, {
                    id: "linkedin",
                    host: "linkedin.com"
                }, {
                    id: "youtube",
                    host: "youtube.com"
                }, {
                    id: "pinterest",
                    host: "pinterest.com"
                }, {
                    id: "instagram",
                    host: "instagram.com"
                }, {
                    id: "tiktok",
                    host: "tiktok.com"
                }, {
                    id: "thumbtack",
                    host: "thumbtack.com"
                }, {
                    id: "homeadvisor",
                    host: "homeadvisor.com"
                }, {
                    id: "angi",
                    host: "angi.com"
                }, {
                    id: "behance",
                    host: "behance.net"
                }, {
                    id: "dribbble",
                    host: "dribbble.com"
                }, {
                    id: "medium",
                    host: "medium.com"
                }, {
                    id: "threads",
                    host: "threads.net"
                }, {
                    id: "telegram",
                    host: "t.me"
                }],
                N = function(e) {
                    var n, t, i, r, a, s, c, d, u = e.icon,
                        v = e.color,
                        f = e.settings,
                        m = void 0 === f ? {} : f,
                        h = m.size = null !== (r = m.size) && void 0 !== r ? r : "large",
                        g = m.shape = null !== (a = m.shape) && void 0 !== a ? a : "none",
                        p = m.style = null !== (s = m.style) && void 0 !== s ? s : "solid",
                        x = "large" === h ? "w-8 h-8" : "medium" === h ? "w-7 h-7" : "w-6 h-6",
                        y = {};
                    return "none" !== g && (y = function() {
                        var e = "large" === h ? "w-12 h-12" : "medium" === h ? "w-10 h-10" : "w-8 h-8",
                            n = "circle" === g ? "rounded-full" : "square" === g ? "rounded-none" : "rounded" === g ? "rounded-md" : "",
                            t = "solid" === p ? v : "outline" === p ? "transparent" : "",
                            o = "outline" === p ? "border" : "";
                        return {
                            classes: (0, l.AK)(e, n, o),
                            styles: {
                                backgroundColor: t,
                                borderColor: v
                            }
                        }
                    }()), (0, o.jsxs)("div", {
                        className: (0, l.AK)("flex justify-center items-center", null !== (c = y.classes) && void 0 !== c ? c : ""),
                        style: null !== (d = y.styles) && void 0 !== d ? d : {},
                        children: ["custom" !== u.type && (0, o.jsx)(j, {
                            type: u.type,
                            className: (0, l.AK)(x),
                            style: {
                                color: "none" === g || "outline" === p ? v : (0, l.$O)(v)
                            }
                        }), "custom" === u.type && (null === (n = u.icon) || void 0 === n ? void 0 : n._id) && (0, o.jsx)("div", {
                            className: (0, l.AK)("flex-shrink-0 relative", x),
                            children: (0, o.jsx)("div", {
                                className: "absolute w-full h-full",
                                style: {
                                    backgroundColor: "none" === g || "outline" === p ? v : (0, l.$O)(v),
                                    WebkitMaskImage: 'url("'.concat(null === (t = u.icon) || void 0 === t ? void 0 : t.url, '")'),
                                    maskImage: 'url("'.concat(null === (i = u.icon) || void 0 === i ? void 0 : i.url, '")'),
                                    WebkitMaskPosition: "center",
                                    maskPosition: "center",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskRepeat: "no-repeat",
                                    WebkitMaskSize: "contain",
                                    maskSize: "contain"
                                }
                            })
                        })]
                    })
                }
        },
        165: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return w
                }
            });
            var o = t(14251),
                l = t(85893),
                i = t(11942),
                r = t(67294),
                a = t(41664),
                s = t.n(a),
                c = t(90387),
                d = t(52077),
                u = t(90434),
                v = t(41984),
                f = t(43751),
                m = t(17258),
                h = t(27507),
                g = t(74007),
                p = t(75654),
                x = t(21123),
                y = t(4433),
                b = t(23493),
                j = t(89774);

            function w(e) {
                var n, t, a, w, N = e.website,
                    k = e.previousBlock,
                    C = (0, j.$G)("common").t,
                    F = (0, r.useState)(!1),
                    Z = F[0],
                    S = F[1],
                    R = (0, r.useState)(""),
                    A = R[0],
                    _ = R[1],
                    P = (0, r.useState)(null),
                    T = P[0],
                    L = P[1],
                    M = (0, r.useState)("#FFFFFF"),
                    B = M[0],
                    E = M[1],
                    z = (0, r.useState)("#000000"),
                    I = z[0],
                    W = z[1],
                    D = (0, r.useRef)(null),
                    O = (0, c.useRouter)(),
                    $ = null === N || void 0 === N ? void 0 : N.footer;
                $ && $.showName && (null === $.businessName || void 0 === $.businessName) && ($.businessName = null === N || void 0 === N || null === (w = N.Business) || void 0 === w ? void 0 : w.name);
                !$ || null !== $.businessAddress && void 0 !== $.businessAddress || ($.businessAddress = "");
                var K = null === N || void 0 === N ? void 0 : N.header,
                    H = null === N || void 0 === N || null === (n = N.pages) || void 0 === n ? void 0 : n.find((function(e) {
                        return !e.slug && e.default
                    })),
                    q = null === (a = null === (t = N.pages) || void 0 === t ? void 0 : t.filter((function(e) {
                        return !0 === e.showOnFooter || void 0 === e.showOnFooter
                    }))) || void 0 === a ? void 0 : a.map((function(e) {
                        var n = {
                            href: "/".concat(e.slug || ""),
                            name: e.label,
                            current: O.asPath === "/".concat(e.slug || "") || O.asPath.includes("/".concat(e.slug, "/")),
                            type: e.type,
                            forceRender: e.forceRender
                        };
                        return "parent" === n.type && (n.nests = N.pages.filter((function(n) {
                            return n.Parent === e._id
                        })).map((function(n) {
                            return {
                                href: "/".concat(e.slug, "/").concat(n.slug || ""),
                                name: n.label,
                                current: O.asPath === "/".concat(e.slug, "/").concat(n.slug || ""),
                                forceRender: n.forceRender
                            }
                        })), 0 === n.nests.length) ? null : n
                    })).filter((function(e) {
                        return null !== e
                    })),
                    U = function() {
                        var e, n, t, o, r, a = $;
                        (0, i.$K)(null === a || void 0 === a ? void 0 : a.logo) && (0, i.$K)(null === a || void 0 === a ? void 0 : a.siteName) || !N || (a = (0, b.i6)($, N)), "header" === $.logoFrom && (a = (0, i.$K)(null === K || void 0 === K ? void 0 : K.logo) ? K : (0, b.i6)(K, N));
                        var c = "";
                        if ("stacked-right" === (null === $ || void 0 === $ ? void 0 : $.style) ? c = "justify-end" : "stacked-center" === (null === $ || void 0 === $ ? void 0 : $.style) ? c = "justify-center" : "simple-center" === (null === $ || void 0 === $ ? void 0 : $.style) && (c = "justify-center lg:justify-end mx-auto lg:mx-0"), "image" === (null === a || void 0 === a || null === (e = a.logo) || void 0 === e ? void 0 : e.type) && "branding" === (null === a || void 0 === a || null === (n = a.logo) || void 0 === n ? void 0 : n.source) && (null === N || void 0 === N ? void 0 : N.logo)) {
                            var d, u = (0, i.QW)(null === N || void 0 === N ? void 0 : N.logo);
                            return (0, l.jsx)(s(), {
                                href: "/",
                                children: (0, l.jsx)("a", {
                                    className: (0, i.AK)("flex", c),
                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                    children: u && (0, l.jsx)(b.yA, {
                                        src: u,
                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                        height: null === a || void 0 === a || null === (d = a.logo) || void 0 === d ? void 0 : d.height
                                    })
                                })
                            })
                        }
                        if ("image" === (null === a || void 0 === a || null === (t = a.logo) || void 0 === t ? void 0 : t.type) && "upload" === (null === a || void 0 === a || null === (o = a.logo) || void 0 === o ? void 0 : o.source) && (null === a || void 0 === a || null === (r = a.logo) || void 0 === r ? void 0 : r.media)) {
                            var v, f, m = (0, i.QW)(null === a || void 0 === a || null === (v = a.logo) || void 0 === v ? void 0 : v.media);
                            return (0, l.jsx)(s(), {
                                href: "/",
                                children: (0, l.jsx)("a", {
                                    className: (0, i.AK)("flex", c),
                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                    children: m && (0, l.jsx)(b.yA, {
                                        src: m,
                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                        height: null === a || void 0 === a || null === (f = a.logo) || void 0 === f ? void 0 : f.height
                                    })
                                })
                            })
                        }
                        return (0, l.jsx)(b.TR, {
                            className: c,
                            logo: null === a || void 0 === a ? void 0 : a.logo,
                            text: null === a || void 0 === a ? void 0 : a.siteName,
                            location: $.logoFrom || "footer",
                            color: I,
                            forceRender: null === H || void 0 === H ? void 0 : H.forceRender
                        })
                    },
                    V = function() {
                        if (0 === (null === q || void 0 === q ? void 0 : q.length)) return (0, l.jsx)(l.Fragment, {});
                        var e = (0, i.h)(B, -10);
                        return e !== I && e !== B || (e = (0, i.h)(B, 10)), (0, l.jsx)("ul", {
                            className: (0, i.AK)("flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-6", "stacked-right" === (null === $ || void 0 === $ ? void 0 : $.style) && "justify-end items-end", ("stacked-center" === (null === $ || void 0 === $ ? void 0 : $.style) || "simple-center" === (null === $ || void 0 === $ ? void 0 : $.style)) && "justify-center items-center"),
                            style: {
                                color: I
                            },
                            children: null === q || void 0 === q ? void 0 : q.filter((function(e) {
                                return "nested" !== e.type
                            })).map((function(n) {
                                var t;
                                return (0, l.jsx)("li", {
                                    className: "border-b-2 pb-1.5 -mb-2",
                                    style: {
                                        borderColor: n.current ? "".concat(I) : "transparent"
                                    },
                                    children: "parent" === n.type ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(g.Z, {
                                            className: "!hidden lg:!inline-block",
                                            openUp: !0,
                                            buttonClassName: "inline-flex items-center gap-2",
                                            itemsContainerClass: "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                            button: (0, l.jsxs)(l.Fragment, {
                                                children: [(0, l.jsx)("span", {
                                                    className: "body-normal whitespace-nowrap",
                                                    children: n.name
                                                }), (0, l.jsx)(u.Z, {
                                                    className: "w-4 h-4"
                                                })]
                                            }),
                                            itemsContainerStyle: {
                                                backgroundColor: e,
                                                color: I
                                            },
                                            children: null === (t = n.nests) || void 0 === t ? void 0 : t.map((function(e) {
                                                return (0, l.jsx)(m.v.Item, {
                                                    children: (0, l.jsx)(s(), {
                                                        href: e.href,
                                                        legacyBehavior: !1,
                                                        className: "block py-2 body-normal border-b-2",
                                                        style: {
                                                            borderColor: e.current ? "".concat(I) : "transparent"
                                                        },
                                                        target: e.forceRender ? "_parent" : "_self",
                                                        children: e.name
                                                    })
                                                }, "page-link-".concat(e.href))
                                            }))
                                        }), (0, l.jsxs)("button", {
                                            className: "inline-flex lg:hidden items-center gap-2",
                                            onClick: function() {
                                                S(!0), L(n.nests)
                                            },
                                            children: [(0, l.jsx)("span", {
                                                className: "body-normal",
                                                children: n.name
                                            }), (0, l.jsx)(v.Z, {
                                                className: "w-4 h-4",
                                                "aria-hidden": "true"
                                            })]
                                        })]
                                    }) : (0, l.jsx)(s(), {
                                        href: n.href,
                                        children: (0, l.jsx)("a", {
                                            className: "block body-normal",
                                            target: n.forceRender ? "_parent" : "_self",
                                            children: n.name
                                        })
                                    })
                                }, "footer-page-link-".concat(n.href))
                            }))
                        })
                    },
                    Q = function() {
                        return (null === N || void 0 === N ? void 0 : N.social) && 0 !== (null === N || void 0 === N ? void 0 : N.social.length) ? (0, l.jsx)("ul", {
                            className: (0, i.AK)("flex items-center gap-x-4 gap-y-2 flex-wrap", "stacked-right" === (null === $ || void 0 === $ ? void 0 : $.style) && "justify-end", ("stacked-center" === (null === $ || void 0 === $ ? void 0 : $.style) || "simple-center" === (null === $ || void 0 === $ ? void 0 : $.style)) && "justify-center"),
                            children: Array.isArray(N.social) && N.social.map((function(e, n) {
                                var t = p.W.find((function(n) {
                                        return n.id === e.type
                                    })),
                                    o = e.link;
                                return "custom" !== e.type && (o = (o = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === t || void 0 === t ? void 0 : t.host, ""), o = "https://".concat(null === t || void 0 === t ? void 0 : t.host, "/").concat(o)), (0, l.jsx)("li", {
                                    children: (0, l.jsx)(s(), {
                                        href: o,
                                        children: (0, l.jsx)("a", {
                                            target: "_blank",
                                            children: (0, l.jsx)(p.Q, {
                                                icon: e,
                                                color: I,
                                                settings: N.socialSettings
                                            })
                                        })
                                    })
                                }, "social-icon-header-".concat(n))
                            }))
                        }) : (0, l.jsx)(l.Fragment, {})
                    },
                    G = function() {
                        return !1 === $.madeWithDurable ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsxs)("p", {
                            className: (0, i.AK)("body-normal lg:text-right whitespace-nowrap", ("stacked-center" === (null === $ || void 0 === $ ? void 0 : $.style) || "simple-center" === (null === $ || void 0 === $ ? void 0 : $.style)) && "!text-center", "stacked-left" === (null === $ || void 0 === $ ? void 0 : $.style) && "!text-left"),
                            children: [(0, l.jsxs)("span", {
                                children: [C("footer.madeWith"), "\xa0"]
                            }), (0, l.jsx)(s(), {
                                href: "https://durable.co?referrer=".concat(encodeURIComponent(A)),
                                children: (0, l.jsx)("a", {
                                    target: "_blank",
                                    className: "underline",
                                    style: {
                                        color: I
                                    },
                                    children: "Durable"
                                })
                            })]
                        })
                    },
                    J = function() {
                        return (0, l.jsx)(d.Z, {
                            className: "break-normal",
                            button: $.button,
                            block: $,
                            website: N,
                            fallbackSize: "md"
                        })
                    },
                    Y = function() {
                        S(!1), L(null)
                    };
                return (0, r.useEffect)((function() {
                    O && Y()
                }), [O]), (0, r.useEffect)((function() {
                    _(null === location || void 0 === location ? void 0 : location.origin)
                }), []), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("footer", {
                        className: "flex flex-1",
                        children: (0, l.jsxs)("div", {
                            ref: D,
                            id: "website-footer",
                            className: "relative flex-1 z-10 break-word",
                            style: {
                                color: I
                            },
                            children: [(0, l.jsx)(x.Z, {
                                block: $,
                                website: N,
                                onChange: function(e) {
                                    var n, t;
                                    E((null === e || void 0 === e || null === (n = e.overlay) || void 0 === n ? void 0 : n.color1) || "#FFFFFF"), W((0, i.$O)((null === e || void 0 === e || null === (t = e.overlay) || void 0 === t ? void 0 : t.color1) || "#FFFFFF"))
                                }
                            }), (0, l.jsx)("div", {
                                className: (0, i.AK)("relative z-10 container mx-auto", (0, i.bG)(null === $ || void 0 === $ ? void 0 : $.spacing)),
                                children: "split-left" === (null === $ || void 0 === $ ? void 0 : $.style) ? (0, l.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row lg:justify-between gap-12",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-start gap-12 lg:gap-6",
                                        children: [U(), (0, l.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row lg:items-center gap-12",
                                            children: [V(), $.showSocial && Q(), (null === $ || void 0 === $ ? void 0 : $.button) && J()]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col gap-6",
                                        children: [!!$.additionalDetails && (0, l.jsx)("pre", {
                                            className: "body-normal lg:max-w-70 xl:max-w-120 lg:text-right",
                                            style: {
                                                color: I
                                            },
                                            children: null === $ || void 0 === $ ? void 0 : $.additionalDetails
                                        }), G()]
                                    })]
                                }) : "stacked-right" === $.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-end items-end gap-12 text-right",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-end gap-6",
                                        children: [U(), !!$.additionalDetails && (0, l.jsx)("pre", {
                                            className: "body-normal",
                                            style: {
                                                color: I
                                            },
                                            children: null === $ || void 0 === $ ? void 0 : $.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col justify-end gap-12 lg:gap-14",
                                        children: [V(), $.showSocial && Q(), (null === $ || void 0 === $ ? void 0 : $.button) && (0, l.jsx)("div", {
                                            children: J()
                                        })]
                                    }), G()]
                                }) : "stacked-center" === $.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 text-center",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-center gap-6",
                                        children: [U(), !!$.additionalDetails && (0, l.jsx)("pre", {
                                            className: "body-normal",
                                            style: {
                                                color: I
                                            },
                                            children: null === $ || void 0 === $ ? void 0 : $.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col justify-center gap-12 lg:gap-14",
                                        children: [V(), $.showSocial && Q(), (null === $ || void 0 === $ ? void 0 : $.button) && (0, l.jsx)("div", {
                                            children: J()
                                        })]
                                    }), G()]
                                }) : "stacked-left" === $.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col items-start gap-12 text-left",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col items-start gap-6",
                                        children: [U(), !!$.additionalDetails && (0, l.jsx)("pre", {
                                            className: "body-normal",
                                            style: {
                                                color: I
                                            },
                                            children: null === $ || void 0 === $ ? void 0 : $.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col items-start gap-12 lg:gap-14",
                                        children: [V(), $.showSocial && Q(), (null === $ || void 0 === $ ? void 0 : $.button) && (0, l.jsx)("div", {
                                            children: J()
                                        })]
                                    }), G()]
                                }) : "simple-right" === $.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row gap-12",
                                    children: [(0, l.jsxs)("div", {
                                        className: (0, i.AK)("flex flex-col lg:flex-row items-start lg:items-center gap-6", (null === $ || void 0 === $ ? void 0 : $.showLogo) ? "lg:gap-10" : "lg:gap-2"),
                                        children: [U(), !!$.additionalDetails && (0, l.jsxs)(l.Fragment, {
                                            children: [!(null === $ || void 0 === $ ? void 0 : $.showLogo) && (0, l.jsx)("span", {
                                                className: "hidden lg:inline-block",
                                                children: "\xb7"
                                            }), (0, l.jsx)("div", {
                                                className: "body-normal lg:max-w-70 xl:max-w-120",
                                                style: {
                                                    color: I
                                                },
                                                children: null === $ || void 0 === $ ? void 0 : $.additionalDetails
                                            })]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex-1 w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 justify-end",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",
                                            children: [V(), $.showSocial && Q(), (null === $ || void 0 === $ ? void 0 : $.button) && J()]
                                        }), G()]
                                    })]
                                }) : "simple-center" === $.style ? (0, l.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 text-center",
                                    children: [(0, l.jsxs)("div", {
                                        className: (0, i.AK)("flex flex-col justify-center lg:items-center gap-6", (null === $ || void 0 === $ ? void 0 : $.showLogo) ? "lg:gap-6" : "lg:flex-row lg:gap-2"),
                                        children: [U(), !!$.additionalDetails && (0, l.jsxs)(l.Fragment, {
                                            children: [!(null === $ || void 0 === $ ? void 0 : $.showLogo) && (0, l.jsx)("span", {
                                                className: "hidden lg:inline-block",
                                                children: "\xb7"
                                            }), (0, l.jsx)("div", {
                                                className: "body-normal lg:max-w-[50vw]",
                                                style: {
                                                    color: I
                                                },
                                                children: null === $ || void 0 === $ ? void 0 : $.additionalDetails
                                            })]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-14",
                                        children: [V(), $.showSocial && Q(), (null === $ || void 0 === $ ? void 0 : $.button) && J(), G()]
                                    })]
                                }) : (0, l.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row items-start lg:justify-between gap-12",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex flex-col gap-6 items-start lg:max-w-[30vw]",
                                        children: [U(), !!(null === $ || void 0 === $ ? void 0 : $.additionalDetails) && (0, l.jsx)("pre", {
                                            className: "body-normal lg:max-w-70 xl:max-w-120",
                                            style: {
                                                color: I
                                            },
                                            children: null === $ || void 0 === $ ? void 0 : $.additionalDetails
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-col gap-12 lg:gap-6",
                                        children: [(0, l.jsxs)("div", {
                                            className: "flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end",
                                            children: [V(), $.showSocial && Q(), (null === $ || void 0 === $ ? void 0 : $.button) && J()]
                                        }), G()]
                                    })]
                                })
                            }), (0, l.jsx)(y.iz, {
                                contentRef: D,
                                previousDivider: null === k || void 0 === k ? void 0 : k.divider,
                                previousBorder: null === k || void 0 === k ? void 0 : k.border,
                                dividerUniqueId: "website-footer-divider"
                            })]
                        })
                    }), (0, l.jsx)(h.V, {
                        open: Z,
                        onClose: Y,
                        className: "relative z-[30000] h-full",
                        children: (0, l.jsx)(h.V.Panel, {
                            className: "fixed inset-0 flex flex-col h-full",
                            style: {
                                backgroundColor: B,
                                color: I
                            },
                            children: (0, l.jsxs)("div", {
                                className: "flex-1 flex flex-col h-full container mx-auto pb-6",
                                children: [(0, l.jsxs)("div", {
                                    className: (0, i.AK)("items-center gap-3 py-6", "left" !== (null === K || void 0 === K ? void 0 : K.style) ? "grid" : "flex justify-between"),
                                    style: "left" !== (null === K || void 0 === K ? void 0 : K.style) ? {
                                        gridTemplateColumns: "1fr auto 1fr"
                                    } : {},
                                    children: [("center" === (null === K || void 0 === K ? void 0 : K.style) || "full-center" === (null === K || void 0 === K ? void 0 : K.style)) && (0, l.jsx)("div", {}), function() {
                                        var e, n, t, o, r, a = (0, i.$K)(null === K || void 0 === K ? void 0 : K.logo) ? K : (0, b.i6)(K, N);
                                        if ("image" === (null === a || void 0 === a || null === (e = a.logo) || void 0 === e ? void 0 : e.type) && "branding" === (null === a || void 0 === a || null === (n = a.logo) || void 0 === n ? void 0 : n.source) && (null === N || void 0 === N ? void 0 : N.logo)) {
                                            var c, d = (0, i.QW)(null === N || void 0 === N ? void 0 : N.logo);
                                            return (0, l.jsx)(s(), {
                                                href: "/",
                                                children: (0, l.jsx)("a", {
                                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                                    children: d && (0, l.jsx)(b.yA, {
                                                        src: d,
                                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                                        height: null === a || void 0 === a || null === (c = a.logo) || void 0 === c ? void 0 : c.height
                                                    })
                                                })
                                            })
                                        }
                                        if ("image" === (null === a || void 0 === a || null === (t = a.logo) || void 0 === t ? void 0 : t.type) && "upload" === (null === a || void 0 === a || null === (o = a.logo) || void 0 === o ? void 0 : o.source) && (null === a || void 0 === a || null === (r = a.logo) || void 0 === r ? void 0 : r.media)) {
                                            var u, v, f = (0, i.QW)(null === a || void 0 === a || null === (u = a.logo) || void 0 === u ? void 0 : u.media);
                                            return (0, l.jsx)(s(), {
                                                href: "/",
                                                children: (0, l.jsx)("a", {
                                                    target: (null === H || void 0 === H ? void 0 : H.forceRender) ? "_parent" : "_self",
                                                    children: f && (0, l.jsx)(b.yA, {
                                                        src: f,
                                                        text: null === a || void 0 === a ? void 0 : a.siteName,
                                                        height: null === a || void 0 === a || null === (v = a.logo) || void 0 === v ? void 0 : v.height
                                                    })
                                                })
                                            })
                                        }
                                        return (0, l.jsx)(b.TR, {
                                            logo: null === a || void 0 === a ? void 0 : a.logo,
                                            text: null === a || void 0 === a ? void 0 : a.siteName,
                                            color: I,
                                            forceRender: null === H || void 0 === H ? void 0 : H.forceRender
                                        })
                                    }(), (0, l.jsx)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: (0, l.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: I
                                            },
                                            onClick: Y,
                                            children: (0, l.jsx)(f.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    })]
                                }), (0, l.jsx)("ul", {
                                    className: (0, i.AK)("flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto", "center" === (null === $ || void 0 === $ ? void 0 : $.style) || "full-center" === (null === $ || void 0 === $ ? void 0 : $.style) ? "text-center" : ""),
                                    style: (0, o.Z)({
                                        color: I
                                    }, (0, i.SV)(N)),
                                    children: null === T || void 0 === T ? void 0 : T.map((function(e) {
                                        return (0, l.jsx)("li", {
                                            className: (0, i.AK)("body-large py-2 border-b-2 -mb-2"),
                                            style: {
                                                borderColor: e.current ? "".concat(I) : "transparent"
                                            },
                                            children: (0, l.jsx)(s(), {
                                                href: e.href,
                                                children: (0, l.jsx)("a", {
                                                    className: "block w-full",
                                                    target: e.forceRender ? "_parent" : "_self",
                                                    children: e.name
                                                })
                                            })
                                        }, "page-link-".concat(e.href))
                                    }))
                                })]
                            })
                        })
                    })]
                })
            }
        },
        62246: function(e, n, t) {
            var o = t(67294),
                l = (t(11942), t(91033));
            n.Z = function(e, n) {
                var t = (0, o.useState)(!1),
                    i = t[0],
                    r = t[1],
                    a = (0, o.useRef)(e);
                a.current = e;
                var s = function(e) {
                    var n = !0,
                        t = !1,
                        o = void 0;
                    try {
                        for (var l, s = e[Symbol.iterator](); !(n = (l = s.next()).done); n = !0) {
                            var c = l.value;
                            document.body.contains(c.target) || r(!i), a.current(c.target)
                        }
                    } catch (d) {
                        t = !0, o = d
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (t) throw o
                        }
                    }
                };
                (0, o.useEffect)((function() {
                    if (n) {
                        var e = new l.Z(s),
                            t = Array.isArray(n) ? n : [n];
                        return t.forEach((function(n) {
                                return n.current && e.observe(n.current)
                            })),
                            function() {
                                t.forEach((function(n) {
                                    return n.current && e.unobserve(n.current)
                                })), e.disconnect()
                            }
                    }
                }), [n, i])
            }
        },
        23226: function(e, n, t) {
            var o = t(34727),
                l = t(75815),
                i = t(67573),
                r = t(97582),
                a = t(87066),
                s = t(83454);
            n.Z = function e(n, t) {
                (0, l.Z)(this, e);
                var c = this;
                (0, i.Z)(this, "get", function() {
                    var e = (0, o.Z)((function(e, n) {
                        return (0, r.__generator)(this, (function(t) {
                            return [2, new Promise((function(t, l) {
                                a.Z.get(e, {
                                    baseURL: c.baseURL,
                                    params: n || {},
                                    headers: {
                                        "Content-Type": "application/json",
                                        Accept: "application/json"
                                    }
                                }).then(function() {
                                    var e = (0, o.Z)((function(e) {
                                        return (0, r.__generator)(this, (function(n) {
                                            return t(e.data), [2]
                                        }))
                                    }));
                                    return function(n) {
                                        return e.apply(this, arguments)
                                    }
                                }()).catch((function(e) {
                                    e.response ? t({
                                        status: !1,
                                        message: e.response.data.message
                                    }) : e.request ? t({
                                        status: !1,
                                        message: e.request.message
                                    }) : t({
                                        status: !1,
                                        message: e.message
                                    }), t({
                                        status: !1,
                                        message: e.config
                                    })
                                }))
                            }))]
                        }))
                    }));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }());
                var d = this;
                (0, i.Z)(this, "post", function() {
                    var e = (0, o.Z)((function(e, n, t) {
                        return (0, r.__generator)(this, (function(o) {
                            return [2, new Promise((function(o, l) {
                                a.Z.post(e, n || {}, {
                                    baseURL: d.baseURL,
                                    headers: {
                                        "Content-Type": t ? "multipart/form-data" : "application/json",
                                        Accept: "application/json, multipart/form-data"
                                    }
                                }).then((function(e) {
                                    o(e.data)
                                })).catch((function(e) {
                                    e.response ? o(e.response.data) : e.request ? o({
                                        status: !1,
                                        message: e.request
                                    }) : o({
                                        status: !1,
                                        message: e.message
                                    }), o({
                                        status: !1,
                                        message: e.config
                                    })
                                }))
                            }))]
                        }))
                    }));
                    return function(n, t, o) {
                        return e.apply(this, arguments)
                    }
                }()), a.Z.defaults.withCredentials = null === t || void 0 === t || t, this.baseURL = n || s.env.API_URL || "https://api.durable.co"
            }
        },
        11942: function(e, n, t) {
            t.d(n, {
                uR: function() {
                    return de
                },
                nJ: function() {
                    return ae
                },
                mQ: function() {
                    return ce
                },
                $O: function() {
                    return fe
                },
                s0: function() {
                    return Oe
                },
                _y: function() {
                    return se
                },
                h: function() {
                    return ke
                },
                SV: function() {
                    return ye
                },
                AK: function() {
                    return ue
                },
                Ds: function() {
                    return ze
                },
                p$: function() {
                    return pe
                },
                n3: function() {
                    return Ze
                },
                rE: function() {
                    return _e
                },
                e0: function() {
                    return Te
                },
                sd: function() {
                    return Le
                },
                dz: function() {
                    return Be
                },
                ej: function() {
                    return We
                },
                yW: function() {
                    return Fe
                },
                pr: function() {
                    return je
                },
                s4: function() {
                    return be
                },
                Ae: function() {
                    return Pe
                },
                CE: function() {
                    return Re
                },
                QW: function() {
                    return Me
                },
                Qm: function() {
                    return Ce
                },
                G0: function() {
                    return we
                },
                ow: function() {
                    return Ee
                },
                bG: function() {
                    return Ae
                },
                A2: function() {
                    return Se
                },
                j2: function() {
                    return xe
                },
                mR: function() {
                    return me
                },
                jn: function() {
                    return Ne
                },
                $K: function() {
                    return Ie
                },
                s: function() {
                    return he
                },
                d8: function() {
                    return De
                },
                ac: function() {
                    return ge
                },
                oH: function() {
                    return ve
                }
            });
            var o = t(14251),
                l = t(52875),
                i = t(69779),
                r = t(85893),
                a = t(67294),
                s = (t(79981), t(34727)),
                c = t(44747),
                d = t(97582),
                u = t(9008),
                v = t.n(u),
                f = t(25935),
                m = t(23226),
                h = t(85518),
                g = t(11163),
                p = t.n(g),
                x = (t(40993), t(42419)),
                y = t(28521),
                b = t(41968),
                j = t(28666),
                w = t(47041),
                N = t(52077),
                k = t(90387),
                C = t(41664),
                F = t.n(C),
                Z = t(17258),
                S = t(62934),
                R = t(32713),
                A = t(92122),
                _ = t(59956),
                P = t(72434),
                T = t(73423),
                L = t(83339),
                M = t(74007),
                B = t(75654),
                E = t(23493),
                z = t(75871),
                I = t(11355),
                W = t(41984),
                D = t(3677),
                O = t(89774),
                $ = {
                    fontFamily: "var(--body-fontFamily)",
                    fontWeight: "var(--body-fontWeight, 400)",
                    fontStyle: "var(--body-fontStyle, normal)"
                };

            function K(e) {
                var n, t, i = e.open,
                    s = e.block,
                    c = e.website,
                    d = e.background,
                    u = e.textColor,
                    v = e.links,
                    f = e.headerHeight,
                    m = e.currentNests,
                    h = e.setCurrentNests,
                    g = (0, O.$G)("common").t,
                    p = (null === s || void 0 === s ? void 0 : s.navStyle) || "default",
                    x = function(e, n) {
                        var t = me(n, (null === p || void 0 === p ? void 0 : p.includes("subtle")) ? 10 : 80);
                        return (0, l.Z)((0, o.Z)({}, $), {
                            borderColor: e.current ? n : "transparent",
                            backgroundColor: e.current && "default" !== p ? t : "transparent",
                            color: e.current && p.includes("bold") ? fe(n) : "currentColor"
                        })
                    };
                return (0, r.jsx)(I.u, {
                    show: i,
                    as: a.Fragment,
                    children: (0, r.jsx)("div", {
                        className: "absolute inset-0 h-screen",
                        children: (0, r.jsx)(I.u.Child, {
                            as: a.Fragment,
                            enter: "transition-all ease-in-out duration-500",
                            enterFrom: "-translate-y-full opacity-0",
                            enterTo: "translate-y-0 opacity-100",
                            leave: "transition-all ease-in-out duration-500 delay-100",
                            leaveFrom: "translate-y-0 opacity-100",
                            leaveTo: "-translate-y-full opacity-0",
                            children: (0, r.jsx)("div", {
                                className: "flex flex-col h-full",
                                style: {
                                    backgroundColor: d,
                                    color: u
                                },
                                children: (0, r.jsx)(I.u.Child, {
                                    as: a.Fragment,
                                    enter: "transition-all ease-in-out duration-500 delay-400",
                                    enterFrom: "-translate-y-10 opacity-0",
                                    enterTo: "translate-y-0 opacity-100",
                                    leave: "transition-all ease-in-out duration-300",
                                    leaveFrom: "translate-y-0 opacity-100",
                                    leaveTo: "-translate-y-10 opacity-0",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex-1 flex flex-col gap-8 h-full w-full px-5 md:px-6",
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                height: f
                                            }
                                        }), (null === v || void 0 === v ? void 0 : v.length) > 0 && (0, r.jsxs)("div", {
                                            className: "flex-1 overflow-auto no-scrollbar",
                                            children: [(0, r.jsx)(I.u, {
                                                as: a.Fragment,
                                                show: !m,
                                                enter: "transition-all duration-300",
                                                enterFrom: "-translate-y-10 opacity-0",
                                                enterTo: "translate-y-0 opacity-100",
                                                children: (0, r.jsx)("ul", {
                                                    className: "flex flex-col items-center justify-center gap-8 h-full text-center",
                                                    style: {
                                                        color: u
                                                    },
                                                    children: 1 === v.length && "parent" === v[0].type ? (0, r.jsxs)(r.Fragment, {
                                                        children: [(0, r.jsx)("li", {
                                                            className: "heading-normal py-2",
                                                            style: {
                                                                borderColor: v[0].current ? "".concat(u) : "transparent"
                                                            },
                                                            children: (0, r.jsx)("span", {
                                                                className: "block w-full",
                                                                children: v[0].name
                                                            })
                                                        }, "page-link-".concat(v[0].href)), null === (n = v[0].nests) || void 0 === n ? void 0 : n.map((function(e) {
                                                            return (0, r.jsx)("li", {
                                                                className: ue("relative heading-large py-2", "default" !== p ? "px-3" : "", "default" === p ? "after:left-1/2 after:-translate-x-1/2" : "", e.current && "default" === p ? "active-menu-item" : ""),
                                                                style: x(e, u),
                                                                children: (0, r.jsx)(F(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))]
                                                    }) : (0, r.jsx)(r.Fragment, {
                                                        children: null === v || void 0 === v ? void 0 : v.map((function(e) {
                                                            return (0, r.jsx)("li", {
                                                                className: ue("relative heading-large py-2", "default" !== p ? "px-3" : "", "default" === p ? "after:left-1/2 after:-translate-x-1/2" : "", e.current && "default" === p ? "active-menu-item" : ""),
                                                                style: x(e, u),
                                                                children: "parent" === e.type && e.nests.length > 0 ? (0, r.jsxs)("button", {
                                                                    className: "inline-flex items-center gap-2",
                                                                    onClick: function() {
                                                                        return h(e.nests)
                                                                    },
                                                                    children: [(0, r.jsx)("span", {
                                                                        children: e.name
                                                                    }), (0, r.jsx)(W.Z, {
                                                                        className: "w-4 h-4"
                                                                    })]
                                                                }) : (0, r.jsx)(F(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))
                                                    })
                                                })
                                            }), (0, r.jsx)(I.u, {
                                                as: a.Fragment,
                                                show: !!m,
                                                enter: "transition-all duration-300",
                                                enterFrom: "-translate-y-10 opacity-0",
                                                enterTo: "translate-y-0 opacity-100",
                                                children: (0, r.jsx)("ul", {
                                                    className: "flex flex-col items-center justify-center gap-8 w-full text-center",
                                                    style: {
                                                        color: u
                                                    },
                                                    children: (0, r.jsxs)(r.Fragment, {
                                                        children: [m && (0, r.jsx)("li", {
                                                            children: (0, r.jsxs)("button", {
                                                                className: ue("flex items-center justify-center gap-2 w-full py-2 heading-medium", "default" !== p ? "px-3" : ""),
                                                                style: $,
                                                                onClick: function() {
                                                                    return h(null)
                                                                },
                                                                children: [(0, r.jsx)(D.Z, {
                                                                    className: "w-4 h-4",
                                                                    "aria-hidden": "true"
                                                                }), (0, r.jsx)("span", {
                                                                    children: g("back")
                                                                })]
                                                            })
                                                        }), null === m || void 0 === m ? void 0 : m.map((function(e) {
                                                            return (0, r.jsx)("li", {
                                                                className: ue("relative heading-large py-2", "default" !== p ? "px-3" : "", "default" === p ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === p ? "active-menu-item" : ""),
                                                                style: x(e, u),
                                                                children: (0, r.jsx)(F(), {
                                                                    className: "block w-full",
                                                                    href: e.href,
                                                                    legacyBehavior: !1,
                                                                    target: e.forceRender ? "_parent" : "_self",
                                                                    children: e.name
                                                                })
                                                            }, "page-link-".concat(e.href))
                                                        }))]
                                                    })
                                                })
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: ue("flex flex-col items-center max-w-full", (null === v || void 0 === v ? void 0 : v.length) > 0 ? "" : "h-full justify-center"),
                                            children: (null === s || void 0 === s ? void 0 : s.showSocial) && (null === (t = c.social) || void 0 === t ? void 0 : t.length) > 0 && (0, r.jsx)("ul", {
                                                className: "flex items-center gap-x-4 gap-y-2 flex-wrap py-6",
                                                children: Array.isArray(c.social) && c.social.map((function(e, n) {
                                                    var t = B.W.find((function(n) {
                                                            return n.id === e.type
                                                        })),
                                                        o = e.link;
                                                    return "custom" !== e.type && (o = (o = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === t || void 0 === t ? void 0 : t.host, ""), o = "https://".concat(null === t || void 0 === t ? void 0 : t.host, "/").concat(o)), (0, r.jsx)("li", {
                                                        children: (0, r.jsx)(F(), {
                                                            href: o,
                                                            children: (0, r.jsx)("a", {
                                                                target: "_blank",
                                                                children: (0, r.jsx)(B.Q, {
                                                                    icon: e,
                                                                    color: u,
                                                                    settings: c.socialSettings
                                                                })
                                                            })
                                                        })
                                                    }, "social-icon-header-".concat(n))
                                                }))
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })
            }
            var H = t(27507),
                q = t(43751);

            function U(e) {
                var n, t, o, l, i = e.open,
                    s = e.setOpen,
                    c = e.block,
                    d = e.website,
                    u = e.background,
                    v = e.textColor,
                    f = e.isSmall,
                    m = e.isMobile,
                    h = e.isEdgeCase,
                    g = e.renderLogo,
                    p = e.links,
                    x = e.buttons,
                    y = e.buttonsEnabled,
                    b = e.isHeaderTransparent,
                    j = e.combineWithNextBlock,
                    w = e.currentNests,
                    k = e.setCurrentNests,
                    C = (0, O.$G)("common").t,
                    Z = (0, a.useRef)(null),
                    S = (null === c || void 0 === c ? void 0 : c.navStyle) || "default",
                    R = null === c || void 0 === c ? void 0 : c.style,
                    A = null === c || void 0 === c ? void 0 : c.menu,
                    _ = function(e, n) {
                        var t = me(n, (null === S || void 0 === S ? void 0 : S.includes("subtle")) ? 10 : 80);
                        return {
                            borderColor: e.current ? n : "transparent",
                            backgroundColor: e.current && "default" !== S ? t : "transparent",
                            color: e.current && S.includes("bold") ? fe(n) : "currentColor"
                        }
                    };
                return (0, r.jsx)(I.u, {
                    show: i,
                    as: "div",
                    children: (0, r.jsxs)(H.V, {
                        className: "relative z-[30000] h-full",
                        initialFocus: Z,
                        onClose: function() {
                            return s(!1)
                        },
                        children: [(0, r.jsx)(I.u.Child, {
                            as: a.Fragment,
                            enter: "ease-in-out duration-500",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-500",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, r.jsx)(H.V.Overlay, {
                                className: "fixed inset-0 bg-black bg-opacity-5 transition-opacity"
                            })
                        }), (0, r.jsx)(I.u.Child, {
                            as: a.Fragment,
                            enter: "transform transition transition-all ease-in-out duration-350",
                            enterFrom: (null === c || void 0 === c || null === (n = c.menu) || void 0 === n ? void 0 : n.collapse) && !f ? R.includes("left") ? "translate-x-full" : "-translate-x-full" : "translate-x-0 opacity-0",
                            enterTo: "translate-x-0 opacity-100",
                            leave: "transform transition transition-all ease-in-out duration-350",
                            leaveFrom: "translate-x-0 opacity-100",
                            leaveTo: (null === c || void 0 === c || null === (t = c.menu) || void 0 === t ? void 0 : t.collapse) && !f ? R.includes("left") ? "translate-x-full" : "-translate-x-full" : "translate-x-0 opacity-0",
                            children: (0, r.jsx)(H.V.Panel, {
                                className: ue("fixed flex flex-col shadow-lg", (null === A || void 0 === A ? void 0 : A.collapse) && !f ? R.includes("left") ? "top-0 bottom-0 right-0 w-80" : "top-0 left-0 bottom-0 w-80" : h ? "top-0 left-0 right-0" : "inset-0 h-full"),
                                style: {
                                    backgroundColor: u,
                                    color: v
                                },
                                children: (0, r.jsxs)("div", {
                                    ref: Z,
                                    className: ue("flex-1 flex flex-col h-full mx-auto pb-6", (null === c || void 0 === c ? void 0 : c.fullWidth) ? "w-full px-6" : "container"),
                                    children: [(0, r.jsxs)("div", {
                                        className: ue("items-center", V(null === c || void 0 === c ? void 0 : c.spacing), R.includes("left") ? "flex justify-between" : "grid"),
                                        style: R.includes("left") ? {} : {
                                            gridTemplateColumns: "1fr auto 1fr"
                                        },
                                        children: [
                                            ["center", "full-center"].includes(R) && (0, r.jsx)("div", {}), (0, r.jsx)("div", {
                                                className: "lg:invisible",
                                                children: g(!0)
                                            }), (0, r.jsx)("div", {
                                                className: "ml-auto",
                                                children: (0, r.jsx)("button", {
                                                    className: "inline-flex items-center justify-center p-2 rounded-md outline-none",
                                                    style: {
                                                        color: v
                                                    },
                                                    onClick: function() {
                                                        return s(!1)
                                                    },
                                                    children: (0, r.jsx)(q.Z, {
                                                        className: "block h-5 w-5",
                                                        "aria-hidden": "true"
                                                    })
                                                })
                                            })
                                        ]
                                    }), (null === p || void 0 === p ? void 0 : p.length) > 0 && (0, r.jsxs)("div", {
                                        className: "flex-1 py-6 overflow-auto",
                                        children: [(0, r.jsx)(I.u, {
                                            as: "div",
                                            show: !w,
                                            enter: "transition-opacity",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            children: (0, r.jsx)("ul", {
                                                className: ue("flex flex-col justify-center lg:justify-start gap-3 w-full", f && ["center", "full-center"].includes(R) ? "text-center" : ""),
                                                style: {
                                                    color: v
                                                },
                                                children: 1 === p.length && "parent" === p[0].type ? (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsx)("li", {
                                                        className: "text-xl lg:!text-sm font-medium py-2",
                                                        style: {
                                                            borderColor: p[0].current ? "".concat(v) : "transparent"
                                                        },
                                                        children: (0, r.jsx)("span", {
                                                            className: "block w-full",
                                                            children: p[0].name
                                                        })
                                                    }, "page-link-".concat(p[0].href)), null === (o = p[0].nests) || void 0 === o ? void 0 : o.map((function(e) {
                                                        return (0, r.jsx)("li", {
                                                            className: ue("relative body-large py-2", "default" !== S ? "px-3" : "", ["center", "full-center"].includes(R) && "default" === S ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === S ? "active-menu-item" : ""),
                                                            style: _(e, v),
                                                            children: (0, r.jsx)(F(), {
                                                                className: "block w-full",
                                                                href: e.href,
                                                                legacyBehavior: !1,
                                                                target: e.forceRender ? "_parent" : "_self",
                                                                children: e.name
                                                            })
                                                        }, "page-link-".concat(e.href))
                                                    }))]
                                                }) : (0, r.jsx)(r.Fragment, {
                                                    children: null === p || void 0 === p ? void 0 : p.map((function(e) {
                                                        return (0, r.jsx)("li", {
                                                            className: ue("relative body-large lg:!text-body py-2", "default" !== S ? "px-3" : "", ["center", "full-center"].includes(R) && "default" === S ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === S ? "active-menu-item" : ""),
                                                            style: _(e, v),
                                                            children: "parent" === e.type && e.nests.length > 0 ? (0, r.jsxs)("button", {
                                                                className: "inline-flex items-center gap-2",
                                                                onClick: function() {
                                                                    return k(e.nests)
                                                                },
                                                                children: [(0, r.jsx)("span", {
                                                                    children: e.name
                                                                }), (0, r.jsx)(W.Z, {
                                                                    className: "w-4 h-4",
                                                                    "aria-hidden": "true"
                                                                })]
                                                            }) : (0, r.jsx)(F(), {
                                                                className: "block w-full",
                                                                href: e.href,
                                                                legacyBehavior: !1,
                                                                target: e.forceRender ? "_parent" : "_self",
                                                                children: e.name
                                                            })
                                                        }, "page-link-".concat(e.href))
                                                    }))
                                                })
                                            })
                                        }), (0, r.jsx)(I.u, {
                                            as: "div",
                                            show: !!w,
                                            enter: "transition-opacity",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            children: (0, r.jsx)("ul", {
                                                className: ue("flex flex-col justify-center lg:justify-start gap-3 w-full", f && ["center", "full-center"].includes(R) ? "text-center" : ""),
                                                style: {
                                                    color: v
                                                },
                                                children: (0, r.jsxs)(r.Fragment, {
                                                    children: [w && (0, r.jsx)("li", {
                                                        children: (0, r.jsxs)("button", {
                                                            className: ue("flex items-center gap-2 w-full py-2 body-large lg:!text-body", "default" !== S ? "px-3" : "", f && ["center", "full-center"].includes(R) ? "justify-center" : ""),
                                                            onClick: function() {
                                                                return k(null)
                                                            },
                                                            children: [(0, r.jsx)(D.Z, {
                                                                className: "w-4 h-4",
                                                                "aria-hidden": "true"
                                                            }), (0, r.jsx)("span", {
                                                                children: C("back")
                                                            })]
                                                        })
                                                    }), null === w || void 0 === w ? void 0 : w.map((function(e) {
                                                        return (0, r.jsx)("li", {
                                                            className: ue("relative body-large lg:!text-body py-2", "default" !== S ? "px-3" : "", ["center", "full-center"].includes(R) && "default" === S ? "after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0" : "", e.current && "default" === S ? "active-menu-item" : ""),
                                                            style: _(e, v),
                                                            children: (0, r.jsx)(F(), {
                                                                className: "block w-full",
                                                                href: e.href,
                                                                legacyBehavior: !1,
                                                                target: e.forceRender ? "_parent" : "_self",
                                                                children: e.name
                                                            })
                                                        }, "page-link-".concat(e.href))
                                                    }))]
                                                })
                                            })
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: ue("flex flex-col max-w-[100vw] lg:hidden", ["center", "full-center"].includes(R) ? "items-center" : "", (null === p || void 0 === p ? void 0 : p.length) > 0 ? "" : "h-full justify-center"),
                                        children: [(null === c || void 0 === c ? void 0 : c.showSocial) && (null === (l = d.social) || void 0 === l ? void 0 : l.length) > 0 && (0, r.jsx)("ul", {
                                            className: "flex items-center gap-x-4 gap-y-2 flex-wrap py-6",
                                            children: Array.isArray(d.social) && d.social.map((function(e, n) {
                                                var t = B.W.find((function(n) {
                                                        return n.id === e.type
                                                    })),
                                                    o = e.link;
                                                return "custom" !== e.type && (o = (o = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === t || void 0 === t ? void 0 : t.host, ""), o = "https://".concat(null === t || void 0 === t ? void 0 : t.host, "/").concat(o)), (0, r.jsx)("li", {
                                                    children: (0, r.jsx)(F(), {
                                                        href: o,
                                                        children: (0, r.jsx)("a", {
                                                            target: "_blank",
                                                            children: (0, r.jsx)(B.Q, {
                                                                icon: e,
                                                                color: b && !m ? j.textColor : v,
                                                                settings: d.socialSettings
                                                            })
                                                        })
                                                    })
                                                }, "social-icon-header-".concat(n))
                                            }))
                                        }), (null === x || void 0 === x ? void 0 : x.length) > 0 && y && (0, r.jsx)("div", {
                                            className: ue("flex items-center flex-shrink-0 flex-wrap gap-4", ["center", "full-center"].includes(R) ? "items-center justify-center" : ""),
                                            children: null === x || void 0 === x ? void 0 : x.map((function(e, n) {
                                                return (0, r.jsx)(N.Z, {
                                                    button: e,
                                                    block: c,
                                                    website: d,
                                                    className: ue(["center", "full-center"].includes(R) ? "text-center" : "")
                                                }, "banner-button-".concat(n))
                                            }))
                                        }), (null === c || void 0 === c ? void 0 : c.button) && (0, r.jsx)("div", {
                                            className: "py-6",
                                            children: (0, r.jsx)(N.Z, {
                                                button: c.button,
                                                block: c,
                                                website: d
                                            })
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
            var V = function(e) {
                var n, t, o = (null === (n = z.b[null === e || void 0 === e ? void 0 : e.top]) || void 0 === n ? void 0 : n.top) || z.b.medium.top,
                    l = (null === (t = z.b[null === e || void 0 === e ? void 0 : e.bottom]) || void 0 === t ? void 0 : t.bottom) || z.b.medium.bottom;
                return "".concat(o, " ").concat(l)
            };

            function Q(e) {
                var n, t, o, l, i, s, c, d, u = e.website,
                    v = function() {
                        var e, n, t;
                        return (0, r.jsxs)("div", {
                            className: "ml-auto lg:hidden",
                            children: [(X && (null === G || void 0 === G ? void 0 : G.length) > 0 || (null === ie || void 0 === ie ? void 0 : ie.length) > 0 || (null === le || void 0 === le ? void 0 : le.showSocial) && Array.isArray(null === u || void 0 === u ? void 0 : u.social) && (null === u || void 0 === u || null === (e = u.social) || void 0 === e ? void 0 : e.length) > 1) && (0, r.jsx)("button", {
                                className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300",
                                style: {
                                    color: !ce && re ? H.textColor : j
                                },
                                onClick: function() {
                                    return g(!h)
                                },
                                children: h && "screen" === (null === le || void 0 === le || null === (n = le.menu) || void 0 === n ? void 0 : n.style) ? (0, r.jsx)(S.Z, {
                                    className: "w-5 h-5"
                                }) : be()
                            }), !X && 0 === (null === ie || void 0 === ie ? void 0 : ie.length) && (null === le || void 0 === le ? void 0 : le.showSocial) && Array.isArray(null === u || void 0 === u ? void 0 : u.social) && 1 === (null === u || void 0 === u || null === (t = u.social) || void 0 === t ? void 0 : t.length) && ve(!0)]
                        })
                    },
                    f = ge("(max-width: 1023px)"),
                    m = (0, a.useState)(!1),
                    h = m[0],
                    g = m[1],
                    p = (0, a.useState)("#FFFFFF"),
                    x = p[0],
                    y = p[1],
                    b = (0, a.useState)("#000000"),
                    j = b[0],
                    w = b[1],
                    C = (0, a.useState)(null),
                    z = C[0],
                    I = C[1],
                    W = (0, a.useState)(!1),
                    D = W[0],
                    O = W[1],
                    $ = (0, a.useState)({
                        combine: !1
                    }),
                    H = $[0],
                    q = $[1],
                    Q = (0, a.useState)(null),
                    G = Q[0],
                    J = Q[1],
                    Y = (0, a.useState)(!1),
                    X = Y[0],
                    ee = Y[1],
                    ne = (0, k.useRouter)(),
                    te = (0, a.useRef)(null),
                    oe = null === u || void 0 === u || null === (n = u.pages) || void 0 === n ? void 0 : n.find((function(e) {
                        return !e.slug && e.default
                    })),
                    le = null === u || void 0 === u ? void 0 : u.header,
                    ie = (0, a.useMemo)((function() {
                        var e, n;
                        return (null === (n = null === (e = u.pages) || void 0 === e ? void 0 : e.filter((function(e) {
                            return !0 === e.showOnHeader || void 0 === e.showOnHeader
                        }))) || void 0 === n ? void 0 : n.map((function(e) {
                            var n = {
                                href: "/".concat(e.slug || ""),
                                name: e.label,
                                current: ne.asPath === "/".concat(e.slug || "") || ne.asPath.includes("/".concat(e.slug, "/")),
                                type: e.type,
                                forceRender: e.forceRender
                            };
                            return "parent" === n.type && (n.nests = u.pages.filter((function(n) {
                                var t;
                                return n.Parent === e._id || (null === (t = n.Parent) || void 0 === t ? void 0 : t._id) === e._id
                            })).map((function(n) {
                                return {
                                    href: "/".concat(e.slug, "/").concat(n.slug || ""),
                                    name: n.label,
                                    current: ne.asPath === "/".concat(e.slug, "/").concat(n.slug || ""),
                                    forceRender: n.forceRender
                                }
                            })), 0 === n.nests.length) ? null : n
                        })).filter((function(e) {
                            return null !== e && "nested" !== e.type && void 0 !== e
                        }))) || []
                    }), [u, ne.asPath]),
                    re = (null === H || void 0 === H ? void 0 : H.combine) && (!(null === le || void 0 === le ? void 0 : le.sticky) || !D),
                    ae = null === le || void 0 === le ? void 0 : le.style,
                    se = (null === le || void 0 === le ? void 0 : le.navStyle) || "default",
                    ce = (null === le || void 0 === le || null === (t = le.menu) || void 0 === t ? void 0 : t.collapse) && "screen" === (null === le || void 0 === le || null === (o = le.menu) || void 0 === o ? void 0 : o.style) && h,
                    de = function() {
                        return (null === G || void 0 === G ? void 0 : G.length) > 0 && X && (0, r.jsx)("div", {
                            className: "hidden lg:flex items-center flex-shrink-0 gap-4",
                            children: null === G || void 0 === G ? void 0 : G.map((function(e, n) {
                                return (0, r.jsx)(N.Z, {
                                    button: e,
                                    block: le,
                                    website: u,
                                    fallbackSize: "md"
                                }, "banner-button-".concat(n))
                            }))
                        })
                    },
                    ve = function(e) {
                        var n, t;
                        return (null === le || void 0 === le || null === (n = le.menu) || void 0 === n ? void 0 : n.collapse) && "screen" === (null === le || void 0 === le || null === (t = le.menu) || void 0 === t ? void 0 : t.style) && (null === ie || void 0 === ie ? void 0 : ie.length) > 0 ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)("ul", {
                            className: ue("lg:flex items-center gap-x-4 gap-y-2 flex-wrap", "full-center" !== ae ? "justify-end" : "", !e && "hidden"),
                            children: Array.isArray(u.social) && u.social.map((function(e, n) {
                                var t = B.W.find((function(n) {
                                        return n.id === e.type
                                    })),
                                    o = e.link;
                                return "custom" !== e.type && (o = (o = e.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === t || void 0 === t ? void 0 : t.host, ""), o = "https://".concat(null === t || void 0 === t ? void 0 : t.host, "/").concat(o)), (0, r.jsx)("li", {
                                    children: (0, r.jsx)(F(), {
                                        href: o,
                                        children: (0, r.jsx)("a", {
                                            target: "_blank",
                                            children: (0, r.jsx)(B.Q, {
                                                icon: e,
                                                color: re ? H.textColor : j,
                                                settings: u.socialSettings
                                            })
                                        })
                                    })
                                }, "social-icon-header-".concat(n))
                            }))
                        })
                    },
                    he = function(e) {
                        var n = null === le || void 0 === le ? void 0 : le.logo;
                        if (!Ie(n) && u && (n = (0, E.i6)(le, u).logo), "image" === (null === n || void 0 === n ? void 0 : n.type) && "branding" === (null === n || void 0 === n ? void 0 : n.source) && (null === u || void 0 === u ? void 0 : u.logo)) {
                            var t = Me(null === u || void 0 === u ? void 0 : u.logo);
                            return (0, r.jsx)(F(), {
                                href: "/",
                                children: (0, r.jsx)("a", {
                                    className: "max-w-full overflow-hidden grid",
                                    target: (null === oe || void 0 === oe ? void 0 : oe.forceRender) ? "_parent" : "_self",
                                    children: t && (0, r.jsx)(E.yA, {
                                        src: t,
                                        text: null === le || void 0 === le ? void 0 : le.siteName,
                                        height: null === n || void 0 === n ? void 0 : n.height
                                    })
                                })
                            })
                        }
                        if ("image" === (null === n || void 0 === n ? void 0 : n.type) && "upload" === (null === n || void 0 === n ? void 0 : n.source) && (null === n || void 0 === n ? void 0 : n.media)) {
                            var o = Me(null === n || void 0 === n ? void 0 : n.media);
                            return (0, r.jsx)(F(), {
                                href: "/",
                                children: (0, r.jsx)("a", {
                                    className: "max-w-full overflow-hidden grid",
                                    target: (null === oe || void 0 === oe ? void 0 : oe.forceRender) ? "_parent" : "_self",
                                    children: o && (0, r.jsx)(E.yA, {
                                        src: o,
                                        text: null === le || void 0 === le ? void 0 : le.siteName,
                                        height: null === n || void 0 === n ? void 0 : n.height
                                    })
                                })
                            })
                        }
                        return (0, r.jsx)(E.TR, {
                            text: null === le || void 0 === le ? void 0 : le.siteName,
                            logo: n,
                            color: ce || !re || e ? j : H.textColor,
                            forceRender: null === oe || void 0 === oe ? void 0 : oe.forceRender
                        })
                    },
                    pe = function(e, n) {
                        var t = me(n, (null === se || void 0 === se ? void 0 : se.includes("subtle")) ? 10 : 80);
                        return {
                            borderColor: e.current ? n : "transparent",
                            backgroundColor: e.current && "default" !== se ? t : "transparent",
                            color: e.current && se.includes("bold") ? fe(n) : "currentColor"
                        }
                    },
                    xe = function() {
                        var e;
                        if (0 === (null === ie || void 0 === ie ? void 0 : ie.length)) return (0, r.jsx)(r.Fragment, {});
                        var n = ke(x, -10);
                        n !== j && n !== x || (n = ke(x, 10));
                        var t = fe(n),
                            o = re ? H.textColor : j;
                        return (0, r.jsx)("ul", {
                            className: ue("hidden items-center flex-wrap", !(null === le || void 0 === le || null === (e = le.menu) || void 0 === e ? void 0 : e.collapse) && "lg:flex", "left" === ae && "justify-end", "full-center" === ae && "justify-center", "default" === se ? "gap-x-6" : "gap-x-2"),
                            style: {
                                color: o
                            },
                            children: null === ie || void 0 === ie ? void 0 : ie.map((function(e) {
                                var l;
                                return (0, r.jsx)("li", {
                                    className: ue("default" === se ? "border-b-2" : "", (null === se || void 0 === se ? void 0 : se.includes("round")) && "rounded-lg"),
                                    style: pe(e, o),
                                    children: "parent" === e.type ? (0, r.jsx)(M.Z, {
                                        buttonClassName: ue("inline-flex items-center gap-2", "default" === se ? "py-1.5" : "py-2 px-3"),
                                        itemsContainerClass: ue("!p-4 !pr-6 w-max max-w-120 !max-h-[80vh] no-scrollbar", (null === se || void 0 === se ? void 0 : se.includes("square")) && "!rounded-none", "default" === se && "mt-0.5"),
                                        button: (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("span", {
                                                className: "body-normal whitespace-nowrap",
                                                children: e.name
                                            }), (0, r.jsx)(R.Z, {
                                                className: "w-4 h-4"
                                            })]
                                        }),
                                        itemsContainerStyle: {
                                            backgroundColor: n,
                                            color: t
                                        },
                                        children: null === (l = e.nests) || void 0 === l ? void 0 : l.map((function(e) {
                                            return (0, r.jsx)(Z.v.Item, {
                                                children: (0, r.jsx)(F(), {
                                                    className: ue("block py-2 body-normal", "default" === se ? "border-b-2" : "px-3", (null === se || void 0 === se ? void 0 : se.includes("round")) && "rounded-lg"),
                                                    href: e.href,
                                                    legacyBehavior: !1,
                                                    target: e.forceRender ? "_parent" : "_self",
                                                    style: pe(e, o),
                                                    children: e.name
                                                })
                                            }, "page-link-".concat(e.href))
                                        }))
                                    }) : (0, r.jsx)(F(), {
                                        className: ue("block body-normal whitespace-nowrap", "default" === se ? "py-1.5" : "py-2 px-3"),
                                        legacyBehavior: !1,
                                        href: e.href,
                                        target: e.forceRender ? "_parent" : "_self",
                                        children: e.name
                                    })
                                }, "header-page-link-".concat(e.href))
                            }))
                        })
                    },
                    ye = function() {
                        var e, n;
                        return 0 === (null === ie || void 0 === ie ? void 0 : ie.length) ? (0, r.jsx)(r.Fragment, {}) : (null === le || void 0 === le || null === (e = le.menu) || void 0 === e ? void 0 : e.collapse) ? (0, r.jsx)("button", {
                            className: "hidden lg:inline-flex items-center justify-center gap-2 p-2 rounded-md transition-colors duration-300",
                            style: {
                                color: !ce && re ? H.textColor : j
                            },
                            onClick: function() {
                                return g(!h)
                            },
                            children: h && "screen" === (null === le || void 0 === le || null === (n = le.menu) || void 0 === n ? void 0 : n.style) ? (0, r.jsx)(S.Z, {
                                className: "w-5 h-5"
                            }) : be()
                        }) : null
                    },
                    be = function() {
                        var e, n = "block h-5 w-5";
                        switch (null === le || void 0 === le || null === (e = le.menu) || void 0 === e ? void 0 : e.icon) {
                            case "bars-3-bottom-left":
                                return (0, r.jsx)(A.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            case "bars-3-bottom-right":
                                return (0, r.jsx)(_.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            case "bars-3-center-left":
                                return (0, r.jsx)(P.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            case "bars-2":
                                return (0, r.jsx)(T.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                });
                            default:
                                return (0, r.jsx)(L.Z, {
                                    className: n,
                                    "aria-hidden": "true"
                                })
                        }
                    },
                    je = function() {
                        var e;
                        O((null === (e = document.querySelector("#main-body")) || void 0 === e ? void 0 : e.scrollTop) > 20)
                    },
                    we = function(e) {
                        var n = document.querySelector("[data-combine-with-header]");
                        if (n) {
                            var t = null === n || void 0 === n ? void 0 : n.getAttribute("data-combine-with-header");
                            q((function(o) {
                                return e < 10 && (null === n || void 0 === n ? void 0 : n.getAttribute("data-text-color")) !== o.textColor && setTimeout((function() {
                                    we(e + 1)
                                }), 100 * e), {
                                    combine: !0 === t || "true" === t,
                                    textColor: null === n || void 0 === n ? void 0 : n.getAttribute("data-text-color")
                                }
                            }))
                        } else q((function(t) {
                            return e < 10 && (!n || (null === n || void 0 === n ? void 0 : n.getAttribute("data-text-color")) !== t.textColor) && setTimeout((function() {
                                we(e + 1)
                            }), 15 * e), {
                                combine: !1,
                                textColor: null
                            }
                        }))
                    };
                return (0, a.useEffect)((function() {
                    if (le) {
                        var e, n, t, o, l, i;
                        if (J((null === le || void 0 === le || null === (e = le.buttons) || void 0 === e ? void 0 : e.items) || [le.button]), ee((null === le || void 0 === le || null === (n = le.buttons) || void 0 === n ? void 0 : n.items) ? null === le || void 0 === le || null === (t = le.buttons) || void 0 === t ? void 0 : t.enabled : !!le.button), le.layers)
                            if ("custom" === le.layers.palette) {
                                var r;
                                y((null === (r = le.layers.overlay) || void 0 === r ? void 0 : r.color1) || "#FFFFFF")
                            } else {
                                var a, s, c = (null === u || void 0 === u || null === (a = u.colorPalette) || void 0 === a ? void 0 : a.Palette) || (null === u || void 0 === u ? void 0 : u.colorPalette);
                                y(Ee(c, null === (s = le.layers) || void 0 === s ? void 0 : s.palette, "color"))
                            }
                        else y(le.background || "#FFFFFF");
                        if (null === le.siteName || void 0 === le.siteName) le.siteName = null === u || void 0 === u || null === (i = u.Business) || void 0 === i ? void 0 : i.name;
                        le.style || (le.style = "left"), (null === (o = le.logoDesktop) || void 0 === o ? void 0 : o.height) || (le.logoDesktop = {
                            height: 80
                        }), (null === (l = le.logoMobile) || void 0 === l ? void 0 : l.height) || (le.logoMobile = {
                            height: 40
                        }), le.sticky && (null === te || void 0 === te ? void 0 : te.current) && (document.documentElement.style.scrollPaddingTop = te.current.clientHeight + "px")
                    }
                }), [le]), (0, a.useEffect)((function() {
                    we(0)
                }), [ne.asPath]), (0, a.useEffect)((function() {
                    x && w(fe(x))
                }), [x]), (0, a.useEffect)((function() {
                    g(!1), I(null)
                }), [ne.asPath, f]), (0, a.useEffect)((function() {
                    var e;
                    return null === (e = document.querySelector("#main-body")) || void 0 === e || e.addEventListener("scroll", je),
                        function() {
                            var e;
                            null === (e = document.querySelector("#main-body")) || void 0 === e || e.removeEventListener("scroll", je)
                        }
                }), []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("header", {
                        id: "website-header",
                        ref: te,
                        className: ue("!z-[2000] transition-colors duration-300", (null === le || void 0 === le ? void 0 : le.sticky) ? "sticky top-0" : "", (null === le || void 0 === le ? void 0 : le.sticky) && !H.combine && D || (null === le || void 0 === le ? void 0 : le.sticky) && D ? "shadow-md" : ""),
                        style: {
                            backgroundColor: re ? "transparent" : x,
                            color: re ? H.textColor : j
                        },
                        children: [(0, r.jsx)("div", {
                            className: ue("relative z-10 grid items-center lg:gap-6 xl:gap-10 mx-auto", V(null === le || void 0 === le ? void 0 : le.spacing), (null === le || void 0 === le ? void 0 : le.fullWidth) ? "px-6 lg:px-12" : "container"),
                            style: function(e) {
                                return "center" === e ? {
                                    gridTemplateColumns: "1fr auto 1fr"
                                } : "full-center" === e ? (null === ie || void 0 === ie ? void 0 : ie.length) > 6 ? {
                                    gridTemplateColumns: "1fr 4fr 1fr"
                                } : {
                                    gridTemplateColumns: "1fr auto 1fr"
                                } : {
                                    gridTemplateColumns: "auto auto auto"
                                }
                            }(ae),
                            children: "center" === ae ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: [xe(), ye()]
                                }), (0, r.jsx)("div", {
                                    className: "flex justify-center",
                                    children: he()
                                }), (0, r.jsxs)("div", {
                                    className: "flex justify-end",
                                    children: [(0, r.jsxs)("div", {
                                        className: "hidden lg:flex item-center gap-10",
                                        children: [(null === le || void 0 === le ? void 0 : le.showSocial) && ve(), X && de()]
                                    }), v()]
                                })]
                            }) : "full-center" === ae ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "lg:w-auto whitespace-nowrap",
                                    children: (null === le || void 0 === le ? void 0 : le.showSocial) && ve()
                                }), (0, r.jsxs)("div", {
                                    className: "flex-1 flex flex-col items-center gap-4 whitespace-nowrap",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col items-center justify-center gap-4 w-full",
                                        children: [he(), ye()]
                                    }), xe()]
                                }), (0, r.jsxs)("div", {
                                    className: "flex justify-end whitespace-nowrap",
                                    children: [X && de(), v()]
                                })]
                            }) : "logo-left-menu-left" === ae ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsxs)("div", {
                                    className: "flex items-center gap-10 col-span-2",
                                    children: [he(), xe(), ye()]
                                }), (0, r.jsxs)("div", {
                                    className: "hidden lg:flex item-center justify-end gap-10",
                                    children: [(null === le || void 0 === le ? void 0 : le.showSocial) && ve(), X && de()]
                                }), v()]
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    className: "col-span-2 lg:col-span-1",
                                    children: he()
                                }), (0, r.jsxs)("div", {
                                    className: "hidden lg:flex item-center justify-end gap-10 lg:col-span-2",
                                    children: ["screen" !== (null === le || void 0 === le || null === (l = le.menu) || void 0 === l ? void 0 : l.style) && ye(), xe(), (null === le || void 0 === le ? void 0 : le.showSocial) && ve(), X && de(), "screen" === (null === le || void 0 === le || null === (i = le.menu) || void 0 === i ? void 0 : i.style) && ye()]
                                }), v()]
                            })
                        }), (null === le || void 0 === le || null === (s = le.menu) || void 0 === s ? void 0 : s.collapse) && "screen" === (null === le || void 0 === le || null === (c = le.menu) || void 0 === c ? void 0 : c.style) && !f && (0, r.jsx)(K, {
                            open: h,
                            setOpen: g,
                            block: le,
                            website: u,
                            background: x,
                            textColor: j,
                            links: ie,
                            headerHeight: function() {
                                var e;
                                return (null === te || void 0 === te || null === (e = te.current) || void 0 === e ? void 0 : e.clientHeight) || 0
                            }(),
                            currentNests: z,
                            setCurrentNests: I
                        })]
                    }), ("screen" !== (null === le || void 0 === le || null === (d = le.menu) || void 0 === d ? void 0 : d.style) || f) && (0, r.jsx)(U, {
                        open: h,
                        setOpen: g,
                        block: le,
                        website: u,
                        background: x,
                        textColor: j,
                        isSmall: f,
                        isEdgeCase: !(!X || 0 !== (null === ie || void 0 === ie ? void 0 : ie.length) || (null === le || void 0 === le ? void 0 : le.showSocial)) || !!(0 === (null === ie || void 0 === ie ? void 0 : ie.length) && (null === le || void 0 === le ? void 0 : le.showSocial) && Array.isArray(null === u || void 0 === u ? void 0 : u.social) && (null === u || void 0 === u ? void 0 : u.social.length) > 1) || !X && !le.showSocial && 1 === (null === ie || void 0 === ie ? void 0 : ie.length) || !(1 !== (null === ie || void 0 === ie ? void 0 : ie.length) || !X && !le.showSocial),
                        renderLogo: he,
                        links: ie,
                        buttons: G,
                        buttonsEnabled: X,
                        isHeaderTransparent: re,
                        combineWithNextBlock: H,
                        currentNests: z,
                        setCurrentNests: I
                    })]
                })
            }
            var G, J = t(165),
                Y = t(40782),
                X = t(83457),
                ee = t.n(X),
                ne = function(e) {
                    var n = e.apiUrl,
                        t = e.website,
                        o = (e.page, "home-local-markup"),
                        l = function() {
                            var e = (0, s.Z)((function() {
                                var e, o;
                                return (0, d.__generator)(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return [4, new m.Z(n).get("/office/get-info-by-business", {
                                                idBusiness: t.Business._id
                                            })];
                                        case 1:
                                            return e = l.sent(), o = {}, e && !0 === e.status && (o = (null === e || void 0 === e ? void 0 : e.content) || {}), [2, o]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        i = function() {
                            var e = (0, s.Z)((function() {
                                var e, o, l;
                                return (0, d.__generator)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, new m.Z(n).get("/seo/markup-local-business-images", {
                                                idBusiness: t.Business._id
                                            })];
                                        case 1:
                                            return e = i.sent(), o = {}, e && !0 === e.status && (o = (null === e || void 0 === e || null === (l = e.content) || void 0 === l ? void 0 : l.images) || {}), [2, o]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        c = function(e) {
                            var n = [];
                            if (Array.isArray(e)) {
                                var t = !0,
                                    o = !1,
                                    l = void 0;
                                try {
                                    for (var i, r = e[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) {
                                        var a = i.value;
                                        if ((null === a || void 0 === a ? void 0 : a.link) && (null === a || void 0 === a ? void 0 : a.type)) switch (a.type) {
                                            case "facebook":
                                                n.push("https://facebook.com/".concat(a.link));
                                                break;
                                            case "youtube":
                                                n.push("https://youtube.com/".concat(a.link));
                                                break;
                                            case "linkedin":
                                                n.push("https://linkedin.com/".concat(a.link));
                                                break;
                                            case "instagram":
                                                n.push("https://instagram.com/".concat(a.link))
                                        }
                                    }
                                } catch (s) {
                                    o = !0, l = s
                                } finally {
                                    try {
                                        t || null == r.return || r.return()
                                    } finally {
                                        if (o) throw l
                                    }
                                }
                            }
                            return n
                        },
                        u = function(e) {
                            return !0 === (null === e || void 0 === e ? void 0 : e.public) ? {
                                "@type": "PostalAddress",
                                streetAddress: (null === e || void 0 === e ? void 0 : e.line1) || "",
                                addressLocality: (null === e || void 0 === e ? void 0 : e.city) || "",
                                addressRegion: (null === e || void 0 === e ? void 0 : e.state) || "",
                                postalCode: (null === e || void 0 === e ? void 0 : e.postalCode) || "",
                                addressCountry: (null === e || void 0 === e ? void 0 : e.country) ? e.country.toUpperCase() : ""
                            } : {}
                        },
                        v = function() {
                            var e = (0, s.Z)((function() {
                                var e, n, r, a, s, v, f, m;
                                return (0, d.__generator)(this, (function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return "object" !== typeof document ? [3, 3] : [4, l().catch((function(e) {
                                                return console.log("Address Error", e)
                                            }))];
                                        case 1:
                                            return r = d.sent(), a = r.address, s = r.phoneNumber, [4, i().catch((function(e) {
                                                return console.log("Gallery Error", e)
                                            }))];
                                        case 2:
                                            v = d.sent(), f = {
                                                "@context": "https://schema.org/",
                                                "@type": "LocalBusiness",
                                                name: (null === t || void 0 === t || null === (e = t.seo) || void 0 === e ? void 0 : e.title) || (null === t || void 0 === t || null === (n = t.header) || void 0 === n ? void 0 : n.name) || "",
                                                url: "".concat(location.protocol, "//").concat(location.hostname, "/"),
                                                telephone: s || "",
                                                image: v,
                                                address: u(a),
                                                sameAs: c((null === t || void 0 === t ? void 0 : t.social) || [])
                                            }, (m = document.getElementById(o) || document.createElement("script")).id = o, m.type = "application/ld+json", m.innerHTML = JSON.stringify(f), document.body.appendChild(m), d.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.useEffect)((function() {
                        return v().catch((function(e) {
                                return console.error("Failed to build markup")
                            })),
                            function() {
                                ! function() {
                                    if ("object" === typeof document) {
                                        var e = document.getElementById(o);
                                        e && e.remove()
                                    }
                                }()
                            }
                    }), []), (0, r.jsx)(r.Fragment, {})
                },
                te = t(24230),
                oe = {
                    success: {
                        color: "bg-green-50 text-green-800",
                        icon: (0, r.jsx)(x.Z, {
                            className: "h-5 w-5 text-green-400"
                        }),
                        progress: "bg-green-700"
                    },
                    error: {
                        color: "bg-red-50 text-red-800",
                        icon: (0, r.jsx)(y.Z, {
                            className: "h-5 w-5 text-red-400"
                        }),
                        progress: "bg-red-700"
                    },
                    info: {
                        color: "bg-indigo-50 text-indigo-800",
                        icon: (0, r.jsx)(b.Z, {
                            className: "h-5 w-5 text-indigo-400"
                        }),
                        progress: "bg-indigo-700"
                    },
                    warning: {
                        color: "bg-yellow-50 text-yellow-800",
                        icon: (0, r.jsx)(j.Z, {
                            className: "h-5 w-5 text-yellow-400"
                        }),
                        progress: "bg-yellow-700"
                    },
                    default: {
                        color: "bg-gray-50 text-gray-800",
                        icon: (0, r.jsx)(x.Z, {
                            className: "h-5 w-5 text-gray-400"
                        }),
                        progress: "bg-gray-700"
                    },
                    dark: {
                        color: "bg-white-600 font-gray-300",
                        icon: (0, r.jsx)(x.Z, {
                            className: "h-5 w-5 text-gray-400"
                        }),
                        progress: "bg-gray-300"
                    }
                },
                le = [],
                ie = function(e) {
                    var n, l, i, u, g, x, y, b, j, N, k, C, F, Z, S = e.children,
                        R = e.website,
                        A = e.page,
                        _ = e.apiUrl,
                        P = e.ipAddress,
                        T = e.hideFooter,
                        L = p().useRouter(),
                        M = (0, a.useState)(0),
                        B = M[0],
                        E = M[1],
                        z = (0, a.useState)(!1),
                        I = z[0],
                        W = z[1],
                        D = (0, a.useState)(null),
                        O = D[0],
                        $ = D[1],
                        K = (0, a.useState)(0),
                        H = K[0],
                        q = K[1],
                        U = new m.Z(_),
                        V = null !== (Z = R.seo) && void 0 !== Z ? Z : {},
                        X = V.headCode,
                        ie = V.footerCode,
                        re = (0, c.Z)(V, ["headCode", "footerCode"]),
                        ae = (0, o.Z)({
                            globalHeadCode: X,
                            globalFooterCode: ie
                        }, re, null === A || void 0 === A ? void 0 : A.seo),
                        se = (0, a.useCallback)(function() {
                            var e = (0, s.Z)((function(e) {
                                return (0, d.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return 0 !== e.target.scrollTop && 0 !== B || E(e.target.scrollTop), I ? [3, 2] : [4, de("scroll")];
                                        case 1:
                                            n.sent(), W(!0), n.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(), [I]),
                        ce = a.Children.map(S, (function(e) {
                            return a.isValidElement(e) ? a.cloneElement(e, (0, o.Z)({}, e.props)) : e
                        })),
                        de = function() {
                            var e = (0, s.Z)((function(e) {
                                var n, o, l, i, r, a, s, c, u, v, f, m, g;
                                return (0, d.__generator)(this, (function(d) {
                                    switch (d.label) {
                                        case 0:
                                            return "public" !== R.status ? [3, 5] : (s = JSON.parse(localStorage.getItem("user") || "{}"), c = Math.abs(new Date - new Date(s.date)) / 36e5, s && s.ip && !(c > 24) && s.hash ? [3, 4] : (u = P || "0.0.0.0", window.unsupportedBrowser || P ? [3, 3] : [4, t.e(6216).then(t.bind(t, 76216))]));
                                        case 1:
                                            return [4, d.sent().publicIpv4()];
                                        case 2:
                                            u = d.sent(), d.label = 3;
                                        case 3:
                                            v = (new Date).getTime(), f = (new Date).getTime(), m = new Date(f - f % 864e5), localStorage.setItem("user", JSON.stringify({
                                                ip: u,
                                                date: m.toISOString(),
                                                hash: v
                                            })), s.ip = u, s.hash = v, d.label = 4;
                                        case 4:
                                            g = {
                                                idWebsite: R._id,
                                                url: document.location.pathname,
                                                event: e,
                                                platform: (null === window || void 0 === window || null === (n = window.navigator) || void 0 === n ? void 0 : n.platform) ? null === window || void 0 === window || null === (o = window.navigator) || void 0 === o || null === (l = o.platform) || void 0 === l ? void 0 : l.toString() : (null === window || void 0 === window || null === (i = window.navigator) || void 0 === i ? void 0 : i.oscpu) ? null === window || void 0 === window || null === (r = window.navigator) || void 0 === r ? void 0 : r.oscpu : "bot",
                                                title: document.title.split(" - ")[0] || "Home",
                                                device: /bot|googlebot|crawler|spider|robot|crawling/i.test(null === window || void 0 === window || null === (a = window.navigator) || void 0 === a ? void 0 : a.userAgent) ? "bot" : h.tq ? "mobile" : "desktop",
                                                ip: s.ip,
                                                hash: s.hash
                                            }, le.find((function(e) {
                                                return e.event === g.event
                                            })) || le.push(g), d.label = 5;
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, a.useEffect)((function() {
                        return H < 6 && (clearInterval(G), G = setInterval((0, s.Z)((function() {
                                return (0, d.__generator)(this, (function(e) {
                                    return de("ping"), q(H + 1), [2]
                                }))
                            })), 3e4)), O !== L.asPath && (de("open"), $(L.asPath), q(0), W(!1)),
                            function() {
                                H >= 6 && q(0), clearInterval(G), W(!1)
                            }
                    }), [L, H]), (0, a.useEffect)((function() {
                        var e, n, t = function() {
                            var e = (0, s.Z)((function() {
                                var e;
                                return (0, d.__generator)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return (null === le || void 0 === le ? void 0 : le.length) > 0 && (e = le.shift()) ? [4, U.post("/website/register-user-action", e)] : [3, 2];
                                        case 1:
                                            n.sent(), n.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        return t(), e = setInterval((function() {
                                t()
                            }), 500), null === (n = document.querySelector("#main-body")) || void 0 === n || n.addEventListener("scroll", se),
                            function() {
                                var n;
                                clearInterval(e), null === (n = document.querySelector("#main-body")) || void 0 === n || n.removeEventListener("scroll", se)
                            }
                    }), [I]), (0, a.useEffect)((function() {
                        var e = function() {
                            var e = document.querySelector("#main-body");
                            e && (e.style.scrollBehavior = "auto", e.scrollTop = 0, e.style.scrollBehavior = "smooth")
                        };
                        return L.events.on("routeChangeComplete", e),
                            function() {
                                L.events.off("routeChangeComplete", e)
                            }
                    }), []), (0, a.useEffect)((function() {
                        var e;
                        window.cnDisableCache = !0;
                        var n = (0, w.getCookie)("pt");
                        n && (null === L || void 0 === L || null === (e = L.query) || void 0 === e ? void 0 : e.pt) !== n && "public" !== R.status && L.replace("".concat(L.asPath, "?pt=").concat(n), void 0, {
                            shallow: !0
                        })
                    }), [L, R]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(v(), {
                            children: [(0, r.jsx)("link", {
                                rel: "icon",
                                href: (null === (n = R.favicon) || void 0 === n ? void 0 : n.url) || ""
                            }), (null === A || void 0 === A ? void 0 : A.isCanonical) && (0, r.jsx)("link", {
                                rel: "canonical",
                                href: "https://".concat("to-www" === R.redirect ? "www." : "").concat(R.rawDomain).concat(L.asPath)
                            }), (0, r.jsx)("title", {
                                children: (null === ae || void 0 === ae ? void 0 : ae.title) ? ae.title : (null === (l = R.Business) || void 0 === l ? void 0 : l.name) + " | " + (null === (i = R.Business) || void 0 === i || null === (u = i.type) || void 0 === u ? void 0 : u.name)
                            }), (0, r.jsx)("meta", {
                                httpEquiv: "Content-Language",
                                content: (null === R || void 0 === R ? void 0 : R.language) || "en"
                            }), (0, r.jsx)("meta", {
                                name: "keywords",
                                content: (null === ae || void 0 === ae ? void 0 : ae.keywords) ? ae.keywords : (null === R || void 0 === R || null === (g = R.Business) || void 0 === g || null === (x = g.name) || void 0 === x ? void 0 : x.split(" ").join(",")) + "," + (null === R || void 0 === R || null === (y = R.Business) || void 0 === y || null === (b = y.type) || void 0 === b || null === (j = b.name) || void 0 === j ? void 0 : j.split(" ").join(","))
                            }), (0, r.jsx)("meta", {
                                name: "title",
                                property: "og:title",
                                content: (null === ae || void 0 === ae ? void 0 : ae.title) ? ae.title : (null === (N = R.Business) || void 0 === N ? void 0 : N.name) + " | " + (null === (k = R.Business) || void 0 === k || null === (C = k.type) || void 0 === C ? void 0 : C.name)
                            }), (0, r.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, r.jsx)("meta", {
                                property: "og:url",
                                content: "https://".concat("to-www" === R.redirect ? "www." : "").concat(R.rawDomain).concat(L.asPath)
                            }), (0, r.jsx)("meta", {
                                name: "description",
                                property: "og:description",
                                content: (null === ae || void 0 === ae ? void 0 : ae.description) ? ae.description : ""
                            }), (null === ae || void 0 === ae || null === (F = ae.Image) || void 0 === F ? void 0 : F.url) && (0, r.jsx)("meta", {
                                name: "image",
                                property: "og:image",
                                content: ae.Image.url
                            }), (0, r.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary"
                            }), (null === ae || void 0 === ae ? void 0 : ae.globalHeadCode) && (0, f.ZP)(ae.globalHeadCode), (null === ae || void 0 === ae ? void 0 : ae.headCode) && (0, f.ZP)(ae.headCode), (null === R || void 0 === R ? void 0 : R.searchIndexing) ? (0, r.jsx)("meta", {
                                name: "robots",
                                content: "all"
                            }) : (0, r.jsx)("meta", {
                                name: "robots",
                                content: "noindex,nofollow"
                            })]
                        }), (0, r.jsx)(te.Z, {
                            website: R
                        }), (0, r.jsx)(ee(), {
                            color: function() {
                                var e, n, t, o, l = (null === R || void 0 === R || null === (e = R.colorPalette) || void 0 === e || null === (n = e.Palette) || void 0 === n ? void 0 : n.colors) || (null === R || void 0 === R || null === (t = R.colorPalette) || void 0 === t ? void 0 : t.colors) || [];
                                return 0 === (null === l || void 0 === l ? void 0 : l.length) ? "#333" : (null === (o = l[0]) || void 0 === o ? void 0 : o.accent) || "#333"
                            }(),
                            startPosition: .3,
                            options: {
                                showSpinner: !1,
                                trickle: !0,
                                trickleSpeed: 100
                            }
                        }), (0, r.jsxs)("div", {
                            id: "main-body",
                            onScroll: function(e) {
                                return se(e)
                            },
                            className: "flex flex-col h-full overflow-y-auto overflow-x-hidden smooth-scroll transition-all",
                            children: [(0, r.jsx)(Q, {
                                scrollY: B,
                                website: R
                            }), ce, !T && (0, r.jsx)(J.default, {
                                website: R
                            }), (0, r.jsx)(Y.ToastContainer, {
                                toastClassName: function(e) {
                                    var n = e.type;
                                    return oe[n || "default"].color + " relative p-4 rounded-md justify-between overflow-hidden cursor-pointer text-sm font-medium my-2.5 shadow-md flex"
                                },
                                bodyClassName: function() {
                                    return "flex text-sm font-white font-medium items-center w-full max-w-xs"
                                },
                                icon: function(e) {
                                    var n = e.type;
                                    return oe[n || "default"].icon
                                },
                                position: "bottom-center",
                                autoClose: 8e3,
                                hideProgressBar: !0,
                                newestOnTop: !0,
                                closeOnClick: !0,
                                rtl: !1,
                                pauseOnFocusLoss: !0,
                                draggable: !0,
                                pauseOnHover: !0,
                                closeButton: !1
                            }), (null === ae || void 0 === ae ? void 0 : ae.globalFooterCode) && (0, f.ZP)(ae.globalFooterCode), (null === ae || void 0 === ae ? void 0 : ae.footerCode) && (0, f.ZP)(ae.footerCode), null === (null === A || void 0 === A ? void 0 : A.slug) && (0, r.jsx)(ne, {
                                website: R,
                                page: A,
                                apiUrl: _
                            })]
                        })]
                    })
                },
                re = t(31955),
                ae = (t(83454), "#111827"),
                se = "#FFFFFF",
                ce = [{
                    id: "top-down",
                    value: "180deg",
                    icon: "ArrowDownIcon"
                }, {
                    id: "left-right",
                    value: "90deg",
                    icon: "ArrowRightIcon"
                }, {
                    id: "bottom-left-top-right",
                    value: "45deg",
                    icon: "ArrowUpRightIcon"
                }, {
                    id: "bottom-right-top-left",
                    value: "315deg",
                    icon: "ArrowUpLeftIcon"
                }],
                de = [{
                    id: "none",
                    name: "None",
                    value: "0"
                }, {
                    id: "light",
                    name: "Light",
                    value: "4px"
                }, {
                    id: "moderate",
                    name: "Moderate",
                    value: "12px"
                }, {
                    id: "strong",
                    name: "Strong",
                    value: "32px"
                }, {
                    id: "very-strong",
                    name: "Very strong",
                    value: "48px"
                }];

            function ue() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return n.filter(Boolean).join(" ")
            }

            function ve(e) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }

            function fe(e) {
                var n = ae.replace("#", ""),
                    t = se.replace("#", ""),
                    o = !1;
                if (!e || !e[0]) return e;
                "#" === e[0] && (e = e.slice(1), o = !0);
                var l = parseInt(6 === (null === e || void 0 === e ? void 0 : e.length) ? e : "".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]), 16),
                    i = ((l >> 16) + (255 & l) + (l >> 8 & 255)) / 3;
                return (o ? "#" : "") + (i = i > 128 ? n : t)
            }
            var me = function(e, n) {
                var t;
                return n /= 100, /^#([A-Fa-f0-9]{3}){1,2}$/.test(e) ? (3 === (null === (t = e.substring(1).split("")) || void 0 === t ? void 0 : t.length) && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]), "rgba(" + [(t = "0x" + t.join("")) >> 16 & 255, t >> 8 & 255, 255 & t].join(",") + "," + n + ")") : e
            };

            function he(e) {
                var n = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
                    t = n ? (256 | n[1]).toString(16).slice(1) + (256 | n[2]).toString(16).slice(1) + (256 | n[3]).toString(16).slice(1) : e;
                return "#".concat(t)
            }

            function ge(e) {
                var n = (0, a.useState)(!0),
                    t = n[0],
                    o = n[1];
                return (0, a.useEffect)((function() {
                    var n = window.matchMedia(e);
                    n.matches !== t && o(n.matches);
                    var l = function() {
                        o(n.matches)
                    };
                    return n.addListener(l),
                        function() {
                            return n.removeListener(l)
                        }
                }), [t, e]), t
            }

            function pe(e) {
                return JSON.parse(JSON.stringify(e))
            }
            var xe = function(e) {
                    return {}
                },
                ye = function(e) {
                    return {}
                },
                be = function(e, n) {
                    var t = {
                        fontFamily: (null === e || void 0 === e ? void 0 : e.family) || '"Inter", sans-serif'
                    };
                    return n && (t.fontWeight = (null === e || void 0 === e ? void 0 : e.weight) || 500), (null === e || void 0 === e ? void 0 : e.style) && (t.fontStyle = e.style), (null === e || void 0 === e ? void 0 : e.size) && (t.fontSize = e.size), (null === e || void 0 === e ? void 0 : e.lineHeight) && (t.fontHeight = e.lineHeight), t
                },
                je = function(e, n) {
                    var t = [400, 500, 600, 700, 800],
                        o = "";
                    return "fontshare" === e.source ? o = "f[]=".concat(e.name.replace(/ /gi, "-"), "@").concat(t.join(",")).toLowerCase() : (o = "family=".concat(e.name.replace(/ /gi, "+")), o += n ? ":".concat("italic" === e.style ? "ital," : "", "wght@").concat(e.weight) : ":wght@".concat(t.join(";"))), o
                };

            function we(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = e.props.children[0].props.website,
                    i = e.props.children[0].props.page,
                    a = e.props.children[0].props.apiUrl;
                return (0, r.jsx)(ie, (0, l.Z)((0, o.Z)({
                    page: i,
                    website: t,
                    apiUrl: a
                }, n), {
                    children: e
                }))
            }

            function Ne(e) {
                var n, t, o;
                return e.match(/^rgb/) ? (n = (e = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1], t = e[2], o = e[3]) : (n = (e = +("0x" + e.slice(1).replace(e.length < 5 && /./g, "$&$&"))) >> 16, t = e >> 8 & 255, o = 255 & e), Math.sqrt(n * n * .299 + t * t * .587 + o * o * .114) <= 127.5
            }

            function ke(e, n) {
                if (!e) return "#FFFFFF";
                var t = parseInt(e.replace("#", ""), 16),
                    o = Math.round(2.55 * n),
                    l = (t >> 16) + o,
                    i = (t >> 8 & 255) + o,
                    r = (255 & t) + o;
                return "#" + (16777216 + 65536 * (l < 255 ? l < 1 ? 0 : l : 255) + 256 * (i < 255 ? i < 1 ? 0 : i : 255) + (r < 255 ? r < 1 ? 0 : r : 255)).toString(16).slice(1)
            }

            function Ce(e) {
                if (!e) return "";
                var n = e.split(" ");
                return n.length > 1 && "" !== n[1] ? n[0][0] + n[1][0] : e[0] + e[1]
            }
            var Fe = function(e, n) {
                    var t = {
                            small: "rounded-sm md:rounded-md lg:rounded-lg",
                            medium: "rounded-lg md:rounded-xl lg:rounded-2xl",
                            large: "rounded-2xl md:rounded-3xl lg:rounded-4xl",
                            "no-rounded": ""
                        },
                        o = String(e);
                    return e && "default" !== e || !n || (o = n), t[o] || t["no-rounded"]
                },
                Ze = function(e) {
                    return "1:1" === e ? "aspect-w-1 aspect-h-1" : "2:3" === e ? "aspect-w-2 aspect-h-3" : "3:2" === e ? "aspect-w-3 aspect-h-2" : "aspect-w-16 aspect-h-9"
                },
                Se = function(e) {
                    var n, t, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        l = {
                            top: {
                                row: "items-start",
                                col: "justify-start"
                            },
                            center: {
                                row: "items-center",
                                col: "justify-center"
                            },
                            bottom: {
                                row: "items-end",
                                col: "justify-end"
                            }
                        };
                    return o ? (null === (n = l[e]) || void 0 === n ? void 0 : n.col) || l.center.col : (null === (t = l[e]) || void 0 === t ? void 0 : t.row) || l.center.row
                },
                Re = function(e) {
                    var n = {
                        left: "items-start",
                        center: "items-center text-center mx-auto",
                        right: "items-end text-right ml-auto"
                    };
                    return n[e] || n.center
                },
                Ae = function(e) {
                    var n, t, o = {
                            none: {
                                top: "pt-0",
                                bottom: "pb-0"
                            },
                            small: {
                                top: "pt-8 lg:pt-12",
                                bottom: "pb-8 lg:pb-12"
                            },
                            medium: {
                                top: "pt-12 lg:pt-20",
                                bottom: "pb-12 lg:pb-20"
                            },
                            large: {
                                top: "pt-16 lg:pt-32",
                                bottom: "pb-16 lg:pb-32"
                            },
                            default: {
                                top: "pt-12 lg:pt-14 xl:pt-20",
                                bottom: "pb-12 lg:pb-14 xl:pb-20"
                            }
                        },
                        l = (null === (n = o[null === e || void 0 === e ? void 0 : e.top]) || void 0 === n ? void 0 : n.top) || o.default.top,
                        i = (null === (t = o[null === e || void 0 === e ? void 0 : e.bottom]) || void 0 === t ? void 0 : t.bottom) || o.default.bottom;
                    return "".concat(l, " ").concat(i)
                },
                _e = function(e) {
                    var n, t, o = {
                            none: {
                                top: "pt-0",
                                bottom: "pb-0"
                            },
                            small: {
                                top: "pt-8 lg:pt-32",
                                bottom: "pb-8 lg:pb-32"
                            },
                            medium: {
                                top: "pt-12 lg:pt-40",
                                bottom: "pb-12 lg:pb-40"
                            },
                            large: {
                                top: "pt-20 lg:pt-48",
                                bottom: "pb-20 lg:pb-48"
                            },
                            default: {
                                top: "pt-12 lg:pt-32 xl:pt-40",
                                bottom: "pb-12 lg:pb-32 xl:pb-40"
                            }
                        },
                        l = (null === (n = o[null === e || void 0 === e ? void 0 : e.top]) || void 0 === n ? void 0 : n.top) || o.default.top,
                        i = (null === (t = o[null === e || void 0 === e ? void 0 : e.bottom]) || void 0 === t ? void 0 : t.bottom) || o.default.bottom;
                    return "".concat(l, " ").concat(i)
                },
                Pe = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "xl",
                        t = {
                            sm: "heading-small",
                            md: "heading-medium",
                            lg: "heading-large",
                            xl: "heading-xlarge"
                        };
                    return t[e] || t[n]
                },
                Te = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "lg",
                        t = {
                            sm: "body-small",
                            md: "body-normal",
                            lg: "body-large"
                        };
                    return t[e] || t[n]
                },
                Le = function(e) {
                    return "".concat("https://cdn.durable.co", "/assets/").concat(e)
                },
                Me = function(e) {
                    return (null === e || void 0 === e ? void 0 : e.url) || (null === e || void 0 === e ? void 0 : e.preview)
                },
                Be = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "color1";
                    return parseInt((null === e || void 0 === e ? void 0 : e.replace(/[^0-9]/gi, "")) || 1, 10) - 1
                },
                Ee = function(e, n, t) {
                    var o, l = Be(n);
                    return (null === e || void 0 === e ? void 0 : e.colors) && !isNaN(l) ? null === (o = e.colors[l]) || void 0 === o ? void 0 : o[t] : "#FFFFFF"
                },
                ze = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return function() {
                        for (var o = arguments.length, l = new Array(o), r = 0; r < o; r++) l[r] = arguments[r];
                        return clearTimeout(t), setTimeout((function() {
                            e.apply(void 0, (0, i.Z)(l))
                        }), n)
                    }
                },
                Ie = function(e) {
                    return null !== e && void 0 !== e
                };

            function We(e) {
                return re.Z.get(e)
            }

            function De(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                re.Z.set(e, n, t)
            }
            var Oe = function(e) {
                var n = e.h1,
                    t = e.className,
                    o = e.style,
                    l = e.children;
                return n ? (0, r.jsx)("h1", {
                    className: t,
                    style: o,
                    children: l
                }) : (0, r.jsx)("h2", {
                    className: t,
                    style: o,
                    children: l
                })
            }
        },
        75871: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return r
                },
                b: function() {
                    return l
                }
            });
            var o = t(85518),
                l = {
                    none: {
                        top: "pt-0",
                        bottom: "pb-0"
                    },
                    small: {
                        top: "pt-4",
                        bottom: "pb-4"
                    },
                    medium: {
                        top: "pt-6",
                        bottom: "pb-6"
                    },
                    large: {
                        top: "pt-8",
                        bottom: "pb-8"
                    }
                };

            function i(e) {
                switch (e) {
                    case "small":
                        return 1;
                    case "medium":
                        return 1.5;
                    case "large":
                        return 2;
                    default:
                        return 0
                }
            }

            function r(e) {
                var n, t, l, r = e.header;
                if (!r || !(null === r || void 0 === r ? void 0 : r.sticky)) return {};
                var a, s, c = "2rem";
                "image" === (null === r || void 0 === r || null === (n = r.logo) || void 0 === n ? void 0 : n.type) && (c = (c = o.tq ? null === (a = r.logo.height) || void 0 === a ? void 0 : a.mobile : null === (s = r.logo.height) || void 0 === s ? void 0 : s.desktop) < 32 ? "2rem" : "".concat(c, "px"));
                var d = i(null === r || void 0 === r || null === (t = r.spacing) || void 0 === t ? void 0 : t.top) + i(null === r || void 0 === r || null === (l = r.spacing) || void 0 === l ? void 0 : l.bottom);
                return {
                    scrollMarginTop: "calc(".concat(d, "rem + ").concat(c, ")")
                }
            }
        }
    }
]);