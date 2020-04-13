(function(t){function i(i){for(var e,o,h=i[0],n=i[1],a=i[2],u=0,f=[];u<h.length;u++)o=h[u],Object.prototype.hasOwnProperty.call(A,o)&&A[o]&&f.push(A[o][0]),A[o]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);c&&c(i);while(f.length)f.shift()();return r.push.apply(r,a||[]),s()}function s(){for(var t,i=0;i<r.length;i++){for(var s=r[i],e=!0,h=1;h<s.length;h++){var n=s[h];0!==A[n]&&(e=!1)}e&&(r.splice(i--,1),t=o(o.s=s[0]))}return t}var e={},A={app:0},r=[];function o(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,i,s){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)o.d(s,e,function(i){return t[i]}.bind(null,e));return s},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],n=h.push.bind(h);h.push=i,h=h.slice();for(var a=0;a<h.length;a++)i(h[a]);var c=n;r.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"034f":function(t,i,s){"use strict";var e=s("85ec"),A=s.n(e);A.a},"03e5":function(t,i,s){"use strict";(function(t){s("ac1f"),s("1276");var e=s("e1c8"),A=s.n(e),r=s("39c9"),o=s.n(r);i["a"]={components:{},data:function(){return{chess:{},count:0,chessBoard:[],wins:[],blackWin:[],whiteWin:[],over:!1,revertFlag:!1,i:0,j:0,me:!0}},computed:{},watch:{},methods:{init:function(){this.drawChessBoard(),this.initChess(),this.fillArray()},drawChessBoard:function(){for(var t=0;t<15;t++){this.chessBoard[t]=[];for(var i=0;i<15;i++)this.chessBoard[t][i]=0}},drawChess:function(i,s){console.log(i,s),s?t("#"+i).css({backgroundImage:"url(".concat(A.a,")"),backgroundSize:"28px",backgroundRepeat:"no-repeat"}):t("#"+i).css({backgroundImage:"url(".concat(o.a,")"),backgroundSize:"28px",backgroundRepeat:"no-repeat"})},removeChess:function(i){console.log(i),t("#"+i).css("backgroundImage","none")},isLightBackground:function(t,i){var s=document.getElementById(t);s.style.backgroundColor=i?"#45c01a":"#b9b9b9"},fillArray:function(){for(var t=0;t<15;t++){this.chessBoard[t]=[];for(var i=0;i<15;i++)this.chessBoard[t][i]=0}for(var s=0;s<15;s++){this.wins[s]=[];for(var e=0;e<15;e++)this.wins[s][e]=[]}for(var A=0;A<15;A++)for(var r=0;r<11;r++){for(var o=0;o<5;o++)this.wins[A][r+o][this.count]=!0;this.count++}for(var h=0;h++;h<15)for(var n=0;n<11;n++){for(var a=0;a<5;a++)this.wins[n+a][h][this.count]=!0;this.count++}for(var c=0;c<11;c++)for(var u=0;u<11;u++){for(var f=0;f<5;f++)this.wins[c+f][u+f][this.count]=!0;this.count++}for(var d=0;d<11;d++)for(var v=14;v>3;v--){for(var l=0;l<5;l++)this.wins[d+l][v-l][this.count]=!0;this.count++}for(var g=0;g<this.count;g++)this.blackWin[g]=0,this.whiteWin[g]=0},chessAreaItemClick:function(t){if(this.id=t.target.id,!this.over&&(this.j=this.id.split("-")[0],this.i=this.id.split("-")[1],!this.chessBoard||0===this.chessBoard[this.i][this.j])){if(this.drawChess(this.id,this.me),this.me){this.chessBoard[this.i][this.j]=1;for(var i=0;i<this.count;i++)this.wins[this.i][this.j][i]&&(this.blackWin[i]++,this.whiteWin[i]=6,5==this.blackWin[i]&&(window.alert("黑子赢了"),this.over=!0,this.isLightBackground("revert",!1),this.isLightBackground("removeRevert",!1)))}else{this.chessBoard[this.i][this.j]=2;for(var s=0;s<this.count;s++)this.wins[this.i][this.j][s]&&(this.whiteWin[s]++,this.blackWin[s]=6,5==this.whiteWin[s]&&(window.alert("白子赢了"),this.over=!0,this.isLightBackground("revert",!1),this.isLightBackground("removeRevert",!1)))}this.over||(this.me=!this.me,this.isLightBackground("revert",!0))}},revert:function(){if(!this.over&&!this.revertFlag){if(this.removeChess(this.id),console.log(this.id),this.chessBoard[this.i][this.j]=0,this.me)for(var t=0;t<this.count;t++)this.wins[this.i][this.j][t]&&this.whiteWin[t]--;else for(var i=0;i<this.count;i++)this.wins[this.i][this.j][i]&&this.blackWin[i]--;this.me=!this.me,this.revertFlag=!0,this.isLightBackground("revert",!1),this.isLightBackground("removeRevert",!0)}},removeRevert:function(){if(console.log(this.id),!this.over&&this.revertFlag){if(this.me){if(0==this.chessBoard[this.i][this.j]){this.drawChess(this.id,this.me),this.chessBoard[this.i][this.j]=1;for(var t=0;t<this.count;t++)this.wins[this.i][this.j][t]&&this.blackWin[t]++}}else if(0==this.chessBoard[this.i][this.j]){this.drawChess(this.id,this.me),this.chessBoard[this.i][this.j]=2;for(var i=0;i<this.count;i++)this.wins[this.i][this.j][i]&&this.whiteWin[i]++}this.over||(this.me=!this.me),this.revertFlag=!1,this.isLightBackground("revert",!0),this.isLightBackground("removeRevert",!1)}},initChess:function(){for(var i=t(".chessArea").append('<table cellspacing="0px"><tbody></tbody></table>'),s=0;s<15;s++)for(var e=i.append("<tr></tr>"),A=0;A<15;A++)e.append('<td  class="chessAreaItem" style=" width: 30px;  height: 30px;border: 1px solid #0a0a0a;" id='+s+"-"+A+"></td>")},restart:function(){window.location.reload()}},created:function(){},mounted:function(){this.init(),t(".chessArea").on("click",".chessAreaItem",this.chessAreaItemClick)},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}}}).call(this,s("1157"))},"347b":function(t,i,s){"use strict";var e=s("89a5"),A=s.n(e);A.a},"39c9":function(t,i){t.exports="data:image/png;base64,R0lGODlhJAAkAOYAAAAAAP///9HR0MrKyefk4bi2tMzLytrSy72uo66imePZ0ca9trWwrMbCv/Lu67SrpbyzrdLLxubg3Pjy7ry5t/v49u7m4crGxP37+u3r6t3b2tfV1NTS0f78/MfGxsHAwLq5uf7+/vz8/Pv7+/j4+Pf39/T09PPz8/Dw8O/v7+zs7Ovr6+np6ebm5uXl5eLi4uDg4N7e3t3d3dvb29nZ2dfX19XV1dLS0s/Pz8zMzMvLy8jIyMXFxcPDw7+/v729vbq6urm5ube3t////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAEMALAAAAAAkACQAAAf/gEOCg4SFhoeIiYqLjIgKExghHUMWjY0KAQEhmZycDpaHmJ2joxWggxikqqMHoKsdIiMiJLKkn4yjsLQlvL0lJCQinQSLm5kdJL0my8snzia8wcatiBKcs9AlzSco3dzPy7+biZzI2s7cKCkpKCruKusqKCfQIsSGGZkhJCbp6usp3q0YyGIgvHUnSBw6xu8EQIAqBkpsQZGiixYr4J3QUCiCpGTpAgqc2OJiSRcmC6ZYUYhFrBIO47kjyKIiSpQvcr5A2aJmIRS8HL6LuKKmTZw6dcLYWXIBIRX9REo0avGm0hhYZcBY6uKFAEIruhGtWPNm1xdbl2KdoVWGVhgy/zYQYhGQBdWTSNGmhSuDxoy/f2XM4EDIhbu7VpVujSFj7V8aNGrYkEx4EIyBePPqxMqXLWQbNm6IFiDgAqEaNpPmTMuYMWDIkkPjyJFDAARCDS6eRbt6q1vBjz+PxjHAA48bhmBo3svYbfAaNW4IuEHcuAcDhnDsxpq18WvYoKXnKN7jA47bhR5odf37O+zYpHPoGMDjA4+vh3YAB8wfcuTQ0uGAw3w9+GAeAong4N+CC4JGmgACDrADDz784IFpiTyAw3SgQfefDdNBKB95PgTxwQCMPDCAgNOJFhqEs+mwgwcFAhGEDztYksAHO6wIo4DzeeDBBz8EIQQQ9Z0yRDIBPQi5w5M8lOeDjUKY6AEDSg4ChA9c/kClEEL8YB96WRLCAAhcpukDBQ+U6eabcA4SCAA7"},"56d7":function(t,i,s){"use strict";s.r(i);s("e623"),s("e379"),s("5dc8"),s("37e1");var e=s("2b0e"),A=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[t.show?s("Chess"):s("ChessDome"),s("div",{staticClass:"cut",attrs:{id:"cut"},on:{click:function(i){t.show=!t.show}}},[s("span",[t._v("dom切换")])])],1)},r=[],o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box"},[s("h1",[t._v("-- 五子棋 --")]),s("canvas",{ref:"canvas",attrs:{width:"450",height:"450"},on:{click:t.chessClick}}),s("div",{staticClass:"buttonGroup"},[s("div",{staticClass:"restart",attrs:{id:"restart"},on:{click:t.restart}},[s("span",[t._v("重新开始")])]),s("div",{staticClass:"revert",attrs:{id:"revert"},on:{click:t.revert}},[s("span",[t._v("悔棋")])]),s("div",{staticClass:"removeRevert",attrs:{id:"removeRevert"},on:{click:t.removeRevert}},[s("span",[t._v("撤销悔棋")])])])])},h=[],n=(s("cb29"),{components:{},data:function(){return{chess:{},context:{},me:!0,chessBoard:[],wins:[],count:0,over:!1,blackWin:[],whiteWin:[],revertFlag:!1,i:0,j:0}},computed:{},watch:{},methods:{init:function(){this.chess=this.$refs.canvas,this.context=this.chess.getContext("2d"),this.drawChessBoard(),this.fillArray()},drawChessBoard:function(){var t=this.context;t.strokeStyle="#bfbfbf";for(var i=0;i<15;i++)t.moveTo(15+30*i,15),t.lineTo(15+30*i,435),t.stroke(),t.moveTo(15,15+30*i),t.lineTo(435,15+30*i),t.stroke()},onStep:function(t,i,s){var e=this.context;e.beginPath(),e.arc(15+30*t,15+30*i,13,0,2*Math.PI),e.closePath();var A=e.createRadialGradient(15+30*t+2,15+30*i-2,13,15+30*t+2,15+30*i-2,0);s?(A.addColorStop(0,"#0A0A0A"),A.addColorStop(1,"#636766")):(A.addColorStop(0,"#D1D1D1"),A.addColorStop(1,"#F9F9F9")),e.fillStyle=A,e.fill()},isLightBackground:function(t,i){var s=document.getElementById(t);s.style.backgroundColor=i?"#45c01a":"#b9b9b9"},fillArray:function(){for(var t=0;t<15;t++){this.chessBoard[t]=[];for(var i=0;i<15;i++)this.chessBoard[t][i]=0}for(var s=0;s<15;s++){this.wins[s]=[];for(var e=0;e<15;e++)this.wins[s][e]=[]}for(var A=0;A<15;A++)for(var r=0;r<11;r++){for(var o=0;o<5;o++)this.wins[A][r+o][this.count]=!0;this.count++}for(var h=0;h++;h<15)for(var n=0;n<11;n++){for(var a=0;a<5;a++)this.wins[n+a][h][this.count]=!0;this.count++}for(var c=0;c<11;c++)for(var u=0;u<11;u++){for(var f=0;f<5;f++)this.wins[c+f][u+f][this.count]=!0;this.count++}for(var d=0;d<11;d++)for(var v=14;v>3;v--){for(var l=0;l<5;l++)this.wins[d+l][v-l][this.count]=!0;this.count++}for(var g=0;g<this.count;g++)this.blackWin[g]=0,this.whiteWin[g]=0},chessClick:function(t){if(!this.over){var i=t.offsetX,s=t.offsetY;if(this.i=Math.floor(i/30),this.j=Math.floor(s/30),this.me){if(0==this.chessBoard[this.i][this.j]){this.onStep(this.i,this.j,this.me),this.chessBoard[this.i][this.j]=1,this.me=!this.me;for(var e=0;e<this.count;e++)this.wins[this.i][this.j][e]&&(this.blackWin[e]++,this.whiteWin[e]=6,5==this.blackWin[e]&&(window.alert("黑子赢了"),this.over=!0,this.isLightBackground("revert",!0),this.isLightBackground("removeRevert",!1)))}}else if(0==this.chessBoard[this.i][this.j]){this.onStep(this.i,this.j,this.me),this.chessBoard[this.i][this.j]=2,this.me=!this.me;for(var A=0;A<this.count;A++)this.wins[this.i][this.j][A]&&(this.whiteWin[A]++,this.blackWin[A]=6,5==this.whiteWin[A]&&(window.alert("白子赢了"),this.over=!0,this.isLightBackground("revert",!0),this.isLightBackground("removeRevert",!1)))}this.over||(this.isLightBackground("revert",!0),this.isLightBackground("removeRevert",!1))}},revert:function(){if(!this.over&&!this.revertFlag){if(this.context.clearRect(30*this.i,30*this.j,30,30),this.chessBoard[this.i][this.j]=0,this.me)for(var t=0;t<this.count;t++)this.wins[this.i][this.j][t]&&this.whiteWin[t]--;else for(var i=0;i<this.count;i++)this.wins[this.i][this.j][i]&&this.blackWin[i]--;this.me=!this.me,this.revertFlag=!0,this.isLightBackground("revert",!1),this.isLightBackground("removeRevert",!0)}},removeRevert:function(){if(!this.over&&this.revertFlag&&this.me){if(0==this.chessBoard[this.i][this.j]){this.onStep(this.i,this.j,this.me),this.chessBoard[this.i][this.j]=1;for(var t=0;t<this.count;t++)this.wins[this.i][this.j][t]&&this.blackWin[t]++}else if(0==this.chessBoard[this.i][this.j]){this.onStep(this.i,this.j,this.me),this.chessBoard[this.i][this.j]=2;for(var i=0;i<this.count;i++)this.wins[this.i][this.j][i]&&this.whiteWin[i]++}this.over||(this.me=!this.me),this.revertFlag=!1,this.isLightBackground("revert",!0),this.isLightBackground("removeRevert",!1)}},restart:function(){window.location.reload()}},created:function(){},mounted:function(){this.init()},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}}),a=n,c=(s("347b"),s("2877")),u=Object(c["a"])(a,o,h,!1,null,"39491f28",null),f=u.exports,d=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"box"},[s("h1",[t._v("-- 五子棋 --")]),t._m(0),s("div",{staticClass:"buttonGroup"},[s("div",{staticClass:"restart",attrs:{id:"restart"},on:{click:function(i){return t.restart()}}},[s("span",[t._v("重新开始")])]),s("div",{staticClass:"revert",attrs:{id:"revert"},on:{click:function(i){return t.revert()}}},[s("span",[t._v("悔棋")])]),s("div",{staticClass:"removeRevert",attrs:{id:"removeRevert"},on:{click:function(i){return t.removeRevert()}}},[s("span",[t._v("撤销悔棋")])])])])},v=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"chess",staticStyle:{display:"flex"},attrs:{id:"chess"}},[s("div",{staticClass:"chessArea"})])}],l=s("03e5"),g=l["a"],p=(s("7107"),Object(c["a"])(g,d,v,!1,null,"586a312a",null)),m=p.exports,w={name:"App",data:function(){return{show:!0}},components:{Chess:f,ChessDome:m},methods:{}},b=w,k=(s("034f"),Object(c["a"])(b,A,r,!1,null,null,null)),B=k.exports;s("1157");e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(B)}}).$mount("#app")},"6b54":function(t,i,s){},7107:function(t,i,s){"use strict";var e=s("6b54"),A=s.n(e);A.a},"85ec":function(t,i,s){},"89a5":function(t,i,s){},e1c8:function(t,i){t.exports="data:image/png;base64,R0lGODlhJAAkAOYAAAAAAP///wQEAzozLDMuKRkXFRMSER8eHSMiIS4tLCojHUM7NEk/NxANC01COhYRDjYsJh8aFyolIi4pJh4cGyQiISMhICYkIywpKAgHB3t7e3d3d3Nzc3FxcW9vb21tbWtra2hoaGdnZ2RkZGNjY2FhYV5eXlxcXFpaWllZWVdXV1VVVVNTU1FRUU9PT0xMTEtLS0lJSUZGRkVFRUNDQ0BAQD4+Pj09PTo6Ojk5OTc3NzU1NTMzMzExMS4uLi0tLSsrKygoKCcnJyQkJCMjIyEhIR4eHh0dHRoaGhgYGBYWFhUVFRISEhEREQ4ODg0NDQoKCggICAcHBwQEBAICAgEBAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAFYALAAAAAAkACQAAAf/gFaCg4SFhoeIiYqLjIkEF0UIVgONjQtBNi4oKCkrLzU8QxOVhws8Kh8dHR4fIiQnLTE0OUEXpIM9LB8bGxwdICElKCsuNDQ3OT1EDKQ+JRsavR8hIyYpLS8zNTbIOjxBEo0/I7wc09UoLdgyNTc43js9P0KjikMpHhwgIiUnKi0uXsSYccOdjnhAgAQRQoQSogkxQoD4UE3FCoAw2NnAcWMHD3lBhhQpQsRIIiAmQrg6QQwGjIHucuzw8QPIjyFGihzZScTCoQIySpAwgYKFC5c02uGQycNHQiJHjBhBokTJyENFWJhg2cLljKTIZsqbh1NqkiVMliARQqGQAh4r/zqxeDnj3buPPXosHIJg6lm0TJIMOVIog44XRmXVqJEDBw4eTYMEQUAE6pEkTDI3abKkyJBCUXjIkEGDm0HINCUjoGzkCNUlSpo4ccLkSJAFhKAAaVzwYFOb80IS0YkkiRK0TZ7MVgsk3CApQ3p4bEqzh8IhQMoWT4KZiZMnyp80OeKj0JQiQYDQBNLDxxC+fZMYSVIcefLv35kY6WFrkIC16dkUxHCWIVEcVZolBx4U4DWBgA4VEEIFE5EQIcRqOrXmGhJLdLiZclBEIUUUUDixRBA5EEBIFU4gIVJOrfl13BJNMCHbgiKOCEUTSPiQAzODPPAEEjFeVtxxNmb2RPaJUDQZxRQ6LkHEY4ZIocRO21VFY5JMOJnjFAJIsSMSmCRgiABqGahEkpsp2KSYUkwxBRUCkLjEEDzg4IAhEPDI4WbfNQlFnHIKIACYVVRRpxNH/GADEIgYUMR8Ci45qBRxCkBFFVR0KicUSQihQw57IrKWEbG9SSgVALTqKgBUSNHEfjlgoAgEQ/xABBJOhCiFpq++OsWQP+QgBCMECOEeEt5BMWewig67hBA/mNTIAAg4VUQSTUAhQBUAcErFFFE8sYQRQxxwixUVYDfYEkvGqeMTgS0BwbqDLHGETrEtCd5sUDiHLyERBCqinA3cO/DCDDcsSCAAOw=="}});
//# sourceMappingURL=app.02d838d1.js.map