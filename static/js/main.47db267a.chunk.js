(this.webpackJsonpspeedgame=this.webpackJsonpspeedgame||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(1),s=c(3),n=c.n(s),o=(c(12),c(4)),a=c(5),i=c(7),l=c(6),d=(c(13),c(0)),u=function(e){return Object(d.jsx)("div",{className:"circle ".concat(e.color," ").concat(e.active?"active":""),onClick:e.click,style:{pointerEvents:e.disabled?"auto":"none"},children:Object(d.jsx)("p",{children:e.id})})},h=(c(15),function(){window.location.reload()}),j=function(e){return Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"gameover_box",children:[Object(d.jsx)("h2",{children:"Game Over"}),Object(d.jsxs)("p",{children:["Your Score Was: ",e.score]}),Object(d.jsx)("p",{children:e.endMessage}),Object(d.jsx)("button",{onClick:h,children:"X"})]})})},b=(c(16),c.p+"static/media/Laugh.51cb1cf0.mp3"),m=c.p+"static/media/GAME_OVER.7abf7a38.mp3",p=new Audio(b),v=new Audio(m),O=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},f=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={score:0,current:0,circles:[{id:1,color:"green"},{id:2,color:"violet"},{id:3,color:"red"},{id:4,color:"orange"},{id:5,color:"blue"},{id:6,color:"pink"}],showGameOver:!1,rounds:0,gameStart:!1},e.timer=void 0,e.pace=1500,e.clickHandler=function(t){console.log("wow, you clicked a circle"+t),e.state.current===t?e.setState({score:e.state.score+10,rounds:0}):e.endHandler()},e.nextCircle=function(){if(e.state.rounds>=5)e.endHandler();else{var t=void 0;do{t=O(1,6)}while(t===e.state.current);e.setState({current:t,rounds:e.state.rounds+1}),console.log(e.state.rounds),e.pace*=.95,e.timer=setTimeout(e.nextCircle,e.pace),console.log("active circle is",e.state.current)}},e.startHandler=function(){e.nextCircle(),e.setState({gameStart:!0}),p.play()},e.endHandler=function(){var t=void 0;e.state.score<=5&&(t="Your score is less than 5, you can do better!"),e.state.score<=30&&(t="Your score is less than 30, you can do better!"),e.state.score<=100&&(t="Your score is less than 100, you can do better!"),e.setState({endMessage:t}),p.pause(),v.play(),clearTimeout(e.timer),e.setState({showGameOver:!0})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.circles.map((function(t){return Object(d.jsx)(u,{id:t.id,color:t.color,click:function(){return e.clickHandler(t.id)},active:e.state.current===t.id,disabled:e.state.gameStart},t.color)}));return Object(d.jsxs)("main",{children:[Object(d.jsx)("h1",{children:"SpeedGame"}),Object(d.jsxs)("p",{children:["Your score is: ",this.state.score]}),Object(d.jsx)("div",{className:"circles",children:t}),Object(d.jsx)("button",{onClick:this.startHandler,disabled:this.state.gameStart,children:"Start"}),Object(d.jsx)("button",{onClick:this.endHandler,children:"Stop"}),this.state.showGameOver&&Object(d.jsx)(j,{score:this.state.score,endMessage:this.state.endMessage})]})}}]),c}(r.Component);n.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.47db267a.chunk.js.map