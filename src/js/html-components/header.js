/*eslint-disable*/
function initHeader () {
    function t (e) {
        return (t = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t
            }
            : function (t) {
                return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(e)
    }

    function e () {
        'use strict'
        e = function () {
            return i
        }
        var i = {}
        const s = Object.prototype
        const r = s.hasOwnProperty
        const a = Object.defineProperty || function (t, e, i) {
            t[e] = i.value
        }
        const n = typeof Symbol === 'function' ? Symbol : {}
        const o = n.iterator || '@@iterator'
        const h = n.asyncIterator || '@@asyncIterator'
        const l = n.toStringTag || '@@toStringTag'

        function p (t, e, i) {
            return Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }), t[e]
        }

        try {
            p({}, '')
        } catch (f) {
            p = function (t, e, i) {
                return t[e] = i
            }
        }

        function c (t, e, i, s) {
            const r = Object.create((e && e.prototype instanceof d ? e : d).prototype)
            return a(r, '_invoke', { value: w(t, i, new E(s || [])) }), r
        }

        function u (t, e, i) {
            try {
                return { type: 'normal', arg: t.call(e, i) }
            } catch (s) {
                return { type: 'throw', arg: s }
            }
        }

        i.wrap = c
        const m = {}

        function d () {
        }

        function $ () {
        }

        function g () {
        }

        let _ = {}
        p(_, o, function () {
            return this
        })
        const v = Object.getPrototypeOf
        const y = v && v(v(D([])))
        y && y !== s && r.call(y, o) && (_ = y)
        const b = g.prototype = d.prototype = Object.create(_)

        function x (t) {
            ['next', 'throw', 'return'].forEach(function (e) {
                p(t, e, function (t) {
                    return this._invoke(e, t)
                })
            })
        }

        function k (e, i) {
            let s

            function n (s, a, o, h) {
                const l = u(e[s], e, a)
                if (l.type !== 'throw') {
                    const p = l.arg
                    const f = p.value
                    return f && t(f) == 'object' && r.call(f, '__await')
                        ? i.resolve(f.__await).then(function (t) {
                            n('next', t, o, h)
                        }, function (t) {
                            n('throw', t, o, h)
                        })
                        : i.resolve(f).then(function (t) {
                            p.value = t, o(p)
                        }, function (t) {
                            return n('throw', t, o, h)
                        })
                }
                h(l.arg)
            }

            a(this, '_invoke', {
                value: function (t, e) {
                    function r () {
                        return new i(function (i, s) {
                            n(t, e, i, s)
                        })
                    }

                    return s = s ? s.then(r, r) : r()
                }
            })
        }

        function w (t, e, i) {
            let s = 'suspendedStart'
            return function (r, a) {
                if (s === 'executing') throw Error('Generator is already running')
                if (s === 'completed') {
                    if (r === 'throw') throw a
                    return { value: void 0, done: !0 }
                }
                for (i.method = r, i.arg = a; ;) {
                    const n = i.delegate
                    if (n) {
                        const o = A(n, i)
                        if (o) {
                            if (o === m) continue
                            return o
                        }
                    }
                    if (i.method === 'next') i.sent = i._sent = i.arg; else if (i.method === 'throw') {
                        if (s === 'suspendedStart') throw s = 'completed', i.arg
                        i.dispatchException(i.arg)
                    } else i.method === 'return' && i.abrupt('return', i.arg)
                    s = 'executing'
                    const h = u(t, e, i)
                    if (h.type === 'normal') {
                        if (s = i.done ? 'completed' : 'suspendedYield', h.arg === m) continue
                        return { value: h.arg, done: i.done }
                    }
                    h.type === 'throw' && (s = 'completed', i.method = 'throw', i.arg = h.arg)
                }
            }
        }

        function A (t, e) {
            const i = e.method
            const s = t.iterator[i]
            if (void 0 === s) return e.delegate = null, i === 'throw' && t.iterator.return && (e.method = 'return', e.arg = void 0, A(t, e), e.method === 'throw') || i !== 'return' && (e.method = 'throw', e.arg = TypeError("The iterator does not provide a '" + i + "' method")), m
            const r = u(s, t.iterator, e.arg)
            if (r.type === 'throw') return e.method = 'throw', e.arg = r.arg, e.delegate = null, m
            const a = r.arg
            return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, e.method !== 'return' && (e.method = 'next', e.arg = void 0), e.delegate = null, m) : a : (e.method = 'throw', e.arg = TypeError('iterator result is not an object'), e.delegate = null, m)
        }

        function P (t) {
            const e = { tryLoc: t[0] }
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function C (t) {
            const e = t.completion || {}
            e.type = 'normal', delete e.arg, t.completion = e
        }

        function E (t) {
            this.tryEntries = [{ tryLoc: 'root' }], t.forEach(P, this), this.reset(!0)
        }

        function D (t) {
            if (t) {
                const e = t[o]
                if (e) return e.call(t)
                if (typeof t.next === 'function') return t
                if (!isNaN(t.length)) {
                    let i = -1
                    const s = function e () {
                        for (; ++i < t.length;) if (r.call(t, i)) return e.value = t[i], e.done = !1, e
                        return e.value = void 0, e.done = !0, e
                    }
                    return s.next = s
                }
            }
            return { next: S }
        }

        function S () {
            return { value: void 0, done: !0 }
        }

        return $.prototype = g, a(b, 'constructor', {
            value: g,
            configurable: !0
        }), a(g, 'constructor', {
            value: $,
            configurable: !0
        }), $.displayName = p(g, l, 'GeneratorFunction'), i.isGeneratorFunction = function (t) {
            const e = typeof t === 'function' && t.constructor
            return !!e && (e === $ || (e.displayName || e.name) === 'GeneratorFunction')
        }, i.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, p(t, l, 'GeneratorFunction')), t.prototype = Object.create(b), t
        }, i.awrap = function (t) {
            return { __await: t }
        }, x(k.prototype), p(k.prototype, h, function () {
            return this
        }), i.AsyncIterator = k, i.async = function (t, e, s, r, a) {
            void 0 === a && (a = Promise)
            const n = new k(c(t, e, s, r), a)
            return i.isGeneratorFunction(e)
                ? n
                : n.next().then(function (t) {
                    return t.done ? t.value : n.next()
                })
        }, x(b), p(b, l, 'Generator'), p(b, o, function () {
            return this
        }), p(b, 'toString', function () {
            return '[object Generator]'
        }), i.keys = function (t) {
            const e = Object(t)
            const i = []
            for (const s in e) i.push(s)
            return i.reverse(), function t () {
                for (; i.length;) {
                    const s = i.pop()
                    if (s in e) return t.value = s, t.done = !1, t
                }
                return t.done = !0, t
            }
        }, i.values = D, E.prototype = {
            constructor: E,
            reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(C), !t) for (const e in this) e.charAt(0) === 't' && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function () {
                this.done = !0
                const t = this.tryEntries[0].completion
                if (t.type === 'throw') throw t.arg
                return this.rval
            },
            dispatchException: function (t) {
                if (this.done) throw t
                const e = this

                function i (i, s) {
                    return n.type = 'throw', n.arg = t, e.next = i, s && (e.method = 'next', e.arg = void 0), !!s
                }

                for (let s = this.tryEntries.length - 1; s >= 0; --s) {
                    const a = this.tryEntries[s]
                    var n = a.completion
                    if (a.tryLoc === 'root') return i('end')
                    if (a.tryLoc <= this.prev) {
                        const o = r.call(a, 'catchLoc')
                        const h = r.call(a, 'finallyLoc')
                        if (o && h) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        } else if (o) {
                            if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                        } else {
                            if (!h) throw Error('try statement without catch or finally')
                            if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function (t, e) {
                for (let i = this.tryEntries.length - 1; i >= 0; --i) {
                    const s = this.tryEntries[i]
                    if (s.tryLoc <= this.prev && r.call(s, 'finallyLoc') && this.prev < s.finallyLoc) {
                        var a = s
                        break
                    }
                }
                a && (t === 'break' || t === 'continue') && a.tryLoc <= e && e <= a.finallyLoc && (a = null)
                const n = a ? a.completion : {}
                return n.type = t, n.arg = e, a ? (this.method = 'next', this.next = a.finallyLoc, m) : this.complete(n)
            },
            complete: function (t, e) {
                if (t.type === 'throw') throw t.arg
                return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), m
            },
            finish: function (t) {
                for (let e = this.tryEntries.length - 1; e >= 0; --e) {
                    const i = this.tryEntries[e]
                    if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), C(i), m
                }
            },
            catch: function (t) {
                for (let e = this.tryEntries.length - 1; e >= 0; --e) {
                    const i = this.tryEntries[e]
                    if (i.tryLoc === t) {
                        const s = i.completion
                        if (s.type === 'throw') {
                            var r = s.arg
                            C(i)
                        }
                        return r
                    }
                }
                throw Error('illegal catch attempt')
            },
            delegateYield: function (t, e, i) {
                return this.delegate = {
                    iterator: D(t),
                    resultName: e,
                    nextLoc: i
                }, this.method === 'next' && (this.arg = void 0), m
            }
        }, i
    }

    function i (t, e, i, s, r, a, n) {
        try {
            var o = t[a](n)
            var h = o.value
        } catch (l) {
            return void i(l)
        }
        o.done ? e(h) : Promise.resolve(h).then(s, r)
    }

    function s (t) {
        return function () {
            const e = this
            const s = arguments
            return new Promise(function (r, a) {
                const n = t.apply(e, s)

                function o (t) {
                    i(n, r, a, o, h, 'next', t)
                }

                function h (t) {
                    i(n, r, a, o, h, 'throw', t)
                }

                o(void 0)
            })
        }
    }

    const r = document.querySelector('.main-header')
    const a = r.querySelector('.btn--burger')
    const n = r.querySelector('.btn--burger svg')
    const o = {
        scroll: 'main-header--sticky',
        scrollEnterFrom: 'main-header--sticky-enter-from',
        scrollEnterTo: 'main-header--sticky-enter-to',
        scrollLeaveTo: 'main-header--sticky-leave-to',
        navLeave: 'main-header--leave',
        navEnterFrom: 'main-header--leave-from',
        navEnterTo: 'main-header--leave-to',
        burger: 'main-header--burger',
        burgerEnterFrom: 'main-header--burger-enter-from',
        burgerEnterTo: 'main-header--burger-enter-to',
        burgerLeaveFrom: 'main-header--burger-leave-from',
        burgerLeaveTo: 'main-header--burger-leave-to'
    }

    function h (t) {
        return new Promise(function (e) {
            setTimeout(e, t)
        })
    }

    function l () {
        console.log('i am here')
        r.classList.contains(o.burger) || (window.scrollY > 20 && !r.classList.contains(o.scroll) && (r.classList.add(o.navLeave), r.addEventListener('transitionend', s(e().mark(function t () {
            let i
            return e().wrap(function (t) {
                for (; ;) {
                    switch (t.prev = t.next) {
                    case 0:
                        return r.classList.remove(o.navLeave), (i = r.classList).add.apply(i, [o.scroll, o.scrollEnterFrom]), t.next = 4, h(1)
                    case 4:
                        r.classList.add(o.scrollEnterTo), r.addEventListener('transitionend', function () {
                            let t;
                            (t = r.classList).remove.apply(t, [o.scrollEnterFrom, o.scrollEnterTo])
                        }, { once: !0 })
                    case 6:
                    case 'end':
                        return t.stop()
                    }
                }
            }, t)
        })), { once: !0 })), window.scrollY < 20 && r.classList.contains(o.scroll) && (r.classList.add(o.scrollLeaveTo), r.addEventListener('transitionend', function () {
            let t, e;
            (t = r.classList).remove.apply(t, [o.scroll, o.scrollLeaveTo]), (e = r.classList).add.apply(e, [o.navEnterFrom]), setTimeout(function () {
                let t;
                (t = r.classList).add.apply(t, [o.navEnterTo]), r.addEventListener('transitionend', function () {
                    let t;
                    (t = r.classList).remove.apply(t, [o.navEnterFrom, o.navEnterTo])
                }, { once: !0 })
            })
        }, { once: !0 })))
    }

    function p () {

        return f.apply(this, arguments)
    }

    function f () {
        return (f = s(e().mark(function t () {
            let i, s
            return e().wrap(function (t) {
                for (; ;) {
                    switch (t.prev = t.next) {
                    case 0:
                        if (r.classList.contains(o.burger)) {
                            t.next = 13
                            break
                        }
                        return c(), r.classList.add(o.burger), r.classList.add(o.burgerEnterFrom), t.next = 6, h(1)
                    case 6:
                        return r.classList.add(o.burgerEnterTo), t.next = 9, h(300)
                    case 9:
                        (i = r.classList).remove.apply(i, [o.burgerEnterTo, o.burgerEnterFrom]), n.classList.add('active'), t.next = 23
                        break
                    case 13:
                        return r.classList.add(o.burgerLeaveFrom), t.next = 16, h(1)
                    case 16:
                        return r.classList.add(o.burgerLeaveTo), t.next = 19, h(300)
                    case 19:
                        r.classList.remove(o.burger), (s = r.classList).remove.apply(s, [o.burgerLeaveTo, o.burgerLeaveFrom]), n.classList.remove('active'), u()
                    case 23:
                    case 'end':
                        return t.stop()
                    }
                }
            }, t)
        }))).apply(this, arguments)
    }

    var c = function () {
        const t = ''.concat(m(), 'px')
        document.body.style.paddingRight = t, document.body.style.overflow = 'hidden', r.style.paddingRight = t
    }
    var u = function (t) {
        document.body.style.paddingRight = '', document.body.style.overflow = 'visible', r.style.paddingRight = ''
    }
    var m = function () {
        const t = document.createElement('div')
        t.style.position = 'absolute', t.style.top = '-9999px', t.style.width = '50px', t.style.height = '50px', t.style.overflow = 'scroll', t.style.visibility = 'hidden', document.body.appendChild(t)
        const e = t.offsetWidth - t.clientWidth
        return document.body.removeChild(t), e
    }
    document.querySelector('.site-navigation').addEventListener('click', function (t) {
        t.target.closest('.main-header--burger') && p()
    })
        if (!r.dataset.stickyOnly) {
        l(),
        	window.addEventListener('scroll', l)
        } else {
            // TODO: временное решение
            console.log(r.offsetHeight)
            document.querySelector('.wrapper-main').style.paddingTop = r.offsetHeight + 'px'
        }
	a.onclick = p
}

initHeader()