(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1332:function(e,t,a){"use strict";var n=a(20),c=a(21),i=a(26),r=a(25),s=a(27),l=a(0),o=a.n(l),m=a(15),u=a(1339),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={time:e.time,newTime:Object(u.b)(e.time),timer:null},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.updateTime()}},{key:"updateTime",value:function(){var e=this,t=setInterval(function(){e.setState({newTime:Object(u.b)(e.props.time)})},1e3);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.state.newTime;return o.a.createElement("div",{className:"token_black table_pos"},o.a.createElement("div",null,e))}}]),t}(o.a.Component);t.a=Object(m.h)(d)},1339:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s});var n=a(324),c=a.n(n);function i(e){var t=e.indexOf("T"),a=e.indexOf("Z"),n=e.substr(0,t),c=e.substr(t+1,a-t-1),i=n.replace(/\-/g,"/")+" "+c,r=new Date(Date.parse(i));return r=r.getTime(),r/=1e3,r+=28800,new Date(1e3*parseInt(r)).toLocaleDatetimeObj()+" "+new Date(1e3*parseInt(r)).totimeObj().match(/\d{2}:\d{2}:\d{2}/)[0]}function r(e,t,a,n){var c=t[n[a+1]]-e[n[a]].unit*t[n[a]],i=t[n[a]]>1?e[n[a]].plural:e[n[a]].odd,r=c>1?e[n[a+1]].plural:e[n[a+1]].odd,s=t[n[a]],l=c;return{firstTime:s,secondTime:l,firstUnit:i,secondUnit:r,string:l&&l>0?"".concat(s).concat(i," ").concat(l).concat(r):"".concat(s," ").concat(i)}}function s(e){return function(e){var t=c()(e),a=c()(),n="",i={day:{key:"days",plural:"days",odd:"day",unit:24},hour:{key:"hours",plural:"hrs",odd:"hr",unit:60},minute:{key:"minutes",plural:"mins",odd:"min",unit:60},second:{key:"seconds",plural:"secs",odd:"sec"}},s={};for(var l in i)s[l]=a.diff(t,i[l].key);var o=["day","hour","minute","second"],m="",u="";return s[o[0]]>=1?n=r(i,s,0,o):s[o[1]]>=1?n=r(i,s,1,o):s[o[2]]>=1?n=r(i,s,2,o):(m=s[o[3]]>1?i[o[3]].plural:i[o[3]].odd,n={firstTime:u=s[o[3]],secondTime:0,firstUnit:m,secondUnit:null,string:"".concat(u).concat(m)}),n}(e).string+" ago"}},3859:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(5),r=a(20),s=a(21),l=a(26),o=a(25),m=a(27),u=a(0),d=a.n(u),h=a(15),p=a(22),v=a(58),f=a(3),b=a(1339),x=a(1332),E=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).call(this))).state={notice:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark(function e(){var t,a,n,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.match,t.intl,a.params.id,e.next=4,p.a.getNotices({sort:"-timestamp"});case 4:n=e.sent,i=n.data,this.setState({notice:i});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.intl,a=e.match.params.id,n=this.state.notice.length>0?this.state.notice.filter(function(e){return e.id==a})[0]:{},c=n.createTime?Object(b.a)(n.createTime.replace(/\s/,"T")+"Z"):"2018-01-01T00:00:00Z",i=n.extInfo?JSON.parse(n.extInfo):[],r="";return r="zh"===t.locale?"CN":"EN",d.a.createElement("div",{className:"container header-overlap"},d.a.createElement("main",{className:"exchange"},d.a.createElement("div",{className:"exchange-box notice-box mb-2"},d.a.createElement("div",{className:"exchange-box-left"},d.a.createElement("div",{className:"exchange-list mr-2"},d.a.createElement("div",{className:"exchange-list-mark p-3"},d.a.createElement("div",{className:"exchange-box-left-title"},Object(f.c)("OthersArticle")),d.a.createElement("div",{className:"list-wrap"},this.state.notice.map(function(e){return d.a.createElement(v.a,{to:"/notice/"+e.id,repalce:"true",key:e.id,className:"list"+(a==e.id?" active":"")},e["title"+r])}))))),d.a.createElement("div",{className:"exchange-box-right"},d.a.createElement("div",{className:"exchange__kline p-3 mb-2"},d.a.createElement("div",{className:"exchange-box-right-title"},n["title"+r]),d.a.createElement("div",{className:"exchange-box-right-vice-title"},d.a.createElement("span",{className:"author"},"POLONIDEX"),d.a.createElement("div",{className:"line"}),d.a.createElement(x.a,{time:c})),d.a.createElement("div",{className:"exchange-box-right-content"},d.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:n["context"+r]}}),d.a.createElement("div",{className:"social-media"},i.map(function(e,t){return d.a.createElement("div",{key:t,className:"item"},d.a.createElement("span",null,e.method,":"),d.a.createElement("a",{href:e.link,target:"_blank"},e.link))}))))))))}}]),t}(d.a.Component);t.default=Object(h.h)(E)}}]);