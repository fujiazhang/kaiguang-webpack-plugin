/*
                                 _oo8oo_
                                o8888888o
                                88" . "88
                                (| -_- |)
                                0  =  /0
                              ___/'==='___
                            .' \|     |// '.
                           / \| :| | :| | :| | 
                          /  :| | :| | :| | : :/
                         |   | \  -  /// |   ||     
                         | _|  ''---/''  |_/ || |
                           .-__  '-'  __/-.  /|||  
                       ___'. .'  /--.--  '. .'___
                    ."" '<  '.____<|>_/___.'  >' "".
                   | | :  | | :| | :| | :| | :| | :| | :
                     ` | | :| | :| | :| | :| | :| | :| .
                         佛祖开光           永无bug  
*/
!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){const o=t(1);n.exports=o},function(n,e){n.exports=class{apply(n){n.hooks.emit.tap("RemoveCommentsPlugin",n=>{for(const e in n.assets)if(e.endsWith(".js")){const t="/*\n                                 _oo8oo_\n                                o8888888o\n                                88\" . \"88\n                                (| -_- |)\n                                0  =  /0\n                              ___/'==='___\n                            .' \\|     |// '.\n                           / \\| :| | :| | :| | \n                          /  :| | :| | :| | : :/\n                         |   | \\  -  /// |   ||     \n                         | _|  ''---/''  |_/ || |\n                           .-__  '-'  __/-.  /|||  \n                       ___'. .'  /--.--  '. .'___\n                    .\"\" '<  '.____<|>_/___.'  >' \"\".\n                   | | :  | | :| | :| | :| | :| | :| | :\n                     ` | | :| | :| | :| | :| | :| | :| .\n                         佛祖开光           永无bug  \n*/\n"+n.assets[e].source().toString();n.assets[e]={source:()=>t,size:()=>t.length}}})}}}]);