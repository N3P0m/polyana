/* eslint-disable */
/*! For license information please see main.4bee8440aa8f69e46e29.179.js.LICENSE.txt */
!(function () {
  const __webpack_modules__ = {
    326: function () {
      function t (t, e) {
        (e == null || e > t.length) && (e = t.length)
        for (var i = 0, s = Array(e); i < e; i++) s[i] = t[i]
        return s
      }

      document.addEventListener('DOMContentLoaded', function () {
        let e
        const i = document.querySelectorAll('input[data-tel-input]')
        const s = function (t) {
          return t.value.replace(/\D/g, '')
        }
        const r = function (t) {
          const e = t.target
          const i = s(e)
          const r = t.clipboardData || window.clipboardData
          if (r) {
            const a = r.getData('Text');
            /\D/g.test(a) && (e.value = i)
          }
        }
        const a = function (t) {
          const e = t.target
          let i = s(e)
          const r = e.selectionStart
          let a = ''
          if (i) {
            if (e.value.length == r) {
              if (['7', '8', '9'].indexOf(i[0]) > -1) {
                i[0] == '9' && (i = '7' + i)
                const n = i[0] == '8' ? '8' : '+7'
                a = e.value = n + ' ', i.length > 1 && (a += '(' + i.substring(1, 4)), i.length >= 5 && (a += ') ' + i.substring(4, 7)), i.length >= 8 && (a += '-' + i.substring(7, 9)), i.length >= 10 && (a += '-' + i.substring(9, 11))
              } else a = '+' + i.substring(0, 16)
              e.value = a
            } else t.data && /\D/g.test(t.data) && (e.value = i)
          } else e.value = ''
        }
        const n = function (t) {
          const e = t.target.value.replace(/\D/g, '')
          t.keyCode == 8 && e.length == 1 && (t.target.value = '')
        }
        const o = (function (e, i) {
          let s = typeof Symbol !== 'undefined' && e[Symbol.iterator] || e['@@iterator']
          if (!s) {
            if (Array.isArray(e) || (s = (function (e, i) {
              if (e) {
                if (typeof e === 'string') return t(e, i)
                let s = Object.prototype.toString.call(e).slice(8, -1)
                return s === 'Object' && e.constructor && (s = e.constructor.name), s === 'Map' || s === 'Set' ? Array.from(e) : s === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? t(e, i) : void 0
              }
            }(e)))) {
              s && (e = s)
              let r = 0
              const a = function () {
              }
              return {
                s: a,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                },
                e: function (t) {
                  throw t
                },
                f: a
              }
            }
            throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
          }
          let n
          let o = !0
          let h = !1
          return {
            s: function () {
              s = s.call(e)
            },
            n: function () {
              const t = s.next()
              return o = t.done, t
            },
            e: function (t) {
              h = !0, n = t
            },
            f: function () {
              try {
                o || s.return == null || s.return()
              } finally {
                if (h) throw n
              }
            }
          }
        }(i))
        try {
          for (o.s(); !(e = o.n()).done;) {
            const h = e.value
            h.addEventListener('keydown', n), h.addEventListener('input', a, !1), h.addEventListener('paste', r, !1)
          }
        } catch (l) {
          o.e(l)
        } finally {
          o.f()
        }
      })
    },
    638: function () {
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
      const a = r.querySelector('.btn-burger')
      const n = r.querySelector('.btn-burger svg')
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
      }), l(), window.addEventListener('scroll', l), a.onclick = p
    },
    248: function (module, exports, __webpack_require__) {
      let factory
      typeof navigator !== 'undefined' && (factory = function () {
        'use strict'
        const svgNS = 'http://www.w3.org/2000/svg'
        let locationHref = ''
        let _useWebWorker = !1
        const initialDefaultFrame = -999999
        const setWebWorker = function (t) {
          _useWebWorker = !!t
        }
        const getWebWorker = function () {
          return _useWebWorker
        }
        const setLocationHref = function (t) {
          locationHref = t
        }
        const getLocationHref = function () {
          return locationHref
        }

        function createTag (t) {
          return document.createElement(t)
        }

        function extendPrototype (t, e) {
          let i
          let s
          const r = t.length
          for (i = 0; i < r; i += 1) for (const a in s = t[i].prototype) Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
        }

        function getDescriptor (t, e) {
          return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction (t) {
          function e () {
          }

          return e.prototype = t, e
        }

        const audioControllerFactory = (function () {
          function t (t) {
            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
          }

          return t.prototype = {
            addAudio: function (t) {
              this.audios.push(t)
            },
            pause: function () {
              let t
              const e = this.audios.length
              for (t = 0; t < e; t += 1) this.audios[t].pause()
            },
            resume: function () {
              let t
              const e = this.audios.length
              for (t = 0; t < e; t += 1) this.audios[t].resume()
            },
            setRate: function (t) {
              let e
              const i = this.audios.length
              for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
            },
            createAudio: function (t) {
              return this.audioFactory
                ? this.audioFactory(t)
                : window.Howl
                  ? new window.Howl({ src: [t] })
                  : {
                      isPlaying: !1,
                      play: function () {
                        this.isPlaying = !0
                      },
                      seek: function () {
                        this.isPlaying = !1
                      },
                      playing: function () {
                      },
                      rate: function () {
                      },
                      setVolume: function () {
                      }
                    }
            },
            setAudioFactory: function (t) {
              this.audioFactory = t
            },
            setVolume: function (t) {
              this._volume = t, this._updateVolume()
            },
            mute: function () {
              this._isMuted = !0, this._updateVolume()
            },
            unmute: function () {
              this._isMuted = !1, this._updateVolume()
            },
            getVolume: function () {
              return this._volume
            },
            _updateVolume: function () {
              let t
              const e = this.audios.length
              for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
            }
          }, function () {
            return new t()
          }
        }())
        const createTypedArray = (function () {
          function t (t, e) {
            let i
            let s = 0
            const r = []
            switch (t) {
              case 'int16':
              case 'uint8c':
                i = 1
                break
              default:
                i = 1.1
            }
            for (s = 0; s < e; s += 1) r.push(i)
            return r
          }

          return typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function'
            ? function (e, i) {
              return e === 'float32' ? new Float32Array(i) : e === 'int16' ? new Int16Array(i) : e === 'uint8c' ? new Uint8ClampedArray(i) : t(e, i)
            }
            : t
        }())

        function createSizedArray (t) {
          return Array.apply(null, { length: t })
        }

        function _typeof$6 (t) {
          return (_typeof$6 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
        }

        let subframeEnabled = !0
        let expressionsPlugin = null
        let expressionsInterfaces = null
        let idPrefix$1 = ''
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        let _shouldRoundValues = !1
        const bmPow = Math.pow
        const bmSqrt = Math.sqrt
        const bmFloor = Math.floor
        const bmMax = Math.max
        const bmMin = Math.min
        const BMMath = {}

        function ProjectInterface$1 () {
          return {}
        }

        (function () {
          let t
          const e = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2']
          const i = e.length
          for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
        })(), BMMath.random = Math.random, BMMath.abs = function (t) {
          if (_typeof$6(t) === 'object' && t.length) {
            let e
            const i = createSizedArray(t.length)
            const s = t.length
            for (e = 0; e < s; e += 1) i[e] = Math.abs(t[e])
            return i
          }
          return Math.abs(t)
        }
        let defaultCurveSegments = 150
        const degToRads = Math.PI / 180
        const roundCorner = 0.5519

        function roundValues (t) {
          _shouldRoundValues = !!t
        }

        function bmRnd (t) {
          return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv (t) {
          t.style.position = 'absolute', t.style.top = 0, t.style.left = 0, t.style.display = 'block', t.style.transformOrigin = '0 0', t.style.webkitTransformOrigin = '0 0', t.style.backfaceVisibility = 'visible', t.style.webkitBackfaceVisibility = 'visible', t.style.transformStyle = 'preserve-3d', t.style.webkitTransformStyle = 'preserve-3d', t.style.mozTransformStyle = 'preserve-3d'
        }

        function BMEnterFrameEvent (t, e, i, s) {
          this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1
        }

        function BMCompleteEvent (t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent (t, e, i, s) {
          this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1
        }

        function BMSegmentStartEvent (t, e, i) {
          this.type = t, this.firstFrame = e, this.totalFrames = i
        }

        function BMDestroyEvent (t, e) {
          this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent (t, e) {
          this.type = 'renderFrameError', this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent (t) {
          this.type = 'configError', this.nativeError = t
        }

        function BMAnimationConfigErrorEvent (t, e) {
          this.type = t, this.nativeError = e
        }

        let _count
        const createElementID = (_count = 0, function () {
          return idPrefix$1 + '__lottie_element_' + (_count += 1)
        })

        function HSVtoRGB (t, e, i) {
          let s, r, a, n, o, h, l, p
          switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
            case 0:
              s = i, r = p, a = h
              break
            case 1:
              s = l, r = i, a = h
              break
            case 2:
              s = h, r = i, a = p
              break
            case 3:
              s = h, r = l, a = i
              break
            case 4:
              s = p, r = h, a = i
              break
            case 5:
              s = i, r = h, a = l
          }
          return [s, r, a]
        }

        function RGBtoHSV (t, e, i) {
          let s
          const r = Math.max(t, e, i)
          const a = Math.min(t, e, i)
          const n = r - a
          const o = r === 0 ? 0 : n / r
          const h = r / 255
          switch (r) {
            case a:
              s = 0
              break
            case t:
              s = e - i + n * (e < i ? 6 : 0), s /= 6 * n
              break
            case e:
              s = i - t + 2 * n, s /= 6 * n
              break
            case i:
              s = t - e + 4 * n, s /= 6 * n
          }
          return [s, o, h]
        }

        function addSaturationToRGB (t, e) {
          const i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2])
          return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addBrightnessToRGB (t, e) {
          const i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2])
          return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addHueToRGB (t, e) {
          const i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2])
          return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
        }

        const rgbToHex = (function () {
          let t
          let e
          const i = []
          for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = e.length === 1 ? '0' + e : e
          return function (t, e, s) {
            return t < 0 && (t = 0), e < 0 && (e = 0), s < 0 && (s = 0), '#' + i[t] + i[e] + i[s]
          }
        }())
        const setSubframeEnabled = function (t) {
          subframeEnabled = !!t
        }
        const getSubframeEnabled = function () {
          return subframeEnabled
        }
        const setExpressionsPlugin = function (t) {
          expressionsPlugin = t
        }
        const getExpressionsPlugin = function () {
          return expressionsPlugin
        }
        const setExpressionInterfaces = function (t) {
          expressionsInterfaces = t
        }
        const getExpressionInterfaces = function () {
          return expressionsInterfaces
        }
        const setDefaultCurveSegments = function (t) {
          defaultCurveSegments = t
        }
        const getDefaultCurveSegments = function () {
          return defaultCurveSegments
        }
        const setIdPrefix = function (t) {
          idPrefix$1 = t
        }
        const getIdPrefix = function () {
          return idPrefix$1
        }

        function createNS (t) {
          return document.createElementNS(svgNS, t)
        }

        function _typeof$5 (t) {
          return (_typeof$5 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
        }

        const dataManager = (function () {
          let t
          let e
          let i = 1
          const s = []
          const r = {
            onmessage: function () {
            },
            postMessage: function (e) {
              t({ data: e })
            }
          }
          const a = {
            postMessage: function (t) {
              r.onmessage({ data: t })
            }
          }

          function n () {
            e || ((e = (function (e) {
              if (window.Worker && window.Blob && getWebWorker()) {
                const i = new Blob(['var _workerSelf = self; self.onmessage = ', e.toString()], { type: 'text/javascript' })
                const s = URL.createObjectURL(i)
                return new Worker(s)
              }
              return t = e, r
            }(function (t) {
              if (a.dataManager || (a.dataManager = (function () {
                function t (r, a) {
                  let n
                  let o
                  let h
                  let l
                  let p
                  let f
                  let c
                  const u = r.length
                  for (o = 0; o < u; o += 1) {
                    if ('ks' in (n = r[o]) && !n.completed) {
                      if (n.completed = !0, n.hasMask) {
                        const m = n.masksProperties
                        for (l = m.length, h = 0; h < l; h += 1) if (m[h].pt.k.i) s(m[h].pt.k); else for (f = m[h].pt.k.length, p = 0; p < f; p += 1) m[h].pt.k[p].s && s(m[h].pt.k[p].s[0]), m[h].pt.k[p].e && s(m[h].pt.k[p].e[0])
                      }
                      n.ty === 0 ? (n.layers = e(n.refId, a), t(n.layers, a)) : n.ty === 4 ? i(n.shapes) : n.ty === 5 && (c = n).t.a.length === 0 && c.t.p
                    }
                  }
                }

                function e (t, e) {
                  const i = (function (t, e) {
                    for (let i = 0, s = e.length; i < s;) {
                      if (e[i].id === t) return e[i]
                      i += 1
                    }
                    return null
                  }(t, e))
                  return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                }

                function i (t) {
                  let e, r, a
                  for (e = t.length - 1; e >= 0; e -= 1) {
                    if (t[e].ty === 'sh') {
                      if (t[e].ks.k.i) s(t[e].ks.k); else for (a = t[e].ks.k.length, r = 0; r < a; r += 1) t[e].ks.k[r].s && s(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && s(t[e].ks.k[r].e[0])
                    } else t[e].ty === 'gr' && i(t[e].it)
                  }
                }

                function s (t) {
                  let e
                  const i = t.i.length
                  for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                }

                function r (t, e) {
                  const i = e ? e.split('.') : [100, 100, 100]
                  return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                }

                let a
                const n = (function () {
                  const t = [4, 4, 14]

                  function e (t) {
                    let e
                    let i
                    let s
                    const r = t.length
                    for (e = 0; e < r; e += 1) {
                      t[e].ty === 5 && (s = (i = t[e]).t.d, i.t.d = {
                        k: [{
                          s,
                          t: 0
                        }]
                      })
                    }
                  }

                  return function (i) {
                    if (r(t, i.v) && (e(i.layers), i.assets)) {
                      let s
                      const a = i.assets.length
                      for (s = 0; s < a; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                    }
                  }
                }())
                const o = (a = [4, 7, 99], function (t) {
                  if (t.chars && !r(a, t.v)) {
                    let e
                    const s = t.chars.length
                    for (e = 0; e < s; e += 1) {
                      const n = t.chars[e]
                      n.data && n.data.shapes && (i(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                        p: {
                          k: [0, 0],
                          a: 0
                        },
                        s: { k: [100, 100], a: 0 },
                        a: { k: [0, 0], a: 0 },
                        r: { k: 0, a: 0 },
                        o: { k: 100, a: 0 }
                      }, t.chars[e].t || (n.data.shapes.push({ ty: 'no' }), n.data.shapes[0].it.push({
                        p: {
                          k: [0, 0],
                          a: 0
                        },
                        s: { k: [100, 100], a: 0 },
                        a: { k: [0, 0], a: 0 },
                        r: { k: 0, a: 0 },
                        o: { k: 100, a: 0 },
                        sk: { k: 0, a: 0 },
                        sa: { k: 0, a: 0 },
                        ty: 'tr'
                      })))
                    }
                  }
                })
                const h = (function () {
                  const t = [5, 7, 15]

                  function e (t) {
                    let e
                    let i
                    const s = t.length
                    for (e = 0; e < s; e += 1) {
                      t[e].ty === 5 && (i = void 0, typeof (i = t[e].t.p).a === 'number' && (i.a = {
                        a: 0,
                        k: i.a
                      }), typeof i.p === 'number' && (i.p = {
                        a: 0,
                        k: i.p
                      }), typeof i.r === 'number' && (i.r = { a: 0, k: i.r }))
                    }
                  }

                  return function (i) {
                    if (r(t, i.v) && (e(i.layers), i.assets)) {
                      let s
                      const a = i.assets.length
                      for (s = 0; s < a; s += 1) i.assets[s].layers && e(i.assets[s].layers)
                    }
                  }
                }())
                const l = (function () {
                  const t = [4, 1, 9]

                  function e (t) {
                    let i
                    let s
                    let r
                    const a = t.length
                    for (i = 0; i < a; i += 1) {
                      if (t[i].ty === 'gr') e(t[i].it); else if (t[i].ty === 'fl' || t[i].ty === 'st') {
                        if (t[i].c.k && t[i].c.k[0].i) for (r = t[i].c.k.length, s = 0; s < r; s += 1) t[i].c.k[s].s && (t[i].c.k[s].s[0] /= 255, t[i].c.k[s].s[1] /= 255, t[i].c.k[s].s[2] /= 255, t[i].c.k[s].s[3] /= 255), t[i].c.k[s].e && (t[i].c.k[s].e[0] /= 255, t[i].c.k[s].e[1] /= 255, t[i].c.k[s].e[2] /= 255, t[i].c.k[s].e[3] /= 255); else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                      }
                    }
                  }

                  function i (t) {
                    let i
                    const s = t.length
                    for (i = 0; i < s; i += 1) t[i].ty === 4 && e(t[i].shapes)
                  }

                  return function (e) {
                    if (r(t, e.v) && (i(e.layers), e.assets)) {
                      let s
                      const a = e.assets.length
                      for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                    }
                  }
                }())
                const p = (function () {
                  const t = [4, 4, 18]

                  function e (t) {
                    let i, s, r
                    for (i = t.length - 1; i >= 0; i -= 1) {
                      if (t[i].ty === 'sh') {
                        if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed; else for (r = t[i].ks.k.length, s = 0; s < r; s += 1) t[i].ks.k[s].s && (t[i].ks.k[s].s[0].c = t[i].closed), t[i].ks.k[s].e && (t[i].ks.k[s].e[0].c = t[i].closed)
                      } else t[i].ty === 'gr' && e(t[i].it)
                    }
                  }

                  function i (t) {
                    let i
                    let s
                    let r
                    let a
                    let n
                    let o
                    const h = t.length
                    for (s = 0; s < h; s += 1) {
                      if ((i = t[s]).hasMask) {
                        const l = i.masksProperties
                        for (a = l.length, r = 0; r < a; r += 1) if (l[r].pt.k.i) l[r].pt.k.c = l[r].cl; else for (o = l[r].pt.k.length, n = 0; n < o; n += 1) l[r].pt.k[n].s && (l[r].pt.k[n].s[0].c = l[r].cl), l[r].pt.k[n].e && (l[r].pt.k[n].e[0].c = l[r].cl)
                      }
                      i.ty === 4 && e(i.shapes)
                    }
                  }

                  return function (e) {
                    if (r(t, e.v) && (i(e.layers), e.assets)) {
                      let s
                      const a = e.assets.length
                      for (s = 0; s < a; s += 1) e.assets[s].layers && i(e.assets[s].layers)
                    }
                  }
                }())
                const f = {
                  completeData: function (i) {
                    i.__complete || (l(i), n(i), o(i), h(i), p(i), t(i.layers, i.assets), (function (i, s) {
                      if (i) {
                        let r = 0
                        const a = i.length
                        for (r = 0; r < a; r += 1) i[r].t === 1 && (i[r].data.layers = e(i[r].data.refId, s), t(i[r].data.layers, s))
                      }
                    }(i.chars, i.assets)), i.__complete = !0)
                  }
                }
                return f.checkColors = l, f.checkChars = o, f.checkPathProperties = h, f.checkShapes = p, f.completeLayers = t, f
              }())), a.assetLoader || (a.assetLoader = (function () {
                function t (t) {
                  const e = t.getResponseHeader('content-type')
                  return e && t.responseType === 'json' && e.indexOf('json') !== -1 || t.response && _typeof$5(t.response) === 'object' ? t.response : t.response && typeof t.response === 'string' ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                }

                return {
                  load: function (e, i, s, r) {
                    let a
                    const n = new XMLHttpRequest()
                    try {
                      n.responseType = 'json'
                    } catch (o) {
                    }
                    n.onreadystatechange = function () {
                      if (n.readyState === 4) {
                        if (n.status === 200) a = t(n), s(a); else {
                          try {
                            a = t(n), s(a)
                          } catch (e) {
                            r && r(e)
                          }
                        }
                      }
                    }
                    try {
                      n.open('GET', e, !0)
                    } catch (h) {
                      n.open('GET', i + '/' + e, !0)
                    }
                    n.send()
                  }
                }
              }())), t.data.type === 'loadAnimation') {
                a.assetLoader.load(t.data.path, t.data.fullPath, function (e) {
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: 'success'
                  })
                }, function () {
                  a.postMessage({ id: t.data.id, status: 'error' })
                })
              } else if (t.data.type === 'complete') {
                const e = t.data.animation
                a.dataManager.completeData(e), a.postMessage({
                  id: t.data.id,
                  payload: e,
                  status: 'success'
                })
              } else {
                t.data.type === 'loadData' && a.assetLoader.load(t.data.path, t.data.fullPath, function (e) {
                  a.postMessage({ id: t.data.id, payload: e, status: 'success' })
                }, function () {
                  a.postMessage({ id: t.data.id, status: 'error' })
                })
              }
            }))).onmessage = function (t) {
              const e = t.data
              const i = e.id
              const r = s[i]
              s[i] = null, e.status === 'success' ? r.onComplete(e.payload) : r.onError && r.onError()
            })
          }

          function o (t, e) {
            const r = 'processId_' + (i += 1)
            return s[r] = { onComplete: t, onError: e }, r
          }

          return {
            loadAnimation: function (t, i, s) {
              n()
              const r = o(i, s)
              e.postMessage({
                type: 'loadAnimation',
                path: t,
                fullPath: window.location.origin + window.location.pathname,
                id: r
              })
            },
            loadData: function (t, i, s) {
              n()
              const r = o(i, s)
              e.postMessage({
                type: 'loadData',
                path: t,
                fullPath: window.location.origin + window.location.pathname,
                id: r
              })
            },
            completeAnimation: function (t, i, s) {
              n()
              const r = o(i, s)
              e.postMessage({ type: 'complete', animation: t, id: r })
            }
          }
        }())
        const ImagePreloader = (function () {
          let t
          let e
          const i = ((t = createTag('canvas')).width = 1, t.height = 1, (e = t.getContext('2d')).fillStyle = 'rgba(0,0,0,0)', e.fillRect(0, 0, 1, 1), t)

          function s () {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function r () {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function a (t, e, i) {
            let s = ''
            if (t.e) s = t.p; else if (e) {
              let r = t.p
              r.indexOf('images/') !== -1 && (r = r.split('/')[1]), s = e + r
            } else s = i, s += t.u ? t.u : '', s += t.p
            return s
          }

          function n (t) {
            let e = 0
            var i = setInterval(function () {
              (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
            }.bind(this), 50)
          }

          function o (t) {
            const e = { assetData: t }
            const i = a(t, this.assetsPath, this.path)
            return dataManager.loadData(i, function (t) {
              e.img = t, this._footageLoaded()
            }.bind(this), function () {
              e.img = {}, this._footageLoaded()
            }.bind(this)), e
          }

          function h () {
            this._imageLoaded = s.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = o.bind(this), this.assetsPath = '', this.path = '', this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
          }

          return h.prototype = {
            loadAssets: function (t, e) {
              this.imagesLoadedCb = e
              let i
              const s = t.length
              for (i = 0; i < s; i += 1) t[i].layers || (t[i].t && t[i].t !== 'seq' ? t[i].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
            },
            setAssetsPath: function (t) {
              this.assetsPath = t || ''
            },
            setPath: function (t) {
              this.path = t || ''
            },
            loadedImages: function () {
              return this.totalImages === this.loadedAssets
            },
            loadedFootages: function () {
              return this.totalFootages === this.loadedFootagesCount
            },
            destroy: function () {
              this.imagesLoadedCb = null, this.images.length = 0
            },
            getAsset: function (t) {
              for (let e = 0, i = this.images.length; e < i;) {
                if (this.images[e].assetData === t) return this.images[e].img
                e += 1
              }
              return null
            },
            createImgData: function (t) {
              const e = a(t, this.assetsPath, this.path)
              const s = createTag('img')
              s.crossOrigin = 'anonymous', s.addEventListener('load', this._imageLoaded, !1), s.addEventListener('error', function () {
                r.img = i, this._imageLoaded()
              }.bind(this), !1), s.src = e
              var r = { img: s, assetData: t }
              return r
            },
            createImageData: function (t) {
              const e = a(t, this.assetsPath, this.path)
              const s = createNS('image')
              isSafari ? this.testImageLoaded(s) : s.addEventListener('load', this._imageLoaded, !1), s.addEventListener('error', function () {
                r.img = i, this._imageLoaded()
              }.bind(this), !1), s.setAttributeNS('http://www.w3.org/1999/xlink', 'href', e), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s)
              var r = { img: s, assetData: t }
              return r
            },
            imageLoaded: s,
            footageLoaded: r,
            setCacheType: function (t, e) {
              t === 'svg' ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
            }
          }, h
        }())

        function BaseEvent () {
        }

        BaseEvent.prototype = {
          triggerEvent: function (t, e) {
            if (this._cbs[t]) for (let i = this._cbs[t], s = 0; s < i.length; s += 1) i[s](e)
          },
          addEventListener: function (t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function () {
              this.removeEventListener(t, e)
            }.bind(this)
          },
          removeEventListener: function (t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (let i = 0, s = this._cbs[t].length; i < s;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, s -= 1), i += 1
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        }
        const markerParser = (function () {
          function t (t) {
            for (var e, i = t.split('\r\n'), s = {}, r = 0, a = 0; a < i.length; a += 1) (e = i[a].split(':')).length === 2 && (s[e[0]] = e[1].trim(), r += 1)
            if (r === 0) throw Error()
            return s
          }

          return function (e) {
            for (var i = [], s = 0; s < e.length; s += 1) {
              const r = e[s]
              const a = { time: r.tm, duration: r.dr }
              try {
                a.payload = JSON.parse(e[s].cm)
              } catch (n) {
                try {
                  a.payload = t(e[s].cm)
                } catch (o) {
                  a.payload = { name: e[s].cm }
                }
              }
              i.push(a)
            }
            return i
          }
        }())
        const ProjectInterface = (function () {
          function t (t) {
            this.compositions.push(t)
          }

          return function () {
            function e (t) {
              for (let e = 0, i = this.compositions.length; e < i;) {
                if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface
                e += 1
              }
              return null
            }

            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
          }
        }())
        const renderers = {}
        const registerRenderer = function (t, e) {
          renderers[t] = e
        }

        function getRenderer (t) {
          return renderers[t]
        }

        function getRegisteredRenderer () {
          if (renderers.canvas) return 'canvas'
          for (const t in renderers) if (renderers[t]) return t
          return ''
        }

        function _typeof$4 (t) {
          return (_typeof$4 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
        }

        const AnimationItem = function () {
          this._cbs = [], this.name = '', this.path = '', this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = '', this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent('drawnFrame', 0, 0, 0)
        }
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container)
          let e = 'svg'
          t.animType ? e = t.animType : t.renderer && (e = t.renderer)
          const i = getRenderer(e)
          this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === '' || t.loop === null || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !('autoplay' in t) || t.autoplay, this.name = t.name ? t.name : '', this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, 'autoloadSegments') || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf('\\') !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf('\\') + 1) : this.path = t.path.substr(0, t.path.lastIndexOf('/') + 1), this.fileName = t.path.substr(t.path.lastIndexOf('/') + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json')), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function () {
          this.trigger('data_failed')
        }, AnimationItem.prototype.setupAnimation = function (t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function (t, e) {
          e && _typeof$4(e) !== 'object' && (e = JSON.parse(e))
          const i = { wrapper: t, animationData: e }
          const s = t.attributes
          i.path = s.getNamedItem('data-animation-path') ? s.getNamedItem('data-animation-path').value : s.getNamedItem('data-bm-path') ? s.getNamedItem('data-bm-path').value : s.getNamedItem('bm-path') ? s.getNamedItem('bm-path').value : '', i.animType = s.getNamedItem('data-anim-type') ? s.getNamedItem('data-anim-type').value : s.getNamedItem('data-bm-type') ? s.getNamedItem('data-bm-type').value : s.getNamedItem('bm-type') ? s.getNamedItem('bm-type').value : s.getNamedItem('data-bm-renderer') ? s.getNamedItem('data-bm-renderer').value : s.getNamedItem('bm-renderer') ? s.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas'
          const r = s.getNamedItem('data-anim-loop') ? s.getNamedItem('data-anim-loop').value : s.getNamedItem('data-bm-loop') ? s.getNamedItem('data-bm-loop').value : s.getNamedItem('bm-loop') ? s.getNamedItem('bm-loop').value : ''
          r === 'false' ? i.loop = !1 : r === 'true' ? i.loop = !0 : r !== '' && (i.loop = parseInt(r, 10))
          const a = s.getNamedItem('data-anim-autoplay') ? s.getNamedItem('data-anim-autoplay').value : s.getNamedItem('data-bm-autoplay') ? s.getNamedItem('data-bm-autoplay').value : !s.getNamedItem('bm-autoplay') || s.getNamedItem('bm-autoplay').value
          i.autoplay = a !== 'false', i.name = s.getNamedItem('data-name') ? s.getNamedItem('data-name').value : s.getNamedItem('data-bm-name') ? s.getNamedItem('data-bm-name').value : s.getNamedItem('bm-name') ? s.getNamedItem('bm-name').value : '', (s.getNamedItem('data-anim-prerender') ? s.getNamedItem('data-anim-prerender').value : s.getNamedItem('data-bm-prerender') ? s.getNamedItem('data-bm-prerender').value : s.getNamedItem('bm-prerender') ? s.getNamedItem('bm-prerender').value : '') === 'false' && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger('destroy')
        }, AnimationItem.prototype.includeLayers = function (t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip))
          let e
          let i
          const s = this.animationData.layers
          let r = s.length
          const a = t.layers
          const n = a.length
          for (i = 0; i < n; i += 1) {
            for (e = 0; e < r;) {
              if (s[e].id === a[i].id) {
                s[e] = a[i]
                break
              }
              e += 1
            }
          }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e])
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function (t) {
          this.animationData = t
          const e = getExpressionsPlugin()
          e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function () {
          const t = this.animationData.segments
          if (!t || t.length === 0 || !this.autoloadSegments) return this.trigger('data_ready'), void (this.timeCompleted = this.totalFrames)
          const e = t.shift()
          this.timeCompleted = e.time * this.frameRate
          const i = this.path + this.fileName + '_' + this.segmentPos + '.json'
          this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function () {
            this.trigger('data_failed')
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function () {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function () {
          this.trigger('loaded_images'), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function () {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function (t) {
          if (this.renderer) {
            try {
              this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger('config_ready'), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (e) {
              this.triggerConfigError(e)
            }
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function () {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function () {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== 'canvas') && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0
            const t = getExpressionsPlugin()
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
              this.trigger('DOMLoaded')
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function (t, e) {
          const i = typeof t === 'number' ? t : void 0
          const s = typeof e === 'number' ? e : void 0
          this.renderer.updateContainerSize(i, s)
        }, AnimationItem.prototype.setSubframe = function (t) {
          this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function () {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger('enterFrame'), this.renderFrame(), this.trigger('drawnFrame')
        }, AnimationItem.prototype.renderFrame = function () {
          if (!1 !== this.isLoaded && this.renderer) {
            try {
              this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
              this.triggerRenderFrameError(t)
            }
          }
        }, AnimationItem.prototype.play = function (t) {
          t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger('_pause'), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger('_active')))
        }, AnimationItem.prototype.pause = function (t) {
          t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger('_play'), this._idle = !0, this.trigger('_idle'), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function (t) {
          t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function (t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function (t) {
          for (var e, i = 0; i < this.markers.length; i += 1) if ((e = this.markers[i]).payload && e.payload.name === t) return e
          return null
        }, AnimationItem.prototype.goToAndStop = function (t, e, i) {
          if (!i || this.name === i) {
            if (isNaN(Number(t))) {
              const s = this.getMarkerData(t)
              s && this.goToAndStop(s.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier)
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function (t, e, i) {
          if (!i || this.name === i) {
            const s = Number(t)
            if (isNaN(s)) {
              const r = this.getMarkerData(t)
              r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
            } else this.goToAndStop(s, e, i)
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function (t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            let e = this.currentRawFrame + t * this.frameModifier
            let i = !1
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger('loopComplete'))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger('loopComplete') : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger('complete'))
          }
        }, AnimationItem.prototype.adjustSegment = function (t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(0.001 + e)), this.trigger('segmentStart')
        }, AnimationItem.prototype.setSegment = function (t, e) {
          let i = -1
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, !0)
        }, AnimationItem.prototype.playSegments = function (t, e) {
          if (e && (this.segments.length = 0), _typeof$4(t[0]) === 'object') {
            let i
            const s = t.length
            for (i = 0; i < s; i += 1) this.segments.push(t[i])
          } else this.segments.push(t)
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function (t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function (t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function (t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger('destroy'), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
          this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function (t) {
          this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function (t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function (t) {
          this.loop = t
        }, AnimationItem.prototype.setVolume = function (t, e) {
          e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function () {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function (t) {
          t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function (t) {
          t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function () {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function () {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function (t) {
          let e = ''
          if (t.e) e = t.p; else if (this.assetsPath) {
            let i = t.p
            i.indexOf('images/') !== -1 && (i = i.split('/')[1]), e = this.assetsPath + i
          } else e = this.path, e += t.u ? t.u : '', e += t.p
          return e
        }, AnimationItem.prototype.getAssetData = function (t) {
          for (let e = 0, i = this.assets.length; e < i;) {
            if (t === this.assets[e].id) return this.assets[e]
            e += 1
          }
          return null
        }, AnimationItem.prototype.hide = function () {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function () {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function (t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function (t, e, i) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, i)
          } catch (s) {
          }
        }, AnimationItem.prototype.trigger = function (t) {
          if (this._cbs && this._cbs[t]) {
            switch (t) {
              case 'enterFrame':
                this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier))
                break
              case 'drawnFrame':
                this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent)
                break
              case 'loopComplete':
                this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult))
                break
              case 'complete':
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult))
                break
              case 'segmentStart':
                this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames))
                break
              case 'destroy':
                this.triggerEvent(t, new BMDestroyEvent(t, this))
                break
              default:
                this.triggerEvent(t)
            }
          }
          t === 'enterFrame' && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === 'loopComplete' && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === 'complete' && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === 'segmentStart' && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === 'destroy' && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function (t) {
          const e = new BMRenderFrameErrorEvent(t, this.currentFrame)
          this.triggerEvent('error', e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function (t) {
          const e = new BMConfigErrorEvent(t, this.currentFrame)
          this.triggerEvent('error', e), this.onError && this.onError.call(this, e)
        }
        const animationManager = (function () {
          const t = {}
          const e = []
          let i = 0
          let s = 0
          let r = 0
          let a = !0
          let n = !1

          function o (t) {
            for (let i = 0, r = t.target; i < s;) e[i].animation === r && (e.splice(i, 1), i -= 1, s -= 1, r.isPaused || p()), i += 1
          }

          function h (t, i) {
            if (!t) return null
            for (let r = 0; r < s;) {
              if (e[r].elem === t && e[r].elem !== null) return e[r].animation
              r += 1
            }
            const a = new AnimationItem()
            return f(a, t), a.setData(t, i), a
          }

          function l () {
            r += 1, m()
          }

          function p () {
            r -= 1
          }

          function f (t, i) {
            t.addEventListener('destroy', o), t.addEventListener('_active', l), t.addEventListener('_idle', p), e.push({
              elem: i,
              animation: t
            }), s += 1
          }

          function c (t) {
            let o
            const h = t - i
            for (o = 0; o < s; o += 1) e[o].animation.advanceTime(h)
            i = t, r && !n ? window.requestAnimationFrame(c) : a = !0
          }

          function u (t) {
            i = t, window.requestAnimationFrame(c)
          }

          function m () {
            !n && r && a && (window.requestAnimationFrame(u), a = !1)
          }

          return t.registerAnimation = h, t.loadAnimation = function (t) {
            const e = new AnimationItem()
            return f(e, null), e.setParams(t), e
          }, t.setSpeed = function (t, i) {
            let r
            for (r = 0; r < s; r += 1) e[r].animation.setSpeed(t, i)
          }, t.setDirection = function (t, i) {
            let r
            for (r = 0; r < s; r += 1) e[r].animation.setDirection(t, i)
          }, t.play = function (t) {
            let i
            for (i = 0; i < s; i += 1) e[i].animation.play(t)
          }, t.pause = function (t) {
            let i
            for (i = 0; i < s; i += 1) e[i].animation.pause(t)
          }, t.stop = function (t) {
            let i
            for (i = 0; i < s; i += 1) e[i].animation.stop(t)
          }, t.togglePause = function (t) {
            let i
            for (i = 0; i < s; i += 1) e[i].animation.togglePause(t)
          }, t.searchAnimations = function (t, e, i) {
            let s
            const r = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin')))
            const a = r.length
            for (s = 0; s < a; s += 1) i && r[s].setAttribute('data-bm-type', i), h(r[s], t)
            if (e && a === 0) {
              i || (i = 'svg')
              const n = document.getElementsByTagName('body')[0]
              n.innerText = ''
              const o = createTag('div')
              o.style.width = '100%', o.style.height = '100%', o.setAttribute('data-bm-type', i), n.appendChild(o), h(o, t)
            }
          }, t.resize = function () {
            let t
            for (t = 0; t < s; t += 1) e[t].animation.resize()
          }, t.goToAndStop = function (t, i, r) {
            let a
            for (a = 0; a < s; a += 1) e[a].animation.goToAndStop(t, i, r)
          }, t.destroy = function (t) {
            let i
            for (i = s - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
          }, t.freeze = function () {
            n = !0
          }, t.unfreeze = function () {
            n = !1, m()
          }, t.setVolume = function (t, i) {
            let r
            for (r = 0; r < s; r += 1) e[r].animation.setVolume(t, i)
          }, t.mute = function (t) {
            let i
            for (i = 0; i < s; i += 1) e[i].animation.mute(t)
          }, t.unmute = function (t) {
            let i
            for (i = 0; i < s; i += 1) e[i].animation.unmute(t)
          }, t.getRegisteredAnimations = function () {
            let t
            const i = e.length
            const s = []
            for (t = 0; t < i; t += 1) s.push(e[t].animation)
            return s
          }, t
        }())
        const BezierFactory = (function () {
          const t = {
            getBezierEasing: function (t, i, s, r, a) {
              const n = a || ('bez_' + t + '_' + i + '_' + s + '_' + r).replace(/\./g, 'p')
              if (e[n]) return e[n]
              const o = new p([t, i, s, r])
              return e[n] = o, o
            }
          }
          var e = {}
          const i = 11
          const s = 1 / (i - 1)
          const r = typeof Float32Array === 'function'

          function a (t, e) {
            return 1 - 3 * e + 3 * t
          }

          function n (t, e) {
            return 3 * e - 6 * t
          }

          function o (t) {
            return 3 * t
          }

          function h (t, e, i) {
            return ((a(e, i) * t + n(e, i)) * t + o(e)) * t
          }

          function l (t, e, i) {
            return 3 * a(e, i) * t * t + 2 * n(e, i) * t + o(e)
          }

          function p (t) {
            this._p = t, this._mSampleValues = r ? new Float32Array(i) : Array(i), this._precomputed = !1, this.get = this.get.bind(this)
          }

          return p.prototype = {
            get: function (t) {
              const e = this._p[0]
              const i = this._p[1]
              const s = this._p[2]
              const r = this._p[3]
              return this._precomputed || this._precompute(), e === i && s === r ? t : t === 0 ? 0 : t === 1 ? 1 : h(this._getTForX(t), i, r)
            },
            _precompute: function () {
              const t = this._p[0]
              const e = this._p[1]
              const i = this._p[2]
              const s = this._p[3]
              this._precomputed = !0, t === e && i === s || this._calcSampleValues()
            },
            _calcSampleValues: function () {
              for (let t = this._p[0], e = this._p[2], r = 0; r < i; ++r) this._mSampleValues[r] = h(r * s, t, e)
            },
            _getTForX: function (t) {
              for (var e = this._p[0], r = this._p[2], a = this._mSampleValues, n = 0, o = 1, p = i - 1; o !== p && a[o] <= t; ++o) n += s
              const f = n + (t - a[--o]) / (a[o + 1] - a[o]) * s
              const c = l(f, e, r)
              return c >= 0.001
                ? (function (t, e, i, s) {
                    for (let r = 0; r < 4; ++r) {
                      const a = l(e, i, s)
                      if (a === 0) break
                      e -= (h(e, i, s) - t) / a
                    }
                    return e
                  }(t, f, e, r))
                : c === 0
                  ? f
                  : (function (t, e, i, s, r) {
                      let a
                      let n
                      let o = 0
                      do (a = h(n = e + (i - e) / 2, s, r) - t) > 0 ? i = n : e = n; while (Math.abs(a) > 1e-7 && ++o < 10)
                      return n
                    }(t, n, n + s, e, r))
            }
          }, t
        }())
        const pooling = {
          double: function (t) {
            return t.concat(createSizedArray(t.length))
          }
        }
        const poolFactory = function (t, e, i) {
          let s = 0
          let r = t
          let a = createSizedArray(r)
          return {
            newElement: function () {
              return s ? a[s -= 1] : e()
            },
            release: function (t) {
              s === r && (a = pooling.double(a), r *= 2), i && i(t), a[s] = t, s += 1
            }
          }
        }
        const bezierLengthPool = poolFactory(8, function () {
          return {
            addedLength: 0,
            percents: createTypedArray('float32', getDefaultCurveSegments()),
            lengths: createTypedArray('float32', getDefaultCurveSegments())
          }
        })
        const segmentsLengthPool = poolFactory(8, function () {
          return { lengths: [], totalLength: 0 }
        }, function (t) {
          let e
          const i = t.lengths.length
          for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e])
          t.lengths.length = 0
        })

        function bezFunction () {
          const t = Math

          function e (t, e, i, s, r, a) {
            const n = t * s + e * r + i * a - r * s - a * t - i * e
            return n > -0.001 && n < 0.001
          }

          const i = function (t, e, i, s) {
            let r
            let a
            let n
            let o
            let h
            let l
            const p = getDefaultCurveSegments()
            let f = 0
            const c = []
            const u = []
            const m = bezierLengthPool.newElement()
            for (n = i.length, r = 0; r < p; r += 1) {
              for (h = r / (p - 1), l = 0, a = 0; a < n; a += 1) o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bmPow(h, 2) * s[a] + bmPow(h, 3) * e[a], c[a] = o, u[a] !== null && (l += bmPow(c[a] - u[a], 2)), u[a] = c[a]
              l && (f += l = bmSqrt(l)), m.percents[r] = h, m.lengths[r] = f
            }
            return m.addedLength = f, m
          }

          function s (t) {
            this.segmentLength = 0, this.points = Array(t)
          }

          function r (t, e) {
            this.partialLength = t, this.point = e
          }

          let a
          const n = (a = {}, function (t, i, n, o) {
            const h = (t[0] + '_' + t[1] + '_' + i[0] + '_' + i[1] + '_' + n[0] + '_' + n[1] + '_' + o[0] + '_' + o[1]).replace(/\./g, 'p')
            if (!a[h]) {
              let l
              let p
              let f
              let c
              let u
              let m
              let d
              let $ = getDefaultCurveSegments()
              let g = 0
              let _ = null
              t.length === 2 && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && ($ = 2)
              const v = new s($)
              for (f = n.length, l = 0; l < $; l += 1) {
                for (d = createSizedArray(f), u = l / ($ - 1), m = 0, p = 0; p < f; p += 1) c = bmPow(1 - u, 3) * t[p] + 3 * bmPow(1 - u, 2) * u * (t[p] + n[p]) + 3 * (1 - u) * bmPow(u, 2) * (i[p] + o[p]) + bmPow(u, 3) * i[p], d[p] = c, _ !== null && (m += bmPow(d[p] - _[p], 2))
                g += m = bmSqrt(m), v.points[l] = new r(m, d), _ = d
              }
              v.segmentLength = g, a[h] = v
            }
            return a[h]
          })

          function o (t, e) {
            const i = e.percents
            const s = e.lengths
            const r = i.length
            let a = bmFloor((r - 1) * t)
            const n = t * e.addedLength
            let o = 0
            if (a === r - 1 || a === 0 || n === s[a]) return i[a]
            for (let h = s[a] > n ? -1 : 1, l = !0; l;) {
              if (s[a] <= n && s[a + 1] > n ? (o = (n - s[a]) / (s[a + 1] - s[a]), l = !1) : a += h, a < 0 || a >= r - 1) {
                if (a === r - 1) return i[a]
                l = !1
              }
            }
            return i[a] + (i[a + 1] - i[a]) * o
          }

          const h = createTypedArray('float32', 8)
          return {
            getSegmentsLength: function (t) {
              let e
              const s = segmentsLengthPool.newElement()
              const r = t.c
              const a = t.v
              const n = t.o
              const o = t.i
              const h = t._length
              const l = s.lengths
              let p = 0
              for (e = 0; e < h - 1; e += 1) l[e] = i(a[e], a[e + 1], n[e], o[e + 1]), p += l[e].addedLength
              return r && h && (l[e] = i(a[e], a[0], n[e], o[0]), p += l[e].addedLength), s.totalLength = p, s
            },
            getNewSegment: function (e, i, s, r, a, n, l) {
              a < 0 ? a = 0 : a > 1 && (a = 1)
              let p
              const f = o(a, l)
              const c = o(n = n > 1 ? 1 : n, l)
              const u = e.length
              const m = 1 - f
              const d = 1 - c
              const $ = m * m * m
              const g = f * m * m * 3
              const _ = f * f * m * 3
              const v = f * f * f
              const y = m * m * d
              const b = f * m * d + m * f * d + m * m * c
              const x = f * f * d + m * f * c + f * m * c
              const k = f * f * c
              const w = m * d * d
              const A = f * d * d + m * c * d + m * d * c
              const P = f * c * d + m * c * c + f * d * c
              const C = f * c * c
              const E = d * d * d
              const D = c * d * d + d * c * d + d * d * c
              const S = c * c * d + d * c * c + c * d * c
              const T = c * c * c
              for (p = 0; p < u; p += 1) h[4 * p] = t.round(1e3 * ($ * e[p] + g * s[p] + _ * r[p] + v * i[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (y * e[p] + b * s[p] + x * r[p] + k * i[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (w * e[p] + A * s[p] + P * r[p] + C * i[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (E * e[p] + D * s[p] + S * r[p] + T * i[p])) / 1e3
              return h
            },
            getPointInSegment: function (e, i, s, r, a, n) {
              const h = o(a, n)
              const l = 1 - h
              return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * s[0] + (h * h * l + l * h * h + h * l * h) * r[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * s[1] + (h * h * l + l * h * h + h * l * h) * r[1] + h * h * h * i[1])) / 1e3]
            },
            buildBezierData: n,
            pointOnLine2D: e,
            pointOnLine3D: function (i, s, r, a, n, o, h, l, p) {
              if (r === 0 && o === 0 && p === 0) return e(i, s, a, n, h, l)
              let f
              const c = t.sqrt(t.pow(a - i, 2) + t.pow(n - s, 2) + t.pow(o - r, 2))
              const u = t.sqrt(t.pow(h - i, 2) + t.pow(l - s, 2) + t.pow(p - r, 2))
              const m = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2))
              return (f = c > u ? c > m ? c - u - m : m - u - c : m > u ? m - u - c : u - c - m) > -0.0001 && f < 1e-4
            }
          }
        }

        const bez = bezFunction()
        const initFrame = initialDefaultFrame
        const mathAbs = Math.abs

        function interpolateValue (t, e) {
          let i
          let s
          let r
          let a
          let n
          let o
          const h = this.offsetTime
          this.propType === 'multidimensional' && (o = createTypedArray('float32', this.pv.length))
          for (var l, p, f, c, u, m, d, $, g, _ = e.lastIndex, v = _, y = this.keyframes.length - 1, b = !0; b;) {
            if (l = this.keyframes[v], p = this.keyframes[v + 1], v === y - 1 && t >= p.t - h) {
              l.h && (l = p), _ = 0
              break
            }
            if (p.t - h > t) {
              _ = v
              break
            }
            v < y - 1 ? v += 1 : (_ = 0, b = !1)
          }
          f = this.keyframesMetadata[v] || {}
          let x
          const k = p.t - h
          const w = l.t - h
          if (l.to) {
            f.bezierData || (f.bezierData = bez.buildBezierData(l.s, p.s || l.e, l.to, l.ti))
            const A = f.bezierData
            if (t >= k || t < w) {
              const P = t >= k ? A.points.length - 1 : 0
              for (u = A.points[P].point.length, c = 0; c < u; c += 1) o[c] = A.points[P].point[c]
            } else {
              f.__fnct ? g = f.__fnct : (g = BezierFactory.getBezierEasing(l.o.x, l.o.y, l.i.x, l.i.y, l.n).get, f.__fnct = g), m = g((t - w) / (k - w))
              let C
              const E = A.segmentLength * m
              let D = e.lastFrame < t && e._lastKeyframeIndex === v ? e._lastAddedLength : 0
              for ($ = e.lastFrame < t && e._lastKeyframeIndex === v ? e._lastPoint : 0, b = !0, d = A.points.length; b;) {
                if (D += A.points[$].partialLength, E === 0 || m === 0 || $ === A.points.length - 1) {
                  for (u = A.points[$].point.length, c = 0; c < u; c += 1) o[c] = A.points[$].point[c]
                  break
                }
                if (E >= D && E < D + A.points[$ + 1].partialLength) {
                  for (C = (E - D) / A.points[$ + 1].partialLength, u = A.points[$].point.length, c = 0; c < u; c += 1) o[c] = A.points[$].point[c] + (A.points[$ + 1].point[c] - A.points[$].point[c]) * C
                  break
                }
                $ < d - 1 ? $ += 1 : b = !1
              }
              e._lastPoint = $, e._lastAddedLength = D - A.points[$].partialLength, e._lastKeyframeIndex = v
            }
          } else if (y = l.s.length, x = p.s || l.e, this.sh && l.h !== 1) t >= k ? (o[0] = x[0], o[1] = x[1], o[2] = x[2]) : t <= w ? (o[0] = l.s[0], o[1] = l.s[1], o[2] = l.s[2]) : quaternionToEuler(o, slerp(createQuaternion(l.s), createQuaternion(x), (t - w) / (k - w))); else for (v = 0; v < y; v += 1) l.h !== 1 && (t >= k ? m = 1 : t < w ? m = 0 : (l.o.x.constructor === Array ? (f.__fnct || (f.__fnct = []), f.__fnct[v] ? g = f.__fnct[v] : (i = void 0 === l.o.x[v] ? l.o.x[0] : l.o.x[v], s = void 0 === l.o.y[v] ? l.o.y[0] : l.o.y[v], r = void 0 === l.i.x[v] ? l.i.x[0] : l.i.x[v], a = void 0 === l.i.y[v] ? l.i.y[0] : l.i.y[v], g = BezierFactory.getBezierEasing(i, s, r, a).get, f.__fnct[v] = g)) : f.__fnct ? g = f.__fnct : (i = l.o.x, s = l.o.y, r = l.i.x, a = l.i.y, g = BezierFactory.getBezierEasing(i, s, r, a).get, l.keyframeMetadata = g), m = g((t - w) / (k - w)))), x = p.s || l.e, n = l.h === 1 ? l.s[v] : l.s[v] + (x[v] - l.s[v]) * m, this.propType === 'multidimensional' ? o[v] = n : o = n
          return e.lastIndex = _, o
        }

        function slerp (t, e, i) {
          let s
          let r
          let a
          let n
          let o
          const h = []
          const l = t[0]
          const p = t[1]
          const f = t[2]
          const c = t[3]
          let u = e[0]
          let m = e[1]
          let d = e[2]
          let $ = e[3]
          return (r = l * u + p * m + f * d + c * $) < 0 && (r = -r, u = -u, m = -m, d = -d, $ = -$), 1 - r > 1e-6 ? (n = Math.sin((1 - i) * s) / (a = Math.sin(s = Math.acos(r))), o = Math.sin(i * s) / a) : (n = 1 - i, o = i), h[0] = n * l + o * u, h[1] = n * p + o * m, h[2] = n * f + o * d, h[3] = n * c + o * $, h
        }

        function quaternionToEuler (t, e) {
          const i = e[0]
          const s = e[1]
          const r = e[2]
          const a = e[3]
          const n = Math.atan2(2 * s * a - 2 * i * r, 1 - 2 * s * s - 2 * r * r)
          const o = Math.asin(2 * i * s + 2 * r * a)
          const h = Math.atan2(2 * i * a - 2 * s * r, 1 - 2 * i * i - 2 * r * r)
          t[0] = n / degToRads, t[1] = o / degToRads, t[2] = h / degToRads
        }

        function createQuaternion (t) {
          const e = t[0] * degToRads
          const i = t[1] * degToRads
          const s = t[2] * degToRads
          const r = Math.cos(e / 2)
          const a = Math.cos(i / 2)
          const n = Math.cos(s / 2)
          const o = Math.sin(e / 2)
          const h = Math.sin(i / 2)
          const l = Math.sin(s / 2)
          return [o * h * n + r * a * l, o * a * n + r * h * l, r * h * n - o * a * l, r * a * n - o * h * l]
        }

        function getValueAtCurrentTime () {
          const t = this.comp.renderedFrame - this.offsetTime
          const e = this.keyframes[0].t - this.offsetTime
          const i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0)
            const s = this.interpolateValue(t, this._caching)
            this.pv = s
          }
          return this._caching.lastFrame = t, this.pv
        }

        function setVValue (t) {
          let e
          if (this.propType === 'unidimensional') e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0); else for (let i = 0, s = this.v.length; i < s;) e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
        }

        function processEffectsSequence () {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
            if (this.lock) this.setVValue(this.pv); else {
              this.lock = !0, this._mdf = this._isFirstFrame
              let t
              const e = this.effectsSequence.length
              let i = this.kf ? this.pv : this.data.k
              for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i)
              this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }

        function addEffect (t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty (t, e, i, s) {
          this.propType = 'unidimensional', this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty (t, e, i, s) {
          this.propType = 'multidimensional', this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1
          let r
          const a = e.k.length
          for (this.v = createTypedArray('float32', a), this.pv = createTypedArray('float32', a), this.vel = createTypedArray('float32', a), r = 0; r < a; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r]
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty (t, e, i, s) {
          this.propType = 'unidimensional', this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty (t, e, i, s) {
          this.propType = 'multidimensional'
          let r
          let a
          let n
          let o
          let h
          const l = e.k.length
          for (r = 0; r < l - 1; r += 1) e.k[r].to && e.k[r].s && e.k[r + 1] && e.k[r + 1].s && (a = e.k[r].s, n = e.k[r + 1].s, o = e.k[r].to, h = e.k[r].ti, (a.length === 2 && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || a.length === 3 && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[r].to = null, e.k[r].ti = null), a[0] === n[0] && a[1] === n[1] && o[0] === 0 && o[1] === 0 && h[0] === 0 && h[1] === 0 && (a.length === 2 || a[2] === n[2] && o[2] === 0 && h[2] === 0) && (e.k[r].to = null, e.k[r].ti = null))
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1
          const p = e.k[0].s.length
          for (this.v = createTypedArray('float32', p), this.pv = createTypedArray('float32', p), r = 0; r < p; r += 1) this.v[r] = initFrame, this.pv[r] = initFrame
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray('float32', p)
          }, this.addEffect = addEffect
        }

        const PropertyFactory = {
          getProp: function (t, e, i, s, r) {
            let a
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length) {
              if (typeof e.k[0] === 'number') a = new MultiDimensionalProperty(t, e, s, r); else {
                switch (i) {
                  case 0:
                    a = new KeyframedValueProperty(t, e, s, r)
                    break
                  case 1:
                    a = new KeyframedMultidimensionalProperty(t, e, s, r)
                }
              }
            } else a = new ValueProperty(t, e, s, r)
            return a.effectsSequence.length && r.addDynamicProperty(a), a
          }
        }

        function DynamicPropertyContainer () {
        }

        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function (t) {
            this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function () {
            this._mdf = !1
            let t
            const e = this.dynamicProperties.length
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function (t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        }
        const pointPool = poolFactory(8, function () {
          return createTypedArray('float32', 2)
        })

        function ShapePath () {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }

        ShapePath.prototype.setPathData = function (t, e) {
          this.c = t, this.setLength(e)
          for (let i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
        }, ShapePath.prototype.setLength = function (t) {
          for (; this._maxLength < t;) this.doubleArrayLength()
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function () {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function (t, e, i, s, r) {
          let a
          switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
            case 'v':
              a = this.v
              break
            case 'i':
              a = this.i
              break
            case 'o':
              a = this.o
              break
            default:
              a = []
          }
          a[s] && (!a[s] || r) || (a[s] = pointPool.newElement()), a[s][0] = t, a[s][1] = e
        }, ShapePath.prototype.setTripleAt = function (t, e, i, s, r, a, n, o) {
          this.setXYAt(t, e, 'v', n, o), this.setXYAt(i, s, 'o', n, o), this.setXYAt(r, a, 'i', n, o)
        }, ShapePath.prototype.reverse = function () {
          const t = new ShapePath()
          t.setPathData(this.c, this._length)
          const e = this.v
          const i = this.o
          const s = this.i
          let r = 0
          this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), r = 1)
          let a
          let n = this._length - 1
          const o = this._length
          for (a = r; a < o; a += 1) t.setTripleAt(e[n][0], e[n][1], s[n][0], s[n][1], i[n][0], i[n][1], a, !1), n -= 1
          return t
        }, ShapePath.prototype.length = function () {
          return this._length
        }
        let factory
        const shapePool = ((factory = poolFactory(4, function () {
          return new ShapePath()
        }, function (t) {
          let e
          const i = t._length
          for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null
          t._length = 0, t.c = !1
        })).clone = function (t) {
          let e
          const i = factory.newElement()
          const s = void 0 === t._length ? t.v.length : t._length
          for (i.setLength(s), i.c = t.c, e = 0; e < s; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e)
          return i
        }, factory)

        function ShapeCollection () {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }

        ShapeCollection.prototype.addShape = function (t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function () {
          let t
          for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t])
          this._length = 0
        }
        let ob
        let _length
        let _maxLength
        let pool
        const shapeCollectionPool = (ob = {
          newShapeCollection: function () {
            return _length ? pool[_length -= 1] : new ShapeCollection()
          },
          release: function (t) {
            let e
            const i = t._length
            for (e = 0; e < i; e += 1) shapePool.release(t.shapes[e])
            t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
          }
        }, _length = 0, pool = createSizedArray(_maxLength = 4), ob)
        const ShapePropertyFactory = (function () {
          const t = -999999

          function e (t, e, i) {
            let s
            let r
            let a
            let n
            let o
            let h
            let l
            let p
            let f
            let c = i.lastIndex
            const u = this.keyframes
            if (t < u[0].t - this.offsetTime) s = u[0].s[0], a = !0, c = 0; else if (t >= u[u.length - 1].t - this.offsetTime) s = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], a = !0; else {
              for (var m, d, $, g, _ = c, v = u.length - 1, y = !0; y && (d = u[_], !(($ = u[_ + 1]).t - this.offsetTime > t));) _ < v - 1 ? _ += 1 : y = !1
              g = this.keyframesMetadata[_] || {}, c = _, (a = d.h === 1) || (t >= $.t - this.offsetTime ? p = 1 : t < d.t - this.offsetTime ? p = 0 : (g.__fnct ? m = g.__fnct : (m = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, g.__fnct = m), p = m((t - (d.t - this.offsetTime)) / ($.t - this.offsetTime - (d.t - this.offsetTime)))), r = $.s ? $.s[0] : d.e[0]), s = d.s[0]
            }
            for (h = e._length, l = s.i[0].length, i.lastIndex = c, n = 0; n < h; n += 1) for (o = 0; o < l; o += 1) f = a ? s.i[n][o] : s.i[n][o] + (r.i[n][o] - s.i[n][o]) * p, e.i[n][o] = f, f = a ? s.o[n][o] : s.o[n][o] + (r.o[n][o] - s.o[n][o]) * p, e.o[n][o] = f, f = a ? s.v[n][o] : s.v[n][o] + (r.v[n][o] - s.v[n][o]) * p, e.v[n][o] = f
          }

          function i () {
            const e = this.comp.renderedFrame - this.offsetTime
            const i = this.keyframes[0].t - this.offsetTime
            const s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
            const r = this._caching.lastFrame
            return r !== t && (r < i && e < i || r > s && e > s) || (this._caching.lastIndex = r < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
          }

          function s () {
            this.paths = this.localShapeCollection
          }

          function r (t) {
            (function (t, e) {
              if (t._length !== e._length || t.c !== e.c) return !1
              let i
              const s = t._length
              for (i = 0; i < s; i += 1) if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1
              return !0
            })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
          }

          function a () {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (this.effectsSequence.length) {
                if (this.lock) this.setVValue(this.pv); else {
                  this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k
                  let t
                  let e
                  const i = this.effectsSequence.length
                  for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t)
                  this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
              } else this._mdf = !1
            }
          }

          function n (t, e, i) {
            this.propType = 'shape', this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1
            const r = i === 3 ? e.pt.k : e.ks.k
            this.v = shapePool.clone(r), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
          }

          function o (t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
          }

          function h (e, r, a) {
            this.propType = 'shape', this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = a === 3 ? r.pt.k : r.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0
            const n = this.keyframes[0].s[0].i.length
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = {
              lastFrame: t,
              lastIndex: 0
            }, this.effectsSequence = [i.bind(this)]
          }

          n.prototype.interpolateShape = e, n.prototype.getValue = a, n.prototype.setVValue = r, n.prototype.addEffect = o, h.prototype.getValue = a, h.prototype.interpolateShape = e, h.prototype.setVValue = r, h.prototype.addEffect = o
          const l = (function () {
            const t = roundCorner

            function e (t, e) {
              this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
            }

            return e.prototype = {
              reset: s,
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
              },
              convertEllToPath: function () {
                const e = this.p.v[0]
                const i = this.p.v[1]
                const s = this.s.v[0] / 2
                const r = this.s.v[1] / 2
                const a = this.d !== 3
                const n = this.v
                n.v[0][0] = e, n.v[0][1] = i - r, n.v[1][0] = a ? e + s : e - s, n.v[1][1] = i, n.v[2][0] = e, n.v[2][1] = i + r, n.v[3][0] = a ? e - s : e + s, n.v[3][1] = i, n.i[0][0] = a ? e - s * t : e + s * t, n.i[0][1] = i - r, n.i[1][0] = a ? e + s : e - s, n.i[1][1] = i - r * t, n.i[2][0] = a ? e + s * t : e - s * t, n.i[2][1] = i + r, n.i[3][0] = a ? e - s : e + s, n.i[3][1] = i + r * t, n.o[0][0] = a ? e + s * t : e - s * t, n.o[0][1] = i - r, n.o[1][0] = a ? e + s : e - s, n.o[1][1] = i + r * t, n.o[2][0] = a ? e - s * t : e + s * t, n.o[2][1] = i + r, n.o[3][0] = a ? e - s : e + s, n.o[3][1] = i - r * t
              }
            }, extendPrototype([DynamicPropertyContainer], e), e
          }())
          const p = (function () {
            function t (t, e) {
              this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), e.sy === 1 ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
            }

            return t.prototype = {
              reset: s,
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
              },
              convertStarToPath: function () {
                let t
                let e
                let i
                let s
                const r = 2 * Math.floor(this.pt.v)
                const a = 2 * Math.PI / r
                let n = !0
                const o = this.or.v
                const h = this.ir.v
                const l = this.os.v
                const p = this.is.v
                const f = 2 * Math.PI * o / (2 * r)
                const c = 2 * Math.PI * h / (2 * r)
                let u = -Math.PI / 2
                u += this.r.v
                const m = this.data.d === 3 ? -1 : 1
                for (this.v._length = 0, t = 0; t < r; t += 1) {
                  i = n ? l : p, s = n ? f : c
                  let d = (e = n ? o : h) * Math.cos(u)
                  let $ = e * Math.sin(u)
                  const g = d === 0 && $ === 0 ? 0 : $ / Math.sqrt(d * d + $ * $)
                  const _ = d === 0 && $ === 0 ? 0 : -d / Math.sqrt(d * d + $ * $)
                  d += +this.p.v[0], $ += +this.p.v[1], this.v.setTripleAt(d, $, d - g * s * i * m, $ - _ * s * i * m, d + g * s * i * m, $ + _ * s * i * m, t, !0), n = !n, u += a * m
                }
              },
              convertPolygonToPath: function () {
                let t
                const e = Math.floor(this.pt.v)
                const i = 2 * Math.PI / e
                const s = this.or.v
                const r = this.os.v
                const a = 2 * Math.PI * s / (4 * e)
                let n = -(0.5 * Math.PI)
                const o = this.data.d === 3 ? -1 : 1
                for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                  let h = s * Math.cos(n)
                  let l = s * Math.sin(n)
                  const p = h === 0 && l === 0 ? 0 : l / Math.sqrt(h * h + l * l)
                  const f = h === 0 && l === 0 ? 0 : -h / Math.sqrt(h * h + l * l)
                  h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * r * o, l - f * a * r * o, h + p * a * r * o, l + f * a * r * o, t, !0), n += i * o
                }
                this.paths.length = 0, this.paths[0] = this.v
              }
            }, extendPrototype([DynamicPropertyContainer], t), t
          }())
          const f = (function () {
            function t (t, e) {
              this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
            }

            return t.prototype = {
              convertRectToPath: function () {
                const t = this.p.v[0]
                const e = this.p.v[1]
                const i = this.s.v[0] / 2
                const s = this.s.v[1] / 2
                const r = bmMin(i, s, this.r.v)
                const a = r * (1 - roundCorner)
                this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + r, t + i, e - s + a, 0, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - a, t + i, e + s - r, 1, !0), r !== 0 ? (this.v.setTripleAt(t + i - r, e + s, t + i - r, e + s, t + i - a, e + s, 2, !0), this.v.setTripleAt(t - i + r, e + s, t - i + a, e + s, t - i + r, e + s, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - r, t - i, e + s - a, 4, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + a, t - i, e - s + r, 5, !0), this.v.setTripleAt(t - i + r, e - s, t - i + r, e - s, t - i + a, e - s, 6, !0), this.v.setTripleAt(t + i - r, e - s, t + i - a, e - s, t + i - r, e - s, 7, !0)) : (this.v.setTripleAt(t - i, e + s, t - i + a, e + s, t - i, e + s, 2), this.v.setTripleAt(t - i, e - s, t - i, e - s + a, t - i, e - s, 3))) : (this.v.setTripleAt(t + i, e - s + r, t + i, e - s + a, t + i, e - s + r, 0, !0), r !== 0 ? (this.v.setTripleAt(t + i - r, e - s, t + i - r, e - s, t + i - a, e - s, 1, !0), this.v.setTripleAt(t - i + r, e - s, t - i + a, e - s, t - i + r, e - s, 2, !0), this.v.setTripleAt(t - i, e - s + r, t - i, e - s + r, t - i, e - s + a, 3, !0), this.v.setTripleAt(t - i, e + s - r, t - i, e + s - a, t - i, e + s - r, 4, !0), this.v.setTripleAt(t - i + r, e + s, t - i + r, e + s, t - i + a, e + s, 5, !0), this.v.setTripleAt(t + i - r, e + s, t + i - a, e + s, t + i - r, e + s, 6, !0), this.v.setTripleAt(t + i, e + s - r, t + i, e + s - r, t + i, e + s - a, 7, !0)) : (this.v.setTripleAt(t - i, e - s, t - i + a, e - s, t - i, e - s, 1, !0), this.v.setTripleAt(t - i, e + s, t - i, e + s - a, t - i, e + s, 2, !0), this.v.setTripleAt(t + i, e + s, t + i - a, e + s, t + i, e + s, 3, !0)))
              },
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
              },
              reset: s
            }, extendPrototype([DynamicPropertyContainer], t), t
          }())
          return {
            getShapeProp: function (t, e, i) {
              let s
              return i === 3 || i === 4 ? s = (i === 3 ? e.pt : e.ks).k.length ? new h(t, e, i) : new n(t, e, i) : i === 5 ? s = new f(t, e) : i === 6 ? s = new l(t, e) : i === 7 && (s = new p(t, e)), s.k && t.addDynamicProperty(s), s
            },
            getConstructorFunction: function () {
              return n
            },
            getKeyframedConstructorFunction: function () {
              return h
            }
          }
        }())
        var Matrix = (function () {
          const t = Math.cos
          const e = Math.sin
          const i = Math.tan
          const s = Math.round

          function r () {
            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
          }

          function a (i) {
            if (i === 0) return this
            const s = t(i)
            const r = e(i)
            return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function n (i) {
            if (i === 0) return this
            const s = t(i)
            const r = e(i)
            return this._t(1, 0, 0, 0, 0, s, -r, 0, 0, r, s, 0, 0, 0, 0, 1)
          }

          function o (i) {
            if (i === 0) return this
            const s = t(i)
            const r = e(i)
            return this._t(s, 0, r, 0, 0, 1, 0, 0, -r, 0, s, 0, 0, 0, 0, 1)
          }

          function h (i) {
            if (i === 0) return this
            const s = t(i)
            const r = e(i)
            return this._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function l (t, e) {
            return this._t(1, e, t, 1, 0, 0)
          }

          function p (t, e) {
            return this.shear(i(t), i(e))
          }

          function f (s, r) {
            const a = t(r)
            const n = e(r)
            return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(s), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          }

          function c (t, e, i) {
            return i || i === 0 || (i = 1), t === 1 && e === 1 && i === 1 ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
          }

          function u (t, e, i, s, r, a, n, o, h, l, p, f, c, u, m, d) {
            return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = s, this.props[4] = r, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = u, this.props[14] = m, this.props[15] = d, this
          }

          function m (t, e, i) {
            return i = i || 0, t !== 0 || e !== 0 || i !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
          }

          function d (t, e, i, s, r, a, n, o, h, l, p, f, c, u, m, d) {
            const $ = this.props
            if (t === 1 && e === 0 && i === 0 && s === 0 && r === 0 && a === 1 && n === 0 && o === 0 && h === 0 && l === 0 && p === 1 && f === 0) return $[12] = $[12] * t + $[15] * c, $[13] = $[13] * a + $[15] * u, $[14] = $[14] * p + $[15] * m, $[15] *= d, this._identityCalculated = !1, this
            const g = $[0]
            const _ = $[1]
            const v = $[2]
            const y = $[3]
            const b = $[4]
            const x = $[5]
            const k = $[6]
            const w = $[7]
            const A = $[8]
            const P = $[9]
            const C = $[10]
            const E = $[11]
            const D = $[12]
            const S = $[13]
            const T = $[14]
            const F = $[15]
            return $[0] = g * t + _ * r + v * h + y * c, $[1] = g * e + _ * a + v * l + y * u, $[2] = g * i + _ * n + v * p + y * m, $[3] = g * s + _ * o + v * f + y * d, $[4] = b * t + x * r + k * h + w * c, $[5] = b * e + x * a + k * l + w * u, $[6] = b * i + x * n + k * p + w * m, $[7] = b * s + x * o + k * f + w * d, $[8] = A * t + P * r + C * h + E * c, $[9] = A * e + P * a + C * l + E * u, $[10] = A * i + P * n + C * p + E * m, $[11] = A * s + P * o + C * f + E * d, $[12] = D * t + S * r + T * h + F * c, $[13] = D * e + S * a + T * l + F * u, $[14] = D * i + S * n + T * p + F * m, $[15] = D * s + S * o + T * f + F * d, this._identityCalculated = !1, this
          }

          function $ () {
            return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
          }

          function g (t) {
            for (let e = 0; e < 16;) {
              if (t.props[e] !== this.props[e]) return !1
              e += 1
            }
            return !0
          }

          function _ (t) {
            let e
            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
            return t
          }

          function v (t) {
            let e
            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
          }

          function y (t, e, i) {
            return {
              x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
              y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
              z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
            }
          }

          function b (t, e, i) {
            return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
          }

          function x (t, e, i) {
            return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
          }

          function k (t, e, i) {
            return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
          }

          function w () {
            const t = this.props[0] * this.props[5] - this.props[1] * this.props[4]
            const e = this.props[5] / t
            const i = -this.props[1] / t
            const s = -this.props[4] / t
            const r = this.props[0] / t
            const a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t
            const n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t
            const o = new Matrix()
            return o.props[0] = e, o.props[1] = i, o.props[4] = s, o.props[5] = r, o.props[12] = a, o.props[13] = n, o
          }

          function A (t) {
            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
          }

          function P (t) {
            let e
            const i = t.length
            const s = []
            for (e = 0; e < i; e += 1) s[e] = A(t[e])
            return s
          }

          function C (t, e, i) {
            const s = createTypedArray('float32', 6)
            if (this.isIdentity()) s[0] = t[0], s[1] = t[1], s[2] = e[0], s[3] = e[1], s[4] = i[0], s[5] = i[1]; else {
              const r = this.props[0]
              const a = this.props[1]
              const n = this.props[4]
              const o = this.props[5]
              const h = this.props[12]
              const l = this.props[13]
              s[0] = t[0] * r + t[1] * n + h, s[1] = t[0] * a + t[1] * o + l, s[2] = e[0] * r + e[1] * n + h, s[3] = e[0] * a + e[1] * o + l, s[4] = i[0] * r + i[1] * n + h, s[5] = i[0] * a + i[1] * o + l
            }
            return s
          }

          function E (t, e, i) {
            return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
          }

          function D (t, e) {
            if (this.isIdentity()) return t + ',' + e
            const i = this.props
            return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + ',' + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
          }

          function S () {
            for (var t = 0, e = this.props, i = 'matrix3d('; t < 16;) i += s(1e4 * e[t]) / 1e4, i += t === 15 ? ')' : ',', t += 1
            return i
          }

          function T (t) {
            return t < 1e-6 && t > 0 || t > -0.000001 && t < 0 ? s(1e4 * t) / 1e4 : t
          }

          function F () {
            const t = this.props
            return 'matrix(' + T(t[0]) + ',' + T(t[1]) + ',' + T(t[4]) + ',' + T(t[5]) + ',' + T(t[12]) + ',' + T(t[13]) + ')'
          }

          return function () {
            this.reset = r, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = u, this.translate = m, this.transform = d, this.applyToPoint = y, this.applyToX = b, this.applyToY = x, this.applyToZ = k, this.applyToPointArray = E, this.applyToTriplePoints = C, this.applyToPointStringified = D, this.toCSS = S, this.to2dCSS = F, this.clone = _, this.cloneFromProps = v, this.equals = g, this.inversePoints = P, this.inversePoint = A, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = $, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray('float32', 16), this.reset()
          }
        }())

        function _typeof$3 (t) {
          return (_typeof$3 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
        }

        const lottie = {}
        const standalone = '__[STANDALONE]__'
        const animationData = '__[ANIMATIONDATA]__'
        let renderer = ''

        function setLocation (t) {
          setLocationHref(t)
        }

        function searchAnimations () {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering (t) {
          setSubframeEnabled(t)
        }

        function setPrefix (t) {
          setIdPrefix(t)
        }

        function loadAnimation (t) {
          return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality (t) {
          if (typeof t === 'string') {
            switch (t) {
              case 'high':
                setDefaultCurveSegments(200)
                break
              default:
              case 'medium':
                setDefaultCurveSegments(50)
                break
              case 'low':
                setDefaultCurveSegments(10)
            }
          } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser () {
          return typeof navigator !== 'undefined'
        }

        function installPlugin (t, e) {
          t === 'expressions' && setExpressionsPlugin(e)
        }

        function getFactory (t) {
          switch (t) {
            case 'propertyFactory':
              return PropertyFactory
            case 'shapePropertyFactory':
              return ShapePropertyFactory
            case 'matrix':
              return Matrix
            default:
              return null
          }
        }

        function checkReady () {
          document.readyState === 'complete' && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable (t) {
          for (let e = queryString.split('&'), i = 0; i < e.length; i += 1) {
            const s = e[i].split('=')
            if (decodeURIComponent(s[0]) == t) return decodeURIComponent(s[1])
          }
          return null
        }

        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = '5.11.0'
        var queryString = ''
        if (standalone) {
          const scripts = document.getElementsByTagName('script')
          const myScript = scripts[scripts.length - 1] || { src: '' }
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, '') : '', renderer = getQueryVariable('renderer')
        }
        var readyStateCheckInterval = setInterval(checkReady, 100)
        try {
          _typeof$3(exports) !== 'object' && __webpack_require__.amdO
        } catch (t) {
        }
        var t
        let e
        const ShapeModifiers = (e = {}, (t = {}).registerModifier = function (t, i) {
          e[t] || (e[t] = i)
        }, t.getModifier = function (t, i, s) {
          return new e[t](i, s)
        }, t)

        function ShapeModifier () {
        }

        function TrimModifier () {
        }

        function PuckerAndBloatModifier () {
        }

        ShapeModifier.prototype.initModifierProperties = function () {
        }, ShapeModifier.prototype.addShapeToModifier = function () {
        }, ShapeModifier.prototype.addShape = function (t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh)
            const e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            }
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function (t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function () {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function (t) {
          t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function (t, e, i, s, r) {
          let a
          let n
          const o = []
          e <= 1
            ? o.push({ s: t, e })
            : t >= 1
              ? o.push({ s: t - 1, e: e - 1 })
              : (o.push({
                  s: t,
                  e: 1
                }), o.push({ s: 0, e: e - 1 }))
          let h
          let l
          const p = []
          const f = o.length
          for (h = 0; h < f; h += 1) (l = o[h]).e * r < s || l.s * r > s + i || (a = l.s * r <= s ? 0 : (l.s * r - s) / i, p.push([a, n = l.e * r >= s + i ? 1 : (l.e * r - s) / i]))
          return p.length || p.push([0, 0]), p
        }, TrimModifier.prototype.releasePathsData = function (t) {
          let e
          const i = t.length
          for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e])
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function (t) {
          if (this._mdf || t) {
            let e = this.o.v % 360 / 360
            if (e < 0 && (e += 1), (s = this.s.v > 1 ? 1 + e : this.s.v < 0 ? 0 + e : this.s.v + e) > (r = this.e.v > 1 ? 1 + e : this.e.v < 0 ? 0 + e : this.e.v + e)) {
              const i = s
              s = r, r = i
            }
            s = 1e-4 * Math.round(1e4 * s), r = 1e-4 * Math.round(1e4 * r), this.sValue = s, this.eValue = r
          } else s = this.sValue, r = this.eValue
          let s
          let r
          let a
          let n
          let o
          let h
          let l
          let p
          let f
          const c = this.shapes.length
          let u = 0
          if (r === s) for (n = 0; n < c; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0); else if (r === 1 && s === 0 || r === 0 && s === 1) {
            if (this._mdf) for (n = 0; n < c; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
          } else {
            let m
            let d
            const $ = []
            for (n = 0; n < c; n += 1) {
              if ((m = this.shapes[n]).shape._mdf || this._mdf || t || this.m === 2) {
                if (h = (a = m.shape.paths)._length, f = 0, !m.shape._mdf && m.pathsData.length) f = m.totalShapeLength; else {
                  for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(a.shapes[o]), l.push(p), f += p.totalLength
                  m.totalShapeLength = f, m.pathsData = l
                }
                u += f, m.shape._mdf = !0
              } else m.shape.paths = m.localShapeCollection
            }
            let g
            let _ = s
            let v = r
            let y = 0
            for (n = c - 1; n >= 0; n -= 1) {
              if ((m = this.shapes[n]).shape._mdf) {
                for ((d = m.localShapeCollection).releaseShapes(), this.m === 2 && c > 1 ? (g = this.calculateShapeEdges(s, r, m.totalShapeLength, y, u), y += m.totalShapeLength) : g = [[_, v]], h = g.length, o = 0; o < h; o += 1) {
                  _ = g[o][0], v = g[o][1], $.length = 0, v <= 1
                    ? $.push({
                      s: m.totalShapeLength * _,
                      e: m.totalShapeLength * v
                    })
                    : _ >= 1
                      ? $.push({
                        s: m.totalShapeLength * (_ - 1),
                        e: m.totalShapeLength * (v - 1)
                      })
                      : ($.push({ s: m.totalShapeLength * _, e: m.totalShapeLength }), $.push({
                          s: 0,
                          e: m.totalShapeLength * (v - 1)
                        }))
                  let b = this.addShapes(m, $[0])
                  if ($[0].s !== $[0].e) {
                    if ($.length > 1) {
                      if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                        const x = b.pop()
                        this.addPaths(b, d), b = this.addShapes(m, $[1], x)
                      } else this.addPaths(b, d), b = this.addShapes(m, $[1])
                    }
                    this.addPaths(b, d)
                  }
                }
                m.shape.paths = d
              }
            }
          }
        }, TrimModifier.prototype.addPaths = function (t, e) {
          let i
          const s = t.length
          for (i = 0; i < s; i += 1) e.addShape(t[i])
        }, TrimModifier.prototype.addSegment = function (t, e, i, s, r, a, n) {
          r.setXYAt(e[0], e[1], 'o', a), r.setXYAt(i[0], i[1], 'i', a + 1), n && r.setXYAt(t[0], t[1], 'v', a), r.setXYAt(s[0], s[1], 'v', a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function (t, e, i, s) {
          e.setXYAt(t[1], t[5], 'o', i), e.setXYAt(t[2], t[6], 'i', i + 1), s && e.setXYAt(t[0], t[4], 'v', i), e.setXYAt(t[3], t[7], 'v', i + 1)
        }, TrimModifier.prototype.addShapes = function (t, e, i) {
          let s
          let r
          let a
          let n
          let o
          let h
          let l
          let p
          const f = t.pathsData
          const c = t.shape.paths.shapes
          const u = t.shape.paths._length
          let m = 0
          const d = []
          let $ = !0
          for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), d.push(i), s = 0; s < u; s += 1) {
            for (h = f[s].lengths, i.c = c[s].c, a = c[s].c ? h.length : h.length + 1, r = 1; r < a; r += 1) {
              if (m + (n = h[r - 1]).addedLength < e.s) m += n.addedLength, i.c = !1; else {
                if (m > e.e) {
                  i.c = !1
                  break
                }
                e.s <= m && e.e >= m + n.addedLength ? (this.addSegment(c[s].v[r - 1], c[s].o[r - 1], c[s].i[r], c[s].v[r], i, o, $), $ = !1) : (l = bez.getNewSegment(c[s].v[r - 1], c[s].v[r], c[s].o[r - 1], c[s].i[r], (e.s - m) / n.addedLength, (e.e - m) / n.addedLength, h[r - 1]), this.addSegmentFromArray(l, i, o, $), $ = !1, i.c = !1), m += n.addedLength, o += 1
              }
            }
            if (c[s].c && h.length) {
              if (n = h[r - 1], m <= e.e) {
                const g = h[r - 1].addedLength
                e.s <= m && e.e >= m + g ? (this.addSegment(c[s].v[r - 1], c[s].o[r - 1], c[s].i[0], c[s].v[0], i, o, $), $ = !1) : (l = bez.getNewSegment(c[s].v[r - 1], c[s].v[0], c[s].o[r - 1], c[s].i[0], (e.s - m) / g, (e.e - m) / g, h[r - 1]), this.addSegmentFromArray(l, i, o, $), $ = !1, i.c = !1)
              } else i.c = !1
              m += n.addedLength, o += 1
            }
            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], 'i', p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], 'o', i._length - 1)), m > e.e) break
            s < u - 1 && (i = shapePool.newElement(), $ = !0, d.push(i), o = 0)
          }
          return d
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function (t, e) {
          const i = e / 100
          const s = [0, 0]
          const r = t._length
          let a = 0
          for (a = 0; a < r; a += 1) s[0] += t.v[a][0], s[1] += t.v[a][1]
          s[0] /= r, s[1] /= r
          let n
          let o
          let h
          let l
          let p
          let f
          const c = shapePool.newElement()
          for (c.c = t.c, a = 0; a < r; a += 1) n = t.v[a][0] + (s[0] - t.v[a][0]) * i, o = t.v[a][1] + (s[1] - t.v[a][1]) * i, h = t.o[a][0] + -((s[0] - t.o[a][0]) * i), l = t.o[a][1] + -((s[1] - t.o[a][1]) * i), p = t.i[a][0] + -((s[0] - t.i[a][0]) * i), f = t.i[a][1] + -((s[1] - t.i[a][1]) * i), c.setTripleAt(n, o, h, l, p, f, a)
          return c
        }, PuckerAndBloatModifier.prototype.processShapes = function (t) {
          let e
          let i
          let s
          let r
          let a
          let n
          const o = this.shapes.length
          const h = this.amount.v
          if (h !== 0) {
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, r = a.shape.paths._length, s = 0; s < r; s += 1) n.addShape(this.processPath(e[s], h))
              a.shape.paths = a.localShapeCollection
            }
          }
          this.dynamicProperties.length || (this._mdf = !1)
        }
        const TransformPropertyFactory = (function () {
          const t = [0, 0]

          function e (t, e, i) {
            if (this.elem = t, this.frameId = -1, this.propType = 'transform', this.data = e, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                let s
                const r = e.or.k.length
                for (s = 0; s < r; s += 1) e.or.k[s].to = null, e.or.k[s].ti = null
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this)
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, 0.01, this), e.o
              ? this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t)
              : this.o = {
                _mdf: !1,
                v: 1
              }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }

          return e.prototype = {
            applyToMatrix: function (t) {
              const e = this._mdf
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function (e) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / i, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / i, 0)) : (s = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / i, this.p.offsetTime)); else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      s = [], r = []
                      var i
                      var s
                      var r
                      const a = this.px
                      const n = this.py
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (s[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / i, 0), r[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), r[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (s[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), r[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / i, 0), r[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / i, 0)) : (s = [a.pv, n.pv], r[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - 0.01) / i, a.offsetTime), r[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / i, n.offsetTime))
                    } else s = r = t
                    this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function () {
              if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function () {
            }
          }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function (t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function (t, i, s) {
              return new e(t, i, s)
            }
          }
        }())

        function RepeaterModifier () {
        }

        function RoundCornersModifier () {
        }

        function floatEqual (t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero (t) {
          return Math.abs(t) <= 1e-5
        }

        function lerp (t, e, i) {
          return t * (1 - i) + e * i
        }

        function lerpPoint (t, e, i) {
          return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
        }

        function quadRoots (t, e, i) {
          if (t === 0) return []
          const s = e * e - 4 * t * i
          if (s < 0) return []
          const r = -e / (2 * t)
          if (s === 0) return [r]
          const a = Math.sqrt(s) / (2 * t)
          return [r - a, r + a]
        }

        function polynomialCoefficients (t, e, i, s) {
          return [3 * e - t - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
        }

        function singlePoint (t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier (t, e, i, s, r) {
          r && pointEqual(t, e) && (e = lerpPoint(t, s, 1 / 3)), r && pointEqual(i, s) && (i = lerpPoint(t, s, 2 / 3))
          const a = polynomialCoefficients(t[0], e[0], i[0], s[0])
          const n = polynomialCoefficients(t[1], e[1], i[1], s[1])
          this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, i, s]
        }

        function extrema (t, e) {
          let i = t.points[0][e]
          let s = t.points[t.points.length - 1][e]
          if (i > s) {
            const r = s
            s = i, i = r
          }
          for (let a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1) {
            if (a[n] > 0 && a[n] < 1) {
              const o = t.point(a[n])[e]
              o < i ? i = o : o > s && (s = o)
            }
          }
          return { min: i, max: s }
        }

        function intersectData (t, e, i) {
          const s = t.boundingBox()
          return { cx: s.cx, cy: s.cy, width: s.width, height: s.height, bez: t, t: (e + i) / 2, t1: e, t2: i }
        }

        function splitData (t) {
          const e = t.bez.split(0.5)
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect (t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl (t, e, i, s, r, a) {
          if (boxIntersect(t, e)) {
            if (i >= a || t.width <= s && t.height <= s && e.width <= s && e.height <= s) r.push([t.t, e.t]); else {
              const n = splitData(t)
              const o = splitData(e)
              intersectsImpl(n[0], o[0], i + 1, s, r, a), intersectsImpl(n[0], o[1], i + 1, s, r, a), intersectsImpl(n[1], o[0], i + 1, s, r, a), intersectsImpl(n[1], o[1], i + 1, s, r, a)
            }
          }
        }

        function crossProduct (t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection (t, e, i, s) {
          const r = [t[0], t[1], 1]
          const a = [e[0], e[1], 1]
          const n = [i[0], i[1], 1]
          const o = [s[0], s[1], 1]
          const h = crossProduct(crossProduct(r, a), crossProduct(n, o))
          return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
        }

        function polarOffset (t, e, i) {
          return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
        }

        function pointDistance (t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual (t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier () {
        }

        function setPoint (t, e, i, s, r, a, n) {
          const o = i - Math.PI / 2
          const h = i + Math.PI / 2
          const l = e[0] + Math.cos(i) * s * r
          const p = e[1] - Math.sin(i) * s * r
          t.setTripleAt(l, p, l + Math.cos(o) * a, p - Math.sin(o) * a, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
        }

        function getPerpendicularVector (t, e) {
          const i = [e[0] - t[0], e[1] - t[1]]
          const s = -(0.5 * Math.PI)
          return [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]]
        }

        function getProjectingAngle (t, e) {
          const i = e === 0 ? t.length() - 1 : e - 1
          const s = (e + 1) % t.length()
          const r = getPerpendicularVector(t.v[i], t.v[s])
          return Math.atan2(0, 1) - Math.atan2(r[1], r[0])
        }

        function zigZagCorner (t, e, i, s, r, a, n) {
          const o = getProjectingAngle(e, i)
          const h = e.v[i % e._length]
          const l = e.v[i === 0 ? e._length - 1 : i - 1]
          const p = e.v[(i + 1) % e._length]
          const f = a === 2 ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0
          const c = a === 2 ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0
          setPoint(t, e.v[i % e._length], o, n, s, c / (2 * (r + 1)), f / (2 * (r + 1)), a)
        }

        function zigZagSegment (t, e, i, s, r, a) {
          for (let n = 0; n < s; n += 1) {
            const o = (n + 1) / (s + 1)
            const h = r === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0
            const l = e.normalAngle(o)
            setPoint(t, e.point(o), l, a, i, h / (2 * (s + 1)), h / (2 * (s + 1)), r), a = -a
          }
          return a
        }

        function linearOffset (t, e, i) {
          const s = Math.atan2(e[0] - t[0], e[1] - t[1])
          return [polarOffset(t, s, i), polarOffset(e, s, i)]
        }

        function offsetSegment (t, e) {
          i = (h = linearOffset(t.points[0], t.points[1], e))[0], s = h[1], r = (h = linearOffset(t.points[1], t.points[2], e))[0], a = h[1], n = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1]
          let i
          let s
          let r
          let a
          let n
          let o
          let h
          let l = lineIntersection(i, s, r, a)
          l === null && (l = s)
          let p = lineIntersection(n, o, r, a)
          return p === null && (p = n), new PolynomialBezier(i, l, p, o)
        }

        function joinLines (t, e, i, s, r) {
          const a = e.points[3]
          const n = i.points[0]
          if (s === 3 || pointEqual(a, n)) return a
          if (s === 2) {
            const o = -e.tangentAngle(1)
            const h = -i.tangentAngle(0) + Math.PI
            const l = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100))
            const p = l ? pointDistance(l, a) : pointDistance(a, n) / 2
            let f = polarOffset(a, o, 2 * p * roundCorner)
            return t.setXYAt(f[0], f[1], 'o', t.length() - 1), f = polarOffset(n, h, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n
          }
          const c = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, n, pointEqual(n, i.points[1]) ? i.points[3] : i.points[1])
          return c && pointDistance(c, a) < r ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : a
        }

        function getIntersection (t, e) {
          const i = t.intersections(e)
          return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null
        }

        function pruneSegmentIntersection (t, e) {
          const i = t.slice()
          const s = e.slice()
          let r = getIntersection(t[t.length - 1], e[0])
          return r && (i[t.length - 1] = t[t.length - 1].split(r[0])[0], s[0] = e[0].split(r[1])[1]), t.length > 1 && e.length > 1 && (r = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(r[0])[0]], [e[e.length - 1].split(r[1])[1]]] : [i, s]
        }

        function pruneIntersections (t) {
          for (var e, i = 1; i < t.length; i += 1) e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1]
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit (t, e) {
          let i
          let s
          let r
          let a
          const n = t.inflectionPoints()
          if (n.length === 0) return [offsetSegment(t, e)]
          if (n.length === 1 || floatEqual(n[1], 1)) return i = (r = t.split(n[0]))[0], s = r[1], [offsetSegment(i, e), offsetSegment(s, e)]
          i = (r = t.split(n[0]))[0]
          const o = (n[1] - n[0]) / (1 - n[0])
          return a = (r = r[1].split(o))[0], s = r[1], [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(s, e)]
        }

        function OffsetPathModifier () {
        }

        function getFontProperties (t) {
          for (var e = t.fStyle ? t.fStyle.split(' ') : [], i = 'normal', s = 'normal', r = e.length, a = 0; a < r; a += 1) {
            switch (e[a].toLowerCase()) {
              case 'italic':
                s = 'italic'
                break
              case 'bold':
                i = '700'
                break
              case 'black':
                i = '900'
                break
              case 'medium':
                i = '500'
                break
              case 'regular':
              case 'normal':
                i = '400'
                break
              case 'light':
              case 'thin':
                i = '200'
            }
          }
          return { style: s, weight: t.fWeight || i }
        }

        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix()
        }, RepeaterModifier.prototype.applyTransforms = function (t, e, i, s, r, a) {
          const n = a ? -1 : 1
          const o = s.s.v[0] + (1 - s.s.v[0]) * (1 - r)
          const h = s.s.v[1] + (1 - s.s.v[1]) * (1 - r)
          t.translate(s.p.v[0] * n * r, s.p.v[1] * n * r, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * n * r), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(s.a.v[0], s.a.v[1], s.a.v[2])
        }, RepeaterModifier.prototype.init = function (t, e, i, s) {
          for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i])
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function (t) {
          let e
          const i = t.length
          for (e = 0; e < i; e += 1) t[e]._processed = !1, t[e].ty === 'gr' && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function (t) {
          const e = JSON.parse(JSON.stringify(t))
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
          let i
          const s = t.length
          for (i = 0; i < s; i += 1) t[i]._render = e, t[i].ty === 'gr' && this.changeGroupRender(t[i].it, e)
        }, RepeaterModifier.prototype.processShapes = function (t) {
          let e
          let i
          let s
          let r
          let a
          let n = !1
          if (this._mdf || t) {
            let o
            const h = Math.ceil(this.c.v)
            if (this._groups.length < h) {
              for (; this._groups.length < h;) {
                const l = { it: this.cloneElements(this._elements), ty: 'gr' }
                l.it.push({
                  a: { a: 0, ix: 1, k: [0, 0] },
                  nm: 'Transform',
                  o: { a: 0, ix: 7, k: 100 },
                  p: { a: 0, ix: 2, k: [0, 0] },
                  r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] },
                  s: { a: 0, ix: 3, k: [100, 100] },
                  sa: { a: 0, ix: 5, k: 0 },
                  sk: { a: 0, ix: 4, k: 0 },
                  ty: 'tr'
                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
              }
              this.elem.reloadShapes(), n = !0
            }
            for (a = 0, s = 0; s <= this._groups.length - 1; s += 1) {
              if (o = a < h, this._groups[s]._render = o, this.changeGroupRender(this._groups[s].it, o), !o) {
                const p = this.elemsData[s].it
                const f = p[p.length - 1]
                f.transform.op.v !== 0 ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = h
            const c = this.o.v
            const u = c % 1
            const m = c > 0 ? Math.floor(c) : Math.ceil(c)
            const d = this.pMatrix.props
            const $ = this.rMatrix.props
            const g = this.sMatrix.props
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset()
            let _
            let v
            let y = 0
            if (c > 0) {
              for (; y < m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1
              u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), y += u)
            } else if (c < 0) {
              for (; y > m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1
              u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), y -= u)
            }
            for (s = this.data.m === 1 ? 0 : this._currentCopies - 1, r = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
              if (v = (i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), y !== 0) {
                for ((s !== 0 && r === 1 || s !== this._currentCopies - 1 && r === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform($[0], $[1], $[2], $[3], $[4], $[5], $[6], $[7], $[8], $[9], $[10], $[11], $[12], $[13], $[14], $[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), _ = 0; _ < v; _ += 1) i[_] = this.matrix.props[_]
                this.matrix.reset()
              } else for (this.matrix.reset(), _ = 0; _ < v; _ += 1) i[_] = this.matrix.props[_]
              y += 1, a -= 1, s += r
            }
          } else for (a = this._currentCopies, s = 0, r = 1; a;) i = (e = this.elemsData[s].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, s += r
          return n
        }, RepeaterModifier.prototype.addShape = function () {
        }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function (t, e) {
          let i
          const s = shapePool.newElement()
          s.c = t.c
          let r
          let a
          let n
          let o
          let h
          let l
          let p
          let f
          let c
          let u
          let m
          let d
          const $ = t._length
          let g = 0
          for (i = 0; i < $; i += 1) r = t.v[i], n = t.o[i], a = t.i[i], r[0] === n[0] && r[1] === n[1] && r[0] === a[0] && r[1] === a[1] ? i !== 0 && i !== $ - 1 || t.c ? (o = i === 0 ? t.v[$ - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = r[0] + (o[0] - r[0]) * l, f = d = r[1] - (r[1] - o[1]) * l, c = p - (p - r[0]) * roundCorner, u = f - (f - r[1]) * roundCorner, s.setTripleAt(p, f, c, u, m, d, g), g += 1, o = i === $ - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = r[0] + (o[0] - r[0]) * l, f = u = r[1] + (o[1] - r[1]) * l, m = p - (p - r[0]) * roundCorner, d = f - (f - r[1]) * roundCorner, s.setTripleAt(p, f, c, u, m, d, g), g += 1) : (s.setTripleAt(r[0], r[1], n[0], n[1], a[0], a[1], g), g += 1) : (s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1)
          return s
        }, RoundCornersModifier.prototype.processShapes = function (t) {
          let e
          let i
          let s
          let r
          let a
          let n
          const o = this.shapes.length
          const h = this.rd.v
          if (h !== 0) {
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, r = a.shape.paths._length, s = 0; s < r; s += 1) n.addShape(this.processPath(e[s], h))
              a.shape.paths = a.localShapeCollection
            }
          }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function (t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function (t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function (t) {
          const e = this.derivative(t)
          return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function (t) {
          const e = this.derivative(t)
          return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function () {
          const t = this.a[1] * this.b[0] - this.a[0] * this.b[1]
          if (floatZero(t)) return []
          const e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t
          const i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t
          if (i < 0) return []
          const s = Math.sqrt(i)
          return floatZero(s)
            ? s > 0 && s < 1 ? [e] : []
            : [e - s, e + s].filter(function (t) {
                return t > 0 && t < 1
              })
        }, PolynomialBezier.prototype.split = function (t) {
          if (t <= 0) return [singlePoint(this.points[0]), this]
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])]
          const e = lerpPoint(this.points[0], this.points[1], t)
          const i = lerpPoint(this.points[1], this.points[2], t)
          const s = lerpPoint(this.points[2], this.points[3], t)
          const r = lerpPoint(e, i, t)
          const a = lerpPoint(i, s, t)
          const n = lerpPoint(r, a, t)
          return [new PolynomialBezier(this.points[0], e, r, n, !0), new PolynomialBezier(n, a, s, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function () {
          return { x: extrema(this, 0), y: extrema(this, 1) }
        }, PolynomialBezier.prototype.boundingBox = function () {
          const t = this.bounds()
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function (t, e, i) {
          void 0 === e && (e = 2), void 0 === i && (i = 7)
          const s = []
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, s, i), s
        }, PolynomialBezier.shapeSegment = function (t, e) {
          const i = (e + 1) % t.length()
          return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0)
        }, PolynomialBezier.shapeSegmentInverted = function (t, e) {
          const i = (e + 1) % t.length()
          return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function (t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
        }, ZigZagModifier.prototype.processPath = function (t, e, i, s) {
          let r = t._length
          const a = shapePool.newElement()
          if (a.c = t.c, t.c || (r -= 1), r === 0) return a
          let n = -1
          let o = PolynomialBezier.shapeSegment(t, 0)
          zigZagCorner(a, t, 0, e, i, s, n)
          for (let h = 0; h < r; h += 1) n = zigZagSegment(a, o, e, i, s, -n), o = h !== r - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % r) : null, zigZagCorner(a, t, h + 1, e, i, s, n)
          return a
        }, ZigZagModifier.prototype.processShapes = function (t) {
          let e
          let i
          let s
          let r
          let a
          let n
          const o = this.shapes.length
          const h = this.amplitude.v
          const l = Math.max(0, Math.round(this.frequency.v))
          const p = this.pointsType.v
          if (h !== 0) {
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, r = a.shape.paths._length, s = 0; s < r; s += 1) n.addShape(this.processPath(e[s], h, l, p))
              a.shape.paths = a.localShapeCollection
            }
          }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
        }, OffsetPathModifier.prototype.processPath = function (t, e, i, s) {
          const r = shapePool.newElement()
          r.c = t.c
          let a
          let n
          let o
          let h = t.length()
          t.c || (h -= 1)
          let l = []
          for (a = 0; a < h; a += 1) o = PolynomialBezier.shapeSegment(t, a), l.push(offsetSegmentSplit(o, e))
          if (!t.c) for (a = h - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), l.push(offsetSegmentSplit(o, e))
          l = pruneIntersections(l)
          let p = null
          let f = null
          for (a = 0; a < l.length; a += 1) {
            const c = l[a]
            for (f && (p = joinLines(r, f, c[0], i, s)), f = c[c.length - 1], n = 0; n < c.length; n += 1) o = c[n], p && pointEqual(o.points[0], p) ? r.setXYAt(o.points[1][0], o.points[1][1], 'o', r.length() - 1) : r.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], r.length()), r.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], r.length()), p = o.points[3]
          }
          return l.length && joinLines(r, f, l[0][0], i, s), r
        }, OffsetPathModifier.prototype.processShapes = function (t) {
          let e
          let i
          let s
          let r
          let a
          let n
          const o = this.shapes.length
          const h = this.amount.v
          const l = this.miterLimit.v
          const p = this.lineJoin
          if (h !== 0) {
            for (i = 0; i < o; i += 1) {
              if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, r = a.shape.paths._length, s = 0; s < r; s += 1) n.addShape(this.processPath(e[s], h, p, l))
              a.shape.paths = a.localShapeCollection
            }
          }
          this.dynamicProperties.length || (this._mdf = !1)
        }
        const FontManager = (function () {
          const t = { w: 0, size: 0, shapes: [], data: { shapes: [] } }
          let e = []
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403])
          const i = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff']
          const s = [65039, 8205]

          function r (t, e) {
            const i = createTag('span')
            i.setAttribute('aria-hidden', !0), i.style.fontFamily = e
            const s = createTag('span')
            s.innerText = 'giItT1WQy@!-/#', i.style.position = 'absolute', i.style.left = '-10000px', i.style.top = '-10000px', i.style.fontSize = '300px', i.style.fontVariant = 'normal', i.style.fontStyle = 'normal', i.style.fontWeight = 'normal', i.style.letterSpacing = '0', i.appendChild(s), document.body.appendChild(i)
            const r = s.offsetWidth
            return s.style.fontFamily = (function (t) {
              let e
              const i = t.split(',')
              const s = i.length
              const r = []
              for (e = 0; e < s; e += 1) i[e] !== 'sans-serif' && i[e] !== 'monospace' && r.push(i[e])
              return r.join(',')
            }(t)) + ', ' + e, { node: s, w: r, parent: i }
          }

          function a (t, e) {
            let i
            const s = document.body && e ? 'svg' : 'canvas'
            const r = getFontProperties(t)
            if (s === 'svg') {
              const a = createNS('text')
              a.style.fontSize = '100px', a.setAttribute('font-family', t.fFamily), a.setAttribute('font-style', r.style), a.setAttribute('font-weight', r.weight), a.textContent = '1', t.fClass ? (a.style.fontFamily = 'inherit', a.setAttribute('class', t.fClass)) : a.style.fontFamily = t.fFamily, e.appendChild(a), i = a
            } else {
              const n = new OffscreenCanvas(500, 500).getContext('2d')
              n.font = r.style + ' ' + r.weight + ' 100px ' + t.fFamily, i = n
            }
            return {
              measureText: function (t) {
                return s === 'svg' ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
              }
            }
          }

          const n = function () {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          }
          n.isModifier = function (t, e) {
            const s = t.toString(16) + e.toString(16)
            return i.indexOf(s) !== -1
          }, n.isZeroWidthJoiner = function (t, e) {
            return e ? t === s[0] && e === s[1] : t === s[1]
          }, n.isCombinedCharacter = function (t) {
            return e.indexOf(t) !== -1
          }
          const o = {
            addChars: function (t) {
              if (t) {
                this.chars || (this.chars = [])
                let e
                let i
                let s
                const r = t.length
                let a = this.chars.length
                for (e = 0; e < r; e += 1) {
                  for (i = 0, s = !1; i < a;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (s = !0), i += 1
                  s || (this.chars.push(t[e]), a += 1)
                }
              }
            },
            addFonts: function (t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void (this.fonts = t.list)
                if (!document.body) {
                  return this.isLoaded = !0, t.list.forEach(function (t) {
                    t.helper = a(t), t.cache = {}
                  }), void (this.fonts = t.list)
                }
                let i
                const s = t.list
                const n = s.length
                let o = n
                for (i = 0; i < n; i += 1) {
                  var h
                  var l
                  let p = !0
                  if (s[i].loaded = !1, s[i].monoCase = r(s[i].fFamily, 'monospace'), s[i].sansCase = r(s[i].fFamily, 'sans-serif'), s[i].fPath) {
                    if (s[i].fOrigin === 'p' || s[i].origin === 3) {
                      if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[i].fFamily + '"], style[f-origin="3"][f-family="' + s[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                        const f = createTag('style')
                        f.setAttribute('f-forigin', s[i].fOrigin), f.setAttribute('f-origin', s[i].origin), f.setAttribute('f-family', s[i].fFamily), f.type = 'text/css', f.innerText = '@font-face {font-family: ' + s[i].fFamily + "; font-style: normal; src: url('" + s[i].fPath + "');}", e.appendChild(f)
                      }
                    } else if (s[i].fOrigin === 'g' || s[i].origin === 1) {
                      for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) h[l].href.indexOf(s[i].fPath) !== -1 && (p = !1)
                      if (p) {
                        const c = createTag('link')
                        c.setAttribute('f-forigin', s[i].fOrigin), c.setAttribute('f-origin', s[i].origin), c.type = 'text/css', c.rel = 'stylesheet', c.href = s[i].fPath, document.body.appendChild(c)
                      }
                    } else if (s[i].fOrigin === 't' || s[i].origin === 2) {
                      for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) s[i].fPath === h[l].src && (p = !1)
                      if (p) {
                        const u = createTag('link')
                        u.setAttribute('f-forigin', s[i].fOrigin), u.setAttribute('f-origin', s[i].origin), u.setAttribute('rel', 'stylesheet'), u.setAttribute('href', s[i].fPath), e.appendChild(u)
                      }
                    }
                  } else s[i].loaded = !0, o -= 1
                  s[i].helper = a(s[i], e), s[i].cache = {}, this.fonts.push(s[i])
                }
                o === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function (e, i, s) {
              for (let r = 0, a = this.chars.length; r < a;) {
                if (this.chars[r].ch === e && this.chars[r].style === i && this.chars[r].fFamily === s) return this.chars[r]
                r += 1
              }
              return (typeof e === 'string' && e.charCodeAt(0) !== 13 || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn('Missing character from exported characters list: ', e, i, s)), t
            },
            getFontByName: function (t) {
              for (let e = 0, i = this.fonts.length; e < i;) {
                if (this.fonts[e].fName === t) return this.fonts[e]
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function (t, e, i) {
              const s = this.getFontByName(e)
              const r = t.charCodeAt(0)
              if (!s.cache[r + 1]) {
                const a = s.helper
                if (t === ' ') {
                  const n = a.measureText('|' + t + '|')
                  const o = a.measureText('||')
                  s.cache[r + 1] = (n - o) / 100
                } else s.cache[r + 1] = a.measureText(t) / 100
              }
              return s.cache[r + 1] * i
            },
            checkLoadedFonts: function () {
              let t
              let e
              let i
              const s = this.fonts.length
              let r = s
              for (t = 0; t < s; t += 1) this.fonts[t].loaded ? r -= 1 : this.fonts[t].fOrigin === 'n' || this.fonts[t].origin === 0 ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (r -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (r -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)))
              r !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function () {
              this.isLoaded = !0
            }
          }
          return n.prototype = o, n
        }())

        function SlotManager (t) {
          this.animationData = t
        }

        function slotFactory (t) {
          return new SlotManager(t)
        }

        function RenderableElement () {
        }

        SlotManager.prototype.getProp = function (t) {
          return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }, RenderableElement.prototype = {
          initRenderable: function () {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function (t) {
            this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t)
          },
          removeRenderableComponent: function (t) {
            this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
          },
          prepareRenderableFrame: function (t) {
            this.checkLayerLimits(t)
          },
          checkTransparency: function () {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function (t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function () {
            let t
            const e = this.renderableComponents.length
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function () {
            return { top: 0, left: 0, width: 100, height: 100 }
          },
          getLayerSize: function () {
            return this.data.ty === 5
              ? {
                  w: this.data.textData.width,
                  h: this.data.textData.height
                }
              : { w: this.data.width, h: this.data.height }
          }
        }
        let blendModeEnums
        const getBlendMode = (blendModeEnums = {
          0: 'source-over',
          1: 'multiply',
          2: 'screen',
          3: 'overlay',
          4: 'darken',
          5: 'lighten',
          6: 'color-dodge',
          7: 'color-burn',
          8: 'hard-light',
          9: 'soft-light',
          10: 'difference',
          11: 'exclusion',
          12: 'hue',
          13: 'saturation',
          14: 'color',
          15: 'luminosity'
        }, function (t) {
          return blendModeEnums[t] || ''
        })

        function SliderEffect (t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function AngleEffect (t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function ColorEffect (t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function PointEffect (t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function LayerIndexEffect (t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function MaskIndexEffect (t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function CheckboxEffect (t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function NoValueEffect () {
          this.p = {}
        }

        function EffectsManager (t, e) {
          let i
          const s = t.ef || []
          this.effectElements = []
          let r
          const a = s.length
          for (i = 0; i < a; i += 1) r = new GroupEffect(s[i], e), this.effectElements.push(r)
        }

        function GroupEffect (t, e) {
          this.init(t, e)
        }

        function BaseElement () {
        }

        function FrameElement () {
        }

        function FootageElement (t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
        }

        function AudioElement (t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1
          const s = this.globalData.getAssetsPath(this.assetData)
          this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this)
        }

        function BaseRenderer () {
        }

        function TransformElement () {
        }

        function MaskElement (t, e, i) {
          this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null
          let s
          let r
          let a
          const n = this.globalData.defs
          let o = this.masksProperties ? this.masksProperties.length : 0
          this.viewData = createSizedArray(o), this.solidPath = ''
          let h
          let l
          let p
          let f
          let c
          let u
          const m = this.masksProperties
          let d = 0
          const $ = []
          const g = createElementID()
          let _ = 'clipPath'
          let v = 'clip-path'
          for (r = 0; r < o; r += 1) {
            if ((m[r].mode !== 'a' && m[r].mode !== 'n' || m[r].inv || m[r].o.k !== 100 || m[r].o.x) && (_ = 'mask', v = 'mask'), m[r].mode !== 's' && m[r].mode !== 'i' || d !== 0 ? p = null : ((p = createNS('rect')).setAttribute('fill', '#ffffff'), p.setAttribute('width', this.element.comp.data.w || 0), p.setAttribute('height', this.element.comp.data.h || 0), $.push(p)), a = createNS('path'), m[r].mode === 'n') {
              this.viewData[r] = {
                op: PropertyFactory.getProp(this.element, m[r].o, 0, 0.01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, m[r], 3),
                elem: a,
                lastPath: ''
              }, n.appendChild(a)
            } else {
              if (d += 1, a.setAttribute('fill', m[r].mode === 's' ? '#000000' : '#ffffff'), a.setAttribute('clip-rule', 'nonzero'), m[r].x.k !== 0 ? (_ = 'mask', v = 'mask', u = PropertyFactory.getProp(this.element, m[r].x, 0, null, this.element), s = createElementID(), (f = createNS('filter')).setAttribute('id', s), (c = createNS('feMorphology')).setAttribute('operator', 'erode'), c.setAttribute('in', 'SourceGraphic'), c.setAttribute('radius', '0'), f.appendChild(c), n.appendChild(f), a.setAttribute('stroke', m[r].mode === 's' ? '#000000' : '#ffffff')) : (c = null, u = null), this.storedData[r] = {
                elem: a,
                x: u,
                expan: c,
                lastPath: '',
                lastOperator: '',
                filterId: s,
                lastRadius: 0
              }, m[r].mode === 'i') {
                l = $.length
                const y = createNS('g')
                for (h = 0; h < l; h += 1) y.appendChild($[h])
                const b = createNS('mask')
                b.setAttribute('mask-type', 'alpha'), b.setAttribute('id', g + '_' + d), b.appendChild(a), n.appendChild(b), y.setAttribute('mask', 'url(' + getLocationHref() + '#' + g + '_' + d + ')'), $.length = 0, $.push(y)
              } else $.push(a)
              m[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                elem: a,
                lastPath: '',
                op: PropertyFactory.getProp(this.element, m[r].o, 0, 0.01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, m[r], 3),
                invRect: p
              }, this.viewData[r].prop.k || this.drawPath(m[r], this.viewData[r].prop.v, this.viewData[r])
            }
          }
          for (this.maskElement = createNS(_), o = $.length, r = 0; r < o; r += 1) this.maskElement.appendChild($[r])
          d > 0 && (this.maskElement.setAttribute('id', g), this.element.maskedElement.setAttribute(v, 'url(' + getLocationHref() + '#' + g + ')'), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) {
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e)
          let i
          let s
          const r = this.data.ef.length
          const a = this.data.ef
          for (i = 0; i < r; i += 1) {
            switch (s = null, a[i].ty) {
              case 0:
                s = new SliderEffect(a[i], e, this)
                break
              case 1:
                s = new AngleEffect(a[i], e, this)
                break
              case 2:
                s = new ColorEffect(a[i], e, this)
                break
              case 3:
                s = new PointEffect(a[i], e, this)
                break
              case 4:
              case 7:
                s = new CheckboxEffect(a[i], e, this)
                break
              case 10:
                s = new LayerIndexEffect(a[i], e, this)
                break
              case 11:
                s = new MaskIndexEffect(a[i], e, this)
                break
              case 5:
                s = new EffectsManager(a[i], e, this)
                break
              default:
                s = new NoValueEffect(a[i], e, this)
            }
            s && this.effectElements.push(s)
          }
        }, BaseElement.prototype = {
          checkMasks: function () {
            if (!this.data.hasMask) return !1
            for (let t = 0, e = this.data.masksProperties.length; t < e;) {
              if (this.data.masksProperties[t].mode !== 'n' && !1 !== this.data.masksProperties[t].cl) return !0
              t += 1
            }
            return !1
          },
          initExpressions: function () {
            const t = getExpressionInterfaces()
            if (t) {
              const e = t('layer')
              const i = t('effects')
              const s = t('shape')
              const r = t('text')
              const a = t('comp')
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager)
              const n = i.createEffectsInterface(this, this.layerInterface)
              this.layerInterface.registerEffectsInterface(n), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = r(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function () {
            const t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style['mix-blend-mode'] = t
          },
          initBaseData: function (t, e, i) {
            this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function () {
            return this.type
          },
          sourceRectAtTime: function () {
          }
        }, FrameElement.prototype = {
          initFrame: function () {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function (t, e) {
            let i
            const s = this.dynamicProperties.length
            for (i = 0; i < s; i += 1) (e || this._isParent && this.dynamicProperties[i].propType === 'transform') && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function (t) {
            this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t)
          }
        }, FootageElement.prototype.prepareFrame = function () {
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function () {
          return null
        }, FootageElement.prototype.renderFrame = function () {
        }, FootageElement.prototype.destroy = function () {
        }, FootageElement.prototype.initExpressions = function () {
          const t = getExpressionInterfaces()
          if (t) {
            const e = t('footage')
            this.layerInterface = e(this)
          }
        }, FootageElement.prototype.getFootageData = function () {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function (t) {
          if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr; else {
            const e = this.tm.v
            this._currentTime = e
          }
          this._volume = this.lv.v[0]
          const i = this._volume * this._volumeMultiplier
          this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function () {
        }, AudioElement.prototype.hide = function () {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function () {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function () {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function (t) {
          this.audio.rate(t)
        }, AudioElement.prototype.volume = function (t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function () {
          return null
        }, AudioElement.prototype.destroy = function () {
        }, AudioElement.prototype.sourceRectAtTime = function () {
        }, AudioElement.prototype.initExpressions = function () {
        }, BaseRenderer.prototype.checkLayers = function (t) {
          let e
          let i
          const s = this.layers.length
          for (this.completeLayers = !0, e = s - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function (t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t)
            case 0:
              return this.createComp(t)
            case 1:
              return this.createSolid(t)
            case 3:
            default:
              return this.createNull(t)
            case 4:
              return this.createShape(t)
            case 5:
              return this.createText(t)
            case 6:
              return this.createAudio(t)
            case 13:
              return this.createCamera(t)
            case 15:
              return this.createFootage(t)
          }
        }, BaseRenderer.prototype.createCamera = function () {
          throw Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function (t) {
          return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function (t) {
          return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function () {
          let t
          const e = this.layers.length
          for (t = 0; t < e; t += 1) this.buildItem(t)
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function (t) {
          this.completeLayers = !1
          let e
          let i
          const s = t.length
          const r = this.layers.length
          for (e = 0; e < s; e += 1) {
            for (i = 0; i < r;) {
              if (this.layers[i].id === t[e].id) {
                this.layers[i] = t[e]
                break
              }
              i += 1
            }
          }
        }, BaseRenderer.prototype.setProjectInterface = function (t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function () {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
          for (let s = this.elements, r = this.layers, a = 0, n = r.length; a < n;) r[a].ind == e && (s[a] && !0 !== s[a] ? (i.push(s[a]), s[a].setAsParent(), void 0 !== r[a].parent ? this.buildElementParenting(t, r[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function (t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function (t) {
          let e
          const i = t.length
          for (e = 0; e < i; e += 1) {
            if (t[e].xt) {
              const s = this.createComp(t[e])
              s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
            }
          }
        }, BaseRenderer.prototype.getElementById = function (t) {
          let e
          const i = this.elements.length
          for (e = 0; e < i; e += 1) if (this.elements[e].data.ind === t) return this.elements[e]
          return null
        }, BaseRenderer.prototype.getElementByPath = function (t) {
          let e
          const i = t.shift()
          if (typeof i === 'number') e = this.elements[i]; else {
            let s
            const r = this.elements.length
            for (s = 0; s < r; s += 1) {
              if (this.elements[s].data.nm === i) {
                e = this.elements[s]
                break
              }
            }
          }
          return t.length === 0 ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function (t, e) {
          this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
          }
        }, TransformElement.prototype = {
          initTransform: function () {
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 },
              _matMdf: !1,
              _opMdf: !1,
              mat: new Matrix()
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function () {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              let t
              const e = this.finalTransform.mat
              let i = 0
              const s = this.hierarchy.length
              if (!this.finalTransform._matMdf) {
                for (; i < s;) {
                  if (this.hierarchy[i].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0
                    break
                  }
                  i += 1
                }
              }
              if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < s; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }
          },
          globalToLocal: function (t) {
            const e = []
            e.push(this.finalTransform)
            for (var i, s = !0, r = this.comp; s;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : s = !1
            let a
            const n = e.length
            for (i = 0; i < n; i += 1) a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0]
            return t
          },
          mHelper: new Matrix()
        }, MaskElement.prototype.getMaskProperty = function (t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function (t) {
          let e
          const i = this.element.finalTransform.mat
          const s = this.masksProperties.length
          for (e = 0; e < s; e += 1) {
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute('fill-opacity', this.viewData[e].op.v), this.masksProperties[e].mode !== 'n' && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute('transform', i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              const r = this.storedData[e].expan
              this.storedData[e].x.v < 0 ? (this.storedData[e].lastOperator !== 'erode' && (this.storedData[e].lastOperator = 'erode', this.storedData[e].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[e].filterId + ')')), r.setAttribute('radius', -this.storedData[e].x.v)) : (this.storedData[e].lastOperator !== 'dilate' && (this.storedData[e].lastOperator = 'dilate', this.storedData[e].elem.setAttribute('filter', null)), this.storedData[e].elem.setAttribute('stroke-width', 2 * this.storedData[e].x.v))
            }
          }
        }, MaskElement.prototype.getMaskelement = function () {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function () {
          let t = 'M0,0 '
          return t += ' h' + this.globalData.compSize.w, t += ' v' + this.globalData.compSize.h, (t += ' h-' + this.globalData.compSize.w) + ' v-' + this.globalData.compSize.h + ' '
        }, MaskElement.prototype.drawPath = function (t, e, i) {
          let s
          let r
          let a = ' M' + e.v[0][0] + ',' + e.v[0][1]
          for (r = e._length, s = 1; s < r; s += 1) a += ' C' + e.o[s - 1][0] + ',' + e.o[s - 1][1] + ' ' + e.i[s][0] + ',' + e.i[s][1] + ' ' + e.v[s][0] + ',' + e.v[s][1]
          if (e.c && r > 1 && (a += ' C' + e.o[s - 1][0] + ',' + e.o[s - 1][1] + ' ' + e.i[0][0] + ',' + e.i[0][1] + ' ' + e.v[0][0] + ',' + e.v[0][1]), i.lastPath !== a) {
            let n = ''
            i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute('d', n)), i.lastPath = a
          }
        }, MaskElement.prototype.destroy = function () {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        }
        const filtersFactory = {
          createFilter: function (t, e) {
            const i = createNS('filter')
            return i.setAttribute('id', t), !0 !== e && (i.setAttribute('filterUnits', 'objectBoundingBox'), i.setAttribute('x', '0%'), i.setAttribute('y', '0%'), i.setAttribute('width', '100%'), i.setAttribute('height', '100%')), i
          },
          createAlphaToLuminanceFilter: function () {
            const t = createNS('feColorMatrix')
            return t.setAttribute('type', 'matrix'), t.setAttribute('color-interpolation-filters', 'sRGB'), t.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'), t
          }
        }
        const featureSupport = (t = {
          maskType: !0,
          svgLumaHidden: !0,
          offscreenCanvas: typeof OffscreenCanvas !== 'undefined'
        }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t)
        const registeredEffects = {}
        const idPrefix = 'filter_result_'

        function SVGEffects (t) {
          let e
          let i
          let s = 'SourceGraphic'
          const r = t.data.ef ? t.data.ef.length : 0
          const a = createElementID()
          const n = filtersFactory.createFilter(a, !0)
          let o = 0
          for (this.filters = [], e = 0; e < r; e += 1) {
            i = null
            const h = t.data.ef[e].ty
            registeredEffects[h] && (i = new registeredEffects[h].effect(n, t.effectsManager.effectElements[e], t, idPrefix + o, s), s = idPrefix + o, registeredEffects[h].countsAsEffect && (o += 1)), i && this.filters.push(i)
          }
          o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + a + ')')), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect (t, e, i) {
          registeredEffects[t] = { effect: e, countsAsEffect: i }
        }

        function SVGBaseElement () {
        }

        function HierarchyElement () {
        }

        function RenderableDOMElement () {
        }

        function IImageElement (t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement (t, e) {
          this.elem = t, this.pos = e
        }

        function IShapeElement () {
        }

        SVGEffects.prototype.renderFrame = function (t) {
          let e
          const i = this.filters.length
          for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, SVGBaseElement.prototype = {
          initRendererElement: function () {
            this.layerElement = createNS('g')
          },
          createContainerElements: function () {
            this.matteElement = createNS('g'), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1
            let t = null
            if (this.data.td) {
              this.matteMasks = {}
              const e = createNS('g')
              e.setAttribute('id', this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement
            if (this.data.ln && this.layerElement.setAttribute('id', this.data.ln), this.data.cl && this.layerElement.setAttribute('class', this.data.cl), this.data.ty === 0 && !this.data.hd) {
              const i = createNS('clipPath')
              const s = createNS('path')
              s.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z')
              const r = createElementID()
              if (i.setAttribute('id', r), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                const a = createNS('g')
                a.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + r + ')'), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + r + ')')
            }
            this.data.bm !== 0 && this.setBlendMode()
          },
          renderElement: function () {
            this.finalTransform._matMdf && this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v)
          },
          destroyBaseElement: function () {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function () {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function () {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
          },
          getMatte: function (t) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
              let e
              let i
              let s
              let r
              const a = this.layerId + '_' + t
              if (t === 1 || t === 3) {
                const n = createNS('mask')
                n.setAttribute('id', a), n.setAttribute('mask-type', t === 3 ? 'luminance' : 'alpha'), (s = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), n.appendChild(s), this.globalData.defs.appendChild(n), featureSupport.maskType || t !== 1 || (n.setAttribute('mask-type', 'luminance'), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS('g')).appendChild(s), n.appendChild(r), r.setAttribute('filter', 'url(' + getLocationHref() + '#' + e + ')'))
              } else if (t === 2) {
                const o = createNS('mask')
                o.setAttribute('id', a), o.setAttribute('mask-type', 'alpha')
                const h = createNS('g')
                o.appendChild(h), e = createElementID(), i = filtersFactory.createFilter(e)
                const l = createNS('feComponentTransfer')
                l.setAttribute('in', 'SourceGraphic'), i.appendChild(l)
                const p = createNS('feFuncA')
                p.setAttribute('type', 'table'), p.setAttribute('tableValues', '1.0 0.0'), l.appendChild(p), this.globalData.defs.appendChild(i)
                const f = createNS('rect')
                f.setAttribute('width', this.comp.data.w), f.setAttribute('height', this.comp.data.h), f.setAttribute('x', '0'), f.setAttribute('y', '0'), f.setAttribute('fill', '#ffffff'), f.setAttribute('opacity', '0'), h.setAttribute('filter', 'url(' + getLocationHref() + '#' + e + ')'), h.appendChild(f), (s = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), h.appendChild(s), featureSupport.maskType || (o.setAttribute('mask-type', 'luminance'), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS('g'), h.appendChild(f), r.appendChild(this.layerElement), h.appendChild(r)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = a
            }
            return this.matteMasks[t]
          },
          setMatte: function (t) {
            this.matteElement && this.matteElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + t + ')')
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function () {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function (t) {
            this.hierarchy = t
          },
          setAsParent: function () {
            this._isParent = !0
          },
          checkParenting: function () {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function (t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function () {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = 'none', this.hidden = !0)
          },
          show: function () {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = 'block'), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function () {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function () {
          },
          prepareFrame: function (t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
          },
          destroy: function () {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
          const t = this.globalData.getAssetsPath(this.assetData)
          this.innerElem = createNS('image'), this.innerElem.setAttribute('width', this.assetData.w + 'px'), this.innerElem.setAttribute('height', this.assetData.h + 'px'), this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function () {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function (t) {
            let e
            const i = this.shapeModifiers.length
            for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
          },
          isShapeInAnimatedModifiers: function (t) {
            for (let e = this.shapeModifiers.length; e > 0;) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0
            return !1
          },
          renderModifiers: function () {
            if (this.shapeModifiers.length) {
              let t
              let e = this.shapes.length
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset()
              for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1) ;
            }
          },
          searchProcessedElement: function (t) {
            for (let e = this.processedElements, i = 0, s = e.length; i < s;) {
              if (e[i].elem === t) return e[i].pos
              i += 1
            }
            return 0
          },
          addProcessedElement: function (t, e) {
            for (var i = this.processedElements, s = i.length; s;) if (i[s -= 1].elem === t) return void (i[s].pos = e)
            i.push(new ProcessedElement(t, e))
          },
          prepareFrame: function (t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
          }
        }
        const lineCapEnum = { 1: 'butt', 2: 'round', 3: 'square' }
        const lineJoinEnum = { 1: 'miter', 2: 'round', 3: 'bevel' }

        function SVGShapeData (t, e, i) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = '', this.sh = i, this.lvl = e, this._isAnimated = !!i.k
          for (let s = 0, r = t.length; s < r;) {
            if (t[s].mProps.dynamicProperties.length) {
              this._isAnimated = !0
              break
            }
            s += 1
          }
        }

        function SVGStyleData (t, e) {
          this.data = t, this.type = t.ty, this.d = '', this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS('path'), this.msElem = null
        }

        function DashProperty (t, e, i, s) {
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = '', this.dashArray = createTypedArray('float32', e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray('float32', 1), this.initDynamicPropertyContainer(s)
          let r
          let a
          const n = e.length || 0
          for (r = 0; r < n; r += 1) {
            a = PropertyFactory.getProp(t, e[r].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[r] = {
              n: e[r].n,
              p: a
            }
          }
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData (t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, 'svg', this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData (t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
        }

        function SVGNoStyleData (t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
        }

        function GradientProperty (t, e, i) {
          this.data = e, this.c = createTypedArray('uint8c', 4 * e.p)
          const s = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p
          this.o = createTypedArray('float32', s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData (t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
        }

        function SVGGradientStrokeStyleData (t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, 'svg', this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData () {
          this.it = [], this.prevViewData = [], this.gr = createNS('g')
        }

        function SVGTransformData (t, e, i) {
          this.transform = {
            mProps: t,
            op: e,
            container: i
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }

        SVGShapeData.prototype.setAsAnimated = function () {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function () {
          this.d = '', this._mdf = !1
        }, DashProperty.prototype.getValue = function (t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            let e = 0
            const i = this.dataProps.length
            for (this.renderer === 'svg' && (this.dashStr = ''), e = 0; e < i; e += 1) this.dataProps[e].n !== 'o' ? this.renderer === 'svg' ? this.dashStr += ' ' + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function (t, e) {
          for (let i = 0, s = this.o.length / 2; i < s;) {
            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) return !1
            i += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function () {
          if (this.o.length / 2 != this.c.length / 4) return !1
          if (this.data.k.k[0].s) {
            for (let t = 0, e = this.data.k.k.length; t < e;) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1
              t += 1
            }
          } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1
          return !0
        }, GradientProperty.prototype.getValue = function (t) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            let e
            let i
            let s
            let r = 4 * this.data.p
            for (e = 0; e < r; e += 1) i = e % 4 == 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t)
            if (this.o.length) for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) i = e % 2 == 0 ? 100 : 1, s = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== s && (this.o[e - 4 * this.data.p] = s, this._omdf = !t)
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function (t, e, i) {
          this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
          const i = createElementID()
          const s = createNS(e.t === 1 ? 'linearGradient' : 'radialGradient')
          s.setAttribute('id', i), s.setAttribute('spreadMethod', 'pad'), s.setAttribute('gradientUnits', 'userSpaceOnUse')
          let r
          let a
          let n
          const o = []
          for (n = 4 * e.g.p, a = 0; a < n; a += 4) r = createNS('stop'), s.appendChild(r), o.push(r)
          t.setAttribute(e.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + i + ')'), this.gf = s, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            let i
            let s
            let r
            const a = createNS('mask')
            const n = createNS('path')
            a.appendChild(n)
            const o = createElementID()
            const h = createElementID()
            a.setAttribute('id', h)
            const l = createNS(t.t === 1 ? 'linearGradient' : 'radialGradient')
            l.setAttribute('id', o), l.setAttribute('spreadMethod', 'pad'), l.setAttribute('gradientUnits', 'userSpaceOnUse'), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length
            const p = this.stops
            for (s = 4 * t.g.p; s < r; s += 2) (i = createNS('stop')).setAttribute('stop-color', 'rgb(255,255,255)'), l.appendChild(i), p.push(i)
            n.setAttribute(t.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + o + ')'), t.ty === 'gs' && (n.setAttribute('stroke-linecap', lineCapEnum[t.lc || 2]), n.setAttribute('stroke-linejoin', lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute('stroke-miterlimit', t.ml)), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData)
        const buildShapeString = function (t, e, i, s) {
          if (e === 0) return ''
          let r
          const a = t.o
          const n = t.i
          const o = t.v
          let h = ' M' + s.applyToPointStringified(o[0][0], o[0][1])
          for (r = 1; r < e; r += 1) h += ' C' + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + ' ' + s.applyToPointStringified(n[r][0], n[r][1]) + ' ' + s.applyToPointStringified(o[r][0], o[r][1])
          return i && e && (h += ' C' + s.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + ' ' + s.applyToPointStringified(n[0][0], n[0][1]) + ' ' + s.applyToPointStringified(o[0][0], o[0][1]), h += 'z'), h
        }
        const SVGElementsRenderer = (function () {
          const t = new Matrix()
          const e = new Matrix()

          function i (t, e, i) {
            (i || e.transform.op._mdf) && e.transform.container.setAttribute('opacity', e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute('transform', e.transform.mProps.v.to2dCSS())
          }

          function s () {
          }

          function r (i, s, r) {
            let a
            let n
            let o
            let h
            let l
            let p
            let f
            let c
            let u
            let m
            let d
            const $ = s.styles.length
            const g = s.lvl
            for (p = 0; p < $; p += 1) {
              if (h = s.sh._mdf || r, s.styles[p].lvl < g) {
                for (c = e.reset(), m = g - s.styles[p].lvl, d = s.transformers.length - 1; !h && m > 0;) h = s.transformers[d].mProps._mdf || h, m -= 1, d -= 1
                if (h) for (m = g - s.styles[p].lvl, d = s.transformers.length - 1; m > 0;) u = s.transformers[d].mProps.v.props, c.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), m -= 1, d -= 1
              } else c = t
              if (n = (f = s.sh.paths)._length, h) {
                for (o = '', a = 0; a < n; a += 1) (l = f.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, c))
                s.caches[p] = o
              } else o = s.caches[p]
              s.styles[p].d += !0 === i.hd ? '' : o, s.styles[p]._mdf = h || s.styles[p]._mdf
            }
          }

          function a (t, e, i) {
            const s = e.style;
            (e.c._mdf || i) && s.pElem.setAttribute('fill', 'rgb(' + bmFloor(e.c.v[0]) + ',' + bmFloor(e.c.v[1]) + ',' + bmFloor(e.c.v[2]) + ')'), (e.o._mdf || i) && s.pElem.setAttribute('fill-opacity', e.o.v)
          }

          function n (t, e, i) {
            o(t, e, i), h(0, e, i)
          }

          function o (t, e, i) {
            let s
            let r
            let a
            let n
            let o
            const h = e.gf
            const l = e.g._hasOpacity
            const p = e.s.v
            const f = e.e.v
            if (e.o._mdf || i) {
              const c = t.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity'
              e.style.pElem.setAttribute(c, e.o.v)
            }
            if (e.s._mdf || i) {
              const u = t.t === 1 ? 'x1' : 'cx'
              const m = u === 'x1' ? 'y1' : 'cy'
              h.setAttribute(u, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]))
            }
            if (e.g._cmdf || i) {
              s = e.cst
              const d = e.g.c
              for (a = s.length, r = 0; r < a; r += 1) (n = s[r]).setAttribute('offset', d[4 * r] + '%'), n.setAttribute('stop-color', 'rgb(' + d[4 * r + 1] + ',' + d[4 * r + 2] + ',' + d[4 * r + 3] + ')')
            }
            if (l && (e.g._omdf || i)) {
              const $ = e.g.o
              for (a = (s = e.g._collapsable ? e.cst : e.ost).length, r = 0; r < a; r += 1) n = s[r], e.g._collapsable || n.setAttribute('offset', $[2 * r] + '%'), n.setAttribute('stop-opacity', $[2 * r + 1])
            }
            if (t.t === 1) (e.e._mdf || i) && (h.setAttribute('x2', f[0]), h.setAttribute('y2', f[1]), l && !e.g._collapsable && (e.of.setAttribute('x2', f[0]), e.of.setAttribute('y2', f[1]))); else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute('r', o), l && !e.g._collapsable && e.of.setAttribute('r', o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
              o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)))
              const g = Math.atan2(f[1] - p[1], f[0] - p[0])
              let _ = e.h.v
              _ >= 1 ? _ = 0.99 : _ <= -1 && (_ = -0.99)
              const v = o * _
              const y = Math.cos(g + e.a.v) * v + p[0]
              const b = Math.sin(g + e.a.v) * v + p[1]
              h.setAttribute('fx', y), h.setAttribute('fy', b), l && !e.g._collapsable && (e.of.setAttribute('fx', y), e.of.setAttribute('fy', b))
            }
          }

          function h (t, e, i) {
            const s = e.style
            const r = e.d
            r && (r._mdf || i) && r.dashStr && (s.pElem.setAttribute('stroke-dasharray', r.dashStr), s.pElem.setAttribute('stroke-dashoffset', r.dashoffset[0])), e.c && (e.c._mdf || i) && s.pElem.setAttribute('stroke', 'rgb(' + bmFloor(e.c.v[0]) + ',' + bmFloor(e.c.v[1]) + ',' + bmFloor(e.c.v[2]) + ')'), (e.o._mdf || i) && s.pElem.setAttribute('stroke-opacity', e.o.v), (e.w._mdf || i) && (s.pElem.setAttribute('stroke-width', e.w.v), s.msElem && s.msElem.setAttribute('stroke-width', e.w.v))
          }

          return {
            createRenderFunction: function (t) {
              switch (t.ty) {
                case 'fl':
                  return a
                case 'gf':
                  return o
                case 'gs':
                  return n
                case 'st':
                  return h
                case 'sh':
                case 'el':
                case 'rc':
                case 'sr':
                  return r
                case 'tr':
                  return i
                case 'no':
                  return s
                default:
                  return null
              }
            }
          }
        }())

        function SVGShapeElement (t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
        }

        function LetterProps (t, e, i, s, r, a) {
          this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = r, this.p = a, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!i,
            fc: !!s,
            m: !0,
            p: !0
          }
        }

        function TextProperty (t, e) {
          this._frameId = initialDefaultFrame, this.pv = '', this.v = '', this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: '',
            fStyle: '',
            fWeight: '',
            fc: '',
            j: '',
            justifyOffset: '',
            l: [],
            lh: 0,
            lineWidths: [],
            ls: '',
            of: '',
            s: '',
            sc: '',
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }

        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {
        }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function () {
        }, SVGShapeElement.prototype.createContent = function () {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function () {
          let t
          let e
          let i
          let s
          const r = this.shapes.length
          const a = this.stylesList.length
          const n = []
          let o = !1
          for (i = 0; i < a; i += 1) {
            for (s = this.stylesList[i], o = !1, n.length = 0, t = 0; t < r; t += 1) (e = this.shapes[t]).styles.indexOf(s) !== -1 && (n.push(e), o = e._isAnimated || o)
            n.length > 1 && o && this.setShapesAsAnimated(n)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
          let e
          const i = t.length
          for (e = 0; e < i; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function (t, e) {
          let i
          const s = new SVGStyleData(t, e)
          const r = s.pElem
          return t.ty === 'st' ? i = new SVGStrokeStyleData(this, t, s) : t.ty === 'fl' ? i = new SVGFillStyleData(this, t, s) : t.ty === 'gf' || t.ty === 'gs' ? (i = new (t.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), r.setAttribute('mask', 'url(' + getLocationHref() + '#' + i.maskId + ')'))) : t.ty === 'no' && (i = new SVGNoStyleData(this, t, s)), t.ty !== 'st' && t.ty !== 'gs' || (r.setAttribute('stroke-linecap', lineCapEnum[t.lc || 2]), r.setAttribute('stroke-linejoin', lineJoinEnum[t.lj || 2]), r.setAttribute('fill-opacity', '0'), t.lj === 1 && r.setAttribute('stroke-miterlimit', t.ml)), t.r === 2 && r.setAttribute('fill-rule', 'evenodd'), t.ln && r.setAttribute('id', t.ln), t.cl && r.setAttribute('class', t.cl), t.bm && (r.style['mix-blend-mode'] = getBlendMode(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createGroupElement = function (t) {
          const e = new ShapeGroupData()
          return t.ln && e.gr.setAttribute('id', t.ln), t.cl && e.gr.setAttribute('class', t.cl), t.bm && (e.gr.style['mix-blend-mode'] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function (t, e) {
          const i = TransformPropertyFactory.getTransformProperty(this, t, this)
          const s = new SVGTransformData(i, i.o, e)
          return this.addToAnimatedContents(t, s), s
        }, SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
          let s = 4
          t.ty === 'rc' ? s = 5 : t.ty === 'el' ? s = 6 : t.ty === 'sr' && (s = 7)
          const r = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, s, this))
          return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
          for (let i = 0, s = this.animatedContents.length; i < s;) {
            if (this.animatedContents[i].element === e) return
            i += 1
          }
          this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t })
        }, SVGShapeElement.prototype.setElementStyles = function (t) {
          let e
          const i = t.styles
          const s = this.stylesList.length
          for (e = 0; e < s; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0
          let t
          let e = this.itemsData.length
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t]
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue()
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function (t, e, i, s, r, a, n) {
          let o
          let h
          let l
          let p
          let f
          let c
          const u = [].concat(a)
          let m = t.length - 1
          const d = []
          const $ = []
          for (o = m; o >= 0; o -= 1) {
            if ((c = this.searchProcessedElement(t[o])) ? e[o] = i[c - 1] : t[o]._render = n, t[o].ty === 'fl' || t[o].ty === 'st' || t[o].ty === 'gf' || t[o].ty === 'gs' || t[o].ty === 'no') c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && e[o].style.pElem.parentNode !== s && s.appendChild(e[o].style.pElem), d.push(e[o].style); else if (t[o].ty === 'gr') {
              if (c) for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h]; else e[o] = this.createGroupElement(t[o])
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, u, n), t[o]._render && e[o].gr.parentNode !== s && s.appendChild(e[o].gr)
            } else t[o].ty === 'tr' ? (c || (e[o] = this.createTransformElement(t[o], s)), p = e[o].transform, u.push(p)) : t[o].ty === 'sh' || t[o].ty === 'rc' || t[o].ty === 'el' || t[o].ty === 'sr' ? (c || (e[o] = this.createShapeElement(t[o], u, r)), this.setElementStyles(e[o])) : t[o].ty === 'tm' || t[o].ty === 'rd' || t[o].ty === 'ms' || t[o].ty === 'pb' || t[o].ty === 'zz' || t[o].ty === 'op' ? (c ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), $.push(f)) : t[o].ty === 'rp' && (c ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = !1), $.push(f))
            this.addProcessedElement(t[o], o + 1)
          }
          for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0
          for (m = $.length, o = 0; o < m; o += 1) $[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function () {
          this.renderModifiers()
          let t
          const e = this.stylesList.length
          for (t = 0; t < e; t += 1) this.stylesList[t].reset()
          for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute('d', this.stylesList[t].d), this.stylesList[t].d = 'M0 0' + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute('d', this.stylesList[t].d || 'M0 0'))
        }, SVGShapeElement.prototype.renderShape = function () {
          let t
          let e
          const i = this.animatedContents.length
          for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function () {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function (t, e, i, s, r, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1
          let n = !1
          return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, n = !0), this.m !== r && (this.m = r, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) {
          for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          return t
        }, TextProperty.prototype.setCurrentData = function (t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function () {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function () {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function (t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function (t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t
            const e = this.currentData
            const i = this.keysIndex
            if (this.lock) this.setCurrentData(this.currentData); else {
              this.lock = !0, this._mdf = !1
              let s
              const r = this.effectsSequence.length
              let a = t || this.data.d.k[this.keysIndex].s
              for (s = 0; s < r; s += 1) a = i !== this.keysIndex ? this.effectsSequence[s](a, a.t) : this.effectsSequence[s](this.currentData, a.t)
              e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function () {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e);) i += 1
          return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function (t) {
          for (var e, i, s = [], r = 0, a = t.length, n = !1; r < a;) e = t.charCodeAt(r), FontManager.isCombinedCharacter(e) ? s[s.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(r + 1)) >= 56320 && i <= 57343 ? (n || FontManager.isModifier(e, i) ? (s[s.length - 1] += t.substr(r, 2), n = !1) : s.push(t.substr(r, 2)), r += 1) : s.push(t.charAt(r)) : e > 56319 ? (i = t.charCodeAt(r + 1), FontManager.isZeroWidthJoiner(e, i) ? (n = !0, s[s.length - 1] += t.substr(r, 2), r += 1) : s.push(t.charAt(r))) : FontManager.isZeroWidthJoiner(e) ? (s[s.length - 1] += t.charAt(r), n = !0) : s.push(t.charAt(r)), r += 1
          return s
        }, TextProperty.prototype.completeTextData = function (t) {
          t.__complete = !0
          let e
          let i
          let s
          let r
          let a
          let n
          let o
          const h = this.elem.globalData.fontManager
          const l = this.data
          const p = []
          let f = 0
          const c = l.m.g
          let u = 0
          let m = 0
          let d = 0
          const $ = []
          let g = 0
          let _ = 0
          const v = h.getFontByName(t.f)
          let y = 0
          const b = getFontProperties(v)
          t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh
          let x
          let k = t.tr / 1e3 * t.finalSize
          if (t.sz) {
            for (var w, A, P = !0, C = t.sz[0], E = t.sz[1]; P;) {
              w = 0, g = 0, i = (A = this.buildFinalText(t.t)).length, k = t.tr / 1e3 * t.finalSize
              let D = -1
              for (e = 0; e < i; e += 1) x = A[e].charCodeAt(0), s = !1, A[e] === ' ' ? D = e : x !== 13 && x !== 3 || (g = 0, s = !0, w += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(A[e], v.fStyle, v.fFamily), y = s ? 0 : o.w * t.finalSize / 100) : y = h.measureText(A[e], t.f, t.finalSize), g + y > C && A[e] !== ' ' ? (D === -1 ? i += 1 : e = D, w += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, D === e ? 1 : 0, '\r'), D = -1, g = 0) : (g += y, g += k)
              w += v.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && E < w ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, i = t.finalText.length, P = !1)
            }
          }
          g = -k, y = 0
          let S
          let T = 0
          for (e = 0; e < i; e += 1) {
            if (s = !1, (x = (S = t.finalText[e]).charCodeAt(0)) === 13 || x === 3 ? (T = 0, $.push(g), _ = g > _ ? g : _, g = -2 * k, r = '', s = !0, d += 1) : r = S, h.chars ? (o = h.getCharData(S, v.fStyle, h.getFontByName(t.f).fFamily), y = s ? 0 : o.w * t.finalSize / 100) : y = h.measureText(r, t.f, t.finalSize), S === ' ' ? T += y + k : (g += y + k + T, T = 0), p.push({
              l: y,
              an: y,
              add: u,
              n: s,
              anIndexes: [],
              val: r,
              line: d,
              animatorJustifyOffset: 0
            }), c == 2) {
              if (u += y, r === '' || r === ' ' || e === i - 1) {
                for (r !== '' && r !== ' ' || (u -= y); m <= e;) p[m].an = u, p[m].ind = f, p[m].extra = y, m += 1
                f += 1, u = 0
              }
            } else if (c == 3) {
              if (u += y, r === '' || e === i - 1) {
                for (r === '' && (u -= y); m <= e;) p[m].an = u, p[m].ind = f, p[m].extra = y, m += 1
                u = 0, f += 1
              }
            } else p[f].ind = f, p[f].extra = 0, f += 1
          }
          if (t.l = p, _ = g > _ ? g : _, $.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0; else {
            switch (t.boxWidth = _, t.j) {
              case 1:
                t.justifyOffset = -t.boxWidth
                break
              case 2:
                t.justifyOffset = -t.boxWidth / 2
                break
              default:
                t.justifyOffset = 0
            }
          }
          t.lineWidths = $
          let F
          let L
          let M
          let I
          const B = l.a
          n = B.length
          const V = []
          for (a = 0; a < n; a += 1) {
            for ((F = B[a]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), I = 0, M = F.s.b, e = 0; e < i; e += 1) (L = p[e]).anIndexes[a] = I, (M == 1 && L.val !== '' || M == 2 && L.val !== '' && L.val !== ' ' || M == 3 && (L.n || L.val == ' ' || e == i - 1) || M == 4 && (L.n || e == i - 1)) && (F.s.rn === 1 && V.push(I), I += 1)
            l.a[a].s.totalChars = I
            var R
            let z = -1
            if (F.s.rn === 1) for (e = 0; e < i; e += 1) z != (L = p[e]).anIndexes[a] && (z = L.anIndexes[a], R = V.splice(Math.floor(Math.random() * V.length), 1)[0]), L.anIndexes[a] = R
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = v.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function (t, e) {
          e = void 0 === e ? this.keysIndex : e
          let i = this.copyData({}, this.data.d.k[e].s)
          i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function (t) {
          const e = this.data.d.k[t].s
          e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function (t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function (t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }
        const TextSelectorProp = (function () {
          const t = Math.max
          const e = Math.min
          const i = Math.floor

          function s (t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this), this.e = 'e' in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue()
          }

          return s.prototype = {
            getMult: function (s) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue()
              let r = 0
              let a = 0
              let n = 1
              let o = 1
              this.ne.v > 0 ? r = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100
              const h = BezierFactory.getBezierEasing(r, a, n, o).get
              let l = 0
              const p = this.finalS
              const f = this.finalE
              const c = this.data.sh
              if (c === 2) l = h(l = f === p ? s >= f ? 1 : 0 : t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))); else if (c === 3) l = h(l = f === p ? s >= f ? 0 : 1 : 1 - t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))); else if (c === 4) f === p ? l = 0 : (l = t(0, e(0.5 / (f - p) + (s - p) / (f - p), 1))) < 0.5 ? l *= 2 : l = 1 - 2 * (l - 0.5), l = h(l); else if (c === 5) {
                if (f === p) l = 0; else {
                  const u = f - p
                  const m = -u / 2 + (s = e(t(0, s + 0.5 - p), f - p))
                  const d = u / 2
                  l = Math.sqrt(1 - m * m / (d * d))
                }
                l = h(l)
              } else c === 6 ? l = h(l = f === p ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (s = e(t(0, s + 0.5 - p), f - p)) / (f - p))) / 2) : (s >= i(p) && (l = t(0, e(s - p < 0 ? e(f, 1) - (p - s) : f - s, 1))), l = h(l))
              if (this.sm.v !== 100) {
                let $ = 0.01 * this.sm.v
                $ === 0 && ($ = 1e-8)
                const g = 0.5 - 0.5 * $
                l < g ? l = 0 : (l = (l - g) / $) > 1 && (l = 1)
              }
              return l * this.a.v
            },
            getValue: function (t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && this.data.r === 2 && (this.e.v = this._currentTextLength)
              const e = this.data.r === 2 ? 1 : 100 / this.data.totalChars
              const i = this.o.v / e
              let s = this.s.v / e + i
              let r = this.e.v / e + i
              if (s > r) {
                const a = s
                s = r, r = a
              }
              this.finalS = s, this.finalE = r
            }
          }, extendPrototype([DynamicPropertyContainer], s), {
            getTextSelectorProp: function (t, e, i) {
              return new s(t, e, i)
            }
          }
        }())

        function TextAnimatorDataProperty (t, e, i) {
          const s = { propType: !1 }
          const r = PropertyFactory.getProp
          const a = e.a
          this.a = {
            r: a.r ? r(t, a.r, 0, degToRads, i) : s,
            rx: a.rx ? r(t, a.rx, 0, degToRads, i) : s,
            ry: a.ry ? r(t, a.ry, 0, degToRads, i) : s,
            sk: a.sk ? r(t, a.sk, 0, degToRads, i) : s,
            sa: a.sa ? r(t, a.sa, 0, degToRads, i) : s,
            s: a.s ? r(t, a.s, 1, 0.01, i) : s,
            a: a.a ? r(t, a.a, 1, 0, i) : s,
            o: a.o ? r(t, a.o, 0, 0.01, i) : s,
            p: a.p ? r(t, a.p, 1, 0, i) : s,
            sw: a.sw ? r(t, a.sw, 0, 0, i) : s,
            sc: a.sc ? r(t, a.sc, 1, 0, i) : s,
            fc: a.fc ? r(t, a.fc, 1, 0, i) : s,
            fh: a.fh ? r(t, a.fh, 0, 0, i) : s,
            fs: a.fs ? r(t, a.fs, 0, 0.01, i) : s,
            fb: a.fb ? r(t, a.fb, 0, 0.01, i) : s,
            t: a.t ? r(t, a.t, 0, 0, i) : s
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
        }

        function TextAnimatorProperty (t, e, i) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
        }

        function ITextElement () {
        }

        TextAnimatorProperty.prototype.searchProperties = function () {
          let t
          let e
          const i = this._textData.a.length
          const s = PropertyFactory.getProp
          for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this)
          this._textData.p && 'm' in this._textData.p
            ? (this._pathData = {
                a: s(this._elem, this._textData.p.a, 0, 0, this),
                f: s(this._elem, this._textData.p.f, 0, 0, this),
                l: s(this._elem, this._textData.p.l, 0, 0, this),
                r: s(this._elem, this._textData.p.r, 0, 0, this),
                p: s(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
              }, this._hasMaskedPath = !0)
            : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1
            let i
            let s
            let r
            let a
            let n
            let o
            let h
            let l
            let p
            let f
            let c
            let u
            let m
            let d
            let $
            let g
            let _
            let v
            let y
            const b = this._moreOptions.alignment.v
            const x = this._animatorsData
            const k = this._textData
            const w = this.mHelper
            const A = this._renderType
            let P = this.renderedLetters.length
            const C = t.l
            if (this._hasMaskedPath) {
              if (y = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                let E
                let D = y.v
                for (this._pathData.r.v && (D = D.reverse()), n = {
                  tLength: 0,
                  segments: []
                }, a = D._length - 1, g = 0, r = 0; r < a; r += 1) E = bez.buildBezierData(D.v[r], D.v[r + 1], [D.o[r][0] - D.v[r][0], D.o[r][1] - D.v[r][1]], [D.i[r + 1][0] - D.v[r + 1][0], D.i[r + 1][1] - D.v[r + 1][1]]), n.tLength += E.segmentLength, n.segments.push(E), g += E.segmentLength
                r = a, y.v.c && (E = bez.buildBezierData(D.v[r], D.v[0], [D.o[r][0] - D.v[r][0], D.o[r][1] - D.v[r][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), n.tLength += E.segmentLength, n.segments.push(E), g += E.segmentLength), this._pathData.pi = n
              }
              if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, d = n.segments, o < 0 && y.v.c) for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (m = d[c = d.length - 1].points).length - 1; o < 0;) o += m[f].partialLength, (f -= 1) < 0 && (f = (m = d[c -= 1].points).length - 1)
              u = (m = d[c].points)[f - 1], $ = (h = m[f]).partialLength
            }
            a = C.length, i = 0, s = 0
            let S
            let T
            let F
            let L
            let M
            const I = 1.2 * t.finalSize * 0.714
            let B = !0
            F = x.length
            let V
            let R
            let z
            let O
            let G
            let N
            let q
            let j
            let W
            let Y
            let H
            let X
            let K = -1
            const Z = o
            const J = c
            const U = f
            let Q = -1
            let tt = ''
            let te = this.defaultPropsArray
            if (t.j === 2 || t.j === 1) {
              let ti = 0
              let ts = 0
              const tr = t.j === 2 ? -0.5 : -1
              let ta = 0
              let tn = !0
              for (r = 0; r < a; r += 1) {
                if (C[r].n) {
                  for (ti && (ti += ts); ta < r;) C[ta].animatorJustifyOffset = ti, ta += 1
                  ti = 0, tn = !0
                } else {
                  for (T = 0; T < F; T += 1) (S = x[T].a).t.propType && (tn && t.j === 2 && (ts += S.t.v * tr), (M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars)).length ? ti += S.t.v * M[0] * tr : ti += S.t.v * M * tr)
                  tn = !1
                }
              }
              for (ti && (ti += ts); ta < r;) C[ta].animatorJustifyOffset = ti, ta += 1
            }
            for (r = 0; r < a; r += 1) {
              if (w.reset(), O = 1, C[r].n) i = 0, s += t.yOffset, s += B ? 1 : 0, o = Z, B = !1, this._hasMaskedPath && (f = U, u = (m = d[c = J].points)[f - 1], $ = (h = m[f]).partialLength, l = 0), tt = '', H = '', W = '', X = '', te = this.defaultPropsArray; else {
                if (this._hasMaskedPath) {
                  if (Q !== C[r].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[C[r].line]
                        break
                      case 2:
                        o += (g - t.lineWidths[C[r].line]) / 2
                    }
                    Q = C[r].line
                  }
                  K !== C[r].ind && (C[K] && (o += C[K].extra), o += C[r].an / 2, K = C[r].ind), o += b[0] * C[r].an * 0.005
                  let to = 0
                  for (T = 0; T < F; T += 1) (S = x[T].a).p.propType && ((M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars)).length ? to += S.p.v[0] * M[0] : to += S.p.v[0] * M), S.a.propType && ((M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars)).length ? to += S.a.v[0] * M[0] : to += S.a.v[0] * M)
                  for (p = !0, this._pathData.a.v && (o = 0.5 * C[0].an + (g - this._pathData.f.v - 0.5 * C[0].an - 0.5 * C[C.length - 1].an) * K / (a - 1), o += this._pathData.f.v); p;) l + $ >= o + to || !m ? (_ = (o + to - l) / h.partialLength, R = u.point[0] + (h.point[0] - u.point[0]) * _, z = u.point[1] + (h.point[1] - u.point[1]) * _, w.translate(-b[0] * C[r].an * 0.005, -b[1] * I * 0.01), p = !1) : m && (l += h.partialLength, (f += 1) >= m.length && (f = 0, d[c += 1] ? m = d[c].points : y.v.c ? (f = 0, m = d[c = 0].points) : (l -= h.partialLength, m = null)), m && (u = h, $ = (h = m[f]).partialLength))
                  V = C[r].an / 2 - C[r].add, w.translate(-V, 0, 0)
                } else V = C[r].an / 2 - C[r].add, w.translate(-V, 0, 0), w.translate(-b[0] * C[r].an * 0.005, -b[1] * I * 0.01, 0)
                for (T = 0; T < F; T += 1) (S = x[T].a).t.propType && (M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars), i === 0 && t.j === 0 || (this._hasMaskedPath ? M.length ? o += S.t.v * M[0] : o += S.t.v * M : M.length ? i += S.t.v * M[0] : i += S.t.v * M))
                for (t.strokeWidthAnim && (N = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), T = 0; T < F; T += 1) (S = x[T].a).a.propType && ((M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars)).length ? w.translate(-S.a.v[0] * M[0], -S.a.v[1] * M[1], S.a.v[2] * M[2]) : w.translate(-S.a.v[0] * M, -S.a.v[1] * M, S.a.v[2] * M))
                for (T = 0; T < F; T += 1) (S = x[T].a).s.propType && ((M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars)).length ? w.scale(1 + (S.s.v[0] - 1) * M[0], 1 + (S.s.v[1] - 1) * M[1], 1) : w.scale(1 + (S.s.v[0] - 1) * M, 1 + (S.s.v[1] - 1) * M, 1))
                for (T = 0; T < F; T += 1) {
                  if (S = x[T].a, M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars), S.sk.propType && (M.length ? w.skewFromAxis(-S.sk.v * M[0], S.sa.v * M[1]) : w.skewFromAxis(-S.sk.v * M, S.sa.v * M)), S.r.propType && (M.length ? w.rotateZ(-S.r.v * M[2]) : w.rotateZ(-S.r.v * M)), S.ry.propType && (M.length ? w.rotateY(S.ry.v * M[1]) : w.rotateY(S.ry.v * M)), S.rx.propType && (M.length ? w.rotateX(S.rx.v * M[0]) : w.rotateX(S.rx.v * M)), S.o.propType && (M.length ? O += (S.o.v * M[0] - O) * M[0] : O += (S.o.v * M - O) * M), t.strokeWidthAnim && S.sw.propType && (M.length ? N += S.sw.v * M[0] : N += S.sw.v * M), t.strokeColorAnim && S.sc.propType) for (j = 0; j < 3; j += 1) M.length ? G[j] += (S.sc.v[j] - G[j]) * M[0] : G[j] += (S.sc.v[j] - G[j]) * M
                  if (t.fillColorAnim && t.fc) {
                    if (S.fc.propType) for (j = 0; j < 3; j += 1) M.length ? q[j] += (S.fc.v[j] - q[j]) * M[0] : q[j] += (S.fc.v[j] - q[j]) * M
                    S.fh.propType && (q = M.length ? addHueToRGB(q, S.fh.v * M[0]) : addHueToRGB(q, S.fh.v * M)), S.fs.propType && (q = M.length ? addSaturationToRGB(q, S.fs.v * M[0]) : addSaturationToRGB(q, S.fs.v * M)), S.fb.propType && (q = M.length ? addBrightnessToRGB(q, S.fb.v * M[0]) : addBrightnessToRGB(q, S.fb.v * M))
                  }
                }
                for (T = 0; T < F; T += 1) (S = x[T].a).p.propType && (M = x[T].s.getMult(C[r].anIndexes[T], k.a[T].s.totalChars), this._hasMaskedPath ? M.length ? w.translate(0, S.p.v[1] * M[0], -S.p.v[2] * M[1]) : w.translate(0, S.p.v[1] * M, -S.p.v[2] * M) : M.length ? w.translate(S.p.v[0] * M[0], S.p.v[1] * M[1], -S.p.v[2] * M[2]) : w.translate(S.p.v[0] * M, S.p.v[1] * M, -S.p.v[2] * M))
                if (t.strokeWidthAnim && (W = N < 0 ? 0 : N), t.strokeColorAnim && (Y = 'rgb(' + Math.round(255 * G[0]) + ',' + Math.round(255 * G[1]) + ',' + Math.round(255 * G[2]) + ')'), t.fillColorAnim && t.fc && (H = 'rgb(' + Math.round(255 * q[0]) + ',' + Math.round(255 * q[1]) + ',' + Math.round(255 * q[2]) + ')'), this._hasMaskedPath) {
                  if (w.translate(0, -t.ls), w.translate(0, b[1] * I * 0.01 + s, 0), this._pathData.p.v) {
                    let th = 180 * Math.atan(v = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0])) / Math.PI
                    h.point[0] < u.point[0] && (th += 180), w.rotate(-th * Math.PI / 180)
                  }
                  w.translate(R, z, 0), o -= b[0] * C[r].an * 0.005, C[r + 1] && K !== C[r + 1].ind && (o += C[r].an / 2, o += 0.001 * t.tr * t.finalSize)
                } else {
                  switch (w.translate(i, s, 0), t.ps && w.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      w.translate(C[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[r].line]), 0, 0)
                      break
                    case 2:
                      w.translate(C[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[C[r].line]) / 2, 0, 0)
                  }
                  w.translate(0, -t.ls), w.translate(V, 0, 0), w.translate(b[0] * C[r].an * 0.005, b[1] * I * 0.01, 0), i += C[r].l + 0.001 * t.tr * t.finalSize
                }
                A === 'html' ? tt = w.toCSS() : A === 'svg' ? tt = w.to2dCSS() : te = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], X = O
              }
              P <= r ? (L = new LetterProps(X, W, Y, H, tt, te), this.renderedLetters.push(L), P += 1, this.lettersChangedFlag = !0) : (L = this.renderedLetters[r], this.lettersChangedFlag = L.update(X, W, Y, H, tt, te) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function () {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function (t, e, i) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function (t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        }, ITextElement.prototype.createPathShape = function (t, e) {
          let i
          let s
          const r = e.length
          let a = ''
          for (i = 0; i < r; i += 1) e[i].ty === 'sh' && (a += buildShapeString(s = e[i].ks.k, s.i.length, !0, t))
          return a
        }, ITextElement.prototype.updateDocumentData = function (t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function (t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function (t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, i, s, r) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0)
              break
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
          }
          e.translate(s, r, 0)
        }, ITextElement.prototype.buildColor = function (t) {
          return 'rgb(' + Math.round(255 * t[0]) + ',' + Math.round(255 * t[1]) + ',' + Math.round(255 * t[2]) + ')'
        }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function () {
        }
        const emptyShapeData = { shapes: [] }

        function SVGTextLottieElement (t, e, i) {
          this.textSpans = [], this.renderType = 'svg', this.initElement(t, e, i)
        }

        function ISolidElement (t, e, i) {
          this.initElement(t, e, i)
        }

        function NullElement (t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
        }

        function SVGRendererBase () {
        }

        function ICompElement () {
        }

        function SVGCompElement (t, e, i) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 }
        }

        function SVGRenderer (t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS('svg')
          let i = ''
          if (e && e.title) {
            const s = createNS('title')
            const r = createElementID()
            s.setAttribute('id', r), s.textContent = e.title, this.svgElement.appendChild(s), i += r
          }
          if (e && e.description) {
            const a = createNS('desc')
            const n = createElementID()
            a.setAttribute('id', n), a.textContent = e.description, this.svgElement.appendChild(a), i += ' ' + n
          }
          i && this.svgElement.setAttribute('aria-labelledby', i)
          const o = createNS('defs')
          this.svgElement.appendChild(o)
          const h = createNS('g')
          this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || 'xMidYMid meet',
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || 'xMidYMid slice',
            contentVisibility: e && e.contentVisibility || 'visible',
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || '',
            id: e && e.id || '',
            focusable: e && e.focusable,
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || '100%',
              height: e && e.filterSize && e.filterSize.height || '100%',
              x: e && e.filterSize && e.filterSize.x || '0%',
              y: e && e.filterSize && e.filterSize.y || '0%'
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = 'svg'
        }

        function CVContextData () {
          let t
          for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1, this.savedOp = createTypedArray('float32', 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray('float32', 16)
          this._length = 15
        }

        function ShapeTransformManager () {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function () {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS('text'))
        }, SVGTextLottieElement.prototype.buildTextContents = function (t) {
          for (var e = 0, i = t.length, s = [], r = ''; e < i;) t[e] === '\r' || t[e] === '\x03' ? (s.push(r), r = '') : r += t[e], e += 1
          return s.push(r), s
        }, SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
          if (t.shapes && t.shapes.length) {
            const i = t.shapes[0]
            if (i.it) {
              const s = i.it[i.it.length - 1]
              s.s && (s.s.k[0] = e, s.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function () {
          this.addDynamicProperty(this)
          const t = this.textProperty.currentData
          this.renderedLetters = createSizedArray(t ? t.l.length : 0), t.fc ? this.layerElement.setAttribute('fill', this.buildColor(t.fc)) : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'), t.sc && (this.layerElement.setAttribute('stroke', this.buildColor(t.sc)), this.layerElement.setAttribute('stroke-width', t.sw)), this.layerElement.setAttribute('font-size', t.finalSize)
          const e = this.globalData.fontManager.getFontByName(t.f)
          if (e.fClass) this.layerElement.setAttribute('class', e.fClass); else {
            this.layerElement.setAttribute('font-family', e.fFamily)
            const i = t.fWeight
            const s = t.fStyle
            this.layerElement.setAttribute('font-style', s), this.layerElement.setAttribute('font-weight', i)
          }
          this.layerElement.setAttribute('aria-label', t.t)
          let r
          let a
          let n
          const o = t.l || []
          const h = !!this.globalData.fontManager.chars
          a = o.length
          const l = this.mHelper
          const p = this.data.singleShape
          let f = 0
          let c = 0
          let u = !0
          const m = 0.001 * t.tr * t.finalSize
          if (!p || h || t.sz) {
            let d
            const $ = this.textSpans.length
            for (r = 0; r < a; r += 1) {
              if (this.textSpans[r] || (this.textSpans[r] = {
                span: null,
                childSpan: null,
                glyph: null
              }), !h || !p || r === 0) {
                if (n = $ > r ? this.textSpans[r].span : createNS(h ? 'g' : 'text'), $ <= r) {
                  if (n.setAttribute('stroke-linecap', 'butt'), n.setAttribute('stroke-linejoin', 'round'), n.setAttribute('stroke-miterlimit', '4'), this.textSpans[r].span = n, h) {
                    var g
                    const _ = createNS('g')
                    n.appendChild(_), this.textSpans[r].childSpan = _
                  }
                  this.textSpans[r].span = n, this.layerElement.appendChild(n)
                }
                n.style.display = 'inherit'
              }
              if (l.reset(), p && (o[r].n && (f = -m, c += t.yOffset, c += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(t, l, o[r].line, f, c), f += o[r].l || 0, f += m), h) {
                if ((d = this.globalData.fontManager.getCharData(t.finalText[r], e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)).t === 1) g = new SVGCompElement(d.data, this.globalData, this); else {
                  let v = emptyShapeData
                  d.data && d.data.shapes && (v = this.buildShapeData(d.data, t.finalSize)), g = new SVGShapeElement(v, this.globalData, this)
                }
                if (this.textSpans[r].glyph) {
                  const y = this.textSpans[r].glyph
                  this.textSpans[r].childSpan.removeChild(y.layerElement), y.destroy()
                }
                this.textSpans[r].glyph = g, g._debug = !0, g.prepareFrame(0), g.renderFrame(), this.textSpans[r].childSpan.appendChild(g.layerElement), d.t === 1 && this.textSpans[r].childSpan.setAttribute('transform', 'scale(' + t.finalSize / 100 + ',' + t.finalSize / 100 + ')')
              } else p && n.setAttribute('transform', 'translate(' + l.props[12] + ',' + l.props[13] + ')'), n.textContent = o[r].val, n.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve')
            }
            p && n && n.setAttribute('d', '')
          } else {
            const b = this.textContainer
            let x = 'start'
            switch (t.j) {
              case 1:
                x = 'end'
                break
              case 2:
                x = 'middle'
                break
              default:
                x = 'start'
            }
            b.setAttribute('text-anchor', x), b.setAttribute('letter-spacing', m)
            const k = this.buildTextContents(t.finalText)
            for (a = k.length, c = t.ps ? t.ps[1] + t.ascent : 0, r = 0; r < a; r += 1) {
              (n = this.textSpans[r].span || createNS('tspan')).textContent = k[r], n.setAttribute('x', 0), n.setAttribute('y', c), n.style.display = 'inherit', b.appendChild(n), this.textSpans[r] || (this.textSpans[r] = {
                span: null,
                glyph: null
              }), this.textSpans[r].span = n, c += t.finalLineHeight
            }
            this.layerElement.appendChild(b)
          }
          for (; r < this.textSpans.length;) this.textSpans[r].span.style.display = 'none', r += 1
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function () {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1
            const t = this.layerElement.getBBox()
            this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function () {
          let t
          let e
          const i = this.textSpans.length
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1) (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function () {
          if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            this._sizeChanged = !0
            let t
            let e
            let i
            let s
            let r
            const a = this.textAnimator.renderedLetters
            const n = this.textProperty.currentData.l
            for (e = n.length, t = 0; t < e; t += 1) n[t].n || (i = a[t], s = this.textSpans[t].span, (r = this.textSpans[t].glyph) && r.renderFrame(), i._mdf.m && s.setAttribute('transform', i.m), i._mdf.o && s.setAttribute('opacity', i.o), i._mdf.sw && s.setAttribute('stroke-width', i.sw), i._mdf.sc && s.setAttribute('stroke', i.sc), i._mdf.fc && s.setAttribute('fill', i.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
          const t = createNS('rect')
          t.setAttribute('width', this.data.sw), t.setAttribute('height', this.data.sh), t.setAttribute('fill', this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function () {
        }, NullElement.prototype.getBaseElement = function () {
          return null
        }, NullElement.prototype.destroy = function () {
        }, NullElement.prototype.sourceRectAtTime = function () {
        }, NullElement.prototype.hide = function () {
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function (t) {
          return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function (t) {
          return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function (t) {
          return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function (t) {
          return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function (t) {
          return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function (t) {
          this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'), this.svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink'), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize) : this.svgElement.setAttribute('viewBox', '0 0 ' + t.w + ' ' + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute('width', t.w), this.svgElement.setAttribute('height', t.h), this.svgElement.style.width = '100%', this.svgElement.style.height = '100%', this.svgElement.style.transform = 'translate3d(0,0,0)', this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute('width', this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute('height', this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute('class', this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute('id', this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute('focusable', this.renderConfig.focusable), this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement)
          const e = this.globalData.defs
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t
          const i = createNS('clipPath')
          const s = createNS('rect')
          s.setAttribute('width', t.w), s.setAttribute('height', t.h), s.setAttribute('x', 0), s.setAttribute('y', 0)
          const r = createElementID()
          i.setAttribute('id', r), i.appendChild(s), this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + r + ')'), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function () {
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), this.layerElement = null, this.globalData.defs = null
          let t
          const e = this.layers ? this.layers.length : 0
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy()
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function () {
        }, SVGRendererBase.prototype.findIndexByInd = function (t) {
          let e = 0
          const i = this.layers.length
          for (e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e
          return -1
        }, SVGRendererBase.prototype.buildItem = function (t) {
          const e = this.elements
          if (!e[t] && this.layers[t].ty !== 99) {
            e[t] = !0
            const i = this.createItem(this.layers[t])
            if (e[t] = i, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
              const s = 'tp' in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1
              if (s === -1) return
              if (this.elements[s] && !0 !== this.elements[s]) {
                const r = e[s].getMatte(this.layers[t].tt)
                i.setMatte(r)
              } else this.buildItem(s), this.addPendingElement(i)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length;) {
            const t = this.pendingElements.pop()
            if (t.checkParenting(), t.data.tt) {
              for (let e = 0, i = this.elements.length; e < i;) {
                if (this.elements[e] === t) {
                  const s = 'tp' in t.data ? this.findIndexByInd(t.data.tp) : e - 1
                  const r = this.elements[s].getMatte(this.layers[e].tt)
                  t.setMatte(r)
                  break
                }
                e += 1
              }
            }
          }
        }, SVGRendererBase.prototype.renderFrame = function (t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1
            let e
            const i = this.layers.length
            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st)
            if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function (t, e) {
          const i = t.getBaseElement()
          if (i) {
            for (var s, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (s = this.elements[r].getBaseElement()), r += 1
            s ? this.layerElement.insertBefore(i, s) : this.layerElement.appendChild(i)
          }
        }, SVGRendererBase.prototype.hide = function () {
          this.layerElement.style.display = 'none'
        }, SVGRendererBase.prototype.show = function () {
          this.layerElement.style.display = 'block'
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function (t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr; else {
              let e = this.tm.v
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            let i
            const s = this.elements.length
            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function () {
          let t
          const e = this.layers.length
          for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function (t) {
          this.elements = t
        }, ICompElement.prototype.getElements = function () {
          return this.elements
        }, ICompElement.prototype.destroyElements = function () {
          let t
          const e = this.layers.length
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function () {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function (t) {
          return new SVGCompElement(t, this.globalData, this)
        }, CVContextData.prototype.duplicate = function () {
          const t = 2 * this._length
          const e = this.savedOp
          this.savedOp = createTypedArray('float32', t), this.savedOp.set(e)
          let i = 0
          for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray('float32', 16)
          this._length = t
        }, CVContextData.prototype.reset = function () {
          this.cArrPos = 0, this.cTr.reset(), this.cO = 1
        }, CVContextData.prototype.popTransform = function () {
          let t
          const e = this.saved[this.cArrPos]
          const i = this.cTr.props
          for (t = 0; t < 16; t += 1) i[t] = e[t]
          return e
        }, CVContextData.prototype.popOpacity = function () {
          const t = this.savedOp[this.cArrPos]
          return this.cO = t, t
        }, CVContextData.prototype.pop = function () {
          return this.cArrPos -= 1, { transform: this.popTransform(), opacity: this.popOpacity() }
        }, CVContextData.prototype.push = function () {
          let t
          const e = this.cTr.props
          this._length <= this.cArrPos && this.duplicate()
          const i = this.saved[this.cArrPos]
          for (t = 0; t < 16; t += 1) i[t] = e[t]
          this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
        }, CVContextData.prototype.getTransform = function () {
          return this.cTr
        }, CVContextData.prototype.getOpacity = function () {
          return this.cO
        }, CVContextData.prototype.setOpacity = function (t) {
          this.cO = t
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function (t) {
            let e
            const i = t.length
            let s = '_'
            for (e = 0; e < i; e += 1) s += t[e].transform.key + '_'
            let r = this.sequences[s]
            return r || (r = {
              transforms: [].concat(t),
              finalTransform: new Matrix(),
              _mdf: !1
            }, this.sequences[s] = r, this.sequenceList.push(r)), r
          },
          processSequence: function (t, e) {
            for (var i, s = 0, r = t.transforms.length, a = e; s < r && !e;) {
              if (t.transforms[s].transform.mProps._mdf) {
                a = !0
                break
              }
              s += 1
            }
            if (a) for (t.finalTransform.reset(), s = r - 1; s >= 0; s -= 1) i = t.transforms[s].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15])
            t._mdf = a
          },
          processSequences: function (t) {
            let e
            const i = this.sequenceList.length
            for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function () {
            return this.transform_key_count += 1, '_' + this.transform_key_count
          }
        }
        const lumaLoader = function () {
          const t = '__lottie_element_luma_buffer'
          let e = null
          let i = null
          let s = null

          function r () {
            let r, a, n
            e || (r = createNS('svg'), a = createNS('filter'), n = createNS('feColorMatrix'), a.setAttribute('id', t), n.setAttribute('type', 'matrix'), n.setAttribute('color-interpolation-filters', 'sRGB'), n.setAttribute('values', '0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0'), a.appendChild(n), r.appendChild(a), r.setAttribute('id', t + '_svg'), featureSupport.svgLumaHidden && (r.style.display = 'none'), s = r, document.body.appendChild(s), (i = (e = createTag('canvas')).getContext('2d')).filter = 'url(#' + t + ')', i.fillStyle = 'rgba(0,0,0,0)', i.fillRect(0, 0, 1, 1))
          }

          return {
            load: r,
            get: function (s) {
              return e || r(), e.width = s.width, e.height = s.height, i.filter = 'url(#' + t + ')', e
            }
          }
        }

        function createCanvas (t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e)
          const i = createTag('canvas')
          return i.width = t, i.height = e, i
        }

        const assetLoader = { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas }

        function CVEffects () {
        }

        function CVMaskElement (t, e) {
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length)
          let i
          const s = this.masksProperties.length
          let r = !1
          for (i = 0; i < s; i += 1) this.masksProperties[i].mode !== 'n' && (r = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3)
          this.hasMasks = r, r && this.element.addRenderableComponent(this)
        }

        function CVBaseElement () {
        }

        CVEffects.prototype.renderFrame = function () {
        }, CVMaskElement.prototype.renderFrame = function () {
          if (this.hasMasks) {
            let t
            let e
            let i
            let s
            const r = this.element.finalTransform.mat
            const a = this.element.canvasContext
            const n = this.masksProperties.length
            for (a.beginPath(), t = 0; t < n; t += 1) {
              if (this.masksProperties[t].mode !== 'n') {
                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), s = this.viewData[t].v, e = r.applyToPointArray(s.v[0][0], s.v[0][1], 0), a.moveTo(e[0], e[1])
                var o
                const h = s._length
                for (o = 1; o < h; o += 1) i = r.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
                i = r.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
              }
            }
            this.element.globalData.renderer.save(!0), a.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
          this.element = null
        }
        const operationsMap = { 1: 'source-in', 2: 'source-out', 3: 'source-in', 4: 'source-out' }

        function CVShapeData (t, e, i, s) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0]
          let r
          let a = 4
          e.ty === 'rc' ? a = 5 : e.ty === 'el' ? a = 6 : e.ty === 'sr' && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t)
          let n
          const o = i.length
          for (r = 0; r < o; r += 1) {
            i[r].closed || (n = {
              transforms: s.addTransformSequence(i[r].transforms),
              trNodes: []
            }, this.styledShapes.push(n), i[r].elements.push(n))
          }
        }

        function CVShapeElement (t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, i)
        }

        function CVTextElement (t, e, i) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = 'canvas', this.values = {
            fill: 'rgba(0,0,0,0)',
            stroke: 'rgba(0,0,0,0)',
            sWidth: 0,
            fValue: ''
          }, this.initElement(t, e, i)
        }

        function CVImageElement (t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
        }

        function CVSolidElement (t, e, i) {
          this.initElement(t, e, i)
        }

        function CanvasRendererBase (t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || 'xMidYMid meet',
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || 'xMidYMid slice',
            contentVisibility: e && e.contentVisibility || 'visible',
            className: e && e.className || '',
            id: e && e.id || ''
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = 'canvas'
        }

        function CVCompElement (t, e, i) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 }
        }

        function CanvasRenderer (t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || 'xMidYMid meet',
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || 'xMidYMid slice',
            contentVisibility: e && e.contentVisibility || 'visible',
            className: e && e.className || '',
            id: e && e.id || '',
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = 'canvas'
        }

        function HBaseElement () {
        }

        function HSolidElement (t, e, i) {
          this.initElement(t, e, i)
        }

        function HShapeElement (t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS('g'), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement (t, e, i) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = 'svg', this.isMasked = !1, this.initElement(t, e, i)
        }

        function HCameraElement (t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy()
          const s = PropertyFactory.getProp
          if (this.pe = s(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = s(this, t.ks.p.x, 1, 0, this), this.py = s(this, t.ks.p.y, 1, 0, this), this.pz = s(this, t.ks.p.z, 1, 0, this)) : this.p = s(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = s(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            let r
            const a = t.ks.or.k.length
            for (r = 0; r < a; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null
          }
          this.or = s(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = s(this, t.ks.rx, 0, degToRads, this), this.ry = s(this, t.ks.ry, 0, degToRads, this), this.rz = s(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = { mProp: this }
        }

        function HImageElement (t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
        }

        function HybridRendererBase (t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || '',
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || 'xMidYMid slice',
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || '400%',
              height: e && e.filterSize && e.filterSize.height || '400%',
              x: e && e.filterSize && e.filterSize.x || '-100%',
              y: e && e.filterSize && e.filterSize.y || '-100%'
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = 'html'
        }

        function HCompElement (t, e, i) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 }
        }

        function HybridRenderer (t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || '',
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || 'xMidYMid slice',
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || '400%',
              height: e && e.filterSize && e.filterSize.height || '400%',
              x: e && e.filterSize && e.filterSize.x || '-100%',
              y: e && e.filterSize && e.filterSize.y || '-100%'
            },
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = 'html'
        }

        CVBaseElement.prototype = {
          createElements: function () {
          },
          initRendererElement: function () {
          },
          createContainerElements: function () {
            if (this.data.tt >= 1) {
              this.buffers = []
              const t = this.globalData.canvasContext
              const e = assetLoader.createCanvas(t.canvas.width, t.canvas.height)
              this.buffers.push(e)
              const i = assetLoader.createCanvas(t.canvas.width, t.canvas.height)
              this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this)
          },
          createContent: function () {
          },
          setBlendMode: function () {
            const t = this.globalData
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm
              const e = getBlendMode(this.data.bm)
              t.canvasContext.globalCompositeOperation = e
            }
          },
          createRenderableComponents: function () {
            this.maskManager = new CVMaskElement(this.data, this)
          },
          hideElement: function () {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function () {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function (t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function () {
            if (this.data.tt >= 1) {
              const t = this.buffers[0].getContext('2d')
              this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function () {
            if (this.data.tt >= 1) {
              const t = this.buffers[1]
              const e = t.getContext('2d')
              if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById('tp' in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                const i = assetLoader.getLumaCanvas(this.canvasContext.canvas)
                i.getContext('2d').drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(i, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = 'destination-over', this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = 'source-over'
            }
          },
          renderFrame: function (t) {
            if (!this.hidden && !this.data.hd && (this.data.td !== 1 || t)) {
              this.renderTransform(), this.renderRenderable(), this.setBlendMode()
              const e = this.data.ty === 0
              this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function () {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix()
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function (t, e) {
          const i = {
            data: t,
            type: t.ty,
            preTransforms: this.transformsManager.addTransformSequence(e),
            transforms: [],
            elements: [],
            closed: !0 === t.hd
          }
          const s = {}
          if (t.ty === 'fl' || t.ty === 'st' ? (s.c = PropertyFactory.getProp(this, t.c, 1, 255, this), s.c.k || (i.co = 'rgb(' + bmFloor(s.c.v[0]) + ',' + bmFloor(s.c.v[1]) + ',' + bmFloor(s.c.v[2]) + ')')) : t.ty !== 'gf' && t.ty !== 'gs' || (s.s = PropertyFactory.getProp(this, t.s, 1, null, this), s.e = PropertyFactory.getProp(this, t.e, 1, null, this), s.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), s.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), s.g = new GradientProperty(this, t.g, this)), s.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), t.ty === 'st' || t.ty === 'gs') {
            if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (i.ml = t.ml), s.w = PropertyFactory.getProp(this, t.w, 0, null, this), s.w.k || (i.wi = s.w.v), t.d) {
              const r = new DashProperty(this, t.d, 'canvas', this)
              s.d = r, s.d.k || (i.da = s.d.dashArray, i.do = s.d.dashoffset[0])
            }
          } else i.r = t.r === 2 ? 'evenodd' : 'nonzero'
          return this.stylesList.push(i), s.style = i, s
        }, CVShapeElement.prototype.createGroupElement = function () {
          return { it: [], prevViewData: [] }
        }, CVShapeElement.prototype.createTransformElement = function (t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function (t) {
          const e = new CVShapeData(this, t, this.stylesList, this.transformsManager)
          return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0
          let t
          let e = this.itemsData.length
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t]
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue()
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function (t) {
          let e
          const i = this.stylesList.length
          for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
          let t
          const e = this.stylesList.length
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function (t) {
          let e
          const i = t.length
          for (e = 0; e < i; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function (t, e, i, s, r) {
          let a
          let n
          let o
          let h
          let l
          let p
          let f = t.length - 1
          const c = []
          const u = []
          const m = [].concat(r)
          for (a = f; a >= 0; a -= 1) {
            if ((h = this.searchProcessedElement(t[a])) ? e[a] = i[h - 1] : t[a]._shouldRender = s, t[a].ty === 'fl' || t[a].ty === 'st' || t[a].ty === 'gf' || t[a].ty === 'gs') h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], m), c.push(e[a].style); else if (t[a].ty === 'gr') {
              if (h) for (o = e[a].it.length, n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n]; else e[a] = this.createGroupElement(t[a])
              this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, s, m)
            } else t[a].ty === 'tr' ? (h || (p = this.createTransformElement(t[a]), e[a] = p), m.push(e[a]), this.addTransformToStyleList(e[a])) : t[a].ty === 'sh' || t[a].ty === 'rc' || t[a].ty === 'el' || t[a].ty === 'sr' ? h || (e[a] = this.createShapeElement(t[a])) : t[a].ty === 'tm' || t[a].ty === 'rd' || t[a].ty === 'pb' || t[a].ty === 'zz' || t[a].ty === 'op' ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), u.push(l)) : t[a].ty === 'rp' && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), s = !1), u.push(l))
            this.addProcessedElement(t[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(c), f = u.length, a = 0; a < f; a += 1) u[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function () {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function (t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function () {
          let t
          let e
          let i
          let s
          let r
          let a
          let n
          let o
          let h
          const l = this.stylesList.length
          const p = this.globalData.renderer
          const f = this.globalData.canvasContext
          for (t = 0; t < l; t += 1) {
            if (((o = (h = this.stylesList[t]).type) !== 'st' && o !== 'gs' || h.wi !== 0) && h.data._shouldRender && h.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
              for (p.save(), a = h.elements, o === 'st' || o === 'gs' ? (f.strokeStyle = o === 'st' ? h.co : h.grd, f.lineWidth = h.wi, f.lineCap = h.lc, f.lineJoin = h.lj, f.miterLimit = h.ml || 0) : f.fillStyle = o === 'fl' ? h.co : h.grd, p.ctxOpacity(h.coOp), o !== 'st' && o !== 'gs' && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = a.length, e = 0; e < i; e += 1) {
                for (o !== 'st' && o !== 'gs' || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), r = (n = a[e].trNodes).length, s = 0; s < r; s += 1) n[s].t === 'm' ? f.moveTo(n[s].p[0], n[s].p[1]) : n[s].t === 'c' ? f.bezierCurveTo(n[s].pts[0], n[s].pts[1], n[s].pts[2], n[s].pts[3], n[s].pts[4], n[s].pts[5]) : f.closePath()
                o !== 'st' && o !== 'gs' || (f.stroke(), h.da && f.setLineDash(this.dashResetter))
              }
              o !== 'st' && o !== 'gs' && f.fill(h.r), p.restore()
            }
          }
        }, CVShapeElement.prototype.renderShape = function (t, e, i, s) {
          let r, a
          for (a = t, r = e.length - 1; r >= 0; r -= 1) e[r].ty === 'tr' ? (a = i[r].transform, this.renderShapeTransform(t, a)) : e[r].ty === 'sh' || e[r].ty === 'el' || e[r].ty === 'rc' || e[r].ty === 'sr' ? this.renderPath(e[r], i[r]) : e[r].ty === 'fl' ? this.renderFill(e[r], i[r], a) : e[r].ty === 'st' ? this.renderStroke(e[r], i[r], a) : e[r].ty === 'gf' || e[r].ty === 'gs' ? this.renderGradientFill(e[r], i[r], a) : e[r].ty === 'gr' ? this.renderShape(a, e[r].it, i[r].it) : e[r].ty
          s && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function (t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            let i
            let s
            let r
            const a = t.trNodes
            const n = e.paths
            const o = n._length
            a.length = 0
            const h = t.transforms.finalTransform
            for (r = 0; r < o; r += 1) {
              const l = n.shapes[r]
              if (l && l.v) {
                for (s = l._length, i = 1; i < s; i += 1) {
                  i === 1 && a.push({
                    t: 'm',
                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                  }), a.push({ t: 'c', pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i]) })
                }
                s === 1 && a.push({
                  t: 'm',
                  p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                }), l.c && s && (a.push({
                  t: 'c',
                  pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                }), a.push({ t: 'z' }))
              }
            }
            t.trNodes = a
          }
        }, CVShapeElement.prototype.renderPath = function (t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            let i
            const s = e.styledShapes.length
            for (i = 0; i < s; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function (t, e, i) {
          const s = e.style;
          (e.c._mdf || this._isFirstFrame) && (s.co = 'rgb(' + bmFloor(e.c.v[0]) + ',' + bmFloor(e.c.v[1]) + ',' + bmFloor(e.c.v[2]) + ')'), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
          let s
          const r = e.style
          if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
            let a
            const n = this.globalData.canvasContext
            const o = e.s.v
            const h = e.e.v
            if (t.t === 1) s = n.createLinearGradient(o[0], o[1], h[0], h[1]); else {
              const l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2))
              const p = Math.atan2(h[1] - o[1], h[0] - o[0])
              let f = e.h.v
              f >= 1 ? f = 0.99 : f <= -1 && (f = -0.99)
              const c = l * f
              const u = Math.cos(p + e.a.v) * c + o[0]
              const m = Math.sin(p + e.a.v) * c + o[1]
              s = n.createRadialGradient(u, m, 0, o[0], o[1], l)
            }
            const d = t.g.p
            const $ = e.g.c
            let g = 1
            for (a = 0; a < d; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), s.addColorStop($[4 * a] / 100, 'rgba(' + $[4 * a + 1] + ',' + $[4 * a + 2] + ',' + $[4 * a + 3] + ',' + g + ')')
            r.grd = s
          }
          r.coOp = e.o.v * i.opacity
        }, CVShapeElement.prototype.renderStroke = function (t, e, i) {
          const s = e.style
          const r = e.d
          r && (r._mdf || this._isFirstFrame) && (s.da = r.dashArray, s.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (s.co = 'rgb(' + bmFloor(e.c.v[0]) + ',' + bmFloor(e.c.v[1]) + ',' + bmFloor(e.c.v[2]) + ')'), (e.o._mdf || i._opMdf || this._isFirstFrame) && (s.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (s.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function () {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d'), CVTextElement.prototype.buildNewText = function () {
          const t = this.textProperty.currentData
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0)
          let e = !1
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = 'rgba(0,0,0,0)', this.fill = e
          let i = !1
          t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw)
          let s
          let r
          let a
          let n
          let o
          let h
          let l
          let p
          let f
          let c
          let u
          let m
          const d = this.globalData.fontManager.getFontByName(t.f)
          const $ = t.l
          const g = this.mHelper
          this.stroke = i, this.values.fValue = t.finalSize + 'px ' + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.finalText.length
          const _ = this.data.singleShape
          const v = 0.001 * t.tr * t.finalSize
          let y = 0
          let b = 0
          let x = !0
          let k = 0
          for (s = 0; s < r; s += 1) {
            n = (a = this.globalData.fontManager.getCharData(t.finalText[s], d.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), _ && $[s].n && (y = -v, b += t.yOffset, b += x ? 1 : 0, x = !1), f = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), _ && this.applyTextPropertiesToMatrix(t, g, $[s].line, y, b), u = createSizedArray(f - 1)
            let w = 0
            for (p = 0; p < f; p += 1) {
              if (l[p].ty === 'sh') {
                for (h = l[p].ks.k.i.length, c = l[p].ks.k, m = [], o = 1; o < h; o += 1) o === 1 && m.push(g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), m.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[o][0], c.i[o][1], 0), g.applyToY(c.i[o][0], c.i[o][1], 0), g.applyToX(c.v[o][0], c.v[o][1], 0), g.applyToY(c.v[o][0], c.v[o][1], 0))
                m.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[0][0], c.i[0][1], 0), g.applyToY(c.i[0][0], c.i[0][1], 0), g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), u[w] = m, w += 1
              }
            }
            _ && (y += $[s].l, y += v), this.textSpans[k] ? this.textSpans[k].elem = u : this.textSpans[k] = { elem: u }, k += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function () {
          let t
          let e
          let i
          let s
          let r
          let a
          const n = this.canvasContext
          n.font = this.values.fValue, n.lineCap = 'butt', n.lineJoin = 'miter', n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag)
          let o
          const h = this.textAnimator.renderedLetters
          const l = this.textProperty.currentData.l
          e = l.length
          let p
          let f
          let c = null
          let u = null
          let m = null
          for (t = 0; t < e; t += 1) {
            if (!l[t].n) {
              if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                for (o && o.fc ? c !== o.fc && (c = o.fc, n.fillStyle = o.fc) : c !== this.values.fill && (c = this.values.fill, n.fillStyle = this.values.fill), s = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (a = (f = p[i]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(f[r], f[r + 1], f[r + 2], f[r + 3], f[r + 4], f[r + 5])
                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
              }
              if (this.stroke) {
                for (o && o.sw ? m !== o.sw && (m = o.sw, n.lineWidth = o.sw) : m !== this.values.sWidth && (m = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? u !== o.sc && (u = o.sc, n.strokeStyle = o.sc) : u !== this.values.stroke && (u = this.values.stroke, n.strokeStyle = this.values.stroke), s = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (a = (f = p[i]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(f[r], f[r + 1], f[r + 2], f[r + 3], f[r + 4], f[r + 5])
                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
              }
              o && this.globalData.renderer.restore()
            }
          }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            const t = createTag('canvas')
            t.width = this.assetData.w, t.height = this.assetData.h
            let e
            let i
            const s = t.getContext('2d')
            const r = this.img.width
            const a = this.img.height
            const n = r / a
            const o = this.assetData.w / this.assetData.h
            const h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio
            n > o && h === 'xMidYMid slice' || n < o && h !== 'xMidYMid slice' ? e = (i = a) * o : i = (e = r) / o, s.drawImage(this.img, (r - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }, CVImageElement.prototype.renderInnerContent = function () {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function () {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
          const t = this.canvasContext
          t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function (t) {
          return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function (t) {
          return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function (t) {
          return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function (t) {
          return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function (t) {
          if (t[0] !== 1 || t[1] !== 0 || t[4] !== 0 || t[5] !== 1 || t[12] !== 0 || t[13] !== 0) {
            if (this.renderConfig.clearCanvas) {
              this.transformMat.cloneFromProps(t)
              const e = this.contextData.getTransform()
              const i = e.props
              this.transformMat.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]), e.cloneFromProps(this.transformMat.props)
              const s = e.props
              this.canvasContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13])
            } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
          }
        }, CanvasRendererBase.prototype.ctxOpacity = function (t) {
          let e = this.contextData.getOpacity()
          if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = e)
          e *= t < 0 ? 0 : t, this.contextData.setOpacity(e), this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e)
        }, CanvasRendererBase.prototype.reset = function () {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function (t) {
          this.renderConfig.clearCanvas ? (t && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function (t) {
          if (this.renderConfig.clearCanvas) {
            t && (this.canvasContext.restore(), this.globalData.blendMode = 'source-over')
            const e = this.contextData.pop()
            const i = e.transform
            const s = e.opacity
            this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), this.globalData.currentGlobalAlpha !== s && (this.canvasContext.globalAlpha = s, this.globalData.currentGlobalAlpha = s)
          } else this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function (t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag('canvas')
            const e = this.animationItem.container.style
            e.width = '100%', e.height = '100%'
            const i = '0px 0px 0px'
            e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e['-webkit-transform'] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext('2d'), this.renderConfig.className && this.animationItem.container.setAttribute('class', this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute('id', this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context
          this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
          let i, s, r, a
          if (this.reset(), t ? (i = t, s = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = s) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, s = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, s = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = s * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1) {
            const n = this.renderConfig.preserveAspectRatio.split(' ')
            const o = n[1] || 'meet'
            const h = n[0] || 'xMidYMid'
            const l = h.substr(0, 4)
            const p = h.substr(4)
            r = i / s, (a = this.transformCanvas.w / this.transformCanvas.h) > r && o === 'meet' || a < r && o === 'slice' ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = l === 'xMid' && (a < r && o === 'meet' || a > r && o === 'slice') ? (i - this.transformCanvas.w * (s / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : l === 'xMax' && (a < r && o === 'meet' || a > r && o === 'slice') ? (i - this.transformCanvas.w * (s / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = p === 'YMid' && (a > r && o === 'meet' || a < r && o === 'slice') ? (s - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : p === 'YMax' && (a > r && o === 'meet' || a < r && o === 'slice') ? (s - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else this.renderConfig.preserveAspectRatio === 'none' ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0)
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function () {
          let t
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy()
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function (t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && t !== -1) {
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t
            let i
            const s = this.layers.length
            for (this.completeLayers || this.checkLayers(t), i = 0; i < s; i += 1) (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st)
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = s - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame()
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function (t) {
          const e = this.elements
          if (!e[t] && this.layers[t].ty !== 99) {
            const i = this.createItem(this.layers[t], this, this.globalData)
            e[t] = i, i.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function () {
          this.animationItem.container.style.display = 'none'
        }, CanvasRendererBase.prototype.show = function () {
          this.animationItem.container.style.display = 'block'
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
          let t
          const e = this.canvasContext
          for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function () {
          let t
          for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy()
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function (t) {
          return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function (t) {
          return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function () {
          },
          initRendererElement: function () {
            this.baseElement = createTag(this.data.tg || 'div'), this.data.hasMask ? (this.svgElement = createNS('svg'), this.layerElement = createNS('g'), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function () {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute('id', this.data.ln), this.data.cl && this.layerElement.setAttribute('class', this.data.cl), this.data.bm !== 0 && this.setBlendMode()
          },
          renderElement: function () {
            const t = this.transformedElement ? this.transformedElement.style : {}
            if (this.finalTransform._matMdf) {
              const e = this.finalTransform.mat.toCSS()
              t.transform = e, t.webkitTransform = e
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function () {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function () {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function () {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function () {
          },
          setMatte: function () {
          }
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
          let t
          this.data.hasMask ? ((t = createNS('rect')).setAttribute('width', this.data.sw), t.setAttribute('height', this.data.sh), t.setAttribute('fill', this.data.sc), this.svgElement.setAttribute('width', this.data.sw), this.svgElement.setAttribute('height', this.data.sh)) : ((t = createTag('div')).style.width = this.data.sw + 'px', t.style.height = this.data.sh + 'px', t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
          let t
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement; else {
            t = createNS('svg')
            const e = this.comp.data ? this.comp.data : this.globalData.compSize
            t.setAttribute('width', e.w), t.setAttribute('height', e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function (t, e) {
          let i
          const s = t.length
          for (i = 0; i < s; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0)
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
          let i
          let s
          let r
          let a
          let n
          const o = t.sh.v
          const h = t.transformers
          const l = o._length
          if (!(l <= 1)) {
            for (i = 0; i < l - 1; i += 1) s = this.getTransformedPoint(h, o.v[i]), r = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(s, r, a, n, e)
            o.c && (s = this.getTransformedPoint(h, o.v[i]), r = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(s, r, a, n, e))
          }
        }, HShapeElement.prototype.checkBounds = function (t, e, i, s, r) {
          this.getBoundsOfCurve(t, e, i, s)
          const a = this.shapeBoundingBox
          r.x = bmMin(a.left, r.x), r.xMax = bmMax(a.right, r.xMax), r.y = bmMin(a.top, r.y), r.yMax = bmMax(a.bottom, r.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, s) {
          for (var r, a, n, o, h, l, p, f = [[t[0], s[0]], [t[1], s[1]]], c = 0; c < 2; ++c) a = 6 * t[c] - 12 * e[c] + 6 * i[c], r = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * s[c], n = 3 * e[c] - 3 * t[c], a |= 0, n |= 0, (r |= 0) == 0 && a === 0 || (r === 0 ? (o = -n / a) > 0 && o < 1 && f[c].push(this.calculateF(o, t, e, i, s, c)) : (h = a * a - 4 * n * r) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * r)) > 0 && l < 1 && f[c].push(this.calculateF(l, t, e, i, s, c)), (p = (-a - bmSqrt(h)) / (2 * r)) > 0 && p < 1 && f[c].push(this.calculateF(p, t, e, i, s, c))))
          this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
        }, HShapeElement.prototype.calculateF = function (t, e, i, s, r, a) {
          return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bmPow(t, 2) * s[a] + bmPow(t, 3) * r[a]
        }, HShapeElement.prototype.calculateBoundingBox = function (t, e) {
          let i
          const s = t.length
          for (i = 0; i < s; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
          let i = 0
          if (t.keyframes) {
            for (let s = 0; s < t.keyframes.length; s += 1) {
              const r = t.keyframes[s].s
              r > i && (i = r)
            }
            i *= t.mult
          } else i = t.v * t.mult
          e.x -= i, e.xMax += i, e.y -= i, e.yMax += i
        }, HShapeElement.prototype.currentBoxContains = function (t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function () {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            const t = this.tempBoundingBox
            const e = 999999
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, !this.currentBoxContains(t)) {
              let i = !1
              if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute('width', t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute('height', t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h)
                const s = this.shapeCont.style
                const r = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)'
                s.transform = r, s.webkitTransform = r
              }
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = 'svg', this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute('width', this.compW), this.svgElement.setAttribute('height', this.compH)
            const t = createNS('g')
            this.maskedElement.appendChild(t), this.innerElem = t
          } else this.renderType = 'html', this.innerElem = this.layerElement
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function () {
          const t = this.textProperty.currentData
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0)
          const e = this.innerElem.style
          const i = t.fc ? this.buildColor(t.fc) : 'rgba(0,0,0,0)'
          e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + 'px')
          let s
          let r
          const a = this.globalData.fontManager.getFontByName(t.f)
          if (!this.globalData.fontManager.chars) {
            if (e.fontSize = t.finalSize + 'px', e.lineHeight = t.finalSize + 'px', a.fClass) this.innerElem.className = a.fClass; else {
              e.fontFamily = a.fFamily
              const n = t.fWeight
              const o = t.fStyle
              e.fontStyle = o, e.fontWeight = n
            }
          }
          let h
          let l
          let p
          const f = t.l
          r = f.length
          let c
          const u = this.mHelper
          let m = ''
          let d = 0
          for (s = 0; s < r; s += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : ((h = createNS('path')).setAttribute('stroke-linecap', lineCapEnum[1]), h.setAttribute('stroke-linejoin', lineJoinEnum[2]), h.setAttribute('stroke-miterlimit', '4')), this.isMasked || (this.textSpans[d] ? p = (l = this.textSpans[d]).children[0] : ((l = createTag('div')).style.lineHeight = 0, (p = createNS('svg')).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : createNS('text') : this.textSpans[d] ? (l = this.textSpans[d], h = this.textPaths[d]) : (styleDiv(l = createTag('span')), styleDiv(h = createTag('span')), l.appendChild(h)), this.globalData.fontManager.chars) {
              var $
              const g = this.globalData.fontManager.getCharData(t.finalText[s], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)
              if ($ = g ? g.data : null, u.reset(), $ && $.shapes && $.shapes.length && (c = $.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(u, c), h.setAttribute('d', m)), this.isMasked) this.innerElem.appendChild(h); else {
                if (this.innerElem.appendChild(l), $ && $.shapes) {
                  document.body.appendChild(p)
                  const _ = p.getBBox()
                  p.setAttribute('width', _.width + 2), p.setAttribute('height', _.height + 2), p.setAttribute('viewBox', _.x - 1 + ' ' + (_.y - 1) + ' ' + (_.width + 2) + ' ' + (_.height + 2))
                  const v = p.style
                  const y = 'translate(' + (_.x - 1) + 'px,' + (_.y - 1) + 'px)'
                  v.transform = y, v.webkitTransform = y, f[s].yOffset = _.y - 1
                } else p.setAttribute('width', 1), p.setAttribute('height', 1)
                l.appendChild(p)
              }
            } else if (h.textContent = f[s].val, h.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'), this.isMasked) this.innerElem.appendChild(h); else {
              this.innerElem.appendChild(l)
              const b = h.style
              const x = 'translate3d(0,' + -t.finalSize / 1.2 + 'px,0)'
              b.transform = x, b.webkitTransform = x
            }
            this.isMasked ? this.textSpans[d] = h : this.textSpans[d] = l, this.textSpans[d].style.display = 'block', this.textPaths[d] = h, d += 1
          }
          for (; d < this.textSpans.length;) this.textSpans[d].style.display = 'none', d += 1
        }, HTextElement.prototype.renderInnerContent = function () {
          let t
          if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH), t = this.svgElement.style
              const e = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)'
              t.transform = e, t.webkitTransform = e
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            let i
            let s
            let r
            let a
            let n
            let o = 0
            const h = this.textAnimator.renderedLetters
            const l = this.textProperty.currentData.l
            for (s = l.length, i = 0; i < s; i += 1) l[i].n ? o += 1 : (a = this.textSpans[i], n = this.textPaths[i], r = h[o], o += 1, r._mdf.m && (this.isMasked ? a.setAttribute('transform', r.m) : (a.style.webkitTransform = r.m, a.style.transform = r.m)), a.style.opacity = r.o, r.sw && r._mdf.sw && n.setAttribute('stroke-width', r.sw), r.sc && r._mdf.sc && n.setAttribute('stroke', r.sc), r.fc && r._mdf.fc && (n.setAttribute('fill', r.fc), n.style.color = r.fc))
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              const p = this.innerElem.getBBox()
              if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute('width', p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute('height', p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h), t = this.svgElement.style
                const f = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)'
                t.transform = f, t.webkitTransform = f
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
          let t
          let e
          let i
          let s
          const r = this.comp.threeDElements.length
          for (t = 0; t < r; t += 1) {
            if ((e = this.comp.threeDElements[t]).type === '3d') {
              i = e.perspectiveElem.style, s = e.container.style
              const a = this.pe.v + 'px'
              const n = '0px 0px 0px'
              const o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)'
              i.perspective = a, i.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = o, i.webkitTransform = o
            }
          }
        }, HCameraElement.prototype.createElements = function () {
        }, HCameraElement.prototype.hide = function () {
        }, HCameraElement.prototype.renderFrame = function () {
          let t
          let e
          let i = this._isFirstFrame
          if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i
          if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy) {
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var s
                var r
                var a
                const n = this.hierarchy[t].finalTransform.mProp
                this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
              }
            }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              let o
              const h = Math.sqrt(Math.pow((o = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(o[1], 2) + Math.pow(o[2], 2))
              const l = [o[0] / h, o[1] / h, o[2] / h]
              const p = Math.atan2(l[1], Math.sqrt(l[2] * l[2] + l[0] * l[0]))
              const f = Math.atan2(l[0], -l[2])
              this.mat.rotateY(f).rotateX(-p)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v)
            const c = !this._prevMat.equals(this.mat)
            if ((c || this.pe._mdf) && this.comp.threeDElements) {
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) {
                if ((s = this.comp.threeDElements[t]).type === '3d') {
                  if (c) {
                    const u = this.mat.toCSS();
                    (a = s.container.style).transform = u, a.webkitTransform = u
                  }
                  this.pe._mdf && ((r = s.perspectiveElem.style).perspective = this.pe.v + 'px', r.webkitPerspective = this.pe.v + 'px')
                }
              }
              this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function (t) {
          this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function () {
        }, HCameraElement.prototype.getBaseElement = function () {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
          const t = this.globalData.getAssetsPath(this.assetData)
          const e = new Image()
          this.data.hasMask ? (this.imageElem = createNS('image'), this.imageElem.setAttribute('width', this.assetData.w + 'px'), this.imageElem.setAttribute('height', this.assetData.h + 'px'), this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute('width', this.assetData.w), this.baseElement.setAttribute('height', this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = 'anonymous', e.src = t, this.data.ln && this.baseElement.setAttribute('id', this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function (t, e) {
          const i = t.getBaseElement()
          if (i) {
            const s = this.layers[e]
            if (s.ddd && this.supports3d) this.addTo3dContainer(i, e); else if (this.threeDElements) this.addTo3dContainer(i, e); else {
              for (var r, a, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], r = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || r), n += 1
              r ? s.ddd && this.supports3d || this.layerElement.insertBefore(i, r) : s.ddd && this.supports3d || this.layerElement.appendChild(i)
            }
          }
        }, HybridRendererBase.prototype.createShape = function (t) {
          return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function (t) {
          return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function (t) {
          return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function (t) {
          return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function (t) {
          return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
          for (let e = 0, i = this.threeDElements.length; e < i;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
          let i
          let s
          const r = createTag('div')
          styleDiv(r)
          const a = createTag('div')
          if (styleDiv(a), e === '3d') {
            (i = r.style).width = this.globalData.compSize.w + 'px', i.height = this.globalData.compSize.h + 'px'
            const n = '50% 50%'
            i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n
            const o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
            (s = a.style).transform = o, s.webkitTransform = o
          }
          r.appendChild(a)
          const h = { container: a, perspectiveElem: r, startPos: t, endPos: t, type: e }
          return this.threeDElements.push(h), h
        }, HybridRendererBase.prototype.build3dContainers = function () {
          let t
          let e
          let i = this.layers.length
          let s = ''
          for (t = 0; t < i; t += 1) this.layers[t].ddd && this.layers[t].ty !== 3 ? (s !== '3d' && (s = '3d', e = this.createThreeDContainer(t, '3d')), e.endPos = Math.max(e.endPos, t)) : (s !== '2d' && (s = '2d', e = this.createThreeDContainer(t, '2d')), e.endPos = Math.max(e.endPos, t))
          for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
          for (let i = 0, s = this.threeDElements.length; i < s;) {
            if (e <= this.threeDElements[i].endPos) {
              for (var r, a = this.threeDElements[i].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()), a += 1
              r ? this.threeDElements[i].container.insertBefore(t, r) : this.threeDElements[i].container.appendChild(t)
              break
            }
            i += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function (t) {
          const e = createTag('div')
          const i = this.animationItem.wrapper
          const s = e.style
          s.width = t.w + 'px', s.height = t.h + 'px', this.resizerElem = e, styleDiv(e), s.transformStyle = 'flat', s.mozTransformStyle = 'flat', s.webkitTransformStyle = 'flat', this.renderConfig.className && e.setAttribute('class', this.renderConfig.className), i.appendChild(e), s.overflow = 'hidden'
          const r = createNS('svg')
          r.setAttribute('width', '1'), r.setAttribute('height', '1'), styleDiv(r), this.resizerElem.appendChild(r)
          const a = createNS('defs')
          r.appendChild(a), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function () {
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), this.animationItem.container = null, this.globalData.defs = null
          let t
          const e = this.layers ? this.layers.length : 0
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy()
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function () {
          let t
          let e
          let i
          let s
          const r = this.animationItem.wrapper.offsetWidth
          const a = this.animationItem.wrapper.offsetHeight
          const n = r / a
          this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, i = 0, s = (a - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, i = (r - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, s = 0)
          const o = this.resizerElem.style
          o.webkitTransform = 'matrix3d(' + t + ',0,0,0,0,' + e + ',0,0,0,0,1,0,' + i + ',' + s + ',0,1)', o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function () {
          this.resizerElem.style.display = 'none'
        }, HybridRendererBase.prototype.show = function () {
          this.resizerElem.style.display = 'block'
        }, HybridRendererBase.prototype.initItems = function () {
          if (this.buildAllItems(), this.camera) this.camera.setup(); else {
            let t
            const e = this.globalData.compSize.w
            const i = this.globalData.compSize.h
            const s = this.threeDElements.length
            for (t = 0; t < s; t += 1) {
              const r = this.threeDElements[t].perspectiveElem.style
              r.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + 'px', r.perspective = r.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function (t) {
          let e
          const i = t.length
          const s = createTag('div')
          for (e = 0; e < i; e += 1) {
            if (t[e].xt) {
              const r = this.createComp(t[e], s, this.globalData.comp, null)
              r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
          }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute('width', this.data.w), this.svgElement.setAttribute('height', this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function (t, e) {
          for (var i, s = 0; s < e;) this.elements[s] && this.elements[s].getBaseElement && (i = this.elements[s].getBaseElement()), s += 1
          i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function (t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function (t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }
        const CompExpressionInterface = function (t) {
          function e (e) {
            for (let i = 0, s = t.layers.length; i < s;) {
              if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface
              i += 1
            }
            return null
          }

          return Object.defineProperty(e, '_name', { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
        }
        const Expressions = {
          initExpressions: function (t) {
            let e = 0
            const i = []
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function () {
              e += 1
            }, t.renderer.globalData.popExpression = function () {
              (e -= 1) == 0 && (function () {
                let t
                const e = i.length
                for (t = 0; t < e; t += 1) i[t].release()
                i.length = 0
              }())
            }, t.renderer.globalData.registerExpressionProperty = function (t) {
              i.indexOf(t) === -1 && i.push(t)
            }
          }
        }
        const MaskManagerInterface = (function () {
          function t (t, e) {
            this._mask = t, this._data = e
          }

          return Object.defineProperty(t.prototype, 'maskPath', {
            get: function () {
              return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
            }
          }), Object.defineProperty(t.prototype, 'maskOpacity', {
            get: function () {
              return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
            }
          }), function (e) {
            let i
            const s = createSizedArray(e.viewData.length)
            const r = e.viewData.length
            for (i = 0; i < r; i += 1) s[i] = new t(e.viewData[i], e.masksProperties[i])
            return function (t) {
              for (i = 0; i < r;) {
                if (e.masksProperties[i].nm === t) return s[i]
                i += 1
              }
              return null
            }
          }
        }())
        const ExpressionPropertyInterface = (function () {
          const t = { pv: 0, v: 0, mult: 1 }
          const e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 }

          function i (t, e, i) {
            Object.defineProperty(t, 'velocity', {
              get: function () {
                return e.getVelocityAtTime(e.comp.currentFrame)
              }
            }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function (s) {
              if (!t.numKeys) return 0
              r = 's' in e.keyframes[s - 1] ? e.keyframes[s - 1].s : 'e' in e.keyframes[s - 2] ? e.keyframes[s - 2].e : e.keyframes[s - 2].s
              let r
              const a = i === 'unidimensional' ? new Number(r) : Object.assign({}, r)
              return a.time = e.keyframes[s - 1].t / e.elem.comp.globalData.frameRate, a.value = i === 'unidimensional' ? r[0] : r, a
            }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
          }

          function s () {
            return t
          }

          return function (r) {
            let a, n, o, h, l, p, f, c, u
            return r
              ? r.propType === 'unidimensional'
                ? ((a = r) && 'pv' in a || (a = t), n = 1 / a.mult, o = a.pv * n, (h = new Number(o)).value = o, i(h, a, 'unidimensional'), function () {
                    return a.k && a.getValue(), o = a.v * n, h.value !== o && ((h = new Number(o)).value = o, i(h, a, 'unidimensional')), h
                  })
                : ((l = r) && 'pv' in l || (l = e), p = 1 / l.mult, c = createTypedArray('float32', f = l.data && l.data.l || l.pv.length), u = createTypedArray('float32', f), c.value = u, i(c, l, 'multidimensional'), function () {
                    l.k && l.getValue()
                    for (let t = 0; t < f; t += 1) u[t] = l.v[t] * p, c[t] = u[t]
                    return c
                  })
              : s
          }
        }())
        const TransformExpressionInterface = function (t) {
          let e, i, s, r

          function a (t) {
            switch (t) {
              case 'scale':
              case 'Scale':
              case 'ADBE Scale':
              case 6:
                return a.scale
              case 'rotation':
              case 'Rotation':
              case 'ADBE Rotation':
              case 'ADBE Rotate Z':
              case 10:
                return a.rotation
              case 'ADBE Rotate X':
                return a.xRotation
              case 'ADBE Rotate Y':
                return a.yRotation
              case 'position':
              case 'Position':
              case 'ADBE Position':
              case 2:
                return a.position
              case 'ADBE Position_0':
                return a.xPosition
              case 'ADBE Position_1':
                return a.yPosition
              case 'ADBE Position_2':
                return a.zPosition
              case 'anchorPoint':
              case 'AnchorPoint':
              case 'Anchor Point':
              case 'ADBE AnchorPoint':
              case 1:
                return a.anchorPoint
              case 'opacity':
              case 'Opacity':
              case 11:
                return a.opacity
              default:
                return null
            }
          }

          return Object.defineProperty(a, 'rotation', { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(a, 'zRotation', { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(a, 'xRotation', { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(a, 'yRotation', { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(a, 'scale', { get: ExpressionPropertyInterface(t.s) }), t.p ? r = ExpressionPropertyInterface(t.p) : (e = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(a, 'position', {
            get: function () {
              return t.p ? r() : [e(), i(), s ? s() : 0]
            }
          }), Object.defineProperty(a, 'xPosition', { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(a, 'yPosition', { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(a, 'zPosition', { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(a, 'anchorPoint', { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(a, 'opacity', { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(a, 'skew', { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(a, 'skewAxis', { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(a, 'orientation', { get: ExpressionPropertyInterface(t.or) }), a
        }
        const LayerExpressionInterface = (function () {
          function t (t) {
            const e = new Matrix()
            return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
          }

          function e (t, e) {
            const i = this.getMatrix(e)
            return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
          }

          function i (t, e) {
            const i = this.getMatrix(e)
            return this.applyPoint(i, t)
          }

          function s (t, e) {
            const i = this.getMatrix(e)
            return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
          }

          function r (t, e) {
            const i = this.getMatrix(e)
            return this.invertPoint(i, t)
          }

          function a (t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              let i
              const s = this._elem.hierarchy.length
              for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
            }
            return t.applyToPointArray(e[0], e[1], e[2] || 0)
          }

          function n (t, e) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              let i
              const s = this._elem.hierarchy.length
              for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
            }
            return t.inversePoint(e)
          }

          function o (t) {
            const e = new Matrix()
            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
              let i
              const s = this._elem.hierarchy.length
              for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e)
            }
            return e.inversePoint(t)
          }

          function h () {
            return [1, 1, 1, 1]
          }

          return function (l) {
            function p (t) {
              switch (t) {
                case 'ADBE Root Vectors Group':
                case 'Contents':
                case 2:
                  return p.shapeInterface
                case 1:
                case 6:
                case 'Transform':
                case 'transform':
                case 'ADBE Transform Group':
                  return f
                case 4:
                case 'ADBE Effect Parade':
                case 'effects':
                case 'Effects':
                  return p.effect
                case 'ADBE Text Properties':
                  return p.textInterface
                default:
                  return null
              }
            }

            p.getMatrix = t, p.invertPoint = n, p.applyPoint = a, p.toWorld = i, p.toWorldVec = e, p.fromWorld = r, p.fromWorldVec = s, p.toComp = i, p.fromComp = o, p.sampleImage = h, p.sourceRectAtTime = l.sourceRectAtTime.bind(l), p._elem = l
            let f
            const c = getDescriptor(f = TransformExpressionInterface(l.finalTransform.mProp), 'anchorPoint')
            return Object.defineProperties(p, {
              hasParent: {
                get: function () {
                  return l.hierarchy.length
                }
              },
              parent: {
                get: function () {
                  return l.hierarchy[0].layerInterface
                }
              },
              rotation: getDescriptor(f, 'rotation'),
              scale: getDescriptor(f, 'scale'),
              position: getDescriptor(f, 'position'),
              opacity: getDescriptor(f, 'opacity'),
              anchorPoint: c,
              anchor_point: c,
              transform: {
                get: function () {
                  return f
                }
              },
              active: {
                get: function () {
                  return l.isInRange
                }
              }
            }), p.startTime = l.data.st, p.index = l.data.ind, p.source = l.data.refId, p.height = l.data.ty === 0 ? l.data.h : 100, p.width = l.data.ty === 0 ? l.data.w : 100, p.inPoint = l.data.ip / l.comp.globalData.frameRate, p.outPoint = l.data.op / l.comp.globalData.frameRate, p._name = l.data.nm, p.registerMaskInterface = function (t) {
              p.mask = new MaskManagerInterface(t, l)
            }, p.registerEffectsInterface = function (t) {
              p.effect = t
            }, p
          }
        }())
        const propertyGroupFactory = function (t, e) {
          return function (i) {
            return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
          }
        }
        const PropertyInterface = function (t, e) {
          const i = { _name: t }
          return function (t) {
            return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
          }
        }
        const EffectsExpressionInterface = (function () {
          function t (i, s, r, a) {
            function n (t) {
              for (let e = i.ef, s = 0, r = e.length; s < r;) {
                if (t === e[s].nm || t === e[s].mn || t === e[s].ix) return e[s].ty === 5 ? l[s] : l[s]()
                s += 1
              }
              throw Error()
            }

            let o
            const h = propertyGroupFactory(n, r)
            var l = []
            const p = i.ef.length
            for (o = 0; o < p; o += 1) i.ef[o].ty === 5 ? l.push(t(i.ef[o], s.effectElements[o], s.effectElements[o].propertyGroup, a)) : l.push(e(s.effectElements[o], i.ef[o].ty, a, h))
            return i.mn === 'ADBE Color Control' && Object.defineProperty(n, 'color', {
              get: function () {
                return l[0]()
              }
            }), Object.defineProperties(n, {
              numProperties: {
                get: function () {
                  return i.np
                }
              },
              _name: { value: i.nm },
              propertyGroup: { value: h }
            }), n.enabled = i.en !== 0, n.active = n.enabled, n
          }

          function e (t, e, i, s) {
            const r = ExpressionPropertyInterface(t.p)
            return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface('', s)), function () {
              return e === 10 ? i.comp.compInterface(t.p.v) : r()
            }
          }

          return {
            createEffectsInterface: function (e, i) {
              if (e.effectsManager) {
                let s
                const r = []
                const a = e.data.ef
                let n = e.effectsManager.effectElements.length
                for (s = 0; s < n; s += 1) r.push(t(a[s], e.effectsManager.effectElements[s], i, e))
                const o = e.data.ef || []
                const h = function (t) {
                  for (s = 0, n = o.length; s < n;) {
                    if (t === o[s].nm || t === o[s].mn || t === o[s].ix) return r[s]
                    s += 1
                  }
                  return null
                }
                return Object.defineProperty(h, 'numProperties', {
                  get: function () {
                    return o.length
                  }
                }), h
              }
              return null
            }
          }
        }())
        const ShapePathInterface = function (t, e, i) {
          const s = e.sh

          function r (t) {
            return t === 'Shape' || t === 'shape' || t === 'Path' || t === 'path' || t === 'ADBE Vector Shape' || t === 2 ? r.path : null
          }

          const a = propertyGroupFactory(r, i)
          return s.setGroupProperty(PropertyInterface('Path', a)), Object.defineProperties(r, {
            path: {
              get: function () {
                return s.k && s.getValue(), s
              }
            },
            shape: {
              get: function () {
                return s.k && s.getValue(), s
              }
            },
            _name: { value: t.nm },
            ix: { value: t.ix },
            propertyIndex: { value: t.ix },
            mn: { value: t.mn },
            propertyGroup: { value: i }
          }), r
        }
        const ShapeExpressionInterface = (function () {
          function t (t, n, c) {
            let u
            const m = []
            const d = t ? t.length : 0
            for (u = 0; u < d; u += 1) {
              t[u].ty === 'gr'
                ? m.push(e(t[u], n[u], c))
                : t[u].ty === 'fl'
                  ? m.push(i(t[u], n[u], c))
                  : t[u].ty === 'st'
                    ? m.push(r(t[u], n[u], c))
                    : t[u].ty === 'tm'
                      ? m.push(a(t[u], n[u], c))
                      : t[u].ty === 'tr' || (t[u].ty === 'el'
                        ? m.push(o(t[u], n[u], c))
                        : t[u].ty === 'sr'
                          ? m.push(h(t[u], n[u], c))
                          : t[u].ty === 'sh'
                            ? m.push(ShapePathInterface(t[u], n[u], c))
                            : t[u].ty === 'rc'
                              ? m.push(l(t[u], n[u], c))
                              : t[u].ty === 'rd'
                                ? m.push(p(t[u], n[u], c))
                                : t[u].ty === 'rp'
                                  ? m.push(f(t[u], n[u], c))
                                  : t[u].ty === 'gf'
                                    ? m.push(s(t[u], n[u], c))
                                    : m.push((t[u], n[u], function () {
                                      return null
                                    })))
            }
            return m
          }

          function e (e, i, s) {
            let r
            let a
            let o
            let h
            let l
            let p
            const f = function (t) {
              switch (t) {
                case 'ADBE Vectors Group':
                case 'Contents':
                case 2:
                  return f.content
                default:
                  return f.transform
              }
            }
            f.propertyGroup = propertyGroupFactory(f, s)
            const c = (r = e, a = i, o = f.propertyGroup, (l = function (t) {
              for (let e = 0, i = h.length; e < i;) {
                if (h[e]._name === t || h[e].mn === t || h[e].propertyIndex === t || h[e].ix === t || h[e].ind === t) return h[e]
                e += 1
              }
              return typeof t === 'number' ? h[t - 1] : null
            }).propertyGroup = propertyGroupFactory(l, o), h = t(r.it, a.it, l.propertyGroup), l.numProperties = h.length, p = n(r.it[r.it.length - 1], a.it[a.it.length - 1], l.propertyGroup), l.transform = p, l.propertyIndex = r.cix, l._name = r.nm, l)
            const u = n(e.it[e.it.length - 1], i.it[i.it.length - 1], f.propertyGroup)
            return f.content = c, f.transform = u, Object.defineProperty(f, '_name', {
              get: function () {
                return e.nm
              }
            }), f.numProperties = e.np, f.propertyIndex = e.ix, f.nm = e.nm, f.mn = e.mn, f
          }

          function i (t, e, i) {
            function s (t) {
              return t === 'Color' || t === 'color' ? s.color : t === 'Opacity' || t === 'opacity' ? s.opacity : null
            }

            return Object.defineProperties(s, {
              color: { get: ExpressionPropertyInterface(e.c) },
              opacity: { get: ExpressionPropertyInterface(e.o) },
              _name: { value: t.nm },
              mn: { value: t.mn }
            }), e.c.setGroupProperty(PropertyInterface('Color', i)), e.o.setGroupProperty(PropertyInterface('Opacity', i)), s
          }

          function s (t, e, i) {
            function s (t) {
              return t === 'Start Point' || t === 'start point' ? s.startPoint : t === 'End Point' || t === 'end point' ? s.endPoint : t === 'Opacity' || t === 'opacity' ? s.opacity : null
            }

            return Object.defineProperties(s, {
              startPoint: { get: ExpressionPropertyInterface(e.s) },
              endPoint: { get: ExpressionPropertyInterface(e.e) },
              opacity: { get: ExpressionPropertyInterface(e.o) },
              type: {
                get: function () {
                  return 'a'
                }
              },
              _name: { value: t.nm },
              mn: { value: t.mn }
            }), e.s.setGroupProperty(PropertyInterface('Start Point', i)), e.e.setGroupProperty(PropertyInterface('End Point', i)), e.o.setGroupProperty(PropertyInterface('Opacity', i)), s
          }

          function r (t, e, i) {
            let s
            const r = propertyGroupFactory(l, i)
            const a = propertyGroupFactory(h, r)

            function n (i) {
              Object.defineProperty(h, t.d[i].nm, { get: ExpressionPropertyInterface(e.d.dataProps[i].p) })
            }

            const o = t.d ? t.d.length : 0
            var h = {}
            for (s = 0; s < o; s += 1) n(s), e.d.dataProps[s].p.setGroupProperty(a)

            function l (t) {
              return t === 'Color' || t === 'color' ? l.color : t === 'Opacity' || t === 'opacity' ? l.opacity : t === 'Stroke Width' || t === 'stroke width' ? l.strokeWidth : null
            }

            return Object.defineProperties(l, {
              color: { get: ExpressionPropertyInterface(e.c) },
              opacity: { get: ExpressionPropertyInterface(e.o) },
              strokeWidth: { get: ExpressionPropertyInterface(e.w) },
              dash: {
                get: function () {
                  return h
                }
              },
              _name: { value: t.nm },
              mn: { value: t.mn }
            }), e.c.setGroupProperty(PropertyInterface('Color', r)), e.o.setGroupProperty(PropertyInterface('Opacity', r)), e.w.setGroupProperty(PropertyInterface('Stroke Width', r)), l
          }

          function a (t, e, i) {
            function s (e) {
              return e === t.e.ix || e === 'End' || e === 'end' ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : null
            }

            const r = propertyGroupFactory(s, i)
            return s.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface('Start', r)), e.e.setGroupProperty(PropertyInterface('End', r)), e.o.setGroupProperty(PropertyInterface('Offset', r)), s.propertyIndex = t.ix, s.propertyGroup = i, Object.defineProperties(s, {
              start: { get: ExpressionPropertyInterface(e.s) },
              end: { get: ExpressionPropertyInterface(e.e) },
              offset: { get: ExpressionPropertyInterface(e.o) },
              _name: { value: t.nm }
            }), s.mn = t.mn, s
          }

          function n (t, e, i) {
            function s (e) {
              return t.a.ix === e || e === 'Anchor Point' ? s.anchorPoint : t.o.ix === e || e === 'Opacity' ? s.opacity : t.p.ix === e || e === 'Position' ? s.position : t.r.ix === e || e === 'Rotation' || e === 'ADBE Vector Rotation' ? s.rotation : t.s.ix === e || e === 'Scale' ? s.scale : t.sk && t.sk.ix === e || e === 'Skew' ? s.skew : t.sa && t.sa.ix === e || e === 'Skew Axis' ? s.skewAxis : null
            }

            const r = propertyGroupFactory(s, i)
            return e.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', r)), e.transform.mProps.p.setGroupProperty(PropertyInterface('Position', r)), e.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', r)), e.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', r)), e.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', r)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', r)), e.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', r))), e.transform.op.setGroupProperty(PropertyInterface('Opacity', r)), Object.defineProperties(s, {
              opacity: { get: ExpressionPropertyInterface(e.transform.mProps.o) },
              position: { get: ExpressionPropertyInterface(e.transform.mProps.p) },
              anchorPoint: { get: ExpressionPropertyInterface(e.transform.mProps.a) },
              scale: { get: ExpressionPropertyInterface(e.transform.mProps.s) },
              rotation: { get: ExpressionPropertyInterface(e.transform.mProps.r) },
              skew: { get: ExpressionPropertyInterface(e.transform.mProps.sk) },
              skewAxis: { get: ExpressionPropertyInterface(e.transform.mProps.sa) },
              _name: { value: t.nm }
            }), s.ty = 'tr', s.mn = t.mn, s.propertyGroup = i, s
          }

          function o (t, e, i) {
            function s (e) {
              return t.p.ix === e ? s.position : t.s.ix === e ? s.size : null
            }

            const r = propertyGroupFactory(s, i)
            s.propertyIndex = t.ix
            const a = e.sh.ty === 'tm' ? e.sh.prop : e.sh
            return a.s.setGroupProperty(PropertyInterface('Size', r)), a.p.setGroupProperty(PropertyInterface('Position', r)), Object.defineProperties(s, {
              size: { get: ExpressionPropertyInterface(a.s) },
              position: { get: ExpressionPropertyInterface(a.p) },
              _name: { value: t.nm }
            }), s.mn = t.mn, s
          }

          function h (t, e, i) {
            function s (e) {
              return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || e === 'ADBE Vector Star Outer Radius' ? s.outerRadius : t.os.ix === e ? s.outerRoundness : t.ir && (t.ir.ix === e || e === 'ADBE Vector Star Inner Radius') ? s.innerRadius : t.is && t.is.ix === e ? s.innerRoundness : null
            }

            const r = propertyGroupFactory(s, i)
            const a = e.sh.ty === 'tm' ? e.sh.prop : e.sh
            return s.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface('Outer Radius', r)), a.os.setGroupProperty(PropertyInterface('Outer Roundness', r)), a.pt.setGroupProperty(PropertyInterface('Points', r)), a.p.setGroupProperty(PropertyInterface('Position', r)), a.r.setGroupProperty(PropertyInterface('Rotation', r)), t.ir && (a.ir.setGroupProperty(PropertyInterface('Inner Radius', r)), a.is.setGroupProperty(PropertyInterface('Inner Roundness', r))), Object.defineProperties(s, {
              position: { get: ExpressionPropertyInterface(a.p) },
              rotation: { get: ExpressionPropertyInterface(a.r) },
              points: { get: ExpressionPropertyInterface(a.pt) },
              outerRadius: { get: ExpressionPropertyInterface(a.or) },
              outerRoundness: { get: ExpressionPropertyInterface(a.os) },
              innerRadius: { get: ExpressionPropertyInterface(a.ir) },
              innerRoundness: { get: ExpressionPropertyInterface(a.is) },
              _name: { value: t.nm }
            }), s.mn = t.mn, s
          }

          function l (t, e, i) {
            function s (e) {
              return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || e === 'Size' || e === 'ADBE Vector Rect Size' ? s.size : null
            }

            const r = propertyGroupFactory(s, i)
            const a = e.sh.ty === 'tm' ? e.sh.prop : e.sh
            return s.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface('Position', r)), a.s.setGroupProperty(PropertyInterface('Size', r)), a.r.setGroupProperty(PropertyInterface('Rotation', r)), Object.defineProperties(s, {
              position: { get: ExpressionPropertyInterface(a.p) },
              roundness: { get: ExpressionPropertyInterface(a.r) },
              size: { get: ExpressionPropertyInterface(a.s) },
              _name: { value: t.nm }
            }), s.mn = t.mn, s
          }

          function p (t, e, i) {
            function s (e) {
              return t.r.ix === e || e === 'Round Corners 1' ? s.radius : null
            }

            const r = propertyGroupFactory(s, i)
            const a = e
            return s.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface('Radius', r)), Object.defineProperties(s, {
              radius: { get: ExpressionPropertyInterface(a.rd) },
              _name: { value: t.nm }
            }), s.mn = t.mn, s
          }

          function f (t, e, i) {
            function s (e) {
              return t.c.ix === e || e === 'Copies' ? s.copies : t.o.ix === e || e === 'Offset' ? s.offset : null
            }

            const r = propertyGroupFactory(s, i)
            const a = e
            return s.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface('Copies', r)), a.o.setGroupProperty(PropertyInterface('Offset', r)), Object.defineProperties(s, {
              copies: { get: ExpressionPropertyInterface(a.c) },
              offset: { get: ExpressionPropertyInterface(a.o) },
              _name: { value: t.nm }
            }), s.mn = t.mn, s
          }

          return function (e, i, s) {
            let r

            function a (t) {
              if (typeof t === 'number') return (t = void 0 === t ? 1 : t) === 0 ? s : r[t - 1]
              for (let e = 0, i = r.length; e < i;) {
                if (r[e]._name === t) return r[e]
                e += 1
              }
              return null
            }

            return a.propertyGroup = propertyGroupFactory(a, function () {
              return s
            }), r = t(e, i, a.propertyGroup), a.numProperties = r.length, a._name = 'Contents', a
          }
        }())
        const TextExpressionInterface = function (t) {
          let e

          function i (t) {
            return t === 'ADBE Text Document' ? i.sourceText : null
          }

          return Object.defineProperty(i, 'sourceText', {
            get: function () {
              t.textProperty.getValue()
              const i = t.textProperty.currentData.t
              return e && i === e.value || ((e = new String(i)).value = i || new String(i), Object.defineProperty(e, 'style', {
                get: function () {
                  return { fillColor: t.textProperty.currentData.fc }
                }
              })), e
            }
          }), i
        }

        function _typeof$2 (t) {
          return (_typeof$2 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
        }

        var t
        let dataInterfaceFactory
        const FootageInterface = (dataInterfaceFactory = function (t) {
          function e (t) {
            return t === 'Outline' ? e.outlineInterface() : null
          }

          return e._name = 'Outline', e.outlineInterface = (function (t) {
            let e = ''
            let i = t.getFootageData()

            function s (t) {
              if (i[t]) return e = t, _typeof$2(i = i[t]) === 'object' ? s : i
              const r = t.indexOf(e)
              if (r !== -1) {
                const a = parseInt(t.substr(r + e.length), 10)
                return _typeof$2(i = i[a]) === 'object' ? s : i
              }
              return ''
            }

            return function () {
              return e = '', i = t.getFootageData(), s
            }
          }(t)), e
        }, function (t) {
          function e (t) {
            return t === 'Data' ? e.dataInterface : null
          }

          return e._name = 'Data', e.dataInterface = dataInterfaceFactory(t), e
        })
        const interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface
        }

        function getInterface (t) {
          return interfaces[t] || null
        }

        function _typeof$1 (t) {
          return (_typeof$1 = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
        }

        function seedRandom (t, e) {
          const i = this
          const s = 256
          const r = 'random'
          const a = e.pow(s, 6)
          const n = e.pow(2, 52)
          const o = 2 * n
          const h = 255

          function l (t) {
            let e
            let i = t.length
            const r = this
            let a = 0
            let n = r.i = r.j = 0
            const o = r.S = []
            for (i || (t = [i++]); a < s;) o[a] = a++
            for (a = 0; a < s; a++) o[a] = o[n = h & n + t[a % i] + (e = o[a])], o[n] = e
            r.g = function (t) {
              for (var e, i = 0, a = r.i, n = r.j, o = r.S; t--;) e = o[a = h & a + 1], i = i * s + o[h & (o[a] = o[n = h & n + e]) + (o[n] = e)]
              return r.i = a, r.j = n, i
            }
          }

          function p (t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function f (t, e) {
            let i
            const s = []
            const r = _typeof$1(t)
            if (e && r == 'object') {
              for (i in t) {
                try {
                  s.push(f(t[i], e - 1))
                } catch (a) {
                }
              }
            }
            return s.length ? s : r == 'string' ? t : t + '\0'
          }

          function c (t, e) {
            for (var i, s = t + '', r = 0; r < s.length;) e[h & r] = h & (i ^= 19 * e[h & r]) + s.charCodeAt(r++)
            return u(e)
          }

          function u (t) {
            return String.fromCharCode.apply(0, t)
          }

          e['seed' + r] = function (h, m, d) {
            const $ = []
            const g = c(f((m = !0 === m ? { entropy: !0 } : m || {}).entropy
              ? [h, u(t)]
              : h === null
                ? (function () {
                    try {
                      const e = new Uint8Array(s)
                      return (i.crypto || i.msCrypto).getRandomValues(e), u(e)
                    } catch (r) {
                      const a = i.navigator
                      const n = a && a.plugins
                      return [+new Date(), i, n, i.screen, u(t)]
                    }
                  }())
                : h, 3), $)
            const _ = new l($)
            const v = function () {
              for (var t = _.g(6), e = a, i = 0; t < n;) t = (t + i) * s, e *= s, i = _.g(1)
              for (; t >= o;) t /= 2, e /= 2, i >>>= 1
              return (t + i) / e
            }
            return v.int32 = function () {
              return 0 | _.g(4)
            }, v.quick = function () {
              return _.g(4) / 4294967296
            }, v.double = v, c(u(_.S), t), (m.pass || d || function (t, i, s, a) {
              return a && (a.S && p(a, _), t.state = function () {
                return p(_, {})
              }), s ? (e[r] = t, i) : t
            })(v, g, 'global' in m ? m.global : this == e, m.state)
          }, c(e.random(), t)
        }

        function initialize$2 (t) {
          seedRandom([], t)
        }

        const propTypes = { SHAPE: 'shape' }

        function _typeof (t) {
          return (_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
        }

        const ExpressionManager = (function () {
          const ob = {}
          const Math = BMMath
          const window = null
          const document = null
          const XMLHttpRequest = null
          const fetch = null
          const frames = null

          function $bm_isInstanceOfArray (t) {
            return t.constructor === Array || t.constructor === Float32Array
          }

          function isNumerable (t, e) {
            return t === 'number' || t === 'boolean' || t === 'string' || e instanceof Number
          }

          function $bm_neg (t) {
            const e = _typeof(t)
            if (e === 'number' || e === 'boolean' || t instanceof Number) return -t
            if ($bm_isInstanceOfArray(t)) {
              let i
              const s = t.length
              const r = []
              for (i = 0; i < s; i += 1) r[i] = -t[i]
              return r
            }
            return t.propType ? t.v : -t
          }

          initialize$2(BMMath)
          const easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get
          const easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get
          const easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get

          function sum (t, e) {
            const i = _typeof(t)
            const s = _typeof(e)
            if (i === 'string' || s === 'string' || isNumerable(i, t) && isNumerable(s, e)) return t + e
            if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) return (t = t.slice(0))[0] += e, t
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n;) (typeof t[r] === 'number' || t[r] instanceof Number) && (typeof e[r] === 'number' || e[r] instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1
              return o
            }
            return 0
          }

          const add = sum

          function sub (t, e) {
            const i = _typeof(t)
            const s = _typeof(e)
            if (isNumerable(i, t) && isNumerable(s, e)) return i === 'string' && (t = parseInt(t, 10)), s === 'string' && (e = parseInt(e, 10)), t - e
            if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) return (t = t.slice(0))[0] -= e, t
            if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e
            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
              for (var r = 0, a = t.length, n = e.length, o = []; r < a || r < n;) (typeof t[r] === 'number' || t[r] instanceof Number) && (typeof e[r] === 'number' || e[r] instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1
              return o
            }
            return 0
          }

          function mul (t, e) {
            let i
            let s
            let r
            const a = _typeof(t)
            const n = _typeof(e)
            if (isNumerable(a, t) && isNumerable(n, e)) return t * e
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
              for (i = createTypedArray('float32', r = t.length), s = 0; s < r; s += 1) i[s] = t[s] * e
              return i
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
              for (i = createTypedArray('float32', r = e.length), s = 0; s < r; s += 1) i[s] = t * e[s]
              return i
            }
            return 0
          }

          function div (t, e) {
            let i
            let s
            let r
            const a = _typeof(t)
            const n = _typeof(e)
            if (isNumerable(a, t) && isNumerable(n, e)) return t / e
            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
              for (i = createTypedArray('float32', r = t.length), s = 0; s < r; s += 1) i[s] = t[s] / e
              return i
            }
            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
              for (i = createTypedArray('float32', r = e.length), s = 0; s < r; s += 1) i[s] = t / e[s]
              return i
            }
            return 0
          }

          function mod (t, e) {
            return typeof t === 'string' && (t = parseInt(t, 10)), typeof e === 'string' && (e = parseInt(e, 10)), t % e
          }

          const $bm_sum = sum
          const $bm_sub = sub
          const $bm_mul = mul
          const $bm_div = div
          const $bm_mod = mod

          function clamp (t, e, i) {
            if (e > i) {
              const s = i
              i = e, e = s
            }
            return Math.min(Math.max(t, e), i)
          }

          function radiansToDegrees (t) {
            return t / degToRads
          }

          const radians_to_degrees = radiansToDegrees

          function degreesToRadians (t) {
            return t * degToRads
          }

          const degrees_to_radians = radiansToDegrees
          const helperLengthArray = [0, 0, 0, 0, 0, 0]

          function length (t, e) {
            if (typeof t === 'number' || t instanceof Number) return e = e || 0, Math.abs(t - e)
            e || (e = helperLengthArray)
            let i
            const s = Math.min(t.length, e.length)
            let r = 0
            for (i = 0; i < s; i += 1) r += Math.pow(e[i] - t[i], 2)
            return Math.sqrt(r)
          }

          function normalize (t) {
            return div(t, length(t))
          }

          function rgbToHsl (t) {
            let e
            let i
            const s = t[0]
            const r = t[1]
            const a = t[2]
            const n = Math.max(s, r, a)
            const o = Math.min(s, r, a)
            const h = (n + o) / 2
            if (n === o) e = 0, i = 0; else {
              const l = n - o
              switch (i = h > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
                case s:
                  e = (r - a) / l + (r < a ? 6 : 0)
                  break
                case r:
                  e = (a - s) / l + 2
                  break
                case a:
                  e = (s - r) / l + 4
              }
              e /= 6
            }
            return [e, i, h, t[3]]
          }

          function hue2rgb (t, e, i) {
            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
          }

          function hslToRgb (t) {
            let e
            let i
            let s
            const r = t[0]
            const a = t[1]
            const n = t[2]
            if (a === 0) e = n, s = n, i = n; else {
              const o = n < 0.5 ? n * (1 + a) : n + a - n * a
              const h = 2 * n - o
              e = hue2rgb(h, o, r + 1 / 3), i = hue2rgb(h, o, r), s = hue2rgb(h, o, r - 1 / 3)
            }
            return [e, i, s, t[3]]
          }

          function linear (t, e, i, s, r) {
            if (void 0 !== s && void 0 !== r || (s = e, r = i, e = 0, i = 1), i < e) {
              const a = i
              i = e, e = a
            }
            if (t <= e) return s
            if (t >= i) return r
            let n
            const o = i === e ? 0 : (t - e) / (i - e)
            if (!s.length) return s + (r - s) * o
            const h = s.length
            const l = createTypedArray('float32', h)
            for (n = 0; n < h; n += 1) l[n] = s[n] + (r[n] - s[n]) * o
            return l
          }

          function random (t, e) {
            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
              let i
              const s = e.length
              t || (t = createTypedArray('float32', s))
              const r = createTypedArray('float32', s)
              const a = BMMath.random()
              for (i = 0; i < s; i += 1) r[i] = t[i] + a * (e[i] - t[i])
              return r
            }
            return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
          }

          function createPath (t, e, i, s) {
            let r
            const a = t.length
            const n = shapePool.newElement()
            n.setPathData(!!s, a)
            let o
            let h
            const l = [0, 0]
            for (r = 0; r < a; r += 1) o = e && e[r] ? e[r] : l, h = i && i[r] ? i[r] : l, n.setTripleAt(t[r][0], t[r][1], h[0] + t[r][0], h[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0)
            return n
          }

          function initiateExpression (elem, data, property) {
            function noOp (t) {
              return t
            }

            if (!elem.globalData.renderConfig.runExpressions) return noOp
            let transform
            let $bm_transform
            let content
            let effect
            const val = data.x
            const needsVelocity = /velocity(?![\w\d])/.test(val)
            const _needsRandom = val.indexOf('random') !== -1
            const elemType = elem.data.ty
            const thisProperty = property
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, 'value', {
              get: function () {
                return thisProperty.v
              }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0
            let loopIn
            let loop_in
            let loopOut
            let loop_out
            let smooth
            let toWorld
            let fromWorld
            let fromComp
            let toComp
            let fromCompToSurface
            let position
            let rotation
            let anchorPoint
            let scale
            let thisLayer
            let thisComp
            let mask
            let valueAtTime
            let velocityAtTime
            let scoped_bm_rt
            const inPoint = elem.data.ip / elem.comp.globalData.frameRate
            const outPoint = elem.data.op / elem.comp.globalData.frameRate
            const width = elem.data.sw ? elem.data.sw : 0
            const height = elem.data.sh ? elem.data.sh : 0
            const name = elem.data.nm
            const expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]
            const numKeys = property.kf ? data.k.length : 0
            const active = !this.data || !0 !== this.data.hd
            const wiggle = function (t, e) {
              let i
              let s
              const r = this.pv.length ? this.pv.length : 1
              const a = createTypedArray('float32', r)
              const n = Math.floor(5 * time)
              for (i = 0, s = 0; i < n;) {
                for (s = 0; s < r; s += 1) a[s] += -e + 2 * e * BMMath.random()
                i += 1
              }
              const o = 5 * time
              const h = o - Math.floor(o)
              const l = createTypedArray('float32', r)
              if (r > 1) {
                for (s = 0; s < r; s += 1) l[s] = this.pv[s] + a[s] + (-e + 2 * e * BMMath.random()) * h
                return l
              }
              return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
            }.bind(this)

            function loopInDuration (t, e) {
              return loopIn(t, e, !0)
            }

            function loopOutDuration (t, e) {
              return loopOut(t, e, !0)
            }

            thisProperty.loopIn && (loop_in = loopIn = thisProperty.loopIn.bind(thisProperty)), thisProperty.loopOut && (loop_out = loopOut = thisProperty.loopOut.bind(thisProperty)), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this))
            let time
            let velocity
            let value
            let text
            let textIndex
            let textTotal
            let selectorValue
            const comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface)

            function lookAt (t, e) {
              const i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
              const s = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads
              return [-Math.atan2(i[1], i[2]) / degToRads, s, 0]
            }

            function easeOut (t, e, i, s, r) {
              return applyEase(easeOutBez, t, e, i, s, r)
            }

            function easeIn (t, e, i, s, r) {
              return applyEase(easeInBez, t, e, i, s, r)
            }

            function ease (t, e, i, s, r) {
              return applyEase(easeInOutBez, t, e, i, s, r)
            }

            function applyEase (t, e, i, s, r, a) {
              void 0 === r ? (r = i, a = s) : e = (e - i) / (s - i), e > 1 ? e = 1 : e < 0 && (e = 0)
              const n = t(e)
              if ($bm_isInstanceOfArray(r)) {
                let o
                const h = r.length
                const l = createTypedArray('float32', h)
                for (o = 0; o < h; o += 1) l[o] = (a[o] - r[o]) * n + r[o]
                return l
              }
              return (a - r) * n + r
            }

            function nearestKey (t) {
              let e
              let i
              let s
              const r = data.k.length
              if (data.k.length && typeof data.k[0] !== 'number') {
                if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, s = data.k[0].t; else {
                  for (e = 0; e < r - 1; e += 1) {
                    if (t === data.k[e].t) {
                      i = e + 1, s = data.k[e].t
                      break
                    }
                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                      t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t)
                      break
                    }
                  }
                  i === -1 && (i = e + 1, s = data.k[e].t)
                }
              } else i = 0, s = 0
              const a = {}
              return a.index = i, a.time = s / elem.comp.globalData.frameRate, a
            }

            function key (t) {
              if (!data.k.length || typeof data.k[0] === 'number') throw Error('The property has no keyframe at index ' + t)
              t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] }
              let e
              let i
              let s
              const r = Object.prototype.hasOwnProperty.call(data.k[t], 's') ? data.k[t].s : data.k[t - 1].e
              for (s = r.length, i = 0; i < s; i += 1) e[i] = r[i], e.value[i] = r[i]
              return e
            }

            function framesToTime (t, e) {
              return e || (e = elem.comp.globalData.frameRate), t / e
            }

            function timeToFrames (t, e) {
              return t || t === 0 || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
            }

            function seedRandom (t) {
              BMMath.seedrandom(randSeed + t)
            }

            function sourceRectAtTime () {
              return elem.sourceRectAtTime()
            }

            function substring (t, e) {
              return typeof value === 'string' ? void 0 === e ? value.substring(t) : value.substring(t, e) : ''
            }

            function substr (t, e) {
              return typeof value === 'string' ? void 0 === e ? value.substr(t) : value.substr(t, e) : ''
            }

            function posterizeTime (t) {
              value = valueAtTime(time = t === 0 ? 0 : Math.floor(time * t) / t)
            }

            let parent
            const index = elem.data.ind
            let hasParent = !(!elem.hierarchy || !elem.hierarchy.length)
            var randSeed = Math.floor(1e6 * Math.random())
            const globalData = elem.globalData

            function executeExpression (t) {
              return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector' ? value : (this.propType === 'textSelector' && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || ($bm_transform = transform = elem.layerInterface('ADBE Transform Group'), transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer('ADBE Root Vectors Group')), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
            }

            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
          }

          return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
        }())
        const expressionHelpers = {
          searchExpressions: function (t, e, i) {
            e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
          },
          getSpeedAtTime: function (t) {
            let e
            const i = this.getValueAtTime(t)
            const s = this.getValueAtTime(t + -0.01)
            let r = 0
            if (i.length) {
              for (e = 0; e < i.length; e += 1) r += Math.pow(s[e] - i[e], 2)
              r = 100 * Math.sqrt(r)
            } else r = 0
            return r
          },
          getVelocityAtTime: function (t) {
            if (void 0 !== this.vel) return this.vel
            let e
            let i
            const s = -0.001
            const r = this.getValueAtTime(t)
            const a = this.getValueAtTime(t + s)
            if (r.length) for (e = createTypedArray('float32', r.length), i = 0; i < r.length; i += 1) e[i] = (a[i] - r[i]) / s; else e = (a - r) / s
            return e
          },
          getValueAtTime: function (t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
          },
          getStaticValueAtTime: function () {
            return this.pv
          },
          setGroupProperty: function (t) {
            this.propertyGroup = t
          }
        }

        function addPropertyDecorator () {
          function t (t, e, i) {
            if (!this.k || !this.keyframes) return this.pv
            t = t ? t.toLowerCase() : ''
            let s
            let r
            let a
            let n
            let o
            const h = this.comp.renderedFrame
            const l = this.keyframes
            const p = l[l.length - 1].t
            if (h <= p) return this.pv
            if (i ? r = p - (s = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), s = p - (r = l[l.length - 1 - e].t)), t === 'pingpong') {
              if (Math.floor((h - r) / s) % 2 != 0) return this.getValueAtTime((s - (h - r) % s + r) / this.comp.globalData.frameRate, 0)
            } else {
              if (t === 'offset') {
                const f = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                const c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                const u = this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0)
                const m = Math.floor((h - r) / s)
                if (this.pv.length) {
                  for (n = (o = Array(f.length)).length, a = 0; a < n; a += 1) o[a] = (c[a] - f[a]) * m + u[a]
                  return o
                }
                return (c - f) * m + u
              }
              if (t === 'continue') {
                const d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                const $ = this.getValueAtTime((p - 0.001) / this.comp.globalData.frameRate, 0)
                if (this.pv.length) {
                  for (n = (o = Array(d.length)).length, a = 0; a < n; a += 1) o[a] = d[a] + (d[a] - $[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4
                  return o
                }
                return d + (h - p) / 0.001 * (d - $)
              }
            }
            return this.getValueAtTime(((h - r) % s + r) / this.comp.globalData.frameRate, 0)
          }

          function e (t, e, i) {
            if (!this.k) return this.pv
            t = t ? t.toLowerCase() : ''
            let s
            let r
            let a
            let n
            let o
            const h = this.comp.renderedFrame
            const l = this.keyframes
            const p = l[0].t
            if (h >= p) return this.pv
            if (i ? r = p + (s = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), s = (r = l[e].t) - p), t === 'pingpong') {
              if (Math.floor((p - h) / s) % 2 == 0) return this.getValueAtTime(((p - h) % s + p) / this.comp.globalData.frameRate, 0)
            } else {
              if (t === 'offset') {
                const f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                const c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0)
                const u = this.getValueAtTime((s - (p - h) % s + p) / this.comp.globalData.frameRate, 0)
                const m = Math.floor((p - h) / s) + 1
                if (this.pv.length) {
                  for (n = (o = Array(f.length)).length, a = 0; a < n; a += 1) o[a] = u[a] - (c[a] - f[a]) * m
                  return o
                }
                return u - (c - f) * m
              }
              if (t === 'continue') {
                const d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                const $ = this.getValueAtTime((p + 0.001) / this.comp.globalData.frameRate, 0)
                if (this.pv.length) {
                  for (n = (o = Array(d.length)).length, a = 0; a < n; a += 1) o[a] = d[a] + (d[a] - $[a]) * (p - h) / 0.001
                  return o
                }
                return d + (d - $) * (p - h) / 0.001
              }
            }
            return this.getValueAtTime((s - ((p - h) % s + p)) / this.comp.globalData.frameRate, 0)
          }

          function i (t, e) {
            if (!this.k || (t = 0.5 * (t || 0.4), (e = Math.floor(e || 5)) <= 1)) return this.pv
            let i
            let s
            const r = this.comp.renderedFrame / this.comp.globalData.frameRate
            const a = r - t
            const n = e > 1 ? (r + t - a) / (e - 1) : 1
            let o = 0
            let h = 0
            for (i = this.pv.length ? createTypedArray('float32', this.pv.length) : 0; o < e;) {
              if (s = this.getValueAtTime(a + o * n), this.pv.length) for (h = 0; h < this.pv.length; h += 1) i[h] += s[h]; else i += s
              o += 1
            }
            if (this.pv.length) for (h = 0; h < this.pv.length; h += 1) i[h] /= e; else i /= e
            return i
          }

          function s (t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() })
            const e = this._transformCachingAtTime.v
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              const i = this.a.getValueAtTime(t)
              e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              const s = this.s.getValueAtTime(t)
              e.scale(s[0] * this.s.mult, s[1] * this.s.mult, s[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              const r = this.sk.getValueAtTime(t)
              const a = this.sa.getValueAtTime(t)
              e.skewFromAxis(-r * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              const n = this.r.getValueAtTime(t)
              e.rotate(-n * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              const o = this.rz.getValueAtTime(t)
              const h = this.ry.getValueAtTime(t)
              const l = this.rx.getValueAtTime(t)
              const p = this.or.getValueAtTime(t)
              e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              const f = this.px.getValueAtTime(t)
              const c = this.py.getValueAtTime(t)
              if (this.data.p.z) {
                const u = this.pz.getValueAtTime(t)
                e.translate(f * this.px.mult, c * this.py.mult, -u * this.pz.mult)
              } else e.translate(f * this.px.mult, c * this.py.mult, 0)
            } else {
              const m = this.p.getValueAtTime(t)
              e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
            }
            return e
          }

          function r () {
            return this.v.clone(new Matrix())
          }

          const a = TransformPropertyFactory.getTransformProperty
          TransformPropertyFactory.getTransformProperty = function (t, e, i) {
            const n = a(t, e, i)
            return n.dynamicProperties.length ? n.getValueAtTime = s.bind(n) : n.getValueAtTime = r.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
          }
          const n = PropertyFactory.getProp
          PropertyFactory.getProp = function (s, r, a, o, h) {
            const l = n(s, r, a, o, h)
            l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = r.a === 1 ? r.k.length : 0, l.propertyIndex = r.ix
            let p = 0
            return a !== 0 && (p = createTypedArray('float32', r.a === 1 ? r.k[0].s.length : r.k.length)), l._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: p
            }, expressionHelpers.searchExpressions(s, r, l), l.k && h.addDynamicProperty(l), l
          }
          const o = ShapePropertyFactory.getConstructorFunction()
          const h = ShapePropertyFactory.getKeyframedConstructorFunction()

          function l () {
          }

          l.prototype = {
            vertices: function (t, e) {
              this.k && this.getValue()
              let i
              let s = this.v
              void 0 !== e && (s = this.getValueAtTime(e, 0))
              const r = s._length
              const a = s[t]
              const n = s.v
              const o = createSizedArray(r)
              for (i = 0; i < r; i += 1) o[i] = t === 'i' || t === 'o' ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]]
              return o
            },
            points: function (t) {
              return this.vertices('v', t)
            },
            inTangents: function (t) {
              return this.vertices('i', t)
            },
            outTangents: function (t) {
              return this.vertices('o', t)
            },
            isClosed: function () {
              return this.v.c
            },
            pointOnPath: function (t, e) {
              let i = this.v
              void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i))
              for (var s, r = this._segmentsLength, a = r.lengths, n = r.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
                if (l + a[o].addedLength > n) {
                  const p = o
                  const f = i.c && o === h - 1 ? 0 : o + 1
                  const c = (n - l) / a[o].addedLength
                  s = bez.getPointInSegment(i.v[p], i.v[f], i.o[p], i.i[f], c, a[o])
                  break
                }
                l += a[o].addedLength, o += 1
              }
              return s || (s = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), s
            },
            vectorOnPath: function (t, e, i) {
              t == 1 ? t = this.v.c : t == 0 && (t = 0.999)
              const s = this.pointOnPath(t, e)
              const r = this.pointOnPath(t + 0.001, e)
              const a = r[0] - s[0]
              const n = r[1] - s[1]
              const o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2))
              return o === 0 ? [0, 0] : i === 'tangent' ? [a / o, n / o] : [-n / o, a / o]
            },
            tangentOnPath: function (t, e) {
              return this.vectorOnPath(t, e, 'tangent')
            },
            normalOnPath: function (t, e) {
              return this.vectorOnPath(t, e, 'normal')
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function (t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, h.prototype.initiateExpression = ExpressionManager.initiateExpression
          const p = ShapePropertyFactory.getShapeProp
          ShapePropertyFactory.getShapeProp = function (t, e, i, s, r) {
            const a = p(t, e, i, s, r)
            return a.propertyIndex = e.ix, a.lock = !1, i === 3 ? expressionHelpers.searchExpressions(t, e.pt, a) : i === 4 && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
          }
        }

        function initialize$1 () {
          addPropertyDecorator()
        }

        function addDecorator () {
          TextProperty.prototype.getExpressionValue = function (t, e) {
            const i = this.calculateExpression(e)
            if (t.t !== i) {
              const s = {}
              return this.copyData(s, t), s.t = i.toString(), s.__complete = !1, s
            }
            return t
          }, TextProperty.prototype.searchProperty = function () {
            const t = this.searchKeyframes()
            const e = this.searchExpressions()
            return this.kf = t || e, this.kf
          }, TextProperty.prototype.searchExpressions = function () {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize () {
          addDecorator()
        }

        function SVGComposableEffect () {
        }

        SVGComposableEffect.prototype = {
          createMergeNode: function (t, e) {
            let i
            let s
            const r = createNS('feMerge')
            for (r.setAttribute('result', t), s = 0; s < e.length; s += 1) (i = createNS('feMergeNode')).setAttribute('in', e[s]), r.appendChild(i), r.appendChild(i)
            return r
          }
        }
        const linearFilterValue = '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0'

        function SVGTintFilter (t, e, i, s, r) {
          this.filterManager = e
          let a = createNS('feColorMatrix')
          a.setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'linearRGB'), a.setAttribute('values', linearFilterValue + ' 1 0'), this.linearFilter = a, a.setAttribute('result', s + '_tint_1'), t.appendChild(a), (a = createNS('feColorMatrix')).setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), a.setAttribute('result', s + '_tint_2'), t.appendChild(a), this.matrixFilter = a
          const n = this.createMergeNode(s, [r, s + '_tint_1', s + '_tint_2'])
          t.appendChild(n)
        }

        function SVGFillFilter (t, e, i, s) {
          this.filterManager = e
          const r = createNS('feColorMatrix')
          r.setAttribute('type', 'matrix'), r.setAttribute('color-interpolation-filters', 'sRGB'), r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), r.setAttribute('result', s), t.appendChild(r), this.matrixFilter = r
        }

        function SVGStrokeEffect (t, e, i) {
          this.initialized = !1, this.filterManager = e, this.elem = i, this.paths = []
        }

        function SVGTritoneFilter (t, e, i, s) {
          this.filterManager = e
          const r = createNS('feColorMatrix')
          r.setAttribute('type', 'matrix'), r.setAttribute('color-interpolation-filters', 'linearRGB'), r.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'), t.appendChild(r)
          const a = createNS('feComponentTransfer')
          a.setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('result', s), this.matrixFilter = a
          const n = createNS('feFuncR')
          n.setAttribute('type', 'table'), a.appendChild(n), this.feFuncR = n
          const o = createNS('feFuncG')
          o.setAttribute('type', 'table'), a.appendChild(o), this.feFuncG = o
          const h = createNS('feFuncB')
          h.setAttribute('type', 'table'), a.appendChild(h), this.feFuncB = h, t.appendChild(a)
        }

        function SVGProLevelsFilter (t, e, i, s) {
          this.filterManager = e
          const r = this.filterManager.effectElements
          let a = createNS('feComponentTransfer');
          (r[10].p.k || r[10].p.v !== 0 || r[11].p.k || r[11].p.v !== 1 || r[12].p.k || r[12].p.v !== 1 || r[13].p.k || r[13].p.v !== 0 || r[14].p.k || r[14].p.v !== 1) && (this.feFuncR = this.createFeFunc('feFuncR', a)), (r[17].p.k || r[17].p.v !== 0 || r[18].p.k || r[18].p.v !== 1 || r[19].p.k || r[19].p.v !== 1 || r[20].p.k || r[20].p.v !== 0 || r[21].p.k || r[21].p.v !== 1) && (this.feFuncG = this.createFeFunc('feFuncG', a)), (r[24].p.k || r[24].p.v !== 0 || r[25].p.k || r[25].p.v !== 1 || r[26].p.k || r[26].p.v !== 1 || r[27].p.k || r[27].p.v !== 0 || r[28].p.k || r[28].p.v !== 1) && (this.feFuncB = this.createFeFunc('feFuncB', a)), (r[31].p.k || r[31].p.v !== 0 || r[32].p.k || r[32].p.v !== 1 || r[33].p.k || r[33].p.v !== 1 || r[34].p.k || r[34].p.v !== 0 || r[35].p.k || r[35].p.v !== 1) && (this.feFuncA = this.createFeFunc('feFuncA', a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute('color-interpolation-filters', 'sRGB'), t.appendChild(a)), (r[3].p.k || r[3].p.v !== 0 || r[4].p.k || r[4].p.v !== 1 || r[5].p.k || r[5].p.v !== 1 || r[6].p.k || r[6].p.v !== 0 || r[7].p.k || r[7].p.v !== 1) && ((a = createNS('feComponentTransfer')).setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('result', s), t.appendChild(a), this.feFuncRComposed = this.createFeFunc('feFuncR', a), this.feFuncGComposed = this.createFeFunc('feFuncG', a), this.feFuncBComposed = this.createFeFunc('feFuncB', a))
        }

        function SVGDropShadowEffect (t, e, i, s, r) {
          const a = e.container.globalData.renderConfig.filterSize
          const n = e.data.fs || a
          t.setAttribute('x', n.x || a.x), t.setAttribute('y', n.y || a.y), t.setAttribute('width', n.width || a.width), t.setAttribute('height', n.height || a.height), this.filterManager = e
          const o = createNS('feGaussianBlur')
          o.setAttribute('in', 'SourceAlpha'), o.setAttribute('result', s + '_drop_shadow_1'), o.setAttribute('stdDeviation', '0'), this.feGaussianBlur = o, t.appendChild(o)
          const h = createNS('feOffset')
          h.setAttribute('dx', '25'), h.setAttribute('dy', '0'), h.setAttribute('in', s + '_drop_shadow_1'), h.setAttribute('result', s + '_drop_shadow_2'), this.feOffset = h, t.appendChild(h)
          const l = createNS('feFlood')
          l.setAttribute('flood-color', '#00ff00'), l.setAttribute('flood-opacity', '1'), l.setAttribute('result', s + '_drop_shadow_3'), this.feFlood = l, t.appendChild(l)
          const p = createNS('feComposite')
          p.setAttribute('in', s + '_drop_shadow_3'), p.setAttribute('in2', s + '_drop_shadow_2'), p.setAttribute('operator', 'in'), p.setAttribute('result', s + '_drop_shadow_4'), t.appendChild(p)
          const f = this.createMergeNode(s, [s + '_drop_shadow_4', r])
          t.appendChild(f)
        }

        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            const e = this.filterManager.effectElements[0].p.v
            const i = this.filterManager.effectElements[1].p.v
            const s = this.filterManager.effectElements[2].p.v / 100
            this.linearFilter.setAttribute('values', linearFilterValue + ' ' + s + ' 0'), this.matrixFilter.setAttribute('values', i[0] - e[0] + ' 0 0 0 ' + e[0] + ' ' + (i[1] - e[1]) + ' 0 0 0 ' + e[1] + ' ' + (i[2] - e[2]) + ' 0 0 0 ' + e[2] + ' 0 0 0 1 0')
          }
        }, SVGFillFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            const e = this.filterManager.effectElements[2].p.v
            const i = this.filterManager.effectElements[6].p.v
            this.matrixFilter.setAttribute('values', '0 0 0 0 ' + e[0] + ' 0 0 0 0 ' + e[1] + ' 0 0 0 0 ' + e[2] + ' 0 0 0 ' + i + ' 0')
          }
        }, SVGStrokeEffect.prototype.initialize = function () {
          let t
          let e
          let i
          let s
          let r = this.elem.layerElement.children || this.elem.layerElement.childNodes
          for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : s = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS('g')).setAttribute('fill', 'none'), e.setAttribute('stroke-linecap', 'round'), e.setAttribute('stroke-dashoffset', 1); i < s; i += 1) {
            t = createNS('path'), e.appendChild(t), this.paths.push({
              p: t,
              m: i
            })
          }
          if (this.filterManager.effectElements[10].p.v === 3) {
            const a = createNS('mask')
            const n = createElementID()
            a.setAttribute('id', n), a.setAttribute('mask-type', 'alpha'), a.appendChild(e), this.elem.globalData.defs.appendChild(a)
            const o = createNS('g')
            for (o.setAttribute('mask', 'url(' + getLocationHref() + '#' + n + ')'); r[0];) o.appendChild(r[0])
            this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute('stroke', '#fff')
          } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
            if (this.filterManager.effectElements[10].p.v === 2) for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0])
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute('mask'), e.setAttribute('stroke', '#fff')
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function (t) {
          this.initialized || this.initialize()
          let e
          let i
          let s
          const r = this.paths.length
          for (e = 0; e < r; e += 1) {
            if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute('d', i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
              if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                const a = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                const n = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                const o = s.getTotalLength()
                h = '0 0 0 ' + o * a + ' '
                var h
                var l
                var p
                const f = Math.floor(o * (n - a) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01))
                for (l = 0; l < f; l += 1) h += '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + ' '
                h += '0 ' + 10 * o + ' 0 0'
              } else h = '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01
              s.setAttribute('stroke-dasharray', h)
            }
          }
          if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute('stroke-width', 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
            const c = this.filterManager.effectElements[3].p.v
            this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(255 * c[0]) + ',' + bmFloor(255 * c[1]) + ',' + bmFloor(255 * c[2]) + ')')
          }
        }, SVGTritoneFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            const e = this.filterManager.effectElements[0].p.v
            const i = this.filterManager.effectElements[1].p.v
            const s = this.filterManager.effectElements[2].p.v
            const r = s[0] + ' ' + i[0] + ' ' + e[0]
            const a = s[1] + ' ' + i[1] + ' ' + e[1]
            const n = s[2] + ' ' + i[2] + ' ' + e[2]
            this.feFuncR.setAttribute('tableValues', r), this.feFuncG.setAttribute('tableValues', a), this.feFuncB.setAttribute('tableValues', n)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
          const i = createNS(t)
          return i.setAttribute('type', 'table'), e.appendChild(i), i
        }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, s, r) {
          for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, { length: 256 }), f = 0, c = r - s, u = e - t; o <= 256;) n = (a = o / 256) <= h ? u < 0 ? r : s : a >= l ? u < 0 ? s : r : s + c * Math.pow((a - t) / u, 1 / i), p[f] = n, f += 1, o += 256 / 255
          return p.join(' ')
        }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            let e
            const i = this.filterManager.effectElements
            this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute('tableValues', e), this.feFuncGComposed.setAttribute('tableValues', e), this.feFuncBComposed.setAttribute('tableValues', e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute('tableValues', e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute('tableValues', e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute('tableValues', e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute('tableValues', e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              const e = this.filterManager.effectElements[0].p.v
              this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              const i = this.filterManager.effectElements[3].p.v
              const s = (this.filterManager.effectElements[2].p.v - 90) * degToRads
              const r = i * Math.cos(s)
              const a = i * Math.sin(s)
              this.feOffset.setAttribute('dx', r), this.feOffset.setAttribute('dy', a)
            }
          }
        }
        const _svgMatteSymbols = []

        function SVGMatte3Effect (t, e, i) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS('g'), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
        }

        function SVGGaussianBlurEffect (t, e, i, s) {
          t.setAttribute('x', '-100%'), t.setAttribute('y', '-100%'), t.setAttribute('width', '300%'), t.setAttribute('height', '300%'), this.filterManager = e
          const r = createNS('feGaussianBlur')
          r.setAttribute('result', s), t.appendChild(r), this.feGaussianBlur = r
        }

        return SVGMatte3Effect.prototype.findSymbol = function (t) {
          for (let e = 0, i = _svgMatteSymbols.length; e < i;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e]
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
          const i = t.layerElement.parentNode
          if (i) {
            for (var s, r = i.children, a = 0, n = r.length; a < n && r[a] !== t.layerElement;) a += 1
            a <= n - 2 && (s = r[a + 1])
            const o = createNS('use')
            o.setAttribute('href', '#' + e), s ? i.insertBefore(o, s) : i.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
          if (!this.findSymbol(e)) {
            const i = createElementID()
            const s = createNS('mask')
            s.setAttribute('id', e.layerId), s.setAttribute('mask-type', 'alpha'), _svgMatteSymbols.push(e)
            const r = t.globalData.defs
            r.appendChild(s)
            const a = createNS('symbol')
            a.setAttribute('id', i), this.replaceInParent(e, i), a.appendChild(e.layerElement), r.appendChild(a)
            const n = createNS('use')
            n.setAttribute('href', '#' + i), s.appendChild(n), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function () {
          for (let t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, s = e.length; i < s;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function () {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
          if (t || this.filterManager._mdf) {
            const e = 0.3 * this.filterManager.effectElements[0].p.v
            const i = this.filterManager.effectElements[1].p.v
            const s = i == 3 ? 0 : e
            const r = i == 2 ? 0 : e
            this.feGaussianBlur.setAttribute('stdDeviation', s + ' ' + r)
            const a = this.filterManager.effectElements[2].p.v == 1 ? 'wrap' : 'duplicate'
            this.feGaussianBlur.setAttribute('edgeMode', a)
          }
        }, registerRenderer('canvas', CanvasRenderer), registerRenderer('html', HybridRenderer), registerRenderer('svg', SVGRenderer), ShapeModifiers.registerModifier('tm', TrimModifier), ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier), ShapeModifiers.registerModifier('rp', RepeaterModifier), ShapeModifiers.registerModifier('rd', RoundCornersModifier), ShapeModifiers.registerModifier('zz', ZigZagModifier), ShapeModifiers.registerModifier('op', OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
      }, module.exports = factory())
    }
  }
  const __webpack_module_cache__ = {}

  function __webpack_require__ (t) {
    const e = __webpack_module_cache__[t]
    if (void 0 !== e) return e.exports
    const i = __webpack_module_cache__[t] = { exports: {} }
    return __webpack_modules__[t].call(i.exports, i, i.exports, __webpack_require__), i.exports
  }

  __webpack_require__.amdO = {}
  const __webpack_exports__ = {}
  !(function () {
    'use strict'

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

      return $.prototype = g, a(b, 'constructor', { value: g, configurable: !0 }), a(g, 'constructor', {
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

    function s (e, i) {
      for (var s, r = 0; r < i.length; r++) {
        const a = i[r]
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, (s = (function (e, i) {
          if (t(e) !== 'object' || e === null) return e
          const s = e[Symbol.toPrimitive]
          if (void 0 !== s) {
            const r = s.call(e, 'string')
            if (t(r) !== 'object') return r
            throw TypeError('@@toPrimitive must return a primitive value.')
          }
          return String(e)
        }(a.key)), t(s) === 'symbol' ? s : String(s)), a)
      }
    }

    const r = (function () {
      let t, r, a, n

      function o (t) {
        !(function (t, e) {
          if (!(t instanceof e)) throw TypeError('Cannot call a class as a function')
        }(this, o)), this.slider = t, this.sliderContainer = t.querySelector('.slider__container'), this.sliderElements = t.querySelectorAll('.slider__item'), this.sliderCounter = 0, this.minWidth = 280, this.sliderActiveElement = t.querySelector('.slider__item--active'), this.initSlider(), this.slideWidth = null, this.currentPosition = 0
      }

      return t = o, r = [{
        key: 'throttle',
        value: function (t, e) {
          let i
          let s
          let r = !1
          return function a () {
            if (r) return i = arguments, void (s = this)
            t.apply(this, arguments), r = !0, setTimeout(function () {
              r = !1, i && (a.apply(s, i), i = s = null)
            }, e)
          }
        }
      }, {
        key: 'initSlider',
        value: function () {
          const t = this.sliderElements[this.sliderCounter]
          t && t.classList.add('slider__item--active'), this.sliderActiveElement = t, this.setSizes(), this.setSizes(), this.resizeHandler()
        }
      }, {
        key: 'getHeight',
        value: function (t) {
          return t.getBoundingClientRect().height
        }
      }, {
        key: 'getWidth',
        value: function (t) {
          return t.getBoundingClientRect().width
        }
      }, {
        key: 'getNextPosition',
        value: function (t) {
          return this.currentPosition = this.currentPosition + t, this.currentPosition
        }
      }, {
        key: 'setHeight',
        value: function (t, e) {
          t.style.height = e + 'px'
        }
      }, {
        key: 'setMinWidth',
        value: function (t, e) {
          t.style.minWidth = e + 'px'
        }
      }, {
        key: 'setSizes',
        value: function () {
          const t = this.getWidth(this.sliderContainer)
          const e = this.getHeight(this.sliderActiveElement)
          this.setHeight(this.slider, e), this.setMinWidth(this.sliderActiveElement, t)
        }
      }, {
        key: 'resizeHandler',
        value: function () {
          const t = this.throttle(this.setSizes.bind(this), 100)
          window.addEventListener('resize', t)
        }
      }, {
        key: 'setSliderPosition',
        value: (a = e().mark(function t (i) {
          let s
          const r = this
          return e().wrap(function (t) {
            for (; ;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!this.sliderActiveElement) {
                    t.next = 5
                    break
                  }
                  return t.next = 3, this.animationHide(this.sliderActiveElement).then(function (t) {
                    r.sliderCounter = i - 1
                    const e = -r.getWidth(t) * r.sliderCounter + 'px'
                    return r.sliderContainer.style.transform = 'translateX('.concat(e, ' )'), t.classList.remove('slider__item--active'), r.initSlider(), r.animationHeight(r.sliderContainer), r.sliderActiveElement
                  }).then(function (t) {
                    return r.animationShow(t), 'done'
                  })
                case 3:
                  return s = t.sent, t.abrupt('return', s)
                case 5:
                case 'end':
                  return t.stop()
              }
            }
          }, t, this)
        }), n = function () {
          const t = this
          const e = arguments
          return new Promise(function (s, r) {
            const n = a.apply(t, e)

            function o (t) {
              i(n, s, r, o, h, 'next', t)
            }

            function h (t) {
              i(n, s, r, o, h, 'throw', t)
            }

            o(void 0)
          })
        }, function (t) {
          return n.apply(this, arguments)
        })
      }, {
        key: 'nextSlide',
        value: function () {
          const t = this
          this.sliderElements.length - 1 !== this.sliderCounter && this.sliderActiveElement && this.animationHide(this.sliderActiveElement).then(function (e) {
            const i = -t.getWidth(e)
            const s = t.getNextPosition(i) + 'px'
            return t.sliderContainer.style.transform = 'translateX('.concat(s, ' )'), e.classList.remove('slider__item--active'), t.sliderCounter += 1, t.initSlider(), t.animationHeight(t.sliderContainer), t.sliderActiveElement
          }).then(function (e) {
            t.animationShow(e)
          })
        }
      }, {
        key: 'animationHide',
        value: function (t) {
          return new Promise(function (e) {
            t.classList.add('fade-out'), t.addEventListener('animationend', function () {
              e(t), t.classList.remove('fade-out')
            }, { once: !0 })
          })
        }
      }, {
        key: 'animationShow',
        value: function (t) {
          return new Promise(function (e) {
            t.classList.add('fade-in'), t.addEventListener('animationend', function () {
              e(t), t.classList.remove('fade-in')
            }, { once: !0 })
          })
        }
      }, {
        key: 'animationHeight',
        value: function (t) {
          const e = this
          return new Promise(function (i) {
            t.style.height = e.getHeight(e.sliderActiveElement) + 'px', t.addEventListener('transitionend', function (e) {
              e.target === t && i(t)
            }, { once: !0 })
          })
        }
      }], s(t.prototype, r), Object.defineProperty(t, 'prototype', { writable: !1 }), o
    }())
    const a = __webpack_require__(248)
    const n = (__webpack_require__(326), JSON.parse('{"nm":"CHECK","ddd":0,"h":1080,"w":1080,"meta":{"g":"LottieFiles AE 0.1.20"},"layers":[{"ty":0,"nm":"Comp 2","sr":1,"st":14.0000005702317,"op":108.00000439893,"ip":14.0000005702317,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[540,540,0],"ix":1},"s":{"a":0,"k":[31.111,31.111,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[496,220,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":1080,"h":1080,"refId":"comp_0","ind":1},{"ty":4,"nm":"Shape Layer 2","sr":1,"st":28.0000011404634,"op":122.000004969162,"ip":28.0000011404634,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[524,552,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-156,36],[-32,160],[220,-140]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":40,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.333,"y":0},"i":{"x":0.221,"y":1},"s":[0],"t":28},{"o":{"x":0.333,"y":0},"i":{"x":0.191,"y":1},"s":[100],"t":44},{"s":[87],"t":59.0000024031193}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":0,"k":0,"ix":1},"m":1}],"ind":2},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[60,60,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[540,540,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":3,"it":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"s":{"a":0,"k":[1080,1080],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.647,"y":0},"i":{"x":0.113,"y":1},"s":[0],"t":0},{"s":[100],"t":22.0000008960784}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":0,"k":0,"ix":1},"m":1}],"ind":3},{"ty":3,"nm":"","sr":1,"st":17.0000006924242,"op":111.000004521123,"ip":17.0000006924242,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.725,"y":0},"i":{"x":0.321,"y":1},"s":[0,0,100],"t":17},{"s":[60,60,100],"t":40.0000016292334}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[540,540,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"ind":4}],"v":"5.5.7","fr":29.9700012207031,"op":91.000003706506,"ip":0,"assets":[{"nm":"","id":"comp_0","layers":[{"ty":4,"nm":"Shape Layer 8","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":315,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"Shape Layer 7","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":270,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2},{"ty":4,"nm":"Shape Layer 6","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":225,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":3},{"ty":4,"nm":"Shape Layer 5","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":180,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":4},{"ty":4,"nm":"Shape Layer 4","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":135,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":5},{"ty":4,"nm":"Shape Layer 3","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":90,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":6},{"ty":4,"nm":"Shape Layer 2","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":45,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":7},{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":94.0000038286985,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-396,-26.286,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[552,540,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-236,-32],[94.286,-32]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.609,"y":0},"i":{"x":0.442,"y":1},"s":[0],"t":0},{"s":[100],"t":10.2675004182038}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.622,"y":0},"i":{"x":0.432,"y":1},"s":[0],"t":4.2},{"s":[100],"t":14.0000005702317}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":65,"ix":5},"c":{"a":0,"k":[0.949,0.8118,0.7451],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":8}]}]}'))

    function o (t) {
      return (function (t) {
        if (Array.isArray(t)) return h(t)
      }(t)) || (function (t) {
        if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(t)) return Array.from(t)
      }(t)) || (function (t, e) {
        if (t) {
          if (typeof t === 'string') return h(t, e)
          let i = Object.prototype.toString.call(t).slice(8, -1)
          return i === 'Object' && t.constructor && (i = t.constructor.name), i === 'Map' || i === 'Set' ? Array.from(t) : i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? h(t, e) : void 0
        }
      }(t)) || (function () {
        throw TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
      }())
    }

    function h (t, e) {
      (e == null || e > t.length) && (e = t.length)
      for (var i = 0, s = Array(e); i < e; i++) s[i] = t[i]
      return s
    }

    __webpack_require__(638)
    let l
    let p
    let f
    let c
    let u
    const m = (l = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'], p = (function () {
      let t

      function e (t) {
        const i = t.targetModal
        const s = t.triggers
        const r = void 0 === s ? [] : s
        const a = t.onShow
        const n = void 0 === a
          ? function () {
          }
          : a
        const h = t.onClose
        const l = void 0 === h
          ? function () {
          }
          : h
        const p = t.openTrigger
        const f = void 0 === p ? 'data-micromodal-trigger' : p
        const c = t.closeTrigger
        const u = void 0 === c ? 'data-micromodal-close' : c
        const m = t.openClass
        const d = void 0 === m ? 'is-open' : m
        const $ = t.disableScroll
        const g = void 0 !== $ && $
        const _ = t.disableFocus
        const v = void 0 !== _ && _
        const y = t.awaitCloseAnimation
        const b = void 0 !== y && y
        const x = t.awaitOpenAnimation
        const k = void 0 !== x && x
        const w = t.debugMode
        const A = void 0 !== w && w;
        (function (t, e) {
          if (!(t instanceof e)) throw TypeError('Cannot call a class as a function')
        })(this, e), this.modal = document.getElementById(i), this.config = {
          debugMode: A,
          disableScroll: g,
          openTrigger: f,
          closeTrigger: u,
          openClass: d,
          onShow: n,
          onClose: l,
          awaitCloseAnimation: b,
          awaitOpenAnimation: k,
          disableFocus: v
        }, r.length > 0 && this.registerTriggers.apply(this, o(r)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
      }

      return t = [{
        key: 'registerTriggers',
        value: function () {
          for (var t = this, e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s]
          i.filter(Boolean).forEach(function (e) {
            e.addEventListener('click', function (e) {
              return t.showModal(e)
            })
          })
        }
      }, {
        key: 'showModal',
        value: function () {
          const t = this
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          this.activeElement = document.activeElement, this.modal.setAttribute('aria-hidden', 'false'), this.modal.classList.add(this.config.openClass), this.scrollBehaviour('disable'), this.addEventListeners(), this.config.awaitOpenAnimation
            ? this.modal.addEventListener('animationend', function e () {
              t.modal.removeEventListener('animationend', e, !1), t.setFocusToFirstNode()
            }, !1)
            : this.setFocusToFirstNode(), this.config.onShow(this.modal, this.activeElement, e)
        }
      }, {
        key: 'closeModal',
        value: function () {
          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
          const e = this.modal
          if (this.modal.setAttribute('aria-hidden', 'true'), this.removeEventListeners(), this.scrollBehaviour('enable'), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, t), this.config.awaitCloseAnimation) {
            const i = this.config.openClass
            this.modal.addEventListener('animationend', function t () {
              e.classList.remove(i), e.removeEventListener('animationend', t, !1)
            }, !1)
          } else e.classList.remove(this.config.openClass)
        }
      }, {
        key: 'closeModalById',
        value: function (t) {
          this.modal = document.getElementById(t), this.modal && this.closeModal()
        }
      }, {
        key: 'scrollBehaviour',
        value: function (t) {
          if (this.config.disableScroll) {
            const e = document.querySelector('body')
            switch (t) {
              case 'enable':
                Object.assign(e.style, { overflow: '' })
                break
              case 'disable':
                Object.assign(e.style, { overflow: 'hidden' })
            }
          }
        }
      }, {
        key: 'addEventListeners',
        value: function () {
          this.modal.addEventListener('touchstart', this.onClick), this.modal.addEventListener('click', this.onClick), document.addEventListener('keydown', this.onKeydown)
        }
      }, {
        key: 'removeEventListeners',
        value: function () {
          this.modal.removeEventListener('touchstart', this.onClick), this.modal.removeEventListener('click', this.onClick), document.removeEventListener('keydown', this.onKeydown)
        }
      }, {
        key: 'onClick',
        value: function (t) {
          (t.target.hasAttribute(this.config.closeTrigger) || t.target.parentNode.hasAttribute(this.config.closeTrigger)) && (t.preventDefault(), t.stopPropagation(), this.closeModal(t))
        }
      }, {
        key: 'onKeydown',
        value: function (t) {
          t.keyCode === 27 && this.closeModal(t), t.keyCode === 9 && this.retainFocus(t)
        }
      }, {
        key: 'getFocusableNodes',
        value: function () {
          const t = this.modal.querySelectorAll(l)
          return Array.apply(void 0, o(t))
        }
      }, {
        key: 'setFocusToFirstNode',
        value: function () {
          const t = this
          if (!this.config.disableFocus) {
            const e = this.getFocusableNodes()
            if (e.length !== 0) {
              const i = e.filter(function (e) {
                return !e.hasAttribute(t.config.closeTrigger)
              })
              i.length > 0 && i[0].focus(), i.length === 0 && e[0].focus()
            }
          }
        }
      }, {
        key: 'retainFocus',
        value: function (t) {
          let e = this.getFocusableNodes()
          if (e.length !== 0) {
            if (e = e.filter(function (t) {
              return t.offsetParent !== null
            }), this.modal.contains(document.activeElement)) {
              const i = e.indexOf(document.activeElement)
              t.shiftKey && i === 0 && (e[e.length - 1].focus(), t.preventDefault()), !t.shiftKey && e.length > 0 && i === e.length - 1 && (e[0].focus(), t.preventDefault())
            } else e[0].focus()
          }
        }
      }], (function (t, e) {
        for (let i = 0; i < e.length; i++) {
          const s = e[i]
          s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
      }(e.prototype, t)), e
    }()), f = null, c = function (t) {
      if (!document.getElementById(t)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.'), console.warn('%cExample:', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', '<div class="modal" id="'.concat(t, '"></div>')), !1
    }, u = function (t, e) {
      let i
      if ((i = t).length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.'), console.warn('%cExample:', 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', '<a href="#" data-micromodal-trigger="my-modal"></a>')), !e) return !0
      for (const s in e) c(s)
      return !0
    }, {
      init: function (t) {
        let e
        let i
        let s
        const r = Object.assign({}, { openTrigger: 'data-micromodal-trigger' }, t)
        const a = o(document.querySelectorAll('['.concat(r.openTrigger, ']')))
        const n = (e = a, i = r.openTrigger, s = [], e.forEach(function (t) {
          const e = t.attributes[i].value
          void 0 === s[e] && (s[e] = []), s[e].push(t)
        }), s)
        if (!0 !== r.debugMode || !1 !== u(a, n)) {
          for (const h in n) {
            const l = n[h]
            r.targetModal = h, r.triggers = o(l), f = new p(r)
          }
        }
      },
      show: function (t, e) {
        const i = e || {}
        i.targetModal = t, !0 === i.debugMode && !1 === c(t) || (f && f.removeEventListeners(), (f = new p(i)).showModal())
      },
      close: function (t) {
        t ? f.closeModalById(t) : f.closeModal()
      }
    })

    function d (t) {
      return (d = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (t) {
          return typeof t
        }
        : function (t) {
          return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
        })(t)
    }

    function $ () {
      $ = function () {
        return t
      }
      var t = {}
      const e = Object.prototype
      const i = e.hasOwnProperty
      const s = Object.defineProperty || function (t, e, i) {
        t[e] = i.value
      }
      const r = typeof Symbol === 'function' ? Symbol : {}
      const a = r.iterator || '@@iterator'
      const n = r.asyncIterator || '@@asyncIterator'
      const o = r.toStringTag || '@@toStringTag'

      function h (t, e, i) {
        return Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }), t[e]
      }

      try {
        h({}, '')
      } catch (l) {
        h = function (t, e, i) {
          return t[e] = i
        }
      }

      function p (t, e, i, r) {
        const a = Object.create((e && e.prototype instanceof u ? e : u).prototype)
        return s(a, '_invoke', { value: w(t, i, new E(r || [])) }), a
      }

      function f (t, e, i) {
        try {
          return { type: 'normal', arg: t.call(e, i) }
        } catch (s) {
          return { type: 'throw', arg: s }
        }
      }

      t.wrap = p
      const c = {}

      function u () {
      }

      function m () {
      }

      function g () {
      }

      let _ = {}
      h(_, a, function () {
        return this
      })
      const v = Object.getPrototypeOf
      const y = v && v(v(D([])))
      y && y !== e && i.call(y, a) && (_ = y)
      const b = g.prototype = u.prototype = Object.create(_)

      function x (t) {
        ['next', 'throw', 'return'].forEach(function (e) {
          h(t, e, function (t) {
            return this._invoke(e, t)
          })
        })
      }

      function k (t, e) {
        let r

        function a (s, r, n, o) {
          const h = f(t[s], t, r)
          if (h.type !== 'throw') {
            const l = h.arg
            const p = l.value
            return p && d(p) == 'object' && i.call(p, '__await')
              ? e.resolve(p.__await).then(function (t) {
                a('next', t, n, o)
              }, function (t) {
                a('throw', t, n, o)
              })
              : e.resolve(p).then(function (t) {
                l.value = t, n(l)
              }, function (t) {
                return a('throw', t, n, o)
              })
          }
          o(h.arg)
        }

        s(this, '_invoke', {
          value: function (t, i) {
            function s () {
              return new e(function (e, s) {
                a(t, i, e, s)
              })
            }

            return r = r ? r.then(s, s) : s()
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
                if (o === c) continue
                return o
              }
            }
            if (i.method === 'next') i.sent = i._sent = i.arg; else if (i.method === 'throw') {
              if (s === 'suspendedStart') throw s = 'completed', i.arg
              i.dispatchException(i.arg)
            } else i.method === 'return' && i.abrupt('return', i.arg)
            s = 'executing'
            const h = f(t, e, i)
            if (h.type === 'normal') {
              if (s = i.done ? 'completed' : 'suspendedYield', h.arg === c) continue
              return { value: h.arg, done: i.done }
            }
            h.type === 'throw' && (s = 'completed', i.method = 'throw', i.arg = h.arg)
          }
        }
      }

      function A (t, e) {
        const i = e.method
        const s = t.iterator[i]
        if (void 0 === s) return e.delegate = null, i === 'throw' && t.iterator.return && (e.method = 'return', e.arg = void 0, A(t, e), e.method === 'throw') || i !== 'return' && (e.method = 'throw', e.arg = TypeError("The iterator does not provide a '" + i + "' method")), c
        const r = f(s, t.iterator, e.arg)
        if (r.type === 'throw') return e.method = 'throw', e.arg = r.arg, e.delegate = null, c
        const a = r.arg
        return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, e.method !== 'return' && (e.method = 'next', e.arg = void 0), e.delegate = null, c) : a : (e.method = 'throw', e.arg = TypeError('iterator result is not an object'), e.delegate = null, c)
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
          const e = t[a]
          if (e) return e.call(t)
          if (typeof t.next === 'function') return t
          if (!isNaN(t.length)) {
            let s = -1
            const r = function e () {
              for (; ++s < t.length;) if (i.call(t, s)) return e.value = t[s], e.done = !1, e
              return e.value = void 0, e.done = !0, e
            }
            return r.next = r
          }
        }
        return { next: S }
      }

      function S () {
        return { value: void 0, done: !0 }
      }

      return m.prototype = g, s(b, 'constructor', { value: g, configurable: !0 }), s(g, 'constructor', {
        value: m,
        configurable: !0
      }), m.displayName = h(g, o, 'GeneratorFunction'), t.isGeneratorFunction = function (t) {
        const e = typeof t === 'function' && t.constructor
        return !!e && (e === m || (e.displayName || e.name) === 'GeneratorFunction')
      }, t.mark = function (t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, h(t, o, 'GeneratorFunction')), t.prototype = Object.create(b), t
      }, t.awrap = function (t) {
        return { __await: t }
      }, x(k.prototype), h(k.prototype, n, function () {
        return this
      }), t.AsyncIterator = k, t.async = function (e, i, s, r, a) {
        void 0 === a && (a = Promise)
        const n = new k(p(e, i, s, r), a)
        return t.isGeneratorFunction(i)
          ? n
          : n.next().then(function (t) {
            return t.done ? t.value : n.next()
          })
      }, x(b), h(b, o, 'Generator'), h(b, a, function () {
        return this
      }), h(b, 'toString', function () {
        return '[object Generator]'
      }), t.keys = function (t) {
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
      }, t.values = D, E.prototype = {
        constructor: E,
        reset: function (t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(C), !t) for (const e in this) e.charAt(0) === 't' && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

          function s (i, s) {
            return n.type = 'throw', n.arg = t, e.next = i, s && (e.method = 'next', e.arg = void 0), !!s
          }

          for (let r = this.tryEntries.length - 1; r >= 0; --r) {
            const a = this.tryEntries[r]
            var n = a.completion
            if (a.tryLoc === 'root') return s('end')
            if (a.tryLoc <= this.prev) {
              const o = i.call(a, 'catchLoc')
              const h = i.call(a, 'finallyLoc')
              if (o && h) {
                if (this.prev < a.catchLoc) return s(a.catchLoc, !0)
                if (this.prev < a.finallyLoc) return s(a.finallyLoc)
              } else if (o) {
                if (this.prev < a.catchLoc) return s(a.catchLoc, !0)
              } else {
                if (!h) throw Error('try statement without catch or finally')
                if (this.prev < a.finallyLoc) return s(a.finallyLoc)
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (let s = this.tryEntries.length - 1; s >= 0; --s) {
            const r = this.tryEntries[s]
            if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
              var a = r
              break
            }
          }
          a && (t === 'break' || t === 'continue') && a.tryLoc <= e && e <= a.finallyLoc && (a = null)
          const n = a ? a.completion : {}
          return n.type = t, n.arg = e, a ? (this.method = 'next', this.next = a.finallyLoc, c) : this.complete(n)
        },
        complete: function (t, e) {
          if (t.type === 'throw') throw t.arg
          return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), c
        },
        finish: function (t) {
          for (let e = this.tryEntries.length - 1; e >= 0; --e) {
            const i = this.tryEntries[e]
            if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), C(i), c
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
          }, this.method === 'next' && (this.arg = void 0), c
        }
      }, t
    }

    function g () {
      ym(93696980, 'reachGoal', 'form_submit_agm')
    }

    function _ (t, e, i, s, r, a, n) {
      try {
        var o = t[a](n)
        var h = o.value
      } catch (l) {
        return void i(l)
      }
      o.done ? e(h) : Promise.resolve(h).then(s, r)
    }

    typeof window !== 'undefined' && (window.MicroModal = m), m.init({
      openClass: 'is-open',
      disableScroll: !0,
      disableFocus: !1,
      awaitOpenAnimation: !0,
      awaitCloseAnimation: !0
    })
    const v = document.querySelector('form')
    const y = document.querySelector('.form')
    const b = new r(document.querySelector('.slider'))
    const x = new r(document.querySelector('.slider-form'))
    console.log(r)
    const k = document.querySelectorAll('.slider-btn')
    k.forEach(function (t) {
      t.addEventListener('click', function () {
        k.forEach(function (t) {
          t.disabled = !0, t.classList.remove('active')
        }), b.setSliderPosition(+t.dataset.slide).then(function (e) {
          t.classList.add('active'), k.forEach(function (t) {
            t.disabled = !1
          })
        })
      })
    })
    const w = document.querySelectorAll('.popup__content')

    function A (t) {
      return new Promise(function (e) {
        setTimeout(e, t)
      })
    }

    const P = document.querySelector('.success-message__icon')
    const C = (0, a.loadAnimation)({
      container: P,
      renderer: 'svg',
      loop: !1,
      autoplay: !0,
      animationData: n,
      rendererSettings: { preserveAspectRatio: 'xMinYMin slice', progressiveLoad: !0, hideOnTransparent: !0 }
    })
    C.stop(), v.addEventListener('submit', function (t) {
      t.preventDefault()
      const e = t.srcElement.querySelectorAll('input')
      const i = new FormData()
      e.forEach(function (t) {
        return t.name && i.append(t.name, t.value)
      }), fetch('/crm.php', { method: 'POST', body: i }).then(function (t) {
        if (!t.ok) throw Error(t.status)
        return t
      }).then(function () {
        x.nextSlide(), C.play(), g()
      }).catch(function () {
        alert('Что-то пошло не так, перезагрузите страницу и попробуйте снова')
      })
    }), y.addEventListener('submit', function (t) {
      t.preventDefault()
      const e = t.srcElement.querySelectorAll('input')
      const i = new FormData()
      e.forEach(function (t) {
        return t.name && i.append(t.name, t.value)
      }), fetch('/crm.php', { method: 'POST', body: i }).then(function (t) {
        if (!t.ok) throw Error(t.status)
        return t
      }).then(function () {
        let t, e
        g(), w.forEach((e = (t = $().mark(function t (e) {
          return $().wrap(function (t) {
            for (; ;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!e.classList.contains('popup__content-1')) {
                    t.next = 5
                    break
                  }
                  return e.classList.add('fade-out'), t.next = 4, A(300)
                case 4:
                  e.style.display = 'none'
                case 5:
                  if (!e.classList.contains('popup__content-2')) {
                    t.next = 10
                    break
                  }
                  return t.next = 8, A(400)
                case 8:
                  e.style.display = 'flex', e.classList.add('fade-in')
                case 10:
                case 'end':
                  return t.stop()
              }
            }
          }, t)
        }), function () {
          const e = this
          const i = arguments
          return new Promise(function (s, r) {
            const a = t.apply(e, i)

            function n (t) {
              _(a, s, r, n, o, 'next', t)
            }

            function o (t) {
              _(a, s, r, n, o, 'throw', t)
            }

            n(void 0)
          })
        }), function (t) {
          return e.apply(this, arguments)
        }))
      }).catch(function () {
        alert('Что-то пошло не так, перезагрузите страницу и попробуйте снова')
      })
    })
  }())
}())
