(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{309:function(e,t,a){"use strict";t.a={data:function(){return{tokenDetails:[{name:"HelloBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"100k",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1,originalPrice:0,price:0,gas:1330639},{name:"SimpleBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!1,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!1,originalPrice:.5,price:.025,gas:1333276},{name:"StandardBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:2.5,price:.05,gas:1260139},{name:"BurnableBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Fixed",accessType:"Ownable",mintable:!1,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:4.5,price:.075,gas:1444650},{name:"MintableBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",mintable:!0,burnable:!1,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:5.5,price:1,gas:1524151},{name:"CommonBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Capped",accessType:"Ownable",mintable:!0,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:6.5,price:1.25,gas:1708581},{name:"UnlimitedBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",mintable:!0,burnable:!0,operable:!1,tokenRecover:!1,removeCopyright:!0,originalPrice:7.5,price:1.5,gas:1637163},{name:"AmazingBEP20",version:"2.0.0",standard:!0,verified:!0,detailed:!0,customizeDecimals:!0,supplyType:"Unlimited",accessType:"Ownable",mintable:!0,burnable:!0,operable:!0,tokenRecover:!0,removeCopyright:!0,originalPrice:8.5,price:2,gas:2254686}]}}}},344:function(e,t,a){"use strict";a.r(t);a(10),a(12),a(15);var i={name:"PricingTable",mixins:[a(309).a],data:function(){return{carousel:null,slide:null}},mounted:function(){var e=this;a.e(19).then(a.t.bind(null,333,7)).then((function(t){e.carousel=t.Carousel,e.slide=t.Slide})).catch((function(e){console.log(e)}))}},n=a(43),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pricing-table"},[a("b-row",{staticClass:"mb-5"},[a("b-col",{attrs:{lg:"10","offset-lg":"1"}},[a("h4",{staticClass:"text-center font-weight-light text-light"},[e._v("\n                Choose between "+e._s(e.tokenDetails.length)+" different Token types.\n            ")]),e._v(" "),a("p",{staticClass:"text-center font-weight-light text-light"},[e._v("\n                What are your Token requirements?\n            ")])])],1),e._v(" "),e.carousel?a(e.carousel,{tag:"component",attrs:{perPageCustom:[[0,1],[576,2],[992,3],[1536,4]],paginationColor:"#343a40",paginationActiveColor:"#f8f9fa"}},e._l(e.tokenDetails,(function(t,i){return e.slide?a(e.slide,{tag:"component"},[a("b-card",{staticClass:"mb-3 mx-3",attrs:{"no-body":"",itemscope:"",itemtype:"http://schema.org/Product"}},[a("b-card-title",{staticClass:"pt-5 font-weight-light text-center",attrs:{itemprop:"name"}},[e._v("\n                    "+e._s(t.name)+"\n                ")]),e._v(" "),a("meta",{attrs:{itemprop:"sku",content:t.name}}),e._v(" "),a("div",{attrs:{itemprop:"brand",itemtype:"http://schema.org/Brand",itemscope:""}},[a("meta",{attrs:{itemprop:"name",content:"BEP20 Token Generator"}})]),e._v(" "),a("p",{staticClass:"card-price text-center"},[t.originalPrice!==t.price?a("b-badge",{attrs:{variant:"danger"}},[a("s",[e._v(e._s(t.originalPrice)+" "),a("small",[e._v("BNB")])])]):e._e(),e._v(" "),a("span",{staticClass:"align-middle",attrs:{itemprop:"offers",itemscope:"",itemtype:"http://schema.org/Offer"}},[a("span",{attrs:{itemprop:"price"}},[e._v(e._s(t.price))]),e._v(" "),a("small",{staticClass:"term",attrs:{itemprop:"priceCurrency"}},[e._v("BNB")]),e._v(" "),a("link",{attrs:{itemprop:"url",href:e.$withBase("/create-token/?tokenType="+t.name)}}),e._v(" "),a("meta",{attrs:{itemprop:"availability",content:"InStock"}})])],1),e._v(" "),a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        BEP20 Compliant "),a("ui--checkmark",{attrs:{value:t.standard}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Verified Source Code "),a("ui--checkmark",{attrs:{value:t.verified}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Detailed "),a("ui--checkmark",{attrs:{value:t.detailed}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Customizable Decimals "),a("ui--checkmark",{attrs:{value:t.customizeDecimals}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Remove Copyright "),a("ui--checkmark",{attrs:{value:t.removeCopyright}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Supply Type\n                        "),a("b-badge",{attrs:{variant:"Capped"===t.supplyType?"success":"Unlimited"===t.supplyType?"info":"Fixed"===t.supplyType?"warning":"danger"}},[e._v("\n                            "+e._s(t.supplyType)+"\n                        ")])],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Access Type\n                        "),a("b-badge",{attrs:{variant:"Role Based"===t.accessType?"success":"Ownable"===t.accessType?"info":"warning"}},[e._v("\n                            "+e._s(t.accessType)+"\n                        ")])],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Burnable "),a("ui--checkmark",{attrs:{value:t.burnable}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Mintable "),a("ui--checkmark",{attrs:{value:t.mintable}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Operable (ERC1363) "),a("ui--checkmark",{attrs:{value:t.operable}})],1),e._v(" "),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[e._v("\n                        Token Recover "),a("ui--checkmark",{attrs:{value:t.tokenRecover}})],1),e._v(" "),a("b-list-group-item",{staticClass:"justify-content-between align-items-center text-center py-3",attrs:{variant:"warning",to:{path:"/create-token/",query:{tokenType:t.name}},itemprop:"url"}},[e._v("\n                        Create\n                    ")])],1)],1)],1):e._e()})),1):e._e(),e._v(" "),a("b-row",[a("b-col",{staticClass:"mt-4",attrs:{lg:"6","offset-lg":"3"}},[a("p",{staticClass:"text-center text-light"},[e._v("\n                * GAS fee will be added to final amount\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);