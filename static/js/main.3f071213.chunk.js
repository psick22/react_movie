(this.webpackJsonpreact_movie=this.webpackJsonpreact_movie||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),i=a.n(n),r=a(13),c=a.n(r),o=a(4),l=a.n(o),m=a(14),d=a(15),j=a(16),u=a(19),v=a(18),g=a(17),h=a.n(g),b=(a(44),function(e){var t=e.title,a=e.summary,n=e.rating,i=e.genres,r=e.year,c=e.poster;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:c,alt:t,title:t}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsxs)("h3",{className:"movie__title",children:["Title : ",t]}),Object(s.jsxs)("h5",{className:"movie__rating",children:["Rating : ",n," / 10.0"]}),Object(s.jsxs)("h5",{className:"movie__year",children:["Year : ",r]}),Object(s.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))})]}),Object(s.jsx)("p",{className:"movie__summary",children:a.slice(0,140)})]})}),_=(a(45),function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading.."})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(b,{id:e.id,title:e.title,summary:e.summary,rating:e.rating,genres:e.genres,year:e.year,language:e.language,poster:e.medium_cover_image},e.id)}))})})}}]),a}(i.a.Component));c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3f071213.chunk.js.map