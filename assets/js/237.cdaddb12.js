(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{513:function(s,a,t){"use strict";t.r(a);var e=t(49),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"build-instructions-for-atomicdex-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-instructions-for-atomicdex-desktop"}},[s._v("#")]),s._v(" Build Instructions for AtomicDEX Desktop")]),s._v(" "),t("h2",{attrs:{id:"ubuntu-16-04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04"}},[s._v("#")]),s._v(" Ubuntu 16.04")]),s._v(" "),t("h3",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[s._v("#")]),s._v(" Dependencies")]),s._v(" "),t("ul",[t("li",[s._v("Install the Open Source version of QT from here: "),t("a",{attrs:{href:"https://www.qt.io/download",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.qt.io/download"),t("OutboundLink")],1),s._v(". You might need to create an account 😦\n"),t("ul",[t("li",[s._v("You will be prompted to selected the version of QT software to install. Choose the latest version and note its number (Example: "),t("code",[s._v("5.14.1")]),s._v(")")]),s._v(" "),t("li",[s._v("Add the following environment variables to your "),t("code",[s._v("~/.bashrc")]),s._v(" or "),t("code",[s._v("~/.zshrc")]),s._v(" files")])])])]),s._v(" "),t("p",[s._v("Example:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QT_INSTALL_CMAKE_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/Qt/5.14.0/gcc/lib/cmake "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# QT_INSTALL_CMAKE_PATH equal to the CMake QT path")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QT_ROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/Qt/5.14.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# QT_ROOT equal to the QT root installation folder")]),s._v("\n")])])]),t("p",[s._v("or")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QT_INSTALL_CMAKE_PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/Qt/5.14.1/gcc_64/lib/cmake/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QT_ROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/Qt/5.14.1\n")])])]),t("p",[s._v("You have to look at your QT installation and set the above variables. It changes based on version/system architecture etc.,")]),s._v(" "),t("ul",[t("li",[s._v("Install the latest version of "),t("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CMake"),t("OutboundLink")],1),s._v(" (3.14 minimum)")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" purge --auto-remove cmake\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/Kitware/CMake/releases/download/v3.16.5/cmake-3.16.5-Linux-x86_64.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x cmake-3.16.5-Linux-x86_64.sh\n./cmake-3.16.5-Linux-x86_64.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s ~/cmake-3.16.5-Linux-x86_64/bin/cmake /usr/local/bin/cmake\n")])])]),t("ul",[t("li",[s._v("Install "),t("code",[s._v("gcc-9")]),s._v(" and "),t("code",[s._v("g++-9")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:jonathonf/gcc-9.0\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-9 g++-9\n")])])]),s._v(" "),t("ul",[t("li",[s._v("Install the latest version of "),t("code",[s._v("clang")]),s._v(" (clang-8 minimum) and related tools")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://apt.llvm.org/llvm.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x llvm.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./llvm.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n")])])]),t("p",[s._v("Set the recently installed clang version to be used")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-9 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" update-alternatives --install /usr/bin/clang clang /usr/bin/clang-9 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])])]),t("ul",[t("li",[s._v("Install the latest version of "),t("code",[s._v("nim")]),s._v(" and its tools")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://nim-lang.org/choosenim/init.sh -sSf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])])]),t("p",[s._v("Take note of the response and follow the instructions there to add a string similar to "),t("code",[s._v("export PATH=/home/<username>/.nimble/bin:$PATH")]),s._v(" to the end of your "),t("code",[s._v("~/.bashrc")]),s._v(" or "),t("code",[s._v("~/.zshrc")]),s._v(" files")]),s._v(" "),t("ul",[t("li",[s._v("Install other dependencies")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y ninja-build "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])])]),t("ul",[t("li",[s._v("Install "),t("code",[s._v("libwally")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/KomodoPlatform/libwally-core.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" libwally-core\n./tools/autogen.sh\n./configure --disable-shared\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j2 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),t("h3",{attrs:{id:"clone-and-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-and-build"}},[s._v("#")]),s._v(" Clone and Build")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/KomodoPlatform/atomicDEX-Pro\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" atomicDEX-Pro/ci_tools_atomic_dex\nnimble build\n./ci_tools_atomic_dex build debug  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# debug version")]),s._v("\n./ci_tools_atomic_dex build release "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# release version")]),s._v("\n")])])]),t("ul",[t("li",[s._v("The last line of the build output in your terminal gives the compiled executable's location")]),s._v(" "),t("li",[s._v("If debug version was built, it will be found in the "),t("code",[s._v("build-Debug/")]),s._v(" directory")]),s._v(" "),t("li",[s._v("If release version was built, it will be found in the "),t("code",[s._v("build-Release/")]),s._v(" directory")])]),s._v(" "),t("p",[s._v("Example:")]),s._v(" "),t("p",[s._v("The location of the built executable for debug version can be in")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("build-Debug/bin/AntaraAtomicDexAppDir/usr/bin\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);