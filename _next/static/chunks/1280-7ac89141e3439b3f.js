(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1280],
  {
    86499: function (e, s, t) {
      "use strict";
      t.d(s, {
        $: function () {
          return ee;
        },
      });
      var n = t(52322),
        l = t(2784),
        a = t(67810),
        r = t(84001),
        i = t(27149),
        c = t(89870),
        o = t(29767),
        d = t(34678),
        x = t(84594),
        m = t(38421),
        u = t.n(m),
        h = t(39097),
        v = t.n(h),
        j = t(46782),
        g = t(30960),
        p = t(1297),
        f = t.n(p),
        y = t(36432),
        N = t.n(y),
        b = t(24777),
        k = t(58639);
      let C = (e) => {
        let { control: s, serviceIndex: t, setValue: r } = e,
          { imageList: i } = (0, k.iS)(),
          [o, d] = (0, l.useState)(!1),
          x = (0, l.useCallback)(async () => {
            let e = N().pki.rsa.generateKeyPair({ bits: 2048 }),
              s = N().ssh.publicKeyToOpenSSH(e.publicKey);
            r("services.".concat(t, ".sshPubKey"), s);
            let n = new (f())();
            n.file("id_rsa.pub", s),
              n.file("id_rsa", N().ssh.privateKeyToOpenSSH(e.privateKey));
            let l = await n.generateAsync({ type: "blob" });
            (0, j.saveAs)(l, "keypair.zip"), d(!0);
          }, [t, r]);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(a.Wi, {
              control: s,
              name: "services.".concat(t, ".sshPubKey"),
              render: (e) => {
                let { field: s } = e;
                return (0, n.jsx)(a.yt, {
                  type: "text",
                  label: (0, n.jsxs)("div", {
                    className: "inline-flex items-center",
                    children: [
                      (0, n.jsx)("strong", { children: "SSH Public Key" }),
                      (0, n.jsx)(a.WH, {
                        title: (0, n.jsxs)(n.Fragment, {
                          children: [
                            "SSH Public Key",
                            (0, n.jsx)("br", {}),
                            (0, n.jsx)("br", {}),
                            "The key is added to environment variables of the container and then to ~/.ssh/authorized_keys on startup.",
                          ],
                        }),
                        children: (0, n.jsx)(c.Z, {
                          className: "ml-2 text-xs text-muted-foreground",
                        }),
                      }),
                    ],
                  }),
                  placeholder: "ssh-...",
                  className: "flex-grow",
                  inputClassName: "pr-[100px]",
                  value: s.value,
                  onChange: (e) => s.onChange(e.target.value || ""),
                  startIcon: (0, n.jsx)(g.Z, {
                    className: "ml-2 text-xs text-muted-foreground",
                  }),
                  endIcon: (0, n.jsx)(a.zx, {
                    onClick: x,
                    type: "button",
                    size: "sm",
                    className: "h-full",
                    "data-testid": "generate-ssh-keys-btn",
                    children: "Generate",
                  }),
                  "data-testid": "ssh-public-key-input",
                });
              },
            }),
            o &&
              (0, n.jsxs)("div", {
                className: "mt-2 text-sm text-muted-foreground",
                children: [
                  (0, n.jsx)("h4", {
                    className: "text-lg",
                    children: "How to use",
                  }),
                  (0, n.jsx)("p", {
                    className: "mt-2",
                    children:
                      "The generated SSH key pair is used to access the container via SSH. Here are generalized steps to use them:",
                  }),
                  (0, n.jsxs)("ul", {
                    className:
                      "list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400",
                    children: [
                      (0, n.jsxs)("li", {
                        children: [
                          "Download the key pair and extract it.",
                          (0, n.jsx)(b.O, {
                            code: "unzip ~/Downloads/keypair.zip",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("li", {
                        children: [
                          "Copy the private key file to ",
                          (0, n.jsx)("code", { children: "~/.ssh/id_rsa" }),
                          " on your local machine.",
                          (0, n.jsx)(b.O, {
                            code: "mv ~/Downloads/keypair/* ~/.ssh/",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("li", {
                        children: [
                          "Make sure to set the correct permissions on the private key file:",
                          (0, n.jsx)(b.O, { code: "chmod 600 ~/.ssh/id_rsa" }),
                        ],
                      }),
                      (0, n.jsx)("li", {
                        children:
                          "Check out more instructions on deployment page in the Lease tab.",
                      }),
                    ],
                  }),
                  (0, n.jsx)("p", {
                    className: "mt-2",
                    children:
                      "Note: the above is valid for unix operating system",
                  }),
                  !i &&
                    (0, n.jsx)("p", {
                      className: "mt-2",
                      children: "Note: make sure your image has ssh configured",
                    }),
                ],
              }),
          ],
        });
      };
      var w = t(50338),
        S = t(51328),
        z = t(69793),
        O = t(40051),
        A = t(49158),
        I = t(51369),
        B = t(79808),
        F = t(57334),
        H = t(13707),
        W = t(34183),
        Z = t(18714),
        D = t(60418),
        K = t(14589),
        _ = t(87109),
        T = t(17759),
        E = t(74092),
        P = t(11414),
        q = t(97611),
        R = t(63470),
        V = t(40284);
      let L = () =>
        (0, n.jsx)("span", {
          className: "ml-2 text-sm font-semibold",
          children: "$USD",
        });
      var G = t(63955),
        M = t(86607),
        U = t(37164);
      let $ = (0, l.forwardRef)((e, s) => {
          let { control: t, serviceIndex: r, attributes: i = [] } = e,
            {
              fields: o,
              remove: d,
              append: x,
            } = (0, G.Dq)({
              control: t,
              name: "services.".concat(r, ".placement.attributes"),
              keyName: "id",
            });
          return (
            (0, l.useImperativeHandle)(s, () => ({
              _removeAttribute(e) {
                d(e);
              },
            })),
            (0, n.jsxs)(T.h, {
              className: "h-full",
              children: [
                (0, n.jsxs)("div", {
                  className: (0, A.cn)("flex items-start justify-between", {
                    "mb-4": !!i.length,
                  }),
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, n.jsx)("strong", {
                          className: "text-sm",
                          children: "Attributes",
                        }),
                        (0, n.jsx)(a.WH, {
                          title: (0, n.jsx)(n.Fragment, {
                            children:
                              "Filter providers that have these attributes.",
                          }),
                          children: (0, n.jsx)(c.Z, {
                            className: "ml-2 text-sm text-muted-foreground",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(a.zx, {
                      variant: "default",
                      size: "sm",
                      onClick: () => {
                        x({ id: (0, U.x0)(), key: "", value: "" });
                      },
                      children: "Add Attribute",
                    }),
                  ],
                }),
                o.length > 0
                  ? o.map((e, s) =>
                      (0, n.jsx)(
                        "div",
                        {
                          className: (0, A.cn)({ "mb-2": s + 1 !== i.length }),
                          children: (0, n.jsxs)("div", {
                            className: "flex items-end",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "flex flex-grow items-center",
                                children: [
                                  (0, n.jsx)("div", {
                                    children: (0, n.jsx)(a.Wi, {
                                      control: t,
                                      name: "services."
                                        .concat(r, ".placement.attributes.")
                                        .concat(s, ".key"),
                                      render: (e) => {
                                        let { field: s } = e;
                                        return (0, n.jsx)(a.yt, {
                                          type: "text",
                                          label: "Key",
                                          className: "w-full",
                                          value: s.value,
                                          onChange: (e) =>
                                            s.onChange(e.target.value),
                                        });
                                      },
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "ml-2",
                                    children: (0, n.jsx)(a.Wi, {
                                      control: t,
                                      name: "services."
                                        .concat(r, ".placement.attributes.")
                                        .concat(s, ".value"),
                                      render: (e) => {
                                        let { field: s } = e;
                                        return (0, n.jsx)(a.yt, {
                                          type: "text",
                                          label: "Value",
                                          className: "w-full",
                                          value: s.value,
                                          onChange: (e) =>
                                            s.onChange(e.target.value),
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className: "pl-2",
                                children: (0, n.jsx)(a.zx, {
                                  onClick: () => d(s),
                                  size: "icon",
                                  variant: "ghost",
                                  children: (0, n.jsx)(M.Z, {}),
                                }),
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                    )
                  : (0, n.jsx)("div", {
                      className: "mb-2 text-xs text-muted-foreground",
                      children: "None",
                    }),
              ],
            })
          );
        }),
        Y = (0, l.forwardRef)((e, s) => {
          let {
              control: t,
              serviceIndex: r,
              signedByAnyOf: i = [],
              signedByAllOf: o = [],
            } = e,
            {
              fields: d,
              remove: x,
              append: m,
            } = (0, G.Dq)({
              control: t,
              name: "services.".concat(r, ".placement.signedBy.anyOf"),
              keyName: "id",
            }),
            {
              fields: u,
              remove: h,
              append: v,
            } = (0, G.Dq)({
              control: t,
              name: "services.".concat(r, ".placement.signedBy.allOf"),
              keyName: "id",
            });
          return (
            (0, l.useImperativeHandle)(s, () => ({
              _removeSignedByAnyOf(e) {
                x(e);
              },
              _removeSignedByAllOf(e) {
                h(e);
              },
            })),
            (0, n.jsxs)(T.h, {
              className: "h-full",
              children: [
                (0, n.jsxs)("div", {
                  className: "mb-4 flex items-center",
                  children: [
                    (0, n.jsx)("strong", {
                      className: "text-sm",
                      children: "Signed By",
                    }),
                    (0, n.jsx)(a.WH, {
                      title: (0, n.jsxs)(n.Fragment, {
                        children: [
                          "This will filter bids based on which address (auditor) audited the provider.",
                          (0, n.jsx)("br", {}),
                          (0, n.jsx)("br", {}),
                          "This allows for requiring a third-party certification of any provider that you deploy to.",
                          (0, n.jsx)("br", {}),
                          (0, n.jsx)("br", {}),
                          (0, n.jsx)("a", {
                            href: "https://akash.network/docs/getting-started/stack-definition-language/#profilesplacementsignedby",
                            target: "_blank",
                            rel: "noopener",
                            children: "View official documentation.",
                          }),
                        ],
                      }),
                      children: (0, n.jsx)(c.Z, {
                        className: "ml-2 text-sm text-muted-foreground",
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: (0, A.cn)("flex items-start justify-between", {
                    "mb-4": !!i.length,
                  }),
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, n.jsx)("strong", {
                          className: "text-sm",
                          children: "Any of",
                        }),
                        (0, n.jsx)(a.WH, {
                          title: (0, n.jsx)(n.Fragment, {
                            children:
                              "Filter providers that have been audited by ANY of these accounts.",
                          }),
                          children: (0, n.jsx)(c.Z, {
                            className: "ml-2 text-sm text-muted-foreground",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(a.zx, {
                      variant: "default",
                      size: "sm",
                      onClick: () => {
                        m({ id: (0, U.x0)(), value: "" });
                      },
                      children: "Add Any Of",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "mb-4",
                  children:
                    d.length > 0
                      ? d.map((e, s) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className: (0, A.cn)({
                                "mb-4": s + 1 === i.length,
                                "mb-2": s + 1 !== i.length,
                              }),
                              children: (0, n.jsxs)("div", {
                                className: "flex items-end",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "flex-grow",
                                    children: (0, n.jsx)(a.Wi, {
                                      control: t,
                                      name: "services."
                                        .concat(r, ".placement.signedBy.anyOf.")
                                        .concat(s, ".value"),
                                      render: (e) => {
                                        let { field: s } = e;
                                        return (0, n.jsx)(a.yt, {
                                          type: "text",
                                          label: "Value",
                                          value: s.value,
                                          className: "w-full",
                                          onChange: (e) =>
                                            s.onChange(e.target.value),
                                        });
                                      },
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "pl-2",
                                    children: (0, n.jsx)(a.zx, {
                                      onClick: () => x(s),
                                      size: "icon",
                                      variant: "ghost",
                                      children: (0, n.jsx)(M.Z, {}),
                                    }),
                                  }),
                                ],
                              }),
                            },
                            e.id
                          )
                        )
                      : (0, n.jsx)("div", {
                          className: "text-xs text-muted-foreground",
                          children: "None",
                        }),
                }),
                (0, n.jsxs)("div", {
                  className: (0, A.cn)("flex items-start justify-between", {
                    "mb-4": !!o.length,
                  }),
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, n.jsx)("strong", {
                          className: "text-sm",
                          children: "All of",
                        }),
                        (0, n.jsx)(a.WH, {
                          title: (0, n.jsx)(n.Fragment, {
                            children:
                              "Filter providers that have been audited by ALL of these accounts.",
                          }),
                          children: (0, n.jsx)(c.Z, {
                            className: "ml-2 text-sm text-muted-foreground",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(a.zx, {
                      color: "primary",
                      variant: "default",
                      size: "sm",
                      onClick: () => {
                        v({ id: (0, U.x0)(), value: "" });
                      },
                      children: "Add All Of",
                    }),
                  ],
                }),
                u.length > 0
                  ? u.map((e, s) =>
                      (0, n.jsx)(
                        "div",
                        {
                          className: (0, A.cn)({ "mb-2": s + 1 !== o.length }),
                          children: (0, n.jsxs)("div", {
                            className: "flex items-end",
                            children: [
                              (0, n.jsx)("div", {
                                className: "flex-grow",
                                children: (0, n.jsx)(a.Wi, {
                                  control: t,
                                  name: "services."
                                    .concat(r, ".placement.signedBy.allOf.")
                                    .concat(s, ".value"),
                                  render: (e) => {
                                    let { field: s } = e;
                                    return (0, n.jsx)(a.yt, {
                                      type: "text",
                                      label: "Value",
                                      className: "w-full",
                                      value: s.value,
                                      onChange: (e) =>
                                        s.onChange(e.target.value),
                                    });
                                  },
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className: "pl-2",
                                children: (0, n.jsx)(a.zx, {
                                  onClick: () => h(s),
                                  size: "icon",
                                  variant: "ghost",
                                  children: (0, n.jsx)(M.Z, {}),
                                }),
                              }),
                            ],
                          }),
                        },
                        e.id
                      )
                    )
                  : (0, n.jsx)("div", {
                      className: "text-xs text-muted-foreground",
                      children: "None",
                    }),
              ],
            })
          );
        }),
        J = (e) => {
          var s, t;
          let {
              control: r,
              services: i,
              serviceIndex: o,
              onClose: d,
              placement: x,
            } = e,
            m = (0, l.useRef)(null),
            u = (0, l.useRef)(null),
            h = (0, V.RJ)(),
            v = i[o],
            j = h.find((e) => e.value === v.placement.pricing.denom),
            g = () => {
              var e, s, t, n, l, a;
              let r = [],
                i = [],
                c = [];
              null === (e = x.attributes) ||
                void 0 === e ||
                e.forEach((e, s) => {
                  (e.key.trim() && e.value.trim()) || r.push(s);
                }),
                null === (s = x.signedBy) ||
                  void 0 === s ||
                  s.anyOf.forEach((e, s) => {
                    e.value.trim() || i.push(s);
                  }),
                null === (t = x.signedBy) ||
                  void 0 === t ||
                  t.allOf.forEach((e, s) => {
                    e.value.trim() || c.push(s);
                  }),
                null === (n = u.current) ||
                  void 0 === n ||
                  n._removeAttribute(r),
                null === (l = m.current) ||
                  void 0 === l ||
                  l._removeSignedByAnyOf(i),
                null === (a = m.current) ||
                  void 0 === a ||
                  a._removeSignedByAllOf(c),
                d();
            };
          return (0, n.jsx)(a.GI, {
            fullWidth: !0,
            open: !0,
            variant: "custom",
            title: "Edit placement",
            actions: [
              {
                label: "Done",
                color: "secondary",
                variant: "ghost",
                side: "right",
                onClick: g,
              },
            ],
            onClose: g,
            maxWidth: "xl",
            enableCloseOnBackdropClick: !0,
            children: (0, n.jsx)(T.h, {
              contentClassName: "flex",
              children: (0, n.jsxs)("div", {
                className: "flex-grow",
                children: [
                  (0, n.jsxs)("div", {
                    className: "mb-4 grid gap-4 sm:grid-cols-2",
                    children: [
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(a.Wi, {
                          control: r,
                          name: "services.".concat(o, ".placement.name"),
                          render: (e) => {
                            let { field: s } = e;
                            return (0, n.jsx)(a.yt, {
                              type: "text",
                              label: (0, n.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  "Name",
                                  (0, n.jsx)(a.WH, {
                                    title: (0, n.jsx)(n.Fragment, {
                                      children: "The name of the placement.",
                                    }),
                                    children: (0, n.jsx)(c.Z, {
                                      className:
                                        "ml-2 text-sm text-muted-foreground",
                                    }),
                                  }),
                                ],
                              }),
                              value: s.value,
                              onChange: (e) => s.onChange(e.target.value),
                            });
                          },
                        }),
                      }),
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(a.Wi, {
                          control: r,
                          name: "services.".concat(
                            o,
                            ".placement.pricing.amount"
                          ),
                          render: (e) => {
                            let { field: s } = e;
                            return (0, n.jsx)(a.yt, {
                              type: "number",
                              label: (0, n.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                  "Pricing, $",
                                  (0, O.CI)(v.placement.pricing.denom),
                                  (0, n.jsx)(a.WH, {
                                    title: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        "The maximum amount of ",
                                        null == j ? void 0 : j.label,
                                        " you're willing to pay per block (~6 seconds).",
                                        (0, n.jsx)("br", {}),
                                        (0, n.jsx)("br", {}),
                                        "Akash will only show providers costing ",
                                        (0, n.jsx)("strong", {
                                          children: "less",
                                        }),
                                        " than",
                                        " ",
                                        (0, n.jsx)("strong", {
                                          children:
                                            (null == j ? void 0 : j.value) ===
                                            S.Dn
                                              ? (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                    "~",
                                                    (0, n.jsx)(B.N, {
                                                      denom: S.Dn,
                                                      value: (0, O.qR)(
                                                        (0, O.Yk)(
                                                          x.pricing.amount
                                                        )
                                                      ),
                                                    }),
                                                  ],
                                                })
                                              : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      children: (0, n.jsx)(
                                                        R.BK,
                                                        {
                                                          value: (0, O.qR)(
                                                            (0, z.zL)(
                                                              x.pricing.amount
                                                            )
                                                          ),
                                                          maximumFractionDigits: 2,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)(L, {}),
                                                  ],
                                                }),
                                        }),
                                        "\xa0per month",
                                      ],
                                    }),
                                    children: (0, n.jsx)(c.Z, {
                                      className:
                                        "ml-2 text-sm text-muted-foreground",
                                    }),
                                  }),
                                ],
                              }),
                              value: s.value,
                              min: 1,
                              step: 1,
                              max: 1e7,
                              onChange: (e) =>
                                s.onChange(parseFloat(e.target.value)),
                            });
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "grid gap-4 sm:grid-cols-2",
                    children: [
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(Y, {
                          control: r,
                          serviceIndex: o,
                          signedByAnyOf:
                            (null === (s = x.signedBy) || void 0 === s
                              ? void 0
                              : s.anyOf) || [],
                          signedByAllOf:
                            (null === (t = x.signedBy) || void 0 === t
                              ? void 0
                              : t.allOf) || [],
                          ref: m,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)($, {
                          control: r,
                          serviceIndex: o,
                          attributes: x.attributes || [],
                          ref: u,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var Q = t(72549),
        X = t(36523);
      let ee = (e) => {
        var s, t, m, h, j, g, p, f, y, N;
        let {
            serviceIndex: b,
            control: R,
            _services: V,
            onRemoveService: L,
            trigger: G,
            serviceCollapsed: M,
            setServiceCollapsed: U,
            setValue: $,
            gpuModels: Y,
            hasSecretOption: ee,
          } = e,
          [es, et] = (0, l.useState)(null),
          [en, el] = (0, l.useState)(null),
          [ea, er] = (0, l.useState)(null),
          [ei, ec] = (0, l.useState)(null),
          eo = (0, r.Z)(),
          ed = (0, i.Z)(eo.breakpoints.up("sm")),
          ex = !M.some((e) => e === b),
          em = V[b],
          eu = b === en,
          eh = b === es,
          ev = b === ea,
          ej = b === ei,
          { imageList: eg, hasComponent: ep, toggleCmp: ef } = (0, k.iS)(),
          ey = (0, w.O)(),
          eN = () => {
            U((e) => (ex ? e.concat([b]) : e.filter((e) => e !== b)));
          };
        return em
          ? (0, n.jsx)(a.zF, {
              open: ex,
              onOpenChange: eN,
              children: (0, n.jsx)(a.Zb, {
                className: "mt-4 rounded-sm border border-muted-foreground/20",
                children: (0, n.jsxs)(a.aY, {
                  className: "p-0",
                  children: [
                    eu &&
                      (0, n.jsx)(Z.N, {
                        control: R,
                        onClose: () => el(null),
                        serviceIndex: b,
                        envs: em.env || [],
                        hasSecretOption: ee,
                      }),
                    eh &&
                      (0, n.jsx)(F.q, {
                        control: R,
                        onClose: () => et(null),
                        serviceIndex: b,
                      }),
                    ev &&
                      (0, n.jsx)(K.H, {
                        control: R,
                        onClose: () => er(null),
                        serviceIndex: b,
                        expose: em.expose,
                        services: V,
                      }),
                    ej &&
                      (0, n.jsx)(J, {
                        control: R,
                        onClose: () => ec(null),
                        serviceIndex: b,
                        services: V,
                        placement: em.placement,
                      }),
                    (0, n.jsxs)("div", {
                      className: (0, A.cn)(
                        "flex items-end justify-between p-4",
                        { "border-b border-muted-foreground/20": ex }
                      ),
                      children: [
                        (0, n.jsx)(a.Wi, {
                          control: R,
                          name: "services.".concat(b, ".title"),
                          render: (e) => {
                            let { field: s } = e;
                            return (0, n.jsx)(a.yt, {
                              type: "text",
                              label: (0, n.jsxs)("div", {
                                className: "inline-flex items-center",
                                children: [
                                  "Service Name",
                                  (0, n.jsx)(a.WH, {
                                    title: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        "The service name serves as a identifier for the workload to be ran on the Aethernet.",
                                        (0, n.jsx)("br", {}),
                                        (0, n.jsx)("br", {}),
                                        (0, n.jsx)("a", {
                                          href: "https://akash.network/docs/getting-started/stack-definition-language/#services",
                                          target: "_blank",
                                          rel: "noopener",
                                          children:
                                            "View official documentation.",
                                        }),
                                      ],
                                    }),
                                    children: (0, n.jsx)(c.Z, {
                                      className:
                                        "ml-2 text-xs text-muted-foreground",
                                    }),
                                  }),
                                ],
                              }),
                              value: s.value,
                              className: "flex-grow",
                              onChange: (e) =>
                                s.onChange(
                                  (e.target.value || "").toLowerCase()
                                ),
                            });
                          },
                        }),
                        (0, n.jsxs)("div", {
                          className: "ml-4 flex items-center",
                          children: [
                            !ex &&
                              ed &&
                              (0, n.jsxs)("div", {
                                className:
                                  "flex items-center whitespace-nowrap",
                                children: [
                                  (0, n.jsx)(I.K, {
                                    type: "cpu",
                                    className: "flex-shrink-0",
                                    value: em.profile.cpu,
                                  }),
                                  (0, n.jsx)(I.K, {
                                    type: "ram",
                                    className: "ml-4 flex-shrink-0",
                                    value: ""
                                      .concat(em.profile.ram, " ")
                                      .concat(em.profile.ramUnit),
                                  }),
                                  (0, n.jsx)(I.K, {
                                    type: "storage",
                                    className: "ml-4 flex-shrink-0",
                                    value: ""
                                      .concat(em.profile.storage, " ")
                                      .concat(em.profile.storageUnit),
                                  }),
                                ],
                              }),
                            V.length > 1 &&
                              (0, n.jsx)(a.zx, {
                                size: "icon",
                                className: "ml-2",
                                variant: "ghost",
                                onClick: () => L(b),
                                children: (0, n.jsx)(o.Z, {}),
                              }),
                            (0, n.jsx)(a.wy, {
                              asChild: !0,
                              children: (0, n.jsx)(a.zx, {
                                size: "icon",
                                variant: "ghost",
                                className: "ml-2 rounded-full",
                                onClick: eN,
                                children: (0, n.jsx)(d.Z, {
                                  fontSize: "1rem",
                                  className: (0, A.cn)(
                                    "transition-all duration-100",
                                    { "rotate-180": ex }
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(a.Fw, {
                      children: (0, n.jsxs)("div", {
                        className: "p-4",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                              (0, n.jsx)("div", {
                                children: (0, n.jsxs)("div", {
                                  className: "grid gap-4",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: "flex items-end",
                                      children: (0, n.jsx)(a.Wi, {
                                        control: R,
                                        name: "services.".concat(b, ".image"),
                                        render: (e) => {
                                          var s;
                                          let { field: t, fieldState: l } = e;
                                          return (0, n.jsxs)(a.xJ, {
                                            className: "w-full",
                                            children: [
                                              (null == eg ? void 0 : eg.length)
                                                ? (0, n.jsx)("div", {
                                                    className:
                                                      "flex flex-grow flex-col",
                                                    children: (0, n.jsxs)(
                                                      a.OC,
                                                      {
                                                        value: t.value,
                                                        onValueChange:
                                                          t.onChange,
                                                        children: [
                                                          (0, n.jsxs)(a.i4, {
                                                            className: (0,
                                                            A.cn)("ml-1", {
                                                              "ring-2 ring-destructive":
                                                                !!l.error,
                                                            }),
                                                            "data-testid":
                                                              "ssh-image-select",
                                                            children: [
                                                              (0, n.jsx)(u(), {
                                                                alt: "Docker Logo",
                                                                src: "/images/akash-logo.svg",
                                                                layout: "fixed",
                                                                quality: 100,
                                                                width: 24,
                                                                height: 18,
                                                                priority: !0,
                                                              }),
                                                              (0, n.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex-1 pl-2 text-left",
                                                                  children: (0,
                                                                  n.jsx)(a.ki, {
                                                                    placeholder:
                                                                      "Select image",
                                                                  }),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, n.jsx)(a.Bw, {
                                                            children: (0,
                                                            n.jsx)(a.DI, {
                                                              children: eg.map(
                                                                (e) =>
                                                                  (0, n.jsx)(
                                                                    a.Ql,
                                                                    {
                                                                      value: e,
                                                                      "data-testid":
                                                                        "ssh-image-select-".concat(
                                                                          e
                                                                        ),
                                                                      children:
                                                                        e,
                                                                    },
                                                                    e
                                                                  )
                                                              ),
                                                            }),
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  })
                                                : (0, n.jsx)(a.II, {
                                                    type: "text",
                                                    label: (0, n.jsxs)("div", {
                                                      className:
                                                        "inline-flex items-center",
                                                      children: [
                                                        "Docker Image / OS",
                                                        (0, n.jsx)(a.WH, {
                                                          title: (0, n.jsxs)(
                                                            n.Fragment,
                                                            {
                                                              children: [
                                                                "Docker image of the container.",
                                                                (0, n.jsx)(
                                                                  "br",
                                                                  {}
                                                                ),
                                                                (0, n.jsx)(
                                                                  "br",
                                                                  {}
                                                                ),
                                                                "Best practices: avoid using :latest image tags as Akash Providers heavily cache images.",
                                                              ],
                                                            }
                                                          ),
                                                          children: (0, n.jsx)(
                                                            c.Z,
                                                            {
                                                              className:
                                                                "ml-2 text-xs text-muted-foreground",
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    placeholder:
                                                      "Example: mydockerimage:1.01",
                                                    value: t.value,
                                                    error: !!l.error,
                                                    onChange: (e) =>
                                                      t.onChange(
                                                        (
                                                          e.target.value || ""
                                                        ).toLowerCase()
                                                      ),
                                                    startIconClassName: "pl-2",
                                                    startIcon: (0, n.jsx)(u(), {
                                                      alt: "Docker Logo",
                                                      src: "/images/akash-logo.svg",
                                                      layout: "fixed",
                                                      quality: 100,
                                                      width: 24,
                                                      height: 18,
                                                      priority: !0,
                                                    }),
                                                    endIcon: (0, n.jsx)(v(), {
                                                      href: "https://hub.docker.com/search?q=".concat(
                                                        null ===
                                                          (s = em.image) ||
                                                          void 0 === s
                                                          ? void 0
                                                          : s.split(":")[0],
                                                        "&type=image"
                                                      ),
                                                      className: (0, A.cn)(
                                                        (0, a.dc)({
                                                          variant: "text",
                                                          size: "icon",
                                                        }),
                                                        "text-muted-foreground"
                                                      ),
                                                      target: "_blank",
                                                      children: (0, n.jsx)(
                                                        x.Z,
                                                        {}
                                                      ),
                                                    }),
                                                    "data-testid":
                                                      "image-name-input",
                                                  }),
                                              (0, n.jsx)(a.zG, {}),
                                            ],
                                          });
                                        },
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      children: (0, n.jsx)(W.a, {
                                        control: R,
                                        currentService: em,
                                        serviceIndex: b,
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      children: (0, n.jsx)(E.w, {
                                        control: R,
                                        serviceIndex: b,
                                        hasGpu: !!em.profile.hasGpu,
                                        currentService: em,
                                        gpuModels: Y,
                                        setValue: $,
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      children: (0, n.jsx)(P.a, {
                                        control: R,
                                        serviceIndex: b,
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      children: (0, n.jsx)(Q.S, {
                                        control: R,
                                        serviceIndex: b,
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      children: (0, n.jsx)(q.a, {
                                        control: R,
                                        currentService: em,
                                        serviceIndex: b,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "grid gap-4",
                                    children: [
                                      (ep("ssh") || ep("ssh-toggle")) &&
                                        (0, n.jsxs)(T.h, {
                                          className:
                                            "whitespace-break-spaces break-all",
                                          children: [
                                            ep("ssh-toggle") &&
                                              (0, n.jsx)(a.$B, {
                                                checked: ep("ssh"),
                                                onCheckedChange: (e) => {
                                                  ef("ssh"),
                                                    $("hasSSHKey", !!e);
                                                },
                                                className: "ml-4",
                                                label: "Expose SSH",
                                                "data-testid": "ssh-toggle",
                                              }),
                                            ep("ssh") &&
                                              (0, n.jsx)(C, {
                                                control: R,
                                                serviceIndex: b,
                                                setValue: $,
                                              }),
                                          ],
                                        }),
                                      (0, n.jsx)("div", {
                                        children: (0, n.jsx)(D.r, {
                                          currentService: em,
                                          setIsEditingEnv: el,
                                          serviceIndex: b,
                                        }),
                                      }),
                                      ep("command") &&
                                        (0, n.jsx)("div", {
                                          children: (0, n.jsx)(H.e, {
                                            currentService: em,
                                            setIsEditingCommands: et,
                                            serviceIndex: b,
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "mt-4",
                                    children: (0, n.jsx)(_.m, {
                                      currentService: em,
                                      setIsEditingExpose: er,
                                      serviceIndex: b,
                                    }),
                                  }),
                                  ep("service-count") &&
                                    (0, n.jsx)("div", {
                                      className: "mt-4",
                                      children: (0, n.jsx)(a.Wi, {
                                        control: R,
                                        name: "services.".concat(b, ".count"),
                                        render: (e) => {
                                          let { field: s } = e;
                                          return (0, n.jsx)(a.yt, {
                                            type: "number",
                                            label: (0, n.jsxs)("div", {
                                              className:
                                                "inline-flex items-center",
                                              children: [
                                                "Service Count",
                                                (0, n.jsx)(a.WH, {
                                                  title: (0, n.jsxs)(
                                                    n.Fragment,
                                                    {
                                                      children: [
                                                        "The number of instances of the service to run.",
                                                        (0, n.jsx)("br", {}),
                                                        (0, n.jsx)("br", {}),
                                                        (0, n.jsx)("a", {
                                                          href: "https://akash.network/docs/getting-started/stack-definition-language/#profilesplacement",
                                                          target: "_blank",
                                                          rel: "noopener",
                                                          children:
                                                            "View official documentation.",
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                  children: (0, n.jsx)(c.Z, {
                                                    className:
                                                      "ml-2 text-xs text-muted-foreground",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            value: s.value || "",
                                            onChange: (e) => {
                                              let t = parseInt(e.target.value);
                                              s.onChange(t),
                                                t &&
                                                  (G(
                                                    "services.".concat(
                                                      b,
                                                      ".profile.cpu"
                                                    )
                                                  ),
                                                  G(
                                                    "services.".concat(
                                                      b,
                                                      ".profile.ram"
                                                    )
                                                  ),
                                                  G(
                                                    "services.".concat(
                                                      b,
                                                      ".profile.storage"
                                                    )
                                                  ));
                                            },
                                            min: 1,
                                            max: 20,
                                            step: 1,
                                          });
                                        },
                                      }),
                                    }),
                                  !(null == ey ? void 0 : ey.isManaged) &&
                                    (0, n.jsx)("div", {
                                      className: "mt-4",
                                      children: (0, n.jsx)(X.R, {
                                        control: R,
                                        name: "services.".concat(
                                          b,
                                          ".placement.pricing.denom"
                                        ),
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "mt-4 break-all",
                            children: (0, n.jsx)("div", {
                              className: "grid gap-4",
                              children: (0, n.jsx)("div", {
                                children: (0, n.jsxs)(T.h, {
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className: "mb-2 flex items-center",
                                      children: [
                                        (0, n.jsx)("strong", {
                                          className: "text-sm",
                                          children: "Placement",
                                        }),
                                        (0, n.jsx)(a.WH, {
                                          title: (0, n.jsxs)(n.Fragment, {
                                            children: [
                                              "Placement is a list of settings to specify where to host the current service workload.",
                                              (0, n.jsx)("br", {}),
                                              (0, n.jsx)("br", {}),
                                              "You can filter providers by attributes, audited by and pricing.",
                                              (0, n.jsx)("br", {}),
                                              (0, n.jsx)("br", {}),
                                              (0, n.jsx)("a", {
                                                href: "https://akash.network/docs/getting-started/stack-definition-language/#profilesplacement",
                                                target: "_blank",
                                                rel: "noopener",
                                                children:
                                                  "View official documentation.",
                                              }),
                                            ],
                                          }),
                                          children: (0, n.jsx)(c.Z, {
                                            className:
                                              "ml-2 text-xs text-muted-foreground",
                                          }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "ml-4 cursor-pointer text-sm text-primary underline",
                                          onClick: () => ec(b),
                                          children: "Edit",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "text-xs",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)("strong", {
                                              children: "Name",
                                            }),
                                            "\xa0\xa0",
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-muted-foreground",
                                              children: em.placement.name,
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)("strong", {
                                              children: "Pricing",
                                            }),
                                            "\xa0\xa0",
                                            (0, n.jsxs)("span", {
                                              className:
                                                "inline-flex items-center text-muted-foreground",
                                              children: [
                                                "Max ",
                                                (0, z.zL)(
                                                  em.placement.pricing.amount,
                                                  6
                                                ),
                                                " AKT per block",
                                                (0, n.jsx)(a.WH, {
                                                  title: (0, n.jsxs)(
                                                    n.Fragment,
                                                    {
                                                      children: [
                                                        "The maximum amount of uAKT you're willing to pay per block (~6 seconds).",
                                                        (0, n.jsx)("br", {}),
                                                        (0, n.jsx)("br", {}),
                                                        "Akash will only show providers costing ",
                                                        (0, n.jsx)("strong", {
                                                          children: "less",
                                                        }),
                                                        " than this amount.",
                                                        (0, n.jsx)("br", {}),
                                                        (0, n.jsx)("br", {}),
                                                        (0, n.jsxs)("div", {
                                                          children: [
                                                            (0, n.jsxs)(
                                                              "strong",
                                                              {
                                                                children: [
                                                                  "~",
                                                                  (0, n.jsx)(
                                                                    B.N,
                                                                    {
                                                                      denom:
                                                                        S.Dn,
                                                                      value: (0,
                                                                      z.zL)(
                                                                        (0,
                                                                        O.qR)(
                                                                          em
                                                                            .placement
                                                                            .pricing
                                                                            .amount
                                                                        )
                                                                      ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            ),
                                                            "\xa0 per month",
                                                          ],
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                  children: (0, n.jsx)(c.Z, {
                                                    className:
                                                      "ml-2 text-xs text-muted-foreground",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)("strong", {
                                              children: "Attributes",
                                            }),
                                            "\xa0\xa0",
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-muted-foreground",
                                              children:
                                                ((null ===
                                                  (s =
                                                    em.placement.attributes) ||
                                                void 0 === s
                                                  ? void 0
                                                  : s.length) || 0) > 0
                                                  ? null ===
                                                      (t =
                                                        em.placement
                                                          .attributes) ||
                                                    void 0 === t
                                                    ? void 0
                                                    : t.map((e, s) =>
                                                        (0, n.jsxs)(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-xs",
                                                            children: [
                                                              e.key,
                                                              "=",
                                                              (0, n.jsx)(
                                                                "span",
                                                                {
                                                                  children:
                                                                    e.value,
                                                                }
                                                              ),
                                                            ],
                                                          },
                                                          s
                                                        )
                                                      )
                                                  : "None",
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)("strong", {
                                              children: "Signed by any of",
                                            }),
                                            "\xa0\xa0",
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-muted-foreground",
                                              children:
                                                ((null ===
                                                  (h = em.placement.signedBy) ||
                                                void 0 === h
                                                  ? void 0
                                                  : null === (m = h.anyOf) ||
                                                    void 0 === m
                                                  ? void 0
                                                  : m.length) || 0) > 0
                                                  ? null ===
                                                      (g =
                                                        em.placement
                                                          .signedBy) ||
                                                    void 0 === g
                                                    ? void 0
                                                    : null === (j = g.anyOf) ||
                                                      void 0 === j
                                                    ? void 0
                                                    : j.map((e, s) =>
                                                        (0, n.jsx)(
                                                          "span",
                                                          {
                                                            className: (0,
                                                            A.cn)({
                                                              "ml-2": 0 !== s,
                                                            }),
                                                            children: e.value,
                                                          },
                                                          s
                                                        )
                                                      )
                                                  : "None",
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsx)("strong", {
                                              children: "Signed by all of",
                                            }),
                                            "\xa0\xa0",
                                            (0, n.jsx)("span", {
                                              className:
                                                "text-muted-foreground",
                                              children:
                                                ((null ===
                                                  (f = em.placement.signedBy) ||
                                                void 0 === f
                                                  ? void 0
                                                  : null === (p = f.allOf) ||
                                                    void 0 === p
                                                  ? void 0
                                                  : p.length) || 0) > 0
                                                  ? null ===
                                                      (N =
                                                        em.placement
                                                          .signedBy) ||
                                                    void 0 === N
                                                    ? void 0
                                                    : null === (y = N.allOf) ||
                                                      void 0 === y
                                                    ? void 0
                                                    : y.map((e, s) =>
                                                        (0, n.jsx)(
                                                          "span",
                                                          {
                                                            className: (0,
                                                            A.cn)({
                                                              "ml-2": 0 !== s,
                                                            }),
                                                            children: e.value,
                                                          },
                                                          s
                                                        )
                                                      )
                                                  : "None",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          : null;
      };
    },
    24777: function (e, s, t) {
      "use strict";
      t.d(s, {
        O: function () {
          return d;
        },
      });
      var n = t(52322),
        l = t(2784),
        a = t(67810),
        r = t(50973),
        i = t(98217),
        c = t(11956),
        o = t(88540);
      let d = (e) => {
        let { code: s } = e,
          { enqueueSnackbar: t } = (0, i.Ds)(),
          d = (0, l.useRef)(null);
        return (0, n.jsxs)("pre", {
          className: "relative rounded-sm bg-popover p-4 pt-6 text-sm",
          children: [
            (0, n.jsx)("div", {
              className: "absolute left-0 top-0 flex w-full justify-end p-2",
              children: (0, n.jsx)(a.zx, {
                "aria-label": "copy",
                "aria-haspopup": "true",
                onClick: () => {
                  (0, c.T)(s),
                    t(
                      (0, n.jsx)(a.A9, {
                        title: "Copied to clipboard!",
                        iconVariant: "success",
                      }),
                      { variant: "success", autoHideDuration: 1500 }
                    );
                },
                size: "icon",
                variant: "ghost",
                type: "button",
                children: (0, n.jsx)(r.Z, {}),
              }),
            }),
            (0, n.jsx)("code", {
              ref: d,
              onClick: () => {
                (null == d ? void 0 : d.current) && (0, o.eO)(d.current);
              },
              className: "whitespace-pre-wrap break-words",
              children: s,
            }),
          ],
        });
      };
    },
    51369: function (e, s, t) {
      "use strict";
      t.d(s, {
        K: function () {
          return i;
        },
      });
      var n = t(52322);
      t(2784);
      var l = t(53914),
        a = t(63470),
        r = t(49158);
      let i = (e) => {
        let { value: s, type: t, className: i, iconSize: c = "large" } = e;
        return (0, n.jsxs)("div", {
          className: (0, r.cn)("flex items-center", i),
          children: [
            (0, n.jsxs)("div", {
              className: "text-muted-foreground",
              children: [
                "cpu" === t && (0, n.jsx)(l.JKp, { fontSize: c }),
                "gpu" === t && (0, n.jsx)(l.Nrz, { fontSize: c }),
                "ram" === t && (0, n.jsx)(l.DC3, { fontSize: c }),
                "storage" === t && (0, n.jsx)(l.WMK, { fontSize: c }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "ml-1",
              children:
                "string" == typeof s ? s : (0, n.jsx)(a.BK, { value: s }),
            }),
            (0, n.jsx)("div", {
              className: "ml-1 text-muted-foreground",
              children: (0, n.jsxs)("span", {
                className: "text-xs text-muted-foreground",
                children: [
                  "cpu" === t && "CPU",
                  "gpu" === t && "GPU",
                  "ram" === t && "RAM",
                  "storage" === t && "Disk",
                ],
              }),
            }),
          ],
        });
      };
    },
    79808: function (e, s, t) {
      "use strict";
      t.d(s, {
        N: function () {
          return c;
        },
      });
      var n = t(52322),
        l = t(63470),
        a = t(67810),
        r = t(54302),
        i = t(69793);
      let c = (e) => {
        let { denom: s, value: t, showLt: c } = e,
          { isLoaded: o, getPriceForDenom: d } = (0, r.t)(),
          x = d(s),
          m = ("string" == typeof t ? parseFloat(t) : t) * x,
          u = m > 0 ? (0, i.Zj)(m) : 0;
        return (0, n.jsxs)("span", {
          className: "inline-flex items-center",
          children: [
            !o && (0, n.jsx)(a.$j, { size: "small" }),
            c && !!x && m !== u && "< ",
            !!x &&
              (0, n.jsx)(l.BK, {
                value: u,
                style: "currency",
                currency: "USD",
              }),
          ],
        });
      };
    },
    40830: function (e, s, t) {
      "use strict";
      t.d(s, {
        F0: function () {
          return n.F0;
        },
        iS: function () {
          return n.iS;
        },
      });
      var n = t(58639);
    },
    11956: function (e, s, t) {
      "use strict";
      t.d(s, {
        T: function () {
          return n;
        },
      });
      let n = (e) => {
        if (!navigator.clipboard) {
          !(function (e) {
            let s = document.createElement("textarea");
            (s.value = e),
              (s.style.top = "0"),
              (s.style.left = "0"),
              (s.style.position = "fixed"),
              document.body.appendChild(s),
              s.focus(),
              s.select();
            try {
              let e = document.execCommand("copy");
              console.log(
                "Fallback: Copying text command was " +
                  (e ? "successful" : "unsuccessful")
              );
            } catch (e) {
              console.error("Fallback: Oops, unable to copy", e);
            }
            document.body.removeChild(s);
          })(e);
          return;
        }
        navigator.clipboard.writeText(e).then(
          () => {
            console.log("Async: Copying to clipboard was successful!");
          },
          (e) => {
            console.error("Async: Could not copy text: ", e);
          }
        );
      };
    },
    47573: function () {},
    95942: function () {},
    73088: function () {},
  },
]);
