webpackJsonp([23],{2298:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),d=n(17),f=n(14),m=n(13),p=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hideModal=function(){n.setState({modal:null})},n.isValid=function(e,t){var n=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e),a=!isNaN(parseInt(t,10))&&t>0;return n&&a},n.stopListening=function(){n.listener&&n.listener.close(),n.setState({active:!1,logs:[]})},n.testNode=function(e){n.listener&&n.listener.close(),n.listener=(0,f.channel)("/nodetest-"+e,{query:{ip:e}}),n.listener.on("connect",function(){n.setState({active:!0})}),n.listener.on("node-status",function(e){n.setState(function(t){return{logs:[c({},e,{id:n.id++})].concat(a(t.logs.slice(0,9)))}})})},n.setPort=function(e){var t=(0,d.trim)(e.target.value);""!==t&&(t=parseInt(t,10),t=isNaN(t)?0:t),n.setState({port:t})},n.id=0,n.listener=null,n.state={ip:"",port:50051,active:!1,logs:[]},n}return o(t,e),s(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){this.listener&&this.listener.close()}},{key:"render",value:function(){var e=this,t=this.state,n=t.ip,a=t.port,l=t.modal,r=t.active,o=t.logs;return i.default.createElement("main",{className:"container header-overlap _tester"},l,i.default.createElement("div",{className:"card"},i.default.createElement("div",{className:"card-body"},i.default.createElement("h5",{className:"card-title text-left"},(0,m.tu)("node_tester"),i.default.createElement("span",{className:"_tester_msg"},(0,m.tu)("node_tester_msg"))),i.default.createElement("div",{className:"text-left"},i.default.createElement("span",null,"IP")),i.default.createElement("input",{className:"form-control text-left",type:"text",placeholder:"123.123.123.123",value:n,onChange:function(t){return e.setState({ip:t.target.value})}}),i.default.createElement("br",null),i.default.createElement("div",{className:"text-left"},i.default.createElement("span",null,"Port")),i.default.createElement("input",{className:"form-control text-left",type:"text",placeholder:"50051",value:a,onChange:this.setPort}),i.default.createElement("div",{className:"text-left"},r?i.default.createElement("button",{className:"btn",onClick:function(){return e.stopListening()}},(0,m.tu)("node_tester_stop")):i.default.createElement("button",{className:"btn",disabled:!this.isValid(n,a),onClick:function(){return e.testNode(n+":"+a)}},(0,m.tu)("node_tester_test"))))),r&&0===o.length&&i.default.createElement("div",{className:"card mt-3"},i.default.createElement("table",{className:"table table-hover table-striped bg-white m-0"},i.default.createElement("thead",{className:"thead-dark"},i.default.createElement("tr",{align:"center"},i.default.createElement("th",null,(0,m.tu)("connection_node")))),i.default.createElement("tbody",null,i.default.createElement("tr",null,i.default.createElement("td",{align:"center"},(0,m.tu)("loading")))))),o.length>0&&i.default.createElement("div",{className:"card mt-3"},i.default.createElement("table",{className:"table table-hover table-striped bg-white m-0"},i.default.createElement("thead",{className:"thead-dark"},i.default.createElement("tr",null,i.default.createElement("th",null,(0,m.tu)("message")),i.default.createElement("th",{style:{width:200}},(0,m.tu)("node_tester_rt")))),i.default.createElement("tbody",null,o.map(function(e){return i.default.createElement("tr",{key:e.id},i.default.createElement("td",null,e.msg),i.default.createElement("td",null,e.responseTime," ms"))})))))}}]),t}(u.Component);t.default=p}});