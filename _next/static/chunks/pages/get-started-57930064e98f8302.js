(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8395],
  {
    67581: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/get-started",
        function () {
          return s(48370);
        },
      ]);
    },
    36200: function (e, t, s) {
      "use strict";
      s.d(t, {
        T: function () {
          return n;
        },
      });
      var a = s(52322);
      s(2784);
      var r = s(55351);
      let n = (e) => {
        let { title: t, description: s = "", url: n, images: l } = e;
        return (0, a.jsx)(r.PB, {
          title: t,
          description: s,
          canonical: n,
          openGraph: { url: n, title: t, description: s, images: l },
        });
      };
    },
    18805: function (e, t, s) {
      "use strict";
      s.d(t, {
        d: function () {
          return c;
        },
      });
      var a = s(52322),
        r = s(44900),
        n = s(39097),
        l = s.n(n);
      let c = (e) => {
        let { href: t, text: s } = e;
        return (0, a.jsx)(l(), {
          href: t,
          passHref: !0,
          target: "_blank",
          rel: "noreferrer",
          children: (0, a.jsxs)("span", {
            className: "inline-flex items-center space-x-2 whitespace-nowrap",
            children: [
              (0, a.jsx)("span", { children: s }),
              (0, a.jsx)(r.Z, { className: "text-xs" }),
            ],
          }),
        });
      };
    },
    48370: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return Y;
          },
        });
      var a = s(52322),
        r = s(2784),
        n = s(67810),
        l = s(53914),
        c = s(43684),
        i = s(63025),
        o = s(18791),
        d = s(55487),
        x = s(43681),
        h = s(85714),
        p = s(12369),
        m = s(7885),
        u = s(36369),
        j = s(25237),
        g = s.n(j),
        f = s(39097),
        N = s.n(f),
        y = s(37819),
        k = s(40062),
        v = s(26383),
        w = s(50338),
        S = s(51328),
        C = s(69793),
        Z = s(40051),
        I = s(49158),
        b = s(22761),
        _ = s(18805),
        T = s(55949),
        L = s(31572),
        D = s(92730),
        A = s(21985);
      let B = (0, L.ZP)(D.Z)((e) => {
          let { theme: t } = e;
          return {
            ["&.".concat(A.Z.alternativeLabel)]: {
              top: 10,
              left: "calc(-50% + 16px)",
              right: "calc(50% + 16px)",
            },
            ["&.".concat(A.Z.active)]: {
              ["& .".concat(A.Z.line)]: { borderColor: t.palette.primary.main },
            },
            ["&.".concat(A.Z.completed)]: {
              ["& .".concat(A.Z.line)]: { borderColor: t.palette.primary.main },
            },
          };
        }),
        E = (0, L.ZP)("div")((e) => {
          let { theme: t, ownerState: s } = e;
          return {
            color: "dark" === t.palette.mode ? t.palette.grey[700] : "#eaeaf0",
            display: "flex",
            height: 22,
            alignItems: "center",
            ...(s.active && { color: t.palette.primary.main }),
            "& .QontoStepIcon-completedIcon": {
              color: t.palette.primary.main,
              zIndex: 1,
              fontSize: 18,
              marginLeft: "4px",
            },
            "& .QontoStepIcon-circle": {
              width: 8,
              height: 8,
              marginLeft: "8px",
              borderRadius: "50%",
              backgroundColor: "currentColor",
            },
          };
        });
      function z(e) {
        let { active: t, completed: s, className: r } = e;
        return (0, a.jsx)(E, {
          ownerState: { active: t },
          className: r,
          children: s
            ? (0, a.jsx)(x.Z, { className: "QontoStepIcon-completedIcon" })
            : (0, a.jsx)("div", { className: "QontoStepIcon-circle" }),
        });
      }
      let U = g()(
          () =>
            Promise.all([
              s.e(1784),
              s.e(5379),
              s.e(6741),
              s.e(9524),
              s.e(3999),
              s.e(4010),
              s.e(2615),
              s.e(9385),
              s.e(858),
            ])
              .then(s.bind(s, 32716))
              .then((e) => (console.log("done"), e))
              .catch((e) => {
                throw (console.log("error loading liquidity modal", e), e);
              }),
          {
            loadableGenerated: { webpack: () => [32716] },
            ssr: !1,
            loading: () =>
              (0, a.jsxs)(n.zx, {
                variant: "default",
                disabled: !0,
                size: "sm",
                children: [
                  (0, a.jsx)(n.$j, { size: "small", className: "mr-2" }),
                  (0, a.jsx)("span", { children: "Get More" }),
                ],
              }),
          }
        ),
        O = () => {
          let [e, t] = (0, r.useState)(0),
            {
              isWalletConnected: s,
              walletBalances: j,
              address: g,
              refreshBalances: f,
              isManaged: L,
              isTrialing: D,
            } = (0, w.O)(),
            { minDeposit: A } = (0, v.f)(),
            E = j ? (0, Z.Yk)(j.uakt) : 0,
            O = j ? (0, C.zL)(j.usdc) : 0;
          (0, r.useEffect)(() => {
            let e = localStorage.getItem("getStartedStep");
            if (e) {
              let s = parseInt(e);
              t(s >= 0 && s <= 2 ? s : 0);
            }
          }, []);
          let P = () => {
              t((e) => {
                let t = e + 1;
                return localStorage.setItem("getStartedStep", t.toString()), t;
              });
            },
            G = (e) => {
              t(e), localStorage.setItem("getStartedStep", e.toString());
            };
          return (0, a.jsxs)(d.Z, {
            activeStep: e,
            orientation: "vertical",
            connector: (0, a.jsx)(B, {}),
            children: [
              (0, a.jsxs)(c.Z, {
                children: [
                  (0, a.jsx)(o.Z, {
                    StepIconComponent: z,
                    onClick: () => (e > 0 ? G(0) : null),
                    classes: {
                      label: (0, I.cn)("text-xl tracking-tight", {
                        "cursor-pointer hover:text-primary": e > 0,
                        "!font-bold": 0 === e,
                      }),
                    },
                    children: k.envConfig.NEXT_PUBLIC_BILLING_ENABLED
                      ? "Trial / Billing"
                      : "Billing",
                  }),
                  (0, a.jsxs)(i.Z, {
                    children: [
                      k.envConfig.NEXT_PUBLIC_BILLING_ENABLED &&
                        !s &&
                        (0, a.jsx)("p", {
                          className: "text-muted-foreground",
                          children:
                            'You can pay using either USD (fiat) or with crypto ($AKT or $USDC). To pay with USD, either click "Start Trial" or "Add Credit Card". To pay with crypto, click "Connect Wallet"',
                        }),
                      s &&
                        !L &&
                        (0, a.jsxs)("div", {
                          className: "my-4 flex items-center space-x-2",
                          children: [
                            (0, a.jsx)(x.Z, { className: "text-green-600" }),
                            (0, a.jsx)("span", {
                              children: "Wallet is installed",
                            }),
                            " ",
                          ],
                        }),
                      !L &&
                        (0, a.jsxs)("p", {
                          className: "text-muted-foreground",
                          children: [
                            "You need at least ",
                            A.akt,
                            " AETH or ",
                            A.usdc,
                            " USDC in your wallet to deploy on Aethernet. If you don't have ",
                            A.akt,
                            " AETH or",
                            " ",
                            A.usdc,
                            " USDC, you can switch to the sandbox  ",
                            ,
                          ],
                        }),
                      (0, a.jsxs)("div", {
                        className: "my-4 flex items-center space-x-4",
                        children: [
                          (0, a.jsx)(n.zx, {
                            variant: "default",
                            onClick: P,
                            children: "Next",
                          }),
                          !L &&
                            (0, a.jsx)(N(), {
                              className: (0, I.cn)(
                                (0, n.dc)({ variant: "text" })
                              ),
                              href: b.iO.getStartedWallet(),
                              children: "Learn how",
                            }),
                        ],
                      }),
                      s &&
                        D &&
                        (0, a.jsxs)("div", {
                          className: "my-4 flex items-center space-x-2",
                          children: [
                            (0, a.jsx)(x.Z, { className: "text-green-600" }),
                            (0, a.jsx)("span", { children: "Trialing" }),
                          ],
                        }),
                      s &&
                        L &&
                        !D &&
                        (0, a.jsxs)("div", {
                          className: "my-4 flex items-center space-x-2",
                          children: [
                            (0, a.jsx)(x.Z, { className: "text-green-600" }),
                            (0, a.jsx)("span", {
                              children: "Billing is set up",
                            }),
                          ],
                        }),
                      !s &&
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsxs)("div", {
                              className: "my-4 flex items-center space-x-2",
                              children: [
                                (0, a.jsx)(h.Z, {
                                  className: "text-destructive",
                                }),
                                (0, a.jsx)("span", {
                                  children: "Billing is not set up",
                                }),
                              ],
                            }),
                            k.envConfig.NEXT_PUBLIC_BILLING_ENABLED &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(y.q, {
                                    className: "mr-2 w-full md:w-auto",
                                  }),
                                  (0, a.jsxs)(n.zx, {
                                    variant: "outline",
                                    className: "mr-2 border-primary",
                                    children: [
                                      (0, a.jsx)(p.Z, { className: "text-xs" }),
                                      (0, a.jsx)("span", {
                                        className: "m-2 whitespace-nowrap",
                                        children: "Add Credit Card",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            (0, a.jsx)(T.p, {}),
                          ],
                        }),
                      j &&
                        (0, a.jsxs)("div", {
                          className: "my-4 flex items-center space-x-2",
                          children: [
                            E >= A.akt || O >= A.usdc
                              ? (0, a.jsx)(x.Z, { className: "text-green-600" })
                              : (0, a.jsx)(n.WH, {
                                  title: (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      "If you don't have ",
                                      A.akt,
                                      " AETH or ",
                                      A.usdc,
                                      " USDC, you can request authorization for some tokens to get started on our",
                                      " ",
                                      (0, a.jsx)(_.d, {
                                        href: "https://t.me/AetherNetERC",
                                        text: "Discord",
                                      }),
                                      ".",
                                    ],
                                  }),
                                  children: (0, a.jsx)(m.Z, {
                                    className: "text-warning",
                                  }),
                                }),
                            L
                              ? (0, a.jsxs)("span", {
                                  children: [
                                    "You have ",
                                    (0, a.jsxs)("strong", {
                                      children: ["$", O],
                                    }),
                                  ],
                                })
                              : (0, a.jsxs)("span", {
                                  children: [
                                    "You have ",
                                    (0, a.jsx)("strong", { children: E }),
                                    " AETH and ",
                                    (0, a.jsx)("strong", { children: O }),
                                    " USDC",
                                  ],
                                }),
                            !L &&
                              (0, a.jsx)(U, {
                                address: g,
                                aktBalance: E,
                                refreshBalances: f,
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(c.Z, {
                children: [
                  (0, a.jsx)(o.Z, {
                    StepIconComponent: z,
                    onClick: () => G(1),
                    classes: {
                      label: (0, I.cn)("text-xl tracking-tight", {
                        "cursor-pointer hover:text-primary": e > 1,
                        "!font-bold": 1 === e,
                      }),
                    },
                    children: "Docker container",
                  }),
                  (0, a.jsxs)(i.Z, {
                    children: [
                      (0, a.jsx)("p", {
                        className: "mb-2 text-muted-foreground",
                        children:
                          "To deploy on Aethernet, you need a docker container image as everything runs within Kubernetes. You can make your own or browse through pre-made solutions in the marketplace.",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-muted-foreground",
                        children:
                          "For the sake of getting started, we will deploy a simple Next.js app that you can find in the deploy page.",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "my-4 flex flex-col flex-wrap items-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0",
                        children: [
                          (0, a.jsx)(n.zx, {
                            variant: "default",
                            onClick: P,
                            children: "Next",
                          }),
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(_.d, {
                              href: "https://docs.docker.com/get-started/",
                              text: "Learn how",
                            }),
                          }),
                          (0, a.jsx)(N(), {
                            href: b.iO.templates(),
                            className: (0, I.cn)(
                              "py-4",
                              (0, n.dc)({ variant: "secondary" })
                            ),
                            children: "Explore Marketplace",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(c.Z, {
                children: [
                  (0, a.jsx)(o.Z, {
                    StepIconComponent: z,
                    classes: {
                      label: (0, I.cn)("text-xl tracking-tight", {
                        "!font-bold": 2 === e,
                      }),
                    },
                    children: "Hello world",
                  }),
                  (0, a.jsxs)(i.Z, {
                    children: [
                      (0, a.jsxs)("p", {
                        className: "text-muted-foreground",
                        children: [
                          "Deploy your first web app on Aethernet! This is a simple Next.js app and you can see the",
                          " ",
                          (0, a.jsx)(_.d, {
                            href: "https://github.com/maxmaxlabs/hello-akash-world",
                            text: "source code here",
                          }),
                          ".",
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "my-4 space-x-2",
                        children: [
                          (0, a.jsxs)(N(), {
                            className: (0, I.cn)(
                              "space-x-2",
                              (0, n.dc)({ variant: "default" })
                            ),
                            href: b.iO.newDeployment({
                              templateId: "hello-world",
                              step: S.Qr.editDeployment,
                            }),
                            children: [
                              (0, a.jsx)("span", { children: "Deploy!" }),
                              (0, a.jsx)(u.Z, { className: "rotate-45" }),
                            ],
                          }),
                          (0, a.jsxs)(n.zx, {
                            onClick: () => {
                              t(0), localStorage.setItem("getStartedStep", "0");
                            },
                            className: "space-x-2",
                            variant: "ghost",
                            children: [
                              (0, a.jsx)("span", { children: "Reset" }),
                              (0, a.jsx)(l.zq9, {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var P = s(22103),
        G = s(36200),
        Y = () =>
          (0, a.jsxs)(P.Z, {
            children: [
              (0, a.jsx)(G.T, {
                title: "Get started with AETHERNET",
                url: "".concat(b.OT).concat(b.iO.getStarted()),
                description: "Follow the steps to get started with AETHERNET!",
              }),
              (0, a.jsxs)(n.Zb, {
                children: [
                  (0, a.jsx)(n.Ol, {
                    children: (0, a.jsx)(n.ll, {
                      children: "Get started with AETHERNET!",
                    }),
                  }),
                  (0, a.jsx)(n.aY, { children: (0, a.jsx)(O, {}) }),
                ],
              }),
            ],
          });
    },
  },
  function (e) {
    e.O(0, [2309, 8472, 2888, 9774, 179], function () {
      return e((e.s = 67581));
    }),
      (_N_E = e.O());
  },
]);
