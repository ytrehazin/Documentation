(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{582:function(e,t,o){"use strict";o.r(t);var a=o(49),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"additional-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#additional-notes"}},[e._v("#")]),e._v(" Additional Notes")]),e._v(" "),o("h2",{attrs:{id:"a-back-end-for-front-end-implementations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-back-end-for-front-end-implementations"}},[e._v("#")]),e._v(" A Back End for Front-End Implementations")]),e._v(" "),o("p",[e._v("AtomicDEX software is built to have a core component that can serve many front-end graphical-user interfaces (GUIs).")]),e._v(" "),o("p",[e._v("The core component is called MarketMaker 2.0, or MM2 for brevity.")]),e._v(" "),o("p",[e._v("Various front-end GUIs exist in our ecosystem, some of them built by the volunteer efforts of our community members. We are also working to release a Komodo-supported User Experience and User Interface, in coordination with Ideas By Nature, a UX/UI design firm.")]),e._v(" "),o("p",[e._v("This also allows developers and entrepreneurs the freedom to create your own front-end implementation for your own purposes. For example, you can create your own front-end implementation that acts on the same atomic-swap network as other communities. Or, you could make a front-end implementation for your own private network.")]),e._v(" "),o("p",[e._v("The documentation here only concerns the core component, MarketMaker 2.0 (MM2). This component is typically accessed via an API or a terminal interface.")]),e._v(" "),o("p",[e._v("Documentation for a GUI for MM2 is not yet available.")]),e._v(" "),o("h2",{attrs:{id:"new-features-of-marketmaker-2-0-desktop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-features-of-marketmaker-2-0-desktop"}},[e._v("#")]),e._v(" New Features of MarketMaker 2.0 (Desktop)")]),e._v(" "),o("p",[e._v("Users who worked with the previous version of the MM software, MarketMaker 1.0 (MM1), will note several differences with the new release.")]),e._v(" "),o("h3",{attrs:{id:"new-off-chain-technology"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-off-chain-technology"}},[e._v("#")]),e._v(" New Off-Chain Technology")]),e._v(" "),o("p",[e._v("MM1 used nanomsg technology for its off-chain network layer (e.g. orderbook propagation, ordermatching, client traffic routing, and other technologies that are not active on the blockchain itself).")]),e._v(" "),o("p",[e._v("MM2 replaced nanomsg with Rust TCP implementation and also uses "),o("code",[e._v("libtorrent")]),e._v(" as a torrent/DHT network system for the off-chain network layer. This p2p software is widely used and highly reliable, granting a greater development experience.")]),e._v(" "),o("h3",{attrs:{id:"rust-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rust-implementation"}},[e._v("#")]),e._v(" Rust Implementation")]),e._v(" "),o("p",[e._v("MM1 was based on ANSI C.")]),e._v(" "),o("p",[e._v("For MM2 we ported the system to Rust, utilizing the cargo ecosystem. Internal benchmarks prove this to be more efficient. Furthermore, the Rust code base supports mobile devices, including Android & iOS. This is a key benefit, as we expect mobile devices to be a key component of MM2 adoption.")]),e._v(" "),o("h3",{attrs:{id:"multi-threading-and-other-multi-tasking-improvements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-threading-and-other-multi-tasking-improvements"}},[e._v("#")]),e._v(" Multi-Threading and Other Multi-Tasking Improvements")]),e._v(" "),o("p",[e._v("MM1 had limited multi-tasking capabilities. Also, the bob-side technology was not reliable when using MM1 in lite mode (SPV), wherein blockchain syncing is not required for end-users.")]),e._v(" "),o("p",[e._v("MM2 has multi-threading. This allows it to reliably manage multiple concurrent requests.")]),e._v(" "),o("h2",{attrs:{id:"marketmaker-2-0-for-mobile-new"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#marketmaker-2-0-for-mobile-new"}},[e._v("#")]),e._v(" MarketMaker 2.0 for Mobile (New!)")]),e._v(" "),o("p",[e._v("Komodo is pleased to announce that MarketMaker 2.0 is preparing for release on compatible Android and iOS devices. The software is currently undergoing quality tests and external reviews before publication.")]),e._v(" "),o("p",[e._v("Notable aspects of the Mobile MM2 software include:")]),e._v(" "),o("ul",[o("li",[e._v("Optimization for low-data usage and CPU consumption")]),e._v(" "),o("li",[e._v("Low storage requirements (less than 50 MB)")]),e._v(" "),o("li",[e._v("Integrates seamlessly with the desktop MarketMaker 2.0 software")])]),e._v(" "),o("p",[e._v("Through the Komodo API, mobile-device developers can integrate MM2 for Mobile into other software packages.")]),e._v(" "),o("p",[e._v("Please reach out to our team on "),o("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),o("OutboundLink")],1),e._v(" to be involved with the software release.")]),e._v(" "),o("h2",{attrs:{id:"add-your-coin-to-marketmaker-2-0"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-your-coin-to-marketmaker-2-0"}},[e._v("#")]),e._v(" Add Your Coin to MarketMaker 2.0")]),e._v(" "),o("p",[e._v('All coins that are built on the BTC and ETH core software can be added to MarketMaker 2.0 (MM2) quickly and simply. Coins built on other software frameworks may be able to be added as well, depending on specific details. Specifically, a coin must support functionality that is similar to the "CheckLockTimeVerify" of the Bitcoin protocol, wherein a utxo can be locked for a specific amount of time and then released in a manner determined by the developer. For more information, please reach out to our team on Discord.')]),e._v(" "),o("p",[e._v("To add your BTC or ETH-based coin to MM2, first follow the linked checklist below:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/KomodoPlatform/coins#about-this-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link to checklist for adding coin to MM2"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Upon completing the checklist, please submit your proposed coin configuration files to the same repository with a pull request.")]),e._v(" "),o("h2",{attrs:{id:"features-carried-from-mm1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#features-carried-from-mm1"}},[e._v("#")]),e._v(" Features Carried From MM1")]),e._v(" "),o("h5",{attrs:{id:"spv-based-trading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spv-based-trading"}},[e._v("#")]),e._v(" SPV-based Trading")]),e._v(" "),o("p",[e._v("AtomicDEX holds support for "),o("a",{attrs:{href:"https://en.bitcoin.it/wiki/Electrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SPV Electrum-based"),o("OutboundLink")],1),e._v(" coins. This feature allows a user to trade with their coins without downloading their coins' blockchain data. This feature is available for all Bitcoin-protocol based coins running native-coin daemons, Ethereum, and Ethereum-based ERC20 tokens. The AtomicDEX API is built to handle the nature of the SPV requirements, providing additional functionality to developers.")]),e._v(" "),o("h5",{attrs:{id:"liquidity-multiplication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#liquidity-multiplication"}},[e._v("#")]),e._v(" Liquidity Multiplication")]),e._v(" "),o("p",[e._v('AtomicDEX also enables a feature known as Liquidity Multiplication, a protocol that allows the same funds to be used in multiple requests on AtomicDEX "orderbooks." The first request to fill completes the trade, and all outstanding requests are immediately cancelled. This feature is available to the user when providing liquidity to the exchange (called a "Bob-side" trade).')]),e._v(" "),o("p",[e._v("Liquidity Multiplication therefore allows an initial amount of funding to create an exponentially higher amount of liquidity on the exchange. This also provides a special advantage for traders that like to wait for below-market dumps. While this feature is something that any other exchange could implement, few do.")]),e._v(" "),o("p",[e._v("On AtomicDEX, all orderbook entries are 100% backed by real funds, as opposed to a centralized exchange’s vouchers, which may be one reason why AtomicDEX can more readily offer this feature.")])])}),[],!1,null,null,null);t.default=r.exports}}]);