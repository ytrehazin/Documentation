(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{589:function(e,a,o){"use strict";o.r(a);var r=o(49),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"add-a-bitcoin-compatible-coin-spv-to-agama-mobile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-a-bitcoin-compatible-coin-spv-to-agama-mobile"}},[e._v("#")]),e._v(" Add a Bitcoin Compatible coin (SPV) to Agama Mobile")]),e._v(" "),o("p",[e._v("The Agama mobile code comprises of two parts. Agama wallet library and MeteorJS app. This assetchain adding guide will cover both.")]),e._v(" "),o("h2",{attrs:{id:"agama-wallet-library"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#agama-wallet-library"}},[e._v("#")]),e._v(" Agama wallet library")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Add network params "),o("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/bitcoinjs-networks.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/bitcoinjs-networks.js@dev"),o("OutboundLink")],1),e._v(". Make use of isPoS or isZcash flags if applicable in your case.")])]),e._v(" "),o("li",[o("p",[e._v("Add an electrum server "),o("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/electrum-servers.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/electrum-servers.js@dev#L1"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Add a safe fixed fee (per transaction) "),o("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/fees.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/fees.js@dev#L1"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Add an explorer "),o("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/coin-helpers.js#L62",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/coin-helpers.js@dev#L62"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Submit a PR to the "),o("code",[e._v("dev")]),e._v(" branch")])])]),e._v(" "),o("h2",{attrs:{id:"meteorjs-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#meteorjs-app"}},[e._v("#")]),e._v(" MeteorJS app")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Drop a 60 x 60 px logo into "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/tree/dev/public/images/cryptologo/btc",target:"_blank",rel:"noopener noreferrer"}},[e._v("/public/images/cryptologo/btc@dev"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Add explorer url to whitelist "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/blob/dev/mobile-config.js#L118",target:"_blank",rel:"noopener noreferrer"}},[e._v("/mobile-config.js@dev#L118"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Add coin ticker to coins file "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/blob/dev/imports/ui/actions/coins.js#L39",target:"_blank",rel:"noopener noreferrer"}},[e._v("/imports/ui/actions/coins.js@dev#L39"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Add coin name to translation file "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/agama-mobile/blob/dev/imports/ui/translate/en.js#L344",target:"_blank",rel:"noopener noreferrer"}},[e._v("/imports/ui/translate/en.js@dev#L344"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Submit a PR, use dev branch!")])])]),e._v(" "),o("h2",{attrs:{id:"how-to-get-network-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-network-parameters"}},[e._v("#")]),e._v(" How to get network parameters")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("pubKeyHash: "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L169",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L169"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("scriptHash: "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L170",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L170"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("wif: "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L171",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L171"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("bip32 public: "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L172",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L172"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("bip32 private: "),o("a",{attrs:{href:"https://github.com/KomodoPlatform/komodo/blob/fbb3b3e9a0c432173a8d733ebbcbd7b0324d58df/src/chainparams.cpp#L173",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/komodo:src/chainparams.cpp@fbb3b3e#L173"),o("OutboundLink")],1)])])]),e._v(" "),o("p",[e._v("If you can't find "),o("code",[e._v("chainparams.cpp")]),e._v(" in your code base, all of the information and parameters required are normally contained within but not limited to these files (depends on your coin):")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("init.cpp")]),e._v(": "),o("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/init.cpp"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("code",[e._v("base58.h")]),e._v(": "),o("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/base58.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/base58.h"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("code",[e._v("chainparamsbase.h")]),e._v(": "),o("a",{attrs:{href:"https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/litecoin-project/litecoin/blob/master/src/chainparamsbase.h"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Please make sure the BTC compatible coin is working in Agama before making a PR. Pull requests containing partial information or not working assets/servers will remain unmerged until all requirements are fulfilled.")])])}),[],!1,null,null,null);a.default=t.exports}}]);