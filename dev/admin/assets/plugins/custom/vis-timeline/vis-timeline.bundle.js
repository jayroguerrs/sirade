/**
 * vis-timeline and vis-graph2d
 * https://visjs.github.io/vis-timeline/
 *
 * Create a fully customizable, interactive timeline with items and ranges.
 *
 * @version 7.7.0
 * @date    2022-07-10T21:34:08.601Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).vis = t.vis || {}) }(this, (function(t) {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(t) { return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t }

    function o(t) { throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.') }
    var r, s = { exports: {} };

    function a() {
        return r || (r = 1, function(t, e) {
            t.exports = function() {
                var e, i;

                function n() { return e.apply(null, arguments) }

                function r(t) { e = t }

                function s(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

                function a(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

                function l(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

                function h(t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (l(t, e)) return !1;
                    return !0
                }

                function u(t) { return void 0 === t }

                function d(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

                function c(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

                function p(t, e) {
                    var i, n = [],
                        o = t.length;
                    for (i = 0; i < o; ++i) n.push(e(t[i], i));
                    return n
                }

                function f(t, e) { for (var i in e) l(e, i) && (t[i] = e[i]); return l(e, "toString") && (t.toString = e.toString), l(e, "valueOf") && (t.valueOf = e.valueOf), t }

                function m(t, e, i, n) { return qi(t, e, i, n, !0).utc() }

                function v() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 } }

                function g(t) { return null == t._pf && (t._pf = v()), t._pf }

                function y(t) {
                    if (null == t._isValid) {
                        var e = g(t),
                            n = i.call(e.parsedDateParts, (function(t) { return null != t })),
                            o = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                        if (t._strict && (o = o && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return o;
                        t._isValid = o
                    }
                    return t._isValid
                }

                function b(t) { var e = m(NaN); return null != t ? f(g(e), t) : g(e).userInvalidated = !0, e }
                i = Array.prototype.some ? Array.prototype.some : function(t) {
                    var e, i = Object(this),
                        n = i.length >>> 0;
                    for (e = 0; e < n; e++)
                        if (e in i && t.call(this, i[e], e, i)) return !0;
                    return !1
                };
                var _ = n.momentProperties = [],
                    w = !1;

                function k(t, e) {
                    var i, n, o, r = _.length;
                    if (u(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), u(e._i) || (t._i = e._i), u(e._f) || (t._f = e._f), u(e._l) || (t._l = e._l), u(e._strict) || (t._strict = e._strict), u(e._tzm) || (t._tzm = e._tzm), u(e._isUTC) || (t._isUTC = e._isUTC), u(e._offset) || (t._offset = e._offset), u(e._pf) || (t._pf = g(e)), u(e._locale) || (t._locale = e._locale), r > 0)
                        for (i = 0; i < r; i++) u(o = e[n = _[i]]) || (t[n] = o);
                    return t
                }

                function x(t) { k(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === w && (w = !0, n.updateOffset(this), w = !1) }

                function D(t) { return t instanceof x || null != t && null != t._isAMomentObject }

                function S(t) {!1 === n.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

                function C(t, e) {
                    var i = !0;
                    return f((function() {
                        if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
                            var o, r, s, a = [],
                                h = arguments.length;
                            for (r = 0; r < h; r++) {
                                if (o = "", "object" == typeof arguments[r]) {
                                    for (s in o += "\n[" + r + "] ", arguments[0]) l(arguments[0], s) && (o += s + ": " + arguments[0][s] + ", ");
                                    o = o.slice(0, -2)
                                } else o = arguments[r];
                                a.push(o)
                            }
                            S(t + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), i = !1
                        }
                        return e.apply(this, arguments)
                    }), e)
                }
                var T, M = {};

                function O(t, e) { null != n.deprecationHandler && n.deprecationHandler(t, e), M[t] || (S(e), M[t] = !0) }

                function E(t) { return "undefined" != typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

                function P(t) {
                    var e, i;
                    for (i in t) l(t, i) && (E(e = t[i]) ? this[i] = e : this["_" + i] = e);
                    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }

                function A(t, e) { var i, n = f({}, t); for (i in e) l(e, i) && (a(t[i]) && a(e[i]) ? (n[i] = {}, f(n[i], t[i]), f(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]); for (i in t) l(t, i) && !l(e, i) && a(t[i]) && (n[i] = f({}, n[i])); return n }

                function I(t) { null != t && this.set(t) }
                n.suppressDeprecationWarnings = !1, n.deprecationHandler = null, T = Object.keys ? Object.keys : function(t) { var e, i = []; for (e in t) l(t, e) && i.push(e); return i };
                var L = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" };

                function N(t, e, i) { var n = this._calendar[t] || this._calendar.sameElse; return E(n) ? n.call(e, i) : n }

                function F(t, e, i) {
                    var n = "" + Math.abs(t),
                        o = e - n.length;
                    return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
                }
                var R = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    j = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    Y = {},
                    H = {};

                function z(t, e, i, n) { var o = n; "string" == typeof n && (o = function() { return this[n]() }), t && (H[t] = o), e && (H[e[0]] = function() { return F(o.apply(this, arguments), e[1], e[2]) }), i && (H[i] = function() { return this.localeData().ordinal(o.apply(this, arguments), t) }) }

                function B(t) { return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "") }

                function G(t) { var e, i, n = t.match(R); for (e = 0, i = n.length; e < i; e++) H[n[e]] ? n[e] = H[n[e]] : n[e] = B(n[e]); return function(e) { var o, r = ""; for (o = 0; o < i; o++) r += E(n[o]) ? n[o].call(e, t) : n[o]; return r } }

                function W(t, e) { return t.isValid() ? (e = V(e, t.localeData()), Y[e] = Y[e] || G(e), Y[e](t)) : t.localeData().invalidDate() }

                function V(t, e) {
                    var i = 5;

                    function n(t) { return e.longDateFormat(t) || t }
                    for (j.lastIndex = 0; i >= 0 && j.test(t);) t = t.replace(j, n), j.lastIndex = 0, i -= 1;
                    return t
                }
                var U = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };

                function X(t) {
                    var e = this._longDateFormat[t],
                        i = this._longDateFormat[t.toUpperCase()];
                    return e || !i ? e : (this._longDateFormat[t] = i.match(R).map((function(t) { return "MMMM" === t || "MM" === t || "DD" === t || "dddd" === t ? t.slice(1) : t })).join(""), this._longDateFormat[t])
                }
                var q = "Invalid date";

                function $() { return this._invalidDate }
                var Z = "%d",
                    K = /\d{1,2}/;

                function J(t) { return this._ordinal.replace("%d", t) }
                var Q = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };

                function tt(t, e, i, n) { var o = this._relativeTime[i]; return E(o) ? o(t, e, i, n) : o.replace(/%d/i, t) }

                function et(t, e) { var i = this._relativeTime[t > 0 ? "future" : "past"]; return E(i) ? i(e) : i.replace(/%s/i, e) }
                var it = {};

                function nt(t, e) {
                    var i = t.toLowerCase();
                    it[i] = it[i + "s"] = it[e] = t
                }

                function ot(t) { return "string" == typeof t ? it[t] || it[t.toLowerCase()] : void 0 }

                function rt(t) { var e, i, n = {}; for (i in t) l(t, i) && (e = ot(i)) && (n[e] = t[i]); return n }
                var st = {};

                function at(t, e) { st[t] = e }

                function lt(t) { var e, i = []; for (e in t) l(t, e) && i.push({ unit: e, priority: st[e] }); return i.sort((function(t, e) { return t.priority - e.priority })), i }

                function ht(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 }

                function ut(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

                function dt(t) {
                    var e = +t,
                        i = 0;
                    return 0 !== e && isFinite(e) && (i = ut(e)), i
                }

                function ct(t, e) { return function(i) { return null != i ? (ft(this, t, i), n.updateOffset(this, e), this) : pt(this, t) } }

                function pt(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

                function ft(t, e, i) { t.isValid() && !isNaN(i) && ("FullYear" === e && ht(t.year()) && 1 === t.month() && 29 === t.date() ? (i = dt(i), t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), te(i, t.month()))) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i)) }

                function mt(t) { return E(this[t = ot(t)]) ? this[t]() : this }

                function vt(t, e) {
                    if ("object" == typeof t) {
                        var i, n = lt(t = rt(t)),
                            o = n.length;
                        for (i = 0; i < o; i++) this[n[i].unit](t[n[i].unit])
                    } else if (E(this[t = ot(t)])) return this[t](e);
                    return this
                }
                var gt, yt = /\d/,
                    bt = /\d\d/,
                    _t = /\d{3}/,
                    wt = /\d{4}/,
                    kt = /[+-]?\d{6}/,
                    xt = /\d\d?/,
                    Dt = /\d\d\d\d?/,
                    St = /\d\d\d\d\d\d?/,
                    Ct = /\d{1,3}/,
                    Tt = /\d{1,4}/,
                    Mt = /[+-]?\d{1,6}/,
                    Ot = /\d+/,
                    Et = /[+-]?\d+/,
                    Pt = /Z|[+-]\d\d:?\d\d/gi,
                    At = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    It = /[+-]?\d+(\.\d{1,3})?/,
                    Lt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

                function Nt(t, e, i) { gt[t] = E(e) ? e : function(t, n) { return t && i ? i : e } }

                function Ft(t, e) { return l(gt, t) ? gt[t](e._strict, e._locale) : new RegExp(Rt(t)) }

                function Rt(t) { return jt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(t, e, i, n, o) { return e || i || n || o }))) }

                function jt(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
                gt = {};
                var Yt = {};

                function Ht(t, e) { var i, n, o = e; for ("string" == typeof t && (t = [t]), d(e) && (o = function(t, i) { i[e] = dt(t) }), n = t.length, i = 0; i < n; i++) Yt[t[i]] = o }

                function zt(t, e) { Ht(t, (function(t, i, n, o) { n._w = n._w || {}, e(t, n._w, n, o) })) }

                function Bt(t, e, i) { null != e && l(Yt, t) && Yt[t](e, i._a, i, t) }
                var Gt, Wt = 0,
                    Vt = 1,
                    Ut = 2,
                    Xt = 3,
                    qt = 4,
                    $t = 5,
                    Zt = 6,
                    Kt = 7,
                    Jt = 8;

                function Qt(t, e) { return (t % e + e) % e }

                function te(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var i = Qt(e, 12); return t += (e - i) / 12, 1 === i ? ht(t) ? 29 : 28 : 31 - i % 7 % 2 }
                Gt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                    var e;
                    for (e = 0; e < this.length; ++e)
                        if (this[e] === t) return e;
                    return -1
                }, z("M", ["MM", 2], "Mo", (function() { return this.month() + 1 })), z("MMM", 0, 0, (function(t) { return this.localeData().monthsShort(this, t) })), z("MMMM", 0, 0, (function(t) { return this.localeData().months(this, t) })), nt("month", "M"), at("month", 8), Nt("M", xt), Nt("MM", xt, bt), Nt("MMM", (function(t, e) { return e.monthsShortRegex(t) })), Nt("MMMM", (function(t, e) { return e.monthsRegex(t) })), Ht(["M", "MM"], (function(t, e) { e[Vt] = dt(t) - 1 })), Ht(["MMM", "MMMM"], (function(t, e, i, n) {
                    var o = i._locale.monthsParse(t, n, i._strict);
                    null != o ? e[Vt] = o : g(i).invalidMonth = t
                }));
                var ee = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ie = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    ne = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    oe = Lt,
                    re = Lt;

                function se(t, e) { return t ? s(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ne).test(e) ? "format" : "standalone"][t.month()] : s(this._months) ? this._months : this._months.standalone }

                function ae(t, e) { return t ? s(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ne.test(e) ? "format" : "standalone"][t.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }

                function le(t, e, i) {
                    var n, o, r, s = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = m([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                    return i ? "MMM" === e ? -1 !== (o = Gt.call(this._shortMonthsParse, s)) ? o : null : -1 !== (o = Gt.call(this._longMonthsParse, s)) ? o : null : "MMM" === e ? -1 !== (o = Gt.call(this._shortMonthsParse, s)) || -1 !== (o = Gt.call(this._longMonthsParse, s)) ? o : null : -1 !== (o = Gt.call(this._longMonthsParse, s)) || -1 !== (o = Gt.call(this._shortMonthsParse, s)) ? o : null
                }

                function he(t, e, i) { var n, o, r; if (this._monthsParseExact) return le.call(this, t, e, i); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (o = m([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n; if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n; if (!i && this._monthsParse[n].test(t)) return n } }

                function ue(t, e) {
                    var i;
                    if (!t.isValid()) return t;
                    if ("string" == typeof e)
                        if (/^\d+$/.test(e)) e = dt(e);
                        else if (!d(e = t.localeData().monthsParse(e))) return t;
                    return i = Math.min(t.date(), te(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
                }

                function de(t) { return null != t ? (ue(this, t), n.updateOffset(this, !0), this) : pt(this, "Month") }

                function ce() { return te(this.year(), this.month()) }

                function pe(t) { return this._monthsParseExact ? (l(this, "_monthsRegex") || me.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = oe), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }

                function fe(t) { return this._monthsParseExact ? (l(this, "_monthsRegex") || me.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = re), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }

                function me() {
                    function t(t, e) { return e.length - t.length }
                    var e, i, n = [],
                        o = [],
                        r = [];
                    for (e = 0; e < 12; e++) i = m([2e3, e]), n.push(this.monthsShort(i, "")), o.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
                    for (n.sort(t), o.sort(t), r.sort(t), e = 0; e < 12; e++) n[e] = jt(n[e]), o[e] = jt(o[e]);
                    for (e = 0; e < 24; e++) r[e] = jt(r[e]);
                    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function ve(t) { return ht(t) ? 366 : 365 }
                z("Y", 0, 0, (function() { var t = this.year(); return t <= 9999 ? F(t, 4) : "+" + t })), z(0, ["YY", 2], 0, (function() { return this.year() % 100 })), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, ["YYYYYY", 6, !0], 0, "year"), nt("year", "y"), at("year", 1), Nt("Y", Et), Nt("YY", xt, bt), Nt("YYYY", Tt, wt), Nt("YYYYY", Mt, kt), Nt("YYYYYY", Mt, kt), Ht(["YYYYY", "YYYYYY"], Wt), Ht("YYYY", (function(t, e) { e[Wt] = 2 === t.length ? n.parseTwoDigitYear(t) : dt(t) })), Ht("YY", (function(t, e) { e[Wt] = n.parseTwoDigitYear(t) })), Ht("Y", (function(t, e) { e[Wt] = parseInt(t, 10) })), n.parseTwoDigitYear = function(t) { return dt(t) + (dt(t) > 68 ? 1900 : 2e3) };
                var ge = ct("FullYear", !0);

                function ye() { return ht(this.year()) }

                function be(t, e, i, n, o, r, s) { var a; return t < 100 && t >= 0 ? (a = new Date(t + 400, e, i, n, o, r, s), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, i, n, o, r, s), a }

                function _e(t) { var e, i; return t < 100 && t >= 0 ? ((i = Array.prototype.slice.call(arguments))[0] = t + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e }

                function we(t, e, i) { var n = 7 + e - i; return -(7 + _e(t, 0, n).getUTCDay() - e) % 7 + n - 1 }

                function ke(t, e, i, n, o) { var r, s, a = 1 + 7 * (e - 1) + (7 + i - n) % 7 + we(t, n, o); return a <= 0 ? s = ve(r = t - 1) + a : a > ve(t) ? (r = t + 1, s = a - ve(t)) : (r = t, s = a), { year: r, dayOfYear: s } }

                function xe(t, e, i) {
                    var n, o, r = we(t.year(), e, i),
                        s = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
                    return s < 1 ? n = s + De(o = t.year() - 1, e, i) : s > De(t.year(), e, i) ? (n = s - De(t.year(), e, i), o = t.year() + 1) : (o = t.year(), n = s), { week: n, year: o }
                }

                function De(t, e, i) {
                    var n = we(t, e, i),
                        o = we(t + 1, e, i);
                    return (ve(t) - n + o) / 7
                }

                function Se(t) { return xe(t, this._week.dow, this._week.doy).week }
                z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), nt("week", "w"), nt("isoWeek", "W"), at("week", 5), at("isoWeek", 5), Nt("w", xt), Nt("ww", xt, bt), Nt("W", xt), Nt("WW", xt, bt), zt(["w", "ww", "W", "WW"], (function(t, e, i, n) { e[n.substr(0, 1)] = dt(t) }));
                var Ce = { dow: 0, doy: 6 };

                function Te() { return this._week.dow }

                function Me() { return this._week.doy }

                function Oe(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }

                function Ee(t) { var e = xe(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }

                function Pe(t, e) { return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10) }

                function Ae(t, e) { return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t }

                function Ie(t, e) { return t.slice(e, 7).concat(t.slice(0, e)) }
                z("d", 0, "do", "day"), z("dd", 0, 0, (function(t) { return this.localeData().weekdaysMin(this, t) })), z("ddd", 0, 0, (function(t) { return this.localeData().weekdaysShort(this, t) })), z("dddd", 0, 0, (function(t) { return this.localeData().weekdays(this, t) })), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), nt("day", "d"), nt("weekday", "e"), nt("isoWeekday", "E"), at("day", 11), at("weekday", 11), at("isoWeekday", 11), Nt("d", xt), Nt("e", xt), Nt("E", xt), Nt("dd", (function(t, e) { return e.weekdaysMinRegex(t) })), Nt("ddd", (function(t, e) { return e.weekdaysShortRegex(t) })), Nt("dddd", (function(t, e) { return e.weekdaysRegex(t) })), zt(["dd", "ddd", "dddd"], (function(t, e, i, n) {
                    var o = i._locale.weekdaysParse(t, n, i._strict);
                    null != o ? e.d = o : g(i).invalidWeekday = t
                })), zt(["d", "e", "E"], (function(t, e, i, n) { e[n] = dt(t) }));
                var Le = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    Ne = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Fe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Re = Lt,
                    je = Lt,
                    Ye = Lt;

                function He(t, e) { var i = s(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"]; return !0 === t ? Ie(i, this._week.dow) : t ? i[t.day()] : i }

                function ze(t) { return !0 === t ? Ie(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort }

                function Be(t) { return !0 === t ? Ie(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin }

                function Ge(t, e, i) {
                    var n, o, r, s = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = m([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                    return i ? "dddd" === e ? -1 !== (o = Gt.call(this._weekdaysParse, s)) ? o : null : "ddd" === e ? -1 !== (o = Gt.call(this._shortWeekdaysParse, s)) ? o : null : -1 !== (o = Gt.call(this._minWeekdaysParse, s)) ? o : null : "dddd" === e ? -1 !== (o = Gt.call(this._weekdaysParse, s)) || -1 !== (o = Gt.call(this._shortWeekdaysParse, s)) || -1 !== (o = Gt.call(this._minWeekdaysParse, s)) ? o : null : "ddd" === e ? -1 !== (o = Gt.call(this._shortWeekdaysParse, s)) || -1 !== (o = Gt.call(this._weekdaysParse, s)) || -1 !== (o = Gt.call(this._minWeekdaysParse, s)) ? o : null : -1 !== (o = Gt.call(this._minWeekdaysParse, s)) || -1 !== (o = Gt.call(this._weekdaysParse, s)) || -1 !== (o = Gt.call(this._shortWeekdaysParse, s)) ? o : null
                }

                function We(t, e, i) { var n, o, r; if (this._weekdaysParseExact) return Ge.call(this, t, e, i); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (o = m([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n; if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n; if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n; if (!i && this._weekdaysParse[n].test(t)) return n } }

                function Ve(t) { if (!this.isValid()) return null != t ? this : NaN; var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (t = Pe(t, this.localeData()), this.add(t - e, "d")) : e }

                function Ue(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }

                function Xe(t) { if (!this.isValid()) return null != t ? this : NaN; if (null != t) { var e = Ae(t, this.localeData()); return this.day(this.day() % 7 ? e : e - 7) } return this.day() || 7 }

                function qe(t) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ke.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Re), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }

                function $e(t) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ke.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = je), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }

                function Ze(t) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ke.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ye), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }

                function Ke() {
                    function t(t, e) { return e.length - t.length }
                    var e, i, n, o, r, s = [],
                        a = [],
                        l = [],
                        h = [];
                    for (e = 0; e < 7; e++) i = m([2e3, 1]).day(e), n = jt(this.weekdaysMin(i, "")), o = jt(this.weekdaysShort(i, "")), r = jt(this.weekdays(i, "")), s.push(n), a.push(o), l.push(r), h.push(n), h.push(o), h.push(r);
                    s.sort(t), a.sort(t), l.sort(t), h.sort(t), this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                }

                function Je() { return this.hours() % 12 || 12 }

                function Qe() { return this.hours() || 24 }

                function ti(t, e) { z(t, 0, 0, (function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) })) }

                function ei(t, e) { return e._meridiemParse }

                function ii(t) { return "p" === (t + "").toLowerCase().charAt(0) }
                z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, Je), z("k", ["kk", 2], 0, Qe), z("hmm", 0, 0, (function() { return "" + Je.apply(this) + F(this.minutes(), 2) })), z("hmmss", 0, 0, (function() { return "" + Je.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2) })), z("Hmm", 0, 0, (function() { return "" + this.hours() + F(this.minutes(), 2) })), z("Hmmss", 0, 0, (function() { return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2) })), ti("a", !0), ti("A", !1), nt("hour", "h"), at("hour", 13), Nt("a", ei), Nt("A", ei), Nt("H", xt), Nt("h", xt), Nt("k", xt), Nt("HH", xt, bt), Nt("hh", xt, bt), Nt("kk", xt, bt), Nt("hmm", Dt), Nt("hmmss", St), Nt("Hmm", Dt), Nt("Hmmss", St), Ht(["H", "HH"], Xt), Ht(["k", "kk"], (function(t, e, i) {
                    var n = dt(t);
                    e[Xt] = 24 === n ? 0 : n
                })), Ht(["a", "A"], (function(t, e, i) { i._isPm = i._locale.isPM(t), i._meridiem = t })), Ht(["h", "hh"], (function(t, e, i) { e[Xt] = dt(t), g(i).bigHour = !0 })), Ht("hmm", (function(t, e, i) {
                    var n = t.length - 2;
                    e[Xt] = dt(t.substr(0, n)), e[qt] = dt(t.substr(n)), g(i).bigHour = !0
                })), Ht("hmmss", (function(t, e, i) {
                    var n = t.length - 4,
                        o = t.length - 2;
                    e[Xt] = dt(t.substr(0, n)), e[qt] = dt(t.substr(n, 2)), e[$t] = dt(t.substr(o)), g(i).bigHour = !0
                })), Ht("Hmm", (function(t, e, i) {
                    var n = t.length - 2;
                    e[Xt] = dt(t.substr(0, n)), e[qt] = dt(t.substr(n))
                })), Ht("Hmmss", (function(t, e, i) {
                    var n = t.length - 4,
                        o = t.length - 2;
                    e[Xt] = dt(t.substr(0, n)), e[qt] = dt(t.substr(n, 2)), e[$t] = dt(t.substr(o))
                }));
                var ni = /[ap]\.?m?\.?/i,
                    oi = ct("Hours", !0);

                function ri(t, e, i) { return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM" }
                var si, ai = { calendar: L, longDateFormat: U, invalidDate: q, ordinal: Z, dayOfMonthOrdinalParse: K, relativeTime: Q, months: ee, monthsShort: ie, week: Ce, weekdays: Le, weekdaysMin: Fe, weekdaysShort: Ne, meridiemParse: ni },
                    li = {},
                    hi = {};

                function ui(t, e) {
                    var i, n = Math.min(t.length, e.length);
                    for (i = 0; i < n; i += 1)
                        if (t[i] !== e[i]) return i;
                    return n
                }

                function di(t) { return t ? t.toLowerCase().replace("_", "-") : t }

                function ci(t) {
                    for (var e, i, n, o, r = 0; r < t.length;) {
                        for (e = (o = di(t[r]).split("-")).length, i = (i = di(t[r + 1])) ? i.split("-") : null; e > 0;) {
                            if (n = fi(o.slice(0, e).join("-"))) return n;
                            if (i && i.length >= e && ui(o, i) >= e - 1) break;
                            e--
                        }
                        r++
                    }
                    return si
                }

                function pi(t) { return null != t.match("^[^/\\\\]*$") }

                function fi(e) {
                    var i = null;
                    if (void 0 === li[e] && t && t.exports && pi(e)) try { i = si._abbr, o("./locale/" + e), mi(i) } catch (t) { li[e] = null }
                    return li[e]
                }

                function mi(t, e) { var i; return t && ((i = u(e) ? yi(t) : vi(t, e)) ? si = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), si._abbr }

                function vi(t, e) {
                    if (null !== e) {
                        var i, n = ai;
                        if (e.abbr = t, null != li[t]) O("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = li[t]._config;
                        else if (null != e.parentLocale)
                            if (null != li[e.parentLocale]) n = li[e.parentLocale]._config;
                            else {
                                if (null == (i = fi(e.parentLocale))) return hi[e.parentLocale] || (hi[e.parentLocale] = []), hi[e.parentLocale].push({ name: t, config: e }), null;
                                n = i._config
                            }
                        return li[t] = new I(A(n, e)), hi[t] && hi[t].forEach((function(t) { vi(t.name, t.config) })), mi(t), li[t]
                    }
                    return delete li[t], null
                }

                function gi(t, e) {
                    if (null != e) {
                        var i, n, o = ai;
                        null != li[t] && null != li[t].parentLocale ? li[t].set(A(li[t]._config, e)) : (null != (n = fi(t)) && (o = n._config), e = A(o, e), null == n && (e.abbr = t), (i = new I(e)).parentLocale = li[t], li[t] = i), mi(t)
                    } else null != li[t] && (null != li[t].parentLocale ? (li[t] = li[t].parentLocale, t === mi() && mi(t)) : null != li[t] && delete li[t]);
                    return li[t]
                }

                function yi(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return si;
                    if (!s(t)) {
                        if (e = fi(t)) return e;
                        t = [t]
                    }
                    return ci(t)
                }

                function bi() { return T(li) }

                function _i(t) { var e, i = t._a; return i && -2 === g(t).overflow && (e = i[Vt] < 0 || i[Vt] > 11 ? Vt : i[Ut] < 1 || i[Ut] > te(i[Wt], i[Vt]) ? Ut : i[Xt] < 0 || i[Xt] > 24 || 24 === i[Xt] && (0 !== i[qt] || 0 !== i[$t] || 0 !== i[Zt]) ? Xt : i[qt] < 0 || i[qt] > 59 ? qt : i[$t] < 0 || i[$t] > 59 ? $t : i[Zt] < 0 || i[Zt] > 999 ? Zt : -1, g(t)._overflowDayOfYear && (e < Wt || e > Ut) && (e = Ut), g(t)._overflowWeeks && -1 === e && (e = Kt), g(t)._overflowWeekday && -1 === e && (e = Jt), g(t).overflow = e), t }
                var wi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ki = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    xi = /Z|[+-]\d\d(?::?\d\d)?/,
                    Di = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/],
                        ["YYYYMM", /\d{6}/, !1],
                        ["YYYY", /\d{4}/, !1]
                    ],
                    Si = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    Ci = /^\/?Date\((-?\d+)/i,
                    Ti = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                    Mi = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

                function Oi(t) {
                    var e, i, n, o, r, s, a = t._i,
                        l = wi.exec(a) || ki.exec(a),
                        h = Di.length,
                        u = Si.length;
                    if (l) {
                        for (g(t).iso = !0, e = 0, i = h; e < i; e++)
                            if (Di[e][1].exec(l[1])) { o = Di[e][0], n = !1 !== Di[e][2]; break }
                        if (null == o) return void(t._isValid = !1);
                        if (l[3]) {
                            for (e = 0, i = u; e < i; e++)
                                if (Si[e][1].exec(l[3])) { r = (l[2] || " ") + Si[e][0]; break }
                            if (null == r) return void(t._isValid = !1)
                        }
                        if (!n && null != r) return void(t._isValid = !1);
                        if (l[4]) {
                            if (!xi.exec(l[4])) return void(t._isValid = !1);
                            s = "Z"
                        }
                        t._f = o + (r || "") + (s || ""), zi(t)
                    } else t._isValid = !1
                }

                function Ei(t, e, i, n, o, r) { var s = [Pi(t), ie.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(o, 10)]; return r && s.push(parseInt(r, 10)), s }

                function Pi(t) { var e = parseInt(t, 10); return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e }

                function Ai(t) { return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }

                function Ii(t, e, i) { return !t || Ne.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (g(i).weekdayMismatch = !0, i._isValid = !1, !1) }

                function Li(t, e, i) {
                    if (t) return Mi[t];
                    if (e) return 0;
                    var n = parseInt(i, 10),
                        o = n % 100;
                    return (n - o) / 100 * 60 + o
                }

                function Ni(t) {
                    var e, i = Ti.exec(Ai(t._i));
                    if (i) {
                        if (e = Ei(i[4], i[3], i[2], i[5], i[6], i[7]), !Ii(i[1], e, t)) return;
                        t._a = e, t._tzm = Li(i[8], i[9], i[10]), t._d = _e.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), g(t).rfc2822 = !0
                    } else t._isValid = !1
                }

                function Fi(t) {
                    var e = Ci.exec(t._i);
                    null === e ? (Oi(t), !1 === t._isValid && (delete t._isValid, Ni(t), !1 === t._isValid && (delete t._isValid, t._strict ? t._isValid = !1 : n.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                }

                function Ri(t, e, i) { return null != t ? t : null != e ? e : i }

                function ji(t) { var e = new Date(n.now()); return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()] }

                function Yi(t) {
                    var e, i, n, o, r, s = [];
                    if (!t._d) {
                        for (n = ji(t), t._w && null == t._a[Ut] && null == t._a[Vt] && Hi(t), null != t._dayOfYear && (r = Ri(t._a[Wt], n[Wt]), (t._dayOfYear > ve(r) || 0 === t._dayOfYear) && (g(t)._overflowDayOfYear = !0), i = _e(r, 0, t._dayOfYear), t._a[Vt] = i.getUTCMonth(), t._a[Ut] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = n[e];
                        for (; e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[Xt] && 0 === t._a[qt] && 0 === t._a[$t] && 0 === t._a[Zt] && (t._nextDay = !0, t._a[Xt] = 0), t._d = (t._useUTC ? _e : be).apply(null, s), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Xt] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (g(t).weekdayMismatch = !0)
                    }
                }

                function Hi(t) {
                    var e, i, n, o, r, s, a, l, h;
                    null != (e = t._w).GG || null != e.W || null != e.E ? (r = 1, s = 4, i = Ri(e.GG, t._a[Wt], xe($i(), 1, 4).year), n = Ri(e.W, 1), ((o = Ri(e.E, 1)) < 1 || o > 7) && (l = !0)) : (r = t._locale._week.dow, s = t._locale._week.doy, h = xe($i(), r, s), i = Ri(e.gg, t._a[Wt], h.year), n = Ri(e.w, h.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (l = !0) : null != e.e ? (o = e.e + r, (e.e < 0 || e.e > 6) && (l = !0)) : o = r), n < 1 || n > De(i, r, s) ? g(t)._overflowWeeks = !0 : null != l ? g(t)._overflowWeekday = !0 : (a = ke(i, n, o, r, s), t._a[Wt] = a.year, t._dayOfYear = a.dayOfYear)
                }

                function zi(t) {
                    if (t._f !== n.ISO_8601)
                        if (t._f !== n.RFC_2822) {
                            t._a = [], g(t).empty = !0;
                            var e, i, o, r, s, a, l, h = "" + t._i,
                                u = h.length,
                                d = 0;
                            for (l = (o = V(t._f, t._locale).match(R) || []).length, e = 0; e < l; e++) r = o[e], (i = (h.match(Ft(r, t)) || [])[0]) && ((s = h.substr(0, h.indexOf(i))).length > 0 && g(t).unusedInput.push(s), h = h.slice(h.indexOf(i) + i.length), d += i.length), H[r] ? (i ? g(t).empty = !1 : g(t).unusedTokens.push(r), Bt(r, i, t)) : t._strict && !i && g(t).unusedTokens.push(r);
                            g(t).charsLeftOver = u - d, h.length > 0 && g(t).unusedInput.push(h), t._a[Xt] <= 12 && !0 === g(t).bigHour && t._a[Xt] > 0 && (g(t).bigHour = void 0), g(t).parsedDateParts = t._a.slice(0), g(t).meridiem = t._meridiem, t._a[Xt] = Bi(t._locale, t._a[Xt], t._meridiem), null !== (a = g(t).era) && (t._a[Wt] = t._locale.erasConvertYear(a, t._a[Wt])), Yi(t), _i(t)
                        } else Ni(t);
                    else Oi(t)
                }

                function Bi(t, e, i) { var n; return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e }

                function Gi(t) {
                    var e, i, n, o, r, s, a = !1,
                        l = t._f.length;
                    if (0 === l) return g(t).invalidFormat = !0, void(t._d = new Date(NaN));
                    for (o = 0; o < l; o++) r = 0, s = !1, e = k({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], zi(e), y(e) && (s = !0), r += g(e).charsLeftOver, r += 10 * g(e).unusedTokens.length, g(e).score = r, a ? r < n && (n = r, i = e) : (null == n || r < n || s) && (n = r, i = e, s && (a = !0));
                    f(t, i || e)
                }

                function Wi(t) {
                    if (!t._d) {
                        var e = rt(t._i),
                            i = void 0 === e.day ? e.date : e.day;
                        t._a = p([e.year, e.month, i, e.hour, e.minute, e.second, e.millisecond], (function(t) { return t && parseInt(t, 10) })), Yi(t)
                    }
                }

                function Vi(t) { var e = new x(_i(Ui(t))); return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e }

                function Ui(t) {
                    var e = t._i,
                        i = t._f;
                    return t._locale = t._locale || yi(t._l), null === e || void 0 === i && "" === e ? b({ nullInput: !0 }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), D(e) ? new x(_i(e)) : (c(e) ? t._d = e : s(i) ? Gi(t) : i ? zi(t) : Xi(t), y(t) || (t._d = null), t))
                }

                function Xi(t) {
                    var e = t._i;
                    u(e) ? t._d = new Date(n.now()) : c(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? Fi(t) : s(e) ? (t._a = p(e.slice(0), (function(t) { return parseInt(t, 10) })), Yi(t)) : a(e) ? Wi(t) : d(e) ? t._d = new Date(e) : n.createFromInputFallback(t)
                }

                function qi(t, e, i, n, o) { var r = {}; return !0 !== e && !1 !== e || (n = e, e = void 0), !0 !== i && !1 !== i || (n = i, i = void 0), (a(t) && h(t) || s(t) && 0 === t.length) && (t = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = o, r._l = i, r._i = t, r._f = e, r._strict = n, Vi(r) }

                function $i(t, e, i, n) { return qi(t, e, i, n, !1) }
                n.createFromInputFallback = C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) })), n.ISO_8601 = function() {}, n.RFC_2822 = function() {};
                var Zi = C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var t = $i.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : b() })),
                    Ki = C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var t = $i.apply(null, arguments); return this.isValid() && t.isValid() ? t > this ? this : t : b() }));

                function Ji(t, e) { var i, n; if (1 === e.length && s(e[0]) && (e = e[0]), !e.length) return $i(); for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]); return i }

                function Qi() { return Ji("isBefore", [].slice.call(arguments, 0)) }

                function tn() { return Ji("isAfter", [].slice.call(arguments, 0)) }
                var en = function() { return Date.now ? Date.now() : +new Date },
                    nn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function on(t) {
                    var e, i, n = !1,
                        o = nn.length;
                    for (e in t)
                        if (l(t, e) && (-1 === Gt.call(nn, e) || null != t[e] && isNaN(t[e]))) return !1;
                    for (i = 0; i < o; ++i)
                        if (t[nn[i]]) {
                            if (n) return !1;
                            parseFloat(t[nn[i]]) !== dt(t[nn[i]]) && (n = !0)
                        }
                    return !0
                }

                function rn() { return this._isValid }

                function sn() { return On(NaN) }

                function an(t) {
                    var e = rt(t),
                        i = e.year || 0,
                        n = e.quarter || 0,
                        o = e.month || 0,
                        r = e.week || e.isoWeek || 0,
                        s = e.day || 0,
                        a = e.hour || 0,
                        l = e.minute || 0,
                        h = e.second || 0,
                        u = e.millisecond || 0;
                    this._isValid = on(e), this._milliseconds = +u + 1e3 * h + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * r, this._months = +o + 3 * n + 12 * i, this._data = {}, this._locale = yi(), this._bubble()
                }

                function ln(t) { return t instanceof an }

                function hn(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

                function un(t, e, i) {
                    var n, o = Math.min(t.length, e.length),
                        r = Math.abs(t.length - e.length),
                        s = 0;
                    for (n = 0; n < o; n++)(i && t[n] !== e[n] || !i && dt(t[n]) !== dt(e[n])) && s++;
                    return s + r
                }

                function dn(t, e) {
                    z(t, 0, 0, (function() {
                        var t = this.utcOffset(),
                            i = "+";
                        return t < 0 && (t = -t, i = "-"), i + F(~~(t / 60), 2) + e + F(~~t % 60, 2)
                    }))
                }
                dn("Z", ":"), dn("ZZ", ""), Nt("Z", At), Nt("ZZ", At), Ht(["Z", "ZZ"], (function(t, e, i) { i._useUTC = !0, i._tzm = pn(At, t) }));
                var cn = /([\+\-]|\d\d)/gi;

                function pn(t, e) { var i, n, o = (e || "").match(t); return null === o ? null : 0 === (n = 60 * (i = ((o[o.length - 1] || []) + "").match(cn) || ["-", 0, 0])[1] + dt(i[2])) ? 0 : "+" === i[0] ? n : -n }

                function fn(t, e) { var i, o; return e._isUTC ? (i = e.clone(), o = (D(t) || c(t) ? t.valueOf() : $i(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + o), n.updateOffset(i, !1), i) : $i(t).local() }

                function mn(t) { return -Math.round(t._d.getTimezoneOffset()) }

                function vn(t, e, i) { var o, r = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null != t) { if ("string" == typeof t) { if (null === (t = pn(At, t))) return this } else Math.abs(t) < 16 && !i && (t *= 60); return !this._isUTC && e && (o = mn(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), r !== t && (!e || this._changeInProgress ? Ln(this, On(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? r : mn(this) }

                function gn(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() }

                function yn(t) { return this.utcOffset(0, t) }

                function bn(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(mn(this), "m")), this }

                function _n() {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var t = pn(Pt, this._i);
                        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                    }
                    return this
                }

                function wn(t) { return !!this.isValid() && (t = t ? $i(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }

                function kn() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }

                function xn() { if (!u(this._isDSTShifted)) return this._isDSTShifted; var t, e = {}; return k(e, this), (e = Ui(e))._a ? (t = e._isUTC ? m(e._a) : $i(e._a), this._isDSTShifted = this.isValid() && un(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted }

                function Dn() { return !!this.isValid() && !this._isUTC }

                function Sn() { return !!this.isValid() && this._isUTC }

                function Cn() { return !!this.isValid() && this._isUTC && 0 === this._offset }
                n.updateOffset = function() {};
                var Tn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                    Mn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                function On(t, e) {
                    var i, n, o, r = t,
                        s = null;
                    return ln(t) ? r = { ms: t._milliseconds, d: t._days, M: t._months } : d(t) || !isNaN(+t) ? (r = {}, e ? r[e] = +t : r.milliseconds = +t) : (s = Tn.exec(t)) ? (i = "-" === s[1] ? -1 : 1, r = { y: 0, d: dt(s[Ut]) * i, h: dt(s[Xt]) * i, m: dt(s[qt]) * i, s: dt(s[$t]) * i, ms: dt(hn(1e3 * s[Zt])) * i }) : (s = Mn.exec(t)) ? (i = "-" === s[1] ? -1 : 1, r = { y: En(s[2], i), M: En(s[3], i), w: En(s[4], i), d: En(s[5], i), h: En(s[6], i), m: En(s[7], i), s: En(s[8], i) }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (o = An($i(r.from), $i(r.to)), (r = {}).ms = o.milliseconds, r.M = o.months), n = new an(r), ln(t) && l(t, "_locale") && (n._locale = t._locale), ln(t) && l(t, "_isValid") && (n._isValid = t._isValid), n
                }

                function En(t, e) { var i = t && parseFloat(t.replace(",", ".")); return (isNaN(i) ? 0 : i) * e }

                function Pn(t, e) { var i = {}; return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i }

                function An(t, e) { var i; return t.isValid() && e.isValid() ? (e = fn(e, t), t.isBefore(e) ? i = Pn(t, e) : ((i = Pn(e, t)).milliseconds = -i.milliseconds, i.months = -i.months), i) : { milliseconds: 0, months: 0 } }

                function In(t, e) { return function(i, n) { var o; return null === n || isNaN(+n) || (O(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = i, i = n, n = o), Ln(this, On(i, n), t), this } }

                function Ln(t, e, i, o) {
                    var r = e._milliseconds,
                        s = hn(e._days),
                        a = hn(e._months);
                    t.isValid() && (o = null == o || o, a && ue(t, pt(t, "Month") + a * i), s && ft(t, "Date", pt(t, "Date") + s * i), r && t._d.setTime(t._d.valueOf() + r * i), o && n.updateOffset(t, s || a))
                }
                On.fn = an.prototype, On.invalid = sn;
                var Nn = In(1, "add"),
                    Fn = In(-1, "subtract");

                function Rn(t) { return "string" == typeof t || t instanceof String }

                function jn(t) { return D(t) || c(t) || Rn(t) || d(t) || Hn(t) || Yn(t) || null == t }

                function Yn(t) {
                    var e, i, n = a(t) && !h(t),
                        o = !1,
                        r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                        s = r.length;
                    for (e = 0; e < s; e += 1) i = r[e], o = o || l(t, i);
                    return n && o
                }

                function Hn(t) {
                    var e = s(t),
                        i = !1;
                    return e && (i = 0 === t.filter((function(e) { return !d(e) && Rn(t) })).length), e && i
                }

                function zn(t) {
                    var e, i, n = a(t) && !h(t),
                        o = !1,
                        r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
                    for (e = 0; e < r.length; e += 1) i = r[e], o = o || l(t, i);
                    return n && o
                }

                function Bn(t, e) { var i = t.diff(e, "days", !0); return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse" }

                function Gn(t, e) {
                    1 === arguments.length && (arguments[0] ? jn(arguments[0]) ? (t = arguments[0], e = void 0) : zn(arguments[0]) && (e = arguments[0], t = void 0) : (t = void 0, e = void 0));
                    var i = t || $i(),
                        o = fn(i, this).startOf("day"),
                        r = n.calendarFormat(this, o) || "sameElse",
                        s = e && (E(e[r]) ? e[r].call(this, i) : e[r]);
                    return this.format(s || this.localeData().calendar(r, this, $i(i)))
                }

                function Wn() { return new x(this) }

                function Vn(t, e) { var i = D(t) ? t : $i(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = ot(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf()) }

                function Un(t, e) { var i = D(t) ? t : $i(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = ot(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf()) }

                function Xn(t, e, i, n) {
                    var o = D(t) ? t : $i(t),
                        r = D(e) ? e : $i(e);
                    return !!(this.isValid() && o.isValid() && r.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(o, i) : !this.isBefore(o, i)) && (")" === n[1] ? this.isBefore(r, i) : !this.isAfter(r, i))
                }

                function qn(t, e) { var i, n = D(t) ? t : $i(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = ot(e) || "millisecond") ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) }

                function $n(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }

                function Zn(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }

                function Kn(t, e, i) {
                    var n, o, r;
                    if (!this.isValid()) return NaN;
                    if (!(n = fn(t, this)).isValid()) return NaN;
                    switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), e = ot(e)) {
                        case "year":
                            r = Jn(this, n) / 12;
                            break;
                        case "month":
                            r = Jn(this, n);
                            break;
                        case "quarter":
                            r = Jn(this, n) / 3;
                            break;
                        case "second":
                            r = (this - n) / 1e3;
                            break;
                        case "minute":
                            r = (this - n) / 6e4;
                            break;
                        case "hour":
                            r = (this - n) / 36e5;
                            break;
                        case "day":
                            r = (this - n - o) / 864e5;
                            break;
                        case "week":
                            r = (this - n - o) / 6048e5;
                            break;
                        default:
                            r = this - n
                    }
                    return i ? r : ut(r)
                }

                function Jn(t, e) {
                    if (t.date() < e.date()) return -Jn(e, t);
                    var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                        n = t.clone().add(i, "months");
                    return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
                }

                function Qn() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }

                function to(t) {
                    if (!this.isValid()) return null;
                    var e = !0 !== t,
                        i = e ? this.clone().utc() : this;
                    return i.year() < 0 || i.year() > 9999 ? W(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", W(i, "Z")) : W(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }

                function eo() {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var t, e, i, n, o = "moment",
                        r = "";
                    return this.isLocal() || (o = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", r = "Z"), t = "[" + o + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = "-MM-DD[T]HH:mm:ss.SSS", n = r + '[")]', this.format(t + e + i + n)
                }

                function io(t) { t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat); var e = W(this, t); return this.localeData().postformat(e) }

                function no(t, e) { return this.isValid() && (D(t) && t.isValid() || $i(t).isValid()) ? On({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }

                function oo(t) { return this.from($i(), t) }

                function ro(t, e) { return this.isValid() && (D(t) && t.isValid() || $i(t).isValid()) ? On({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }

                function so(t) { return this.to($i(), t) }

                function ao(t) { var e; return void 0 === t ? this._locale._abbr : (null != (e = yi(t)) && (this._locale = e), this) }
                n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var lo = C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(t) { return void 0 === t ? this.localeData() : this.locale(t) }));

                function ho() { return this._locale }
                var uo = 1e3,
                    co = 60 * uo,
                    po = 60 * co,
                    fo = 3506328 * po;

                function mo(t, e) { return (t % e + e) % e }

                function vo(t, e, i) { return t < 100 && t >= 0 ? new Date(t + 400, e, i) - fo : new Date(t, e, i).valueOf() }

                function go(t, e, i) { return t < 100 && t >= 0 ? Date.UTC(t + 400, e, i) - fo : Date.UTC(t, e, i) }

                function yo(t) {
                    var e, i;
                    if (void 0 === (t = ot(t)) || "millisecond" === t || !this.isValid()) return this;
                    switch (i = this._isUTC ? go : vo, t) {
                        case "year":
                            e = i(this.year(), 0, 1);
                            break;
                        case "quarter":
                            e = i(this.year(), this.month() - this.month() % 3, 1);
                            break;
                        case "month":
                            e = i(this.year(), this.month(), 1);
                            break;
                        case "week":
                            e = i(this.year(), this.month(), this.date() - this.weekday());
                            break;
                        case "isoWeek":
                            e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                            break;
                        case "day":
                        case "date":
                            e = i(this.year(), this.month(), this.date());
                            break;
                        case "hour":
                            e = this._d.valueOf(), e -= mo(e + (this._isUTC ? 0 : this.utcOffset() * co), po);
                            break;
                        case "minute":
                            e = this._d.valueOf(), e -= mo(e, co);
                            break;
                        case "second":
                            e = this._d.valueOf(), e -= mo(e, uo)
                    }
                    return this._d.setTime(e), n.updateOffset(this, !0), this
                }

                function bo(t) {
                    var e, i;
                    if (void 0 === (t = ot(t)) || "millisecond" === t || !this.isValid()) return this;
                    switch (i = this._isUTC ? go : vo, t) {
                        case "year":
                            e = i(this.year() + 1, 0, 1) - 1;
                            break;
                        case "quarter":
                            e = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                            break;
                        case "month":
                            e = i(this.year(), this.month() + 1, 1) - 1;
                            break;
                        case "week":
                            e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                            break;
                        case "isoWeek":
                            e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                            break;
                        case "day":
                        case "date":
                            e = i(this.year(), this.month(), this.date() + 1) - 1;
                            break;
                        case "hour":
                            e = this._d.valueOf(), e += po - mo(e + (this._isUTC ? 0 : this.utcOffset() * co), po) - 1;
                            break;
                        case "minute":
                            e = this._d.valueOf(), e += co - mo(e, co) - 1;
                            break;
                        case "second":
                            e = this._d.valueOf(), e += uo - mo(e, uo) - 1
                    }
                    return this._d.setTime(e), n.updateOffset(this, !0), this
                }

                function _o() { return this._d.valueOf() - 6e4 * (this._offset || 0) }

                function wo() { return Math.floor(this.valueOf() / 1e3) }

                function ko() { return new Date(this.valueOf()) }

                function xo() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }

                function Do() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }

                function So() { return this.isValid() ? this.toISOString() : null }

                function Co() { return y(this) }

                function To() { return f({}, g(this)) }

                function Mo() { return g(this).overflow }

                function Oo() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }

                function Eo(t, e) {
                    var i, o, r, s = this._eras || yi("en")._eras;
                    for (i = 0, o = s.length; i < o; ++i) {
                        switch (typeof s[i].since) {
                            case "string":
                                r = n(s[i].since).startOf("day"), s[i].since = r.valueOf()
                        }
                        switch (typeof s[i].until) {
                            case "undefined":
                                s[i].until = 1 / 0;
                                break;
                            case "string":
                                r = n(s[i].until).startOf("day").valueOf(), s[i].until = r.valueOf()
                        }
                    }
                    return s
                }

                function Po(t, e, i) {
                    var n, o, r, s, a, l = this.eras();
                    for (t = t.toUpperCase(), n = 0, o = l.length; n < o; ++n)
                        if (r = l[n].name.toUpperCase(), s = l[n].abbr.toUpperCase(), a = l[n].narrow.toUpperCase(), i) switch (e) {
                            case "N":
                            case "NN":
                            case "NNN":
                                if (s === t) return l[n];
                                break;
                            case "NNNN":
                                if (r === t) return l[n];
                                break;
                            case "NNNNN":
                                if (a === t) return l[n]
                        } else if ([r, s, a].indexOf(t) >= 0) return l[n]
                }

                function Ao(t, e) { var i = t.since <= t.until ? 1 : -1; return void 0 === e ? n(t.since).year() : n(t.since).year() + (e - t.offset) * i }

                function Io() { var t, e, i, n = this.localeData().eras(); for (t = 0, e = n.length; t < e; ++t) { if (i = this.clone().startOf("day").valueOf(), n[t].since <= i && i <= n[t].until) return n[t].name; if (n[t].until <= i && i <= n[t].since) return n[t].name } return "" }

                function Lo() { var t, e, i, n = this.localeData().eras(); for (t = 0, e = n.length; t < e; ++t) { if (i = this.clone().startOf("day").valueOf(), n[t].since <= i && i <= n[t].until) return n[t].narrow; if (n[t].until <= i && i <= n[t].since) return n[t].narrow } return "" }

                function No() { var t, e, i, n = this.localeData().eras(); for (t = 0, e = n.length; t < e; ++t) { if (i = this.clone().startOf("day").valueOf(), n[t].since <= i && i <= n[t].until) return n[t].abbr; if (n[t].until <= i && i <= n[t].since) return n[t].abbr } return "" }

                function Fo() {
                    var t, e, i, o, r = this.localeData().eras();
                    for (t = 0, e = r.length; t < e; ++t)
                        if (i = r[t].since <= r[t].until ? 1 : -1, o = this.clone().startOf("day").valueOf(), r[t].since <= o && o <= r[t].until || r[t].until <= o && o <= r[t].since) return (this.year() - n(r[t].since).year()) * i + r[t].offset;
                    return this.year()
                }

                function Ro(t) { return l(this, "_erasNameRegex") || Wo.call(this), t ? this._erasNameRegex : this._erasRegex }

                function jo(t) { return l(this, "_erasAbbrRegex") || Wo.call(this), t ? this._erasAbbrRegex : this._erasRegex }

                function Yo(t) { return l(this, "_erasNarrowRegex") || Wo.call(this), t ? this._erasNarrowRegex : this._erasRegex }

                function Ho(t, e) { return e.erasAbbrRegex(t) }

                function zo(t, e) { return e.erasNameRegex(t) }

                function Bo(t, e) { return e.erasNarrowRegex(t) }

                function Go(t, e) { return e._eraYearOrdinalRegex || Ot }

                function Wo() {
                    var t, e, i = [],
                        n = [],
                        o = [],
                        r = [],
                        s = this.eras();
                    for (t = 0, e = s.length; t < e; ++t) n.push(jt(s[t].name)), i.push(jt(s[t].abbr)), o.push(jt(s[t].narrow)), r.push(jt(s[t].name)), r.push(jt(s[t].abbr)), r.push(jt(s[t].narrow));
                    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + o.join("|") + ")", "i")
                }

                function Vo(t, e) { z(0, [t, t.length], 0, e) }

                function Uo(t) { return Jo.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }

                function Xo(t) { return Jo.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }

                function qo() { return De(this.year(), 1, 4) }

                function $o() { return De(this.isoWeekYear(), 1, 4) }

                function Zo() { var t = this.localeData()._week; return De(this.year(), t.dow, t.doy) }

                function Ko() { var t = this.localeData()._week; return De(this.weekYear(), t.dow, t.doy) }

                function Jo(t, e, i, n, o) { var r; return null == t ? xe(this, n, o).year : (e > (r = De(t, n, o)) && (e = r), Qo.call(this, t, e, i, n, o)) }

                function Qo(t, e, i, n, o) {
                    var r = ke(t, e, i, n, o),
                        s = _e(r.year, 0, r.dayOfYear);
                    return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                }

                function tr(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }
                z("N", 0, 0, "eraAbbr"), z("NN", 0, 0, "eraAbbr"), z("NNN", 0, 0, "eraAbbr"), z("NNNN", 0, 0, "eraName"), z("NNNNN", 0, 0, "eraNarrow"), z("y", ["y", 1], "yo", "eraYear"), z("y", ["yy", 2], 0, "eraYear"), z("y", ["yyy", 3], 0, "eraYear"), z("y", ["yyyy", 4], 0, "eraYear"), Nt("N", Ho), Nt("NN", Ho), Nt("NNN", Ho), Nt("NNNN", zo), Nt("NNNNN", Bo), Ht(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(t, e, i, n) {
                    var o = i._locale.erasParse(t, n, i._strict);
                    o ? g(i).era = o : g(i).invalidEra = t
                })), Nt("y", Ot), Nt("yy", Ot), Nt("yyy", Ot), Nt("yyyy", Ot), Nt("yo", Go), Ht(["y", "yy", "yyy", "yyyy"], Wt), Ht(["yo"], (function(t, e, i, n) {
                    var o;
                    i._locale._eraYearOrdinalRegex && (o = t.match(i._locale._eraYearOrdinalRegex)), i._locale.eraYearOrdinalParse ? e[Wt] = i._locale.eraYearOrdinalParse(t, o) : e[Wt] = parseInt(t, 10)
                })), z(0, ["gg", 2], 0, (function() { return this.weekYear() % 100 })), z(0, ["GG", 2], 0, (function() { return this.isoWeekYear() % 100 })), Vo("gggg", "weekYear"), Vo("ggggg", "weekYear"), Vo("GGGG", "isoWeekYear"), Vo("GGGGG", "isoWeekYear"), nt("weekYear", "gg"), nt("isoWeekYear", "GG"), at("weekYear", 1), at("isoWeekYear", 1), Nt("G", Et), Nt("g", Et), Nt("GG", xt, bt), Nt("gg", xt, bt), Nt("GGGG", Tt, wt), Nt("gggg", Tt, wt), Nt("GGGGG", Mt, kt), Nt("ggggg", Mt, kt), zt(["gggg", "ggggg", "GGGG", "GGGGG"], (function(t, e, i, n) { e[n.substr(0, 2)] = dt(t) })), zt(["gg", "GG"], (function(t, e, i, o) { e[o] = n.parseTwoDigitYear(t) })), z("Q", 0, "Qo", "quarter"), nt("quarter", "Q"), at("quarter", 7), Nt("Q", yt), Ht("Q", (function(t, e) { e[Vt] = 3 * (dt(t) - 1) })), z("D", ["DD", 2], "Do", "date"), nt("date", "D"), at("date", 9), Nt("D", xt), Nt("DD", xt, bt), Nt("Do", (function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient })), Ht(["D", "DD"], Ut), Ht("Do", (function(t, e) { e[Ut] = dt(t.match(xt)[0]) }));
                var er = ct("Date", !0);

                function ir(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }
                z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), nt("dayOfYear", "DDD"), at("dayOfYear", 4), Nt("DDD", Ct), Nt("DDDD", _t), Ht(["DDD", "DDDD"], (function(t, e, i) { i._dayOfYear = dt(t) })), z("m", ["mm", 2], 0, "minute"), nt("minute", "m"), at("minute", 14), Nt("m", xt), Nt("mm", xt, bt), Ht(["m", "mm"], qt);
                var nr = ct("Minutes", !1);
                z("s", ["ss", 2], 0, "second"), nt("second", "s"), at("second", 15), Nt("s", xt), Nt("ss", xt, bt), Ht(["s", "ss"], $t);
                var or, rr, sr = ct("Seconds", !1);
                for (z("S", 0, 0, (function() { return ~~(this.millisecond() / 100) })), z(0, ["SS", 2], 0, (function() { return ~~(this.millisecond() / 10) })), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, (function() { return 10 * this.millisecond() })), z(0, ["SSSSS", 5], 0, (function() { return 100 * this.millisecond() })), z(0, ["SSSSSS", 6], 0, (function() { return 1e3 * this.millisecond() })), z(0, ["SSSSSSS", 7], 0, (function() { return 1e4 * this.millisecond() })), z(0, ["SSSSSSSS", 8], 0, (function() { return 1e5 * this.millisecond() })), z(0, ["SSSSSSSSS", 9], 0, (function() { return 1e6 * this.millisecond() })), nt("millisecond", "ms"), at("millisecond", 16), Nt("S", Ct, yt), Nt("SS", Ct, bt), Nt("SSS", Ct, _t), or = "SSSS"; or.length <= 9; or += "S") Nt(or, Ot);

                function ar(t, e) { e[Zt] = dt(1e3 * ("0." + t)) }
                for (or = "S"; or.length <= 9; or += "S") Ht(or, ar);

                function lr() { return this._isUTC ? "UTC" : "" }

                function hr() { return this._isUTC ? "Coordinated Universal Time" : "" }
                rr = ct("Milliseconds", !1), z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName");
                var ur = x.prototype;

                function dr(t) { return $i(1e3 * t) }

                function cr() { return $i.apply(null, arguments).parseZone() }

                function pr(t) { return t }
                ur.add = Nn, ur.calendar = Gn, ur.clone = Wn, ur.diff = Kn, ur.endOf = bo, ur.format = io, ur.from = no, ur.fromNow = oo, ur.to = ro, ur.toNow = so, ur.get = mt, ur.invalidAt = Mo, ur.isAfter = Vn, ur.isBefore = Un, ur.isBetween = Xn, ur.isSame = qn, ur.isSameOrAfter = $n, ur.isSameOrBefore = Zn, ur.isValid = Co, ur.lang = lo, ur.locale = ao, ur.localeData = ho, ur.max = Ki, ur.min = Zi, ur.parsingFlags = To, ur.set = vt, ur.startOf = yo, ur.subtract = Fn, ur.toArray = xo, ur.toObject = Do, ur.toDate = ko, ur.toISOString = to, ur.inspect = eo, "undefined" != typeof Symbol && null != Symbol.for && (ur[Symbol.for("nodejs.util.inspect.custom")] = function() { return "Moment<" + this.format() + ">" }), ur.toJSON = So, ur.toString = Qn, ur.unix = wo, ur.valueOf = _o, ur.creationData = Oo, ur.eraName = Io, ur.eraNarrow = Lo, ur.eraAbbr = No, ur.eraYear = Fo, ur.year = ge, ur.isLeapYear = ye, ur.weekYear = Uo, ur.isoWeekYear = Xo, ur.quarter = ur.quarters = tr, ur.month = de, ur.daysInMonth = ce, ur.week = ur.weeks = Oe, ur.isoWeek = ur.isoWeeks = Ee, ur.weeksInYear = Zo, ur.weeksInWeekYear = Ko, ur.isoWeeksInYear = qo, ur.isoWeeksInISOWeekYear = $o, ur.date = er, ur.day = ur.days = Ve, ur.weekday = Ue, ur.isoWeekday = Xe, ur.dayOfYear = ir, ur.hour = ur.hours = oi, ur.minute = ur.minutes = nr, ur.second = ur.seconds = sr, ur.millisecond = ur.milliseconds = rr, ur.utcOffset = vn, ur.utc = yn, ur.local = bn, ur.parseZone = _n, ur.hasAlignedHourOffset = wn, ur.isDST = kn, ur.isLocal = Dn, ur.isUtcOffset = Sn, ur.isUtc = Cn, ur.isUTC = Cn, ur.zoneAbbr = lr, ur.zoneName = hr, ur.dates = C("dates accessor is deprecated. Use date instead.", er), ur.months = C("months accessor is deprecated. Use month instead", de), ur.years = C("years accessor is deprecated. Use year instead", ge), ur.zone = C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", gn), ur.isDSTShifted = C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", xn);
                var fr = I.prototype;

                function mr(t, e, i, n) {
                    var o = yi(),
                        r = m().set(n, e);
                    return o[i](r, t)
                }

                function vr(t, e, i) { if (d(t) && (e = t, t = void 0), t = t || "", null != e) return mr(t, e, i, "month"); var n, o = []; for (n = 0; n < 12; n++) o[n] = mr(t, n, i, "month"); return o }

                function gr(t, e, i, n) {
                    "boolean" == typeof t ? (d(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, d(e) && (i = e, e = void 0), e = e || "");
                    var o, r = yi(),
                        s = t ? r._week.dow : 0,
                        a = [];
                    if (null != i) return mr(e, (i + s) % 7, n, "day");
                    for (o = 0; o < 7; o++) a[o] = mr(e, (o + s) % 7, n, "day");
                    return a
                }

                function yr(t, e) { return vr(t, e, "months") }

                function br(t, e) { return vr(t, e, "monthsShort") }

                function _r(t, e, i) { return gr(t, e, i, "weekdays") }

                function wr(t, e, i) { return gr(t, e, i, "weekdaysShort") }

                function kr(t, e, i) { return gr(t, e, i, "weekdaysMin") }
                fr.calendar = N, fr.longDateFormat = X, fr.invalidDate = $, fr.ordinal = J, fr.preparse = pr, fr.postformat = pr, fr.relativeTime = tt, fr.pastFuture = et, fr.set = P, fr.eras = Eo, fr.erasParse = Po, fr.erasConvertYear = Ao, fr.erasAbbrRegex = jo, fr.erasNameRegex = Ro, fr.erasNarrowRegex = Yo, fr.months = se, fr.monthsShort = ae, fr.monthsParse = he, fr.monthsRegex = fe, fr.monthsShortRegex = pe, fr.week = Se, fr.firstDayOfYear = Me, fr.firstDayOfWeek = Te, fr.weekdays = He, fr.weekdaysMin = Be, fr.weekdaysShort = ze, fr.weekdaysParse = We, fr.weekdaysRegex = qe, fr.weekdaysShortRegex = $e, fr.weekdaysMinRegex = Ze, fr.isPM = ii, fr.meridiem = ri, mi("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === dt(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), n.lang = C("moment.lang is deprecated. Use moment.locale instead.", mi), n.langData = C("moment.langData is deprecated. Use moment.localeData instead.", yi);
                var xr = Math.abs;

                function Dr() { var t = this._data; return this._milliseconds = xr(this._milliseconds), this._days = xr(this._days), this._months = xr(this._months), t.milliseconds = xr(t.milliseconds), t.seconds = xr(t.seconds), t.minutes = xr(t.minutes), t.hours = xr(t.hours), t.months = xr(t.months), t.years = xr(t.years), this }

                function Sr(t, e, i, n) { var o = On(e, i); return t._milliseconds += n * o._milliseconds, t._days += n * o._days, t._months += n * o._months, t._bubble() }

                function Cr(t, e) { return Sr(this, t, e, 1) }

                function Tr(t, e) { return Sr(this, t, e, -1) }

                function Mr(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

                function Or() {
                    var t, e, i, n, o, r = this._milliseconds,
                        s = this._days,
                        a = this._months,
                        l = this._data;
                    return r >= 0 && s >= 0 && a >= 0 || r <= 0 && s <= 0 && a <= 0 || (r += 864e5 * Mr(Pr(a) + s), s = 0, a = 0), l.milliseconds = r % 1e3, t = ut(r / 1e3), l.seconds = t % 60, e = ut(t / 60), l.minutes = e % 60, i = ut(e / 60), l.hours = i % 24, s += ut(i / 24), a += o = ut(Er(s)), s -= Mr(Pr(o)), n = ut(a / 12), a %= 12, l.days = s, l.months = a, l.years = n, this
                }

                function Er(t) { return 4800 * t / 146097 }

                function Pr(t) { return 146097 * t / 4800 }

                function Ar(t) {
                    if (!this.isValid()) return NaN;
                    var e, i, n = this._milliseconds;
                    if ("month" === (t = ot(t)) || "quarter" === t || "year" === t) switch (e = this._days + n / 864e5, i = this._months + Er(e), t) {
                        case "month":
                            return i;
                        case "quarter":
                            return i / 3;
                        case "year":
                            return i / 12
                    } else switch (e = this._days + Math.round(Pr(this._months)), t) {
                        case "week":
                            return e / 7 + n / 6048e5;
                        case "day":
                            return e + n / 864e5;
                        case "hour":
                            return 24 * e + n / 36e5;
                        case "minute":
                            return 1440 * e + n / 6e4;
                        case "second":
                            return 86400 * e + n / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + n;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                }

                function Ir() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * dt(this._months / 12) : NaN }

                function Lr(t) { return function() { return this.as(t) } }
                var Nr = Lr("ms"),
                    Fr = Lr("s"),
                    Rr = Lr("m"),
                    jr = Lr("h"),
                    Yr = Lr("d"),
                    Hr = Lr("w"),
                    zr = Lr("M"),
                    Br = Lr("Q"),
                    Gr = Lr("y");

                function Wr() { return On(this) }

                function Vr(t) { return t = ot(t), this.isValid() ? this[t + "s"]() : NaN }

                function Ur(t) { return function() { return this.isValid() ? this._data[t] : NaN } }
                var Xr = Ur("milliseconds"),
                    qr = Ur("seconds"),
                    $r = Ur("minutes"),
                    Zr = Ur("hours"),
                    Kr = Ur("days"),
                    Jr = Ur("months"),
                    Qr = Ur("years");

                function ts() { return ut(this.days() / 7) }
                var es = Math.round,
                    is = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };

                function ns(t, e, i, n, o) { return o.relativeTime(e || 1, !!i, t, n) }

                function os(t, e, i, n) {
                    var o = On(t).abs(),
                        r = es(o.as("s")),
                        s = es(o.as("m")),
                        a = es(o.as("h")),
                        l = es(o.as("d")),
                        h = es(o.as("M")),
                        u = es(o.as("w")),
                        d = es(o.as("y")),
                        c = r <= i.ss && ["s", r] || r < i.s && ["ss", r] || s <= 1 && ["m"] || s < i.m && ["mm", s] || a <= 1 && ["h"] || a < i.h && ["hh", a] || l <= 1 && ["d"] || l < i.d && ["dd", l];
                    return null != i.w && (c = c || u <= 1 && ["w"] || u < i.w && ["ww", u]), (c = c || h <= 1 && ["M"] || h < i.M && ["MM", h] || d <= 1 && ["y"] || ["yy", d])[2] = e, c[3] = +t > 0, c[4] = n, ns.apply(null, c)
                }

                function rs(t) { return void 0 === t ? es : "function" == typeof t && (es = t, !0) }

                function ss(t, e) { return void 0 !== is[t] && (void 0 === e ? is[t] : (is[t] = e, "s" === t && (is.ss = e - 1), !0)) }

                function as(t, e) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var i, n, o = !1,
                        r = is;
                    return "object" == typeof t && (e = t, t = !1), "boolean" == typeof t && (o = t), "object" == typeof e && (r = Object.assign({}, is, e), null != e.s && null == e.ss && (r.ss = e.s - 1)), n = os(this, !o, r, i = this.localeData()), o && (n = i.pastFuture(+this, n)), i.postformat(n)
                }
                var ls = Math.abs;

                function hs(t) { return (t > 0) - (t < 0) || +t }

                function us() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t, e, i, n, o, r, s, a, l = ls(this._milliseconds) / 1e3,
                        h = ls(this._days),
                        u = ls(this._months),
                        d = this.asSeconds();
                    return d ? (t = ut(l / 60), e = ut(t / 60), l %= 60, t %= 60, i = ut(u / 12), u %= 12, n = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", o = d < 0 ? "-" : "", r = hs(this._months) !== hs(d) ? "-" : "", s = hs(this._days) !== hs(d) ? "-" : "", a = hs(this._milliseconds) !== hs(d) ? "-" : "", o + "P" + (i ? r + i + "Y" : "") + (u ? r + u + "M" : "") + (h ? s + h + "D" : "") + (e || t || l ? "T" : "") + (e ? a + e + "H" : "") + (t ? a + t + "M" : "") + (l ? a + n + "S" : "")) : "P0D"
                }
                var ds = an.prototype;
                return ds.isValid = rn, ds.abs = Dr, ds.add = Cr, ds.subtract = Tr, ds.as = Ar, ds.asMilliseconds = Nr, ds.asSeconds = Fr, ds.asMinutes = Rr, ds.asHours = jr, ds.asDays = Yr, ds.asWeeks = Hr, ds.asMonths = zr, ds.asQuarters = Br, ds.asYears = Gr, ds.valueOf = Ir, ds._bubble = Or, ds.clone = Wr, ds.get = Vr, ds.milliseconds = Xr, ds.seconds = qr, ds.minutes = $r, ds.hours = Zr, ds.days = Kr, ds.weeks = ts, ds.months = Jr, ds.years = Qr, ds.humanize = as, ds.toISOString = us, ds.toString = us, ds.toJSON = us, ds.locale = ao, ds.localeData = ho, ds.toIsoString = C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", us), ds.lang = lo, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), Nt("x", Et), Nt("X", It), Ht("X", (function(t, e, i) { i._d = new Date(1e3 * parseFloat(t)) })), Ht("x", (function(t, e, i) { i._d = new Date(dt(t)) })), //! moment.js
                    n.version = "2.29.4", r($i), n.fn = ur, n.min = Qi, n.max = tn, n.now = en, n.utc = m, n.unix = dr, n.months = yr, n.isDate = c, n.locale = mi, n.invalid = b, n.duration = On, n.isMoment = D, n.weekdays = _r, n.parseZone = cr, n.localeData = yi, n.isDuration = ln, n.monthsShort = br, n.weekdaysMin = kr, n.defineLocale = vi, n.updateLocale = gi, n.locales = bi, n.weekdaysShort = wr, n.normalizeUnits = ot, n.relativeTimeRounding = rs, n.relativeTimeThreshold = ss, n.calendarFormat = Bn, n.prototype = ur, n.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, n
            }()
        }(s)), s.exports
    }! function(t) {
        function e(t, e, i, n) { var o = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [t + " Tage", t + " Tagen"], w: ["eine Woche", "einer Woche"], M: ["ein Monat", "einem Monat"], MM: [t + " Monate", t + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [t + " Jahre", t + " Jahren"] }; return e ? o[i][0] : o[i][1] }
        t.defineLocale("de", { months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: e, mm: "%d Minuten", h: e, hh: "%d Stunden", d: e, dd: e, w: e, ww: "%d Wochen", M: e, MM: e, y: e, yy: e }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } })
    }(a()),
    function(t) {
        var e = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            i = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            o = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        t.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(t, n) { return t ? /-MMM-/.test(n) ? i[t.month()] : e[t.month()] : e }, monthsRegex: o, monthsShortRegex: o, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: n, longMonthsParse: n, shortMonthsParse: n, weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"), weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un dÃ­a", dd: "%d dÃ­as", w: "una semana", ww: "%d semanas", M: "un mes", MM: "%d meses", y: "un aÃ±o", yy: "%d aÃ±os" }, dayOfMonthOrdinalParse: /\d{1,2}Âº/, ordinal: "%dÂº", week: { dow: 1, doy: 4 }, invalidDate: "Fecha invÃ¡lida" })
    }(a()),
    function(t) {
        var e = /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?|janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
            i = [/^janv/i, /^fÃ©vr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^aoÃ»t/i, /^sept/i, /^oct/i, /^nov/i, /^dÃ©c/i];
        t.defineLocale("fr", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            monthsRegex: e,
            monthsShortRegex: e,
            monthsStrictRegex: /^(janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
            monthsShortStrictRegex: /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?)/i,
            monthsParse: i,
            longMonthsParse: i,
            shortMonthsParse: i,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: { sameDay: "[Aujourdâ€™hui Ã ] LT", nextDay: "[Demain Ã ] LT", nextWeek: "dddd [Ã ] LT", lastDay: "[Hier Ã ] LT", lastWeek: "dddd [dernier Ã ] LT", sameElse: "L" },
            relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", w: "une semaine", ww: "%d semaines", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "D":
                        return t + (1 === t ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return t + (1 === t ? "er" : "e");
                    case "w":
                    case "W":
                        return t + (1 === t ? "re" : "e")
                }
            },
            week: { dow: 1, doy: 4 }
        })
    }(a()),
    function(t) {
        t.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
            calendar: {
                sameDay: function() { return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                nextDay: function() { return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                nextWeek: function() { return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                lastDay: function() { return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" },
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
                        default:
                            return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", w: "una settimana", ww: "%d settimane", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
            dayOfMonthOrdinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: { dow: 1, doy: 4 }
        })
    }(a()),
    function(t) {
        t.defineLocale("ja", {
            eras: [{ since: "2019-05-01", offset: 1, name: "ä»¤å’Œ", narrow: "ã‹¿", abbr: "R" }, { since: "1989-01-08", until: "2019-04-30", offset: 1, name: "å¹³æˆ", narrow: "ã»", abbr: "H" }, { since: "1926-12-25", until: "1989-01-07", offset: 1, name: "æ˜­å’Œ", narrow: "ã¼", abbr: "S" }, { since: "1912-07-30", until: "1926-12-24", offset: 1, name: "å¤§æ­£", narrow: "ã½", abbr: "T" }, { since: "1873-01-01", until: "1912-07-29", offset: 6, name: "æ˜Žæ²»", narrow: "ã¾", abbr: "M" }, { since: "0001-01-01", until: "1873-12-31", offset: 1, name: "è¥¿æš¦", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "ç´€å…ƒå‰", narrow: "BC", abbr: "BC" }],
            eraYearOrdinalRegex: /(å…ƒ|\d+)å¹´/,
            eraYearOrdinalParse: function(t, e) { return "å…ƒ" === e[1] ? 1 : parseInt(e[1] || t, 10) },
            months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
            weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYYå¹´MæœˆDæ—¥", LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm", LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYYå¹´MæœˆDæ—¥", lll: "YYYYå¹´MæœˆDæ—¥ HH:mm", llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm" },
            meridiemParse: /åˆå‰|åˆå¾Œ/i,
            isPM: function(t) { return "åˆå¾Œ" === t },
            meridiem: function(t, e, i) { return t < 12 ? "åˆå‰" : "åˆå¾Œ" },
            calendar: { sameDay: "[ä»Šæ—¥] LT", nextDay: "[æ˜Žæ—¥] LT", nextWeek: function(t) { return t.week() !== this.week() ? "[æ¥é€±]dddd LT" : "dddd LT" }, lastDay: "[æ˜¨æ—¥] LT", lastWeek: function(t) { return this.week() !== t.week() ? "[å…ˆé€±]dddd LT" : "dddd LT" }, sameElse: "L" },
            dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
            ordinal: function(t, e) {
                switch (e) {
                    case "y":
                        return 1 === t ? "å…ƒå¹´" : t + "å¹´";
                    case "d":
                    case "D":
                    case "DDD":
                        return t + "æ—¥";
                    default:
                        return t
                }
            },
            relativeTime: { future: "%så¾Œ", past: "%så‰", s: "æ•°ç§’", ss: "%dç§’", m: "1åˆ†", mm: "%dåˆ†", h: "1æ™‚é–“", hh: "%dæ™‚é–“", d: "1æ—¥", dd: "%dæ—¥", M: "1ãƒ¶æœˆ", MM: "%dãƒ¶æœˆ", y: "1å¹´", yy: "%då¹´" }
        })
    }(a()),
    function(t) {
        var e = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            i = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        t.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(t, n) { return t ? /-MMM-/.test(n) ? i[t.month()] : e[t.month()] : e }, monthsRegex: o, monthsShortRegex: o, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: n, longMonthsParse: n, shortMonthsParse: n, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "Ã©Ã©n minuut", mm: "%d minuten", h: "Ã©Ã©n uur", hh: "%d uur", d: "Ã©Ã©n dag", dd: "%d dagen", w: "Ã©Ã©n week", ww: "%d weken", M: "Ã©Ã©n maand", MM: "%d maanden", y: "Ã©Ã©n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(t) { return t + (1 === t || 8 === t || t >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } })
    }(a()),
    function(t) {
        var e = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
            i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_"),
            n = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paÅº/i, /^lis/i, /^gru/i];

        function o(t) { return t % 10 < 5 && t % 10 > 1 && ~~(t / 10) % 10 != 1 }

        function r(t, e, i) {
            var n = t + " ";
            switch (i) {
                case "ss":
                    return n + (o(t) ? "sekundy" : "sekund");
                case "m":
                    return e ? "minuta" : "minutÄ™";
                case "mm":
                    return n + (o(t) ? "minuty" : "minut");
                case "h":
                    return e ? "godzina" : "godzinÄ™";
                case "hh":
                    return n + (o(t) ? "godziny" : "godzin");
                case "ww":
                    return n + (o(t) ? "tygodnie" : "tygodni");
                case "MM":
                    return n + (o(t) ? "miesiÄ…ce" : "miesiÄ™cy");
                case "yy":
                    return n + (o(t) ? "lata" : "lat")
            }
        }
        t.defineLocale("pl", {
            months: function(t, n) { return t ? /D MMMM/.test(n) ? i[t.month()] : e[t.month()] : e },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_Å›r_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
            calendar: {
                sameDay: "[DziÅ› o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielÄ™ o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W Å›rodÄ™ o] LT";
                        case 6:
                            return "[W sobotÄ™ o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                },
                lastDay: "[Wczoraj o] LT",
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                        case 3:
                            return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                        case 6:
                            return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                        default:
                            return "[W zeszÅ‚y] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: r, m: r, mm: r, h: r, hh: r, d: "1 dzieÅ„", dd: "%d dni", w: "tydzieÅ„", ww: r, M: "miesiÄ…c", MM: r, y: "rok", yy: r },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 }
        })
    }(a()),
    function(t) {
        function e(t, e, i) { var n, o; return "m" === i ? e ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : t + " " + (n = +t, o = { ss: e ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´", mm: e ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚", hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹", ww: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð½ÐµÐ´ÐµÐ»Ð¸_Ð½ÐµÐ´ÐµÐ»ÑŒ", MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²", yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚" }[i].split("_"), n % 10 == 1 && n % 100 != 11 ? o[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? o[1] : o[2]) }
        var i = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i];
        t.defineLocale("ru", {
            months: { format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"), standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_") },
            monthsShort: { format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"), standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_") },
            weekdays: { standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"), format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"), isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?] ?dddd/ },
            weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            monthsParse: i,
            longMonthsParse: i,
            shortMonthsParse: i,
            monthsRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsShortRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
            monthsStrictRegex: /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
            monthsShortStrictRegex: /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
            longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ð³.", LLL: "D MMMM YYYY Ð³., H:mm", LLLL: "dddd, D MMMM YYYY Ð³., H:mm" },
            calendar: {
                sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
                nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
                nextWeek: function(t) {
                    if (t.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                lastWeek: function(t) {
                    if (t.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd, [Ð²] LT" : "[Ð’] dddd, [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "Ñ‡ÐµÑ€ÐµÐ· %s", past: "%s Ð½Ð°Ð·Ð°Ð´", s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´", ss: e, m: e, mm: e, h: "Ñ‡Ð°Ñ", hh: e, d: "Ð´ÐµÐ½ÑŒ", dd: e, w: "Ð½ÐµÐ´ÐµÐ»Ñ", ww: e, M: "Ð¼ÐµÑÑÑ†", MM: e, y: "Ð³Ð¾Ð´", yy: e },
            meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
            isPM: function(t) { return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(t) },
            meridiem: function(t, e, i) { return t < 4 ? "Ð½Ð¾Ñ‡Ð¸" : t < 12 ? "ÑƒÑ‚Ñ€Ð°" : t < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°" },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "M":
                    case "d":
                    case "DDD":
                        return t + "-Ð¹";
                    case "D":
                        return t + "-Ð³Ð¾";
                    case "w":
                    case "W":
                        return t + "-Ñ";
                    default:
                        return t
                }
            },
            week: { dow: 1, doy: 4 }
        })
    }(a()),
    function(t) {
        function e(t, e, i) { var n, o; return "m" === i ? e ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === i ? e ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : t + " " + (n = +t, o = { ss: e ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´" : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ð¸_ÑÐµÐºÑƒÐ½Ð´", mm: e ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½", hh: e ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½", dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²", MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²", yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²" }[i].split("_"), n % 10 == 1 && n % 100 != 11 ? o[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? o[1] : o[2]) }

        function i(t) { return function() { return t + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT" } }
        t.defineLocale("uk", {
            months: { format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"), standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_") },
            monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
            weekdays: function(t, e) { var i = { nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"), accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"), genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_") }; return !0 === t ? i.nominative.slice(1, 7).concat(i.nominative.slice(0, 1)) : t ? i[/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(e) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(e) ? "genitive" : "nominative"][t.day()] : i.nominative },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY Ñ€.", LLL: "D MMMM YYYY Ñ€., HH:mm", LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm" },
            calendar: {
                sameDay: i("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                nextDay: i("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                lastDay: i("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                nextWeek: i("[Ð£] dddd ["),
                lastWeek: function() {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return i("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return i("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: { future: "Ð·Ð° %s", past: "%s Ñ‚Ð¾Ð¼Ñƒ", s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´", ss: e, m: e, mm: e, h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ", hh: e, d: "Ð´ÐµÐ½ÑŒ", dd: e, M: "Ð¼Ñ–ÑÑÑ†ÑŒ", MM: e, y: "Ñ€Ñ–Ðº", yy: e },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
            isPM: function(t) { return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(t) },
            meridiem: function(t, e, i) { return t < 4 ? "Ð½Ð¾Ñ‡Ñ–" : t < 12 ? "Ñ€Ð°Ð½ÐºÑƒ" : t < 17 ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°" },
            dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
            ordinal: function(t, e) {
                switch (e) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return t + "-Ð¹";
                    case "D":
                        return t + "-Ð³Ð¾";
                    default:
                        return t
                }
            },
            week: { dow: 1, doy: 7 }
        })
    }(a());
    var l = { exports: {} },
        h = function(t) { try { return !!t() } catch (t) { return !0 } },
        u = !h((function() { var t = function() {}.bind(); return "function" != typeof t || t.hasOwnProperty("prototype") })),
        d = u,
        c = Function.prototype,
        p = c.bind,
        f = c.call,
        m = d && p.bind(f, f),
        v = d ? function(t) { return t && m(t) } : function(t) { return t && function() { return f.apply(t, arguments) } },
        g = Math.ceil,
        y = Math.floor,
        b = function(t) { var e = +t; return e != e || 0 === e ? 0 : (e > 0 ? y : g)(e) },
        _ = function(t) { return t && t.Math == Math && t },
        w = _("object" == typeof globalThis && globalThis) || _("object" == typeof window && window) || _("object" == typeof self && self) || _("object" == typeof e && e) || function() { return this }() || Function("return this")(),
        k = { exports: {} },
        x = w,
        D = Object.defineProperty,
        S = function(t, e) { try { D(x, t, { value: e, configurable: !0, writable: !0 }) } catch (i) { x[t] = e } return e },
        C = "__core-js_shared__",
        T = w[C] || S(C, {}),
        M = T;
    (k.exports = function(t, e) { return M[t] || (M[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.21.1", mode: "pure", copyright: "Â© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    var O, E, P = w.TypeError,
        A = function(t) { if (null == t) throw P("Can't call method on " + t); return t },
        I = A,
        L = w.Object,
        N = function(t) { return L(I(t)) },
        F = N,
        R = v({}.hasOwnProperty),
        j = Object.hasOwn || function(t, e) { return R(F(t), e) },
        Y = v,
        H = 0,
        z = Math.random(),
        B = Y(1..toString),
        G = function(t) { return "Symbol(" + (void 0 === t ? "" : t) + ")_" + B(++H + z, 36) },
        W = {},
        V = function(t) { return "function" == typeof t },
        U = W,
        X = w,
        q = V,
        $ = function(t) { return q(t) ? t : void 0 },
        Z = function(t, e) { return arguments.length < 2 ? $(U[t]) || $(X[t]) : U[t] && U[t][e] || X[t] && X[t][e] },
        K = Z("navigator", "userAgent") || "",
        J = w,
        Q = K,
        tt = J.process,
        et = J.Deno,
        it = tt && tt.versions || et && et.version,
        nt = it && it.v8;
    nt && (E = (O = nt.split("."))[0] > 0 && O[0] < 4 ? 1 : +(O[0] + O[1])), !E && Q && (!(O = Q.match(/Edge\/(\d+)/)) || O[1] >= 74) && (O = Q.match(/Chrome\/(\d+)/)) && (E = +O[1]);
    var ot = E,
        rt = ot,
        st = h,
        at = !!Object.getOwnPropertySymbols && !st((function() { var t = Symbol(); return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && rt && rt < 41 })),
        lt = at && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        ht = w,
        ut = k.exports,
        dt = j,
        ct = G,
        pt = at,
        ft = lt,
        mt = ut("wks"),
        vt = ht.Symbol,
        gt = vt && vt.for,
        yt = ft ? vt : vt && vt.withoutSetter || ct,
        bt = function(t) {
            if (!dt(mt, t) || !pt && "string" != typeof mt[t]) {
                var e = "Symbol." + t;
                pt && dt(vt, t) ? mt[t] = vt[t] : mt[t] = ft && gt ? gt(e) : yt(e)
            }
            return mt[t]
        },
        _t = {};
    _t[bt("toStringTag")] = "z";
    var wt = "[object z]" === String(_t),
        kt = v,
        xt = kt({}.toString),
        Dt = kt("".slice),
        St = function(t) { return Dt(xt(t), 8, -1) },
        Ct = w,
        Tt = wt,
        Mt = V,
        Ot = St,
        Et = bt("toStringTag"),
        Pt = Ct.Object,
        At = "Arguments" == Ot(function() { return arguments }()),
        It = Tt ? Ot : function(t) { var e, i, n; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) { try { return t[e] } catch (t) {} }(e = Pt(t), Et)) ? i : At ? Ot(e) : "Object" == (n = Ot(e)) && Mt(e.callee) ? "Arguments" : n },
        Lt = It,
        Nt = w.String,
        Ft = function(t) { if ("Symbol" === Lt(t)) throw TypeError("Cannot convert a Symbol value to a string"); return Nt(t) },
        Rt = v,
        jt = b,
        Yt = Ft,
        Ht = A,
        zt = Rt("".charAt),
        Bt = Rt("".charCodeAt),
        Gt = Rt("".slice),
        Wt = function(t) {
            return function(e, i) {
                var n, o, r = Yt(Ht(e)),
                    s = jt(i),
                    a = r.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (n = Bt(r, s)) < 55296 || n > 56319 || s + 1 === a || (o = Bt(r, s + 1)) < 56320 || o > 57343 ? t ? zt(r, s) : n : t ? Gt(r, s, s + 2) : o - 56320 + (n - 55296 << 10) + 65536
            }
        },
        Vt = { codeAt: Wt(!1), charAt: Wt(!0) },
        Ut = V,
        Xt = T,
        qt = v(Function.toString);
    Ut(Xt.inspectSource) || (Xt.inspectSource = function(t) { return qt(t) });
    var $t = Xt.inspectSource,
        Zt = V,
        Kt = $t,
        Jt = w.WeakMap,
        Qt = Zt(Jt) && /native code/.test(Kt(Jt)),
        te = V,
        ee = function(t) { return "object" == typeof t ? null !== t : te(t) },
        ie = !h((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })),
        ne = {},
        oe = ee,
        re = w.document,
        se = oe(re) && oe(re.createElement),
        ae = function(t) { return se ? re.createElement(t) : {} },
        le = ae,
        he = !ie && !h((function() { return 7 != Object.defineProperty(le("div"), "a", { get: function() { return 7 } }).a })),
        ue = ie && h((function() { return 42 != Object.defineProperty((function() {}), "prototype", { value: 42, writable: !1 }).prototype })),
        de = w,
        ce = ee,
        pe = de.String,
        fe = de.TypeError,
        me = function(t) { if (ce(t)) return t; throw fe(pe(t) + " is not an object") },
        ve = u,
        ge = Function.prototype.call,
        ye = ve ? ge.bind(ge) : function() { return ge.apply(ge, arguments) },
        be = v({}.isPrototypeOf),
        _e = Z,
        we = V,
        ke = be,
        xe = lt,
        De = w.Object,
        Se = xe ? function(t) { return "symbol" == typeof t } : function(t) { var e = _e("Symbol"); return we(e) && ke(e.prototype, De(t)) },
        Ce = w.String,
        Te = function(t) { try { return Ce(t) } catch (t) { return "Object" } },
        Me = V,
        Oe = Te,
        Ee = w.TypeError,
        Pe = function(t) { if (Me(t)) return t; throw Ee(Oe(t) + " is not a function") },
        Ae = Pe,
        Ie = function(t, e) { var i = t[e]; return null == i ? void 0 : Ae(i) },
        Le = ye,
        Ne = V,
        Fe = ee,
        Re = w.TypeError,
        je = ye,
        Ye = ee,
        He = Se,
        ze = Ie,
        Be = function(t, e) { var i, n; if ("string" === e && Ne(i = t.toString) && !Fe(n = Le(i, t))) return n; if (Ne(i = t.valueOf) && !Fe(n = Le(i, t))) return n; if ("string" !== e && Ne(i = t.toString) && !Fe(n = Le(i, t))) return n; throw Re("Can't convert object to primitive value") },
        Ge = bt,
        We = w.TypeError,
        Ve = Ge("toPrimitive"),
        Ue = function(t, e) { if (!Ye(t) || He(t)) return t; var i, n = ze(t, Ve); if (n) { if (void 0 === e && (e = "default"), i = je(n, t, e), !Ye(i) || He(i)) return i; throw We("Can't convert object to primitive value") } return void 0 === e && (e = "number"), Be(t, e) },
        Xe = Se,
        qe = function(t) { var e = Ue(t, "string"); return Xe(e) ? e : e + "" },
        $e = ie,
        Ze = he,
        Ke = ue,
        Je = me,
        Qe = qe,
        ti = w.TypeError,
        ei = Object.defineProperty,
        ii = Object.getOwnPropertyDescriptor,
        ni = "enumerable",
        oi = "configurable",
        ri = "writable";
    ne.f = $e ? Ke ? function(t, e, i) {
        if (Je(t), e = Qe(e), Je(i), "function" == typeof t && "prototype" === e && "value" in i && ri in i && !i.writable) {
            var n = ii(t, e);
            n && n.writable && (t[e] = i.value, i = { configurable: oi in i ? i.configurable : n.configurable, enumerable: ni in i ? i.enumerable : n.enumerable, writable: !1 })
        }
        return ei(t, e, i)
    } : ei : function(t, e, i) {
        if (Je(t), e = Qe(e), Je(i), Ze) try { return ei(t, e, i) } catch (t) {}
        if ("get" in i || "set" in i) throw ti("Accessors not supported");
        return "value" in i && (t[e] = i.value), t
    };
    var si, ai, li, hi = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } },
        ui = ne,
        di = hi,
        ci = ie ? function(t, e, i) { return ui.f(t, e, di(1, i)) } : function(t, e, i) { return t[e] = i, t },
        pi = k.exports,
        fi = G,
        mi = pi("keys"),
        vi = function(t) { return mi[t] || (mi[t] = fi(t)) },
        gi = {},
        yi = Qt,
        bi = w,
        _i = v,
        wi = ee,
        ki = ci,
        xi = j,
        Di = T,
        Si = vi,
        Ci = gi,
        Ti = "Object already initialized",
        Mi = bi.TypeError,
        Oi = bi.WeakMap;
    if (yi || Di.state) {
        var Ei = Di.state || (Di.state = new Oi),
            Pi = _i(Ei.get),
            Ai = _i(Ei.has),
            Ii = _i(Ei.set);
        si = function(t, e) { if (Ai(Ei, t)) throw new Mi(Ti); return e.facade = t, Ii(Ei, t, e), e }, ai = function(t) { return Pi(Ei, t) || {} }, li = function(t) { return Ai(Ei, t) }
    } else {
        var Li = Si("state");
        Ci[Li] = !0, si = function(t, e) { if (xi(t, Li)) throw new Mi(Ti); return e.facade = t, ki(t, Li, e), e }, ai = function(t) { return xi(t, Li) ? t[Li] : {} }, li = function(t) { return xi(t, Li) }
    }
    var Ni = { set: si, get: ai, has: li, enforce: function(t) { return li(t) ? ai(t) : si(t, {}) }, getterFor: function(t) { return function(e) { var i; if (!wi(e) || (i = ai(e)).type !== t) throw Mi("Incompatible receiver, " + t + " required"); return i } } },
        Fi = u,
        Ri = Function.prototype,
        ji = Ri.apply,
        Yi = Ri.call,
        Hi = "object" == typeof Reflect && Reflect.apply || (Fi ? Yi.bind(ji) : function() { return Yi.apply(ji, arguments) }),
        zi = {},
        Bi = {},
        Gi = {}.propertyIsEnumerable,
        Wi = Object.getOwnPropertyDescriptor,
        Vi = Wi && !Gi.call({ 1: 2 }, 1);
    Bi.f = Vi ? function(t) { var e = Wi(this, t); return !!e && e.enumerable } : Gi;
    var Ui = v,
        Xi = h,
        qi = St,
        $i = w.Object,
        Zi = Ui("".split),
        Ki = Xi((function() { return !$i("z").propertyIsEnumerable(0) })) ? function(t) { return "String" == qi(t) ? Zi(t, "") : $i(t) } : $i,
        Ji = Ki,
        Qi = A,
        tn = function(t) { return Ji(Qi(t)) },
        en = ie,
        nn = ye,
        on = Bi,
        rn = hi,
        sn = tn,
        an = qe,
        ln = j,
        hn = he,
        un = Object.getOwnPropertyDescriptor;
    zi.f = en ? un : function(t, e) {
        if (t = sn(t), e = an(e), hn) try { return un(t, e) } catch (t) {}
        if (ln(t, e)) return rn(!nn(on.f, t, e), t[e])
    };
    var dn = h,
        cn = V,
        pn = /#|\.prototype\./,
        fn = function(t, e) { var i = vn[mn(t)]; return i == yn || i != gn && (cn(e) ? dn(e) : !!e) },
        mn = fn.normalize = function(t) { return String(t).replace(pn, ".").toLowerCase() },
        vn = fn.data = {},
        gn = fn.NATIVE = "N",
        yn = fn.POLYFILL = "P",
        bn = fn,
        _n = Pe,
        wn = u,
        kn = v(v.bind),
        xn = function(t, e) { return _n(t), void 0 === e ? t : wn ? kn(t, e) : function() { return t.apply(e, arguments) } },
        Dn = w,
        Sn = Hi,
        Cn = v,
        Tn = V,
        Mn = zi.f,
        On = bn,
        En = W,
        Pn = xn,
        An = ci,
        In = j,
        Ln = function(t) {
            var e = function(i, n, o) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(i);
                        case 2:
                            return new t(i, n)
                    }
                    return new t(i, n, o)
                }
                return Sn(t, this, arguments)
            };
            return e.prototype = t.prototype, e
        },
        Nn = function(t, e) {
            var i, n, o, r, s, a, l, h, u = t.target,
                d = t.global,
                c = t.stat,
                p = t.proto,
                f = d ? Dn : c ? Dn[u] : (Dn[u] || {}).prototype,
                m = d ? En : En[u] || An(En, u, {})[u],
                v = m.prototype;
            for (o in e) i = !On(d ? o : u + (c ? "." : "#") + o, t.forced) && f && In(f, o), s = m[o], i && (a = t.noTargetGet ? (h = Mn(f, o)) && h.value : f[o]), r = i && a ? a : e[o], i && typeof s == typeof r || (l = t.bind && i ? Pn(r, Dn) : t.wrap && i ? Ln(r) : p && Tn(r) ? Cn(r) : r, (t.sham || r && r.sham || s && s.sham) && An(l, "sham", !0), An(m, o, l), p && (In(En, n = u + "Prototype") || An(En, n, {}), An(En[n], o, r), t.real && v && !v[o] && An(v, o, r)))
        },
        Fn = ie,
        Rn = j,
        jn = Function.prototype,
        Yn = Fn && Object.getOwnPropertyDescriptor,
        Hn = Rn(jn, "name"),
        zn = { EXISTS: Hn, PROPER: Hn && "something" === function() {}.name, CONFIGURABLE: Hn && (!Fn || Fn && Yn(jn, "name").configurable) },
        Bn = {},
        Gn = b,
        Wn = Math.max,
        Vn = Math.min,
        Un = function(t, e) { var i = Gn(t); return i < 0 ? Wn(i + e, 0) : Vn(i, e) },
        Xn = b,
        qn = Math.min,
        $n = function(t) { return t > 0 ? qn(Xn(t), 9007199254740991) : 0 },
        Zn = function(t) { return $n(t.length) },
        Kn = tn,
        Jn = Un,
        Qn = Zn,
        to = function(t) {
            return function(e, i, n) {
                var o, r = Kn(e),
                    s = Qn(r),
                    a = Jn(n, s);
                if (t && i != i) {
                    for (; s > a;)
                        if ((o = r[a++]) != o) return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in r) && r[a] === i) return t || a || 0; return !t && -1
            }
        },
        eo = { includes: to(!0), indexOf: to(!1) },
        io = j,
        no = tn,
        oo = eo.indexOf,
        ro = gi,
        so = v([].push),
        ao = function(t, e) {
            var i, n = no(t),
                o = 0,
                r = [];
            for (i in n) !io(ro, i) && io(n, i) && so(r, i);
            for (; e.length > o;) io(n, i = e[o++]) && (~oo(r, i) || so(r, i));
            return r
        },
        lo = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ho = ao,
        uo = lo,
        co = Object.keys || function(t) { return ho(t, uo) },
        po = ie,
        fo = ue,
        mo = ne,
        vo = me,
        go = tn,
        yo = co;
    Bn.f = po && !fo ? Object.defineProperties : function(t, e) { vo(t); for (var i, n = go(e), o = yo(e), r = o.length, s = 0; r > s;) mo.f(t, i = o[s++], n[i]); return t };
    var bo, _o = Z("document", "documentElement"),
        wo = me,
        ko = Bn,
        xo = lo,
        Do = gi,
        So = _o,
        Co = ae,
        To = vi("IE_PROTO"),
        Mo = function() {},
        Oo = function(t) { return "<script>" + t + "</" + "script>" },
        Eo = function(t) { t.write(Oo("")), t.close(); var e = t.parentWindow.Object; return t = null, e },
        Po = function() {
            try { bo = new ActiveXObject("htmlfile") } catch (t) {}
            var t, e;
            Po = "undefined" != typeof document ? document.domain && bo ? Eo(bo) : ((e = Co("iframe")).style.display = "none", So.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Oo("document.F=Object")), t.close(), t.F) : Eo(bo);
            for (var i = xo.length; i--;) delete Po.prototype[xo[i]];
            return Po()
        };
    Do[To] = !0;
    var Ao, Io, Lo, No = Object.create || function(t, e) { var i; return null !== t ? (Mo.prototype = wo(t), i = new Mo, Mo.prototype = null, i[To] = t) : i = Po(), void 0 === e ? i : ko.f(i, e) },
        Fo = !h((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        Ro = w,
        jo = j,
        Yo = V,
        Ho = N,
        zo = Fo,
        Bo = vi("IE_PROTO"),
        Go = Ro.Object,
        Wo = Go.prototype,
        Vo = zo ? Go.getPrototypeOf : function(t) { var e = Ho(t); if (jo(e, Bo)) return e[Bo]; var i = e.constructor; return Yo(i) && e instanceof i ? i.prototype : e instanceof Go ? Wo : null },
        Uo = ci,
        Xo = function(t, e, i, n) { n && n.enumerable ? t[e] = i : Uo(t, e, i) },
        qo = h,
        $o = V,
        Zo = No,
        Ko = Vo,
        Jo = Xo,
        Qo = bt("iterator"),
        tr = !1;
    [].keys && ("next" in (Lo = [].keys()) ? (Io = Ko(Ko(Lo))) !== Object.prototype && (Ao = Io) : tr = !0);
    var er = null == Ao || qo((function() { var t = {}; return Ao[Qo].call(t) !== t }));
    $o((Ao = er ? {} : Zo(Ao))[Qo]) || Jo(Ao, Qo, (function() { return this }));
    var ir = { IteratorPrototype: Ao, BUGGY_SAFARI_ITERATORS: tr },
        nr = It,
        or = wt ? {}.toString : function() { return "[object " + nr(this) + "]" },
        rr = wt,
        sr = ne.f,
        ar = ci,
        lr = j,
        hr = or,
        ur = bt("toStringTag"),
        dr = function(t, e, i, n) {
            if (t) {
                var o = i ? t : t.prototype;
                lr(o, ur) || sr(o, ur, { configurable: !0, value: e }), n && !rr && ar(o, "toString", hr)
            }
        },
        cr = {},
        pr = ir.IteratorPrototype,
        fr = No,
        mr = hi,
        vr = dr,
        gr = cr,
        yr = function() { return this },
        br = w,
        _r = V,
        wr = br.String,
        kr = br.TypeError,
        xr = v,
        Dr = me,
        Sr = function(t) { if ("object" == typeof t || _r(t)) return t; throw kr("Can't set " + wr(t) + " as a prototype") },
        Cr = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                i = {};
            try {
                (t = xr(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(i, []), e = i instanceof Array
            } catch (t) {}
            return function(i, n) { return Dr(i), Sr(n), e ? t(i, n) : i.__proto__ = n, i }
        }() : void 0),
        Tr = Nn,
        Mr = ye,
        Or = function(t, e, i, n) { var o = e + " Iterator"; return t.prototype = fr(pr, { next: mr(+!n, i) }), vr(t, o, !1, !0), gr[o] = yr, t },
        Er = Vo,
        Pr = dr,
        Ar = Xo,
        Ir = cr,
        Lr = zn.PROPER,
        Nr = ir.BUGGY_SAFARI_ITERATORS,
        Fr = bt("iterator"),
        Rr = "keys",
        jr = "values",
        Yr = "entries",
        Hr = function() { return this },
        zr = function(t, e, i, n, o, r, s) {
            Or(i, e, n);
            var a, l, h, u = function(t) {
                    if (t === o && m) return m;
                    if (!Nr && t in p) return p[t];
                    switch (t) {
                        case Rr:
                        case jr:
                        case Yr:
                            return function() { return new i(this, t) }
                    }
                    return function() { return new i(this) }
                },
                d = e + " Iterator",
                c = !1,
                p = t.prototype,
                f = p[Fr] || p["@@iterator"] || o && p[o],
                m = !Nr && f || u(o),
                v = "Array" == e && p.entries || f;
            if (v && (a = Er(v.call(new t))) !== Object.prototype && a.next && (Pr(a, d, !0, !0), Ir[d] = Hr), Lr && o == jr && f && f.name !== jr && (c = !0, m = function() { return Mr(f, this) }), o)
                if (l = { values: u(jr), keys: r ? m : u(Rr), entries: u(Yr) }, s)
                    for (h in l)(Nr || c || !(h in p)) && Ar(p, h, l[h]);
                else Tr({ target: e, proto: !0, forced: Nr || c }, l);
            return s && p[Fr] !== m && Ar(p, Fr, m, { name: o }), Ir[e] = m, l
        },
        Br = Vt.charAt,
        Gr = Ft,
        Wr = Ni,
        Vr = zr,
        Ur = "String Iterator",
        Xr = Wr.set,
        qr = Wr.getterFor(Ur);
    Vr(String, "String", (function(t) { Xr(this, { type: Ur, string: Gr(t), index: 0 }) }), (function() {
        var t, e = qr(this),
            i = e.string,
            n = e.index;
        return n >= i.length ? { value: void 0, done: !0 } : (t = Br(i, n), e.index += t.length, { value: t, done: !1 })
    }));
    var $r = ye,
        Zr = me,
        Kr = Ie,
        Jr = function(t, e, i) {
            var n, o;
            Zr(t);
            try {
                if (!(n = Kr(t, "return"))) { if ("throw" === e) throw i; return i }
                n = $r(n, t)
            } catch (t) { o = !0, n = t }
            if ("throw" === e) throw i;
            if (o) throw n;
            return Zr(n), i
        },
        Qr = me,
        ts = Jr,
        es = cr,
        is = bt("iterator"),
        ns = Array.prototype,
        os = function(t) { return void 0 !== t && (es.Array === t || ns[is] === t) },
        rs = v,
        ss = h,
        as = V,
        ls = It,
        hs = $t,
        us = function() {},
        ds = [],
        cs = Z("Reflect", "construct"),
        ps = /^\s*(?:class|function)\b/,
        fs = rs(ps.exec),
        ms = !ps.exec(us),
        vs = function(t) { if (!as(t)) return !1; try { return cs(us, ds, t), !0 } catch (t) { return !1 } },
        gs = function(t) {
            if (!as(t)) return !1;
            switch (ls(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try { return ms || !!fs(ps, hs(t)) } catch (t) { return !0 }
        };
    gs.sham = !0;
    var ys = !cs || ss((function() { var t; return vs(vs.call) || !vs(Object) || !vs((function() { t = !0 })) || t })) ? gs : vs,
        bs = qe,
        _s = ne,
        ws = hi,
        ks = function(t, e, i) {
            var n = bs(e);
            n in t ? _s.f(t, n, ws(0, i)) : t[n] = i
        },
        xs = It,
        Ds = Ie,
        Ss = cr,
        Cs = bt("iterator"),
        Ts = function(t) { if (null != t) return Ds(t, Cs) || Ds(t, "@@iterator") || Ss[xs(t)] },
        Ms = ye,
        Os = Pe,
        Es = me,
        Ps = Te,
        As = Ts,
        Is = w.TypeError,
        Ls = function(t, e) { var i = arguments.length < 2 ? As(t) : e; if (Os(i)) return Es(Ms(i, t)); throw Is(Ps(t) + " is not iterable") },
        Ns = xn,
        Fs = ye,
        Rs = N,
        js = function(t, e, i, n) { try { return n ? e(Qr(i)[0], i[1]) : e(i) } catch (e) { ts(t, "throw", e) } },
        Ys = os,
        Hs = ys,
        zs = Zn,
        Bs = ks,
        Gs = Ls,
        Ws = Ts,
        Vs = w.Array,
        Us = bt("iterator"),
        Xs = !1;
    try {
        var qs = 0,
            $s = { next: function() { return { done: !!qs++ } }, return: function() { Xs = !0 } };
        $s[Us] = function() { return this }, Array.from($s, (function() { throw 2 }))
    } catch (t) {}
    var Zs = function(t, e) {
            if (!e && !Xs) return !1;
            var i = !1;
            try {
                var n = {};
                n[Us] = function() { return { next: function() { return { done: i = !0 } } } }, t(n)
            } catch (t) {}
            return i
        },
        Ks = function(t) {
            var e = Rs(t),
                i = Hs(this),
                n = arguments.length,
                o = n > 1 ? arguments[1] : void 0,
                r = void 0 !== o;
            r && (o = Ns(o, n > 2 ? arguments[2] : void 0));
            var s, a, l, h, u, d, c = Ws(e),
                p = 0;
            if (!c || this == Vs && Ys(c))
                for (s = zs(e), a = i ? new this(s) : Vs(s); s > p; p++) d = r ? o(e[p], p) : e[p], Bs(a, p, d);
            else
                for (u = (h = Gs(e, c)).next, a = i ? new this : []; !(l = Fs(u, h)).done; p++) d = r ? js(h, o, [l.value, p], !0) : l.value, Bs(a, p, d);
            return a.length = p, a
        };
    Nn({ target: "Array", stat: !0, forced: !Zs((function(t) { Array.from(t) })) }, { from: Ks });
    var Js = W.Array.from;
    ! function(t) { t.exports = Js }(l);
    var Qs = n(l.exports),
        ta = { exports: {} },
        ea = tn,
        ia = cr,
        na = Ni;
    ne.f;
    var oa = zr,
        ra = "Array Iterator",
        sa = na.set,
        aa = na.getterFor(ra);
    oa(Array, "Array", (function(t, e) { sa(this, { type: ra, target: ea(t), index: 0, kind: e }) }), (function() {
        var t = aa(this),
            e = t.target,
            i = t.kind,
            n = t.index++;
        return !e || n >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == i ? { value: n, done: !1 } : "values" == i ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 }
    }), "values"), ia.Arguments = ia.Array;
    var la = Ts,
        ha = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 },
        ua = w,
        da = It,
        ca = ci,
        pa = cr,
        fa = bt("toStringTag");
    for (var ma in ha) {
        var va = ua[ma],
            ga = va && va.prototype;
        ga && da(ga) !== fa && ca(ga, fa, ma), pa[ma] = pa.Array
    }
    var ya = la;
    ! function(t) { t.exports = ya }(ta);
    var ba = n(ta.exports),
        _a = { exports: {} },
        wa = St,
        ka = Array.isArray || function(t) { return "Array" == wa(t) },
        xa = {},
        Da = ao,
        Sa = lo.concat("length", "prototype");
    xa.f = Object.getOwnPropertyNames || function(t) { return Da(t, Sa) };
    var Ca = {},
        Ta = Un,
        Ma = Zn,
        Oa = ks,
        Ea = w.Array,
        Pa = Math.max,
        Aa = function(t, e, i) { for (var n = Ma(t), o = Ta(e, n), r = Ta(void 0 === i ? n : i, n), s = Ea(Pa(r - o, 0)), a = 0; o < r; o++, a++) Oa(s, a, t[o]); return s.length = a, s },
        Ia = St,
        La = tn,
        Na = xa.f,
        Fa = Aa,
        Ra = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    Ca.f = function(t) { return Ra && "Window" == Ia(t) ? function(t) { try { return Na(t) } catch (t) { return Fa(Ra) } }(t) : Na(La(t)) };
    var ja = {};
    ja.f = Object.getOwnPropertySymbols;
    var Ya = v([].slice),
        Ha = {},
        za = bt;
    Ha.f = za;
    var Ba = W,
        Ga = j,
        Wa = Ha,
        Va = ne.f,
        Ua = function(t) {
            var e = Ba.Symbol || (Ba.Symbol = {});
            Ga(e, t) || Va(e, t, { value: Wa.f(t) })
        },
        Xa = w,
        qa = ka,
        $a = ys,
        Za = ee,
        Ka = bt("species"),
        Ja = Xa.Array,
        Qa = function(t) { var e; return qa(t) && (e = t.constructor, ($a(e) && (e === Ja || qa(e.prototype)) || Za(e) && null === (e = e[Ka])) && (e = void 0)), void 0 === e ? Ja : e },
        tl = function(t, e) { return new(Qa(t))(0 === e ? 0 : e) },
        el = xn,
        il = Ki,
        nl = N,
        ol = Zn,
        rl = tl,
        sl = v([].push),
        al = function(t) {
            var e = 1 == t,
                i = 2 == t,
                n = 3 == t,
                o = 4 == t,
                r = 6 == t,
                s = 7 == t,
                a = 5 == t || r;
            return function(l, h, u, d) {
                for (var c, p, f = nl(l), m = il(f), v = el(h, u), g = ol(m), y = 0, b = d || rl, _ = e ? b(l, g) : i || s ? b(l, 0) : void 0; g > y; y++)
                    if ((a || y in m) && (p = v(c = m[y], y, f), t))
                        if (e) _[y] = p;
                        else if (p) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return c;
                    case 6:
                        return y;
                    case 2:
                        sl(_, c)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        sl(_, c)
                }
                return r ? -1 : n || o ? o : _
            }
        },
        ll = { forEach: al(0), map: al(1), filter: al(2), some: al(3), every: al(4), find: al(5), findIndex: al(6), filterReject: al(7) },
        hl = Nn,
        ul = w,
        dl = Z,
        cl = Hi,
        pl = ye,
        fl = v,
        ml = ie,
        vl = at,
        gl = h,
        yl = j,
        bl = ka,
        _l = V,
        wl = ee,
        kl = be,
        xl = Se,
        Dl = me,
        Sl = N,
        Cl = tn,
        Tl = qe,
        Ml = Ft,
        Ol = hi,
        El = No,
        Pl = co,
        Al = xa,
        Il = Ca,
        Ll = ja,
        Nl = zi,
        Fl = ne,
        Rl = Bn,
        jl = Bi,
        Yl = Ya,
        Hl = Xo,
        zl = k.exports,
        Bl = gi,
        Gl = G,
        Wl = bt,
        Vl = Ha,
        Ul = Ua,
        Xl = dr,
        ql = Ni,
        $l = ll.forEach,
        Zl = vi("hidden"),
        Kl = "Symbol",
        Jl = Wl("toPrimitive"),
        Ql = ql.set,
        th = ql.getterFor(Kl),
        eh = Object.prototype,
        ih = ul.Symbol,
        nh = ih && ih.prototype,
        oh = ul.TypeError,
        rh = ul.QObject,
        sh = dl("JSON", "stringify"),
        ah = Nl.f,
        lh = Fl.f,
        hh = Il.f,
        uh = jl.f,
        dh = fl([].push),
        ch = zl("symbols"),
        ph = zl("op-symbols"),
        fh = zl("string-to-symbol-registry"),
        mh = zl("symbol-to-string-registry"),
        vh = zl("wks"),
        gh = !rh || !rh.prototype || !rh.prototype.findChild,
        yh = ml && gl((function() { return 7 != El(lh({}, "a", { get: function() { return lh(this, "a", { value: 7 }).a } })).a })) ? function(t, e, i) {
            var n = ah(eh, e);
            n && delete eh[e], lh(t, e, i), n && t !== eh && lh(eh, e, n)
        } : lh,
        bh = function(t, e) { var i = ch[t] = El(nh); return Ql(i, { type: Kl, tag: t, description: e }), ml || (i.description = e), i },
        _h = function(t, e, i) { t === eh && _h(ph, e, i), Dl(t); var n = Tl(e); return Dl(i), yl(ch, n) ? (i.enumerable ? (yl(t, Zl) && t[Zl][n] && (t[Zl][n] = !1), i = El(i, { enumerable: Ol(0, !1) })) : (yl(t, Zl) || lh(t, Zl, Ol(1, {})), t[Zl][n] = !0), yh(t, n, i)) : lh(t, n, i) },
        wh = function(t, e) {
            Dl(t);
            var i = Cl(e),
                n = Pl(i).concat(Sh(i));
            return $l(n, (function(e) { ml && !pl(kh, i, e) || _h(t, e, i[e]) })), t
        },
        kh = function(t) {
            var e = Tl(t),
                i = pl(uh, this, e);
            return !(this === eh && yl(ch, e) && !yl(ph, e)) && (!(i || !yl(this, e) || !yl(ch, e) || yl(this, Zl) && this[Zl][e]) || i)
        },
        xh = function(t, e) {
            var i = Cl(t),
                n = Tl(e);
            if (i !== eh || !yl(ch, n) || yl(ph, n)) { var o = ah(i, n); return !o || !yl(ch, n) || yl(i, Zl) && i[Zl][n] || (o.enumerable = !0), o }
        },
        Dh = function(t) {
            var e = hh(Cl(t)),
                i = [];
            return $l(e, (function(t) { yl(ch, t) || yl(Bl, t) || dh(i, t) })), i
        },
        Sh = function(t) {
            var e = t === eh,
                i = hh(e ? ph : Cl(t)),
                n = [];
            return $l(i, (function(t) {!yl(ch, t) || e && !yl(eh, t) || dh(n, ch[t]) })), n
        };
    (vl || (Hl(nh = (ih = function() {
        if (kl(nh, this)) throw oh("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? Ml(arguments[0]) : void 0,
            e = Gl(t),
            i = function(t) { this === eh && pl(i, ph, t), yl(this, Zl) && yl(this[Zl], e) && (this[Zl][e] = !1), yh(this, e, Ol(1, t)) };
        return ml && gh && yh(eh, e, { configurable: !0, set: i }), bh(e, t)
    }).prototype, "toString", (function() { return th(this).tag })), Hl(ih, "withoutSetter", (function(t) { return bh(Gl(t), t) })), jl.f = kh, Fl.f = _h, Rl.f = wh, Nl.f = xh, Al.f = Il.f = Dh, Ll.f = Sh, Vl.f = function(t) { return bh(Wl(t), t) }, ml && lh(nh, "description", { configurable: !0, get: function() { return th(this).description } })), hl({ global: !0, wrap: !0, forced: !vl, sham: !vl }, { Symbol: ih }), $l(Pl(vh), (function(t) { Ul(t) })), hl({ target: Kl, stat: !0, forced: !vl }, { for: function(t) { var e = Ml(t); if (yl(fh, e)) return fh[e]; var i = ih(e); return fh[e] = i, mh[i] = e, i }, keyFor: function(t) { if (!xl(t)) throw oh(t + " is not a symbol"); if (yl(mh, t)) return mh[t] }, useSetter: function() { gh = !0 }, useSimple: function() { gh = !1 } }), hl({ target: "Object", stat: !0, forced: !vl, sham: !ml }, { create: function(t, e) { return void 0 === e ? El(t) : wh(El(t), e) }, defineProperty: _h, defineProperties: wh, getOwnPropertyDescriptor: xh }), hl({ target: "Object", stat: !0, forced: !vl }, { getOwnPropertyNames: Dh, getOwnPropertySymbols: Sh }), hl({ target: "Object", stat: !0, forced: gl((function() { Ll.f(1) })) }, { getOwnPropertySymbols: function(t) { return Ll.f(Sl(t)) } }), sh) && hl({ target: "JSON", stat: !0, forced: !vl || gl((function() { var t = ih(); return "[null]" != sh([t]) || "{}" != sh({ a: t }) || "{}" != sh(Object(t)) })) }, {
        stringify: function(t, e, i) {
            var n = Yl(arguments),
                o = e;
            if ((wl(e) || void 0 !== t) && !xl(t)) return bl(e) || (e = function(t, e) { if (_l(o) && (e = pl(o, this, t, e)), !xl(e)) return e }), n[1] = e, cl(sh, null, n)
        }
    });
    if (!nh[Jl]) {
        var Ch = nh.valueOf;
        Hl(nh, Jl, (function(t) { return pl(Ch, this) }))
    }
    Xl(ih, Kl), Bl[Zl] = !0;
    var Th = W.Object.getOwnPropertySymbols;
    ! function(t) { t.exports = Th }(_a);
    var Mh = n(_a.exports),
        Oh = { exports: {} },
        Eh = { exports: {} },
        Ph = Nn,
        Ah = h,
        Ih = tn,
        Lh = zi.f,
        Nh = ie,
        Fh = Ah((function() { Lh(1) }));
    Ph({ target: "Object", stat: !0, forced: !Nh || Fh, sham: !Nh }, { getOwnPropertyDescriptor: function(t, e) { return Lh(Ih(t), e) } });
    var Rh = W.Object,
        jh = Eh.exports = function(t, e) { return Rh.getOwnPropertyDescriptor(t, e) };
    Rh.getOwnPropertyDescriptor.sham && (jh.sham = !0);
    var Yh = Eh.exports;
    ! function(t) { t.exports = Yh }(Oh);
    var Hh = n(Oh.exports),
        zh = { exports: {} },
        Bh = Z,
        Gh = xa,
        Wh = ja,
        Vh = me,
        Uh = v([].concat),
        Xh = Bh("Reflect", "ownKeys") || function(t) {
            var e = Gh.f(Vh(t)),
                i = Wh.f;
            return i ? Uh(e, i(t)) : e
        },
        qh = Xh,
        $h = tn,
        Zh = zi,
        Kh = ks;
    Nn({ target: "Object", stat: !0, sham: !ie }, { getOwnPropertyDescriptors: function(t) { for (var e, i, n = $h(t), o = Zh.f, r = qh(n), s = {}, a = 0; r.length > a;) void 0 !== (i = o(n, e = r[a++])) && Kh(s, e, i); return s } });
    var Jh = W.Object.getOwnPropertyDescriptors;
    ! function(t) { t.exports = Jh }(zh);
    var Qh = n(zh.exports),
        tu = { exports: {} },
        eu = { exports: {} },
        iu = Nn,
        nu = ie,
        ou = Bn.f;
    iu({ target: "Object", stat: !0, forced: Object.defineProperties !== ou, sham: !nu }, { defineProperties: ou });
    var ru = W.Object,
        su = eu.exports = function(t, e) { return ru.defineProperties(t, e) };
    ru.defineProperties.sham && (su.sham = !0);
    var au = eu.exports;
    ! function(t) { t.exports = au }(tu);
    var lu = n(tu.exports),
        hu = { exports: {} },
        uu = { exports: {} },
        du = Nn,
        cu = ie,
        pu = ne.f;
    du({ target: "Object", stat: !0, forced: Object.defineProperty !== pu, sham: !cu }, { defineProperty: pu });
    var fu = W.Object,
        mu = uu.exports = function(t, e, i) { return fu.defineProperty(t, e, i) };
    fu.defineProperty.sham && (mu.sham = !0);
    var vu = uu.exports;
    ! function(t) { t.exports = vu }(hu);
    var gu = n(hu.exports);

    function yu(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
    var bu = { exports: {} },
        _u = vu;
    ! function(t) { t.exports = _u }(bu);
    var wu = n(bu.exports);

    function ku(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), wu(t, n.key, n)
        }
    }

    function xu(t, e, i) { return e && ku(t.prototype, e), i && ku(t, i), wu(t, "prototype", { writable: !1 }), t }

    function Du(t, e, i) { return e in t ? wu(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t }
    var Su = { exports: {} };
    Nn({ target: "Array", stat: !0 }, { isArray: ka });
    var Cu = W.Array.isArray,
        Tu = Cu;
    ! function(t) { t.exports = Tu }(Su);
    var Mu = n(Su.exports);
    var Ou = { exports: {} },
        Eu = h,
        Pu = ot,
        Au = bt("species"),
        Iu = function(t) { return Pu >= 51 || !Eu((function() { var e = []; return (e.constructor = {})[Au] = function() { return { foo: 1 } }, 1 !== e[t](Boolean).foo })) },
        Lu = Nn,
        Nu = w,
        Fu = h,
        Ru = ka,
        ju = ee,
        Yu = N,
        Hu = Zn,
        zu = ks,
        Bu = tl,
        Gu = Iu,
        Wu = ot,
        Vu = bt("isConcatSpreadable"),
        Uu = 9007199254740991,
        Xu = "Maximum allowed index exceeded",
        qu = Nu.TypeError,
        $u = Wu >= 51 || !Fu((function() { var t = []; return t[Vu] = !1, t.concat()[0] !== t })),
        Zu = Gu("concat"),
        Ku = function(t) { if (!ju(t)) return !1; var e = t[Vu]; return void 0 !== e ? !!e : Ru(t) };
    Lu({ target: "Array", proto: !0, forced: !$u || !Zu }, {
        concat: function(t) {
            var e, i, n, o, r, s = Yu(this),
                a = Bu(s, 0),
                l = 0;
            for (e = -1, n = arguments.length; e < n; e++)
                if (Ku(r = -1 === e ? s : arguments[e])) { if (l + (o = Hu(r)) > Uu) throw qu(Xu); for (i = 0; i < o; i++, l++) i in r && zu(a, l, r[i]) } else {
                    if (l >= Uu) throw qu(Xu);
                    zu(a, l++, r)
                }
            return a.length = l, a
        }
    }), Ua("asyncIterator"), Ua("hasInstance"), Ua("isConcatSpreadable"), Ua("iterator"), Ua("match"), Ua("matchAll"), Ua("replace"), Ua("search"), Ua("species"), Ua("split"), Ua("toPrimitive"), Ua("toStringTag"), Ua("unscopables"), dr(w.JSON, "JSON", !0);
    var Ju = W.Symbol,
        Qu = Ju;
    Ua("asyncDispose"), Ua("dispose"), Ua("matcher"), Ua("metadata"), Ua("observable"), Ua("patternMatch"), Ua("replaceAll");
    var td = Qu;
    ! function(t) { t.exports = td }(Ou);
    var ed = n(Ou.exports);
    var id = { exports: {} },
        nd = Nn,
        od = w,
        rd = ka,
        sd = ys,
        ad = ee,
        ld = Un,
        hd = Zn,
        ud = tn,
        dd = ks,
        cd = bt,
        pd = Ya,
        fd = Iu("slice"),
        md = cd("species"),
        vd = od.Array,
        gd = Math.max;
    nd({ target: "Array", proto: !0, forced: !fd }, {
        slice: function(t, e) {
            var i, n, o, r = ud(this),
                s = hd(r),
                a = ld(t, s),
                l = ld(void 0 === e ? s : e, s);
            if (rd(r) && (i = r.constructor, (sd(i) && (i === vd || rd(i.prototype)) || ad(i) && null === (i = i[md])) && (i = void 0), i === vd || void 0 === i)) return pd(r, a, l);
            for (n = new(void 0 === i ? vd : i)(gd(l - a, 0)), o = 0; a < l; a++, o++) a in r && dd(n, o, r[a]);
            return n.length = o, n
        }
    });
    var yd = W,
        bd = function(t) { return yd[t + "Prototype"] },
        _d = bd("Array").slice,
        wd = be,
        kd = _d,
        xd = Array.prototype,
        Dd = function(t) { var e = t.slice; return t === xd || wd(xd, t) && e === xd.slice ? kd : e },
        Sd = Dd;
    ! function(t) { t.exports = Sd }(id);
    var Cd = n(id.exports),
        Td = { exports: {} },
        Md = Js;
    ! function(t) { t.exports = Md }(Td);
    var Od = n(Td.exports);

    function Ed(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function Pd(t, e) { var i; if (t) { if ("string" == typeof t) return Ed(t, e); var n = Cd(i = Object.prototype.toString.call(t)).call(i, 8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Od(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ed(t, e) : void 0 } }

    function Ad(t, e) {
        return function(t) { if (Mu(t)) return t }(t) || function(t, e) {
            var i = null == t ? null : void 0 !== ed && ba(t) || t["@@iterator"];
            if (null != i) {
                var n, o, r = [],
                    s = !0,
                    a = !1;
                try { for (i = i.call(t); !(s = (n = i.next()).done) && (r.push(n.value), !e || r.length !== e); s = !0); } catch (t) { a = !0, o = t } finally { try { s || null == i.return || i.return() } finally { if (a) throw o } }
                return r
            }
        }(t, e) || Pd(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
    }
    var Id = { exports: {} },
        Ld = Ha.f("iterator"),
        Nd = Ld;
    ! function(t) { t.exports = Nd }(Id);
    var Fd = n(Id.exports);

    function Rd(t) { return (Rd = "function" == typeof ed && "symbol" == typeof Fd ? function(t) { return typeof t } : function(t) { return t && "function" == typeof ed && t.constructor === ed && t !== ed.prototype ? "symbol" : typeof t })(t) }

    function jd(t) { return function(t) { if (Mu(t)) return Ed(t) }(t) || function(t) { if (void 0 !== ed && null != ba(t) || null != t["@@iterator"]) return Od(t) }(t) || Pd(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }
    var Yd = { exports: {} };
    ! function(t) { t.exports = Ju }(Yd);
    var Hd = n(Yd.exports),
        zd = { exports: {} },
        Bd = bd("Array").concat,
        Gd = be,
        Wd = Bd,
        Vd = Array.prototype,
        Ud = function(t) { var e = t.concat; return t === Vd || Gd(Vd, t) && e === Vd.concat ? Wd : e };
    ! function(t) { t.exports = Ud }(zd);
    var Xd = n(zd.exports),
        qd = { exports: {} };
    ! function(t) { t.exports = Dd }(qd);
    var $d = n(qd.exports),
        Zd = { exports: {} };
    Nn({ target: "Reflect", stat: !0 }, { ownKeys: Xh });
    var Kd = W.Reflect.ownKeys;
    ! function(t) { t.exports = Kd }(Zd);
    var Jd = n(Zd.exports),
        Qd = { exports: {} };
    ! function(t) { t.exports = Cu }(Qd);
    var tc = n(Qd.exports),
        ec = { exports: {} },
        ic = ll.map;
    Nn({ target: "Array", proto: !0, forced: !Iu("map") }, { map: function(t) { return ic(this, t, arguments.length > 1 ? arguments[1] : void 0) } });
    var nc = bd("Array").map,
        oc = be,
        rc = nc,
        sc = Array.prototype,
        ac = function(t) { var e = t.map; return t === sc || oc(sc, t) && e === sc.map ? rc : e };
    ! function(t) { t.exports = ac }(ec);
    var lc = n(ec.exports),
        hc = { exports: {} },
        uc = N,
        dc = co;
    Nn({ target: "Object", stat: !0, forced: h((function() { dc(1) })) }, { keys: function(t) { return dc(uc(t)) } });
    var cc = W.Object.keys;
    ! function(t) { t.exports = cc }(hc);
    var pc = n(hc.exports),
        fc = { exports: {} },
        mc = Nn,
        vc = v,
        gc = w.Date,
        yc = vc(gc.prototype.getTime);
    mc({ target: "Date", stat: !0 }, { now: function() { return yc(new gc) } });
    var bc = W.Date.now;
    ! function(t) { t.exports = bc }(fc);
    var _c = n(fc.exports),
        wc = { exports: {} },
        kc = v,
        xc = Pe,
        Dc = ee,
        Sc = j,
        Cc = Ya,
        Tc = u,
        Mc = w.Function,
        Oc = kc([].concat),
        Ec = kc([].join),
        Pc = {},
        Ac = function(t, e, i) {
            if (!Sc(Pc, e)) {
                for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                Pc[e] = Mc("C,a", "return new C(" + Ec(n, ",") + ")")
            }
            return Pc[e](t, i)
        },
        Ic = Tc ? Mc.bind : function(t) {
            var e = xc(this),
                i = e.prototype,
                n = Cc(arguments, 1),
                o = function() { var i = Oc(n, Cc(arguments)); return this instanceof o ? Ac(e, i.length, i) : e.apply(t, i) };
            return Dc(i) && (o.prototype = i), o
        },
        Lc = Ic;
    Nn({ target: "Function", proto: !0, forced: Function.bind !== Lc }, { bind: Lc });
    var Nc = bd("Function").bind,
        Fc = be,
        Rc = Nc,
        jc = Function.prototype,
        Yc = function(t) { var e = t.bind; return t === jc || Fc(jc, t) && e === jc.bind ? Rc : e };
    ! function(t) { t.exports = Yc }(wc);
    var Hc = n(wc.exports),
        zc = { exports: {} },
        Bc = h,
        Gc = function(t, e) { var i = [][t]; return !!i && Bc((function() { i.call(null, e || function() { return 1 }, 1) })) },
        Wc = ll.forEach,
        Vc = Gc("forEach") ? [].forEach : function(t) { return Wc(this, t, arguments.length > 1 ? arguments[1] : void 0) };
    Nn({ target: "Array", proto: !0, forced: [].forEach != Vc }, { forEach: Vc });
    var Uc = bd("Array").forEach,
        Xc = It,
        qc = j,
        $c = be,
        Zc = Uc,
        Kc = Array.prototype,
        Jc = { DOMTokenList: !0, NodeList: !0 },
        Qc = function(t) { var e = t.forEach; return t === Kc || $c(Kc, t) && e === Kc.forEach || qc(Jc, Xc(t)) ? Zc : e };
    ! function(t) { t.exports = Qc }(zc);
    var tp = n(zc.exports),
        ep = { exports: {} },
        ip = Nn,
        np = ka,
        op = v([].reverse),
        rp = [1, 2];
    ip({ target: "Array", proto: !0, forced: String(rp) === String(rp.reverse()) }, { reverse: function() { return np(this) && (this.length = this.length), op(this) } });
    var sp = bd("Array").reverse,
        ap = be,
        lp = sp,
        hp = Array.prototype,
        up = function(t) { var e = t.reverse; return t === hp || ap(hp, t) && e === hp.reverse ? lp : e };
    ! function(t) { t.exports = up }(ep);
    var dp = n(ep.exports),
        cp = { exports: {} },
        pp = Nn,
        fp = w,
        mp = Un,
        vp = b,
        gp = Zn,
        yp = N,
        bp = tl,
        _p = ks,
        wp = Iu("splice"),
        kp = fp.TypeError,
        xp = Math.max,
        Dp = Math.min,
        Sp = 9007199254740991,
        Cp = "Maximum allowed length exceeded";
    pp({ target: "Array", proto: !0, forced: !wp }, {
        splice: function(t, e) {
            var i, n, o, r, s, a, l = yp(this),
                h = gp(l),
                u = mp(t, h),
                d = arguments.length;
            if (0 === d ? i = n = 0 : 1 === d ? (i = 0, n = h - u) : (i = d - 2, n = Dp(xp(vp(e), 0), h - u)), h + i - n > Sp) throw kp(Cp);
            for (o = bp(l, n), r = 0; r < n; r++)(s = u + r) in l && _p(o, r, l[s]);
            if (o.length = n, i < n) { for (r = u; r < h - n; r++) a = r + i, (s = r + n) in l ? l[a] = l[s] : delete l[a]; for (r = h; r > h - n + i; r--) delete l[r - 1] } else if (i > n)
                for (r = h - n; r > u; r--) a = r + i - 1, (s = r + n - 1) in l ? l[a] = l[s] : delete l[a];
            for (r = 0; r < i; r++) l[r + u] = arguments[r + 2];
            return l.length = h - n + i, o
        }
    });
    var Tp = bd("Array").splice,
        Mp = be,
        Op = Tp,
        Ep = Array.prototype,
        Pp = function(t) { var e = t.splice; return t === Ep || Mp(Ep, t) && e === Ep.splice ? Op : e };
    ! function(t) { t.exports = Pp }(cp);
    var Ap = n(cp.exports),
        Ip = { exports: {} },
        Lp = ie,
        Np = v,
        Fp = ye,
        Rp = h,
        jp = co,
        Yp = ja,
        Hp = Bi,
        zp = N,
        Bp = Ki,
        Gp = Object.assign,
        Wp = Object.defineProperty,
        Vp = Np([].concat),
        Up = !Gp || Rp((function() {
            if (Lp && 1 !== Gp({ b: 1 }, Gp(Wp({}, "a", { enumerable: !0, get: function() { Wp(this, "b", { value: 3, enumerable: !1 }) } }), { b: 2 })).b) return !0;
            var t = {},
                e = {},
                i = Symbol(),
                n = "abcdefghijklmnopqrst";
            return t[i] = 7, n.split("").forEach((function(t) { e[t] = t })), 7 != Gp({}, t)[i] || jp(Gp({}, e)).join("") != n
        })) ? function(t, e) {
            for (var i = zp(t), n = arguments.length, o = 1, r = Yp.f, s = Hp.f; n > o;)
                for (var a, l = Bp(arguments[o++]), h = r ? Vp(jp(l), r(l)) : jp(l), u = h.length, d = 0; u > d;) a = h[d++], Lp && !Fp(s, l, a) || (i[a] = l[a]);
            return i
        } : Gp;
    Nn({ target: "Object", stat: !0, forced: Object.assign !== Up }, { assign: Up });
    var Xp = W.Object.assign;
    ! function(t) { t.exports = Xp }(Ip);
    var qp = n(Ip.exports),
        $p = { exports: {} },
        Zp = eo.includes;
    Nn({ target: "Array", proto: !0 }, { includes: function(t) { return Zp(this, t, arguments.length > 1 ? arguments[1] : void 0) } });
    var Kp = bd("Array").includes,
        Jp = ee,
        Qp = St,
        tf = bt("match"),
        ef = function(t) { var e; return Jp(t) && (void 0 !== (e = t[tf]) ? !!e : "RegExp" == Qp(t)) },
        nf = w.TypeError,
        of = bt("match"),
        rf = Nn,
        sf = function(t) { if (ef(t)) throw nf("The method doesn't accept regular expressions"); return t },
        af = A,
        lf = Ft,
        hf = function(t) { var e = /./; try { "/./" [t](e) } catch (i) { try { return e[of] = !1, "/./" [t](e) } catch (t) {} } return !1 },
        uf = v("".indexOf);
    rf({ target: "String", proto: !0, forced: !hf("includes") }, { includes: function(t) { return !!~uf(lf(af(this)), lf(sf(t)), arguments.length > 1 ? arguments[1] : void 0) } });
    var df = bd("String").includes,
        cf = be,
        pf = Kp,
        ff = df,
        mf = Array.prototype,
        vf = String.prototype,
        gf = function(t) { var e = t.includes; return t === mf || cf(mf, t) && e === mf.includes ? pf : "string" == typeof t || t === vf || cf(vf, t) && e === vf.includes ? ff : e };
    ! function(t) { t.exports = gf }($p);
    var yf = n($p.exports),
        bf = { exports: {} },
        _f = N,
        wf = Vo,
        kf = Fo;
    Nn({ target: "Object", stat: !0, forced: h((function() { wf(1) })), sham: !kf }, { getPrototypeOf: function(t) { return wf(_f(t)) } });
    var xf = W.Object.getPrototypeOf;
    ! function(t) { t.exports = xf }(bf);
    var Df = n(bf.exports),
        Sf = { exports: {} },
        Cf = ll.filter;
    Nn({ target: "Array", proto: !0, forced: !Iu("filter") }, { filter: function(t) { return Cf(this, t, arguments.length > 1 ? arguments[1] : void 0) } });
    var Tf = bd("Array").filter,
        Mf = be,
        Of = Tf,
        Ef = Array.prototype,
        Pf = function(t) { var e = t.filter; return t === Ef || Mf(Ef, t) && e === Ef.filter ? Of : e };
    ! function(t) { t.exports = Pf }(Sf);
    var Af = n(Sf.exports),
        If = { exports: {} },
        Lf = ie,
        Nf = v,
        Ff = co,
        Rf = tn,
        jf = Nf(Bi.f),
        Yf = Nf([].push),
        Hf = function(t) { return function(e) { for (var i, n = Rf(e), o = Ff(n), r = o.length, s = 0, a = []; r > s;) i = o[s++], Lf && !jf(n, i) || Yf(a, t ? [i, n[i]] : n[i]); return a } },
        zf = { entries: Hf(!0), values: Hf(!1) }.values;
    Nn({ target: "Object", stat: !0 }, { values: function(t) { return zf(t) } });
    var Bf = W.Object.values;
    ! function(t) { t.exports = Bf }(If);
    var Gf = n(If.exports),
        Wf = { exports: {} },
        Vf = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
        Uf = A,
        Xf = Ft,
        qf = v("".replace),
        $f = "[\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff]",
        Zf = RegExp("^" + $f + $f + "*"),
        Kf = RegExp($f + $f + "*$"),
        Jf = function(t) { return function(e) { var i = Xf(Uf(e)); return 1 & t && (i = qf(i, Zf, "")), 2 & t && (i = qf(i, Kf, "")), i } },
        Qf = { start: Jf(1), end: Jf(2), trim: Jf(3) },
        tm = w,
        em = h,
        im = v,
        nm = Ft,
        om = Qf.trim,
        rm = Vf,
        sm = tm.parseInt,
        am = tm.Symbol,
        lm = am && am.iterator,
        hm = /^[+-]?0x/i,
        um = im(hm.exec),
        dm = 8 !== sm(rm + "08") || 22 !== sm(rm + "0x16") || lm && !em((function() { sm(Object(lm)) })) ? function(t, e) { var i = om(nm(t)); return sm(i, e >>> 0 || (um(hm, i) ? 16 : 10)) } : sm;
    Nn({ global: !0, forced: parseInt != dm }, { parseInt: dm });
    var cm = W.parseInt;
    ! function(t) { t.exports = cm }(Wf);
    var pm = n(Wf.exports),
        fm = { exports: {} },
        mm = Nn,
        vm = eo.indexOf,
        gm = Gc,
        ym = v([].indexOf),
        bm = !!ym && 1 / ym([1], 1, -0) < 0,
        _m = gm("indexOf");
    mm({ target: "Array", proto: !0, forced: bm || !_m }, { indexOf: function(t) { var e = arguments.length > 1 ? arguments[1] : void 0; return bm ? ym(this, t, e) || 0 : vm(this, t, e) } });
    var wm = bd("Array").indexOf,
        km = be,
        xm = wm,
        Dm = Array.prototype,
        Sm = function(t) { var e = t.indexOf; return t === Dm || km(Dm, t) && e === Dm.indexOf ? xm : e };
    ! function(t) { t.exports = Sm }(fm);
    var Cm = n(fm.exports),
        Tm = { exports: {} },
        Mm = zn.PROPER,
        Om = h,
        Em = Vf,
        Pm = Qf.trim;
    Nn({ target: "String", proto: !0, forced: function(t) { return Om((function() { return !!Em[t]() || "â€‹Â…á Ž" !== "â€‹Â…á Ž" [t]() || Mm && Em[t].name !== t })) }("trim") }, { trim: function() { return Pm(this) } });
    var Am = bd("String").trim,
        Im = be,
        Lm = Am,
        Nm = String.prototype,
        Fm = function(t) { var e = t.trim; return "string" == typeof t || t === Nm || Im(Nm, t) && e === Nm.trim ? Lm : e };
    ! function(t) { t.exports = Fm }(Tm);
    var Rm = n(Tm.exports),
        jm = { exports: {} };
    Nn({ target: "Object", stat: !0, sham: !ie }, { create: No });
    var Ym = W.Object,
        Hm = function(t, e) { return Ym.create(t, e) };
    ! function(t) { t.exports = Hm }(jm);
    var zm = n(jm.exports),
        Bm = { exports: {} },
        Gm = Nn,
        Wm = Z,
        Vm = Hi,
        Um = v,
        Xm = h,
        qm = w.Array,
        $m = Wm("JSON", "stringify"),
        Zm = Um(/./.exec),
        Km = Um("".charAt),
        Jm = Um("".charCodeAt),
        Qm = Um("".replace),
        tv = Um(1..toString),
        ev = /[\uD800-\uDFFF]/g,
        iv = /^[\uD800-\uDBFF]$/,
        nv = /^[\uDC00-\uDFFF]$/,
        ov = function(t, e, i) {
            var n = Km(i, e - 1),
                o = Km(i, e + 1);
            return Zm(iv, t) && !Zm(nv, o) || Zm(nv, t) && !Zm(iv, n) ? "\\u" + tv(Jm(t, 0), 16) : t
        },
        rv = Xm((function() { return '"\\udf06\\ud834"' !== $m("\udf06\ud834") || '"\\udead"' !== $m("\udead") }));
    $m && Gm({ target: "JSON", stat: !0, forced: rv }, { stringify: function(t, e, i) { for (var n = 0, o = arguments.length, r = qm(o); n < o; n++) r[n] = arguments[n]; var s = Vm($m, null, r); return "string" == typeof s ? Qm(s, ev, ov) : s } });
    var sv = W,
        av = Hi;
    sv.JSON || (sv.JSON = { stringify: JSON.stringify });
    var lv = function(t, e, i) { return av(sv.JSON.stringify, null, arguments) };
    ! function(t) { t.exports = lv }(Bm);
    var hv = n(Bm.exports),
        uv = { exports: {} },
        dv = w.TypeError,
        cv = function(t, e) { if (t < e) throw dv("Not enough arguments"); return t },
        pv = Nn,
        fv = w,
        mv = Hi,
        vv = V,
        gv = Ya,
        yv = cv,
        bv = /MSIE .\./.test(K),
        _v = fv.Function,
        wv = function(t) {
            return function(e, i) {
                var n = yv(arguments.length, 1) > 2,
                    o = vv(e) ? e : _v(e),
                    r = n ? gv(arguments, 2) : void 0;
                return t(n ? function() { mv(o, this, r) } : o, i)
            }
        };
    pv({ global: !0, bind: !0, forced: bv }, { setTimeout: wv(fv.setTimeout), setInterval: wv(fv.setInterval) });
    var kv = W.setTimeout;
    ! function(t) { t.exports = kv }(uv);
    var xv = n(uv.exports),
        Dv = { exports: {} },
        Sv = N,
        Cv = Un,
        Tv = Zn;
    Nn({ target: "Array", proto: !0 }, { fill: function(t) { for (var e = Sv(this), i = Tv(e), n = arguments.length, o = Cv(n > 1 ? arguments[1] : void 0, i), r = n > 2 ? arguments[2] : void 0, s = void 0 === r ? i : Cv(r, i); s > o;) e[o++] = t; return e } });
    var Mv = bd("Array").fill,
        Ov = be,
        Ev = Mv,
        Pv = Array.prototype,
        Av = function(t) { var e = t.fill; return t === Pv || Ov(Pv, t) && e === Pv.fill ? Ev : e };
    ! function(t) { t.exports = Av }(Dv);
    var Iv = n(Dv.exports),
        Lv = { exports: {} };
    ! function(t) {
        function e(t) { if (t) return function(t) { for (var i in e.prototype) t[i] = e.prototype[i]; return t }(t) }
        t.exports = e, e.prototype.on = e.prototype.addEventListener = function(t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this }, e.prototype.once = function(t, e) {
            function i() { this.off(t, i), e.apply(this, arguments) }
            return i.fn = e, this.on(t, i), this
        }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var i, n = this._callbacks["$" + t];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
            for (var o = 0; o < n.length; o++)
                if ((i = n[o]) === e || i.fn === e) { n.splice(o, 1); break }
            return 0 === n.length && delete this._callbacks["$" + t], this
        }, e.prototype.emit = function(t) { this._callbacks = this._callbacks || {}; for (var e = new Array(arguments.length - 1), i = this._callbacks["$" + t], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; if (i) { n = 0; for (var o = (i = i.slice(0)).length; n < o; ++n) i[n].apply(this, e) } return this }, e.prototype.listeners = function(t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [] }, e.prototype.hasListeners = function(t) { return !!this.listeners(t).length }
    }(Lv);
    var Nv = Lv.exports;
    /*! Hammer.JS - v2.0.17-rc - 2019-12-16
     * http://naver.github.io/egjs
     *
     * Forked By Naver egjs
     * Copyright (c) hammerjs
     * Licensed under the MIT license */
    function Fv() { return (Fv = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var i = arguments[e]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) } return t }).apply(this, arguments) }

    function Rv(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }

    function jv(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }
    var Yv, Hv = "function" != typeof Object.assign ? function(t) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n)
                    for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
            }
            return e
        } : Object.assign,
        zv = ["", "webkit", "Moz", "MS", "ms", "o"],
        Bv = "undefined" == typeof document ? { style: {} } : document.createElement("div"),
        Gv = Math.round,
        Wv = Math.abs,
        Vv = Date.now;

    function Uv(t, e) {
        for (var i, n, o = e[0].toUpperCase() + e.slice(1), r = 0; r < zv.length;) {
            if ((n = (i = zv[r]) ? i + o : e) in t) return n;
            r++
        }
    }
    Yv = "undefined" == typeof window ? {} : window;
    var Xv = Uv(Bv.style, "touchAction"),
        qv = void 0 !== Xv;
    var $v = "compute",
        Zv = "auto",
        Kv = "manipulation",
        Jv = "none",
        Qv = "pan-x",
        tg = "pan-y",
        eg = function() {
            if (!qv) return !1;
            var t = {},
                e = Yv.CSS && Yv.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) { return t[i] = !e || Yv.CSS.supports("touch-action", i) })), t
        }(),
        ig = "ontouchstart" in Yv,
        ng = void 0 !== Uv(Yv, "PointerEvent"),
        og = ig && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        rg = "touch",
        sg = "mouse",
        ag = 16,
        lg = 24,
        hg = ["x", "y"],
        ug = ["clientX", "clientY"];

    function dg(t, e, i) {
        var n;
        if (t)
            if (t.forEach) t.forEach(e, i);
            else if (void 0 !== t.length)
            for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
        else
            for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
    }

    function cg(t, e) { return "function" == typeof t ? t.apply(e && e[0] || void 0, e) : t }

    function pg(t, e) { return t.indexOf(e) > -1 }
    var fg = function() {
        function t(t, e) { this.manager = t, this.set(e) }
        var e = t.prototype;
        return e.set = function(t) { t === $v && (t = this.compute()), qv && this.manager.element.style && eg[t] && (this.manager.element.style[Xv] = t), this.actions = t.toLowerCase().trim() }, e.update = function() { this.set(this.manager.options.touchAction) }, e.compute = function() {
            var t = [];
            return dg(this.manager.recognizers, (function(e) { cg(e.options.enable, [e]) && (t = t.concat(e.getTouchAction())) })),
                function(t) {
                    if (pg(t, Jv)) return Jv;
                    var e = pg(t, Qv),
                        i = pg(t, tg);
                    return e && i ? Jv : e || i ? e ? Qv : tg : pg(t, Kv) ? Kv : Zv
                }(t.join(" "))
        }, e.preventDefaults = function(t) {
            var e = t.srcEvent,
                i = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
                var n = this.actions,
                    o = pg(n, Jv) && !eg.none,
                    r = pg(n, tg) && !eg["pan-y"],
                    s = pg(n, Qv) && !eg["pan-x"];
                if (o) {
                    var a = 1 === t.pointers.length,
                        l = t.distance < 2,
                        h = t.deltaTime < 250;
                    if (a && l && h) return
                }
                if (!s || !r) return o || r && 6 & i || s && i & lg ? this.preventSrc(e) : void 0
            }
        }, e.preventSrc = function(t) { this.manager.session.prevented = !0, t.preventDefault() }, t
    }();

    function mg(t, e) {
        for (; t;) {
            if (t === e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function vg(t) { var e = t.length; if (1 === e) return { x: Gv(t[0].clientX), y: Gv(t[0].clientY) }; for (var i = 0, n = 0, o = 0; o < e;) i += t[o].clientX, n += t[o].clientY, o++; return { x: Gv(i / e), y: Gv(n / e) } }

    function gg(t) { for (var e = [], i = 0; i < t.pointers.length;) e[i] = { clientX: Gv(t.pointers[i].clientX), clientY: Gv(t.pointers[i].clientY) }, i++; return { timeStamp: Vv(), pointers: e, center: vg(e), deltaX: t.deltaX, deltaY: t.deltaY } }

    function yg(t, e, i) {
        i || (i = hg);
        var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + o * o)
    }

    function bg(t, e, i) {
        i || (i = hg);
        var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(o, n) / Math.PI
    }

    function _g(t, e) { return t === e ? 1 : Wv(t) >= Wv(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : ag }

    function wg(t, e, i) { return { x: e / t || 0, y: i / t || 0 } }

    function kg(t, e) {
        var i = t.session,
            n = e.pointers,
            o = n.length;
        i.firstInput || (i.firstInput = gg(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = gg(e) : 1 === o && (i.firstMultiple = !1);
        var r = i.firstInput,
            s = i.firstMultiple,
            a = s ? s.center : r.center,
            l = e.center = vg(n);
        e.timeStamp = Vv(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = bg(a, l), e.distance = yg(a, l),
            function(t, e) {
                var i = e.center,
                    n = t.offsetDelta || {},
                    o = t.prevDelta || {},
                    r = t.prevInput || {};
                1 !== e.eventType && 4 !== r.eventType || (o = t.prevDelta = { x: r.deltaX || 0, y: r.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
            }(i, e), e.offsetDirection = _g(e.deltaX, e.deltaY);
        var h, u, d = wg(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = d.x, e.overallVelocityY = d.y, e.overallVelocity = Wv(d.x) > Wv(d.y) ? d.x : d.y, e.scale = s ? (h = s.pointers, yg((u = n)[0], u[1], ug) / yg(h[0], h[1], ug)) : 1, e.rotation = s ? function(t, e) { return bg(e[1], e[0], ug) + bg(t[1], t[0], ug) }(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
            function(t, e) {
                var i, n, o, r, s = t.lastInterval || e,
                    a = e.timeStamp - s.timeStamp;
                if (8 !== e.eventType && (a > 25 || void 0 === s.velocity)) {
                    var l = e.deltaX - s.deltaX,
                        h = e.deltaY - s.deltaY,
                        u = wg(a, l, h);
                    n = u.x, o = u.y, i = Wv(u.x) > Wv(u.y) ? u.x : u.y, r = _g(l, h), t.lastInterval = e
                } else i = s.velocity, n = s.velocityX, o = s.velocityY, r = s.direction;
                e.velocity = i, e.velocityX = n, e.velocityY = o, e.direction = r
            }(i, e);
        var c, p = t.element,
            f = e.srcEvent;
        mg(c = f.composedPath ? f.composedPath()[0] : f.path ? f.path[0] : f.target, p) && (p = c), e.target = p
    }

    function xg(t, e, i) {
        var n = i.pointers.length,
            o = i.changedPointers.length,
            r = 1 & e && n - o == 0,
            s = 12 & e && n - o == 0;
        i.isFirst = !!r, i.isFinal = !!s, r && (t.session = {}), i.eventType = e, kg(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function Dg(t) { return t.trim().split(/\s+/g) }

    function Sg(t, e, i) { dg(Dg(e), (function(e) { t.addEventListener(e, i, !1) })) }

    function Cg(t, e, i) { dg(Dg(e), (function(e) { t.removeEventListener(e, i, !1) })) }

    function Tg(t) { var e = t.ownerDocument || t; return e.defaultView || e.parentWindow || window }
    var Mg = function() {
        function t(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) { cg(t.options.enable, [t]) && i.handler(e) }, this.init()
        }
        var e = t.prototype;
        return e.handler = function() {}, e.init = function() { this.evEl && Sg(this.element, this.evEl, this.domHandler), this.evTarget && Sg(this.target, this.evTarget, this.domHandler), this.evWin && Sg(Tg(this.element), this.evWin, this.domHandler) }, e.destroy = function() { this.evEl && Cg(this.element, this.evEl, this.domHandler), this.evTarget && Cg(this.target, this.evTarget, this.domHandler), this.evWin && Cg(Tg(this.element), this.evWin, this.domHandler) }, t
    }();

    function Og(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++
        }
        return -1
    }
    var Eg = { pointerdown: 1, pointermove: 2, pointerup: 4, pointercancel: 8, pointerout: 8 },
        Pg = { 2: rg, 3: "pen", 4: sg, 5: "kinect" },
        Ag = "pointerdown",
        Ig = "pointermove pointerup pointercancel";
    Yv.MSPointerEvent && !Yv.PointerEvent && (Ag = "MSPointerDown", Ig = "MSPointerMove MSPointerUp MSPointerCancel");
    var Lg = function(t) {
        function e() { var i, n = e.prototype; return n.evEl = Ag, n.evWin = Ig, (i = t.apply(this, arguments) || this).store = i.manager.session.pointerEvents = [], i }
        return Rv(e, t), e.prototype.handler = function(t) {
            var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                o = Eg[n],
                r = Pg[t.pointerType] || t.pointerType,
                s = r === rg,
                a = Og(e, t.pointerId, "pointerId");
            1 & o && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : 12 & o && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, o, { pointers: e, changedPointers: [t], pointerType: r, srcEvent: t }), i && e.splice(a, 1))
        }, e
    }(Mg);

    function Ng(t) { return Array.prototype.slice.call(t, 0) }

    function Fg(t, e, i) {
        for (var n = [], o = [], r = 0; r < t.length;) {
            var s = e ? t[r][e] : t[r];
            Og(o, s) < 0 && n.push(t[r]), o[r] = s, r++
        }
        return i && (n = e ? n.sort((function(t, i) { return t[e] > i[e] })) : n.sort()), n
    }
    var Rg = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 },
        jg = "touchstart touchmove touchend touchcancel",
        Yg = function(t) {
            function e() { var i; return e.prototype.evTarget = jg, (i = t.apply(this, arguments) || this).targetIds = {}, i }
            return Rv(e, t), e.prototype.handler = function(t) {
                var e = Rg[t.type],
                    i = Hg.call(this, t, e);
                i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: rg, srcEvent: t })
            }, e
        }(Mg);

    function Hg(t, e) {
        var i, n, o = Ng(t.touches),
            r = this.targetIds;
        if (3 & e && 1 === o.length) return r[o[0].identifier] = !0, [o, o];
        var s = Ng(t.changedTouches),
            a = [],
            l = this.target;
        if (n = o.filter((function(t) { return mg(t.target, l) })), 1 === e)
            for (i = 0; i < n.length;) r[n[i].identifier] = !0, i++;
        for (i = 0; i < s.length;) r[s[i].identifier] && a.push(s[i]), 12 & e && delete r[s[i].identifier], i++;
        return a.length ? [Fg(n.concat(a), "identifier", !0), a] : void 0
    }
    var zg = { mousedown: 1, mousemove: 2, mouseup: 4 },
        Bg = "mousedown",
        Gg = "mousemove mouseup",
        Wg = function(t) {
            function e() { var i, n = e.prototype; return n.evEl = Bg, n.evWin = Gg, (i = t.apply(this, arguments) || this).pressed = !1, i }
            return Rv(e, t), e.prototype.handler = function(t) {
                var e = zg[t.type];
                1 & e && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = 4), this.pressed && (4 & e && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: sg, srcEvent: t }))
            }, e
        }(Mg);

    function Vg(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = { x: e.clientX, y: e.clientY },
                n = this.lastTouches;
            this.lastTouches.push(i);
            setTimeout((function() {
                var t = n.indexOf(i);
                t > -1 && n.splice(t, 1)
            }), 2500)
        }
    }

    function Ug(t, e) { 1 & t ? (this.primaryTouch = e.changedPointers[0].identifier, Vg.call(this, e)) : 12 & t && Vg.call(this, e) }

    function Xg(t) {
        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var o = this.lastTouches[n],
                r = Math.abs(e - o.x),
                s = Math.abs(i - o.y);
            if (r <= 25 && s <= 25) return !0
        }
        return !1
    }
    var qg = function() {
        return function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, e, i) || this).handler = function(t, e, i) {
                    var o = i.pointerType === rg,
                        r = i.pointerType === sg;
                    if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (o) Ug.call(jv(jv(n)), e, i);
                        else if (r && Xg.call(jv(jv(n)), i)) return;
                        n.callback(t, e, i)
                    }
                }, n.touch = new Yg(n.manager, n.handler), n.mouse = new Wg(n.manager, n.handler), n.primaryTouch = null, n.lastTouches = [], n
            }
            return Rv(e, t), e.prototype.destroy = function() { this.touch.destroy(), this.mouse.destroy() }, e
        }(Mg)
    }();

    function $g(t, e, i) { return !!Array.isArray(t) && (dg(t, i[e], i), !0) }
    var Zg = 32,
        Kg = 1;

    function Jg(t, e) { var i = e.manager; return i ? i.get(t) : t }

    function Qg(t) { return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : "" }
    var ty = function() {
            function t(t) { void 0 === t && (t = {}), this.options = Fv({ enable: !0 }, t), this.id = Kg++, this.manager = null, this.state = 1, this.simultaneous = {}, this.requireFail = [] }
            var e = t.prototype;
            return e.set = function(t) { return Hv(this.options, t), this.manager && this.manager.touchAction.update(), this }, e.recognizeWith = function(t) { if ($g(t, "recognizeWith", this)) return this; var e = this.simultaneous; return e[(t = Jg(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this }, e.dropRecognizeWith = function(t) { return $g(t, "dropRecognizeWith", this) || (t = Jg(t, this), delete this.simultaneous[t.id]), this }, e.requireFailure = function(t) { if ($g(t, "requireFailure", this)) return this; var e = this.requireFail; return -1 === Og(e, t = Jg(t, this)) && (e.push(t), t.requireFailure(this)), this }, e.dropRequireFailure = function(t) {
                if ($g(t, "dropRequireFailure", this)) return this;
                t = Jg(t, this);
                var e = Og(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            }, e.hasRequireFailures = function() { return this.requireFail.length > 0 }, e.canRecognizeWith = function(t) { return !!this.simultaneous[t.id] }, e.emit = function(t) {
                var e = this,
                    i = this.state;

                function n(i) { e.manager.emit(i, t) }
                i < 8 && n(e.options.event + Qg(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= 8 && n(e.options.event + Qg(i))
            }, e.tryEmit = function(t) {
                if (this.canEmit()) return this.emit(t);
                this.state = Zg
            }, e.canEmit = function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(33 & this.requireFail[t].state)) return !1;
                    t++
                }
                return !0
            }, e.recognize = function(t) {
                var e = Hv({}, t);
                if (!cg(this.options.enable, [this, e])) return this.reset(), void(this.state = Zg);
                56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
            }, e.process = function(t) {}, e.getTouchAction = function() {}, e.reset = function() {}, t
        }(),
        ey = function(t) {
            function e(e) { var i; return void 0 === e && (e = {}), (i = t.call(this, Fv({ event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, e)) || this).pTime = !1, i.pCenter = !1, i._timer = null, i._input = null, i.count = 0, i }
            Rv(e, t);
            var i = e.prototype;
            return i.getTouchAction = function() { return [Kv] }, i.process = function(t) {
                var e = this,
                    i = this.options,
                    n = t.pointers.length === i.pointers,
                    o = t.distance < i.threshold,
                    r = t.deltaTime < i.time;
                if (this.reset(), 1 & t.eventType && 0 === this.count) return this.failTimeout();
                if (o && r && n) {
                    if (4 !== t.eventType) return this.failTimeout();
                    var s = !this.pTime || t.timeStamp - this.pTime < i.interval,
                        a = !this.pCenter || yg(this.pCenter, t.center) < i.posThreshold;
                    if (this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % i.taps) return this.hasRequireFailures() ? (this._timer = setTimeout((function() { e.state = 8, e.tryEmit() }), i.interval), 2) : 8
                }
                return Zg
            }, i.failTimeout = function() { var t = this; return this._timer = setTimeout((function() { t.state = Zg }), this.options.interval), Zg }, i.reset = function() { clearTimeout(this._timer) }, i.emit = function() { 8 === this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) }, e
        }(ty),
        iy = function(t) {
            function e(e) { return void 0 === e && (e = {}), t.call(this, Fv({ pointers: 1 }, e)) || this }
            Rv(e, t);
            var i = e.prototype;
            return i.attrTest = function(t) { var e = this.options.pointers; return 0 === e || t.pointers.length === e }, i.process = function(t) {
                var e = this.state,
                    i = t.eventType,
                    n = 6 & e,
                    o = this.attrTest(t);
                return n && (8 & i || !o) ? 16 | e : n || o ? 4 & i ? 8 | e : 2 & e ? 4 | e : 2 : Zg
            }, e
        }(ty);

    function ny(t) { return t === ag ? "down" : 8 === t ? "up" : 2 === t ? "left" : 4 === t ? "right" : "" }
    var oy = function(t) {
            function e(e) { var i; return void 0 === e && (e = {}), (i = t.call(this, Fv({ event: "pan", threshold: 10, pointers: 1, direction: 30 }, e)) || this).pX = null, i.pY = null, i }
            Rv(e, t);
            var i = e.prototype;
            return i.getTouchAction = function() {
                var t = this.options.direction,
                    e = [];
                return 6 & t && e.push(tg), t & lg && e.push(Qv), e
            }, i.directionTest = function(t) {
                var e = this.options,
                    i = !0,
                    n = t.distance,
                    o = t.direction,
                    r = t.deltaX,
                    s = t.deltaY;
                return o & e.direction || (6 & e.direction ? (o = 0 === r ? 1 : r < 0 ? 2 : 4, i = r !== this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? 1 : s < 0 ? 8 : ag, i = s !== this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
            }, i.attrTest = function(t) { return iy.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t)) }, i.emit = function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var i = ny(e.direction);
                i && (e.additionalEvent = this.options.event + i), t.prototype.emit.call(this, e)
            }, e
        }(iy),
        ry = function(t) {
            function e(e) { return void 0 === e && (e = {}), t.call(this, Fv({ event: "swipe", threshold: 10, velocity: .3, direction: 30, pointers: 1 }, e)) || this }
            Rv(e, t);
            var i = e.prototype;
            return i.getTouchAction = function() { return oy.prototype.getTouchAction.call(this) }, i.attrTest = function(e) { var i, n = this.options.direction; return 30 & n ? i = e.overallVelocity : 6 & n ? i = e.overallVelocityX : n & lg && (i = e.overallVelocityY), t.prototype.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers === this.options.pointers && Wv(i) > this.options.velocity && 4 & e.eventType }, i.emit = function(t) {
                var e = ny(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }, e
        }(iy),
        sy = function(t) {
            function e(e) { return void 0 === e && (e = {}), t.call(this, Fv({ event: "pinch", threshold: 0, pointers: 2 }, e)) || this }
            Rv(e, t);
            var i = e.prototype;
            return i.getTouchAction = function() { return [Jv] }, i.attrTest = function(e) { return t.prototype.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state) }, i.emit = function(e) {
                if (1 !== e.scale) {
                    var i = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + i
                }
                t.prototype.emit.call(this, e)
            }, e
        }(iy),
        ay = function(t) {
            function e(e) { return void 0 === e && (e = {}), t.call(this, Fv({ event: "rotate", threshold: 0, pointers: 2 }, e)) || this }
            Rv(e, t);
            var i = e.prototype;
            return i.getTouchAction = function() { return [Jv] }, i.attrTest = function(e) { return t.prototype.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state) }, e
        }(iy),
        ly = function(t) {
            function e(e) { var i; return void 0 === e && (e = {}), (i = t.call(this, Fv({ event: "press", pointers: 1, time: 251, threshold: 9 }, e)) || this)._timer = null, i._input = null, i }
            Rv(e, t);
            var i = e.prototype;
            return i.getTouchAction = function() { return [Zv] }, i.process = function(t) {
                var e = this,
                    i = this.options,
                    n = t.pointers.length === i.pointers,
                    o = t.distance < i.threshold,
                    r = t.deltaTime > i.time;
                if (this._input = t, !o || !n || 12 & t.eventType && !r) this.reset();
                else if (1 & t.eventType) this.reset(), this._timer = setTimeout((function() { e.state = 8, e.tryEmit() }), i.time);
                else if (4 & t.eventType) return 8;
                return Zg
            }, i.reset = function() { clearTimeout(this._timer) }, i.emit = function(t) { 8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = Vv(), this.manager.emit(this.options.event, this._input))) }, e
        }(ty),
        hy = { domEvents: !1, touchAction: $v, enable: !0, inputTarget: null, inputClass: null, cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } },
        uy = [
            [ay, { enable: !1 }],
            [sy, { enable: !1 },
                ["rotate"]
            ],
            [ry, { direction: 6 }],
            [oy, { direction: 6 },
                ["swipe"]
            ],
            [ey],
            [ey, { event: "doubletap", taps: 2 },
                ["tap"]
            ],
            [ly]
        ];

    function dy(t, e) {
        var i, n = t.element;
        n.style && (dg(t.options.cssProps, (function(o, r) { i = Uv(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = t.oldCssProps[i] || "" })), e || (t.oldCssProps = {}))
    }
    var cy = function() {
            function t(t, e) {
                var i, n = this;
                this.options = Hv({}, hy, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((i = this).options.inputClass || (ng ? Lg : og ? Yg : ig ? qg : Wg))(i, xg), this.touchAction = new fg(this, this.options.touchAction), dy(this, !0), dg(this.options.recognizers, (function(t) {
                    var e = n.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }), this)
            }
            var e = t.prototype;
            return e.set = function(t) { return Hv(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this }, e.stop = function(t) { this.session.stopped = t ? 2 : 1 }, e.recognize = function(t) {
                var e = this.session;
                if (!e.stopped) {
                    var i;
                    this.touchAction.preventDefaults(t);
                    var n = this.recognizers,
                        o = e.curRecognizer;
                    (!o || o && 8 & o.state) && (e.curRecognizer = null, o = null);
                    for (var r = 0; r < n.length;) i = n[r], 2 === e.stopped || o && i !== o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && 14 & i.state && (e.curRecognizer = i, o = i), r++
                }
            }, e.get = function(t) {
                if (t instanceof ty) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event === t) return e[i];
                return null
            }, e.add = function(t) { if ($g(t, "add", this)) return this; var e = this.get(t.options.event); return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t }, e.remove = function(t) {
                if ($g(t, "remove", this)) return this;
                var e = this.get(t);
                if (t) {
                    var i = this.recognizers,
                        n = Og(i, e); - 1 !== n && (i.splice(n, 1), this.touchAction.update())
                }
                return this
            }, e.on = function(t, e) { if (void 0 === t || void 0 === e) return this; var i = this.handlers; return dg(Dg(t), (function(t) { i[t] = i[t] || [], i[t].push(e) })), this }, e.off = function(t, e) { if (void 0 === t) return this; var i = this.handlers; return dg(Dg(t), (function(t) { e ? i[t] && i[t].splice(Og(i[t], e), 1) : delete i[t] })), this }, e.emit = function(t, e) {
                this.options.domEvents && function(t, e) {
                    var i = document.createEvent("Event");
                    i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
                }(t, e);
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) { e.type = t, e.preventDefault = function() { e.srcEvent.preventDefault() }; for (var n = 0; n < i.length;) i[n](e), n++ }
            }, e.destroy = function() { this.element && dy(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null }, t
        }(),
        py = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 },
        fy = "touchstart",
        my = "touchstart touchmove touchend touchcancel",
        vy = function(t) {
            function e() { var i, n = e.prototype; return n.evTarget = fy, n.evWin = my, (i = t.apply(this, arguments) || this).started = !1, i }
            return Rv(e, t), e.prototype.handler = function(t) {
                var e = py[t.type];
                if (1 === e && (this.started = !0), this.started) {
                    var i = gy.call(this, t, e);
                    12 & e && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: rg, srcEvent: t })
                }
            }, e
        }(Mg);

    function gy(t, e) {
        var i = Ng(t.touches),
            n = Ng(t.changedTouches);
        return 12 & e && (i = Fg(i.concat(n), "identifier", !0)), [i, n]
    }

    function yy(t, e, i) {
        var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
        return function() {
            var e = new Error("get-stack-trace"),
                i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                o = window.console && (window.console.warn || window.console.log);
            return o && o.call(window.console, n, i), t.apply(this, arguments)
        }
    }
    var by = yy((function(t, e, i) { for (var n = Object.keys(e), o = 0; o < n.length;)(!i || i && void 0 === t[n[o]]) && (t[n[o]] = e[n[o]]), o++; return t }), "extend", "Use `assign`."),
        _y = yy((function(t, e) { return by(t, e, !0) }), "merge", "Use `assign`.");

    function wy(t, e, i) {
        var n, o = e.prototype;
        (n = t.prototype = Object.create(o)).constructor = t, n._super = o, i && Hv(n, i)
    }

    function ky(t, e) { return function() { return t.apply(e, arguments) } }
    var xy = function() { var t = function(t, e) { return void 0 === e && (e = {}), new cy(t, Fv({ recognizers: uy.concat() }, e)) }; return t.VERSION = "2.0.17-rc", t.DIRECTION_ALL = 30, t.DIRECTION_DOWN = ag, t.DIRECTION_LEFT = 2, t.DIRECTION_RIGHT = 4, t.DIRECTION_UP = 8, t.DIRECTION_HORIZONTAL = 6, t.DIRECTION_VERTICAL = lg, t.DIRECTION_NONE = 1, t.DIRECTION_DOWN = ag, t.INPUT_START = 1, t.INPUT_MOVE = 2, t.INPUT_END = 4, t.INPUT_CANCEL = 8, t.STATE_POSSIBLE = 1, t.STATE_BEGAN = 2, t.STATE_CHANGED = 4, t.STATE_ENDED = 8, t.STATE_RECOGNIZED = 8, t.STATE_CANCELLED = 16, t.STATE_FAILED = Zg, t.Manager = cy, t.Input = Mg, t.TouchAction = fg, t.TouchInput = Yg, t.MouseInput = Wg, t.PointerEventInput = Lg, t.TouchMouseInput = qg, t.SingleTouchInput = vy, t.Recognizer = ty, t.AttrRecognizer = iy, t.Tap = ey, t.Pan = oy, t.Swipe = ry, t.Pinch = sy, t.Rotate = ay, t.Press = ly, t.on = Sg, t.off = Cg, t.each = dg, t.merge = _y, t.extend = by, t.bindFn = ky, t.assign = Hv, t.inherit = wy, t.bindFn = ky, t.prefixed = Uv, t.toArray = Ng, t.inArray = Og, t.uniqueArray = Fg, t.splitStr = Dg, t.boolOrFn = cg, t.hasParent = mg, t.addEventListeners = Sg, t.removeEventListeners = Cg, t.defaults = Hv({}, hy, { preset: uy }), t }();

    function Dy(t, e) {
        var i = pc(t);
        if (Mh) {
            var n = Mh(t);
            e && (n = Af(n).call(n, (function(e) { return Hh(t, e).enumerable }))), i.push.apply(i, n)
        }
        return i
    }

    function Sy(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i, n, o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? tp(i = Dy(Object(o), !0)).call(i, (function(e) { Du(t, e, o[e]) })) : Qh ? lu(t, Qh(o)) : tp(n = Dy(Object(o))).call(n, (function(e) { gu(t, e, Hh(o, e)) }))
        }
        return t
    }

    function Cy(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return Ty(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ty(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function Ty(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }
    xy.defaults;
    var My = Hd("DELETE");

    function Oy(t) { for (var e, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o]; return Ey.apply(void 0, Xd(e = [{}, t]).call(e, n)) }

    function Ey() { var t = Py.apply(void 0, arguments); return Iy(t), t }

    function Py() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        if (e.length < 2) return e[0];
        var n;
        if (e.length > 2) return Py.apply(void 0, Xd(n = [Ey(e[0], e[1])]).call(n, jd($d(e).call(e, 2))));
        var o, r = e[0],
            s = e[1],
            a = Cy(Jd(s));
        try {
            for (a.s(); !(o = a.n()).done;) {
                var l = o.value;
                Object.prototype.propertyIsEnumerable.call(s, l) && (s[l] === My ? delete r[l] : null === r[l] || null === s[l] || "object" !== Rd(r[l]) || "object" !== Rd(s[l]) || tc(r[l]) || tc(s[l]) ? r[l] = Ay(s[l]) : r[l] = Py(r[l], s[l]))
            }
        } catch (t) { a.e(t) } finally { a.f() }
        return r
    }

    function Ay(t) { return tc(t) ? lc(t).call(t, (function(t) { return Ay(t) })) : "object" === Rd(t) && null !== t ? Py({}, t) : t }

    function Iy(t) {
        for (var e = 0, i = pc(t); e < i.length; e++) {
            var n = i[e];
            t[n] === My ? delete t[n] : "object" === Rd(t[n]) && null !== t[n] && Iy(t[n])
        }
    }

    function Ly(t) {
        var e = Ad(function() { for (var t = Ny(), e = t(" "), i = t(" "), n = t(" "), o = 0; o < arguments.length; o++)(e -= t(o < 0 || arguments.length <= o ? void 0 : arguments[o])) < 0 && (e += 1), (i -= t(o < 0 || arguments.length <= o ? void 0 : arguments[o])) < 0 && (i += 1), (n -= t(o < 0 || arguments.length <= o ? void 0 : arguments[o])) < 0 && (n += 1); return [e, i, n] }(t), 3),
            i = e[0],
            n = e[1],
            o = e[2],
            r = 1,
            s = function() { var t = 2091639 * i + 2.3283064365386963e-10 * r; return i = n, n = o, o = t - (r = 0 | t) };
        return s.uint32 = function() { return 4294967296 * s() }, s.fract53 = function() { return s() + 11102230246251565e-32 * (2097152 * s() | 0) }, s.algorithm = "Alea", s.seed = t, s.version = "0.9", s
    }

    function Ny() {
        var t = 4022871197;
        return function(e) {
            for (var i = e.toString(), n = 0; n < i.length; n++) {
                var o = .02519603282416938 * (t += i.charCodeAt(n));
                o -= t = o >>> 0, t = (o *= t) >>> 0, t += 4294967296 * (o -= t)
            }
            return 2.3283064365386963e-10 * (t >>> 0)
        }
    }
    var Fy = "undefined" != typeof window ? window.Hammer || xy : function() { return function() { var t = function() {}; return { on: t, off: t, destroy: t, emit: t, get: function() { return { set: t } } } }() };

    function Ry(t) {
        var e, i = this;
        this._cleanupQueue = [], this.active = !1, this._dom = { container: t, overlay: document.createElement("div") }, this._dom.overlay.classList.add("vis-overlay"), this._dom.container.appendChild(this._dom.overlay), this._cleanupQueue.push((function() { i._dom.overlay.parentNode.removeChild(i._dom.overlay) }));
        var n = Fy(this._dom.overlay);
        n.on("tap", Hc(e = this._onTapOverlay).call(e, this)), this._cleanupQueue.push((function() { n.destroy() }));
        var o = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
        tp(o).call(o, (function(t) { n.on(t, (function(t) { t.srcEvent.stopPropagation() })) })), document && document.body && (this._onClick = function(e) {
            (function(t, e) {
                for (; t;) {
                    if (t === e) return !0;
                    t = t.parentNode
                }
                return !1
            })(e.target, t) || i.deactivate()
        }, document.body.addEventListener("click", this._onClick), this._cleanupQueue.push((function() { document.body.removeEventListener("click", i._onClick) }))), this._escListener = function(t) {
            ("key" in t ? "Escape" === t.key : 27 === t.keyCode) && i.deactivate()
        }
    }
    Nv(Ry.prototype), Ry.current = null, Ry.prototype.destroy = function() {
        var t, e;
        this.deactivate();
        var i, n = Cy(dp(t = Ap(e = this._cleanupQueue).call(e, 0)).call(t));
        try {
            for (n.s(); !(i = n.n()).done;) {
                (0, i.value)()
            }
        } catch (t) { n.e(t) } finally { n.f() }
    }, Ry.prototype.activate = function() { Ry.current && Ry.current.deactivate(), Ry.current = this, this.active = !0, this._dom.overlay.style.display = "none", this._dom.container.classList.add("vis-active"), this.emit("change"), this.emit("activate"), document.body.addEventListener("keydown", this._escListener) }, Ry.prototype.deactivate = function() { this.active = !1, this._dom.overlay.style.display = "block", this._dom.container.classList.remove("vis-active"), document.body.removeEventListener("keydown", this._escListener), this.emit("change"), this.emit("deactivate") }, Ry.prototype._onTapOverlay = function(t) { this.activate(), t.srcEvent.stopPropagation() };
    var jy = /^\/?Date\((-?\d+)/i,
        Yy = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        Hy = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        zy = /^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i,
        By = /^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;

    function Gy(t) { return t instanceof Number || "number" == typeof t }

    function Wy(t) { return t instanceof String || "string" == typeof t }

    function Vy(t) { return "object" === Rd(t) && null !== t }

    function Uy(t, e, i, n) { var o = !1;!0 === n && (o = null === e[i] && void 0 !== t[i]), o ? delete t[i] : t[i] = e[i] }
    var Xy = qp;

    function qy(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o) || !0 === i)
                if ("object" === Rd(e[o]) && null !== e[o] && Df(e[o]) === Object.prototype) void 0 === t[o] ? t[o] = qy({}, e[o], i) : "object" === Rd(t[o]) && null !== t[o] && Df(t[o]) === Object.prototype ? qy(t[o], e[o], i) : Uy(t, e, o, n);
                else if (tc(e[o])) {
            var r;
            t[o] = $d(r = e[o]).call(r)
        } else Uy(t, e, o, n);
        return t
    }

    function $y(t) { var e = Rd(t); return "object" === e ? null === t ? "null" : t instanceof Boolean ? "Boolean" : t instanceof Number ? "Number" : t instanceof String ? "String" : tc(t) ? "Array" : t instanceof Date ? "Date" : "Object" : "number" === e ? "Number" : "boolean" === e ? "Boolean" : "string" === e ? "String" : void 0 === e ? "undefined" : e }

    function Zy(t, e) { var i; return Xd(i = []).call(i, jd(t), [e]) }

    function Ky(t) { return $d(t).call(t) }
    var Jy = Gf;
    var Qy = { asBoolean: function(t, e) { return "function" == typeof t && (t = t()), null != t ? 0 != t : e || null }, asNumber: function(t, e) { return "function" == typeof t && (t = t()), null != t ? Number(t) || e || null : e || null }, asString: function(t, e) { return "function" == typeof t && (t = t()), null != t ? String(t) : e || null }, asSize: function(t, e) { return "function" == typeof t && (t = t()), Wy(t) ? t : Gy(t) ? t + "px" : e || null }, asElement: function(t, e) { return "function" == typeof t && (t = t()), t || e || null } };

    function tb(t) {
        var e;
        switch (t.length) {
            case 3:
            case 4:
                return (e = Hy.exec(t)) ? { r: pm(e[1] + e[1], 16), g: pm(e[2] + e[2], 16), b: pm(e[3] + e[3], 16) } : null;
            case 6:
            case 7:
                return (e = Yy.exec(t)) ? { r: pm(e[1], 16), g: pm(e[2], 16), b: pm(e[3], 16) } : null;
            default:
                return null
        }
    }

    function eb(t, e, i) { var n; return "#" + $d(n = ((1 << 24) + (t << 16) + (e << 8) + i).toString(16)).call(n, 1) }

    function ib(t, e, i) {
        t /= 255, e /= 255, i /= 255;
        var n = Math.min(t, Math.min(e, i)),
            o = Math.max(t, Math.max(e, i));
        return n === o ? { h: 0, s: 0, v: n } : { h: 60 * ((t === n ? 3 : i === n ? 1 : 5) - (t === n ? e - i : i === n ? t - e : i - t) / (o - n)) / 360, s: (o - n) / o, v: o }
    }
    var nb = function(t) {
            var e, i = {};
            return tp(e = t.split(";")).call(e, (function(t) {
                if ("" != Rm(t).call(t)) {
                    var e, n, o = t.split(":"),
                        r = Rm(e = o[0]).call(e),
                        s = Rm(n = o[1]).call(n);
                    i[r] = s
                }
            })), i
        },
        ob = function(t) { var e; return lc(e = pc(t)).call(e, (function(e) { return e + ": " + t[e] })).join("; ") };

    function rb(t, e, i) {
        var n, o, r, s = Math.floor(6 * t),
            a = 6 * t - s,
            l = i * (1 - e),
            h = i * (1 - a * e),
            u = i * (1 - (1 - a) * e);
        switch (s % 6) {
            case 0:
                n = i, o = u, r = l;
                break;
            case 1:
                n = h, o = i, r = l;
                break;
            case 2:
                n = l, o = i, r = u;
                break;
            case 3:
                n = l, o = h, r = i;
                break;
            case 4:
                n = u, o = l, r = i;
                break;
            case 5:
                n = i, o = l, r = h
        }
        return { r: Math.floor(255 * n), g: Math.floor(255 * o), b: Math.floor(255 * r) }
    }

    function sb(t, e, i) { var n = rb(t, e, i); return eb(n.r, n.g, n.b) }

    function ab(t) { var e = tb(t); if (!e) throw new TypeError("'".concat(t, "' is not a valid color.")); return ib(e.r, e.g, e.b) }

    function lb(t) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t) }

    function hb(t) { return zy.test(t) }

    function ub(t) { return By.test(t) }

    function db(t) { if (null === t || "object" !== Rd(t)) return null; if (t instanceof Element) return t; var e = zm(t); for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && "object" == Rd(t[i]) && (e[i] = db(t[i])); return e }
    var cb = { black: "#000000", navy: "#000080", darkblue: "#00008B", mediumblue: "#0000CD", blue: "#0000FF", darkgreen: "#006400", green: "#008000", teal: "#008080", darkcyan: "#008B8B", deepskyblue: "#00BFFF", darkturquoise: "#00CED1", mediumspringgreen: "#00FA9A", lime: "#00FF00", springgreen: "#00FF7F", aqua: "#00FFFF", cyan: "#00FFFF", midnightblue: "#191970", dodgerblue: "#1E90FF", lightseagreen: "#20B2AA", forestgreen: "#228B22", seagreen: "#2E8B57", darkslategray: "#2F4F4F", limegreen: "#32CD32", mediumseagreen: "#3CB371", turquoise: "#40E0D0", royalblue: "#4169E1", steelblue: "#4682B4", darkslateblue: "#483D8B", mediumturquoise: "#48D1CC", indigo: "#4B0082", darkolivegreen: "#556B2F", cadetblue: "#5F9EA0", cornflowerblue: "#6495ED", mediumaquamarine: "#66CDAA", dimgray: "#696969", slateblue: "#6A5ACD", olivedrab: "#6B8E23", slategray: "#708090", lightslategray: "#778899", mediumslateblue: "#7B68EE", lawngreen: "#7CFC00", chartreuse: "#7FFF00", aquamarine: "#7FFFD4", maroon: "#800000", purple: "#800080", olive: "#808000", gray: "#808080", skyblue: "#87CEEB", lightskyblue: "#87CEFA", blueviolet: "#8A2BE2", darkred: "#8B0000", darkmagenta: "#8B008B", saddlebrown: "#8B4513", darkseagreen: "#8FBC8F", lightgreen: "#90EE90", mediumpurple: "#9370D8", darkviolet: "#9400D3", palegreen: "#98FB98", darkorchid: "#9932CC", yellowgreen: "#9ACD32", sienna: "#A0522D", brown: "#A52A2A", darkgray: "#A9A9A9", lightblue: "#ADD8E6", greenyellow: "#ADFF2F", paleturquoise: "#AFEEEE", lightsteelblue: "#B0C4DE", powderblue: "#B0E0E6", firebrick: "#B22222", darkgoldenrod: "#B8860B", mediumorchid: "#BA55D3", rosybrown: "#BC8F8F", darkkhaki: "#BDB76B", silver: "#C0C0C0", mediumvioletred: "#C71585", indianred: "#CD5C5C", peru: "#CD853F", chocolate: "#D2691E", tan: "#D2B48C", lightgrey: "#D3D3D3", palevioletred: "#D87093", thistle: "#D8BFD8", orchid: "#DA70D6", goldenrod: "#DAA520", crimson: "#DC143C", gainsboro: "#DCDCDC", plum: "#DDA0DD", burlywood: "#DEB887", lightcyan: "#E0FFFF", lavender: "#E6E6FA", darksalmon: "#E9967A", violet: "#EE82EE", palegoldenrod: "#EEE8AA", lightcoral: "#F08080", khaki: "#F0E68C", aliceblue: "#F0F8FF", honeydew: "#F0FFF0", azure: "#F0FFFF", sandybrown: "#F4A460", wheat: "#F5DEB3", beige: "#F5F5DC", whitesmoke: "#F5F5F5", mintcream: "#F5FFFA", ghostwhite: "#F8F8FF", salmon: "#FA8072", antiquewhite: "#FAEBD7", linen: "#FAF0E6", lightgoldenrodyellow: "#FAFAD2", oldlace: "#FDF5E6", red: "#FF0000", fuchsia: "#FF00FF", magenta: "#FF00FF", deeppink: "#FF1493", orangered: "#FF4500", tomato: "#FF6347", hotpink: "#FF69B4", coral: "#FF7F50", darkorange: "#FF8C00", lightsalmon: "#FFA07A", orange: "#FFA500", lightpink: "#FFB6C1", pink: "#FFC0CB", gold: "#FFD700", peachpuff: "#FFDAB9", navajowhite: "#FFDEAD", moccasin: "#FFE4B5", bisque: "#FFE4C4", mistyrose: "#FFE4E1", blanchedalmond: "#FFEBCD", papayawhip: "#FFEFD5", lavenderblush: "#FFF0F5", seashell: "#FFF5EE", cornsilk: "#FFF8DC", lemonchiffon: "#FFFACD", floralwhite: "#FFFAF0", snow: "#FFFAFA", yellow: "#FFFF00", lightyellow: "#FFFFE0", ivory: "#FFFFF0", white: "#FFFFFF" },
        pb = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                yu(this, t), this.pixelRatio = e, this.generated = !1, this.centerCoordinates = { x: 144.5, y: 144.5 }, this.r = 289 * .49, this.color = { r: 255, g: 255, b: 255, a: 1 }, this.hueCircle = void 0, this.initialColor = { r: 255, g: 255, b: 255, a: 1 }, this.previousColor = void 0, this.applied = !1, this.updateCallback = function() {}, this.closeCallback = function() {}, this._create()
            }
            return xu(t, [{ key: "insertTo", value: function(t) { void 0 !== this.hammer && (this.hammer.destroy(), this.hammer = void 0), this.container = t, this.container.appendChild(this.frame), this._bindHammer(), this._setSize() } }, {
                key: "setUpdateCallback",
                value: function(t) {
                    if ("function" != typeof t) throw new Error("Function attempted to set as colorPicker update callback is not a function.");
                    this.updateCallback = t
                }
            }, {
                key: "setCloseCallback",
                value: function(t) {
                    if ("function" != typeof t) throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
                    this.closeCallback = t
                }
            }, { key: "_isColorString", value: function(t) { if ("string" == typeof t) return cb[t] } }, {
                key: "setColor",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if ("none" !== t) {
                        var i, n = this._isColorString(t);
                        if (void 0 !== n && (t = n), !0 === Wy(t)) {
                            if (!0 === hb(t)) {
                                var o = t.substr(4).substr(0, t.length - 5).split(",");
                                i = { r: o[0], g: o[1], b: o[2], a: 1 }
                            } else if (!0 === ub(t)) {
                                var r = t.substr(5).substr(0, t.length - 6).split(",");
                                i = { r: r[0], g: r[1], b: r[2], a: r[3] }
                            } else if (!0 === lb(t)) {
                                var s = tb(t);
                                i = { r: s.r, g: s.g, b: s.b, a: 1 }
                            }
                        } else if (t instanceof Object && void 0 !== t.r && void 0 !== t.g && void 0 !== t.b) {
                            var a = void 0 !== t.a ? t.a : "1.0";
                            i = { r: t.r, g: t.g, b: t.b, a: a }
                        }
                        if (void 0 === i) throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + hv(t));
                        this._setColor(i, e)
                    }
                }
            }, { key: "show", value: function() { void 0 !== this.closeCallback && (this.closeCallback(), this.closeCallback = void 0), this.applied = !1, this.frame.style.display = "block", this._generateHueCircle() } }, {
                key: "_hide",
                value: function() {
                    var t = this,
                        e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    !0 === e && (this.previousColor = qp({}, this.color)), !0 === this.applied && this.updateCallback(this.initialColor), this.frame.style.display = "none", xv((function() { void 0 !== t.closeCallback && (t.closeCallback(), t.closeCallback = void 0) }), 0)
                }
            }, { key: "_save", value: function() { this.updateCallback(this.color), this.applied = !1, this._hide() } }, { key: "_apply", value: function() { this.applied = !0, this.updateCallback(this.color), this._updatePicker(this.color) } }, { key: "_loadLast", value: function() { void 0 !== this.previousColor ? this.setColor(this.previousColor, !1) : alert("There is no last color to load...") } }, {
                key: "_setColor",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    !0 === e && (this.initialColor = qp({}, t)), this.color = t;
                    var i = ib(t.r, t.g, t.b),
                        n = 2 * Math.PI,
                        o = this.r * i.s,
                        r = this.centerCoordinates.x + o * Math.sin(n * i.h),
                        s = this.centerCoordinates.y + o * Math.cos(n * i.h);
                    this.colorPickerSelector.style.left = r - .5 * this.colorPickerSelector.clientWidth + "px", this.colorPickerSelector.style.top = s - .5 * this.colorPickerSelector.clientHeight + "px", this._updatePicker(t)
                }
            }, { key: "_setOpacity", value: function(t) { this.color.a = t / 100, this._updatePicker(this.color) } }, {
                key: "_setBrightness",
                value: function(t) {
                    var e = ib(this.color.r, this.color.g, this.color.b);
                    e.v = t / 100;
                    var i = rb(e.h, e.s, e.v);
                    i.a = this.color.a, this.color = i, this._updatePicker()
                }
            }, {
                key: "_updatePicker",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.color,
                        e = ib(t.r, t.g, t.b),
                        i = this.colorPickerCanvas.getContext("2d");
                    void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1)), i.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                    var n = this.colorPickerCanvas.clientWidth,
                        o = this.colorPickerCanvas.clientHeight;
                    i.clearRect(0, 0, n, o), i.putImageData(this.hueCircle, 0, 0), i.fillStyle = "rgba(0,0,0," + (1 - e.v) + ")", i.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), Iv(i).call(i), this.brightnessRange.value = 100 * e.v, this.opacityRange.value = 100 * t.a, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
                }
            }, { key: "_setSize", value: function() { this.colorPickerCanvas.style.width = "100%", this.colorPickerCanvas.style.height = "100%", this.colorPickerCanvas.width = 289 * this.pixelRatio, this.colorPickerCanvas.height = 289 * this.pixelRatio } }, {
                key: "_create",
                value: function() {
                    var t, e, i, n;
                    if (this.frame = document.createElement("div"), this.frame.className = "vis-color-picker", this.colorPickerDiv = document.createElement("div"), this.colorPickerSelector = document.createElement("div"), this.colorPickerSelector.className = "vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas = document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), this.colorPickerCanvas.getContext) {
                        var o = this.colorPickerCanvas.getContext("2d");
                        this.pixelRatio = (window.devicePixelRatio || 1) / (o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1), this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
                    } else {
                        var r = document.createElement("DIV");
                        r.style.color = "red", r.style.fontWeight = "bold", r.style.padding = "10px", r.innerText = "Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(r)
                    }
                    this.colorPickerDiv.className = "vis-color", this.opacityDiv = document.createElement("div"), this.opacityDiv.className = "vis-opacity", this.brightnessDiv = document.createElement("div"), this.brightnessDiv.className = "vis-brightness", this.arrowDiv = document.createElement("div"), this.arrowDiv.className = "vis-arrow", this.opacityRange = document.createElement("input");
                    try { this.opacityRange.type = "range", this.opacityRange.min = "0", this.opacityRange.max = "100" } catch (t) {}
                    this.opacityRange.value = "100", this.opacityRange.className = "vis-range", this.brightnessRange = document.createElement("input");
                    try { this.brightnessRange.type = "range", this.brightnessRange.min = "0", this.brightnessRange.max = "100" } catch (t) {}
                    this.brightnessRange.value = "100", this.brightnessRange.className = "vis-range", this.opacityDiv.appendChild(this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange);
                    var s = this;
                    this.opacityRange.onchange = function() { s._setOpacity(this.value) }, this.opacityRange.oninput = function() { s._setOpacity(this.value) }, this.brightnessRange.onchange = function() { s._setBrightness(this.value) }, this.brightnessRange.oninput = function() { s._setBrightness(this.value) }, this.brightnessLabel = document.createElement("div"), this.brightnessLabel.className = "vis-label vis-brightness", this.brightnessLabel.innerText = "brightness:", this.opacityLabel = document.createElement("div"), this.opacityLabel.className = "vis-label vis-opacity", this.opacityLabel.innerText = "opacity:", this.newColorDiv = document.createElement("div"), this.newColorDiv.className = "vis-new-color", this.newColorDiv.innerText = "new", this.initialColorDiv = document.createElement("div"), this.initialColorDiv.className = "vis-initial-color", this.initialColorDiv.innerText = "initial", this.cancelButton = document.createElement("div"), this.cancelButton.className = "vis-button vis-cancel", this.cancelButton.innerText = "cancel", this.cancelButton.onclick = Hc(t = this._hide).call(t, this, !1), this.applyButton = document.createElement("div"), this.applyButton.className = "vis-button vis-apply", this.applyButton.innerText = "apply", this.applyButton.onclick = Hc(e = this._apply).call(e, this), this.saveButton = document.createElement("div"), this.saveButton.className = "vis-button vis-save", this.saveButton.innerText = "save", this.saveButton.onclick = Hc(i = this._save).call(i, this), this.loadButton = document.createElement("div"), this.loadButton.className = "vis-button vis-load", this.loadButton.innerText = "load last", this.loadButton.onclick = Hc(n = this._loadLast).call(n, this), this.frame.appendChild(this.colorPickerDiv), this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv), this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this.frame.appendChild(this.loadButton)
                }
            }, {
                key: "_bindHammer",
                value: function() {
                    var t = this;
                    this.drag = {}, this.pinch = {}, this.hammer = new Fy(this.colorPickerCanvas), this.hammer.get("pinch").set({ enable: !0 }), this.hammer.on("hammer.input", (function(e) { e.isFirst && t._moveSelector(e) })), this.hammer.on("tap", (function(e) { t._moveSelector(e) })), this.hammer.on("panstart", (function(e) { t._moveSelector(e) })), this.hammer.on("panmove", (function(e) { t._moveSelector(e) })), this.hammer.on("panend", (function(e) { t._moveSelector(e) }))
                }
            }, {
                key: "_generateHueCircle",
                value: function() {
                    if (!1 === this.generated) {
                        var t = this.colorPickerCanvas.getContext("2d");
                        void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)), t.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                        var e, i, n, o, r = this.colorPickerCanvas.clientWidth,
                            s = this.colorPickerCanvas.clientHeight;
                        t.clearRect(0, 0, r, s), this.centerCoordinates = { x: .5 * r, y: .5 * s }, this.r = .49 * r;
                        var a, l = 2 * Math.PI / 360,
                            h = 1 / this.r;
                        for (n = 0; n < 360; n++)
                            for (o = 0; o < this.r; o++) e = this.centerCoordinates.x + o * Math.sin(l * n), i = this.centerCoordinates.y + o * Math.cos(l * n), a = rb(.002777777777777778 * n, o * h, 1), t.fillStyle = "rgb(" + a.r + "," + a.g + "," + a.b + ")", t.fillRect(e - .5, i - .5, 2, 2);
                        t.strokeStyle = "rgba(0,0,0,1)", t.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), t.stroke(), this.hueCircle = t.getImageData(0, 0, r, s)
                    }
                    this.generated = !0
                }
            }, {
                key: "_moveSelector",
                value: function(t) {
                    var e = this.colorPickerDiv.getBoundingClientRect(),
                        i = t.center.x - e.left,
                        n = t.center.y - e.top,
                        o = .5 * this.colorPickerDiv.clientHeight,
                        r = .5 * this.colorPickerDiv.clientWidth,
                        s = i - r,
                        a = n - o,
                        l = Math.atan2(s, a),
                        h = .98 * Math.min(Math.sqrt(s * s + a * a), r),
                        u = Math.cos(l) * h + o,
                        d = Math.sin(l) * h + r;
                    this.colorPickerSelector.style.top = u - .5 * this.colorPickerSelector.clientHeight + "px", this.colorPickerSelector.style.left = d - .5 * this.colorPickerSelector.clientWidth + "px";
                    var c = l / (2 * Math.PI);
                    c = c < 0 ? c + 1 : c;
                    var p = h / this.r,
                        f = ib(this.color.r, this.color.g, this.color.b);
                    f.h = c, f.s = p;
                    var m = rb(f.h, f.s, f.v);
                    m.a = this.color.a, this.color = m, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
                }
            }]), t
        }();

    function fb() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]; if (e.length < 1) throw new TypeError("Invalid arguments."); if (1 === e.length) return document.createTextNode(e[0]); var n = document.createElement(e[0]); return n.appendChild(fb.apply(void 0, jd($d(e).call(e, 1)))), n }
    var mb, vb = function() {
            function t(e, i, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() { return !1 };
                yu(this, t), this.parent = e, this.changedOptions = [], this.container = i, this.allowCreation = !1, this.hideOption = r, this.options = {}, this.initialized = !1, this.popupCounter = 0, this.defaultOptions = { enabled: !1, filter: !0, container: void 0, showButton: !0 }, qp(this.options, this.defaultOptions), this.configureOptions = n, this.moduleOptions = {}, this.domElements = [], this.popupDiv = {}, this.popupLimit = 5, this.popupHistory = {}, this.colorPicker = new pb(o), this.wrapper = void 0
            }
            return xu(t, [{
                key: "setOptions",
                value: function(t) {
                    if (void 0 !== t) {
                        this.popupHistory = {}, this._removePopup();
                        var e = !0;
                        if ("string" == typeof t) this.options.filter = t;
                        else if (tc(t)) this.options.filter = t.join();
                        else if ("object" === Rd(t)) {
                            if (null == t) throw new TypeError("options cannot be null");
                            void 0 !== t.container && (this.options.container = t.container), void 0 !== Af(t) && (this.options.filter = Af(t)), void 0 !== t.showButton && (this.options.showButton = t.showButton), void 0 !== t.enabled && (e = t.enabled)
                        } else "boolean" == typeof t ? (this.options.filter = !0, e = t) : "function" == typeof t && (this.options.filter = t, e = !0);
                        !1 === Af(this.options) && (e = !1), this.options.enabled = e
                    }
                    this._clean()
                }
            }, { key: "setModuleOptions", value: function(t) { this.moduleOptions = t, !0 === this.options.enabled && (this._clean(), void 0 !== this.options.container && (this.container = this.options.container), this._create()) } }, {
                key: "_create",
                value: function() {
                    this._clean(), this.changedOptions = [];
                    var t = Af(this.options),
                        e = 0,
                        i = !1;
                    for (var n in this.configureOptions) Object.prototype.hasOwnProperty.call(this.configureOptions, n) && (this.allowCreation = !1, i = !1, "function" == typeof t ? i = (i = t(n, [])) || this._handleObject(this.configureOptions[n], [n], !0) : !0 !== t && -1 === Cm(t).call(t, n) || (i = !0), !1 !== i && (this.allowCreation = !0, e > 0 && this._makeItem([]), this._makeHeader(n), this._handleObject(this.configureOptions[n], [n])), e++);
                    this._makeButton(), this._push()
                }
            }, {
                key: "_push",
                value: function() {
                    this.wrapper = document.createElement("div"), this.wrapper.className = "vis-configuration-wrapper", this.container.appendChild(this.wrapper);
                    for (var t = 0; t < this.domElements.length; t++) this.wrapper.appendChild(this.domElements[t]);
                    this._showPopupIfNeeded()
                }
            }, {
                key: "_clean",
                value: function() {
                    for (var t = 0; t < this.domElements.length; t++) this.wrapper.removeChild(this.domElements[t]);
                    void 0 !== this.wrapper && (this.container.removeChild(this.wrapper), this.wrapper = void 0), this.domElements = [], this._removePopup()
                }
            }, {
                key: "_getValue",
                value: function(t) {
                    for (var e = this.moduleOptions, i = 0; i < t.length; i++) {
                        if (void 0 === e[t[i]]) { e = void 0; break }
                        e = e[t[i]]
                    }
                    return e
                }
            }, {
                key: "_makeItem",
                value: function(t) {
                    if (!0 === this.allowCreation) {
                        var e = document.createElement("div");
                        e.className = "vis-configuration vis-config-item vis-config-s" + t.length;
                        for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                        return tp(n).call(n, (function(t) { e.appendChild(t) })), this.domElements.push(e), this.domElements.length
                    }
                    return 0
                }
            }, {
                key: "_makeHeader",
                value: function(t) {
                    var e = document.createElement("div");
                    e.className = "vis-configuration vis-config-header", e.innerText = t, this._makeItem([], e)
                }
            }, {
                key: "_makeLabel",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = document.createElement("div");
                    if (n.className = "vis-configuration vis-config-label vis-config-s" + e.length, !0 === i) {
                        for (; n.firstChild;) n.removeChild(n.firstChild);
                        n.appendChild(fb("i", "b", t))
                    } else n.innerText = t + ":";
                    return n
                }
            }, {
                key: "_makeDropdown",
                value: function(t, e, i) {
                    var n = document.createElement("select");
                    n.className = "vis-configuration vis-config-select";
                    var o = 0;
                    void 0 !== e && -1 !== Cm(t).call(t, e) && (o = Cm(t).call(t, e));
                    for (var r = 0; r < t.length; r++) {
                        var s = document.createElement("option");
                        s.value = t[r], r === o && (s.selected = "selected"), s.innerText = t[r], n.appendChild(s)
                    }
                    var a = this;
                    n.onchange = function() { a._update(this.value, i) };
                    var l = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, l, n)
                }
            }, {
                key: "_makeRange",
                value: function(t, e, i) {
                    var n = t[0],
                        o = t[1],
                        r = t[2],
                        s = t[3],
                        a = document.createElement("input");
                    a.className = "vis-configuration vis-config-range";
                    try { a.type = "range", a.min = o, a.max = r } catch (t) {}
                    a.step = s;
                    var l = "",
                        h = 0;
                    if (void 0 !== e) {
                        var u = 1.2;
                        e < 0 && e * u < o ? (a.min = Math.ceil(e * u), h = a.min, l = "range increased") : e / u < o && (a.min = Math.ceil(e / u), h = a.min, l = "range increased"), e * u > r && 1 !== r && (a.max = Math.ceil(e * u), h = a.max, l = "range increased"), a.value = e
                    } else a.value = n;
                    var d = document.createElement("input");
                    d.className = "vis-configuration vis-config-rangeinput", d.value = a.value;
                    var c = this;
                    a.onchange = function() { d.value = this.value, c._update(Number(this.value), i) }, a.oninput = function() { d.value = this.value };
                    var p = this._makeLabel(i[i.length - 1], i),
                        f = this._makeItem(i, p, a, d);
                    "" !== l && this.popupHistory[f] !== h && (this.popupHistory[f] = h, this._setupPopup(l, f))
                }
            }, {
                key: "_makeButton",
                value: function() {
                    var t = this;
                    if (!0 === this.options.showButton) {
                        var e = document.createElement("div");
                        e.className = "vis-configuration vis-config-button", e.innerText = "generate options", e.onclick = function() { t._printOptions() }, e.onmouseover = function() { e.className = "vis-configuration vis-config-button hover" }, e.onmouseout = function() { e.className = "vis-configuration vis-config-button" }, this.optionsContainer = document.createElement("div"), this.optionsContainer.className = "vis-configuration vis-config-option-container", this.domElements.push(this.optionsContainer), this.domElements.push(e)
                    }
                }
            }, {
                key: "_setupPopup",
                value: function(t, e) {
                    var i = this;
                    if (!0 === this.initialized && !0 === this.allowCreation && this.popupCounter < this.popupLimit) {
                        var n = document.createElement("div");
                        n.id = "vis-configuration-popup", n.className = "vis-configuration-popup", n.innerText = t, n.onclick = function() { i._removePopup() }, this.popupCounter += 1, this.popupDiv = { html: n, index: e }
                    }
                }
            }, { key: "_removePopup", value: function() { void 0 !== this.popupDiv.html && (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv = {}) } }, {
                key: "_showPopupIfNeeded",
                value: function() {
                    var t = this;
                    if (void 0 !== this.popupDiv.html) {
                        var e = this.domElements[this.popupDiv.index].getBoundingClientRect();
                        this.popupDiv.html.style.left = e.left + "px", this.popupDiv.html.style.top = e.top - 30 + "px", document.body.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout = xv((function() { t.popupDiv.html.style.opacity = 0 }), 1500), this.popupDiv.deleteTimeout = xv((function() { t._removePopup() }), 1800)
                    }
                }
            }, {
                key: "_makeCheckbox",
                value: function(t, e, i) {
                    var n = document.createElement("input");
                    n.type = "checkbox", n.className = "vis-configuration vis-config-checkbox", n.checked = t, void 0 !== e && (n.checked = e, e !== t && ("object" === Rd(t) ? e !== t.enabled && this.changedOptions.push({ path: i, value: e }) : this.changedOptions.push({ path: i, value: e })));
                    var o = this;
                    n.onchange = function() { o._update(this.checked, i) };
                    var r = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, r, n)
                }
            }, {
                key: "_makeTextInput",
                value: function(t, e, i) {
                    var n = document.createElement("input");
                    n.type = "text", n.className = "vis-configuration vis-config-text", n.value = e, e !== t && this.changedOptions.push({ path: i, value: e });
                    var o = this;
                    n.onchange = function() { o._update(this.value, i) };
                    var r = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, r, n)
                }
            }, {
                key: "_makeColorField",
                value: function(t, e, i) {
                    var n = this,
                        o = t[1],
                        r = document.createElement("div");
                    "none" !== (e = void 0 === e ? o : e) ? (r.className = "vis-configuration vis-config-colorBlock", r.style.backgroundColor = e) : r.className = "vis-configuration vis-config-colorBlock none", e = void 0 === e ? o : e, r.onclick = function() { n._showColorPicker(e, r, i) };
                    var s = this._makeLabel(i[i.length - 1], i);
                    this._makeItem(i, s, r)
                }
            }, {
                key: "_showColorPicker",
                value: function(t, e, i) {
                    var n = this;
                    e.onclick = function() {}, this.colorPicker.insertTo(e), this.colorPicker.show(), this.colorPicker.setColor(t), this.colorPicker.setUpdateCallback((function(t) {
                        var o = "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
                        e.style.backgroundColor = o, n._update(o, i)
                    })), this.colorPicker.setCloseCallback((function() { e.onclick = function() { n._showColorPicker(t, e, i) } }))
                }
            }, {
                key: "_handleObject",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = !1,
                        o = Af(this.options),
                        r = !1;
                    for (var s in t)
                        if (Object.prototype.hasOwnProperty.call(t, s)) {
                            n = !0;
                            var a = t[s],
                                l = Zy(e, s);
                            if ("function" == typeof o && !1 === (n = o(s, e)) && !tc(a) && "string" != typeof a && "boolean" != typeof a && a instanceof Object && (this.allowCreation = !1, n = this._handleObject(a, l, !0), this.allowCreation = !1 === i), !1 !== n) {
                                r = !0;
                                var h = this._getValue(l);
                                if (tc(a)) this._handleArray(a, h, l);
                                else if ("string" == typeof a) this._makeTextInput(a, h, l);
                                else if ("boolean" == typeof a) this._makeCheckbox(a, h, l);
                                else if (a instanceof Object) {
                                    if (!this.hideOption(e, s, this.moduleOptions))
                                        if (void 0 !== a.enabled) {
                                            var u = Zy(l, "enabled"),
                                                d = this._getValue(u);
                                            if (!0 === d) {
                                                var c = this._makeLabel(s, l, !0);
                                                this._makeItem(l, c), r = this._handleObject(a, l) || r
                                            } else this._makeCheckbox(a, d, l)
                                        } else {
                                            var p = this._makeLabel(s, l, !0);
                                            this._makeItem(l, p), r = this._handleObject(a, l) || r
                                        }
                                } else console.error("dont know how to handle", a, s, l)
                            }
                        }
                    return r
                }
            }, { key: "_handleArray", value: function(t, e, i) { "string" == typeof t[0] && "color" === t[0] ? (this._makeColorField(t, e, i), t[1] !== e && this.changedOptions.push({ path: i, value: e })) : "string" == typeof t[0] ? (this._makeDropdown(t, e, i), t[0] !== e && this.changedOptions.push({ path: i, value: e })) : "number" == typeof t[0] && (this._makeRange(t, e, i), t[0] !== e && this.changedOptions.push({ path: i, value: Number(e) })) } }, {
                key: "_update",
                value: function(t, e) {
                    var i = this._constructOptions(t, e);
                    this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit && this.parent.body.emitter.emit("configChange", i), this.initialized = !0, this.parent.setOptions(i)
                }
            }, {
                key: "_constructOptions",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = i;
                    t = "false" !== (t = "true" === t || t) && t;
                    for (var o = 0; o < e.length; o++) "global" !== e[o] && (void 0 === n[e[o]] && (n[e[o]] = {}), o !== e.length - 1 ? n = n[e[o]] : n[e[o]] = t);
                    return i
                }
            }, {
                key: "_printOptions",
                value: function() {
                    for (var t = this.getOptions(); this.optionsContainer.firstChild;) this.optionsContainer.removeChild(this.optionsContainer.firstChild);
                    this.optionsContainer.appendChild(fb("pre", "const options = " + hv(t, null, 2)))
                }
            }, { key: "getOptions", value: function() { for (var t = {}, e = 0; e < this.changedOptions.length; e++) this._constructOptions(this.changedOptions[e].value, this.changedOptions[e].path, t); return t } }]), t
        }(),
        gb = !1,
        yb = "background: #FFeeee; color: #dd0000",
        bb = Ry,
        _b = pb,
        wb = vb,
        kb = Fy,
        xb = function() {
            function t(e, i) { yu(this, t), this.container = e, this.overflowMethod = i || "cap", this.x = 0, this.y = 0, this.padding = 5, this.hidden = !1, this.frame = document.createElement("div"), this.frame.className = "vis-tooltip", this.container.appendChild(this.frame) }
            return xu(t, [{ key: "setPosition", value: function(t, e) { this.x = pm(t), this.y = pm(e) } }, {
                key: "setText",
                value: function(t) {
                    if (t instanceof Element) {
                        for (; this.frame.firstChild;) this.frame.removeChild(this.frame.firstChild);
                        this.frame.appendChild(t)
                    } else this.frame.innerText = t
                }
            }, {
                key: "show",
                value: function(t) {
                    if (void 0 === t && (t = !0), !0 === t) {
                        var e = this.frame.clientHeight,
                            i = this.frame.clientWidth,
                            n = this.frame.parentNode.clientHeight,
                            o = this.frame.parentNode.clientWidth,
                            r = 0,
                            s = 0;
                        if ("flip" == this.overflowMethod) {
                            var a = !1,
                                l = !0;
                            this.y - e < this.padding && (l = !1), this.x + i > o - this.padding && (a = !0), r = a ? this.x - i : this.x, s = l ? this.y - e : this.y
                        } else(s = this.y - e) + e + this.padding > n && (s = n - e - this.padding), s < this.padding && (s = this.padding), (r = this.x) + i + this.padding > o && (r = o - i - this.padding), r < this.padding && (r = this.padding);
                        this.frame.style.left = r + "px", this.frame.style.top = s + "px", this.frame.style.visibility = "visible", this.hidden = !1
                    } else this.hide()
                }
            }, { key: "hide", value: function() { this.hidden = !0, this.frame.style.left = "0", this.frame.style.top = "0", this.frame.style.visibility = "hidden" } }, { key: "destroy", value: function() { this.frame.parentNode.removeChild(this.frame) } }]), t
        }(),
        Db = function() {
            function t() { yu(this, t) }
            return xu(t, null, [{ key: "validate", value: function(e, i, n) { gb = !1, mb = i; var o = i; return void 0 !== n && (o = i[n]), t.parse(e, o, []), gb } }, { key: "parse", value: function(e, i, n) { for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.check(o, e, i, n) } }, {
                key: "check",
                value: function(e, i, n, o) {
                    if (void 0 !== n[e] || void 0 !== n.__any__) {
                        var r = e,
                            s = !0;
                        void 0 === n[e] && void 0 !== n.__any__ && (r = "__any__", s = "object" === t.getType(i[e]));
                        var a = n[r];
                        s && void 0 !== a.__type__ && (a = a.__type__), t.checkFields(e, i, n, r, a, o)
                    } else t.getSuggestion(e, n, o)
                }
            }, {
                key: "checkFields",
                value: function(e, i, n, o, r, s) {
                    var a = function(i) { console.error("%c" + i + t.printLocation(s, e), yb) },
                        l = t.getType(i[e]),
                        h = r[l];
                    void 0 !== h ? "array" === t.getType(h) && -1 === Cm(h).call(h, i[e]) ? (a('Invalid option detected in "' + e + '". Allowed values are:' + t.print(h) + ' not "' + i[e] + '". '), gb = !0) : "object" === l && "__any__" !== o && (s = Zy(s, e), t.parse(i[e], n[o], s)) : void 0 === r.any && (a('Invalid type received for "' + e + '". Expected: ' + t.print(pc(r)) + ". Received [" + l + '] "' + i[e] + '"'), gb = !0)
                }
            }, { key: "getType", value: function(t) { var e = Rd(t); return "object" === e ? null === t ? "null" : t instanceof Boolean ? "boolean" : t instanceof Number ? "number" : t instanceof String ? "string" : tc(t) ? "array" : t instanceof Date ? "date" : void 0 !== t.nodeType ? "dom" : !0 === t._isAMomentObject ? "moment" : "object" : "number" === e ? "number" : "boolean" === e ? "boolean" : "string" === e ? "string" : void 0 === e ? "undefined" : e } }, {
                key: "getSuggestion",
                value: function(e, i, n) {
                    var o, r = t.findInOptions(e, i, n, !1),
                        s = t.findInOptions(e, mb, [], !0);
                    o = void 0 !== r.indexMatch ? " in " + t.printLocation(r.path, e, "") + 'Perhaps it was incomplete? Did you mean: "' + r.indexMatch + '"?\n\n' : s.distance <= 4 && r.distance > s.distance ? " in " + t.printLocation(r.path, e, "") + "Perhaps it was misplaced? Matching option found at: " + t.printLocation(s.path, s.closestMatch, "") : r.distance <= 8 ? '. Did you mean "' + r.closestMatch + '"?' + t.printLocation(r.path, e) : ". Did you mean one of these: " + t.print(pc(i)) + t.printLocation(n, e), console.error('%cUnknown option detected: "' + e + '"' + o, yb), gb = !0
                }
            }, {
                key: "findInOptions",
                value: function(e, i, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = 1e9,
                        s = "",
                        a = [],
                        l = e.toLowerCase(),
                        h = void 0;
                    for (var u in i) {
                        var d = void 0;
                        if (void 0 !== i[u].__type__ && !0 === o) {
                            var c = t.findInOptions(e, i[u], Zy(n, u));
                            r > c.distance && (s = c.closestMatch, a = c.path, r = c.distance, h = c.indexMatch)
                        } else { var p; - 1 !== Cm(p = u.toLowerCase()).call(p, l) && (h = u), r > (d = t.levenshteinDistance(e, u)) && (s = u, a = Ky(n), r = d) }
                    }
                    return { closestMatch: s, path: a, distance: r, indexMatch: h }
                }
            }, {
                key: "printLocation",
                value: function(t, e) {
                    for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Problem value found at: \n", n = "\n\n" + i + "options = {\n", o = 0; o < t.length; o++) {
                        for (var r = 0; r < o + 1; r++) n += "  ";
                        n += t[o] + ": {\n"
                    }
                    for (var s = 0; s < t.length + 1; s++) n += "  ";
                    n += e + "\n";
                    for (var a = 0; a < t.length + 1; a++) {
                        for (var l = 0; l < t.length - a; l++) n += "  ";
                        n += "}\n"
                    }
                    return n + "\n\n"
                }
            }, { key: "print", value: function(t) { return hv(t).replace(/(")|(\[)|(\])|(,"__type__")/g, "").replace(/(,)/g, ", ") } }, {
                key: "levenshteinDistance",
                value: function(t, e) {
                    if (0 === t.length) return e.length;
                    if (0 === e.length) return t.length;
                    var i, n, o = [];
                    for (i = 0; i <= e.length; i++) o[i] = [i];
                    for (n = 0; n <= t.length; n++) o[0][n] = n;
                    for (i = 1; i <= e.length; i++)
                        for (n = 1; n <= t.length; n++) e.charAt(i - 1) == t.charAt(n - 1) ? o[i][n] = o[i - 1][n - 1] : o[i][n] = Math.min(o[i - 1][n - 1] + 1, Math.min(o[i][n - 1] + 1, o[i - 1][n] + 1));
                    return o[e.length][t.length]
                }
            }]), t
        }(),
        Sb = Object.freeze({
            __proto__: null,
            Activator: bb,
            Alea: function() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]; return Ly(e.length ? e : [_c()]) },
            ColorPicker: _b,
            Configurator: wb,
            DELETE: My,
            HSVToHex: sb,
            HSVToRGB: rb,
            Hammer: kb,
            Popup: xb,
            RGBToHSV: ib,
            RGBToHex: eb,
            VALIDATOR_PRINT_STYLE: "background: #FFeeee; color: #dd0000",
            Validator: Db,
            addClassName: function(t, e) {
                var i = t.className.split(" "),
                    n = e.split(" ");
                i = Xd(i).call(i, Af(n).call(n, (function(t) { return !yf(i).call(i, t) }))), t.className = i.join(" ")
            },
            addCssText: function(t, e) {
                var i = nb(t.style.cssText),
                    n = nb(e),
                    o = Sy(Sy({}, i), n);
                t.style.cssText = ob(o)
            },
            addEventListener: function(t, e, i, n) {
                var o;
                t.addEventListener ? (void 0 === n && (n = !1), "mousewheel" === e && yf(o = navigator.userAgent).call(o, "Firefox") && (e = "DOMMouseScroll"), t.addEventListener(e, i, n)) : t.attachEvent("on" + e, i)
            },
            binarySearchCustom: function(t, e, i, n) {
                for (var o = 0, r = 0, s = t.length - 1; r <= s && o < 1e4;) {
                    var a = Math.floor((r + s) / 2),
                        l = t[a],
                        h = e(void 0 === n ? l[i] : l[i][n]);
                    if (0 == h) return a; - 1 == h ? r = a + 1 : s = a - 1, o++
                }
                return -1
            },
            binarySearchValue: function(t, e, i, n, o) {
                var r, s, a, l, h = 0,
                    u = 0,
                    d = t.length - 1;
                for (o = null != o ? o : function(t, e) { return t == e ? 0 : t < e ? -1 : 1 }; u <= d && h < 1e4;) {
                    if (l = Math.floor(.5 * (d + u)), r = t[Math.max(0, l - 1)][i], s = t[l][i], a = t[Math.min(t.length - 1, l + 1)][i], 0 == o(s, e)) return l;
                    if (o(r, e) < 0 && o(s, e) > 0) return "before" == n ? Math.max(0, l - 1) : l;
                    if (o(s, e) < 0 && o(a, e) > 0) return "before" == n ? l : Math.min(t.length - 1, l + 1);
                    o(s, e) < 0 ? u = l + 1 : d = l - 1, h++
                }
                return -1
            },
            bridgeObject: db,
            copyAndExtendArray: Zy,
            copyArray: Ky,
            deepExtend: qy,
            deepObjectAssign: Ey,
            easingFunctions: { linear: function(t) { return t }, easeInQuad: function(t) { return t * t }, easeOutQuad: function(t) { return t * (2 - t) }, easeInOutQuad: function(t) { return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1 }, easeInCubic: function(t) { return t * t * t }, easeOutCubic: function(t) { return --t * t * t + 1 }, easeInOutCubic: function(t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }, easeInQuart: function(t) { return t * t * t * t }, easeOutQuart: function(t) { return 1 - --t * t * t * t }, easeInOutQuart: function(t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t }, easeInQuint: function(t) { return t * t * t * t * t }, easeOutQuint: function(t) { return 1 + --t * t * t * t * t }, easeInOutQuint: function(t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t } },
            equalArray: function(t, e) {
                if (t.length !== e.length) return !1;
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] != e[i]) return !1;
                return !0
            },
            extend: Xy,
            fillIfDefined: function t(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                for (var o in e)
                    if (void 0 !== i[o])
                        if (null === i[o] || "object" !== Rd(i[o])) Uy(e, i, o, n);
                        else {
                            var r = e[o],
                                s = i[o];
                            Vy(r) && Vy(s) && t(r, s, n)
                        }
            },
            forEach: function(t, e) {
                if (tc(t))
                    for (var i = t.length, n = 0; n < i; n++) e(t[n], n, t);
                else
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e(t[o], o, t)
            },
            getAbsoluteLeft: function(t) { return t.getBoundingClientRect().left },
            getAbsoluteRight: function(t) { return t.getBoundingClientRect().right },
            getAbsoluteTop: function(t) { return t.getBoundingClientRect().top },
            getScrollBarWidth: function() {
                var t = document.createElement("p");
                t.style.width = "100%", t.style.height = "200px";
                var e = document.createElement("div");
                e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.visibility = "hidden", e.style.width = "200px", e.style.height = "150px", e.style.overflow = "hidden", e.appendChild(t), document.body.appendChild(e);
                var i = t.offsetWidth;
                e.style.overflow = "scroll";
                var n = t.offsetWidth;
                return i == n && (n = e.clientWidth), document.body.removeChild(e), i - n
            },
            getTarget: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.event,
                    e = null;
                return t && (t.target ? e = t.target : t.srcElement && (e = t.srcElement)), e instanceof Element && (null == e.nodeType || 3 != e.nodeType || (e = e.parentNode) instanceof Element) ? e : null
            },
            getType: $y,
            hasParent: function(t, e) {
                for (var i = t; i;) {
                    if (i === e) return !0;
                    if (!i.parentNode) return !1;
                    i = i.parentNode
                }
                return !1
            },
            hexToHSV: ab,
            hexToRGB: tb,
            insertSort: function(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                        o = void 0;
                    for (o = i; o > 0 && e(n, t[o - 1]) < 0; o--) t[o] = t[o - 1];
                    t[o] = n
                }
                return t
            },
            isDate: function(t) { if (t instanceof Date) return !0; if (Wy(t)) { if (jy.exec(t)) return !0; if (!isNaN(Date.parse(t))) return !0 } return !1 },
            isNumber: Gy,
            isObject: Vy,
            isString: Wy,
            isValidHex: lb,
            isValidRGB: hb,
            isValidRGBA: ub,
            mergeOptions: function(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = function(t) { return null != t },
                    r = function(t) { return null !== t && "object" === Rd(t) },
                    s = function(t) {
                        for (var e in t)
                            if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                        return !0
                    };
                if (!r(t)) throw new Error("Parameter mergeTarget must be an object");
                if (!r(e)) throw new Error("Parameter options must be an object");
                if (!o(i)) throw new Error("Parameter option must have a value");
                if (!r(n)) throw new Error("Parameter globalOptions must be an object");
                var a = function(t, e, i) {
                        r(t[i]) || (t[i] = {});
                        var n = e[i],
                            o = t[i];
                        for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (o[s] = n[s])
                    },
                    l = e[i],
                    h = r(n) && !s(n),
                    u = h ? n[i] : void 0,
                    d = u ? u.enabled : void 0;
                if (void 0 !== l) {
                    if ("boolean" == typeof l) return r(t[i]) || (t[i] = {}), void(t[i].enabled = l);
                    if (null === l && !r(t[i])) {
                        if (!o(u)) return;
                        t[i] = zm(u)
                    }
                    if (r(l)) {
                        var c = !0;
                        void 0 !== l.enabled ? c = l.enabled : void 0 !== d && (c = u.enabled), a(t, e, i), t[i].enabled = c
                    }
                }
            },
            option: Qy,
            overrideOpacity: function(t, e) { if (yf(t).call(t, "rgba")) return t; if (yf(t).call(t, "rgb")) { var i = t.substr(Cm(t).call(t, "(") + 1).replace(")", "").split(","); return "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + e + ")" } var n = tb(t); return null == n ? t : "rgba(" + n.r + "," + n.g + "," + n.b + "," + e + ")" },
            parseColor: function(t, e) {
                if (Wy(t)) {
                    var i = t;
                    if (hb(i)) {
                        var n, o = lc(n = i.substr(4).substr(0, i.length - 5).split(",")).call(n, (function(t) { return pm(t) }));
                        i = eb(o[0], o[1], o[2])
                    }
                    if (!0 === lb(i)) {
                        var r = ab(i),
                            s = { h: r.h, s: .8 * r.s, v: Math.min(1, 1.02 * r.v) },
                            a = { h: r.h, s: Math.min(1, 1.25 * r.s), v: .8 * r.v },
                            l = sb(a.h, a.s, a.v),
                            h = sb(s.h, s.s, s.v);
                        return { background: i, border: l, highlight: { background: h, border: l }, hover: { background: h, border: l } }
                    }
                    return { background: i, border: i, highlight: { background: i, border: i }, hover: { background: i, border: i } }
                }
                return e ? { background: t.background || e.background, border: t.border || e.border, highlight: Wy(t.highlight) ? { border: t.highlight, background: t.highlight } : { background: t.highlight && t.highlight.background || e.highlight.background, border: t.highlight && t.highlight.border || e.highlight.border }, hover: Wy(t.hover) ? { border: t.hover, background: t.hover } : { border: t.hover && t.hover.border || e.hover.border, background: t.hover && t.hover.background || e.hover.background } } : { background: t.background || void 0, border: t.border || void 0, highlight: Wy(t.highlight) ? { border: t.highlight, background: t.highlight } : { background: t.highlight && t.highlight.background || void 0, border: t.highlight && t.highlight.border || void 0 }, hover: Wy(t.hover) ? { border: t.hover, background: t.hover } : { border: t.hover && t.hover.border || void 0, background: t.hover && t.hover.background || void 0 } }
            },
            preventDefault: function(t) { t || (t = window.event), t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1) },
            pureDeepObjectAssign: Oy,
            recursiveDOMDelete: function t(e) {
                if (e)
                    for (; !0 === e.hasChildNodes();) {
                        var i = e.firstChild;
                        i && (t(i), e.removeChild(i))
                    }
            },
            removeClassName: function(t, e) {
                var i = t.className.split(" "),
                    n = e.split(" ");
                i = Af(i).call(i, (function(t) { return !yf(n).call(n, t) })), t.className = i.join(" ")
            },
            removeCssText: function(t, e) {
                var i = nb(t.style.cssText),
                    n = nb(e);
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && delete i[o];
                t.style.cssText = ob(i)
            },
            removeEventListener: function(t, e, i, n) {
                var o;
                t.removeEventListener ? (void 0 === n && (n = !1), "mousewheel" === e && yf(o = navigator.userAgent).call(o, "Firefox") && (e = "DOMMouseScroll"), t.removeEventListener(e, i, n)) : t.detachEvent("on" + e, i)
            },
            selectiveBridgeObject: function(t, e) { if (null !== e && "object" === Rd(e)) { for (var i = zm(e), n = 0; n < t.length; n++) Object.prototype.hasOwnProperty.call(e, t[n]) && "object" == Rd(e[t[n]]) && (i[t[n]] = db(e[t[n]])); return i } return null },
            selectiveDeepExtend: function(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (tc(i)) throw new TypeError("Arrays are not supported by deepExtend");
                for (var o = 0; o < t.length; o++) {
                    var r = t[o];
                    if (Object.prototype.hasOwnProperty.call(i, r))
                        if (i[r] && i[r].constructor === Object) void 0 === e[r] && (e[r] = {}), e[r].constructor === Object ? qy(e[r], i[r], !1, n) : Uy(e, i, r, n);
                        else {
                            if (tc(i[r])) throw new TypeError("Arrays are not supported by deepExtend");
                            Uy(e, i, r, n)
                        }
                }
                return e
            },
            selectiveExtend: function(t, e) {
                if (!tc(t)) throw new Error("Array with property names expected as first argument");
                for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) n[o - 2] = arguments[o];
                for (var r = 0, s = n; r < s.length; r++)
                    for (var a = s[r], l = 0; l < t.length; l++) {
                        var h = t[l];
                        a && Object.prototype.hasOwnProperty.call(a, h) && (e[h] = a[h])
                    }
                return e
            },
            selectiveNotDeepExtend: function(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (tc(i)) throw new TypeError("Arrays are not supported by deepExtend");
                for (var o in i)
                    if (Object.prototype.hasOwnProperty.call(i, o) && !yf(t).call(t, o))
                        if (i[o] && i[o].constructor === Object) void 0 === e[o] && (e[o] = {}), e[o].constructor === Object ? qy(e[o], i[o]) : Uy(e, i, o, n);
                        else if (tc(i[o])) { e[o] = []; for (var r = 0; r < i[o].length; r++) e[o].push(i[o][r]) } else Uy(e, i, o, n);
                return e
            },
            throttle: function(t) { var e = !1; return function() { e || (e = !0, requestAnimationFrame((function() { e = !1, t() }))) } },
            toArray: Jy,
            topMost: function(t, e) {
                var i;
                tc(e) || (e = [e]);
                var n, o = Cy(t);
                try { for (o.s(); !(n = o.n()).done;) { var r = n.value; if (r) { i = r[e[0]]; for (var s = 1; s < e.length; s++) i && (i = i[e[s]]); if (void 0 !== i) break } } } catch (t) { o.e(t) } finally { o.f() }
                return i
            },
            updateProperty: function(t, e, i) { return t[e] !== i && (t[e] = i, !0) }
        });

    function Cb(t) { for (var e in t) t.hasOwnProperty(e) && (t[e].redundant = t[e].used, t[e].used = []) }

    function Tb(t) {
        for (var e in t)
            if (t.hasOwnProperty(e) && t[e].redundant) {
                for (var i = 0; i < t[e].redundant.length; i++) t[e].redundant[i].parentNode.removeChild(t[e].redundant[i]);
                t[e].redundant = []
            }
    }

    function Mb(t) { Cb(t), Tb(t), Cb(t) }

    function Ob(t, e, i) { var n; return e.hasOwnProperty(t) ? e[t].redundant.length > 0 ? (n = e[t].redundant[0], e[t].redundant.shift()) : (n = document.createElementNS("http://www.w3.org/2000/svg", t), i.appendChild(n)) : (n = document.createElementNS("http://www.w3.org/2000/svg", t), e[t] = { used: [], redundant: [] }, i.appendChild(n)), e[t].used.push(n), n }

    function Eb(t, e, i, n) { var o; return e.hasOwnProperty(t) ? e[t].redundant.length > 0 ? (o = e[t].redundant[0], e[t].redundant.shift()) : (o = document.createElement(t), void 0 !== n ? i.insertBefore(o, n) : i.appendChild(o)) : (o = document.createElement(t), e[t] = { used: [], redundant: [] }, void 0 !== n ? i.insertBefore(o, n) : i.appendChild(o)), e[t].used.push(o), o }

    function Pb(t, e, i, n, o, r) {
        var s;
        if ("circle" == i.style ? ((s = Ob("circle", n, o)).setAttributeNS(null, "cx", t), s.setAttributeNS(null, "cy", e), s.setAttributeNS(null, "r", .5 * i.size)) : ((s = Ob("rect", n, o)).setAttributeNS(null, "x", t - .5 * i.size), s.setAttributeNS(null, "y", e - .5 * i.size), s.setAttributeNS(null, "width", i.size), s.setAttributeNS(null, "height", i.size)), void 0 !== i.styles && s.setAttributeNS(null, "style", i.styles), s.setAttributeNS(null, "class", i.className + " vis-point"), r) {
            var a = Ob("text", n, o);
            r.xOffset && (t += r.xOffset), r.yOffset && (e += r.yOffset), r.content && (a.textContent = r.content), r.className && a.setAttributeNS(null, "class", r.className + " vis-label"), a.setAttributeNS(null, "x", t), a.setAttributeNS(null, "y", e)
        }
        return s
    }

    function Ab(t, e, i, n, o, r, s, a) {
        if (0 != n) {
            n < 0 && (e -= n *= -1);
            var l = Ob("rect", r, s);
            l.setAttributeNS(null, "x", t - .5 * i), l.setAttributeNS(null, "y", e), l.setAttributeNS(null, "width", i), l.setAttributeNS(null, "height", n), l.setAttributeNS(null, "class", o), a && l.setAttributeNS(null, "style", a)
        }
    }

    function Ib() { try { return navigator ? navigator.languages && navigator.languages.length ? navigator.languages : navigator.userLanguage || navigator.language || navigator.browserLanguage || "en" : "en" } catch (t) { return "en" } }
    var Lb = Object.freeze({ __proto__: null, prepareElements: Cb, cleanupElements: Tb, resetElements: Mb, getSVGElement: Ob, getDOMElement: Eb, drawPoint: Pb, drawBar: Ab, getNavigatorLanguage: Ib }),
        Nb = { exports: {} },
        Fb = ys,
        Rb = Te,
        jb = w.TypeError,
        Yb = function(t) { if (Fb(t)) return t; throw jb(Rb(t) + " is not a constructor") },
        Hb = Nn,
        zb = Hi,
        Bb = Ic,
        Gb = Yb,
        Wb = me,
        Vb = ee,
        Ub = No,
        Xb = h,
        qb = Z("Reflect", "construct"),
        $b = Object.prototype,
        Zb = [].push,
        Kb = Xb((function() {
            function t() {}
            return !(qb((function() {}), [], t) instanceof t)
        })),
        Jb = !Xb((function() { qb((function() {})) })),
        Qb = Kb || Jb;
    Hb({ target: "Reflect", stat: !0, forced: Qb, sham: Qb }, {
        construct: function(t, e) {
            Gb(t), Wb(e);
            var i = arguments.length < 3 ? t : Gb(arguments[2]);
            if (Jb && !Kb) return qb(t, e, i);
            if (t == i) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var n = [null];
                return zb(Zb, n, e), new(zb(Bb, t, n))
            }
            var o = i.prototype,
                r = Ub(Vb(o) ? o : $b),
                s = zb(t, r, e);
            return Vb(s) ? s : r
        }
    });
    var t_ = W.Reflect.construct;
    ! function(t) { t.exports = t_ }(Nb);
    var e_ = n(Nb.exports);

    function i_(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }
    var n_ = { exports: {} },
        o_ = Hm;
    ! function(t) { t.exports = o_ }(n_);
    var r_ = n(n_.exports),
        s_ = { exports: {} };
    Nn({ target: "Object", stat: !0 }, { setPrototypeOf: Cr });
    var a_ = W.Object.setPrototypeOf;
    ! function(t) { t.exports = a_ }(s_);
    var l_ = n(s_.exports),
        h_ = { exports: {} },
        u_ = Yc;
    ! function(t) { t.exports = u_ }(h_);
    var d_ = n(h_.exports);

    function c_(t, e) { var i; return (c_ = l_ ? d_(i = l_).call(i) : function(t, e) { return t.__proto__ = e, t })(t, e) }

    function p_(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = r_(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), wu(t, "prototype", { writable: !1 }), e && c_(t, e)
    }

    function f_(t, e) { if (e && ("object" === Rd(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return i_(t) }
    var m_ = { exports: {} },
        v_ = xf;
    ! function(t) { t.exports = v_ }(m_);
    var g_ = n(m_.exports);

    function y_(t) { var e; return (y_ = l_ ? d_(e = g_).call(e) : function(t) { return t.__proto__ || g_(t) })(t) }
    var b_ = { exports: {} },
        __ = { exports: {} };
    ! function(t) {
        var e = Ou.exports,
            i = Id.exports;

        function n(o) { return t.exports = n = "function" == typeof e && "symbol" == typeof i ? function(t) { return typeof t } : function(t) { return t && "function" == typeof e && t.constructor === e && t !== e.prototype ? "symbol" : typeof t }, t.exports.__esModule = !0, t.exports.default = t.exports, n(o) }
        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
    }(__);
    var w_ = { exports: {} },
        k_ = Qc;
    ! function(t) { t.exports = k_ }(w_);
    var x_ = { exports: {} },
        D_ = j,
        S_ = Xh,
        C_ = zi,
        T_ = ne,
        M_ = v("".replace),
        O_ = String(Error("zxcasd").stack),
        E_ = /\n\s*at [^:]*:[^\n]*/,
        P_ = E_.test(O_),
        A_ = ee,
        I_ = ci,
        L_ = xn,
        N_ = ye,
        F_ = me,
        R_ = Te,
        j_ = os,
        Y_ = Zn,
        H_ = be,
        z_ = Ls,
        B_ = Ts,
        G_ = Jr,
        W_ = w.TypeError,
        V_ = function(t, e) { this.stopped = t, this.result = e },
        U_ = V_.prototype,
        X_ = function(t, e, i) {
            var n, o, r, s, a, l, h, u = i && i.that,
                d = !(!i || !i.AS_ENTRIES),
                c = !(!i || !i.IS_ITERATOR),
                p = !(!i || !i.INTERRUPTED),
                f = L_(e, u),
                m = function(t) { return n && G_(n, "normal", t), new V_(!0, t) },
                v = function(t) { return d ? (F_(t), p ? f(t[0], t[1], m) : f(t[0], t[1])) : p ? f(t, m) : f(t) };
            if (c) n = t;
            else {
                if (!(o = B_(t))) throw W_(R_(t) + " is not iterable");
                if (j_(o)) {
                    for (r = 0, s = Y_(t); s > r; r++)
                        if ((a = v(t[r])) && H_(U_, a)) return a;
                    return new V_(!1)
                }
                n = z_(t, o)
            }
            for (l = n.next; !(h = N_(l, n)).done;) { try { a = v(h.value) } catch (t) { G_(n, "throw", t) } if ("object" == typeof a && a && H_(U_, a)) return a }
            return new V_(!1)
        },
        q_ = Ft,
        $_ = hi,
        Z_ = !h((function() { var t = Error("a"); return !("stack" in t) || (Object.defineProperty(t, "stack", $_(1, 7)), 7 !== t.stack) })),
        K_ = Nn,
        J_ = w,
        Q_ = be,
        tw = Vo,
        ew = Cr,
        iw = function(t, e, i) {
            for (var n = S_(e), o = T_.f, r = C_.f, s = 0; s < n.length; s++) {
                var a = n[s];
                D_(t, a) || i && D_(i, a) || o(t, a, r(e, a))
            }
        },
        nw = No,
        ow = ci,
        rw = hi,
        sw = function(t, e) {
            if (P_ && "string" == typeof t)
                for (; e--;) t = M_(t, E_, "");
            return t
        },
        aw = function(t, e) { A_(e) && "cause" in e && I_(t, "cause", e.cause) },
        lw = X_,
        hw = function(t, e) { return void 0 === t ? arguments.length < 2 ? "" : e : q_(t) },
        uw = Z_,
        dw = bt("toStringTag"),
        cw = J_.Error,
        pw = [].push,
        fw = function(t, e) {
            var i, n = arguments.length > 2 ? arguments[2] : void 0,
                o = Q_(mw, this);
            ew ? i = ew(new cw, o ? tw(this) : mw) : (i = o ? this : nw(mw), ow(i, dw, "Error")), void 0 !== e && ow(i, "message", hw(e)), uw && ow(i, "stack", sw(i.stack, 1)), aw(i, n);
            var r = [];
            return lw(t, pw, { that: r }), ow(i, "errors", r), i
        };
    ew ? ew(fw, cw) : iw(fw, cw, { name: !0 });
    var mw = fw.prototype = nw(cw.prototype, { constructor: rw(1, fw), message: rw(1, ""), name: rw(1, "AggregateError") });
    K_({ global: !0 }, { AggregateError: fw });
    var vw, gw, yw, bw, _w = w.Promise,
        ww = Xo,
        kw = function(t, e, i) { for (var n in e) i && i.unsafe && t[n] ? t[n] = e[n] : ww(t, n, e[n], i); return t },
        xw = Z,
        Dw = ne,
        Sw = ie,
        Cw = bt("species"),
        Tw = function(t) {
            var e = xw(t),
                i = Dw.f;
            Sw && e && !e[Cw] && i(e, Cw, { configurable: !0, get: function() { return this } })
        },
        Mw = be,
        Ow = w.TypeError,
        Ew = function(t, e) { if (Mw(e, t)) return t; throw Ow("Incorrect invocation") },
        Pw = me,
        Aw = Yb,
        Iw = bt("species"),
        Lw = function(t, e) { var i, n = Pw(t).constructor; return void 0 === n || null == (i = Pw(n)[Iw]) ? e : Aw(i) },
        Nw = /(?:ipad|iphone|ipod).*applewebkit/i.test(K),
        Fw = "process" == St(w.process),
        Rw = w,
        jw = Hi,
        Yw = xn,
        Hw = V,
        zw = j,
        Bw = h,
        Gw = _o,
        Ww = Ya,
        Vw = ae,
        Uw = cv,
        Xw = Nw,
        qw = Fw,
        $w = Rw.setImmediate,
        Zw = Rw.clearImmediate,
        Kw = Rw.process,
        Jw = Rw.Dispatch,
        Qw = Rw.Function,
        tk = Rw.MessageChannel,
        ek = Rw.String,
        ik = 0,
        nk = {},
        ok = "onreadystatechange";
    try { vw = Rw.location } catch (t) {}
    var rk = function(t) {
            if (zw(nk, t)) {
                var e = nk[t];
                delete nk[t], e()
            }
        },
        sk = function(t) { return function() { rk(t) } },
        ak = function(t) { rk(t.data) },
        lk = function(t) { Rw.postMessage(ek(t), vw.protocol + "//" + vw.host) };
    $w && Zw || ($w = function(t) {
        Uw(arguments.length, 1);
        var e = Hw(t) ? t : Qw(t),
            i = Ww(arguments, 1);
        return nk[++ik] = function() { jw(e, void 0, i) }, gw(ik), ik
    }, Zw = function(t) { delete nk[t] }, qw ? gw = function(t) { Kw.nextTick(sk(t)) } : Jw && Jw.now ? gw = function(t) { Jw.now(sk(t)) } : tk && !Xw ? (bw = (yw = new tk).port2, yw.port1.onmessage = ak, gw = Yw(bw.postMessage, bw)) : Rw.addEventListener && Hw(Rw.postMessage) && !Rw.importScripts && vw && "file:" !== vw.protocol && !Bw(lk) ? (gw = lk, Rw.addEventListener("message", ak, !1)) : gw = ok in Vw("script") ? function(t) { Gw.appendChild(Vw("script")).onreadystatechange = function() { Gw.removeChild(this), rk(t) } } : function(t) { setTimeout(sk(t), 0) });
    var hk, uk, dk, ck, pk, fk, mk, vk, gk = { set: $w, clear: Zw },
        yk = w,
        bk = /ipad|iphone|ipod/i.test(K) && void 0 !== yk.Pebble,
        _k = /web0s(?!.*chrome)/i.test(K),
        wk = w,
        kk = xn,
        xk = zi.f,
        Dk = gk.set,
        Sk = Nw,
        Ck = bk,
        Tk = _k,
        Mk = Fw,
        Ok = wk.MutationObserver || wk.WebKitMutationObserver,
        Ek = wk.document,
        Pk = wk.process,
        Ak = wk.Promise,
        Ik = xk(wk, "queueMicrotask"),
        Lk = Ik && Ik.value;
    Lk || (hk = function() {
        var t, e;
        for (Mk && (t = Pk.domain) && t.exit(); uk;) { e = uk.fn, uk = uk.next; try { e() } catch (t) { throw uk ? ck() : dk = void 0, t } }
        dk = void 0, t && t.enter()
    }, Sk || Mk || Tk || !Ok || !Ek ? !Ck && Ak && Ak.resolve ? ((mk = Ak.resolve(void 0)).constructor = Ak, vk = kk(mk.then, mk), ck = function() { vk(hk) }) : Mk ? ck = function() { Pk.nextTick(hk) } : (Dk = kk(Dk, wk), ck = function() { Dk(hk) }) : (pk = !0, fk = Ek.createTextNode(""), new Ok(hk).observe(fk, { characterData: !0 }), ck = function() { fk.data = pk = !pk }));
    var Nk = Lk || function(t) {
            var e = { fn: t, next: void 0 };
            dk && (dk.next = e), uk || (uk = e, ck()), dk = e
        },
        Fk = {},
        Rk = Pe,
        jk = function(t) {
            var e, i;
            this.promise = new t((function(t, n) {
                if (void 0 !== e || void 0 !== i) throw TypeError("Bad Promise constructor");
                e = t, i = n
            })), this.resolve = Rk(e), this.reject = Rk(i)
        };
    Fk.f = function(t) { return new jk(t) };
    var Yk = me,
        Hk = ee,
        zk = Fk,
        Bk = function(t, e) { if (Yk(t), Hk(e) && e.constructor === t) return e; var i = zk.f(t); return (0, i.resolve)(e), i.promise },
        Gk = w,
        Wk = function(t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } },
        Vk = function() { this.head = null, this.tail = null };
    Vk.prototype = {
        add: function(t) {
            var e = { item: t, next: null };
            this.head ? this.tail.next = e : this.head = e, this.tail = e
        },
        get: function() { var t = this.head; if (t) return this.head = t.next, this.tail === t && (this.tail = null), t.item }
    };
    var Uk, Xk, qk, $k = "object" == typeof window,
        Zk = Nn,
        Kk = w,
        Jk = Z,
        Qk = ye,
        tx = _w,
        ex = kw,
        ix = dr,
        nx = Tw,
        ox = Pe,
        rx = V,
        sx = ee,
        ax = Ew,
        lx = $t,
        hx = X_,
        ux = Zs,
        dx = Lw,
        cx = gk.set,
        px = Nk,
        fx = Bk,
        mx = function(t, e) {
            var i = Gk.console;
            i && i.error && (1 == arguments.length ? i.error(t) : i.error(t, e))
        },
        vx = Fk,
        gx = Wk,
        yx = Vk,
        bx = Ni,
        _x = bn,
        wx = $k,
        kx = Fw,
        xx = ot,
        Dx = bt("species"),
        Sx = "Promise",
        Cx = bx.getterFor(Sx),
        Tx = bx.set,
        Mx = bx.getterFor(Sx),
        Ox = tx && tx.prototype,
        Ex = tx,
        Px = Ox,
        Ax = Kk.TypeError,
        Ix = Kk.document,
        Lx = Kk.process,
        Nx = vx.f,
        Fx = Nx,
        Rx = !!(Ix && Ix.createEvent && Kk.dispatchEvent),
        jx = rx(Kk.PromiseRejectionEvent),
        Yx = "unhandledrejection",
        Hx = _x(Sx, (function() {
            var t = lx(Ex),
                e = t !== String(Ex);
            if (!e && 66 === xx) return !0;
            if (!Px.finally) return !0;
            if (xx >= 51 && /native code/.test(t)) return !1;
            var i = new Ex((function(t) { t(1) })),
                n = function(t) { t((function() {}), (function() {})) };
            return (i.constructor = {})[Dx] = n, !(i.then((function() {})) instanceof n) || !e && wx && !jx
        })),
        zx = Hx || !ux((function(t) { Ex.all(t).catch((function() {})) })),
        Bx = function(t) { var e; return !(!sx(t) || !rx(e = t.then)) && e },
        Gx = function(t, e) {
            var i, n, o, r = e.value,
                s = 1 == e.state,
                a = s ? t.ok : t.fail,
                l = t.resolve,
                h = t.reject,
                u = t.domain;
            try { a ? (s || (2 === e.rejection && qx(e), e.rejection = 1), !0 === a ? i = r : (u && u.enter(), i = a(r), u && (u.exit(), o = !0)), i === t.promise ? h(Ax("Promise-chain cycle")) : (n = Bx(i)) ? Qk(n, i, l, h) : l(i)) : h(r) } catch (t) { u && !o && u.exit(), h(t) }
        },
        Wx = function(t, e) {
            t.notified || (t.notified = !0, px((function() {
                for (var i, n = t.reactions; i = n.get();) Gx(i, t);
                t.notified = !1, e && !t.rejection && Ux(t)
            })))
        },
        Vx = function(t, e, i) {
            var n, o;
            Rx ? ((n = Ix.createEvent("Event")).promise = e, n.reason = i, n.initEvent(t, !1, !0), Kk.dispatchEvent(n)) : n = { promise: e, reason: i }, !jx && (o = Kk["on" + t]) ? o(n) : t === Yx && mx("Unhandled promise rejection", i)
        },
        Ux = function(t) {
            Qk(cx, Kk, (function() {
                var e, i = t.facade,
                    n = t.value;
                if (Xx(t) && (e = gx((function() { kx ? Lx.emit("unhandledRejection", n, i) : Vx(Yx, i, n) })), t.rejection = kx || Xx(t) ? 2 : 1, e.error)) throw e.value
            }))
        },
        Xx = function(t) { return 1 !== t.rejection && !t.parent },
        qx = function(t) {
            Qk(cx, Kk, (function() {
                var e = t.facade;
                kx ? Lx.emit("rejectionHandled", e) : Vx("rejectionhandled", e, t.value)
            }))
        },
        $x = function(t, e, i) { return function(n) { t(e, n, i) } },
        Zx = function(t, e, i) { t.done || (t.done = !0, i && (t = i), t.value = e, t.state = 2, Wx(t, !0)) },
        Kx = function(t, e, i) {
            if (!t.done) {
                t.done = !0, i && (t = i);
                try {
                    if (t.facade === e) throw Ax("Promise can't be resolved itself");
                    var n = Bx(e);
                    n ? px((function() { var i = { done: !1 }; try { Qk(n, e, $x(Kx, i, t), $x(Zx, i, t)) } catch (e) { Zx(i, e, t) } })) : (t.value = e, t.state = 1, Wx(t, !1))
                } catch (e) { Zx({ done: !1 }, e, t) }
            }
        };
    Hx && (Px = (Ex = function(t) { ax(this, Px), ox(t), Qk(Uk, this); var e = Cx(this); try { t($x(Kx, e), $x(Zx, e)) } catch (t) { Zx(e, t) } }).prototype, (Uk = function(t) { Tx(this, { type: Sx, done: !1, notified: !1, parent: !1, reactions: new yx, rejection: !1, state: 0, value: void 0 }) }).prototype = ex(Px, {
        then: function(t, e) {
            var i = Mx(this),
                n = Nx(dx(this, Ex));
            return i.parent = !0, n.ok = !rx(t) || t, n.fail = rx(e) && e, n.domain = kx ? Lx.domain : void 0, 0 == i.state ? i.reactions.add(n) : px((function() { Gx(n, i) })), n.promise
        },
        catch: function(t) { return this.then(void 0, t) }
    }), Xk = function() {
        var t = new Uk,
            e = Cx(t);
        this.promise = t, this.resolve = $x(Kx, e), this.reject = $x(Zx, e)
    }, vx.f = Nx = function(t) { return t === Ex || t === qk ? new Xk(t) : Fx(t) }), Zk({ global: !0, wrap: !0, forced: Hx }, { Promise: Ex }), ix(Ex, Sx, !1, !0), nx(Sx), qk = Jk(Sx), Zk({ target: Sx, stat: !0, forced: Hx }, { reject: function(t) { var e = Nx(this); return Qk(e.reject, void 0, t), e.promise } }), Zk({ target: Sx, stat: !0, forced: true }, { resolve: function(t) { return fx(this === qk ? Ex : this, t) } }), Zk({ target: Sx, stat: !0, forced: zx }, {
        all: function(t) {
            var e = this,
                i = Nx(e),
                n = i.resolve,
                o = i.reject,
                r = gx((function() {
                    var i = ox(e.resolve),
                        r = [],
                        s = 0,
                        a = 1;
                    hx(t, (function(t) {
                        var l = s++,
                            h = !1;
                        a++, Qk(i, e, t).then((function(t) { h || (h = !0, r[l] = t, --a || n(r)) }), o)
                    })), --a || n(r)
                }));
            return r.error && o(r.value), i.promise
        },
        race: function(t) {
            var e = this,
                i = Nx(e),
                n = i.reject,
                o = gx((function() {
                    var o = ox(e.resolve);
                    hx(t, (function(t) { Qk(o, e, t).then(i.resolve, n) }))
                }));
            return o.error && n(o.value), i.promise
        }
    });
    var Jx = ye,
        Qx = Pe,
        tD = Fk,
        eD = Wk,
        iD = X_;
    Nn({ target: "Promise", stat: !0 }, {
        allSettled: function(t) {
            var e = this,
                i = tD.f(e),
                n = i.resolve,
                o = i.reject,
                r = eD((function() {
                    var i = Qx(e.resolve),
                        o = [],
                        r = 0,
                        s = 1;
                    iD(t, (function(t) {
                        var a = r++,
                            l = !1;
                        s++, Jx(i, e, t).then((function(t) { l || (l = !0, o[a] = { status: "fulfilled", value: t }, --s || n(o)) }), (function(t) { l || (l = !0, o[a] = { status: "rejected", reason: t }, --s || n(o)) }))
                    })), --s || n(o)
                }));
            return r.error && o(r.value), i.promise
        }
    });
    var nD = Pe,
        oD = Z,
        rD = ye,
        sD = Fk,
        aD = Wk,
        lD = X_,
        hD = "No one promise resolved";
    Nn({ target: "Promise", stat: !0 }, {
        any: function(t) {
            var e = this,
                i = oD("AggregateError"),
                n = sD.f(e),
                o = n.resolve,
                r = n.reject,
                s = aD((function() {
                    var n = nD(e.resolve),
                        s = [],
                        a = 0,
                        l = 1,
                        h = !1;
                    lD(t, (function(t) {
                        var u = a++,
                            d = !1;
                        l++, rD(n, e, t).then((function(t) { d || h || (h = !0, o(t)) }), (function(t) { d || h || (d = !0, s[u] = t, --l || r(new i(s, hD))) }))
                    })), --l || r(new i(s, hD))
                }));
            return s.error && r(s.value), n.promise
        }
    });
    var uD = _w,
        dD = Z,
        cD = V,
        pD = Lw,
        fD = Bk;
    Nn({ target: "Promise", proto: !0, real: !0, forced: !!uD && h((function() { uD.prototype.finally.call({ then: function() {} }, (function() {})) })) }, {
        finally: function(t) {
            var e = pD(this, dD("Promise")),
                i = cD(t);
            return this.then(i ? function(i) { return fD(e, t()).then((function() { return i })) } : t, i ? function(i) { return fD(e, t()).then((function() { throw i })) } : t)
        }
    });
    var mD = W.Promise,
        vD = Fk,
        gD = Wk;
    Nn({ target: "Promise", stat: !0, forced: !0 }, {
        try: function(t) {
            var e = vD.f(this),
                i = gD(t);
            return (i.error ? e.reject : e.resolve)(i.value), e.promise
        }
    });
    var yD = mD;
    ! function(t) { t.exports = yD }(x_);
    var bD = { exports: {} },
        _D = up;
    ! function(t) { t.exports = _D }(bD),
    function(t) {
        var e = __.exports.default,
            i = Ou.exports,
            n = bu.exports,
            o = n_.exports,
            r = m_.exports,
            s = w_.exports,
            a = s_.exports,
            l = x_.exports,
            h = bD.exports,
            u = id.exports;

        function d() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            t.exports = d = function() { return c }, t.exports.__esModule = !0, t.exports.default = t.exports;
            var c = {},
                p = Object.prototype,
                f = p.hasOwnProperty,
                m = "function" == typeof i ? i : {},
                v = m.iterator || "@@iterator",
                g = m.asyncIterator || "@@asyncIterator",
                y = m.toStringTag || "@@toStringTag";

            function b(t, e, i) { return n(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }), t[e] }
            try { b({}, "") } catch (t) { b = function(t, e, i) { return t[e] = i } }

            function _(t, e, i, n) {
                var r = e && e.prototype instanceof x ? e : x,
                    s = o(r.prototype),
                    a = new L(n || []);
                return s._invoke = function(t, e, i) {
                    var n = "suspendedStart";
                    return function(o, r) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) { if ("throw" === o) throw r; return F() }
                        for (i.method = o, i.arg = r;;) {
                            var s = i.delegate;
                            if (s) { var a = P(s, i); if (a) { if (a === k) continue; return a } }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if ("suspendedStart" === n) throw n = "completed", i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            n = "executing";
                            var l = w(t, e, i);
                            if ("normal" === l.type) { if (n = i.done ? "completed" : "suspendedYield", l.arg === k) continue; return { value: l.arg, done: i.done } }
                            "throw" === l.type && (n = "completed", i.method = "throw", i.arg = l.arg)
                        }
                    }
                }(t, i, a), s
            }

            function w(t, e, i) { try { return { type: "normal", arg: t.call(e, i) } } catch (t) { return { type: "throw", arg: t } } }
            c.wrap = _;
            var k = {};

            function x() {}

            function D() {}

            function S() {}
            var C = {};
            b(C, v, (function() { return this }));
            var T = r && r(r(N([])));
            T && T !== p && f.call(T, v) && (C = T);
            var M = S.prototype = x.prototype = o(C);

            function O(t) {
                var e;
                s(e = ["next", "throw", "return"]).call(e, (function(e) { b(t, e, (function(t) { return this._invoke(e, t) })) }))
            }

            function E(t, i) {
                var n;
                this._invoke = function(o, r) {
                    function s() {
                        return new i((function(n, s) {
                            ! function n(o, r, s, a) {
                                var l = w(t[o], t, r);
                                if ("throw" !== l.type) {
                                    var h = l.arg,
                                        u = h.value;
                                    return u && "object" == e(u) && f.call(u, "__await") ? i.resolve(u.__await).then((function(t) { n("next", t, s, a) }), (function(t) { n("throw", t, s, a) })) : i.resolve(u).then((function(t) { h.value = t, s(h) }), (function(t) { return n("throw", t, s, a) }))
                                }
                                a(l.arg)
                            }(o, r, n, s)
                        }))
                    }
                    return n = n ? n.then(s, s) : s()
                }
            }

            function P(t, e) {
                var i = t.iterator[e.method];
                if (void 0 === i) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, P(t, e), "throw" === e.method)) return k;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return k
                }
                var n = w(i, t.iterator, e.arg);
                if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, k;
                var o = n.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, k) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, k)
            }

            function A(t) {
                var e = { tryLoc: t[0] };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function I(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function L(t) { this.tryEntries = [{ tryLoc: "root" }], s(t).call(t, A, this), this.reset(!0) }

            function N(t) {
                if (t) {
                    var e = t[v];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1,
                            n = function e() {
                                for (; ++i < t.length;)
                                    if (f.call(t, i)) return e.value = t[i], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return { next: F }
            }

            function F() { return { value: void 0, done: !0 } }
            return D.prototype = S, b(M, "constructor", S), b(S, "constructor", D), D.displayName = b(S, y, "GeneratorFunction"), c.isGeneratorFunction = function(t) { var e = "function" == typeof t && t.constructor; return !!e && (e === D || "GeneratorFunction" === (e.displayName || e.name)) }, c.mark = function(t) { return a ? a(t, S) : (t.__proto__ = S, b(t, y, "GeneratorFunction")), t.prototype = o(M), t }, c.awrap = function(t) { return { __await: t } }, O(E.prototype), b(E.prototype, g, (function() { return this })), c.AsyncIterator = E, c.async = function(t, e, i, n, o) { void 0 === o && (o = l); var r = new E(_(t, e, i, n), o); return c.isGeneratorFunction(e) ? r : r.next().then((function(t) { return t.done ? t.value : r.next() })) }, O(M), b(M, y, "Generator"), b(M, v, (function() { return this })), b(M, "toString", (function() { return "[object Generator]" })), c.keys = function(t) {
                var e = [];
                for (var i in t) e.push(i);
                return h(e).call(e),
                    function i() { for (; e.length;) { var n = e.pop(); if (n in t) return i.value = n, i.done = !1, i } return i.done = !0, i }
            }, c.values = N, L.prototype = {
                constructor: L,
                reset: function(t) {
                    var e;
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, s(e = this.tryEntries).call(e, I), !t)
                        for (var i in this) "t" === i.charAt(0) && f.call(this, i) && !isNaN(+u(i).call(i, 1)) && (this[i] = void 0)
                },
                stop: function() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function i(i, n) { return r.type = "throw", r.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n }
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n],
                            r = o.completion;
                        if ("root" === o.tryLoc) return i("end");
                        if (o.tryLoc <= this.prev) {
                            var s = f.call(o, "catchLoc"),
                                a = f.call(o, "finallyLoc");
                            if (s && a) { if (this.prev < o.catchLoc) return i(o.catchLoc, !0); if (this.prev < o.finallyLoc) return i(o.finallyLoc) } else if (s) { if (this.prev < o.catchLoc) return i(o.catchLoc, !0) } else { if (!a) throw new Error("try statement without catch or finally"); if (this.prev < o.finallyLoc) return i(o.finallyLoc) }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) { var n = this.tryEntries[i]; if (n.tryLoc <= this.prev && f.call(n, "finallyLoc") && this.prev < n.finallyLoc) { var o = n; break } }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var r = o ? o.completion : {};
                    return r.type = t, r.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, k) : this.complete(r)
                },
                complete: function(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), k },
                finish: function(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var i = this.tryEntries[e]; if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), I(i), k } },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e];
                        if (i.tryLoc === t) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                I(i)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, i) { return this.delegate = { iterator: N(t), resultName: e, nextLoc: i }, "next" === this.method && (this.arg = void 0), k }
            }, c
        }
        t.exports = d, t.exports.__esModule = !0, t.exports.default = t.exports
    }(b_);
    var wD = b_.exports(),
        kD = wD;
    try { regeneratorRuntime = wD } catch (t) { "object" == typeof globalThis ? globalThis.regeneratorRuntime = wD : Function("r", "regeneratorRuntime = r")(wD) }
    var xD = { exports: {} },
        DD = Pe,
        SD = N,
        CD = Ki,
        TD = Zn,
        MD = w.TypeError,
        OD = function(t) {
            return function(e, i, n, o) {
                DD(i);
                var r = SD(e),
                    s = CD(r),
                    a = TD(r),
                    l = t ? a - 1 : 0,
                    h = t ? -1 : 1;
                if (n < 2)
                    for (;;) { if (l in s) { o = s[l], l += h; break } if (l += h, t ? l < 0 : a <= l) throw MD("Reduce of empty array with no initial value") }
                for (; t ? l >= 0 : a > l; l += h) l in s && (o = i(o, s[l], l, r));
                return o
            }
        },
        ED = { left: OD(!1), right: OD(!0) }.left,
        PD = ot,
        AD = Fw;
    Nn({ target: "Array", proto: !0, forced: !Gc("reduce") || !AD && PD > 79 && PD < 83 }, { reduce: function(t) { var e = arguments.length; return ED(this, t, e, e > 1 ? arguments[1] : void 0) } });
    var ID = bd("Array").reduce,
        LD = be,
        ND = ID,
        FD = Array.prototype,
        RD = function(t) { var e = t.reduce; return t === FD || LD(FD, t) && e === FD.reduce ? ND : e };
    ! function(t) { t.exports = RD }(xD);
    var jD = n(xD.exports),
        YD = { exports: {} },
        HD = ka,
        zD = Zn,
        BD = xn,
        GD = w.TypeError,
        WD = function(t, e, i, n, o, r, s, a) {
            for (var l, h, u = o, d = 0, c = !!s && BD(s, a); d < n;) {
                if (d in i) {
                    if (l = c ? c(i[d], d, e) : i[d], r > 0 && HD(l)) h = zD(l), u = WD(t, e, l, h, u, r - 1) - 1;
                    else {
                        if (u >= 9007199254740991) throw GD("Exceed the acceptable array length");
                        t[u] = l
                    }
                    u++
                }
                d++
            }
            return u
        },
        VD = WD,
        UD = Pe,
        XD = N,
        qD = Zn,
        $D = tl;
    Nn({ target: "Array", proto: !0 }, {
        flatMap: function(t) {
            var e, i = XD(this),
                n = qD(i);
            return UD(t), (e = $D(i, 0)).length = VD(e, i, i, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
        }
    });
    var ZD = bd("Array").flatMap,
        KD = be,
        JD = ZD,
        QD = Array.prototype,
        tS = function(t) { var e = t.flatMap; return t === QD || KD(QD, t) && e === QD.flatMap ? JD : e };
    ! function(t) { t.exports = tS }(YD);
    var eS = n(YD.exports),
        iS = { exports: {} },
        nS = { exports: {} },
        oS = h((function() {
            if ("function" == typeof ArrayBuffer) {
                var t = new ArrayBuffer(8);
                Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 })
            }
        })),
        rS = h,
        sS = ee,
        aS = St,
        lS = oS,
        hS = Object.isExtensible,
        uS = rS((function() { hS(1) })) || lS ? function(t) { return !!sS(t) && ((!lS || "ArrayBuffer" != aS(t)) && (!hS || hS(t))) } : hS,
        dS = !h((function() { return Object.isExtensible(Object.preventExtensions({})) })),
        cS = Nn,
        pS = v,
        fS = gi,
        mS = ee,
        vS = j,
        gS = ne.f,
        yS = xa,
        bS = Ca,
        _S = uS,
        wS = dS,
        kS = !1,
        xS = G("meta"),
        DS = 0,
        SS = function(t) { gS(t, xS, { value: { objectID: "O" + DS++, weakData: {} } }) },
        CS = nS.exports = {
            enable: function() {
                CS.enable = function() {}, kS = !0;
                var t = yS.f,
                    e = pS([].splice),
                    i = {};
                i[xS] = 1, t(i).length && (yS.f = function(i) {
                    for (var n = t(i), o = 0, r = n.length; o < r; o++)
                        if (n[o] === xS) { e(n, o, 1); break }
                    return n
                }, cS({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: bS.f }))
            },
            fastKey: function(t, e) {
                if (!mS(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!vS(t, xS)) {
                    if (!_S(t)) return "F";
                    if (!e) return "E";
                    SS(t)
                }
                return t[xS].objectID
            },
            getWeakData: function(t, e) {
                if (!vS(t, xS)) {
                    if (!_S(t)) return !0;
                    if (!e) return !1;
                    SS(t)
                }
                return t[xS].weakData
            },
            onFreeze: function(t) { return wS && kS && _S(t) && !vS(t, xS) && SS(t), t }
        };
    fS[xS] = !0;
    var TS = Nn,
        MS = w,
        OS = nS.exports,
        ES = h,
        PS = ci,
        AS = X_,
        IS = Ew,
        LS = V,
        NS = ee,
        FS = dr,
        RS = ne.f,
        jS = ll.forEach,
        YS = ie,
        HS = Ni.set,
        zS = Ni.getterFor,
        BS = function(t, e, i) {
            var n, o = -1 !== t.indexOf("Map"),
                r = -1 !== t.indexOf("Weak"),
                s = o ? "set" : "add",
                a = MS[t],
                l = a && a.prototype,
                h = {};
            if (YS && LS(a) && (r || l.forEach && !ES((function() {
                    (new a).entries().next()
                })))) {
                var u = (n = e((function(e, i) { HS(IS(e, u), { type: t, collection: new a }), null != i && AS(i, e[s], { that: e, AS_ENTRIES: o }) }))).prototype,
                    d = zS(t);
                jS(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], (function(t) { var e = "add" == t || "set" == t;!(t in l) || r && "clear" == t || PS(u, t, (function(i, n) { var o = d(this).collection; if (!e && r && !NS(i)) return "get" == t && void 0; var s = o[t](0 === i ? 0 : i, n); return e ? this : s })) })), r || RS(u, "size", { configurable: !0, get: function() { return d(this).collection.size } })
            } else n = i.getConstructor(e, t, o, s), OS.enable();
            return FS(n, t, !1, !0), h[t] = n, TS({ global: !0, forced: !0 }, h), r || i.setStrong(n, t, o), n
        },
        GS = ne.f,
        WS = No,
        VS = kw,
        US = xn,
        XS = Ew,
        qS = X_,
        $S = zr,
        ZS = Tw,
        KS = ie,
        JS = nS.exports.fastKey,
        QS = Ni.set,
        tC = Ni.getterFor,
        eC = {
            getConstructor: function(t, e, i, n) {
                var o = t((function(t, o) { XS(t, r), QS(t, { type: e, index: WS(null), first: void 0, last: void 0, size: 0 }), KS || (t.size = 0), null != o && qS(o, t[n], { that: t, AS_ENTRIES: i }) })),
                    r = o.prototype,
                    s = tC(e),
                    a = function(t, e, i) {
                        var n, o, r = s(t),
                            a = l(t, e);
                        return a ? a.value = i : (r.last = a = { index: o = JS(e, !0), key: e, value: i, previous: n = r.last, next: void 0, removed: !1 }, r.first || (r.first = a), n && (n.next = a), KS ? r.size++ : t.size++, "F" !== o && (r.index[o] = a)), t
                    },
                    l = function(t, e) {
                        var i, n = s(t),
                            o = JS(e);
                        if ("F" !== o) return n.index[o];
                        for (i = n.first; i; i = i.next)
                            if (i.key == e) return i
                    };
                return VS(r, {
                    clear: function() {
                        for (var t = s(this), e = t.index, i = t.first; i;) i.removed = !0, i.previous && (i.previous = i.previous.next = void 0), delete e[i.index], i = i.next;
                        t.first = t.last = void 0, KS ? t.size = 0 : this.size = 0
                    },
                    delete: function(t) {
                        var e = this,
                            i = s(e),
                            n = l(e, t);
                        if (n) {
                            var o = n.next,
                                r = n.previous;
                            delete i.index[n.index], n.removed = !0, r && (r.next = o), o && (o.previous = r), i.first == n && (i.first = o), i.last == n && (i.last = r), KS ? i.size-- : e.size--
                        }
                        return !!n
                    },
                    forEach: function(t) {
                        for (var e, i = s(this), n = US(t, arguments.length > 1 ? arguments[1] : void 0); e = e ? e.next : i.first;)
                            for (n(e.value, e.key, this); e && e.removed;) e = e.previous
                    },
                    has: function(t) { return !!l(this, t) }
                }), VS(r, i ? { get: function(t) { var e = l(this, t); return e && e.value }, set: function(t, e) { return a(this, 0 === t ? 0 : t, e) } } : { add: function(t) { return a(this, t = 0 === t ? 0 : t, t) } }), KS && GS(r, "size", { get: function() { return s(this).size } }), o
            },
            setStrong: function(t, e, i) {
                var n = e + " Iterator",
                    o = tC(e),
                    r = tC(n);
                $S(t, e, (function(t, e) { QS(this, { type: n, target: t, state: o(t), kind: e, last: void 0 }) }), (function() { for (var t = r(this), e = t.kind, i = t.last; i && i.removed;) i = i.previous; return t.target && (t.last = i = i ? i.next : t.state.first) ? "keys" == e ? { value: i.key, done: !1 } : "values" == e ? { value: i.value, done: !1 } : { value: [i.key, i.value], done: !1 } : (t.target = void 0, { value: void 0, done: !0 }) }), i ? "entries" : "values", !i, !0), ZS(e)
            }
        };
    BS("Map", (function(t) { return function() { return t(this, arguments.length ? arguments[0] : void 0) } }), eC);
    var iC = W.Map;
    ! function(t) { t.exports = iC }(iS);
    var nC = n(iS.exports),
        oC = { exports: {} };
    BS("Set", (function(t) { return function() { return t(this, arguments.length ? arguments[0] : void 0) } }), eC);
    var rC = W.Set;
    ! function(t) { t.exports = rC }(oC);
    var sC = n(oC.exports),
        aC = { exports: {} };
    ! function(t) { t.exports = Ld }(aC);
    var lC = n(aC.exports),
        hC = { exports: {} },
        uC = Ls;
    ! function(t) { t.exports = uC }(hC);
    var dC = n(hC.exports),
        cC = { exports: {} },
        pC = Aa,
        fC = Math.floor,
        mC = function(t, e) {
            var i = t.length,
                n = fC(i / 2);
            return i < 8 ? vC(t, e) : gC(t, mC(pC(t, 0, n), e), mC(pC(t, n), e), e)
        },
        vC = function(t, e) {
            for (var i, n, o = t.length, r = 1; r < o;) {
                for (n = r, i = t[r]; n && e(t[n - 1], i) > 0;) t[n] = t[--n];
                n !== r++ && (t[n] = i)
            }
            return t
        },
        gC = function(t, e, i, n) { for (var o = e.length, r = i.length, s = 0, a = 0; s < o || a < r;) t[s + a] = s < o && a < r ? n(e[s], i[a]) <= 0 ? e[s++] : i[a++] : s < o ? e[s++] : i[a++]; return t },
        yC = mC,
        bC = K.match(/firefox\/(\d+)/i),
        _C = !!bC && +bC[1],
        wC = /MSIE|Trident/.test(K),
        kC = K.match(/AppleWebKit\/(\d+)\./),
        xC = !!kC && +kC[1],
        DC = Nn,
        SC = v,
        CC = Pe,
        TC = N,
        MC = Zn,
        OC = Ft,
        EC = h,
        PC = yC,
        AC = Gc,
        IC = _C,
        LC = wC,
        NC = ot,
        FC = xC,
        RC = [],
        jC = SC(RC.sort),
        YC = SC(RC.push),
        HC = EC((function() { RC.sort(void 0) })),
        zC = EC((function() { RC.sort(null) })),
        BC = AC("sort"),
        GC = !EC((function() {
            if (NC) return NC < 70;
            if (!(IC && IC > 3)) {
                if (LC) return !0;
                if (FC) return FC < 603;
                var t, e, i, n, o = "";
                for (t = 65; t < 76; t++) {
                    switch (e = String.fromCharCode(t), t) {
                        case 66:
                        case 69:
                        case 70:
                        case 72:
                            i = 3;
                            break;
                        case 68:
                        case 71:
                            i = 4;
                            break;
                        default:
                            i = 2
                    }
                    for (n = 0; n < 47; n++) RC.push({ k: e + n, v: i })
                }
                for (RC.sort((function(t, e) { return e.v - t.v })), n = 0; n < RC.length; n++) e = RC[n].k.charAt(0), o.charAt(o.length - 1) !== e && (o += e);
                return "DGBEFHACIJK" !== o
            }
        }));
    DC({ target: "Array", proto: !0, forced: HC || !zC || !BC || !GC }, {
        sort: function(t) {
            void 0 !== t && CC(t);
            var e = TC(this);
            if (GC) return void 0 === t ? jC(e) : jC(e, t);
            var i, n, o = [],
                r = MC(e);
            for (n = 0; n < r; n++) n in e && YC(o, e[n]);
            for (PC(o, function(t) { return function(e, i) { return void 0 === i ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, i) || 0 : OC(e) > OC(i) ? 1 : -1 } }(t)), i = o.length, n = 0; n < i;) e[n] = o[n++];
            for (; n < r;) delete e[n++];
            return e
        }
    });
    var WC = bd("Array").sort,
        VC = be,
        UC = WC,
        XC = Array.prototype,
        qC = function(t) { var e = t.sort; return t === XC || VC(XC, t) && e === XC.sort ? UC : e };
    ! function(t) { t.exports = qC }(cC);
    var $C = n(cC.exports),
        ZC = { exports: {} },
        KC = ll.some;
    Nn({ target: "Array", proto: !0, forced: !Gc("some") }, { some: function(t) { return KC(this, t, arguments.length > 1 ? arguments[1] : void 0) } });
    var JC = bd("Array").some,
        QC = be,
        tT = JC,
        eT = Array.prototype,
        iT = function(t) { var e = t.some; return t === eT || QC(eT, t) && e === eT.some ? tT : e };
    ! function(t) { t.exports = iT }(ZC);
    var nT = n(ZC.exports),
        oT = { exports: {} },
        rT = bd("Array").keys,
        sT = It,
        aT = j,
        lT = be,
        hT = rT,
        uT = Array.prototype,
        dT = { DOMTokenList: !0, NodeList: !0 },
        cT = function(t) { var e = t.keys; return t === uT || lT(uT, t) && e === uT.keys || aT(dT, sT(t)) ? hT : e };
    ! function(t) { t.exports = cT }(oT);
    var pT = n(oT.exports),
        fT = { exports: {} },
        mT = bd("Array").values,
        vT = It,
        gT = j,
        yT = be,
        bT = mT,
        _T = Array.prototype,
        wT = { DOMTokenList: !0, NodeList: !0 },
        kT = function(t) { var e = t.values; return t === _T || yT(_T, t) && e === _T.values || gT(wT, vT(t)) ? bT : e };
    ! function(t) { t.exports = kT }(fT);
    var xT = n(fT.exports),
        DT = { exports: {} },
        ST = bd("Array").entries,
        CT = It,
        TT = j,
        MT = be,
        OT = ST,
        ET = Array.prototype,
        PT = { DOMTokenList: !0, NodeList: !0 },
        AT = function(t) { var e = t.entries; return t === ET || MT(ET, t) && e === ET.entries || TT(PT, CT(t)) ? OT : e };
    ! function(t) { t.exports = AT }(DT);
    var IT = n(DT.exports),
        LT = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
        NT = new Uint8Array(16);

    function FT() { if (!LT) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return LT(NT) }
    for (var RT = [], jT = 0; jT < 256; ++jT) RT[jT] = (jT + 256).toString(16).substr(1);

    function YT(t, e) {
        var i = e || 0,
            n = RT;
        return [n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], "-", n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]], n[t[i++]]].join("")
    }
    var HT;

    function zT(t, e, i) {
        var n = function(t, n, o, r) {
            var s = o && r || 0;
            if ("string" == typeof t && (t = function(t) { t = unescape(encodeURIComponent(t)); for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = t.charCodeAt(i); return e }(t)), "string" == typeof n && (n = function(t) { var e = []; return t.replace(/[a-fA-F0-9]{2}/g, (function(t) { e.push(parseInt(t, 16)) })), e }(n)), !Array.isArray(t)) throw TypeError("value must be an array of bytes");
            if (!Array.isArray(n) || 16 !== n.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
            var a = i(n.concat(t));
            if (a[6] = 15 & a[6] | e, a[8] = 63 & a[8] | 128, o)
                for (var l = 0; l < 16; ++l) o[s + l] = a[l];
            return o || YT(a)
        };
        try { n.name = t } catch (t) {}
        return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n
    }

    function BT(t, e) { var i = (65535 & t) + (65535 & e); return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i }

    function GT(t, e, i, n, o, r) { return BT((s = BT(BT(e, t), BT(n, r))) << (a = o) | s >>> 32 - a, i); var s, a }

    function WT(t, e, i, n, o, r, s) { return GT(e & i | ~e & n, t, e, o, r, s) }

    function VT(t, e, i, n, o, r, s) { return GT(e & n | i & ~n, t, e, o, r, s) }

    function UT(t, e, i, n, o, r, s) { return GT(e ^ i ^ n, t, e, o, r, s) }

    function XT(t, e, i, n, o, r, s) { return GT(i ^ (e | ~n), t, e, o, r, s) }

    function qT(t, e, i) {
        var n = e && i || 0;
        "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
        var o = (t = t || {}).random || (t.rng || FT)();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e)
            for (var r = 0; r < 16; ++r) e[n + r] = o[r];
        return e || YT(o)
    }

    function $T(t, e, i, n) {
        switch (t) {
            case 0:
                return e & i ^ ~e & n;
            case 1:
                return e ^ i ^ n;
            case 2:
                return e & i ^ e & n ^ i & n;
            case 3:
                return e ^ i ^ n
        }
    }

    function ZT(t, e) { return t << e | t >>> 32 - e }

    function KT(t, e) {
        var i = pc(t);
        if (Mh) {
            var n = Mh(t);
            e && (n = Af(n).call(n, (function(e) { return Hh(t, e).enumerable }))), i.push.apply(i, n)
        }
        return i
    }

    function JT(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i, n, o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? tp(i = KT(Object(o), !0)).call(i, (function(e) { Du(t, e, o[e]) })) : Qh ? lu(t, Qh(o)) : tp(n = KT(Object(o))).call(n, (function(e) { gu(t, e, Hh(o, e)) }))
        }
        return t
    }

    function QT(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }

    function tM(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return eM(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eM(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function eM(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function iM(t) { return new oM(t) }
    zT("v3", 48, (function(t) {
        if ("string" == typeof t) {
            var e = unescape(encodeURIComponent(t));
            t = new Array(e.length);
            for (var i = 0; i < e.length; i++) t[i] = e.charCodeAt(i)
        }
        return function(t) {
            var e, i, n, o = [],
                r = 32 * t.length,
                s = "0123456789abcdef";
            for (e = 0; e < r; e += 8) i = t[e >> 5] >>> e % 32 & 255, n = parseInt(s.charAt(i >>> 4 & 15) + s.charAt(15 & i), 16), o.push(n);
            return o
        }(function(t, e) {
            var i, n, o, r, s;
            t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
            var a = 1732584193,
                l = -271733879,
                h = -1732584194,
                u = 271733878;
            for (i = 0; i < t.length; i += 16) n = a, o = l, r = h, s = u, a = WT(a, l, h, u, t[i], 7, -680876936), u = WT(u, a, l, h, t[i + 1], 12, -389564586), h = WT(h, u, a, l, t[i + 2], 17, 606105819), l = WT(l, h, u, a, t[i + 3], 22, -1044525330), a = WT(a, l, h, u, t[i + 4], 7, -176418897), u = WT(u, a, l, h, t[i + 5], 12, 1200080426), h = WT(h, u, a, l, t[i + 6], 17, -1473231341), l = WT(l, h, u, a, t[i + 7], 22, -45705983), a = WT(a, l, h, u, t[i + 8], 7, 1770035416), u = WT(u, a, l, h, t[i + 9], 12, -1958414417), h = WT(h, u, a, l, t[i + 10], 17, -42063), l = WT(l, h, u, a, t[i + 11], 22, -1990404162), a = WT(a, l, h, u, t[i + 12], 7, 1804603682), u = WT(u, a, l, h, t[i + 13], 12, -40341101), h = WT(h, u, a, l, t[i + 14], 17, -1502002290), a = VT(a, l = WT(l, h, u, a, t[i + 15], 22, 1236535329), h, u, t[i + 1], 5, -165796510), u = VT(u, a, l, h, t[i + 6], 9, -1069501632), h = VT(h, u, a, l, t[i + 11], 14, 643717713), l = VT(l, h, u, a, t[i], 20, -373897302), a = VT(a, l, h, u, t[i + 5], 5, -701558691), u = VT(u, a, l, h, t[i + 10], 9, 38016083), h = VT(h, u, a, l, t[i + 15], 14, -660478335), l = VT(l, h, u, a, t[i + 4], 20, -405537848), a = VT(a, l, h, u, t[i + 9], 5, 568446438), u = VT(u, a, l, h, t[i + 14], 9, -1019803690), h = VT(h, u, a, l, t[i + 3], 14, -187363961), l = VT(l, h, u, a, t[i + 8], 20, 1163531501), a = VT(a, l, h, u, t[i + 13], 5, -1444681467), u = VT(u, a, l, h, t[i + 2], 9, -51403784), h = VT(h, u, a, l, t[i + 7], 14, 1735328473), a = UT(a, l = VT(l, h, u, a, t[i + 12], 20, -1926607734), h, u, t[i + 5], 4, -378558), u = UT(u, a, l, h, t[i + 8], 11, -2022574463), h = UT(h, u, a, l, t[i + 11], 16, 1839030562), l = UT(l, h, u, a, t[i + 14], 23, -35309556), a = UT(a, l, h, u, t[i + 1], 4, -1530992060), u = UT(u, a, l, h, t[i + 4], 11, 1272893353), h = UT(h, u, a, l, t[i + 7], 16, -155497632), l = UT(l, h, u, a, t[i + 10], 23, -1094730640), a = UT(a, l, h, u, t[i + 13], 4, 681279174), u = UT(u, a, l, h, t[i], 11, -358537222), h = UT(h, u, a, l, t[i + 3], 16, -722521979), l = UT(l, h, u, a, t[i + 6], 23, 76029189), a = UT(a, l, h, u, t[i + 9], 4, -640364487), u = UT(u, a, l, h, t[i + 12], 11, -421815835), h = UT(h, u, a, l, t[i + 15], 16, 530742520), a = XT(a, l = UT(l, h, u, a, t[i + 2], 23, -995338651), h, u, t[i], 6, -198630844), u = XT(u, a, l, h, t[i + 7], 10, 1126891415), h = XT(h, u, a, l, t[i + 14], 15, -1416354905), l = XT(l, h, u, a, t[i + 5], 21, -57434055), a = XT(a, l, h, u, t[i + 12], 6, 1700485571), u = XT(u, a, l, h, t[i + 3], 10, -1894986606), h = XT(h, u, a, l, t[i + 10], 15, -1051523), l = XT(l, h, u, a, t[i + 1], 21, -2054922799), a = XT(a, l, h, u, t[i + 8], 6, 1873313359), u = XT(u, a, l, h, t[i + 15], 10, -30611744), h = XT(h, u, a, l, t[i + 6], 15, -1560198380), l = XT(l, h, u, a, t[i + 13], 21, 1309151649), a = XT(a, l, h, u, t[i + 4], 6, -145523070), u = XT(u, a, l, h, t[i + 11], 10, -1120210379), h = XT(h, u, a, l, t[i + 2], 15, 718787259), l = XT(l, h, u, a, t[i + 9], 21, -343485551), a = BT(a, n), l = BT(l, o), h = BT(h, r), u = BT(u, s);
            return [a, l, h, u]
        }(function(t) { var e, i = []; for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1) i[e] = 0; var n = 8 * t.length; for (e = 0; e < n; e += 8) i[e >> 5] |= (255 & t[e / 8]) << e % 32; return i }(t), 8 * t.length))
    })), zT("v5", 80, (function(t) {
        var e = [1518500249, 1859775393, 2400959708, 3395469782],
            i = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" == typeof t) {
            var n = unescape(encodeURIComponent(t));
            t = new Array(n.length);
            for (var o = 0; o < n.length; o++) t[o] = n.charCodeAt(o)
        }
        t.push(128);
        var r = t.length / 4 + 2,
            s = Math.ceil(r / 16),
            a = new Array(s);
        for (o = 0; o < s; o++) { a[o] = new Array(16); for (var l = 0; l < 16; l++) a[o][l] = t[64 * o + 4 * l] << 24 | t[64 * o + 4 * l + 1] << 16 | t[64 * o + 4 * l + 2] << 8 | t[64 * o + 4 * l + 3] }
        for (a[s - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = 8 * (t.length - 1) & 4294967295, o = 0; o < s; o++) {
            for (var h = new Array(80), u = 0; u < 16; u++) h[u] = a[o][u];
            for (u = 16; u < 80; u++) h[u] = ZT(h[u - 3] ^ h[u - 8] ^ h[u - 14] ^ h[u - 16], 1);
            var d = i[0],
                c = i[1],
                p = i[2],
                f = i[3],
                m = i[4];
            for (u = 0; u < 80; u++) {
                var v = Math.floor(u / 20),
                    g = ZT(d, 5) + $T(v, c, p, f) + m + e[v] + h[u] >>> 0;
                m = f, f = p, p = ZT(c, 30) >>> 0, c = d, d = g
            }
            i[0] = i[0] + d >>> 0, i[1] = i[1] + c >>> 0, i[2] = i[2] + p >>> 0, i[3] = i[3] + f >>> 0, i[4] = i[4] + m >>> 0
        }
        return [i[0] >> 24 & 255, i[0] >> 16 & 255, i[0] >> 8 & 255, 255 & i[0], i[1] >> 24 & 255, i[1] >> 16 & 255, i[1] >> 8 & 255, 255 & i[1], i[2] >> 24 & 255, i[2] >> 16 & 255, i[2] >> 8 & 255, 255 & i[2], i[3] >> 24 & 255, i[3] >> 16 & 255, i[3] >> 8 & 255, 255 & i[3], i[4] >> 24 & 255, i[4] >> 16 & 255, i[4] >> 8 & 255, 255 & i[4]]
    }));
    var nM = function() {
            function t(e, i, n) {
                var o, r, s;
                yu(this, t), Du(this, "_source", void 0), Du(this, "_transformers", void 0), Du(this, "_target", void 0), Du(this, "_listeners", { add: Hc(o = this._add).call(o, this), remove: Hc(r = this._remove).call(r, this), update: Hc(s = this._update).call(s, this) }), this._source = e, this._transformers = i, this._target = n
            }
            return xu(t, [{ key: "all", value: function() { return this._target.update(this._transformItems(this._source.get())), this } }, { key: "start", value: function() { return this._source.on("add", this._listeners.add), this._source.on("remove", this._listeners.remove), this._source.on("update", this._listeners.update), this } }, { key: "stop", value: function() { return this._source.off("add", this._listeners.add), this._source.off("remove", this._listeners.remove), this._source.off("update", this._listeners.update), this } }, { key: "_transformItems", value: function(t) { var e; return jD(e = this._transformers).call(e, (function(t, e) { return e(t) }), t) } }, { key: "_add", value: function(t, e) { null != e && this._target.add(this._transformItems(this._source.get(e.items))) } }, { key: "_update", value: function(t, e) { null != e && this._target.update(this._transformItems(this._source.get(e.items))) } }, { key: "_remove", value: function(t, e) { null != e && this._target.remove(this._transformItems(e.oldData)) } }]), t
        }(),
        oM = function() {
            function t(e) { yu(this, t), Du(this, "_source", void 0), Du(this, "_transformers", []), this._source = e }
            return xu(t, [{ key: "filter", value: function(t) { return this._transformers.push((function(e) { return Af(e).call(e, t) })), this } }, { key: "map", value: function(t) { return this._transformers.push((function(e) { return lc(e).call(e, t) })), this } }, { key: "flatMap", value: function(t) { return this._transformers.push((function(e) { return eS(e).call(e, t) })), this } }, { key: "to", value: function(t) { return new nM(this._source, this._transformers, t) } }]), t
        }();

    function rM(t) { return "string" == typeof t || "number" == typeof t }
    var sM = function() {
            function t(e) { yu(this, t), Du(this, "delay", void 0), Du(this, "max", void 0), Du(this, "_queue", []), Du(this, "_timeout", null), Du(this, "_extended", null), this.delay = null, this.max = 1 / 0, this.setOptions(e) }
            return xu(t, [{ key: "setOptions", value: function(t) { t && void 0 !== t.delay && (this.delay = t.delay), t && void 0 !== t.max && (this.max = t.max), this._flushIfNeeded() } }, {
                key: "destroy",
                value: function() {
                    if (this.flush(), this._extended) {
                        for (var t = this._extended.object, e = this._extended.methods, i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.original ? t[n.name] = n.original : delete t[n.name]
                        }
                        this._extended = null
                    }
                }
            }, {
                key: "replace",
                value: function(t, e) {
                    var i = this,
                        n = t[e];
                    if (!n) throw new Error("Method " + e + " undefined");
                    t[e] = function() {
                        for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
                        i.queue({ args: e, fn: n, context: this })
                    }
                }
            }, { key: "queue", value: function(t) { "function" == typeof t ? this._queue.push({ fn: t }) : this._queue.push(t), this._flushIfNeeded() } }, {
                key: "_flushIfNeeded",
                value: function() {
                    var t = this;
                    this._queue.length > this.max && this.flush(), null != this._timeout && (clearTimeout(this._timeout), this._timeout = null), this.queue.length > 0 && "number" == typeof this.delay && (this._timeout = xv((function() { t.flush() }), this.delay))
                }
            }, {
                key: "flush",
                value: function() {
                    var t, e;
                    tp(t = Ap(e = this._queue).call(e, 0)).call(t, (function(t) { t.fn.apply(t.context || t.fn, t.args || []) }))
                }
            }], [{
                key: "extend",
                value: function(e, i) {
                    var n = new t(i);
                    if (void 0 !== e.flush) throw new Error("Target object already has a property flush");
                    e.flush = function() { n.flush() };
                    var o = [{ name: "flush", original: void 0 }];
                    if (i && i.replace)
                        for (var r = 0; r < i.replace.length; r++) {
                            var s = i.replace[r];
                            o.push({ name: s, original: e[s] }), n.replace(e, s)
                        }
                    return n._extended = { object: e, methods: o }, n
                }
            }]), t
        }(),
        aM = function() {
            function t() { yu(this, t), Du(this, "_subscribers", { "*": [], add: [], remove: [], update: [] }), Du(this, "subscribe", t.prototype.on), Du(this, "unsubscribe", t.prototype.off) }
            return xu(t, [{
                key: "_trigger",
                value: function(t, e, i) {
                    var n, o;
                    if ("*" === t) throw new Error("Cannot trigger event *");
                    tp(n = Xd(o = []).call(o, jd(this._subscribers[t]), jd(this._subscribers["*"]))).call(n, (function(n) { n(t, e, null != i ? i : null) }))
                }
            }, { key: "on", value: function(t, e) { "function" == typeof e && this._subscribers[t].push(e) } }, {
                key: "off",
                value: function(t, e) {
                    var i;
                    this._subscribers[t] = Af(i = this._subscribers[t]).call(i, (function(t) { return t !== e }))
                }
            }]), t
        }();
    HT = lC;
    var lM = function() {
        function t(e) { yu(this, t), Du(this, "_pairs", void 0), this._pairs = e }
        return xu(t, [{
            key: HT,
            value: kD.mark((function t() {
                var e, i, n, o, r;
                return kD.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = tM(this._pairs), t.prev = 1, e.s();
                        case 3:
                            if ((i = e.n()).done) { t.next = 9; break }
                            return n = Ad(i.value, 2), o = n[0], r = n[1], t.next = 7, [o, r];
                        case 7:
                            t.next = 3;
                            break;
                        case 9:
                            t.next = 14;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
                        case 14:
                            return t.prev = 14, e.f(), t.finish(14);
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [1, 11, 14, 17]
                ])
            }))
        }, {
            key: "entries",
            value: kD.mark((function t() {
                var e, i, n, o, r;
                return kD.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = tM(this._pairs), t.prev = 1, e.s();
                        case 3:
                            if ((i = e.n()).done) { t.next = 9; break }
                            return n = Ad(i.value, 2), o = n[0], r = n[1], t.next = 7, [o, r];
                        case 7:
                            t.next = 3;
                            break;
                        case 9:
                            t.next = 14;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
                        case 14:
                            return t.prev = 14, e.f(), t.finish(14);
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [1, 11, 14, 17]
                ])
            }))
        }, {
            key: "keys",
            value: kD.mark((function t() {
                var e, i, n, o;
                return kD.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = tM(this._pairs), t.prev = 1, e.s();
                        case 3:
                            if ((i = e.n()).done) { t.next = 9; break }
                            return n = Ad(i.value, 1), o = n[0], t.next = 7, o;
                        case 7:
                            t.next = 3;
                            break;
                        case 9:
                            t.next = 14;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
                        case 14:
                            return t.prev = 14, e.f(), t.finish(14);
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [1, 11, 14, 17]
                ])
            }))
        }, {
            key: "values",
            value: kD.mark((function t() {
                var e, i, n, o;
                return kD.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = tM(this._pairs), t.prev = 1, e.s();
                        case 3:
                            if ((i = e.n()).done) { t.next = 9; break }
                            return n = Ad(i.value, 2), o = n[1], t.next = 7, o;
                        case 7:
                            t.next = 3;
                            break;
                        case 9:
                            t.next = 14;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(1), e.e(t.t0);
                        case 14:
                            return t.prev = 14, e.f(), t.finish(14);
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [1, 11, 14, 17]
                ])
            }))
        }, { key: "toIdArray", value: function() { var t; return lc(t = jd(this._pairs)).call(t, (function(t) { return t[0] })) } }, { key: "toItemArray", value: function() { var t; return lc(t = jd(this._pairs)).call(t, (function(t) { return t[1] })) } }, { key: "toEntryArray", value: function() { return jd(this._pairs) } }, {
            key: "toObjectMap",
            value: function() {
                var t, e = zm(null),
                    i = tM(this._pairs);
                try {
                    for (i.s(); !(t = i.n()).done;) {
                        var n = Ad(t.value, 2),
                            o = n[0],
                            r = n[1];
                        e[o] = r
                    }
                } catch (t) { i.e(t) } finally { i.f() }
                return e
            }
        }, { key: "toMap", value: function() { return new nC(this._pairs) } }, { key: "toIdSet", value: function() { return new sC(this.toIdArray()) } }, { key: "toItemSet", value: function() { return new sC(this.toItemArray()) } }, { key: "cache", value: function() { return new t(jd(this._pairs)) } }, {
            key: "distinct",
            value: function(t) {
                var e, i = new sC,
                    n = tM(this._pairs);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var o = Ad(e.value, 2),
                            r = o[0],
                            s = o[1];
                        i.add(t(s, r))
                    }
                } catch (t) { n.e(t) } finally { n.f() }
                return i
            }
        }, {
            key: "filter",
            value: function(e) {
                var i = this._pairs;
                return new t(Du({}, lC, kD.mark((function t() {
                    var n, o, r, s, a;
                    return kD.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                n = tM(i), t.prev = 1, n.s();
                            case 3:
                                if ((o = n.n()).done) { t.next = 10; break }
                                if (r = Ad(o.value, 2), s = r[0], a = r[1], !e(a, s)) { t.next = 8; break }
                                return t.next = 8, [s, a];
                            case 8:
                                t.next = 3;
                                break;
                            case 10:
                                t.next = 15;
                                break;
                            case 12:
                                t.prev = 12, t.t0 = t.catch(1), n.e(t.t0);
                            case 15:
                                return t.prev = 15, n.f(), t.finish(15);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 12, 15, 18]
                    ])
                }))))
            }
        }, {
            key: "forEach",
            value: function(t) {
                var e, i = tM(this._pairs);
                try {
                    for (i.s(); !(e = i.n()).done;) {
                        var n = Ad(e.value, 2),
                            o = n[0];
                        t(n[1], o)
                    }
                } catch (t) { i.e(t) } finally { i.f() }
            }
        }, {
            key: "map",
            value: function(e) {
                var i = this._pairs;
                return new t(Du({}, lC, kD.mark((function t() {
                    var n, o, r, s, a;
                    return kD.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                n = tM(i), t.prev = 1, n.s();
                            case 3:
                                if ((o = n.n()).done) { t.next = 9; break }
                                return r = Ad(o.value, 2), s = r[0], a = r[1], t.next = 7, [s, e(a, s)];
                            case 7:
                                t.next = 3;
                                break;
                            case 9:
                                t.next = 14;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(1), n.e(t.t0);
                            case 14:
                                return t.prev = 14, n.f(), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                }))))
            }
        }, {
            key: "max",
            value: function(t) {
                var e = dC(this._pairs),
                    i = e.next();
                if (i.done) return null;
                for (var n = i.value[1], o = t(i.value[1], i.value[0]); !(i = e.next()).done;) {
                    var r = Ad(i.value, 2),
                        s = r[0],
                        a = r[1],
                        l = t(a, s);
                    l > o && (o = l, n = a)
                }
                return n
            }
        }, {
            key: "min",
            value: function(t) {
                var e = dC(this._pairs),
                    i = e.next();
                if (i.done) return null;
                for (var n = i.value[1], o = t(i.value[1], i.value[0]); !(i = e.next()).done;) {
                    var r = Ad(i.value, 2),
                        s = r[0],
                        a = r[1],
                        l = t(a, s);
                    l < o && (o = l, n = a)
                }
                return n
            }
        }, {
            key: "reduce",
            value: function(t, e) {
                var i, n = tM(this._pairs);
                try {
                    for (n.s(); !(i = n.n()).done;) {
                        var o = Ad(i.value, 2),
                            r = o[0];
                        e = t(e, o[1], r)
                    }
                } catch (t) { n.e(t) } finally { n.f() }
                return e
            }
        }, {
            key: "sort",
            value: function(e) {
                var i = this;
                return new t(Du({}, lC, (function() {
                    var t;
                    return dC($C(t = jd(i._pairs)).call(t, (function(t, i) {
                        var n = Ad(t, 2),
                            o = n[0],
                            r = n[1],
                            s = Ad(i, 2),
                            a = s[0],
                            l = s[1];
                        return e(r, l, o, a)
                    })))
                })))
            }
        }]), t
    }();
    var hM = function(t) {
            p_(i, t);
            var e = QT(i);

            function i(t, n) { var o; return yu(this, i), Du(i_(o = e.call(this)), "flush", void 0), Du(i_(o), "length", void 0), Du(i_(o), "_options", void 0), Du(i_(o), "_data", void 0), Du(i_(o), "_idProp", void 0), Du(i_(o), "_queue", null), t && !tc(t) && (n = t, t = []), o._options = n || {}, o._data = new nC, o.length = 0, o._idProp = o._options.fieldId || "id", t && t.length && o.add(t), o.setOptions(n), o }
            return xu(i, [{ key: "idProp", get: function() { return this._idProp } }, { key: "setOptions", value: function(t) { t && void 0 !== t.queue && (!1 === t.queue ? this._queue && (this._queue.destroy(), this._queue = null) : (this._queue || (this._queue = sM.extend(this, { replace: ["add", "update", "remove"] })), t.queue && "object" === Rd(t.queue) && this._queue.setOptions(t.queue))) } }, {
                key: "add",
                value: function(t, e) {
                    var i, n = this,
                        o = [];
                    if (tc(t)) { var r = lc(t).call(t, (function(t) { return t[n._idProp] })); if (nT(r).call(r, (function(t) { return n._data.has(t) }))) throw new Error("A duplicate id was found in the parameter array."); for (var s = 0, a = t.length; s < a; s++) i = this._addItem(t[s]), o.push(i) } else {
                        if (!t || "object" !== Rd(t)) throw new Error("Unknown dataType");
                        i = this._addItem(t), o.push(i)
                    }
                    return o.length && this._trigger("add", { items: o }, e), o
                }
            }, {
                key: "update",
                value: function(t, e) {
                    var i = this,
                        n = [],
                        o = [],
                        r = [],
                        s = [],
                        a = this._idProp,
                        l = function(t) {
                            var e = t[a];
                            if (null != e && i._data.has(e)) {
                                var l = t,
                                    h = qp({}, i._data.get(e)),
                                    u = i._updateItem(l);
                                o.push(u), s.push(l), r.push(h)
                            } else {
                                var d = i._addItem(t);
                                n.push(d)
                            }
                        };
                    if (tc(t))
                        for (var h = 0, u = t.length; h < u; h++) t[h] && "object" === Rd(t[h]) ? l(t[h]) : console.warn("Ignoring input item, which is not an object at index " + h);
                    else {
                        if (!t || "object" !== Rd(t)) throw new Error("Unknown dataType");
                        l(t)
                    }
                    if (n.length && this._trigger("add", { items: n }, e), o.length) {
                        var d = { items: o, oldData: r, data: s };
                        this._trigger("update", d, e)
                    }
                    return Xd(n).call(n, o)
                }
            }, {
                key: "updateOnly",
                value: function(t, e) {
                    var i, n = this;
                    tc(t) || (t = [t]);
                    var o = lc(i = lc(t).call(t, (function(t) { var e = n._data.get(t[n._idProp]); if (null == e) throw new Error("Updating non-existent items is not allowed."); return { oldData: e, update: t } }))).call(i, (function(t) {
                        var e = t.oldData,
                            i = t.update,
                            o = e[n._idProp],
                            r = Oy(e, i);
                        return n._data.set(o, r), { id: o, oldData: e, updatedData: r }
                    }));
                    if (o.length) { var r = { items: lc(o).call(o, (function(t) { return t.id })), oldData: lc(o).call(o, (function(t) { return t.oldData })), data: lc(o).call(o, (function(t) { return t.updatedData })) }; return this._trigger("update", r, e), r.items }
                    return []
                }
            }, {
                key: "get",
                value: function(t, e) {
                    var i = void 0,
                        n = void 0,
                        o = void 0;
                    rM(t) ? (i = t, o = e) : tc(t) ? (n = t, o = e) : o = t;
                    var r, s = o && "Object" === o.returnType ? "Object" : "Array",
                        a = o && Af(o),
                        l = [],
                        h = void 0,
                        u = void 0,
                        d = void 0;
                    if (null != i)(h = this._data.get(i)) && a && !a(h) && (h = void 0);
                    else if (null != n)
                        for (var c = 0, p = n.length; c < p; c++) null == (h = this._data.get(n[c])) || a && !a(h) || l.push(h);
                    else
                        for (var f, m = 0, v = (u = jd(pT(f = this._data).call(f))).length; m < v; m++) d = u[m], null == (h = this._data.get(d)) || a && !a(h) || l.push(h);
                    if (o && o.order && null == i && this._sort(l, o.order), o && o.fields) {
                        var g = o.fields;
                        if (null != i && null != h) h = this._filterFields(h, g);
                        else
                            for (var y = 0, b = l.length; y < b; y++) l[y] = this._filterFields(l[y], g)
                    }
                    if ("Object" == s) {
                        for (var _ = {}, w = 0, k = l.length; w < k; w++) {
                            var x = l[w];
                            _[x[this._idProp]] = x
                        }
                        return _
                    }
                    return null != i ? null !== (r = h) && void 0 !== r ? r : null : l
                }
            }, {
                key: "getIds",
                value: function(t) {
                    var e = this._data,
                        i = t && Af(t),
                        n = t && t.order,
                        o = jd(pT(e).call(e)),
                        r = [];
                    if (i)
                        if (n) {
                            for (var s = [], a = 0, l = o.length; a < l; a++) {
                                var h = o[a],
                                    u = this._data.get(h);
                                null != u && i(u) && s.push(u)
                            }
                            this._sort(s, n);
                            for (var d = 0, c = s.length; d < c; d++) r.push(s[d][this._idProp])
                        } else
                            for (var p = 0, f = o.length; p < f; p++) {
                                var m = o[p],
                                    v = this._data.get(m);
                                null != v && i(v) && r.push(v[this._idProp])
                            } else if (n) {
                                for (var g = [], y = 0, b = o.length; y < b; y++) {
                                    var _ = o[y];
                                    g.push(e.get(_))
                                }
                                this._sort(g, n);
                                for (var w = 0, k = g.length; w < k; w++) r.push(g[w][this._idProp])
                            } else
                                for (var x = 0, D = o.length; x < D; x++) {
                                    var S = o[x],
                                        C = e.get(S);
                                    null != C && r.push(C[this._idProp])
                                }
                    return r
                }
            }, { key: "getDataSet", value: function() { return this } }, {
                key: "forEach",
                value: function(t, e) {
                    var i = e && Af(e),
                        n = this._data,
                        o = jd(pT(n).call(n));
                    if (e && e.order)
                        for (var r = this.get(e), s = 0, a = r.length; s < a; s++) {
                            var l = r[s];
                            t(l, l[this._idProp])
                        } else
                            for (var h = 0, u = o.length; h < u; h++) {
                                var d = o[h],
                                    c = this._data.get(d);
                                null == c || i && !i(c) || t(c, d)
                            }
                }
            }, {
                key: "map",
                value: function(t, e) {
                    for (var i = e && Af(e), n = [], o = this._data, r = jd(pT(o).call(o)), s = 0, a = r.length; s < a; s++) {
                        var l = r[s],
                            h = this._data.get(l);
                        null == h || i && !i(h) || n.push(t(h, l))
                    }
                    return e && e.order && this._sort(n, e.order), n
                }
            }, { key: "_filterFields", value: function(t, e) { var i; return t ? jD(i = tc(e) ? e : pc(e)).call(i, (function(e, i) { return e[i] = t[i], e }), {}) : t } }, {
                key: "_sort",
                value: function(t, e) {
                    if ("string" == typeof e) {
                        var i = e;
                        $C(t).call(t, (function(t, e) {
                            var n = t[i],
                                o = e[i];
                            return n > o ? 1 : n < o ? -1 : 0
                        }))
                    } else {
                        if ("function" != typeof e) throw new TypeError("Order must be a function or a string");
                        $C(t).call(t, e)
                    }
                }
            }, {
                key: "remove",
                value: function(t, e) {
                    for (var i = [], n = [], o = tc(t) ? t : [t], r = 0, s = o.length; r < s; r++) {
                        var a = this._remove(o[r]);
                        if (a) {
                            var l = a[this._idProp];
                            null != l && (i.push(l), n.push(a))
                        }
                    }
                    return i.length && this._trigger("remove", { items: i, oldData: n }, e), i
                }
            }, { key: "_remove", value: function(t) { var e; if (rM(t) ? e = t : t && "object" === Rd(t) && (e = t[this._idProp]), null != e && this._data.has(e)) { var i = this._data.get(e) || null; return this._data.delete(e), --this.length, i } return null } }, { key: "clear", value: function(t) { for (var e, i = jd(pT(e = this._data).call(e)), n = [], o = 0, r = i.length; o < r; o++) n.push(this._data.get(i[o])); return this._data.clear(), this.length = 0, this._trigger("remove", { items: i, oldData: n }, t), i } }, {
                key: "max",
                value: function(t) {
                    var e, i, n = null,
                        o = null,
                        r = tM(xT(e = this._data).call(e));
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var s = i.value,
                                a = s[t];
                            "number" == typeof a && (null == o || a > o) && (n = s, o = a)
                        }
                    } catch (t) { r.e(t) } finally { r.f() }
                    return n || null
                }
            }, {
                key: "min",
                value: function(t) {
                    var e, i, n = null,
                        o = null,
                        r = tM(xT(e = this._data).call(e));
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var s = i.value,
                                a = s[t];
                            "number" == typeof a && (null == o || a < o) && (n = s, o = a)
                        }
                    } catch (t) { r.e(t) } finally { r.f() }
                    return n || null
                }
            }, {
                key: "distinct",
                value: function(t) {
                    for (var e = this._data, i = jd(pT(e).call(e)), n = [], o = 0, r = 0, s = i.length; r < s; r++) {
                        for (var a = i[r], l = e.get(a)[t], h = !1, u = 0; u < o; u++)
                            if (n[u] == l) { h = !0; break }
                        h || void 0 === l || (n[o] = l, o++)
                    }
                    return n
                }
            }, {
                key: "_addItem",
                value: function(t) {
                    var e = function(t, e) { return null == t[e] && (t[e] = qT()), t }(t, this._idProp),
                        i = e[this._idProp];
                    if (this._data.has(i)) throw new Error("Cannot add item: item with id " + i + " already exists");
                    return this._data.set(i, e), ++this.length, i
                }
            }, { key: "_updateItem", value: function(t) { var e = t[this._idProp]; if (null == e) throw new Error("Cannot update item: item has no id (item: " + hv(t) + ")"); var i = this._data.get(e); if (!i) throw new Error("Cannot update item: no item with id " + e + " found"); return this._data.set(e, JT(JT({}, i), t)), e } }, {
                key: "stream",
                value: function(t) {
                    if (t) {
                        var e = this._data;
                        return new lM(Du({}, lC, kD.mark((function i() {
                            var n, o, r, s;
                            return kD.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        n = tM(t), i.prev = 1, n.s();
                                    case 3:
                                        if ((o = n.n()).done) { i.next = 11; break }
                                        if (r = o.value, null == (s = e.get(r))) { i.next = 9; break }
                                        return i.next = 9, [r, s];
                                    case 9:
                                        i.next = 3;
                                        break;
                                    case 11:
                                        i.next = 16;
                                        break;
                                    case 13:
                                        i.prev = 13, i.t0 = i.catch(1), n.e(i.t0);
                                    case 16:
                                        return i.prev = 16, n.f(), i.finish(16);
                                    case 19:
                                    case "end":
                                        return i.stop()
                                }
                            }), i, null, [
                                [1, 13, 16, 19]
                            ])
                        }))))
                    }
                    var i;
                    return new lM(Du({}, lC, Hc(i = IT(this._data)).call(i, this._data)))
                }
            }]), i
        }(aM),
        uM = function(t) {
            p_(i, t);
            var e = QT(i);

            function i(t, n) { var o, r; return yu(this, i), Du(i_(r = e.call(this)), "length", 0), Du(i_(r), "_listener", void 0), Du(i_(r), "_data", void 0), Du(i_(r), "_ids", new sC), Du(i_(r), "_options", void 0), r._options = n || {}, r._listener = Hc(o = r._onEvent).call(o, i_(r)), r.setData(t), r }
            return xu(i, [{ key: "idProp", get: function() { return this.getDataSet().idProp } }, {
                key: "setData",
                value: function(t) {
                    if (this._data) {
                        this._data.off && this._data.off("*", this._listener);
                        var e = this._data.getIds({ filter: Af(this._options) }),
                            i = this._data.get(e);
                        this._ids.clear(), this.length = 0, this._trigger("remove", { items: e, oldData: i })
                    }
                    if (null != t) {
                        this._data = t;
                        for (var n = this._data.getIds({ filter: Af(this._options) }), o = 0, r = n.length; o < r; o++) {
                            var s = n[o];
                            this._ids.add(s)
                        }
                        this.length = n.length, this._trigger("add", { items: n })
                    } else this._data = new hM;
                    this._data.on && this._data.on("*", this._listener)
                }
            }, {
                key: "refresh",
                value: function() {
                    for (var t = this._data.getIds({ filter: Af(this._options) }), e = jd(this._ids), i = {}, n = [], o = [], r = [], s = 0, a = t.length; s < a; s++) {
                        var l = t[s];
                        i[l] = !0, this._ids.has(l) || (n.push(l), this._ids.add(l))
                    }
                    for (var h = 0, u = e.length; h < u; h++) {
                        var d = e[h],
                            c = this._data.get(d);
                        null == c ? console.error("If you see this, report it please.") : i[d] || (o.push(d), r.push(c), this._ids.delete(d))
                    }
                    this.length += n.length - o.length, n.length && this._trigger("add", { items: n }), o.length && this._trigger("remove", { items: o, oldData: r })
                }
            }, {
                key: "get",
                value: function(t, e) {
                    if (null == this._data) return null;
                    var i, n = null;
                    rM(t) || tc(t) ? (n = t, i = e) : i = t;
                    var o = qp({}, this._options, i),
                        r = Af(this._options),
                        s = i && Af(i);
                    return r && s && (o.filter = function(t) { return r(t) && s(t) }), null == n ? this._data.get(o) : this._data.get(n, o)
                }
            }, {
                key: "getIds",
                value: function(t) {
                    if (this._data.length) {
                        var e, i = Af(this._options),
                            n = null != t ? Af(t) : null;
                        return e = n ? i ? function(t) { return i(t) && n(t) } : n : i, this._data.getIds({ filter: e, order: t && t.order })
                    }
                    return []
                }
            }, {
                key: "forEach",
                value: function(t, e) {
                    if (this._data) {
                        var i, n, o = Af(this._options),
                            r = e && Af(e);
                        n = r ? o ? function(t) { return o(t) && r(t) } : r : o, tp(i = this._data).call(i, t, { filter: n, order: e && e.order })
                    }
                }
            }, {
                key: "map",
                value: function(t, e) {
                    if (this._data) {
                        var i, n, o = Af(this._options),
                            r = e && Af(e);
                        return n = r ? o ? function(t) { return o(t) && r(t) } : r : o, lc(i = this._data).call(i, t, { filter: n, order: e && e.order })
                    }
                    return []
                }
            }, { key: "getDataSet", value: function() { return this._data.getDataSet() } }, { key: "stream", value: function(t) { var e; return this._data.stream(t || Du({}, lC, Hc(e = pT(this._ids)).call(e, this._ids))) } }, {
                key: "dispose",
                value: function() {
                    var t;
                    null !== (t = this._data) && void 0 !== t && t.off && this._data.off("*", this._listener);
                    var e, n = "This data view has already been disposed of.",
                        o = { get: function() { throw new Error(n) }, set: function() { throw new Error(n) }, configurable: !1 },
                        r = tM(Jd(i.prototype));
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var s = e.value;
                            gu(this, s, o)
                        }
                    } catch (t) { r.e(t) } finally { r.f() }
                }
            }, {
                key: "_onEvent",
                value: function(t, e, i) {
                    if (e && e.items && this._data) {
                        var n = e.items,
                            o = [],
                            r = [],
                            s = [],
                            a = [],
                            l = [],
                            h = [];
                        switch (t) {
                            case "add":
                                for (var u = 0, d = n.length; u < d; u++) {
                                    var c = n[u];
                                    this.get(c) && (this._ids.add(c), o.push(c))
                                }
                                break;
                            case "update":
                                for (var p = 0, f = n.length; p < f; p++) {
                                    var m = n[p];
                                    this.get(m) ? this._ids.has(m) ? (r.push(m), l.push(e.data[p]), a.push(e.oldData[p])) : (this._ids.add(m), o.push(m)) : this._ids.has(m) && (this._ids.delete(m), s.push(m), h.push(e.oldData[p]))
                                }
                                break;
                            case "remove":
                                for (var v = 0, g = n.length; v < g; v++) {
                                    var y = n[v];
                                    this._ids.has(y) && (this._ids.delete(y), s.push(y), h.push(e.oldData[v]))
                                }
                        }
                        this.length += o.length - s.length, o.length && this._trigger("add", { items: o }, i), r.length && this._trigger("update", { items: r, oldData: a, data: l }, i), s.length && this._trigger("remove", { items: s, oldData: h }, i)
                    }
                }
            }]), i
        }(aM);

    function dM(t, e) { return "object" === Rd(e) && null !== e && t === e.idProp && "function" == typeof tp(e) && "function" == typeof e.get && "function" == typeof e.getDataSet && "function" == typeof e.getIds && "number" == typeof e.length && "function" == typeof lc(e) && "function" == typeof e.off && "function" == typeof e.on && "function" == typeof e.stream && function(t, e) { return "object" === Rd(e) && null !== e && t === e.idProp && "function" == typeof e.add && "function" == typeof e.clear && "function" == typeof e.distinct && "function" == typeof tp(e) && "function" == typeof e.get && "function" == typeof e.getDataSet && "function" == typeof e.getIds && "number" == typeof e.length && "function" == typeof lc(e) && "function" == typeof e.max && "function" == typeof e.min && "function" == typeof e.off && "function" == typeof e.on && "function" == typeof e.remove && "function" == typeof e.setOptions && "function" == typeof e.stream && "function" == typeof e.update && "function" == typeof e.updateOnly }(t, e.getDataSet()) }
    var cM = "undefined" != typeof window && window.moment || a(),
        pM = a(),
        fM = { exports: {} },
        mM = {},
        vM = { exports: {} },
        gM = {};

    function yM() { var t = { "align-content": !1, "align-items": !1, "align-self": !1, "alignment-adjust": !1, "alignment-baseline": !1, all: !1, "anchor-point": !1, animation: !1, "animation-delay": !1, "animation-direction": !1, "animation-duration": !1, "animation-fill-mode": !1, "animation-iteration-count": !1, "animation-name": !1, "animation-play-state": !1, "animation-timing-function": !1, azimuth: !1, "backface-visibility": !1, background: !0, "background-attachment": !0, "background-clip": !0, "background-color": !0, "background-image": !0, "background-origin": !0, "background-position": !0, "background-repeat": !0, "background-size": !0, "baseline-shift": !1, binding: !1, bleed: !1, "bookmark-label": !1, "bookmark-level": !1, "bookmark-state": !1, border: !0, "border-bottom": !0, "border-bottom-color": !0, "border-bottom-left-radius": !0, "border-bottom-right-radius": !0, "border-bottom-style": !0, "border-bottom-width": !0, "border-collapse": !0, "border-color": !0, "border-image": !0, "border-image-outset": !0, "border-image-repeat": !0, "border-image-slice": !0, "border-image-source": !0, "border-image-width": !0, "border-left": !0, "border-left-color": !0, "border-left-style": !0, "border-left-width": !0, "border-radius": !0, "border-right": !0, "border-right-color": !0, "border-right-style": !0, "border-right-width": !0, "border-spacing": !0, "border-style": !0, "border-top": !0, "border-top-color": !0, "border-top-left-radius": !0, "border-top-right-radius": !0, "border-top-style": !0, "border-top-width": !0, "border-width": !0, bottom: !1, "box-decoration-break": !0, "box-shadow": !0, "box-sizing": !0, "box-snap": !0, "box-suppress": !0, "break-after": !0, "break-before": !0, "break-inside": !0, "caption-side": !1, chains: !1, clear: !0, clip: !1, "clip-path": !1, "clip-rule": !1, color: !0, "color-interpolation-filters": !0, "column-count": !1, "column-fill": !1, "column-gap": !1, "column-rule": !1, "column-rule-color": !1, "column-rule-style": !1, "column-rule-width": !1, "column-span": !1, "column-width": !1, columns: !1, contain: !1, content: !1, "counter-increment": !1, "counter-reset": !1, "counter-set": !1, crop: !1, cue: !1, "cue-after": !1, "cue-before": !1, cursor: !1, direction: !1, display: !0, "display-inside": !0, "display-list": !0, "display-outside": !0, "dominant-baseline": !1, elevation: !1, "empty-cells": !1, filter: !1, flex: !1, "flex-basis": !1, "flex-direction": !1, "flex-flow": !1, "flex-grow": !1, "flex-shrink": !1, "flex-wrap": !1, float: !1, "float-offset": !1, "flood-color": !1, "flood-opacity": !1, "flow-from": !1, "flow-into": !1, font: !0, "font-family": !0, "font-feature-settings": !0, "font-kerning": !0, "font-language-override": !0, "font-size": !0, "font-size-adjust": !0, "font-stretch": !0, "font-style": !0, "font-synthesis": !0, "font-variant": !0, "font-variant-alternates": !0, "font-variant-caps": !0, "font-variant-east-asian": !0, "font-variant-ligatures": !0, "font-variant-numeric": !0, "font-variant-position": !0, "font-weight": !0, grid: !1, "grid-area": !1, "grid-auto-columns": !1, "grid-auto-flow": !1, "grid-auto-rows": !1, "grid-column": !1, "grid-column-end": !1, "grid-column-start": !1, "grid-row": !1, "grid-row-end": !1, "grid-row-start": !1, "grid-template": !1, "grid-template-areas": !1, "grid-template-columns": !1, "grid-template-rows": !1, "hanging-punctuation": !1, height: !0, hyphens: !1, icon: !1, "image-orientation": !1, "image-resolution": !1, "ime-mode": !1, "initial-letters": !1, "inline-box-align": !1, "justify-content": !1, "justify-items": !1, "justify-self": !1, left: !1, "letter-spacing": !0, "lighting-color": !0, "line-box-contain": !1, "line-break": !1, "line-grid": !1, "line-height": !1, "line-snap": !1, "line-stacking": !1, "line-stacking-ruby": !1, "line-stacking-shift": !1, "line-stacking-strategy": !1, "list-style": !0, "list-style-image": !0, "list-style-position": !0, "list-style-type": !0, margin: !0, "margin-bottom": !0, "margin-left": !0, "margin-right": !0, "margin-top": !0, "marker-offset": !1, "marker-side": !1, marks: !1, mask: !1, "mask-box": !1, "mask-box-outset": !1, "mask-box-repeat": !1, "mask-box-slice": !1, "mask-box-source": !1, "mask-box-width": !1, "mask-clip": !1, "mask-image": !1, "mask-origin": !1, "mask-position": !1, "mask-repeat": !1, "mask-size": !1, "mask-source-type": !1, "mask-type": !1, "max-height": !0, "max-lines": !1, "max-width": !0, "min-height": !0, "min-width": !0, "move-to": !1, "nav-down": !1, "nav-index": !1, "nav-left": !1, "nav-right": !1, "nav-up": !1, "object-fit": !1, "object-position": !1, opacity: !1, order: !1, orphans: !1, outline: !1, "outline-color": !1, "outline-offset": !1, "outline-style": !1, "outline-width": !1, overflow: !1, "overflow-wrap": !1, "overflow-x": !1, "overflow-y": !1, padding: !0, "padding-bottom": !0, "padding-left": !0, "padding-right": !0, "padding-top": !0, page: !1, "page-break-after": !1, "page-break-before": !1, "page-break-inside": !1, "page-policy": !1, pause: !1, "pause-after": !1, "pause-before": !1, perspective: !1, "perspective-origin": !1, pitch: !1, "pitch-range": !1, "play-during": !1, position: !1, "presentation-level": !1, quotes: !1, "region-fragment": !1, resize: !1, rest: !1, "rest-after": !1, "rest-before": !1, richness: !1, right: !1, rotation: !1, "rotation-point": !1, "ruby-align": !1, "ruby-merge": !1, "ruby-position": !1, "shape-image-threshold": !1, "shape-outside": !1, "shape-margin": !1, size: !1, speak: !1, "speak-as": !1, "speak-header": !1, "speak-numeral": !1, "speak-punctuation": !1, "speech-rate": !1, stress: !1, "string-set": !1, "tab-size": !1, "table-layout": !1, "text-align": !0, "text-align-last": !0, "text-combine-upright": !0, "text-decoration": !0, "text-decoration-color": !0, "text-decoration-line": !0, "text-decoration-skip": !0, "text-decoration-style": !0, "text-emphasis": !0, "text-emphasis-color": !0, "text-emphasis-position": !0, "text-emphasis-style": !0, "text-height": !0, "text-indent": !0, "text-justify": !0, "text-orientation": !0, "text-overflow": !0, "text-shadow": !0, "text-space-collapse": !0, "text-transform": !0, "text-underline-position": !0, "text-wrap": !0, top: !1, transform: !1, "transform-origin": !1, "transform-style": !1, transition: !1, "transition-delay": !1, "transition-duration": !1, "transition-property": !1, "transition-timing-function": !1, "unicode-bidi": !1, "vertical-align": !1, visibility: !1, "voice-balance": !1, "voice-duration": !1, "voice-family": !1, "voice-pitch": !1, "voice-range": !1, "voice-rate": !1, "voice-stress": !1, "voice-volume": !1, volume: !1, "white-space": !1, widows: !1, width: !0, "will-change": !1, "word-break": !0, "word-spacing": !0, "word-wrap": !0, "wrap-flow": !1, "wrap-through": !1, "writing-mode": !1, "z-index": !1 }; return t }
    var bM = /javascript\s*\:/gim;
    gM.whiteList = yM(), gM.getDefaultWhiteList = yM, gM.onAttr = function(t, e, i) {}, gM.onIgnoreAttr = function(t, e, i) {}, gM.safeAttrValue = function(t, e) { return bM.test(e) ? "" : e };
    var _M = {
        indexOf: function(t, e) {
            var i, n;
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (i = 0, n = t.length; i < n; i++)
                if (t[i] === e) return i;
            return -1
        },
        forEach: function(t, e, i) { var n, o; if (Array.prototype.forEach) return t.forEach(e, i); for (n = 0, o = t.length; n < o; n++) e.call(i, t[n], n, t) },
        trim: function(t) { return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "") },
        trimRight: function(t) { return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "") }
    };
    var wM = gM,
        kM = function(t, e) {
            ";" !== (t = _M.trimRight(t))[t.length - 1] && (t += ";");
            var i = t.length,
                n = !1,
                o = 0,
                r = 0,
                s = "";

            function a() {
                if (!n) {
                    var i = _M.trim(t.slice(o, r)),
                        a = i.indexOf(":");
                    if (-1 !== a) {
                        var l = _M.trim(i.slice(0, a)),
                            h = _M.trim(i.slice(a + 1));
                        if (l) {
                            var u = e(o, s.length, l, h, i);
                            u && (s += u + "; ")
                        }
                    }
                }
                o = r + 1
            }
            for (; r < i; r++) {
                var l = t[r];
                if ("/" === l && "*" === t[r + 1]) {
                    var h = t.indexOf("*/", r + 2);
                    if (-1 === h) break;
                    o = (r = h + 1) + 1, n = !1
                } else "(" === l ? n = !0 : ")" === l ? n = !1 : ";" === l ? n || a() : "\n" === l && a()
            }
            return _M.trim(s)
        };

    function xM(t) { return null == t }

    function DM(t) {
        (t = function(t) { var e = {}; for (var i in t) e[i] = t[i]; return e }(t || {})).whiteList = t.whiteList || wM.whiteList, t.onAttr = t.onAttr || wM.onAttr, t.onIgnoreAttr = t.onIgnoreAttr || wM.onIgnoreAttr, t.safeAttrValue = t.safeAttrValue || wM.safeAttrValue, this.options = t
    }
    DM.prototype.process = function(t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this.options,
            i = e.whiteList,
            n = e.onAttr,
            o = e.onIgnoreAttr,
            r = e.safeAttrValue;
        return kM(t, (function(t, e, s, a, l) {
            var h = i[s],
                u = !1;
            if (!0 === h ? u = h : "function" == typeof h ? u = h(a) : h instanceof RegExp && (u = h.test(a)), !0 !== u && (u = !1), a = r(s, a)) { var d, c = { position: e, sourcePosition: t, source: l, isWhite: u }; return u ? xM(d = n(s, a, c)) ? s + ":" + a : d : xM(d = o(s, a, c)) ? void 0 : d }
        }))
    };
    var SM = DM;
    ! function(t, e) {
        var i = gM,
            n = SM;
        for (var o in (e = t.exports = function(t, e) { return new n(e).process(t) }).FilterCSS = n, i) e[o] = i[o];
        "undefined" != typeof window && (window.filterCSS = t.exports)
    }(vM, vM.exports);
    var CM = {
            indexOf: function(t, e) {
                var i, n;
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            forEach: function(t, e, i) { var n, o; if (Array.prototype.forEach) return t.forEach(e, i); for (n = 0, o = t.length; n < o; n++) e.call(i, t[n], n, t) },
            trim: function(t) { return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "") },
            spaceIndex: function(t) { var e = /\s|\n|\t/.exec(t); return e ? e.index : -1 }
        },
        TM = vM.exports.FilterCSS,
        MM = vM.exports.getDefaultWhiteList,
        OM = CM;

    function EM() { return { a: ["target", "href", "title"], abbr: ["title"], address: [], area: ["shape", "coords", "href", "alt"], article: [], aside: [], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], b: [], bdi: ["dir"], bdo: ["dir"], big: [], blockquote: ["cite"], br: [], caption: [], center: [], cite: [], code: [], col: ["align", "valign", "span", "width"], colgroup: ["align", "valign", "span", "width"], dd: [], del: ["datetime"], details: ["open"], div: [], dl: [], dt: [], em: [], figcaption: [], figure: [], font: ["color", "size", "face"], footer: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [], img: ["src", "alt", "title", "width", "height"], ins: ["datetime"], li: [], mark: [], nav: [], ol: [], p: [], pre: [], s: [], section: [], small: [], span: [], sub: [], summary: [], sup: [], strong: [], strike: [], table: ["width", "border", "align", "valign"], tbody: ["align", "valign"], td: ["width", "rowspan", "colspan", "align", "valign"], tfoot: ["align", "valign"], th: ["width", "rowspan", "colspan", "align", "valign"], thead: ["align", "valign"], tr: ["rowspan", "align", "valign"], tt: [], u: [], ul: [], video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"] } }
    var PM = new TM;

    function AM(t) { return t.replace(IM, "&lt;").replace(LM, "&gt;") }
    var IM = /</g,
        LM = />/g,
        NM = /"/g,
        FM = /&quot;/g,
        RM = /&#([a-zA-Z0-9]*);?/gim,
        jM = /&colon;?/gim,
        YM = /&newline;?/gim,
        HM = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        zM = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        BM = /u\s*r\s*l\s*\(.*/gi;

    function GM(t) { return t.replace(NM, "&quot;") }

    function WM(t) { return t.replace(FM, '"') }

    function VM(t) { return t.replace(RM, (function(t, e) { return "x" === e[0] || "X" === e[0] ? String.fromCharCode(parseInt(e.substr(1), 16)) : String.fromCharCode(parseInt(e, 10)) })) }

    function UM(t) { return t.replace(jM, ":").replace(YM, " ") }

    function XM(t) { for (var e = "", i = 0, n = t.length; i < n; i++) e += t.charCodeAt(i) < 32 ? " " : t.charAt(i); return OM.trim(e) }

    function qM(t) { return t = XM(t = UM(t = VM(t = WM(t)))) }

    function $M(t) { return t = AM(t = GM(t)) }
    mM.whiteList = { a: ["target", "href", "title"], abbr: ["title"], address: [], area: ["shape", "coords", "href", "alt"], article: [], aside: [], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], b: [], bdi: ["dir"], bdo: ["dir"], big: [], blockquote: ["cite"], br: [], caption: [], center: [], cite: [], code: [], col: ["align", "valign", "span", "width"], colgroup: ["align", "valign", "span", "width"], dd: [], del: ["datetime"], details: ["open"], div: [], dl: [], dt: [], em: [], figcaption: [], figure: [], font: ["color", "size", "face"], footer: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], header: [], hr: [], i: [], img: ["src", "alt", "title", "width", "height"], ins: ["datetime"], li: [], mark: [], nav: [], ol: [], p: [], pre: [], s: [], section: [], small: [], span: [], sub: [], summary: [], sup: [], strong: [], strike: [], table: ["width", "border", "align", "valign"], tbody: ["align", "valign"], td: ["width", "rowspan", "colspan", "align", "valign"], tfoot: ["align", "valign"], th: ["width", "rowspan", "colspan", "align", "valign"], thead: ["align", "valign"], tr: ["rowspan", "align", "valign"], tt: [], u: [], ul: [], video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"] }, mM.getDefaultWhiteList = EM, mM.onTag = function(t, e, i) {}, mM.onIgnoreTag = function(t, e, i) {}, mM.onTagAttr = function(t, e, i) {}, mM.onIgnoreTagAttr = function(t, e, i) {}, mM.safeAttrValue = function(t, e, i, n) { if (i = qM(i), "href" === e || "src" === e) { if ("#" === (i = OM.trim(i))) return "#"; if ("http://" !== i.substr(0, 7) && "https://" !== i.substr(0, 8) && "mailto:" !== i.substr(0, 7) && "tel:" !== i.substr(0, 4) && "data:image/" !== i.substr(0, 11) && "ftp://" !== i.substr(0, 6) && "./" !== i.substr(0, 2) && "../" !== i.substr(0, 3) && "#" !== i[0] && "/" !== i[0]) return "" } else if ("background" === e) { if (HM.lastIndex = 0, HM.test(i)) return "" } else if ("style" === e) { if (zM.lastIndex = 0, zM.test(i)) return ""; if (BM.lastIndex = 0, BM.test(i) && (HM.lastIndex = 0, HM.test(i))) return "";!1 !== n && (i = (n = n || PM).process(i)) } return i = $M(i) }, mM.escapeHtml = AM, mM.escapeQuote = GM, mM.unescapeQuote = WM, mM.escapeHtmlEntities = VM, mM.escapeDangerHtml5Entities = UM, mM.clearNonPrintableCharacter = XM, mM.friendlyAttrValue = qM, mM.escapeAttrValue = $M, mM.onIgnoreTagStripAll = function() { return "" }, mM.StripTagBody = function(t, e) {
        "function" != typeof e && (e = function() {});
        var i = !Array.isArray(t),
            n = [],
            o = !1;
        return {
            onIgnoreTag: function(r, s, a) {
                if (function(e) { return !!i || -1 !== OM.indexOf(t, e) }(r)) {
                    if (a.isClosing) {
                        var l = "[/removed]",
                            h = a.position + l.length;
                        return n.push([!1 !== o ? o : a.position, h]), o = !1, l
                    }
                    return o || (o = a.position), "[removed]"
                }
                return e(r, s, a)
            },
            remove: function(t) {
                var e = "",
                    i = 0;
                return OM.forEach(n, (function(n) { e += t.slice(i, n[0]), i = n[1] })), e += t.slice(i)
            }
        }
    }, mM.stripCommentTag = function(t) {
        for (var e = "", i = 0; i < t.length;) {
            var n = t.indexOf("\x3c!--", i);
            if (-1 === n) { e += t.slice(i); break }
            e += t.slice(i, n);
            var o = t.indexOf("--\x3e", n);
            if (-1 === o) break;
            i = o + 3
        }
        return e
    }, mM.stripBlankChar = function(t) { var e = t.split(""); return (e = e.filter((function(t) { var e = t.charCodeAt(0); return 127 !== e && (!(e <= 31) || (10 === e || 13 === e)) }))).join("") }, mM.cssFilter = PM, mM.getDefaultCSSWhiteList = MM;
    var ZM = {},
        KM = CM;

    function JM(t) { var e, i = KM.spaceIndex(t); return e = -1 === i ? t.slice(1, -1) : t.slice(1, i + 1), "/" === (e = KM.trim(e).toLowerCase()).slice(0, 1) && (e = e.slice(1)), "/" === e.slice(-1) && (e = e.slice(0, -1)), e }

    function QM(t) { return "</" === t.slice(0, 2) }
    var tO = /[^a-zA-Z0-9\\_:.-]/gim;

    function eO(t, e) { for (; e < t.length; e++) { var i = t[e]; if (" " !== i) return "=" === i ? e : -1 } }

    function iO(t, e) { for (; e < t.length; e++) { var i = t[e]; if (" " !== i) return "'" === i || '"' === i ? e : -1 } }

    function nO(t, e) { for (; e > 0; e--) { var i = t[e]; if (" " !== i) return "=" === i ? e : -1 } }

    function oO(t) { return function(t) { return '"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1] }(t) ? t.substr(1, t.length - 2) : t }
    ZM.parseTag = function(t, e, i) {
        var n = "",
            o = 0,
            r = !1,
            s = !1,
            a = 0,
            l = t.length,
            h = "",
            u = "";
        t: for (a = 0; a < l; a++) {
            var d = t.charAt(a);
            if (!1 === r) { if ("<" === d) { r = a; continue } } else if (!1 === s) {
                if ("<" === d) { n += i(t.slice(o, a)), r = a, o = a; continue }
                if (">" === d) { n += i(t.slice(o, r)), h = JM(u = t.slice(r, a + 1)), n += e(r, n.length, h, u, QM(u)), o = a + 1, r = !1; continue }
                if ('"' === d || "'" === d)
                    for (var c = 1, p = t.charAt(a - c);
                        "" === p.trim() || "=" === p;) {
                        if ("=" === p) { s = d; continue t }
                        p = t.charAt(a - ++c)
                    }
            } else if (d === s) { s = !1; continue }
        }
        return o < t.length && (n += i(t.substr(o))), n
    }, ZM.parseAttr = function(t, e) {
        var i = 0,
            n = 0,
            o = [],
            r = !1,
            s = t.length;

        function a(t, i) {
            if (!((t = (t = KM.trim(t)).replace(tO, "").toLowerCase()).length < 1)) {
                var n = e(t, i || "");
                n && o.push(n)
            }
        }
        for (var l = 0; l < s; l++) {
            var h, u = t.charAt(l);
            if (!1 !== r || "=" !== u)
                if (!1 === r || l !== n)
                    if (/\s|\n|\t/.test(u)) {
                        if (t = t.replace(/\s|\n|\t/g, " "), !1 === r) {
                            if (-1 === (h = eO(t, l))) { a(KM.trim(t.slice(i, l))), r = !1, i = l + 1; continue }
                            l = h - 1;
                            continue
                        }
                        if (-1 === (h = nO(t, l - 1))) { a(r, oO(KM.trim(t.slice(i, l)))), r = !1, i = l + 1; continue }
                    } else;
            else {
                if (-1 === (h = t.indexOf(u, l + 1))) break;
                a(r, KM.trim(t.slice(n + 1, h))), r = !1, i = (l = h) + 1
            } else r = t.slice(i, l), i = l + 1, n = '"' === t.charAt(i) || "'" === t.charAt(i) ? i : iO(t, l + 1)
        }
        return i < t.length && (!1 === r ? a(t.slice(i)) : a(r, oO(KM.trim(t.slice(i))))), KM.trim(o.join(" "))
    };
    var rO = vM.exports.FilterCSS,
        sO = mM,
        aO = ZM,
        lO = aO.parseTag,
        hO = aO.parseAttr,
        uO = CM;

    function dO(t) { return null == t }

    function cO(t) {
        (t = function(t) { var e = {}; for (var i in t) e[i] = t[i]; return e }(t || {})).stripIgnoreTag && (t.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), t.onIgnoreTag = sO.onIgnoreTagStripAll), t.whiteList || t.allowList ? t.whiteList = function(t) { var e = {}; for (var i in t) Array.isArray(t[i]) ? e[i.toLowerCase()] = t[i].map((function(t) { return t.toLowerCase() })) : e[i.toLowerCase()] = t[i]; return e }(t.whiteList || t.allowList) : t.whiteList = sO.whiteList, t.onTag = t.onTag || sO.onTag, t.onTagAttr = t.onTagAttr || sO.onTagAttr, t.onIgnoreTag = t.onIgnoreTag || sO.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || sO.onIgnoreTagAttr, t.safeAttrValue = t.safeAttrValue || sO.safeAttrValue, t.escapeHtml = t.escapeHtml || sO.escapeHtml, this.options = t, !1 === t.css ? this.cssFilter = !1 : (t.css = t.css || {}, this.cssFilter = new rO(t.css))
    }
    cO.prototype.process = function(t) {
        if (!(t = (t = t || "").toString())) return "";
        var e = this.options,
            i = e.whiteList,
            n = e.onTag,
            o = e.onIgnoreTag,
            r = e.onTagAttr,
            s = e.onIgnoreTagAttr,
            a = e.safeAttrValue,
            l = e.escapeHtml,
            h = this.cssFilter;
        e.stripBlankChar && (t = sO.stripBlankChar(t)), e.allowCommentTag || (t = sO.stripCommentTag(t));
        var u = !1;
        e.stripIgnoreTagBody && (u = sO.StripTagBody(e.stripIgnoreTagBody, o), o = u.onIgnoreTag);
        var d = lO(t, (function(t, e, u, d, c) {
            var p = { sourcePosition: t, position: e, isClosing: c, isWhite: Object.prototype.hasOwnProperty.call(i, u) },
                f = n(u, d, p);
            if (!dO(f)) return f;
            if (p.isWhite) {
                if (p.isClosing) return "</" + u + ">";
                var m = function(t) { var e = uO.spaceIndex(t); if (-1 === e) return { html: "", closing: "/" === t[t.length - 2] }; var i = "/" === (t = uO.trim(t.slice(e + 1, -1)))[t.length - 1]; return i && (t = uO.trim(t.slice(0, -1))), { html: t, closing: i } }(d),
                    v = i[u],
                    g = hO(m.html, (function(t, e) {
                        var i = -1 !== uO.indexOf(v, t),
                            n = r(u, t, e, i);
                        return dO(n) ? i ? (e = a(u, t, e, h)) ? t + '="' + e + '"' : t : dO(n = s(u, t, e, i)) ? void 0 : n : n
                    }));
                return d = "<" + u, g && (d += " " + g), m.closing && (d += " /"), d += ">"
            }
            return dO(f = o(u, d, p)) ? l(d) : f
        }), l);
        return u && (d = u.remove(d)), d
    };
    var pO = cO;
    ! function(t, e) {
        var i = mM,
            n = ZM,
            o = pO;

        function r(t, e) { return new o(e).process(t) }(e = t.exports = r).filterXSS = r, e.FilterXSS = o,
            function() { for (var t in i) e[t] = i[t]; for (var o in n) e[o] = n[o] }(), "undefined" != typeof window && (window.filterXSS = t.exports), "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = t.exports)
    }(fM, fM.exports);
    var fO = fM.exports;

    function mO(t, e) {
        var i = pc(t);
        if (Mh) {
            var n = Mh(t);
            e && (n = Af(n).call(n, (function(e) { return Hh(t, e).enumerable }))), i.push.apply(i, n)
        }
        return i
    }

    function vO(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i, n, o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? tp(i = mO(Object(o), !0)).call(i, (function(e) { Du(t, e, o[e]) })) : Qh ? lu(t, Qh(o)) : tp(n = mO(Object(o))).call(n, (function(e) { gu(t, e, Hh(o, e)) }))
        }
        return t
    }

    function gO(t) { var e; if (!t) return !1; var i = null !== (e = t.idProp) && void 0 !== e ? e : t._idProp; return !!i && dM(i, t) }
    var yO = /^\/?Date\((-?\d+)/i,
        bO = /^\d+$/;

    function _O(t, e) {
        var i;
        if (void 0 !== t) {
            if (null === t) return null;
            if (!e) return t;
            if ("string" != typeof e && !(e instanceof String)) throw new Error("Type must be a string");
            switch (e) {
                case "boolean":
                case "Boolean":
                    return Boolean(t);
                case "number":
                case "Number":
                    return Wy(t) && !isNaN(Date.parse(t)) ? pM(t).valueOf() : Number(t.valueOf());
                case "string":
                case "String":
                    return String(t);
                case "Date":
                    try { return _O(t, "Moment").toDate() } catch (i) { throw i instanceof TypeError ? new TypeError("Cannot convert object of type " + $y(t) + " to type " + e) : i }
                case "Moment":
                    if (Gy(t)) return pM(t);
                    if (t instanceof Date) return pM(t.valueOf());
                    if (pM.isMoment(t)) return pM(t);
                    if (Wy(t)) return (i = yO.exec(t)) ? pM(Number(i[1])) : (i = bO.exec(t), pM(i ? Number(t) : t));
                    throw new TypeError("Cannot convert object of type " + $y(t) + " to type " + e);
                case "ISODate":
                    if (Gy(t)) return new Date(t);
                    if (t instanceof Date) return t.toISOString();
                    if (pM.isMoment(t)) return t.toDate().toISOString();
                    if (Wy(t)) return (i = yO.exec(t)) ? new Date(Number(i[1])).toISOString() : pM(t).format();
                    throw new Error("Cannot convert object of type " + $y(t) + " to type ISODate");
                case "ASPDate":
                    if (Gy(t)) return "/Date(" + t + ")/";
                    if (t instanceof Date || pM.isMoment(t)) return "/Date(" + t.valueOf() + ")/";
                    if (Wy(t)) return "/Date(" + ((i = yO.exec(t)) ? new Date(Number(i[1])).valueOf() : new Date(t).valueOf()) + ")/";
                    throw new Error("Cannot convert object of type " + $y(t) + " to type ASPDate");
                default:
                    throw new Error("Unknown type ".concat(e))
            }
        }
    }

    function wO(t) {
        var e, i, n, o, r, s, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { start: "Date", end: "Date" },
            l = t._idProp,
            h = new hM({ fieldId: l }),
            u = lc(e = iM(t)).call(e, (function(t) { var e; return jD(e = pc(t)).call(e, (function(e, i) { return e[i] = _O(t[i], a[i]), e }), {}) })).to(h);
        return u.all().start(), { add: function() { var e; return (e = t.getDataSet()).add.apply(e, arguments) }, remove: function() { var e; return (e = t.getDataSet()).remove.apply(e, arguments) }, update: function() { var e; return (e = t.getDataSet()).update.apply(e, arguments) }, updateOnly: function() { var e; return (e = t.getDataSet()).updateOnly.apply(e, arguments) }, clear: function() { var e; return (e = t.getDataSet()).clear.apply(e, arguments) }, forEach: Hc(i = tp(h)).call(i, h), get: Hc(n = h.get).call(n, h), getIds: Hc(o = h.getIds).call(o, h), off: Hc(r = h.off).call(r, h), on: Hc(s = h.on).call(s, h), get length() { return h.length }, idProp: l, type: a, rawDS: t, coercedDS: h, dispose: function() { return u.stop() } }
    }
    var kO = function(t) { var e = new fO.FilterXSS(t); return function(t) { return e.process(t) } },
        xO = function(t) { return t },
        DO = kO(),
        SO = vO(vO({}, Sb), {}, { convert: _O, setupXSSProtection: function(t) { t && (!0 === t.disabled ? (DO = xO, console.warn("You disabled XSS protection for vis-Timeline. I sure hope you know what you're doing!")) : t.filterOptions && (DO = kO(t.filterOptions))) } });
    gu(SO, "xss", { get: function() { return DO } });
    var CO = { exports: {} },
        TO = w,
        MO = h,
        OO = Ft,
        EO = Qf.trim,
        PO = v("".charAt),
        AO = TO.parseFloat,
        IO = TO.Symbol,
        LO = IO && IO.iterator,
        NO = 1 / AO("\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff-0") != -1 / 0 || LO && !MO((function() { AO(Object(LO)) })) ? function(t) {
            var e = EO(OO(t)),
                i = AO(e);
            return 0 === i && "-" == PO(e, 0) ? -0 : i
        } : AO;
    Nn({ global: !0, forced: parseFloat != NO }, { parseFloat: NO });
    var FO = W.parseFloat;
    ! function(t) { t.exports = FO }(CO);
    var RO = n(CO.exports),
        jO = function() {
            function t(e, i) { yu(this, t), this.options = null, this.props = null }
            return xu(t, [{ key: "setOptions", value: function(t) { t && SO.extend(this.options, t) } }, { key: "redraw", value: function() { return !1 } }, { key: "destroy", value: function() {} }, { key: "_isResized", value: function() { var t = this.props._previousWidth !== this.props.width || this.props._previousHeight !== this.props.height; return this.props._previousWidth = this.props.width, this.props._previousHeight = this.props.height, t } }]), t
        }(),
        YO = { exports: {} },
        HO = b,
        zO = Ft,
        BO = A,
        GO = w.RangeError;
    Nn({ target: "String", proto: !0 }, {
        repeat: function(t) {
            var e = zO(BO(this)),
                i = "",
                n = HO(t);
            if (n < 0 || n == 1 / 0) throw GO("Wrong number of repetitions");
            for (; n > 0;
                (n >>>= 1) && (e += e)) 1 & n && (i += e);
            return i
        }
    });
    var WO = bd("String").repeat,
        VO = be,
        UO = WO,
        XO = String.prototype,
        qO = function(t) { var e = t.repeat; return "string" == typeof t || t === XO || VO(XO, t) && e === XO.repeat ? UO : e };
    ! function(t) { t.exports = qO }(YO);
    var $O = n(YO.exports);

    function ZO(t, e, i) {
        if (i && !tc(i)) return ZO(t, e, [i]);
        if (e.hiddenDates = [], i && 1 == tc(i)) {
            for (var n, o = 0; o < i.length; o++)
                if (void 0 === $O(i[o])) {
                    var r = {};
                    r.start = t(i[o].start).toDate().valueOf(), r.end = t(i[o].end).toDate().valueOf(), e.hiddenDates.push(r)
                }
            $C(n = e.hiddenDates).call(n, (function(t, e) { return t.start - e.start }))
        }
    }

    function KO(t, e, i) {
        if (i && !tc(i)) return KO(t, e, [i]);
        if (i && void 0 !== e.domProps.centerContainer.width) {
            ZO(t, e, i);
            for (var n = t(e.range.start), o = t(e.range.end), r = (e.range.end - e.range.start) / e.domProps.centerContainer.width, s = 0; s < i.length; s++)
                if (void 0 !== $O(i[s])) {
                    var a = t(i[s].start),
                        l = t(i[s].end);
                    if ("Invalid Date" == a._d) throw new Error("Supplied start date is not valid: ".concat(i[s].start));
                    if ("Invalid Date" == l._d) throw new Error("Supplied end date is not valid: ".concat(i[s].end));
                    if (l - a >= 4 * r) {
                        var h = 0,
                            u = o.clone();
                        switch ($O(i[s])) {
                            case "daily":
                                a.day() != l.day() && (h = 1), a.dayOfYear(n.dayOfYear()), a.year(n.year()), a.subtract(7, "days"), l.dayOfYear(n.dayOfYear()), l.year(n.year()), l.subtract(7 - h, "days"), u.add(1, "weeks");
                                break;
                            case "weekly":
                                var d = l.diff(a, "days"),
                                    c = a.day();
                                a.date(n.date()), a.month(n.month()), a.year(n.year()), l = a.clone(), a.day(c), l.day(c), l.add(d, "days"), a.subtract(1, "weeks"), l.subtract(1, "weeks"), u.add(1, "weeks");
                                break;
                            case "monthly":
                                a.month() != l.month() && (h = 1), a.month(n.month()), a.year(n.year()), a.subtract(1, "months"), l.month(n.month()), l.year(n.year()), l.subtract(1, "months"), l.add(h, "months"), u.add(1, "months");
                                break;
                            case "yearly":
                                a.year() != l.year() && (h = 1), a.year(n.year()), a.subtract(1, "years"), l.year(n.year()), l.subtract(1, "years"), l.add(h, "years"), u.add(1, "years");
                                break;
                            default:
                                return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", $O(i[s]))
                        }
                        for (; a < u;) switch (e.hiddenDates.push({ start: a.valueOf(), end: l.valueOf() }), $O(i[s])) {
                            case "daily":
                                a.add(1, "days"), l.add(1, "days");
                                break;
                            case "weekly":
                                a.add(1, "weeks"), l.add(1, "weeks");
                                break;
                            case "monthly":
                                a.add(1, "months"), l.add(1, "months");
                                break;
                            case "yearly":
                                a.add(1, "y"), l.add(1, "y");
                                break;
                            default:
                                return void console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", $O(i[s]))
                        }
                        e.hiddenDates.push({ start: a.valueOf(), end: l.valueOf() })
                    }
                }
            JO(e);
            var p = lE(e.range.start, e.hiddenDates),
                f = lE(e.range.end, e.hiddenDates),
                m = e.range.start,
                v = e.range.end;
            1 == p.hidden && (m = 1 == e.range.startToFront ? p.startDate - 1 : p.endDate + 1), 1 == f.hidden && (v = 1 == e.range.endToFront ? f.startDate - 1 : f.endDate + 1), 1 != p.hidden && 1 != f.hidden || e.range._applyRange(m, v)
        }
    }

    function JO(t) {
        for (var e, i = t.hiddenDates, n = [], o = 0; o < i.length; o++)
            for (var r = 0; r < i.length; r++) o != r && 1 != i[r].remove && 1 != i[o].remove && (i[r].start >= i[o].start && i[r].end <= i[o].end ? i[r].remove = !0 : i[r].start >= i[o].start && i[r].start <= i[o].end ? (i[o].end = i[r].end, i[r].remove = !0) : i[r].end >= i[o].start && i[r].end <= i[o].end && (i[o].start = i[r].start, i[r].remove = !0));
        for (o = 0; o < i.length; o++) !0 !== i[o].remove && n.push(i[o]);
        t.hiddenDates = n, $C(e = t.hiddenDates).call(e, (function(t, e) { return t.start - e.start }))
    }

    function QO(t, e, i) {
        for (var n = !1, o = e.current.valueOf(), r = 0; r < e.hiddenDates.length; r++) {
            var s = e.hiddenDates[r].start,
                a = e.hiddenDates[r].end;
            if (o >= s && o < a) { n = !0; break }
        }
        if (1 == n && o < e._end.valueOf() && o != i) {
            var l = t(i),
                h = t(a);
            l.year() != h.year() ? e.switchedYear = !0 : l.month() != h.month() ? e.switchedMonth = !0 : l.dayOfYear() != h.dayOfYear() && (e.switchedDay = !0), e.current = h
        }
    }

    function tE(t, e, i) {
        var n;
        if (0 == t.body.hiddenDates.length) return n = t.range.conversion(i), (e.valueOf() - n.offset) * n.scale;
        var o = lE(e, t.body.hiddenDates);
        1 == o.hidden && (e = o.startDate);
        var r = iE(t.body.hiddenDates, t.range.start, t.range.end);
        if (e < t.range.start) { n = t.range.conversion(i, r); var s = nE(t.body.hiddenDates, e, n.offset); return e = t.options.moment(e).toDate().valueOf(), e += s, -(n.offset - e.valueOf()) * n.scale }
        if (e > t.range.end) { var a = { start: t.range.start, end: e }; return e = oE(t.options.moment, t.body.hiddenDates, a, e), n = t.range.conversion(i, r), (e.valueOf() - n.offset) * n.scale }
        return e = oE(t.options.moment, t.body.hiddenDates, t.range, e), n = t.range.conversion(i, r), (e.valueOf() - n.offset) * n.scale
    }

    function eE(t, e, i) {
        if (0 == t.body.hiddenDates.length) { var n = t.range.conversion(i); return new Date(e / n.scale + n.offset) }
        var o = iE(t.body.hiddenDates, t.range.start, t.range.end),
            r = (t.range.end - t.range.start - o) * e / i,
            s = sE(t.body.hiddenDates, t.range, r);
        return new Date(s + r + t.range.start)
    }

    function iE(t, e, i) {
        for (var n = 0, o = 0; o < t.length; o++) {
            var r = t[o].start,
                s = t[o].end;
            r >= e && s < i && (n += s - r)
        }
        return n
    }

    function nE(t, e, i) {
        for (var n = 0, o = 0; o < t.length; o++) {
            var r = t[o].start,
                s = t[o].end;
            r >= e && s <= i && (n += s - r)
        }
        return n
    }

    function oE(t, e, i, n) { return n = t(n).toDate().valueOf(), n -= rE(t, e, i, n) }

    function rE(t, e, i, n) {
        var o = 0;
        n = t(n).toDate().valueOf();
        for (var r = 0; r < e.length; r++) {
            var s = e[r].start,
                a = e[r].end;
            s >= i.start && a < i.end && n >= a && (o += a - s)
        }
        return o
    }

    function sE(t, e, i) {
        for (var n = 0, o = 0, r = e.start, s = 0; s < t.length; s++) {
            var a = t[s].start,
                l = t[s].end;
            if (a >= e.start && l < e.end) {
                if (o += a - r, r = l, o >= i) break;
                n += l - a
            }
        }
        return n
    }

    function aE(t, e, i, n) { var o = lE(e, t); return 1 == o.hidden ? i < 0 ? 1 == n ? o.startDate - (o.endDate - e) - 1 : o.startDate - 1 : 1 == n ? o.endDate + (e - o.startDate) + 1 : o.endDate + 1 : e }

    function lE(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i].start,
                o = e[i].end;
            if (t >= n && t < o) return { hidden: !0, startDate: n, endDate: o }
        }
        return { hidden: !1, startDate: n, endDate: o }
    }
    var hE = Object.freeze({ __proto__: null, convertHiddenOptions: ZO, updateHiddenDates: KO, removeDuplicates: JO, printDates: function(t) { for (var e = 0; e < t.length; e++) console.log(e, new Date(t[e].start), new Date(t[e].end), t[e].start, t[e].end, t[e].remove) }, stepOverHiddenDates: QO, toScreen: tE, toTime: eE, getHiddenDurationBetween: iE, getHiddenDurationBeforeStart: nE, correctTimeForHidden: oE, getHiddenDurationBefore: rE, getAccumulatedHiddenDuration: sE, snapAwayFromHidden: aE, getIsHidden: lE });

    function uE(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    var dE = function(t) {
        p_(i, t);
        var e = uE(i);

        function i(t, n) {
            var o, r, s, a, l, h, u, d;
            yu(this, i), d = e.call(this);
            var c = cM().hours(0).minutes(0).seconds(0).milliseconds(0),
                p = c.clone().add(-3, "days").valueOf(),
                f = c.clone().add(3, "days").valueOf();
            return d.millisecondsPerPixelCache = void 0, void 0 === n ? (d.start = p, d.end = f) : (d.start = n.start || p, d.end = n.end || f), d.rolling = !1, d.body = t, d.deltaDifference = 0, d.scaleOffset = 0, d.startToFront = !1, d.endToFront = !0, d.defaultOptions = { rtl: !1, start: null, end: null, moment: cM, direction: "horizontal", moveable: !0, zoomable: !0, min: null, max: null, zoomMin: 10, zoomMax: 31536e10, rollingMode: { follow: !1, offset: .5 } }, d.options = SO.extend({}, d.defaultOptions), d.props = { touch: {} }, d.animationTimer = null, d.body.emitter.on("panstart", Hc(o = d._onDragStart).call(o, i_(d))), d.body.emitter.on("panmove", Hc(r = d._onDrag).call(r, i_(d))), d.body.emitter.on("panend", Hc(s = d._onDragEnd).call(s, i_(d))), d.body.emitter.on("mousewheel", Hc(a = d._onMouseWheel).call(a, i_(d))), d.body.emitter.on("touch", Hc(l = d._onTouch).call(l, i_(d))), d.body.emitter.on("pinch", Hc(h = d._onPinch).call(h, i_(d))), d.body.dom.rollingModeBtn.addEventListener("click", Hc(u = d.startRolling).call(u, i_(d))), d.setOptions(n), d
        }
        return xu(i, [{ key: "setOptions", value: function(t) { if (t) { SO.selectiveExtend(["animation", "direction", "min", "max", "zoomMin", "zoomMax", "moveable", "zoomable", "moment", "activate", "hiddenDates", "zoomKey", "zoomFriction", "rtl", "showCurrentTime", "rollingMode", "horizontalScroll"], this.options, t), t.rollingMode && t.rollingMode.follow && this.startRolling(), ("start" in t || "end" in t) && this.setRange(t.start, t.end) } } }, {
            key: "startRolling",
            value: function() {
                var t = this;
                ! function e() {
                    t.stopRolling(), t.rolling = !0;
                    var i = t.end - t.start,
                        n = SO.convert(new Date, "Date").valueOf(),
                        o = t.options.rollingMode && t.options.rollingMode.offset || .5,
                        r = n - i * o,
                        s = n + i * (1 - o);
                    t.setRange(r, s, { animation: !1 }), (i = 1 / t.conversion(t.body.domProps.center.width).scale / 10) < 30 && (i = 30), i > 1e3 && (i = 1e3), t.body.dom.rollingModeBtn.style.visibility = "hidden", t.currentTimeTimer = xv(e, i)
                }()
            }
        }, { key: "stopRolling", value: function() { void 0 !== this.currentTimeTimer && (clearTimeout(this.currentTimeTimer), this.rolling = !1, this.body.dom.rollingModeBtn.style.visibility = "visible") } }, {
            key: "setRange",
            value: function(t, e, i, n, o) {
                i || (i = {}), !0 !== i.byUser && (i.byUser = !1);
                var r = this,
                    s = null != t ? SO.convert(t, "Date").valueOf() : null,
                    a = null != e ? SO.convert(e, "Date").valueOf() : null;
                if (this._cancelAnimation(), this.millisecondsPerPixelCache = void 0, i.animation) {
                    var l, h = this.start,
                        u = this.end,
                        d = "object" === Rd(i.animation) && "duration" in i.animation ? i.animation.duration : 500,
                        c = "object" === Rd(i.animation) && "easingFunction" in i.animation ? i.animation.easingFunction : "easeInOutQuad",
                        p = SO.easingFunctions[c];
                    if (!p) throw new Error(Xd(l = "Unknown easing function ".concat(hv(c), ". Choose from: ")).call(l, pc(SO.easingFunctions).join(", ")));
                    var f = _c(),
                        m = !1;
                    return function t() {
                        if (!r.props.touch.dragging) {
                            var e = _c() - f,
                                l = p(e / d),
                                c = e > d,
                                g = c || null === s ? s : h + (s - h) * l,
                                y = c || null === a ? a : u + (a - u) * l;
                            v = r._applyRange(g, y), KO(r.options.moment, r.body, r.options.hiddenDates), m = m || v;
                            var b = { start: new Date(r.start), end: new Date(r.end), byUser: i.byUser, event: i.event };
                            if (o && o(l, v, c), v && r.body.emitter.emit("rangechange", b), c) { if (m && (r.body.emitter.emit("rangechanged", b), n)) return n() } else r.animationTimer = xv(t, 20)
                        }
                    }()
                }
                var v = this._applyRange(s, a);
                if (KO(this.options.moment, this.body, this.options.hiddenDates), v) { var g = { start: new Date(this.start), end: new Date(this.end), byUser: i.byUser, event: i.event }; if (this.body.emitter.emit("rangechange", g), clearTimeout(r.timeoutID), r.timeoutID = xv((function() { r.body.emitter.emit("rangechanged", g) }), 200), n) return n() }
            }
        }, { key: "getMillisecondsPerPixel", value: function() { return void 0 === this.millisecondsPerPixelCache && (this.millisecondsPerPixelCache = (this.end - this.start) / this.body.dom.center.clientWidth), this.millisecondsPerPixelCache } }, { key: "_cancelAnimation", value: function() { this.animationTimer && (clearTimeout(this.animationTimer), this.animationTimer = null) } }, {
            key: "_applyRange",
            value: function(t, e) {
                var i, n = null != t ? SO.convert(t, "Date").valueOf() : this.start,
                    o = null != e ? SO.convert(e, "Date").valueOf() : this.end,
                    r = null != this.options.max ? SO.convert(this.options.max, "Date").valueOf() : null,
                    s = null != this.options.min ? SO.convert(this.options.min, "Date").valueOf() : null;
                if (isNaN(n) || null === n) throw new Error('Invalid start "'.concat(t, '"'));
                if (isNaN(o) || null === o) throw new Error('Invalid end "'.concat(e, '"'));
                if (o < n && (o = n), null !== s && n < s && (n += i = s - n, o += i, null != r && o > r && (o = r)), null !== r && o > r && (n -= i = o - r, o -= i, null != s && n < s && (n = s)), null !== this.options.zoomMin) { var a = RO(this.options.zoomMin); if (a < 0 && (a = 0), o - n < a) { this.end - this.start === a && n >= this.start - .5 && o <= this.end ? (n = this.start, o = this.end) : (n -= (i = a - (o - n)) / 2, o += i / 2) } }
                if (null !== this.options.zoomMax) {
                    var l = RO(this.options.zoomMax);
                    l < 0 && (l = 0), o - n > l && (this.end - this.start === l && n < this.start && o > this.end ? (n = this.start, o = this.end) : (n += (i = o - n - l) / 2, o -= i / 2))
                }
                var h = this.start != n || this.end != o;
                return n >= this.start && n <= this.end || o >= this.start && o <= this.end || this.start >= n && this.start <= o || this.end >= n && this.end <= o || this.body.emitter.emit("checkRangedItems"), this.start = n, this.end = o, h
            }
        }, { key: "getRange", value: function() { return { start: this.start, end: this.end } } }, { key: "conversion", value: function(t, e) { return i.conversion(this.start, this.end, t, e) } }, { key: "_onDragStart", value: function(t) { this.deltaDifference = 0, this.previousDelta = 0, this.options.moveable && this._isInsideRange(t) && this.props.touch.allowDragging && (this.stopRolling(), this.props.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.dragging = !0, this.body.dom.root && (this.body.dom.root.style.cursor = "move")) } }, {
            key: "_onDrag",
            value: function(t) {
                if (t && this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging) {
                    var e = this.options.direction;
                    cE(e);
                    var i = "horizontal" == e ? t.deltaX : t.deltaY;
                    i -= this.deltaDifference;
                    var n = this.props.touch.end - this.props.touch.start;
                    n -= iE(this.body.hiddenDates, this.start, this.end);
                    var o, r = "horizontal" == e ? this.body.domProps.center.width : this.body.domProps.center.height;
                    o = this.options.rtl ? i / r * n : -i / r * n;
                    var s = this.props.touch.start + o,
                        a = this.props.touch.end + o,
                        l = aE(this.body.hiddenDates, s, this.previousDelta - i, !0),
                        h = aE(this.body.hiddenDates, a, this.previousDelta - i, !0);
                    if (l != s || h != a) return this.deltaDifference += i, this.props.touch.start = l, this.props.touch.end = h, void this._onDrag(t);
                    this.previousDelta = i, this._applyRange(s, a);
                    var u = new Date(this.start),
                        d = new Date(this.end);
                    this.body.emitter.emit("rangechange", { start: u, end: d, byUser: !0, event: t }), this.body.emitter.emit("panmove")
                }
            }
        }, { key: "_onDragEnd", value: function(t) { this.props.touch.dragging && this.options.moveable && this.props.touch.allowDragging && (this.props.touch.dragging = !1, this.body.dom.root && (this.body.dom.root.style.cursor = "auto"), this.body.emitter.emit("rangechanged", { start: new Date(this.start), end: new Date(this.end), byUser: !0, event: t })) } }, {
            key: "_onMouseWheel",
            value: function(t) {
                var e = 0;
                if (t.wheelDelta ? e = t.wheelDelta / 120 : t.detail ? e = -t.detail / 3 : t.deltaY && (e = -t.deltaY / 3), !(this.options.zoomKey && !t[this.options.zoomKey] && this.options.zoomable || !this.options.zoomable && this.options.moveable) && this.options.zoomable && this.options.moveable && this._isInsideRange(t) && e) {
                    var i, n, o = this.options.zoomFriction || 5;
                    if (i = e < 0 ? 1 - e / o : 1 / (1 + e / o), this.rolling) {
                        var r = this.options.rollingMode && this.options.rollingMode.offset || .5;
                        n = this.start + (this.end - this.start) * r
                    } else {
                        var s = this.getPointer({ x: t.clientX, y: t.clientY }, this.body.dom.center);
                        n = this._pointerToDate(s)
                    }
                    this.zoom(i, n, e, t), t.preventDefault()
                }
            }
        }, { key: "_onTouch", value: function(t) { this.props.touch.start = this.start, this.props.touch.end = this.end, this.props.touch.allowDragging = !0, this.props.touch.center = null, this.props.touch.centerDate = null, this.scaleOffset = 0, this.deltaDifference = 0, SO.preventDefault(t) } }, {
            key: "_onPinch",
            value: function(t) {
                if (this.options.zoomable && this.options.moveable) {
                    SO.preventDefault(t), this.props.touch.allowDragging = !1, this.props.touch.center || (this.props.touch.center = this.getPointer(t.center, this.body.dom.center), this.props.touch.centerDate = this._pointerToDate(this.props.touch.center)), this.stopRolling();
                    var e = 1 / (t.scale + this.scaleOffset),
                        i = this.props.touch.centerDate,
                        n = iE(this.body.hiddenDates, this.start, this.end),
                        o = rE(this.options.moment, this.body.hiddenDates, this, i),
                        r = n - o,
                        s = i - o + (this.props.touch.start - (i - o)) * e,
                        a = i + r + (this.props.touch.end - (i + r)) * e;
                    this.startToFront = 1 - e <= 0, this.endToFront = e - 1 <= 0;
                    var l = aE(this.body.hiddenDates, s, 1 - e, !0),
                        h = aE(this.body.hiddenDates, a, e - 1, !0);
                    l == s && h == a || (this.props.touch.start = l, this.props.touch.end = h, this.scaleOffset = 1 - t.scale, s = l, a = h);
                    var u = { animation: !1, byUser: !0, event: t };
                    this.setRange(s, a, u), this.startToFront = !1, this.endToFront = !0
                }
            }
        }, {
            key: "_isInsideRange",
            value: function(t) {
                var e = t.center ? t.center.x : t.clientX,
                    i = this.body.dom.centerContainer.getBoundingClientRect(),
                    n = this.options.rtl ? e - i.left : i.right - e,
                    o = this.body.util.toTime(n);
                return o >= this.start && o <= this.end
            }
        }, { key: "_pointerToDate", value: function(t) { var e, i = this.options.direction; if (cE(i), "horizontal" == i) return this.body.util.toTime(t.x).valueOf(); var n = this.body.domProps.center.height; return e = this.conversion(n), t.y / e.scale + e.offset } }, { key: "getPointer", value: function(t, e) { var i = e.getBoundingClientRect(); return this.options.rtl ? { x: i.right - t.x, y: t.y - i.top } : { x: t.x - i.left, y: t.y - i.top } } }, {
            key: "zoom",
            value: function(t, e, i, n) {
                null == e && (e = (this.start + this.end) / 2);
                var o = iE(this.body.hiddenDates, this.start, this.end),
                    r = rE(this.options.moment, this.body.hiddenDates, this, e),
                    s = o - r,
                    a = e - r + (this.start - (e - r)) * t,
                    l = e + s + (this.end - (e + s)) * t;
                this.startToFront = !(i > 0), this.endToFront = !(-i > 0);
                var h = aE(this.body.hiddenDates, a, i, !0),
                    u = aE(this.body.hiddenDates, l, -i, !0);
                h == a && u == l || (a = h, l = u);
                var d = { animation: !1, byUser: !0, event: n };
                this.setRange(a, l, d), this.startToFront = !1, this.endToFront = !0
            }
        }, {
            key: "move",
            value: function(t) {
                var e = this.end - this.start,
                    i = this.start + e * t,
                    n = this.end + e * t;
                this.start = i, this.end = n
            }
        }, {
            key: "moveTo",
            value: function(t) {
                var e = (this.start + this.end) / 2 - t,
                    i = this.start - e,
                    n = this.end - e;
                this.setRange(i, n, { animation: !1, byUser: !0, event: null })
            }
        }], [{ key: "conversion", value: function(t, e, i, n) { return void 0 === n && (n = 0), 0 != i && e - t != 0 ? { offset: t, scale: i / (e - t - n) } : { offset: 0, scale: 1 } } }]), i
    }(jO);

    function cE(t) { if ("horizontal" != t && "vertical" != t) throw new TypeError('Unknown direction "'.concat(t, '". Choose "horizontal" or "vertical".')) }
    var pE = { exports: {} },
        fE = W.setInterval;
    ! function(t) { t.exports = fE }(pE);
    var mE, vE = n(pE.exports),
        gE = null;
    "undefined" != typeof window ? mE = function t(e, i) {
        var n = i || { preventDefault: !1 };
        if (e.Manager) {
            var o = e,
                r = function(e, i) { var r = Object.create(n); return i && o.assign(r, i), t(new o(e, r), r) };
            return o.assign(r, o), r.Manager = function(e, i) { var r = Object.create(n); return i && o.assign(r, i), t(new o.Manager(e, r), r) }, r
        }
        var s = Object.create(e),
            a = e.element;

        function l(t) { return t.match(/[^ ]+/g) }

        function h(t) {
            if ("hammer.input" !== t.type) {
                if (t.srcEvent._handled || (t.srcEvent._handled = {}), t.srcEvent._handled[t.type]) return;
                t.srcEvent._handled[t.type] = !0
            }
            var e = !1;
            t.stopPropagation = function() { e = !0 };
            var i = t.srcEvent.stopPropagation.bind(t.srcEvent);
            "function" == typeof i && (t.srcEvent.stopPropagation = function() { i(), t.stopPropagation() }), t.firstTarget = gE;
            for (var n = gE; n && !e;) {
                var o = n.hammer;
                if (o)
                    for (var r, s = 0; s < o.length; s++)
                        if (r = o[s]._handlers[t.type])
                            for (var a = 0; a < r.length && !e; a++) r[a](t);
                n = n.parentNode
            }
        }
        return a.hammer || (a.hammer = []), a.hammer.push(s), e.on("hammer.input", (function(t) {!0 !== n.preventDefault && n.preventDefault !== t.pointerType || t.preventDefault(), t.isFirst && (gE = t.target) })), s._handlers = {}, s.on = function(t, i) {
            return l(t).forEach((function(t) {
                var n = s._handlers[t];
                n || (s._handlers[t] = n = [], e.on(t, h)), n.push(i)
            })), s
        }, s.off = function(t, i) {
            return l(t).forEach((function(t) {
                var n = s._handlers[t];
                n && ((n = i ? n.filter((function(t) { return t !== i })) : []).length > 0 ? s._handlers[t] = n : (e.off(t, h), delete s._handlers[t]))
            })), s
        }, s.emit = function(t, i) { gE = i.target, e.emit(t, i) }, s.destroy = function() {
            var t = e.element.hammer,
                i = t.indexOf(s); - 1 !== i && t.splice(i, 1), t.length || delete e.element.hammer, s._handlers = {}, e.destroy()
        }, s
    }(window.Hammer || xy, { preventDefault: "mouse" }) : mE = function() { return function() { var t = function() {}; return { on: t, off: t, destroy: t, emit: t, get: function(e) { return { set: t } } } }() };
    var yE = mE;

    function bE(t, e) { e.inputHandler = function(t) { t.isFirst && e(t) }, t.on("hammer.input", e.inputHandler) }
    var _E = function() {
        function t(e, i, n, o, r) { yu(this, t), this.moment = r && r.moment || cM, this.options = r || {}, this.current = this.moment(), this._start = this.moment(), this._end = this.moment(), this.autoScale = !0, this.scale = "day", this.step = 1, this.setRange(e, i, n), this.switchedDay = !1, this.switchedMonth = !1, this.switchedYear = !1, tc(o) ? this.hiddenDates = o : this.hiddenDates = null != o ? [o] : [], this.format = t.FORMAT }
        return xu(t, [{ key: "setMoment", value: function(t) { this.moment = t, this.current = this.moment(this.current.valueOf()), this._start = this.moment(this._start.valueOf()), this._end = this.moment(this._end.valueOf()) } }, {
            key: "setFormat",
            value: function(e) {
                var i = SO.deepExtend({}, t.FORMAT);
                this.format = SO.deepExtend(i, e)
            }
        }, {
            key: "setRange",
            value: function(t, e, i) {
                if (!(t instanceof Date && e instanceof Date)) throw "No legal start or end date in method setRange";
                this._start = null != t ? this.moment(t.valueOf()) : _c(), this._end = null != e ? this.moment(e.valueOf()) : _c(), this.autoScale && this.setMinimumStep(i)
            }
        }, { key: "start", value: function() { this.current = this._start.clone(), this.roundToMinor() } }, {
            key: "roundToMinor",
            value: function() {
                switch ("week" == this.scale && this.current.weekday(0), this.scale) {
                    case "year":
                        this.current.year(this.step * Math.floor(this.current.year() / this.step)), this.current.month(0);
                    case "month":
                        this.current.date(1);
                    case "week":
                    case "day":
                    case "weekday":
                        this.current.hours(0);
                    case "hour":
                        this.current.minutes(0);
                    case "minute":
                        this.current.seconds(0);
                    case "second":
                        this.current.milliseconds(0)
                }
                if (1 != this.step) {
                    var t = this.current.clone();
                    switch (this.scale) {
                        case "millisecond":
                            this.current.subtract(this.current.milliseconds() % this.step, "milliseconds");
                            break;
                        case "second":
                            this.current.subtract(this.current.seconds() % this.step, "seconds");
                            break;
                        case "minute":
                            this.current.subtract(this.current.minutes() % this.step, "minutes");
                            break;
                        case "hour":
                            this.current.subtract(this.current.hours() % this.step, "hours");
                            break;
                        case "weekday":
                        case "day":
                            this.current.subtract((this.current.date() - 1) % this.step, "day");
                            break;
                        case "week":
                            this.current.subtract(this.current.week() % this.step, "week");
                            break;
                        case "month":
                            this.current.subtract(this.current.month() % this.step, "month");
                            break;
                        case "year":
                            this.current.subtract(this.current.year() % this.step, "year")
                    }
                    t.isSame(this.current) || (this.current = this.moment(aE(this.hiddenDates, this.current.valueOf(), -1, !0)))
                }
            }
        }, { key: "hasNext", value: function() { return this.current.valueOf() <= this._end.valueOf() } }, {
            key: "next",
            value: function() {
                var t = this.current.valueOf();
                switch (this.scale) {
                    case "millisecond":
                        this.current.add(this.step, "millisecond");
                        break;
                    case "second":
                        this.current.add(this.step, "second");
                        break;
                    case "minute":
                        this.current.add(this.step, "minute");
                        break;
                    case "hour":
                        this.current.add(this.step, "hour"), this.current.month() < 6 ? this.current.subtract(this.current.hours() % this.step, "hour") : this.current.hours() % this.step != 0 && this.current.add(this.step - this.current.hours() % this.step, "hour");
                        break;
                    case "weekday":
                    case "day":
                        this.current.add(this.step, "day");
                        break;
                    case "week":
                        if (0 !== this.current.weekday()) this.current.weekday(0), this.current.add(this.step, "week");
                        else if (!1 === this.options.showMajorLabels) this.current.add(this.step, "week");
                        else {
                            var e = this.current.clone();
                            e.add(1, "week"), e.isSame(this.current, "month") ? this.current.add(this.step, "week") : (this.current.add(this.step, "week"), this.current.date(1))
                        }
                        break;
                    case "month":
                        this.current.add(this.step, "month");
                        break;
                    case "year":
                        this.current.add(this.step, "year")
                }
                if (1 != this.step) switch (this.scale) {
                    case "millisecond":
                        this.current.milliseconds() > 0 && this.current.milliseconds() < this.step && this.current.milliseconds(0);
                        break;
                    case "second":
                        this.current.seconds() > 0 && this.current.seconds() < this.step && this.current.seconds(0);
                        break;
                    case "minute":
                        this.current.minutes() > 0 && this.current.minutes() < this.step && this.current.minutes(0);
                        break;
                    case "hour":
                        this.current.hours() > 0 && this.current.hours() < this.step && this.current.hours(0);
                        break;
                    case "weekday":
                    case "day":
                        this.current.date() < this.step + 1 && this.current.date(1);
                        break;
                    case "week":
                        this.current.week() < this.step && this.current.week(1);
                        break;
                    case "month":
                        this.current.month() < this.step && this.current.month(0)
                }
                this.current.valueOf() == t && (this.current = this._end.clone()), this.switchedDay = !1, this.switchedMonth = !1, this.switchedYear = !1, QO(this.moment, this, t)
            }
        }, { key: "getCurrent", value: function() { return this.current.clone() } }, { key: "setScale", value: function(t) { t && "string" == typeof t.scale && (this.scale = t.scale, this.step = t.step > 0 ? t.step : 1, this.autoScale = !1) } }, { key: "setAutoScale", value: function(t) { this.autoScale = t } }, {
            key: "setMinimumStep",
            value: function(t) {
                if (null != t) {
                    var e = 31104e6,
                        i = 2592e6,
                        n = 864e5,
                        o = 36e5,
                        r = 6e4,
                        s = 1e3;
                    1e3 * e > t && (this.scale = "year", this.step = 1e3), 500 * e > t && (this.scale = "year", this.step = 500), 100 * e > t && (this.scale = "year", this.step = 100), 50 * e > t && (this.scale = "year", this.step = 50), 10 * e > t && (this.scale = "year", this.step = 10), 5 * e > t && (this.scale = "year", this.step = 5), e > t && (this.scale = "year", this.step = 1), 7776e6 > t && (this.scale = "month", this.step = 3), i > t && (this.scale = "month", this.step = 1), 6048e5 > t && this.options.showWeekScale && (this.scale = "week", this.step = 1), 1728e5 > t && (this.scale = "day", this.step = 2), n > t && (this.scale = "day", this.step = 1), 432e5 > t && (this.scale = "weekday", this.step = 1), 144e5 > t && (this.scale = "hour", this.step = 4), o > t && (this.scale = "hour", this.step = 1), 9e5 > t && (this.scale = "minute", this.step = 15), 6e5 > t && (this.scale = "minute", this.step = 10), 3e5 > t && (this.scale = "minute", this.step = 5), r > t && (this.scale = "minute", this.step = 1), 15e3 > t && (this.scale = "second", this.step = 15), 1e4 > t && (this.scale = "second", this.step = 10), 5e3 > t && (this.scale = "second", this.step = 5), s > t && (this.scale = "second", this.step = 1), 200 > t && (this.scale = "millisecond", this.step = 200), 100 > t && (this.scale = "millisecond", this.step = 100), 50 > t && (this.scale = "millisecond", this.step = 50), 10 > t && (this.scale = "millisecond", this.step = 10), 5 > t && (this.scale = "millisecond", this.step = 5), 1 > t && (this.scale = "millisecond", this.step = 1)
                }
            }
        }, {
            key: "isMajor",
            value: function() {
                if (1 == this.switchedYear) switch (this.scale) {
                    case "year":
                    case "month":
                    case "week":
                    case "weekday":
                    case "day":
                    case "hour":
                    case "minute":
                    case "second":
                    case "millisecond":
                        return !0;
                    default:
                        return !1
                } else if (1 == this.switchedMonth) switch (this.scale) {
                        case "week":
                        case "weekday":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                        case "millisecond":
                            return !0;
                        default:
                            return !1
                    } else if (1 == this.switchedDay) switch (this.scale) {
                        case "millisecond":
                        case "second":
                        case "minute":
                        case "hour":
                            return !0;
                        default:
                            return !1
                    }
                var t = this.moment(this.current);
                switch (this.scale) {
                    case "millisecond":
                        return 0 == t.milliseconds();
                    case "second":
                        return 0 == t.seconds();
                    case "minute":
                        return 0 == t.hours() && 0 == t.minutes();
                    case "hour":
                        return 0 == t.hours();
                    case "weekday":
                    case "day":
                        return this.options.showWeekScale ? 1 == t.isoWeekday() : 1 == t.date();
                    case "week":
                        return 1 == t.date();
                    case "month":
                        return 0 == t.month();
                    case "year":
                    default:
                        return !1
                }
            }
        }, {
            key: "getLabelMinor",
            value: function(t) {
                if (null == t && (t = this.current), t instanceof Date && (t = this.moment(t)), "function" == typeof this.format.minorLabels) return this.format.minorLabels(t, this.scale, this.step);
                var e = this.format.minorLabels[this.scale];
                switch (this.scale) {
                    case "week":
                        if (1 === t.date() && 0 !== t.weekday()) return "";
                    default:
                        return e && e.length > 0 ? this.moment(t).format(e) : ""
                }
            }
        }, { key: "getLabelMajor", value: function(t) { if (null == t && (t = this.current), t instanceof Date && (t = this.moment(t)), "function" == typeof this.format.majorLabels) return this.format.majorLabels(t, this.scale, this.step); var e = this.format.majorLabels[this.scale]; return e && e.length > 0 ? this.moment(t).format(e) : "" } }, {
            key: "getClassName",
            value: function() {
                var t, e = this.moment,
                    i = this.moment(this.current),
                    n = i.locale ? i.locale("en") : i.lang("en"),
                    o = this.step,
                    r = [];

                function s(t) { return t / o % 2 == 0 ? " vis-even" : " vis-odd" }

                function a(t) { return t.isSame(_c(), "day") ? " vis-today" : t.isSame(e().add(1, "day"), "day") ? " vis-tomorrow" : t.isSame(e().add(-1, "day"), "day") ? " vis-yesterday" : "" }

                function l(t) { return t.isSame(_c(), "week") ? " vis-current-week" : "" }

                function h(t) { return t.isSame(_c(), "month") ? " vis-current-month" : "" }
                switch (this.scale) {
                    case "millisecond":
                        r.push(a(n)), r.push(s(n.milliseconds()));
                        break;
                    case "second":
                        r.push(a(n)), r.push(s(n.seconds()));
                        break;
                    case "minute":
                        r.push(a(n)), r.push(s(n.minutes()));
                        break;
                    case "hour":
                        r.push(Xd(t = "vis-h".concat(n.hours())).call(t, 4 == this.step ? "-h" + (n.hours() + 4) : "")), r.push(a(n)), r.push(s(n.hours()));
                        break;
                    case "weekday":
                        r.push("vis-".concat(n.format("dddd").toLowerCase())), r.push(a(n)), r.push(l(n)), r.push(s(n.date()));
                        break;
                    case "day":
                        r.push("vis-day".concat(n.date())), r.push("vis-".concat(n.format("MMMM").toLowerCase())), r.push(a(n)), r.push(h(n)), r.push(this.step <= 2 ? a(n) : ""), r.push(this.step <= 2 ? "vis-".concat(n.format("dddd").toLowerCase()) : ""), r.push(s(n.date() - 1));
                        break;
                    case "week":
                        r.push("vis-week".concat(n.format("w"))), r.push(l(n)), r.push(s(n.week()));
                        break;
                    case "month":
                        r.push("vis-".concat(n.format("MMMM").toLowerCase())), r.push(h(n)), r.push(s(n.month()));
                        break;
                    case "year":
                        r.push("vis-year".concat(n.year())), r.push(function(t) { return t.isSame(_c(), "year") ? " vis-current-year" : "" }(n)), r.push(s(n.year()))
                }
                return Af(r).call(r, String).join(" ")
            }
        }], [{
            key: "snap",
            value: function(t, e, i) {
                var n = cM(t);
                if ("year" == e) {
                    var o = n.year() + Math.round(n.month() / 12);
                    n.year(Math.round(o / i) * i), n.month(0), n.date(0), n.hours(0), n.minutes(0), n.seconds(0), n.milliseconds(0)
                } else if ("month" == e) n.date() > 15 ? (n.date(1), n.add(1, "month")) : n.date(1), n.hours(0), n.minutes(0), n.seconds(0), n.milliseconds(0);
                else if ("week" == e) n.weekday() > 2 ? (n.weekday(0), n.add(1, "week")) : n.weekday(0), n.hours(0), n.minutes(0), n.seconds(0), n.milliseconds(0);
                else if ("day" == e) {
                    switch (i) {
                        case 5:
                        case 2:
                            n.hours(24 * Math.round(n.hours() / 24));
                            break;
                        default:
                            n.hours(12 * Math.round(n.hours() / 12))
                    }
                    n.minutes(0), n.seconds(0), n.milliseconds(0)
                } else if ("weekday" == e) {
                    switch (i) {
                        case 5:
                        case 2:
                            n.hours(12 * Math.round(n.hours() / 12));
                            break;
                        default:
                            n.hours(6 * Math.round(n.hours() / 6))
                    }
                    n.minutes(0), n.seconds(0), n.milliseconds(0)
                } else if ("hour" == e) {
                    switch (i) {
                        case 4:
                            n.minutes(60 * Math.round(n.minutes() / 60));
                            break;
                        default:
                            n.minutes(30 * Math.round(n.minutes() / 30))
                    }
                    n.seconds(0), n.milliseconds(0)
                } else if ("minute" == e) {
                    switch (i) {
                        case 15:
                        case 10:
                            n.minutes(5 * Math.round(n.minutes() / 5)), n.seconds(0);
                            break;
                        case 5:
                            n.seconds(60 * Math.round(n.seconds() / 60));
                            break;
                        default:
                            n.seconds(30 * Math.round(n.seconds() / 30))
                    }
                    n.milliseconds(0)
                } else if ("second" == e) switch (i) {
                        case 15:
                        case 10:
                            n.seconds(5 * Math.round(n.seconds() / 5)), n.milliseconds(0);
                            break;
                        case 5:
                            n.milliseconds(1e3 * Math.round(n.milliseconds() / 1e3));
                            break;
                        default:
                            n.milliseconds(500 * Math.round(n.milliseconds() / 500))
                    } else if ("millisecond" == e) {
                        var r = i > 5 ? i / 2 : 1;
                        n.milliseconds(Math.round(n.milliseconds() / r) * r)
                    }
                return n
            }
        }]), t
    }();

    function wE(t, e) {
        void 0 === e && (e = {});
        var i = e.insertAt;
        if (t && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("style");
            o.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t))
        }
    }
    _E.FORMAT = { minorLabels: { millisecond: "SSS", second: "s", minute: "HH:mm", hour: "HH:mm", weekday: "ddd D", day: "D", week: "w", month: "MMM", year: "YYYY" }, majorLabels: { millisecond: "HH:mm:ss", second: "D MMMM HH:mm", minute: "ddd D MMMM", hour: "ddd D MMMM", weekday: "MMMM YYYY", day: "MMMM YYYY", week: "MMMM YYYY", month: "YYYY", year: "" } };

    function kE(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    wE(".vis-time-axis{overflow:hidden;position:relative}.vis-time-axis.vis-foreground{left:0;top:0;width:100%}.vis-time-axis.vis-background{height:100%;left:0;position:absolute;top:0;width:100%}.vis-time-axis .vis-text{box-sizing:border-box;color:#4d4d4d;overflow:hidden;padding:3px;position:absolute;white-space:nowrap}.vis-time-axis .vis-text.vis-measure{margin-left:0;margin-right:0;padding-left:0;padding-right:0;position:absolute;visibility:hidden}.vis-time-axis .vis-grid.vis-vertical{border-left:1px solid;position:absolute}.vis-time-axis .vis-grid.vis-vertical-rtl{border-right:1px solid;position:absolute}.vis-time-axis .vis-grid.vis-minor{border-color:#e5e5e5}.vis-time-axis .vis-grid.vis-major{border-color:#bfbfbf}");
    var xE = function(t) {
            p_(i, t);
            var e = kE(i);

            function i(t, n) { var o; return yu(this, i), (o = e.call(this)).dom = { foreground: null, lines: [], majorTexts: [], minorTexts: [], redundant: { lines: [], majorTexts: [], minorTexts: [] } }, o.props = { range: { start: 0, end: 0, minimumStep: 0 }, lineTop: 0 }, o.defaultOptions = { orientation: { axis: "bottom" }, showMinorLabels: !0, showMajorLabels: !0, showWeekScale: !1, maxMinorChars: 7, format: SO.extend({}, _E.FORMAT), moment: cM, timeAxis: null }, o.options = SO.extend({}, o.defaultOptions), o.body = t, o._create(), o.setOptions(n), o }
            return xu(i, [{ key: "setOptions", value: function(t) { t && (SO.selectiveExtend(["showMinorLabels", "showMajorLabels", "showWeekScale", "maxMinorChars", "hiddenDates", "timeAxis", "moment", "rtl"], this.options, t), SO.selectiveDeepExtend(["format"], this.options, t), "orientation" in t && ("string" == typeof t.orientation ? this.options.orientation.axis = t.orientation : "object" === Rd(t.orientation) && "axis" in t.orientation && (this.options.orientation.axis = t.orientation.axis)), "locale" in t && ("function" == typeof cM.locale ? cM.locale(t.locale) : cM.lang(t.locale))) } }, { key: "_create", value: function() { this.dom.foreground = document.createElement("div"), this.dom.background = document.createElement("div"), this.dom.foreground.className = "vis-time-axis vis-foreground", this.dom.background.className = "vis-time-axis vis-background" } }, { key: "destroy", value: function() { this.dom.foreground.parentNode && this.dom.foreground.parentNode.removeChild(this.dom.foreground), this.dom.background.parentNode && this.dom.background.parentNode.removeChild(this.dom.background), this.body = null } }, {
                key: "redraw",
                value: function() {
                    var t = this.props,
                        e = this.dom.foreground,
                        i = this.dom.background,
                        n = "top" == this.options.orientation.axis ? this.body.dom.top : this.body.dom.bottom,
                        o = e.parentNode !== n;
                    this._calculateCharSize();
                    var r = this.options.showMinorLabels && "none" !== this.options.orientation.axis,
                        s = this.options.showMajorLabels && "none" !== this.options.orientation.axis;
                    t.minorLabelHeight = r ? t.minorCharHeight : 0, t.majorLabelHeight = s ? t.majorCharHeight : 0, t.height = t.minorLabelHeight + t.majorLabelHeight, t.width = e.offsetWidth, t.minorLineHeight = this.body.domProps.root.height - t.majorLabelHeight - ("top" == this.options.orientation.axis ? this.body.domProps.bottom.height : this.body.domProps.top.height), t.minorLineWidth = 1, t.majorLineHeight = t.minorLineHeight + t.majorLabelHeight, t.majorLineWidth = 1;
                    var a = e.nextSibling,
                        l = i.nextSibling;
                    return e.parentNode && e.parentNode.removeChild(e), i.parentNode && i.parentNode.removeChild(i), e.style.height = "".concat(this.props.height, "px"), this._repaintLabels(), a ? n.insertBefore(e, a) : n.appendChild(e), l ? this.body.dom.backgroundVertical.insertBefore(i, l) : this.body.dom.backgroundVertical.appendChild(i), this._isResized() || o
                }
            }, {
                key: "_repaintLabels",
                value: function() {
                    var t = this.options.orientation.axis,
                        e = SO.convert(this.body.range.start, "Number"),
                        i = SO.convert(this.body.range.end, "Number"),
                        n = this.body.util.toTime((this.props.minorCharWidth || 10) * this.options.maxMinorChars).valueOf(),
                        o = n - rE(this.options.moment, this.body.hiddenDates, this.body.range, n);
                    o -= this.body.util.toTime(0).valueOf();
                    var r = new _E(new Date(e), new Date(i), o, this.body.hiddenDates, this.options);
                    r.setMoment(this.options.moment), this.options.format && r.setFormat(this.options.format), this.options.timeAxis && r.setScale(this.options.timeAxis), this.step = r;
                    var s, a, l, h, u, d, c = this.dom;
                    c.redundant.lines = c.lines, c.redundant.majorTexts = c.majorTexts, c.redundant.minorTexts = c.minorTexts, c.lines = [], c.majorTexts = [], c.minorTexts = [];
                    var p, f, m, v = 0,
                        g = void 0,
                        y = 0,
                        b = 1e3;
                    for (r.start(), a = r.getCurrent(), h = this.body.util.toScreen(a); r.hasNext() && y < b;) {
                        switch (y++, u = r.isMajor(), m = r.getClassName(), s = a, l = h, r.next(), a = r.getCurrent(), p = v, v = (h = this.body.util.toScreen(a)) - l, r.scale) {
                            case "week":
                                d = !0;
                                break;
                            default:
                                d = v >= .4 * p
                        }
                        if (this.options.showMinorLabels && d) {
                            var _ = this._repaintMinorText(l, r.getLabelMinor(s), t, m);
                            _.style.width = "".concat(v, "px")
                        }
                        u && this.options.showMajorLabels ? (l > 0 && (null == g && (g = l), _ = this._repaintMajorText(l, r.getLabelMajor(s), t, m)), f = this._repaintMajorLine(l, v, t, m)) : d ? f = this._repaintMinorLine(l, v, t, m) : f && (f.style.width = "".concat(pm(f.style.width) + v, "px"))
                    }
                    if (y !== b || DE || (console.warn("Something is wrong with the Timeline scale. Limited drawing of grid lines to ".concat(b, " lines.")), DE = !0), this.options.showMajorLabels) {
                        var w = this.body.util.toTime(0),
                            k = r.getLabelMajor(w),
                            x = k.length * (this.props.majorCharWidth || 10) + 10;
                        (null == g || x < g) && this._repaintMajorText(0, k, t, m)
                    }
                    tp(SO).call(SO, this.dom.redundant, (function(t) {
                        for (; t.length;) {
                            var e = t.pop();
                            e && e.parentNode && e.parentNode.removeChild(e)
                        }
                    }))
                }
            }, {
                key: "_repaintMinorText",
                value: function(t, e, i, n) {
                    var o = this.dom.redundant.minorTexts.shift();
                    if (!o) {
                        var r = document.createTextNode("");
                        (o = document.createElement("div")).appendChild(r), this.dom.foreground.appendChild(o)
                    }
                    this.dom.minorTexts.push(o), o.innerHTML = SO.xss(e);
                    var s = "top" == i ? this.props.majorLabelHeight : 0;
                    return this._setXY(o, t, s), o.className = "vis-text vis-minor ".concat(n), o
                }
            }, {
                key: "_repaintMajorText",
                value: function(t, e, i, n) {
                    var o = this.dom.redundant.majorTexts.shift();
                    if (!o) {
                        var r = document.createElement("div");
                        (o = document.createElement("div")).appendChild(r), this.dom.foreground.appendChild(o)
                    }
                    o.childNodes[0].innerHTML = SO.xss(e), o.className = "vis-text vis-major ".concat(n);
                    var s = "top" == i ? 0 : this.props.minorLabelHeight;
                    return this._setXY(o, t, s), this.dom.majorTexts.push(o), o
                }
            }, {
                key: "_setXY",
                value: function(t, e, i) {
                    var n, o = this.options.rtl ? -1 * e : e;
                    t.style.transform = Xd(n = "translate(".concat(o, "px, ")).call(n, i, "px)")
                }
            }, {
                key: "_repaintMinorLine",
                value: function(t, e, i, n) {
                    var o, r = this.dom.redundant.lines.shift();
                    r || (r = document.createElement("div"), this.dom.background.appendChild(r)), this.dom.lines.push(r);
                    var s = this.props;
                    r.style.width = "".concat(e, "px"), r.style.height = "".concat(s.minorLineHeight, "px");
                    var a = "top" == i ? s.majorLabelHeight : this.body.domProps.top.height,
                        l = t - s.minorLineWidth / 2;
                    return this._setXY(r, l, a), r.className = Xd(o = "vis-grid ".concat(this.options.rtl ? "vis-vertical-rtl" : "vis-vertical", " vis-minor ")).call(o, n), r
                }
            }, {
                key: "_repaintMajorLine",
                value: function(t, e, i, n) {
                    var o, r = this.dom.redundant.lines.shift();
                    r || (r = document.createElement("div"), this.dom.background.appendChild(r)), this.dom.lines.push(r);
                    var s = this.props;
                    r.style.width = "".concat(e, "px"), r.style.height = "".concat(s.majorLineHeight, "px");
                    var a = "top" == i ? 0 : this.body.domProps.top.height,
                        l = t - s.majorLineWidth / 2;
                    return this._setXY(r, l, a), r.className = Xd(o = "vis-grid ".concat(this.options.rtl ? "vis-vertical-rtl" : "vis-vertical", " vis-major ")).call(o, n), r
                }
            }, { key: "_calculateCharSize", value: function() { this.dom.measureCharMinor || (this.dom.measureCharMinor = document.createElement("DIV"), this.dom.measureCharMinor.className = "vis-text vis-minor vis-measure", this.dom.measureCharMinor.style.position = "absolute", this.dom.measureCharMinor.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMinor)), this.props.minorCharHeight = this.dom.measureCharMinor.clientHeight, this.props.minorCharWidth = this.dom.measureCharMinor.clientWidth, this.dom.measureCharMajor || (this.dom.measureCharMajor = document.createElement("DIV"), this.dom.measureCharMajor.className = "vis-text vis-major vis-measure", this.dom.measureCharMajor.style.position = "absolute", this.dom.measureCharMajor.appendChild(document.createTextNode("0")), this.dom.foreground.appendChild(this.dom.measureCharMajor)), this.props.majorCharHeight = this.dom.measureCharMajor.clientHeight, this.props.majorCharWidth = this.dom.measureCharMajor.clientWidth } }]), i
        }(jO),
        DE = !1;

    function SE(t) {
        var e, i = t && t.preventDefault || !1,
            n = t && t.container || window,
            o = {},
            r = { keydown: {}, keyup: {} },
            s = {};
        for (e = 97; e <= 122; e++) s[String.fromCharCode(e)] = { code: e - 97 + 65, shift: !1 };
        for (e = 65; e <= 90; e++) s[String.fromCharCode(e)] = { code: e, shift: !0 };
        for (e = 0; e <= 9; e++) s["" + e] = { code: 48 + e, shift: !1 };
        for (e = 1; e <= 12; e++) s["F" + e] = { code: 111 + e, shift: !1 };
        for (e = 0; e <= 9; e++) s["num" + e] = { code: 96 + e, shift: !1 };
        s["num*"] = { code: 106, shift: !1 }, s["num+"] = { code: 107, shift: !1 }, s["num-"] = { code: 109, shift: !1 }, s["num/"] = { code: 111, shift: !1 }, s["num."] = { code: 110, shift: !1 }, s.left = { code: 37, shift: !1 }, s.up = { code: 38, shift: !1 }, s.right = { code: 39, shift: !1 }, s.down = { code: 40, shift: !1 }, s.space = { code: 32, shift: !1 }, s.enter = { code: 13, shift: !1 }, s.shift = { code: 16, shift: void 0 }, s.esc = { code: 27, shift: !1 }, s.backspace = { code: 8, shift: !1 }, s.tab = { code: 9, shift: !1 }, s.ctrl = { code: 17, shift: !1 }, s.alt = { code: 18, shift: !1 }, s.delete = { code: 46, shift: !1 }, s.pageup = { code: 33, shift: !1 }, s.pagedown = { code: 34, shift: !1 }, s["="] = { code: 187, shift: !1 }, s["-"] = { code: 189, shift: !1 }, s["]"] = { code: 221, shift: !1 }, s["["] = { code: 219, shift: !1 };
        var a = function(t) { h(t, "keydown") },
            l = function(t) { h(t, "keyup") },
            h = function(t, e) {
                if (void 0 !== r[e][t.keyCode]) {
                    for (var n = r[e][t.keyCode], o = 0; o < n.length; o++)(void 0 === n[o].shift || 1 == n[o].shift && 1 == t.shiftKey || 0 == n[o].shift && 0 == t.shiftKey) && n[o].fn(t);
                    1 == i && t.preventDefault()
                }
            };
        return o.bind = function(t, e, i) {
            if (void 0 === i && (i = "keydown"), void 0 === s[t]) throw new Error("unsupported key: " + t);
            void 0 === r[i][s[t].code] && (r[i][s[t].code] = []), r[i][s[t].code].push({ fn: e, shift: s[t].shift })
        }, o.bindAll = function(t, e) { for (var i in void 0 === e && (e = "keydown"), s) s.hasOwnProperty(i) && o.bind(i, t, e) }, o.getKey = function(t) {
            for (var e in s)
                if (s.hasOwnProperty(e)) { if (1 == t.shiftKey && 1 == s[e].shift && t.keyCode == s[e].code) return e; if (0 == t.shiftKey && 0 == s[e].shift && t.keyCode == s[e].code) return e; if (t.keyCode == s[e].code && "shift" == e) return e }
            return "unknown key, currently not supported"
        }, o.unbind = function(t, e, i) {
            if (void 0 === i && (i = "keydown"), void 0 === s[t]) throw new Error("unsupported key: " + t);
            if (void 0 !== e) {
                var n = [],
                    o = r[i][s[t].code];
                if (void 0 !== o)
                    for (var a = 0; a < o.length; a++) o[a].fn == e && o[a].shift == s[t].shift || n.push(r[i][s[t].code][a]);
                r[i][s[t].code] = n
            } else r[i][s[t].code] = []
        }, o.reset = function() { r = { keydown: {}, keyup: {} } }, o.destroy = function() { r = { keydown: {}, keyup: {} }, n.removeEventListener("keydown", a, !0), n.removeEventListener("keyup", l, !0) }, n.addEventListener("keydown", a, !0), n.addEventListener("keyup", l, !0), o
    }

    function CE(t) {
        var e, i;
        this.active = !1, this.dom = { container: t }, this.dom.overlay = document.createElement("div"), this.dom.overlay.className = "vis-overlay", this.dom.container.appendChild(this.dom.overlay), this.hammer = yE(this.dom.overlay), this.hammer.on("tap", Hc(e = this._onTapOverlay).call(e, this));
        var n = this,
            o = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
        tp(o).call(o, (function(t) { n.hammer.on(t, (function(t) { t.stopPropagation() })) })), document && document.body && (this.onClick = function(e) {
            (function(t, e) {
                for (; t;) {
                    if (t === e) return !0;
                    t = t.parentNode
                }
                return !1
            })(e.target, t) || n.deactivate()
        }, document.body.addEventListener("click", this.onClick)), void 0 !== this.keycharm && this.keycharm.destroy(), this.keycharm = SE(), this.escListener = Hc(i = this.deactivate).call(i, this)
    }
    wE(".vis .overlay{height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}.vis-active{box-shadow:0 0 10px #86d5f8}"), Nv(CE.prototype), CE.current = null, CE.prototype.destroy = function() { this.deactivate(), this.dom.overlay.parentNode.removeChild(this.dom.overlay), this.onClick && document.body.removeEventListener("click", this.onClick), void 0 !== this.keycharm && this.keycharm.destroy(), this.keycharm = null, this.hammer.destroy(), this.hammer = null }, CE.prototype.activate = function() {
        var t;
        CE.current && CE.current.deactivate(), CE.current = this, this.active = !0, this.dom.overlay.style.display = "none", SO.addClassName(this.dom.container, "vis-active"), this.emit("change"), this.emit("activate"), Hc(t = this.keycharm).call(t, "esc", this.escListener)
    }, CE.prototype.deactivate = function() { CE.current === this && (CE.current = null), this.active = !1, this.dom.overlay.style.display = "", SO.removeClassName(this.dom.container, "vis-active"), this.keycharm.unbind("esc", this.escListener), this.emit("change"), this.emit("deactivate") }, CE.prototype._onTapOverlay = function(t) { this.activate(), t.stopPropagation() };
    var TE = { current: "current", time: "time", deleteSelected: "Delete selected" },
        ME = { current: "attuale", time: "tempo", deleteSelected: "Cancella la selezione" },
        OE = { current: "huidige", time: "tijd", deleteSelected: "Selectie verwijderen" },
        EE = { current: "Aktuelle", time: "Zeit", deleteSelected: "LÃ¶sche Auswahl" },
        PE = { current: "actuel", time: "heure", deleteSelected: "Effacer la selection" },
        AE = { current: "corriente", time: "hora", deleteSelected: "Eliminar selecciÃ³n" },
        IE = { current: "Ð¿Ð¾Ñ‚Ð¾Ñ‡Ð½Ð¸Ð¹", time: "Ñ‡Ð°Ñ", deleteSelected: "Ð’Ð¸Ð´Ð°Ð»Ð¸Ñ‚Ð¸ Ð¾Ð±Ñ€Ð°Ð½Ðµ" },
        LE = { current: "Ñ‚ÐµÐºÑƒÑ‰ÐµÐµ", time: "Ð²Ñ€ÐµÐ¼Ñ", deleteSelected: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð½Ð¾Ðµ" },
        NE = { current: "aktualny", time: "czas", deleteSelected: "UsuÅ„ wybrane" },
        FE = { current: "atual", time: "data", deleteSelected: "Apagar selecionado" },
        RE = { current: "ç¾åœ¨", time: "æ™‚åˆ»", deleteSelected: "é¸æŠžã•ã‚ŒãŸã‚‚ã®ã‚’å‰Šé™¤" },
        jE = { current: "nuvarande", time: "tid", deleteSelected: "Radera valda" },
        YE = { current: "nÃ¥vÃ¦rende", time: "tid", deleteSelected: "Slett valgte" },
        HE = { current: "einamas", time: "laikas", deleteSelected: "PaÅ¡alinti pasirinktÄ…" },
        zE = { en: TE, en_EN: TE, en_US: TE, it: ME, it_IT: ME, it_CH: ME, nl: OE, nl_NL: OE, nl_BE: OE, de: EE, de_DE: EE, fr: PE, fr_FR: PE, fr_CA: PE, fr_BE: PE, es: AE, es_ES: AE, uk: IE, uk_UA: IE, ru: LE, ru_RU: LE, pl: NE, pl_PL: NE, pt: FE, pt_BR: FE, pt_PT: FE, ja: RE, ja_JP: RE, lt: HE, lt_LT: HE, sv: jE, sv_SE: jE, nb: YE, nn: YE, nb_NO: YE, nn_NO: YE };

    function BE(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    wE(".vis-custom-time{background-color:#6e94ff;cursor:move;width:2px;z-index:1}.vis-custom-time>.vis-custom-time-marker{background-color:inherit;color:#fff;cursor:auto;font-size:12px;padding:3px 5px;top:0;white-space:nowrap;z-index:inherit}");
    var GE = function(t) {
        p_(i, t);
        var e = BE(i);

        function i(t, n) {
            var o, r;
            yu(this, i), (r = e.call(this)).body = t, r.defaultOptions = { moment: cM, locales: zE, locale: "en", id: void 0, title: void 0 }, r.options = SO.extend({}, r.defaultOptions), r.setOptions(n), r.options.locales = SO.extend({}, zE, r.options.locales);
            var s = r.defaultOptions.locales[r.defaultOptions.locale];
            return tp(o = pc(r.options.locales)).call(o, (function(t) { r.options.locales[t] = SO.extend({}, s, r.options.locales[t]) })), n && null != n.time ? r.customTime = n.time : r.customTime = new Date, r.eventParams = {}, r._create(), r
        }
        return xu(i, [{ key: "setOptions", value: function(t) { t && SO.selectiveExtend(["moment", "locale", "locales", "id", "title", "rtl", "snap"], this.options, t) } }, {
            key: "_create",
            value: function() {
                var t, e, i, n = document.createElement("div");
                n["custom-time"] = this, n.className = "vis-custom-time ".concat(this.options.id || ""), n.style.position = "absolute", n.style.top = "0px", n.style.height = "100%", this.bar = n;
                var o = document.createElement("div");

                function r(t) { this.body.range._onMouseWheel(t) }
                o.style.position = "relative", o.style.top = "0px", this.options.rtl ? o.style.right = "-10px" : o.style.left = "-10px", o.style.height = "100%", o.style.width = "20px", o.addEventListener ? (o.addEventListener("mousewheel", Hc(r).call(r, this), !1), o.addEventListener("DOMMouseScroll", Hc(r).call(r, this), !1)) : o.attachEvent("onmousewheel", Hc(r).call(r, this)), n.appendChild(o), this.hammer = new yE(o), this.hammer.on("panstart", Hc(t = this._onDragStart).call(t, this)), this.hammer.on("panmove", Hc(e = this._onDrag).call(e, this)), this.hammer.on("panend", Hc(i = this._onDragEnd).call(i, this)), this.hammer.get("pan").set({ threshold: 5, direction: yE.DIRECTION_ALL }), this.hammer.get("press").set({ time: 1e4 })
            }
        }, { key: "destroy", value: function() { this.hide(), this.hammer.destroy(), this.hammer = null, this.body = null } }, {
            key: "redraw",
            value: function() {
                var t = this.body.dom.backgroundVertical;
                this.bar.parentNode != t && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), t.appendChild(this.bar));
                var e = this.body.util.toScreen(this.customTime),
                    i = this.options.locales[this.options.locale];
                i || (this.warned || (console.warn("WARNING: options.locales['".concat(this.options.locale, "'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization")), this.warned = !0), i = this.options.locales.en);
                var n, o = this.options.title;
                void 0 === o ? o = (o = Xd(n = "".concat(i.time, ": ")).call(n, this.options.moment(this.customTime).format("dddd, MMMM Do YYYY, H:mm:ss"))).charAt(0).toUpperCase() + o.substring(1) : "function" == typeof o && (o = o.call(this, this.customTime));
                return this.options.rtl ? this.bar.style.right = "".concat(e, "px") : this.bar.style.left = "".concat(e, "px"), this.bar.title = o, !1
            }
        }, { key: "hide", value: function() { this.bar.parentNode && this.bar.parentNode.removeChild(this.bar) } }, { key: "setCustomTime", value: function(t) { this.customTime = SO.convert(t, "Date"), this.redraw() } }, { key: "getCustomTime", value: function() { return new Date(this.customTime.valueOf()) } }, {
            key: "setCustomMarker",
            value: function(t, e) {
                var i, n, o = document.createElement("div");
                (o.className = "vis-custom-time-marker", o.innerHTML = SO.xss(t), o.style.position = "absolute", e) && (o.setAttribute("contenteditable", "true"), o.addEventListener("pointerdown", (function() { o.focus() })), o.addEventListener("input", Hc(i = this._onMarkerChange).call(i, this)), o.title = t, o.addEventListener("blur", Hc(n = function(t) { this.title != t.target.innerHTML && (this._onMarkerChanged(t), this.title = t.target.innerHTML) }).call(n, this)));
                this.bar.appendChild(o)
            }
        }, { key: "setCustomTitle", value: function(t) { this.options.title = t } }, { key: "_onDragStart", value: function(t) { this.eventParams.dragging = !0, this.eventParams.customTime = this.customTime, t.stopPropagation() } }, {
            key: "_onDrag",
            value: function(t) {
                if (this.eventParams.dragging) {
                    var e = this.options.rtl ? -1 * t.deltaX : t.deltaX,
                        i = this.body.util.toScreen(this.eventParams.customTime) + e,
                        n = this.body.util.toTime(i),
                        o = this.body.util.getScale(),
                        r = this.body.util.getStep(),
                        s = this.options.snap,
                        a = s ? s(n, o, r) : n;
                    this.setCustomTime(a), this.body.emitter.emit("timechange", { id: this.options.id, time: new Date(this.customTime.valueOf()), event: t }), t.stopPropagation()
                }
            }
        }, { key: "_onDragEnd", value: function(t) { this.eventParams.dragging && (this.body.emitter.emit("timechanged", { id: this.options.id, time: new Date(this.customTime.valueOf()), event: t }), t.stopPropagation()) } }, { key: "_onMarkerChange", value: function(t) { this.body.emitter.emit("markerchange", { id: this.options.id, title: t.target.innerHTML, event: t }), t.stopPropagation() } }, { key: "_onMarkerChanged", value: function(t) { this.body.emitter.emit("markerchanged", { id: this.options.id, title: t.target.innerHTML, event: t }), t.stopPropagation() } }], [{
            key: "customTimeFromTarget",
            value: function(t) {
                for (var e = t.target; e;) {
                    if (e.hasOwnProperty("custom-time")) return e["custom-time"];
                    e = e.parentNode
                }
                return null
            }
        }]), i
    }(jO);
    wE("");
    wE('.vis-current-time{background-color:#ff7f6e;pointer-events:none;width:2px;z-index:1}.vis-rolling-mode-btn{background:#3876c2;border-radius:50%;color:#fff;cursor:pointer;font-size:28px;font-weight:700;height:40px;opacity:.8;position:absolute;right:20px;text-align:center;top:7px;width:40px}.vis-rolling-mode-btn:before{content:"\\26F6"}.vis-rolling-mode-btn:hover{opacity:1}');
    wE(".vis-panel{box-sizing:border-box;margin:0;padding:0;position:absolute}.vis-panel.vis-bottom,.vis-panel.vis-center,.vis-panel.vis-left,.vis-panel.vis-right,.vis-panel.vis-top{border:1px #bfbfbf}.vis-panel.vis-center,.vis-panel.vis-left,.vis-panel.vis-right{border-bottom-style:solid;border-top-style:solid;overflow:hidden}.vis-left.vis-panel.vis-vertical-scroll,.vis-right.vis-panel.vis-vertical-scroll{height:100%;overflow-x:hidden;overflow-y:scroll}.vis-left.vis-panel.vis-vertical-scroll{direction:rtl}.vis-left.vis-panel.vis-vertical-scroll .vis-content,.vis-right.vis-panel.vis-vertical-scroll{direction:ltr}.vis-right.vis-panel.vis-vertical-scroll .vis-content{direction:rtl}.vis-panel.vis-bottom,.vis-panel.vis-center,.vis-panel.vis-top{border-left-style:solid;border-right-style:solid}.vis-background{overflow:hidden}.vis-panel>.vis-content{position:relative}.vis-panel .vis-shadow{box-shadow:0 0 10px rgba(0,0,0,.8);height:1px;position:absolute;width:100%}.vis-panel .vis-shadow.vis-top{left:0;top:-1px}.vis-panel .vis-shadow.vis-bottom{bottom:-1px;left:0}");
    wE(".vis-graph-group0{fill:#4f81bd;fill-opacity:0;stroke-width:2px;stroke:#4f81bd}.vis-graph-group1{fill:#f79646;fill-opacity:0;stroke-width:2px;stroke:#f79646}.vis-graph-group2{fill:#8c51cf;fill-opacity:0;stroke-width:2px;stroke:#8c51cf}.vis-graph-group3{fill:#75c841;fill-opacity:0;stroke-width:2px;stroke:#75c841}.vis-graph-group4{fill:#ff0100;fill-opacity:0;stroke-width:2px;stroke:#ff0100}.vis-graph-group5{fill:#37d8e6;fill-opacity:0;stroke-width:2px;stroke:#37d8e6}.vis-graph-group6{fill:#042662;fill-opacity:0;stroke-width:2px;stroke:#042662}.vis-graph-group7{fill:#00ff26;fill-opacity:0;stroke-width:2px;stroke:#00ff26}.vis-graph-group8{fill:#f0f;fill-opacity:0;stroke-width:2px;stroke:#f0f}.vis-graph-group9{fill:#8f3938;fill-opacity:0;stroke-width:2px;stroke:#8f3938}.vis-timeline .vis-fill{fill-opacity:.1;stroke:none}.vis-timeline .vis-bar{fill-opacity:.5;stroke-width:1px}.vis-timeline .vis-point{stroke-width:2px;fill-opacity:1}.vis-timeline .vis-legend-background{stroke-width:1px;fill-opacity:.9;fill:#fff;stroke:#c2c2c2}.vis-timeline .vis-outline{stroke-width:1px;fill-opacity:1;fill:#fff;stroke:#e5e5e5}.vis-timeline .vis-icon-fill{fill-opacity:.3;stroke:none}");
    wE(".vis-timeline{border:1px solid #bfbfbf;box-sizing:border-box;margin:0;overflow:hidden;padding:0;position:relative}.vis-loading-screen{height:100%;left:0;position:absolute;top:0;width:100%}");
    wE(".vis [class*=span]{min-height:0;width:auto}");
    var WE = function() {
        function t() { yu(this, t) }
        return xu(t, [{
            key: "_create",
            value: function(t) {
                var e, i, n, o = this;
                this.dom = {}, this.dom.container = t, this.dom.container.style.position = "relative", this.dom.root = document.createElement("div"), this.dom.background = document.createElement("div"), this.dom.backgroundVertical = document.createElement("div"), this.dom.backgroundHorizontal = document.createElement("div"), this.dom.centerContainer = document.createElement("div"), this.dom.leftContainer = document.createElement("div"), this.dom.rightContainer = document.createElement("div"), this.dom.center = document.createElement("div"), this.dom.left = document.createElement("div"), this.dom.right = document.createElement("div"), this.dom.top = document.createElement("div"), this.dom.bottom = document.createElement("div"), this.dom.shadowTop = document.createElement("div"), this.dom.shadowBottom = document.createElement("div"), this.dom.shadowTopLeft = document.createElement("div"), this.dom.shadowBottomLeft = document.createElement("div"), this.dom.shadowTopRight = document.createElement("div"), this.dom.shadowBottomRight = document.createElement("div"), this.dom.rollingModeBtn = document.createElement("div"), this.dom.loadingScreen = document.createElement("div"), this.dom.root.className = "vis-timeline", this.dom.background.className = "vis-panel vis-background", this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical", this.dom.backgroundHorizontal.className = "vis-panel vis-background vis-horizontal", this.dom.centerContainer.className = "vis-panel vis-center", this.dom.leftContainer.className = "vis-panel vis-left", this.dom.rightContainer.className = "vis-panel vis-right", this.dom.top.className = "vis-panel vis-top", this.dom.bottom.className = "vis-panel vis-bottom", this.dom.left.className = "vis-content", this.dom.center.className = "vis-content", this.dom.right.className = "vis-content", this.dom.shadowTop.className = "vis-shadow vis-top", this.dom.shadowBottom.className = "vis-shadow vis-bottom", this.dom.shadowTopLeft.className = "vis-shadow vis-top", this.dom.shadowBottomLeft.className = "vis-shadow vis-bottom", this.dom.shadowTopRight.className = "vis-shadow vis-top", this.dom.shadowBottomRight.className = "vis-shadow vis-bottom", this.dom.rollingModeBtn.className = "vis-rolling-mode-btn", this.dom.loadingScreen.className = "vis-loading-screen", this.dom.root.appendChild(this.dom.background), this.dom.root.appendChild(this.dom.backgroundVertical), this.dom.root.appendChild(this.dom.backgroundHorizontal), this.dom.root.appendChild(this.dom.centerContainer), this.dom.root.appendChild(this.dom.leftContainer), this.dom.root.appendChild(this.dom.rightContainer), this.dom.root.appendChild(this.dom.top), this.dom.root.appendChild(this.dom.bottom), this.dom.root.appendChild(this.dom.rollingModeBtn), this.dom.centerContainer.appendChild(this.dom.center), this.dom.leftContainer.appendChild(this.dom.left), this.dom.rightContainer.appendChild(this.dom.right), this.dom.centerContainer.appendChild(this.dom.shadowTop), this.dom.centerContainer.appendChild(this.dom.shadowBottom), this.dom.leftContainer.appendChild(this.dom.shadowTopLeft), this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft), this.dom.rightContainer.appendChild(this.dom.shadowTopRight), this.dom.rightContainer.appendChild(this.dom.shadowBottomRight), this.props = { root: {}, background: {}, centerContainer: {}, leftContainer: {}, rightContainer: {}, center: {}, left: {}, right: {}, top: {}, bottom: {}, border: {}, scrollTop: 0, scrollTopMin: 0 }, this.on("rangechange", (function() {!0 === o.initialDrawDone && o._redraw() })), this.on("rangechanged", (function() { o.initialRangeChangeDone || (o.initialRangeChangeDone = !0) })), this.on("touch", Hc(e = this._onTouch).call(e, this)), this.on("panmove", Hc(i = this._onDrag).call(i, this));
                var r = this;
                this._origRedraw = Hc(n = this._redraw).call(n, this), this._redraw = SO.throttle(this._origRedraw), this.on("_change", (function(t) { r.itemSet && r.itemSet.initialItemSetDrawn && t && 1 == t.queue ? r._redraw() : r._origRedraw() })), this.hammer = new yE(this.dom.root);
                var s = this.hammer.get("pinch").set({ enable: !0 });
                s && function(t) { t.getTouchAction = function() { return ["pan-y"] } }(s), this.hammer.get("pan").set({ threshold: 5, direction: yE.DIRECTION_ALL }), this.timelineListeners = {};
                var a, l, h = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];

                function u(t) {
                    this.isActive() && this.emit("mousewheel", t);
                    var e = 0,
                        i = 0;
                    if ("detail" in t && (i = -1 * t.detail), "wheelDelta" in t && (i = t.wheelDelta), "wheelDeltaY" in t && (i = t.wheelDeltaY), "wheelDeltaX" in t && (e = -1 * t.wheelDeltaX), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = -1 * i, i = 0), "deltaY" in t && (i = -1 * t.deltaY), "deltaX" in t && (e = t.deltaX), t.deltaMode && (1 === t.deltaMode ? (e *= 40, i *= 40) : (e *= 40, i *= 800)), this.options.preferZoom) { if (!this.options.zoomKey || t[this.options.zoomKey]) return } else if (this.options.zoomKey && t[this.options.zoomKey]) return;
                    if (this.options.verticalScroll || this.options.horizontalScroll)
                        if (this.options.verticalScroll && Math.abs(i) >= Math.abs(e)) {
                            var n = this.props.scrollTop,
                                o = n + i;
                            if (this.isActive()) this._setScrollTop(o) !== n && (this._redraw(), this.emit("scroll", t), t.preventDefault())
                        } else if (this.options.horizontalScroll) {
                        var r = (Math.abs(e) >= Math.abs(i) ? e : i) / 120 * (this.range.end - this.range.start) / 20,
                            s = this.range.start + r,
                            a = this.range.end + r,
                            l = { animation: !1, byUser: !0, event: t };
                        this.range.setRange(s, a, l), t.preventDefault()
                    }
                }
                tp(h).call(h, (function(t) {
                    var e = function(e) { r.isActive() && r.emit(t, e) };
                    r.hammer.on(t, e), r.timelineListeners[t] = e
                })), bE(this.hammer, (function(t) { r.emit("touch", t) })), a = this.hammer, (l = function(t) { r.emit("release", t) }).inputHandler = function(t) { t.isFinal && l(t) }, a.on("hammer.input", l.inputHandler);
                var d = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : this.dom.centerContainer.addEventListener ? "DOMMouseScroll" : "onmousewheel";

                function c(t) {
                    if (r.options.verticalScroll && (t.preventDefault(), r.isActive())) {
                        var e = -t.target.scrollTop;
                        r._setScrollTop(e), r._redraw(), r.emit("scrollSide", t)
                    }
                }
                this.dom.top.addEventListener, this.dom.bottom.addEventListener, this.dom.centerContainer.addEventListener(d, Hc(u).call(u, this), !1), this.dom.top.addEventListener(d, Hc(u).call(u, this), !1), this.dom.bottom.addEventListener(d, Hc(u).call(u, this), !1), this.dom.left.parentNode.addEventListener("scroll", Hc(c).call(c, this)), this.dom.right.parentNode.addEventListener("scroll", Hc(c).call(c, this));
                var p = !1;

                function f(t) { var e; if (t.preventDefault && (r.emit("dragover", r.getEventProperties(t)), t.preventDefault()), Cm(e = t.target.className).call(e, "timeline") > -1 && !p) return t.dataTransfer.dropEffect = "move", p = !0, !1 }

                function m(t) { t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(); try { var e = JSON.parse(t.dataTransfer.getData("text")); if (!e || !e.content) return } catch (t) { return !1 } return p = !1, t.center = { x: t.clientX, y: t.clientY }, "item" !== e.target ? r.itemSet._onAddItem(t) : r.itemSet._onDropObjectOnItem(t), r.emit("drop", r.getEventProperties(t)), !1 }
                if (this.dom.center.addEventListener("dragover", Hc(f).call(f, this), !1), this.dom.center.addEventListener("drop", Hc(m).call(m, this), !1), this.customTimes = [], this.touch = {}, this.redrawCount = 0, this.initialDrawDone = !1, this.initialRangeChangeDone = !1, !t) throw new Error("No container provided");
                t.appendChild(this.dom.root), t.appendChild(this.dom.loadingScreen)
            }
        }, {
            key: "setOptions",
            value: function(t) {
                var e;
                if (t) {
                    if (SO.selectiveExtend(["width", "height", "minHeight", "maxHeight", "autoResize", "start", "end", "clickToUse", "dataAttributes", "hiddenDates", "locale", "locales", "moment", "preferZoom", "rtl", "zoomKey", "horizontalScroll", "verticalScroll", "longSelectPressTime", "snap"], this.options, t), this.dom.rollingModeBtn.style.visibility = "hidden", this.options.rtl && (this.dom.container.style.direction = "rtl", this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical-rtl"), this.options.verticalScroll && (this.options.rtl ? this.dom.rightContainer.className = "vis-panel vis-right vis-vertical-scroll" : this.dom.leftContainer.className = "vis-panel vis-left vis-vertical-scroll"), "object" !== Rd(this.options.orientation) && (this.options.orientation = { item: void 0, axis: void 0 }), "orientation" in t && ("string" == typeof t.orientation ? this.options.orientation = { item: t.orientation, axis: t.orientation } : "object" === Rd(t.orientation) && ("item" in t.orientation && (this.options.orientation.item = t.orientation.item), "axis" in t.orientation && (this.options.orientation.axis = t.orientation.axis))), "both" === this.options.orientation.axis) {
                        if (!this.timeAxis2) {
                            var i = this.timeAxis2 = new xE(this.body);
                            i.setOptions = function(t) {
                                var e = t ? SO.extend({}, t) : {};
                                e.orientation = "top", xE.prototype.setOptions.call(i, e)
                            }, this.components.push(i)
                        }
                    } else if (this.timeAxis2) {
                        var n, o, r = Cm(n = this.components).call(n, this.timeAxis2);
                        if (-1 !== r) Ap(o = this.components).call(o, r, 1);
                        this.timeAxis2.destroy(), this.timeAxis2 = null
                    }
                    "function" == typeof t.drawPoints && (t.drawPoints = { onRender: t.drawPoints }), "hiddenDates" in this.options && ZO(this.options.moment, this.body, this.options.hiddenDates), "clickToUse" in t && (t.clickToUse ? this.activator || (this.activator = new CE(this.dom.root)) : this.activator && (this.activator.destroy(), delete this.activator)), this._initAutoResize()
                }
                if (tp(e = this.components).call(e, (function(e) { return e.setOptions(t) })), "configure" in t) {
                    var s;
                    this.configurator || (this.configurator = this._createConfigurator()), this.configurator.setOptions(t.configure);
                    var a = SO.deepExtend({}, this.options);
                    tp(s = this.components).call(s, (function(t) { SO.deepExtend(a, t.options) })), this.configurator.setModuleOptions({ global: a })
                }
                this._redraw()
            }
        }, { key: "isActive", value: function() { return !this.activator || this.activator.active } }, {
            key: "destroy",
            value: function() {
                var t;
                for (var e in this.setItems(null), this.setGroups(null), this.off(), this._stopAutoResize(), this.dom.root.parentNode && this.dom.root.parentNode.removeChild(this.dom.root), this.dom = null, this.activator && (this.activator.destroy(), delete this.activator), this.timelineListeners) this.timelineListeners.hasOwnProperty(e) && delete this.timelineListeners[e];
                this.timelineListeners = null, this.hammer && this.hammer.destroy(), this.hammer = null, tp(t = this.components).call(t, (function(t) { return t.destroy() })), this.body = null
            }
        }, {
            key: "setCustomTime",
            value: function(t, e) {
                var i, n = Af(i = this.customTimes).call(i, (function(t) { return e === t.options.id }));
                if (0 === n.length) throw new Error("No custom time bar found with id ".concat(hv(e)));
                n.length > 0 && n[0].setCustomTime(t)
            }
        }, { key: "getCustomTime", value: function(t) { var e, i = Af(e = this.customTimes).call(e, (function(e) { return e.options.id === t })); if (0 === i.length) throw new Error("No custom time bar found with id ".concat(hv(t))); return i[0].getCustomTime() } }, {
            key: "setCustomTimeMarker",
            value: function(t, e, i) {
                var n, o = Af(n = this.customTimes).call(n, (function(t) { return t.options.id === e }));
                if (0 === o.length) throw new Error("No custom time bar found with id ".concat(hv(e)));
                o.length > 0 && o[0].setCustomMarker(t, i)
            }
        }, { key: "setCustomTimeTitle", value: function(t, e) { var i, n = Af(i = this.customTimes).call(i, (function(t) { return t.options.id === e })); if (0 === n.length) throw new Error("No custom time bar found with id ".concat(hv(e))); if (n.length > 0) return n[0].setCustomTitle(t) } }, { key: "getEventProperties", value: function(t) { return { event: t } } }, { key: "addCustomTime", value: function(t, e) { var i, n = void 0 !== t ? SO.convert(t, "Date") : new Date; if (nT(i = this.customTimes).call(i, (function(t) { return t.options.id === e }))) throw new Error("A custom time with id ".concat(hv(e), " already exists")); var o = new GE(this.body, SO.extend({}, this.options, { time: n, id: e, snap: this.itemSet ? this.itemSet.options.snap : this.options.snap })); return this.customTimes.push(o), this.components.push(o), this._redraw(), e } }, {
            key: "removeCustomTime",
            value: function(t) {
                var e, i = this,
                    n = Af(e = this.customTimes).call(e, (function(e) { return e.options.id === t }));
                if (0 === n.length) throw new Error("No custom time bar found with id ".concat(hv(t)));
                tp(n).call(n, (function(t) {
                    var e, n, o, r;
                    Ap(e = i.customTimes).call(e, Cm(n = i.customTimes).call(n, t), 1), Ap(o = i.components).call(o, Cm(r = i.components).call(r, t), 1), t.destroy()
                }))
            }
        }, { key: "getVisibleItems", value: function() { return this.itemSet && this.itemSet.getVisibleItems() || [] } }, { key: "getItemsAtCurrentTime", value: function(t) { return this.time = t, this.itemSet && this.itemSet.getItemsAtCurrentTime(this.time) || [] } }, { key: "getVisibleGroups", value: function() { return this.itemSet && this.itemSet.getVisibleGroups() || [] } }, {
            key: "fit",
            value: function(t, e) {
                var i = this.getDataRange();
                if (null !== i.min || null !== i.max) {
                    var n = i.max - i.min,
                        o = new Date(i.min.valueOf() - .01 * n),
                        r = new Date(i.max.valueOf() + .01 * n),
                        s = !t || void 0 === t.animation || t.animation;
                    this.range.setRange(o, r, { animation: s }, e)
                }
            }
        }, { key: "getDataRange", value: function() { throw new Error("Cannot invoke abstract method getDataRange") } }, { key: "setWindow", value: function(t, e, i, n) { var o, r; "function" == typeof arguments[2] && (n = arguments[2], i = {}), 1 == arguments.length ? (o = void 0 === (r = arguments[0]).animation || r.animation, this.range.setRange(r.start, r.end, { animation: o })) : 2 == arguments.length && "function" == typeof arguments[1] ? (n = arguments[1], o = void 0 === (r = arguments[0]).animation || r.animation, this.range.setRange(r.start, r.end, { animation: o }, n)) : (o = !i || void 0 === i.animation || i.animation, this.range.setRange(t, e, { animation: o }, n)) } }, {
            key: "moveTo",
            value: function(t, e, i) {
                "function" == typeof arguments[1] && (i = arguments[1], e = {});
                var n = this.range.end - this.range.start,
                    o = SO.convert(t, "Date").valueOf(),
                    r = o - n / 2,
                    s = o + n / 2,
                    a = !e || void 0 === e.animation || e.animation;
                this.range.setRange(r, s, { animation: a }, i)
            }
        }, { key: "getWindow", value: function() { var t = this.range.getRange(); return { start: new Date(t.start), end: new Date(t.end) } } }, {
            key: "zoomIn",
            value: function(t, e, i) {
                if (!(!t || t < 0 || t > 1)) {
                    "function" == typeof arguments[1] && (i = arguments[1], e = {});
                    var n = this.getWindow(),
                        o = n.start.valueOf(),
                        r = n.end.valueOf(),
                        s = r - o,
                        a = s / (1 + t),
                        l = (s - a) / 2,
                        h = o + l,
                        u = r - l;
                    this.setWindow(h, u, e, i)
                }
            }
        }, {
            key: "zoomOut",
            value: function(t, e, i) {
                if (!(!t || t < 0 || t > 1)) {
                    "function" == typeof arguments[1] && (i = arguments[1], e = {});
                    var n = this.getWindow(),
                        o = n.start.valueOf(),
                        r = n.end.valueOf(),
                        s = r - o,
                        a = o - s * t / 2,
                        l = r + s * t / 2;
                    this.setWindow(a, l, e, i)
                }
            }
        }, { key: "redraw", value: function() { this._redraw() } }, {
            key: "_redraw",
            value: function() {
                var t;
                this.redrawCount++;
                var e = this.dom;
                if (e && e.container && 0 != e.root.offsetWidth) {
                    var i = !1,
                        n = this.options,
                        o = this.props;
                    KO(this.options.moment, this.body, this.options.hiddenDates), "top" == n.orientation ? (SO.addClassName(e.root, "vis-top"), SO.removeClassName(e.root, "vis-bottom")) : (SO.removeClassName(e.root, "vis-top"), SO.addClassName(e.root, "vis-bottom")), n.rtl ? (SO.addClassName(e.root, "vis-rtl"), SO.removeClassName(e.root, "vis-ltr")) : (SO.addClassName(e.root, "vis-ltr"), SO.removeClassName(e.root, "vis-rtl")), e.root.style.maxHeight = SO.option.asSize(n.maxHeight, ""), e.root.style.minHeight = SO.option.asSize(n.minHeight, ""), e.root.style.width = SO.option.asSize(n.width, "");
                    var r = e.root.offsetWidth;
                    o.border.left = 1, o.border.right = 1, o.border.top = 1, o.border.bottom = 1, o.center.height = e.center.offsetHeight, o.left.height = e.left.offsetHeight, o.right.height = e.right.offsetHeight, o.top.height = e.top.clientHeight || -o.border.top, o.bottom.height = Math.round(e.bottom.getBoundingClientRect().height) || e.bottom.clientHeight || -o.border.bottom;
                    var s = Math.max(o.left.height, o.center.height, o.right.height),
                        a = o.top.height + s + o.bottom.height + o.border.top + o.border.bottom;
                    e.root.style.height = SO.option.asSize(n.height, "".concat(a, "px")), o.root.height = e.root.offsetHeight, o.background.height = o.root.height;
                    var l = o.root.height - o.top.height - o.bottom.height;
                    o.centerContainer.height = l, o.leftContainer.height = l, o.rightContainer.height = o.leftContainer.height, o.root.width = r, o.background.width = o.root.width, this.initialDrawDone || (o.scrollbarWidth = SO.getScrollBarWidth());
                    var h = e.leftContainer.clientWidth,
                        u = e.rightContainer.clientWidth;
                    n.verticalScroll ? n.rtl ? (o.left.width = h || -o.border.left, o.right.width = u + o.scrollbarWidth || -o.border.right) : (o.left.width = h + o.scrollbarWidth || -o.border.left, o.right.width = u || -o.border.right) : (o.left.width = h || -o.border.left, o.right.width = u || -o.border.right), this._setDOM();
                    var d = this._updateScrollTop();
                    "top" != n.orientation.item && (d += Math.max(o.centerContainer.height - o.center.height - o.border.top - o.border.bottom, 0)), e.center.style.transform = "translateY(".concat(d, "px)");
                    var c = 0 == o.scrollTop ? "hidden" : "",
                        p = o.scrollTop == o.scrollTopMin ? "hidden" : "";
                    e.shadowTop.style.visibility = c, e.shadowBottom.style.visibility = p, e.shadowTopLeft.style.visibility = c, e.shadowBottomLeft.style.visibility = p, e.shadowTopRight.style.visibility = c, e.shadowBottomRight.style.visibility = p, n.verticalScroll && (e.rightContainer.className = "vis-panel vis-right vis-vertical-scroll", e.leftContainer.className = "vis-panel vis-left vis-vertical-scroll", e.shadowTopRight.style.visibility = "hidden", e.shadowBottomRight.style.visibility = "hidden", e.shadowTopLeft.style.visibility = "hidden", e.shadowBottomLeft.style.visibility = "hidden", e.left.style.top = "0px", e.right.style.top = "0px"), (!n.verticalScroll || o.center.height < o.centerContainer.height) && (e.left.style.top = "".concat(d, "px"), e.right.style.top = "".concat(d, "px"), e.rightContainer.className = e.rightContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"), " "), e.leftContainer.className = e.leftContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"), " "), o.left.width = h || -o.border.left, o.right.width = u || -o.border.right, this._setDOM());
                    var f = o.center.height > o.centerContainer.height;
                    this.hammer.get("pan").set({ direction: f ? yE.DIRECTION_ALL : yE.DIRECTION_HORIZONTAL }), this.hammer.get("press").set({ time: this.options.longSelectPressTime }), tp(t = this.components).call(t, (function(t) { i = t.redraw() || i }));
                    if (i) {
                        if (this.redrawCount < 5) return void this.body.emitter.emit("_change");
                        console.log("WARNING: infinite loop in redraw?")
                    } else this.redrawCount = 0;
                    this.body.emitter.emit("changed")
                }
            }
        }, {
            key: "_setDOM",
            value: function() {
                var t = this.props,
                    e = this.dom;
                t.leftContainer.width = t.left.width, t.rightContainer.width = t.right.width;
                var i = t.root.width - t.left.width - t.right.width;
                t.center.width = i, t.centerContainer.width = i, t.top.width = i, t.bottom.width = i, e.background.style.height = "".concat(t.background.height, "px"), e.backgroundVertical.style.height = "".concat(t.background.height, "px"), e.backgroundHorizontal.style.height = "".concat(t.centerContainer.height, "px"), e.centerContainer.style.height = "".concat(t.centerContainer.height, "px"), e.leftContainer.style.height = "".concat(t.leftContainer.height, "px"), e.rightContainer.style.height = "".concat(t.rightContainer.height, "px"), e.background.style.width = "".concat(t.background.width, "px"), e.backgroundVertical.style.width = "".concat(t.centerContainer.width, "px"), e.backgroundHorizontal.style.width = "".concat(t.background.width, "px"), e.centerContainer.style.width = "".concat(t.center.width, "px"), e.top.style.width = "".concat(t.top.width, "px"), e.bottom.style.width = "".concat(t.bottom.width, "px"), e.background.style.left = "0", e.background.style.top = "0", e.backgroundVertical.style.left = "".concat(t.left.width + t.border.left, "px"), e.backgroundVertical.style.top = "0", e.backgroundHorizontal.style.left = "0", e.backgroundHorizontal.style.top = "".concat(t.top.height, "px"), e.centerContainer.style.left = "".concat(t.left.width, "px"), e.centerContainer.style.top = "".concat(t.top.height, "px"), e.leftContainer.style.left = "0", e.leftContainer.style.top = "".concat(t.top.height, "px"), e.rightContainer.style.left = "".concat(t.left.width + t.center.width, "px"), e.rightContainer.style.top = "".concat(t.top.height, "px"), e.top.style.left = "".concat(t.left.width, "px"), e.top.style.top = "0", e.bottom.style.left = "".concat(t.left.width, "px"), e.bottom.style.top = "".concat(t.top.height + t.centerContainer.height, "px"), e.center.style.left = "0", e.left.style.left = "0", e.right.style.left = "0"
            }
        }, {
            key: "setCurrentTime",
            value: function(t) {
                if (!this.currentTime) throw new Error("Option showCurrentTime must be true");
                this.currentTime.setCurrentTime(t)
            }
        }, { key: "getCurrentTime", value: function() { if (!this.currentTime) throw new Error("Option showCurrentTime must be true"); return this.currentTime.getCurrentTime() } }, { key: "_toTime", value: function(t) { return eE(this, t, this.props.center.width) } }, { key: "_toGlobalTime", value: function(t) { return eE(this, t, this.props.root.width) } }, { key: "_toScreen", value: function(t) { return tE(this, t, this.props.center.width) } }, { key: "_toGlobalScreen", value: function(t) { return tE(this, t, this.props.root.width) } }, { key: "_initAutoResize", value: function() { 1 == this.options.autoResize ? this._startAutoResize() : this._stopAutoResize() } }, {
            key: "_startAutoResize",
            value: function() {
                var t = this;
                this._stopAutoResize(), this._onResize = function() {
                    if (1 == t.options.autoResize) {
                        if (t.dom.root) {
                            var e = t.dom.root.offsetHeight,
                                i = t.dom.root.offsetWidth;
                            i == t.props.lastWidth && e == t.props.lastHeight || (t.props.lastWidth = i, t.props.lastHeight = e, t.props.scrollbarWidth = SO.getScrollBarWidth(), t.body.emitter.emit("_change"))
                        }
                    } else t._stopAutoResize()
                }, SO.addEventListener(window, "resize", this._onResize), t.dom.root && (t.props.lastWidth = t.dom.root.offsetWidth, t.props.lastHeight = t.dom.root.offsetHeight), this.watchTimer = vE(this._onResize, 1e3)
            }
        }, { key: "_stopAutoResize", value: function() { this.watchTimer && (clearInterval(this.watchTimer), this.watchTimer = void 0), this._onResize && (SO.removeEventListener(window, "resize", this._onResize), this._onResize = null) } }, { key: "_onTouch", value: function(t) { this.touch.allowDragging = !0, this.touch.initialScrollTop = this.props.scrollTop } }, { key: "_onPinch", value: function(t) { this.touch.allowDragging = !1 } }, {
            key: "_onDrag",
            value: function(t) {
                if (t && this.touch.allowDragging) {
                    var e = t.deltaY,
                        i = this._getScrollTop(),
                        n = this._setScrollTop(this.touch.initialScrollTop + e);
                    this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -this.props.scrollTop, this.dom.right.parentNode.scrollTop = -this.props.scrollTop), n != i && this.emit("verticalDrag")
                }
            }
        }, { key: "_setScrollTop", value: function(t) { return this.props.scrollTop = t, this._updateScrollTop(), this.props.scrollTop } }, { key: "_updateScrollTop", value: function() { var t = Math.min(this.props.centerContainer.height - this.props.border.top - this.props.border.bottom - this.props.center.height, 0); return t != this.props.scrollTopMin && ("top" != this.options.orientation.item && (this.props.scrollTop += t - this.props.scrollTopMin), this.props.scrollTopMin = t), this.props.scrollTop > 0 && (this.props.scrollTop = 0), this.props.scrollTop < t && (this.props.scrollTop = t), this.options.verticalScroll && (this.dom.left.parentNode.scrollTop = -this.props.scrollTop, this.dom.right.parentNode.scrollTop = -this.props.scrollTop), this.props.scrollTop } }, { key: "_getScrollTop", value: function() { return this.props.scrollTop } }, { key: "_createConfigurator", value: function() { throw new Error("Cannot invoke abstract method _createConfigurator") } }]), t
    }();

    function VE(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    Nv(WE.prototype);
    var UE = function(t) {
            p_(i, t);
            var e = VE(i);

            function i(t, n) {
                var o, r;
                yu(this, i), (r = e.call(this)).body = t, r.defaultOptions = { rtl: !1, showCurrentTime: !0, alignCurrentTime: void 0, moment: cM, locales: zE, locale: "en" }, r.options = SO.extend({}, r.defaultOptions), r.setOptions(n), r.options.locales = SO.extend({}, zE, r.options.locales);
                var s = r.defaultOptions.locales[r.defaultOptions.locale];
                return tp(o = pc(r.options.locales)).call(o, (function(t) { r.options.locales[t] = SO.extend({}, s, r.options.locales[t]) })), r.offset = 0, r._create(), r
            }
            return xu(i, [{
                key: "_create",
                value: function() {
                    var t = document.createElement("div");
                    t.className = "vis-current-time", t.style.position = "absolute", t.style.top = "0px", t.style.height = "100%", this.bar = t
                }
            }, { key: "destroy", value: function() { this.options.showCurrentTime = !1, this.redraw(), this.body = null } }, { key: "setOptions", value: function(t) { t && SO.selectiveExtend(["rtl", "showCurrentTime", "alignCurrentTime", "moment", "locale", "locales"], this.options, t) } }, {
                key: "redraw",
                value: function() {
                    if (this.options.showCurrentTime) {
                        var t, e, i = this.body.dom.backgroundVertical;
                        this.bar.parentNode != i && (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), i.appendChild(this.bar), this.start());
                        var n = this.options.moment(_c() + this.offset);
                        this.options.alignCurrentTime && (n = n.startOf(this.options.alignCurrentTime));
                        var o = this.body.util.toScreen(n),
                            r = this.options.locales[this.options.locale];
                        r || (this.warned || (console.warn("WARNING: options.locales['".concat(this.options.locale, "'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization")), this.warned = !0), r = this.options.locales.en);
                        var s = Xd(t = Xd(e = "".concat(r.current, " ")).call(e, r.time, ": ")).call(t, n.format("dddd, MMMM Do YYYY, H:mm:ss"));
                        s = s.charAt(0).toUpperCase() + s.substring(1), this.options.rtl ? this.bar.style.transform = "translateX(".concat(-1 * o, "px)") : this.bar.style.transform = "translateX(".concat(o, "px)"), this.bar.title = s
                    } else this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), this.stop();
                    return !1
                }
            }, {
                key: "start",
                value: function() {
                    var t = this;
                    ! function e() {
                        t.stop();
                        var i = 1 / t.body.range.conversion(t.body.domProps.center.width).scale / 10;
                        i < 30 && (i = 30), i > 1e3 && (i = 1e3), t.redraw(), t.body.emitter.emit("currentTimeTick"), t.currentTimeTimer = xv(e, i)
                    }()
                }
            }, { key: "stop", value: function() { void 0 !== this.currentTimeTimer && (clearTimeout(this.currentTimeTimer), delete this.currentTimeTimer) } }, {
                key: "setCurrentTime",
                value: function(t) {
                    var e = SO.convert(t, "Date").valueOf(),
                        i = _c();
                    this.offset = e - i, this.redraw()
                }
            }, { key: "getCurrentTime", value: function() { return new Date(_c() + this.offset) } }]), i
        }(jO),
        XE = { exports: {} },
        qE = Nn,
        $E = ll.find,
        ZE = "find",
        KE = !0;
    ZE in [] && Array(1).find((function() { KE = !1 })), qE({ target: "Array", proto: !0, forced: KE }, { find: function(t) { return $E(this, t, arguments.length > 1 ? arguments[1] : void 0) } });
    var JE = bd("Array").find,
        QE = be,
        tP = JE,
        eP = Array.prototype,
        iP = function(t) { var e = t.find; return t === eP || QE(eP, t) && e === eP.find ? tP : e };
    ! function(t) { t.exports = iP }(XE);
    var nP = n(XE.exports),
        oP = { exports: {} },
        rP = Nn,
        sP = ll.findIndex,
        aP = "findIndex",
        lP = !0;
    aP in [] && Array(1).findIndex((function() { lP = !1 })), rP({ target: "Array", proto: !0, forced: lP }, { findIndex: function(t) { return sP(this, t, arguments.length > 1 ? arguments[1] : void 0) } });
    var hP = bd("Array").findIndex,
        uP = be,
        dP = hP,
        cP = Array.prototype,
        pP = function(t) { var e = t.findIndex; return t === cP || uP(cP, t) && e === cP.findIndex ? dP : e };
    ! function(t) { t.exports = pP }(oP);
    var fP = n(oP.exports);

    function mP(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return vP(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vP(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function vP(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }
    var gP = .001;

    function yP(t) { $C(t).call(t, (function(t, e) { return t.data.start - e.data.start })) }

    function bP(t) { $C(t).call(t, (function(t, e) { return ("end" in t.data ? t.data.end : t.data.start) - ("end" in e.data ? e.data.end : e.data.start) })) }

    function _P(t, e, i, n) { return null === SP(t, e.item, !1, (function(t) { return t.stack && (i || null === t.top) }), (function(t) { return t.stack }), (function(t) { return e.axis }), n) }

    function wP(t, e, i) {
        var n = SP(t, e.item, !1, (function(t) { return t.stack }), (function(t) { return !0 }), (function(t) { return t.baseTop }));
        i.height = n - i.top + .5 * e.item.vertical
    }

    function kP(t, e, i, n) {
        for (var o = 0; o < t.length; o++)
            if (null == t[o].data.subgroup) t[o].top = e.item.vertical;
            else if (void 0 !== t[o].data.subgroup && n) {
            var r = 0;
            for (var s in i) i.hasOwnProperty(s) && 1 == i[s].visible && i[s].index < i[t[o].data.subgroup].index && (r += i[s].height, i[t[o].data.subgroup].top = r);
            t[o].top = r + .5 * e.item.vertical
        }
        n || xP(t, e, i)
    }

    function xP(t, e, i) {
        var n;
        SP($C(n = Gf(i)).call(n, (function(t, e) { return t.index > e.index ? 1 : t.index < e.index ? -1 : 0 })), { vertical: 0 }, !0, (function(t) { return !0 }), (function(t) { return !0 }), (function(t) { return 0 }));
        for (var o = 0; o < t.length; o++) void 0 !== t[o].data.subgroup && (t[o].top = i[t[o].data.subgroup].top + .5 * e.item.vertical)
    }

    function DP(t, e, i) {
        var n = !1,
            o = [];
        for (var r in i) i[r].hasOwnProperty("index") ? o[i[r].index] = r : o.push(r);
        for (var s = 0; s < o.length; s++)
            if (r = o[s], i.hasOwnProperty(r)) {
                for (var a in n = n || i[r].stack, i[r].top = 0, i) i[a].visible && i[r].index > i[a].index && (i[r].top += i[a].height);
                for (var l = t[r], h = 0; h < l.length; h++) void 0 !== l[h].data.subgroup && (l[h].top = i[l[h].data.subgroup].top + .5 * e.item.vertical, i[r].stack && (l[h].baseTop = l[h].top));
                n && i[r].stack && wP(t[r], e, i[r])
            }
    }

    function SP(t, e, n, o, r, s, a) {
        var l = function(t) { return t.start },
            h = function(t) { return t.end };
        if (!n) {
            var u = !(!t[0] || !t[0].options.rtl);
            l = u ? function(t) { return t.right } : function(t) { return t.left }, h = function(t) { return l(t) + t.width + e.horizontal }
        }
        var d, c = [],
            p = [],
            f = null,
            m = 0,
            v = mP(t);
        try {
            for (v.s(); !(d = v.n()).done;) {
                var g = d.value;
                o(g) ? c.push(g) : r(g) && function() {
                    var t = l(g);
                    null !== f && t < f - gP && (m = 0), f = t, m = CP(p, (function(e) { return l(e) - gP > t }), m), Ap(p).call(p, m, 0, g), m++
                }()
            }
        } catch (t) { v.e(t) } finally { v.f() }
        f = null;
        var y = null;
        m = 0;
        for (var b = 0, _ = 0, w = 0, k = function() {
                var t, n, o = c.shift();
                o.top = s(o);
                var u = l(o),
                    d = h(o);
                null !== f && u < f - gP && (b = 0, _ = 0, m = 0, y = null), f = u, b = CP(p, (function(t) { return u < h(t) - gP }), b), (null === y || y < d - gP) && (_ = CP(p, (function(t) { return d < l(t) - gP }), Math.max(b, _))), null !== y && y - gP > d && (_ = function(t, e, n, o) {
                    n || (n = 0);
                    o || (o = t.length);
                    for (i = o - 1; i >= n; i--)
                        if (e(t[i])) return i;
                    return n - 1
                }(p, (function(t) { return d + gP >= l(t) }), b, horizontalOVerlapEndIndex) + 1);
                for (var v, g, k, x = $C(t = Af(n = $d(p).call(p, b, _)).call(n, (function(t) { return u < h(t) - gP && d - gP > l(t) }))).call(t, (function(t, e) { return t.top - e.top })), D = 0; D < x.length; D++) {
                    var S = x[D];
                    g = S, k = e, (v = o).top - k.vertical + gP < g.top + g.height && v.top + v.height + k.vertical - gP > g.top && (o.top = S.top + S.height + e.vertical)
                }
                r(o) && (m = CP(p, (function(t) { return l(t) - gP > u }), m), Ap(p).call(p, m, 0, o), m++);
                var C = o.top + o.height;
                if (C > w && (w = C), a && a()) return { v: null }
            }; c.length > 0;) { var x = k(); if ("object" === Rd(x)) return x.v }
        return w
    }

    function CP(t, e, i) {
        var n;
        i || (i = 0);
        var o = fP(n = $d(t).call(t, i)).call(n, e);
        return -1 === o ? t.length : o + i
    }
    var TP = Object.freeze({ __proto__: null, orderByStart: yP, orderByEnd: bP, stack: _P, substack: wP, nostack: kP, stackSubgroups: xP, stackSubgroupsWithInnerStack: DP }),
        MP = "__background__",
        OP = function() {
            function t(e, i, n) {
                var o = this;
                if (yu(this, t), this.groupId = e, this.subgroups = {}, this.subgroupStack = {}, this.subgroupStackAll = !1, this.subgroupVisibility = {}, this.doInnerStack = !1, this.shouldBailStackItems = !1, this.subgroupIndex = 0, this.subgroupOrderer = i && i.subgroupOrder, this.itemSet = n, this.isVisible = null, this.stackDirty = !0, this._disposeCallbacks = [], i && i.nestedGroups && (this.nestedGroups = i.nestedGroups, 0 == i.showNested ? this.showNested = !1 : this.showNested = !0), i && i.subgroupStack)
                    if ("boolean" == typeof i.subgroupStack) this.doInnerStack = i.subgroupStack, this.subgroupStackAll = i.subgroupStack;
                    else
                        for (var r in i.subgroupStack) this.subgroupStack[r] = i.subgroupStack[r], this.doInnerStack = this.doInnerStack || i.subgroupStack[r];
                i && i.heightMode ? this.heightMode = i.heightMode : this.heightMode = n.options.groupHeightMode, this.nestedInGroup = null, this.dom = {}, this.props = { label: { width: 0, height: 0 } }, this.className = null, this.items = {}, this.visibleItems = [], this.itemsInRange = [], this.orderedItems = { byStart: [], byEnd: [] }, this.checkRangedItems = !1;
                var s = function() { o.checkRangedItems = !0 };
                this.itemSet.body.emitter.on("checkRangedItems", s), this._disposeCallbacks.push((function() { o.itemSet.body.emitter.off("checkRangedItems", s) })), this._create(), this.setData(i)
            }
            return xu(t, [{
                key: "_create",
                value: function() {
                    var t = document.createElement("div");
                    this.itemSet.options.groupEditable.order ? t.className = "vis-label draggable" : t.className = "vis-label", this.dom.label = t;
                    var e = document.createElement("div");
                    e.className = "vis-inner", t.appendChild(e), this.dom.inner = e;
                    var i = document.createElement("div");
                    i.className = "vis-group", i["vis-group"] = this, this.dom.foreground = i, this.dom.background = document.createElement("div"), this.dom.background.className = "vis-group", this.dom.axis = document.createElement("div"), this.dom.axis.className = "vis-group", this.dom.marker = document.createElement("div"), this.dom.marker.style.visibility = "hidden", this.dom.marker.style.position = "absolute", this.dom.marker.innerHTML = "", this.dom.background.appendChild(this.dom.marker)
                }
            }, {
                key: "setData",
                value: function(t) {
                    if (!this.itemSet.groupTouchParams.isDragging) {
                        var e, i, n;
                        if (t && t.subgroupVisibility)
                            for (var o in t.subgroupVisibility) this.subgroupVisibility[o] = t.subgroupVisibility[o];
                        if (this.itemSet.options && this.itemSet.options.groupTemplate) e = (i = Hc(n = this.itemSet.options.groupTemplate).call(n, this))(t, this.dom.inner);
                        else e = t && t.content;
                        if (e instanceof Element) {
                            for (; this.dom.inner.firstChild;) this.dom.inner.removeChild(this.dom.inner.firstChild);
                            this.dom.inner.appendChild(e)
                        } else e instanceof Object && e.isReactComponent || (e instanceof Object ? i(t, this.dom.inner) : this.dom.inner.innerHTML = null != e ? SO.xss(e) : SO.xss(this.groupId || ""));
                        this.dom.label.title = t && t.title || "", this.dom.inner.firstChild ? SO.removeClassName(this.dom.inner, "vis-hidden") : SO.addClassName(this.dom.inner, "vis-hidden"), t && t.nestedGroups ? (this.nestedGroups && this.nestedGroups == t.nestedGroups || (this.nestedGroups = t.nestedGroups), void 0 === t.showNested && void 0 !== this.showNested || (0 == t.showNested ? this.showNested = !1 : this.showNested = !0), SO.addClassName(this.dom.label, "vis-nesting-group"), this.showNested ? (SO.removeClassName(this.dom.label, "collapsed"), SO.addClassName(this.dom.label, "expanded")) : (SO.removeClassName(this.dom.label, "expanded"), SO.addClassName(this.dom.label, "collapsed"))) : this.nestedGroups && (this.nestedGroups = null, SO.removeClassName(this.dom.label, "collapsed"), SO.removeClassName(this.dom.label, "expanded"), SO.removeClassName(this.dom.label, "vis-nesting-group")), t && (t.treeLevel || t.nestedInGroup) ? (SO.addClassName(this.dom.label, "vis-nested-group"), t.treeLevel ? SO.addClassName(this.dom.label, "vis-group-level-" + t.treeLevel) : SO.addClassName(this.dom.label, "vis-group-level-unknown-but-gte1")) : SO.addClassName(this.dom.label, "vis-group-level-0");
                        var r = t && t.className || null;
                        r != this.className && (this.className && (SO.removeClassName(this.dom.label, this.className), SO.removeClassName(this.dom.foreground, this.className), SO.removeClassName(this.dom.background, this.className), SO.removeClassName(this.dom.axis, this.className)), SO.addClassName(this.dom.label, r), SO.addClassName(this.dom.foreground, r), SO.addClassName(this.dom.background, r), SO.addClassName(this.dom.axis, r), this.className = r), this.style && (SO.removeCssText(this.dom.label, this.style), this.style = null), t && t.style && (SO.addCssText(this.dom.label, t.style), this.style = t.style)
                    }
                }
            }, { key: "getLabelWidth", value: function() { return this.props.label.width } }, {
                key: "_didMarkerHeightChange",
                value: function() {
                    var t = this.dom.marker.clientHeight;
                    if (t != this.lastMarkerHeight) {
                        this.lastMarkerHeight = t;
                        var e = {},
                            i = 0;
                        if (tp(SO).call(SO, this.items, (function(t, n) { if (t.dirty = !0, t.displayed) { e[n] = t.redraw(!0), i = e[n].length } })), i > 0)
                            for (var n = function(t) { tp(SO).call(SO, e, (function(e) { e[t]() })) }, o = 0; o < i; o++) n(o);
                        return !0
                    }
                    return !1
                }
            }, {
                key: "_calculateGroupSizeAndPosition",
                value: function() {
                    var t = this.dom.foreground,
                        e = t.offsetTop,
                        i = t.offsetLeft,
                        n = t.offsetWidth;
                    this.top = e, this.right = i, this.width = n
                }
            }, {
                key: "_shouldBailItemsRedraw",
                value: function() {
                    var t = this,
                        e = this.itemSet.options.onTimeout,
                        i = { relativeBailingTime: this.itemSet.itemsSettingTime, bailTimeMs: e && e.timeoutMs, userBailFunction: e && e.callback, shouldBailStackItems: this.shouldBailStackItems },
                        n = null;
                    if (!this.itemSet.initialDrawDone) {
                        if (i.shouldBailStackItems) return !0;
                        Math.abs(_c() - new Date(i.relativeBailingTime)) > i.bailTimeMs && (i.userBailFunction && null == this.itemSet.userContinueNotBail ? i.userBailFunction((function(e) { t.itemSet.userContinueNotBail = e, n = !e })) : n = 0 == t.itemSet.userContinueNotBail)
                    }
                    return n
                }
            }, {
                key: "_redrawItems",
                value: function(t, e, i, n) {
                    var o = this;
                    if (t || this.stackDirty || this.isVisible && !e) {
                        var r, s, a, l, h, u, d = { byEnd: Af(r = this.orderedItems.byEnd).call(r, (function(t) { return !t.isCluster })), byStart: Af(s = this.orderedItems.byStart).call(s, (function(t) { return !t.isCluster })) },
                            c = { byEnd: jd(new sC(Af(a = lc(l = this.orderedItems.byEnd).call(l, (function(t) { return t.cluster }))).call(a, (function(t) { return !!t })))), byStart: jd(new sC(Af(h = lc(u = this.orderedItems.byStart).call(u, (function(t) { return t.cluster }))).call(h, (function(t) { return !!t })))) },
                            p = function() {
                                var t, e, i, r = o._updateItemsInRange(d, Af(t = o.visibleItems).call(t, (function(t) { return !t.isCluster })), n),
                                    s = o._updateClustersInRange(c, Af(e = o.visibleItems).call(e, (function(t) { return t.isCluster })), n);
                                return Xd(i = []).call(i, jd(r), jd(s))
                            },
                            f = function(t) {
                                var e = {},
                                    i = function(i) {
                                        var n, r = Af(n = o.visibleItems).call(n, (function(t) { return t.data.subgroup === i }));
                                        e[i] = t ? $C(r).call(r, (function(e, i) { return t(e.data, i.data) })) : r
                                    };
                                for (var n in o.subgroups) i(n);
                                return e
                            };
                        if ("function" == typeof this.itemSet.options.order) {
                            var m = this;
                            if (this.doInnerStack && this.itemSet.options.stackSubgroups) { DP(f(this.itemSet.options.order), i, this.subgroups), this.visibleItems = p(), this._updateSubGroupHeights(i) } else {
                                var v, g, y, b;
                                this.visibleItems = p(), this._updateSubGroupHeights(i);
                                var _ = $C(v = Af(g = $d(y = this.visibleItems).call(y)).call(g, (function(t) { return t.isCluster || !t.isCluster && !t.cluster }))).call(v, (function(t, e) { return m.itemSet.options.order(t.data, e.data) }));
                                this.shouldBailStackItems = _P(_, i, !0, Hc(b = this._shouldBailItemsRedraw).call(b, this))
                            }
                        } else {
                            var w;
                            if (this.visibleItems = p(), this._updateSubGroupHeights(i), this.itemSet.options.stack)
                                if (this.doInnerStack && this.itemSet.options.stackSubgroups) DP(f(), i, this.subgroups);
                                else this.shouldBailStackItems = _P(this.visibleItems, i, !0, Hc(w = this._shouldBailItemsRedraw).call(w, this));
                            else kP(this.visibleItems, i, this.subgroups, this.itemSet.options.stackSubgroups)
                        }
                        for (var k = 0; k < this.visibleItems.length; k++) this.visibleItems[k].repositionX(), void 0 !== this.subgroupVisibility[this.visibleItems[k].data.subgroup] && (this.subgroupVisibility[this.visibleItems[k].data.subgroup] || this.visibleItems[k].hide());
                        this.itemSet.options.cluster && tp(SO).call(SO, this.items, (function(t) { t.cluster && t.displayed && t.hide() })), this.shouldBailStackItems && this.itemSet.body.emitter.emit("destroyTimeline"), this.stackDirty = !1
                    }
                }
            }, {
                key: "_didResize",
                value: function(t, e) {
                    t = SO.updateProperty(this, "height", e) || t;
                    var i = this.dom.inner.clientWidth,
                        n = this.dom.inner.clientHeight;
                    return t = SO.updateProperty(this.props.label, "width", i) || t, t = SO.updateProperty(this.props.label, "height", n) || t
                }
            }, { key: "_applyGroupHeight", value: function(t) { this.dom.background.style.height = "".concat(t, "px"), this.dom.foreground.style.height = "".concat(t, "px"), this.dom.label.style.height = "".concat(t, "px") } }, {
                key: "_updateItemsVerticalPosition",
                value: function(t) {
                    for (var e = 0, i = this.visibleItems.length; e < i; e++) {
                        var n = this.visibleItems[e];
                        n.repositionY(t), this.isVisible || this.groupId == MP || n.displayed && n.hide()
                    }
                }
            }, {
                key: "redraw",
                value: function(t, e, i, n) {
                    var o, r, s, a, l, h, u, d = this,
                        c = !1,
                        p = this.isVisible,
                        f = [function() { i = d._didMarkerHeightChange.call(d) || i }, Hc(o = this._updateSubGroupHeights).call(o, this, e), Hc(r = this._calculateGroupSizeAndPosition).call(r, this), function() {
                            var i;
                            d.isVisible = Hc(i = d._isGroupVisible).call(i, d)(t, e)
                        }, function() {
                            var n;
                            Hc(n = d._redrawItems).call(n, d)(i, p, e, t)
                        }, Hc(s = this._updateSubgroupsSizes).call(s, this), function() {
                            var t;
                            h = Hc(t = d._calculateHeight).call(t, d)(e)
                        }, Hc(a = this._calculateGroupSizeAndPosition).call(a, this), function() {
                            var t;
                            c = Hc(t = d._didResize).call(t, d)(c, h)
                        }, function() {
                            var t;
                            Hc(t = d._applyGroupHeight).call(t, d)(h)
                        }, function() {
                            var t;
                            Hc(t = d._updateItemsVerticalPosition).call(t, d)(e)
                        }, Hc(l = function() { return !d.isVisible && d.height && (c = !1), c }).call(l, this)];
                    return n ? f : (tp(f).call(f, (function(t) { u = t() })), u)
                }
            }, {
                key: "_updateSubGroupHeights",
                value: function(t) {
                    var e = this;
                    if (pc(this.subgroups).length > 0) {
                        var i = this;
                        this._resetSubgroups(), tp(SO).call(SO, this.visibleItems, (function(n) { void 0 !== n.data.subgroup && (i.subgroups[n.data.subgroup].height = Math.max(i.subgroups[n.data.subgroup].height, n.height + t.item.vertical), i.subgroups[n.data.subgroup].visible = void 0 === e.subgroupVisibility[n.data.subgroup] || Boolean(e.subgroupVisibility[n.data.subgroup])) }))
                    }
                }
            }, { key: "_isGroupVisible", value: function(t, e) { return this.top <= t.body.domProps.centerContainer.height - t.body.domProps.scrollTop + e.axis && this.top + this.height + e.axis >= -t.body.domProps.scrollTop } }, {
                key: "_calculateHeight",
                value: function(t) {
                    var e, i;
                    if ((i = "fixed" === this.heightMode ? SO.toArray(this.items) : this.visibleItems).length > 0) {
                        var n = i[0].top,
                            o = i[0].top + i[0].height;
                        if (tp(SO).call(SO, i, (function(t) { n = Math.min(n, t.top), o = Math.max(o, t.top + t.height) })), n > t.axis) {
                            var r = n - t.axis;
                            o -= r, tp(SO).call(SO, i, (function(t) { t.top -= r }))
                        }
                        e = Math.ceil(o + t.item.vertical / 2), "fitItems" !== this.heightMode && (e = Math.max(e, this.props.label.height))
                    } else e = this.props.label.height;
                    return e
                }
            }, { key: "show", value: function() { this.dom.label.parentNode || this.itemSet.dom.labelSet.appendChild(this.dom.label), this.dom.foreground.parentNode || this.itemSet.dom.foreground.appendChild(this.dom.foreground), this.dom.background.parentNode || this.itemSet.dom.background.appendChild(this.dom.background), this.dom.axis.parentNode || this.itemSet.dom.axis.appendChild(this.dom.axis) } }, {
                key: "hide",
                value: function() {
                    var t = this.dom.label;
                    t.parentNode && t.parentNode.removeChild(t);
                    var e = this.dom.foreground;
                    e.parentNode && e.parentNode.removeChild(e);
                    var i = this.dom.background;
                    i.parentNode && i.parentNode.removeChild(i);
                    var n = this.dom.axis;
                    n.parentNode && n.parentNode.removeChild(n)
                }
            }, {
                key: "add",
                value: function(t) {
                    var e;
                    if (this.items[t.id] = t, t.setParent(this), this.stackDirty = !0, void 0 !== t.data.subgroup && (this._addToSubgroup(t), this.orderSubgroups()), !yf(e = this.visibleItems).call(e, t)) {
                        var i = this.itemSet.body.range;
                        this._checkIfVisible(t, this.visibleItems, i)
                    }
                }
            }, {
                key: "_addToSubgroup",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.data.subgroup;
                    null != e && void 0 === this.subgroups[e] && (this.subgroups[e] = { height: 0, top: 0, start: t.data.start, end: t.data.end || t.data.start, visible: !1, index: this.subgroupIndex, items: [], stack: this.subgroupStackAll || this.subgroupStack[e] || !1 }, this.subgroupIndex++), new Date(t.data.start) < new Date(this.subgroups[e].start) && (this.subgroups[e].start = t.data.start);
                    var i = t.data.end || t.data.start;
                    new Date(i) > new Date(this.subgroups[e].end) && (this.subgroups[e].end = i), this.subgroups[e].items.push(t)
                }
            }, {
                key: "_updateSubgroupsSizes",
                value: function() {
                    var t = this;
                    if (t.subgroups) {
                        var e = function(e) {
                            var i, n = t.subgroups[e].items[0].data.end || t.subgroups[e].items[0].data.start,
                                o = t.subgroups[e].items[0].data.start,
                                r = n - 1;
                            tp(i = t.subgroups[e].items).call(i, (function(t) {
                                new Date(t.data.start) < new Date(o) && (o = t.data.start);
                                var e = t.data.end || t.data.start;
                                new Date(e) > new Date(r) && (r = e)
                            })), t.subgroups[e].start = o, t.subgroups[e].end = new Date(r - 1)
                        };
                        for (var i in t.subgroups) e(i)
                    }
                }
            }, {
                key: "orderSubgroups",
                value: function() {
                    if (void 0 !== this.subgroupOrderer) {
                        var t = [];
                        if ("string" == typeof this.subgroupOrderer) {
                            for (var e in this.subgroups) t.push({ subgroup: e, sortField: this.subgroups[e].items[0].data[this.subgroupOrderer] });
                            $C(t).call(t, (function(t, e) { return t.sortField - e.sortField }))
                        } else if ("function" == typeof this.subgroupOrderer) {
                            for (var i in this.subgroups) t.push(this.subgroups[i].items[0].data);
                            $C(t).call(t, this.subgroupOrderer)
                        }
                        if (t.length > 0)
                            for (var n = 0; n < t.length; n++) this.subgroups[t[n].subgroup].index = n
                    }
                }
            }, { key: "_resetSubgroups", value: function() { for (var t in this.subgroups) this.subgroups.hasOwnProperty(t) && (this.subgroups[t].visible = !1, this.subgroups[t].height = 0) } }, {
                key: "remove",
                value: function(t) {
                    var e, i;
                    delete this.items[t.id], t.setParent(null), this.stackDirty = !0;
                    var n = Cm(e = this.visibleItems).call(e, t); - 1 != n && Ap(i = this.visibleItems).call(i, n, 1), void 0 !== t.data.subgroup && (this._removeFromSubgroup(t), this.orderSubgroups())
                }
            }, { key: "_removeFromSubgroup", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.data.subgroup; if (null != e) { var i = this.subgroups[e]; if (i) { var n, o, r = Cm(n = i.items).call(n, t); if (r >= 0) Ap(o = i.items).call(o, r, 1), i.items.length ? this._updateSubgroupsSizes() : delete this.subgroups[e] } } } }, { key: "removeFromDataSet", value: function(t) { this.itemSet.removeItem(t.id) } }, {
                key: "order",
                value: function() {
                    for (var t = SO.toArray(this.items), e = [], i = [], n = 0; n < t.length; n++) void 0 !== t[n].data.end && i.push(t[n]), e.push(t[n]);
                    this.orderedItems = { byStart: e, byEnd: i }, yP(this.orderedItems.byStart), bP(this.orderedItems.byEnd)
                }
            }, {
                key: "_updateItemsInRange",
                value: function(t, e, i) {
                    var n = [],
                        o = {};
                    if (!this.isVisible && this.groupId != MP) {
                        for (var r = 0; r < e.length; r++) {
                            var s = e[r];
                            s.displayed && s.hide()
                        }
                        return n
                    }
                    var a = (i.end - i.start) / 4,
                        l = i.start - a,
                        h = i.end + a;
                    if (e.length > 0)
                        for (var u = 0; u < e.length; u++) this._checkIfVisibleWithReference(e[u], n, o, i);
                    var d = SO.binarySearchCustom(t.byStart, (function(t) { return t < l ? -1 : t <= h ? 0 : 1 }), "data", "start");
                    if (this._traceVisible(d, t.byStart, n, o, (function(t) { return t.data.start < l || t.data.start > h })), 1 == this.checkRangedItems) { this.checkRangedItems = !1; for (var c = 0; c < t.byEnd.length; c++) this._checkIfVisibleWithReference(t.byEnd[c], n, o, i) } else {
                        var p = SO.binarySearchCustom(t.byEnd, (function(t) { var e = t.start; return t.end < l ? -1 : e <= h ? 0 : 1 }), "data");
                        this._traceVisible(p, t.byEnd, n, o, (function(t) { return t.data.end < l || t.data.start > h }))
                    }
                    for (var f = {}, m = 0, v = 0; v < n.length; v++) { var g = n[v]; if (!g.displayed) { f[v] = g.redraw(!0), m = f[v].length } }
                    if (m > 0)
                        for (var y = function(t) { tp(SO).call(SO, f, (function(e) { e[t]() })) }, b = 0; b < m; b++) y(b);
                    for (var _ = 0; _ < n.length; _++) n[_].repositionX();
                    return n
                }
            }, {
                key: "_traceVisible",
                value: function(t, e, i, n, o) {
                    if (-1 != t) {
                        for (var r = t; r >= 0; r--) {
                            var s = e[r];
                            if (o(s)) break;
                            s.isCluster && !s.hasItems() || s.cluster || void 0 === n[s.id] && (n[s.id] = !0, i.push(s))
                        }
                        for (var a = t + 1; a < e.length; a++) {
                            var l = e[a];
                            if (o(l)) break;
                            l.isCluster && !l.hasItems() || l.cluster || void 0 === n[l.id] && (n[l.id] = !0, i.push(l))
                        }
                    }
                }
            }, { key: "_checkIfVisible", value: function(t, e, i) { t.isVisible(i) ? (t.displayed || t.show(), t.repositionX(), e.push(t)) : t.displayed && t.hide() } }, { key: "_checkIfVisibleWithReference", value: function(t, e, i, n) { t.isVisible(n) ? void 0 === i[t.id] && (i[t.id] = !0, e.push(t)) : t.displayed && t.hide() } }, {
                key: "_updateClustersInRange",
                value: function(t, e, i) {
                    var n = [],
                        o = {};
                    if (e.length > 0)
                        for (var r = 0; r < e.length; r++) this._checkIfVisibleWithReference(e[r], n, o, i);
                    for (var s = 0; s < t.byStart.length; s++) this._checkIfVisibleWithReference(t.byStart[s], n, o, i);
                    for (var a = 0; a < t.byEnd.length; a++) this._checkIfVisibleWithReference(t.byEnd[a], n, o, i);
                    for (var l = {}, h = 0, u = 0; u < n.length; u++) { var d = n[u]; if (!d.displayed) { l[u] = d.redraw(!0), h = l[u].length } }
                    if (h > 0)
                        for (var c = 0; c < h; c++) tp(SO).call(SO, l, (function(t) { t[c]() }));
                    for (var p = 0; p < n.length; p++) n[p].repositionX();
                    return n
                }
            }, { key: "changeSubgroup", value: function(t, e, i) { this._removeFromSubgroup(t, e), this._addToSubgroup(t, i), this.orderSubgroups() } }, { key: "dispose", value: function() { var t; for (this.hide(); t = this._disposeCallbacks.pop();) t() } }]), t
        }();

    function EP(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    var PP = function(t) {
        p_(i, t);
        var e = EP(i);

        function i(t, n, o) { var r; return yu(this, i), (r = e.call(this, t, n, o)).width = 0, r.height = 0, r.top = 0, r.left = 0, r }
        return xu(i, [{ key: "redraw", value: function(t, e, i) { this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, t), this.width = this.dom.background.offsetWidth, this.dom.background.style.height = "0"; for (var n = 0, o = this.visibleItems.length; n < o; n++) { this.visibleItems[n].repositionY(e) } return !1 } }, { key: "show", value: function() { this.dom.background.parentNode || this.itemSet.dom.background.appendChild(this.dom.background) } }]), i
    }(OP);

    function AP(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return IP(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return IP(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function IP(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }
    wE('.vis-item{background-color:#d5ddf6;border-color:#97b0f8;border-width:1px;color:#1a1a1a;display:inline-block;position:absolute;z-index:1}.vis-item.vis-selected{background-color:#fff785;border-color:#ffc200;z-index:2}.vis-editable.vis-selected{cursor:move}.vis-item.vis-point.vis-selected{background-color:#fff785}.vis-item.vis-box{border-radius:2px;border-style:solid;text-align:center}.vis-item.vis-point{background:none}.vis-item.vis-dot{border-radius:4px;border-style:solid;border-width:4px;padding:0;position:absolute}.vis-item.vis-range{border-radius:2px;border-style:solid;box-sizing:border-box}.vis-item.vis-background{background-color:rgba(213,221,246,.4);border:none;box-sizing:border-box;margin:0;padding:0}.vis-item .vis-item-overflow{height:100%;margin:0;overflow:hidden;padding:0;position:relative;width:100%}.vis-item-visible-frame{white-space:nowrap}.vis-item.vis-range .vis-item-content{display:inline-block;position:relative}.vis-item.vis-background .vis-item-content{display:inline-block;position:absolute}.vis-item.vis-line{border-left-style:solid;border-left-width:1px;padding:0;position:absolute;width:0}.vis-item .vis-item-content{box-sizing:border-box;padding:5px;white-space:nowrap}.vis-item .vis-onUpdateTime-tooltip{background:#4f81bd;border-radius:1px;color:#fff;padding:5px;position:absolute;text-align:center;transition:.4s;-o-transition:.4s;-moz-transition:.4s;-webkit-transition:.4s;white-space:nowrap;width:200px}.vis-item .vis-delete,.vis-item .vis-delete-rtl{box-sizing:border-box;cursor:pointer;height:24px;padding:0 5px;position:absolute;top:0;-webkit-transition:background .2s linear;-moz-transition:background .2s linear;-ms-transition:background .2s linear;-o-transition:background .2s linear;transition:background .2s linear;width:24px}.vis-item .vis-delete{right:-24px}.vis-item .vis-delete-rtl{left:-24px}.vis-item .vis-delete-rtl:after,.vis-item .vis-delete:after{color:red;content:"\\00D7";font-family:arial,sans-serif;font-size:22px;font-weight:700;-webkit-transition:color .2s linear;-moz-transition:color .2s linear;-ms-transition:color .2s linear;-o-transition:color .2s linear;transition:color .2s linear}.vis-item .vis-delete-rtl:hover,.vis-item .vis-delete:hover{background:red}.vis-item .vis-delete-rtl:hover:after,.vis-item .vis-delete:hover:after{color:#fff}.vis-item .vis-drag-center{cursor:move;height:100%;left:0;position:absolute;top:0;width:100%}.vis-item.vis-range .vis-drag-left{cursor:w-resize;left:-4px}.vis-item.vis-range .vis-drag-left,.vis-item.vis-range .vis-drag-right{height:100%;max-width:20%;min-width:2px;position:absolute;top:0;width:24px}.vis-item.vis-range .vis-drag-right{cursor:e-resize;right:-4px}.vis-range.vis-item.vis-readonly .vis-drag-left,.vis-range.vis-item.vis-readonly .vis-drag-right{cursor:auto}.vis-item.vis-cluster{border-radius:2px;border-style:solid;text-align:center;vertical-align:center}.vis-item.vis-cluster-line{border-left-style:solid;border-left-width:1px;padding:0;position:absolute;width:0}.vis-item.vis-cluster-dot{border-radius:4px;border-style:solid;border-width:4px;padding:0;position:absolute}');
    var LP = function() {
        function t(e, i, n) {
            var o, r = this;
            yu(this, t), this.id = null, this.parent = null, this.data = e, this.dom = null, this.conversion = i || {}, this.defaultOptions = { locales: zE, locale: "en" }, this.options = SO.extend({}, this.defaultOptions, n), this.options.locales = SO.extend({}, zE, this.options.locales);
            var s = this.defaultOptions.locales[this.defaultOptions.locale];
            tp(o = pc(this.options.locales)).call(o, (function(t) { r.options.locales[t] = SO.extend({}, s, r.options.locales[t]) })), this.selected = !1, this.displayed = !1, this.groupShowing = !0, this.selectable = n && n.selectable || !1, this.dirty = !0, this.top = null, this.right = null, this.left = null, this.width = null, this.height = null, this.setSelectability(e), this.editable = null, this._updateEditStatus()
        }
        return xu(t, [{ key: "select", value: function() { this.selectable && (this.selected = !0, this.dirty = !0, this.displayed && this.redraw()) } }, { key: "unselect", value: function() { this.selected = !1, this.dirty = !0, this.displayed && this.redraw() } }, { key: "setData", value: function(t) { null != t.group && this.data.group != t.group && null != this.parent && this.parent.itemSet._moveToGroup(this, t.group), this.setSelectability(t), this.parent && (this.parent.stackDirty = !0), null != t.subgroup && this.data.subgroup != t.subgroup && null != this.parent && this.parent.changeSubgroup(this, this.data.subgroup, t.subgroup), this.data = t, this._updateEditStatus(), this.dirty = !0, this.displayed && this.redraw() } }, { key: "setSelectability", value: function(t) { t && (this.selectable = void 0 === t.selectable || Boolean(t.selectable)) } }, { key: "setParent", value: function(t) { this.displayed ? (this.hide(), this.parent = t, this.parent && this.show()) : this.parent = t } }, { key: "isVisible", value: function(t) { return !1 } }, { key: "show", value: function() { return !1 } }, { key: "hide", value: function() { return !1 } }, { key: "redraw", value: function() {} }, { key: "repositionX", value: function() {} }, { key: "repositionY", value: function() {} }, {
            key: "_repaintDragCenter",
            value: function() {
                if (this.selected && this.editable.updateTime && !this.dom.dragCenter) {
                    var t, e, i = this,
                        n = document.createElement("div");
                    n.className = "vis-drag-center", n.dragCenterItem = this, this.hammerDragCenter = new yE(n), this.hammerDragCenter.on("tap", (function(t) { i.parent.itemSet.body.emitter.emit("click", { event: t, item: i.id }) })), this.hammerDragCenter.on("doubletap", (function(t) { t.stopPropagation(), i.parent.itemSet._onUpdateItem(i), i.parent.itemSet.body.emitter.emit("doubleClick", { event: t, item: i.id }) })), this.hammerDragCenter.on("panstart", (function(t) { t.stopPropagation(), i.parent.itemSet._onDragStart(t) })), this.hammerDragCenter.on("panmove", Hc(t = i.parent.itemSet._onDrag).call(t, i.parent.itemSet)), this.hammerDragCenter.on("panend", Hc(e = i.parent.itemSet._onDragEnd).call(e, i.parent.itemSet)), this.hammerDragCenter.get("press").set({ time: 1e4 }), this.dom.box ? this.dom.dragLeft ? this.dom.box.insertBefore(n, this.dom.dragLeft) : this.dom.box.appendChild(n) : this.dom.point && this.dom.point.appendChild(n), this.dom.dragCenter = n
                } else !this.selected && this.dom.dragCenter && (this.dom.dragCenter.parentNode && this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter), this.dom.dragCenter = null, this.hammerDragCenter && (this.hammerDragCenter.destroy(), this.hammerDragCenter = null))
            }
        }, {
            key: "_repaintDeleteButton",
            value: function(t) {
                var e = (this.options.editable.overrideItems || null == this.editable) && this.options.editable.remove || !this.options.editable.overrideItems && null != this.editable && this.editable.remove;
                if (this.selected && e && !this.dom.deleteButton) {
                    var i = this,
                        n = document.createElement("div");
                    this.options.rtl ? n.className = "vis-delete-rtl" : n.className = "vis-delete";
                    var o = this.options.locales[this.options.locale];
                    o || (this.warned || (console.warn("WARNING: options.locales['".concat(this.options.locale, "'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization")), this.warned = !0), o = this.options.locales.en), n.title = o.deleteSelected, this.hammerDeleteButton = new yE(n).on("tap", (function(t) { t.stopPropagation(), i.parent.removeFromDataSet(i) })), t.appendChild(n), this.dom.deleteButton = n
                } else this.selected && e || !this.dom.deleteButton || (this.dom.deleteButton.parentNode && this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton), this.dom.deleteButton = null, this.hammerDeleteButton && (this.hammerDeleteButton.destroy(), this.hammerDeleteButton = null))
            }
        }, {
            key: "_repaintOnItemUpdateTimeTooltip",
            value: function(t) {
                if (this.options.tooltipOnItemUpdateTime) {
                    var e = (this.options.editable.updateTime || !0 === this.data.editable) && !1 !== this.data.editable;
                    if (this.selected && e && !this.dom.onItemUpdateTimeTooltip) {
                        var i = document.createElement("div");
                        i.className = "vis-onUpdateTime-tooltip", t.appendChild(i), this.dom.onItemUpdateTimeTooltip = i
                    } else !this.selected && this.dom.onItemUpdateTimeTooltip && (this.dom.onItemUpdateTimeTooltip.parentNode && this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip), this.dom.onItemUpdateTimeTooltip = null);
                    if (this.dom.onItemUpdateTimeTooltip) {
                        this.dom.onItemUpdateTimeTooltip.style.visibility = this.parent.itemSet.touchParams.itemIsDragging ? "visible" : "hidden", this.dom.onItemUpdateTimeTooltip.style.transform = "translateX(-50%)", this.dom.onItemUpdateTimeTooltip.style.left = "50%";
                        var n, o, r = this.parent.itemSet.body.domProps.scrollTop;
                        if (("top" == this.options.orientation.item ? this.top : this.parent.height - this.top - this.height) + this.parent.top - 50 < -r ? (this.dom.onItemUpdateTimeTooltip.style.bottom = "", this.dom.onItemUpdateTimeTooltip.style.top = "".concat(this.height + 2, "px")) : (this.dom.onItemUpdateTimeTooltip.style.top = "", this.dom.onItemUpdateTimeTooltip.style.bottom = "".concat(this.height + 2, "px")), this.options.tooltipOnItemUpdateTime && this.options.tooltipOnItemUpdateTime.template) n = Hc(o = this.options.tooltipOnItemUpdateTime.template).call(o, this)(this.data);
                        else n = "start: ".concat(cM(this.data.start).format("MM/DD/YYYY hh:mm")), this.data.end && (n += "<br> end: ".concat(cM(this.data.end).format("MM/DD/YYYY hh:mm")));
                        this.dom.onItemUpdateTimeTooltip.innerHTML = SO.xss(n)
                    }
                }
            }
        }, { key: "_getItemData", value: function() { return this.parent.itemSet.itemsData.get(this.id) } }, {
            key: "_updateContents",
            value: function(t) {
                var e, i, n, o, r, s, a = this._getItemData(),
                    l = (this.dom.box || this.dom.point).getElementsByClassName("vis-item-visible-frame")[0];
                this.options.visibleFrameTemplate ? (o = Hc(r = this.options.visibleFrameTemplate).call(r, this), n = SO.xss(o(a, l))) : n = "";
                if (l)
                    if (n instanceof Object && !(n instanceof Element)) o(a, l);
                    else if (this._contentToString(this.itemVisibleFrameContent) !== this._contentToString(n)) {
                    if (n instanceof Element) l.innerHTML = "", l.appendChild(n);
                    else if (null != n) l.innerHTML = SO.xss(n);
                    else if ("background" != this.data.type || void 0 !== this.data.content) throw new Error('Property "content" missing in item '.concat(this.id));
                    this.itemVisibleFrameContent = n
                }
                this.options.template ? e = (i = Hc(s = this.options.template).call(s, this))(a, t, this.data) : e = this.data.content;
                if (e instanceof Object && !(e instanceof Element)) i(a, t);
                else if (this._contentToString(this.content) !== this._contentToString(e)) {
                    if (e instanceof Element) t.innerHTML = "", t.appendChild(e);
                    else if (null != e) t.innerHTML = SO.xss(e);
                    else if ("background" != this.data.type || void 0 !== this.data.content) throw new Error('Property "content" missing in item '.concat(this.id));
                    this.content = e
                }
            }
        }, {
            key: "_updateDataAttributes",
            value: function(t) {
                if (this.options.dataAttributes && this.options.dataAttributes.length > 0) {
                    var e = [];
                    if (tc(this.options.dataAttributes)) e = this.options.dataAttributes;
                    else {
                        if ("all" != this.options.dataAttributes) return;
                        e = pc(this.data)
                    }
                    var i, n = AP(e);
                    try {
                        for (n.s(); !(i = n.n()).done;) {
                            var o = i.value,
                                r = this.data[o];
                            null != r ? t.setAttribute("data-".concat(o), r) : t.removeAttribute("data-".concat(o))
                        }
                    } catch (t) { n.e(t) } finally { n.f() }
                }
            }
        }, { key: "_updateStyle", value: function(t) { this.style && (SO.removeCssText(t, this.style), this.style = null), this.data.style && (SO.addCssText(t, this.data.style), this.style = this.data.style) } }, { key: "_contentToString", value: function(t) { return "string" == typeof t ? t : t && "outerHTML" in t ? t.outerHTML : t } }, { key: "_updateEditStatus", value: function() { this.options && ("boolean" == typeof this.options.editable ? this.editable = { updateTime: this.options.editable, updateGroup: this.options.editable, remove: this.options.editable } : "object" === Rd(this.options.editable) && (this.editable = {}, SO.selectiveExtend(["updateTime", "updateGroup", "remove"], this.editable, this.options.editable))), this.options && this.options.editable && !0 === this.options.editable.overrideItems || this.data && ("boolean" == typeof this.data.editable ? this.editable = { updateTime: this.data.editable, updateGroup: this.data.editable, remove: this.data.editable } : "object" === Rd(this.data.editable) && (this.editable = {}, SO.selectiveExtend(["updateTime", "updateGroup", "remove"], this.editable, this.data.editable))) } }, { key: "getWidthLeft", value: function() { return 0 } }, { key: "getWidthRight", value: function() { return 0 } }, { key: "getTitle", value: function() { var t; return this.options.tooltip && this.options.tooltip.template ? Hc(t = this.options.tooltip.template).call(t, this)(this._getItemData(), this.data) : this.data.title } }]), t
    }();

    function NP(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    LP.prototype.stack = !0;
    var FP = function(t) {
        p_(i, t);
        var e = NP(i);

        function i(t, n, o) { var r; if (yu(this, i), (r = e.call(this, t, n, o)).props = { dot: { width: 0, height: 0 }, line: { width: 0, height: 0 } }, t && null == t.start) throw new Error('Property "start" missing in item '.concat(t)); return r }
        return xu(i, [{
            key: "isVisible",
            value: function(t) {
                if (this.cluster) return !1;
                var e, i = this.data.align || this.options.align,
                    n = this.width * t.getMillisecondsPerPixel();
                return e = "right" == i ? this.data.start.getTime() > t.start && this.data.start.getTime() - n < t.end : "left" == i ? this.data.start.getTime() + n > t.start && this.data.start.getTime() < t.end : this.data.start.getTime() + n / 2 > t.start && this.data.start.getTime() - n / 2 < t.end, e
            }
        }, { key: "_createDomElement", value: function() { this.dom || (this.dom = {}, this.dom.box = document.createElement("DIV"), this.dom.content = document.createElement("DIV"), this.dom.content.className = "vis-item-content", this.dom.box.appendChild(this.dom.content), this.dom.line = document.createElement("DIV"), this.dom.line.className = "vis-line", this.dom.dot = document.createElement("DIV"), this.dom.dot.className = "vis-dot", this.dom.box["vis-item"] = this, this.dirty = !0) } }, {
            key: "_appendDomElement",
            value: function() {
                if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
                if (!this.dom.box.parentNode) {
                    var t = this.parent.dom.foreground;
                    if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
                    t.appendChild(this.dom.box)
                }
                if (!this.dom.line.parentNode) {
                    var e = this.parent.dom.background;
                    if (!e) throw new Error("Cannot redraw item: parent has no background container element");
                    e.appendChild(this.dom.line)
                }
                if (!this.dom.dot.parentNode) {
                    var i = this.parent.dom.axis;
                    if (!e) throw new Error("Cannot redraw item: parent has no axis container element");
                    i.appendChild(this.dom.dot)
                }
                this.displayed = !0
            }
        }, {
            key: "_updateDirtyDomComponents",
            value: function() {
                if (this.dirty) {
                    this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
                    var t = this.editable.updateTime || this.editable.updateGroup,
                        e = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (t ? " vis-editable" : " vis-readonly");
                    this.dom.box.className = "vis-item vis-box".concat(e), this.dom.line.className = "vis-item vis-line".concat(e), this.dom.dot.className = "vis-item vis-dot".concat(e)
                }
            }
        }, { key: "_getDomComponentsSizes", value: function() { return { previous: { right: this.dom.box.style.right, left: this.dom.box.style.left }, dot: { height: this.dom.dot.offsetHeight, width: this.dom.dot.offsetWidth }, line: { width: this.dom.line.offsetWidth }, box: { width: this.dom.box.offsetWidth, height: this.dom.box.offsetHeight } } } }, { key: "_updateDomComponentsSizes", value: function(t) { this.options.rtl ? this.dom.box.style.right = "0px" : this.dom.box.style.left = "0px", this.props.dot.height = t.dot.height, this.props.dot.width = t.dot.width, this.props.line.width = t.line.width, this.width = t.box.width, this.height = t.box.height, this.options.rtl ? this.dom.box.style.right = t.previous.right : this.dom.box.style.left = t.previous.left, this.dirty = !1 } }, { key: "_repaintDomAdditionals", value: function() { this._repaintOnItemUpdateTimeTooltip(this.dom.box), this._repaintDragCenter(), this._repaintDeleteButton(this.dom.box) } }, {
            key: "redraw",
            value: function(t) {
                var e, i, n, o, r, s, a = this,
                    l = [Hc(e = this._createDomElement).call(e, this), Hc(i = this._appendDomElement).call(i, this), Hc(n = this._updateDirtyDomComponents).call(n, this), function() { a.dirty && (r = a._getDomComponentsSizes()) }, function() {
                        var t;
                        a.dirty && Hc(t = a._updateDomComponentsSizes).call(t, a)(r)
                    }, Hc(o = this._repaintDomAdditionals).call(o, this)];
                return t ? l : (tp(l).call(l, (function(t) { s = t() })), s)
            }
        }, { key: "show", value: function(t) { if (!this.displayed) return this.redraw(t) } }, {
            key: "hide",
            value: function() {
                if (this.displayed) {
                    var t = this.dom;
                    t.box.remove ? t.box.remove() : t.box.parentNode && t.box.parentNode.removeChild(t.box), t.line.remove ? t.line.remove() : t.line.parentNode && t.line.parentNode.removeChild(t.line), t.dot.remove ? t.dot.remove() : t.dot.parentNode && t.dot.parentNode.removeChild(t.dot), this.displayed = !1
                }
            }
        }, {
            key: "repositionXY",
            value: function() {
                var t = this.options.rtl,
                    e = function(t, e, i) {
                        var n, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (void 0 !== e || void 0 !== i) {
                            var r = o ? -1 * e : e;
                            t.style.transform = void 0 !== i ? void 0 !== e ? Xd(n = "translate(".concat(r, "px, ")).call(n, i, "px)") : "translateY(".concat(i, "px)") : "translateX(".concat(r, "px)")
                        }
                    };
                e(this.dom.box, this.boxX, this.boxY, t), e(this.dom.dot, this.dotX, this.dotY, t), e(this.dom.line, this.lineX, this.lineY, t)
            }
        }, {
            key: "repositionX",
            value: function() {
                var t = this.conversion.toScreen(this.data.start),
                    e = void 0 === this.data.align ? this.options.align : this.data.align,
                    i = this.props.line.width,
                    n = this.props.dot.width;
                "right" == e ? (this.boxX = t - this.width, this.lineX = t - i, this.dotX = t - i / 2 - n / 2) : "left" == e ? (this.boxX = t, this.lineX = t, this.dotX = t + i / 2 - n / 2) : (this.boxX = t - this.width / 2, this.lineX = this.options.rtl ? t - i : t - i / 2, this.dotX = t - n / 2), this.options.rtl ? this.right = this.boxX : this.left = this.boxX, this.repositionXY()
            }
        }, {
            key: "repositionY",
            value: function() {
                var t = this.options.orientation.item,
                    e = this.dom.line.style;
                if ("top" == t) {
                    var i = this.parent.top + this.top + 1;
                    this.boxY = this.top || 0, e.height = "".concat(i, "px"), e.bottom = "", e.top = "0"
                } else {
                    var n = this.parent.itemSet.props.height - this.parent.top - this.parent.height + this.top;
                    this.boxY = this.parent.height - this.top - (this.height || 0), e.height = "".concat(n, "px"), e.top = "", e.bottom = "0"
                }
                this.dotY = -this.props.dot.height / 2, this.repositionXY()
            }
        }, { key: "getWidthLeft", value: function() { return this.width / 2 } }, { key: "getWidthRight", value: function() { return this.width / 2 } }]), i
    }(LP);

    function RP(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    var jP = function(t) {
        p_(i, t);
        var e = RP(i);

        function i(t, n, o) { var r; if (yu(this, i), (r = e.call(this, t, n, o)).props = { dot: { top: 0, width: 0, height: 0 }, content: { height: 0, marginLeft: 0, marginRight: 0 } }, t && null == t.start) throw new Error('Property "start" missing in item '.concat(t)); return r }
        return xu(i, [{ key: "isVisible", value: function(t) { if (this.cluster) return !1; var e = this.width * t.getMillisecondsPerPixel(); return this.data.start.getTime() + e > t.start && this.data.start < t.end } }, { key: "_createDomElement", value: function() { this.dom || (this.dom = {}, this.dom.point = document.createElement("div"), this.dom.content = document.createElement("div"), this.dom.content.className = "vis-item-content", this.dom.point.appendChild(this.dom.content), this.dom.dot = document.createElement("div"), this.dom.point.appendChild(this.dom.dot), this.dom.point["vis-item"] = this, this.dirty = !0) } }, {
            key: "_appendDomElement",
            value: function() {
                if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
                if (!this.dom.point.parentNode) {
                    var t = this.parent.dom.foreground;
                    if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
                    t.appendChild(this.dom.point)
                }
                this.displayed = !0
            }
        }, {
            key: "_updateDirtyDomComponents",
            value: function() {
                if (this.dirty) {
                    this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.point), this._updateStyle(this.dom.point);
                    var t = this.editable.updateTime || this.editable.updateGroup,
                        e = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (t ? " vis-editable" : " vis-readonly");
                    this.dom.point.className = "vis-item vis-point".concat(e), this.dom.dot.className = "vis-item vis-dot".concat(e)
                }
            }
        }, { key: "_getDomComponentsSizes", value: function() { return { dot: { width: this.dom.dot.offsetWidth, height: this.dom.dot.offsetHeight }, content: { width: this.dom.content.offsetWidth, height: this.dom.content.offsetHeight }, point: { width: this.dom.point.offsetWidth, height: this.dom.point.offsetHeight } } } }, {
            key: "_updateDomComponentsSizes",
            value: function(t) {
                this.props.dot.width = t.dot.width, this.props.dot.height = t.dot.height, this.props.content.height = t.content.height, this.options.rtl ? this.dom.content.style.marginRight = "".concat(this.props.dot.width / 2, "px") : this.dom.content.style.marginLeft = "".concat(this.props.dot.width / 2, "px"), this.width = t.point.width, this.height = t.point.height, this.dom.dot.style.top = "".concat((this.height - this.props.dot.height) / 2, "px");
                var e = this.props.dot.width,
                    i = this.options.rtl ? e / 2 : e / 2 * -1;
                this.dom.dot.style.transform = "translateX(".concat(i, "px"), this.dirty = !1
            }
        }, { key: "_repaintDomAdditionals", value: function() { this._repaintOnItemUpdateTimeTooltip(this.dom.point), this._repaintDragCenter(), this._repaintDeleteButton(this.dom.point) } }, {
            key: "redraw",
            value: function(t) {
                var e, i, n, o, r, s, a = this,
                    l = [Hc(e = this._createDomElement).call(e, this), Hc(i = this._appendDomElement).call(i, this), Hc(n = this._updateDirtyDomComponents).call(n, this), function() { a.dirty && (r = a._getDomComponentsSizes()) }, function() {
                        var t;
                        a.dirty && Hc(t = a._updateDomComponentsSizes).call(t, a)(r)
                    }, Hc(o = this._repaintDomAdditionals).call(o, this)];
                return t ? l : (tp(l).call(l, (function(t) { s = t() })), s)
            }
        }, {
            key: "repositionXY",
            value: function() {
                var t = this.options.rtl,
                    e = function(t, e, i) {
                        var n, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (void 0 !== e || void 0 !== i) {
                            var r = o ? -1 * e : e;
                            t.style.transform = void 0 !== i ? void 0 !== e ? Xd(n = "translate(".concat(r, "px, ")).call(n, i, "px)") : "translateY(".concat(i, "px)") : "translateX(".concat(r, "px)")
                        }
                    };
                e(this.dom.point, this.pointX, this.pointY, t)
            }
        }, { key: "show", value: function(t) { if (!this.displayed) return this.redraw(t) } }, { key: "hide", value: function() { this.displayed && (this.dom.point.parentNode && this.dom.point.parentNode.removeChild(this.dom.point), this.displayed = !1) } }, {
            key: "repositionX",
            value: function() {
                var t = this.conversion.toScreen(this.data.start);
                this.pointX = t, this.options.rtl ? this.right = t - this.props.dot.width : this.left = t - this.props.dot.width, this.repositionXY()
            }
        }, {
            key: "repositionY",
            value: function() {
                var t = this.options.orientation.item;
                this.pointY = "top" == t ? this.top : this.parent.height - this.top - this.height, this.repositionXY()
            }
        }, { key: "getWidthLeft", value: function() { return this.props.dot.width } }, { key: "getWidthRight", value: function() { return this.props.dot.width } }]), i
    }(LP);

    function YP(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    var HP = function(t) {
        p_(i, t);
        var e = YP(i);

        function i(t, n, o) { var r; if (yu(this, i), (r = e.call(this, t, n, o)).props = { content: { width: 0 } }, r.overflow = !1, t) { if (null == t.start) throw new Error('Property "start" missing in item '.concat(t.id)); if (null == t.end) throw new Error('Property "end" missing in item '.concat(t.id)) } return r }
        return xu(i, [{ key: "isVisible", value: function(t) { return !this.cluster && (this.data.start < t.end && this.data.end > t.start) } }, { key: "_createDomElement", value: function() { this.dom || (this.dom = {}, this.dom.box = document.createElement("div"), this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-item-overflow", this.dom.box.appendChild(this.dom.frame), this.dom.visibleFrame = document.createElement("div"), this.dom.visibleFrame.className = "vis-item-visible-frame", this.dom.box.appendChild(this.dom.visibleFrame), this.dom.content = document.createElement("div"), this.dom.content.className = "vis-item-content", this.dom.frame.appendChild(this.dom.content), this.dom.box["vis-item"] = this, this.dirty = !0) } }, {
            key: "_appendDomElement",
            value: function() {
                if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
                if (!this.dom.box.parentNode) {
                    var t = this.parent.dom.foreground;
                    if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
                    t.appendChild(this.dom.box)
                }
                this.displayed = !0
            }
        }, {
            key: "_updateDirtyDomComponents",
            value: function() {
                if (this.dirty) {
                    this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
                    var t = this.editable.updateTime || this.editable.updateGroup,
                        e = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (t ? " vis-editable" : " vis-readonly");
                    this.dom.box.className = this.baseClassName + e, this.dom.content.style.maxWidth = "none"
                }
            }
        }, { key: "_getDomComponentsSizes", value: function() { return this.overflow = "hidden" !== window.getComputedStyle(this.dom.frame).overflow, this.whiteSpace = "nowrap" !== window.getComputedStyle(this.dom.content).whiteSpace, { content: { width: this.dom.content.offsetWidth }, box: { height: this.dom.box.offsetHeight } } } }, { key: "_updateDomComponentsSizes", value: function(t) { this.props.content.width = t.content.width, this.height = t.box.height, this.dom.content.style.maxWidth = "", this.dirty = !1 } }, { key: "_repaintDomAdditionals", value: function() { this._repaintOnItemUpdateTimeTooltip(this.dom.box), this._repaintDeleteButton(this.dom.box), this._repaintDragCenter(), this._repaintDragLeft(), this._repaintDragRight() } }, {
            key: "redraw",
            value: function(t) {
                var e, i, n, o, r, s, a = this,
                    l = [Hc(e = this._createDomElement).call(e, this), Hc(i = this._appendDomElement).call(i, this), Hc(n = this._updateDirtyDomComponents).call(n, this), function() {
                        var t;
                        a.dirty && (r = Hc(t = a._getDomComponentsSizes).call(t, a)())
                    }, function() {
                        var t;
                        a.dirty && Hc(t = a._updateDomComponentsSizes).call(t, a)(r)
                    }, Hc(o = this._repaintDomAdditionals).call(o, this)];
                return t ? l : (tp(l).call(l, (function(t) { s = t() })), s)
            }
        }, { key: "show", value: function(t) { if (!this.displayed) return this.redraw(t) } }, {
            key: "hide",
            value: function() {
                if (this.displayed) {
                    var t = this.dom.box;
                    t.parentNode && t.parentNode.removeChild(t), this.displayed = !1
                }
            }
        }, {
            key: "repositionX",
            value: function(t) {
                var e, i, n = this.parent.width,
                    o = this.conversion.toScreen(this.data.start),
                    r = this.conversion.toScreen(this.data.end),
                    s = void 0 === this.data.align ? this.options.align : this.data.align;
                !1 === this.data.limitSize || void 0 !== t && !0 !== t || (o < -n && (o = -n), r > 2 * n && (r = 2 * n));
                var a = Math.max(Math.round(1e3 * (r - o)) / 1e3, 1);
                switch (this.overflow ? (this.options.rtl ? this.right = o : this.left = o, this.width = a + this.props.content.width, i = this.props.content.width) : (this.options.rtl ? this.right = o : this.left = o, this.width = a, i = Math.min(r - o, this.props.content.width)), this.options.rtl ? this.dom.box.style.transform = "translateX(".concat(-1 * this.right, "px)") : this.dom.box.style.transform = "translateX(".concat(this.left, "px)"), this.dom.box.style.width = "".concat(a, "px"), this.whiteSpace && (this.height = this.dom.box.offsetHeight), s) {
                    case "left":
                        this.dom.content.style.transform = "translateX(0)";
                        break;
                    case "right":
                        if (this.options.rtl) {
                            var l = -1 * Math.max(a - i, 0);
                            this.dom.content.style.transform = "translateX(".concat(l, "px)")
                        } else this.dom.content.style.transform = "translateX(".concat(Math.max(a - i, 0), "px)");
                        break;
                    case "center":
                        if (this.options.rtl) {
                            var h = -1 * Math.max((a - i) / 2, 0);
                            this.dom.content.style.transform = "translateX(".concat(h, "px)")
                        } else this.dom.content.style.transform = "translateX(".concat(Math.max((a - i) / 2, 0), "px)");
                        break;
                    default:
                        if (e = this.overflow ? r > 0 ? Math.max(-o, 0) : -i : o < 0 ? -o : 0, this.options.rtl) {
                            var u = -1 * e;
                            this.dom.content.style.transform = "translateX(".concat(u, "px)")
                        } else this.dom.content.style.transform = "translateX(".concat(e, "px)")
                }
            }
        }, {
            key: "repositionY",
            value: function() {
                var t = this.options.orientation.item,
                    e = this.dom.box;
                e.style.top = "".concat("top" == t ? this.top : this.parent.height - this.top - this.height, "px")
            }
        }, {
            key: "_repaintDragLeft",
            value: function() {
                if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.editable.updateTime && !this.dom.dragLeft) {
                    var t = document.createElement("div");
                    t.className = "vis-drag-left", t.dragLeftItem = this, this.dom.box.appendChild(t), this.dom.dragLeft = t
                } else this.selected || this.options.itemsAlwaysDraggable.range || !this.dom.dragLeft || (this.dom.dragLeft.parentNode && this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft), this.dom.dragLeft = null)
            }
        }, {
            key: "_repaintDragRight",
            value: function() {
                if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.editable.updateTime && !this.dom.dragRight) {
                    var t = document.createElement("div");
                    t.className = "vis-drag-right", t.dragRightItem = this, this.dom.box.appendChild(t), this.dom.dragRight = t
                } else this.selected || this.options.itemsAlwaysDraggable.range || !this.dom.dragRight || (this.dom.dragRight.parentNode && this.dom.dragRight.parentNode.removeChild(this.dom.dragRight), this.dom.dragRight = null)
            }
        }]), i
    }(LP);

    function zP(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    HP.prototype.baseClassName = "vis-item vis-range";
    var BP = function(t) {
        p_(i, t);
        var e = zP(i);

        function i(t, n, o) { var r; if (yu(this, i), (r = e.call(this, t, n, o)).props = { content: { width: 0 } }, r.overflow = !1, t) { if (null == t.start) throw new Error('Property "start" missing in item '.concat(t.id)); if (null == t.end) throw new Error('Property "end" missing in item '.concat(t.id)) } return r }
        return xu(i, [{ key: "isVisible", value: function(t) { return this.data.start < t.end && this.data.end > t.start } }, { key: "_createDomElement", value: function() { this.dom || (this.dom = {}, this.dom.box = document.createElement("div"), this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-item-overflow", this.dom.box.appendChild(this.dom.frame), this.dom.content = document.createElement("div"), this.dom.content.className = "vis-item-content", this.dom.frame.appendChild(this.dom.content), this.dirty = !0) } }, {
            key: "_appendDomElement",
            value: function() {
                if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
                if (!this.dom.box.parentNode) {
                    var t = this.parent.dom.background;
                    if (!t) throw new Error("Cannot redraw item: parent has no background container element");
                    t.appendChild(this.dom.box)
                }
                this.displayed = !0
            }
        }, {
            key: "_updateDirtyDomComponents",
            value: function() {
                if (this.dirty) {
                    this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.content), this._updateStyle(this.dom.box);
                    var t = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "");
                    this.dom.box.className = this.baseClassName + t
                }
            }
        }, { key: "_getDomComponentsSizes", value: function() { return this.overflow = "hidden" !== window.getComputedStyle(this.dom.content).overflow, { content: { width: this.dom.content.offsetWidth } } } }, { key: "_updateDomComponentsSizes", value: function(t) { this.props.content.width = t.content.width, this.height = 0, this.dirty = !1 } }, { key: "_repaintDomAdditionals", value: function() {} }, {
            key: "redraw",
            value: function(t) {
                var e, i, n, o, r, s, a = this,
                    l = [Hc(e = this._createDomElement).call(e, this), Hc(i = this._appendDomElement).call(i, this), Hc(n = this._updateDirtyDomComponents).call(n, this), function() {
                        var t;
                        a.dirty && (r = Hc(t = a._getDomComponentsSizes).call(t, a)())
                    }, function() {
                        var t;
                        a.dirty && Hc(t = a._updateDomComponentsSizes).call(t, a)(r)
                    }, Hc(o = this._repaintDomAdditionals).call(o, this)];
                return t ? l : (tp(l).call(l, (function(t) { s = t() })), s)
            }
        }, {
            key: "repositionY",
            value: function(t) {
                var e, i = this.options.orientation.item;
                if (void 0 !== this.data.subgroup) {
                    var n = this.data.subgroup;
                    this.dom.box.style.height = "".concat(this.parent.subgroups[n].height, "px"), this.dom.box.style.top = "".concat("top" == i ? this.parent.top + this.parent.subgroups[n].top : this.parent.top + this.parent.height - this.parent.subgroups[n].top - this.parent.subgroups[n].height, "px"), this.dom.box.style.bottom = ""
                } else this.parent instanceof PP ? (e = Math.max(this.parent.height, this.parent.itemSet.body.domProps.center.height, this.parent.itemSet.body.domProps.centerContainer.height), this.dom.box.style.bottom = "bottom" == i ? "0" : "", this.dom.box.style.top = "top" == i ? "0" : "") : (e = this.parent.height, this.dom.box.style.top = "".concat(this.parent.top, "px"), this.dom.box.style.bottom = "");
                this.dom.box.style.height = "".concat(e, "px")
            }
        }]), i
    }(LP);
    BP.prototype.baseClassName = "vis-item vis-background", BP.prototype.stack = !1, BP.prototype.show = HP.prototype.show, BP.prototype.hide = HP.prototype.hide, BP.prototype.repositionX = HP.prototype.repositionX;
    wE("div.vis-tooltip{background-color:#f5f4ed;border:1px solid #808074;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;box-shadow:3px 3px 10px rgba(0,0,0,.2);color:#000;font-family:verdana;font-size:14px;padding:5px;pointer-events:none;position:absolute;visibility:hidden;white-space:nowrap;z-index:5}");
    var GP = function() {
            function t(e, i) { yu(this, t), this.container = e, this.overflowMethod = i || "cap", this.x = 0, this.y = 0, this.padding = 5, this.hidden = !1, this.frame = document.createElement("div"), this.frame.className = "vis-tooltip", this.container.appendChild(this.frame) }
            return xu(t, [{ key: "setPosition", value: function(t, e) { this.x = pm(t), this.y = pm(e) } }, { key: "setText", value: function(t) { t instanceof Element ? (this.frame.innerHTML = "", this.frame.appendChild(t)) : this.frame.innerHTML = SO.xss(t) } }, {
                key: "show",
                value: function(t) {
                    if (void 0 === t && (t = !0), !0 === t) {
                        var e = this.frame.clientHeight,
                            i = this.frame.clientWidth,
                            n = this.frame.parentNode.clientHeight,
                            o = this.frame.parentNode.clientWidth,
                            r = 0,
                            s = 0;
                        if ("flip" == this.overflowMethod || "none" == this.overflowMethod) {
                            var a = !1,
                                l = !0;
                            "flip" == this.overflowMethod && (this.y - e < this.padding && (l = !1), this.x + i > o - this.padding && (a = !0)), r = a ? this.x - i : this.x, s = l ? this.y - e : this.y
                        } else(s = this.y - e) + e + this.padding > n && (s = n - e - this.padding), s < this.padding && (s = this.padding), (r = this.x) + i + this.padding > o && (r = o - i - this.padding), r < this.padding && (r = this.padding);
                        this.frame.style.left = r + "px", this.frame.style.top = s + "px", this.frame.style.visibility = "visible", this.hidden = !1
                    } else this.hide()
                }
            }, { key: "hide", value: function() { this.hidden = !0, this.frame.style.left = "0", this.frame.style.top = "0", this.frame.style.visibility = "hidden" } }, { key: "destroy", value: function() { this.frame.parentNode.removeChild(this.frame) } }]), t
        }(),
        WP = { exports: {} },
        VP = ll.every;
    Nn({ target: "Array", proto: !0, forced: !Gc("every") }, { every: function(t) { return VP(this, t, arguments.length > 1 ? arguments[1] : void 0) } });
    var UP = bd("Array").every,
        XP = be,
        qP = UP,
        $P = Array.prototype,
        ZP = function(t) { var e = t.every; return t === $P || XP($P, t) && e === $P.every ? qP : e };
    ! function(t) { t.exports = ZP }(WP);
    var KP = n(WP.exports);

    function JP(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return QP(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return QP(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function QP(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function tA(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    var eA = function(t) {
        p_(i, t);
        var e = tA(i);

        function i(t, n, o) {
            var r;
            yu(this, i);
            var s = qp({}, { fitOnDoubleClick: !0 }, o, { editable: !1 });
            if ((r = e.call(this, t, n, s)).props = { content: { width: 0, height: 0 } }, !t || null == t.uiItems) throw new Error('Property "uiItems" missing in item ' + t.id);
            return r.id = qT(), r.group = t.group, r._setupRange(), r.emitter = r.data.eventEmitter, r.range = r.data.range, r.attached = !1, r.isCluster = !0, r.data.isCluster = !0, r
        }
        return xu(i, [{ key: "hasItems", value: function() { return this.data.uiItems && this.data.uiItems.length && this.attached } }, { key: "setUiItems", value: function(t) { this.detach(), this.data.uiItems = t, this._setupRange(), this.attach() } }, {
            key: "isVisible",
            value: function(t) {
                var e = this.data.end ? this.data.end - this.data.start : 0,
                    i = this.width * t.getMillisecondsPerPixel(),
                    n = Math.max(this.data.start.getTime() + e, this.data.start.getTime() + i);
                return this.data.start < t.end && n > t.start && this.hasItems()
            }
        }, { key: "getData", value: function() { return { isCluster: !0, id: this.id, items: this.data.items || [], data: this.data } } }, {
            key: "redraw",
            value: function(t) {
                var e, i, n, o, r, s, a, l, h = [Hc(e = this._createDomElement).call(e, this), Hc(i = this._appendDomElement).call(i, this), Hc(n = this._updateDirtyDomComponents).call(n, this), Hc(o = function() { this.dirty && (a = this._getDomComponentsSizes()) }).call(o, this), Hc(r = function() {
                    var t;
                    this.dirty && Hc(t = this._updateDomComponentsSizes).call(t, this)(a)
                }).call(r, this), Hc(s = this._repaintDomAdditionals).call(s, this)];
                return t ? h : (tp(h).call(h, (function(t) { l = t() })), l)
            }
        }, { key: "show", value: function() { this.displayed || this.redraw() } }, {
            key: "hide",
            value: function() {
                if (this.displayed) {
                    var t = this.dom;
                    t.box.parentNode && t.box.parentNode.removeChild(t.box), this.options.showStipes && (t.line.parentNode && t.line.parentNode.removeChild(t.line), t.dot.parentNode && t.dot.parentNode.removeChild(t.dot)), this.displayed = !1
                }
            }
        }, {
            key: "repositionX",
            value: function() {
                var t = this.conversion.toScreen(this.data.start),
                    e = this.data.end ? this.conversion.toScreen(this.data.end) : 0;
                if (e) this.repositionXWithRanges(t, e);
                else {
                    var i = void 0 === this.data.align ? this.options.align : this.data.align;
                    this.repositionXWithoutRanges(t, i)
                }
                this.options.showStipes && (this.dom.line.style.display = this._isStipeVisible() ? "block" : "none", this.dom.dot.style.display = this._isStipeVisible() ? "block" : "none", this._isStipeVisible() && this.repositionStype(t, e))
            }
        }, {
            key: "repositionStype",
            value: function(t, e) {
                this.dom.line.style.display = "block", this.dom.dot.style.display = "block";
                var i = this.dom.line.offsetWidth,
                    n = this.dom.dot.offsetWidth;
                if (e) {
                    var o = i + t + (e - t) / 2,
                        r = o - n / 2,
                        s = this.options.rtl ? -1 * o : o,
                        a = this.options.rtl ? -1 * r : r;
                    this.dom.line.style.transform = "translateX(".concat(s, "px)"), this.dom.dot.style.transform = "translateX(".concat(a, "px)")
                } else {
                    var l = this.options.rtl ? -1 * t : t,
                        h = this.options.rtl ? -1 * (t - n / 2) : t - n / 2;
                    this.dom.line.style.transform = "translateX(".concat(l, "px)"), this.dom.dot.style.transform = "translateX(".concat(h, "px)")
                }
            }
        }, { key: "repositionXWithoutRanges", value: function(t, e) { "right" == e ? this.options.rtl ? (this.right = t - this.width, this.dom.box.style.right = this.right + "px") : (this.left = t - this.width, this.dom.box.style.left = this.left + "px") : "left" == e ? this.options.rtl ? (this.right = t, this.dom.box.style.right = this.right + "px") : (this.left = t, this.dom.box.style.left = this.left + "px") : this.options.rtl ? (this.right = t - this.width / 2, this.dom.box.style.right = this.right + "px") : (this.left = t - this.width / 2, this.dom.box.style.left = this.left + "px") } }, {
            key: "repositionXWithRanges",
            value: function(t, e) {
                var i = Math.round(Math.max(e - t + .5, 1));
                this.options.rtl ? this.right = t : this.left = t, this.width = Math.max(i, this.minWidth || 0), this.options.rtl ? this.dom.box.style.right = this.right + "px" : this.dom.box.style.left = this.left + "px", this.dom.box.style.width = i + "px"
            }
        }, {
            key: "repositionY",
            value: function() {
                var t = this.options.orientation.item,
                    e = this.dom.box;
                if (e.style.top = "top" == t ? (this.top || 0) + "px" : (this.parent.height - this.top - this.height || 0) + "px", this.options.showStipes) {
                    if ("top" == t) this.dom.line.style.top = "0", this.dom.line.style.height = this.parent.top + this.top + 1 + "px", this.dom.line.style.bottom = "";
                    else {
                        var i = this.parent.itemSet.props.height,
                            n = i - this.parent.top - this.parent.height + this.top;
                        this.dom.line.style.top = i - n + "px", this.dom.line.style.bottom = "0"
                    }
                    this.dom.dot.style.top = -this.dom.dot.offsetHeight / 2 + "px"
                }
            }
        }, { key: "getWidthLeft", value: function() { return this.width / 2 } }, { key: "getWidthRight", value: function() { return this.width / 2 } }, { key: "move", value: function() { this.repositionX(), this.repositionY() } }, {
            key: "attach",
            value: function() {
                var t, e, i = JP(this.data.uiItems);
                try { for (i.s(); !(e = i.n()).done;) { e.value.cluster = this } } catch (t) { i.e(t) } finally { i.f() }
                this.data.items = lc(t = this.data.uiItems).call(t, (function(t) { return t.data })), this.attached = !0, this.dirty = !0
            }
        }, {
            key: "detach",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this.hasItems()) {
                    var e, i = JP(this.data.uiItems);
                    try {
                        for (i.s(); !(e = i.n()).done;) {
                            var n = e.value;
                            delete n.cluster
                        }
                    } catch (t) { i.e(t) } finally { i.f() }
                    this.attached = !1, t && this.group && (this.group.remove(this), this.group = null), this.data.items = [], this.dirty = !0
                }
            }
        }, { key: "_onDoubleClick", value: function() { this._fit() } }, {
            key: "_setupRange",
            value: function() {
                var t, e, i, n = lc(t = this.data.uiItems).call(t, (function(t) { return { start: t.data.start.valueOf(), end: t.data.end ? t.data.end.valueOf() : t.data.start.valueOf() } }));
                this.data.min = Math.min.apply(Math, jd(lc(n).call(n, (function(t) { return Math.min(t.start, t.end || t.start) })))), this.data.max = Math.max.apply(Math, jd(lc(n).call(n, (function(t) { return Math.max(t.start, t.end || t.start) }))));
                var o = lc(e = this.data.uiItems).call(e, (function(t) { return t.center })),
                    r = jD(o).call(o, (function(t, e) { return t + e }), 0) / this.data.uiItems.length;
                nT(i = this.data.uiItems).call(i, (function(t) { return t.data.end })) ? (this.data.start = new Date(this.data.min), this.data.end = new Date(this.data.max)) : (this.data.start = new Date(r), this.data.end = null)
            }
        }, { key: "_getUiItems", value: function() { var t, e = this; return this.data.uiItems && this.data.uiItems.length ? Af(t = this.data.uiItems).call(t, (function(t) { return t.cluster === e })) : [] } }, {
            key: "_createDomElement",
            value: function() {
                if (!this.dom) {
                    var t;
                    if (this.dom = {}, this.dom.box = document.createElement("DIV"), this.dom.content = document.createElement("DIV"), this.dom.content.className = "vis-item-content", this.dom.box.appendChild(this.dom.content), this.options.showStipes && (this.dom.line = document.createElement("DIV"), this.dom.line.className = "vis-cluster-line", this.dom.line.style.display = "none", this.dom.dot = document.createElement("DIV"), this.dom.dot.className = "vis-cluster-dot", this.dom.dot.style.display = "none"), this.options.fitOnDoubleClick) this.dom.box.ondblclick = Hc(t = i.prototype._onDoubleClick).call(t, this);
                    this.dom.box["vis-item"] = this, this.dirty = !0
                }
            }
        }, {
            key: "_appendDomElement",
            value: function() {
                if (!this.parent) throw new Error("Cannot redraw item: no parent attached");
                if (!this.dom.box.parentNode) {
                    var t = this.parent.dom.foreground;
                    if (!t) throw new Error("Cannot redraw item: parent has no foreground container element");
                    t.appendChild(this.dom.box)
                }
                var e = this.parent.dom.background;
                if (this.options.showStipes) {
                    if (!this.dom.line.parentNode) {
                        if (!e) throw new Error("Cannot redraw item: parent has no background container element");
                        e.appendChild(this.dom.line)
                    }
                    if (!this.dom.dot.parentNode) {
                        var i = this.parent.dom.axis;
                        if (!e) throw new Error("Cannot redraw item: parent has no axis container element");
                        i.appendChild(this.dom.dot)
                    }
                }
                this.displayed = !0
            }
        }, {
            key: "_updateDirtyDomComponents",
            value: function() {
                if (this.dirty) {
                    this._updateContents(this.dom.content), this._updateDataAttributes(this.dom.box), this._updateStyle(this.dom.box);
                    var t = this.baseClassName + " " + (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + " vis-readonly";
                    this.dom.box.className = "vis-item " + t, this.options.showStipes && (this.dom.line.className = "vis-item vis-cluster-line " + (this.selected ? " vis-selected" : ""), this.dom.dot.className = "vis-item vis-cluster-dot " + (this.selected ? " vis-selected" : "")), this.data.end && (this.dom.content.style.maxWidth = "none")
                }
            }
        }, { key: "_getDomComponentsSizes", value: function() { var t = { previous: { right: this.dom.box.style.right, left: this.dom.box.style.left }, box: { width: this.dom.box.offsetWidth, height: this.dom.box.offsetHeight } }; return this.options.showStipes && (t.dot = { height: this.dom.dot.offsetHeight, width: this.dom.dot.offsetWidth }, t.line = { width: this.dom.line.offsetWidth }), t } }, { key: "_updateDomComponentsSizes", value: function(t) { this.options.rtl ? this.dom.box.style.right = "0px" : this.dom.box.style.left = "0px", this.data.end ? this.minWidth = t.box.width : this.width = t.box.width, this.height = t.box.height, this.options.rtl ? this.dom.box.style.right = t.previous.right : this.dom.box.style.left = t.previous.left, this.dirty = !1 } }, { key: "_repaintDomAdditionals", value: function() { this._repaintOnItemUpdateTimeTooltip(this.dom.box) } }, { key: "_isStipeVisible", value: function() { return this.minWidth >= this.width || !this.data.end } }, { key: "_getFitRange", value: function() { var t = .05 * (this.data.max - this.data.min) / 2; return { fitStart: this.data.min - t, fitEnd: this.data.max + t } } }, {
            key: "_fit",
            value: function() {
                if (this.emitter) {
                    var t = this._getFitRange(),
                        e = t.fitStart,
                        i = t.fitEnd,
                        n = { start: new Date(e), end: new Date(i), animation: !0 };
                    this.emitter.emit("fit", n)
                }
            }
        }, { key: "_getItemData", value: function() { return this.data } }]), i
    }(LP);

    function iA(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return nA(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nA(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function nA(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }
    eA.prototype.baseClassName = "vis-item vis-range vis-cluster";
    var oA = "__ungrouped__",
        rA = function() {
            function t(e) { yu(this, t), this.itemSet = e, this.groups = {}, this.cache = {}, this.cache[-1] = [] }
            return xu(t, [{ key: "createClusterItem", value: function(t, e, i) { return new eA(t, e, i) } }, { key: "setItems", value: function(t, e) { this.items = t || [], this.dataChanged = !0, this.applyOnChangedLevel = !1, e && e.applyOnChangedLevel && (this.applyOnChangedLevel = e.applyOnChangedLevel) } }, { key: "updateData", value: function() { this.dataChanged = !0, this.applyOnChangedLevel = !1 } }, {
                key: "getClusters",
                value: function(t, e, i) {
                    var n = "boolean" == typeof i ? {} : i,
                        o = n.maxItems,
                        r = n.clusterCriteria;
                    r || (r = function() { return !0 }), o = o || 1;
                    var s = -1,
                        a = 0;
                    if (e > 0) {
                        if (e >= 1) return [];
                        s = Math.abs(Math.round(Math.log(100 / e) / Math.log(2))), a = Math.abs(Math.pow(2, s))
                    }
                    if (this.dataChanged) {
                        var l = s != this.cacheLevel;
                        (!this.applyOnChangedLevel || l) && (this._dropLevelsCache(), this._filterData())
                    }
                    this.cacheLevel = s;
                    var h = this.cache[s];
                    if (!h) {
                        for (var u in h = [], this.groups)
                            if (this.groups.hasOwnProperty(u))
                                for (var d = this.groups[u], c = d.length, p = 0; p < c;) {
                                    for (var f = d[p], m = 1, v = p - 1; v >= 0 && f.center - d[v].center < a / 2;) !d[v].cluster && r(f.data, d[v].data) && m++, v--;
                                    for (var g = p + 1; g < d.length && d[g].center - f.center < a / 2;) r(f.data, d[g].data) && m++, g++;
                                    for (var y = h.length - 1; y >= 0 && f.center - h[y].center < a;) f.group == h[y].group && r(f.data, h[y].data) && m++, y--;
                                    if (m > o) {
                                        for (var b = m - o + 1, _ = [], w = p; _.length < b && w < d.length;) r(d[p].data, d[w].data) && _.push(d[w]), w++;
                                        var k = this.itemSet.getGroupId(f.data),
                                            x = this.itemSet.groups[k] || this.itemSet.groups[oA],
                                            D = this._getClusterForItems(_, x, t, i);
                                        h.push(D), p += b
                                    } else delete f.cluster, p += 1
                                }
                        this.cache[s] = h
                    }
                    return h
                }
            }, {
                key: "_filterData",
                value: function() {
                    var t = {};
                    this.groups = t;
                    for (var e = 0, i = Gf(this.items); e < i.length; e++) {
                        var n = i[e],
                            o = n.parent ? n.parent.groupId : "",
                            r = t[o];
                        r || (r = [], t[o] = r), r.push(n), n.data.start && (n.data.end ? n.center = (n.data.start.valueOf() + n.data.end.valueOf()) / 2 : n.center = n.data.start.valueOf())
                    }
                    for (var s in t) { var a; if (t.hasOwnProperty(s)) $C(a = t[s]).call(a, (function(t, e) { return t.center - e.center })) }
                    this.dataChanged = !1
                }
            }, {
                key: "_getClusterForItems",
                value: function(t, e, i, n) {
                    var o, r, s = lc(o = i || []).call(o, (function(t) { var e; return { cluster: t, itemsIds: new sC(lc(e = t.data.uiItems).call(e, (function(t) { return t.id }))) } }));
                    if (s.length) { var a, l = iA(s); try { var h = function() { var e = a.value; if (e.itemsIds.size === t.length && KP(t).call(t, (function(t) { return e.itemsIds.has(t.id) }))) return r = e.cluster, "break" }; for (l.s(); !(a = l.n()).done;) { if ("break" === h()) break } } catch (t) { l.e(t) } finally { l.f() } }
                    if (r) return r.setUiItems(t), r.group !== e && (r.group && r.group.remove(r), e && (e.add(r), r.group = e)), r;
                    var u = n.titleTemplate || "",
                        d = { toScreen: this.itemSet.body.util.toScreen, toTime: this.itemSet.body.util.toTime },
                        c = u.replace(/{count}/, t.length),
                        p = '<div title="' + c + '">' + t.length + "</div>",
                        f = qp({}, n, this.itemSet.options),
                        m = { content: p, title: c, group: e, uiItems: t, eventEmitter: this.itemSet.body.emitter, range: this.itemSet.body.range };
                    return r = this.createClusterItem(m, d, f), e && (e.add(r), r.group = e), r.attach(), r
                }
            }, { key: "_dropLevelsCache", value: function() { this.cache = {}, this.cacheLevel = -1, this.cache[this.cacheLevel] = [] } }]), t
        }();
    wE('.vis-itemset{box-sizing:border-box;margin:0;padding:0;position:relative}.vis-itemset .vis-background,.vis-itemset .vis-foreground{height:100%;overflow:visible;position:absolute;width:100%}.vis-axis{height:0;left:0;position:absolute;width:100%;z-index:1}.vis-foreground .vis-group{border-bottom:1px solid #bfbfbf;box-sizing:border-box;position:relative}.vis-foreground .vis-group:last-child{border-bottom:none}.vis-nesting-group{cursor:pointer}.vis-label.vis-nested-group.vis-group-level-unknown-but-gte1{background:#f5f5f5}.vis-label.vis-nested-group.vis-group-level-0{background-color:#fff}.vis-ltr .vis-label.vis-nested-group.vis-group-level-0 .vis-inner{padding-left:0}.vis-rtl .vis-label.vis-nested-group.vis-group-level-0 .vis-inner{padding-right:0}.vis-label.vis-nested-group.vis-group-level-1{background-color:rgba(0,0,0,.05)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-1 .vis-inner{padding-left:15px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-1 .vis-inner{padding-right:15px}.vis-label.vis-nested-group.vis-group-level-2{background-color:rgba(0,0,0,.1)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-2 .vis-inner{padding-left:30px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-2 .vis-inner{padding-right:30px}.vis-label.vis-nested-group.vis-group-level-3{background-color:rgba(0,0,0,.15)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-3 .vis-inner{padding-left:45px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-3 .vis-inner{padding-right:45px}.vis-label.vis-nested-group.vis-group-level-4{background-color:rgba(0,0,0,.2)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-4 .vis-inner{padding-left:60px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-4 .vis-inner{padding-right:60px}.vis-label.vis-nested-group.vis-group-level-5{background-color:rgba(0,0,0,.25)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-5 .vis-inner{padding-left:75px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-5 .vis-inner{padding-right:75px}.vis-label.vis-nested-group.vis-group-level-6{background-color:rgba(0,0,0,.3)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-6 .vis-inner{padding-left:90px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-6 .vis-inner{padding-right:90px}.vis-label.vis-nested-group.vis-group-level-7{background-color:rgba(0,0,0,.35)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-7 .vis-inner{padding-left:105px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-7 .vis-inner{padding-right:105px}.vis-label.vis-nested-group.vis-group-level-8{background-color:rgba(0,0,0,.4)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-8 .vis-inner{padding-left:120px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-8 .vis-inner{padding-right:120px}.vis-label.vis-nested-group.vis-group-level-9{background-color:rgba(0,0,0,.45)}.vis-ltr .vis-label.vis-nested-group.vis-group-level-9 .vis-inner{padding-left:135px}.vis-rtl .vis-label.vis-nested-group.vis-group-level-9 .vis-inner{padding-right:135px}.vis-label.vis-nested-group{background-color:rgba(0,0,0,.5)}.vis-ltr .vis-label.vis-nested-group .vis-inner{padding-left:150px}.vis-rtl .vis-label.vis-nested-group .vis-inner{padding-right:150px}.vis-group-level-unknown-but-gte1{border:1px solid red}.vis-label.vis-nesting-group:before{display:inline-block;width:15px}.vis-label.vis-nesting-group.expanded:before{content:"\\25BC"}.vis-label.vis-nesting-group.collapsed:before{content:"\\25B6"}.vis-rtl .vis-label.vis-nesting-group.collapsed:before{content:"\\25C0"}.vis-ltr .vis-label:not(.vis-nesting-group):not(.vis-group-level-0){padding-left:15px}.vis-rtl .vis-label:not(.vis-nesting-group):not(.vis-group-level-0){padding-right:15px}.vis-overlay{height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}');

    function sA(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return aA(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return aA(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function aA(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function lA(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    wE(".vis-labelset{overflow:hidden}.vis-labelset,.vis-labelset .vis-label{box-sizing:border-box;position:relative}.vis-labelset .vis-label{border-bottom:1px solid #bfbfbf;color:#4d4d4d;left:0;top:0;width:100%}.vis-labelset .vis-label.draggable{cursor:pointer}.vis-group-is-dragging{background:rgba(0,0,0,.1)}.vis-labelset .vis-label:last-child{border-bottom:none}.vis-labelset .vis-label .vis-inner{display:inline-block;padding:5px}.vis-labelset .vis-label .vis-inner.vis-hidden{padding:0}");
    var hA = "__ungrouped__",
        uA = "__background__",
        dA = function(t) {
            p_(i, t);
            var e = lA(i);

            function i(t, n) {
                var o;
                yu(this, i), (o = e.call(this)).body = t, o.defaultOptions = {
                    type: null,
                    orientation: { item: "bottom" },
                    align: "auto",
                    stack: !0,
                    stackSubgroups: !0,
                    groupOrderSwap: function(t, e, i) {
                        var n = e.order;
                        e.order = t.order, t.order = n
                    },
                    groupOrder: "order",
                    selectable: !0,
                    multiselect: !1,
                    longSelectPressTime: 251,
                    itemsAlwaysDraggable: { item: !1, range: !1 },
                    editable: { updateTime: !1, updateGroup: !1, add: !1, remove: !1, overrideItems: !1 },
                    groupEditable: { order: !1, add: !1, remove: !1 },
                    snap: _E.snap,
                    onDropObjectOnItem: function(t, e, i) { i(e) },
                    onAdd: function(t, e) { e(t) },
                    onUpdate: function(t, e) { e(t) },
                    onMove: function(t, e) { e(t) },
                    onRemove: function(t, e) { e(t) },
                    onMoving: function(t, e) { e(t) },
                    onAddGroup: function(t, e) { e(t) },
                    onMoveGroup: function(t, e) { e(t) },
                    onRemoveGroup: function(t, e) { e(t) },
                    margin: { item: { horizontal: 10, vertical: 10 }, axis: 20 },
                    showTooltips: !0,
                    tooltip: { followMouse: !1, overflowMethod: "flip", delay: 500 },
                    tooltipOnItemUpdateTime: !1
                }, o.options = SO.extend({}, o.defaultOptions), o.options.rtl = n.rtl, o.options.onTimeout = n.onTimeout, o.conversion = { toScreen: t.util.toScreen, toTime: t.util.toTime }, o.dom = {}, o.props = {}, o.hammer = null;
                var r = i_(o);
                return o.itemsData = null, o.groupsData = null, o.itemsSettingTime = null, o.initialItemSetDrawn = !1, o.userContinueNotBail = null, o.sequentialSelection = !1, o.itemListeners = { add: function(t, e, i) { r._onAdd(e.items), r.options.cluster && r.clusterGenerator.setItems(r.items, { applyOnChangedLevel: !1 }), r.redraw() }, update: function(t, e, i) { r._onUpdate(e.items), r.options.cluster && r.clusterGenerator.setItems(r.items, { applyOnChangedLevel: !1 }), r.redraw() }, remove: function(t, e, i) { r._onRemove(e.items), r.options.cluster && r.clusterGenerator.setItems(r.items, { applyOnChangedLevel: !1 }), r.redraw() } }, o.groupListeners = {
                    add: function(t, e, i) {
                        if (r._onAddGroups(e.items), r.groupsData && r.groupsData.length > 0) {
                            var n, o = r.groupsData.getDataSet();
                            tp(n = o.get()).call(n, (function(t) {
                                if (t.nestedGroups) {
                                    var e;
                                    0 != t.showNested && (t.showNested = !0);
                                    var n = [];
                                    tp(e = t.nestedGroups).call(e, (function(e) {
                                        var i = o.get(e);
                                        i && (i.nestedInGroup = t.id, 0 == t.showNested && (i.visible = !1), n = Xd(n).call(n, i))
                                    })), o.update(n, i)
                                }
                            }))
                        }
                    },
                    update: function(t, e, i) { r._onUpdateGroups(e.items) },
                    remove: function(t, e, i) { r._onRemoveGroups(e.items) }
                }, o.items = {}, o.groups = {}, o.groupIds = [], o.selection = [], o.popup = null, o.popupTimer = null, o.touchParams = {}, o.groupTouchParams = { group: null, isDragging: !1 }, o._create(), o.setOptions(n), o.clusters = [], o
            }
            return xu(i, [{
                key: "_create",
                value: function() {
                    var t, e, i, n, o, r, s, a, l, h, u, d, c, p, f, m = this,
                        v = document.createElement("div");
                    v.className = "vis-itemset", v["vis-itemset"] = this, this.dom.frame = v;
                    var g = document.createElement("div");
                    g.className = "vis-background", v.appendChild(g), this.dom.background = g;
                    var y = document.createElement("div");
                    y.className = "vis-foreground", v.appendChild(y), this.dom.foreground = y;
                    var b = document.createElement("div");
                    b.className = "vis-axis", this.dom.axis = b;
                    var _ = document.createElement("div");
                    _.className = "vis-labelset", this.dom.labelSet = _, this._updateUngrouped();
                    var w = new PP(uA, null, this);
                    w.show(), this.groups[uA] = w, this.hammer = new yE(this.body.dom.centerContainer), this.hammer.on("hammer.input", (function(t) { t.isFirst && m._onTouch(t) })), this.hammer.on("panstart", Hc(t = this._onDragStart).call(t, this)), this.hammer.on("panmove", Hc(e = this._onDrag).call(e, this)), this.hammer.on("panend", Hc(i = this._onDragEnd).call(i, this)), this.hammer.get("pan").set({ threshold: 5, direction: yE.ALL }), this.hammer.get("press").set({ time: 1e4 }), this.hammer.on("tap", Hc(n = this._onSelectItem).call(n, this)), this.hammer.on("press", Hc(o = this._onMultiSelectItem).call(o, this)), this.hammer.get("press").set({ time: 1e4 }), this.hammer.on("doubletap", Hc(r = this._onAddItem).call(r, this)), this.options.rtl ? this.groupHammer = new yE(this.body.dom.rightContainer) : this.groupHammer = new yE(this.body.dom.leftContainer), this.groupHammer.on("tap", Hc(s = this._onGroupClick).call(s, this)), this.groupHammer.on("panstart", Hc(a = this._onGroupDragStart).call(a, this)), this.groupHammer.on("panmove", Hc(l = this._onGroupDrag).call(l, this)), this.groupHammer.on("panend", Hc(h = this._onGroupDragEnd).call(h, this)), this.groupHammer.get("pan").set({ threshold: 5, direction: yE.DIRECTION_VERTICAL }), this.body.dom.centerContainer.addEventListener("mouseover", Hc(u = this._onMouseOver).call(u, this)), this.body.dom.centerContainer.addEventListener("mouseout", Hc(d = this._onMouseOut).call(d, this)), this.body.dom.centerContainer.addEventListener("mousemove", Hc(c = this._onMouseMove).call(c, this)), this.body.dom.centerContainer.addEventListener("contextmenu", Hc(p = this._onDragEnd).call(p, this)), this.body.dom.centerContainer.addEventListener("mousewheel", Hc(f = this._onMouseWheel).call(f, this)), this.show()
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this;
                    if (t) {
                        var i, n;
                        SO.selectiveExtend(["type", "rtl", "align", "order", "stack", "stackSubgroups", "selectable", "multiselect", "sequentialSelection", "multiselectPerGroup", "longSelectPressTime", "groupOrder", "dataAttributes", "template", "groupTemplate", "visibleFrameTemplate", "hide", "snap", "groupOrderSwap", "showTooltips", "tooltip", "tooltipOnItemUpdateTime", "groupHeightMode", "onTimeout"], this.options, t), "itemsAlwaysDraggable" in t && ("boolean" == typeof t.itemsAlwaysDraggable ? (this.options.itemsAlwaysDraggable.item = t.itemsAlwaysDraggable, this.options.itemsAlwaysDraggable.range = !1) : "object" === Rd(t.itemsAlwaysDraggable) && (SO.selectiveExtend(["item", "range"], this.options.itemsAlwaysDraggable, t.itemsAlwaysDraggable), this.options.itemsAlwaysDraggable.item || (this.options.itemsAlwaysDraggable.range = !1))), "sequentialSelection" in t && "boolean" == typeof t.sequentialSelection && (this.options.sequentialSelection = t.sequentialSelection), "orientation" in t && ("string" == typeof t.orientation ? this.options.orientation.item = "top" === t.orientation ? "top" : "bottom" : "object" === Rd(t.orientation) && "item" in t.orientation && (this.options.orientation.item = t.orientation.item)), "margin" in t && ("number" == typeof t.margin ? (this.options.margin.axis = t.margin, this.options.margin.item.horizontal = t.margin, this.options.margin.item.vertical = t.margin) : "object" === Rd(t.margin) && (SO.selectiveExtend(["axis"], this.options.margin, t.margin), "item" in t.margin && ("number" == typeof t.margin.item ? (this.options.margin.item.horizontal = t.margin.item, this.options.margin.item.vertical = t.margin.item) : "object" === Rd(t.margin.item) && SO.selectiveExtend(["horizontal", "vertical"], this.options.margin.item, t.margin.item)))), tp(i = ["locale", "locales"]).call(i, (function(i) { i in t && (e.options[i] = t[i]) })), "editable" in t && ("boolean" == typeof t.editable ? (this.options.editable.updateTime = t.editable, this.options.editable.updateGroup = t.editable, this.options.editable.add = t.editable, this.options.editable.remove = t.editable, this.options.editable.overrideItems = !1) : "object" === Rd(t.editable) && SO.selectiveExtend(["updateTime", "updateGroup", "add", "remove", "overrideItems"], this.options.editable, t.editable)), "groupEditable" in t && ("boolean" == typeof t.groupEditable ? (this.options.groupEditable.order = t.groupEditable, this.options.groupEditable.add = t.groupEditable, this.options.groupEditable.remove = t.groupEditable) : "object" === Rd(t.groupEditable) && SO.selectiveExtend(["order", "add", "remove"], this.options.groupEditable, t.groupEditable));
                        tp(n = ["onDropObjectOnItem", "onAdd", "onUpdate", "onRemove", "onMove", "onMoving", "onAddGroup", "onMoveGroup", "onRemoveGroup"]).call(n, (function(i) {
                            var n = t[i];
                            if (n) {
                                var o;
                                if ("function" != typeof n) throw new Error(Xd(o = "option ".concat(i, " must be a function ")).call(o, i, "(item, callback)"));
                                e.options[i] = n
                            }
                        })), t.cluster ? (qp(this.options, { cluster: t.cluster }), this.clusterGenerator || (this.clusterGenerator = new rA(this)), this.clusterGenerator.setItems(this.items, { applyOnChangedLevel: !1 }), this.markDirty({ refreshItems: !0, restackGroups: !0 }), this.redraw()) : this.clusterGenerator ? (this._detachAllClusters(), this.clusters = [], this.clusterGenerator = null, this.options.cluster = void 0, this.markDirty({ refreshItems: !0, restackGroups: !0 }), this.redraw()) : this.markDirty()
                    }
                }
            }, { key: "markDirty", value: function(t) { this.groupIds = [], t && (t.refreshItems && tp(SO).call(SO, this.items, (function(t) { t.dirty = !0, t.displayed && t.redraw() })), t.restackGroups && tp(SO).call(SO, this.groups, (function(t, e) { e !== uA && (t.stackDirty = !0) }))) } }, { key: "destroy", value: function() { this.clearPopupTimer(), this.hide(), this.setItems(null), this.setGroups(null), this.hammer && this.hammer.destroy(), this.groupHammer && this.groupHammer.destroy(), this.hammer = null, this.body = null, this.conversion = null } }, { key: "hide", value: function() { this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.axis.parentNode && this.dom.axis.parentNode.removeChild(this.dom.axis), this.dom.labelSet.parentNode && this.dom.labelSet.parentNode.removeChild(this.dom.labelSet) } }, { key: "show", value: function() { this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame), this.dom.axis.parentNode || this.body.dom.backgroundVertical.appendChild(this.dom.axis), this.dom.labelSet.parentNode || (this.options.rtl ? this.body.dom.right.appendChild(this.dom.labelSet) : this.body.dom.left.appendChild(this.dom.labelSet)) } }, {
                key: "setPopupTimer",
                value: function(t) {
                    if (this.clearPopupTimer(), t) {
                        var e = this.options.tooltip.delay || "number" == typeof this.options.tooltip.delay ? this.options.tooltip.delay : 500;
                        this.popupTimer = xv((function() { t.show() }), e)
                    }
                }
            }, { key: "clearPopupTimer", value: function() { null != this.popupTimer && (clearTimeout(this.popupTimer), this.popupTimer = null) } }, {
                key: "setSelection",
                value: function(t) {
                    var e;
                    null == t && (t = []), tc(t) || (t = [t]);
                    var i, n = sA(Af(e = this.selection).call(e, (function(e) { return -1 === Cm(t).call(t, e) })));
                    try {
                        for (n.s(); !(i = n.n()).done;) {
                            var o = i.value,
                                r = this.getItemById(o);
                            r && r.unselect()
                        }
                    } catch (t) { n.e(t) } finally { n.f() }
                    this.selection = jd(t);
                    var s, a = sA(t);
                    try {
                        for (a.s(); !(s = a.n()).done;) {
                            var l = s.value,
                                h = this.getItemById(l);
                            h && h.select()
                        }
                    } catch (t) { a.e(t) } finally { a.f() }
                }
            }, { key: "getSelection", value: function() { var t; return Xd(t = this.selection).call(t, []) } }, {
                key: "getVisibleItems",
                value: function() {
                    var t, e, i = this.body.range.getRange();
                    this.options.rtl ? (t = this.body.util.toScreen(i.start), e = this.body.util.toScreen(i.end)) : (e = this.body.util.toScreen(i.start), t = this.body.util.toScreen(i.end));
                    var n = [];
                    for (var o in this.groups)
                        if (this.groups.hasOwnProperty(o)) {
                            var r, s = this.groups[o],
                                a = sA(s.isVisible ? s.visibleItems : []);
                            try {
                                for (a.s(); !(r = a.n()).done;) {
                                    var l = r.value;
                                    this.options.rtl ? l.right < e && l.right + l.width > t && n.push(l.id) : l.left < t && l.left + l.width > e && n.push(l.id)
                                }
                            } catch (t) { a.e(t) } finally { a.f() }
                        }
                    return n
                }
            }, {
                key: "getItemsAtCurrentTime",
                value: function(t) {
                    var e, i;
                    this.options.rtl ? (e = this.body.util.toScreen(t), i = this.body.util.toScreen(t)) : (i = this.body.util.toScreen(t), e = this.body.util.toScreen(t));
                    var n = [];
                    for (var o in this.groups)
                        if (this.groups.hasOwnProperty(o)) {
                            var r, s = this.groups[o],
                                a = sA(s.isVisible ? s.visibleItems : []);
                            try {
                                for (a.s(); !(r = a.n()).done;) {
                                    var l = r.value;
                                    this.options.rtl ? l.right < i && l.right + l.width > e && n.push(l.id) : l.left < e && l.left + l.width > i && n.push(l.id)
                                }
                            } catch (t) { a.e(t) } finally { a.f() }
                        }
                    return n
                }
            }, { key: "getVisibleGroups", value: function() { var t = []; for (var e in this.groups) { if (this.groups.hasOwnProperty(e)) this.groups[e].isVisible && t.push(e) } return t } }, { key: "getItemById", value: function(t) { var e; return this.items[t] || nP(e = this.clusters).call(e, (function(e) { return e.id === t })) } }, {
                key: "_deselect",
                value: function(t) {
                    for (var e = this.selection, i = 0, n = e.length; i < n; i++)
                        if (e[i] == t) { Ap(e).call(e, i, 1); break }
                }
            }, {
                key: "redraw",
                value: function() {
                    var t = this,
                        e = this.options.margin,
                        i = this.body.range,
                        n = SO.option.asSize,
                        o = this.options,
                        r = o.orientation.item,
                        s = !1,
                        a = this.dom.frame;
                    this.props.top = this.body.domProps.top.height + this.body.domProps.border.top, this.options.rtl ? this.props.right = this.body.domProps.right.width + this.body.domProps.border.right : this.props.left = this.body.domProps.left.width + this.body.domProps.border.left, a.className = "vis-itemset", this.options.cluster && this._clusterItems(), s = this._orderGroups() || s;
                    var l = i.end - i.start,
                        h = l != this.lastVisibleInterval || this.props.width != this.props.lastWidth,
                        u = i.start != this.lastRangeStart,
                        d = o.stack != this.lastStack,
                        c = o.stackSubgroups != this.lastStackSubgroups,
                        p = h || u || d || c;
                    this.lastVisibleInterval = l, this.lastRangeStart = i.start, this.lastStack = o.stack, this.lastStackSubgroups = o.stackSubgroups, this.props.lastWidth = this.props.width;
                    var f = this._firstGroup(),
                        m = { item: e.item, axis: e.axis },
                        v = { item: e.item, axis: e.item.vertical / 2 },
                        g = 0,
                        y = e.axis + e.item.vertical;
                    this.groups[uA].redraw(i, v, p);
                    var b = {},
                        _ = 0;
                    return tp(SO).call(SO, this.groups, (function(t, e) {
                        if (e !== uA) {
                            var n = t == f ? m : v;
                            b[e] = t.redraw(i, n, p, !0), _ = b[e].length
                        }
                    })), _ > 0 && function() {
                        for (var e = {}, i = function(t) { tp(SO).call(SO, b, (function(i, n) { e[n] = i[t]() })) }, n = 0; n < _; n++) i(n);
                        tp(SO).call(SO, t.groups, (function(t, i) {
                            if (i !== uA) {
                                var n = e[i];
                                s = n || s, g += t.height
                            }
                        })), g = Math.max(g, y)
                    }(), g = Math.max(g, y), a.style.height = n(g), this.props.width = a.offsetWidth, this.props.height = g, this.dom.axis.style.top = n("top" == r ? this.body.domProps.top.height + this.body.domProps.border.top : this.body.domProps.top.height + this.body.domProps.centerContainer.height), this.options.rtl ? this.dom.axis.style.right = "0" : this.dom.axis.style.left = "0", this.hammer.get("press").set({ time: this.options.longSelectPressTime }), this.initialItemSetDrawn = !0, s = this._isResized() || s
                }
            }, {
                key: "_firstGroup",
                value: function() {
                    var t = "top" == this.options.orientation.item ? 0 : this.groupIds.length - 1,
                        e = this.groupIds[t];
                    return this.groups[e] || this.groups[hA] || null
                }
            }, {
                key: "_updateUngrouped",
                value: function() {
                    var t, e, i = this.groups[hA];
                    if (this.groupsData) {
                        if (i)
                            for (e in i.dispose(), delete this.groups[hA], this.items)
                                if (this.items.hasOwnProperty(e)) {
                                    (t = this.items[e]).parent && t.parent.remove(t);
                                    var n = this.getGroupId(t.data),
                                        o = this.groups[n];
                                    o && o.add(t) || t.hide()
                                }
                    } else if (!i) {
                        for (e in i = new OP(null, null, this), this.groups[hA] = i, this.items) this.items.hasOwnProperty(e) && (t = this.items[e], i.add(t));
                        i.show()
                    }
                }
            }, { key: "getLabelSet", value: function() { return this.dom.labelSet } }, {
                key: "setItems",
                value: function(t) {
                    this.itemsSettingTime = new Date;
                    var e, i = this,
                        n = this.itemsData;
                    if (t) {
                        if (!gO(t)) throw new TypeError("Data must implement the interface of DataSet or DataView");
                        this.itemsData = wO(t)
                    } else this.itemsData = null;
                    if (n && (tp(SO).call(SO, this.itemListeners, (function(t, e) { n.off(e, t) })), n.dispose(), e = n.getIds(), this._onRemove(e)), this.itemsData) {
                        var o = this.id;
                        tp(SO).call(SO, this.itemListeners, (function(t, e) { i.itemsData.on(e, t, o) })), e = this.itemsData.getIds(), this._onAdd(e), this._updateUngrouped()
                    }
                    this.body.emitter.emit("_change", { queue: !0 })
                }
            }, { key: "getItems", value: function() { return null != this.itemsData ? this.itemsData.rawDS : null } }, {
                key: "setGroups",
                value: function(t) {
                    var e, i = this;
                    if (this.groupsData && (tp(SO).call(SO, this.groupListeners, (function(t, e) { i.groupsData.off(e, t) })), e = this.groupsData.getIds(), this.groupsData = null, this._onRemoveGroups(e)), t) {
                        if (!gO(t)) throw new TypeError("Data must implement the interface of DataSet or DataView");
                        this.groupsData = t
                    } else this.groupsData = null;
                    if (this.groupsData) {
                        var n, o = this.groupsData.getDataSet();
                        tp(n = o.get()).call(n, (function(t) {
                            var e;
                            t.nestedGroups && tp(e = t.nestedGroups).call(e, (function(e) {
                                var i = o.get(e);
                                i.nestedInGroup = t.id, 0 == t.showNested && (i.visible = !1), o.update(i)
                            }))
                        }));
                        var r = this.id;
                        tp(SO).call(SO, this.groupListeners, (function(t, e) { i.groupsData.on(e, t, r) })), e = this.groupsData.getIds(), this._onAddGroups(e)
                    }
                    this._updateUngrouped(), this._order(), this.options.cluster && (this.clusterGenerator.updateData(), this._clusterItems(), this.markDirty({ refreshItems: !0, restackGroups: !0 })), this.body.emitter.emit("_change", { queue: !0 })
                }
            }, { key: "getGroups", value: function() { return this.groupsData } }, {
                key: "removeItem",
                value: function(t) {
                    var e = this,
                        i = this.itemsData.get(t);
                    i && this.options.onRemove(i, (function(i) { i && e.itemsData.remove(t) }))
                }
            }, { key: "_getType", value: function(t) { return t.type || this.options.type || (t.end ? "range" : "box") } }, { key: "getGroupId", value: function(t) { return "background" == this._getType(t) && null == t.group ? uA : this.groupsData ? t.group : hA } }, {
                key: "_onUpdate",
                value: function(t) {
                    var e = this,
                        n = this;
                    tp(t).call(t, (function(t) {
                        var o, r = n.itemsData.get(t),
                            s = n.items[t],
                            a = r ? n._getType(r) : null,
                            l = i.types[a];
                        if (s && (l && s instanceof l ? n._updateItem(s, r) : (o = s.selected, n._removeItem(s), s = null)), !s && r) {
                            if (!l) throw new TypeError('Unknown item type "'.concat(a, '"'));
                            (s = new l(r, n.conversion, n.options)).id = t, n._addItem(s), o && (e.selection.push(t), s.select())
                        }
                    })), this._order(), this.options.cluster && (this.clusterGenerator.setItems(this.items, { applyOnChangedLevel: !1 }), this._clusterItems()), this.body.emitter.emit("_change", { queue: !0 })
                }
            }, {
                key: "_onRemove",
                value: function(t) {
                    var e = 0,
                        i = this;
                    tp(t).call(t, (function(t) {
                        var n = i.items[t];
                        n && (e++, i._removeItem(n))
                    })), e && (this._order(), this.body.emitter.emit("_change", { queue: !0 }))
                }
            }, { key: "_order", value: function() { tp(SO).call(SO, this.groups, (function(t) { t.order() })) } }, { key: "_onUpdateGroups", value: function(t) { this._onAddGroups(t) } }, {
                key: "_onAddGroups",
                value: function(t) {
                    var e = this;
                    tp(t).call(t, (function(t) {
                        var i = e.groupsData.get(t),
                            n = e.groups[t];
                        if (n) n.setData(i);
                        else {
                            if (t == hA || t == uA) throw new Error("Illegal group id. ".concat(t, " is a reserved id."));
                            var o = zm(e.options);
                            for (var r in SO.extend(o, { height: null }), n = new OP(t, i, e), e.groups[t] = n, e.items)
                                if (e.items.hasOwnProperty(r)) {
                                    var s = e.items[r];
                                    s.data.group == t && n.add(s)
                                }
                            n.order(), n.show()
                        }
                    })), this.body.emitter.emit("_change", { queue: !0 })
                }
            }, {
                key: "_onRemoveGroups",
                value: function(t) {
                    var e = this;
                    tp(t).call(t, (function(t) {
                        var i = e.groups[t];
                        i && (i.dispose(), delete e.groups[t])
                    })), this.options.cluster && (this.clusterGenerator.updateData(), this._clusterItems()), this.markDirty({ restackGroups: !!this.options.cluster }), this.body.emitter.emit("_change", { queue: !0 })
                }
            }, {
                key: "_orderGroups",
                value: function() {
                    if (this.groupsData) {
                        var t = this.groupsData.getIds({ order: this.options.groupOrder });
                        t = this._orderNestedGroups(t);
                        var e = !SO.equalArray(t, this.groupIds);
                        if (e) {
                            var i = this.groups;
                            tp(t).call(t, (function(t) { i[t].hide() })), tp(t).call(t, (function(t) { i[t].show() })), this.groupIds = t
                        }
                        return e
                    }
                    return !1
                }
            }, {
                key: "_orderNestedGroups",
                value: function(t) {
                    var e = this;
                    return function t(e, i) {
                        var n = [];
                        return tp(i).call(i, (function(i) {
                            if (n.push(i), e.groupsData.get(i).nestedGroups) {
                                var o, r = lc(o = e.groupsData.get({ filter: function(t) { return t.nestedInGroup == i }, order: e.options.groupOrder })).call(o, (function(t) { return t.id }));
                                n = Xd(n).call(n, t(e, r))
                            }
                        })), n
                    }(this, Af(t).call(t, (function(t) { return !e.groupsData.get(t).nestedInGroup })))
                }
            }, {
                key: "_addItem",
                value: function(t) {
                    this.items[t.id] = t;
                    var e = this.getGroupId(t.data),
                        i = this.groups[e];
                    i ? i && i.data && i.data.showNested && (t.groupShowing = !0) : t.groupShowing = !1, i && i.add(t)
                }
            }, {
                key: "_updateItem",
                value: function(t, e) {
                    t.setData(e);
                    var i = this.getGroupId(t.data),
                        n = this.groups[i];
                    n ? n && n.data && n.data.showNested && (t.groupShowing = !0) : t.groupShowing = !1
                }
            }, {
                key: "_removeItem",
                value: function(t) {
                    var e, i;
                    t.hide(), delete this.items[t.id];
                    var n = Cm(e = this.selection).call(e, t.id); - 1 != n && Ap(i = this.selection).call(i, n, 1), t.parent && t.parent.remove(t), null != this.popup && this.popup.hide()
                }
            }, { key: "_constructByEndArray", value: function(t) { for (var e = [], i = 0; i < t.length; i++) t[i] instanceof HP && e.push(t[i]); return e } }, { key: "_onTouch", value: function(t) { this.touchParams.item = this.itemFromTarget(t), this.touchParams.dragLeftItem = t.target.dragLeftItem || !1, this.touchParams.dragRightItem = t.target.dragRightItem || !1, this.touchParams.itemProps = null } }, {
                key: "_getGroupIndex",
                value: function(t) {
                    for (var e = 0; e < this.groupIds.length; e++)
                        if (t == this.groupIds[e]) return e
                }
            }, {
                key: "_onDragStart",
                value: function(t) {
                    var e = this;
                    if (!this.touchParams.itemIsDragging) {
                        var i, n = this.touchParams.item || null,
                            o = this;
                        if (n && (n.selected || this.options.itemsAlwaysDraggable.item)) {
                            if (this.options.editable.overrideItems && !this.options.editable.updateTime && !this.options.editable.updateGroup) return;
                            if (null != n.editable && !n.editable.updateTime && !n.editable.updateGroup && !this.options.editable.overrideItems) return;
                            var r = this.touchParams.dragLeftItem,
                                s = this.touchParams.dragRightItem;
                            if (this.touchParams.itemIsDragging = !0, this.touchParams.selectedItem = n, r) i = { item: r, initialX: t.center.x, dragLeft: !0, data: this._cloneItemData(n.data) }, this.touchParams.itemProps = [i];
                            else if (s) i = { item: s, initialX: t.center.x, dragRight: !0, data: this._cloneItemData(n.data) }, this.touchParams.itemProps = [i];
                            else if (this.options.editable.add && (t.srcEvent.ctrlKey || t.srcEvent.metaKey)) this._onDragStartAddItem(t);
                            else {
                                this.groupIds.length < 1 && this.redraw();
                                var a = this._getGroupIndex(n.data.group),
                                    l = this.options.itemsAlwaysDraggable.item && !n.selected ? [n.id] : this.getSelection();
                                this.touchParams.itemProps = lc(l).call(l, (function(i) {
                                    var n = o.items[i],
                                        r = o._getGroupIndex(n.data.group);
                                    return { item: n, initialX: t.center.x, groupOffset: a - r, data: e._cloneItemData(n.data) }
                                }))
                            }
                            t.stopPropagation()
                        } else this.options.editable.add && (t.srcEvent.ctrlKey || t.srcEvent.metaKey) && this._onDragStartAddItem(t)
                    }
                }
            }, {
                key: "_onDragStartAddItem",
                value: function(t) {
                    var e = this.options.snap || null,
                        i = this.dom.frame.getBoundingClientRect(),
                        n = this.options.rtl ? i.right - t.center.x + 10 : t.center.x - i.left - 10,
                        o = this.body.util.toTime(n),
                        r = this.body.util.getScale(),
                        s = this.body.util.getStep(),
                        a = e ? e(o, r, s) : o,
                        l = { type: "range", start: a, end: a, content: "new item" },
                        h = qT();
                    l[this.itemsData.idProp] = h;
                    var u = this.groupFromTarget(t);
                    u && (l.group = u.groupId);
                    var d = new HP(l, this.conversion, this.options);
                    d.id = h, d.data = this._cloneItemData(l), this._addItem(d), this.touchParams.selectedItem = d;
                    var c = { item: d, initialX: t.center.x, data: d.data };
                    this.options.rtl ? c.dragLeft = !0 : c.dragRight = !0, this.touchParams.itemProps = [c], t.stopPropagation()
                }
            }, {
                key: "_onDrag",
                value: function(t) {
                    var e = this;
                    if (null != this.popup && this.options.showTooltips && !this.popup.hidden) {
                        var i = this.body.dom.centerContainer,
                            n = i.getBoundingClientRect();
                        this.popup.setPosition(t.center.x - n.left + i.offsetLeft, t.center.y - n.top + i.offsetTop), this.popup.show()
                    }
                    if (this.touchParams.itemProps) {
                        var o;
                        t.stopPropagation();
                        var r = this,
                            s = this.options.snap || null,
                            a = this.body.dom.root.offsetLeft,
                            l = this.options.rtl ? a + this.body.domProps.right.width : a + this.body.domProps.left.width,
                            h = this.body.util.getScale(),
                            u = this.body.util.getStep(),
                            d = this.touchParams.selectedItem,
                            c = (this.options.editable.overrideItems || null == d.editable) && this.options.editable.updateGroup || !this.options.editable.overrideItems && null != d.editable && d.editable.updateGroup,
                            p = null;
                        if (c && d && null != d.data.group) {
                            var f = r.groupFromTarget(t);
                            f && (p = this._getGroupIndex(f.groupId))
                        }
                        tp(o = this.touchParams.itemProps).call(o, (function(i) {
                            var n, o, a, f, m, v = r.body.util.toTime(t.center.x - l),
                                g = r.body.util.toTime(i.initialX - l);
                            n = e.options.rtl ? -(v - g) : v - g;
                            var y = e._cloneItemData(i.item.data);
                            if (null == i.item.editable || i.item.editable.updateTime || i.item.editable.updateGroup || r.options.editable.overrideItems) {
                                if ((e.options.editable.overrideItems || null == d.editable) && e.options.editable.updateTime || !e.options.editable.overrideItems && null != d.editable && d.editable.updateTime)
                                    if (i.dragLeft) e.options.rtl ? null != y.end && (a = SO.convert(i.data.end, "Date"), m = new Date(a.valueOf() + n), y.end = s ? s(m, h, u) : m) : null != y.start && (o = SO.convert(i.data.start, "Date"), f = new Date(o.valueOf() + n), y.start = s ? s(f, h, u) : f);
                                    else if (i.dragRight) e.options.rtl ? null != y.start && (o = SO.convert(i.data.start, "Date"), f = new Date(o.valueOf() + n), y.start = s ? s(f, h, u) : f) : null != y.end && (a = SO.convert(i.data.end, "Date"), m = new Date(a.valueOf() + n), y.end = s ? s(m, h, u) : m);
                                else if (null != y.start)
                                    if (o = SO.convert(i.data.start, "Date").valueOf(), f = new Date(o + n), null != y.end) {
                                        var b = (a = SO.convert(i.data.end, "Date")).valueOf() - o.valueOf();
                                        y.start = s ? s(f, h, u) : f, y.end = new Date(y.start.valueOf() + b)
                                    } else y.start = s ? s(f, h, u) : f;
                                if (c && !i.dragLeft && !i.dragRight && null != p && null != y.group) {
                                    var _ = p - i.groupOffset;
                                    _ = Math.max(0, _), _ = Math.min(r.groupIds.length - 1, _), y.group = r.groupIds[_]
                                }
                                y = e._cloneItemData(y), r.options.onMoving(y, (function(t) { t && i.item.setData(e._cloneItemData(t, "Date")) }))
                            }
                        })), this.body.emitter.emit("_change")
                    }
                }
            }, {
                key: "_moveToGroup",
                value: function(t, e) {
                    var i = this.groups[e];
                    if (i && i.groupId != t.data.group) {
                        var n = t.parent;
                        n.remove(t), n.order(), t.data.group = i.groupId, i.add(t), i.order()
                    }
                }
            }, {
                key: "_onDragEnd",
                value: function(t) {
                    var e = this;
                    if (this.touchParams.itemIsDragging = !1, this.touchParams.itemProps) {
                        t.stopPropagation();
                        var i = this,
                            n = this.touchParams.itemProps;
                        this.touchParams.itemProps = null, tp(n).call(n, (function(t) {
                            var n = t.item.id;
                            if (null != i.itemsData.get(n)) {
                                var o = e._cloneItemData(t.item.data);
                                i.options.onMove(o, (function(o) { o ? (o[e.itemsData.idProp] = n, e.itemsData.update(o)) : (t.item.setData(t.data), i.body.emitter.emit("_change")) }))
                            } else i.options.onAdd(t.item.data, (function(e) { i._removeItem(t.item), e && i.itemsData.add(e), i.body.emitter.emit("_change") }))
                        }))
                    }
                }
            }, {
                key: "_onGroupClick",
                value: function(t) {
                    var e = this,
                        i = this.groupFromTarget(t);
                    xv((function() { e.toggleGroupShowNested(i) }), 1)
                }
            }, {
                key: "toggleGroupShowNested",
                value: function(t) {
                    var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    if (t && t.nestedGroups) {
                        var n = this.groupsData.getDataSet();
                        t.showNested = null != i ? !!i : !t.showNested;
                        var o = n.get(t.groupId);
                        o.showNested = t.showNested;
                        for (var r = t.nestedGroups, s = r; s.length > 0;) {
                            var a = s;
                            s = [];
                            for (var l = 0; l < a.length; l++) {
                                var h = n.get(a[l]);
                                h.nestedGroups && (s = Xd(s).call(s, h.nestedGroups))
                            }
                            s.length > 0 && (r = Xd(r).call(r, s))
                        }
                        var u = lc(e = n.get(r)).call(e, (function(t) { return null == t.visible && (t.visible = !0), t.visible = !!o.showNested, t }));
                        n.update(Xd(u).call(u, o)), o.showNested ? (SO.removeClassName(t.dom.label, "collapsed"), SO.addClassName(t.dom.label, "expanded")) : (SO.removeClassName(t.dom.label, "expanded"), SO.addClassName(t.dom.label, "collapsed"))
                    }
                }
            }, { key: "toggleGroupDragClassName", value: function(t) { t.dom.label.classList.toggle("vis-group-is-dragging"), t.dom.foreground.classList.toggle("vis-group-is-dragging") } }, { key: "_onGroupDragStart", value: function(t) { this.groupTouchParams.isDragging || this.options.groupEditable.order && (this.groupTouchParams.group = this.groupFromTarget(t), this.groupTouchParams.group && (t.stopPropagation(), this.groupTouchParams.isDragging = !0, this.toggleGroupDragClassName(this.groupTouchParams.group), this.groupTouchParams.originalOrder = this.groupsData.getIds({ order: this.options.groupOrder }))) } }, {
                key: "_onGroupDrag",
                value: function(t) {
                    if (this.options.groupEditable.order && this.groupTouchParams.group) {
                        t.stopPropagation();
                        var e = this.groupsData.getDataSet(),
                            i = this.groupFromTarget(t);
                        if (i && i.height != this.groupTouchParams.group.height) {
                            var n = i.top < this.groupTouchParams.group.top,
                                o = t.center ? t.center.y : t.clientY,
                                r = i.dom.foreground.getBoundingClientRect(),
                                s = this.groupTouchParams.group.height;
                            if (n) { if (r.top + s < o) return } else { var a = i.height; if (r.top + a - s > o) return }
                        }
                        if (i && i != this.groupTouchParams.group) {
                            var l = e.get(i.groupId),
                                h = e.get(this.groupTouchParams.group.groupId);
                            h && l && (this.options.groupOrderSwap(h, l, e), e.update(h), e.update(l));
                            var u = e.getIds({ order: this.options.groupOrder });
                            if (!SO.equalArray(u, this.groupTouchParams.originalOrder))
                                for (var d = this.groupTouchParams.originalOrder, c = this.groupTouchParams.group.groupId, p = Math.min(d.length, u.length), f = 0, m = 0, v = 0; f < p;) {
                                    for (; f + m < p && f + v < p && u[f + m] == d[f + v];) f++;
                                    if (f + m >= p) break;
                                    if (u[f + m] == c) m = 1;
                                    else if (d[f + v] == c) v = 1;
                                    else {
                                        var g = Cm(u).call(u, d[f + v]),
                                            y = e.get(u[f + m]),
                                            b = e.get(d[f + v]);
                                        this.options.groupOrderSwap(y, b, e), e.update(y), e.update(b);
                                        var _ = u[f + m];
                                        u[f + m] = d[f + v], u[g] = _, f++
                                    }
                                }
                        }
                    }
                }
            }, {
                key: "_onGroupDragEnd",
                value: function(t) {
                    if (this.groupTouchParams.isDragging = !1, this.options.groupEditable.order && this.groupTouchParams.group) {
                        t.stopPropagation();
                        var e = this,
                            i = e.groupTouchParams.group.groupId,
                            n = e.groupsData.getDataSet(),
                            o = SO.extend({}, n.get(i));
                        e.options.onMoveGroup(o, (function(t) {
                            if (t) t[n._idProp] = i, n.update(t);
                            else {
                                var o = n.getIds({ order: e.options.groupOrder });
                                if (!SO.equalArray(o, e.groupTouchParams.originalOrder))
                                    for (var r = e.groupTouchParams.originalOrder, s = Math.min(r.length, o.length), a = 0; a < s;) {
                                        for (; a < s && o[a] == r[a];) a++;
                                        if (a >= s) break;
                                        var l = Cm(o).call(o, r[a]),
                                            h = n.get(o[a]),
                                            u = n.get(r[a]);
                                        e.options.groupOrderSwap(h, u, n), n.update(h), n.update(u);
                                        var d = o[a];
                                        o[a] = r[a], o[l] = d, a++
                                    }
                            }
                        })), e.body.emitter.emit("groupDragged", { groupId: i }), this.toggleGroupDragClassName(this.groupTouchParams.group), this.groupTouchParams.group = null
                    }
                }
            }, {
                key: "_onSelectItem",
                value: function(t) {
                    if (this.options.selectable) {
                        var e = t.srcEvent && (t.srcEvent.ctrlKey || t.srcEvent.metaKey),
                            i = t.srcEvent && t.srcEvent.shiftKey;
                        if (e || i) this._onMultiSelectItem(t);
                        else {
                            var n = this.getSelection(),
                                o = this.itemFromTarget(t),
                                r = o && o.selectable ? [o.id] : [];
                            this.setSelection(r);
                            var s = this.getSelection();
                            (s.length > 0 || n.length > 0) && this.body.emitter.emit("select", { items: s, event: t })
                        }
                    }
                }
            }, {
                key: "_onMouseOver",
                value: function(t) {
                    var e = this.itemFromTarget(t);
                    if (e && e !== this.itemFromRelatedTarget(t)) {
                        var i = e.getTitle();
                        if (this.options.showTooltips && i) {
                            null == this.popup && (this.popup = new GP(this.body.dom.root, this.options.tooltip.overflowMethod || "flip")), this.popup.setText(i);
                            var n = this.body.dom.centerContainer,
                                o = n.getBoundingClientRect();
                            this.popup.setPosition(t.clientX - o.left + n.offsetLeft, t.clientY - o.top + n.offsetTop), this.setPopupTimer(this.popup)
                        } else this.clearPopupTimer(), null != this.popup && this.popup.hide();
                        this.body.emitter.emit("itemover", { item: e.id, event: t })
                    }
                }
            }, {
                key: "_onMouseOut",
                value: function(t) {
                    var e = this.itemFromTarget(t);
                    e && (e !== this.itemFromRelatedTarget(t) && (this.clearPopupTimer(), null != this.popup && this.popup.hide(), this.body.emitter.emit("itemout", { item: e.id, event: t })))
                }
            }, {
                key: "_onMouseMove",
                value: function(t) {
                    if (this.itemFromTarget(t) && (null != this.popupTimer && this.setPopupTimer(this.popup), this.options.showTooltips && this.options.tooltip.followMouse && this.popup && !this.popup.hidden)) {
                        var e = this.body.dom.centerContainer,
                            i = e.getBoundingClientRect();
                        this.popup.setPosition(t.clientX - i.left + e.offsetLeft, t.clientY - i.top + e.offsetTop), this.popup.show()
                    }
                }
            }, { key: "_onMouseWheel", value: function(t) { this.touchParams.itemIsDragging && this._onDragEnd(t) } }, {
                key: "_onUpdateItem",
                value: function(t) {
                    if (this.options.selectable && (this.options.editable.updateTime || this.options.editable.updateGroup)) {
                        var e = this;
                        if (t) {
                            var i = e.itemsData.get(t.id);
                            this.options.onUpdate(i, (function(t) { t && e.itemsData.update(t) }))
                        }
                    }
                }
            }, {
                key: "_onDropObjectOnItem",
                value: function(t) {
                    var e = this.itemFromTarget(t),
                        i = JSON.parse(t.dataTransfer.getData("text"));
                    this.options.onDropObjectOnItem(i, e)
                }
            }, {
                key: "_onAddItem",
                value: function(t) {
                    if (this.options.selectable && this.options.editable.add) {
                        var e, i, n = this,
                            o = this.options.snap || null,
                            r = this.dom.frame.getBoundingClientRect(),
                            s = this.options.rtl ? r.right - t.center.x : t.center.x - r.left,
                            a = this.body.util.toTime(s),
                            l = this.body.util.getScale(),
                            h = this.body.util.getStep();
                        "drop" == t.type ? ((i = JSON.parse(t.dataTransfer.getData("text"))).content = i.content ? i.content : "new item", i.start = i.start ? i.start : o ? o(a, l, h) : a, i.type = i.type || "box", i[this.itemsData.idProp] = i.id || qT(), "range" != i.type || i.end || (e = this.body.util.toTime(s + this.props.width / 5), i.end = o ? o(e, l, h) : e)) : ((i = { start: o ? o(a, l, h) : a, content: "new item" })[this.itemsData.idProp] = qT(), "range" === this.options.type && (e = this.body.util.toTime(s + this.props.width / 5), i.end = o ? o(e, l, h) : e));
                        var u = this.groupFromTarget(t);
                        u && (i.group = u.groupId), i = this._cloneItemData(i), this.options.onAdd(i, (function(e) { e && (n.itemsData.add(e), "drop" == t.type && n.setSelection([e.id])) }))
                    }
                }
            }, {
                key: "_onMultiSelectItem",
                value: function(t) {
                    var e = this;
                    if (this.options.selectable) {
                        var n = this.itemFromTarget(t);
                        if (n) {
                            var o = this.options.multiselect ? this.getSelection() : [];
                            if ((t.srcEvent && t.srcEvent.shiftKey || !1 || this.options.sequentialSelection) && this.options.multiselect) {
                                var r = this.itemsData.get(n.id).group,
                                    s = void 0;
                                this.options.multiselectPerGroup && o.length > 0 && (s = this.itemsData.get(o[0]).group), this.options.multiselectPerGroup && null != s && s != r || o.push(n.id);
                                var a = i._getItemRange(this.itemsData.get(o));
                                if (!this.options.multiselectPerGroup || s == r)
                                    for (var l in o = [], this.items)
                                        if (this.items.hasOwnProperty(l)) {
                                            var h = this.items[l],
                                                u = h.data.start,
                                                d = void 0 !== h.data.end ? h.data.end : u;
                                            !(u >= a.min && d <= a.max) || this.options.multiselectPerGroup && s != this.itemsData.get(h.id).group || h instanceof BP || o.push(h.id)
                                        }
                            } else { var c = Cm(o).call(o, n.id); - 1 == c ? o.push(n.id) : Ap(o).call(o, c, 1) }
                            var p = Af(o).call(o, (function(t) { return e.getItemById(t).selectable }));
                            this.setSelection(p), this.body.emitter.emit("select", { items: this.getSelection(), event: t })
                        }
                    }
                }
            }, {
                key: "itemFromElement",
                value: function(t) {
                    for (var e = t; e;) {
                        if (e.hasOwnProperty("vis-item")) return e["vis-item"];
                        e = e.parentNode
                    }
                    return null
                }
            }, { key: "itemFromTarget", value: function(t) { return this.itemFromElement(t.target) } }, { key: "itemFromRelatedTarget", value: function(t) { return this.itemFromElement(t.relatedTarget) } }, {
                key: "groupFromTarget",
                value: function(t) {
                    var e = t.center ? t.center.y : t.clientY,
                        i = this.groupIds;
                    i.length <= 0 && this.groupsData && (i = this.groupsData.getIds({ order: this.options.groupOrder }));
                    for (var n = 0; n < i.length; n++) {
                        var o = i[n],
                            r = this.groups[o],
                            s = r.dom.foreground,
                            a = s.getBoundingClientRect();
                        if (e >= a.top && e < a.top + s.offsetHeight) return r;
                        if ("top" === this.options.orientation.item) { if (n === this.groupIds.length - 1 && e > a.top) return r } else if (0 === n && e < a.top + s.offset) return r
                    }
                    return null
                }
            }, { key: "_cloneItemData", value: function(t, e) { var i = SO.extend({}, t); return e || (e = this.itemsData.type), null != i.start && (i.start = SO.convert(i.start, e && e.start || "Date")), null != i.end && (i.end = SO.convert(i.end, e && e.end || "Date")), i } }, {
                key: "_clusterItems",
                value: function() {
                    if (this.options.cluster) {
                        var t = this.body.range.conversion(this.body.domProps.center.width).scale,
                            e = this.clusterGenerator.getClusters(this.clusters, t, this.options.cluster);
                        if (this.clusters != e) {
                            if (this._detachAllClusters(), e) {
                                var i, n = sA(e);
                                try { for (n.s(); !(i = n.n()).done;) { i.value.attach() } } catch (t) { n.e(t) } finally { n.f() }
                                this.clusters = e
                            }
                            this._updateClusters(e)
                        }
                    }
                }
            }, { key: "_detachAllClusters", value: function() { if (this.options.cluster && this.clusters && this.clusters.length) { var t, e = sA(this.clusters); try { for (e.s(); !(t = e.n()).done;) { t.value.detach() } } catch (t) { e.e(t) } finally { e.f() } } } }, {
                key: "_updateClusters",
                value: function(t) {
                    if (this.clusters && this.clusters.length) {
                        var e, i, n = new sC(lc(t).call(t, (function(t) { return t.id }))),
                            o = !1,
                            r = sA(Af(e = this.clusters).call(e, (function(t) { return !n.has(t.id) })));
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var s, a, l = i.value,
                                    h = Cm(s = this.selection).call(s, l.id);
                                if (-1 !== h) l.unselect(), Ap(a = this.selection).call(a, h, 1), o = !0
                            }
                        } catch (t) { r.e(t) } finally { r.f() }
                        if (o) {
                            var u = this.getSelection();
                            this.body.emitter.emit("select", { items: u, event: event })
                        }
                    }
                    this.clusters = t || []
                }
            }], [{
                key: "_getItemRange",
                value: function(t) {
                    var e = null,
                        i = null;
                    return tp(t).call(t, (function(t) {
                        (null == i || t.start < i) && (i = t.start), null != t.end ? (null == e || t.end > e) && (e = t.end) : (null == e || t.start > e) && (e = t.start)
                    })), { min: i, max: e }
                }
            }, {
                key: "itemSetFromTarget",
                value: function(t) {
                    for (var e = t.target; e;) {
                        if (e.hasOwnProperty("vis-itemset")) return e["vis-itemset"];
                        e = e.parentNode
                    }
                    return null
                }
            }]), i
        }(jO);
    dA.types = { background: BP, box: FP, range: HP, point: jP }, dA.prototype._onAdd = dA.prototype._onUpdate;
    var cA, pA = !1,
        fA = "background: #FFeeee; color: #dd0000",
        mA = function() {
            function t() { yu(this, t) }
            return xu(t, null, [{ key: "validate", value: function(e, i, n) { pA = !1, cA = i; var o = i; return void 0 !== n && (o = i[n]), t.parse(e, o, []), pA } }, { key: "parse", value: function(e, i, n) { for (var o in e) e.hasOwnProperty(o) && t.check(o, e, i, n) } }, {
                key: "check",
                value: function(e, i, n, o) {
                    if (void 0 !== n[e] || void 0 !== n.__any__) {
                        var r = e,
                            s = !0;
                        void 0 === n[e] && void 0 !== n.__any__ && (r = "__any__", s = "object" === t.getType(i[e]));
                        var a = n[r];
                        s && void 0 !== a.__type__ && (a = a.__type__), t.checkFields(e, i, n, r, a, o)
                    } else t.getSuggestion(e, n, o)
                }
            }, {
                key: "checkFields",
                value: function(e, i, n, o, r, s) {
                    var a = function(i) { console.log("%c" + i + t.printLocation(s, e), fA) },
                        l = t.getType(i[e]),
                        h = r[l];
                    void 0 !== h ? "array" === t.getType(h) && -1 === Cm(h).call(h, i[e]) ? (a('Invalid option detected in "' + e + '". Allowed values are:' + t.print(h) + ' not "' + i[e] + '". '), pA = !0) : "object" === l && "__any__" !== o && (s = SO.copyAndExtendArray(s, e), t.parse(i[e], n[o], s)) : void 0 === r.any && (a('Invalid type received for "' + e + '". Expected: ' + t.print(pc(r)) + ". Received [" + l + '] "' + i[e] + '"'), pA = !0)
                }
            }, { key: "getType", value: function(t) { var e = Rd(t); return "object" === e ? null === t ? "null" : t instanceof Boolean ? "boolean" : t instanceof Number ? "number" : t instanceof String ? "string" : tc(t) ? "array" : t instanceof Date ? "date" : void 0 !== t.nodeType ? "dom" : !0 === t._isAMomentObject ? "moment" : "object" : "number" === e ? "number" : "boolean" === e ? "boolean" : "string" === e ? "string" : void 0 === e ? "undefined" : e } }, {
                key: "getSuggestion",
                value: function(e, i, n) {
                    var o, r = t.findInOptions(e, i, n, !1),
                        s = t.findInOptions(e, cA, [], !0);
                    o = void 0 !== r.indexMatch ? " in " + t.printLocation(r.path, e, "") + 'Perhaps it was incomplete? Did you mean: "' + r.indexMatch + '"?\n\n' : s.distance <= 4 && r.distance > s.distance ? " in " + t.printLocation(r.path, e, "") + "Perhaps it was misplaced? Matching option found at: " + t.printLocation(s.path, s.closestMatch, "") : r.distance <= 8 ? '. Did you mean "' + r.closestMatch + '"?' + t.printLocation(r.path, e) : ". Did you mean one of these: " + t.print(pc(i)) + t.printLocation(n, e), console.log('%cUnknown option detected: "' + e + '"' + o, fA), pA = !0
                }
            }, {
                key: "findInOptions",
                value: function(e, i, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = 1e9,
                        s = "",
                        a = [],
                        l = e.toLowerCase(),
                        h = void 0;
                    for (var u in i) {
                        var d = void 0;
                        if (void 0 !== i[u].__type__ && !0 === o) {
                            var c = t.findInOptions(e, i[u], SO.copyAndExtendArray(n, u));
                            r > c.distance && (s = c.closestMatch, a = c.path, r = c.distance, h = c.indexMatch)
                        } else { var p; - 1 !== Cm(p = u.toLowerCase()).call(p, l) && (h = u), r > (d = t.levenshteinDistance(e, u)) && (s = u, a = SO.copyArray(n), r = d) }
                    }
                    return { closestMatch: s, path: a, distance: r, indexMatch: h }
                }
            }, {
                key: "printLocation",
                value: function(t, e) {
                    for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Problem value found at: \n", n = "\n\n" + i + "options = {\n", o = 0; o < t.length; o++) {
                        for (var r = 0; r < o + 1; r++) n += "  ";
                        n += t[o] + ": {\n"
                    }
                    for (var s = 0; s < t.length + 1; s++) n += "  ";
                    n += e + "\n";
                    for (var a = 0; a < t.length + 1; a++) {
                        for (var l = 0; l < t.length - a; l++) n += "  ";
                        n += "}\n"
                    }
                    return n + "\n\n"
                }
            }, { key: "print", value: function(t) { return hv(t).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ", ") } }, {
                key: "levenshteinDistance",
                value: function(t, e) {
                    if (0 === t.length) return e.length;
                    if (0 === e.length) return t.length;
                    var i, n, o = [];
                    for (i = 0; i <= e.length; i++) o[i] = [i];
                    for (n = 0; n <= t.length; n++) o[0][n] = n;
                    for (i = 1; i <= e.length; i++)
                        for (n = 1; n <= t.length; n++) e.charAt(i - 1) == t.charAt(n - 1) ? o[i][n] = o[i - 1][n - 1] : o[i][n] = Math.min(o[i - 1][n - 1] + 1, Math.min(o[i][n - 1] + 1, o[i - 1][n] + 1));
                    return o[e.length][t.length]
                }
            }]), t
        }(),
        vA = "string",
        gA = "boolean",
        yA = "number",
        bA = "array",
        _A = "date",
        wA = "object",
        kA = "moment",
        xA = { configure: { enabled: { boolean: gA }, filter: { boolean: gA, function: "function" }, container: { dom: "dom" }, __type__: { object: wA, boolean: gA, function: "function" } }, align: { string: vA }, alignCurrentTime: { string: vA, undefined: "undefined" }, rtl: { boolean: gA, undefined: "undefined" }, rollingMode: { follow: { boolean: gA }, offset: { number: yA, undefined: "undefined" }, __type__: { object: wA } }, onTimeout: { timeoutMs: { number: yA }, callback: { function: "function" }, __type__: { object: wA } }, verticalScroll: { boolean: gA, undefined: "undefined" }, horizontalScroll: { boolean: gA, undefined: "undefined" }, autoResize: { boolean: gA }, throttleRedraw: { number: yA }, clickToUse: { boolean: gA }, dataAttributes: { string: vA, array: bA }, editable: { add: { boolean: gA, undefined: "undefined" }, remove: { boolean: gA, undefined: "undefined" }, updateGroup: { boolean: gA, undefined: "undefined" }, updateTime: { boolean: gA, undefined: "undefined" }, overrideItems: { boolean: gA, undefined: "undefined" }, __type__: { boolean: gA, object: wA } }, end: { number: yA, date: _A, string: vA, moment: kA }, format: { minorLabels: { millisecond: { string: vA, undefined: "undefined" }, second: { string: vA, undefined: "undefined" }, minute: { string: vA, undefined: "undefined" }, hour: { string: vA, undefined: "undefined" }, weekday: { string: vA, undefined: "undefined" }, day: { string: vA, undefined: "undefined" }, week: { string: vA, undefined: "undefined" }, month: { string: vA, undefined: "undefined" }, year: { string: vA, undefined: "undefined" }, __type__: { object: wA, function: "function" } }, majorLabels: { millisecond: { string: vA, undefined: "undefined" }, second: { string: vA, undefined: "undefined" }, minute: { string: vA, undefined: "undefined" }, hour: { string: vA, undefined: "undefined" }, weekday: { string: vA, undefined: "undefined" }, day: { string: vA, undefined: "undefined" }, week: { string: vA, undefined: "undefined" }, month: { string: vA, undefined: "undefined" }, year: { string: vA, undefined: "undefined" }, __type__: { object: wA, function: "function" } }, __type__: { object: wA } }, moment: { function: "function" }, groupHeightMode: { string: vA }, groupOrder: { string: vA, function: "function" }, groupEditable: { add: { boolean: gA, undefined: "undefined" }, remove: { boolean: gA, undefined: "undefined" }, order: { boolean: gA, undefined: "undefined" }, __type__: { boolean: gA, object: wA } }, groupOrderSwap: { function: "function" }, height: { string: vA, number: yA }, hiddenDates: { start: { date: _A, number: yA, string: vA, moment: kA }, end: { date: _A, number: yA, string: vA, moment: kA }, repeat: { string: vA }, __type__: { object: wA, array: bA } }, itemsAlwaysDraggable: { item: { boolean: gA, undefined: "undefined" }, range: { boolean: gA, undefined: "undefined" }, __type__: { boolean: gA, object: wA } }, limitSize: { boolean: gA }, locale: { string: vA }, locales: { __any__: { any: "any" }, __type__: { object: wA } }, longSelectPressTime: { number: yA }, margin: { axis: { number: yA }, item: { horizontal: { number: yA, undefined: "undefined" }, vertical: { number: yA, undefined: "undefined" }, __type__: { object: wA, number: yA } }, __type__: { object: wA, number: yA } }, max: { date: _A, number: yA, string: vA, moment: kA }, maxHeight: { number: yA, string: vA }, maxMinorChars: { number: yA }, min: { date: _A, number: yA, string: vA, moment: kA }, minHeight: { number: yA, string: vA }, moveable: { boolean: gA }, multiselect: { boolean: gA }, multiselectPerGroup: { boolean: gA }, onAdd: { function: "function" }, onDropObjectOnItem: { function: "function" }, onUpdate: { function: "function" }, onMove: { function: "function" }, onMoving: { function: "function" }, onRemove: { function: "function" }, onAddGroup: { function: "function" }, onMoveGroup: { function: "function" }, onRemoveGroup: { function: "function" }, onInitialDrawComplete: { function: "function" }, order: { function: "function" }, orientation: { axis: { string: vA, undefined: "undefined" }, item: { string: vA, undefined: "undefined" }, __type__: { string: vA, object: wA } }, selectable: { boolean: gA }, sequentialSelection: { boolean: gA }, showCurrentTime: { boolean: gA }, showMajorLabels: { boolean: gA }, showMinorLabels: { boolean: gA }, showWeekScale: { boolean: gA }, stack: { boolean: gA }, stackSubgroups: { boolean: gA }, cluster: { maxItems: { number: yA, undefined: "undefined" }, titleTemplate: { string: vA, undefined: "undefined" }, clusterCriteria: { function: "function", undefined: "undefined" }, showStipes: { boolean: gA, undefined: "undefined" }, fitOnDoubleClick: { boolean: gA, undefined: "undefined" }, __type__: { boolean: gA, object: wA } }, snap: { function: "function", null: "null" }, start: { date: _A, number: yA, string: vA, moment: kA }, template: { function: "function" }, loadingScreenTemplate: { function: "function" }, groupTemplate: { function: "function" }, visibleFrameTemplate: { string: vA, function: "function" }, showTooltips: { boolean: gA }, tooltip: { followMouse: { boolean: gA }, overflowMethod: { string: ["cap", "flip", "none"] }, delay: { number: yA }, template: { function: "function" }, __type__: { object: wA } }, tooltipOnItemUpdateTime: { template: { function: "function" }, __type__: { boolean: gA, object: wA } }, timeAxis: { scale: { string: vA, undefined: "undefined" }, step: { number: yA, undefined: "undefined" }, __type__: { object: wA } }, type: { string: vA }, width: { string: vA, number: yA }, preferZoom: { boolean: gA }, zoomable: { boolean: gA }, zoomKey: { string: ["ctrlKey", "altKey", "shiftKey", "metaKey", ""] }, zoomFriction: { number: yA }, zoomMax: { number: yA }, zoomMin: { number: yA }, xss: { disabled: { boolean: gA }, filterOptions: { __any__: { any: "any" }, __type__: { object: wA } }, __type__: { object: wA } }, __type__: { object: wA } },
        DA = { global: { align: ["center", "left", "right"], alignCurrentTime: ["none", "year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute", "second"], direction: !1, autoResize: !0, clickToUse: !1, editable: { add: !1, remove: !1, updateGroup: !1, updateTime: !1 }, end: "", format: { minorLabels: { millisecond: "SSS", second: "s", minute: "HH:mm", hour: "HH:mm", weekday: "ddd D", day: "D", week: "w", month: "MMM", year: "YYYY" }, majorLabels: { millisecond: "HH:mm:ss", second: "D MMMM HH:mm", minute: "ddd D MMMM", hour: "ddd D MMMM", weekday: "MMMM YYYY", day: "MMMM YYYY", week: "MMMM YYYY", month: "YYYY", year: "" } }, groupHeightMode: ["auto", "fixed", "fitItems"], groupsDraggable: !1, height: "", locale: "", longSelectPressTime: 251, margin: { axis: [20, 0, 100, 1], item: { horizontal: [10, 0, 100, 1], vertical: [10, 0, 100, 1] } }, max: "", maxHeight: "", maxMinorChars: [7, 0, 20, 1], min: "", minHeight: "", moveable: !1, multiselect: !1, multiselectPerGroup: !1, orientation: { axis: ["both", "bottom", "top"], item: ["bottom", "top"] }, preferZoom: !1, selectable: !0, showCurrentTime: !1, showMajorLabels: !0, showMinorLabels: !0, stack: !0, stackSubgroups: !0, cluster: !1, start: "", showTooltips: !0, tooltip: { followMouse: !1, overflowMethod: "flip", delay: [500, 0, 99999, 100] }, tooltipOnItemUpdateTime: !1, type: ["box", "point", "range", "background"], width: "100%", zoomable: !0, zoomKey: ["ctrlKey", "altKey", "shiftKey", "metaKey", ""], zoomMax: [31536e10, 10, 31536e10, 1], zoomMin: [10, 10, 31536e10, 1], xss: { disabled: !1 } } },
        SA = { black: "#000000", navy: "#000080", darkblue: "#00008B", mediumblue: "#0000CD", blue: "#0000FF", darkgreen: "#006400", green: "#008000", teal: "#008080", darkcyan: "#008B8B", deepskyblue: "#00BFFF", darkturquoise: "#00CED1", mediumspringgreen: "#00FA9A", lime: "#00FF00", springgreen: "#00FF7F", aqua: "#00FFFF", cyan: "#00FFFF", midnightblue: "#191970", dodgerblue: "#1E90FF", lightseagreen: "#20B2AA", forestgreen: "#228B22", seagreen: "#2E8B57", darkslategray: "#2F4F4F", limegreen: "#32CD32", mediumseagreen: "#3CB371", turquoise: "#40E0D0", royalblue: "#4169E1", steelblue: "#4682B4", darkslateblue: "#483D8B", mediumturquoise: "#48D1CC", indigo: "#4B0082", darkolivegreen: "#556B2F", cadetblue: "#5F9EA0", cornflowerblue: "#6495ED", mediumaquamarine: "#66CDAA", dimgray: "#696969", slateblue: "#6A5ACD", olivedrab: "#6B8E23", slategray: "#708090", lightslategray: "#778899", mediumslateblue: "#7B68EE", lawngreen: "#7CFC00", chartreuse: "#7FFF00", aquamarine: "#7FFFD4", maroon: "#800000", purple: "#800080", olive: "#808000", gray: "#808080", skyblue: "#87CEEB", lightskyblue: "#87CEFA", blueviolet: "#8A2BE2", darkred: "#8B0000", darkmagenta: "#8B008B", saddlebrown: "#8B4513", darkseagreen: "#8FBC8F", lightgreen: "#90EE90", mediumpurple: "#9370D8", darkviolet: "#9400D3", palegreen: "#98FB98", darkorchid: "#9932CC", yellowgreen: "#9ACD32", sienna: "#A0522D", brown: "#A52A2A", darkgray: "#A9A9A9", lightblue: "#ADD8E6", greenyellow: "#ADFF2F", paleturquoise: "#AFEEEE", lightsteelblue: "#B0C4DE", powderblue: "#B0E0E6", firebrick: "#B22222", darkgoldenrod: "#B8860B", mediumorchid: "#BA55D3", rosybrown: "#BC8F8F", darkkhaki: "#BDB76B", silver: "#C0C0C0", mediumvioletred: "#C71585", indianred: "#CD5C5C", peru: "#CD853F", chocolate: "#D2691E", tan: "#D2B48C", lightgrey: "#D3D3D3", palevioletred: "#D87093", thistle: "#D8BFD8", orchid: "#DA70D6", goldenrod: "#DAA520", crimson: "#DC143C", gainsboro: "#DCDCDC", plum: "#DDA0DD", burlywood: "#DEB887", lightcyan: "#E0FFFF", lavender: "#E6E6FA", darksalmon: "#E9967A", violet: "#EE82EE", palegoldenrod: "#EEE8AA", lightcoral: "#F08080", khaki: "#F0E68C", aliceblue: "#F0F8FF", honeydew: "#F0FFF0", azure: "#F0FFFF", sandybrown: "#F4A460", wheat: "#F5DEB3", beige: "#F5F5DC", whitesmoke: "#F5F5F5", mintcream: "#F5FFFA", ghostwhite: "#F8F8FF", salmon: "#FA8072", antiquewhite: "#FAEBD7", linen: "#FAF0E6", lightgoldenrodyellow: "#FAFAD2", oldlace: "#FDF5E6", red: "#FF0000", fuchsia: "#FF00FF", magenta: "#FF00FF", deeppink: "#FF1493", orangered: "#FF4500", tomato: "#FF6347", hotpink: "#FF69B4", coral: "#FF7F50", darkorange: "#FF8C00", lightsalmon: "#FFA07A", orange: "#FFA500", lightpink: "#FFB6C1", pink: "#FFC0CB", gold: "#FFD700", peachpuff: "#FFDAB9", navajowhite: "#FFDEAD", moccasin: "#FFE4B5", bisque: "#FFE4C4", mistyrose: "#FFE4E1", blanchedalmond: "#FFEBCD", papayawhip: "#FFEFD5", lavenderblush: "#FFF0F5", seashell: "#FFF5EE", cornsilk: "#FFF8DC", lemonchiffon: "#FFFACD", floralwhite: "#FFFAF0", snow: "#FFFAFA", yellow: "#FFFF00", lightyellow: "#FFFFE0", ivory: "#FFFFF0", white: "#FFFFFF" },
        CA = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                yu(this, t), this.pixelRatio = e, this.generated = !1, this.centerCoordinates = { x: 144.5, y: 144.5 }, this.r = 289 * .49, this.color = { r: 255, g: 255, b: 255, a: 1 }, this.hueCircle = void 0, this.initialColor = { r: 255, g: 255, b: 255, a: 1 }, this.previousColor = void 0, this.applied = !1, this.updateCallback = function() {}, this.closeCallback = function() {}, this._create()
            }
            return xu(t, [{ key: "insertTo", value: function(t) { void 0 !== this.hammer && (this.hammer.destroy(), this.hammer = void 0), this.container = t, this.container.appendChild(this.frame), this._bindHammer(), this._setSize() } }, {
                key: "setUpdateCallback",
                value: function(t) {
                    if ("function" != typeof t) throw new Error("Function attempted to set as colorPicker update callback is not a function.");
                    this.updateCallback = t
                }
            }, {
                key: "setCloseCallback",
                value: function(t) {
                    if ("function" != typeof t) throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
                    this.closeCallback = t
                }
            }, { key: "_isColorString", value: function(t) { if ("string" == typeof t) return SA[t] } }, {
                key: "setColor",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if ("none" !== t) {
                        var i, n = this._isColorString(t);
                        if (void 0 !== n && (t = n), !0 === SO.isString(t)) {
                            if (!0 === SO.isValidRGB(t)) {
                                var o = t.substr(4).substr(0, t.length - 5).split(",");
                                i = { r: o[0], g: o[1], b: o[2], a: 1 }
                            } else if (!0 === SO.isValidRGBA(t)) {
                                var r = t.substr(5).substr(0, t.length - 6).split(",");
                                i = { r: r[0], g: r[1], b: r[2], a: r[3] }
                            } else if (!0 === SO.isValidHex(t)) {
                                var s = SO.hexToRGB(t);
                                i = { r: s.r, g: s.g, b: s.b, a: 1 }
                            }
                        } else if (t instanceof Object && void 0 !== t.r && void 0 !== t.g && void 0 !== t.b) {
                            var a = void 0 !== t.a ? t.a : "1.0";
                            i = { r: t.r, g: t.g, b: t.b, a: a }
                        }
                        if (void 0 === i) throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + hv(t));
                        this._setColor(i, e)
                    }
                }
            }, { key: "show", value: function() { void 0 !== this.closeCallback && (this.closeCallback(), this.closeCallback = void 0), this.applied = !1, this.frame.style.display = "block", this._generateHueCircle() } }, {
                key: "_hide",
                value: function() {
                    var t = this,
                        e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    !0 === e && (this.previousColor = SO.extend({}, this.color)), !0 === this.applied && this.updateCallback(this.initialColor), this.frame.style.display = "none", xv((function() { void 0 !== t.closeCallback && (t.closeCallback(), t.closeCallback = void 0) }), 0)
                }
            }, { key: "_save", value: function() { this.updateCallback(this.color), this.applied = !1, this._hide() } }, { key: "_apply", value: function() { this.applied = !0, this.updateCallback(this.color), this._updatePicker(this.color) } }, { key: "_loadLast", value: function() { void 0 !== this.previousColor ? this.setColor(this.previousColor, !1) : alert("There is no last color to load...") } }, {
                key: "_setColor",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    !0 === e && (this.initialColor = SO.extend({}, t)), this.color = t;
                    var i = SO.RGBToHSV(t.r, t.g, t.b),
                        n = 2 * Math.PI,
                        o = this.r * i.s,
                        r = this.centerCoordinates.x + o * Math.sin(n * i.h),
                        s = this.centerCoordinates.y + o * Math.cos(n * i.h);
                    this.colorPickerSelector.style.left = r - .5 * this.colorPickerSelector.clientWidth + "px", this.colorPickerSelector.style.top = s - .5 * this.colorPickerSelector.clientHeight + "px", this._updatePicker(t)
                }
            }, { key: "_setOpacity", value: function(t) { this.color.a = t / 100, this._updatePicker(this.color) } }, {
                key: "_setBrightness",
                value: function(t) {
                    var e = SO.RGBToHSV(this.color.r, this.color.g, this.color.b);
                    e.v = t / 100;
                    var i = SO.HSVToRGB(e.h, e.s, e.v);
                    i.a = this.color.a, this.color = i, this._updatePicker()
                }
            }, {
                key: "_updatePicker",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.color,
                        e = SO.RGBToHSV(t.r, t.g, t.b),
                        i = this.colorPickerCanvas.getContext("2d");
                    void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1)), i.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                    var n = this.colorPickerCanvas.clientWidth,
                        o = this.colorPickerCanvas.clientHeight;
                    i.clearRect(0, 0, n, o), i.putImageData(this.hueCircle, 0, 0), i.fillStyle = "rgba(0,0,0," + (1 - e.v) + ")", i.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), Iv(i).call(i), this.brightnessRange.value = 100 * e.v, this.opacityRange.value = 100 * t.a, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
                }
            }, { key: "_setSize", value: function() { this.colorPickerCanvas.style.width = "100%", this.colorPickerCanvas.style.height = "100%", this.colorPickerCanvas.width = 289 * this.pixelRatio, this.colorPickerCanvas.height = 289 * this.pixelRatio } }, {
                key: "_create",
                value: function() {
                    var t, e, i, n;
                    if (this.frame = document.createElement("div"), this.frame.className = "vis-color-picker", this.colorPickerDiv = document.createElement("div"), this.colorPickerSelector = document.createElement("div"), this.colorPickerSelector.className = "vis-selector", this.colorPickerDiv.appendChild(this.colorPickerSelector), this.colorPickerCanvas = document.createElement("canvas"), this.colorPickerDiv.appendChild(this.colorPickerCanvas), this.colorPickerCanvas.getContext) {
                        var o = this.colorPickerCanvas.getContext("2d");
                        this.pixelRatio = (window.devicePixelRatio || 1) / (o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1), this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
                    } else {
                        var r = document.createElement("DIV");
                        r.style.color = "red", r.style.fontWeight = "bold", r.style.padding = "10px", r.innerHTML = "Error: your browser does not support HTML canvas", this.colorPickerCanvas.appendChild(r)
                    }
                    this.colorPickerDiv.className = "vis-color", this.opacityDiv = document.createElement("div"), this.opacityDiv.className = "vis-opacity", this.brightnessDiv = document.createElement("div"), this.brightnessDiv.className = "vis-brightness", this.arrowDiv = document.createElement("div"), this.arrowDiv.className = "vis-arrow", this.opacityRange = document.createElement("input");
                    try { this.opacityRange.type = "range", this.opacityRange.min = "0", this.opacityRange.max = "100" } catch (t) {}
                    this.opacityRange.value = "100", this.opacityRange.className = "vis-range", this.brightnessRange = document.createElement("input");
                    try { this.brightnessRange.type = "range", this.brightnessRange.min = "0", this.brightnessRange.max = "100" } catch (t) {}
                    this.brightnessRange.value = "100", this.brightnessRange.className = "vis-range", this.opacityDiv.appendChild(this.opacityRange), this.brightnessDiv.appendChild(this.brightnessRange);
                    var s = this;
                    this.opacityRange.onchange = function() { s._setOpacity(this.value) }, this.opacityRange.oninput = function() { s._setOpacity(this.value) }, this.brightnessRange.onchange = function() { s._setBrightness(this.value) }, this.brightnessRange.oninput = function() { s._setBrightness(this.value) }, this.brightnessLabel = document.createElement("div"), this.brightnessLabel.className = "vis-label vis-brightness", this.brightnessLabel.innerHTML = "brightness:", this.opacityLabel = document.createElement("div"), this.opacityLabel.className = "vis-label vis-opacity", this.opacityLabel.innerHTML = "opacity:", this.newColorDiv = document.createElement("div"), this.newColorDiv.className = "vis-new-color", this.newColorDiv.innerHTML = "new", this.initialColorDiv = document.createElement("div"), this.initialColorDiv.className = "vis-initial-color", this.initialColorDiv.innerHTML = "initial", this.cancelButton = document.createElement("div"), this.cancelButton.className = "vis-button vis-cancel", this.cancelButton.innerHTML = "cancel", this.cancelButton.onclick = Hc(t = this._hide).call(t, this, !1), this.applyButton = document.createElement("div"), this.applyButton.className = "vis-button vis-apply", this.applyButton.innerHTML = "apply", this.applyButton.onclick = Hc(e = this._apply).call(e, this), this.saveButton = document.createElement("div"), this.saveButton.className = "vis-button vis-save", this.saveButton.innerHTML = "save", this.saveButton.onclick = Hc(i = this._save).call(i, this), this.loadButton = document.createElement("div"), this.loadButton.className = "vis-button vis-load", this.loadButton.innerHTML = "load last", this.loadButton.onclick = Hc(n = this._loadLast).call(n, this), this.frame.appendChild(this.colorPickerDiv), this.frame.appendChild(this.arrowDiv), this.frame.appendChild(this.brightnessLabel), this.frame.appendChild(this.brightnessDiv), this.frame.appendChild(this.opacityLabel), this.frame.appendChild(this.opacityDiv), this.frame.appendChild(this.newColorDiv), this.frame.appendChild(this.initialColorDiv), this.frame.appendChild(this.cancelButton), this.frame.appendChild(this.applyButton), this.frame.appendChild(this.saveButton), this.frame.appendChild(this.loadButton)
                }
            }, {
                key: "_bindHammer",
                value: function() {
                    var t = this;
                    this.drag = {}, this.pinch = {}, this.hammer = new yE(this.colorPickerCanvas), this.hammer.get("pinch").set({ enable: !0 }), bE(this.hammer, (function(e) { t._moveSelector(e) })), this.hammer.on("tap", (function(e) { t._moveSelector(e) })), this.hammer.on("panstart", (function(e) { t._moveSelector(e) })), this.hammer.on("panmove", (function(e) { t._moveSelector(e) })), this.hammer.on("panend", (function(e) { t._moveSelector(e) }))
                }
            }, {
                key: "_generateHueCircle",
                value: function() {
                    if (!1 === this.generated) {
                        var t = this.colorPickerCanvas.getContext("2d");
                        void 0 === this.pixelRation && (this.pixelRatio = (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)), t.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                        var e, i, n, o, r = this.colorPickerCanvas.clientWidth,
                            s = this.colorPickerCanvas.clientHeight;
                        t.clearRect(0, 0, r, s), this.centerCoordinates = { x: .5 * r, y: .5 * s }, this.r = .49 * r;
                        var a, l = 2 * Math.PI / 360,
                            h = 1 / this.r;
                        for (n = 0; n < 360; n++)
                            for (o = 0; o < this.r; o++) e = this.centerCoordinates.x + o * Math.sin(l * n), i = this.centerCoordinates.y + o * Math.cos(l * n), a = SO.HSVToRGB(.002777777777777778 * n, o * h, 1), t.fillStyle = "rgb(" + a.r + "," + a.g + "," + a.b + ")", t.fillRect(e - .5, i - .5, 2, 2);
                        t.strokeStyle = "rgba(0,0,0,1)", t.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r), t.stroke(), this.hueCircle = t.getImageData(0, 0, r, s)
                    }
                    this.generated = !0
                }
            }, {
                key: "_moveSelector",
                value: function(t) {
                    var e = this.colorPickerDiv.getBoundingClientRect(),
                        i = t.center.x - e.left,
                        n = t.center.y - e.top,
                        o = .5 * this.colorPickerDiv.clientHeight,
                        r = .5 * this.colorPickerDiv.clientWidth,
                        s = i - r,
                        a = n - o,
                        l = Math.atan2(s, a),
                        h = .98 * Math.min(Math.sqrt(s * s + a * a), r),
                        u = Math.cos(l) * h + o,
                        d = Math.sin(l) * h + r;
                    this.colorPickerSelector.style.top = u - .5 * this.colorPickerSelector.clientHeight + "px", this.colorPickerSelector.style.left = d - .5 * this.colorPickerSelector.clientWidth + "px";
                    var c = l / (2 * Math.PI);
                    c = c < 0 ? c + 1 : c;
                    var p = h / this.r,
                        f = SO.RGBToHSV(this.color.r, this.color.g, this.color.b);
                    f.h = c, f.s = p;
                    var m = SO.HSVToRGB(f.h, f.s, f.v);
                    m.a = this.color.a, this.color = m, this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")", this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
                }
            }]), t
        }();
    wE('div.vis-configuration{display:block;float:left;font-size:12px;position:relative}div.vis-configuration-wrapper{display:block;width:700px}div.vis-configuration-wrapper:after{clear:both;content:"";display:block}div.vis-configuration.vis-config-option-container{background-color:#fff;border:2px solid #f7f8fa;border-radius:4px;display:block;left:10px;margin-top:20px;padding-left:5px;width:495px}div.vis-configuration.vis-config-button{background-color:#f7f8fa;border:2px solid #ceced0;border-radius:4px;cursor:pointer;display:block;height:25px;left:10px;line-height:25px;margin-bottom:30px;margin-top:20px;padding-left:5px;vertical-align:middle;width:495px}div.vis-configuration.vis-config-button.hover{background-color:#4588e6;border:2px solid #214373;color:#fff}div.vis-configuration.vis-config-item{display:block;float:left;height:25px;line-height:25px;vertical-align:middle;width:495px}div.vis-configuration.vis-config-item.vis-config-s2{background-color:#f7f8fa;border-radius:3px;left:10px;padding-left:5px}div.vis-configuration.vis-config-item.vis-config-s3{background-color:#e4e9f0;border-radius:3px;left:20px;padding-left:5px}div.vis-configuration.vis-config-item.vis-config-s4{background-color:#cfd8e6;border-radius:3px;left:30px;padding-left:5px}div.vis-configuration.vis-config-header{font-size:18px;font-weight:700}div.vis-configuration.vis-config-label{height:25px;line-height:25px;width:120px}div.vis-configuration.vis-config-label.vis-config-s3{width:110px}div.vis-configuration.vis-config-label.vis-config-s4{width:100px}div.vis-configuration.vis-config-colorBlock{border:1px solid #444;border-radius:2px;cursor:pointer;height:19px;margin:0;padding:0;top:1px;width:30px}input.vis-configuration.vis-config-checkbox{left:-5px}input.vis-configuration.vis-config-rangeinput{margin:0;padding:1px;pointer-events:none;position:relative;top:-5px;width:60px}input.vis-configuration.vis-config-range{-webkit-appearance:none;background-color:transparent;border:0 solid #fff;height:20px;width:300px}input.vis-configuration.vis-config-range::-webkit-slider-runnable-track{background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);border:1px solid #999;border-radius:3px;box-shadow:0 0 3px 0 #aaa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);height:5px;width:300px}input.vis-configuration.vis-config-range::-webkit-slider-thumb{-webkit-appearance:none;background:#3876c2;background:-moz-linear-gradient(top,#3876c2 0,#385380 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3876c2),color-stop(100%,#385380));background:-webkit-linear-gradient(top,#3876c2,#385380);background:-o-linear-gradient(top,#3876c2 0,#385380 100%);background:-ms-linear-gradient(top,#3876c2 0,#385380 100%);background:linear-gradient(180deg,#3876c2 0,#385380);border:1px solid #14334b;border-radius:50%;box-shadow:0 0 1px 0 #111927;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#3876c2",endColorstr="#385380",GradientType=0);height:17px;margin-top:-7px;width:17px}input.vis-configuration.vis-config-range:focus{outline:none}input.vis-configuration.vis-config-range:focus::-webkit-slider-runnable-track{background:#9d9d9d;background:-moz-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#9d9d9d),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#9d9d9d,#c8c8c8 99%);background:-o-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#9d9d9d 0,#c8c8c8 99%);background:linear-gradient(180deg,#9d9d9d 0,#c8c8c8 99%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#9d9d9d",endColorstr="#c8c8c8",GradientType=0)}input.vis-configuration.vis-config-range::-moz-range-track{background:#dedede;background:-moz-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#dedede),color-stop(99%,#c8c8c8));background:-webkit-linear-gradient(top,#dedede,#c8c8c8 99%);background:-o-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:-ms-linear-gradient(top,#dedede 0,#c8c8c8 99%);background:linear-gradient(180deg,#dedede 0,#c8c8c8 99%);border:1px solid #999;border-radius:3px;box-shadow:0 0 3px 0 #aaa;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#dedede",endColorstr="#c8c8c8",GradientType=0);height:10px;width:300px}input.vis-configuration.vis-config-range::-moz-range-thumb{background:#385380;border:none;border-radius:50%;height:16px;width:16px}input.vis-configuration.vis-config-range:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}input.vis-configuration.vis-config-range::-ms-track{background:transparent;border-color:transparent;border-width:6px 0;color:transparent;height:5px;width:300px}input.vis-configuration.vis-config-range::-ms-fill-lower{background:#777;border-radius:10px}input.vis-configuration.vis-config-range::-ms-fill-upper{background:#ddd;border-radius:10px}input.vis-configuration.vis-config-range::-ms-thumb{background:#385380;border:none;border-radius:50%;height:16px;width:16px}input.vis-configuration.vis-config-range:focus::-ms-fill-lower{background:#888}input.vis-configuration.vis-config-range:focus::-ms-fill-upper{background:#ccc}.vis-configuration-popup{background:rgba(57,76,89,.85);border:2px solid #f2faff;border-radius:4px;color:#fff;font-size:14px;height:30px;line-height:30px;position:absolute;text-align:center;-webkit-transition:opacity .3s ease-in-out;-moz-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;width:150px}.vis-configuration-popup:after,.vis-configuration-popup:before{border:solid transparent;content:" ";height:0;left:100%;pointer-events:none;position:absolute;top:50%;width:0}.vis-configuration-popup:after{border-color:rgba(136,183,213,0) rgba(136,183,213,0) rgba(136,183,213,0) rgba(57,76,89,.85);border-width:8px;margin-top:-8px}.vis-configuration-popup:before{border-color:rgba(194,225,245,0) rgba(194,225,245,0) rgba(194,225,245,0) #f2faff;border-width:12px;margin-top:-12px}');
    var TA = function() {
        function t(e, i, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            yu(this, t), this.parent = e, this.changedOptions = [], this.container = i, this.allowCreation = !1, this.options = {}, this.initialized = !1, this.popupCounter = 0, this.defaultOptions = { enabled: !1, filter: !0, container: void 0, showButton: !0 }, SO.extend(this.options, this.defaultOptions), this.configureOptions = n, this.moduleOptions = {}, this.domElements = [], this.popupDiv = {}, this.popupLimit = 5, this.popupHistory = {}, this.colorPicker = new CA(o), this.wrapper = void 0
        }
        return xu(t, [{
            key: "setOptions",
            value: function(t) {
                if (void 0 !== t) {
                    this.popupHistory = {}, this._removePopup();
                    var e = !0;
                    if ("string" == typeof t) this.options.filter = t;
                    else if (tc(t)) this.options.filter = t.join();
                    else if ("object" === Rd(t)) {
                        if (null == t) throw new TypeError("options cannot be null");
                        void 0 !== t.container && (this.options.container = t.container), void 0 !== Af(t) && (this.options.filter = Af(t)), void 0 !== t.showButton && (this.options.showButton = t.showButton), void 0 !== t.enabled && (e = t.enabled)
                    } else "boolean" == typeof t ? (this.options.filter = !0, e = t) : "function" == typeof t && (this.options.filter = t, e = !0);
                    !1 === Af(this.options) && (e = !1), this.options.enabled = e
                }
                this._clean()
            }
        }, { key: "setModuleOptions", value: function(t) { this.moduleOptions = t, !0 === this.options.enabled && (this._clean(), void 0 !== this.options.container && (this.container = this.options.container), this._create()) } }, {
            key: "_create",
            value: function() {
                this._clean(), this.changedOptions = [];
                var t = Af(this.options),
                    e = 0,
                    i = !1;
                for (var n in this.configureOptions) this.configureOptions.hasOwnProperty(n) && (this.allowCreation = !1, i = !1, "function" == typeof t ? i = (i = t(n, [])) || this._handleObject(this.configureOptions[n], [n], !0) : !0 !== t && -1 === Cm(t).call(t, n) || (i = !0), !1 !== i && (this.allowCreation = !0, e > 0 && this._makeItem([]), this._makeHeader(n), this._handleObject(this.configureOptions[n], [n])), e++);
                this._makeButton(), this._push()
            }
        }, {
            key: "_push",
            value: function() {
                this.wrapper = document.createElement("div"), this.wrapper.className = "vis-configuration-wrapper", this.container.appendChild(this.wrapper);
                for (var t = 0; t < this.domElements.length; t++) this.wrapper.appendChild(this.domElements[t]);
                this._showPopupIfNeeded()
            }
        }, {
            key: "_clean",
            value: function() {
                for (var t = 0; t < this.domElements.length; t++) this.wrapper.removeChild(this.domElements[t]);
                void 0 !== this.wrapper && (this.container.removeChild(this.wrapper), this.wrapper = void 0), this.domElements = [], this._removePopup()
            }
        }, {
            key: "_getValue",
            value: function(t) {
                for (var e = this.moduleOptions, i = 0; i < t.length; i++) {
                    if (void 0 === e[t[i]]) { e = void 0; break }
                    e = e[t[i]]
                }
                return e
            }
        }, {
            key: "_makeItem",
            value: function(t) {
                if (!0 === this.allowCreation) {
                    var e = document.createElement("div");
                    e.className = "vis-configuration vis-config-item vis-config-s" + t.length;
                    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
                    return tp(n).call(n, (function(t) { e.appendChild(t) })), this.domElements.push(e), this.domElements.length
                }
                return 0
            }
        }, {
            key: "_makeHeader",
            value: function(t) {
                var e = document.createElement("div");
                e.className = "vis-configuration vis-config-header", e.innerHTML = SO.xss(t), this._makeItem([], e)
            }
        }, {
            key: "_makeLabel",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = document.createElement("div");
                return n.className = "vis-configuration vis-config-label vis-config-s" + e.length, n.innerHTML = !0 === i ? SO.xss("<i><b>" + t + ":</b></i>") : SO.xss(t + ":"), n
            }
        }, {
            key: "_makeDropdown",
            value: function(t, e, i) {
                var n = document.createElement("select");
                n.className = "vis-configuration vis-config-select";
                var o = 0;
                void 0 !== e && -1 !== Cm(t).call(t, e) && (o = Cm(t).call(t, e));
                for (var r = 0; r < t.length; r++) {
                    var s = document.createElement("option");
                    s.value = t[r], r === o && (s.selected = "selected"), s.innerHTML = t[r], n.appendChild(s)
                }
                var a = this;
                n.onchange = function() { a._update(this.value, i) };
                var l = this._makeLabel(i[i.length - 1], i);
                this._makeItem(i, l, n)
            }
        }, {
            key: "_makeRange",
            value: function(t, e, i) {
                var n = t[0],
                    o = t[1],
                    r = t[2],
                    s = t[3],
                    a = document.createElement("input");
                a.className = "vis-configuration vis-config-range";
                try { a.type = "range", a.min = o, a.max = r } catch (t) {}
                a.step = s;
                var l = "",
                    h = 0;
                if (void 0 !== e) {
                    var u = 1.2;
                    e < 0 && e * u < o ? (a.min = Math.ceil(e * u), h = a.min, l = "range increased") : e / u < o && (a.min = Math.ceil(e / u), h = a.min, l = "range increased"), e * u > r && 1 !== r && (a.max = Math.ceil(e * u), h = a.max, l = "range increased"), a.value = e
                } else a.value = n;
                var d = document.createElement("input");
                d.className = "vis-configuration vis-config-rangeinput", d.value = Number(a.value);
                var c = this;
                a.onchange = function() { d.value = this.value, c._update(Number(this.value), i) }, a.oninput = function() { d.value = this.value };
                var p = this._makeLabel(i[i.length - 1], i),
                    f = this._makeItem(i, p, a, d);
                "" !== l && this.popupHistory[f] !== h && (this.popupHistory[f] = h, this._setupPopup(l, f))
            }
        }, {
            key: "_makeButton",
            value: function() {
                var t = this;
                if (!0 === this.options.showButton) {
                    var e = document.createElement("div");
                    e.className = "vis-configuration vis-config-button", e.innerHTML = "generate options", e.onclick = function() { t._printOptions() }, e.onmouseover = function() { e.className = "vis-configuration vis-config-button hover" }, e.onmouseout = function() { e.className = "vis-configuration vis-config-button" }, this.optionsContainer = document.createElement("div"), this.optionsContainer.className = "vis-configuration vis-config-option-container", this.domElements.push(this.optionsContainer), this.domElements.push(e)
                }
            }
        }, {
            key: "_setupPopup",
            value: function(t, e) {
                var i = this;
                if (!0 === this.initialized && !0 === this.allowCreation && this.popupCounter < this.popupLimit) {
                    var n = document.createElement("div");
                    n.id = "vis-configuration-popup", n.className = "vis-configuration-popup", n.innerHTML = SO.xss(t), n.onclick = function() { i._removePopup() }, this.popupCounter += 1, this.popupDiv = { html: n, index: e }
                }
            }
        }, { key: "_removePopup", value: function() { void 0 !== this.popupDiv.html && (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html), clearTimeout(this.popupDiv.hideTimeout), clearTimeout(this.popupDiv.deleteTimeout), this.popupDiv = {}) } }, {
            key: "_showPopupIfNeeded",
            value: function() {
                var t = this;
                if (void 0 !== this.popupDiv.html) {
                    var e = this.domElements[this.popupDiv.index].getBoundingClientRect();
                    this.popupDiv.html.style.left = e.left + "px", this.popupDiv.html.style.top = e.top - 30 + "px", document.body.appendChild(this.popupDiv.html), this.popupDiv.hideTimeout = xv((function() { t.popupDiv.html.style.opacity = 0 }), 1500), this.popupDiv.deleteTimeout = xv((function() { t._removePopup() }), 1800)
                }
            }
        }, {
            key: "_makeCheckbox",
            value: function(t, e, i) {
                var n = document.createElement("input");
                n.type = "checkbox", n.className = "vis-configuration vis-config-checkbox", n.checked = t, void 0 !== e && (n.checked = e, e !== t && ("object" === Rd(t) ? e !== t.enabled && this.changedOptions.push({ path: i, value: e }) : this.changedOptions.push({ path: i, value: e })));
                var o = this;
                n.onchange = function() { o._update(this.checked, i) };
                var r = this._makeLabel(i[i.length - 1], i);
                this._makeItem(i, r, n)
            }
        }, {
            key: "_makeTextInput",
            value: function(t, e, i) {
                var n = document.createElement("input");
                n.type = "text", n.className = "vis-configuration vis-config-text", n.value = e, e !== t && this.changedOptions.push({ path: i, value: e });
                var o = this;
                n.onchange = function() { o._update(this.value, i) };
                var r = this._makeLabel(i[i.length - 1], i);
                this._makeItem(i, r, n)
            }
        }, {
            key: "_makeColorField",
            value: function(t, e, i) {
                var n = this,
                    o = t[1],
                    r = document.createElement("div");
                "none" !== (e = void 0 === e ? o : e) ? (r.className = "vis-configuration vis-config-colorBlock", r.style.backgroundColor = e) : r.className = "vis-configuration vis-config-colorBlock none", e = void 0 === e ? o : e, r.onclick = function() { n._showColorPicker(e, r, i) };
                var s = this._makeLabel(i[i.length - 1], i);
                this._makeItem(i, s, r)
            }
        }, {
            key: "_showColorPicker",
            value: function(t, e, i) {
                var n = this;
                e.onclick = function() {}, this.colorPicker.insertTo(e), this.colorPicker.show(), this.colorPicker.setColor(t), this.colorPicker.setUpdateCallback((function(t) {
                    var o = "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
                    e.style.backgroundColor = o, n._update(o, i)
                })), this.colorPicker.setCloseCallback((function() { e.onclick = function() { n._showColorPicker(t, e, i) } }))
            }
        }, {
            key: "_handleObject",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = !1,
                    o = Af(this.options),
                    r = !1;
                for (var s in t)
                    if (t.hasOwnProperty(s)) {
                        n = !0;
                        var a = t[s],
                            l = SO.copyAndExtendArray(e, s);
                        if ("function" == typeof o && !1 === (n = o(s, e)) && !tc(a) && "string" != typeof a && "boolean" != typeof a && a instanceof Object && (this.allowCreation = !1, n = this._handleObject(a, l, !0), this.allowCreation = !1 === i), !1 !== n) {
                            r = !0;
                            var h = this._getValue(l);
                            if (tc(a)) this._handleArray(a, h, l);
                            else if ("string" == typeof a) this._makeTextInput(a, h, l);
                            else if ("boolean" == typeof a) this._makeCheckbox(a, h, l);
                            else if (a instanceof Object) {
                                var u = !0;
                                if (-1 !== Cm(e).call(e, "physics") && this.moduleOptions.physics.solver !== s && (u = !1), !0 === u)
                                    if (void 0 !== a.enabled) {
                                        var d = SO.copyAndExtendArray(l, "enabled"),
                                            c = this._getValue(d);
                                        if (!0 === c) {
                                            var p = this._makeLabel(s, l, !0);
                                            this._makeItem(l, p), r = this._handleObject(a, l) || r
                                        } else this._makeCheckbox(a, c, l)
                                    } else {
                                        var f = this._makeLabel(s, l, !0);
                                        this._makeItem(l, f), r = this._handleObject(a, l) || r
                                    }
                            } else console.error("dont know how to handle", a, s, l)
                        }
                    }
                return r
            }
        }, { key: "_handleArray", value: function(t, e, i) { "string" == typeof t[0] && "color" === t[0] ? (this._makeColorField(t, e, i), t[1] !== e && this.changedOptions.push({ path: i, value: e })) : "string" == typeof t[0] ? (this._makeDropdown(t, e, i), t[0] !== e && this.changedOptions.push({ path: i, value: e })) : "number" == typeof t[0] && (this._makeRange(t, e, i), t[0] !== e && this.changedOptions.push({ path: i, value: Number(e) })) } }, {
            key: "_update",
            value: function(t, e) {
                var i = this._constructOptions(t, e);
                this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit && this.parent.body.emitter.emit("configChange", i), this.initialized = !0, this.parent.setOptions(i)
            }
        }, {
            key: "_constructOptions",
            value: function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = i;
                t = "false" !== (t = "true" === t || t) && t;
                for (var o = 0; o < e.length; o++) "global" !== e[o] && (void 0 === n[e[o]] && (n[e[o]] = {}), o !== e.length - 1 ? n = n[e[o]] : n[e[o]] = t);
                return i
            }
        }, {
            key: "_printOptions",
            value: function() {
                var t = this.getOptions();
                this.optionsContainer.innerHTML = "<pre>var options = " + hv(t, null, 2) + "</pre>"
            }
        }, { key: "getOptions", value: function() { for (var t = {}, e = 0; e < this.changedOptions.length; e++) this._constructOptions(this.changedOptions[e].value, this.changedOptions[e].path, t); return t } }]), t
    }();

    function MA(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    var OA = function(t) {
        p_(i, t);
        var e = MA(i);

        function i(t, n, o, r) {
            var s, a, l, h, u, d, c, p;
            if (yu(this, i), (p = e.call(this)).initTime = new Date, p.itemsDone = !1, !(i_(p) instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
            if (!tc(o) && !gO(o) && o instanceof Object) {
                var f = r;
                r = o, o = f
            }
            r && r.throttleRedraw && console.warn('Timeline option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');
            var m = i_(p);
            if (p.defaultOptions = { autoResize: !0, longSelectPressTime: 251, orientation: { axis: "bottom", item: "bottom" }, moment: cM }, p.options = SO.deepExtend({}, p.defaultOptions), r && SO.setupXSSProtection(r.xss), p._create(t), !r || r && void 0 === r.rtl) {
                var v;
                p.dom.root.style.visibility = "hidden";
                for (var g = p.dom.root; !v && g;) v = window.getComputedStyle(g, null).direction, g = g.parentElement;
                p.options.rtl = v && "rtl" == v.toLowerCase()
            } else p.options.rtl = r.rtl;
            r && (r.rollingMode && (p.options.rollingMode = r.rollingMode), r.onInitialDrawComplete && (p.options.onInitialDrawComplete = r.onInitialDrawComplete), r.onTimeout && (p.options.onTimeout = r.onTimeout), r.loadingScreenTemplate && (p.options.loadingScreenTemplate = r.loadingScreenTemplate));
            var y = document.createElement("div");
            if (p.options.loadingScreenTemplate) {
                var b, _ = Hc(b = p.options.loadingScreenTemplate).call(b, i_(p)),
                    w = _(p.dom.loadingScreen);
                w instanceof Object && !(w instanceof Element) ? _(y) : w instanceof Element ? (y.innerHTML = "", y.appendChild(w)) : null != w && (y.innerHTML = SO.xss(w))
            }

            function k(t, e) { m.hasListeners(t) && m.emit(t, m.getEventProperties(e)) }
            return p.dom.loadingScreen.appendChild(y), p.components = [], p.body = { dom: p.dom, domProps: p.props, emitter: { on: Hc(s = p.on).call(s, i_(p)), off: Hc(a = p.off).call(a, i_(p)), emit: Hc(l = p.emit).call(l, i_(p)) }, hiddenDates: [], util: { getScale: function() { return m.timeAxis.step.scale }, getStep: function() { return m.timeAxis.step.step }, toScreen: Hc(h = m._toScreen).call(h, m), toGlobalScreen: Hc(u = m._toGlobalScreen).call(u, m), toTime: Hc(d = m._toTime).call(d, m), toGlobalTime: Hc(c = m._toGlobalTime).call(c, m) } }, p.range = new dE(p.body, p.options), p.components.push(p.range), p.body.range = p.range, p.timeAxis = new xE(p.body, p.options), p.timeAxis2 = null, p.components.push(p.timeAxis), p.currentTime = new UE(p.body, p.options), p.components.push(p.currentTime), p.itemSet = new dA(p.body, p.options), p.components.push(p.itemSet), p.itemsData = null, p.groupsData = null, p.dom.root.onclick = function(t) { k("click", t) }, p.dom.root.ondblclick = function(t) { k("doubleClick", t) }, p.dom.root.oncontextmenu = function(t) { k("contextmenu", t) }, p.dom.root.onmouseover = function(t) { k("mouseOver", t) }, window.PointerEvent ? (p.dom.root.onpointerdown = function(t) { k("mouseDown", t) }, p.dom.root.onpointermove = function(t) { k("mouseMove", t) }, p.dom.root.onpointerup = function(t) { k("mouseUp", t) }) : (p.dom.root.onmousemove = function(t) { k("mouseMove", t) }, p.dom.root.onmousedown = function(t) { k("mouseDown", t) }, p.dom.root.onmouseup = function(t) { k("mouseUp", t) }), p.initialFitDone = !1, p.on("changed", (function() {
                if (null != m.itemsData) {
                    if (!m.initialFitDone && !m.options.rollingMode)
                        if (m.initialFitDone = !0, null != m.options.start || null != m.options.end) {
                            if (null == m.options.start || null == m.options.end) var t = m.getItemRange();
                            var e = null != m.options.start ? m.options.start : t.min,
                                i = null != m.options.end ? m.options.end : t.max;
                            m.setWindow(e, i, { animation: !1 })
                        } else m.fit({ animation: !1 });
                    m.initialDrawDone || !m.initialRangeChangeDone && (m.options.start || m.options.end) && !m.options.rollingMode || (m.initialDrawDone = !0, m.itemSet.initialDrawDone = !0, m.dom.root.style.visibility = "visible", m.dom.loadingScreen.parentNode.removeChild(m.dom.loadingScreen), m.options.onInitialDrawComplete && xv((function() { return m.options.onInitialDrawComplete() }), 0))
                }
            })), p.on("destroyTimeline", (function() { m.destroy() })), r && p.setOptions(r), p.body.emitter.on("fit", (function(t) { p._onFit(t), p.redraw() })), o && p.setGroups(o), n && p.setItems(n), p._redraw(), p
        }
        return xu(i, [{ key: "_createConfigurator", value: function() { return new TA(this, this.dom.container, DA) } }, { key: "redraw", value: function() { this.itemSet && this.itemSet.markDirty({ refreshItems: !0 }), this._redraw() } }, {
            key: "setOptions",
            value: function(t) {
                if (!0 === mA.validate(t, xA) && console.log("%cErrors have been found in the supplied options object.", fA), WE.prototype.setOptions.call(this, t), "type" in t && t.type !== this.options.type) {
                    this.options.type = t.type;
                    var e = this.itemsData;
                    if (e) {
                        var i = this.getSelection();
                        this.setItems(null), this.setItems(e.rawDS), this.setSelection(i)
                    }
                }
            }
        }, {
            key: "setItems",
            value: function(t) {
                var e;
                this.itemsDone = !1, e = t ? gO(t) ? wO(t) : wO(new hM(t)) : null, this.itemsData && this.itemsData.dispose(), this.itemsData = e, this.itemSet && this.itemSet.setItems(null != e ? e.rawDS : null)
            }
        }, {
            key: "setGroups",
            value: function(t) {
                var e;
                t ? (tc(t) && (t = new hM(t)), e = new uM(t, { filter: function(t) { return !1 !== t.visible } })) : e = null, null != this.groupsData && "function" == typeof this.groupsData.setData && this.groupsData.setData(null), this.groupsData = e, this.itemSet.setGroups(e)
            }
        }, { key: "setData", value: function(t) { t && t.groups && this.setGroups(t.groups), t && t.items && this.setItems(t.items) } }, { key: "setSelection", value: function(t, e) { this.itemSet && this.itemSet.setSelection(t), e && e.focus && this.focus(t, e) } }, { key: "getSelection", value: function() { return this.itemSet && this.itemSet.getSelection() || [] } }, {
            key: "focus",
            value: function(t, e) {
                if (this.itemsData && null != t) {
                    var i = tc(t) ? t : [t],
                        n = this.itemsData.get(i),
                        o = null,
                        r = null;
                    if (tp(n).call(n, (function(t) {
                            var e = t.start.valueOf(),
                                i = "end" in t ? t.end.valueOf() : t.start.valueOf();
                            (null === o || e < o) && (o = e), (null === r || i > r) && (r = i)
                        })), null !== o && null !== r) {
                        var s = this,
                            a = this.itemSet.items[i[0]],
                            l = -1 * this._getScrollTop(),
                            h = null,
                            u = function() {
                                var t = AA(s, a);
                                t.shouldScroll && t.itemTop != h.itemTop && (s._setScrollTop(-t.scrollOffset), s._redraw())
                            },
                            d = !e || void 0 === e.zoom || e.zoom,
                            c = (o + r) / 2,
                            p = d ? 1.1 * (r - o) : Math.max(this.range.end - this.range.start, 1.1 * (r - o)),
                            f = !e || void 0 === e.animation || e.animation;
                        f || (h = { shouldScroll: !1, scrollOffset: -1, itemTop: -1 }), this.range.setRange(c - p / 2, c + p / 2, { animation: f }, (function() { u(), xv(u, 100) }), (function(t, e, i) {
                            var n = AA(s, a);
                            if (!1 !== n && (h || (h = n), h.itemTop != n.itemTop || h.shouldScroll)) {
                                h.itemTop != n.itemTop && n.shouldScroll && (h = n, l = -1 * s._getScrollTop());
                                var o = l,
                                    r = h.scrollOffset,
                                    u = i ? r : o + (r - o) * t;
                                s._setScrollTop(-u), e || s._redraw()
                            }
                        }))
                    }
                }
            }
        }, {
            key: "fit",
            value: function(t, e) {
                var i, n = !t || void 0 === t.animation || t.animation;
                1 === this.itemsData.length && void 0 === this.itemsData.get()[0].end ? (i = this.getDataRange(), this.moveTo(i.min.valueOf(), { animation: n }, e)) : (i = this.getItemRange(), this.range.setRange(i.min, i.max, { animation: n }, e))
            }
        }, {
            key: "getItemRange",
            value: function() {
                var t = this,
                    e = this.getDataRange(),
                    i = null !== e.min ? e.min.valueOf() : null,
                    n = null !== e.max ? e.max.valueOf() : null,
                    o = null,
                    r = null;
                if (null != i && null != n) {
                    var s = n - i;
                    s <= 0 && (s = 10);
                    var a = s / this.props.center.width,
                        l = {},
                        h = 0;
                    if (tp(SO).call(SO, this.itemSet.items, (function(t, e) { if (t.groupShowing) { l[e] = t.redraw(!0), h = l[e].length } })), h > 0)
                        for (var u = function(t) { tp(SO).call(SO, l, (function(e) { e[t]() })) }, d = 0; d < h; d++) u(d);
                    if (tp(SO).call(SO, this.itemSet.items, (function(e) {
                            var s, l, h = EA(e),
                                u = PA(e);
                            t.options.rtl ? (s = h - (e.getWidthRight() + 10) * a, l = u + (e.getWidthLeft() + 10) * a) : (s = h - (e.getWidthLeft() + 10) * a, l = u + (e.getWidthRight() + 10) * a), s < i && (i = s, o = e), l > n && (n = l, r = e)
                        })), o && r) {
                        var c = o.getWidthLeft() + 10,
                            p = r.getWidthRight() + 10,
                            f = this.props.center.width - c - p;
                        f > 0 && (this.options.rtl ? (i = EA(o) - p * s / f, n = PA(r) + c * s / f) : (i = EA(o) - c * s / f, n = PA(r) + p * s / f))
                    }
                }
                return { min: null != i ? new Date(i) : null, max: null != n ? new Date(n) : null }
            }
        }, {
            key: "getDataRange",
            value: function() {
                var t, e = null,
                    i = null;
                this.itemsData && tp(t = this.itemsData).call(t, (function(t) {
                    var n = SO.convert(t.start, "Date").valueOf(),
                        o = SO.convert(null != t.end ? t.end : t.start, "Date").valueOf();
                    (null === e || n < e) && (e = n), (null === i || o > i) && (i = o)
                }));
                return { min: null != e ? new Date(e) : null, max: null != i ? new Date(i) : null }
            }
        }, {
            key: "getEventProperties",
            value: function(t) {
                var e = t.center ? t.center.x : t.clientX,
                    i = t.center ? t.center.y : t.clientY,
                    n = this.dom.centerContainer.getBoundingClientRect(),
                    o = this.options.rtl ? n.right - e : e - n.left,
                    r = i - n.top,
                    s = this.itemSet.itemFromTarget(t),
                    a = this.itemSet.groupFromTarget(t),
                    l = GE.customTimeFromTarget(t),
                    h = this.itemSet.options.snap || null,
                    u = this.body.util.getScale(),
                    d = this.body.util.getStep(),
                    c = this._toTime(o),
                    p = h ? h(c, u, d) : c,
                    f = SO.getTarget(t),
                    m = null;
                return null != s ? m = "item" : null != l ? m = "custom-time" : SO.hasParent(f, this.timeAxis.dom.foreground) || this.timeAxis2 && SO.hasParent(f, this.timeAxis2.dom.foreground) ? m = "axis" : SO.hasParent(f, this.itemSet.dom.labelSet) ? m = "group-label" : SO.hasParent(f, this.currentTime.bar) ? m = "current-time" : SO.hasParent(f, this.dom.center) && (m = "background"), { event: t, item: s ? s.id : null, isCluster: !!s && !!s.isCluster, items: s ? s.items || [] : null, group: a ? a.groupId : null, customTime: l ? l.options.id : null, what: m, pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX, pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY, x: o, y: r, time: c, snappedTime: p }
            }
        }, { key: "toggleRollingMode", value: function() { this.range.rolling ? this.range.stopRolling() : (null == this.options.rollingMode && this.setOptions(this.options), this.range.startRolling()) } }, { key: "_redraw", value: function() { WE.prototype._redraw.call(this) } }, {
            key: "_onFit",
            value: function(t) {
                var e = t.start,
                    i = t.end,
                    n = t.animation;
                i ? this.range.setRange(e, i, { animation: n }) : this.moveTo(e.valueOf(), { animation: n })
            }
        }]), i
    }(WE);

    function EA(t) { return SO.convert(t.data.start, "Date").valueOf() }

    function PA(t) { var e = null != t.data.end ? t.data.end : t.data.start; return SO.convert(e, "Date").valueOf() }

    function AA(t, e) {
        if (!e.parent) return !1;
        var i = t.options.rtl ? t.props.rightContainer.height : t.props.leftContainer.height,
            n = t.props.center.height,
            o = e.parent,
            r = o.top,
            s = !0,
            a = t.timeAxis.options.orientation.axis,
            l = function() { return "bottom" == a ? o.height - e.top - e.height : e.top },
            h = -1 * t._getScrollTop(),
            u = r + l(),
            d = e.height;
        return u < h ? r + i <= r + l() + d && (r += l() - t.itemSet.options.margin.item.vertical) : u + d > h + i ? r += l() + d - i + t.itemSet.options.margin.item.vertical : s = !1, { shouldScroll: s, scrollOffset: r = Math.min(r, n - i), itemTop: u }
    }
    var IA = function() {
        function t(e, i, n, o, r, s) {
            var a = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                l = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
            if (yu(this, t), this.majorSteps = [1, 2, 5, 10], this.minorSteps = [.25, .5, 1, 2], this.customLines = null, this.containerHeight = r, this.majorCharHeight = s, this._start = e, this._end = i, this.scale = 1, this.minorStepIdx = -1, this.magnitudefactor = 1, this.determineScale(), this.zeroAlign = a, this.autoScaleStart = n, this.autoScaleEnd = o, this.formattingFunction = l, n || o) {
                var h = this,
                    u = function(t) { var e = t - t % (h.magnitudefactor * h.minorSteps[h.minorStepIdx]); return t % (h.magnitudefactor * h.minorSteps[h.minorStepIdx]) > h.magnitudefactor * h.minorSteps[h.minorStepIdx] * .5 ? e + h.magnitudefactor * h.minorSteps[h.minorStepIdx] : e };
                n && (this._start -= 2 * this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._start = u(this._start)), o && (this._end += this.magnitudefactor * this.minorSteps[this.minorStepIdx], this._end = u(this._end)), this.determineScale()
            }
        }
        return xu(t, [{ key: "setCharHeight", value: function(t) { this.majorCharHeight = t } }, { key: "setHeight", value: function(t) { this.containerHeight = t } }, {
            key: "determineScale",
            value: function() {
                var t = this._end - this._start;
                this.scale = this.containerHeight / t;
                var e = this.majorCharHeight / this.scale,
                    i = t > 0 ? Math.round(Math.log(t) / Math.LN10) : 0;
                this.minorStepIdx = -1, this.magnitudefactor = Math.pow(10, i);
                var n = 0;
                i < 0 && (n = i);
                for (var o = !1, r = n; Math.abs(r) <= Math.abs(i); r++) { this.magnitudefactor = Math.pow(10, r); for (var s = 0; s < this.minorSteps.length; s++) { if (this.magnitudefactor * this.minorSteps[s] >= e) { o = !0, this.minorStepIdx = s; break } } if (!0 === o) break }
            }
        }, { key: "is_major", value: function(t) { return t % (this.magnitudefactor * this.majorSteps[this.minorStepIdx]) == 0 } }, { key: "getStep", value: function() { return this.magnitudefactor * this.minorSteps[this.minorStepIdx] } }, { key: "getFirstMajor", value: function() { var t = this.magnitudefactor * this.majorSteps[this.minorStepIdx]; return this.convertValue(this._start + (t - this._start % t) % t) } }, { key: "formatValue", value: function(t) { var e = t.toPrecision(5); return "function" == typeof this.formattingFunction && (e = this.formattingFunction(t)), "number" == typeof e ? "".concat(e) : "string" == typeof e ? e : t.toPrecision(5) } }, { key: "getLines", value: function() { for (var t = [], e = this.getStep(), i = (e - this._start % e) % e, n = this._start + i; this._end - n > 1e-5; n += e) n != this._start && t.push({ major: this.is_major(n), y: this.convertValue(n), val: this.formatValue(n) }); return t } }, {
            key: "followScale",
            value: function(t) {
                var e = this.minorStepIdx,
                    i = this._start,
                    n = this._end,
                    o = this,
                    r = function() { o.magnitudefactor *= 2 },
                    s = function() { o.magnitudefactor /= 2 };
                t.minorStepIdx <= 1 && this.minorStepIdx <= 1 || t.minorStepIdx > 1 && this.minorStepIdx > 1 || (t.minorStepIdx < this.minorStepIdx ? (this.minorStepIdx = 1, 2 == e || r(), r()) : (this.minorStepIdx = 2, 1 == e || s(), s()));
                for (var a = t.convertValue(0), l = t.getStep() * t.scale, h = !1, u = 0; !h && u++ < 5;) {
                    this.scale = l / (this.minorSteps[this.minorStepIdx] * this.magnitudefactor);
                    var d = this.containerHeight / this.scale;
                    this._start = i, this._end = this._start + d;
                    var c = this._end * this.scale,
                        p = this.magnitudefactor * this.majorSteps[this.minorStepIdx],
                        f = this.getFirstMajor() - t.getFirstMajor();
                    if (this.zeroAlign) {
                        var m = a - c;
                        this._end += m / this.scale, this._start = this._end - d
                    } else this.autoScaleStart ? (this._start -= f / this.scale, this._end = this._start + d) : (this._start += p - f / this.scale, this._end = this._start + d);
                    if (!this.autoScaleEnd && this._end > n + 1e-5) s(), h = !1;
                    else {
                        if (!this.autoScaleStart && this._start < i - 1e-5) {
                            if (!(this.zeroAlign && i >= 0)) { s(), h = !1; continue }
                            console.warn("Can't adhere to given 'min' range, due to zeroalign")
                        }
                        this.autoScaleStart && this.autoScaleEnd && d < n - i ? (r(), h = !1) : h = !0
                    }
                }
            }
        }, { key: "convertValue", value: function(t) { return this.containerHeight - (t - this._start) * this.scale } }, { key: "screenToValue", value: function(t) { return (this.containerHeight - t) / this.scale + this._start } }]), t
    }();

    function LA(t, e) {
        var i = void 0 !== Hd && ba(t) || t["@@iterator"];
        if (!i) {
            if (tc(t) || (i = function(t, e) { var i; if (!t) return; if ("string" == typeof t) return NA(t, e); var n = $d(i = Object.prototype.toString.call(t)).call(i, 8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Qs(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NA(t, e) }(t)) || e && t && "number" == typeof t.length) {
                i && (t = i);
                var n = 0,
                    o = function() {};
                return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, s = !0,
            a = !1;
        return { s: function() { i = i.call(t) }, n: function() { var t = i.next(); return s = t.done, t }, e: function(t) { a = !0, r = t }, f: function() { try { s || null == i.return || i.return() } finally { if (a) throw r } } }
    }

    function NA(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }

    function FA(t) {
        var e = function() { if ("undefined" == typeof Reflect || !e_) return !1; if (e_.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(e_(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }();
        return function() {
            var i, n = y_(t);
            if (e) {
                var o = y_(this).constructor;
                i = e_(n, arguments, o)
            } else i = n.apply(this, arguments);
            return f_(this, i)
        }
    }
    wE(".vis-panel.vis-background.vis-horizontal .vis-grid.vis-horizontal{border-bottom:1px solid;height:0;position:absolute;width:100%}.vis-panel.vis-background.vis-horizontal .vis-grid.vis-minor{border-color:#e5e5e5}.vis-panel.vis-background.vis-horizontal .vis-grid.vis-major{border-color:#bfbfbf}.vis-data-axis .vis-y-axis.vis-major{color:#4d4d4d;position:absolute;white-space:nowrap;width:100%}.vis-data-axis .vis-y-axis.vis-major.vis-measure{border:0;margin:0;padding:0;visibility:hidden;width:auto}.vis-data-axis .vis-y-axis.vis-minor{color:#bebebe;position:absolute;white-space:nowrap;width:100%}.vis-data-axis .vis-y-axis.vis-minor.vis-measure{border:0;margin:0;padding:0;visibility:hidden;width:auto}.vis-data-axis .vis-y-axis.vis-title{bottom:20px;color:#4d4d4d;position:absolute;text-align:center;white-space:nowrap}.vis-data-axis .vis-y-axis.vis-title.vis-measure{margin:0;padding:0;visibility:hidden;width:auto}.vis-data-axis .vis-y-axis.vis-title.vis-left{bottom:0;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left bottom}.vis-data-axis .vis-y-axis.vis-title.vis-right{bottom:0;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:right bottom;-moz-transform-origin:right bottom;-ms-transform-origin:right bottom;-o-transform-origin:right bottom;transform-origin:right bottom}.vis-legend{background-color:rgba(247,252,255,.65);border:1px solid #b3b3b3;box-shadow:2px 2px 10px hsla(0,0%,60%,.55);padding:5px}.vis-legend-text{display:inline-block;white-space:nowrap}");
    var RA = function(t) {
        p_(i, t);
        var e = FA(i);

        function i(t, n, o, r) {
            var s;
            yu(this, i), (s = e.call(this)).id = qT(), s.body = t, s.defaultOptions = { orientation: "left", showMinorLabels: !0, showMajorLabels: !0, showWeekScale: !1, icons: !1, majorLinesOffset: 7, minorLinesOffset: 4, labelOffsetX: 10, labelOffsetY: 2, iconWidth: 20, width: "40px", visible: !0, alignZeros: !0, left: { range: { min: void 0, max: void 0 }, format: function(t) { return "".concat(RO(t.toPrecision(3))) }, title: { text: void 0, style: void 0 } }, right: { range: { min: void 0, max: void 0 }, format: function(t) { return "".concat(RO(t.toPrecision(3))) }, title: { text: void 0, style: void 0 } } }, s.linegraphOptions = r, s.linegraphSVG = o, s.props = {}, s.DOMelements = { lines: {}, labels: {}, title: {} }, s.dom = {}, s.scale = void 0, s.range = { start: 0, end: 0 }, s.options = SO.extend({}, s.defaultOptions), s.conversionFactor = 1, s.setOptions(n), s.width = Number("".concat(s.options.width).replace("px", "")), s.minWidth = s.width, s.height = s.linegraphSVG.getBoundingClientRect().height, s.hidden = !1, s.stepPixels = 25, s.zeroCrossing = -1, s.amountOfSteps = -1, s.lineOffset = 0, s.master = !0, s.masterAxis = null, s.svgElements = {}, s.iconsRemoved = !1, s.groups = {}, s.amountOfGroups = 0, s._create(), null == s.scale && s._redrawLabels(), s.framework = { svg: s.svg, svgElements: s.svgElements, options: s.options, groups: s.groups };
            var a = i_(s);
            return s.body.emitter.on("verticalDrag", (function() { a.dom.lineContainer.style.top = "".concat(a.body.domProps.scrollTop, "px") })), s
        }
        return xu(i, [{ key: "addGroup", value: function(t, e) { this.groups.hasOwnProperty(t) || (this.groups[t] = e), this.amountOfGroups += 1 } }, { key: "updateGroup", value: function(t, e) { this.groups.hasOwnProperty(t) || (this.amountOfGroups += 1), this.groups[t] = e } }, { key: "removeGroup", value: function(t) { this.groups.hasOwnProperty(t) && (delete this.groups[t], this.amountOfGroups -= 1) } }, {
            key: "setOptions",
            value: function(t) {
                if (t) {
                    var e = !1;
                    this.options.orientation != t.orientation && void 0 !== t.orientation && (e = !0);
                    SO.selectiveDeepExtend(["orientation", "showMinorLabels", "showMajorLabels", "icons", "majorLinesOffset", "minorLinesOffset", "labelOffsetX", "labelOffsetY", "iconWidth", "width", "visible", "left", "right", "alignZeros"], this.options, t), this.minWidth = Number("".concat(this.options.width).replace("px", "")), !0 === e && this.dom.frame && (this.hide(), this.show())
                }
            }
        }, { key: "_create", value: function() { this.dom.frame = document.createElement("div"), this.dom.frame.style.width = this.options.width, this.dom.frame.style.height = this.height, this.dom.lineContainer = document.createElement("div"), this.dom.lineContainer.style.width = "100%", this.dom.lineContainer.style.height = this.height, this.dom.lineContainer.style.position = "relative", this.dom.lineContainer.style.visibility = "visible", this.dom.lineContainer.style.display = "block", this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "absolute", this.svg.style.top = "0px", this.svg.style.height = "100%", this.svg.style.width = "100%", this.svg.style.display = "block", this.dom.frame.appendChild(this.svg) } }, {
            key: "_redrawGroupIcons",
            value: function() {
                var t;
                Cb(this.svgElements);
                var e = this.options.iconWidth,
                    i = 11.5;
                t = "left" === this.options.orientation ? 4 : this.width - e - 4;
                var n = pc(this.groups);
                $C(n).call(n, (function(t, e) { return t < e ? -1 : 1 }));
                var o, r = LA(n);
                try { for (r.s(); !(o = r.n()).done;) { var s = o.value;!0 !== this.groups[s].visible || void 0 !== this.linegraphOptions.visibility[s] && !0 !== this.linegraphOptions.visibility[s] || (this.groups[s].getLegend(e, 15, this.framework, t, i), i += 19) } } catch (t) { r.e(t) } finally { r.f() }
                Tb(this.svgElements), this.iconsRemoved = !1
            }
        }, { key: "_cleanupIcons", value: function() {!1 === this.iconsRemoved && (Cb(this.svgElements), Tb(this.svgElements), this.iconsRemoved = !0) } }, { key: "show", value: function() { this.hidden = !1, this.dom.frame.parentNode || ("left" === this.options.orientation ? this.body.dom.left.appendChild(this.dom.frame) : this.body.dom.right.appendChild(this.dom.frame)), this.dom.lineContainer.parentNode || this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer), this.dom.lineContainer.style.display = "block" } }, { key: "hide", value: function() { this.hidden = !0, this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame), this.dom.lineContainer.style.display = "none" } }, { key: "setRange", value: function(t, e) { this.range.start = t, this.range.end = e } }, {
            key: "redraw",
            value: function() {
                var t = !1,
                    e = 0;
                for (var i in this.dom.lineContainer.style.top = "".concat(this.body.domProps.scrollTop, "px"), this.groups) this.groups.hasOwnProperty(i) && (!0 !== this.groups[i].visible || void 0 !== this.linegraphOptions.visibility[i] && !0 !== this.linegraphOptions.visibility[i] || e++);
                if (0 === this.amountOfGroups || 0 === e) this.hide();
                else {
                    this.show(), this.height = Number(this.linegraphSVG.style.height.replace("px", "")), this.dom.lineContainer.style.height = "".concat(this.height, "px"), this.width = !0 === this.options.visible ? Number("".concat(this.options.width).replace("px", "")) : 0;
                    var n = this.props,
                        o = this.dom.frame;
                    o.className = "vis-data-axis", this._calculateCharSize();
                    var r = this.options.orientation,
                        s = this.options.showMinorLabels,
                        a = this.options.showMajorLabels,
                        l = this.body.dom.backgroundHorizontal.offsetWidth;
                    n.minorLabelHeight = s ? n.minorCharHeight : 0, n.majorLabelHeight = a ? n.majorCharHeight : 0, n.minorLineWidth = l - this.lineOffset - this.width + 2 * this.options.minorLinesOffset, n.minorLineHeight = 1, n.majorLineWidth = l - this.lineOffset - this.width + 2 * this.options.majorLinesOffset, n.majorLineHeight = 1, "left" === r ? (o.style.top = "0", o.style.left = "0", o.style.bottom = "", o.style.width = "".concat(this.width, "px"), o.style.height = "".concat(this.height, "px"), this.props.width = this.body.domProps.left.width, this.props.height = this.body.domProps.left.height) : (o.style.top = "", o.style.bottom = "0", o.style.left = "0", o.style.width = "".concat(this.width, "px"), o.style.height = "".concat(this.height, "px"), this.props.width = this.body.domProps.right.width, this.props.height = this.body.domProps.right.height), t = this._redrawLabels(), t = this._isResized() || t, !0 === this.options.icons ? this._redrawGroupIcons() : this._cleanupIcons(), this._redrawTitle(r)
                }
                return t
            }
        }, {
            key: "_redrawLabels",
            value: function() {
                var t = this,
                    e = !1;
                Cb(this.DOMelements.lines), Cb(this.DOMelements.labels);
                var i = this.options.orientation,
                    n = null != this.options[i].range ? this.options[i].range : {},
                    o = !0;
                null != n.max && (this.range.end = n.max, o = !1);
                var r = !0;
                null != n.min && (this.range.start = n.min, r = !1), this.scale = new IA(this.range.start, this.range.end, r, o, this.dom.frame.offsetHeight, this.props.majorCharHeight, this.options.alignZeros, this.options[i].format), !1 === this.master && null != this.masterAxis ? (this.scale.followScale(this.masterAxis.scale), this.dom.lineContainer.style.display = "none") : this.dom.lineContainer.style.display = "block", this.maxLabelSize = 0;
                var s = this.scale.getLines();
                tp(s).call(s, (function(e) {
                    var n = e.y,
                        o = e.major;
                    t.options.showMinorLabels && !1 === o && t._redrawLabel(n - 2, e.val, i, "vis-y-axis vis-minor", t.props.minorCharHeight), o && n >= 0 && t._redrawLabel(n - 2, e.val, i, "vis-y-axis vis-major", t.props.majorCharHeight), !0 === t.master && (o ? t._redrawLine(n, i, "vis-grid vis-horizontal vis-major", t.options.majorLinesOffset, t.props.majorLineWidth) : t._redrawLine(n, i, "vis-grid vis-horizontal vis-minor", t.options.minorLinesOffset, t.props.minorLineWidth))
                }));
                var a = 0;
                void 0 !== this.options[i].title && void 0 !== this.options[i].title.text && (a = this.props.titleCharHeight);
                var l = !0 === this.options.icons ? Math.max(this.options.iconWidth, a) + this.options.labelOffsetX + 15 : a + this.options.labelOffsetX + 15;
                return this.maxLabelSize > this.width - l && !0 === this.options.visible ? (this.width = this.maxLabelSize + l, this.options.width = "".concat(this.width, "px"), Tb(this.DOMelements.lines), Tb(this.DOMelements.labels), this.redraw(), e = !0) : this.maxLabelSize < this.width - l && !0 === this.options.visible && this.width > this.minWidth ? (this.width = Math.max(this.minWidth, this.maxLabelSize + l), this.options.width = "".concat(this.width, "px"), Tb(this.DOMelements.lines), Tb(this.DOMelements.labels), this.redraw(), e = !0) : (Tb(this.DOMelements.lines), Tb(this.DOMelements.labels), e = !1), e
            }
        }, { key: "convertValue", value: function(t) { return this.scale.convertValue(t) } }, { key: "screenToValue", value: function(t) { return this.scale.screenToValue(t) } }, {
            key: "_redrawLabel",
            value: function(t, e, i, n, o) {
                var r = Eb("div", this.DOMelements.labels, this.dom.frame);
                r.className = n, r.innerHTML = SO.xss(e), "left" === i ? (r.style.left = "-".concat(this.options.labelOffsetX, "px"), r.style.textAlign = "right") : (r.style.right = "-".concat(this.options.labelOffsetX, "px"), r.style.textAlign = "left"), r.style.top = "".concat(t - .5 * o + this.options.labelOffsetY, "px"), e += "";
                var s = Math.max(this.props.majorCharWidth, this.props.minorCharWidth);
                this.maxLabelSize < e.length * s && (this.maxLabelSize = e.length * s)
            }
        }, {
            key: "_redrawLine",
            value: function(t, e, i, n, o) {
                if (!0 === this.master) {
                    var r = Eb("div", this.DOMelements.lines, this.dom.lineContainer);
                    r.className = i, r.innerHTML = "", "left" === e ? r.style.left = "".concat(this.width - n, "px") : r.style.right = "".concat(this.width - n, "px"), r.style.width = "".concat(o, "px"), r.style.top = "".concat(t, "px")
                }
            }
        }, {
            key: "_redrawTitle",
            value: function(t) {
                if (Cb(this.DOMelements.title), void 0 !== this.options[t].title && void 0 !== this.options[t].title.text) {
                    var e = Eb("div", this.DOMelements.title, this.dom.frame);
                    e.className = "vis-y-axis vis-title vis-".concat(t), e.innerHTML = SO.xss(this.options[t].title.text), void 0 !== this.options[t].title.style && SO.addCssText(e, this.options[t].title.style), "left" === t ? e.style.left = "".concat(this.props.titleCharHeight, "px") : e.style.right = "".concat(this.props.titleCharHeight, "px"), e.style.width = "".concat(this.height, "px")
                }
                Tb(this.DOMelements.title)
            }
        }, {
            key: "_calculateCharSize",
            value: function() {
                if (!("minorCharHeight" in this.props)) {
                    var t = document.createTextNode("0"),
                        e = document.createElement("div");
                    e.className = "vis-y-axis vis-minor vis-measure", e.appendChild(t), this.dom.frame.appendChild(e), this.props.minorCharHeight = e.clientHeight, this.props.minorCharWidth = e.clientWidth, this.dom.frame.removeChild(e)
                }
                if (!("majorCharHeight" in this.props)) {
                    var i = document.createTextNode("0"),
                        n = document.createElement("div");
                    n.className = "vis-y-axis vis-major vis-measure", n.appendChild(i), this.dom.frame.appendChild(n), this.props.majorCharHeight = n.clientHeight, this.props.majorCharWidth = n.clientWidth, this.dom.frame.removeChild(n)
                }
                if (!("titleCharHeight" in this.props)) {
                    var o = document.createTextNode("0"),
                        r = document.createElement("div");
                    r.className = "vis-y-axis vis-title vis-measure", r.appendChild(o), this.dom.frame.appendChild(r), this.props.titleCharHeight = r.clientHeight, this.props.titleCharWidth = r.clientWidth, this.dom.frame.removeChild(r)
                }
            }
        }]), i
    }(jO);

    function jA(t, e) {}

    function YA(t, e) { return { style: (e = void 0 === e ? {} : e).style || t.options.drawPoints.style, styles: e.styles || t.options.drawPoints.styles, size: e.size || t.options.drawPoints.size, className: e.className || t.className } }

    function HA(t, e) {}

    function zA(t, e) {}

    function BA(t, e, i, n) {
        this.id = e;
        this.options = SO.selectiveBridgeObject(["sampling", "style", "sort", "yAxisOrientation", "barChart", "drawPoints", "shaded", "interpolation", "zIndex", "excludeFromStacking", "excludeFromLegend"], i), this.usingDefaultStyle = void 0 === t.className, this.groupsUsingDefaultStyles = n, this.zeroPosition = 0, this.update(t), 1 == this.usingDefaultStyle && (this.groupsUsingDefaultStyles[0] += 1), this.itemsData = [], this.visible = void 0 === t.visible || t.visible
    }

    function GA(t, e, i, n) { this.body = t, this.defaultOptions = { enabled: !1, icons: !0, iconSize: 20, iconSpacing: 6, left: { visible: !0, position: "top-left" }, right: { visible: !0, position: "top-right" } }, this.side = i, this.options = SO.extend({}, this.defaultOptions), this.linegraphOptions = n, this.svgElements = {}, this.dom = {}, this.groups = {}, this.amountOfGroups = 0, this._create(), this.framework = { svg: this.svg, svgElements: this.svgElements, options: this.options, groups: this.groups }, this.setOptions(e) }
    jA.draw = function(t, e, i, n) {
        n = n || 0;
        for (var o = function(t, e) {
                var i = void 0;
                t.options && t.options.drawPoints && t.options.drawPoints.onRender && "function" == typeof t.options.drawPoints.onRender && (i = t.options.drawPoints.onRender);
                e.group.options && e.group.options.drawPoints && e.group.options.drawPoints.onRender && "function" == typeof e.group.options.drawPoints.onRender && (i = e.group.options.drawPoints.onRender);
                return i
            }(i, e), r = 0; r < t.length; r++)
            if (o) { var s = o(t[r], e);!0 !== s && "object" !== Rd(s) || Pb(t[r].screen_x + n, t[r].screen_y, YA(e, s), i.svgElements, i.svg, t[r].label) } else Pb(t[r].screen_x + n, t[r].screen_y, YA(e), i.svgElements, i.svg, t[r].label)
    }, jA.drawIcon = function(t, e, i, n, o, r) {
        var s = .5 * o,
            a = Ob("rect", r.svgElements, r.svg);
        a.setAttributeNS(null, "x", e), a.setAttributeNS(null, "y", i - s), a.setAttributeNS(null, "width", n), a.setAttributeNS(null, "height", 2 * s), a.setAttributeNS(null, "class", "vis-outline"), Pb(e + .5 * n, i, YA(t), r.svgElements, r.svg)
    }, HA.drawIcon = function(t, e, i, n, o, r) {
        var s = .5 * o,
            a = Ob("rect", r.svgElements, r.svg);
        a.setAttributeNS(null, "x", e), a.setAttributeNS(null, "y", i - s), a.setAttributeNS(null, "width", n), a.setAttributeNS(null, "height", 2 * s), a.setAttributeNS(null, "class", "vis-outline");
        var l = Math.round(.3 * n),
            h = t.options.barChart.width / l,
            u = Math.round(.4 * o),
            d = Math.round(.75 * o),
            c = Math.round((n - 2 * l) / 3);
        if (Ab(e + .5 * l + c, i + s - u - 1, l, u, t.className + " vis-bar", r.svgElements, r.svg, t.style), Ab(e + 1.5 * l + c + 2, i + s - d - 1, l, d, t.className + " vis-bar", r.svgElements, r.svg, t.style), 1 == t.options.drawPoints.enabled) {
            var p = { style: t.options.drawPoints.style, styles: t.options.drawPoints.styles, size: t.options.drawPoints.size / h, className: t.className };
            Pb(e + .5 * l + c, i + s - u - 1, p, r.svgElements, r.svg), Pb(e + 1.5 * l + c + 2, i + s - d - 1, p, r.svgElements, r.svg)
        }
    }, HA.draw = function(t, e, i) {
        var n, o, r, s, a, l, h = [],
            u = {},
            d = 0;
        for (a = 0; a < t.length; a++)
            if ("bar" === (s = i.groups[t[a]]).options.style && !0 === s.visible && (void 0 === i.options.groups.visibility[t[a]] || !0 === i.options.groups.visibility[t[a]]))
                for (l = 0; l < e[t[a]].length; l++) h.push({ screen_x: e[t[a]][l].screen_x, screen_end: e[t[a]][l].screen_end, screen_y: e[t[a]][l].screen_y, x: e[t[a]][l].x, end: e[t[a]][l].end, y: e[t[a]][l].y, groupId: t[a], label: e[t[a]][l].label }), d += 1;
        if (0 !== d)
            for ($C(h).call(h, (function(t, e) { return t.screen_x === e.screen_x ? t.groupId < e.groupId ? -1 : 1 : t.screen_x - e.screen_x })), HA._getDataIntersections(u, h), a = 0; a < h.length; a++) {
                var c = null != (s = i.groups[h[a].groupId]).options.barChart.minWidth ? s.options.barChart.minWidth : .1 * s.options.barChart.width,
                    p = 0;
                if (void 0 === u[o = h[a].screen_x]) a + 1 < h.length && (n = Math.abs(h[a + 1].screen_x - o)), r = HA._getSafeDrawData(n, s, c);
                else {
                    var f = a + (u[o].amount - u[o].resolved);
                    f < h.length && (n = Math.abs(h[f].screen_x - o)), r = HA._getSafeDrawData(n, s, c), u[o].resolved += 1, !0 === s.options.stack && !0 !== s.options.excludeFromStacking ? h[a].screen_y < s.zeroPosition ? (p = u[o].accumulatedNegative, u[o].accumulatedNegative += s.zeroPosition - h[a].screen_y) : (p = u[o].accumulatedPositive, u[o].accumulatedPositive += s.zeroPosition - h[a].screen_y) : !0 === s.options.barChart.sideBySide && (r.width = r.width / u[o].amount, r.offset += u[o].resolved * r.width - .5 * r.width * (u[o].amount + 1))
                }
                var m = r.width,
                    v = h[a].screen_x;
                if (null != h[a].screen_end ? v += .5 * (m = h[a].screen_end - h[a].screen_x) : v += r.offset, Ab(v, h[a].screen_y - p, m, s.zeroPosition - h[a].screen_y, s.className + " vis-bar", i.svgElements, i.svg, s.style), !0 === s.options.drawPoints.enabled) {
                    var g = { screen_x: h[a].screen_x, screen_y: h[a].screen_y - p, x: h[a].x, y: h[a].y, groupId: h[a].groupId, label: h[a].label };
                    jA.draw([g], s, i, r.offset)
                }
            }
    }, HA._getDataIntersections = function(t, e) { for (var i, n = 0; n < e.length; n++) n + 1 < e.length && (i = Math.abs(e[n + 1].screen_x - e[n].screen_x)), n > 0 && (i = Math.min(i, Math.abs(e[n - 1].screen_x - e[n].screen_x))), 0 === i && (void 0 === t[e[n].screen_x] && (t[e[n].screen_x] = { amount: 0, resolved: 0, accumulatedPositive: 0, accumulatedNegative: 0 }), t[e[n].screen_x].amount += 1) }, HA._getSafeDrawData = function(t, e, i) { var n, o; return t < e.options.barChart.width && t > 0 ? (n = t < i ? i : t, o = 0, "left" === e.options.barChart.align ? o -= .5 * t : "right" === e.options.barChart.align && (o += .5 * t)) : (n = e.options.barChart.width, o = 0, "left" === e.options.barChart.align ? o -= .5 * e.options.barChart.width : "right" === e.options.barChart.align && (o += .5 * e.options.barChart.width)), { width: n, offset: o } }, HA.getStackedYRange = function(t, e, i, n, o) {
        if (t.length > 0) {
            $C(t).call(t, (function(t, e) { return t.screen_x === e.screen_x ? t.groupId < e.groupId ? -1 : 1 : t.screen_x - e.screen_x }));
            var r = {};
            HA._getDataIntersections(r, t), e[n] = HA._getStackedYRange(r, t), e[n].yAxisOrientation = o, i.push(n)
        }
    }, HA._getStackedYRange = function(t, e) { for (var i, n = e[0].screen_y, o = e[0].screen_y, r = 0; r < e.length; r++) void 0 === t[i = e[r].screen_x] ? (n = n > e[r].screen_y ? e[r].screen_y : n, o = o < e[r].screen_y ? e[r].screen_y : o) : e[r].screen_y < 0 ? t[i].accumulatedNegative += e[r].screen_y : t[i].accumulatedPositive += e[r].screen_y; for (var s in t) t.hasOwnProperty(s) && (n = (n = n > t[s].accumulatedNegative ? t[s].accumulatedNegative : n) > t[s].accumulatedPositive ? t[s].accumulatedPositive : n, o = (o = o < t[s].accumulatedNegative ? t[s].accumulatedNegative : o) < t[s].accumulatedPositive ? t[s].accumulatedPositive : o); return { min: n, max: o } }, zA.calcPath = function(t, e) { if (null != t && t.length > 0) { return 1 == e.options.interpolation.enabled ? zA._catmullRom(t, e) : zA._linear(t) } }, zA.drawIcon = function(t, e, i, n, o, r) {
        var s, a, l = .5 * o,
            h = Ob("rect", r.svgElements, r.svg);
        (h.setAttributeNS(null, "x", e), h.setAttributeNS(null, "y", i - l), h.setAttributeNS(null, "width", n), h.setAttributeNS(null, "height", 2 * l), h.setAttributeNS(null, "class", "vis-outline"), (s = Ob("path", r.svgElements, r.svg)).setAttributeNS(null, "class", t.className), void 0 !== t.style && s.setAttributeNS(null, "style", t.style), s.setAttributeNS(null, "d", "M" + e + "," + i + " L" + (e + n) + "," + i), 1 == t.options.shaded.enabled && (a = Ob("path", r.svgElements, r.svg), "top" == t.options.shaded.orientation ? a.setAttributeNS(null, "d", "M" + e + ", " + (i - l) + "L" + e + "," + i + " L" + (e + n) + "," + i + " L" + (e + n) + "," + (i - l)) : a.setAttributeNS(null, "d", "M" + e + "," + i + " L" + e + "," + (i + l) + " L" + (e + n) + "," + (i + l) + "L" + (e + n) + "," + i), a.setAttributeNS(null, "class", t.className + " vis-icon-fill"), void 0 !== t.options.shaded.style && "" !== t.options.shaded.style && a.setAttributeNS(null, "style", t.options.shaded.style)), 1 == t.options.drawPoints.enabled) && Pb(e + .5 * n, i, { style: t.options.drawPoints.style, styles: t.options.drawPoints.styles, size: t.options.drawPoints.size, className: t.className }, r.svgElements, r.svg)
    }, zA.drawShading = function(t, e, i, n) {
        if (1 == e.options.shaded.enabled) {
            var o, r = Number(n.svg.style.height.replace("px", "")),
                s = Ob("path", n.svgElements, n.svg),
                a = "L";
            1 == e.options.interpolation.enabled && (a = "C");
            var l = 0;
            l = "top" == e.options.shaded.orientation ? 0 : "bottom" == e.options.shaded.orientation ? r : Math.min(Math.max(0, e.zeroPosition), r), o = "group" == e.options.shaded.orientation && null != i && null != i ? "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, a, !1) + " L" + i[i.length - 1][0] + "," + i[i.length - 1][1] + " " + this.serializePath(i, a, !0) + i[0][0] + "," + i[0][1] + " Z" : "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, a, !1) + " V" + l + " H" + t[0][0] + " Z", s.setAttributeNS(null, "class", e.className + " vis-fill"), void 0 !== e.options.shaded.style && s.setAttributeNS(null, "style", e.options.shaded.style), s.setAttributeNS(null, "d", o)
        }
    }, zA.draw = function(t, e, i) {
        if (null != t && null != t) {
            var n = Ob("path", i.svgElements, i.svg);
            n.setAttributeNS(null, "class", e.className), void 0 !== e.style && n.setAttributeNS(null, "style", e.style);
            var o = "L";
            1 == e.options.interpolation.enabled && (o = "C"), n.setAttributeNS(null, "d", "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, o, !1))
        }
    }, zA.serializePath = function(t, e, i) {
        if (t.length < 2) return "";
        var n, o = e;
        if (i)
            for (n = t.length - 2; n > 0; n--) o += t[n][0] + "," + t[n][1] + " ";
        else
            for (n = 1; n < t.length; n++) o += t[n][0] + "," + t[n][1] + " ";
        return o
    }, zA._catmullRomUniform = function(t) {
        var e, i, n, o, r, s, a = [];
        a.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
        for (var l = 1 / 6, h = t.length, u = 0; u < h - 1; u++) e = 0 == u ? t[0] : t[u - 1], i = t[u], n = t[u + 1], o = u + 2 < h ? t[u + 2] : n, r = { screen_x: (-e.screen_x + 6 * i.screen_x + n.screen_x) * l, screen_y: (-e.screen_y + 6 * i.screen_y + n.screen_y) * l }, s = { screen_x: (i.screen_x + 6 * n.screen_x - o.screen_x) * l, screen_y: (i.screen_y + 6 * n.screen_y - o.screen_y) * l }, a.push([r.screen_x, r.screen_y]), a.push([s.screen_x, s.screen_y]), a.push([n.screen_x, n.screen_y]);
        return a
    }, zA._catmullRom = function(t, e) {
        var i = e.options.interpolation.alpha;
        if (0 == i || void 0 === i) return this._catmullRomUniform(t);
        var n, o, r, s, a, l, h, u, d, c, p, f, m, v, g, y, b, _, w, k = [];
        k.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
        for (var x = t.length, D = 0; D < x - 1; D++) n = 0 == D ? t[0] : t[D - 1], o = t[D], r = t[D + 1], s = D + 2 < x ? t[D + 2] : r, h = Math.sqrt(Math.pow(n.screen_x - o.screen_x, 2) + Math.pow(n.screen_y - o.screen_y, 2)), u = Math.sqrt(Math.pow(o.screen_x - r.screen_x, 2) + Math.pow(o.screen_y - r.screen_y, 2)), d = Math.sqrt(Math.pow(r.screen_x - s.screen_x, 2) + Math.pow(r.screen_y - s.screen_y, 2)), v = Math.pow(d, i), y = Math.pow(d, 2 * i), g = Math.pow(u, i), b = Math.pow(u, 2 * i), w = Math.pow(h, i), c = 2 * (_ = Math.pow(h, 2 * i)) + 3 * w * g + b, p = 2 * y + 3 * v * g + b, (f = 3 * w * (w + g)) > 0 && (f = 1 / f), (m = 3 * v * (v + g)) > 0 && (m = 1 / m), a = { screen_x: (-b * n.screen_x + c * o.screen_x + _ * r.screen_x) * f, screen_y: (-b * n.screen_y + c * o.screen_y + _ * r.screen_y) * f }, l = { screen_x: (y * o.screen_x + p * r.screen_x - b * s.screen_x) * m, screen_y: (y * o.screen_y + p * r.screen_y - b * s.screen_y) * m }, 0 == a.screen_x && 0 == a.screen_y && (a = o), 0 == l.screen_x && 0 == l.screen_y && (l = r), k.push([a.screen_x, a.screen_y]), k.push([l.screen_x, l.screen_y]), k.push([r.screen_x, r.screen_y]);
        return k
    }, zA._linear = function(t) { for (var e = [], i = 0; i < t.length; i++) e.push([t[i].screen_x, t[i].screen_y]); return e }, BA.prototype.setItems = function(t) { null != t ? (this.itemsData = t, 1 == $C(this.options) && SO.insertSort(this.itemsData, (function(t, e) { return t.x > e.x ? 1 : -1 }))) : this.itemsData = [] }, BA.prototype.getItems = function() { return this.itemsData }, BA.prototype.setZeroPosition = function(t) { this.zeroPosition = t }, BA.prototype.setOptions = function(t) { if (void 0 !== t) { SO.selectiveDeepExtend(["sampling", "style", "sort", "yAxisOrientation", "barChart", "zIndex", "excludeFromStacking", "excludeFromLegend"], this.options, t), "function" == typeof t.drawPoints && (t.drawPoints = { onRender: t.drawPoints }), SO.mergeOptions(this.options, t, "interpolation"), SO.mergeOptions(this.options, t, "drawPoints"), SO.mergeOptions(this.options, t, "shaded"), t.interpolation && "object" == Rd(t.interpolation) && t.interpolation.parametrization && ("uniform" == t.interpolation.parametrization ? this.options.interpolation.alpha = 0 : "chordal" == t.interpolation.parametrization ? this.options.interpolation.alpha = 1 : (this.options.interpolation.parametrization = "centripetal", this.options.interpolation.alpha = .5)) } }, BA.prototype.update = function(t) { this.group = t, this.content = t.content || "graph", this.className = t.className || this.className || "vis-graph-group" + this.groupsUsingDefaultStyles[0] % 10, this.visible = void 0 === t.visible || t.visible, this.style = t.style, this.setOptions(t.options) }, BA.prototype.getLegend = function(t, e, i, n, o) {
        null != i && null != i || (i = { svg: document.createElementNS("http://www.w3.org/2000/svg", "svg"), svgElements: {}, options: this.options, groups: [this] });
        switch (null != n && null != n || (n = 0), null != o && null != o || (o = .5 * e), this.options.style) {
            case "line":
                zA.drawIcon(this, n, o, t, e, i);
                break;
            case "points":
            case "point":
                jA.drawIcon(this, n, o, t, e, i);
                break;
            case "bar":
                HA.drawIcon(this, n, o, t, e, i)
        }
        return { icon: i.svg, label: this.content, orientation: this.options.yAxisOrientation }
    }, BA.prototype.getYRange = function(t) { for (var e = t[0].y, i = t[0].y, n = 0; n < t.length; n++) e = e > t[n].y ? t[n].y : e, i = i < t[n].y ? t[n].y : i; return { min: e, max: i, yAxisOrientation: this.options.yAxisOrientation } }, GA.prototype = new jO, GA.prototype.clear = function() { this.groups = {}, this.amountOfGroups = 0 }, GA.prototype.addGroup = function(t, e) { 1 != e.options.excludeFromLegend && (this.groups.hasOwnProperty(t) || (this.groups[t] = e), this.amountOfGroups += 1) }, GA.prototype.updateGroup = function(t, e) { this.groups[t] = e }, GA.prototype.removeGroup = function(t) { this.groups.hasOwnProperty(t) && (delete this.groups[t], this.amountOfGroups -= 1) }, GA.prototype._create = function() { this.dom.frame = document.createElement("div"), this.dom.frame.className = "vis-legend", this.dom.frame.style.position = "absolute", this.dom.frame.style.top = "10px", this.dom.frame.style.display = "block", this.dom.textArea = document.createElement("div"), this.dom.textArea.className = "vis-legend-text", this.dom.textArea.style.position = "relative", this.dom.textArea.style.top = "0px", this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "absolute", this.svg.style.top = "0px", this.svg.style.width = this.options.iconSize + 5 + "px", this.svg.style.height = "100%", this.dom.frame.appendChild(this.svg), this.dom.frame.appendChild(this.dom.textArea) }, GA.prototype.hide = function() { this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame) }, GA.prototype.show = function() { this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame) }, GA.prototype.setOptions = function(t) { SO.selectiveDeepExtend(["enabled", "orientation", "icons", "left", "right"], this.options, t) }, GA.prototype.redraw = function() {
        var t = 0,
            e = pc(this.groups);
        $C(e).call(e, (function(t, e) { return t < e ? -1 : 1 }));
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            1 != this.groups[n].visible || void 0 !== this.linegraphOptions.visibility[n] && 1 != this.linegraphOptions.visibility[n] || t++
        }
        if (0 == this.options[this.side].visible || 0 == this.amountOfGroups || 0 == this.options.enabled || 0 == t) this.hide();
        else {
            if (this.show(), "top-left" == this.options[this.side].position || "bottom-left" == this.options[this.side].position ? (this.dom.frame.style.left = "4px", this.dom.frame.style.textAlign = "left", this.dom.textArea.style.textAlign = "left", this.dom.textArea.style.left = this.options.iconSize + 15 + "px", this.dom.textArea.style.right = "", this.svg.style.left = "0px", this.svg.style.right = "") : (this.dom.frame.style.right = "4px", this.dom.frame.style.textAlign = "right", this.dom.textArea.style.textAlign = "right", this.dom.textArea.style.right = this.options.iconSize + 15 + "px", this.dom.textArea.style.left = "", this.svg.style.right = "0px", this.svg.style.left = ""), "top-left" == this.options[this.side].position || "top-right" == this.options[this.side].position) this.dom.frame.style.top = 4 - Number(this.body.dom.center.style.top.replace("px", "")) + "px", this.dom.frame.style.bottom = "";
            else {
                var o = this.body.domProps.center.height - this.body.domProps.centerContainer.height;
                this.dom.frame.style.bottom = 4 + o + Number(this.body.dom.center.style.top.replace("px", "")) + "px", this.dom.frame.style.top = ""
            }
            0 == this.options.icons ? (this.dom.frame.style.width = this.dom.textArea.offsetWidth + 10 + "px", this.dom.textArea.style.right = "", this.dom.textArea.style.left = "", this.svg.style.width = "0px") : (this.dom.frame.style.width = this.options.iconSize + 15 + this.dom.textArea.offsetWidth + 10 + "px", this.drawLegendIcons());
            var r = "";
            for (i = 0; i < e.length; i++) n = e[i], 1 != this.groups[n].visible || void 0 !== this.linegraphOptions.visibility[n] && 1 != this.linegraphOptions.visibility[n] || (r += this.groups[n].content + "<br />");
            this.dom.textArea.innerHTML = SO.xss(r), this.dom.textArea.style.lineHeight = .75 * this.options.iconSize + this.options.iconSpacing + "px"
        }
    }, GA.prototype.drawLegendIcons = function() {
        if (this.dom.frame.parentNode) {
            var t = pc(this.groups);
            $C(t).call(t, (function(t, e) { return t < e ? -1 : 1 })), Mb(this.svgElements);
            var e = window.getComputedStyle(this.dom.frame).paddingTop,
                i = Number(e.replace("px", "")),
                n = i,
                o = this.options.iconSize,
                r = .75 * this.options.iconSize,
                s = i + .5 * r + 3;
            this.svg.style.width = o + 5 + i + "px";
            for (var a = 0; a < t.length; a++) {
                var l = t[a];
                1 != this.groups[l].visible || void 0 !== this.linegraphOptions.visibility[l] && 1 != this.linegraphOptions.visibility[l] || (this.groups[l].getLegend(o, r, this.framework, n, s), s += r + this.options.iconSpacing)
            }
        }
    };
    var WA = "__ungrouped__";

    function VA(t, e) {
        this.id = qT(), this.body = t, this.defaultOptions = { yAxisOrientation: "left", defaultGroup: "default", sort: !0, sampling: !0, stack: !1, graphHeight: "400px", shaded: { enabled: !1, orientation: "bottom" }, style: "line", barChart: { width: 50, sideBySide: !1, align: "center" }, interpolation: { enabled: !0, parametrization: "centripetal", alpha: .5 }, drawPoints: { enabled: !0, size: 6, style: "square" }, dataAxis: {}, legend: {}, groups: { visibility: {} } }, this.options = SO.extend({}, this.defaultOptions), this.dom = {}, this.props = {}, this.hammer = null, this.groups = {}, this.abortedGraphUpdate = !1, this.updateSVGheight = !1, this.updateSVGheightOnResize = !1, this.forceGraphUpdate = !0;
        var i = this;
        this.itemsData = null, this.groupsData = null, this.itemListeners = { add: function(t, e, n) { i._onAdd(e.items) }, update: function(t, e, n) { i._onUpdate(e.items) }, remove: function(t, e, n) { i._onRemove(e.items) } }, this.groupListeners = { add: function(t, e, n) { i._onAddGroups(e.items) }, update: function(t, e, n) { i._onUpdateGroups(e.items) }, remove: function(t, e, n) { i._onRemoveGroups(e.items) } }, this.items = {}, this.selection = [], this.lastStart = this.body.range.start, this.touchParams = {}, this.svgElements = {}, this.setOptions(e), this.groupsUsingDefaultStyles = [0], this.body.emitter.on("rangechanged", (function() { i.svg.style.left = SO.option.asSize(-i.props.width), i.forceGraphUpdate = !0, i.redraw.call(i) })), this._create(), this.framework = { svg: this.svg, svgElements: this.svgElements, options: this.options, groups: this.groups }
    }
    VA.prototype = new jO, VA.prototype._create = function() {
        var t = document.createElement("div");
        t.className = "vis-line-graph", this.dom.frame = t, this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.svg.style.position = "relative", this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px", this.svg.style.display = "block", t.appendChild(this.svg), this.options.dataAxis.orientation = "left", this.yAxisLeft = new RA(this.body, this.options.dataAxis, this.svg, this.options.groups), this.options.dataAxis.orientation = "right", this.yAxisRight = new RA(this.body, this.options.dataAxis, this.svg, this.options.groups), delete this.options.dataAxis.orientation, this.legendLeft = new GA(this.body, this.options.legend, "left", this.options.groups), this.legendRight = new GA(this.body, this.options.legend, "right", this.options.groups), this.show()
    }, VA.prototype.setOptions = function(t) {
        if (t) { void 0 === t.graphHeight && void 0 !== t.height ? (this.updateSVGheight = !0, this.updateSVGheightOnResize = !0) : void 0 !== this.body.domProps.centerContainer.height && void 0 !== t.graphHeight && pm((t.graphHeight + "").replace("px", "")) < this.body.domProps.centerContainer.height && (this.updateSVGheight = !0), SO.selectiveDeepExtend(["sampling", "defaultGroup", "stack", "height", "graphHeight", "yAxisOrientation", "style", "barChart", "dataAxis", "sort", "groups"], this.options, t), SO.mergeOptions(this.options, t, "interpolation"), SO.mergeOptions(this.options, t, "drawPoints"), SO.mergeOptions(this.options, t, "shaded"), SO.mergeOptions(this.options, t, "legend"), t.interpolation && "object" == Rd(t.interpolation) && t.interpolation.parametrization && ("uniform" == t.interpolation.parametrization ? this.options.interpolation.alpha = 0 : "chordal" == t.interpolation.parametrization ? this.options.interpolation.alpha = 1 : (this.options.interpolation.parametrization = "centripetal", this.options.interpolation.alpha = .5)), this.yAxisLeft && void 0 !== t.dataAxis && (this.yAxisLeft.setOptions(this.options.dataAxis), this.yAxisRight.setOptions(this.options.dataAxis)), this.legendLeft && void 0 !== t.legend && (this.legendLeft.setOptions(this.options.legend), this.legendRight.setOptions(this.options.legend)), this.groups.hasOwnProperty(WA) && this.groups[WA].setOptions(t) }
        this.dom.frame && (this.forceGraphUpdate = !0, this.body.emitter.emit("_change", { queue: !0 }))
    }, VA.prototype.hide = function() { this.dom.frame.parentNode && this.dom.frame.parentNode.removeChild(this.dom.frame) }, VA.prototype.show = function() { this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame) }, VA.prototype.setItems = function(t) {
        var e, i = this,
            n = this.itemsData;
        if (t) {
            if (!gO(t)) throw new TypeError("Data must implement the interface of DataSet or DataView");
            this.itemsData = wO(t)
        } else this.itemsData = null;
        if (n && (tp(SO).call(SO, this.itemListeners, (function(t, e) { n.off(e, t) })), n.dispose(), e = n.getIds(), this._onRemove(e)), this.itemsData) {
            var o = this.id;
            tp(SO).call(SO, this.itemListeners, (function(t, e) { i.itemsData.on(e, t, o) })), e = this.itemsData.getIds(), this._onAdd(e)
        }
    }, VA.prototype.setGroups = function(t) {
        var e, i = this;
        if (this.groupsData) { tp(SO).call(SO, this.groupListeners, (function(t, e) { i.groupsData.off(e, t) })), e = this.groupsData.getIds(), this.groupsData = null; for (var n = 0; n < e.length; n++) this._removeGroup(e[n]) }
        if (t) {
            if (!gO(t)) throw new TypeError("Data must implement the interface of DataSet or DataView");
            this.groupsData = t
        } else this.groupsData = null;
        if (this.groupsData) {
            var o = this.id;
            tp(SO).call(SO, this.groupListeners, (function(t, e) { i.groupsData.on(e, t, o) })), e = this.groupsData.getIds(), this._onAddGroups(e)
        }
    }, VA.prototype._onUpdate = function(t) { this._updateAllGroupData(t) }, VA.prototype._onAdd = function(t) { this._onUpdate(t) }, VA.prototype._onRemove = function(t) { this._onUpdate(t) }, VA.prototype._onUpdateGroups = function(t) { this._updateAllGroupData(null, t) }, VA.prototype._onAddGroups = function(t) { this._onUpdateGroups(t) }, VA.prototype._onRemoveGroups = function(t) {
        for (var e = 0; e < t.length; e++) this._removeGroup(t[e]);
        this.forceGraphUpdate = !0, this.body.emitter.emit("_change", { queue: !0 })
    }, VA.prototype._removeGroup = function(t) { this.groups.hasOwnProperty(t) && ("right" == this.groups[t].options.yAxisOrientation ? (this.yAxisRight.removeGroup(t), this.legendRight.removeGroup(t), this.legendRight.redraw()) : (this.yAxisLeft.removeGroup(t), this.legendLeft.removeGroup(t), this.legendLeft.redraw()), delete this.groups[t]) }, VA.prototype._updateGroup = function(t, e) { this.groups.hasOwnProperty(e) ? (this.groups[e].update(t), "right" == this.groups[e].options.yAxisOrientation ? (this.yAxisRight.updateGroup(e, this.groups[e]), this.legendRight.updateGroup(e, this.groups[e]), this.yAxisLeft.removeGroup(e), this.legendLeft.removeGroup(e)) : (this.yAxisLeft.updateGroup(e, this.groups[e]), this.legendLeft.updateGroup(e, this.groups[e]), this.yAxisRight.removeGroup(e), this.legendRight.removeGroup(e))) : (this.groups[e] = new BA(t, e, this.options, this.groupsUsingDefaultStyles), "right" == this.groups[e].options.yAxisOrientation ? (this.yAxisRight.addGroup(e, this.groups[e]), this.legendRight.addGroup(e, this.groups[e])) : (this.yAxisLeft.addGroup(e, this.groups[e]), this.legendLeft.addGroup(e, this.groups[e]))), this.legendLeft.redraw(), this.legendRight.redraw() }, VA.prototype._updateAllGroupData = function(t, e) {
        if (null != this.itemsData) {
            var i = {},
                n = this.itemsData.get(),
                o = this.itemsData.idProp,
                r = {};
            t && lc(t).call(t, (function(t) { r[t] = t }));
            for (var s = {}, a = 0; a < n.length; a++) {
                var l = n[a],
                    h = l.group;
                null == h && (h = WA), s.hasOwnProperty(h) ? s[h]++ : s[h] = 1
            }
            var u = {};
            if (!e && t)
                for (h in this.groups)
                    if (this.groups.hasOwnProperty(h)) {
                        var d = (m = this.groups[h]).getItems();
                        i[h] = Af(d).call(d, (function(t) { return u[t[o]] = t[o], t[o] !== r[t[o]] }));
                        var c = s[h];
                        s[h] -= i[h].length, i[h].length < c && (i[h][c - 1] = {})
                    }
            for (a = 0; a < n.length; a++)
                if (null == (h = (l = n[a]).group) && (h = WA), e || !t || l[o] === r[l[o]] || !u.hasOwnProperty(l[o])) {
                    i.hasOwnProperty(h) || (i[h] = new Array(s[h]));
                    var p = SO.bridgeObject(l);
                    p.x = SO.convert(l.x, "Date"), p.end = SO.convert(l.end, "Date"), p.orginalY = l.y, p.y = Number(l.y), p[o] = l[o];
                    var f = i[h].length - s[h]--;
                    i[h][f] = p
                }
            for (h in this.groups) this.groups.hasOwnProperty(h) && (i.hasOwnProperty(h) || (i[h] = new Array(0)));
            for (h in i)
                if (i.hasOwnProperty(h))
                    if (0 == i[h].length) this.groups.hasOwnProperty(h) && this._removeGroup(h);
                    else {
                        var m = void 0;
                        null != this.groupsData && (m = this.groupsData.get(h)), null == m && (m = { id: h, content: this.options.defaultGroup + h }), this._updateGroup(m, h), this.groups[h].setItems(i[h])
                    }
            this.forceGraphUpdate = !0, this.body.emitter.emit("_change", { queue: !0 })
        }
    }, VA.prototype.redraw = function() {
        var t = !1;
        this.props.width = this.dom.frame.offsetWidth, this.props.height = this.body.domProps.centerContainer.height - this.body.domProps.border.top - this.body.domProps.border.bottom, t = this._isResized() || t;
        var e, i = this.body.range.end - this.body.range.start,
            n = i != this.lastVisibleInterval;
        (this.lastVisibleInterval = i, 1 == t) && (this.svg.style.width = SO.option.asSize(3 * this.props.width), this.svg.style.left = SO.option.asSize(-this.props.width), -1 == Cm(e = this.options.height + "").call(e, "%") && 1 != this.updateSVGheightOnResize || (this.updateSVGheight = !0));
        if (1 == this.updateSVGheight ? (this.options.graphHeight != this.props.height + "px" && (this.options.graphHeight = this.props.height + "px", this.svg.style.height = this.props.height + "px"), this.updateSVGheight = !1) : this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px", 1 == t || 1 == n || 1 == this.abortedGraphUpdate || 1 == this.forceGraphUpdate) t = this._updateGraph() || t, this.forceGraphUpdate = !1, this.lastStart = this.body.range.start, this.svg.style.left = -this.props.width + "px";
        else if (0 != this.lastStart) {
            var o = this.body.range.start - this.lastStart,
                r = this.body.range.end - this.body.range.start;
            if (0 != this.props.width) {
                var s = o * (this.props.width / r);
                this.svg.style.left = -this.props.width - s + "px"
            }
        }
        return this.legendLeft.redraw(), this.legendRight.redraw(), t
    }, VA.prototype._getSortedGroupIds = function() {
        var t = [];
        for (var e in this.groups)
            if (this.groups.hasOwnProperty(e)) {
                var i = this.groups[e];
                1 != i.visible || void 0 !== this.options.groups.visibility[e] && 1 != this.options.groups.visibility[e] || t.push({ id: e, zIndex: i.options.zIndex })
            }
        SO.insertSort(t, (function(t, e) {
            var i = t.zIndex,
                n = e.zIndex;
            return void 0 === i && (i = 0), void 0 === n && (n = 0), i == n ? 0 : i < n ? -1 : 1
        }));
        for (var n = new Array(t.length), o = 0; o < t.length; o++) n[o] = t[o].id;
        return n
    }, VA.prototype._updateGraph = function() {
        if (Cb(this.svgElements), 0 != this.props.width && null != this.itemsData) {
            var t, e, i = {},
                n = this.body.util.toGlobalTime(-this.body.domProps.root.width),
                o = this.body.util.toGlobalTime(2 * this.body.domProps.root.width),
                r = this._getSortedGroupIds();
            if (r.length > 0) {
                var s = {};
                for (this._getRelevantData(r, s, n, o), this._applySampling(r, s), e = 0; e < r.length; e++) this._convertXcoordinates(s[r[e]]);
                if (this._getYRanges(r, s, i), 1 == this._updateYAxis(r, i)) return Tb(this.svgElements), this.abortedGraphUpdate = !0, !0;
                this.abortedGraphUpdate = !1;
                var a = void 0;
                for (e = 0; e < r.length; e++) t = this.groups[r[e]], !0 === this.options.stack && "line" === this.options.style && (null != t.options.excludeFromStacking && t.options.excludeFromStacking || (null != a && (this._stack(s[t.id], s[a.id]), 1 == t.options.shaded.enabled && "group" !== t.options.shaded.orientation && ("top" == t.options.shaded.orientation && "group" !== a.options.shaded.orientation ? (a.options.shaded.orientation = "group", a.options.shaded.groupId = t.id) : (t.options.shaded.orientation = "group", t.options.shaded.groupId = a.id))), a = t)), this._convertYcoordinates(s[r[e]], t);
                var l = {};
                for (e = 0; e < r.length; e++)
                    if ("line" === (t = this.groups[r[e]]).options.style && 1 == t.options.shaded.enabled) {
                        var h = s[r[e]];
                        if (null == h || 0 == h.length) continue;
                        if (l.hasOwnProperty(r[e]) || (l[r[e]] = zA.calcPath(h, t)), "group" === t.options.shaded.orientation) {
                            var u = t.options.shaded.groupId;
                            if (-1 === Cm(r).call(r, u)) { console.log(t.id + ": Unknown shading group target given:" + u); continue }
                            l.hasOwnProperty(u) || (l[u] = zA.calcPath(s[u], this.groups[u])), zA.drawShading(l[r[e]], t, l[u], this.framework)
                        } else zA.drawShading(l[r[e]], t, void 0, this.framework)
                    }
                for (HA.draw(r, s, this.framework), e = 0; e < r.length; e++)
                    if (t = this.groups[r[e]], s[r[e]].length > 0) switch (t.options.style) {
                        case "line":
                            l.hasOwnProperty(r[e]) || (l[r[e]] = zA.calcPath(s[r[e]], t)), zA.draw(l[r[e]], t, this.framework);
                        case "point":
                        case "points":
                            "point" != t.options.style && "points" != t.options.style && 1 != t.options.drawPoints.enabled || jA.draw(s[r[e]], t, this.framework)
                    }
            }
        }
        return Tb(this.svgElements), !1
    }, VA.prototype._stack = function(t, e) {
        var i, n, o, r, s;
        i = 0;
        for (var a = 0; a < t.length; a++) {
            r = void 0, s = void 0;
            for (var l = i; l < e.length; l++) { if (e[l].x === t[a].x) { r = e[l], s = e[l], i = l; break } if (e[l].x > t[a].x) { s = e[l], r = 0 == l ? s : e[l - 1], i = l; break } }
            void 0 === s && (r = e[e.length - 1], s = e[e.length - 1]), n = s.x - r.x, o = s.y - r.y, t[a].y = 0 == n ? t[a].orginalY + s.y : t[a].orginalY + o / n * (t[a].x - r.x) + r.y
        }
    }, VA.prototype._getRelevantData = function(t, e, i, n) {
        var o, r, s, a;
        if (t.length > 0)
            for (r = 0; r < t.length; r++) {
                var l = (o = this.groups[t[r]]).getItems();
                if (1 == $C(o.options)) {
                    var h = function(t, e) { return t.getTime() == e.getTime() ? 0 : t < e ? -1 : 1 },
                        u = Math.max(0, SO.binarySearchValue(l, i, "x", "before", h)),
                        d = Math.min(l.length, SO.binarySearchValue(l, n, "x", "after", h) + 1);
                    d <= 0 && (d = l.length);
                    var c = new Array(d - u);
                    for (s = u; s < d; s++) a = o.itemsData[s], c[s - u] = a;
                    e[t[r]] = c
                } else e[t[r]] = o.itemsData
            }
    }, VA.prototype._applySampling = function(t, e) {
        if (t.length > 0)
            for (var i = 0; i < t.length; i++)
                if (1 == this.groups[t[i]].options.sampling) {
                    var n = e[t[i]];
                    if (n.length > 0) {
                        var o, r = n.length,
                            s = r / (this.body.util.toGlobalScreen(n[n.length - 1].x) - this.body.util.toGlobalScreen(n[0].x));
                        o = Math.min(Math.ceil(.2 * r), Math.max(1, Math.round(s)));
                        for (var a = new Array(r), l = 0; l < r; l += o) { a[Math.round(l / o)] = n[l] }
                        e[t[i]] = Ap(a).call(a, 0, Math.round(r / o))
                    }
                }
    }, VA.prototype._getYRanges = function(t, e, i) {
        var n, o, r, s, a = [],
            l = [];
        if (t.length > 0) {
            for (r = 0; r < t.length; r++) n = e[t[r]], s = this.groups[t[r]].options, n.length > 0 && (o = this.groups[t[r]], !0 === s.stack && "bar" === s.style ? "left" === s.yAxisOrientation ? a = Xd(a).call(a, n) : l = Xd(l).call(l, n) : i[t[r]] = o.getYRange(n, t[r]));
            HA.getStackedYRange(a, i, t, "__barStackLeft", "left"), HA.getStackedYRange(l, i, t, "__barStackRight", "right")
        }
    }, VA.prototype._updateYAxis = function(t, e) {
        var i, n, o = !1,
            r = !1,
            s = !1,
            a = 1e9,
            l = 1e9,
            h = -1e9,
            u = -1e9;
        if (t.length > 0) {
            for (var d = 0; d < t.length; d++) {
                var c = this.groups[t[d]];
                c && "right" != c.options.yAxisOrientation ? (r = !0, a = 1e9, h = -1e9) : c && c.options.yAxisOrientation && (s = !0, l = 1e9, u = -1e9)
            }
            for (d = 0; d < t.length; d++) e.hasOwnProperty(t[d]) && !0 !== e[t[d]].ignore && (i = e[t[d]].min, n = e[t[d]].max, "right" != e[t[d]].yAxisOrientation ? (r = !0, a = a > i ? i : a, h = h < n ? n : h) : (s = !0, l = l > i ? i : l, u = u < n ? n : u));
            1 == r && this.yAxisLeft.setRange(a, h), 1 == s && this.yAxisRight.setRange(l, u)
        }
        o = this._toggleAxisVisiblity(r, this.yAxisLeft) || o, o = this._toggleAxisVisiblity(s, this.yAxisRight) || o, 1 == s && 1 == r ? (this.yAxisLeft.drawIcons = !0, this.yAxisRight.drawIcons = !0) : (this.yAxisLeft.drawIcons = !1, this.yAxisRight.drawIcons = !1), this.yAxisRight.master = !r, this.yAxisRight.masterAxis = this.yAxisLeft, 0 == this.yAxisRight.master ? (this.yAxisLeft.lineOffset = 1 == s ? this.yAxisRight.width : 0, o = this.yAxisLeft.redraw() || o, o = this.yAxisRight.redraw() || o) : o = this.yAxisRight.redraw() || o;
        var p = ["__barStackLeft", "__barStackRight", "__lineStackLeft", "__lineStackRight"];
        for (d = 0; d < p.length; d++) - 1 != Cm(t).call(t, p[d]) && Ap(t).call(t, Cm(t).call(t, p[d]), 1);
        return o
    }, VA.prototype._toggleAxisVisiblity = function(t, e) { var i = !1; return 0 == t ? e.dom.frame.parentNode && 0 == e.hidden && (e.hide(), i = !0) : e.dom.frame.parentNode || 1 != e.hidden || (e.show(), i = !0), i }, VA.prototype._convertXcoordinates = function(t) { for (var e = this.body.util.toScreen, i = 0; i < t.length; i++) t[i].screen_x = e(t[i].x) + this.props.width, t[i].screen_y = t[i].y, null != t[i].end ? t[i].screen_end = e(t[i].end) + this.props.width : t[i].screen_end = void 0 }, VA.prototype._convertYcoordinates = function(t, e) {
        var i = this.yAxisLeft,
            n = Number(this.svg.style.height.replace("px", ""));
        "right" == e.options.yAxisOrientation && (i = this.yAxisRight);
        for (var o = 0; o < t.length; o++) t[o].screen_y = Math.round(i.convertValue(t[o].y));
        e.setZeroPosition(Math.min(n, i.convertValue(0)))
    };
    var UA = "string",
        XA = "boolean",
        qA = "number",
        $A = "date",
        ZA = "object",
        KA = "moment",
        JA = { configure: { enabled: { boolean: XA }, filter: { boolean: XA, function: "function" }, container: { dom: "dom" }, __type__: { object: ZA, boolean: XA, function: "function" } }, alignCurrentTime: { string: UA, undefined: "undefined" }, yAxisOrientation: { string: ["left", "right"] }, defaultGroup: { string: UA }, sort: { boolean: XA }, sampling: { boolean: XA }, stack: { boolean: XA }, graphHeight: { string: UA, number: qA }, shaded: { enabled: { boolean: XA }, orientation: { string: ["bottom", "top", "zero", "group"] }, groupId: { object: ZA }, __type__: { boolean: XA, object: ZA } }, style: { string: ["line", "bar", "points"] }, barChart: { width: { number: qA }, minWidth: { number: qA }, sideBySide: { boolean: XA }, align: { string: ["left", "center", "right"] }, __type__: { object: ZA } }, interpolation: { enabled: { boolean: XA }, parametrization: { string: ["centripetal", "chordal", "uniform"] }, alpha: { number: qA }, __type__: { object: ZA, boolean: XA } }, drawPoints: { enabled: { boolean: XA }, onRender: { function: "function" }, size: { number: qA }, style: { string: ["square", "circle"] }, __type__: { object: ZA, boolean: XA, function: "function" } }, dataAxis: { showMinorLabels: { boolean: XA }, showMajorLabels: { boolean: XA }, showWeekScale: { boolean: XA }, icons: { boolean: XA }, width: { string: UA, number: qA }, visible: { boolean: XA }, alignZeros: { boolean: XA }, left: { range: { min: { number: qA, undefined: "undefined" }, max: { number: qA, undefined: "undefined" }, __type__: { object: ZA } }, format: { function: "function" }, title: { text: { string: UA, number: qA, undefined: "undefined" }, style: { string: UA, undefined: "undefined" }, __type__: { object: ZA } }, __type__: { object: ZA } }, right: { range: { min: { number: qA, undefined: "undefined" }, max: { number: qA, undefined: "undefined" }, __type__: { object: ZA } }, format: { function: "function" }, title: { text: { string: UA, number: qA, undefined: "undefined" }, style: { string: UA, undefined: "undefined" }, __type__: { object: ZA } }, __type__: { object: ZA } }, __type__: { object: ZA } }, legend: { enabled: { boolean: XA }, icons: { boolean: XA }, left: { visible: { boolean: XA }, position: { string: ["top-right", "bottom-right", "top-left", "bottom-left"] }, __type__: { object: ZA } }, right: { visible: { boolean: XA }, position: { string: ["top-right", "bottom-right", "top-left", "bottom-left"] }, __type__: { object: ZA } }, __type__: { object: ZA, boolean: XA } }, groups: { visibility: { any: "any" }, __type__: { object: ZA } }, autoResize: { boolean: XA }, throttleRedraw: { number: qA }, clickToUse: { boolean: XA }, end: { number: qA, date: $A, string: UA, moment: KA }, format: { minorLabels: { millisecond: { string: UA, undefined: "undefined" }, second: { string: UA, undefined: "undefined" }, minute: { string: UA, undefined: "undefined" }, hour: { string: UA, undefined: "undefined" }, weekday: { string: UA, undefined: "undefined" }, day: { string: UA, undefined: "undefined" }, week: { string: UA, undefined: "undefined" }, month: { string: UA, undefined: "undefined" }, quarter: { string: UA, undefined: "undefined" }, year: { string: UA, undefined: "undefined" }, __type__: { object: ZA } }, majorLabels: { millisecond: { string: UA, undefined: "undefined" }, second: { string: UA, undefined: "undefined" }, minute: { string: UA, undefined: "undefined" }, hour: { string: UA, undefined: "undefined" }, weekday: { string: UA, undefined: "undefined" }, day: { string: UA, undefined: "undefined" }, week: { string: UA, undefined: "undefined" }, month: { string: UA, undefined: "undefined" }, quarter: { string: UA, undefined: "undefined" }, year: { string: UA, undefined: "undefined" }, __type__: { object: ZA } }, __type__: { object: ZA } }, moment: { function: "function" }, height: { string: UA, number: qA }, hiddenDates: { start: { date: $A, number: qA, string: UA, moment: KA }, end: { date: $A, number: qA, string: UA, moment: KA }, repeat: { string: UA }, __type__: { object: ZA, array: "array" } }, locale: { string: UA }, locales: { __any__: { any: "any" }, __type__: { object: ZA } }, max: { date: $A, number: qA, string: UA, moment: KA }, maxHeight: { number: qA, string: UA }, maxMinorChars: { number: qA }, min: { date: $A, number: qA, string: UA, moment: KA }, minHeight: { number: qA, string: UA }, moveable: { boolean: XA }, multiselect: { boolean: XA }, orientation: { string: UA }, showCurrentTime: { boolean: XA }, showMajorLabels: { boolean: XA }, showMinorLabels: { boolean: XA }, showWeekScale: { boolean: XA }, snap: { function: "function", null: "null" }, start: { date: $A, number: qA, string: UA, moment: KA }, timeAxis: { scale: { string: UA, undefined: "undefined" }, step: { number: qA, undefined: "undefined" }, __type__: { object: ZA } }, width: { string: UA, number: qA }, zoomable: { boolean: XA }, zoomKey: { string: ["ctrlKey", "altKey", "metaKey", ""] }, zoomMax: { number: qA }, zoomMin: { number: qA }, zIndex: { number: qA }, __type__: { object: ZA } },
        QA = { global: { alignCurrentTime: ["none", "year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute", "second"], sort: !0, sampling: !0, stack: !1, shaded: { enabled: !1, orientation: ["zero", "top", "bottom", "group"] }, style: ["line", "bar", "points"], barChart: { width: [50, 5, 100, 5], minWidth: [50, 5, 100, 5], sideBySide: !1, align: ["left", "center", "right"] }, interpolation: { enabled: !0, parametrization: ["centripetal", "chordal", "uniform"] }, drawPoints: { enabled: !0, size: [6, 2, 30, 1], style: ["square", "circle"] }, dataAxis: { showMinorLabels: !0, showMajorLabels: !0, showWeekScale: !1, icons: !1, width: [40, 0, 200, 1], visible: !0, alignZeros: !0, left: { title: { text: "", style: "" } }, right: { title: { text: "", style: "" } } }, legend: { enabled: !1, icons: !0, left: { visible: !0, position: ["top-right", "bottom-right", "top-left", "bottom-left"] }, right: { visible: !0, position: ["top-right", "bottom-right", "top-left", "bottom-left"] } }, autoResize: !0, clickToUse: !1, end: "", format: { minorLabels: { millisecond: "SSS", second: "s", minute: "HH:mm", hour: "HH:mm", weekday: "ddd D", day: "D", week: "w", month: "MMM", quarter: "[Q]Q", year: "YYYY" }, majorLabels: { millisecond: "HH:mm:ss", second: "D MMMM HH:mm", minute: "ddd D MMMM", hour: "ddd D MMMM", weekday: "MMMM YYYY", day: "MMMM YYYY", week: "MMMM YYYY", month: "YYYY", quarter: "YYYY", year: "" } }, height: "", locale: "", max: "", maxHeight: "", maxMinorChars: [7, 0, 20, 1], min: "", minHeight: "", moveable: !0, orientation: ["both", "bottom", "top"], showCurrentTime: !1, showMajorLabels: !0, showMinorLabels: !0, showWeekScale: !1, start: "", width: "100%", zoomable: !0, zoomKey: ["ctrlKey", "altKey", "metaKey", ""], zoomMax: [31536e10, 10, 31536e10, 1], zoomMin: [10, 10, 31536e10, 1], zIndex: 0 } };

    function tI(t, e, i, n) {
        var o, r, s, a, l, h, u;
        if (!tc(i) && !gO(i) && i instanceof Object) {
            var d = n;
            n = i, i = d
        }
        n && n.throttleRedraw && console.warn('Graph2d option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');
        var c = this;
        this.defaultOptions = { start: null, end: null, autoResize: !0, orientation: { axis: "bottom", item: "bottom" }, moment: cM, width: null, height: null, maxHeight: null, minHeight: null }, this.options = SO.deepExtend({}, this.defaultOptions), this._create(t), this.components = [], this.body = { dom: this.dom, domProps: this.props, emitter: { on: Hc(o = this.on).call(o, this), off: Hc(r = this.off).call(r, this), emit: Hc(s = this.emit).call(s, this) }, hiddenDates: [], util: { getScale: function() { return c.timeAxis.step.scale }, getStep: function() { return c.timeAxis.step.step }, toScreen: Hc(a = c._toScreen).call(a, c), toGlobalScreen: Hc(l = c._toGlobalScreen).call(l, c), toTime: Hc(h = c._toTime).call(h, c), toGlobalTime: Hc(u = c._toGlobalTime).call(u, c) } }, this.range = new dE(this.body), this.components.push(this.range), this.body.range = this.range, this.timeAxis = new xE(this.body), this.components.push(this.timeAxis), this.currentTime = new UE(this.body), this.components.push(this.currentTime), this.linegraph = new VA(this.body), this.components.push(this.linegraph), this.itemsData = null, this.groupsData = null, this.on("tap", (function(t) { c.emit("click", c.getEventProperties(t)) })), this.on("doubletap", (function(t) { c.emit("doubleClick", c.getEventProperties(t)) })), this.dom.root.oncontextmenu = function(t) { c.emit("contextmenu", c.getEventProperties(t)) }, this.initialFitDone = !1, this.on("changed", (function() {
            if (null != c.itemsData) {
                if (!c.initialFitDone && !c.options.rollingMode)
                    if (c.initialFitDone = !0, null != c.options.start || null != c.options.end) {
                        if (null == c.options.start || null == c.options.end) var t = c.getItemRange();
                        var e = null != c.options.start ? c.options.start : t.min,
                            i = null != c.options.end ? c.options.end : t.max;
                        c.setWindow(e, i, { animation: !1 })
                    } else c.fit({ animation: !1 });
                c.initialDrawDone || !c.initialRangeChangeDone && (c.options.start || c.options.end) && !c.options.rollingMode || (c.initialDrawDone = !0, c.dom.root.style.visibility = "visible", c.dom.loadingScreen.parentNode.removeChild(c.dom.loadingScreen), c.options.onInitialDrawComplete && xv((function() { return c.options.onInitialDrawComplete() }), 0))
            }
        })), n && this.setOptions(n), i && this.setGroups(i), e && this.setItems(e), this._redraw()
    }
    tI.prototype = new WE, tI.prototype.setOptions = function(t) {!0 === mA.validate(t, JA) && console.log("%cErrors have been found in the supplied options object.", fA), WE.prototype.setOptions.call(this, t) }, tI.prototype.setItems = function(t) {
        var e, i = null == this.itemsData;
        if (e = t ? gO(t) ? wO(t) : wO(new hM(t)) : null, this.itemsData && this.itemsData.dispose(), this.itemsData = e, this.linegraph && this.linegraph.setItems(null != e ? e.rawDS : null), i)
            if (null != this.options.start || null != this.options.end) {
                var n = null != this.options.start ? this.options.start : null,
                    o = null != this.options.end ? this.options.end : null;
                this.setWindow(n, o, { animation: !1 })
            } else this.fit({ animation: !1 })
    }, tI.prototype.setGroups = function(t) {
        var e;
        e = t ? gO(t) ? t : new hM(t) : null, this.groupsData = e, this.linegraph.setGroups(e)
    }, tI.prototype.getLegend = function(t, e, i) { return void 0 === e && (e = 15), void 0 === i && (i = 15), void 0 !== this.linegraph.groups[t] ? this.linegraph.groups[t].getLegend(e, i) : "cannot find group:'" + t + "'" }, tI.prototype.isGroupVisible = function(t) { return void 0 !== this.linegraph.groups[t] && (this.linegraph.groups[t].visible && (void 0 === this.linegraph.options.groups.visibility[t] || 1 == this.linegraph.options.groups.visibility[t])) }, tI.prototype.getDataRange = function() {
        var t = null,
            e = null;
        for (var i in this.linegraph.groups)
            if (this.linegraph.groups.hasOwnProperty(i) && 1 == this.linegraph.groups[i].visible)
                for (var n = 0; n < this.linegraph.groups[i].itemsData.length; n++) {
                    var o = this.linegraph.groups[i].itemsData[n],
                        r = SO.convert(o.x, "Date").valueOf();
                    t = null == t || t > r ? r : t, e = null == e || e < r ? r : e
                }
        return { min: null != t ? new Date(t) : null, max: null != e ? new Date(e) : null }
    }, tI.prototype.getEventProperties = function(t) {
        var e = t.center ? t.center.x : t.clientX,
            i = t.center ? t.center.y : t.clientY,
            n = e - SO.getAbsoluteLeft(this.dom.centerContainer),
            o = i - SO.getAbsoluteTop(this.dom.centerContainer),
            r = this._toTime(n),
            s = GE.customTimeFromTarget(t),
            a = SO.getTarget(t),
            l = null;
        SO.hasParent(a, this.timeAxis.dom.foreground) || this.timeAxis2 && SO.hasParent(a, this.timeAxis2.dom.foreground) ? l = "axis" : SO.hasParent(a, this.linegraph.yAxisLeft.dom.frame) || SO.hasParent(a, this.linegraph.yAxisRight.dom.frame) ? l = "data-axis" : SO.hasParent(a, this.linegraph.legendLeft.dom.frame) || SO.hasParent(a, this.linegraph.legendRight.dom.frame) ? l = "legend" : null != s ? l = "custom-time" : SO.hasParent(a, this.currentTime.bar) ? l = "current-time" : SO.hasParent(a, this.dom.center) && (l = "background");
        var h = [],
            u = this.linegraph.yAxisLeft,
            d = this.linegraph.yAxisRight;
        return !u.hidden && this.itemsData.length > 0 && h.push(u.screenToValue(o)), !d.hidden && this.itemsData.length > 0 && h.push(d.screenToValue(o)), { event: t, customTime: s ? s.options.id : null, what: l, pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX, pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY, x: n, y: o, time: r, value: h }
    }, tI.prototype._createConfigurator = function() { return new TA(this, this.dom.container, QA) };
    var eI = Ib();
    cM.locale(eI);
    var iI = { Core: WE, DateUtil: hE, Range: dE, stack: TP, TimeStep: _E, components: { items: { Item: LP, BackgroundItem: BP, BoxItem: FP, ClusterItem: eA, PointItem: jP, RangeItem: HP }, BackgroundGroup: PP, Component: jO, CurrentTime: UE, CustomTime: GE, DataAxis: RA, DataScale: IA, GraphGroup: BA, Group: OP, ItemSet: dA, Legend: GA, LineGraph: VA, TimeAxis: xE } };
    t.DOMutil = Lb, t.DataSet = hM, t.DataView = uM, t.Graph2d = tI, t.Hammer = yE, t.Queue = sM, t.Timeline = OA, t.keycharm = SE, t.moment = cM, t.timeline = iI, t.util = Sb, Object.defineProperty(t, "__esModule", { value: !0 })
}));
//# sourceMappingURL=vis-timeline-graph2d.min.js.map

/**!
 
 @license
 handlebars v4.7.7
 
Copyright (C) 2011-2019 by Yehuda Katz
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 
*/
! function(a, b) { "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.Handlebars = b() : a.Handlebars = b() }(this, function() {
    return function(a) {
        function b(d) { if (c[d]) return c[d].exports; var e = c[d] = { exports: {}, id: d, loaded: !1 }; return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports }
        var c = {};
        return b.m = a, b.c = c, b.p = "", b(0)
    }([function(a, b, c) {
        "use strict";

        function d() { var a = r(); return a.compile = function(b, c) { return k.compile(b, c, a) }, a.precompile = function(b, c) { return k.precompile(b, c, a) }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], a.Parser = j.parser, a.parse = j.parse, a.parseWithoutProcessing = j.parseWithoutProcessing, a }
        var e = c(1)["default"];
        b.__esModule = !0;
        var f = c(2),
            g = e(f),
            h = c(45),
            i = e(h),
            j = c(46),
            k = c(51),
            l = c(52),
            m = e(l),
            n = c(49),
            o = e(n),
            p = c(44),
            q = e(p),
            r = g["default"].create,
            s = d();
        s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b["default"] = function(a) { return a && a.__esModule ? a : { "default": a } }, b.__esModule = !0
    }, function(a, b, c) {
        "use strict";

        function d() { var a = new h.HandlebarsEnvironment; return n.extend(a, h), a.SafeString = j["default"], a.Exception = l["default"], a.Utils = n, a.escapeExpression = n.escapeExpression, a.VM = p, a.template = function(b) { return p.template(b, a) }, a }
        var e = c(3)["default"],
            f = c(1)["default"];
        b.__esModule = !0;
        var g = c(4),
            h = e(g),
            i = c(37),
            j = f(i),
            k = c(6),
            l = f(k),
            m = c(5),
            n = e(m),
            o = c(38),
            p = e(o),
            q = c(44),
            r = f(q),
            s = d();
        s.create = d, r["default"](s), s["default"] = s, b["default"] = s, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b["default"] = function(a) {
            if (a && a.__esModule) return a;
            var b = {};
            if (null != a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b["default"] = a, b
        }, b.__esModule = !0
    }, function(a, b, c) {
        "use strict";

        function d(a, b, c) { this.helpers = a || {}, this.partials = b || {}, this.decorators = c || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this) }
        var e = c(1)["default"];
        b.__esModule = !0, b.HandlebarsEnvironment = d;
        var f = c(5),
            g = c(6),
            h = e(g),
            i = c(10),
            j = c(30),
            k = c(32),
            l = e(k),
            m = c(33),
            n = "4.7.7";
        b.VERSION = n;
        var o = 8;
        b.COMPILER_REVISION = o;
        var p = 7;
        b.LAST_COMPATIBLE_COMPILER_REVISION = p;
        var q = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0 <4.3.0", 8: ">= 4.3.0" };
        b.REVISION_CHANGES = q;
        var r = "[object Object]";
        d.prototype = {
            constructor: d,
            logger: l["default"],
            log: l["default"].log,
            registerHelper: function(a, b) {
                if (f.toString.call(a) === r) {
                    if (b) throw new h["default"]("Arg not supported with multiple helpers");
                    f.extend(this.helpers, a)
                } else this.helpers[a] = b
            },
            unregisterHelper: function(a) { delete this.helpers[a] },
            registerPartial: function(a, b) {
                if (f.toString.call(a) === r) f.extend(this.partials, a);
                else {
                    if ("undefined" == typeof b) throw new h["default"]('Attempting to register a partial called "' + a + '" as undefined');
                    this.partials[a] = b
                }
            },
            unregisterPartial: function(a) { delete this.partials[a] },
            registerDecorator: function(a, b) {
                if (f.toString.call(a) === r) {
                    if (b) throw new h["default"]("Arg not supported with multiple decorators");
                    f.extend(this.decorators, a)
                } else this.decorators[a] = b
            },
            unregisterDecorator: function(a) { delete this.decorators[a] },
            resetLoggedPropertyAccesses: function() { m.resetLoggedProperties() }
        };
        var s = l["default"].log;
        b.log = s, b.createFrame = f.createFrame, b.logger = l["default"]
    }, function(a, b) {
        "use strict";

        function c(a) { return k[a] }

        function d(a) {
            for (var b = 1; b < arguments.length; b++)
                for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
            return a
        }

        function e(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b) return c;
            return -1
        }

        function f(a) {
            if ("string" != typeof a) {
                if (a && a.toHTML) return a.toHTML();
                if (null == a) return "";
                if (!a) return a + "";
                a = "" + a
            }
            return m.test(a) ? a.replace(l, c) : a
        }

        function g(a) { return !a && 0 !== a || !(!p(a) || 0 !== a.length) }

        function h(a) { var b = d({}, a); return b._parent = a, b }

        function i(a, b) { return a.path = b, a }

        function j(a, b) { return (a ? a + "." : "") + b }
        b.__esModule = !0, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;
        var k = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" },
            l = /[&<>"'`=]/g,
            m = /[&<>"'`=]/,
            n = Object.prototype.toString;
        b.toString = n;
        var o = function(a) { return "function" == typeof a };
        o(/x/) && (b.isFunction = o = function(a) { return "function" == typeof a && "[object Function]" === n.call(a) }), b.isFunction = o;
        var p = Array.isArray || function(a) { return !(!a || "object" != typeof a) && "[object Array]" === n.call(a) };
        b.isArray = p
    }, function(a, b, c) {
        "use strict";

        function d(a, b) {
            var c = b && b.loc,
                g = void 0,
                h = void 0,
                i = void 0,
                j = void 0;
            c && (g = c.start.line, h = c.end.line, i = c.start.column, j = c.end.column, a += " - " + g + ":" + i);
            for (var k = Error.prototype.constructor.call(this, a), l = 0; l < f.length; l++) this[f[l]] = k[f[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, d);
            try { c && (this.lineNumber = g, this.endLineNumber = h, e ? (Object.defineProperty(this, "column", { value: i, enumerable: !0 }), Object.defineProperty(this, "endColumn", { value: j, enumerable: !0 })) : (this.column = i, this.endColumn = j)) } catch (m) {}
        }
        var e = c(7)["default"];
        b.__esModule = !0;
        var f = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
        d.prototype = new Error, b["default"] = d, a.exports = b["default"]
    }, function(a, b, c) { a.exports = { "default": c(8), __esModule: !0 } }, function(a, b, c) {
        var d = c(9);
        a.exports = function(a, b, c) { return d.setDesc(a, b, c) }
    }, function(a, b) {
        var c = Object;
        a.exports = { create: c.create, getProto: c.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: c.getOwnPropertyDescriptor, setDesc: c.defineProperty, setDescs: c.defineProperties, getKeys: c.keys, getNames: c.getOwnPropertyNames, getSymbols: c.getOwnPropertySymbols, each: [].forEach }
    }, function(a, b, c) {
        "use strict";

        function d(a) { h["default"](a), j["default"](a), l["default"](a), n["default"](a), p["default"](a), r["default"](a), t["default"](a) }

        function e(a, b, c) { a.helpers[b] && (a.hooks[b] = a.helpers[b], c || delete a.helpers[b]) }
        var f = c(1)["default"];
        b.__esModule = !0, b.registerDefaultHelpers = d, b.moveHelperToHooks = e;
        var g = c(11),
            h = f(g),
            i = c(12),
            j = f(i),
            k = c(25),
            l = f(k),
            m = c(26),
            n = f(m),
            o = c(27),
            p = f(o),
            q = c(28),
            r = f(q),
            s = c(29),
            t = f(s)
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        b["default"] = function(a) {
            a.registerHelper("blockHelperMissing", function(b, c) {
                var e = c.inverse,
                    f = c.fn;
                if (b === !0) return f(this);
                if (b === !1 || null == b) return e(this);
                if (d.isArray(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);
                if (c.data && c.ids) {
                    var g = d.createFrame(c.data);
                    g.contextPath = d.appendContextPath(c.data.contextPath, c.name), c = { data: g }
                }
                return f(b, c)
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        (function(d) {
            "use strict";
            var e = c(13)["default"],
                f = c(1)["default"];
            b.__esModule = !0;
            var g = c(5),
                h = c(6),
                i = f(h);
            b["default"] = function(a) {
                a.registerHelper("each", function(a, b) {
                    function c(b, c, d) { l && (l.key = b, l.index = c, l.first = 0 === c, l.last = !!d, m && (l.contextPath = m + b)), k += f(a[b], { data: l, blockParams: g.blockParams([a[b], b], [m + b, null]) }) }
                    if (!b) throw new i["default"]("Must pass iterator to #each");
                    var f = b.fn,
                        h = b.inverse,
                        j = 0,
                        k = "",
                        l = void 0,
                        m = void 0;
                    if (b.data && b.ids && (m = g.appendContextPath(b.data.contextPath, b.ids[0]) + "."), g.isFunction(a) && (a = a.call(this)), b.data && (l = g.createFrame(b.data)), a && "object" == typeof a)
                        if (g.isArray(a))
                            for (var n = a.length; j < n; j++) j in a && c(j, j, j === a.length - 1);
                        else if (d.Symbol && a[d.Symbol.iterator]) {
                        for (var o = [], p = a[d.Symbol.iterator](), q = p.next(); !q.done; q = p.next()) o.push(q.value);
                        a = o;
                        for (var n = a.length; j < n; j++) c(j, j, j === a.length - 1)
                    } else ! function() {
                        var b = void 0;
                        e(a).forEach(function(a) { void 0 !== b && c(b, j - 1), b = a, j++ }), void 0 !== b && c(b, j - 1, !0)
                    }();
                    return 0 === j && (k = h(this)), k
                })
            }, a.exports = b["default"]
        }).call(b, function() { return this }())
    }, function(a, b, c) { a.exports = { "default": c(14), __esModule: !0 } }, function(a, b, c) { c(15), a.exports = c(21).Object.keys }, function(a, b, c) {
        var d = c(16);
        c(18)("keys", function(a) { return function(b) { return a(d(b)) } })
    }, function(a, b, c) {
        var d = c(17);
        a.exports = function(a) { return Object(d(a)) }
    }, function(a, b) { a.exports = function(a) { if (void 0 == a) throw TypeError("Can't call method on  " + a); return a } }, function(a, b, c) {
        var d = c(19),
            e = c(21),
            f = c(24);
        a.exports = function(a, b) {
            var c = (e.Object || {})[a] || Object[a],
                g = {};
            g[a] = b(c), d(d.S + d.F * f(function() { c(1) }), "Object", g)
        }
    }, function(a, b, c) {
        var d = c(20),
            e = c(21),
            f = c(22),
            g = "prototype",
            h = function(a, b, c) {
                var i, j, k, l = a & h.F,
                    m = a & h.G,
                    n = a & h.S,
                    o = a & h.P,
                    p = a & h.B,
                    q = a & h.W,
                    r = m ? e : e[b] || (e[b] = {}),
                    s = m ? d : n ? d[b] : (d[b] || {})[g];
                m && (c = b);
                for (i in c) j = !l && s && i in s, j && i in r || (k = j ? s[i] : c[i], r[i] = m && "function" != typeof s[i] ? c[i] : p && j ? f(k, d) : q && s[i] == k ? function(a) { var b = function(b) { return this instanceof a ? new a(b) : a(b) }; return b[g] = a[g], b }(k) : o && "function" == typeof k ? f(Function.call, k) : k, o && ((r[g] || (r[g] = {}))[i] = k))
            };
        h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, a.exports = h
    }, function(a, b) { var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = c) }, function(a, b) { var c = a.exports = { version: "1.2.6" }; "number" == typeof __e && (__e = c) }, function(a, b, c) {
        var d = c(23);
        a.exports = function(a, b, c) {
            if (d(a), void 0 === b) return a;
            switch (c) {
                case 1:
                    return function(c) { return a.call(b, c) };
                case 2:
                    return function(c, d) { return a.call(b, c, d) };
                case 3:
                    return function(c, d, e) { return a.call(b, c, d, e) }
            }
            return function() { return a.apply(b, arguments) }
        }
    }, function(a, b) { a.exports = function(a) { if ("function" != typeof a) throw TypeError(a + " is not a function!"); return a } }, function(a, b) { a.exports = function(a) { try { return !!a() } catch (b) { return !0 } } }, function(a, b, c) {
        "use strict";
        var d = c(1)["default"];
        b.__esModule = !0;
        var e = c(6),
            f = d(e);
        b["default"] = function(a) { a.registerHelper("helperMissing", function() { if (1 !== arguments.length) throw new f["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"') }) }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        var d = c(1)["default"];
        b.__esModule = !0;
        var e = c(5),
            f = c(6),
            g = d(f);
        b["default"] = function(a) { a.registerHelper("if", function(a, b) { if (2 != arguments.length) throw new g["default"]("#if requires exactly one argument"); return e.isFunction(a) && (a = a.call(this)), !b.hash.includeZero && !a || e.isEmpty(a) ? b.inverse(this) : b.fn(this) }), a.registerHelper("unless", function(b, c) { if (2 != arguments.length) throw new g["default"]("#unless requires exactly one argument"); return a.helpers["if"].call(this, b, { fn: c.inverse, inverse: c.fn, hash: c.hash }) }) }, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b.__esModule = !0, b["default"] = function(a) {
            a.registerHelper("log", function() {
                for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) b.push(arguments[d]);
                var e = 1;
                null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b[0] = e, a.log.apply(a, b)
            })
        }, a.exports = b["default"]
    }, function(a, b) {
        "use strict";
        b.__esModule = !0, b["default"] = function(a) { a.registerHelper("lookup", function(a, b, c) { return a ? c.lookupProperty(a, b) : a }) }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        var d = c(1)["default"];
        b.__esModule = !0;
        var e = c(5),
            f = c(6),
            g = d(f);
        b["default"] = function(a) {
            a.registerHelper("with", function(a, b) {
                if (2 != arguments.length) throw new g["default"]("#with requires exactly one argument");
                e.isFunction(a) && (a = a.call(this));
                var c = b.fn;
                if (e.isEmpty(a)) return b.inverse(this);
                var d = b.data;
                return b.data && b.ids && (d = e.createFrame(b.data), d.contextPath = e.appendContextPath(b.data.contextPath, b.ids[0])), c(a, { data: d, blockParams: e.blockParams([a], [d && d.contextPath]) })
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a) { g["default"](a) }
        var e = c(1)["default"];
        b.__esModule = !0, b.registerDefaultDecorators = d;
        var f = c(31),
            g = e(f)
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5);
        b["default"] = function(a) {
            a.registerDecorator("inline", function(a, b, c, e) {
                var f = a;
                return b.partials || (b.partials = {}, f = function(e, f) {
                    var g = c.partials;
                    c.partials = d.extend({}, g, b.partials);
                    var h = a(e, f);
                    return c.partials = g, h
                }), b.partials[e.args[0]] = e.fn, f
            })
        }, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(5),
            e = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function(a) {
                    if ("string" == typeof a) {
                        var b = d.indexOf(e.methodMap, a.toLowerCase());
                        a = b >= 0 ? b : parseInt(a, 10)
                    }
                    return a
                },
                log: function(a) {
                    if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
                        var b = e.methodMap[a];
                        console[b] || (b = "log");
                        for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) d[f - 1] = arguments[f];
                        console[b].apply(console, d)
                    }
                }
            };
        b["default"] = e, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            var b = i(null);
            b.constructor = !1, b.__defineGetter__ = !1, b.__defineSetter__ = !1, b.__lookupGetter__ = !1;
            var c = i(null);
            return c.__proto__ = !1, { properties: { whitelist: l.createNewLookupObject(c, a.allowedProtoProperties), defaultValue: a.allowProtoPropertiesByDefault }, methods: { whitelist: l.createNewLookupObject(b, a.allowedProtoMethods), defaultValue: a.allowProtoMethodsByDefault } }
        }

        function e(a, b, c) { return "function" == typeof a ? f(b.methods, c) : f(b.properties, c) }

        function f(a, b) { return void 0 !== a.whitelist[b] ? a.whitelist[b] === !0 : void 0 !== a.defaultValue ? a.defaultValue : (g(b), !1) }

        function g(a) { o[a] !== !0 && (o[a] = !0, n.log("error", 'Handlebars: Access has been denied to resolve the property "' + a + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details')) }

        function h() { j(o).forEach(function(a) { delete o[a] }) }
        var i = c(34)["default"],
            j = c(13)["default"],
            k = c(3)["default"];
        b.__esModule = !0, b.createProtoAccessControl = d, b.resultIsAllowed = e, b.resetLoggedProperties = h;
        var l = c(36),
            m = c(32),
            n = k(m),
            o = i(null)
    }, function(a, b, c) { a.exports = { "default": c(35), __esModule: !0 } }, function(a, b, c) {
        var d = c(9);
        a.exports = function(a, b) { return d.create(a, b) }
    }, function(a, b, c) {
        "use strict";

        function d() { for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c]; return f.extend.apply(void 0, [e(null)].concat(b)) }
        var e = c(34)["default"];
        b.__esModule = !0, b.createNewLookupObject = d;
        var f = c(5)
    }, function(a, b) {
        "use strict";

        function c(a) { this.string = a }
        b.__esModule = !0, c.prototype.toString = c.prototype.toHTML = function() { return "" + this.string }, b["default"] = c, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a) {
            var b = a && a[0] || 1,
                c = v.COMPILER_REVISION;
            if (!(b >= v.LAST_COMPATIBLE_COMPILER_REVISION && b <= v.COMPILER_REVISION)) {
                if (b < v.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var d = v.REVISION_CHANGES[c],
                        e = v.REVISION_CHANGES[b];
                    throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                }
                throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
            }
        }

        function e(a, b) {
            function c(c, d, e) {
                e.hash && (d = s.extend({}, d, e.hash), e.ids && (e.ids[0] = !0)), c = b.VM.resolvePartial.call(this, c, d, e);
                var f = s.extend({}, e, { hooks: this.hooks, protoAccessControl: this.protoAccessControl }),
                    g = b.VM.invokePartial.call(this, c, d, f);
                if (null == g && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), g = e.partials[e.name](d, f)), null != g) {
                    if (e.indent) {
                        for (var h = g.split("\n"), i = 0, j = h.length; i < j && (h[i] || i + 1 !== j); i++) h[i] = e.indent + h[i];
                        g = h.join("\n")
                    }
                    return g
                }
                throw new u["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode")
            }

            function d(b) {
                function c(b) { return "" + a.main(g, b, g.helpers, g.partials, f, i, h) }
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    f = e.data;
                d._setup(e), !e.partial && a.useData && (f = j(b, f));
                var h = void 0,
                    i = a.useBlockParams ? [] : void 0;
                return a.useDepths && (h = e.depths ? b != e.depths[0] ? [b].concat(e.depths) : e.depths : [b]), (c = k(a.main, c, g, e.depths || [], f, i))(b, e)
            }
            if (!b) throw new u["default"]("No environment passed to template");
            if (!a || !a.main) throw new u["default"]("Unknown template object: " + typeof a);
            a.main.decorator = a.main_d, b.VM.checkRevision(a.compiler);
            var e = a.compiler && 7 === a.compiler[0],
                g = {
                    strict: function(a, b, c) { if (!(a && b in a)) throw new u["default"]('"' + b + '" not defined in ' + a, { loc: c }); return g.lookupProperty(a, b) },
                    lookupProperty: function(a, b) { var c = a[b]; return null == c ? c : Object.prototype.hasOwnProperty.call(a, b) ? c : y.resultIsAllowed(c, g.protoAccessControl, b) ? c : void 0 },
                    lookup: function(a, b) { for (var c = a.length, d = 0; d < c; d++) { var e = a[d] && g.lookupProperty(a[d], b); if (null != e) return a[d][b] } },
                    lambda: function(a, b) { return "function" == typeof a ? a.call(b) : a },
                    escapeExpression: s.escapeExpression,
                    invokePartial: c,
                    fn: function(b) { var c = a[b]; return c.decorator = a[b + "_d"], c },
                    programs: [],
                    program: function(a, b, c, d, e) {
                        var g = this.programs[a],
                            h = this.fn(a);
                        return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g
                    },
                    data: function(a, b) { for (; a && b--;) a = a._parent; return a },
                    mergeIfNeeded: function(a, b) { var c = a || b; return a && b && a !== b && (c = s.extend({}, b, a)), c },
                    nullContext: n({}),
                    noop: b.VM.noop,
                    compilerInfo: a.compiler
                };
            return d.isTop = !0, d._setup = function(c) {
                if (c.partial) g.protoAccessControl = c.protoAccessControl, g.helpers = c.helpers, g.partials = c.partials, g.decorators = c.decorators, g.hooks = c.hooks;
                else {
                    var d = s.extend({}, b.helpers, c.helpers);
                    l(d, g), g.helpers = d, a.usePartial && (g.partials = g.mergeIfNeeded(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (g.decorators = s.extend({}, b.decorators, c.decorators)), g.hooks = {}, g.protoAccessControl = y.createProtoAccessControl(c);
                    var f = c.allowCallsToHelperMissing || e;
                    w.moveHelperToHooks(g, "helperMissing", f), w.moveHelperToHooks(g, "blockHelperMissing", f)
                }
            }, d._child = function(b, c, d, e) { if (a.useBlockParams && !d) throw new u["default"]("must pass block params"); if (a.useDepths && !e) throw new u["default"]("must pass parent depths"); return f(g, b, a[b], c, 0, d, e) }, d
        }

        function f(a, b, c, d, e, f, g) {
            function h(b) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    h = g;
                return !g || b == g[0] || b === a.nullContext && null === g[0] || (h = [b].concat(g)), c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h)
            }
            return h = k(c, h, a, g, d, f), h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h
        }

        function g(a, b, c) { return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name], a }

        function h(a, b, c) {
            var d = c.data && c.data["partial-block"];
            c.partial = !0, c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
            var e = void 0;
            if (c.fn && c.fn !== i && ! function() {
                    c.data = v.createFrame(c.data);
                    var a = c.fn;
                    e = c.data["partial-block"] = function(b) { var c = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]; return c.data = v.createFrame(c.data), c.data["partial-block"] = d, a(b, c) }, a.partials && (c.partials = s.extend({}, c.partials, a.partials))
                }(), void 0 === a && e && (a = e), void 0 === a) throw new u["default"]("The partial " + c.name + " could not be found");
            if (a instanceof Function) return a(b, c)
        }

        function i() { return "" }

        function j(a, b) { return b && "root" in b || (b = b ? v.createFrame(b) : {}, b.root = a), b }

        function k(a, b, c, d, e, f) {
            if (a.decorator) {
                var g = {};
                b = a.decorator(b, g, c, d && d[0], e, f, d), s.extend(b, g)
            }
            return b
        }

        function l(a, b) {
            o(a).forEach(function(c) {
                var d = a[c];
                a[c] = m(d, b)
            })
        }

        function m(a, b) { var c = b.lookupProperty; return x.wrapHelper(a, function(a) { return s.extend({ lookupProperty: c }, a) }) }
        var n = c(39)["default"],
            o = c(13)["default"],
            p = c(3)["default"],
            q = c(1)["default"];
        b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;
        var r = c(5),
            s = p(r),
            t = c(6),
            u = q(t),
            v = c(4),
            w = c(10),
            x = c(43),
            y = c(33)
    }, function(a, b, c) { a.exports = { "default": c(40), __esModule: !0 } }, function(a, b, c) { c(41), a.exports = c(21).Object.seal }, function(a, b, c) {
        var d = c(42);
        c(18)("seal", function(a) { return function(b) { return a && d(b) ? a(b) : b } })
    }, function(a, b) { a.exports = function(a) { return "object" == typeof a ? null !== a : "function" == typeof a } }, function(a, b) {
        "use strict";

        function c(a, b) { if ("function" != typeof a) return a; var c = function() { var c = arguments[arguments.length - 1]; return arguments[arguments.length - 1] = b(c), a.apply(this, arguments) }; return c }
        b.__esModule = !0, b.wrapHelper = c
    }, function(a, b) {
        (function(c) {
            "use strict";
            b.__esModule = !0, b["default"] = function(a) {
                var b = "undefined" != typeof c ? c : window,
                    d = b.Handlebars;
                a.noConflict = function() { return b.Handlebars === a && (b.Handlebars = d), a }
            }, a.exports = b["default"]
        }).call(b, function() { return this }())
    }, function(a, b) {
        "use strict";
        b.__esModule = !0;
        var c = { helpers: { helperExpression: function(a) { return "SubExpression" === a.type || ("MustacheStatement" === a.type || "BlockStatement" === a.type) && !!(a.params && a.params.length || a.hash) }, scopedId: function(a) { return /^\.|this\b/.test(a.original) }, simpleId: function(a) { return 1 === a.parts.length && !c.helpers.scopedId(a) && !a.depth } } };
        b["default"] = c, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a, b) {
            if ("Program" === a.type) return a;
            i["default"].yy = o, o.locInfo = function(a) { return new o.SourceLocation(b && b.srcName, a) };
            var c = i["default"].parse(a);
            return c
        }

        function e(a, b) {
            var c = d(a, b),
                e = new k["default"](b);
            return e.accept(c)
        }
        var f = c(1)["default"],
            g = c(3)["default"];
        b.__esModule = !0, b.parseWithoutProcessing = d, b.parse = e;
        var h = c(47),
            i = f(h),
            j = c(48),
            k = f(j),
            l = c(50),
            m = g(l),
            n = c(5);
        b.parser = i["default"];
        var o = {};
        n.extend(o, m)
    }, function(a, b) {
        "use strict";
        b.__esModule = !0;
        var c = function() {
            function a() { this.yy = {} }
            var b = {
                    trace: function() {},
                    yy: {},
                    symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
                    terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
                    productions_: [0, [3, 2],
                        [4, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [7, 1],
                        [13, 1],
                        [10, 3],
                        [16, 5],
                        [9, 4],
                        [9, 4],
                        [24, 6],
                        [27, 6],
                        [38, 6],
                        [43, 2],
                        [45, 3],
                        [45, 1],
                        [26, 3],
                        [8, 5],
                        [8, 5],
                        [11, 5],
                        [12, 3],
                        [59, 5],
                        [63, 1],
                        [63, 1],
                        [64, 5],
                        [69, 1],
                        [71, 3],
                        [74, 3],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [20, 1],
                        [56, 1],
                        [56, 1],
                        [79, 2],
                        [78, 1],
                        [86, 3],
                        [86, 1],
                        [6, 0],
                        [6, 2],
                        [17, 0],
                        [17, 2],
                        [21, 0],
                        [21, 2],
                        [22, 0],
                        [22, 1],
                        [25, 0],
                        [25, 1],
                        [28, 0],
                        [28, 1],
                        [30, 0],
                        [30, 2],
                        [31, 0],
                        [31, 1],
                        [32, 0],
                        [32, 1],
                        [35, 0],
                        [35, 2],
                        [36, 0],
                        [36, 1],
                        [37, 0],
                        [37, 1],
                        [40, 0],
                        [40, 2],
                        [41, 0],
                        [41, 1],
                        [42, 0],
                        [42, 1],
                        [46, 0],
                        [46, 1],
                        [49, 0],
                        [49, 2],
                        [50, 0],
                        [50, 1],
                        [52, 0],
                        [52, 2],
                        [53, 0],
                        [53, 1],
                        [57, 0],
                        [57, 2],
                        [58, 0],
                        [58, 1],
                        [61, 0],
                        [61, 2],
                        [62, 0],
                        [62, 1],
                        [66, 0],
                        [66, 2],
                        [67, 0],
                        [67, 1],
                        [70, 1],
                        [70, 2],
                        [76, 1],
                        [76, 2]
                    ],
                    performAction: function(a, b, c, d, e, f, g) {
                        var h = f.length - 1;
                        switch (e) {
                            case 1:
                                return f[h - 1];
                            case 2:
                                this.$ = d.prepareProgram(f[h]);
                                break;
                            case 3:
                                this.$ = f[h];
                                break;
                            case 4:
                                this.$ = f[h];
                                break;
                            case 5:
                                this.$ = f[h];
                                break;
                            case 6:
                                this.$ = f[h];
                                break;
                            case 7:
                                this.$ = f[h];
                                break;
                            case 8:
                                this.$ = f[h];
                                break;
                            case 9:
                                this.$ = { type: "CommentStatement", value: d.stripComment(f[h]), strip: d.stripFlags(f[h], f[h]), loc: d.locInfo(this._$) };
                                break;
                            case 10:
                                this.$ = { type: "ContentStatement", original: f[h], value: f[h], loc: d.locInfo(this._$) };
                                break;
                            case 11:
                                this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                                break;
                            case 12:
                                this.$ = { path: f[h - 3], params: f[h - 2], hash: f[h - 1] };
                                break;
                            case 13:
                                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                                break;
                            case 14:
                                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                                break;
                            case 15:
                                this.$ = { open: f[h - 5], path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };
                                break;
                            case 16:
                                this.$ = { path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };
                                break;
                            case 17:
                                this.$ = { path: f[h - 4], params: f[h - 3], hash: f[h - 2], blockParams: f[h - 1], strip: d.stripFlags(f[h - 5], f[h]) };
                                break;
                            case 18:
                                this.$ = { strip: d.stripFlags(f[h - 1], f[h - 1]), program: f[h] };
                                break;
                            case 19:
                                var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                                    j = d.prepareProgram([i], f[h - 1].loc);
                                j.chained = !0, this.$ = { strip: f[h - 2].strip, program: j, chain: !0 };
                                break;
                            case 20:
                                this.$ = f[h];
                                break;
                            case 21:
                                this.$ = { path: f[h - 1], strip: d.stripFlags(f[h - 2], f[h]) };
                                break;
                            case 22:
                                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                break;
                            case 23:
                                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                                break;
                            case 24:
                                this.$ = { type: "PartialStatement", name: f[h - 3], params: f[h - 2], hash: f[h - 1], indent: "", strip: d.stripFlags(f[h - 4], f[h]), loc: d.locInfo(this._$) };
                                break;
                            case 25:
                                this.$ = d.preparePartialBlock(f[h - 2], f[h - 1], f[h], this._$);
                                break;
                            case 26:
                                this.$ = { path: f[h - 3], params: f[h - 2], hash: f[h - 1], strip: d.stripFlags(f[h - 4], f[h]) };
                                break;
                            case 27:
                                this.$ = f[h];
                                break;
                            case 28:
                                this.$ = f[h];
                                break;
                            case 29:
                                this.$ = { type: "SubExpression", path: f[h - 3], params: f[h - 2], hash: f[h - 1], loc: d.locInfo(this._$) };
                                break;
                            case 30:
                                this.$ = { type: "Hash", pairs: f[h], loc: d.locInfo(this._$) };
                                break;
                            case 31:
                                this.$ = { type: "HashPair", key: d.id(f[h - 2]), value: f[h], loc: d.locInfo(this._$) };
                                break;
                            case 32:
                                this.$ = d.id(f[h - 1]);
                                break;
                            case 33:
                                this.$ = f[h];
                                break;
                            case 34:
                                this.$ = f[h];
                                break;
                            case 35:
                                this.$ = { type: "StringLiteral", value: f[h], original: f[h], loc: d.locInfo(this._$) };
                                break;
                            case 36:
                                this.$ = { type: "NumberLiteral", value: Number(f[h]), original: Number(f[h]), loc: d.locInfo(this._$) };
                                break;
                            case 37:
                                this.$ = { type: "BooleanLiteral", value: "true" === f[h], original: "true" === f[h], loc: d.locInfo(this._$) };
                                break;
                            case 38:
                                this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: d.locInfo(this._$) };
                                break;
                            case 39:
                                this.$ = { type: "NullLiteral", original: null, value: null, loc: d.locInfo(this._$) };
                                break;
                            case 40:
                                this.$ = f[h];
                                break;
                            case 41:
                                this.$ = f[h];
                                break;
                            case 42:
                                this.$ = d.preparePath(!0, f[h], this._$);
                                break;
                            case 43:
                                this.$ = d.preparePath(!1, f[h], this._$);
                                break;
                            case 44:
                                f[h - 2].push({ part: d.id(f[h]), original: f[h], separator: f[h - 1] }), this.$ = f[h - 2];
                                break;
                            case 45:
                                this.$ = [{ part: d.id(f[h]), original: f[h] }];
                                break;
                            case 46:
                                this.$ = [];
                                break;
                            case 47:
                                f[h - 1].push(f[h]);
                                break;
                            case 48:
                                this.$ = [];
                                break;
                            case 49:
                                f[h - 1].push(f[h]);
                                break;
                            case 50:
                                this.$ = [];
                                break;
                            case 51:
                                f[h - 1].push(f[h]);
                                break;
                            case 58:
                                this.$ = [];
                                break;
                            case 59:
                                f[h - 1].push(f[h]);
                                break;
                            case 64:
                                this.$ = [];
                                break;
                            case 65:
                                f[h - 1].push(f[h]);
                                break;
                            case 70:
                                this.$ = [];
                                break;
                            case 71:
                                f[h - 1].push(f[h]);
                                break;
                            case 78:
                                this.$ = [];
                                break;
                            case 79:
                                f[h - 1].push(f[h]);
                                break;
                            case 82:
                                this.$ = [];
                                break;
                            case 83:
                                f[h - 1].push(f[h]);
                                break;
                            case 86:
                                this.$ = [];
                                break;
                            case 87:
                                f[h - 1].push(f[h]);
                                break;
                            case 90:
                                this.$ = [];
                                break;
                            case 91:
                                f[h - 1].push(f[h]);
                                break;
                            case 94:
                                this.$ = [];
                                break;
                            case 95:
                                f[h - 1].push(f[h]);
                                break;
                            case 98:
                                this.$ = [f[h]];
                                break;
                            case 99:
                                f[h - 1].push(f[h]);
                                break;
                            case 100:
                                this.$ = [f[h]];
                                break;
                            case 101:
                                f[h - 1].push(f[h])
                        }
                    },
                    table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, {
                        33: [2, 41],
                        65: [2, 41],
                        72: [2, 41],
                        80: [2, 41],
                        81: [2, 41],
                        82: [2, 41],
                        83: [2, 41],
                        84: [2, 41],
                        85: [2, 41]
                    }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
                    defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
                    parseError: function(a, b) { throw new Error(a) },
                    parse: function(a) {
                        function b() { var a; return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a }
                        var c = this,
                            d = [0],
                            e = [null],
                            f = [],
                            g = this.table,
                            h = "",
                            i = 0,
                            j = 0,
                            k = 0;
                        this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                        var l = this.lexer.yylloc;
                        f.push(l);
                        var m = this.lexer.options && this.lexer.options.ranges;
                        "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                        for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                            if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && "undefined" != typeof n || (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                                var x = "";
                                if (!k) {
                                    v = [];
                                    for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                    x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, { text: this.lexer.match, token: this.terminals_[n] || n, line: this.lexer.yylineno, loc: l, expected: v })
                                }
                            }
                            if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                            switch (q[0]) {
                                case 1:
                                    d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                                    break;
                                case 2:
                                    if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = { first_line: f[f.length - (t || 1)].first_line, last_line: f[f.length - 1].last_line, first_column: f[f.length - (t || 1)].first_column, last_column: f[f.length - 1].last_column }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                                    t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                                    break;
                                case 3:
                                    return !0
                            }
                        }
                        return !0
                    }
                },
                c = function() {
                    var a = {
                        EOF: 1,
                        parseError: function(a, b) {
                            if (!this.yy.parser) throw new Error(a);
                            this.yy.parser.parseError(a, b)
                        },
                        setInput: function(a) { return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this },
                        input: function() {
                            var a = this._input[0];
                            this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                            var b = a.match(/(?:\r\n?|\n).*/g);
                            return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                        },
                        unput: function(a) {
                            var b = a.length,
                                c = a.split(/(?:\r\n?|\n)/g);
                            this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                            var d = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                            var e = this.yylloc.range;
                            return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                        },
                        more: function() { return this._more = !0, this },
                        less: function(a) { this.unput(this.match.slice(a)) },
                        pastInput: function() { var a = this.matched.substr(0, this.matched.length - this.match.length); return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "") },
                        upcomingInput: function() { var a = this.match; return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "") },
                        showPosition: function() {
                            var a = this.pastInput(),
                                b = new Array(a.length + 1).join("-");
                            return a + this.upcomingInput() + "\n" + b + "^"
                        },
                        next: function() {
                            if (this.done) return this.EOF;
                            this._input || (this.done = !0);
                            var a, b, c, d, e;
                            this._more || (this.yytext = "", this.match = "");
                            for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                            return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno })
                        },
                        lex: function() { var a = this.next(); return "undefined" != typeof a ? a : this.lex() },
                        begin: function(a) { this.conditionStack.push(a) },
                        popState: function() { return this.conditionStack.pop() },
                        _currentRules: function() { return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules },
                        topState: function() { return this.conditionStack[this.conditionStack.length - 2] },
                        pushState: function(a) { this.begin(a) }
                    };
                    return a.options = {}, a.performAction = function(a, b, c, d) {
                        function e(a, c) { return b.yytext = b.yytext.substring(a, b.yyleng - c + a) }
                        switch (c) {
                            case 0:
                                if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;
                                break;
                            case 1:
                                return 15;
                            case 2:
                                return this.popState(), 15;
                            case 3:
                                return this.begin("raw"), 15;
                            case 4:
                                return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (e(5, 9), "END_RAW_BLOCK");
                            case 5:
                                return 15;
                            case 6:
                                return this.popState(), 14;
                            case 7:
                                return 65;
                            case 8:
                                return 68;
                            case 9:
                                return 19;
                            case 10:
                                return this.popState(), this.begin("raw"), 23;
                            case 11:
                                return 55;
                            case 12:
                                return 60;
                            case 13:
                                return 29;
                            case 14:
                                return 47;
                            case 15:
                                return this.popState(), 44;
                            case 16:
                                return this.popState(), 44;
                            case 17:
                                return 34;
                            case 18:
                                return 39;
                            case 19:
                                return 51;
                            case 20:
                                return 48;
                            case 21:
                                this.unput(b.yytext), this.popState(), this.begin("com");
                                break;
                            case 22:
                                return this.popState(), 14;
                            case 23:
                                return 48;
                            case 24:
                                return 73;
                            case 25:
                                return 72;
                            case 26:
                                return 72;
                            case 27:
                                return 87;
                            case 28:
                                break;
                            case 29:
                                return this.popState(), 54;
                            case 30:
                                return this.popState(), 33;
                            case 31:
                                return b.yytext = e(1, 2).replace(/\\"/g, '"'), 80;
                            case 32:
                                return b.yytext = e(1, 2).replace(/\\'/g, "'"), 80;
                            case 33:
                                return 85;
                            case 34:
                                return 82;
                            case 35:
                                return 82;
                            case 36:
                                return 83;
                            case 37:
                                return 84;
                            case 38:
                                return 81;
                            case 39:
                                return 75;
                            case 40:
                                return 77;
                            case 41:
                                return 72;
                            case 42:
                                return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;
                            case 43:
                                return "INVALID";
                            case 44:
                                return 5
                        }
                    }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, a
                }();
            return b.lexer = c, a.prototype = b, b.Parser = a, new a
        }();
        b["default"] = c, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            this.options = a
        }

        function e(a, b, c) {
            void 0 === b && (b = a.length);
            var d = a[b - 1],
                e = a[b - 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
        }

        function f(a, b, c) {
            void 0 === b && (b = -1);
            var d = a[b + 1],
                e = a[b + 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
        }

        function g(a, b, c) {
            var d = a[null == b ? 0 : b + 1];
            if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                var e = d.value;
                d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e
            }
        }

        function h(a, b, c) { var d = a[null == b ? a.length - 1 : b - 1]; if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) { var e = d.value; return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, d.leftStripped } }
        var i = c(1)["default"];
        b.__esModule = !0;
        var j = c(49),
            k = i(j);
        d.prototype = new k["default"], d.prototype.Program = function(a) {
            var b = !this.options.ignoreStandalone,
                c = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var d = a.body, i = 0, j = d.length; i < j; i++) {
                var k = d[i],
                    l = this.accept(k);
                if (l) {
                    var m = e(d, i, c),
                        n = f(d, i, c),
                        o = l.openStandalone && m,
                        p = l.closeStandalone && n,
                        q = l.inlineStandalone && m && n;
                    l.close && g(d, i, !0), l.open && h(d, i, !0), b && q && (g(d, i), h(d, i) && "PartialStatement" === k.type && (k.indent = /([ \t]+$)/.exec(d[i - 1].original)[1])), b && o && (g((k.program || k.inverse).body), h(d, i)), b && p && (g(d, i), h((k.inverse || k.program).body))
                }
            }
            return a
        }, d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function(a) {
            this.accept(a.program), this.accept(a.inverse);
            var b = a.program || a.inverse,
                c = a.program && a.inverse,
                d = c,
                i = c;
            if (c && c.chained)
                for (d = c.body[0].program; i.chained;) i = i.body[i.body.length - 1].program;
            var j = { open: a.openStrip.open, close: a.closeStrip.close, openStandalone: f(b.body), closeStandalone: e((d || b).body) };
            if (a.openStrip.close && g(b.body, null, !0), c) {
                var k = a.inverseStrip;
                k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), !this.options.ignoreStandalone && e(b.body) && f(d.body) && (h(b.body), g(d.body))
            } else a.closeStrip.open && h(b.body, null, !0);
            return j
        }, d.prototype.Decorator = d.prototype.MustacheStatement = function(a) { return a.strip }, d.prototype.PartialStatement = d.prototype.CommentStatement = function(a) { var b = a.strip || {}; return { inlineStandalone: !0, open: b.open, close: b.close } }, b["default"] = d, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d() { this.parents = [] }

        function e(a) { this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash") }

        function f(a) { e.call(this, a), this.acceptKey(a, "program"), this.acceptKey(a, "inverse") }

        function g(a) { this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash") }
        var h = c(1)["default"];
        b.__esModule = !0;
        var i = c(6),
            j = h(i);
        d.prototype = {
            constructor: d,
            mutating: !1,
            acceptKey: function(a, b) {
                var c = this.accept(a[b]);
                if (this.mutating) {
                    if (c && !d.prototype[c.type]) throw new j["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
                    a[b] = c
                }
            },
            acceptRequired: function(a, b) { if (this.acceptKey(a, b), !a[b]) throw new j["default"](a.type + " requires " + b) },
            acceptArray: function(a) { for (var b = 0, c = a.length; b < c; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--) },
            accept: function(a) {
                if (a) {
                    if (!this[a.type]) throw new j["default"]("Unknown type: " + a.type, a);
                    this.current && this.parents.unshift(this.current), this.current = a;
                    var b = this[a.type](a);
                    return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0
                }
            },
            Program: function(a) { this.acceptArray(a.body) },
            MustacheStatement: e,
            Decorator: e,
            BlockStatement: f,
            DecoratorBlock: f,
            PartialStatement: g,
            PartialBlockStatement: function(a) { g.call(this, a), this.acceptKey(a, "program") },
            ContentStatement: function() {},
            CommentStatement: function() {},
            SubExpression: e,
            PathExpression: function() {},
            StringLiteral: function() {},
            NumberLiteral: function() {},
            BooleanLiteral: function() {},
            UndefinedLiteral: function() {},
            NullLiteral: function() {},
            Hash: function(a) { this.acceptArray(a.pairs) },
            HashPair: function(a) { this.acceptRequired(a, "value") }
        }, b["default"] = d, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a, b) { if (b = b.path ? b.path.original : b, a.path.original !== b) { var c = { loc: a.path.loc }; throw new q["default"](a.path.original + " doesn't match " + b, c) } }

        function e(a, b) { this.source = a, this.start = { line: b.first_line, column: b.first_column }, this.end = { line: b.last_line, column: b.last_column } }

        function f(a) { return /^\[.*\]$/.test(a) ? a.substring(1, a.length - 1) : a }

        function g(a, b) { return { open: "~" === a.charAt(2), close: "~" === b.charAt(b.length - 3) } }

        function h(a) { return a.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "") }

        function i(a, b, c) {
            c = this.locInfo(c);
            for (var d = a ? "@" : "", e = [], f = 0, g = 0, h = b.length; g < h; g++) {
                var i = b[g].part,
                    j = b[g].original !== i;
                if (d += (b[g].separator || "") + i, j || ".." !== i && "." !== i && "this" !== i) e.push(i);
                else { if (e.length > 0) throw new q["default"]("Invalid path: " + d, { loc: c }); ".." === i && f++ }
            }
            return { type: "PathExpression", data: a, depth: f, parts: e, original: d, loc: c }
        }

        function j(a, b, c, d, e, f) {
            var g = d.charAt(3) || d.charAt(2),
                h = "{" !== g && "&" !== g,
                i = /\*/.test(d);
            return { type: i ? "Decorator" : "MustacheStatement", path: a, params: b, hash: c, escaped: h, strip: e, loc: this.locInfo(f) }
        }

        function k(a, b, c, e) { d(a, c), e = this.locInfo(e); var f = { type: "Program", body: b, strip: {}, loc: e }; return { type: "BlockStatement", path: a.path, params: a.params, hash: a.hash, program: f, openStrip: {}, inverseStrip: {}, closeStrip: {}, loc: e } }

        function l(a, b, c, e, f, g) {
            e && e.path && d(a, e);
            var h = /\*/.test(a.open);
            b.blockParams = a.blockParams;
            var i = void 0,
                j = void 0;
            if (c) {
                if (h) throw new q["default"]("Unexpected inverse block on decorator", c);
                c.chain && (c.program.body[0].closeStrip = e.strip), j = c.strip, i = c.program
            }
            return f && (f = i, i = b, b = f), { type: h ? "DecoratorBlock" : "BlockStatement", path: a.path, params: a.params, hash: a.hash, program: b, inverse: i, openStrip: a.strip, inverseStrip: j, closeStrip: e && e.strip, loc: this.locInfo(g) }
        }

        function m(a, b) {
            if (!b && a.length) {
                var c = a[0].loc,
                    d = a[a.length - 1].loc;
                c && d && (b = { source: c.source, start: { line: c.start.line, column: c.start.column }, end: { line: d.end.line, column: d.end.column } })
            }
            return { type: "Program", body: a, strip: {}, loc: b }
        }

        function n(a, b, c, e) { return d(a, c), { type: "PartialBlockStatement", name: a.path, params: a.params, hash: a.hash, program: b, openStrip: a.strip, closeStrip: c && c.strip, loc: this.locInfo(e) } }
        var o = c(1)["default"];
        b.__esModule = !0, b.SourceLocation = e, b.id = f, b.stripFlags = g, b.stripComment = h, b.preparePath = i, b.prepareMustache = j, b.prepareRawBlock = k, b.prepareBlock = l, b.prepareProgram = m, b.preparePartialBlock = n;
        var p = c(6),
            q = o(p)
    }, function(a, b, c) {
        "use strict";

        function d() {}

        function e(a, b, c) {
            if (null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
            b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var d = c.parse(a, b),
                e = (new c.Compiler).compile(d, b);
            return (new c.JavaScriptCompiler).compile(e, b)
        }

        function f(a, b, c) {
            function d() {
                var d = c.parse(a, b),
                    e = (new c.Compiler).compile(d, b),
                    f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                return c.template(f)
            }

            function e(a, b) { return f || (f = d()), f.call(this, a, b) }
            if (void 0 === b && (b = {}), null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
            b = m.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var f = void 0;
            return e._setup = function(a) { return f || (f = d()), f._setup(a) }, e._child = function(a, b, c, e) { return f || (f = d()), f._child(a, b, c, e) }, e
        }

        function g(a, b) {
            if (a === b) return !0;
            if (m.isArray(a) && m.isArray(b) && a.length === b.length) {
                for (var c = 0; c < a.length; c++)
                    if (!g(a[c], b[c])) return !1;
                return !0
            }
        }

        function h(a) {
            if (!a.path.parts) {
                var b = a.path;
                a.path = { type: "PathExpression", data: !1, depth: 0, parts: [b.original + ""], original: b.original + "", loc: b.loc }
            }
        }
        var i = c(34)["default"],
            j = c(1)["default"];
        b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;
        var k = c(6),
            l = j(k),
            m = c(5),
            n = c(45),
            o = j(n),
            p = [].slice;
        d.prototype = {
            compiler: d,
            equals: function(a) {
                var b = this.opcodes.length;
                if (a.opcodes.length !== b) return !1;
                for (var c = 0; c < b; c++) {
                    var d = this.opcodes[c],
                        e = a.opcodes[c];
                    if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1
                }
                b = this.children.length;
                for (var c = 0; c < b; c++)
                    if (!this.children[c].equals(a.children[c])) return !1;
                return !0
            },
            guid: 0,
            compile: function(a, b) { return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds, b.blockParams = b.blockParams || [], b.knownHelpers = m.extend(i(null), { helperMissing: !0, blockHelperMissing: !0, each: !0, "if": !0, unless: !0, "with": !0, log: !0, lookup: !0 }, b.knownHelpers), this.accept(a) },
            compileProgram: function(a) {
                var b = new this.compiler,
                    c = b.compile(a, this.options),
                    d = this.guid++;
                return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, this.useDepths = this.useDepths || c.useDepths, d
            },
            accept: function(a) {
                if (!this[a.type]) throw new l["default"]("Unknown type: " + a.type, a);
                this.sourceNode.unshift(a);
                var b = this[a.type](a);
                return this.sourceNode.shift(), b
            },
            Program: function(a) { this.options.blockParams.unshift(a.blockParams); for (var b = a.body, c = b.length, d = 0; d < c; d++) this.accept(b[d]); return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, this },
            BlockStatement: function(a) {
                h(a);
                var b = a.program,
                    c = a.inverse;
                b = b && this.compileProgram(b), c = c && this.compileProgram(c);
                var d = this.classifySexpr(a);
                "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
            },
            DecoratorBlock: function(a) {
                var b = a.program && this.compileProgram(a.program),
                    c = this.setupFullMustacheParams(a, b, void 0),
                    d = a.path;
                this.useDecorators = !0, this.opcode("registerDecorator", c.length, d.original)
            },
            PartialStatement: function(a) {
                this.usePartial = !0;
                var b = a.program;
                b && (b = this.compileProgram(a.program));
                var c = a.params;
                if (c.length > 1) throw new l["default"]("Unsupported number of partial arguments: " + c.length, a);
                c.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : c.push({ type: "PathExpression", parts: [], depth: 0 }));
                var d = a.name.original,
                    e = "SubExpression" === a.name.type;
                e && this.accept(a.name), this.setupFullMustacheParams(a, b, void 0, !0);
                var f = a.indent || "";
                this.options.preventIndent && f && (this.opcode("appendContent", f), f = ""), this.opcode("invokePartial", e, d, f), this.opcode("append")
            },
            PartialBlockStatement: function(a) { this.PartialStatement(a) },
            MustacheStatement: function(a) { this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append") },
            Decorator: function(a) { this.DecoratorBlock(a) },
            ContentStatement: function(a) { a.value && this.opcode("appendContent", a.value) },
            CommentStatement: function() {},
            SubExpression: function(a) { h(a); var b = this.classifySexpr(a); "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a) },
            ambiguousSexpr: function(a, b, c) {
                var d = a.path,
                    e = d.parts[0],
                    f = null != b || null != c;
                this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), d.strict = !0, this.accept(d), this.opcode("invokeAmbiguous", e, f)
            },
            simpleSexpr: function(a) {
                var b = a.path;
                b.strict = !0, this.accept(b), this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(a, b, c) {
                var d = this.setupFullMustacheParams(a, b, c),
                    e = a.path,
                    f = e.parts[0];
                if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
                else {
                    if (this.options.knownHelpersOnly) throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                    e.strict = !0, e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, o["default"].helpers.simpleId(e))
                }
            },
            PathExpression: function(a) {
                this.addDepth(a.depth), this.opcode("getContext", a.depth);
                var b = a.parts[0],
                    c = o["default"].helpers.scopedId(a),
                    d = !a.depth && !c && this.blockParamIndex(b);
                d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, this.opcode("lookupData", a.depth, a.parts, a.strict)) : this.opcode("lookupOnContext", a.parts, a.falsy, a.strict, c) : this.opcode("pushContext")
            },
            StringLiteral: function(a) { this.opcode("pushString", a.value) },
            NumberLiteral: function(a) { this.opcode("pushLiteral", a.value) },
            BooleanLiteral: function(a) { this.opcode("pushLiteral", a.value) },
            UndefinedLiteral: function() { this.opcode("pushLiteral", "undefined") },
            NullLiteral: function() { this.opcode("pushLiteral", "null") },
            Hash: function(a) {
                var b = a.pairs,
                    c = 0,
                    d = b.length;
                for (this.opcode("pushHash"); c < d; c++) this.pushParam(b[c].value);
                for (; c--;) this.opcode("assignToHash", b[c].key);
                this.opcode("popHash")
            },
            opcode: function(a) { this.opcodes.push({ opcode: a, args: p.call(arguments, 1), loc: this.sourceNode[0].loc }) },
            addDepth: function(a) { a && (this.useDepths = !0) },
            classifySexpr: function(a) {
                var b = o["default"].helpers.simpleId(a.path),
                    c = b && !!this.blockParamIndex(a.path.parts[0]),
                    d = !c && o["default"].helpers.helperExpression(a),
                    e = !c && (d || b);
                if (e && !d) {
                    var f = a.path.parts[0],
                        g = this.options;
                    g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1)
                }
                return d ? "helper" : e ? "ambiguous" : "simple"
            },
            pushParams: function(a) { for (var b = 0, c = a.length; b < c; b++) this.pushParam(a[b]) },
            pushParam: function(a) {
                var b = null != a.value ? a.value : a.original || "";
                if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), "SubExpression" === a.type && this.accept(a);
                else {
                    if (this.trackIds) {
                        var c = void 0;
                        if (!a.parts || o["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c) {
                            var d = a.parts.slice(1).join(".");
                            this.opcode("pushId", "BlockParam", c, d)
                        } else b = a.original || b, b.replace && (b = b.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", a.type, b)
                    }
                    this.accept(a)
                }
            },
            setupFullMustacheParams: function(a, b, c, d) { var e = a.params; return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e },
            blockParamIndex: function(a) {
                for (var b = 0, c = this.options.blockParams.length; b < c; b++) {
                    var d = this.options.blockParams[b],
                        e = d && m.indexOf(d, a);
                    if (d && e >= 0) return [b, e]
                }
            }
        }
    }, function(a, b, c) {
        "use strict";

        function d(a) { this.value = a }

        function e() {}

        function f(a, b, c, d) {
            var e = b.popStack(),
                f = 0,
                g = c.length;
            for (a && g--; f < g; f++) e = b.nameLookup(e, c[f], d);
            return a ? [b.aliasable("container.strict"), "(", e, ", ", b.quotedString(c[f]), ", ", JSON.stringify(b.source.currentLocation), " )"] : e
        }
        var g = c(13)["default"],
            h = c(1)["default"];
        b.__esModule = !0;
        var i = c(4),
            j = c(6),
            k = h(j),
            l = c(5),
            m = c(53),
            n = h(m);
        e.prototype = {
                nameLookup: function(a, b) { return this.internalNameLookup(a, b) },
                depthedLookup: function(a) { return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(a), ")"] },
                compilerInfo: function() {
                    var a = i.COMPILER_REVISION,
                        b = i.REVISION_CHANGES[a];
                    return [a, b]
                },
                appendToBuffer: function(a, b, c) { return l.isArray(a) || (a = [a]), a = this.source.wrap(a, b), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : (a.appendToBuffer = !0, a) },
                initializeBuffer: function() { return this.quotedString("") },
                internalNameLookup: function(a, b) { return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", a, ",", JSON.stringify(b), ")"] },
                lookupPropertyFunctionIsUsed: !1,
                compile: function(a, b, c, d) {
                    this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || { decorators: [], programs: [], environments: [] }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || a.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || a.useBlockParams;
                    var e = a.opcodes,
                        f = void 0,
                        g = void 0,
                        h = void 0,
                        i = void 0;
                    for (h = 0, i = e.length; h < i; h++) f = e[h], this.source.currentLocation = f.loc, g = g || f.loc, this[f.opcode].apply(this, f.args);
                    if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new k["default"]("Compile completed with content left on stack");
                    this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]),
                        this.decorators.push("return fn;"), d ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
                    var j = this.createFunctionContext(d);
                    if (this.isChild) return j;
                    var l = { compiler: this.compilerInfo(), main: j };
                    this.decorators && (l.main_d = this.decorators, l.useDecorators = !0);
                    var m = this.context,
                        n = m.programs,
                        o = m.decorators;
                    for (h = 0, i = n.length; h < i; h++) n[h] && (l[h] = n[h], o[h] && (l[h + "_d"] = o[h], l.useDecorators = !0));
                    return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({ file: b.destName }), l.map = l.map && l.map.toString()) : l = l.toString()), l
                },
                preamble: function() { this.lastContext = 0, this.source = new n["default"](this.options.srcName), this.decorators = new n["default"](this.options.srcName) },
                createFunctionContext: function(a) {
                    var b = this,
                        c = "",
                        d = this.stackVars.concat(this.registers.list);
                    d.length > 0 && (c += ", " + d.join(", "));
                    var e = 0;
                    g(this.aliases).forEach(function(a) {
                        var d = b.aliases[a];
                        d.children && d.referenceCount > 1 && (c += ", alias" + ++e + "=" + a, d.children[0] = "alias" + e)
                    }), this.lookupPropertyFunctionIsUsed && (c += ", " + this.lookupPropertyFunctionVarDeclaration());
                    var f = ["container", "depth0", "helpers", "partials", "data"];
                    (this.useBlockParams || this.useDepths) && f.push("blockParams"), this.useDepths && f.push("depths");
                    var h = this.mergeSource(c);
                    return a ? (f.push(h), Function.apply(this, f)) : this.source.wrap(["function(", f.join(","), ") {\n  ", h, "}"])
                },
                mergeSource: function(a) {
                    var b = this.environment.isSimple,
                        c = !this.forceBuffer,
                        d = void 0,
                        e = void 0,
                        f = void 0,
                        g = void 0;
                    return this.source.each(function(a) { a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, g.add(";"), f = g = void 0), e = !0, b || (c = !1)) }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge()
                },
                lookupPropertyFunctionVarDeclaration: function() { return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim() },
                blockValue: function(a) {
                    var b = this.aliasable("container.hooks.blockHelperMissing"),
                        c = [this.contextName(0)];
                    this.setupHelperArgs(a, 0, c);
                    var d = this.popStack();
                    c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c))
                },
                ambiguousBlockValue: function() {
                    var a = this.aliasable("container.hooks.blockHelperMissing"),
                        b = [this.contextName(0)];
                    this.setupHelperArgs("", 0, b, !0), this.flushInline();
                    var c = this.topStack();
                    b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"])
                },
                appendContent: function(a) { this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, this.pendingContent = a },
                append: function() {
                    if (this.isInline()) this.replaceStack(function(a) { return [" != null ? ", a, ' : ""'] }), this.pushSource(this.appendToBuffer(this.popStack()));
                    else {
                        var a = this.popStack();
                        this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
                    }
                },
                appendEscaped: function() { this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"])) },
                getContext: function(a) { this.lastContext = a },
                pushContext: function() { this.pushStackLiteral(this.contextName(this.lastContext)) },
                lookupOnContext: function(a, b, c, d) {
                    var e = 0;
                    d || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[e++])), this.resolvePath("context", a, e, b, c)
                },
                lookupBlockParam: function(a, b) { this.useBlockParams = !0, this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1) },
                lookupData: function(a, b, c) { a ? this.pushStackLiteral("container.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0, c) },
                resolvePath: function(a, b, c, d, e) { var g = this; if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict && e, this, b, a)); for (var h = b.length; c < h; c++) this.replaceStack(function(e) { var f = g.nameLookup(e, b[c], a); return d ? [" && ", f] : [" != null ? ", f, " : ", e] }) },
                resolvePossibleLambda: function() { this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]) },
                pushStringParam: function(a, b) { this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a)) },
                emptyHash: function(a) { this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}") },
                pushHash: function() { this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] } },
                popHash: function() {
                    var a = this.hash;
                    this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), this.push(this.objectLiteral(a.values))
                },
                pushString: function(a) { this.pushStackLiteral(this.quotedString(a)) },
                pushLiteral: function(a) { this.pushStackLiteral(a) },
                pushProgram: function(a) { null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null) },
                registerDecorator: function(a, b) {
                    var c = this.nameLookup("decorators", b, "decorator"),
                        d = this.setupHelperArgs(b, a);
                    this.decorators.push(["fn = ", this.decorators.functionCall(c, "", ["fn", "props", "container", d]), " || fn;"])
                },
                invokeHelper: function(a, b, c) {
                    var d = this.popStack(),
                        e = this.setupHelper(a, b),
                        f = [];
                    c && f.push(e.name), f.push(d), this.options.strict || f.push(this.aliasable("container.hooks.helperMissing"));
                    var g = ["(", this.itemsSeparatedBy(f, "||"), ")"],
                        h = this.source.functionCall(g, "call", e.callParams);
                    this.push(h)
                },
                itemsSeparatedBy: function(a, b) {
                    var c = [];
                    c.push(a[0]);
                    for (var d = 1; d < a.length; d++) c.push(b, a[d]);
                    return c
                },
                invokeKnownHelper: function(a, b) {
                    var c = this.setupHelper(a, b);
                    this.push(this.source.functionCall(c.name, "call", c.callParams))
                },
                invokeAmbiguous: function(a, b) {
                    this.useRegister("helper");
                    var c = this.popStack();
                    this.emptyHash();
                    var d = this.setupHelper(0, a, b),
                        e = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                        f = ["(", "(helper = ", e, " || ", c, ")"];
                    this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"])
                },
                invokePartial: function(a, b, c) {
                    var d = [],
                        e = this.setupParams(b, 1, d);
                    a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), e.helpers = "helpers", e.partials = "partials", e.decorators = "container.decorators", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), this.push(this.source.functionCall("container.invokePartial", "", d))
                },
                assignToHash: function(a) {
                    var b = this.popStack(),
                        c = void 0,
                        d = void 0,
                        e = void 0;
                    this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), c = this.popStack());
                    var f = this.hash;
                    c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b
                },
                pushId: function(a, b, c) { "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null") },
                compiler: e,
                compileChildren: function(a, b) {
                    for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; f < g; f++) {
                        d = c[f], e = new this.compiler;
                        var h = this.matchExistingProgram(d);
                        if (null == h) {
                            this.context.programs.push("");
                            var i = this.context.programs.length;
                            d.index = i, d.name = "program" + i, this.context.programs[i] = e.compile(d, b, this.context, !this.precompile), this.context.decorators[i] = e.decorators, this.context.environments[i] = d, this.useDepths = this.useDepths || e.useDepths, this.useBlockParams = this.useBlockParams || e.useBlockParams, d.useDepths = this.useDepths, d.useBlockParams = this.useBlockParams
                        } else d.index = h.index, d.name = "program" + h.index, this.useDepths = this.useDepths || h.useDepths, this.useBlockParams = this.useBlockParams || h.useBlockParams
                    }
                },
                matchExistingProgram: function(a) { for (var b = 0, c = this.context.environments.length; b < c; b++) { var d = this.context.environments[b]; if (d && d.equals(a)) return d } },
                programExpression: function(a) {
                    var b = this.environment.children[a],
                        c = [b.index, "data", b.blockParams];
                    return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "container.program(" + c.join(", ") + ")"
                },
                useRegister: function(a) { this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a)) },
                push: function(a) { return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a },
                pushStackLiteral: function(a) { this.push(new d(a)) },
                pushSource: function(a) { this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a && this.source.push(a) },
                replaceStack: function(a) {
                    var b = ["("],
                        c = void 0,
                        e = void 0,
                        f = void 0;
                    if (!this.isInline()) throw new k["default"]("replaceStack on non-inline");
                    var g = this.popStack(!0);
                    if (g instanceof d) c = [g.value], b = ["(", c], f = !0;
                    else {
                        e = !0;
                        var h = this.incrStack();
                        b = ["((", this.push(h), " = ", g, ")"], c = this.topStack()
                    }
                    var i = a.call(this, c);
                    f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"))
                },
                incrStack: function() { return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName() },
                topStackName: function() { return "stack" + this.stackSlot },
                flushInline: function() {
                    var a = this.inlineStack;
                    this.inlineStack = [];
                    for (var b = 0, c = a.length; b < c; b++) {
                        var e = a[b];
                        if (e instanceof d) this.compileStack.push(e);
                        else {
                            var f = this.incrStack();
                            this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f)
                        }
                    }
                },
                isInline: function() { return this.inlineStack.length },
                popStack: function(a) {
                    var b = this.isInline(),
                        c = (b ? this.inlineStack : this.compileStack).pop();
                    if (!a && c instanceof d) return c.value;
                    if (!b) {
                        if (!this.stackSlot) throw new k["default"]("Invalid stack pop");
                        this.stackSlot--
                    }
                    return c
                },
                topStack: function() {
                    var a = this.isInline() ? this.inlineStack : this.compileStack,
                        b = a[a.length - 1];
                    return b instanceof d ? b.value : b
                },
                contextName: function(a) { return this.useDepths && a ? "depths[" + a + "]" : "depth" + a },
                quotedString: function(a) { return this.source.quotedString(a) },
                objectLiteral: function(a) { return this.source.objectLiteral(a) },
                aliasable: function(a) { var b = this.aliases[a]; return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), b.aliasable = !0, b.referenceCount = 1, b) },
                setupHelper: function(a, b, c) {
                    var d = [],
                        e = this.setupHelperArgs(b, a, d, c),
                        f = this.nameLookup("helpers", b, "helper"),
                        g = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
                    return { params: d, paramsInit: e, name: f, callParams: [g].concat(d) }
                },
                setupParams: function(a, b, c) {
                    var d = {},
                        e = [],
                        f = [],
                        g = [],
                        h = !c,
                        i = void 0;
                    h && (c = []), d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());
                    var j = this.popStack(),
                        k = this.popStack();
                    (k || j) && (d.fn = k || "container.noop", d.inverse = j || "container.noop");
                    for (var l = b; l--;) i = this.popStack(), c[l] = i, this.trackIds && (g[l] = this.popStack()), this.stringParams && (f[l] = this.popStack(), e[l] = this.popStack());
                    return h && (d.args = this.source.generateArray(c)), this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), this.useBlockParams && (d.blockParams = "blockParams"), d
                },
                setupHelperArgs: function(a, b, c, d) { var e = this.setupParams(a, b, c); return e.loc = JSON.stringify(this.source.currentLocation), e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : c ? (c.push(e), "") : e }
            },
            function() { for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = !0 }(), e.isValidJavaScriptVariableName = function(a) { return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a) }, b["default"] = e, a.exports = b["default"]
    }, function(a, b, c) {
        "use strict";

        function d(a, b, c) { if (g.isArray(a)) { for (var d = [], e = 0, f = a.length; e < f; e++) d.push(b.wrap(a[e], c)); return d } return "boolean" == typeof a || "number" == typeof a ? a + "" : a }

        function e(a) { this.srcFile = a, this.source = [] }
        var f = c(13)["default"];
        b.__esModule = !0;
        var g = c(5),
            h = void 0;
        try {} catch (i) {}
        h || (h = function(a, b, c, d) { this.src = "", d && this.add(d) }, h.prototype = { add: function(a) { g.isArray(a) && (a = a.join("")), this.src += a }, prepend: function(a) { g.isArray(a) && (a = a.join("")), this.src = a + this.src }, toStringWithSourceMap: function() { return { code: this.toString() } }, toString: function() { return this.src } }), e.prototype = {
            isEmpty: function() { return !this.source.length },
            prepend: function(a, b) { this.source.unshift(this.wrap(a, b)) },
            push: function(a, b) { this.source.push(this.wrap(a, b)) },
            merge: function() { var a = this.empty(); return this.each(function(b) { a.add(["  ", b, "\n"]) }), a },
            each: function(a) { for (var b = 0, c = this.source.length; b < c; b++) a(this.source[b]) },
            empty: function() { var a = this.currentLocation || { start: {} }; return new h(a.start.line, a.start.column, this.srcFile) },
            wrap: function(a) { var b = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || { start: {} } : arguments[1]; return a instanceof h ? a : (a = d(a, this, b), new h(b.start.line, b.start.column, this.srcFile, a)) },
            functionCall: function(a, b, c) { return c = this.generateList(c), this.wrap([a, b ? "." + b + "(" : "(", c, ")"]) },
            quotedString: function(a) { return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"' },
            objectLiteral: function(a) {
                var b = this,
                    c = [];
                f(a).forEach(function(e) { var f = d(a[e], b); "undefined" !== f && c.push([b.quotedString(e), ":", f]) });
                var e = this.generateList(c);
                return e.prepend("{"), e.add("}"), e
            },
            generateList: function(a) { for (var b = this.empty(), c = 0, e = a.length; c < e; c++) c && b.add(","), b.add(d(a[c], this)); return b },
            generateArray: function(a) { var b = this.generateList(a); return b.prepend("["), b.add("]"), b }
        }, b["default"] = e, a.exports = b["default"]
    }])
});