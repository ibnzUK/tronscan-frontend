(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1268:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(20),s=a(21),r=a(26),c=a(25),l=a(27),o=a(0),i=a.n(o),m=a(175),u=a(16),d=a(3),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={open:!1,id:Object(m.a)(24)},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,s=this.props,r=s.text,c=s.placement,l=s.testSecond,o=void 0===l?"":l,m=s.className,p=void 0===m?"":m,v=s.info,b=void 0===v?"":v;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(u.h,{placement:c,isOpen:a,target:n,className:p,innerClassName:"w-100"},r?Object(d.b)(r):"",o?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(d.b)(o)):"",b||""))}}]),t}(i.a.Component)},3832:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return X});var n,s,r=a(29),c=a(125),l=a.n(c),o=a(37),i=a.n(o),m=a(2),u=a.n(m),d=a(5),p=a(3455),v=a.n(p),b=a(3457),g=a.n(b),h=a(20),E=a(21),f=a(26),x=a(25),N=a(27),O=a(22),y=a(3),_=a(0),w=a.n(_),j=a(19),k=a(15),V=a(2553),S=a.n(V),C=a(1835),T=a(34),I=a(16),L=a(99),R=a(1268),D=a(61),B=a.n(D),P=a(7),A=a(23),F=a(53),M=a(58),W=a(3046),U=a.n(W),K=a(28),z=a(326),H=a(283),J=a(127),Y=(a(12),a(176));function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Q(e){var t=e.value,a=e.arrow,n=void 0!==a&&a;return t>0?w.a.createElement("span",{className:"text-success"},w.a.createElement("span",{className:"mr-1"},"+",t),n&&w.a.createElement("i",{className:"fa fa-arrow-up"})):t<0?w.a.createElement("span",{className:"text-danger"},w.a.createElement("span",{className:"mr-1"},t),n&&w.a.createElement("i",{className:"fa fa-arrow-down"})):w.a.createElement("span",null,"-")}var X=(n=Object(T.connect)(function(e){return{account:e.app.account,tokenBalances:e.account.tokens,wallet:e.wallet,flags:e.app.flags,voteList:e.voting.voteList,voteTimer:e.voting.voteTimer,walletType:e.app.wallet,isRightText:e.app.isRightText}},{login:A.v,reloadWallet:F.c,loadVoteTimer:H.c}),Object(Y.a)(s=Object(k.h)(s=Object(z.a)(s=n(s=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(x.a)(t).call(this))).setVote=function(t,a){var n=e.state.votes;""!==a&&(a=parseInt(a,10),(a=g()(a)?"":a)<0&&(a=0));var s=e.getVoteStatus().votesAvailable;a>(s+=n[t]||0)&&(a=s),n[t]=a,e.setState({votes:n})},e.getVoteStatus=function(){var t=e.props.wallet,a=e.state.votes,n=0;t.isOpen&&(n=t.current.frozenTrx/P.C);var s=v()(Object.values(a),function(e){return parseInt(e,10)||0}),r=n-s,c=0;return r>0?c=1:r<0&&(c=-1),0===n&&(c=-2),{trxBalance:n,votesSpend:s,votesAvailable:r,spendAll:s>0&&0===r,voteState:c,votePercentage:s/n*100}},e.enableVoting=function(){e.setState({votingEnabled:!0})},e.loadVoteList=Object(d.a)(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.getVotesList();case 2:a=t.sent,e.setState({votesList:a});case 4:case"end":return t.stop()}},t)})),e.loadVoteTimer=Object(d.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.loadVoteTimer();case 1:case"end":return t.stop()}},t)})),e.loadVotes=Object(d.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return 0===e.props.voteList.length&&e.setState({loading:!0}),t.next=4,e.loadVoteList();case 4:e.setState({loading:!1});case 5:case"end":return t.stop()}},t)})),e.loadCurrentVotes=function(){var t=Object(d.a)(u.a.mark(function t(a){var n,s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.getAccountVotes(a);case 2:n=t.sent,s=n.votes,e.setState({votes:s});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)})},e.notSignedIn=function(){e.setState({goSignedIn:!0})},e.resetVotes=function(){e.setState({votes:{}})},e.cancelVotes=function(){e.loadCurrentVotes(e.props.account.address),e.setState({votingEnabled:!1,searchCriteria:""})},e.hideModal=function(){e.setState({modal:null})},e.submitVotes=Object(d.a)(u.a.mark(function t(){var a,n,s,r,c,l,o,i,m,d,p,v,b,g,h,E,f,x,N,_,j,k;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a=e.props.account,n=e.state.votes,e.setState({submittingVotes:!0}),r={},c=e.props.tronWeb(),l=e.props.account,o=l.tronWeb,i=l.sunWeb,m=0,d=Object.keys(n);m<d.length;m++)p=d[m],""!=n[p]?r[p]=parseInt(n[p],10):r[p]=0;if(!P.t){t.next=50;break}if("ACCOUNT_LEDGER"!==e.props.walletType.type){t.next=25;break}return t.prev=9,t.next=12,c.transactionBuilder.vote(r,a.address).catch(function(e){return!1});case 12:return v=t.sent,t.next=15,Object(J.b)(v,c);case 15:b=t.sent,g=b.result,s=g,t.next=23;break;case 20:t.prev=20,t.t0=t.catch(9),console.error("error",t.t0);case 23:t.next=48;break;case 25:if("ACCOUNT_PRIVATE_KEY"!==e.props.walletType.type){t.next=33;break}return t.next=28,O.a.voteForWitnesses(a.address,r)(a.key);case 28:h=t.sent,E=h.success,s=E,t.next=48;break;case 33:if("ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=48;break}return t.prev=34,t.next=37,o.transactionBuilder.vote(r,a.address).catch(function(e){console.error(e)});case 37:return f=t.sent,t.next=40,Object(J.b)(f,o);case 40:x=t.sent,N=x.result,s=N,t.next=48;break;case 45:t.prev=45,t.t1=t.catch(34),console.error(t.t1);case 48:t.next=65;break;case 50:if("ACCOUNT_PRIVATE_KEY"!==e.props.walletType.type&&"ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=65;break}return t.prev=51,t.next=54,i.sidechain.transactionBuilder.vote(r,a.address).catch(function(e){return!1});case 54:return _=t.sent,t.next=57,Object(J.c)(_,i);case 57:j=t.sent,k=j.result,s=k,t.next=65;break;case 62:t.prev=62,t.t2=t.catch(51),console.error(t.t2);case 65:s?(setTimeout(function(){return e.props.reloadWallet()},1200),setTimeout(function(){return e.setState({votesSubmitted:!1})},5e3),e.setState({votesSubmitted:!0,submittingVotes:!1,votingEnabled:!1,modal:w.a.createElement(B.a,{success:!0,title:Object(y.c)("submissing_vote_message_title"),onConfirm:e.hideModal},Object(y.c)("submissing_vote_message_0"),w.a.createElement("br",null),Object(y.c)("submissing_vote_message_1"))})):e.setState({votesSubmitted:!1,submittingVotes:!1,votingEnabled:!1,modal:w.a.createElement(B.a,{danger:!0,title:Object(y.c)("error"),onConfirm:e.hideModal},Object(y.c)("submitting_vote_error_message"))});case 66:case"end":return t.stop()}},t,null,[[9,20],[34,45],[51,62]])})),e.state={privateKey:"",votingEnabled:!1,votesSubmitted:!1,submittingVotes:!1,loading:!1,votes:{},searchCriteria:"",modal:null,viewStats:!1,colors:U()("mpn65",20),votesList:{},liveVotes:null,goSignedIn:!1},e}return Object(N.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.account.isLoggedIn&&this.props.account.address!==e.account.address&&this.loadCurrentVotes(this.props.account.address)}},{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.props.account).isLoggedIn&&(this.props.reloadWallet(),this.loadCurrentVotes(t.address)),e.next=4,this.loadVotes();case 4:return e.next=6,this.loadVoteTimer();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderVoteStatus",value:function(){var e=this.getVoteStatus(),t=e.votesAvailable;switch(e.voteState){case 0:return w.a.createElement("span",{className:"text-success"},Object(y.c)("all_votes_are_used_message"));case 1:return w.a.createElement("span",null,Object(y.c)("votes_remaining_message"),":\xa0",w.a.createElement("b",null,w.a.createElement(k.c,{value:t})));case-1:return w.a.createElement("span",{className:"text-danger"},Object(y.c)("to_much_votes_massage"));case-2:return w.a.createElement("span",{className:"text-danger"},Object(y.c)("need_min_trx_to_vote_message"))}}},{key:"renderVotingBar",value:function(){var e=this,t=this.state,a=t.votingEnabled,n=t.votesSubmitted,s=t.submittingVotes,r=this.props,c=r.intl,l=r.account,o=this.getVoteStatus().trxBalance;return l.isLoggedIn?n?w.a.createElement(I.a,{color:"success",className:"text-center m-0"},Object(y.c)("thanks_submitting_vote_message")):a&&o<=0?w.a.createElement("div",{className:"text-center"},Object(y.c)("warning_votes")," ",w.a.createElement(M.a,{to:"/account",className:"text-primary"},Object(y.c)("account_page"))):s?w.a.createElement("div",{className:"d-flex justify-content-center p-3",style:{lineHeight:"36px"}},w.a.createElement(L.a,{width:160})):a?w.a.createElement("div",{className:"d-flex flex-wrap flex-sm-nowrap",style:{lineHeight:"36px"}},w.a.createElement("div",{className:"d-flex"},w.a.createElement("div",{style:{width:"35px",height:"35px",paddingLeft:"10px"}},w.a.createElement("i",{className:"fa fa-search"})),w.a.createElement("input",{style:{background:"#F3F3F3"},type:"text",className:"form-control",placeholder:c.formatMessage({id:"search"}),onChange:function(t){return e.onSearchChange(t.target.value)}})),w.a.createElement("div",{className:"ml-auto"},this.renderVoteStatus()),w.a.createElement("div",{className:"ml-2 mt-2 ml-sm-auto mt-sm-0"},w.a.createElement("button",{className:"btn btn-danger ml-auto _cancel",onClick:this.cancelVotes},Object(y.c)("cancel")),w.a.createElement("button",{className:"btn btn-warning ml-1 _reset",onClick:this.resetVotes},Object(y.c)("reset")),w.a.createElement("button",{className:"btn btn-success ml-1 _submit",onClick:this.submitVotes},Object(y.c)("submit_votes")))):w.a.createElement("div",{className:"text-center"},w.a.createElement("a",{className:"",onClick:this.enableVoting,style:{color:"#C23631"}},Object(y.c)("click_to_start_voting"))):w.a.createElement("div",{className:"text-center"},Object(y.c)("open_wallet_start_voting_message"))}},{key:"renderVotingBarFalse",value:function(){var e=this.props,t=(e.intl,e.account),a=this.state.goSignedIn;if(!t.isLoggedIn)return w.a.createElement("div",{className:"text-center"},a?w.a.createElement("span",{style:{color:"#333333"}},Object(y.c)("not_signed_in")):w.a.createElement("a",{href:"javascript:;",onClick:this.notSignedIn},Object(y.c)("click_to_start_voting")))}},{key:"getNextCycle",value:function(){return this.props.voteTimer}},{key:"render",value:function(){var e=this,t=this.state,a=t.votingEnabled,n=t.votes,s=t.votesList,r=t.loading,c=t.modal,o=t.viewStats,m=t.colors,u=t.searchCriteria,d=this.props,p=d.wallet,v=d.isRightText,b=s.data||[],g=b.map(function(e,t){return Object.assign({rank:t},e)});""!==u&&(g=l()(b,function(e){return!(!e.address||-1===i()(e.address.toLowerCase()).indexOf(u.toLowerCase()))}));var h=s.totalVotes||0,E=s.fastestRise||{},f=this.getVoteStatus().trxBalance,x=Math.ceil(f/20);return w.a.createElement("main",{className:"container header-overlap _voteOverview"},c,w.a.createElement("div",{className:"row _badge"},w.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},w.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_red bg-image_nextRound"},w.a.createElement("div",{className:"card-body"},w.a.createElement("h3",{className:"text-primary"},w.a.createElement(S.a,{date:this.getNextCycle(),daysInHours:!0,onComplete:function(){e.loadVotes(),e.loadVoteTimer()}})),Object(y.c)("next_round")))),w.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0 position-relative"},w.a.createElement("div",{className:"card h-100 widget-icon bg-line_green bg-image_totalVotes"},w.a.createElement("div",{className:"card-body text-left"},w.a.createElement("h3",{className:"text-secondary"},w.a.createElement(k.c,{value:h})),Object(y.c)("total_votes")))),w.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},w.a.createElement("div",{className:"card h-100 widget-icon bg-line_yellow bg-image_mostRank"},w.a.createElement("div",{className:"card-body text-left"},w.a.createElement("h3",{className:"text-success"},w.a.createElement(Q,{value:E.change_cycle,arrow:!0})),w.a.createElement("div",{className:(v?"flex-row-reverse justify-content-end":"")+" d-flex"},w.a.createElement("div",{className:"_ranks mr-2",style:{whiteSpace:"nowrap"}},Object(y.c)("most_ranks")),w.a.createElement("div",{className:"",style:v?{maxWidth:"110px"}:{}},Math.abs(E.change_cycle)?w.a.createElement(j.a,{address:E.address},E.name||E.url):w.a.createElement("span",{style:{color:"#999999"}},"-"))))))),r?w.a.createElement("div",{className:"card mt-2"},w.a.createElement(L.b,null,Object(y.c)("loading_super_representatives"))):w.a.createElement("div",{className:"row mt-2"},w.a.createElement("div",{className:"col-md-12"},w.a.createElement(C.StickyContainer,null,w.a.createElement("div",{className:"card mt-1"},p.isOpen&&w.a.createElement(C.Sticky,null,function(t){var a=t.style;return w.a.createElement("div",{style:G({borderBottom:"1px solid #D8D8D8",zIndex:100},a),className:"card-body bg-white p-3"},e.renderVotingBar())}),!p.isOpen&&w.a.createElement(C.Sticky,null,function(t){var a=t.style;return w.a.createElement("div",{style:G({borderBottom:"1px solid #D8D8D8",zIndex:100},a),className:"card-body bg-white p-3"},e.renderVotingBarFalse())}),w.a.createElement("div",{className:"table-responsive table-scroll"},w.a.createElement("table",{className:"table vote-table table-hover m-0"},w.a.createElement("thead",{className:"thead-light"},w.a.createElement("tr",null,w.a.createElement("th",{className:"text-center",style:{width:50}},Object(y.c)("SR_rank")),w.a.createElement("th",null,Object(y.c)("name")),w.a.createElement("th",{className:"text-right",style:{width:150}},Object(y.c)("SR_votes")),w.a.createElement("th",{className:"text-right",style:{width:150}},Object(y.c)("live")),w.a.createElement("th",{className:"text-right",style:{width:100}},Object(y.c)("percentage")),w.a.createElement("th",{className:"text-right",style:{width:150}},Object(y.c)("SR_voteRatio"),w.a.createElement("span",{className:"ml-2"},w.a.createElement(R.a,{placement:"top",text:"voting_brokerage_tip"}))),a&&f>0&&w.a.createElement("th",{style:{width:200}},Object(y.c)("your_vote")))),w.a.createElement("tbody",null,u.length>0&&0===g.length&&w.a.createElement("tr",null,w.a.createElement("td",{colSpan:"6",className:"p-3 text-center"},"No Super Representatives found for"," ",w.a.createElement("b",null,u))),g.map(function(t,s){return w.a.createElement("tr",{key:t.address+"_"+s},o?w.a.createElement("th",{className:"font-weight-bold pt-4 text-center",style:{backgroundColor:"#"+m[t.rank]}},t.lastRanking):w.a.createElement("th",{className:"font-weight-bold pt-4 text-center"},t.lastRanking),w.a.createElement("td",{className:"d-flex flex-row "},w.a.createElement("div",{className:"text-center text-sm-left",style:{minWidth:"150px"}},w.a.createElement(K.a,null,w.a.createElement(j.a,{address:t.address,className:"font-weight-bold"},t.name||t.url)),w.a.createElement(j.a,{className:"small text-muted",address:t.address})),!a&&t.hasPage&&w.a.createElement("div",{className:"_team ml-0 ml-sm-auto"},w.a.createElement(M.a,{className:"btn btn-lg btn-block btn-default mt-1",to:"/representative/".concat(t.address)},Object(y.c)("open_team_page"),w.a.createElement("i",{className:"fas fa-users ml-2"})))),w.a.createElement("td",{className:"small text-right align-middle"},h>0&&w.a.createElement(_.Fragment,null,w.a.createElement(k.c,{value:t.lastCycleVotes}),w.a.createElement("br",null))),w.a.createElement("td",{className:"small text-right align-middle _liveVotes"},h>0&&w.a.createElement(_.Fragment,null,w.a.createElement(k.c,{value:t.realTimeVotes}),w.a.createElement("br",null),t.changeVotes>0?w.a.createElement("span",{className:"color-green"},"+",w.a.createElement(k.c,{value:t.changeVotes})):w.a.createElement("span",{className:"color-red"},w.a.createElement(k.c,{value:t.changeVotes})))),w.a.createElement("td",{className:"small text-right align-middle"},h>0&&w.a.createElement(_.Fragment,null,w.a.createElement(k.c,{value:t.votesPercentage,minimumFractionDigits:2,maximumFractionDigits:2}),"%")),w.a.createElement("td",{className:"small text-right align-middle"},w.a.createElement(_.Fragment,null,w.a.createElement("span",null,t.brokerage||0==t.brokerage?100-t.brokerage+"%":""))),a&&f>0&&w.a.createElement("td",{className:"vote-input-field"},w.a.createElement("div",{className:"input-group"},w.a.createElement("div",{className:"input-group-prepend"},w.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.setVote(t.address,(n[t.address]||0)-x)},type:"button"},"-")),w.a.createElement("input",{type:"text",value:n[t.address]||"",className:"form-control text-center",onChange:function(a){return e.setVote(t.address,a.target.value)}}),w.a.createElement("div",{className:"input-group-append"},w.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return e.setVote(t.address,(n[t.address]||0)+x)},type:"button"},"+")))))})))))))))}}]),t}(w.a.Component))||s)||s)||s)||s)}}]);