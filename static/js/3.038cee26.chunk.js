webpackJsonp([3],{459:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(6),c=a.n(o),s=a(154),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),m={textAlign:"center",fontSize:"1.2rem",marginTop:"1.4rem",color:"#fad049"},u=function(e){function t(){l(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={switchin:!0},e}return r(t,e),i(t,[{key:"switchOut",value:function(e){this.setState({switchin:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"doll-outer"},c.a.createElement("div",{className:"doll-middle"},c.a.createElement("div",{className:"doll-main doll-clearfix"},c.a.createElement("div",{className:"doll-buddha"},c.a.createElement("span",{className:"doll-tail"}),c.a.createElement("span",{className:"doll-legs"}),c.a.createElement("div",{className:"doll-head"},c.a.createElement("span",{className:"doll-ears doll-right"}),c.a.createElement("span",{className:"doll-ears doll-left"}),c.a.createElement("span",{className:"doll-circle"}),c.a.createElement("span",{className:"doll-eye doll-right"}),c.a.createElement("span",{className:"doll-eye doll-left"}),c.a.createElement("span",{className:"doll-mouth"})),c.a.createElement("span",{className:"doll-hand"})),c.a.createElement("span",{className:"doll-shadow"})),c.a.createElement("h1",{style:m},"- Under Development -"))),this.state.switchin?c.a.createElement(s.a,{type:"enter",callback:this.switchOut.bind(this)}):"")}}]),t}(o.Component);t.default=u}});