(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{245:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(243),l=a(238),c=a(4),r=a(15),m=a(64),u=a.n(m);t.default=function(){return o.a.createElement(r.c,null,o.a.createElement(r.b,{name:"intro",heading:"What is the wrong with React?",withImage:!0},o.a.createElement(c.f,null,o.a.createElement(c.g,{customDot:"angry"},"Wrapper hell"),o.a.createElement(c.g,{customDot:"down"},"Awkward to share state logic"),o.a.createElement(c.g,{customDot:"down"},"Imperative state and lifecycle handling"),o.a.createElement(c.g,{customDot:"puke"},"Classes in React... and this"))),o.a.createElement(r.b,{name:"example",heading:"Example",withImage:!0},o.a.createElement(s.a,{language:"jsx",style:l.a},'const [name, setName] = useState("Foo Bar")'),o.a.createElement(s.a,{language:"jsx",style:l.a},"const value = useContext(SomeContext)"),o.a.createElement(s.a,{language:"jsx",style:l.a},'useEffect(() => {\n    window.setTitle(SomeValue);\n    return () => window.setTitle("DefaultValue");\n}, [SomeValue])')),o.a.createElement(r.b,{name:"summary",heading:"Hooks",withImage:!0},o.a.createElement(c.f,null,o.a.createElement(c.g,{customDot:"fire"},"Functional all the things"),o.a.createElement(c.g,{customDot:"fire"},"Better separation of concern"),o.a.createElement(c.g,{customDot:"fire"},"Easier to share state logic"))),o.a.createElement(r.b,{name:"separation",heading:"Separation of concern"},o.a.createElement("img",{alt:"",src:u.a})),o.a.createElement(r.b,{name:"donts",heading:"Hooks dont's",withImage:!0},o.a.createElement(c.f,null,o.a.createElement(c.g,{customDot:"skull"},"Do not work with classes"),o.a.createElement(c.g,{customDot:"skull"},"Must be on top level"),o.a.createElement(c.g,{customDot:"skull"},"Can not be in a loop or branch"),o.a.createElement(c.g,{customDot:"skull"},"Do not replace ComponentWillCatch... yet"),o.a.createElement(c.g,{customDot:"skull"},"or getSnapshotBeforeUpdate, but who uses that anyway?"),o.a.createElement(c.g,{customDot:"skull"},"Rewrite all old components..."),o.a.createElement(c.g,{customDot:"fire"},"Just remember to add hooks-eslint-plugin, and you be fine!"))),o.a.createElement(r.b,{name:"how",heading:"Hooks note",withImage:!0},o.a.createElement(c.f,null,o.a.createElement(c.g,{customDot:!0},"Each hook scoped to the component"),o.a.createElement(c.g,{customDot:!0},"Use context or prop drilling to share state, as you'd expect"))),o.a.createElement(r.b,{name:"custom",heading:"\ud83d\udd25\ud83d\udd25 Custom hooks \ud83d\udd25\ud83d\udd25",withImage:!0},o.a.createElement(c.f,null,o.a.createElement(c.g,{customDot:"fire"},"Where it really becomes cool is custom hooks"),o.a.createElement(c.g,{customDot:"heart"},"https://usehooks.com")),o.a.createElement(s.a,{language:"jsx",style:l.a},"import React, { useState, useEffect } from 'react';\n\nfunction useFriendStatus(friendID) {\n  const [isOnline, setIsOnline] = useState(null);\n\n  function handleStatusChange(status) {\n    setIsOnline(status.isOnline);\n  }\n\n  useEffect(() => {\n    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);\n    return () => {\n      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);\n    };\n  });\n\n  return isOnline;\n}")))}},64:function(e,t,a){e.exports=a.p+"static/media/separation.f3dcdf86.png"}}]);
//# sourceMappingURL=4.b3ad2145.chunk.js.map