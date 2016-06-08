function numpf(n, f, s, t) {
    var n10 = n % 10;
    return 1 == n10 && (1 == n || n > 20) ? f : n10 > 1 && 5 > n10 && (n > 20 || 10 > n) ? s : t
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    function D(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }

    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l,
            c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function Fb(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--;)
            if (b = Eb[e] + c, b in a) return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wb(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }

    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0,
            g = Qb.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function qc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rc(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        var e = {},
            f = a === mc;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tc(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
             "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        for (; f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }

    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ac(a + "[" + e + "]", b[e], c, d)
    }

    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.3",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g)
                    for (; f > e && (d = b.apply(a[e], c), d !== !1); e++);
                else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g)
                for (; f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++);
            else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    var t = function(a) {
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        for (; l--;) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            var a = [];
            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            for (var c = a.split("|"), e = a.length; e--;) d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function qb() {}

        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    for (; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            for (; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        for (; k--;)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                return a === b
            }, h, !0), l = sb(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e && !d.relative[a[e].type]; e++);
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            for (; o = a[m++];)
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        for (; o = b[m++];) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                for (; q--;) r[q] || s[q] || (s[q] = F.call(i));
                            s = vb(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ib(f) : f
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = hb(),
            z = hb(),
            A = hb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            eb = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                c = a;
                for (; c = c.parentNode;) h.unshift(c);
                c = b;
                for (; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (; b = a[f++];) b === a[f] && (e = d.push(f));
                for (; e--;) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = gb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                for (; b = a[d++];) c += e(b);
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    l = b;
                                    for (; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                for (; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0
                    }
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ob(function() {
                    return [0]
                }),
                last: ob(function(a, b) {
                    return [b - 1]
                }),
                eq: ob(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = mb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = nb(b);
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            for (; h;) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };
        return h = gb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                for (; c--;) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                for (; i-- && (k = j[i], !d.relative[l = k.type]);)
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;
                        break
                    }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function(a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                 (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        for (var c;
                             (c = n.inArray(b, h, c)) > -1;) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var i, j, k, b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                };
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    for (; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            for (; g--;) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                for (; j--;) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                for (; j--;)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        for (; f--;) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                for (;
                    (g = p[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                for (;
                    (f = h[b++]) && !a.isPropagationStopped();) {
                    a.currentTarget = f.elem, c = 0;
                    for (;
                        (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            for (; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]);
                else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                        for (; j--;) f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            for (; e = l[m++];)
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    for (; e = f[j++];) fb.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {},
        ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function g() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
            var g = a.getComputedStyle(f, null);
            b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
        }
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Db = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Eb = ["Webkit", "O", "Moz", "ms"];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Ob.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function() {
                    var b = Xb(this, n.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0,
            c = n.timers;
        for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
        function() {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        for (; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        for (; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)) : void 0
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(),
        dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec = /#.*$/,
        fc = /([?&])_=[^&]*/,
        gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ic = /^(?:GET|HEAD)$/,
        jc = /^\/\//,
        kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lc = {},
        mc = {},
        nc = "*/".concat("*"),
        oc = a.location.href,
        pc = kc.exec(oc.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a)
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function(a, b) {
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                for (; b = gc.exec(e);) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rc(lc, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var vc = /%20/g,
        wc = /\[\]$/,
        xc = /\r?\n/g,
        yc = /^(?:submit|button|image|reset|file)$/i,
        zc = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ac(c, a[c], b, e);
        return d.join("&").replace(vc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Bc = 0,
        Cc = {},
        Dc = {
            0: 200,
            1223: 204
        },
        Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cc) Cc[a]()
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Bc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fc = [],
        Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ic = a.document.documentElement;
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Ic; a && !n.nodeName(a, "html") && "static" === n.css(a, "position");) a = a.offsetParent;
                return a || Ic
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof ognyvo.define && ognyvo.define.amd && ognyvo.define("jquery", [], function() {
        return n
    });
    var Kc = a.jQuery,
        Lc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
(function() {
    function createReduce(dir) {
        function iterator(obj, iteratee, memo, keys, index, length) {
            for (; index >= 0 && length > index; index += dir) {
                var currentKey = keys ? keys[index] : index;
                memo = iteratee(memo, obj[currentKey], currentKey, obj)
            }
            return memo
        }
        return function(obj, iteratee, memo, context) {
            iteratee = optimizeCb(iteratee, context, 4);
            var keys = !isArrayLike(obj) && _.keys(obj),
                length = (keys || obj).length,
                index = dir > 0 ? 0 : length - 1;
            if (arguments.length < 3) {
                memo = obj[keys ? keys[index] : index];
                index += dir
            }
            return iterator(obj, iteratee, memo, keys, index, length)
        }
    }

    function createPredicateIndexFinder(dir) {
        return function(array, predicate, context) {
            predicate = cb(predicate, context);
            for (var length = getLength(array), index = dir > 0 ? 0 : length - 1; index >= 0 && length > index; index += dir)
                if (predicate(array[index], index, array)) return index;
            return -1
        }
    }

    function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function(array, item, idx) {
            var i = 0,
                length = getLength(array);
            if ("number" == typeof idx) dir > 0 ? i = idx >= 0 ? idx : Math.max(idx + length, i) : length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
            else if (sortedIndex && idx && length) {
                idx = sortedIndex(array, item);
                return array[idx] === item ? idx : -1
            }
            if (item !== item) {
                idx = predicateFind(slice.call(array, i, length), _.isNaN);
                return idx >= 0 ? idx + i : -1
            }
            for (idx = dir > 0 ? i : length - 1; idx >= 0 && length > idx; idx += dir)
                if (array[idx] === item) return idx;
            return -1
        }
    }

    function collectNonEnumProps(obj, keys) {
        var nonEnumIdx = nonEnumerableProps.length,
            constructor = obj.constructor,
            proto = _.isFunction(constructor) && constructor.prototype || ObjProto,
            prop = "constructor";
        _.has(obj, prop) && !_.contains(keys, prop) && keys.push(prop);
        for (; nonEnumIdx--;) {
            prop = nonEnumerableProps[nonEnumIdx];
            prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop) && keys.push(prop)
        }
    }
    var root = this,
        previousUnderscore = root._,
        ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        FuncProto = Function.prototype,
        push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString,
        hasOwnProperty = ObjProto.hasOwnProperty,
        nativeIsArray = Array.isArray,
        nativeKeys = Object.keys,
        nativeBind = FuncProto.bind,
        nativeCreate = Object.create,
        Ctor = function() {},
        _ = function(obj) {
            if (obj instanceof _) return obj;
            if (!(this instanceof _)) return new _(obj);
            this._wrapped = obj
        };
    if ("undefined" != typeof exports) {
        "undefined" != typeof module && module.exports && (exports = module.exports = _);
        exports._ = _
    } else root._ = _;
    _.VERSION = "1.8.3";
    var optimizeCb = function(func, context, argCount) {
            if (void 0 === context) return func;
            switch (null == argCount ? 3 : argCount) {
                case 1:
                    return function(value) {
                        return func.call(context, value)
                    };
                case 2:
                    return function(value, other) {
                        return func.call(context, value, other)
                    };
                case 3:
                    return function(value, index, collection) {
                        return func.call(context, value, index, collection)
                    };
                case 4:
                    return function(accumulator, value, index, collection) {
                        return func.call(context, accumulator, value, index, collection)
                    }
            }
            return function() {
                return func.apply(context, arguments)
            }
        },
        cb = function(value, context, argCount) {
            return null == value ? _.identity : _.isFunction(value) ? optimizeCb(value, context, argCount) : _.isObject(value) ? _.matcher(value) : _.property(value)
        };
    _.iteratee = function(value, context) {
        return cb(value, context, 1 / 0)
    };
    var createAssigner = function(keysFunc, undefinedOnly) {
            return function(obj) {
                var length = arguments.length;
                if (2 > length || null == obj) return obj;
                for (var index = 1; length > index; index++)
                    for (var source = arguments[index], keys = keysFunc(source), l = keys.length, i = 0; l > i; i++) {
                        var key = keys[i];
                        undefinedOnly && void 0 !== obj[key] || (obj[key] = source[key])
                    }
                return obj
            }
        },
        baseCreate = function(prototype) {
            if (!_.isObject(prototype)) return {};
            if (nativeCreate) return nativeCreate(prototype);
            Ctor.prototype = prototype;
            var result = new Ctor;
            Ctor.prototype = null;
            return result
        },
        property = function(key) {
            return function(obj) {
                return null == obj ? void 0 : obj[key]
            }
        },
        MAX_ARRAY_INDEX = Math.pow(2, 53) - 1,
        getLength = property("length"),
        isArrayLike = function(collection) {
            var length = getLength(collection);
            return "number" == typeof length && length >= 0 && MAX_ARRAY_INDEX >= length
        };
    _.each = _.forEach = function(obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj))
            for (i = 0, length = obj.length; length > i; i++) iteratee(obj[i], i, obj);
        else {
            var keys = _.keys(obj);
            for (i = 0, length = keys.length; length > i; i++) iteratee(obj[keys[i]], keys[i], obj)
        }
        return obj
    };
    _.map = _.collect = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        for (var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length, results = Array(length), index = 0; length > index; index++) {
            var currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj)
        }
        return results
    };
    _.reduce = _.foldl = _.inject = createReduce(1);
    _.reduceRight = _.foldr = createReduce(-1);
    _.find = _.detect = function(obj, predicate, context) {
        var key;
        key = isArrayLike(obj) ? _.findIndex(obj, predicate, context) : _.findKey(obj, predicate, context);
        return void 0 !== key && -1 !== key ? obj[key] : void 0
    };
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        _.each(obj, function(value, index, list) {
            predicate(value, index, list) && results.push(value)
        });
        return results
    };
    _.reject = function(obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context)
    };
    _.every = _.all = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        for (var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length, index = 0; length > index; index++) {
            var currentKey = keys ? keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj)) return !1
        }
        return !0
    };
    _.some = _.any = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        for (var keys = !isArrayLike(obj) && _.keys(obj), length = (keys || obj).length, index = 0; length > index; index++) {
            var currentKey = keys ? keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj)) return !0
        }
        return !1
    };
    _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
        isArrayLike(obj) || (obj = _.values(obj));
        ("number" != typeof fromIndex || guard) && (fromIndex = 0);
        return _.indexOf(obj, item, fromIndex) >= 0
    };
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2),
            isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            var func = isFunc ? method : value[method];
            return null == func ? func : func.apply(value, args)
        })
    };
    _.pluck = function(obj, key) {
        return _.map(obj, _.property(key))
    };
    _.where = function(obj, attrs) {
        return _.filter(obj, _.matcher(attrs))
    };
    _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matcher(attrs))
    };
    _.max = function(obj, iteratee, context) {
        var value, computed, result = -(1 / 0),
            lastComputed = -(1 / 0);
        if (null == iteratee && null != obj) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; length > i; i++) {
                value = obj[i];
                value > result && (result = value)
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (computed > lastComputed || computed === -(1 / 0) && result === -(1 / 0)) {
                    result = value;
                    lastComputed = computed
                }
            })
        }
        return result
    };
    _.min = function(obj, iteratee, context) {
        var value, computed, result = 1 / 0,
            lastComputed = 1 / 0;
        if (null == iteratee && null != obj) {
            obj = isArrayLike(obj) ? obj : _.values(obj);
            for (var i = 0, length = obj.length; length > i; i++) {
                value = obj[i];
                result > value && (result = value)
            }
        } else {
            iteratee = cb(iteratee, context);
            _.each(obj, function(value, index, list) {
                computed = iteratee(value, index, list);
                if (lastComputed > computed || computed === 1 / 0 && result === 1 / 0) {
                    result = value;
                    lastComputed = computed
                }
            })
        }
        return result
    };
    _.shuffle = function(obj) {
        for (var rand, set = isArrayLike(obj) ? obj : _.values(obj), length = set.length, shuffled = Array(length), index = 0; length > index; index++) {
            rand = _.random(0, index);
            rand !== index && (shuffled[index] = shuffled[rand]);
            shuffled[rand] = set[index]
        }
        return shuffled
    };
    _.sample = function(obj, n, guard) {
        if (null == n || guard) {
            isArrayLike(obj) || (obj = _.values(obj));
            return obj[_.random(obj.length - 1)]
        }
        return _.shuffle(obj).slice(0, Math.max(0, n))
    };
    _.sortBy = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iteratee(value, index, list)
            }
        }).sort(function(left, right) {
            var a = left.criteria,
                b = right.criteria;
            if (a !== b) {
                if (a > b || void 0 === a) return 1;
                if (b > a || void 0 === b) return -1
            }
            return left.index - right.index
        }), "value")
    };
    var group = function(behavior) {
        return function(obj, iteratee, context) {
            var result = {};
            iteratee = cb(iteratee, context);
            _.each(obj, function(value, index) {
                var key = iteratee(value, index, obj);
                behavior(result, value, key)
            });
            return result
        }
    };
    _.groupBy = group(function(result, value, key) {
        _.has(result, key) ? result[key].push(value) : result[key] = [value]
    });
    _.indexBy = group(function(result, value, key) {
        result[key] = value
    });
    _.countBy = group(function(result, value, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1
    });
    _.toArray = function(obj) {
        return obj ? _.isArray(obj) ? slice.call(obj) : isArrayLike(obj) ? _.map(obj, _.identity) : _.values(obj) : []
    };
    _.size = function(obj) {
        return null == obj ? 0 : isArrayLike(obj) ? obj.length : _.keys(obj).length
    };
    _.partition = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        var pass = [],
            fail = [];
        _.each(obj, function(value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value)
        });
        return [pass, fail]
    };
    _.first = _.head = _.take = function(array, n, guard) {
        return null != array ? null == n || guard ? array[0] : _.initial(array, array.length - n) : void 0
    };
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, Math.max(0, array.length - (null == n || guard ? 1 : n)))
    };
    _.last = function(array, n, guard) {
        return null != array ? null == n || guard ? array[array.length - 1] : _.rest(array, Math.max(0, array.length - n)) : void 0
    };
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, null == n || guard ? 1 : n)
    };
    _.compact = function(array) {
        return _.filter(array, _.identity)
    };
    var flatten = function(input, shallow, strict, startIndex) {
        for (var output = [], idx = 0, i = startIndex || 0, length = getLength(input); length > i; i++) {
            var value = input[i];
            if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
                shallow || (value = flatten(value, shallow, strict));
                var j = 0,
                    len = value.length;
                output.length += len;
                for (; len > j;) output[idx++] = value[j++]
            } else strict || (output[idx++] = value)
        }
        return output
    };
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, !1)
    };
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1))
    };
    _.uniq = _.unique = function(array, isSorted, iteratee, context) {
        if (!_.isBoolean(isSorted)) {
            context = iteratee;
            iteratee = isSorted;
            isSorted = !1
        }
        null != iteratee && (iteratee = cb(iteratee, context));
        for (var result = [], seen = [], i = 0, length = getLength(array); length > i; i++) {
            var value = array[i],
                computed = iteratee ? iteratee(value, i, array) : value;
            if (isSorted) {
                i && seen === computed || result.push(value);
                seen = computed
            } else if (iteratee) {
                if (!_.contains(seen, computed)) {
                    seen.push(computed);
                    result.push(value)
                }
            } else _.contains(result, value) || result.push(value)
        }
        return result
    };
    _.union = function() {
        return _.uniq(flatten(arguments, !0, !0))
    };
    _.intersection = function(array) {
        for (var result = [], argsLength = arguments.length, i = 0, length = getLength(array); length > i; i++) {
            var item = array[i];
            if (!_.contains(result, item)) {
                for (var j = 1; argsLength > j && _.contains(arguments[j], item); j++);
                j === argsLength && result.push(item)
            }
        }
        return result
    };
    _.difference = function(array) {
        var rest = flatten(arguments, !0, !0, 1);
        return _.filter(array, function(value) {
            return !_.contains(rest, value)
        })
    };
    _.zip = function() {
        return _.unzip(arguments)
    };
    _.unzip = function(array) {
        for (var length = array && _.max(array, getLength).length || 0, result = Array(length), index = 0; length > index; index++) result[index] = _.pluck(array, index);
        return result
    };
    _.object = function(list, values) {
        for (var result = {}, i = 0, length = getLength(list); length > i; i++) values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
        return result
    };
    _.findIndex = createPredicateIndexFinder(1);
    _.findLastIndex = createPredicateIndexFinder(-1);
    _.sortedIndex = function(array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        for (var value = iteratee(obj), low = 0, high = getLength(array); high > low;) {
            var mid = Math.floor((low + high) / 2);
            iteratee(array[mid]) < value ? low = mid + 1 : high = mid
        }
        return low
    };
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
    _.range = function(start, stop, step) {
        if (null == stop) {
            stop = start || 0;
            start = 0
        }
        step = step || 1;
        for (var length = Math.max(Math.ceil((stop - start) / step), 0), range = Array(length), idx = 0; length > idx; idx++, start += step) range[idx] = start;
        return range
    };
    var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
        var self = baseCreate(sourceFunc.prototype),
            result = sourceFunc.apply(self, args);
        return _.isObject(result) ? result : self
    };
    _.bind = function(func, context) {
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError("Bind must be called on a function");
        var args = slice.call(arguments, 2),
            bound = function() {
                return executeBound(func, bound, context, this, args.concat(slice.call(arguments)))
            };
        return bound
    };
    _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1),
            bound = function() {
                for (var position = 0, length = boundArgs.length, args = Array(length), i = 0; length > i; i++) args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
                for (; position < arguments.length;) args.push(arguments[position++]);
                return executeBound(func, bound, this, this, args)
            };
        return bound
    };
    _.bindAll = function(obj) {
        var i, key, length = arguments.length;
        if (1 >= length) throw new Error("bindAll must be passed function names");
        for (i = 1; length > i; i++) {
            key = arguments[i];
            obj[key] = _.bind(obj[key], obj)
        }
        return obj
    };
    _.memoize = function(func, hasher) {
        var memoize = function(key) {
            var cache = memoize.cache,
                address = "" + (hasher ? hasher.apply(this, arguments) : key);
            _.has(cache, address) || (cache[address] = func.apply(this, arguments));
            return cache[address]
        };
        memoize.cache = {};
        return memoize
    };
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args)
        }, wait)
    };
    _.defer = _.partial(_.delay, _, 1);
    _.throttle = function(func, wait, options) {
        var context, args, result, timeout = null,
            previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === !1 ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            timeout || (context = args = null)
        };
        return function() {
            var now = _.now();
            previous || options.leading !== !1 || (previous = now);
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (0 >= remaining || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null
                }
                previous = now;
                result = func.apply(context, args);
                timeout || (context = args = null)
            } else timeout || options.trailing === !1 || (timeout = setTimeout(later, remaining));
            return result
        }
    };
    _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result, later = function() {
            var last = _.now() - timestamp;
            if (wait > last && last >= 0) timeout = setTimeout(later, wait - last);
            else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    timeout || (context = args = null)
                }
            }
        };
        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            timeout || (timeout = setTimeout(later, wait));
            if (callNow) {
                result = func.apply(context, args);
                context = args = null
            }
            return result
        }
    };
    _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func)
    };
    _.negate = function(predicate) {
        return function() {
            return !predicate.apply(this, arguments)
        }
    };
    _.compose = function() {
        var args = arguments,
            start = args.length - 1;
        return function() {
            for (var i = start, result = args[start].apply(this, arguments); i--;) result = args[i].call(this, result);
            return result
        }
    };
    _.after = function(times, func) {
        return function() {
            return --times < 1 ? func.apply(this, arguments) : void 0
        }
    };
    _.before = function(times, func) {
        var memo;
        return function() {
            --times > 0 && (memo = func.apply(this, arguments));
            1 >= times && (func = null);
            return memo
        }
    };
    _.once = _.partial(_.before, 2);
    var hasEnumBug = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        nonEnumerableProps = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) _.has(obj, key) && keys.push(key);
        hasEnumBug && collectNonEnumProps(obj, keys);
        return keys
    };
    _.allKeys = function(obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        hasEnumBug && collectNonEnumProps(obj, keys);
        return keys
    };
    _.values = function(obj) {
        for (var keys = _.keys(obj), length = keys.length, values = Array(length), i = 0; length > i; i++) values[i] = obj[keys[i]];
        return values
    };
    _.mapObject = function(obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        for (var currentKey, keys = _.keys(obj), length = keys.length, results = {}, index = 0; length > index; index++) {
            currentKey = keys[index];
            results[currentKey] = iteratee(obj[currentKey], currentKey, obj)
        }
        return results
    };
    _.pairs = function(obj) {
        for (var keys = _.keys(obj), length = keys.length, pairs = Array(length), i = 0; length > i; i++) pairs[i] = [keys[i], obj[keys[i]]];
        return pairs
    };
    _.invert = function(obj) {
        for (var result = {}, keys = _.keys(obj), i = 0, length = keys.length; length > i; i++) result[obj[keys[i]]] = keys[i];
        return result
    };
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) _.isFunction(obj[key]) && names.push(key);
        return names.sort()
    };
    _.extend = createAssigner(_.allKeys);
    _.extendOwn = _.assign = createAssigner(_.keys);
    _.findKey = function(obj, predicate, context) {
        predicate = cb(predicate, context);
        for (var key, keys = _.keys(obj), i = 0, length = keys.length; length > i; i++) {
            key = keys[i];
            if (predicate(obj[key], key, obj)) return key
        }
    };
    _.pick = function(object, oiteratee, context) {
        var iteratee, keys, result = {},
            obj = object;
        if (null == obj) return result;
        if (_.isFunction(oiteratee)) {
            keys = _.allKeys(obj);
            iteratee = optimizeCb(oiteratee, context)
        } else {
            keys = flatten(arguments, !1, !1, 1);
            iteratee = function(value, key, obj) {
                return key in obj
            };
            obj = Object(obj)
        }
        for (var i = 0, length = keys.length; length > i; i++) {
            var key = keys[i],
                value = obj[key];
            iteratee(value, key, obj) && (result[key] = value)
        }
        return result
    };
    _.omit = function(obj, iteratee, context) {
        if (_.isFunction(iteratee)) iteratee = _.negate(iteratee);
        else {
            var keys = _.map(flatten(arguments, !1, !1, 1), String);
            iteratee = function(value, key) {
                return !_.contains(keys, key)
            }
        }
        return _.pick(obj, iteratee, context)
    };
    _.defaults = createAssigner(_.allKeys, !0);
    _.create = function(prototype, props) {
        var result = baseCreate(prototype);
        props && _.extendOwn(result, props);
        return result
    };
    _.clone = function(obj) {
        return _.isObject(obj) ? _.isArray(obj) ? obj.slice() : _.extend({}, obj) : obj
    };
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj
    };
    _.isMatch = function(object, attrs) {
        var keys = _.keys(attrs),
            length = keys.length;
        if (null == object) return !length;
        for (var obj = Object(object), i = 0; length > i; i++) {
            var key = keys[i];
            if (attrs[key] !== obj[key] || !(key in obj)) return !1
        }
        return !0
    };
    var eq = function(a, b, aStack, bStack) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof _ && (a = a._wrapped);
        b instanceof _ && (b = b._wrapped);
        var className = toString.call(a);
        if (className !== toString.call(b)) return !1;
        switch (className) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        var areArrays = "[object Array]" === className;
        if (!areArrays) {
            if ("object" != typeof a || "object" != typeof b) return !1;
            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return !1
        }
        aStack = aStack || [];
        bStack = bStack || [];
        for (var length = aStack.length; length--;)
            if (aStack[length] === a) return bStack[length] === b;
        aStack.push(a);
        bStack.push(b);
        if (areArrays) {
            length = a.length;
            if (length !== b.length) return !1;
            for (; length--;)
                if (!eq(a[length], b[length], aStack, bStack)) return !1
        } else {
            var key, keys = _.keys(a);
            length = keys.length;
            if (_.keys(b).length !== length) return !1;
            for (; length--;) {
                key = keys[length];
                if (!_.has(b, key) || !eq(a[key], b[key], aStack, bStack)) return !1
            }
        }
        aStack.pop();
        bStack.pop();
        return !0
    };
    _.isEqual = function(a, b) {
        return eq(a, b)
    };
    _.isEmpty = function(obj) {
        return null == obj ? !0 : isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) ? 0 === obj.length : 0 === _.keys(obj).length
    };
    _.isElement = function(obj) {
        return !(!obj || 1 !== obj.nodeType)
    };
    _.isArray = nativeIsArray || function(obj) {
            return "[object Array]" === toString.call(obj)
        };
    _.isObject = function(obj) {
        var type = typeof obj;
        return "function" === type || "object" === type && !!obj
    };
    _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) === "[object " + name + "]"
        }
    });
    _.isArguments(arguments) || (_.isArguments = function(obj) {
        return _.has(obj, "callee")
    });
    "function" != typeof /./ && "object" != typeof Int8Array && (_.isFunction = function(obj) {
        return "function" == typeof obj || !1
    });
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj))
    };
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj !== +obj
    };
    _.isBoolean = function(obj) {
        return obj === !0 || obj === !1 || "[object Boolean]" === toString.call(obj)
    };
    _.isNull = function(obj) {
        return null === obj
    };
    _.isUndefined = function(obj) {
        return void 0 === obj
    };
    _.has = function(obj, key) {
        return null != obj && hasOwnProperty.call(obj, key)
    };
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this
    };
    _.identity = function(value) {
        return value
    };
    _.constant = function(value) {
        return function() {
            return value
        }
    };
    _.noop = function() {};
    _.property = property;
    _.propertyOf = function(obj) {
        return null == obj ? function() {} : function(key) {
            return obj[key]
        }
    };
    _.matcher = _.matches = function(attrs) {
        attrs = _.extendOwn({}, attrs);
        return function(obj) {
            return _.isMatch(obj, attrs)
        }
    };
    _.times = function(n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);
        for (var i = 0; n > i; i++) accum[i] = iteratee(i);
        return accum
    };
    _.random = function(min, max) {
        if (null == max) {
            max = min;
            min = 0
        }
        return min + Math.floor(Math.random() * (max - min + 1))
    };
    _.now = Date.now || function() {
            return (new Date).getTime()
        };
    var escapeMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        unescapeMap = _.invert(escapeMap),
        createEscaper = function(map) {
            var escaper = function(match) {
                    return map[match]
                },
                source = "(?:" + _.keys(map).join("|") + ")",
                testRegexp = RegExp(source),
                replaceRegexp = RegExp(source, "g");
            return function(string) {
                string = null == string ? "" : "" + string;
                return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string
            }
        };
    _.escape = createEscaper(escapeMap);
    _.unescape = createEscaper(unescapeMap);
    _.result = function(object, property, fallback) {
        var value = null == object ? void 0 : object[property];
        void 0 === value && (value = fallback);
        return _.isFunction(value) ? value.call(object) : value
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id
    };
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/,
        escapes = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        escaper = /\\|'|\r|\n|\u2028|\u2029/g,
        escapeChar = function(match) {
            return "\\" + escapes[match]
        };
    _.template = function(text, settings, oldSettings) {
        !settings && oldSettings && (settings = oldSettings);
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g"),
            index = 0,
            source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, escapeChar);
            index = offset + match.length;
            escape ? source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'" : interpolate ? source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" : evaluate && (source += "';\n" + evaluate + "\n__p+='");
            return match
        });
        source += "';\n";
        settings.variable || (source = "with(obj||{}){\n" + source + "}\n");
        source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
            var render = new Function(settings.variable || "obj", "_", source)
        } catch (e) {
            e.source = source;
            throw e
        }
        var template = function(data) {
                return render.call(this, data, _)
            },
            argument = settings.variable || "obj";
        template.source = "function(" + argument + "){\n" + source + "}";
        return template
    };
    _.chain = function(obj) {
        var instance = _(obj);
        instance._chain = !0;
        return instance
    };
    var result = function(instance, obj) {
        return instance._chain ? _(obj).chain() : obj
    };
    _.mixin = function(obj) {
        _.each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return result(this, func.apply(_, args))
            }
        })
    };
    _.mixin(_);
    _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            "shift" !== name && "splice" !== name || 0 !== obj.length || delete obj[0];
            return result(this, obj)
        }
    });
    _.each(["concat", "join", "slice"], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result(this, method.apply(this._wrapped, arguments))
        }
    });
    _.prototype.value = function() {
        return this._wrapped
    };
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() {
        return "" + this._wrapped
    };
    "function" == typeof ognyvo.define && ognyvo.define.amd && ognyvo.define("underscore", [], function() {
        return _
    })
}).call(this);
! function(root, factory) {
    if ("function" == typeof ognyvo.define && ognyvo.define.amd) ognyvo.define("backbone", ["underscore", "jquery", "exports"], function(_, $, exports) {
        root.Backbone = factory(root, exports, _, $)
    });
    else if ("undefined" != typeof exports) {
        var _ = require("underscore");
        factory(root, exports, _)
    } else root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$)
}(this, function(root, Backbone, _, $) {
    var previousBackbone = root.Backbone,
        array = [],
        slice = (array.push, array.slice);
    array.splice;
    Backbone.VERSION = "1.1.2";
    Backbone.$ = $;
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return this
    };
    Backbone.emulateHTTP = !1;
    Backbone.emulateJSON = !1;
    var Events = Backbone.Events = {
            on: function(name, callback, context) {
                if (!eventsApi(this, "on", name, [callback, context]) || !callback) return this;
                this._events || (this._events = {});
                var events = this._events[name] || (this._events[name] = []);
                events.push({
                    callback: callback,
                    context: context,
                    ctx: context || this
                });
                return this
            },
            once: function(name, callback, context) {
                if (!eventsApi(this, "once", name, [callback, context]) || !callback) return this;
                var self = this,
                    once = _.once(function() {
                        self.off(name, once);
                        callback.apply(this, arguments)
                    });
                once._callback = callback;
                return this.on(name, once, context)
            },
            off: function(name, callback, context) {
                var retain, ev, events, names, i, l, j, k;
                if (!this._events || !eventsApi(this, "off", name, [callback, context])) return this;
                if (!name && !callback && !context) {
                    this._events = void 0;
                    return this
                }
                names = name ? [name] : _.keys(this._events);
                for (i = 0, l = names.length; l > i; i++) {
                    name = names[i];
                    if (events = this._events[name]) {
                        this._events[name] = retain = [];
                        if (callback || context)
                            for (j = 0, k = events.length; k > j; j++) {
                                ev = events[j];
                                (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) && retain.push(ev)
                            }
                        retain.length || delete this._events[name]
                    }
                }
                return this
            },
            trigger: function(name) {
                if (!this._events) return this;
                var args = slice.call(arguments, 1);
                if (!eventsApi(this, "trigger", name, args)) return this;
                var events = this._events[name],
                    allEvents = this._events.all;
                events && triggerEvents(events, args);
                allEvents && triggerEvents(allEvents, arguments);
                return this
            },
            stopListening: function(obj, name, callback) {
                var listeningTo = this._listeningTo;
                if (!listeningTo) return this;
                var remove = !name && !callback;
                callback || "object" != typeof name || (callback = this);
                obj && ((listeningTo = {})[obj._listenId] = obj);
                for (var id in listeningTo) {
                    obj = listeningTo[id];
                    obj.off(name, callback, this);
                    (remove || _.isEmpty(obj._events)) && delete this._listeningTo[id]
                }
                return this
            }
        },
        eventSplitter = /\s+/,
        eventsApi = function(obj, action, name, rest) {
            if (!name) return !0;
            if ("object" == typeof name) {
                for (var key in name) obj[action].apply(obj, [key, name[key]].concat(rest));
                return !1
            }
            if (eventSplitter.test(name)) {
                for (var names = name.split(eventSplitter), i = 0, l = names.length; l > i; i++) obj[action].apply(obj, [names[i]].concat(rest));
                return !1
            }
            return !0
        },
        triggerEvents = function(events, args) {
            var ev, i = -1,
                l = events.length,
                a1 = args[0],
                a2 = args[1],
                a3 = args[2];
            switch (args.length) {
                case 0:
                    for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx);
                    return;
                case 1:
                    for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1);
                    return;
                case 2:
                    for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2);
                    return;
                case 3:
                    for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                    return;
                default:
                    for (; ++i < l;)(ev = events[i]).callback.apply(ev.ctx, args);
                    return
            }
        },
        listenMethods = {
            listenTo: "on",
            listenToOnce: "once"
        };
    _.each(listenMethods, function(implementation, method) {
        Events[method] = function(obj, name, callback) {
            var listeningTo = this._listeningTo || (this._listeningTo = {}),
                id = obj._listenId || (obj._listenId = _.uniqueId("l"));
            listeningTo[id] = obj;
            callback || "object" != typeof name || (callback = this);
            obj[implementation](name, callback, this);
            return this
        }
    });
    Events.bind = Events.on;
    Events.unbind = Events.off;
    _.extend(Backbone, Events);
    var Model = Backbone.Model = function(attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId("c");
        this.attributes = {};
        options.collection && (this.collection = options.collection);
        options.parse && (attrs = this.parse(attrs, options) || {});
        attrs = _.defaults({}, attrs, _.result(this, "defaults"));
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    _.extend(Model.prototype, Events, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(options) {
            return _.clone(this.attributes)
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments)
        },
        get: function(attr) {
            return this.attributes[attr]
        },
        escape: function(attr) {
            return _.escape(this.get(attr))
        },
        has: function(attr) {
            return null != this.get(attr)
        },
        set: function(key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (null == key) return this;
            if ("object" == typeof key) {
                attrs = key;
                options = val
            } else(attrs = {})[key] = val;
            options || (options = {});
            if (!this._validate(attrs, options)) return !1;
            unset = options.unset;
            silent = options.silent;
            changes = [];
            changing = this._changing;
            this._changing = !0;
            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {}
            }
            current = this.attributes, prev = this._previousAttributes;
            this.idAttribute in attrs && (this.id = attrs[this.idAttribute]);
            for (attr in attrs) {
                val = attrs[attr];
                _.isEqual(current[attr], val) || changes.push(attr);
                _.isEqual(prev[attr], val) ? delete this.changed[attr] : this.changed[attr] = val;
                unset ? delete current[attr] : current[attr] = val
            }
            if (!silent) {
                changes.length && (this._pending = options);
                for (var i = 0, l = changes.length; l > i; i++) this.trigger("change:" + changes[i], this, current[changes[i]], options)
            }
            if (changing) return this;
            if (!silent)
                for (; this._pending;) {
                    options = this._pending;
                    this._pending = !1;
                    this.trigger("change", this, options)
                }
            this._pending = !1;
            this._changing = !1;
            return this
        },
        unset: function(attr, options) {
            return this.set(attr, void 0, _.extend({}, options, {
                unset: !0
            }))
        },
        clear: function(options) {
            var attrs = {};
            for (var key in this.attributes) attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, {
                unset: !0
            }))
        },
        hasChanged: function(attr) {
            return null == attr ? !_.isEmpty(this.changed) : _.has(this.changed, attr)
        },
        changedAttributes: function(diff) {
            if (!diff) return this.hasChanged() ? _.clone(this.changed) : !1;
            var val, changed = !1,
                old = this._changing ? this._previousAttributes : this.attributes;
            for (var attr in diff) _.isEqual(old[attr], val = diff[attr]) || ((changed || (changed = {}))[attr] = val);
            return changed
        },
        previous: function(attr) {
            return null != attr && this._previousAttributes ? this._previousAttributes[attr] : null
        },
        previousAttributes: function() {
            return _.clone(this._previousAttributes)
        },
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            void 0 === options.parse && (options.parse = !0);
            var model = this,
                success = options.success;
            options.success = function(resp) {
                if (!model.set(model.parse(resp, options), options)) return !1;
                success && success(model, resp, options);
                model.trigger("sync", model, resp, options)
            };
            wrapError(this, options);
            return this.sync("read", this, options)
        },
        save: function(key, val, options) {
            var attrs, method, xhr, attributes = this.attributes;
            if (null == key || "object" == typeof key) {
                attrs = key;
                options = val
            } else(attrs = {})[key] = val;
            options = _.extend({
                validate: !0
            }, options);
            if (attrs && !options.wait) {
                if (!this.set(attrs, options)) return !1
            } else if (!this._validate(attrs, options)) return !1;
            attrs && options.wait && (this.attributes = _.extend({}, attributes, attrs));
            void 0 === options.parse && (options.parse = !0);
            var model = this,
                success = options.success;
            options.success = function(resp) {
                model.attributes = attributes;
                var serverAttrs = model.parse(resp, options);
                options.wait && (serverAttrs = _.extend(attrs || {}, serverAttrs));
                if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) return !1;
                success && success(model, resp, options);
                model.trigger("sync", model, resp, options)
            };
            wrapError(this, options);
            method = this.isNew() ? "create" : options.patch ? "patch" : "update";
            "patch" === method && (options.attrs = attrs);
            xhr = this.sync(method, this, options);
            attrs && options.wait && (this.attributes = attributes);
            return xhr
        },
        destroy: function(options) {
            options = options ? _.clone(options) : {};
            var model = this,
                success = options.success,
                destroy = function() {
                    model.trigger("destroy", model, model.collection, options)
                };
            options.success = function(resp) {
                (options.wait || model.isNew()) && destroy();
                success && success(model, resp, options);
                model.isNew() || model.trigger("sync", model, resp, options)
            };
            if (this.isNew()) {
                options.success();
                return !1
            }
            wrapError(this, options);
            var xhr = this.sync("delete", this, options);
            options.wait || destroy();
            return xhr
        },
        url: function() {
            var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
            return this.isNew() ? base : base.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(resp, options) {
            return resp
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(options) {
            return this._validate({}, _.extend(options || {}, {
                validate: !0
            }))
        },
        _validate: function(attrs, options) {
            if (!options.validate || !this.validate) return !0;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error) return !0;
            this.trigger("invalid", this, error, _.extend(options, {
                validationError: error
            }));
            return !1
        }
    });
    var modelMethods = ["keys", "values", "pairs", "invert", "pick", "omit"];
    _.each(modelMethods, function(method) {
        Model.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.attributes);
            return _[method].apply(_, args)
        }
    });
    var Collection = Backbone.Collection = function(models, options) {
            options || (options = {});
            options.model && (this.model = options.model);
            void 0 !== options.comparator && (this.comparator = options.comparator);
            this._reset();
            this.initialize.apply(this, arguments);
            models && this.reset(models, _.extend({
                silent: !0
            }, options))
        },
        setOptions = {
            add: !0,
            remove: !0,
            merge: !0
        },
        addOptions = {
            add: !0,
            remove: !1
        };
    _.extend(Collection.prototype, Events, {
        model: Model,
        initialize: function() {},
        toJSON: function(options) {
            return this.map(function(model) {
                return model.toJSON(options)
            })
        },
        sync: function() {
            return Backbone.sync.apply(this, arguments)
        },
        add: function(models, options) {
            return this.set(models, _.extend({
                merge: !1
            }, options, addOptions))
        },
        remove: function(models, options) {
            var singular = !_.isArray(models);
            models = singular ? [models] : _.clone(models);
            options || (options = {});
            var i, l, index, model;
            for (i = 0, l = models.length; l > i; i++) {
                model = models[i] = this.get(models[i]);
                if (model) {
                    delete this._byId[model.id];
                    delete this._byId[model.cid];
                    index = this.indexOf(model);
                    this.models.splice(index, 1);
                    this.length--;
                    if (!options.silent) {
                        options.index = index;
                        model.trigger("remove", model, this, options)
                    }
                    this._removeReference(model, options)
                }
            }
            return singular ? models[0] : models
        },
        set: function(models, options) {
            options = _.defaults({}, options, setOptions);
            options.parse && (models = this.parse(models, options));
            var singular = !_.isArray(models);
            models = singular ? models ? [models] : [] : _.clone(models);
            var i, l, id, model, attrs, existing, sort, at = options.at,
                targetModel = this.model,
                sortable = this.comparator && null == at && options.sort !== !1,
                sortAttr = _.isString(this.comparator) ? this.comparator : null,
                toAdd = [],
                toRemove = [],
                modelMap = {},
                add = options.add,
                merge = options.merge,
                remove = options.remove,
                order = !sortable && add && remove ? [] : !1;
            for (i = 0, l = models.length; l > i; i++) {
                attrs = models[i] || {};
                id = attrs instanceof Model ? model = attrs : attrs[targetModel.prototype.idAttribute || "id"];
                if (existing = this.get(id)) {
                    remove && (modelMap[existing.cid] = !0);
                    if (merge) {
                        attrs = attrs === model ? model.attributes : attrs;
                        options.parse && (attrs = existing.parse(attrs, options));
                        existing.set(attrs, options);
                        sortable && !sort && existing.hasChanged(sortAttr) && (sort = !0)
                    }
                    models[i] = existing
                } else if (add) {
                    model = models[i] = this._prepareModel(attrs, options);
                    if (!model) continue;
                    toAdd.push(model);
                    this._addReference(model, options)
                }
                model = existing || model;
                !order || !model.isNew() && modelMap[model.id] || order.push(model);
                modelMap[model.id] = !0
            }
            if (remove) {
                for (i = 0, l = this.length; l > i; ++i) modelMap[(model = this.models[i]).cid] || toRemove.push(model);
                toRemove.length && this.remove(toRemove, options)
            }
            if (toAdd.length || order && order.length) {
                sortable && (sort = !0);
                this.length += toAdd.length;
                if (null != at)
                    for (i = 0, l = toAdd.length; l > i; i++) this.models.splice(at + i, 0, toAdd[i]);
                else {
                    order && (this.models.length = 0);
                    var orderedModels = order || toAdd;
                    for (i = 0, l = orderedModels.length; l > i; i++) this.models.push(orderedModels[i])
                }
            }
            sort && this.sort({
                silent: !0
            });
            if (!options.silent) {
                for (i = 0, l = toAdd.length; l > i; i++)(model = toAdd[i]).trigger("add", model, this, options);
                (sort || order && order.length) && this.trigger("sort", this, options)
            }
            return singular ? models[0] : models
        },
        reset: function(models, options) {
            options || (options = {});
            for (var i = 0, l = this.models.length; l > i; i++) this._removeReference(this.models[i], options);
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({
                silent: !0
            }, options));
            options.silent || this.trigger("reset", this, options);
            return models
        },
        push: function(model, options) {
            return this.add(model, _.extend({
                at: this.length
            }, options))
        },
        pop: function(options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model
        },
        unshift: function(model, options) {
            return this.add(model, _.extend({
                at: 0
            }, options))
        },
        shift: function(options) {
            var model = this.at(0);
            this.remove(model, options);
            return model
        },
        slice: function() {
            return slice.apply(this.models, arguments)
        },
        get: function(obj) {
            return null != obj ? this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid] : void 0
        },
        at: function(index) {
            return this.models[index]
        },
        where: function(attrs, first) {
            return _.isEmpty(attrs) ? first ? void 0 : [] : this[first ? "find" : "filter"](function(model) {
                for (var key in attrs)
                    if (attrs[key] !== model.get(key)) return !1;
                return !0
            })
        },
        findWhere: function(attrs) {
            return this.where(attrs, !0)
        },
        sort: function(options) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            options || (options = {});
            _.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(_.bind(this.comparator, this));
            options.silent || this.trigger("sort", this, options);
            return this
        },
        pluck: function(attr) {
            return _.invoke(this.models, "get", attr)
        },
        fetch: function(options) {
            options = options ? _.clone(options) : {};
            void 0 === options.parse && (options.parse = !0);
            var success = options.success,
                collection = this;
            options.success = function(resp) {
                var method = options.reset ? "reset" : "set";
                collection[method](resp, options);
                success && success(collection, resp, options);
                collection.trigger("sync", collection, resp, options)
            };
            wrapError(this, options);
            return this.sync("read", this, options)
        },
        create: function(model, options) {
            options = options ? _.clone(options) : {};
            if (!(model = this._prepareModel(model, options))) return !1;
            options.wait || this.add(model, options);
            var collection = this,
                success = options.success;
            options.success = function(model, resp) {
                options.wait && collection.add(model, options);
                success && success(model, resp, options)
            };
            model.save(null, options);
            return model
        },
        parse: function(resp, options) {
            return resp
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(attrs, options) {
            if (attrs instanceof Model) return attrs;
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError) return model;
            this.trigger("invalid", this, model.validationError, options);
            return !1
        },
        _addReference: function(model, options) {
            this._byId[model.cid] = model;
            null != model.id && (this._byId[model.id] = model);
            model.collection || (model.collection = this);
            model.on("all", this._onModelEvent, this)
        },
        _removeReference: function(model, options) {
            this === model.collection && delete model.collection;
            model.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(event, model, collection, options) {
            if ("add" !== event && "remove" !== event || collection === this) {
                "destroy" === event && this.remove(model, options);
                if (model && event === "change:" + model.idAttribute) {
                    delete this._byId[model.previous(model.idAttribute)];
                    null != model.id && (this._byId[model.id] = model)
                }
                this.trigger.apply(this, arguments)
            }
        }
    });
    var methods = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    _.each(methods, function(method) {
        Collection.prototype[method] = function() {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args)
        }
    });
    var attributeMethods = ["groupBy", "countBy", "sortBy", "indexBy"];
    _.each(attributeMethods, function(method) {
        Collection.prototype[method] = function(value, context) {
            var iterator = _.isFunction(value) ? value : function(model) {
                return model.get(value)
            };
            return _[method](this.models, iterator, context)
        }
    });
    var View = Backbone.View = function(options) {
            this.cid = _.uniqueId("view");
            options || (options = {});
            _.extend(this, _.pick(options, viewOptions));
            this._ensureElement();
            this.initialize.apply(this, arguments);
            this.delegateEvents()
        },
        delegateEventSplitter = /^(\S+)\s*(.*)$/,
        viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    _.extend(View.prototype, Events, {
        tagName: "div",
        $: function(selector) {
            return this.$el.find(selector)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this
        },
        setElement: function(element, delegate) {
            this.$el && this.undelegateEvents();
            this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
            this.el = this.$el[0];
            delegate !== !1 && this.delegateEvents();
            return this
        },
        delegateEvents: function(events) {
            if (!events && !(events = _.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                _.isFunction(method) || (method = this[events[key]]);
                if (method) {
                    var match = key.match(delegateEventSplitter),
                        eventName = match[1],
                        selector = match[2];
                    method = _.bind(method, this);
                    eventName += ".delegateEvents" + this.cid;
                    "" === selector ? this.$el.on(eventName, method) : this.$el.on(eventName, selector, method)
                }
            }
            return this
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        _ensureElement: function() {
            if (this.el) this.setElement(_.result(this, "el"), !1);
            else {
                var attrs = _.extend({}, _.result(this, "attributes"));
                this.id && (attrs.id = _.result(this, "id"));
                this.className && (attrs["class"] = _.result(this, "className"));
                var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
                this.setElement($el, !1)
            }
        }
    });
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });
        var params = {
            type: type,
            dataType: "json"
        };
        options.url || (params.url = _.result(model, "url") || urlError());
        if (null == options.data && model && ("create" === method || "update" === method || "patch" === method)) {
            params.contentType = "application/json";
            params.data = JSON.stringify(options.attrs || model.toJSON(options))
        }
        if (options.emulateJSON) {
            params.contentType = "application/x-www-form-urlencoded";
            params.data = params.data ? {
                model: params.data
            } : {}
        }
        if (options.emulateHTTP && ("PUT" === type || "DELETE" === type || "PATCH" === type)) {
            params.type = "POST";
            options.emulateJSON && (params.data._method = type);
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                xhr.setRequestHeader("X-HTTP-Method-Override", type);
                return beforeSend ? beforeSend.apply(this, arguments) : void 0
            }
        }
        "GET" === params.type || options.emulateJSON || (params.processData = !1);
        "PATCH" === params.type && noXhrPatch && (params.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
        });
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger("request", model, xhr, options);
        return xhr
    };
    var noXhrPatch = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
        methodMap = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
    Backbone.ajax = function() {
        return Backbone.$.ajax.apply(Backbone.$, arguments)
    };
    var Router = Backbone.Router = function(options) {
            options || (options = {});
            options.routes && (this.routes = options.routes);
            this._bindRoutes();
            this.initialize.apply(this, arguments)
        },
        optionalParam = /\((.*?)\)/g,
        namedParam = /(\(\?)?:\w+/g,
        splatParam = /\*\w+/g,
        escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
        initialize: function() {},
        route: function(route, name, callback) {
            _.isRegExp(route) || (route = this._routeToRegExp(route));
            if (_.isFunction(name)) {
                callback = name;
                name = ""
            }
            callback || (callback = this[name]);
            var router = this;
            Backbone.history.route(route, function(fragment) {
                var args = router._extractParameters(route, fragment);
                router.execute(callback, args);
                router.trigger.apply(router, ["route:" + name].concat(args));
                router.trigger("route", name, args);
                Backbone.history.trigger("route", router, name, args)
            });
            return this
        },
        execute: function(callback, args) {
            callback && callback.apply(this, args)
        },
        navigate: function(fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = _.result(this, "routes");
                for (var route, routes = _.keys(this.routes); null != (route = routes.pop());) this.route(route, this.routes[route])
            }
        },
        _routeToRegExp: function(route) {
            route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
                return optional ? match : "([^/?]+)"
            }).replace(splatParam, "([^?]*?)");
            return new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function(param, i) {
                return i === params.length - 1 ? param || null : param ? decodeURIComponent(param) : null
            })
        }
    });
    var History = Backbone.History = function() {
            this.handlers = [];
            _.bindAll(this, "checkUrl");
            if ("undefined" != typeof window) {
                this.location = window.location;
                this.history = window.history
            }
        },
        routeStripper = /^[#\/]|\s+$/g,
        rootStripper = /^\/+|\/+$/g,
        isExplorer = /msie [\w.]+/,
        trailingSlash = /\/$/,
        pathStripper = /#.*$/;
    History.started = !1;
    _.extend(History.prototype, Events, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : ""
        },
        getFragment: function(fragment, forcePushState) {
            if (null == fragment)
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                    fragment = decodeURI(this.location.pathname + this.location.search);
                    var root = this.root.replace(trailingSlash, "");
                    fragment.indexOf(root) || (fragment = fragment.slice(root.length))
                } else fragment = this.getHash();
            return fragment.replace(routeStripper, "")
        },
        start: function(options) {
            if (History.started) throw new Error("Backbone.history has already been started");
            History.started = !0;
            this.options = _.extend({
                root: "/"
            }, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== !1;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var fragment = this.getFragment(),
                docMode = document.documentMode,
                oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || 7 >= docMode);
            this.root = ("/" + this.root + "/").replace(rootStripper, "/");
            if (oldIE && this._wantsHashChange) {
                var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = frame.hide().appendTo("body")[0].contentWindow;
                this.navigate(fragment)
            }
            this._hasPushState ? Backbone.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !oldIE ? Backbone.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = fragment;
            var loc = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    this.fragment = this.getFragment(null, !0);
                    this.location.replace(this.root + "#" + this.fragment);
                    return !0
                }
                if (this._hasPushState && this.atRoot() && loc.hash) {
                    this.fragment = this.getHash().replace(routeStripper, "");
                    this.history.replaceState({}, document.title, this.root + this.fragment)
                }
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            this._checkUrlInterval && clearInterval(this._checkUrlInterval);
            History.started = !1
        },
        route: function(route, callback) {
            this.handlers.unshift({
                route: route,
                callback: callback
            })
        },
        checkUrl: function(e) {
            var current = this.getFragment();
            current === this.fragment && this.iframe && (current = this.getFragment(this.getHash(this.iframe)));
            if (current === this.fragment) return !1;
            this.iframe && this.navigate(current);
            this.loadUrl()
        },
        loadUrl: function(fragment) {
            fragment = this.fragment = this.getFragment(fragment);
            return _.any(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return !0
                }
            })
        },
        navigate: function(fragment, options) {
            if (!History.started) return !1;
            options && options !== !0 || (options = {
                trigger: !!options
            });
            var url = this.root + (fragment = this.getFragment(fragment || ""));
            fragment = fragment.replace(pathStripper, "");
            if (this.fragment !== fragment) {
                this.fragment = fragment;
                "" === fragment && "/" !== url && (url = url.slice(0, -1));
                if (this._hasPushState) this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
                else {
                    if (!this._wantsHashChange) return this.location.assign(url);
                    this._updateHash(this.location, fragment, options.replace);
                    if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
                        options.replace || this.iframe.document.open().close();
                        this._updateHash(this.iframe.location, fragment, options.replace)
                    }
                }
                return options.trigger ? this.loadUrl(fragment) : void 0
            }
        },
        _updateHash: function(location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, "");
                location.replace(href + "#" + fragment)
            } else location.hash = "#" + fragment
        }
    });
    Backbone.history = new History;
    var extend = function(protoProps, staticProps) {
        var child, parent = this;
        child = protoProps && _.has(protoProps, "constructor") ? protoProps.constructor : function() {
            return parent.apply(this, arguments)
        };
        _.extend(child, parent, staticProps);
        var Surrogate = function() {
            this.constructor = child
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;
        protoProps && _.extend(child.prototype, protoProps);
        child.__super__ = parent.prototype;
        return child
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function() {
            throw new Error('A "url" property or function must be specified')
        },
        wrapError = function(model, options) {
            var error = options.error;
            options.error = function(resp) {
                error && error(model, resp, options);
                model.trigger("error", model, resp, options)
            }
        };
    return Backbone
});
! function(root, factory) {
    if ("function" == typeof ognyvo.define && ognyvo.define.amd) ognyvo.define("marionette", ["backbone", "underscore"], function(Backbone, _) {
        return root.Marionette = root.Mn = factory(root, Backbone, _)
    });
    else if ("undefined" != typeof exports) {
        var Backbone = require("backbone"),
            _ = require("underscore");
        module.exports = factory(root, Backbone, _)
    } else root.Marionette = root.Mn = factory(root, root.Backbone, root._)
}(this, function(root, Backbone, _) {
    "use strict";
    ! function(Backbone, _) {
        var previousChildViewContainer = Backbone.ChildViewContainer;
        Backbone.ChildViewContainer = function(Backbone, _) {
            var Container = function(views) {
                this._views = {};
                this._indexByModel = {};
                this._indexByCustom = {};
                this._updateLength();
                _.each(views, this.add, this)
            };
            _.extend(Container.prototype, {
                add: function(view, customIndex) {
                    var viewCid = view.cid;
                    this._views[viewCid] = view;
                    view.model && (this._indexByModel[view.model.cid] = viewCid);
                    customIndex && (this._indexByCustom[customIndex] = viewCid);
                    this._updateLength();
                    return this
                },
                findByModel: function(model) {
                    return this.findByModelCid(model.cid)
                },
                findByModelCid: function(modelCid) {
                    var viewCid = this._indexByModel[modelCid];
                    return this.findByCid(viewCid)
                },
                findByCustom: function(index) {
                    var viewCid = this._indexByCustom[index];
                    return this.findByCid(viewCid)
                },
                findByIndex: function(index) {
                    return _.values(this._views)[index]
                },
                findByCid: function(cid) {
                    return this._views[cid]
                },
                remove: function(view) {
                    var viewCid = view.cid;
                    view.model && delete this._indexByModel[view.model.cid];
                    _.any(this._indexByCustom, function(cid, key) {
                        if (cid === viewCid) {
                            delete this._indexByCustom[key];
                            return !0
                        }
                    }, this);
                    delete this._views[viewCid];
                    this._updateLength();
                    return this
                },
                call: function(method) {
                    this.apply(method, _.tail(arguments))
                },
                apply: function(method, args) {
                    _.each(this._views, function(view) {
                        _.isFunction(view[method]) && view[method].apply(view, args || [])
                    })
                },
                _updateLength: function() {
                    this.length = _.size(this._views)
                }
            });
            var methods = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            _.each(methods, function(method) {
                Container.prototype[method] = function() {
                    var views = _.values(this._views),
                        args = [views].concat(_.toArray(arguments));
                    return _[method].apply(_, args)
                }
            });
            return Container
        }(Backbone, _);
        Backbone.ChildViewContainer.VERSION = "0.1.5";
        Backbone.ChildViewContainer.noConflict = function() {
            Backbone.ChildViewContainer = previousChildViewContainer;
            return this
        };
        return Backbone.ChildViewContainer
    }(Backbone, _);
    ! function(Backbone, _) {
        var previousWreqr = Backbone.Wreqr,
            Wreqr = Backbone.Wreqr = {};
        Backbone.Wreqr.VERSION = "1.3.1";
        Backbone.Wreqr.noConflict = function() {
            Backbone.Wreqr = previousWreqr;
            return this
        };
        Wreqr.Handlers = function(Backbone, _) {
            var Handlers = function(options) {
                this.options = options;
                this._wreqrHandlers = {};
                _.isFunction(this.initialize) && this.initialize(options)
            };
            Handlers.extend = Backbone.Model.extend;
            _.extend(Handlers.prototype, Backbone.Events, {
                setHandlers: function(handlers) {
                    _.each(handlers, function(handler, name) {
                        var context = null;
                        if (_.isObject(handler) && !_.isFunction(handler)) {
                            context = handler.context;
                            handler = handler.callback
                        }
                        this.setHandler(name, handler, context)
                    }, this)
                },
                setHandler: function(name, handler, context) {
                    var config = {
                        callback: handler,
                        context: context
                    };
                    this._wreqrHandlers[name] = config;
                    this.trigger("handler:add", name, handler, context)
                },
                hasHandler: function(name) {
                    return !!this._wreqrHandlers[name]
                },
                getHandler: function(name) {
                    var config = this._wreqrHandlers[name];
                    return config ? function() {
                        var args = Array.prototype.slice.apply(arguments);
                        return config.callback.apply(config.context, args)
                    } : void 0
                },
                removeHandler: function(name) {
                    delete this._wreqrHandlers[name]
                },
                removeAllHandlers: function() {
                    this._wreqrHandlers = {}
                }
            });
            return Handlers
        }(Backbone, _);
        Wreqr.CommandStorage = function() {
            var CommandStorage = function(options) {
                this.options = options;
                this._commands = {};
                _.isFunction(this.initialize) && this.initialize(options)
            };
            _.extend(CommandStorage.prototype, Backbone.Events, {
                getCommands: function(commandName) {
                    var commands = this._commands[commandName];
                    if (!commands) {
                        commands = {
                            command: commandName,
                            instances: []
                        };
                        this._commands[commandName] = commands
                    }
                    return commands
                },
                addCommand: function(commandName, args) {
                    var command = this.getCommands(commandName);
                    command.instances.push(args)
                },
                clearCommands: function(commandName) {
                    var command = this.getCommands(commandName);
                    command.instances = []
                }
            });
            return CommandStorage
        }();
        Wreqr.Commands = function(Wreqr) {
            return Wreqr.Handlers.extend({
                storageType: Wreqr.CommandStorage,
                constructor: function(options) {
                    this.options = options || {};
                    this._initializeStorage(this.options);
                    this.on("handler:add", this._executeCommands, this);
                    var args = Array.prototype.slice.call(arguments);
                    Wreqr.Handlers.prototype.constructor.apply(this, args)
                },
                execute: function(name, args) {
                    name = arguments[0];
                    args = Array.prototype.slice.call(arguments, 1);
                    this.hasHandler(name) ? this.getHandler(name).apply(this, args) : this.storage.addCommand(name, args)
                },
                _executeCommands: function(name, handler, context) {
                    var command = this.storage.getCommands(name);
                    _.each(command.instances, function(args) {
                        handler.apply(context, args)
                    });
                    this.storage.clearCommands(name)
                },
                _initializeStorage: function(options) {
                    var storage, StorageType = options.storageType || this.storageType;
                    storage = _.isFunction(StorageType) ? new StorageType : StorageType;
                    this.storage = storage
                }
            })
        }(Wreqr);
        Wreqr.RequestResponse = function(Wreqr) {
            return Wreqr.Handlers.extend({
                request: function() {
                    var name = arguments[0],
                        args = Array.prototype.slice.call(arguments, 1);
                    return this.hasHandler(name) ? this.getHandler(name).apply(this, args) : void 0
                }
            })
        }(Wreqr);
        Wreqr.EventAggregator = function(Backbone, _) {
            var EA = function() {};
            EA.extend = Backbone.Model.extend;
            _.extend(EA.prototype, Backbone.Events);
            return EA
        }(Backbone, _);
        Wreqr.Channel = function(Wreqr) {
            var Channel = function(channelName) {
                this.vent = new Backbone.Wreqr.EventAggregator;
                this.reqres = new Backbone.Wreqr.RequestResponse;
                this.commands = new Backbone.Wreqr.Commands;
                this.channelName = channelName
            };
            _.extend(Channel.prototype, {
                reset: function() {
                    this.vent.off();
                    this.vent.stopListening();
                    this.reqres.removeAllHandlers();
                    this.commands.removeAllHandlers();
                    return this
                },
                connectEvents: function(hash, context) {
                    this._connect("vent", hash, context);
                    return this
                },
                connectCommands: function(hash, context) {
                    this._connect("commands", hash, context);
                    return this
                },
                connectRequests: function(hash, context) {
                    this._connect("reqres", hash, context);
                    return this
                },
                _connect: function(type, hash, context) {
                    if (hash) {
                        context = context || this;
                        var method = "vent" === type ? "on" : "setHandler";
                        _.each(hash, function(fn, eventName) {
                            this[type][method](eventName, _.bind(fn, context))
                        }, this)
                    }
                }
            });
            return Channel
        }(Wreqr);
        Wreqr.radio = function(Wreqr) {
            var Radio = function() {
                this._channels = {};
                this.vent = {};
                this.commands = {};
                this.reqres = {};
                this._proxyMethods()
            };
            _.extend(Radio.prototype, {
                channel: function(channelName) {
                    if (!channelName) throw new Error("Channel must receive a name");
                    return this._getChannel(channelName)
                },
                _getChannel: function(channelName) {
                    var channel = this._channels[channelName];
                    if (!channel) {
                        channel = new Wreqr.Channel(channelName);
                        this._channels[channelName] = channel
                    }
                    return channel
                },
                _proxyMethods: function() {
                    _.each(["vent", "commands", "reqres"], function(system) {
                        _.each(messageSystems[system], function(method) {
                            this[system][method] = proxyMethod(this, system, method)
                        }, this)
                    }, this)
                }
            });
            var messageSystems = {
                    vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
                    commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
                    reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
                },
                proxyMethod = function(radio, system, method) {
                    return function(channelName) {
                        var messageSystem = radio._getChannel(channelName)[system],
                            args = Array.prototype.slice.call(arguments, 1);
                        return messageSystem[method].apply(messageSystem, args)
                    }
                };
            return new Radio
        }(Wreqr);
        return Backbone.Wreqr
    }(Backbone, _);
    var previousMarionette = root.Marionette,
        Marionette = Backbone.Marionette = {};
    Marionette.VERSION = "2.3.2";
    Marionette.noConflict = function() {
        root.Marionette = previousMarionette;
        return this
    };
    Backbone.Marionette = Marionette;
    Marionette.Deferred = Backbone.$.Deferred;
    Marionette.extend = Backbone.Model.extend;
    Marionette.isNodeAttached = function(el) {
        return Backbone.$.contains(document.documentElement, el)
    };
    Marionette.getOption = function(target, optionName) {
        return target && optionName ? target.options && void 0 !== target.options[optionName] ? target.options[optionName] : target[optionName] : void 0
    };
    Marionette.proxyGetOption = function(optionName) {
        return Marionette.getOption(this, optionName)
    };
    Marionette._getValue = function(value, context, params) {
        if (_.isFunction(value)) {
            params = params || [];
            value = value.apply(context, params)
        }
        return value
    };
    Marionette.normalizeMethods = function(hash) {
        return _.reduce(hash, function(normalizedHash, method, name) {
            _.isFunction(method) || (method = this[method]);
            method && (normalizedHash[name] = method);
            return normalizedHash
        }, {}, this)
    };
    Marionette.normalizeUIString = function(uiString, ui) {
        return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(r) {
            return ui[r.slice(4)]
        })
    };
    Marionette.normalizeUIKeys = function(hash, ui) {
        return _.reduce(hash, function(memo, val, key) {
            var normalizedKey = Marionette.normalizeUIString(key, ui);
            memo[normalizedKey] = val;
            return memo
        }, {})
    };
    Marionette.normalizeUIValues = function(hash, ui) {
        _.each(hash, function(val, key) {
            _.isString(val) && (hash[key] = Marionette.normalizeUIString(val, ui))
        });
        return hash
    };
    Marionette.actAsCollection = function(object, listProperty) {
        var methods = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        _.each(methods, function(method) {
            object[method] = function() {
                var list = _.values(_.result(this, listProperty)),
                    args = [list].concat(_.toArray(arguments));
                return _[method].apply(_, args)
            }
        })
    };
    var deprecate = Marionette.deprecate = function(message, test) {
        _.isObject(message) && (message = message.prev + " is going to be removed in the future. Please use " + message.next + " instead." + (message.url ? " See: " + message.url : ""));
        if (!(void 0 !== test && test || deprecate._cache[message])) {
            deprecate._warn("Deprecation warning: " + message);
            deprecate._cache[message] = !0
        }
    };
    deprecate._warn = "undefined" != typeof console && (console.warn || console.log) || function() {};
    deprecate._cache = {};
    Marionette._triggerMethod = function() {
        function getEventName(match, prefix, eventName) {
            return eventName.toUpperCase()
        }
        var splitter = /(^|:)(\w)/gi;
        return function(context, event, args) {
            var noEventArg = arguments.length < 3;
            if (noEventArg) {
                args = event;
                event = args[0]
            }
            var result, methodName = "on" + event.replace(splitter, getEventName),
                method = context[methodName];
            _.isFunction(method) && (result = method.apply(context, noEventArg ? _.rest(args) : args));
            _.isFunction(context.trigger) && (noEventArg + args.length > 1 ? context.trigger.apply(context, noEventArg ? args : [event].concat(_.rest(args, 0))) : context.trigger(event));
            return result
        }
    }();
    Marionette.triggerMethod = function(event) {
        return Marionette._triggerMethod(this, arguments)
    };
    Marionette.triggerMethodOn = function(context) {
        var fnc = _.isFunction(context.triggerMethod) ? context.triggerMethod : Marionette.triggerMethod;
        return fnc.apply(context, _.rest(arguments))
    };
    Marionette.MonitorDOMRefresh = function(view) {
        function handleShow() {
            view._isShown = !0;
            triggerDOMRefresh()
        }

        function handleRender() {
            view._isRendered = !0;
            triggerDOMRefresh()
        }

        function triggerDOMRefresh() {
            view._isShown && view._isRendered && Marionette.isNodeAttached(view.el) && _.isFunction(view.triggerMethod) && view.triggerMethod("dom:refresh")
        }
        view.on({
            show: handleShow,
            render: handleRender
        })
    };
    ! function(Marionette) {
        function bindFromStrings(target, entity, evt, methods) {
            var methodNames = methods.split(/\s+/);
            _.each(methodNames, function(methodName) {
                var method = target[methodName];
                if (!method) throw new Marionette.Error('Method "' + methodName + '" was configured as an event handler, but does not exist.');
                target.listenTo(entity, evt, method)
            })
        }

        function bindToFunction(target, entity, evt, method) {
            target.listenTo(entity, evt, method)
        }

        function unbindFromStrings(target, entity, evt, methods) {
            var methodNames = methods.split(/\s+/);
            _.each(methodNames, function(methodName) {
                var method = target[methodName];
                target.stopListening(entity, evt, method)
            })
        }

        function unbindToFunction(target, entity, evt, method) {
            target.stopListening(entity, evt, method)
        }

        function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
            if (entity && bindings) {
                if (!_.isObject(bindings)) throw new Marionette.Error({
                    message: "Bindings must be an object or function.",
                    url: "marionette.functions.html#marionettebindentityevents"
                });
                bindings = Marionette._getValue(bindings, target);
                _.each(bindings, function(methods, evt) {
                    _.isFunction(methods) ? functionCallback(target, entity, evt, methods) : stringCallback(target, entity, evt, methods)
                })
            }
        }
        Marionette.bindEntityEvents = function(target, entity, bindings) {
            iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings)
        };
        Marionette.unbindEntityEvents = function(target, entity, bindings) {
            iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings)
        };
        Marionette.proxyBindEntityEvents = function(entity, bindings) {
            return Marionette.bindEntityEvents(this, entity, bindings)
        };
        Marionette.proxyUnbindEntityEvents = function(entity, bindings) {
            return Marionette.unbindEntityEvents(this, entity, bindings)
        }
    }(Marionette);
    var errorProps = ["description", "fileName", "lineNumber", "name", "message", "number"];
    Marionette.Error = Marionette.extend.call(Error, {
        urlRoot: "http://marionettejs.com/docs/v" + Marionette.VERSION + "/",
        constructor: function(message, options) {
            if (_.isObject(message)) {
                options = message;
                message = options.message
            } else options || (options = {});
            var error = Error.call(this, message);
            _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));
            this.captureStackTrace();
            options.url && (this.url = this.urlRoot + options.url)
        },
        captureStackTrace: function() {
            Error.captureStackTrace && Error.captureStackTrace(this, Marionette.Error)
        },
        toString: function() {
            return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
        }
    });
    Marionette.Error.extend = Marionette.extend;
    Marionette.Callbacks = function() {
        this._deferred = Marionette.Deferred();
        this._callbacks = []
    };
    _.extend(Marionette.Callbacks.prototype, {
        add: function(callback, contextOverride) {
            var promise = _.result(this._deferred, "promise");
            this._callbacks.push({
                cb: callback,
                ctx: contextOverride
            });
            promise.then(function(args) {
                contextOverride && (args.context = contextOverride);
                callback.call(args.context, args.options)
            })
        },
        run: function(options, context) {
            this._deferred.resolve({
                options: options,
                context: context
            })
        },
        reset: function() {
            var callbacks = this._callbacks;
            this._deferred = Marionette.Deferred();
            this._callbacks = [];
            _.each(callbacks, function(cb) {
                this.add(cb.cb, cb.ctx)
            }, this)
        }
    });
    Marionette.Controller = function(options) {
        this.options = options || {};
        _.isFunction(this.initialize) && this.initialize(this.options)
    };
    Marionette.Controller.extend = Marionette.extend;
    _.extend(Marionette.Controller.prototype, Backbone.Events, {
        destroy: function() {
            Marionette._triggerMethod(this, "before:destroy", arguments);
            Marionette._triggerMethod(this, "destroy", arguments);
            this.stopListening();
            this.off();
            return this
        },
        triggerMethod: Marionette.triggerMethod,
        getOption: Marionette.proxyGetOption
    });
    Marionette.Object = function(options) {
        this.options = _.extend({}, _.result(this, "options"), options);
        this.initialize.apply(this, arguments)
    };
    Marionette.Object.extend = Marionette.extend;
    _.extend(Marionette.Object.prototype, Backbone.Events, {
        initialize: function() {},
        destroy: function() {
            this.triggerMethod("before:destroy");
            this.triggerMethod("destroy");
            this.stopListening()
        },
        triggerMethod: Marionette.triggerMethod,
        getOption: Marionette.proxyGetOption,
        bindEntityEvents: Marionette.proxyBindEntityEvents,
        unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.Region = Marionette.Object.extend({
        constructor: function(options) {
            this.options = options || {};
            this.el = this.getOption("el");
            this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
            if (!this.el) throw new Marionette.Error({
                name: "NoElError",
                message: 'An "el" must be specified for a region.'
            });
            this.$el = this.getEl(this.el);
            Marionette.Object.call(this, options)
        },
        show: function(view, options) {
            if (this._ensureElement()) {
                this._ensureViewIsIntact(view);
                var showOptions = options || {},
                    isDifferentView = view !== this.currentView,
                    preventDestroy = !!showOptions.preventDestroy,
                    forceShow = !!showOptions.forceShow,
                    isChangingView = !!this.currentView,
                    _shouldDestroyView = isDifferentView && !preventDestroy,
                    _shouldShowView = isDifferentView || forceShow;
                isChangingView && this.triggerMethod("before:swapOut", this.currentView, this, options);
                this.currentView && delete this.currentView._parent;
                _shouldDestroyView ? this.empty() : isChangingView && _shouldShowView && this.currentView.off("destroy", this.empty, this);
                if (_shouldShowView) {
                    view.once("destroy", this.empty, this);
                    view.render();
                    view._parent = this;
                    isChangingView && this.triggerMethod("before:swap", view, this, options);
                    this.triggerMethod("before:show", view, this, options);
                    Marionette.triggerMethodOn(view, "before:show", view, this, options);
                    isChangingView && this.triggerMethod("swapOut", this.currentView, this, options);
                    var attachedRegion = Marionette.isNodeAttached(this.el),
                        displayedViews = [],
                        triggerBeforeAttach = showOptions.triggerBeforeAttach || this.triggerBeforeAttach,
                        triggerAttach = showOptions.triggerAttach || this.triggerAttach;
                    if (attachedRegion && triggerBeforeAttach) {
                        displayedViews = this._displayedViews(view);
                        this._triggerAttach(displayedViews, "before:")
                    }
                    this.attachHtml(view);
                    this.currentView = view;
                    if (attachedRegion && triggerAttach) {
                        displayedViews = this._displayedViews(view);
                        this._triggerAttach(displayedViews)
                    }
                    isChangingView && this.triggerMethod("swap", view, this, options);
                    this.triggerMethod("show", view, this, options);
                    Marionette.triggerMethodOn(view, "show", view, this, options);
                    return this
                }
                return this
            }
        },
        triggerBeforeAttach: !0,
        triggerAttach: !0,
        _triggerAttach: function(views, prefix) {
            var eventName = (prefix || "") + "attach";
            _.each(views, function(view) {
                Marionette.triggerMethodOn(view, eventName, view, this)
            }, this)
        },
        _displayedViews: function(view) {
            return _.union([view], _.result(view, "_getNestedViews") || [])
        },
        _ensureElement: function() {
            if (!_.isObject(this.el)) {
                this.$el = this.getEl(this.el);
                this.el = this.$el[0]
            }
            if (!this.$el || 0 === this.$el.length) {
                if (this.getOption("allowMissingEl")) return !1;
                throw new Marionette.Error('An "el" ' + this.$el.selector + " must exist in DOM")
            }
            return !0
        },
        _ensureViewIsIntact: function(view) {
            if (!view) throw new Marionette.Error({
                name: "ViewNotValid",
                message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
            });
            if (view.isDestroyed) throw new Marionette.Error({
                name: "ViewDestroyedError",
                message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
            })
        },
        getEl: function(el) {
            return Backbone.$(el, Marionette._getValue(this.options.parentEl, this))
        },
        attachHtml: function(view) {
            this.$el.contents().detach();
            this.el.appendChild(view.el)
        },
        empty: function() {
            var view = this.currentView;
            if (view) {
                view.off("destroy", this.empty, this);
                this.triggerMethod("before:empty", view);
                this._destroyView();
                this.triggerMethod("empty", view);
                delete this.currentView;
                return this
            }
        },
        _destroyView: function() {
            var view = this.currentView;
            if (view.destroy && !view.isDestroyed) view.destroy();
            else if (view.remove) {
                view.remove();
                view.isDestroyed = !0
            }
        },
        attachView: function(view) {
            this.currentView = view;
            return this
        },
        hasView: function() {
            return !!this.currentView
        },
        reset: function() {
            this.empty();
            this.$el && (this.el = this.$el.selector);
            delete this.$el;
            return this
        }
    }, {
        buildRegion: function(regionConfig, DefaultRegionClass) {
            if (_.isString(regionConfig)) return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
            if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
            if (_.isFunction(regionConfig)) return this._buildRegionFromRegionClass(regionConfig);
            throw new Marionette.Error({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        },
        _buildRegionFromSelector: function(selector, DefaultRegionClass) {
            return new DefaultRegionClass({
                el: selector
            })
        },
        _buildRegionFromObject: function(regionConfig, DefaultRegionClass) {
            var RegionClass = regionConfig.regionClass || DefaultRegionClass,
                options = _.omit(regionConfig, "selector", "regionClass");
            regionConfig.selector && !options.el && (options.el = regionConfig.selector);
            return new RegionClass(options)
        },
        _buildRegionFromRegionClass: function(RegionClass) {
            return new RegionClass
        }
    });
    Marionette.RegionManager = Marionette.Controller.extend({
        constructor: function(options) {
            this._regions = {};
            Marionette.Controller.call(this, options);
            this.addRegions(this.getOption("regions"))
        },
        addRegions: function(regionDefinitions, defaults) {
            regionDefinitions = Marionette._getValue(regionDefinitions, this, arguments);
            return _.reduce(regionDefinitions, function(regions, definition, name) {
                _.isString(definition) && (definition = {
                    selector: definition
                });
                definition.selector && (definition = _.defaults({}, definition, defaults));
                regions[name] = this.addRegion(name, definition);
                return regions
            }, {}, this)
        },
        addRegion: function(name, definition) {
            var region;
            region = definition instanceof Marionette.Region ? definition : Marionette.Region.buildRegion(definition, Marionette.Region);
            this.triggerMethod("before:add:region", name, region);
            region._parent = this;
            this._store(name, region);
            this.triggerMethod("add:region", name, region);
            return region
        },
        get: function(name) {
            return this._regions[name]
        },
        getRegions: function() {
            return _.clone(this._regions)
        },
        removeRegion: function(name) {
            var region = this._regions[name];
            this._remove(name, region);
            return region
        },
        removeRegions: function() {
            var regions = this.getRegions();
            _.each(this._regions, function(region, name) {
                this._remove(name, region)
            }, this);
            return regions
        },
        emptyRegions: function() {
            var regions = this.getRegions();
            _.invoke(regions, "empty");
            return regions
        },
        destroy: function() {
            this.removeRegions();
            return Marionette.Controller.prototype.destroy.apply(this, arguments)
        },
        _store: function(name, region) {
            this._regions[name] = region;
            this._setLength()
        },
        _remove: function(name, region) {
            this.triggerMethod("before:remove:region", name, region);
            region.empty();
            region.stopListening();
            delete region._parent;
            delete this._regions[name];
            this._setLength();
            this.triggerMethod("remove:region", name, region)
        },
        _setLength: function() {
            this.length = _.size(this._regions)
        }
    });
    Marionette.actAsCollection(Marionette.RegionManager.prototype, "_regions");
    Marionette.TemplateCache = function(templateId) {
        this.templateId = templateId
    };
    _.extend(Marionette.TemplateCache, {
        templateCaches: {},
        get: function(templateId) {
            var cachedTemplate = this.templateCaches[templateId];
            if (!cachedTemplate) {
                cachedTemplate = new Marionette.TemplateCache(templateId);
                this.templateCaches[templateId] = cachedTemplate
            }
            return cachedTemplate.load()
        },
        clear: function() {
            var i, args = _.toArray(arguments),
                length = args.length;
            if (length > 0)
                for (i = 0; length > i; i++) delete this.templateCaches[args[i]];
            else this.templateCaches = {}
        }
    });
    _.extend(Marionette.TemplateCache.prototype, {
        load: function() {
            if (this.compiledTemplate) return this.compiledTemplate;
            var template = this.loadTemplate(this.templateId);
            this.compiledTemplate = this.compileTemplate(template);
            return this.compiledTemplate
        },
        loadTemplate: function(templateId) {
            var template = Backbone.$(templateId).html();
            if (!template || 0 === template.length) throw new Marionette.Error({
                name: "NoTemplateError",
                message: 'Could not find template: "' + templateId + '"'
            });
            return template
        },
        compileTemplate: function(rawTemplate) {
            return _.template(rawTemplate)
        }
    });
    Marionette.Renderer = {
        render: function(template, data) {
            if (!template) throw new Marionette.Error({
                name: "TemplateNotFoundError",
                message: "Cannot render the template since its false, null or undefined."
            });
            var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);
            return templateFunc(data)
        }
    };
    Marionette.View = Backbone.View.extend({
        isDestroyed: !1,
        constructor: function(options) {
            _.bindAll(this, "render");
            options = Marionette._getValue(options, this);
            this.options = _.extend({}, _.result(this, "options"), options);
            this._behaviors = Marionette.Behaviors(this);
            Backbone.View.apply(this, arguments);
            Marionette.MonitorDOMRefresh(this);
            this.on("show", this.onShowCalled)
        },
        getTemplate: function() {
            return this.getOption("template")
        },
        serializeModel: function(model) {
            return model.toJSON.apply(model, _.rest(arguments))
        },
        mixinTemplateHelpers: function(target) {
            target = target || {};
            var templateHelpers = this.getOption("templateHelpers");
            templateHelpers = Marionette._getValue(templateHelpers, this);
            return _.extend(target, templateHelpers)
        },
        normalizeUIKeys: function(hash) {
            var uiBindings = _.result(this, "_uiBindings");
            return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, "ui"))
        },
        normalizeUIValues: function(hash) {
            var ui = _.result(this, "ui"),
                uiBindings = _.result(this, "_uiBindings");
            return Marionette.normalizeUIValues(hash, uiBindings || ui)
        },
        configureTriggers: function() {
            if (this.triggers) {
                var triggers = this.normalizeUIKeys(_.result(this, "triggers"));
                return _.reduce(triggers, function(events, value, key) {
                    events[key] = this._buildViewTrigger(value);
                    return events
                }, {}, this)
            }
        },
        delegateEvents: function(events) {
            this._delegateDOMEvents(events);
            this.bindEntityEvents(this.model, this.getOption("modelEvents"));
            this.bindEntityEvents(this.collection, this.getOption("collectionEvents"));
            _.each(this._behaviors, function(behavior) {
                behavior.bindEntityEvents(this.model, behavior.getOption("modelEvents"));
                behavior.bindEntityEvents(this.collection, behavior.getOption("collectionEvents"));
            }, this);
            return this
        },
        _delegateDOMEvents: function(eventsArg) {
            var events = Marionette._getValue(eventsArg || this.events, this);
            events = this.normalizeUIKeys(events);
            _.isUndefined(eventsArg) && (this.events = events);
            var combinedEvents = {},
                behaviorEvents = _.result(this, "behaviorEvents") || {},
                triggers = this.configureTriggers(),
                behaviorTriggers = _.result(this, "behaviorTriggers") || {};
            _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);
            Backbone.View.prototype.delegateEvents.call(this, combinedEvents)
        },
        undelegateEvents: function() {
            Backbone.View.prototype.undelegateEvents.apply(this, arguments);
            this.unbindEntityEvents(this.model, this.getOption("modelEvents"));
            this.unbindEntityEvents(this.collection, this.getOption("collectionEvents"));
            _.each(this._behaviors, function(behavior) {
                behavior.unbindEntityEvents(this.model, behavior.getOption("modelEvents"));
                behavior.unbindEntityEvents(this.collection, behavior.getOption("collectionEvents"))
            }, this);
            return this
        },
        onShowCalled: function() {},
        _ensureViewIsIntact: function() {
            if (this.isDestroyed) throw new Marionette.Error({
                name: "ViewDestroyedError",
                message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
            })
        },
        destroy: function() {
            if (!this.isDestroyed) {
                var args = _.toArray(arguments);
                this.triggerMethod.apply(this, ["before:destroy"].concat(args));
                this.isDestroyed = !0;
                this.triggerMethod.apply(this, ["destroy"].concat(args));
                this.unbindUIElements();
                this.remove();
                _.invoke(this._behaviors, "destroy", args);
                return this
            }
        },
        bindUIElements: function() {
            this._bindUIElements();
            _.invoke(this._behaviors, this._bindUIElements)
        },
        _bindUIElements: function() {
            if (this.ui) {
                this._uiBindings || (this._uiBindings = this.ui);
                var bindings = _.result(this, "_uiBindings");
                this.ui = {};
                _.each(bindings, function(selector, key) {
                    this.ui[key] = this.$(selector)
                }, this)
            }
        },
        unbindUIElements: function() {
            this._unbindUIElements();
            _.invoke(this._behaviors, this._unbindUIElements)
        },
        _unbindUIElements: function() {
            if (this.ui && this._uiBindings) {
                _.each(this.ui, function($el, name) {
                    delete this.ui[name]
                }, this);
                this.ui = this._uiBindings;
                delete this._uiBindings
            }
        },
        _buildViewTrigger: function(triggerDef) {
            var hasOptions = _.isObject(triggerDef),
                options = _.defaults({}, hasOptions ? triggerDef : {}, {
                    preventDefault: !0,
                    stopPropagation: !0
                }),
                eventName = hasOptions ? options.event : triggerDef;
            return function(e) {
                if (e) {
                    e.preventDefault && options.preventDefault && e.preventDefault();
                    e.stopPropagation && options.stopPropagation && e.stopPropagation()
                }
                var args = {
                    view: this,
                    model: this.model,
                    collection: this.collection
                };
                this.triggerMethod(eventName, args)
            }
        },
        setElement: function() {
            var ret = Backbone.View.prototype.setElement.apply(this, arguments);
            _.invoke(this._behaviors, "proxyViewProperties", this);
            return ret
        },
        triggerMethod: function() {
            for (var triggerMethod = Marionette._triggerMethod, ret = triggerMethod(this, arguments), behaviors = this._behaviors, i = 0, length = behaviors && behaviors.length; length > i; i++) triggerMethod(behaviors[i], arguments);
            return ret
        },
        _getImmediateChildren: function() {
            return []
        },
        _getNestedViews: function() {
            var children = this._getImmediateChildren();
            return children.length ? _.reduce(children, function(memo, view) {
                return view._getNestedViews ? memo.concat(view._getNestedViews()) : memo
            }, children) : children
        },
        normalizeMethods: Marionette.normalizeMethods,
        getOption: Marionette.proxyGetOption,
        bindEntityEvents: Marionette.proxyBindEntityEvents,
        unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.ItemView = Marionette.View.extend({
        constructor: function() {
            Marionette.View.apply(this, arguments)
        },
        serializeData: function() {
            if (!this.model && !this.collection) return {};
            var args = [this.model || this.collection];
            arguments.length && args.push.apply(args, arguments);
            return this.model ? this.serializeModel.apply(this, args) : {
                items: this.serializeCollection.apply(this, args)
            }
        },
        serializeCollection: function(collection) {
            return collection.toJSON.apply(collection, _.rest(arguments))
        },
        render: function() {
            this._ensureViewIsIntact();
            this.triggerMethod("before:render", this);
            this._renderTemplate();
            this.bindUIElements();
            this.triggerMethod("render", this);
            return this
        },
        _renderTemplate: function() {
            var template = this.getTemplate();
            if (template !== !1) {
                if (!template) throw new Marionette.Error({
                    name: "UndefinedTemplateError",
                    message: "Cannot render the template since it is null or undefined."
                });
                var data = this.serializeData();
                data = this.mixinTemplateHelpers(data);
                var html = Marionette.Renderer.render(template, data, this);
                this.attachElContent(html);
                return this
            }
        },
        attachElContent: function(html) {
            this.$el.html(html);
            return this
        }
    });
    Marionette.CollectionView = Marionette.View.extend({
        childViewEventPrefix: "childview",
        constructor: function(options) {
            var initOptions = options || {};
            _.isUndefined(this.sort) && (this.sort = _.isUndefined(initOptions.sort) ? !0 : initOptions.sort);
            this.once("render", this._initialEvents);
            this._initChildViewStorage();
            Marionette.View.apply(this, arguments);
            this.initRenderBuffer()
        },
        initRenderBuffer: function() {
            this.elBuffer = document.createDocumentFragment();
            this._bufferedChildren = []
        },
        startBuffering: function() {
            this.initRenderBuffer();
            this.isBuffering = !0
        },
        endBuffering: function() {
            this.isBuffering = !1;
            this._triggerBeforeShowBufferedChildren();
            this.attachBuffer(this, this.elBuffer);
            this._triggerShowBufferedChildren();
            this.initRenderBuffer()
        },
        _triggerBeforeShowBufferedChildren: function() {
            this._isShown && _.each(this._bufferedChildren, _.partial(this._triggerMethodOnChild, "before:show"))
        },
        _triggerShowBufferedChildren: function() {
            if (this._isShown) {
                _.each(this._bufferedChildren, _.partial(this._triggerMethodOnChild, "show"));
                this._bufferedChildren = []
            }
        },
        _triggerMethodOnChild: function(event, childView) {
            Marionette.triggerMethodOn(childView, event)
        },
        _initialEvents: function() {
            if (this.collection) {
                this.listenTo(this.collection, "add", this._onCollectionAdd);
                this.listenTo(this.collection, "remove", this._onCollectionRemove);
                this.listenTo(this.collection, "reset", this.render);
                this.sort && this.listenTo(this.collection, "sort", this._sortViews)
            }
        },
        _onCollectionAdd: function(child) {
            this.destroyEmptyView();
            var ChildView = this.getChildView(child),
                index = this.collection.indexOf(child);
            this.addChild(child, ChildView, index)
        },
        _onCollectionRemove: function(model) {
            var view = this.children.findByModel(model);
            this.removeChildView(view);
            this.checkEmpty()
        },
        onShowCalled: function() {
            this.children.each(_.partial(this._triggerMethodOnChild, "show"))
        },
        render: function() {
            this._ensureViewIsIntact();
            this.triggerMethod("before:render", this);
            this._renderChildren();
            this.triggerMethod("render", this);
            return this
        },
        resortView: function() {
            this.render()
        },
        _sortViews: function() {
            var orderChanged = this.collection.find(function(item, index) {
                var view = this.children.findByModel(item);
                return !view || view._index !== index
            }, this);
            orderChanged && this.resortView()
        },
        _emptyViewIndex: -1,
        _renderChildren: function() {
            this.destroyEmptyView();
            this.destroyChildren();
            if (this.isEmpty(this.collection)) this.showEmptyView();
            else {
                this.triggerMethod("before:render:collection", this);
                this.startBuffering();
                this.showCollection();
                this.endBuffering();
                this.triggerMethod("render:collection", this)
            }
        },
        showCollection: function() {
            var ChildView;
            this.collection.each(function(child, index) {
                ChildView = this.getChildView(child);
                this.addChild(child, ChildView, index)
            }, this)
        },
        showEmptyView: function() {
            var EmptyView = this.getEmptyView();
            if (EmptyView && !this._showingEmptyView) {
                this.triggerMethod("before:render:empty");
                this._showingEmptyView = !0;
                var model = new Backbone.Model;
                this.addEmptyView(model, EmptyView);
                this.triggerMethod("render:empty")
            }
        },
        destroyEmptyView: function() {
            if (this._showingEmptyView) {
                this.triggerMethod("before:remove:empty");
                this.destroyChildren();
                delete this._showingEmptyView;
                this.triggerMethod("remove:empty")
            }
        },
        getEmptyView: function() {
            return this.getOption("emptyView")
        },
        addEmptyView: function(child, EmptyView) {
            var emptyViewOptions = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
            _.isFunction(emptyViewOptions) && (emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex));
            var view = this.buildChildView(child, EmptyView, emptyViewOptions);
            view._parent = this;
            this.proxyChildEvents(view);
            this._isShown && Marionette.triggerMethodOn(view, "before:show");
            this.children.add(view);
            this.renderChildView(view, this._emptyViewIndex);
            this._isShown && Marionette.triggerMethodOn(view, "show")
        },
        getChildView: function(child) {
            var childView = this.getOption("childView");
            if (!childView) throw new Marionette.Error({
                name: "NoChildViewError",
                message: 'A "childView" must be specified'
            });
            return childView
        },
        addChild: function(child, ChildView, index) {
            var childViewOptions = this.getOption("childViewOptions");
            childViewOptions = Marionette._getValue(childViewOptions, this, [child, index]);
            var view = this.buildChildView(child, ChildView, childViewOptions);
            this._updateIndices(view, !0, index);
            this._addChildView(view, index);
            view._parent = this;
            return view
        },
        _updateIndices: function(view, increment, index) {
            if (this.sort) {
                increment && (view._index = index);
                this.children.each(function(laterView) {
                    laterView._index >= view._index && (laterView._index += increment ? 1 : -1)
                })
            }
        },
        _addChildView: function(view, index) {
            this.proxyChildEvents(view);
            this.triggerMethod("before:add:child", view);
            this.children.add(view);
            this.renderChildView(view, index);
            this._isShown && !this.isBuffering && Marionette.triggerMethodOn(view, "show");
            this.triggerMethod("add:child", view)
        },
        renderChildView: function(view, index) {
            view.render();
            this.attachHtml(this, view, index);
            return view
        },
        buildChildView: function(child, ChildViewClass, childViewOptions) {
            var options = _.extend({
                model: child
            }, childViewOptions);
            return new ChildViewClass(options)
        },
        removeChildView: function(view) {
            if (view) {
                this.triggerMethod("before:remove:child", view);
                view.destroy ? view.destroy() : view.remove && view.remove();
                delete view._parent;
                this.stopListening(view);
                this.children.remove(view);
                this.triggerMethod("remove:child", view);
                this._updateIndices(view, !1)
            }
            return view
        },
        isEmpty: function() {
            return !this.collection || 0 === this.collection.length
        },
        checkEmpty: function() {
            this.isEmpty(this.collection) && this.showEmptyView()
        },
        attachBuffer: function(collectionView, buffer) {
            collectionView.$el.append(buffer)
        },
        attachHtml: function(collectionView, childView, index) {
            if (collectionView.isBuffering) {
                collectionView.elBuffer.appendChild(childView.el);
                collectionView._bufferedChildren.push(childView)
            } else collectionView._insertBefore(childView, index) || collectionView._insertAfter(childView)
        },
        _insertBefore: function(childView, index) {
            var currentView, findPosition = this.sort && index < this.children.length - 1;
            findPosition && (currentView = this.children.find(function(view) {
                return view._index === index + 1
            }));
            if (currentView) {
                currentView.$el.before(childView.el);
                return !0
            }
            return !1
        },
        _insertAfter: function(childView) {
            this.$el.append(childView.el)
        },
        _initChildViewStorage: function() {
            this.children = new Backbone.ChildViewContainer
        },
        destroy: function() {
            if (!this.isDestroyed) {
                this.triggerMethod("before:destroy:collection");
                this.destroyChildren();
                this.triggerMethod("destroy:collection");
                return Marionette.View.prototype.destroy.apply(this, arguments)
            }
        },
        destroyChildren: function() {
            var childViews = this.children.map(_.identity);
            this.children.each(this.removeChildView, this);
            this.checkEmpty();
            return childViews
        },
        proxyChildEvents: function(view) {
            var prefix = this.getOption("childViewEventPrefix");
            this.listenTo(view, "all", function() {
                var args = _.toArray(arguments),
                    rootEvent = args[0],
                    childEvents = this.normalizeMethods(_.result(this, "childEvents"));
                args[0] = prefix + ":" + rootEvent;
                args.splice(1, 0, view);
                "undefined" != typeof childEvents && _.isFunction(childEvents[rootEvent]) && childEvents[rootEvent].apply(this, args.slice(1));
                this.triggerMethod.apply(this, args)
            }, this)
        },
        _getImmediateChildren: function() {
            return _.values(this.children._views)
        }
    });
    Marionette.CompositeView = Marionette.CollectionView.extend({
        constructor: function() {
            Marionette.CollectionView.apply(this, arguments)
        },
        _initialEvents: function() {
            if (this.collection) {
                this.listenTo(this.collection, "add", this._onCollectionAdd);
                this.listenTo(this.collection, "remove", this._onCollectionRemove);
                this.listenTo(this.collection, "reset", this._renderChildren);
                this.sort && this.listenTo(this.collection, "sort", this._sortViews)
            }
        },
        getChildView: function(child) {
            var childView = this.getOption("childView") || this.constructor;
            return childView
        },
        serializeData: function() {
            var data = {};
            this.model && (data = _.partial(this.serializeModel, this.model).apply(this, arguments));
            return data
        },
        render: function() {
            this._ensureViewIsIntact();
            this.isRendered = !0;
            this.resetChildViewContainer();
            this.triggerMethod("before:render", this);
            this._renderTemplate();
            this._renderChildren();
            this.triggerMethod("render", this);
            return this
        },
        _renderChildren: function() {
            this.isRendered && Marionette.CollectionView.prototype._renderChildren.call(this)
        },
        _renderTemplate: function() {
            var data = {};
            data = this.serializeData();
            data = this.mixinTemplateHelpers(data);
            this.triggerMethod("before:render:template");
            var template = this.getTemplate(),
                html = Marionette.Renderer.render(template, data, this);
            this.attachElContent(html);
            this.bindUIElements();
            this.triggerMethod("render:template")
        },
        attachElContent: function(html) {
            this.$el.html(html);
            return this
        },
        attachBuffer: function(compositeView, buffer) {
            var $container = this.getChildViewContainer(compositeView);
            $container.append(buffer)
        },
        _insertAfter: function(childView) {
            var $container = this.getChildViewContainer(this, childView);
            $container.append(childView.el)
        },
        getChildViewContainer: function(containerView, childView) {
            if ("$childViewContainer" in containerView) return containerView.$childViewContainer;
            var container, childViewContainer = Marionette.getOption(containerView, "childViewContainer");
            if (childViewContainer) {
                var selector = Marionette._getValue(childViewContainer, containerView);
                container = "@" === selector.charAt(0) && containerView.ui ? containerView.ui[selector.substr(4)] : containerView.$(selector);
                if (container.length <= 0) throw new Marionette.Error({
                    name: "ChildViewContainerMissingError",
                    message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
                })
            } else container = containerView.$el;
            containerView.$childViewContainer = container;
            return container
        },
        resetChildViewContainer: function() {
            this.$childViewContainer && delete this.$childViewContainer
        }
    });
    Marionette.LayoutView = Marionette.ItemView.extend({
        regionClass: Marionette.Region,
        constructor: function(options) {
            options = options || {};
            this._firstRender = !0;
            this._initializeRegions(options);
            Marionette.ItemView.call(this, options)
        },
        render: function() {
            this._ensureViewIsIntact();
            this._firstRender ? this._firstRender = !1 : this._reInitializeRegions();
            return Marionette.ItemView.prototype.render.apply(this, arguments)
        },
        destroy: function() {
            if (this.isDestroyed) return this;
            this.regionManager.destroy();
            return Marionette.ItemView.prototype.destroy.apply(this, arguments)
        },
        addRegion: function(name, definition) {
            var regions = {};
            regions[name] = definition;
            return this._buildRegions(regions)[name]
        },
        addRegions: function(regions) {
            this.regions = _.extend({}, this.regions, regions);
            return this._buildRegions(regions)
        },
        removeRegion: function(name) {
            delete this.regions[name];
            return this.regionManager.removeRegion(name)
        },
        getRegion: function(region) {
            return this.regionManager.get(region)
        },
        getRegions: function() {
            return this.regionManager.getRegions()
        },
        _buildRegions: function(regions) {
            var defaults = {
                regionClass: this.getOption("regionClass"),
                parentEl: _.partial(_.result, this, "el")
            };
            return this.regionManager.addRegions(regions, defaults)
        },
        _initializeRegions: function(options) {
            var regions;
            this._initRegionManager();
            regions = Marionette._getValue(this.regions, this, [options]) || {};
            var regionOptions = this.getOption.call(options, "regions");
            regionOptions = Marionette._getValue(regionOptions, this, [options]);
            _.extend(regions, regionOptions);
            regions = this.normalizeUIValues(regions);
            this.addRegions(regions)
        },
        _reInitializeRegions: function() {
            this.regionManager.invoke("reset")
        },
        getRegionManager: function() {
            return new Marionette.RegionManager
        },
        _initRegionManager: function() {
            this.regionManager = this.getRegionManager();
            this.regionManager._parent = this;
            this.listenTo(this.regionManager, "before:add:region", function(name) {
                this.triggerMethod("before:add:region", name)
            });
            this.listenTo(this.regionManager, "add:region", function(name, region) {
                this[name] = region;
                this.triggerMethod("add:region", name, region)
            });
            this.listenTo(this.regionManager, "before:remove:region", function(name) {
                this.triggerMethod("before:remove:region", name)
            });
            this.listenTo(this.regionManager, "remove:region", function(name, region) {
                delete this[name];
                this.triggerMethod("remove:region", name, region)
            })
        },
        _getImmediateChildren: function() {
            return _.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()
        }
    });
    Marionette.Behavior = Marionette.Object.extend({
        constructor: function(options, view) {
            this.view = view;
            this.defaults = _.result(this, "defaults") || {};
            this.options = _.extend({}, this.defaults, options);
            Marionette.Object.apply(this, arguments)
        },
        $: function() {
            return this.view.$.apply(this.view, arguments)
        },
        destroy: function() {
            this.stopListening()
        },
        proxyViewProperties: function(view) {
            this.$el = view.$el;
            this.el = view.el
        }
    });
    Marionette.Behaviors = function(Marionette, _) {
        function Behaviors(view, behaviors) {
            if (!_.isObject(view.behaviors)) return {};
            behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, "behaviors"));
            Behaviors.wrap(view, behaviors, _.keys(methods));
            return behaviors
        }

        function BehaviorTriggersBuilder(view, behaviors) {
            this._view = view;
            this._viewUI = _.result(view, "ui");
            this._behaviors = behaviors;
            this._triggers = {}
        }
        var delegateEventSplitter = /^(\S+)\s*(.*)$/,
            methods = {
                behaviorTriggers: function(behaviorTriggers, behaviors) {
                    var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
                    return triggerBuilder.buildBehaviorTriggers()
                },
                behaviorEvents: function(behaviorEvents, behaviors) {
                    var _behaviorsEvents = {},
                        viewUI = this._uiBindings || _.result(this, "ui");
                    _.each(behaviors, function(b, i) {
                        var _events = {},
                            behaviorEvents = _.clone(_.result(b, "events")) || {},
                            behaviorUI = b._uiBindings || _.result(b, "ui"),
                            ui = _.extend({}, viewUI, behaviorUI);
                        behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, ui);
                        var j = 0;
                        _.each(behaviorEvents, function(behaviour, key) {
                            var match = key.match(delegateEventSplitter),
                                eventName = match[1] + "." + [this.cid, i, j++, " "].join(""),
                                selector = match[2],
                                eventKey = eventName + selector,
                                handler = _.isFunction(behaviour) ? behaviour : b[behaviour];
                            _events[eventKey] = _.bind(handler, b)
                        }, this);
                        _behaviorsEvents = _.extend(_behaviorsEvents, _events)
                    }, this);
                    return _behaviorsEvents
                }
            };
        _.extend(Behaviors, {
            behaviorsLookup: function() {
                throw new Marionette.Error({
                    message: "You must define where your behaviors are stored.",
                    url: "marionette.behaviors.html#behaviorslookup"
                })
            },
            getBehaviorClass: function(options, key) {
                return options.behaviorClass ? options.behaviorClass : Marionette._getValue(Behaviors.behaviorsLookup, this, [options, key])[key]
            },
            parseBehaviors: function(view, behaviors) {
                return _.chain(behaviors).map(function(options, key) {
                    var BehaviorClass = Behaviors.getBehaviorClass(options, key),
                        behavior = new BehaviorClass(options, view),
                        nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, "behaviors"));
                    return [behavior].concat(nestedBehaviors)
                }).flatten().value()
            },
            wrap: function(view, behaviors, methodNames) {
                _.each(methodNames, function(methodName) {
                    view[methodName] = _.partial(methods[methodName], view[methodName], behaviors)
                })
            }
        });
        _.extend(BehaviorTriggersBuilder.prototype, {
            buildBehaviorTriggers: function() {
                _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
                return this._triggers
            },
            _buildTriggerHandlersForBehavior: function(behavior, i) {
                var ui = _.extend({}, this._viewUI, _.result(behavior, "ui")),
                    triggersHash = _.clone(_.result(behavior, "triggers")) || {};
                triggersHash = Marionette.normalizeUIKeys(triggersHash, ui);
                _.each(triggersHash, _.bind(this._setHandlerForBehavior, this, behavior, i))
            },
            _setHandlerForBehavior: function(behavior, i, eventName, trigger) {
                var triggerKey = trigger.replace(/^\S+/, function(triggerName) {
                    return triggerName + ".behaviortriggers" + i
                });
                this._triggers[triggerKey] = this._view._buildViewTrigger(eventName)
            }
        });
        return Behaviors
    }(Marionette, _);
    Marionette.AppRouter = Backbone.Router.extend({
        constructor: function(options) {
            this.options = options || {};
            Backbone.Router.apply(this, arguments);
            var appRoutes = this.getOption("appRoutes"),
                controller = this._getController();
            this.processAppRoutes(controller, appRoutes);
            this.on("route", this._processOnRoute, this)
        },
        appRoute: function(route, methodName) {
            var controller = this._getController();
            this._addAppRoute(controller, route, methodName)
        },
        _processOnRoute: function(routeName, routeArgs) {
            if (_.isFunction(this.onRoute)) {
                var routePath = _.invert(this.getOption("appRoutes"))[routeName];
                this.onRoute(routeName, routePath, routeArgs)
            }
        },
        processAppRoutes: function(controller, appRoutes) {
            if (appRoutes) {
                var routeNames = _.keys(appRoutes).reverse();
                _.each(routeNames, function(route) {
                    this._addAppRoute(controller, route, appRoutes[route])
                }, this)
            }
        },
        _getController: function() {
            return this.getOption("controller")
        },
        _addAppRoute: function(controller, route, methodName) {
            var method = controller[methodName];
            if (!method) throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
            this.route(route, methodName, _.bind(method, controller))
        },
        getOption: Marionette.proxyGetOption,
        triggerMethod: Marionette.triggerMethod,
        bindEntityEvents: Marionette.proxyBindEntityEvents,
        unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.Application = Marionette.Object.extend({
        constructor: function(options) {
            this._initializeRegions(options);
            this._initCallbacks = new Marionette.Callbacks;
            this.submodules = {};
            _.extend(this, options);
            this._initChannel();
            Marionette.Object.call(this, options)
        },
        execute: function() {
            this.commands.execute.apply(this.commands, arguments)
        },
        request: function() {
            return this.reqres.request.apply(this.reqres, arguments)
        },
        addInitializer: function(initializer) {
            this._initCallbacks.add(initializer)
        },
        start: function(options) {
            this.triggerMethod("before:start", options);
            this._initCallbacks.run(options, this);
            this.triggerMethod("start", options)
        },
        addRegions: function(regions) {
            return this._regionManager.addRegions(regions)
        },
        emptyRegions: function() {
            return this._regionManager.emptyRegions()
        },
        removeRegion: function(region) {
            return this._regionManager.removeRegion(region)
        },
        getRegion: function(region) {
            return this._regionManager.get(region)
        },
        getRegions: function() {
            return this._regionManager.getRegions()
        },
        module: function(moduleNames, moduleDefinition) {
            var ModuleClass = Marionette.Module.getClass(moduleDefinition),
                args = _.toArray(arguments);
            args.unshift(this);
            return ModuleClass.create.apply(ModuleClass, args)
        },
        getRegionManager: function() {
            return new Marionette.RegionManager
        },
        _initializeRegions: function(options) {
            var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {};
            this._initRegionManager();
            var optionRegions = Marionette.getOption(options, "regions");
            _.isFunction(optionRegions) && (optionRegions = optionRegions.call(this, options));
            _.extend(regions, optionRegions);
            this.addRegions(regions);
            return this
        },
        _initRegionManager: function() {
            this._regionManager = this.getRegionManager();
            this._regionManager._parent = this;
            this.listenTo(this._regionManager, "before:add:region", function() {
                Marionette._triggerMethod(this, "before:add:region", arguments)
            });
            this.listenTo(this._regionManager, "add:region", function(name, region) {
                this[name] = region;
                Marionette._triggerMethod(this, "add:region", arguments)
            });
            this.listenTo(this._regionManager, "before:remove:region", function() {
                Marionette._triggerMethod(this, "before:remove:region", arguments)
            });
            this.listenTo(this._regionManager, "remove:region", function(name) {
                delete this[name];
                Marionette._triggerMethod(this, "remove:region", arguments)
            })
        },
        _initChannel: function() {
            this.channelName = _.result(this, "channelName") || "global";
            this.channel = _.result(this, "channel") || Backbone.Wreqr.radio.channel(this.channelName);
            this.vent = _.result(this, "vent") || this.channel.vent;
            this.commands = _.result(this, "commands") || this.channel.commands;
            this.reqres = _.result(this, "reqres") || this.channel.reqres
        }
    });
    Marionette.Module = function(moduleName, app, options) {
        this.moduleName = moduleName;
        this.options = _.extend({}, this.options, options);
        this.initialize = options.initialize || this.initialize;
        this.submodules = {};
        this._setupInitializersAndFinalizers();
        this.app = app;
        _.isFunction(this.initialize) && this.initialize(moduleName, app, this.options)
    };
    Marionette.Module.extend = Marionette.extend;
    _.extend(Marionette.Module.prototype, Backbone.Events, {
        startWithParent: !0,
        initialize: function() {},
        addInitializer: function(callback) {
            this._initializerCallbacks.add(callback)
        },
        addFinalizer: function(callback) {
            this._finalizerCallbacks.add(callback)
        },
        start: function(options) {
            if (!this._isInitialized) {
                _.each(this.submodules, function(mod) {
                    mod.startWithParent && mod.start(options)
                });
                this.triggerMethod("before:start", options);
                this._initializerCallbacks.run(options, this);
                this._isInitialized = !0;
                this.triggerMethod("start", options)
            }
        },
        stop: function() {
            if (this._isInitialized) {
                this._isInitialized = !1;
                this.triggerMethod("before:stop");
                _.invoke(this.submodules, "stop");
                this._finalizerCallbacks.run(void 0, this);
                this._initializerCallbacks.reset();
                this._finalizerCallbacks.reset();
                this.triggerMethod("stop")
            }
        },
        addDefinition: function(moduleDefinition, customArgs) {
            this._runModuleDefinition(moduleDefinition, customArgs)
        },
        _runModuleDefinition: function(definition, customArgs) {
            if (definition) {
                var args = _.flatten([this, this.app, Backbone, Marionette, Backbone.$, _, customArgs]);
                definition.apply(this, args)
            }
        },
        _setupInitializersAndFinalizers: function() {
            this._initializerCallbacks = new Marionette.Callbacks;
            this._finalizerCallbacks = new Marionette.Callbacks
        },
        triggerMethod: Marionette.triggerMethod
    });
    _.extend(Marionette.Module, {
        create: function(app, moduleNames, moduleDefinition) {
            var module = app,
                customArgs = _.rest(arguments, 3);
            moduleNames = moduleNames.split(".");
            var length = moduleNames.length,
                moduleDefinitions = [];
            moduleDefinitions[length - 1] = moduleDefinition;
            _.each(moduleNames, function(moduleName, i) {
                var parentModule = module;
                module = this._getModule(parentModule, moduleName, app, moduleDefinition);
                this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs)
            }, this);
            return module
        },
        _getModule: function(parentModule, moduleName, app, def, args) {
            var options = _.extend({}, def),
                ModuleClass = this.getClass(def),
                module = parentModule[moduleName];
            if (!module) {
                module = new ModuleClass(moduleName, app, options);
                parentModule[moduleName] = module;
                parentModule.submodules[moduleName] = module
            }
            return module
        },
        getClass: function(moduleDefinition) {
            var ModuleClass = Marionette.Module;
            return moduleDefinition ? moduleDefinition.prototype instanceof ModuleClass ? moduleDefinition : moduleDefinition.moduleClass || ModuleClass : ModuleClass
        },
        _addModuleDefinition: function(parentModule, module, def, args) {
            var fn = this._getDefine(def),
                startWithParent = this._getStartWithParent(def, module);
            fn && module.addDefinition(fn, args);
            this._addStartWithParent(parentModule, module, startWithParent)
        },
        _getStartWithParent: function(def, module) {
            var swp;
            if (_.isFunction(def) && def.prototype instanceof Marionette.Module) {
                swp = module.constructor.prototype.startWithParent;
                return _.isUndefined(swp) ? !0 : swp
            }
            if (_.isObject(def)) {
                swp = def.startWithParent;
                return _.isUndefined(swp) ? !0 : swp
            }
            return !0
        },
        _getDefine: function(def) {
            return !_.isFunction(def) || def.prototype instanceof Marionette.Module ? _.isObject(def) ? def.define : null : def
        },
        _addStartWithParent: function(parentModule, module, startWithParent) {
            module.startWithParent = module.startWithParent && startWithParent;
            if (module.startWithParent && !module.startWithParentIsConfigured) {
                module.startWithParentIsConfigured = !0;
                parentModule.addInitializer(function(options) {
                    module.startWithParent && module.start(options)
                })
            }
        }
    });
    return Marionette
});
ognyvo.define("service/PubSub", [], function() {
    "use strict";
    var PubSub = function() {
        this.init()
    };
    PubSub.prototype = {
        constructor: PubSub,
        init: function() {
            this.cache = {}
        },
        trigger: function(topic, args) {
            if (void 0 !== this.cache[topic]) try {
                $.each(this.cache[topic], function() {
                    this.apply($, args || [])
                })
            } catch (err) {
                console.log(err)
            }
        },
        on: function(topic, callback) {
            this.cache[topic] || (this.cache[topic] = []);
            this.cache[topic].push(callback);
            return [topic, callback]
        },
        off: function(handle) {
            var t = handle[0],
                cache = this.cache;
            cache[t] && $.each(cache[t], function(idx) {
                this == handle[1] && cache[t].splice(idx, 1)
            })
        }
    };
    return PubSub
});
ognyvo.define("service/DynamicModuleManager", ["underscore", "./PubSub"], function(_, PubSub) {
    "use strict";
    var DynamicModuleManager = function() {};
    DynamicModuleManager.EVENT_LOADED = "Module:Loaded";
    DynamicModuleManager.EVENT_NOT_LOADED = "Module:NotLoaded";
    DynamicModuleManager.EVENT_ALL_LOADED = "Module:AllLoaded";
    DynamicModuleManager.prototype = _.extend(new PubSub, {
        collection: {},
        toLoad: [],
        initialize: function() {},
        addToLoadStack: function(path) {
            this.toLoad.push(path)
        },
        markLoaded: function(path) {
            if (this.hasLoaded(path)) {
                var index = _.indexOf(this.toLoad, path);
                this.toLoad[index] = null;
                this.toLoad.splice(index, 1);
                this.trigger(DynamicModuleManager.EVENT_LOADED, this.toLoad, path);
                this.toLoad.length || this.trigger(DynamicModuleManager.EVENT_ALL_LOADED, this.toLoad, path)
            }
        },
        markNotLoaded: function(path) {
            if (this.hasLoaded(path)) {
                var index = _.indexOf(this.toLoad, path);
                this.toLoad[index] = null;
                this.toLoad.splice(index, 1);
                this.trigger(DynamicModuleManager.EVENT_NOT_LOADED, this.toLoad, path);
                this.toLoad.length || this.trigger(DynamicModuleManager.EVENT_ALL_LOADED, this.toLoad, path)
            }
        },
        hasLoaded: function(value) {
            for (var index = -1, length = this.toLoad.length; ++index < length;)
                if (this.toLoad[index] === value) return !0;
            return !1
        },
        add: function(module, name) {
            if (this.collection.hasOwnProperty(name)) {
                this.destroyItem(name);
                this.collection[name] = null
            }
            this.collection[name] = module
        },
        get: function(name) {
            return this.collection.hasOwnProperty(name) ? this.collection[name] : null
        },
        has: function(name) {
            return this.collection.hasOwnProperty(name)
        },
        remove: function(name) {
            if (this.collection.hasOwnProperty(name)) {
                this.destroyItem(name);
                this.collection[name] = null
            }
        },
        destroyItem: function(name) {
            if (!this.has(name) || !this.collection[name].destroy) return !1;
            this.collection[name].destroy();
            return !0
        }
    });
    return DynamicModuleManager
});
ognyvo.define("helper/AppConsts", {
    SOCKET: {
        DISCONNECT: "Event:Socket:disconnect",
        CONNECT: "Event:Socket:connect",
        SUBSCRIBE: "Event:Socket:subscribe",
        UNSUBSCRIBE: "Event:Socket:unsubscribe",
        NOTIFICATION: "Event:Socket:notification"
    },
    EVENT: {
        API: {
            CALL: "Event:Api:Call"
        },
        SOCKET: {
            SUBSCRIBE: "Event:Socket:Subscribe",
            UNSUBSCRIBE: "Event:Socket:Unsubscribe",
            CALL: "Event:Socket:Call",
            USER_NOTIFICATION: "Event:Socket:UserNotification"
        },
        MEDIA: {
            SAVED: "Event:Media:Saved",
            UPLOAD: "Event:Media:Upload",
            UPLOAD_ERROR: "Event:Media:UploadError",
            SAVE_ERROR: "Event:Media:SaveError"
        },
        SYSTEM: {
            ALL_MODULES_LOADED: "Event:System:AllModulesLoaded",
            WINDOW_FOCUS: "Event:System:WindowFocus",
            WINDOW_BLUR: "Event:System:WindowBlur",
            MOUSE_MOVE: "Event:System:MouseMove",
            MOUSE_LEAVE: "Event:System:MouseLeave",
            MOUSE_ENTER: "Event:System:MouseEnter",
            CLICK: "Event:System:Click",
            SCROLL: "Event:System:Scroll",
            NEED_PAGE_REFRESH: "Event:System:NeedPageRefresh",
            RESIZE: "Event:System:Resize",
            HISTORY_CHANGE: "Event:System:HistoryChange",
            MANUAL_HISTORY_CHANGE: "Event:System:ManualHistoryChange",
            INIT_MODULES_LOADED: "Event:System:InitModulesLoaded",
            MODULES_LOADED: "Event:System:ModulesLoaded",
            NEED_EXPORT_VIEWS: "Event:System:NeedExportViews",
            EXPORT_VIEW: "Event:System:ExportView",
            AFTER_DOM_READY: "Event:System:AfterDomReady"
        },
        STATISTIC: {
            TRACK: "Event:Statistic:Track"
        },
        COMMON: {
            FAKE_CHAT_OPEN: "Event:Common:FakeChatOpen",
            TOP_MENU_SCROLLABILITY: "Event:Common:TopMenuScrollability",
            SEARCH_STRING_UPDATED: "Event:Common:SearchStringUpdated",
            FILTER_CATEGORY_TAG_REMOVED: "Event:Common:FilterCategoryTagRemoved",
            DO_FILTER_SEARCH: "Event:Common:DoFilterSearch",
            USER_NOTIFICATION: "Event:Common:UserNotification"
        },
        AUTH: {
            SOCIAL_AUTH: "Event:Auth:SocialAuth"
        },
        ARTICLE: {
            GET: "Event:Article:Get",
            SET_URL: "Event:Article:SetUrl",
            PACKET_DATA: "Event:Article:PacketData",
            SIMILAR_FILTER: "Event:Article:SimilarFilter",
            SIMILAR_FILTER_ON_START: "Event:Article:SimilarFilterOnStart",
            THIS_THEME_ARTICLES: "Event:Article:ThisThemeArticles",
            EXCLUDED_MATERIALS: "Event:Article:ExcludedMaterials",
            CONTENT_RENDERED: "Event:Article:ContentRendered",
            BLOCK_NEW_DATA: "Event:Article:BlockNewData",
            UNBLOCK_NEW_DATA: "Event:Article:UnblockNewData",
            SHOW_GALLERY: "Event:Article:ShowGallery",
            NEXT_URL: "Event:Article:NextUrl",
            NEED_NEXT: "Event:Article:NeedNext",
            CHECK_CATEGORY_FILTER: "Event:Article:CheckCategoryFilter",
            CATEGORY_FILTER: "Event:Article:CategoryFilter",
            CATEGORY_INIT_FILTER: "Event:Article:CategoryInitFilter",
            LIST_DATA: "Event:Article:ListData"
        },
        QA: {
            EDIT_ANSWER: "Event:QA:EditAnswer",
            SAVE_ANSWER_SUCCESS: "Event:QA:SaveAnswerSuccess",
            EDIT_ANSWER_SUCCESS: "Event:QA:EditAnswerSuccess"
        },
        REGION: {
            SELECTED: "Event:Region:Selected"
        },
        CAR: {
            SELECTED: "Event:Car:Selected",
            GLOBAL_MMM_UPDATE: "Event:Car:GlobalMMMUpdate"
        },
        POPUP: {
            CATEGORY_SELECTED: "Event:Popup:CategorySelected",
            SHOW_SIGNIN: "Event:Popup:ShowSignin",
            SHOW_SIGNUP: "Event:Popup:ShowSignup",
            SHOW_PASSWORD_RECOVERY: "Event:Popup:ShowPasswordRecovery"
        },
        LIST: {
            SET_URL: "Event:List:SetUrl",
            GET: "Event:List:Get",
            FILTER: "Event:List:Filter",
            INIT_FILTER: "Event:List:InitFilter",
            BLOCK_NEW_DATA: "Event:List:BlockNewData",
            UNBLOCK_NEW_DATA: "Event:List:UnblockNewData",
            PACKET_DATA: "Event:List:PacketData",
            NEED_FILTER: "Event:List:NeedFilter",
            SET_TAB_URL: "Event:List:SetTabUrl",
            RESULTS_AMOUNT: "Event:List:ResultsAmount"
        },
        FILTER: {
            GET_FILTER_DATA: "Event:Filter:GetFilterData"
        },
        CLIENT_COMPANY: {
            SELECTED: "Event:ClientCompany:Selected"
        }
    },
    COOKIE: {
        FAKE_CHAT: {
            DONT_WORRY: "FakeChat:DontWorry"
        }
    },
    TYPE: {
        MEDIA: {
            IMAGE_UPLOADED: "image",
            IMAGE_FROM_ALBUM: "album",
            IMAGE_FROM_LIBRARY: "library",
            IMAGE_LINK: "imageLink",
            VIDEO: "video"
        }
    }
});
var w = Function("return this")();
ognyvo.define("helper/window", [], function() {
    return w
});
ognyvo.define("dom.rules", ["jquery", "underscore"], function($, _) {
    "use strict";
    var DomModules = {};
    return DomModules
});
! function($) {
    function process() {
        check_lock = !1;
        for (var index = 0, selectorsLength = selectors.length; selectorsLength > index; index++) {
            var $appeared = $(selectors[index]).filter(function() {
                return $(this).is(":appeared")
            });
            $appeared.trigger("appear", [$appeared]);
            if ($prior_appeared[index]) {
                var $disappeared = $prior_appeared[index].not($appeared);
                $disappeared.trigger("disappear", [$disappeared])
            }
            $prior_appeared[index] = $appeared
        }
    }

    function add_selector(selector) {
        selectors.push(selector);
        $prior_appeared.push()
    }
    var selectors = [],
        check_binded = !1,
        check_lock = !1,
        defaults = {
            interval: 250,
            force_process: !1
        },
        $window = $(window),
        $prior_appeared = [];
    $.expr[":"].appeared = function(element) {
        var $element = $(element);
        if (!$element.is(":visible")) return !1;
        var window_left = $window.scrollLeft(),
            window_top = $window.scrollTop(),
            offset = $element.offset(),
            left = offset.left,
            top = offset.top;
        return top + $element.height() >= window_top && top - ($element.data("appear-top-offset") || 0) <= window_top + $window.height() && left + $element.width() >= window_left && left - ($element.data("appear-left-offset") || 0) <= window_left + $window.width() ? !0 : !1
    };
    $.fn.extend({
        appear: function(options) {
            var opts = $.extend({}, defaults, options || {}),
                selector = this.selector || this;
            if (!check_binded) {
                var on_check = function() {
                    if (!check_lock) {
                        check_lock = !0;
                        setTimeout(process, opts.interval)
                    }
                };
                $(window).scroll(on_check).resize(on_check);
                check_binded = !0
            }
            opts.force_process && setTimeout(process, opts.interval);
            add_selector(selector);
            return $(selector)
        }
    });
    $.extend({
        force_appear: function() {
            if (check_binded) {
                process();
                return !0
            }
            return !1
        }
    })
}(function() {
    return "undefined" != typeof module ? require("jquery") : jQuery
}());
ognyvo.define("jquery.appear", ["jquery"], function() {});
Function.prototype.clone = function() {
    var that = this,
        temp = function() {
            return that.apply(this, arguments)
        };
    for (key in this) temp[key] = this[key];
    return temp
};
$.U = $.U || {};
! function($, window, undefined) {
    "$:nomunge";
    $.U.ScrollbarWidth = function() {
        var parent, width, child;
        parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body");
        child = parent.children();
        width = child.innerWidth() - child.height(99).innerWidth();
        parent.remove();
        return width
    };
    $.fn.hasVerticalScrollBar = function() {
        return this.get(0) ? this.get(0).scrollHeight > this.innerHeight() : !1
    }
}(jQuery, this);
! function($, window, undefined) {
    $.U.globalPreloader = null;
    $.U.ShowGlobalPreloader = function() {
        if (!$.U.globalPreloader) {
            var pre = document.createElement("div");
            pre.className = "gloader fico_loader";
            $.U.globalPreloader = pre
        }
        document.body.appendChild($.U.globalPreloader)
    };
    $.U.HideGlobalPreloader = function() {
        $.U.globalPreloader && $.U.globalPreloader.parentNode && document.body.removeChild($.U.globalPreloader)
    };
    $.preloaderDefaults = {
        fixed: !1,
        isDark: !1
    };
    $.fn.UShowPreloader = function(options) {
        console.log("$$$$$$$$$$$$$ ------ SHOW PRELOADER");
        if (this.length) {
            options = options || {};
            var position = this.css("position");
            position && "static" != position || this.css("position", "relative");
            var $preloader = this.find(">.js-preloader");
            if (!$preloader.length) {
                var pre = '<div class="js-preloader b-preloader-overlay' + (options.fixed ? " b-preloader-overlay__fixed" : "") + " b-preloader-overlay__light" + (options.isDark ? "b-preloader-overlay__dark" : "") + '"' + (options.noBackground ? ' style="background-color: transparent;"' : "") + '><i class="fico-loader animate-spin"></i></div>';
                $preloader = $(pre)
            }
            this.append($preloader);
            if (options.topCentered) {
                var $p = $preloader.parent(),
                    pos = $p.position();
                $p.width();
                $preloader.height($(window).height() - pos.top)
            }
        }
    };
    $.fn.UHidePreloader = function() {
        var $preloader = this.find(">.js-preloader");
        $preloader.length && $preloader.remove()
    };
    $.fn.UHasPreloader = function() {
        return this.hasClass("js-preloader") || this.find(">.js-preloader").length
    }
}(jQuery, this);
! function($, window, undefined) {
    $.U.Tooltip = function(text, settings) {
        function makeTooltip(text) {
            if (text) {
                tooltip = messageTemplate.replace("{message}", text);
                $body.append($(tooltip).hide().fadeIn(150))
            }
        }

        function updateTooltip(text) {
            resetTimer();
            text && $(opts.messageId).find(opts.messageSelector).text(text);
            $(opts.messageId).fadeIn(150)
        }

        function resetTimer() {
            timeout && clearTimeout(timeout)
        }

        function showTooltip(text) {
            var $message = $(opts.messageId);
            $message.length ? updateTooltip(text) : makeTooltip(text);
            resetTimer();
            timerClose()
        }

        function linkTooltip() {
            var $th = $(this),
                link = $th.attr("href"),
                text = $th.data("text"),
                messageText = $(link).text() || text;
            showTooltip(messageText);
            return !1
        }

        function hideTooltip(e, callback) {
            resetTimer();
            callback ? $(opts.messageId).fadeOut(opts.fadeTime, function() {
                callback()
            }) : $(opts.messageId).fadeOut(opts.fadeTime)
        }

        function timerClose() {
            $.U.Tooltip.timeout = setTimeout(hideTooltip, opts.destroyTime)
        }

        function setEvents() {
            $body.on("mouseenter.tooltip", opts.messageId, resetTimer).on("click.tooltip", opts.messageId + " " + opts.closeSelector, hideTooltip).on("click.tooltip", opts.showSelector, linkTooltip)
        }
        var tooltip, opts = $.extend({}, $.U.Tooltip.defaults, settings),
            $body = $(document.body),
            messageTemplate = '<div id="tooltip" class="tooltip">				<i class="ico ico_tooltip_close"></i>				<div class="tooltip__content">{message}</div>			</div>',
            timeout = $.U.Tooltip.timeout;
        ! function() {
            showTooltip(text);
            setEvents()
        }()
    };
    $.U.Tooltip.timeout = null;
    $.U.Tooltip.defaults = {
        messageId: "#tooltip",
        messageSelector: ".tooltip__content",
        showSelector: ".tooltip_link",
        closeSelector: ".ico_tooltip_close",
        fadeTime: 300,
        destroyTime: 3e3
    }
}(jQuery, this);
! function($) {
    $.U.CollapsibleBaloon = null;
    $.fn.UBindCollapsibleBaloon = function(containerClass) {
        var th = this,
            containerClass = containerClass ? containerClass : ".ui_btn__arr",
            showContainer = (th.find(containerClass), function(e) {
                e.stopPropagation();
                var $th = $(this);
                $.U.CollapsibleBaloon = $th;
                $th.toggleClass("ui_btn__open")
            }),
            hideContainer = function() {
                if ($.U.CollapsibleBaloon && $.U.CollapsibleBaloon.length) {
                    $.U.CollapsibleBaloon.removeClass("ui_btn__open");
                    $.U.CollapsibleBaloon = null
                }
            },
            stopContainerClick = function(e) {
                e.stopPropagation()
            };
        $.fn.UUnbindCollapsibleBaloon(containerClass, !0);
        $(document.body).on("click.collapsibleBaloon", containerClass, showContainer);
        $(document.body).on("click.collapsibleBaloon", containerClass + "> .baloon", stopContainerClick);
        $(document.body).on("click.collapsibleBaloon", hideContainer)
    };
    $.fn.UUnbindCollapsibleBaloon = function(containerClass, canRemove) {
        containerClass = containerClass ? containerClass : ".ui_btn__arr";
        (!$(document.body).find(containerClass).length || canRemove) && $(document.body).off(".collapsibleBaloon")
    };
    $.fn.USelectorReset = function() {
        this.parents(".e-select").removeClass("e-select__selected").removeClass("e-select__active").removeClass("e-select__disabled")
    };
    $.fn.USelectorSelected = function() {
        this.parents(".e-select").addClass("e-select__selected")
    };
    $.fn.USelectorActive = function() {
        this.parents(".e-select").addClass("e-select__active")
    };
    $.fn.USelectorInactive = function() {
        this.parents(".e-select").removeClass("e-select__active")
    };
    $.fn.USelectorDisable = function() {
        this.attr("disabled", "disabled").parents(".e-select").addClass("e-select__disabled")
    };
    $.fn.USelectorEnable = function() {
        this.removeAttr("disabled").parents(".e-select").removeClass("e-select__disabled")
    };
    $.fn.USelectorShowListLoading = function() {
        $(this).closest(".f_text__container").addClass("loader")
    };
    $.fn.USelectorHideListLoading = function() {
        $(this).closest(".f_text__container").removeClass("loader")
    }
}(jQuery);
! function($, window, undefined) {
    $.U.onFormFieldError = function(e, clone) {
        $(e.currentTarget).UFormFieldErrorHide();
        clone && clone.UFormFieldErrorHide()
    };
    $.fn.UDisableButton = function(message, num) {
        this.addClass("b-btn__disabled")
    };
    $.fn.UEnableButton = function(message, num) {
        this.removeClass("b-btn__disabled")
    };
    $.fn.UShowInvalidField = function(message, num) {
        this.addClass("e-input__invalid")
    };
    $.fn.UHideInvalidField = function(message, num) {
        this.removeClass("e-input__invalid")
    };
    $.fn.UFormFieldErrorShow = function(message, num) {
        this.parents(".e-input-wrapper").addClass("e-input-wrapper__invalid");
        var _this = this,
            $labels = this.siblings(".js-error-label"),
            $cloneField = this.siblings('input[name="password-text"]'),
            intRegex = /^\d+$/,
            errorNum = num,
            messageIsNum = intRegex.test(message);
        if ($labels.length) {
            this.addClass("f_text__err");
            $cloneField.addClass("f_text__err");
            $labels.addClass("hidden");
            var $label;
            !intRegex.test(errorNum) && messageIsNum && (errorNum = parseInt(message));
            if (intRegex.test(errorNum)) {
                $label = $labels.filter(".error-" + errorNum);
                $label.length || ($label = $labels.first())
            } else $label = $labels.first();
            $label.removeClass("hidden");
            message && !messageIsNum && $label.text(message);
            this.on("click", function(e) {
                $.U.onFormFieldError(e, $cloneField)
            });
            $cloneField.on("click", function(e) {
                $.U.onFormFieldError(e, _this)
            })
        } else {
            var $parent = this.parents("[data-error]");
            $parent.addClass("b_form_input__invalid");
            message && !messageIsNum ? $parent.attr("data-error", message) : $parent.attr("data-error", $parent.data("default-error"))
        }
    };
    $.fn.UFormFieldErrorHide = function() {
        this.parents(".f_text__container").removeClass("field_has_error");
        this.parents("[data-error]").removeClass("b_form_input__invalid");
        var $texts = this.siblings(".f_text__input");
        $texts.removeClass("f_text__err");
        this.off("click", $.U.onFormFieldError);
        this.removeClass("f_text__err");
        this.siblings(".js-error-label").addClass("hidden")
    };
    $.fn.UFormFieldErrorLabelHide = function() {
        this.parents("[data-error]").removeClass("b_form_input__invalid");
        var $texts = this.siblings(".f_text__input");
        $texts.removeClass("f_text__err");
        this.siblings(".js-error-label").addClass("hidden")
    }
}(jQuery, this);
! function($, window, undefined) {
    $.fn.UReviveBanner = function(options) {
        function UReviveBanner($el, s) {
            function init(s) {
                settings = $.extend({}, $el.data("params") || {}, s);
                settings.zone = settings.zone || $el.data("zone");
                settings.interval = settings.interval || $el.data("refresh");
                settings.url = settings.url || getUrl(settings.zone);
                settings.interval && (intervalId = setInterval(autorefresh, settings.interval));
                load(settings.url);
                $el.trigger("inited")
            }

            function insertHtml(zone) {
                var m3_r = Math.floor(99999999999 * Math.random());
                $el.html("<a href='//rotary.blamper.ru/www/delivery/ck.php?n=af8ab732&amp;cb=" + m3_r + "' target='_blank'><img src='//rotary.blamper.ru/www/delivery/avw.php?zoneid=" + zone + "&amp;cb=" + m3_r + "&amp;n=af8ab732' border='0' alt='' /></a>")
            }

            function getUrl(zone) {
                zone = zone || 1;
                var m3_u = "https:" == location.protocol ? "https://rotary.blamper.ru/www/delivery/html.php" : "http://rotary.blamper.ru/www/delivery/html.php",
                    m3_r = Math.floor(99999999999 * Math.random());
                document.MAX_used || (document.MAX_used = ",");
                var url = m3_u + "?zoneid=" + zone + "&cb=" + m3_r + "&debug=1";
                "," != document.MAX_used && (url += "&exclude=" + document.MAX_used);
                url += document.charset ? "&charset=" + document.charset : document.characterSet ? "&charset=" + document.characterSet : "";
                url += "&loc=" + escape(window.location);
                document.referrer && (url += "&referer=" + escape(document.referrer));
                document.context && (url += "&context=" + escape(document.context));
                document.mmm_fo && (url += "&mmm_fo=1");
                return url
            }

            function load(url) {
                $.ajax({
                    dataType: "html",
                    cache: !1,
                    url: url,
                    crossDomain: !0
                }).done(onLoad).fail(onFail)
            }

            function autorefresh() {
                load(settings.url)
            }

            function destroy() {}

            function onLoad(html, textStatus) {
                if (html) $el.append(html);
                else {
                    var $block = $el.parents(".js-banner-block");
                    $block.length ? $block.remove() : $el.remove()
                }
            }

            function onFail(jqxhr, options, exception) {
                console.log("!!!!!!!! FAIL Banner insert error");
                insertHtml(settings.zone)
            }
            var settings, intervalId, self = this;
            $.extend(self, {
                reinit: function(s) {
                    s = $.extend({}, settings, s);
                    init(s)
                },
                destroy: function() {
                    destroy()
                }
            });
            init(s)
        }
        options = $.extend({}, $.fn.UReviveBanner.defaults, options);
        return this.each(function() {
            var $el = $(this),
                binded = $el.data("UReviveBanner");
            if (binded) binded.reinit(options);
            else {
                binded = new UReviveBanner($el, options);
                $el.data("UReviveBanner", binded)
            }
        })
    };
    $.fn.UReviveBanner.defaults = {
        key: "defaultValue"
    }
}(jQuery, this);
! function($, window, undefined) {
    $.fn.UStayOnTop = function(settings) {
        function scrollMonitor(e) {
            var isFixed = "fixed" == $el.css("position");
            setInitTop();
            var scroll = $w.scrollTop(),
                dataTop = ($w.height(), contBottom - initTop - height - parentPadding),
                offsetTop = opts.offsetTop ? opts.offsetTop : 0,
                marginTop = parseInt($el.css("margin-top"));
            scroll > opts.showOffset && $el.removeClass("hide");
            scroll > top + dataTop ? $el.removeClass(opts.selectorFixedClass).addClass(opts.selectorRelativeClass).css({
                top: dataTop
            }) : initTop - offsetTop - marginTop >= scroll ? $el.removeClass(opts.selectorFixedClass).addClass(opts.selectorRelativeClass).css({
                top: 0
            }) : $el.removeClass(opts.selectorRelativeClass).addClass(opts.selectorFixedClass).css({
                top: offsetTop
            });
            var $fix = $(opts.fixable).not($el).filter(":visible"),
                $over = $el.overlaps($fix);
            if (opts.hideOverlapsed) $over.hide();
            else if (isFixed && $over.length) {
                var overPos = parseInt($over.css("top"));
                offsetTop = overPos + $over.height();
                $el.removeClass(opts.selectorRelativeClass).addClass(opts.selectorFixedClass).css({
                    top: offsetTop
                })
            }
        }
        var initTop, $el = this,
            opts = $.extend({}, $.fn.UStayOnTop.defaults, settings),
            contTop = $(opts.containerSelector).offset().top,
            contHeight = $(opts.containerSelector).height(),
            contBottom = contTop + contHeight,
            $parent = $el.parent(),
            parentPadding = parseInt($parent.css("paddingBottom")),
            height = $el.height(),
            $w = $(window),
            setInitTop = _.once(function() {
                var top, isFixed = "fixed" == $el.css("position");
                if (isFixed) {
                    var t = $el.css("top");
                    $el.removeClass(opts.selectorFixedClass).addClass(opts.selectorRelativeClass).css({
                        top: 0
                    });
                    top = $el.offset().top;
                    console.log("FIXED initTop:", top);
                    initTop = top;
                    $el.removeClass(opts.selectorRelativeClass).addClass(opts.selectorFixedClass).css({
                        top: t
                    })
                } else {
                    top = $el.offset().top;
                    initTop = initTop || top;
                    console.log("NONFIXED initTop:", initTop)
                }
            });
        ! function() {
            $(window).on("scroll", scrollMonitor);
            scrollMonitor()
        }();
        return this
    };
    $.fn.UStayOnTop.defaults = {
        selector: ".blamper-ontop",
        selectorFixedClass: "ar_like_article_fixed",
        selectorRelativeClass: "ar_like_article_relative",
        containerSelector: ".content-container",
        fixable: ".fixable-element",
        offsetTop: 20,
        showOffset: 0,
        hideOverlapsed: !1
    }
}(jQuery, this);
! function($, window, undefined) {
    $.fn.UTagsAdd = function(settings) {
        function createTag(data) {
            var template = _.template(opts.template);
            return $(template(data))
        }

        function getTags() {
            return $wrapper.find(opts.tagSelector)
        }

        function onKeyDown(e) {
            var $th = $(this),
                value = this.value.replace(/(^\s+|\s+$)/g, "");
            value.length > opts.maxLength - 1 && $th.val(value.slice(0, opts.maxLength - 1));
            var keycode = e.keyCode ? e.keyCode : e.which;
            if (8 == keycode && !$th.val()) {
                var $tag = getTags().last();
                removeTag($tag);
                e.preventDefault();
                return !1
            }
        }

        function onKeyPressed(e) {
            var $th = $(this),
                value = this.value.replace(/(^\s+|\s+$)/g, "");
            value.length > opts.maxLength - 1 && $th.val(value.slice(0, opts.maxLength - 1));
            var keycode = e.keyCode ? e.keyCode : e.which;
            if (13 == keycode || 44 == keycode) {
                addTagFromInput(value, $th);
                e.preventDefault();
                return !1
            }
        }

        function addTagFromInput(data, $th) {
            if (data) {
                $wrapper.length ? getTags().length ? createTag(data).insertAfter(getTags().last()) : $wrapper.prepend(createTag(data)) : $th && createTag(data).insertBefore($th);
                $th && $th.val("")
            } else $th && $th.val(data);
            $th && $th.focus()
        }

        function sort(field) {
            field = field || "sort";
            getTags().sort(function(a, b) {
                return +a.getAttribute("data-" + field) - +b.getAttribute("data-" + field)
            }).appendTo($wrapper);
            $wrapper.append($wrapper.find(opts.lastFixed))
        }

        function getTagsWithType(type) {
            return getTags().filter(function() {
                return $(this).data("type") == type || "*" == type
            })
        }

        function removeTagWithType(type) {
            getTags().filter(function() {
                return $(this).data("type") == type
            }).remove()
        }

        function getTagsWithText(text) {
            return getTags().filter(function() {
                return $.trim($(this).find(".js-tag-text").text()) == $.trim(text)
            })
        }

        function removeTagWithText(text) {
            getTags().filter(function() {
                return $.trim($(this).find(".js-tag-text").text()) == $.trim(text)
            }).remove()
        }

        function removeTag($tag) {
            $wrapper.trigger("TagRemoved", $tag.data());
            $tag.remove()
        }

        function onRemoveTag(e) {
            e.preventDefault();
            var $tag = $(e.currentTarget).parents(opts.tagSelector);
            removeTag($tag)
        }

        function destroy() {
            $el.off(".tags", "**")
        }
        if (!this.length) return this;
        var opts = $.extend({}, $.fn.UTagsAdd.defaults, settings),
            $el = this,
            $wrapper = this.find(opts.wrapperSelector);
        $.extend(this, {
            addTag: addTagFromInput,
            removeTagWithText: removeTagWithText,
            removeTagWithType: removeTagWithType,
            getTagsWithText: getTagsWithText,
            getTagsWithType: getTagsWithType,
            sortByData: sort,
            destroy: destroy
        });
        var $tagInput = $el.find(opts.inputSelector);
        $el.on("click.tags", opts.removeSelector, onRemoveTag);
        $el.on("click.tags", function() {
            $tagInput.focus()
        });
        $el.on("keydown.tags", opts.inputSelector, onKeyDown);
        $el.on("keypress.tags", opts.inputSelector, onKeyPressed)
    };
    $.fn.UGetTags = function() {
        var t, tags = [];
        this.find(opts.tagSelector).each(function() {
            t = $("input", this).val();
            tags.push(t.trim())
        });
        return tags
    };
    $.fn.UTagsAdd.defaults = {
        inputSelector: ".js-input-tags",
        wrapperSelector: ".js-tag-list",
        tagSelector: ".js-tag-item",
        lastFixed: ".js-last-fixed",
        removeSelector: ".js-remove-tag",
        maxLength: 40,
        template: '<span class="js-tag-item ar_tag"><%=text%><span class="ar_tag_remove"><i class="ico ico_close_small"></i></span><input type="hidden" name="article_tags" value="<%=text%>" /></span>'
    }
}(jQuery, this);
! function($, window, undefined) {
    $.fn.UTriggerChildModules = function(event, data) {
        this.find("[data-module]").each(function() {
            var instance = $(this).data("moduleInstance");
            instance && _.isFunction(instance.triggerModule) && instance.triggerModule(event, data)
        })
    };
    $.fn.UAppendToWithIndex = function(to, index) {
        !to instanceof jQuery && (to = $(to));
        0 === index ? $(this).prependTo(to) : $(this).insertAfter(to.children().eq(index - 1))
    };
    $.fn.UMoveToIndex = function(i) {
        var $target = this.parent().children().eq(i);
        this.index() > i ? $target.before(this) : $target.after(this);
        return this
    }
}(jQuery, this);
ognyvo.define("utils", ["jquery", "underscore"], function() {});
console.log("DATA.UTILS STARTED >>>>");
String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
});
String.prototype.ltrim || (String.prototype.ltrim = function() {
    return this.replace(/^\s+/, "")
});
String.prototype.rtrim || (String.prototype.rtrim = function() {
    return this.replace(/\s+$/, "")
});
String.prototype.fulltrim || (String.prototype.fulltrim = function() {
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ")
});
Function.prototype.clone = function() {
    var that = this,
        temp = function() {
            return that.apply(this, arguments)
        };
    for (key in this) temp[key] = this[key];
    return temp
};
Array.prototype.indexOf || (Array.prototype.indexOf = function(elt) {
    var len = this.length >>> 0,
        from = Number(arguments[1]) || 0;
    from = 0 > from ? Math.ceil(from) : Math.floor(from);
    0 > from && (from += len);
    for (; len > from; from++)
        if (from in this && this[from] === elt) return from;
    return -1
});
! function($, window, undefined) {
    $.xmlToJson = function(xml) {
        var obj = {};
        if (1 == xml.nodeType) {
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue
                }
            }
        } else 3 == xml.nodeType && (obj = xml.nodeValue);
        if (xml.hasChildNodes())
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i),
                    nodeName = item.nodeName;
                if ("undefined" == typeof obj[nodeName]) obj[nodeName] = $.xmlToJson(item);
                else {
                    if ("undefined" == typeof obj[nodeName].push) {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old)
                    }
                    obj[nodeName].push($.xmlToJson(item))
                }
            }
        return obj
    };
    $.xmlToJsonPlain = function(xml) {
        if (xml) {
            var obj = {};
            1 == xml.nodeType || 3 == xml.nodeType && (obj = xml.nodeValue);
            if (xml.hasChildNodes())
                for (var count = xml.childNodes.length, i = 0; count > i; i++) {
                    var item = xml.childNodes.item(i),
                        nodeName = item.nodeName.toLowerCase();
                    if ("#cdata-section" == nodeName) {
                        obj = item.nodeValue;
                        break
                    }
                    if ("#text" != nodeName)
                        if ("undefined" == typeof obj[nodeName]) obj[nodeName] = $.xmlToJsonPlain(item);
                        else {
                            if ("undefined" == typeof obj[nodeName].push) {
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old)
                            }
                            obj[nodeName].push($.xmlToJsonPlain(item))
                        }
                    else if (1 == count) {
                        obj = item.nodeValue;
                        break
                    }
                }
            return obj
        }
        console.log("!!! ERROR no xml node to parse")
    };
    $.LANG = {
        RUSSIAN: "ru",
        ENGLISH: "en",
        UKRAINIAN: "uk",
        SPANISH: "es"
    };
    $.timestampToString = function(timestamp, lang, template) {
        lang = lang || $.LANG.RUSSIAN;
        var a = new Date(1e3 * timestamp),
            months = [],
            fullMonths = [];
        if (lang == $.LANG.RUSSIAN) {
            months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
            fullMonths = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        } else if (lang == $.LANG.ENGLISH) {
            months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            fullMonths = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "November", "December"]
        }
        var timeString, year = a.getYear(),
            fullYear = a.getFullYear(),
            month = a.getMonth(),
            monthName = months[a.getMonth()],
            fullMonthName = fullMonths[a.getMonth()],
            date = a.getDate(),
            hour = a.getHours(),
            min = a.getMinutes(),
            sec = a.getSeconds(),
            usec = a.getMilliseconds();
        if (template) {
            timeString = template;
            timeString = timeString.replace("u", usec);
            timeString = timeString.replace("s", $.addZeroBefore(sec, 2));
            timeString = timeString.replace("i", $.addZeroBefore(min, 2));
            timeString = timeString.replace("G", hour);
            timeString = timeString.replace("H", $.addZeroBefore(hour, 2));
            timeString = timeString.replace("j", date);
            timeString = timeString.replace("d", $.addZeroBefore(date, 2));
            timeString = timeString.replace("n", month);
            timeString = timeString.replace("m", $.addZeroBefore(month, 2));
            timeString = timeString.replace("M", monthName);
            timeString = timeString.replace("F", fullMonthName);
            timeString = timeString.replace("Y", fullYear);
            timeString = timeString.replace("y", year)
        } else timeString = $.addZeroBefore(date, 2) + "-" + monthName + "-" + year + " " + $.addZeroBefore(hour, 2) + ":" + $.addZeroBefore(min, 2) + ":" + $.addZeroBefore(sec, 2);
        return timeString
    };
    $.addZeroBefore = function(num, length) {
        num += "";
        for (; num.length < length;) num = "0" + num;
        return num
    };
    $.normalizeLinks = function(links) {
        links = _.map(links, function(val) {
            val = val.fulltrim();
            return val.indexOf("http://") < 0 && val.indexOf("https://") < 0 ? "http://" + val : val
        });
        return _.uniq(links)
    };
    $.nl2br = function(str) {
        return str.replace(/([^>])\n/g, "$1<br/>")
    };
    $.stripTags = function(string) {
        if (!string) return "";
        string = string.replace(/<[^>]+?>/gi, " ");
        string = string.replace(/\&nbsp\;/gi, " ");
        string = string.replace(/\000-\0176/gi, " ");
        string = string.replace(/ +/gi, " ");
        return string
    };
    $.stripTagsAndFormat = function(string) {
        if (!string) return "";
        string = string.replace(/<[^>]+?>/gi, " ");
        string = string.replace(/\&nbsp\;/gi, " ");
        string = string.replace(/\000-\0176/gi, " ");
        string = string.replace(/[\r\n ]+/gi, " ");
        return string
    };
    $.linkRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    $.cutText = function(html, max) {
        max || (max = 200);
        if (html.length > max) {
            html = html.substr(0, max - 10);
            html = html.replace(/[^ ]+$/gi, "");
            return html
        }
        return html
    };
    $.replaceLinks = function(text) {
        if (!text) return "";
        var urlRegex = /(https?:\/\/[^\s]+)/g,
            res = text.replace(urlRegex, function(url) {
                return '<a href="/redirect/?url=' + url + '" rel="nofollow" target="_blank">' + url + "</a>"
            });
        return res
    };
    $.extractImagePathFromHash = function(hash, type, width, height, defaultPath) {
        if (!hash) return defaultPath ? defaultPath : "";
        _.isString(hash) || console.log("!!! WARNING: image hash is not string: " + JSON.stringify(hash));
        var src = "/" + ["steady", hash.substr(0, 2), hash.substr(2, 2), hash.substr(4, 2), type, hash].join("/");
        width = parseInt(width);
        height = parseInt(height);
        return width > 0 && height >= 0 ? src + "/" + width + "x" + height + ".jpg" : src + ".jpg"
    };
    $.extractImageHashFromPath = function(url) {
        if (!url) return "";
        if ($.isHash(url)) return url;
        var url = url.indexOf("original") > -1 ? url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf(".")) : url.substring(0, url.lastIndexOf("/")),
            hash = url.substring(url.lastIndexOf("/") + 1);
        return 24 === hash.length ? hash : !1
    };
    $.isHash = function(hash) {
        return 24 === hash.length ? !0 : !1
    };
    $.wordByNumber = function(n, textFormArray) {
        n = Math.abs(n) % 100;
        var n1 = n % 10;
        return n > 10 && 20 > n ? textFormArray[2] : n1 > 1 && 5 > n1 ? textFormArray[1] : 1 == n1 ? textFormArray[0] : textFormArray[2]
    };
    $.decodeHtmlEntity = function(str) {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec)
        })
    };
    $.encodeHtmlEntity = function(str) {
        for (var buf = [], i = str.length - 1; i >= 0; i--) buf.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
        return buf.join("")
    };
    var transliterationMatrix = {
        "А": "A",
        "Б": "B",
        "В": "V",
        "Г": "G",
        "Д": "D",
        "Е": "E",
        "Ж": "J",
        "З": "Z",
        "И": "I",
        "Й": "Y",
        "К": "K",
        "Л": "L",
        "М": "M",
        "Н": "N",
        "О": "O",
        "П": "P",
        "Р": "R",
        "С": "S",
        "Т": "T",
        "У": "U",
        "Ф": "F",
        "Х": "H",
        "Ц": "TS",
        "Ч": "CH",
        "Ш": "SH",
        "Щ": "SCH",
        "Ъ": "",
        "Ы": "YI",
        "Ь": "",
        "Э": "E",
        "Ю": "YU",
        "Я": "YA",
        "а": "a",
        "б": "b",
        "в": "v",
        "г": "g",
        "д": "d",
        "е": "e",
        "ж": "j",
        "з": "z",
        "и": "i",
        "й": "y",
        "к": "k",
        "л": "l",
        "м": "m",
        "н": "n",
        "о": "o",
        "п": "p",
        "р": "r",
        "с": "s",
        "т": "t",
        "у": "u",
        "ф": "f",
        "х": "h",
        "ц": "ts",
        "ч": "ch",
        "ш": "sh",
        "щ": "sch",
        "ъ": "y",
        "ы": "yi",
        "ь": "",
        "э": "e",
        "ю": "yu",
        "я": "ya"
    };
    $.translit = function(string) {
        Modu;
        return string.split("").map(function(char) {
            return transliterationMatrix.hasOwnProperty(char) ? transliterationMatrix[char] : char
        }).join("")
    };
    $.removeBadSymbols = function(text) {
        text = text.replace(/[^\d\w ]+/gi, "");
        text = text.replace(/[\s]+/gi, "-");
        return text.toLowerCase()
    };
    $.translitAndClear = function(string) {
        return $.removeBadSymbols($.translit(string).trim())
    };
    console.log("<<< DATA.UTILS ISOBJECT ", $);
    $.isObject = function(val) {
        return null === val ? !1 : "function" == typeof val || "object" == typeof val
    };
    $.objectToUrlParams = function(obj, prefix) {
        var str = [];
        for (var p in obj) {
            var k = prefix ? prefix + "[" + p + "]" : p,
                v = obj[p];
            str.push("object" == typeof v ? $.objectToUrlParams(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v))
        }
        return str.join("&")
    };
    $.clearHtmlText = function(string) {
        string = string.replace(/<[A-Za-z0-9]+?\:/gi, "<");
        string = string.replace(/(<(?![p\/])[^>]*?>)|(<\/(?!p)[^>]*?>)|(<p[^\ >]+?[^>]*?>)|(<\/p[^\ >]+?[^>]*?>)/gi, "");
        string = string.replace(/(<[^\ >]+)[^>]*?>/gi, "$1>");
        string = string.replace(/\&nbsp\;/gi, " ");
        string = string.replace(/\000-\0176/gi, " ");
        string = string.replace(/[\r\n ]+/gi, " ");
        return string
    };
    $.removeTags = function(string) {
        string = string.replace(/<[^\>]+?>/gi, "");
        return string
    };
    $.generateEmbedVideo = function(link, width, height, $thumb) {
        if (!link) return "";
        width = width || 400;
        height = height || 300;
        return link.replace(/(?:https{0,1}:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^\&]+).*$/g, '<iframe width="' + width + '" height="' + height + '" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>')
    };
    $.generateVideoUrlFromEmbedLink = function(url) {
        return url ? url.replace(/.+?embed\/(.+?)/gi, "www.youtube.com/?watch=$1") : ""
    };
    $.each(["Arguments", "String", "Date", "RegExp"], function(index, name) {
        $["is" + name] = function(obj) {
            return toString.call(obj) == "[object " + name + "]"
        }
    });
    $.isArray = Array.isArray || function(obj) {
            return "[object Array]" == toString.call(obj)
        };
    $.hasKey = function(obj, key) {
        return hasOwnProperty.call(obj, key)
    };
    $.isEmpty = function(obj) {
        if (null == obj) return !0;
        if ($.isArray(obj) || $.isString(obj)) return 0 === obj.length;
        for (var key in obj)
            if ($.hasKey(obj, key)) return !1;
        return !0
    };
    $.extendAndUnion = function(obj, obj2) {
        if (_.isArray(obj) && _.isArray(obj2)) {
            var diff = _(obj).difference(obj2);
            return diff.length ? _.union(obj, obj2) : obj2
        }
        if (!_.isObject(obj) && !_.isObject(obj2) || typeof obj != typeof obj2) return obj2;
        var i, result = {};
        for (i in obj) obj2.hasOwnProperty(i) ? result[i] = $.extendAndUnion(obj[i], obj2[i]) : result[i] = obj[i];
        for (i in obj2) result.hasOwnProperty(i) || (result[i] = obj2[i]);
        return result
    };
    $.constructObjectFromSerializedKeys = function(subkeys, value, oGetVars) {
        var resultObject, nextkey = subkeys.replace(/\[([^\]]*)\].*$/, "$1"),
            subkeys = subkeys.replace(/\[([^\]]*)\]/, "");
        if (subkeys)
            if (nextkey) {
                resultObject = {};
                resultObject[nextkey] = $.constructObjectFromSerializedKeys(subkeys, value, oGetVars)
            } else {
                resultObject = [];
                resultObject.push($.constructObjectFromSerializedKeys(subkeys, value, oGetVars))
            }
        else if (nextkey) {
            resultObject = {};
            resultObject[nextkey] = value
        } else {
            resultObject = [];
            resultObject.push(value)
        }
        return resultObject
    };
    $.getUrlParamsAsObject = function(urlParams) {
        var oGetVars = {},
            processCouple = function(couple, obj) {
                var aItKey = couple.split("="),
                    rawKey = decodeURIComponent(aItKey[0]),
                    value = aItKey.length > 1 ? decodeURIComponent(aItKey[1]) : "";
                if (rawKey.indexOf("[") > -1) {
                    var key = rawKey.replace(/\[.+$/gi, ""),
                        subkeys = rawKey.replace(key, ""),
                        arr = _.clone($.constructObjectFromSerializedKeys(subkeys, value, obj));
                    obj[key] ? $.isArray(obj[key]) ? obj[key] = _.union(obj[key], arr) : obj[key] = $.extendAndUnion(obj[key], arr) : obj[key] = _.clone(arr)
                } else obj[rawKey] = value;
                return obj
            };
        urlParams = urlParams || window.location.search;
        if (urlParams.length > 1) {
            (0 === urlParams.indexOf("?") || 0 === urlParams.indexOf("&")) && urlParams.substr(1);
            for (var nKeyId = 0, aCouples = urlParams.split("&"); nKeyId < aCouples.length; nKeyId++) oGetVars = processCouple(aCouples[nKeyId], oGetVars)
        }
        return oGetVars
    };
    $.getCookies = function() {
        for (var pairs = document.cookie.split(";"), cookies = {}, i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            cookies[pair[0]] = decodeURI(pair[1])
        }
        return cookies
    };
    $.setCookie = function(key, value, options) {
        _.isString(value) || _.isNumber(value) || (value = JSON.stringify(value));
        options = options || {};
        if (!options.expires) {
            options.expires = new Date;
            options.expires.setTime(options.expires.getTime() + 864e5)
        }
        var cook = [key, "=", value, options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("");
        document.cookie = cook
    };
    $.getCookie = function(key) {
        var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
        if (!keyValue) return null;
        keyValue = keyValue[2];
        (keyValue.indexOf("[") > -1 && keyValue.indexOf("]") > -1 || keyValue.indexOf("{") > -1 && keyValue.indexOf("}") > -1) && (keyValue = JSON.parse(keyValue));
        return keyValue
    };
    $.parseUri = function(str) {
        str = str || document.referrer;
        for (var o = $.parseUri.options, m = o.parser[o.strictMode ? "strict" : "loose"].exec(str), uri = {}, i = 14; i--;) uri[o.key[i]] = m[i] || "";
        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
            $1 && (uri[o.q.name][$1] = $2)
        });
        return uri
    };
    $.parseUri.options = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    $.capitalize = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    };
    $.decodeBase64 = function(s) {
        var i, c, x, a, e = {},
            b = 0,
            l = 0,
            r = "",
            w = String.fromCharCode,
            L = s.length,
            A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (i = 0; 64 > i; i++) e[A.charAt(i)] = i;
        for (x = 0; L > x; x++) {
            c = e[s.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            for (; l >= 8;)((a = b >>> (l -= 8) & 255) || L - 2 > x) && (r += w(a))
        }
        return r
    };
    $.B64 = {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        lookup: null,
        ie: /MSIE /.test(navigator.userAgent),
        ieo: /MSIE [67]/.test(navigator.userAgent),
        encode: function(s) {
            var nan0, nan1, nan2, buffer = this.toUtf8(s),
                position = -1,
                len = buffer.length,
                enc = [, , , ];
            if (this.ie) {
                for (var result = []; ++position < len;) {
                    nan0 = buffer[position];
                    nan1 = buffer[++position];
                    enc[0] = nan0 >> 2;
                    enc[1] = (3 & nan0) << 4 | nan1 >> 4;
                    if (isNaN(nan1)) enc[2] = enc[3] = 64;
                    else {
                        nan2 = buffer[++position];
                        enc[2] = (15 & nan1) << 2 | nan2 >> 6;
                        enc[3] = isNaN(nan2) ? 64 : 63 & nan2
                    }
                    result.push(this.alphabet.charAt(enc[0]), this.alphabet.charAt(enc[1]), B64.alphabet.charAt(enc[2]), B64.alphabet.charAt(enc[3]))
                }
                return result.join("")
            }
            for (var result = ""; ++position < len;) {
                nan0 = buffer[position];
                nan1 = buffer[++position];
                enc[0] = nan0 >> 2;
                enc[1] = (3 & nan0) << 4 | nan1 >> 4;
                if (isNaN(nan1)) enc[2] = enc[3] = 64;
                else {
                    nan2 = buffer[++position];
                    enc[2] = (15 & nan1) << 2 | nan2 >> 6;
                    enc[3] = isNaN(nan2) ? 64 : 63 & nan2
                }
                result += this.alphabet[enc[0]] + this.alphabet[enc[1]] + this.alphabet[enc[2]] + B64.alphabet[enc[3]]
            }
            return result
        },
        decode: function(s) {
            if (s.length % 4) throw new Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");
            var buffer = this.fromUtf8(s),
                position = 0,
                len = buffer.length;
            if (this.ieo) {
                for (var result = []; len > position;) buffer[position] < 128 ? result.push(String.fromCharCode(buffer[position++])) : buffer[position] > 191 && buffer[position] < 224 ? result.push(String.fromCharCode((31 & buffer[position++]) << 6 | 63 & buffer[position++])) : result.push(String.fromCharCode((15 & buffer[position++]) << 12 | (63 & buffer[position++]) << 6 | 63 & buffer[position++]));
                return result.join("")
            }
            for (var result = ""; len > position;) result += buffer[position] < 128 ? String.fromCharCode(buffer[position++]) : buffer[position] > 191 && buffer[position] < 224 ? String.fromCharCode((31 & buffer[position++]) << 6 | 63 & buffer[position++]) : String.fromCharCode((15 & buffer[position++]) << 12 | (63 & buffer[position++]) << 6 | 63 & buffer[position++]);
            return result
        },
        toUtf8: function(s) {
            var chr, position = -1,
                len = s.length,
                buffer = [];
            if (/^[\x00-\x7f]*$/.test(s))
                for (; ++position < len;) buffer.push(s.charCodeAt(position));
            else
                for (; ++position < len;) {
                    chr = s.charCodeAt(position);
                    128 > chr ? buffer.push(chr) : 2048 > chr ? buffer.push(chr >> 6 | 192, 63 & chr | 128) : buffer.push(chr >> 12 | 224, chr >> 6 & 63 | 128, 63 & chr | 128)
                }
            return buffer
        },
        fromUtf8: function(s) {
            var len, position = -1,
                buffer = [],
                enc = [, , , ];
            if (!this.lookup) {
                len = this.alphabet.length;
                this.lookup = {};
                for (; ++position < len;) this.lookup[this.alphabet.charAt(position)] = position;
                position = -1
            }
            len = s.length;
            for (; ++position < len;) {
                enc[0] = this.lookup[s.charAt(position)];
                enc[1] = this.lookup[s.charAt(++position)];
                buffer.push(enc[0] << 2 | enc[1] >> 4);
                enc[2] = this.lookup[s.charAt(++position)];
                if (64 == enc[2]) break;
                buffer.push((15 & enc[1]) << 4 | enc[2] >> 2);
                enc[3] = this.lookup[s.charAt(++position)];
                if (64 == enc[3]) break;
                buffer.push((3 & enc[2]) << 6 | enc[3])
            }
            return buffer
        }
    };
    $.deepCompare = function() {
        function compare2Objects(x, y) {
            var p;
            if (isNaN(x) && isNaN(y) && "number" == typeof x && "number" == typeof y) return !0;
            if (x === y) return !0;
            if ("function" == typeof x && "function" == typeof y || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) return x.toString() === y.toString();
            if (!(x instanceof Object && y instanceof Object)) return !1;
            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) return !1;
            if (x.constructor !== y.constructor) return !1;
            if (x.prototype !== y.prototype) return !1;
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) return !1;
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) return !1;
                if (typeof y[p] != typeof x[p]) return !1
            }
            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) return !1;
                if (typeof y[p] != typeof x[p]) return !1;
                switch (typeof x[p]) {
                    case "object":
                    case "function":
                        leftChain.push(x);
                        rightChain.push(y);
                        if (!compare2Objects(x[p], y[p])) return !1;
                        leftChain.pop();
                        rightChain.pop();
                        break;
                    default:
                        if (x[p] !== y[p]) return !1
                }
            }
            return !0
        }
        var leftChain, rightChain;
        if (arguments.length < 1) return !0;
        for (var i = 1, l = arguments.length; l > i; i++) {
            leftChain = [];
            rightChain = [];
            if (!compare2Objects(arguments[0], arguments[i])) return !1
        }
        return !0
    };
    $.hasObject = function() {
        function hasObject(x, y) {
            var p;
            if (isNaN(x) && isNaN(y) && "number" == typeof x && "number" == typeof y) return !0;
            if (x === y) return !0;
            if ("function" == typeof x && "function" == typeof y || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) return x.toString() === y.toString();
            if (!(x instanceof Object && y instanceof Object)) return !1;
            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) return !1;
            if (x.constructor !== y.constructor) return !1;
            if (x.prototype !== y.prototype) return !1;
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) return !1;
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) return !1;
                if (typeof y[p] != typeof x[p]) return !1;
                switch (typeof y[p]) {
                    case "object":
                    case "function":
                        leftChain.push(x);
                        rightChain.push(y);
                        if (!hasObject(x[p], y[p])) return !1;
                        leftChain.pop();
                        rightChain.pop();
                        break;
                    default:
                        if (x[p] !== y[p]) return !1
                }
            }
            return !0
        }
        var leftChain, rightChain;
        if (arguments.length < 1) return !0;
        for (var i = 1, l = arguments.length; l > i; i++) {
            leftChain = [];
            rightChain = [];
            if (!hasObject(arguments[0], arguments[i])) return !1
        }
        return !0
    }
}(jQuery, this);
! function($) {
    $.fn.contextDelete = function(options) {
        var set = {
                obj: $(this),
                menu: !1,
                paste: !1,
                cut: !1,
                copy: !1,
                set: "",
                ie: null
            },
            opts = $.extend({
                contextDelete: function() {},
                paste: function() {},
                cut: function() {},
                copy: function() {},
                allContext: !1
            }, options);
        $(window).bind({
            click: function() {
                set.menu = !1
            },
            keyup: function() {
                set.menu = !1
            }
        });
        set.obj.bind({
            contextmenu: function() {
                set.menu = !0;
                set.paste = !1;
                set.cut = !1;
                set.copy = !1;
                set.val = set.obj.val();
                $.browser.msie && (set.ie = setInterval(function() {
                    set.obj.trigger($.Event("input"));
                    set.menu || clearInterval(set.ie)
                }, 300))
            },
            paste: function(e) {
                set.paste = !0;
                if (opts.allContext) {
                    if (set.menu) {
                        opts.paste(e);
                        set.menu = !1
                    }
                } else opts.paste(e)
            },
            cut: function(e) {
                set.cut = !0;
                if (opts.allContext) {
                    if (set.menu) {
                        opts.cut(e);
                        set.menu = !1
                    }
                } else opts.cut(e)
            },
            copy: function(e) {
                set.copy = !0;
                if (opts.allContext) {
                    if (set.menu) {
                        opts.copy(e);
                        set.menu = !1
                    }
                } else opts.copy(e)
            },
            input: function(e) {
                if (set.menu && !set.paste && !set.cut && !set.copy && set.obj.val().length < set.val.length) {
                    opts.contextDelete(e);
                    set.menu = !1
                }
            }
        })
    }
}(jQuery);
console.log("<<< DATA.UTILS FINISHED", jQuery);
ognyvo.define("data.utils", ["jquery"], function() {});
ognyvo.define("service/DomModulesParser", ["jquery", "underscore", "backbone", "./DynamicModuleManager", "helper/AppConsts", "helper/window", "dom.rules", "jquery.appear", "utils", "data.utils"], function($, _, Backbone, DynamicModuleManager, AppConsts, window, DomRules) {
    "use strict";
    var DomModulesParser = {
        dynamicModuleManager: {},
        started: !1,
        initModulesCount: 0,
        initModulesCountNS: {},
        isDomReady: !1,
        isAppStarted: !1,
        trackingList: {},
        initLoaded: !1,
        initialize: function() {
            var that = this;
            this.dynamicModuleManager = new DynamicModuleManager;
            ognyvo.require(["App"], function(App) {
                that.onAppStarted.call(that);
                App.isDomReady ? that.onDomReady.call(that, App) : App.vent.on("DomReady", that.onDomReady, that)
            })
        },
        startOnce: _.once(function() {
            console.log("#### App START ONCE", this);
            this.start();
            this.parse($(window.document), DomRules);
            this.started = !0
        }),
        start: function() {
            console.log("#### App Parse Body");
            this.dynamicModuleManager.on(DynamicModuleManager.EVENT_ALL_LOADED, this.onDynamicModulesLoaded, this)
        },
        checkAllStarted: function() {
            console.log("#### CHECK All Started: ", " DOMREADY: ", this.isDomReady, " APP STARTED: ", this.isAppStarted);
            this.isDomReady && this.isAppStarted && this.startOnce()
        },
        onAppStarted: function() {
            this.isAppStarted = !0;
            console.log("#### PARSE DOM: App Started");
            this.checkAllStarted()
        },
        onDomReady: function(App) {
            this.isDomReady = !0;
            console.log("#### PARSE DOM: DOM Ready");
            this.parseBody();
            this.checkAllStarted();
            App.vent.trigger(AppConsts.EVENT.SYSTEM.AFTER_DOM_READY, this.isDomReady && this.isAppStarted)
        },
        onDynamicModulesLoaded: function() {
            var pushStateSupported = _.isFunction(history.pushState);
            console.log("@A@ Dynamic Modules Loaded, history api: " + pushStateSupported);
            Backbone.History.started || Backbone.history.start({
                pushState: !1
            });
            console.log("@A@ PAGE: " + Backbone.history.fragment);
            require("App").vent.trigger(AppConsts.EVENT.SYSTEM.ALL_MODULES_LOADED)
        },
        parseBody: function() {
            var $el = $(window.document),
                $w = $el.find("body");
            if ($w.length) {
                var App = require("App");
                App.params = _.extend({
                    side: "client"
                }, $w.data("params") || {});
                var t = _.template.clone(),
                    global = App.params;
                _.template = function(text, data, settings) {
                    if (text) {
                        settings && settings.clear && (text = text.replace(/[\r\n\s]+/gi, " "));
                        data && _.extend(data, {
                            global: global
                        });
                        var temp = t(text, data, settings);
                        return data ? temp : function(data) {
                            _.extend(data, {
                                global: global
                            });
                            return temp(data)
                        }
                    }
                    console.log("!!! WARNING !!! NO TEMPLATE FOR PROCESS")
                }
            }
        },
        parseSelectors: function(data, $el, namespace) {
            var that = this;
            $el || ($el = $(window.document));
            for (var i in data) {
                var $w = $el.find(i).add($el.filter(i));
                console.log("#### PARSE DOM: ", i, $w.length);
                if ("[data-module]" == i)
                    if (namespace) {
                        console.log("#### PARSE DOM CALC MODULES COUNT: ", $w.length, namespace, $el.get(0).tagName, $el.get(0).className, $el);
                        this.initModulesCountNS[namespace] = $w.length
                    } else if ($el.get(0) == window.document) {
                        console.log("#### PARSE DOM CALC NS MODULES COUNT: ", $w.length, namespace, $el.get(0).tagName, $el.get(0).className, $el);
                        this.initModulesCount = $w.length
                    }
                $w.each(function(id, el) {
                    data[i].call(that, id, $(el), $el)
                })
            }
        },
        destroySelectors: function(data, $el, namespace) {
            $el || ($el = $(window.document));
            for (var i in data) {
                var $w = $el.find(i).add($el.filter(i));
                console.log("#### PARSE DOM: ", i, $w.length);
                if ("[data-module]" == i)
                    if (namespace) {
                        console.log("#### PARSE DOM CALC MODULES COUNT: ", $w.length, namespace, $el.get(0).tagName, $el.get(0).className, $el);
                        this.initModulesCountNS[namespace] = $w.length
                    } else if ($el.get(0) == window.document) {
                        console.log("#### PARSE DOM CALC NS MODULES COUNT: ", $w.length, namespace, $el.get(0).tagName, $el.get(0).className, $el);
                        this.initModulesCount = $w.length
                    }
                $w.each(data[i])
            }
        },
        destroy: function($el) {
            var destroyHandlers = (require("App"), $(window), {
                ".js-scrollable": function() {
                    var instance = $(this).data("instance");
                    instance && instance.destroy()
                },
                "[data-module]": function() {
                    var module = $(this).data("module-instance");
                    if (module) {
                        $(this).trigger("DestroyModule", this);
                        module.destroy()
                    }
                }
            });
            this.destroySelectors(destroyHandlers, $el)
        },
        onAppear: function(e) {
            var $el = $(e.currentTarget),
                params = $el.data("statistic-params") || {},
                id = $el.data("statistic-object-id");
            if (!$el.data("showed")) {
                require("App").groupServerApiCall("/landing/view/", _.extend(params, {
                    id: id
                }));
                $el.attr("data-showed", !0);
                $el.off("appear", DomModulesParser.onAppear)
            }
        },
        parse: function($baseElement, selectorHandlers, namespace) {
            console.log("#### PARSE DOM: Parse Dom Modules", namespace, $baseElement);
            $baseElement = $baseElement || $(window.document);
            var $w, stime = Date.now(),
                that = this,
                App = require("App");
            $(window);
            this.trackingList = {};
            var handlers = _.extend({
                "[data-lzhtml]": function(id, $this) {
                    var lz = $this.data("lzhtml"),
                        html = $.B64.decode(lz),
                        $insert = $(html);
                    $this.replaceWith($insert);
                    $this.parents("[data-module]").trigger("DomUpdated", $this);
                    _.defer(function() {
                        $w = $insert.find("[data-lzhtml]");
                        $w.length && that.parse.call(that, $w)
                    })
                },
                "[data-module]": function(id, $this) {
                    var modulePath = $this.data("module"),
                        params = $this.data("params");
                    !$ || !$.isObject;
                    if (!$.isObject(params)) {
                        console.log("!!!--- WARNING: data-params for module [" + modulePath + "] is not an object", params);
                        params = {}
                    }
                    var imports = $this.data("imports"),
                        moduleNamespace = $this.data("namespace") || namespace,
                        modules = [modulePath];
                    imports && modules.push("module/" + imports);
                    that.dynamicModuleManager.addToLoadStack(modules);
                    console.log("@@MODULE REQUIRE: " + modules[0], moduleNamespace);
                    require(modules, function(View, imports) {
                        params.el = $this.get(0);
                        params.$el = $this;
                        void 0 !== moduleNamespace && (params.eventNamespace = moduleNamespace);
                        var view = new View(params);
                        that.dynamicModuleManager.markLoaded(modules);
                        console.log("@@MODULE LOADED: " + modules[0], moduleNamespace, view.cid, view);
                        that.calcLoadedModule.call(that, modules[0], moduleNamespace);
                        $this.data("moduleInstance", view);
                        return view
                    }, function(err) {
                        var mess = "@@MODULE NOT LOADED !!!!: " + modules[0] + ", error: " + (err ? err.message : "");
                        console.log("!!! ERROR: ", mess, moduleNamespace);
                        that.calcNotLoadedModule.call(that, modules[0], moduleNamespace);
                        that.dynamicModuleManager.markNotLoaded(modules)
                    })
                },
                select: function(id, $el) {
                    var val = $el.val(),
                        $def = $el.find("option[value=0]");
                    $def.attr("selected") && $def.attr("selected", "selected");
                    val && "0" != val ? $el.USelectorSelected() : $el.USelectorReset();
                    $el.on("change", function(e) {
                        var $el = $(e.currentTarget),
                            val = $el.val();
                        val && "0" != val ? $el.USelectorSelected() : $el.USelectorReset()
                    }).on("focus", function(e) {
                        var $el = $(e.currentTarget);
                        $el.USelectorActive()
                    }).on("blur", function(e) {
                        var $el = $(e.currentTarget);
                        $el.USelectorInactive()
                    })
                },
                input: function(id, $el) {
                    var focusClass = $el.data("focus-class"),
                        targetSelector = $el.data("focus-target");
                    if (focusClass) {
                        if (focusClass.indexOf(":") > -1) {
                            focusClass = focusClass.split(":");
                            targetSelector = focusClass[0];
                            focusClass = focusClass[1]
                        }
                        $el.on("focus", function(e) {
                            console.log("SEARCH FOCUS");
                            $(targetSelector ? targetSelector : this).addClass(focusClass)
                        }).on("blur", function(e) {
                            console.log("SEARCH BLUR");
                            $(targetSelector ? targetSelector : this).removeClass(focusClass)
                        })
                    }
                },
                ".js-scrollable": function(id, $this) {
                    var el = $this.get(0);
                    ognyvo.require(["view/common/ScrollableView"], function(ScrollableView) {
                        $(el).data("instance", new ScrollableView({
                            el: el
                        }))
                    })
                },
                ".js-insertable": function(id, $this) {
                    var url = $this.data("url"),
                        params = $this.data("params"),
                        loader = $this.data("loader-class");
                    $this.addClass(loader);
                    $.get(url, params || {}, function(data) {
                        $this.removeClass(loader);
                        var $html = $(data);
                        $this.html($html);
                        that.parse($html)
                    })
                },
                ".js-link-insertable": function(id, $this) {
                    $this.click(function(e) {
                        e.preventDefault();
                        var $into = $($this.data("into")),
                            url = $this.data("href") || $this.prop("href"),
                            params = $this.data("params"),
                            loader = $this.data("loader-class");
                        $into.addClass(loader);
                        $.get(url, params || {}, function(data) {
                            $into.removeClass(loader);
                            $into.html(data)
                        })
                    })
                },
                "select[data-parent-field]": function(id, $el) {
                    var $parent = $("[data-field=" + $el.data("parent-field") + "]"),
                        template = (_.template($el.data("url-template")), _.template($($el.data("template-selector")).text()));
                    $parent.on("change", function(id, el) {
                        var $p = $(this),
                            val = $p.val(),
                            url = url({
                                parent_value: val
                            });
                        $.ajax(url, {
                            dataType: "json",
                            complete: function(data) {
                                var options = template({
                                    items: data.response
                                });
                                $el.html(options)
                            },
                            error: function() {}
                        })
                    })
                },
                "[data-tab]": function(id, $el) {
                    var $tabs = $el.find(".b-tabs-item"),
                        $content = $("[data-content-for-tab=" + $el.data("tab") + "] [data-tab-content]");
                    $tabs.find("a").click(function(e) {
                        e.preventDefault()
                    });
                    $tabs.click(function(e) {
                        e.preventDefault();
                        var $tab = $(this);
                        $tabs.removeClass("b-tabs-item__current");
                        $content.addClass("hide");
                        $tab.addClass("b-tabs-item__current");
                        $content.filter("[data-tab-content=" + $tab.data("target") + "]").removeClass("hide")
                    })
                },
                "[data-href]": function(id, $el) {
                    var href = $el.data("href"),
                        target = $el.data("target");
                    if ("a" == $el.prop("tagName").toLowerCase()) {
                        $el.attr("href", href);
                        target && $el.prop("target", target)
                    } else {
                        $el.css("cursor", "pointer");
                        target ? $el.html('<a target="_blank" href="' + href + '">' + $el.html() + "</a>") : $el.click(function(e) {
                            require("App").redirect(href)
                        })
                    }
                },
                ".js-slider-fotorama": function(id, $el) {
                    var $el = $el;
                    ognyvo.require(["fotorama"], function() {
                        $el.fotorama();
                        $el.find("a").click(function(e) {
                            e.preventDefault()
                        })
                    })
                },
                ".js-clickable-block": function(id, $el) {
                    var $a = $el.find("a"),
                        href = $el.data("href") || $el.attr("href") || $a.data("href") || $a.attr("href"),
                        statId = $el.attr("data-statistic-object-id") ? $el.data("statistic-object-id") : $el.find("[data-statistic-object-id]").data("statistic-object-id"),
                        params = $el.data("statistic-params") || {};
                    $a.attr("href", href);
                    console.log("...... ++ js-clickable-block: ", statId);
                    $el.off("click.block");
                    $el.on("click.block", function(e) {
                        e.preventDefault();
                        console.log("...... .js-clickable-block click");
                        statId && App.callServerApi("/api/statistic/click", _.extend(params, {
                            object_ids: [statId],
                            count: 1
                        }));
                        $($a.get(0)).trigger("BlockClicked", $el, href);
                        App.redirect(href, null, null, null, 500)
                    })
                },
                ".js-show-popup-on-click": function(id, $el, $global) {
                    $el.off("click.popup");
                    $el.on("click.popup", function(e) {
                        var path = $el.data("popup"),
                            instance = $global.find('[data-module="' + path + '"]').data("moduleInstance");
                        instance && instance.show()
                    })
                },
                ".js-revive": function(id, $el) {
                    $el.data("params")
                },
                ".js-revive-dynamic": function(id, $el) {
                    $el.UReviveBanner()
                },
                "[data-statistic-object-id]": function(id, $el) {
                    $el.data("statistic-object-id");
                    $el.appear();
                    $el.on("appear", DomModulesParser.onAppear);
                    $el.is(":appeared") && DomModulesParser.onAppear.call($el, {
                        currentTarget: $el.get(0)
                    })
                },
                ".js-analytics": function(id, $this) {
                    var id = $this.attr("data-id"),
                        tracking = $this.data("tracking");
                    if (tracking && !that.trackingList[id]) {
                        that.trackingList[id] = tracking;
                        var event = $this.data("start-event");
                        event ? App.vent.on(event, function() {
                            App.sendAnalytics(tracking)
                        }) : App.sendAnalytics(tracking)
                    }
                },
                ".js-analytics-link": function(id, $this) {
                    var tracking = $this.data("tracking");
                    $this.on("click", function(e) {
                        !that.sendAnalytics(tracking, $this) || e.preventDefault()
                    })
                },
                ".js-analytics-inner-links": function(id, $this) {
                    var $a = $("a", $this),
                        tracking = $this.data("tracking");
                    $a.not("[data-no-tracking]").on("click", function(e) {
                        var $el = $(e.currentTarget),
                            elTrack = $el.data("tracking"),
                            elAddTrack = $el.data("add-tracking");
                        elAddTrack && App.sendAnalytics(elAddTrack);
                        !that.sendAnalytics(elTrack || tracking, $el) || e.preventDefault()
                    })
                }
            }, selectorHandlers);
            this.parseSelectors(handlers, $baseElement, namespace);
            console.log("parse time: " + (Date.now() - stime) + " ms")
        },
        sendAnalytics: function(tracking, $el) {
            var url = $el.data("href") || $el.attr("href");
            if (url && url.replace(/\#.*?$/, "") != window.location.pathname + window.location.search) {
                $el.UShowPreloader();
                App.sendAnalyticsWithRedirect(tracking, url);
                return !0
            }
            App.sendAnalytics(tracking);
            if ("submit" == $el.attr("type")) {
                setTimeout(function() {
                    $el.parents("form").submit()
                }, 500);
                return !0
            }
            return !1
        },
        sendAllLoaded: function(namespace) {
            if (!this.initLoaded) {
                if (namespace) {
                    console.log("~!@$ CALC INIT NS MODULES LOADED: " + this.initModulesCountNS[namespace], namespace);
                    require("App").sendNSEvent(namespace, AppConsts.EVENT.SYSTEM.INIT_MODULES_LOADED)
                } else {
                    console.log("~!@$ CALC INIT MODULES LOADED: " + this.initModulesCount);
                    require("App").vent.trigger(AppConsts.EVENT.SYSTEM.INIT_MODULES_LOADED)
                }
                this.initLoaded = !0
            }
            if (namespace) {
                console.log("~!@# CALC ALL NS MODULES LOADED: " + this.initModulesCountNS[namespace], namespace);
                require("App").sendNSEvent(namespace, AppConsts.EVENT.SYSTEM.MODULES_LOADED)
            } else {
                console.log("~!@# CALC ALL MODULES LOADED: " + this.initModulesCount);
                require("App").vent.trigger(AppConsts.EVENT.SYSTEM.MODULES_LOADED)
            }
        },
        calcLoadedModule: function(module, namespace) {
            if (namespace) {
                this.initModulesCountNS[namespace]--;
                console.log("~!@% CALC LOADED NS MODULES: " + this.initModulesCountNS[namespace], module);
                0 == this.initModulesCountNS[namespace] && this.sendAllLoaded(namespace)
            } else {
                this.initModulesCount--;
                console.log("~!@% CALC LOADED MODULES: " + this.initModulesCount, module);
                0 == this.initModulesCount && this.sendAllLoaded()
            }
        },
        calcNotLoadedModule: function(module, namespace) {
            if (namespace) {
                this.initModulesCountNS[namespace]--;
                console.log("~!@^ CALC NOT LOADED NS MODULES: " + this.initModulesCountNS[namespace], module);
                0 == this.initModulesCountNS[namespace] && this.sendAllLoaded(namespace)
            } else {
                this.initModulesCount--;
                console.log("~!@^ CALC NOT LOADED MODULES: " + this.initModulesCount, module);
                0 == this.initModulesCount && this.sendAllLoaded(namespace)
            }
        }
    };
    return DomModulesParser
});
var Twig = function(Twig) {
        Twig.VERSION = "0.7.2";
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        "use strict";

        function is(type, obj) {
            var clas = Object.prototype.toString.call(obj).slice(8, -1);
            return void 0 !== obj && null !== obj && clas === type
        }

        function relativePath(template, file) {
            var base, base_path, val, sep_chr = "/",
                new_path = [];
            if (template.url) base = "undefined" != typeof template.base ? template.base + ("/" === template.base.charAt(template.base.length - 1) ? "" : "/") : template.url;
            else {
                if (!template.path) throw new Twig.Error("Cannot extend an inline template.");
                var path = require("path"),
                    sep = path.sep || sep_chr,
                    relative = new RegExp("^\\.{1,2}" + sep.replace("\\", "\\\\"));
                file = file.replace(/\//g, sep);
                if (void 0 !== template.base && null == file.match(relative)) {
                    file = file.replace(template.base, "");
                    base = template.base + sep
                } else base = template.path;
                base = base.replace(sep + sep, sep);
                sep_chr = sep
            }
            base_path = base.split(sep_chr);
            base_path.pop();
            base_path = base_path.concat(file.split(sep_chr));
            for (; base_path.length > 0;) {
                val = base_path.shift();
                "." == val || (".." == val && new_path.length > 0 && ".." != new_path[new_path.length - 1] ? new_path.pop() : new_path.push(val))
            }
            return new_path.join(sep_chr)
        }
        Twig.trace = !1;
        Twig.debug = !1;
        Twig.cache = !0;
        Twig.placeholders = {
            parent: "{{|PARENT|}}"
        };
        Twig.indexOf = function(arr, searchElement) {
            if (Array.prototype.hasOwnProperty("indexOf")) return arr.indexOf(searchElement);
            if (void 0 === arr || null === arr) throw new TypeError;
            var t = Object(arr),
                len = t.length >>> 0;
            if (0 === len) return -1;
            var n = 0;
            if (arguments.length > 0) {
                n = Number(arguments[1]);
                n !== n ? n = 0 : 0 !== n && n !== 1 / 0 && n !== -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))
            }
            if (n >= len) return -1;
            for (var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); len > k; k++)
                if (k in t && t[k] === searchElement) return k;
            return arr == searchElement ? 0 : -1
        };
        Twig.forEach = function(arr, callback, thisArg) {
            if (Array.prototype.forEach) return arr.forEach(callback, thisArg);
            var T, k;
            if (null == arr) throw new TypeError(" this is null or not defined");
            var O = Object(arr),
                len = O.length >>> 0;
            if ("[object Function]" != {}.toString.call(callback)) throw new TypeError(callback + " is not a function");
            thisArg && (T = thisArg);
            k = 0;
            for (; len > k;) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O)
                }
                k++
            }
        };
        Twig.Error = function(message) {
            this.message = message;
            this.name = "TwigException";
            this.type = "TwigException"
        };
        Twig.Error.prototype.toString = function() {
            var output = this.name + ": " + this.message;
            return output
        };
        Twig.log = {
            trace: function() {
                Twig.trace && console && console.log(Array.prototype.slice.call(arguments))
            },
            debug: function() {
                Twig.debug && console && console.log(Array.prototype.slice.call(arguments))
            }
        };
        "undefined" != typeof console ? "undefined" != typeof console.error ? Twig.log.error = function() {
            console.error.apply(console, arguments)
        } : "undefined" != typeof console.log && (Twig.log.error = function() {
            console.log.apply(console, arguments)
        }) : Twig.log.error = function() {};
        Twig.token = {};
        Twig.token.type = {
            output: "output",
            logic: "logic",
            comment: "comment",
            raw: "raw"
        };
        Twig.token.definitions = [{
            type: Twig.token.type.raw,
            open: "{% raw %}",
            close: "{% endraw %}"
        }, {
            type: Twig.token.type.output,
            open: "{{",
            close: "}}"
        }, {
            type: Twig.token.type.logic,
            open: "{%",
            close: "%}"
        }, {
            type: Twig.token.type.comment,
            open: "{#",
            close: "#}"
        }];
        Twig.token.strings = ['"', "'"];
        Twig.token.findStart = function(template) {
            var i, token_template, first_key_position, output = {
                position: null,
                def: null
            };
            for (i = 0; i < Twig.token.definitions.length; i++) {
                token_template = Twig.token.definitions[i];
                first_key_position = template.indexOf(token_template.open);
                Twig.log.trace("Twig.token.findStart: ", "Searching for ", token_template.open, " found at ", first_key_position);
                if (first_key_position >= 0 && (null === output.position || first_key_position < output.position)) {
                    output.position = first_key_position;
                    output.def = token_template
                }
            }
            return output
        };
        Twig.token.findEnd = function(template, token_def, start) {
            for (var i, l, end = null, found = !1, offset = 0, str_pos = null, str_found = null, pos = null, end_offset = null, this_str_pos = null, end_str_pos = null; !found;) {
                str_pos = null;
                str_found = null;
                pos = template.indexOf(token_def.close, offset);
                if (!(pos >= 0)) throw new Twig.Error("Unable to find closing bracket '" + token_def.close + "' opened near template position " + start);
                end = pos;
                found = !0;
                if (token_def.type === Twig.token.type.comment) break;
                l = Twig.token.strings.length;
                for (i = 0; l > i; i += 1) {
                    this_str_pos = template.indexOf(Twig.token.strings[i], offset);
                    if (this_str_pos > 0 && pos > this_str_pos && (null === str_pos || str_pos > this_str_pos)) {
                        str_pos = this_str_pos;
                        str_found = Twig.token.strings[i]
                    }
                }
                if (null !== str_pos) {
                    end_offset = str_pos + 1;
                    end = null;
                    found = !1;
                    for (;;) {
                        end_str_pos = template.indexOf(str_found, end_offset);
                        if (0 > end_str_pos) throw "Unclosed string in template";
                        if ("\\" !== template.substr(end_str_pos - 1, 1)) {
                            offset = end_str_pos + 1;
                            break
                        }
                        end_offset = end_str_pos + 1
                    }
                }
            }
            return end
        };
        Twig.tokenize = function(template) {
            for (var tokens = [], error_offset = 0, found_token = null, end = null; template.length > 0;) {
                found_token = Twig.token.findStart(template);
                Twig.log.trace("Twig.tokenize: ", "Found token: ", found_token);
                if (null !== found_token.position) {
                    found_token.position > 0 && tokens.push({
                        type: Twig.token.type.raw,
                        value: template.substring(0, found_token.position)
                    });
                    template = template.substr(found_token.position + found_token.def.open.length);
                    error_offset += found_token.position + found_token.def.open.length;
                    end = Twig.token.findEnd(template, found_token.def, error_offset);
                    Twig.log.trace("Twig.tokenize: ", "Token ends at ", end);
                    tokens.push({
                        type: found_token.def.type,
                        value: template.substring(0, end).trim()
                    });
                    "logic" === found_token.def.type && "\n" === template.substr(end + found_token.def.close.length, 1) && (end += 1);
                    template = template.substr(end + found_token.def.close.length);
                    error_offset += end + found_token.def.close.length
                } else {
                    tokens.push({
                        type: Twig.token.type.raw,
                        value: template
                    });
                    template = ""
                }
            }
            return tokens
        };
        Twig.compile = function(tokens) {
            try {
                for (var output = [], stack = [], intermediate_output = [], token = null, logic_token = null, unclosed_token = null, prev_token = null, prev_template = null, tok_output = null, type = null, open = null, next = null; tokens.length > 0;) {
                    token = tokens.shift();
                    Twig.log.trace("Compiling token ", token);
                    switch (token.type) {
                        case Twig.token.type.raw:
                            stack.length > 0 ? intermediate_output.push(token) : output.push(token);
                            break;
                        case Twig.token.type.logic:
                            logic_token = Twig.logic.compile.apply(this, [token]);
                            type = logic_token.type;
                            open = Twig.logic.handler[type].open;
                            next = Twig.logic.handler[type].next;
                            Twig.log.trace("Twig.compile: ", "Compiled logic token to ", logic_token, " next is: ", next, " open is : ", open);
                            if (void 0 !== open && !open) {
                                prev_token = stack.pop();
                                prev_template = Twig.logic.handler[prev_token.type];
                                if (Twig.indexOf(prev_template.next, type) < 0) throw new Error(type + " not expected after a " + prev_token.type);
                                prev_token.output = prev_token.output || [];
                                prev_token.output = prev_token.output.concat(intermediate_output);
                                intermediate_output = [];
                                tok_output = {
                                    type: Twig.token.type.logic,
                                    token: prev_token
                                };
                                stack.length > 0 ? intermediate_output.push(tok_output) : output.push(tok_output)
                            }
                            if (void 0 !== next && next.length > 0) {
                                Twig.log.trace("Twig.compile: ", "Pushing ", logic_token, " to logic stack.");
                                if (stack.length > 0) {
                                    prev_token = stack.pop();
                                    prev_token.output = prev_token.output || [];
                                    prev_token.output = prev_token.output.concat(intermediate_output);
                                    stack.push(prev_token);
                                    intermediate_output = []
                                }
                                stack.push(logic_token)
                            } else if (void 0 !== open && open) {
                                tok_output = {
                                    type: Twig.token.type.logic,
                                    token: logic_token
                                };
                                stack.length > 0 ? intermediate_output.push(tok_output) : output.push(tok_output)
                            }
                            break;
                        case Twig.token.type.comment:
                            break;
                        case Twig.token.type.output:
                            Twig.expression.compile.apply(this, [token]);
                            stack.length > 0 ? intermediate_output.push(token) : output.push(token)
                    }
                    Twig.log.trace("Twig.compile: ", " Output: ", output, " Logic Stack: ", stack, " Pending Output: ", intermediate_output)
                }
                if (stack.length > 0) {
                    unclosed_token = stack.pop();
                    throw new Error("Unable to find an end tag for " + unclosed_token.type + ", expecting one of " + unclosed_token.next)
                }
                return output
            } catch (ex) {
                Twig.log.error("Error compiling twig template " + this.id + ": ");
                ex.stack ? Twig.log.error(ex.stack) : Twig.log.error(ex.toString());
                if (this.options.rethrow) throw ex
            }
        };
        Twig.parse = function(tokens, context) {
            try {
                var output = [],
                    chain = !0,
                    that = this;
                context = context || {};
                Twig.forEach(tokens, function(token) {
                    Twig.log.debug("Twig.parse: ", "Parsing token: ", token);
                    switch (token.type) {
                        case Twig.token.type.raw:
                            output.push(Twig.filters.raw(token.value));
                            break;
                        case Twig.token.type.logic:
                            var logic_token = token.token,
                                logic = Twig.logic.parse.apply(that, [logic_token, context, chain]);
                            void 0 !== logic.chain && (chain = logic.chain);
                            void 0 !== logic.context && (context = logic.context);
                            void 0 !== logic.output && output.push(logic.output);
                            break;
                        case Twig.token.type.comment:
                            break;
                        case Twig.token.type.output:
                            Twig.log.debug("Twig.parse: ", "Output token: ", token.stack);
                            output.push(Twig.expression.parse.apply(that, [token.stack, context]))
                    }
                });
                return Twig.output.apply(this, [output])
            } catch (ex) {
                Twig.log.error("Error parsing twig template " + this.id + ": ");
                ex.stack ? Twig.log.error(ex.stack) : Twig.log.error(ex.toString());
                if (this.options.rethrow) throw ex;
                if (Twig.debug) return ex.toString()
            }
        };
        Twig.prepare = function(data) {
            var tokens, raw_tokens;
            Twig.log.debug("Twig.prepare: ", "Tokenizing ", data);
            raw_tokens = Twig.tokenize.apply(this, [data]);
            Twig.log.debug("Twig.prepare: ", "Compiling ", raw_tokens);
            tokens = Twig.compile.apply(this, [raw_tokens]);
            Twig.log.debug("Twig.prepare: ", "Compiled ", tokens);
            return tokens
        };
        Twig.output = function(output) {
            if (!this.options.autoescape) return output.join("");
            var escaped_output = [];
            Twig.forEach(output, function(str) {
                str && !str.twig_markup && (str = Twig.filters.escape(str));
                escaped_output.push(str)
            });
            return Twig.Markup(escaped_output.join(""))
        };
        Twig.Templates = {
            registry: {}
        };
        Twig.validateId = function(id) {
            if ("prototype" === id) throw new Twig.Error(id + " is not a valid twig identifier");
            if (Twig.Templates.registry.hasOwnProperty(id)) throw new Twig.Error("There is already a template with the ID " + id);
            return !0
        };
        Twig.Templates.save = function(template) {
            if (void 0 === template.id) throw new Twig.Error("Unable to save template with no id");
            Twig.Templates.registry[template.id] = template
        };
        Twig.Templates.load = function(id) {
            return Twig.Templates.registry.hasOwnProperty(id) ? Twig.Templates.registry[id] : null
        };
        Twig.Templates.loadRemote = function(location, params, callback, error_callback) {
            var id = params.id,
                method = params.method,
                async = params.async,
                precompiled = params.precompiled,
                template = null;
            void 0 === async && (async = !0);
            void 0 === id && (id = location);
            params.id = id;
            if (Twig.cache && Twig.Templates.registry.hasOwnProperty(id)) {
                callback && callback(Twig.Templates.registry[id]);
                return Twig.Templates.registry[id]
            }
            if ("ajax" == method) {
                if ("undefined" == typeof XMLHttpRequest) throw new Twig.Error("Unsupported platform: Unable to do remote requests because there is no XMLHTTPRequest implementation");
                var xmlhttp = new XMLHttpRequest;
                xmlhttp.onreadystatechange = function() {
                    var data = null;
                    if (4 == xmlhttp.readyState)
                        if (200 == xmlhttp.status) {
                            Twig.log.debug("Got template ", xmlhttp.responseText);
                            data = precompiled === !0 ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText;
                            params.url = location;
                            params.data = data;
                            template = new Twig.Template(params);
                            callback && callback(template)
                        } else error_callback && error_callback(xmlhttp)
                };
                xmlhttp.open("GET", location, async);
                xmlhttp.send()
            } else ! function() {
                var fs = require("fs"),
                    data = (require("path"), null),
                    loadTemplateFn = function(err, data) {
                        if (err) error_callback && error_callback(err);
                        else {
                            precompiled === !0 && (data = JSON.parse(data));
                            params.data = data;
                            params.path = location;
                            template = new Twig.Template(params);
                            callback && callback(template)
                        }
                    };
                if (async === !0) fs.stat(location, function(err, stats) {
                    if (err || !stats.isFile()) throw new Twig.Error("Unable to find template file " + location);
                    fs.readFile(location, "utf8", loadTemplateFn)
                });
                else {
                    if (!fs.statSync(location).isFile()) throw new Twig.Error("Unable to find template file " + location);
                    data = fs.readFileSync(location, "utf8");
                    loadTemplateFn(void 0, data)
                }
            }();
            return async === !1 ? template : !0
        };
        Twig.Template = function(params) {
            var data = params.data,
                id = params.id,
                blocks = params.blocks,
                macros = params.macros || {},
                base = params.base,
                path = params.path,
                url = params.url,
                options = params.options;
            this.id = id;
            this.base = base;
            this.path = path;
            this.url = url;
            this.macros = macros;
            this.options = options;
            this.reset(blocks);
            is("String", data) ? this.tokens = Twig.prepare.apply(this, [data]) : this.tokens = data;
            void 0 !== id && Twig.Templates.save(this)
        };
        Twig.Template.prototype.reset = function(blocks) {
            Twig.log.debug("Twig.Template.reset", "Reseting template " + this.id);
            this.blocks = {};
            this.importedBlocks = [];
            this.child = {
                blocks: blocks || {}
            };
            this.extend = null
        };
        Twig.Template.prototype.render = function(context, params) {
            params = params || {};
            var output, url;
            this.context = context || {};
            this.reset();
            params.blocks && (this.blocks = params.blocks);
            params.macros && (this.macros = params.macros);
            output = Twig.parse.apply(this, [this.tokens, this.context]);
            if (this.extend) {
                var ext_template;
                if (this.options.allowInlineIncludes) {
                    ext_template = Twig.Templates.load(this.extend);
                    ext_template && (ext_template.options = this.options)
                }
                if (!ext_template) {
                    url = relativePath(this, this.extend);
                    ext_template = Twig.Templates.loadRemote(url, {
                        method: this.url ? "ajax" : "fs",
                        base: this.base,
                        async: !1,
                        id: url,
                        options: this.options
                    })
                }
                this.parent = ext_template;
                return this.parent.render(this.context, {
                    blocks: this.blocks
                })
            }
            return "blocks" == params.output ? this.blocks : "macros" == params.output ? this.macros : output
        };
        Twig.Template.prototype.importFile = function(file) {
            var url, sub_template;
            if (!this.url && !this.path && this.options.allowInlineIncludes) {
                sub_template = Twig.Templates.load(file);
                if (!sub_template) throw new Twig.Error("No template loaded from file: " + file);
                sub_template.parentId = this.id;
                sub_template.rootId = this.parentId || this.id;
                sub_template.options = this.options;
                if (sub_template) return sub_template;
                throw new Twig.Error("Didn't find the inline template by id")
            }
            url = relativePath(this, file);
            sub_template = Twig.Templates.loadRemote(url, {
                method: this.url ? "ajax" : "fs",
                base: this.base,
                async: !1,
                options: this.options,
                id: url
            });
            return sub_template
        };
        Twig.Template.prototype.importBlocks = function(file, override) {
            var sub_template = this.importFile(file),
                context = this.context,
                that = this;
            override = override || !1;
            sub_template.render(context);
            Twig.forEach(Object.keys(sub_template.blocks), function(key) {
                if (override || void 0 === that.blocks[key]) {
                    that.blocks[key] = sub_template.blocks[key];
                    that.importedBlocks.push(key)
                }
            })
        };
        Twig.Template.prototype.compile = function(options) {
            return Twig.compiler.compile(this, options)
        };
        Twig.Markup = function(content) {
            if ("string" == typeof content && content.length > 0) {
                content = new String(content);
                content.twig_markup = !0
            }
            return content
        };
        return Twig
    }(Twig || {});
! function() {
    "use strict";
    String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    });
    Object.keys || (Object.keys = function(o) {
        if (o !== Object(o)) throw new TypeError("Object.keys called on non-object");
        var p, ret = [];
        for (p in o) Object.prototype.hasOwnProperty.call(o, p) && ret.push(p);
        return ret
    })
}();
var Twig = function(Twig) {
        Twig.lib = {};
        var sprintf = function() {
                function get_type(variable) {
                    return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
                }

                function str_repeat(input, multiplier) {
                    for (var output = []; multiplier > 0; output[--multiplier] = input);
                    return output.join("")
                }
                var str_format = function() {
                    str_format.cache.hasOwnProperty(arguments[0]) || (str_format.cache[arguments[0]] = str_format.parse(arguments[0]));
                    return str_format.format.call(null, str_format.cache[arguments[0]], arguments)
                };
                str_format.format = function(parse_tree, argv) {
                    var arg, i, k, match, pad, pad_character, pad_length, cursor = 1,
                        tree_length = parse_tree.length,
                        node_type = "",
                        output = [];
                    for (i = 0; tree_length > i; i++) {
                        node_type = get_type(parse_tree[i]);
                        if ("string" === node_type) output.push(parse_tree[i]);
                        else if ("array" === node_type) {
                            match = parse_tree[i];
                            if (match[2]) {
                                arg = argv[cursor];
                                for (k = 0; k < match[2].length; k++) {
                                    if (!arg.hasOwnProperty(match[2][k])) throw sprintf('[sprintf] property "%s" does not exist', match[2][k]);
                                    arg = arg[match[2][k]]
                                }
                            } else arg = match[1] ? argv[match[1]] : argv[cursor++];
                            if (/[^s]/.test(match[8]) && "number" != get_type(arg)) throw sprintf("[sprintf] expecting number but found %s", get_type(arg));
                            switch (match[8]) {
                                case "b":
                                    arg = arg.toString(2);
                                    break;
                                case "c":
                                    arg = String.fromCharCode(arg);
                                    break;
                                case "d":
                                    arg = parseInt(arg, 10);
                                    break;
                                case "e":
                                    arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                                    break;
                                case "f":
                                    arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                                    break;
                                case "o":
                                    arg = arg.toString(8);
                                    break;
                                case "s":
                                    arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                                    break;
                                case "u":
                                    arg = Math.abs(arg);
                                    break;
                                case "x":
                                    arg = arg.toString(16);
                                    break;
                                case "X":
                                    arg = arg.toString(16).toUpperCase()
                            }
                            var sign = "";
                            if (/[def]/.test(match[8])) {
                                sign = match[3] ? arg >= 0 ? "+" : "-" : arg >= 0 ? "" : "-";
                                arg = Math.abs(arg)
                            }
                            pad_character = match[4] ? "0" == match[4] ? "0" : match[4].charAt(1) : " ";
                            pad_length = match[6] - String(arg).length - sign.length;
                            pad = match[6] ? str_repeat(pad_character, pad_length) : "";
                            if (match[5]) {
                                output.push(sign);
                                output.push(arg);
                                output.push(pad)
                            } else if ("0" == pad_character) {
                                output.push(sign);
                                output.push(pad);
                                output.push(arg)
                            } else {
                                output.push(pad);
                                output.push(sign);
                                output.push(arg)
                            }
                        }
                    }
                    return output.join("")
                };
                str_format.cache = {};
                str_format.parse = function(fmt) {
                    for (var _fmt = fmt, match = [], parse_tree = [], arg_names = 0; _fmt;) {
                        if (null !== (match = /^[^\x25]+/.exec(_fmt))) parse_tree.push(match[0]);
                        else if (null !== (match = /^\x25{2}/.exec(_fmt))) parse_tree.push("%");
                        else {
                            if (null === (match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt))) throw "[sprintf] huh?";
                            if (match[2]) {
                                arg_names |= 1;
                                var field_list = [],
                                    replacement_field = match[2],
                                    field_match = [];
                                if (null === (field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field))) throw "[sprintf] huh?";
                                field_list.push(field_match[1]);
                                for (;
                                    "" !== (replacement_field = replacement_field.substring(field_match[0].length));)
                                    if (null !== (field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field))) field_list.push(field_match[1]);
                                    else {
                                        if (null === (field_match = /^\[(\d+)\]/.exec(replacement_field))) throw "[sprintf] huh?";
                                        field_list.push(field_match[1])
                                    }
                                match[2] = field_list
                            } else arg_names |= 2;
                            if (3 === arg_names) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                            parse_tree.push(match)
                        }
                        _fmt = _fmt.substring(match[0].length)
                    }
                    return parse_tree
                };
                return str_format
            }(),
            vsprintf = function(fmt, argv) {
                argv.unshift(fmt);
                return sprintf.apply(null, argv)
            };
        Twig.lib.sprintf = sprintf;
        Twig.lib.vsprintf = vsprintf;
        ! function() {
            function getOrdinalFor(intNum) {
                return (intNum = Math.abs(intNum) % 100) % 10 == 1 && 11 != intNum ? "st" : intNum % 10 == 2 && 12 != intNum ? "nd" : intNum % 10 == 3 && 13 != intNum ? "rd" : "th"
            }

            function getISO8601Year(aDate) {
                var d = new Date(aDate.getFullYear() + 1, 0, 4);
                return 7 > (d - aDate) / 864e5 && (aDate.getDay() + 6) % 7 < (d.getDay() + 6) % 7 ? d.getFullYear() : aDate.getMonth() > 0 || aDate.getDate() >= 4 ? aDate.getFullYear() : aDate.getFullYear() - ((aDate.getDay() + 6) % 7 - aDate.getDate() > 2 ? 1 : 0)
            }

            function getISO8601Week(aDate) {
                var d = new Date(getISO8601Year(aDate), 0, 4);
                d.setDate(d.getDate() - (d.getDay() + 6) % 7);
                return parseInt((aDate - d) / 6048e5) + 1
            }
            var shortDays = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                fullDays = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                shortMonths = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                fullMonths = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");
            Twig.lib.formatDate = function(date, format) {
                if ("string" != typeof format || /^\s*$/.test(format)) return date + "";
                var jan1st = new Date(date.getFullYear(), 0, 1),
                    me = date;
                return format.replace(/[dDjlNSwzWFmMntLoYyaABgGhHisuU]/g, function(option) {
                    switch (option) {
                        case "d":
                            return ("0" + me.getDate()).replace(/^.+(..)$/, "$1");
                        case "D":
                            return shortDays[me.getDay()];
                        case "j":
                            return me.getDate();
                        case "l":
                            return fullDays[me.getDay()];
                        case "N":
                            return (me.getDay() + 6) % 7 + 1;
                        case "S":
                            return getOrdinalFor(me.getDate());
                        case "w":
                            return me.getDay();
                        case "z":
                            return Math.ceil((jan1st - me) / 864e5);
                        case "W":
                            return ("0" + getISO8601Week(me)).replace(/^.(..)$/, "$1");
                        case "F":
                            return fullMonths[me.getMonth()];
                        case "m":
                            return ("0" + (me.getMonth() + 1)).replace(/^.+(..)$/, "$1");
                        case "M":
                            return shortMonths[me.getMonth()];
                        case "n":
                            return me.getMonth() + 1;
                        case "t":
                            return new Date(me.getFullYear(), me.getMonth() + 1, -1).getDate();
                        case "L":
                            return 29 == new Date(me.getFullYear(), 1, 29).getDate() ? 1 : 0;
                        case "o":
                            return getISO8601Year(me);
                        case "Y":
                            return me.getFullYear();
                        case "y":
                            return (me.getFullYear() + "").replace(/^.+(..)$/, "$1");
                        case "a":
                            return me.getHours() < 12 ? "am" : "pm";
                        case "A":
                            return me.getHours() < 12 ? "AM" : "PM";
                        case "B":
                            return Math.floor(1e3 * ((me.getUTCHours() + 1) % 24 + me.getUTCMinutes() / 60 + me.getUTCSeconds() / 3600) / 24);
                        case "g":
                            return me.getHours() % 12 != 0 ? me.getHours() % 12 : 12;
                        case "G":
                            return me.getHours();
                        case "h":
                            return ("0" + (me.getHours() % 12 != 0 ? me.getHours() % 12 : 12)).replace(/^.+(..)$/, "$1");
                        case "H":
                            return ("0" + me.getHours()).replace(/^.+(..)$/, "$1");
                        case "i":
                            return ("0" + me.getMinutes()).replace(/^.+(..)$/, "$1");
                        case "s":
                            return ("0" + me.getSeconds()).replace(/^.+(..)$/, "$1");
                        case "u":
                            return me.getMilliseconds();
                        case "U":
                            return me.getTime() / 1e3
                    }
                })
            }
        }();
        Twig.lib.strip_tags = function(input, allowed) {
            allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return input.replace(commentsAndPhpTags, "").replace(tags, function($0, $1) {
                return allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
            })
        };
        Twig.lib.parseISO8601Date = function(s) {
            var re = /(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/,
                d = [];
            d = s.match(re);
            if (!d) throw "Couldn't parse ISO 8601 date string '" + s + "'";
            var a = [1, 2, 3, 4, 5, 6, 10, 11];
            for (var i in a) d[a[i]] = parseInt(d[a[i]], 10);
            d[7] = parseFloat(d[7]);
            var ms = Date.UTC(d[1], d[2] - 1, d[3], d[4], d[5], d[6]);
            d[7] > 0 && (ms += Math.round(1e3 * d[7]));
            if ("Z" != d[8] && d[10]) {
                var offset = 60 * d[10] * 60 * 1e3;
                d[11] && (offset += 60 * d[11] * 1e3);
                "-" == d[9] ? ms -= offset : ms += offset
            }
            return new Date(ms)
        };
        Twig.lib.strtotime = function(str, now) {
            var i, l, match, s, parse = "";
            str = str.replace(/\s{2,}|^\s|\s$/g, " ");
            str = str.replace(/[\t\r\n]/g, "");
            if ("now" === str) return null === now || isNaN(now) ? (new Date).getTime() / 1e3 | 0 : 0 | now;
            if (!isNaN(parse = Date.parse(str))) return parse / 1e3 | 0;
            now = now ? new Date(1e3 * now) : new Date;
            var upperCaseStr = str;
            str = str.toLowerCase();
            var __is = {
                    day: {
                        sun: 0,
                        mon: 1,
                        tue: 2,
                        wed: 3,
                        thu: 4,
                        fri: 5,
                        sat: 6
                    },
                    mon: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
                },
                process = function(m) {
                    var ago = m[2] && "ago" === m[2],
                        num = (num = "last" === m[0] ? -1 : 1) * (ago ? -1 : 1);
                    switch (m[0]) {
                        case "last":
                        case "next":
                            switch (m[1].substring(0, 3)) {
                                case "yea":
                                    now.setFullYear(now.getFullYear() + num);
                                    break;
                                case "wee":
                                    now.setDate(now.getDate() + 7 * num);
                                    break;
                                case "day":
                                    now.setDate(now.getDate() + num);
                                    break;
                                case "hou":
                                    now.setHours(now.getHours() + num);
                                    break;
                                case "min":
                                    now.setMinutes(now.getMinutes() + num);
                                    break;
                                case "sec":
                                    now.setSeconds(now.getSeconds() + num);
                                    break;
                                case "mon":
                                    if ("month" === m[1]) {
                                        now.setMonth(now.getMonth() + num);
                                        break
                                    }
                                default:
                                    var day = __is.day[m[1].substring(0, 3)];
                                    if ("undefined" != typeof day) {
                                        var diff = day - now.getDay();
                                        0 === diff ? diff = 7 * num : diff > 0 ? "last" === m[0] && (diff -= 7) : "next" === m[0] && (diff += 7);
                                        now.setDate(now.getDate() + diff);
                                        now.setHours(0, 0, 0, 0)
                                    }
                            }
                            break;
                        default:
                            if (!/\d+/.test(m[0])) return !1;
                            num *= parseInt(m[0], 10);
                            switch (m[1].substring(0, 3)) {
                                case "yea":
                                    now.setFullYear(now.getFullYear() + num);
                                    break;
                                case "mon":
                                    now.setMonth(now.getMonth() + num);
                                    break;
                                case "wee":
                                    now.setDate(now.getDate() + 7 * num);
                                    break;
                                case "day":
                                    now.setDate(now.getDate() + num);
                                    break;
                                case "hou":
                                    now.setHours(now.getHours() + num);
                                    break;
                                case "min":
                                    now.setMinutes(now.getMinutes() + num);
                                    break;
                                case "sec":
                                    now.setSeconds(now.getSeconds() + num)
                            }
                    }
                    return !0
                };
            match = str.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
            if (null !== match) {
                match[2] ? match[3] || (match[2] += ":00") : match[2] = "00:00:00";
                s = match[1].split(/-/g);
                s[1] = __is.mon[s[1] - 1] || s[1];
                s[0] = +s[0];
                s[0] = s[0] >= 0 && s[0] <= 69 ? "20" + (s[0] < 10 ? "0" + s[0] : s[0] + "") : s[0] >= 70 && s[0] <= 99 ? "19" + s[0] : s[0] + "";
                return parseInt(this.strtotime(s[2] + " " + s[1] + " " + s[0] + " " + match[2]) + (match[4] ? match[4] / 1e3 : ""), 10)
            }
            var regex = "([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?";
            match = str.match(new RegExp(regex, "gi"));
            if (null === match) {
                try {
                    num = Twig.lib.parseISO8601Date(upperCaseStr);
                    if (num) return num / 1e3 | 0
                } catch (err) {
                    return !1
                }
                return !1
            }
            for (i = 0, l = match.length; l > i; i++)
                if (!process(match[i].split(" "))) return !1;
            return now.getTime() / 1e3 | 0
        };
        Twig.lib.is = function(type, obj) {
            var clas = Object.prototype.toString.call(obj).slice(8, -1);
            return void 0 !== obj && null !== obj && clas === type
        };
        Twig.lib.copy = function(src) {
            var key, target = {};
            for (key in src) target[key] = src[key];
            return target
        };
        Twig.lib.replaceAll = function(string, search, replace) {
            return string.split(search).join(replace)
        };
        Twig.lib.chunkArray = function(arr, size) {
            var returnVal = [],
                x = 0,
                len = arr.length;
            if (1 > size || !Twig.lib.is("Array", arr)) return [];
            for (; len > x;) returnVal.push(arr.slice(x, x += size));
            return returnVal
        };
        Twig.lib.round = function(value, precision, mode) {
            var m, f, isHalf, sgn;
            precision |= 0;
            m = Math.pow(10, precision);
            value *= m;
            sgn = value > 0 | -(0 > value);
            isHalf = value % 1 === .5 * sgn;
            f = Math.floor(value);
            if (isHalf) switch (mode) {
                case "PHP_ROUND_HALF_DOWN":
                    value = f + (0 > sgn);
                    break;
                case "PHP_ROUND_HALF_EVEN":
                    value = f + f % 2 * sgn;
                    break;
                case "PHP_ROUND_HALF_ODD":
                    value = f + !(f % 2);
                    break;
                default:
                    value = f + (sgn > 0)
            }
            return (isHalf ? value : Math.round(value)) / m
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        "use strict";
        Twig.logic = {};
        Twig.logic.type = {
            if_: "Twig.logic.type.if",
            endif: "Twig.logic.type.endif",
            for_: "Twig.logic.type.for",
            endfor: "Twig.logic.type.endfor",
            else_: "Twig.logic.type.else",
            elseif: "Twig.logic.type.elseif",
            set: "Twig.logic.type.set",
            setcapture: "Twig.logic.type.setcapture",
            endset: "Twig.logic.type.endset",
            filter: "Twig.logic.type.filter",
            endfilter: "Twig.logic.type.endfilter",
            block: "Twig.logic.type.block",
            endblock: "Twig.logic.type.endblock",
            extends_: "Twig.logic.type.extends",
            use: "Twig.logic.type.use",
            include: "Twig.logic.type.include",
            spaceless: "Twig.logic.type.spaceless",
            endspaceless: "Twig.logic.type.endspaceless",
            macro: "Twig.logic.type.macro",
            endmacro: "Twig.logic.type.endmacro",
            import_: "Twig.logic.type.import",
            from: "Twig.logic.type.from",
            embed: "Twig.logic.type.embed",
            endembed: "Twig.logic.type.endembed"
        };
        Twig.logic.definitions = [{
            type: Twig.logic.type.if_,
            regex: /^if\s+([^\s].+)$/,
            next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
            open: !0,
            compile: function(token) {
                var expression = token.match[1];
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                delete token.match;
                return token
            },
            parse: function(token, context, chain) {
                var output = "",
                    result = Twig.expression.parse.apply(this, [token.stack, context]);
                chain = !0;
                if (result) {
                    chain = !1;
                    output = Twig.parse.apply(this, [token.output, context])
                }
                return {
                    chain: chain,
                    output: output
                }
            }
        }, {
            type: Twig.logic.type.elseif,
            regex: /^elseif\s+([^\s].*)$/,
            next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
            open: !1,
            compile: function(token) {
                var expression = token.match[1];
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                delete token.match;
                return token
            },
            parse: function(token, context, chain) {
                var output = "";
                if (chain && Twig.expression.parse.apply(this, [token.stack, context]) === !0) {
                    chain = !1;
                    output = Twig.parse.apply(this, [token.output, context])
                }
                return {
                    chain: chain,
                    output: output
                }
            }
        }, {
            type: Twig.logic.type.else_,
            regex: /^else$/,
            next: [Twig.logic.type.endif, Twig.logic.type.endfor],
            open: !1,
            parse: function(token, context, chain) {
                var output = "";
                chain && (output = Twig.parse.apply(this, [token.output, context]));
                return {
                    chain: chain,
                    output: output
                }
            }
        }, {
            type: Twig.logic.type.endif,
            regex: /^endif$/,
            next: [],
            open: !1
        }, {
            type: Twig.logic.type.for_,
            regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,
            next: [Twig.logic.type.else_, Twig.logic.type.endfor],
            open: !0,
            compile: function(token) {
                var key_value = token.match[1],
                    expression = token.match[2],
                    conditional = token.match[3],
                    kv_split = null;
                token.key_var = null;
                token.value_var = null;
                if (key_value.indexOf(",") >= 0) {
                    kv_split = key_value.split(",");
                    if (2 !== kv_split.length) throw new Twig.Error("Invalid expression in for loop: " + key_value);
                    token.key_var = kv_split[0].trim();
                    token.value_var = kv_split[1].trim()
                } else token.value_var = key_value;
                token.expression = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                conditional && (token.conditional = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: conditional
                }]).stack);
                delete token.match;
                return token
            },
            parse: function(token, context, continue_chain) {
                var len, keyset, result = Twig.expression.parse.apply(this, [token.expression, context]),
                    output = [],
                    index = 0,
                    that = this,
                    conditional = token.conditional,
                    buildLoop = function(index, len) {
                        var isConditional = void 0 !== conditional;
                        return {
                            index: index + 1,
                            index0: index,
                            revindex: isConditional ? void 0 : len - index,
                            revindex0: isConditional ? void 0 : len - index - 1,
                            first: 0 === index,
                            last: isConditional ? void 0 : index === len - 1,
                            length: isConditional ? void 0 : len,
                            parent: context
                        }
                    },
                    loop = function(key, value) {
                        var inner_context = Twig.lib.copy(context);
                        inner_context[token.value_var] = value;
                        token.key_var && (inner_context[token.key_var] = key);
                        inner_context.loop = buildLoop(index, len);
                        if (void 0 === conditional || Twig.expression.parse.apply(that, [conditional, inner_context])) {
                            output.push(Twig.parse.apply(that, [token.output, inner_context]));
                            index += 1
                        }
                    };
                if (result instanceof Array) {
                    len = result.length;
                    Twig.forEach(result, function(value) {
                        var key = index;
                        loop(key, value)
                    })
                } else if (result instanceof Object) {
                    keyset = void 0 !== result._keys ? result._keys : Object.keys(result);
                    len = keyset.length;
                    Twig.forEach(keyset, function(key) {
                        "_keys" !== key && loop(key, result[key])
                    })
                }
                continue_chain = 0 === output.length;
                return {
                    chain: continue_chain,
                    output: Twig.output.apply(this, [output])
                }
            }
        }, {
            type: Twig.logic.type.endfor,
            regex: /^endfor$/,
            next: [],
            open: !1
        }, {
            type: Twig.logic.type.set,
            regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*(.+)$/,
            next: [],
            open: !0,
            compile: function(token) {
                var key = token.match[1].trim(),
                    expression = token.match[2],
                    expression_stack = Twig.expression.compile.apply(this, [{
                        type: Twig.expression.type.expression,
                        value: expression
                    }]).stack;
                token.key = key;
                token.expression = expression_stack;
                delete token.match;
                return token
            },
            parse: function(token, context, continue_chain) {
                var value = Twig.expression.parse.apply(this, [token.expression, context]),
                    key = token.key;
                this.context[key] = value;
                context[key] = value;
                return {
                    chain: continue_chain,
                    context: context
                }
            }
        }, {
            type: Twig.logic.type.setcapture,
            regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
            next: [Twig.logic.type.endset],
            open: !0,
            compile: function(token) {
                var key = token.match[1].trim();
                token.key = key;
                delete token.match;
                return token
            },
            parse: function(token, context, continue_chain) {
                var value = Twig.parse.apply(this, [token.output, context]),
                    key = token.key;
                this.context[key] = value;
                context[key] = value;
                return {
                    chain: continue_chain,
                    context: context
                }
            }
        }, {
            type: Twig.logic.type.endset,
            regex: /^endset$/,
            next: [],
            open: !1
        }, {
            type: Twig.logic.type.filter,
            regex: /^filter\s+(.+)$/,
            next: [Twig.logic.type.endfilter],
            open: !0,
            compile: function(token) {
                var expression = "|" + token.match[1].trim();
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                delete token.match;
                return token
            },
            parse: function(token, context, chain) {
                var unfiltered = Twig.parse.apply(this, [token.output, context]),
                    stack = [{
                        type: Twig.expression.type.string,
                        value: unfiltered
                    }].concat(token.stack),
                    output = Twig.expression.parse.apply(this, [stack, context]);
                return {
                    chain: chain,
                    output: output
                }
            }
        }, {
            type: Twig.logic.type.endfilter,
            regex: /^endfilter$/,
            next: [],
            open: !1
        }, {
            type: Twig.logic.type.block,
            regex: /^block\s+([a-zA-Z0-9_]+)$/,
            next: [Twig.logic.type.endblock],
            open: !0,
            compile: function(token) {
                token.block = token.match[1].trim();
                delete token.match;
                return token
            },
            parse: function(token, context, chain) {
                var block_output = "",
                    output = "",
                    isImported = this.importedBlocks.indexOf(token.block) > -1,
                    hasParent = this.blocks[token.block] && this.blocks[token.block].indexOf(Twig.placeholders.parent) > -1;
                if (void 0 === this.blocks[token.block] || isImported || hasParent || context.loop) {
                    block_output = Twig.expression.parse.apply(this, [{
                        type: Twig.expression.type.string,
                        value: Twig.parse.apply(this, [token.output, context])
                    }, context]);
                    isImported && this.importedBlocks.splice(this.importedBlocks.indexOf(token.block));
                    hasParent ? this.blocks[token.block] = this.blocks[token.block].replace(Twig.placeholders.parent, block_output) : this.blocks[token.block] = block_output
                }
                output = this.child.blocks[token.block] ? this.child.blocks[token.block] : this.blocks[token.block];
                return {
                    chain: chain,
                    output: output
                }
            }
        }, {
            type: Twig.logic.type.endblock,
            regex: /^endblock(?:\s+([a-zA-Z0-9_]+))?$/,
            next: [],
            open: !1
        }, {
            type: Twig.logic.type.extends_,
            regex: /^extends\s+(.+)$/,
            next: [],
            open: !0,
            compile: function(token) {
                var expression = token.match[1].trim();
                delete token.match;
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                return token
            },
            parse: function(token, context, chain) {
                var file = Twig.expression.parse.apply(this, [token.stack, context]);
                this.extend = file;
                return {
                    chain: chain,
                    output: ""
                }
            }
        }, {
            type: Twig.logic.type.use,
            regex: /^use\s+(.+)$/,
            next: [],
            open: !0,
            compile: function(token) {
                var expression = token.match[1].trim();
                delete token.match;
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                return token
            },
            parse: function(token, context, chain) {
                var file = Twig.expression.parse.apply(this, [token.stack, context]);
                this.importBlocks(file);
                return {
                    chain: chain,
                    output: ""
                }
            }
        }, {
            type: Twig.logic.type.include,
            regex: /^include\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,
            next: [],
            open: !0,
            compile: function(token) {
                var match = token.match,
                    includeMissing = void 0 !== match[1],
                    expression = match[2].trim(),
                    withContext = match[3],
                    only = void 0 !== match[4] && match[4].length;
                delete token.match;
                token.only = only;
                token.includeMissing = includeMissing;
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                void 0 !== withContext && (token.withStack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: withContext.trim()
                }]).stack);
                return token
            },
            parse: function(token, context, chain) {
                var withContext, i, template, innerContext = {};
                if (!token.only)
                    for (i in context) context.hasOwnProperty(i) && (innerContext[i] = context[i]);
                if (void 0 !== token.withStack) {
                    withContext = Twig.expression.parse.apply(this, [token.withStack, context]);
                    for (i in withContext) withContext.hasOwnProperty(i) && (innerContext[i] = withContext[i])
                }
                var file = Twig.expression.parse.apply(this, [token.stack, innerContext]);
                template = file instanceof Twig.Template ? file : this.importFile(file);
                return {
                    chain: chain,
                    output: template.render(innerContext)
                }
            }
        }, {
            type: Twig.logic.type.spaceless,
            regex: /^spaceless$/,
            next: [Twig.logic.type.endspaceless],
            open: !0,
            parse: function(token, context, chain) {
                var unfiltered = Twig.parse.apply(this, [token.output, context]),
                    rBetweenTagSpaces = />\s+</g,
                    output = unfiltered.replace(rBetweenTagSpaces, "><").trim();
                return {
                    chain: chain,
                    output: output
                }
            }
        }, {
            type: Twig.logic.type.endspaceless,
            regex: /^endspaceless$/,
            next: [],
            open: !1
        }, {
            type: Twig.logic.type.macro,
            regex: /^macro\s+([a-zA-Z0-9_]+)\s?\((([a-zA-Z0-9_]+(,\s?)?)*)\)$/,
            next: [Twig.logic.type.endmacro],
            open: !0,
            compile: function(token) {
                for (var macroName = token.match[1], parameters = token.match[2].split(/[ ,]+/), i = 0; i < parameters.length; i++)
                    for (var j = 0; j < parameters.length; j++)
                        if (parameters[i] === parameters[j] && i !== j) throw new Twig.Error("Duplicate arguments for parameter: " + parameters[i]);
                token.macroName = macroName;
                token.parameters = parameters;
                delete token.match;
                return token
            },
            parse: function(token, context, chain) {
                var template = this;
                this.macros[token.macroName] = function() {
                    for (var macroContext = {
                        _self: template.macros
                    }, i = 0; i < token.parameters.length; i++) {
                        var prop = token.parameters[i];
                        "undefined" != typeof arguments[i] ? macroContext[prop] = arguments[i] : macroContext[prop] = void 0
                    }
                    return Twig.parse.apply(template, [token.output, macroContext])
                };
                return {
                    chain: chain,
                    output: ""
                }
            }
        }, {
            type: Twig.logic.type.endmacro,
            regex: /^endmacro$/,
            next: [],
            open: !1
        }, {
            type: Twig.logic.type.import_,
            regex: /^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,
            next: [],
            open: !0,
            compile: function(token) {
                var expression = token.match[1].trim(),
                    contextName = token.match[2].trim();
                delete token.match;
                token.expression = expression;
                token.contextName = contextName;
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                return token
            },
            parse: function(token, context, chain) {
                if ("_self" !== token.expression) {
                    var file = Twig.expression.parse.apply(this, [token.stack, context]),
                        template = this.importFile(file || token.expression);
                    context[token.contextName] = template.render({}, {
                        output: "macros"
                    })
                } else context[token.contextName] = this.macros;
                return {
                    chain: chain,
                    output: ""
                }
            }
        }, {
            type: Twig.logic.type.from,
            regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
            next: [],
            open: !0,
            compile: function(token) {
                for (var expression = token.match[1].trim(), macroExpressions = token.match[2].trim().split(/[ ,]+/), macroNames = {}, i = 0; i < macroExpressions.length; i++) {
                    var res = macroExpressions[i],
                        macroMatch = res.match(/^([a-zA-Z0-9_]+)\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/);
                    macroMatch ? macroNames[macroMatch[1].trim()] = macroMatch[2].trim() : res.match(/^([a-zA-Z0-9_]+)$/) && (macroNames[res] = res)
                }
                delete token.match;
                token.expression = expression;
                token.macroNames = macroNames;
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                return token
            },
            parse: function(token, context, chain) {
                var macros;
                if ("_self" !== token.expression) {
                    var file = Twig.expression.parse.apply(this, [token.stack, context]),
                        template = this.importFile(file || token.expression);
                    macros = template.render({}, {
                        output: "macros"
                    })
                } else macros = this.macros;
                for (var macroName in token.macroNames) macros.hasOwnProperty(macroName) && (context[token.macroNames[macroName]] = macros[macroName]);
                return {
                    chain: chain,
                    output: ""
                }
            }
        }, {
            type: Twig.logic.type.embed,
            regex: /^embed\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,
            next: [Twig.logic.type.endembed],
            open: !0,
            compile: function(token) {
                var match = token.match,
                    includeMissing = void 0 !== match[1],
                    expression = match[2].trim(),
                    withContext = match[3],
                    only = void 0 !== match[4] && match[4].length;
                delete token.match;
                token.only = only;
                token.includeMissing = includeMissing;
                token.stack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: expression
                }]).stack;
                void 0 !== withContext && (token.withStack = Twig.expression.compile.apply(this, [{
                    type: Twig.expression.type.expression,
                    value: withContext.trim()
                }]).stack);
                return token
            },
            parse: function(token, context, chain) {
                var withContext, i, template, innerContext = {};
                if (!token.only)
                    for (i in context) context.hasOwnProperty(i) && (innerContext[i] = context[i]);
                if (void 0 !== token.withStack) {
                    withContext = Twig.expression.parse.apply(this, [token.withStack, context]);
                    for (i in withContext) withContext.hasOwnProperty(i) && (innerContext[i] = withContext[i])
                }
                var file = Twig.expression.parse.apply(this, [token.stack, innerContext]);
                template = file instanceof Twig.Template ? file : this.importFile(file);
                this.blocks = {};
                Twig.parse.apply(this, [token.output, innerContext]);
                return {
                    chain: chain,
                    output: template.render(innerContext, {
                        blocks: this.blocks
                    })
                }
            }
        }, {
            type: Twig.logic.type.endembed,
            regex: /^endembed$/,
            next: [],
            open: !1
        }];
        Twig.logic.handler = {};
        Twig.logic.extendType = function(type, value) {
            value = value || "Twig.logic.type" + type;
            Twig.logic.type[type] = value
        };
        Twig.logic.extend = function(definition) {
            if (!definition.type) throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
            if (Twig.logic.type[definition.type]) throw new Twig.Error("Unable to extend logic definitions. Type " + definition.type + " is already defined.");
            Twig.logic.extendType(definition.type);
            Twig.logic.handler[definition.type] = definition
        };
        for (; Twig.logic.definitions.length > 0;) Twig.logic.extend(Twig.logic.definitions.shift());
        Twig.logic.compile = function(raw_token) {
            var expression = raw_token.value.trim(),
                token = Twig.logic.tokenize.apply(this, [expression]),
                token_template = Twig.logic.handler[token.type];
            if (token_template.compile) {
                token = token_template.compile.apply(this, [token]);
                Twig.log.trace("Twig.logic.compile: ", "Compiled logic token to ", token)
            }
            return token
        };
        Twig.logic.tokenize = function(expression) {
            var token = {},
                token_template_type = null,
                token_type = null,
                token_regex = null,
                regex_array = null,
                regex = null,
                match = null;
            expression = expression.trim();
            for (token_template_type in Twig.logic.handler)
                if (Twig.logic.handler.hasOwnProperty(token_template_type)) {
                    token_type = Twig.logic.handler[token_template_type].type;
                    token_regex = Twig.logic.handler[token_template_type].regex;
                    regex_array = [];
                    token_regex instanceof Array ? regex_array = token_regex : regex_array.push(token_regex);
                    for (; regex_array.length > 0;) {
                        regex = regex_array.shift();
                        match = regex.exec(expression.trim());
                        if (null !== match) {
                            token.type = token_type;
                            token.match = match;
                            Twig.log.trace("Twig.logic.tokenize: ", "Matched a ", token_type, " regular expression of ", match);
                            return token
                        }
                    }
                }
            throw new Twig.Error("Unable to parse '" + expression.trim() + "'")
        };
        Twig.logic.parse = function(token, context, chain) {
            var token_template, output = "";
            context = context || {};
            Twig.log.debug("Twig.logic.parse: ", "Parsing logic token ", token);
            token_template = Twig.logic.handler[token.type];
            token_template.parse && (output = token_template.parse.apply(this, [token, context, chain]));
            return output
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        "use strict";
        Twig.expression = {};
        Twig.expression.reservedWords = ["true", "false", "null", "TRUE", "FALSE", "NULL", "_context"];
        Twig.expression.type = {
            comma: "Twig.expression.type.comma",
            operator: {
                unary: "Twig.expression.type.operator.unary",
                binary: "Twig.expression.type.operator.binary"
            },
            string: "Twig.expression.type.string",
            bool: "Twig.expression.type.bool",
            array: {
                start: "Twig.expression.type.array.start",
                end: "Twig.expression.type.array.end"
            },
            object: {
                start: "Twig.expression.type.object.start",
                end: "Twig.expression.type.object.end"
            },
            parameter: {
                start: "Twig.expression.type.parameter.start",
                end: "Twig.expression.type.parameter.end"
            },
            key: {
                period: "Twig.expression.type.key.period",
                brackets: "Twig.expression.type.key.brackets"
            },
            filter: "Twig.expression.type.filter",
            _function: "Twig.expression.type._function",
            variable: "Twig.expression.type.variable",
            number: "Twig.expression.type.number",
            _null: "Twig.expression.type.null",
            context: "Twig.expression.type.context",
            test: "Twig.expression.type.test"
        };
        Twig.expression.set = {
            operations: [Twig.expression.type.filter, Twig.expression.type.operator.unary, Twig.expression.type.operator.binary, Twig.expression.type.array.end, Twig.expression.type.object.end, Twig.expression.type.parameter.end, Twig.expression.type.comma, Twig.expression.type.test],
            expressions: [Twig.expression.type._function, Twig.expression.type.bool, Twig.expression.type.string, Twig.expression.type.variable, Twig.expression.type.number, Twig.expression.type._null, Twig.expression.type.context, Twig.expression.type.parameter.start, Twig.expression.type.array.start, Twig.expression.type.object.start]
        };
        Twig.expression.set.operations_extended = Twig.expression.set.operations.concat([Twig.expression.type.key.period, Twig.expression.type.key.brackets]);
        Twig.expression.fn = {
            compile: {
                push: function(token, stack, output) {
                    output.push(token)
                },
                push_both: function(token, stack, output) {
                    output.push(token);
                    stack.push(token)
                }
            },
            parse: {
                push: function(token, stack, context) {
                    stack.push(token)
                },
                push_value: function(token, stack, context) {
                    stack.push(token.value)
                }
            }
        };
        Twig.expression.definitions = [{
            type: Twig.expression.type.test,
            regex: /^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*)/,
            next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
            compile: function(token, stack, output) {
                token.filter = token.match[2];
                token.modifier = token.match[1];
                delete token.match;
                delete token.value;
                output.push(token)
            },
            parse: function(token, stack, context) {
                var value = stack.pop(),
                    params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
                    result = Twig.test(token.filter, value, params);
                "not" == token.modifier ? stack.push(!result) : stack.push(result)
            }
        }, {
            type: Twig.expression.type.comma,
            regex: /^,/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
            compile: function(token, stack, output) {
                var stack_token, i = stack.length - 1;
                delete token.match;
                delete token.value;
                for (; i >= 0; i--) {
                    stack_token = stack.pop();
                    if (stack_token.type === Twig.expression.type.object.start || stack_token.type === Twig.expression.type.parameter.start || stack_token.type === Twig.expression.type.array.start) {
                        stack.push(stack_token);
                        break
                    }
                    output.push(stack_token)
                }
                output.push(token)
            }
        }, {
            type: Twig.expression.type.operator.binary,
            regex: /(^[\+\-~%\?\:]|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^and\s+|^or\s+|^in\s+|^not in\s+|^\.\.)/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.operator.unary]),
            compile: function(token, stack, output) {
                delete token.match;
                token.value = token.value.trim();
                var value = token.value,
                    operator = Twig.expression.operator.lookup(value, token);
                Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value);
                for (; stack.length > 0 && (stack[stack.length - 1].type == Twig.expression.type.operator.unary || stack[stack.length - 1].type == Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precidence >= stack[stack.length - 1].precidence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precidence > stack[stack.length - 1].precidence);) {
                    var temp = stack.pop();
                    output.push(temp)
                }
                if (":" === value) {
                    if (!stack[stack.length - 1] || "?" !== stack[stack.length - 1].value) {
                        var key_token = output.pop();
                        if (key_token.type !== Twig.expression.type.string && key_token.type !== Twig.expression.type.variable && key_token.type !== Twig.expression.type.number) throw new Twig.Error("Unexpected value before ':' of " + key_token.type + " = " + key_token.value);
                        token.key = key_token.value;
                        output.push(token);
                        return
                    }
                } else stack.push(operator)
            },
            parse: function(token, stack, context) {
                token.key ? stack.push(token) : Twig.expression.operator.parse(token.value, stack)
            }
        }, {
            type: Twig.expression.type.operator.unary,
            regex: /(^not\s+)/,
            next: Twig.expression.set.expressions,
            compile: function(token, stack, output) {
                delete token.match;
                token.value = token.value.trim();
                var value = token.value,
                    operator = Twig.expression.operator.lookup(value, token);
                Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value);
                for (; stack.length > 0 && (stack[stack.length - 1].type == Twig.expression.type.operator.unary || stack[stack.length - 1].type == Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precidence >= stack[stack.length - 1].precidence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precidence > stack[stack.length - 1].precidence);) {
                    var temp = stack.pop();
                    output.push(temp)
                }
                stack.push(operator)
            },
            parse: function(token, stack, context) {
                Twig.expression.operator.parse(token.value, stack)
            }
        }, {
            type: Twig.expression.type.string,
            regex: /^(["'])(?:(?=(\\?))\2.)*?\1/,
            next: Twig.expression.set.operations,
            compile: function(token, stack, output) {
                var value = token.value;
                delete token.match;
                value = '"' === value.substring(0, 1) ? value.replace('\\"', '"') : value.replace("\\'", "'");
                token.value = value.substring(1, value.length - 1).replace(/\\n/g, "\n").replace(/\\r/g, "\r");
                Twig.log.trace("Twig.expression.compile: ", "String value: ", token.value);
                output.push(token)
            },
            parse: Twig.expression.fn.parse.push_value
        }, {
            type: Twig.expression.type.parameter.start,
            regex: /^\(/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
            compile: Twig.expression.fn.compile.push_both,
            parse: Twig.expression.fn.parse.push
        }, {
            type: Twig.expression.type.parameter.end,
            regex: /^\)/,
            next: Twig.expression.set.operations_extended,
            compile: function(token, stack, output) {
                var stack_token, end_token = token;
                stack_token = stack.pop();
                for (; stack.length > 0 && stack_token.type != Twig.expression.type.parameter.start;) {
                    output.push(stack_token);
                    stack_token = stack.pop()
                }
                for (var param_stack = []; token.type !== Twig.expression.type.parameter.start;) {
                    param_stack.unshift(token);
                    token = output.pop()
                }
                param_stack.unshift(token);
                token = output[output.length - 1];
                if (void 0 === token || token.type !== Twig.expression.type._function && token.type !== Twig.expression.type.filter && token.type !== Twig.expression.type.test && token.type !== Twig.expression.type.key.brackets && token.type !== Twig.expression.type.key.period) {
                    end_token.expression = !0;
                    param_stack.pop();
                    param_stack.shift();
                    end_token.params = param_stack;
                    output.push(end_token)
                } else {
                    end_token.expression = !1;
                    token.params = param_stack
                }
            },
            parse: function(token, stack, context) {
                var new_array = [],
                    array_ended = !1,
                    value = null;
                if (token.expression) {
                    value = Twig.expression.parse.apply(this, [token.params, context]);
                    stack.push(value)
                } else {
                    for (; stack.length > 0;) {
                        value = stack.pop();
                        if (value && value.type && value.type == Twig.expression.type.parameter.start) {
                            array_ended = !0;
                            break
                        }
                        new_array.unshift(value)
                    }
                    if (!array_ended) throw new Twig.Error("Expected end of parameter set.");
                    stack.push(new_array)
                }
            }
        }, {
            type: Twig.expression.type.array.start,
            regex: /^\[/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
            compile: Twig.expression.fn.compile.push_both,
            parse: Twig.expression.fn.parse.push
        }, {
            type: Twig.expression.type.array.end,
            regex: /^\]/,
            next: Twig.expression.set.operations_extended,
            compile: function(token, stack, output) {
                for (var stack_token, i = stack.length - 1; i >= 0; i--) {
                    stack_token = stack.pop();
                    if (stack_token.type === Twig.expression.type.array.start) break;
                    output.push(stack_token)
                }
                output.push(token)
            },
            parse: function(token, stack, context) {
                for (var new_array = [], array_ended = !1, value = null; stack.length > 0;) {
                    value = stack.pop();
                    if (value.type && value.type == Twig.expression.type.array.start) {
                        array_ended = !0;
                        break
                    }
                    new_array.unshift(value)
                }
                if (!array_ended) throw new Twig.Error("Expected end of array.");
                stack.push(new_array)
            }
        }, {
            type: Twig.expression.type.object.start,
            regex: /^\{/,
            next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
            compile: Twig.expression.fn.compile.push_both,
            parse: Twig.expression.fn.parse.push
        }, {
            type: Twig.expression.type.object.end,
            regex: /^\}/,
            next: Twig.expression.set.operations_extended,
            compile: function(token, stack, output) {
                for (var stack_token, i = stack.length - 1; i >= 0; i--) {
                    stack_token = stack.pop();
                    if (stack_token && stack_token.type === Twig.expression.type.object.start) break;
                    output.push(stack_token)
                }
                output.push(token)
            },
            parse: function(end_token, stack, context) {
                for (var new_object = {}, object_ended = !1, token = null, has_value = !1, value = null; stack.length > 0;) {
                    token = stack.pop();
                    if (token && token.type && token.type === Twig.expression.type.object.start) {
                        object_ended = !0;
                        break
                    }
                    if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
                        if (!has_value) throw new Twig.Error("Missing value for key '" + token.key + "' in object definition.");
                        new_object[token.key] = value;
                        void 0 === new_object._keys && (new_object._keys = []);
                        new_object._keys.unshift(token.key);
                        value = null;
                        has_value = !1
                    } else {
                        has_value = !0;
                        value = token
                    }
                }
                if (!object_ended) throw new Twig.Error("Unexpected end of object.");
                stack.push(new_object)
            }
        }, {
            type: Twig.expression.type.filter,
            regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,
            next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
            compile: function(token, stack, output) {
                token.value = token.match[1];
                output.push(token)
            },
            parse: function(token, stack, context) {
                var input = stack.pop(),
                    params = token.params && Twig.expression.parse.apply(this, [token.params, context]);
                stack.push(Twig.filter.apply(this, [token.value, input, params]))
            }
        }, {
            type: Twig.expression.type._function,
            regex: /^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,
            next: Twig.expression.type.parameter.start,
            transform: function(match, tokens) {
                return "("
            },
            compile: function(token, stack, output) {
                var fn = token.match[1];
                token.fn = fn;
                delete token.match;
                delete token.value;
                output.push(token)
            },
            parse: function(token, stack, context) {
                var value, params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
                    fn = token.fn;
                if (Twig.functions[fn]) value = Twig.functions[fn].apply(this, params);
                else {
                    if ("function" != typeof context[fn]) throw new Twig.Error(fn + " function does not exist and is not defined in the context");
                    value = context[fn].apply(context, params)
                }
                stack.push(value)
            }
        }, {
            type: Twig.expression.type.variable,
            regex: /^[a-zA-Z_][a-zA-Z0-9_]*/,
            next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
            compile: Twig.expression.fn.compile.push,
            validate: function(match, tokens) {
                return Twig.indexOf(Twig.expression.reservedWords, match[0]) < 0
            },
            parse: function(token, stack, context) {
                var value = Twig.expression.resolve(context[token.value], context);
                stack.push(value)
            }
        }, {
            type: Twig.expression.type.key.period,
            regex: /^\.([a-zA-Z0-9_]+)/,
            next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
            compile: function(token, stack, output) {
                token.key = token.match[1];
                delete token.match;
                delete token.value;
                output.push(token)
            },
            parse: function(token, stack, context) {
                var value, params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
                    key = token.key,
                    object = stack.pop();
                if (null === object || void 0 === object) {
                    if (this.options.strict_variables) throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
                    return null
                }
                var capitalize = function(value) {
                    return value.substr(0, 1).toUpperCase() + value.substr(1)
                };
                value = "object" == typeof object && key in object ? object[key] : void 0 !== object["get" + capitalize(key)] ? object["get" + capitalize(key)] : void 0 !== object["is" + capitalize(key)] ? object["is" + capitalize(key)] : null;
                stack.push(Twig.expression.resolve(value, object, params))
            }
        }, {
            type: Twig.expression.type.key.brackets,
            regex: /^\[([^\]]*)\]/,
            next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
            compile: function(token, stack, output) {
                var match = token.match[1];
                delete token.value;
                delete token.match;
                token.stack = Twig.expression.compile({
                    value: match
                }).stack;
                output.push(token)
            },
            parse: function(token, stack, context) {
                var value, params = token.params && Twig.expression.parse.apply(this, [token.params, context]),
                    key = Twig.expression.parse.apply(this, [token.stack, context]),
                    object = stack.pop();
                if (null === object || void 0 === object) {
                    if (this.options.strict_variables) throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
                    return null
                }
                value = "object" == typeof object && key in object ? object[key] : null;
                stack.push(Twig.expression.resolve(value, object, params))
            }
        }, {
            type: Twig.expression.type._null,
            regex: /^(null|NULL|none|NONE)/,
            next: Twig.expression.set.operations,
            compile: function(token, stack, output) {
                delete token.match;
                token.value = null;
                output.push(token)
            },
            parse: Twig.expression.fn.parse.push_value
        }, {
            type: Twig.expression.type.context,
            regex: /^_context/,
            next: Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),
            compile: Twig.expression.fn.compile.push,
            parse: function(token, stack, context) {
                stack.push(context)
            }
        }, {
            type: Twig.expression.type.number,
            regex: /^\-?\d+(\.\d+)?/,
            next: Twig.expression.set.operations,
            compile: function(token, stack, output) {
                token.value = Number(token.value);
                output.push(token)
            },
            parse: Twig.expression.fn.parse.push_value
        }, {
            type: Twig.expression.type.bool,
            regex: /^(true|TRUE|false|FALSE)/,
            next: Twig.expression.set.operations,
            compile: function(token, stack, output) {
                token.value = "true" === token.match[0].toLowerCase();
                delete token.match;
                output.push(token)
            },
            parse: Twig.expression.fn.parse.push_value
        }];
        Twig.expression.resolve = function(value, context, params) {
            return "function" == typeof value ? value.apply(context, params || []) : value
        };
        Twig.expression.handler = {};
        Twig.expression.extendType = function(type) {
            Twig.expression.type[type] = "Twig.expression.type." + type
        };
        Twig.expression.extend = function(definition) {
            if (!definition.type) throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
            Twig.expression.handler[definition.type] = definition
        };
        for (; Twig.expression.definitions.length > 0;) Twig.expression.extend(Twig.expression.definitions.shift());
        Twig.expression.tokenize = function(expression) {
            var type, regex, regex_array, token_next, match_found, match_function, tokens = [],
                exp_offset = 0,
                next = null,
                invalid_matches = [];
            match_function = function() {
                var match = Array.prototype.slice.apply(arguments);
                match.pop(), match.pop();
                Twig.log.trace("Twig.expression.tokenize", "Matched a ", type, " regular expression of ", match);
                if (next && Twig.indexOf(next, type) < 0) {
                    invalid_matches.push(type + " cannot follow a " + tokens[tokens.length - 1].type + " at template:" + exp_offset + " near '" + match[0].substring(0, 20) + "...'");
                    return match[0]
                }
                if (Twig.expression.handler[type].validate && !Twig.expression.handler[type].validate(match, tokens)) return match[0];
                invalid_matches = [];
                tokens.push({
                    type: type,
                    value: match[0],
                    match: match
                });
                match_found = !0;
                next = token_next;
                exp_offset += match[0].length;
                return Twig.expression.handler[type].transform ? Twig.expression.handler[type].transform(match, tokens) : ""
            };
            Twig.log.debug("Twig.expression.tokenize", "Tokenizing expression ", expression);
            for (; expression.length > 0;) {
                expression = expression.trim();
                for (type in Twig.expression.handler)
                    if (Twig.expression.handler.hasOwnProperty(type)) {
                        token_next = Twig.expression.handler[type].next;
                        regex = Twig.expression.handler[type].regex;
                        regex_array = regex instanceof Array ? regex : [regex];
                        match_found = !1;
                        for (; regex_array.length > 0;) {
                            regex = regex_array.pop();
                            expression = expression.replace(regex, match_function)
                        }
                        if (match_found) break
                    }
                if (!match_found) throw invalid_matches.length > 0 ? new Twig.Error(invalid_matches.join(" OR ")) : new Twig.Error("Unable to parse '" + expression + "' at template position" + exp_offset)
            }
            Twig.log.trace("Twig.expression.tokenize", "Tokenized to ", tokens);
            return tokens
        };
        Twig.expression.compile = function(raw_token) {
            var expression = raw_token.value,
                tokens = Twig.expression.tokenize(expression),
                token = null,
                output = [],
                stack = [],
                token_template = null;
            Twig.log.trace("Twig.expression.compile: ", "Compiling ", expression);
            for (; tokens.length > 0;) {
                token = tokens.shift();
                token_template = Twig.expression.handler[token.type];
                Twig.log.trace("Twig.expression.compile: ", "Compiling ", token);
                token_template.compile && token_template.compile(token, stack, output);
                Twig.log.trace("Twig.expression.compile: ", "Stack is", stack);
                Twig.log.trace("Twig.expression.compile: ", "Output is", output)
            }
            for (; stack.length > 0;) output.push(stack.pop());
            Twig.log.trace("Twig.expression.compile: ", "Final output is", output);
            raw_token.stack = output;
            delete raw_token.value;
            return raw_token
        };
        Twig.expression.parse = function(tokens, context) {
            var that = this;
            tokens instanceof Array || (tokens = [tokens]);
            var stack = [],
                token_template = null;
            Twig.forEach(tokens, function(token) {
                token_template = Twig.expression.handler[token.type];
                token_template.parse && token_template.parse.apply(that, [token, stack, context])
            });
            return stack.pop()
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        "use strict";
        Twig.expression.operator = {
            leftToRight: "leftToRight",
            rightToLeft: "rightToLeft"
        };
        var containment = function(a, b) {
            if (void 0 !== b.indexOf) return a === b || "" !== a && b.indexOf(a) > -1;
            var el;
            for (el in b)
                if (b.hasOwnProperty(el) && b[el] === a) return !0;
            return !1
        };
        Twig.expression.operator.lookup = function(operator, token) {
            switch (operator) {
                case "..":
                case "not in":
                case "in":
                    token.precidence = 20;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case ",":
                    token.precidence = 18;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case "?":
                case ":":
                    token.precidence = 16;
                    token.associativity = Twig.expression.operator.rightToLeft;
                    break;
                case "or":
                    token.precidence = 14;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case "and":
                    token.precidence = 13;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case "==":
                case "!=":
                    token.precidence = 9;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case "<":
                case "<=":
                case ">":
                case ">=":
                    token.precidence = 8;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case "~":
                case "+":
                case "-":
                    token.precidence = 6;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case "//":
                case "**":
                case "*":
                case "/":
                case "%":
                    token.precidence = 5;
                    token.associativity = Twig.expression.operator.leftToRight;
                    break;
                case "not":
                    token.precidence = 3;
                    token.associativity = Twig.expression.operator.rightToLeft;
                    break;
                default:
                    throw new Twig.Error(operator + " is an unknown operator.")
            }
            token.operator = operator;
            return token
        };
        Twig.expression.operator.parse = function(operator, stack) {
            Twig.log.trace("Twig.expression.operator.parse: ", "Handling ", operator);
            var a, b, c;
            switch (operator) {
                case ":":
                    break;
                case "?":
                    c = stack.pop();
                    b = stack.pop();
                    a = stack.pop();
                    a ? stack.push(b) : stack.push(c);
                    break;
                case "+":
                    b = parseFloat(stack.pop());
                    a = parseFloat(stack.pop());
                    stack.push(a + b);
                    break;
                case "-":
                    b = parseFloat(stack.pop());
                    a = parseFloat(stack.pop());
                    stack.push(a - b);
                    break;
                case "*":
                    b = parseFloat(stack.pop());
                    a = parseFloat(stack.pop());
                    stack.push(a * b);
                    break;
                case "/":
                    b = parseFloat(stack.pop());
                    a = parseFloat(stack.pop());
                    stack.push(a / b);
                    break;
                case "//":
                    b = parseFloat(stack.pop());
                    a = parseFloat(stack.pop());
                    stack.push(parseInt(a / b));
                    break;
                case "%":
                    b = parseFloat(stack.pop());
                    a = parseFloat(stack.pop());
                    stack.push(a % b);
                    break;
                case "~":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push((null != a ? a.toString() : "") + (null != b ? b.toString() : ""));
                    break;
                case "not":
                case "!":
                    stack.push(!stack.pop());
                    break;
                case "<":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(b > a);
                    break;
                case "<=":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(b >= a);
                    break;
                case ">":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a > b);
                    break;
                case ">=":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a >= b);
                    break;
                case "===":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a === b);
                    break;
                case "==":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a == b);
                    break;
                case "!==":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a !== b);
                    break;
                case "!=":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a != b);
                    break;
                case "or":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a || b);
                    break;
                case "and":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(a && b);
                    break;
                case "**":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(Math.pow(a, b));
                    break;
                case "not in":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(!containment(a, b));
                    break;
                case "in":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(containment(a, b));
                    break;
                case "..":
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(Twig.functions.range(a, b));
                    break;
                default:
                    throw new Twig.Error(operator + " is an unknown operator.")
            }
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        function is(type, obj) {
            var clas = Object.prototype.toString.call(obj).slice(8, -1);
            return void 0 !== obj && null !== obj && clas === type
        }
        Twig.filters = {
            upper: function(value) {
                return "string" != typeof value ? value : value.toUpperCase()
            },
            lower: function(value) {
                return "string" != typeof value ? value : value.toLowerCase()
            },
            capitalize: function(value) {
                return "string" != typeof value ? value : value.substr(0, 1).toUpperCase() + value.toLowerCase().substr(1)
            },
            title: function(value) {
                return "string" != typeof value ? value : value.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
                    return p1 + p2.toUpperCase()
                })
            },
            length: function(value) {
                return Twig.lib.is("Array", value) || "string" == typeof value ? value.length : Twig.lib.is("Object", value) ? void 0 === value._keys ? Object.keys(value).length : value._keys.length : 0
            },
            reverse: function(value) {
                if (is("Array", value)) return value.reverse();
                if (is("String", value)) return value.split("").reverse().join("");
                if (value instanceof Object) {
                    var keys = value._keys || Object.keys(value).reverse();
                    value._keys = keys;
                    return value
                }
            },
            sort: function(value) {
                if (is("Array", value)) return value.sort();
                if (value instanceof Object) {
                    delete value._keys;
                    var keys = Object.keys(value),
                        sorted_keys = keys.sort(function(a, b) {
                            return value[a] > value[b]
                        });
                    value._keys = sorted_keys;
                    return value
                }
            },
            keys: function(value) {
                if (void 0 !== value && null !== value) {
                    var keyset = value._keys || Object.keys(value),
                        output = [];
                    Twig.forEach(keyset, function(key) {
                        "_keys" !== key && value.hasOwnProperty(key) && output.push(key)
                    });
                    return output
                }
            },
            url_encode: function(value) {
                return void 0 !== value && null !== value ? encodeURIComponent(value) : void 0
            },
            join: function(value, params) {
                if (void 0 !== value && null !== value) {
                    var join_str = "",
                        output = [],
                        keyset = null;
                    params && params[0] && (join_str = params[0]);
                    if (value instanceof Array) output = value;
                    else {
                        keyset = value._keys || Object.keys(value);
                        Twig.forEach(keyset, function(key) {
                            "_keys" !== key && value.hasOwnProperty(key) && output.push(value[key])
                        })
                    }
                    return output.join(join_str)
                }
            },
            "default": function(value, params) {
                if (void 0 === params || 1 !== params.length) throw new Twig.Error("default filter expects one argument");
                return void 0 === value || null === value || "" === value ? params[0] : value
            },
            json_encode: function(value) {
                value && value.hasOwnProperty("_keys") && delete value._keys;
                return void 0 === value || null === value ? "null" : JSON.stringify(value)
            },
            merge: function(value, params) {
                var obj = [],
                    arr_index = 0,
                    keyset = [];
                value instanceof Array ? Twig.forEach(params, function(param) {
                    param instanceof Array || (obj = {})
                }) : obj = {};
                obj instanceof Array || (obj._keys = []);
                if (value instanceof Array) Twig.forEach(value, function(val) {
                    obj._keys && obj._keys.push(arr_index);
                    obj[arr_index] = val;
                    arr_index++
                });
                else {
                    keyset = value._keys || Object.keys(value);
                    Twig.forEach(keyset, function(key) {
                        obj[key] = value[key];
                        obj._keys.push(key);
                        var int_key = parseInt(key, 10);
                        !isNaN(int_key) && int_key >= arr_index && (arr_index = int_key + 1)
                    })
                }
                Twig.forEach(params, function(param) {
                    if (param instanceof Array) Twig.forEach(param, function(val) {
                        obj._keys && obj._keys.push(arr_index);
                        obj[arr_index] = val;
                        arr_index++
                    });
                    else {
                        keyset = param._keys || Object.keys(param);
                        Twig.forEach(keyset, function(key) {
                            obj[key] || obj._keys.push(key);
                            obj[key] = param[key];
                            var int_key = parseInt(key, 10);
                            !isNaN(int_key) && int_key >= arr_index && (arr_index = int_key + 1)
                        })
                    }
                });
                if (0 === params.length) throw new Twig.Error("Filter merge expects at least one parameter");
                return obj
            },
            date: function(value, params) {
                if (void 0 !== value && null !== value) {
                    var date = Twig.functions.date(value);
                    return Twig.lib.formatDate(date, params[0])
                }
            },
            date_modify: function(value, params) {
                if (void 0 !== value && null !== value) {
                    if (void 0 === params || 1 !== params.length) throw new Twig.Error("date_modify filter expects 1 argument");
                    var time, modifyText = params[0];
                    Twig.lib.is("Date", value) && (time = Twig.lib.strtotime(modifyText, value.getTime() / 1e3));
                    Twig.lib.is("String", value) && (time = Twig.lib.strtotime(modifyText, Twig.lib.strtotime(value)));
                    Twig.lib.is("Number", value) && (time = Twig.lib.strtotime(modifyText, value));
                    return new Date(1e3 * time)
                }
            },
            replace: function(value, params) {
                if (void 0 !== value && null !== value) {
                    var tag, pairs = params[0];
                    for (tag in pairs) pairs.hasOwnProperty(tag) && "_keys" !== tag && (value = Twig.lib.replaceAll(value, tag, pairs[tag]));
                    return value
                }
            },
            format: function(value, params) {
                return void 0 !== value && null !== value ? Twig.lib.vsprintf(value, params) : void 0
            },
            striptags: function(value) {
                return void 0 !== value && null !== value ? Twig.lib.strip_tags(value) : void 0
            },
            escape: function(value) {
                if (void 0 !== value && null !== value) {
                    var raw_value = value.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                    return Twig.Markup(raw_value)
                }
            },
            e: function(value) {
                return Twig.filters.escape(value)
            },
            nl2br: function(value) {
                if (void 0 !== value && null !== value) {
                    var linebreak_tag = "BACKSLASH_n_replace",
                        br = "<br />" + linebreak_tag;
                    value = Twig.filters.escape(value).replace(/\r\n/g, br).replace(/\r/g, br).replace(/\n/g, br);
                    return Twig.lib.replaceAll(value, linebreak_tag, "\n")
                }
            },
            number_format: function(value, params) {
                var number = value,
                    decimals = params && params[0] ? params[0] : void 0,
                    dec = params && void 0 !== params[1] ? params[1] : ".",
                    sep = params && void 0 !== params[2] ? params[2] : ",";
                number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
                var n = isFinite(+number) ? +number : 0,
                    prec = isFinite(+decimals) ? Math.abs(decimals) : 0,
                    s = "",
                    toFixedFix = function(n, prec) {
                        var k = Math.pow(10, prec);
                        return "" + Math.round(n * k) / k
                    };
                s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
                s[0].length > 3 && (s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep));
                if ((s[1] || "").length < prec) {
                    s[1] = s[1] || "";
                    s[1] += new Array(prec - s[1].length + 1).join("0")
                }
                return s.join(dec)
            },
            trim: function(value, params) {
                if (void 0 !== value && null !== value) {
                    var whitespace, str = Twig.filters.escape("" + value);
                    whitespace = params && params[0] ? "" + params[0] : " \n\r	\f\x0B            ​\u2028\u2029　";
                    for (var i = 0; i < str.length; i++)
                        if (-1 === whitespace.indexOf(str.charAt(i))) {
                            str = str.substring(i);
                            break
                        }
                    for (i = str.length - 1; i >= 0; i--)
                        if (-1 === whitespace.indexOf(str.charAt(i))) {
                            str = str.substring(0, i + 1);
                            break
                        }
                    return -1 === whitespace.indexOf(str.charAt(0)) ? str : ""
                }
            },
            slice: function(value, params) {
                if (void 0 !== value && null !== value) {
                    if (void 0 === params || params.length < 1) throw new Twig.Error("slice filter expects at least 1 argument");
                    var start = params[0] || 0,
                        length = params.length > 1 ? params[1] : value.length,
                        startIndex = start >= 0 ? start : Math.max(value.length + start, 0);
                    if (Twig.lib.is("Array", value)) {
                        for (var output = [], i = startIndex; startIndex + length > i && i < value.length; i++) output.push(value[i]);
                        return output
                    }
                    if (Twig.lib.is("String", value)) return value.substr(startIndex, length);
                    throw new Twig.Error("slice filter expects value to be an array or string")
                }
            },
            abs: function(value) {
                return void 0 !== value && null !== value ? Math.abs(value) : void 0
            },
            first: function(value) {
                if (value instanceof Array) return value[0];
                if (value instanceof Object) {
                    if ("_keys" in value) return value[value._keys[0]]
                } else if ("string" == typeof value) return value.substr(0, 1)
            },
            split: function(value, params) {
                if (void 0 !== value && null !== value) {
                    if (void 0 === params || params.length < 1 || params.length > 2) throw new Twig.Error("split filter expects 1 or 2 argument");
                    if (Twig.lib.is("String", value)) {
                        var delimiter = params[0],
                            limit = params[1],
                            split = value.split(delimiter);
                        if (void 0 === limit) return split;
                        if (0 > limit) return value.split(delimiter, split.length + limit);
                        var limitedSplit = [];
                        if ("" == delimiter)
                            for (; split.length > 0;) {
                                for (var temp = "", i = 0; limit > i && split.length > 0; i++) temp += split.shift();
                                limitedSplit.push(temp)
                            } else {
                            for (var i = 0; limit - 1 > i && split.length > 0; i++) limitedSplit.push(split.shift());
                            split.length > 0 && limitedSplit.push(split.join(delimiter))
                        }
                        return limitedSplit
                    }
                    throw new Twig.Error("split filter expects value to be a string")
                }
            },
            last: function(value) {
                if (Twig.lib.is("Object", value)) {
                    var keys;
                    keys = void 0 === value._keys ? Object.keys(value) : value._keys;
                    return value[keys[keys.length - 1]]
                }
                return value[value.length - 1]
            },
            raw: function(value) {
                return Twig.Markup(value)
            },
            batch: function(items, params) {
                var result, last, missing, size = params.shift(),
                    fill = params.shift();
                if (!Twig.lib.is("Array", items)) throw new Twig.Error("batch filter expects items to be an array");
                if (!Twig.lib.is("Number", size)) throw new Twig.Error("batch filter expects size to be a number");
                size = Math.ceil(size);
                result = Twig.lib.chunkArray(items, size);
                if (fill && items.length % size != 0) {
                    last = result.pop();
                    missing = size - last.length;
                    for (; missing--;) last.push(fill);
                    result.push(last)
                }
                return result
            },
            round: function(value, params) {
                params = params || [];
                var precision = params.length > 0 ? params[0] : 0,
                    method = params.length > 1 ? params[1] : "common";
                value = parseFloat(value);
                if (precision && !Twig.lib.is("Number", precision)) throw new Twig.Error("round filter expects precision to be a number");
                if ("common" === method) return Twig.lib.round(value, precision);
                if (!Twig.lib.is("Function", Math[method])) throw new Twig.Error("round filter expects method to be 'floor', 'ceil', or 'common'");
                return Math[method](value * Math.pow(10, precision)) / Math.pow(10, precision)
            }
        };
        Twig.filter = function(filter, value, params) {
            if (!Twig.filters[filter]) throw "Unable to find filter " + filter;
            return Twig.filters[filter].apply(this, [value, params])
        };
        Twig.filter.extend = function(filter, definition) {
            Twig.filters[filter] = definition
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        Twig.functions = {
            range: function(low, high, step) {
                var inival, endval, plus, matrix = [],
                    walker = step || 1,
                    chars = !1;
                if (isNaN(low) || isNaN(high))
                    if (isNaN(low) && isNaN(high)) {
                        chars = !0;
                        inival = low.charCodeAt(0);
                        endval = high.charCodeAt(0)
                    } else {
                        inival = isNaN(low) ? 0 : low;
                        endval = isNaN(high) ? 0 : high
                    }
                else {
                    inival = parseInt(low, 10);
                    endval = parseInt(high, 10)
                }
                plus = inival > endval ? !1 : !0;
                if (plus)
                    for (; endval >= inival;) {
                        matrix.push(chars ? String.fromCharCode(inival) : inival);
                        inival += walker
                    } else
                    for (; inival >= endval;) {
                        matrix.push(chars ? String.fromCharCode(inival) : inival);
                        inival -= walker
                    }
                return matrix
            },
            cycle: function(arr, i) {
                var pos = i % arr.length;
                return arr[pos]
            },
            dump: function() {
                var EOL = "\n",
                    indentChar = "  ",
                    indentTimes = 0,
                    out = "",
                    args = Array.prototype.slice.call(arguments),
                    indent = function(times) {
                        for (var ind = ""; times > 0;) {
                            times--;
                            ind += indentChar
                        }
                        return ind
                    },
                    displayVar = function(variable) {
                        out += indent(indentTimes);
                        "object" == typeof variable ? dumpVar(variable) : "function" == typeof variable ? out += "function()" + EOL : "string" == typeof variable ? out += "string(" + variable.length + ') "' + variable + '"' + EOL : "number" == typeof variable ? out += "number(" + variable + ")" + EOL : "boolean" == typeof variable && (out += "bool(" + variable + ")" + EOL)
                    },
                    dumpVar = function(variable) {
                        var i;
                        if (null === variable) out += "NULL" + EOL;
                        else if (void 0 === variable) out += "undefined" + EOL;
                        else if ("object" == typeof variable) {
                            out += indent(indentTimes) + typeof variable;
                            indentTimes++;
                            out += "(" + function(obj) {
                                    var key, size = 0;
                                    for (key in obj) obj.hasOwnProperty(key) && size++;
                                    return size
                                }(variable) + ") {" + EOL;
                            for (i in variable) {
                                out += indent(indentTimes) + "[" + i + "]=> " + EOL;
                                displayVar(variable[i])
                            }
                            indentTimes--;
                            out += indent(indentTimes) + "}" + EOL
                        } else displayVar(variable)
                    };
                0 == args.length && args.push(this.context);
                Twig.forEach(args, function(variable) {
                    dumpVar(variable)
                });
                return out
            },
            date: function(date, time) {
                var dateObj;
                if (void 0 === date) dateObj = new Date;
                else if (Twig.lib.is("Date", date)) dateObj = date;
                else if (Twig.lib.is("String", date)) dateObj = new Date(1e3 * Twig.lib.strtotime(date));
                else {
                    if (!Twig.lib.is("Number", date)) throw new Twig.Error("Unable to parse date " + date);
                    dateObj = new Date(1e3 * date)
                }
                return dateObj
            },
            block: function(block) {
                return this.blocks[block]
            },
            parent: function() {
                return Twig.placeholders.parent
            },
            attribute: function(object, method, params) {
                return object instanceof Object && object.hasOwnProperty(method) ? "function" == typeof object[method] ? object[method].apply(void 0, params) : object[method] : object[method] || void 0
            },
            template_from_string: function(template) {
                void 0 === template && (template = "");
                return new Twig.Template({
                    options: this.options,
                    data: template
                })
            },
            random: function(value) {
                function getRandomNumber(n) {
                    var random = Math.floor(Math.random() * LIMIT_INT31),
                        limits = [0, n],
                        min = Math.min.apply(null, limits),
                        max = Math.max.apply(null, limits);
                    return min + Math.floor((max - min + 1) * random / LIMIT_INT31)
                }
                var LIMIT_INT31 = 2147483648;
                if (Twig.lib.is("Number", value)) return getRandomNumber(value);
                if (Twig.lib.is("String", value)) return value.charAt(getRandomNumber(value.length - 1));
                if (Twig.lib.is("Array", value)) return value[getRandomNumber(value.length - 1)];
                if (Twig.lib.is("Object", value)) {
                    var keys = Object.keys(value);
                    return value[keys[getRandomNumber(keys.length - 1)]]
                }
                return getRandomNumber(LIMIT_INT31 - 1)
            }
        };
        Twig._function = function(_function, value, params) {
            if (!Twig.functions[_function]) throw "Unable to find function " + _function;
            return Twig.functions[_function](value, params)
        };
        Twig._function.extend = function(_function, definition) {
            Twig.functions[_function] = definition
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        "use strict";
        Twig.tests = {
            empty: function(value) {
                if (null === value || void 0 === value) return !0;
                if ("number" == typeof value) return !1;
                if (value.length && value.length > 0) return !1;
                for (var key in value)
                    if (value.hasOwnProperty(key)) return !1;
                return !0
            },
            odd: function(value) {
                return value % 2 === 1
            },
            even: function(value) {
                return value % 2 === 0
            },
            divisibleby: function(value, params) {
                return value % params[0] === 0
            },
            defined: function(value) {
                return void 0 !== value
            },
            none: function(value) {
                return null === value
            },
            "null": function(value) {
                return this.none(value)
            },
            sameas: function(value, params) {
                return value === params[0]
            }
        };
        Twig.test = function(test, value, params) {
            if (!Twig.tests[test]) throw "Test " + test + " is not defined.";
            return Twig.tests[test](value, params)
        };
        Twig.test.extend = function(test, definition) {
            Twig.tests[test] = definition
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        "use strict";
        Twig.exports = {
            VERSION: Twig.VERSION
        };
        Twig.exports.twig = function(params) {
            var id = params.id,
                options = {
                    strict_variables: params.strict_variables || !1,
                    autoescape: null != params.autoescape && params.autoescape || !1,
                    allowInlineIncludes: params.allowInlineIncludes || !1,
                    rethrow: params.rethrow || !1
                };
            id && Twig.validateId(id);
            void 0 !== params.debug && (Twig.debug = params.debug);
            void 0 !== params.trace && (Twig.trace = params.trace);
            if (void 0 !== params.data) return new Twig.Template({
                data: params.data,
                module: params.module,
                id: id,
                options: options
            });
            if (void 0 !== params.ref) {
                if (void 0 !== params.id) throw new Twig.Error("Both ref and id cannot be set on a twig.js template.");
                return Twig.Templates.load(params.ref)
            }
            return void 0 !== params.href ? Twig.Templates.loadRemote(params.href, {
                id: id,
                method: "ajax",
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options: options
            }, params.load, params.error) : void 0 !== params.path ? Twig.Templates.loadRemote(params.path, {
                id: id,
                method: "fs",
                base: params.base,
                module: params.module,
                precompiled: params.precompiled,
                async: params.async,
                options: options
            }, params.load, params.error) : void 0
        };
        Twig.exports.extendFilter = function(filter, definition) {
            Twig.filter.extend(filter, definition)
        };
        Twig.exports.extendFunction = function(fn, definition) {
            Twig._function.extend(fn, definition)
        };
        Twig.exports.extendTest = function(test, definition) {
            Twig.test.extend(test, definition)
        };
        Twig.exports.extendTag = function(definition) {
            Twig.logic.extend(definition)
        };
        Twig.exports.extend = function(fn) {
            fn(Twig)
        };
        Twig.exports.compile = function(markup, options) {
            var template, id = options.filename,
                path = options.filename;
            template = new Twig.Template({
                data: markup,
                path: path,
                id: id,
                options: options.settings["twig options"]
            });
            return function(context) {
                return template.render(context)
            }
        };
        Twig.exports.renderFile = function(path, options, fn) {
            if ("function" == typeof options) {
                fn = options;
                options = {}
            }
            options = options || {};
            var params = {
                    path: path,
                    base: options.settings.views,
                    load: function(template) {
                        fn(null, template.render(options))
                    }
                },
                view_options = options.settings["twig options"];
            if (view_options)
                for (var option in view_options) view_options.hasOwnProperty(option) && (params[option] = view_options[option]);
            Twig.exports.twig(params)
        };
        Twig.exports.__express = Twig.exports.renderFile;
        Twig.exports.cache = function(cache) {
            Twig.cache = cache
        };
        return Twig
    }(Twig || {}),
    Twig = function(Twig) {
        Twig.compiler = {
            module: {}
        };
        Twig.compiler.compile = function(template, options) {
            var output, tokens = JSON.stringify(template.tokens),
                id = template.id;
            if (options.module) {
                if (void 0 === Twig.compiler.module[options.module]) throw new Twig.Error("Unable to find module type " + options.module);
                output = Twig.compiler.module[options.module](id, tokens, options.twig)
            } else output = Twig.compiler.wrap(id, tokens);
            return output
        };
        Twig.compiler.module = {
            amd: function(id, tokens, pathToTwig) {
                return 'define(["' + pathToTwig + '"], function (Twig) {\n	var twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + "\n	return templates;\n});"
            },
            node: function(id, tokens) {
                return 'var twig = require("twig").twig;\nexports.template = ' + Twig.compiler.wrap(id, tokens)
            },
            cjs2: function(id, tokens, pathToTwig) {
                return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n	var twig = require("twig").twig;\n	exports.template = ' + Twig.compiler.wrap(id, tokens) + "\n});"
            }
        };
        Twig.compiler.wrap = function(id, tokens) {
            return 'twig({id:"' + id.replace('"', '\\"') + '", data:' + tokens + ", precompiled: true});\n"
        };
        return Twig
    }(Twig || {});
if ("undefined" != typeof module && module.declare) module.declare([], function(require, exports, module) {
    for (key in Twig.exports) Twig.exports.hasOwnProperty(key) && (exports[key] = Twig.exports[key])
});
else if ("function" == typeof ognyvo.define && ognyvo.define.amd) ognyvo.define("twig", [], function() {
    return Twig.exports
});
else if ("undefined" != typeof module && module.exports) module.exports = Twig.exports;
else {
    window.twig = Twig.exports.twig;
    window.Twig = Twig.exports
}! function(factory) {
    "function" == typeof ognyvo.define && ognyvo.define.amd ? ognyvo.define("jquery.timeago", ["jquery"], factory) : factory(jQuery)
}(function($) {
    function refresh() {
        var data = prepareData(this),
            $s = $t.settings;
        isNaN(data.datetime) || (0 == $s.cutoff || distance(data.datetime) < $s.cutoff) && $(this).text(inWords(data.datetime));
        return this
    }

    function prepareData(element) {
        element = $(element);
        if (!element.data("timeago")) {
            element.data("timeago", {
                datetime: $t.datetime(element)
            });
            var text = $.trim(element.text());
            $t.settings.localeTitle ? element.attr("title", element.data("timeago").datetime.toLocaleString()) : !(text.length > 0) || $t.isTime(element) && element.attr("title") || element.attr("title", text)
        }
        return element.data("timeago")
    }

    function inWords(date, limitToSwitch) {
        return $t.inWords(distance(date), date, limitToSwitch)
    }

    function distance(date) {
        return (new Date).getTime() - date.getTime()
    }
    $.timeago = function(timestamp, limitToSwitch) {
        return timestamp instanceof Date ? inWords(timestamp, limitToSwitch) : "string" == typeof timestamp ? inWords($.timeago.parse(timestamp), limitToSwitch) : "number" == typeof timestamp ? inWords(new Date(timestamp), limitToSwitch) : inWords($.timeago.datetime(timestamp), limitToSwitch)
    };
    var $t = $.timeago;
    $.extend($.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: "через",
                suffixAgo: "назад",
                suffixFromNow: null,
                seconds: "Только что",
                minute: "Минуту",
                minutes: function(value) {
                    return numpf(value, "%d минута", "%d минуты", "%d минут")
                },
                hour: "Час",
                hours: function(value) {
                    return numpf(value, "%d час", "%d часа", "%d часов")
                },
                day: "День",
                days: function(value) {
                    return numpf(value, "%d день", "%d дня", "%d дней")
                },
                month: "Месяц",
                months: function(value) {
                    return numpf(value, "%d месяц", "%d месяца", "%d месяцев")
                },
                year: "Год",
                years: function(value) {
                    return numpf(value, "%d год", "%d года", "%d лет")
                },
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(distanceMillis, stamp, limitToSwitch) {
            function substitute(stringOrFunction, number) {
                var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction,
                    value = $l.numbers && $l.numbers[number] || number;
                return string.replace(/%d/i, value)
            }
            limitToSwitch = limitToSwitch || 108e5;
            var d = new Date;
            if (distanceMillis > limitToSwitch) {
                console.log();
                var sd = new Date(stamp),
                    temp = "j F, H:i";
                sd.getFullYear() != d.getFullYear() && (temp = "j F Y, H:i");
                return $.timestampToString(stamp / 1e3, "ru", temp)
            }
            var $l = this.settings.strings,
                prefix = $l.prefixAgo,
                suffix = $l.suffixAgo;
            if (this.settings.allowFuture && 0 > distanceMillis) {
                prefix = $l.prefixFromNow;
                suffix = $l.suffixFromNow
            }
            var seconds = Math.abs(distanceMillis) / 1e3,
                minutes = seconds / 60,
                hours = minutes / 60,
                days = hours / 24,
                years = days / 365,
                words = 45 > seconds && substitute($l.seconds, Math.round(seconds)) || 90 > seconds && substitute($l.minute, 1) || 45 > minutes && substitute($l.minutes, Math.round(minutes)) || 90 > minutes && substitute($l.hour, 1) || 24 > hours && substitute($l.hours, Math.round(hours)) || 42 > hours && substitute($l.day, 1) || 30 > days && substitute($l.days, Math.round(days)) || 45 > days && substitute($l.month, 1) || 365 > days && substitute($l.months, Math.round(days / 30)) || 1.5 > years && substitute($l.year, 1) || substitute($l.years, Math.round(years)),
                separator = $l.wordSeparator || "";
            void 0 === $l.wordSeparator && (separator = " ");
            45 > seconds && (suffix = "");
            return $.trim([prefix, words, suffix].join(separator))
        },
        parse: function(iso8601) {
            var s = $.trim(iso8601);
            s = s.replace(/\.\d+/, "");
            s = s.replace(/-/, "/").replace(/-/, "/");
            s = s.replace(/T/, " ").replace(/Z/, " UTC");
            s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
            return new Date(s)
        },
        datetime: function(elem) {
            var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
            return $t.parse(iso8601)
        },
        isTime: function(elem) {
            return "time" === $(elem).get(0).tagName.toLowerCase()
        }
    });
    var functions = {
        init: function() {
            var refresh_el = $.proxy(refresh, this);
            refresh_el();
            var $s = $t.settings;
            $s.refreshMillis > 0 && setInterval(refresh_el, $s.refreshMillis)
        },
        update: function(time) {
            $(this).data("timeago", {
                datetime: $t.parse(time)
            });
            refresh.apply(this)
        },
        updateFromDOM: function() {
            $(this).data("timeago", {
                datetime: $t.parse($t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title"))
            });
            refresh.apply(this)
        }
    };
    $.fn.timeago = function(action, options) {
        var fn = action ? functions[action] : functions.init;
        if (!fn) throw new Error("Unknown function name '" + action + "' for timeago");
        this.each(function() {
            fn.call(this, options)
        });
        return this
    };
    document.createElement("abbr");
    document.createElement("time")
});
ognyvo.define("helper/TwigHelper", ["twig", "underscore", "jquery", "utils", "data.utils", "jquery.timeago"], function(Twig, _, $) {
    "use strict";
    var TwigUtils = {
            constant: function(constant_name) {
                return TwigHelper.constants.hasOwnProperty(constant_name) ? TwigHelper.constants[constant_name] : null
            },
            getHTMLProfileRoute: function(id) {
                return require("App").params.currentHost + "/" + id
            },
            timeago: function(stamp) {
                stamp = 1e3 * parseInt(stamp);
                return $.timeago(stamp)
            },
            timeToString: function(stamp, lang, format) {
                return $.timestampToString(parseInt(stamp), lang, format)
            },
            getImagePath: function(hash, type, width, height, defaultPath) {
                return $.extractImagePathFromHash(hash, type, width, height, defaultPath)
            },
            wordByNumber: function(number, declensions) {
                return $.wordByNumber(number, declensions)
            },
            size: function(object) {
                return _.size(object)
            },
            inArray: function(array, value) {
                return _.contains(array, value)
            },
            isArray: function(array) {
                return _.isArray(array)
            },
            showBanner: function(params) {
                var $el = $("<div></div>");
                $el.UReviveBanner(params);
                return $el.html()
            },
            cutText: function(html, max) {
                return $.cutText(html, max)
            },
            replaceLinks: function(text) {
                return $.replaceLinks(text)
            },
            generateEmbedVideo: function(link, width, height) {
                return $.generateEmbedVideo(link, width, height)
            },
            relativePath: function(path) {
                if (-1 != path.indexOf("@common_templates")) return path.replace("@common_templates", "asset/template");
                if (0 !== path.indexOf(".")) return path;
                var base = (this.rootId || this.id).replace(/\/[^\/]*?$/, "/");
                if (0 === path.indexOf("../"))
                    for (; 0 === path.indexOf("../");) {
                        base = this.id.replace(/\/[^\/]*?\/$/, "/");
                        path = path.replace("../", "")
                    } else 0 === path.indexOf("./") && (path = path.replace("./", ""));
                return base + path
            },
            showAnnounce: function(html) {
                return html
            }
        },
        TwigHelper = {
            constants: {
                "Club::DUMMY_DEFAULT_SMALL_AVATAR": "/img/void_club_s.png",
                "Club::DUMMY_DEFAULT_MEDIUM_AVATAR": "/img/void_club_m.png",
                "User::DUMMY_SMALL_AVATAR": "/img/void_ava_s.png",
                "User::DUMMY_MEDIUM_AVATAR": "/img/void_ava_m.png",
                "UserHelper::FRIENDSHIP_STATUS_FRIEND": 2,
                "UserHelper::FRIENDSHIP_STATUS_PENDING": 1,
                "UserHelper::FRIENDSHIP_STATUS_STRANGER": 0,
                "UserHelper::VIEW_FRIEND": "friend",
                "\\\\common\\\\components\\\\article\\\\Service::TYPE_THEME": 5,
                "\\\\common\\\\components\\\\qa\\\\Service::TYPE_THEME": 7,
                "\\\\common\\\\components\\\\qa\\\\Service::TYPE_ANSWER": 8,
                "\\\\common\\\\components\\\\publication\\\\Service::TYPE_ARTICLE": 5,
                "\\\\common\\\\components\\\\publication\\\\Service::TYPE_QA": 7
            },
            init: function(params) {
                Twig.extendFilter("serialize", function(obj) {
                    return JSON.stringify(obj)
                });
                Twig.extendFilter("serializeSafe", function(obj) {
                    function censor(key, value) {
                        if ("string" == typeof value) {
                            var str = $.encodeHtmlEntity(value);
                            return str
                        }
                        return value
                    }
                    var str = JSON.stringify(obj, censor);
                    str = str.replace(/\"/gi, "'");
                    return str
                });
                Twig.extendFilter("indexOf", function(obj, string) {
                    return obj.indexOf(string)
                });
                Twig.extendFilter("substring", function(string, fromTo) {
                    return String.prototype.substring.apply(string, fromTo)
                });
                Twig.extendFilter("substr", function(string, fromLen) {
                    return String.prototype.substr.apply(string, fromLen)
                });
                Twig.extendFilter("parseInt", function(string) {
                    return parseInt(string)
                });
                Twig.extendFilter("raw", function(string) {
                    return string
                });
                Twig.extendFilter("replaceLinks", function(text) {
                    return $.replaceLinks(text)
                });
                Twig.extendFilter("filterText", function(text) {
                    return $.stripTags(text)
                });
                Twig.extendFilter("dateTime", function(stamp) {
                    return $.timestampToString(parseInt(stamp), $.LANG.RUSSIAN, "d F Y, H:i")
                });
                Twig.extendFilter("replaceText", function(text, find, place) {
                    return text.replace(find, place)
                });
                Twig.extendFunction("getImagePath", function(hash, type, width, height, defaultPath) {
                    return (require("App").params.currentDomain ? require("App").params.currentDomain : "") + TwigUtils.getImagePath(hash, type, width, height, defaultPath)
                });
                Twig.extendFunction("constant", function(name) {
                    return TwigUtils.constant(name)
                });
                Twig.extendFunction("beginDynamic", function(context) {});
                Twig.extendFunction("endDynamic", function(context) {});
                Twig.extendFunction("getGlobal", function() {
                    return require("App").params
                });
                Twig.extendFunction("f", function(name, param1, param2, param3) {
                    var params = [].slice.call(arguments, 1);
                    if (!TwigUtils[name]) return null;
                    var result = TwigUtils[name].apply(this, params);
                    return result
                });
                Twig.extendFunction("widget", function(name, params) {
                    name = name.replace(/\\\\/gi, "/") + "/WidgetView";
                    return '<div data-params="{&quot;noRenderOnStart&quot;:false}" data-module="' + name + '"></div>'
                })
            }
        };
    return TwigHelper
});
ognyvo.define("service/ApiService", ["jquery", "underscore", "helper/window"], function($, _, window) {
    "use strict";
    var ApiService = {
        api: function(url, data, successCallback, errorCallback, failCallback) {
            var apiUrl = url;
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: !0
                }
            });
            console.log("*S* API [%s] Sending: %O", url, JSON.stringify(data));
            $.ajax(url, {
                data: data,
                dataType: "json",
                type: "POST"
            }).done(function(data) {
                if (data && _.isNumber(data.status) && data.response)
                    if (-1 == $.inArray(parseInt(data.status), [500, 501, 502, 503, 504, 505, 506, 507, 509, 510, 511])) {
                        console.log("*S* API [%s] Success: %O", apiUrl, JSON.stringify(data.response));
                        successCallback && successCallback(data.response, data.status)
                    } else {
                        console.log("*S* API [%s] Error: ", apiUrl, JSON.stringify(data));
                        errorCallback && errorCallback(data.response, data.status)
                    }
                else ApiService.onFail(data, apiUrl, failCallback)
            }).fail(function(jqXHR, textStatus) {
                window && window.logError && window.logError("Can't connect API [" + apiUrl + "]", "service/ApiService", 49);
                ApiService.onFail(jqXHR, apiUrl, failCallback || errorCallback)
            })
        },
        onFail: function(data, url, callback) {
            console.log("*S* API [%s] Failed: %O", url, JSON.stringify(data));
            callback && callback(data)
        }
    };
    return ApiService
});
var API_2 = window.jsDebug ? "http://" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") : "",
    API_HOST = window.jsDebug ? "https://" + window.location.hostname : "",
    ADMIN_API_HOST = window.jsDebug ? "http://" + window.location.hostname + ":91/api" : "/api",
    ADMIN_HOST = window.jsDebug ? "http://" + window.location.hostname + ":91/" : "/";
ognyvo.define("settings", {
    API: {
        HOST: API_2,
        ADMIN_HOST: ADMIN_API_HOST,
        SHOW_STATISTIC: API_2 + "/teaser/statistic",
        ARTICLE: {
            VOTE: API_2 + "/auto/wiki/vote/",
            TAGS: API_2 + "/tags/search"
        },
        QA: {
            VOTE: API_2 + "/auto/qa/vote/",
            SAVE_QUESTION: API_2 + "/auto/qa/save/",
            SAVE_ANSWER: API_2 + "/auto/qa/save_answer/",
            REMOVE_ANSWER: API_2 + "/auto/qa/remove_answer/"
        },
        PUBLICATION: {
            VOTE: API_2 + "/auto/all/vote/"
        },
        SERVICE: {
            ENROLL: "/auto/autoservices/request/"
        },
        CLIENT_COMPANY: {
            CLIENT: "/user/list/",
            COMPANY: "/company/list/"
        },
        REGION: {
            COUNTRIES: "/region/index/",
            REGIONS: "/region/index/?type=region",
            CITIES: "/region/index/?type=city"
        },
        CAR: {
            MARKS: "/auto/car/marks/",
            MODELS: "/auto/car/models/",
            GENERATIONS: "/auto/car/generations/",
            MODIFICATIONS: "/auto/car/modifications/"
        },
        COMMON: {
            UPLOAD_IMAGE: "/upload/default/index/",
            SEARCH: "/auto/all/dropdown/",
            PARSE_LINK: "/upload/url/index/"
        },
        ADMIN: {
            ARTICLE: {
                CATEGORIES: "/articles/list/subjects?parent_id=",
                APPLY_LIST_ACTION: "/articles/list/apply_action",
                SAVE_COVER: "/teaser/savecover/",
                SAVE_IMAGE: "/articles/single/save_image",
                REMOVE_COVER: "/articles/single/remove_cover",
                TAGS: ADMIN_HOST + "/articles/list/tags/"
            },
            QUESTION: {
                SELECT_EXPERT: "/auto/qa/switchexpert/",
                GET_QUESTION: "/auto/qa/takeqa/",
                BAD_QUESTION: "/auto/qa/setflag/",
                EXECUTE_QUESTIONS: "/auto/qa/executionqa/"
            }
        },
        TEASER: {
            RB: {
                SAVE: "/rb/save/"
            }
        }
    },
    APP: {
        SOUND: {
            CHAT_MESSAGE: "/sound/chat_message.mp3",
            NOTIFY: "/sound/notify.mp3"
        }
    },
    statistic: {
        google: {
            id: 0
        },
        yandex: {
            id: 33911579
        },
        yandexPetrika: {
            id: 25535501
        }
    },
    api: {
        blamper: {
            utils: {
                keepAliveUrl: API_HOST + "/user/ping"
            },
            auth: {
                signupUrl: API_HOST + "/user/registration",
                signinUrl: API_HOST + "/user/login",
                signoutUrl: API_HOST + "/user/logout",
                passwordRecoveryUrl: API_HOST + "/user/recovery/",
                socialServerAuthUrl: "/user/socialLogin/?provider=#network#",
                socialUnbindUrl: API_HOST + "/user/socialUnbind/",
                socialRegistrationUrl: API_HOST + "/user/socialRegistration/",
                carRegistrationUrl: API_HOST + "/user/step2/",
                signinStep2Url: API_HOST + "/user/step2/",
                rareCarRegistrationUrl: API_HOST + "/user/uniqueCar/",
                changePasswordUrl: API_HOST + "/user/updateProfile/",
                collectEmailUrl: API_HOST + "/collect/email/"
            },
            user: {
                saveUserDataUrl: API_HOST + "/user/updateProfile/",
                closeProfileWidgetUrl: API_HOST + "/user/closeStep/",
                badgeWidgetUrl: API_HOST + "/badge/profile/"
            },
            geo: {
                region: API_HOST + "/geo/regions/",
                city: API_HOST + "/geo/cities/"
            },
            media: {
                uploadUrl: API_HOST + "/file/upload/index/?field=upload",
                deleteUrl: API_HOST + "/media/delete/",
                cropUrl: API_HOST + "/file/upload/steady/",
                grabYoutubeUrl: API_HOST + "/media/youtube",
                grabTwitterUrl: API_HOST + "/media/twitter",
                grabInstagramUrl: API_HOST + "/media/instagram"
            },
            car: {
                brandListUrl: API_HOST + "/catalog/auto/mark/",
                modelListUrl: API_HOST + "/catalog/auto/model/",
                generationListUrl: API_HOST + "/catalog/auto/generations/",
                yearListUrl: API_HOST + "/catalog/auto/model/",
                modificationListUrl: API_HOST + "/catalog/auto/modification/",
                modificationListByListUrl: API_HOST + "/catalog/auto/modifications/",
                wheelBrandListUrl: API_HOST + "/tabletires/marks/",
                wheelModelListUrl: API_HOST + "/tabletires/models/?mark=<%=mark%>",
                wheelYearListUrl: API_HOST + "/tabletires/years/?mark=<%=mark%>&model=<%=model%>",
                wheelModificationListUrl: API_HOST + "/tabletires/Modification/?mark=<%=mark%>&model=<%=model%>&year=<%=year%>",
                updateCarUrl: API_HOST + "/usercar/updatecar/",
                updateCarTechUrl: API_HOST + "/usercar/updatetech/",
                updateCarInfoUrl: API_HOST + "/usercar/updatecommon/",
                removeCarUrl: API_HOST + "/usercar/remove/",
                saveSelectedWheel: API_HOST + "/tabletires/save",
                saveMileage: API_HOST + "/manual/mileage",
                techModificationUrl: API_HOST + "/manual/GetTechTable"
            },
            chat: {
                sendMessageUrl: API_HOST + "/message/send/",
                conversationListUrl: API_HOST + "/message/dialogs/",
                createConversationUrl: API_HOST + "/message/to/",
                removeConversationUrl: API_HOST + "/message/removedialog/",
                claimConversationUrl: API_HOST + "/message/claimdialog/",
                banConversationUrl: API_HOST + "/message/bandialog/",
                messageFeedUrl: API_HOST + "/message/messagescursor/",
                lastMessagesUrl: API_HOST + "/message/messages/",
                removeMessageUrl: API_HOST + "/message/removemessage/",
                claimMessageUrl: API_HOST + "/message/claimdialog/",
                readMessageUrl: API_HOST + "/message/read/"
            },
            search: {
                generalUrl: API_HOST + "/search/common",
                usersUrl: API_HOST + "/search/users",
                clubsUrl: API_HOST + "/search/clubs",
                basesUrl: API_HOST + "/search/base",
                publicationsUrl: API_HOST + "/search/publications",
                discussionsUrl: API_HOST + "/search/discussions",
                autoUrl: API_HOST + "/search/auto"
            },
            post: {
                sendUrl: API_HOST + "/post/post",
                listLineUrl: API_HOST + "/post/line/",
                feedUrl: API_HOST + "/post/feedline/",
                switchPostTopUrl: API_HOST + "/post/switchtop/",
                removeUrl: API_HOST + "/post/PostRemove/",
                removeFromFeedUrl: API_HOST + "/post/RemoveFeed/",
                hideAuthorsPostsUrl: API_HOST + "/post/hide/",
                hideAuthorsFromFeedUrl: API_HOST + "/post/hidefeed/",
                blockUrl: API_HOST + "/post/PostClose/",
                likeUrl: API_HOST + "/post/Like/",
                subscribeUrl: API_HOST + "/post/subscribe",
                addCommentUrl: API_HOST + "/post/Comment/",
                removeCommentUrl: API_HOST + "/post/CommentRemove/",
                removeQaCommentUrl: API_HOST + "/qa/CommentQaRemove/",
                likeCommentUrl: API_HOST + "/post/LikeComment/",
                claimContentUrl: API_HOST + "/post/Complain/",
                getCommentsUrl: API_HOST + "/post/commentsline/",
                getCommentsQaUrl: API_HOST + "/qa/comments/",
                getLikersUrl: API_HOST + "/post/Likers/",
                getCommentLikersUrl: API_HOST + "/post/CommentLikers/",
                getPostUrl: API_HOST + "/post/one/",
                parseUrl: API_HOST + "/post/url/",
                feedAllUrl: API_HOST + "/stream/"
            },
            friends: {
                banUrl: API_HOST + "/relation/blacklist/",
                addUrl: API_HOST + "/relation/friend/",
                rejectUrl: API_HOST + "/relation/rejectFriend/",
                filterUrl: API_HOST + "/relation/friendFilter/",
                getEmailFriendsUrl: API_HOST + "/invite/collectemailcontacts",
                emailRequestUrl: API_HOST + "/invite/invitefriendsbyemails",
                list: API_HOST + "/relation/friends",
                requests: API_HOST + "/relation/requests",
                blackList: API_HOST + "/relation/blacklist"
            },
            club: {
                createClubUrl: API_HOST + "/company/add/",
                updateProfileUrl: API_HOST + "/clubs/editProfile/",
                updatePrivacyUrl: API_HOST + "/clubs/editPrivacy/",
                postPublishUrl: API_HOST + "/clubs/post/",
                postLineUrl: API_HOST + "/clubs/line/",
                inviteUrl: API_HOST + "/clubs/invite/",
                joinUrl: API_HOST + "/clubs/join/",
                leaveUrl: API_HOST + "/clubs/out/",
                banUrl: API_HOST + "/clubs/addBl/",
                approveUrl: API_HOST + "/clubs/approve/",
                addParticipantUrl: API_HOST + "/clubs/makeMember/",
                addModeratorUrl: API_HOST + "/clubs/makeModer/",
                addAdminUrl: API_HOST + "/clubs/makeAdmin/",
                removeFromClubUrl: API_HOST + "/clubs/remove/",
                userFilter: API_HOST + "/clubs/getUsers/",
                clubListWithAlbumsUrl: API_HOST + "/clubs/getClubList/",
                clubFilter: API_HOST + "/company/index/",
                saveMakeupUrl: API_HOST + "/clubs/performtype/",
                removeMakeupUrl: API_HOST + "/clubs/cleanperform",
                setMakeupUrl: API_HOST + "/clubs/perform/",
                members: API_HOST + "/clubs/members",
                moderators: API_HOST + "/clubs/moderators",
                admins: API_HOST + "/clubs/admins",
                badgeUrl: API_HOST + "/badge"
            },
            photo: {
                createAlbumUrl: API_HOST + "/albums/create/",
                updateAlbumUrl: API_HOST + "/albums/update/",
                removeAlbumUrl: API_HOST + "/albums/delete/",
                getClubsAlbumsUrl: API_HOST + "/albums/",
                getAlbumsUrl: API_HOST + "/albums/",
                getAlbumImagesUrl: API_HOST + "/albums/userview/",
                getClubAlbumImagesUrl: API_HOST + "/albums/clubview/",
                getPrivacyTypesUrl: API_HOST + "/albums/privacy",
                describeUrl: API_HOST + "/photo/description/",
                getCommentsUrl: API_HOST + "/photo/CommentLine/",
                removeCommentUrl: API_HOST + "/photo/CommentRemove/",
                addCommentUrl: API_HOST + "/photo/Comment/",
                photoLikersUrl: API_HOST + "/photo/Likers/",
                commentLikersUrl: API_HOST + "/photo/CommentLikers/",
                likeUrl: API_HOST + "/photo/Like/",
                removeUrl: API_HOST + "/photo/delete/",
                likeCommentUrl: API_HOST + "/photo/CommentLike/",
                blockCommentsUrl: API_HOST + "/photo/close/",
                setAlbumCoverUrl: API_HOST + "/photo/setcover",
                setProfileCoverUrl: API_HOST + "/photo/setprofilecover"
            },
            qa: {
                answerUrl: API_HOST + "/qa/answer",
                getAnswersUrl: API_HOST + "/qa/answers",
                askQuestionUrl: API_HOST + "/qa/question",
                getQuestionsUrl: API_HOST + "/qa",
                answerCommentUrl: API_HOST + "/qa/comment/",
                loadCommenstUrl: API_HOST + "/qa/comments/",
                likersUrl: API_HOST + "/qa/likers",
                likeUrl: API_HOST + "/qa/like",
                subscribeUrl: API_HOST + "/qa/subscribe",
                bestUrl: API_HOST + "/qa/best",
                closeUrl: API_HOST + "/qa/close",
                removeUrl: API_HOST + "/qa/remove",
                completeUrl: API_HOST + "/qa/complete",
                setActiveExpertUrl: API_HOST + "/user/ActiveExpert",
                referQuestionUrl: API_HOST + "/user/ReferQuestion"
            },
            forum: {
                createDicussionUrl: API_HOST + "/forum/post/",
                draftDicussionUrl: API_HOST + "/forum/postTmp/",
                postPublishForumUrl: API_HOST + "/forum/postAnswer/",
                getChilrenCategoriesUrl: API_HOST + "/forum/cat/",
                hideCategoryUrl: API_HOST + "/forum/catAct/",
                removeDiscussionUrl: API_HOST + "/forum/remove/",
                blockCommentsUrl: API_HOST + "/forum/CloseComments/",
                likeTopicUrl: API_HOST + "/forum/like/",
                closeTopicUrl: API_HOST + "/forum/close/",
                blockUrl: API_HOST + "/forum/PostClose/",
                getUserTopicListUrl: API_HOST + "/forum/UserLine/",
                getTopicListUrl: API_HOST + "/search/discussions/",
                getAnswersUrl: API_HOST + "/forum/lineAnswer/",
                setBestAnswerUrl: API_HOST + "/forum/answerGood/",
                removeAnswerUrl: API_HOST + "/forum/answerRemove/",
                postAnswerUrl: API_HOST + "/forum/postAnswer/",
                voteUrl: API_HOST + "/forum/poll/",
                getVotersUrl: API_HOST + "/forum/pollLine/"
            },
            article: {
                editUrl: API_HOST + "/articles/post/",
                getArticlesUrl: API_HOST + "/articles/line/",
                getUserArticlesUrl: API_HOST + "/articles/line/",
                likeUrl: API_HOST + "/articles/like/",
                removeUrl: API_HOST + "/articles/remove/",
                claimUrl: API_HOST + "/articles/claim/",
                blockUrl: API_HOST + "/articles/close/",
                switchVisibilityUrl: API_HOST + "/articles/visible/",
                reportBugUrl: API_HOST + "/articles/report/",
                getCommentsUrl: API_HOST + "/articles/answerLine/",
                publishCommentUrl: API_HOST + "/articles/postAnswer/",
                getLikersUrl: API_HOST + "/articles/Likers/",
                getTitlesUrl: API_HOST + "/articles/title/",
                getTagsUrl: API_HOST + "/articles/list/tags/",
                saveManual: API_HOST + "/manual/post/"
            },
            kb: {
                getArticlesUrl: API_HOST + "/articles/wiki20/",
                getReviewsUrl: API_HOST + "/auto/review/",
                modificationInfoUrl: API_HOST + "/auto/switchBody"
            },
            notification: {
                getUrl: API_HOST + "/notify/",
                removeUrl: API_HOST + "/notify/requestclear",
                clearUrl: API_HOST + "/notify/clear"
            },
            addon: {
                race: {
                    inviteUrl: API_HOST + "/drag/invite",
                    syncUrl: API_HOST + "/drag",
                    isWinUrl: API_HOST + "/notify/requestclear"
                }
            },
            tests: {
                questions: API_HOST + "/tests"
            },
            common: {
                trackBannerUrl: API_HOST + "/jserror/derectlog",
                saveShareUrl: API_HOST + "/saveshare"
            }
        },
        facebook: {
            appId: "644789902202852",
            channelUrl: "/channel.html"
        },
        vkontakte: {
            apiId: 3601843
        },
        google: {
            apiKey: "AIzaSyBM6nsID6HY07RTRR4LOnUIg7DbdiDOkEg",
            clientId: "354275714469.apps.googleusercontent.com",
            scopes: "https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email"
        },
        mailru: {
            reciever: "/receiver.html",
            clientId: "705531",
            privateKey: "ea100b7e175c121849fc3385cc739b85",
            sdkUrl: "http://cdn.connect.mail.ru/js/loader.js"
        },
        odnoklassniki: {
            host: "www.odnoklassniki.ru",
            sdkUrl: "http://www.odnoklassniki.ru/oauth/resources.do?type=js",
            reciever: "/_ok_receiver.html",
            appId: "173090048",
            privateKey: "CBAGCCFLABABABABA"
        },
        twitter: {
            consumerKey: "2aveI7TEk3xoISpxYXHGDw",
            requestUrl: "https://api.twitter.com/oauth/request_token",
            authUrl: "https://api.twitter.com/oauth/authorize",
            tokenUrl: "https://api.twitter.com/oauth/access_token"
        }
    }
});
ognyvo.define("service/StatisticsProxy", ["helper/AppConsts", "helper/window", "settings"], function(AppConsts, window, Settings) {
    "use strict";
    var StatisticsProxy = {
        init: function(vent) {
            ognyvo.require(["metrika"], function() {
                console.log("-=METRIKA LOADED=-")
            });
            vent.on(AppConsts.EVENT.STATISTIC.TRACK, StatisticsProxy.onTrackEvent, this)
        },
        sendEvent: function(data) {
            if (data) {
                if (data.provider && data.provider != AppConsts.TYPE.STATISTIC.YANDEX.PROVIDER) StatisticsProxy.sendYandexMetric(data);
                else {
                    StatisticsProxy.sendYandexMetric(data);
                    if (data.provider) return
                }
                StatisticsProxy.sendGoogleAnalytics(data)
            }
        },
        onTrackEvent: function(data) {
            this.sendEvent(data)
        },
        sendYandexMetric: function(data) {
            var ym = window["yaCounter" + Settings.statistic.yandex.id];
            if (!ym || !ym.reachGoal) {
                console.log("<<<<<<<<< !!!! NO YANDEX METRIKA OBJECT [yaCounter" + Settings.statistic.yandex.id + "], TRYING TO SUBSCRIBE YANDEX CALLBACK FOR EVENT: ", data.event);
                ! function(d, w, c) {
                    (w[c] = w[c] || []).push(function() {
                        try {
                            var ym = window["yaCounter" + Settings.statistic.yandex.id];
                            ym.reachGoal(data.event)
                        } catch (e) {
                            throw new Error("<<<<<<<<< !!!! *** FATAL NO YANDEX METRIKA OBJECT [yaCounter" + Settings.statistic.yandex.id + "] FOR EVENT: " + data.event)
                        }
                    })
                }(document, window, "yandex_metrika_callbacks");
                ! function(d, w, c) {
                    (w[c] = w[c] || []).push(function() {
                        try {
                            var ym = window["yaCounter" + Settings.statistic.yandexPetrika.id];
                            ym.reachGoal(data.event)
                        } catch (e) {
                            throw new Error("<<<<<<<<< !!!! *** FATAL NO YANDEX PETRIKA OBJECT [yaCounter" + Settings.statistic.yandexPetrika.id + "] FOR EVENT: " + data.event)
                        }
                    })
                }(document, window, "yandex_petrika_callbacks");
                return !1
            }
            console.log("<<<<<<<<< YANDEX REACH GOAL: ", data.event);
            ym.reachGoal(data.event);
            return !0
        },
        sendGoogleAnalytics: function(data) {
            var ga = window.ga;
            if (!data || !ga) {
                console.log("<<<<<<<<< !!!! GOOGLE NO DATA TO REACH THE GOAL");
                return !1
            }
            var params = {
                hitType: data.type || "event"
            };
            data.group && (params.eventCategory = data.group);
            data.event && (params.eventAction = data.event);
            data.extra && (params.eventLabel = data.extra);
            data.value && (params.eventValue = data.value);
            data.callbackTimeout && setTimeout(function() {
                params.hitCallback && data.failCallback && data.failCallback()
            }, data.callbackTimeout);
            data.callback && (params.hitCallback = function(params) {
                params.hitCallback = null;
                data.callback.apply(this, arguments)
            });
            console.log("<<<<<<<<< GOOGLE REACH GOAL: ", data.event);
            ga("send", params);
            return !0
        },
        sendOptimizelyAnalytics: function(data) {
            var op = Optimizely;
            if (!data || !op) return !1;
            op.push([data.type, data.event]);
            return !0
        }
    };
    return StatisticsProxy
});
ognyvo.define("abstract/view/AbstractItemView", ["marionette", "jquery", "underscore", "helper/AppConsts"], function(Marionette, $, _, AppConsts) {
    "use strict";
    var delegateEventSplitter = /^(\S+)\s*(.*)$/,
        AbstractItemView = Marionette.ItemView.extend({
            autoParsingParams: !0,
            firstRender: !0,
            inited: !1,
            useNativeRender: !0,
            noRenderOnStart: !1,
            onlyDecorator: !1,
            bindUI: {},
            ventEvents: {},
            backupHtml: null,
            inputParams: {},
            eventNamespace: "",
            twigRenderer: !0,
            rendered: !1,
            moduleEvents: {},
            analytics: {},
            onAnalyticEvent: function(data, e) {
                var $el = $(e.currentTarget);
                if ($(e.target).parents(".seedr-player").length) return !0;
                $el.data("stopevent") && e.preventDefault();
                var url = $el.data("url");
                url ? require("App").sendAnalyticsWithRedirect(data, url) : require("App").sendAnalytics(data)
            },
            delegateAnalytics: function(events) {
                if (!events && !(events = _.result(this, "analytics"))) return this;
                var that = this;
                for (var key in events) events[key] && ! function() {
                    var ev = events[key],
                        method = function(e) {
                            return that.onAnalyticEvent.apply(that, _.union([ev], Array.prototype.slice.call(arguments, 0)))
                        },
                        match = key.match(delegateEventSplitter),
                        eventName = match[1],
                        selector = match[2];
                    method = _.bind(method, that);
                    eventName += ".delegateEvents" + that.cid;
                    "" === selector ? that.$el.on(eventName, method) : that.$el.on(eventName, selector, method)
                }();
                return this
            },
            constructor: function(params) {
                this.inputParams = params;
                this.autoParsingParams && this.parseParamsToVars(params);
                if (this.modelClass) {
                    var mo = {
                        eventNamespace: this.eventNamespace
                    };
                    this.model = new this.modelClass(null, mo)
                }
                this.parseParams(params);
                Marionette.ItemView.prototype.constructor.apply(this, arguments);
                this.delegateAnalytics(this.analytics);
                _.bindAll(this, "onNeedDestroy");
                this.$el.on("DestroyModule", this.onNeedDestroy);
                this.$el.on("DomUpdated", this.onDomUpdated);
                var that = this;
                $.isReady ? this.onReady() : $(function() {
                    that.onReady.call(that)
                });
                if (this.bindModel) {
                    this.bindUI = this.$el.find("[data-bind]").each(function() {
                        var $el = $(this);
                        that.bindUI[$el.data("bind")] = $el
                    });
                    require("App").vent.on("System:Model:SyncModel:" + this.bindModel, this.onSyncBindModel, this)
                }
                this.subscribeExportImport();
                this.addVentEvent(AppConsts.EVENT.SYSTEM.MODULES_LOADED, this.onInitModulesLoaded, this.eventNamespace)
            },
            bindUIElements: function() {
                var eventNamespace = this.$el.data("namespace");
                eventNamespace && (this.eventNamespace = eventNamespace);
                Marionette.ItemView.prototype.bindUIElements.apply(this, arguments)
            },
            triggerModule: function(event, data) {
                this.moduleEvents && this.moduleEvents[event] && this[this.moduleEvents[event]] && _.isFunction(this[this.moduleEvents[event]]) && this[this.moduleEvents[event]](data)
            },
            getPubSub: function(namespace) {
                var vent;
                vent = namespace || "" !== namespace && this.eventNamespace ? require("App").getEventSpace(namespace || this.eventNamespace) : require("App").vent;
                return vent
            },
            changeEventNamespace: function(namespace) {
                this.eventNamespace = namespace
            },
            triggerDomNestedModules: function(event, data) {
                return this.$el.UTriggerChildModules(event, data)
            },
            pubNS: function(namespace, event, data) {
                var vent = this.getPubSub(namespace);
                if (!vent) throw new Error("No event space for publishing event: " + event);
                vent.trigger.apply(vent, [].slice.call(arguments, 1))
            },
            pub: function(event, data) {
                var vent = this.getPubSub();
                if (!vent) throw new Error("No event space for publishing event: " + event);
                vent.trigger.apply(vent, arguments)
            },
            redirect: function(url, hash, noRefresh, title, timeout, showPreloader) {
                var App = require("App");
                require("App").redirect.apply(App, arguments)
            },
            callServer: function(url, data, options) {
                require("App").callServerApi(url, data, options)
            },
            addVentEvent: function(event, callback, namespace) {
                var vent = this.getPubSub(namespace);
                if (!vent) throw new Error("No event space for subscribing event: " + event);
                this.ventEvents[event] = callback;
                vent.on(event, callback, this)
            },
            initialize: function(params) {
                this.bindVentEvents();
                if (!this.template || this.noRenderOnStart) {
                    this.bindUIElements();
                    this.init()
                } else this.render();
                this.inited = !0
            },
            bindVentEvents: function() {
                if (this.ventEvents) {
                    var f;
                    for (var i in this.ventEvents) {
                        f = this[this.ventEvents[i]];
                        f && _.isFunction(f) && this.addVentEvent(i, this[this.ventEvents[i]])
                    }
                }
            },
            parseParamsToVars: function(params) {
                for (var i in params) this[i] = params[i]
            },
            parseParams: function(params) {
                if (!params) return !1;
                var res = this.parseInputParams(params);
                return res !== !1 ? !0 : !1
            },
            parseInputParams: function(params) {
                return !0
            },
            init: function() {},
            onNeedExportView: function(html, data) {
                this.exportHtmlAndData()
            },
            getName: function() {
                return this.name || (this.model ? this.model.name : "")
            },
            subscribeExportImport: function() {
                var name = this.getName();
                if (name) {
                    this.addVentEvent("IMPORT_VIEW:" + name, this.onImportView);
                    this.addVentEvent(AppConsts.EVENT.SYSTEM.NEED_EXPORT_VIEWS, this.onNeedExportView)
                }
            },
            exportHtmlAndData: function() {
                this.pubNS(this.eventNamespace, AppConsts.EVENT.SYSTEM.EXPORT_VIEW, this.getName(), this.$el.html(), _.clone(this.model.attributes))
            },
            importView: function(html, data) {
                this.model.set(data);
                this.$el.html(html);
                this.bindUIElements();
                require("App").parser.parse(this.$el.children())
            },
            onImportView: function(html, data) {
                this.importView(html, data)
            },
            doRender: function() {
                this.twigRenderer;
                var render = Marionette.ItemView.prototype.render.apply(this, arguments);
                this.backupView();
                this.rendered = !0;
                return render
            },
            render: function() {
                if (this.useNativeRender) return this.doRender();
                var render = this.customRender();
                this.backupView();
                return render
            },
            reRender: function() {
                if (this.useNativeRender) return this.doRender();
                this.customRender({
                    processHtmlCallback: this.processHtmlForRerender
                });
                this.backupView()
            },
            backupView: function() {
                this.backupHtml = this.$el.html()
            },
            customRender: function(options) {
                this.isClosed = !1;
                this.triggerMethod("before:render", this);
                this.triggerMethod("item:before:render", this);
                var data = this.serializeData();
                data = this.mixinTemplateHelpers(data);
                var template = this.getTemplate(),
                    html = Marionette.Renderer.render(template, data);
                options && options.processHtmlCallback && _.isFunction(options.processHtmlCallback) ? options.processHtmlCallback(html) : this.processHtml(html);
                this.bindUIElements();
                this.triggerMethod("render", this);
                this.triggerMethod("item:rendered", this);
                return this
            },
            processHtml: function(html) {
                this.setElement($(html))
            },
            processHtmlForRerender: function(html) {
                html = $(html).children();
                this.$el.html(html)
            },
            onRender: function() {
                this.inited || this.init();
                this.firstRender = !1
            },
            onDomUpdated: function($el) {
                this.unbindUIElements();
                this.bindUIElements()
            },
            onNeedDestroy: function(el) {
                if (this.el != el) return !1;
                this.close();
                return !0
            },
            onReady: function() {},
            onInitModulesLoaded: function() {},
            onSyncBindModel: function(changed) {
                if (this.bindUI)
                    for (var i in changed) this.bindUI[i] && this.bindUI[i].html(changed[i])
            }
        });
    return AbstractItemView
});
ognyvo.define("abstract/view/popup/BasicPopupView", ["abstract/view/AbstractItemView", "underscore", "jquery"], function(AbstractItemView, _, $) {
    "use strict";
    var BasicPopupView = AbstractItemView.extend({
        $caller: null,
        $callers: null,
        preventFromAutoDestroy: !1,
        useGlobalLoading: !1,
        localLoader: null,
        used: !1,
        showing: !1,
        $title: null,
        jscrollSettings: {
            autoReinitialise: !0,
            verticalDragMinHeight: 20
        },
        popupOptions: ["template", "$caller", "$callers"],
        setOnTop: function() {},
        constructor: function(params) {
            this.configure(params);
            AbstractItemView.prototype.constructor.apply(this, arguments)
        },
        configure: function(options) {
            options || (options = {});
            this.options && (options = _.extend({}, _.result(this, "options"), options));
            _.extend(this, _.pick(options, this.popupOptions));
            this.options = options
        },
        initialize: function(params) {
            _.bindAll(this, "onFancyClosed", "onCloseClick", "onCloseCheckboxClick");
            this.$title = this.$el.find(".js-popup-title");
            AbstractItemView.prototype.initialize.apply(this, arguments);
            this.parseParams(params);
            this.initProcess()
        },
        parseParams: function(params) {
            return params ? !0 : !1
        },
        start: function() {
            this.$el.on("click", ".js-close-checkbox", this.onCloseCheckboxClick).on("click", ".js-popup-close", this.onCloseClick).on("click", ".js-cancel-button", this.onCloseClick);
            if (this.used) {
                this.isClosed = !1;
                this.bindUIElements();
                this.delegateEvents()
            }
        },
        extendCallerParams: function(data) {
            if (!this.$caller) return !1;
            var params = $.extend(this.$caller.attr("data-params"), data);
            this.setCallerParams(params)
        },
        setCallerParams: function(data) {
            if (!this.$caller) return !1;
            this.$caller.data("params", data)
        },
        hide: function() {
            this.closeProcess();
            this.$el.find(".js-popup-block").removeClass("b-popup__anim-in").addClass("b-popup__anim-out");
            var that = this;
            setTimeout(function() {
                that.$el.remove()
            }, 400)
        },
        destroy: function() {
            this.hideLoading();
            this.hideGlobalLoading();
            this.showing = !1;
            this.unbindUIElements();
            this.$el.off("click");
            this.hide()
        },
        hideDelay: function(delay) {
            var _this = this;
            _.isNumber(delay) || (delay = 2e3);
            setTimeout(function() {
                _this.hide.call(_this)
            }, delay)
        },
        initProcess: function() {},
        showProcess: function() {
            $("body").append(this.$el);
            this.$el.find(".js-popup-block").removeClass("b-popup__anim-out").addClass("b-popup__anim-in");
            setTimeout(function() {
                this.$el.find(".js-popup-block").removeClass("b-popup__anim-out").removeClass("b-popup__anim-in")
            }.bind(this), 50)
        },
        closeProcess: function() {},
        show: function(params) {
            if ($.isReady) {
                this.parseParams(params);
                var that = this;
                this.showProcess();
                this.start();
                this.used = !0;
                this.showing = !0;
                params && params.onTop && this.setOnTop()
            } else {
                var that = this,
                    args = arguments;
                $(function() {
                    that.show.apply(that, args)
                })
            }
        },
        updateSize: function() {},
        showAgain: function() {
            this.used = !0;
            this.showing = !0
        },
        showLoading: function() {
            this.showing && this.$el.UShowPreloader()
        },
        hideLoading: function() {
            this.$el.UHidePreloader()
        },
        showGlobalLoading: function() {
            this.useGlobalLoading = !0;
            $.U.ShowGlobalPreloader()
        },
        hideGlobalLoading: function() {
            if (this.useGlobalLoading) {
                this.useGlobalLoading = !1;
                $.U.HideGlobalPreloader()
            }
        },
        setTitle: function(title) {
            this.$title.html(title)
        },
        raise: function(e) {
            if (!$(this.el).hasClass("popup-active")) {
                var max_z = 0;
                $(".popup-active").removeClass("popup-active");
                $(".popup").each(function() {
                    var curr_z = parseInt($(this).css("z-index"));
                    curr_z > max_z && (max_z = curr_z)
                });
                $(this.el).css({
                    "z-index": max_z + 10
                });
                $(this.el).addClass("popup-active")
            }
        },
        storeInstanceOnHide: function(value) {
            value ? this.preventFromAutoDestroy = value : this.preventFromAutoDestroy = !0
        },
        onCloseCheckboxClick: function(e) {
            e.preventDefault();
            this.destroy()
        },
        onCloseClick: function(e) {
            e.preventDefault();
            this.destroy()
        },
        onFancyClosed: function(e) {
            this.preventFromAutoDestroy || this.destroy()
        },
        onShow: function() {
            console.log("-V- BasicPopupView show");
            this.start()
        },
        onAfterShow: function() {
            console.log("-V- BasicPopupView afterShow")
        },
        onRender: function() {
            console.log("-V- BasicPopupView render");
            this.init()
        },
        onClose: function() {
            console.log("-V- BasicPopupView close");
            this.trigger("Close");
            this.destroy()
        }
    });
    return BasicPopupView
});
ognyvo.define("abstract/view/popup/BasicTemplatePopupView", ["jquery", "marionette", "./BasicPopupView", "data.utils"], function($, Marionette, BasicPopupView) {
    "use strict";
    var BasicTemplatePopupView = BasicPopupView.extend({
        data: {},
        dataForAsset: {},
        templateDataAssets: {},
        templateDataAssetId: "",
        templateUIAssets: "",
        templateUIAssetId: "",
        getTemplate: function() {
            var template = this.template;
            this.templateUIAssets && (template = this.templateUIAssetId ? $(this.templateUIAssets).filter("#" + this.templateUIAssetId).html() : $(this.templateUIAssets).html());
            return _.template(template)
        },
        serializeData: function() {
            var data = {};
            if (this.templateDataAssets)
                if (this.templateDataAssetId) {
                    var xmlDoc = $.parseXML(this.templateDataAssets),
                        xml = $(xmlDoc).find("asset#" + this.templateDataAssetId).get(0);
                    data = $.xmlToJsonPlain(xml)
                } else data = $.isXMLDoc(this.templateDataAssets) ? $.xmlToJsonPlain(this.templateDataAssets) : this.templateDataAssets;
            _.extend(data, this.data);
            this.dataForAsset = data;
            return {
                asset: data
            }
        },
        parseParams: function(params) {
            if (!BasicPopupView.prototype.parseParams.apply(this, arguments)) return !1;
            params.data && (this.data = params.data);
            params.templateDataAssets && (this.templateDataAssets = params.templateDataAssets);
            params.templateUIAssets && (this.templateUIAssets = params.templateUIAssets);
            params.templateDataAssetId && (this.templateDataAssetId = params.templateDataAssetId);
            params.templateUIAssetId && (this.templateUIAssetId = params.templateUIAssetId);
            if (params.extra) {
                this.model && this.model.set(params.extra);
                this.extra = params.extra
            }
            params.popup && _.extend(this.data, params.popup);
            params.content && (this.content = params.content);
            var result = this.parseAdditionalParams(params);
            return result !== !1 ? !0 : !1
        },
        parseAdditionalParams: function(params) {
            return !0
        },
        show: function(params, noRender) {
            this.parseParams(params);
            if (!noRender) {
                this.render();
                require("App").parser.parse(this.$el.children())
            }
            BasicPopupView.prototype.show.apply(this, arguments)
        }
    });
    return BasicTemplatePopupView
});
ognyvo.define("text", ["module"], function(module) {
    "use strict";
    var text, fs, Cc, Ci, xpcIsWindows, progIds = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = "undefined" != typeof location && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ""),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || void 0),
        buildMap = {},
        masterConfig = module.config && module.config() || {};
    text = {
        version: "2.0.14",
        strip: function(content) {
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                matches && (content = matches[1])
            } else content = "";
            return content
        },
        jsEscape: function(content) {
            return content.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: masterConfig.createXhr || function() {
            var xhr, i, progId;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (i = 0; 3 > i; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId)
                    } catch (e) {}
                    if (xhr) {
                        progIds = [progId];
                        break
                    }
                }
            return xhr
        },
        parseName: function(name) {
            var modName, ext, temp, strip = !1,
                index = name.lastIndexOf("."),
                isRelative = 0 === name.indexOf("./") || 0 === name.indexOf("../");
            if (-1 !== index && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1)
            } else modName = name;
            temp = ext || modName;
            index = temp.indexOf("!");
            if (-1 !== index) {
                strip = "strip" === temp.substring(index + 1);
                temp = temp.substring(0, index);
                ext ? ext = temp : modName = temp
            }
            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort, match = text.xdRegExp.exec(url);
            if (!match) return !0;
            uProtocol = match[2];
            uHostName = match[3];
            uHostName = uHostName.split(":");
            uPort = uHostName[1];
            uHostName = uHostName[0];
            return !(uProtocol && uProtocol !== protocol || uHostName && uHostName.toLowerCase() !== hostname.toLowerCase())
        },
        finishLoad: function(name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            masterConfig.isBuild && (buildMap[name] = content);
            onLoad(content)
        },
        load: function(name, req, onLoad, config) {
            if (config && config.isBuild && !config.inlineText) onLoad();
            else {
                masterConfig.isBuild = config && config.isBuild;
                var parsed = text.parseName(name),
                    nonStripName = parsed.moduleName + (parsed.ext ? "." + parsed.ext : ""),
                    url = req.toUrl(nonStripName),
                    useXhr = masterConfig.useXhr || text.useXhr;
                url.indexOf("?") > -1 && (url = url.substr(0, url.indexOf("?")));
                0 !== url.indexOf("empty:") ? !hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort) ? text.get(url, function(content) {
                    text.finishLoad(name, parsed.strip, content, onLoad)
                }, function(err) {
                    onLoad.error && onLoad.error(err)
                }) : req([nonStripName], function(content) {
                    text.finishLoad(parsed.moduleName + "." + parsed.ext, parsed.strip, content, onLoad)
                }) : onLoad()
            }
        },
        write: function(pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName, "define(function () { return '" + content + "';});\n")
            }
        },
        writeFile: function(pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? "." + parsed.ext : "",
                nonStripName = parsed.moduleName + extPart,
                fileName = req.toUrl(parsed.moduleName + extPart) + ".js";
            text.load(nonStripName, req, function(value) {
                var textWrite = function(contents) {
                    return write(fileName, contents)
                };
                textWrite.asModule = function(moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents)
                };
                text.write(pluginName, nonStripName, textWrite, config)
            }, config)
        }
    };
    if ("node" === masterConfig.env || !masterConfig.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"]) {
        fs = require.nodeRequire("fs");
        text.get = function(url, callback, errback) {
            try {
                var file = fs.readFileSync(url, "utf8");
                "\ufeff" === file[0] && (file = file.substring(1));
                callback(file)
            } catch (e) {
                errback && errback(e)
            }
        }
    } else if ("xhr" === masterConfig.env || !masterConfig.env && text.createXhr()) text.get = function(url, callback, errback, headers) {
        var header, xhr = text.createXhr();
        xhr.open("GET", url, !0);
        if (headers)
            for (header in headers) headers.hasOwnProperty(header) && xhr.setRequestHeader(header.toLowerCase(), headers[header]);
        masterConfig.onXhr && masterConfig.onXhr(xhr, url);
        xhr.onreadystatechange = function(evt) {
            var status, err;
            if (4 === xhr.readyState) {
                status = xhr.status || 0;
                if (status > 399 && 600 > status) {
                    err = new Error(url + " HTTP status: " + status);
                    err.xhr = xhr;
                    errback && errback(err)
                } else callback(xhr.responseText);
                masterConfig.onXhrComplete && masterConfig.onXhrComplete(xhr, url)
            }
        };
        xhr.send(null)
    };
    else if ("rhino" === masterConfig.env || !masterConfig.env && "undefined" != typeof Packages && "undefined" != typeof java) text.get = function(url, callback) {
        var stringBuffer, line, encoding = "utf-8",
            file = new java.io.File(url),
            lineSeparator = java.lang.System.getProperty("line.separator"),
            input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
            content = "";
        try {
            stringBuffer = new java.lang.StringBuffer;
            line = input.readLine();
            line && line.length() && 65279 === line.charAt(0) && (line = line.substring(1));
            null !== line && stringBuffer.append(line);
            for (; null !== (line = input.readLine());) {
                stringBuffer.append(lineSeparator);
                stringBuffer.append(line)
            }
            content = String(stringBuffer.toString())
        } finally {
            input.close()
        }
        callback(content)
    };
    else if ("xpconnect" === masterConfig.env || !masterConfig.env && "undefined" != typeof Components && Components.classes && Components.interfaces) {
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils["import"]("resource://gre/modules/FileUtils.jsm");
        xpcIsWindows = "@mozilla.org/windows-registry-key;1" in Cc;
        text.get = function(url, callback) {
            var inStream, convertStream, fileObj, readData = {};
            xpcIsWindows && (url = url.replace(/\//g, "\\"));
            fileObj = new FileUtils.File(url);
            try {
                inStream = Cc["@mozilla.org/network/file-input-stream;1"].createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, !1);
                convertStream = Cc["@mozilla.org/intl/converter-input-stream;1"].createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(), Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);
                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value)
            } catch (e) {
                throw new Error((fileObj && fileObj.path || "") + ": " + e)
            }
        }
    }
    return text
});
ognyvo.define("text!asset/template/popup/covers.html", [], function() {
    return '<script type="text/template" id="basic-mini">\n    <div class="popup popup_form<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n    </div>\n</script>\n<script type="text/template" id="basic-mini-with-center-button">\n    <div class="popup popup_form<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n        <% if(asset.button){ %>\n        <div class="f_line center">\n            <button class="js-submit-button ui_btn ui_btn_27 ui_btn__yellow<% if(asset.button["class"]){ print(\' \'+asset.button["class"]); } %>"><%= asset.button.title %></button>\n        </div>\n        <% } %>\n        <% if(asset.notice){ %>\n        <div class="f_line f_bottom"><%= asset.notice %></div>\n        <% } %>\n    </div>\n</script>\n<script type="text/template" id="basic-mini-with-button">\n    <div class="popup popup_form<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n        <% if(asset.button){ %>\n        <div class="f_rzd__line f_line_big"></div>\n        <div class="f_line cf">\n            <button class="js-submit-button ui_btn ui_btn_27 ui_btn__yellow popup__btn<% if(asset.button["class"]){ print(\' \'+asset.button["class"]); } %>"><%= asset.button.title %></button>\n        </div>\n        <% } %>\n        <% if(asset.notice){ %>\n        <div class="f_line f_bottom"><%= asset.notice %></div>\n        <% } %>\n    </div>\n</script>\n<script type="text/template" id="basic-mini-with-button-and-cancel">\n    <div class="popup popup_form<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n        <% if(asset.button){ %>\n\n        <div class="f_line f_btns cf">\n            <button class="js-submit-button ui_btn ui_btn_27 ui_btn__yellow popup__btn<% if(asset.button["class"]){ print(\' \'+asset.button["class"]); } %>"><%= asset.button.title %></button>\n            <button class="js-cancel-button ui_btn ui_btn_27 popup__btn">Отмена</button>\n        </div>\n\n        <% } %>\n        <% if(asset.notice){ %>\n        <div class="f_line f_bottom"><%= asset.notice %></div>\n        <% } %>\n    </div>\n</script>\n<script type="text/template" id="basic-huge">\n    <div class="popup popup_form popup_huge<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <div class="popup_content">\n            <%= _.template(asset.content)({asset:asset}) %>\n        </div>\n    </div>\n</script>\n<script type="text/template" id="basic-big">\n    <div class="popup popup_form popup_xwide<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <div class="popup_content">\n            <%= _.template(asset.content)({asset:asset}) %>\n        </div>\n    </div>\n</script>\n<script type="text/template" id="basic-mid">\n    <div class="popup popup_form popup_wide<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n    </div>\n</script>\n<script type="text/template" id="basic-free">\n    <div class="popup popup_free<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n    </div>\n</script>\n<script type="text/template" id="basic-mid-with-button">\n    <div class="popup popup_form popup_wide<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n        <% if(asset.button){ %>\n        <div class="f_rzd__line f_line_big"></div>\n        <div class="f_line cf">\n            <button class="js-submit-button ui_btn ui_btn_27 ui_btn__yellow popup__btn<% if(asset.button["class"]){ print(\' \'+asset.button["class"]); } %>"><%= asset.button.title %></button>\n        </div>\n        <% } %>\n        <% if(asset.notice){ %>\n        <div class="f_line f_bottom"><%= asset.notice %></div>\n        <% } %>\n    </div>\n</script>\n<script type="text/template" id="basic-mid-with-button-and-back">\n    <div class="popup popup_form<% if(asset["class"]){ %> <%= asset["class"] %><% } %>">\n        <div class="popup-title popup_title"><%= asset.title %></div>\n        <%= _.template(asset.content)({asset:asset}) %>\n        <div class="f_line f_btns cf">\n            <div class="popup__aside cf">\n                <a href="#" class="back-button gray_link back_link">Назад</a>\n            </div>\n            <% if(asset.button){ %>\n            <button class="js-submit-button ui_btn ui_btn_27 ui_btn__yellow popup__btn<% if(asset.button["class"]){ print(\' \'+asset.button["class"]); } %>"><%= asset.button.title %></button>\n            <% } %>\n        </div>\n        <% if(asset.notice){ %>\n        <div class="f_line f_bottom"><%= asset.notice %></div>\n        <% } %>\n    </div>\n</script>'
});
ognyvo.define("abstract/view/popup/CommonPopupView", ["./BasicTemplatePopupView", "underscore", "settings", "text!asset/template/popup/covers.html"], function(BasicTemplatePopupView, _, Settings, uiAssets) {
    "use strict";
    var CommonPopupView = BasicTemplatePopupView.extend({
        templateUIAssets: uiAssets,
        templateUIAssetId: "basic-mid-with-button",
        events: {
            "click .yes-button": "onYesClicked",
            "click .no-button": "onNoClicked"
        },
        ui: {},
        initialize: function(params) {
            BasicTemplatePopupView.prototype.initialize.apply(this, arguments)
        },
        parseParams: function(params) {
            BasicTemplatePopupView.prototype.parseParams.apply(this, arguments) && (this.inputParams = params)
        },
        init: function() {
            BasicTemplatePopupView.prototype.init.call(this)
        },
        start: function() {
            BasicTemplatePopupView.prototype.start.call(this)
        },
        onYesClicked: function(e) {
            e.preventDefault();
            this.trigger("Submited");
            this.inputParams && this.inputParams.okEvent && require("App").vent.trigger(this.inputParams.okEvent);
            this.hide()
        },
        onNoClicked: function(e) {
            e.preventDefault();
            this.trigger("Closed");
            this.hide()
        }
    });
    return CommonPopupView
});
ognyvo.define("controller/manager/PopupManager", ["abstract/view/popup/CommonPopupView", "jquery", "underscore"], function(CommonPopupView, $, _) {
    "use strict";
    var PopupManager = function() {};
    PopupManager.prototype = {
        collection: {},
        initialize: function() {
            console.log("$ PopupManager execute");
            _.bindAll(this, "createAndShowPopup")
        },
        showById: function(id, params) {
            if (!this.has(id)) return null;
            var popup = this.get(id);
            popup.show(params);
            return popup
        },
        createAndShowPopup: function(params) {
            var id = "CommonPopupView",
                popup = this.get(id);
            if (null === popup) {
                var popup = new CommonPopupView(params);
                this.add(popup, id)
            }
            popup.show()
        },
        add: function(popup, id) {
            if (this.collection.hasOwnProperty(id)) {
                this.destroyItem(id);
                this.collection[id] = null
            }
            this.collection[id] = popup
        },
        get: function(id) {
            return this.collection.hasOwnProperty(id) ? this.collection[id] : null
        },
        has: function(id) {
            return this.collection.hasOwnProperty(id) && this.collection[id] ? !0 : null
        },
        remove: function(id) {
            if (this.collection.hasOwnProperty(id)) {
                this.destroyItem(id);
                this.collection[id] = null
            }
        },
        destroyItem: function(id) {}
    };
    return PopupManager
});
ognyvo.define("controller/manager/AssetManager", ["underscore"], function(_) {
    "use strict";
    var AssetManager = function() {
        this.initialize && this.initialize()
    };
    AssetManager.prototype = {
        collection: {},
        initialize: function() {
            console.log("$ AssetManager initialize")
        },
        add: function(asset, id) {
            this.collection.hasOwnProperty(id) && this.remove(id);
            this.collection[id] = asset
        },
        get: function(id) {
            return this.collection.hasOwnProperty(id) ? this.collection[id] : null
        },
        has: function(id) {
            return this.collection.hasOwnProperty(id) && this.collection[id] ? !0 : null
        },
        remove: function(id) {
            if (this.collection.hasOwnProperty(id)) {
                this.destroyItem(id);
                this.collection[id] = null
            }
        },
        destroyItem: function(id) {}
    };
    return AssetManager
});
ognyvo.define("controller/api/BlamperJSAPIController", ["controller/manager/PopupManager", "controller/manager/AssetManager"], function(PopupManager, AssetManager) {
    "use strict";
    var BlamperJSAPIController = {
        initialize: function() {
            ognyvo.require(["App"], function(App) {
                console.log("$ BlamperAPIController initialize");
                var popupManager = new PopupManager,
                    assetManager = new AssetManager;
                App.execute("App:RegisterExternalAPI:Method", "createAndShowPopup", popupManager.createAndShowPopup, popupManager);
                App.execute("App:RegisterExternalAPI:Method", "showPopup", popupManager.showById, popupManager);
                App.execute("App:RegisterExternalAPI:Method", "getPopup", popupManager.get, popupManager);
                App.execute("App:RegisterExternalAPI:Method", "addPopup", popupManager.add, popupManager);
                App.execute("App:RegisterExternalAPI:Method", "addAsset", assetManager.add, assetManager);
                App.execute("App:RegisterExternalAPI:Method", "getAsset", assetManager.get, assetManager);
                App.execute("App:RegisterExternalAPI:Registered")
            })
        }
    };
    return BlamperJSAPIController
});
! function(global, factory) {
    "function" == typeof ognyvo.define && ognyvo.define.amd ? ognyvo.define("util/../../vendor/notify", [], function() {
        return factory(global, global.document)
    }) : "undefined" != typeof module && module.exports ? module.exports = factory(global, global.document) : global.Notify = factory(global, global.document)
}("undefined" != typeof window ? window : this, function(w, d) {
    "use strict";

    function isFunction(item) {
        return "function" == typeof item
    }

    function Notify(title, options) {
        if ("string" != typeof title) throw new Error("Notify(): first arg (title) must be a string.");
        this.title = title;
        this.options = {
            icon: "",
            body: "",
            tag: "",
            lang: "en",
            notifyShow: null,
            notifyClose: null,
            notifyClick: null,
            notifyError: null,
            timeout: null
        };
        this.permission = null;
        if (Notify.isSupported && "object" == typeof options) {
            for (var i in options) options.hasOwnProperty(i) && (this.options[i] = options[i]);
            isFunction(this.options.notifyShow) && (this.onShowCallback = this.options.notifyShow);
            isFunction(this.options.notifyClose) && (this.onCloseCallback = this.options.notifyClose);
            isFunction(this.options.notifyClick) && (this.onClickCallback = this.options.notifyClick);
            isFunction(this.options.notifyError) && (this.onErrorCallback = this.options.notifyError)
        }
    }
    Notify.isSupported = "Notification" in w;
    Notify.needsPermission = !(Notify.isSupported && "granted" === Notification.permission);
    Notify.permissionLevel = Notify.isSupported ? Notification.permission : null;
    Notify.requestPermission = function(onPermissionGrantedCallback, onPermissionDeniedCallback) {
        Notify.isSupported && w.Notification.requestPermission(function(perm) {
            switch (perm) {
                case "granted":
                    Notify.needsPermission = !1;
                    isFunction(onPermissionGrantedCallback) && onPermissionGrantedCallback();
                    break;
                case "denied":
                    isFunction(onPermissionDeniedCallback) && onPermissionDeniedCallback()
            }
        })
    };
    Notify.prototype.show = function() {
        if (Notify.isSupported) {
            this.myNotify = new Notification(this.title, {
                body: this.options.body,
                tag: this.options.tag,
                icon: this.options.icon,
                lang: this.options.lang
            });
            this.options.timeout && !isNaN(this.options.timeout) && setTimeout(this.close.bind(this), 1e3 * this.options.timeout);
            this.myNotify.addEventListener("show", this, !1);
            this.myNotify.addEventListener("error", this, !1);
            this.myNotify.addEventListener("close", this, !1);
            this.myNotify.addEventListener("click", this, !1)
        }
    };
    Notify.prototype.onShowNotification = function(e) {
        this.onShowCallback && this.onShowCallback(e)
    };
    Notify.prototype.onCloseNotification = function(e) {
        this.onCloseCallback && this.onCloseCallback(e);
        this.destroy()
    };
    Notify.prototype.onClickNotification = function(e) {
        this.onClickCallback && this.onClickCallback(e)
    };
    Notify.prototype.onErrorNotification = function(e) {
        this.onErrorCallback && this.onErrorCallback(e);
        this.destroy()
    };
    Notify.prototype.destroy = function() {
        this.myNotify.removeEventListener("show", this, !1);
        this.myNotify.removeEventListener("error", this, !1);
        this.myNotify.removeEventListener("close", this, !1);
        this.myNotify.removeEventListener("click", this, !1)
    };
    Notify.prototype.close = function() {
        this.myNotify.close()
    };
    Notify.prototype.handleEvent = function(e) {
        switch (e.type) {
            case "show":
                this.onShowNotification(e);
                break;
            case "close":
                this.onCloseNotification(e);
                break;
            case "click":
                this.onClickNotification(e);
                break;
            case "error":
                this.onErrorNotification(e)
        }
    };
    return Notify
});
ognyvo.define("util/AppUtils", ["jquery", "underscore", "helper/AppConsts", "helper/window", "helper/TwigHelper", "service/ApiService", "service/StatisticsProxy", "controller/api/BlamperJSAPIController", "../../vendor/notify", "utils"], function($, _, AppConsts, window, TwigHelper, ApiService, StatisticsProxy, BlamperJSAPIController, Notify) {
    "use strict";
    var AppUtils = function(App, window) {
        var lastRedirect = {};
        App.events = {};
        App.systemEvents = new Backbone.Wreqr.EventAggregator;
        App.desktopNotify = function(title, options) {
            var notify = new Notify(title, options);
            Notify.needsPermission ? Notify.requestPermission(function() {
                console.log("Permission has been granted by the user");
                notify.show()
            }, function() {
                console.warn("Permission has been denied by the user")
            }) : notify.show();
            return notify
        };
        var cacheRequestInterval, cacheRequests = {},
            CACHE_REQUEST_DELAY = 3e3,
            cacheRequestIntervalHandler = function() {
                clearTimeout(cacheRequestInterval);
                cacheRequestInterval = 0;
                if (cacheRequests) {
                    for (var url in cacheRequests) App.callServerApi(url, {
                        groupData: cacheRequests[url].data
                    }, cacheRequests[url].options);
                    cacheRequests = {}
                }
            };
        App.groupServerApiCall = function(url, data, options) {
            console.log("App.groupServerApiCall", url, data);
            cacheRequestInterval || (cacheRequestInterval = setTimeout(cacheRequestIntervalHandler, CACHE_REQUEST_DELAY));
            cacheRequests.hasOwnProperty(url) ? cacheRequests[url].data.push(data) : cacheRequests[url] = {
                data: [data],
                options: options
            }
        };
        App.callServerApi = function(url, data, options) {
            $.ajax((App.params.currentDomain ? App.params.currentDomain : "") + url, _.extend(options || {}, {
                data: data
            }))
        };
        App.systemEvents.on(AppConsts.EVENT.API.CALL, App.callServerApi, this);
        App.vent.on(AppConsts.EVENT.SYSTEM.INIT_MODULES_LOADED, function() {
            _.defer(function() {
                StatisticsProxy.init(App.systemEvents)
            })
        }, this);
        App.addEventNameSpace = function(namespace) {
            App.events[namespace] = new Backbone.Wreqr.EventAggregator
        };
        App.sendNSEvent = function(namespace, event, param1, param2, param3) {
            var vent;
            if (namespace) {
                if (!App.events[namespace]) {
                    console.log("!!!! ERROR: THERE IS NO EVENTSPACE " + namespace + " to send the event");
                    return null
                }
                vent = App.events[namespace]
            } else vent = App.vent;
            vent.trigger.apply(vent, [].slice.call(arguments, 1))
        };
        App.onNSEvent = function(namespace, event, callback, context) {
            var vent;
            if (namespace) {
                if (!App.events[namespace]) {
                    console.log("!!!! ERROR: THERE IS NO EVENTSPACE " + namespace + " to subscribe the event");
                    return null
                }
                vent = App.events[namespace]
            } else vent = App.vent;
            vent.on.apply(vent, [].slice.call(arguments, 1))
        };
        App.offNSEvent = function(namespace, event, callback, context) {
            var vent;
            if (namespace) {
                if (!App.events[namespace]) {
                    console.log("!!!! ERROR: THERE IS NO EVENTSPACE " + namespace + " to unsubscribe the event");
                    return null
                }
                vent = App.events[namespace]
            } else vent = App.vent;
            vent.off.apply(vent, [].slice.call(arguments, 1))
        };
        App.getEventSpace = function(namespace) {
            if (!App.events[namespace]) {
                console.log("!!!! ERROR: THERE IS NO EVENTSPACE " + namespace + " to get the space");
                return null
            }
            return App.events[namespace]
        };
        App.addEventNameSpace("common");
        App.addEventNameSpace("prerender");
        TwigHelper.init();
        App.callApi = ApiService.api;
        App.isMobileDevice = navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows Phone OS|IEMobile|BlackBerry|SymbianOS|SymbOS|Opera Mini|Opera Mobi|GoBrowser/i);
        App.playSound = function(url) {
            var audio = new Audio(url);
            audio.play()
        };
        App.sendAnalytics = function(event) {
            if (!event) return !1;
            if (_.isArray(event)) {
                console.log("-=-=-=-=-= analitycs array", event);
                _.each(event, App.sendAnalytics, this)
            } else {
                console.log("-=-=-=-=-= analitycs", event);
                StatisticsProxy.sendEvent(event)
            }
            return !0
        };
        App.sendAnalyticsWithRedirect = function(event, url, newWindow) {
            this.sendAnalytics(event);
            if (url) {
                if (newWindow) {
                    window.open(url, "_blank");
                    return
                }
                App.redirect(url, null, null, null, 600, !0)
            }
        };
        window.Blamper = window.Blamper || {};
        window.Blamper.API = window.Blamper.API || {};
        App.commands.setHandler("App:RegisterExternalAPI:Method", function(methodName, method, context, data) {
            console.log("### Register API Method: " + methodName);
            window.Blamper.API[methodName] = function(a, b) {
                return method.apply(context, arguments)
            };
            for (; waitingAPICallbacks.hasOwnProperty(methodName) && waitingAPICallbacks[methodName].length;) {
                App.API[methodName].apply(this, waitingAPICallbacks[methodName][waitingAPICallbacks[methodName].length - 1].args);
                delete waitingAPICallbacks[methodName][waitingAPICallbacks[methodName].length - 1];
                waitingAPICallbacks[methodName].length--
            }
        });
        App.API = window.Blamper.API;
        App.APIController = BlamperJSAPIController;
        App.APIController.initialize();
        var waitingAPICallbacks = {};
        App.callAPI = function(methodName, a, b, c, d) {
            if (App.API.hasOwnProperty(methodName)) return App.API[methodName].call(this, a, b, c, d);
            waitingAPICallbacks[methodName] || (waitingAPICallbacks[methodName] = []);
            waitingAPICallbacks[methodName].push({
                args: [a, b, c, d]
            })
        };
        App.initPopup = function(module, params, id) {
            var popup = App.callAPI("getPopup", id);
            if (popup) return popup;
            require([module], function(Module) {
                var popup = new Module(params, id);
                App.callAPI("addPopup", popup, id)
            });
            return null
        };
        App.showPopup = function(id, params) {
            return App.callAPI("showPopup", id, params)
        };
        App.getLocation = function() {
            return window.location
        };
        var historyTitles = {},
            _addHistoryTitle = function(url, title) {
                historyTitles.hasOwnProperty(url) || (historyTitles[url] = title)
            },
            _addCurrentHistoryTitle = function() {
                _addHistoryTitle(window.location.pathname + window.location.search, window.document.title)
            },
            _getHistoryTitle = function(url) {
                return historyTitles.hasOwnProperty(url) ? historyTitles[url] : null
            },
            _getCurrentHistoryTitle = function() {
                return _getHistoryTitle(window.location.pathname + window.location.search)
            };
        _addCurrentHistoryTitle();
        App.navigateBack = function() {
            window.history.go(-1);
            var url = window.location.href;
            App.vent.trigger(AppConsts.EVENT.SYSTEM.HISTORY_CHANGE, url);
            return url
        };
        App.newWindow = function(url) {
            $($("<a>").attr("href", url).attr("target", "_blank")[0]).click();
            var redirectWindow = window.open(url, "_blank");
            redirectWindow.location
        };
        App.redirect = function(url, hash, noRefresh, title, timeout, showPreloader) {
            showPreloader && setTimeout(function() {
                $.U.ShowGlobalPreloader()
            }, 100);
            if (timeout) setTimeout(function() {
                App.redirect(url, hash, noRefresh, title)
            }, timeout);
            else {
                lastRedirect = {
                    url: window.location.pathname + window.location.search,
                    hash: window.location.hash,
                    noRefresh: noRefresh,
                    title: window.document.title
                };
                if (-1 !== url)
                    if (hash || url || !noRefresh) {
                        hash && (window.location.hash = hash);
                        if (url || noRefresh) {
                            if ("noPush" !== noRefresh)
                                if (noRefresh) {
                                    App.vent.trigger(AppConsts.EVENT.SYSTEM.MANUAL_HISTORY_CHANGE, url);
                                    if (url) {
                                        var params = $.getUrlParamsAsObject(url.replace(/^.*?\?/, ""));
                                        window.history.pushState(params, title ? title : window.document.title, url)
                                    } else window.history.pushState("", title ? title : window.document.title);
                                    _.defer(function() {
                                        _addCurrentHistoryTitle()
                                    });
                                    title && (window.document.title = title)
                                } else window.location.assign(url)
                        } else window.location.reload()
                    } else {
                        window.location.hash = "empty";
                        window.history.pushState("", window.document.title, window.location.pathname + window.location.search)
                    }
                else window.history.go(-1)
            }
        };
        App.setTitle = function(title) {
            window.document.title = title
        };
        App.getUrlParams = function() {
            return {
                url: window.location.href,
                hash: window.location.hash
            }
        };
        App.encodeQueryString = function(query) {
            return encodeURIComponent(query)
        };
        App.storage = {
            set: function(key, val) {
                _.isString(val) || _.isNumber(val) ? localStorage.setItem(key, val) : localStorage.setItem(key, JSON.stringify(val))
            },
            get: function(key, useAsObject) {
                var res = localStorage.getItem(key);
                return useAsObject ? JSON.parse(res) : res
            }
        };
        App.scrollToTop = function(duration, callback) {
            $("html, body").animate({
                scrollTop: 0
            }, {
                duration: duration ? duration : "slow",
                complete: callback
            })
        };
        App.getModelData = function(modelName, field, callback, context, namespace) {
            namespace ? App.sendNSEvent(namespace, "System:Model:GetDataFrom:" + modelName, field, callback, context) : App.sendNSEvent(null, "System:Model:GetDataFrom:" + modelName, field, callback, context)
        };
        var onFocus = function() {
                App.vars.focused = !0;
                App.vent.trigger(AppConsts.EVENT.SYSTEM.WINDOW_FOCUS)
            },
            onBlur = function() {
                App.vars.focused = !1;
                App.vent.trigger(AppConsts.EVENT.SYSTEM.WINDOW_BLUR)
            };
        App.vars.scroll = {
            y: $(document).scrollTop(),
            x: $(document).scrollLeft()
        };
        var onScroll = function(e) {
                App.vars.scroll = {
                    y: $(this).scrollTop(),
                    x: $(this).scrollLeft()
                };
                App.vent.trigger(AppConsts.EVENT.SYSTEM.SCROLL, App.vars.scroll)
            },
            onClick = function(e) {
                var data = {
                    target: e.target,
                    x: e.clientX,
                    y: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY
                };
                App.vent.trigger(AppConsts.EVENT.SYSTEM.CLICK, data)
            },
            onMouseMove = function(e) {
                App.vars.mouse = {
                    x: e.clientX,
                    y: e.clientY,
                    pageX: e.pageX,
                    pageY: e.pageY
                };
                App.vent.trigger(AppConsts.EVENT.SYSTEM.MOUSE_MOVE, App.vars.mouse)
            },
            onMouseLeave = function(e) {
                App.vent.trigger(AppConsts.EVENT.SYSTEM.MOUSE_LEAVE, e)
            },
            onMouseEnter = function(e) {
                App.vent.trigger(AppConsts.EVENT.SYSTEM.MOUSE_ENTER, e)
            },
            onNeedRefresh = function() {
                App.redirect()
            };
        App.vent.on(AppConsts.EVENT.SYSTEM.NEED_PAGE_REFRESH, onNeedRefresh);
        App.prefetch = function(url) {
            if (_.isArray(url)) url.forEach(function(val) {
                App.prefetch(val)
            });
            else {
                var o = document.createElement("object");
                if (0 === navigator.appName.indexOf("Microsoft"))(new Image).src = url;
                else {
                    o.data = url;
                    o.width = 0;
                    o.height = 0;
                    document.body.appendChild(o)
                }
            }
        };
        var prevFocusType = null,
            $window = $(window);
        $window.scroll(onScroll).on("blur focus", function(e) {
            if (prevFocusType != e.type) switch (e.type) {
                case "blur":
                    onBlur();
                    break;
                case "focus":
                    onFocus()
            }
            prevFocusType = e.type
        }).on("resize", function() {
            var w = $window.width(),
                h = $window.height();
            App.vars.windowSize = {
                width: w,
                height: h
            };
            App.vent.trigger(AppConsts.EVENT.SYSTEM.RESIZE, w, h)
        });
        window.addEventListener("popstate", function(e) {
            _.defer(function() {
                window.document.title = _getCurrentHistoryTitle()
            });
            App.vent.trigger(AppConsts.EVENT.SYSTEM.HISTORY_CHANGE, window.location.href)
        }, !1);
        App.moveScrollToTop = function() {
            $(window.document).scrollTop(0)
        };
        $("body").mousemove(onMouseMove).mouseleave(onMouseLeave).mouseenter(onMouseEnter).click(onClick)
    };
    return AppUtils
});
ognyvo.require(["marionette"], function(Marionette) {
    Marionette.Renderer.render;
    Marionette.Renderer.render = function(template, data) {
        if (!template) throw new Marionette.Error({
            name: "TemplateNotFoundError",
            message: "Cannot render the template since its false, null or undefined."
        });
        if (template && _.isFunction(template.render)) return template.render(data);
        var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);
        return templateFunc(data)
    }
});
ognyvo.define("plugin/MarionetteTwigRenderer", function() {});
ognyvo.define("domReady", [], function() {
    "use strict";

    function runCallbacks(callbacks) {
        var i;
        for (i = 0; i < callbacks.length; i += 1) callbacks[i](doc)
    }

    function callReady() {
        var callbacks = readyCalls;
        if (isPageLoaded && callbacks.length) {
            readyCalls = [];
            runCallbacks(callbacks)
        }
    }

    function pageLoaded() {
        if (!isPageLoaded) {
            isPageLoaded = !0;
            scrollIntervalId && clearInterval(scrollIntervalId);
            callReady()
        }
    }

    function domReady(callback) {
        isPageLoaded ? callback(doc) : readyCalls.push(callback);
        return domReady
    }
    var isTop, testDiv, scrollIntervalId, isBrowser = "undefined" != typeof window && window.document,
        isPageLoaded = !isBrowser,
        doc = isBrowser ? document : null,
        readyCalls = [];
    if (isBrowser) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", pageLoaded, !1);
            window.addEventListener("load", pageLoaded, !1)
        } else if (window.attachEvent) {
            window.attachEvent("onload", pageLoaded);
            testDiv = document.createElement("div");
            try {
                isTop = null === window.frameElement
            } catch (e) {}
            testDiv.doScroll && isTop && window.external && (scrollIntervalId = setInterval(function() {
                try {
                    testDiv.doScroll();
                    pageLoaded()
                } catch (e) {}
            }, 30))
        }
        "complete" === document.readyState && pageLoaded()
    }
    domReady.version = "2.0.1";
    domReady.load = function(name, req, onLoad, config) {
        config.isBuild ? onLoad(null) : domReady(onLoad)
    };
    return domReady
});
ognyvo.define("asset/template/TwigCommonPack", [], function(Template) {
    return Template
});
ognyvo.define("abstract/view/AbstractWidgetView", ["abstract/view/AbstractItemView", "jquery", "underscore"], function(AbstractItemView, $, _) {
    "use strict";
    var AbstractWidgetView = AbstractItemView.extend({
        place: "",
        extra: {},
        constructor: function(params) {
            AbstractItemView.prototype.constructor.apply(this, arguments);
            this.model && (this.model.place = this.place)
        }
    });
    return AbstractWidgetView
});
ognyvo.define("view/article/ArticleWidgetView", ["abstract/view/AbstractWidgetView", "helper/AppConsts", "underscore"], function(AbstractWidgetView, AppConsts, _) {
    "use strict";
    var ArticleWidgetView = AbstractWidgetView.extend({
        noRenderOnStart: !0,
        modelEvents: {
            sync: "onSync"
        },
        events: {
            "click a": "onLinkClick",
            "BlockClicked a": "onBlockClick"
        },
        request_data: null,
        gallery: null,
        initialize: function(params) {
            _.bindAll(this, "onImageClick", "onGalleryClick");
            var result = AbstractWidgetView.prototype.initialize.apply(this, arguments);
            _.isEmpty(this.request_data) || this.model.setExtraData(this.request_data);
            this.addVentEvent(AppConsts.EVENT.ARTICLE.SIMILAR_FILTER, this.onFilterChanged);
            this.onlyDecorator && (this.request_data && this.request_data.filter ? this.getByFilter(this.request_data.filter) : this.addVentEvent(AppConsts.EVENT.ARTICLE.SIMILAR_FILTER_ON_START, this.onFilterInited));
            return result
        },
        getByFilter: function(filter) {
            this.firstRender = !0;
            this.model.getByFilter(filter)
        },
        onFilterChanged: function(filter, updateOnly) {
            if (updateOnly) {
                if (!this.model) return;
                this.model.updateFilter(filter)
            } else this.getByFilter(filter)
        },
        onFilterInited: function(filter) {
            this.getByFilter(filter)
        },
        onBlockClick: function($el, href) {},
        onLinkClick: function(e) {},
        onSync: function(model, response) {
            this.render()
        },
        getImageData: function(currentOriginalLink) {
            var v = {
                    photos: [],
                    index: 0
                },
                i = 0;
            this.ui.links.each(function() {
                var $this = $(this),
                    $img = $this.find("img"),
                    href = $this.attr("href");
                v.photos.push({
                    original: href,
                    preview: $this.data("preview"),
                    thumb: $this.data("preview"),
                    title: $img.attr("alt")
                });
                href == currentOriginalLink && (v.index = i);
                i++
            });
            return v
        },
        onShowGallery: function(data) {
            this.gallery.show(data)
        },
        mapFileData: function(data) {
            var d, hash = data.hash,
                type = data.type;
            if ("video" == type) d = {
                original: data.original,
                preview: data.preview,
                thumb: data.preview,
                title: data.desc,
                type: type
            };
            else {
                var img = $.extractImagePathFromHash(hash);
                console.log(data);
                d = {
                    original: _.has(data, "original") ? data.original : img,
                    preview: _.has(data, "preview") ? data.preview : img,
                    thumb: _.has(data, "preview") ? data.preview : img,
                    title: data.desc,
                    type: type
                }
            }
            return d
        },
        onImageClick: function(e) {
            e.preventDefault();
            if (this.gallery) {
                var $el = $(e.currentTarget),
                    data = $el.data(),
                    v = {
                        photos: [this.mapFileData(data)],
                        index: 0
                    };
                this.gallery.show(v)
            }
        },
        onGalleryClick: function(e, data) {
            if (this.gallery) {
                var d, v = {
                    photos: [],
                    index: data.index
                };
                for (var i in data.files) {
                    d = this.mapFileData(data.files[i]);
                    v.photos.push(d)
                }
                this.gallery.show(v)
            }
        }
    });
    return ArticleWidgetView
});
ognyvo.define("abstract/model/AbstractModel", ["backbone", "underscore"], function(Backbone, _) {
    "use strict";
    var AbstractModel = Backbone.Model.extend({
        name: "AbstractModel",
        backup: {},
        ventEvents: {},
        eventNamespace: "",
        clearMode: !1,
        constructor: function(data, options) {
            options && options.hasOwnProperty("eventNamespace") && (this.eventNamespace = options.eventNamespace);
            Backbone.Model.prototype.constructor.apply(this, arguments);
            console.log("@@@CONSTRUCT MODEL: ", this.name, this.cid, this.eventNamespace);
            var that = this;
            ognyvo.require(["App"], function(App) {
                that.addVentEvent("System:Model:GetDataFrom:" + that.name, that.onGetData)
            });
            this.on("sync", this.onSync, this)
        },
        backupData: function() {
            this.backup = _.clone(this.attributes)
        },
        restoreBackup: function() {
            this.set(this.backup)
        },
        getPubSub: function(namespace) {
            var vent;
            vent = namespace || "" !== namespace && this.eventNamespace ? require("App").getEventSpace(namespace || this.eventNamespace) : require("App").vent;
            return vent
        },
        changeEventNamespace: function(namespace) {
            this.eventNamespace = namespace
        },
        pubNS: function(namespace, event, data) {
            var vent = this.getPubSub(namespace);
            if (!vent) throw new Error("No event space for publishing event: " + event);
            vent.trigger.apply(vent, [].slice.call(arguments, 1))
        },
        pub: function(event, data) {
            var vent = this.getPubSub();
            if (!vent) throw new Error("No event space for publishing event: " + event);
            vent.trigger.apply(vent, arguments)
        },
        addVentEvent: function(event, callback, namespace) {
            var vent = this.getPubSub(namespace);
            if (!vent) throw new Error("No event space for subscribing event: " + event);
            this.ventEvents[event] = callback;
            vent.on(event, callback, this)
        },
        toJSON: function() {
            return {
                item: _.clone(this.attributes)
            }
        },
        onSync: function(model, response) {
            this.pub("System:Model:SyncModel:" + this.name, this.changed);
            this.backupData()
        },
        onGetData: function(field, callback) {
            var result;
            result = field ? this.get(field) : this.toJSON();
            callback && callback(result)
        },
        clear: function(options) {
            this.clearMode = !0;
            Backbone.Model.prototype.clear.apply(this, arguments);
            this.clearMode = !1
        },
        parse: function(data) {
            return data
        }
    });
    return AbstractModel
});
ognyvo.define("abstract/model/AbstractBlamperApiModel", ["abstract/model/AbstractModel", "underscore"], function(AbstractModel, _) {
    "use strict";
    var STATE_IDLE = 0,
        STATE_WAIT = 1,
        STATE_SYNC = 2,
        AbstractBlamperApiModel = AbstractModel.extend({
            state: STATE_IDLE,
            delay: 1e3,
            autoRefreshMode: !1,
            fetchOptions: {},
            directUpdate: !1,
            extraData: {},
            constructor: function(params) {
                _.bindAll(this, "onResponseFail", "onSaveSuccess", "onSaveFail", "onSaveError");
                return AbstractModel.prototype.constructor.apply(this, arguments)
            },
            initialize: function() {},
            resetToDefaults: function() {
                this.clear().set(this.defaults)
            },
            setExtraData: function(data) {
                this.extraData = data || {}
            },
            addExtraData: function(data) {
                this.extraData = _.extend(this.extraData, data)
            },
            fetch: function(options) {
                var that = this;
                console.log("=M= AbstractBlamperApiModel fetch");
                if (this.state == STATE_SYNC) {
                    if (!options || 1 != options.immediate || !this.lastXHR) return;
                    this.lastXHR.state()
                }
                this.state = STATE_SYNC;
                options = options ? _.extend({}, this.fetchOptions, options) : this.fetchOptions;
                options.data = options.data || {};
                options.data = _.extend({}, this.extraData, options.data);
                options.error || (options.error = function(data) {
                    that.onResponseFail.apply(that, arguments)
                });
                this.trigger("fetch", options);
                $.ajaxSetup({
                    xhrFields: {
                        withCredentials: !0
                    }
                });
                this.lastXHR = AbstractModel.prototype.fetch.call(this, options);
                return this.lastXHR
            },
            save: function(attr, options) {
                this.state = STATE_SYNC;
                console.log("=M= AbstractBlamperApiModel save");
                options || (options = {});
                options.success = this.onSaveSuccess;
                options.error = this.onSaveFail;
                $.ajaxSetup({
                    xhrFields: {
                        withCredentials: !0
                    }
                });
                AbstractModel.prototype.save.call(this, attr, options)
            },
            parse: function(data, options) {
                data = AbstractModel.prototype.parse.apply(this, arguments);
                this.trigger("Response", data);
                if (options && options.pureData) {
                    this.directUpdate = !0;
                    this.trigger("DirectUpdate", this, data, options);
                    this.onResponseSuccess(data);
                    return _.isEmpty(data) ? null : data
                }
                this.directUpdate = !1;
                if (data && _.isNumber(data.status) && data.hasOwnProperty("response"))
                    if (-1 == $.inArray(parseInt(data.status), [404, 500, 501, 502, 503, 504, 505, 506, 507, 509, 510, 511])) {
                        if (!data.response.errors) {
                            this.onResponseSuccess(data.response);
                            return _.isEmpty(data.response) ? null : data.response
                        }
                        this.onResponseDataError(data.response.errors)
                    } else this.onResponseError(data.response, data.status);
                else this.onResponseFail(data)
            },
            setAutoRefreshMode: function(delay) {
                delay && (this.delay = delay);
                this.autoRefreshMode = !0
            },
            setManualRefreshMode: function() {
                this.autoRefreshMode = !1
            },
            checkForAutoRefresh: function() {
                if (this.autoRefreshMode) {
                    this.state = STATE_WAIT;
                    _.debounce(this.fetch, this.delay)
                } else this.state = STATE_IDLE
            },
            onSaveSuccess: function(model, data, options) {
                if (data && _.isNumber(data.status) && data.response)
                    if (parseInt(data.status) < 0) model.onSaveError(model, data.response, options);
                    else {
                        console.log("=M= AbstractBlamperApiModel save success: " + JSON.stringify(data));
                        model.trigger("SaveSuccess", data.response, data.code)
                    }
                else model.onSaveFail(model, data, options)
            },
            onSaveFail: function(model, xhr, options) {
                console.log("=M= AbstractBlamperApiModel save fail: " + JSON.stringify(xhr));
                model.trigger("SaveFailed", xhr)
            },
            onSaveError: function(model, data, options) {
                console.log("=M= AbstractBlamperApiModel save error: " + JSON.stringify(data));
                model.trigger("SaveError", data)
            },
            onResponseSuccess: function(data) {
                this.trigger("FetchSuccess", data);
                this.handleFetchSuccess(data);
                this.checkForAutoRefresh()
            },
            onResponseFail: function(data) {
                console.log("=M= AbstractBlamperApiModel fetch fail: " + JSON.stringify(data));
                this.trigger("FetchFailed", data);
                this.handleFetchFail(data);
                this.checkForAutoRefresh()
            },
            onResponseError: function(status, data) {
                console.log("=M= AbstractBlamperApiModel parse error [" + status + "]: " + JSON.stringify(data));
                this.trigger("FetchError", status, data);
                this.handleFetchError(status, data)
            },
            onResponseDataError: function(errors) {
                console.log("=M= AbstractBlamperApiModel parse data error: " + JSON.stringify(errors));
                this.trigger("FetchDataError", errors);
                this.handleFetchDataError(errors);
                this.checkForAutoRefresh()
            },
            handleFetchSuccess: function(data) {},
            handleFetchFail: function(data) {},
            handleFetchError: function(errors) {},
            handleFetchDataError: function(code, data) {}
        });
    return AbstractBlamperApiModel
});
ognyvo.define("abstract/model/AbstractWidgetModel", ["./AbstractBlamperApiModel", "underscore"], function(AbstractBlamperApiModel, _) {
    "use strict";
    var AbstractWidgetModel = AbstractBlamperApiModel.extend({
        name: "AbstractWidgetModel",
        widgetName: "AbstractWidget",
        responseParams: {},
        suspended: !1,
        cacheResponse: {},
        cacheOptions: {},
        cacheRequestMode: !1,
        cacheRequest: [],
        toJSON: function() {
            return _.extend({
                item: _.clone(this.attributes)
            }, this.extraData)
        },
        setResponseParams: function(data) {
            data.extra && (this.extraData = _.extend(this.extraData, data.extra));
            this.responseParams = data
        },
        constructor: function() {
            this.widgetName = this.name.replace(/\/[^\/]+?$/, "");
            AbstractBlamperApiModel.prototype.constructor.apply(this, arguments);
            console.log("=== ADD WIDGET_DATA EVENT: ", this.widgetName, this.eventNamespace);
            this.addVentEvent("WIDGET_DATA:" + this.widgetName, this.onWidgetData);
            this.addVentEvent("PROCESS_CACHED_DATA", this.onProcessCacheData)
        },
        processCacheData: function() {
            this.onWidgetData(this.cacheResponse, this.cacheOptions, !0)
        },
        fetch: function(options) {
            return this.cacheRequestMode || options && options.cacheRequestMode ? void 0 : AbstractBlamperApiModel.prototype.fetch.apply(this, arguments)
        },
        setCacheRequestsMode: function() {
            this.cacheRequestMode = !0
        },
        onProcessCacheData: function() {
            this.processCacheData()
        },
        onWidgetData: function(resp, options, noSuspense) {
            if (!this.suspended || noSuspense) {
                var model = this;
                options = _.extend({
                    pureData: !0
                }, options);
                console.log("===== ON WIDGET DATA: ", this.widgetName, this.eventNamespace, options, resp);
                if (!model.set(model.parse(resp, options), options)) return !1;
                model.trigger("sync", model, resp, options)
            } else {
                this.cacheResponse = resp;
                this.cacheOptions = options;
                this.trigger("CACHED_DATA", resp.content, options)
            }
        },
        parse: function(data, options) {
            data = AbstractBlamperApiModel.prototype.parse.apply(this, arguments);
            if (!data) return null;
            data.query && this.setResponseParams(data.query);
            return data
        }
    });
    return AbstractWidgetModel
});
ognyvo.define("model/article/ArticleWidgetModel", ["abstract/model/AbstractWidgetModel", "settings", "helper/AppConsts"], function(AbstractWidgetModel, Settings, AppConsts) {
    "use strict";
    var ArticleWidgetModel = AbstractWidgetModel.extend({
        name: "ArticleWidgetModel",
        host: Settings.API.HOST,
        widgetUrl: "/widget/widgets/...",
        similarFilter: {},
        initialize: function(data, options) {
            var result = AbstractWidgetModel.prototype.initialize.apply(this, arguments);
            this.on("DirectUpdate", this.onDirectUpdate, this);
            return result
        },
        url: function() {
            return (require("App").params.currentDomain ? require("App").params.currentDomain : this.host) + this.widgetUrl
        },
        toJSON: function() {
            return _.extend(_.clone(this.attributes), this.extraData, {
                global: require("App").params
            })
        },
        updateFilter: function(filter) {
            this.similarFilter = filter
        },
        getByFilter: function(filter) {
            this.updateFilter(filter);
            this.fetch({
                immediate: !0
            })
        },
        getFetchOptions: function(options) {
            options = options || {};
            options = _.extend(options, {
                data: {}
            });
            options.noFilter || _.isEmpty(this.similarFilter) || (options.data.filter = this.similarFilter);
            return options
        },
        fetch: function(options) {
            options = this.getFetchOptions(options);
            var result = AbstractWidgetModel.prototype.fetch.call(this, options);
            return result
        },
        parse: function(data) {
            data = AbstractWidgetModel.prototype.parse.apply(this, arguments);
            return data
        },
        onDirectUpdate: function(model, data) {}
    });
    return ArticleWidgetModel
});
ognyvo.define("abstract/controller/AbstractCommand", ["backbone"], function(Backbone) {
    "use strict";
    var AbstractCommand = function(data) {
        this.parseParamsToVars && this.parseParamsToVars.apply(this, arguments);
        this.initialize && this.initialize.apply(this, arguments)
    };
    AbstractCommand.prototype = {
        eventNamespace: "",
        ventEvents: [],
        initialize: function(data) {},
        parseParamsToVars: function(params) {
            _.each(params, function(value, key) {
                this[key] = value
            }, this)
        },
        getPubSub: function(namespace) {
            var vent;
            vent = namespace || "" !== namespace && this.eventNamespace ? require("App").getEventSpace(namespace || this.eventNamespace) : require("App").vent;
            return vent
        },
        changeEventNamespace: function(namespace) {
            this.eventNamespace = namespace
        },
        pub: function(event, data) {
            var vent = this.getPubSub();
            if (!vent) throw new Error("No event space for publishing event: " + event);
            console.log("->->-> PUBLISHING EVENT: ", event, data);
            vent.trigger.apply(vent, arguments)
        },
        pubNS: function(namespace, event, data) {
            var vent = this.getPubSub(namespace);
            if (!vent) throw new Error("No event space for publishing event: " + event);
            console.log("->->-> PUBLISHING NS [" + namespace + "] EVENT: ", event, data);
            vent.trigger.apply(vent, [].slice.call(arguments, 1))
        },
        addVentEvent: function(event, callback, namespace) {
            var vent = this.getPubSub(namespace);
            if (!vent) throw new Error("No event space for subscribing event: " + event);
            this.ventEvents[event] = callback;
            vent.on(event, callback, this)
        }
    };
    AbstractCommand.extend = Backbone.Model.extend;
    return AbstractCommand
});
ognyvo.define("service/PacketApiService", ["abstract/model/AbstractBlamperApiModel", "settings", "helper/AppConsts", "underscore"], function(AbstractBlamperApiModel, Settings, AppConsts, _) {
    "use strict";
    var PacketApiService = AbstractBlamperApiModel.extend({
        name: "PacketApiService",
        host: Settings.API.HOST,
        baseUrl: "",
        showedIds: [],
        showedQuestionIds: [],
        url: function() {
            return this.host + this.baseUrl
        },
        addShowedId: function(id) {
            -1 == _.indexOf(this.showedIds, id) && this.showedIds.push(id)
        },
        addShowedIds: function(list) {
            this.showedIds = _.union(this.showedIds, list)
        },
        addShowedQuestionIds: function(list) {
            this.showedQuestionIds = _.union(this.showedQuestionIds, list)
        },
        setUrl: function(url) {
            this.baseUrl = url
        },
        getByUrl: function(url, options) {
            console.log("???? PacketApiService GET ARTICLE BY URL:", url);
            this.baseUrl = url;
            options = _.extend({
                data: {
                    filter: this.similarFilter
                }
            }, options);
            this.fetch(options)
        },
        processWidgets: function(data) {
            for (var i in data) this.processWidgetData(i, data[i])
        },
        processWidgetData: function(name, data) {
            console.log("???? PacketApiService WIDGET_DATA:", name, data, this.eventNamespace);
            this.trigger(PacketApiService.WIDGET_DATA, name, data)
        },
        fetch: function(options) {
            options = AbstractBlamperApiModel.prototype.fetch.apply(this, arguments);
            return options
        },
        setFilter: function(filter) {
            this.similarFilter = filter
        },
        parse: function(data) {
            console.log("???? PacketApiService PARSE DATA:", data);
            data = AbstractBlamperApiModel.prototype.parse.apply(this, arguments);
            console.log("???? PacketApiService PARSED DATA:", data);
            this.trigger(PacketApiService.DATA, data);
            data.widgets && this.processWidgets(data.widgets);
            return data
        }
    });
    PacketApiService.WIDGET_DATA = "WIDGET_DATA";
    PacketApiService.DATA = "DATA";
    return PacketApiService
});
ognyvo.define("controller/filter/ListSyncCommand", ["abstract/controller/AbstractCommand", "service/PacketApiService", "helper/AppConsts"], function(AbstractCommand, PacketApiService, AppConsts) {
    "use strict";
    var ListSyncCommand = AbstractCommand.extend({
        apiService: null,
        blockNewData: !1,
        initialize: function(params) {
            this.apiService = new PacketApiService;
            this.apiService.on(PacketApiService.WIDGET_DATA, this.onWidgetData, this);
            this.apiService.on(PacketApiService.DATA, this.onApiData, this);
            this.initListeners()
        },
        initListeners: function() {
            this.addVentEvent(AppConsts.EVENT.LIST.SET_URL, this.onSetUrl);
            this.addVentEvent(AppConsts.EVENT.LIST.GET, this.onNeedPacket);
            this.addVentEvent(AppConsts.EVENT.LIST.FILTER, this.onFilterChanged);
            this.addVentEvent(AppConsts.EVENT.LIST.INIT_FILTER, this.onFilterInited);
            this.addVentEvent(AppConsts.EVENT.LIST.BLOCK_NEW_DATA, this.onBlockNewData);
            this.addVentEvent(AppConsts.EVENT.LIST.UNBLOCK_NEW_DATA, this.onUnBlockNewData)
        },
        onApiData: function(data) {
            console.log("???? ListSyncCommand onApiData", data);
            this.pub(AppConsts.EVENT.LIST.PACKET_DATA, data)
        },
        onWidgetData: function(name, data) {
            console.log("???? ListSyncCommand onWidgetData", name, this.blockNewData);
            this.blockNewData || this.pub("WIDGET_DATA:" + data.module, data)
        },
        onSetUrl: function(url) {
            if (!this.apiService) throw new Error("NO SYNC SERVICE TO GET LIST PACKET");
            this.apiService.setUrl(url)
        },
        onNeedPacket: function(url, options) {
            console.log("???? ListSyncCommand onNeedPacket:", url, this.apiService);
            if (!this.apiService) throw new Error("NO SYNC SERVICE TO GET LIST PACKET");
            this.apiService.getByUrl(url, options)
        },
        onFilterChanged: function(filter) {
            if (!this.apiService) throw new Error("NO SYNC SERVICE TO SET FILTER");
            this.apiService.setFilter(filter)
        },
        onFilterInited: function(filter) {
            if (!this.apiService) throw new Error("NO SYNC SERVICE TO SET INIT FILTER");
            this.apiService.setFilter(filter)
        },
        onBlockNewData: function() {
            console.log("???? ListSyncCommand SET BLOCK");
            this.blockNewData = !0
        },
        onUnBlockNewData: function() {
            console.log("???? ListSyncCommand UNBLOCK");
            this.blockNewData = !1
        }
    });
    return ListSyncCommand
});
ognyvo.define("model/common/CommonStaticModel", ["model/article/ArticleWidgetModel", "controller/filter/ListSyncCommand", "underscore", "helper/AppConsts"], function(ArticleWidgetModel, ListSyncCommand, _, AppConsts) {
    "use strict";
    var CommonStaticModel = ArticleWidgetModel.extend({
        groupModuleCount: 0,
        extraData: {},
        responseParams: {
            totalCount: void 0,
            remain: void 0
        },
        nextMode: !1,
        initOffset: 0,
        limit: 0,
        packetUrl: "/auto/all/",
        suspended: !1,
        replaceWithNextOneCalled: !1,
        callTimes: !1,
        replaceWithNextOne: function() {
            this.callTimes === !1 && (this.callTimes = this.groupModuleCount);
            if (--this.callTimes < 1) {
                this.callTimes = this.groupModuleCount;
                return this.replaceWithNext.apply(this, arguments)
            }
        },
        setUrls: function(urls) {
            this.urls = urls
        },
        getUrls: function() {
            return this.urls
        },
        setLimit: function(limit) {
            this.limit = limit
        },
        addLimit: function(limit) {
            this.limit += limit;
            console.log("GLOBAL LIMIT: ", this.limit)
        },
        addInitOffset: function(offset) {
            this.initOffset += offset
        },
        setInitOffset: function(offset) {
            this.initOffset = offset
        },
        setInitElementsCount: function(offset) {
            this.initElementsCount = offset
        },
        setSuspendedMode: function() {
            this.suspended = !0
        },
        getNext: function() {
            if (0 !== this.responseParams.rest || !this.responseParams.total && 0 !== this.responseParams.total) {
                this.nextMode = !0;
                this.fetch({
                    noFilter: !0
                });
                this.initOffset += this.limit
            }
        },
        replaceWithNext: function() {
            this.get("list");
            this.clear();
            this.nextMode = !0;
            this.fetch({
                noFilter: !0
            });
            this.initOffset += this.limit
        },
        setExtraData: function(data) {
            this.extraData = data || {}
        },
        addExtraData: function(data) {
            this.extraData = _.extend(this.extraData, data)
        },
        getFetchOptions: function(options) {
            options = options || {};
            options = _.extend(options, {
                data: {}
            });
            options.noFilter || _.isEmpty(this.similarFilter) || (options.data = _.extend({}, this.similarFilter, options.data));
            this.get("list");
            this.suspended ? options.data.offset = 0 : options.data.offset = this.initOffset;
            options.data.limit = this.limit;
            options.data.landing = this.extraData.landing || null;
            return options
        },
        updateFilter: function(filter) {
            ArticleWidgetModel.prototype.updateFilter.apply(this, arguments);
            this.pub(AppConsts.EVENT.LIST.FILTER, filter)
        },
        getUpdate: function() {
            this.nextMode = !1;
            var options = this.getFetchOptions();
            this.pub(AppConsts.EVENT.LIST.GET, this.packetUrl, options)
        },
        getByFilter: function(filter) {
            this.updateFilter(filter);
            this.getUpdate()
        },
        setUrl: function(url) {
            this.packetUrl = url;
            this.pub(AppConsts.EVENT.LIST.SET_URL, this.packetUrl)
        },
        initialize: function() {
            new ListSyncCommand;
            this.setUrl(this.packetUrl);
            ArticleWidgetModel.prototype.initialize.apply(this, arguments)
        },
        fetch: function(data) {
            return ArticleWidgetModel.prototype.fetch.apply(this, arguments)
        },
        parse: function(data) {
            data = ArticleWidgetModel.prototype.parse.apply(this, arguments);
            this.responseParams && (!this.responseParams.remain || this.responseParams.remain < this.limit) && (!this.responseParams.rest || this.responseParams.rest < this.limit) && (this.responseParams.total || 0 === this.responseParams.total) && this.setInitOffset(0);
            return data && data.data ? {
                list: _.values(data.data)
            } : data
        },
        onDirectUpdate: function(model, data) {}
    });
    return CommonStaticModel
});
ognyvo.define("model/common/ListWidgetModel", ["model/article/ArticleWidgetModel", "controller/filter/ListSyncCommand", "model/common/CommonStaticModel", "underscore", "helper/AppConsts"], function(ArticleWidgetModel, ListSyncCommand, CommonStaticModel, _, AppConsts) {
    "use strict";
    var ListWidgetModel = ArticleWidgetModel.extend({
        responseParams: {
            totalCount: void 0,
            remain: void 0
        },
        nextMode: !1,
        initOffset: 0,
        initElementsCount: 0,
        limit: 10,
        packetUrl: "/auto/all/",
        suspended: !1,
        lastCount: 0,
        setUrls: function(urls) {
            this.urls = urls
        },
        getUrls: function() {
            return this.urls
        },
        setLimit: function(limit) {
            this.limit = limit;
            ListWidgetModel.commonModel.addLimit(limit)
        },
        setInitOffset: function(offset) {
            this.initOffset = offset;
            var off = offset + this.initElementsCount;
            off > ListWidgetModel.commonModel.initOffset && ListWidgetModel.commonModel.setInitOffset(off)
        },
        setInitElementsCount: function(offset) {
            this.initElementsCount = offset
        },
        setSuspendedMode: function() {
            this.suspended = !0
        },
        getNext: function() {
            if (0 !== this.responseParams.rest || !this.responseParams.total && 0 !== this.responseParams.total) {
                var list = this.get("list");
                this.lastCount = list && list.length ? list.length : 0;
                this.initOffset = ListWidgetModel.commonModel.initOffset;
                this.initOffset = this.initOffset > 0 ? this.initOffset : 0;
                this.nextMode = !0;
                this.fetch({
                    noFilter: !0
                });
                ListWidgetModel.commonModel.setInitOffset(this.initOffset + this.limit)
            }
        },
        replaceWithNext: function() {
            var list = this.get("list");
            this.lastCount = list && list.length ? list.length : 0;
            this.clear();
            this.nextMode = !0;
            this.fetch({
                noFilter: !0
            });
            ListWidgetModel.commonModel.addInitOffset(this.lastCount)
        },
        replaceWithNextFromCommonModel: function() {
            var list = this.get("list");
            this.lastCount = list && list.length ? list.length : 0;
            this.clear();
            this.nextMode = !0;
            ListWidgetModel.commonModel.replaceWithNextOne()
        },
        getFetchOptions: function(options) {
            options = options || {};
            options = _.extend(options, {
                data: {}
            });
            options.noFilter || _.isEmpty(this.similarFilter) || (options.data = _.extend({}, this.similarFilter, options.data));
            this.get("list");
            this.suspended ? options.data.offset = 0 : options.data.offset = this.initOffset;
            options.data.limit = this.limit;
            return options
        },
        updateFilter: function(filter) {
            ArticleWidgetModel.prototype.updateFilter.apply(this, arguments);
            this.pub(AppConsts.EVENT.LIST.FILTER, filter)
        },
        getUpdate: function() {
            this.nextMode = !1;
            var options = this.getFetchOptions();
            this.pub(AppConsts.EVENT.LIST.GET, this.packetUrl, options)
        },
        getByFilter: function(filter) {
            this.updateFilter(filter);
            this.getUpdate()
        },
        setUrl: function(url) {
            this.packetUrl = url;
            this.pub(AppConsts.EVENT.LIST.SET_URL, this.packetUrl)
        },
        initialize: function() {
            _.bindAll(this, "replaceWithNextFromCommonModel");
            new ListSyncCommand;
            this.setUrl(this.packetUrl);
            ArticleWidgetModel.prototype.initialize.apply(this, arguments);
            ListWidgetModel.commonModel = ListWidgetModel.commonModel || new CommonStaticModel;
            ListWidgetModel.commonModel.groupModuleCount++;
            ListWidgetModel.commonModel.widgetUrl = this.widgetUrl;
            ListWidgetModel.commonModel.name = this.name;
            ListWidgetModel.commonModel.on("sync", this.onCommonModelSync, this)
        },
        setExtraData: function(data) {
            this.extraData = data;
            ListWidgetModel.commonModel = ListWidgetModel.commonModel || new CommonStaticModel;
            ListWidgetModel.commonModel.setExtraData({
                landing: data.landing
            })
        },
        parse: function(data) {
            data = ArticleWidgetModel.prototype.parse.apply(this, arguments);
            !this.responseParams || this.responseParams.remain || this.responseParams.rest || !this.responseParams.total && 0 !== this.responseParams.total || ListWidgetModel.commonModel.setInitOffset(0);
            if (!data || !data.data) return data;
            data.list = _.values(data.data);
            if (this.nextMode) {
                if (data.list && data.list.length) {
                    var list = this.get("list") || [];
                    this.set("list", data.list.concat(list))
                }
                delete data.list
            } else this.clear();
            this.initElementsCount = 0;
            return data
        },
        onCommonModelSync: function(model, data) {
            var newList = data.response.data.splice(0, this.limit),
                list = this.get("list") || [];
            this.clear();
            this.set("list", newList.concat(list));
            this.initElementsCount = 0;
            this.initOffset = 0
        },
        onDirectUpdate: function(model, data) {}
    });
    return ListWidgetModel
});
ognyvo.define("helper/Analytics", {
    TEASER_CONTENT_CLICK: {
        group: "teaser",
        event: "Teaser_Content_Click",
        extra: "content"
    },
    TEASER_CLICK: {
        group: "teaser",
        event: "Teaser_Click",
        extra: "preview"
    },
    TEASER_TEASER_CLICK: {
        group: "teaser",
        event: "Teaser_Teaser_Click",
        extra: "preview"
    },
    LOAD_MORE_TEASERS_BUTTON: {
        group: "teaser",
        event: "Button_Load_More_Click",
        extra: "preview"
    },
    TEASER_PAGE_LINK_CLICK: {
        group: "teaser",
        event: "TeaserPage_Link_Click",
        extra: "preview"
    },
    POPUP: {
        LEFT_SLIDE_SHOW: {
            group: "popup",
            event: "SlideBlock_show",
            extra: "leftSlide"
        },
        LEFT_SLIDE_HIDE: {
            group: "popup",
            event: "SlideBlock_close",
            extra: "leftSlide"
        },
        LEFT_SLIDE_CLICK: {
            group: "popup",
            event: "SlideBlock_click",
            extra: "leftSlide"
        }
    }
});
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return 0 == t ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        return 0 == t ? b : t == d ? b + c : (t /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b : c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158,
            p = 0,
            a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        p || (p = .3 * d);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158,
            p = 0,
            a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        p || (p = .3 * d);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158,
            p = 0,
            a = c;
        if (0 == t) return b;
        if (2 == (t /= d / 2)) return b + c;
        p || (p = d * (.3 * 1.5));
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return 1 > t ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        void 0 == s && (s = 1.70158);
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        void 0 == s && (s = 1.70158);
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        void 0 == s && (s = 1.70158);
        return (t /= d / 2) < 1 ? c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        return (t /= d) < 1 / 2.75 ? c * (7.5625 * t * t) + b : 2 / 2.75 > t ? c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b : 2.5 / 2.75 > t ? c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b : c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
    },
    easeInOutBounce: function(x, t, b, c, d) {
        return d / 2 > t ? .5 * jQuery.easing.easeInBounce(x, 2 * t, 0, c, d) + b : .5 * jQuery.easing.easeOutBounce(x, 2 * t - d, 0, c, d) + .5 * c + b
    }
});
ognyvo.define("easing", ["jquery"], function() {});
ognyvo.define("view/common/ListWidgetView", ["view/article/ArticleWidgetView", "model/common/ListWidgetModel", "helper/AppConsts", "helper/Analytics", "underscore", "jquery", "easing"], function(ArticleWidgetView, WidgetModel, AppConsts, Analytics, _, $) {
    "use strict";
    var ListWidgetView = ArticleWidgetView.extend({
        instanceIndex: 0,
        modelClass: WidgetModel,
        noRenderOnStart: !0,
        modelEvents: {
            sync: "onSync",
            "change:list": "onListChanged",
            DirectUpdate: "onDirectUpdate"
        },
        events: {
            "click a": "onLinkClick",
            "BlockClicked a": "onBlockClick",
            "click .js-more-button": "onNextClick",
            "click .js-main-link": "onMainLinkClick"
        },
        ui: {
            more: ".js-more-button",
            preloader: ".js-preloader",
            list: ".js-list"
        },
        template: null,
        listTemplate: null,
        request_data: {},
        addListeners: null,
        extra: {
            offset: 0
        },
        limit: 5,
        empty: !1,
        useScroll: !0,
        initElementsCount: 0,
        suspended: !1,
        replaceMode: !1,
        lastTimeouts: null,
        init: function() {
            this.lastTimeouts = new Array;
            var that = this;
            this.instanceIndex = ListWidgetView.instanceCount;
            ListWidgetView.instanceCount++;
            var $items = this.ui.list.find(".js-item");
            $items.each(function(index) {
                var $el = $(this);
                setTimeout(function() {
                    $el.removeClass("b-teaser__zoom")
                }, 150 * index + 150 * that.instanceIndex)
            });
            this.initElementsCount = this.ui.list.find(".js-item").length;
            this.url && this.model.setUrl(this.url);
            this.model.setExtraData(this.extra);
            this.model.setLimit(this.limit);
            this.model.setInitElementsCount(this.initElementsCount);
            this.model.setInitOffset(this.extra && this.extra.offset ? this.extra.offset : 0);
            this.suspended && this.model.setSuspendedMode();
            this.addVentEvent(AppConsts.EVENT.LIST.PACKET_DATA, this.onPacketData);
            this.addVentEvent(AppConsts.EVENT.ARTICLE.CATEGORY_FILTER, this.onApplyFilter);
            this.addVentEvent(AppConsts.EVENT.COMMON.SEARCH_STRING_UPDATED, this.onSearchFilterChanged);
            this.addVentEvent(AppConsts.EVENT.COMMON.DO_FILTER_SEARCH, this.onDoFilterSearch);
            this.pub(AppConsts.EVENT.LIST.NEED_FILTER);
            this.useScroll && that.addVentEvent.call(that, AppConsts.EVENT.SYSTEM.SCROLL, that.onScroll);
            this.ui.list.find("img").load(function() {
                var $eI = $(this),
                    $bI = $eI.siblings("img");
                $bI.css({
                    "margin-top": "-" + $bI.height() + "px"
                });
                var $t = $eI.parents(".js-item").find(".b-teaser-title");
                $t.html($t.data("content"));
                setTimeout(function() {
                    $bI.remove()
                }, 300)
            })
        },
        render: function() {
            ArticleWidgetView.prototype.render.apply(this, arguments);
            this.addListeners()
        },
        prepearReplace: function() {},
        getNext: function() {
            this.replaceMode = !1;
            this.model.getNext()
        },
        replaceTeasers: function() {
            this.replaceMode = !0;
            this.prepearReplace();
            this.model.replaceWithNext()
        },
        replaceTeasersFromPacket: function() {
            this.replaceMode = !0;
            this.prepearReplace();
            this.model.replaceWithNextFromCommonModel()
        },
        getLastPostYPos: function() {
            if (this.$el && this.$el instanceof $ && this.$el.length) {
                var off = this.$el.offset();
                return off.top + this.$el.height() - 2 * this.$el.find(".js-item").last().height()
            }
        },
        setPageUrl: function(url) {
            require("App").redirect(url, null, !0);
            url = "/" + url.replace(/^.+?\..+?\//, "");
            url = url.replace(/\?page=(\d+)/, function(s, num) {
                return "?page=" + (parseInt(num) + 1)
            });
            return url
        },
        getCurrentUnitIndex: function() {
            for (var App = require("App"), yScroll = App.vars && App.vars.scroll ? App.vars.scroll.y : 0, $elems = (App.vars.windowSize.height, this.ui.list.children()), i = (this.ui.list.offset(), 0); i < $elems.length; i++) {
                var $el = $($elems[i]),
                    off = $el.offset();
                if (off.top >= yScroll) return $el.index()
            }
            return 0
        },
        getCurrentPageNumber: function() {
            var index = this.getCurrentUnitIndex() + this.model.initOffset,
                page = Math.floor(index / this.limit) + 1;
            return page
        },
        onScroll: function(scroll) {
            this.checkScroll(scroll)
        },
        checkScroll: function(scroll) {
            if (this.$el && this.$el instanceof $ && this.$el.length) {
                var App = require("App");
                scroll = scroll || App.vars.scroll;
                var hWindow = App.vars.windowSize.height,
                    yScroll = scroll.y,
                    lastPostY = this.getLastPostYPos(),
                    pos = this.$el.offset();
                yScroll > lastPostY - hWindow ? this.onScrollTouchBottom() : yScroll <= pos.top && this.onScrollTouchTop();
                this.checkPageNumber()
            }
        },
        checkPageNumber: function() {
            var pageNumber = this.getCurrentPageNumber();
            if (this.pageNumber != pageNumber) {
                var url = Backbone.history.location.pathname + Backbone.history.location.search;
                url.indexOf("page=") > -1 ? url = 2 > pageNumber ? url.replace(/[\?\&]page\=\d+/, "") : url.replace(/page\=\d+/, "page=" + pageNumber) : url += pageNumber > 1 ? (url.indexOf("?") > -1 ? "&" : "?") + "page=" + pageNumber : "";
                this.setPageUrl(url)
            }
            this.pageNumber = pageNumber
        },
        getNew: function() {
            this.empty = !0;
            this.model.setInitOffset(0);
            this.model.setInitElementsCount(0);
            this.model.getUpdate()
        },
        getByFilter: function(filter) {
            this.getNew()
        },
        onScrollTouchTop: function() {},
        onScrollTouchBottom: function() {
            this.getNext()
        },
        onApplyFilter: function(filter) {
            this.pub(AppConsts.EVENT.FILTER.GET_FILTER_DATA, function(data) {
                this.model.updateFilter(data);
                this.getNew()
            }.bind(this))
        },
        onDoFilterSearch: function(data) {
            this.model.updateFilter(data);
            this.getNew()
        },
        onSearchFilterChanged: function(string) {
            var params = string.substring(string.indexOf("?") + 1),
                data = $.getUrlParamsAsObject(params);
            this.model.updateFilter(data)
        },
        onDirectUpdate: function(data) {},
        blockClickHandler: function(e, $block, url) {},
        mainLinkClickHandler: function(e, $block, $target) {},
        onBlockClick: function(e, $el, url) {
            e.preventDefault();
            this.blockClickHandler(e, $el, url)
        },
        onMainLinkClick: function(e) {
            var $el = $(e.currentTarget);
            $el.parents(".js-clickable-block").length ? e.preventDefault() : this.mainLinkClickHandler(e, $el, $(e.target))
        },
        onNextClick: function(e) {
            e.preventDefault();
            this.getNext()
        },
        onListChanged: function(model, list) {
            var that = this;
            if (!list || !list.length) {
                this.model.clearMode || this.ui.preloader.hide();
                return !1
            }
            this.ui.preloader.show();
            var showed = this.$el.find(".js-item").not(".js-banner-item").length - this.initElementsCount;
            this.replaceMode || (list = list.slice(0, list.length - showed));
            var data = _.extend({
                    list: list,
                    global: require("App").params
                }, this.model.extraData),
                $lastItems = this.ui.list.find(".js-item"),
                listHtml = this.listTemplate.render(data),
                $new = $(listHtml),
                $items = $new.find(".js-item");
            $items.length || ($items = $new.filter(".js-item"));
            if (this.replaceMode) {
                var i = 0;
                $lastItems.each(function(index) {
                    var $el = $(this);
                    if ($items[index]) {
                        150 * (that.instanceIndex % 2);
                        that.lastTimeouts[index] && clearTimeout(that.lastTimeouts[index]);
                        var $i;
                        $i = $($items[index]);
                        $el.find("a").prop("href", $i.find("a").prop("href"));
                        $el.find(".b-teaser-title").data("content", $i.find(".b-teaser-title").html());
                        var $I = $el.find("img"),
                            $nI = $I.clone();
                        $I.before($nI);
                        $I.prop("src", $i.find("img").prop("src"));
                        i++
                    } else {
                        $el.remove();
                        i++
                    }
                });
                for (; $items[i];) {
                    var $el = $items[i];
                    this.ui.list.append($el);
                    i++
                }
            } else {
                this.ui.list.append($new);
                $items.each(function(index) {
                    var $el = $(this),
                        indexDelay = that.replaceMode ? 150 * that.instanceIndex : 0;
                    $el.hide().delay(150 * index + indexDelay).fadeIn({
                        duration: 300 + 50 * (index + 1),
                        easing: "easeInOutQuint",
                        complete: function() {}
                    });
                    console.log("WAIT REMOVE ZOOM:", 300, " + ", 150, " * ", index, " + ", indexDelay);
                    setTimeout(function() {
                        $el.removeClass("b-teaser__zoom")
                    }, 300 + 150 * index + indexDelay)
                });
                require("App").parser.parse($new)
            }
            $.force_appear();
            this.checkPageNumber();
            return !0
        },
        onPacketData: function(data) {
            data.url && require("App").redirect(data.url, null, !0);
            this.model.setUrls(data.urls)
        },
        onSync: function(model, response) {
            this.model.get("total");
            !this.model.responseParams || this.model.get("remain") || this.model.responseParams.remain || this.model.get("rest") || this.model.responseParams.rest || !this.model.responseParams.total && 0 !== this.model.responseParams.total ? this.ui.preloader.show() : this.ui.preloader.hide();
            if (!this.model.nextMode) {
                var url = this.model.get("url");
                require("App").redirect(url, null, !0)
            }
            var title = this.model.get("title");
            title && require("App").setTitle(title);
            this.pub(AppConsts.EVENT.ARTICLE.LIST_DATA, this.model.toJSON());
            this.empty = !1
        }
    });
    ListWidgetView.instanceCount = 0;
    return ListWidgetView
});
ognyvo.define("components/widgets/teasers/BaseList/WidgetModel", ["model/common/ListWidgetModel", "helper/AppConsts"], function(ListWidgetModel, AppConsts) {
    "use strict";
    var WidgetModel = ListWidgetModel.extend({
        name: "components/widgets/teasers/BaseList/WidgetModel",
        widgetUrl: "/landing/load/"
    });
    return WidgetModel
});
ognyvo.define("components/widgets/teasers/BaseList/views/twig/layout.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/BaseList/views/twig/layout.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "raw",
            value: '<div class="js-list">\n    '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.include",
                only: !1,
                includeMissing: !1,
                stack: [{
                    type: "Twig.expression.type._function",
                    fn: "f",
                    params: [{
                        type: "Twig.expression.type.parameter.start",
                        value: "(",
                        match: ["("]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "relativePath"
                    }, {
                        type: "Twig.expression.type.comma"
                    }, {
                        type: "Twig.expression.type.string",
                        value: "./list.twig"
                    }, {
                        type: "Twig.expression.type.parameter.end",
                        value: ")",
                        match: [")"],
                        expression: !1
                    }]
                }],
                withStack: [{
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "item"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "teaser",
                    match: ["teaser"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "params"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "params",
                    match: ["params"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "url"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "url",
                    match: ["url"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "landing"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "landing",
                    match: ["landing"]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }]
            }
        }, {
            type: "raw",
            value: "</div>\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "moreButton",
                    match: ["moreButton"]
                }],
                output: [{
                    type: "raw",
                    value: '<div class="b-load-more">\n    <a href="#" class="e-btn e-btn__w100 e-btn__h62 e-btn__dark js-more-button js-preloader"><span><i class="ico-refresh"></i>Показать еще новости...</span></a>\n</div>\n'
                }]
            }
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/BaseList/views/twig/list.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/BaseList/views/twig/list.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "type",
                    match: ["type"]
                }, {
                    type: "Twig.expression.type.string",
                    value: "b-teaser__big"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "==",
                    precidence: 9,
                    associativity: "leftToRight",
                    operator: "=="
                }],
                output: [{
                    type: "raw",
                    value: "    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "params",
                            match: ["params"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "row_count"
                        }, {
                            type: "Twig.expression.type.test",
                            filter: "defined"
                        }, {
                            type: "Twig.expression.type.variable",
                            value: "params",
                            match: ["params"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "row_count"
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "and",
                            precidence: 13,
                            associativity: "leftToRight",
                            operator: "and"
                        }],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "r",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "params",
                                    match: ["params"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "row_count"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.else",
                        match: ["else"],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "r",
                                expression: [{
                                    type: "Twig.expression.type.number",
                                    value: 2,
                                    match: ["2", null]
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\n    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "list",
                            match: ["list"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "length",
                            match: ["|length", "length"]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.for",
                                key_var: null,
                                value_var: "row",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "list",
                                    match: ["list"]
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "batch",
                                    match: ["|batch", "batch"],
                                    params: [{
                                        type: "Twig.expression.type.parameter.start",
                                        value: "(",
                                        match: ["("]
                                    }, {
                                        type: "Twig.expression.type.variable",
                                        value: "r",
                                        match: ["r"]
                                    }, {
                                        type: "Twig.expression.type.parameter.end",
                                        value: ")",
                                        match: [")"],
                                        expression: !1
                                    }]
                                }],
                                output: [{
                                    type: "raw",
                                    value: '            <div class="cfx">\n                '
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.set",
                                        key: "key",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "loop",
                                            match: ["loop"]
                                        }, {
                                            type: "Twig.expression.type.key.period",
                                            key: "index0"
                                        }, {
                                            type: "Twig.expression.type.variable",
                                            value: "r",
                                            match: ["r"]
                                        }, {
                                            type: "Twig.expression.type.operator.binary",
                                            value: "*",
                                            precidence: 5,
                                            associativity: "leftToRight",
                                            operator: "*"
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "            "
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.for",
                                        key_var: null,
                                        value_var: "teaser",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "row",
                                            match: ["row"]
                                        }],
                                        output: [{
                                            type: "raw",
                                            value: "                "
                                        }, {
                                            type: "logic",
                                            token: {
                                                type: "Twig.logic.type.include",
                                                only: !1,
                                                includeMissing: !1,
                                                stack: [{
                                                    type: "Twig.expression.type._function",
                                                    fn: "f",
                                                    params: [{
                                                        type: "Twig.expression.type.parameter.start",
                                                        value: "(",
                                                        match: ["("]
                                                    }, {
                                                        type: "Twig.expression.type.string",
                                                        value: "relativePath"
                                                    }, {
                                                        type: "Twig.expression.type.comma"
                                                    }, {
                                                        type: "Twig.expression.type.string",
                                                        value: "./partial/b-teaser.twig"
                                                    }, {
                                                        type: "Twig.expression.type.parameter.end",
                                                        value: ")",
                                                        match: [")"],
                                                        expression: !1
                                                    }]
                                                }],
                                                withStack: [{
                                                    type: "Twig.expression.type.object.start",
                                                    value: "{",
                                                    match: ["{"]
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "item"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "teaser",
                                                    match: ["teaser"]
                                                }, {
                                                    type: "Twig.expression.type.comma"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "key"
                                                }, {
                                                    type: "Twig.expression.type.parameter.end",
                                                    value: ")",
                                                    match: [")"],
                                                    expression: !0,
                                                    params: [{
                                                        type: "Twig.expression.type.variable",
                                                        value: "key",
                                                        match: ["key"]
                                                    }, {
                                                        type: "Twig.expression.type.variable",
                                                        value: "loop",
                                                        match: ["loop"]
                                                    }, {
                                                        type: "Twig.expression.type.key.period",
                                                        key: "index0"
                                                    }, {
                                                        type: "Twig.expression.type.operator.binary",
                                                        value: "+",
                                                        precidence: 6,
                                                        associativity: "leftToRight",
                                                        operator: "+"
                                                    }]
                                                }, {
                                                    type: "Twig.expression.type.comma"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "params"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "params",
                                                    match: ["params"]
                                                }, {
                                                    type: "Twig.expression.type.comma"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "url"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "url",
                                                    match: ["url"]
                                                }, {
                                                    type: "Twig.expression.type.comma"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "landing"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "landing",
                                                    match: ["landing"]
                                                }, {
                                                    type: "Twig.expression.type.object.end",
                                                    value: "}",
                                                    match: ["}"]
                                                }]
                                            }
                                        }, {
                                            type: "raw",
                                            value: "            "
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "            </div>\n        "
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }]
            }
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.else",
                match: ["else"],
                output: [{
                    type: "raw",
                    value: "    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        key_var: "key",
                        value_var: "teaser",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "list",
                            match: ["list"]
                        }],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.include",
                                only: !1,
                                includeMissing: !1,
                                stack: [{
                                    type: "Twig.expression.type._function",
                                    fn: "f",
                                    params: [{
                                        type: "Twig.expression.type.parameter.start",
                                        value: "(",
                                        match: ["("]
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "relativePath"
                                    }, {
                                        type: "Twig.expression.type.comma"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "./partial/b-teaser.twig"
                                    }, {
                                        type: "Twig.expression.type.parameter.end",
                                        value: ")",
                                        match: [")"],
                                        expression: !1
                                    }]
                                }],
                                withStack: [{
                                    type: "Twig.expression.type.object.start",
                                    value: "{",
                                    match: ["{"]
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "item"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "teaser",
                                    match: ["teaser"]
                                }, {
                                    type: "Twig.expression.type.comma"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "key"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "key",
                                    match: ["key"]
                                }, {
                                    type: "Twig.expression.type.comma"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "params"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "params",
                                    match: ["params"]
                                }, {
                                    type: "Twig.expression.type.comma"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "url"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "url",
                                    match: ["url"]
                                }, {
                                    type: "Twig.expression.type.comma"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "landing"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "landing",
                                    match: ["landing"]
                                }, {
                                    type: "Twig.expression.type.object.end",
                                    value: "}",
                                    match: ["}"]
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }]
            }
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/BaseList/views/twig/partial/b-teaser.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/BaseList/views/twig/partial/b-teaser.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "raw",
            value: " "
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "url",
                expression: [{
                    type: "Twig.expression.type.variable",
                    value: "teaser",
                    match: ["teaser"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "_url"
                }, {
                    type: "Twig.expression.type.string",
                    value: "?&b="
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "~",
                    precidence: 6,
                    associativity: "leftToRight",
                    operator: "~"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "params",
                    match: ["params"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "b"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "~",
                    precidence: 6,
                    associativity: "leftToRight",
                    operator: "~"
                }, {
                    type: "Twig.expression.type.string",
                    value: "&p="
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "~",
                    precidence: 6,
                    associativity: "leftToRight",
                    operator: "~"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "key",
                    match: ["key"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "~",
                    precidence: 6,
                    associativity: "leftToRight",
                    operator: "~"
                }]
            }
        }, {
            type: "raw",
            value: " "
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.include",
                only: !1,
                includeMissing: !1,
                stack: [{
                    type: "Twig.expression.type._function",
                    fn: "f",
                    params: [{
                        type: "Twig.expression.type.parameter.start",
                        value: "(",
                        match: ["("]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "relativePath"
                    }, {
                        type: "Twig.expression.type.comma"
                    }, {
                        type: "Twig.expression.type.string",
                        value: "./partial/"
                    }, {
                        type: "Twig.expression.type.variable",
                        value: "type",
                        match: ["type"]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "~",
                        precidence: 6,
                        associativity: "leftToRight",
                        operator: "~"
                    }, {
                        type: "Twig.expression.type.string",
                        value: ".twig"
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "~",
                        precidence: 6,
                        associativity: "leftToRight",
                        operator: "~"
                    }, {
                        type: "Twig.expression.type.parameter.end",
                        value: ")",
                        match: [")"],
                        expression: !1
                    }]
                }],
                withStack: [{
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "item"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "teaser",
                    match: ["teaser"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "params"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "params",
                    match: ["params"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "url"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "url",
                    match: ["url"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "landing"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "landing",
                    match: ["landing"]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }]
            }
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/BaseList/views/twig/partial/b-teaser__big.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/BaseList/views/twig/partial/b-teaser__big.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "labels",
                expression: [{
                    type: "Twig.expression.type.array.start",
                    value: "[",
                    match: ["["]
                }, {
                    type: "Twig.expression.type.string",
                    value: "Срочная новость"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Молния"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Самое интересное"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Новость дня"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Top 10"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Эксклюзив"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Прямой эфир"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Главное"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Популярное"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Рекомендуем"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Выбор редакции"
                }, {
                    type: "Twig.expression.type.array.end",
                    value: "]",
                    match: ["]"]
                }]
            }
        }, {
            type: "raw",
            value: '<div class="js-item js-teaser b-teaser-item b-teaser__zoom '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "params",
                    match: ["params"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "analyticsEvent"
                }, {
                    type: "Twig.expression.type.test",
                    filter: "defined"
                }],
                output: [{
                    type: "raw",
                    value: "js-analytics-link"
                }]
            }
        }, {
            type: "raw",
            value: " "
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "params",
                match: ["params"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "class"
            }]
        }, {
            type: "raw",
            value: '" data-statistic-object-id="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "_id"
            }]
        }, {
            type: "raw",
            value: '" data-statistic-params="{&quot;landing&quot;:&quot;'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "landing",
                match: ["landing"]
            }]
        }, {
            type: "raw",
            value: '&quot;}" '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "params",
                    match: ["params"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "analyticsEvent"
                }, {
                    type: "Twig.expression.type.test",
                    filter: "defined"
                }],
                output: [{
                    type: "raw",
                    value: "    data-tracking='"
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "params",
                        match: ["params"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "analyticsEvent"
                    }, {
                        type: "Twig.expression.type.filter",
                        value: "json_encode",
                        match: ["|json_encode", "json_encode"]
                    }]
                }, {
                    type: "raw",
                    value: "'\n"
                }]
            }
        }, {
            type: "raw",
            value: '>\n    <!-- Teaser Big With Meta Info -->\n    <div class="b-teaser b-teaser__big">\n        '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "label"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "type"
                }, {
                    type: "Twig.expression.type.number",
                    value: 0,
                    match: ["0", null]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ">",
                    precidence: 8,
                    associativity: "leftToRight",
                    operator: ">"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "label"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "color"
                }, {
                    type: "Twig.expression.type.string",
                    value: "none"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "!=",
                    precidence: 9,
                    associativity: "leftToRight",
                    operator: "!="
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "and",
                    precidence: 13,
                    associativity: "leftToRight",
                    operator: "and"
                }],
                output: [{
                    type: "raw",
                    value: '            <i class="b-teaser-label b-teaser-label__text b-teaser-label__'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "item",
                        match: ["item"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "label"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "color"
                    }]
                }, {
                    type: "raw",
                    value: '"><i></i>'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "labels",
                        match: ["labels"]
                    }, {
                        type: "Twig.expression.type.key.brackets",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "item",
                            match: ["item"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "label"
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "type"
                        }]
                    }]
                }, {
                    type: "raw",
                    value: "</i>\n        "
                }]
            }
        }, {
            type: "raw",
            value: '        <div class="b-teaser-img"><a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" target="_blank">\n                <img src="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type._function",
                fn: "getImagePath",
                params: [{
                    type: "Twig.expression.type.parameter.start",
                    value: "(",
                    match: ["("]
                }, {
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "cover"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "rect"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 240,
                    match: ["240", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 240,
                    match: ["240", null]
                }, {
                    type: "Twig.expression.type.parameter.end",
                    value: ")",
                    match: [")"],
                    expression: !1
                }]
            }]
        }, {
            type: "raw",
            value: '" alt="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: '"></a></div>\n        <div class="b-teaser-meta">\n            <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" title="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: '" target="_blank">\n                '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "vote"
                }, {
                    type: "Twig.expression.type.test",
                    filter: "defined"
                }],
                output: [{
                    type: "raw",
                    value: '                <div class="b-rating cfx">\n                    '
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        key_var: null,
                        value_var: "i ",
                        expression: [{
                            type: "Twig.expression.type.number",
                            value: 5,
                            match: ["5", null]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 1,
                            match: ["1", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "..",
                            precidence: 20,
                            associativity: "leftToRight",
                            operator: ".."
                        }],
                        output: [{
                            type: "raw",
                            value: '                    <input type="radio" id="teaser-1-star'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "i",
                                match: ["i"]
                            }]
                        }, {
                            type: "raw",
                            value: '" name="rating" value="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "i",
                                match: ["i"]
                            }]
                        }, {
                            type: "raw",
                            value: '" '
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.if",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "i",
                                    match: ["i"]
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "vote"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ">",
                                    precidence: 8,
                                    associativity: "leftToRight",
                                    operator: ">"
                                }, {
                                    type: "Twig.expression.type.parameter.end",
                                    value: ")",
                                    match: [")"],
                                    expression: !0,
                                    params: [{
                                        type: "Twig.expression.type.variable",
                                        value: "i",
                                        match: ["i"]
                                    }, {
                                        type: "Twig.expression.type.number",
                                        value: 1,
                                        match: ["1", null]
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "+",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "+"
                                    }]
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "vote"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "<",
                                    precidence: 8,
                                    associativity: "leftToRight",
                                    operator: "<"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "and",
                                    precidence: 13,
                                    associativity: "leftToRight",
                                    operator: "and"
                                }],
                                output: [{
                                    type: "raw",
                                    value: 'checked="" '
                                }]
                            }
                        }, {
                            type: "raw",
                            value: '><label for="teaser-1-star'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "i",
                                match: ["i"]
                            }]
                        }, {
                            type: "raw",
                            value: '"><i class="ico-star"></i></label>\n                    '
                        }]
                    }
                }, {
                    type: "raw",
                    value: "                </div>\n                "
                }]
            }
        }, {
            type: "raw",
            value: '                <div class="b-teaser-date"><i class="ico-calendar"></i>'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "dt_time"
            }, {
                type: "Twig.expression.type.filter",
                value: "date",
                match: ["|date", "date"],
                params: [{
                    type: "Twig.expression.type.parameter.start",
                    value: "(",
                    match: ["("]
                }, {
                    type: "Twig.expression.type.string",
                    value: "H:i d.m.Y"
                }, {
                    type: "Twig.expression.type.parameter.end",
                    value: ")",
                    match: [")"],
                    expression: !1
                }]
            }]
        }, {
            type: "raw",
            value: '</div>\n                <div class="b-teaser-views"><i class="ico-views"></i>'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "viewcount"
            }]
        }, {
            type: "raw",
            value: '</div>\n            </a>\n        </div>\n        <div class="b-teaser-content">\n            <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" target="_blank" class="b-teaser-title"><span class="b-teaser-title-inner">'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: "</span></a>\n        </div>\n    </div>\n</div>"
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/BaseList/views/twig/partial/b-teaser__image.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/BaseList/views/twig/partial/b-teaser__image.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "raw",
            value: '<div class="js-item js-teaser b-teaser__zoom" data-statistic-object-id="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "teaser",
                match: ["teaser"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "_id"
            }]
        }, {
            type: "raw",
            value: '" data-statistic-params="{&quot;landing&quot;:&quot;'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "landing",
                match: ["landing"]
            }]
        }, {
            type: "raw",
            value: '&quot;}">\n    <div class="b-teaser b-teaser__image">\n        <i class="b-teaser-label b-teaser-label__red"></i>\n        <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" target="_blank" class="b-teaser-img"><img src="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type._function",
                fn: "getImagePath",
                params: [{
                    type: "Twig.expression.type.parameter.start",
                    value: "(",
                    match: ["("]
                }, {
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "cover"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "rect"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 240,
                    match: ["240", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 172,
                    match: ["172", null]
                }, {
                    type: "Twig.expression.type.parameter.end",
                    value: ")",
                    match: [")"],
                    expression: !1
                }]
            }]
        }, {
            type: "raw",
            value: '" alt="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "teaser",
                match: ["teaser"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: '"></a>\n        <div class="b-teaser-content">\n            <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" target="_blank" class="b-teaser-title"><span class="b-teaser-title-inner">'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "teaser",
                match: ["teaser"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: "</span></a>\n        </div>\n    </div>\n</div>"
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/BaseList/views/twig/partial/b-teaser__micro.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/BaseList/views/twig/partial/b-teaser__micro.twig",
        allowInlineIncludes: !0,
        data: [],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/BaseList/TwigPack", ["./views/twig/layout.twig", "./views/twig/list.twig", "./views/twig/partial/b-teaser.twig", "./views/twig/partial/b-teaser__big.twig", "./views/twig/partial/b-teaser__image.twig", "./views/twig/partial/b-teaser__micro.twig"], function(Template, List) {
    return [].slice.call(arguments, 0)
});
ognyvo.define("components/widgets/teasers/BaseList/WidgetView", ["view/common/ListWidgetView", "helper/AppConsts", "helper/Analytics", "./WidgetModel", "settings", "./TwigPack", "utils"], function(ListWidgetView, AppConsts, Analytics, WidgetModel, Settings, Templates) {
    var TeaserWidgetView = ListWidgetView.extend({
        modelClass: WidgetModel,
        listTemplate: Templates[1],
        noRenderOnStart: !1,
        analytics: {
            "click .js-teaser": [Analytics.TEASER_CLICK, Analytics.TEASER_TEASER_CLICK],
            "click .js-more-button": Analytics.LOAD_MORE_TEASERS_BUTTON
        },
        useScroll: !1,
        limit: 8,
        type: "",
        params: {},
        apiUrl: "",
        init: function() {
            ListWidgetView.prototype.init.apply(this, arguments);
            this.apiUrl && (this.model.widgetUrl = this.apiUrl);
            this.model.addExtraData({
                type: this.type,
                params: this.params
            });
            var App = require("App");
            App.vent.on(AppConsts.EVENT.SYSTEM.WINDOW_BLUR, this.onBlur, this).on(AppConsts.EVENT.SYSTEM.WINDOW_FOCUS, this.onFocus, this)
        },
        onBlur: function() {},
        onFocus: function() {
            this.replaceTeasersFromPacket()
        },
        onListChanged: function(model, list) {
            ListWidgetView.prototype.onListChanged.apply(this, arguments)
        },
        mainLinkClickHandler: function(e, $block, $target) {},
        blockClickHandler: function(e, $block, url) {}
    });
    return TeaserWidgetView
});
ognyvo.define("widgetPack", ["components/widgets/teasers/BaseList/WidgetView"], function(Template) {
    return Template
});
console.log("APP LOADED");
ognyvo.define("App", ["jquery", "underscore", "backbone", "marionette", "service/DomModulesParser", "util/AppUtils", "plugin/MarionetteTwigRenderer", "helper/window", "domReady", "asset/template/TwigCommonPack", "widgetPack"], function($, _, Backbone, Marionette, DomModulesParser, AppUtils, MarionetteTwigRenderer, window, domReady) {
    console.log("APP PROCCESSED");
    var App = new Marionette.Application({
        channelName: "appChannel"
    });
    App.isDomReady = !1;
    Backbone.App = App;
    window.App = App;
    App.vars = {
        startTime: (new Date).getTime(),
        windowSize: {
            width: $(window).width(),
            height: $(window).height()
        },
        screenSize: window.screen,
        initLocation: window.location
    };
    App.isDebug = window.jsDebug;
    try {
        AppUtils(App, window)
    } catch (e) {
        console && console.error ? console.error("AppUtils ERROR: ", e) : console.log("AppUtils ERROR: ", e)
    }
    try {
        DomModulesParser.initialize()
    } catch (e) {
        console && console.error ? console.error("DomModules ERROR: ", e) : console.log("DomModules ERROR: ", e)
    }
    App.parser = DomModulesParser;
    App.addInitializer(function(options) {
        App.vent.trigger("AppBeforeStarted", App);
        App.vent.trigger("AppStarted", App)
    });
    domReady(function() {
        console.log("-== DOM READY ==-");
        App.isDomReady = !0;
        App.vent.trigger("DomReady", App);
        window.prefetchResources && window.prefetchResources.length && App.prefetch(window.prefetchResources)
    });
    window.onbeforeunload = function(event) {};
    return App
});
console.log("startApp is loaded");
ognyvo.require(["App"], function(App) {
    var options = {};
    console.log("APP START EXECUTE");
    App.start(options)
});
ognyvo.define("startApp", function() {});
! function(factory) {
    "function" == typeof ognyvo.define && ognyvo.define.amd ? ognyvo.define("jquery.ui.widget", ["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery)
}(function($) {
    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;
    $.cleanData = function(orig) {
        return function(elems) {
            var events, elem, i;
            for (i = 0; null != (elem = elems[i]); i++) try {
                events = $._data(elem, "events");
                events && events.remove && $(elem).triggerHandler("remove")
            } catch (e) {}
            orig(elems)
        }
    }($.cleanData);
    $.widget = function(name, base, prototype) {
        var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {},
            namespace = name.split(".")[0];
        name = name.split(".")[1];
        fullName = namespace + "-" + name;
        if (!prototype) {
            prototype = base;
            base = $.Widget
        }
        $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName)
        };
        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) return new constructor(options, element);
            arguments.length && this._createWidget(options, element)
        };
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        });
        basePrototype = new base;
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function(prop, value) {
            $.isFunction(value) ? proxiedPrototype[prop] = function() {
                var _super = function() {
                        return base.prototype[prop].apply(this, arguments)
                    },
                    _superApply = function(args) {
                        return base.prototype[prop].apply(this, args)
                    };
                return function() {
                    var returnValue, __super = this._super,
                        __superApply = this._superApply;
                    this._super = _super;
                    this._superApply = _superApply;
                    returnValue = value.apply(this, arguments);
                    this._super = __super;
                    this._superApply = __superApply;
                    return returnValue
                }
            }() : proxiedPrototype[prop] = value
        });
        constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function(i, child) {
                var childPrototype = child.prototype;
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto)
            });
            delete existingConstructor._childConstructors
        } else base._childConstructors.push(constructor);
        $.widget.bridge(name, constructor);
        return constructor
    };
    $.widget.extend = function(target) {
        for (var key, value, input = widget_slice.call(arguments, 1), inputIndex = 0, inputLength = input.length; inputLength > inputIndex; inputIndex++)
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                input[inputIndex].hasOwnProperty(key) && void 0 !== value && ($.isPlainObject(value) ? target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value) : target[key] = value)
            }
        return target
    };
    $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = "string" == typeof options,
                args = widget_slice.call(arguments, 1),
                returnValue = this;
            options = !isMethodCall && args.length ? $.widget.extend.apply(null, [options].concat(args)) : options;
            isMethodCall ? this.each(function() {
                var methodValue, instance = $.data(this, fullName);
                if ("instance" === options) {
                    returnValue = instance;
                    return !1
                }
                if (!instance) return $.error("cannot call methods on " + name + " prior to initialization; attempted to call method '" + options + "'");
                if (!$.isFunction(instance[options]) || "_" === options.charAt(0)) return $.error("no such method '" + options + "' for " + name + " widget instance");
                methodValue = instance[options].apply(instance, args);
                if (methodValue !== instance && void 0 !== methodValue) {
                    returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                    return !1
                }
            }) : this.each(function() {
                var instance = $.data(this, fullName);
                if (instance) {
                    instance.option(options || {});
                    instance._init && instance._init()
                } else $.data(this, fullName, new object(options, this))
            });
            return returnValue
        }
    };
    $.Widget = function() {};
    $.Widget._childConstructors = [];
    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(!0, this.element, {
                    remove: function(event) {
                        event.target === element && this.destroy()
                    }
                });
                this.document = $(element.style ? element.ownerDocument : element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: $.noop,
        widget: function() {
            return this.element
        },
        option: function(key, value) {
            var parts, curOption, i, options = key;
            if (0 === arguments.length) return $.widget.extend({}, this.options);
            if ("string" == typeof key) {
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]]
                    }
                    key = parts.pop();
                    if (1 === arguments.length) return void 0 === curOption[key] ? null : curOption[key];
                    curOption[key] = value
                } else {
                    if (1 === arguments.length) return void 0 === this.options[key] ? null : this.options[key];
                    options[key] = value
                }
            }
            this._setOptions(options);
            return this
        },
        _setOptions: function(options) {
            var key;
            for (key in options) this._setOption(key, options[key]);
            return this
        },
        _setOption: function(key, value) {
            this.options[key] = value;
            if ("disabled" === key) {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!value);
                if (value) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus")
                }
            }
            return this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement, instance = this;
            if ("boolean" != typeof suppressDisabledCheck) {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = !1
            }
            if (handlers) {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element)
            } else {
                handlers = element;
                element = this.element;
                delegateElement = this.widget()
            }
            $.each(handlers, function(event, handler) {
                function handlerProxy() {
                    return suppressDisabledCheck || instance.options.disabled !== !0 && !$(this).hasClass("ui-state-disabled") ? ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments) : void 0
                }
                "string" != typeof handler && (handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++);
                var match = event.match(/^([\w:-]*)\s*(.*)$/),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                selector ? delegateElement.delegate(selector, eventName, handlerProxy) : element.bind(eventName, handlerProxy)
            })
        },
        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            element.unbind(eventName).undelegate(eventName)
        },
        _delay: function(handler, delay) {
            function handlerProxy() {
                return ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments)
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0)
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function(event) {
                    $(event.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(event) {
                    $(event.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function(event) {
                    $(event.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(event) {
                    $(event.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(type, event, data) {
            var prop, orig, callback = this.options[type];
            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
            event.target = this.element[0];
            orig = event.originalEvent;
            if (orig)
                for (prop in orig) prop in event || (event[prop] = orig[prop]);
            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === !1 || event.isDefaultPrevented())
        }
    };
    $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            "string" == typeof options && (options = {
                effect: options
            });
            var hasOptions, effectName = options ? options === !0 || "number" == typeof options ? defaultEffect : options.effect || defaultEffect : method;
            options = options || {};
            "number" == typeof options && (options = {
                duration: options
            });
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            options.delay && element.delay(options.delay);
            hasOptions && $.effects && $.effects.effect[effectName] ? element[method](options) : effectName !== method && element[effectName] ? element[effectName](options.duration, options.easing, callback) : element.queue(function(next) {
                $(this)[method]();
                callback && callback.call(element[0]);
                next()
            })
        }
    });
    $.widget
});
! function(factory) {
    "use strict";
    "function" == typeof ognyvo.define && ognyvo.define.amd ? ognyvo.define("jquery.form", ["jquery"], factory) : factory("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function($) {
    "use strict";

    function doAjaxSubmit(e) {
        var options = e.data;
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
            $(e.target).ajaxSubmit(options)
        }
    }

    function captureSubmittingElement(e) {
        var target = e.target,
            $el = $(target);
        if (!$el.is("[type=submit],[type=image]")) {
            var t = $el.closest("[type=submit]");
            if (0 === t.length) return;
            target = t[0]
        }
        var form = this;
        form.clk = target;
        if ("image" == target.type)
            if (void 0 !== e.offsetX) {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY
            } else if ("function" == typeof $.fn.offset) {
                var offset = $el.offset();
                form.clk_x = e.pageX - offset.left;
                form.clk_y = e.pageY - offset.top
            } else {
                form.clk_x = e.pageX - target.offsetLeft;
                form.clk_y = e.pageY - target.offsetTop
            }
        setTimeout(function() {
            form.clk = form.clk_x = form.clk_y = null
        }, 100)
    }

    function log() {
        if ($.fn.ajaxSubmit.debug) {
            var msg = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(msg) : window.opera && window.opera.postError && window.opera.postError(msg)
        }
    }
    var feature = {};
    feature.fileapi = void 0 !== $("<input type='file'/>").get(0).files;
    feature.formdata = void 0 !== window.FormData;
    var hasProp = !!$.fn.prop;
    $.fn.attr2 = function() {
        if (!hasProp) return this.attr.apply(this, arguments);
        var val = this.prop.apply(this, arguments);
        return val && val.jquery || "string" == typeof val ? val : this.attr.apply(this, arguments)
    };
    $.fn.ajaxSubmit = function(options) {
        function deepSerialize(extraData) {
            var i, part, serialized = $.param(extraData, options.traditional).split("&"),
                len = serialized.length,
                result = [];
            for (i = 0; len > i; i++) {
                serialized[i] = serialized[i].replace(/\+/g, " ");
                part = serialized[i].split("=");
                result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])])
            }
            return result
        }

        function fileUploadXhr(a) {
            for (var formdata = new FormData, i = 0; i < a.length; i++) formdata.append(a[i].name, a[i].value);
            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (i = 0; i < serializedData.length; i++) serializedData[i] && formdata.append(serializedData[i][0], serializedData[i][1])
            }
            options.data = null;
            var s = $.extend(!0, {}, $.ajaxSettings, options, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: method || "POST"
            });
            options.uploadProgress && (s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                xhr.upload && xhr.upload.addEventListener("progress", function(event) {
                    var percent = 0,
                        position = event.loaded || event.position,
                        total = event.total;
                    event.lengthComputable && (percent = Math.ceil(position / total * 100));
                    options.uploadProgress(event, position, total, percent)
                }, !1);
                return xhr
            });
            s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                options.formData ? o.data = options.formData : o.data = formdata;
                beforeSend && beforeSend.call(this, xhr, o)
            };
            return $.ajax(s)
        }

        function fileUploadIframe(a) {
            function getDoc(frame) {
                var doc = null;
                try {
                    frame.contentWindow && (doc = frame.contentWindow.document)
                } catch (err) {
                    log("cannot get iframe.contentWindow document: " + err)
                }
                if (doc) return doc;
                try {
                    doc = frame.contentDocument ? frame.contentDocument : frame.document
                } catch (err) {
                    log("cannot get iframe.contentDocument: " + err);
                    doc = frame.document
                }
                return doc
            }

            function doSubmit() {
                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log("state = " + state);
                        state && "uninitialized" == state.toLowerCase() && setTimeout(checkState, 50)
                    } catch (e) {
                        log("Server abort: ", e, " (", e.name, ")");
                        cb(SERVER_ABORT);
                        timeoutHandle && clearTimeout(timeoutHandle);
                        timeoutHandle = void 0
                    }
                }
                var t = $form.attr2("target"),
                    a = $form.attr2("action"),
                    mp = "multipart/form-data",
                    et = $form.attr("enctype") || $form.attr("encoding") || mp;
                form.setAttribute("target", id);
                (!method || /post/i.test(method)) && form.setAttribute("method", "POST");
                a != s.url && form.setAttribute("action", s.url);
                s.skipEncodingOverride || method && !/post/i.test(method) || $form.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                });
                s.timeout && (timeoutHandle = setTimeout(function() {
                    timedOut = !0;
                    cb(CLIENT_TIMEOUT_ABORT)
                }, s.timeout));
                var extraInputs = [];
                try {
                    if (s.extraData)
                        for (var n in s.extraData) s.extraData.hasOwnProperty(n) && ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty("name") && s.extraData[n].hasOwnProperty("value") ? extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value).appendTo(form)[0]) : extraInputs.push($('<input type="hidden" name="' + n + '">').val(s.extraData[n]).appendTo(form)[0]));
                    s.iframeTarget || $io.appendTo("body");
                    io.attachEvent ? io.attachEvent("onload", cb) : io.addEventListener("load", cb, !1);
                    setTimeout(checkState, 15);
                    try {
                        form.submit()
                    } catch (err) {
                        var submitFn = document.createElement("form").submit;
                        submitFn.apply(form)
                    }
                } finally {
                    form.setAttribute("action", a);
                    form.setAttribute("enctype", et);
                    t ? form.setAttribute("target", t) : $form.removeAttr("target");
                    $(extraInputs).remove()
                }
            }

            function cb(e) {
                if (!xhr.aborted && !callbackProcessed) {
                    doc = getDoc(io);
                    if (!doc) {
                        log("cannot access response document");
                        e = SERVER_ABORT
                    }
                    if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                        xhr.abort("timeout");
                        deferred.reject(xhr, "timeout")
                    } else if (e == SERVER_ABORT && xhr) {
                        xhr.abort("server abort");
                        deferred.reject(xhr, "error", "server abort")
                    } else if (doc && doc.location.href != s.iframeSrc || timedOut) {
                        io.detachEvent ? io.detachEvent("onload", cb) : io.removeEventListener("load", cb, !1);
                        var errMsg, status = "success";
                        try {
                            if (timedOut) throw "timeout";
                            var isXml = "xml" == s.dataType || doc.XMLDocument || $.isXMLDoc(doc);
                            log("isXml=" + isXml);
                            if (!isXml && window.opera && (null === doc.body || !doc.body.innerHTML) && --domCheckCount) {
                                log("requeing onLoad callback, DOM not available");
                                setTimeout(cb, 250);
                                return
                            }
                            var docRoot = doc.body ? doc.body : doc.documentElement;
                            xhr.responseText = docRoot ? docRoot.innerHTML : null;
                            xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                            isXml && (s.dataType = "xml");
                            xhr.getResponseHeader = function(header) {
                                var headers = {
                                    "content-type": s.dataType
                                };
                                return headers[header.toLowerCase()]
                            };
                            if (docRoot) {
                                xhr.status = Number(docRoot.getAttribute("status")) || xhr.status;
                                xhr.statusText = docRoot.getAttribute("statusText") || xhr.statusText
                            }
                            var dt = (s.dataType || "").toLowerCase(),
                                scr = /(json|script|text)/.test(dt);
                            if (scr || s.textarea) {
                                var ta = doc.getElementsByTagName("textarea")[0];
                                if (ta) {
                                    xhr.responseText = ta.value;
                                    xhr.status = Number(ta.getAttribute("status")) || xhr.status;
                                    xhr.statusText = ta.getAttribute("statusText") || xhr.statusText
                                } else if (scr) {
                                    var pre = doc.getElementsByTagName("pre")[0],
                                        b = doc.getElementsByTagName("body")[0];
                                    pre ? xhr.responseText = pre.textContent ? pre.textContent : pre.innerText : b && (xhr.responseText = b.textContent ? b.textContent : b.innerText)
                                }
                            } else "xml" == dt && !xhr.responseXML && xhr.responseText && (xhr.responseXML = toXml(xhr.responseText));
                            try {
                                data = httpData(xhr, dt, s)
                            } catch (err) {
                                status = "parsererror";
                                xhr.error = errMsg = err || status
                            }
                        } catch (err) {
                            log("error caught: ", err);
                            status = "error";
                            xhr.error = errMsg = err || status
                        }
                        if (xhr.aborted) {
                            log("upload aborted");
                            status = null
                        }
                        xhr.status && (status = xhr.status >= 200 && xhr.status < 300 || 304 === xhr.status ? "success" : "error");
                        if ("success" === status) {
                            s.success && s.success.call(s.context, data, "success", xhr);
                            deferred.resolve(xhr.responseText, "success", xhr);
                            g && $.event.trigger("ajaxSuccess", [xhr, s])
                        } else if (status) {
                            void 0 === errMsg && (errMsg = xhr.statusText);
                            s.error && s.error.call(s.context, xhr, status, errMsg);
                            deferred.reject(xhr, "error", errMsg);
                            g && $.event.trigger("ajaxError", [xhr, s, errMsg])
                        }
                        g && $.event.trigger("ajaxComplete", [xhr, s]);
                        g && !--$.active && $.event.trigger("ajaxStop");
                        s.complete && s.complete.call(s.context, xhr, status);
                        callbackProcessed = !0;
                        s.timeout && clearTimeout(timeoutHandle);
                        setTimeout(function() {
                            s.iframeTarget ? $io.attr("src", s.iframeSrc) : $io.remove();
                            xhr.responseXML = null
                        }, 100)
                    }
                }
            }
            var el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle, form = $form[0],
                deferred = $.Deferred();
            deferred.abort = function(status) {
                xhr.abort(status)
            };
            if (a)
                for (i = 0; i < elements.length; i++) {
                    el = $(elements[i]);
                    hasProp ? el.prop("disabled", !1) : el.removeAttr("disabled")
                }
            s = $.extend(!0, {}, $.ajaxSettings, options);
            s.context = s.context || s;
            id = "jqFormIO" + (new Date).getTime();
            if (s.iframeTarget) {
                $io = $(s.iframeTarget);
                n = $io.attr2("name");
                n ? id = n : $io.attr2("name", id)
            } else {
                $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
                $io.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })
            }
            io = $io[0];
            xhr = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(status) {
                    var e = "timeout" === status ? "timeout" : "aborted";
                    log("aborting upload... " + e);
                    this.aborted = 1;
                    try {
                        io.contentWindow.document.execCommand && io.contentWindow.document.execCommand("Stop")
                    } catch (ignore) {}
                    $io.attr("src", s.iframeSrc);
                    xhr.error = e;
                    s.error && s.error.call(s.context, xhr, e, status);
                    g && $.event.trigger("ajaxError", [xhr, s, e]);
                    s.complete && s.complete.call(s.context, xhr, e)
                }
            };
            g = s.global;
            g && 0 === $.active++ && $.event.trigger("ajaxStart");
            g && $.event.trigger("ajaxSend", [xhr, s]);
            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === !1) {
                s.global && $.active--;
                deferred.reject();
                return deferred
            }
            if (xhr.aborted) {
                deferred.reject();
                return deferred
            }
            sub = form.clk;
            if (sub) {
                n = sub.name;
                if (n && !sub.disabled) {
                    s.extraData = s.extraData || {};
                    s.extraData[n] = sub.value;
                    if ("image" == sub.type) {
                        s.extraData[n + ".x"] = form.clk_x;
                        s.extraData[n + ".y"] = form.clk_y
                    }
                }
            }
            var CLIENT_TIMEOUT_ABORT = 1,
                SERVER_ABORT = 2,
                csrf_token = $("meta[name=csrf-token]").attr("content"),
                csrf_param = $("meta[name=csrf-param]").attr("content");
            if (csrf_param && csrf_token) {
                s.extraData = s.extraData || {};
                s.extraData[csrf_param] = csrf_token
            }
            s.forceSync ? doSubmit() : setTimeout(doSubmit, 10);
            var data, doc, callbackProcessed, domCheckCount = 50,
                toXml = $.parseXML || function(s, doc) {
                        if (window.ActiveXObject) {
                            doc = new ActiveXObject("Microsoft.XMLDOM");
                            doc.async = "false";
                            doc.loadXML(s)
                        } else doc = (new DOMParser).parseFromString(s, "text/xml");
                        return doc && doc.documentElement && "parsererror" != doc.documentElement.nodeName ? doc : null
                    },
                parseJSON = $.parseJSON || function(s) {
                        return window.eval("(" + s + ")")
                    },
                httpData = function(xhr, type, s) {
                    var ct = xhr.getResponseHeader("content-type") || "",
                        xml = "xml" === type || !type && ct.indexOf("xml") >= 0,
                        data = xml ? xhr.responseXML : xhr.responseText;
                    xml && "parsererror" === data.documentElement.nodeName && $.error && $.error("parsererror");
                    s && s.dataFilter && (data = s.dataFilter(data, type));
                    "string" == typeof data && ("json" === type || !type && ct.indexOf("json") >= 0 ? data = parseJSON(data) : ("script" === type || !type && ct.indexOf("javascript") >= 0) && $.globalEval(data));
                    return data
                };
            return deferred
        }
        if (!this.length) {
            log("ajaxSubmit: skipping submit process - no element selected");
            return this
        }
        var method, action, url, $form = this;
        "function" == typeof options ? options = {
            success: options
        } : void 0 === options && (options = {});
        method = options.type || this.attr2("method");
        action = options.url || this.attr2("action");
        url = "string" == typeof action ? $.trim(action) : "";
        url = url || window.location.href || "";
        url && (url = (url.match(/^([^#]+)/) || [])[1]);
        options = $.extend(!0, {
            url: url,
            success: $.ajaxSettings.success,
            type: method || $.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, options);
        var veto = {};
        this.trigger("form-pre-serialize", [this, options, veto]);
        if (veto.veto) {
            log("ajaxSubmit: submit vetoed via form-pre-serialize trigger");
            return this
        }
        if (options.beforeSerialize && options.beforeSerialize(this, options) === !1) {
            log("ajaxSubmit: submit aborted via beforeSerialize callback");
            return this
        }
        var traditional = options.traditional;
        void 0 === traditional && (traditional = $.ajaxSettings.traditional);
        var qx, elements = [],
            a = this.formToArray(options.semantic, elements);
        if (options.data) {
            options.extraData = options.data;
            qx = $.param(options.data, traditional)
        }
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === !1) {
            log("ajaxSubmit: submit aborted via beforeSubmit callback");
            return this
        }
        this.trigger("form-submit-validate", [a, this, options, veto]);
        if (veto.veto) {
            log("ajaxSubmit: submit vetoed via form-submit-validate trigger");
            return this
        }
        var q = $.param(a, traditional);
        qx && (q = q ? q + "&" + qx : qx);
        if ("GET" == options.type.toUpperCase()) {
            options.url += (options.url.indexOf("?") >= 0 ? "&" : "?") + q;
            options.data = null
        } else options.data = q;
        var callbacks = [];
        options.resetForm && callbacks.push(function() {
            $form.resetForm()
        });
        options.clearForm && callbacks.push(function() {
            $form.clearForm(options.includeHidden)
        });
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function() {};
            callbacks.push(function(data) {
                var fn = options.replaceTarget ? "replaceWith" : "html";
                $(options.target)[fn](data).each(oldSuccess, arguments)
            })
        } else options.success && callbacks.push(options.success);
        options.success = function(data, status, xhr) {
            for (var context = options.context || this, i = 0, max = callbacks.length; max > i; i++) callbacks[i].apply(context, [data, status, xhr || $form, $form])
        };
        if (options.error) {
            var oldError = options.error;
            options.error = function(xhr, status, error) {
                var context = options.context || this;
                oldError.apply(context, [xhr, status, error, $form])
            }
        }
        if (options.complete) {
            var oldComplete = options.complete;
            options.complete = function(xhr, status) {
                var context = options.context || this;
                oldComplete.apply(context, [xhr, status, $form])
            }
        }
        var fileInputs = $("input[type=file]:enabled", this).filter(function() {
                return "" !== $(this).val()
            }),
            hasFileInputs = fileInputs.length > 0,
            mp = "multipart/form-data",
            multipart = $form.attr("enctype") == mp || $form.attr("encoding") == mp,
            fileAPI = feature.fileapi && feature.formdata;
        log("fileAPI :" + fileAPI);
        var jqxhr, shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;
        options.iframe !== !1 && (options.iframe || shouldUseFrame) ? options.closeKeepAlive ? $.get(options.closeKeepAlive, function() {
            jqxhr = fileUploadIframe(a)
        }) : jqxhr = fileUploadIframe(a) : jqxhr = (hasFileInputs || multipart) && fileAPI ? fileUploadXhr(a) : $.ajax(options);
        $form.removeData("jqxhr").data("jqxhr", jqxhr);
        for (var k = 0; k < elements.length; k++) elements[k] = null;
        this.trigger("form-submit-notify", [this, options]);
        return this
    };
    $.fn.ajaxForm = function(options) {
        options = options || {};
        options.delegation = options.delegation && $.isFunction($.fn.on);
        if (!options.delegation && 0 === this.length) {
            var o = {
                s: this.selector,
                c: this.context
            };
            if (!$.isReady && o.s) {
                log("DOM not ready, queuing ajaxForm");
                $(function() {
                    $(o.s, o.c).ajaxForm(options)
                });
                return this
            }
            log("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)"));
            return this
        }
        if (options.delegation) {
            $(document).off("submit.form-plugin", this.selector, doAjaxSubmit).off("click.form-plugin", this.selector, captureSubmittingElement).on("submit.form-plugin", this.selector, options, doAjaxSubmit).on("click.form-plugin", this.selector, options, captureSubmittingElement);
            return this
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", options, doAjaxSubmit).bind("click.form-plugin", options, captureSubmittingElement)
    };
    $.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin")
    };
    $.fn.formToArray = function(semantic, elements) {
        var a = [];
        if (0 === this.length) return a;
        var els2, form = this[0],
            formId = this.attr("id"),
            els = semantic ? form.getElementsByTagName("*") : form.elements;
        els && !/MSIE [678]/.test(navigator.userAgent) && (els = $(els).get());
        if (formId) {
            els2 = $(':input[form="' + formId + '"]').get();
            els2.length && (els = (els || []).concat(els2))
        }
        if (!els || !els.length) return a;
        var i, j, n, v, el, max, jmax;
        for (i = 0, max = els.length; max > i; i++) {
            el = els[i];
            n = el.name;
            if (n && !el.disabled)
                if (semantic && form.clk && "image" == el.type) {
                    if (form.clk == el) {
                        a.push({
                            name: n,
                            value: $(el).val(),
                            type: el.type
                        });
                        a.push({
                            name: n + ".x",
                            value: form.clk_x
                        }, {
                            name: n + ".y",
                            value: form.clk_y
                        })
                    }
                } else {
                    v = $.fieldValue(el, !0);
                    if (v && v.constructor == Array) {
                        elements && elements.push(el);
                        for (j = 0, jmax = v.length; jmax > j; j++) a.push({
                            name: n,
                            value: v[j]
                        })
                    } else if (feature.fileapi && "file" == el.type) {
                        elements && elements.push(el);
                        var files = el.files;
                        if (files.length)
                            for (j = 0; j < files.length; j++) a.push({
                                name: n,
                                value: files[j],
                                type: el.type
                            });
                        else a.push({
                            name: n,
                            value: "",
                            type: el.type
                        })
                    } else if (null !== v && "undefined" != typeof v) {
                        elements && elements.push(el);
                        a.push({
                            name: n,
                            value: v,
                            type: el.type,
                            required: el.required
                        })
                    }
                }
        }
        if (!semantic && form.clk) {
            var $input = $(form.clk),
                input = $input[0];
            n = input.name;
            if (n && !input.disabled && "image" == input.type) {
                a.push({
                    name: n,
                    value: $input.val()
                });
                a.push({
                    name: n + ".x",
                    value: form.clk_x
                }, {
                    name: n + ".y",
                    value: form.clk_y
                })
            }
        }
        return a
    };
    $.fn.formSerialize = function(semantic) {
        return $.param(this.formToArray(semantic))
    };
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (n) {
                var v = $.fieldValue(this, successful);
                if (v && v.constructor == Array)
                    for (var i = 0, max = v.length; max > i; i++) a.push({
                        name: n,
                        value: v[i]
                    });
                else null !== v && "undefined" != typeof v && a.push({
                    name: this.name,
                    value: v
                })
            }
        });
        return $.param(a)
    };
    $.fn.fieldValue = function(successful) {
        for (var val = [], i = 0, max = this.length; max > i; i++) {
            var el = this[i],
                v = $.fieldValue(el, successful);
            null === v || "undefined" == typeof v || v.constructor == Array && !v.length || (v.constructor == Array ? $.merge(val, v) : val.push(v))
        }
        return val
    };
    $.fieldValue = function(el, successful) {
        var n = el.name,
            t = el.type,
            tag = el.tagName.toLowerCase();
        void 0 === successful && (successful = !0);
        if (successful && (!n || el.disabled || "reset" == t || "button" == t || ("checkbox" == t || "radio" == t) && !el.checked || ("submit" == t || "image" == t) && el.form && el.form.clk != el || "select" == tag && -1 == el.selectedIndex)) return null;
        if ("select" == tag) {
            var index = el.selectedIndex;
            if (0 > index) return null;
            for (var a = [], ops = el.options, one = "select-one" == t, max = one ? index + 1 : ops.length, i = one ? index : 0; max > i; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    v || (v = op.attributes && op.attributes.value && !op.attributes.value.specified ? op.text : op.value);
                    if (one) return v;
                    a.push(v)
                }
            }
            return a
        }
        return $(el).val()
    };
    $.fn.clearForm = function(includeHidden) {
        return this.each(function() {
            $("input,select,textarea", this).clearFields(includeHidden)
        })
    };
    $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var t = this.type,
                tag = this.tagName.toLowerCase();
            re.test(t) || "textarea" == tag ? this.value = "" : "checkbox" == t || "radio" == t ? this.checked = !1 : "select" == tag ? this.selectedIndex = -1 : "file" == t ? /MSIE/.test(navigator.userAgent) ? $(this).replaceWith($(this).clone(!0)) : $(this).val("") : includeHidden && (includeHidden === !0 && /hidden/.test(t) || "string" == typeof includeHidden && $(this).is(includeHidden)) && (this.value = "")
        })
    };
    $.fn.resetForm = function() {
        return this.each(function() {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    };
    $.fn.enable = function(b) {
        void 0 === b && (b = !0);
        return this.each(function() {
            this.disabled = !b
        })
    };
    $.fn.selected = function(select) {
        void 0 === select && (select = !0);
        return this.each(function() {
            var t = this.type;
            if ("checkbox" == t || "radio" == t) this.checked = select;
            else if ("option" == this.tagName.toLowerCase()) {
                var $sel = $(this).parent("select");
                select && $sel[0] && "select-one" == $sel[0].type && $sel.find("option").selected(!1);
                this.selected = select
            }
        })
    };
    $.fn.ajaxSubmit.debug = !1
});
! function(factory) {
    "object" == typeof exports ? module.exports = factory(require("backbone"), require("underscore")) : "function" == typeof ognyvo.define && ognyvo.define.amd && ognyvo.define("backbone.validation", ["backbone", "underscore"], factory)
}(function(Backbone, _) {
    Backbone.Validation = function(_) {
        "use strict";
        var defaultOptions = {
                forceUpdate: !1,
                selector: "name",
                labelFormatter: "sentenceCase",
                valid: Function.prototype,
                invalid: Function.prototype
            },
            formatFunctions = {
                formatLabel: function(attrName, model) {
                    return defaultLabelFormatters[defaultOptions.labelFormatter](attrName, model)
                },
                format: function() {
                    var args = Array.prototype.slice.call(arguments),
                        text = args.shift();
                    return text.replace(/\{(\d+)\}/g, function(match, number) {
                        return "undefined" != typeof args[number] ? args[number] : match
                    })
                }
            },
            flatten = function(obj, into, prefix) {
                into = into || {};
                prefix = prefix || "";
                _.each(obj, function(val, key) {
                    if (obj.hasOwnProperty(key)) {
                        val && _.isArray(val) ? _.forEach(val, function(v, k) {
                            flatten(v, into, prefix + key + "." + k + ".");
                            into[prefix + key + "." + k] = v
                        }) : val && "object" == typeof val && val.constructor === Object && flatten(val, into, prefix + key + ".");
                        into[prefix + key] = val
                    }
                });
                return into
            },
            Validation = function() {
                var getValidatedAttrs = function(model, attrs) {
                        attrs = attrs || _.keys(_.result(model, "validation") || {});
                        return _.reduce(attrs, function(memo, key) {
                            memo[key] = void 0;
                            return memo
                        }, {})
                    },
                    getOptionsAttrs = function(options, view) {
                        var attrs = options.attributes;
                        _.isFunction(attrs) ? attrs = attrs(view) : _.isString(attrs) && _.isFunction(defaultAttributeLoaders[attrs]) && (attrs = defaultAttributeLoaders[attrs](view));
                        return _.isArray(attrs) ? attrs : void 0
                    },
                    getValidators = function(model, attr) {
                        var attrValidationSet = model.validation ? _.result(model, "validation")[attr] || {} : {};
                        (_.isFunction(attrValidationSet) || _.isString(attrValidationSet)) && (attrValidationSet = {
                            fn: attrValidationSet
                        });
                        _.isArray(attrValidationSet) || (attrValidationSet = [attrValidationSet]);
                        return _.reduce(attrValidationSet, function(memo, attrValidation) {
                            _.each(_.without(_.keys(attrValidation), "msg"), function(validator) {
                                memo.push({
                                    fn: defaultValidators[validator],
                                    val: attrValidation[validator],
                                    msg: attrValidation.msg
                                })
                            });
                            return memo
                        }, [])
                    },
                    validateAttr = function(model, attr, value, computed) {
                        return _.reduce(getValidators(model, attr), function(memo, validator) {
                            var ctx = _.extend({}, formatFunctions, defaultValidators),
                                result = validator.fn.call(ctx, value, attr, validator.val, model, computed);
                            return result === !1 || memo === !1 ? !1 : result && !memo ? _.result(validator, "msg") || result : memo
                        }, "")
                    },
                    validateModel = function(model, attrs, validatedAttrs) {
                        var error, invalidAttrs = {},
                            isValid = !0,
                            computed = _.clone(attrs);
                        _.each(validatedAttrs, function(val, attr) {
                            error = validateAttr(model, attr, val, computed);
                            if (error) {
                                invalidAttrs[attr] = error;
                                isValid = !1
                            }
                        });
                        return {
                            invalidAttrs: invalidAttrs,
                            isValid: isValid
                        }
                    },
                    mixin = function(view, options) {
                        return {
                            preValidate: function(attr, value) {
                                var error, self = this,
                                    result = {};
                                if (_.isObject(attr)) {
                                    _.each(attr, function(value, key) {
                                        error = self.preValidate(key, value);
                                        error && (result[key] = error)
                                    });
                                    return _.isEmpty(result) ? void 0 : result
                                }
                                return validateAttr(this, attr, value, _.extend({}, this.attributes))
                            },
                            isValid: function(option) {
                                var flattened, attrs, error, invalidAttrs;
                                option = option || getOptionsAttrs(options, view);
                                _.isString(option) ? attrs = [option] : _.isArray(option) && (attrs = option);
                                if (attrs) {
                                    flattened = flatten(this.attributes);
                                    _.each(this.associatedViews, function(view) {
                                        _.each(attrs, function(attr) {
                                            error = validateAttr(this, attr, flattened[attr], _.extend({}, this.attributes));
                                            if (error) {
                                                options.invalid(view, attr, error, options.selector);
                                                invalidAttrs = invalidAttrs || {};
                                                invalidAttrs[attr] = error
                                            } else options.valid(view, attr, options.selector)
                                        }, this)
                                    }, this)
                                }
                                option === !0 && (invalidAttrs = this.validate());
                                invalidAttrs && this.trigger("invalid", this, invalidAttrs, {
                                    validationError: invalidAttrs
                                });
                                return attrs ? !invalidAttrs : this.validation ? this._isValid : !0
                            },
                            validate: function(attrs, setOptions) {
                                var model = this,
                                    validateAll = !attrs,
                                    opt = _.extend({}, options, setOptions),
                                    validatedAttrs = getValidatedAttrs(model, getOptionsAttrs(options, view)),
                                    allAttrs = _.extend({}, validatedAttrs, model.attributes, attrs),
                                    flattened = flatten(allAttrs),
                                    changedAttrs = attrs ? flatten(attrs) : flattened,
                                    result = validateModel(model, allAttrs, _.pick(flattened, _.keys(validatedAttrs)));
                                model._isValid = result.isValid;
                                _.each(model.associatedViews, function(view) {
                                    _.each(validatedAttrs, function(val, attr) {
                                        var invalid = result.invalidAttrs.hasOwnProperty(attr),
                                            changed = changedAttrs.hasOwnProperty(attr);
                                        invalid || opt.valid(view, attr, opt.selector);
                                        invalid && (changed || validateAll) && opt.invalid(view, attr, result.invalidAttrs[attr], opt.selector)
                                    })
                                });
                                opt.silent !== !0 && _.defer(function() {
                                    model.trigger("validated", model._isValid, model, result.invalidAttrs);
                                    model.trigger("validated:" + (model._isValid ? "valid" : "invalid"), model, result.invalidAttrs)
                                });
                                return !opt.forceUpdate && _.intersection(_.keys(result.invalidAttrs), _.keys(changedAttrs)).length > 0 ? result.invalidAttrs : void 0
                            }
                        }
                    },
                    bindModel = function(view, model, options) {
                        model.associatedViews ? model.associatedViews.push(view) : model.associatedViews = [view];
                        _.extend(model, mixin(view, options))
                    },
                    unbindModel = function(model, view) {
                        if (view && model.associatedViews && model.associatedViews.length > 1) model.associatedViews = _.without(model.associatedViews, view);
                        else {
                            delete model.validate;
                            delete model.preValidate;
                            delete model.isValid;
                            delete model.associatedViews
                        }
                    },
                    collectionAdd = function(model) {
                        bindModel(this.view, model, this.options)
                    },
                    collectionRemove = function(model) {
                        unbindModel(model)
                    };
                return {
                    version: "0.11.3",
                    configure: function(options) {
                        _.extend(defaultOptions, options)
                    },
                    bind: function(view, options) {
                        options = _.extend({}, defaultOptions, defaultCallbacks, options);
                        var model = options.model || view.model,
                            collection = options.collection || view.collection;
                        if ("undefined" == typeof model && "undefined" == typeof collection) throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
                        if (model) bindModel(view, model, options);
                        else if (collection) {
                            collection.each(function(model) {
                                bindModel(view, model, options)
                            });
                            collection.bind("add", collectionAdd, {
                                view: view,
                                options: options
                            });
                            collection.bind("remove", collectionRemove)
                        }
                    },
                    unbind: function(view, options) {
                        options = _.extend({}, options);
                        var model = options.model || view.model,
                            collection = options.collection || view.collection;
                        if (model) unbindModel(model, view);
                        else if (collection) {
                            collection.each(function(model) {
                                unbindModel(model, view)
                            });
                            collection.unbind("add", collectionAdd);
                            collection.unbind("remove", collectionRemove)
                        }
                    },
                    mixin: mixin(null, defaultOptions)
                }
            }(),
            defaultCallbacks = Validation.callbacks = {
                valid: function(view, attr, selector) {
                    view.$("[" + selector + '~="' + attr + '"]').removeClass("invalid").removeAttr("data-error")
                },
                invalid: function(view, attr, error, selector) {
                    view.$("[" + selector + '~="' + attr + '"]').addClass("invalid").attr("data-error", error)
                }
            },
            defaultPatterns = Validation.patterns = {
                digits: /^\d+$/,
                number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
                email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
                url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
            },
            defaultMessages = Validation.messages = {
                required: "{0} is required",
                acceptance: "{0} must be accepted",
                min: "{0} must be greater than or equal to {1}",
                max: "{0} must be less than or equal to {1}",
                range: "{0} must be between {1} and {2}",
                length: "{0} must be {1} characters",
                minLength: "{0} must be at least {1} characters",
                maxLength: "{0} must be at most {1} characters",
                rangeLength: "{0} must be between {1} and {2} characters",
                oneOf: "{0} must be one of: {1}",
                equalTo: "{0} must be the same as {1}",
                digits: "{0} must only contain digits",
                number: "{0} must be a number",
                email: "{0} must be a valid email",
                url: "{0} must be a valid url",
                inlinePattern: "{0} is invalid"
            },
            defaultLabelFormatters = Validation.labelFormatters = {
                none: function(attrName) {
                    return attrName
                },
                sentenceCase: function(attrName) {
                    return attrName.replace(/(?:^\w|[A-Z]|\b\w)/g, function(match, index) {
                        return 0 === index ? match.toUpperCase() : " " + match.toLowerCase()
                    }).replace(/_/g, " ")
                },
                label: function(attrName, model) {
                    return model.labels && model.labels[attrName] || defaultLabelFormatters.sentenceCase(attrName, model)
                }
            },
            defaultAttributeLoaders = Validation.attributeLoaders = {
                inputNames: function(view) {
                    var attrs = [];
                    view && view.$("form [name]").each(function() {
                        /^(?:input|select|textarea)$/i.test(this.nodeName) && this.name && "submit" !== this.type && -1 === attrs.indexOf(this.name) && attrs.push(this.name)
                    });
                    return attrs
                }
            },
            defaultValidators = Validation.validators = function() {
                var trim = String.prototype.trim ? function(text) {
                        return null === text ? "" : String.prototype.trim.call(text)
                    } : function(text) {
                        var trimLeft = /^\s+/,
                            trimRight = /\s+$/;
                        return null === text ? "" : text.toString().replace(trimLeft, "").replace(trimRight, "")
                    },
                    isNumber = function(value) {
                        return _.isNumber(value) || _.isString(value) && value.match(defaultPatterns.number)
                    },
                    hasValue = function(value) {
                        return !(_.isNull(value) || _.isUndefined(value) || _.isString(value) && "" === trim(value) || _.isArray(value) && _.isEmpty(value))
                    };
                return {
                    fn: function(value, attr, fn, model, computed) {
                        _.isString(fn) && (fn = model[fn]);
                        return fn.call(model, value, attr, computed)
                    },
                    required: function(value, attr, required, model, computed) {
                        var isRequired = _.isFunction(required) ? required.call(model, value, attr, computed) : required;
                        return isRequired || hasValue(value) ? isRequired && !hasValue(value) ? this.format(defaultMessages.required, this.formatLabel(attr, model)) : void 0 : !1
                    },
                    acceptance: function(value, attr, accept, model) {
                        return "true" === value || _.isBoolean(value) && value !== !1 ? void 0 : this.format(defaultMessages.acceptance, this.formatLabel(attr, model))
                    },
                    min: function(value, attr, minValue, model) {
                        return !isNumber(value) || minValue > value ? this.format(defaultMessages.min, this.formatLabel(attr, model), minValue) : void 0
                    },
                    max: function(value, attr, maxValue, model) {
                        return !isNumber(value) || value > maxValue ? this.format(defaultMessages.max, this.formatLabel(attr, model), maxValue) : void 0
                    },
                    range: function(value, attr, range, model) {
                        return !isNumber(value) || value < range[0] || value > range[1] ? this.format(defaultMessages.range, this.formatLabel(attr, model), range[0], range[1]) : void 0
                    },
                    length: function(value, attr, length, model) {
                        return _.isString(value) && value.length === length ? void 0 : this.format(defaultMessages.length, this.formatLabel(attr, model), length)
                    },
                    minLength: function(value, attr, minLength, model) {
                        return !_.isString(value) || value.length < minLength ? this.format(defaultMessages.minLength, this.formatLabel(attr, model), minLength) : void 0
                    },
                    maxLength: function(value, attr, maxLength, model) {
                        return !_.isString(value) || value.length > maxLength ? this.format(defaultMessages.maxLength, this.formatLabel(attr, model), maxLength) : void 0
                    },
                    rangeLength: function(value, attr, range, model) {
                        return !_.isString(value) || value.length < range[0] || value.length > range[1] ? this.format(defaultMessages.rangeLength, this.formatLabel(attr, model), range[0], range[1]) : void 0
                    },
                    oneOf: function(value, attr, values, model) {
                        return _.include(values, value) ? void 0 : this.format(defaultMessages.oneOf, this.formatLabel(attr, model), values.join(", "))
                    },
                    equalTo: function(value, attr, equalTo, model, computed) {
                        return value !== computed[equalTo] ? this.format(defaultMessages.equalTo, this.formatLabel(attr, model), this.formatLabel(equalTo, model)) : void 0
                    },
                    pattern: function(value, attr, pattern, model) {
                        return hasValue(value) && value.toString().match(defaultPatterns[pattern] || pattern) ? void 0 : this.format(defaultMessages[pattern] || defaultMessages.inlinePattern, this.formatLabel(attr, model), pattern)
                    }
                }
            }();
        _.each(defaultValidators, function(validator, key) {
            defaultValidators[key] = _.bind(defaultValidators[key], _.extend({}, formatFunctions, defaultValidators))
        });
        return Validation
    }(_);
    return Backbone.Validation
});
ognyvo.define("css", [], function() {
    if ("undefined" == typeof window) return {
        load: function(e, t, n) {
            n()
        }
    };
    var e = document.getElementsByTagName("head")[0],
        t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/) || 0,
        n = !1,
        r = !0;
    t[1] || t[7] ? n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] || t[8] ? r = !1 : t[4] && (n = parseInt(t[4]) < 18);
    var o = {};
    o.pluginBuilder = "./css-builder";
    var a, i, s, l = function() {
            a = document.createElement("style"), e.appendChild(a), i = a.styleSheet || a.sheet
        },
        u = 0,
        d = [],
        c = function(e) {
            u++, 32 == u && (l(), u = 0), i.addImport(e), a.onload = function() {
                f()
            }
        },
        f = function() {
            s();
            var e = d.shift();
            return e ? (s = e[1], void c(e[0])) : void(s = null)
        },
        h = function(e, t) {
            if (i && i.addImport || l(), i && i.addImport) s ? d.push([e, t]) : (c(e), s = t);
            else {
                a.textContent = '@import "' + e + '";';
                var n = setInterval(function() {
                    try {
                        a.sheet.cssRules, clearInterval(n), t()
                    } catch (e) {}
                }, 10)
            }
        },
        p = function(t, n) {
            var o = document.createElement("link");
            if (o.type = "text/css", o.rel = "stylesheet", r) o.onload = function() {
                o.onload = function() {}, setTimeout(n, 7)
            };
            else var a = setInterval(function() {
                for (var e = 0; e < document.styleSheets.length; e++) {
                    var t = document.styleSheets[e];
                    if (t.href == o.href) return clearInterval(a), n()
                }
            }, 10);
            o.href = t, e.appendChild(o)
        };
    return o.normalize = function(e, t) {
        return ".css" == e.substr(e.length - 4, 4) && (e = e.substr(0, e.length - 4)), t(e)
    }, o.load = function(e, t, r) {
        (n ? h : p)(t.toUrl(e + ".css"), r)
    }, o
});
ognyvo.define("view/common/AdvWidgetView", ["abstract/view/AbstractWidgetView", "helper/AppConsts", "helper/Analytics", "settings"], function(AbstractWidgetView, AppConsts, Analytics, Settings) {
    "use strict";
    var AdvWidgetView = AbstractWidgetView.extend({
        noRenderOnStart: !0,
        type: "",
        subtype: "",
        place: "",
        ui: {},
        analyticsEvent: null,
        maxWaitTimes: 10,
        contentContainerSelector: !1,
        init: function() {
            if (this.contentContainerSelector) {
                this.$container = this.$el.parents(this.contentContainerSelector);
                this.$el.hide();
                this.initContainerHeight = this.$container.height();
                this.$el.show()
            }
            this.checkResizeContainer();
            var that = this;
            this.maxWaitTimes = 20;
            var interval = setInterval(function() {
                if (that.maxWaitTimes > 0 || that.$el.find("yatag a").length || that.$el.find(".adsbygoogle").length || that.$el.find("iframe").length || that.$el.find("embed").length || that.$el.find('[src^="https://rotary.blamper.ru/www/images/"]').length) {
                    clearInterval(interval);
                    that.$el.find(".adsbygoogle").length ? that.initAdSense.call(that) : that.initDirect.call(that)
                }
                that.maxWaitTimes--
            }, 500)
        },
        initAdSense: function() {
            var App = require("App"),
                that = this,
                $direct = this.$el.find(".adsbygoogle");
            this.checkResizeContainer();
            $direct.click(function(e) {
                console.log("~~~~ yandex banner click");
                App.sendAnalytics(that.analyticsEvent)
            });
            var $iframe = this.$el.find("iframe");
            $iframe.length && $iframe.load(function() {
                console.log("~~~~~~ iframe banner loaded");
                try {
                    var iframe = $iframe.contents();
                    iframe.find("body").mousedown(function() {
                        console.log("~~~~~~ banner iframe click");
                        App.sendAnalytics(that.analyticsEvent)
                    })
                } catch (e) {
                    console.log("!!! NO ACCESS TO BANNER IFRAME CONTENT", e)
                }
            });
            if (!$direct.length && !$iframe.length) {
                var $direct = this.$el.find("a");
                $direct.click(function(e) {
                    console.log("~~~~ just banner link click");
                    $(e.currentTarget);
                    App.sendAnalytics(that.analyticsEvent)
                })
            }
        },
        initDirect: function() {
            var App = require("App"),
                that = this,
                $direct = this.$el.find("yatag a");
            this.checkResizeContainer();
            $direct.click(function(e) {
                console.log("~~~~ yandex banner click");
                App.sendAnalytics(that.analyticsEvent)
            });
            var $iframe = this.$el.find("iframe");
            $iframe.length && $iframe.load(function() {
                console.log("~~~~~~ iframe banner loaded");
                try {
                    var iframe = $iframe.contents();
                    iframe.find("body").mousedown(function() {
                        console.log("~~~~~~ banner iframe click");
                        App.sendAnalytics(that.analyticsEvent)
                    })
                } catch (e) {
                    console.log("!!! NO ACCESS TO BANNER IFRAME CONTENT", e)
                }
            });
            if (!$direct.length && !$iframe.length) {
                var $direct = this.$el.find("a");
                $direct.click(function(e) {
                    console.log("~~~~ just banner link click");
                    $(e.currentTarget);
                    App.sendAnalytics(that.analyticsEvent)
                })
            }
        },
        checkNullHeight: function() {
            this.$el.height() || this.$el.parents(".js-banner-block").css({
                padding: "0px",
                margin: "0px"
            })
        },
        checkResizeContainer: function() {
            this.checkNullHeight();
            this.contentContainerSelector && this.initContainerHeight + 50 < this.$container.height() && this.$el.hide()
        },
        render: function() {}
    });
    return AdvWidgetView
});
ognyvo.define("view/common/ScrollableView", ["abstract/view/AbstractItemView", "helper/AppConsts", "underscore", "helper/Analytics"], function(AbstractItemView, AppConsts, _, Analytics) {
    "use strict";
    var ScrollableView = AbstractItemView.extend({
        events: {
            "click .js-close": "onCloseClick"
        },
        triggers: {},
        ui: {
            content: ".js-block-content"
        },
        closed: !1,
        showCount: 0,
        init: function() {
            _.bindAll(this, "onResize", "onLinkClick");
            var $el = this.$el,
                App = require("App");
            if (this.$el.parents("body").length) {
                this.fixedClass = $el.data("fixed-class");
                this.bottomClass = $el.data("bottom-class");
                this.scrollWidth = $el.data("scroll-width");
                this.fixedArea = $el.data("area-selector");
                this.behindRoof = $el.data("show-on-hidden-behind-roof");
                this.$behindRoof = this.behindRoof ? $(this.behindRoof) : null;
                this.mode = $el.data("mode");
                if (this.fixedClass && $el.hasClass(this.fixedClass)) {
                    $el.removeClass(this.fixedClass);
                    this.initOffset = $el.offset();
                    this.$behindRoof || this.$el.css("width", this.$el.width());
                    $el.addClass(this.fixedClass)
                } else {
                    this.initOffset = $el.offset();
                    this.$behindRoof || this.$el.css("width", this.$el.width())
                }
                App.vent.on(AppConsts.EVENT.SYSTEM.RESIZE, this.onResize);
                if (this.$behindRoof && this.$behindRoof.length) {
                    var off = this.$behindRoof.offset();
                    this.showY = off.top + this.$behindRoof.height();
                    App.vars.scroll.y > this.showY ? this.showBehindRoof() : this.hideBehindRoof();
                    $el.css("top", $(window).height() / 2 - $el.height() / 2);
                    this.ui.content.on("click", "a", this.onLinkClick)
                }
                if (this.fixedArea) {
                    this.$area = $el.parents(this.fixedArea);
                    this.$area.length ? this.$area.css({
                        position: "relative"
                    }) : this.fixedArea = null;
                    this.elH = $el.outerHeight();
                    if (!this.fixedClass || $el.hasClass(this.fixedClass)) this.elFixTop = parseInt($el.css("top")) || 0;
                    else {
                        $el.addClass(this.fixedClass);
                        this.elFixTop = parseInt($el.css("top")) || 0;
                        $el.removeClass(this.fixedClass)
                    }
                    this.elH < this.$area.height() - 50 && App.vent.on(AppConsts.EVENT.SYSTEM.SCROLL, "bottom" == this.mode ? this.onScrollBottomMode : this.onScroll, this)
                } else App.vent.on(AppConsts.EVENT.SYSTEM.SCROLL, "bottom" == this.mode ? this.onScrollBottomMode : this.onScroll, this)
            }
        },
        hideBehindRoof: function() {
            this.$el.addClass(this.$el.data("hidden-class"))
        },
        showBehindRoof: function() {
            this.$el.removeClass(this.$el.data("hidden-class"));
            this.showCount || require("App").sendAnalytics(Analytics.POPUP.LEFT_SLIDE_SHOW);
            this.showCount++
        },
        update: function() {
            this.initOffset = this.$el.offset()
        },
        checkPosition: function() {
            if (!this.closed) {
                var scroll = require("App").vars.scroll;
                if (this.showY) scroll.y > this.showY ? this.showBehindRoof() : this.hideBehindRoof();
                else if (scroll.y > this.initOffset.top)
                    if (this.fixedArea) {
                        var h = this.$area.height(),
                            maxY = h + this.$area.offset().top;
                        this.elH = this.$el.outerHeight();
                        var yBot = this.elH + this.elFixTop + scroll.y;
                        if (this.initOffset.top + this.elH > maxY) return;
                        yBot && yBot > maxY ? this.setStatic(!0) : this.setScrollable()
                    } else this.setScrollable();
                else this.setStatic()
            }
        },
        onLinkClick: function(e) {
            require("App").sendAnalytics(Analytics.POPUP.LEFT_SLIDE_CLICK)
        },
        onCloseClick: function(e) {
            e.preventDefault();
            this.hideBehindRoof();
            this.closed = !0;
            require("App").sendAnalytics(Analytics.POPUP.LEFT_SLIDE_HIDE)
        },
        onResize: function(w, h) {
            if (!this.showY)
                if (this.$el.hasClass(this.fixedClass)) {
                    this.$el.removeClass(this.fixedClass);
                    this.$el.css("width", "");
                    setTimeout(function() {
                        var w = this.$el.width();
                        this.$el.css("width", w);
                        this.$el.addClass(this.fixedClass)
                    }.bind(this), 100)
                } else if (this.$el.hasClass(this.bottomClass)) {
                    this.$el.removeClass(this.bottomClass);
                    this.$el.css("width", "");
                    setTimeout(function() {
                        var w = this.$el.width();
                        this.$el.css("width", w);
                        this.$el.addClass(this.bottomClass)
                    }.bind(this), 100)
                } else {
                    this.$el.css("width", "");
                    setTimeout(function() {
                        var w = this.$el.width();
                        this.$el.css("width", w)
                    }.bind(this), 100)
                }
        },
        onScroll: function(scroll) {
            this.checkPosition()
        },
        onScrollBottomMode: function(scroll) {
            var wh = App.vars.windowSize.height;
            this.elH = this.$el.outerHeight();
            if (scroll.y + wh > this.initOffset.top + this.elH)
                if (this.fixedArea) {
                    var h = this.$area.height(),
                        y = this.$area.offset().top,
                        maxY = h + y,
                        yBot = this.elH + this.elFixTop + scroll.y;
                    yBot && yBot > maxY ? this.setStatic() : this.setScrollable()
                } else this.setScrollable();
            else this.setStatic()
        },
        setScrollable: function() {
            this.$el.width();
            this.$el.removeClass(this.bottomClass);
            this.$el.addClass(this.fixedClass);
            this.$el.trigger("IsScrollable", !0)
        },
        setStatic: function(bottomStick) {
            if (bottomStick) {
                this.$el.width();
                this.$el.addClass(this.bottomClass)
            } else this.$el.removeClass(this.bottomClass);
            this.$el.removeClass(this.fixedClass);
            this.$el.trigger("IsScrollable", !1)
        },
        destroy: function() {
            this.$el.data("instance", null);
            require("App").vent.off(AppConsts.EVENT.SYSTEM.SCROLL, this.onScroll);
            return AbstractItemView.prototype.destroy.apply(this, arguments)
        }
    });
    return ScrollableView
});
ognyvo.define("view/article/ArticleLayoutView", ["abstract/view/AbstractItemView", "helper/AppConsts", "helper/Analytics", "utils", "easing"], function(AbstractItemView, AppConsts, Analytics) {
    "use strict";
    var ArticleLayoutView = AbstractItemView.extend({
        init: function() {
            this.$el.find('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html, body").animate({
                            scrollTop: target.offset().top
                        }, 2e3, "easeInOutExpo");
                        return !1
                    }
                }
            });
            require("App").vent.on(AppConsts.EVENT.SYSTEM.WINDOW_BLUR, this.onBlur, this).on(AppConsts.EVENT.SYSTEM.WINDOW_FOCUS, this.onFocus, this)
        },
        onBlur: function() {},
        onFocus: function() {
            var delay = (require("App"), 400),
                $body = $("body", this.el.ownerDocument);
            $body.css({
                "-webkit-filter": "brightness(60%)",
                transition: "all 0.2s"
            });
            setTimeout(function() {
                $body.css({
                    "-webkit-filter": "none"
                })
            }, delay)
        }
    });
    return ArticleLayoutView
});
ognyvo.define("components/widgets/TeaserContent/WidgetModel", ["model/article/ArticleWidgetModel", "helper/AppConsts"], function(ArticleWidgetModel, AppConsts) {
    "use strict";
    var WidgetModel = ArticleWidgetModel.extend({
        name: "components/widgets/TeaserContent/WidgetModel",
        widgetUrl: "/components/TeaserContent/BaseList"
    });
    return WidgetModel
});
ognyvo.define("components/widgets/TeaserContent/TwigPack", [], function(Template) {
    return Template
});
ognyvo.define("components/widgets/TeaserContent/WidgetView", ["view/article/ArticleWidgetView", "helper/AppConsts", "helper/Analytics", "./WidgetModel", "underscore", "./TwigPack", "utils"], function(ArticleWidgetView, AppConsts, Analytics, WidgetModel, _, Template) {
    "use strict";
    var TeserContentWidgetView = ArticleWidgetView.extend({
        modelClass: WidgetModel,
        template: Template,
        analytics: {
            "click .js-teaser-analytics": Analytics.TEASER_CLICK,
            "click [data-href]": Analytics.TEASER_CONTENT_CLICK,
            "click .js-teaser-more": Analytics.TEASER_CONTENT_CLICK,
            "click .js-teaser-comments": Analytics.TEASER_CONTENT_CLICK,
            "click .js-teaser-source": Analytics.TEASER_CONTENT_CLICK,
            "click .js-teasers-top": Analytics.TEASER_TEASER_CLICK,
            "click .js-teaser-full": [Analytics.TEASER_CLICK, Analytics.TEASER_TEASER_CLICK]
        },
        ui: {
            content: ".js-teaser-content",
            title: ".js-teaser-title",
            image: ".js-teaser-image",
            text: ".js-teaser-text",
            more: ".js-teaser-more",
            full: ".js-teaser-full",
            slider: ".js-slider-fotorama",
            meta: ".js-teaser-meta",
            source: ".js-teaser-source",
            imageBlock: ".js-teaser-image-block"
        },
        fotorama: null,
        rotation: [],
        landingId: 0,
        init: function() {
            this.ui.imageBlock.removeClass("b-teaser__zoom");
            var that = this,
                slider = this.ui.slider;
            this.checkRotation();
            this.ui.content.data("scroll-width", this.ui.content.width());
            slider && slider.length && ognyvo.require(["fotorama", "plugin/camera.custom"], function() {
                that.fotorama = slider.data("fotorama");
                if (that.fotorama) {
                    var data = that.fotorama.data;
                    that.ui.image.initCameraFromDOM({
                        index: that.fotorama.activeIndex,
                        $elements: $(_.map(data, "html")).find("a"),
                        fotorama: that.fotorama,
                        clickSelector: "a"
                    })
                }
            })
        },
        checkRotation: function() {
            if (!this.rotation || !this.rotation.length) return !1;
            console.log("RATE ARR: ", this.rotation);
            var rate = 0,
                selected = {},
                sumRate = 1 == this.rotation.length ? this.rotation[0].rate : this.rotation.reduce(function(sum, item) {
                    return (sum.rate ? parseInt(sum.rate) : sum) + parseInt(item.rate)
                });
            console.log("RATE SUM: ", sumRate);
            var rand = Math.random() * sumRate;
            this.rotation.some(function(item, index, data) {
                rate += item.rate;
                if (rate >= rand) {
                    selected = item;
                    return !0
                }
            });
            console.log("RATE SELECTED: ", selected);
            this.$el.find("a").filter(function() {
                return $(this).parents(".seedr-video-container").length || $(this).parents(".b-bnr-slot").length || $(this).hasClass("no-js-link") ? !1 : !0
            }).prop("href", selected.link);
            if (selected.source) {
                this.ui.meta.removeClass("hidden");
                this.ui.source.html(selected.source)
            }
            require("App").callServerApi("/setview/" + this.landingId + "/" + selected.company_id)
        }
    });
    return TeserContentWidgetView
});
ognyvo.define("components/widgets/teasers/WhiteList/views/twig/layout.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/WhiteList/views/twig/layout.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "raw",
            value: '\n    <div class="js-list">\n        '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.include",
                only: !1,
                includeMissing: !1,
                stack: [{
                    type: "Twig.expression.type._function",
                    fn: "f",
                    params: [{
                        type: "Twig.expression.type.parameter.start",
                        value: "(",
                        match: ["("]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "relativePath"
                    }, {
                        type: "Twig.expression.type.comma"
                    }, {
                        type: "Twig.expression.type.string",
                        value: "./list.twig"
                    }, {
                        type: "Twig.expression.type.parameter.end",
                        value: ")",
                        match: [")"],
                        expression: !1
                    }]
                }],
                withStack: [{
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "item"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "teaser",
                    match: ["teaser"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "params"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "params",
                    match: ["params"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "url"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "url",
                    match: ["url"]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }]
            }
        }, {
            type: "raw",
            value: "    </div>\n"
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "moreButton",
                    match: ["moreButton"]
                }],
                output: [{
                    type: "raw",
                    value: '    <!-- IF need button -->\n    <div class="b-load-more">\n        <a href="#" class="e-btn e-btn__w100 e-btn__h62 e-btn__dark js-more-button js-preloader"><span><i class="ico-refresh"></i>Показать еще новости...</span></a>\n    </div>\n'
                }]
            }
        }, {
            type: "raw",
            value: "\n"
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/WhiteList/views/twig/list.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/WhiteList/views/twig/list.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "type",
                    match: ["type"]
                }, {
                    type: "Twig.expression.type.string",
                    value: "b-teaser__big"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "==",
                    precidence: 9,
                    associativity: "leftToRight",
                    operator: "=="
                }],
                output: [{
                    type: "raw",
                    value: "    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "params",
                            match: ["params"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "row_count"
                        }, {
                            type: "Twig.expression.type.test",
                            filter: "defined"
                        }, {
                            type: "Twig.expression.type.variable",
                            value: "params",
                            match: ["params"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "row_count"
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "and",
                            precidence: 13,
                            associativity: "leftToRight",
                            operator: "and"
                        }],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "r",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "params",
                                    match: ["params"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "row_count"
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.else",
                        match: ["else"],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.set",
                                key: "r",
                                expression: [{
                                    type: "Twig.expression.type.number",
                                    value: 2,
                                    match: ["2", null]
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }, {
                    type: "raw",
                    value: "\n    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.if",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "list",
                            match: ["list"]
                        }, {
                            type: "Twig.expression.type.filter",
                            value: "length",
                            match: ["|length", "length"]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 0,
                            match: ["0", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: ">",
                            precidence: 8,
                            associativity: "leftToRight",
                            operator: ">"
                        }],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.for",
                                key_var: null,
                                value_var: "row",
                                expression: [{
                                    type: "Twig.expression.type.variable",
                                    value: "list",
                                    match: ["list"]
                                }, {
                                    type: "Twig.expression.type.filter",
                                    value: "batch",
                                    match: ["|batch", "batch"],
                                    params: [{
                                        type: "Twig.expression.type.parameter.start",
                                        value: "(",
                                        match: ["("]
                                    }, {
                                        type: "Twig.expression.type.variable",
                                        value: "r",
                                        match: ["r"]
                                    }, {
                                        type: "Twig.expression.type.parameter.end",
                                        value: ")",
                                        match: [")"],
                                        expression: !1
                                    }]
                                }],
                                output: [{
                                    type: "raw",
                                    value: '            <div class="cfx">\n                '
                                }, {
                                    type: "logic",
                                    token: {
                                        type: "Twig.logic.type.for",
                                        key_var: null,
                                        value_var: "teaser",
                                        expression: [{
                                            type: "Twig.expression.type.variable",
                                            value: "row",
                                            match: ["row"]
                                        }],
                                        output: [{
                                            type: "raw",
                                            value: "                    "
                                        }, {
                                            type: "logic",
                                            token: {
                                                type: "Twig.logic.type.include",
                                                only: !1,
                                                includeMissing: !1,
                                                stack: [{
                                                    type: "Twig.expression.type._function",
                                                    fn: "f",
                                                    params: [{
                                                        type: "Twig.expression.type.parameter.start",
                                                        value: "(",
                                                        match: ["("]
                                                    }, {
                                                        type: "Twig.expression.type.string",
                                                        value: "relativePath"
                                                    }, {
                                                        type: "Twig.expression.type.comma"
                                                    }, {
                                                        type: "Twig.expression.type.string",
                                                        value: "./partial/b-teaser.twig"
                                                    }, {
                                                        type: "Twig.expression.type.parameter.end",
                                                        value: ")",
                                                        match: [")"],
                                                        expression: !1
                                                    }]
                                                }],
                                                withStack: [{
                                                    type: "Twig.expression.type.object.start",
                                                    value: "{",
                                                    match: ["{"]
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "item"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "teaser",
                                                    match: ["teaser"]
                                                }, {
                                                    type: "Twig.expression.type.comma"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "params"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "params",
                                                    match: ["params"]
                                                }, {
                                                    type: "Twig.expression.type.comma"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "url"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "url",
                                                    match: ["url"]
                                                }, {
                                                    type: "Twig.expression.type.comma"
                                                }, {
                                                    type: "Twig.expression.type.operator.binary",
                                                    value: ":",
                                                    precidence: 16,
                                                    associativity: "rightToLeft",
                                                    operator: ":",
                                                    key: "landing"
                                                }, {
                                                    type: "Twig.expression.type.variable",
                                                    value: "landing",
                                                    match: ["landing"]
                                                }, {
                                                    type: "Twig.expression.type.object.end",
                                                    value: "}",
                                                    match: ["}"]
                                                }]
                                            }
                                        }, {
                                            type: "raw",
                                            value: "                "
                                        }]
                                    }
                                }, {
                                    type: "raw",
                                    value: "            </div>\n        "
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }]
            }
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.else",
                match: ["else"],
                output: [{
                    type: "raw",
                    value: "    "
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        key_var: null,
                        value_var: "teaser",
                        expression: [{
                            type: "Twig.expression.type.variable",
                            value: "list",
                            match: ["list"]
                        }],
                        output: [{
                            type: "raw",
                            value: "        "
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.include",
                                only: !1,
                                includeMissing: !1,
                                stack: [{
                                    type: "Twig.expression.type._function",
                                    fn: "f",
                                    params: [{
                                        type: "Twig.expression.type.parameter.start",
                                        value: "(",
                                        match: ["("]
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "relativePath"
                                    }, {
                                        type: "Twig.expression.type.comma"
                                    }, {
                                        type: "Twig.expression.type.string",
                                        value: "./partial/b-teaser.twig"
                                    }, {
                                        type: "Twig.expression.type.parameter.end",
                                        value: ")",
                                        match: [")"],
                                        expression: !1
                                    }]
                                }],
                                withStack: [{
                                    type: "Twig.expression.type.object.start",
                                    value: "{",
                                    match: ["{"]
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "item"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "teaser",
                                    match: ["teaser"]
                                }, {
                                    type: "Twig.expression.type.comma"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "params"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "params",
                                    match: ["params"]
                                }, {
                                    type: "Twig.expression.type.comma"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ":",
                                    precidence: 16,
                                    associativity: "rightToLeft",
                                    operator: ":",
                                    key: "url"
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "teaser",
                                    match: ["teaser"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "url"
                                }, {
                                    type: "Twig.expression.type.object.end",
                                    value: "}",
                                    match: ["}"]
                                }]
                            }
                        }, {
                            type: "raw",
                            value: "    "
                        }]
                    }
                }]
            }
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/WhiteList/views/twig/partial/b-teaser.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/WhiteList/views/twig/partial/b-teaser.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "raw",
            value: " "
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.include",
                only: !1,
                includeMissing: !1,
                stack: [{
                    type: "Twig.expression.type._function",
                    fn: "f",
                    params: [{
                        type: "Twig.expression.type.parameter.start",
                        value: "(",
                        match: ["("]
                    }, {
                        type: "Twig.expression.type.string",
                        value: "relativePath"
                    }, {
                        type: "Twig.expression.type.comma"
                    }, {
                        type: "Twig.expression.type.string",
                        value: "./partial/"
                    }, {
                        type: "Twig.expression.type.variable",
                        value: "type",
                        match: ["type"]
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "~",
                        precidence: 6,
                        associativity: "leftToRight",
                        operator: "~"
                    }, {
                        type: "Twig.expression.type.string",
                        value: ".twig"
                    }, {
                        type: "Twig.expression.type.operator.binary",
                        value: "~",
                        precidence: 6,
                        associativity: "leftToRight",
                        operator: "~"
                    }, {
                        type: "Twig.expression.type.parameter.end",
                        value: ")",
                        match: [")"],
                        expression: !1
                    }]
                }],
                withStack: [{
                    type: "Twig.expression.type.object.start",
                    value: "{",
                    match: ["{"]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "item"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "teaser",
                    match: ["teaser"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "params"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "params",
                    match: ["params"]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "url"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "teaser",
                    match: ["teaser"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "url"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ":",
                    precidence: 16,
                    associativity: "rightToLeft",
                    operator: ":",
                    key: "landing"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "landing",
                    match: ["landing"]
                }, {
                    type: "Twig.expression.type.object.end",
                    value: "}",
                    match: ["}"]
                }]
            }
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/WhiteList/views/twig/partial/b-teaser__big.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/WhiteList/views/twig/partial/b-teaser__big.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "logic",
            token: {
                type: "Twig.logic.type.set",
                key: "labels",
                expression: [{
                    type: "Twig.expression.type.array.start",
                    value: "[",
                    match: ["["]
                }, {
                    type: "Twig.expression.type.string",
                    value: "Политика"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Общество"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Лайфстайл"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Самое читаемое"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "Выбор редакции"
                }, {
                    type: "Twig.expression.type.array.end",
                    value: "]",
                    match: ["]"]
                }]
            }
        }, {
            type: "raw",
            value: '<div class="js-item js-teaser b-teaser-item '
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "params",
                match: ["params"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "class"
            }]
        }, {
            type: "raw",
            value: '">\n    <!-- Teaser Big With Meta Info -->\n    <div class="b-teaser b-teaser__big">\n        '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "label"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "type"
                }, {
                    type: "Twig.expression.type.number",
                    value: 0,
                    match: ["0", null]
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: ">",
                    precidence: 8,
                    associativity: "leftToRight",
                    operator: ">"
                }, {
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "label"
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "color"
                }, {
                    type: "Twig.expression.type.string",
                    value: "none"
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "!=",
                    precidence: 9,
                    associativity: "leftToRight",
                    operator: "!="
                }, {
                    type: "Twig.expression.type.operator.binary",
                    value: "and",
                    precidence: 13,
                    associativity: "leftToRight",
                    operator: "and"
                }],
                output: [{
                    type: "raw",
                    value: '            <i class="b-teaser-label b-teaser-label__text b-teaser-label__'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "item",
                        match: ["item"]
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "label"
                    }, {
                        type: "Twig.expression.type.key.period",
                        key: "color"
                    }]
                }, {
                    type: "raw",
                    value: '"><i></i>'
                }, {
                    type: "output",
                    stack: [{
                        type: "Twig.expression.type.variable",
                        value: "labels",
                        match: ["labels"]
                    }, {
                        type: "Twig.expression.type.key.brackets",
                        stack: [{
                            type: "Twig.expression.type.variable",
                            value: "item",
                            match: ["item"]
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "label"
                        }, {
                            type: "Twig.expression.type.key.period",
                            key: "type"
                        }]
                    }]
                }, {
                    type: "raw",
                    value: "</i>\n        "
                }]
            }
        }, {
            type: "raw",
            value: '        <div class="b-teaser-img"><a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '">\n                <img src="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type._function",
                fn: "getImagePath",
                params: [{
                    type: "Twig.expression.type.parameter.start",
                    value: "(",
                    match: ["("]
                }, {
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "cover"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "rect"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 240,
                    match: ["240", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 240,
                    match: ["240", null]
                }, {
                    type: "Twig.expression.type.parameter.end",
                    value: ")",
                    match: [")"],
                    expression: !1
                }]
            }]
        }, {
            type: "raw",
            value: '" alt="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: '"></a></div>\n        <div class="b-teaser-meta">\n            <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" title="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: '" data-target="_blank">\n                '
        }, {
            type: "logic",
            token: {
                type: "Twig.logic.type.if",
                stack: [{
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "vote"
                }, {
                    type: "Twig.expression.type.test",
                    filter: "defined"
                }],
                output: [{
                    type: "raw",
                    value: '                <div class="b-rating cfx">\n                    '
                }, {
                    type: "logic",
                    token: {
                        type: "Twig.logic.type.for",
                        key_var: null,
                        value_var: "i ",
                        expression: [{
                            type: "Twig.expression.type.number",
                            value: 5,
                            match: ["5", null]
                        }, {
                            type: "Twig.expression.type.number",
                            value: 1,
                            match: ["1", null]
                        }, {
                            type: "Twig.expression.type.operator.binary",
                            value: "..",
                            precidence: 20,
                            associativity: "leftToRight",
                            operator: ".."
                        }],
                        output: [{
                            type: "raw",
                            value: '                    <input type="radio" id="teaser-1-star'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "i",
                                match: ["i"]
                            }]
                        }, {
                            type: "raw",
                            value: '" name="rating" value="'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "i",
                                match: ["i"]
                            }]
                        }, {
                            type: "raw",
                            value: '" '
                        }, {
                            type: "logic",
                            token: {
                                type: "Twig.logic.type.if",
                                stack: [{
                                    type: "Twig.expression.type.variable",
                                    value: "i",
                                    match: ["i"]
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "vote"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: ">",
                                    precidence: 8,
                                    associativity: "leftToRight",
                                    operator: ">"
                                }, {
                                    type: "Twig.expression.type.parameter.end",
                                    value: ")",
                                    match: [")"],
                                    expression: !0,
                                    params: [{
                                        type: "Twig.expression.type.variable",
                                        value: "i",
                                        match: ["i"]
                                    }, {
                                        type: "Twig.expression.type.number",
                                        value: 1,
                                        match: ["1", null]
                                    }, {
                                        type: "Twig.expression.type.operator.binary",
                                        value: "+",
                                        precidence: 6,
                                        associativity: "leftToRight",
                                        operator: "+"
                                    }]
                                }, {
                                    type: "Twig.expression.type.variable",
                                    value: "item",
                                    match: ["item"]
                                }, {
                                    type: "Twig.expression.type.key.period",
                                    key: "vote"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "<",
                                    precidence: 8,
                                    associativity: "leftToRight",
                                    operator: "<"
                                }, {
                                    type: "Twig.expression.type.operator.binary",
                                    value: "and",
                                    precidence: 13,
                                    associativity: "leftToRight",
                                    operator: "and"
                                }],
                                output: [{
                                    type: "raw",
                                    value: 'checked="" '
                                }]
                            }
                        }, {
                            type: "raw",
                            value: '><label for="teaser-1-star'
                        }, {
                            type: "output",
                            stack: [{
                                type: "Twig.expression.type.variable",
                                value: "i",
                                match: ["i"]
                            }]
                        }, {
                            type: "raw",
                            value: '"><i class="ico-star"></i></label>\n                    '
                        }]
                    }
                }, {
                    type: "raw",
                    value: "                </div>\n                "
                }]
            }
        }, {
            type: "raw",
            value: '                <div class="b-teaser-date"><i class="ico-calendar"></i>'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "dt_time"
            }, {
                type: "Twig.expression.type.filter",
                value: "date",
                match: ["|date", "date"],
                params: [{
                    type: "Twig.expression.type.parameter.start",
                    value: "(",
                    match: ["("]
                }, {
                    type: "Twig.expression.type.string",
                    value: "H:i d.m.Y"
                }, {
                    type: "Twig.expression.type.parameter.end",
                    value: ")",
                    match: [")"],
                    expression: !1
                }]
            }]
        }, {
            type: "raw",
            value: '</div>\n                <div class="b-teaser-views"><i class="ico-views"></i>'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "viewcount"
            }]
        }, {
            type: "raw",
            value: '</div>\n            </a>\n        </div>\n        <div class="b-teaser-content">\n            <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" target="_blank" class="b-teaser-title"><span class="b-teaser-title-inner">'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "item",
                match: ["item"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: "</span></a>\n        </div>\n    </div>\n</div>"
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/WhiteList/views/twig/partial/b-teaser__image.twig", ["twig"], function(Twig) {
    var twig, templates;
    twig = Twig.twig;
    templates = twig({
        id: "/opt/TeamCity/buildAgent2/work/c095acc7c970012b/frontend/components/widgets/teasers/WhiteList/views/twig/partial/b-teaser__image.twig",
        allowInlineIncludes: !0,
        data: [{
            type: "raw",
            value: '<div class="js-item b-teaser b-teaser__image js-teaser">\n    <i class="b-teaser-label b-teaser-label__red"></i>\n    <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" target="_blank" class="b-teaser-img"><img src="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type._function",
                fn: "getImagePath",
                params: [{
                    type: "Twig.expression.type.parameter.start",
                    value: "(",
                    match: ["("]
                }, {
                    type: "Twig.expression.type.variable",
                    value: "item",
                    match: ["item"]
                }, {
                    type: "Twig.expression.type.key.period",
                    key: "cover"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.string",
                    value: "rect"
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 240,
                    match: ["240", null]
                }, {
                    type: "Twig.expression.type.comma"
                }, {
                    type: "Twig.expression.type.number",
                    value: 172,
                    match: ["172", null]
                }, {
                    type: "Twig.expression.type.parameter.end",
                    value: ")",
                    match: [")"],
                    expression: !1
                }]
            }]
        }, {
            type: "raw",
            value: '" alt="Протопланетный диск молодой звезды оказался двойным"></a>\n    <div class="b-teaser-content">\n        <a href="'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "url",
                match: ["url"]
            }]
        }, {
            type: "raw",
            value: '" target="_blank" class="b-teaser-title"><span class="b-teaser-title-inner">'
        }, {
            type: "output",
            stack: [{
                type: "Twig.expression.type.variable",
                value: "teaser",
                match: ["teaser"]
            }, {
                type: "Twig.expression.type.key.period",
                key: "title"
            }]
        }, {
            type: "raw",
            value: "</span></a>\n    </div>\n</div>"
        }],
        precompiled: !0
    });
    return templates
});
ognyvo.define("components/widgets/teasers/WhiteList/TwigPack", ["./views/twig/layout.twig", "./views/twig/list.twig", "./views/twig/partial/b-teaser.twig", "./views/twig/partial/b-teaser__big.twig", "./views/twig/partial/b-teaser__image.twig"], function(Template, List) {
    return [].slice.call(arguments, 0)
});
ognyvo.define("components/widgets/teasers/WhiteList/WidgetModel", ["model/common/ListWidgetModel", "helper/AppConsts"], function(ListWidgetModel, AppConsts) {
    "use strict";
    var WidgetModel = ListWidgetModel.extend({
        name: "components/widgets/teasers/WhiteList/WidgetModel",
        widgetUrl: "/landing/load/"
    });
    return WidgetModel
});
ognyvo.define("components/widgets/teasers/WhiteList/WidgetView", ["view/common/ListWidgetView", "helper/AppConsts", "helper/Analytics", "./WidgetModel", "settings", "./TwigPack", "utils"], function(ListWidgetView, AppConsts, Analytics, WidgetModel, Settings, Templates) {
    var TeaserWidgetView = ListWidgetView.extend({
        modelClass: WidgetModel,
        listTemplate: Templates[1],
        noRenderOnStart: !1,
        analytics: {
            "click .js-teaser": [Analytics.TEASER_CLICK, Analytics.TEASER_TEASER_CLICK],
            "click .js-more-button": Analytics.LOAD_MORE_TEASERS_BUTTON
        },
        useScroll: !1,
        limit: 8,
        type: "",
        params: {},
        apiUrl: "",
        init: function() {
            ListWidgetView.prototype.init.apply(this, arguments);
            this.apiUrl && (this.model.widgetUrl = this.apiUrl);
            this.model.addExtraData({
                type: this.type,
                params: this.params
            });
            var App = require("App");
            App.vent.on(AppConsts.EVENT.SYSTEM.WINDOW_BLUR, this.onBlur, this).on(AppConsts.EVENT.SYSTEM.WINDOW_FOCUS, this.onFocus, this)
        },
        onBlur: function() {},
        onFocus: function() {},
        onListChanged: function(model, list) {
            ListWidgetView.prototype.onListChanged.apply(this, arguments)
        },
        mainLinkClickHandler: function(e, $block, $target) {},
        blockClickHandler: function(e, $block, url) {}
    });
    return TeaserWidgetView
});
Date = Date || {};
Date.now = Date.now || function() {
        return +new Date
    };
"function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++) callback.apply(this, [this[i], i, this])
});
! function(d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter33911579 = new Ya.Metrika({
                id: 33911579,
                webvisor: !0,
                clickmap: !0,
                trackLinks: !0,
                accurateTrackBounce: !0,
                trackHash: !0,
                params: window.yaParams || {}
            })
        } catch (e) {
            throw new Error("Metrika can't load")
        }
    })
}(document, window, "yandex_metrika_callbacks");
if (!window.jsDebug) var initTrackJs = function() {
    window.trackJs && ["View", "Model", "Collection", "Router"].forEach(function(klass) {
        var Klass = Backbone[klass];
        Backbone[klass] = Klass.extend({
            constructor: function() {
                "undefined" == typeof this._trackJs && (this._trackJs = !0);
                this._trackJs && window.trackJs.watchAll(this, "model", "constructor", "comparator", "childView", "emptyView");
                return Klass.prototype.constructor.apply(this, arguments)
            }
        })
    })
};
ognyvo.require(["App", "helper/window"], function(App, window) {
    window.jsDebug || initTrackJs()
}, function(err) {});
ognyvo.define("start", ["jquery", "underscore"], function() {});/**
 * Created by user on 07.06.2016.
 */
