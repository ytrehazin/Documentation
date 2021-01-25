(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{608:function(e,t,a){"use strict";a.r(t);var s=a(49),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"chapter-09-dice-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-09-dice-example"}},[e._v("#")]),e._v(" Chapter 09 - Dice Example")]),e._v(" "),a("p",[e._v("The dice CC contract is actually more complex in the sequences required than the assets/tokens CC. The reason is the need for realtime response by the dealer node, but also having a way to resolve bets if the dealer node is not online. The dice CC contract shows how to build in such a challenge/response mechanism, which likely will be very useful for many other realtime interactive CC contracts.")]),e._v(" "),a("p",[e._v("First, let us describe the issues that the dice CC contract needs to solve. Foremost is that it needs to be random and fair. It should also have realtime response and a fallback timeout in case the realtime response doesnt happen. As with the rewards CC contract, multiple dice plans are supported. Each plan can be customized as to the following: "),a("code",[e._v("minbet")]),e._v(", "),a("code",[e._v("maxbet")]),e._v(", "),a("code",[e._v("maxodds")]),e._v(", "),a("code",[e._v("timeoutblocks")])]),e._v(" "),a("p",[e._v("This allows each plan to control the risk exposure and also advertises to everyone when dicebets expire and a timeout win can be claimed. In event the dealer node does not process a dicebet in time, in order to prevent dealer nodes from simply not responding to dicebets that they lose, a timeout must go to the dicebet player. A short timeframe means that the dealer would need to be running multiple redundant nodes to make sure they can respond in time. If the timeout is set to long, then many players would prefer to use a different dice plan with a shorter timeout.")]),e._v(" "),a("p",[e._v("Now to describe how to ensure a proper random number that is fair. The method chosen was for the dealer node to create transactions with hash of their entropy in the "),a("code",[e._v("OP_RETURN")]),e._v(". Then the dicebet player would select a specific entropy tx and include their (unhashed) entropy to their "),a("code",[e._v("OP_RETURN")]),e._v(". This allows the dealer node to immediately determine if the dicebet won or lost. If the dicebet included the hash of the bettor entropy, then another step would be needed. However, doing so would allow some timeouts to end with a refund, rather than an automatic win for the dicebet player.")]),e._v(" "),a("p",[e._v("One additional technique used to keep all required data on the blockchain is the dealer entropy value calculation. The vin0 txid is used as one of the "),a("code",[e._v("privkeys")]),e._v(" to calculate a shared secret and then hashed to remove links to the original "),a("code",[e._v("privkey")]),e._v(". This method allows recreating the dealer's entropy value (by the dealer node) given the blockchain itself, which means there is no need for any local storage.")]),e._v(" "),a("p",[e._v("This allows the dealer node to recreate the unhashed entropy value used and so when the dicebet transaction is seen (in the mempool!), the dealer node can immediately determine if it is a winner or a loser. This is done by creating a dealer hash vs. a bettor hash via:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("dealer hash: SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("dealer entropy + bettor entropy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nbettor hash: SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bettor entropy + dealer entropy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("The same values are used, but in different order. The resulting hashes are compared arithmetically for 1:1 bets and the standard industry use is used for the higher odds: "),a("a",{attrs:{href:"https://dicesites.com/provably-fair",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://dicesites.com/provably-fair"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The dealer creates a dice plan and then also needs to create entropy transactions. Each win or loss that creates change also creates entropy transactions by the dealer, but timeout transactions wont as it needs to be created by the dealer node to prevent cheating. The dealer "),a("code",[e._v("tx")]),e._v(" are locked into the global dice CC address, as is the dicebet transaction, which selects a specific entropy "),a("code",[e._v("tx")]),e._v(" to \"roll\" against. Then the dicefinish process by the dealer will spend the dicebet outputs either all to itself for a loss, or the winning amount to th dice bettor's address. For dicebets that are not dicefinish'ed by the dealer, anybody is able to do a timeout completion.")]),e._v(" "),a("h2",{attrs:{id:"createfunding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createfunding"}},[e._v("#")]),e._v(" createfunding")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vins.*: normal inputs\nvout.0: CC vout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" funding\nvout.1: owner vout\nvout.2: dice marker address vout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" easy searching\nvout.3: normal change\nvout.n-1: opreturn "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'F'")]),e._v(" sbits minbet maxbet maxodds timeoutblocks\n")])])]),a("h2",{attrs:{id:"addfunding-entropy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addfunding-entropy"}},[e._v("#")]),e._v(" addfunding (entropy)")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vins.*: normal inputs\nvout.0: CC vout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" locked entropy funds\nvout.1: tag to owner address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" entropy funds\nvout.2: normal change\nvout.n-1: opreturn "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'E'")]),e._v(" sbits fundingtxid hentropy\n")])])]),a("h2",{attrs:{id:"bet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bet"}},[e._v("#")]),e._v(" bet")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vin.0: entropy txid from house "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("must validate vin0 of "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'E'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nvins.1+: normal inputs\nvout.0: CC vout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" locked entropy\nvout.1: CC vout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" locked bet\nvout.2: tag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" bettor"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s address (txfee + odds)\nvout.3: change\nvout.n-1: opreturn '")]),e._v("B' sbits fundingtxid entropy\n")])])]),a("h2",{attrs:{id:"loser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loser"}},[e._v("#")]),e._v(" loser")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vin.0: normal input\nvin.1: betTx CC vout.0 entropy from bet\nvin.2: betTx CC vout.1 bet amount from bet\nvin.3+: funding CC vout.0 from "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'F'")]),e._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'E'")]),e._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'W'")]),e._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'L'")]),e._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'T'")]),e._v("\nvout.0: funding CC to entropy owner\nvout.1: tag to owner address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" entropy funds\nvout.2: change to fundingpk\nvout.n-1: opreturn "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'L'")]),e._v(" sbits fundingtxid hentropy proof\n")])])]),a("h2",{attrs:{id:"winner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#winner"}},[e._v("#")]),e._v(" winner")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("same as loser, but vout.2 is winnings\nvout.3: change to fundingpk\nvout.n-1: opreturn "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'W'")]),e._v(" sbits fundingtxid hentropy proof\n")])])]),a("h2",{attrs:{id:"timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[e._v("#")]),e._v(" timeout")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("same as winner, just without hentropy or proof\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("There is an attack vector that precludes betting any large amounts, it goes as follows:")]),e._v(" "),a("ul",[a("li",[e._v("Do dicebet to get the house entropy revealed")]),e._v(" "),a("li",[e._v("Calculate bettor entropy that would win against the house entropy")]),e._v(" "),a("li",[e._v("Reorg the chain and make a big bet using the winning entropy calculated in 2.")])])]),e._v(" "),a("p",[e._v("In order to mitigate this, the disclosure of the house entropy needs to be delayed beyond a reasonable reorg depth (notarization). It is recommended for production dice games with significant amounts of money to use such a delayed disclosure method.")])])}),[],!1,null,null,null);t.default=n.exports}}]);