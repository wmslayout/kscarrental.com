(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5676], {
        18698: function() {},
        28226: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return be
                }
            });
            var o = n(67294),
                i = n(73935);

            function r(e, t, n) {
                let o, i = n.initialDeps ? ? [];
                return () => {
                    var r, l, s, a;
                    let u;
                    n.key && (null == (r = n.debug) ? void 0 : r.call(n)) && (u = Date.now());
                    const c = e();
                    if (!(c.length !== i.length || c.some(((e, t) => i[t] !== e)))) return o;
                    let d;
                    if (i = c, n.key && (null == (l = n.debug) ? void 0 : l.call(n)) && (d = Date.now()), o = t(...c), n.key && (null == (s = n.debug) ? void 0 : s.call(n))) {
                        const e = Math.round(100 * (Date.now() - u)) / 100,
                            t = Math.round(100 * (Date.now() - d)) / 100,
                            o = t / 16,
                            i = (e, t) => {
                                for (e = String(e); e.length < t;) e = " " + e;
                                return e
                            };
                        console.info(`%c\u23f1 ${i(t,5)} /${i(e,5)} ms`, `\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(${Math.max(0,Math.min(120-120*o,120))}deg 100% 31%);`, null == n ? void 0 : n.key)
                    }
                    return null == (a = null == n ? void 0 : n.onChange) || a.call(n, o), o
                }
            }

            function l(e, t) {
                if (void 0 === e) throw new Error("Unexpected undefined" + (t ? `: ${t}` : ""));
                return e
            }
            const s = (e, t, n) => {
                    let o;
                    return function(...i) {
                        e.clearTimeout(o), o = e.setTimeout((() => t.apply(this, i)), n)
                    }
                },
                a = e => e,
                u = e => {
                    const t = Math.max(e.startIndex - e.overscan, 0),
                        n = Math.min(e.endIndex + e.overscan, e.count - 1),
                        o = [];
                    for (let i = t; i <= n; i++) o.push(i);
                    return o
                },
                c = (e, t) => {
                    const n = e.scrollElement;
                    if (!n) return;
                    const o = e.targetWindow;
                    if (!o) return;
                    const i = e => {
                        const {
                            width: n,
                            height: o
                        } = e;
                        t({
                            width: Math.round(n),
                            height: Math.round(o)
                        })
                    };
                    if (i(n.getBoundingClientRect()), !o.ResizeObserver) return () => {};
                    const r = new o.ResizeObserver((e => {
                        const t = e[0];
                        if (null == t ? void 0 : t.borderBoxSize) {
                            const e = t.borderBoxSize[0];
                            if (e) return void i({
                                width: e.inlineSize,
                                height: e.blockSize
                            })
                        }
                        i(n.getBoundingClientRect())
                    }));
                    return r.observe(n, {
                        box: "border-box"
                    }), () => {
                        r.unobserve(n)
                    }
                },
                d = {
                    passive: !0
                },
                h = "undefined" == typeof window || "onscrollend" in window,
                p = (e, t) => {
                    const n = e.scrollElement;
                    if (!n) return;
                    const o = e.targetWindow;
                    if (!o) return;
                    let i = 0;
                    const r = h ? () => {} : s(o, (() => {
                            t(i, !1)
                        }), e.options.isScrollingResetDelay),
                        l = o => () => {
                            i = n[e.options.horizontal ? "scrollLeft" : "scrollTop"], r(), t(i, o)
                        },
                        a = l(!0),
                        u = l(!1);
                    return u(), n.addEventListener("scroll", a, d), n.addEventListener("scrollend", u, d), () => {
                        n.removeEventListener("scroll", a), n.removeEventListener("scrollend", u)
                    }
                },
                f = (e, t, n) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        const e = t.borderBoxSize[0];
                        if (e) {
                            return Math.round(e[n.options.horizontal ? "inlineSize" : "blockSize"])
                        }
                    }
                    return Math.round(e.getBoundingClientRect()[n.options.horizontal ? "width" : "height"])
                },
                m = (e, {
                    adjustments: t = 0,
                    behavior: n
                }, o) => {
                    var i, r;
                    const l = e + t;
                    null == (r = null == (i = o.scrollElement) ? void 0 : i.scrollTo) || r.call(i, {
                        [o.options.horizontal ? "left" : "top"]: l,
                        behavior: n
                    })
                };
            class v {
                constructor(e) {
                    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.observer = (() => {
                        let e = null;
                        const t = () => e || (this.targetWindow && this.targetWindow.ResizeObserver ? e = new this.targetWindow.ResizeObserver((e => {
                            e.forEach((e => {
                                this._measureElement(e.target, e)
                            }))
                        })) : null);
                        return {
                            disconnect: () => {
                                var e;
                                return null == (e = t()) ? void 0 : e.disconnect()
                            },
                            observe: e => {
                                var n;
                                return null == (n = t()) ? void 0 : n.observe(e, {
                                    box: "border-box"
                                })
                            },
                            unobserve: e => {
                                var n;
                                return null == (n = t()) ? void 0 : n.unobserve(e)
                            }
                        }
                    })(), this.range = null, this.setOptions = e => {
                        Object.entries(e).forEach((([t, n]) => {
                            "undefined" === typeof n && delete e[t]
                        })), this.options = {
                            debug: !1,
                            initialOffset: 0,
                            overscan: 1,
                            paddingStart: 0,
                            paddingEnd: 0,
                            scrollPaddingStart: 0,
                            scrollPaddingEnd: 0,
                            horizontal: !1,
                            getItemKey: a,
                            rangeExtractor: u,
                            onChange: () => {},
                            measureElement: f,
                            initialRect: {
                                width: 0,
                                height: 0
                            },
                            scrollMargin: 0,
                            gap: 0,
                            indexAttribute: "data-index",
                            initialMeasurementsCache: [],
                            lanes: 1,
                            isScrollingResetDelay: 150,
                            enabled: !0,
                            ...e
                        }
                    }, this.notify = (e, t) => {
                        var n, o;
                        const {
                            startIndex: i,
                            endIndex: r
                        } = this.range ? ? {
                            startIndex: void 0,
                            endIndex: void 0
                        }, l = this.calculateRange();
                        (e || i !== (null == l ? void 0 : l.startIndex) || r !== (null == l ? void 0 : l.endIndex)) && (null == (o = (n = this.options).onChange) || o.call(n, this, t))
                    }, this.cleanup = () => {
                        this.unsubs.filter(Boolean).forEach((e => e())), this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.observer.disconnect(), this.elementsCache.clear()
                    }, this._didMount = () => () => {
                        this.cleanup()
                    }, this._willUpdate = () => {
                        var e;
                        const t = this.options.enabled ? this.options.getScrollElement() : null;
                        if (this.scrollElement !== t) {
                            if (this.cleanup(), !t) return void this.notify(!1, !1);
                            this.scrollElement = t, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ? ? null, this._scrollToOffset(this.getScrollOffset(), {
                                adjustments: void 0,
                                behavior: void 0
                            }), this.unsubs.push(this.options.observeElementRect(this, (e => {
                                this.scrollRect = e, this.notify(!1, !1)
                            }))), this.unsubs.push(this.options.observeElementOffset(this, ((e, t) => {
                                this.scrollAdjustments = 0, this.scrollDirection = t ? this.getScrollOffset() < e ? "forward" : "backward" : null, this.scrollOffset = e;
                                const n = this.isScrolling;
                                this.isScrolling = t, this.notify(n !== t, t)
                            })))
                        }
                    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ? ? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ? ? ("function" === typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
                        const n = new Map,
                            o = new Map;
                        for (let i = t - 1; i >= 0; i--) {
                            const t = e[i];
                            if (n.has(t.lane)) continue;
                            const r = o.get(t.lane);
                            if (null == r || t.end > r.end ? o.set(t.lane, t) : t.end < r.end && n.set(t.lane, !0), n.size === this.options.lanes) break
                        }
                        return o.size === this.options.lanes ? Array.from(o.values()).sort(((e, t) => e.end === t.end ? e.index - t.index : e.end - t.end))[0] : void 0
                    }, this.getMeasurementOptions = r((() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled]), ((e, t, n, o, i) => (this.pendingMeasuredCacheIndexes = [], {
                        count: e,
                        paddingStart: t,
                        scrollMargin: n,
                        getItemKey: o,
                        enabled: i
                    })), {
                        key: !1
                    }), this.getMeasurements = r((() => [this.getMeasurementOptions(), this.itemSizeCache]), (({
                        count: e,
                        paddingStart: t,
                        scrollMargin: n,
                        getItemKey: o,
                        enabled: i
                    }, r) => {
                        var l;
                        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), [];
                        0 === this.measurementsCache.length && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e => {
                            this.itemSizeCache.set(e.key, e.size)
                        })));
                        const s = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                        this.pendingMeasuredCacheIndexes = [];
                        const a = this.measurementsCache.slice(0, s);
                        for (let u = s; u < e; u++) {
                            let e = null == (l = this.measurementsCache[u]) ? void 0 : l.measureElement;
                            e || (e = e => {
                                const t = o(u),
                                    n = this.elementsCache.get(t);
                                e ? (n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(t, e)), e.isConnected && this.resizeItem(u, this.options.measureElement(e, void 0, this))) : n && (this.observer.unobserve(n), this.elementsCache.delete(t))
                            });
                            const i = o(u),
                                s = 1 === this.options.lanes ? a[u - 1] : this.getFurthestMeasurement(a, u),
                                c = s ? s.end + this.options.gap : t + n,
                                d = r.get(i),
                                h = "number" === typeof d ? d : this.options.estimateSize(u),
                                p = c + h,
                                f = s ? s.lane : u % this.options.lanes;
                            a[u] = {
                                index: u,
                                start: c,
                                size: h,
                                end: p,
                                key: i,
                                lane: f,
                                measureElement: e
                            }
                        }
                        return this.measurementsCache = a, a
                    }), {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.calculateRange = r((() => [this.getMeasurements(), this.getSize(), this.getScrollOffset()]), ((e, t, n) => this.range = e.length > 0 && t > 0 ? function({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n
                    }) {
                        const o = e.length - 1,
                            i = b(0, o, (t => e[t].start), n);
                        let r = i;
                        for (; r < o && e[r].end < n + t;) r++;
                        return {
                            startIndex: i,
                            endIndex: r
                        }
                    }({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: n
                    }) : null), {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.getIndexes = r((() => [this.options.rangeExtractor, this.calculateRange(), this.options.overscan, this.options.count]), ((e, t, n, o) => null === t ? [] : e({
                        startIndex: t.startIndex,
                        endIndex: t.endIndex,
                        overscan: n,
                        count: o
                    })), {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.indexFromElement = e => {
                        const t = this.options.indexAttribute,
                            n = e.getAttribute(t);
                        return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1)
                    }, this._measureElement = (e, t) => {
                        const n = this.indexFromElement(e),
                            o = this.getMeasurements()[n];
                        if (!o || !e.isConnected) return void this.elementsCache.forEach(((t, n) => {
                            t === e && (this.observer.unobserve(e), this.elementsCache.delete(n))
                        }));
                        const i = this.elementsCache.get(o.key);
                        i !== e && (i && this.observer.unobserve(i), this.observer.observe(e), this.elementsCache.set(o.key, e)), this.resizeItem(n, this.options.measureElement(e, t, this))
                    }, this.resizeItem = (e, t) => {
                        const n = this.getMeasurements()[e];
                        if (!n) return;
                        const o = t - (this.itemSizeCache.get(n.key) ? ? n.size);
                        0 !== o && ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange ? this.shouldAdjustScrollPositionOnItemSizeChange(n, o, this) : n.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
                            adjustments: this.scrollAdjustments += o,
                            behavior: void 0
                        }), this.pendingMeasuredCacheIndexes.push(n.index), this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t)), this.notify(!0, !1))
                    }, this.measureElement = e => {
                        e && this._measureElement(e, void 0)
                    }, this.getVirtualItems = r((() => [this.getIndexes(), this.getMeasurements()]), ((e, t) => {
                        const n = [];
                        for (let o = 0, i = e.length; o < i; o++) {
                            const i = t[e[o]];
                            n.push(i)
                        }
                        return n
                    }), {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.getVirtualItemForOffset = e => {
                        const t = this.getMeasurements();
                        if (0 !== t.length) return l(t[b(0, t.length - 1, (e => l(t[e]).start), e)])
                    }, this.getOffsetForAlignment = (e, t) => {
                        const n = this.getSize(),
                            o = this.getScrollOffset();
                        "auto" === t && (t = e <= o ? "start" : e >= o + n ? "end" : "start"), "start" === t || ("end" === t ? e -= n : "center" === t && (e -= n / 2));
                        const i = this.options.horizontal ? "scrollWidth" : "scrollHeight",
                            r = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[i] : this.scrollElement[i] : 0) - n;
                        return Math.max(Math.min(r, e), 0)
                    }, this.getOffsetForIndex = (e, t = "auto") => {
                        e = Math.max(0, Math.min(e, this.options.count - 1));
                        const n = this.getMeasurements()[e];
                        if (!n) return;
                        const o = this.getSize(),
                            i = this.getScrollOffset();
                        if ("auto" === t)
                            if (n.end >= i + o - this.options.scrollPaddingEnd) t = "end";
                            else {
                                if (!(n.start <= i + this.options.scrollPaddingStart)) return [i, t];
                                t = "start"
                            }
                        const r = "end" === t ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
                        return [this.getOffsetForAlignment(r, t), t]
                    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
                        null !== this.scrollToIndexTimeoutId && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null)
                    }, this.scrollToOffset = (e, {
                        align: t = "start",
                        behavior: n
                    } = {}) => {
                        this.cancelScrollToIndex(), "smooth" === n && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                            adjustments: void 0,
                            behavior: n
                        })
                    }, this.scrollToIndex = (e, {
                        align: t = "auto",
                        behavior: n
                    } = {}) => {
                        e = Math.max(0, Math.min(e, this.options.count - 1)), this.cancelScrollToIndex(), "smooth" === n && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
                        const o = this.getOffsetForIndex(e, t);
                        if (!o) return;
                        const [i, r] = o;
                        this._scrollToOffset(i, {
                            adjustments: void 0,
                            behavior: n
                        }), "smooth" !== n && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout((() => {
                            this.scrollToIndexTimeoutId = null;
                            if (this.elementsCache.has(this.options.getItemKey(e))) {
                                const [i] = l(this.getOffsetForIndex(e, r));
                                t = i, o = this.getScrollOffset(), Math.abs(t - o) < 1 || this.scrollToIndex(e, {
                                    align: r,
                                    behavior: n
                                })
                            } else this.scrollToIndex(e, {
                                align: r,
                                behavior: n
                            });
                            var t, o
                        })))
                    }, this.scrollBy = (e, {
                        behavior: t
                    } = {}) => {
                        this.cancelScrollToIndex(), "smooth" === t && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + e, {
                            adjustments: void 0,
                            behavior: t
                        })
                    }, this.getTotalSize = () => {
                        var e;
                        const t = this.getMeasurements();
                        let n;
                        return n = 0 === t.length ? this.options.paddingStart : 1 === this.options.lanes ? (null == (e = t[t.length - 1]) ? void 0 : e.end) ? ? 0 : Math.max(...t.slice(-this.options.lanes).map((e => e.end))), n - this.options.scrollMargin + this.options.paddingEnd
                    }, this._scrollToOffset = (e, {
                        adjustments: t,
                        behavior: n
                    }) => {
                        this.options.scrollToFn(e, {
                            behavior: n,
                            adjustments: t
                        }, this)
                    }, this.measure = () => {
                        var e, t;
                        this.itemSizeCache = new Map, null == (t = (e = this.options).onChange) || t.call(e, this, !1)
                    }, this.setOptions(e)
                }
            }
            const b = (e, t, n, o) => {
                for (; e <= t;) {
                    const i = (e + t) / 2 | 0,
                        r = n(i);
                    if (r < o) e = i + 1;
                    else {
                        if (!(r > o)) return i;
                        t = i - 1
                    }
                }
                return e > 0 ? e - 1 : 0
            };
            const g = "undefined" !== typeof document ? o.useLayoutEffect : o.useEffect;

            function x(e) {
                const t = o.useReducer((() => ({})), {})[1],
                    n = { ...e,
                        onChange: (n, o) => {
                            var r;
                            o ? (0, i.flushSync)(t) : t(), null == (r = e.onChange) || r.call(e, n, o)
                        }
                    },
                    [r] = o.useState((() => new v(n)));
                return r.setOptions(n), o.useEffect((() => r._didMount()), []), g((() => r._willUpdate())), r
            }
            var O = n(16723),
                I = n(3855);

            function R(e, t) {
                let [n, i] = (0, o.useState)(e), r = (0, I.E)(e);
                return (0, O.e)((() => i(r.current)), [r, i, ...t]), n
            }
            var S, T, C, y = n(31147),
                E = n(94192),
                M = n(73781),
                w = n(19946),
                z = n(39650),
                P = n(51074),
                k = n(14157),
                A = n(23784),
                F = n(40476),
                D = n(31591),
                _ = n(96599),
                L = n(46045),
                V = n(16567),
                j = n(15597),
                B = n(64103),
                N = n(11497),
                $ = n(9362),
                W = n(84575),
                U = n(18689),
                q = n(32984),
                K = n(78657),
                Y = n(12351),
                G = n(61363),
                Z = n(83454),
                H = ((C = H || {})[C.Open = 0] = "Open", C[C.Closed = 1] = "Closed", C),
                J = (e => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(J || {}),
                Q = ((T = Q || {})[T.Pointer = 0] = "Pointer", T[T.Focus = 1] = "Focus", T[T.Other = 2] = "Other", T),
                X = ((S = X || {})[S.OpenCombobox = 0] = "OpenCombobox", S[S.CloseCombobox = 1] = "CloseCombobox", S[S.GoToOption = 2] = "GoToOption", S[S.RegisterOption = 3] = "RegisterOption", S[S.UnregisterOption = 4] = "UnregisterOption", S[S.RegisterLabel = 5] = "RegisterLabel", S[S.SetActivationTrigger = 6] = "SetActivationTrigger", S[S.UpdateVirtualOptions = 7] = "UpdateVirtualOptions", S);

            function ee(e, t = (e => e)) {
                let n = null !== e.activeOptionIndex ? e.options[e.activeOptionIndex] : null,
                    o = t(e.options.slice()),
                    i = o.length > 0 && null !== o[0].dataRef.current.order ? o.sort(((e, t) => e.dataRef.current.order - t.dataRef.current.order)) : (0, W.z2)(o, (e => e.dataRef.current.domRef.current)),
                    r = n ? i.indexOf(n) : null;
                return -1 === r && (r = null), {
                    options: i,
                    activeOptionIndex: r
                }
            }
            let te = {
                    1(e) {
                        var t;
                        return null != (t = e.dataRef.current) && t.disabled || 1 === e.comboboxState ? e : { ...e,
                            activeOptionIndex: null,
                            comboboxState: 1
                        }
                    },
                    0(e) {
                        var t, n;
                        if (null != (t = e.dataRef.current) && t.disabled || 0 === e.comboboxState) return e;
                        if (null != (n = e.dataRef.current) && n.value) {
                            let t = e.dataRef.current.calculateIndex(e.dataRef.current.value);
                            if (-1 !== t) return { ...e,
                                activeOptionIndex: t,
                                comboboxState: 0
                            }
                        }
                        return { ...e,
                            comboboxState: 0
                        }
                    },
                    2(e, t) {
                        var n, o, i, r, l;
                        if (null != (n = e.dataRef.current) && n.disabled || null != (o = e.dataRef.current) && o.optionsRef.current && (null == (i = e.dataRef.current) || !i.optionsPropsRef.current.static) && 1 === e.comboboxState) return e;
                        if (e.virtual) {
                            let n = t.focus === N.T.Specific ? t.idx : (0, N.d)(t, {
                                    resolveItems: () => e.virtual.options,
                                    resolveActiveIndex: () => {
                                        var t, n;
                                        return null != (n = null != (t = e.activeOptionIndex) ? t : e.virtual.options.findIndex((t => !e.virtual.disabled(t)))) ? n : null
                                    },
                                    resolveDisabled: e.virtual.disabled,
                                    resolveId() {
                                        throw new Error("Function not implemented.")
                                    }
                                }),
                                o = null != (r = t.trigger) ? r : 2;
                            return e.activeOptionIndex === n && e.activationTrigger === o ? e : { ...e,
                                activeOptionIndex: n,
                                activationTrigger: o
                            }
                        }
                        let s = ee(e);
                        if (null === s.activeOptionIndex) {
                            let e = s.options.findIndex((e => !e.dataRef.current.disabled)); - 1 !== e && (s.activeOptionIndex = e)
                        }
                        let a = t.focus === N.T.Specific ? t.idx : (0, N.d)(t, {
                                resolveItems: () => s.options,
                                resolveActiveIndex: () => s.activeOptionIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            }),
                            u = null != (l = t.trigger) ? l : 2;
                        return e.activeOptionIndex === a && e.activationTrigger === u ? e : { ...e,
                            ...s,
                            activeOptionIndex: a,
                            activationTrigger: u
                        }
                    },
                    3: (e, t) => {
                        var n, o, i;
                        if (null != (n = e.dataRef.current) && n.virtual) return { ...e,
                            options: [...e.options, t.payload]
                        };
                        let r = t.payload,
                            l = ee(e, (e => (e.push(r), e)));
                        null === e.activeOptionIndex && null != (o = e.dataRef.current) && o.isSelected(t.payload.dataRef.current.value) && (l.activeOptionIndex = l.options.indexOf(r));
                        let s = { ...e,
                            ...l,
                            activationTrigger: 2
                        };
                        return null != (i = e.dataRef.current) && i.__demoMode && void 0 === e.dataRef.current.value && (s.activeOptionIndex = 0), s
                    },
                    4: (e, t) => {
                        var n;
                        if (null != (n = e.dataRef.current) && n.virtual) return { ...e,
                            options: e.options.filter((e => e.id !== t.id))
                        };
                        let o = ee(e, (e => {
                            let n = e.findIndex((e => e.id === t.id));
                            return -1 !== n && e.splice(n, 1), e
                        }));
                        return { ...e,
                            ...o,
                            activationTrigger: 2
                        }
                    },
                    5: (e, t) => e.labelId === t.id ? e : { ...e,
                        labelId: t.id
                    },
                    6: (e, t) => e.activationTrigger === t.trigger ? e : { ...e,
                        activationTrigger: t.trigger
                    },
                    7: (e, t) => {
                        var n;
                        if ((null == (n = e.virtual) ? void 0 : n.options) === t.options) return e;
                        let o = e.activeOptionIndex;
                        if (null !== e.activeOptionIndex) {
                            let n = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
                            o = -1 !== n ? n : null
                        }
                        return { ...e,
                            activeOptionIndex: o,
                            virtual: Object.assign({}, e.virtual, {
                                options: t.options
                            })
                        }
                    }
                },
                ne = (0, o.createContext)(null);

            function oe(e) {
                let t = (0, o.useContext)(ne);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, oe), t
                }
                return t
            }
            ne.displayName = "ComboboxActionsContext";
            let ie = (0, o.createContext)(null);

            function re(e) {
                var t;
                let n = se("VirtualProvider"),
                    [i, r] = (0, o.useMemo)((() => {
                        let e = n.optionsRef.current;
                        if (!e) return [0, 0];
                        let t = window.getComputedStyle(e);
                        return [parseFloat(t.paddingBlockStart || t.paddingTop), parseFloat(t.paddingBlockEnd || t.paddingBottom)]
                    }), [n.optionsRef.current]),
                    l = (u = {
                        scrollPaddingStart: i,
                        scrollPaddingEnd: r,
                        count: n.virtual.options.length,
                        estimateSize: () => 40,
                        getScrollElement() {
                            var e;
                            return null != (e = n.optionsRef.current) ? e : null
                        },
                        overscan: 12
                    }, x({
                        observeElementRect: c,
                        observeElementOffset: p,
                        scrollToFn: m,
                        ...u
                    })),
                    [s, a] = (0, o.useState)(0);
                var u;
                return (0, O.e)((() => {
                    a((e => e + 1))
                }), [null == (t = n.virtual) ? void 0 : t.options]), o.createElement(ie.Provider, {
                    value: l
                }, o.createElement("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: `${l.getTotalSize()}px`
                    },
                    ref: e => {
                        if (e) {
                            if ("undefined" != typeof Z && void 0 !== Z.env.JEST_WORKER_ID || 0 === n.activationTrigger) return;
                            null !== n.activeOptionIndex && n.virtual.options.length > n.activeOptionIndex && l.scrollToIndex(n.activeOptionIndex)
                        }
                    }
                }, l.getVirtualItems().map((t => {
                    var i;
                    return o.createElement(o.Fragment, {
                        key: t.key
                    }, o.cloneElement(null == (i = e.children) ? void 0 : i.call(e, {
                        option: n.virtual.options[t.index],
                        open: 0 === n.comboboxState
                    }), {
                        key: `${s}-${t.key}`,
                        "data-index": t.index,
                        "aria-setsize": n.virtual.options.length,
                        "aria-posinset": t.index + 1,
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: `translateY(${t.start}px)`,
                            overflowAnchor: "none"
                        }
                    }))
                }))))
            }
            let le = (0, o.createContext)(null);

            function se(e) {
                let t = (0, o.useContext)(le);
                if (null === t) {
                    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, se), t
                }
                return t
            }

            function ae(e, t) {
                return (0, q.E)(t.type, te, e, t)
            }
            le.displayName = "ComboboxDataContext";
            let ue = o.Fragment;
            let ce = Y.AN.RenderStrategy | Y.AN.Static;
            let de = (0, Y.yV)((function(e, t) {
                    let {
                        value: n,
                        defaultValue: i,
                        onChange: r,
                        form: l,
                        name: s,
                        by: a = null,
                        disabled: u = !1,
                        __demoMode: c = !1,
                        nullable: d = !1,
                        multiple: h = !1,
                        immediate: p = !1,
                        virtual: f = null,
                        ...m
                    } = e, v = null, [b = (h ? [] : void 0), g] = (0, y.q)(n, r, i), [x, I] = (0, o.useReducer)(ae, {
                        dataRef: (0, o.createRef)(),
                        comboboxState: c ? 0 : 1,
                        options: [],
                        virtual: null,
                        activeOptionIndex: null,
                        activationTrigger: 2,
                        labelId: null
                    }), R = (0, o.useRef)(!1), S = (0, o.useRef)({
                        static: !1,
                        hold: !1
                    }), T = (0, o.useRef)(null), C = (0, o.useRef)(null), w = (0, o.useRef)(null), P = (0, o.useRef)(null), k = (0, M.z)("string" == typeof a ? (e, t) => {
                        let n = a;
                        return (null == e ? void 0 : e[n]) === (null == t ? void 0 : t[n])
                    } : null != a ? a : (e, t) => e === t), A = (0, M.z)((e => x.options.findIndex((t => k(t.dataRef.current.value, e))))), F = (0, o.useCallback)((e => (0, q.E)(_.mode, {
                        1: () => b.some((t => k(t, e))),
                        0: () => k(b, e)
                    })), [b]), D = (0, M.z)((e => x.activeOptionIndex === A(e))), _ = (0, o.useMemo)((() => ({ ...x,
                        immediate: false,
                        optionsPropsRef: S,
                        labelRef: T,
                        inputRef: C,
                        buttonRef: w,
                        optionsRef: P,
                        value: b,
                        defaultValue: i,
                        disabled: u,
                        mode: h ? 1 : 0,
                        virtual: x.virtual,
                        get activeOptionIndex() {
                            if (R.current && null === x.activeOptionIndex && x.options.length > 0) {
                                v;
                                let e = x.options.findIndex((e => !e.dataRef.current.disabled));
                                if (-1 !== e) return e
                            }
                            return x.activeOptionIndex
                        },
                        calculateIndex: A,
                        compare: k,
                        isSelected: F,
                        isActive: D,
                        nullable: d,
                        __demoMode: c
                    })), [b, i, u, h, d, c, x, v]);
                    (0, O.e)((() => {}), [v, void 0]), (0, O.e)((() => {
                        x.dataRef.current = _
                    }), [_]), (0, z.O)([_.buttonRef, _.inputRef, _.optionsRef], (() => Q.closeCombobox()), 0 === _.comboboxState);
                    let j = (0, o.useMemo)((() => {
                            var e, t, n;
                            return {
                                open: 0 === _.comboboxState,
                                disabled: u,
                                activeIndex: _.activeOptionIndex,
                                activeOption: null === _.activeOptionIndex ? null : _.virtual ? _.virtual.options[null != (e = _.activeOptionIndex) ? e : 0] : null != (n = null == (t = _.options[_.activeOptionIndex]) ? void 0 : t.dataRef.current.value) ? n : null,
                                value: b
                            }
                        }), [_, u, b]),
                        B = (0, M.z)((() => {
                            if (null !== _.activeOptionIndex) {
                                if (_.virtual) H(_.virtual.options[_.activeOptionIndex]);
                                else {
                                    let {
                                        dataRef: e
                                    } = _.options[_.activeOptionIndex];
                                    H(e.current.value)
                                }
                                Q.goToOption(N.T.Specific, _.activeOptionIndex)
                            }
                        })),
                        $ = (0, M.z)((() => {
                            I({
                                type: 0
                            }), R.current = !0
                        })),
                        W = (0, M.z)((() => {
                            I({
                                type: 1
                            }), R.current = !1
                        })),
                        K = (0, M.z)(((e, t, n) => (R.current = !1, e === N.T.Specific ? I({
                            type: 2,
                            focus: N.T.Specific,
                            idx: t,
                            trigger: n
                        }) : I({
                            type: 2,
                            focus: e,
                            trigger: n
                        })))),
                        G = (0, M.z)(((e, t) => (I({
                            type: 3,
                            payload: {
                                id: e,
                                dataRef: t
                            }
                        }), () => {
                            _.isActive(t.current.value) && (R.current = !0), I({
                                type: 4,
                                id: e
                            })
                        }))),
                        Z = (0, M.z)((e => (I({
                            type: 5,
                            id: e
                        }), () => I({
                            type: 5,
                            id: null
                        })))),
                        H = (0, M.z)((e => (0, q.E)(_.mode, {
                            0: () => null == g ? void 0 : g(e),
                            1() {
                                let t = _.value.slice(),
                                    n = t.findIndex((t => k(t, e)));
                                return -1 === n ? t.push(e) : t.splice(n, 1), null == g ? void 0 : g(t)
                            }
                        }))),
                        J = (0, M.z)((e => {
                            I({
                                type: 6,
                                trigger: e
                            })
                        })),
                        Q = (0, o.useMemo)((() => ({
                            onChange: H,
                            registerOption: G,
                            registerLabel: Z,
                            goToOption: K,
                            closeCombobox: W,
                            openCombobox: $,
                            setActivationTrigger: J,
                            selectActiveOption: B
                        })), []),
                        X = null === t ? {} : {
                            ref: t
                        },
                        ee = (0, o.useRef)(null),
                        te = (0, E.G)();
                    return (0, o.useEffect)((() => {
                        ee.current && void 0 !== i && te.addEventListener(ee.current, "reset", (() => {
                            null == g || g(i)
                        }))
                    }), [ee, g]), o.createElement(ne.Provider, {
                        value: Q
                    }, o.createElement(le.Provider, {
                        value: _
                    }, o.createElement(V.up, {
                        value: (0, q.E)(_.comboboxState, {
                            0: V.ZM.Open,
                            1: V.ZM.Closed
                        })
                    }, null != s && null != b && (0, U.t)({
                        [s]: b
                    }).map((([e, t], n) => o.createElement(L._, {
                        features: L.A.Hidden,
                        ref: 0 === n ? e => {
                            var t;
                            ee.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
                        } : void 0,
                        ...(0, Y.oA)({
                            key: e,
                            as: "input",
                            type: "hidden",
                            hidden: !0,
                            readOnly: !0,
                            form: l,
                            disabled: u,
                            name: e,
                            value: t
                        })
                    }))), (0, Y.sY)({
                        ourProps: X,
                        theirProps: m,
                        slot: j,
                        defaultTag: ue,
                        name: "Combobox"
                    }))))
                })),
                he = (0, Y.yV)((function(e, t) {
                    var n;
                    let i = se("Combobox.Button"),
                        r = oe("Combobox.Button"),
                        l = (0, A.T)(i.buttonRef, t),
                        s = (0, w.M)(),
                        {
                            id: a = `headlessui-combobox-button-${s}`,
                            ...u
                        } = e,
                        c = (0, E.G)(),
                        d = (0, M.z)((e => {
                            switch (e.key) {
                                case G.R.ArrowDown:
                                    return e.preventDefault(), e.stopPropagation(), 1 === i.comboboxState && r.openCombobox(), c.nextFrame((() => {
                                        var e;
                                        return null == (e = i.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                case G.R.ArrowUp:
                                    return e.preventDefault(), e.stopPropagation(), 1 === i.comboboxState && (r.openCombobox(), c.nextFrame((() => {
                                        i.value || r.goToOption(N.T.Last)
                                    }))), c.nextFrame((() => {
                                        var e;
                                        return null == (e = i.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    }));
                                case G.R.Escape:
                                    return 0 !== i.comboboxState ? void 0 : (e.preventDefault(), i.optionsRef.current && !i.optionsPropsRef.current.static && e.stopPropagation(), r.closeCombobox(), c.nextFrame((() => {
                                        var e;
                                        return null == (e = i.inputRef.current) ? void 0 : e.focus({
                                            preventScroll: !0
                                        })
                                    })));
                                default:
                                    return
                            }
                        })),
                        h = (0, M.z)((e => {
                            if ((0, B.P)(e.currentTarget)) return e.preventDefault();
                            0 === i.comboboxState ? r.closeCombobox() : (e.preventDefault(), r.openCombobox()), c.nextFrame((() => {
                                var e;
                                return null == (e = i.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            }))
                        })),
                        p = R((() => {
                            if (i.labelId) return [i.labelId, a].join(" ")
                        }), [i.labelId, a]),
                        f = (0, o.useMemo)((() => ({
                            open: 0 === i.comboboxState,
                            disabled: i.disabled,
                            value: i.value
                        })), [i]),
                        m = {
                            ref: l,
                            id: a,
                            type: (0, k.f)(e, i.buttonRef),
                            tabIndex: -1,
                            "aria-haspopup": "listbox",
                            "aria-controls": null == (n = i.optionsRef.current) ? void 0 : n.id,
                            "aria-expanded": 0 === i.comboboxState,
                            "aria-labelledby": p,
                            disabled: i.disabled,
                            onClick: h,
                            onKeyDown: d
                        };
                    return (0, Y.sY)({
                        ourProps: m,
                        theirProps: u,
                        slot: f,
                        defaultTag: "button",
                        name: "Combobox.Button"
                    })
                })),
                pe = (0, Y.yV)((function(e, t) {
                    var n, i, r, l, s;
                    let a = (0, w.M)(),
                        {
                            id: u = `headlessui-combobox-input-${a}`,
                            onChange: c,
                            displayValue: d,
                            type: h = "text",
                            ...p
                        } = e,
                        f = se("Combobox.Input"),
                        m = oe("Combobox.Input"),
                        v = (0, A.T)(f.inputRef, t),
                        b = (0, P.i)(f.inputRef),
                        g = (0, o.useRef)(!1),
                        x = (0, E.G)(),
                        O = (0, M.z)((() => {
                            m.onChange(null), f.optionsRef.current && (f.optionsRef.current.scrollTop = 0), m.goToOption(N.T.Nothing)
                        })),
                        I = function() {
                            var e;
                            return "function" == typeof d && void 0 !== f.value ? null != (e = d(f.value)) ? e : "" : "string" == typeof f.value ? f.value : ""
                        }();
                    (0, _.q)((([e, t], [n, o]) => {
                        if (g.current) return;
                        let i = f.inputRef.current;
                        i && ((0 === o && 1 === t || e !== n) && (i.value = e), requestAnimationFrame((() => {
                            if (g.current || !i || (null == b ? void 0 : b.activeElement) !== i) return;
                            let {
                                selectionStart: e,
                                selectionEnd: t
                            } = i;
                            0 === Math.abs((null != t ? t : 0) - (null != e ? e : 0)) && 0 === e && i.setSelectionRange(i.value.length, i.value.length)
                        })))
                    }), [I, f.comboboxState, b]), (0, _.q)((([e], [t]) => {
                        if (0 === e && 1 === t) {
                            if (g.current) return;
                            let e = f.inputRef.current;
                            if (!e) return;
                            let t = e.value,
                                {
                                    selectionStart: n,
                                    selectionEnd: o,
                                    selectionDirection: i
                                } = e;
                            e.value = "", e.value = t, null !== i ? e.setSelectionRange(n, o, i) : e.setSelectionRange(n, o)
                        }
                    }), [f.comboboxState]);
                    let S = (0, o.useRef)(!1),
                        T = (0, M.z)((() => {
                            S.current = !0
                        })),
                        C = (0, M.z)((() => {
                            x.nextFrame((() => {
                                S.current = !1
                            }))
                        })),
                        y = (0, M.z)((e => {
                            switch (g.current = !0, e.key) {
                                case G.R.Enter:
                                    if (g.current = !1, 0 !== f.comboboxState || S.current) return;
                                    if (e.preventDefault(), e.stopPropagation(), null === f.activeOptionIndex) return void m.closeCombobox();
                                    m.selectActiveOption(), 0 === f.mode && m.closeCombobox();
                                    break;
                                case G.R.ArrowDown:
                                    return g.current = !1, e.preventDefault(), e.stopPropagation(), (0, q.E)(f.comboboxState, {
                                        0: () => m.goToOption(N.T.Next),
                                        1: () => m.openCombobox()
                                    });
                                case G.R.ArrowUp:
                                    return g.current = !1, e.preventDefault(), e.stopPropagation(), (0, q.E)(f.comboboxState, {
                                        0: () => m.goToOption(N.T.Previous),
                                        1: () => {
                                            m.openCombobox(), x.nextFrame((() => {
                                                f.value || m.goToOption(N.T.Last)
                                            }))
                                        }
                                    });
                                case G.R.Home:
                                    if (e.shiftKey) break;
                                    return g.current = !1, e.preventDefault(), e.stopPropagation(), m.goToOption(N.T.First);
                                case G.R.PageUp:
                                    return g.current = !1, e.preventDefault(), e.stopPropagation(), m.goToOption(N.T.First);
                                case G.R.End:
                                    if (e.shiftKey) break;
                                    return g.current = !1, e.preventDefault(), e.stopPropagation(), m.goToOption(N.T.Last);
                                case G.R.PageDown:
                                    return g.current = !1, e.preventDefault(), e.stopPropagation(), m.goToOption(N.T.Last);
                                case G.R.Escape:
                                    return g.current = !1, 0 !== f.comboboxState ? void 0 : (e.preventDefault(), f.optionsRef.current && !f.optionsPropsRef.current.static && e.stopPropagation(), f.nullable && 0 === f.mode && null === f.value && O(), m.closeCombobox());
                                case G.R.Tab:
                                    if (g.current = !1, 0 !== f.comboboxState) return;
                                    0 === f.mode && 1 !== f.activationTrigger && m.selectActiveOption(), m.closeCombobox()
                            }
                        })),
                        z = (0, M.z)((e => {
                            null == c || c(e), f.nullable && 0 === f.mode && "" === e.target.value && O(), m.openCombobox()
                        })),
                        k = (0, M.z)((e => {
                            var t, n, o;
                            let i = null != (t = e.relatedTarget) ? t : j.m.find((t => t !== e.currentTarget));
                            if (g.current = !1, (null == (n = f.optionsRef.current) || !n.contains(i)) && (null == (o = f.buttonRef.current) || !o.contains(i)) && 0 === f.comboboxState) return e.preventDefault(), 0 === f.mode && (f.nullable && null === f.value ? O() : 1 !== f.activationTrigger && m.selectActiveOption()), m.closeCombobox()
                        })),
                        F = (0, M.z)((e => {
                            var t, n, o;
                            let i = null != (t = e.relatedTarget) ? t : j.m.find((t => t !== e.currentTarget));
                            null != (n = f.buttonRef.current) && n.contains(i) || null != (o = f.optionsRef.current) && o.contains(i) || f.disabled || f.immediate && 0 !== f.comboboxState && (m.openCombobox(), x.nextFrame((() => {
                                m.setActivationTrigger(1)
                            })))
                        })),
                        D = R((() => {
                            if (f.labelId) return [f.labelId].join(" ")
                        }), [f.labelId]),
                        L = (0, o.useMemo)((() => ({
                            open: 0 === f.comboboxState,
                            disabled: f.disabled
                        })), [f]),
                        V = {
                            ref: v,
                            id: u,
                            role: "combobox",
                            type: h,
                            "aria-controls": null == (n = f.optionsRef.current) ? void 0 : n.id,
                            "aria-expanded": 0 === f.comboboxState,
                            "aria-activedescendant": null === f.activeOptionIndex ? void 0 : f.virtual ? null == (i = f.options.find((e => {
                                var t;
                                return !(null != (t = f.virtual) && t.disabled(e.dataRef.current.value)) && f.compare(e.dataRef.current.value, f.virtual.options[f.activeOptionIndex])
                            }))) ? void 0 : i.id : null == (r = f.options[f.activeOptionIndex]) ? void 0 : r.id,
                            "aria-labelledby": D,
                            "aria-autocomplete": "list",
                            defaultValue: null != (s = null != (l = e.defaultValue) ? l : void 0 !== f.defaultValue ? null == d ? void 0 : d(f.defaultValue) : null) ? s : f.defaultValue,
                            disabled: f.disabled,
                            onCompositionStart: T,
                            onCompositionEnd: C,
                            onKeyDown: y,
                            onChange: z,
                            onFocus: F,
                            onBlur: k
                        };
                    return (0, Y.sY)({
                        ourProps: V,
                        theirProps: p,
                        slot: L,
                        defaultTag: "input",
                        name: "Combobox.Input"
                    })
                })),
                fe = (0, Y.yV)((function(e, t) {
                    let n = (0, w.M)(),
                        {
                            id: i = `headlessui-combobox-label-${n}`,
                            ...r
                        } = e,
                        l = se("Combobox.Label"),
                        s = oe("Combobox.Label"),
                        a = (0, A.T)(l.labelRef, t);
                    (0, O.e)((() => s.registerLabel(i)), [i]);
                    let u = (0, M.z)((() => {
                            var e;
                            return null == (e = l.inputRef.current) ? void 0 : e.focus({
                                preventScroll: !0
                            })
                        })),
                        c = (0, o.useMemo)((() => ({
                            open: 0 === l.comboboxState,
                            disabled: l.disabled
                        })), [l]);
                    return (0, Y.sY)({
                        ourProps: {
                            ref: a,
                            id: i,
                            onClick: u
                        },
                        theirProps: r,
                        slot: c,
                        defaultTag: "label",
                        name: "Combobox.Label"
                    })
                })),
                me = (0, Y.yV)((function(e, t) {
                    let n = (0, w.M)(),
                        {
                            id: i = `headlessui-combobox-options-${n}`,
                            hold: r = !1,
                            ...l
                        } = e,
                        s = se("Combobox.Options"),
                        a = (0, A.T)(s.optionsRef, t),
                        u = (0, V.oJ)(),
                        c = null !== u ? (u & V.ZM.Open) === V.ZM.Open : 0 === s.comboboxState;
                    (0, O.e)((() => {
                        var t;
                        s.optionsPropsRef.current.static = null != (t = e.static) && t
                    }), [s.optionsPropsRef, e.static]), (0, O.e)((() => {
                        s.optionsPropsRef.current.hold = r
                    }), [s.optionsPropsRef, r]), (0, D.B)({
                        container: s.optionsRef.current,
                        enabled: 0 === s.comboboxState,
                        accept: e => "option" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                        walk(e) {
                            e.setAttribute("role", "none")
                        }
                    });
                    let d = R((() => {
                            var e, t;
                            return null != (t = s.labelId) ? t : null == (e = s.buttonRef.current) ? void 0 : e.id
                        }), [s.labelId, s.buttonRef.current]),
                        h = (0, o.useMemo)((() => ({
                            open: 0 === s.comboboxState,
                            option: void 0
                        })), [s]),
                        p = {
                            "aria-labelledby": d,
                            role: "listbox",
                            "aria-multiselectable": 1 === s.mode || void 0,
                            id: i,
                            ref: a
                        };
                    return s.virtual && 0 === s.comboboxState && Object.assign(l, {
                        children: o.createElement(re, null, l.children)
                    }), (0, Y.sY)({
                        ourProps: p,
                        theirProps: l,
                        slot: h,
                        defaultTag: "ul",
                        features: ce,
                        visible: c,
                        name: "Combobox.Options"
                    })
                })),
                ve = (0, Y.yV)((function(e, t) {
                    var n;
                    let i = (0, w.M)(),
                        {
                            id: r = `headlessui-combobox-option-${i}`,
                            disabled: l = !1,
                            value: s,
                            order: a = null,
                            ...u
                        } = e,
                        c = se("Combobox.Option"),
                        d = oe("Combobox.Option"),
                        h = c.virtual ? c.activeOptionIndex === c.calculateIndex(s) : null !== c.activeOptionIndex && (null == (n = c.options[c.activeOptionIndex]) ? void 0 : n.id) === r,
                        p = c.isSelected(s),
                        f = (0, o.useRef)(null),
                        m = (0, I.E)({
                            disabled: l,
                            value: s,
                            domRef: f,
                            order: a
                        }),
                        v = (0, o.useContext)(ie),
                        b = (0, A.T)(t, f, v ? v.measureElement : null),
                        g = (0, M.z)((() => d.onChange(s)));
                    (0, O.e)((() => d.registerOption(r, m)), [m, r]);
                    let x = (0, o.useRef)(!(c.virtual || c.__demoMode));
                    (0, O.e)((() => {
                        if (!c.virtual || !c.__demoMode) return;
                        let e = (0, $.k)();
                        return e.requestAnimationFrame((() => {
                            x.current = !0
                        })), e.dispose
                    }), [c.virtual, c.__demoMode]), (0, O.e)((() => {
                        if (!x.current || 0 !== c.comboboxState || !h || 0 === c.activationTrigger) return;
                        let e = (0, $.k)();
                        return e.requestAnimationFrame((() => {
                            var e, t;
                            null == (t = null == (e = f.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                block: "nearest"
                            })
                        })), e.dispose
                    }), [f, h, c.comboboxState, c.activationTrigger, c.activeOptionIndex]);
                    let R = (0, M.z)((e => {
                            var t;
                            if (l || null != (t = c.virtual) && t.disabled(s)) return e.preventDefault();
                            g(), (0, K.tq)() || requestAnimationFrame((() => {
                                var e;
                                return null == (e = c.inputRef.current) ? void 0 : e.focus({
                                    preventScroll: !0
                                })
                            })), 0 === c.mode && requestAnimationFrame((() => d.closeCombobox()))
                        })),
                        S = (0, M.z)((() => {
                            var e;
                            if (l || null != (e = c.virtual) && e.disabled(s)) return d.goToOption(N.T.Nothing);
                            let t = c.calculateIndex(s);
                            d.goToOption(N.T.Specific, t)
                        })),
                        T = (0, F.g)(),
                        C = (0, M.z)((e => T.update(e))),
                        y = (0, M.z)((e => {
                            var t;
                            if (!T.wasMoved(e) || l || null != (t = c.virtual) && t.disabled(s) || h) return;
                            let n = c.calculateIndex(s);
                            d.goToOption(N.T.Specific, n, 0)
                        })),
                        E = (0, M.z)((e => {
                            var t;
                            T.wasMoved(e) && (l || null != (t = c.virtual) && t.disabled(s) || h && (c.optionsPropsRef.current.hold || d.goToOption(N.T.Nothing)))
                        })),
                        z = (0, o.useMemo)((() => ({
                            active: h,
                            selected: p,
                            disabled: l
                        })), [h, p, l]);
                    return (0, Y.sY)({
                        ourProps: {
                            id: r,
                            ref: b,
                            role: "option",
                            tabIndex: !0 === l ? void 0 : -1,
                            "aria-disabled": !0 === l || void 0,
                            "aria-selected": p,
                            disabled: void 0,
                            onClick: R,
                            onFocus: S,
                            onPointerEnter: C,
                            onMouseEnter: C,
                            onPointerMove: y,
                            onMouseMove: y,
                            onPointerLeave: E,
                            onMouseLeave: E
                        },
                        theirProps: u,
                        slot: z,
                        defaultTag: "li",
                        name: "Combobox.Option"
                    })
                })),
                be = Object.assign(de, {
                    Input: pe,
                    Button: he,
                    Label: fe,
                    Options: me,
                    Option: ve
                })
        },
        31147: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return r
                }
            });
            var o = n(67294),
                i = n(73781);

            function r(e, t, n) {
                let [r, l] = (0, o.useState)(n), s = void 0 !== e, a = (0, o.useRef)(s), u = (0, o.useRef)(!1), c = (0, o.useRef)(!1);
                return !s || a.current || u.current ? !s && a.current && !c.current && (c.current = !0, a.current = s, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (u.current = !0, a.current = s, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [s ? e : r, (0, i.z)((e => (s || l(e), null == t ? void 0 : t(e))))]
            }
        },
        18689: function(e, t, n) {
            "use strict";

            function o(e = {}, t = null, n = []) {
                for (let [o, l] of Object.entries(e)) r(n, i(t, o), l);
                return n
            }

            function i(e, t) {
                return e ? e + "[" + t + "]" : t
            }

            function r(e, t, n) {
                if (Array.isArray(n))
                    for (let [o, l] of n.entries()) r(e, i(t, o.toString()), l);
                else n instanceof Date ? e.push([t, n.toISOString()]) : "boolean" == typeof n ? e.push([t, n ? "1" : "0"]) : "string" == typeof n ? e.push([t, n]) : "number" == typeof n ? e.push([t, `${n}`]) : null == n ? e.push([t, ""]) : o(n, t, e)
            }

            function l(e) {
                var t, n;
                let o = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                if (o) {
                    for (let t of o.elements)
                        if (t !== e && ("INPUT" === t.tagName && "submit" === t.type || "BUTTON" === t.tagName && "submit" === t.type || "INPUT" === t.nodeName && "image" === t.type)) return void t.click();
                    null == (n = o.requestSubmit) || n.call(o)
                }
            }
            n.d(t, {
                g: function() {
                    return l
                },
                t: function() {
                    return o
                }
            })
        }
    }
]);