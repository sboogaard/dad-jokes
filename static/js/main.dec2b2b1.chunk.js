(this.webpackJsonpcodesandbox=this.webpackJsonpcodesandbox||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(4),r=n.n(i),o=n(5),h=n(6),u=n(2),l=n(8),j=n(7),d=(n(14),function(e){return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onFormSubmit()},className:"search-form",children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter search term..",onChange:function(t){return e.onSearchValueChange(t.target.value)}}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{disabled:e.isSearching,children:"Search"}),Object(c.jsx)("button",{onClick:e.onSingleSearchClick,disabled:e.isSearching,children:"I'm Feeling Funny"})]})]})}),b=(n(15),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={searchTerm:"",jokes:[],isFetchingJoke:!1},e.onSearchChange=e.onSearchChange.bind(Object(u.a)(e)),e.searchJokes=e.searchJokes.bind(Object(u.a)(e)),e}return Object(h.a)(n,[{key:"searchJokes",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;this.setState({isFetchingJokes:!0}),fetch("https://icanhazdadjoke.com/search?term=".concat(this.state.searchTerm,"&limit=").concat(t),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=t.results;e.setState({jokes:n,isFetchingJoke:!1})}))}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e})}},{key:"renderJokes",value:function(){return Object(c.jsx)("ul",{className:"jokes-list",children:this.state.jokes.map((function(e){return Object(c.jsx)("li",{children:e.joke},e.id)}))})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("img",{className:"logo",src:"./google.png"}),Object(c.jsx)(d,{onFormSubmit:this.searchJokes,onSearchValueChange:this.onSearchChange,isSearching:this.isFetchingJoke,onSingleSearchClick:function(){return e.searchJokes(1)}}),this.state.isFetchingJoke?"Loading Joke....":this.renderJokes()]})}}]),n}(a.a.Component)),g=(document.getElementById("root"),b);r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dec2b2b1.chunk.js.map