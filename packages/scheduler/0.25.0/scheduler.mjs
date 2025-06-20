var __setImmediate$ = (cb, ...args) => ({
  $t: setTimeout(cb, 0, ...args),
  [Symbol.dispose]() {
    clearTimeout(this.t);
  },
});
var G = Object.create;
var S = Object.defineProperty;
var J = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames;
var X = Object.getPrototypeOf,
  Z = Object.prototype.hasOwnProperty;
var U = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var $ = (e, n, t, a) => {
  if ((n && typeof n == "object") || typeof n == "function")
    for (let u of K(n))
      !Z.call(e, u) &&
        u !== t &&
        S(e, u, {
          get: () => n[u],
          enumerable: !(a = J(n, u)) || a.enumerable,
        });
  return e;
};
var h = (e, n, t) => (
  (t = e != null ? G(X(e)) : {}),
  $(
    n || !e || !e.__esModule
      ? S(t, "default", { value: e, enumerable: !0 })
      : t,
    e
  )
);
var W = U((l) => {
  "use strict";
  function F(e, n) {
    var t = e.length;
    e.push(n);
    e: for (; 0 < t; ) {
      var a = (t - 1) >>> 1,
        u = e[a];
      if (0 < P(u, n)) (e[a] = n), (e[t] = u), (t = a);
      else break e;
    }
  }
  function o(e) {
    return e.length === 0 ? null : e[0];
  }
  function C(e) {
    if (e.length === 0) return null;
    var n = e[0],
      t = e.pop();
    if (t !== n) {
      e[0] = t;
      e: for (var a = 0, u = e.length, y = u >>> 1; a < y; ) {
        var k = 2 * (a + 1) - 1,
          p = e[k],
          f = k + 1,
          m = e[f];
        if (0 > P(p, t))
          f < u && 0 > P(m, p)
            ? ((e[a] = m), (e[f] = t), (a = f))
            : ((e[a] = p), (e[k] = t), (a = k));
        else if (f < u && 0 > P(m, t)) (e[a] = m), (e[f] = t), (a = f);
        else break e;
      }
    }
    return n;
  }
  function P(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return t !== 0 ? t : e.id - n.id;
  }
  l.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function"
    ? ((x = performance),
      (l.unstable_now = function () {
        return x.now();
      }))
    : ((q = Date),
      (Y = q.now()),
      (l.unstable_now = function () {
        return q.now() - Y;
      }));
  var x,
    q,
    Y,
    i = [],
    c = [],
    ee = 1,
    s = null,
    r = 3,
    g = !1,
    b = !1,
    d = !1,
    Q = typeof setTimeout == "function" ? setTimeout : null,
    L = typeof clearTimeout == "function" ? clearTimeout : null,
    B = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
  function w(e) {
    for (var n = o(c); n !== null; ) {
      if (n.callback === null) C(c);
      else if (n.startTime <= e)
        C(c), (n.sortIndex = n.expirationTime), F(i, n);
      else break;
      n = o(c);
    }
  }
  function H(e) {
    if (((d = !1), w(e), !b))
      if (o(i) !== null) (b = !0), I();
      else {
        var n = o(c);
        n !== null && R(H, n.startTime - e);
      }
  }
  var T = !1,
    v = -1,
    M = 5,
    O = -1;
  function V() {
    return !(l.unstable_now() - O < M);
  }
  function E() {
    if (T) {
      var e = l.unstable_now();
      O = e;
      var n = !0;
      try {
        e: {
          (b = !1), d && ((d = !1), L(v), (v = -1)), (g = !0);
          var t = r;
          try {
            n: {
              for (
                w(e), s = o(i);
                s !== null && !(s.expirationTime > e && V());

              ) {
                var a = s.callback;
                if (typeof a == "function") {
                  (s.callback = null), (r = s.priorityLevel);
                  var u = a(s.expirationTime <= e);
                  if (((e = l.unstable_now()), typeof u == "function")) {
                    (s.callback = u), w(e), (n = !0);
                    break n;
                  }
                  s === o(i) && C(i), w(e);
                } else C(i);
                s = o(i);
              }
              if (s !== null) n = !0;
              else {
                var y = o(c);
                y !== null && R(H, y.startTime - e), (n = !1);
              }
            }
            break e;
          } finally {
            (s = null), (r = t), (g = !1);
          }
          n = void 0;
        }
      } finally {
        n ? _() : (T = !1);
      }
    }
  }
  var _;
  typeof B == "function"
    ? (_ = function () {
        B(E);
      })
    : typeof MessageChannel < "u"
    ? ((N = new MessageChannel()),
      (D = N.port2),
      (N.port1.onmessage = E),
      (_ = function () {
        D.postMessage(null);
      }))
    : (_ = function () {
        Q(E, 0);
      });
  var N, D;
  function I() {
    T || ((T = !0), _());
  }
  function R(e, n) {
    v = Q(function () {
      e(l.unstable_now());
    }, n);
  }
  l.unstable_IdlePriority = 5;
  l.unstable_ImmediatePriority = 1;
  l.unstable_LowPriority = 4;
  l.unstable_NormalPriority = 3;
  l.unstable_Profiling = null;
  l.unstable_UserBlockingPriority = 2;
  l.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  l.unstable_continueExecution = function () {
    b || g || ((b = !0), I());
  };
  l.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e
      ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        )
      : (M = 0 < e ? Math.floor(1e3 / e) : 5);
  };
  l.unstable_getCurrentPriorityLevel = function () {
    return r;
  };
  l.unstable_getFirstCallbackNode = function () {
    return o(i);
  };
  l.unstable_next = function (e) {
    switch (r) {
      case 1:
      case 2:
      case 3:
        var n = 3;
        break;
      default:
        n = r;
    }
    var t = r;
    r = n;
    try {
      return e();
    } finally {
      r = t;
    }
  };
  l.unstable_pauseExecution = function () {};
  l.unstable_requestPaint = function () {};
  l.unstable_runWithPriority = function (e, n) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var t = r;
    r = e;
    try {
      return n();
    } finally {
      r = t;
    }
  };
  l.unstable_scheduleCallback = function (e, n, t) {
    var a = l.unstable_now();
    switch (
      (typeof t == "object" && t !== null
        ? ((t = t.delay), (t = typeof t == "number" && 0 < t ? a + t : a))
        : (t = a),
      e)
    ) {
      case 1:
        var u = -1;
        break;
      case 2:
        u = 250;
        break;
      case 5:
        u = 1073741823;
        break;
      case 4:
        u = 1e4;
        break;
      default:
        u = 5e3;
    }
    return (
      (u = t + u),
      (e = {
        id: ee++,
        callback: n,
        priorityLevel: e,
        startTime: t,
        expirationTime: u,
        sortIndex: -1,
      }),
      t > a
        ? ((e.sortIndex = t),
          F(c, e),
          o(i) === null &&
            e === o(c) &&
            (d ? (L(v), (v = -1)) : (d = !0), R(H, t - a)))
        : ((e.sortIndex = u), F(i, e), b || g || ((b = !0), I())),
      e
    );
  };
  l.unstable_shouldYield = V;
  l.unstable_wrapCallback = function (e) {
    var n = r;
    return function () {
      var t = r;
      r = n;
      try {
        return e.apply(this, arguments);
      } finally {
        r = t;
      }
    };
  };
});
var A = U((le, z) => {
  "use strict";
  z.exports = W();
});
var j = h(A()),
  {
    unstable_now: ae,
    unstable_IdlePriority: ue,
    unstable_ImmediatePriority: re,
    unstable_LowPriority: se,
    unstable_NormalPriority: oe,
    unstable_Profiling: ie,
    unstable_UserBlockingPriority: ce,
    unstable_cancelCallback: fe,
    unstable_continueExecution: be,
    unstable_forceFrameRate: _e,
    unstable_getCurrentPriorityLevel: de,
    unstable_getFirstCallbackNode: ve,
    unstable_next: ye,
    unstable_pauseExecution: ke,
    unstable_requestPaint: me,
    unstable_runWithPriority: Pe,
    unstable_scheduleCallback: we,
    unstable_shouldYield: Ce,
    unstable_wrapCallback: ge,
  } = j,
  Te = j.default ?? j;
export {
  Te as default,
  fe as unstable_cancelCallback,
  be as unstable_continueExecution,
  _e as unstable_forceFrameRate,
  de as unstable_getCurrentPriorityLevel,
  ve as unstable_getFirstCallbackNode,
  ue as unstable_IdlePriority,
  re as unstable_ImmediatePriority,
  se as unstable_LowPriority,
  ye as unstable_next,
  oe as unstable_NormalPriority,
  ae as unstable_now,
  ke as unstable_pauseExecution,
  ie as unstable_Profiling,
  me as unstable_requestPaint,
  Pe as unstable_runWithPriority,
  we as unstable_scheduleCallback,
  Ce as unstable_shouldYield,
  ce as unstable_UserBlockingPriority,
  ge as unstable_wrapCallback,
};
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=scheduler.mjs.map
