(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{612:function(t,s,a){"use strict";a.r(s);var e=a(49),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"disclosure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disclosure"}},[t._v("#")]),t._v(" Disclosure")]),t._v(" "),a("p",[t._v("The following RPC calls interact with the "),a("code",[t._v("komodod")]),t._v(" software, and are made available through the "),a("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),a("h2",{attrs:{id:"z-getpaymentdisclosure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-getpaymentdisclosure"}},[t._v("#")]),t._v(" z_getpaymentdisclosure")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("EXPERIMENTAL FEATURE: Payment disclosure is currently DISABLED. This call always fails.")])]),t._v(" "),a("p",[a("strong",[t._v('z_getpaymentdisclosure transaction js_index output_index ("message")')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("z_getpaymentdisclosure")]),t._v(" method generates a payment disclosure for a given joinsplit output.")]),t._v(" "),a("h3",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"txid"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v("(in development) ")])]),t._v(" "),a("tr",[a("td",[t._v('"js_index"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"output_index"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v('"message"')]),t._v(" "),a("td",[t._v("(string, optional)")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"paymentdisclosure"')]),t._v(" "),a("td",[t._v("(string)")]),t._v(" "),a("td",[t._v('a hex data string, with a "zpd:" prefix')])])])]),t._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli z_getpaymentdisclosure 96f12882450429324d5f3b48630e3168220e49ab7b0f066e5c2935a6b88bb0f2 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refund"')]),t._v("\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currently disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("You can find your "),a("code",[t._v("rpcuser")]),t._v(", "),a("code",[t._v("rpcpassword")]),t._v(", and "),a("code",[t._v("rpcport")]),t._v(" in your coin's .conf file.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpassword")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "z_getpaymentdisclosure", "params": ["96f12882450429324d5f3b48630e3168220e49ab7b0f066e5c2935a6b88bb0f2", 0, 0, "refund"] }\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcport")]),t._v("/\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currently disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"z-validatepaymentdisclosure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-validatepaymentdisclosure"}},[t._v("#")]),t._v(" z_validatepaymentdisclosure")]),t._v(" "),a("p",[a("strong",[t._v('z_validatepaymentdisclosure "paymentdisclosure"')])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("z_validatepaymentdisclosure")]),t._v(" method validates a payment disclosure.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("EXPERIMENTAL FEATURE: Payment disclosure is currently DISABLED. This call always fails.")])]),t._v(" "),a("h3",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v('"paymentdisclosure"')]),t._v(" "),a("td",[t._v("(string, required)")]),t._v(" "),a("td",[t._v('hex data string, with "zpd:" prefix')])])])]),t._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("(currently disabled)")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h4",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodo-cli z_validatepaymentdisclosure "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zpd:706462ff004c561a0447ba2ec51184e6c204..."')]),t._v("\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currently disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("You can find your "),a("code",[t._v("rpcuser")]),t._v(", "),a("code",[t._v("rpcpassword")]),t._v(", and "),a("code",[t._v("rpcport")]),t._v(" in the coin's .conf file.")]),t._v(" "),a("p",[t._v("Command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcuser")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcpassword")]),t._v(" --data-binary "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"jsonrpc": "1.0", "id":"curltest", "method": "z_validatepaymentdisclosure", "params": ["zpd:706462ff004c561a0447ba2ec51184e6c204..."] }\'')]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: text/plain;'")]),t._v(" http://127.0.0.1:"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rpcport")]),t._v("/\n")])])]),a("collapse-text",{attrs:{hidden:"",title:"Response"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currently disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);