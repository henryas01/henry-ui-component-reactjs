import { jsx as i, jsxs as s, Fragment as B } from "react/jsx-runtime";
import u, { useState as j, useRef as D, useMemo as M, useEffect as _ } from "react";
import { createPortal as Y } from "react-dom";
const L = ({
  primary: e = !1,
  size: n = "medium",
  backgroundColor: r,
  label: t,
  className: a,
  type: c = "button",
  ...p
}) => {
  const m = e ? "storybook-button--primary " : "storybook-button--secondary";
  return /* @__PURE__ */ i(
    "button",
    {
      type: c,
      className: [
        a,
        "storybook-button ",
        `storybook-button--${n}`,
        m
      ].filter(Boolean).join(" "),
      style: { backgroundColor: r },
      ...p,
      children: t
    }
  );
}, de = ({
  user: e,
  onLogin: n,
  onLogout: r,
  onCreateAccount: t
}) => /* @__PURE__ */ i("header", { children: /* @__PURE__ */ s("div", { className: "storybook-header", children: [
  /* @__PURE__ */ s("div", { children: [
    /* @__PURE__ */ i(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ s("g", { fill: "none", fillRule: "evenodd", children: [
          /* @__PURE__ */ i(
            "path",
            {
              d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
              fill: "#FFF"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
              fill: "#555AB9"
            }
          ),
          /* @__PURE__ */ i(
            "path",
            {
              d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
              fill: "#91BAF8"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ i("h1", { children: "Acme" })
  ] }),
  /* @__PURE__ */ i("div", { children: e ? /* @__PURE__ */ s(B, { children: [
    /* @__PURE__ */ s("span", { className: "welcome", children: [
      "Welcome, ",
      /* @__PURE__ */ i("b", { children: e.name }),
      "!"
    ] }),
    /* @__PURE__ */ i(L, { size: "small", onClick: r, label: "Log out" })
  ] }) : /* @__PURE__ */ s(B, { children: [
    /* @__PURE__ */ i(L, { size: "small", onClick: n, label: "Log in" }),
    /* @__PURE__ */ i(
      L,
      {
        primary: !0,
        size: "small",
        onClick: t,
        label: "Sign up"
      }
    )
  ] }) })
] }) });
var R = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, F = u.createContext && /* @__PURE__ */ u.createContext(R), Z = ["attr", "size", "title"];
function J(e, n) {
  if (e == null) return {};
  var r = U(e, n), t, a;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(e);
    for (a = 0; a < c.length; a++)
      t = c[a], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
function U(e, n) {
  if (e == null) return {};
  var r = {};
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      if (n.indexOf(t) >= 0) continue;
      r[t] = e[t];
    }
  return r;
}
function y() {
  return y = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r)
        Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, y.apply(this, arguments);
}
function I(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, t);
  }
  return r;
}
function x(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? I(Object(r), !0).forEach(function(t) {
      q(e, t, r[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
    });
  }
  return e;
}
function q(e, n, r) {
  return n = ee(n), n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = r, e;
}
function ee(e) {
  var n = te(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function te(e, n) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, n);
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function W(e) {
  return e && e.map((n, r) => /* @__PURE__ */ u.createElement(n.tag, x({
    key: r
  }, n.attr), W(n.child)));
}
function O(e) {
  return (n) => /* @__PURE__ */ u.createElement(re, y({
    attr: x({}, e.attr)
  }, n), W(e.child));
}
function re(e) {
  var n = (r) => {
    var {
      attr: t,
      size: a,
      title: c
    } = e, p = J(e, Z), m = a || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ u.createElement("svg", y({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, t, p, {
      className: d,
      style: x(x({
        color: e.color || r.color
      }, r.style), e.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && /* @__PURE__ */ u.createElement("title", null, c), e.children);
  };
  return F !== void 0 ? /* @__PURE__ */ u.createElement(F.Consumer, null, (r) => n(r)) : n(R);
}
function ne(e) {
  return O({ attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }, child: [] }] })(e);
}
function oe(e) {
  return O({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m6 9 6 6 6-6" }, child: [] }] })(e);
}
function ie(e) {
  return O({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "circle", attr: { cx: "11", cy: "11", r: "8" }, child: [] }, { tag: "path", attr: { d: "m21 21-4.3-4.3" }, child: [] }] })(e);
}
function le(e) {
  return O({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z" }, child: [] }] })(e);
}
const ue = ({
  id: e,
  name: n,
  options: r,
  value: t,
  onChange: a,
  multiple: c = !1,
  withSearch: p = !0,
  searchwithfilter: m = !1,
  usePortal: d = !0,
  outlined: $ = !1,
  placeholder: V = "",
  renderOption: k,
  label: P
}) => {
  const [f, N] = j(!1), [g, z] = j(""), [C, T] = j({
    top: 0,
    left: 0,
    width: 0
  }), v = D(null), E = D(null), H = M(() => Array.isArray(t) ? t.join(",") : t || "", [t]), b = () => {
    if (v.current) {
      const o = v.current.getBoundingClientRect();
      T({
        top: o.bottom + window.scrollY + 4,
        left: o.left + window.scrollX,
        width: o.width
      });
    }
  };
  _(() => (f && (b(), window.addEventListener("scroll", b, !0), window.addEventListener("resize", b)), () => {
    window.removeEventListener("scroll", b, !0), window.removeEventListener("resize", b);
  }), [f]), _(() => {
    const o = (l) => {
      const h = l.target;
      !v.current?.contains(h) && !E.current?.contains(h) && N(!1);
    };
    return document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, []);
  const S = (o) => {
    if (c) {
      const l = Array.isArray(t) ? t : [], h = l.includes(o) ? l.filter((w) => w !== o) : [...l, o];
      a(h);
    } else
      a(o), N(!1);
  }, Q = (o) => c ? Array.isArray(t) && t.includes(o) : t === o, X = M(() => r.filter(
    (o) => o.label.toLowerCase().includes(g.toLowerCase())
  ), [r, g]), G = (o, l) => {
    if (!l) return o;
    const h = o.split(new RegExp(`(${l})`, "gi"));
    return /* @__PURE__ */ i("span", { children: h.map(
      (w, K) => w.toLowerCase() === l.toLowerCase() ? /* @__PURE__ */ i("span", { className: "bg-teal-500 text-white px-0.5 rounded-sm", children: w }, K) : w
    ) });
  }, A = /* @__PURE__ */ s(
    "div",
    {
      ref: E,
      id: `${e}-dropdown`,
      style: d ? {
        position: "absolute",
        top: C.top,
        left: C.left,
        width: C.width,
        zIndex: 9999
      } : {},
      className: "bg-white border border-slate-200 rounded shadow-md flex flex-col overflow-hidden animate-in fade-in duration-200",
      children: [
        p && /* @__PURE__ */ s("div", { className: "p-2.5 border-b border-slate-100 flex items-center gap-2 bg-white sticky top-0", children: [
          /* @__PURE__ */ i(ie, { className: "text-slate-400 ml-1 shrink-0", size: 18 }),
          /* @__PURE__ */ i(
            "input",
            {
              className: "w-full bg-transparent text-sm outline-none py-0.5",
              value: g,
              onChange: (o) => z(o.target.value),
              autoFocus: !0
            }
          ),
          g && /* @__PURE__ */ i(
            le,
            {
              size: 20,
              className: "text-slate-400 hover:text-slate-600 cursor-pointer",
              onClick: () => z("")
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "max-h-60 overflow-y-auto", children: /* @__PURE__ */ i("div", { className: "max-h-60 overflow-y-auto", children: (() => {
          const o = m ? X : r;
          return o.length > 0 ? o.map((l) => /* @__PURE__ */ i(
            "div",
            {
              onClick: () => S(l.value),
              className: `px-4 py-2 text-sm cursor-pointer transition-colors ${Q(l.value) ? "bg-teal-50 text-teal-900 font-medium" : "hover:bg-slate-50 text-slate-700"}`,
              children: k ? k(l) : G(l.label, g)
            },
            l.value
          )) : /* @__PURE__ */ i("div", { className: "p-4 text-center text-slate-400 text-sm italic", children: "Data Not Found" });
        })() }) })
      ]
    }
  );
  return /* @__PURE__ */ s(
    "div",
    {
      className: "flex flex-col md:flex-row items-start gap-4 md:gap-10 w-full p-4 font-sans",
      ref: v,
      children: [
        /* @__PURE__ */ i("input", { type: "hidden", name: n, value: H }),
        P && /* @__PURE__ */ i("label", { className: "text-sm text-slate-600 font-semibold w-24 mt-2 shrink-0 select-none", children: P }),
        /* @__PURE__ */ s("div", { className: "relative flex-1 w-full", children: [
          /* @__PURE__ */ s(
            "div",
            {
              onClick: () => N(!f),
              className: `
            flex items-center justify-between gap-2 px-3 py-2 border rounded transition-all
            ${$ ? "bg-gray-50 border-gray-300" : "bg-white border-slate-200 shadow-sm"}
            ${f ? "border-gray-300 ring-2 ring-gray-50" : "hover:border-slate-300"}
          `,
              children: [
                /* @__PURE__ */ i("div", { className: "flex flex-wrap gap-2 items-center flex-1 overflow-hidden", children: !t || Array.isArray(t) && t.length === 0 ? /* @__PURE__ */ i("span", { className: "text-slate-400 text-sm", children: V }) : c && Array.isArray(t) ? r.filter((o) => t.includes(o.value)).map((o) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: "bg-gray-100 border border-slate-200 px-2 py-0.5 rounded-full flex items-center gap-1.5 transition-colors hover:bg-slate-200",
                    children: [
                      /* @__PURE__ */ i("span", { className: "text-slate-700 text-xs font-medium", children: o.label }),
                      /* @__PURE__ */ i(
                        ne,
                        {
                          className: "text-gray-500 hover:text-gray-700 cursor-pointer",
                          size: 20,
                          onClick: (l) => {
                            l.stopPropagation(), S(o.value);
                          }
                        }
                      )
                    ]
                  },
                  o.value
                )) : /* @__PURE__ */ i("span", { className: "text-sm text-slate-800 font-medium", children: r.find((o) => o.value === t)?.label }) }),
                /* @__PURE__ */ i(
                  oe,
                  {
                    className: `text-slate-400 transition-transform duration-300 ${f ? "rotate-180" : ""}`,
                    size: 18
                  }
                )
              ]
            }
          ),
          f && (d ? Y(A, document.body) : A)
        ] })
      ]
    }
  );
};
export {
  L as Button,
  de as Header,
  ue as Select
};
