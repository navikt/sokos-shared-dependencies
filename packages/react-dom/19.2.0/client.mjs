/* esm.sh - react-dom@19.2.0/client */
import * as __2$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react-dom/19.2.0/react-dom.mjs";
import * as __1$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/react/19.2.0/react.mjs";
import * as __0$ from "https://cdn.nav.no/okonomi/sokos-shared-dependencies/packages/scheduler/0.27.0/scheduler.mjs";
var require = (n) => {
  const e = (m) => (typeof m.default < "u" ? m.default : m),
    c = (m) => Object.assign({ __esModule: true }, m);
  switch (n) {
    case "scheduler":
      return e(__0$);
    case "react":
      return e(__1$);
    case "react-dom":
      return e(__2$);
    default:
      console.error('module "' + n + '" not found');
      return null;
  }
};
var ey = Object.create;
var Ke = Object.defineProperty;
var iy = Object.getOwnPropertyDescriptor;
var vy = Object.getOwnPropertyNames;
var yy = Object.getPrototypeOf,
  hy = Object.prototype.hasOwnProperty;
var Af = ((l) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(l, { get: (a, t) => (typeof require < "u" ? require : a)[t] })
    : l)(function (l) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + l + '" is not supported');
});
var Le = (l, a) => () => (a || l((a = { exports: {} }).exports, a), a.exports);
var my = (l, a, t, u) => {
  if ((a && typeof a == "object") || typeof a == "function")
    for (let n of vy(a))
      !hy.call(l, n) &&
        n !== t &&
        Ke(l, n, {
          get: () => a[n],
          enumerable: !(u = iy(a, n)) || u.enumerable,
        });
  return l;
};
var dy = (l, a, t) => (
  (t = l != null ? ey(yy(l)) : {}),
  my(
    a || !l || !l.__esModule
      ? Ke(t, "default", { value: l, enumerable: !0 })
      : t,
    l
  )
);
var ty = Le((zf) => {
  "use strict";
  var al = Af("scheduler"),
    z0 = Af("react"),
    Sy = Af("react-dom");
  function A(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        a += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function b0(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function ou(l) {
    var a = l,
      t = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do (a = l), (a.flags & 4098) !== 0 && (t = a.return), (l = a.return);
      while (l);
    }
    return a.tag === 3 ? t : null;
  }
  function A0(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (
        (a === null && ((l = l.alternate), l !== null && (a = l.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function T0(l) {
    if (l.tag === 31) {
      var a = l.memoizedState;
      if (
        (a === null && ((l = l.alternate), l !== null && (a = l.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function Je(l) {
    if (ou(l) !== l) throw Error(A(188));
  }
  function gy(l) {
    var a = l.alternate;
    if (!a) {
      if (((a = ou(l)), a === null)) throw Error(A(188));
      return a !== l ? null : l;
    }
    for (var t = l, u = a; ; ) {
      var n = t.return;
      if (n === null) break;
      var f = n.alternate;
      if (f === null) {
        if (((u = n.return), u !== null)) {
          t = u;
          continue;
        }
        break;
      }
      if (n.child === f.child) {
        for (f = n.child; f; ) {
          if (f === t) return Je(n), l;
          if (f === u) return Je(n), a;
          f = f.sibling;
        }
        throw Error(A(188));
      }
      if (t.return !== u.return) (t = n), (u = f);
      else {
        for (var c = !1, e = n.child; e; ) {
          if (e === t) {
            (c = !0), (t = n), (u = f);
            break;
          }
          if (e === u) {
            (c = !0), (u = n), (t = f);
            break;
          }
          e = e.sibling;
        }
        if (!c) {
          for (e = f.child; e; ) {
            if (e === t) {
              (c = !0), (t = f), (u = n);
              break;
            }
            if (e === u) {
              (c = !0), (u = f), (t = n);
              break;
            }
            e = e.sibling;
          }
          if (!c) throw Error(A(189));
        }
      }
      if (t.alternate !== u) throw Error(A(190));
    }
    if (t.tag !== 3) throw Error(A(188));
    return t.stateNode.current === t ? l : a;
  }
  function E0(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((a = E0(l)), a !== null)) return a;
      l = l.sibling;
    }
    return null;
  }
  var L = Object.assign,
    zy = Symbol.for("react.element"),
    Lu = Symbol.for("react.transitional.element"),
    lu = Symbol.for("react.portal"),
    yt = Symbol.for("react.fragment"),
    M0 = Symbol.for("react.strict_mode"),
    Pf = Symbol.for("react.profiler"),
    O0 = Symbol.for("react.consumer"),
    la = Symbol.for("react.context"),
    wc = Symbol.for("react.forward_ref"),
    rf = Symbol.for("react.suspense"),
    lc = Symbol.for("react.suspense_list"),
    Fc = Symbol.for("react.memo"),
    da = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  var ac = Symbol.for("react.activity");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.tracing_marker");
  var by = Symbol.for("react.memo_cache_sentinel");
  Symbol.for("react.view_transition");
  var We = Symbol.iterator;
  function wt(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (We && l[We]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ay = Symbol.for("react.client.reference");
  function tc(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ay ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case yt:
        return "Fragment";
      case Pf:
        return "Profiler";
      case M0:
        return "StrictMode";
      case rf:
        return "Suspense";
      case lc:
        return "SuspenseList";
      case ac:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case lu:
          return "Portal";
        case la:
          return l.displayName || "Context";
        case O0:
          return (l._context.displayName || "Context") + ".Consumer";
        case wc:
          var a = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = a.displayName || a.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Fc:
          return (
            (a = l.displayName || null), a !== null ? a : tc(l.type) || "Memo"
          );
        case da:
          (a = l._payload), (l = l._init);
          try {
            return tc(l(a));
          } catch {}
      }
    return null;
  }
  var au = Array.isArray,
    D = z0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = Sy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    La = { pending: !1, data: null, method: null, action: null },
    uc = [],
    ht = -1;
  function Jl(l) {
    return { current: l };
  }
  function nl(l) {
    0 > ht || ((l.current = uc[ht]), (uc[ht] = null), ht--);
  }
  function x(l, a) {
    ht++, (uc[ht] = l.current), (l.current = a);
  }
  var Ll = Jl(null),
    Au = Jl(null),
    Ua = Jl(null),
    Un = Jl(null);
  function Hn(l, a) {
    switch ((x(Ua, a), x(Au, l), x(Ll, null), a.nodeType)) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? ri(l) : 0;
        break;
      default:
        if (((l = a.tagName), (a = a.namespaceURI)))
          (a = ri(a)), (l = pv(a, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    nl(Ll), x(Ll, l);
  }
  function _t() {
    nl(Ll), nl(Au), nl(Ua);
  }
  function nc(l) {
    l.memoizedState !== null && x(Un, l);
    var a = Ll.current,
      t = pv(a, l.type);
    a !== t && (x(Au, l), x(Ll, t));
  }
  function Nn(l) {
    Au.current === l && (nl(Ll), nl(Au)),
      Un.current === l && (nl(Un), (_u._currentValue = La));
  }
  var Tf, we;
  function Va(l) {
    if (Tf === void 0)
      try {
        throw Error();
      } catch (t) {
        var a = t.stack.trim().match(/\n( *(at )?)/);
        (Tf = (a && a[1]) || ""),
          (we =
            -1 <
            t.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < t.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Tf +
      l +
      we
    );
  }
  var Ef = !1;
  function Mf(l, a) {
    if (!l || Ef) return "";
    Ef = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var b = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(b.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(b, []);
                } catch (S) {
                  var d = S;
                }
                Reflect.construct(l, [], b);
              } else {
                try {
                  b.call();
                } catch (S) {
                  d = S;
                }
                l.call(b.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                d = S;
              }
              (b = l()) &&
                typeof b.catch == "function" &&
                b.catch(function () {});
            }
          } catch (S) {
            if (S && d && typeof S.stack == "string") return [S.stack, d.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = u.DetermineComponentFrameRoot(),
        c = f[0],
        e = f[1];
      if (c && e) {
        var i = c.split(`
`),
          m = e.split(`
`);
        for (
          n = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; n < m.length && !m[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (u === i.length || n === m.length)
          for (
            u = i.length - 1, n = m.length - 1;
            1 <= u && 0 <= n && i[u] !== m[n];

          )
            n--;
        for (; 1 <= u && 0 <= n; u--, n--)
          if (i[u] !== m[n]) {
            if (u !== 1 || n !== 1)
              do
                if ((u--, n--, 0 > n || i[u] !== m[n])) {
                  var g =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= u && 0 <= n);
            break;
          }
      }
    } finally {
      (Ef = !1), (Error.prepareStackTrace = t);
    }
    return (t = l ? l.displayName || l.name : "") ? Va(t) : "";
  }
  function Ty(l, a) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Va(l.type);
      case 16:
        return Va("Lazy");
      case 13:
        return l.child !== a && a !== null
          ? Va("Suspense Fallback")
          : Va("Suspense");
      case 19:
        return Va("SuspenseList");
      case 0:
      case 15:
        return Mf(l.type, !1);
      case 11:
        return Mf(l.type.render, !1);
      case 1:
        return Mf(l.type, !0);
      case 31:
        return Va("Activity");
      default:
        return "";
    }
  }
  function Fe(l) {
    try {
      var a = "",
        t = null;
      do (a += Ty(l, t)), (t = l), (l = l.return);
      while (l);
      return a;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var fc = Object.prototype.hasOwnProperty,
    $c = al.unstable_scheduleCallback,
    Of = al.unstable_cancelCallback,
    Ey = al.unstable_shouldYield,
    My = al.unstable_requestPaint,
    Ol = al.unstable_now,
    Oy = al.unstable_getCurrentPriorityLevel,
    D0 = al.unstable_ImmediatePriority,
    U0 = al.unstable_UserBlockingPriority,
    Bn = al.unstable_NormalPriority,
    Dy = al.unstable_LowPriority,
    H0 = al.unstable_IdlePriority,
    Uy = al.log,
    Hy = al.unstable_setDisableYieldValue,
    Xu = null,
    Dl = null;
  function Ta(l) {
    if (
      (typeof Uy == "function" && Hy(l),
      Dl && typeof Dl.setStrictMode == "function")
    )
      try {
        Dl.setStrictMode(Xu, l);
      } catch {}
  }
  var Ul = Math.clz32 ? Math.clz32 : qy,
    Ny = Math.log,
    By = Math.LN2;
  function qy(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((Ny(l) / By) | 0)) | 0;
  }
  var Ju = 256,
    Wu = 262144,
    wu = 4194304;
  function xa(l) {
    var a = l & 42;
    if (a !== 0) return a;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function rn(l, a, t) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var n = 0,
      f = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var e = u & 134217727;
    return (
      e !== 0
        ? ((u = e & ~f),
          u !== 0
            ? (n = xa(u))
            : ((c &= e),
              c !== 0
                ? (n = xa(c))
                : t || ((t = e & ~l), t !== 0 && (n = xa(t)))))
        : ((e = u & ~f),
          e !== 0
            ? (n = xa(e))
            : c !== 0
            ? (n = xa(c))
            : t || ((t = u & ~l), t !== 0 && (n = xa(t)))),
      n === 0
        ? 0
        : a !== 0 &&
          a !== n &&
          (a & f) === 0 &&
          ((f = n & -n),
          (t = a & -a),
          f >= t || (f === 32 && (t & 4194048) !== 0))
        ? a
        : n
    );
  }
  function Gu(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function _y(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function N0() {
    var l = wu;
    return (wu <<= 1), (wu & 62914560) === 0 && (wu = 4194304), l;
  }
  function Df(l) {
    for (var a = [], t = 0; 31 > t; t++) a.push(l);
    return a;
  }
  function Qu(l, a) {
    (l.pendingLanes |= a),
      a !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Yy(l, a, t, u, n, f) {
    var c = l.pendingLanes;
    (l.pendingLanes = t),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= t),
      (l.entangledLanes &= t),
      (l.errorRecoveryDisabledLanes &= t),
      (l.shellSuspendCounter = 0);
    var e = l.entanglements,
      i = l.expirationTimes,
      m = l.hiddenUpdates;
    for (t = c & ~t; 0 < t; ) {
      var g = 31 - Ul(t),
        b = 1 << g;
      (e[g] = 0), (i[g] = -1);
      var d = m[g];
      if (d !== null)
        for (m[g] = null, g = 0; g < d.length; g++) {
          var S = d[g];
          S !== null && (S.lane &= -536870913);
        }
      t &= ~b;
    }
    u !== 0 && B0(l, u, 0),
      f !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= f & ~(c & ~a));
  }
  function B0(l, a, t) {
    (l.pendingLanes |= a), (l.suspendedLanes &= ~a);
    var u = 31 - Ul(a);
    (l.entangledLanes |= a),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (t & 261930));
  }
  function q0(l, a) {
    var t = (l.entangledLanes |= a);
    for (l = l.entanglements; t; ) {
      var u = 31 - Ul(t),
        n = 1 << u;
      (n & a) | (l[u] & a) && (l[u] |= a), (t &= ~n);
    }
  }
  function _0(l, a) {
    var t = a & -a;
    return (
      (t = (t & 42) !== 0 ? 1 : kc(t)),
      (t & (l.suspendedLanes | a)) !== 0 ? 0 : t
    );
  }
  function kc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Ic(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Y0() {
    var l = G.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : rv(l.type));
  }
  function $e(l, a) {
    var t = G.p;
    try {
      return (G.p = l), a();
    } finally {
      G.p = t;
    }
  }
  var Ca = Math.random().toString(36).slice(2),
    cl = "__reactFiber$" + Ca,
    zl = "__reactProps$" + Ca,
    Vt = "__reactContainer$" + Ca,
    cc = "__reactEvents$" + Ca,
    sy = "__reactListeners$" + Ca,
    oy = "__reactHandles$" + Ca,
    ke = "__reactResources$" + Ca,
    Zu = "__reactMarker$" + Ca;
  function Pc(l) {
    delete l[cl], delete l[zl], delete l[cc], delete l[sy], delete l[oy];
  }
  function mt(l) {
    var a = l[cl];
    if (a) return a;
    for (var t = l.parentNode; t; ) {
      if ((a = t[Vt] || t[cl])) {
        if (
          ((t = a.alternate),
          a.child !== null || (t !== null && t.child !== null))
        )
          for (l = n0(l); l !== null; ) {
            if ((t = l[cl])) return t;
            l = n0(l);
          }
        return a;
      }
      (l = t), (t = l.parentNode);
    }
    return null;
  }
  function xt(l) {
    if ((l = l[cl] || l[Vt])) {
      var a = l.tag;
      if (
        a === 5 ||
        a === 6 ||
        a === 13 ||
        a === 31 ||
        a === 26 ||
        a === 27 ||
        a === 3
      )
        return l;
    }
    return null;
  }
  function tu(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(A(33));
  }
  function Ot(l) {
    var a = l[ke];
    return (
      a ||
        (a = l[ke] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      a
    );
  }
  function ul(l) {
    l[Zu] = !0;
  }
  var s0 = new Set(),
    o0 = {};
  function lt(l, a) {
    Yt(l, a), Yt(l + "Capture", a);
  }
  function Yt(l, a) {
    for (o0[l] = a, l = 0; l < a.length; l++) s0.add(a[l]);
  }
  var Xy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ie = {},
    Pe = {};
  function Gy(l) {
    return fc.call(Pe, l)
      ? !0
      : fc.call(Ie, l)
      ? !1
      : Xy.test(l)
      ? (Pe[l] = !0)
      : ((Ie[l] = !0), !1);
  }
  function vn(l, a, t) {
    if (Gy(a))
      if (t === null) l.removeAttribute(a);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var u = a.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + t);
      }
  }
  function Fu(l, a, t) {
    if (t === null) l.removeAttribute(a);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + t);
    }
  }
  function wl(l, a, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(a, t, "" + u);
    }
  }
  function _l(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function X0(l) {
    var a = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function Qy(l, a, t) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, a);
    if (
      !l.hasOwnProperty(a) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var n = u.get,
        f = u.set;
      return (
        Object.defineProperty(l, a, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (t = "" + c), f.call(this, c);
          },
        }),
        Object.defineProperty(l, a, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (c) {
            t = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[a];
          },
        }
      );
    }
  }
  function ec(l) {
    if (!l._valueTracker) {
      var a = X0(l) ? "checked" : "value";
      l._valueTracker = Qy(l, a, "" + l[a]);
    }
  }
  function G0(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var t = a.getValue(),
      u = "";
    return (
      l && (u = X0(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== t ? (a.setValue(l), !0) : !1
    );
  }
  function qn(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zy = /[\n"\\]/g;
  function ol(l) {
    return l.replace(Zy, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function ic(l, a, t, u, n, f, c, e) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      a != null
        ? c === "number"
          ? ((a === 0 && l.value === "") || l.value != a) &&
            (l.value = "" + _l(a))
          : l.value !== "" + _l(a) && (l.value = "" + _l(a))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      a != null
        ? vc(l, c, _l(a))
        : t != null
        ? vc(l, c, _l(t))
        : u != null && l.removeAttribute("value"),
      n == null && f != null && (l.defaultChecked = !!f),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      e != null &&
      typeof e != "function" &&
      typeof e != "symbol" &&
      typeof e != "boolean"
        ? (l.name = "" + _l(e))
        : l.removeAttribute("name");
  }
  function Q0(l, a, t, u, n, f, c, e) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (l.type = f),
      a != null || t != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || a != null)) {
        ec(l);
        return;
      }
      (t = t != null ? "" + _l(t) : ""),
        (a = a != null ? "" + _l(a) : t),
        e || a === l.value || (l.value = a),
        (l.defaultValue = a);
    }
    (u = u ?? n),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = e ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      ec(l);
  }
  function vc(l, a, t) {
    (a === "number" && qn(l.ownerDocument) === l) ||
      l.defaultValue === "" + t ||
      (l.defaultValue = "" + t);
  }
  function Dt(l, a, t, u) {
    if (((l = l.options), a)) {
      a = {};
      for (var n = 0; n < t.length; n++) a["$" + t[n]] = !0;
      for (t = 0; t < l.length; t++)
        (n = a.hasOwnProperty("$" + l[t].value)),
          l[t].selected !== n && (l[t].selected = n),
          n && u && (l[t].defaultSelected = !0);
    } else {
      for (t = "" + _l(t), a = null, n = 0; n < l.length; n++) {
        if (l[n].value === t) {
          (l[n].selected = !0), u && (l[n].defaultSelected = !0);
          return;
        }
        a !== null || l[n].disabled || (a = l[n]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Z0(l, a, t) {
    if (
      a != null &&
      ((a = "" + _l(a)), a !== l.value && (l.value = a), t == null)
    ) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = t != null ? "" + _l(t) : "";
  }
  function C0(l, a, t, u) {
    if (a == null) {
      if (u != null) {
        if (t != null) throw Error(A(92));
        if (au(u)) {
          if (1 < u.length) throw Error(A(93));
          u = u[0];
        }
        t = u;
      }
      t == null && (t = ""), (a = t);
    }
    (t = _l(a)),
      (l.defaultValue = t),
      (u = l.textContent),
      u === t && u !== "" && u !== null && (l.value = u),
      ec(l);
  }
  function st(l, a) {
    if (a) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var Cy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function re(l, a, t) {
    var u = a.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? u
        ? l.setProperty(a, "")
        : a === "float"
        ? (l.cssFloat = "")
        : (l[a] = "")
      : u
      ? l.setProperty(a, t)
      : typeof t != "number" || t === 0 || Cy.has(a)
      ? a === "float"
        ? (l.cssFloat = t)
        : (l[a] = ("" + t).trim())
      : (l[a] = t + "px");
  }
  function R0(l, a, t) {
    if (a != null && typeof a != "object") throw Error(A(62));
    if (((l = l.style), t != null)) {
      for (var u in t)
        !t.hasOwnProperty(u) ||
          (a != null && a.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var n in a)
        (u = a[n]), a.hasOwnProperty(n) && t[n] !== u && re(l, n, u);
    } else for (var f in a) a.hasOwnProperty(f) && re(l, f, a[f]);
  }
  function rc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ry = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yn(l) {
    return jy.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function aa() {}
  var yc = null;
  function le(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var dt = null,
    Ut = null;
  function li(l) {
    var a = xt(l);
    if (a && (l = a.stateNode)) {
      var t = l[zl] || null;
      l: switch (((l = a.stateNode), a.type)) {
        case "input":
          if (
            (ic(
              l,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name
            ),
            (a = t.name),
            t.type === "radio" && a != null)
          ) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + ol("" + a) + '"][type="radio"]'
              ),
                a = 0;
              a < t.length;
              a++
            ) {
              var u = t[a];
              if (u !== l && u.form === l.form) {
                var n = u[zl] || null;
                if (!n) throw Error(A(90));
                ic(
                  u,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (a = 0; a < t.length; a++)
              (u = t[a]), u.form === l.form && G0(u);
          }
          break l;
        case "textarea":
          Z0(l, t.value, t.defaultValue);
          break l;
        case "select":
          (a = t.value), a != null && Dt(l, !!t.multiple, a, !1);
      }
    }
  }
  var Uf = !1;
  function j0(l, a, t) {
    if (Uf) return l(a, t);
    Uf = !0;
    try {
      var u = l(a);
      return u;
    } finally {
      if (
        ((Uf = !1),
        (dt !== null || Ut !== null) &&
          (mf(), dt && ((a = dt), (l = Ut), (Ut = dt = null), li(a), l)))
      )
        for (a = 0; a < l.length; a++) li(l[a]);
    }
  }
  function Tu(l, a) {
    var t = l.stateNode;
    if (t === null) return null;
    var u = t[zl] || null;
    if (u === null) return null;
    t = u[a];
    l: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (t && typeof t != "function") throw Error(A(231, a, typeof t));
    return t;
  }
  var ca = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hc = !1;
  if (ca)
    try {
      (ft = {}),
        Object.defineProperty(ft, "passive", {
          get: function () {
            hc = !0;
          },
        }),
        window.addEventListener("test", ft, ft),
        window.removeEventListener("test", ft, ft);
    } catch {
      hc = !1;
    }
  var ft,
    Ea = null,
    ae = null,
    hn = null;
  function V0() {
    if (hn) return hn;
    var l,
      a = ae,
      t = a.length,
      u,
      n = "value" in Ea ? Ea.value : Ea.textContent,
      f = n.length;
    for (l = 0; l < t && a[l] === n[l]; l++);
    var c = t - l;
    for (u = 1; u <= c && a[t - u] === n[f - u]; u++);
    return (hn = n.slice(l, 1 < u ? 1 - u : void 0));
  }
  function mn(l) {
    var a = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && a === 13 && (l = 13))
        : (l = a),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function $u() {
    return !0;
  }
  function ai() {
    return !1;
  }
  function bl(l) {
    function a(t, u, n, f, c) {
      (this._reactName = t),
        (this._targetInst = n),
        (this.type = u),
        (this.nativeEvent = f),
        (this.target = c),
        (this.currentTarget = null);
      for (var e in l)
        l.hasOwnProperty(e) && ((t = l[e]), (this[e] = t ? t(f) : f[e]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? $u
          : ai),
        (this.isPropagationStopped = ai),
        this
      );
    }
    return (
      L(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = $u));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = $u));
        },
        persist: function () {},
        isPersistent: $u,
      }),
      a
    );
  }
  var at = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    lf = bl(at),
    Cu = L({}, at, { view: 0, detail: 0 }),
    Vy = bl(Cu),
    Hf,
    Nf,
    Ft,
    af = L({}, Cu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: te,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ft &&
              (Ft && l.type === "mousemove"
                ? ((Hf = l.screenX - Ft.screenX), (Nf = l.screenY - Ft.screenY))
                : (Nf = Hf = 0),
              (Ft = l)),
            Hf);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : Nf;
      },
    }),
    ti = bl(af),
    xy = L({}, af, { dataTransfer: 0 }),
    py = bl(xy),
    Ky = L({}, Cu, { relatedTarget: 0 }),
    Bf = bl(Ky),
    Ly = L({}, at, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jy = bl(Ly),
    Wy = L({}, at, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    wy = bl(Wy),
    Fy = L({}, at, { data: 0 }),
    ui = bl(Fy),
    $y = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ky = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Iy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Py(l) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(l)
      : (l = Iy[l])
      ? !!a[l]
      : !1;
  }
  function te() {
    return Py;
  }
  var ry = L({}, Cu, {
      key: function (l) {
        if (l.key) {
          var a = $y[l.key] || l.key;
          if (a !== "Unidentified") return a;
        }
        return l.type === "keypress"
          ? ((l = mn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? ky[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: te,
      charCode: function (l) {
        return l.type === "keypress" ? mn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? mn(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    lh = bl(ry),
    ah = L({}, af, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ni = bl(ah),
    th = L({}, Cu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: te,
    }),
    uh = bl(th),
    nh = L({}, at, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fh = bl(nh),
    ch = L({}, af, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    eh = bl(ch),
    ih = L({}, at, { newState: 0, oldState: 0 }),
    vh = bl(ih),
    yh = [9, 13, 27, 32],
    ue = ca && "CompositionEvent" in window,
    fu = null;
  ca && "documentMode" in document && (fu = document.documentMode);
  var hh = ca && "TextEvent" in window && !fu,
    x0 = ca && (!ue || (fu && 8 < fu && 11 >= fu)),
    fi = " ",
    ci = !1;
  function p0(l, a) {
    switch (l) {
      case "keyup":
        return yh.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function K0(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var St = !1;
  function mh(l, a) {
    switch (l) {
      case "compositionend":
        return K0(a);
      case "keypress":
        return a.which !== 32 ? null : ((ci = !0), fi);
      case "textInput":
        return (l = a.data), l === fi && ci ? null : l;
      default:
        return null;
    }
  }
  function dh(l, a) {
    if (St)
      return l === "compositionend" || (!ue && p0(l, a))
        ? ((l = V0()), (hn = ae = Ea = null), (St = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return x0 && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var Sh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ei(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!Sh[l.type] : a === "textarea";
  }
  function L0(l, a, t, u) {
    dt ? (Ut ? Ut.push(u) : (Ut = [u])) : (dt = u),
      (a = Wn(a, "onChange")),
      0 < a.length &&
        ((t = new lf("onChange", "change", null, t, u)),
        l.push({ event: t, listeners: a }));
  }
  var cu = null,
    Eu = null;
  function gh(l) {
    jv(l, 0);
  }
  function tf(l) {
    var a = tu(l);
    if (G0(a)) return l;
  }
  function ii(l, a) {
    if (l === "change") return a;
  }
  var J0 = !1;
  ca &&
    (ca
      ? ((Iu = "oninput" in document),
        Iu ||
          ((qf = document.createElement("div")),
          qf.setAttribute("oninput", "return;"),
          (Iu = typeof qf.oninput == "function")),
        (ku = Iu))
      : (ku = !1),
    (J0 = ku && (!document.documentMode || 9 < document.documentMode)));
  var ku, Iu, qf;
  function vi() {
    cu && (cu.detachEvent("onpropertychange", W0), (Eu = cu = null));
  }
  function W0(l) {
    if (l.propertyName === "value" && tf(Eu)) {
      var a = [];
      L0(a, Eu, l, le(l)), j0(gh, a);
    }
  }
  function zh(l, a, t) {
    l === "focusin"
      ? (vi(), (cu = a), (Eu = t), cu.attachEvent("onpropertychange", W0))
      : l === "focusout" && vi();
  }
  function bh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return tf(Eu);
  }
  function Ah(l, a) {
    if (l === "click") return tf(a);
  }
  function Th(l, a) {
    if (l === "input" || l === "change") return tf(a);
  }
  function Eh(l, a) {
    return (l === a && (l !== 0 || 1 / l === 1 / a)) || (l !== l && a !== a);
  }
  var Nl = typeof Object.is == "function" ? Object.is : Eh;
  function Mu(l, a) {
    if (Nl(l, a)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var t = Object.keys(l),
      u = Object.keys(a);
    if (t.length !== u.length) return !1;
    for (u = 0; u < t.length; u++) {
      var n = t[u];
      if (!fc.call(a, n) || !Nl(l[n], a[n])) return !1;
    }
    return !0;
  }
  function yi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function hi(l, a) {
    var t = yi(l);
    l = 0;
    for (var u; t; ) {
      if (t.nodeType === 3) {
        if (((u = l + t.textContent.length), l <= a && u >= a))
          return { node: t, offset: a - l };
        l = u;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = yi(t);
    }
  }
  function w0(l, a) {
    return l && a
      ? l === a
        ? !0
        : l && l.nodeType === 3
        ? !1
        : a && a.nodeType === 3
        ? w0(l, a.parentNode)
        : "contains" in l
        ? l.contains(a)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(a) & 16)
        : !1
      : !1;
  }
  function F0(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var a = qn(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof a.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = a.contentWindow;
      else break;
      a = qn(l.document);
    }
    return a;
  }
  function ne(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        a === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Mh = ca && "documentMode" in document && 11 >= document.documentMode,
    gt = null,
    mc = null,
    eu = null,
    dc = !1;
  function mi(l, a, t) {
    var u =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    dc ||
      gt == null ||
      gt !== qn(u) ||
      ((u = gt),
      "selectionStart" in u && ne(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (eu && Mu(eu, u)) ||
        ((eu = u),
        (u = Wn(mc, "onSelect")),
        0 < u.length &&
          ((a = new lf("onSelect", "select", null, a, t)),
          l.push({ event: a, listeners: u }),
          (a.target = gt))));
  }
  function ja(l, a) {
    var t = {};
    return (
      (t[l.toLowerCase()] = a.toLowerCase()),
      (t["Webkit" + l] = "webkit" + a),
      (t["Moz" + l] = "moz" + a),
      t
    );
  }
  var zt = {
      animationend: ja("Animation", "AnimationEnd"),
      animationiteration: ja("Animation", "AnimationIteration"),
      animationstart: ja("Animation", "AnimationStart"),
      transitionrun: ja("Transition", "TransitionRun"),
      transitionstart: ja("Transition", "TransitionStart"),
      transitioncancel: ja("Transition", "TransitionCancel"),
      transitionend: ja("Transition", "TransitionEnd"),
    },
    _f = {},
    $0 = {};
  ca &&
    (($0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zt.animationend.animation,
      delete zt.animationiteration.animation,
      delete zt.animationstart.animation),
    "TransitionEvent" in window || delete zt.transitionend.transition);
  function tt(l) {
    if (_f[l]) return _f[l];
    if (!zt[l]) return l;
    var a = zt[l],
      t;
    for (t in a) if (a.hasOwnProperty(t) && t in $0) return (_f[l] = a[t]);
    return l;
  }
  var k0 = tt("animationend"),
    I0 = tt("animationiteration"),
    P0 = tt("animationstart"),
    Oh = tt("transitionrun"),
    Dh = tt("transitionstart"),
    Uh = tt("transitioncancel"),
    r0 = tt("transitionend"),
    l1 = new Map(),
    Sc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Sc.push("scrollEnd");
  function Vl(l, a) {
    l1.set(l, a), lt(a, [l]);
  }
  var _n =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var a = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(a)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    ql = [],
    bt = 0,
    fe = 0;
  function uf() {
    for (var l = bt, a = (fe = bt = 0); a < l; ) {
      var t = ql[a];
      ql[a++] = null;
      var u = ql[a];
      ql[a++] = null;
      var n = ql[a];
      ql[a++] = null;
      var f = ql[a];
      if (((ql[a++] = null), u !== null && n !== null)) {
        var c = u.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (u.pending = n);
      }
      f !== 0 && a1(t, n, f);
    }
  }
  function nf(l, a, t, u) {
    (ql[bt++] = l),
      (ql[bt++] = a),
      (ql[bt++] = t),
      (ql[bt++] = u),
      (fe |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function ce(l, a, t, u) {
    return nf(l, a, t, u), Yn(l);
  }
  function ut(l, a) {
    return nf(l, null, null, a), Yn(l);
  }
  function a1(l, a, t) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t);
    for (var n = !1, f = l.return; f !== null; )
      (f.childLanes |= t),
        (u = f.alternate),
        u !== null && (u.childLanes |= t),
        f.tag === 22 &&
          ((l = f.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = f),
        (f = f.return);
    return l.tag === 3
      ? ((f = l.stateNode),
        n &&
          a !== null &&
          ((n = 31 - Ul(t)),
          (l = f.hiddenUpdates),
          (u = l[n]),
          u === null ? (l[n] = [a]) : u.push(a),
          (a.lane = t | 536870912)),
        f)
      : null;
  }
  function Yn(l) {
    if (50 < zu) throw ((zu = 0), (Qc = null), Error(A(185)));
    for (var a = l.return; a !== null; ) (l = a), (a = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var At = {};
  function Hh(l, a, t, u) {
    (this.tag = l),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = a),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function El(l, a, t, u) {
    return new Hh(l, a, t, u);
  }
  function ee(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function ua(l, a) {
    var t = l.alternate;
    return (
      t === null
        ? ((t = El(l.tag, a, l.key, l.mode)),
          (t.elementType = l.elementType),
          (t.type = l.type),
          (t.stateNode = l.stateNode),
          (t.alternate = l),
          (l.alternate = t))
        : ((t.pendingProps = a),
          (t.type = l.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = l.flags & 65011712),
      (t.childLanes = l.childLanes),
      (t.lanes = l.lanes),
      (t.child = l.child),
      (t.memoizedProps = l.memoizedProps),
      (t.memoizedState = l.memoizedState),
      (t.updateQueue = l.updateQueue),
      (a = l.dependencies),
      (t.dependencies =
        a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
      (t.sibling = l.sibling),
      (t.index = l.index),
      (t.ref = l.ref),
      (t.refCleanup = l.refCleanup),
      t
    );
  }
  function t1(l, a) {
    l.flags &= 65011714;
    var t = l.alternate;
    return (
      t === null
        ? ((l.childLanes = 0),
          (l.lanes = a),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = t.childLanes),
          (l.lanes = t.lanes),
          (l.child = t.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = t.memoizedProps),
          (l.memoizedState = t.memoizedState),
          (l.updateQueue = t.updateQueue),
          (l.type = t.type),
          (a = t.dependencies),
          (l.dependencies =
            a === null
              ? null
              : { lanes: a.lanes, firstContext: a.firstContext })),
      l
    );
  }
  function dn(l, a, t, u, n, f) {
    var c = 0;
    if (((u = l), typeof l == "function")) ee(l) && (c = 1);
    else if (typeof l == "string")
      c = qm(l, t, Ll.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case ac:
          return (l = El(31, t, a, n)), (l.elementType = ac), (l.lanes = f), l;
        case yt:
          return Ja(t.children, n, f, a);
        case M0:
          (c = 8), (n |= 24);
          break;
        case Pf:
          return (
            (l = El(12, t, a, n | 2)), (l.elementType = Pf), (l.lanes = f), l
          );
        case rf:
          return (l = El(13, t, a, n)), (l.elementType = rf), (l.lanes = f), l;
        case lc:
          return (l = El(19, t, a, n)), (l.elementType = lc), (l.lanes = f), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case la:
                c = 10;
                break l;
              case O0:
                c = 9;
                break l;
              case wc:
                c = 11;
                break l;
              case Fc:
                c = 14;
                break l;
              case da:
                (c = 16), (u = null);
                break l;
            }
          (c = 29),
            (t = Error(A(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (a = El(c, t, a, n)), (a.elementType = l), (a.type = u), (a.lanes = f), a
    );
  }
  function Ja(l, a, t, u) {
    return (l = El(7, l, u, a)), (l.lanes = t), l;
  }
  function Yf(l, a, t) {
    return (l = El(6, l, null, a)), (l.lanes = t), l;
  }
  function u1(l) {
    var a = El(18, null, null, 0);
    return (a.stateNode = l), a;
  }
  function sf(l, a, t) {
    return (
      (a = El(4, l.children !== null ? l.children : [], l.key, a)),
      (a.lanes = t),
      (a.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      a
    );
  }
  var di = new WeakMap();
  function Xl(l, a) {
    if (typeof l == "object" && l !== null) {
      var t = di.get(l);
      return t !== void 0
        ? t
        : ((a = { value: l, source: a, stack: Fe(a) }), di.set(l, a), a);
    }
    return { value: l, source: a, stack: Fe(a) };
  }
  var Tt = [],
    Et = 0,
    sn = null,
    Ou = 0,
    Yl = [],
    sl = 0,
    Xa = null,
    xl = 1,
    pl = "";
  function Pl(l, a) {
    (Tt[Et++] = Ou), (Tt[Et++] = sn), (sn = l), (Ou = a);
  }
  function n1(l, a, t) {
    (Yl[sl++] = xl), (Yl[sl++] = pl), (Yl[sl++] = Xa), (Xa = l);
    var u = xl;
    l = pl;
    var n = 32 - Ul(u) - 1;
    (u &= ~(1 << n)), (t += 1);
    var f = 32 - Ul(a) + n;
    if (30 < f) {
      var c = n - (n % 5);
      (f = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (n -= c),
        (xl = (1 << (32 - Ul(a) + n)) | (t << n) | u),
        (pl = f + l);
    } else (xl = (1 << f) | (t << n) | u), (pl = l);
  }
  function ie(l) {
    l.return !== null && (Pl(l, 1), n1(l, 1, 0));
  }
  function ve(l) {
    for (; l === sn; )
      (sn = Tt[--Et]), (Tt[Et] = null), (Ou = Tt[--Et]), (Tt[Et] = null);
    for (; l === Xa; )
      (Xa = Yl[--sl]),
        (Yl[sl] = null),
        (pl = Yl[--sl]),
        (Yl[sl] = null),
        (xl = Yl[--sl]),
        (Yl[sl] = null);
  }
  function f1(l, a) {
    (Yl[sl++] = xl),
      (Yl[sl++] = pl),
      (Yl[sl++] = Xa),
      (xl = a.id),
      (pl = a.overflow),
      (Xa = l);
  }
  var el = null,
    K = null,
    Y = !1,
    Ha = null,
    Gl = !1,
    gc = Error(A(519));
  function Ga(l) {
    var a = Error(
      A(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Du(Xl(a, l)), gc);
  }
  function Si(l) {
    var a = l.stateNode,
      t = l.type,
      u = l.memoizedProps;
    switch (((a[cl] = l), (a[zl] = u), t)) {
      case "dialog":
        N("cancel", a), N("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        N("load", a);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Bu.length; t++) N(Bu[t], a);
        break;
      case "source":
        N("error", a);
        break;
      case "img":
      case "image":
      case "link":
        N("error", a), N("load", a);
        break;
      case "details":
        N("toggle", a);
        break;
      case "input":
        N("invalid", a),
          Q0(
            a,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          );
        break;
      case "select":
        N("invalid", a);
        break;
      case "textarea":
        N("invalid", a), C0(a, u.value, u.defaultValue, u.children);
    }
    (t = u.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      a.textContent === "" + t ||
      u.suppressHydrationWarning === !0 ||
      xv(a.textContent, t)
        ? (u.popover != null && (N("beforetoggle", a), N("toggle", a)),
          u.onScroll != null && N("scroll", a),
          u.onScrollEnd != null && N("scrollend", a),
          u.onClick != null && (a.onclick = aa),
          (a = !0))
        : (a = !1),
      a || Ga(l, !0);
  }
  function gi(l) {
    for (el = l.return; el; )
      switch (el.tag) {
        case 5:
        case 31:
        case 13:
          Gl = !1;
          return;
        case 27:
        case 3:
          Gl = !0;
          return;
        default:
          el = el.return;
      }
  }
  function ct(l) {
    if (l !== el) return !1;
    if (!Y) return gi(l), (Y = !0), !1;
    var a = l.tag,
      t;
    if (
      ((t = a !== 3 && a !== 27) &&
        ((t = a === 5) &&
          ((t = l.type),
          (t =
            !(t !== "form" && t !== "button") || Vc(l.type, l.memoizedProps))),
        (t = !t)),
      t && K && Ga(l),
      gi(l),
      a === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(A(317));
      K = u0(l);
    } else if (a === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(A(317));
      K = u0(l);
    } else
      a === 27
        ? ((a = K), Ra(l.type) ? ((l = Lc), (Lc = null), (K = l)) : (K = a))
        : (K = el ? Zl(l.stateNode.nextSibling) : null);
    return !0;
  }
  function $a() {
    (K = el = null), (Y = !1);
  }
  function of() {
    var l = Ha;
    return (
      l !== null &&
        (Sl === null ? (Sl = l) : Sl.push.apply(Sl, l), (Ha = null)),
      l
    );
  }
  function Du(l) {
    Ha === null ? (Ha = [l]) : Ha.push(l);
  }
  var zc = Jl(null),
    nt = null,
    ta = null;
  function ga(l, a, t) {
    x(zc, a._currentValue), (a._currentValue = t);
  }
  function na(l) {
    (l._currentValue = zc.current), nl(zc);
  }
  function bc(l, a, t) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & a) !== a
          ? ((l.childLanes |= a), u !== null && (u.childLanes |= a))
          : u !== null && (u.childLanes & a) !== a && (u.childLanes |= a),
        l === t)
      )
        break;
      l = l.return;
    }
  }
  function Ac(l, a, t, u) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var f = n.dependencies;
      if (f !== null) {
        var c = n.child;
        f = f.firstContext;
        l: for (; f !== null; ) {
          var e = f;
          f = n;
          for (var i = 0; i < a.length; i++)
            if (e.context === a[i]) {
              (f.lanes |= t),
                (e = f.alternate),
                e !== null && (e.lanes |= t),
                bc(f.return, t, l),
                u || (c = null);
              break l;
            }
          f = e.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(A(341));
        (c.lanes |= t),
          (f = c.alternate),
          f !== null && (f.lanes |= t),
          bc(c, t, l),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function pt(l, a, t, u) {
    l = null;
    for (var n = a, f = !1; n !== null; ) {
      if (!f) {
        if ((n.flags & 524288) !== 0) f = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(A(387));
        if (((c = c.memoizedProps), c !== null)) {
          var e = n.type;
          Nl(n.pendingProps.value, c.value) ||
            (l !== null ? l.push(e) : (l = [e]));
        }
      } else if (n === Un.current) {
        if (((c = n.alternate), c === null)) throw Error(A(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(_u) : (l = [_u]));
      }
      n = n.return;
    }
    l !== null && Ac(a, l, t, u), (a.flags |= 262144);
  }
  function on(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Nl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function ka(l) {
    (nt = l),
      (ta = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function il(l) {
    return c1(nt, l);
  }
  function Pu(l, a) {
    return nt === null && ka(l), c1(l, a);
  }
  function c1(l, a) {
    var t = a._currentValue;
    if (((a = { context: a, memoizedValue: t, next: null }), ta === null)) {
      if (l === null) throw Error(A(308));
      (ta = a),
        (l.dependencies = { lanes: 0, firstContext: a }),
        (l.flags |= 524288);
    } else ta = ta.next = a;
    return t;
  }
  var Nh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (t, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (a.aborted = !0),
                l.forEach(function (t) {
                  return t();
                });
            };
          },
    Bh = al.unstable_scheduleCallback,
    qh = al.unstable_NormalPriority,
    P = {
      $$typeof: la,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ye() {
    return { controller: new Nh(), data: new Map(), refCount: 0 };
  }
  function Ru(l) {
    l.refCount--,
      l.refCount === 0 &&
        Bh(qh, function () {
          l.controller.abort();
        });
  }
  var iu = null,
    Tc = 0,
    ot = 0,
    Ht = null;
  function _h(l, a) {
    if (iu === null) {
      var t = (iu = []);
      (Tc = 0),
        (ot = Qe()),
        (Ht = {
          status: "pending",
          value: void 0,
          then: function (u) {
            t.push(u);
          },
        });
    }
    return Tc++, a.then(zi, zi), a;
  }
  function zi() {
    if (--Tc === 0 && iu !== null) {
      Ht !== null && (Ht.status = "fulfilled");
      var l = iu;
      (iu = null), (ot = 0), (Ht = null);
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function Yh(l, a) {
    var t = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          t.push(n);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = a);
          for (var n = 0; n < t.length; n++) (0, t[n])(a);
        },
        function (n) {
          for (u.status = "rejected", u.reason = n, n = 0; n < t.length; n++)
            (0, t[n])(void 0);
        }
      ),
      u
    );
  }
  var bi = D.S;
  D.S = function (l, a) {
    (Ev = Ol()),
      typeof a == "object" &&
        a !== null &&
        typeof a.then == "function" &&
        _h(l, a),
      bi !== null && bi(l, a);
  };
  var Wa = Jl(null);
  function he() {
    var l = Wa.current;
    return l !== null ? l : V.pooledCache;
  }
  function Sn(l, a) {
    a === null ? x(Wa, Wa.current) : x(Wa, a.pool);
  }
  function e1() {
    var l = he();
    return l === null ? null : { parent: P._currentValue, pool: l };
  }
  var Kt = Error(A(460)),
    me = Error(A(474)),
    ff = Error(A(542)),
    Xn = { then: function () {} };
  function Ai(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function i1(l, a, t) {
    switch (
      ((t = l[t]),
      t === void 0 ? l.push(a) : t !== a && (a.then(aa, aa), (a = t)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw ((l = a.reason), Ei(l), l);
      default:
        if (typeof a.status == "string") a.then(aa, aa);
        else {
          if (((l = V), l !== null && 100 < l.shellSuspendCounter))
            throw Error(A(482));
          (l = a),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (a.status === "pending") {
                  var n = a;
                  (n.status = "fulfilled"), (n.value = u);
                }
              },
              function (u) {
                if (a.status === "pending") {
                  var n = a;
                  (n.status = "rejected"), (n.reason = u);
                }
              }
            );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw ((l = a.reason), Ei(l), l);
        }
        throw ((wa = a), Kt);
    }
  }
  function pa(l) {
    try {
      var a = l._init;
      return a(l._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function"
        ? ((wa = t), Kt)
        : t;
    }
  }
  var wa = null;
  function Ti() {
    if (wa === null) throw Error(A(459));
    var l = wa;
    return (wa = null), l;
  }
  function Ei(l) {
    if (l === Kt || l === ff) throw Error(A(483));
  }
  var Nt = null,
    Uu = 0;
  function ru(l) {
    var a = Uu;
    return (Uu += 1), Nt === null && (Nt = []), i1(Nt, l, a);
  }
  function $t(l, a) {
    (a = a.props.ref), (l.ref = a !== void 0 ? a : null);
  }
  function ln(l, a) {
    throw a.$$typeof === zy
      ? Error(A(525))
      : ((l = Object.prototype.toString.call(a)),
        Error(
          A(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : l
          )
        ));
  }
  function v1(l) {
    function a(y, v) {
      if (l) {
        var h = y.deletions;
        h === null ? ((y.deletions = [v]), (y.flags |= 16)) : h.push(v);
      }
    }
    function t(y, v) {
      if (!l) return null;
      for (; v !== null; ) a(y, v), (v = v.sibling);
      return null;
    }
    function u(y) {
      for (var v = new Map(); y !== null; )
        y.key !== null ? v.set(y.key, y) : v.set(y.index, y), (y = y.sibling);
      return v;
    }
    function n(y, v) {
      return (y = ua(y, v)), (y.index = 0), (y.sibling = null), y;
    }
    function f(y, v, h) {
      return (
        (y.index = h),
        l
          ? ((h = y.alternate),
            h !== null
              ? ((h = h.index), h < v ? ((y.flags |= 67108866), v) : h)
              : ((y.flags |= 67108866), v))
          : ((y.flags |= 1048576), v)
      );
    }
    function c(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function e(y, v, h, z) {
      return v === null || v.tag !== 6
        ? ((v = Yf(h, y.mode, z)), (v.return = y), v)
        : ((v = n(v, h)), (v.return = y), v);
    }
    function i(y, v, h, z) {
      var M = h.type;
      return M === yt
        ? g(y, v, h.props.children, z, h.key)
        : v !== null &&
          (v.elementType === M ||
            (typeof M == "object" &&
              M !== null &&
              M.$$typeof === da &&
              pa(M) === v.type))
        ? ((v = n(v, h.props)), $t(v, h), (v.return = y), v)
        : ((v = dn(h.type, h.key, h.props, null, y.mode, z)),
          $t(v, h),
          (v.return = y),
          v);
    }
    function m(y, v, h, z) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== h.containerInfo ||
        v.stateNode.implementation !== h.implementation
        ? ((v = sf(h, y.mode, z)), (v.return = y), v)
        : ((v = n(v, h.children || [])), (v.return = y), v);
    }
    function g(y, v, h, z, M) {
      return v === null || v.tag !== 7
        ? ((v = Ja(h, y.mode, z, M)), (v.return = y), v)
        : ((v = n(v, h)), (v.return = y), v);
    }
    function b(y, v, h) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return (v = Yf("" + v, y.mode, h)), (v.return = y), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Lu:
            return (
              (h = dn(v.type, v.key, v.props, null, y.mode, h)),
              $t(h, v),
              (h.return = y),
              h
            );
          case lu:
            return (v = sf(v, y.mode, h)), (v.return = y), v;
          case da:
            return (v = pa(v)), b(y, v, h);
        }
        if (au(v) || wt(v))
          return (v = Ja(v, y.mode, h, null)), (v.return = y), v;
        if (typeof v.then == "function") return b(y, ru(v), h);
        if (v.$$typeof === la) return b(y, Pu(y, v), h);
        ln(y, v);
      }
      return null;
    }
    function d(y, v, h, z) {
      var M = v !== null ? v.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return M !== null ? null : e(y, v, "" + h, z);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Lu:
            return h.key === M ? i(y, v, h, z) : null;
          case lu:
            return h.key === M ? m(y, v, h, z) : null;
          case da:
            return (h = pa(h)), d(y, v, h, z);
        }
        if (au(h) || wt(h)) return M !== null ? null : g(y, v, h, z, null);
        if (typeof h.then == "function") return d(y, v, ru(h), z);
        if (h.$$typeof === la) return d(y, v, Pu(y, h), z);
        ln(y, h);
      }
      return null;
    }
    function S(y, v, h, z, M) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (y = y.get(h) || null), e(v, y, "" + z, M);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Lu:
            return (
              (y = y.get(z.key === null ? h : z.key) || null), i(v, y, z, M)
            );
          case lu:
            return (
              (y = y.get(z.key === null ? h : z.key) || null), m(v, y, z, M)
            );
          case da:
            return (z = pa(z)), S(y, v, h, z, M);
        }
        if (au(z) || wt(z)) return (y = y.get(h) || null), g(v, y, z, M, null);
        if (typeof z.then == "function") return S(y, v, h, ru(z), M);
        if (z.$$typeof === la) return S(y, v, h, Pu(v, z), M);
        ln(v, z);
      }
      return null;
    }
    function T(y, v, h, z) {
      for (
        var M = null, s = null, E = v, H = (v = 0), q = null;
        E !== null && H < h.length;
        H++
      ) {
        E.index > H ? ((q = E), (E = null)) : (q = E.sibling);
        var o = d(y, E, h[H], z);
        if (o === null) {
          E === null && (E = q);
          break;
        }
        l && E && o.alternate === null && a(y, E),
          (v = f(o, v, H)),
          s === null ? (M = o) : (s.sibling = o),
          (s = o),
          (E = q);
      }
      if (H === h.length) return t(y, E), Y && Pl(y, H), M;
      if (E === null) {
        for (; H < h.length; H++)
          (E = b(y, h[H], z)),
            E !== null &&
              ((v = f(E, v, H)),
              s === null ? (M = E) : (s.sibling = E),
              (s = E));
        return Y && Pl(y, H), M;
      }
      for (E = u(E); H < h.length; H++)
        (q = S(E, y, H, h[H], z)),
          q !== null &&
            (l && q.alternate !== null && E.delete(q.key === null ? H : q.key),
            (v = f(q, v, H)),
            s === null ? (M = q) : (s.sibling = q),
            (s = q));
      return (
        l &&
          E.forEach(function (ma) {
            return a(y, ma);
          }),
        Y && Pl(y, H),
        M
      );
    }
    function O(y, v, h, z) {
      if (h == null) throw Error(A(151));
      for (
        var M = null, s = null, E = v, H = (v = 0), q = null, o = h.next();
        E !== null && !o.done;
        H++, o = h.next()
      ) {
        E.index > H ? ((q = E), (E = null)) : (q = E.sibling);
        var ma = d(y, E, o.value, z);
        if (ma === null) {
          E === null && (E = q);
          break;
        }
        l && E && ma.alternate === null && a(y, E),
          (v = f(ma, v, H)),
          s === null ? (M = ma) : (s.sibling = ma),
          (s = ma),
          (E = q);
      }
      if (o.done) return t(y, E), Y && Pl(y, H), M;
      if (E === null) {
        for (; !o.done; H++, o = h.next())
          (o = b(y, o.value, z)),
            o !== null &&
              ((v = f(o, v, H)),
              s === null ? (M = o) : (s.sibling = o),
              (s = o));
        return Y && Pl(y, H), M;
      }
      for (E = u(E); !o.done; H++, o = h.next())
        (o = S(E, y, H, o.value, z)),
          o !== null &&
            (l && o.alternate !== null && E.delete(o.key === null ? H : o.key),
            (v = f(o, v, H)),
            s === null ? (M = o) : (s.sibling = o),
            (s = o));
      return (
        l &&
          E.forEach(function (cy) {
            return a(y, cy);
          }),
        Y && Pl(y, H),
        M
      );
    }
    function C(y, v, h, z) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === yt &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case Lu:
            l: {
              for (var M = h.key; v !== null; ) {
                if (v.key === M) {
                  if (((M = h.type), M === yt)) {
                    if (v.tag === 7) {
                      t(y, v.sibling),
                        (z = n(v, h.props.children)),
                        (z.return = y),
                        (y = z);
                      break l;
                    }
                  } else if (
                    v.elementType === M ||
                    (typeof M == "object" &&
                      M !== null &&
                      M.$$typeof === da &&
                      pa(M) === v.type)
                  ) {
                    t(y, v.sibling),
                      (z = n(v, h.props)),
                      $t(z, h),
                      (z.return = y),
                      (y = z);
                    break l;
                  }
                  t(y, v);
                  break;
                } else a(y, v);
                v = v.sibling;
              }
              h.type === yt
                ? ((z = Ja(h.props.children, y.mode, z, h.key)),
                  (z.return = y),
                  (y = z))
                : ((z = dn(h.type, h.key, h.props, null, y.mode, z)),
                  $t(z, h),
                  (z.return = y),
                  (y = z));
            }
            return c(y);
          case lu:
            l: {
              for (M = h.key; v !== null; ) {
                if (v.key === M)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === h.containerInfo &&
                    v.stateNode.implementation === h.implementation
                  ) {
                    t(y, v.sibling),
                      (z = n(v, h.children || [])),
                      (z.return = y),
                      (y = z);
                    break l;
                  } else {
                    t(y, v);
                    break;
                  }
                else a(y, v);
                v = v.sibling;
              }
              (z = sf(h, y.mode, z)), (z.return = y), (y = z);
            }
            return c(y);
          case da:
            return (h = pa(h)), C(y, v, h, z);
        }
        if (au(h)) return T(y, v, h, z);
        if (wt(h)) {
          if (((M = wt(h)), typeof M != "function")) throw Error(A(150));
          return (h = M.call(h)), O(y, v, h, z);
        }
        if (typeof h.then == "function") return C(y, v, ru(h), z);
        if (h.$$typeof === la) return C(y, v, Pu(y, h), z);
        ln(y, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          v !== null && v.tag === 6
            ? (t(y, v.sibling), (z = n(v, h)), (z.return = y), (y = z))
            : (t(y, v), (z = Yf(h, y.mode, z)), (z.return = y), (y = z)),
          c(y))
        : t(y, v);
    }
    return function (y, v, h, z) {
      try {
        Uu = 0;
        var M = C(y, v, h, z);
        return (Nt = null), M;
      } catch (E) {
        if (E === Kt || E === ff) throw E;
        var s = El(29, E, null, y.mode);
        return (s.lanes = z), (s.return = y), s;
      } finally {
      }
    };
  }
  var Ia = v1(!0),
    y1 = v1(!1),
    Sa = !1;
  function de(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ec(l, a) {
    (l = l.updateQueue),
      a.updateQueue === l &&
        (a.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function Na(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ba(l, a, t) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (X & 2) !== 0)) {
      var n = u.pending;
      return (
        n === null ? (a.next = a) : ((a.next = n.next), (n.next = a)),
        (u.pending = a),
        (a = Yn(l)),
        a1(l, null, t),
        a
      );
    }
    return nf(l, u, a, t), Yn(l);
  }
  function vu(l, a, t) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (t & 4194048) !== 0))
    ) {
      var u = a.lanes;
      (u &= l.pendingLanes), (t |= u), (a.lanes = t), q0(l, t);
    }
  }
  function Xf(l, a) {
    var t = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), t === u)) {
      var n = null,
        f = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var c = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          f === null ? (n = f = c) : (f = f.next = c), (t = t.next);
        } while (t !== null);
        f === null ? (n = f = a) : (f = f.next = a);
      } else n = f = a;
      (t = {
        baseState: u.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: f,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = t);
      return;
    }
    (l = t.lastBaseUpdate),
      l === null ? (t.firstBaseUpdate = a) : (l.next = a),
      (t.lastBaseUpdate = a);
  }
  var Mc = !1;
  function yu() {
    if (Mc) {
      var l = Ht;
      if (l !== null) throw l;
    }
  }
  function hu(l, a, t, u) {
    Mc = !1;
    var n = l.updateQueue;
    Sa = !1;
    var f = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      e = n.shared.pending;
    if (e !== null) {
      n.shared.pending = null;
      var i = e,
        m = i.next;
      (i.next = null), c === null ? (f = m) : (c.next = m), (c = i);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (e = g.lastBaseUpdate),
        e !== c &&
          (e === null ? (g.firstBaseUpdate = m) : (e.next = m),
          (g.lastBaseUpdate = i)));
    }
    if (f !== null) {
      var b = n.baseState;
      (c = 0), (g = m = i = null), (e = f);
      do {
        var d = e.lane & -536870913,
          S = d !== e.lane;
        if (S ? (_ & d) === d : (u & d) === d) {
          d !== 0 && d === ot && (Mc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: e.tag,
                  payload: e.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var T = l,
              O = e;
            d = a;
            var C = t;
            switch (O.tag) {
              case 1:
                if (((T = O.payload), typeof T == "function")) {
                  b = T.call(C, b, d);
                  break l;
                }
                b = T;
                break l;
              case 3:
                T.flags = (T.flags & -65537) | 128;
              case 0:
                if (
                  ((T = O.payload),
                  (d = typeof T == "function" ? T.call(C, b, d) : T),
                  d == null)
                )
                  break l;
                b = L({}, b, d);
                break l;
              case 2:
                Sa = !0;
            }
          }
          (d = e.callback),
            d !== null &&
              ((l.flags |= 64),
              S && (l.flags |= 8192),
              (S = n.callbacks),
              S === null ? (n.callbacks = [d]) : S.push(d));
        } else
          (S = {
            lane: d,
            tag: e.tag,
            payload: e.payload,
            callback: e.callback,
            next: null,
          }),
            g === null ? ((m = g = S), (i = b)) : (g = g.next = S),
            (c |= d);
        if (((e = e.next), e === null)) {
          if (((e = n.shared.pending), e === null)) break;
          (S = e),
            (e = S.next),
            (S.next = null),
            (n.lastBaseUpdate = S),
            (n.shared.pending = null);
        }
      } while (!0);
      g === null && (i = b),
        (n.baseState = i),
        (n.firstBaseUpdate = m),
        (n.lastBaseUpdate = g),
        f === null && (n.shared.lanes = 0),
        (Za |= c),
        (l.lanes = c),
        (l.memoizedState = b);
    }
  }
  function h1(l, a) {
    if (typeof l != "function") throw Error(A(191, l));
    l.call(a);
  }
  function m1(l, a) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++) h1(t[l], a);
  }
  var Xt = Jl(null),
    Gn = Jl(0);
  function Mi(l, a) {
    (l = ya), x(Gn, l), x(Xt, a), (ya = l | a.baseLanes);
  }
  function Oc() {
    x(Gn, ya), x(Xt, Xt.current);
  }
  function Se() {
    (ya = Gn.current), nl(Xt), nl(Gn);
  }
  var Bl = Jl(null),
    Ql = null;
  function za(l) {
    var a = l.alternate;
    x(F, F.current & 1),
      x(Bl, l),
      Ql === null &&
        (a === null || Xt.current !== null || a.memoizedState !== null) &&
        (Ql = l);
  }
  function Dc(l) {
    x(F, F.current), x(Bl, l), Ql === null && (Ql = l);
  }
  function d1(l) {
    l.tag === 22 ? (x(F, F.current), x(Bl, l), Ql === null && (Ql = l)) : ba(l);
  }
  function ba() {
    x(F, F.current), x(Bl, Bl.current);
  }
  function Tl(l) {
    nl(Bl), Ql === l && (Ql = null), nl(F);
  }
  var F = Jl(0);
  function Qn(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var t = a.memoizedState;
        if (t !== null && ((t = t.dehydrated), t === null || pc(t) || Kc(t)))
          return a;
      } else if (
        a.tag === 19 &&
        (a.memoizedProps.revealOrder === "forwards" ||
          a.memoizedProps.revealOrder === "backwards" ||
          a.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          a.memoizedProps.revealOrder === "together")
      ) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        (a.child.return = a), (a = a.child);
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
    return null;
  }
  var ea = 0,
    U = null,
    j = null,
    k = null,
    Zn = !1,
    Bt = !1,
    Pa = !1,
    Cn = 0,
    Hu = 0,
    qt = null,
    sh = 0;
  function W() {
    throw Error(A(321));
  }
  function ge(l, a) {
    if (a === null) return !1;
    for (var t = 0; t < a.length && t < l.length; t++)
      if (!Nl(l[t], a[t])) return !1;
    return !0;
  }
  function ze(l, a, t, u, n, f) {
    return (
      (ea = f),
      (U = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (D.H = l === null || l.memoizedState === null ? L1 : Be),
      (Pa = !1),
      (f = t(u, n)),
      (Pa = !1),
      Bt && (f = g1(a, t, u, n)),
      S1(l),
      f
    );
  }
  function S1(l) {
    D.H = Nu;
    var a = j !== null && j.next !== null;
    if (((ea = 0), (k = j = U = null), (Zn = !1), (Hu = 0), (qt = null), a))
      throw Error(A(300));
    l === null || r || ((l = l.dependencies), l !== null && on(l) && (r = !0));
  }
  function g1(l, a, t, u) {
    U = l;
    var n = 0;
    do {
      if ((Bt && (qt = null), (Hu = 0), (Bt = !1), 25 <= n))
        throw Error(A(301));
      if (((n += 1), (k = j = null), l.updateQueue != null)) {
        var f = l.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (D.H = J1), (f = a(t, u));
    } while (Bt);
    return f;
  }
  function oh() {
    var l = D.H,
      a = l.useState()[0];
    return (
      (a = typeof a.then == "function" ? ju(a) : a),
      (l = l.useState()[0]),
      (j !== null ? j.memoizedState : null) !== l && (U.flags |= 1024),
      a
    );
  }
  function be() {
    var l = Cn !== 0;
    return (Cn = 0), l;
  }
  function Ae(l, a, t) {
    (a.updateQueue = l.updateQueue), (a.flags &= -2053), (l.lanes &= ~t);
  }
  function Te(l) {
    if (Zn) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), (l = l.next);
      }
      Zn = !1;
    }
    (ea = 0), (k = j = U = null), (Bt = !1), (Hu = Cn = 0), (qt = null);
  }
  function yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return k === null ? (U.memoizedState = k = l) : (k = k.next = l), k;
  }
  function $() {
    if (j === null) {
      var l = U.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = j.next;
    var a = k === null ? U.memoizedState : k.next;
    if (a !== null) (k = a), (j = l);
    else {
      if (l === null)
        throw U.alternate === null ? Error(A(467)) : Error(A(310));
      (j = l),
        (l = {
          memoizedState: j.memoizedState,
          baseState: j.baseState,
          baseQueue: j.baseQueue,
          queue: j.queue,
          next: null,
        }),
        k === null ? (U.memoizedState = k = l) : (k = k.next = l);
    }
    return k;
  }
  function cf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ju(l) {
    var a = Hu;
    return (
      (Hu += 1),
      qt === null && (qt = []),
      (l = i1(qt, l, a)),
      (a = U),
      (k === null ? a.memoizedState : k.next) === null &&
        ((a = a.alternate),
        (D.H = a === null || a.memoizedState === null ? L1 : Be)),
      l
    );
  }
  function ef(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ju(l);
      if (l.$$typeof === la) return il(l);
    }
    throw Error(A(438, String(l)));
  }
  function Ee(l) {
    var a = null,
      t = U.updateQueue;
    if ((t !== null && (a = t.memoCache), a == null)) {
      var u = U.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (a = {
              data: u.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null && (a = { data: [], index: 0 }),
      t === null && ((t = cf()), (U.updateQueue = t)),
      (t.memoCache = a),
      (t = a.data[a.index]),
      t === void 0)
    )
      for (t = a.data[a.index] = Array(l), u = 0; u < l; u++) t[u] = by;
    return a.index++, t;
  }
  function ia(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function gn(l) {
    var a = $();
    return Me(a, j, l);
  }
  function Me(l, a, t) {
    var u = l.queue;
    if (u === null) throw Error(A(311));
    u.lastRenderedReducer = t;
    var n = l.baseQueue,
      f = u.pending;
    if (f !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = f.next), (f.next = c);
      }
      (a.baseQueue = n = f), (u.pending = null);
    }
    if (((f = l.baseState), n === null)) l.memoizedState = f;
    else {
      a = n.next;
      var e = (c = null),
        i = null,
        m = a,
        g = !1;
      do {
        var b = m.lane & -536870913;
        if (b !== m.lane ? (_ & b) === b : (ea & b) === b) {
          var d = m.revertLane;
          if (d === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              b === ot && (g = !0);
          else if ((ea & d) === d) {
            (m = m.next), d === ot && (g = !0);
            continue;
          } else
            (b = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              i === null ? ((e = i = b), (c = f)) : (i = i.next = b),
              (U.lanes |= d),
              (Za |= d);
          (b = m.action),
            Pa && t(f, b),
            (f = m.hasEagerState ? m.eagerState : t(f, b));
        } else
          (d = {
            lane: b,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            i === null ? ((e = i = d), (c = f)) : (i = i.next = d),
            (U.lanes |= b),
            (Za |= b);
        m = m.next;
      } while (m !== null && m !== a);
      if (
        (i === null ? (c = f) : (i.next = e),
        !Nl(f, l.memoizedState) && ((r = !0), g && ((t = Ht), t !== null)))
      )
        throw t;
      (l.memoizedState = f),
        (l.baseState = c),
        (l.baseQueue = i),
        (u.lastRenderedState = f);
    }
    return n === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Gf(l) {
    var a = $(),
      t = a.queue;
    if (t === null) throw Error(A(311));
    t.lastRenderedReducer = l;
    var u = t.dispatch,
      n = t.pending,
      f = a.memoizedState;
    if (n !== null) {
      t.pending = null;
      var c = (n = n.next);
      do (f = l(f, c.action)), (c = c.next);
      while (c !== n);
      Nl(f, a.memoizedState) || (r = !0),
        (a.memoizedState = f),
        a.baseQueue === null && (a.baseState = f),
        (t.lastRenderedState = f);
    }
    return [f, u];
  }
  function z1(l, a, t) {
    var u = U,
      n = $(),
      f = Y;
    if (f) {
      if (t === void 0) throw Error(A(407));
      t = t();
    } else t = a();
    var c = !Nl((j || n).memoizedState, t);
    if (
      (c && ((n.memoizedState = t), (r = !0)),
      (n = n.queue),
      Oe(T1.bind(null, u, n, l), [l]),
      n.getSnapshot !== a || c || (k !== null && k.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Gt(9, { destroy: void 0 }, A1.bind(null, u, n, t, a), null),
        V === null)
      )
        throw Error(A(349));
      f || (ea & 127) !== 0 || b1(u, a, t);
    }
    return t;
  }
  function b1(l, a, t) {
    (l.flags |= 16384),
      (l = { getSnapshot: a, value: t }),
      (a = U.updateQueue),
      a === null
        ? ((a = cf()), (U.updateQueue = a), (a.stores = [l]))
        : ((t = a.stores), t === null ? (a.stores = [l]) : t.push(l));
  }
  function A1(l, a, t, u) {
    (a.value = t), (a.getSnapshot = u), E1(a) && M1(l);
  }
  function T1(l, a, t) {
    return t(function () {
      E1(a) && M1(l);
    });
  }
  function E1(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var t = a();
      return !Nl(l, t);
    } catch {
      return !0;
    }
  }
  function M1(l) {
    var a = ut(l, 2);
    a !== null && gl(a, l, 2);
  }
  function Uc(l) {
    var a = yl();
    if (typeof l == "function") {
      var t = l;
      if (((l = t()), Pa)) {
        Ta(!0);
        try {
          t();
        } finally {
          Ta(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = l),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ia,
        lastRenderedState: l,
      }),
      a
    );
  }
  function O1(l, a, t, u) {
    return (l.baseState = t), Me(l, j, typeof u == "function" ? u : ia);
  }
  function Xh(l, a, t, u, n) {
    if (yf(l)) throw Error(A(485));
    if (((l = a.action), l !== null)) {
      var f = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          f.listeners.push(c);
        },
      };
      D.T !== null ? t(!0) : (f.isTransition = !1),
        u(f),
        (t = a.pending),
        t === null
          ? ((f.next = a.pending = f), D1(a, f))
          : ((f.next = t.next), (a.pending = t.next = f));
    }
  }
  function D1(l, a) {
    var t = a.action,
      u = a.payload,
      n = l.state;
    if (a.isTransition) {
      var f = D.T,
        c = {};
      D.T = c;
      try {
        var e = t(n, u),
          i = D.S;
        i !== null && i(c, e), Oi(l, a, e);
      } catch (m) {
        Hc(l, a, m);
      } finally {
        f !== null && c.types !== null && (f.types = c.types), (D.T = f);
      }
    } else
      try {
        (f = t(n, u)), Oi(l, a, f);
      } catch (m) {
        Hc(l, a, m);
      }
  }
  function Oi(l, a, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (u) {
            Di(l, a, u);
          },
          function (u) {
            return Hc(l, a, u);
          }
        )
      : Di(l, a, t);
  }
  function Di(l, a, t) {
    (a.status = "fulfilled"),
      (a.value = t),
      U1(a),
      (l.state = t),
      (a = l.pending),
      a !== null &&
        ((t = a.next),
        t === a ? (l.pending = null) : ((t = t.next), (a.next = t), D1(l, t)));
  }
  function Hc(l, a, t) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (a.status = "rejected"), (a.reason = t), U1(a), (a = a.next);
      while (a !== u);
    }
    l.action = null;
  }
  function U1(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function H1(l, a) {
    return a;
  }
  function Ui(l, a) {
    if (Y) {
      var t = V.formState;
      if (t !== null) {
        l: {
          var u = U;
          if (Y) {
            if (K) {
              a: {
                for (var n = K, f = Gl; n.nodeType !== 8; ) {
                  if (!f) {
                    n = null;
                    break a;
                  }
                  if (((n = Zl(n.nextSibling)), n === null)) {
                    n = null;
                    break a;
                  }
                }
                (f = n.data), (n = f === "F!" || f === "F" ? n : null);
              }
              if (n) {
                (K = Zl(n.nextSibling)), (u = n.data === "F!");
                break l;
              }
            }
            Ga(u);
          }
          u = !1;
        }
        u && (a = t[0]);
      }
    }
    return (
      (t = yl()),
      (t.memoizedState = t.baseState = a),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: H1,
        lastRenderedState: a,
      }),
      (t.queue = u),
      (t = x1.bind(null, U, u)),
      (u.dispatch = t),
      (u = Uc(!1)),
      (f = Ne.bind(null, U, !1, u.queue)),
      (u = yl()),
      (n = { state: a, dispatch: null, action: l, pending: null }),
      (u.queue = n),
      (t = Xh.bind(null, U, n, f, t)),
      (n.dispatch = t),
      (u.memoizedState = l),
      [a, t, !1]
    );
  }
  function Hi(l) {
    var a = $();
    return N1(a, j, l);
  }
  function N1(l, a, t) {
    if (
      ((a = Me(l, a, H1)[0]),
      (l = gn(ia)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var u = ju(a);
      } catch (c) {
        throw c === Kt ? ff : c;
      }
    else u = a;
    a = $();
    var n = a.queue,
      f = n.dispatch;
    return (
      t !== a.memoizedState &&
        ((U.flags |= 2048),
        Gt(9, { destroy: void 0 }, Gh.bind(null, n, t), null)),
      [u, f, l]
    );
  }
  function Gh(l, a) {
    l.action = a;
  }
  function Ni(l) {
    var a = $(),
      t = j;
    if (t !== null) return N1(a, t, l);
    $(), (a = a.memoizedState), (t = $());
    var u = t.queue.dispatch;
    return (t.memoizedState = l), [a, u, !1];
  }
  function Gt(l, a, t, u) {
    return (
      (l = { tag: l, create: t, deps: u, inst: a, next: null }),
      (a = U.updateQueue),
      a === null && ((a = cf()), (U.updateQueue = a)),
      (t = a.lastEffect),
      t === null
        ? (a.lastEffect = l.next = l)
        : ((u = t.next), (t.next = l), (l.next = u), (a.lastEffect = l)),
      l
    );
  }
  function B1() {
    return $().memoizedState;
  }
  function zn(l, a, t, u) {
    var n = yl();
    (U.flags |= l),
      (n.memoizedState = Gt(
        1 | a,
        { destroy: void 0 },
        t,
        u === void 0 ? null : u
      ));
  }
  function vf(l, a, t, u) {
    var n = $();
    u = u === void 0 ? null : u;
    var f = n.memoizedState.inst;
    j !== null && u !== null && ge(u, j.memoizedState.deps)
      ? (n.memoizedState = Gt(a, f, t, u))
      : ((U.flags |= l), (n.memoizedState = Gt(1 | a, f, t, u)));
  }
  function Bi(l, a) {
    zn(8390656, 8, l, a);
  }
  function Oe(l, a) {
    vf(2048, 8, l, a);
  }
  function Qh(l) {
    U.flags |= 4;
    var a = U.updateQueue;
    if (a === null) (a = cf()), (U.updateQueue = a), (a.events = [l]);
    else {
      var t = a.events;
      t === null ? (a.events = [l]) : t.push(l);
    }
  }
  function q1(l) {
    var a = $().memoizedState;
    return (
      Qh({ ref: a, nextImpl: l }),
      function () {
        if ((X & 2) !== 0) throw Error(A(440));
        return a.impl.apply(void 0, arguments);
      }
    );
  }
  function _1(l, a) {
    return vf(4, 2, l, a);
  }
  function Y1(l, a) {
    return vf(4, 4, l, a);
  }
  function s1(l, a) {
    if (typeof a == "function") {
      l = l();
      var t = a(l);
      return function () {
        typeof t == "function" ? t() : a(null);
      };
    }
    if (a != null)
      return (
        (l = l()),
        (a.current = l),
        function () {
          a.current = null;
        }
      );
  }
  function o1(l, a, t) {
    (t = t != null ? t.concat([l]) : null), vf(4, 4, s1.bind(null, a, l), t);
  }
  function De() {}
  function X1(l, a) {
    var t = $();
    a = a === void 0 ? null : a;
    var u = t.memoizedState;
    return a !== null && ge(a, u[1]) ? u[0] : ((t.memoizedState = [l, a]), l);
  }
  function G1(l, a) {
    var t = $();
    a = a === void 0 ? null : a;
    var u = t.memoizedState;
    if (a !== null && ge(a, u[1])) return u[0];
    if (((u = l()), Pa)) {
      Ta(!0);
      try {
        l();
      } finally {
        Ta(!1);
      }
    }
    return (t.memoizedState = [u, a]), u;
  }
  function Ue(l, a, t) {
    return t === void 0 || ((ea & 1073741824) !== 0 && (_ & 261930) === 0)
      ? (l.memoizedState = a)
      : ((l.memoizedState = t), (l = Ov()), (U.lanes |= l), (Za |= l), t);
  }
  function Q1(l, a, t, u) {
    return Nl(t, a)
      ? t
      : Xt.current !== null
      ? ((l = Ue(l, t, u)), Nl(l, a) || (r = !0), l)
      : (ea & 42) === 0 || ((ea & 1073741824) !== 0 && (_ & 261930) === 0)
      ? ((r = !0), (l.memoizedState = t))
      : ((l = Ov()), (U.lanes |= l), (Za |= l), a);
  }
  function Z1(l, a, t, u, n) {
    var f = G.p;
    G.p = f !== 0 && 8 > f ? f : 8;
    var c = D.T,
      e = {};
    (D.T = e), Ne(l, !1, a, t);
    try {
      var i = n(),
        m = D.S;
      if (
        (m !== null && m(e, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var g = Yh(i, u);
        mu(l, a, g, Hl(l));
      } else mu(l, a, u, Hl(l));
    } catch (b) {
      mu(l, a, { then: function () {}, status: "rejected", reason: b }, Hl());
    } finally {
      (G.p = f),
        c !== null && e.types !== null && (c.types = e.types),
        (D.T = c);
    }
  }
  function Zh() {}
  function Nc(l, a, t, u) {
    if (l.tag !== 5) throw Error(A(476));
    var n = C1(l).queue;
    Z1(
      l,
      n,
      a,
      La,
      t === null
        ? Zh
        : function () {
            return R1(l), t(u);
          }
    );
  }
  function C1(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: La,
      baseState: La,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ia,
        lastRenderedState: La,
      },
      next: null,
    };
    var t = {};
    return (
      (a.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ia,
          lastRenderedState: t,
        },
        next: null,
      }),
      (l.memoizedState = a),
      (l = l.alternate),
      l !== null && (l.memoizedState = a),
      a
    );
  }
  function R1(l) {
    var a = C1(l);
    a.next === null && (a = l.alternate.memoizedState),
      mu(l, a.next.queue, {}, Hl());
  }
  function He() {
    return il(_u);
  }
  function j1() {
    return $().memoizedState;
  }
  function V1() {
    return $().memoizedState;
  }
  function Ch(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var t = Hl();
          l = Na(t);
          var u = Ba(a, l, t);
          u !== null && (gl(u, a, t), vu(u, a, t)),
            (a = { cache: ye() }),
            (l.payload = a);
          return;
      }
      a = a.return;
    }
  }
  function Rh(l, a, t) {
    var u = Hl();
    (t = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      yf(l)
        ? p1(a, t)
        : ((t = ce(l, a, t, u)), t !== null && (gl(t, l, u), K1(t, a, u)));
  }
  function x1(l, a, t) {
    var u = Hl();
    mu(l, a, t, u);
  }
  function mu(l, a, t, u) {
    var n = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (yf(l)) p1(a, n);
    else {
      var f = l.alternate;
      if (
        l.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = a.lastRenderedReducer), f !== null)
      )
        try {
          var c = a.lastRenderedState,
            e = f(c, t);
          if (((n.hasEagerState = !0), (n.eagerState = e), Nl(e, c)))
            return nf(l, a, n, 0), V === null && uf(), !1;
        } catch {
        } finally {
        }
      if (((t = ce(l, a, n, u)), t !== null))
        return gl(t, l, u), K1(t, a, u), !0;
    }
    return !1;
  }
  function Ne(l, a, t, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Qe(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      yf(l))
    ) {
      if (a) throw Error(A(479));
    } else (a = ce(l, t, u, 2)), a !== null && gl(a, l, 2);
  }
  function yf(l) {
    var a = l.alternate;
    return l === U || (a !== null && a === U);
  }
  function p1(l, a) {
    Bt = Zn = !0;
    var t = l.pending;
    t === null ? (a.next = a) : ((a.next = t.next), (t.next = a)),
      (l.pending = a);
  }
  function K1(l, a, t) {
    if ((t & 4194048) !== 0) {
      var u = a.lanes;
      (u &= l.pendingLanes), (t |= u), (a.lanes = t), q0(l, t);
    }
  }
  var Nu = {
    readContext: il,
    use: ef,
    useCallback: W,
    useContext: W,
    useEffect: W,
    useImperativeHandle: W,
    useLayoutEffect: W,
    useInsertionEffect: W,
    useMemo: W,
    useReducer: W,
    useRef: W,
    useState: W,
    useDebugValue: W,
    useDeferredValue: W,
    useTransition: W,
    useSyncExternalStore: W,
    useId: W,
    useHostTransitionStatus: W,
    useFormState: W,
    useActionState: W,
    useOptimistic: W,
    useMemoCache: W,
    useCacheRefresh: W,
  };
  Nu.useEffectEvent = W;
  var L1 = {
      readContext: il,
      use: ef,
      useCallback: function (l, a) {
        return (yl().memoizedState = [l, a === void 0 ? null : a]), l;
      },
      useContext: il,
      useEffect: Bi,
      useImperativeHandle: function (l, a, t) {
        (t = t != null ? t.concat([l]) : null),
          zn(4194308, 4, s1.bind(null, a, l), t);
      },
      useLayoutEffect: function (l, a) {
        return zn(4194308, 4, l, a);
      },
      useInsertionEffect: function (l, a) {
        zn(4, 2, l, a);
      },
      useMemo: function (l, a) {
        var t = yl();
        a = a === void 0 ? null : a;
        var u = l();
        if (Pa) {
          Ta(!0);
          try {
            l();
          } finally {
            Ta(!1);
          }
        }
        return (t.memoizedState = [u, a]), u;
      },
      useReducer: function (l, a, t) {
        var u = yl();
        if (t !== void 0) {
          var n = t(a);
          if (Pa) {
            Ta(!0);
            try {
              t(a);
            } finally {
              Ta(!1);
            }
          }
        } else n = a;
        return (
          (u.memoizedState = u.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (u.queue = l),
          (l = l.dispatch = Rh.bind(null, U, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var a = yl();
        return (l = { current: l }), (a.memoizedState = l);
      },
      useState: function (l) {
        l = Uc(l);
        var a = l.queue,
          t = x1.bind(null, U, a);
        return (a.dispatch = t), [l.memoizedState, t];
      },
      useDebugValue: De,
      useDeferredValue: function (l, a) {
        var t = yl();
        return Ue(t, l, a);
      },
      useTransition: function () {
        var l = Uc(!1);
        return (
          (l = Z1.bind(null, U, l.queue, !0, !1)),
          (yl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, a, t) {
        var u = U,
          n = yl();
        if (Y) {
          if (t === void 0) throw Error(A(407));
          t = t();
        } else {
          if (((t = a()), V === null)) throw Error(A(349));
          (_ & 127) !== 0 || b1(u, a, t);
        }
        n.memoizedState = t;
        var f = { value: t, getSnapshot: a };
        return (
          (n.queue = f),
          Bi(T1.bind(null, u, f, l), [l]),
          (u.flags |= 2048),
          Gt(9, { destroy: void 0 }, A1.bind(null, u, f, t, a), null),
          t
        );
      },
      useId: function () {
        var l = yl(),
          a = V.identifierPrefix;
        if (Y) {
          var t = pl,
            u = xl;
          (t = (u & ~(1 << (32 - Ul(u) - 1))).toString(32) + t),
            (a = "_" + a + "R_" + t),
            (t = Cn++),
            0 < t && (a += "H" + t.toString(32)),
            (a += "_");
        } else (t = sh++), (a = "_" + a + "r_" + t.toString(32) + "_");
        return (l.memoizedState = a);
      },
      useHostTransitionStatus: He,
      useFormState: Ui,
      useActionState: Ui,
      useOptimistic: function (l) {
        var a = yl();
        a.memoizedState = a.baseState = l;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = t), (a = Ne.bind(null, U, !0, t)), (t.dispatch = a), [l, a]
        );
      },
      useMemoCache: Ee,
      useCacheRefresh: function () {
        return (yl().memoizedState = Ch.bind(null, U));
      },
      useEffectEvent: function (l) {
        var a = yl(),
          t = { impl: l };
        return (
          (a.memoizedState = t),
          function () {
            if ((X & 2) !== 0) throw Error(A(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Be = {
      readContext: il,
      use: ef,
      useCallback: X1,
      useContext: il,
      useEffect: Oe,
      useImperativeHandle: o1,
      useInsertionEffect: _1,
      useLayoutEffect: Y1,
      useMemo: G1,
      useReducer: gn,
      useRef: B1,
      useState: function () {
        return gn(ia);
      },
      useDebugValue: De,
      useDeferredValue: function (l, a) {
        var t = $();
        return Q1(t, j.memoizedState, l, a);
      },
      useTransition: function () {
        var l = gn(ia)[0],
          a = $().memoizedState;
        return [typeof l == "boolean" ? l : ju(l), a];
      },
      useSyncExternalStore: z1,
      useId: j1,
      useHostTransitionStatus: He,
      useFormState: Hi,
      useActionState: Hi,
      useOptimistic: function (l, a) {
        var t = $();
        return O1(t, j, l, a);
      },
      useMemoCache: Ee,
      useCacheRefresh: V1,
    };
  Be.useEffectEvent = q1;
  var J1 = {
    readContext: il,
    use: ef,
    useCallback: X1,
    useContext: il,
    useEffect: Oe,
    useImperativeHandle: o1,
    useInsertionEffect: _1,
    useLayoutEffect: Y1,
    useMemo: G1,
    useReducer: Gf,
    useRef: B1,
    useState: function () {
      return Gf(ia);
    },
    useDebugValue: De,
    useDeferredValue: function (l, a) {
      var t = $();
      return j === null ? Ue(t, l, a) : Q1(t, j.memoizedState, l, a);
    },
    useTransition: function () {
      var l = Gf(ia)[0],
        a = $().memoizedState;
      return [typeof l == "boolean" ? l : ju(l), a];
    },
    useSyncExternalStore: z1,
    useId: j1,
    useHostTransitionStatus: He,
    useFormState: Ni,
    useActionState: Ni,
    useOptimistic: function (l, a) {
      var t = $();
      return j !== null
        ? O1(t, j, l, a)
        : ((t.baseState = l), [l, t.queue.dispatch]);
    },
    useMemoCache: Ee,
    useCacheRefresh: V1,
  };
  J1.useEffectEvent = q1;
  function Qf(l, a, t, u) {
    (a = l.memoizedState),
      (t = t(u, a)),
      (t = t == null ? a : L({}, a, t)),
      (l.memoizedState = t),
      l.lanes === 0 && (l.updateQueue.baseState = t);
  }
  var Bc = {
    enqueueSetState: function (l, a, t) {
      l = l._reactInternals;
      var u = Hl(),
        n = Na(u);
      (n.payload = a),
        t != null && (n.callback = t),
        (a = Ba(l, n, u)),
        a !== null && (gl(a, l, u), vu(a, l, u));
    },
    enqueueReplaceState: function (l, a, t) {
      l = l._reactInternals;
      var u = Hl(),
        n = Na(u);
      (n.tag = 1),
        (n.payload = a),
        t != null && (n.callback = t),
        (a = Ba(l, n, u)),
        a !== null && (gl(a, l, u), vu(a, l, u));
    },
    enqueueForceUpdate: function (l, a) {
      l = l._reactInternals;
      var t = Hl(),
        u = Na(t);
      (u.tag = 2),
        a != null && (u.callback = a),
        (a = Ba(l, u, t)),
        a !== null && (gl(a, l, t), vu(a, l, t));
    },
  };
  function qi(l, a, t, u, n, f, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, f, c)
        : a.prototype && a.prototype.isPureReactComponent
        ? !Mu(t, u) || !Mu(n, f)
        : !0
    );
  }
  function _i(l, a, t, u) {
    (l = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(t, u),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(t, u),
      a.state !== l && Bc.enqueueReplaceState(a, a.state, null);
  }
  function ra(l, a) {
    var t = a;
    if ("ref" in a) {
      t = {};
      for (var u in a) u !== "ref" && (t[u] = a[u]);
    }
    if ((l = l.defaultProps)) {
      t === a && (t = L({}, t));
      for (var n in l) t[n] === void 0 && (t[n] = l[n]);
    }
    return t;
  }
  function W1(l) {
    _n(l);
  }
  function w1(l) {
    console.error(l);
  }
  function F1(l) {
    _n(l);
  }
  function Rn(l, a) {
    try {
      var t = l.onUncaughtError;
      t(a.value, { componentStack: a.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Yi(l, a, t) {
    try {
      var u = l.onCaughtError;
      u(t.value, {
        componentStack: t.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function qc(l, a, t) {
    return (
      (t = Na(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        Rn(l, a);
      }),
      t
    );
  }
  function $1(l) {
    return (l = Na(l)), (l.tag = 3), l;
  }
  function k1(l, a, t, u) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var f = u.value;
      (l.payload = function () {
        return n(f);
      }),
        (l.callback = function () {
          Yi(a, t, u);
        });
    }
    var c = t.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        Yi(a, t, u),
          typeof n != "function" &&
            (qa === null ? (qa = new Set([this])) : qa.add(this));
        var e = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: e !== null ? e : "",
        });
      });
  }
  function jh(l, a, t, u, n) {
    if (
      ((t.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((a = t.alternate),
        a !== null && pt(a, t, n, !0),
        (t = Bl.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 31:
          case 13:
            return (
              Ql === null ? Kn() : t.alternate === null && w === 0 && (w = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = n),
              u === Xn
                ? (t.flags |= 16384)
                : ((a = t.updateQueue),
                  a === null ? (t.updateQueue = new Set([u])) : a.add(u),
                  Wf(l, u, n)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              u === Xn
                ? (t.flags |= 16384)
                : ((a = t.updateQueue),
                  a === null
                    ? ((a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (t.updateQueue = a))
                    : ((t = a.retryQueue),
                      t === null ? (a.retryQueue = new Set([u])) : t.add(u)),
                  Wf(l, u, n)),
              !1
            );
        }
        throw Error(A(435, t.tag));
      }
      return Wf(l, u, n), Kn(), !1;
    }
    if (Y)
      return (
        (a = Bl.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = n),
            u !== gc && ((l = Error(A(422), { cause: u })), Du(Xl(l, t))))
          : (u !== gc && ((a = Error(A(423), { cause: u })), Du(Xl(a, t))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (u = Xl(u, t)),
            (n = qc(l.stateNode, u, n)),
            Xf(l, n),
            w !== 4 && (w = 2)),
        !1
      );
    var f = Error(A(520), { cause: u });
    if (
      ((f = Xl(f, t)),
      gu === null ? (gu = [f]) : gu.push(f),
      w !== 4 && (w = 2),
      a === null)
    )
      return !0;
    (u = Xl(u, t)), (t = a);
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (l = n & -n),
            (t.lanes |= l),
            (l = qc(t.stateNode, u, l)),
            Xf(t, l),
            !1
          );
        case 1:
          if (
            ((a = t.type),
            (f = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (qa === null || !qa.has(f)))))
          )
            return (
              (t.flags |= 65536),
              (n &= -n),
              (t.lanes |= n),
              (n = $1(n)),
              k1(n, l, t, u),
              Xf(t, n),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var qe = Error(A(461)),
    r = !1;
  function fl(l, a, t, u) {
    a.child = l === null ? y1(a, null, t, u) : Ia(a, l.child, t, u);
  }
  function si(l, a, t, u, n) {
    t = t.render;
    var f = a.ref;
    if ("ref" in u) {
      var c = {};
      for (var e in u) e !== "ref" && (c[e] = u[e]);
    } else c = u;
    return (
      ka(a),
      (u = ze(l, a, t, c, f, n)),
      (e = be()),
      l !== null && !r
        ? (Ae(l, a, n), va(l, a, n))
        : (Y && e && ie(a), (a.flags |= 1), fl(l, a, u, n), a.child)
    );
  }
  function oi(l, a, t, u, n) {
    if (l === null) {
      var f = t.type;
      return typeof f == "function" &&
        !ee(f) &&
        f.defaultProps === void 0 &&
        t.compare === null
        ? ((a.tag = 15), (a.type = f), I1(l, a, f, u, n))
        : ((l = dn(t.type, null, u, a, a.mode, n)),
          (l.ref = a.ref),
          (l.return = a),
          (a.child = l));
    }
    if (((f = l.child), !_e(l, n))) {
      var c = f.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Mu), t(c, u) && l.ref === a.ref)
      )
        return va(l, a, n);
    }
    return (
      (a.flags |= 1),
      (l = ua(f, u)),
      (l.ref = a.ref),
      (l.return = a),
      (a.child = l)
    );
  }
  function I1(l, a, t, u, n) {
    if (l !== null) {
      var f = l.memoizedProps;
      if (Mu(f, u) && l.ref === a.ref)
        if (((r = !1), (a.pendingProps = u = f), _e(l, n)))
          (l.flags & 131072) !== 0 && (r = !0);
        else return (a.lanes = l.lanes), va(l, a, n);
    }
    return _c(l, a, t, u, n);
  }
  function P1(l, a, t, u) {
    var n = u.children,
      f = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        a.stateNode === null &&
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((a.flags & 128) !== 0) {
        if (((f = f !== null ? f.baseLanes | t : t), l !== null)) {
          for (u = a.child = l.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          u = n & ~f;
        } else (u = 0), (a.child = null);
        return Xi(l, a, f, t, u);
      }
      if ((t & 536870912) !== 0)
        (a.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Sn(a, f !== null ? f.cachePool : null),
          f !== null ? Mi(a, f) : Oc(),
          d1(a);
      else
        return (
          (u = a.lanes = 536870912),
          Xi(l, a, f !== null ? f.baseLanes | t : t, t, u)
        );
    } else
      f !== null
        ? (Sn(a, f.cachePool), Mi(a, f), ba(a), (a.memoizedState = null))
        : (l !== null && Sn(a, null), Oc(), ba(a));
    return fl(l, a, n, t), a.child;
  }
  function uu(l, a) {
    return (
      (l !== null && l.tag === 22) ||
        a.stateNode !== null ||
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.sibling
    );
  }
  function Xi(l, a, t, u, n) {
    var f = he();
    return (
      (f = f === null ? null : { parent: P._currentValue, pool: f }),
      (a.memoizedState = { baseLanes: t, cachePool: f }),
      l !== null && Sn(a, null),
      Oc(),
      d1(a),
      l !== null && pt(l, a, u, !0),
      (a.childLanes = n),
      null
    );
  }
  function bn(l, a) {
    return (
      (a = jn({ mode: a.mode, children: a.children }, l.mode)),
      (a.ref = l.ref),
      (l.child = a),
      (a.return = l),
      a
    );
  }
  function Gi(l, a, t) {
    return (
      Ia(a, l.child, null, t),
      (l = bn(a, a.pendingProps)),
      (l.flags |= 2),
      Tl(a),
      (a.memoizedState = null),
      l
    );
  }
  function Vh(l, a, t) {
    var u = a.pendingProps,
      n = (a.flags & 128) !== 0;
    if (((a.flags &= -129), l === null)) {
      if (Y) {
        if (u.mode === "hidden")
          return (l = bn(a, u)), (a.lanes = 536870912), uu(null, l);
        if (
          (Dc(a),
          (l = K)
            ? ((l = Lv(l, Gl)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((a.memoizedState = {
                  dehydrated: l,
                  treeContext: Xa !== null ? { id: xl, overflow: pl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = u1(l)),
                (t.return = a),
                (a.child = t),
                (el = a),
                (K = null)))
            : (l = null),
          l === null)
        )
          throw Ga(a);
        return (a.lanes = 536870912), null;
      }
      return bn(a, u);
    }
    var f = l.memoizedState;
    if (f !== null) {
      var c = f.dehydrated;
      if ((Dc(a), n))
        if (a.flags & 256) (a.flags &= -257), (a = Gi(l, a, t));
        else if (a.memoizedState !== null)
          (a.child = l.child), (a.flags |= 128), (a = null);
        else throw Error(A(558));
      else if ((r || pt(l, a, t, !1), (n = (t & l.childLanes) !== 0), r || n)) {
        if (
          ((u = V),
          u !== null && ((c = _0(u, t)), c !== 0 && c !== f.retryLane))
        )
          throw ((f.retryLane = c), ut(l, c), gl(u, l, c), qe);
        Kn(), (a = Gi(l, a, t));
      } else
        (l = f.treeContext),
          (K = Zl(c.nextSibling)),
          (el = a),
          (Y = !0),
          (Ha = null),
          (Gl = !1),
          l !== null && f1(a, l),
          (a = bn(a, u)),
          (a.flags |= 4096);
      return a;
    }
    return (
      (l = ua(l.child, { mode: u.mode, children: u.children })),
      (l.ref = a.ref),
      (a.child = l),
      (l.return = a),
      l
    );
  }
  function An(l, a) {
    var t = a.ref;
    if (t === null) l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(A(284));
      (l === null || l.ref !== t) && (a.flags |= 4194816);
    }
  }
  function _c(l, a, t, u, n) {
    return (
      ka(a),
      (t = ze(l, a, t, u, void 0, n)),
      (u = be()),
      l !== null && !r
        ? (Ae(l, a, n), va(l, a, n))
        : (Y && u && ie(a), (a.flags |= 1), fl(l, a, t, n), a.child)
    );
  }
  function Qi(l, a, t, u, n, f) {
    return (
      ka(a),
      (a.updateQueue = null),
      (t = g1(a, u, t, n)),
      S1(l),
      (u = be()),
      l !== null && !r
        ? (Ae(l, a, f), va(l, a, f))
        : (Y && u && ie(a), (a.flags |= 1), fl(l, a, t, f), a.child)
    );
  }
  function Zi(l, a, t, u, n) {
    if ((ka(a), a.stateNode === null)) {
      var f = At,
        c = t.contextType;
      typeof c == "object" && c !== null && (f = il(c)),
        (f = new t(u, f)),
        (a.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Bc),
        (a.stateNode = f),
        (f._reactInternals = a),
        (f = a.stateNode),
        (f.props = u),
        (f.state = a.memoizedState),
        (f.refs = {}),
        de(a),
        (c = t.contextType),
        (f.context = typeof c == "object" && c !== null ? il(c) : At),
        (f.state = a.memoizedState),
        (c = t.getDerivedStateFromProps),
        typeof c == "function" && (Qf(a, t, c, u), (f.state = a.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((c = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          c !== f.state && Bc.enqueueReplaceState(f, f.state, null),
          hu(a, u, f, n),
          yu(),
          (f.state = a.memoizedState)),
        typeof f.componentDidMount == "function" && (a.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      f = a.stateNode;
      var e = a.memoizedProps,
        i = ra(t, e);
      f.props = i;
      var m = f.context,
        g = t.contextType;
      (c = At), typeof g == "object" && g !== null && (c = il(g));
      var b = t.getDerivedStateFromProps;
      (g =
        typeof b == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (e = a.pendingProps !== e),
        g ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((e || m !== c) && _i(a, f, u, c)),
        (Sa = !1);
      var d = a.memoizedState;
      (f.state = d),
        hu(a, u, f, n),
        yu(),
        (m = a.memoizedState),
        e || d !== m || Sa
          ? (typeof b == "function" && (Qf(a, t, b, u), (m = a.memoizedState)),
            (i = Sa || qi(a, t, i, u, d, m, c))
              ? (g ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = u),
                (a.memoizedState = m)),
            (f.props = u),
            (f.state = m),
            (f.context = c),
            (u = i))
          : (typeof f.componentDidMount == "function" && (a.flags |= 4194308),
            (u = !1));
    } else {
      (f = a.stateNode),
        Ec(l, a),
        (c = a.memoizedProps),
        (g = ra(t, c)),
        (f.props = g),
        (b = a.pendingProps),
        (d = f.context),
        (m = t.contextType),
        (i = At),
        typeof m == "object" && m !== null && (i = il(m)),
        (e = t.getDerivedStateFromProps),
        (m =
          typeof e == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((c !== b || d !== i) && _i(a, f, u, i)),
        (Sa = !1),
        (d = a.memoizedState),
        (f.state = d),
        hu(a, u, f, n),
        yu();
      var S = a.memoizedState;
      c !== b ||
      d !== S ||
      Sa ||
      (l !== null && l.dependencies !== null && on(l.dependencies))
        ? (typeof e == "function" && (Qf(a, t, e, u), (S = a.memoizedState)),
          (g =
            Sa ||
            qi(a, t, g, u, d, S, i) ||
            (l !== null && l.dependencies !== null && on(l.dependencies)))
            ? (m ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(u, S, i),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(u, S, i)),
              typeof f.componentDidUpdate == "function" && (a.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (c === l.memoizedProps && d === l.memoizedState) ||
                (a.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && d === l.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = u),
              (a.memoizedState = S)),
          (f.props = u),
          (f.state = S),
          (f.context = i),
          (u = g))
        : (typeof f.componentDidUpdate != "function" ||
            (c === l.memoizedProps && d === l.memoizedState) ||
            (a.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && d === l.memoizedState) ||
            (a.flags |= 1024),
          (u = !1));
    }
    return (
      (f = u),
      An(l, a),
      (u = (a.flags & 128) !== 0),
      f || u
        ? ((f = a.stateNode),
          (t =
            u && typeof t.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (a.flags |= 1),
          l !== null && u
            ? ((a.child = Ia(a, l.child, null, n)),
              (a.child = Ia(a, null, t, n)))
            : fl(l, a, t, n),
          (a.memoizedState = f.state),
          (l = a.child))
        : (l = va(l, a, n)),
      l
    );
  }
  function Ci(l, a, t, u) {
    return $a(), (a.flags |= 256), fl(l, a, t, u), a.child;
  }
  var Zf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Cf(l) {
    return { baseLanes: l, cachePool: e1() };
  }
  function Rf(l, a, t) {
    return (l = l !== null ? l.childLanes & ~t : 0), a && (l |= Ml), l;
  }
  function r1(l, a, t) {
    var u = a.pendingProps,
      n = !1,
      f = (a.flags & 128) !== 0,
      c;
    if (
      ((c = f) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (F.current & 2) !== 0),
      c && ((n = !0), (a.flags &= -129)),
      (c = (a.flags & 32) !== 0),
      (a.flags &= -33),
      l === null)
    ) {
      if (Y) {
        if (
          (n ? za(a) : ba(a),
          (l = K)
            ? ((l = Lv(l, Gl)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((a.memoizedState = {
                  dehydrated: l,
                  treeContext: Xa !== null ? { id: xl, overflow: pl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = u1(l)),
                (t.return = a),
                (a.child = t),
                (el = a),
                (K = null)))
            : (l = null),
          l === null)
        )
          throw Ga(a);
        return Kc(l) ? (a.lanes = 32) : (a.lanes = 536870912), null;
      }
      var e = u.children;
      return (
        (u = u.fallback),
        n
          ? (ba(a),
            (n = a.mode),
            (e = jn({ mode: "hidden", children: e }, n)),
            (u = Ja(u, n, t, null)),
            (e.return = a),
            (u.return = a),
            (e.sibling = u),
            (a.child = e),
            (u = a.child),
            (u.memoizedState = Cf(t)),
            (u.childLanes = Rf(l, c, t)),
            (a.memoizedState = Zf),
            uu(null, u))
          : (za(a), Yc(a, e))
      );
    }
    var i = l.memoizedState;
    if (i !== null && ((e = i.dehydrated), e !== null)) {
      if (f)
        a.flags & 256
          ? (za(a), (a.flags &= -257), (a = jf(l, a, t)))
          : a.memoizedState !== null
          ? (ba(a), (a.child = l.child), (a.flags |= 128), (a = null))
          : (ba(a),
            (e = u.fallback),
            (n = a.mode),
            (u = jn({ mode: "visible", children: u.children }, n)),
            (e = Ja(e, n, t, null)),
            (e.flags |= 2),
            (u.return = a),
            (e.return = a),
            (u.sibling = e),
            (a.child = u),
            Ia(a, l.child, null, t),
            (u = a.child),
            (u.memoizedState = Cf(t)),
            (u.childLanes = Rf(l, c, t)),
            (a.memoizedState = Zf),
            (a = uu(null, u)));
      else if ((za(a), Kc(e))) {
        if (((c = e.nextSibling && e.nextSibling.dataset), c)) var m = c.dgst;
        (c = m),
          (u = Error(A(419))),
          (u.stack = ""),
          (u.digest = c),
          Du({ value: u, source: null, stack: null }),
          (a = jf(l, a, t));
      } else if (
        (r || pt(l, a, t, !1), (c = (t & l.childLanes) !== 0), r || c)
      ) {
        if (
          ((c = V),
          c !== null && ((u = _0(c, t)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), ut(l, u), gl(c, l, u), qe);
        pc(e) || Kn(), (a = jf(l, a, t));
      } else
        pc(e)
          ? ((a.flags |= 192), (a.child = l.child), (a = null))
          : ((l = i.treeContext),
            (K = Zl(e.nextSibling)),
            (el = a),
            (Y = !0),
            (Ha = null),
            (Gl = !1),
            l !== null && f1(a, l),
            (a = Yc(a, u.children)),
            (a.flags |= 4096));
      return a;
    }
    return n
      ? (ba(a),
        (e = u.fallback),
        (n = a.mode),
        (i = l.child),
        (m = i.sibling),
        (u = ua(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 65011712),
        m !== null ? (e = ua(m, e)) : ((e = Ja(e, n, t, null)), (e.flags |= 2)),
        (e.return = a),
        (u.return = a),
        (u.sibling = e),
        (a.child = u),
        uu(null, u),
        (u = a.child),
        (e = l.child.memoizedState),
        e === null
          ? (e = Cf(t))
          : ((n = e.cachePool),
            n !== null
              ? ((i = P._currentValue),
                (n = n.parent !== i ? { parent: i, pool: i } : n))
              : (n = e1()),
            (e = { baseLanes: e.baseLanes | t, cachePool: n })),
        (u.memoizedState = e),
        (u.childLanes = Rf(l, c, t)),
        (a.memoizedState = Zf),
        uu(l.child, u))
      : (za(a),
        (t = l.child),
        (l = t.sibling),
        (t = ua(t, { mode: "visible", children: u.children })),
        (t.return = a),
        (t.sibling = null),
        l !== null &&
          ((c = a.deletions),
          c === null ? ((a.deletions = [l]), (a.flags |= 16)) : c.push(l)),
        (a.child = t),
        (a.memoizedState = null),
        t);
  }
  function Yc(l, a) {
    return (
      (a = jn({ mode: "visible", children: a }, l.mode)),
      (a.return = l),
      (l.child = a)
    );
  }
  function jn(l, a) {
    return (l = El(22, l, null, a)), (l.lanes = 0), l;
  }
  function jf(l, a, t) {
    return (
      Ia(a, l.child, null, t),
      (l = Yc(a, a.pendingProps.children)),
      (l.flags |= 2),
      (a.memoizedState = null),
      l
    );
  }
  function Ri(l, a, t) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a), bc(l.return, a, t);
  }
  function Vf(l, a, t, u, n, f) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: t,
          tailMode: n,
          treeForkCount: f,
        })
      : ((c.isBackwards = a),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = u),
        (c.tail = t),
        (c.tailMode = n),
        (c.treeForkCount = f));
  }
  function lv(l, a, t) {
    var u = a.pendingProps,
      n = u.revealOrder,
      f = u.tail;
    u = u.children;
    var c = F.current,
      e = (c & 2) !== 0;
    if (
      (e ? ((c = (c & 1) | 2), (a.flags |= 128)) : (c &= 1),
      x(F, c),
      fl(l, a, u, t),
      (u = Y ? Ou : 0),
      !e && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = a.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Ri(l, t, a);
        else if (l.tag === 19) Ri(l, t, a);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === a) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === a) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    switch (n) {
      case "forwards":
        for (t = a.child, n = null; t !== null; )
          (l = t.alternate),
            l !== null && Qn(l) === null && (n = t),
            (t = t.sibling);
        (t = n),
          t === null
            ? ((n = a.child), (a.child = null))
            : ((n = t.sibling), (t.sibling = null)),
          Vf(a, !1, n, t, f, u);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, n = a.child, a.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && Qn(l) === null)) {
            a.child = n;
            break;
          }
          (l = n.sibling), (n.sibling = t), (t = n), (n = l);
        }
        Vf(a, !0, t, null, f, u);
        break;
      case "together":
        Vf(a, !1, null, null, void 0, u);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function va(l, a, t) {
    if (
      (l !== null && (a.dependencies = l.dependencies),
      (Za |= a.lanes),
      (t & a.childLanes) === 0)
    )
      if (l !== null) {
        if ((pt(l, a, t, !1), (t & a.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && a.child !== l.child) throw Error(A(153));
    if (a.child !== null) {
      for (
        l = a.child, t = ua(l, l.pendingProps), a.child = t, t.return = a;
        l.sibling !== null;

      )
        (l = l.sibling),
          (t = t.sibling = ua(l, l.pendingProps)),
          (t.return = a);
      t.sibling = null;
    }
    return a.child;
  }
  function _e(l, a) {
    return (l.lanes & a) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && on(l)));
  }
  function xh(l, a, t) {
    switch (a.tag) {
      case 3:
        Hn(a, a.stateNode.containerInfo), ga(a, P, l.memoizedState.cache), $a();
        break;
      case 27:
      case 5:
        nc(a);
        break;
      case 4:
        Hn(a, a.stateNode.containerInfo);
        break;
      case 10:
        ga(a, a.type, a.memoizedProps.value);
        break;
      case 31:
        if (a.memoizedState !== null) return (a.flags |= 128), Dc(a), null;
        break;
      case 13:
        var u = a.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (za(a), (a.flags |= 128), null)
            : (t & a.child.childLanes) !== 0
            ? r1(l, a, t)
            : (za(a), (l = va(l, a, t)), l !== null ? l.sibling : null);
        za(a);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((u = (t & a.childLanes) !== 0),
          u || (pt(l, a, t, !1), (u = (t & a.childLanes) !== 0)),
          n)
        ) {
          if (u) return lv(l, a, t);
          a.flags |= 128;
        }
        if (
          ((n = a.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          x(F, F.current),
          u)
        )
          break;
        return null;
      case 22:
        return (a.lanes = 0), P1(l, a, t, a.pendingProps);
      case 24:
        ga(a, P, l.memoizedState.cache);
    }
    return va(l, a, t);
  }
  function av(l, a, t) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps) r = !0;
      else {
        if (!_e(l, t) && (a.flags & 128) === 0) return (r = !1), xh(l, a, t);
        r = (l.flags & 131072) !== 0;
      }
    else (r = !1), Y && (a.flags & 1048576) !== 0 && n1(a, Ou, a.index);
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        l: {
          var u = a.pendingProps;
          if (((l = pa(a.elementType)), (a.type = l), typeof l == "function"))
            ee(l)
              ? ((u = ra(l, u)), (a.tag = 1), (a = Zi(null, a, l, u, t)))
              : ((a.tag = 0), (a = _c(null, a, l, u, t)));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === wc) {
                (a.tag = 11), (a = si(null, a, l, u, t));
                break l;
              } else if (n === Fc) {
                (a.tag = 14), (a = oi(null, a, l, u, t));
                break l;
              }
            }
            throw ((a = tc(l) || l), Error(A(306, a, "")));
          }
        }
        return a;
      case 0:
        return _c(l, a, a.type, a.pendingProps, t);
      case 1:
        return (u = a.type), (n = ra(u, a.pendingProps)), Zi(l, a, u, n, t);
      case 3:
        l: {
          if ((Hn(a, a.stateNode.containerInfo), l === null))
            throw Error(A(387));
          u = a.pendingProps;
          var f = a.memoizedState;
          (n = f.element), Ec(l, a), hu(a, u, null, t);
          var c = a.memoizedState;
          if (
            ((u = c.cache),
            ga(a, P, u),
            u !== f.cache && Ac(a, [P], t, !0),
            yu(),
            (u = c.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: u, isDehydrated: !1, cache: c.cache }),
              (a.updateQueue.baseState = f),
              (a.memoizedState = f),
              a.flags & 256)
            ) {
              a = Ci(l, a, u, t);
              break l;
            } else if (u !== n) {
              (n = Xl(Error(A(424)), a)), Du(n), (a = Ci(l, a, u, t));
              break l;
            } else {
              switch (((l = a.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                K = Zl(l.firstChild),
                  el = a,
                  Y = !0,
                  Ha = null,
                  Gl = !0,
                  t = y1(a, null, u, t),
                  a.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          else {
            if (($a(), u === n)) {
              a = va(l, a, t);
              break l;
            }
            fl(l, a, u, t);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          An(l, a),
          l === null
            ? (t = c0(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = t)
              : Y ||
                ((t = a.type),
                (l = a.pendingProps),
                (u = wn(Ua.current).createElement(t)),
                (u[cl] = a),
                (u[zl] = l),
                vl(u, t, l),
                ul(u),
                (a.stateNode = u))
            : (a.memoizedState = c0(
                a.type,
                l.memoizedProps,
                a.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          nc(a),
          l === null &&
            Y &&
            ((u = a.stateNode = Jv(a.type, a.pendingProps, Ua.current)),
            (el = a),
            (Gl = !0),
            (n = K),
            Ra(a.type) ? ((Lc = n), (K = Zl(u.firstChild))) : (K = n)),
          fl(l, a, a.pendingProps.children, t),
          An(l, a),
          l === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          l === null &&
            Y &&
            ((n = u = K) &&
              ((u = gm(u, a.type, a.pendingProps, Gl)),
              u !== null
                ? ((a.stateNode = u),
                  (el = a),
                  (K = Zl(u.firstChild)),
                  (Gl = !1),
                  (n = !0))
                : (n = !1)),
            n || Ga(a)),
          nc(a),
          (n = a.type),
          (f = a.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = f.children),
          Vc(n, f) ? (u = null) : c !== null && Vc(n, c) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((n = ze(l, a, oh, null, null, t)), (_u._currentValue = n)),
          An(l, a),
          fl(l, a, u, t),
          a.child
        );
      case 6:
        return (
          l === null &&
            Y &&
            ((l = t = K) &&
              ((t = zm(t, a.pendingProps, Gl)),
              t !== null
                ? ((a.stateNode = t), (el = a), (K = null), (l = !0))
                : (l = !1)),
            l || Ga(a)),
          null
        );
      case 13:
        return r1(l, a, t);
      case 4:
        return (
          Hn(a, a.stateNode.containerInfo),
          (u = a.pendingProps),
          l === null ? (a.child = Ia(a, null, u, t)) : fl(l, a, u, t),
          a.child
        );
      case 11:
        return si(l, a, a.type, a.pendingProps, t);
      case 7:
        return fl(l, a, a.pendingProps, t), a.child;
      case 8:
        return fl(l, a, a.pendingProps.children, t), a.child;
      case 12:
        return fl(l, a, a.pendingProps.children, t), a.child;
      case 10:
        return (
          (u = a.pendingProps),
          ga(a, a.type, u.value),
          fl(l, a, u.children, t),
          a.child
        );
      case 9:
        return (
          (n = a.type._context),
          (u = a.pendingProps.children),
          ka(a),
          (n = il(n)),
          (u = u(n)),
          (a.flags |= 1),
          fl(l, a, u, t),
          a.child
        );
      case 14:
        return oi(l, a, a.type, a.pendingProps, t);
      case 15:
        return I1(l, a, a.type, a.pendingProps, t);
      case 19:
        return lv(l, a, t);
      case 31:
        return Vh(l, a, t);
      case 22:
        return P1(l, a, t, a.pendingProps);
      case 24:
        return (
          ka(a),
          (u = il(P)),
          l === null
            ? ((n = he()),
              n === null &&
                ((n = V),
                (f = ye()),
                (n.pooledCache = f),
                f.refCount++,
                f !== null && (n.pooledCacheLanes |= t),
                (n = f)),
              (a.memoizedState = { parent: u, cache: n }),
              de(a),
              ga(a, P, n))
            : ((l.lanes & t) !== 0 && (Ec(l, a), hu(a, null, null, t), yu()),
              (n = l.memoizedState),
              (f = a.memoizedState),
              n.parent !== u
                ? ((n = { parent: u, cache: u }),
                  (a.memoizedState = n),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = n),
                  ga(a, P, u))
                : ((u = f.cache),
                  ga(a, P, u),
                  u !== n.cache && Ac(a, [P], t, !0))),
          fl(l, a, a.pendingProps.children, t),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(A(156, a.tag));
  }
  function Fl(l) {
    l.flags |= 4;
  }
  function xf(l, a, t, u, n) {
    if (((a = (l.mode & 32) !== 0) && (a = !1), a)) {
      if (((l.flags |= 16777216), (n & 335544128) === n))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Hv()) l.flags |= 8192;
        else throw ((wa = Xn), me);
    } else l.flags &= -16777217;
  }
  function ji(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Fv(a)))
      if (Hv()) l.flags |= 8192;
      else throw ((wa = Xn), me);
  }
  function an(l, a) {
    a !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((a = l.tag !== 22 ? N0() : 536870912), (l.lanes |= a), (Qt |= a));
  }
  function kt(l, a) {
    if (!Y)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var t = null; a !== null; )
            a.alternate !== null && (t = a), (a = a.sibling);
          t === null ? (l.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), (t = t.sibling);
          u === null
            ? a || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function p(l) {
    var a = l.alternate !== null && l.alternate.child === l.child,
      t = 0,
      u = 0;
    if (a)
      for (var n = l.child; n !== null; )
        (t |= n.lanes | n.childLanes),
          (u |= n.subtreeFlags & 65011712),
          (u |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling);
    else
      for (n = l.child; n !== null; )
        (t |= n.lanes | n.childLanes),
          (u |= n.subtreeFlags),
          (u |= n.flags),
          (n.return = l),
          (n = n.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = t), a;
  }
  function ph(l, a, t) {
    var u = a.pendingProps;
    switch ((ve(a), a.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return p(a), null;
      case 1:
        return p(a), null;
      case 3:
        return (
          (t = a.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          a.memoizedState.cache !== u && (a.flags |= 2048),
          na(P),
          _t(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (l === null || l.child === null) &&
            (ct(a)
              ? Fl(a)
              : l === null ||
                (l.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), of())),
          p(a),
          null
        );
      case 26:
        var n = a.type,
          f = a.memoizedState;
        return (
          l === null
            ? (Fl(a),
              f !== null ? (p(a), ji(a, f)) : (p(a), xf(a, n, null, u, t)))
            : f
            ? f !== l.memoizedState
              ? (Fl(a), p(a), ji(a, f))
              : (p(a), (a.flags &= -16777217))
            : ((l = l.memoizedProps),
              l !== u && Fl(a),
              p(a),
              xf(a, n, l, u, t)),
          null
        );
      case 27:
        if (
          (Nn(a),
          (t = Ua.current),
          (n = a.type),
          l !== null && a.stateNode != null)
        )
          l.memoizedProps !== u && Fl(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(A(166));
            return p(a), null;
          }
          (l = Ll.current),
            ct(a) ? Si(a, l) : ((l = Jv(n, u, t)), (a.stateNode = l), Fl(a));
        }
        return p(a), null;
      case 5:
        if ((Nn(a), (n = a.type), l !== null && a.stateNode != null))
          l.memoizedProps !== u && Fl(a);
        else {
          if (!u) {
            if (a.stateNode === null) throw Error(A(166));
            return p(a), null;
          }
          if (((f = Ll.current), ct(a))) Si(a, f);
          else {
            var c = wn(Ua.current);
            switch (f) {
              case 1:
                f = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                f = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    f = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    f = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (f = c.createElement("div")),
                      (f.innerHTML = "<script></script>"),
                      (f = f.removeChild(f.firstChild));
                    break;
                  case "select":
                    (f =
                      typeof u.is == "string"
                        ? c.createElement("select", { is: u.is })
                        : c.createElement("select")),
                      u.multiple
                        ? (f.multiple = !0)
                        : u.size && (f.size = u.size);
                    break;
                  default:
                    f =
                      typeof u.is == "string"
                        ? c.createElement(n, { is: u.is })
                        : c.createElement(n);
                }
            }
            (f[cl] = a), (f[zl] = u);
            l: for (c = a.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) f.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === a) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === a) break l;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            a.stateNode = f;
            l: switch ((vl(f, n, u), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Fl(a);
          }
        }
        return (
          p(a),
          xf(a, a.type, l === null ? null : l.memoizedProps, a.pendingProps, t),
          null
        );
      case 6:
        if (l && a.stateNode != null) l.memoizedProps !== u && Fl(a);
        else {
          if (typeof u != "string" && a.stateNode === null) throw Error(A(166));
          if (((l = Ua.current), ct(a))) {
            if (
              ((l = a.stateNode),
              (t = a.memoizedProps),
              (u = null),
              (n = el),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  u = n.memoizedProps;
              }
            (l[cl] = a),
              (l = !!(
                l.nodeValue === t ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                xv(l.nodeValue, t)
              )),
              l || Ga(a, !0);
          } else (l = wn(l).createTextNode(u)), (l[cl] = a), (a.stateNode = l);
        }
        return p(a), null;
      case 31:
        if (((t = a.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = ct(a)), t !== null)) {
            if (l === null) {
              if (!u) throw Error(A(318));
              if (
                ((l = a.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(A(557));
              l[cl] = a;
            } else
              $a(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            p(a), (l = !1);
          } else
            (t = of()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = t),
              (l = !0);
          if (!l) return a.flags & 256 ? (Tl(a), a) : (Tl(a), null);
          if ((a.flags & 128) !== 0) throw Error(A(558));
        }
        return p(a), null;
      case 13:
        if (
          ((u = a.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = ct(a)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(A(318));
              if (
                ((n = a.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(A(317));
              n[cl] = a;
            } else
              $a(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4);
            p(a), (n = !1);
          } else
            (n = of()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return a.flags & 256 ? (Tl(a), a) : (Tl(a), null);
        }
        return (
          Tl(a),
          (a.flags & 128) !== 0
            ? ((a.lanes = t), a)
            : ((t = u !== null),
              (l = l !== null && l.memoizedState !== null),
              t &&
                ((u = a.child),
                (n = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (n = u.alternate.memoizedState.cachePool.pool),
                (f = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (f = u.memoizedState.cachePool.pool),
                f !== n && (u.flags |= 2048)),
              t !== l && t && (a.child.flags |= 8192),
              an(a, a.updateQueue),
              p(a),
              null)
        );
      case 4:
        return _t(), l === null && Ze(a.stateNode.containerInfo), p(a), null;
      case 10:
        return na(a.type), p(a), null;
      case 19:
        if ((nl(F), (u = a.memoizedState), u === null)) return p(a), null;
        if (((n = (a.flags & 128) !== 0), (f = u.rendering), f === null))
          if (n) kt(u, !1);
          else {
            if (w !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = a.child; l !== null; ) {
                if (((f = Qn(l)), f !== null)) {
                  for (
                    a.flags |= 128,
                      kt(u, !1),
                      l = f.updateQueue,
                      a.updateQueue = l,
                      an(a, l),
                      a.subtreeFlags = 0,
                      l = t,
                      t = a.child;
                    t !== null;

                  )
                    t1(t, l), (t = t.sibling);
                  return (
                    x(F, (F.current & 1) | 2),
                    Y && Pl(a, u.treeForkCount),
                    a.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              Ol() > xn &&
              ((a.flags |= 128), (n = !0), kt(u, !1), (a.lanes = 4194304));
          }
        else {
          if (!n)
            if (((l = Qn(f)), l !== null)) {
              if (
                ((a.flags |= 128),
                (n = !0),
                (l = l.updateQueue),
                (a.updateQueue = l),
                an(a, l),
                kt(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !f.alternate &&
                  !Y)
              )
                return p(a), null;
            } else
              2 * Ol() - u.renderingStartTime > xn &&
                t !== 536870912 &&
                ((a.flags |= 128), (n = !0), kt(u, !1), (a.lanes = 4194304));
          u.isBackwards
            ? ((f.sibling = a.child), (a.child = f))
            : ((l = u.last),
              l !== null ? (l.sibling = f) : (a.child = f),
              (u.last = f));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = Ol()),
            (l.sibling = null),
            (t = F.current),
            x(F, n ? (t & 1) | 2 : t & 1),
            Y && Pl(a, u.treeForkCount),
            l)
          : (p(a), null);
      case 22:
      case 23:
        return (
          Tl(a),
          Se(),
          (u = a.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (a.flags |= 8192)
            : u && (a.flags |= 8192),
          u
            ? (t & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (p(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : p(a),
          (t = a.updateQueue),
          t !== null && an(a, t.retryQueue),
          (t = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (t = l.memoizedState.cachePool.pool),
          (u = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
          u !== t && (a.flags |= 2048),
          l !== null && nl(Wa),
          null
        );
      case 24:
        return (
          (t = null),
          l !== null && (t = l.memoizedState.cache),
          a.memoizedState.cache !== t && (a.flags |= 2048),
          na(P),
          p(a),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(A(156, a.tag));
  }
  function Kh(l, a) {
    switch ((ve(a), a.tag)) {
      case 1:
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 3:
        return (
          na(P),
          _t(),
          (l = a.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((a.flags = (l & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Nn(a), null;
      case 31:
        if (a.memoizedState !== null) {
          if ((Tl(a), a.alternate === null)) throw Error(A(340));
          $a();
        }
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 13:
        if (
          (Tl(a), (l = a.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(A(340));
          $a();
        }
        return (
          (l = a.flags), l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 19:
        return nl(F), null;
      case 4:
        return _t(), null;
      case 10:
        return na(a.type), null;
      case 22:
      case 23:
        return (
          Tl(a),
          Se(),
          l !== null && nl(Wa),
          (l = a.flags),
          l & 65536 ? ((a.flags = (l & -65537) | 128), a) : null
        );
      case 24:
        return na(P), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tv(l, a) {
    switch ((ve(a), a.tag)) {
      case 3:
        na(P), _t();
        break;
      case 26:
      case 27:
      case 5:
        Nn(a);
        break;
      case 4:
        _t();
        break;
      case 31:
        a.memoizedState !== null && Tl(a);
        break;
      case 13:
        Tl(a);
        break;
      case 19:
        nl(F);
        break;
      case 10:
        na(a.type);
        break;
      case 22:
      case 23:
        Tl(a), Se(), l !== null && nl(Wa);
        break;
      case 24:
        na(P);
    }
  }
  function Vu(l, a) {
    try {
      var t = a.updateQueue,
        u = t !== null ? t.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        t = n;
        do {
          if ((t.tag & l) === l) {
            u = void 0;
            var f = t.create,
              c = t.inst;
            (u = f()), (c.destroy = u);
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (e) {
      Z(a, a.return, e);
    }
  }
  function Qa(l, a, t) {
    try {
      var u = a.updateQueue,
        n = u !== null ? u.lastEffect : null;
      if (n !== null) {
        var f = n.next;
        u = f;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              e = c.destroy;
            if (e !== void 0) {
              (c.destroy = void 0), (n = a);
              var i = t,
                m = e;
              try {
                m();
              } catch (g) {
                Z(n, i, g);
              }
            }
          }
          u = u.next;
        } while (u !== f);
      }
    } catch (g) {
      Z(a, a.return, g);
    }
  }
  function uv(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var t = l.stateNode;
      try {
        m1(a, t);
      } catch (u) {
        Z(l, l.return, u);
      }
    }
  }
  function nv(l, a, t) {
    (t.props = ra(l.type, l.memoizedProps)), (t.state = l.memoizedState);
    try {
      t.componentWillUnmount();
    } catch (u) {
      Z(l, a, u);
    }
  }
  function du(l, a) {
    try {
      var t = l.ref;
      if (t !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof t == "function" ? (l.refCleanup = t(u)) : (t.current = u);
      }
    } catch (n) {
      Z(l, a, n);
    }
  }
  function Kl(l, a) {
    var t = l.ref,
      u = l.refCleanup;
    if (t !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (n) {
          Z(l, a, n);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (n) {
          Z(l, a, n);
        }
      else t.current = null;
  }
  function fv(l) {
    var a = l.type,
      t = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && u.focus();
          break l;
        case "img":
          t.src ? (u.src = t.src) : t.srcSet && (u.srcset = t.srcSet);
      }
    } catch (n) {
      Z(l, l.return, n);
    }
  }
  function pf(l, a, t) {
    try {
      var u = l.stateNode;
      vm(u, l.type, t, a), (u[zl] = a);
    } catch (n) {
      Z(l, l.return, n);
    }
  }
  function cv(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Ra(l.type)) ||
      l.tag === 4
    );
  }
  function Kf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || cv(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && Ra(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sc(l, a, t) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        a
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === "HTML"
              ? t.ownerDocument.body
              : t
            ).insertBefore(l, a)
          : ((a =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                ? t.ownerDocument.body
                : t),
            a.appendChild(l),
            (t = t._reactRootContainer),
            t != null || a.onclick !== null || (a.onclick = aa));
    else if (
      u !== 4 &&
      (u === 27 && Ra(l.type) && ((t = l.stateNode), (a = null)),
      (l = l.child),
      l !== null)
    )
      for (sc(l, a, t), l = l.sibling; l !== null; )
        sc(l, a, t), (l = l.sibling);
  }
  function Vn(l, a, t) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), a ? t.insertBefore(l, a) : t.appendChild(l);
    else if (
      u !== 4 &&
      (u === 27 && Ra(l.type) && (t = l.stateNode), (l = l.child), l !== null)
    )
      for (Vn(l, a, t), l = l.sibling; l !== null; )
        Vn(l, a, t), (l = l.sibling);
  }
  function ev(l) {
    var a = l.stateNode,
      t = l.memoizedProps;
    try {
      for (var u = l.type, n = a.attributes; n.length; )
        a.removeAttributeNode(n[0]);
      vl(a, u, t), (a[cl] = l), (a[zl] = t);
    } catch (f) {
      Z(l, l.return, f);
    }
  }
  var rl = !1,
    I = !1,
    Lf = !1,
    Vi = typeof WeakSet == "function" ? WeakSet : Set,
    tl = null;
  function Lh(l, a) {
    if (((l = l.containerInfo), (Rc = In), (l = F0(l)), ne(l))) {
      if ("selectionStart" in l)
        var t = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          t = ((t = l.ownerDocument) && t.defaultView) || window;
          var u = t.getSelection && t.getSelection();
          if (u && u.rangeCount !== 0) {
            t = u.anchorNode;
            var n = u.anchorOffset,
              f = u.focusNode;
            u = u.focusOffset;
            try {
              t.nodeType, f.nodeType;
            } catch {
              t = null;
              break l;
            }
            var c = 0,
              e = -1,
              i = -1,
              m = 0,
              g = 0,
              b = l,
              d = null;
            a: for (;;) {
              for (
                var S;
                b !== t || (n !== 0 && b.nodeType !== 3) || (e = c + n),
                  b !== f || (u !== 0 && b.nodeType !== 3) || (i = c + u),
                  b.nodeType === 3 && (c += b.nodeValue.length),
                  (S = b.firstChild) !== null;

              )
                (d = b), (b = S);
              for (;;) {
                if (b === l) break a;
                if (
                  (d === t && ++m === n && (e = c),
                  d === f && ++g === u && (i = c),
                  (S = b.nextSibling) !== null)
                )
                  break;
                (b = d), (d = b.parentNode);
              }
              b = S;
            }
            t = e === -1 || i === -1 ? null : { start: e, end: i };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      jc = { focusedElem: l, selectionRange: t }, In = !1, tl = a;
      tl !== null;

    )
      if (
        ((a = tl), (l = a.child), (a.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = a), (tl = l);
      else
        for (; tl !== null; ) {
          switch (((a = tl), (f = a.alternate), (l = a.flags), a.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = a.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (t = 0; t < l.length; t++)
                  (n = l[t]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && f !== null) {
                (l = void 0),
                  (t = a),
                  (n = f.memoizedProps),
                  (f = f.memoizedState),
                  (u = t.stateNode);
                try {
                  var T = ra(t.type, n);
                  (l = u.getSnapshotBeforeUpdate(T, f)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (O) {
                  Z(t, t.return, O);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = a.stateNode.containerInfo), (t = l.nodeType), t === 9)
                )
                  xc(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(A(163));
          }
          if (((l = a.sibling), l !== null)) {
            (l.return = a.return), (tl = l);
            break;
          }
          tl = a.return;
        }
  }
  function iv(l, a, t) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        kl(l, t), u & 4 && Vu(5, t);
        break;
      case 1:
        if ((kl(l, t), u & 4))
          if (((l = t.stateNode), a === null))
            try {
              l.componentDidMount();
            } catch (c) {
              Z(t, t.return, c);
            }
          else {
            var n = ra(t.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              l.componentDidUpdate(n, a, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              Z(t, t.return, c);
            }
          }
        u & 64 && uv(t), u & 512 && du(t, t.return);
        break;
      case 3:
        if ((kl(l, t), u & 64 && ((l = t.updateQueue), l !== null))) {
          if (((a = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                a = t.child.stateNode;
                break;
              case 1:
                a = t.child.stateNode;
            }
          try {
            m1(l, a);
          } catch (c) {
            Z(t, t.return, c);
          }
        }
        break;
      case 27:
        a === null && u & 4 && ev(t);
      case 26:
      case 5:
        kl(l, t), a === null && u & 4 && fv(t), u & 512 && du(t, t.return);
        break;
      case 12:
        kl(l, t);
        break;
      case 31:
        kl(l, t), u & 4 && hv(l, t);
        break;
      case 13:
        kl(l, t),
          u & 4 && mv(l, t),
          u & 64 &&
            ((l = t.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((t = rh.bind(null, t)), bm(l, t))));
        break;
      case 22:
        if (((u = t.memoizedState !== null || rl), !u)) {
          (a = (a !== null && a.memoizedState !== null) || I), (n = rl);
          var f = I;
          (rl = u),
            (I = a) && !f ? Il(l, t, (t.subtreeFlags & 8772) !== 0) : kl(l, t),
            (rl = n),
            (I = f);
        }
        break;
      case 30:
        break;
      default:
        kl(l, t);
    }
  }
  function vv(l) {
    var a = l.alternate;
    a !== null && ((l.alternate = null), vv(a)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((a = l.stateNode), a !== null && Pc(a)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var J = null,
    dl = !1;
  function $l(l, a, t) {
    for (t = t.child; t !== null; ) yv(l, a, t), (t = t.sibling);
  }
  function yv(l, a, t) {
    if (Dl && typeof Dl.onCommitFiberUnmount == "function")
      try {
        Dl.onCommitFiberUnmount(Xu, t);
      } catch {}
    switch (t.tag) {
      case 26:
        I || Kl(t, a),
          $l(l, a, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t));
        break;
      case 27:
        I || Kl(t, a);
        var u = J,
          n = dl;
        Ra(t.type) && ((J = t.stateNode), (dl = !1)),
          $l(l, a, t),
          bu(t.stateNode),
          (J = u),
          (dl = n);
        break;
      case 5:
        I || Kl(t, a);
      case 6:
        if (
          ((u = J),
          (n = dl),
          (J = null),
          $l(l, a, t),
          (J = u),
          (dl = n),
          J !== null)
        )
          if (dl)
            try {
              (J.nodeType === 9
                ? J.body
                : J.nodeName === "HTML"
                ? J.ownerDocument.body
                : J
              ).removeChild(t.stateNode);
            } catch (f) {
              Z(t, a, f);
            }
          else
            try {
              J.removeChild(t.stateNode);
            } catch (f) {
              Z(t, a, f);
            }
        break;
      case 18:
        J !== null &&
          (dl
            ? ((l = J),
              a0(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                t.stateNode
              ),
              jt(l))
            : a0(J, t.stateNode));
        break;
      case 4:
        (u = J),
          (n = dl),
          (J = t.stateNode.containerInfo),
          (dl = !0),
          $l(l, a, t),
          (J = u),
          (dl = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qa(2, t, a), I || Qa(4, t, a), $l(l, a, t);
        break;
      case 1:
        I ||
          (Kl(t, a),
          (u = t.stateNode),
          typeof u.componentWillUnmount == "function" && nv(t, a, u)),
          $l(l, a, t);
        break;
      case 21:
        $l(l, a, t);
        break;
      case 22:
        (I = (u = I) || t.memoizedState !== null), $l(l, a, t), (I = u);
        break;
      default:
        $l(l, a, t);
    }
  }
  function hv(l, a) {
    if (
      a.memoizedState === null &&
      ((l = a.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        jt(l);
      } catch (t) {
        Z(a, a.return, t);
      }
    }
  }
  function mv(l, a) {
    if (
      a.memoizedState === null &&
      ((l = a.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        jt(l);
      } catch (t) {
        Z(a, a.return, t);
      }
  }
  function Jh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new Vi()), a;
      case 22:
        return (
          (l = l.stateNode),
          (a = l._retryCache),
          a === null && (a = l._retryCache = new Vi()),
          a
        );
      default:
        throw Error(A(435, l.tag));
    }
  }
  function tn(l, a) {
    var t = Jh(l);
    a.forEach(function (u) {
      if (!t.has(u)) {
        t.add(u);
        var n = lm.bind(null, l, u);
        u.then(n, n);
      }
    });
  }
  function hl(l, a) {
    var t = a.deletions;
    if (t !== null)
      for (var u = 0; u < t.length; u++) {
        var n = t[u],
          f = l,
          c = a,
          e = c;
        l: for (; e !== null; ) {
          switch (e.tag) {
            case 27:
              if (Ra(e.type)) {
                (J = e.stateNode), (dl = !1);
                break l;
              }
              break;
            case 5:
              (J = e.stateNode), (dl = !1);
              break l;
            case 3:
            case 4:
              (J = e.stateNode.containerInfo), (dl = !0);
              break l;
          }
          e = e.return;
        }
        if (J === null) throw Error(A(160));
        yv(f, c, n),
          (J = null),
          (dl = !1),
          (f = n.alternate),
          f !== null && (f.return = null),
          (n.return = null);
      }
    if (a.subtreeFlags & 13886)
      for (a = a.child; a !== null; ) dv(a, l), (a = a.sibling);
  }
  var jl = null;
  function dv(l, a) {
    var t = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        hl(a, l),
          ml(l),
          u & 4 && (Qa(3, l, l.return), Vu(3, l), Qa(5, l, l.return));
        break;
      case 1:
        hl(a, l),
          ml(l),
          u & 512 && (I || t === null || Kl(t, t.return)),
          u & 64 &&
            rl &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((t = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = t === null ? u : t.concat(u)))));
        break;
      case 26:
        var n = jl;
        if (
          (hl(a, l),
          ml(l),
          u & 512 && (I || t === null || Kl(t, t.return)),
          u & 4)
        ) {
          var f = t !== null ? t.memoizedState : null;
          if (((u = l.memoizedState), t === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (t = l.memoizedProps),
                    (n = n.ownerDocument || n);
                  a: switch (u) {
                    case "title":
                      (f = n.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Zu] ||
                          f[cl] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = n.createElement(u)),
                          n.head.insertBefore(
                            f,
                            n.querySelector("head > title")
                          )),
                        vl(f, u, t),
                        (f[cl] = l),
                        ul(f),
                        (u = f);
                      break l;
                    case "link":
                      var c = i0("link", "href", n).get(u + (t.href || ""));
                      if (c) {
                        for (var e = 0; e < c.length; e++)
                          if (
                            ((f = c[e]),
                            f.getAttribute("href") ===
                              (t.href == null || t.href === ""
                                ? null
                                : t.href) &&
                              f.getAttribute("rel") ===
                                (t.rel == null ? null : t.rel) &&
                              f.getAttribute("title") ===
                                (t.title == null ? null : t.title) &&
                              f.getAttribute("crossorigin") ===
                                (t.crossOrigin == null ? null : t.crossOrigin))
                          ) {
                            c.splice(e, 1);
                            break a;
                          }
                      }
                      (f = n.createElement(u)),
                        vl(f, u, t),
                        n.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (c = i0("meta", "content", n).get(
                          u + (t.content || "")
                        ))
                      ) {
                        for (e = 0; e < c.length; e++)
                          if (
                            ((f = c[e]),
                            f.getAttribute("content") ===
                              (t.content == null ? null : "" + t.content) &&
                              f.getAttribute("name") ===
                                (t.name == null ? null : t.name) &&
                              f.getAttribute("property") ===
                                (t.property == null ? null : t.property) &&
                              f.getAttribute("http-equiv") ===
                                (t.httpEquiv == null ? null : t.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (t.charSet == null ? null : t.charSet))
                          ) {
                            c.splice(e, 1);
                            break a;
                          }
                      }
                      (f = n.createElement(u)),
                        vl(f, u, t),
                        n.head.appendChild(f);
                      break;
                    default:
                      throw Error(A(468, u));
                  }
                  (f[cl] = l), ul(f), (u = f);
                }
                l.stateNode = u;
              } else v0(n, l.type, l.stateNode);
            else l.stateNode = e0(n, u, l.memoizedProps);
          else
            f !== u
              ? (f === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : f.count--,
                u === null
                  ? v0(n, l.type, l.stateNode)
                  : e0(n, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                pf(l, l.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        hl(a, l),
          ml(l),
          u & 512 && (I || t === null || Kl(t, t.return)),
          t !== null && u & 4 && pf(l, l.memoizedProps, t.memoizedProps);
        break;
      case 5:
        if (
          (hl(a, l),
          ml(l),
          u & 512 && (I || t === null || Kl(t, t.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            st(n, "");
          } catch (T) {
            Z(l, l.return, T);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), pf(l, n, t !== null ? t.memoizedProps : n)),
          u & 1024 && (Lf = !0);
        break;
      case 6:
        if ((hl(a, l), ml(l), u & 4)) {
          if (l.stateNode === null) throw Error(A(162));
          (u = l.memoizedProps), (t = l.stateNode);
          try {
            t.nodeValue = u;
          } catch (T) {
            Z(l, l.return, T);
          }
        }
        break;
      case 3:
        if (
          ((Mn = null),
          (n = jl),
          (jl = Fn(a.containerInfo)),
          hl(a, l),
          (jl = n),
          ml(l),
          u & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            jt(a.containerInfo);
          } catch (T) {
            Z(l, l.return, T);
          }
        Lf && ((Lf = !1), Sv(l));
        break;
      case 4:
        (u = jl),
          (jl = Fn(l.stateNode.containerInfo)),
          hl(a, l),
          ml(l),
          (jl = u);
        break;
      case 12:
        hl(a, l), ml(l);
        break;
      case 31:
        hl(a, l),
          ml(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), tn(l, u)));
        break;
      case 13:
        hl(a, l),
          ml(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (hf = Ol()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), tn(l, u)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var i = t !== null && t.memoizedState !== null,
          m = rl,
          g = I;
        if (
          ((rl = m || n),
          (I = g || i),
          hl(a, l),
          (I = g),
          (rl = m),
          ml(l),
          u & 8192)
        )
          l: for (
            a = l.stateNode,
              a._visibility = n ? a._visibility & -2 : a._visibility | 1,
              n && (t === null || i || rl || I || Ka(l)),
              t = null,
              a = l;
            ;

          ) {
            if (a.tag === 5 || a.tag === 26) {
              if (t === null) {
                i = t = a;
                try {
                  if (((f = i.stateNode), n))
                    (c = f.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    e = i.stateNode;
                    var b = i.memoizedProps.style,
                      d =
                        b != null && b.hasOwnProperty("display")
                          ? b.display
                          : null;
                    e.style.display =
                      d == null || typeof d == "boolean" ? "" : ("" + d).trim();
                  }
                } catch (T) {
                  Z(i, i.return, T);
                }
              }
            } else if (a.tag === 6) {
              if (t === null) {
                i = a;
                try {
                  i.stateNode.nodeValue = n ? "" : i.memoizedProps;
                } catch (T) {
                  Z(i, i.return, T);
                }
              }
            } else if (a.tag === 18) {
              if (t === null) {
                i = a;
                try {
                  var S = i.stateNode;
                  n ? t0(S, !0) : t0(i.stateNode, !1);
                } catch (T) {
                  Z(i, i.return, T);
                }
              }
            } else if (
              ((a.tag !== 22 && a.tag !== 23) ||
                a.memoizedState === null ||
                a === l) &&
              a.child !== null
            ) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === l) break l;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break l;
              t === a && (t = null), (a = a.return);
            }
            t === a && (t = null),
              (a.sibling.return = a.return),
              (a = a.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((t = u.retryQueue),
            t !== null && ((u.retryQueue = null), tn(l, t))));
        break;
      case 19:
        hl(a, l),
          ml(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), tn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        hl(a, l), ml(l);
    }
  }
  function ml(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var t, u = l.return; u !== null; ) {
          if (cv(u)) {
            t = u;
            break;
          }
          u = u.return;
        }
        if (t == null) throw Error(A(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode,
              f = Kf(l);
            Vn(l, f, n);
            break;
          case 5:
            var c = t.stateNode;
            t.flags & 32 && (st(c, ""), (t.flags &= -33));
            var e = Kf(l);
            Vn(l, e, c);
            break;
          case 3:
          case 4:
            var i = t.stateNode.containerInfo,
              m = Kf(l);
            sc(l, m, i);
            break;
          default:
            throw Error(A(161));
        }
      } catch (g) {
        Z(l, l.return, g);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function Sv(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        Sv(a),
          a.tag === 5 && a.flags & 1024 && a.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function kl(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; ) iv(l, a.alternate, a), (a = a.sibling);
  }
  function Ka(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Qa(4, a, a.return), Ka(a);
          break;
        case 1:
          Kl(a, a.return);
          var t = a.stateNode;
          typeof t.componentWillUnmount == "function" && nv(a, a.return, t),
            Ka(a);
          break;
        case 27:
          bu(a.stateNode);
        case 26:
        case 5:
          Kl(a, a.return), Ka(a);
          break;
        case 22:
          a.memoizedState === null && Ka(a);
          break;
        case 30:
          Ka(a);
          break;
        default:
          Ka(a);
      }
      l = l.sibling;
    }
  }
  function Il(l, a, t) {
    for (t = t && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var u = a.alternate,
        n = l,
        f = a,
        c = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Il(n, f, t), Vu(4, f);
          break;
        case 1:
          if (
            (Il(n, f, t),
            (u = f),
            (n = u.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (m) {
              Z(u, u.return, m);
            }
          if (((u = f), (n = u.updateQueue), n !== null)) {
            var e = u.stateNode;
            try {
              var i = n.shared.hiddenCallbacks;
              if (i !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < i.length; n++)
                  h1(i[n], e);
            } catch (m) {
              Z(u, u.return, m);
            }
          }
          t && c & 64 && uv(f), du(f, f.return);
          break;
        case 27:
          ev(f);
        case 26:
        case 5:
          Il(n, f, t), t && u === null && c & 4 && fv(f), du(f, f.return);
          break;
        case 12:
          Il(n, f, t);
          break;
        case 31:
          Il(n, f, t), t && c & 4 && hv(n, f);
          break;
        case 13:
          Il(n, f, t), t && c & 4 && mv(n, f);
          break;
        case 22:
          f.memoizedState === null && Il(n, f, t), du(f, f.return);
          break;
        case 30:
          break;
        default:
          Il(n, f, t);
      }
      a = a.sibling;
    }
  }
  function Ye(l, a) {
    var t = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (t = l.memoizedState.cachePool.pool),
      (l = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (l = a.memoizedState.cachePool.pool),
      l !== t && (l != null && l.refCount++, t != null && Ru(t));
  }
  function se(l, a) {
    (l = null),
      a.alternate !== null && (l = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== l && (a.refCount++, l != null && Ru(l));
  }
  function Rl(l, a, t, u) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) gv(l, a, t, u), (a = a.sibling);
  }
  function gv(l, a, t, u) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Rl(l, a, t, u), n & 2048 && Vu(9, a);
        break;
      case 1:
        Rl(l, a, t, u);
        break;
      case 3:
        Rl(l, a, t, u),
          n & 2048 &&
            ((l = null),
            a.alternate !== null && (l = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== l && (a.refCount++, l != null && Ru(l)));
        break;
      case 12:
        if (n & 2048) {
          Rl(l, a, t, u), (l = a.stateNode);
          try {
            var f = a.memoizedProps,
              c = f.id,
              e = f.onPostCommit;
            typeof e == "function" &&
              e(
                c,
                a.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            Z(a, a.return, i);
          }
        } else Rl(l, a, t, u);
        break;
      case 31:
        Rl(l, a, t, u);
        break;
      case 13:
        Rl(l, a, t, u);
        break;
      case 23:
        break;
      case 22:
        (f = a.stateNode),
          (c = a.alternate),
          a.memoizedState !== null
            ? f._visibility & 2
              ? Rl(l, a, t, u)
              : Su(l, a)
            : f._visibility & 2
            ? Rl(l, a, t, u)
            : ((f._visibility |= 2),
              it(l, a, t, u, (a.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Ye(c, a);
        break;
      case 24:
        Rl(l, a, t, u), n & 2048 && se(a.alternate, a);
        break;
      default:
        Rl(l, a, t, u);
    }
  }
  function it(l, a, t, u, n) {
    for (
      n = n && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child;
      a !== null;

    ) {
      var f = l,
        c = a,
        e = t,
        i = u,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          it(f, c, e, i, n), Vu(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null
            ? g._visibility & 2
              ? it(f, c, e, i, n)
              : Su(f, c)
            : ((g._visibility |= 2), it(f, c, e, i, n)),
            n && m & 2048 && Ye(c.alternate, c);
          break;
        case 24:
          it(f, c, e, i, n), n && m & 2048 && se(c.alternate, c);
          break;
        default:
          it(f, c, e, i, n);
      }
      a = a.sibling;
    }
  }
  function Su(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var t = l,
          u = a,
          n = u.flags;
        switch (u.tag) {
          case 22:
            Su(t, u), n & 2048 && Ye(u.alternate, u);
            break;
          case 24:
            Su(t, u), n & 2048 && se(u.alternate, u);
            break;
          default:
            Su(t, u);
        }
        a = a.sibling;
      }
  }
  var nu = 8192;
  function et(l, a, t) {
    if (l.subtreeFlags & nu)
      for (l = l.child; l !== null; ) zv(l, a, t), (l = l.sibling);
  }
  function zv(l, a, t) {
    switch (l.tag) {
      case 26:
        et(l, a, t),
          l.flags & nu &&
            l.memoizedState !== null &&
            _m(t, jl, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        et(l, a, t);
        break;
      case 3:
      case 4:
        var u = jl;
        (jl = Fn(l.stateNode.containerInfo)), et(l, a, t), (jl = u);
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = nu), (nu = 16777216), et(l, a, t), (nu = u))
            : et(l, a, t));
        break;
      default:
        et(l, a, t);
    }
  }
  function bv(l) {
    var a = l.alternate;
    if (a !== null && ((l = a.child), l !== null)) {
      a.child = null;
      do (a = l.sibling), (l.sibling = null), (l = a);
      while (l !== null);
    }
  }
  function It(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var u = a[t];
          (tl = u), Tv(u, l);
        }
      bv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Av(l), (l = l.sibling);
  }
  function Av(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        It(l), l.flags & 2048 && Qa(9, l, l.return);
        break;
      case 3:
        It(l);
        break;
      case 12:
        It(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null &&
        a._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((a._visibility &= -3), Tn(l))
          : It(l);
        break;
      default:
        It(l);
    }
  }
  function Tn(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var t = 0; t < a.length; t++) {
          var u = a[t];
          (tl = u), Tv(u, l);
        }
      bv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((a = l), a.tag)) {
        case 0:
        case 11:
        case 15:
          Qa(8, a, a.return), Tn(a);
          break;
        case 22:
          (t = a.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), Tn(a));
          break;
        default:
          Tn(a);
      }
      l = l.sibling;
    }
  }
  function Tv(l, a) {
    for (; tl !== null; ) {
      var t = tl;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Qa(8, t, a);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var u = t.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Ru(t.memoizedState.cache);
      }
      if (((u = t.child), u !== null)) (u.return = t), (tl = u);
      else
        l: for (t = l; tl !== null; ) {
          u = tl;
          var n = u.sibling,
            f = u.return;
          if ((vv(u), u === t)) {
            tl = null;
            break l;
          }
          if (n !== null) {
            (n.return = f), (tl = n);
            break l;
          }
          tl = f;
        }
    }
  }
  var Wh = {
      getCacheForType: function (l) {
        var a = il(P),
          t = a.data.get(l);
        return t === void 0 && ((t = l()), a.data.set(l, t)), t;
      },
      cacheSignal: function () {
        return il(P).controller.signal;
      },
    },
    wh = typeof WeakMap == "function" ? WeakMap : Map,
    X = 0,
    V = null,
    B = null,
    _ = 0,
    Q = 0,
    Al = null,
    Ma = !1,
    Lt = !1,
    oe = !1,
    ya = 0,
    w = 0,
    Za = 0,
    Fa = 0,
    Xe = 0,
    Ml = 0,
    Qt = 0,
    gu = null,
    Sl = null,
    oc = !1,
    hf = 0,
    Ev = 0,
    xn = 1 / 0,
    pn = null,
    qa = null,
    ll = 0,
    _a = null,
    Zt = null,
    fa = 0,
    Xc = 0,
    Gc = null,
    Mv = null,
    zu = 0,
    Qc = null;
  function Hl() {
    return (X & 2) !== 0 && _ !== 0 ? _ & -_ : D.T !== null ? Qe() : Y0();
  }
  function Ov() {
    if (Ml === 0)
      if ((_ & 536870912) === 0 || Y) {
        var l = Wu;
        (Wu <<= 1), (Wu & 3932160) === 0 && (Wu = 262144), (Ml = l);
      } else Ml = 536870912;
    return (l = Bl.current), l !== null && (l.flags |= 32), Ml;
  }
  function gl(l, a, t) {
    ((l === V && (Q === 2 || Q === 9)) || l.cancelPendingCommit !== null) &&
      (Ct(l, 0), Oa(l, _, Ml, !1)),
      Qu(l, t),
      ((X & 2) === 0 || l !== V) &&
        (l === V && ((X & 2) === 0 && (Fa |= t), w === 4 && Oa(l, _, Ml, !1)),
        Wl(l));
  }
  function Dv(l, a, t) {
    if ((X & 6) !== 0) throw Error(A(327));
    var u = (!t && (a & 127) === 0 && (a & l.expiredLanes) === 0) || Gu(l, a),
      n = u ? kh(l, a) : Jf(l, a, !0),
      f = u;
    do {
      if (n === 0) {
        Lt && !u && Oa(l, a, 0, !1);
        break;
      } else {
        if (((t = l.current.alternate), f && !Fh(t))) {
          (n = Jf(l, a, !1)), (f = !1);
          continue;
        }
        if (n === 2) {
          if (((f = a), l.errorRecoveryDisabledLanes & f)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            a = c;
            l: {
              var e = l;
              n = gu;
              var i = e.current.memoizedState.isDehydrated;
              if ((i && (Ct(e, c).flags |= 256), (c = Jf(e, c, !1)), c !== 2)) {
                if (oe && !i) {
                  (e.errorRecoveryDisabledLanes |= f), (Fa |= f), (n = 4);
                  break l;
                }
                (f = Sl),
                  (Sl = n),
                  f !== null && (Sl === null ? (Sl = f) : Sl.push.apply(Sl, f));
              }
              n = c;
            }
            if (((f = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Ct(l, 0), Oa(l, a, 0, !0);
          break;
        }
        l: {
          switch (((u = l), (f = n), f)) {
            case 0:
            case 1:
              throw Error(A(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              Oa(u, a, Ml, !Ma);
              break l;
            case 2:
              Sl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(A(329));
          }
          if ((a & 62914560) === a && ((n = hf + 300 - Ol()), 10 < n)) {
            if ((Oa(u, a, Ml, !Ma), rn(u, 0, !0) !== 0)) break l;
            (fa = a),
              (u.timeoutHandle = Kv(
                xi.bind(
                  null,
                  u,
                  t,
                  Sl,
                  pn,
                  oc,
                  a,
                  Ml,
                  Fa,
                  Qt,
                  Ma,
                  f,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break l;
          }
          xi(u, t, Sl, pn, oc, a, Ml, Fa, Qt, Ma, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Wl(l);
  }
  function xi(l, a, t, u, n, f, c, e, i, m, g, b, d, S) {
    if (
      ((l.timeoutHandle = -1),
      (b = a.subtreeFlags),
      b & 8192 || (b & 16785408) === 16785408)
    ) {
      (b = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: aa,
      }),
        zv(a, f, b);
      var T =
        (f & 62914560) === f ? hf - Ol() : (f & 4194048) === f ? Ev - Ol() : 0;
      if (((T = Ym(b, T)), T !== null)) {
        (fa = f),
          (l.cancelPendingCommit = T(
            Ki.bind(null, l, a, f, t, u, n, c, e, i, g, b, null, d, S)
          )),
          Oa(l, f, c, !m);
        return;
      }
    }
    Ki(l, a, f, t, u, n, c, e, i);
  }
  function Fh(l) {
    for (var a = l; ; ) {
      var t = a.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        a.flags & 16384 &&
        ((t = a.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var u = 0; u < t.length; u++) {
          var n = t[u],
            f = n.getSnapshot;
          n = n.value;
          try {
            if (!Nl(f(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = a.child), a.subtreeFlags & 16384 && t !== null))
        (t.return = a), (a = t);
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    }
    return !0;
  }
  function Oa(l, a, t, u) {
    (a &= ~Xe),
      (a &= ~Fa),
      (l.suspendedLanes |= a),
      (l.pingedLanes &= ~a),
      u && (l.warmLanes |= a),
      (u = l.expirationTimes);
    for (var n = a; 0 < n; ) {
      var f = 31 - Ul(n),
        c = 1 << f;
      (u[f] = -1), (n &= ~c);
    }
    t !== 0 && B0(l, t, a);
  }
  function mf() {
    return (X & 6) === 0 ? (xu(0, !1), !1) : !0;
  }
  function Ge() {
    if (B !== null) {
      if (Q === 0) var l = B.return;
      else (l = B), (ta = nt = null), Te(l), (Nt = null), (Uu = 0), (l = B);
      for (; l !== null; ) tv(l.alternate, l), (l = l.return);
      B = null;
    }
  }
  function Ct(l, a) {
    var t = l.timeoutHandle;
    t !== -1 && ((l.timeoutHandle = -1), mm(t)),
      (t = l.cancelPendingCommit),
      t !== null && ((l.cancelPendingCommit = null), t()),
      (fa = 0),
      Ge(),
      (V = l),
      (B = t = ua(l.current, null)),
      (_ = a),
      (Q = 0),
      (Al = null),
      (Ma = !1),
      (Lt = Gu(l, a)),
      (oe = !1),
      (Qt = Ml = Xe = Fa = Za = w = 0),
      (Sl = gu = null),
      (oc = !1),
      (a & 8) !== 0 && (a |= a & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= a; 0 < u; ) {
        var n = 31 - Ul(u),
          f = 1 << n;
        (a |= l[n]), (u &= ~f);
      }
    return (ya = a), uf(), t;
  }
  function Uv(l, a) {
    (U = null),
      (D.H = Nu),
      a === Kt || a === ff
        ? ((a = Ti()), (Q = 3))
        : a === me
        ? ((a = Ti()), (Q = 4))
        : (Q =
            a === qe
              ? 8
              : a !== null &&
                typeof a == "object" &&
                typeof a.then == "function"
              ? 6
              : 1),
      (Al = a),
      B === null && ((w = 1), Rn(l, Xl(a, l.current)));
  }
  function Hv() {
    var l = Bl.current;
    return l === null
      ? !0
      : (_ & 4194048) === _
      ? Ql === null
      : (_ & 62914560) === _ || (_ & 536870912) !== 0
      ? l === Ql
      : !1;
  }
  function Nv() {
    var l = D.H;
    return (D.H = Nu), l === null ? Nu : l;
  }
  function Bv() {
    var l = D.A;
    return (D.A = Wh), l;
  }
  function Kn() {
    (w = 4),
      Ma || ((_ & 4194048) !== _ && Bl.current !== null) || (Lt = !0),
      ((Za & 134217727) === 0 && (Fa & 134217727) === 0) ||
        V === null ||
        Oa(V, _, Ml, !1);
  }
  function Jf(l, a, t) {
    var u = X;
    X |= 2;
    var n = Nv(),
      f = Bv();
    (V !== l || _ !== a) && ((pn = null), Ct(l, a)), (a = !1);
    var c = w;
    l: do
      try {
        if (Q !== 0 && B !== null) {
          var e = B,
            i = Al;
          switch (Q) {
            case 8:
              Ge(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Bl.current === null && (a = !0);
              var m = Q;
              if (((Q = 0), (Al = null), Mt(l, e, i, m), t && Lt)) {
                c = 0;
                break l;
              }
              break;
            default:
              (m = Q), (Q = 0), (Al = null), Mt(l, e, i, m);
          }
        }
        $h(), (c = w);
        break;
      } catch (g) {
        Uv(l, g);
      }
    while (!0);
    return (
      a && l.shellSuspendCounter++,
      (ta = nt = null),
      (X = u),
      (D.H = n),
      (D.A = f),
      B === null && ((V = null), (_ = 0), uf()),
      c
    );
  }
  function $h() {
    for (; B !== null; ) qv(B);
  }
  function kh(l, a) {
    var t = X;
    X |= 2;
    var u = Nv(),
      n = Bv();
    V !== l || _ !== a
      ? ((pn = null), (xn = Ol() + 500), Ct(l, a))
      : (Lt = Gu(l, a));
    l: do
      try {
        if (Q !== 0 && B !== null) {
          a = B;
          var f = Al;
          a: switch (Q) {
            case 1:
              (Q = 0), (Al = null), Mt(l, a, f, 1);
              break;
            case 2:
            case 9:
              if (Ai(f)) {
                (Q = 0), (Al = null), pi(a);
                break;
              }
              (a = function () {
                (Q !== 2 && Q !== 9) || V !== l || (Q = 7), Wl(l);
              }),
                f.then(a, a);
              break l;
            case 3:
              Q = 7;
              break l;
            case 4:
              Q = 5;
              break l;
            case 7:
              Ai(f)
                ? ((Q = 0), (Al = null), pi(a))
                : ((Q = 0), (Al = null), Mt(l, a, f, 7));
              break;
            case 5:
              var c = null;
              switch (B.tag) {
                case 26:
                  c = B.memoizedState;
                case 5:
                case 27:
                  var e = B;
                  if (c ? Fv(c) : e.stateNode.complete) {
                    (Q = 0), (Al = null);
                    var i = e.sibling;
                    if (i !== null) B = i;
                    else {
                      var m = e.return;
                      m !== null ? ((B = m), df(m)) : (B = null);
                    }
                    break a;
                  }
              }
              (Q = 0), (Al = null), Mt(l, a, f, 5);
              break;
            case 6:
              (Q = 0), (Al = null), Mt(l, a, f, 6);
              break;
            case 8:
              Ge(), (w = 6);
              break l;
            default:
              throw Error(A(462));
          }
        }
        Ih();
        break;
      } catch (g) {
        Uv(l, g);
      }
    while (!0);
    return (
      (ta = nt = null),
      (D.H = u),
      (D.A = n),
      (X = t),
      B !== null ? 0 : ((V = null), (_ = 0), uf(), w)
    );
  }
  function Ih() {
    for (; B !== null && !Ey(); ) qv(B);
  }
  function qv(l) {
    var a = av(l.alternate, l, ya);
    (l.memoizedProps = l.pendingProps), a === null ? df(l) : (B = a);
  }
  function pi(l) {
    var a = l,
      t = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = Qi(t, a, a.pendingProps, a.type, void 0, _);
        break;
      case 11:
        a = Qi(t, a, a.pendingProps, a.type.render, a.ref, _);
        break;
      case 5:
        Te(a);
      default:
        tv(t, a), (a = B = t1(a, ya)), (a = av(t, a, ya));
    }
    (l.memoizedProps = l.pendingProps), a === null ? df(l) : (B = a);
  }
  function Mt(l, a, t, u) {
    (ta = nt = null), Te(a), (Nt = null), (Uu = 0);
    var n = a.return;
    try {
      if (jh(l, n, a, t, _)) {
        (w = 1), Rn(l, Xl(t, l.current)), (B = null);
        return;
      }
    } catch (f) {
      if (n !== null) throw ((B = n), f);
      (w = 1), Rn(l, Xl(t, l.current)), (B = null);
      return;
    }
    a.flags & 32768
      ? (Y || u === 1
          ? (l = !0)
          : Lt || (_ & 536870912) !== 0
          ? (l = !1)
          : ((Ma = l = !0),
            (u === 2 || u === 9 || u === 3 || u === 6) &&
              ((u = Bl.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        _v(a, l))
      : df(a);
  }
  function df(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        _v(a, Ma);
        return;
      }
      l = a.return;
      var t = ph(a.alternate, a, ya);
      if (t !== null) {
        B = t;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        B = a;
        return;
      }
      B = a = l;
    } while (a !== null);
    w === 0 && (w = 5);
  }
  function _v(l, a) {
    do {
      var t = Kh(l.alternate, l);
      if (t !== null) {
        (t.flags &= 32767), (B = t);
        return;
      }
      if (
        ((t = l.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !a && ((l = l.sibling), l !== null))
      ) {
        B = l;
        return;
      }
      B = l = t;
    } while (l !== null);
    (w = 6), (B = null);
  }
  function Ki(l, a, t, u, n, f, c, e, i) {
    l.cancelPendingCommit = null;
    do Sf();
    while (ll !== 0);
    if ((X & 6) !== 0) throw Error(A(327));
    if (a !== null) {
      if (a === l.current) throw Error(A(177));
      if (
        ((f = a.lanes | a.childLanes),
        (f |= fe),
        Yy(l, t, f, c, e, i),
        l === V && ((B = V = null), (_ = 0)),
        (Zt = a),
        (_a = l),
        (fa = t),
        (Xc = f),
        (Gc = n),
        (Mv = u),
        (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            am(Bn, function () {
              return Gv(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (a.flags & 13878) !== 0),
        (a.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = D.T), (D.T = null), (n = G.p), (G.p = 2), (c = X), (X |= 4);
        try {
          Lh(l, a, t);
        } finally {
          (X = c), (G.p = n), (D.T = u);
        }
      }
      (ll = 1), Yv(), sv(), ov();
    }
  }
  function Yv() {
    if (ll === 1) {
      ll = 0;
      var l = _a,
        a = Zt,
        t = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || t) {
        (t = D.T), (D.T = null);
        var u = G.p;
        G.p = 2;
        var n = X;
        X |= 4;
        try {
          dv(a, l);
          var f = jc,
            c = F0(l.containerInfo),
            e = f.focusedElem,
            i = f.selectionRange;
          if (
            c !== e &&
            e &&
            e.ownerDocument &&
            w0(e.ownerDocument.documentElement, e)
          ) {
            if (i !== null && ne(e)) {
              var m = i.start,
                g = i.end;
              if ((g === void 0 && (g = m), "selectionStart" in e))
                (e.selectionStart = m),
                  (e.selectionEnd = Math.min(g, e.value.length));
              else {
                var b = e.ownerDocument || document,
                  d = (b && b.defaultView) || window;
                if (d.getSelection) {
                  var S = d.getSelection(),
                    T = e.textContent.length,
                    O = Math.min(i.start, T),
                    C = i.end === void 0 ? O : Math.min(i.end, T);
                  !S.extend && O > C && ((c = C), (C = O), (O = c));
                  var y = hi(e, O),
                    v = hi(e, C);
                  if (
                    y &&
                    v &&
                    (S.rangeCount !== 1 ||
                      S.anchorNode !== y.node ||
                      S.anchorOffset !== y.offset ||
                      S.focusNode !== v.node ||
                      S.focusOffset !== v.offset)
                  ) {
                    var h = b.createRange();
                    h.setStart(y.node, y.offset),
                      S.removeAllRanges(),
                      O > C
                        ? (S.addRange(h), S.extend(v.node, v.offset))
                        : (h.setEnd(v.node, v.offset), S.addRange(h));
                  }
                }
              }
            }
            for (b = [], S = e; (S = S.parentNode); )
              S.nodeType === 1 &&
                b.push({ element: S, left: S.scrollLeft, top: S.scrollTop });
            for (
              typeof e.focus == "function" && e.focus(), e = 0;
              e < b.length;
              e++
            ) {
              var z = b[e];
              (z.element.scrollLeft = z.left), (z.element.scrollTop = z.top);
            }
          }
          (In = !!Rc), (jc = Rc = null);
        } finally {
          (X = n), (G.p = u), (D.T = t);
        }
      }
      (l.current = a), (ll = 2);
    }
  }
  function sv() {
    if (ll === 2) {
      ll = 0;
      var l = _a,
        a = Zt,
        t = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || t) {
        (t = D.T), (D.T = null);
        var u = G.p;
        G.p = 2;
        var n = X;
        X |= 4;
        try {
          iv(l, a.alternate, a);
        } finally {
          (X = n), (G.p = u), (D.T = t);
        }
      }
      ll = 3;
    }
  }
  function ov() {
    if (ll === 4 || ll === 3) {
      (ll = 0), My();
      var l = _a,
        a = Zt,
        t = fa,
        u = Mv;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0
        ? (ll = 5)
        : ((ll = 0), (Zt = _a = null), Xv(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (qa = null),
        Ic(t),
        (a = a.stateNode),
        Dl && typeof Dl.onCommitFiberRoot == "function")
      )
        try {
          Dl.onCommitFiberRoot(Xu, a, void 0, (a.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (a = D.T), (n = G.p), (G.p = 2), (D.T = null);
        try {
          for (var f = l.onRecoverableError, c = 0; c < u.length; c++) {
            var e = u[c];
            f(e.value, { componentStack: e.stack });
          }
        } finally {
          (D.T = a), (G.p = n);
        }
      }
      (fa & 3) !== 0 && Sf(),
        Wl(l),
        (n = l.pendingLanes),
        (t & 261930) !== 0 && (n & 42) !== 0
          ? l === Qc
            ? zu++
            : ((zu = 0), (Qc = l))
          : (zu = 0),
        xu(0, !1);
    }
  }
  function Xv(l, a) {
    (l.pooledCacheLanes &= a) === 0 &&
      ((a = l.pooledCache), a != null && ((l.pooledCache = null), Ru(a)));
  }
  function Sf() {
    return Yv(), sv(), ov(), Gv();
  }
  function Gv() {
    if (ll !== 5) return !1;
    var l = _a,
      a = Xc;
    Xc = 0;
    var t = Ic(fa),
      u = D.T,
      n = G.p;
    try {
      (G.p = 32 > t ? 32 : t), (D.T = null), (t = Gc), (Gc = null);
      var f = _a,
        c = fa;
      if (((ll = 0), (Zt = _a = null), (fa = 0), (X & 6) !== 0))
        throw Error(A(331));
      var e = X;
      if (
        ((X |= 4),
        Av(f.current),
        gv(f, f.current, c, t),
        (X = e),
        xu(0, !1),
        Dl && typeof Dl.onPostCommitFiberRoot == "function")
      )
        try {
          Dl.onPostCommitFiberRoot(Xu, f);
        } catch {}
      return !0;
    } finally {
      (G.p = n), (D.T = u), Xv(l, a);
    }
  }
  function Li(l, a, t) {
    (a = Xl(t, a)),
      (a = qc(l.stateNode, a, 2)),
      (l = Ba(l, a, 2)),
      l !== null && (Qu(l, 2), Wl(l));
  }
  function Z(l, a, t) {
    if (l.tag === 3) Li(l, l, t);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          Li(a, l, t);
          break;
        } else if (a.tag === 1) {
          var u = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (qa === null || !qa.has(u)))
          ) {
            (l = Xl(t, l)),
              (t = $1(2)),
              (u = Ba(a, t, 2)),
              u !== null && (k1(t, u, a, l), Qu(u, 2), Wl(u));
            break;
          }
        }
        a = a.return;
      }
  }
  function Wf(l, a, t) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new wh();
      var n = new Set();
      u.set(a, n);
    } else (n = u.get(a)), n === void 0 && ((n = new Set()), u.set(a, n));
    n.has(t) ||
      ((oe = !0), n.add(t), (l = Ph.bind(null, l, a, t)), a.then(l, l));
  }
  function Ph(l, a, t) {
    var u = l.pingCache;
    u !== null && u.delete(a),
      (l.pingedLanes |= l.suspendedLanes & t),
      (l.warmLanes &= ~t),
      V === l &&
        (_ & t) === t &&
        (w === 4 || (w === 3 && (_ & 62914560) === _ && 300 > Ol() - hf)
          ? (X & 2) === 0 && Ct(l, 0)
          : (Xe |= t),
        Qt === _ && (Qt = 0)),
      Wl(l);
  }
  function Qv(l, a) {
    a === 0 && (a = N0()), (l = ut(l, a)), l !== null && (Qu(l, a), Wl(l));
  }
  function rh(l) {
    var a = l.memoizedState,
      t = 0;
    a !== null && (t = a.retryLane), Qv(l, t);
  }
  function lm(l, a) {
    var t = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          n = l.memoizedState;
        n !== null && (t = n.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(A(314));
    }
    u !== null && u.delete(a), Qv(l, t);
  }
  function am(l, a) {
    return $c(l, a);
  }
  var Ln = null,
    vt = null,
    Zc = !1,
    Jn = !1,
    wf = !1,
    Da = 0;
  function Wl(l) {
    l !== vt &&
      l.next === null &&
      (vt === null ? (Ln = vt = l) : (vt = vt.next = l)),
      (Jn = !0),
      Zc || ((Zc = !0), um());
  }
  function xu(l, a) {
    if (!wf && Jn) {
      wf = !0;
      do
        for (var t = !1, u = Ln; u !== null; ) {
          if (!a)
            if (l !== 0) {
              var n = u.pendingLanes;
              if (n === 0) var f = 0;
              else {
                var c = u.suspendedLanes,
                  e = u.pingedLanes;
                (f = (1 << (31 - Ul(42 | l) + 1)) - 1),
                  (f &= n & ~(c & ~e)),
                  (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
              }
              f !== 0 && ((t = !0), Ji(u, f));
            } else
              (f = _),
                (f = rn(
                  u,
                  u === V ? f : 0,
                  u.cancelPendingCommit !== null || u.timeoutHandle !== -1
                )),
                (f & 3) === 0 || Gu(u, f) || ((t = !0), Ji(u, f));
          u = u.next;
        }
      while (t);
      wf = !1;
    }
  }
  function tm() {
    Zv();
  }
  function Zv() {
    Jn = Zc = !1;
    var l = 0;
    Da !== 0 && hm() && (l = Da);
    for (var a = Ol(), t = null, u = Ln; u !== null; ) {
      var n = u.next,
        f = Cv(u, a);
      f === 0
        ? ((u.next = null),
          t === null ? (Ln = n) : (t.next = n),
          n === null && (vt = t))
        : ((t = u), (l !== 0 || (f & 3) !== 0) && (Jn = !0)),
        (u = n);
    }
    (ll !== 0 && ll !== 5) || xu(l, !1), Da !== 0 && (Da = 0);
  }
  function Cv(l, a) {
    for (
      var t = l.suspendedLanes,
        u = l.pingedLanes,
        n = l.expirationTimes,
        f = l.pendingLanes & -62914561;
      0 < f;

    ) {
      var c = 31 - Ul(f),
        e = 1 << c,
        i = n[c];
      i === -1
        ? ((e & t) === 0 || (e & u) !== 0) && (n[c] = _y(e, a))
        : i <= a && (l.expiredLanes |= e),
        (f &= ~e);
    }
    if (
      ((a = V),
      (t = _),
      (t = rn(
        l,
        l === a ? t : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (u = l.callbackNode),
      t === 0 ||
        (l === a && (Q === 2 || Q === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Of(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Gu(l, t)) {
      if (((a = t & -t), a === l.callbackPriority)) return a;
      switch ((u !== null && Of(u), Ic(t))) {
        case 2:
        case 8:
          t = U0;
          break;
        case 32:
          t = Bn;
          break;
        case 268435456:
          t = H0;
          break;
        default:
          t = Bn;
      }
      return (
        (u = Rv.bind(null, l)),
        (t = $c(t, u)),
        (l.callbackPriority = a),
        (l.callbackNode = t),
        a
      );
    }
    return (
      u !== null && u !== null && Of(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Rv(l, a) {
    if (ll !== 0 && ll !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var t = l.callbackNode;
    if (Sf() && l.callbackNode !== t) return null;
    var u = _;
    return (
      (u = rn(
        l,
        l === V ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      u === 0
        ? null
        : (Dv(l, u, a),
          Cv(l, Ol()),
          l.callbackNode != null && l.callbackNode === t
            ? Rv.bind(null, l)
            : null)
    );
  }
  function Ji(l, a) {
    if (Sf()) return null;
    Dv(l, a, !0);
  }
  function um() {
    dm(function () {
      (X & 6) !== 0 ? $c(D0, tm) : Zv();
    });
  }
  function Qe() {
    if (Da === 0) {
      var l = ot;
      l === 0 && ((l = Ju), (Ju <<= 1), (Ju & 261888) === 0 && (Ju = 256)),
        (Da = l);
    }
    return Da;
  }
  function Wi(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : yn("" + l);
  }
  function wi(l, a) {
    var t = a.ownerDocument.createElement("input");
    return (
      (t.name = a.name),
      (t.value = a.value),
      l.id && t.setAttribute("form", l.id),
      a.parentNode.insertBefore(t, a),
      (l = new FormData(l)),
      t.parentNode.removeChild(t),
      l
    );
  }
  function nm(l, a, t, u, n) {
    if (a === "submit" && t && t.stateNode === n) {
      var f = Wi((n[zl] || null).action),
        c = u.submitter;
      c &&
        ((a = (a = c[zl] || null)
          ? Wi(a.formAction)
          : c.getAttribute("formAction")),
        a !== null && ((f = a), (c = null)));
      var e = new lf("action", "action", null, u, n);
      l.push({
        event: e,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Da !== 0) {
                  var i = c ? wi(n, c) : new FormData(n);
                  Nc(
                    t,
                    { pending: !0, data: i, method: n.method, action: f },
                    null,
                    i
                  );
                }
              } else
                typeof f == "function" &&
                  (e.preventDefault(),
                  (i = c ? wi(n, c) : new FormData(n)),
                  Nc(
                    t,
                    { pending: !0, data: i, method: n.method, action: f },
                    f,
                    i
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (un = 0; un < Sc.length; un++)
    (nn = Sc[un]),
      (Fi = nn.toLowerCase()),
      ($i = nn[0].toUpperCase() + nn.slice(1)),
      Vl(Fi, "on" + $i);
  var nn, Fi, $i, un;
  Vl(k0, "onAnimationEnd");
  Vl(I0, "onAnimationIteration");
  Vl(P0, "onAnimationStart");
  Vl("dblclick", "onDoubleClick");
  Vl("focusin", "onFocus");
  Vl("focusout", "onBlur");
  Vl(Oh, "onTransitionRun");
  Vl(Dh, "onTransitionStart");
  Vl(Uh, "onTransitionCancel");
  Vl(r0, "onTransitionEnd");
  Yt("onMouseEnter", ["mouseout", "mouseover"]);
  Yt("onMouseLeave", ["mouseout", "mouseover"]);
  Yt("onPointerEnter", ["pointerout", "pointerover"]);
  Yt("onPointerLeave", ["pointerout", "pointerover"]);
  lt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  lt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  lt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  lt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  lt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Bu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    fm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Bu)
    );
  function jv(l, a) {
    a = (a & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var u = l[t],
        n = u.event;
      u = u.listeners;
      l: {
        var f = void 0;
        if (a)
          for (var c = u.length - 1; 0 <= c; c--) {
            var e = u[c],
              i = e.instance,
              m = e.currentTarget;
            if (((e = e.listener), i !== f && n.isPropagationStopped()))
              break l;
            (f = e), (n.currentTarget = m);
            try {
              f(n);
            } catch (g) {
              _n(g);
            }
            (n.currentTarget = null), (f = i);
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((e = u[c]),
              (i = e.instance),
              (m = e.currentTarget),
              (e = e.listener),
              i !== f && n.isPropagationStopped())
            )
              break l;
            (f = e), (n.currentTarget = m);
            try {
              f(n);
            } catch (g) {
              _n(g);
            }
            (n.currentTarget = null), (f = i);
          }
      }
    }
  }
  function N(l, a) {
    var t = a[cc];
    t === void 0 && (t = a[cc] = new Set());
    var u = l + "__bubble";
    t.has(u) || (Vv(a, l, 2, !1), t.add(u));
  }
  function Ff(l, a, t) {
    var u = 0;
    a && (u |= 4), Vv(t, l, u, a);
  }
  var fn = "_reactListening" + Math.random().toString(36).slice(2);
  function Ze(l) {
    if (!l[fn]) {
      (l[fn] = !0),
        s0.forEach(function (t) {
          t !== "selectionchange" && (fm.has(t) || Ff(t, !1, l), Ff(t, !0, l));
        });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[fn] || ((a[fn] = !0), Ff("selectionchange", !1, a));
    }
  }
  function Vv(l, a, t, u) {
    switch (rv(a)) {
      case 2:
        var n = Xm;
        break;
      case 8:
        n = Gm;
        break;
      default:
        n = Ve;
    }
    (t = n.bind(null, a, t, l)),
      (n = void 0),
      !hc ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (n = !0),
      u
        ? n !== void 0
          ? l.addEventListener(a, t, { capture: !0, passive: n })
          : l.addEventListener(a, t, !0)
        : n !== void 0
        ? l.addEventListener(a, t, { passive: n })
        : l.addEventListener(a, t, !1);
  }
  function $f(l, a, t, u, n) {
    var f = u;
    if ((a & 1) === 0 && (a & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var e = u.stateNode.containerInfo;
          if (e === n) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; e !== null; ) {
            if (((c = mt(e)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = f = c;
              continue l;
            }
            e = e.parentNode;
          }
        }
        u = u.return;
      }
    j0(function () {
      var m = f,
        g = le(t),
        b = [];
      l: {
        var d = l1.get(l);
        if (d !== void 0) {
          var S = lf,
            T = l;
          switch (l) {
            case "keypress":
              if (mn(t) === 0) break l;
            case "keydown":
            case "keyup":
              S = lh;
              break;
            case "focusin":
              (T = "focus"), (S = Bf);
              break;
            case "focusout":
              (T = "blur"), (S = Bf);
              break;
            case "beforeblur":
            case "afterblur":
              S = Bf;
              break;
            case "click":
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = ti;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = py;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = uh;
              break;
            case k0:
            case I0:
            case P0:
              S = Jy;
              break;
            case r0:
              S = fh;
              break;
            case "scroll":
            case "scrollend":
              S = Vy;
              break;
            case "wheel":
              S = eh;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = ni;
              break;
            case "toggle":
            case "beforetoggle":
              S = vh;
          }
          var O = (a & 4) !== 0,
            C = !O && (l === "scroll" || l === "scrollend"),
            y = O ? (d !== null ? d + "Capture" : null) : d;
          O = [];
          for (var v = m, h; v !== null; ) {
            var z = v;
            if (
              ((h = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                h === null ||
                y === null ||
                ((z = Tu(v, y)), z != null && O.push(qu(v, z, h))),
              C)
            )
              break;
            v = v.return;
          }
          0 < O.length &&
            ((d = new S(d, T, null, t, g)), b.push({ event: d, listeners: O }));
        }
      }
      if ((a & 7) === 0) {
        l: {
          if (
            ((d = l === "mouseover" || l === "pointerover"),
            (S = l === "mouseout" || l === "pointerout"),
            d &&
              t !== yc &&
              (T = t.relatedTarget || t.fromElement) &&
              (mt(T) || T[Vt]))
          )
            break l;
          if (
            (S || d) &&
            ((d =
              g.window === g
                ? g
                : (d = g.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
            S
              ? ((T = t.relatedTarget || t.toElement),
                (S = m),
                (T = T ? mt(T) : null),
                T !== null &&
                  ((C = ou(T)),
                  (O = T.tag),
                  T !== C || (O !== 5 && O !== 27 && O !== 6)) &&
                  (T = null))
              : ((S = null), (T = m)),
            S !== T)
          ) {
            if (
              ((O = ti),
              (z = "onMouseLeave"),
              (y = "onMouseEnter"),
              (v = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((O = ni),
                (z = "onPointerLeave"),
                (y = "onPointerEnter"),
                (v = "pointer")),
              (C = S == null ? d : tu(S)),
              (h = T == null ? d : tu(T)),
              (d = new O(z, v + "leave", S, t, g)),
              (d.target = C),
              (d.relatedTarget = h),
              (z = null),
              mt(g) === m &&
                ((O = new O(y, v + "enter", T, t, g)),
                (O.target = h),
                (O.relatedTarget = C),
                (z = O)),
              (C = z),
              S && T)
            )
              a: {
                for (O = cm, y = S, v = T, h = 0, z = y; z; z = O(z)) h++;
                z = 0;
                for (var M = v; M; M = O(M)) z++;
                for (; 0 < h - z; ) (y = O(y)), h--;
                for (; 0 < z - h; ) (v = O(v)), z--;
                for (; h--; ) {
                  if (y === v || (v !== null && y === v.alternate)) {
                    O = y;
                    break a;
                  }
                  (y = O(y)), (v = O(v));
                }
                O = null;
              }
            else O = null;
            S !== null && ki(b, d, S, O, !1),
              T !== null && C !== null && ki(b, C, T, O, !0);
          }
        }
        l: {
          if (
            ((d = m ? tu(m) : window),
            (S = d.nodeName && d.nodeName.toLowerCase()),
            S === "select" || (S === "input" && d.type === "file"))
          )
            var s = ii;
          else if (ei(d))
            if (J0) s = Th;
            else {
              s = bh;
              var E = zh;
            }
          else
            (S = d.nodeName),
              !S ||
              S.toLowerCase() !== "input" ||
              (d.type !== "checkbox" && d.type !== "radio")
                ? m && rc(m.elementType) && (s = ii)
                : (s = Ah);
          if (s && (s = s(l, m))) {
            L0(b, s, t, g);
            break l;
          }
          E && E(l, d, m),
            l === "focusout" &&
              m &&
              d.type === "number" &&
              m.memoizedProps.value != null &&
              vc(d, "number", d.value);
        }
        switch (((E = m ? tu(m) : window), l)) {
          case "focusin":
            (ei(E) || E.contentEditable === "true") &&
              ((gt = E), (mc = m), (eu = null));
            break;
          case "focusout":
            eu = mc = gt = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (dc = !1), mi(b, t, g);
            break;
          case "selectionchange":
            if (Mh) break;
          case "keydown":
          case "keyup":
            mi(b, t, g);
        }
        var H;
        if (ue)
          l: {
            switch (l) {
              case "compositionstart":
                var q = "onCompositionStart";
                break l;
              case "compositionend":
                q = "onCompositionEnd";
                break l;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break l;
            }
            q = void 0;
          }
        else
          St
            ? p0(l, t) && (q = "onCompositionEnd")
            : l === "keydown" &&
              t.keyCode === 229 &&
              (q = "onCompositionStart");
        q &&
          (x0 &&
            t.locale !== "ko" &&
            (St || q !== "onCompositionStart"
              ? q === "onCompositionEnd" && St && (H = V0())
              : ((Ea = g),
                (ae = "value" in Ea ? Ea.value : Ea.textContent),
                (St = !0))),
          (E = Wn(m, q)),
          0 < E.length &&
            ((q = new ui(q, l, null, t, g)),
            b.push({ event: q, listeners: E }),
            H ? (q.data = H) : ((H = K0(t)), H !== null && (q.data = H)))),
          (H = hh ? mh(l, t) : dh(l, t)) &&
            ((q = Wn(m, "onBeforeInput")),
            0 < q.length &&
              ((E = new ui("onBeforeInput", "beforeinput", null, t, g)),
              b.push({ event: E, listeners: q }),
              (E.data = H))),
          nm(b, l, m, t, g);
      }
      jv(b, a);
    });
  }
  function qu(l, a, t) {
    return { instance: l, listener: a, currentTarget: t };
  }
  function Wn(l, a) {
    for (var t = a + "Capture", u = []; l !== null; ) {
      var n = l,
        f = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          f === null ||
          ((n = Tu(l, t)),
          n != null && u.unshift(qu(l, n, f)),
          (n = Tu(l, a)),
          n != null && u.push(qu(l, n, f))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function cm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ki(l, a, t, u, n) {
    for (var f = a._reactName, c = []; t !== null && t !== u; ) {
      var e = t,
        i = e.alternate,
        m = e.stateNode;
      if (((e = e.tag), i !== null && i === u)) break;
      (e !== 5 && e !== 26 && e !== 27) ||
        m === null ||
        ((i = m),
        n
          ? ((m = Tu(t, f)), m != null && c.unshift(qu(t, m, i)))
          : n || ((m = Tu(t, f)), m != null && c.push(qu(t, m, i)))),
        (t = t.return);
    }
    c.length !== 0 && l.push({ event: a, listeners: c });
  }
  var em = /\r\n?/g,
    im = /\u0000|\uFFFD/g;
  function Ii(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        em,
        `
`
      )
      .replace(im, "");
  }
  function xv(l, a) {
    return (a = Ii(a)), Ii(l) === a;
  }
  function R(l, a, t, u, n, f) {
    switch (t) {
      case "children":
        typeof u == "string"
          ? a === "body" || (a === "textarea" && u === "") || st(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            a !== "body" &&
            st(l, "" + u);
        break;
      case "className":
        Fu(l, "class", u);
        break;
      case "tabIndex":
        Fu(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fu(l, t, u);
        break;
      case "style":
        R0(l, u, f);
        break;
      case "data":
        if (a !== "object") {
          Fu(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (a !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(t);
          break;
        }
        (u = yn("" + u)), l.setAttribute(t, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (t === "formAction"
              ? (a !== "input" && R(l, a, "name", n.name, n, null),
                R(l, a, "formEncType", n.formEncType, n, null),
                R(l, a, "formMethod", n.formMethod, n, null),
                R(l, a, "formTarget", n.formTarget, n, null))
              : (R(l, a, "encType", n.encType, n, null),
                R(l, a, "method", n.method, n, null),
                R(l, a, "target", n.target, n, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(t);
          break;
        }
        (u = yn("" + u)), l.setAttribute(t, u);
        break;
      case "onClick":
        u != null && (l.onclick = aa);
        break;
      case "onScroll":
        u != null && N("scroll", l);
        break;
      case "onScrollEnd":
        u != null && N("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(A(61));
          if (((t = u.__html), t != null)) {
            if (n.children != null) throw Error(A(60));
            l.innerHTML = t;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (t = yn("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(t, "" + u)
          : l.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(t, "")
          : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(t, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(t, u)
          : l.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(t, u)
          : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(t)
          : l.setAttribute(t, u);
        break;
      case "popover":
        N("beforetoggle", l), N("toggle", l), vn(l, "popover", u);
        break;
      case "xlinkActuate":
        wl(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        wl(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        wl(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        wl(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        wl(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        wl(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        wl(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        wl(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        wl(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        vn(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = Ry.get(t) || t), vn(l, t, u));
    }
  }
  function Cc(l, a, t, u, n, f) {
    switch (t) {
      case "style":
        R0(l, u, f);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(A(61));
          if (((t = u.__html), t != null)) {
            if (n.children != null) throw Error(A(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? st(l, u)
          : (typeof u == "number" || typeof u == "bigint") && st(l, "" + u);
        break;
      case "onScroll":
        u != null && N("scroll", l);
        break;
      case "onScrollEnd":
        u != null && N("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = aa);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!o0.hasOwnProperty(t))
          l: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((n = t.endsWith("Capture")),
              (a = t.slice(2, n ? t.length - 7 : void 0)),
              (f = l[zl] || null),
              (f = f != null ? f[t] : null),
              typeof f == "function" && l.removeEventListener(a, f, n),
              typeof u == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (t in l
                  ? (l[t] = null)
                  : l.hasAttribute(t) && l.removeAttribute(t)),
                l.addEventListener(a, u, n);
              break l;
            }
            t in l
              ? (l[t] = u)
              : u === !0
              ? l.setAttribute(t, "")
              : vn(l, t, u);
          }
    }
  }
  function vl(l, a, t) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        N("error", l), N("load", l);
        var u = !1,
          n = !1,
          f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var c = t[f];
            if (c != null)
              switch (f) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(A(137, a));
                default:
                  R(l, a, f, c, t, null);
              }
          }
        n && R(l, a, "srcSet", t.srcSet, t, null),
          u && R(l, a, "src", t.src, t, null);
        return;
      case "input":
        N("invalid", l);
        var e = (f = c = n = null),
          i = null,
          m = null;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var g = t[u];
            if (g != null)
              switch (u) {
                case "name":
                  n = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  m = g;
                  break;
                case "value":
                  f = g;
                  break;
                case "defaultValue":
                  e = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(A(137, a));
                  break;
                default:
                  R(l, a, u, g, t, null);
              }
          }
        Q0(l, f, e, i, m, c, n, !1);
        return;
      case "select":
        N("invalid", l), (u = c = f = null);
        for (n in t)
          if (t.hasOwnProperty(n) && ((e = t[n]), e != null))
            switch (n) {
              case "value":
                f = e;
                break;
              case "defaultValue":
                c = e;
                break;
              case "multiple":
                u = e;
              default:
                R(l, a, n, e, t, null);
            }
        (a = f),
          (t = c),
          (l.multiple = !!u),
          a != null ? Dt(l, !!u, a, !1) : t != null && Dt(l, !!u, t, !0);
        return;
      case "textarea":
        N("invalid", l), (f = n = u = null);
        for (c in t)
          if (t.hasOwnProperty(c) && ((e = t[c]), e != null))
            switch (c) {
              case "value":
                u = e;
                break;
              case "defaultValue":
                n = e;
                break;
              case "children":
                f = e;
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(A(91));
                break;
              default:
                R(l, a, c, e, t, null);
            }
        C0(l, u, n, f);
        return;
      case "option":
        for (i in t)
          if (t.hasOwnProperty(i) && ((u = t[i]), u != null))
            switch (i) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                R(l, a, i, u, t, null);
            }
        return;
      case "dialog":
        N("beforetoggle", l), N("toggle", l), N("cancel", l), N("close", l);
        break;
      case "iframe":
      case "object":
        N("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Bu.length; u++) N(Bu[u], l);
        break;
      case "image":
        N("error", l), N("load", l);
        break;
      case "details":
        N("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        N("error", l), N("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in t)
          if (t.hasOwnProperty(m) && ((u = t[m]), u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(A(137, a));
              default:
                R(l, a, m, u, t, null);
            }
        return;
      default:
        if (rc(a)) {
          for (g in t)
            t.hasOwnProperty(g) &&
              ((u = t[g]), u !== void 0 && Cc(l, a, g, u, t, void 0));
          return;
        }
    }
    for (e in t)
      t.hasOwnProperty(e) && ((u = t[e]), u != null && R(l, a, e, u, t, null));
  }
  function vm(l, a, t, u) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          f = null,
          c = null,
          e = null,
          i = null,
          m = null,
          g = null;
        for (S in t) {
          var b = t[S];
          if (t.hasOwnProperty(S) && b != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = b;
              default:
                u.hasOwnProperty(S) || R(l, a, S, null, u, b);
            }
        }
        for (var d in u) {
          var S = u[d];
          if (((b = t[d]), u.hasOwnProperty(d) && (S != null || b != null)))
            switch (d) {
              case "type":
                f = S;
                break;
              case "name":
                n = S;
                break;
              case "checked":
                m = S;
                break;
              case "defaultChecked":
                g = S;
                break;
              case "value":
                c = S;
                break;
              case "defaultValue":
                e = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(A(137, a));
                break;
              default:
                S !== b && R(l, a, d, S, u, b);
            }
        }
        ic(l, c, e, i, m, g, f, n);
        return;
      case "select":
        S = c = e = d = null;
        for (f in t)
          if (((i = t[f]), t.hasOwnProperty(f) && i != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                S = i;
              default:
                u.hasOwnProperty(f) || R(l, a, f, null, u, i);
            }
        for (n in u)
          if (
            ((f = u[n]),
            (i = t[n]),
            u.hasOwnProperty(n) && (f != null || i != null))
          )
            switch (n) {
              case "value":
                d = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "multiple":
                c = f;
              default:
                f !== i && R(l, a, n, f, u, i);
            }
        (a = e),
          (t = c),
          (u = S),
          d != null
            ? Dt(l, !!t, d, !1)
            : !!u != !!t &&
              (a != null ? Dt(l, !!t, a, !0) : Dt(l, !!t, t ? [] : "", !1));
        return;
      case "textarea":
        S = d = null;
        for (e in t)
          if (
            ((n = t[e]),
            t.hasOwnProperty(e) && n != null && !u.hasOwnProperty(e))
          )
            switch (e) {
              case "value":
                break;
              case "children":
                break;
              default:
                R(l, a, e, null, u, n);
            }
        for (c in u)
          if (
            ((n = u[c]),
            (f = t[c]),
            u.hasOwnProperty(c) && (n != null || f != null))
          )
            switch (c) {
              case "value":
                d = n;
                break;
              case "defaultValue":
                S = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(A(91));
                break;
              default:
                n !== f && R(l, a, c, n, u, f);
            }
        Z0(l, d, S);
        return;
      case "option":
        for (var T in t)
          if (
            ((d = t[T]),
            t.hasOwnProperty(T) && d != null && !u.hasOwnProperty(T))
          )
            switch (T) {
              case "selected":
                l.selected = !1;
                break;
              default:
                R(l, a, T, null, u, d);
            }
        for (i in u)
          if (
            ((d = u[i]),
            (S = t[i]),
            u.hasOwnProperty(i) && d !== S && (d != null || S != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  d && typeof d != "function" && typeof d != "symbol";
                break;
              default:
                R(l, a, i, d, u, S);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var O in t)
          (d = t[O]),
            t.hasOwnProperty(O) &&
              d != null &&
              !u.hasOwnProperty(O) &&
              R(l, a, O, null, u, d);
        for (m in u)
          if (
            ((d = u[m]),
            (S = t[m]),
            u.hasOwnProperty(m) && d !== S && (d != null || S != null))
          )
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(A(137, a));
                break;
              default:
                R(l, a, m, d, u, S);
            }
        return;
      default:
        if (rc(a)) {
          for (var C in t)
            (d = t[C]),
              t.hasOwnProperty(C) &&
                d !== void 0 &&
                !u.hasOwnProperty(C) &&
                Cc(l, a, C, void 0, u, d);
          for (g in u)
            (d = u[g]),
              (S = t[g]),
              !u.hasOwnProperty(g) ||
                d === S ||
                (d === void 0 && S === void 0) ||
                Cc(l, a, g, d, u, S);
          return;
        }
    }
    for (var y in t)
      (d = t[y]),
        t.hasOwnProperty(y) &&
          d != null &&
          !u.hasOwnProperty(y) &&
          R(l, a, y, null, u, d);
    for (b in u)
      (d = u[b]),
        (S = t[b]),
        !u.hasOwnProperty(b) ||
          d === S ||
          (d == null && S == null) ||
          R(l, a, b, d, u, S);
  }
  function Pi(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ym() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, a = 0, t = performance.getEntriesByType("resource"), u = 0;
        u < t.length;
        u++
      ) {
        var n = t[u],
          f = n.transferSize,
          c = n.initiatorType,
          e = n.duration;
        if (f && e && Pi(c)) {
          for (c = 0, e = n.responseEnd, u += 1; u < t.length; u++) {
            var i = t[u],
              m = i.startTime;
            if (m > e) break;
            var g = i.transferSize,
              b = i.initiatorType;
            g &&
              Pi(b) &&
              ((i = i.responseEnd), (c += g * (i < e ? 1 : (e - m) / (i - m))));
          }
          if ((--u, (a += (8 * (f + c)) / (n.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return a / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Rc = null,
    jc = null;
  function wn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function ri(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function pv(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function Vc(l, a) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      typeof a.children == "bigint" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var kf = null;
  function hm() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === kf
        ? !1
        : ((kf = l), !0)
      : ((kf = null), !1);
  }
  var Kv = typeof setTimeout == "function" ? setTimeout : void 0,
    mm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    l0 = typeof Promise == "function" ? Promise : void 0,
    dm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof l0 < "u"
        ? function (l) {
            return l0.resolve(null).then(l).catch(Sm);
          }
        : Kv;
  function Sm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Ra(l) {
    return l === "head";
  }
  function a0(l, a) {
    var t = a,
      u = 0;
    do {
      var n = t.nextSibling;
      if ((l.removeChild(t), n && n.nodeType === 8))
        if (((t = n.data), t === "/$" || t === "/&")) {
          if (u === 0) {
            l.removeChild(n), jt(a);
            return;
          }
          u--;
        } else if (
          t === "$" ||
          t === "$?" ||
          t === "$~" ||
          t === "$!" ||
          t === "&"
        )
          u++;
        else if (t === "html") bu(l.ownerDocument.documentElement);
        else if (t === "head") {
          (t = l.ownerDocument.head), bu(t);
          for (var f = t.firstChild; f; ) {
            var c = f.nextSibling,
              e = f.nodeName;
            f[Zu] ||
              e === "SCRIPT" ||
              e === "STYLE" ||
              (e === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
              t.removeChild(f),
              (f = c);
          }
        } else t === "body" && bu(l.ownerDocument.body);
      t = n;
    } while (t);
    jt(a);
  }
  function t0(l, a) {
    var t = l;
    l = 0;
    do {
      var u = t.nextSibling;
      if (
        (t.nodeType === 1
          ? a
            ? ((t._stashedDisplay = t.style.display),
              (t.style.display = "none"))
            : ((t.style.display = t._stashedDisplay || ""),
              t.getAttribute("style") === "" && t.removeAttribute("style"))
          : t.nodeType === 3 &&
            (a
              ? ((t._stashedText = t.nodeValue), (t.nodeValue = ""))
              : (t.nodeValue = t._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((t = u.data), t === "/$")) {
          if (l === 0) break;
          l--;
        } else (t !== "$" && t !== "$?" && t !== "$~" && t !== "$!") || l++;
      t = u;
    } while (t);
  }
  function xc(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var t = a;
      switch (((a = a.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xc(t), Pc(t);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(t);
    }
  }
  function gm(l, a, t, u) {
    for (; l.nodeType === 1; ) {
      var n = t;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Zu])
          switch (a) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((f = l.getAttribute("rel")),
                f === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((f = l.getAttribute("src")),
                (f !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  f &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (a === "input" && l.type === "hidden") {
        var f = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === f) return l;
      } else return l;
      if (((l = Zl(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function zm(l, a, t) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Zl(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Lv(l, a) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Zl(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function pc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Kc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function bm(l, a) {
    var t = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = a;
    else if (l.data !== "$?" || t.readyState !== "loading") a();
    else {
      var u = function () {
        a(), t.removeEventListener("DOMContentLoaded", u);
      };
      t.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
    }
  }
  function Zl(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (
          ((a = l.data),
          a === "$" ||
            a === "$!" ||
            a === "$?" ||
            a === "$~" ||
            a === "&" ||
            a === "F!" ||
            a === "F")
        )
          break;
        if (a === "/$" || a === "/&") return null;
      }
    }
    return l;
  }
  var Lc = null;
  function u0(l) {
    l = l.nextSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "/$" || t === "/&") {
          if (a === 0) return Zl(l.nextSibling);
          a--;
        } else
          (t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&") ||
            a++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function n0(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (a === 0) return l;
          a--;
        } else (t !== "/$" && t !== "/&") || a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jv(l, a, t) {
    switch (((a = wn(t)), l)) {
      case "html":
        if (((l = a.documentElement), !l)) throw Error(A(452));
        return l;
      case "head":
        if (((l = a.head), !l)) throw Error(A(453));
        return l;
      case "body":
        if (((l = a.body), !l)) throw Error(A(454));
        return l;
      default:
        throw Error(A(451));
    }
  }
  function bu(l) {
    for (var a = l.attributes; a.length; ) l.removeAttributeNode(a[0]);
    Pc(l);
  }
  var Cl = new Map(),
    f0 = new Set();
  function Fn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var ha = G.d;
  G.d = { f: Am, r: Tm, D: Em, C: Mm, L: Om, m: Dm, X: Hm, S: Um, M: Nm };
  function Am() {
    var l = ha.f(),
      a = mf();
    return l || a;
  }
  function Tm(l) {
    var a = xt(l);
    a !== null && a.tag === 5 && a.type === "form" ? R1(a) : ha.r(l);
  }
  var Jt = typeof document > "u" ? null : document;
  function Wv(l, a, t) {
    var u = Jt;
    if (u && typeof a == "string" && a) {
      var n = ol(a);
      (n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof t == "string" && (n += '[crossorigin="' + t + '"]'),
        f0.has(n) ||
          (f0.add(n),
          (l = { rel: l, crossOrigin: t, href: a }),
          u.querySelector(n) === null &&
            ((a = u.createElement("link")),
            vl(a, "link", l),
            ul(a),
            u.head.appendChild(a)));
    }
  }
  function Em(l) {
    ha.D(l), Wv("dns-prefetch", l, null);
  }
  function Mm(l, a) {
    ha.C(l, a), Wv("preconnect", l, a);
  }
  function Om(l, a, t) {
    ha.L(l, a, t);
    var u = Jt;
    if (u && l && a) {
      var n = 'link[rel="preload"][as="' + ol(a) + '"]';
      a === "image" && t && t.imageSrcSet
        ? ((n += '[imagesrcset="' + ol(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (n += '[imagesizes="' + ol(t.imageSizes) + '"]'))
        : (n += '[href="' + ol(l) + '"]');
      var f = n;
      switch (a) {
        case "style":
          f = Rt(l);
          break;
        case "script":
          f = Wt(l);
      }
      Cl.has(f) ||
        ((l = L(
          {
            rel: "preload",
            href: a === "image" && t && t.imageSrcSet ? void 0 : l,
            as: a,
          },
          t
        )),
        Cl.set(f, l),
        u.querySelector(n) !== null ||
          (a === "style" && u.querySelector(pu(f))) ||
          (a === "script" && u.querySelector(Ku(f))) ||
          ((a = u.createElement("link")),
          vl(a, "link", l),
          ul(a),
          u.head.appendChild(a)));
    }
  }
  function Dm(l, a) {
    ha.m(l, a);
    var t = Jt;
    if (t && l) {
      var u = a && typeof a.as == "string" ? a.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ol(u) + '"][href="' + ol(l) + '"]',
        f = n;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Wt(l);
      }
      if (
        !Cl.has(f) &&
        ((l = L({ rel: "modulepreload", href: l }, a)),
        Cl.set(f, l),
        t.querySelector(n) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(Ku(f))) return;
        }
        (u = t.createElement("link")),
          vl(u, "link", l),
          ul(u),
          t.head.appendChild(u);
      }
    }
  }
  function Um(l, a, t) {
    ha.S(l, a, t);
    var u = Jt;
    if (u && l) {
      var n = Ot(u).hoistableStyles,
        f = Rt(l);
      a = a || "default";
      var c = n.get(f);
      if (!c) {
        var e = { loading: 0, preload: null };
        if ((c = u.querySelector(pu(f)))) e.loading = 5;
        else {
          (l = L({ rel: "stylesheet", href: l, "data-precedence": a }, t)),
            (t = Cl.get(f)) && Ce(l, t);
          var i = (c = u.createElement("link"));
          ul(i),
            vl(i, "link", l),
            (i._p = new Promise(function (m, g) {
              (i.onload = m), (i.onerror = g);
            })),
            i.addEventListener("load", function () {
              e.loading |= 1;
            }),
            i.addEventListener("error", function () {
              e.loading |= 2;
            }),
            (e.loading |= 4),
            En(c, a, u);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: e }),
          n.set(f, c);
      }
    }
  }
  function Hm(l, a) {
    ha.X(l, a);
    var t = Jt;
    if (t && l) {
      var u = Ot(t).hoistableScripts,
        n = Wt(l),
        f = u.get(n);
      f ||
        ((f = t.querySelector(Ku(n))),
        f ||
          ((l = L({ src: l, async: !0 }, a)),
          (a = Cl.get(n)) && Re(l, a),
          (f = t.createElement("script")),
          ul(f),
          vl(f, "link", l),
          t.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        u.set(n, f));
    }
  }
  function Nm(l, a) {
    ha.M(l, a);
    var t = Jt;
    if (t && l) {
      var u = Ot(t).hoistableScripts,
        n = Wt(l),
        f = u.get(n);
      f ||
        ((f = t.querySelector(Ku(n))),
        f ||
          ((l = L({ src: l, async: !0, type: "module" }, a)),
          (a = Cl.get(n)) && Re(l, a),
          (f = t.createElement("script")),
          ul(f),
          vl(f, "link", l),
          t.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        u.set(n, f));
    }
  }
  function c0(l, a, t, u) {
    var n = (n = Ua.current) ? Fn(n) : null;
    if (!n) throw Error(A(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((a = Rt(t.href)),
            (t = Ot(n).hoistableStyles),
            (u = t.get(a)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              t.set(a, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          t.rel === "stylesheet" &&
          typeof t.href == "string" &&
          typeof t.precedence == "string"
        ) {
          l = Rt(t.href);
          var f = Ot(n).hoistableStyles,
            c = f.get(l);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(l, c),
              (f = n.querySelector(pu(l))) &&
                !f._p &&
                ((c.instance = f), (c.state.loading = 5)),
              Cl.has(l) ||
                ((t = {
                  rel: "preload",
                  as: "style",
                  href: t.href,
                  crossOrigin: t.crossOrigin,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy,
                }),
                Cl.set(l, t),
                f || Bm(n, l, t, c.state))),
            a && u === null)
          )
            throw Error(A(528, ""));
          return c;
        }
        if (a && u !== null) throw Error(A(529, ""));
        return null;
      case "script":
        return (
          (a = t.async),
          (t = t.src),
          typeof t == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((a = Wt(t)),
              (t = Ot(n).hoistableScripts),
              (u = t.get(a)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(a, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(A(444, l));
    }
  }
  function Rt(l) {
    return 'href="' + ol(l) + '"';
  }
  function pu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function wv(l) {
    return L({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Bm(l, a, t, u) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]")
      ? (u.loading = 1)
      : ((a = l.createElement("link")),
        (u.preload = a),
        a.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        a.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        vl(a, "link", t),
        ul(a),
        l.head.appendChild(a));
  }
  function Wt(l) {
    return '[src="' + ol(l) + '"]';
  }
  function Ku(l) {
    return "script[async]" + l;
  }
  function e0(l, a, t) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + ol(t.href) + '"]');
          if (u) return (a.instance = u), ul(u), u;
          var n = L({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            ul(u),
            vl(u, "style", n),
            En(u, t.precedence, l),
            (a.instance = u)
          );
        case "stylesheet":
          n = Rt(t.href);
          var f = l.querySelector(pu(n));
          if (f) return (a.state.loading |= 4), (a.instance = f), ul(f), f;
          (u = wv(t)),
            (n = Cl.get(n)) && Ce(u, n),
            (f = (l.ownerDocument || l).createElement("link")),
            ul(f);
          var c = f;
          return (
            (c._p = new Promise(function (e, i) {
              (c.onload = e), (c.onerror = i);
            })),
            vl(f, "link", u),
            (a.state.loading |= 4),
            En(f, t.precedence, l),
            (a.instance = f)
          );
        case "script":
          return (
            (f = Wt(t.src)),
            (n = l.querySelector(Ku(f)))
              ? ((a.instance = n), ul(n), n)
              : ((u = t),
                (n = Cl.get(f)) && ((u = L({}, t)), Re(u, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                ul(n),
                vl(n, "link", u),
                l.head.appendChild(n),
                (a.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(A(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((u = a.instance), (a.state.loading |= 4), En(u, t.precedence, l));
    return a.instance;
  }
  function En(l, a, t) {
    for (
      var u = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = u.length ? u[u.length - 1] : null,
        f = n,
        c = 0;
      c < u.length;
      c++
    ) {
      var e = u[c];
      if (e.dataset.precedence === a) f = e;
      else if (f !== n) break;
    }
    f
      ? f.parentNode.insertBefore(l, f.nextSibling)
      : ((a = t.nodeType === 9 ? t.head : t), a.insertBefore(l, a.firstChild));
  }
  function Ce(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy),
      l.title == null && (l.title = a.title);
  }
  function Re(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy),
      l.integrity == null && (l.integrity = a.integrity);
  }
  var Mn = null;
  function i0(l, a, t) {
    if (Mn === null) {
      var u = new Map(),
        n = (Mn = new Map());
      n.set(t, u);
    } else (n = Mn), (u = n.get(t)), u || ((u = new Map()), n.set(t, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), t = t.getElementsByTagName(l), n = 0;
      n < t.length;
      n++
    ) {
      var f = t[n];
      if (
        !(
          f[Zu] ||
          f[cl] ||
          (l === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = f.getAttribute(a) || "";
        c = l + c;
        var e = u.get(c);
        e ? e.push(f) : u.set(c, [f]);
      }
    }
    return u;
  }
  function v0(l, a, t) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        t,
        a === "title" ? l.querySelector("head > title") : null
      );
  }
  function qm(l, a, t) {
    if (t === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof a.precedence != "string" ||
          typeof a.href != "string" ||
          a.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof a.rel != "string" ||
          typeof a.href != "string" ||
          a.href === "" ||
          a.onLoad ||
          a.onError
        )
          break;
        switch (a.rel) {
          case "stylesheet":
            return (
              (l = a.disabled), typeof a.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          a.async &&
          typeof a.async != "function" &&
          typeof a.async != "symbol" &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Fv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function _m(l, a, t, u) {
    if (
      t.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = Rt(u.href),
          f = a.querySelector(pu(n));
        if (f) {
          (a = f._p),
            a !== null &&
              typeof a == "object" &&
              typeof a.then == "function" &&
              (l.count++, (l = $n.bind(l)), a.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = f),
            ul(f);
          return;
        }
        (f = a.ownerDocument || a),
          (u = wv(u)),
          (n = Cl.get(n)) && Ce(u, n),
          (f = f.createElement("link")),
          ul(f);
        var c = f;
        (c._p = new Promise(function (e, i) {
          (c.onload = e), (c.onerror = i);
        })),
          vl(f, "link", u),
          (t.instance = f);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, a),
        (a = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = $n.bind(l)),
          a.addEventListener("load", t),
          a.addEventListener("error", t));
    }
  }
  var If = 0;
  function Ym(l, a) {
    return (
      l.stylesheets && l.count === 0 && On(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (t) {
            var u = setTimeout(function () {
              if ((l.stylesheets && On(l, l.stylesheets), l.unsuspend)) {
                var f = l.unsuspend;
                (l.unsuspend = null), f();
              }
            }, 6e4 + a);
            0 < l.imgBytes && If === 0 && (If = 62500 * ym());
            var n = setTimeout(function () {
              if (
                ((l.waitingForImages = !1),
                l.count === 0 &&
                  (l.stylesheets && On(l, l.stylesheets), l.unsuspend))
              ) {
                var f = l.unsuspend;
                (l.unsuspend = null), f();
              }
            }, (l.imgBytes > If ? 50 : 800) + a);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(u), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function $n() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) On(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var kn = null;
  function On(l, a) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (kn = new Map()),
        a.forEach(sm, l),
        (kn = null),
        $n.call(l));
  }
  function sm(l, a) {
    if (!(a.state.loading & 4)) {
      var t = kn.get(l);
      if (t) var u = t.get(null);
      else {
        (t = new Map()), kn.set(l, t);
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            f = 0;
          f < n.length;
          f++
        ) {
          var c = n[f];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (t.set(c.dataset.precedence, c), (u = c));
        }
        u && t.set(null, u);
      }
      (n = a.instance),
        (c = n.getAttribute("data-precedence")),
        (f = t.get(c) || u),
        f === u && t.set(null, n),
        t.set(c, n),
        this.count++,
        (u = $n.bind(this)),
        n.addEventListener("load", u),
        n.addEventListener("error", u),
        f
          ? f.parentNode.insertBefore(n, f.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (a.state.loading |= 4);
    }
  }
  var _u = {
    $$typeof: la,
    Provider: null,
    Consumer: null,
    _currentValue: La,
    _currentValue2: La,
    _threadCount: 0,
  };
  function om(l, a, t, u, n, f, c, e, i) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Df(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Df(0)),
      (this.hiddenUpdates = Df(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = n),
      (this.onCaughtError = f),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function $v(l, a, t, u, n, f, c, e, i, m, g, b) {
    return (
      (l = new om(l, a, t, c, i, m, g, b, e)),
      (a = 1),
      f === !0 && (a |= 24),
      (f = El(3, null, null, a)),
      (l.current = f),
      (f.stateNode = l),
      (a = ye()),
      a.refCount++,
      (l.pooledCache = a),
      a.refCount++,
      (f.memoizedState = { element: u, isDehydrated: t, cache: a }),
      de(f),
      l
    );
  }
  function kv(l) {
    return l ? ((l = At), l) : At;
  }
  function Iv(l, a, t, u, n, f) {
    (n = kv(n)),
      u.context === null ? (u.context = n) : (u.pendingContext = n),
      (u = Na(a)),
      (u.payload = { element: t }),
      (f = f === void 0 ? null : f),
      f !== null && (u.callback = f),
      (t = Ba(l, u, a)),
      t !== null && (gl(t, l, a), vu(t, l, a));
  }
  function y0(l, a) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < a ? t : a;
    }
  }
  function je(l, a) {
    y0(l, a), (l = l.alternate) && y0(l, a);
  }
  function Pv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var a = ut(l, 67108864);
      a !== null && gl(a, l, 67108864), je(l, 67108864);
    }
  }
  function h0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var a = Hl();
      a = kc(a);
      var t = ut(l, a);
      t !== null && gl(t, l, a), je(l, a);
    }
  }
  var In = !0;
  function Xm(l, a, t, u) {
    var n = D.T;
    D.T = null;
    var f = G.p;
    try {
      (G.p = 2), Ve(l, a, t, u);
    } finally {
      (G.p = f), (D.T = n);
    }
  }
  function Gm(l, a, t, u) {
    var n = D.T;
    D.T = null;
    var f = G.p;
    try {
      (G.p = 8), Ve(l, a, t, u);
    } finally {
      (G.p = f), (D.T = n);
    }
  }
  function Ve(l, a, t, u) {
    if (In) {
      var n = Jc(u);
      if (n === null) $f(l, a, u, Pn, t), m0(l, u);
      else if (Zm(n, l, a, t, u)) u.stopPropagation();
      else if ((m0(l, u), a & 4 && -1 < Qm.indexOf(l))) {
        for (; n !== null; ) {
          var f = xt(n);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var c = xa(f.pendingLanes);
                  if (c !== 0) {
                    var e = f;
                    for (e.pendingLanes |= 2, e.entangledLanes |= 2; c; ) {
                      var i = 1 << (31 - Ul(c));
                      (e.entanglements[1] |= i), (c &= ~i);
                    }
                    Wl(f), (X & 6) === 0 && ((xn = Ol() + 500), xu(0, !1));
                  }
                }
                break;
              case 31:
              case 13:
                (e = ut(f, 2)), e !== null && gl(e, f, 2), mf(), je(f, 2);
            }
          if (((f = Jc(u)), f === null && $f(l, a, u, Pn, t), f === n)) break;
          n = f;
        }
        n !== null && u.stopPropagation();
      } else $f(l, a, u, null, t);
    }
  }
  function Jc(l) {
    return (l = le(l)), xe(l);
  }
  var Pn = null;
  function xe(l) {
    if (((Pn = null), (l = mt(l)), l !== null)) {
      var a = ou(l);
      if (a === null) l = null;
      else {
        var t = a.tag;
        if (t === 13) {
          if (((l = A0(a)), l !== null)) return l;
          l = null;
        } else if (t === 31) {
          if (((l = T0(a)), l !== null)) return l;
          l = null;
        } else if (t === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return (Pn = l), null;
  }
  function rv(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Oy()) {
          case D0:
            return 2;
          case U0:
            return 8;
          case Bn:
          case Dy:
            return 32;
          case H0:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = !1,
    Ya = null,
    sa = null,
    oa = null,
    Yu = new Map(),
    su = new Map(),
    Aa = [],
    Qm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function m0(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ya = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
        break;
      case "mouseover":
      case "mouseout":
        oa = null;
        break;
      case "pointerover":
      case "pointerout":
        Yu.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        su.delete(a.pointerId);
    }
  }
  function Pt(l, a, t, u, n, f) {
    return l === null || l.nativeEvent !== f
      ? ((l = {
          blockedOn: a,
          domEventName: t,
          eventSystemFlags: u,
          nativeEvent: f,
          targetContainers: [n],
        }),
        a !== null && ((a = xt(a)), a !== null && Pv(a)),
        l)
      : ((l.eventSystemFlags |= u),
        (a = l.targetContainers),
        n !== null && a.indexOf(n) === -1 && a.push(n),
        l);
  }
  function Zm(l, a, t, u, n) {
    switch (a) {
      case "focusin":
        return (Ya = Pt(Ya, l, a, t, u, n)), !0;
      case "dragenter":
        return (sa = Pt(sa, l, a, t, u, n)), !0;
      case "mouseover":
        return (oa = Pt(oa, l, a, t, u, n)), !0;
      case "pointerover":
        var f = n.pointerId;
        return Yu.set(f, Pt(Yu.get(f) || null, l, a, t, u, n)), !0;
      case "gotpointercapture":
        return (
          (f = n.pointerId), su.set(f, Pt(su.get(f) || null, l, a, t, u, n)), !0
        );
    }
    return !1;
  }
  function ly(l) {
    var a = mt(l.target);
    if (a !== null) {
      var t = ou(a);
      if (t !== null) {
        if (((a = t.tag), a === 13)) {
          if (((a = A0(t)), a !== null)) {
            (l.blockedOn = a),
              $e(l.priority, function () {
                h0(t);
              });
            return;
          }
        } else if (a === 31) {
          if (((a = T0(t)), a !== null)) {
            (l.blockedOn = a),
              $e(l.priority, function () {
                h0(t);
              });
            return;
          }
        } else if (a === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Dn(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var t = Jc(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var u = new t.constructor(t.type, t);
        (yc = u), t.target.dispatchEvent(u), (yc = null);
      } else return (a = xt(t)), a !== null && Pv(a), (l.blockedOn = t), !1;
      a.shift();
    }
    return !0;
  }
  function d0(l, a, t) {
    Dn(l) && t.delete(a);
  }
  function Cm() {
    (Wc = !1),
      Ya !== null && Dn(Ya) && (Ya = null),
      sa !== null && Dn(sa) && (sa = null),
      oa !== null && Dn(oa) && (oa = null),
      Yu.forEach(d0),
      su.forEach(d0);
  }
  function cn(l, a) {
    l.blockedOn === a &&
      ((l.blockedOn = null),
      Wc ||
        ((Wc = !0),
        al.unstable_scheduleCallback(al.unstable_NormalPriority, Cm)));
  }
  var en = null;
  function S0(l) {
    en !== l &&
      ((en = l),
      al.unstable_scheduleCallback(al.unstable_NormalPriority, function () {
        en === l && (en = null);
        for (var a = 0; a < l.length; a += 3) {
          var t = l[a],
            u = l[a + 1],
            n = l[a + 2];
          if (typeof u != "function") {
            if (xe(u || t) === null) continue;
            break;
          }
          var f = xt(t);
          f !== null &&
            (l.splice(a, 3),
            (a -= 3),
            Nc(f, { pending: !0, data: n, method: t.method, action: u }, u, n));
        }
      }));
  }
  function jt(l) {
    function a(i) {
      return cn(i, l);
    }
    Ya !== null && cn(Ya, l),
      sa !== null && cn(sa, l),
      oa !== null && cn(oa, l),
      Yu.forEach(a),
      su.forEach(a);
    for (var t = 0; t < Aa.length; t++) {
      var u = Aa[t];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Aa.length && ((t = Aa[0]), t.blockedOn === null); )
      ly(t), t.blockedOn === null && Aa.shift();
    if (((t = (l.ownerDocument || l).$$reactFormReplay), t != null))
      for (u = 0; u < t.length; u += 3) {
        var n = t[u],
          f = t[u + 1],
          c = n[zl] || null;
        if (typeof f == "function") c || S0(t);
        else if (c) {
          var e = null;
          if (f && f.hasAttribute("formAction")) {
            if (((n = f), (c = f[zl] || null))) e = c.formAction;
            else if (xe(n) !== null) continue;
          } else e = c.action;
          typeof e == "function" ? (t[u + 1] = e) : (t.splice(u, 3), (u -= 3)),
            S0(t);
        }
      }
  }
  function ay() {
    function l(f) {
      f.canIntercept &&
        f.info === "react-transition" &&
        f.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (n = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function a() {
      n !== null && (n(), (n = null)), u || setTimeout(t, 20);
    }
    function t() {
      if (!u && !navigation.transition) {
        var f = navigation.currentEntry;
        f &&
          f.url != null &&
          navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", a),
        navigation.addEventListener("navigateerror", a),
        setTimeout(t, 100),
        function () {
          (u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", a),
            navigation.removeEventListener("navigateerror", a),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function pe(l) {
    this._internalRoot = l;
  }
  gf.prototype.render = pe.prototype.render = function (l) {
    var a = this._internalRoot;
    if (a === null) throw Error(A(409));
    var t = a.current,
      u = Hl();
    Iv(t, u, l, a, null, null);
  };
  gf.prototype.unmount = pe.prototype.unmount = function () {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var a = l.containerInfo;
      Iv(l.current, 2, null, l, null, null), mf(), (a[Vt] = null);
    }
  };
  function gf(l) {
    this._internalRoot = l;
  }
  gf.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var a = Y0();
      l = { blockedOn: null, target: l, priority: a };
      for (var t = 0; t < Aa.length && a !== 0 && a < Aa[t].priority; t++);
      Aa.splice(t, 0, l), t === 0 && ly(l);
    }
  };
  var g0 = z0.version;
  if (g0 !== "19.2.0") throw Error(A(527, g0, "19.2.0"));
  G.findDOMNode = function (l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function"
        ? Error(A(188))
        : ((l = Object.keys(l).join(",")), Error(A(268, l)));
    return (
      (l = gy(a)),
      (l = l !== null ? E0(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Rm = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.0",
  };
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    ((rt = __REACT_DEVTOOLS_GLOBAL_HOOK__), !rt.isDisabled && rt.supportsFiber)
  )
    try {
      (Xu = rt.inject(Rm)), (Dl = rt);
    } catch {}
  var rt;
  zf.createRoot = function (l, a) {
    if (!b0(l)) throw Error(A(299));
    var t = !1,
      u = "",
      n = W1,
      f = w1,
      c = F1;
    return (
      a != null &&
        (a.unstable_strictMode === !0 && (t = !0),
        a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
        a.onCaughtError !== void 0 && (f = a.onCaughtError),
        a.onRecoverableError !== void 0 && (c = a.onRecoverableError)),
      (a = $v(l, 1, !1, null, null, t, u, null, n, f, c, ay)),
      (l[Vt] = a.current),
      Ze(l),
      new pe(a)
    );
  };
  zf.hydrateRoot = function (l, a, t) {
    if (!b0(l)) throw Error(A(299));
    var u = !1,
      n = "",
      f = W1,
      c = w1,
      e = F1,
      i = null;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (u = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (f = t.onUncaughtError),
        t.onCaughtError !== void 0 && (c = t.onCaughtError),
        t.onRecoverableError !== void 0 && (e = t.onRecoverableError),
        t.formState !== void 0 && (i = t.formState)),
      (a = $v(l, 1, !0, a, t ?? null, u, n, i, f, c, e, ay)),
      (a.context = kv(null)),
      (t = a.current),
      (u = Hl()),
      (u = kc(u)),
      (n = Na(u)),
      (n.callback = null),
      Ba(t, n, u),
      (t = u),
      (a.current.lanes = t),
      Qu(a, t),
      Wl(a),
      (l[Vt] = a.current),
      Ze(l),
      new gf(a)
    );
  };
  zf.version = "19.2.0";
});
var fy = Le((xm, ny) => {
  "use strict";
  function uy() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uy);
      } catch (l) {
        console.error(l);
      }
  }
  uy(), (ny.exports = ty());
});
var bf = dy(fy()),
  { createRoot: pm, hydrateRoot: Km, version: Lm } = bf,
  Jm = bf.default ?? bf;
export { pm as createRoot, Jm as default, Km as hydrateRoot, Lm as version };
/*! Bundled license information:

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=client.mjs.map
