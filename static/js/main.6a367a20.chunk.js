(this.webpackJsonpspotify_react_clone=this.webpackJsonpspotify_react_clone||[]).push([[0],{60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(25),i=s.n(a),r=(s(60),s(15)),o=(s(61),s(62),s(63),s(26)),l=s.n(o),j=s(92),d=s(1),b=Object(c.createContext)(),u=function(e){var t=e.initialState,s=e.reducer,n=e.children;return Object(d.jsx)(b.Provider,{value:Object(c.useReducer)(s,t),children:n})},O=function(){return Object(c.useContext)(b)};var p=function(){var e,t=O(),s=Object(r.a)(t,2),c=s[0].user;return s[1],Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"header__left",children:[Object(d.jsx)(l.a,{}),Object(d.jsx)("input",{placeholder:"Search"})]}),Object(d.jsxs)("div",{className:"header__right",children:[Object(d.jsx)(j.a,{src:null===c||void 0===c||null===(e=c.images[0])||void 0===e?void 0:e.url,alt:null===c||void 0===c?void 0:c.display_name}),Object(d.jsx)("h4",{children:null===c||void 0===c?void 0:c.display_name})]})]})},h=s(39),x=s.n(h),m=s(40),v=s.n(m),f=s(41),y=s.n(f);s(70);var _=function(e){var t=e.track;return Object(d.jsxs)("div",{className:"SongRow",children:[Object(d.jsx)("div",{className:"Song_Cover",children:Object(d.jsx)("img",{src:null===t||void 0===t?void 0:t.album.images[2].url,alt:t.album.name})}),Object(d.jsxs)("div",{className:"Song_info",children:[Object(d.jsx)("h4",{children:t.name}),Object(d.jsx)("p",{children:t.artists.map((function(e){return e.name})).join(", ")}),Object(d.jsx)("br",{})]})]})};var g=function(e){var t,s=e.spotify,c=O(),n=Object(r.a)(c,2),a=n[0].discoverweekly;return n[1],console.log(a),Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)(p,{spotify:s}),Object(d.jsxs)("div",{className:"body_text",children:[Object(d.jsx)("img",{src:null===a||void 0===a||null===(t=a.images[0])||void 0===t?void 0:t.url}),Object(d.jsxs)("div",{className:"body_text_info",children:[Object(d.jsx)("strong",{children:"PLAYLIST"}),Object(d.jsx)("h4",{children:null===a||void 0===a?void 0:a.name}),Object(d.jsx)("p",{children:null===a||void 0===a?void 0:a.description})]})]}),Object(d.jsxs)("div",{className:"player_body_icons",children:[Object(d.jsx)(x.a,{}),Object(d.jsx)(v.a,{fontSize:"large"}),Object(d.jsx)(y.a,{})]}),null===a||void 0===a?void 0:a.tracks.items.map((function(e){return Object(d.jsx)(_,{track:e.track})}))]})};s(71),s(72);var N=function(e){var t=e.title,s=e.Icon;return Object(d.jsxs)("div",{className:"SidebarOption",children:[s&&Object(d.jsx)(s,{className:"heading_icon"}),s?Object(d.jsxs)("h4",{children:[" ",t," "]}):Object(d.jsxs)("p",{children:[" ",t," "]})]})},k=s(42),S=s.n(k),w=s(43),E=s.n(w);var I=function(){var e,t=O(),s=Object(r.a)(t,2),c=s[0].playlists;return s[1],Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("img",{className:"sidebar_logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"spotify-logo"}),Object(d.jsx)(N,{title:"Home",Icon:S.a}),Object(d.jsx)(N,{title:"Search",Icon:l.a}),Object(d.jsx)(N,{title:"Your Library",Icon:E.a}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{className:"sidebar_title",children:"Playlists"}),Object(d.jsx)("hr",{}),console.log("Inside \ud83e\udd23"),console.log(c),null===c||void 0===c||null===(e=c.items)||void 0===e?void 0:e.map((function(e){return Object(d.jsx)(N,{title:e.name})}))]})},T=s(46),L=s.n(T),A=s(45),P=s.n(A),C=s(47),R=s.n(C),Y=s(44),K=s.n(Y),z=s(48),J=s.n(z),M=s(49),U=s.n(M),V=s(50),B=s.n(V),D=s(90),G=s(91);s(73);var W=function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsxs)("div",{className:"footer__left",children:[Object(d.jsx)("img",{className:"album_cover",src:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1531202322/srch_adityamusic_INA091816158.jpg",alt:""}),Object(d.jsxs)("div",{className:"song__info",children:[Object(d.jsx)("h4",{children:"Inkem Inkem Inkem Kaavaale"}),Object(d.jsx)("p",{children:"Geetha Govindam"})]})]}),Object(d.jsxs)("div",{className:"footer__center",children:[Object(d.jsx)(K.a,{className:"footer__green"}),Object(d.jsx)(P.a,{className:"footer__icon"}),Object(d.jsx)(L.a,{fontSize:"large",className:"footer__icon"}),Object(d.jsx)(R.a,{className:"footer__icon"}),Object(d.jsx)(J.a,{className:"footer__green"})]}),Object(d.jsx)("div",{className:"footer__right",children:Object(d.jsxs)(D.a,{container:!0,spacing:2,children:[Object(d.jsx)(D.a,{item:!0,children:Object(d.jsx)(U.a,{})}),Object(d.jsx)(D.a,{item:!0,children:Object(d.jsx)(B.a,{})}),Object(d.jsxs)(D.a,{item:!0,xs:!0,children:[" ",Object(d.jsx)(G.a,{"aria-labelledby":"continuous-slider"})]})]})})]})};var H=function(e){var t=e.spotify;return Object(d.jsxs)("div",{className:"player",children:[Object(d.jsxs)("div",{className:"player__body",children:[Object(d.jsx)(I,{}),Object(d.jsx)(g,{spotify:t})]}),Object(d.jsx)(W,{})]})},Q=(s(74),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("5023f73588f045349ac2b0733041249b","&redirect_uri=").concat("https://sanket9006.github.io/spotify_react_clone/","&scope=").concat(["user-read-playback-position","user-read-email","user-library-modify","playlist-modify-public","ugc-image-upload","user-follow-modify","user-modify-playback-state","user-read-recently-played","user-read-private","user-library-read","user-top-read","playlist-modify-private","user-follow-read","user-read-playback-state","user-read-currently-playing","playlist-read-private","playlist-read-collaborative"].join("%20"),"&response_type=token&show_dialog=true"));var X=function(){return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"spotify-logo"}),Object(d.jsx)("a",{href:Q,children:"Login with spotify"})]})},Z=(s(75),s(51)),q=s.n(Z);var F=function(){var e=new q.a,t=O(),s=Object(r.a)(t,2),n=s[0],a=(n.user,n.token),i=s[1];return Object(c.useEffect)((function(){var t=window.location.hash.substring(1).split("&")[0].split("=")[1];window.location.hash="",t&&(console.log(t),i({type:"SET_TOKEN",token:t}),e.setAccessToken(t),e.getMe().then((function(e){i({type:"SET_USER",user:e})})),e.getUserPlaylists().then((function(e){console.log("playlists insidde app.js"),console.log(e),i({type:"SET_PLAYLISTS",playlists:e})})),e.getPlaylist("37i9dQZEVXcCB71TkMiJ0A").then((function(e){i({type:"DISCOVER_WEEKLY",discoverweekly:e})})))}),[]),Object(d.jsx)("div",{className:"App",children:a?Object(d.jsx)(H,{spotify:e}):Object(d.jsx)(X,{})})},$=s(12),ee=function(e,t){switch(console.log(e),console.log(t),t.type){case"SET_USER":return Object($.a)(Object($.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object($.a)(Object($.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object($.a)(Object($.a)({},e),{},{playlists:t.playlists});case"DISCOVER_WEEKLY":return Object($.a)(Object($.a)({},e),{},{discoverweekly:t.discoverweekly});default:return Object($.a)({},e)}console.log(e),console.log(t)};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(u,{initialState:{user:null,playlists:[],playing:!1,item:null,token:null},reducer:ee,children:Object(d.jsx)(F,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.6a367a20.chunk.js.map