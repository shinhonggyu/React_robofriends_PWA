(this.webpackJsonprobofriens2=this.webpackJsonprobofriens2||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(2),s=n.n(c),a=n(5),i=n(8),h=n(12),u=n(13),b=(n(23),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))}),l=n(1),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return console.log("CardList"),Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},O=function(e){var t=e.searchChange;return console.log("SearchBox"),Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue ",type:"search",placeholder:"search robots",onChange:t})})},g=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"600px"},children:e.children})},f=(n(25),n(3)),p=n(4),v=n(7),x=n(6),m=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(f.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(o.a.Component),y="CHANGE_SEARCH_FIELD",C="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS",E="REQUEST_ROBOTS_FAILED",S=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),";"]})}}]),n}(r.Component),F=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:y,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:C}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:E,payload:t})}))}))}}}))((function(e){var t=e.searchField,n=e.robots,o=e.isPending,c=e.onSearchChange,s=e.onRequestRobots;Object(r.useEffect)((function(){s()}),[s]);var a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(l.jsx)("h1",{children:"Loading.."}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)(S,{}),Object(l.jsx)(O,{searchChange:c}),Object(l.jsx)(g,{children:Object(l.jsx)(m,{children:Object(l.jsx)(j,{robots:a})})})]})})),w=(n(26),{searchField:""}),P={isPending:!1,robots:[],error:""},L=(Object(h.createLogger)(),Object(i.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object.assign({},e,{isPending:!0});case R:return Object.assign({},e,{robots:t.payload,isPending:!1});case E:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),T=Object(i.c)(L,Object(i.a)(u.a));s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(a.a,{store:T,children:Object(l.jsx)(F,{})})}),document.getElementById("root")),b()}},[[27,1,2]]]);
//# sourceMappingURL=main.63dfb678.chunk.js.map