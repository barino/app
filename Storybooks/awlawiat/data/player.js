(function () {
    var e,
    aa;
    function ba(a) {
        var b = 0;
        return function () {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            }
             : {
                done: !0
            }
        }
    }
    function k(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }
    function ca(a) {
        if (!(a instanceof Array)) {
            a = k(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    var da = "function" == typeof Object.create ? Object.create : function (a) {
        function b() {}
        b.prototype = a;
        return new b
    },
    ea;
    if ("function" == typeof Object.setPrototypeOf)
        ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                Qt: !0
            },
            ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.Qt;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
         : null
    }
    var ja = ea;
    function m(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja)
            ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Ab = b.prototype
    }
    function ka(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, f = 0; f < d; f++) {
            var g = a[f];
            if (b.call(c, g, f, a))
                return {
                    wq: f,
                    nr: g
                }
        }
        return {
            wq: -1,
            nr: void 0
        }
    }
    var la = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    function na(a, b) {
        if (b) {
            var c = ma;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var f = a[d];
                f in c || (c[f] = {});
                c = c[f]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && la(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    na("Array.prototype.findIndex", function (a) {
        return a ? a : function (a, c) {
            return ka(this, a, c).wq
        }
    });
    function oa(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    na("String.prototype.repeat", function (a) {
        return a ? a : function (a) {
            var b = oa(this, null, "repeat");
            if (0 > a || 1342177279 < a)
                throw new RangeError("Invalid count value");
            a |= 0;
            for (var d = ""; a; )
                if (a & 1 && (d += b), a >>>= 1)
                    b += b;
            return d
        }
    });
    na("Array.prototype.find", function (a) {
        return a ? a : function (a, c) {
            return ka(this, a, c).nr
        }
    });
    na("String.prototype.endsWith", function (a) {
        return a ? a : function (a, c) {
            var b = oa(this, a, "endsWith");
            a += "";
            void 0 === c && (c = b.length);
            c = Math.max(0, Math.min(c | 0, b.length));
            for (var f = a.length; 0 < f && 0 < c; )
                if (b[--c] != a[--f])
                    return !1;
            return 0 >= f
        }
    });
    na("String.prototype.startsWith", function (a) {
        return a ? a : function (a, c) {
            var b = oa(this, a, "startsWith");
            a += "";
            var f = b.length,
            g = a.length;
            c = Math.max(0, Math.min(c | 0, b.length));
            for (var h = 0; h < g && c < f; )
                if (b[c++] != a[h++])
                    return !1;
            return h >= g
        }
    });
    function pa(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var qa = "function" == typeof Object.assign ? Object.assign : function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var f in d)
                    pa(d, f) && (a[f] = d[f])
        }
        return a
    };
    na("Object.assign", function (a) {
        return a || qa
    });
    na("Object.is", function (a) {
        return a ? a : function (a, c) {
            return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c
        }
    });
    na("Array.prototype.includes", function (a) {
        return a ? a : function (a, c) {
            var b = this;
            b instanceof String && (b = String(b));
            var f = b.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
                var g = b[c];
                if (g === a || Object.is(g, a))
                    return !0
            }
            return !1
        }
    });
    na("WeakMap", function (a) {
        function b(a) {
            this.ja = (h += Math.random() + 1).toString();
            if (a) {
                a = k(a);
                for (var b; !(b = a.next()).done; )
                    b = b.value, this.set(b[0], b[1])
            }
        }
        function c() {}
        function d(a) {
            pa(a, g) || la(a, g, {
                value: new c
            })
        }
        function f(a) {
            var b = Object[a];
            b && (Object[a] = function (a) {
                if (a instanceof c)
                    return a;
                d(a);
                return b(a)
            })
        }
        if (function () {
            if (!a || !Object.seal)
                return !1;
            try {
                var b = Object.seal({}),
                c = Object.seal({}),
                d = new a([[b, 2], [c, 3]]);
                if (2 != d.get(b) || 3 != d.get(c))
                    return !1;
                d.delete(b);
                d.set(c, 4);
                return !d.has(b) &&
                4 == d.get(c)
            } catch (D) {
                return !1
            }
        }
            ())
            return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function (a, b) {
            d(a);
            if (!pa(a, g))
                throw Error("WeakMap key fail: " + a);
            a[g][this.ja] = b;
            return this
        };
        b.prototype.get = function (a) {
            return pa(a, g) ? a[g][this.ja] : void 0
        };
        b.prototype.has = function (a) {
            return pa(a, g) && pa(a[g], this.ja)
        };
        b.prototype.delete = function (a) {
            return pa(a, g) && pa(a[g], this.ja) ? delete a[g][this.ja] : !1
        };
        return b
    });
    function ra() {
        ra = function () {};
        ma.Symbol || (ma.Symbol = sa)
    }
    var sa = function () {
        var a = 0;
        return function (b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }
    ();
    function ta() {
        ra();
        var a = ma.Symbol.iterator;
        a || (a = ma.Symbol.iterator = ma.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && la(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return ua(ba(this))
            }
        });
        ta = function () {}
    }
    function ua(a) {
        ta();
        a = {
            next: a
        };
        a[ma.Symbol.iterator] = function () {
            return this
        };
        return a
    }
    na("String.prototype.padStart", function (a) {
        return a ? a : function (a, c) {
            var b = oa(this, null, "padStart");
            a -= b.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < a && c ? c.repeat(Math.ceil(a / c.length)).substring(0, a) : "") + b
        }
    });
    na("Promise", function (a) {
        function b(a) {
            this.Ta = 0;
            this.Pm = void 0;
            this.bg = [];
            var b = this.bm();
            try {
                a(b.resolve, b.reject)
            } catch (u) {
                b.reject(u)
            }
        }
        function c() {
            this.Qd = null
        }
        function d(a) {
            return a instanceof b ? a : new b(function (b) {
                b(a)
            })
        }
        if (a)
            return a;
        c.prototype.Yp = function (a) {
            null == this.Qd && (this.Qd = [], this.Vt());
            this.Qd.push(a)
        };
        c.prototype.Vt = function () {
            var a = this;
            this.Zp(function () {
                a.ku()
            })
        };
        var f = ma.setTimeout;
        c.prototype.Zp = function (a) {
            f(a, 0)
        };
        c.prototype.ku = function () {
            for (; this.Qd && this.Qd.length; ) {
                var a =
                    this.Qd;
                this.Qd = [];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    a[b] = null;
                    try {
                        c()
                    } catch (t) {
                        this.Wt(t)
                    }
                }
            }
            this.Qd = null
        };
        c.prototype.Wt = function (a) {
            this.Zp(function () {
                throw a;
            })
        };
        b.prototype.bm = function () {
            function a(a) {
                return function (d) {
                    c || (c = !0, a.call(b, d))
                }
            }
            var b = this,
            c = !1;
            return {
                resolve: a(this.Zu),
                reject: a(this.Jm)
            }
        };
        b.prototype.Zu = function (a) {
            if (a === this)
                this.Jm(new TypeError("A Promise cannot resolve to itself"));
            else if (a instanceof b)
                this.gv(a);
            else {
                a: switch (typeof a) {
                case "object":
                    var c = null != a;
                    break a;
                case "function":
                    c = !0;
                    break a;
                default:
                    c = !1
                }
                c ? this.Yu(a) : this.tq(a)
            }
        };
        b.prototype.Yu = function (a) {
            var b = void 0;
            try {
                b = a.then
            } catch (u) {
                this.Jm(u);
                return
            }
            "function" == typeof b ? this.hv(b, a) : this.tq(a)
        };
        b.prototype.Jm = function (a) {
            this.$q(2, a)
        };
        b.prototype.tq = function (a) {
            this.$q(1, a)
        };
        b.prototype.$q = function (a, b) {
            if (0 != this.Ta)
                throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.Ta);
            this.Ta = a;
            this.Pm = b;
            this.lu()
        };
        b.prototype.lu = function () {
            if (null != this.bg) {
                for (var a = 0; a < this.bg.length; ++a)
                    g.Yp(this.bg[a]);
                this.bg = null
            }
        };
        var g = new c;
        b.prototype.gv = function (a) {
            var b = this.bm();
            a.wj(b.resolve, b.reject)
        };
        b.prototype.hv = function (a, b) {
            var c = this.bm();
            try {
                a.call(b, c.resolve, c.reject)
            } catch (t) {
                c.reject(t)
            }
        };
        b.prototype.then = function (a, c) {
            function d(a, b) {
                return "function" == typeof a ? function (b) {
                    try {
                        f(a(b))
                    } catch (Ja) {
                        g(Ja)
                    }
                }
                 : b
            }
            var f,
            g,
            h = new b(function (a, b) {
                f = a;
                g = b
            });
            this.wj(d(a, f), d(c, g));
            return h
        };
        b.prototype.catch = function (a) {
            return this.then(void 0, a)
        };
        b.prototype.wj = function (a, b) {
            function c() {
                switch (d.Ta) {
                case 1:
                    a(d.Pm);
                    break;
                case 2:
                    b(d.Pm);
                    break;
                default:
                    throw Error("Unexpected state: " + d.Ta);
                }
            }
            var d = this;
            null == this.bg ? g.Yp(c) : this.bg.push(c)
        };
        b.resolve = d;
        b.reject = function (a) {
            return new b(function (b, c) {
                c(a)
            })
        };
        b.race = function (a) {
            return new b(function (b, c) {
                for (var f = k(a), g = f.next(); !g.done; g = f.next())
                    d(g.value).wj(b, c)
            })
        };
        b.all = function (a) {
            var c = k(a),
            f = c.next();
            return f.done ? d([]) : new b(function (a, b) {
                function g(b) {
                    return function (c) {
                        h[b] = c;
                        l--;
                        0 == l && a(h)
                    }
                }
                var h = [],
                l = 0;
                do
                    h.push(void 0), l++, d(f.value).wj(g(h.length -
                            1), b), f = c.next();
                while (!f.done)
            })
        };
        return b
    });
    na("Map", function (a) {
        function b() {
            var a = {};
            return a.jd = a.next = a.head = a
        }
        function c(a, b) {
            var c = a.ed;
            return ua(function () {
                if (c) {
                    for (; c.head != a.ed; )
                        c = c.jd;
                    for (; c.next != c.head; )
                        return c = c.next, {
                            done: !1,
                            value: b(c)
                        };
                    c = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
        function d(a, b) {
            var c = b && typeof b;
            "object" == c || "function" == c ? g.has(b) ? c = g.get(b) : (c = "" + ++h, g.set(b, c)) : c = "p_" + b;
            var d = a.Ch[c];
            if (d && pa(a.Ch, c))
                for (a = 0; a < d.length; a++) {
                    var f = d[a];
                    if (b !== b && f.key !== f.key || b === f.key)
                        return {
                            id: c,
                            list: d,
                            index: a,
                            Xa: f
                        }
                }
            return {
                id: c,
                list: d,
                index: -1,
                Xa: void 0
            }
        }
        function f(a) {
            this.Ch = {};
            this.ed = b();
            this.size = 0;
            if (a) {
                a = k(a);
                for (var c; !(c = a.next()).done; )
                    c = c.value, this.set(c[0], c[1])
            }
        }
        if (function () {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var b = Object.seal({
                    x: 4
                }),
                c = new a(k([[b, "s"]]));
                if ("s" != c.get(b) || 1 != c.size || c.get({
                        x: 4
                    }) || c.set({
                        x: 4
                    }, "t") != c || 2 != c.size)
                    return !1;
                var d = c.entries(),
                f = d.next();
                if (f.done || f.value[0] != b || "s" != f.value[1])
                    return !1;
                f = d.next();
                return f.done || 4 != f.value[0].x ||
                "t" != f.value[1] || !d.next().done ? !1 : !0
            } catch (z) {
                return !1
            }
        }
            ())
            return a;
        ta();
        var g = new WeakMap;
        f.prototype.set = function (a, b) {
            a = 0 === a ? 0 : a;
            var c = d(this, a);
            c.list || (c.list = this.Ch[c.id] = []);
            c.Xa ? c.Xa.value = b : (c.Xa = {
                        next: this.ed,
                        jd: this.ed.jd,
                        head: this.ed,
                        key: a,
                        value: b
                    }, c.list.push(c.Xa), this.ed.jd.next = c.Xa, this.ed.jd = c.Xa, this.size++);
            return this
        };
        f.prototype.delete = function (a) {
            a = d(this, a);
            return a.Xa && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.Ch[a.id], a.Xa.jd.next = a.Xa.next, a.Xa.next.jd =
                    a.Xa.jd, a.Xa.head = null, this.size--, !0) : !1
        };
        f.prototype.clear = function () {
            this.Ch = {};
            this.ed = this.ed.jd = b();
            this.size = 0
        };
        f.prototype.has = function (a) {
            return !!d(this, a).Xa
        };
        f.prototype.get = function (a) {
            return (a = d(this, a).Xa) && a.value
        };
        f.prototype.entries = function () {
            return c(this, function (a) {
                return [a.key, a.value]
            })
        };
        f.prototype.keys = function () {
            return c(this, function (a) {
                return a.key
            })
        };
        f.prototype.values = function () {
            return c(this, function (a) {
                return a.value
            })
        };
        f.prototype.forEach = function (a, b) {
            for (var c = this.entries(),
                d; !(d = c.next()).done; )
                d = d.value, a.call(b, d[1], d[0], this)
        };
        f.prototype[Symbol.iterator] = f.prototype.entries;
        var h = 0;
        return f
    });
    na("Math.trunc", function (a) {
        return a ? a : function (a) {
            a = Number(a);
            if (isNaN(a) || Infinity === a || -Infinity === a || 0 === a)
                return a;
            var b = Math.floor(Math.abs(a));
            return 0 > a ? -b : b
        }
    });
    var n = this;
    function p(a) {
        return void 0 !== a
    }
    function q(a) {
        return "string" == typeof a
    }
    function r(a) {
        return "number" == typeof a
    }
    function v(a, b, c) {
        a = a.split(".");
        c = c || n;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            !a.length && p(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {}
    }
    function va() {}
    function wa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function w(a) {
        return "array" == wa(a)
    }
    function xa(a) {
        var b = wa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function ya(a) {
        return "function" == wa(a)
    }
    function za(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function Aa(a) {
        return a[Ba] || (a[Ba] = ++Ca)
    }
    var Ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Ca = 0;
    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function Ea(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }
    function Fa(a, b, c) {
        Fa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Da : Ea;
        return Fa.apply(null, arguments)
    }
    var x = Date.now || function () {
        return +new Date
    };
    function y(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ab = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.gy = function (a, c, g) {
            for (var d = Array(arguments.length - 2), f = 2; f < arguments.length; f++)
                d[f - 2] = arguments[f];
            return b.prototype[c].apply(a, d)
        }
    };
    var Ga = {
        fullscreen: '<svg width="25px" height="18px" viewBox="0 0 25 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    <defs></defs>    <g id="QM-Video-players" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="icon" transform="translate(-1152.000000, -745.000000)" stroke-width="2">            <g id="VIDEO-PLAYER" transform="translate(241.000000, 735.000000)">                <g id="full-screen" transform="translate(912.000000, 11.000000)">                    <path d="M16,2.27373675e-13 L20.4144427,2.27373675e-13 C22.5348937,2.27373675e-13 22.9090909,1 22.9090909,3 C22.9090909,4.89224643 22.9090909,4.23269611 22.9090909,5.02134903 M22.9090909,11.0149556 C22.9090909,11.900521 22.9090909,11.2288692 22.9090909,13 C22.9090909,15 22.4090525,16 20.4088991,16 C17.6932917,16 17.3578037,16 16,16 M7,16 C5.26636131,16 4.92647196,16 2.53310562,16 C0.379965843,16 0,15 0,13 C1.72349463e-16,11 2.09448412e-10,12.03673 0,11.0260782 M2.58751243e-10,5.02134903 C3.69578419e-10,3.68327147 2.59100822e-10,4.34875208 2.58961126e-10,3.01067452 C2.58751243e-10,1 0.505494506,2.27373675e-12 2.52747253,2.27373675e-12 C4.59157509,3.56698531e-10 4.93589744,4.49968214e-10 7,2.27373675e-12" id="Rectangle-5"></path>                    <rect id="Rectangle-7" x="5" y="4" width="13.0913298" height="8"></rect>                </g>            </g>        </g>    </g></svg>',
        media_sound_off: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 20"><path d="M18.14,3.68C20.45,4.8,21,7.86,21.05,9.59a11.38,11.38,0,0,1-.92,4.7l1.4,1.52a1,1,0,0,0,.18-.26A13.24,13.24,0,0,0,23,9.49c-.07-2.2-.74-6.12-4-7.69a1,1,0,0,0-1.24.47A1.05,1.05,0,0,0,18.14,3.68Z" transform="translate(0 0)"/><path d="M17,11.14l1.5,1.5a1,1,0,0,0,.2-.29,5.89,5.89,0,0,0-1.08-6.52,1,1,0,0,0-1.47-.16A1.1,1.1,0,0,0,16,7.2,3.86,3.86,0,0,1,17,11.14Z" transform="translate(0 0)"/><path d="M13.9.77c-.16-.93-.68-1.13-1.72,0L9.57,3.4,13.9,7.91Z" transform="translate(0 0)"/><path d="M4.51.23A1,1,0,0,0,3.1.39a1.06,1.06,0,0,0,0,1.29l4,4.16H1.31A1.34,1.34,0,0,0,0,7.2v5.57a1.34,1.34,0,0,0,1.31,1.36H7.23l.35.48,4.59,4.62c1,1,1.56,1,1.72,0V12.85l6.5,6.71a1,1,0,0,0,1.41-.11,1.06,1.06,0,0,0,0-1.35Z" transform="translate(0 0)"/></svg>',
        media_sound_on: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 20"><path d="M16.85,14.49a1,1,0,0,1-.64-.24,1.06,1.06,0,0,1-.13-1.46,4,4,0,0,0,0-5.58,1.06,1.06,0,0,1,.12-1.46,1,1,0,0,1,1.41.13,6,6,0,0,1,0,8.24A1,1,0,0,1,16.85,14.49Z" transform="translate(0 0)"/><path d="M19,18.29a1,1,0,0,1-.87-.52,1.06,1.06,0,0,1,.36-1.42c1.79-1.08,2.62-4.68,2.51-6.75-.09-1.74-.59-4.81-2.89-5.92a1.05,1.05,0,0,1-.49-1.38,1,1,0,0,1,1.33-.5c3.26,1.57,3.93,5.49,4,7.69s-.61,6.92-3.51,8.66A1,1,0,0,1,19,18.29Z" transform="translate(0 0)"/><path d="M12.15.78,7.57,5.4l-.34.45H1.31A1.34,1.34,0,0,0,0,7.21v5.57a1.34,1.34,0,0,0,1.31,1.36h5.9l.35.47,4.58,4.62c1,1,1.56,1,1.72,0V.78C13.71-.16,13.19-.36,12.15.78Z" transform="translate(0 0)" style="fill-rule:evenodd"/></svg>',
        pause_media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 18"><rect width="4" height="18"/><rect x="8" width="4" height="18"/></svg>',
        play_button: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><g style="opacity:0.46000000834465027"><circle cx="28" cy="28" r="28" style="fill:#323233"/></g><g style="opacity:0.699999988079071"><path d="M28,1.4A26.6,26.6,0,1,1,1.4,28,26.6,26.6,0,0,1,28,1.4M28,0A28,28,0,1,0,56,28,28,28,0,0,0,28,0Z" style="fill:#fff"/></g><polygon points="22.4 17.55 22.4 38.84 38.82 28.19 22.4 17.55" style="fill:#fff;opacity:0.699999988079071;isolation:isolate"/></svg>',
        play_media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16"><polygon points="0 0 0 16 12.8 8 0 0"/></svg>',
        preloader: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><circle cx="25" cy="25" r="25" style="fill:none"/><path d="M12.79,21.91a12.61,12.61,0,1,1,9.16,15.3L21.2,37" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2.5999999046325684px;opacity:0.8500000238418579;isolation:isolate"/></svg>',
        replay_button: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="60" height="60">\t<defs>\t\t<style>.replayBtncls-1{opacity:0.75;isolation:isolate;}.replayBtncls-2{fill:#fff;}</style>\t</defs>\t<circle class="replayBtncls-1" cx="60" cy="60" r="56.5"/>\t<path class="replayBtncls-2" d="M60,120a60,60,0,1,1,60-60,60,60,0,0,1-60,60ZM60,5.3A54.7,54.7,0,1,0,114.7,60,54.71,54.71,0,0,0,60,5.3Z"/>\t<path class="replayBtncls-2" d="M77.6,52.1A19.46,19.46,0,1,1,57.7,40.7V50.8L75.8,37.2,57.7,23.5V33.8A26,26,0,1,0,85.9,57.5a23.64,23.64,0,0,0-2.1-8.2Z"/></svg>',
        back_to_app: '<svg width="12" height="19" viewBox="0 0 12 19" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9902 0.841216C10.4879 0.368574 9.70453 0.368574 9.20222 0.841216L0 9.5L9.20222 18.1588C9.70453 18.6314 10.4879 18.6314 10.9902 18.1588C11.5377 17.6437 11.5377 16.7737 10.9902 16.2585L3.80753 9.5L10.9902 2.74146C11.5377 2.22634 11.5377 1.35634 10.9902 0.841216Z" /></svg>',
        close_icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">  <path fill-rule="evenodd" d="M700.447,468.177l-7.82,7.816,7.789,7.769a1.832,1.832,0,0,1,0,2.6,1.867,1.867,0,0,1-2.616,0l-7.779-7.761-7.839,7.835a1.863,1.863,0,0,1-2.638,0,1.887,1.887,0,0,1,0-2.652l7.829-7.824-7.583-7.564a1.829,1.829,0,0,1,0-2.595,1.867,1.867,0,0,1,2.616,0l7.573,7.554,7.829-7.825a1.866,1.866,0,0,1,2.639,0A1.887,1.887,0,0,1,700.447,468.177Z" transform="translate(-679 -465)"/></svg>',
        close_lightbox_icon: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14.03" viewBox="0 0 14 14.03">  <defs>    <style>      .cls-1 {         fill: #fff;         fill-rule: evenodd;       }     </style>  </defs>  <path class="cls-1" d="M3077.66,1907.03l-4.98,4.97,4.96,4.95a1.168,1.168,0,0,1,.01,1.65h-0.01a1.171,1.171,0,0,1-1.66,0l-4.96-4.94-4.99,4.99a1.2,1.2,0,0,1-1.68,0h0a1.207,1.207,0,0,1,0-1.69l4.99-4.98-4.83-4.81a1.168,1.168,0,0,1-.01-1.65h0.01a1.171,1.171,0,0,1,1.66,0l4.83,4.8,4.98-4.97a1.177,1.177,0,0,1,1.68,0h0A1.289,1.289,0,0,1,3077.66,1907.03Z" transform="translate(-3064 -1905)"/></svg>',
        mobile_chevron_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.844 21.813"><path fill="#3a3a3a" fill-rule="evenodd" d="M63.927,747.972a1.769,1.769,0,0,1-1.284-.55A1.791,1.791,0,0,1,62.7,744.9l8.149-7.839L62.7,729.217a1.782,1.782,0,0,1,2.461-2.579l10.83,10.42-10.83,10.418A1.77,1.77,0,0,1,63.927,747.972Z" transform="translate(-62.156 -726.156)"/></svg>',
        mobile_close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><path d="M21.25,16.98,33.11,28.85a3.012,3.012,0,0,1-4.26,4.26L16.98,21.25,5.12,33.11A3.016,3.016,0,0,1,.85,28.85L12.72,16.98.85,5.12A3.019,3.019,0,0,1,5.12.85L16.98,12.72,28.85.85a3.016,3.016,0,0,1,4.26,4.27Z" style="fill:#3da0e1"/></svg>',
        mobile_close_customized: '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" /></svg>',
        mobile_menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 34"><path d="M3,14H41a3,3,0,0,1,0,6H3a3,3,0,0,1,0-6ZM3,28H41a3,3,0,0,1,0,6H3a3,3,0,0,1,0-6ZM3,0H41a3,3,0,0,1,0,6H3A3,3,0,0,1,3,0Z" style="fill:#3da0e1"/></svg>',
        mobile_menu_customized: '<svg width="22" height="14" viewBox="0 0 22 14" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 0.25C1.30964 0.25 0.75 0.809644 0.75 1.5C0.75 2.19036 1.30964 2.75 2 2.75H3C3.69036 2.75 4.25 2.19036 4.25 1.5C4.25 0.809644 3.69036 0.25 3 0.25H2ZM7 0.25C6.30964 0.25 5.75 0.809644 5.75 1.5C5.75 2.19036 6.30964 2.75 7 2.75H20C20.6904 2.75 21.25 2.19036 21.25 1.5C21.25 0.809644 20.6904 0.25 20 0.25H7ZM7 5.75C6.30964 5.75 5.75 6.30964 5.75 7C5.75 7.69036 6.30964 8.25 7 8.25H18C18.6904 8.25 19.25 7.69036 19.25 7C19.25 6.30964 18.6904 5.75 18 5.75H7ZM5.75 12.5C5.75 11.8096 6.30964 11.25 7 11.25H16C16.6904 11.25 17.25 11.8096 17.25 12.5C17.25 13.1904 16.6904 13.75 16 13.75H7C6.30964 13.75 5.75 13.1904 5.75 12.5ZM0.75 7C0.75 6.30964 1.30964 5.75 2 5.75H3C3.69036 5.75 4.25 6.30964 4.25 7C4.25 7.69036 3.69036 8.25 3 8.25H2C1.30964 8.25 0.75 7.69036 0.75 7ZM2 11.25C1.30964 11.25 0.75 11.8096 0.75 12.5C0.75 13.1904 1.30964 13.75 2 13.75H3C3.69036 13.75 4.25 13.1904 4.25 12.5C4.25 11.8096 3.69036 11.25 3 11.25H2Z" /></svg>',
        navigation_next_arrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 15"><path fill="#231f20" d="M7.2,22a1.2,1.2,0,0,0,.86-.37L14,15.5,8.06,9.37A1.2,1.2,0,0,0,6.34,11l4.32,4.46L6.34,20a1.2,1.2,0,0,0,.86,2Z" transform="translate(-6 -9)" /></svg>',
        navigation_prev_arrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 15"><path fill="#231f20" d="M17.8,22a1.2,1.2,0,0,1-.86-.37L11,15.5l5.94-6.13A1.2,1.2,0,0,1,18.66,11L14.34,15.5,18.66,20a1.2,1.2,0,0,1-.86,2Z" transform="translate(-11 -9)" /></svg>',
        nav_next_button: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">  <circle fill="none" stroke="#3da0e1" stroke-width="2px" cx="16" cy="16" r="15"/>  <path fill="none" stroke="#3da0e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5px" fill-rule="evenodd" d="M6488.61,5860.47l7.08-6.48-7.08-6.47" transform="translate(-6475 -5838)"/></svg>',
        "nav_next_button_\u0441ustomized": '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" /><path d="M16 13L21 18L16 23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        nav_prev_button: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">  <circle fill="none" stroke="#3da0e1" stroke-width="2px" cx="16" cy="16" r="15"/>  <path fill="none" stroke="#3da0e1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5px" fill-rule="evenodd" d="M6493.39,5847.53l-7.08,6.48,7.08,6.47" transform="translate(-6475 -5838)"/></svg>',
        "nav_prev_button_\u0441ustomized": '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z" /><path d="M20 13L15 18L20 23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        play_overlay_icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.302 33.242"><path d="M0,1.8V31.442a1.8,1.8,0,0,0,2.726,1.543l24.7-14.82a1.8,1.8,0,0,0,0-3.087L2.726.257A1.8,1.8,0,0,0,0,1.8Z" fill="#333"/></svg>',
        zoom_icon: '<svg xmlns="http://www.w3.org/2000/svg">  <rect      width="24"      height="24"      rx="3"      ry="3"      x="0"      y="0"/>  <path      d="m 18.677,16.844 -3.345,-3.344 a 5.447,5.447 0 0 0 0.795,-2.843 5.77,5.77 0 0 0 -5.646,-5.647 5.476,5.476 0 0 0 -5.481,5.475 5.771,5.771 0 0 0 5.645,5.647 5.442,5.442 0 0 0 2.758,-0.747 l 3.363,3.366 a 0.843,0.843 0 0 0 1.191,0 l 0.835,-0.835 a 0.716,0.716 0 0 0 -0.115,-1.072 z m -11.987,-6.359 a 3.791,3.791 0 0 1 3.791,-3.793 4.086,4.086 0 0 1 3.961,3.962 3.793,3.793 0 0 1 -3.791,3.793 4.087,4.087 0 0 1 -3.961,-3.962 z"      style="fill:#ffffff;fill-rule:evenodd"/></svg>',
        horizontal_progress_line: '<svg width="{WIDTH}px" height="2px">    <line x1="4" x2="{WIDTH}" y1="0" y2="0" stroke="red" stroke-width="{STROKE_WIDTH}" stroke-linecap="butt" stroke-dasharray="2, 4"/></svg>',
        vertical_progress_line: '<svg width="2px" height="{HEIGHT}px">    <line x1="0" x2="0" y1="4" y2="{HEIGHT}" stroke="red" stroke-width="{STROKE_WIDTH}" stroke-linecap="butt" stroke-dasharray="2, 4"/></svg>'
    };
    function Ha(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Ha);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    y(Ha, Error);
    Ha.prototype.name = "CustomError";
    var Ia;
    function Ka(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, f = 0; f < d; f++)
            c += a[f] + (f < b.length ? b[f] : "%s");
        Ha.call(this, c + a[d])
    }
    y(Ka, Ha);
    Ka.prototype.name = "AssertionError";
    function La(a) {
        throw a;
    }
    function Ma(a, b, c, d) {
        var f = "Assertion failed";
        if (c) {
            f += ": " + c;
            var g = d
        } else
            a && (f += ": " + a, g = b);
        a = new Ka("" + f, g || []);
        La(a)
    }
    function A(a, b, c) {
        a || Ma("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    }
    function Na(a, b) {
        La(new Ka("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
    }
    function Oa(a, b, c) {
        r(a) || Ma("Expected number but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
    function Pa(a, b, c) {
        q(a) || Ma("Expected string but got %s: %s.", [wa(a), a], b, Array.prototype.slice.call(arguments, 2));
        return a
    }
    function Qa(a, b, c, d) {
        a instanceof b || Ma("Expected instanceof %s but got %s.", [Ra(b), Ra(a)], c, Array.prototype.slice.call(arguments, 3));
        return a
    }
    function Ra(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var Sa = Array.prototype.indexOf ? function (a, b) {
        A(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    }
     : function (a, b) {
        if (q(a))
            return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    },
    Ta = Array.prototype.forEach ? function (a, b, c) {
        A(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    }
     : function (a, b, c) {
        for (var d = a.length, f = q(a) ? a.split("") : a, g = 0; g < d; g++)
            g in f && b.call(c, f[g], g, a)
    },
    Ua = Array.prototype.filter ? function (a, b) {
        A(null != a.length);
        return Array.prototype.filter.call(a,
            b, void 0)
    }
     : function (a, b) {
        for (var c = a.length, d = [], f = 0, g = q(a) ? a.split("") : a, h = 0; h < c; h++)
            if (h in g) {
                var l = g[h];
                b.call(void 0, l, h, a) && (d[f++] = l)
            }
        return d
    },
    Va = Array.prototype.map ? function (a, b) {
        A(null != a.length);
        return Array.prototype.map.call(a, b, void 0)
    }
     : function (a, b) {
        for (var c = a.length, d = Array(c), f = q(a) ? a.split("") : a, g = 0; g < c; g++)
            g in f && (d[g] = b.call(void 0, f[g], g, a));
        return d
    };
    function Wa(a, b) {
        b = Xa(a, b, void 0);
        return 0 > b ? null : q(a) ? a.charAt(b) : a[b]
    }
    function Xa(a, b, c) {
        for (var d = a.length, f = q(a) ? a.split("") : a, g = 0; g < d; g++)
            if (g in f && b.call(c, f[g], g, a))
                return g;
        return -1
    }
    function Ya(a, b) {
        b = Sa(a, b);
        var c;
        (c = 0 <= b) && Za(a, b);
        return c
    }
    function Za(a, b) {
        A(null != a.length);
        Array.prototype.splice.call(a, b, 1)
    }
    function $a(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function ab(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function bb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (xa(d)) {
                var f = a.length || 0,
                g = d.length || 0;
                a.length = f + g;
                for (var h = 0; h < g; h++)
                    a[f + h] = d[h]
            } else
                a.push(d)
        }
    }
    function cb(a, b, c, d) {
        A(null != a.length);
        Array.prototype.splice.apply(a, db(arguments, 1))
    }
    function db(a, b, c) {
        A(null != a.length);
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var eb = String.prototype.trim ? function (a) {
        return a.trim()
    }
     : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    function fb(a) {
        if (!gb.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(hb, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(ib, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(jb, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(kb, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(lb, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(mb, "&#0;"));
        return a
    }
    var hb = /&/g,
    ib = /</g,
    jb = />/g,
    kb = /"/g,
    lb = /'/g,
    mb = /\x00/g,
    gb = /[\x00&<>"']/,
    nb = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    },
    ob = {
        "'": "\\'"
    },
    pb = String.prototype.repeat ? function (a, b) {
        return a.repeat(b)
    }
     : function (a, b) {
        return Array(b + 1).join(a)
    };
    function qb(a) {
        a = p(void 0) ? a.toFixed(void 0) : String(a);
        var b = a.indexOf(".");
        -1 == b && (b = a.length);
        return pb("0", Math.max(0, 2 - b)) + a
    }
    function rb() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ x()).toString(36)
    }
    function sb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    function tb(a) {
        return String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        })
    }
    function ub(a) {
        var b = q(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, f) {
            return b + f.toUpperCase()
        })
    };
    var vb;
    a: {
        var wb = n.navigator;
        if (wb) {
            var xb = wb.userAgent;
            if (xb) {
                vb = xb;
                break a
            }
        }
        vb = ""
    }
    function B(a) {
        return -1 != vb.indexOf(a)
    };
    function yb(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function zb(a, b) {
        var c = {},
        d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Ab(a) {
        var b = [],
        c = 0,
        d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Bb(a) {
        var b = [],
        c = 0,
        d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function Cb(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function Db(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return c
    }
    function Eb(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function Fb(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    function Gb(a) {
        var b = wa(a);
        if ("object" == b || "array" == b) {
            if (ya(a.clone))
                return a.clone();
            b = "array" == b ? [] : {};
            for (var c in a)
                b[c] = Gb(a[c]);
            return b
        }
        return a
    }
    var Hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Ib(a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d)
                a[c] = d[c];
            for (var g = 0; g < Hb.length; g++)
                c = Hb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    function Jb(a) {
        var b = arguments.length;
        if (1 == b && w(arguments[0]))
            return Jb.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    };
    function Kb() {
        return B("iPhone") && !B("iPod") && !B("iPad")
    };
    function Lb(a) {
        Lb[" "](a);
        return a
    }
    Lb[" "] = va;
    function Mb(a, b) {
        var c = Nb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ob = B("Opera"),
    C = B("Trident") || B("MSIE"),
    Pb = B("Edge"),
    Qb = Pb || C,
    Rb = B("Gecko") && !(-1 != vb.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
    Tb = -1 != vb.toLowerCase().indexOf("webkit") && !B("Edge"),
    Ub = B("Macintosh"),
    Vb = B("Linux") || B("CrOS");
    function Wb() {
        var a = n.document;
        return a ? a.documentMode : void 0
    }
    var Xb;
    a: {
        var Yb = "",
        Zb = function () {
            var a = vb;
            if (Rb)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Pb)
                return /Edge\/([\d\.]+)/.exec(a);
            if (C)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Tb)
                return /WebKit\/(\S+)/.exec(a);
            if (Ob)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }
        ();
        Zb && (Yb = Zb ? Zb[1] : "");
        if (C) {
            var $b = Wb();
            if (null != $b && $b > parseFloat(Yb)) {
                Xb = String($b);
                break a
            }
        }
        Xb = Yb
    }
    var Nb = {};
    function ac(a) {
        return Mb(a, function () {
            for (var b = 0, c = eb(String(Xb)).split("."), d = eb(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
                var h = c[g] || "",
                l = d[g] || "";
                do {
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                    if (0 == h[0].length && 0 == l[0].length)
                        break;
                    b = sb(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || sb(0 == h[2].length, 0 == l[2].length) || sb(h[2], l[2]);
                    h = h[3];
                    l = l[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var bc;
    var cc = n.document;
    bc = cc && C ? Wb() || ("CSS1Compat" == cc.compatMode ? parseInt(Xb, 10) : 5) : void 0;
    var dc = B("Firefox"),
    ec = Kb() || B("iPod"),
    fc = B("iPad"),
    gc = B("Safari") && !((B("Chrome") || B("CriOS")) && !B("Edge") || B("Coast") || B("Opera") || B("Edge") || B("Silk") || B("Android")) && !(Kb() || B("iPad") || B("iPod"));
    var hc = null,
    ic = null,
    jc = Rb || Tb && !gc || Ob || "function" == typeof n.btoa;
    function kc(a) {
        if (jc)
            var b = n.btoa(a);
        else {
            b = [];
            for (var c = 0, d = 0; d < a.length; d++) {
                var f = a.charCodeAt(d);
                255 < f && (b[c++] = f & 255, f >>= 8);
                b[c++] = f
            }
            A(xa(b), "encodeByteArray takes an array as a parameter");
            lc();
            a = hc;
            c = [];
            for (d = 0; d < b.length; d += 3) {
                var g = b[d],
                h = (f = d + 1 < b.length) ? b[d + 1] : 0,
                l = d + 2 < b.length,
                u = l ? b[d + 2] : 0,
                t = g >> 2;
                g = (g & 3) << 4 | h >> 4;
                h = (h & 15) << 2 | u >> 6;
                u &= 63;
                l || (u = 64, f || (h = 64));
                c.push(a[t], a[g], a[h], a[u])
            }
            b = c.join("")
        }
        return b
    }
    function mc(a) {
        var b = [];
        nc(a, function (a) {
            b.push(a)
        });
        return b
    }
    function nc(a, b) {
        function c(b) {
            for (; d < a.length; ) {
                var c = a.charAt(d++),
                f = ic[c];
                if (null != f)
                    return f;
                if (!/^[\s\xa0]*$/.test(c))
                    throw Error("Unknown base64 encoding at char: " + c);
            }
            return b
        }
        lc();
        for (var d = 0; ; ) {
            var f = c(-1),
            g = c(0),
            h = c(64),
            l = c(64);
            if (64 === l && -1 === f)
                break;
            b(f << 2 | g >> 4);
            64 != h && (b(g << 4 & 240 | h >> 2), 64 != l && b(h << 6 & 192 | l))
        }
    }
    function lc() {
        if (!hc) {
            hc = {};
            ic = {};
            for (var a = 0; 65 > a; a++)
                hc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), ic[hc[a]] = a, 62 <= a && (ic["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };
    var oc = !C || 9 <= Number(bc),
    pc = !Rb && !C || C && 9 <= Number(bc) || Rb && ac("1.9.1"),
    qc = C && !ac("9");
    function rc(a) {
        var b = b || 0;
        return function () {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    function sc(a, b) {
        this.mn = a === tc && b || "";
        this.tr = uc
    }
    sc.prototype.Tf = !0;
    sc.prototype.Sf = function () {
        return this.mn
    };
    sc.prototype.toString = function () {
        return "Const{" + this.mn + "}"
    };
    function vc(a) {
        if (a instanceof sc && a.constructor === sc && a.tr === uc)
            return a.mn;
        Na("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    }
    var uc = {},
    tc = {};
    function wc() {
        this.Ue = "";
        this.sr = xc
    }
    wc.prototype.Tf = !0;
    wc.prototype.Sf = function () {
        return this.Ue
    };
    wc.prototype.yq = !0;
    wc.prototype.km = function () {
        return 1
    };
    function yc(a) {
        if (a instanceof wc && a.constructor === wc && a.sr === xc)
            return a.Ue;
        Na("expected object of type SafeUrl, got '" + a + "' of type " + wa(a));
        return "type_error:SafeUrl"
    }
    var zc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    xc = {};
    function Ac(a) {
        var b = new wc;
        b.Ue = a;
        return b
    }
    Ac("about:blank");
    function Bc() {
        this.Ue = "";
        this.rr = Cc;
        this.nq = null
    }
    Bc.prototype.yq = !0;
    Bc.prototype.km = function () {
        return this.nq
    };
    Bc.prototype.Tf = !0;
    Bc.prototype.Sf = function () {
        return this.Ue
    };
    function Dc(a) {
        if (a instanceof Bc && a.constructor === Bc && a.rr === Cc)
            return a.Ue;
        Na("expected object of type SafeHtml, got '" + a + "' of type " + wa(a));
        return "type_error:SafeHtml"
    }
    function Ec(a) {
        function b(a) {
            if (w(a))
                Ta(a, b);
            else {
                if (!(a instanceof Bc)) {
                    var f = "object" == typeof a,
                    h = null;
                    f && a.yq && (h = a.km());
                    a = Fc(fb(f && a.Tf ? a.Sf() : String(a)), h)
                }
                d += Dc(a);
                a = a.km();
                0 == c ? c = a : 0 != a && c != a && (c = null)
            }
        }
        var c = 0,
        d = "";
        Ta(arguments, b);
        return Fc(d, c)
    }
    var Cc = {};
    function Fc(a, b) {
        return (new Bc).Du(a, b)
    }
    Bc.prototype.Du = function (a, b) {
        this.Ue = a;
        this.nq = b;
        return this
    };
    Fc("<!DOCTYPE html>", 0);
    Fc("", 0);
    var Gc = Fc("<br>", 0);
    var Hc = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    Ic = function (a) {
        var b = !1,
        c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    }
    (function () {
        var a = document.createElement("div");
        a.innerHTML = "<div><div></div></div>";
        var b = a.firstChild.firstChild;
        a.innerHTML = "";
        return !b.parentElement
    });
    function Jc(a, b) {
        if (Hc[a.tagName.toUpperCase()])
            throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
        b = Dc(b);
        if (Ic())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = b
    };
    function Kc(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    function E(a, b) {
        this.x = p(a) ? a : 0;
        this.y = p(b) ? b : 0
    }
    e = E.prototype;
    e.clone = function () {
        return new E(this.x, this.y)
    };
    function Lc(a, b) {
        var c = a.x - b.x;
        a = a.y - b.y;
        return c * c + a * a
    }
    e.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    e.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    e.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    e.translate = function (a, b) {
        a instanceof E ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), r(b) && (this.y += b));
        return this
    };
    e.scale = function (a, b) {
        b = r(b) ? b : a;
        this.x *= a;
        this.y *= b;
        return this
    };
    function F(a, b) {
        this.width = a;
        this.height = b
    }
    e = F.prototype;
    e.clone = function () {
        return new F(this.width, this.height)
    };
    e.Ut = function () {
        return this.width * this.height
    };
    e.aspectRatio = function () {
        return this.width / this.height
    };
    e.Re = function () {
        return !this.Ut()
    };
    e.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    e.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    e.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    e.scale = function (a, b) {
        b = r(b) ? b : a;
        this.width *= a;
        this.height *= b;
        return this
    };
    function Mc(a) {
        return a ? new Nc(Oc(a)) : Ia || (Ia = new Nc)
    }
    function Pc(a, b) {
        yb(b, function (b, d) {
            b && "object" == typeof b && b.Tf && (b = b.Sf());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Qc.hasOwnProperty(d) ? a.setAttribute(Qc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Qc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function Rc(a, b, c) {
        return Sc(document, arguments)
    }
    function Sc(a, b) {
        var c = String(b[0]),
        d = b[1];
        if (!oc && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', fb(d.name), '"');
            if (d.type) {
                c.push(' type="', fb(d.type), '"');
                var f = {};
                Ib(f, d);
                delete f.type;
                d = f
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (q(d) ? c.className = d : w(d) ? c.className = d.join(" ") : Pc(c, d));
        2 < b.length && Tc(a, c, b, 2);
        return c
    }
    function Tc(a, b, c, d) {
        function f(c) {
            c && b.appendChild(q(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var g = c[d];
            !xa(g) || za(g) && 0 < g.nodeType ? f(g) : Ta(Uc(g) ? ab(g) : g, f)
        }
    }
    function Vc(a) {
        var b = document,
        c = b.createElement("DIV");
        C ? (Jc(c, Ec(Gc, a)), c.removeChild(A(c.firstChild))) : Jc(c, a);
        if (1 == c.childNodes.length)
            c = c.removeChild(A(c.firstChild));
        else {
            for (a = b.createDocumentFragment(); c.firstChild; )
                a.appendChild(c.firstChild);
            c = a
        }
        return c
    }
    function Wc(a, b) {
        A(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    }
    function Xc(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function Yc(a, b, c) {
        A(null != a, "goog.dom.insertChildAt expects a non-null parent");
        a.insertBefore(b, a.childNodes[c] || null)
    }
    function Zc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    function $c(a, b) {
        A(null != a && null != b, "goog.dom.replaceNode expects non-null arguments");
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    function ad(a) {
        return pc && void 0 != a.children ? a.children : Ua(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    }
    function bd(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function Oc(a) {
        A(a, "Node cannot be null or undefined.");
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function cd(a, b) {
        A(null != a, "goog.dom.setTextContent expects a non-null value for node");
        if ("textContent" in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(A(a.lastChild));
            a.firstChild.data = String(b)
        } else {
            Xc(a);
            var c = Oc(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    var dd = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    ed = {
        IMG: " ",
        BR: "\n"
    };
    function fd(a) {
        if (qc && null !== a && "innerText" in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            gd(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        qc || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function gd(a, b, c) {
        if (!(a.nodeName in dd))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ed)
                b.push(ed[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    gd(a, b, c), a = a.nextSibling
    }
    function Uc(a) {
        if (a && "number" == typeof a.length) {
            if (za(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ya(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function hd() {
        var a = document;
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    }
    function Nc(a) {
        this.Dh = a || n.document || document
    }
    e = Nc.prototype;
    e.getElementsByTagName = function (a, b) {
        return (b || this.Dh).getElementsByTagName(String(a))
    };
    e.eu = function (a, b, c) {
        return Sc(this.Dh, arguments)
    };
    e.createElement = function (a) {
        return this.Dh.createElement(String(a))
    };
    e.createTextNode = function (a) {
        return this.Dh.createTextNode(String(a))
    };
    e.appendChild = Wc;
    e.append = function (a, b) {
        Tc(Oc(a), a, arguments, 1)
    };
    e.canHaveChildren = function (a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    };
    e.cg = Xc;
    e.removeNode = Zc;
    e.contains = bd;
    e.ea = cd;
    function id(a) {
        var b = Mc(),
        c = b.Dh,
        d = b.createElement("STYLE");
        d.type = "text/css";
        b.getElementsByTagName("HEAD")[0].appendChild(d);
        d.styleSheet ? d.styleSheet.cssText = a : d.appendChild(c.createTextNode(a));
        return d
    };
    function jd() {}
    jd.prototype.Td = function (a, b) {
        var c = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPGcgb3BhY2l0eT0iMC44Ij4KPHBhdGggZD0iTTUzLjUgMjVINTJDNTEuNjAyMiAyNSA1MS4yMjA2IDI1LjE1OCA1MC45MzkzIDI1LjQzOTNDNTAuNjU4IDI1LjcyMDYgNTAuNSAyNi4xMDIyIDUwLjUgMjYuNUM1MC41IDI2Ljg5NzggNTAuNjU4IDI3LjI3OTQgNTAuOTM5MyAyNy41NjA3QzUxLjIyMDYgMjcuODQyIDUxLjYwMjIgMjggNTIgMjhINTMuNUM1My44OTc4IDI4IDU0LjI3OTQgMjguMTU4IDU0LjU2MDcgMjguNDM5M0M1NC44NDIgMjguNzIwNiA1NSAyOS4xMDIyIDU1IDI5LjVWNDEuNTM3NUM1My43MDkzIDQwLjU0NTMgNTIuMTI4IDQwLjAwNSA1MC41IDQwQzQ5LjI3MTcgNDAuMDAwNiA0OC4wNjI0IDQwLjMwMjkgNDYuOTc4MyA0MC44ODAzQzQ1Ljg5NDIgNDEuNDU3NiA0NC45Njg1IDQyLjI5MjQgNDQuMjgyNSA0My4zMTEzQzQzLjcyNjEgNDIuNzM4NCA0My4wNjAzIDQyLjI4MjkgNDIuMzI0OCA0MS45NzE5QzQxLjU4OTIgNDEuNjYwOSA0MC43OTg2IDQxLjUwMDcgNDAgNDEuNTAwN0MzOS4yMDE0IDQxLjUwMDcgMzguNDEwOCA0MS42NjA5IDM3LjY3NTIgNDEuOTcxOUMzNi45Mzk3IDQyLjI4MjkgMzYuMjczOSA0Mi43Mzg0IDM1LjcxNzUgNDMuMzExM0MzNS4wMzE1IDQyLjI5MjQgMzQuMTA1OCA0MS40NTc2IDMzLjAyMTcgNDAuODgwM0MzMS45Mzc2IDQwLjMwMjkgMzAuNzI4MyA0MC4wMDA2IDI5LjUgNDBDMjcuODcyIDQwLjAwNSAyNi4yOTA3IDQwLjU0NTMgMjUgNDEuNTM3NVYyOS41QzI1IDI5LjEwMjIgMjUuMTU4IDI4LjcyMDYgMjUuNDM5MyAyOC40MzkzQzI1LjcyMDYgMjguMTU4IDI2LjEwMjIgMjggMjYuNSAyOEgyOEMyOC4zOTc4IDI4IDI4Ljc3OTQgMjcuODQyIDI5LjA2MDcgMjcuNTYwN0MyOS4zNDIgMjcuMjc5NCAyOS41IDI2Ljg5NzggMjkuNSAyNi41QzI5LjUgMjYuMTAyMiAyOS4zNDIgMjUuNzIwNiAyOS4wNjA3IDI1LjQzOTNDMjguNzc5NCAyNS4xNTggMjguMzk3OCAyNSAyOCAyNUgyNi41QzI1LjMwNjUgMjUgMjQuMTYxOSAyNS40NzQxIDIzLjMxOCAyNi4zMThDMjIuNDc0MSAyNy4xNjE5IDIyIDI4LjMwNjUgMjIgMjkuNVY0Ny41QzIyIDQ5LjQ4OTEgMjIuNzkwMiA1MS4zOTY4IDI0LjE5NjcgNTIuODAzM0MyNS42MDMyIDU0LjIwOTggMjcuNTEwOSA1NSAyOS41IDU1QzMxLjQ4OTEgNTUgMzMuMzk2OCA1NC4yMDk4IDM0LjgwMzMgNTIuODAzM0MzNi4yMDk4IDUxLjM5NjggMzcgNDkuNDg5MSAzNyA0Ny41QzM3IDQ2LjcwNDQgMzcuMzE2MSA0NS45NDEzIDM3Ljg3ODcgNDUuMzc4N0MzOC40NDEzIDQ0LjgxNjEgMzkuMjA0NCA0NC41IDQwIDQ0LjVDNDAuNzk1NiA0NC41IDQxLjU1ODcgNDQuODE2MSA0Mi4xMjEzIDQ1LjM3ODdDNDIuNjgzOSA0NS45NDEzIDQzIDQ2LjcwNDQgNDMgNDcuNUM0MyA0OS40ODkxIDQzLjc5MDIgNTEuMzk2OCA0NS4xOTY3IDUyLjgwMzNDNDYuNjAzMiA1NC4yMDk4IDQ4LjUxMDkgNTUgNTAuNSA1NUM1Mi40ODkxIDU1IDU0LjM5NjggNTQuMjA5OCA1NS44MDMzIDUyLjgwMzNDNTcuMjA5OCA1MS4zOTY4IDU4IDQ5LjQ4OTEgNTggNDcuNVYyOS41QzU4IDI4LjMwNjUgNTcuNTI1OSAyNy4xNjE5IDU2LjY4MiAyNi4zMThDNTUuODM4MSAyNS40NzQxIDU0LjY5MzUgMjUgNTMuNSAyNVpNMjkuNSA1MkMyOC42MSA1MiAyNy43NCA1MS43MzYxIDI2Ljk5OTkgNTEuMjQxNkMyNi4yNTk5IDUwLjc0NzEgMjUuNjgzMSA1MC4wNDQzIDI1LjM0MjUgNDkuMjIyMUMyNS4wMDE5IDQ4LjM5OTggMjQuOTEyOCA0Ny40OTUgMjUuMDg2NSA0Ni42MjIxQzI1LjI2MDEgNDUuNzQ5MiAyNS42ODg3IDQ0Ljk0NzQgMjYuMzE4IDQ0LjMxOEMyNi45NDc0IDQzLjY4ODcgMjcuNzQ5MiA0My4yNjAxIDI4LjYyMjEgNDMuMDg2NUMyOS40OTUgNDIuOTEyOCAzMC4zOTk4IDQzLjAwMTkgMzEuMjIyMSA0My4zNDI1QzMyLjA0NDMgNDMuNjgzMSAzMi43NDcxIDQ0LjI1OTkgMzMuMjQxNiA0NC45OTk5QzMzLjczNjEgNDUuNzQgMzQgNDYuNjEgMzQgNDcuNUMzNCA0OC42OTM1IDMzLjUyNTkgNDkuODM4MSAzMi42ODIgNTAuNjgyQzMxLjgzODEgNTEuNTI1OSAzMC42OTM1IDUyIDI5LjUgNTJaTTUwLjUgNTJDNDkuNjEgNTIgNDguNzQgNTEuNzM2MSA0Ny45OTk5IDUxLjI0MTZDNDcuMjU5OSA1MC43NDcxIDQ2LjY4MzEgNTAuMDQ0MyA0Ni4zNDI1IDQ5LjIyMjFDNDYuMDAxOSA0OC4zOTk4IDQ1LjkxMjggNDcuNDk1IDQ2LjA4NjUgNDYuNjIyMUM0Ni4yNjAxIDQ1Ljc0OTIgNDYuNjg4NyA0NC45NDc0IDQ3LjMxOCA0NC4zMThDNDcuOTQ3NCA0My42ODg3IDQ4Ljc0OTIgNDMuMjYwMSA0OS42MjIxIDQzLjA4NjVDNTAuNDk1IDQyLjkxMjggNTEuMzk5OCA0My4wMDE5IDUyLjIyMjEgNDMuMzQyNUM1My4wNDQzIDQzLjY4MzEgNTMuNzQ3MSA0NC4yNTk5IDU0LjI0MTYgNDQuOTk5OUM1NC43MzYxIDQ1Ljc0IDU1IDQ2LjYxIDU1IDQ3LjVDNTUgNDguNjkzNSA1NC41MjU5IDQ5LjgzODEgNTMuNjgyIDUwLjY4MkM1Mi44MzgxIDUxLjUyNTkgNTEuNjkzNSA1MiA1MC41IDUyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg== data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPHBhdGggZD0iTTUzLjUgMjVINTJDNTEuNjAyMiAyNSA1MS4yMjA2IDI1LjE1OCA1MC45MzkzIDI1LjQzOTNDNTAuNjU4IDI1LjcyMDYgNTAuNSAyNi4xMDIyIDUwLjUgMjYuNUM1MC41IDI2Ljg5NzggNTAuNjU4IDI3LjI3OTQgNTAuOTM5MyAyNy41NjA3QzUxLjIyMDYgMjcuODQyIDUxLjYwMjIgMjggNTIgMjhINTMuNUM1My44OTc4IDI4IDU0LjI3OTQgMjguMTU4IDU0LjU2MDcgMjguNDM5M0M1NC44NDIgMjguNzIwNiA1NSAyOS4xMDIyIDU1IDI5LjVWNDEuNTM3NUM1My43MDkzIDQwLjU0NTMgNTIuMTI4IDQwLjAwNSA1MC41IDQwQzQ5LjI3MTcgNDAuMDAwNiA0OC4wNjI0IDQwLjMwMjkgNDYuOTc4MyA0MC44ODAzQzQ1Ljg5NDIgNDEuNDU3NiA0NC45Njg1IDQyLjI5MjQgNDQuMjgyNSA0My4zMTEzQzQzLjcyNjEgNDIuNzM4NCA0My4wNjAzIDQyLjI4MjkgNDIuMzI0OCA0MS45NzE5QzQxLjU4OTIgNDEuNjYwOSA0MC43OTg2IDQxLjUwMDcgNDAgNDEuNTAwN0MzOS4yMDE0IDQxLjUwMDcgMzguNDEwOCA0MS42NjA5IDM3LjY3NTIgNDEuOTcxOUMzNi45Mzk3IDQyLjI4MjkgMzYuMjczOSA0Mi43Mzg0IDM1LjcxNzUgNDMuMzExM0MzNS4wMzE1IDQyLjI5MjQgMzQuMTA1OCA0MS40NTc2IDMzLjAyMTcgNDAuODgwM0MzMS45Mzc2IDQwLjMwMjkgMzAuNzI4MyA0MC4wMDA2IDI5LjUgNDBDMjcuODcyIDQwLjAwNSAyNi4yOTA3IDQwLjU0NTMgMjUgNDEuNTM3NVYyOS41QzI1IDI5LjEwMjIgMjUuMTU4IDI4LjcyMDYgMjUuNDM5MyAyOC40MzkzQzI1LjcyMDYgMjguMTU4IDI2LjEwMjIgMjggMjYuNSAyOEgyOEMyOC4zOTc4IDI4IDI4Ljc3OTQgMjcuODQyIDI5LjA2MDcgMjcuNTYwN0MyOS4zNDIgMjcuMjc5NCAyOS41IDI2Ljg5NzggMjkuNSAyNi41QzI5LjUgMjYuMTAyMiAyOS4zNDIgMjUuNzIwNiAyOS4wNjA3IDI1LjQzOTNDMjguNzc5NCAyNS4xNTggMjguMzk3OCAyNSAyOCAyNUgyNi41QzI1LjMwNjUgMjUgMjQuMTYxOSAyNS40NzQxIDIzLjMxOCAyNi4zMThDMjIuNDc0MSAyNy4xNjE5IDIyIDI4LjMwNjUgMjIgMjkuNVY0Ny41QzIyIDQ5LjQ4OTEgMjIuNzkwMiA1MS4zOTY4IDI0LjE5NjcgNTIuODAzM0MyNS42MDMyIDU0LjIwOTggMjcuNTEwOSA1NSAyOS41IDU1QzMxLjQ4OTEgNTUgMzMuMzk2OCA1NC4yMDk4IDM0LjgwMzMgNTIuODAzM0MzNi4yMDk4IDUxLjM5NjggMzcgNDkuNDg5MSAzNyA0Ny41QzM3IDQ2LjcwNDQgMzcuMzE2MSA0NS45NDEzIDM3Ljg3ODcgNDUuMzc4N0MzOC40NDEzIDQ0LjgxNjEgMzkuMjA0NCA0NC41IDQwIDQ0LjVDNDAuNzk1NiA0NC41IDQxLjU1ODcgNDQuODE2MSA0Mi4xMjEzIDQ1LjM3ODdDNDIuNjgzOSA0NS45NDEzIDQzIDQ2LjcwNDQgNDMgNDcuNUM0MyA0OS40ODkxIDQzLjc5MDIgNTEuMzk2OCA0NS4xOTY3IDUyLjgwMzNDNDYuNjAzMiA1NC4yMDk4IDQ4LjUxMDkgNTUgNTAuNSA1NUM1Mi40ODkxIDU1IDU0LjM5NjggNTQuMjA5OCA1NS44MDMzIDUyLjgwMzNDNTcuMjA5OCA1MS4zOTY4IDU4IDQ5LjQ4OTEgNTggNDcuNVYyOS41QzU4IDI4LjMwNjUgNTcuNTI1OSAyNy4xNjE5IDU2LjY4MiAyNi4zMThDNTUuODM4MSAyNS40NzQxIDU0LjY5MzUgMjUgNTMuNSAyNVpNMjkuNSA1MkMyOC42MSA1MiAyNy43NCA1MS43MzYxIDI2Ljk5OTkgNTEuMjQxNkMyNi4yNTk5IDUwLjc0NzEgMjUuNjgzMSA1MC4wNDQzIDI1LjM0MjUgNDkuMjIyMUMyNS4wMDE5IDQ4LjM5OTggMjQuOTEyOCA0Ny40OTUgMjUuMDg2NSA0Ni42MjIxQzI1LjI2MDEgNDUuNzQ5MiAyNS42ODg3IDQ0Ljk0NzQgMjYuMzE4IDQ0LjMxOEMyNi45NDc0IDQzLjY4ODcgMjcuNzQ5MiA0My4yNjAxIDI4LjYyMjEgNDMuMDg2NUMyOS40OTUgNDIuOTEyOCAzMC4zOTk4IDQzLjAwMTkgMzEuMjIyMSA0My4zNDI1QzMyLjA0NDMgNDMuNjgzMSAzMi43NDcxIDQ0LjI1OTkgMzMuMjQxNiA0NC45OTk5QzMzLjczNjEgNDUuNzQgMzQgNDYuNjEgMzQgNDcuNUMzNCA0OC42OTM1IDMzLjUyNTkgNDkuODM4MSAzMi42ODIgNTAuNjgyQzMxLjgzODEgNTEuNTI1OSAzMC42OTM1IDUyIDI5LjUgNTJaTTUwLjUgNTJDNDkuNjEgNTIgNDguNzQgNTEuNzM2MSA0Ny45OTk5IDUxLjI0MTZDNDcuMjU5OSA1MC43NDcxIDQ2LjY4MzEgNTAuMDQ0MyA0Ni4zNDI1IDQ5LjIyMjFDNDYuMDAxOSA0OC4zOTk4IDQ1LjkxMjggNDcuNDk1IDQ2LjA4NjUgNDYuNjIyMUM0Ni4yNjAxIDQ1Ljc0OTIgNDYuNjg4NyA0NC45NDc0IDQ3LjMxOCA0NC4zMThDNDcuOTQ3NCA0My42ODg3IDQ4Ljc0OTIgNDMuMjYwMSA0OS42MjIxIDQzLjA4NjVDNTAuNDk1IDQyLjkxMjggNTEuMzk5OCA0My4wMDE5IDUyLjIyMjEgNDMuMzQyNUM1My4wNDQzIDQzLjY4MzEgNTMuNzQ3MSA0NC4yNTk5IDU0LjI0MTYgNDQuOTk5OUM1NC43MzYxIDQ1Ljc0IDU1IDQ2LjYxIDU1IDQ3LjVDNTUgNDguNjkzNSA1NC41MjU5IDQ5LjgzODEgNTMuNjgyIDUwLjY4MkM1Mi44MzgxIDUxLjUyNTkgNTEuNjkzNSA1MiA1MC41IDUyWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo= data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iNiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC44Ii8+CjxwYXRoIGQ9Ik00NS41IDE3SDQ0QzQzLjYwMjIgMTcgNDMuMjIwNiAxNy4xNTggNDIuOTM5MyAxNy40MzkzQzQyLjY1OCAxNy43MjA2IDQyLjUgMTguMTAyMiA0Mi41IDE4LjVDNDIuNSAxOC44OTc4IDQyLjY1OCAxOS4yNzk0IDQyLjkzOTMgMTkuNTYwN0M0My4yMjA2IDE5Ljg0MiA0My42MDIyIDIwIDQ0IDIwSDQ1LjVDNDUuODk3OCAyMCA0Ni4yNzk0IDIwLjE1OCA0Ni41NjA3IDIwLjQzOTNDNDYuODQyIDIwLjcyMDYgNDcgMjEuMTAyMiA0NyAyMS41VjMzLjUzNzVDNDUuNzA5MyAzMi41NDUzIDQ0LjEyOCAzMi4wMDUgNDIuNSAzMkM0MS4yNzE3IDMyLjAwMDYgNDAuMDYyNCAzMi4zMDI5IDM4Ljk3ODMgMzIuODgwM0MzNy44OTQyIDMzLjQ1NzYgMzYuOTY4NSAzNC4yOTI0IDM2LjI4MjUgMzUuMzExM0MzNS43MjYxIDM0LjczODQgMzUuMDYwMyAzNC4yODI5IDM0LjMyNDggMzMuOTcxOUMzMy41ODkyIDMzLjY2MDkgMzIuNzk4NiAzMy41MDA3IDMyIDMzLjUwMDdDMzEuMjAxNCAzMy41MDA3IDMwLjQxMDggMzMuNjYwOSAyOS42NzUyIDMzLjk3MTlDMjguOTM5NyAzNC4yODI5IDI4LjI3MzkgMzQuNzM4NCAyNy43MTc1IDM1LjMxMTNDMjcuMDMxNSAzNC4yOTI0IDI2LjEwNTggMzMuNDU3NiAyNS4wMjE3IDMyLjg4MDNDMjMuOTM3NiAzMi4zMDI5IDIyLjcyODMgMzIuMDAwNiAyMS41IDMyQzE5Ljg3MiAzMi4wMDUgMTguMjkwNyAzMi41NDUzIDE3IDMzLjUzNzVWMjEuNUMxNyAyMS4xMDIyIDE3LjE1OCAyMC43MjA2IDE3LjQzOTMgMjAuNDM5M0MxNy43MjA2IDIwLjE1OCAxOC4xMDIyIDIwIDE4LjUgMjBIMjBDMjAuMzk3OCAyMCAyMC43Nzk0IDE5Ljg0MiAyMS4wNjA3IDE5LjU2MDdDMjEuMzQyIDE5LjI3OTQgMjEuNSAxOC44OTc4IDIxLjUgMTguNUMyMS41IDE4LjEwMjIgMjEuMzQyIDE3LjcyMDYgMjEuMDYwNyAxNy40MzkzQzIwLjc3OTQgMTcuMTU4IDIwLjM5NzggMTcgMjAgMTdIMTguNUMxNy4zMDY1IDE3IDE2LjE2MTkgMTcuNDc0MSAxNS4zMTggMTguMzE4QzE0LjQ3NDEgMTkuMTYxOSAxNCAyMC4zMDY1IDE0IDIxLjVWMzkuNUMxNCA0MS40ODkxIDE0Ljc5MDIgNDMuMzk2OCAxNi4xOTY3IDQ0LjgwMzNDMTcuNjAzMiA0Ni4yMDk4IDE5LjUxMDkgNDcgMjEuNSA0N0MyMy40ODkxIDQ3IDI1LjM5NjggNDYuMjA5OCAyNi44MDMzIDQ0LjgwMzNDMjguMjA5OCA0My4zOTY4IDI5IDQxLjQ4OTEgMjkgMzkuNUMyOSAzOC43MDQ0IDI5LjMxNjEgMzcuOTQxMyAyOS44Nzg3IDM3LjM3ODdDMzAuNDQxMyAzNi44MTYxIDMxLjIwNDQgMzYuNSAzMiAzNi41QzMyLjc5NTYgMzYuNSAzMy41NTg3IDM2LjgxNjEgMzQuMTIxMyAzNy4zNzg3QzM0LjY4MzkgMzcuOTQxMyAzNSAzOC43MDQ0IDM1IDM5LjVDMzUgNDEuNDg5MSAzNS43OTAyIDQzLjM5NjggMzcuMTk2NyA0NC44MDMzQzM4LjYwMzIgNDYuMjA5OCA0MC41MTA5IDQ3IDQyLjUgNDdDNDQuNDg5MSA0NyA0Ni4zOTY4IDQ2LjIwOTggNDcuODAzMyA0NC44MDMzQzQ5LjIwOTggNDMuMzk2OCA1MCA0MS40ODkxIDUwIDM5LjVWMjEuNUM1MCAyMC4zMDY1IDQ5LjUyNTkgMTkuMTYxOSA0OC42ODIgMTguMzE4QzQ3LjgzODEgMTcuNDc0MSA0Ni42OTM1IDE3IDQ1LjUgMTdaTTIxLjUgNDRDMjAuNjEgNDQgMTkuNzQgNDMuNzM2MSAxOC45OTk5IDQzLjI0MTZDMTguMjU5OSA0Mi43NDcxIDE3LjY4MzEgNDIuMDQ0MyAxNy4zNDI1IDQxLjIyMjFDMTcuMDAxOSA0MC4zOTk4IDE2LjkxMjggMzkuNDk1IDE3LjA4NjUgMzguNjIyMUMxNy4yNjAxIDM3Ljc0OTIgMTcuNjg4NyAzNi45NDc0IDE4LjMxOCAzNi4zMThDMTguOTQ3NCAzNS42ODg3IDE5Ljc0OTIgMzUuMjYwMSAyMC42MjIxIDM1LjA4NjVDMjEuNDk1IDM0LjkxMjggMjIuMzk5OCAzNS4wMDE5IDIzLjIyMjEgMzUuMzQyNUMyNC4wNDQzIDM1LjY4MzEgMjQuNzQ3MSAzNi4yNTk5IDI1LjI0MTYgMzYuOTk5OUMyNS43MzYxIDM3Ljc0IDI2IDM4LjYxIDI2IDM5LjVDMjYgNDAuNjkzNSAyNS41MjU5IDQxLjgzODEgMjQuNjgyIDQyLjY4MkMyMy44MzgxIDQzLjUyNTkgMjIuNjkzNSA0NCAyMS41IDQ0Wk00Mi41IDQ0QzQxLjYxIDQ0IDQwLjc0IDQzLjczNjEgMzkuOTk5OSA0My4yNDE2QzM5LjI1OTkgNDIuNzQ3MSAzOC42ODMxIDQyLjA0NDMgMzguMzQyNSA0MS4yMjIxQzM4LjAwMTkgNDAuMzk5OCAzNy45MTI4IDM5LjQ5NSAzOC4wODY1IDM4LjYyMjFDMzguMjYwMSAzNy43NDkyIDM4LjY4ODcgMzYuOTQ3NCAzOS4zMTggMzYuMzE4QzM5Ljk0NzQgMzUuNjg4NyA0MC43NDkyIDM1LjI2MDEgNDEuNjIyMSAzNS4wODY1QzQyLjQ5NSAzNC45MTI4IDQzLjM5OTggMzUuMDAxOSA0NC4yMjIxIDM1LjM0MjVDNDUuMDQ0MyAzNS42ODMxIDQ1Ljc0NzEgMzYuMjU5OSA0Ni4yNDE2IDM2Ljk5OTlDNDYuNzM2MSAzNy43NCA0NyAzOC42MSA0NyAzOS41QzQ3IDQwLjY5MzUgNDYuNTI1OSA0MS44MzgxIDQ1LjY4MiA0Mi42ODJDNDQuODM4MSA0My41MjU5IDQzLjY5MzUgNDQgNDIuNSA0NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo= data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPGcgb3BhY2l0eT0iMC44IiBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTUzLjUgMjQuODk4NEg1MkM1MS42MDIyIDI0Ljg5ODQgNTEuMjIwNiAyNS4wNTYgNTAuOTM5MyAyNS4zMzY0QzUwLjY1OCAyNS42MTY5IDUwLjUgMjUuOTk3MiA1MC41IDI2LjM5MzhDNTAuNSAyNi43OTA0IDUwLjY1OCAyNy4xNzA4IDUwLjkzOTMgMjcuNDUxMkM1MS4yMjA2IDI3LjczMTYgNTEuNjAyMiAyNy44ODkyIDUyIDI3Ljg4OTJINTMuNUM1My44OTc4IDI3Ljg4OTIgNTQuMjc5NCAyOC4wNDY3IDU0LjU2MDcgMjguMzI3MkM1NC44NDIgMjguNjA3NiA1NSAyOC45ODggNTUgMjkuMzg0NlY0MS4zODQ5QzUzLjcwOTMgNDAuMzk1OCA1Mi4xMjggMzkuODU3MiA1MC41IDM5Ljg1MjJDNDkuMjcxNyAzOS44NTI4IDQ4LjA2MjQgNDAuMTU0MSA0Ni45NzgzIDQwLjcyOTdDNDUuODk0MiA0MS4zMDUzIDQ0Ljk2ODUgNDIuMTM3NSA0NC4yODI1IDQzLjE1MzJDNDMuNzI2MSA0Mi41ODIxIDQzLjA2MDMgNDIuMTI4MSA0Mi4zMjQ4IDQxLjgxOEM0MS41ODkyIDQxLjUwOCA0MC43OTg2IDQxLjM0ODMgNDAgNDEuMzQ4M0MzOS4yMDE0IDQxLjM0ODMgMzguNDEwOCA0MS41MDggMzcuNjc1MiA0MS44MThDMzYuOTM5NyA0Mi4xMjgxIDM2LjI3MzkgNDIuNTgyMSAzNS43MTc1IDQzLjE1MzJDMzUuMDMxNSA0Mi4xMzc1IDM0LjEwNTggNDEuMzA1MyAzMy4wMjE3IDQwLjcyOTdDMzEuOTM3NiA0MC4xNTQxIDMwLjcyODMgMzkuODUyOCAyOS41IDM5Ljg1MjJDMjcuODcyIDM5Ljg1NzIgMjYuMjkwNyA0MC4zOTU4IDI1IDQxLjM4NDlWMjkuMzg0NkMyNSAyOC45ODggMjUuMTU4IDI4LjYwNzYgMjUuNDM5MyAyOC4zMjcyQzI1LjcyMDYgMjguMDQ2NyAyNi4xMDIyIDI3Ljg4OTIgMjYuNSAyNy44ODkySDI4QzI4LjM5NzggMjcuODg5MiAyOC43Nzk0IDI3LjczMTYgMjkuMDYwNyAyNy40NTEyQzI5LjM0MiAyNy4xNzA4IDI5LjUgMjYuNzkwNCAyOS41IDI2LjM5MzhDMjkuNSAyNS45OTcyIDI5LjM0MiAyNS42MTY5IDI5LjA2MDcgMjUuMzM2NEMyOC43Nzk0IDI1LjA1NiAyOC4zOTc4IDI0Ljg5ODQgMjggMjQuODk4NEgyNi41QzI1LjMwNjUgMjQuODk4NCAyNC4xNjE5IDI1LjM3MTEgMjMuMzE4IDI2LjIxMjRDMjIuNDc0MSAyNy4wNTM3IDIyIDI4LjE5NDggMjIgMjkuMzg0NlY0Ny4zMjkxQzIyIDQ5LjMxMjEgMjIuNzkwMiA1MS4yMTM4IDI0LjE5NjcgNTIuNjE2QzI1LjYwMzIgNTQuMDE4MiAyNy41MTA5IDU0LjgwNTkgMjkuNSA1NC44MDU5QzMxLjQ4OTEgNTQuODA1OSAzMy4zOTY4IDU0LjAxODIgMzQuODAzMyA1Mi42MTZDMzYuMjA5OCA1MS4yMTM4IDM3IDQ5LjMxMjEgMzcgNDcuMzI5MUMzNyA0Ni41MzU5IDM3LjMxNjEgNDUuNzc1MiAzNy44Nzg3IDQ1LjIxNDNDMzguNDQxMyA0NC42NTM0IDM5LjIwNDQgNDQuMzM4MyA0MCA0NC4zMzgzQzQwLjc5NTYgNDQuMzM4MyA0MS41NTg3IDQ0LjY1MzQgNDIuMTIxMyA0NS4yMTQzQzQyLjY4MzkgNDUuNzc1MiA0MyA0Ni41MzU5IDQzIDQ3LjMyOTFDNDMgNDkuMzEyMSA0My43OTAyIDUxLjIxMzggNDUuMTk2NyA1Mi42MTZDNDYuNjAzMiA1NC4wMTgyIDQ4LjUxMDkgNTQuODA1OSA1MC41IDU0LjgwNTlDNTIuNDg5MSA1NC44MDU5IDU0LjM5NjggNTQuMDE4MiA1NS44MDMzIDUyLjYxNkM1Ny4yMDk4IDUxLjIxMzggNTggNDkuMzEyMSA1OCA0Ny4zMjkxVjI5LjM4NDZDNTggMjguMTk0OCA1Ny41MjU5IDI3LjA1MzcgNTYuNjgyIDI2LjIxMjRDNTUuODM4MSAyNS4zNzExIDU0LjY5MzUgMjQuODk4NCA1My41IDI0Ljg5ODRaTTI5LjUgNTEuODE1MkMyOC42MSA1MS44MTUyIDI3Ljc0IDUxLjU1MjEgMjYuOTk5OSA1MS4wNTkxQzI2LjI1OTkgNTAuNTY2MiAyNS42ODMxIDQ5Ljg2NTYgMjUuMzQyNSA0OS4wNDU4QzI1LjAwMTkgNDguMjI2MSAyNC45MTI4IDQ3LjMyNDEgMjUuMDg2NSA0Ni40NTM5QzI1LjI2MDEgNDUuNTgzNiAyNS42ODg3IDQ0Ljc4NDMgMjYuMzE4IDQ0LjE1NjlDMjYuOTQ3NCA0My41Mjk1IDI3Ljc0OTIgNDMuMTAyMiAyOC42MjIxIDQyLjkyOTFDMjkuNDk1IDQyLjc1NiAzMC4zOTk4IDQyLjg0NDkgMzEuMjIyMSA0My4xODQ0QzMyLjA0NDMgNDMuNTI0IDMyLjc0NzEgNDQuMDk5IDMzLjI0MTYgNDQuODM2N0MzMy43MzYxIDQ1LjU3NDQgMzQgNDYuNDQxOCAzNCA0Ny4zMjkxQzM0IDQ4LjUxODkgMzMuNTI1OSA0OS42NTk5IDMyLjY4MiA1MC41MDEyQzMxLjgzODEgNTEuMzQyNSAzMC42OTM1IDUxLjgxNTIgMjkuNSA1MS44MTUyWk01MC41IDUxLjgxNTJDNDkuNjEgNTEuODE1MiA0OC43NCA1MS41NTIxIDQ3Ljk5OTkgNTEuMDU5MUM0Ny4yNTk5IDUwLjU2NjIgNDYuNjgzMSA0OS44NjU2IDQ2LjM0MjUgNDkuMDQ1OEM0Ni4wMDE5IDQ4LjIyNjEgNDUuOTEyOCA0Ny4zMjQxIDQ2LjA4NjUgNDYuNDUzOUM0Ni4yNjAxIDQ1LjU4MzYgNDYuNjg4NyA0NC43ODQzIDQ3LjMxOCA0NC4xNTY5QzQ3Ljk0NzQgNDMuNTI5NSA0OC43NDkyIDQzLjEwMjIgNDkuNjIyMSA0Mi45MjkxQzUwLjQ5NSA0Mi43NTYgNTEuMzk5OCA0Mi44NDQ5IDUyLjIyMjEgNDMuMTg0NEM1My4wNDQzIDQzLjUyNCA1My43NDcxIDQ0LjA5OSA1NC4yNDE2IDQ0LjgzNjdDNTQuNzM2MSA0NS41NzQ0IDU1IDQ2LjQ0MTggNTUgNDcuMzI5MUM1NSA0OC41MTg5IDU0LjUyNTkgNDkuNjU5OSA1My42ODIgNTAuNTAxMkM1Mi44MzgxIDUxLjM0MjUgNTEuNjkzNSA1MS44MTUyIDUwLjUgNTEuODE1MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01OCA1Ny45MTQxTDIyIDIxLjkxNDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjM5Ljg3NjciIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCAxOS45MTQxKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo= data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHJ4PSI2IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjgiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik01My41IDI0Ljg5ODRINTJDNTEuNjAyMiAyNC44OTg0IDUxLjIyMDYgMjUuMDU2IDUwLjkzOTMgMjUuMzM2NEM1MC42NTggMjUuNjE2OSA1MC41IDI1Ljk5NzIgNTAuNSAyNi4zOTM4QzUwLjUgMjYuNzkwNCA1MC42NTggMjcuMTcwOCA1MC45MzkzIDI3LjQ1MTJDNTEuMjIwNiAyNy43MzE2IDUxLjYwMjIgMjcuODg5MiA1MiAyNy44ODkySDUzLjVDNTMuODk3OCAyNy44ODkyIDU0LjI3OTQgMjguMDQ2NyA1NC41NjA3IDI4LjMyNzJDNTQuODQyIDI4LjYwNzYgNTUgMjguOTg4IDU1IDI5LjM4NDZWNDEuMzg0OUM1My43MDkzIDQwLjM5NTggNTIuMTI4IDM5Ljg1NzIgNTAuNSAzOS44NTIyQzQ5LjI3MTcgMzkuODUyOCA0OC4wNjI0IDQwLjE1NDEgNDYuOTc4MyA0MC43Mjk3QzQ1Ljg5NDIgNDEuMzA1MyA0NC45Njg1IDQyLjEzNzUgNDQuMjgyNSA0My4xNTMyQzQzLjcyNjEgNDIuNTgyMSA0My4wNjAzIDQyLjEyODEgNDIuMzI0OCA0MS44MThDNDEuNTg5MiA0MS41MDggNDAuNzk4NiA0MS4zNDgzIDQwIDQxLjM0ODNDMzkuMjAxNCA0MS4zNDgzIDM4LjQxMDggNDEuNTA4IDM3LjY3NTIgNDEuODE4QzM2LjkzOTcgNDIuMTI4MSAzNi4yNzM5IDQyLjU4MjEgMzUuNzE3NSA0My4xNTMyQzM1LjAzMTUgNDIuMTM3NSAzNC4xMDU4IDQxLjMwNTMgMzMuMDIxNyA0MC43Mjk3QzMxLjkzNzYgNDAuMTU0MSAzMC43MjgzIDM5Ljg1MjggMjkuNSAzOS44NTIyQzI3Ljg3MiAzOS44NTcyIDI2LjI5MDcgNDAuMzk1OCAyNSA0MS4zODQ5VjI5LjM4NDZDMjUgMjguOTg4IDI1LjE1OCAyOC42MDc2IDI1LjQzOTMgMjguMzI3MkMyNS43MjA2IDI4LjA0NjcgMjYuMTAyMiAyNy44ODkyIDI2LjUgMjcuODg5MkgyOEMyOC4zOTc4IDI3Ljg4OTIgMjguNzc5NCAyNy43MzE2IDI5LjA2MDcgMjcuNDUxMkMyOS4zNDIgMjcuMTcwOCAyOS41IDI2Ljc5MDQgMjkuNSAyNi4zOTM4QzI5LjUgMjUuOTk3MiAyOS4zNDIgMjUuNjE2OSAyOS4wNjA3IDI1LjMzNjRDMjguNzc5NCAyNS4wNTYgMjguMzk3OCAyNC44OTg0IDI4IDI0Ljg5ODRIMjYuNUMyNS4zMDY1IDI0Ljg5ODQgMjQuMTYxOSAyNS4zNzExIDIzLjMxOCAyNi4yMTI0QzIyLjQ3NDEgMjcuMDUzNyAyMiAyOC4xOTQ4IDIyIDI5LjM4NDZWNDcuMzI5MUMyMiA0OS4zMTIxIDIyLjc5MDIgNTEuMjEzOCAyNC4xOTY3IDUyLjYxNkMyNS42MDMyIDU0LjAxODIgMjcuNTEwOSA1NC44MDU5IDI5LjUgNTQuODA1OUMzMS40ODkxIDU0LjgwNTkgMzMuMzk2OCA1NC4wMTgyIDM0LjgwMzMgNTIuNjE2QzM2LjIwOTggNTEuMjEzOCAzNyA0OS4zMTIxIDM3IDQ3LjMyOTFDMzcgNDYuNTM1OSAzNy4zMTYxIDQ1Ljc3NTIgMzcuODc4NyA0NS4yMTQzQzM4LjQ0MTMgNDQuNjUzNCAzOS4yMDQ0IDQ0LjMzODMgNDAgNDQuMzM4M0M0MC43OTU2IDQ0LjMzODMgNDEuNTU4NyA0NC42NTM0IDQyLjEyMTMgNDUuMjE0M0M0Mi42ODM5IDQ1Ljc3NTIgNDMgNDYuNTM1OSA0MyA0Ny4zMjkxQzQzIDQ5LjMxMjEgNDMuNzkwMiA1MS4yMTM4IDQ1LjE5NjcgNTIuNjE2QzQ2LjYwMzIgNTQuMDE4MiA0OC41MTA5IDU0LjgwNTkgNTAuNSA1NC44MDU5QzUyLjQ4OTEgNTQuODA1OSA1NC4zOTY4IDU0LjAxODIgNTUuODAzMyA1Mi42MTZDNTcuMjA5OCA1MS4yMTM4IDU4IDQ5LjMxMjEgNTggNDcuMzI5MVYyOS4zODQ2QzU4IDI4LjE5NDggNTcuNTI1OSAyNy4wNTM3IDU2LjY4MiAyNi4yMTI0QzU1LjgzODEgMjUuMzcxMSA1NC42OTM1IDI0Ljg5ODQgNTMuNSAyNC44OTg0Wk0yOS41IDUxLjgxNTJDMjguNjEgNTEuODE1MiAyNy43NCA1MS41NTIxIDI2Ljk5OTkgNTEuMDU5MUMyNi4yNTk5IDUwLjU2NjIgMjUuNjgzMSA0OS44NjU2IDI1LjM0MjUgNDkuMDQ1OEMyNS4wMDE5IDQ4LjIyNjEgMjQuOTEyOCA0Ny4zMjQxIDI1LjA4NjUgNDYuNDUzOUMyNS4yNjAxIDQ1LjU4MzYgMjUuNjg4NyA0NC43ODQzIDI2LjMxOCA0NC4xNTY5QzI2Ljk0NzQgNDMuNTI5NSAyNy43NDkyIDQzLjEwMjIgMjguNjIyMSA0Mi45MjkxQzI5LjQ5NSA0Mi43NTYgMzAuMzk5OCA0Mi44NDQ5IDMxLjIyMjEgNDMuMTg0NEMzMi4wNDQzIDQzLjUyNCAzMi43NDcxIDQ0LjA5OSAzMy4yNDE2IDQ0LjgzNjdDMzMuNzM2MSA0NS41NzQ0IDM0IDQ2LjQ0MTggMzQgNDcuMzI5MUMzNCA0OC41MTg5IDMzLjUyNTkgNDkuNjU5OSAzMi42ODIgNTAuNTAxMkMzMS44MzgxIDUxLjM0MjUgMzAuNjkzNSA1MS44MTUyIDI5LjUgNTEuODE1MlpNNTAuNSA1MS44MTUyQzQ5LjYxIDUxLjgxNTIgNDguNzQgNTEuNTUyMSA0Ny45OTk5IDUxLjA1OTFDNDcuMjU5OSA1MC41NjYyIDQ2LjY4MzEgNDkuODY1NiA0Ni4zNDI1IDQ5LjA0NThDNDYuMDAxOSA0OC4yMjYxIDQ1LjkxMjggNDcuMzI0MSA0Ni4wODY1IDQ2LjQ1MzlDNDYuMjYwMSA0NS41ODM2IDQ2LjY4ODcgNDQuNzg0MyA0Ny4zMTggNDQuMTU2OUM0Ny45NDc0IDQzLjUyOTUgNDguNzQ5MiA0My4xMDIyIDQ5LjYyMjEgNDIuOTI5MUM1MC40OTUgNDIuNzU2IDUxLjM5OTggNDIuODQ0OSA1Mi4yMjIxIDQzLjE4NDRDNTMuMDQ0MyA0My41MjQgNTMuNzQ3MSA0NC4wOTkgNTQuMjQxNiA0NC44MzY3QzU0LjczNjEgNDUuNTc0NCA1NSA0Ni40NDE4IDU1IDQ3LjMyOTFDNTUgNDguNTE4OSA1NC41MjU5IDQ5LjY1OTkgNTMuNjgyIDUwLjUwMTJDNTIuODM4MSA1MS4zNDI1IDUxLjY5MzUgNTEuODE1MiA1MC41IDUxLjgxNTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTggNTcuOTE0MUwyMiAyMS45MTQxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldC8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIzOS44NzY3IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAgMTkuOTE0MSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iNiIgZmlsbD0iYmxhY2siIGZpbGwtb3BhY2l0eT0iMC44Ii8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNNDUuNSAxNi44OTg0SDQ0QzQzLjYwMjIgMTYuODk4NCA0My4yMjA2IDE3LjA1NiA0Mi45MzkzIDE3LjMzNjRDNDIuNjU4IDE3LjYxNjkgNDIuNSAxNy45OTcyIDQyLjUgMTguMzkzOEM0Mi41IDE4Ljc5MDQgNDIuNjU4IDE5LjE3MDggNDIuOTM5MyAxOS40NTEyQzQzLjIyMDYgMTkuNzMxNiA0My42MDIyIDE5Ljg4OTIgNDQgMTkuODg5Mkg0NS41QzQ1Ljg5NzggMTkuODg5MiA0Ni4yNzk0IDIwLjA0NjcgNDYuNTYwNyAyMC4zMjcyQzQ2Ljg0MiAyMC42MDc2IDQ3IDIwLjk4OCA0NyAyMS4zODQ2VjMzLjM4NDlDNDUuNzA5MyAzMi4zOTU4IDQ0LjEyOCAzMS44NTcyIDQyLjUgMzEuODUyMkM0MS4yNzE3IDMxLjg1MjggNDAuMDYyNCAzMi4xNTQxIDM4Ljk3ODMgMzIuNzI5N0MzNy44OTQyIDMzLjMwNTMgMzYuOTY4NSAzNC4xMzc1IDM2LjI4MjUgMzUuMTUzMkMzNS43MjYxIDM0LjU4MjEgMzUuMDYwMyAzNC4xMjgxIDM0LjMyNDggMzMuODE4QzMzLjU4OTIgMzMuNTA4IDMyLjc5ODYgMzMuMzQ4MyAzMiAzMy4zNDgzQzMxLjIwMTQgMzMuMzQ4MyAzMC40MTA4IDMzLjUwOCAyOS42NzUyIDMzLjgxOEMyOC45Mzk3IDM0LjEyODEgMjguMjczOSAzNC41ODIxIDI3LjcxNzUgMzUuMTUzMkMyNy4wMzE1IDM0LjEzNzUgMjYuMTA1OCAzMy4zMDUzIDI1LjAyMTcgMzIuNzI5N0MyMy45Mzc2IDMyLjE1NDEgMjIuNzI4MyAzMS44NTI4IDIxLjUgMzEuODUyMkMxOS44NzIgMzEuODU3MiAxOC4yOTA3IDMyLjM5NTggMTcgMzMuMzg0OVYyMS4zODQ2QzE3IDIwLjk4OCAxNy4xNTggMjAuNjA3NiAxNy40MzkzIDIwLjMyNzJDMTcuNzIwNiAyMC4wNDY3IDE4LjEwMjIgMTkuODg5MiAxOC41IDE5Ljg4OTJIMjBDMjAuMzk3OCAxOS44ODkyIDIwLjc3OTQgMTkuNzMxNiAyMS4wNjA3IDE5LjQ1MTJDMjEuMzQyIDE5LjE3MDggMjEuNSAxOC43OTA0IDIxLjUgMTguMzkzOEMyMS41IDE3Ljk5NzIgMjEuMzQyIDE3LjYxNjkgMjEuMDYwNyAxNy4zMzY0QzIwLjc3OTQgMTcuMDU2IDIwLjM5NzggMTYuODk4NCAyMCAxNi44OTg0SDE4LjVDMTcuMzA2NSAxNi44OTg0IDE2LjE2MTkgMTcuMzcxMSAxNS4zMTggMTguMjEyNEMxNC40NzQxIDE5LjA1MzcgMTQgMjAuMTk0OCAxNCAyMS4zODQ2VjM5LjMyOTFDMTQgNDEuMzEyMSAxNC43OTAyIDQzLjIxMzggMTYuMTk2NyA0NC42MTZDMTcuNjAzMiA0Ni4wMTgyIDE5LjUxMDkgNDYuODA1OSAyMS41IDQ2LjgwNTlDMjMuNDg5MSA0Ni44MDU5IDI1LjM5NjggNDYuMDE4MiAyNi44MDMzIDQ0LjYxNkMyOC4yMDk4IDQzLjIxMzggMjkgNDEuMzEyMSAyOSAzOS4zMjkxQzI5IDM4LjUzNTkgMjkuMzE2MSAzNy43NzUyIDI5Ljg3ODcgMzcuMjE0M0MzMC40NDEzIDM2LjY1MzQgMzEuMjA0NCAzNi4zMzgzIDMyIDM2LjMzODNDMzIuNzk1NiAzNi4zMzgzIDMzLjU1ODcgMzYuNjUzNCAzNC4xMjEzIDM3LjIxNDNDMzQuNjgzOSAzNy43NzUyIDM1IDM4LjUzNTkgMzUgMzkuMzI5MUMzNSA0MS4zMTIxIDM1Ljc5MDIgNDMuMjEzOCAzNy4xOTY3IDQ0LjYxNkMzOC42MDMyIDQ2LjAxODIgNDAuNTEwOSA0Ni44MDU5IDQyLjUgNDYuODA1OUM0NC40ODkxIDQ2LjgwNTkgNDYuMzk2OCA0Ni4wMTgyIDQ3LjgwMzMgNDQuNjE2QzQ5LjIwOTggNDMuMjEzOCA1MCA0MS4zMTIxIDUwIDM5LjMyOTFWMjEuMzg0NkM1MCAyMC4xOTQ4IDQ5LjUyNTkgMTkuMDUzNyA0OC42ODIgMTguMjEyNEM0Ny44MzgxIDE3LjM3MTEgNDYuNjkzNSAxNi44OTg0IDQ1LjUgMTYuODk4NFpNMjEuNSA0My44MTUyQzIwLjYxIDQzLjgxNTIgMTkuNzQgNDMuNTUyMSAxOC45OTk5IDQzLjA1OTFDMTguMjU5OSA0Mi41NjYyIDE3LjY4MzEgNDEuODY1NiAxNy4zNDI1IDQxLjA0NThDMTcuMDAxOSA0MC4yMjYxIDE2LjkxMjggMzkuMzI0MSAxNy4wODY1IDM4LjQ1MzlDMTcuMjYwMSAzNy41ODM2IDE3LjY4ODcgMzYuNzg0MyAxOC4zMTggMzYuMTU2OUMxOC45NDc0IDM1LjUyOTUgMTkuNzQ5MiAzNS4xMDIyIDIwLjYyMjEgMzQuOTI5MUMyMS40OTUgMzQuNzU2IDIyLjM5OTggMzQuODQ0OSAyMy4yMjIxIDM1LjE4NDRDMjQuMDQ0MyAzNS41MjQgMjQuNzQ3MSAzNi4wOTkgMjUuMjQxNiAzNi44MzY3QzI1LjczNjEgMzcuNTc0NCAyNiAzOC40NDE4IDI2IDM5LjMyOTFDMjYgNDAuNTE4OSAyNS41MjU5IDQxLjY1OTkgMjQuNjgyIDQyLjUwMTJDMjMuODM4MSA0My4zNDI1IDIyLjY5MzUgNDMuODE1MiAyMS41IDQzLjgxNTJaTTQyLjUgNDMuODE1MkM0MS42MSA0My44MTUyIDQwLjc0IDQzLjU1MjEgMzkuOTk5OSA0My4wNTkxQzM5LjI1OTkgNDIuNTY2MiAzOC42ODMxIDQxLjg2NTYgMzguMzQyNSA0MS4wNDU4QzM4LjAwMTkgNDAuMjI2MSAzNy45MTI4IDM5LjMyNDEgMzguMDg2NSAzOC40NTM5QzM4LjI2MDEgMzcuNTgzNiAzOC42ODg3IDM2Ljc4NDMgMzkuMzE4IDM2LjE1NjlDMzkuOTQ3NCAzNS41Mjk1IDQwLjc0OTIgMzUuMTAyMiA0MS42MjIxIDM0LjkyOTFDNDIuNDk1IDM0Ljc1NiA0My4zOTk4IDM0Ljg0NDkgNDQuMjIyMSAzNS4xODQ0QzQ1LjA0NDMgMzUuNTI0IDQ1Ljc0NzEgMzYuMDk5IDQ2LjI0MTYgMzYuODM2N0M0Ni43MzYxIDM3LjU3NDQgNDcgMzguNDQxOCA0NyAzOS4zMjkxQzQ3IDQwLjUxODkgNDYuNTI1OSA0MS42NTk5IDQ1LjY4MiA0Mi41MDEyQzQ0LjgzODEgNDMuMzQyNSA0My42OTM1IDQzLjgxNTIgNDIuNSA0My44MTUyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUwIDQ5LjkxNDFMMTQgMTMuOTE0MSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSIzOS44NzY3IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgMTEuOTE0MSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K".split(" ");
        c =
            ".player-switch-control {position: fixed;top: 16px;left: 16px;width: 64px;height: 64px;z-index: 0;border: none;cursor: pointer; }  .player-switch-control.player-switch-control_nonaccessibility {background: url(" + c[0] + ") no-repeat center; }    .player-switch-control.player-switch-control_nonaccessibility:hover {background: url(" + c[1] + ") no-repeat center; }    .player-switch-control.player-switch-control_nonaccessibility:active {background: url(" + c[2] + ") no-repeat center; }  .player-switch-control.player-switch-control_accessibility {background: url(" +
            c[3] + ") no-repeat center; }    .player-switch-control.player-switch-control_accessibility:hover {background: url(" + c[4] + ") no-repeat center; }    .player-switch-control.player-switch-control_accessibility:active {background: url(" + c[5] + ") no-repeat center; }  .player-switch-control:focus {outline: none; }    .player-switch-control:focus::before {content: '';position: absolute;top: 3px;bottom: 3px;left: 3px;right: 3px;border: 1px dotted __hovered_button_text_color__;opacity: 0.6; }  .player-switch-control.player-switch-control_with-launcher {z-index: 2; }";
        for (var d in a)
            if (A(a).hasOwnProperty(d)) {
                var f = "__" + d.replace(/\./g, "_") + "__";
                c = c.replace(new RegExp(f, "g"), a[d])
            }
        for (var g in b)
            A(b).hasOwnProperty(g) && (c = c.replace(new RegExp(g, "g"), b[g]));
        c = c.replace(/__verticalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Lc);
        c = c.replace(/__horizontalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Kc);
        return id(c)
    };
    jd.prototype.Lc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="g436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#g436)" />\n</svg>') + ")"
    };
    jd.prototype.Kc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="gh436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#gh436)" />\n</svg>') + ")"
    };
    function kd() {}
    kd.prototype.Td = function (a, b) {
        var c = "/* reset styles */* {box-sizing: border-box;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }input,textarea {-webkit-user-select: text;-moz-user-select: text;-ms-user-select: text;user-select: text; }html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {margin: 0;padding: 0;border: 0; }/* HTML5 display-role reset for older browsers */article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display: block; }ol,ul {list-style: none; }table {border-collapse: collapse;border-spacing: 0; }div {-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-webkit-user-drag: none; }input {-webkit-appearance: none;-moz-appearance: none; }  input::-ms-clear {display: none; }.clear {clear: both; }*::-moz-focus-inner {border: 0; }.trial_banner {position: relative;-webkit-transform: translateZ(0);transform: translateZ(0); }  .trial_banner .banner-content,  .trial_banner .banner-content_hover {position: absolute;left: 0;right: 0;top: 0;bottom: 0;width: 100%;height: 100%; }  .trial_banner .banner-content {visibility: visible;z-index: 1; }  .trial_banner .banner-content_hover {visibility: hidden;z-index: 0; }  .trial_banner .days_remaining {position: absolute;font-family: 'Open Sans', Arial, sans-serif;font-weight: normal;font-size: 13px;left: 65px;top: 41px;color: #7C1645;z-index: 1; }  .trial_banner:hover .banner-content {visibility: hidden;z-index: 0; }  .trial_banner:hover .banner-content_hover {visibility: visible;z-index: 1; }.trial_banner * {position: absolute; }body {background-color: #CED1D3;overflow: hidden;overflow-y: auto; }#__interaction_id__ {font-family: 'Segoe UI', sans-serif;position: absolute;background-color: #FFFFFF; }  #__interaction_id__:not(.embedded) {min-height: 100%; }  #__interaction_id__ .interactivity-footer {padding: 0 70px 0; }  #__interaction_id__ .interactivity-navigation-panel ul {list-style: none; }  #__interaction_id__ .accessibility-item-content {padding: 80px 70px 30px; }    #__interaction_id__ .accessibility-item-content p,    #__interaction_id__ .accessibility-item-content h1,    #__interaction_id__ .accessibility-item-content h2,    #__interaction_id__ .accessibility-item-content ol,    #__interaction_id__ .accessibility-item-content ul {font-size: 20px;line-height: 1.5em; }    #__interaction_id__ .accessibility-item-content .accessibility-rich-text-image {max-width: 100%;margin-top: 12px; }    #__interaction_id__ .accessibility-item-content .accessibility-rich-text-video {max-width: 100%;margin-top: 12px; }    #__interaction_id__ .accessibility-item-content ul {list-style: disc;margin-left: 19px; }    #__interaction_id__ .accessibility-item-content ol {list-style: decimal;margin-left: 16px; }    #__interaction_id__ .accessibility-item-content audio {display: block;margin-top: 12px; }    #__interaction_id__ .accessibility-item-content p {margin-top: 10px; }    #__interaction_id__ .accessibility-item-content h1 {font-size: 26px;font-weight: 600; }    #__interaction_id__ .accessibility-item-content h2 {font-size: 24px;font-weight: 600; }    #__interaction_id__ .accessibility-item-content ul,    #__interaction_id__ .accessibility-item-content ol {margin-left: 40px; }  #__interaction_id__ .accessibility-hidden-link-container {position: relative;height: 21px;padding: 0 70px; }  #__interaction_id__ .accessibility-hidden-link {position: absolute;display: block;left: -10000px;width: 1px;height: 1px;overflow: hidden; }    #__interaction_id__ .accessibility-hidden-link:focus {left: auto;width: auto;height: auto; }  #__interaction_id__ text.cambria-embed {font-family: __cambria-embed__ !important; }  #__interaction_id__ text.eq-editor-main-i {font-family: __eq-editor-main-i__; }  #__interaction_id__ text.eq-editor-math-i {font-family: __eq-editor-math-i__; }  #__interaction_id__ text.eq-editor-size2 {font-family: __eq-editor-size2__; }  #__interaction_id__ text.eq-editor-double-struck {font-family: __eq-editor-double-struck__; }  #__interaction_id__ text.eq-editor-fraktur {font-family: __eq-editor-fraktur__; }  #__interaction_id__ text.eq-editor-script {font-family: __eq-editor-script__; }  #__interaction_id__ .page-controls {position: relative;left: 0;top: 0;direction: rtl;float: left; }    #__interaction_id__ .page-controls button {margin: 12px;min-width: 217px;min-height: 46px;font-family: 'Segoe UI', sans-serif;font-size: 20px; }      #__interaction_id__ .page-controls button:last-of-type {margin-left: 0; }  #__interaction_id__ .items-list {font-size: 20px;margin-bottom: 8px;padding: 12px 0;clear: both; }    #__interaction_id__ .items-list__item {cursor: pointer; }      #__interaction_id__ .items-list__item.items-list__item_active {color: #A52A2A; }    #__interaction_id__ .items-list summary {margin-bottom: 8px;font-weight: 600; }#__interaction_id__.embedded {position: static; }  #__interaction_id__.embedded .accessibility-item-content {padding: 0; }  #__interaction_id__.embedded .accessibility-hidden-link-container {padding: 0; }  #__interaction_id__.embedded .interactivity-footer {padding: 0; }  #__interaction_id__.embedded .page-controls {margin-top: 32px;margin-bottom: 32px; }    #__interaction_id__.embedded .page-controls button {margin: 0; }      #__interaction_id__.embedded .page-controls button:first-child {margin-left: 12px; }  #__interaction_id__.embedded .items-list {padding: 0;margin-bottom: 16px; }",
        d;
        for (d in a)
            if (A(a).hasOwnProperty(d)) {
                var f = "__" + d.replace(/\./g, "_") + "__";
                c = c.replace(new RegExp(f, "g"), a[d])
            }
        for (var g in b)
            A(b).hasOwnProperty(g) && (c = c.replace(new RegExp(g, "g"), b[g]));
        c = c.replace(/__verticalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Lc);
        c = c.replace(/__horizontalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Kc);
        return id(c)
    };
    kd.prototype.Lc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="g436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#g436)" />\n</svg>') + ")"
    };
    kd.prototype.Kc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="gh436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#gh436)" />\n</svg>') + ")"
    };
    function ld() {}
    ld.prototype.Td = function (a, b) {
        var c = "/* reset styles */* {box-sizing: border-box;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }input,textarea {-webkit-user-select: text;-moz-user-select: text;-ms-user-select: text;user-select: text; }html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {margin: 0;padding: 0;border: 0; }/* HTML5 display-role reset for older browsers */article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display: block; }ol,ul {list-style: none; }table {border-collapse: collapse;border-spacing: 0; }div {-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-webkit-user-drag: none; }input {-webkit-appearance: none;-moz-appearance: none; }  input::-ms-clear {display: none; }.clear {clear: both; }*::-moz-focus-inner {border: 0; }.fullscreen-video-layer {display: none;background: #000000;will-change: transform; }  .fullscreen-video-layer.fullscreen-video-layer_with-video-player {overflow: hidden;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 1;display: block; }    .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player {top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;width: 100% !important;height: 100% !important; }      .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player__video-element {width: 100% !important;height: 100% !important;-webkit-transform: none !important;-ms-transform: none !important;transform: none !important; }.zoom-lightbox-layer {cursor: pointer;cursor: -webkit-zoom-out;cursor: zoom-out;position: absolute;z-index: 1;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);display: none;overflow: hidden; }  .zoom-lightbox-layer.zoom-lightbox-layer_miniskin {cursor: auto; }  .zoom-lightbox-layer.zoom-lightbox-layer_visible {display: block; }  .zoom-lightbox-layer__background {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.7);-webkit-transform: translateZ(0);transform: translateZ(0); }    .zoom-lightbox-layer__background.zoom-lightbox-layer__background_miniskin {background: #282828; }.zoom-lightbox-control-panel {position: absolute;top: 0;display: none;background: #404040; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_miniskin {display: block; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_horizontal {width: 100%;height: 46px;left: 0; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_vertical {width: 56px;height: 100%;right: 0; }.zoom-lightbox {position: absolute; }  .zoom-lightbox__substrate {position: absolute;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;background: #FFFFFF; }  .zoom-lightbox__preview {position: absolute;z-index: 1;left: 0;top: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25); }.close-lightbox-icon-wrapper {position: absolute;pointer-events: all; }  .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_horizontal {top: 11px;right: 18px;width: 24px;height: 24px;padding: 3px; }  .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_vertical {top: 7px;right: 12px;padding: 5px;width: 29px;height: 29px; }  .close-lightbox-icon-wrapper svg {width: 100%;height: 100%; }text.cambria-embed {font-family: __cambria-embed__ !important; }text.eq-editor-main-i {font-family: __eq-editor-main-i__; }text.eq-editor-math-i {font-family: __eq-editor-math-i__; }text.eq-editor-size2 {font-family: __eq-editor-size2__; }text.eq-editor-double-struck {font-family: __eq-editor-double-struck__; }text.eq-editor-fraktur {font-family: __eq-editor-fraktur__; }text.eq-editor-script {font-family: __eq-editor-script__; }.visuals-play-overlay {top: 0;position: absolute;left: 0;width: 100%;height: 100%;z-index: 1;background-color: rgba(0, 0, 0, 0.48);display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center; }  .visuals-play-overlay.visuals-play-overlay_active .visuals-play-overlay__icon-wrapper {opacity: 0.5; }.visuals-play-overlay-button {position: relative; }  .visuals-play-overlay-button.visuals-play-overlay-button_active .visuals-play-overlay-button__background {background-color: __button_text_color__;-webkit-transform: scale(1.15);-ms-transform: scale(1.15);transform: scale(1.15); }  .visuals-play-overlay-button.visuals-play-overlay-button_active .visuals-play-overlay-button__icon path {fill: __button_background_color__; }  .visuals-play-overlay-button.visuals-play-overlay-button_desktop {cursor: pointer; }    .visuals-play-overlay-button.visuals-play-overlay-button_desktop .visuals-play-overlay-button__background {width: 90px;height: 90px; }    .visuals-play-overlay-button.visuals-play-overlay-button_desktop .visuals-play-overlay-button__icon {top: 27px;left: 34px; }  .visuals-play-overlay-button__background {background-color: #FFFFFF;border-radius: 45px;width: 80px;height: 80px;box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);-webkit-transition: background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition: background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1); }  .visuals-play-overlay-button__icon {position: absolute;width: 30px;height: 36px;top: 22px;left: 29px; }.trial_banner {position: relative;-webkit-transform: translateZ(0);transform: translateZ(0); }  .trial_banner .banner-content,  .trial_banner .banner-content_hover {position: absolute;left: 0;right: 0;top: 0;bottom: 0;width: 100%;height: 100%; }  .trial_banner .banner-content {visibility: visible;z-index: 1; }  .trial_banner .banner-content_hover {visibility: hidden;z-index: 0; }  .trial_banner .days_remaining {position: absolute;font-family: 'Open Sans', Arial, sans-serif;font-weight: normal;font-size: 13px;left: 65px;top: 41px;color: #7C1645;z-index: 1; }  .trial_banner:hover .banner-content {visibility: hidden;z-index: 0; }  .trial_banner:hover .banner-content_hover {visibility: visible;z-index: 1; }*:focus {outline: none; }.audio-container.audio-container_simple-item {margin-top: 20px;margin-bottom: 14px; }body.visuals_scroll *::-webkit-scrollbar-button:decrement:start {height: 10px;display: block;background-color: #FFFFFF; }body.visuals_scroll *::-webkit-scrollbar-button:increment:end {height: 10px;display: block;background-color: #FFFFFF; }body.visuals_scroll *::-webkit-scrollbar {width: 10px;background-color: #ffffff; }body.visuals_scroll *::-webkit-scrollbar-thumb {min-height: 20px;border: 2px solid #ffffff;border-radius: 6px;background-color: #9F9F9F; }body.visuals_scroll *::-webkit-scrollbar-thumb:hover {background-color: #8C8C8C; }#__interaction_id__ .tooltip {background: __tooltip_background_color__;border: 1px solid __tooltip_border_color__;color: __tooltip_text_color__;position: absolute;padding: 2px 8px;min-height: 24px;z-index: 50;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;border-radius: 4px;font-size: 13px;pointer-events: none;cursor: default;word-break: break-word;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1); }#__interaction_id__ .video-player {position: relative;overflow: hidden;max-width: 100%; }  #__interaction_id__ .video-player .media-controls-panel {height: 36px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 22px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_hidden {bottom: -36px; }    #__interaction_id__ .video-player .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized {padding: 0 22px 0 11px; }      #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }        #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 8px);width: calc(100% - 8px);margin-left: 8px; }        #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .video-player .media-controls-panel .button-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .video-player .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .video-player .media-controls-panel .timeline-control {height: 36px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 36px - 8px);width: calc(100% - 2 * 36px - 8px); }      #__interaction_id__ .video-player .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 8px - 36px);width: calc(100% - 4 * 8px - 36px);margin: 0 8px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 24px;height: 36px;position: absolute;margin-left: -12px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress-slider {width: 12px;height: 12px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 12px / 2);top: calc(50% - 12px / 2);left: -webkit-calc(50% - 12px / 2);left: calc(50% - 12px / 2);border-radius: 50%; }      #__interaction_id__ .video-player .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 8px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .video-player .media-controls-panel .fullscreen-control {height: 36px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 8px; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon {width: 25px;height: 19px;top: -webkit-calc((100% - 19px) / 2);top: calc((100% - 19px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 36px - 45px);width: calc(100% - 2 * 36px - 45px); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 36px - 45px);width: calc(100% - 36px - 45px); }    #__interaction_id__ .video-player .media-controls-panel .sound-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 8px; }      #__interaction_id__ .video-player .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }  #__interaction_id__ .video-player .media-controls-panel {border-radius: 0; }  #__interaction_id__ .video-player__start-button {text-align: center;display: inline-block;height: 56px;width: 56px;position: absolute;top: -webkit-calc(50% - 56px / 2);top: calc(50% - 56px / 2);left: -webkit-calc(50% - 56px / 2);left: calc(50% - 56px / 2);cursor: pointer;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 1;-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player__start-button:hover {opacity: 0.8; }  #__interaction_id__ .video-player__replay-button {text-align: center;display: inline-block;height: 56px;width: 56px;position: absolute;top: -webkit-calc(50% - 56px / 2);top: calc(50% - 56px / 2);left: -webkit-calc(50% - 56px / 2);left: calc(50% - 56px / 2);cursor: pointer;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 1;-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player__replay-button:hover {opacity: 0.8; }  #__interaction_id__ .video-player .video-player-preloader {width: 50px;height: 50px;position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;border-radius: 10px;background-color: rgba(0, 0, 0, 0.5); }    #__interaction_id__ .video-player .video-player-preloader__image {width: 50px;height: 50px;-webkit-transform-origin: center;-ms-transform-origin: center;transform-origin: center; }  #__interaction_id__ .video-player video {width: 100%;height: 100%; }#__interaction_id__ .audio-player {position: relative;height: 36px;width: 100%; }  #__interaction_id__ .audio-player .media-controls-panel {height: 36px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 22px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_hidden {bottom: -36px; }    #__interaction_id__ .audio-player .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized {padding: 0 22px 0 11px; }      #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }        #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 8px);width: calc(100% - 8px);margin-left: 8px; }        #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .audio-player .media-controls-panel .button-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .audio-player .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .audio-player .media-controls-panel .timeline-control {height: 36px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 36px - 8px);width: calc(100% - 2 * 36px - 8px); }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 8px - 36px);width: calc(100% - 4 * 8px - 36px);margin: 0 8px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 24px;height: 36px;position: absolute;margin-left: -12px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress-slider {width: 12px;height: 12px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 12px / 2);top: calc(50% - 12px / 2);left: -webkit-calc(50% - 12px / 2);left: calc(50% - 12px / 2);border-radius: 50%; }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 8px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control {height: 36px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 8px; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon {width: 25px;height: 19px;top: -webkit-calc((100% - 19px) / 2);top: calc((100% - 19px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 36px - 45px);width: calc(100% - 2 * 36px - 45px); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 36px - 45px);width: calc(100% - 36px - 45px); }    #__interaction_id__ .audio-player .media-controls-panel .sound-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 8px; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }#__interaction_id__ .audio-player-mini {position: relative;height: 32px;width: 100%; }  #__interaction_id__ .audio-player-mini .media-controls-panel {height: 32px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 18px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_hidden {bottom: -32px; }    #__interaction_id__ .audio-player-mini .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized {padding: 0 18px 0 9px; }      #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 32px);width: calc(100% - 32px); }        #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 7.2px);width: calc(100% - 7.2px);margin-left: 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .audio-player-mini .media-controls-panel .button-control {height: 32px;width: 32px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container {width: 16px;height: 16px;position: relative;top: -webkit-calc((100% - 16px) / 2);top: calc((100% - 16px) / 2);left: -webkit-calc((100% - 16px) / 2);left: calc((100% - 16px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control {height: 32px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 32px - 7.2px);width: calc(100% - 2 * 32px - 7.2px); }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 7.2px - 36px);width: calc(100% - 4 * 7.2px - 36px);margin: 0 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 18px;height: 32px;position: absolute;margin-left: -9px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress-slider {width: 9px;height: 9px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 9px / 2);top: calc(50% - 9px / 2);left: -webkit-calc(50% - 9px / 2);left: calc(50% - 9px / 2);border-radius: 50%; }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control {height: 32px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 7.2px; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon {width: 23px;height: 17px;top: -webkit-calc((100% - 17px) / 2);top: calc((100% - 17px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 32px);width: calc(100% - 32px); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 32px - 43px);width: calc(100% - 2 * 32px - 43px); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 32px - 43px);width: calc(100% - 32px - 43px); }    #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control {height: 32px;width: 32px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 7.2px; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container {width: 16px;height: 16px;position: relative;top: -webkit-calc((100% - 16px) / 2);top: calc((100% - 16px) / 2);left: -webkit-calc((100% - 16px) / 2);left: calc((100% - 16px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }#__interaction_id__ .rich-text {z-index: 0;position: relative; }  #__interaction_id__ .rich-text > h1 a,  #__interaction_id__ .rich-text > h1 a span,  #__interaction_id__ .rich-text > h1 a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > h2 a,  #__interaction_id__ .rich-text > h2 a span,  #__interaction_id__ .rich-text > h2 a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > p,  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {word-wrap: break-word; }    #__interaction_id__ .rich-text > p a,    #__interaction_id__ .rich-text > p a span,    #__interaction_id__ .rich-text > p a sup,    #__interaction_id__ .rich-text > ul li a,    #__interaction_id__ .rich-text > ul li a span,    #__interaction_id__ .rich-text > ul li a sup,    #__interaction_id__ .rich-text > ol li a,    #__interaction_id__ .rich-text > ol li a span,    #__interaction_id__ .rich-text > ol li a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > div {max-width: 100%;clear: both;word-wrap: break-word;position: relative;z-index: 1;line-height: 0; }  #__interaction_id__ .rich-text > p,  #__interaction_id__ .rich-text > h1,  #__interaction_id__ .rich-text > li {font-feature-settings: 'liga' 0; }  #__interaction_id__ .rich-text > * {vertical-align: baseline; }  #__interaction_id__ .rich-text > ol li,  #__interaction_id__ .rich-text > ul li {position: relative;left: 1em;padding-right: 1em; }  #__interaction_id__ .rich-text > ol {margin-left: 1em;list-style: outside decimal; }    #__interaction_id__ .rich-text > ol li {padding-left: 0.6em; }  #__interaction_id__ .rich-text > ul {margin-left: 1.4em;list-style: outside disc; }    #__interaction_id__ .rich-text > ul li {padding-left: 0.2em; }  #__interaction_id__ .rich-text > sup {vertical-align: super; }  #__interaction_id__ .rich-text > sub {vertical-align: sub; }  #__interaction_id__ .rich-text .aspect-ratio-fixed-block {position: relative;display: inline-block;max-width: 100%; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block.aspect-ratio-fixed-block_zoomable {cursor: pointer;cursor: -webkit-zoom-in;cursor: zoom-in; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__inner-wrapper {position: relative;height: 0; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__content {position: absolute;top: 0;left: 0;width: 100%;height: 100%; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__zoom {position: absolute;right: 4px;bottom: 4px;width: 24px;height: 24px;opacity: 0.86;cursor: pointer;-webkit-transition: none;transition: none;pointer-events: none; }      #__interaction_id__ .rich-text .aspect-ratio-fixed-block__zoom svg {width: 100%;height: 100%; }  #__interaction_id__ .rich-text .inline-item {display: inline-block;text-indent: 0;font-size: 0;margin-left: 2px;margin-right: 1px;position: relative; }  #__interaction_id__ .rich-text > h1 > span {color: __header_font_color__; }  #__interaction_id__ .rich-text > h1 svg [fill='#000000'] {fill: __header_font_color__ !important; }  #__interaction_id__ .rich-text > h1 svg [stroke='#000000'] {stroke: __header_font_color__ !important; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] > span,  #__interaction_id__ .rich-text > h1 a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > h1 a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > h1 a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h2 > span {color: __subheader_font_color__; }  #__interaction_id__ .rich-text > h2 svg [fill='#000000'] {fill: __subheader_font_color__ !important; }  #__interaction_id__ .rich-text > h2 svg [stroke='#000000'] {stroke: __subheader_font_color__ !important; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] > span,  #__interaction_id__ .rich-text > h2 a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > h2 a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > h2 a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > p > span,  #__interaction_id__ .rich-text > ul li > span,  #__interaction_id__ .rich-text > ol li > span {color: __text_font_color__; }  #__interaction_id__ .rich-text > p svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li svg [fill='#000000'] {fill: __text_font_color__ !important; }  #__interaction_id__ .rich-text > p svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li svg [stroke='#000000'] {stroke: __text_font_color__ !important; }  #__interaction_id__ .rich-text > p span[data-hyperlink] > span,  #__interaction_id__ .rich-text > p a > span,  #__interaction_id__ .rich-text > ul li span[data-hyperlink] > span,  #__interaction_id__ .rich-text > ul li a > span,  #__interaction_id__ .rich-text > ol li span[data-hyperlink] > span,  #__interaction_id__ .rich-text > ol li a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > p span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > p a svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li a svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > p span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > p a svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li a svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {color: __text_font_color__; }  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {padding-top: 3px;padding-bottom: 3px; }    #__interaction_id__ .rich-text > ul li:first-child,    #__interaction_id__ .rich-text > ol li:first-child {padding-top: 1px; }    #__interaction_id__ .rich-text > ul li:last-child,    #__interaction_id__ .rich-text > ol li:last-child {padding-bottom: 1px; }  #__interaction_id__ .rich-text::after {content: '';clear: both;width: 100%;height: 0;display: block; }#__interaction_id__ .interactivity * {-webkit-user-select: none !important;-moz-user-select: none !important;-ms-user-select: none !important;user-select: none !important;-webkit-user-drag: none; }#__interaction_id__ .interactivity-content-overlay {position: absolute;will-change: transform;z-index: 1;top: 0;left: 0;right: 0;bottom: 0; }#__interaction_id__ .zoom-top-layer {position: absolute;will-change: transform;z-index: 1;top: 0;left: 0;right: 0;bottom: 0; }#__interaction_id__ .interactivity-content-overlay {display: none; }.trial_banner {position: absolute;right: 0;z-index: 100; }body {background-color: __page_background_color__;overflow: hidden; }#__interaction_id__ {position: absolute;overflow: hidden;background: __player_background_color__; }  #__interaction_id__ .container-top-shadow {background: __verticalGradient(__description_background_color__, __transparent_description_background_color__);background: -webkit-linear-gradient(top, __description_background_color__, __transparent_description_background_color__);background: linear-gradient(to bottom, __description_background_color__, __transparent_description_background_color__);position: absolute;bottom: 0;left: 0;right: 0;height: 60px;pointer-events: none; }  #__interaction_id__ .container-bottom-shadow {background: __verticalGradient(__transparent_description_background_color__, __description_background_color__);background: -webkit-linear-gradient(top, __transparent_description_background_color__, __description_background_color__);background: linear-gradient(to bottom, __transparent_description_background_color__, __description_background_color__);position: absolute;bottom: 0;left: 0;right: 0;height: 60px;pointer-events: none; }  #__interaction_id__ .vertical-scrollbar {position: absolute;right: 0;top: 4px;bottom: 4px;width: 14px;-webkit-transition: opacity 0.2s ease;transition: opacity 0.2s ease; }    #__interaction_id__ .vertical-scrollbar .thumb {position: absolute;width: 8px;right: 3px;padding: 1px;border-radius: 5px; }      #__interaction_id__ .vertical-scrollbar .thumb__background {height: 100%;border-radius: 4px;background-color: #000000;border: 1px solid rgba(255, 255, 255, 0.5); }  #__interaction_id__ .vertical-scrollbar {-webkit-transition: none;transition: none;opacity: 0.5 !important; }  #__interaction_id__ .scrollable-container {position: relative;width: 100%;height: 100%; }    #__interaction_id__ .scrollable-container__content-container {position: relative;width: 100%; }  #__interaction_id__ .fullscreen-video-layer {display: none;background: #000000;will-change: transform; }    #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player {overflow: hidden;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 1;display: block; }      #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player {top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;width: 100% !important;height: 100% !important; }        #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player__video-element {width: 100% !important;height: 100% !important;-webkit-transform: none !important;-ms-transform: none !important;transform: none !important; }  #__interaction_id__ .zoom-lightbox-layer {cursor: pointer;cursor: -webkit-zoom-out;cursor: zoom-out;position: absolute;z-index: 1;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);display: none;overflow: hidden; }    #__interaction_id__ .zoom-lightbox-layer.zoom-lightbox-layer_miniskin {cursor: auto; }    #__interaction_id__ .zoom-lightbox-layer.zoom-lightbox-layer_visible {display: block; }    #__interaction_id__ .zoom-lightbox-layer__background {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.7);-webkit-transform: translateZ(0);transform: translateZ(0); }      #__interaction_id__ .zoom-lightbox-layer__background.zoom-lightbox-layer__background_miniskin {background: #282828; }  #__interaction_id__ .zoom-lightbox-control-panel {position: absolute;top: 0;display: none;background: #404040; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_miniskin {display: block; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_horizontal {width: 100%;height: 46px;left: 0; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_vertical {width: 56px;height: 100%;right: 0; }  #__interaction_id__ .zoom-lightbox {position: absolute; }    #__interaction_id__ .zoom-lightbox__substrate {position: absolute;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;background: #FFFFFF; }    #__interaction_id__ .zoom-lightbox__preview {position: absolute;z-index: 1;left: 0;top: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25); }  #__interaction_id__ .close-lightbox-icon-wrapper {position: absolute;pointer-events: all; }    #__interaction_id__ .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_horizontal {top: 11px;right: 18px;width: 24px;height: 24px;padding: 3px; }    #__interaction_id__ .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_vertical {top: 7px;right: 12px;padding: 5px;width: 29px;height: 29px; }    #__interaction_id__ .close-lightbox-icon-wrapper svg {width: 100%;height: 100%; }  #__interaction_id__ text.cambria-embed {font-family: __cambria-embed__ !important; }  #__interaction_id__ text.eq-editor-main-i {font-family: __eq-editor-main-i__; }  #__interaction_id__ text.eq-editor-math-i {font-family: __eq-editor-math-i__; }  #__interaction_id__ text.eq-editor-size2 {font-family: __eq-editor-size2__; }  #__interaction_id__ text.eq-editor-double-struck {font-family: __eq-editor-double-struck__; }  #__interaction_id__ text.eq-editor-fraktur {font-family: __eq-editor-fraktur__; }  #__interaction_id__ text.eq-editor-script {font-family: __eq-editor-script__; }  #__interaction_id__ .simple-item-content {width: 100%;top: 0; }    #__interaction_id__ .simple-item-content.simple-item-content_optimize-animation {will-change: transform; }    #__interaction_id__ .simple-item-content__title {word-wrap: break-word;color: __title_font_color__; }    #__interaction_id__ .simple-item-content.simple-item-content_leap {padding: 0; }    #__interaction_id__ .simple-item-content.simple-item-content_popup {padding: 30px 0 0; }  #__interaction_id__ .secondary-item-overlay {position: relative;width: 100%;height: 100%;background: rgba(27, 27, 27, 0.7);padding-left: 50px;padding-right: 50px; }    #__interaction_id__ .secondary-item-overlay__close-container {position: absolute;top: 13px;right: 13px;width: 34px;height: 34px;cursor: pointer; }    #__interaction_id__ .secondary-item-overlay__close-region {opacity: 0.6;background-color: #000000;border-radius: 50%;padding: 11px;-webkit-transition: opacity 0.2s ease;transition: opacity 0.2s ease;will-change: opacity;width: 100%;height: 100%; }      #__interaction_id__ .secondary-item-overlay__close-region.secondary-item-overlay__close-region_active {opacity: 0.8; }    #__interaction_id__ .secondary-item-overlay__close-icon {position: absolute;width: 12px;height: 12px;top: 11px;left: 11px;right: 11px;bottom: 11px;opacity: 0.72;-webkit-transition: opacity 0.2s ease;transition: opacity 0.2s ease;will-change: opacity; }      #__interaction_id__ .secondary-item-overlay__close-icon svg {vertical-align: top;fill: #FFFFFF; }      #__interaction_id__ .secondary-item-overlay__close-icon.secondary-item-overlay__close-icon_active {opacity: 1; }  #__interaction_id__.lte_ie10 .secondary-item-overlay {z-index: 1; }  #__interaction_id__ .secondary-item-popup {position: relative;border-radius: 5px;background-color: __description_background_color__;box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);width: 100%;max-width: 598px;padding: 10px 40px 10px 40px; }    #__interaction_id__ .secondary-item-popup__content-container {width: 100%;height: 100%;overflow: hidden;padding-right: 30px;-webkit-overflow-scrolling: touch; }  #__interaction_id__ .interactivity-header {padding: 0 15px;height: 36px;background: __title_background__; }    #__interaction_id__ .interactivity-header__title {font-family: __title_font_family__, 'Segoe UI', sans-serif, arial;font-weight: __title_font_weight__;font-style: __title_font_italic__;font-size: 16px;line-height: 35px;color: __title_color__;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; }  #__interaction_id__ .interactivity {position: relative;overflow: hidden; }    #__interaction_id__ .interactivity.interactivity_with-border::after {content: '';position: absolute;top: 0;bottom: 0;left: 0;right: 0;border: 1px solid __interactivity_border_color__;pointer-events: none; }    #__interaction_id__ .interactivity__top-border {position: absolute;width: 100%;border-top: 1px solid __interactivity_border_color__; }    #__interaction_id__ .interactivity__right-border {position: absolute;right: 0;height: 100%;border-left: 1px solid __interactivity_border_color__; }    #__interaction_id__ .interactivity__bottom-border {position: absolute;width: 100%;bottom: 0;border-top: 1px solid __interactivity_border_color__; }    #__interaction_id__ .interactivity__left-border {position: absolute;height: 100%;border-left: 1px solid __interactivity_border_color__; }  #__interaction_id__ .interactivity-content {position: relative;background-color: __interactivity_background_color__;height: 100%; }    #__interaction_id__ .interactivity-content__description > div:first-child {position: relative; }  #__interaction_id__ .interactivity-footer {position: relative;height: 56px; }  #__interaction_id__ .interactivity-navigation-panel {height: 56px;overflow: hidden; }    #__interaction_id__ .interactivity-navigation-panel__next {float: right;font-size: 40px;cursor: pointer; }    #__interaction_id__ .interactivity-navigation-panel__prev {float: right;font-size: 40px;cursor: pointer; }  #__interaction_id__ .page-controls {position: absolute;right: 0;top: 10px;font-family: PFnb, 'Segoe UI', sans-serif, arial; }  #__interaction_id__ .page-control {float: left;position: relative;margin-left: 8px;height: 36px;max-width: 160px;min-width: 80px;background-color: __button_background_color__;color: __button_text_color__;border-radius: 4px;cursor: pointer; }    #__interaction_id__ .page-control.page-control_with-animation {-webkit-transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s; }    #__interaction_id__ .page-control.page-control_focused, #__interaction_id__ .page-control.page-control_active {background-color: __hovered_button_background_color__;color: __hovered_button_text_color__; }      #__interaction_id__ .page-control.page-control_focused .navigation-arrow svg path, #__interaction_id__ .page-control.page-control_active .navigation-arrow svg path {fill: __hovered_button_text_color__; }    #__interaction_id__ .page-control.page-control_disable {cursor: default;pointer-events: none;color: __button_text_color__ !important;background-color: __button_background_color__ !important; }      #__interaction_id__ .page-control.page-control_disable .navigation-arrow svg path {fill: __button_text_color__; }    #__interaction_id__ .page-control__focus-container {margin: 4px;outline: 1px dotted transparent;border: 0;padding: 0;background-color: transparent;color: inherit;font-family: inherit;cursor: pointer;text-align: left;max-width: 152px;min-width: 72px; }      #__interaction_id__ .page-control__focus-container:focus {outline: 1px dotted __hovered_button_text_color__; }      #__interaction_id__ .page-control__focus-container.page-control__focus-container_disable:focus {outline: 1px dotted transparent; }    #__interaction_id__ .page-control .page-control-button {overflow: hidden;border: 0;height: 28px;position: relative;font-size: 15px;line-height: 13px;font-weight: bold;white-space: nowrap;padding: 9px 24px 13px;text-overflow: ellipsis;-webkit-transform: translateZ(0);transform: translateZ(0); }  #__interaction_id__ .navigation-arrow {position: absolute;width: 9px;z-index: 1;height: 15px; }    #__interaction_id__ .navigation-arrow svg path {fill: __button_text_color__; }    #__interaction_id__ .navigation-arrow.navigation-arrow_with-animation svg path {-webkit-transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s; }  #__interaction_id__.ipad .page-control {max-width: 150px;min-width: 90px; }  #__interaction_id__.ipad .page-control-button {max-width: 142px;min-width: 82px; }  #__interaction_id__ .page-controls__prev .navigation-arrow {left: 17px;top: 11px; }  #__interaction_id__ .page-controls__prev .page-control-button {padding: 8px 16px 7px 29px; }  #__interaction_id__ .page-controls__next .navigation-arrow {right: 15px;top: 11px; }  #__interaction_id__ .page-controls__next .page-control-button {padding: 8px 29px 7px 16px; }  #__interaction_id__.tablet .page-control-button {padding-top: 8px; }#__interaction_id__.embedded {border-radius: 0; }#__interaction_id__.layout#__interaction_id__.layout_fillpanels {border-radius: 0 !important; }  #__interaction_id__.layout#__interaction_id__.layout_fillpanels .interactivity {position: relative;overflow: hidden;width: auto;height: auto; }#__interaction_id__.layout#__interaction_id__.layout_filltype_player {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .visualizer-wrapper {border-radius: 4px;background-color: __interactivity_background_color__; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .timeline-visualizer {width: -webkit-calc(100% - 20px);width: calc(100% - 20px);left: 10px;height: 70px; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .timeline-period-info {height: 15px; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .visualizer-scroll-shadow {top: 0;height: 100%; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .items-container {padding-top: 5px; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .cyclic-process-visualizer-item__delimiter {display: none; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .process-visualizer-item__delimiter {display: none; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .guided-image-content-view .side-by-side-view__description {border: 0; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .labeled-graphic-content-view .side-by-side-view__description {border: 0; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .hotspot-image-content-view .side-by-side-view__description {border: 0; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .interactivity-content {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .interactivity-content-container {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .interactivity::after {border-color: transparent; }#__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player {background: transparent !important; }  #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player .tablet-content-view {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }    #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player .tablet-content-view .interactivity-content {background: transparent; }    #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player .tablet-content-view .interactivity-content-container {background: transparent; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .visualizer-wrapper {border-radius: 4px;background-color: __interactivity_background_color__; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .timeline-visualizer {width: -webkit-calc(100% - 20px);width: calc(100% - 20px);left: 10px;height: 70px; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .timeline-period-info {height: 15px; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .visualizer-scroll-shadow {top: 0;height: 100%; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .items-container {padding-top: 5px; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .cyclic-process-visualizer-item__delimiter {display: none; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .process-visualizer-item__delimiter {display: none; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .guided-image-content-view .side-by-side-view__description {border: 0; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .labeled-graphic-content-view .side-by-side-view__description {border: 0; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .hotspot-image-content-view .side-by-side-view__description {border: 0; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .interactivity {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_slide .interactivity .interactivity-content {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_slide .interactivity .interactivity-content-container {background: transparent; }#__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .interactivity {background: transparent !important; }#__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .tablet-content-view {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }  #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .tablet-content-view .interactivity-content {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .tablet-content-view .interactivity-content-container {background: transparent; }body.pointer_cursor * {cursor: pointer !important; }body.move_cursor * {cursor: move !important; }body.grabbing_cursor * {cursor: -webkit-grabbing !important;cursor: grabbing !important; }body.not_allowed_cursor * {cursor: not-allowed !important; }#__interaction_id__ .side-by-side-view {position: relative;overflow: hidden;width: 100%;height: 100%; }  #__interaction_id__ .side-by-side-view__description {position: absolute;overflow: hidden;padding-top: 3px;padding-bottom: 14px;background: __description_background_color__; }  #__interaction_id__ .side-by-side-view__visualizer {position: absolute; }  #__interaction_id__ .side-by-side-view.side-by-side-view_bottom .side-by-side-view__description.side-by-side-view__description_border {border-bottom: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_left .side-by-side-view__description.side-by-side-view__description_border {border-left: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_top .side-by-side-view__description.side-by-side-view__description_border {border-top: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_right .side-by-side-view__description.side-by-side-view__description_border {border-right: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .side-by-side-view__description {background: __description_background_color__;border-radius: 4px;border: 1px solid __description_border_color__;box-shadow: 0 4px 11px 1px rgba(0, 0, 0, 0.05); }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .side-by-side-description {width: 100%; }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .side-by-side-description-shadow {bottom: 5px; }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .simple-item-content {padding: 20px 30px 14px; }    #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .simple-item-content__content {margin-top: 6px; }  #__interaction_id__ .side-by-side-view .container-shadow {bottom: 29px; }#__interaction_id__ .side-by-side-description {position: relative;height: 100%;-webkit-overflow-scrolling: touch; }  #__interaction_id__ .side-by-side-description__content {min-height: 100%;overflow: hidden; }#__interaction_id__ .visualizer-scroll-shadow {background: __horizontalGradient(__transparent_interactivity_background_color__, __interactivity_background_color__);background: -webkit-linear-gradient(left, __transparent_interactivity_background_color__, __interactivity_background_color__);background: linear-gradient(to right, __transparent_interactivity_background_color__, __interactivity_background_color__);position: absolute;top: -4px;height: 52px;width: 30px;pointer-events: none; }  #__interaction_id__ .visualizer-scroll-shadow.visualizer-scroll-shadow_right {right: -1px; }  #__interaction_id__ .visualizer-scroll-shadow.visualizer-scroll-shadow_ios9 {background: transparent; }#__interaction_id__ .visualizer {display: inline-block; }  #__interaction_id__ .visualizer.visualizer_horizontal {width: 100%; }  #__interaction_id__ .visualizer.visualizer_vertical {height: 100%; }#__interaction_id__ .items-container {display: inline-block;position: relative; }  #__interaction_id__ .items-container.items-container_horizontal {white-space: nowrap;padding-left: 18px;padding-right: 18px; }  #__interaction_id__ .items-container.items-container_vertical {padding-top: 18px;padding-bottom: 18px; }#__interaction_id__:not(.chrome) .items-container {will-change: transform; }#__interaction_id__ .steps-visualizer-item {position: relative;vertical-align: top;z-index: 0;cursor: pointer;border-radius: 44px;text-align: center;box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16); }  #__interaction_id__ .steps-visualizer-item__item-border {position: absolute;top: -1px;left: -1px;right: -1px;bottom: -1px;border: 2px solid __step_border_color__;border-radius: 44px;z-index: 0; }  #__interaction_id__ .steps-visualizer-item__index-container {display: inline-block;vertical-align: middle;width: 100%;-webkit-transition: background 0.25s ease, color 0.25s ease;transition: background 0.25s ease, color 0.25s ease;border-radius: 44px;background: __step_background_color__;z-index: 0;position: relative; }  #__interaction_id__ .steps-visualizer-item__index {padding: 0 3px;margin: 5px;font-family: __title_font_family__;font-weight: __title_font_weight__;font-style: __title_font_italic__;min-width: 34px;height: 34px;border-radius: 44px;line-height: 34px;text-align: center;font-size: 16px;color: __step_text_color__;-webkit-transition: background 0.25s ease, color 0.25s ease;transition: background 0.25s ease, color 0.25s ease;position: relative;z-index: 1; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_horizontal {display: inline-block; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_vertical {display: block; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_active .steps-visualizer-item__item-border, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_active.steps-visualizer-item_passed .steps-visualizer-item__item-border {border: 3px solid __step_border_color__;-webkit-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05); }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select .steps-visualizer-item__item-border, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select.steps-visualizer-item_passed .steps-visualizer-item__item-border {-webkit-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05); }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select .steps-visualizer-item__index, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select.steps-visualizer-item_passed .steps-visualizer-item__index {color: __selected_step_text_color__;background: __step_border_color__; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_passed .steps-visualizer-item__item-border {border: 3px solid __step_border_color__;padding: 0; }#__interaction_id__:not(.android) .steps-visualizer-item__index {vertical-align: inherit; }#__interaction_id__ .steps-progress-line {vertical-align: top; }  #__interaction_id__ .steps-progress-line svg {vertical-align: top; }    #__interaction_id__ .steps-progress-line svg line {stroke: __step_progress_point_color__; }  #__interaction_id__ .steps-progress-line.steps-progress-line_vertical {display: block;width: 2px;margin-left: 21px; }  #__interaction_id__ .steps-progress-line.steps-progress-line_vertical.steps-progress-line_passed {width: 3px;background: __step_border_color__; }  #__interaction_id__ .steps-progress-line.steps-progress-line_horizontal {display: inline-block;position: relative;height: 2px;margin-top: 21px; }  #__interaction_id__ .steps-progress-line.steps-progress-line_horizontal.steps-progress-line_passed {height: 3px;background: __step_border_color__; }#__interaction_id__ .visualizer-tooltip-container {position: relative;width: 100%;height: 100%; }#__interaction_id__.android .steps-visualizer-item__index {line-height: 35px; }#__interaction_id__.firefox .steps-visualizer-item__index {line-height: 33px; }#__interaction_id__.lte_ie10 .steps-visualizer-item__index {line-height: 33px; }#__interaction_id__ .visualizer {text-align: center; }#__interaction_id__ .simple-item-content {padding: 32px 43px 25px 28px; }  #__interaction_id__ .simple-item-content__title {word-break: break-word; }#__interaction_id__ .tooltip {z-index: 1; }  #__interaction_id__ .tooltip__pointer {position: absolute;width: 0;height: 0;top: -14px;left: -4.5px;border-style: solid;border-width: 12px 4.5px 0 4.5px;border-color: __tooltip_background_color__ transparent transparent transparent;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1); }  #__interaction_id__ .tooltip__pointer-border {position: absolute;width: 0;height: 0;bottom: 28px;-webkit-transform: translate(-50%) rotate(180deg);-ms-transform: translate(-50%) rotate(180deg);transform: translate(-50%) rotate(180deg);margin-left: 3px;border-style: solid;border-width: 14px 5.5px 0 5.5px;border-color: __tooltip_border_color__ transparent transparent transparent; }  #__interaction_id__ .tooltip.tooltip_top {bottom: 55px; }    #__interaction_id__ .tooltip.tooltip_top .tooltip__pointer-border {-webkit-transform: translate(-50%);-ms-transform: translate(-50%);transform: translate(-50%);bottom: -14px; }  #__interaction_id__ .tooltip.tooltip_bottom {top: 52px; }    #__interaction_id__ .tooltip.tooltip_bottom .tooltip__pointer-border {-webkit-transform: translate(-50%) rotate(180deg);-ms-transform: translate(-50%) rotate(180deg);transform: translate(-50%) rotate(180deg);top: -14px; }#__interaction_id__ .side-by-side-view__visualizer.side-by-side-view__visualizer_vertical {width: 70%; }#__interaction_id__ .side-by-side-view__visualizer.side-by-side-view__visualizer_horizontal {text-align: center; }",
        d;
        for (d in a)
            if (A(a).hasOwnProperty(d)) {
                var f = "__" + d.replace(/\./g, "_") + "__";
                c = c.replace(new RegExp(f, "g"), a[d])
            }
        for (var g in b)
            A(b).hasOwnProperty(g) && (c = c.replace(new RegExp(g, "g"), b[g]));
        c = c.replace(/__verticalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Lc);
        c = c.replace(/__horizontalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Kc);
        return id(c)
    };
    ld.prototype.Lc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="g436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#g436)" />\n</svg>') + ")"
    };
    ld.prototype.Kc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="gh436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#gh436)" />\n</svg>') + ")"
    };
    function md() {}
    md.prototype.Td = function (a, b) {
        var c = "/* reset styles */* {box-sizing: border-box;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }input,textarea {-webkit-user-select: text;-moz-user-select: text;-ms-user-select: text;user-select: text; }html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {margin: 0;padding: 0;border: 0; }/* HTML5 display-role reset for older browsers */article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display: block; }ol,ul {list-style: none; }table {border-collapse: collapse;border-spacing: 0; }div {-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-webkit-user-drag: none; }input {-webkit-appearance: none;-moz-appearance: none; }  input::-ms-clear {display: none; }.clear {clear: both; }*::-moz-focus-inner {border: 0; }.fullscreen-video-layer {display: none;background: #000000;will-change: transform; }  .fullscreen-video-layer.fullscreen-video-layer_with-video-player {overflow: hidden;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 1;display: block; }    .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player {top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;width: 100% !important;height: 100% !important; }      .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player__video-element {width: 100% !important;height: 100% !important;-webkit-transform: none !important;-ms-transform: none !important;transform: none !important; }.zoom-lightbox-layer {cursor: pointer;cursor: -webkit-zoom-out;cursor: zoom-out;position: absolute;z-index: 1;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);display: none;overflow: hidden; }  .zoom-lightbox-layer.zoom-lightbox-layer_miniskin {cursor: auto; }  .zoom-lightbox-layer.zoom-lightbox-layer_visible {display: block; }  .zoom-lightbox-layer__background {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.7);-webkit-transform: translateZ(0);transform: translateZ(0); }    .zoom-lightbox-layer__background.zoom-lightbox-layer__background_miniskin {background: #282828; }.zoom-lightbox-control-panel {position: absolute;top: 0;display: none;background: #404040; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_miniskin {display: block; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_horizontal {width: 100%;height: 46px;left: 0; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_vertical {width: 56px;height: 100%;right: 0; }.zoom-lightbox {position: absolute; }  .zoom-lightbox__substrate {position: absolute;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;background: #FFFFFF; }  .zoom-lightbox__preview {position: absolute;z-index: 1;left: 0;top: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25); }.close-lightbox-icon-wrapper {position: absolute;pointer-events: all; }  .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_horizontal {top: 11px;right: 18px;width: 24px;height: 24px;padding: 3px; }  .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_vertical {top: 7px;right: 12px;padding: 5px;width: 29px;height: 29px; }  .close-lightbox-icon-wrapper svg {width: 100%;height: 100%; }text.cambria-embed {font-family: __cambria-embed__ !important; }text.eq-editor-main-i {font-family: __eq-editor-main-i__; }text.eq-editor-math-i {font-family: __eq-editor-math-i__; }text.eq-editor-size2 {font-family: __eq-editor-size2__; }text.eq-editor-double-struck {font-family: __eq-editor-double-struck__; }text.eq-editor-fraktur {font-family: __eq-editor-fraktur__; }text.eq-editor-script {font-family: __eq-editor-script__; }.visuals-play-overlay {top: 0;position: absolute;left: 0;width: 100%;height: 100%;z-index: 1;background-color: rgba(0, 0, 0, 0.48);display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center; }  .visuals-play-overlay.visuals-play-overlay_active .visuals-play-overlay__icon-wrapper {opacity: 0.5; }.visuals-play-overlay-button {position: relative; }  .visuals-play-overlay-button.visuals-play-overlay-button_active .visuals-play-overlay-button__background {background-color: __button_text_color__;-webkit-transform: scale(1.15);-ms-transform: scale(1.15);transform: scale(1.15); }  .visuals-play-overlay-button.visuals-play-overlay-button_active .visuals-play-overlay-button__icon path {fill: __button_background_color__; }  .visuals-play-overlay-button.visuals-play-overlay-button_desktop {cursor: pointer; }    .visuals-play-overlay-button.visuals-play-overlay-button_desktop .visuals-play-overlay-button__background {width: 90px;height: 90px; }    .visuals-play-overlay-button.visuals-play-overlay-button_desktop .visuals-play-overlay-button__icon {top: 27px;left: 34px; }  .visuals-play-overlay-button__background {background-color: #FFFFFF;border-radius: 45px;width: 80px;height: 80px;box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);-webkit-transition: background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition: background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1); }  .visuals-play-overlay-button__icon {position: absolute;width: 30px;height: 36px;top: 22px;left: 29px; }.trial_banner {position: relative;-webkit-transform: translateZ(0);transform: translateZ(0); }  .trial_banner .banner-content,  .trial_banner .banner-content_hover {position: absolute;left: 0;right: 0;top: 0;bottom: 0;width: 100%;height: 100%; }  .trial_banner .banner-content {visibility: visible;z-index: 1; }  .trial_banner .banner-content_hover {visibility: hidden;z-index: 0; }  .trial_banner .days_remaining {position: absolute;font-family: 'Open Sans', Arial, sans-serif;font-weight: normal;font-size: 13px;left: 65px;top: 41px;color: #7C1645;z-index: 1; }  .trial_banner:hover .banner-content {visibility: hidden;z-index: 0; }  .trial_banner:hover .banner-content_hover {visibility: visible;z-index: 1; }*:focus {outline: none; }.audio-container.audio-container_simple-item {margin-top: 20px;margin-bottom: 14px; }body.visuals_scroll *::-webkit-scrollbar-button:decrement:start {height: 10px;display: block;background-color: #FFFFFF; }body.visuals_scroll *::-webkit-scrollbar-button:increment:end {height: 10px;display: block;background-color: #FFFFFF; }body.visuals_scroll *::-webkit-scrollbar {width: 10px;background-color: #ffffff; }body.visuals_scroll *::-webkit-scrollbar-thumb {min-height: 20px;border: 2px solid #ffffff;border-radius: 6px;background-color: #9F9F9F; }body.visuals_scroll *::-webkit-scrollbar-thumb:hover {background-color: #8C8C8C; }#__interaction_id__ .tooltip {background: __tooltip_background_color__;border: 1px solid __tooltip_border_color__;color: __tooltip_text_color__;position: absolute;padding: 2px 8px;min-height: 24px;z-index: 50;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;border-radius: 4px;font-size: 13px;pointer-events: none;cursor: default;word-break: break-word;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1); }#__interaction_id__ .video-player {position: relative;overflow: hidden;max-width: 100%; }  #__interaction_id__ .video-player .media-controls-panel {height: 36px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 22px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_hidden {bottom: -36px; }    #__interaction_id__ .video-player .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized {padding: 0 22px 0 11px; }      #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }        #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 8px);width: calc(100% - 8px);margin-left: 8px; }        #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .video-player .media-controls-panel .button-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .video-player .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .video-player .media-controls-panel .timeline-control {height: 36px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 36px - 8px);width: calc(100% - 2 * 36px - 8px); }      #__interaction_id__ .video-player .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 8px - 36px);width: calc(100% - 4 * 8px - 36px);margin: 0 8px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 24px;height: 36px;position: absolute;margin-left: -12px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress-slider {width: 12px;height: 12px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 12px / 2);top: calc(50% - 12px / 2);left: -webkit-calc(50% - 12px / 2);left: calc(50% - 12px / 2);border-radius: 50%; }      #__interaction_id__ .video-player .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 8px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .video-player .media-controls-panel .fullscreen-control {height: 36px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 8px; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon {width: 25px;height: 19px;top: -webkit-calc((100% - 19px) / 2);top: calc((100% - 19px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 36px - 45px);width: calc(100% - 2 * 36px - 45px); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 36px - 45px);width: calc(100% - 36px - 45px); }    #__interaction_id__ .video-player .media-controls-panel .sound-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 8px; }      #__interaction_id__ .video-player .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }  #__interaction_id__ .video-player .media-controls-panel {border-radius: 0; }  #__interaction_id__ .video-player__start-button {text-align: center;display: inline-block;height: 56px;width: 56px;position: absolute;top: -webkit-calc(50% - 56px / 2);top: calc(50% - 56px / 2);left: -webkit-calc(50% - 56px / 2);left: calc(50% - 56px / 2);cursor: pointer;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 1;-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player__start-button:hover {opacity: 0.8; }  #__interaction_id__ .video-player__replay-button {text-align: center;display: inline-block;height: 56px;width: 56px;position: absolute;top: -webkit-calc(50% - 56px / 2);top: calc(50% - 56px / 2);left: -webkit-calc(50% - 56px / 2);left: calc(50% - 56px / 2);cursor: pointer;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 1;-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player__replay-button:hover {opacity: 0.8; }  #__interaction_id__ .video-player .video-player-preloader {width: 50px;height: 50px;position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;border-radius: 10px;background-color: rgba(0, 0, 0, 0.5); }    #__interaction_id__ .video-player .video-player-preloader__image {width: 50px;height: 50px;-webkit-transform-origin: center;-ms-transform-origin: center;transform-origin: center; }  #__interaction_id__ .video-player video {width: 100%;height: 100%; }#__interaction_id__ .audio-player {position: relative;height: 36px;width: 100%; }  #__interaction_id__ .audio-player .media-controls-panel {height: 36px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 22px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_hidden {bottom: -36px; }    #__interaction_id__ .audio-player .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized {padding: 0 22px 0 11px; }      #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }        #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 8px);width: calc(100% - 8px);margin-left: 8px; }        #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .audio-player .media-controls-panel .button-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .audio-player .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .audio-player .media-controls-panel .timeline-control {height: 36px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 36px - 8px);width: calc(100% - 2 * 36px - 8px); }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 8px - 36px);width: calc(100% - 4 * 8px - 36px);margin: 0 8px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 24px;height: 36px;position: absolute;margin-left: -12px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress-slider {width: 12px;height: 12px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 12px / 2);top: calc(50% - 12px / 2);left: -webkit-calc(50% - 12px / 2);left: calc(50% - 12px / 2);border-radius: 50%; }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 8px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control {height: 36px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 8px; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon {width: 25px;height: 19px;top: -webkit-calc((100% - 19px) / 2);top: calc((100% - 19px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 36px - 45px);width: calc(100% - 2 * 36px - 45px); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 36px - 45px);width: calc(100% - 36px - 45px); }    #__interaction_id__ .audio-player .media-controls-panel .sound-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 8px; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }#__interaction_id__ .audio-player-mini {position: relative;height: 32px;width: 100%; }  #__interaction_id__ .audio-player-mini .media-controls-panel {height: 32px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 18px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_hidden {bottom: -32px; }    #__interaction_id__ .audio-player-mini .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized {padding: 0 18px 0 9px; }      #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 32px);width: calc(100% - 32px); }        #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 7.2px);width: calc(100% - 7.2px);margin-left: 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .audio-player-mini .media-controls-panel .button-control {height: 32px;width: 32px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container {width: 16px;height: 16px;position: relative;top: -webkit-calc((100% - 16px) / 2);top: calc((100% - 16px) / 2);left: -webkit-calc((100% - 16px) / 2);left: calc((100% - 16px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control {height: 32px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 32px - 7.2px);width: calc(100% - 2 * 32px - 7.2px); }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 7.2px - 36px);width: calc(100% - 4 * 7.2px - 36px);margin: 0 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 18px;height: 32px;position: absolute;margin-left: -9px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress-slider {width: 9px;height: 9px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 9px / 2);top: calc(50% - 9px / 2);left: -webkit-calc(50% - 9px / 2);left: calc(50% - 9px / 2);border-radius: 50%; }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control {height: 32px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 7.2px; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon {width: 23px;height: 17px;top: -webkit-calc((100% - 17px) / 2);top: calc((100% - 17px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 32px);width: calc(100% - 32px); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 32px - 43px);width: calc(100% - 2 * 32px - 43px); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 32px - 43px);width: calc(100% - 32px - 43px); }    #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control {height: 32px;width: 32px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 7.2px; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container {width: 16px;height: 16px;position: relative;top: -webkit-calc((100% - 16px) / 2);top: calc((100% - 16px) / 2);left: -webkit-calc((100% - 16px) / 2);left: calc((100% - 16px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }#__interaction_id__ .rich-text {z-index: 0;position: relative; }  #__interaction_id__ .rich-text > h1 a,  #__interaction_id__ .rich-text > h1 a span,  #__interaction_id__ .rich-text > h1 a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > h2 a,  #__interaction_id__ .rich-text > h2 a span,  #__interaction_id__ .rich-text > h2 a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > p,  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {word-wrap: break-word; }    #__interaction_id__ .rich-text > p a,    #__interaction_id__ .rich-text > p a span,    #__interaction_id__ .rich-text > p a sup,    #__interaction_id__ .rich-text > ul li a,    #__interaction_id__ .rich-text > ul li a span,    #__interaction_id__ .rich-text > ul li a sup,    #__interaction_id__ .rich-text > ol li a,    #__interaction_id__ .rich-text > ol li a span,    #__interaction_id__ .rich-text > ol li a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > div {max-width: 100%;clear: both;word-wrap: break-word;position: relative;z-index: 1;line-height: 0; }  #__interaction_id__ .rich-text > p,  #__interaction_id__ .rich-text > h1,  #__interaction_id__ .rich-text > li {font-feature-settings: 'liga' 0; }  #__interaction_id__ .rich-text > * {vertical-align: baseline; }  #__interaction_id__ .rich-text > ol li,  #__interaction_id__ .rich-text > ul li {position: relative;left: 1em;padding-right: 1em; }  #__interaction_id__ .rich-text > ol {margin-left: 1em;list-style: outside decimal; }    #__interaction_id__ .rich-text > ol li {padding-left: 0.6em; }  #__interaction_id__ .rich-text > ul {margin-left: 1.4em;list-style: outside disc; }    #__interaction_id__ .rich-text > ul li {padding-left: 0.2em; }  #__interaction_id__ .rich-text > sup {vertical-align: super; }  #__interaction_id__ .rich-text > sub {vertical-align: sub; }  #__interaction_id__ .rich-text .aspect-ratio-fixed-block {position: relative;display: inline-block;max-width: 100%; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block.aspect-ratio-fixed-block_zoomable {cursor: pointer;cursor: -webkit-zoom-in;cursor: zoom-in; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__inner-wrapper {position: relative;height: 0; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__content {position: absolute;top: 0;left: 0;width: 100%;height: 100%; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__zoom {position: absolute;right: 4px;bottom: 4px;width: 24px;height: 24px;opacity: 0.86;cursor: pointer;-webkit-transition: none;transition: none;pointer-events: none; }      #__interaction_id__ .rich-text .aspect-ratio-fixed-block__zoom svg {width: 100%;height: 100%; }  #__interaction_id__ .rich-text .inline-item {display: inline-block;text-indent: 0;font-size: 0;margin-left: 2px;margin-right: 1px;position: relative; }  #__interaction_id__ .rich-text > h1 > span {color: __header_font_color__; }  #__interaction_id__ .rich-text > h1 svg [fill='#000000'] {fill: __header_font_color__ !important; }  #__interaction_id__ .rich-text > h1 svg [stroke='#000000'] {stroke: __header_font_color__ !important; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] > span,  #__interaction_id__ .rich-text > h1 a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > h1 a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > h1 a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h2 > span {color: __subheader_font_color__; }  #__interaction_id__ .rich-text > h2 svg [fill='#000000'] {fill: __subheader_font_color__ !important; }  #__interaction_id__ .rich-text > h2 svg [stroke='#000000'] {stroke: __subheader_font_color__ !important; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] > span,  #__interaction_id__ .rich-text > h2 a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > h2 a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > h2 a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > p > span,  #__interaction_id__ .rich-text > ul li > span,  #__interaction_id__ .rich-text > ol li > span {color: __text_font_color__; }  #__interaction_id__ .rich-text > p svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li svg [fill='#000000'] {fill: __text_font_color__ !important; }  #__interaction_id__ .rich-text > p svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li svg [stroke='#000000'] {stroke: __text_font_color__ !important; }  #__interaction_id__ .rich-text > p span[data-hyperlink] > span,  #__interaction_id__ .rich-text > p a > span,  #__interaction_id__ .rich-text > ul li span[data-hyperlink] > span,  #__interaction_id__ .rich-text > ul li a > span,  #__interaction_id__ .rich-text > ol li span[data-hyperlink] > span,  #__interaction_id__ .rich-text > ol li a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > p span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > p a svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li a svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > p span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > p a svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li a svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {color: __text_font_color__; }  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {padding-top: 3px;padding-bottom: 3px; }    #__interaction_id__ .rich-text > ul li:first-child,    #__interaction_id__ .rich-text > ol li:first-child {padding-top: 1px; }    #__interaction_id__ .rich-text > ul li:last-child,    #__interaction_id__ .rich-text > ol li:last-child {padding-bottom: 1px; }  #__interaction_id__ .rich-text::after {content: '';clear: both;width: 100%;height: 0;display: block; }#__interaction_id__ .interactivity * {-webkit-user-select: none !important;-moz-user-select: none !important;-ms-user-select: none !important;user-select: none !important;-webkit-user-drag: none; }#__interaction_id__ .interactivity-content-overlay {position: absolute;will-change: transform;z-index: 1;top: 0;left: 0;right: 0;bottom: 0; }#__interaction_id__ .zoom-top-layer {position: absolute;will-change: transform;z-index: 1;top: 0;left: 0;right: 0;bottom: 0; }#__interaction_id__ .interactivity-content-overlay {display: none; }.trial_banner {position: absolute;right: 0;z-index: 100; }.back_to_app {height: 100%;position: absolute;left: 0; }  .back_to_app__text {color: #3DA0E1;font-size: 16px;font-family: Helvetica Neue, Helvetica, Roboto, Arial;text-overflow: ellipsis;overflow: hidden;position: absolute;bottom: 0;top: 0;height: 24px;line-height: 24px;margin: auto;padding-left: 25px;max-width: 80px; }    .back_to_app__text::before {content: '';background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMTMgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5CYWNrLUFycm93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImlQaG9uZS1YLUNvdXJzZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTU2LjAwMDAwMCkiIGZpbGw9IiMzREEwRTEiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEuOTA2MzgyOCw1Ni45ODk5NDk1IEwxMiw2Ni41IEwyMS45MDYzODI4LDc2LjAxMDA1MDUgQzIyLjQ4MjU4NSw3Ni41NjMyMDAyIDIzLjM5MjU5Miw3Ni41NjMyMDAyIDIzLjk2ODc5NDMsNzYuMDEwMDUwNSBMMjMuOTY4Nzk0Myw3Ni4wMTAwNTA1IEMyNC41MTU1MjgzLDc1LjQ4NTE5MDEgMjQuNTMzMjYwMyw3NC42MTY0OTEyIDI0LjAwODM5OTksNzQuMDY5NzU3MiBDMjMuOTk1NDY4OSw3NC4wNTYyODcyIDIzLjk4MjI2NDIsNzQuMDQzMDgyNiAyMy45Njg3OTQzLDc0LjAzMDE1MTUgTDE2LjEyNDgyMjksNjYuNSBMMjMuOTY4Nzk0Myw1OC45Njk4NDg1IEMyNC41MTU1MjgzLDU4LjQ0NDk4ODEgMjQuNTMzMjYwMyw1Ny41NzYyODkyIDI0LjAwODM5OTksNTcuMDI5NTU1MiBDMjMuOTk1NDY4OSw1Ny4wMTYwODUyIDIzLjk4MjI2NDIsNTcuMDAyODgwNiAyMy45Njg3OTQzLDU2Ljk4OTk0OTUgTDIzLjk2ODc5NDMsNTYuOTg5OTQ5NSBDMjMuMzkyNTkyLDU2LjQzNjc5OTggMjIuNDgyNTg1LDU2LjQzNjc5OTggMjEuOTA2MzgyOCw1Ni45ODk5NDk1IFoiIGlkPSJCYWNrLUFycm93Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) no-repeat center;height: 24px;width: 14px;left: 8px;position: absolute; }body,html {height: 100%; }body {-webkit-text-size-adjust: none;overflow: hidden; }#content {width: 100%;height: 100%;overflow: visible; }.linear-outline-items-list {position: absolute;top: 46px;left: 0;right: 0;bottom: 0;overflow: auto; }  .linear-outline-items-list.linear-outline-items-list_presenter {position: initial;top: initial;left: initial;right: initial;bottom: initial; }.linear-outline-item {width: 100%; }  .linear-outline-item.linear-outline-item_activated {background: #ECF5FC; }  .linear-outline-item__border-container {margin-left: 10px;margin-right: 10px;border-bottom: 1px solid #E6E6E6;overflow: hidden; }  .linear-outline-item__text-container {position: relative;margin: 20px 14px 17px;font-size: 15px;font-family: Helvetica Neue, Helvetica, Roboto, Arial;line-height: 23px;min-height: 23px;word-wrap: break-word; }  .linear-outline-item__index {display: inline-block;width: 38px; }  .linear-outline-item.linear-outline-item_no-index .linear-outline-item__index {display: none; }.items-list {position: absolute;top: 46px;left: 0;right: 0;bottom: 0;overflow: auto; }  .items-list.items-list_presenter {position: initial;top: initial;left: initial;right: initial;bottom: initial; }.timeline-outline-item {width: 100%; }  .timeline-outline-item.timeline-outline-item_activated {background: #ECF5FC; }  .timeline-outline-item__border-container {margin-left: 10px;margin-right: 10px;border-bottom: 1px solid #E6E6E6;overflow: hidden; }  .timeline-outline-item__text-container {position: relative;margin: 20px 14px 17px;font-family: Helvetica Neue, Helvetica, Roboto, Arial;line-height: 23px;word-wrap: break-word; }    .timeline-outline-item__text-container.timeline-outline-item__text-container_timeline-group {margin-left: 14px;font-size: 17px;font-weight: bold; }    .timeline-outline-item__text-container.timeline-outline-item__text-container_timeline-item {margin-left: 30px;font-size: 16px; }    .timeline-outline-item__text-container.timeline-outline-item__text-container_top-indent {margin-top: 38px; }  .timeline-outline-item__index {position: absolute;top: 0;left: 0; }#__interaction_id__ {position: relative;overflow: hidden; }  #__interaction_id__ .rich-text {font-size: 16px !important;font-family: Helvetica Neue, Helvetica, Roboto, Arial !important;line-height: 1.56em !important;text-align: left !important; }    #__interaction_id__ .rich-text h1,    #__interaction_id__ .rich-text h2,    #__interaction_id__ .rich-text p,    #__interaction_id__ .rich-text ul li,    #__interaction_id__ .rich-text ol li,    #__interaction_id__ .rich-text a > span {font-family: Helvetica Neue, Helvetica, Roboto, Arial !important; }    #__interaction_id__ .rich-text h1 {padding-top: 0 !important;padding-bottom: 8px !important;font-size: 25px !important;line-height: normal !important; }    #__interaction_id__ .rich-text h2 {padding-top: 8px !important;padding-bottom: 6px !important;font-size: 21px !important;line-height: normal !important; }    #__interaction_id__ .rich-text p {font-size: 16px !important;font-family: Helvetica Neue, Helvetica, Roboto, Arial !important;line-height: 1.56em !important;text-align: left !important;padding-top: 5px !important;padding-bottom: 14px !important; }    #__interaction_id__ .rich-text ul,    #__interaction_id__ .rich-text ol {padding-top: 5px !important;padding-bottom: 14px !important; }    #__interaction_id__ .rich-text ul li,    #__interaction_id__ .rich-text ol li {font-size: 16px !important;font-family: Helvetica Neue, Helvetica, Roboto, Arial !important;line-height: 1.56em !important;text-align: left !important;padding-top: 3px !important;padding-bottom: 3px !important; }    #__interaction_id__ .rich-text ul li:first-child,    #__interaction_id__ .rich-text ol li:first-child {padding-top: 1px !important; }    #__interaction_id__ .rich-text ul li:last-child,    #__interaction_id__ .rich-text ol li:last-child {padding-bottom: 1px !important; }  #__interaction_id__ .fullscreen-video-layer {display: none;background: #000000;will-change: transform; }    #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player {overflow: hidden;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 1;display: block; }      #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player {top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;width: 100% !important;height: 100% !important; }        #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player__video-element {width: 100% !important;height: 100% !important;-webkit-transform: none !important;-ms-transform: none !important;transform: none !important; }  #__interaction_id__ .zoom-lightbox-layer {cursor: pointer;cursor: -webkit-zoom-out;cursor: zoom-out;position: absolute;z-index: 1;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);display: none;overflow: hidden; }    #__interaction_id__ .zoom-lightbox-layer.zoom-lightbox-layer_miniskin {cursor: auto; }    #__interaction_id__ .zoom-lightbox-layer.zoom-lightbox-layer_visible {display: block; }    #__interaction_id__ .zoom-lightbox-layer__background {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.7);-webkit-transform: translateZ(0);transform: translateZ(0); }      #__interaction_id__ .zoom-lightbox-layer__background.zoom-lightbox-layer__background_miniskin {background: #282828; }  #__interaction_id__ .zoom-lightbox-control-panel {position: absolute;top: 0;display: none;background: #404040; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_miniskin {display: block; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_horizontal {width: 100%;height: 46px;left: 0; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_vertical {width: 56px;height: 100%;right: 0; }  #__interaction_id__ .zoom-lightbox {position: absolute; }    #__interaction_id__ .zoom-lightbox__substrate {position: absolute;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;background: #FFFFFF; }    #__interaction_id__ .zoom-lightbox__preview {position: absolute;z-index: 1;left: 0;top: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25); }  #__interaction_id__ .close-lightbox-icon-wrapper {position: absolute;pointer-events: all; }    #__interaction_id__ .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_horizontal {top: 11px;right: 18px;width: 24px;height: 24px;padding: 3px; }    #__interaction_id__ .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_vertical {top: 7px;right: 12px;padding: 5px;width: 29px;height: 29px; }    #__interaction_id__ .close-lightbox-icon-wrapper svg {width: 100%;height: 100%; }  #__interaction_id__ text.cambria-embed {font-family: __cambria-embed__ !important; }  #__interaction_id__ text.eq-editor-main-i {font-family: __eq-editor-main-i__; }  #__interaction_id__ text.eq-editor-math-i {font-family: __eq-editor-math-i__; }  #__interaction_id__ text.eq-editor-size2 {font-family: __eq-editor-size2__; }  #__interaction_id__ text.eq-editor-double-struck {font-family: __eq-editor-double-struck__; }  #__interaction_id__ text.eq-editor-fraktur {font-family: __eq-editor-fraktur__; }  #__interaction_id__ text.eq-editor-script {font-family: __eq-editor-script__; }  #__interaction_id__ .interactivity-header {position: absolute;top: 0;left: 0;right: 0;height: 46px;background-color: __player_background_color__;box-shadow: rgba(0, 0, 0, 0.1) 0 1px 6px 0;z-index: 1; }    #__interaction_id__ .interactivity-header__title {font-family: Helvetica Neue, Helvetica, Roboto, Arial;color: __miniskin_topbar_buttons_text_color__;font-size: 15px;font-weight: bold;line-height: 48px;text-align: center;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;position: absolute;padding: 0 70px;width: 100%; }    #__interaction_id__ .interactivity-header__close {position: absolute;top: 11px;right: 18px;padding: 3px;width: 24px;height: 24px; }    #__interaction_id__ .interactivity-header.interactivity-header_with-back-to-app-button .back_to_app {width: 70px; }    #__interaction_id__ .interactivity-header.interactivity-header_with-back-to-app-button .interactivity-header__title {pointer-events: none; }  #__interaction_id__ .interactivity {width: 100%;height: 100%; }  #__interaction_id__ .top-layer {width: 100%;height: 100%; }  #__interaction_id__ .interactivity-content-container {position: absolute;overflow: auto;-webkit-overflow-scrolling: touch;background-color: #FFFFFF; }    #__interaction_id__ .interactivity-content-container.interactivity-content-container_portrait {top: 46px;bottom: 62px;left: 0;right: 0; }    #__interaction_id__ .interactivity-content-container.interactivity-content-container_portrait.interactivity-content-container_customized {top: 52px;bottom: 52px; }    #__interaction_id__ .interactivity-content-container.interactivity-content-container_landscape {top: 0;bottom: 0;left: 0;right: 56px; }    #__interaction_id__ .interactivity-content-container.interactivity-content-container_landscape.interactivity-content-container_customized {right: 52px; }  #__interaction_id__ .interactivity-search {margin-bottom: 18px; }  #__interaction_id__ .interactivity-content {position: relative;height: 100%;overflow-y: auto;overflow-x: hidden; }  #__interaction_id__ .interactivity-footer {position: absolute;left: 0;right: 0;bottom: 0;height: 62px;background-color: #FFFFFF;padding: 0 70px;overflow: hidden;box-shadow: rgba(0, 0, 0, 0.1) 0 -1px 6px 0;z-index: 1; }    #__interaction_id__ .interactivity-footer.interactivity-footer_customized {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;height: 52px;padding: 0; }  #__interaction_id__ .interactivity-items-list {position: absolute;top: 0;bottom: 0;left: 0;right: 0;background: #FFFFFF;z-index: 1;padding: 0 6px;overflow: auto;-webkit-overflow-scrolling: touch; }    #__interaction_id__ .interactivity-items-list__header {position: absolute;top: 0;left: 0;right: 0;height: 46px;padding: 0 70px;box-shadow: rgba(0, 0, 0, 0.1) 0 1px 6px 0;z-index: 1; }    #__interaction_id__ .interactivity-items-list__title {font-family: Helvetica Neue, Helvetica, Roboto, Arial;color: #2B3B46;font-size: 15px;font-weight: bold;line-height: 48px;text-align: center;text-overflow: ellipsis;white-space: nowrap;overflow: hidden; }    #__interaction_id__ .interactivity-items-list__close-button {position: absolute;top: 10px;right: 10px;padding: 3px;width: 26px;height: 26px; }      #__interaction_id__ .interactivity-items-list__close-button svg {vertical-align: top; }    #__interaction_id__ .interactivity-items-list__outline-button {position: absolute;top: 15px; }  #__interaction_id__ .items-list-toggle-wrapper {position: absolute;top: 0;right: 0;width: 46px;height: 46px;line-height: 44px;text-align: center; }    #__interaction_id__ .items-list-toggle-wrapper.items-list-toggle-wrapper_vertical {width: 56px; }  #__interaction_id__ .items-list-toggle {width: 28px;height: 23px;display: inline-block;vertical-align: middle;padding: 3px; }    #__interaction_id__ .items-list-toggle svg {vertical-align: top; }  #__interaction_id__ .interactivity-sidebar {position: absolute;top: 0;bottom: 0;right: 0;width: 56px;height: 100%;background: #FFFFFF;box-shadow: 0 0 5px 0 #AAAAAA;z-index: 1; }    #__interaction_id__ .interactivity-sidebar__close {position: absolute;top: 7px;right: 12px;padding: 5px;width: 29px;height: 29px; }    #__interaction_id__ .interactivity-sidebar.interactivity-sidebar_customized {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;width: 52px;padding: 12px 0 20px 0;background: __player_background_color__;box-shadow: -1px 0 4px rgba(0, 0, 0, 0.16); }  #__interaction_id__ .list-visualizer-mobile-item-view {position: absolute; }    #__interaction_id__ .list-visualizer-mobile-item-view.list-visualizer-mobile-item-view_portrait {top: 46px;bottom: 62px;right: 0;left: 0; }    #__interaction_id__ .list-visualizer-mobile-item-view.list-visualizer-mobile-item-view_landscape {top: 0;bottom: 0;right: 56px;width: -webkit-calc(100% - 56px);width: calc(100% - 56px); }    #__interaction_id__ .list-visualizer-mobile-item-view.list-visualizer-mobile-item-view_mobileapp {top: 0;bottom: 0;right: 0;width: 100%; }  #__interaction_id__ .mobile-item-content {position: relative;height: 100%;-webkit-overflow-scrolling: touch;overflow-y: auto;overflow-x: hidden; }    #__interaction_id__ .mobile-item-content::-webkit-scrollbar {position: absolute;width: 6px; }    #__interaction_id__ .mobile-item-content::-webkit-scrollbar-button {display: none;opacity: 0; }    #__interaction_id__ .mobile-item-content::-webkit-scrollbar-track {opacity: 0;width: 6px;position: absolute; }    #__interaction_id__ .mobile-item-content::-webkit-scrollbar-thumb {opacity: 0;position: absolute;width: 6px;background: rgba(0, 0, 0, 0.1); }  #__interaction_id__ .interactivity-header-customized {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;height: 52px;padding: 0 12px 0 52px; }    #__interaction_id__ .interactivity-header-customized.interactivity-header-customized_with-back-to-app-button {padding-left: 12px; }    #__interaction_id__ .interactivity-header-customized.interactivity-header-customized_without-title .interactivity-close-button-customized {margin-left: auto; }    #__interaction_id__ .interactivity-header-customized.interactivity-header-customized_without-title .items-list-toggle-wrapper-customized {margin-left: auto; }  #__interaction_id__ .interactivity-header-title-customized {position: initial;-webkit-box-flex: 1;-webkit-flex-grow: 1;-ms-flex-positive: 1;flex-grow: 1;-webkit-flex-shrink: 1;-ms-flex-negative: 1;flex-shrink: 1;padding: 0; }  #__interaction_id__ .items-list-toggle-wrapper-customized {-webkit-box-flex: 0;-webkit-flex-grow: 0;-ms-flex-positive: 0;flex-grow: 0;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;width: 40px;height: 40px; }  #__interaction_id__ .items-list-toggle-customized {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex; }    #__interaction_id__ .items-list-toggle-customized svg path {fill: __miniskin_topbar_buttons_text_color__; }  #__interaction_id__ .back-to-app-customized {-webkit-box-flex: 0;-webkit-flex: 0 0 auto;-ms-flex: 0 0 auto;flex: 0 0 auto;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;width: 40px;height: 40px; }    #__interaction_id__ .back-to-app-customized svg path {fill: __miniskin_topbar_buttons_text_color__; }  #__interaction_id__ .interactivity-close-button-customized {-webkit-box-flex: 0;-webkit-flex: 0 0 auto;-ms-flex: 0 0 auto;flex: 0 0 auto;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center;width: 40px;height: 40px; }    #__interaction_id__ .interactivity-close-button-customized svg path {fill: __miniskin_topbar_buttons_text_color__; }  #__interaction_id__ .interactivity-navigation-panel {padding: 0 10px;background: #FFFFFF;position: absolute;bottom: 0;left: 0;right: 0;height: 62px;overflow: hidden;text-align: right; }    #__interaction_id__ .interactivity-navigation-panel__next {float: right;font-size: 40px;cursor: pointer; }    #__interaction_id__ .interactivity-navigation-panel__prev {float: right;font-size: 40px;cursor: pointer; }    #__interaction_id__ .interactivity-navigation-panel.interactivity-navigation-panel_vertical {padding: 0;height: auto;bottom: 15px; }      #__interaction_id__ .interactivity-navigation-panel.interactivity-navigation-panel_vertical .page-controls {top: 0;width: 36px;margin: auto;right: 0; }        #__interaction_id__ .interactivity-navigation-panel.interactivity-navigation-panel_vertical .page-controls__next {margin-bottom: 24px; }        #__interaction_id__ .interactivity-navigation-panel.interactivity-navigation-panel_vertical .page-controls__prev {margin-right: auto; }      #__interaction_id__ .interactivity-navigation-panel.interactivity-navigation-panel_vertical .page-control {display: block; }  #__interaction_id__ .page-controls {-webkit-transform: translateZ(0);transform: translateZ(0);position: relative;top: 15px;right: 11px; }    #__interaction_id__ .page-controls__prev {margin-right: 26px;float: right; }    #__interaction_id__ .page-controls__next {float: right; }    #__interaction_id__ .page-controls svg {vertical-align: top; }      #__interaction_id__ .page-controls svg polygon {fill: #FFFFFF; }  #__interaction_id__ .page-control {display: inline-block;vertical-align: top;padding: 3px;width: 36px;height: 36px; }    #__interaction_id__ .page-control[disabled] {opacity: 0.5; }  #__interaction_id__ .interactivity-customized-navigation-panel {display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;padding: 0 20px;width: 100%;background-color: __player_background_color__; }    #__interaction_id__ .interactivity-customized-navigation-panel.interactivity-customized-navigation-panel_vertical {-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;margin-top: auto;padding: 0;width: initial; }      #__interaction_id__ .interactivity-customized-navigation-panel.interactivity-customized-navigation-panel_vertical .navigation-panel-prev-button {margin: 0; }      #__interaction_id__ .interactivity-customized-navigation-panel.interactivity-customized-navigation-panel_vertical .navigation-panel-next-button {margin: 0; }      #__interaction_id__ .interactivity-customized-navigation-panel.interactivity-customized-navigation-panel_vertical .navigation-panel-prev-button {margin-bottom: 20px; }  #__interaction_id__ .navigation-panel-prev-button {width: 36px;height: 36px; }    #__interaction_id__ .navigation-panel-prev-button svg path:nth-child(1) {fill: __button_background_color__; }    #__interaction_id__ .navigation-panel-prev-button svg path:nth-child(2) {stroke: __button_text_color__; }    #__interaction_id__ .navigation-panel-prev-button[disabled] svg path:nth-child(1) {opacity: 0.4; }  #__interaction_id__ .navigation-panel-next-button {width: 36px;height: 36px; }    #__interaction_id__ .navigation-panel-next-button svg path:nth-child(1) {fill: __button_background_color__; }    #__interaction_id__ .navigation-panel-next-button svg path:nth-child(2) {stroke: __button_text_color__; }    #__interaction_id__ .navigation-panel-next-button[disabled] svg path:nth-child(1) {opacity: 0.4; }  #__interaction_id__ .navigation-panel-prev-button {margin-left: auto;margin-right: 24px; }  #__interaction_id__ .simple-item-content {padding: 13px 22px 40px;width: 100%;top: 0; }    #__interaction_id__ .simple-item-content__title {word-wrap: break-word; }      #__interaction_id__ .simple-item-content__title span {font-family: Helvetica Neue, Helvetica, Roboto, Arial !important;color: __title_font_color__ !important; }      #__interaction_id__ .simple-item-content__title p {padding-top: 10px !important;padding-bottom: 10px !important;font-family: Helvetica Neue, Helvetica, Roboto, Arial !important;font-size: 25px !important;line-height: 1.33em !important; }  #__interaction_id__ .mobile-popup-item-view {position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 1;background: __description_background_color__;overflow: hidden; }    #__interaction_id__ .mobile-popup-item-view__item-container {position: absolute;-webkit-overflow-scrolling: touch;overflow-y: auto;overflow-x: hidden; }      #__interaction_id__ .mobile-popup-item-view__item-container.mobile-popup-item-view__item-container_portrait {top: 46px;bottom: 62px;right: 0;left: 0; }      #__interaction_id__ .mobile-popup-item-view__item-container.mobile-popup-item-view__item-container_landscape {top: 0;bottom: 0;right: 56px;width: -webkit-calc(100% - 56px);width: calc(100% - 56px); }    #__interaction_id__ .mobile-popup-item-view__item-container-customized.mobile-popup-item-view__item-container-customized_portrait {top: 52px;bottom: 52px; }    #__interaction_id__ .mobile-popup-item-view__item-container-customized.mobile-popup-item-view__item-container-customized_landscape {right: 52px;width: -webkit-calc(100% - 52px);width: calc(100% - 52px); }  #__interaction_id__.ios .items-list-toggle-wrapper {line-height: 41px; }  #__interaction_id__ .trial_banner {position: absolute; }#__interaction_id__ .simple-item-content {padding: 13px 22px 40px;width: 100%;top: 0; }  #__interaction_id__ .simple-item-content__title {word-wrap: break-word; }    #__interaction_id__ .simple-item-content__title span {font-family: Helvetica Neue, Helvetica, Roboto, Arial !important;color: __title_font_color__ !important; }    #__interaction_id__ .simple-item-content__title p {padding-top: 10px !important;padding-bottom: 10px !important;font-family: Helvetica Neue, Helvetica, Roboto, Arial !important;font-size: 25px !important;line-height: 1.33em !important; }#__interaction_id__ .mobile-side-by-side-content-view {position: relative;width: 100%;height: 100%;overflow-x: hidden;overflow-y: auto;background-color: __description_background_color__; }#__interaction_id__ .visualizer {position: relative;width: 100%;margin: 0; }#__interaction_id__ .visualizer-container {overflow: hidden;padding: 14px 10px 3px;background-color: __interactivity_background_color__; }  #__interaction_id__ .visualizer-container__color-line {height: 6px;border-radius: 3px 3px 0 0;position: absolute;left: 0;right: 0; }#__interaction_id__ .visualizer-scroll-shadow {background: __horizontalGradient(__transparent_interactivity_background_color__, __interactivity_background_color__);background: -webkit-linear-gradient(left, __transparent_interactivity_background_color__, __interactivity_background_color__);background: linear-gradient(to right, __transparent_interactivity_background_color__, __interactivity_background_color__);position: absolute;top: -4px;height: 52px;width: 30px;pointer-events: none; }  #__interaction_id__ .visualizer-scroll-shadow.visualizer-scroll-shadow_right {right: -1px; }  #__interaction_id__ .visualizer-scroll-shadow.visualizer-scroll-shadow_ios9 {background: transparent; }#__interaction_id__ .visualizer {display: inline-block; }  #__interaction_id__ .visualizer.visualizer_horizontal {width: 100%; }  #__interaction_id__ .visualizer.visualizer_vertical {height: 100%; }#__interaction_id__ .items-container {display: inline-block;position: relative; }  #__interaction_id__ .items-container.items-container_horizontal {white-space: nowrap;padding-left: 18px;padding-right: 18px; }  #__interaction_id__ .items-container.items-container_vertical {padding-top: 18px;padding-bottom: 18px; }#__interaction_id__:not(.chrome) .items-container {will-change: transform; }#__interaction_id__ .steps-visualizer-item {position: relative;vertical-align: top;z-index: 0;cursor: pointer;border-radius: 36px;text-align: center;box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16); }  #__interaction_id__ .steps-visualizer-item__item-border {position: absolute;top: -1px;left: -1px;right: -1px;bottom: -1px;border: 2px solid __step_border_color__;border-radius: 36px;z-index: 0; }  #__interaction_id__ .steps-visualizer-item__index-container {display: inline-block;vertical-align: middle;width: 100%;-webkit-transition: background 0.25s ease, color 0.25s ease;transition: background 0.25s ease, color 0.25s ease;border-radius: 36px;background: __step_background_color__;z-index: 0;position: relative; }  #__interaction_id__ .steps-visualizer-item__index {padding: 0 3px;margin: 5px;font-family: __title_font_family__;font-weight: __title_font_weight__;font-style: __title_font_italic__;min-width: 26px;height: 26px;border-radius: 36px;line-height: 26px;text-align: center;font-size: 16px;color: __step_text_color__;-webkit-transition: background 0.25s ease, color 0.25s ease;transition: background 0.25s ease, color 0.25s ease;position: relative;z-index: 1; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_horizontal {display: inline-block; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_vertical {display: block; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_active .steps-visualizer-item__item-border, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_active.steps-visualizer-item_passed .steps-visualizer-item__item-border {border: 3px solid __step_border_color__;-webkit-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05); }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select .steps-visualizer-item__item-border, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select.steps-visualizer-item_passed .steps-visualizer-item__item-border {-webkit-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05); }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select .steps-visualizer-item__index, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select.steps-visualizer-item_passed .steps-visualizer-item__index {color: __selected_step_text_color__;background: __step_border_color__; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_passed .steps-visualizer-item__item-border {border: 3px solid __step_border_color__;padding: 0; }#__interaction_id__:not(.android) .steps-visualizer-item__index {vertical-align: inherit; }#__interaction_id__ .steps-progress-line {vertical-align: top; }  #__interaction_id__ .steps-progress-line svg {vertical-align: top; }    #__interaction_id__ .steps-progress-line svg line {stroke: __step_progress_point_color__; }  #__interaction_id__ .steps-progress-line.steps-progress-line_vertical {display: block;width: 2px;margin-left: 17px; }  #__interaction_id__ .steps-progress-line.steps-progress-line_vertical.steps-progress-line_passed {width: 3px;background: __step_border_color__; }  #__interaction_id__ .steps-progress-line.steps-progress-line_horizontal {display: inline-block;position: relative;height: 2px;margin-top: 17px; }  #__interaction_id__ .steps-progress-line.steps-progress-line_horizontal.steps-progress-line_passed {height: 3px;background: __step_border_color__; }#__interaction_id__ .visualizer-tooltip-container {position: relative;width: 100%;height: 100%; }#__interaction_id__.android .steps-visualizer-item__index {line-height: 27px; }#__interaction_id__.firefox .steps-visualizer-item__index {line-height: 25px; }#__interaction_id__.lte_ie10 .steps-visualizer-item__index {line-height: 25px; }#__interaction_id__ .visualizer-container {text-align: center;padding: 17px 6px 16px; }#__interaction_id__ .steps-visualizer-item__index {font-family: Helvetica Neue, Helvetica, Roboto, Arial; }",
        d;
        for (d in a)
            if (A(a).hasOwnProperty(d)) {
                var f = "__" + d.replace(/\./g, "_") + "__";
                c = c.replace(new RegExp(f, "g"), a[d])
            }
        for (var g in b)
            A(b).hasOwnProperty(g) && (c = c.replace(new RegExp(g, "g"), b[g]));
        c = c.replace(/__verticalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Lc);
        c = c.replace(/__horizontalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Kc);
        return id(c)
    };
    md.prototype.Lc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="g436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#g436)" />\n</svg>') + ")"
    };
    md.prototype.Kc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="gh436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#gh436)" />\n</svg>') + ")"
    };
    function nd() {}
    nd.prototype.Td = function (a, b) {
        var c = "/* reset styles */* {box-sizing: border-box;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }input,textarea {-webkit-user-select: text;-moz-user-select: text;-ms-user-select: text;user-select: text; }html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {margin: 0;padding: 0;border: 0; }/* HTML5 display-role reset for older browsers */article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display: block; }ol,ul {list-style: none; }table {border-collapse: collapse;border-spacing: 0; }div {-webkit-tap-highlight-color: rgba(0, 0, 0, 0);-webkit-user-drag: none; }input {-webkit-appearance: none;-moz-appearance: none; }  input::-ms-clear {display: none; }.clear {clear: both; }*::-moz-focus-inner {border: 0; }.fullscreen-video-layer {display: none;background: #000000;will-change: transform; }  .fullscreen-video-layer.fullscreen-video-layer_with-video-player {overflow: hidden;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 1;display: block; }    .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player {top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;width: 100% !important;height: 100% !important; }      .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player__video-element {width: 100% !important;height: 100% !important;-webkit-transform: none !important;-ms-transform: none !important;transform: none !important; }.zoom-lightbox-layer {cursor: pointer;cursor: -webkit-zoom-out;cursor: zoom-out;position: absolute;z-index: 1;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);display: none;overflow: hidden; }  .zoom-lightbox-layer.zoom-lightbox-layer_miniskin {cursor: auto; }  .zoom-lightbox-layer.zoom-lightbox-layer_visible {display: block; }  .zoom-lightbox-layer__background {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.7);-webkit-transform: translateZ(0);transform: translateZ(0); }    .zoom-lightbox-layer__background.zoom-lightbox-layer__background_miniskin {background: #282828; }.zoom-lightbox-control-panel {position: absolute;top: 0;display: none;background: #404040; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_miniskin {display: block; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_horizontal {width: 100%;height: 46px;left: 0; }  .zoom-lightbox-control-panel.zoom-lightbox-control-panel_vertical {width: 56px;height: 100%;right: 0; }.zoom-lightbox {position: absolute; }  .zoom-lightbox__substrate {position: absolute;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;background: #FFFFFF; }  .zoom-lightbox__preview {position: absolute;z-index: 1;left: 0;top: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25); }.close-lightbox-icon-wrapper {position: absolute;pointer-events: all; }  .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_horizontal {top: 11px;right: 18px;width: 24px;height: 24px;padding: 3px; }  .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_vertical {top: 7px;right: 12px;padding: 5px;width: 29px;height: 29px; }  .close-lightbox-icon-wrapper svg {width: 100%;height: 100%; }text.cambria-embed {font-family: __cambria-embed__ !important; }text.eq-editor-main-i {font-family: __eq-editor-main-i__; }text.eq-editor-math-i {font-family: __eq-editor-math-i__; }text.eq-editor-size2 {font-family: __eq-editor-size2__; }text.eq-editor-double-struck {font-family: __eq-editor-double-struck__; }text.eq-editor-fraktur {font-family: __eq-editor-fraktur__; }text.eq-editor-script {font-family: __eq-editor-script__; }.visuals-play-overlay {top: 0;position: absolute;left: 0;width: 100%;height: 100%;z-index: 1;background-color: rgba(0, 0, 0, 0.48);display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-box-align: center;-webkit-align-items: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-webkit-justify-content: center;-ms-flex-pack: center;justify-content: center; }  .visuals-play-overlay.visuals-play-overlay_active .visuals-play-overlay__icon-wrapper {opacity: 0.5; }.visuals-play-overlay-button {position: relative; }  .visuals-play-overlay-button.visuals-play-overlay-button_active .visuals-play-overlay-button__background {background-color: __button_text_color__;-webkit-transform: scale(1.15);-ms-transform: scale(1.15);transform: scale(1.15); }  .visuals-play-overlay-button.visuals-play-overlay-button_active .visuals-play-overlay-button__icon path {fill: __button_background_color__; }  .visuals-play-overlay-button.visuals-play-overlay-button_desktop {cursor: pointer; }    .visuals-play-overlay-button.visuals-play-overlay-button_desktop .visuals-play-overlay-button__background {width: 90px;height: 90px; }    .visuals-play-overlay-button.visuals-play-overlay-button_desktop .visuals-play-overlay-button__icon {top: 27px;left: 34px; }  .visuals-play-overlay-button__background {background-color: #FFFFFF;border-radius: 45px;width: 80px;height: 80px;box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);-webkit-transition: background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition: background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;-webkit-transform: scale(1);-ms-transform: scale(1);transform: scale(1); }  .visuals-play-overlay-button__icon {position: absolute;width: 30px;height: 36px;top: 22px;left: 29px; }.trial_banner {position: relative;-webkit-transform: translateZ(0);transform: translateZ(0); }  .trial_banner .banner-content,  .trial_banner .banner-content_hover {position: absolute;left: 0;right: 0;top: 0;bottom: 0;width: 100%;height: 100%; }  .trial_banner .banner-content {visibility: visible;z-index: 1; }  .trial_banner .banner-content_hover {visibility: hidden;z-index: 0; }  .trial_banner .days_remaining {position: absolute;font-family: 'Open Sans', Arial, sans-serif;font-weight: normal;font-size: 13px;left: 65px;top: 41px;color: #7C1645;z-index: 1; }  .trial_banner:hover .banner-content {visibility: hidden;z-index: 0; }  .trial_banner:hover .banner-content_hover {visibility: visible;z-index: 1; }*:focus {outline: none; }.audio-container.audio-container_simple-item {margin-top: 20px;margin-bottom: 14px; }body.visuals_scroll *::-webkit-scrollbar-button:decrement:start {height: 10px;display: block;background-color: #FFFFFF; }body.visuals_scroll *::-webkit-scrollbar-button:increment:end {height: 10px;display: block;background-color: #FFFFFF; }body.visuals_scroll *::-webkit-scrollbar {width: 10px;background-color: #ffffff; }body.visuals_scroll *::-webkit-scrollbar-thumb {min-height: 20px;border: 2px solid #ffffff;border-radius: 6px;background-color: #9F9F9F; }body.visuals_scroll *::-webkit-scrollbar-thumb:hover {background-color: #8C8C8C; }#__interaction_id__ .tooltip {background: __tooltip_background_color__;border: 1px solid __tooltip_border_color__;color: __tooltip_text_color__;position: absolute;padding: 2px 8px;min-height: 24px;z-index: 50;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;border-radius: 4px;font-size: 13px;pointer-events: none;cursor: default;word-break: break-word;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1); }#__interaction_id__ .video-player {position: relative;overflow: hidden;max-width: 100%; }  #__interaction_id__ .video-player .media-controls-panel {height: 36px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 22px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_hidden {bottom: -36px; }    #__interaction_id__ .video-player .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized {padding: 0 22px 0 11px; }      #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }        #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 8px);width: calc(100% - 8px);margin-left: 8px; }        #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .video-player .media-controls-panel .button-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .video-player .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .video-player .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .video-player .media-controls-panel .timeline-control {height: 36px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 36px - 8px);width: calc(100% - 2 * 36px - 8px); }      #__interaction_id__ .video-player .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 8px - 36px);width: calc(100% - 4 * 8px - 36px);margin: 0 8px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 24px;height: 36px;position: absolute;margin-left: -12px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .progress-block__progress-slider {width: 12px;height: 12px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 12px / 2);top: calc(50% - 12px / 2);left: -webkit-calc(50% - 12px / 2);left: calc(50% - 12px / 2);border-radius: 50%; }      #__interaction_id__ .video-player .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 8px; }        #__interaction_id__ .video-player .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .video-player .media-controls-panel .fullscreen-control {height: 36px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 8px; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon {width: 25px;height: 19px;top: -webkit-calc((100% - 19px) / 2);top: calc((100% - 19px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .video-player .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 36px - 45px);width: calc(100% - 2 * 36px - 45px); }    #__interaction_id__ .video-player .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 36px - 45px);width: calc(100% - 36px - 45px); }    #__interaction_id__ .video-player .media-controls-panel .sound-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 8px; }      #__interaction_id__ .video-player .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .video-player .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }  #__interaction_id__ .video-player .media-controls-panel {border-radius: 0; }  #__interaction_id__ .video-player__start-button {text-align: center;display: inline-block;height: 56px;width: 56px;position: absolute;top: -webkit-calc(50% - 56px / 2);top: calc(50% - 56px / 2);left: -webkit-calc(50% - 56px / 2);left: calc(50% - 56px / 2);cursor: pointer;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 1;-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player__start-button:hover {opacity: 0.8; }  #__interaction_id__ .video-player__replay-button {text-align: center;display: inline-block;height: 56px;width: 56px;position: absolute;top: -webkit-calc(50% - 56px / 2);top: calc(50% - 56px / 2);left: -webkit-calc(50% - 56px / 2);left: calc(50% - 56px / 2);cursor: pointer;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 1;-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .video-player__replay-button:hover {opacity: 0.8; }  #__interaction_id__ .video-player .video-player-preloader {width: 50px;height: 50px;position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;border-radius: 10px;background-color: rgba(0, 0, 0, 0.5); }    #__interaction_id__ .video-player .video-player-preloader__image {width: 50px;height: 50px;-webkit-transform-origin: center;-ms-transform-origin: center;transform-origin: center; }  #__interaction_id__ .video-player video {width: 100%;height: 100%; }#__interaction_id__ .audio-player {position: relative;height: 36px;width: 100%; }  #__interaction_id__ .audio-player .media-controls-panel {height: 36px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 22px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_hidden {bottom: -36px; }    #__interaction_id__ .audio-player .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized {padding: 0 22px 0 11px; }      #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }        #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 8px);width: calc(100% - 8px);margin-left: 8px; }        #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .audio-player .media-controls-panel .button-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .audio-player .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .audio-player .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .audio-player .media-controls-panel .timeline-control {height: 36px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 36px - 8px);width: calc(100% - 2 * 36px - 8px); }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 8px - 36px);width: calc(100% - 4 * 8px - 36px);margin: 0 8px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 24px;height: 36px;position: absolute;margin-left: -12px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .progress-block__progress-slider {width: 12px;height: 12px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 12px / 2);top: calc(50% - 12px / 2);left: -webkit-calc(50% - 12px / 2);left: calc(50% - 12px / 2);border-radius: 50%; }      #__interaction_id__ .audio-player .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 8px; }        #__interaction_id__ .audio-player .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control {height: 36px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 8px; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon {width: 25px;height: 19px;top: -webkit-calc((100% - 19px) / 2);top: calc((100% - 19px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .audio-player .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 36px);width: calc(100% - 36px); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 36px - 45px);width: calc(100% - 2 * 36px - 45px); }    #__interaction_id__ .audio-player .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 36px - 45px);width: calc(100% - 36px - 45px); }    #__interaction_id__ .audio-player .media-controls-panel .sound-control {height: 36px;width: 36px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 8px; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container {width: 18px;height: 18px;position: relative;top: -webkit-calc((100% - 18px) / 2);top: calc((100% - 18px) / 2);left: -webkit-calc((100% - 18px) / 2);left: calc((100% - 18px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .audio-player .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }#__interaction_id__ .audio-player-mini {position: relative;height: 32px;width: 100%; }  #__interaction_id__ .audio-player-mini .media-controls-panel {height: 32px;width: 100%;background-color: __media_player_background_color__;position: absolute;padding: 0 18px;bottom: 0;-webkit-transition: bottom 200ms ease-in-out;transition: bottom 200ms ease-in-out;clear: both;min-width: 80px;border-radius: 2px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_translate-z {-webkit-transform: translateZ(0);transform: translateZ(0); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_hidden {bottom: -32px; }    #__interaction_id__ .audio-player-mini .media-controls-panel[disabled] {opacity: 0.7; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized {padding: 0 18px 0 9px; }      #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control {width: -webkit-calc(100% - 32px);width: calc(100% - 32px); }        #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control .progress-block {width: -webkit-calc(100% - 7.2px);width: calc(100% - 7.2px);margin-left: 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .timeline-control .time-block {display: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_minimized .sound-control {display: none; }    #__interaction_id__ .audio-player-mini .media-controls-panel .button-control {height: 32px;width: 32px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container {width: 16px;height: 16px;position: relative;top: -webkit-calc((100% - 16px) / 2);top: calc((100% - 16px) / 2);left: -webkit-calc((100% - 16px) / 2);left: calc((100% - 16px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container__play-icon {height: 100%; }      #__interaction_id__ .audio-player-mini .media-controls-panel .button-control .icon-container__pause-icon {height: 100%; }    #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control {height: 32px;display: inline-block;float: left;width: -webkit-calc(100% - 2 * 32px - 7.2px);width: calc(100% - 2 * 32px - 7.2px); }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control[disabled] {pointer-events: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block {cursor: pointer;height: 100%;display: inline-block;position: relative;float: left;width: -webkit-calc(100% - 4 * 7.2px - 36px);width: calc(100% - 4 * 7.2px - 36px);margin: 0 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block[disabled] {opacity: 0.34; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__timeline {width: 100%;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_controls_color__;opacity: 0.3;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2);cursor: pointer; }          #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__timeline[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress {width: 0;height: 4px;border-radius: 2px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 4px / 2);top: calc(50% - 4px / 2); }          #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress[disabled] {pointer-events: none; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress-slider-container {width: 18px;height: 32px;position: absolute;margin-left: -9px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .progress-block__progress-slider {width: 9px;height: 9px;position: absolute;background-color: __media_player_playing_band_color__;top: -webkit-calc(50% - 9px / 2);top: calc(50% - 9px / 2);left: -webkit-calc(50% - 9px / 2);left: calc(50% - 9px / 2);border-radius: 50%; }      #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .time-block {height: 100%;display: inline-block;position: relative;float: left;cursor: default;width: 36px;overflow: visible;margin: 0 7.2px; }        #__interaction_id__ .audio-player-mini .media-controls-panel .timeline-control .time-block__time {height: 20px;position: relative;top: -webkit-calc((100% - 20px) / 2);top: calc((100% - 20px) / 2);-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;color: __media_player_controls_color__;font-family: PFnsb, 'Segoe UI Semibold', 'Segoe UI', sans-serif, arial;font-size: 14px;line-height: 20px;text-align: center;opacity: 0.9; }    #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control {height: 32px;display: inline-block;float: right;cursor: pointer;position: relative;margin-left: 7.2px; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control[disabled] {cursor: default; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control.fullscreen-control_minimized {display: none; }      #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon {width: 23px;height: 17px;top: -webkit-calc((100% - 17px) / 2);top: calc((100% - 17px) / 2);position: relative;-webkit-transition: opacity 150ms ease-in-out;transition: opacity 150ms ease-in-out;opacity: 0.72; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon #icon {stroke: __media_player_controls_color__; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon[disabled] {pointer-events: none;opacity: 0.34; }        #__interaction_id__ .audio-player-mini .media-controls-panel .fullscreen-control .icon.icon_active {opacity: 1; }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_without-sound .timeline-control {width: -webkit-calc(100% - 32px);width: calc(100% - 32px); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 2 * 32px - 43px);width: calc(100% - 2 * 32px - 43px); }    #__interaction_id__ .audio-player-mini .media-controls-panel.media-controls-panel_without-sound.media-controls-panel_with-fullscreen-button .timeline-control {width: -webkit-calc(100% - 32px - 43px);width: calc(100% - 32px - 43px); }    #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control {height: 32px;width: 32px;display: inline-block;float: left;cursor: pointer;opacity: 0.72;position: relative;float: right;cursor: pointer;margin-right: 7.2px; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control[disabled] {cursor: default;pointer-events: none;opacity: 0.34; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container {width: 16px;height: 16px;position: relative;top: -webkit-calc((100% - 16px) / 2);top: calc((100% - 16px) / 2);left: -webkit-calc((100% - 16px) / 2);left: calc((100% - 16px) / 2);fill: __media_player_controls_color__; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container__sound-on {left: 1px;height: 100%;float: left;position: relative; }      #__interaction_id__ .audio-player-mini .media-controls-panel .sound-control .icon-container__sound-off {left: 1px;height: 100%;float: left;position: relative; }#__interaction_id__ .rich-text {z-index: 0;position: relative; }  #__interaction_id__ .rich-text > h1 a,  #__interaction_id__ .rich-text > h1 a span,  #__interaction_id__ .rich-text > h1 a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > h2 a,  #__interaction_id__ .rich-text > h2 a span,  #__interaction_id__ .rich-text > h2 a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > p,  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {word-wrap: break-word; }    #__interaction_id__ .rich-text > p a,    #__interaction_id__ .rich-text > p a span,    #__interaction_id__ .rich-text > p a sup,    #__interaction_id__ .rich-text > ul li a,    #__interaction_id__ .rich-text > ul li a span,    #__interaction_id__ .rich-text > ul li a sup,    #__interaction_id__ .rich-text > ol li a,    #__interaction_id__ .rich-text > ol li a span,    #__interaction_id__ .rich-text > ol li a sup {text-decoration: none;cursor: pointer;word-wrap: break-word; }  #__interaction_id__ .rich-text > div {max-width: 100%;clear: both;word-wrap: break-word;position: relative;z-index: 1;line-height: 0; }  #__interaction_id__ .rich-text > p,  #__interaction_id__ .rich-text > h1,  #__interaction_id__ .rich-text > li {font-feature-settings: 'liga' 0; }  #__interaction_id__ .rich-text > * {vertical-align: baseline; }  #__interaction_id__ .rich-text > ol li,  #__interaction_id__ .rich-text > ul li {position: relative;left: 1em;padding-right: 1em; }  #__interaction_id__ .rich-text > ol {margin-left: 1em;list-style: outside decimal; }    #__interaction_id__ .rich-text > ol li {padding-left: 0.6em; }  #__interaction_id__ .rich-text > ul {margin-left: 1.4em;list-style: outside disc; }    #__interaction_id__ .rich-text > ul li {padding-left: 0.2em; }  #__interaction_id__ .rich-text > sup {vertical-align: super; }  #__interaction_id__ .rich-text > sub {vertical-align: sub; }  #__interaction_id__ .rich-text .aspect-ratio-fixed-block {position: relative;display: inline-block;max-width: 100%; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block.aspect-ratio-fixed-block_zoomable {cursor: pointer;cursor: -webkit-zoom-in;cursor: zoom-in; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__inner-wrapper {position: relative;height: 0; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__content {position: absolute;top: 0;left: 0;width: 100%;height: 100%; }    #__interaction_id__ .rich-text .aspect-ratio-fixed-block__zoom {position: absolute;right: 4px;bottom: 4px;width: 24px;height: 24px;opacity: 0.86;cursor: pointer;-webkit-transition: none;transition: none;pointer-events: none; }      #__interaction_id__ .rich-text .aspect-ratio-fixed-block__zoom svg {width: 100%;height: 100%; }  #__interaction_id__ .rich-text .inline-item {display: inline-block;text-indent: 0;font-size: 0;margin-left: 2px;margin-right: 1px;position: relative; }  #__interaction_id__ .rich-text > h1 > span {color: __header_font_color__; }  #__interaction_id__ .rich-text > h1 svg [fill='#000000'] {fill: __header_font_color__ !important; }  #__interaction_id__ .rich-text > h1 svg [stroke='#000000'] {stroke: __header_font_color__ !important; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] > span,  #__interaction_id__ .rich-text > h1 a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > h1 a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h1 span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > h1 a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h2 > span {color: __subheader_font_color__; }  #__interaction_id__ .rich-text > h2 svg [fill='#000000'] {fill: __subheader_font_color__ !important; }  #__interaction_id__ .rich-text > h2 svg [stroke='#000000'] {stroke: __subheader_font_color__ !important; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] > span,  #__interaction_id__ .rich-text > h2 a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > h2 a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > h2 span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > h2 a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > p > span,  #__interaction_id__ .rich-text > ul li > span,  #__interaction_id__ .rich-text > ol li > span {color: __text_font_color__; }  #__interaction_id__ .rich-text > p svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li svg [fill='#000000'] {fill: __text_font_color__ !important; }  #__interaction_id__ .rich-text > p svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li svg [stroke='#000000'] {stroke: __text_font_color__ !important; }  #__interaction_id__ .rich-text > p span[data-hyperlink] > span,  #__interaction_id__ .rich-text > p a > span,  #__interaction_id__ .rich-text > ul li span[data-hyperlink] > span,  #__interaction_id__ .rich-text > ul li a > span,  #__interaction_id__ .rich-text > ol li span[data-hyperlink] > span,  #__interaction_id__ .rich-text > ol li a > span {color: __hyperlink_font_color__; }  #__interaction_id__ .rich-text > p span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > p a svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > ul li a svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li span[data-hyperlink] svg [fill='#000000'],  #__interaction_id__ .rich-text > ol li a svg [fill='#000000'] {fill: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > p span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > p a svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > ul li a svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li span[data-hyperlink] svg [stroke='#000000'],  #__interaction_id__ .rich-text > ol li a svg [stroke='#000000'] {stroke: __hyperlink_font_color__ !important; }  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {color: __text_font_color__; }  #__interaction_id__ .rich-text > ul li,  #__interaction_id__ .rich-text > ol li {padding-top: 3px;padding-bottom: 3px; }    #__interaction_id__ .rich-text > ul li:first-child,    #__interaction_id__ .rich-text > ol li:first-child {padding-top: 1px; }    #__interaction_id__ .rich-text > ul li:last-child,    #__interaction_id__ .rich-text > ol li:last-child {padding-bottom: 1px; }  #__interaction_id__ .rich-text::after {content: '';clear: both;width: 100%;height: 0;display: block; }#__interaction_id__ .interactivity * {-webkit-user-select: none !important;-moz-user-select: none !important;-ms-user-select: none !important;user-select: none !important;-webkit-user-drag: none; }#__interaction_id__ .interactivity-content-overlay {position: absolute;will-change: transform;z-index: 1;top: 0;left: 0;right: 0;bottom: 0; }#__interaction_id__ .zoom-top-layer {position: absolute;will-change: transform;z-index: 1;top: 0;left: 0;right: 0;bottom: 0; }#__interaction_id__ .interactivity-content-overlay {display: none; }.trial_banner {position: absolute;right: 0;z-index: 100; }body,html {height: 100%;width: 100%; }body {background-color: __page_background_color__;overflow: hidden; }#content {width: 100%;height: 100%;overflow: visible; }#__interaction_id__.layout#__interaction_id__.layout_fillpanels {border-radius: 0 !important; }  #__interaction_id__.layout#__interaction_id__.layout_fillpanels .interactivity {position: relative;overflow: hidden;width: auto;height: auto; }#__interaction_id__.layout#__interaction_id__.layout_filltype_player {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .visualizer-wrapper {border-radius: 4px;background-color: __interactivity_background_color__; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .timeline-visualizer {width: -webkit-calc(100% - 20px);width: calc(100% - 20px);left: 10px;height: 70px; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .timeline-period-info {height: 15px; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .visualizer-scroll-shadow {top: 0;height: 100%; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .timeline-content-view .items-container {padding-top: 5px; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .cyclic-process-visualizer-item__delimiter {display: none; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .process-visualizer-item__delimiter {display: none; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .guided-image-content-view .side-by-side-view__description {border: 0; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .labeled-graphic-content-view .side-by-side-view__description {border: 0; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .hotspot-image-content-view .side-by-side-view__description {border: 0; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .interactivity-content {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .interactivity-content-container {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_player .interactivity::after {border-color: transparent; }#__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player {background: transparent !important; }  #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player .tablet-content-view {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }    #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player .tablet-content-view .interactivity-content {background: transparent; }    #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_player .tablet-content-view .interactivity-content-container {background: transparent; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .visualizer-wrapper {border-radius: 4px;background-color: __interactivity_background_color__; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .timeline-visualizer {width: -webkit-calc(100% - 20px);width: calc(100% - 20px);left: 10px;height: 70px; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .timeline-period-info {height: 15px; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .visualizer-scroll-shadow {top: 0;height: 100%; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .timeline-content-view .items-container {padding-top: 5px; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .cyclic-process-visualizer-item__delimiter {display: none; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .process-visualizer-item__delimiter {display: none; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .guided-image-content-view .side-by-side-view__description {border: 0; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .labeled-graphic-content-view .side-by-side-view__description {border: 0; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .hotspot-image-content-view .side-by-side-view__description {border: 0; }#__interaction_id__.layout#__interaction_id__.layout_filltype_slide .interactivity {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_slide .interactivity .interactivity-content {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_filltype_slide .interactivity .interactivity-content-container {background: transparent; }#__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .interactivity {background: transparent !important; }#__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .tablet-content-view {background: __slide_background__;background-repeat: no-repeat;background-size: 100% 100%; }  #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .tablet-content-view .interactivity-content {background: transparent; }  #__interaction_id__.layout#__interaction_id__.layout_tablet#__interaction_id__.layout_playertype_standalone#__interaction_id__.layout_filltype_slide .tablet-content-view .interactivity-content-container {background: transparent; }#__interaction_id__ {position: relative; }  #__interaction_id__ .container-top-shadow {background: __verticalGradient(__description_background_color__, __transparent_description_background_color__);background: -webkit-linear-gradient(top, __description_background_color__, __transparent_description_background_color__);background: linear-gradient(to bottom, __description_background_color__, __transparent_description_background_color__);position: absolute;bottom: 0;left: 0;right: 0;height: 60px;pointer-events: none; }  #__interaction_id__ .container-bottom-shadow {background: __verticalGradient(__transparent_description_background_color__, __description_background_color__);background: -webkit-linear-gradient(top, __transparent_description_background_color__, __description_background_color__);background: linear-gradient(to bottom, __transparent_description_background_color__, __description_background_color__);position: absolute;bottom: 0;left: 0;right: 0;height: 60px;pointer-events: none; }  #__interaction_id__ .mobile-vertical-scrollbar {position: absolute;width: 10px;top: 6px;bottom: 6px;right: 0;opacity: 0; }    #__interaction_id__ .mobile-vertical-scrollbar__thumb {position: absolute;width: 3px !important;right: 3px;padding: 1px;border-radius: 5px;background-color: rgba(0, 0, 0, 0.5); }  #__interaction_id__ .scrollable-container {position: relative;width: 100%;height: 100%; }    #__interaction_id__ .scrollable-container__content-container {position: relative;width: 100%; }  #__interaction_id__ .fullscreen-video-layer {display: none;background: #000000;will-change: transform; }    #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player {overflow: hidden;position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 1;display: block; }      #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player {top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;width: 100% !important;height: 100% !important; }        #__interaction_id__ .fullscreen-video-layer.fullscreen-video-layer_with-video-player .video-player__video-element {width: 100% !important;height: 100% !important;-webkit-transform: none !important;-ms-transform: none !important;transform: none !important; }  #__interaction_id__ .zoom-lightbox-layer {cursor: pointer;cursor: -webkit-zoom-out;cursor: zoom-out;position: absolute;z-index: 1;top: 0;left: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);display: none;overflow: hidden; }    #__interaction_id__ .zoom-lightbox-layer.zoom-lightbox-layer_miniskin {cursor: auto; }    #__interaction_id__ .zoom-lightbox-layer.zoom-lightbox-layer_visible {display: block; }    #__interaction_id__ .zoom-lightbox-layer__background {width: 100%;height: 100%;background: rgba(0, 0, 0, 0.7);-webkit-transform: translateZ(0);transform: translateZ(0); }      #__interaction_id__ .zoom-lightbox-layer__background.zoom-lightbox-layer__background_miniskin {background: #282828; }  #__interaction_id__ .zoom-lightbox-control-panel {position: absolute;top: 0;display: none;background: #404040; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_miniskin {display: block; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_horizontal {width: 100%;height: 46px;left: 0; }    #__interaction_id__ .zoom-lightbox-control-panel.zoom-lightbox-control-panel_vertical {width: 56px;height: 100%;right: 0; }  #__interaction_id__ .zoom-lightbox {position: absolute; }    #__interaction_id__ .zoom-lightbox__substrate {position: absolute;z-index: 0;left: 0;top: 0;width: 100%;height: 100%;background: #FFFFFF; }    #__interaction_id__ .zoom-lightbox__preview {position: absolute;z-index: 1;left: 0;top: 0;width: 100%;height: 100%;box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25); }  #__interaction_id__ .close-lightbox-icon-wrapper {position: absolute;pointer-events: all; }    #__interaction_id__ .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_horizontal {top: 11px;right: 18px;width: 24px;height: 24px;padding: 3px; }    #__interaction_id__ .close-lightbox-icon-wrapper.close-lightbox-icon-wrapper_vertical {top: 7px;right: 12px;padding: 5px;width: 29px;height: 29px; }    #__interaction_id__ .close-lightbox-icon-wrapper svg {width: 100%;height: 100%; }  #__interaction_id__ text.cambria-embed {font-family: __cambria-embed__ !important; }  #__interaction_id__ text.eq-editor-main-i {font-family: __eq-editor-main-i__; }  #__interaction_id__ text.eq-editor-math-i {font-family: __eq-editor-math-i__; }  #__interaction_id__ text.eq-editor-size2 {font-family: __eq-editor-size2__; }  #__interaction_id__ text.eq-editor-double-struck {font-family: __eq-editor-double-struck__; }  #__interaction_id__ text.eq-editor-fraktur {font-family: __eq-editor-fraktur__; }  #__interaction_id__ text.eq-editor-script {font-family: __eq-editor-script__; }  #__interaction_id__ .simple-item-content {width: 100%;top: 0; }    #__interaction_id__ .simple-item-content.simple-item-content_optimize-animation {will-change: transform; }    #__interaction_id__ .simple-item-content__title {word-wrap: break-word;color: __title_font_color__; }    #__interaction_id__ .simple-item-content.simple-item-content_leap {padding: 0; }    #__interaction_id__ .simple-item-content.simple-item-content_popup {padding: 30px 0 0; }  #__interaction_id__ .secondary-item-overlay {position: relative;width: 100%;height: 100%;background: rgba(27, 27, 27, 0.7);padding-left: 50px;padding-right: 50px; }    #__interaction_id__ .secondary-item-overlay__close-container {position: absolute;top: 13px;right: 13px;width: 34px;height: 34px;cursor: pointer; }    #__interaction_id__ .secondary-item-overlay__close-region {opacity: 0.6;background-color: #000000;border-radius: 50%;padding: 11px;-webkit-transition: opacity 0.2s ease;transition: opacity 0.2s ease;will-change: opacity;width: 100%;height: 100%; }      #__interaction_id__ .secondary-item-overlay__close-region.secondary-item-overlay__close-region_active {opacity: 0.8; }    #__interaction_id__ .secondary-item-overlay__close-icon {position: absolute;width: 12px;height: 12px;top: 11px;left: 11px;right: 11px;bottom: 11px;opacity: 0.72;-webkit-transition: opacity 0.2s ease;transition: opacity 0.2s ease;will-change: opacity; }      #__interaction_id__ .secondary-item-overlay__close-icon svg {vertical-align: top;fill: #FFFFFF; }      #__interaction_id__ .secondary-item-overlay__close-icon.secondary-item-overlay__close-icon_active {opacity: 1; }  #__interaction_id__.lte_ie10 .secondary-item-overlay {z-index: 1; }  #__interaction_id__ .secondary-item-popup {position: relative;border-radius: 5px;background-color: __description_background_color__;box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05);width: 100%;max-width: 598px;padding: 10px 40px 10px 40px; }    #__interaction_id__ .secondary-item-popup__content-container {width: 100%;height: 100%;overflow: hidden;padding-right: 30px;-webkit-overflow-scrolling: touch; }  #__interaction_id__ .interactivity-header {padding: 0 15px;height: 36px;background: __title_background__; }    #__interaction_id__ .interactivity-header__title {font-family: __title_font_family__, 'Segoe UI', sans-serif, arial;font-weight: __title_font_weight__;font-style: __title_font_italic__;font-size: 16px;line-height: 35px;color: __title_color__;overflow: hidden;text-overflow: ellipsis;white-space: nowrap; }  #__interaction_id__ .interactivity {position: absolute;top: 0;left: 12px;right: 12px;bottom: 56px;overflow: hidden; }    #__interaction_id__ .interactivity.interactivity_without-controls {bottom: 0; }  #__interaction_id__ .interactivity-content {position: relative;background-color: __interactivity_background_color__;height: 100%; }    #__interaction_id__ .interactivity-content__description {position: relative;overflow-x: hidden; }    #__interaction_id__ .interactivity-content .item-list {position: relative;z-index: 1; }  #__interaction_id__ .interactivity-footer {position: absolute;bottom: 0;left: 0;right: 0;height: 56px;background: __player_background_color__;border-top: 1px solid __interactivity_border_color__; }  #__interaction_id__ .interactivity-navigation-panel {position: relative;margin: 0 12px; }  #__interaction_id__ .interactivity-navigation-panel {height: 56px;overflow: hidden; }    #__interaction_id__ .interactivity-navigation-panel__next {float: right;font-size: 40px;cursor: pointer; }    #__interaction_id__ .interactivity-navigation-panel__prev {float: right;font-size: 40px;cursor: pointer; }  #__interaction_id__ .page-controls {position: absolute;right: 0;top: 10px;font-family: PFnb, 'Segoe UI', sans-serif, arial; }  #__interaction_id__ .page-control {float: left;position: relative;margin-left: 8px;height: 36px;max-width: 160px;min-width: 80px;background-color: __button_background_color__;color: __button_text_color__;border-radius: 4px;cursor: pointer; }    #__interaction_id__ .page-control.page-control_with-animation {-webkit-transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s; }    #__interaction_id__ .page-control.page-control_focused, #__interaction_id__ .page-control.page-control_active {background-color: __hovered_button_background_color__;color: __hovered_button_text_color__; }      #__interaction_id__ .page-control.page-control_focused .navigation-arrow svg path, #__interaction_id__ .page-control.page-control_active .navigation-arrow svg path {fill: __hovered_button_text_color__; }    #__interaction_id__ .page-control.page-control_disable {cursor: default;pointer-events: none;color: __button_text_color__ !important;background-color: __button_background_color__ !important; }      #__interaction_id__ .page-control.page-control_disable .navigation-arrow svg path {fill: __button_text_color__; }    #__interaction_id__ .page-control__focus-container {margin: 4px;outline: 1px dotted transparent;border: 0;padding: 0;background-color: transparent;color: inherit;font-family: inherit;cursor: pointer;text-align: left;max-width: 152px;min-width: 72px; }      #__interaction_id__ .page-control__focus-container:focus {outline: 1px dotted __hovered_button_text_color__; }      #__interaction_id__ .page-control__focus-container.page-control__focus-container_disable:focus {outline: 1px dotted transparent; }    #__interaction_id__ .page-control .page-control-button {overflow: hidden;border: 0;height: 28px;position: relative;font-size: 15px;line-height: 13px;font-weight: bold;white-space: nowrap;padding: 9px 24px 13px;text-overflow: ellipsis;-webkit-transform: translateZ(0);transform: translateZ(0); }  #__interaction_id__ .navigation-arrow {position: absolute;width: 9px;z-index: 1;height: 15px; }    #__interaction_id__ .navigation-arrow svg path {fill: __button_text_color__; }    #__interaction_id__ .navigation-arrow.navigation-arrow_with-animation svg path {-webkit-transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, background 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, fill 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s; }  #__interaction_id__.ipad .page-control {max-width: 150px;min-width: 90px; }  #__interaction_id__.ipad .page-control-button {max-width: 142px;min-width: 82px; }  #__interaction_id__ .page-controls__prev .navigation-arrow {left: 17px;top: 11px; }  #__interaction_id__ .page-controls__prev .page-control-button {padding: 8px 16px 7px 29px; }  #__interaction_id__ .page-controls__next .navigation-arrow {right: 15px;top: 11px; }  #__interaction_id__ .page-controls__next .page-control-button {padding: 8px 29px 7px 16px; }  #__interaction_id__.tablet .page-control-button {padding-top: 8px; }  #__interaction_id__ .tablet-content-view {position: relative; }  #__interaction_id__ audio:not([controls]) {display: none;height: 0; }  #__interaction_id__ .description.description_mobile {padding-right: 10px; }    #__interaction_id__ .description.description_mobile .description__content {width: 100%;height: 100%;overflow: auto;padding-right: 20px; }#__interaction_id__ .side-by-side-view {position: relative;overflow: hidden;width: 100%;height: 100%; }  #__interaction_id__ .side-by-side-view__description {position: absolute;overflow: hidden;padding-top: 3px;padding-bottom: 14px;background: __description_background_color__; }  #__interaction_id__ .side-by-side-view__visualizer {position: absolute; }  #__interaction_id__ .side-by-side-view.side-by-side-view_bottom .side-by-side-view__description.side-by-side-view__description_border {border-bottom: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_left .side-by-side-view__description.side-by-side-view__description_border {border-left: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_top .side-by-side-view__description.side-by-side-view__description_border {border-top: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_right .side-by-side-view__description.side-by-side-view__description_border {border-right: 1px solid __description_border_color__; }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .side-by-side-view__description {background: __description_background_color__;border-radius: 4px;border: 1px solid __description_border_color__;box-shadow: 0 4px 11px 1px rgba(0, 0, 0, 0.05); }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .side-by-side-description {width: 100%; }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .side-by-side-description-shadow {bottom: 5px; }  #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .simple-item-content {padding: 20px 30px 14px; }    #__interaction_id__ .side-by-side-view.side-by-side-view_fluid-description .simple-item-content__content {margin-top: 6px; }  #__interaction_id__ .side-by-side-view .container-shadow {bottom: 29px; }#__interaction_id__ .side-by-side-description {position: relative;height: 100%;-webkit-overflow-scrolling: touch; }  #__interaction_id__ .side-by-side-description__content {min-height: 100%;overflow: hidden; }#__interaction_id__ .visualizer-scroll-shadow {background: __horizontalGradient(__transparent_interactivity_background_color__, __interactivity_background_color__);background: -webkit-linear-gradient(left, __transparent_interactivity_background_color__, __interactivity_background_color__);background: linear-gradient(to right, __transparent_interactivity_background_color__, __interactivity_background_color__);position: absolute;top: -4px;height: 52px;width: 30px;pointer-events: none; }  #__interaction_id__ .visualizer-scroll-shadow.visualizer-scroll-shadow_right {right: -1px; }  #__interaction_id__ .visualizer-scroll-shadow.visualizer-scroll-shadow_ios9 {background: transparent; }#__interaction_id__ .visualizer {display: inline-block; }  #__interaction_id__ .visualizer.visualizer_horizontal {width: 100%; }  #__interaction_id__ .visualizer.visualizer_vertical {height: 100%; }#__interaction_id__ .items-container {display: inline-block;position: relative; }  #__interaction_id__ .items-container.items-container_horizontal {white-space: nowrap;padding-left: 18px;padding-right: 18px; }  #__interaction_id__ .items-container.items-container_vertical {padding-top: 18px;padding-bottom: 18px; }#__interaction_id__:not(.chrome) .items-container {will-change: transform; }#__interaction_id__ .steps-visualizer-item {position: relative;vertical-align: top;z-index: 0;cursor: pointer;border-radius: 44px;text-align: center;box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.16); }  #__interaction_id__ .steps-visualizer-item__item-border {position: absolute;top: -1px;left: -1px;right: -1px;bottom: -1px;border: 2px solid __step_border_color__;border-radius: 44px;z-index: 0; }  #__interaction_id__ .steps-visualizer-item__index-container {display: inline-block;vertical-align: middle;width: 100%;-webkit-transition: background 0.25s ease, color 0.25s ease;transition: background 0.25s ease, color 0.25s ease;border-radius: 44px;background: __step_background_color__;z-index: 0;position: relative; }  #__interaction_id__ .steps-visualizer-item__index {padding: 0 3px;margin: 5px;font-family: __title_font_family__;font-weight: __title_font_weight__;font-style: __title_font_italic__;min-width: 34px;height: 34px;border-radius: 44px;line-height: 34px;text-align: center;font-size: 16px;color: __step_text_color__;-webkit-transition: background 0.25s ease, color 0.25s ease;transition: background 0.25s ease, color 0.25s ease;position: relative;z-index: 1; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_horizontal {display: inline-block; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_vertical {display: block; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_active .steps-visualizer-item__item-border, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_active.steps-visualizer-item_passed .steps-visualizer-item__item-border {border: 3px solid __step_border_color__;-webkit-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05); }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select .steps-visualizer-item__item-border, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select.steps-visualizer-item_passed .steps-visualizer-item__item-border {-webkit-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05); }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select .steps-visualizer-item__index, #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_select.steps-visualizer-item_passed .steps-visualizer-item__index {color: __selected_step_text_color__;background: __step_border_color__; }  #__interaction_id__ .steps-visualizer-item.steps-visualizer-item_passed .steps-visualizer-item__item-border {border: 3px solid __step_border_color__;padding: 0; }#__interaction_id__:not(.android) .steps-visualizer-item__index {vertical-align: inherit; }#__interaction_id__ .steps-progress-line {vertical-align: top; }  #__interaction_id__ .steps-progress-line svg {vertical-align: top; }    #__interaction_id__ .steps-progress-line svg line {stroke: __step_progress_point_color__; }  #__interaction_id__ .steps-progress-line.steps-progress-line_vertical {display: block;width: 2px;margin-left: 21px; }  #__interaction_id__ .steps-progress-line.steps-progress-line_vertical.steps-progress-line_passed {width: 3px;background: __step_border_color__; }  #__interaction_id__ .steps-progress-line.steps-progress-line_horizontal {display: inline-block;position: relative;height: 2px;margin-top: 21px; }  #__interaction_id__ .steps-progress-line.steps-progress-line_horizontal.steps-progress-line_passed {height: 3px;background: __step_border_color__; }#__interaction_id__ .visualizer-tooltip-container {position: relative;width: 100%;height: 100%; }#__interaction_id__.android .steps-visualizer-item__index {line-height: 35px; }#__interaction_id__.firefox .steps-visualizer-item__index {line-height: 33px; }#__interaction_id__.lte_ie10 .steps-visualizer-item__index {line-height: 33px; }#__interaction_id__ .visualizer {text-align: center; }#__interaction_id__ .simple-item-content {padding: 32px 43px 25px 28px; }  #__interaction_id__ .simple-item-content__title {word-break: break-word; }#__interaction_id__ .tooltip {z-index: 1; }  #__interaction_id__ .tooltip__pointer {position: absolute;width: 0;height: 0;top: -14px;left: -4.5px;border-style: solid;border-width: 12px 4.5px 0 4.5px;border-color: __tooltip_background_color__ transparent transparent transparent;box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1); }  #__interaction_id__ .tooltip__pointer-border {position: absolute;width: 0;height: 0;bottom: 28px;-webkit-transform: translate(-50%) rotate(180deg);-ms-transform: translate(-50%) rotate(180deg);transform: translate(-50%) rotate(180deg);margin-left: 3px;border-style: solid;border-width: 14px 5.5px 0 5.5px;border-color: __tooltip_border_color__ transparent transparent transparent; }  #__interaction_id__ .tooltip.tooltip_top {bottom: 55px; }    #__interaction_id__ .tooltip.tooltip_top .tooltip__pointer-border {-webkit-transform: translate(-50%);-ms-transform: translate(-50%);transform: translate(-50%);bottom: -14px; }  #__interaction_id__ .tooltip.tooltip_bottom {top: 52px; }    #__interaction_id__ .tooltip.tooltip_bottom .tooltip__pointer-border {-webkit-transform: translate(-50%) rotate(180deg);-ms-transform: translate(-50%) rotate(180deg);transform: translate(-50%) rotate(180deg);top: -14px; }#__interaction_id__ .side-by-side-view__visualizer.side-by-side-view__visualizer_vertical {width: 70%; }#__interaction_id__ .side-by-side-view__visualizer.side-by-side-view__visualizer_horizontal {text-align: center; }",
        d;
        for (d in a)
            if (A(a).hasOwnProperty(d)) {
                var f = "__" + d.replace(/\./g, "_") + "__";
                c = c.replace(new RegExp(f, "g"), a[d])
            }
        for (var g in b)
            A(b).hasOwnProperty(g) && (c = c.replace(new RegExp(g, "g"), b[g]));
        c = c.replace(/__verticalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Lc);
        c = c.replace(/__horizontalGradient\(([#0-9a-z]+), ([#0-9a-z]+)\)/gi, this.Kc);
        return id(c)
    };
    nd.prototype.Lc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="g436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="100%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#g436)" />\n</svg>') + ")"
    };
    nd.prototype.Kc = function (a, b, c) {
        return "url(data:image/svg+xml;base64," + kc('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">\n<linearGradient id="gh436" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">\n<stop stop-color="' + b + '" offset="0"/><stop stop-color="' + c + '" offset="1"/>\n</linearGradient>\n<rect x="0" y="0" width="1" height="1" fill="url(#gh436)" />\n</svg>') + ")"
    };
    var od = !0;
    function pd(a, b) {
        var c = Object.assign({}, a),
        d = {},
        f;
        for (f in c)
            "object" == typeof c[f] && (c[f] = pd(c[f], f), a = c[f], a._d && (d[a._d] = a));
        c.toString = function () {
            return od ? c._ : b
        };
        c.ky = function (a) {
            return d[a]
        };
        return c
    }
    function G(a) {
        var b = {},
        c;
        for (c in a)
            a.hasOwnProperty(c) && (b[c] = pd(a[c], c));
        return b
    };
    var qd = {
        id: {
            _: "i"
        },
        description: {
            _: "n"
        },
        scheme: {
            _: "s",
            qm: {
                _: "i",
                background: {
                    _: "bg"
                },
                border: {
                    _: "b"
                },
                gr: {
                    _: "titc"
                },
                fr: {
                    _: "titb"
                },
                hy: {
                    _: "ci"
                },
                kr: {
                    _: "tb"
                },
                mr: {
                    _: "ttc"
                },
                lr: {
                    _: "ttb"
                }
            },
            text: {
                _: "t",
                title: {
                    _: "ti"
                },
                nm: {
                    _: "h"
                },
                ov: {
                    _: "s"
                },
                text: {
                    _: "t"
                },
                quote: {
                    _: "q"
                },
                caption: {
                    _: "c"
                },
                Cu: {
                    _: "H"
                }
            },
            description: {
                _: "d",
                background: {
                    _: "bg"
                },
                border: {
                    _: "b"
                }
            },
            Nb: {
                _: "ap",
                background: {
                    _: "pb"
                },
                controls: {
                    _: "c"
                },
                Wu: {
                    _: "plb"
                }
            },
            Lj: {
                _: "p",
                Ru: {
                    _: "pb"
                },
                Vu: {
                    _: "plb"
                },
                bq: {
                    _: "bb"
                },
                tu: {
                    _: "hbb"
                },
                Zt: {
                    _: "btc"
                },
                uu: {
                    _: "hbtc"
                },
                Kq: {
                    _: "mbat"
                }
            }
        }
    };
    var rd = Gb(qd);
    rd.scheme.qm = Object.assign(rd.scheme.qm, {
        ar: {
            _: "sbg"
        },
        cr: {
            _: "t"
        },
        br: {
            _: "sb"
        },
        Vq: {
            _: "p"
        },
        Yq: {
            _: "sst"
        }
    });
    var sd = !C || 9 <= Number(bc),
    td = C && !ac("9"),
    ud = function () {
        if (!n.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1,
        b = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0
            }
        });
        try {
            n.addEventListener("test", va, b),
            n.removeEventListener("test", va, b)
        } catch (c) {}
        return a
    }
    ();
    function vd() {
        0 != wd && (xd[Aa(this)] = this);
        this.Rf = this.Rf;
        this.$f = this.$f
    }
    var wd = 0,
    xd = {};
    vd.prototype.Rf = !1;
    vd.prototype.dd = function () {
        if (!this.Rf && (this.Rf = !0, this.ya(), 0 != wd)) {
            var a = Aa(this);
            if (0 != wd && this.$f && 0 < this.$f.length)
                throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
            delete xd[a]
        }
    };
    vd.prototype.ya = function () {
        if (this.$f)
            for (; this.$f.length; )
                this.$f.shift()()
    };
    function yd() {
        this.id = "mousewheel"
    }
    yd.prototype.toString = function () {
        return this.id
    };
    function zd(a, b) {
        this.type = a instanceof yd ? String(a) : a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ve = !1;
        this.Xq = !0
    }
    zd.prototype.stopPropagation = function () {
        this.Ve = !0
    };
    zd.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.Xq = !1
    };
    function Ad(a, b) {
        zd.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ja = null;
        if (a) {
            var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget =
                b;
            if (b = a.relatedTarget) {
                if (Rb) {
                    a: {
                        try {
                            Lb(b.nodeName);
                            var f = !0;
                            break a
                        } catch (g) {}
                        f = !1
                    }
                    f || (b = null)
                }
            } else
                "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = Tb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Tb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
                this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = q(a.pointerType) ? a.pointerType : Bd[a.pointerType] || "";
            this.state = a.state;
            this.Ja = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    y(Ad, zd);
    var Bd = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Ad.prototype.stopPropagation = function () {
        Ad.Ab.stopPropagation.call(this);
        this.Ja.stopPropagation ? this.Ja.stopPropagation() : this.Ja.cancelBubble = !0
    };
    Ad.prototype.preventDefault = function () {
        Ad.Ab.preventDefault.call(this);
        var a = this.Ja;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1, td)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    };
    var Cd = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Dd(a) {
        return !(!a || !a[Cd])
    }
    var Ed = 0;
    function Fd(a, b, c, d, f) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Ej = f;
        this.key = ++Ed;
        this.dg = this.vj = !1
    }
    function Gd(a) {
        a.dg = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Ej = null
    };
    function Hd(a) {
        this.src = a;
        this.Ya = {};
        this.$h = 0
    }
    Hd.prototype.add = function (a, b, c, d, f) {
        var g = a.toString();
        a = this.Ya[g];
        a || (a = this.Ya[g] = [], this.$h++);
        var h = Id(a, b, d, f);
        -1 < h ? (b = a[h], c || (b.vj = !1)) : (b = new Fd(b, this.src, g, !!d, f), b.vj = c, a.push(b));
        return b
    };
    Hd.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.Ya))
            return !1;
        var f = this.Ya[a];
        b = Id(f, b, c, d);
        return -1 < b ? (Gd(f[b]), Za(f, b), 0 == f.length && (delete this.Ya[a], this.$h--), !0) : !1
    };
    function Jd(a, b) {
        var c = b.type;
        if (!(c in a.Ya))
            return !1;
        var d = Ya(a.Ya[c], b);
        d && (Gd(b), 0 == a.Ya[c].length && (delete a.Ya[c], a.$h--));
        return d
    }
    Hd.prototype.Lm = function (a) {
        a = a && a.toString();
        var b = 0,
        c;
        for (c in this.Ya)
            if (!a || c == a) {
                for (var d = this.Ya[c], f = 0; f < d.length; f++)
                    ++b, Gd(d[f]);
                delete this.Ya[c];
                this.$h--
            }
    };
    Hd.prototype.Gh = function (a, b, c, d) {
        a = this.Ya[a.toString()];
        var f = -1;
        a && (f = Id(a, b, c, d));
        return -1 < f ? a[f] : null
    };
    function Id(a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.dg && g.listener == b && g.capture == !!c && g.Ej == d)
                return f
        }
        return -1
    };
    var Kd = "closure_lm_" + (1E6 * Math.random() | 0),
    Ld = {},
    Md = 0;
    function Nd(a, b, c, d, f) {
        if (d && d.once)
            return Od(a, b, c, d, f);
        if (w(b)) {
            for (var g = 0; g < b.length; g++)
                Nd(a, b[g], c, d, f);
            return null
        }
        c = Pd(c);
        return Dd(a) ? a.xm(b, c, za(d) ? !!d.capture : !!d, f) : Qd(a, b, c, !1, d, f)
    }
    function Qd(a, b, c, d, f, g) {
        if (!b)
            throw Error("Invalid event type");
        var h = za(f) ? !!f.capture : !!f,
        l = Rd(a);
        l || (a[Kd] = l = new Hd(a));
        c = l.add(b, c, d, h, g);
        if (c.proxy)
            return c;
        d = Sd();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            ud || (f = h), void 0 === f && (f = !1), a.addEventListener(b.toString(), d, f);
        else if (a.attachEvent)
            a.attachEvent(Td(b.toString()), d);
        else if (a.addListener && a.removeListener)
            A("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Md++;
        return c
    }
    function Sd() {
        var a = Ud,
        b = sd ? function (c) {
            return a.call(b.src, b.listener, c)
        }
         : function (c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        };
        return b
    }
    function Od(a, b, c, d, f) {
        if (w(b)) {
            for (var g = 0; g < b.length; g++)
                Od(a, b[g], c, d, f);
            return null
        }
        c = Pd(c);
        return Dd(a) ? a.Gq(b, c, za(d) ? !!d.capture : !!d, f) : Qd(a, b, c, !0, d, f)
    }
    function Vd(a, b, c, d, f) {
        if (w(b))
            for (var g = 0; g < b.length; g++)
                Vd(a, b[g], c, d, f);
        else
            d = za(d) ? !!d.capture : !!d, c = Pd(c), Dd(a) ? a.ck(b, c, d, f) : a && (a = Rd(a)) && (b = a.Gh(b, c, d, f)) && Wd(b)
    }
    function Wd(a) {
        if (r(a) || !a || a.dg)
            return !1;
        var b = a.src;
        if (Dd(b))
            return Jd(b.Cc, a);
        var c = a.type,
        d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Td(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Md--;
        (c = Rd(b)) ? (Jd(c, a), 0 == c.$h && (c.src = null, b[Kd] = null)) : Gd(a);
        return !0
    }
    function Xd(a, b, c, d, f) {
        c = Pd(c);
        d = !!d;
        return Dd(a) ? a.Gh(b, c, d, f) : a ? (a = Rd(a)) ? a.Gh(b, c, d, f) : null : null
    }
    function Td(a) {
        return a in Ld ? Ld[a] : Ld[a] = "on" + a
    }
    function Yd(a, b, c, d) {
        var f = !0;
        if (a = Rd(a))
            if (b = a.Ya[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.dg && (g = Zd(g, d), f = f && !1 !== g)
                }
        return f
    }
    function Zd(a, b) {
        var c = a.listener,
        d = a.Ej || a.src;
        a.vj && Wd(a);
        return c.call(d, b)
    }
    function Ud(a, b) {
        if (a.dg)
            return !0;
        if (!sd) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = n, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
            d = b;
            b = new Ad(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a
                        } catch (h) {
                            f = !0
                        }
                    if (f || void 0 == d.returnValue)
                        d.returnValue = !0
                }
                d = [];
                for (f = b.currentTarget; f; f = f.parentNode)
                    d.push(f);
                a = a.type;
                for (f = d.length - 1; !b.Ve && 0 <= f; f--) {
                    b.currentTarget = d[f];
                    var g = Yd(d[f], a, !0, b);
                    c = c && g
                }
                for (f = 0; !b.Ve && f < d.length; f++)
                    b.currentTarget =
                        d[f], g = Yd(d[f], a, !1, b), c = c && g
            }
            return c
        }
        return Zd(a, new Ad(b, this))
    }
    function Rd(a) {
        a = a[Kd];
        return a instanceof Hd ? a : null
    }
    var $d = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Pd(a) {
        A(a, "Listener can not be null.");
        if (ya(a))
            return a;
        A(a.handleEvent, "An object listener must have handleEvent method.");
        a[$d] || (a[$d] = function (b) {
            return a.handleEvent(b)
        });
        return a[$d]
    };
    function ae() {
        vd.call(this);
        this.Cc = new Hd(this);
        this.St = this;
        this.Gm = null
    }
    y(ae, vd);
    ae.prototype[Cd] = !0;
    e = ae.prototype;
    e.addEventListener = function (a, b, c, d) {
        Nd(this, a, b, c, d)
    };
    e.removeEventListener = function (a, b, c, d) {
        Vd(this, a, b, c, d)
    };
    e.dispatchEvent = function (a) {
        be(this);
        var b = this.Gm;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.Gm)
                c.push(b), A(1E3 > ++d, "infinite loop")
        }
        b = this.St;
        d = a.type || a;
        if (q(a))
            a = new zd(a, b);
        else if (a instanceof zd)
            a.target = a.target || b;
        else {
            var f = a;
            a = new zd(d, b);
            Ib(a, f)
        }
        f = !0;
        if (c)
            for (var g = c.length - 1; !a.Ve && 0 <= g; g--) {
                var h = a.currentTarget = c[g];
                f = ce(h, d, !0, a) && f
            }
        a.Ve || (h = a.currentTarget = b, f = ce(h, d, !0, a) && f, a.Ve || (f = ce(h, d, !1, a) && f));
        if (c)
            for (g = 0; !a.Ve && g < c.length; g++)
                h = a.currentTarget = c[g], f = ce(h, d, !1, a) && f;
        return f
    };
    e.ya = function () {
        ae.Ab.ya.call(this);
        this.Cc && this.Cc.Lm(void 0);
        this.Gm = null
    };
    e.xm = function (a, b, c, d) {
        be(this);
        return this.Cc.add(String(a), b, !1, c, d)
    };
    e.Gq = function (a, b, c, d) {
        return this.Cc.add(String(a), b, !0, c, d)
    };
    e.ck = function (a, b, c, d) {
        this.Cc.remove(String(a), b, c, d)
    };
    function ce(a, b, c, d) {
        b = a.Cc.Ya[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.dg && h.capture == c) {
                var l = h.listener,
                u = h.Ej || h.src;
                h.vj && Jd(a.Cc, h);
                f = !1 !== l.call(u, d) && f
            }
        }
        return f && 0 != d.Xq
    }
    e.Gh = function (a, b, c, d) {
        return this.Cc.Gh(String(a), b, c, d)
    };
    function be(a) {
        A(a.Cc, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
    var de = 0;
    function ee() {
        this.Ag = this.sd = this.Bb = this.oc = null
    }
    e = ee.prototype;
    e.dd = function () {
        this.ib();
        if (this.sd)
            for (var a = k(this.sd), b = a.next(); !b.done; b = a.next())
                fe(b.value);
        if (this.oc) {
            a = k(this.oc);
            for (b = a.next(); !b.done; b = a.next())
                if (b = b.value, w(b)) {
                    b = k(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        Wd(c.value)
                } else
                    Wd(b);
            this.oc = null
        }
        if (this.Bb)
            for (a = k(Object.keys(this.Bb)), b = a.next(); !b.done; b = a.next())
                ge(this, b.value)
    };
    function H(a, b, c, d, f, g) {
        f = void 0 === f ? null : f;
        g = void 0 === g ? !1 : g;
        a.oc = a.oc || [];
        if (w(c)) {
            var h = [];
            c = k(c);
            for (var l = c.next(); !l.done; l = c.next())
                l = l.value, l = Nd(he(b), l, d, g, f), h.push(l);
            a.oc.push(h)
        } else
            b = Nd(he(b), c, d, g, f), a.oc.push(b)
    }
    function ie(a, b, c, d, f) {
        if (w(c)) {
            var g = !1;
            c = k(c);
            for (var h = c.next(); !h.done; h = c.next())
                g = ie(a, b, h.value, d, f) || g;
            return g
        }
        b = Xd(he(b), c, d, !1, f);
        return !!b && je(a, b)
    }
    function je(a, b) {
        if (w(b)) {
            var c = !1;
            b = k(b);
            for (var d = b.next(); !d.done; d = b.next())
                c = je(a, d.value) || c;
            return c
        }
        Ya(a.oc, b);
        return Wd(b)
    }
    function I(a, b, c, d, f) {
        a.Bb = a.Bb || {};
        b.addHandler(c, d, f);
        var g = ++de;
        a.Bb[g] = {
            em: b,
            bb: c,
            context: d,
            priority: f
        }
    }
    function J(a, b, c, d) {
        function f(g) {
            for (var h = [], l = 0; l < arguments.length; ++l)
                h[l - 0] = arguments[l];
            c.apply(d, h);
            ke(a, b, f, d, void 0)
        }
        I(a, b, f, d, void 0)
    }
    function ke(a, b, c, d, f) {
        var g = Db(a.Bb, function (a) {
            a: {
                var g = {
                    em: b,
                    bb: c,
                    context: d,
                    priority: f
                },
                h;
                for (h in a)
                    if (!(h in g) || a[h] !== g[h]) {
                        a = !1;
                        break a
                    }
                for (h in g)
                    if (!(h in a)) {
                        a = !1;
                        break a
                    }
                a = !0
            }
            return a
        });
        g && ge(a, g)
    }
    function ge(a, b) {
        if (a.Bb && a.Bb[b]) {
            var c = a.Bb[b];
            c.em.removeHandler(c.bb, c.context, c.priority);
            delete a.Bb[b]
        } else
            Na("unknown handler key")
    }
    function le(a, b) {
        if (b) {
            if (a.Bb) {
                var c = zb(a.Bb, function (a) {
                    return a.em.Zo == b
                }),
                d = k(Object.keys(c));
                for (c = d.next(); !c.done; c = d.next())
                    ge(a, c.value)
            }
            if (a.oc) {
                var f = he(b);
                c = Ua(a.oc, function (a) {
                    return a.src == f
                });
                d = k(c);
                for (c = d.next(); !c.done; c = d.next())
                    je(a, c.value)
            }
        }
    }
    function K(a, b, c) {
        a.sd = a.sd || [];
        c && (a.Ag = a.Ag || {}, a.Ag[c] = a.Ag[c] || [], a.Ag[c].push(b));
        a.sd.push(b);
        return b
    }
    e.Xi = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c)
            b[c - 0] = arguments[c];
        if (this.sd)
            for (b = k(b), c = b.next(); !c.done; c = b.next())
                if (c = c.value) {
                    this.ee(c);
                    var d = Sa(this.sd, c);
                    0 <= d && (this.sd.splice(d, 1), fe(c))
                }
    };
    e.ee = function (a) {
        le(this, a)
    };
    e.En = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c)
            b[c - 0] = arguments[c];
        b = k(b);
        for (c = b.next(); !c.done; c = b.next())
            (c = c.value) && this.ee(c)
    };
    function he(a) {
        return p(a.displayObject) ? a.displayObject() : a
    }
    e.ib = function () {};
    function me() {
        this.Of = this.He = this.Wi = null
    }
    me.prototype.push = function (a, b) {
        if (0 == b)
            this.Of = this.Of || [];
        else if (this.Wi = this.Wi || [0], this.He = this.He || {}, !(b in this.He)) {
            this.He[b] = [];
            var c = this.Wi;
            var d = 0;
            for (var f = c.length, g; d < f; ) {
                var h = d + f >> 1;
                var l = c[h];
                l = b > l ? 1 : b < l ? -1 : 0;
                0 < l ? d = h + 1 : (f = h, g = !l)
            }
            d = g ? d : ~d;
            0 > d && cb(c,  - (d + 1), 0, b)
        }
        b = ne(this, b);
        A(b).push(a)
    };
    me.prototype.remove = function (a, b) {
        (b = ne(this, b)) && Ya(b, a)
    };
    function oe(a, b) {
        return 0 == b ? a.Of || [] : b in A(a.He) ? A(ne(a, b)) : []
    }
    function pe(a) {
        if (!a.He)
            return a.Of ? a.Of.slice() : [];
        for (var b = [], c = A(a.Wi), d = 0; d < c.length; ++d) {
            var f = ne(a, c[d]);
            f && bb(b, f)
        }
        return b
    }
    function ne(a, b) {
        return 0 == b ? a.Of : A(a.He)[b]
    };
    function L(a) {
        a = void 0 === a ? null : a;
        ee.call(this);
        this.Tg = this.Ga = null;
        this.Zo = a
    }
    m(L, ee);
    e = L.prototype;
    e.ju = function () {
        return this.Zo
    };
    e.addHandler = function (a, b, c) {
        this.Ga = this.Ga || new me;
        this.Ga.push({
            bb: a,
            context: b
        }, c || 0)
    };
    e.removeHandler = function (a, b, c) {
        c = c || 0;
        if (this.Ga)
            for (var d = oe(this.Ga, c), f = d.length, g = 0; g < f; ++g) {
                var h = d[g];
                if (h.bb == a && h.context == b) {
                    a = g;
                    (c = ne(this.Ga, c)) && Za(c, a);
                    break
                }
            }
        else
            Na("EventDispatcher has no handlers!")
    };
    e.ru = function (a, b, c) {
        if (!this.Ga)
            return !1;
        c = oe(this.Ga, c || 0);
        for (var d = c.length, f = 0; f < d; ++f) {
            var g = c[f];
            if (g.bb == a && g.context == b)
                return !0
        }
        return !1
    };
    e.c = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c)
            b[c - 0] = arguments[c];
        if (this.Ga) {
            c = pe(this.Ga);
            for (var d = c.length, f = 0; f < d; ++f) {
                var g = c[f];
                if (-1 != Sa(pe(this.Ga), g))
                    try {
                        g.bb.apply(g.context, arguments)
                    } catch (h) {
                        qe(h, !0)
                    }
            }
        }
        this.Tg && this.Tg.forEach(function (a) {
            a.c.apply(a, ca(b))
        })
    };
    function re(a) {
        return a.Ga ? pe(a.Ga).length : 0
    }
    function se(a, b) {
        a.Tg || (a.Tg = []);
        a.Tg.push(b)
    }
    e.ib = function () {
        ee.prototype.ib.call(this)
    };
    L.prototype.dispatch = L.prototype.c;
    L.prototype.hasHandler = L.prototype.ru;
    L.prototype.removeHandler = L.prototype.removeHandler;
    L.prototype.addHandler = L.prototype.addHandler;
    L.prototype.eventOwner = L.prototype.ju;
    function M(a) {
        ee.apply(this, arguments)
    }
    m(M, ee);
    function N(a, b) {
        var c = new L(a);
        K(a, c);
        if (b)
            if (w(b))
                for (a = k(b), b = a.next(); !b.done; b = a.next())
                    se(b.value, c);
            else
                se(b, c);
        return c
    };
    function te() {
        return 0 <= window.location.search.indexOf("ispringtesting=1")
    };
    var ue;
    function ve(a) {
        a instanceof Ad && (a = a.Ja);
        A(a);
        ue || (ue = new WeakMap);
        ue.set(a, !0)
    }
    function we(a) {
        a instanceof Ad && (a = a.Ja);
        A(a);
        ue || (ue = new WeakMap);
        return ue.has(a)
    }
    function xe(a) {
        a instanceof Ad && (a = a.Ja);
        A(a);
        return a.defaultPrevented ? !0 : we(a)
    };
    function ye(a, b) {
        ae.call(this);
        this.fd = a || 1;
        this.Yh = b || n;
        this.aq = Fa(this.wv, this);
        this.Dq = x()
    }
    y(ye, ae);
    e = ye.prototype;
    e.enabled = !1;
    e.Aa = null;
    e.setInterval = function (a) {
        this.fd = a;
        this.Aa && this.enabled ? (this.stop(), this.start()) : this.Aa && this.stop()
    };
    e.wv = function () {
        if (this.enabled) {
            var a = x() - this.Dq;
            0 < a && a < .8 * this.fd ? this.Aa = this.Yh.setTimeout(this.aq, this.fd - a) : (this.Aa && (this.Yh.clearTimeout(this.Aa), this.Aa = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    e.start = function () {
        this.enabled = !0;
        this.Aa || (this.Aa = this.Yh.setTimeout(this.aq, this.fd), this.Dq = x())
    };
    e.stop = function () {
        this.enabled = !1;
        this.Aa && (this.Yh.clearTimeout(this.Aa), this.Aa = null)
    };
    e.ya = function () {
        ye.Ab.ya.call(this);
        this.stop();
        delete this.Yh
    };
    function ze(a, b) {
        if (!ya(a))
            if (a && "function" == typeof a.handleEvent)
                a = Fa(a.handleEvent, a);
            else
                throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
    };
    function Ae(a, b) {
        return (new Be(b)).Sm(a)
    }
    function Be(a) {
        this.Nj = a
    }
    Be.prototype.Sm = function (a) {
        var b = [];
        Ce(this, a, b);
        return b.join("")
    };
    function Ce(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (w(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var f = "", g = 0; g < b; g++)
                        c.push(f), f = d[g], Ce(a, a.Nj ? a.Nj.call(d, String(g), f) : f, c), f = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    g = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(g), De(d, c), c.push(":"), Ce(a, a.Nj ? a.Nj.call(b, d, f) : f, c), g = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                De(b,
                    c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Ee = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    Fe = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    function De(a, b) {
        b.push('"', a.replace(Fe, function (a) {
                var b = Ee[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Ee[a] = b);
                return b
            }), '"')
    };
    function Ge(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    e = Ge.prototype;
    e.clone = function () {
        return new Ge(this.top, this.right, this.bottom, this.left)
    };
    e.contains = function (a) {
        return this && a ? a instanceof Ge ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    e.expand = function (a, b, c, d) {
        za(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    e.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    e.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    e.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    e.translate = function (a, b) {
        a instanceof E ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (Oa(a), this.left += a, this.right += a, r(b) && (this.top += b, this.bottom += b));
        return this
    };
    e.scale = function (a, b) {
        b = r(b) ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    function He(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    e = He.prototype;
    e.clone = function () {
        return new He(this.left, this.top, this.width, this.height)
    };
    e.contains = function (a) {
        return a instanceof E ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    e.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    e.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    e.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    e.translate = function (a, b) {
        a instanceof E ? (this.left += a.x, this.top += a.y) : (this.left += Oa(a), r(b) && (this.top += b));
        return this
    };
    e.scale = function (a, b) {
        b = r(b) ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    function O(a, b, c) {
        if (q(b))
            (b = Ie(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var f = b[d],
                g = Ie(c, d);
                g && (c.style[g] = f)
            }
    }
    var Je = {};
    function Ie(a, b) {
        var c = Je[b];
        if (!c) {
            var d = tb(b);
            c = d;
            void 0 === a.style[d] && (d = (Tb ? "Webkit" : Rb ? "Moz" : C ? "ms" : Ob ? "O" : null) + ub(d), void 0 !== a.style[d] && (c = d));
            Je[b] = c
        }
        return c
    }
    function Ke(a, b) {
        var c = a.style[tb(b)];
        return "undefined" !== typeof c ? c : a.style[Ie(a, b)] || ""
    }
    function Le(a, b) {
        a: {
            var c = Oc(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c[b] || c.getPropertyValue(b) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function Me(a) {
        return new E(a.offsetLeft, a.offsetTop)
    }
    function Ne(a) {
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }
    function Oe(a) {
        var b = Pe;
        if ("none" != Le(a, "display"))
            return b(a);
        var c = a.style,
        d = c.display,
        f = c.visibility,
        g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = f;
        return a
    }
    function Pe(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Tb && !b && !c;
        if ((!p(b) || d) && a.getBoundingClientRect) {
            a: {
                try {
                    var f = a.getBoundingClientRect()
                } catch (g) {
                    f = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                    break a
                }
                C && a.ownerDocument.body && (a = a.ownerDocument, f.left -= a.documentElement.clientLeft + a.body.clientLeft, f.top -= a.documentElement.clientTop + a.body.clientTop)
            }
            return new F(f.right - f.left, f.bottom - f.top)
        }
        return new F(b, c)
    };
    function Qe(a, b) {
        this.uh = a;
        this.yr = b || []
    }
    v("iSpring.ios.mobile.MobileAppCommand", Qe, void 0);
    Qe.prototype.id = function () {
        return Aa(this)
    };
    function Re(a) {
        try {
            var b = document.createElement("iframe");
            O(b, {
                width: "1px",
                height: "1px",
                border: "0"
            });
            b.src = a;
            Wc(document.body, b);
            ze(function () {
                Zc(b)
            }, 100)
        } catch (c) {}
    };
    function Se(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++)
            this[b] = a[b] || 0
    }
    Se.prototype.BYTES_PER_ELEMENT = 4;
    Se.prototype.set = function (a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++)
            this[b + c] = a[c]
    };
    Se.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (Se.BYTES_PER_ELEMENT = 4, Se.prototype.BYTES_PER_ELEMENT = Se.prototype.BYTES_PER_ELEMENT, Se.prototype.set = Se.prototype.set, Se.prototype.toString = Se.prototype.toString, v("Float32Array", Se, void 0));
    function Te(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++)
            this[b] = a[b] || 0
    }
    Te.prototype.BYTES_PER_ELEMENT = 8;
    Te.prototype.set = function (a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++)
            this[b + c] = a[c]
    };
    Te.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            Te.BYTES_PER_ELEMENT = 8
        } catch (a) {}
        Te.prototype.BYTES_PER_ELEMENT = Te.prototype.BYTES_PER_ELEMENT;
        Te.prototype.set = Te.prototype.set;
        Te.prototype.toString = Te.prototype.toString;
        v("Float64Array", Te, void 0)
    };
    function Ue(a, b, c, d) {
        c = c || 0;
        var f = Array.prototype.slice.call(arguments, 3);
        return setTimeout(function () {
            a.apply(b || null, f)
        }, c)
    }
    function Ve() {
        if (We)
            return new F(document.documentElement.clientWidth, document.documentElement.clientHeight);
        if (P && C)
            return new F(screen.width, screen.height);
        var a = p(window.devicePixelRatio) ? window.devicePixelRatio : 1;
        return Xe ? new F(screen.width / a, screen.height / a) : P ? Q && (a = Math.max(screen.width, screen.height), document.documentElement.clientWidth > a) ? new F(Math.max(document.documentElement.clientWidth, a), Math.max(document.documentElement.clientHeight, Math.min(screen.width, screen.height))) : new F(screen.width,
            screen.height) : new F(screen.width * a, screen.height * a)
    }
    function Ye() {
        var a = window.location.search.substr(1);
        if (a) {
            var b = {};
            a = a.split("&");
            for (var c = 0; c < a.length; ++c) {
                var d = a[c].split("=");
                if (2 == d.length) {
                    try {
                        var f = decodeURIComponent(d[0].replace(/\+/g, " "))
                    } catch (h) {
                        f = d[0]
                    }
                    try {
                        var g = decodeURIComponent(d[1].replace(/\+/g, " "))
                    } catch (h) {
                        g = d[1]
                    }
                    f = f.toLowerCase();
                    b[f] = g
                }
            }
        } else
            b = {};
        return b
    }
    function Ze(a) {
        if (!a)
            return !1;
        for (; a; ) {
            if ("A" == a.nodeName.toLocaleUpperCase())
                return !0;
            a = a.parentNode
        }
        return !1
    }
    function $e(a) {
        return a && "VIDEO" == a.nodeName && a.controls
    };
    (function () {
        function a(a) {
            try {
                return a.ISPlayer && (window.ISPlayer = a.ISPlayer),
                a.ISPVideoPlayer && (window.ISPVideoPlayer = a.ISPVideoPlayer),
                a.ISPQuizPlayer && (window.ISPQuizPlayer = a.ISPQuizPlayer),
                a.ISPInteractionPlayerCore && (window.ISPInteractionPlayerCore = a.ISPInteractionPlayerCore),
                a.ISPBookPlayer && (window.ISPBookPlayer = a.ISPBookPlayer),
                a.ISPScenarioPlayer && (window.ISPScenarioPlayer = a.ISPScenarioPlayer),
                a.ISPFlipPlayer && (window.ISPFlipPlayer = a.ISPFlipPlayer),
                !0
            } catch (f) {
                return !1
            }
        }
        if (function () {
            try {
                var a =
                    window.frameElement
            } catch (f) {}
            return null != a
        }
            ())
            for (var b = window, c = 7; b && b.parent != b && 0 != c-- && !a(b.parent); )
                b = b.parent
    })();
    var af,
    bf = Ye().user_agent;
    af = bf ? bf : vb || "";
    var Q = fc || ec,
    We = "1" == Ye().small_screen,
    cf = "1" == Ye().tablet_screen,
    df = We || cf,
    ef,
    ff;
    try {
        ff = window.top.location.href ? window.frameElement : null
    } catch (a) {}
    ef = null != ff;
    var gf = ec && ef;
    function hf() {
        var a = af.toLowerCase();
        return -1 != a.indexOf("android") || -1 != a.indexOf("mobile") || -1 != a.indexOf("wpdesktop") || We || cf
    }
    var jf = -1 != af.toLowerCase().indexOf("chrome"),
    kf = Tb && !jf,
    lf = -1 == af.toLowerCase().indexOf("windows phone") && -1 != af.toLowerCase().indexOf("android"),
    P = hf(),
    mf = P && (hf() ? "ontouchstart" in window || p(window.DocumentTouch) && document instanceof window.DocumentTouch || -1 != af.toLowerCase().indexOf("touch") : !1),
    nf = "";
    if (Q) {
        var of = /CPU.+OS\s(\d+)_(\d+)/.exec(af);
        nf = of ? of[1] + "." + of[2] : ""
    }
    var pf = parseInt(nf, 10),
    qf = Q && 10 <= pf,
    rf = Q && 12 <= pf,
    sf = C && "9." == Xb.substr(0, 2),
    tf = C && "10." == Xb.substr(0, 3),
    uf = R && C,
    Xe = lf && !jf && !dc && !Ob,
    vf = -1 != af.indexOf("ismobile"),
    wf = vf && ec,
    xf = window._ispringNoneMobile,
    yf;
    if (yf = !window._ispringFullsizeSkin) {
        var zf;
        if (!(zf = We))
            if (window._ispringFullsizeSkin)
                zf = !1;
            else {
                var Af = Ve();
                zf = (ec || 700 > Math.min(Af.width, Af.height)) && !cf
            }
        yf = zf
    }
    var R = yf,
    Bf = ec && !wf && 10 > pf || uf && R,
    Cf = p(window.ISPlayer),
    Df = Cf && R,
    Ef = P && !Cf,
    Ff = !1,
    Gf = document.createElement("audio"),
    Hf = Gf.play && Gf.play();
    Hf && Hf.then(function () {
        Gf.pause()
    }, function (a) {
        if (0 < a.toString().indexOf("interact with the document first") || (kf || dc) && 0 < a.toString().indexOf("possibly because the user denied permission"))
            Ff = !0
    });
    var If = "1" == Ye().screenshoter,
    Jf = "1" == Ye().embed;
    function Kf() {
        return 1 == window._ispringDebug || "1" == Ye().isdebug
    }
    if (B("Windows")) {
        var Lf = vb,
        Mf;
        if (B("Windows")) {
            Mf = /Windows (?:NT|Phone) ([0-9.]+)/;
            var Nf = Mf.exec(Lf)
        } else
            Kb() || B("iPad") || B("iPod") ? (Mf = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, (Nf = Mf.exec(Lf)) && Nf[1].replace(/_/g, ".")) : B("Macintosh") ? (Mf = /Mac OS X ([0-9_.]+)/, (Nf = Mf.exec(Lf)) && Nf[1].replace(/_/g, ".")) : B("Android") ? (Mf = /Android\s+([^\);]+)(\)|;)/, Nf = Mf.exec(Lf)) : B("CrOS") && (Mf = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, Nf = Mf.exec(Lf))
    }
    setTimeout(function () {
        Of = Kf
    }, 0);
    function Pf(a) {
        var b = a.accessibilityModeEnabled;
        a = a.Kb;
        M.call(this);
        this.$e = b && !(P || R);
        this.fs = a;
        this.mb = this.$e ? 0 <= window.location.search.indexOf("accessibility=1") : !1;
        this.yg = "";
        this.lg = N(this)
    }
    m(Pf, M);
    Pf.prototype.accessibilityModeEnabled = function () {
        return this.$e
    };
    Pf.prototype.ta = function () {
        return this.mb
    };
    Pf.prototype.Kb = function () {
        return this.fs
    };
    Pf.prototype.bd = function (a) {
        a = void 0 === a ? !0 : a;
        this.$e ? (this.mb = !this.mb, a && this.lg.c()) : A(this.$e, "Accessibility mode disabled, but changeAccessibilityMode was called")
    };
    var Qf = {
        Zd: {
            _: "rs",
            Wl: {
                _: "a",
                mimeType: {
                    _: "m"
                },
                src: {
                    _: "s"
                },
                text: {
                    _: "t"
                }
            },
            fk: {
                _: "v",
                mimeType: {
                    _: "m"
                },
                src: {
                    _: "s"
                },
                text: {
                    _: "t"
                }
            },
            images: {
                _: "i",
                src: {
                    _: "s"
                },
                width: {
                    _: "v"
                },
                height: {
                    _: "h"
                },
                text: {
                    _: "t"
                }
            }
        },
        fonts: {
            _: "fs",
            fontFamily: "f",
            jn: "s"
        },
        Xh: {
            _: "S",
            fontFamily: "f",
            bold: "b",
            italic: "i"
        },
        fu: {
            _: "v"
        }
    };
    function Rf() {}
    e = Rf.prototype;
    e.clone = function () {
        var a = this.wg();
        Object.assign(a, this);
        return a
    };
    e.isEqual = function (a) {
        for (var b in a)
            if (a.hasOwnProperty(b) && a[b] != this[b])
                return !1;
        return !0
    };
    e.clear = function (a, b) {
        b = void 0 === b ? !1 : b;
        var c = this.wg(),
        d;
        for (d in this)
            this.hasOwnProperty(d) && (c[d] = b ? void 0 === a[d] ? void 0 : this[d] : void 0 === a[d] ? this[d] : void 0);
        return c
    };
    e.remove = function (a) {
        var b = this.wg(),
        c;
        for (c in this)
            this.hasOwnProperty(c) && (b[c] = this[c] === a[c] ? void 0 : this[c]);
        return b
    };
    e.wg = function () {
        throw Error("method is not implemented");
    };
    function Sf() {
        this.type = "p";
        this.bottomPadding = this.topPadding = this.lineHeight = this.Bq = this.align = this.Fj = void 0
    }
    m(Sf, Rf);
    Sf.prototype.wg = function () {
        return new Sf
    };
    Sf.prototype.remove = function (a) {
        a = Rf.prototype.remove.call(this, a);
        a.type = a.type || "p";
        return a
    };
    Sf.prototype.Re = function () {
        return "p" == this.type && !p(this.Fj) && !p(this.lineHeight) && !p(this.align) && !p(this.Bq) && !p(this.topPadding) && !p(this.bottomPadding)
    };
    function Tf() {
        this.strike = this.Zj = this.Yj = this.fontFamily = this.size = this.color = this.bk = this.italic = this.bold = void 0
    }
    m(Tf, Rf);
    Tf.prototype.Re = function () {
        return !p(this.bold) && !p(this.italic) && !p(this.bk) && !p(this.color) && !p(this.size) && !p(this.fontFamily) && !p(this.Yj) && !p(this.Zj) && !p(this.strike)
    };
    Tf.prototype.wg = function () {
        return new Tf
    };
    function Uf() {
        this.rh = new Tf;
        this.Sg = new Sf
    }
    e = Uf.prototype;
    e.fb = function () {
        return this.rh
    };
    e.Kj = function () {
        return this.Sg
    };
    e.Re = function () {
        return this.rh.Re() && this.Sg.Re()
    };
    e.clone = function () {
        var a = this.Kj(),
        b = this.fb(),
        c = new Uf;
        a && (c.Sg = a.clone());
        b && (c.rh = b.clone());
        return c
    };
    e.isEqual = function (a) {
        return this.rh.isEqual(a.fb()) && this.Sg.isEqual(a.Kj())
    };
    function Vf(a, b, c) {
        for (var d in b)
            if (b.hasOwnProperty(d)) {
                var f = b[d];
                c && (d = c(d));
                a = a.replace(new RegExp(d, "g"), f)
            }
        return a
    };
    function Wf(a) {
        this.ue = a
    }
    Wf.prototype.Ra = function (a, b, c) {
        c = this.ue.hasOwnProperty(a) ? this.ue[a] : c;
        if (p(c))
            return p(b) && (c = Vf(c, b, this.Fk)), c;
        Na("unknown message id: " + a);
        return a
    };
    Wf.prototype.messages = function () {
        return this.ue
    };
    Wf.prototype.mm = function (a) {
        return this.ue.hasOwnProperty(a)
    };
    Wf.prototype.Fk = function (a) {
        return "%" + a.toUpperCase() + "%"
    };
    Wf.prototype.getMessage = Wf.prototype.Ra;
    function Xf(a) {
        this.ue = a;
        this.Oi = new L
    }
    m(Xf, Wf);
    function Yf(a) {
        var b = a.startsWith("data:") ? null : aa;
        if (b)
            if (b = "s" + (null != b ? "=" + encodeURIComponent(String(b)) : "")) {
                var c = a.indexOf("#");
                0 > c && (c = a.length);
                var d = a.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var f = ""
                } else
                    f = a.substring(d + 1, c);
                a = [a.substr(0, d), f, a.substr(c)];
                c = a[1];
                a[1] = b ? c ? c + "&" + b : b : c;
                b = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
            } else
                b = a;
        else
            b = a;
        return b
    };
    var Zf = /#(.)(.)(.)/;
    function $f(a) {
        if (!ag.test(a))
            throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(Zf, "#$1$1$2$2$3$3"));
        a = a.toLowerCase();
        return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
    }
    function bg(a, b, c) {
        0 > c ? c += 1 : 1 < c && --c;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
    }
    var ag = /^#(?:[0-9a-f]{3}){1,2}$/i;
    function cg(a) {
        return 1 == a.length ? "0" + a : a
    };
    function dg(a) {
        var b = $f(a).concat(0);
        a = b[0];
        var c = b[1],
        d = b[2];
        b = b[3];
        if (isNaN(a) || 0 > a || 255 < a || isNaN(c) || 0 > c || 255 < c || isNaN(d) || 0 > d || 255 < d || isNaN(b) || 0 > b || 1 < b)
            throw Error('"(' + a + "," + c + "," + d + "," + b + ')" is not a valid RGBA color');
        a = [a, c, d, b];
        c = a.slice(0);
        c[3] = Math.round(1E3 * a[3]) / 1E3;
        return "rgba(" + c.join(",") + ")"
    };
    function eg(a) {
        return "#" + a.toString(16).padStart(6, "0")
    };
    function fg(a) {
        var b = {
            Eq:  - .06
        },
        c = void 0 === b.Bu ? 0 : b.Bu,
        d = void 0 === b.saturation ? 0 : b.saturation;
        b = void 0 === b.Eq ? 0 : b.Eq;
        a = eg(a);
        var f = $f(a);
        a = f[0] / 255;
        var g = f[1] / 255;
        f = f[2] / 255;
        var h = Math.max(a, g, f),
        l = Math.min(a, g, f),
        u = 0,
        t = 0,
        D = .5 * (h + l);
        h != l && (h == a ? u = 60 * (g - f) / (h - l) : h == g ? u = 60 * (f - a) / (h - l) + 120 : h == f && (u = 60 * (a - g) / (h - l) + 240), t = 0 < D && .5 >= D ? (h - l) / (2 * D) : (h - l) / (2 - 2 * D));
        a = [Math.round(u + 360) % 360, t, D];
        a[0] = (a[0] + c) % 360;
        a[1] = Kc(a[1] + d, 0, 1);
        a[2] = Kc(a[2] + b, 0, 1);
        b = a[1];
        d = a[2];
        c = a[0] / 360;
        0 == b ? d = b = c = 255 * d : (a = .5 > d ? d * (1 + b) :
                    d + b - b * d, g = 2 * d - a, d = 255 * bg(g, a, c + 1 / 3), b = 255 * bg(g, a, c), c = 255 * bg(g, a, c - 1 / 3));
        d = [Math.round(d), Math.round(b), Math.round(c)];
        b = d[0];
        c = d[1];
        d = d[2];
        b = Number(b);
        c = Number(c);
        d = Number(d);
        if (b != (b & 255) || c != (c & 255) || d != (d & 255))
            throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
        b = cg(b.toString(16));
        c = cg(c.toString(16));
        d = cg(d.toString(16));
        return "#" + b + c + d
    };
    function gg(a) {
        var b = a.scheme.text,
        c = a.scheme.Lj,
        d = a.scheme.Nb,
        f = a.scheme.description,
        g = a.scheme.qm,
        h = {},
        l = h[b] = {},
        u = h[c] = {},
        t = h[d] = {},
        D = h[f] = {},
        z = h[g] = {};
        l[b.title] = "title.font.color";
        l[b.nm] = "header.font.color";
        l[b.ov] = "subheader.font.color";
        l[b.text] = "text.font.color";
        l[b.Cu] = "hyperlink.font.color";
        u[c.Ru] = "page.background.color";
        u[c.Vu] = "player.background.color";
        u[c.bq] = "button.background.color";
        u[c.tu] = "hovered.button.background.color";
        u[c.Zt] = "button.text.color";
        u[c.uu] = "hovered.button.text.color";
        u[c.Kq] = "miniskin.topbar.buttons.text.color";
        D[f.background] = "description.background.color";
        D[f.border] = "description.border.color";
        t[d.background] = "media.player.background.color";
        t[d.controls] = "media.player.controls.color";
        t[d.Wu] = "media.player.playing.band.color";
        z[g.background] = "interactivity.background.color";
        z[g.border] = "interactivity.border.color";
        a = a.scheme;
        a.av && (a = a.av, b = h[a] = {}, b[a.uy] = "search.field.text.color", b[a.ty] = "search.field.icons.color", b[a.ry] = "search.field.background", b[a.sy] =
                "search.field.border.color", b[a.dy] = "active.search.field.background", b[a.ey] = "active.search.field.border.color");
        g.Av && (z[g.Av] = "visualizer.item.text.color");
        g.kr && (z[g.kr] = "tooltip.background.color");
        g.mr && (z[g.mr] = "tooltip.text.color");
        g.lr && (z[g.lr] = "tooltip.border.color");
        g.gr && (z[g.gr] = "title.color");
        g.fr && (z[g.fr] = "title.background");
        g.uv && (z[g.uv] = "thumbnail.background.color");
        g.au && (z[g.au] = "caption.background.color");
        g.bu && (z[g.bu] = "close.button.background.color");
        g.cu && (z[g.cu] = "close.button.icon.color");
        g.vv && (z[g.vv] = "thumbnail.caption.color");
        g.pu && (z[g.pu] = "glossary.alphabet.background");
        g.qu && (z[g.qu] = "glossary.alphabet.text.color");
        g.vu && (z[g.vu] = "hovered.list.item.background");
        g.wu && (z[g.wu] = "hovered.list.item.text.color");
        g.bv && (z[g.bv] = "selected.list.item.background");
        g.cv && (z[g.cv] = "selected.list.item.text.color");
        g.ar && (z[g.ar] = "step.background.color");
        g.cr && (z[g.cr] = "step.text.color");
        g.br && (z[g.br] = "step.border.color");
        g.Vq && (z[g.Vq] = "step.progress.point.color");
        g.Yq && (z[g.Yq] = "selected.step.text.color");
        g.Su && (z[g.Su] = "panel.background.color");
        g.Tu && (z[g.Tu] = "panel.text.color");
        g.xu && (z[g.xu] = "hovered.panel.background.color");
        g.yu && (z[g.yu] = "hovered.panel.text.color");
        g.dv && (z[g.dv] = "selected.panel.background.color");
        g.ev && (z[g.ev] = "selected.panel.text.color");
        g.rv && (z[g.rv] = "tabs.background.color");
        g.sv && (z[g.sv] = "tabs.text.color");
        g.zu && (z[g.zu] = "hovered.tabs.background.color");
        g.Au && (z[g.Au] = "hovered.tabs.text.color");
        g.Hu && (z[g.Hu] = "guided.image.items.color");
        this.Il = h
    };
    function hg(a, b, c) {
        this.Cb = c = void 0 === c ? rb() : c;
        this.vk = b;
        this.xi = a;
        this.co = null;
        this.df = new L
    }
    e = hg.prototype;
    e.id = function () {
        return this.Cb
    };
    e.Qj = function (a) {
        this.Cb = a
    };
    e.toString = function () {
        return this.co ? this.co.Ra(this.xi, void 0, this.xi) : this.xi
    };
    e.description = function () {
        return this.xi
    };
    e.colors = function () {
        return this.vk
    };
    function ig(a, b, c) {
        c = void 0 === c ? !0 : c;
        for (var d = {}, f = od, g = k(Object.keys(b)), h = g.next(); !h.done; h = g.next()) {
            var l = h.value;
            h = b[l];
            od = !0;
            "_" !== l && a.hasOwnProperty(h.toString()) && (l = a[h], od = c, d[h] = za(l) ? ig(l, h, c) : l)
        }
        od = f;
        return d
    };
    function jg(a, b) {
        var c = a[b.id],
        d = a[b.description];
        a = ig(a[b.scheme], b.scheme);
        var f = a[b.scheme.Lj],
        g = b.scheme.Lj.Kq;
        b = b.scheme.Lj.bq;
        p(f[g]) || (f[g] = f[b]);
        return new hg(d, a, c)
    };
    var kg = {
        oq: {
            _: "d"
        },
        $p: {
            _: "b"
        },
        settings: {
            _: "s",
            nu: {
                _: "f"
            },
            cd: {
                _: "c"
            },
            Nu: {
                _: "m"
            },
            Tq: {
                _: "p"
            }
        },
        presentationSettings: {
            _: "ps"
        },
        slideBackground: {
            _: "sb"
        },
        fillPanelsView: {
            _: "fp"
        }
    };
    var lg = null;
    function mg() {
        if (!lg)
            throw Error("VisualsI18n is not initialized");
        return A(lg)
    };
    var ng = {
        type: {
            _: "t"
        },
        Fj: {
            _: "i"
        },
        align: {
            _: "a"
        },
        Bq: {
            _: "r"
        },
        lineHeight: {
            _: "lh"
        },
        topPadding: {
            _: "T"
        },
        bottomPadding: {
            _: "b"
        }
    };
    var og = {
        bold: {
            _: "b"
        },
        italic: {
            _: "i"
        },
        bk: {
            _: "u"
        },
        strike: {
            _: "st"
        },
        color: {
            _: "c"
        },
        size: {
            _: "s"
        },
        fontFamily: {
            _: "f"
        },
        Yj: {
            _: "sb"
        },
        Zj: {
            _: "sp"
        }
    };
    var pg = {
        fb: Object.assign({
            _: "tf"
        }, og),
        Kj: Object.assign({
            _: "pf"
        }, ng)
    };
    function qg() {
        this.j = G(ng)
    }
    qg.prototype.load = function (a) {
        if (!a)
            return new Sf;
        var b = new Sf;
        b.type = a[this.j.type];
        b.Fj = a[this.j.Fj];
        b.align = a[this.j.align];
        b.lineHeight = a[this.j.lineHeight];
        b.topPadding = a[this.j.topPadding];
        b.bottomPadding = a[this.j.bottomPadding];
        return b
    };
    function rg() {
        this.j = G(og)
    }
    rg.prototype.load = function (a) {
        if (!a)
            return new Tf;
        var b = new Tf;
        b.fontFamily = a[this.j.fontFamily];
        b.size = a[this.j.size];
        b.color = a[this.j.color];
        b.bold = a[this.j.bold];
        b.italic = a[this.j.italic];
        b.bk = a[this.j.bk];
        b.Yj = a[this.j.Yj];
        b.Zj = a[this.j.Zj];
        b.strike = a[this.j.strike];
        return b
    };
    function sg() {
        this.j = G(pg)
    }
    sg.prototype.load = function (a) {
        if (!a)
            return new Uf;
        var b = new Uf,
        c = (new rg).load(a[this.j.fb]);
        b.rh = c.clone();
        a = (new qg).load(a[this.j.Kj]);
        b.Sg = a.clone();
        return b
    };
    var tg = G({
        title: Object.assign({
            _: "t"
        }, pg),
        Mh: Object.assign({
            _: "nt"
        }, pg),
        zh: Object.assign({
            _: "bt"
        }, pg)
    });
    function ug() {
        this.j = tg;
        this.Ur = new sg;
        new rg
    }
    ug.prototype.load = function (a) {
        var b = {};
        try {
            b.title = vg(this, a, this.j.title),
            b.Mh = vg(this, a, this.j.Mh),
            b.zh = vg(this, a, this.j.zh)
        } catch (c) {
            Na("cannot load FontStyles")
        }
        return b
    };
    function vg(a, b, c) {
        a = a.Ur.load(b[c]);
        b = a.fb();
        b.fontFamily = b.fontFamily || "Arial";
        b.size = b.size || 15;
        return a
    };
    function wg() {}
    e = wg.prototype;
    e.Ee = null;
    e.Fe = null;
    e.start = function (a, b, c, d) {
        A(!this.Ee && !this.Fe && 0 < b.length);
        b = pb(b[0], 8);
        var f = {};
        f.family = a;
        f.bold = !0 === c;
        f.italic = !0 === d;
        this.Ee = new xg(f, "arial,'URW Gothic L',sans-serif", b);
        this.Fe = new xg(f, "Georgia,'Century Schoolbook L',serif", b)
    };
    e.finish = function () {
        A(this.Ee && this.Fe);
        this.Ee.dd();
        this.Ee = null;
        this.Fe.dd();
        this.Fe = null
    };
    e.check = function () {
        A(this.Ee && this.Fe);
        return yg(this.Ee) || yg(this.Fe)
    };
    function xg(a, b, c) {
        var d = Fb(a, "family", "");
        d = String(d);
        for (var f = ['"'], g = 0; g < d.length; g++) {
            var h = d.charAt(g),
            l = h.charCodeAt(0),
            u = g + 1,
            t;
            if (!(t = nb[h])) {
                if (!(31 < l && 127 > l))
                    if (l = h, l in ob)
                        h = ob[l];
                    else if (l in nb)
                        h = ob[l] = nb[l];
                    else {
                        t = l.charCodeAt(0);
                        if (31 < t && 127 > t)
                            h = l;
                        else {
                            if (256 > t) {
                                if (h = "\\x", 16 > t || 256 < t)
                                    h += "0"
                            } else
                                h = "\\u", 4096 > t && (h += "0");
                            h += t.toString(16).toUpperCase()
                        }
                        h = ob[l] = h
                    }
                t = h
            }
            f[u] = t
        }
        f.push('"');
        d = f.join("");
        this.Ce = document.createElement("span");
        this.Ce.innerHTML = c;
        O(this.Ce, {
            position: "absolute",
            top: "-999px",
            left: "-999px",
            fontSize: "100px",
            fontFamily: b,
            fontWeight: Fb(a, "bold", !1) ? "bold" : "normal",
            fontStyle: Fb(a, "italic", !1) ? "italic" : "normal",
            opacity: "0"
        });
        Wc(document.body, this.Ce);
        this.Yo = Oe(this.Ce).width;
        O(this.Ce, "fontFamily", d + "," + b)
    }
    xg.prototype.dd = function () {
        Zc(this.Ce)
    };
    function yg(a) {
        return !!a.Yo && Oe(a.Ce).width != a.Yo
    };
    var zg = {};
    function Ag(a, b, c) {
        var d = void 0;
        c = c || b;
        var f = "",
        g = !1,
        h = !1;
        q(a) ? f = a : (f = Fb(a, "family", ""), g = Fb(a, "bold", !1), h = Fb(a, "italic", !1));
        A(0 < f.length);
        f = f.replace(/^"|"$/g, "");
        if (f in zg)
            (zg[f] ? b : c)();
        else {
            d = d || 5E3;
            var l = new wg;
            l.start(f, "0", g, h);
            var u = x(),
            t = setInterval(function () {
                var f = !1,
                g = !1;
                l.check() ? g = f = !0 : x() - u > d && (f = !0, g = !1);
                f && (clearInterval(t), l.finish(), g ? b() : c && (Na("can't preload font " + (a && a.family)), c()))
            }, 50)
        }
    }
    function Bg(a, b) {
        if (0 == a.length)
            b();
        else
            for (var c = 0, d = k(a), f = d.next(); !f.done; f = d.next())
                Ag(f.value, function () {
                    ++c;
                    c == a.length && b()
                }, function () {
                    ++c;
                    c == a.length && b()
                })
    };
    function Cg(a) {
        this.ni = a;
        this.i = a.R;
        this.Nn = {};
        this.Ir = a.cq;
        this.Mr = new gg(a.cq);
        this.de = a.Xl || "";
        this.fa = null;
        this.rn = this.i.accessibilityModeEnabled() && a.Sp ? a.Sp : null
    }
    Cg.prototype.Bh = function () {
        return this.fa
    };
    Cg.prototype.load = function (a, b, c, d, f, g) {
        var h = this,
        l = G(kg),
        u = c[l.settings],
        t = G(Qf),
        D = (new ug).load(u[l.settings.nu]),
        z = c[t.fonts];
        this.Nn = c[t.fu];
        Dg(c);
        c = u[l.settings.cd];
        l = u[l.settings.Nu];
        f = Eg(this, R && !f ? l : c);
        this.rn && this.rn.Td(f);
        this.fa = Fg(this, a, b, d, D, f);
        this.fa.disabled = !0;
        b ? Gg(b).then(function () {
            return Hg(h, z, g)
        }) : Hg(this, z, g)
    };
    function Dg(a) {
        if (!lg) {
            var b = G(kg);
            lg = new Xf(a[b.settings][b.settings.Tq])
        }
    }
    function Fg(a, b, c, d, f, g) {
        var h = a.Nn;
        h.__title_font_family__ = f.title.fb().fontFamily;
        h.__title_font_weight__ = f.title.fb().bold ? "bold" : "normal";
        h.__title_font_italic__ = f.title.fb().italic ? "italic" : "normal";
        h.__normal_title_font_family__ = f.Mh.fb().fontFamily;
        h.__normal_title_font_weight__ = f.Mh.fb().bold ? "bold" : "normal";
        h.__normal_title_font_italic__ = f.Mh.fb().italic ? "italic" : "normal";
        h.__bold_title_font_family__ = f.zh.fb().fontFamily;
        h.__bold_title_font_weight__ = f.zh.fb().bold ? "bold" : "normal";
        h.__bold_title_font_italic__ =
            f.zh.fb().italic ? "italic" : "normal";
        h.__interaction_id__ = b;
        c && (h.__slide_background__ = "url(" + c + ")");
        a = a.ni;
        return (d && a.Tp ? a.Tp : R && a.Lq ? a.Lq : P && a.er ? a.er : a.gu).Td(g, h)
    }
    function Gg(a) {
        return new Promise(function (b, c) {
            var d = new Image;
            d.onload = b;
            d.onerror = c;
            d.src = a
        })
    }
    function Hg(a, b, c) {
        for (var d = "", f = [], g = k(Object.keys(b)), h = g.next(); !h.done; h = g.next()) {
            h = h.value;
            for (var l = [], u = k(b[h]), t = u.next(); !t.done; t = u.next())
                l.push('url("' + Yf(a.de + t.value) + '")');
            d += '@font-face { font-family: "' + h + '"; src: ' + l.join(",") + "; format('embedded-opentype');}";
            f.push(h)
        }
        id(d);
        Bg(f, c)
    }
    function Eg(a, b) {
        b = jg(b, a.Ir).colors();
        a = a.Mr;
        for (var c = {}, d = k(Object.keys(a.Il)), f = d.next(); !f.done; f = d.next()) {
            f = f.value;
            for (var g = k(Object.keys(a.Il[f])), h = g.next(); !h.done; h = g.next()) {
                var l = h.value;
                h = a.Il[f][l];
                if (!b.hasOwnProperty(f) || !b[f].hasOwnProperty(l))
                    throw Error("Scheme have not required property " + h);
                l = b[f][l];
                c[h] = eg(l);
                if (h = ("description.background.color" == h ? {
                        name: "transparent.description.background.color",
                        value: dg(eg(l))
                    }
                         : "interactivity.background.color" == h ? {
                        name: "transparent.interactivity.background.color",
                        value: dg(eg(l))
                    }
                         : null) || ("glossary.alphabet.background" == h ? {
                        name: "glossary.alphabet.background.gradient",
                        value: fg(l)
                    }
                         : null) || ("tabs.background.color" == h ? {
                        name: "tabs.background.color.gradient",
                        value: fg(l)
                    }
                         : "hovered.tabs.background.color" == h ? {
                        name: "hovered.tabs.background.color.gradient",
                        value: fg(l)
                    }
                         : null) || ("panel.background.color" == h ? {
                        name: "panel.background.color.gradient",
                        value: fg(l)
                    }
                         : "hovered.panel.background.color" == h ? {
                        name: "hovered.panel.background.color.gradient",
                        value: fg(l)
                    }
                         : "selected.panel.background.color" ==
                        h ? {
                        name: "selected.panel.background.color.gradient",
                        value: fg(l)
                    }
                         : null))
                    c[h.name] = h.value
            }
        }
        return c
    };
    function Ig(a) {
        var b = a.data,
        c = a.ag,
        d = a.eg,
        f = a.ig,
        g = a.R;
        this.sa = a.sa;
        this.data = b;
        this.ag = c;
        this.eg = d;
        this.ig = f;
        this.R = g
    };
    var Jg = ["playing", "buffering"];
    function Kg(a) {
        M.call(this);
        this.U = a;
        this.we = this.bf = !1;
        this.Qa = Lg(this);
        H(this, a, "play", this.Rc, this);
        H(this, a, "playing", this.Rc, this);
        H(this, a, "pause", this.Rc, this);
        H(this, a, "seeked", this.Ds, this);
        H(this, a, "ended", this.Rc, this);
        H(this, a, "waiting", this.Rc, this);
        H(this, a, "timeupdate", this.Cs, this);
        Mg(this) && this.U.readyState >= HTMLMediaElement.HAVE_METADATA || H(this, a, "loadedmetadata", this.Bs, this);
        this.Jd = N(this);
        this.cp = N(this);
        this.Ol = N(this);
        this.Go = N(this);
        this.Eo = N(this);
        this.sk = this.Vg = this.Vi =
            this.uk = 0;
        this.tl = NaN
    }
    m(Kg, M);
    e = Kg.prototype;
    e.state = function () {
        return this.Qa
    };
    e.play = function () {
        var a = this.U.play();
        a && a.catch(function (a) {
            return window.console.log(a)
        })
    };
    e.pause = function () {
        this.U.pause()
    };
    e.reset = function () {
        this.pause();
        this.seek(0)
    };
    e.stop = function () {
        this.pause();
        this.seek(this.duration());
        this.seek(0)
    };
    e.seek = function (a) {
        isNaN(this.U.duration) || (this.bf = !0, this.tl = x(), this.U.currentTime = a, this.Rc())
    };
    e.playing = function () {
        return 0 <= Jg.indexOf(this.Qa)
    };
    e.currentTime = function () {
        return this.U.currentTime
    };
    e.duration = function () {
        return this.U.duration || 0
    };
    e.volume = function () {
        return Mg(this) ? this.U.volume : 1
    };
    e.setVolume = function (a) {
        Q ? Ng(this, !a) : Mg(this) && (a = Kc(a, 0, 1), this.U.volume != a && (this.U.volume = a, this.Ol.c()))
    };
    e.muted = function () {
        return Mg(this) && this.U.muted
    };
    function Ng(a, b) {
        Mg(a) && a.U.muted != b && (a.U.muted = b, a.Go.c())
    }
    e.stateChangedEvent = function () {
        return this.Jd
    };
    e.Rc = function () {
        var a = this,
        b = this.Qa,
        c = Lg(this);
        b != c && ("playing" == c ? (this.we = !0, this.Vi = x(), this.Vg = this.currentTime(), this.uk = setInterval(function () {
                    var b = (x() - a.Vi) / 1E3 + a.Vg;
                    if (a.U.readyState < HTMLMediaElement.HAVE_FUTURE_DATA || b > a.currentTime() + .5)
                        a.bf = !0, a.sk = a.Vg + (x() - a.Vi) / 1E3, a.Rc()
                }, 50)) : (this.we = !1, clearInterval(this.uk)), this.Qa = c, this.Jd.c(b))
    };
    function Lg(a) {
        return a.U.error ? "error" : a.U.ended ? "ended" : a.U.paused ? "paused" : a.U.readyState < HTMLMediaElement.HAVE_FUTURE_DATA && 2 == a.U.networkState || a.bf ? "buffering" : "playing"
    }
    function Mg(a) {
        return !!a.U && !a.U.error && p(a.U.play)
    }
    e.Cs = function () {
        isNaN(this.tl) && this.bf && this.currentTime() >= this.sk && (this.bf = !1, this.Rc(), this.Vg = this.sk);
        this.cp.c()
    };
    e.Bs = function () {
        this.Eo.c()
    };
    e.Ds = function () {
        this.Vi = x();
        this.tl = NaN;
        this.Vg = this.currentTime();
        this.bf = !1;
        this.Rc()
    };
    e.ib = function () {
        this.U.src = "";
        clearInterval(this.uk)
    };
    function Og(a, b) {
        this.Dt = a;
        this.uh = b
    }
    Og.prototype.src = function () {
        return this.Dt
    };
    Og.prototype.type = function () {
        return this.uh
    };
    function Pg() {
        var a = document.createElement("AUDIO");
        a.setAttribute("preload", "metadata");
        return a
    }
    function Qg() {
        var a = document.createElement("VIDEO");
        a.setAttribute("preload", "metadata");
        qf && a.setAttribute("playsinline", "");
        return a
    }
    var Rg = [],
    Sg = [];
    if (window.ismediacreator)
        Rg = window.ismediacreator[0], Sg = window.ismediacreator[1];
    else if (document.body) {
        var Ug = function () {
            if (30 > Rg.length)
                for (var a = Rg.length; 30 > a; ++a) {
                    var b = Pg();
                    Tg(b, Rg)
                }
            if (30 > Sg.length)
                for (a = Sg.length; 30 > a; ++a)
                    b = Qg(), Tg(b, Sg)
        },
        Tg = function (a, b) {
            var c = a.play();
            c && c.catch(va);
            a.pause();
            b.push(a)
        };
        if (Ef) {
            var Vg = !1;
            document.body.addEventListener("touchstart", function () {
                Vg = !0
            });
            document.body.addEventListener("touchmove", function (a) {
                if (Q || !a.defaultPrevented)
                    Vg = !1
            });
            document.body.addEventListener("touchend",
                function (a) {
                !1 !== a.isTrusted && Vg && Ug()
            })
        } else
            C || Pb || document.body.addEventListener("mouseup", function () {
                Ug()
            });
        window.ismediacreator = [Rg, Sg]
    }
    function Wg(a, b) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (a.canPlayType && a.canPlayType(d.type()))
                return d.src()
        }
        return null
    };
    function Xg(a) {
        Kg.call(this, a)
    }
    m(Xg, Kg);
    function Yg(a) {
        M.call(this);
        this.ls = a;
        this.we = a.playing();
        this.ft = N(this);
        this.nt = N(this)
    }
    m(Yg, M);
    e = Yg.prototype;
    e.playing = function () {
        return this.we
    };
    e.ready = function () {
        return !0
    };
    e.stop = function () {
        this.ls.pause()
    };
    e.playbackStateChangedEvent = function () {
        return this.ft
    };
    e.readyEvent = function () {
        return this.nt
    };
    function Zg(a) {
        Kg.call(this, a);
        this.Np = a
    }
    m(Zg, Kg);
    Zg.prototype.videoWidth = function () {
        return this.Np.videoWidth
    };
    Zg.prototype.videoHeight = function () {
        return this.Np.videoHeight
    };
    function $g(a) {
        var b = Sg && Sg.length ? Sg.shift() : Qg();
        a && (a = Wg(b, a)) && (b.src = a);
        return new Zg(b)
    };
    function ah(a) {
        M.call(this);
        this.uf = a;
        this.rf = {};
        this.ii = N(this);
        this.ji = N(this);
        this.nk = N(this);
        this.nj = N(this);
        this.oj = N(this);
        this.Jl = N(this);
        I(this, this.uf.audioStartedEvent(), this.rs, this);
        I(this, this.uf.audioStartingEvent(), this.ss, this);
        I(this, this.uf.nk, this.qs, this);
        I(this, this.uf.videoStartedEvent(), this.Ys, this);
        I(this, this.uf.videoStartingEvent(), this.Zs, this);
        I(this, this.uf.Jl, this.Ti, this)
    }
    m(ah, M);
    e = ah.prototype;
    e.audioStartedEvent = function () {
        return this.ii
    };
    e.audioStartingEvent = function () {
        return this.ji
    };
    e.videoStartedEvent = function () {
        return this.nj
    };
    e.videoStartingEvent = function () {
        return this.oj
    };
    e.Hm = function () {
        for (var a in this.rf)
            if (this.rf.hasOwnProperty(a)) {
                var b = this.rf[a];
                b.playing() && b.stop()
            }
    };
    e.rs = function (a) {
        a = bh(this, a);
        this.ii.c(a)
    };
    e.qs = function (a) {
        a = bh(this, a);
        this.nk.c(a)
    };
    e.ss = function (a, b, c) {
        a = bh(this, a);
        this.ji.c(a, b, c)
    };
    e.Ys = function (a) {
        a = bh(this, a);
        this.nj.c(a)
    };
    e.Ti = function (a) {
        a = bh(this, a);
        this.Jl.c(a)
    };
    e.Zs = function (a, b, c) {
        a = bh(this, a);
        this.oj.c(a, b, c)
    };
    function bh(a, b) {
        var c = Aa(b) + "";
        c in a.rf || (b = new Yg(b), a.rf[c] = b);
        return a.rf[c]
    };
    function ch() {
        M.call(this);
        this.Dd = [];
        this.ii = N(this);
        this.ji = N(this);
        this.nk = N(this);
        this.nj = N(this);
        this.oj = N(this);
        this.Jl = N(this);
        this.Ol = N(this);
        this.rj = 1
    }
    m(ch, M);
    e = ch.prototype;
    e.audioStartedEvent = function () {
        return this.ii
    };
    e.audioStartingEvent = function () {
        return this.ji
    };
    e.videoStartedEvent = function () {
        return this.nj
    };
    e.videoStartingEvent = function () {
        return this.oj
    };
    function dh(a, b) {
        I(a, b.stateChangedEvent(), function () {
            a.ve(b)
        }, a);
        a.Dd.push(b);
        b.setVolume(a.rj)
    }
    function eh(a, b) {
        a.ee(b);
        b = a.Dd.indexOf(b);
        -1 != b && a.Dd.splice(b, 1)
    }
    e.deactivate = function () {
        fh(this)
    };
    e.Hm = function () {
        Ta(this.Dd, function (a) {
            a.pause()
        }, this)
    };
    function fh(a, b) {
        for (var c = 0; c < a.Dd.length; ++c) {
            var d = a.Dd[c];
            d == b || "paused" == d.Qa || d.pause()
        }
    }
    e.ve = function (a) {
        "playing" == a.state() && fh(this, a)
    };
    e.volume = function () {
        return this.rj
    };
    e.setVolume = function (a) {
        if (this.rj != a) {
            for (var b = 0; b < this.Dd.length; ++b)
                this.Dd[b].setVolume(a);
            this.rj = a;
            this.Ol.c()
        }
    };
    ch.prototype.setVolume = ch.prototype.setVolume;
    function gh(a, b) {
        window.scrollTo(a, b)
    }
    window.yPos = function () {
        return window.pageYOffset
    };
    window.scrollPageTo = gh;
    function hh() {
        var a = this;
        this.rp = new L;
        this.Ak = this.zg = 0;
        this.ij = !1;
        this.b = document.createElement("DIV");
        this.b.style.width = sf ? "100%" : "100vw";
        this.b.style.height = Q ? "50vh" : "100vh";
        this.b.style.position = "absolute";
        this.b.style.zIndex = "-1";
        this.b.style.top = "0";
        P && !R && (document.body.style.position = "fixed");
        var b = window;
        if (ef)
            try {
                b = window.top
            } catch (d) {}
        document.body.insertAdjacentElement("afterbegin", this.b);
        (new ResizeObserver(function () {
                Q && R ? setTimeout(function () {
                    ih(a)
                }, 100) : ih(a)
            })).observe(this.b);
        window.invalidatePlayerSize = va;
        window.setPlayerSize = va;
        window.removeResizeListeners = va;
        document.addEventListener("touchend", function (b) {
            0 == b.touches.length && (a.ij = !1, setTimeout(function () {
                    ih(a, !1, !1)
                }, 100))
        }, !0);
        document.addEventListener("touchstart", function (b) {
            1 == window.event.touches.length && (a.ij = !0);
            1 < b.touches.length && b.preventDefault()
        }, !0);
        var c = b.onresize;
        b.onresize = function () {
            c && c();
            ih(a)
        };
        b.onorientationchange = function () {
            var b = hd();
            b && P && (Q ? setTimeout(function () {
                    A(b).blur();
                    rf && ih(a)
                }, 800) :
                b.blur())
        };
        gf && window.frameElement && window.frameElement.setAttribute("scrolling", "no")
    }
    function ih(a, b, c) {
        function d(a, c) {
            if (b || t.zg != a || t.Ak != c) {
                var d = t.zg;
                t.zg = a;
                t.Ak = c;
                t.rp.c(t.zg, t.Ak);
                d != t.zg && Q && !t.ij && setTimeout(function () {
                    f(0, 0)
                }, 100)
            }
        }
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !0 : c;
        var f = gh;
        if (b || !a.ij) {
            var g = Q ? 2 * a.b.clientHeight : a.b.clientHeight;
            if (ef || !(lf && .7 > g / screen.height || ec && .7 > window.innerHeight / g)) {
                var h = 1,
                l = a.b.clientWidth;
                c && gf && window.frameElement && (l = 0, h = l / window.innerWidth);
                var u = window.innerHeight * h,
                t = a;
                d(l, u);
                c && gf && window.frameElement && setTimeout(function () {
                    l = A(window.frameElement).clientWidth;
                    h = l / window.innerWidth;
                    u = window.innerHeight * h;
                    d(l, u)
                }, 0)
            }
        }
    };
    function jh(a) {
        this.Ca = a.content;
        this.Jr = "" == a.contentHover ? a.content : a.contentHover;
        this.Lt = a.url;
        this.$c = a.width;
        this.Mc = a.height;
        this.Kt = a.ak;
        this.gs = a.language;
        this.Or = a.zj;
        this.Nr = a.yj;
        this.Pr = a.Aj;
        this.Qr = a.Bj
    }
    e = jh.prototype;
    e.content = function () {
        return this.Ca
    };
    e.contentHover = function () {
        return this.Jr
    };
    e.url = function () {
        return this.Lt
    };
    e.width = function () {
        return this.$c
    };
    e.height = function () {
        return this.Mc
    };
    e.ak = function () {
        return this.Kt
    };
    e.language = function () {
        return this.gs
    };
    e.zj = function () {
        return this.Or
    };
    e.yj = function () {
        return this.Nr
    };
    e.Aj = function () {
        return this.Pr
    };
    e.Bj = function () {
        return this.Qr
    };
    function kh(a, b, c) {
        return (a - 2 / 3 * c) / (b + c / 3)
    }
    function lh(a) {
        if (1 >= a)
            return a;
        a = 1 + (a - 1) / 3;
        if (C) {
            var b = 4;
            a = Math.round(a * Math.pow(10, b)) / Math.pow(10, b)
        }
        return a
    };
    var mh,
    nh = {
        Ev: "activedescendant",
        Lv: "atomic",
        Mv: "autocomplete",
        Pv: "busy",
        Sv: "checked",
        Tv: "colindex",
        Yv: "controls",
        cw: "describedby",
        fw: "disabled",
        hw: "dropeffect",
        kw: "expanded",
        lw: "flowto",
        ow: "grabbed",
        sw: "haspopup",
        uw: "hidden",
        xw: "invalid",
        yw: "label",
        zw: "labelledby",
        Aw: "level",
        Fw: "live",
        Qw: "multiline",
        Rw: "multiselectable",
        Yw: "orientation",
        Zw: "owns",
        $w: "posinset",
        cx: "pressed",
        jx: "readonly",
        lx: "relevant",
        mx: "required",
        rx: "rowindex",
        vx: "selected",
        yx: "setsize",
        Dx: "sort",
        Yx: "valuemax",
        Zx: "valuemin",
        $x: "valuenow",
        ay: "valuetext"
    };
    function oh(a, b, c, d, f) {
        this.Cb = a;
        this.Fr = b;
        this.Gr = c;
        this.qt = d;
        this.rt = f
    }
    e = oh.prototype;
    e.id = function () {
        return this.Cb
    };
    e.clientX = function () {
        return this.Fr
    };
    e.clientY = function () {
        return this.Gr
    };
    e.screenX = function () {
        return this.qt
    };
    e.screenY = function () {
        return this.rt
    };
    function ph(a, b) {
        this.td = a;
        this.Jt = b
    }
    function qh(a) {
        A(0 < a.length);
        for (var b = [], c = 0; c < a.length; ++c) {
            var d = a[c];
            b.push(new oh(d.pointerId, d.clientX, d.clientY, d.screenX, d.screenY))
        }
        return new ph(a[0], b)
    }
    ph.prototype.touches = function () {
        return this.Jt
    };
    ph.prototype.scale = function () {
        return this.td.scale
    };
    ph.prototype.rotation = function () {
        return this.td.rotation
    };
    var rh = ["touchstart", "mousedown"],
    sh = ["touchend", "mouseup"],
    th = ["touchmove", "mousemove"];
    var uh = {
        passive: !1
    },
    vh = {
        passive: !0
    };
    function wh(a, b) {
        this.Ca = a;
        this.Fc = {};
        this.ud = {};
        if (b)
            for (a = 0; a < b.length; ++a) {
                var c = b[a];
                this.ud[c.Dj()] = c
            }
    }
    e = wh.prototype;
    e.th = !1;
    e.Ii = -1;
    function xh(a) {
        var b = a.Ca;
        window.navigator.msPointerEnabled ? (Nd(b, "MSPointerDown", a.No, !1, a), Nd(b, "MSPointerUp", a.Po, !1, a), Nd(b, "MSPointerMove", a.Oo, !1, a)) : (Nd(b, rh, a.Xo, uh, a), Nd(b, sh, a.Vo, !1, a), Nd(b, th, a.Wo, uh, a))
    }
    e.Xo = function (a) {
        var b = a.Ja;
        A(b);
        if (!this.th || b.touches && 1 == b.touches.length)
            this.th = !0, a = yh(a), zh(this, "touchStart", a)
    };
    e.Vo = function (a) {
        if (this.th) {
            this.th = !1;
            var b = yh(a);
            if (zh(this, "touchEnd", b)) {
                if (b = a.target)
                    if ("TEXTAREA" == b.nodeName)
                        b = !0;
                    else {
                        var c = b.getAttribute("type");
                        b = "INPUT" == b.nodeName && (!c || "text" == c || "number" == c)
                    }
                else
                    b = !1;
                b || Ze(a.target) || $e(a.target) || a.preventDefault()
            }
        }
    };
    e.Wo = function (a) {
        !$e(a.target) && this.th && (a = yh(a), zh(this, "touchMove", a))
    };
    function yh(a) {
        a = a.Ja;
        A(a);
        if (p(window.TouchEvent) && a instanceof TouchEvent) {
            A(a.touches);
            for (var b = [], c = 0; c < a.touches.length; ++c) {
                var d = a.touches[c];
                b.push(new oh(d.identifier, d.clientX, d.clientY, d.screenX, d.screenY))
            }
            a = new ph(a, b)
        } else
            b = [], b.push(new oh(0, a.clientX, a.clientY, a.screenX, a.screenY)), a = new ph(a, b);
        return a
    }
    e.No = function (a) {
        var b = a.Ja;
        this.Fc[b.pointerId] = b;
        Ah(this, a);
        b = Ab(this.Fc);
        a = 1 == b.length ? "touchStart" : "touchMove";
        b = qh(b);
        zh(this, a, b)
    };
    e.Po = function (a) {
        var b = a.Ja;
        if (b.pointerId in this.Fc) {
            delete this.Fc[b.pointerId];
            Ah(this, a);
            var c = Ab(this.Fc);
            a = 0 < c.length ? "touchMove" : "touchEnd";
            0 == c.length && (c = [b]);
            c = qh(c);
            zh(this, a, c) && b.preventDefault()
        }
    };
    e.Oo = function (a) {
        var b = a.Ja;
        b.pointerId in this.Fc && (this.Fc[b.pointerId] = b, Ah(this, a), a = qh(Ab(this.Fc)), zh(this, "touchMove", a))
    };
    function Ah(a, b) {
        "touch" == b.pointerType && (0 < a.Ii && clearTimeout(a.Ii), a.Ii = setTimeout(Fa(a.es, a), 200))
    }
    e.es = function () {
        this.Fc = {};
        this.Ii = -1;
        for (var a in this.ud)
            this.ud.hasOwnProperty(a) && this.ud[a].Qf()
    };
    function zh(a, b, c) {
        var d = 0,
        f = null,
        g;
        for (g in a.ud)
            if (a.ud.hasOwnProperty(g)) {
                var h = a.ud[g],
                l = h.vq(b, c);
                l > d && (d = l, f = h)
            }
        return f ? (c.td.defaultPrevented ? f.Qf() : f.Wp(c), !0) : !1
    };
    function Bh() {
        this.zp = new L;
        this.Rr = new L;
        this.Ap = new L;
        this.yp = new L
    }
    e = Bh.prototype;
    e.sc = null;
    e.lj = !1;
    e.Dj = function () {
        return "tap"
    };
    e.vq = function (a, b) {
        if ("touchEnd" == a)
            return this.lj ? 1 : 0;
        var c = new E(b.touches()[0].clientX(), b.touches()[0].clientY());
        if ("touchStart" == a && 1 == b.touches().length)
            return this.sc = c, this.lj = !0, this.Ap.c(), uf || Nd(window, "scroll", this.Qf, !1, this), 0;
        if (!this.sc)
            return 0;
        50 >= Lc(c, this.sc) || this.lj && this.Qf();
        return 0
    };
    e.Wp = function (a) {
        A(this.sc);
        this.zp.c(this.sc.x, this.sc.y, a.td);
        var b = !1,
        c = x();
        this.xo && (A(this.wo), 1E3 > c - this.xo && 50 >= Lc(this.wo, this.sc) && (b = !0, this.Rr.c(this.sc.x, this.sc.y, a.td)));
        this.xo = b ? null : c;
        this.wo = this.sc
    };
    e.Qf = function () {
        Vd(window, "scroll", this.Qf, !1, this);
        this.lj = !1;
        this.yp.c()
    };
    var Ch = {
        Fv: "alert",
        Gv: "alertdialog",
        Jv: "application",
        Kv: "article",
        Nv: "banner",
        Qv: "button",
        Rv: "checkbox",
        Uv: "columnheader",
        Vv: "combobox",
        Wv: "complementary",
        Xv: "contentinfo",
        bw: "definition",
        dw: "dialog",
        ew: "directory",
        gw: "document",
        mw: "form",
        pw: "grid",
        qw: "gridcell",
        rw: "group",
        tw: "heading",
        vw: "img",
        Bw: "link",
        Cw: "list",
        Dw: "listbox",
        Ew: "listitem",
        Gw: "log",
        Hw: "main",
        Iw: "marquee",
        Jw: "math",
        Kw: "menu",
        Lw: "menubar",
        Mw: "menuitem",
        Nw: "menuitemcheckbox",
        Ow: "menuitemradio",
        Uw: "navigation",
        Ww: "note",
        Xw: "option",
        ax: "presentation",
        dx: "progressbar",
        hx: "radio",
        ix: "radiogroup",
        kx: "region",
        ox: "row",
        px: "rowgroup",
        qx: "rowheader",
        tx: "scrollbar",
        ux: "search",
        wx: "separator",
        Cx: "slider",
        Ex: "spinbutton",
        Lx: "status",
        Mx: "tab",
        Nx: "tablist",
        Ox: "tabpanel",
        Px: "textbox",
        Qx: "textinfo",
        Sx: "timer",
        Tx: "toolbar",
        Ux: "tooltip",
        Vx: "tree",
        Wx: "treegrid",
        Xx: "treeitem"
    };
    Jb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    function Dh(a, b) {
        b ? (A(Cb(Ch, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
    }
    function Eh(a, b, c) {
        w(c) && (c = c.join(" "));
        var d = Fh(b);
        "" === c || void 0 == c ? (mh || (mh = {
                    atomic: !1,
                    autocomplete: "none",
                    dropeffect: "none",
                    haspopup: !1,
                    live: "off",
                    multiline: !1,
                    multiselectable: !1,
                    orientation: "vertical",
                    readonly: !1,
                    relevant: "additions text",
                    required: !1,
                    sort: "none",
                    busy: !1,
                    disabled: !1,
                    hidden: !1,
                    invalid: "false"
                }), c = mh, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }
    function Gh(a, b) {
        a = a.getAttribute(Fh(b));
        return null == a || void 0 == a ? "" : String(a)
    }
    function Fh(a) {
        A(a, "ARIA attribute cannot be empty.");
        A(Cb(nh, a), "No such ARIA attribute " + a);
        return "aria-" + a
    };
    var Hh = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout;
    function Ih(a) {
        if (a.classList)
            return a.classList;
        a = a.className;
        return q(a) && a.match(/\S+/g) || []
    }
    function Jh(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = Ih(a), b = 0 <= Sa(a, b));
        return b
    }
    function Kh(a, b) {
        a.classList ? a.classList.add(b) : Jh(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    }
    function Lh(a, b) {
        a.classList ? a.classList.remove(b) : Jh(a, b) && (a.className = Ua(Ih(a), function (a) {
                return a != b
            }).join(" "))
    };
    function Mh(a, b) {
        a.className.baseVal = b
    }
    function Nh(a) {
        return q(a.className) ? Ih(a) : (a = a.className.baseVal, q(a) && a.match(/\S+/g) || [])
    }
    function Oh(a, b) {
        q(a.className) ? b = Jh(a, b) : (a = Nh(a), b = 0 <= Sa(a, b));
        return b
    }
    function Ph(a, b) {
        if (q(a.className))
            Kh(a, b);
        else if (!Oh(a, b)) {
            var c = a.className.baseVal;
            c += 0 < a.className.baseVal.length ? " " + b : b;
            Mh(a, c)
        }
    }
    function Qh(a, b) {
        q(a.className) ? Lh(a, b) : Oh(a, b) && Mh(a, Ua(Nh(a), function (a) {
                return a != b
            }).join(" "))
    };
    function Rh(a, b) {
        this.rk = a;
        this.Ck = b
    }
    Rh.prototype.className = function () {
        return this.Ck ? this.rk + "__" + this.Ck : this.rk
    };
    function Sh(a, b) {
        return a.className() + "_" + b
    }
    function Th(a, b, c) {
        return Sh(a, b) + "_" + c
    }
    function Uh(a, b, c) {
        b = Ih(b);
        var d = Th(a, c, "");
        return Wa(b, function (a) {
            return 0 == a.indexOf(d)
        })
    };
    function Vh(a) {
        L.call(this, a);
        this.$n = K(this, new L);
        this.ao = K(this, new L)
    }
    m(Vh, L);
    Vh.prototype.addHandler = function (a, b, c) {
        L.prototype.addHandler.call(this, a, b, c);
        this.$n.c()
    };
    Vh.prototype.removeHandler = function (a, b, c) {
        L.prototype.removeHandler.call(this, a, b, c);
        this.ao.c()
    };
    function Wh(a, b, c, d, f, g) {
        if (6 == arguments.length)
            this.setTransform(a, b, c, d, f, g);
        else {
            if (0 != arguments.length)
                throw Error("Insufficient matrix parameters");
            this.vb = this.yb = 1;
            this.xb = this.wb = this.Lb = this.Mb = 0
        }
    }
    e = Wh.prototype;
    e.clone = function () {
        return new Wh(this.vb, this.xb, this.wb, this.yb, this.Lb, this.Mb)
    };
    e.setTransform = function (a, b, c, d, f, g) {
        if (!(r(a) && r(b) && r(c) && r(d) && r(f) && r(g)))
            throw Error("Invalid transform parameters");
        this.vb = a;
        this.xb = b;
        this.wb = c;
        this.yb = d;
        this.Lb = f;
        this.Mb = g;
        return this
    };
    e.scale = function (a, b) {
        this.vb *= a;
        this.xb *= a;
        this.wb *= b;
        this.yb *= b;
        return this
    };
    e.translate = function (a, b) {
        this.Lb += a * this.vb + b * this.wb;
        this.Mb += a * this.xb + b * this.yb;
        return this
    };
    e.rotate = function (a, b, c) {
        var d = new Wh,
        f = Math.cos(a);
        a = Math.sin(a);
        b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f);
        c = this.vb;
        d = this.wb;
        this.vb = b.vb * c + b.xb * d;
        this.wb = b.wb * c + b.yb * d;
        this.Lb += b.Lb * c + b.Mb * d;
        c = this.xb;
        d = this.yb;
        this.xb = b.vb * c + b.xb * d;
        this.yb = b.wb * c + b.yb * d;
        this.Mb += b.Lb * c + b.Mb * d;
        return this
    };
    e.toString = function () {
        return "matrix(" + [this.vb, this.xb, this.wb, this.yb, this.Lb, this.Mb].join() + ")"
    };
    e.transform = function (a, b, c, d, f) {
        var g = b;
        for (b += 2 * f; g < b; ) {
            f = a[g++];
            var h = a[g++];
            c[d++] = f * this.vb + h * this.wb + this.Lb;
            c[d++] = f * this.xb + h * this.yb + this.Mb
        }
    };
    function Xh(a, b) {
        b = (new Wh).setTransform(1, 0, 0, 1, b, 0);
        Yh(Zh(), a, b)
    }
    function $h(a) {
        return Math.floor(1E6 * a) / 1E6
    }
    function ai(a) {
        var b = Math.min(a.boundingWidth / a.width, a.boundingHeight / a.height);
        !1 === a.Pd && (b = Math.min(b, 1));
        var c = Math.min(a.boundingWidth, a.width * b),
        d = Math.min(a.boundingHeight, a.height * b);
        return {
            width: c,
            height: d,
            scale: b,
            left: Math.floor((a.boundingWidth - c) / 2),
            top: Math.floor((a.boundingHeight - d) / 2)
        }
    }
    var bi = null;
    function Zh() {
        if (bi)
            return bi;
        for (var a = null, b = Rc("DIV"), c = [["transform", ci, {
                        transform: "transform",
                        transformOrigin: "transformOrigin"
                    }
                ], ["webkitTransform", ci, {
                        transform: "webkitTransform",
                        transformOrigin: "webkitTransformOrigin"
                    }
                ], ["msTransform", ci, {
                        transform: "msTransform",
                        transformOrigin: "msTransformOrigin"
                    }
                ], ["MozTransform", di, {
                        transform: "MozTransform",
                        transformOrigin: "MozTransformOrigin"
                    }
                ], ["OTransform", ci, {
                        transform: "OTransform",
                        transformOrigin: "OTransformOrigin"
                    }
                ]], d = 0; d < c.length; ++d)
            if (p(b.style[c[d][0]])) {
                a =
                    new c[d][1](c[d][2]);
                break
            }
        if (!a)
            throw Error("browser doesn't support css matrix transformation");
        return bi = a
    }
    function ci(a) {
        this.gp = a
    }
    function Yh(a, b, c) {
        b.style[a.gp.transform] = 1 == c.vb && 0 == c.xb && 0 == c.wb && 1 == c.yb && 0 == c.Lb && 0 == c.Mb ? "" : "matrix(" + a.Gl(c).join(",") + ")"
    }
    ci.prototype.Gl = function (a) {
        return [$h(a.vb), $h(a.xb), $h(a.wb), $h(a.yb), $h(a.Lb), $h(a.Mb)]
    };
    function di(a) {
        this.gp = a
    }
    y(di, ci);
    di.prototype.Gl = function (a) {
        a = di.Ab.Gl.call(this, a);
        a[4] += "px";
        a[5] += "px";
        return a
    };
    var ei,
    fi = [];
    if (window.MutationObserver) {
        ei = new MutationObserver(function (a) {
            a && a.forEach(function (a) {
                A(a);
                a = k(a.removedNodes);
                for (var b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    for (var d = k(fi), f = d.next(); !f.done; f = d.next())
                        f = f.value, ya(b.contains) && b.contains(f.displayObject()) && gi(f)
                }
            })
        });
        var hi = {
            subtree: !0,
            childList: !0
        };
        Hh(function () {
            ei.observe(document.body, hi)
        })
    }
    function S(a) {
        var b = a || {};
        a = b.o;
        var c = b.f,
        d = b.gm,
        f = b.Me,
        g = b.va,
        h = b.Uq,
        l = b.Up,
        u = b.sq,
        t = b.ek,
        D = b.Rh,
        z = b.tabIndex;
        b = b.Tt;
        M.call(this);
        var Z = this;
        f || (f = Rc(g || "DIV"));
        this.b = f;
        this.qg = [];
        if (a || c)
            a = a || new Rh(A(c), d), ii(this, a);
        this.kt = p(h) ? h : !0;
        this.kl = this.Mc = this.$c = this.Rl = this.Ql = this.Bk = void 0;
        this.Oa = 1;
        this.wp = {};
        this.Ml = null;
        t && (this.kp = ji(this));
        (this.ul = D) && this.Sj(!1);
        p(z) && ki(this, z);
        this.ef = K(this, new Vh(this));
        li(this, this.ef);
        u && I(this, this.ef, va);
        b && mi(this);
        this.Hd = N(this);
        if (!1 === l) {
            var Sb =
                !1;
            H(this, this.displayObject(), "mousedown", function () {
                Sb = !0
            });
            H(this, this.displayObject(), "focusout", function (a) {
                a.target == a.currentTarget && (Sb = !1)
            });
            H(this, this.displayObject(), "focusin", function (a) {
                Sb && a.target == a.currentTarget && Hh(function () {
                    Z.displayObject().blur()
                })
            })
        }
    }
    m(S, M);
    e = S.prototype;
    e.X = function () {
        return this.ef
    };
    e.focus = function () {
        this.b.focus()
    };
    e.getAttribute = function (a) {
        return this.b.getAttribute(a)
    };
    e.setAttribute = function (a, b) {
        this.b.setAttribute(a, b)
    };
    e.removeAttribute = function (a) {
        this.b.removeAttribute(a)
    };
    function ki(a, b) {
        a.Bk = b;
        a.setAttribute("tabindex", b + "")
    }
    function ni(a, b) {
        a.Ql = b;
        a.b.style.left = b + "px"
    }
    function oi(a, b) {
        a.Rl = b;
        a.b.style.top = b + "px"
    }
    e.move = function (a, b) {
        ni(this, a);
        oi(this, b)
    };
    e.resize = function (a, b) {
        p(a) && (this.b.style.width = Ne(a));
        p(b) && (this.b.style.height = Ne(b));
        p(a) && (this.$c = a);
        p(b) && (this.Mc = b);
        this.W(this.width(), this.height());
        this.Hd.c(this)
    };
    e.A = function (a) {
        p(this.Bk) && this.setAttribute("tabindex", (a ? this.Bk : -1) + "");
        a ? this.b.removeAttribute("disabled") : this.b.setAttribute("disabled", "")
    };
    e.l = function (a) {
        this.Ml = null;
        this.b.style.display = a ? "" : "none"
    };
    function pi(a, b) {
        T(a, "opacity", b);
        a.kl = b
    }
    e.a = function (a) {
        a = qi(a);
        Wc(this.b, a)
    };
    function ri(a, b, c) {
        K(a, b, void 0);
        null != c ? si(a, b, c) : a.a(b)
    }
    function si(a, b, c) {
        b = qi(b);
        a.b == b.parentNode && a.b.childNodes[c] == b || Yc(a.b, b, c)
    }
    e.removeChild = function (a) {
        a = qi(a);
        qi(a).parentNode == this.displayObject() && this.b.removeChild(a)
    };
    e.cg = function () {
        Xc(this.b)
    };
    e.ea = function (a) {
        cd(this.b, a)
    };
    e.$d = function (a) {
        this.b.innerHTML = a
    };
    function T(a, b, c) {
        O(a.b, b, c)
    }
    function ti(a, b) {
        for (var c = k(Object.keys(b)), d = c.next(); !d.done; d = c.next())
            d = d.value, O(a.b, d, b[d])
    }
    e.Qj = function (a) {
        this.b.id = a
    };
    function ui(a, b) {
        Eh(a.b, "label", b)
    }
    function vi(a, b) {
        w(b) && (b = b.join(" "));
        Dh(a.b, b)
    }
    function wi(a) {
        Eh(a.b, "hidden", !0)
    }
    function U(a, b) {
        b instanceof Rh || (b = new Rh(b, void 0));
        ii(a, b)
    }
    e.h = function (a, b) {
        var c = this;
        if (this.qg.length)
            for (var d = {}, f = k(this.qg), g = f.next(); !g.done; d = {
                    di: d.di,
                    ci: d.ci,
                    gk: d.gk
                }, g = f.next())
                g = g.value, q(b) ? (d.di = Uh(g, this.b, a), d.di && (delete this.wp[a], function (a) {
                        return function () {
                            Qh(c.b, A(a.di))
                        }
                    }
                        (d)()), b && (d.ci = Th(g, a, b), this.wp[a] = d.ci, function (a) {
                        return function () {
                            Ph(c.b, a.ci)
                        }
                    }
                        (d)())) : (d.gk = Sh(g, a), function (a) {
                    return function () {
                        var d = c.b,
                        f = a.gk;
                        b ? Kh(d, f) : Lh(d, f)
                    }
                }
                    (d)());
        else (function () {
                var d = c.b;
                b ? Kh(d, a) : Lh(d, a)
            })(), Na("component has no bemInfo")
    };
    e.Sj = function (a) {
        A(this.ul);
        Eh(this.b, "selected", a)
    };
    e.selected = function () {
        A(this.ul);
        return "true" == Gh(this.b, "selected")
    };
    function V(a, b) {
        a = A(a.qg[0]);
        A(!a.Ck);
        return new Rh(a.rk, b)
    }
    e.$ = function () {
        this.W(this.width(), this.height());
        this.Hd.c()
    };
    e.x = function () {
        return p(this.Ql) ? this.Ql : Me(this.displayObject()).x
    };
    e.y = function () {
        return p(this.Rl) ? this.Rl : Me(this.displayObject()).y
    };
    e.width = function () {
        if (p(this.$c))
            var a = this.$c;
        else
            a = this.b, a = a.tagName.toUpperCase() == "SVG".toString() ? a.width.baseVal.value : (new F(a.offsetWidth, a.offsetHeight)).width;
        return a
    };
    e.height = function () {
        if (p(this.Mc))
            var a = this.Mc;
        else
            a = this.b, a = a.tagName.toUpperCase() == "SVG".toString() ? a.height.baseVal.value : (new F(a.offsetWidth, a.offsetHeight)).height;
        return a
    };
    e.enabled = function () {
        return !this.b.hasAttribute("disabled")
    };
    e.visible = function () {
        return "boolean" == typeof this.Ml ? this.Ml : "none" != this.displayObject().style.display
    };
    e.opacity = function () {
        if (p(this.kl))
            return this.kl;
        var a = this.b;
        A(a);
        var b = a.style;
        a = "";
        "opacity" in b ? a = b.opacity : "MozOpacity" in b ? a = b.MozOpacity : "filter" in b && (b = b.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a = String(b[1] / 100));
        a = "" == a ? a : Number(a);
        return r(a) ? a : 1
    };
    e.displayObject = function () {
        return this.b
    };
    e.Sa = function (a, b) {
        b = void 0 === b ? "0 0" : b;
        var c = this.b,
        d = a || a;
        a = (new Wh).setTransform(a, 0, 0, d, 0, 0);
        Yh(Zh(), c, a);
        c = this.b;
        b = A(b);
        a: {
            a = ["transformOrigin", "webkitTransformOrigin", "msTransformOrigin", "MozTransformOrigin", "OTransformOrigin"];
            for (d = 0; d < a.length; ++d)
                if (p(c.style[a[d]])) {
                    a = a[d];
                    break a
                }
            throw Error("browser doesn't support css style " + a[0]);
        }
        O(c, a, b)
    };
    e.setParentScale = function (a) {
        this.Oa = a;
        this.Pg()
    };
    e.contains = function (a) {
        if (!a)
            return !1;
        a = qi(a);
        return bd(this.b, a)
    };
    e.ee = function (a) {
        (a instanceof Node || ya(a.displayObject)) && this.removeChild(a);
        M.prototype.ee.call(this, a)
    };
    function qi(a) {
        return a instanceof Node ? a : a.displayObject()
    }
    e.W = function () {};
    e.Pg = function () {};
    function ji(a) {
        var b = new ResizeObserver(function (b) {
            b = k(b);
            for (var c = b.next(); !c.done; c = b.next())
                c = c.value, p(c.target) && 0 < c.contentRect.width && 0 < c.contentRect.height && (a.W(a.b.clientWidth, a.b.clientHeight), a.Hd.c(a))
        });
        b.observe(a.b);
        return b
    }
    function li(a, b) {
        var c = K(a, new wh(a.b));
        I(a, b.$n, function () {
            1 == re(b) && xh(c);
            H(a, a.b, "mouseover", function () {
                a.enabled() && 0 < re(a.ef) && a.kk()
            });
            H(a, a.b, "mouseout", function () {
                gi(a)
            })
        });
        I(a, b.ao, function () {
            if (0 == re(b)) {
                var a = c.Ca;
                window.navigator.msPointerEnabled ? (Vd(a, "MSPointerDown", c.No, !1, c), Vd(a, "MSPointerUp", c.Po, !1, c), Vd(a, "MSPointerMove", c.Oo, !1, c)) : (Vd(a, rh, c.Xo, uh, c), Vd(a, sh, c.Vo, !1, c), Vd(a, th, c.Wo, uh, c))
            }
        });
        var d = new Bh;
        I(a, d.zp, function (b, c, d) {
            gi(a);
            a.enabled() && a.ef.c(a, d);
            a.kt && d.target ==
            a.b && d.preventDefault()
        });
        I(a, d.yp, function () {
            gi(a)
        });
        I(a, d.Ap, function () {
            a.enabled() && a.kk()
        });
        c.ud[d.Dj()] = d
    }
    function ii(a, b) {
        a.qg.push(b);
        Ph(a.b, b.className())
    }
    e.kk = function () {
        this.h("active", !0)
    };
    function gi(a) {
        a.h("active", !1)
    }
    function xi(a) {
        H(a, a.b, "keydown", a.xs, a)
    }
    e.xs = function (a) {
        document.activeElement != this.displayObject() || a.defaultPrevented || 13 != a.keyCode && 32 != a.keyCode || (a.preventDefault(), this.ef.c(this, void 0))
    };
    function mi(a) {
        ei ? fi.push(a) : C ? H(a, window, "DOMNodeRemoved", function (b) {
            bd(b.target, a.b) && gi(a)
        }) : H(a, a.b, "DOMNodeRemovedFromDocument", function () {
            gi(a)
        })
    }
    e.ib = function () {
        this.kp && this.kp.disconnect();
        var a = fi.indexOf(this);
        0 <= a && fi.splice(a, 1)
    };
    function yi(a) {
        var b = new Map;
        zi(a, b);
        Ai(a, b)
    }
    function Ai(a, b) {
        for (var c = a.attributes, d = c.length, f = 0; f < d; ++f) {
            var g = c.item(f),
            h = g.value;
            h.match(/^url\("?#/) && h.endsWith(")") && (h = g.value.substring(h.indexOf("#") + 1, h.search(/"\)|\)$/)), h = b.get(h), p(h) && (g.value = "url(#" + h + ")"))
        }
        a = k(ad(a));
        for (c = a.next(); !c.done; c = a.next())
            Ai(c.value, b)
    }
    function zi(a, b) {
        if (a.id && !b.has(a.id)) {
            var c = rb() + "-" + rb();
            b.set(a.id, c);
            a.id = c
        }
        a = k(ad(a));
        for (c = a.next(); !c.done; c = a.next())
            zi(c.value, b)
    };
    function Bi(a) {
        S.call(this, {
            f: "trial_banner"
        });
        this.qk = a;
        T(this, "position", "absolute");
        T(this, "cursor", "pointer");
        var b = new S({
            f: "banner-content"
        });
        b.$d(a.content());
        yi(b.displayObject());
        Eh(b.b, "hidden", !0);
        this.a(b);
        b = new S({
            f: "banner-content_hover"
        });
        b.$d(a.contentHover());
        yi(b.displayObject());
        Eh(b.b, "hidden", !0);
        this.a(b);
        a.url() && I(this, this.X(), this.ts, this);
        this.resize(a.width(), a.height())
    }
    m(Bi, S);
    Bi.prototype.ts = function () {
        var a = this.qk.url();
        if (vf) {
            var b = new Qe("openWindow", [a]);
            if (vf) {
                var c = b.uh;
                var d = b.yr;
                b = b.id();
                d = Ae(d, null);
                c = "isplayer://" + c + "/" + b + "/" + kc(d);
                Re(c)
            }
        } else {
            c = {};
            d = window;
            a instanceof wc ? b = a : (b = "undefined" != typeof a.href ? a.href : String(a), b instanceof wc || (b = "object" == typeof b && b.Tf ? b.Sf() : String(b), zc.test(b) || (b = "about:invalid#zClosurez"), b = Ac(b)));
            a = c.target || a.target;
            var f = [];
            for (g in c)
                switch (g) {
                case "width":
                case "height":
                case "top":
                case "left":
                    f.push(g + "=" + c[g]);
                    break;
                case "target":
                case "noopener":
                case "noreferrer":
                    break;
                default:
                    f.push(g + "=" + (c[g] ? 1 : 0))
                }
            var g = f.join(",");
            if ((Kb() || B("iPad") || B("iPod")) && d.navigator && d.navigator.standalone && a && "_self" != a) {
                f = (f = (g = d.document.createElement("A")) && g.ownerDocument) && (f.defaultView || f.parentWindow) || n;
                if ("undefined" != typeof f.HTMLAnchorElement && "undefined" != typeof f.Location && "undefined" != typeof f.Element) {
                    f = g && (g instanceof f.HTMLAnchorElement || !(g instanceof f.Location || g instanceof f.Element));
                    var h = za(g) ? g.constructor.displayName ||
                        g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g;
                    A(f, "Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLAnchorElement", h)
                }
                b instanceof wc || b instanceof wc || (b = "object" == typeof b && b.Tf ? b.Sf() : String(b), A(zc.test(b), "%s does not match the safe URL pattern", b) || (b = "about:invalid#zClosurez"), b = Ac(b));
                g.href = yc(b);
                g.setAttribute("target", a);
                c.noreferrer && g.setAttribute("rel", "noreferrer");
                c = document.createEvent("MouseEvent");
                c.initMouseEvent("click", !0, !0, d, 1);
                g.dispatchEvent(c)
            } else
                c.noreferrer ? (d = d.open("", a, g), b = yc(b), d && (Qb && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"), d.opener = null, c = new sc(tc, "b/12014412, meta tag with sanitized URL"), b = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + fb(b) + '">', Pa(vc(c), "must provide justification"), A(!/^[\s\xa0]*$/.test(vc(c)), "must provide non-empty justification"), c = Fc(b, null), d.document.write(Dc(c)), d.document.close())) : (d =
                        d.open(yc(b), a, g)) && c.noopener && (d.opener = null)
        }
    };
    var Ci = {
        Oj: {
            _: "si"
        }
    };
    function Di(a) {
        var b = G(Ci);
        this.tt = a[b.Oj]
    }
    Di.prototype.Oj = function () {
        return this.tt
    };
    function Ei(a, b) {
        this.fo = this.Ki = 0;
        this.nc = [];
        this.nf = a;
        this.Jk = b;
        this.kb = 0;
        this.Rb = [];
        this.qe = {}
    }
    function Fi(a, b) {
        return a.Jk && b == a.Ki - 1
    }
    function Gi(a, b) {
        return -1 != a.nc.indexOf(b)
    }
    Ei.prototype.lm = function () {
        return this.nf
    };
    function Hi(a, b) {
        for (var c in a.qe)
            if (a.qe.hasOwnProperty(c)) {
                var d = parseInt(c, 10);
                if (a.qe[d] == b)
                    return d
            }
        return null
    }
    function Ii(a, b, c) {
        c = void 0 === c ? !0 : c;
        Gi(a, b) || Na("Index '" + b + "' is not exists");
        a.kb = b;
        c && -1 == a.Rb.indexOf(b) && a.Rb.push(b)
    }
    function Ji(a, b) {
        b = a.Rb.indexOf(b);
        -1 == b || a.Rb.splice(b, 1)
    }
    function Ki(a) {
        var b = a.nc.indexOf(a.kb);
        return -1 == b ? a.nc[0] : b == a.fo - 1 ? null : a.nc[b + 1]
    }
    function Li(a) {
        var b = a.nc.indexOf(a.kb);
        return -1 == b || 0 == b ? null : a.nc[b - 1]
    }
    Ei.prototype.Nm = function () {
        this.Rb = []
    };
    function Mi(a, b, c) {
        this.fontFamily = a;
        this.bold = b;
        this.italic = c
    };
    function Ni(a, b) {
        this.uh = a;
        this.Cb = b
    }
    Ni.prototype.id = function () {
        return this.Cb
    };
    Ni.prototype.type = function () {
        return this.uh
    };
    function Oi(a, b, c) {
        Ni.call(this, "equation", a);
        this.dr = b;
        this.Ku = c
    }
    m(Oi, Ni);
    function Pi(a) {
        Qi();
        return Fc(a, null)
    }
    var Qi = va;
    function Ri(a, b, c) {
        w(b) || (b = [b]);
        var d = void 0,
        f = void 0;
        Ta(b, function (b) {
            var g = a.indexOf(b, c);
            0 <= g && (!p(d) || g < d) && (d = g, f = b)
        });
        return p(f) && p(d) ? new Si(f, d) : null
    }
    function Si(a, b) {
        this.nv = a;
        this.Mj = b
    };
    function Ti(a, b, c) {
        this.bo = a;
        this.ye = b;
        this.Ld = this.$b = null;
        this.Ug = c
    }
    e = Ti.prototype;
    e.text = function () {
        if (!this.$b)
            if (this.Ug.length) {
                this.$b = "";
                for (var a = k(this.Ug), b = a.next(); !b.done; b = a.next())
                    b = b.value, this.$b += q(b) ? b : " "
            } else {
                a: if (a = this.bo, b = "\r", 0 == a.length)
                    a = "";
                else {
                    null != b || (b = "");
                    var c = 0,
                    d = "",
                    f = a.length;
                    do {
                        var g = Ri(a, ["<p>", "<p "], c);
                        if (g && g.Mj > c) {
                            c = a.substr(c, g.Mj - c);
                            var h = Rc("DIV");
                            h.innerHTML = c;
                            d += (h.textContent || h.innerText || fd(h)) + b;
                            c = g.Mj
                        }
                        if (h = Ri(a, ["</p>", "</p >"], c)) {
                            g = h.Mj + h.nv.length - c;
                            var l = a.substr(c, g);
                            h = Rc("DIV");
                            h.innerHTML = l;
                            d += (h.textContent || h.innerText ||
                                fd(h)) + b;
                            c += g
                        } else {
                            h = Rc("DIV");
                            h.innerHTML = a.substr(c, f - c);
                            a = d + (h.textContent || h.innerText || fd(h));
                            break a
                        }
                    } while (c < f);
                    a = d
                }
                this.$b = a
            }
        return this.$b
    };
    e.textWithEquations = function (a) {
        if (!this.Ld) {
            for (var b = {}, c = k(this.ye), d = c.next(); !d.done; d = c.next())
                d = d.value, b[d.id()] = d;
            this.Ld = "";
            c = k(this.Ug);
            for (d = c.next(); !d.done; d = c.next())
                d = d.value, q(d) ? this.Ld += d : (d = b[d.id], this.Ld = d instanceof Oi ? this.Ld + (a || d.Ku) : this.Ld + " ")
        }
        return this.Ld
    };
    e.htmlText = function () {
        return this.bo
    };
    e.Re = function () {
        return !this.Ug.length && !this.ye.length
    };
    e.plainTextWithPlaceholders = function () {
        return this.Ug
    };
    e.Zd = function () {
        return this.ye
    };
    function Ui(a, b, c, d, f) {
        Ti.call(this, a, b, c);
        this.me = d;
        this.Kd = f
    }
    m(Ui, Ti);
    Ui.prototype.fonts = function () {
        return this.me
    };
    Ui.prototype.Xh = function () {
        return this.Kd
    };
    function Vi(a, b, c, d, f) {
        M.call(this);
        this.Cb = a;
        this.Da = b;
        this.sl = c;
        this.Ca = d;
        this.Sb = f
    }
    m(Vi, M);
    e = Vi.prototype;
    e.id = function () {
        return this.Cb
    };
    e.title = function () {
        return this.Da
    };
    e.zb = function () {
        return this.sl
    };
    e.content = function () {
        return this.Ca
    };
    e.audio = function () {
        return this.Sb
    };
    function Wi(a) {
        a = null === a.sl ? a.Da.text() : a.sl;
        return 1 == a.trim().length ? a.trim().replace("\u200b", "") : a
    }
    e.Ib = function () {
        this.Sb && this.Sb.Ib()
    };
    Vi.prototype.disableAutoPlaying = Vi.prototype.Ib;
    function Xi(a, b, c, d, f) {
        this.Cb = a;
        this.oe = null;
        this.J = [];
        this.qh = null;
        this.Pa = b;
        this.jt = c;
        this.At = d;
        this.kc = f;
        this.In = null
    }
    e = Xi.prototype;
    e.id = function () {
        return this.Cb
    };
    e.title = function () {
        return this.Pa.title()
    };
    e.interactionSize = function () {
        return new F(this.Pa.Uf(), this.Pa.Jh())
    };
    e.Fa = function () {
        return this.oe
    };
    e.content = function () {
        return this.J.slice()
    };
    e.summary = function () {
        return this.qh
    };
    e.settings = function () {
        return this.Pa
    };
    e.presentationSettings = function () {
        return this.jt
    };
    e.slideBackground = function () {
        return this.At
    };
    e.fillPanelsView = function () {
        return this.kc
    };
    e.cd = function () {
        return A(this.In)
    };
    function Yi(a, b, c) {
        M.call(this);
        this.De = c;
        this.kd = a;
        this.ce = b;
        this.Kr = G(Ci)
    }
    m(Yi, M);
    Yi.prototype.Ia = function () {
        return this.kd
    };
    Yi.prototype.activeItemIndex = function () {
        return this.ce
    };
    Yi.prototype.Wh = function () {
        return this.De
    };
    function Zi(a) {
        var b = {};
        b[a.Kr.Oj] = a.Ia();
        return b
    };
    var $i = {
        Ia: {
            _: "aid"
        },
        activeItemIndex: {
            _: "aii"
        },
        Wh: {
            _: "s"
        }
    };
    function aj() {
        M.call(this);
        this.j = G($i)
    }
    m(aj, M);
    aj.prototype.Sm = function (a) {
        var b = {};
        null === a.Ia() || (b[this.j.Ia] = a.Ia());
        null === a.activeItemIndex() || (b[this.j.activeItemIndex] = a.activeItemIndex());
        b[this.j.Wh] = a.Wh();
        return b
    };
    aj.prototype.load = function (a) {
        return new Yi(a[this.j.Ia] ? a[this.j.Ia] : null, a[this.j.activeItemIndex] ? a[this.j.activeItemIndex] : null, a[this.j.Wh])
    };
    function bj() {
        M.call(this);
        this.De = {};
        this.ce = this.kd = null;
        this.rl = !1;
        this.If = N(this);
        this.Ig = N(this);
        this.Jd = N(this);
        this.Wk = !1
    }
    m(bj, M);
    e = bj.prototype;
    e.maxScore = function (a) {
        a = a.Hj();
        var b = a.Ki;
        a.lm() && --b;
        a.Jk && --b;
        return b
    };
    e.awardedScore = function () {
        return Object.keys(this.De).length
    };
    e.awardedPercent = function (a) {
        return Math.round(this.awardedScore() / this.maxScore(a) * 1E4) / 1E4
    };
    e.isCompleted = function (a) {
        return this.awardedScore() == this.maxScore(a)
    };
    e.activeItemIndex = function () {
        return this.ce
    };
    e.state = function () {
        return new Yi(this.kd, this.ce, this.De)
    };
    e.restore = function (a) {
        this.kd = a.Ia();
        this.ce = a.activeItemIndex();
        this.De = a.Wh()
    };
    e.scoreChangedEvent = function () {
        return this.If
    };
    e.itemChangedEvent = function () {
        return this.Ig
    };
    e.stateChangedEvent = function () {
        return this.Jd
    };
    e.lock = function () {
        this.Wk = !0
    };
    e.unlock = function () {
        this.Wk = !1
    };
    function cj(a, b, c) {
        M.call(this);
        var d = this;
        this.Vb = a;
        this.mh = c;
        I(this, this.mh.ad(), function () {
            var a = d.Vb,
            b = d.mh;
            if (!a.Wk) {
                var c = b.Hj(),
                l = b.g.kb,
                u = c.Ki;
                c.lm() && (--l, --u);
                c.Jk && --u;
                0 <= l && l < u ? (a.ce = l, a.kd = b.Ia(), a.De[a.kd] || (a.De[a.kd] = !0, a.rl = !0, a.If.c())) : (a.kd = null, a.ce = null, a.rl || (a.rl = !0, a.If.c()));
                a.Ig.c();
                a.Jd.c()
            }
        })
    }
    m(cj, M);
    e = cj.prototype;
    e.maxScore = function () {
        return this.Vb.maxScore(this.mh)
    };
    e.awardedScore = function () {
        return this.Vb.awardedScore()
    };
    e.isCompleted = function () {
        return this.Vb.isCompleted(this.mh)
    };
    e.awardedPercent = function () {
        return this.Vb.awardedPercent(this.mh)
    };
    e.activeItemIndex = function () {
        return this.Vb.activeItemIndex()
    };
    e.state = function () {
        return this.Vb.state()
    };
    e.restore = function (a) {
        this.Vb.restore(a)
    };
    e.scoreChangedEvent = function () {
        return this.Vb.scoreChangedEvent()
    };
    e.itemChangedEvent = function () {
        return this.Vb.itemChangedEvent()
    };
    e.stateChangedEvent = function () {
        return this.Vb.stateChangedEvent()
    };
    function dj(a, b, c, d) {
        M.call(this);
        this.ga = b;
        this.m = c;
        this.tf = new cj(a, c, d);
        this.zl = new aj;
        this.If = N(this);
        this.Ig = N(this);
        this.Jd = N(this);
        I(this, this.tf.scoreChangedEvent(), this.Rs, this);
        I(this, this.tf.itemChangedEvent(), this.As, this);
        I(this, this.tf.stateChangedEvent(), this.Vs, this)
    }
    m(dj, M);
    e = dj.prototype;
    e.interaction = function () {
        return this.m
    };
    e.state = function () {
        var a = this.tf.state();
        return this.zl.Sm(a)
    };
    e.restore = function (a) {
        a = this.zl.load(a);
        this.tf.restore(a);
        null === a.Ia() || this.ga.setPlayerContext(Zi(a))
    };
    e.evaluation = function () {
        return this.tf
    };
    e.scoreChangedEvent = function () {
        return this.If
    };
    e.itemChangedEvent = function () {
        return this.Ig
    };
    e.stateChangedEvent = function () {
        return this.Jd
    };
    e.Rs = function () {
        this.If.c()
    };
    e.As = function () {
        this.Ig.c()
    };
    e.Vs = function () {
        this.Jd.c()
    };
    function ej(a, b, c) {
        this.aa = a;
        this.G = b;
        this.ra = A(a.Rn);
        this.ds = c
    }
    e = ej.prototype;
    e.isCompleted = function () {
        return this.ds.evaluation().isCompleted()
    };
    e.isNextAvailable = function () {
        return this.ra.M.isNextAvailable()
    };
    e.isPrevAvailable = function () {
        return this.ra.M.isPrevAvailable()
    };
    e.invalidate = function () {
        this.aa.gd();
        this.G.gd()
    };
    e.prev = function () {
        this.ra.M.tj()
    };
    e.next = function () {
        this.ra.M.sj()
    };
    function fj(a) {
        var b = void 0 === a.Bc ? !1 : a.Bc;
        this.ct = a.Im;
        this.Dk = b
    }
    fj.prototype.Im = function () {
        return this.ct
    };
    fj.prototype.Bc = function () {
        return this.Dk
    };
    function gj(a) {
        this.Ao = a
    }
    gj.prototype.bd = function () {
        this.Ao && this.Ao.bd()
    };
    function hj(a) {
        var b = a.vy,
        c = a.toggle;
        S.call(this, {
            o: a.o,
            f: a.f,
            gm: a.gm,
            Uq: a.Uq,
            Up: a.Up,
            tabIndex: a.tabIndex,
            va: "BUTTON",
            Tt: !0,
            ek: a.ek
        });
        if (b) {
            a = b.top;
            var d = b.right,
            f = b.bottom;
            b = b.left;
            this.uc = new S;
            ri(this, this.uc);
            T(this.uc, "position", "absolute");
            T(this.uc, "top", a ? -a + "px" : 0);
            T(this.uc, "right", d ? -d + "px" : 0);
            T(this.uc, "bottom", f ? -f + "px" : 0);
            T(this.uc, "left", b ? -b + "px" : 0)
        }
        if (this.Fl = c)
            A(this.Fl), Eh(this.b, "pressed", !1);
        xi(this)
    }
    m(hj, S);
    e = hj.prototype;
    e.selected = function () {
        return !1
    };
    e.Sj = function () {};
    e.pressed = function () {
        A(this.Fl);
        return "true" == Gh(this.b, "pressed")
    };
    e.ea = function (a) {
        S.prototype.ea.call(this, a);
        this.uc && si(this, this.uc, 0)
    };
    e.$d = function (a) {
        S.prototype.$d.call(this, a);
        this.uc && si(this, this.uc, 0)
    };
    function ij(a) {
        this.Lf = a
    }
    ij.prototype.focus = function () {
        this.Lf && this.Lf.focus()
    };
    function jj(a, b) {
        this.Bl = a;
        this.js = b
    };
    function kj() {};
    function lj(a) {
        var b = a.Wd,
        c = a.fitToWindow,
        d = a.fillPanelsView;
        this.Tb = a.contentScale;
        this.ke = b;
        this.kc = d;
        this.jb = c;
        this.Ua = new F(0, 0)
    }
    function mj(a) {
        var b = nj(a);
        a = oj(a);
        return b.scale(a).round()
    }
    lj.prototype.Wm = function (a) {
        this.jb = a
    };
    function pj(a) {
        if (xf) {
            A(a.ke);
            var b = qj(a),
            c = ai({
                width: a.ke.width,
                height: a.ke.height,
                boundingWidth: a.Ua.width,
                boundingHeight: a.Ua.height,
                Pd: !0
            });
            b = ai({
                width: b.width,
                height: b.height,
                boundingWidth: c.width,
                boundingHeight: c.height,
                Pd: !0
            });
            return {
                Xd: new F(b.width, b.height),
                scale: b.scale * a.Tb,
                position: new E(b.left + c.left, b.top + c.top)
            }
        }
        if (R)
            return {
                Xd: a.Ua.clone(),
                scale: 1,
                position: new E(0, 0)
            };
        if (P)
            return a.La ? (c = a.Ua.clone(), b = nj(a), a = rj(a), a = ai({
                    width: b.width + a.width,
                    height: b.height + a.height,
                    boundingWidth: c.width,
                    boundingHeight: c.height,
                    Pd: !0
                }), a = {
                    Xd: new F(a.width, a.height),
                    scale: a.scale,
                    position: new E(a.left, a.top)
                }) : a = {
                Xd: a.Ua.clone(),
                scale: 1,
                position: new E(0, 0)
            },
        a;
        c = qj(a);
        c = ai({
            width: c.width,
            height: c.height,
            boundingWidth: a.Ua.width,
            boundingHeight: a.Ua.height,
            Pd: a.jb
        });
        return {
            Xd: new F(c.width, c.height),
            scale: c.scale * a.Tb
        }
    }
    function qj(a) {
        var b = nj(a).scale(a.Tb),
        c = rj(a).scale(a.Tb);
        if (a.kc || !a.jb)
            b = new F(b.width + c.width, b.height + c.height);
        else {
            var d = a.Ua;
            a = a.jb;
            b.width + c.width < d.width && b.height + c.height < d.height && a ? (d = b.width + c.width < d.width && b.height + c.height < d.height && a ? Math.min(kh(d.width, b.width, c.width), kh(d.height, b.height, c.height)) : ai({
                    width: b.width + c.width,
                    height: b.height + c.height,
                    boundingWidth: d.width,
                    boundingHeight: d.height,
                    Pd: !1
                }).scale, a = lh(d), c = c.clone().scale(a / d), b = new F(b.width + c.width, b.height + c.height)) :
            b = new F(b.width + c.width, b.height + c.height)
        }
        return b
    }
    function rj(a) {
        var b = sj(a) ? 24 : 0;
        a = sj(a) ? 68 : 0;
        return new F(b, a)
    }
    function tj(a) {
        if (a.kc || !a.jb)
            return pj(a).scale;
        a = oj(a);
        return lh(a)
    }
    function oj(a) {
        if (a.kc || !a.jb)
            return pj(a).scale;
        var b = pj(a),
        c = b.Xd;
        b = b.scale;
        var d = new F(sj(a) ? 24 : 0, sj(a) ? 68 : 0);
        a = nj(a);
        return 1 >= b ? b : Math.min(kh(c.width, a.width, d.width), kh(c.height, a.height, d.height))
    };
    function uj() {
        this.xk = {}
    }
    uj.prototype.register = function (a) {
        this.xk[a.name()] = a
    };
    uj.prototype.exec = function (a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d)
            c[d - 1] = arguments[d];
        A(a in this.xk, 'Command "' + a + '" not found');
        this.xk[a].exec(c)
    };
    uj.prototype.exec = uj.prototype.exec;
    function vj() {
        window["ispring.visuals.player.env.executors"] || (window["ispring.visuals.player.env.executors"] = {});
        return window["ispring.visuals.player.env.executors"]
    }
    function wj(a, b) {
        var c = vj();
        A(!c[a], 'Executor with id "' + a + '" already registered');
        c[a] = b
    }
    v("ispring.visuals.player.env.registerExecutor", wj, void 0);
    function xj(a) {
        var b = vj();
        A(b[a], 'Executor with id "' + a + '" not registered');
        delete b[a]
    }
    v("ispring.visuals.player.env.unregisterExecutor", xj, void 0);
    v("ispring.visuals.player.env.getExecutor", function (a) {
        var b = vj();
        A(a in b, 'Executor with id "' + a + '" not found');
        return b[a]
    }, void 0);
    function yj() {
        M.call(this);
        this.df = N(this);
        this.jb = !1;
        this.Tb = 1;
        this.yo = !0;
        this.jo = 960;
        this.ho = 540;
        this.Bg = 3;
        this.Da = "";
        this.Ho = this.Ep = !0;
        this.Jp = !1;
        this.vf = !0
    }
    m(yj, M);
    e = yj.prototype;
    e.contentScale = function () {
        return this.Tb
    };
    e.fitToWindow = function () {
        return this.jb
    };
    e.Wm = function (a) {
        var b = zj(this, "FIT_TO_WINDOW");
        this.jb = a;
        Aj(this, b)
    };
    e.Hq = function () {
        return this.yo
    };
    e.Uf = function () {
        return this.jo
    };
    function Bj(a, b) {
        var c = zj(a, "INTERACTIVITY_WIDTH");
        a.jo = b;
        Aj(a, c)
    }
    e.title = function () {
        return this.Da
    };
    e.Qb = function (a) {
        var b = zj(this, "INTERACTIVITY_TITLE");
        this.Da = a;
        Aj(this, b)
    };
    e.Ze = function () {
        return this.Ep
    };
    e.Yf = function () {
        return this.Ho
    };
    e.dk = function () {
        return this.Jp
    };
    e.Jh = function () {
        return this.ho
    };
    e.Ne = function () {
        return A(this.Bg)
    };
    e.Um = function (a) {
        var b = zj(this, "DESCRIPTION_ANIMATION_TYPE");
        this.Bg = a;
        Aj(this, b)
    };
    e.miniskinCustomizationEnabled = function () {
        return this.vf
    };
    function zj(a, b) {
        return {
            ae: b,
            oldValue: a.Hk(b)
        }
    }
    e.Hk = function (a) {
        switch (a) {
        case "CONTENT_SCALE":
            return this.contentScale();
        case "FIT_TO_WINDOW":
            return this.fitToWindow();
        case "INTERACTIVITY_WIDTH":
            return this.Uf();
        case "INTERACTIVITY_HEIGHT":
            return this.Jh();
        case "DESCRIPTION_ANIMATION_TYPE":
            return this.Ne();
        case "INTERACTIVITY_TITLE":
            return this.title();
        case "INTERACTIVITY_TITLE_ENABLED":
            return this.Ze();
        case "NAVIGATION_BUTTONS_ENABLED":
            return this.Yf();
        case "USE_PRESENTATION_BACKGROUND":
            return this.dk();
        default:
            Na("Invalid settingsType")
        }
    };
    function Aj(a, b) {
        a.df.c(b)
    };
    function Cj(a) {
        var b = a.Wd,
        c = a.document;
        a = a.tb;
        var d = c.settings();
        lj.call(this, {
            Wd: b,
            fillPanelsView: c.fillPanelsView(),
            fitToWindow: d.fitToWindow(),
            contentScale: d.contentScale()
        });
        this.m = c;
        this.Pa = d;
        this.La = a
    }
    m(Cj, lj);
    function nj(a) {
        return new F(a.Pa.Uf(), a.Pa.Jh())
    }
    Cj.prototype.Ul = function () {
        return sj(this) ? 68 : 0
    };
    Cj.prototype.fillPanelsView = function () {
        return this.kc
    };
    function sj(a) {
        var b = If && a.m.fillPanelsView();
        return a.La ? a.La.showPlayersPanels() : a.Pa.Yf() || b
    };
    function Dj(a) {
        S.call(this, {
            f: a
        });
        this.Ca = null
    }
    m(Dj, S);
    Dj.prototype.ua = function () {};
    Dj.prototype.uj = function () {};
    Dj.prototype.yh = function (a) {
        this.a(a);
        this.Ca = a
    };
    Dj.prototype.Ke = function () {};
    function Ej(a, b) {
        a.b.id || a.Qj(rb());
        Eh(b.b, "labelledby", a.b.id)
    };
    function Fj(a) {
        M.call(this);
        this.Nk = a;
        a = this.Nk.map(function (a) {
            return a.Oi
        });
        this.Oi = N(this, a)
    }
    m(Fj, M);
    Fj.prototype.Ra = function (a, b, c) {
        for (var d = k(this.Nk), f = d.next(); !f.done; f = d.next())
            if (f = f.value, f.mm(a))
                return f.Ra(a, b, c);
        return c || ""
    };
    Fj.prototype.messages = function () {
        throw Error("could not be called");
    };
    Fj.prototype.mm = function (a) {
        return !!this.Nk.find(function (b) {
            return b.mm(a)
        })
    };
    Fj.prototype.Ko = function (a, b) {
        this.Oi.c(a, b)
    };
    function Gj(a, b, c, d) {
        S.call(this, {
            va: c,
            f: void 0 === d ? "interactivity-navigation-panel" : d
        });
        var f = this;
        this.H = a;
        this.Ie = mg();
        this.Eb = b;
        a = this.ri();
        b = a.X;
        this.Xb = a.button;
        this.xf = b;
        a = this.ui();
        b = a.X;
        this.pc = a.button;
        this.Xg = b;
        te() && (window.ispringtesting = window.ispringtesting || {}, window.ispringtesting.gotoNextSlide = function () {
            f.xf.c();
            return f.Xb.enabled()
        })
    }
    m(Gj, S);
    Gj.prototype.gg = function (a) {
        this.pc.A(a)
    };
    Gj.prototype.fg = function (a) {
        this.Xb.A(a)
    };
    function Hj(a) {
        S.call(this, a);
        xi(this)
    }
    m(Hj, S);
    function Jj(a, b, c) {
        Gj.call(this, a, c || null, "SECTION");
        var d = this;
        vi(this, "region");
        ui(this, this.Ie.Ra("accessibleAriaLabelBottomPanel"));
        this.ki = Kj(this);
        this.a(this.ki);
        this.ki.a(this.Xb);
        this.ki.a(this.pc);
        this.Ub = new S({
            f: "items-list",
            va: "DETAILS"
        });
        vi(this.Ub, "navigation");
        a = new S({
            va: "SUMMARY"
        });
        a.ea(this.Ie.Ra("contentList"));
        vi(a, "heading");
        a.setAttribute("aria-level", "2");
        this.Ub.a(a);
        Ej(a, this.Ub);
        this.sn = N(this);
        a = new S({
            va: "UL"
        });
        [].concat(ca(b)).map(function (a) {
            a = k(a);
            var b = a.next().value;
            a = a.next().value;
            var c = new Hj({
                va: "LI",
                tabIndex: 0,
                o: V(d.Ub, "item")
            });
            c.ea(a);
            I(d, c.X(), function () {
                return d.sn.c(b)
            });
            return c
        }).forEach(a.a, a);
        this.Ub.a(a);
        this.a(this.Ub);
        H(this, this.Ub, "toggle", function () {
            return Lj(d.Ub)
        });
        Lj(this.Ub)
    }
    m(Jj, Gj);
    e = Jj.prototype;
    e.Pj = function (a) {
        this.Ub.l(a)
    };
    e.mf = function () {
        return {
            prev: this.Eb ? "PB_CONTROL_PANEL_PREV" : "prevButton",
            next: this.Eb ? "PB_CONTROL_PANEL_NEXT" : "nextButton"
        }
    };
    e.l = function (a) {
        this.pc.l(a);
        this.Xb.l(a)
    };
    e.ri = function () {
        var a = this.Eb ? new Fj([this.Ie, this.Eb]) : this.Ie;
        return this.oi(new Rh("page-controls", "next"), a, this.mf().next)
    };
    e.ui = function () {
        var a = this.Eb ? new Fj([this.Ie, this.Eb]) : this.Ie;
        return this.oi(new Rh("page-controls", "prev"), a, this.mf().prev)
    };
    e.oi = function (a, b, c) {
        a = this.ic(a, b.Ra(c));
        var d = N(this);
        I(this, a.X(), function () {
            return d.c()
        });
        H(this, a, "keypress", function (a) {
            13 != a.keyCode && 32 != a.keyCode || d.c()
        });
        return {
            button: a,
            X: d
        }
    };
    e.ic = function (a, b) {
        var c = K(this, new S({
                    va: "BUTTON"
                }));
        U(c, a);
        c.ea(b);
        return c
    };
    function Kj(a) {
        var b = new S({
            va: "NAV",
            f: "page-controls"
        });
        vi(b, "navigation");
        ui(b, a.Ie.Ra("accessibleAriaLabelNavigationButtons"));
        return b
    }
    function Lj(a) {
        var b = a.displayObject().hasAttribute("open");
        Eh(a.b, "expanded", b)
    };
    function Mj(a) {
        var b = 0;
        if (a = getComputedStyle(a))
            if (a = a.getPropertyValue("border-width"))
                b = parseInt(a, 10), b = isNaN(b) ? 0 : b;
        return b
    };
    function Nj(a) {
        S.call(this, {
            f: a
        });
        this.vc = [];
        this.Ca = this.na = null
    }
    m(Nj, S);
    e = Nj.prototype;
    e.ua = function (a) {
        this.a(a);
        this.vc.push(a)
    };
    e.uj = function (a) {
        this.a(a);
        this.na = a;
        this.vc.push(a)
    };
    e.yh = function (a) {
        this.a(a);
        this.Ca = a
    };
    e.Ke = function (a) {
        si(this, a, 0)
    };
    e.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        this.Ca && (a = Mj(this.displayObject()), a = this.height() - 2 * a, b = this.na ? this.na.height() : 0, this.Ca.resize(void 0, a - b));
        a = k(this.vc);
        for (b = a.next(); !b.done; b = a.next())
            b.value.$()
    };
    function Oj() {
        S.call(this, {
            f: "interactivity-content-container"
        });
        this.vc = []
    }
    m(Oj, S);
    Oj.prototype.ua = function (a) {
        this.a(a);
        this.vc.push(a)
    };
    Oj.prototype.Ke = function (a) {
        si(this, a, 0)
    };
    Oj.prototype.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        a = k(this.vc);
        for (b = a.next(); !b.done; b = a.next())
            b.value.$()
    };
    function Pj(a, b) {
        this.x = a;
        this.y = b
    }
    y(Pj, E);
    e = Pj.prototype;
    e.clone = function () {
        return new Pj(this.x, this.y)
    };
    e.scale = E.prototype.scale;
    e.normalize = function () {
        return this.scale(1 / Math.sqrt(this.x * this.x + this.y * this.y))
    };
    e.add = function (a) {
        this.x += a.x;
        this.y += a.y;
        return this
    };
    e.rotate = function (a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        var c = this.y * b + this.x * a;
        this.x = this.x * b - this.y * a;
        this.y = c;
        return this
    };
    function Qj(a) {
        var b = a.$j,
        c = a.Jj;
        a = a.xj;
        M.call(this);
        this.Ha = b;
        this.Wb = c;
        this.gb = a;
        this.xl = N(this);
        this.Kk = N(this);
        this.Dr = N(this);
        this.Pk = !1
    }
    m(Qj, M);
    e = Qj.prototype;
    e.show = function (a) {
        a ? this.kh() : this.Ei()
    };
    e.kh = function (a) {
        this.Dr.c();
        this.gb.Sa(this.Wb.Oa);
        this.Ha.appendChild(this.gb.displayObject());
        this.Tk(a);
        this.gb.$();
        this.xl.c()
    };
    e.Tk = function () {
        ti(this.gb, {
            top: 0,
            left: 0
        });
        var a = this.Wb.b.getBoundingClientRect(),
        b = this.gb.b.getBoundingClientRect();
        a = this.Zn(a, b);
        0 > a.top && Rj(this);
        this.gb.move(a.left, a.top)
    };
    e.Ei = function () {
        this.Pk || (this.Pk = !0, Zc(this.gb.displayObject()), this.Kk.c(), this.Pk = !1)
    };
    function Rj(a) {
        var b = a.Ha.getBoundingClientRect(),
        c = a.Ha.hasAttribute("data-height");
        return new He(b.left, b.top, a.Ha.hasAttribute("data-width") ? parseFloat(a.Ha.getAttribute("data-width")) : window.innerWidth, c ? parseFloat(a.Ha.getAttribute("data-height")) : window.innerHeight)
    }
    e.Zn = function (a, b) {
        var c = Rj(this);
        c = c.left + c.width > a.right + b.width ? a.right - b.left : a.left - b.right;
        var d = Rj(this);
        return {
            left: c,
            top: d.top + d.height > a.bottom + b.height ? a.bottom - b.top : a.top - b.bottom
        }
    };
    e.ib = function () {
        this.gb.displayObject().parentNode && this.Ei();
        M.prototype.ib.call(this)
    };
    function Sj(a) {
        Qj.call(this, {
            $j: a.$j,
            Jj: a.Jj,
            xj: a.xj
        });
        this.lk()
    }
    m(Sj, Qj);
    Sj.prototype.lk = function () {
        H(this, this.Wb, "mouseover", this.kh, this);
        H(this, this.Wb, "mouseout", this.Ei, this)
    };
    function Tj(a, b) {
        this.b = a;
        this.Fi = p(b) ? b : 0
    }
    Tj.prototype.uq = function (a, b) {
        var c = Mj(this.b);
        c = this.b.clientLeft - c + this.Fi;
        var d = c + this.b.clientWidth - 2 * this.Fi;
        b = b.width();
        a.x < c && (a.x = c);
        a.x + b > d && (a.x = Math.max(c, d - b - 1));
        return a
    };
    Tj.prototype.Xp = function (a) {
        this.Fi && T(a, "margin-right", this.Fi + "px")
    };
    function Uj(a) {
        Sj.call(this, a);
        this.It = a.timeout || 500;
        this.oo = !0;
        this.gj = null;
        this.Qi = new Pj(0, 0);
        this.K = a.qn || null;
        this.lp = a.$u || new Tj(this.Ha)
    }
    m(Uj, Sj);
    e = Uj.prototype;
    e.A = function (a) {
        a != this.oo && (a ? this.lk() : (this.ph(), this.En(this.Wb, document.body)), this.oo = a)
    };
    e.kh = function (a) {
        this.gb.enabled() && Sj.prototype.kh.call(this, a)
    };
    e.lk = function () {
        H(this, this.Wb, th, this.Hs, this);
        H(this, this.Wb, "mouseenter", this.Is, this);
        H(this, this.Wb, "mouseleave", this.ph, this);
        H(this, this.Wb, "scroll", this.ph, this);
        H(this, document.body, "wheel", this.ph, this);
        H(this, document.body, "mousedown", this.ph, this)
    };
    e.Zn = function () {
        var a = Vj(this.gb.displayObject()),
        b = this.Ci(Wj(this), new F(a.width, a.height));
        a = b.x;
        b = b.y;
        this.K && (1 == this.K.orientation() ? a -= this.K.u : b -= this.K.u);
        a = this.lp.uq(new Pj(a, b), this.gb);
        return {
            left: a.x,
            top: a.y
        }
    };
    e.Tk = function (a) {
        Sj.prototype.Tk.call(this, a);
        this.lp.Xp(this.gb)
    };
    e.Ci = function (a, b) {
        var c = a.top + this.Qi.y;
        return {
            x: a.left - 18 + this.Qi.x,
            y: c + 20 + b.height < this.Ha.clientHeight ? c + 20 : c - 20 - b.height
        }
    };
    e.Hs = function (a) {
        this.Qi = new Pj(a.offsetX, a.offsetY)
    };
    e.Is = function (a) {
        Xj(this, a)
    };
    e.ph = function () {
        Yj(this);
        this.gb.displayObject().parentNode && this.Ei()
    };
    function Xj(a, b) {
        a.Qi = new Pj(b.offsetX, b.offsetY);
        Yj(a);
        a.gj = setTimeout(function () {
            a.kh()
        }, a.It)
    }
    function Yj(a) {
        a.gj && (clearTimeout(a.gj), a.gj = null)
    }
    function Vj(a) {
        do {
            var b = a.offsetHeight;
            var c = a.offsetWidth;
            a = a.parentNode
        } while (a && !b && !c);
        return {
            width: c,
            height: b
        }
    }
    function Wj(a) {
        var b = a.Wb.displayObject();
        var c = 0;
        var d = 0;
        do
            c += b.offsetLeft || 0, d += b.offsetTop || 0, b = b.parentNode;
        while (b && a.Ha != b);
        b = c;
        a = Vj(a.Wb.displayObject());
        return new He(b, d, a.width, a.height)
    };
    function Zj(a) {
        S.call(this, {
            f: "interactivity-header"
        });
        this.qb = new S({
            o: V(this, "title")
        });
        this.a(this.qb);
        this.El = new S({
            f: "tooltip"
        });
        P || K(this, new Uj({
                $j: a.displayObject(),
                Jj: this.qb,
                xj: this.El
            }))
    }
    m(Zj, S);
    Zj.prototype.Qb = function (a) {
        this.qb.ea(a);
        this.El.ea(a);
        this.$()
    };
    Zj.prototype.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        a = this.qb.displayObject().scrollWidth > this.qb.displayObject().offsetWidth;
        this.El.A(a)
    };
    function ak(a) {
        S.call(this, {
            f: "layout"
        });
        this.Qj(a);
        (sf || tf) && U(this, "lte_ie10");
        fc && U(this, "ipad");
        Q && U(this, "ios");
        ec && !qf && U(this, "lte_ios10");
        lf && U(this, "android");
        dc && U(this, "firefox");
        jf && U(this, "chrome");
        !R && P && U(this, "tablet");
        this.vc = []
    }
    m(ak, S);
    ak.prototype.ua = function (a) {
        this.a(a);
        this.vc.push(a)
    };
    ak.prototype.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        a = k(this.vc);
        for (b = a.next(); !b.done; b = a.next())
            b.value.$()
    };
    function bk(a, b, c) {
        M.call(this);
        this.ra = null;
        this.ia = b;
        this.i = c;
        this.S = new ak(a);
        this.mg() || Eh(this.S.b, "hidden", !0);
        this.Z = this.Ln("interactivity");
        this.na = new Zj(this.Z);
        this.lb = new Oj;
        this.Hg = new S({
            f: "interactivity-content-overlay"
        });
        this.ma = new S({
            f: "interactivity-footer"
        });
        this.np = N(this);
        this.S.ua(this.Z)
    }
    m(bk, M);
    e = bk.prototype;
    e.contentScale = function () {
        return oj(this.ia)
    };
    e.$ = function () {
        this.S.$()
    };
    e.za = function () {
        return this.S
    };
    e.Qb = function (a) {
        this.na.Qb(a)
    };
    e.kg = function () {
        return this.lb
    };
    e.Dc = function (a) {
        this.na.l(a);
        this.Z.$()
    };
    e.Rj = function (a) {
        var b = this;
        this.ra = a;
        this.Qg();
        I(this, a.pe, function () {
            b.gd()
        });
        this.gd()
    };
    function ck(a, b, c) {
        a.S.h("filltype", b);
        a.S.h("fillpanels", c);
        sf || tf ? (b = function (b) {
            b = new S({
                o: V(a.Z, b)
            });
            ri(a.Z, b)
        }, b("topBorder"), b("rightBorder"), b("bottomBorder"), b("leftBorder")) : a.Z.h("with-border", !a.i.ta())
    }
    e.gd = function () {
        this.ra && this.Og()
    };
    e.resize = function (a, b) {
        this.S.resize(a, b);
        this.Ma();
        this.np.c()
    };
    e.move = function (a, b) {
        this.S.move(a, b)
    };
    e.setPresentationOutlineController = function () {};
    e.Tl = function (a) {
        this.S.ua(a)
    };
    e.Mm = function (a) {
        var b = this.S;
        b.removeChild(a);
        Ya(b.vc, a)
    };
    e.Ke = function (a) {
        this.lb.Ke(a)
    };
    e.deactivate = function () {};
    e.Ln = function (a) {
        return new Nj(a)
    };
    function W(a) {
        return A(a.ra)
    }
    e.Ma = function () {
        var a = tj(this.ia);
        this.ma.Sa(a);
        T(this.ma, "width", "calc(100% / " + a + ")");
        a = oj(this.ia);
        this.Z.Sa(a);
        var b = mj(this.ia).scale(1 / a);
        this.Z.resize(b.width, b.height);
        T(this.Z, "margin-bottom", -b.height * (1 - a) + "px")
    };
    e.Pj = function () {};
    function dk(a) {
        var b = a.s,
        c = a.tb,
        d = a.xq,
        f = a.R;
        bk.call(this, a.hd, a.fc, f);
        a = c ? c.messages() : null;
        this.B = new Jj(b, d, a ? new Xf(a) : void 0);
        this.wn = N(this);
        this.Za = null;
        this.ma.a(this.B);
        f.Kb() && U(this.S, "embedded")
    }
    m(dk, bk);
    e = dk.prototype;
    e.Ke = function (a) {
        null !== a && null === this.Za && (this.Za = a, this.wn.c())
    };
    e.Ah = function () {
        this.Z.yh(this.lb);
        this.S.ua(this.ma)
    };
    e.Tl = function () {};
    e.Mm = function () {};
    e.kg = function () {
        return new S
    };
    e.Oe = function (a) {
        this.ma.l(a);
        this.Ma()
    };
    e.Pj = function (a) {
        this.B.Pj(a)
    };
    e.Vm = function (a) {
        var b = this.B;
        a = a ? a : b.displayObject();
        Yc(a, b.ki.displayObject(), 0);
        Yc(a, b.Ub.displayObject(), 1);
        T(b, "display", a ? "none" : "")
    };
    e.mg = function () {
        return !0
    };
    e.Ln = function (a) {
        return new Dj(a)
    };
    e.Og = function () {
        this.B.gg(W(this).isPrevAvailable());
        this.B.fg(W(this).isNextAvailable())
    };
    e.Qg = function () {
        var a = this;
        I(this, this.B.Xg, function () {
            W(a).prev()
        });
        I(this, this.B.xf, function () {
            W(a).next()
        });
        I(this, this.B.sn, function (b) {
            W(a).Nd(b)
        })
    };
    e.Ma = function () {};
    function ek() {
        ae.call(this);
        this.Ta = fk;
        this.endTime = this.startTime = null
    }
    y(ek, ae);
    var fk = 0;
    ek.prototype.Gj = function () {
        return 1 == this.Ta
    };
    ek.prototype.Nq = function () {
        this.Ac("begin")
    };
    ek.prototype.Cm = function () {
        this.Ac("end")
    };
    ek.prototype.Ac = function (a) {
        this.dispatchEvent(a)
    };
    function gk(a, b, c) {
        vd.call(this);
        this.ja = null;
        this.pn = !1;
        this.Te = a;
        this.Jb = c;
        this.Ec = b || window;
        this.Rd = Fa(this.Vd, this)
    }
    y(gk, vd);
    e = gk.prototype;
    e.start = function () {
        this.stop();
        this.pn = !1;
        var a = hk(this),
        b = ik(this);
        a && !b && this.Ec.mozRequestAnimationFrame ? (this.ja = Nd(this.Ec, "MozBeforePaint", this.Rd), this.Ec.mozRequestAnimationFrame(null), this.pn = !0) : this.ja = a && b ? a.call(this.Ec, this.Rd) : this.Ec.setTimeout(rc(this.Rd), 20)
    };
    e.stop = function () {
        if (this.Qe()) {
            var a = hk(this),
            b = ik(this);
            a && !b && this.Ec.mozRequestAnimationFrame ? Wd(this.ja) : a && b ? b.call(this.Ec, this.ja) : this.Ec.clearTimeout(this.ja)
        }
        this.ja = null
    };
    e.im = function () {
        this.stop();
        this.Vd()
    };
    e.Qe = function () {
        return null != this.ja
    };
    e.Vd = function () {
        this.pn && this.ja && Wd(this.ja);
        this.ja = null;
        this.Te.call(this.Jb, x())
    };
    e.ya = function () {
        this.stop();
        gk.Ab.ya.call(this)
    };
    function hk(a) {
        a = a.Ec;
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
    }
    function ik(a) {
        a = a.Ec;
        return a.cancelAnimationFrame || a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
    };
    function jk(a, b, c) {
        vd.call(this);
        this.Te = a;
        this.fd = b || 0;
        this.Jb = c;
        this.Rd = Fa(this.Vd, this)
    }
    y(jk, vd);
    e = jk.prototype;
    e.ja = 0;
    e.ya = function () {
        jk.Ab.ya.call(this);
        this.stop();
        delete this.Te;
        delete this.Jb
    };
    e.start = function (a) {
        this.stop();
        this.ja = ze(this.Rd, p(a) ? a : this.fd)
    };
    e.stop = function () {
        this.Qe() && n.clearTimeout(this.ja);
        this.ja = 0
    };
    e.im = function () {
        this.stop();
        this.Vd()
    };
    e.Qe = function () {
        return 0 != this.ja
    };
    e.Vd = function () {
        this.ja = 0;
        this.Te && this.Te.call(this.Jb)
    };
    var kk = {},
    lk = null;
    function mk(a) {
        a = Aa(a);
        delete kk[a];
        Eb(kk) && lk && lk.stop()
    }
    function nk() {
        lk || (lk = new jk(function () {
                ok()
            }, 20));
        var a = lk;
        a.Qe() || a.start()
    }
    function ok() {
        var a = x();
        yb(kk, function (b) {
            pk(b, a)
        });
        Eb(kk) || nk()
    };
    function qk(a, b, c, d) {
        ek.call(this);
        if (!w(a) || !w(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.Vh = a;
        this.hu = b;
        this.duration = c;
        this.Rp = d;
        this.coords = [];
        this.cb = 0;
        this.wm = null
    }
    y(qk, ek);
    e = qk.prototype;
    e.play = function (a) {
        if (a || this.Ta == fk)
            this.cb = 0, this.coords = this.Vh;
        else if (this.Gj())
            return !1;
        mk(this);
        this.startTime = a = x();
        -1 == this.Ta && (this.startTime -= this.duration * this.cb);
        this.endTime = this.startTime + this.duration;
        this.wm = this.startTime;
        this.cb || this.Nq();
        this.Ac("play");
        -1 == this.Ta && this.Ac("resume");
        this.Ta = 1;
        var b = Aa(this);
        b in kk || (kk[b] = this);
        nk();
        pk(this, a);
        return !0
    };
    e.stop = function (a) {
        mk(this);
        this.Ta = fk;
        a && (this.cb = 1);
        rk(this, this.cb);
        this.Ac("stop");
        this.Cm()
    };
    e.pause = function () {
        this.Gj() && (mk(this), this.Ta = -1, this.Ac("pause"))
    };
    e.ya = function () {
        this.Ta == fk || this.stop(!1);
        this.Oq();
        qk.Ab.ya.call(this)
    };
    e.destroy = function () {
        this.dd()
    };
    function pk(a, b) {
        Oa(a.startTime);
        Oa(a.endTime);
        Oa(a.wm);
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.cb = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.cb && (a.cb = 1);
        a.wm = b;
        rk(a, a.cb);
        1 == a.cb ? (a.Ta = fk, mk(a), a.Ac("finish"), a.Cm()) : a.Gj() && a.Mq()
    }
    function rk(a, b) {
        ya(a.Rp) && (b = a.Rp(b));
        a.coords = Array(a.Vh.length);
        for (var c = 0; c < a.Vh.length; c++)
            a.coords[c] = (a.hu[c] - a.Vh[c]) * b + a.Vh[c]
    }
    e.Mq = function () {
        this.Ac("animate")
    };
    e.Oq = function () {
        this.Ac("destroy")
    };
    e.Ac = function (a) {
        this.dispatchEvent(new sk(a, this))
    };
    function sk(a, b) {
        zd.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.cb = b.cb;
        this.state = b.Ta
    }
    y(sk, zd);
    function tk(a, b, c, d) {
        qk.call(this, a, b, c, d);
        this.qd = new L;
        this.xn = new L;
        this.Y = new L
    }
    y(tk, qk);
    function uk(a, b) {
        a.md = b
    }
    e = tk.prototype;
    e.Wa = function () {
        return this.qd
    };
    e.jj = function (a) {
        this.md && this.md.Vp(a)
    };
    e.ep = function () {};
    e.Mq = function () {
        A(this.coords);
        this.jj(this.coords);
        this.xn.c()
    };
    e.Oq = function () {};
    e.Cm = function () {
        A(this.coords);
        this.jj(this.coords);
        this.Y.c()
    };
    e.Nq = function () {
        A(this.coords);
        this.qd.c();
        this.ep();
        this.jj(this.coords)
    };
    function vk(a, b) {
        this.ff = a;
        this.Wr = b
    }
    vk.prototype.Vp = function (a) {
        A(a);
        for (var b = 0; b < this.ff.length; ++b)
            this.Wr(this.ff[b], a[b])
    };
    function wk(a) {
        return .5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
    };
    function xk(a) {
        S.call(this, {
            f: "page-control"
        });
        var b = this;
        this.le = new S({
            o: V(this, "focus-container"),
            va: "BUTTON"
        });
        this.a(this.le);
        H(this, this.le, "focus", function () {
            return b.h("focused", !0)
        });
        H(this, this.le, "blur", function () {
            return b.h("focused", !1)
        });
        var c = new S({
            f: "navigation-arrow"
        });
        this.le.a(c);
        c.a(a);
        this.Bn = new S({
            f: "page-control-button"
        });
        C || (this.h("with-animation", !0), c.h("with-animation", !0));
        this.le.a(this.Bn)
    }
    m(xk, S);
    xk.prototype.A = function (a) {
        this.h("disable", !a);
        this.le.h("disable", !a);
        a || this.le.displayObject().blur()
    };
    xk.prototype.enabled = function () {
        var a = this.qg[0];
        A(a);
        a = a ? Sh(a, "disable") : "disable";
        return !Oh(this.b, a)
    };
    xk.prototype.ea = function (a) {
        this.Bn.ea(a)
    };
    function yk(a, b) {
        Gj.call(this, a, b || null, "DIV");
        a = new S({
            f: "page-controls"
        });
        a.a(this.pc);
        a.a(this.Xb);
        this.a(a);
        a = mg();
        a = this.Eb ? new Fj([a, this.Eb]) : a;
        I(this, a.Oi, this.Ko, this)
    }
    m(yk, Gj);
    e = yk.prototype;
    e.mf = function () {
        return {
            prev: "prevButton",
            next: "nextButton"
        }
    };
    e.l = function (a) {
        this.pc.l(a);
        this.Xb.l(a)
    };
    e.gg = function (a) {
        this.pc.A(a);
        zk(this.pc)
    };
    e.fg = function (a) {
        this.Xb.A(a);
        zk(this.Xb)
    };
    e.oi = function (a, b, c) {
        c = K(this, new xk(c));
        U(c, a);
        c.ea(b);
        return c
    };
    function zk(a) {
        var b = new vk([a], function (a, b) {
            return pi(a, b)
        }),
        c = a.enabled() ? 1 : .5;
        a = new tk([a.opacity()], [c], te() ? .001 : 200);
        a.md = b;
        a.play()
    }
    e.Ko = function (a, b) {
        "prevButton" === a && this.pc.ea(b);
        "nextButton" === a && this.Xb.ea(b)
    };
    e.ri = function () {
        var a = mg();
        a = this.Eb ? new Fj([a, this.Eb]) : a;
        var b = X(this.H, "navigation_next_arrow");
        return this.ic(new Rh("page-controls", "next"), b, a, this.mf().next)
    };
    e.ui = function () {
        var a = mg();
        a = this.Eb ? new Fj([a, this.Eb]) : a;
        var b = X(this.H, "navigation_prev_arrow");
        return this.ic(new Rh("page-controls", "prev"), b, a, this.mf().prev)
    };
    e.ic = function (a, b, c, d) {
        a = this.oi(a, c.Ra(d), b);
        var f = N(this);
        I(this, a.X(), function () {
            return f.c()
        });
        H(this, a, "keypress", function (a) {
            13 != a.keyCode && 32 != a.keyCode || f.c()
        });
        return {
            button: a,
            X: f
        }
    };
    function Ak(a, b) {
        b = b.messages();
        yk.call(this, a, b ? new Xf(b) : void 0)
    }
    m(Ak, yk);
    Ak.prototype.mf = function () {
        return {
            prev: "PB_CONTROL_PANEL_PREV",
            next: "PB_CONTROL_PANEL_NEXT"
        }
    };
    function Bk(a) {
        var b = a.s,
        c = a.fillPanelsView,
        d = a.tb;
        bk.call(this, a.hd, a.fc, a.R);
        U(this.S, "embedded");
        this.kc = c;
        this.La = d;
        this.ma.h("hidden", !c);
        this.B = null;
        c && (this.B = new Ak(b, d), this.ma.a(this.B));
        this.Je = new S({
            f: "zoom-top-layer"
        });
        this.Je.l(!1)
    }
    m(Bk, bk);
    e = Bk.prototype;
    e.Oe = function (a) {
        this.kc && this.ma.l(a)
    };
    e.Ah = function () {
        this.Z.uj(this.na);
        this.Z.yh(this.lb);
        this.Z.ua(this.Hg);
        this.Z.ua(this.Je);
        this.S.ua(this.ma)
    };
    e.Ma = function () {
        bk.prototype.Ma.call(this);
        if (this.La.showPlayersPanels()) {
            var a = tj(this.ia),
            b = 12 * a;
            T(this.S, "padding", 12 * a + "px " + b + "px 0 " + b + "px")
        }
    };
    e.kg = function () {
        return this.Je
    };
    e.mg = function () {
        return !1
    };
    e.Qg = function () {
        var a = this;
        this.B && (I(this, this.B.Xg, function () {
                W(a).prev()
            }), I(this, this.B.xf, function () {
                W(a).next()
            }))
    };
    e.Og = function () {
        this.B && (this.B.gg(W(this).isPrevAvailable()), this.B.fg(W(this).isNextAvailable()))
    };
    function Ck(a) {
        var b = a.s,
        c = a.Bc;
        bk.call(this, a.hd, a.fc, a.R);
        this.Dk = c;
        this.B = new yk(b);
        this.ma.a(this.B);
        this.Je = new S({
            f: "zoom-top-layer"
        });
        this.Je.l(!1)
    }
    m(Ck, bk);
    e = Ck.prototype;
    e.Ah = function () {
        this.Z.uj(this.na);
        this.Z.yh(this.lb);
        this.Z.ua(this.Hg);
        this.Z.ua(this.Je);
        this.S.ua(this.ma)
    };
    e.Tl = function (a) {
        Wc(document.body, a.displayObject())
    };
    e.Mm = function (a) {
        Zc(a.displayObject())
    };
    e.kg = function () {
        return this.Je
    };
    e.Oe = function (a) {
        this.ma.l(a);
        this.Ma()
    };
    e.mg = function () {
        return !1
    };
    e.Ma = function () {
        bk.prototype.Ma.call(this);
        if (this.ma.visible()) {
            var a = tj(this.ia),
            b = 12 * a;
            T(this.S, "padding", 12 * a + "px " + b + "px 0 " + b + "px")
        } else
            T(this.S, "padding", "0");
        a = !this.Dk && this.ma.visible() ? 8 * pj(this.ia).scale : 0;
        T(this.S, "border-radius", a + "px")
    };
    e.Qg = function () {
        var a = this;
        I(this, this.B.Xg, function () {
            W(a).prev()
        });
        I(this, this.B.xf, function () {
            W(a).next()
        })
    };
    e.Og = function () {
        this.B.gg(W(this).isPrevAvailable());
        this.B.fg(W(this).isNextAvailable())
    };
    function Dk(a, b, c, d) {
        bk.call(this, a, c, d);
        this.hc = new Nj("tablet-content-view");
        this.S.h("tablet", !0);
        this.B = new yk(b);
        this.ma.a(this.B)
    }
    m(Dk, bk);
    e = Dk.prototype;
    e.Oe = function (a) {
        this.B.l(a);
        this.Z.h("without-controls", !a);
        this.ma.l(a)
    };
    e.Ah = function () {
        this.Z.ua(this.hc);
        this.hc.uj(this.na);
        this.hc.yh(this.lb);
        this.hc.ua(this.Hg);
        this.S.ua(this.ma)
    };
    e.kg = function () {
        return this.hc
    };
    e.contentScale = function () {
        return Ek(this).scale
    };
    e.mg = function () {
        return !1
    };
    function Ek(a) {
        var b = Qa(a.ia, Cj),
        c = b.fillPanelsView(),
        d = b.Ul();
        a = new F(a.Z.width(), a.Z.height());
        c && (a = pj(b).Xd, a = new F(a.width, a.height - d));
        b = mj(b);
        var f = ai({
            width: b.width,
            height: b.height,
            boundingWidth: a.width,
            boundingHeight: a.height,
            Pd: !0
        });
        return {
            scale: f.scale,
            left: f.left,
            top: f.top,
            interactionSize: b,
            du: a,
            Ul: d,
            fillPanelsView: c
        }
    }
    e.Ma = function () {
        var a = Ek(this),
        b = a.scale,
        c = a.left,
        d = a.top,
        f = a.interactionSize,
        g = a.du,
        h = a.Ul;
        a.fillPanelsView && (this.Z.resize(g.width, g.height - h), this.Z.move(0, 0));
        this.hc.Sa(b);
        this.hc.resize(f.width, f.height);
        this.hc.move(c, d)
    };
    e.Qg = function () {
        var a = this;
        I(this, this.B.Xg, function () {
            W(a).prev()
        });
        I(this, this.B.xf, function () {
            W(a).next()
        })
    };
    e.Og = function () {
        this.B.gg(W(this).isPrevAvailable());
        this.B.fg(W(this).isNextAvailable())
    };
    function Fk(a, b, c) {
        M.call(this);
        var d = this;
        this.S = a;
        this.ra = null;
        this.Zk = N(this);
        a = b.vm();
        var f = a.vm;
        this.vo = a.Iu;
        this.Li = f;
        this.B = Gk(b);
        I(this, this.Li.X(), function () {
            return d.Zk.c()
        });
        this.Li.l(c)
    }
    m(Fk, M);
    Fk.prototype.Oe = function (a) {
        this.B.l(a)
    };
    Fk.prototype.Rj = function (a) {
        this.En(this.B);
        this.ra = a;
        I(this, this.B.Xg, function () {
            return a.prev()
        });
        I(this, this.B.xf, function () {
            return a.next()
        })
    };
    Fk.prototype.gd = function () {
        this.ra && (this.B.gg(this.ra.isPrevAvailable()), this.B.fg(this.ra.isNextAvailable()))
    };
    Fk.prototype.showOutline = function () {
        this.Li.l(!0)
    };
    function Hk(a, b, c) {
        Fk.call(this, a, b, c);
        this.bj = b.sidebar();
        this.bj.a(this.vo);
        this.bj.a(this.B);
        this.Li.h("vertical", !0);
        this.B.h("vertical", !0)
    }
    m(Hk, Fk);
    Hk.prototype.jq = function () {
        this.S.a(this.bj)
    };
    Hk.prototype.Wq = function () {
        this.S.removeChild(this.bj)
    };
    Hk.prototype.Fh = function () {
        return new Ge(0, 56, 0, 0)
    };
    function Ik(a) {
        var b = a.label,
        c = a.pv;
        S.call(this, {
            f: void 0 === a.f ? "back_to_app" : a.f
        });
        b && (a = new S({
                o: V(this, "text")
            }), a.ea(b), this.a(a));
        c && this.a(c);
        I(this, this.X(), function () {
            return ISPlayer.backToApp()
        })
    }
    m(Ik, S);
    function Jk(a) {
        Gj.call(this, a, null, "DIV", "interactivity-customized-navigation-panel");
        this.a(this.pc);
        this.a(this.Xb)
    }
    m(Jk, Gj);
    Jk.prototype.ui = function () {
        return this.ic("navigation-panel-prev-button", X(this.H, "nav_prev_button_\u0441ustomized"))
    };
    Jk.prototype.ri = function () {
        return this.ic("navigation-panel-next-button", X(this.H, "nav_next_button_\u0441ustomized"))
    };
    Jk.prototype.ic = function (a, b) {
        a = new S({
            f: a
        });
        a.a(b);
        return {
            button: a,
            X: a.X()
        }
    };
    function Kk(a) {
        Gj.call(this, a, null, "DIV");
        a = new S({
            f: "page-controls"
        });
        a.a(this.Xb);
        a.a(this.pc);
        a.a(new S({
                f: "clear"
            }));
        this.a(a)
    }
    m(Kk, Gj);
    Kk.prototype.ri = function () {
        return this.ic(new Rh("page-controls", "next"), X(this.H, "nav_next_button"))
    };
    Kk.prototype.ui = function () {
        return this.ic(new Rh("page-controls", "prev"), X(this.H, "nav_prev_button"))
    };
    Kk.prototype.ic = function (a, b) {
        var c = new S({
            f: "page-control"
        });
        U(c, a);
        c.a(b);
        a = c.X();
        return {
            button: c,
            X: a
        }
    };
    function Lk(a, b) {
        this.H = a;
        this.ge = b;
        this.$r = mg()
    }
    function Mk(a) {
        return a.ge ? new Ik({
            f: "back-to-app-customized",
            pv: X(a.H, "back_to_app")
        }) : new Ik({
            label: a.$r.Ra("backToAppButtonLabel")
        })
    }
    function Gk(a) {
        return a.ge ? new Jk(a.H) : new Kk(a.H)
    }
    Lk.prototype.nm = function (a) {
        var b = new S({
            f: "interactivity-header"
        });
        this.ge && U(b, "interactivity-header-customized");
        b.h("with-back-to-app-button", a);
        return b
    };
    Lk.prototype.title = function () {
        var a = new S({
            f: "interactivity-header",
            gm: "title"
        });
        this.ge && U(a, "interactivity-header-title-customized");
        return a
    };
    Lk.prototype.sidebar = function () {
        var a = new S({
            f: "interactivity-sidebar"
        });
        a.h("customized", this.ge);
        return a
    };
    Lk.prototype.vm = function () {
        var a = this.ge ? {
            jr: "items-list-toggle-wrapper-customized",
            hr: "items-list-toggle-customized",
            ir: X(this.H, "mobile_menu_customized")
        }
         : {
            jr: "items-list-toggle-wrapper",
            hr: "items-list-toggle",
            ir: X(this.H, "mobile_menu")
        },
        b = a.jr,
        c = a.ir;
        a = new S({
            f: a.hr
        });
        a.a(c);
        b = new S({
            f: b
        });
        b.a(a);
        return {
            Iu: b,
            vm: a
        }
    };
    function Nk(a, b, c) {
        Fk.call(this, a, b, c);
        this.na = b.nm(Cf);
        this.Da = b.title();
        Cf && this.na.a(Mk(b));
        this.na.a(this.Da);
        this.na.a(this.vo);
        a = new S({
            f: "interactivity-footer"
        });
        a.h("customized", b.ge);
        this.ma = a;
        this.ma.a(this.B)
    }
    m(Nk, Fk);
    e = Nk.prototype;
    e.jq = function () {
        this.S.a(this.na);
        this.S.a(this.ma)
    };
    e.Wq = function () {
        this.S.removeChild(this.na);
        this.S.removeChild(this.ma)
    };
    e.Qb = function (a) {
        this.Da.ea(a)
    };
    e.Dc = function (a) {
        this.Da.l(a);
        this.na.h("without-title", !a)
    };
    e.Fh = function () {
        return new Ge(46, 0, 62, 0)
    };
    function Ok(a) {
        S.apply(this, arguments)
    }
    m(Ok, S);
    e = Ok.prototype;
    e.Cq = function () {
        return N(this)
    };
    e.closeRequestEvent = function () {
        return N(this)
    };
    e.h = function () {};
    e.activate = function () {};
    e.P = function () {};
    e.deactivate = function () {};
    e.invalidate = function () {};
    e.close = function () {};
    function Pk(a) {
        S.call(this, {
            f: "interactivity-items-list"
        });
        var b = this;
        this.Fn = N(this);
        this.na = new S({
            o: V(this, "header")
        });
        this.qb = new S({
            o: V(this, "title")
        });
        this.na.a(this.qb);
        var c = new S({
            o: V(this, "close-button")
        });
        c.a(X(a, "mobile_close"));
        I(this, c.X(), function () {
            b.Fn.c()
        });
        this.na.a(c);
        this.a(this.na);
        this.D = new S({
            o: V(this, "items-container")
        });
        this.a(this.D)
    }
    m(Pk, S);
    Pk.prototype.Qb = function (a) {
        this.qb.ea(a)
    };
    Pk.prototype.Dc = function (a) {
        this.qb.l(a)
    };
    Pk.prototype.setPresentationOutlineController = function (a) {
        var b = new S({
            o: V(this, "outline-button")
        });
        b.ea("OUT");
        I(this, b.X(), function () {
            a.showOutline()
        });
        this.na.a(b)
    };
    function Qk(a) {
        bk.call(this, a.hd, a.fc, a.R);
        this.H = a.s;
        this.Za = this.ll = this.rd = null;
        this.Ji = !1;
        this.$s = N(this);
        this.Rg = a.Rq;
        this.Da = "";
        this.Fp = !1;
        this.wd = a.Em || new Ok;
        this.re = new Pk(a.s);
        I(this, this.re.Fn, this.Mi, this);
        a.Em && this.re.D.a(this.wd);
        var b = 2 == this.Rg || 3 == this.Rg;
        a.dm && this.lb.h("customized", !0);
        a = new Lk(a.s, a.dm);
        this.Uc = new Nk(this.Z, a, b);
        I(this, this.Uc.Zk, this.Mi, this);
        this.Kg = new Hk(this.Z, a, b);
        I(this, this.Kg.Zk, this.Mi, this)
    }
    m(Qk, bk);
    e = Qk.prototype;
    e.contentScale = function () {
        return 1
    };
    e.Ah = function () {
        this.Z.ua(this.lb);
        this.Z.ua(this.Hg)
    };
    e.setPresentationOutlineController = function (a) {
        this.ll = a;
        this.wd.h("presenter", !0);
        this.re.setPresentationOutlineController(a);
        1 == this.Rg && (this.Rg = 3, this.Uc.showOutline(), this.Kg.showOutline())
    };
    e.kg = function () {
        return this.S
    };
    e.Ke = function (a) {
        this.Za = a;
        this.rd && Rk(this, this.rd.Fh());
        si(this.za(), a, 0)
    };
    e.Oe = function () {};
    e.resize = function (a, b) {
        var c = a > b;
        this.lb.h("portrait", !c);
        this.lb.h("landscape", c);
        this.S.resize(a, b);
        this.lb.displayObject().scrollTop = 0;
        this.rd && this.rd.Wq();
        this.rd = c ? this.Kg : this.Uc;
        this.rd.jq();
        this.Za && Rk(this, (this.Ji ? this.Uc : this.rd).Fh())
    };
    e.Ma = function () {};
    e.Qb = function (a) {
        this.Da = a;
        this.Uc.Qb(a);
        this.re.Qb(a)
    };
    e.Dc = function (a) {
        this.Fp = a;
        this.Uc.Dc(a);
        this.re.Dc(a)
    };
    e.deactivate = function () {
        this.Za && (O(this.Za, "right", ""), O(this.Za, "top", ""))
    };
    e.mg = function () {
        return !1
    };
    e.Qg = function () {
        var a = this;
        this.Uc.Rj(W(this));
        this.Kg.Rj(W(this));
        I(this, W(this).ad(), function () {
            W(a).Ia() ? a.wd.P(W(a).Ia()) : a.wd.deactivate()
        });
        I(this, this.wd.Cq(), function (b) {
            W(a).Nd(b);
            a.Mi()
        })
    };
    e.Og = function () {
        this.Uc.gd();
        this.Kg.gd()
    };
    e.Mi = function () {
        if (this.ll)
            this.ll.showOutline(2 == this.Rg ? this.wd : void 0, this.Fp ? this.Da : void 0);
        else if (!(this.wd instanceof Ok))
            if (this.Ji) {
                this.za().removeChild(this.re);
                if (this.Za) {
                    var a = A(this.rd).Fh();
                    Rk(this, a)
                }
                this.Ji = !1
            } else
                this.$s.c(), this.S.ua(this.re), this.wd.activate(), this.Za && Rk(this, this.Uc.Fh()), this.Ji = !0
    };
    function Rk(a, b) {
        a.Za && (O(a.Za, "right", b.right + "px"), O(a.Za, "top", b.top + "px"))
    };
    function Sk(a) {
        M.call(this);
        this.nb = a;
        this.Co = N(this)
    }
    m(Sk, M);
    function Tk(a) {
        ISPInteractionPlayerCore.initInteraction(Ae({
                version: 9.3
            }));
        1 == a.nb && ISPlayer.setPauseMediaCallback(function () {
            a.Co.c()
        })
    };
    function Uk(a) {
        var b = a.contentScale,
        c = a.Ob,
        d = a.Lh,
        f = a.Xj,
        g = a.fillPanelsView,
        h = a.Bv,
        l = a.tb,
        u = a.fc,
        t = a.R;
        this.jb = a.fitToWindow;
        this.Tb = b;
        this.nb = c;
        this.zd = d;
        this.tc = f;
        this.kc = g;
        this.Pp = h;
        this.La = l;
        this.ia = u;
        this.i = t
    };
    function Y(a) {
        M.call(this);
        this.ke = a.Wd || null;
        this.La = a.tb || null;
        this.nb = a.Ob;
        this.b = a.sa;
        this.fa = a.Bh;
        this.gc = a.wc;
        this.i = a.R;
        this.m = a.document;
        I(this, this.m.settings().df, this.vl, this);
        this.tc = a.Xj;
        this.zd = Df ? new Sk(this.nb) : null;
        this.Ua = new F(0, 0);
        this.zl = new aj;
        this.F = a.w;
        this.Sc = a.mediaController;
        this.ia = new Cj({
            document: this.m,
            Wd: this.ke,
            tb: this.La
        });
        this.Bf = N(this);
        this.tk = N(this);
        var b = a.document.id(),
        c = a.s,
        d = this.Yn(this.m),
        f = this.m.settings(),
        g = new Uk({
            fitToWindow: f.fitToWindow(),
            contentScale: f.contentScale(),
            Ob: this.nb,
            Xj: this.tc,
            Lh: this.zd,
            fillPanelsView: this.m.fillPanelsView(),
            Bv: this.m.settings(),
            tb: this.La,
            fc: this.ia,
            R: this.i
        }),
        h = this.Ok(),
        l = this.ta();
        b = 2 == g.nb ? l ? new dk({
            hd: b,
            s: c,
            pq: g.jb,
            eq: g.Tb,
            Bc: g.tc.Bc(),
            tb: g.La,
            fc: g.ia,
            xq: h,
            R: g.i
        }) : R ? new Qk({
            hd: b,
            s: c,
            Rq: d ? 2 : 1,
            Em: d,
            fc: g.ia,
            R: g.i,
            dm: g.Pp.miniskinCustomizationEnabled()
        }) : new Bk({
            hd: b,
            s: c,
            fillPanelsView: g.kc,
            tb: A(g.La),
            fc: g.ia,
            R: g.i
        }) : l ? new dk({
            hd: b,
            s: c,
            pq: g.jb,
            eq: g.Tb,
            Bc: g.tc.Bc(),
            tb: null,
            fc: g.ia,
            xq: h,
            R: g.i
        }) : R ? new Qk({
            hd: b,
            s: c,
            Rq: d ? 2 : 1,
            Em: d,
            fc: g.ia,
            R: g.i,
            dm: g.Pp.miniskinCustomizationEnabled()
        }) : P ? new Dk(b, c, g.ia, g.i) : new Ck({
            hd: b,
            s: c,
            pq: g.jb,
            eq: g.Tb,
            Bc: g.tc.Bc(),
            fc: g.ia,
            R: g.i
        });
        b.Ah();
        b.Qb(f.title());
        b.Dc(f.Ze());
        f = this.m.fillPanelsView() || f.Yf();
        b.Oe(f);
        this.G = b;
        Vk(this);
        this.aa = this.Mn({
            s: a.s,
            document: a.document,
            w: this.F,
            Ye: this.G,
            Ob: this.nb,
            Lh: this.zd,
            wc: this.gc,
            R: this.i
        });
        Wk(this);
        this.Fb = a.Tm;
        this.io = new dj(a.Tm, this, a.document, this.aa.Yd());
        this.vg = new ej(this.aa, this.G, this.io);
        this.ca = !1;
        this.ht = "10.0.0";
        I(this, this.i.lg, this.ur, this);
        I(this, this.aa.Yd().ad(), this.xr, this)
    }
    m(Y, M);
    e = Y.prototype;
    e.displayObject = function () {
        return this.G.za().displayObject()
    };
    e.l = function (a) {
        T(this.G.za(), "opacity", a ? "" : "0")
    };
    e.Ib = function () {
        var a = this.m.Fa(),
        b = this.m.summary();
        a && a.Ib();
        b && b.Ib();
        Ta(this.m.content(), function (a) {
            a.Ib()
        }, this)
    };
    e.playerController = function () {
        return this.vg
    };
    e.playerStartedEvent = function () {
        return this.Bf
    };
    e.Zl = function () {
        return this.aa.Zl()
    };
    e.currentSession = function () {
        return this.io
    };
    e.soundController = function () {
        return this.F
    };
    e.initializationCompleteEvent = function () {
        return this.Bf
    };
    e.pauseMedia = function () {
        this.F.Hm()
    };
    e.mediaController = function () {
        return this.Sc
    };
    e.setPlayerContext = function (a) {
        a = new Di(a);
        this.aa.yk = a
    };
    e.start = function () {
        this.ca || (this.ca = !0, this.fa.disabled = !1, this.tc.Im(), this.aa.invalidate(), this.aa.start(), this.aa.show(), this.Bf.c())
    };
    e.resize = function (a, b) {
        this.Ua = new F(a, b);
        if (2 == this.nb || P || xf || Jf || If)
            a = new F(a, b);
        else {
            var c = this.i.accessibilityModeEnabled() ? 162 : 0;
            var d = void 0 === d ? 16 : d;
            b = new He(d, d, a - 2 * d, b - 2 * d);
            a - c < b.width && (b.width -= c);
            a = new F(b.width, b.height)
        }
        this.ia.Ua = a.clone();
        this.Ma()
    };
    e.Ma = function () {
        var a = pj(this.ia).Xd;
        this.G.resize(a.width, a.height);
        this.G.move((this.Ua.width - a.width) / 2, (this.Ua.height - a.height) / 2)
    };
    e.setBannerView = function (a) {
        this.aa.setBannerView(a)
    };
    e.fv = function (a) {
        a && (a = new Bi(a), this.aa.setBannerView(a.displayObject()))
    };
    e.activate = function () {
        if (!this.ca) {
            var a = this.i.yg;
            this.start();
            this.i.yg = a
        }
        this.l(!0);
        this.fa.disabled = !1;
        this.aa.invalidate();
        this.aa.activate();
        this.zd && Tk(this.zd);
        Xk(this)
    };
    e.deactivate = function () {
        this.aa.deactivate();
        this.G.deactivate();
        this.F.deactivate();
        this.fa.disabled = !0
    };
    e.changeAllowTouchScrollEvent = function () {
        return this.tk
    };
    e.touchScrollAllowed = function () {
        return !0
    };
    e.setParentScale = function (a) {
        var b = this.aa.Oa;
        this.aa.setParentScale(a);
        b != a && this.aa.invalidate()
    };
    e.autoStartAvailable = function () {
        var a = this.aa.Yd(),
        b = a.items();
        return (a = a.Fa()) ? !(a.Sb && 0 == a.Sb.Kf) : (b = b[0]) ? !(b.Sb && 0 == b.Sb.Kf) : !0
    };
    e.setOverlayDisplayed = function () {};
    e.setPresentationOutlineController = function (a) {
        this.G.setPresentationOutlineController(a)
    };
    e.setExternalNavigationController = function (a) {
        this.aa.Yd().setExternalNavigationController(a)
    };
    e.setViewMode = function (a) {
        "accessible" == a != this.i.ta() && this.gc.js.bd()
    };
    e.version = function () {
        return this.ht
    };
    e.Ok = function () {
        return new Map
    };
    function Vk(a) {
        a.G.za().h("playertype", a.La ? "ppt" : "standalone");
        var b = a.m.settings().dk(),
        c = a.m.fillPanelsView();
        ck(a.G, b ? c ? "player" : "slide" : "", c)
    }
    e.Yn = function () {
        return null
    };
    e.ta = function () {
        return !1
    };
    e.vl = function (a) {
        var b = this.m.settings();
        switch (a.ae) {
        case "FIT_TO_WINDOW":
            this.ia.Wm(b.fitToWindow());
            this.Ma();
            break;
        case "NAVIGATION_BUTTONS_ENABLED":
            this.G.Oe(b.Yf());
            this.Ma();
            break;
        case "INTERACTIVITY_WIDTH":
        case "INTERACTIVITY_HEIGHT":
            this.Ma();
            break;
        case "INTERACTIVITY_TITLE":
            this.G.Qb(b.title());
            break;
        case "USE_PRESENTATION_BACKGROUND":
            Vk(this);
            break;
        case "INTERACTIVITY_TITLE_ENABLED":
            this.G.Dc(b.Ze()),
            this.aa.Dc(this.m.settings().Ze())
        }
    };
    function Wk(a) {
        T(a.G.za(), "visibility", "hidden");
        I(a, a.aa.ko, function () {
            a.i.accessibilityModeEnabled() || T(a.G.za(), "visibility", "")
        });
        a.aa.Dc(a.m.settings().Ze());
        Yc(a.b, a.displayObject(), 0)
    }
    e.ur = function () {
        this.i.ta() == this.ta() && (Xk(this), !this.i.ta() && this.gc.Bl.focus())
    };
    e.xr = function () {
        var a = this.aa.Yd().Ia();
        this.i.yg = a
    };
    function Xk(a) {
        a.i.accessibilityModeEnabled() && (a.Fb.lock(), a.aa.Yd().Nd(a.i.yg), a.Fb.unlock())
    }
    Y.prototype.setOverlayDisplayed = Y.prototype.setOverlayDisplayed;
    Y.prototype.autoStartAvailable = Y.prototype.autoStartAvailable;
    Y.prototype.deactivate = Y.prototype.deactivate;
    Y.prototype.activate = Y.prototype.activate;
    Y.prototype.mediaController = Y.prototype.mediaController;
    Y.prototype.pauseMedia = Y.prototype.pauseMedia;
    Y.prototype.changeItemEvent = Y.prototype.Zl;
    Y.prototype.playerStartedEvent = Y.prototype.playerStartedEvent;
    Y.prototype.disableAutoPlaying = Y.prototype.Ib;
    function Yk(a) {
        M.call(this);
        this.oa = this.da = null;
        this.i = a;
        this.cs = N(this);
        this.tk = N(this);
        this.Bf = N(this);
        this.Lg = [];
        this.Cf = 0;
        this.Uk = !this.i.Kb()
    }
    m(Yk, M);
    function Zk(a, b) {
        function c(b) {
            a.Lg.forEach(function (a) {
                a = a.bb;
                return a(b)
            });
            a.Lg = []
        }
        a.Cf += 1;
        b.ta() ? a.da = b : a.oa = b;
        !(!a.da || !a.oa) != !(!a.da || !a.oa) && c(b);
        I(a, b.playerStartedEvent(), function () {
            1 == a.Cf && a.Bf.c()
        })
    }
    e = Yk.prototype;
    e.displayObject = function () {
        return $k(this).displayObject()
    };
    e.Qe = function () {
        return this.Uk
    };
    e.activate = function () {
        $k(this).activate();
        this.Uk = !0
    };
    e.start = function () {
        $k(this).start()
    };
    e.deactivate = function () {
        (this.i.accessibilityModeEnabled() ? [$k(this), this.i.accessibilityModeEnabled() ? A(this.i.ta() ? this.oa : this.da) : $k(this)] : [$k(this)]).forEach(function (a) {
            return a.deactivate()
        });
        this.Uk = !1
    };
    e.currentSession = function () {
        return $k(this).currentSession()
    };
    e.setPlayerContext = function (a) {
        this.da && this.da.setPlayerContext(a);
        this.oa && this.oa.setPlayerContext(a);
        al(this, {
            id: "setPlayerContext",
            bb: function (b) {
                return b.setPlayerContext(a)
            }
        })
    };
    e.initializationCompleteEvent = function () {
        return this.cs
    };
    e.soundController = function () {
        return $k(this).soundController()
    };
    e.resize = function (a, b) {
        this.da && this.da.resize(a, b);
        this.oa && this.oa.resize(a, b);
        al(this, {
            id: "resize",
            bb: function (c) {
                return c.resize(a, b)
            }
        })
    };
    e.changeAllowTouchScrollEvent = function () {
        return this.tk
    };
    e.touchScrollAllowed = function () {
        return $k(this).touchScrollAllowed()
    };
    e.setParentScale = function (a) {
        this.da && this.da.setParentScale(a);
        this.oa && this.oa.setParentScale(a);
        al(this, {
            id: "setParentScale",
            bb: function (b) {
                return b.setParentScale(a)
            }
        })
    };
    e.autoStartAvailable = function () {
        return $k(this).autoStartAvailable()
    };
    e.setOverlayDisplayed = function (a) {
        this.da && this.da.setOverlayDisplayed(a);
        this.oa && this.oa.setOverlayDisplayed(a);
        al(this, {
            id: "setOverlayDisplayed",
            bb: function (b) {
                return b.setOverlayDisplayed(a)
            }
        })
    };
    e.setPresentationOutlineController = function (a) {
        this.da && this.da.setPresentationOutlineController(a);
        this.oa && this.oa.setPresentationOutlineController(a);
        al(this, {
            id: "setPresentationOutlineController",
            bb: function (b) {
                return b.setPresentationOutlineController(a)
            }
        })
    };
    e.pauseMedia = function () {
        this.da && this.da.pauseMedia();
        this.oa && this.oa.pauseMedia()
    };
    e.mediaController = function () {
        return $k(this).mediaController()
    };
    e.playerStartedEvent = function () {
        return this.Bf
    };
    e.setBannerView = function (a) {
        this.da && this.da.setBannerView(a);
        this.oa && this.oa.setBannerView(a);
        al(this, {
            id: "setBannerView",
            bb: function (b) {
                return b.setBannerView(a)
            }
        })
    };
    e.playerController = function () {
        return $k(this).playerController()
    };
    e.setExternalNavigationController = function (a) {
        this.da && this.da.setExternalNavigationController(a);
        this.oa && this.oa.setExternalNavigationController(a);
        al(this, {
            id: "setExternalNavigationController",
            bb: function (b) {
                return b.setExternalNavigationController(a)
            }
        })
    };
    e.setViewMode = function (a) {
        $k(this).setViewMode(a)
    };
    e.version = function () {
        return $k(this).version()
    };
    e.setExternalParentForAccessibleNavigationControls = function (a) {
        this.da && this.da.Vm(a)
    };
    function al(a, b) {
        var c = a.Lg.findIndex(function (a) {
            return a.id == b.id
        });
        ~c ? a.Lg[c] = b : a.Lg.push(b)
    }
    function $k(a) {
        return A(a.i.ta() ? a.da : a.oa)
    };
    function bl(a) {
        if (!za(a)) {
            a = mc(a);
            for (var b = [], c = 0, d = 0; c < a.length; ) {
                var f = a[c++];
                if (128 > f)
                    b[d++] = String.fromCharCode(f);
                else if (191 < f && 224 > f) {
                    var g = a[c++];
                    b[d++] = String.fromCharCode((f & 31) << 6 | g & 63)
                } else if (239 < f && 365 > f) {
                    g = a[c++];
                    var h = a[c++],
                    l = a[c++];
                    f = ((f & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | l & 63) - 65536;
                    b[d++] = String.fromCharCode(55296 + (f >> 10));
                    b[d++] = String.fromCharCode(56320 + (f & 1023))
                } else
                    g = a[c++], h = a[c++], b[d++] = String.fromCharCode((f & 15) << 12 | (g & 63) << 6 | h & 63)
            }
            return JSON.parse(b.join(""))
        }
        return a
    };
    var cl = {
        content: {
            _: "c"
        },
        contentHover: {
            _: "ch"
        },
        url: {
            _: "u"
        },
        width: {
            _: "w"
        },
        height: {
            _: "h"
        },
        language: {
            _: "l"
        },
        ak: {
            _: "tedt"
        },
        zj: {
            _: "dr"
        },
        yj: {
            _: "dw"
        },
        Aj: {
            _: "xx"
        },
        Bj: {
            _: "xy"
        }
    };
    function dl() {
        this.j = G(kg)
    }
    dl.prototype.load = function (a) {
        if (a[this.j.$p]) {
            a = a[this.j.$p];
            var b = G(cl),
            c = {};
            c.content = a[b.content];
            c.contentHover = a[b.contentHover];
            c.url = a[b.url];
            c.width = a[b.width];
            c.height = a[b.height];
            c.language = a[b.language];
            c.ak = a[b.ak];
            c.zj = a[b.zj];
            c.yj = a[b.yj];
            c.Aj = a[b.Aj];
            c.Bj = a[b.Bj];
            return new jh(c)
        }
    };
    function el(a) {
        vd.call(this);
        this.Jb = a;
        this.Vf = {}
    }
    y(el, vd);
    var fl = [];
    e = el.prototype;
    e.xm = function (a, b, c, d) {
        w(b) || (b && (fl[0] = b.toString()), b = fl);
        for (var f = 0; f < b.length; f++) {
            var g = Nd(a, b[f], c || this.handleEvent, d || !1, this.Jb || this);
            if (!g)
                break;
            this.Vf[g.key] = g
        }
        return this
    };
    e.Gq = function (a, b, c, d) {
        return gl(this, a, b, c, d)
    };
    function gl(a, b, c, d, f, g) {
        if (w(c))
            for (var h = 0; h < c.length; h++)
                gl(a, b, c[h], d, f, g);
        else {
            b = Od(b, c, d || a.handleEvent, f, g || a.Jb || a);
            if (!b)
                return a;
            a.Vf[b.key] = b
        }
        return a
    }
    e.ck = function (a, b, c, d, f) {
        if (w(b))
            for (var g = 0; g < b.length; g++)
                this.ck(a, b[g], c, d, f);
        else if (a = Xd(a, b, c || this.handleEvent, za(d) ? !!d.capture : !!d, f || this.Jb || this))
            Wd(a), delete this.Vf[a.key]
    };
    e.Lm = function () {
        yb(this.Vf, function (a, b) {
            this.Vf.hasOwnProperty(b) && Wd(a)
        }, this);
        this.Vf = {}
    };
    e.ya = function () {
        el.Ab.ya.call(this);
        this.Lm()
    };
    e.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function hl(a) {
        ae.call(this);
        this.Ih = {};
        this.Hh = {};
        this.Jb = new el(this);
        this.Sq = a
    }
    y(hl, ae);
    var il = [C && !ac("11") ? "readystatechange" : "load", "abort", "error"];
    function jl(a, b, c) {
        (c = q(c) ? c : c.src) && (a.Ih[b] = {
                src: c,
                hq: p(void 0) ? void 0 : null
            })
    }
    hl.prototype.start = function () {
        var a = this.Ih;
        Ta(Bb(a), function (b) {
            var c = a[b];
            if (c && (delete a[b], !this.Rf)) {
                var d = this.Sq ? Mc(this.Sq).eu("IMG") : new Image;
                c.hq && (d.crossOrigin = c.hq);
                this.Jb.xm(d, il, this.Pq);
                this.Hh[b] = d;
                d.id = b;
                d.src = c.src
            }
        }, this)
    };
    hl.prototype.Pq = function (a) {
        var b = a.currentTarget;
        if (b) {
            if ("readystatechange" == a.type)
                if ("complete" == b.readyState)
                    a.type = "load";
                else
                    return;
            "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
            this.dispatchEvent({
                type: a.type,
                target: b
            });
            !this.Rf && (a = b.id, delete this.Ih[a], b = this.Hh[a]) && (delete this.Hh[a], this.Jb.ck(b, il, this.Pq), Eb(this.Hh) && Eb(this.Ih) && this.dispatchEvent("complete"))
        }
    };
    hl.prototype.ya = function () {
        delete this.Ih;
        delete this.Hh;
        var a = this.Jb;
        a && "function" == typeof a.dd && a.dd();
        hl.Ab.ya.call(this)
    };
    function kl(a, b, c) {
        this.qf = c;
        this.Ar = a;
        this.Ot = b
    }
    function ll(a, b) {
        if (a.qf[b] && a.qf[b].src)
            return a.qf[b];
        throw Error("Image with id: " + b + " does not exist");
    };
    function ml(a) {
        this.de = a || "";
        a = G(Qf);
        this.Gi = a.Zd.images;
        this.pk = a.Zd.Wl;
        this.Kl = a.Zd.fk
    };
    function nl(a, b, c, d, f, g, h) {
        Ni.call(this, "image", a);
        this.info = b;
        this.text = c;
        this.width = d;
        this.height = f;
        this.zq = g;
        this.url = h
    }
    m(nl, Ni);
    function ol(a, b, c, d, f, g, h) {
        Ni.call(this, "video", a);
        this.info = b;
        this.width = g;
        this.height = h;
        this.poster = d;
        this.text = c;
        this.jv = f
    }
    m(ol, Ni);
    function pl(a) {
        this.ye = a
    }
    function ql(a, b) {
        var c = [];
        b = k(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var f = A(d.id);
            switch (A(d.type)) {
            case "image":
            case "contentLibrary":
                var g = A(a.ye.images[d.assetId]);
                d = new nl(f, g, d.text, d.width, d.height, d.increaseByClick, d.url);
                break;
            case "video":
                g = A(a.ye.fk[d.assetId]);
                var h = A(a.ye.images[d.posterAssetId]);
                d = new ol(f, g, d.text, h.src, d.showControls, d.width, d.height);
                break;
            case "equation":
                d = new Oi(f, d.svg, d.latex, d.mathml);
                break;
            default:
                throw Error("unknown resource type");
            }
            d && c.push(d)
        }
        return c
    };
    function rl() {
        this.visible = !1;
        this.bn = this.enabled = !0;
        this.mode = sl
    }
    var sl = "presentationTimeline";
    function tl() {
        this.dn = this.showOutline = this.visible = !1;
        this.Oh = new rl;
        this.cn = this.fn = this.hn = !1;
        this.Am = ul;
        this.kv = this.gn = this.an = !1
    }
    var ul = "bySlides";
    function vl() {
        this.Wj = this.showOutline = this.Vj = this.be = this.Uj = this.visible = !1
    };
    function wl() {
        this.Yl = this.$l = this.be = !1;
        this.$t = [];
        this.visible = !1
    };
    function xl() {
        this.Zh = new wl;
        this.hg = new vl;
        this.Sd = new tl
    };
    function yl() {
        this.search = this.nn = this.pm = this.Bm = !0;
        this.locked = this.zm = !1
    };
    function zl(a) {
        var b = a.outlinePosition,
        c = a.colors,
        d = a.messages,
        f = void 0 === a.showPlayersPanels ? !1 : a.showPlayersPanels,
        g = void 0 === a.showTitlePanel ? !0 : a.showTitlePanel,
        h = a.accessibilityModeEnabled,
        l = a.miniskinCustomizationEnabled;
        this.zt = a.sidePanelPosition;
        this.at = b;
        this.yt = g;
        this.vk = c;
        this.ue = d;
        this.xt = f;
        this.$e = h;
        this.vf = l
    }
    e = zl.prototype;
    e.sidePanelPosition = function () {
        return this.zt
    };
    e.showTitlePanel = function () {
        return this.yt
    };
    e.outlinePosition = function () {
        return this.at
    };
    e.showPlayersPanels = function () {
        return this.xt
    };
    e.colors = function () {
        return this.vk
    };
    e.messages = function () {
        return this.ue
    };
    e.accessibilityModeEnabled = function () {
        return this.$e
    };
    e.miniskinCustomizationEnabled = function () {
        return this.vf
    };
    var Al = {
        "button.content.normal": "button.text.color",
        "button.content.over": "hovered.button.text.color",
        "button.face.normal": "button.background.color",
        "button.face.over": "hovered.button.background.color",
        "page.background": "page.background.color",
        "player.background": "player.background.color",
        "slide.border": "interactivity.border.color"
    };
    var Bl = {
        Dv: "activated",
        aw: "deactivated",
        Ov: "buffering"
    };
    v("ispring.presenter.presentation.narration.NarrationTrackPlaybackState", Bl, void 0);
    v("ACTIVATED", "activated", Bl);
    v("DEACTIVATED", "deactivated", Bl);
    v("BUFFERING", "buffering", Bl);
    var Cl = {
        nw: "free",
        nx: "restricted",
        xx: "sequential"
    };
    v("ispring.presenter.presentation.settings.NavigationType", Cl, void 0);
    v("FREE", "free", Cl);
    v("RESTRICTED", "restricted", Cl);
    v("SEQUENTIAL", "sequential", Cl);
    var Dl = {
        ex: "prompt",
        Hv: "always",
        Vw: "never"
    };
    v("ispring.presenter.presentation.settings.PresentationResumeMode", Dl, void 0);
    v("PROMPT_TO_RESUME", "prompt", Dl);
    v("ALWAYS_RESUME", "always", Dl);
    v("NEVER_RESUME", "never", Dl);
    var El = {
        jw: ["BC", "AD"],
        iw: ["Before Christ", "Anno Domini"],
        Sw: "JFMAMJJASOND".split(""),
        Gx: "JFMAMJJASOND".split(""),
        Pw: "January February March April May June July August September October November December".split(" "),
        Fx: "January February March April May June July August September October November December".split(" "),
        zx: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        Ix: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        by: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Kx: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        Bx: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Jx: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        Tw: "SMTWTFS".split(""),
        Hx: "SMTWTFS".split(""),
        Ax: ["Q1", "Q2", "Q3", "Q4"],
        fx: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        Iv: ["AM", "PM"],
        Zv: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        Rx: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        $v: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        pr: 6,
        cy: [5, 6],
        qr: 5
    },
    Fl = El;
    Fl = El;
    function Gl(a, b, c) {
        r(a) ? (this.V = Hl(a, b || 0, c || 1), Il(this, c || 1)) : za(a) ? (this.V = Hl(a.getFullYear(), a.getMonth(), a.getDate()), Il(this, a.getDate())) : (this.V = new Date(x()), a = this.V.getDate(), this.V.setHours(0), this.V.setMinutes(0), this.V.setSeconds(0), this.V.setMilliseconds(0), Il(this, a))
    }
    function Hl(a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    }
    e = Gl.prototype;
    e.qq = Fl.pr;
    e.rq = Fl.qr;
    e.clone = function () {
        var a = new Gl(this.V);
        a.qq = this.qq;
        a.rq = this.rq;
        return a
    };
    e.getFullYear = function () {
        return this.V.getFullYear()
    };
    e.getYear = function () {
        return this.getFullYear()
    };
    e.getMonth = function () {
        return this.V.getMonth()
    };
    e.getDate = function () {
        return this.V.getDate()
    };
    e.getTime = function () {
        return this.V.getTime()
    };
    e.getDay = function () {
        return this.V.getDay()
    };
    e.getUTCFullYear = function () {
        return this.V.getUTCFullYear()
    };
    e.getUTCMonth = function () {
        return this.V.getUTCMonth()
    };
    e.getUTCDate = function () {
        return this.V.getUTCDate()
    };
    e.getUTCDay = function () {
        return this.V.getDay()
    };
    e.getUTCHours = function () {
        return this.V.getUTCHours()
    };
    e.getUTCMinutes = function () {
        return this.V.getUTCMinutes()
    };
    e.getTimezoneOffset = function () {
        return this.V.getTimezoneOffset()
    };
    e.set = function (a) {
        this.V = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    e.setFullYear = function (a) {
        this.V.setFullYear(a)
    };
    e.setYear = function (a) {
        this.setFullYear(a)
    };
    e.setMonth = function (a) {
        this.V.setMonth(a)
    };
    e.setDate = function (a) {
        this.V.setDate(a)
    };
    e.setTime = function (a) {
        this.V.setTime(a)
    };
    e.setUTCFullYear = function (a) {
        this.V.setUTCFullYear(a)
    };
    e.setUTCMonth = function (a) {
        this.V.setUTCMonth(a)
    };
    e.setUTCDate = function (a) {
        this.V.setUTCDate(a)
    };
    e.add = function (a) {
        if (a.Cv || a.Ou) {
            var b = this.getMonth() + a.Ou + 12 * a.Cv,
            c = this.getYear() + Math.floor(b / 12);
            b %= 12;
            0 > b && (b += 12);
            a: {
                switch (b) {
                case 1:
                    var d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                    break a;
                case 5:
                case 8:
                case 10:
                case 3:
                    d = 30;
                    break a
                }
                d = 31
            }
            d = Math.min(d, this.getDate());
            this.setDate(1);
            this.setFullYear(c);
            this.setMonth(b);
            this.setDate(d)
        }
        a.days && (a = new Date((new Date(this.getYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.days), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()),
            this.setDate(a.getDate()), Il(this, a.getDate()))
    };
    e.toString = function () {
        return [this.getFullYear(), qb(this.getMonth() + 1), qb(this.getDate())].join("") + ""
    };
    function Il(a, b) {
        a.getDate() != b && a.V.setUTCHours(a.V.getUTCHours() + (a.getDate() < b ? 1 : -1))
    }
    e.valueOf = function () {
        return this.V.valueOf()
    };
    new Gl(0, 0, 1);
    new Gl(9999, 11, 31);
    function Jl() {}
    v("ispring.presenter.presentation.slides.IAnimationStep", Jl, void 0);
    Jl.prototype.Xt = function () {};
    Jl.prototype.automaticAdvance = Jl.prototype.Xt;
    Jl.prototype.duration = function () {};
    Jl.prototype.duration = Jl.prototype.duration;
    Jl.prototype.startTime = function () {};
    Jl.prototype.startTime = Jl.prototype.startTime;
    function Kl() {}
    v("ispring.presenter.presentation.meta.IMetaCommands", Kl, void 0);
    Kl.prototype.getMetaCommand = Kl.prototype.jy;
    Kl.prototype.count = Kl.prototype.count;
    function Ll() {}
    v("ispring.presenter.presentation.slides.IAnimationSteps", Ll, void 0);
    Ll.prototype.count = function () {};
    Ll.prototype.count = Ll.prototype.count;
    Ll.prototype.ou = function () {};
    Ll.prototype.getStep = Ll.prototype.ou;
    Ll.prototype.duration = function () {};
    Ll.prototype.duration = Ll.prototype.duration;
    function Ml() {}
    v("ispring.presenter.presentation.slides.ISlideShowTransition", Ml, void 0);
    Ml.prototype.effectType = Ml.prototype.iy;
    Ml.prototype.duration = Ml.prototype.duration;
    function Nl() {}
    v("ispring.presenter.presentation.meta.IMetaCommand", Nl, void 0);
    Nl.prototype.name = Nl.prototype.name;
    Nl.prototype.params = Nl.prototype.params;
    var Ol = {
        bx: "slide",
        ww: "interaction",
        gx: "quiz",
        sx: "scenario"
    };
    v("ispring.presenter.presentation.slides.SlideType", Ol, void 0);
    v("PRESENTATION_SLIDE", "slide", Ol);
    v("INTERACTION_SLIDE", "interaction", Ol);
    v("QUIZ_SLIDE", "quiz", Ol);
    v("SCENARIO_SLIDE", "scenario", Ol);
    function Pl() {
        this.za = new xl;
        this.outline = new yl;
        this.colors = {};
        this.accessibilityModeEnabled = !1;
        this.miniskinCustomizationEnabled = !0
    };
    function Ql(a, b, c) {
        for (var d in a)
            a.hasOwnProperty(d) && (d == c ? b = a[c] : "toString" != d && Ql(a[d], d, c));
        a.toString = function () {
            return b
        }
    };
    function Rl() {
        var a = {
            colors: {
                I: "l"
            },
            Sd: {
                I: "c",
                visible: {
                    I: "v"
                },
                showOutline: {
                    I: "o"
                },
                dn: {
                    I: "p"
                },
                Oh: {
                    I: "P",
                    visible: {
                        I: "v"
                    },
                    enabled: {
                        I: "e"
                    },
                    bn: {
                        I: "l"
                    },
                    mode: {
                        I: "m"
                    }
                },
                lv: {
                    I: "s"
                },
                hn: {
                    I: "w"
                },
                an: {
                    I: "x"
                },
                gn: {
                    I: "z"
                },
                fn: {
                    I: "l"
                },
                cn: {
                    I: "r"
                },
                Am: {
                    I: "n"
                }
            },
            hg: {
                I: "s",
                visible: {
                    I: "v"
                },
                Uj: {
                    I: "L"
                },
                be: {
                    I: "l"
                },
                Wj: {
                    I: "p"
                },
                Vj: {
                    I: "n"
                },
                showOutline: {
                    I: "o"
                }
            },
            Zh: {
                I: "t",
                be: {
                    I: "l"
                },
                buttons: {
                    I: "b"
                },
                visible: {
                    I: "v"
                },
                $l: {
                    I: "c"
                },
                Yl: {
                    I: "bl"
                }
            },
            Fm: {
                I: "o",
                Bm: {
                    I: "n"
                },
                pm: {
                    I: "h"
                },
                nn: {
                    I: "t"
                },
                search: {
                    I: "s"
                },
                zm: {
                    I: "m"
                }
            },
            miniskinCustomizationEnabled: {
                I: "m"
            }
        };
        var b = {
            I: ""
        };
        a: {
            for (var c in b) {
                b = c;
                break a
            }
            b = void 0
        }
        for (var d in a)
            a.hasOwnProperty(d) && Ql(a[d], d, b);
        this.j = a
    }
    Rl.prototype.Ij = function (a) {
        a = void 0 === a ? {}
         : a;
        var b = new Pl;
        a[this.j.colors] && (b.colors = a[this.j.colors]);
        if (a[this.j.Zh]) {
            var c = a[this.j.Zh],
            d = b.za.Zh,
            f = this.j.Zh;
            d.be = c[f.be];
            d.$l = c[f.$l];
            d.Yl = c[f.Yl];
            d.$t = c[f.buttons];
            d.visible = c[f.visible]
        }
        a[this.j.hg] && (c = a[this.j.hg], d = b.za.hg, f = this.j.hg, d.visible = c[f.visible], d.Uj = c[f.Uj], d.be = c[f.be], d.Wj = c[f.Wj], d.Vj = c[f.Vj], d.showOutline = c[f.showOutline]);
        if (a[this.j.Sd]) {
            c = a[this.j.Sd];
            d = b.za.Sd;
            f = this.j.Sd;
            d.visible = c[f.visible];
            d.showOutline = c[f.showOutline];
            d.dn = c[f.dn];
            d.an = c[f.an];
            d.gn = c[f.gn];
            d.kv = c[f.lv];
            d.Am = c[f.Am];
            if (c[f.Oh]) {
                var g = c[f.Oh],
                h = b.za.Sd.Oh,
                l = this.j.Sd.Oh;
                h.visible = g[l.visible];
                h.enabled = g[l.enabled];
                h.bn = g[l.bn];
                h.mode = g[l.mode]
            }
            d.hn = !P && c[f.hn];
            d.fn = c[f.fn];
            d.cn = c[f.cn]
        }
        a[this.j.Fm] && (c = a[this.j.Fm], d = b.outline, f = this.j.Fm, d.Bm = c[f.Bm], d.pm = c[f.pm], d.nn = c[f.nn], d.search = c[f.search], d.zm = c[f.zm]);
        this.j.miniskinCustomizationEnabled in a && (b.miniskinCustomizationEnabled = a[this.j.miniskinCustomizationEnabled]);
        return b
    };
    function Sl(a, b, c, d) {
        M.call(this);
        this.qp = [];
        a = k(a);
        for (var f = a.next(); !f.done; f = a.next())
            f = f.value, this.qp.push(new Og(f.src, f.mimeType));
        this.vt = b;
        this.Kf = c;
        this.$b = d
    }
    m(Sl, M);
    e = Sl.prototype;
    e.text = function () {
        return this.$b
    };
    e.jn = function () {
        return this.qp
    };
    e.en = function () {
        return this.vt
    };
    e.mv = function () {
        return this.Kf
    };
    e.Ib = function () {
        this.Kf = 1
    };
    function Tl(a) {
        this.j = a
    }
    Tl.prototype.load = function (a, b) {
        return b && b[this.j.id] ? new Sl(a.Ar[b[this.j.id]], b[this.j.en], b[this.j.mv], b[this.j.text]) : null
    };
    var Ul = {
        title: {
            _: "t"
        },
        Ze: {
            _: "te"
        },
        Yf: {
            _: "nbe"
        },
        dk: {
            _: "upb"
        },
        fitToWindow: {
            _: "ftw"
        },
        contentScale: {
            _: "csc"
        },
        Uf: {
            _: "iw"
        },
        Jh: {
            _: "ih"
        },
        Hq: {
            _: "lar"
        },
        Ne: {
            _: "dat"
        },
        miniskinCustomizationEnabled: {
            _: "mce"
        }
    };
    var Vl = {
        htmlText: {
            _: "h"
        },
        Rt: {
            _: "a"
        },
        Zd: {
            _: "r"
        },
        Uu: {
            _: "d"
        }
    },
    Wl = {
        id: {
            _: "i"
        },
        title: Object.assign({
            _: "t"
        }, Vl),
        zb: {
            _: "st"
        },
        content: Object.assign({
            _: "c"
        }, Vl),
        audio: {
            _: "a",
            id: {
                _: "i"
            },
            en: {
                _: "p"
            },
            text: {
                _: "T"
            }
        }
    },
    Xl = Object.assign(Wl, {
        visible: {
            _: "v"
        }
    }),
    Yl = {
        type: {
            _: "tp"
        },
        id: {
            _: "i"
        },
        title: Object.assign({
            _: "t"
        }, Vl),
        color: {
            _: "co"
        },
        item: Object.assign({
            _: "it"
        }, Wl)
    },
    Zl = {
        id: {
            _: "i"
        },
        content: {
            _: "C",
            items: {
                _: "is",
                type: {
                    _: "tp",
                    item: Object.assign({
                        _: "i",
                        _d: "item"
                    }, Wl),
                    group: Object.assign({
                        _: "g",
                        _d: "group"
                    }, Yl)
                }
            },
            Fa: Object.assign({
                _: "i"
            },
                Xl),
            summary: Object.assign({
                _: "s"
            }, Xl)
        },
        settings: Object.assign({
            _: "s"
        }, Ul),
        fy: Object.assign({
            _: "a"
        }, {
            image: {
                _: "image",
                src: {
                    _: "src"
                },
                width: {
                    _: "width"
                },
                height: {
                    _: "height"
                },
                py: {
                    _: "metaInfo"
                }
            },
            audio: {
                _: "audio",
                src: {
                    _: "src"
                }
            },
            video: {
                _: "video",
                src: {
                    _: "src"
                },
                width: {
                    _: "width"
                },
                height: {
                    _: "height"
                }
            }
        }),
        cd: {
            _: "c"
        },
        Tq: {
            _: "ptl"
        }
    };
    function $l(a, b, c) {
        M.call(this);
        this.j = a;
        this.i = b;
        this.Ni = null;
        this.de = c;
        this.zn = G(Zl);
        this.zr = new Tl(this.j.content.items.type.item.audio);
        this.Hi = new hl;
        this.qf = [];
        this.Kd = this.me = null
    }
    m($l, M);
    function am(a, b) {
        if (a.qf.length) {
            for (var c = k(a.qf), d = c.next(); !d.done; d = c.next())
                d = d.value, jl(a.Hi, d.id, d.src);
            H(a, a.Hi, "complete", function () {
                b()
            });
            H(a, a.Hi, "error", function () {
                b()
            });
            a.Hi.start()
        } else
            b()
    }
    $l.prototype.load = function (a) {
        var b = G(Qf),
        c = new ml(this.de),
        d = a[b.Zd],
        f = d[c.Gi];
        b = d[c.Kl];
        var g = d[c.pk];
        d = {};
        var h = {},
        l = {};
        for (D in f)
            if (f.hasOwnProperty(D)) {
                var u = f[D];
                d[D] = {
                    src: c.de + u[c.Gi.src],
                    width: u[c.Gi.width],
                    height: u[c.Gi.height]
                }
            }
        for (var t in g)
            if (g.hasOwnProperty(t)) {
                var D = [];
                f = k(g[t]);
                for (u = f.next(); !u.done; u = f.next())
                    u = u.value, D.push({
                        src: c.de + u[c.pk.src],
                        mimeType: u[c.pk.mimeType]
                    });
                l[t] = D
            }
        for (z in b)
            if (b.hasOwnProperty(z)) {
                t = [];
                g = k(b[z]);
                for (D = g.next(); !D.done; D = g.next())
                    D = D.value, t.push({
                        src: c.de +
                        D[c.Kl.src],
                        mimeType: D[c.Kl.mimeType]
                    });
                h[z] = t
            }
        var z = {
            Wl: l,
            fk: h,
            images: d
        };
        c = new pl(z);
        this.Ni = new kl(z.Wl, z.fk, z.images);
        z = G(Qf);
        this.me = a[z.fonts];
        this.Kd = bm(z.Xh, a[z.Xh]);
        d = this.j;
        z = A(this.Ni);
        t = G(kg);
        l = a[t.settings][t.settings.cd];
        b = a[t.oq];
        h = this.Ij(b[d.settings]);
        g = (g = a[t.presentationSettings]) ? JSON.parse(g) : null;
        if (za(g)) {
            g = (new Rl).Ij(g);
            var Z = void 0 === Z ? null : Z;
            D = (f = g.za.hg) && f.visible && (f.showOutline || f.be || f.Vj || f.Wj) ? f.Uj ? "left" : "right" : "none";
            f = (u = g.za.Sd) && u.visible && u.showOutline ? "bottom" :
            f && f.visible && f.showOutline ? "left" == D ? "left" : "right" : "none";
            u = g.colors;
            for (var Sb = {}, Ij = k(Object.keys(Al)), Ja = Ij.next(); !Ja.done; Ja = Ij.next())
                Ja = Ja.value, u.hasOwnProperty(Ja) && (Sb[Al[Ja]] = parseInt(u[Ja].substr(1), 16));
            Z = new zl({
                sidePanelPosition: D,
                outlinePosition: f,
                colors: Sb,
                messages: Z,
                accessibilityModeEnabled: g.accessibilityModeEnabled,
                miniskinCustomizationEnabled: g.miniskinCustomizationEnabled
            })
        } else
            Z = null;
        g = (g = a[t.slideBackground]) ? ll(z, g).src.replace(/\\/g, "/") : "";
        t = a[t.fillPanelsView];
        a = jg(l,
                this.j.cd);
        Z = this.Xn(b[d.id], h, Z, g, t);
        l = d.content;
        t = b[l];
        t[l.Fa][l.Fa.visible] && (b = cm(this, t[l.Fa], this.zn.content.Fa, z, c), Z.oe = new Vi(b.id, b.title, b.zb, b.content, b.audio));
        t[l.summary][l.summary.visible] && (b = cm(this, t[l.summary], this.zn.content.summary, z, c), Z.qh = new Vi(b.id, b.title, b.zb, b.content, b.audio));
        b = l.items;
        d = [];
        h = null;
        l = k(t[l.items]);
        for (t = l.next(); !t.done; t = l.next())
            t = t.value, "item" == t[b.type] ? (t = this.Wn(t, b.type.item, z, c), h ? h.sb(t) : d.push(t)) : (h = this.Vn(t, b.type.group, z, c), d.push(h));
        Z.J = d;
        Z.In = a;
        return Z
    };
    $l.prototype.Vn = function () {};
    function cm(a, b, c, d, f) {
        function g(a) {
            return a.replace("<p>", "<h1>").replace("</p>", "</h1>")
        }
        var h = b[c.id],
        l = dm(a, b[c.title], c.title, f, a.i.ta() ? g : null),
        u = p(b[c.zb]) ? b[c.zb] : null;
        f = dm(a, b[c.content], c.content, f, null);
        a = a.zr.load(d, b[c.audio]);
        return {
            id: h,
            title: l,
            zb: u,
            content: f,
            audio: a
        }
    }
    function dm(a, b, c, d, f) {
        f = f ? f : function (a) {
            return a
        };
        var g = b[c.Zd],
        h = b[c.htmlText];
        f = f(b[c.Rt]);
        b = b[c.Uu];
        return new Ui(a.i.ta() ? f : h, g ? ql(d, g) : [], b || [], a.me, a.Kd)
    }
    function bm(a, b) {
        var c = {};
        yb(b, function (b, f) {
            c[f] = new Mi(b[a.fontFamily], b[a.bold], b[a.italic])
        });
        return c
    };
    function em(a, b, c, d, f, g) {
        M.call(this);
        this.i = a.R;
        this.Fb = b;
        this.F = c;
        this.Sc = d;
        this.gc = f;
        this.sp = g;
        this.Ri = N(this);
        this.hb = bl(a.data);
        b = G(Zl);
        c = G(kg);
        b = this.hb[c.oq][b.id];
        A(!aa);
        aa = b;
        this.Cg = this.pi(this.i);
        this.m = this.Cg.load(this.hb);
        this.qk = (new dl).load(this.hb);
        this.H = this.gf({
            mq: a.ig
        });
        this.nb = 1;
        this.b = a.sa;
        this.hl = a.ag;
        this.tc = new fj({
            Im: this.hb,
            Bc: Jf
        });
        this.ah = a.eg;
        P || (O(this.b, "overflow", "hidden"), O(this.b, "display", "none"));
        this.fa = this.ga = null;
        window.document.title = this.m.title();
        if (b =
                this.m.presentationSettings())
            a = this.m.settings(), b = b.miniskinCustomizationEnabled(), a.vf = b
    }
    m(em, M);
    em.prototype.Kh = function (a) {
        var b = this;
        am(this.Cg, function () {
            b.ah.load(b.m.id(), b.m.slideBackground(), b.hb, b.mb(), b.m.settings().miniskinCustomizationEnabled(), function () {
                b.fa = A(b.ah.Bh());
                O(b.b, "display", "");
                b.ga = b.ti({
                    document: b.m,
                    sa: b.b,
                    s: b.H,
                    Xj: b.tc,
                    Ob: b.nb,
                    Bh: b.fa,
                    w: b.F,
                    mediaController: b.Sc,
                    R: b.i,
                    wc: b.gc,
                    Tm: b.Fb
                });
                b.fa.disabled = !1;
                b.ga.l(!1);
                I(b, b.ga.playerStartedEvent(), function () {
                    b.ga.l(!0);
                    b.Fb.unlock()
                });
                Zk(a, b.ga);
                b.ga.fv(b.qk);
                b.hl(b.ga);
                b.Ri.c();
                I(b, b.sp.rp, function (a, d) {
                    return b.ga.resize(a,
                        d)
                });
                ih(b.sp, !0);
                b.ga.start();
                b.ga.activate()
            })
        })
    };
    em.prototype.mb = function () {
        return !1
    };
    em.prototype.gf = function () {};
    function fm(a) {
        this.hb = a
    }
    function X(a, b, c) {
        if (a.hb.hasOwnProperty(b))
            b = a.hb[b], p(c) && (b = Vf(b, c, a.Fk));
        else
            throw Error("unknown template id: " + b);
        a = Vc(Pi(b));
        return a instanceof DocumentFragment ? (A(a.firstChild), Qa(a.firstChild, Element)) : Qa(a, Element)
    }
    fm.prototype.Fk = function (a) {
        return "{" + a + "}"
    };
    function gm(a) {
        this.hb = R && a.Lu ? a.Lu : P && a.qv ? a.qv : a.mq
    }
    m(gm, fm);
    function hm(a) {
        gm.apply(this, arguments)
    }
    m(hm, gm);
    function im(a, b) {
        return X(a, "horizontal_progress_line", {
            WIDTH: b,
            STROKE_WIDTH: C ? 2 : 4
        })
    }
    function jm(a, b) {
        return X(a, "vertical_progress_line", {
            HEIGHT: b,
            STROKE_WIDTH: C ? 2 : 4
        })
    };
    function km(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "";
        switch (b) {
        case "numeric":
            d = c ? (a + 1).toString() : a.toString();
            break;
        case "alphabet":
            b = (void 0 === c ? 0 : c) ? a : a - 1;
            if (26 > b && 0 <= b)
                d = "abcdefghijklmnopqrstuvwxyz"[b].toUpperCase();
            else
                throw Error("There is no alphabet letter with index " + a);
            break;
        case "numeric_roman":
            a = String(a).split("");
            b = " C CC CCC CD D DC DCC DCCC CM  X XX XXX XL L LX LXX LXXX XC  I II III IV V VI VII VIII IX".split(" ");
            c = "";
            for (d = 3; d--; )
                c = (b[+a.pop() + 10 * d] || "") + c;
            d = Array(+a.join("") + 1).join("M") +
                c;
            break;
        case "none":
            d = "";
            break;
        default:
            Na("unexpected NumberingType " + b)
        }
        return d
    };
    function lm(a, b, c, d) {
        S.call(this, {
            f: "linear-outline-item"
        });
        this.Cb = a;
        this.Gg = b;
        a = new S({
            o: V(this, "border-container")
        });
        this.a(a);
        this.Cl = new S({
            o: V(this, "text-container")
        });
        this.Cl.ea(c);
        a.a(this.Cl);
        this.eo = new S({
            o: V(this, "index")
        });
        si(this.Cl, this.eo, 0);
        mm(this, d)
    }
    m(lm, S);
    lm.prototype.id = function () {
        return this.Cb
    };
    lm.prototype.We = function (a) {
        mm(this, a)
    };
    function mm(a, b) {
        a.Gg && (b = km(a.Gg, "none" === b ? "numeric" : b), a.eo.ea(b + "."));
        a.h("no-index", !a.Gg)
    };
    function nm(a) {
        var b = a.Fa,
        c = a.items,
        d = a.summary;
        a = a.Zf;
        S.call(this, {
            f: "linear-outline-items-list"
        });
        this.Hn = N(this);
        this.so = N(this);
        this.Hc = null;
        this.Ng = a;
        this.Jg = [];
        this.xp = this.Sk = null;
        b && (this.Sk = b, this.ld(b));
        b = k(c);
        for (c = b.next(); !c.done; c = b.next())
            this.ld(c.value);
        d && (this.xp = d, this.ld(d))
    }
    m(nm, S);
    e = nm.prototype;
    e.Cq = function () {
        return this.so
    };
    e.closeRequestEvent = function () {
        return this.Hn
    };
    e.We = function (a) {
        this.Ng = a;
        for (var b = k(this.Jg), c = b.next(); !c.done; c = b.next())
            c.value.We(a)
    };
    e.activate = function () {
        this.Hc && (this.displayObject().scrollTop = this.Hc.displayObject().offsetTop)
    };
    e.P = function (a) {
        this.Hc && this.Hc.h("activated", !1);
        var b = Wa(this.Jg, function (b) {
            return b.id() == a
        });
        A(b);
        b.h("activated", !0);
        this.Hc = b
    };
    e.deactivate = function () {
        this.Hc && (this.Hc.h("activated", !1), this.Hc = null)
    };
    e.invalidate = function () {};
    e.close = function () {};
    e.ld = function (a) {
        var b = this,
        c = this.Sk ? this.Jg.length : this.Jg.length + 1;
        c = a === this.xp || a === this.Sk ? null : c;
        c = new lm(a.id(), c, Wi(a), this.Ng);
        I(this, c.X(), function () {
            b.so.c(a.id());
            b.Hn.c()
        });
        this.a(c);
        this.Jg.push(c)
    };
    function om() {
        yj.call(this)
    }
    m(om, yj);
    om.prototype.wa = function () {
        return 3
    };
    function pm() {
        yj.call(this);
        this.Hb = 4;
        this.zf = "numeric"
    }
    m(pm, om);
    pm.prototype.Xe = function (a) {
        var b = zj(this, "VISUALIZER_LOCATION");
        this.Hb = a;
        Aj(this, b)
    };
    pm.prototype.wa = function () {
        return this.Hb
    };
    pm.prototype.Hk = function (a) {
        switch (a) {
        case "NUMERATION_TYPE":
            return this.zf;
        case "VISUALIZER_LOCATION":
            return this.wa();
        default:
            return om.prototype.Hk.call(this, a)
        }
    };
    function qm(a, b, c, d, f) {
        Vi.call(this, a, b, c, d, f)
    }
    m(qm, Vi);
    function rm(a, b, c, d, f) {
        Xi.call(this, a, b, c, d, f)
    }
    m(rm, Xi);
    function sm() {
        M.call(this);
        this.Eg = new S({
            f: "fullscreen-video-layer"
        });
        this.yn = N(this);
        this.Qn = N(this);
        this.Ai = null
    }
    m(sm, M);
    sm.prototype.attachEvent = function () {
        return this.yn
    };
    sm.prototype.exitFullscreen = function () {
        this.Ai && (this.Ai(), this.Ai = null, this.Eg.cg(), this.Eg.h("with-video-player", !1), this.Qn.c())
    };
    function tm(a, b, c) {
        a.Ai = c;
        a.Eg.a(b);
        a.Eg.h("with-video-player", !!b);
        a.yn.c()
    };
    function um(a, b, c) {
        function d() {
            ti(a, {
                transition: "",
                opacity: "0"
            });
            ti(c, {
                transition: "",
                transform: "translate(" + l / g + "px, " + u / g + "px) scale(" + h + ")"
            });
            Hh(function () {
                ti(a, {
                    transition: "opacity 450ms",
                    opacity: "1"
                });
                ti(c, {
                    transition: "transform 450ms",
                    transform: ""
                })
            })
        }
        b = b.displayObject().getBoundingClientRect();
        var f = c.displayObject().getBoundingClientRect(),
        g = f.width / c.displayObject().offsetWidth,
        h = b.height / f.height,
        l = b.left - f.left - (f.width - b.width) / 2,
        u = b.top - f.top - (f.height - b.height) / 2;
        C || Pb || Q ? d() : Hh(d)
    };
    var vm = R ? 0 :  - .02,
    wm = R ? 0 : 32;
    function xm(a) {
        S.call(this, {
            f: "zoom-lightbox-layer"
        });
        var b = this;
        this.al = new S({
            o: V(this, "background")
        });
        this.al.h("miniskin", R);
        this.a(this.al);
        this.se = new S({
            f: "zoom-lightbox"
        });
        this.a(this.se);
        this.Oc = new S({
            va: "IMG",
            o: V(this.se, "preview")
        });
        this.Gt = new S({
            o: V(this.se, "substrate")
        });
        this.se.a(this.Gt);
        this.se.a(this.Oc);
        this.ug = new S({
            f: "zoom-lightbox-control-panel"
        });
        this.a(this.ug);
        this.sg = new S({
            f: "close-lightbox-icon-wrapper"
        });
        a = X(a, "close_lightbox_icon");
        this.sg.a(a);
        this.ug.a(this.sg);
        this.ug.h("miniskin",
            R);
        this.h("miniskin", R);
        this.$k = new F(0, 0);
        this.Lk = N(this);
        H(this, this, sh, function (a) {
            a.preventDefault();
            b.Lk.c()
        });
        H(this, this.Oc, sh, function (a) {
            a.preventDefault();
            b.Lk.c()
        });
        H(this, this.sg, sh, function (a) {
            a.preventDefault();
            b.h("visible", !1)
        });
        H(this, window, "resize", this.$, this)
    }
    m(xm, S);
    xm.prototype.show = function (a) {
        this.Oc.setAttribute("src", a.src);
        this.h("visible", !0);
        this.$k = a.size.clone();
        this.$()
    };
    xm.prototype.cc = function () {
        this.h("visible", !1)
    };
    xm.prototype.za = function () {
        return this.al
    };
    xm.prototype.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        if (a && b) {
            a = new F(a, b);
            b = a.width > a.height ? 0 : 1;
            this.ug.h("horizontal", 1 == b);
            this.ug.h("vertical", 0 == b);
            this.sg.h("horizontal", 1 == b);
            this.sg.h("vertical", 0 == b);
            var c = R ? 0 == b ? 56 : 46 : 0;
            b = ai({
                width: this.$k.width,
                height: this.$k.height,
                boundingWidth: a.width - 2 * wm - (0 == b ? c : 0),
                boundingHeight: (1 + vm) * a.height - 2 * wm - (1 == b ? c : 0),
                Pd: !0
            });
            c = a.width > a.height ? 0 : 1;
            var d = R ? 0 == c ? 56 : 46 : 0;
            a = new Pj(Math.max(wm, a.width - b.width) / 2, Math.max(wm, vm * a.height + (a.height - b.height)) /
                    2);
            a = new Pj(a.x - (0 == c ? d : 0) / 2, a.y + (1 == c ? d : 0) / 2);
            ti(this.se, {
                width: b.width + "px",
                height: b.height + "px",
                left: a.x + "px",
                top: a.y + "px"
            })
        }
    };
    function ym(a, b) {
        M.call(this);
        var c = this;
        this.Ha = a;
        this.Pl = this.Ha.visible();
        this.ik = !0;
        this.xd = new xm(b);
        this.xd.cc();
        this.Ha.a(this.xd);
        I(this, this.xd.Lk, this.cc, this);
        this.jk = N(this);
        this.Op = N(this);
        H(this, window, "orientationchange", function () {
            c.$();
            R && c.cc()
        })
    }
    m(ym, M);
    e = ym.prototype;
    e.setActive = function (a) {
        this.ik = a;
        this.jk.c()
    };
    e.active = function () {
        return this.ik
    };
    e.show = function (a) {
        if (this.ik || a.Eu) {
            var b = a.Qq.displayObject().getBoundingClientRect();
            b = new F(b.width, b.height);
            (this.Pl = this.Ha.visible()) || T(this.Ha, "display", "block");
            this.xd.show({
                src: a.src,
                size: b
            });
            um(this.xd.za(), a.Qq, this.xd.se);
            this.Op.c()
        }
    };
    e.cc = function () {
        this.Pl || T(this.Ha, "display", "none");
        this.xd.cc();
        this.Op.c()
    };
    e.$ = function () {
        this.xd.$()
    };
    function zm(a) {
        this.ra = a
    }
    zm.prototype.name = function () {
        return "gotoItem"
    };
    zm.prototype.exec = function (a) {
        a = Pa(a[0]);
        this.ra.Sl(a)
    };
    function Am(a) {
        S.call(this, {
            f: "visuals-play-overlay"
        });
        var b = this,
        c = new S({
            f: "visuals-play-overlay-button"
        });
        P || (c.h("desktop", !0), I(this, c.X(), function () {
                return b.X().c()
            }));
        var d = new S({
            o: V(c, "background")
        });
        c.a(d);
        d = new S({
            o: V(c, "icon")
        });
        a = new S({
            Me: a
        });
        d.a(a);
        c.a(d);
        this.a(c)
    }
    m(Am, S);
    function Bm(a, b) {
        ae.call(this);
        a = this.Eh = a;
        a = za(a) && 1 == a.nodeType ? this.Eh : this.Eh ? this.Eh.body : null;
        this.Fu = !!a && "rtl" == Le(a, "direction");
        this.Fq = Nd(this.Eh, Rb ? "DOMMouseScroll" : "mousewheel", this, b)
    }
    y(Bm, ae);
    Bm.prototype.handleEvent = function (a) {
        var b = 0,
        c = 0,
        d = a.Ja;
        "mousewheel" == d.type ? (a = Cm(-d.wheelDelta), p(d.wheelDeltaX) ? (b = Cm(-d.wheelDeltaX), c = Cm(-d.wheelDeltaY)) : c = a) : (a = d.detail, 100 < a ? a = 3 : -100 > a && (a = -3), p(d.axis) && d.axis === d.HORIZONTAL_AXIS ? b = a : c = a);
        r(this.Iq) && (b = Kc(b, -this.Iq, this.Iq));
        r(this.Jq) && (c = Kc(c, -this.Jq, this.Jq));
        this.Fu && (b = -b);
        b = new Dm(a, d, b, c);
        this.dispatchEvent(b)
    };
    function Cm(a) {
        return Tb && (Ub || Vb) && 0 != a % 40 ? a : a / 40
    }
    Bm.prototype.ya = function () {
        Bm.Ab.ya.call(this);
        Wd(this.Fq);
        this.Fq = null
    };
    function Dm(a, b, c, d) {
        Ad.call(this, b);
        this.type = "mousewheel";
        this.detail = a;
        this.deltaX = c;
        this.deltaY = d
    }
    y(Dm, Ad);
    function Em(a) {
        S.call(this, {
            f: a.f,
            ek: !0
        });
        this.os = 15;
        this.ze = this.Db = this.Tc = this.Ui = 0;
        this.hs = a.ub || 1;
        this.ip = this.nl = 0;
        this.ot = 100;
        this.Nf = K(this, new S({
                    o: V(this, "up")
                }));
        this.a(this.Nf);
        this.pb = K(this, new S({
                    f: "thumb"
                }));
        this.a(this.pb);
        this.pb.a(K(this, new S({
                    o: V(this.pb, "background")
                })));
        this.kf = K(this, new S({
                    o: V(this, "down")
                }));
        this.a(this.kf);
        this.Yi = this.Gf = null;
        this.Wc = N(this);
        this.Ht = N(this);
        this.Hf = new ye(this.ot);
        H(this, this.Hf, "tick", this.Ps, this);
        H(this, this, rh, this.Ip, this, vh);
        H(this,
            this.Nf, rh, this.Xs, this, vh);
        H(this, this.pb, rh, this.jl, this, vh);
        H(this, this.kf, rh, this.ys, this, vh);
        H(this, document.body, sh, this.zs, this)
    }
    m(Em, S);
    e = Em.prototype;
    e.Qh = function () {
        return this.Wc
    };
    e.ec = function (a) {
        Fm(this, a)
    };
    e.eb = function () {
        return this.ze
    };
    e.ub = function () {
        return this.hs
    };
    e.scale = function () {
        return this.Oa
    };
    e.Sa = function (a) {
        this.setParentScale(a)
    };
    e.Sh = function (a, b, c, d) {
        d = void 0 === d ? 0 : d;
        A(b <= c);
        this.Ui = a;
        this.Tc = b;
        this.Db = c;
        this.nl = d;
        Gm(this);
        this.ec(this.ze)
    };
    function Fm(a, b) {
        var c = a.Tc,
        d = a.Db;
        p(c) && (b = Math.max(b, c));
        p(d) && (b = Math.min(b, d));
        a.ze != b && (a.ze = b, Hm(a), a.Wc.c())
    }
    e.Ip = function () {};
    e.Xs = function (a) {
        a.preventDefault();
        a = -this.ub();
        Fm(this, this.eb() + a);
        Im(this, this.Nf, -this.ub())
    };
    e.ys = function (a) {
        a.preventDefault();
        a = this.ub();
        Fm(this, this.eb() + a);
        Im(this, this.kf, this.ub())
    };
    function Im(a, b, c) {
        a.Gf = b;
        H(a, a.Gf, "mouseover", a.So, a);
        H(a, a.Gf, "mouseout", a.Ro, a);
        H(a, document, sh, a.jp, a);
        a.Hf.stop();
        a.Yi = function () {
            var a = this.ip;
            Fm(this, this.eb() + a)
        };
        a.ip = c;
        a.Hf.start()
    }
    e.jp = function () {
        A(this.Gf);
        ie(this, this.Gf, "mouseover", this.So, this);
        ie(this, this.Gf, "mouseout", this.Ro, this);
        ie(this, document, sh, this.jp, this);
        this.Hf.stop();
        this.Yi = null
    };
    e.So = function () {
        this.Hf.start()
    };
    e.Ro = function () {
        this.Hf.stop()
    };
    e.Ps = function () {
        this.Yi && this.Yi()
    };
    e.jl = function (a) {
        this.Ht.c();
        a.preventDefault();
        H(this, document.body, th, this.Si, this);
        this.Hl(!0)
    };
    e.Hl = function (a) {
        this.pb.h("active", a)
    };
    e.zs = function () {
        ie(this, document.body, th, this.Si, this);
        this.Hl(!1)
    };
    e.Si = function () {};
    e.W = function () {
        Gm(this)
    };
    function Jm(a) {
        Em.call(this, a);
        this.Fo = 0
    }
    m(Jm, Em);
    function Gm(a) {
        var b = a.height() - a.Nf.height() - a.kf.height();
        a.pb.resize(void 0, 0 == a.Db - a.Tc ? b : Math.max(a.os, Math.ceil(a.Ui / (a.Db - a.Tc + a.Ui) * b)));
        Hm(a)
    }
    function Hm(a) {
        var b = Km(a);
        if (0 == a.Db - a.Tc)
            oi(a.pb, b.top);
        else {
            var c = (a.eb() - a.Tc) / (a.Db - a.Tc);
            oi(a.pb, b.top + Math.round(b.height * c))
        }
        a.Nf.A(!!a.eb());
        a.kf.A(a.eb() != a.Db)
    }
    function Km(a) {
        var b = new He(0, 0, 0, 0);
        b.top = a.Nf.height();
        b.height = a.height() - a.kf.height() - a.pb.height() - b.top;
        b.left = a.pb.x();
        return b
    }
    Jm.prototype.Ip = function (a) {
        var b;
        if (b = !a.defaultPrevented)
            b = this.pb.displayObject().getBoundingClientRect(), b = !(a.clientY >= b.top && a.clientY <= b.top + b.height);
        if (b) {
            b = this.displayObject().getBoundingClientRect();
            var c = Km(this),
            d = 0 == this.nl ? this.Ui : this.nl;
            a = (a.clientY - (b.top - c.top)) / this.Oa <= this.pb.y() ? -d : d;
            this.ec(this.eb() + a)
        }
    };
    Jm.prototype.jl = function (a) {
        Em.prototype.jl.call(this, a);
        var b = this.pb.displayObject().getBoundingClientRect();
        this.Fo = a.clientY - Math.round(b.top);
        this.Si(a)
    };
    Jm.prototype.Si = function (a) {
        var b = this.displayObject().getBoundingClientRect(),
        c = Km(this);
        Fm(this, (a.clientY - b.top - c.top * this.Oa - this.Fo) / (c.height * this.Oa) * (this.Db - this.Tc) + this.Tc)
    };
    var Lm = new yd;
    function Mm(a) {
        var b = a.Km,
        c = a.su,
        d = void 0 === a.dc ? null : a.dc;
        Jm.call(this, {
            f: a.f,
            ub: a.ub
        });
        var f = this;
        this.Ff = b;
        this.cl = this.Cp = !1;
        this.Zr = c;
        this.gh = d;
        T(b, "overflow", "hidden");
        I(this, this.Qh(), function () {
            b.displayObject().scrollTop = f.eb()
        });
        H(this, b, "scroll", function () {
            f.ec(b.displayObject().scrollTop)
        }, this);
        this.gh ? Nm(this, this.gh) : (Nm(this, this.Ff), Nm(this, this));
        c ? (pi(this, 0), this.gh ? (H(this, this.gh, "mouseenter", this.Af, this), H(this, this.gh, "mouseleave", this.gl, this)) : (H(this, this.Ff, "mouseover",
                    this.Af, this), H(this, this, "mouseover", this.Af, this), H(this, this.Ff, "mouseout", this.gl, this), H(this, this, "mouseout", this.gl, this))) : pi(this, 1)
    }
    m(Mm, Jm);
    e = Mm.prototype;
    e.Sh = function (a, b, c, d) {
        d = void 0 === d ? 0 : d;
        this.l(0 < c);
        Jm.prototype.Sh.call(this, a, b, c, d)
    };
    e.rm = function () {
        this.ec(this.Ff.displayObject().scrollTop)
    };
    e.Hl = function (a) {
        this.Cp = a;
        Om(this)
    };
    e.Af = function (a) {
        a && (this.contains(a.relatedTarget) || this.Ff.contains(a.relatedTarget)) || (this.cl = !0, Om(this))
    };
    e.gl = function (a) {
        a && (null == a.relatedTarget || this.contains(a.relatedTarget) || this.Ff.contains(a.relatedTarget)) || (this.cl = !1, Om(this))
    };
    function Om(a) {
        a.Zr && pi(a, a.Cp || a.cl ? .5 : 0)
    }
    function Nm(a, b) {
        b = new Bm(b.displayObject(), {
            passive: !0
        });
        H(a, b, Lm, function (b) {
            !xe(b.Ja) && b.deltaY && (b = 0 < b.deltaY ? a.ub() : -a.ub(), a.ec(a.eb() + b))
        }, a)
    };
    function Pm(a) {
        S.call(this, {
            f: a
        });
        a = new S({
            o: V(this, "thumb")
        });
        ri(this, a)
    }
    m(Pm, S);
    function Qm(a, b) {
        this.Nc = a;
        this.Wc = b
    }
    Qm.prototype.scrollY = function () {
        var a = this.Nc.getComputedPosition().y;
        return isNaN(a) ? 0 : -a
    };
    Qm.prototype.Dm = function () {
        return this.Wc
    };
    Qm.prototype.Zq = function (a) {
        this.scrollY() != a && this.Nc.scrollTo(0, -a)
    };
    function Rm(a, b) {
        M.call(this);
        var c = this;
        this.b = a;
        this.aj = b;
        this.To = N(this);
        H(this, a, "scroll", function () {
            c.To.c()
        })
    }
    m(Rm, M);
    Rm.prototype.scrollY = function () {
        return this.b.scrollTop
    };
    Rm.prototype.Dm = function () {
        return this.To
    };
    Rm.prototype.Zq = function (a) {
        this.b.scrollTop = a
    };
    function Sm(a) {
        var b = void 0 === a.f ? "vertical-scrollbar" : a.f,
        c = void 0 === a.Mu ? "mobile-vertical-scrollbar" : a.Mu,
        d = a.Km,
        f = a.xy,
        g = a.Yt,
        h = void 0 === a.dc ? null : a.dc,
        l = void 0 === a.ub ? 20 : a.ub;
        a = void 0 === a.preventDefault ? !0 : a.preventDefault;
        M.call(this);
        this.Zc = this.Nc = null;
        this.Hp = f || null;
        this.An = g || null;
        this.Db = 0;
        if (P) {
            var u = N(this);
            b = {
                fadeScrollbars: !0,
                scrollX: !1,
                scrollY: !0,
                bounce: !1,
                deceleration: .006,
                useTransition: !1,
                preventDefault: a,
                disablePointer: !0,
                disableTouch: !1,
                disableMouse: !1,
                onScrollHandler: function () {
                    u.c()
                }
            };
            c = new Pm(c);
            b.indicators = {
                el: c.displayObject(),
                shrink: "scale"
            };
            this.Nc = new IScroll(d.displayObject(), b);
            this.fh = new Qm(this.Nc, u)
        } else
            this.Zc = K(this, new Mm({
                        f: b,
                        ub: l,
                        Km: d,
                        su: !0,
                        dc: h
                    })), this.fh = new Rm(d.displayObject(), this.Zc), c = this.Zc;
        I(this, this.fh.Dm(), this.Ef, this);
        this.st = A(c)
    }
    m(Sm, M);
    e = Sm.prototype;
    e.Sh = function (a, b) {
        this.Db = Math.max(0, b - a);
        this.Nc ? this.Nc.setScrollHeight(b) : this.Zc && this.Zc.Sh(a, 0, Math.max(this.Db, 0));
        this.Ef()
    };
    e.setParentScale = function (a) {
        this.Zc && this.Zc.setParentScale(a)
    };
    e.rm = function () {
        this.Zc && this.Zc.rm()
    };
    e.Ef = function () {
        if (this.Hp) {
            var a = Math.min(this.fh.scrollY(), 60);
            this.Hp.style.height = Ne(a)
        }
        this.An && (a = this.Db - this.fh.scrollY(), this.An.style.height = Ne(Math.min(a, 60)))
    };
    e.ib = function () {
        M.prototype.ib.call(this);
        this.Nc && this.Nc.destroy()
    };
    function Tm(a) {
        M.call(this);
        var b = this;
        this.wf = a;
        this.Wc = N(this);
        H(this, this.wf, "scroll", function (a) {
            b.Wc.c(a)
        })
    }
    m(Tm, M);
    e = Tm.prototype;
    e.invalidate = function () {};
    e.Qh = function () {
        return this.Wc
    };
    e.eb = function () {
        return this.wf.displayObject().scrollTop
    };
    e.ec = function (a) {
        this.wf.displayObject().scrollTop = a
    };
    e.Sa = function () {};
    function Um(a, b) {
        this.aj = a;
        this.wf = b;
        this.Xc = a.fh
    }
    e = Um.prototype;
    e.Qh = function () {
        return this.Xc.Dm()
    };
    e.eb = function () {
        return this.Xc.scrollY()
    };
    e.ec = function (a) {
        this.Xc.Zq(a)
    };
    e.Sa = function (a) {
        this.aj.setParentScale(a)
    };
    e.invalidate = function () {
        var a = this.wf.height(),
        b = this.wf.displayObject().scrollHeight;
        this.aj.Sh(a, b);
        this.aj.rm()
    };
    function Vm() {
        M.call(this)
    }
    m(Vm, M);
    Vm.prototype.create = function (a) {
        if (R)
            return T(a.Xf, "overflow-x", "hidden"), T(a.Xf, "overflow-y", "auto"), new Tm(a.Xf);
        T(a.Xf, "overflow", "hidden");
        var b = new S({
            f: "container-bottom-shadow"
        }),
        c = !(Q && 9 == pf);
        a.$m && c && a.$m.a(b);
        b = new Sm({
            Km: a.Xf,
            Yt: a.$m && c ? b.displayObject() : void 0,
            dc: a.dc,
            ub: 50
        });
        K(this, b);
        a.Qm.a(b.st);
        return new Um(b, a.Xf)
    };
    function Wm(a) {
        var b = a.sa,
        c = void 0 === a.Qm ? b : a.Qm,
        d = void 0 === a.dc ? b : a.dc;
        a = void 0 === a.iv ? !1 : a.iv;
        M.call(this);
        this.b = new S({
            f: "scrollable-container"
        });
        b.a(this.b);
        this.Jn = new S({
            o: V(this.b, "content-container")
        });
        this.b.a(this.Jn);
        this.Xc = (new Vm).create({
            Xf: this.b,
            Qm: c,
            $m: a ? b : void 0,
            dc: d
        });
        this.Wc = N(this, this.Xc.Qh())
    }
    m(Wm, M);
    e = Wm.prototype;
    e.Sa = function (a) {
        this.Xc.Sa(a)
    };
    e.sa = function () {
        return this.b
    };
    e.content = function () {
        return this.Jn
    };
    e.ec = function (a) {
        this.Xc.ec(a)
    };
    e.Qh = function () {
        return this.Wc
    };
    e.eb = function () {
        return this.Xc.eb()
    };
    e.invalidate = function () {
        this.content().$();
        this.Xc.invalidate()
    };
    function Xm(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    function Ym(a, b) {
        tk.call(this, b ? [0, .85] : [1, 1], b ? [1, 1] : [0, .85], te() ? .001 : 250, Xm);
        this.xa = a
    }
    m(Ym, tk);
    Ym.prototype.ep = function () {
        T(this.xa, "opacity", "0");
        this.xa.Sa(.85, "center")
    };
    Ym.prototype.jj = function (a) {
        a = A(a);
        var b = a[1];
        T(this.xa, "opacity", a[0]);
        this.xa.Sa(b, "center")
    };
    function Zm(a, b) {
        var c = document.createElement("div");
        c.innerHTML = a;
        a = k(c.querySelectorAll("[id]"));
        for (var d = a.next(); !d.done; d = a.next())
            d = d.value, $c(b.Zi[d.id], d);
        return [].concat(ca(c.childNodes))
    };
    function $m(a, b, c) {
        a = a.querySelectorAll("[" + b + "]:not([" + b + '="none"])');
        for (var d = 0; d < a.length; ++d)
            a[d].setAttribute(b, c)
    };
    function an(a) {
        var b = a.tv,
        c = a.iu;
        this.Tr = a.fontSize;
        this.Bp = b;
        this.Sr = c
    }
    function bn(a, b) {
        var c = document.createElement("div");
        c.innerHTML = b;
        cn(c, "font-size");
        cn(c, "line-height");
        cn(c, "color");
        cn(c, "text-align");
        if (a.Bp) {
            c = c.innerHTML;
            a = a.Bp.Kd;
            b = Rc("DIV");
            b.innerHTML = c;
            c = k((b || document).getElementsByTagName("SPAN"));
            for (var d = c.next(); !d.done; d = c.next()) {
                var f = d.value;
                d = 0;
                for (var g = ad(f), h = k(g), l = h.next(); !l.done; l = h.next())
                    l = l.value, "SUB" != l.tagName && "SUP" != l.tagName || ++d;
                if (!(0 < g.length - d)) {
                    for (h = g = d = l = null; f; ) {
                        var u = Ke(f, "font-family");
                        u && (d = f, l = u.split(",")[0], l = a.hasOwnProperty(l) ?
                                a[l] : null);
                        Ke(f, "font-weight") && (g = f);
                        Ke(f, "font-style") && (h = f);
                        if (f.parentElement && "SPAN" == f.parentElement.tagName)
                            f = f.parentElement;
                        else
                            break
                    }
                    if (l) {
                        if (d) {
                            f = ["Helvetica Neue", " Helvetica", " Roboto", " Arial"];
                            u = "";
                            for (var t = 0; t < f.length; ++t)
                                u += "'" + f[t].trim() + "'", t < f.length - 1 && (u += ", ");
                            O(d, "font-family", u)
                        }
                        g && O(g, "font-weight", l.bold ? "bold" : "normal");
                        h && O(h, "font-style", l.italic ? "italic" : "normal")
                    }
                }
            }
            return b.innerHTML
        }
        cn(c, "font-family");
        return c.innerHTML
    }
    function dn(a, b) {
        var c = {};
        en(b, function (b, f) {
            "svg" == f.tagName ? c[b] = fn(a, f.cloneNode(!0)) : f.firstChild && "svg" == f.firstChild.tagName ? (f = f.cloneNode(!0), fn(a, f.firstChild), c[b] = f) : c[b] = f
        });
        b.Zi = c
    }
    function cn(a, b) {
        a = k(a.querySelectorAll("span[style*=" + b + "]"));
        for (var c = a.next(); !c.done; c = a.next())
            O(c.value, b, "inherit")
    }
    function fn(a, b) {
        if (!b.hasAttribute("data-size") || !b.hasAttribute("width") || !b.hasAttribute("height"))
            return b;
        var c = parseInt(b.getAttribute("data-size"), 10),
        d = a.Sr;
        a = a.Tr / c;
        c = parseInt(b.getAttribute("width"), 10);
        var f = parseInt(b.getAttribute("height"), 10);
        b.setAttribute("width", a * c + "px");
        b.setAttribute("height", a * f + "px");
        c = parseInt(Ke(b, "vertical-align"), 10);
        O(b, "vertical-align", c * a + "px");
        $m(b, "fill", d);
        $m(b, "stroke", d);
        return b
    };
    function gn(a, b) {
        var c = c || {};
        this.Zi = {};
        this.Pc = b;
        this.bl = [];
        a = a.Zd();
        a = k(a);
        for (b = a.next(); !b.done; b = a.next()) {
            var d = b.value;
            b = d.id();
            var f = this.Zi,
            g;
            if (!(g = c[b])) {
                if (d instanceof nl)
                    d = this.Pc.kq(d);
                else if (d instanceof ol)
                    d = this.Pc.lq(d, this.bl);
                else if (d instanceof Oi)
                    d = this.Pc.iq(d);
                else
                    throw Error("unknown resource");
                g = d
            }
            f[b] = g
        }
    }
    function en(a, b) {
        yb(a.Zi, function (a, d) {
            return b(d, a)
        })
    };
    function hn(a, b) {
        this.me = a;
        this.Kd = b
    };
    function jn(a) {
        S.call(this, {
            f: "rich-text"
        });
        this.vd = a.um;
        this.dh = R ? new an({
            fontSize: 15,
            tv: this.vd.fonts() && this.vd.Xh() ? new hn(A(this.vd.fonts()), A(this.vd.Xh())) : null,
            iu: "#000000"
        }) : null;
        this.F = a.w;
        this.Pc = a.Aq;
        this.bh = new gn(this.vd, this.Pc);
        kn(this)
    }
    m(jn, S);
    function ln(a) {
        a.displayObject().innerHTML = "";
        for (var b = k(a.bh.bl), c = b.next(); !c.done; c = b.next())
            c = c.value, eh(a.F, c.Nb()), fe(c.Nb());
        fe.apply(null, ca(a.bh.bl));
        a.bh = new gn(a.vd, a.Pc);
        kn(a)
    }
    jn.prototype.clone = function () {
        return new jn({
            um: this.vd,
            w: this.F,
            Aq: this.Pc,
            qy: this.dh
        })
    };
    function kn(a) {
        a.cg();
        var b = a.vd.htmlText();
        a.dh && (dn(a.dh, a.bh), b = bn(a.dh, b));
        Zm(b, a.bh).forEach(function (b) {
            return a.a(b)
        })
    };
    function mn(a, b) {
        this.ff = a;
        this.mt = b;
        a = void 0;
        if (!w(a)) {
            p(a) || (a = "");
            b = [];
            for (var c = 0; c < this.ff.length; ++c)
                b.push(a);
            a = b
        }
        this.ks = a
    }
    mn.prototype.Vp = function (a) {
        A(a);
        for (var b = 0; b < this.ff.length; ++b)
            T(this.ff[b], this.mt[b], a[b] + this.ks[b])
    };
    function nn(a, b, c) {
        M.call(this);
        this.Qa = 4;
        this.N = null;
        this.md = new mn([a], ["opacity"]);
        this.Qk = this.vi = b;
        this.vn = c;
        this.tg = a;
        pi(this.tg, b);
        on(this)
    }
    m(nn, M);
    nn.prototype.A = function (a) {
        a ? on(this) : this.ee(this.tg)
    };
    function on(a) {
        H(a, a.tg, "mouseover", function () {
            return pn(a, !0)
        });
        H(a, a.tg, "mouseout", function (b) {
            a.tg.displayObject().contains(b.relatedTarget) || pn(a, !1)
        })
    }
    function pn(a, b) {
        if (!(b && 1 === a.Qa || !b && 2 === a.Qa)) {
            var c = 0;
            a.N && (c = a.N.cb, a.N.stop(!1), a.Xi(a.N));
            a.Qa = b ? 1 : 2;
            a: {
                switch (a.Qa) {
                case 3:
                    c = b ? 1 : 150;
                    break a;
                case 4:
                    c = b ? 150 : 1;
                    break a;
                case 2:
                    c = Math.max(1, b ? 150 * c : 150 * (1 - c));
                    break a;
                case 1:
                    c = Math.max(1, b ? 150 * (1 - c) : 150 * c);
                    break a
                }
                throw Error("Unexpected state value");
            }
            a.N = K(a, new tk([a.vi], [b ? a.vn : a.Qk], c));
            a.N.md = a.md;
            I(a, a.N.xn, function () {
                a.N && (a.vi = a.Qk, a.vi += (a.vn - a.Qk) * a.N.cb)
            });
            I(a, a.N.Y, function () {
                a.Qa = b ? 3 : 4;
                a.N && (a.Xi(a.N), a.N = null)
            });
            a.N.play()
        }
    };
    function qn(a) {
        S.call(this, {
            f: "button-control"
        });
        var b = this;
        this.xe = a;
        this.Bd = K(this, new S({
                    f: "icon-container"
                }));
        this.a(this.Bd);
        this.dt = K(this, new S({
                    Me: X(this.xe, "play_media"),
                    o: V(this.Bd, "play-icon")
                }));
        this.bt = K(this, new S({
                    Me: X(this.xe, "pause_media"),
                    o: V(this.Bd, "pause-icon")
                }));
        this.Cn = N(this);
        I(this, this.X(), function () {
            b.Cn.c()
        }, this);
        this.Mk = K(this, new nn(this, .76, 1));
        wi(this)
    }
    m(qn, S);
    qn.prototype.Ym = function () {
        this.Bd.cg();
        this.Bd.a(this.bt)
    };
    qn.prototype.Th = function () {
        this.Bd.cg();
        this.Bd.a(this.dt)
    };
    qn.prototype.A = function (a) {
        S.prototype.A.call(this, a);
        this.Bd.A(a);
        this.Mk.A(a)
    };
    function rn(a) {
        S.call(this, {
            f: "sound-control"
        });
        this.xe = a;
        this.$a = K(this, new S({
                    f: "icon-container"
                }));
        this.a(this.$a);
        this.Ct = K(this, new S({
                    Me: X(this.xe, "media_sound_on"),
                    o: V(this.$a, "sound-on")
                }));
        this.Bt = K(this, new S({
                    Me: X(this.xe, "media_sound_off"),
                    o: V(this.$a, "sound-off")
                }));
        this.mi = N(this);
        this.Mk = K(this, new nn(this, .76, 1));
        this.Rk();
        this.ai(!1);
        wi(this)
    }
    m(rn, S);
    rn.prototype.ai = function (a) {
        this.$a.h("muted", a);
        this.$a.cg();
        a ? this.$a.a(this.Bt) : this.$a.a(this.Ct)
    };
    rn.prototype.A = function (a) {
        S.prototype.A.call(this, a);
        this.$a.A(a);
        this.Mk.A(a)
    };
    rn.prototype.Rk = function () {
        var a = this;
        I(this, this.X(), function () {
            a.mi.c()
        })
    };
    function sn(a) {
        S.call(this, {
            f: "progress-block"
        });
        this.zi = !0;
        this.ie = a;
        this.fj = K(this, new S({
                    o: V(this, "timeline")
                }));
        this.a(this.fj);
        this.qc = K(this, new S({
                    o: V(this, "progress")
                }));
        this.a(this.qc);
        this.Zg = K(this, new S({
                    o: V(this, "progress-slider-container")
                }));
        this.a(this.Zg);
        this.lt = K(this, new S({
                    o: V(this, "progress-slider")
                }));
        this.Zg.a(this.lt);
        this.Pi = {
            x: 0,
            y: 0
        };
        this.lf = !1;
        this.Ae = N(this);
        this.cj = N(this);
        this.ej = N(this);
        tn(this)
    }
    m(sn, S);
    e = sn.prototype;
    e.A = function (a) {
        S.prototype.A.call(this, a);
        this.Zg.A(a);
        this.qc.A(a);
        this.fj.A(a)
    };
    e.bi = function (a) {
        isNaN(this.ie) || isNaN(a) || (a = a / this.ie * 100, T(this.qc, "width", a + "%"), T(this.Zg, "left", Math.round(a) + "%"))
    };
    e.jg = function (a) {
        this.ie = a
    };
    e.kn = function () {
        this.lf && this.il()
    };
    e.Ns = function (a) {
        this.zi && !isNaN(this.ie) && (a.preventDefault(), ve(a), a = un(this, this.fj.displayObject(), a), this.Ae.c(a), vn(this))
    };
    e.Os = function (a) {
        this.zi && !isNaN(this.ie) && (a.preventDefault(), ve(a), this.Pi = {
                x: a.clientX,
                y: a.clientY
            }, vn(this))
    };
    function tn(a) {
        H(a, a.displayObject(), rh, a.Ns, a);
        H(a, a.Zg.displayObject(), rh, a.Os, a);
        H(a, a, mf ? "touchstart" : "dragstart", function (a) {
            return a.preventDefault()
        }, a)
    }
    function vn(a) {
        H(a, document, sh, a.il, a);
        H(a, document, th, a.Qo, a)
    }
    e.il = function () {
        ie(this, document, sh, this.il, this);
        ie(this, document, th, this.Qo, this);
        this.zi && this.lf && (this.lf = !1, this.Pi = {
                x: 0,
                y: 0
            }, this.ej.c())
    };
    e.Qo = function (a) {
        this.zi && (this.lf || this.Pi.x !== a.clientX || this.Pi.y !== a.clientY) && (this.lf || this.cj.c(), this.lf = !0, a = un(this, this.fj.displayObject(), a), this.Ae.c(a))
    };
    function un(a, b, c) {
        b = b.getBoundingClientRect();
        return Kc((c.clientX - b.left) / b.width * a.ie, 0, a.ie)
    };
    function wn(a) {
        return xn(Math.floor(a / 60)) + ":" + xn(Math.floor(a % 60))
    }
    function xn(a) {
        return 10 > a ? "0" + a : "" + a
    };
    function yn() {
        S.call(this, {
            f: "time-block"
        });
        this.Dl = K(this, new S({
                    o: V(this, "time")
                }));
        this.a(this.Dl);
        isNaN(0) || this.Dl.ea(wn(0))
    }
    m(yn, S);
    function zn(a) {
        S.call(this, {
            f: "timeline-control"
        });
        this.Gd = K(this, new sn(a));
        this.a(this.Gd);
        this.Dp = K(this, new yn);
        this.a(this.Dp);
        this.Ae = N(this, this.Gd.Ae);
        this.cj = N(this, this.Gd.cj);
        this.ej = N(this, this.Gd.ej);
        wi(this)
    }
    m(zn, S);
    zn.prototype.bi = function (a) {
        this.Gd.bi(a);
        isNaN(a) || this.Dp.Dl.ea(wn(Math.trunc(a)))
    };
    zn.prototype.jg = function (a) {
        this.Gd.jg(a)
    };
    zn.prototype.kn = function () {
        this.Gd.kn()
    };
    zn.prototype.A = function (a) {
        S.prototype.A.call(this, a);
        this.Gd.A(a)
    };
    function An(a, b) {
        S.call(this, a);
        this.Er = !0;
        this.rg = K(this, new qn(b));
        this.a(this.rg);
        this.Md = K(this, new zn(0));
        this.a(this.Md);
        this.nh = K(this, new rn(b));
        this.a(this.nh);
        this.et = N(this, this.rg.Cn);
        this.Ae = N(this, this.Md.Ae);
        this.Et = N(this, this.Md.cj);
        this.vp = N(this, this.Md.ej);
        this.mi = N(this, this.nh.mi);
        Q && 9 >= pf && this.om()
    }
    m(An, S);
    e = An.prototype;
    e.A = function (a) {
        S.prototype.A.call(this, a);
        this.rg.A(a);
        this.Md.A(a);
        this.nh.A(a)
    };
    e.invalidate = function () {};
    e.show = function () {
        this.h("hidden", !1)
    };
    e.cc = function () {
        this.Md.kn();
        this.h("hidden", !0)
    };
    e.om = function () {
        this.nh.l(!1);
        this.h("without-sound", !0)
    };
    e.ai = function (a) {
        this.nh.ai(a)
    };
    e.jg = function (a) {
        this.Md.jg(a)
    };
    e.bi = function (a) {
        this.Md.bi(a)
    };
    e.Ym = function () {
        this.rg.Ym()
    };
    e.Th = function () {
        this.rg.Th()
    };
    function Bn(a) {
        var b = a.playerController,
        c = a.gq,
        d = a.w;
        S.call(this, {
            f: a.f,
            Rh: a.Rh
        });
        this.F = d;
        this.L = b;
        this.L.U.controls = !1;
        K(this, this.L);
        this.T = K(this, c);
        this.a(this.T);
        this.T.ai(this.L.muted());
        this.T.jg(this.L.duration());
        this.ih = this.Qp = !1;
        I(this, this.L.Go, this.Js, this);
        I(this, this.L.Eo, this.Es, this);
        I(this, this.L.cp, this.Ms, this);
        I(this, this.L.stateChangedEvent(), this.ve, this);
        I(this, this.T.et, this.Ls, this);
        I(this, this.T.Ae, this.Ts, this);
        I(this, this.T.Et, this.Us, this);
        I(this, this.T.vp, this.Ws,
            this);
        I(this, this.T.mi, this.us, this);
        this.ve();
        this.F && dh(this.F, this.L)
    }
    m(Bn, S);
    e = Bn.prototype;
    e.Nb = function () {
        return this.L
    };
    e.invalidate = function () {
        this.T.invalidate()
    };
    e.ve = function () {
        if (!this.ih)
            switch (this.L.state()) {
            case "playing":
                this.h("playing", !0);
                this.T.Ym();
                break;
            case "ended":
                this.h("playing", !1);
                this.T.Th();
                this.L.reset();
                break;
            case "paused":
                this.h("playing", !1),
                this.T.Th()
            }
    };
    e.pl = function () {
        this.L.reset();
        this.T.Th()
    };
    e.Ms = function () {
        var a = this.L.currentTime();
        this.T.bi(a)
    };
    e.Es = function () {
        var a = this.L.duration();
        this.T.jg(a)
    };
    e.Js = function () {
        var a = this.L.muted();
        this.T.ai(a)
    };
    e.Ls = function () {
        switch (this.L.state()) {
        case "playing":
            this.L.pause();
            break;
        case "ended":
        case "paused":
            this.L.play()
        }
    };
    e.Ts = function (a) {
        this.L.seek(a)
    };
    e.Us = function () {
        this.Qp = this.L.playing();
        this.ih = !0;
        this.L.pause()
    };
    e.Ws = function () {
        var a = this.L.state();
        this.Qp && ("ended" == a ? this.pl() : this.L.play());
        this.ih = !1
    };
    e.us = function () {
        var a = this.L.muted();
        Ng(this.L, !a)
    };
    e.ib = function () {
        S.prototype.ib.call(this);
        this.F && eh(this.F, this.L)
    };
    function Cn(a) {
        var b = a.ym,
        c = a.w,
        d = a.Rh;
        Bn.call(this, {
            playerController: a.playerController,
            f: a.f,
            gq: new An({
                f: "media-controls-panel"
            }, a.Om),
            w: c,
            Rh: d
        });
        var f = this,
        g = p(b) ? b : 0;
        I(this, this.T.Hd, function () {
            var a = f.T.width() < g;
            f.T.h("minimized", a)
        })
    }
    m(Cn, Bn);
    Cn.prototype.Zm = function (a) {
        ui(this.T, a)
    };
    Cn.prototype.om = function () {
        this.T.om()
    };
    function Dn(a, b, c) {
        vd.call(this);
        this.Te = null != c ? Fa(a, c) : a;
        this.fd = b;
        this.Rd = Fa(this.Pu, this);
        this.Uh = !1;
        this.Nh = 0;
        this.Ph = this.Aa = null;
        this.Vl = []
    }
    y(Dn, vd);
    e = Dn.prototype;
    e.im = function (a) {
        this.Vl = arguments;
        this.Uh = !1;
        this.Aa ? this.Ph = x() + this.fd : this.Aa = ze(this.Rd, this.fd)
    };
    e.stop = function () {
        this.Aa && (n.clearTimeout(this.Aa), this.Aa = null);
        this.Ph = null;
        this.Uh = !1;
        this.Vl = []
    };
    e.pause = function () {
        ++this.Nh
    };
    e.resume = function () {
        this.Nh && (--this.Nh, !this.Nh && this.Uh && this.Vd())
    };
    e.ya = function () {
        this.stop();
        Dn.Ab.ya.call(this)
    };
    e.Pu = function () {
        this.Ph ? (this.Aa = ze(this.Rd, this.Ph - x()), this.Ph = null) : (this.Aa = null, this.Nh ? this.Uh = !0 : this.Vd())
    };
    e.Vd = function () {
        this.Uh = !1;
        this.Te.apply(null, this.Vl)
    };
    function En(a) {
        S.call(this, {
            f: "fullscreen-control",
            Rh: !0
        });
        this.xe = a;
        this.$a = K(this, new S({
                    f: "icon",
                    Me: X(this.xe, "fullscreen")
                }));
        this.a(this.$a);
        this.Jf = N(this);
        this.Rk();
        wi(this)
    }
    m(En, S);
    En.prototype.A = function (a) {
        S.prototype.A.call(this, a);
        this.$a.A(a)
    };
    En.prototype.Rk = function () {
        var a = this;
        I(this, (mf ? this : this.$a).X(), function () {
            a.Sj(!a.selected());
            gi(a.$a);
            a.Jf.c()
        }, this)
    };
    En.prototype.exitFullscreen = function () {
        this.selected() && (this.Sj(!1), gi(this.$a), this.Jf.c())
    };
    En.prototype.sm = function () {
        return this.selected()
    };
    function Fn(a, b, c) {
        An.call(this, a, b);
        var d = this;
        this.lc = null;
        this.Jf = N(this);
        c && (this.lc = new En(b), ri(this, this.lc, 2), I(this, this.lc.Jf, function () {
                d.Jf.c()
            }));
        this.h("with-fullscreen-button", c);
        C || Pb || this.h("translate-z", !0)
    }
    m(Fn, An);
    Fn.prototype.sm = function () {
        return this.lc ? this.lc.sm() : !1
    };
    Fn.prototype.A = function (a) {
        An.prototype.A.call(this, a);
        this.lc && (this.lc.A(a), a || this.lc.exitFullscreen())
    };
    Fn.prototype.exitFullscreen = function () {
        this.lc && this.lc.exitFullscreen()
    };
    function Gn(a, b) {
        S.call(this, {
            f: a
        });
        this.pp = this.mp = this.Fg = this.lh = 0;
        this.Id = !1;
        this.hi = 0;
        this.wt = 800;
        this.ns = 500;
        this.l(!1);
        this.Oc = new S({
            o: V(this, "image")
        });
        this.Oc.a(X(b, "preloader"));
        this.a(this.Oc)
    }
    m(Gn, S);
    function Hn(a) {
        a.Id || (a.Id = !0, clearTimeout(a.Fg), clearTimeout(a.lh), a.Uo())
    }
    Gn.prototype.show = function () {
        this.Id || (this.Id = !0, clearTimeout(this.Fg), clearTimeout(this.lh), this.lh = Ue(this.Uo, this, this.wt))
    };
    Gn.prototype.cc = function () {
        if (this.Id && (this.Id = !1, clearTimeout(this.Fg), clearTimeout(this.lh), this.visible())) {
            var a = this.ns - ((new Date).getTime() - this.pp);
            0 < a ? this.Fg = Ue(this.fl, this, a) : this.fl()
        }
    };
    Gn.prototype.Uo = function () {
        var a = this;
        this.pp = (new Date).getTime();
        this.l(!0);
        this.mp = setInterval(function () {
            a.hi = 360 <= a.hi ? 1 : a.hi + 1.5;
            T(a.Oc, "transform", "rotate(" + a.hi + "deg)")
        }, 0)
    };
    Gn.prototype.fl = function () {
        this.l(!1);
        clearInterval(this.mp)
    };
    function In(a) {
        var b = a.playerController,
        c = a.Om,
        d = a.Ea,
        f = a.f,
        g = a.minWidth,
        h = a.minHeight,
        l = a.ym;
        a = a.w;
        var u = new Fn({
            f: "media-controls-panel"
        }, c, !!d);
        Bn.call(this, {
            playerController: b,
            f: f,
            gq: u,
            w: a
        });
        var t = this;
        this.U = this.L.U;
        si(this, this.U, 0);
        this.ps = p(g) ? g : 0;
        this.ms = p(h) ? h : 0;
        this.ob = K(this, new S({
                    o: V(this, "start-button")
                }));
        this.ob.a(X(c, "play_button"));
        this.ob.l(!1);
        this.a(this.ob);
        I(this, this.ob.X(), this.yl, this);
        this.Vc = K(this, new S({
                    o: V(this, "replay-button")
                }));
        this.Vc.a(X(c, "replay_button"));
        this.Vc.l(!1);
        this.a(this.Vc);
        I(this, this.Vc.X(), this.pt, this);
        this.Yr = new Dn(this.Xr.bind(this), 2E3);
        this.Yb = new Gn("video-player-preloader", c);
        this.a(this.Yb.displayObject());
        this.yd = new S({
            Me: this.U,
            ek: !0,
            o: V(this, "video-element")
        });
        sf && (T(this.yd, "visibility", "hidden"), H(this, this.yd, "loadeddata", function () {
                T(t.yd, "visibility", "")
            }));
        this.yd.setAttribute("draggable", "true");
        I(this, this.yd.X(), this.vs, this);
        I(this, this.yd.Hd, this.Qs, this);
        this.dl = !1;
        H(this, this.displayObject(), "mouseenter", this.Af, this);
        H(this,
            this.displayObject(), "mouseover", this.Af, this);
        H(this, this.displayObject(), "mouseleave", this.Gs, this);
        this.Un = N(this);
        this.Ek = !1;
        I(this, u.Jf, function () {
            var a = "playing" == t.Nb().state();
            Jn(t, A(d), u);
            a && t.Nb().play()
        });
        this.ap = !1;
        this.wl = !0;
        Kn(this, !1);
        var D = p(l) ? l : 0;
        I(this, this.T.Hd, function () {
            var a = t.T.width() < D;
            t.T.h("minimized", a)
        })
    }
    m(In, Bn);
    e = In.prototype;
    e.pt = function () {
        this.yl()
    };
    e.Zm = function (a) {
        Eh(this.U, "label", a)
    };
    function Kn(a, b) {
        b ? a.T.show() : a.T.cc()
    }
    function Jn(a, b, c) {
        a.Ek = c.sm();
        a.Ek ? tm(b, a, function () {
            a.Ek = !1;
            c.exitFullscreen();
            a.Un.c()
        }) : b.exitFullscreen()
    }
    e.yl = function () {
        this.ob.l(!1);
        this.Vc.l(!1);
        this.L.play();
        Ln(this)
    };
    e.ve = function () {
        var a = !1;
        switch (this.L.state()) {
        case "playing":
            this.ob.l(!1);
            this.Vc.l(!1);
            this.ap = !0;
            mf && this.Yr.im();
            break;
        case "ended":
            this.ih || (this.Ti(), this.Vc.l(!1));
            break;
        case "buffering":
            Hn(this.Yb);
            this.ob.l(!1);
            this.Vc.l(!1);
            a = !0;
            break;
        case "paused":
            Ln(this)
        }
        !a && this.Yb && this.Yb.cc();
        Bn.prototype.ve.call(this)
    };
    e.pl = function () {
        Bn.prototype.pl.call(this);
        this.Ti()
    };
    e.Xr = function () {
        var a = this.L.state();
        this.wl && Mn(this) && "playing" == a && Kn(this, !1)
    };
    e.Ti = function () {
        Kn(this, !1)
    };
    e.vs = function () {
        this.T.Er && (this.ob.visible() || ("playing" == this.L.state() ? this.L.pause() : this.yl()))
    };
    e.Af = function () {
        this.dl = !0;
        Nn(this);
        Ln(this)
    };
    function Ln(a) {
        a.ih ? J(a, a.T.vp, function () {
            a.ob && Kn(a, On(a))
        }, a) : a.ob && Kn(a, On(a))
    }
    function On(a) {
        var b = a.ob.visible(),
        c = a.L.state(),
        d = a.wl && Mn(a);
        a = a.dl;
        return !b && d && (a || "paused" == c && !0)
    }
    e.Gs = function () {
        this.dl = !1;
        Ln(this)
    };
    e.Qs = function () {
        Nn(this);
        Mn(this) ? this.T.visible() || (this.ve(), this.T.l(On(this))) : (this.Vc.l(!1), this.T.l(!1))
    };
    function Nn(a) {
        Mn(a) ? a.ap || a.ob.l(!0) : a.ob.l(!1)
    }
    function Mn(a) {
        return a.width() >= a.ps && a.height() >= a.ms
    }
    e.Pg = function () {
        Bn.prototype.Pg.call(this);
        var a = this.Oa;
        this.yd.resize(this.width() * a, this.height() * a);
        this.yd.Sa(1 / a)
    };
    function Pn(a, b, c) {
        M.call(this);
        this.F = a;
        this.H = b;
        this.Vr = c
    }
    m(Pn, M);
    Pn.prototype.cm = function (a, b) {
        a = $g(a);
        return new In({
            playerController: a,
            w: this.F,
            f: b,
            Om: this.H,
            minWidth: 80,
            minHeight: 100,
            ym: 185,
            Ea: this.Vr
        })
    };
    Pn.prototype.am = function (a, b) {
        var c = Rg && Rg.length ? Rg.shift() : Pg();
        a && (a = Wg(c, a)) && (c.src = a);
        c = new Xg(c);
        return new Cn({
            playerController: c,
            w: this.F,
            f: b,
            Om: this.H,
            ym: 185
        })
    };
    function Qn(a, b) {
        this.F = a;
        this.bp = b;
        this.Do = {}
    }
    Qn.prototype.cm = function (a, b) {
        b = this.bp.cm(b, "video-player");
        dh(this.F, b.Nb());
        this.Do[a] = b.Nb();
        return b
    };
    Qn.prototype.am = function (a, b) {
        b = this.bp.am(b, "audio-player");
        dh(this.F, b.Nb());
        this.Do[a] = b.Nb();
        return b
    };
    function Rn(a) {
        S.call(this, {
            va: a.va,
            f: a.f
        });
        this.to = a.Se;
        this.te = a.Wf;
        this.Ca = a.content;
        if (this.pg = a.Le) {
            a = A(this.pg);
            var b = this.te.am("audio" + this.to, a.jn());
            a.text() && b.Zm(a.text());
            a.en() || b.l(!1);
            a = K(this, b)
        } else
            a = null;
        this.nd = a;
        this.Qa = 0;
        this.Gn = N(this)
    }
    m(Rn, S);
    Rn.prototype.state = function () {
        return this.Qa
    };
    Rn.prototype.close = function () {
        this.Qa = 0;
        Sn(this);
        this.Gn.c()
    };
    function Tn(a) {
        P && (ln(a.Ca), Un(a));
        a.Qa = 1
    }
    Rn.prototype.open = function () {
        P && 1 == this.state() || Un(this);
        this.Qa = 2
    };
    function Un(a) {
        a.nd && 0 == A(a.pg).Kf && a.nd.Nb().play()
    }
    Rn.prototype.id = function () {
        return this.to
    };
    function Sn(a) {
        if (a.nd)
            try {
                a.nd.Nb().reset()
            } catch (b) {
                console.log("Media support:", b.message)
            }
    };
    function Vn(a) {
        Rn.call(this, {
            f: "simple-item-content",
            Wf: a.Wf,
            Le: a.Le,
            content: a.content,
            Se: a.Se
        });
        dc && this.h("optimize-animation", !0);
        var b = this.Ca.dh;
        this.Da = b ? bn(b, a.title) : a.title;
        0 < this.Da.length && (a = new S({
                o: V(this, "title")
            }), a.$d(this.Da), this.a(a));
        this.fe = new S({
            o: V(this, "content")
        });
        this.fe.a(this.Ca);
        this.a(this.fe);
        this.nd && (a = new S({
                f: "audio-container"
            }), a.l(this.nd.visible()), a.h("simple-item", !0), A(this.nd), a.a(this.nd), si(this.fe, a, 0))
    }
    m(Vn, Rn);
    function Wn(a, b, c) {
        S.call(this, {
            f: "aspect-ratio-fixed-block",
            va: "SPAN",
            sq: !0
        });
        c = c ? c / b : 0;
        T(this, "width", b + "px");
        b = new S({
            o: V(this, "inner-wrapper")
        });
        T(b, "padding-bottom", 100 * c + "%");
        ri(this, b);
        U(a, V(this, "content"));
        b.a(a)
    }
    m(Wn, S);
    function Xn(a, b, c) {
        var d = new S({
            f: "image",
            va: "IMG"
        });
        d.setAttribute("src", a.info.src);
        a.text && ui(d, a.text);
        var f = new F(a.width || 1, a.height || 1);
        Wn.call(this, d, f.width, f.height);
        (this.qa = b) && !a.url && Yn(this, d, f, a, c)
    }
    m(Xn, Wn);
    function Yn(a, b, c, d, f) {
        var g = R;
        if (R || d.zq)
            a.h("zoomable", g), I(a, A(a.qa).jk, a.mo, a), a.mo(), I(a, a.X(), function () {
                A(a.qa).show({
                    Qq: b,
                    src: d.info.src,
                    Eu: g
                })
            });
        d.zq && f && Zn(a, c) && a.a($n(a, a, f))
    }
    Xn.prototype.mo = function () {
        this.h("zoomable", A(this.qa).active() || 0 <= window.location.search.indexOf("ispringpreview=1") && R)
    };
    function Zn(a, b) {
        return P && !R && A(a.qa).active() && 32 <= b.width && 32 <= b.height
    }
    function $n(a, b, c) {
        var d = new S({
            o: V(b, "zoom")
        });
        b = X(c, "zoom_icon");
        d.a(b);
        I(a, A(a.qa).jk, function () {
            d.l(A(a.qa).active())
        });
        return d
    };
    function ao(a, b) {
        for (var c = [], d = k(b.info), f = d.next(); !f.done; f = d.next())
            f = f.value, c.push(new Og(f.src, f.mimeType));
        a = a.cm(c, "video-player");
        a.U.setAttribute("poster", b.poster);
        a.wl = b.jv;
        b.text && a.Zm(b.text);
        Wn.call(this, a, b.width || 1, b.height || 1);
        var g = this;
        this.Ll = a;
        I(this, this.Ll.Un, function () {
            g.a(g.Ll)
        })
    }
    m(ao, Wn);
    function bo(a, b, c, d) {
        this.te = a;
        this.qa = b;
        this.H = c;
        this.F = d
    }
    bo.prototype.lq = function (a, b) {
        if (this.te && !Bf) {
            var c = new ao(this.te, a);
            b.push(c.Ll);
            return co(c.displayObject())
        }
        b = a.poster;
        c = this.F;
        var d = [];
        a = k(a.info);
        for (var f = a.next(); !f.done; f = a.next())
            f = f.value, d.push(new Og(f.src, f.mimeType));
        d = $g(d);
        c && dh(c, d);
        c = d.U;
        c.setAttribute("poster", b);
        c.setAttribute("controls", "");
        O(c, "max-width", "100%");
        return co(c)
    };
    bo.prototype.kq = function (a) {
        return co((new Xn(a, this.qa, this.H)).displayObject())
    };
    bo.prototype.iq = function (a) {
        var b = document.createElement("SPAN");
        b.innerHTML = a.dr;
        b = A(b.firstElementChild);
        O(b, "max-width", "100%");
        return co(b)
    };
    function co(a) {
        Ph(a, "inline-item");
        return a
    };
    function eo(a, b, c, d) {
        M.call(this);
        this.F = a;
        this.te = new Pn(a, b, d);
        this.Pc = this.Kn(R ? null : this.te, c, b, a);
        this.uo = new Qn(a, this.te)
    }
    m(eo, M);
    eo.prototype.Kn = function (a, b, c, d) {
        return new bo(a, b, c, d)
    };
    function fo(a, b) {
        return new jn({
            um: b,
            w: a.F,
            Aq: a.Pc
        })
    }
    function go(a, b) {
        I(a, b.Gn, function () {
            a.F.deactivate()
        })
    }
    eo.prototype.Gk = function (a) {
        return a.title().Re() ? "" : a.title().htmlText()
    };
    function ho(a, b, c, d) {
        eo.call(this, a, b, c, d)
    }
    m(ho, eo);
    ho.prototype.zc = function (a) {
        var b = fo(this, a.content());
        a = new Vn({
            Se: a.id(),
            title: this.Gk(a),
            content: b,
            Wf: this.uo,
            Le: a.audio()
        });
        go(this, a);
        return a
    };
    function io(a) {
        M.call(this);
        var b = this;
        this.Ad = a.Qu;
        this.hf = this.ka = this.Yc = this.Qc = null;
        this.ca = !1;
        this.jc = N(this);
        this.ab = new ho(a.w, a.s, a.Ka, a.Ea);
        this.ml = jo(this, X(a.s, "close_icon"));
        this.xa = new S({
            f: "secondary-item-popup"
        });
        this.ml.a(this.xa);
        this.rc = new Wm({
            sa: this.xa,
            dc: this.xa
        });
        this.Na = this.rc.content();
        I(this, this.Ad.Hd, function () {
            b.ka && ko(b)
        })
    }
    m(io, M);
    e = io.prototype;
    e.Ud = function () {
        return this.jc
    };
    e.tm = function (a) {
        return !!this.Qc && this.Qc.id() == a || !!this.Yc && this.Yc.id() == a
    };
    e.P = function () {
        return this.ka
    };
    e.xc = function (a) {
        a = this.ab.zc(a);
        a.h("popup", !0);
        this.Qc = a
    };
    e.yc = function (a) {
        a = this.ab.zc(a);
        a.h("popup", !0);
        this.Yc = a
    };
    e.ac = function () {
        this.ng(A(this.Qc))
    };
    e.bc = function () {
        this.ng(A(this.Yc))
    };
    e.Pb = function () {};
    e.setParentScale = function (a) {
        this.rc.Sa(a)
    };
    e.start = function () {
        this.ca = !0
    };
    e.activate = function () {
        this.ca && this.ka && this.ka.open()
    };
    e.deactivate = function () {
        var a = this;
        if (this.ka) {
            this.hf && this.hf.stop();
            var b = this.ka;
            this.ka = null;
            var c = new Ym(this.xa, !1);
            J(this, c.Wa(), function () {
                b.close()
            });
            J(this, c.Y, function () {
                T(a.xa, "height", "");
                a.Na.removeChild(b);
                a.Ad.removeChild(a.ml);
                T(a.Ad, "display", "")
            });
            c.play();
            this.hf = c
        }
    };
    e.ng = function (a) {
        this.hf && this.hf.stop();
        this.ka && this.Na.removeChild(this.ka);
        this.Na.a(a);
        this.Ad.a(this.ml);
        T(this.Ad, "display", "block");
        this.rc.ec(0);
        ko(this);
        this.ka = a;
        if (this.ca) {
            var b = new Ym(this.xa, !0);
            J(this, b.Wa(), function () {
                Tn(a)
            });
            J(this, b.Y, function () {
                a.open()
            });
            b.play();
            this.hf = b
        }
    };
    function ko(a) {
        T(a.xa, "height", "");
        var b = a.Ad.displayObject().offsetWidth - 100,
        c = a.Ad.displayObject().offsetHeight - 60;
        if (!(360 > c)) {
            var d = a.xa.displayObject().offsetHeight;
            c = 360 > d ? 360 : Math.min(d, c)
        }
        T(a.xa, "height", c + "px");
        d = a.Ad.displayObject().offsetHeight;
        b = Math.floor((b - a.xa.displayObject().offsetWidth) / 2);
        a.xa.move(b, Math.floor((d - c) / 2));
        a.rc.invalidate()
    }
    function jo(a, b) {
        var c = new S({
            f: "secondary-item-overlay"
        }),
        d = new S({
            o: V(c, "close-container")
        });
        c.a(d);
        var f = new S({
            o: V(c, "close-region")
        });
        d.a(f);
        var g = new S({
            o: V(c, "close-icon")
        });
        g.a(b);
        d.a(g);
        H(a, c, rh, function (b) {
            a.xa.contains(b.target) || f.contains(b.target) || !a.ka || (b = a.ka.id(), a.jc.c(b))
        });
        H(a, c, "mouseover", function (b) {
            a.xa.contains(b.target) || (f.h("active", !0), g.h("active", !0))
        });
        H(a, c, "mouseout", function (b) {
            a.xa.contains(b.target) || (f.h("active", !1), g.h("active", !1))
        });
        I(a, f.X(), function () {
            var b =
                A(a.ka).id();
            a.jc.c(b)
        });
        return c
    };
    function lo(a) {
        M.call(this);
        var b = this;
        this.yi = a.fm;
        this.nb = a.Ob;
        this.F = a.w;
        this.gc = a.wc;
        this.i = a.R;
        this.Dn = N(this);
        this.od = this.Rn = this.pd = this.yk = null;
        this.G = a.Ye;
        this.Hb = a.wa;
        this.ko = N(this);
        this.Oa = 1;
        this.Cd = null;
        this.zd = a.Lh || null;
        this.po = !0;
        this.H = a.s;
        this.wk = new uj;
        if (!this.i.accessibilityModeEnabled() || this.i.accessibilityModeEnabled() && this.i.ta() == this.mb())
            xj(this.yi), wj(this.yi, this.wk);
        this.Ha = new S({
            f: "top-layer"
        });
        R && this.G.S.ua(this.Ha);
        var c = this.G.kg();
        this.qa = new ym(c, this.H);
        this.mc =
            new sm;
        c.a(this.mc.Eg);
        var d = c.visible();
        I(this, this.mc.attachEvent(), function () {
            d = c.visible();
            c.l(!0)
        });
        I(this, this.mc.Qn, function () {
            c.l(d)
        });
        this.ha = new io({
            Qu: this.G.Hg,
            w: a.w,
            s: a.s,
            Ka: this.qa,
            Ea: this.mc
        });
        I(this, this.i.lg, function () {
            b.i.ta() == b.mb() && (xj(b.yi), wj(b.yi, b.wk))
        });
        I(this, this.i.lg, function () {
            A(b.pd).Nm()
        })
    }
    m(lo, M);
    e = lo.prototype;
    e.Zl = function () {
        return this.Dn
    };
    e.invalidate = function () {
        this.G.$();
        this.ko.c()
    };
    e.gd = function () {};
    e.setBannerView = function (a) {
        this.G.Ke(a)
    };
    e.start = function () {
        var a = this.yk ? this.yk.Oj() : null;
        A(this.pd).start(a ? a : void 0);
        this.activate()
    };
    e.show = function () {
        if (2 != this.nb && (Ef || Ff)) {
            var a = A(this.pd).P();
            a && a.Sb && 0 == a.Sb.Kf && mo(this)
        }
    };
    e.ad = function () {
        return N(this)
    };
    e.activate = function () {
        var a = A(this.od).P();
        a && (P && ln(a.Ca), this.Cd || this.po || A(this.od).activate());
        this.po = !1
    };
    e.deactivate = function () {};
    e.setParentScale = function (a) {
        this.Oa = a;
        this.od && this.od.setParentScale(this.Oa * this.G.contentScale())
    };
    e.setPresentationOutlineController = function () {};
    e.Yd = function () {
        return A(this.pd)
    };
    e.Dc = function () {};
    function no(a, b) {
        a.pd = K(a, b);
        a.Rn = b;
        var c = A(a.pd).Ia();
        I(a, b.ad(), function () {
            var b = c;
            c = A(a.pd).Ia();
            a.Dn.c(c);
            c != b && a.Cd && a.ol();
            var f = A(a.pd);
            b = f.P();
            var g = f.Fa();
            f = f.summary();
            a.qa.setActive(!(b === g || b === f));
            a.qa.cc();
            a.mc.exitFullscreen()
        });
        I(a, b.pe, a.gd, a);
        a.zd && oo(a);
        a.G.Rj(b);
        a.wk.register(new zm(b))
    }
    function po(a, b) {
        a.od = K(a, b);
        a.od.setParentScale(a.Oa * a.G.contentScale());
        a.G.lb.ua(b);
        I(a, a.G.np, function () {
            var b = a.Oa * a.G.contentScale();
            A(a.od).setParentScale(b);
            a.ha.setParentScale(b)
        })
    }
    e.mb = function () {
        return !1
    };
    function mo(a) {
        a.Cd = new Am(X(a.H, "play_overlay_icon"));
        I(a, a.Cd.X(), function () {
            A(a.od).activate();
            a.ol()
        });
        I(a, a.i.lg, a.ol, a);
        var b = a.gc.Bl;
        b.Lf && b.Lf.h("with-launcher", !0);
        a.G.Tl(a.Cd);
        b.focus()
    }
    e.ol = function () {
        this.Cd && this.G.Mm(this.Cd);
        var a = this.gc.Bl;
        a.Lf && a.Lf.h("with-launcher", !1);
        this.Cd = null
    };
    function oo(a) {
        var b = A(a.zd);
        I(a, b.Co, function () {
            a.F.Hm()
        })
    }
    lo.prototype.deactivate = lo.prototype.deactivate;
    lo.prototype.activate = lo.prototype.activate;
    var qo = {},
    ro = (qo[1] = 1, qo[2] = 2, qo[3] = 3, qo[4] = 4, qo);
    function so(a) {
        return 2 == a || 4 == a
    };
    function to(a) {
        M.call(this);
        this.g = a
    }
    m(to, M);
    function uo(a, b, c) {
        var d = b.settings();
        I(a, d.df, function (a) {
            "VISUALIZER_LOCATION" == a.ae && c.Xe(d.wa())
        })
    }
    function vo(a, b) {
        var c = a.Fa();
        c && b.xc(c);
        c = k(a.content());
        for (var d = c.next(); !d.done; d = c.next())
            b.sb(d.value);
        (a = a.summary()) && b.yc(a)
    };
    function wo(a, b) {
        M.call(this);
        this.g = a;
        this.Gb = b;
        this.og = N(this);
        this.pe = N(this)
    }
    m(wo, M);
    e = wo.prototype;
    e.start = function () {
        this.Gb.start()
    };
    e.ad = function () {
        return this.og
    };
    e.isNextAvailable = function () {
        return null != xo(this)
    };
    e.isPrevAvailable = function () {
        return null != Li(this.g)
    };
    e.Pf = function (a) {
        Gi(this.g, a) && yo(this, a, 1)
    };
    e.Nd = function (a, b) {
        b = void 0 === b ? 1 : b;
        a = Hi(this.g, a);
        null != a && Gi(this.g, a) && yo(this, a, b)
    };
    e.Sl = function (a) {
        a = Hi(this.g, a);
        null != a && Gi(this.g, a) && yo(this, a, 2)
    };
    e.sj = function () {
        var a = xo(this);
        null != a && yo(this, a, 3)
    };
    e.tj = function () {
        var a = Li(this.g);
        null != a && yo(this, a, 4)
    };
    e.Cj = function (a) {
        a = Hi(this.g, a);
        null != a && Gi(this.g, a) && this.On(a)
    };
    e.ei = function (a, b) {
        this.Gb.ac(b);
        Ii(this.g, a);
        zo(this);
        Ao(this)
    };
    e.fi = function (a, b) {
        this.Gb.bc(b);
        Ii(this.g, a);
        zo(this);
        Ao(this)
    };
    e.hk = function (a, b) {
        Bo(this, a, b);
        Ii(this.g, a);
        zo(this);
        Ao(this)
    };
    e.On = function (a) {
        Co(this, a);
        Ji(this.g, a)
    };
    function Bo(a, b, c) {
        b = A(a.g.qe[b]);
        a.Gb.rb(b, c)
    }
    function Co(a, b) {
        b = A(a.g.qe[b]);
        a.Gb.deactivate(b)
    }
    function zo(a) {
        a.og.c()
    }
    function Ao(a) {
        a.pe.c()
    }
    function yo(a, b, c) {
        a.g.nf && 0 == b ? a.ei(b, c) : Fi(a.g, b) ? a.fi(b, c) : a.hk(b, c)
    }
    function xo(a) {
        var b = a.g.kb;
        return Gi(a.g, b) && -1 == a.g.Rb.indexOf(b) ? b : Ki(a.g)
    };
    function Do(a, b) {
        wo.call(this, a, b)
    }
    m(Do, wo);
    Do.prototype.ei = function (a, b) {
        Ji(this.g, this.g.kb);
        wo.prototype.ei.call(this, a, b)
    };
    Do.prototype.fi = function (a, b) {
        Ji(this.g, this.g.kb);
        wo.prototype.fi.call(this, a, b)
    };
    Do.prototype.hk = function (a, b) {
        2 == b && Eo(this);
        Ji(this.g, this.g.kb);
        -1 != this.g.Rb.indexOf(a) || Bo(this, a, b);
        Ii(this.g, a);
        zo(this);
        Ao(this)
    };
    Do.prototype.On = function (a) {
        if (this.g.nf && 0 == a) {
            var b = A(Ki(this.g));
            Ii(this.g, b, -1 != this.g.Rb.indexOf(b));
            zo(this)
        } else
            Fi(this.g, a) && (b = A(Li(this.g)), Ii(this.g, b, -1 != this.g.Rb.indexOf(b)), zo(this));
        Co(this, a);
        Ji(this.g, a);
        Ao(this)
    };
    function Eo(a) {
        for (var b = k(a.g.Rb.slice()), c = b.next(); !c.done; c = b.next())
            c = c.value, Co(a, c), Ji(a.g, c)
    };
    function Fo(a, b) {
        wo.call(this, a, b)
    }
    m(Fo, Do);
    Fo.prototype.ei = function (a, b) {
        this.Gb.ac(b);
        Ii(this.g, a);
        zo(this);
        Ao(this)
    };
    Fo.prototype.fi = function (a, b) {
        this.Gb.bc(b);
        Ii(this.g, a);
        zo(this);
        Ao(this)
    };
    Fo.prototype.hk = function (a, b) {
        2 == b && Eo(this);
        var c = this.g.kb;
        Ji(this.g, c);
        (this.g.nf && 0 == c || Fi(this.g, c)) && Co(this, c);
        -1 != this.g.Rb.indexOf(a) || Bo(this, a, b);
        Ii(this.g, a);
        zo(this);
        Ao(this)
    };
    function Go(a, b) {
        this.g = a;
        this.M = b
    }
    Go.prototype.start = function (a) {
        a = this.Ik(a);
        var b = this.g.nc;
        this.g.nf && 0 == a && this.M.Pf(b[b.indexOf(a) + 1]);
        Fi(this.g, a) && this.M.Pf(b[b.indexOf(a) - 1]);
        this.M.Pf(a);
        this.M.start()
    };
    Go.prototype.Ik = function (a) {
        var b = this.g.nc;
        return a ? (a = Hi(this.g, a)) && Gi(this.g, a) ? a : b[0] : b[0]
    };
    function Ho(a) {
        M.call(this);
        var b = this;
        this.Ga = new Map;
        I(this, a.df, function (a) {
            Io(b, a.ae).forEach(function (b) {
                return b(a)
            })
        })
    }
    m(Ho, M);
    Ho.prototype.addHandler = function (a, b) {
        Io(this, a).push(b)
    };
    function Io(a, b) {
        a.Ga.has(b) || a.Ga.set(b, []);
        return a.Ga.get(b)
    };
    function Jo(a) {
        M.call(this);
        var b = this.m = a.document,
        c = [];
        a = [];
        var d = 0,
        f = b.Fa();
        f && (c.push(d), a[d] = f.id(), ++d);
        f = k(b.content());
        for (var g = f.next(); !g.done; g = f.next())
            g = g.value, c.push(d), a[d] = g.id(), ++d;
        if (b = b.summary())
            c.push(d), a[d] = b.id();
        d = this.g = new Ei(!!this.m.Fa(), !!this.m.summary());
        d.nc = c;
        d.fo = c.length;
        c = this.g;
        c.qe = a;
        c.Ki = Object.keys(a).length;
        this.og = N(this);
        this.Ft = N(this);
        this.pe = N(this);
        this.oe = this.m.Fa();
        this.J = this.m.content();
        this.qh = this.m.summary();
        this.Jc = null;
        K(this, new Ho(this.m.settings()))
    }
    m(Jo, M);
    e = Jo.prototype;
    e.ad = function () {
        return this.og
    };
    e.Fa = function () {
        return this.oe
    };
    e.items = function () {
        return this.J
    };
    e.summary = function () {
        return this.qh
    };
    e.P = function () {
        if (this.g.nf && 0 == this.g.kb)
            var a = this.oe;
        else
            Fi(this.g, this.g.kb) ? a = this.qh : (a = this.g.kb, this.oe && --a, a = A(this.J[a]));
        return a
    };
    e.activate = function () {};
    e.start = function (a) {
        if (!this.M)
            throw Error("actionController is not initialized");
        if (!this.dj)
            throw Error("starter is not initialized");
        this.dj.start(a);
        this.Ft.c()
    };
    e.Pf = function (a) {
        this.M.Pf(a)
    };
    e.Nd = function (a) {
        this.M.Nd(a)
    };
    e.Sl = function (a) {
        this.M.Sl(a)
    };
    e.sj = function () {
        this.M.sj()
    };
    e.tj = function () {
        this.M.tj()
    };
    e.Cj = function (a) {
        this.M.Cj(a)
    };
    e.Ia = function () {
        return A(this.g.qe[this.g.kb])
    };
    e.lm = function () {
        return !!this.oe
    };
    e.isNextAvailable = function () {
        return this.Jc ? this.Jc.isNextAvailable() : this.M.isNextAvailable()
    };
    e.isPrevAvailable = function () {
        return this.Jc ? this.Jc.isPrevAvailable() : this.M.isPrevAvailable()
    };
    e.next = function () {
        this.Jc ? this.Jc.next() : this.M.sj()
    };
    e.prev = function () {
        this.Jc ? this.Jc.prev() : this.M.tj()
    };
    e.setExternalNavigationController = function (a) {
        this.Jc = a;
        Ao(this)
    };
    e.Nm = function () {
        this.g.Nm()
    };
    e.Hj = function () {
        return this.g
    };
    function Ko(a, b) {
        a.M && (ke(a, a.M.ad(), a.un, a), ke(a, a.M.pe, a.lo, a));
        a.M = b;
        I(a, a.M.ad(), a.un, a);
        I(a, a.M.pe, a.lo, a)
    }
    e.un = function () {
        this.og.c()
    };
    e.lo = function () {
        this.pe.c()
    };
    function Lo(a, b, c, d) {
        M.call(this);
        this.Pa = a;
        this.cf = b;
        this.qa = c;
        this.mc = d;
        this.op = N(this);
        I(this, this.Pa.df, this.vl, this)
    }
    m(Lo, M);
    Lo.prototype.vl = function (a) {
        !this.qa || "INTERACTIVITY_WIDTH" != a.ae && "INTERACTIVITY_HEIGHT" != a.ae || this.qa.$();
        "VISUALIZER_LOCATION" == a.ae && (this.qa && this.qa.cc(), this.mc.exitFullscreen());
        if (this.cf.hasOwnProperty(a.ae))
            (0, this.cf[a.ae])();
        this.op.c()
    };
    function Mo(a) {
        this.Gb = a
    }
    Mo.prototype.P = function () {
        return this.Gb.P()
    };
    Mo.prototype.activate = function () {
        this.Gb.activate()
    };
    Mo.prototype.start = function () {
        this.Gb.start()
    };
    Mo.prototype.Pb = function (a) {
        this.Gb.Pb(a);
        var b = this.P();
        b && (a ? Un(b) : Sn(b))
    };
    function No(a, b, c) {
        this.hh = new Mo(a);
        this.C = b;
        this.F = c;
        this.jf = this.C;
        this.ca = !1
    }
    No.prototype.P = function () {
        return this.jf.P()
    };
    No.prototype.activate = function () {
        this.jf.activate()
    };
    No.prototype.start = function () {
        this.C.start();
        this.hh.start();
        this.ca = !0
    };
    function Oo(a) {
        a.ca && a.jf != a.C && (a.F.deactivate(), a.hh.Pb(!1), a.C.Pb(!0));
        a.jf = a.C
    }
    function Po(a) {
        a.ca && a.jf != a.hh && (a.F.deactivate(), a.C.Pb(!1), a.hh.Pb(!0));
        a.jf = a.hh
    };
    function Qo() {
        this.Ba = [];
        this.qd = new L;
        this.Y = new L
    }
    e = Qo.prototype;
    e.Wa = function () {
        return this.qd
    };
    e.add = function (a) {
        this.Ba.push(a);
        a.Y.addHandler(this.Jo, this)
    };
    e.remove = function (a) {
        var b = this.Ba.indexOf(a);
        -1 != b && (this.Ba.splice(b, 1), a.Y.removeHandler(this.Jo, this))
    };
    e.play = function (a) {
        this.qd.c();
        this.Ba.length && (this.Sn = 0, this.we = !0, Ta(this.Ba, function (b) {
                b.play(p(a) ? a : !0)
            }, this));
        return !0
    };
    e.stop = function (a) {
        Ta(this.Ba, function (b) {
            b.stop(p(a) ? a : !0)
        }, this)
    };
    e.Gj = function () {
        return this.we
    };
    e.Jo = function () {
        ++this.Sn;
        this.Sn == this.Ba.length && (this.we = !1, this.Y.c())
    };
    function Ro(a) {
        M.call(this);
        this.v = this.N = null;
        this.Vk = this.ca = !1;
        this.b = a
    }
    m(Ro, M);
    e = Ro.prototype;
    e.P = function () {
        return this.v
    };
    function So(a, b, c, d) {
        a.Vk || a.v == b || (a.ca || (c = 1), a.N ? (a.Vk = !0, J(a, a.N.Y, function () {
                    To(a, b, c, d)
                }), a.N.stop()) : To(a, b, c, d))
    }
    e.deactivate = function () {
        this.v && (this.v.close(), this.$g(this.v), this.v = null)
    };
    e.Pb = function (a) {
        !a && this.N && this.N.stop()
    };
    e.start = function () {
        this.ca = !0
    };
    e.activate = function () {
        this.v && this.v.open()
    };
    function To(a, b, c, d) {
        a.Vk = !1;
        1 == c ? a.li(b) : (a.N = Uo(a, b, c, d), J(a, a.N.Y, function () {
                a.$i();
                a.N = null
            }), a.N.play())
    }
    function Uo(a, b, c, d) {
        var f = null;
        switch (c) {
        case 2:
            f = Vo(a, b, 0);
            break;
        case 3:
            f = Wo(a, b, d)
        }
        A(f);
        J(a, f.Wa(), function () {
            pi(b, 0);
            a.v && (pi(a.v, 1), a.v.close());
            a.v = b
        });
        J(a, f.Y, function () {
            a.ca && a.v && a.v.open();
            T(b, "opacity", "");
            T(b, "transform", "");
            T(b, "top", "");
            T(b, "position", "");
            if (C || Pb) {
                var c = b.displayObject(),
                d = c.style.display;
                c.style.display = "none";
                var f = c.offsetHeight;
                c.style.display = d;
                return f
            }
        });
        return f
    }
    function Wo(a, b, c) {
        c = c && 4 == c ? -50 : 50;
        a.v ? Xh(b.displayObject(), 50) : c = 0;
        return Vo(a, b, c)
    }
    function Vo(a, b, c) {
        var d = new Qo,
        f = [];
        a.v && (f = Xo(a, a.v, b, c));
        f = $a(f, Yo(a, b, c));
        a = k(f);
        for (b = a.next(); !b.done; b = a.next())
            d.add(b.value);
        return d
    }
    function Yo(a, b, c) {
        var d = [],
        f = new tk([0], [1], te() ? .001 : 450, wk);
        J(a, f.Wa(), function () {
            a.ld(b);
            Tn(b);
            a.v && (T(b, "position", "absolute"), T(b, "top", a.ze() + "px"))
        });
        uk(f, new mn([b], ["opacity"]));
        d.push(f);
        c && (c = new tk([c], [0], te() ? .001 : 450, wk), uk(c, new vk([b], function (a, b) {
                    Xh(a.displayObject(), b)
                })), d.push(c));
        return d
    }
    function Xo(a, b, c, d) {
        var f = [],
        g = new tk([1], [0], te() ? .001 : 450, wk);
        J(a, g.Y, function () {
            a.$g(b);
            T(c, "top", "");
            a.$i();
            T(b, "opacity", "")
        });
        uk(g, new mn([b], ["opacity"]));
        f.push(g);
        d && (d = new tk([0], [-d], te() ? .001 : 450, wk), uk(d, new vk([b], function (a, b) {
                    Xh(a.displayObject(), b)
                })), J(a, d.Y, function () {
                b && T(b, "transform", "")
            }), f.push(d));
        return f
    }
    e.li = function (a) {
        this.v && (this.v.close(), this.$g(this.v));
        this.ld(a);
        this.$i();
        this.ca && a.open();
        this.v = a
    };
    function Zo(a, b) {
        Ro.call(this, a);
        this.vg = b
    }
    m(Zo, Ro);
    Zo.prototype.ld = function (a) {
        this.b.a(a)
    };
    Zo.prototype.$g = function (a) {
        this.b.removeChild(a)
    };
    Zo.prototype.$i = function () {
        this.vg.invalidate();
        this.vg.ec(0)
    };
    Zo.prototype.ze = function () {
        return this.vg.eb()
    };
    function $o(a) {
        S.call(this, {
            f: "side-by-side-view"
        });
        this.je = a;
        this.ba = new S({
            o: V(this, "visualizer")
        });
        this.a(this.ba);
        this.Ic = new S({
            o: V(this, "description")
        });
        this.a(this.Ic);
        this.je.apply(this.Ic, this.ba)
    }
    m($o, S);
    $o.prototype.Tj = function (a) {
        this.je.Tj(a);
        this.je.apply(this.Ic, this.ba)
    };
    $o.prototype.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        this.je.invalidate(this.Ic, this.ba)
    };
    function ap(a) {
        var b = a.w,
        c = a.s,
        d = a.Ne,
        f = a.Ka,
        g = a.Ea;
        $o.call(this, a.hm);
        this.Ic.h("border", !0);
        this.H = c;
        this.F = b;
        this.Bg = d;
        this.Hc = null;
        this.J = [];
        this.ab = new ho(b, c, f, g);
        this.rc = new Wm({
            sa: this.Ic,
            dc: this.Ic
        });
        U(this.rc.sa(), "side-by-side-description");
        this.g = new Zo(this.rc.content(), this.rc)
    }
    m(ap, $o);
    e = ap.prototype;
    e.P = function () {
        return this.g.P()
    };
    e.sb = function (a) {
        bp(this, a.id()) || (a = this.ab.zc(a), this.J.push(a))
    };
    e.rb = function (a, b) {
        a = A(bp(this, a));
        So(this.g, a, this.Bg, b)
    };
    e.Um = function (a) {
        this.Bg = a
    };
    e.Pb = function (a) {
        this.g.Pb(a)
    };
    e.start = function () {
        this.g.start()
    };
    e.activate = function () {
        this.g.activate()
    };
    e.W = function (a, b) {
        $o.prototype.W.call(this, a, b);
        this.rc.invalidate()
    };
    e.Pg = function () {
        this.rc.Sa(this.Oa)
    };
    function bp(a, b) {
        return Wa(a.J, function (a) {
            return a.id() == b
        })
    };
    function cp(a) {
        S.call(this, {
            f: "interactivity-content"
        });
        var b = this;
        this.C = new ap({
            hm: a.hm,
            w: a.w,
            s: a.s,
            Ne: a.settings.Ne(),
            yy: !1,
            Ka: a.Ka,
            Ea: a.Ea
        });
        this.a(this.C);
        this.Pa = a.settings;
        this.H = a.s;
        this.ha = a.Rm;
        I(this, this.ha.Ud(), function (c) {
            b.jc.c(c);
            a.Ka.setActive(!0)
        });
        this.la = new No(this.ha, new Mo(this.C), a.w);
        this.jc = N(this);
        this.O = dp(this, this.Pa);
        this.C.ba.a(this.O);
        this.cf = {};
        this.cf.DESCRIPTION_ANIMATION_TYPE = this.ws.bind(this);
        this.ut = new Lo(this.Pa, this.cf, a.Ka, a.Ea);
        I(this, this.ut.op, this.$,
            this)
    }
    m(cp, S);
    e = cp.prototype;
    e.Od = function () {
        return this.O.Od()
    };
    e.Ud = function () {
        return this.jc
    };
    e.P = function () {
        return this.la.P()
    };
    e.xc = function (a) {
        this.ha.xc(a)
    };
    e.yc = function (a) {
        this.ha.yc(a)
    };
    e.sb = function (a) {
        this.C.sb(a);
        this.O.sb(a)
    };
    e.ac = function () {
        Po(this.la);
        this.ha.ac()
    };
    e.bc = function () {
        Po(this.la);
        this.ha.bc()
    };
    e.rb = function (a, b) {
        Oo(this.la);
        this.C.rb(a, b);
        this.O.rb(a, b)
    };
    e.start = function () {
        this.la.start()
    };
    e.activate = function () {
        this.la.activate()
    };
    e.deactivate = function (a) {
        this.ha.tm(a) && (this.ha.deactivate(), Oo(this.la))
    };
    e.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        this.O.$();
        this.C.$()
    };
    e.Pg = function () {
        this.C.setParentScale(this.Oa);
        this.O.setParentScale(this.Oa)
    };
    e.ws = function () {
        this.C.Um(this.Pa.Ne())
    };
    function ep() {}
    ep.prototype.Tj = function () {};
    ep.prototype.invalidate = function () {};
    function fp() {}
    m(fp, ep);
    fp.prototype.apply = function (a, b) {
        ti(a, {
            top: "10px",
            bottom: "84px",
            left: "10px",
            right: "10px"
        });
        ti(b, {
            bottom: "20px",
            left: "-1px",
            right: "-1px"
        })
    };
    fp.prototype.remove = function (a, b) {
        T(a, "top", "");
        T(a, "bottom", "");
        T(b, "bottom", "")
    };
    function gp(a) {
        this.b = a;
        this.Nl = 44
    }
    m(gp, ep);
    gp.prototype.Tj = function (a) {
        this.Nl = a
    };
    gp.prototype.apply = function (a, b) {
        var c = Math.max(.11 * this.b.displayObject().offsetWidth, 72);
        ti(a, {
            top: "10px",
            bottom: "10px",
            left: c + "px",
            right: "10px"
        });
        ti(b, {
            top: "-1px",
            bottom: "-1px",
            left: Math.floor((c - this.Nl) / 2) + "px"
        })
    };
    gp.prototype.remove = function (a, b) {
        T(a, "top", "");
        T(a, "bottom", "");
        T(b, "top", "");
        T(b, "bottom", "");
        T(b, "left", "")
    };
    gp.prototype.invalidate = function (a, b) {
        var c = Math.max(.11 * this.b.displayObject().offsetWidth, 72);
        T(a, "left", c + "px");
        T(b, "left", Math.floor((c - this.Nl) / 2) + "px")
    };
    function hp() {}
    m(hp, ep);
    hp.prototype.apply = function (a, b) {
        ti(a, {
            top: "84px",
            bottom: "10px",
            left: "10px",
            right: "10px"
        });
        ti(b, {
            top: "20px",
            left: "-1px",
            right: "-1px"
        })
    };
    hp.prototype.remove = function (a, b) {
        T(a, "top", "");
        T(a, "bottom", "");
        T(b, "top", "")
    };
    function ip(a) {
        M.call(this);
        this.Cr = a;
        a.x();
        a.y();
        a.width();
        a.height()
    }
    m(ip, M);
    ip.prototype.displayObject = function () {
        return this.Cr.displayObject()
    };
    var jp = null;
    function kp(a) {
        if (jp) {
            var b = document.body.className.replace("" + jp, "");
            document.body.className = b.trim();
            jp = null
        }
        "default_cursor" != a && (jp = a, document.body.className = (document.body.className + (" " + a)).trim())
    };
    var lp = 1 / 14;
    function mp(a, b) {
        M.call(this);
        var c = this;
        this.xg = this.u = 0;
        this.wh = this.Xk = !1;
        this.he = 0;
        this.qj = this.vh = !1;
        this.tp = N(this);
        this.up = N(this);
        this.b = b;
        this.Al = np(this);
        this.ql = 1;
        this.K = a;
        I(this, a.Ed, function () {
            c.u = a.u
        });
        H(this, b.displayObject(), rh, this.Fs, this);
        H(this, b.displayObject(), "wheel", this.Ss, this)
    }
    m(mp, M);
    e = mp.prototype;
    e.Sa = function (a) {
        this.ql = a
    };
    e.Ss = function (a) {
        a = Qa(a.Ja, WheelEvent);
        var b = this.K.Pe();
        this.u = this.K.u;
        this.u += (0 < a.deltaY ? 60 : -60) / this.ql;
        this.u = Kc(this.u, 0, b);
        this.K.setPosition(this.u)
    };
    e.Lo = function (a) {
        R && a.preventDefault();
        a = op(this, a);
        if (a !== this.xg) {
            var b = (this.xg - a) / this.ql;
            if (this.wh || !(5 > Math.abs(b))) {
                this.wh || this.tp.c();
                this.wh = !0;
                var c = b;
                if (0 > this.u && 0 < b || 0 < this.u && 0 > b)
                    b = 1;
                else {
                    b = .3 * (1 == this.K.orientation() ? this.b.width() : this.b.height());
                    if (0 > this.u)
                        var d = Math.abs(this.u);
                    else {
                        var f = this.K.Pe();
                        d = this.u;
                        0 !== f && (d = Math.max(0, this.u - f))
                    }
                    b = Math.pow(Math.max(0, 1 - d / b), 2)
                }
                b *= c;
                this.u += b;
                this.K.on(this.u);
                this.he = (0 < b ? 1 : 0 > b ? -1 : b) * Kc(Math.abs(b), 0, 35);
                this.xg = a
            }
        }
    };
    e.Fs = function (a) {
        R && a.preventDefault();
        if ("touchstart" == a.type || 0 === a.button)
            jf || kp("grabbing_cursor"), this.u = this.K.u, this.Xk = !0, this.xg = op(this, a), this.he = 0, H(this, window.document, th, this.Lo, this), H(this, window.document, sh, this.Mo, this)
    };
    e.Mo = function () {
        jf || kp("default_cursor");
        this.Xk = this.wh = !1;
        this.xg = 0;
        this.vh = this.qj = !1;
        ie(this, window.document, th, this.Lo, this);
        ie(this, window.document, sh, this.Mo, this);
        this.Al.start();
        this.up.c()
    };
    function np(a) {
        return new gk(function () {
            if (!a.Xk) {
                var b = 0 > a.u || pp(a);
                a.qj || (a.vh = 0 > a.u);
                a.vh || (a.qj = pp(a));
                var c = a.he;
                if (0 > a.u)
                    var d = -a.u * lp;
                else
                    pp(a) ? d = (a.K.Pe() - a.u) * lp : (d = a.he, d = .5 *  - (0 < d ? 1 : 0 > d ? -1 : d));
                a.he = c + d;
                a.u += a.he;
                b && !(0 > a.u || pp(a)) || a.qj && 0 > a.u || a.vh && pp(a) ? (a.Al.stop(), a.u = a.vh ? 0 : a.K.Pe(), a.K.setPosition(a.u)) : .5 > Math.abs(a.he) && !(0 > a.u || pp(a)) ? a.K.setPosition(a.u) : (a.K.on(a.u), a.Al.start())
            }
        })
    }
    function pp(a) {
        return a.u > a.K.Pe()
    }
    function op(a, b) {
        return 1 == a.K.orientation() ? b.clientX : b.clientY
    };
    function qp(a, b) {
        M.call(this);
        this.O = a;
        this.D = b;
        this.u = 0;
        this.Ed = N(this);
        ni(this.D, 0)
    }
    m(qp, M);
    e = qp.prototype;
    e.orientation = function () {
        return 1
    };
    e.on = function (a) {
        this.u = a;
        this.D.x() && ni(this.D, 0);
        T(this.D, "transform", "translateX(" + -a + "px)");
        this.Ed.c()
    };
    e.setPosition = function (a) {
        this.u = a;
        ni(this.D, -a);
        T(this.D, "transform", "");
        this.Ed.c()
    };
    e.Pe = function () {
        return this.D.width() > this.O.width() ? this.D.width() - this.O.width() : 0
    };
    e.ib = function () {
        ni(this.O, 0)
    };
    function rp(a, b) {
        M.call(this);
        this.O = a;
        this.D = b;
        this.u = 0;
        this.Ed = N(this);
        oi(this.D, 0)
    }
    m(rp, M);
    e = rp.prototype;
    e.orientation = function () {
        return 2
    };
    e.on = function (a) {
        this.u = a;
        this.D.y() && oi(this.D, 0);
        T(this.D, "transform", "translateY(" + -this.u + "px)");
        this.Ed.c()
    };
    e.setPosition = function (a) {
        this.u = a;
        oi(this.D, -a);
        T(this.D, "transform", "");
        this.Ed.c()
    };
    e.Pe = function () {
        return this.D.height() > this.O.height() ? this.D.height() - this.O.height() : 0
    };
    e.ib = function () {
        oi(this.O, 0)
    };
    function sp(a) {
        S.call(this, {
            f: "visualizer-scroll-shadow"
        });
        var b = this;
        this.Bo = 0;
        this.Df = a;
        I(this, a.Ed, this.Ef, this);
        this.h("ios9", 9 == pf && Q);
        if (tf || sf)
            a = function (a) {
                var c = b.visible();
                b.l(!1);
                var f = document.elementFromPoint(a.clientX, a.clientY);
                a = A(a.Ja);
                var g = document.createEvent("MouseEvent");
                A(g).initEvent(a.type, a.bubbles, a.cancelable);
                b.l(c);
                f && f.dispatchEvent(g)
            },
        H(this, this, rh, a),
        H(this, this, sh, a),
        H(this, this, "click", a)
    }
    m(sp, S);
    sp.prototype.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        P || sf || (ti(this, {
                width: "",
                height: ""
            }), this.Bo = 1 === this.Df.orientation() ? this.width() : this.height(), this.Ef())
    };
    sp.prototype.Ef = function () {
        var a = 1 === this.Df.orientation() ? "width" : "height",
        b = this.Df.Pe() - this.Df.u;
        T(this, a, Math.min(b, this.Bo) + "px")
    };
    function tp(a) {
        S.call(this, {
            f: "steps-visualizer-item",
            sq: !0
        });
        this.qo = !1;
        this.Gg = a.index;
        this.ro = a.item;
        this.pa = a.orientation;
        var b = new S({
            o: V(this, "item-border")
        });
        this.a(b);
        this.Gp = K(this, new S({
                    f: "tooltip"
                }));
        this.Gp.ea(Wi(this.ro));
        b = new S({
            o: V(this, "index-container")
        });
        this.a(b);
        this.$b = new S({
            o: V(this, "index")
        });
        b.a(this.$b);
        this.We(a.Zf);
        this.h(this.ne(this.pa), !0)
    }
    m(tp, S);
    e = tp.prototype;
    e.id = function () {
        return this.ro.id()
    };
    function up(a, b) {
        a.h("select", b);
        (a.qo = b) && a.h("active", !1)
    }
    e.Xm = function (a) {
        this.h("passed", a)
    };
    e.We = function (a) {
        a = km(this.Gg, a);
        "" == a && (a = "&nbsp;");
        this.$b.$d(a)
    };
    e.setOrientation = function (a) {
        this.h(this.ne(this.pa), !1);
        this.h(this.ne(a), !0);
        this.pa = a
    };
    e.kk = function () {
        this.qo || this.h("active", !0)
    };
    e.ne = function (a) {
        return 1 == a ? "horizontal" : "vertical"
    };
    function vp(a, b) {
        S.call(this, {
            f: "steps-progress-line"
        });
        this.Be = 20;
        this.pa = a;
        this.H = b;
        this.Yk = !1;
        this.h(this.ne(this.pa), !0);
        this.qc = 1 == a ? im(this.H, this.Be) : jm(this.H, this.Be);
        this.a(this.qc)
    }
    m(vp, S);
    vp.prototype.setOrientation = function (a) {
        this.Yk || wp(this, a, this.Be);
        this.kj(a)
    };
    vp.prototype.Xm = function (a) {
        this.h("passed", a);
        a ? this.removeChild(this.qc) : (this.qc = 1 == this.pa ? im(this.H, this.Be) : jm(this.H, this.Be), this.a(this.qc));
        this.Yk = a
    };
    function wp(a, b, c) {
        b = 1 == b ? im(a.H, c) : jm(a.H, c);
        $c(b, a.qc);
        a.qc = b
    }
    vp.prototype.kj = function (a) {
        this.h(this.ne(this.pa), !1);
        this.h(this.ne(a), !0);
        xp(this, this.Be);
        this.pa = a
    };
    function xp(a, b) {
        1 == a.pa ? (T(a, "height", ""), T(a, "width", b + "px")) : (T(a, "width", ""), T(a, "height", b + "px"));
        a.Be = b
    }
    vp.prototype.ne = function (a) {
        return 1 == a ? "horizontal" : "vertical"
    };
    function yp(a) {
        this.b = a;
        this.mj = p(5) ? 5 : 0
    }
    yp.prototype.uq = function (a, b) {
        var c = this.b.clientTop + this.mj,
        d = c + this.b.clientHeight - 2 * this.mj;
        b = b.height();
        a.y < c && (a.y = c);
        a.y + b > d && (a.y = Math.max(c, d - b - 1));
        return a
    };
    yp.prototype.Xp = function (a) {
        this.mj && T(a, "margin-bottom", this.mj + "px")
    };
    function zp(a) {
        Uj.call(this, a)
    }
    m(zp, Uj);
    zp.prototype.Ci = function (a, b) {
        return {
            x: a.left + a.width / 2 - b.width / 2,
            y: a.top + a.height + 5
        }
    };
    function Ap(a) {
        Uj.call(this, a)
    }
    m(Ap, Uj);
    Ap.prototype.Ci = function (a, b) {
        return {
            x: a.left + a.width + 5,
            y: a.top + a.height / 2 - b.height / 2
        }
    };
    function Bp(a) {
        Uj.call(this, a)
    }
    m(Bp, Uj);
    Bp.prototype.Ci = function (a, b) {
        return {
            x: a.left + a.width / 2 - b.width / 2,
            y: a.top - b.height - 5
        }
    };
    function Cp() {};
    function Dp(a) {
        M.call(this);
        this.sh = a.yv;
        this.Hb = a.wa;
        this.K = a.qn;
        this.Mf = []
    }
    m(Dp, M);
    Dp.prototype.Xe = function (a, b) {
        this.Hb = a;
        this.K = b;
        for (a = 0; a < this.Mf.length; ++a)
            b = this.Mf[a].ln, ke(this, b.xl, this.hp, this), ke(this, b.Kk, this.zo, this), fe(b), this.Mf[a].ln = Ep(this, this.Mf[a].view)
    };
    Dp.prototype.A = function (a) {
        for (var b = k(this.Mf), c = b.next(); !c.done; c = b.next())
            c.value.ln.A(a)
    };
    function Fp(a, b) {
        var c = Ep(a, b);
        a.Mf.push({
            view: b,
            ln: c
        })
    }
    function Ep(a, b) {
        var c = a.sh.displayObject();
        c = so(a.Hb) ? new yp(c) : new Tj(c, 5);
        a: switch (b = {
                $j: a.sh.displayObject(),
                Jj: b,
                xj: b.Gp,
                qn: a.K,
                $u: c
            }, a.Hb) {
        case 1:
            b = new zp(b);
            break a;
        case 3:
            b = new Bp(b);
            break a;
        case 4:
            b = new Ap(b);
            break a;
        default:
            throw Error("Unknown location type");
        }
        I(a, b.xl, a.hp, a);
        I(a, b.Kk, a.zo, a);
        return b
    }
    Dp.prototype.hp = function () {
        T(this.sh, "z-index", "2")
    };
    Dp.prototype.zo = function () {
        T(this.sh, "z-index", "")
    };
    function Gp(a) {
        S.call(this, {
            f: "visualizer"
        });
        var b = this;
        this.Hb = a.wa;
        this.pa = so(this.Hb) ? 2 : 1;
        this.Ng = a.Zf;
        this.J = [];
        this.sf = [];
        this.Gc = null;
        this.H = a.s;
        this.$o = -1;
        this.tn = N(this);
        this.D = new S({
            f: "items-container"
        });
        this.a(this.D);
        this.D.h("horizontal", 1 == this.pa);
        this.D.h("vertical", 2 == this.pa);
        this.sh = K(this, new ip(this.D));
        this.K = K(this, new qp(this, this.D));
        this.Dg = K(this, new mp(this.K, this));
        this.hj = new Dp({
            yv: a.xv || this.D,
            wy: new Cp,
            wa: this.Hb,
            qn: this.K
        });
        I(this, this.Dg.tp, function () {
            return b.hj.A(!1)
        });
        I(this, this.Dg.up, function () {
            return b.hj.A(!0)
        });
        this.jh = new sp(this.K);
        this.jh.h("right", !0);
        P || sf || this.a(this.jh);
        Hp(this);
        this.kj(this.pa, this.Hb)
    }
    m(Gp, S);
    e = Gp.prototype;
    e.Od = function () {
        return this.tn
    };
    e.Ud = function () {
        return N(this)
    };
    e.Ia = function () {
        return this.Gc ? this.Gc.id() : null
    };
    e.sb = function (a) {
        var b = this;
        if (0 < this.J.length) {
            var c = new vp(this.pa, this.H);
            this.sf.push(c);
            this.D.a(c)
        }
        c = new tp({
            item: a,
            index: this.J.length + 1,
            Zf: this.Ng,
            orientation: this.pa
        });
        this.J.push(c);
        this.D.a(c);
        H(this, c.displayObject(), sh, function () {
            b.Dg.wh || b.tn.c(a.id())
        });
        P || 0 !== Wi(a).length && Fp(this.hj, c)
    };
    e.We = function (a) {
        this.Ng = a;
        for (var b = k(this.J), c = b.next(); !c.done; c = b.next())
            c.value.We(a);
        this.$()
    };
    e.Xe = function (a) {
        this.kj(so(a) ? 2 : 1, a);
        Hp(this);
        this.Hb = a
    };
    e.rb = function (a) {
        this.Gc && up(this.Gc, !1);
        var b = Xa(this.J, function (b) {
            return b.id() == a
        }),
        c = A(this.J[b]);
        up(c, !0);
        this.Gc = c;
        if (b > this.$o)
            for (c = this.$o + 1; c <= b; ++c)
                A(this.J[c]).Xm(!0), 0 < c && A(this.sf[c - 1]).Xm(!0);
        Ip(this)
    };
    e.deactivate = function () {
        this.Gc && (up(this.Gc, !1), this.Gc = null)
    };
    e.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        1 == this.pa ? R ? (a = this.displayObject().offsetWidth - 20, a = 2 >= this.J.length ? a / 2 : Math.max(66 * this.J.length + 40 - 20, a)) : a = this.displayObject().offsetWidth : a = this.displayObject().offsetHeight;
        b = a;
        this.J.length ? (a = this.J[0].displayObject().clientWidth, b = Math.floor(b / this.J.length), a = R ? Kc(b - a, 35, 50) : Kc(b - a, 40, 60)) : a = 40;
        b = k(this.sf);
        for (var c = b.next(); !c.done; c = b.next())
            c = c.value, c.Yk || wp(c, c.pa, a), xp(c, a);
        if (2 == this.pa)
            for (b = Math.floor(this.width() / 2) - 1, c = k(this.sf),
                a = c.next(); !a.done; a = c.next())
                T(a.value, "margin-left", b + "px");
        else
            for (b = k(this.sf), a = b.next(); !a.done; a = b.next())
                T(a.value, "margin-left", "");
        Ip(this);
        Hp(this);
        if (a = this.displayObject().offsetWidth)
            a = this.displayObject().getBoundingClientRect().width / a, this.Dg.Sa(a)
    };
    e.kj = function (a, b) {
        this.h("horizontal", 1 == a);
        this.h("vertical", 2 == a);
        Hp(this);
        T(this.D, "transform", "");
        this.D.h("horizontal", 1 == a);
        this.D.h("vertical", 2 == a);
        for (var c = k(this.sf), d = c.next(); !d.done; d = c.next())
            d.value.setOrientation(a);
        c = k(this.J);
        for (d = c.next(); !d.done; d = c.next())
            d.value.setOrientation(a);
        this.Xi(this.K);
        this.K = K(this, 1 == a ? new qp(this, this.D) : new rp(this, this.D));
        this.Dg.K = this.K;
        this.hj.Xe(b, this.K);
        b = this.jh;
        c = this.K;
        b.ee(b.Df);
        b.Df = c;
        b.$();
        I(b, c.Ed, b.Ef, b);
        this.pa = a
    };
    function Ip(a) {
        var b = a.Gc;
        if (b) {
            if (1 == a.pa) {
                var c = a.K.u;
                var d = b.displayObject().offsetWidth;
                b = b.displayObject().offsetLeft;
                d = b + d + 10;
                var f = a.displayObject().offsetWidth;
                c = d > c + f ? b : b < c ? d - f + 10 : c;
                b = Math.abs(a.D.width() - a.width());
                c = Kc(c, 0, b)
            } else
                a.height() >= a.D.height() ? c = 0 : (c = a.K.u, d = b.displayObject().offsetHeight, b = b.displayObject().offsetTop - 18, d = d + b + 10 - 18, f = a.displayObject().offsetHeight, c = d > c + f ? b : b < c ? d - f + 10 : c, b = Math.abs(a.D.height() - a.height()), c = Kc(c, 0, b));
            a.K.setPosition(c)
        }
    }
    function Hp(a) {
        var b = a.D.displayObject().offsetWidth > a.displayObject().offsetWidth && 1 == a.pa;
        a.jh.l(b);
        b && a.jh.$()
    };
    function Jp(a, b) {
        switch (a) {
        case 1:
            return new hp;
        case 3:
            return new fp;
        case 4:
            return new gp(b)
        }
        throw Error("Invalid type: " + a);
    }
    function Kp(a) {
        var b = ro[a.settings.wa()];
        cp.call(this, {
            hm: Jp(b, a.sa),
            w: a.w,
            s: a.s,
            settings: a.settings,
            Ka: a.Ka,
            Ea: a.Ea,
            Rm: a.Rm
        });
        this.hc = a.sa;
        this.C.h("fluid-description", !0);
        Lp(this, b);
        this.cf.NUMERATION_TYPE = this.Ks.bind(this)
    }
    m(Kp, cp);
    Kp.prototype.W = function (a, b) {
        cp.prototype.W.call(this, a, b);
        this.C.Tj(this.O.width());
        this.O.$()
    };
    Kp.prototype.Xe = function (a) {
        a = ro[a];
        Lp(this, a);
        var b = this.C,
        c = Jp(a, this.hc);
        b.je.remove(b.Ic, b.ba);
        b.je = c;
        b.je.apply(b.Ic, b.ba);
        this.O.Xe(a);
        this.$()
    };
    function dp(a, b) {
        var c = ro[b.wa()];
        return new Gp({
            wa: c,
            Zf: b.zf,
            xv: a.C.ba,
            s: a.H
        })
    }
    Kp.prototype.Ks = function () {
        this.O.We(this.Pa.zf)
    };
    function Lp(a, b) {
        a.C.ba.h("horizontal", !so(b));
        a.C.ba.h("vertical", so(b))
    };
    function Mp(a) {
        Jo.call(this, {
            document: a.document,
            fq: new kj
        });
        Ko(this, new Fo(this.g, a.view));
        this.dj = new Go(this.g, this.M);
        var b = new to(this.g),
        c = a.view,
        d = this.M;
        I(b, c.Od(), d.Nd, d);
        I(b, c.Ud(), d.Cj, d);
        uo(b, this.m, a.view);
        vo(this.m, a.view)
    }
    m(Mp, Jo);
    function Np(a) {
        lo.call(this, {
            fm: a.document.id(),
            wa: a.document.settings().wa(),
            Ye: a.Ye,
            s: a.s,
            w: a.w,
            Ob: a.Ob,
            wc: a.wc,
            R: a.R
        });
        this.m = a.document;
        var b = this.m.settings();
        this.C = new Kp({
            sa: this.G.lb,
            w: a.w,
            s: a.s,
            settings: b,
            Ka: this.qa,
            Ea: this.mc,
            Rm: this.ha
        });
        po(this, this.C);
        this.ra = new Mp({
            document: this.m,
            view: this.C
        });
        no(this, this.ra)
    }
    m(Np, lo);
    function Op(a, b) {
        this.g = a;
        this.M = b
    }
    Op.prototype.start = function (a) {
        a = this.Ik(a);
        this.M.Pf(a);
        this.M.start()
    };
    Op.prototype.Ik = function (a) {
        var b = this.g.nc;
        return a ? (a = Hi(this.g, a)) && Gi(this.g, a) ? a : b[0] : b[0]
    };
    function Pp(a) {
        M.call(this);
        this.O = a
    }
    m(Pp, M);
    e = Pp.prototype;
    e.$ = function () {
        this.O.$()
    };
    e.xc = function () {};
    e.yc = function () {};
    e.sb = function (a) {
        this.O.sb(a)
    };
    e.ac = function () {
        this.O.deactivate();
        return Promise.resolve()
    };
    e.bc = function () {
        this.O.deactivate();
        return Promise.resolve()
    };
    e.rb = function (a, b) {
        this.O.rb(a, b);
        return Promise.resolve()
    };
    e.activate = function () {};
    e.start = function () {};
    e.deactivate = function () {
        this.O.deactivate()
    };
    function Qp() {
        this.eh = new L
    }
    e = Qp.prototype;
    e.oh = null;
    e.Fd = null;
    e.Ge = !1;
    e.vq = function (a, b) {
        if ("touchEnd" == a)
            return this.Ge && this.oh && this.Fd ? this.Kp(this.Fd, this.oh) ? 1 : 0 : 0;
        if (1 != b.touches().length || we(b.td))
            return this.Ge = !1, 0;
        var c = new E(b.touches()[0].screenX(), b.touches()[0].screenY());
        if ("touchStart" == a) {
            if (xe(b.td))
                return this.Ge = !1, 0;
            this.oh = this.Fd = c;
            this.Ge = !0;
            return 0
        }
        if (!this.Ge || !this.oh || !this.Fd)
            return 0;
        (this.Ge = this.oh == this.Fd ? this.Lp(c, this.Fd) : this.Mp(c, this.Fd)) && b.td.preventDefault();
        this.Fd = c;
        return 0
    };
    e.Wp = function () {
        this.eh.c()
    };
    e.Qf = function () {};
    function Rp() {
        this.eh = new L
    }
    y(Rp, Qp);
    Rp.prototype.Dj = function () {
        return "scrollLeft"
    };
    Rp.prototype.Mp = function (a, b) {
        return a.x <= b.x
    };
    Rp.prototype.Lp = function (a, b) {
        return b.x - a.x >= Math.abs(a.y - b.y)
    };
    Rp.prototype.Kp = function (a, b) {
        var c = b.x - a.x;
        return 40 < c && .7 * c >= Math.abs(a.y - b.y)
    };
    function Sp() {
        this.eh = new L
    }
    y(Sp, Qp);
    Sp.prototype.Dj = function () {
        return "scrollRight"
    };
    Sp.prototype.Mp = function (a, b) {
        return a.x >= b.x
    };
    Sp.prototype.Lp = function (a, b) {
        return a.x - b.x >= Math.abs(a.y - b.y)
    };
    Sp.prototype.Kp = function (a, b) {
        var c = a.x - b.x;
        return 40 < c && .7 * c >= Math.abs(a.y - b.y)
    };
    function Tp() {
        M.call(this);
        this.Ba = [];
        this.wi = null;
        this.qd = N(this);
        this.Y = N(this)
    }
    m(Tp, M);
    Tp.prototype.Wa = function () {
        return this.qd
    };
    Tp.prototype.add = function (a) {
        var b = this;
        0 < this.Ba.length && I(this, this.Ba[this.Ba.length - 1].Y, function () {
            a.play(!0)
        });
        I(this, a.Wa(), function () {
            b.wi = a
        });
        this.Ba.push(a)
    };
    Tp.prototype.play = function (a) {
        var b = this;
        this.qd.c();
        this.Ba[0].play(p(a) ? a : !0);
        I(this, this.Ba[this.Ba.length - 1].Y, function () {
            b.wi = null;
            b.Y.c()
        });
        return !0
    };
    Tp.prototype.stop = function (a) {
        if (this.wi)
            for (var b = this.Ba.indexOf(this.wi); b < this.Ba.length; ++b)
                this.Ba[b].stop(a)
    };
    function Up(a, b) {
        M.call(this);
        this.Y = N(this);
        this.Bi = N(this);
        a.length || b.length || Na("Old and new items is empty");
        this.mk = a.length && !b.length ? Vp(this, a) : !a.length && b.length ? Wp(this, b) : Xp(this, a, b)
    }
    m(Up, M);
    Up.prototype.Wa = function () {
        return this.mk.Wa()
    };
    Up.prototype.play = function (a) {
        this.mk.play(a);
        return !0
    };
    Up.prototype.stop = function (a) {
        this.mk.stop(a)
    };
    function Vp(a, b) {
        b = Yp(a, b);
        J(a, b.Y, function () {
            a.Bi.c();
            a.Y.c()
        });
        return b
    }
    function Wp(a, b) {
        b = Yp(a, b);
        J(a, b.Wa(), function () {
            a.Y.c()
        });
        return b
    }
    function Xp(a, b, c) {
        var d = new Tp;
        b = Yp(a, b);
        J(a, b.Wa(), function () {
            for (var a = k(c), b = a.next(); !b.done; b = a.next())
                T(b.value, "display", "none")
        });
        J(a, b.Y, function () {
            for (var b = k(c), d = b.next(); !d.done; d = b.next())
                T(d.value, "display", "");
            a.Bi.c()
        });
        d.add(b);
        b = Zp(a, c);
        J(a, b.Y, function () {
            a.Y.c()
        });
        d.add(b);
        return d
    }
    function Yp(a, b) {
        var c = Va(b, function () {
            return "opacity"
        }),
        d = Va(b, function () {
            return 1
        }),
        f = Va(b, function () {
            return 0
        });
        c = new mn(b, c);
        d = new tk(d, f, te() ? .001 : 250);
        d.md = c;
        J(a, d.Wa(), function () {
            for (var a = k(b), c = a.next(); !c.done; c = a.next())
                T(c.value, "opacity", "1")
        });
        J(a, d.Y, function () {
            for (var a = k(b), c = a.next(); !c.done; c = a.next())
                T(c.value, "opacity", "")
        });
        return d
    }
    function Zp(a, b) {
        var c = Va(b, function () {
            return "opacity"
        }),
        d = Va(b, function () {
            return 0
        }),
        f = Va(b, function () {
            return 1
        });
        c = new mn(b, c);
        d = new tk(d, f, te() ? .001 : 250);
        d.md = c;
        J(a, d.Wa(), function () {
            for (var a = k(b), c = a.next(); !c.done; c = a.next())
                T(c.value, "opacity", "0")
        });
        J(a, d.Y, function () {
            for (var a = k(b), c = a.next(); !c.done; c = a.next())
                T(c.value, "opacity", "")
        });
        return d
    };
    function $p(a, b, c) {
        M.call(this);
        this.C = a;
        this.ba = b;
        this.Na = c;
        this.v = this.N = null;
        this.ca = !1;
        this.pj = N(this)
    }
    m($p, M);
    e = $p.prototype;
    e.P = function () {
        return this.v
    };
    function aq(a, b) {
        a.N && a.N.stop();
        var c = Promise.resolve();
        if (!a.ca)
            return bq(a), a.li(b), c;
        a.v != b && (c = new Promise(function (c) {
                c = cq(a, b, c);
                c.play();
                a.N = c
            }));
        return c
    }
    e.rb = function (a) {
        var b = this;
        this.N && this.N.stop();
        var c = Promise.resolve();
        if (!this.ca)
            return this.ba.l(!0), this.pj.c(), this.li(a), c;
        this.v != a && (c = new Promise(function (c) {
                c = dq(b, a, c);
                c.play();
                b.N = c
            }));
        return c
    };
    e.start = function () {
        this.ca = !0
    };
    e.activate = function () {
        this.v && this.v.open()
    };
    function cq(a, b, c) {
        var d = [a.ba];
        a.v && d.push(a.v);
        d = new Up(d, [b]);
        J(a, d.Wa(), function () {
            a.v && a.v.close();
            a.Na.a(b);
            Tn(b)
        });
        J(a, d.Bi, function () {
            bq(a);
            c();
            a.v && a.Na.removeChild(a.v);
            b.open();
            a.C.displayObject().scrollTop = 0;
            a.v = b
        });
        J(a, d.Y, function () {
            a.N = null
        });
        return d
    }
    function dq(a, b, c) {
        var d = [];
        a.v && d.push(a.v);
        var f = [b];
        a.ba.visible() ? c() : f.push(a.ba);
        d = new Up(d, f);
        J(a, d.Wa(), function () {
            a.v && a.v.close();
            a.Na.a(b);
            Tn(b)
        });
        J(a, d.Bi, function () {
            a.ba.l(!0);
            a.pj.c();
            0 <= f.indexOf(a.ba) && c();
            a.v && a.Na.removeChild(a.v);
            b.open();
            a.C.displayObject().scrollTop = 0;
            a.v = b
        });
        J(a, d.Y, function () {
            a.N = null
        });
        return d
    }
    function bq(a) {
        a.ba.l(!1);
        a.pj.c()
    }
    e.li = function (a) {
        this.v && this.Na.removeChild(this.v);
        this.Na.a(a);
        this.C.displayObject().scrollTop = 0;
        this.ca && a.open();
        this.v = a
    };
    function eq(a) {
        S.call(this, {
            f: "mobile-side-by-side-content-view"
        });
        var b = this;
        this.O = a.zv;
        this.J = [];
        this.Yg = N(this);
        this.Mg = N(this);
        this.ab = new ho(a.w, a.s, a.Ka, a.Ea);
        this.ba = new S({
            f: "visualizer-container"
        });
        this.ba.l(!1);
        this.a(this.ba);
        this.ba.a(this.O);
        Q && I(this, this.O.Hd, function () {
            ti(b.ba, {
                width: "",
                height: ""
            });
            var a = b.ba.displayObject().offsetWidth,
            d = b.ba.displayObject().offsetHeight;
            a && d && b.ba.resize(a, d)
        });
        this.Na = new S({
            f: "item-container"
        });
        this.a(this.Na);
        this.g = new $p(this, this.ba, this.Na);
        I(this, this.g.pj, this.Pt, this);
        fq(this, this.Na)
    }
    m(eq, S);
    e = eq.prototype;
    e.P = function () {
        return this.g.P()
    };
    e.xc = function (a) {
        a = this.ab.zc(a);
        this.J.push(a)
    };
    e.yc = function (a) {
        a = this.ab.zc(a);
        this.J.push(a)
    };
    e.sb = function (a) {
        a = this.ab.zc(a);
        this.J.push(a)
    };
    e.start = function () {
        this.g.start()
    };
    e.activate = function () {
        this.g.activate()
    };
    e.deactivate = function () {};
    e.ac = function () {
        return aq(this.g, this.J[0])
    };
    e.bc = function () {
        return aq(this.g, this.J[this.J.length - 1])
    };
    e.rb = function (a) {
        a = A(gq(this, a));
        return this.g.rb(a)
    };
    e.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        hq(this)
    };
    function gq(a, b) {
        return Wa(a.J, function (a) {
            return a.id() == b
        })
    }
    e.Pt = function () {
        this.O.$();
        hq(this)
    };
    function hq(a) {
        var b = a.displayObject().offsetHeight,
        c = a.Na.displayObject().offsetTop;
        T(a.Na, "min-height", b - c + "px")
    }
    function fq(a, b) {
        var c = new Rp,
        d = new Sp;
        b = new wh(b.displayObject(), [c, d]);
        I(a, c.eh, function () {
            a.Mg.c()
        });
        I(a, d.eh, function () {
            a.Yg.c()
        });
        xh(b)
    };
    function iq() {
        S.call(this, {
            f: "interactivity-content"
        });
        this.Yg = N(this);
        this.Mg = N(this);
        this.gi = N(this);
        this.Zb = []
    }
    m(iq, S);
    e = iq.prototype;
    e.Od = function () {
        return this.gi
    };
    e.Ud = function () {
        return N(this)
    };
    e.P = function () {
        return this.Io.P()
    };
    e.xc = function (a) {
        for (var b = k(this.Zb), c = b.next(); !c.done; c = b.next())
            c.value.xc(a)
    };
    e.yc = function (a) {
        for (var b = k(this.Zb), c = b.next(); !c.done; c = b.next())
            c.value.yc(a)
    };
    e.sb = function (a) {
        for (var b = k(this.Zb), c = b.next(); !c.done; c = b.next())
            c.value.sb(a)
    };
    e.ac = function (a) {
        jq(this, function (b) {
            return b.ac(a)
        })
    };
    e.bc = function (a) {
        jq(this, function (b) {
            return b.bc(a)
        })
    };
    e.rb = function (a, b) {
        jq(this, function (c) {
            return c.rb(a, b)
        })
    };
    function jq(a, b) {
        function c(d) {
            return d < a.Zb.length ? b(a.Zb[d]).then(function () {
                return c(++d)
            }) : Promise.resolve()
        }
        c(0).catch(function (a) {
            console && console.log(a);
            throw a;
        })
    }
    e.start = function () {
        if (!this.Io)
            throw Error("navigationObject is not initialized");
        if (!this.wr)
            throw Error("activateItemObject is not initialized");
        for (var a = k(this.Zb), b = a.next(); !b.done; b = a.next())
            b.value.start()
    };
    e.activate = function () {
        for (var a = k(this.Zb), b = a.next(); !b.done; b = a.next())
            b.value.activate()
    };
    e.deactivate = function (a) {
        for (var b = k(this.Zb), c = b.next(); !c.done; c = b.next())
            c.value.deactivate(a)
    };
    e.W = function (a, b) {
        S.prototype.W.call(this, a, b);
        a = k(this.Zb);
        for (b = a.next(); !b.done; b = a.next())
            b.value.$()
    };
    function kq(a) {
        iq.call(this);
        this.O = new Gp({
            wa: 1,
            Zf: a.settings.zf,
            s: a.s
        });
        this.C = new eq({
            zv: this.O,
            w: a.w,
            s: a.s,
            Ka: a.Ka,
            Ea: a.Ea
        });
        this.a(this.C);
        this.Zb.push(this.C);
        this.Zb.push(new Pp(this.O));
        a = this.O;
        se(a.Od(), this.gi);
        this.wr = a;
        a = this.C;
        se(a.Yg, this.Yg);
        se(a.Mg, this.Mg);
        this.Io = a
    }
    m(kq, iq);
    function lq(a) {
        Jo.call(this, {
            document: a.document,
            fq: new kj
        });
        Ko(this, new Do(this.g, a.view));
        this.dj = new Op(this.g, this.M);
        var b = new to(this.g),
        c = a.view;
        I(b, c.Od(), this.Nd, this);
        I(b, c.Yg, this.prev, this);
        I(b, c.Mg, this.next, this);
        vo(a.document, a.view)
    }
    m(lq, Jo);
    function mq(a) {
        lo.call(this, {
            fm: a.document.id(),
            wa: a.document.settings().wa(),
            Ye: a.Ye,
            s: a.s,
            w: a.w,
            Ob: a.Ob,
            Lh: a.Lh,
            wc: a.wc,
            R: a.R
        });
        this.m = a.document;
        var b = this.m.settings();
        this.C = new kq({
            w: a.w,
            s: a.s,
            settings: b,
            Ka: this.qa,
            Ea: this.mc
        });
        po(this, this.C);
        this.ra = new lq({
            document: this.m,
            view: this.C
        });
        no(this, this.ra)
    }
    m(mq, lo);
    function nq(a) {
        Y.apply(this, arguments)
    }
    m(nq, Y);
    nq.prototype.Mn = function (a) {
        return R ? new mq(a) : new Np(a)
    };
    nq.prototype.Yn = function (a) {
        return new nm({
            Fa: a.Fa(),
            items: a.content(),
            summary: a.summary(),
            Zf: a.settings().zf
        })
    };
    function oq(a) {
        Vi.call(this, a.id, a.title, a.zb, a.content, a.audio);
        this.Hr = a.color;
        N(this);
        this.J = []
    }
    m(oq, Vi);
    oq.prototype.color = function () {
        return this.Hr
    };
    oq.prototype.items = function () {
        return this.J
    };
    oq.prototype.sb = function (a) {
        this.J.push(a)
    };
    oq.prototype.Ib = function () {
        this.Sb && this.Sb.Ib();
        Ta(this.J, function (a) {
            a.Ib()
        }, this)
    };
    function pq(a) {
        var b = {},
        c;
        for (c in a)
            b[c] = "object" == typeof a[c] && null != a[c] ? pq(a[c]) : a[c];
        return b
    };
    var qq = pq(Zl);
    qq.cd = Object.assign(qq.cd, rd);
    qq.settings = Object.assign(qq.settings, {
        wa: {
            _: "vl"
        },
        ly: {
            _: "bc"
        },
        oy: {
            _: "tc"
        },
        my: {
            _: "sbc"
        },
        ny: {
            _: "stc"
        },
        Ju: {
            _: "nt"
        }
    });
    var rq = G(qq);
    function sq(a, b) {
        $l.call(this, rq, a, b)
    }
    m(sq, $l);
    sq.prototype.Ij = function (a) {
        var b = this.j.settings,
        c = new pm,
        d = G(Ul);
        c.Qb(a[d.title]);
        var f = a[d.Ze],
        g = zj(c, "INTERACTIVITY_TITLE_ENABLED");
        c.Ep = f;
        Aj(c, g);
        c.Wm(a[d.fitToWindow]);
        f = a[d.contentScale];
        g = zj(c, "CONTENT_SCALE");
        c.Tb = f;
        Aj(c, g);
        Bj(c, A(a[d.Uf]));
        f = A(a[d.Jh]);
        g = zj(c, "INTERACTIVITY_HEIGHT");
        c.ho = f;
        Aj(c, g);
        c.yo = a[d.Hq];
        f = a[d.Yf];
        g = zj(c, "NAVIGATION_BUTTONS_ENABLED");
        c.Ho = f;
        Aj(c, g);
        f = a[d.dk];
        g = zj(c, "USE_PRESENTATION_BACKGROUND");
        c.Jp = f;
        Aj(c, g);
        c.Um(a[d.Ne]);
        c.vf = a[d.miniskinCustomizationEnabled];
        c.Xe(a[b.wa]);
        a = a[b.Ju];
        b = zj(c, "NUMERATION_TYPE");
        c.zf = a;
        Aj(c, b);
        return c
    };
    sq.prototype.Xn = function (a, b, c, d, f) {
        return new rm(a, b, c, d, f)
    };
    sq.prototype.Wn = function (a, b, c, d) {
        a = cm(this, a, b, c, d);
        return new qm(a.id, a.title, a.zb, a.content, a.audio)
    };
    function tq(a, b, c, d, f, g) {
        em.call(this, a, b, c, d, f, g)
    }
    m(tq, em);
    tq.prototype.pi = function (a) {
        return new sq(a)
    };
    tq.prototype.ti = function (a) {
        return new nq(a)
    };
    tq.prototype.gf = function (a) {
        return new hm(a)
    };
    function uq(a) {
        var b = a.data,
        c = a.ag,
        d = a.eg,
        f = a.ig,
        g = a.width,
        h = a.height,
        l = a.Xl,
        u = a.tb,
        t = a.Wd,
        D = a.R;
        this.sa = a.sa;
        this.data = b;
        this.ag = c;
        this.eg = d;
        this.ig = f;
        this.width = g;
        this.height = h;
        this.Xl = l;
        this.tb = u;
        this.Wd = t;
        this.R = D
    };
    function vq(a, b, c, d, f) {
        M.call(this);
        this.i = a.R;
        this.Fb = b;
        this.F = c;
        this.Sc = d;
        this.gc = f;
        this.hb = bl(a.data);
        this.Cg = this.pi(a.R, a.Xl);
        this.m = this.Cg.load(this.hb);
        this.H = this.gf({
            mq: a.ig
        });
        this.b = a.sa;
        O(this.b, "z-index", "0");
        this.La = a.tb;
        this.ke = a.Wd;
        this.fp = new F(a.width, a.height);
        R || (O(this.b, "width", a.width + "px"), O(this.b, "height", a.height + "px"));
        df && Ph(document.body, "visuals_scroll");
        this.tc = new fj({});
        this.hl = a.ag;
        this.ah = a.eg;
        Dg(this.hb);
        this.Ri = N(this);
        this.fa = this.ga = null;
        (this.Yb = this.i.accessibilityModeEnabled() ?
                new Gn("visuals-player-preloader", this.H) : null) && this.b.appendChild(this.Yb.displayObject());
        this.Yb && Hn(this.Yb);
        this.La && (a = this.m.settings(), b = this.La.miniskinCustomizationEnabled(), a.vf = b)
    }
    m(vq, M);
    vq.prototype.Kh = function (a) {
        var b = this;
        am(this.Cg, function () {
            b.ah.load(b.m.id(), b.m.slideBackground(), b.hb, b.mb(), b.m.settings().miniskinCustomizationEnabled(), function () {
                b.fa = A(b.ah.Bh());
                b.ga = b.ti({
                    document: b.m,
                    sa: b.b,
                    s: b.H,
                    Ob: 2,
                    Bh: b.fa,
                    w: b.F,
                    mediaController: b.Sc,
                    Xj: b.tc,
                    tb: b.La,
                    Wd: b.ke,
                    R: b.i,
                    wc: b.gc,
                    Tm: b.Fb
                });
                b.ga.resize(b.fp.width, b.fp.height);
                b.ga.l(!1);
                J(b, b.ga.playerStartedEvent(), function () {
                    if (b.Yb) {
                        var a = b.Yb;
                        a.Id && (a.Id = !1, clearTimeout(a.Fg), clearTimeout(a.lh), a.visible() && a.fl())
                    }
                    b.ga.l(!0)
                });
                Zk(a, b.ga);
                b.Ri.c();
                a.Cf == (b.i.accessibilityModeEnabled() ? 2 : 1) && b.hl(a)
            })
        })
    };
    vq.prototype.mb = function () {
        return !1
    };
    vq.prototype.gf = function () {};
    function wq(a) {
        gm.call(this, a)
    }
    m(wq, gm);
    function xq() {
        yj.call(this)
    }
    m(xq, yj);
    xq.prototype.wa = function () {
        return 3
    };
    function yq(a, b, c) {
        this.bs = a;
        this.$c = b;
        this.Mc = c
    }
    yq.prototype.width = function () {
        return this.$c
    };
    yq.prototype.height = function () {
        return this.Mc
    };
    function zq(a, b, c, d) {
        this.Nt = a;
        this.it = b;
        this.$c = c;
        this.Mc = d
    }
    zq.prototype.width = function () {
        return this.$c
    };
    zq.prototype.height = function () {
        return this.Mc
    };
    function Aq(a, b, c, d, f, g, h, l) {
        Vi.call(this, a, b, c, d, f);
        this.Oc = g;
        this.Mt = h;
        this.vr = l
    }
    m(Aq, Vi);
    Aq.prototype.image = function () {
        return this.Oc
    };
    Aq.prototype.video = function () {
        return this.Mt
    };
    Aq.prototype.xh = function () {
        return this.vr
    };
    function Bq(a) {
        return new Aq(a.id(), a.title(), a.zb(), a.content(), a.audio(), null, null, null)
    }
    function Cq(a, b, c, d, f) {
        Xi.call(this, a, b, c, d, f)
    }
    m(Cq, Xi);
    Cq.prototype.Fa = function () {
        var a = Xi.prototype.Fa.call(this);
        return a ? Bq(a) : null
    };
    Cq.prototype.content = function () {
        return Xi.prototype.content.call(this).map(function (a) {
            return a instanceof oq ? [Bq(a)].concat(a.items()) : [a]
        }).reduce(function (a, b) {
            return a.concat(b)
        }).filter(function (a) {
            return a.content()
        })
    };
    Cq.prototype.summary = function () {
        var a = Xi.prototype.summary.call(this);
        return a ? Bq(a) : null
    };
    function Dq() {
        this.Br = null
    };
    function Eq(a) {
        Ro.call(this, a)
    }
    m(Eq, Ro);
    Eq.prototype.ld = function (a) {
        this.b.a(a)
    };
    Eq.prototype.$g = function (a) {
        this.b.removeChild(a)
    };
    Eq.prototype.$i = function () {};
    Eq.prototype.ze = function () {
        return 0
    };
    function Fq(a) {
        Ro.call(this, a)
    }
    m(Fq, Eq);
    Fq.prototype.Pb = function (a) {
        Eq.prototype.Pb.call(this, a);
        A(this.P()).focus()
    };
    function Gq(a) {
        M.call(this);
        this.b = a;
        this.pf = null
    }
    m(Gq, M);
    function Hq(a, b) {
        a.pf && a.b.removeChild(a.pf);
        a.Xi(a.pf);
        a.pf = null;
        if (b) {
            var c = b.id();
            b = new S({
                va: "A",
                f: "accessibility-hidden-link"
            });
            b.ea(mg().Ra("accessibilityHiddenLink"));
            b.setAttribute("href", "#" + c);
            c = new S({
                f: "accessibility-hidden-link-container"
            });
            ri(c, b);
            a.pf = K(a, c);
            a.b.a(a.pf)
        }
    };
    function Iq(a, b) {
        var c = new S({
            f: "accessibility-rich-text-image",
            va: "IMG"
        });
        c.setAttribute("src", a);
        p(b) && c.setAttribute("alt", b);
        return c.displayObject()
    }
    function Jq(a, b, c) {
        var d = new S({
            f: "accessibility-rich-text-video",
            va: "VIDEO"
        });
        a.forEach(function (a) {
            d.a(Vc(Pi('<source src="' + a.src + '" type="' + a.mimeType + '" />')))
        });
        d.setAttribute("poster", b);
        d.setAttribute("preload", "metadata");
        d.setAttribute("controls", "");
        ui(d, c);
        return d.displayObject()
    };
    function Kq(a) {
        Rn.call(this, {
            va: "MAIN",
            f: "accessibility-item-content",
            Wf: a.Wf,
            Le: a.Le,
            content: a.content,
            Se: a.Se
        });
        this.Qj(a.Se);
        this.setAttribute("tabindex", "-1");
        this.la = a.jm;
        this.Da = a.title;
        this.qb = null;
        this.Tn = this.fe = new S({
            o: V(this, "content"),
            tabIndex: -1
        });
        if (this.Da) {
            var b = new S({
                o: V(this, "title"),
                tabIndex: -1
            });
            b.$d(this.Da);
            this.a(b);
            this.qb = this.Tn = b
        }
        var c = a.mu;
        a = c.image;
        b = c.video;
        c = (c = c.xh) || "";
        a ? (a = Iq(a.bs, c), this.a(a)) : b && (a = Jq(b.Nt, b.it, c), this.a(a));
        Lq(this);
        this.fe.a(this.Ca);
        this.a(this.fe);
        vi(this, "main");
        this.qb ? Ej(this.qb, this) : (a = mg(), ui(this, a.Ra("accessibleAriaLabelItemDescription")))
    }
    m(Kq, Rn);
    Kq.prototype.open = function () {
        Rn.prototype.open.call(this);
        this.focus()
    };
    Kq.prototype.focus = function () {
        var a = this;
        Ue(function () {
            var b = a.Tn.displayObject();
            return (a.la.Br || b).focus()
        })
    };
    function Lq(a) {
        if (a.pg) {
            var b = new S({
                va: "AUDIO"
            });
            a.pg.jn().forEach(function (a) {
                var c = a.src();
                a = null === a.type() ? "" : "" + a.type();
                b.a(Vc(Pi('<source src="' + c + '" type="' + a + '" />')))
            });
            b.setAttribute("preload", "metadata");
            b.setAttribute("controls", "");
            ui(b, a.pg.text());
            a.a(b)
        }
    };
    function Mq() {}
    Mq.prototype.lq = function (a) {
        return Jq(a.info, a.poster, a.text)
    };
    Mq.prototype.kq = function (a) {
        return Iq(a.info.src, a.text)
    };
    Mq.prototype.iq = function (a) {
        a = a.dr;
        var b = new S({
            f: "accessibility-rich-text-equation"
        });
        b.$d(a);
        return b.displayObject()
    };
    function Nq(a, b, c, d, f) {
        eo.call(this, a, b, c, d);
        this.la = f
    }
    m(Nq, eo);
    Nq.prototype.zc = function (a) {
        var b = a.content(),
        c = fo(this, b);
        a = new Kq({
            Se: a.id(),
            title: this.Gk(a),
            content: c,
            um: b,
            Wf: this.uo,
            jm: this.la,
            Le: a.audio(),
            mu: {
                image: a.image(),
                video: a.video(),
                xh: a.xh()
            }
        });
        go(this, a);
        return a
    };
    Nq.prototype.Kn = function () {
        return new Mq
    };
    Nq.prototype.Gk = function (a) {
        return a.title().text() ? a.title().htmlText() : ""
    };
    function Oq(a) {
        M.call(this);
        this.b = a.sa;
        this.g = a.Hj;
        this.ka = this.Yc = this.Qc = null;
        this.ca = !1;
        this.jc = N(this);
        this.ab = a.Gu
    }
    m(Oq, M);
    e = Oq.prototype;
    e.Ud = function () {
        return this.jc
    };
    e.tm = function (a) {
        return !!this.Qc && this.Qc.id() == a || !!this.Yc && this.Yc.id() == a
    };
    e.P = function () {
        return this.ka
    };
    e.xc = function (a) {
        this.Qc = this.ab.zc(a)
    };
    e.yc = function (a) {
        this.Yc = this.ab.zc(a)
    };
    e.ac = function () {
        this.ng(A(this.Qc))
    };
    e.bc = function () {
        this.ng(A(this.Yc))
    };
    e.Pb = function () {};
    e.setParentScale = function () {};
    e.start = function () {
        this.ca = !0
    };
    e.activate = function () {
        this.ca && this.ka && this.ka.open()
    };
    e.deactivate = function () {
        this.ka && (this.b.removeChild(this.ka), this.ka = null)
    };
    e.ng = function (a) {
        this.deactivate();
        this.ka = a;
        var b = this.g,
        c = b.P();
        c && b.$g(c);
        this.b.a(a);
        a.focus()
    };
    function Pq(a) {
        S.call(this, {
            f: "accessibility-content-view"
        });
        this.Pa = a.settings;
        this.J = [];
        this.g = new Fq(this);
        this.ab = new Nq(a.w, a.s, a.Ka, a.Ea, a.jm);
        this.ha = new Oq({
            w: a.w,
            s: a.s,
            Ka: a.Ka,
            Ea: a.Ea,
            sa: this,
            Hj: this.g,
            Gu: this.ab
        });
        this.la = new No(this.ha, new Mo(this.g), a.w);
        this.Di = new Gq(this);
        this.gi = N(this);
        this.jc = N(this)
    }
    m(Pq, S);
    e = Pq.prototype;
    e.Od = function () {
        return this.gi
    };
    e.Ud = function () {
        return this.jc
    };
    e.P = function () {
        return this.la.P()
    };
    e.xc = function (a) {
        this.ha.xc(a)
    };
    e.yc = function (a) {
        this.ha.yc(a)
    };
    e.sb = function (a) {
        a = this.ab.zc(a);
        this.J.push(a)
    };
    e.rb = function (a) {
        this.ha.deactivate();
        var b = this.J.find(function (b) {
            return b.id() == a
        }) || null;
        A(b);
        Oo(this.la);
        So(this.g, b, 1);
        Hq(this.Di, b)
    };
    e.ac = function () {
        Po(this.la);
        this.ha.ac();
        Hq(this.Di, this.ha.P())
    };
    e.bc = function () {
        Po(this.la);
        this.ha.bc();
        Hq(this.Di, this.ha.P())
    };
    e.deactivate = function (a) {
        if (this.ha.tm(a)) {
            this.ha.deactivate();
            this.g.activate();
            a = this.g;
            var b = a.P();
            b && a.ld(b);
            Oo(this.la);
            this.g.P() && Hq(this.Di, this.g.P())
        }
    };
    e.start = function () {
        this.la.start()
    };
    e.activate = function () {
        this.la.activate()
    };
    function Qq(a) {
        Jo.call(this, {
            document: a.document,
            fq: new kj
        });
        Ko(this, new Fo(this.g, a.view));
        this.dj = new Go(this.g, this.M);
        var b = new to(this.g),
        c = a.view,
        d = this.M;
        I(b, c.Od(), d.Nd, d);
        I(b, c.Ud(), d.Cj, d);
        vo(a.document, a.view)
    }
    m(Qq, Jo);
    function Rq(a) {
        lo.call(this, {
            fm: a.document.id(),
            wa: a.document.settings().wa(),
            Ye: a.Ye,
            s: a.s,
            w: a.w,
            Ob: a.Ob,
            wc: a.wc,
            R: a.R
        });
        var b = this;
        this.m = a.document;
        this.la = new Dq;
        this.C = new Pq({
            settings: this.m.settings(),
            w: a.w,
            s: a.s,
            Ka: this.qa,
            Ea: this.mc,
            jm: this.la
        });
        po(this, this.C);
        var c = Qa(this.G, dk);
        I(this, c.wn, function () {
            var a = A(c.Za),
            f = mg();
            Eh(a, "label", f.Ra("accessibilitySkinCreatedWith"));
            Dh(a, "banner");
            a.setAttribute("tabindex", 0);
            b.C.a(a)
        });
        this.ra = new Qq({
            document: this.m,
            view: this.C
        });
        no(this, this.ra)
    }
    m(Rq, lo);
    Rq.prototype.mb = function () {
        return !0
    };
    function Sq(a) {
        Y.call(this, a);
        var b = this;
        this.Ib();
        I(this, this.aa.Yd().ad(), function () {
            var a = A(b.aa.Yd().P());
            b.G.Pj([].concat(ca(b.Ok().keys())).includes(a.id()))
        })
    }
    m(Sq, Y);
    e = Sq.prototype;
    e.ta = function () {
        return !0
    };
    e.Vm = function (a) {
        this.G.Vm(a)
    };
    e.Mn = function (a) {
        return new Rq(a)
    };
    e.Ma = function () {
        if (2 == this.nb)
            T(this.G.za(), "width", "100%");
        else {
            var a = pj(this.ia).Xd,
            b = ai({
                width: a.width,
                height: a.height,
                boundingWidth: this.Ua.width,
                boundingHeight: this.Ua.height,
                Pd: !1
            });
            a = b.width;
            b = b.left;
            this.G.za().resize(a);
            ni(this.G.za(), b)
        }
    };
    e.Ok = function () {
        return new Map(this.m.content().map(function (a) {
                var b = a.id(),
                c;
                (c = a.title().text()) || (a = (a = a.content().text().replace(/(\r\n|\r|\n)+/g, " ").trim()) ? a.substring(0, 100) : "\u200b", c = 100 == a.length ? a + "\u2026" : a);
                return [b, c]
            }))
    };
    var Tq = pq(Zl);
    Tq.settings = Object.assign(Tq.settings, {});
    Tq.cd = Object.assign(Tq.cd, qd);
    Tq.content.items.type.item = Object.assign(Tq.content.items.type.item, {
        image: {
            _: "im",
            id: {
                _: "i"
            },
            width: {
                _: "w"
            },
            height: {
                _: "h"
            }
        },
        video: {
            _: "vi",
            id: {
                _: "i"
            },
            Xu: {
                _: "pi"
            },
            width: {
                _: "w"
            },
            height: {
                _: "h"
            }
        },
        xh: {
            _: "at"
        }
    });
    var Uq = G(Tq);
    function Vq(a) {
        oq.call(this, a)
    }
    m(Vq, oq);
    function Wq(a, b) {
        $l.call(this, Uq, a, b)
    }
    m(Wq, $l);
    Wq.prototype.Ij = function (a) {
        var b = new xq,
        c = G(Ul);
        b.Qb(a[c.title]);
        Bj(b, A(a[c.Uf]));
        return b
    };
    Wq.prototype.Xn = function (a, b, c, d, f) {
        return new Cq(a, b, c, d, f)
    };
    Wq.prototype.Wn = function (a, b, c, d) {
        if (a[b.image]) {
            var f = A(this.Ni);
            f = ll(f, a[b.image][b.image.id]);
            f = new yq(f.src, f.width, f.height)
        } else
            f = null;
        if (a[b.video]) {
            var g = A(this.Ni);
            var h = g.Ot[a[b.video][b.video.id]];
            g = ll(g, a[b.video][b.video.Xu]);
            h = new zq(h, g.src, g.width, g.height)
        } else
            h = null;
        g = a[b.xh] || null;
        a = cm(this, a, b, c, d);
        return new Aq(a.id, a.title, a.zb, a.content, a.audio, f, h, g)
    };
    Wq.prototype.Vn = function (a, b, c, d) {
        var f = a[b.color];
        a = a[b.item] ? cm(this, a[b.item], b.item, c, d) : {
            id: a[b.id],
            title: dm(this, a[b.title], b.title, d),
            zb: dm(this, a[b.title], b.title, d).text()
        };
        return new Vq({
            id: a ? a.id : "",
            title: a ? a.title : new Ui("", [], [], this.me, this.Kd),
            zb: a ? a.zb : "",
            content: a ? a.content : new Ui("", [], [], this.me, this.Kd),
            audio: a ? a.audio : null,
            color: f
        })
    };
    function Xq(a, b, c, d, f) {
        vq.call(this, a, b, c, d, f)
    }
    m(Xq, vq);
    Xq.prototype.pi = function (a, b) {
        return new Wq(a, b)
    };
    Xq.prototype.ti = function (a) {
        return new Sq(a)
    };
    Xq.prototype.gf = function (a) {
        return new wq(a)
    };
    Xq.prototype.mb = function () {
        return !0
    };
    function Yq(a, b, c, d, f, g) {
        em.call(this, a, b, c, d, f, g)
    }
    m(Yq, em);
    Yq.prototype.pi = function (a) {
        return new Wq(a)
    };
    Yq.prototype.ti = function (a) {
        return new Sq(a)
    };
    Yq.prototype.gf = function (a) {
        return new wq(a)
    };
    Yq.prototype.mb = function () {
        return !0
    };
    function Zq(a, b) {
        M.call(this);
        Dg(bl(a.data));
        this.i = a.R;
        this.b = a.sa;
        this.ni = this.i.Kb() ? null : Qa(a, Ig);
        this.Pn = this.i.Kb() ? Qa(a, uq) : null;
        this.Fb = new bj;
        this.yf = this.af = null;
        this.gt = b;
        this.F = new ch;
        this.Sc = new ah(this.F);
        this.Wg = new Yk(this.i);
        !this.i.accessibilityModeEnabled() || this.i.Kb() ? b = null : (b = new hj({
                    f: "player-switch-control",
                    tabIndex: 0
                }), b.h("with-launcher", !1));
        if (this.Va = b)
            I(this, this.Va.X(), this.no, this), $q(this), b = new S({
                va: "SECTION"
            }), vi(b, "region"), ui(b, mg().Ra("accessibleAriaLabelSettings")),
            b.a(this.Va), Yc(a.sa, b.displayObject(), 0);
        this.zk = new jj(new ij(this.Va), new gj(this))
    }
    m(Zq, M);
    Zq.prototype.Kh = function () {
        if (this.i.ta() && !this.af)
            this.af = this.i.Kb() ? new Xq(A(this.Pn), this.Fb, this.F, this.Sc, this.zk) : new Yq(A(this.ni), this.Fb, this.F, this.Sc, this.zk, new hh), ar(this, this.af);
        else if (!this.i.ta() && !this.yf) {
            var a = A(this.i.Kb() ? this.Pn : this.ni),
            b = this.i.Kb() ? void 0 : new hh;
            this.yf = this.gt(a, this.Fb, this.F, this.Sc, this.zk, b);
            ar(this, this.yf)
        }
    };
    Zq.prototype.bd = function (a) {
        a = void 0 === a ? this.Wg.Qe() : a;
        this.no(a)
    };
    function ar(a, b) {
        J(a, b.Ri, function () {
            if (a.i.accessibilityModeEnabled()) {
                var c = b.ga,
                d = a.i.yg;
                c && d && c.setPlayerContext({
                    si: d
                });
                c && d && a.Fb.lock();
                !a.i.ta() && a.Va && a.Va.focus();
                2 == a.Wg.Cf && Zc(b.fa)
            }
            a.i.accessibilityModeEnabled() && (1 == a.Wg.Cf && (a.bd(!1), a.bd(!1)), a.bd(!1), a.bd(!1))
        });
        b.Kh(a.Wg)
    }
    Zq.prototype.no = function (a) {
        this.i.bd(a);
        this.Kh();
        A(this.af);
        A(this.yf);
        var b = this.af.ga,
        c = b ? b.displayObject() : null,
        d = this.yf.ga,
        f = d ? d.displayObject() : null,
        g = this.af.fa,
        h = this.yf.fa,
        l = this.i.ta();
        a = l ? d : b;
        var u = l ? f : c,
        t = l ? h : g;
        b = l ? b : d;
        c = l ? c : f;
        g = l ? g : h;
        u && O(u, "visibility", "hidden");
        Zc(u);
        a && !this.i.Kb() && a.deactivate();
        Zc(t);
        g && document.getElementsByTagName("HEAD".toString())[0].appendChild(g);
        g && (g.disabled = !0);
        c && Yc(this.b, c, 1);
        b && !this.i.Kb() && this.Wg.Qe() && b.activate();
        c && O(c, "visibility", "");
        $q(this);
        !this.i.ta() && this.Va && this.Va.focus()
    };
    function $q(a) {
        if (a.Va) {
            var b = a.i.ta(),
            c = mg();
            a.Va.setAttribute("title", b ? c.Ra("enableNormalMode") : c.Ra("enableAccessibilityMode"));
            ki(a.Va, b ? -1 : 0);
            b ? Eh(a.Va.b, "hidden", !0) : a.Va.displayObject().removeAttribute(Fh("hidden"));
            a.Va.h("accessibility", b);
            a.Va.h("nonaccessibility", !b)
        }
    };
    function br() {
        this.Lr = new jd;
        this.fa = null
    }
    br.prototype.Td = function (a, b) {
        return this.fa = this.fa ? this.fa : this.Lr.Td(a, b)
    };
    v("StepsPlayer.start", function (a, b, c, d) {
        c = new Pf({
            accessibilityModeEnabled: c,
            Kb: !1
        });
        var f = new Cg({
            R: c,
            cq: G(rd),
            gu: new ld,
            er: new nd,
            Lq: new md,
            Tp: new kd,
            Sp: new br
        });
        (new Zq(new Ig({
                    ig: Ga,
                    sa: a,
                    data: b,
                    ag: d,
                    eg: f,
                    R: c
                }), function (a, b, c, d, f, D) {
                return new tq(a, b, c, d, f, D)
            })).Kh()
    }, void 0);
    function Of() {
        return !1
    }
    function fe(a) {
        a && (A(!a.disposed), ya(a.dd) && a.dd(), a.disposed = !0)
    }
    function cr(a, b) {
        Of() && (b ? n.console.error(a) : n.console.warn(a))
    }
    function qe(a, b) {
        var c = a.stack || a.toString();
        0 > String(c).indexOf(a.message) && cr(a.message, b);
        cr(c, b)
    }
    window.onerror = function (a) {
        for (var b = [], c = 0; c < arguments.length; ++c)
            b[c - 0] = arguments[c];
        c = k(b);
        b = c.next().value;
        c.next();
        c.next();
        c.next();
        (c = c.next().value) ? qe(c, !0) : cr(b, !0);
        return !0
    };
    La = function (a) {
        try {
            throw Error(a.message);
        } catch (b) {
            qe(b, !1)
        }
    };
    n.console || (window._log = "", n.console = {
            log: function (a) {
                window._log += "\n" + a
            },
            warn: function (a) {
                window._log += "\nwarn: " + a
            },
            error: function (a) {
                window._log += "\nerror: " + a
            }
        });
})();

!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ResizeObserver = e()
}
(this, function () {
    "use strict";
    function t(t) {
        return window.getComputedStyle(t)
    }
    function e(t) {
        return parseFloat(t) || 0
    }
    function n(t) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
            r[i - 1] = arguments[i];
        return r.reduce(function (n, r) {
            var i = t["border-" + r + "-width"];
            return n + e(i)
        }, 0)
    }
    function r(t) {
        for (var n = ["top", "right", "bottom", "left"], r = {}, i = n, o = Array.isArray(i), s = 0, i = o ? i : i[Symbol.iterator](); ; ) {
            var a;
            if (o) {
                if (s >= i.length)
                    break;
                a = i[s++]
            } else {
                if (s = i.next(), s.done)
                    break;
                a = s.value
            }
            var u = a,
            c = t["padding-" + u];
            r[u] = e(c)
        }
        return r
    }
    function i(t, e, n, r) {
        return {
            width: t,
            height: e,
            top: n,
            right: t + r,
            bottom: e + n,
            left: r
        }
    }
    function o(t) {
        var e = t.getBBox();
        return i(e.width, e.height, 0, 0)
    }
    function s() {
        var n = t(document.documentElement),
        r = e(n.width),
        o = e(n.height);
        return i(r, o, 0, 0)
    }
    function a(o) {
        var s = o.clientWidth,
        a = o.clientHeight;
        if (!s && !a)
            return O;
        var u = t(o),
        c = r(u),
        h = c.left + c.right,
        f = c.top + c.bottom,
        l = e(u.width),
        p = e(u.height);
        "border-box" === u.boxSizing && (Math.round(l + h) !== s && (l -= n(u, "left", "right") + h), Math.round(p + f) !== a && (p -= n(u, "top", "bottom") + f));
        var d = Math.round(l + h) - s,
        _ = Math.round(p + f) - a;
        return 1 !== Math.abs(d) && (l -= d),
        1 !== Math.abs(_) && (p -= _),
        i(l, p, c.top, c.left)
    }
    function u(t) {
        return t instanceof window.SVGElement
    }
    function c(t) {
        return t === document.documentElement
    }
    function h(t) {
        return u(t) ? o(t) : c(t) ? s() : a(t)
    }
    function f(t, e) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = {
                configurable: n.configurable || !1,
                writable: n.writable || !1,
                enumerable: n.enumerable || !1
            }, i = Object.keys(e), o = Array.isArray(i), s = 0, i = o ? i : i[Symbol.iterator](); ; ) {
            var a;
            if (o) {
                if (s >= i.length)
                    break;
                a = i[s++]
            } else {
                if (s = i.next(), s.done)
                    break;
                a = s.value
            }
            var u = a;
            r.value = e[u],
            Object.defineProperty(t, u, r)
        }
        return t
    }
    var l = function (t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    },
    p = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function (e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }
    (),
    d = function (t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    },
    _ = function (t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    },
    b = "function" == typeof window.WeakMap && "function" == typeof window.Map,
    v = function () {
        function t(t, e) {
            var n = -1;
            return t.some(function (t, r) {
                var i = t[0] === e;
                return i && (n = r),
                i
            }),
            n
        }
        return b ? window.WeakMap : function () {
            function e() {
                l(this, e),
                this.__entries__ = []
            }
            return e.prototype.get = function (e) {
                var n = t(this.__entries__, e);
                return this.__entries__[n][1]
            },
            e.prototype.set = function (e, n) {
                var r = t(this.__entries__, e);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
            },
            e.prototype.delete = function (e) {
                var n = this.__entries__,
                r = t(n, e);
                ~r && n.splice(r, 1)
            },
            e.prototype.has = function (e) {
                return !!~t(this.__entries__, e)
            },
            e
        }
        ()
    }
    (),
    y = function () {
        return b ? window.Map : function (t) {
            function e() {
                return l(this, e),
                _(this, t.apply(this, arguments))
            }
            return d(e, t),
            e.prototype.clear = function () {
                this.__entries__.splice(0, this.__entries__.length)
            },
            e.prototype.entries = function () {
                return this.__entries__.slice()
            },
            e.prototype.keys = function () {
                return this.__entries__.map(function (t) {
                    return t[0]
                })
            },
            e.prototype.values = function () {
                return this.__entries__.map(function (t) {
                    return t[1]
                })
            },
            e.prototype.forEach = function (t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = this.__entries__, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator](); ; ) {
                    var o;
                    if (r) {
                        if (i >= n.length)
                            break;
                        o = n[i++]
                    } else {
                        if (i = n.next(), i.done)
                            break;
                        o = i.value
                    }
                    var s = o;
                    t.call(e, s[1], s[0])
                }
            },
            p(e, [{
                        key: "size",
                        get: function () {
                            return this.__entries__.length
                        }
                    }
                ]),
            e
        }
        (v)
    }
    (),
    w = function () {
        return "function" == typeof window.requestAnimationFrame ? window.requestAnimationFrame : function (t) {
            return setTimeout(function () {
                return t(Date.now())
            }, 1e3 / 60)
        }
    }
    (),
    g = function (t) {
        function e() {
            t.apply.apply(t, s),
            s = null,
            a && (r.apply.apply(r, a), a = null)
        }
        function n() {
            o ? w(e) : e()
        }
        function r() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            var o = [this, e];
            s ? a = o : (s = o, setTimeout(n, i))
        }
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = null,
        a = null;
        return r
    },
    m = "function" == typeof window.MutationObserver,
    E = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            l(this, t),
            this._isCycleContinuous = !m || e,
            this._listenersEnabled = !1,
            this._mutationsObserver = null,
            this._observers = [],
            this.refresh = g(this.refresh.bind(this), 30, !0),
            this._continuousUpdateHandler = g(this.refresh, 70)
        }
        return t.prototype.connect = function (t) {
            this.isConnected(t) || this._observers.push(t),
            this._listenersEnabled || this._addListeners()
        },
        t.prototype.disconnect = function (t) {
            var e = this._observers,
            n = e.indexOf(t);
            ~n && e.splice(n, 1),
            !e.length && this._listenersEnabled && this._removeListeners()
        },
        t.prototype.isConnected = function (t) {
            return !!~this._observers.indexOf(t)
        },
        t.prototype.refresh = function () {
            var t = this._updateObservers();
            t ? this.refresh() : this._isCycleContinuous && this._listenersEnabled && this._continuousUpdateHandler()
        },
        t.prototype._updateObservers = function () {
            for (var t = !1, e = this._observers, n = Array.isArray(e), r = 0, e = n ? e : e[Symbol.iterator](); ; ) {
                var i;
                if (n) {
                    if (r >= e.length)
                        break;
                    i = e[r++]
                } else {
                    if (r = e.next(), r.done)
                        break;
                    i = r.value
                }
                var o = i;
                o.gatherActive(),
                o.hasActive() && (t = !0, o.broadcastActive())
            }
            return t
        },
        t.prototype._addListeners = function () {
            this._listenersEnabled || (window.addEventListener("resize", this.refresh), m && (this._mutationsObserver = new MutationObserver(this.refresh), this._mutationsObserver.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })), this._listenersEnabled = !0, this._isCycleContinuous && this.refresh())
        },
        t.prototype._removeListeners = function () {
            this._listenersEnabled && (window.removeEventListener("resize", this.refresh), this._mutationsObserver && this._mutationsObserver.disconnect(), this._mutationsObserver = null, this._listenersEnabled = !1)
        },
        p(t, [{
                    key: "continuousUpdates",
                    get: function () {
                        return this._isCycleContinuous
                    },
                    set: function (t) {
                        m && (this._isCycleContinuous = t, this._listenersEnabled && t && this.refresh())
                    }
                }
            ]),
        t
    }
    (),
    O = i(0, 0, 0, 0),
    A = function () {
        function t(e) {
            l(this, t),
            this.target = e,
            this._contentRect = O,
            this.broadcastWidth = 0,
            this.broadcastHeight = 0
        }
        return t.prototype.broadcastRect = function () {
            var t = this._contentRect;
            return this.broadcastWidth = t.width,
            this.broadcastHeight = t.height,
            t
        },
        t.prototype.isActive = function () {
            var t = h(this.target);
            return this._contentRect = t,
            t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        },
        t
    }
    (),
    ResizeObserverEntry = function ResizeObserverEntry(t, e) {
        l(this, ResizeObserverEntry);
        var n = window.ClientRect || Object,
        r = Object.create(n.prototype);
        f(r, e, {
            configurable: !0
        }),
        f(this, {
            target: t,
            contentRect: r
        }, {
            configurable: !0
        })
    },
    k = function () {
        function ResizeObserver(t, e, n) {
            if (l(this, ResizeObserver), "function" != typeof t)
                throw new TypeError("The callback provided as parameter 1 is not a function.");
            this._callback = t,
            this._targets = new y,
            this._activeTargets = [],
            this._controller = e,
            this._publicObserver = n
        }
        return ResizeObserver.prototype.observe = function (t) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if (!(t instanceof Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var e = this._targets;
            e.has(t) || (e.set(t, new A(t)), this._controller.isConnected(this) || this._controller.connect(this), this._controller.refresh())
        },
        ResizeObserver.prototype.unobserve = function (t) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if (!(t instanceof Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var e = this._targets;
            e.has(t) && (e.delete(t), e.size || this.disconnect())
        },
        ResizeObserver.prototype.disconnect = function () {
            this.clearActive(),
            this._targets.clear(),
            this._controller.disconnect(this)
        },
        ResizeObserver.prototype.gatherActive = function () {
            this.clearActive();
            var t = this._activeTargets;
            this._targets.forEach(function (e) {
                e.isActive() && t.push(e)
            })
        },
        ResizeObserver.prototype.broadcastActive = function () {
            if (this.hasActive()) {
                var t = this._publicObserver,
                e = this._activeTargets.map(function (t) {
                    return new ResizeObserverEntry(t.target, t.broadcastRect())
                });
                this.clearActive(),
                this._callback.call(t, e, t)
            }
        },
        ResizeObserver.prototype.clearActive = function () {
            this._activeTargets.splice(0)
        },
        ResizeObserver.prototype.hasActive = function () {
            return !!this._activeTargets.length
        },
        ResizeObserver
    }
    (),
    T = new E,
    C = new v,
    ResizeObserver = function () {
        function ResizeObserver(t) {
            if (l(this, ResizeObserver), !arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            var e = new k(t, T, this);
            C.set(this, e)
        }
        return p(ResizeObserver, null, [{
                    key: "continuousUpdates",
                    get: function () {
                        return T.continuousUpdates
                    },
                    set: function (t) {
                        if ("boolean" != typeof t)
                            throw new TypeError('type of "continuousUpdates" value must be boolean.');
                        T.continuousUpdates = t
                    }
                }
            ]),
        ResizeObserver
    }
    ();
    ["observe", "unobserve", "disconnect"].forEach(function (t) {
        ResizeObserver.prototype[t] = function () {
            var e;
            return (e = C.get(this))[t].apply(e, arguments)
        }
    }),
    "function" != typeof window.ResizeObserver && Object.defineProperty(window, "ResizeObserver", {
        value: ResizeObserver,
        writable: !0,
        configurable: !0
    });
    var x = window.ResizeObserver;
    return x
});

/*! iScroll v5.2.0-snapshot ~ (c) 2008-2018 Matteo Spinelli ~ http://cubiq.org/license */
!function (t, i, s) {
    function e(s, e) {
        this.wrapper = "string" == typeof s ? i.querySelector(s) : s,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !h.hasPointer,
            disableTouch: h.hasPointer || !h.hasTouch,
            disableMouse: h.hasPointer || h.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            onScrollHandler: Function.prototype,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(A|INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: "undefined" == typeof t.onmousedown
        };
        for (var o in e)
            this.options[o] = e[o];
        this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "",
        this.options.useTransition = h.hasTransition && this.options.useTransition,
        this.options.useTransform = h.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
        this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = "tap"),
        this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
        "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function o(t, s, e) {
        var o = i.createElement("div"),
        n = i.createElement("div");
        return e === !0 && (o.style.cssText = "position:absolute;z-index:9999", n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        n.className = "iScrollIndicator",
        "h" == t ? (e === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", n.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (e === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", n.style.width = "100%"), o.className = "iScrollVerticalScrollbar"),
        o.style.cssText += ";overflow:hidden",
        s || (o.style.pointerEvents = "none"),
        o.appendChild(n),
        o
    }
    function n(s, e) {
        this.wrapper = "string" == typeof e.el ? i.querySelector(e.el) : e.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = s,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var o in e)
            this.options[o] = e[o];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(t, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(t, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(t, "mouseup", this))), this.options.fade) {
            this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
            var n = h.style.transitionDuration;
            if (!n)
                return;
            this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
            var a = this;
            h.isBadAndroid && r(function () {
                "0.0001ms" === a.wrapperStyle[n] && (a.wrapperStyle[n] = "0s")
            }),
            this.wrapperStyle.opacity = "0"
        }
    }
    var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
        t.setTimeout(i, 1e3 / 60)
    },
    h = function () {
        function e(t) {
            return r !== !1 && ("" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1))
        }
        var o = {},
        n = i.createElement("div").style,
        r = function () {
            for (var t, i = ["t", "webkitT", "MozT", "msT", "OT"], s = 0, e = i.length; s < e; s++)
                if (t = i[s] + "ransform", t in n)
                    return i[s].substr(0, i[s].length - 1);
            return !1
        }
        ();
        o.getTime = Date.now || function () {
            return (new Date).getTime()
        },
        o.extend = function (t, i) {
            for (var s in i)
                t[s] = i[s]
        },
        o.addEvent = function (t, i, s, e) {
            t.addEventListener(i, s, !!e)
        },
        o.removeEvent = function (t, i, s, e) {
            t.removeEventListener(i, s, !!e)
        },
        o.prefixPointerEvent = function (i) {
            return t.MSPointerEvent ? "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8) : i
        },
        o.momentum = function (t, i, e, o, n, r) {
            var h,
            a,
            l = t - i,
            c = s.abs(l) / e;
            return r = void 0 === r ? 6e-4 : r,
            h = t + c * c / (2 * r) * (l < 0 ? -1 : 1),
            a = c / r,
            h < o ? (h = n ? o - n / 2.5 * (c / 8) : o, l = s.abs(h - t), a = l / c) : h > 0 && (h = n ? n / 2.5 * (c / 8) : 0, l = s.abs(t) + h, a = l / c), {
                destination: s.round(h),
                duration: a
            }
        };
        var h = e("transform");
        return o.extend(o, {
            hasTransform: h !== !1,
            hasPerspective: e("perspective")in n,
            hasTouch: "ontouchstart" in t,
            hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
            hasTransition: e("transition")in n
        }),
        o.isBadAndroid = function () {
            var i = t.navigator.appVersion;
            if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
                var s = i.match(/Safari\/(\d+.\d)/);
                return !(s && "object" == typeof s && s.length >= 2) || parseFloat(s[1]) < 535.19
            }
            return !1
        }
        (),
        o.extend(o.style = {}, {
            transform: h,
            transitionTimingFunction: e("transitionTimingFunction"),
            transitionDuration: e("transitionDuration"),
            transitionDelay: e("transitionDelay"),
            transformOrigin: e("transformOrigin"),
            touchAction: e("touchAction")
        }),
        o.hasClass = function (t, i) {
            var s = new RegExp("(^|\\s)" + i + "(\\s|$)");
            return s.test(t.className)
        },
        o.addClass = function (t, i) {
            if (!o.hasClass(t, i)) {
                var s = t.className.split(" ");
                s.push(i),
                t.className = s.join(" ")
            }
        },
        o.removeClass = function (t, i) {
            if (o.hasClass(t, i)) {
                var s = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                t.className = t.className.replace(s, " ")
            }
        },
        o.offset = function (t) {
            for (var i = -t.offsetLeft, s = -t.offsetTop; t = t.offsetParent; )
                i -= t.offsetLeft, s -= t.offsetTop;
            return {
                left: i,
                top: s
            }
        },
        o.isHyperlink = function (t) {
            if (!t)
                return !1;
            for (; t; ) {
                if ("A" == t.nodeName.toLocaleUpperCase())
                    return !0;
                t = t.parentNode
            }
            return !1
        },
        o.preventDefaultException = function (t, i) {
            if (o.isHyperlink(t))
                return !0;
            for (var s in i)
                if (i[s].test(t[s]))
                    return !0;
            return !1
        },
        o.extend(o.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        o.extend(o.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function (t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function (t) {
                    return s.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function (t) {
                    var i = 4;
                    return (t -= 1) * t * ((i + 1) * t + i) + 1
                }
            },
            bounce: {
                style: "",
                fn: function (t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function (t) {
                    var i = .22,
                    e = .4;
                    return 0 === t ? 0 : 1 == t ? 1 : e * s.pow(2, -10 * t) * s.sin((t - i / 4) * (2 * s.PI) / i) + 1
                }
            }
        }),
        o.tap = function (t, s) {
            var e = i.createEvent("Event");
            e.initEvent(s, !0, !0),
            e.pageX = t.pageX,
            e.pageY = t.pageY,
            t.target.dispatchEvent(e)
        },
        o.click = function (s) {
            var e,
            o = s.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) || (e = i.createEvent(t.MouseEvent ? "MouseEvents" : "Event"), e.initEvent("click", !0, !0), e.view = s.view || t, e.detail = 1, e.screenX = o.screenX || 0, e.screenY = o.screenY || 0, e.clientX = o.clientX || 0, e.clientY = o.clientY || 0, e.ctrlKey = !!s.ctrlKey, e.altKey = !!s.altKey, e.shiftKey = !!s.shiftKey, e.metaKey = !!s.metaKey, e.button = 0, e.relatedTarget = null, e._constructed = !0, o.dispatchEvent(e))
        },
        o.getTouchAction = function (t, i) {
            var s = "none";
            return "vertical" === t ? s = "pan-y" : "horizontal" === t && (s = "pan-x"),
            i && "none" != s && (s += " pinch-zoom"),
            s
        },
        o.getRect = function (t) {
            if (t instanceof SVGElement) {
                var i = t.getBoundingClientRect();
                return {
                    top: i.top,
                    left: i.left,
                    width: i.width,
                    height: i.height
                }
            }
            return {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        },
        o
    }
    ();
    e.prototype = {
        version: "5.2.0-snapshot",
        _init: function () {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function () {
            this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        setScrollHeight: function (t) {
            this.scrollHeight = t,
            this.refresh()
        },
        _transitionEnd: function (t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function (t) {
            if (1 != h.eventType[t.type]) {
                var i;
                if (i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== i)
                    return
            }
            if (this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var e,
                o = t.touches ? t.touches[0] : t;
                this.initiated = h.eventType[t.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this.startTime = h.getTime(),
                this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, e = this.getComputedPosition(), this._translate(s.round(e.x), s.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = o.pageX,
                this.pointY = o.pageY,
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function (t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var i,
                e,
                o,
                n,
                r = t.touches ? t.touches[0] : t,
                a = r.pageX - this.pointX,
                l = r.pageY - this.pointY,
                c = h.getTime();
                if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += l, o = s.abs(this.distX), n = s.abs(this.distY), !(c - this.endTime > 300 && o < 10 && n < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (o > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough)
                            return void(this.initiated = !1);
                        l = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough)
                            return void(this.initiated = !1);
                        a = 0
                    }
                    a = this.hasHorizontalScroll ? a : 0,
                    l = this.hasVerticalScroll ? l : 0,
                    i = this.x + a,
                    e = this.y + l,
                    (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX),
                    (e > 0 || e < this.maxScrollY) && (e = this.options.bounce ? this.y + l / 3 : e > 0 ? 0 : this.maxScrollY),
                    this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0,
                    this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(i, e),
                    c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function (t) {
            if (this.enabled && h.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var i,
                e,
                o = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime),
                n = s.round(this.x),
                r = s.round(this.y),
                a = s.abs(n - this.startX),
                l = s.abs(r - this.startY),
                c = 0,
                p = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(n, r), !this.moved)
                        return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
                    if (this._events.flick && o < 200 && a < 100 && l < 100)
                        return void this._execEvent("flick");
                    if (this.options.momentum && o < 300 && (i = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: n,
                                duration: 0
                            }, e = this.hasVerticalScroll ? h.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            }, n = i.destination, r = e.destination, c = s.max(i.duration, e.duration), this.isInTransition = 1), this.options.snap) {
                        var d = this._nearestSnap(n, r);
                        this.currentPage = d,
                        c = this.options.snapSpeed || s.max(s.max(s.min(s.abs(n - d.x), 1e3), s.min(s.abs(r - d.y), 1e3)), 300),
                        n = d.x,
                        r = d.y,
                        this.directionX = 0,
                        this.directionY = 0,
                        p = this.options.bounceEasing
                    }
                    return n != this.x || r != this.y ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) && (p = h.ease.quadratic), void this.scrollTo(n, r, c, p)) : void this._execEvent("scrollEnd")
                }
            }
        },
        _resize: function () {
            var t = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function () {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function (t) {
            var i = this.x,
            s = this.y;
            return t = t || 0,
            !this.hasHorizontalScroll || this.x > 0 ? i = 0 : this.x < this.maxScrollX && (i = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? s = 0 : this.y < this.maxScrollY && (s = this.maxScrollY),
            (i != this.x || s != this.y) && (this.scrollTo(i, s, t, this.options.bounceEasing), !0)
        },
        disable: function () {
            this.enabled = !1
        },
        enable: function () {
            this.enabled = !0
        },
        refresh: function () {
            h.getRect(this.wrapper),
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight;
            var t = h.getRect(this.scroller);
            this.scrollHeight && (t.height = this.scrollHeight),
            this.scrollerWidth = t.width,
            this.scrollerHeight = t.height,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            h.hasPointer && !this.options.disablePointer && (this.wrapper.style[h.style.touchAction] = h.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[h.style.touchAction] || (this.wrapper.style[h.style.touchAction] = h.getTouchAction(this.options.eventPassthrough, !1))),
            this.wrapperOffset = h.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function (t, i) {
            this._events[t] || (this._events[t] = []),
            this._events[t].push(i)
        },
        off: function (t, i) {
            if (this._events[t]) {
                var s = this._events[t].indexOf(i);
                s > -1 && this._events[t].splice(s, 1)
            }
        },
        _execEvent: function (t) {
            if (this._events[t]) {
                var i = 0,
                s = this._events[t].length;
                if (s)
                    for (; i < s; i++)
                        this._events[t][i].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function (t, i, s, e) {
            t = this.x + t,
            i = this.y + i,
            s = s || 0,
            this.scrollTo(t, i, s, e)
        },
        scrollTo: function (t, i, s, e) {
            e = e || h.ease.circular,
            this.isInTransition = this.options.useTransition && s > 0;
            var o = this.options.useTransition && e.style;
            !s || o ? (o && (this._transitionTimingFunction(e.style), this._transitionTime(s)), this._translate(t, i)) : this._animate(t, i, s, e.fn)
        },
        scrollToElement: function (t, i, e, o, n) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var r = h.offset(t);
                r.left -= this.wrapperOffset.left,
                r.top -= this.wrapperOffset.top;
                var a = h.getRect(t),
                l = h.getRect(this.wrapper);
                e === !0 && (e = s.round(a.width / 2 - l.width / 2)),
                o === !0 && (o = s.round(a.height / 2 - l.height / 2)),
                r.left -= e || 0,
                r.top -= o || 0,
                r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left,
                r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top,
                i = void 0 === i || null === i || "auto" === i ? s.max(s.abs(this.x - r.left), s.abs(this.y - r.top)) : i,
                this.scrollTo(r.left, r.top, i, n)
            }
        },
        _transitionTime: function (t) {
            if (this.options.useTransition) {
                t = t || 0;
                var i = h.style.transitionDuration;
                if (i) {
                    if (this.scrollerStyle[i] = t + "ms", !t && h.isBadAndroid) {
                        this.scrollerStyle[i] = "0.0001ms";
                        var s = this;
                        r(function () {
                            "0.0001ms" === s.scrollerStyle[i] && (s.scrollerStyle[i] = "0s")
                        })
                    }
                    if (this.indicators)
                        for (var e = this.indicators.length; e--; )
                            this.indicators[e].transitionTime(t)
                }
            }
        },
        _transitionTimingFunction: function (t) {
            if (this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators)
                for (var i = this.indicators.length; i--; )
                    this.indicators[i].transitionTimingFunction(t)
        },
        _translate: function (t, i) {
            if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = s.round(t), i = s.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.x = t, this.y = i, this.indicators)
                for (var e = this.indicators.length; e--; )
                    this.indicators[e].updatePosition();
            this.options.onScrollHandler()
        },
        _initEvents: function (i) {
            var s = i ? h.removeEvent : h.addEvent,
            e = this.options.bindToWrapper ? this.wrapper : t;
            s(t, "orientationchange", this),
            s(t, "resize", this),
            this.options.click && s(this.wrapper, "click", this, !0),
            this.options.disableMouse || (s(this.wrapper, "mousedown", this), s(e, "mousemove", this), s(e, "mousecancel", this), s(e, "mouseup", this)),
            h.hasPointer && !this.options.disablePointer && (s(this.wrapper, h.prefixPointerEvent("pointerdown"), this), s(e, h.prefixPointerEvent("pointermove"), this), s(e, h.prefixPointerEvent("pointercancel"), this), s(e, h.prefixPointerEvent("pointerup"), this)),
            h.hasTouch && !this.options.disableTouch && (s(this.wrapper, "touchstart", this), s(e, "touchmove", this), s(e, "touchcancel", this), s(e, "touchend", this)),
            s(this.scroller, "transitionend", this),
            s(this.scroller, "webkitTransitionEnd", this),
            s(this.scroller, "oTransitionEnd", this),
            s(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function () {
            var i,
            s,
            e = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (e = e[h.style.transform].split(")")[0].split(", "), i =  + (e[12] || e[4]), s =  + (e[13] || e[5])) : (i = +e.left.replace(/[^-\d.]/g, ""), s = +e.top.replace(/[^-\d.]/g, "")), {
                x: i,
                y: s
            }
        },
        _initIndicators: function () {
            function t(t) {
                if (h.indicators)
                    for (var i = h.indicators.length; i--; )
                        t.call(h.indicators[i])
            }
            var i,
            s = this.options.interactiveScrollbars,
            e = "string" != typeof this.options.scrollbars,
            r = [],
            h = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (i = {
                        el: o("v", s, this.options.scrollbars),
                        interactive: s,
                        defaultScrollbars: !0,
                        customStyle: e,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: !1
                    }, this.wrapper.appendChild(i.el), r.push(i)), this.options.scrollX && (i = {
                        el: o("h", s, this.options.scrollbars),
                        interactive: s,
                        defaultScrollbars: !0,
                        customStyle: e,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: !1
                    }, this.wrapper.appendChild(i.el), r.push(i))),
            this.options.indicators && (r = r.concat(this.options.indicators));
            for (var a = r.length; a--; )
                this.indicators.push(new n(this, r[a]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function () {
                    t(function () {
                        this.fade()
                    })
                }), this.on("scrollCancel", function () {
                    t(function () {
                        this.fade()
                    })
                }), this.on("scrollStart", function () {
                    t(function () {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function () {
                    t(function () {
                        this.fade(1, !0)
                    })
                })),
            this.on("refresh", function () {
                t(function () {
                    this.refresh()
                })
            }),
            this.on("destroy", function () {
                t(function () {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function () {
            h.addEvent(this.wrapper, "wheel", this),
            h.addEvent(this.wrapper, "mousewheel", this),
            h.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy", function () {
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = null,
                h.removeEvent(this.wrapper, "wheel", this),
                h.removeEvent(this.wrapper, "mousewheel", this),
                h.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function (t) {
            if (this.enabled) {
                t.preventDefault();
                var i,
                e,
                o,
                n,
                r = this;
                if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                        r.options.snap || r._execEvent("scrollEnd"),
                        r.wheelTimeout = void 0
                    }, 400), "deltaX" in t)
                    1 === t.deltaMode ? (i = -t.deltaX * this.options.mouseWheelSpeed, e = -t.deltaY * this.options.mouseWheelSpeed) : (i = -t.deltaX, e = -t.deltaY);
                else if ("wheelDeltaX" in t)
                    i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, e = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in t)
                    i = e = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t))
                        return;
                    i = e = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (i *= this.options.invertWheelDirection, e *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = e, e = 0), this.options.snap)
                    return o = this.currentPage.pageX, n = this.currentPage.pageY, i > 0 ? o-- : i < 0 && o++, e > 0 ? n-- : e < 0 && n++, void this.goToPage(o, n);
                o = this.x + s.round(this.hasHorizontalScroll ? i : 0),
                n = this.y + s.round(this.hasVerticalScroll ? e : 0),
                this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0,
                this.directionY = e > 0 ? -1 : e < 0 ? 1 : 0,
                o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX),
                n > 0 ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY),
                this.scrollTo(o, n, 0)
            }
        },
        _initSnap: function () {
            this.currentPage = {},
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh", function () {
                var t,
                i,
                e,
                o,
                n,
                r,
                a,
                l = 0,
                c = 0,
                p = 0,
                d = this.options.snapStepX || this.wrapperWidth,
                u = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)
                        for (e = s.round(d / 2), o = s.round(u / 2); p > -this.scrollerWidth; ) {
                            for (this.pages[l] = [], t = 0, n = 0; n > -this.scrollerHeight; )
                                this.pages[l][t] = {
                                    x: s.max(p, this.maxScrollX),
                                    y: s.max(n, this.maxScrollY),
                                    width: d,
                                    height: u,
                                    cx: p - e,
                                    cy: n - o
                                },
                            n -= u,
                            t++;
                            p -= d,
                            l++
                        }
                    else
                        for (r = this.options.snap, t = r.length, i = -1; l < t; l++)
                            a = h.getRect(r[l]), (0 === l || a.left <= h.getRect(r[l - 1]).left) && (c = 0, i++), this.pages[c] || (this.pages[c] = []), p = s.max(-a.left, this.maxScrollX), n = s.max(-a.top, this.maxScrollY), e = p - s.round(a.width / 2), o = n - s.round(a.height / 2), this.pages[c][i] = {
                                x: p,
                                y: n,
                                width: a.width,
                                height: a.height,
                                cx: e,
                                cy: o
                            },
                    p > this.maxScrollX && c++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                    this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }),
            this.on("flick", function () {
                var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function (t, i) {
            if (!this.pages.length)
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            var e = 0,
            o = this.pages.length,
            n = 0;
            if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(i - this.absStartY) < this.snapThresholdY)
                return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY); e < o; e++)
                if (t >= this.pages[e][0].cx) {
                    t = this.pages[e][0].x;
                    break
                }
            for (o = this.pages[e].length; n < o; n++)
                if (i >= this.pages[0][n].cy) {
                    i = this.pages[0][n].y;
                    break
                }
            return e == this.currentPage.pageX && (e += this.directionX, e < 0 ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1), t = this.pages[e][0].x),
            n == this.currentPage.pageY && (n += this.directionY, n < 0 ? n = 0 : n >= this.pages[0].length && (n = this.pages[0].length - 1), i = this.pages[0][n].y), {
                x: t,
                y: i,
                pageX: e,
                pageY: n
            }
        },
        goToPage: function (t, i, e, o) {
            o = o || this.options.bounceEasing,
            t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0),
            i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
            var n = this.pages[t][i].x,
            r = this.pages[t][i].y;
            e = void 0 === e ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(n - this.x), 1e3), s.min(s.abs(r - this.y), 1e3)), 300) : e,
            this.currentPage = {
                x: n,
                y: r,
                pageX: t,
                pageY: i
            },
            this.scrollTo(n, r, e, o)
        },
        next: function (t, i) {
            var s = this.currentPage.pageX,
            e = this.currentPage.pageY;
            s++,
            s >= this.pages.length && this.hasVerticalScroll && (s = 0, e++),
            this.goToPage(s, e, t, i)
        },
        prev: function (t, i) {
            var s = this.currentPage.pageX,
            e = this.currentPage.pageY;
            s--,
            s < 0 && this.hasVerticalScroll && (s = 0, e--),
            this.goToPage(s, e, t, i)
        },
        _initKeys: function (i) {
            var s,
            e = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (s in this.options.keyBindings)
                    "string" == typeof this.options.keyBindings[s] && (this.options.keyBindings[s] = this.options.keyBindings[s].toUpperCase().charCodeAt(0));
            else
                this.options.keyBindings = {};
            for (s in e)
                this.options.keyBindings[s] = this.options.keyBindings[s] || e[s];
            h.addEvent(t, "keydown", this),
            this.on("destroy", function () {
                h.removeEvent(t, "keydown", this)
            })
        },
        _key: function (t) {
            if (this.enabled) {
                var i,
                e = this.options.snap,
                o = e ? this.currentPage.pageX : this.x,
                n = e ? this.currentPage.pageY : this.y,
                r = h.getTime(),
                a = this.keyTime || 0,
                l = .25;
                switch (this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(s.round(i.x), s.round(i.y)), this.isInTransition = !1), this.keyAcceleration = r - a < 200 ? s.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {
                case this.options.keyBindings.pageUp:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? o += e ? 1 : this.wrapperWidth : n += e ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.pageDown:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= e ? 1 : this.wrapperWidth : n -= e ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.end:
                    o = e ? this.pages.length - 1 : this.maxScrollX,
                    n = e ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    o = 0,
                    n = 0;
                    break;
                case this.options.keyBindings.left:
                    o += e ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    n += e ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    o -= e ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    n -= e ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
                }
                if (e)
                    return void this.goToPage(o, n);
                o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0),
                n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollY && (n = this.maxScrollY, this.keyAcceleration = 0),
                this.scrollTo(o, n, 0),
                this.keyTime = r
            }
        },
        _animate: function (t, i, s, e) {
            function o() {
                var d,
                u,
                m,
                f = h.getTime();
                return f >= p ? (n.isAnimating = !1, n._translate(t, i), void(n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd"))) : (f = (f - c) / s, m = e(f), d = (t - a) * m + a, u = (i - l) * m + l, n._translate(d, u), void(n.isAnimating && r(o)))
            }
            var n = this,
            a = this.x,
            l = this.y,
            c = h.getTime(),
            p = c + s;
            this.isAnimating = !0,
            o()
        },
        handleEvent: function (t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                t.defaultPrevented || this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                t.defaultPrevented || this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(t);
                break;
            case "keydown":
                this._key(t);
                break;
            case "click":
                this.enabled && !t._constructed
            }
        }
    },
    n.prototype = {
        handleEvent: function (t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t)
            }
        },
        destroy: function () {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null),
            this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(t, "touchmove", this), h.removeEvent(t, h.prefixPointerEvent("pointermove"), this), h.removeEvent(t, "mousemove", this), h.removeEvent(t, "touchend", this), h.removeEvent(t, h.prefixPointerEvent("pointerup"), this), h.removeEvent(t, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function (i) {
            var s = i.touches ? i.touches[0] : i;
            i.preventDefault(),
            i.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = s.pageX,
            this.lastPointY = s.pageY,
            this.startTime = h.getTime(),
            this.options.disableTouch || h.addEvent(t, "touchmove", this),
            this.options.disablePointer || h.addEvent(t, h.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || h.addEvent(t, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function (t) {
            var i,
            s,
            e,
            o,
            n = t.touches ? t.touches[0] : t;
            h.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            i = n.pageX - this.lastPointX,
            this.lastPointX = n.pageX,
            s = n.pageY - this.lastPointY,
            this.lastPointY = n.pageY,
            e = this.x + i,
            o = this.y + s,
            this._pos(e, o),
            t.preventDefault(),
            t.stopPropagation()
        },
        _end: function (i) {
            if (this.initiated) {
                if (this.initiated = !1, i.preventDefault(), i.stopPropagation(), h.removeEvent(t, "touchmove", this), h.removeEvent(t, h.prefixPointerEvent("pointermove"), this), h.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                    var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    o = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - e.x), 1e3), s.min(s.abs(this.scroller.y - e.y), 1e3)), 300);
                    this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, o, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function (t) {
            t = t || 0;
            var i = h.style.transitionDuration;
            if (i && (this.indicatorStyle[i] = t + "ms", !t && h.isBadAndroid)) {
                this.indicatorStyle[i] = "0.0001ms";
                var s = this;
                r(function () {
                    "0.0001ms" === s.indicatorStyle[i] && (s.indicatorStyle[i] = "0s")
                })
            }
        },
        transitionTimingFunction: function (t) {
            this.indicatorStyle[h.style.transitionTimingFunction] = t
        },
        refresh: function () {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")),
            h.getRect(this.wrapper),
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY),
                this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function () {
            var t = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
            i = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = s.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), i < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = s.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px"), i = this.minBoundaryY) : i > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = s.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height) : i = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")),
            this.x = t,
            this.y = i,
            this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px")
        },
        _pos: function (t, i) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX),
            i < 0 ? i = 0 : i > this.maxPosY && (i = this.maxPosY),
            t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x,
            i = this.options.listenY ? s.round(i / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(t, i)
        },
        fade: function (t, i) {
            if (!i || this.visible) {
                clearTimeout(this.fadeTimeout),
                this.fadeTimeout = null;
                var s = t ? 250 : 500,
                e = t ? 0 : 300;
                t = t ? "1" : "0",
                this.wrapperStyle[h.style.transitionDuration] = s + "ms",
                this.fadeTimeout = setTimeout(function (t) {
                    this.wrapperStyle.opacity = t,
                    this.visible = +t
                }
                        .bind(this, t), e)
            }
        }
    },
    e.utils = h,
    "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function () {
        return e
    }) : t.IScroll = e
}
(window, document, Math);
