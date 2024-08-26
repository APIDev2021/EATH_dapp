(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7746],
  {
    96773: function (e, s, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faq",
        function () {
          return o(95087);
        },
      ]);
    },
    95087: function (e, s, o) {
      "use strict";
      o.r(s),
        o.d(s, {
          default: function () {
            return u;
          },
        });
      var t = o(52322),
        n = o(96577),
        r = o.n(n),
        a = o(39097),
        i = o.n(a),
        l = o(55351),
        c = o(22103),
        h = o(42660);
      let d = [
        {
          anchor: "lease-closed",
          title: "My lease is closed, but the deployment isn't.",
          content: (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("p", {
                children: [
                  "If your lease is closed, but your deployment isn't, that means your provider closed it. You will need to close your deployment and create a new one. You can try deploying on a different provider to see if that helps.",
                  (0, t.jsx)("br", {}),
                  (0, t.jsx)("br", {}),
                  "Here's some possible reasons why a provider could close your lease:",
                ],
              }),
              (0, t.jsxs)("ul", {
                className: "list-disc py-4 pl-8",
                children: [
                  (0, t.jsx)("li", {
                    children:
                      "Your docker image was not able to be downloaded or crashed on launch.",
                  }),
                  (0, t.jsx)("li", {
                    children:
                      "Your deployment was using more resources than what was specified in your sdl. For example, you used more disk space than allowed.",
                  }),
                  (0, t.jsx)("li", {
                    children:
                      "Your deployment did not meet the terms of service of the provider. Ultimately, each provider can choose what workload they allow.",
                  }),
                  (0, t.jsx)("li", {
                    children:
                      "The provider had to close your lease due to some outage or maintenance on their servers.",
                  }),
                ],
              }),
              (0, t.jsxs)("p", {
                children: [
                  "To know the exact cause you can try contacting your provider in the",
                  " ",
                  (0, t.jsx)(i(), {
                    href: "https://discord.com/channels/747885925232672829/1111749310325981315",
                    target: "_blank",
                    children: "#provider",
                  }),
                  " ",
                  "discord channel.",
                ],
              }),
            ],
          }),
        },
        {
          anchor: "shell-lost",
          title:
            "Can't access shell: 'The connection to your AETHERNET Shell was lost.'",
          content: (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("p", {
                children: [
                  "There is a",
                  " ",
                  (0, t.jsx)("a", {
                    href: "https://github.com/akash-network/support/issues/87",
                    target: "_blank",
                    children: "known issue",
                  }),
                  " ",
                  "where the shell access will stop working if the provider pod gets restarted. Here's two workarounds you can try:",
                ],
              }),
              (0, t.jsxs)("ul", {
                className: "list-disc py-4 pl-8",
                children: [
                  (0, t.jsxs)("li", {
                    children: [
                      'You can try the "UPDATE DEPLOYMENT" button in the "UPDATE" tab of your deployment. Even without changing your SDL, this should temporarily restore the shell access.',
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)(r(), { 
                        srcset: "/images/update.png",
                        alt: "Update Deployment",
                        class: "imgup",
                        width: 500,
                        height: 116,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      "A permanent solution would be to add your own ssh access to your deployment, here is an",
                      " ",
                      (0, t.jsx)(i(), {
                        href: "https://gist.github.com/arno01/f33b7c618ecf090108a33deea38c3c10",
                        target: "_blank",
                        children: "example SDL",
                      }),
                      " ",
                      "with ssh.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        {
          anchor: "shell-arrows-and-completion",
          title: "Shell: UP arrow and TAB autocompletion does not work",
          content: (0, t.jsx)("p", {
            children:
              'Some docker images use "sh" as the default shell. This shell does not support up arrow and TAB autocompletion. You may try sending the "bash" command to switch to a bash shell which support those feature.',
          }),
        },
        {
          anchor: "send-manifest-resources-mismatch",
          title:
            'Error while sending manifest to provider. Error: manifest cross-validation error: group "X": service "X": CPU/Memory resources mismatch for ID 1',
          content: (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("p", {
                children:
                  "This commonly happen if you try to change the hardware specs of your deployment. For example, if you try to increase the amount of memory or cpu. If you need to change the hardware spec you will need to close your deployment and create a new one.",
              }),
              (0, t.jsx)("p", {
                children:
                  "This can also happen if your deployment has multiple services and was created before the Mainnet 6 upgrade on August 31st, 2023. In this case, you will also need to close your deployment and create a new one.",
              }),
            ],
          }),
        },
        {
          anchor: "other-issues",
          title: "My issue is not listed",
          content: (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("p", {
                children:
                  "Here are some actions you can take to fix most of the errors you may encounter:",
              }),
              (0, t.jsxs)("ul", {
                className: "list-disc py-4 pl-8",
                children: [
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", {
                        children: "Change the selected node in the settings.",
                      }),
                      " Nodes are public services and can have outages and rate limiting.",
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)(r(), {
                        srcset: "/images/typ.png",
                        alt: "Change Node",
                        width: 400,
                        height: 294,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", {
                        children: "Try using another provider.",
                      }),
                      " The provider may be misconfigured or suffering from an outage.",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("strong", {
                        children: "Wait a bit and try again later.",
                      }),
                      " Some problem are temporary and simply waiting a bit and trying again will work.",
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("p", {
                children: [
                  "If you still have an issue after taking these steps, please ask your question in the",
                  " ",
                  (0, t.jsx)(i(), {
                    href: "https://t.me/AetherNetERC",
                    target: "_blank",
                    children: "#deployments",
                  }),
                  " ",
                  "channel. If you have issue creating or updating a deployment, it can help to include your SDL. Make sure to remove any sensitive information from it before sharing (ex: secrets in your env variables).",
                ],
              }),
            ],
          }),
        },
      ];
      function u() {
        return (0, t.jsxs)(c.Z, {
          children: [
            (0, t.jsx)(l.PB, { title: "Frequently Asked Questions" }),
            (0, t.jsx)(h.D, { children: "Frequently Asked Questions" }),
            (0, t.jsx)("ul", {
              className: "list-disc py-4 pl-8",
              children: d.map((e) =>
                (0, t.jsx)(
                  "li",
                  {
                    children: (0, t.jsx)(i(), {
                      href: "#" + e.anchor,
                      children: e.title,
                    }),
                  },
                  e.anchor
                )
              ),
            }),
            (0, t.jsx)("div", {
              className: "pb-8",
              children: d.map((e) =>
                (0, t.jsxs)(
                  "div",
                  {
                    children: [
                      (0, t.jsx)(h.D, {
                        subTitle: !0,
                        id: e.anchor,
                        className: "my-4",
                        children: e.title,
                      }),
                      e.content,
                    ],
                  },
                  e.anchor
                )
              ),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 96773));
    }),
      (_N_E = e.O());
  },
]);
