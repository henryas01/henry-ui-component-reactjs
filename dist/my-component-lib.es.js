import { jsx as l, jsxs as e, Fragment as s } from "react/jsx-runtime";
import "react";
const r = ({
  primary: o = !1,
  size: t = "medium",
  backgroundColor: n,
  label: i,
  ...a
}) => {
  const d = o ? "storybook-button--primary " : "storybook-button--secondary";
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      className: ["storybook-button ", `storybook-button--${t}`, d].join(
        " "
      ),
      style: { backgroundColor: n },
      ...a,
      children: /* @__PURE__ */ l("span", { className: "text-red-500", children: i })
    }
  );
}, m = ({
  user: o,
  onLogin: t,
  onLogout: n,
  onCreateAccount: i
}) => /* @__PURE__ */ l("header", { children: /* @__PURE__ */ e("div", { className: "storybook-header", children: [
  /* @__PURE__ */ e("div", { children: [
    /* @__PURE__ */ l(
      "svg",
      {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ e("g", { fill: "none", fillRule: "evenodd", children: [
          /* @__PURE__ */ l(
            "path",
            {
              d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
              fill: "#FFF"
            }
          ),
          /* @__PURE__ */ l(
            "path",
            {
              d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
              fill: "#555AB9"
            }
          ),
          /* @__PURE__ */ l(
            "path",
            {
              d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
              fill: "#91BAF8"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ l("h1", { children: "Acme" })
  ] }),
  /* @__PURE__ */ l("div", { children: o ? /* @__PURE__ */ e(s, { children: [
    /* @__PURE__ */ e("span", { className: "welcome", children: [
      "Welcome, ",
      /* @__PURE__ */ l("b", { children: o.name }),
      "!"
    ] }),
    /* @__PURE__ */ l(r, { size: "small", onClick: n, label: "Log out" })
  ] }) : /* @__PURE__ */ e(s, { children: [
    /* @__PURE__ */ l(r, { size: "small", onClick: t, label: "Log in" }),
    /* @__PURE__ */ l(
      r,
      {
        primary: !0,
        size: "small",
        onClick: i,
        label: "Sign up"
      }
    )
  ] }) })
] }) });
export {
  r as Button,
  m as Header
};
