(this["webpackJsonppokemon-react"]=this["webpackJsonppokemon-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/pokemon.6b4ffa55.svg"},21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(20),i=a.n(l),o=(a(26),a(27),a(2)),r=a.n(o),c=a(3),m=a(5),u=a(6),d=a(9),p=a(8),_=(a(29),a(10)),k=a.n(_),h=function(e){var t=e.attribute;return null===t?s.a.createElement("div",{className:"pokemon__details hide-scrollbar"},s.a.createElement("div",{className:"pokemon__details__identifier"},s.a.createElement("img",{className:"pokemon__details__identifier__logo",src:k.a,alt:"Pokemon Logo"}),s.a.createElement("div",{className:"pokemon__details__identifier__empty"},s.a.createElement("h1",null,"Welcome!"),s.a.createElement("h5",null,"Click pokemon to see the details"))),s.a.createElement("div",{className:"pokemon__details__stats"},s.a.createElement("div",{className:"pokemon__details__stats__box col-4"},s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"\xa0")),s.a.createElement("div",{className:"pokemon__details__stats__box col-4"},s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"\xa0")),s.a.createElement("div",{className:"pokemon__details__stats__box col-4"},s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"\xa0")),s.a.createElement("div",{className:"pokemon__details__stats__box col-4"},s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"\xa0")),s.a.createElement("div",{className:"pokemon__details__stats__box col-4"},s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"\xa0")),s.a.createElement("div",{className:"pokemon__details__stats__box col-4"},s.a.createElement("div",null,"\xa0"),s.a.createElement("div",null,"\xa0")))):s.a.createElement("div",{className:"pokemon__details hide-scrollbar"},s.a.createElement("div",{className:"pokemon__details__identifier"},s.a.createElement("img",{className:"pokemon__details__identifier__logo",src:k.a,alt:"Pokemon Logo"}),s.a.createElement("div",{className:"pokemon__details__identifier__type"},t.types.map((function(e,t){return s.a.createElement("span",{key:t},e)}))),s.a.createElement("img",{className:"pokemon__details__identifier__image",src:t.image,alt:t.name+"'s image"}),s.a.createElement("p",null,"#",t.id,".\xa0",t.name)),s.a.createElement("div",{className:"pokemon__details__stats"},t.stats.map((function(e,t){return s.a.createElement("div",{className:"pokemon__details__stats__box col-4",key:t},s.a.createElement("div",null,e.title),s.a.createElement("div",null,e.value))}))),s.a.createElement("div",{className:"pokemon__details__ability"},s.a.createElement("div",null,"Abilities:"),t.abilities.map((function(e,t){return s.a.createElement("span",{key:t},e)}))),s.a.createElement("div",{className:"pokemon__details__panel"},t.moves.map((function(e,t){return s.a.createElement("span",{key:t},e)}))))},v=a(7),f=a(4),b=a.n(f),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={url:"https://pokeapi.co/api/v2/pokemon?limit=10",urlType:"https://pokeapi.co/api/v2/type",previous:null,next:null,pokemons:null,lastSelectedPokemon:null,types:null,isFiltered:!1,limit:null,offset:null},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPokemon(this.state.url);case 2:return t=e.sent,this.setPokemon(t),e.next=6,b.a.get(this.state.urlType);case 6:a=e.sent,this.setState({types:a.data.results.map((function(e){return e.name}))});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemon",value:function(e){return b.a.get(e)}},{key:"setPokemon",value:function(e){this.setState({previous:e.data.previous,next:e.data.next,pokemons:e.data.results})}},{key:"removeLastSelectedPokemon",value:function(){null!==this.state.lastSelectedPokemon&&document.querySelector("[data-index=".concat(this.state.lastSelectedPokemon.classList.remove("active"),"]"))}},{key:"handleClick",value:function(e,t,a){this.props.getSelectedPokemon(t),this.removeLastSelectedPokemon(),"click"===a?(this.setState({lastSelectedPokemon:e.target}),e.target.classList.add("active")):(this.setState({lastSelectedPokemon:e}),e.classList.add("active"))}},{key:"handleClickFilter",value:function(){var e=document.querySelector("#type_list");e.value="",this.handleChange(e,"filter")}},{key:"handleChange",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=null,n="datalist"===a?t.target.value:t.value,this.removeLastSelectedPokemon(),""!==n){e.next=11;break}return e.next=6,this.getPokemon(this.state.url);case 6:s=e.sent,this.setPokemon(s),this.setState({lastSelectedPokemon:null,isFiltered:!1,limit:null,offset:null}),e.next=15;break;case 11:return e.next=13,b.a.get(this.state.urlType+"/".concat(t.target.value));case 13:l=e.sent,this.setState({previous:null,next:null,pokemons:l.data.pokemon.map((function(e){return{name:e.pokemon.name,url:e.pokemon.url}})),lastSelectedPokemon:null,isFiltered:!0,limit:10,offset:0});case 15:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleNavigation",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,s,l,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="top"===e.t0?3:"bottom"===e.t0?5:"right"===e.t0?7:"left"===e.t0?21:35;break;case 3:return null!==this.state.lastSelectedPokemon&&9!==parseInt(this.state.lastSelectedPokemon.dataset.index)?this.state.lastSelectedPokemon.nextSibling.dataset.index-1!==0&&this.handleClick(this.state.lastSelectedPokemon.previousSibling,this.state.lastSelectedPokemon.previousSibling.dataset.url,"navigation"):null!==this.state.lastSelectedPokemon&&9===parseInt(this.state.lastSelectedPokemon.dataset.index)&&this.handleClick(this.state.lastSelectedPokemon.previousSibling,this.state.lastSelectedPokemon.previousSibling.dataset.url,"navigation"),e.abrupt("break",36);case 5:return null!==this.state.lastSelectedPokemon&&parseInt(this.state.lastSelectedPokemon.dataset.index)+1!==10&&this.handleClick(this.state.lastSelectedPokemon.nextSibling,this.state.lastSelectedPokemon.nextSibling.dataset.url,"navigation"),e.abrupt("break",36);case 7:if(!this.state.isFiltered){e.next=13;break}a=this.state.limit+10,n=this.state.offset+10,this.state.pokemons.length-a>-10&&(this.removeLastSelectedPokemon(),this.setState({limit:a,offset:n})),e.next=20;break;case 13:if(null===this.state.next){e.next=20;break}return e.next=16,this.getPokemon(this.state.next);case 16:s=e.sent,this.removeLastSelectedPokemon(),this.setState({lastSelectedPokemon:null}),this.setPokemon(s);case 20:return e.abrupt("break",36);case 21:if(!this.state.isFiltered){e.next=27;break}l=this.state.limit-10,i=this.state.offset-10,l>0&&(this.removeLastSelectedPokemon(),this.setState({limit:l,offset:i})),e.next=34;break;case 27:if(null===this.state.previous){e.next=34;break}return e.next=30,this.getPokemon(this.state.previous);case 30:o=e.sent,this.removeLastSelectedPokemon(),this.setState({lastSelectedPokemon:null}),this.setPokemon(o);case 34:return e.abrupt("break",36);case 35:return e.abrupt("return");case 36:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=null;null!==this.state.pokemons&&0!==this.state.pokemons.length&&null!==this.state.types&&(t=this.state.isFiltered?this.state.pokemons.slice([this.state.offset],[this.state.limit]).map((function(t,a){return s.a.createElement("div",{className:"pokemon__list__wrapper__item","data-index":a,"data-url":t.url,key:a,onClick:function(a){e.handleClick(a,t.url,"click")}},t.name)})):this.state.pokemons.map((function(t,a){return s.a.createElement("div",{className:"pokemon__list__wrapper__item","data-index":a,"data-url":t.url,key:a,onClick:function(a){e.handleClick(a,t.url,"click")}},t.name)}))),null!==this.state.pokemons&&0===this.state.pokemons.length&&(t=s.a.createElement("div",{className:"pokemon__list__wrapper__item pokemon__list__wrapper__item--empty"},"Pokemon list is empty"));var a=this.state.isFiltered?s.a.createElement("button",{onClick:function(){e.handleClickFilter()}},"Clear"):null;return null!==this.state.pokemons&&null!==this.state.types?s.a.createElement("div",{className:"pokemon__list"},s.a.createElement("div",{className:"pokemon__list__wrapper"},t),s.a.createElement("div",{className:"pokemon__list__filter"},s.a.createElement("div",{className:"pokemon__list__filter__datalist"},s.a.createElement("label",{htmlFor:"type_list"},"Filter:"),s.a.createElement("input",{list:"types",id:"type_list",name:"type_list",onChange:function(t){e.handleChange(t,"datalist")}}),s.a.createElement("datalist",{id:"types"},this.state.types.map((function(e,t){return s.a.createElement("option",{value:e,key:t},e)})))),a),null!==this.state.pokemons&&0!==this.state.pokemons.length?s.a.createElement("div",{className:"pokemon__list__ball"}):null,s.a.createElement("div",{className:"pokemon__list__hello"}),s.a.createElement("div",{className:"pokemon__list__navigation"},s.a.createElement("button",{onClick:function(){e.handleNavigation("top")}}),s.a.createElement("button",{onClick:function(){e.handleNavigation("right")}}),s.a.createElement("button",{onClick:function(){e.handleNavigation("bottom")}}),s.a.createElement("button",{onClick:function(){e.handleNavigation("left")}}))):null}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selectedAttribute:null},e.getUrl=function(e){return b.a.get(e)},e.getSelectedPokemon=function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUrl(a);case 2:n=t.sent,e.setState({selectedAttribute:{id:n.data.id,abilities:n.data.abilities.map((function(e){return e.ability.name})),moves:n.data.moves.map((function(e){return e.move.name})),name:n.data.name,image:n.data.sprites.front_default,stats:n.data.stats.map((function(e){return{title:e.stat.name,value:e.base_stat}})),types:n.data.types.map((function(e){return e.type.name}))}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"pokemon"},s.a.createElement(h,{attribute:this.state.selectedAttribute}),s.a.createElement("div",{className:"pokemon__divider"}),s.a.createElement(E,{getSelectedPokemon:this.getSelectedPokemon}))}}]),a}(n.Component);function S(){return s.a.createElement("div",{className:"App"},s.a.createElement(g,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.746487b5.chunk.js.map