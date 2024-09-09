"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4715], {
        34715: function(t, e, r) {
            r.d(e, {
                V: function() {
                    return p
                }
            });
            var n = r(67294),
                i = r(10990);
            let s = "undefined" !== typeof window ? n.useLayoutEffect : n.useEffect,
                a = t => t && !Array.isArray(t) && "object" === typeof t,
                o = [],
                f = {},
                c = i.ZP;
            const p = (t, e = o) => {
                let r = f;
                a(t) ? (r = t, t = null, e = "dependencies" in r ? r.dependencies : o) : a(e) && (r = e, e = "dependencies" in r ? r.dependencies : o), t && "function" !== typeof t && console.warn("First parameter must be a function or config object");
                const {
                    scope: i,
                    revertOnUpdate: p
                } = r, u = (0, n.useRef)(!1), l = (0, n.useRef)(c.context((() => {}), i)), h = (0, n.useRef)((t => l.current.add(null, t))), g = e && e.length && !p;
                return s((() => {
                    if (t && l.current.add(t, i), !g || !u.current) return () => l.current.revert()
                }), e), g && s((() => (u.current = !0, () => l.current.revert())), o), {
                    context: l.current,
                    contextSafe: h.current
                }
            };
            p.register = t => {
                c = t
            }, p.headless = !0
        },
        10990: function(t, e, r) {
            r.d(e, {
                ZP: function() {
                    return _t
                },
                p8: function() {
                    return _t
                }
            });
            var n, i, s, a, o, f, c, p, u = r(25317),
                l = {},
                h = 180 / Math.PI,
                g = Math.PI / 180,
                d = Math.atan2,
                y = /([A-Z])/g,
                m = /(left|right|width|margin|padding|x)/i,
                x = /[\s,\(]\S/,
                v = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                b = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                O = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                w = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
                },
                _ = function(t, e) {
                    var r = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
                },
                P = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                M = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                F = function(t, e, r) {
                    return t.style[e] = r
                },
                C = function(t, e, r) {
                    return t.style.setProperty(e, r)
                },
                S = function(t, e, r) {
                    return t._gsap[e] = r
                },
                A = function(t, e, r) {
                    return t._gsap.scaleX = t._gsap.scaleY = r
                },
                B = function(t, e, r, n, i) {
                    var s = t._gsap;
                    s.scaleX = s.scaleY = r, s.renderTransform(i, s)
                },
                Y = function(t, e, r, n, i) {
                    var s = t._gsap;
                    s[e] = r, s.renderTransform(i, s)
                },
                T = "transform",
                z = T + "Origin",
                k = function t(e, r) {
                    var n = this,
                        i = this.target,
                        s = i.style,
                        a = i._gsap;
                    if (e in l && s) {
                        if (this.tfm = this.tfm || {}, "transform" === e) return v.transform.split(",").forEach((function(e) {
                            return t.call(n, e, r)
                        }));
                        if (~(e = v[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                                return n.tfm[t] = K(i, t)
                            })) : this.tfm[e] = a.x ? a[e] : K(i, e), e === z && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(T) >= 0) return;
                        a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(z, r, "")), e = T
                    }(s || r) && this.props.push(e, r, s[e])
                },
                X = function(t) {
                    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
                },
                E = function() {
                    var t, e, r = this.props,
                        n = this.target,
                        i = n.style,
                        s = n._gsap;
                    for (t = 0; t < r.length; t += 3) r[t + 1] ? n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(y, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (e in this.tfm) s[e] = this.tfm[e];
                        s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = c()) && t.isStart || i[T] || (X(i), s.zOrigin && i[z] && (i[z] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
                    }
                },
                W = function(t, e) {
                    var r = {
                        target: t,
                        props: [],
                        revert: E,
                        save: k
                    };
                    return t._gsap || u.p8.core.getCache(t), e && e.split(",").forEach((function(t) {
                        return r.save(t)
                    })), r
                },
                N = function(t, e) {
                    var r = i.createElementNS ? i.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : i.createElement(t);
                    return r && r.style ? r : i.createElement(t)
                },
                I = function t(e, r, n) {
                    var i = getComputedStyle(e);
                    return i[r] || i.getPropertyValue(r.replace(y, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, D(r) || r, 1) || ""
                },
                V = "O,Moz,ms,Ms,Webkit".split(","),
                D = function(t, e, r) {
                    var n = (e || o).style,
                        i = 5;
                    if (t in n && !r) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(V[i] + t in n););
                    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? V[i] : "") + t
                },
                j = function() {
                    "undefined" !== typeof window && window.document && (n = window, i = n.document, s = i.documentElement, o = N("div") || {
                        style: {}
                    }, N("div"), T = D(T), z = T + "Origin", o.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", p = !!D("perspective"), c = u.p8.core.reverting, a = 1)
                },
                R = function t(e) {
                    var r, n = N("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        a = this.nextSibling,
                        o = this.style.cssText;
                    if (s.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                        r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
                    } catch (f) {} else this._gsapBBox && (r = this._gsapBBox());
                    return i && (a ? i.insertBefore(this, a) : i.appendChild(this)), s.removeChild(n), this.style.cssText = o, r
                },
                q = function(t, e) {
                    for (var r = e.length; r--;)
                        if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
                },
                G = function(t) {
                    var e;
                    try {
                        e = t.getBBox()
                    } catch (r) {
                        e = R.call(t, !0)
                    }
                    return e && (e.width || e.height) || t.getBBox === R || (e = R.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                        x: +q(t, ["x", "cx", "x1"]) || 0,
                        y: +q(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                L = function(t) {
                    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !G(t))
                },
                Z = function(t, e) {
                    if (e) {
                        var r, n = t.style;
                        e in l && e !== z && (e = T), n.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty("--" === r ? e : e.replace(y, "-$1").toLowerCase())) : n.removeAttribute(e)
                    }
                },
                U = function(t, e, r, n, i, s) {
                    var a = new u.Fo(t._pt, e, r, 0, 1, s ? M : P);
                    return t._pt = a, a.b = n, a.e = i, t._props.push(r), a
                },
                $ = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                H = {
                    grid: 1,
                    flex: 1
                },
                J = function t(e, r, n, s) {
                    var a, f, c, p, h = parseFloat(n) || 0,
                        g = (n + "").trim().substr((h + "").length) || "px",
                        d = o.style,
                        y = m.test(r),
                        x = "svg" === e.tagName.toLowerCase(),
                        v = (x ? "client" : "offset") + (y ? "Width" : "Height"),
                        b = 100,
                        O = "px" === s,
                        w = "%" === s;
                    if (s === g || !h || $[s] || $[g]) return h;
                    if ("px" !== g && !O && (h = t(e, r, n, "px")), p = e.getCTM && L(e), (w || "%" === g) && (l[r] || ~r.indexOf("adius"))) return a = p ? e.getBBox()[y ? "width" : "height"] : e[v], (0, u.Pr)(w ? h / a * b : h / 100 * a);
                    if (d[y ? "width" : "height"] = b + (O ? g : s), f = ~r.indexOf("adius") || "em" === s && e.appendChild && !x ? e : e.parentNode, p && (f = (e.ownerSVGElement || {}).parentNode), f && f !== i && f.appendChild || (f = i.body), (c = f._gsap) && w && c.width && y && c.time === u.xr.time && !c.uncache) return (0, u.Pr)(h / c.width * b);
                    if (!w || "height" !== r && "width" !== r)(w || "%" === g) && !H[I(f, "display")] && (d.position = I(e, "position")), f === e && (d.position = "static"), f.appendChild(o), a = o[v], f.removeChild(o), d.position = "absolute";
                    else {
                        var _ = e.style[r];
                        e.style[r] = b + s, a = e[v], _ ? e.style[r] = _ : Z(e, r)
                    }
                    return y && w && ((c = (0, u.DY)(f)).time = u.xr.time, c.width = f[v]), (0, u.Pr)(O ? a * h / b : a && h ? b / a * h : 0)
                },
                K = function(t, e, r, n) {
                    var i;
                    return a || j(), e in v && "transform" !== e && ~(e = v[e]).indexOf(",") && (e = e.split(",")[0]), l[e] && "transform" !== e ? (i = pt(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : ut(I(t, z)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = nt[e] && nt[e](t, e, r) || I(t, e) || (0, u.Ok)(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? J(t, e, i, r) + r : i
                },
                Q = function(t, e, r, n) {
                    if (!r || "none" === r) {
                        var i = D(e, t, 1),
                            s = i && I(t, i, 1);
                        s && s !== r ? (e = i, r = s) : "borderColor" === e && (r = I(t, "borderTopColor"))
                    }
                    var a, o, f, c, p, l, h, g, d, y, m, x = new u.Fo(this._pt, t.style, e, 0, 1, u.Ks),
                        v = 0,
                        b = 0;
                    if (x.b = r, x.e = n, r += "", "auto" === (n += "") && (l = t.style[e], t.style[e] = n, n = I(t, e) || n, l ? t.style[e] = l : Z(t, e)), a = [r, n], (0, u.kr)(a), n = a[1], f = (r = a[0]).match(u.d4) || [], (n.match(u.d4) || []).length) {
                        for (; o = u.d4.exec(n);) h = o[0], d = n.substring(v, o.index), p ? p = (p + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (p = 1), h !== (l = f[b++] || "") && (c = parseFloat(l) || 0, m = l.substr((c + "").length), "=" === h.charAt(1) && (h = (0, u.cy)(c, h) + m), g = parseFloat(h), y = h.substr((g + "").length), v = u.d4.lastIndex - y.length, y || (y = y || u.Fc.units[e] || m, v === n.length && (n += y, x.e += y)), m !== y && (c = J(t, e, l, y) || 0), x._pt = {
                            _next: x._pt,
                            p: d || 1 === b ? d : ",",
                            s: c,
                            c: g - c,
                            m: p && p < 4 || "zIndex" === e ? Math.round : 0
                        });
                        x.c = v < n.length ? n.substring(v, n.length) : ""
                    } else x.r = "display" === e && "none" === n ? M : P;
                    return u.bQ.test(n) && (x.e = 0), this._pt = x, x
                },
                tt = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                et = function(t) {
                    var e = t.split(" "),
                        r = e[0],
                        n = e[1] || "50%";
                    return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (t = r, r = n, n = t), e[0] = tt[r] || r, e[1] = tt[n] || n, e.join(" ")
                },
                rt = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var r, n, i, s = e.t,
                            a = s.style,
                            o = e.u,
                            f = s._gsap;
                        if ("all" === o || !0 === o) a.cssText = "", n = 1;
                        else
                            for (i = (o = o.split(",")).length; --i > -1;) r = o[i], l[r] && (n = 1, r = "transformOrigin" === r ? z : T), Z(s, r);
                        n && (Z(s, T), f && (f.svg && s.removeAttribute("transform"), pt(s, 1), f.uncache = 1, X(a)))
                    }
                },
                nt = {
                    clearProps: function(t, e, r, n, i) {
                        if ("isFromStart" !== i.data) {
                            var s = t._pt = new u.Fo(t._pt, e, r, 0, 0, rt);
                            return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1
                        }
                    }
                },
                it = [1, 0, 0, 1, 0, 0],
                st = {},
                at = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                ot = function(t) {
                    var e = I(t, T);
                    return at(e) ? it : e.substr(7).match(u.SI).map(u.Pr)
                },
                ft = function(t, e) {
                    var r, n, i, a, o = t._gsap || (0, u.DY)(t),
                        f = t.style,
                        c = ot(t);
                    return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (c = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? it : c : (c !== it || t.offsetParent || t === s || o.svg || (i = f.display, f.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, n = t.nextElementSibling, s.appendChild(t)), c = ot(t), i ? f.display = i : Z(t, "display"), a && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : s.removeChild(t))), e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
                },
                ct = function(t, e, r, n, i, s) {
                    var a, o, f, c = t._gsap,
                        p = i || ft(t, !0),
                        u = c.xOrigin || 0,
                        l = c.yOrigin || 0,
                        h = c.xOffset || 0,
                        g = c.yOffset || 0,
                        d = p[0],
                        y = p[1],
                        m = p[2],
                        x = p[3],
                        v = p[4],
                        b = p[5],
                        O = e.split(" "),
                        w = parseFloat(O[0]) || 0,
                        _ = parseFloat(O[1]) || 0;
                    r ? p !== it && (o = d * x - y * m) && (f = w * (-y / o) + _ * (d / o) - (d * b - y * v) / o, w = w * (x / o) + _ * (-m / o) + (m * b - x * v) / o, _ = f) : (w = (a = G(t)).x + (~O[0].indexOf("%") ? w / 100 * a.width : w), _ = a.y + (~(O[1] || O[0]).indexOf("%") ? _ / 100 * a.height : _)), n || !1 !== n && c.smooth ? (v = w - u, b = _ - l, c.xOffset = h + (v * d + b * m) - v, c.yOffset = g + (v * y + b * x) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = w, c.yOrigin = _, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!r, t.style[z] = "0px 0px", s && (U(s, c, "xOrigin", u, w), U(s, c, "yOrigin", l, _), U(s, c, "xOffset", h, c.xOffset), U(s, c, "yOffset", g, c.yOffset)), t.setAttribute("data-svg-origin", w + " " + _)
                },
                pt = function(t, e) {
                    var r = t._gsap || new u.l1(t);
                    if ("x" in r && !e && !r.uncache) return r;
                    var n, i, s, a, o, f, c, l, y, m, x, v, b, O, w, _, P, M, F, C, S, A, B, Y, k, X, E, W, N, V, D, j, R = t.style,
                        q = r.scaleX < 0,
                        G = "px",
                        Z = "deg",
                        U = getComputedStyle(t),
                        $ = I(t, z) || "0";
                    return n = i = s = f = c = l = y = m = x = 0, a = o = 1, r.svg = !(!t.getCTM || !L(t)), U.translate && ("none" === U.translate && "none" === U.scale && "none" === U.rotate || (R[T] = ("none" !== U.translate ? "translate3d(" + (U.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== U.rotate ? "rotate(" + U.rotate + ") " : "") + ("none" !== U.scale ? "scale(" + U.scale.split(" ").join(",") + ") " : "") + ("none" !== U[T] ? U[T] : "")), R.scale = R.rotate = R.translate = "none"), O = ft(t, r.svg), r.svg && (r.uncache ? (k = t.getBBox(), $ = r.xOrigin - k.x + "px " + (r.yOrigin - k.y) + "px", Y = "") : Y = !e && t.getAttribute("data-svg-origin"), ct(t, Y || $, !!Y || r.originIsAbsolute, !1 !== r.smooth, O)), v = r.xOrigin || 0, b = r.yOrigin || 0, O !== it && (M = O[0], F = O[1], C = O[2], S = O[3], n = A = O[4], i = B = O[5], 6 === O.length ? (a = Math.sqrt(M * M + F * F), o = Math.sqrt(S * S + C * C), f = M || F ? d(F, M) * h : 0, (y = C || S ? d(C, S) * h + f : 0) && (o *= Math.abs(Math.cos(y * g))), r.svg && (n -= v - (v * M + b * C), i -= b - (v * F + b * S))) : (j = O[6], V = O[7], E = O[8], W = O[9], N = O[10], D = O[11], n = O[12], i = O[13], s = O[14], c = (w = d(j, N)) * h, w && (Y = A * (_ = Math.cos(-w)) + E * (P = Math.sin(-w)), k = B * _ + W * P, X = j * _ + N * P, E = A * -P + E * _, W = B * -P + W * _, N = j * -P + N * _, D = V * -P + D * _, A = Y, B = k, j = X), l = (w = d(-C, N)) * h, w && (_ = Math.cos(-w), D = S * (P = Math.sin(-w)) + D * _, M = Y = M * _ - E * P, F = k = F * _ - W * P, C = X = C * _ - N * P), f = (w = d(F, M)) * h, w && (Y = M * (_ = Math.cos(w)) + F * (P = Math.sin(w)), k = A * _ + B * P, F = F * _ - M * P, B = B * _ - A * P, M = Y, A = k), c && Math.abs(c) + Math.abs(f) > 359.9 && (c = f = 0, l = 180 - l), a = (0, u.Pr)(Math.sqrt(M * M + F * F + C * C)), o = (0, u.Pr)(Math.sqrt(B * B + j * j)), w = d(A, B), y = Math.abs(w) > 2e-4 ? w * h : 0, x = D ? 1 / (D < 0 ? -D : D) : 0), r.svg && (Y = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !at(I(t, T)), Y && t.setAttribute("transform", Y))), Math.abs(y) > 90 && Math.abs(y) < 270 && (q ? (a *= -1, y += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (o *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + G, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + G, r.z = s + G, r.scaleX = (0, u.Pr)(a), r.scaleY = (0, u.Pr)(o), r.rotation = (0, u.Pr)(f) + Z, r.rotationX = (0, u.Pr)(c) + Z, r.rotationY = (0, u.Pr)(l) + Z, r.skewX = y + Z, r.skewY = m + Z, r.transformPerspective = x + G, (r.zOrigin = parseFloat($.split(" ")[2]) || !e && r.zOrigin || 0) && (R[z] = ut($)), r.xOffset = r.yOffset = 0, r.force3D = u.Fc.force3D, r.renderTransform = r.svg ? xt : p ? mt : ht, r.uncache = 0, r
                },
                ut = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                lt = function(t, e, r) {
                    var n = (0, u.Wy)(e);
                    return (0, u.Pr)(parseFloat(e) + parseFloat(J(t, "x", r + "px", n))) + n
                },
                ht = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, mt(t, e)
                },
                gt = "0deg",
                dt = "0px",
                yt = ") ",
                mt = function(t, e) {
                    var r = e || this,
                        n = r.xPercent,
                        i = r.yPercent,
                        s = r.x,
                        a = r.y,
                        o = r.z,
                        f = r.rotation,
                        c = r.rotationY,
                        p = r.rotationX,
                        u = r.skewX,
                        l = r.skewY,
                        h = r.scaleX,
                        d = r.scaleY,
                        y = r.transformPerspective,
                        m = r.force3D,
                        x = r.target,
                        v = r.zOrigin,
                        b = "",
                        O = "auto" === m && t && 1 !== t || !0 === m;
                    if (v && (p !== gt || c !== gt)) {
                        var w, _ = parseFloat(c) * g,
                            P = Math.sin(_),
                            M = Math.cos(_);
                        _ = parseFloat(p) * g, w = Math.cos(_), s = lt(x, s, P * w * -v), a = lt(x, a, -Math.sin(_) * -v), o = lt(x, o, M * w * -v + v)
                    }
                    y !== dt && (b += "perspective(" + y + yt), (n || i) && (b += "translate(" + n + "%, " + i + "%) "), (O || s !== dt || a !== dt || o !== dt) && (b += o !== dt || O ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + yt), f !== gt && (b += "rotate(" + f + yt), c !== gt && (b += "rotateY(" + c + yt), p !== gt && (b += "rotateX(" + p + yt), u === gt && l === gt || (b += "skew(" + u + ", " + l + yt), 1 === h && 1 === d || (b += "scale(" + h + ", " + d + yt), x.style[T] = b || "translate(0, 0)"
                },
                xt = function(t, e) {
                    var r, n, i, s, a, o = e || this,
                        f = o.xPercent,
                        c = o.yPercent,
                        p = o.x,
                        l = o.y,
                        h = o.rotation,
                        d = o.skewX,
                        y = o.skewY,
                        m = o.scaleX,
                        x = o.scaleY,
                        v = o.target,
                        b = o.xOrigin,
                        O = o.yOrigin,
                        w = o.xOffset,
                        _ = o.yOffset,
                        P = o.forceCSS,
                        M = parseFloat(p),
                        F = parseFloat(l);
                    h = parseFloat(h), d = parseFloat(d), (y = parseFloat(y)) && (d += y = parseFloat(y), h += y), h || d ? (h *= g, d *= g, r = Math.cos(h) * m, n = Math.sin(h) * m, i = Math.sin(h - d) * -x, s = Math.cos(h - d) * x, d && (y *= g, a = Math.tan(d - y), i *= a = Math.sqrt(1 + a * a), s *= a, y && (a = Math.tan(y), r *= a = Math.sqrt(1 + a * a), n *= a)), r = (0, u.Pr)(r), n = (0, u.Pr)(n), i = (0, u.Pr)(i), s = (0, u.Pr)(s)) : (r = m, s = x, n = i = 0), (M && !~(p + "").indexOf("px") || F && !~(l + "").indexOf("px")) && (M = J(v, "x", p, "px"), F = J(v, "y", l, "px")), (b || O || w || _) && (M = (0, u.Pr)(M + b - (b * r + O * i) + w), F = (0, u.Pr)(F + O - (b * n + O * s) + _)), (f || c) && (a = v.getBBox(), M = (0, u.Pr)(M + f / 100 * a.width), F = (0, u.Pr)(F + c / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + s + "," + M + "," + F + ")", v.setAttribute("transform", a), P && (v.style[T] = a)
                },
                vt = function(t, e, r, n, i) {
                    var s, a, o = 360,
                        f = (0, u.r9)(i),
                        c = parseFloat(i) * (f && ~i.indexOf("rad") ? h : 1) - n,
                        p = n + c + "deg";
                    return f && ("short" === (s = i.split("_")[1]) && (c %= o) !== c % 180 && (c += c < 0 ? o : -360), "cw" === s && c < 0 ? c = (c + 36e9) % o - ~~(c / o) * o : "ccw" === s && c > 0 && (c = (c - 36e9) % o - ~~(c / o) * o)), t._pt = a = new u.Fo(t._pt, e, r, n, c, O), a.e = p, a.u = "deg", t._props.push(r), a
                },
                bt = function(t, e) {
                    for (var r in e) t[r] = e[r];
                    return t
                },
                Ot = function(t, e, r) {
                    var n, i, s, a, o, f, c, p = bt({}, r._gsap),
                        h = r.style;
                    for (i in p.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), h[T] = e, n = pt(r, 1), Z(r, T), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[T], h[T] = e, n = pt(r, 1), h[T] = s), l)(s = p[i]) !== (a = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = (0, u.Wy)(s) !== (c = (0, u.Wy)(a)) ? J(r, i, s, c) : parseFloat(s), f = parseFloat(a), t._pt = new u.Fo(t._pt, n, i, o, f - o, b), t._pt.u = c || 0, t._props.push(i));
                    bt(n, p)
                };
            (0, u.fS)("padding,margin,Width,Radius", (function(t, e) {
                var r = "Top",
                    n = "Right",
                    i = "Bottom",
                    s = "Left",
                    a = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map((function(r) {
                        return e < 2 ? t + r : "border" + r + t
                    }));
                nt[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
                    var s, o;
                    if (arguments.length < 4) return s = a.map((function(e) {
                        return K(t, e, r)
                    })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
                    s = (n + "").split(" "), o = {}, a.forEach((function(t, e) {
                        return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
                    })), t.init(e, o, i)
                }
            }));
            var wt = {
                name: "css",
                register: j,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, r, n, i) {
                    var s, o, f, c, p, h, g, d, y, m, O, P, M, F, C, S, A = this._props,
                        B = t.style,
                        Y = r.vars.startAt;
                    for (g in a || j(), this.styles = this.styles || W(t), S = this.styles.props, this.tween = r, e)
                        if ("autoRound" !== g && (o = e[g], !u.$i[g] || !(0, u.if)(g, e, r, n, t, i)))
                            if (p = typeof o, h = nt[g], "function" === p && (p = typeof(o = o.call(r, n, t, i))), "string" === p && ~o.indexOf("random(") && (o = (0, u.UI)(o)), h) h(this, t, g, o, r) && (C = 1);
                            else if ("--" === g.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(g) + "").trim(), o += "", u.GN.lastIndex = 0, u.GN.test(s) || (d = (0, u.Wy)(s), y = (0, u.Wy)(o)), y ? d !== y && (s = J(t, g, s, y) + y) : d && (o += d), this.add(B, "setProperty", s, o, n, i, 0, 0, g), A.push(g), S.push(g, 0, B[g]);
                    else if ("undefined" !== p) {
                        if (Y && g in Y ? (s = "function" === typeof Y[g] ? Y[g].call(r, n, t, i) : Y[g], (0, u.r9)(s) && ~s.indexOf("random(") && (s = (0, u.UI)(s)), (0, u.Wy)(s + "") || "auto" === s || (s += u.Fc.units[g] || (0, u.Wy)(K(t, g)) || ""), "=" === (s + "").charAt(1) && (s = K(t, g))) : s = K(t, g), c = parseFloat(s), (m = "string" === p && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), f = parseFloat(o), g in v && ("autoAlpha" === g && (1 === c && "hidden" === K(t, "visibility") && f && (c = 0), S.push("visibility", 0, B.visibility), U(this, B, "visibility", c ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), "scale" !== g && "transform" !== g && ~(g = v[g]).indexOf(",") && (g = g.split(",")[0])), O = g in l)
                            if (this.styles.save(g), P || ((M = t._gsap).renderTransform && !e.parseTransform || pt(t, e.parseTransform), F = !1 !== e.smoothOrigin && M.smooth, (P = this._pt = new u.Fo(this._pt, B, T, 0, 1, M.renderTransform, M, 0, -1)).dep = 1), "scale" === g) this._pt = new u.Fo(this._pt, M, "scaleY", M.scaleY, (m ? (0, u.cy)(M.scaleY, m + f) : f) - M.scaleY || 0, b), this._pt.u = 0, A.push("scaleY", g), g += "X";
                            else {
                                if ("transformOrigin" === g) {
                                    S.push(z, 0, B[z]), o = et(o), M.svg ? ct(t, o, 0, F, 0, this) : ((y = parseFloat(o.split(" ")[2]) || 0) !== M.zOrigin && U(this, M, "zOrigin", M.zOrigin, y), U(this, B, g, ut(s), ut(o)));
                                    continue
                                }
                                if ("svgOrigin" === g) {
                                    ct(t, o, 1, F, 0, this);
                                    continue
                                }
                                if (g in st) {
                                    vt(this, M, g, c, m ? (0, u.cy)(c, m + o) : o);
                                    continue
                                }
                                if ("smoothOrigin" === g) {
                                    U(this, M, "smooth", M.smooth, o);
                                    continue
                                }
                                if ("force3D" === g) {
                                    M[g] = o;
                                    continue
                                }
                                if ("transform" === g) {
                                    Ot(this, o, t);
                                    continue
                                }
                            }
                        else g in B || (g = D(g) || g);
                        if (O || (f || 0 === f) && (c || 0 === c) && !x.test(o) && g in B) f || (f = 0), (d = (s + "").substr((c + "").length)) !== (y = (0, u.Wy)(o) || (g in u.Fc.units ? u.Fc.units[g] : d)) && (c = J(t, g, s, y)), this._pt = new u.Fo(this._pt, O ? M : B, g, c, (m ? (0, u.cy)(c, m + f) : f) - c, O || "px" !== y && "zIndex" !== g || !1 === e.autoRound ? b : _), this._pt.u = y || 0, d !== y && "%" !== y && (this._pt.b = s, this._pt.r = w);
                        else if (g in B) Q.call(this, t, g, s, m ? m + o : o);
                        else if (g in t) this.add(t, g, s || t[g], m ? m + o : o, n, i);
                        else if ("parseTransform" !== g) {
                            (0, u.lC)(g, o);
                            continue
                        }
                        O || (g in B ? S.push(g, 0, B[g]) : S.push(g, 1, s || t[g])), A.push(g)
                    }
                    C && (0, u.JV)(this)
                },
                render: function(t, e) {
                    if (e.tween._time || !c())
                        for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
                    else e.styles.revert()
                },
                get: K,
                aliases: v,
                getSetter: function(t, e, r) {
                    var n = v[e];
                    return n && n.indexOf(",") < 0 && (e = n), e in l && e !== z && (t._gsap.x || K(t, "x")) ? r && f === r ? "scale" === e ? A : S : (f = r || {}) && ("scale" === e ? B : Y) : t.style && !(0, u.m2)(t.style[e]) ? F : ~e.indexOf("-") ? C : (0, u.S5)(t, e)
                },
                core: {
                    _removeProperty: Z,
                    _getMatrix: ft
                }
            };
            u.p8.utils.checkPrefix = D, u.p8.core.getStyleSaver = W,
                function(t, e, r, n) {
                    var i = (0, u.fS)(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
                        l[t] = 1
                    }));
                    (0, u.fS)(e, (function(t) {
                        u.Fc.units[t] = "deg", st[t] = 1
                    })), v[i[13]] = t + "," + e, (0, u.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
                        var e = t.split(":");
                        v[e[1]] = i[e[0]]
                    }))
                }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), (0, u.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
                    u.Fc.units[t] = "px"
                })), u.p8.registerPlugin(wt);
            var _t = u.p8.registerPlugin(wt) || u.p8;
            _t.core.Tween
        }
    }
]);