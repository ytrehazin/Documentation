(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{616:function(e,t,a){"use strict";a.r(t);var o=a(49),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-04-cc-rpc-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-04-cc-rpc-extensions"}},[e._v("#")]),e._v(" Chapter 04 - CC RPC Extensions")]),e._v(" "),a("p",[e._v("Currently, CC contracts need to be integrated at the source level. This limits who is able to create and add new CC contracts, which at first is good, but eventually will be a too strict limitation. The runtime bindings chapter will touch on how to break out of the source based limitation, but there is another key interface level, the RPC.")]),e._v(" "),a("p",[e._v("By convention, each CC contract adds an associated set of rpc calls to the "),a("code",[e._v("komodo-cli")]),e._v(". This not only simplifies the creation of the CC contract transactions, it further will allow dapps to be created just via rpc calls. That will require there being enough foundational CC contracts already in place. As we find new usecases that cannot be implemented via rpc, then a new CC contract is made that can handle that (and more) and the power of the rpc level increases. This is a long term process.")]),e._v(" "),a("p",[e._v("The typical rpc calls that are added "),a("code",[e._v("<CC>address")]),e._v(", "),a("code",[e._v("<CClist>")]),e._v(", "),a("code",[e._v("<CCinfo>")]),e._v(" return the various special CC addresses, the list of CC contract instances and info about each CC contract instance. Along with an rpc that creates a CC instance and of course the calls to invoke a CC instance.")]),e._v(" "),a("p",[e._v("The role of the rpc calls are to create properly signed "),a("code",[e._v("rawtransactions")]),e._v(" that are ready for broadcasting. This then allows using only the rpc calls to not only invoke but to create a specific instance of a CC. The faucet contract is special in that it only has a single instance, so some of these rpc calls are skipped.")]),e._v(" "),a("p",[e._v("So, there is no MUSTHAVE rpc calls, just a sane convention to follow so it fits into the general pattern.")]),e._v(" "),a("p",[e._v("One thing that I forgot to describe was how to create a special CC address and even though this is not really an rpc issue, it is kind of separate from the core CC functions, so I will show how to do it here:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("const char *FaucetCCaddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"R9zHrofhRbub7ER77B7NrVch3A63R39GuC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nconst char *FaucetNormaladdr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RKQV4oYs4rvxAWx1J43VnT73rSTVtUeckk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nchar FaucetCChexstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("67")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"03682b255c40d0cde8faee381a1a50bbb89980ff24539cb8518e294d3a63cefe12"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nuint8_t FaucetCCpriv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" 0xd4, 0x4f, 0xf2, 0x31, 0x71, 0x7d, 0x28, 0x02, 0x4b, 0xc7, 0xdd, 0x71, 0xa0, 0x39, 0xc4, 0xbe, 0x1a, 0xfe, 0xeb, 0xc2, 0x46, 0xda, 0x76, 0xf8, 0x07, 0x53, 0x3d, 0x96, 0xb4, 0xca, 0xa0, 0xe9 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Above are the specifics for the faucet CC, but each one has the equivalent in "),a("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/cc/CCcustom.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("CCcustom.cpp"),a("OutboundLink")],1),e._v(". At the bottom of the file is a big switch statement where these values are copied into an in memory data structure for each CC type. This allows all the CC codebase to access these special addresses in a standard way.")]),e._v(" "),a("p",[e._v("In order to get the above values, follow these steps:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("use "),a("code",[e._v("getnewaddress")]),e._v(" to get a new address and put that in the "),a("code",[e._v('<CC>Normaladdr = "";')]),e._v(" line")])]),e._v(" "),a("li",[a("p",[e._v("use "),a("code",[e._v("validateaddress")]),e._v(" "),a("code",[e._v("<newaddress from A>")]),e._v(" to get the pubkey, which is put into the "),a("code",[e._v('<CC>hexstr[67] = "";')]),e._v(" line")])]),e._v(" "),a("li",[a("p",[e._v("stop the daemon ["),a("code",[e._v("komodod")]),e._v("] and start with "),a("code",[e._v("-pubkey=<pubkey from B>")]),e._v(" and do a "),a("code",[e._v("<CC>address")]),e._v(" rpc call. In the console you will get a printout of the hex for the privkey, assuming the if ( 0 ) in "),a("code",[e._v("Myprivkey()")]),e._v(" is enabled ("),a("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/cc/CCutils.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("CCutils.cpp"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("update the "),a("code",[e._v("CCaddress")]),e._v(" and "),a("code",[e._v("privkey")]),e._v(" and dont forget to change the "),a("code",[e._v("-pubkey=")]),e._v(" parameter")])])]),e._v(" "),a("p",[e._v("The first rpc command to add is "),a("code",[e._v("<CC>address")]),e._v(" and to do that, add a line to "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/rpc/server.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("rpcserver.h"),a("OutboundLink")],1),e._v(" and update the commands array in "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/rpc/server.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("rpcserver.cpp"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("In the "),a("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/wallet/rpcwallet.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("rpcwallet.cpp"),a("OutboundLink")],1),e._v(" file you will find the actual rpc functions, find one of the "),a("code",[e._v("<CC>address")]),e._v(" ones, copy paste, change the eval code to your eval code and customize the function. Oh, and dont forget to add an entry into "),a("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/cc/eval.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("eval.h"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Now you have made your own CC contract, but it wont link as you still need to implement the actual functions of it. This will be covered in the following chapters.")])])}),[],!1,null,null,null);t.default=s.exports}}]);