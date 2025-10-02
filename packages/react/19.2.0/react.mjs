/* esm.sh - react@19.2.0 */
var U = Object.create;
var d = Object.defineProperty;
var D = Object.getOwnPropertyDescriptor;
var k = Object.getOwnPropertyNames;
var b = Object.getPrototypeOf,
  q = Object.prototype.hasOwnProperty;
var A = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var z = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let o of k(t))
      !q.call(e, o) &&
        o !== n &&
        d(e, o, {
          get: () => t[o],
          enumerable: !(r = D(t, o)) || r.enumerable,
        });
  return e;
};
var G = (e, t, n) => (
  (n = e != null ? U(b(e)) : {}),
  z(
    t || !e || !e.__esModule
      ? d(n, "default", { value: e, enumerable: !0 })
      : n,
    e
  )
);
var $ = A((u) => {
  "use strict";
  var R = Symbol.for("react.transitional.element"),
    K = Symbol.for("react.portal"),
    W = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    J = Symbol.for("react.suspense"),
    F = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    ee = Symbol.for("react.activity"),
    h = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (h && e[h]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    H = {};
  function a(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = H),
      (this.updater = n || N);
  }
  a.prototype.isReactComponent = {};
  a.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  a.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function I() {}
  I.prototype = a.prototype;
  function m(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = H),
      (this.updater = n || N);
  }
  var T = (m.prototype = new I());
  T.constructor = m;
  j(T, a.prototype);
  T.isPureReactComponent = !0;
  var O = Array.isArray;
  function v() {}
  var i = { H: null, A: null, T: null, S: null },
    M = Object.prototype.hasOwnProperty;
  function C(e, t, n) {
    var r = n.ref;
    return {
      $$typeof: R,
      type: e,
      key: t,
      ref: r !== void 0 ? r : null,
      props: n,
    };
  }
  function ne(e, t) {
    return C(e.type, t, e.props);
  }
  function S(e) {
    return typeof e == "object" && e !== null && e.$$typeof === R;
  }
  function re(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var g = /\/+/g;
  function y(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? re("" + e.key)
      : t.toString(36);
  }
  function ue(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (
          (typeof e.status == "string"
            ? e.then(v, v)
            : ((e.status = "pending"),
              e.then(
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "fulfilled"), (e.value = t));
                },
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "rejected"), (e.reason = t));
                }
              )),
          e.status)
        ) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }
  function l(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var f = !1;
    if (e === null) f = !0;
    else
      switch (s) {
        case "bigint":
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case R:
            case K:
              f = !0;
              break;
            case P:
              return (f = e._init), l(f(e._payload), t, n, r, o);
          }
      }
    if (f)
      return (
        (o = o(e)),
        (f = r === "" ? "." + y(e, 0) : r),
        O(o)
          ? ((n = ""),
            f != null && (n = f.replace(g, "$&/") + "/"),
            l(o, t, n, "", function (x) {
              return x;
            }))
          : o != null &&
            (S(o) &&
              (o = ne(
                o,
                n +
                  (o.key == null || (e && e.key === o.key)
                    ? ""
                    : ("" + o.key).replace(g, "$&/") + "/") +
                  f
              )),
            t.push(o)),
        1
      );
    f = 0;
    var p = r === "" ? "." : r + ":";
    if (O(e))
      for (var c = 0; c < e.length; c++)
        (r = e[c]), (s = p + y(r, c)), (f += l(r, t, n, s, o));
    else if (((c = te(e)), typeof c == "function"))
      for (e = c.call(e), c = 0; !(r = e.next()).done; )
        (r = r.value), (s = p + y(r, c++)), (f += l(r, t, n, s, o));
    else if (s === "object") {
      if (typeof e.then == "function") return l(ue(e), t, n, r, o);
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return f;
  }
  function _(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      l(e, r, "", "", function (s) {
        return t.call(n, s, o++);
      }),
      r
    );
  }
  function oe(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var w =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    se = {
      map: _,
      forEach: function (e, t, n) {
        _(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          _(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          _(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    };
  u.Activity = ee;
  u.Children = se;
  u.Component = a;
  u.Fragment = W;
  u.Profiler = Q;
  u.PureComponent = m;
  u.StrictMode = B;
  u.Suspense = J;
  u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i;
  u.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (e) {
      return i.H.useMemoCache(e);
    },
  };
  u.cache = function (e) {
    return function () {
      return e.apply(null, arguments);
    };
  };
  u.cacheSignal = function () {
    return null;
  };
  u.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "The argument must be a React element, but you passed " + e + "."
      );
    var r = j({}, e.props),
      o = e.key;
    if (t != null)
      for (s in (t.key !== void 0 && (o = "" + t.key), t))
        !M.call(t, s) ||
          s === "key" ||
          s === "__self" ||
          s === "__source" ||
          (s === "ref" && t.ref === void 0) ||
          (r[s] = t[s]);
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
      for (var f = Array(s), p = 0; p < s; p++) f[p] = arguments[p + 2];
      r.children = f;
    }
    return C(e.type, o, r);
  };
  u.createContext = function (e) {
    return (
      (e = {
        $$typeof: X,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (e.Provider = e),
      (e.Consumer = { $$typeof: V, _context: e }),
      e
    );
  };
  u.createElement = function (e, t, n) {
    var r,
      o = {},
      s = null;
    if (t != null)
      for (r in (t.key !== void 0 && (s = "" + t.key), t))
        M.call(t, r) &&
          r !== "key" &&
          r !== "__self" &&
          r !== "__source" &&
          (o[r] = t[r]);
    var f = arguments.length - 2;
    if (f === 1) o.children = n;
    else if (1 < f) {
      for (var p = Array(f), c = 0; c < f; c++) p[c] = arguments[c + 2];
      o.children = p;
    }
    if (e && e.defaultProps)
      for (r in ((f = e.defaultProps), f)) o[r] === void 0 && (o[r] = f[r]);
    return C(e, s, o);
  };
  u.createRef = function () {
    return { current: null };
  };
  u.forwardRef = function (e) {
    return { $$typeof: Z, render: e };
  };
  u.isValidElement = S;
  u.lazy = function (e) {
    return { $$typeof: P, _payload: { _status: -1, _result: e }, _init: oe };
  };
  u.memo = function (e, t) {
    return { $$typeof: F, type: e, compare: t === void 0 ? null : t };
  };
  u.startTransition = function (e) {
    var t = i.T,
      n = {};
    i.T = n;
    try {
      var r = e(),
        o = i.S;
      o !== null && o(n, r),
        typeof r == "object" &&
          r !== null &&
          typeof r.then == "function" &&
          r.then(v, w);
    } catch (s) {
      w(s);
    } finally {
      t !== null && n.types !== null && (t.types = n.types), (i.T = t);
    }
  };
  u.unstable_useCacheRefresh = function () {
    return i.H.useCacheRefresh();
  };
  u.use = function (e) {
    return i.H.use(e);
  };
  u.useActionState = function (e, t, n) {
    return i.H.useActionState(e, t, n);
  };
  u.useCallback = function (e, t) {
    return i.H.useCallback(e, t);
  };
  u.useContext = function (e) {
    return i.H.useContext(e);
  };
  u.useDebugValue = function () {};
  u.useDeferredValue = function (e, t) {
    return i.H.useDeferredValue(e, t);
  };
  u.useEffect = function (e, t) {
    return i.H.useEffect(e, t);
  };
  u.useEffectEvent = function (e) {
    return i.H.useEffectEvent(e);
  };
  u.useId = function () {
    return i.H.useId();
  };
  u.useImperativeHandle = function (e, t, n) {
    return i.H.useImperativeHandle(e, t, n);
  };
  u.useInsertionEffect = function (e, t) {
    return i.H.useInsertionEffect(e, t);
  };
  u.useLayoutEffect = function (e, t) {
    return i.H.useLayoutEffect(e, t);
  };
  u.useMemo = function (e, t) {
    return i.H.useMemo(e, t);
  };
  u.useOptimistic = function (e, t) {
    return i.H.useOptimistic(e, t);
  };
  u.useReducer = function (e, t, n) {
    return i.H.useReducer(e, t, n);
  };
  u.useRef = function (e) {
    return i.H.useRef(e);
  };
  u.useState = function (e) {
    return i.H.useState(e);
  };
  u.useSyncExternalStore = function (e, t, n) {
    return i.H.useSyncExternalStore(e, t, n);
  };
  u.useTransition = function () {
    return i.H.useTransition();
  };
  u.version = "19.2.0";
});
var L = A((ce, Y) => {
  "use strict";
  Y.exports = $();
});
var E = G(L()),
  {
    Activity: pe,
    Children: le,
    Component: ae,
    Fragment: _e,
    Profiler: Ee,
    PureComponent: ye,
    StrictMode: ve,
    Suspense: Re,
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: me,
    __COMPILER_RUNTIME: Te,
    cache: Ce,
    cacheSignal: Se,
    cloneElement: de,
    createContext: Ae,
    createElement: he,
    createRef: Oe,
    forwardRef: ge,
    isValidElement: we,
    lazy: Pe,
    memo: Ne,
    startTransition: je,
    unstable_useCacheRefresh: He,
    use: Ie,
    useActionState: Me,
    useCallback: $e,
    useContext: Ye,
    useDebugValue: Le,
    useDeferredValue: xe,
    useEffect: Ue,
    useEffectEvent: De,
    useId: ke,
    useImperativeHandle: be,
    useInsertionEffect: qe,
    useLayoutEffect: ze,
    useMemo: Ge,
    useOptimistic: Ke,
    useReducer: We,
    useRef: Be,
    useState: Qe,
    useSyncExternalStore: Ve,
    useTransition: Xe,
    version: Ze,
  } = E,
  Je = E.default ?? E;
export {
  pe as Activity,
  le as Children,
  ae as Component,
  _e as Fragment,
  Ee as Profiler,
  ye as PureComponent,
  ve as StrictMode,
  Re as Suspense,
  me as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Te as __COMPILER_RUNTIME,
  Ce as cache,
  Se as cacheSignal,
  de as cloneElement,
  Ae as createContext,
  he as createElement,
  Oe as createRef,
  Je as default,
  ge as forwardRef,
  we as isValidElement,
  Pe as lazy,
  Ne as memo,
  je as startTransition,
  He as unstable_useCacheRefresh,
  Ie as use,
  Me as useActionState,
  $e as useCallback,
  Ye as useContext,
  Le as useDebugValue,
  xe as useDeferredValue,
  Ue as useEffect,
  De as useEffectEvent,
  ke as useId,
  be as useImperativeHandle,
  qe as useInsertionEffect,
  ze as useLayoutEffect,
  Ge as useMemo,
  Ke as useOptimistic,
  We as useReducer,
  Be as useRef,
  Qe as useState,
  Ve as useSyncExternalStore,
  Xe as useTransition,
  Ze as version,
};
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react.mjs.map
