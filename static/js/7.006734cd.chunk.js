(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{247:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(244),i=a(240),l=a(15),m=a(4);t.default=function(){return r.a.createElement(l.c,null,r.a.createElement(l.b,{name:"intro",heading:"Immutable all the things",withImage:!0},r.a.createElement(m.g,null,r.a.createElement(m.h,null,"React prefers immutability"),r.a.createElement(m.h,null,"Javascript does not"),r.a.createElement(m.h,null,"Immutability can be cumbersome (read immutable.js)"))),r.a.createElement(l.b,{name:"example",heading:"Example",withImage:!0},r.a.createElement(c.a,{language:"jsx",style:i.a},"const someArray = [1, 2, 3];\n\nconst reversedArray = someArray.reverse();")),r.a.createElement(l.b,{name:"immer",heading:"Immer.js",withImage:!0},r.a.createElement(m.g,null,r.a.createElement(m.h,{customDot:"fire"},"Lets you just use mutating functions"),r.a.createElement(m.h,{customDot:"fire"},"And immer solves the immutability"),r.a.createElement(m.h,{customDot:"fire"},"Super nice for mutating deeply nested object"),r.a.createElement(c.a,{language:"jsx",style:i.a},"import produce from 'immer'\n\nconst byId = produce((draft, action) => {\n  switch (action.type) {\n    case RECEIVE_PRODUCTS:\n      action.products.forEach(product => {\n        draft[product.id] = product\n      })\n      return\n    })\n  }\n})"),r.a.createElement(c.a,{language:"jsx",style:i.a},"const byId = (state, action) => {\n    switch (action.type) {\n        case RECEIVE_PRODUCTS:\n            return {\n                ...state,\n                ...action.products.reduce((obj, product) => {\n                    obj[product.id] = product\n                    return obj\n                }, {})\n            }\n        default:\n            return state\n    }\n}"))),r.a.createElement(l.b,{name:"slidedeck",heading:"In this project"},r.a.createElement(c.a,{language:"jsx",style:i.a},'const reducer = produce((draft, action) => {\n    switch (action.type) {\n      case "increment":\n        draft.activeSlide =\n          draft.activeSlide + 1 < draft.max\n            ? draft.activeSlide + 1\n            : draft.activeSlide;\n        return;\n      case "decrement":\n        draft.activeSlide =\n          draft.activeSlide - 1 >= 0 ? draft.activeSlide - 1 : draft.activeSlide;\n        return;\n      case "set":\n        draft.activeSlide = action.slide;\n        return;\n      default:\n        throw new Error();\n    }\n  });')),r.a.createElement(l.b,{name:"resources",heading:"Resources"},r.a.createElement(m.g,null,r.a.createElement(m.h,{customDot:"fire"},r.a.createElement(m.f,{href:"https://github.com/mweststrate/immer"},"Github")))))}}}]);
//# sourceMappingURL=7.006734cd.chunk.js.map