(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0156":function(e,t,n){"use strict";var a=n("adbb"),r=n.n(a);r.a},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("123d"),s=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar"),n("router-view")],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("v-app-bar",{attrs:{color:"indigo accent-4",dark:""}},[n("v-toolbar-title",{staticClass:"chatbox"},[e._v(" Chatbox ")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{text:"",link:"",to:{name:"home"}}},[n("v-icon",{staticClass:"mx-2"},[e._v("mdi-home")]),e._v(" Home ")],1)],1),n("v-toolbar-items",[e.auth&&e.isAdmin?n("v-btn",{attrs:{text:"",link:"",to:{name:"admin"}}},[n("v-icon",{staticClass:"mx-2"},[e._v("settings_applications")]),e._v(" Admin Panel ")],1):e._e()],1),n("v-toolbar-items",[e.auth?e._e():n("v-btn",{attrs:{text:"",link:"",to:"/login"}},[n("v-icon",{staticClass:"mx-2"},[e._v("person")]),e._v(" Sign In ")],1)],1),n("v-toolbar-items",[e.auth?e._e():n("v-btn",{attrs:{text:"",link:"",to:"/registration"}},[n("v-icon",{staticClass:"mx-2"},[e._v("person_add")]),e._v(" Sign Up ")],1)],1),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([e.auth?{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{text:""}},a),[n("v-icon",[e._v("mdi-account-circle")]),e._v(" "+e._s(e.username)+" ")],1)]}}:null],null,!0)},[n("v-list",[n("v-list-item",{attrs:{link:"",to:{name:"myaccount"}}},[n("v-list-item-title",[e._v("My Account")])],1),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-title",[e._v("Sign Out")])],1)],1)],1)],1)],1)},l=[],u=(n("d3b7"),n("96cf"),{data:function(){return{username:this.$store.getters.getUserName}},computed:{auth:function(){return this.$store.getters.isAuthenticated},isAdmin:function(){return"admin"===this.$store.getters.getRole}},methods:{logout:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$store.dispatch("logout"));case 2:case"end":return e.stop()}}),null,this)}}}),m=u,d=(n("6f97"),n("2877")),h=n("6544"),v=n.n(h),f=n("40dc"),p=n("8336"),g=n("132d"),x=n("8860"),w=n("da13"),b=n("5d23"),_=n("e449"),y=n("2fa4"),k=n("2a7f"),C=Object(d["a"])(m,c,l,!1,null,"4cd359a2",null),R=C.exports;v()(C,{VAppBar:f["a"],VBtn:p["a"],VIcon:g["a"],VList:x["a"],VListItem:w["a"],VListItemTitle:b["c"],VMenu:_["a"],VSpacer:y["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var I={name:"App",components:{Navbar:R},data:function(){return{}},created:function(){this.$store.dispatch("tryAutoLogin")}},S=I,V=n("7496"),N=Object(d["a"])(S,o,i,!1,null,null,null),D=N.exports;v()(N,{VApp:V["a"]});var U=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"home",attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{md:"2"}},[n("v-expansion-panels",[e.onRoom?n("v-expansion-panel",{staticClass:"shadow-0 my-2"},[n("v-expansion-panel-header",[e._v(e._s(e.onRoom.roomName))]),n("v-expansion-panel-content",[n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:"",to:{name:"chat",params:{id:e.onRoom._id,roomName:e.onRoom.roomName}}}},[e._v("Go to Room")])],1),n("v-expansion-panel-content",[e.onRoom.admin.adminID===e.userID?n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:""},on:{click:function(t){return e.remove(e.onRoom._id)}}},[e._v("Delete Room")]):e._e()],1)],1):e._e(),n("v-expansion-panel",{directives:[{name:"show",rawName:"v-show",value:e.username,expression:"username"}],staticClass:"shadow-0 my-2"},[n("v-expansion-panel-header",[e._v("Chat Rooms")]),e._l(e.rooms,(function(t,a){return n("v-expansion-panel-content",{key:a},[n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:"",to:{name:"chat",params:{id:t._id,roomName:t.roomName}}},on:{click:function(n){return e.goRoom(t)}}},[e._v(e._s(t.roomName))])],1)}))],2),n("v-expansion-panel",{directives:[{name:"show",rawName:"v-show",value:e.username,expression:"username"}],staticClass:"shadow-0 my-2"},[n("v-expansion-panel-header",[e._v("My Rooms")]),e._l(e.myRooms,(function(t,a){return n("v-expansion-panel-content",{key:a},[n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:"",link:"",to:{name:"chat",params:{id:t._id,roomName:t.roomName}}},on:{click:function(n){return n.stopPropagation(),e.goRoom(t)}}},[e._v(e._s(t.roomName))])],1)})),n("v-expansion-panel-content",[n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:"",to:{name:"createRoom"}}},[e._v("New Room")])],1)],2),n("v-expansion-panel",{directives:[{name:"show",rawName:"v-show",value:e.username,expression:"username"}],staticClass:"shadow-0 my-2"},[n("v-expansion-panel-header",[e._v(e._s(e.username))]),n("v-expansion-panel-content",[n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:"",link:"",to:{name:"myaccount"}}},[e._v("My Account")])],1)],1)],1)],1),n("v-col",{staticClass:"home",attrs:{md:"10"}},[n("router-view")],1)],1)],1)},$=[],j=(n("4160"),n("159b"),{name:"home",data:function(){return{username:null,rooms:[],onRoom:null,userID:"",myRooms:[]}},created:function(){var e,t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e=this.$store.getters.getUserName,this.username=null!==e?e:"",this.userID=this.$store.getters.getUserID,n.next=5,regeneratorRuntime.awrap(this.$store.dispatch("getAllRooms"));case 5:if(this.rooms=n.sent,this.rooms.forEach((function(e){e.admin.adminID===t.userID&&t.myRooms.push(e)})),!this.$route.params.id){n.next=11;break}return n.next=10,regeneratorRuntime.awrap(this.$store.dispatch("getRoom",this.$route.params.id));case 10:this.onRoom=n.sent;case 11:case"end":return n.stop()}}),null,this)},methods:{goRoom:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.$router.go(),this.onRoom=e;case 2:case"end":return t.stop()}}),null,this)},remove:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$store.dispatch("removeRoom",e));case 2:case"end":return t.stop()}}),null,this)}}}),O=j,P=(n("5db7"),n("62ad")),A=n("a523"),T=n("cd55"),L=n("49e2"),M=n("c865"),q=n("0393"),B=n("0fd9"),J=Object(d["a"])(O,E,$,!1,null,"15b41331",null),F=J.exports;v()(J,{VBtn:p["a"],VCol:P["a"],VContainer:A["a"],VExpansionPanel:T["a"],VExpansionPanelContent:L["a"],VExpansionPanelHeader:M["a"],VExpansionPanels:q["a"],VRow:B["a"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto pa-10 my-10",attrs:{width:"600",outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("p",{staticClass:"display-1 text-center cyan--text"},[e._v("SIGN IN")]),n("v-text-field",{staticClass:"my-5",attrs:{"prepend-icon":"mdi-account-circle",rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{staticClass:"my-5",attrs:{type:e.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:e.passRules,label:"Password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{staticClass:"cyan",attrs:{dark:"",depressed:"",type:"submit"}},[e._v("Sign In")])],1)],1)},G=[],H={name:"SignIn",data:function(){return{valid:!0,showPassword:!1,email:"",password:"",error:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passRules:[function(e){return!!e||"Required."},function(e){return e.length>=6||"Min 6 characters"}]}},computed:{isError:function(){return this.$store.getters.isError}},methods:{onSubmit:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e={email:this.email,password:this.password},t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("login",e));case 3:return t.next=5,regeneratorRuntime.awrap(this.$store.getters.user);case 5:case"end":return t.stop()}}),null,this)}}},W=H,K=n("b0af"),Q=n("4bd4"),X=n("8654"),Y=Object(d["a"])(W,z,G,!1,null,"2c174270",null),Z=Y.exports;v()(Y,{VBtn:p["a"],VCard:K["a"],VForm:Q["a"],VTextField:X["a"]});var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto pa-10 my-10",attrs:{width:"600",outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("p",{staticClass:"display-1 text-center cyan--text"},[e._v("SIGN UP")]),n("v-text-field",{staticClass:"my-5",attrs:{"prepend-icon":"mdi-account-circle",counter:15,rules:e.nameRules,label:"Username",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("v-text-field",{staticClass:"my-5",attrs:{"prepend-icon":"email",rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{staticClass:"my-5",attrs:{type:e.showPassword?"text":"password","prepend-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",rules:e.passRules,label:"Password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{staticClass:"cyan",attrs:{dark:"",depressed:"",type:"submit"}},[e._v("Sign Up")])],1)],1)},te=[],ne={name:"SignUp",data:function(){return{showPassword:!1,email:"",password:"",username:"",valid:!0,nameRules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length<=15||"Username must be less than 10 characters"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passRules:[function(e){return!!e||"Required."},function(e){return e.length>=6||"Min 6 characters"}]}},methods:{onSubmit:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e={email:this.email,password:this.password,username:this.username},t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("registration",e));case 3:return t.next=5,regeneratorRuntime.awrap(this.$store.getters.user);case 5:case"end":return t.stop()}}),null,this)}}},ae=ne,re=Object(d["a"])(ae,ee,te,!1,null,"756b6042",null),se=re.exports;v()(re,{VBtn:p["a"],VCard:K["a"],VForm:Q["a"],VTextField:X["a"]});var oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[[n("v-card",{staticClass:"mx-auto box",attrs:{"max-width":"800",outlined:""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center head-title"},[e._v("Welcome to Chatbox")])],1)],1)],1),n("v-layout",{directives:[{name:"show",rawName:"v-show",value:e.username,expression:"username"}],attrs:{"justify-center":""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center name-title"},[e._v(e._s(e.username))])],1)],1)],1),n("v-layout",{attrs:{"justify-center":""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center text-title"},[e._v("Start Chatting")])],1)],1)],1),n("v-layout",{directives:[{name:"show",rawName:"v-show",value:e.username,expression:"username"}],attrs:{"justify-center":""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center text-title"},[e._v("Create your own Chat Room or Join any")])],1)],1)],1),n("v-layout",{directives:[{name:"show",rawName:"v-show",value:!e.username,expression:"!username"}],attrs:{"justify-center":""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-center text-title"},[n("v-btn",{staticClass:"info accent-4 text-title mx-2",attrs:{text:"",to:{name:"login"}}},[e._v(" Sign In ")]),n("v-btn",{staticClass:"info accent-4 text-title mx-2",attrs:{text:"",to:{name:"registration"}}},[e._v(" Sign Up ")])],1)],1)],1)],1)],1)]],2)},ie=[],ce={name:"HelloWorld",data:function(){return{username:null}},created:function(){var e=this.$store.getters.getUserName;this.username=null!==e?e:""}},le=ce,ue=(n("fcb6"),n("a722")),me=Object(d["a"])(le,oe,ie,!1,null,"60cc4cbf",null),de=me.exports;v()(me,{VBtn:p["a"],VCard:K["a"],VContainer:A["a"],VLayout:ue["a"],VListItem:w["a"],VListItemContent:b["a"],VListItemTitle:b["c"]});var he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-card",{staticClass:"mx-auto main-card",attrs:{height:"550px",color:"teal accent-4",outlined:""}},[e.room?n("v-list-item",{attrs:{"three-line":"",dark:""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-black room-font"},[e._v(e._s(e.room.roomName))]),n("v-list-item-subtitle",{staticClass:"font-weight-black sub"},[e._v("Created By: "+e._s(e.room.admin.adminName))])],1)],1):e._e(),n("v-card",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0},expression:"{always: false, smooth: true}"}],staticClass:"mx-auto overflow-y",attrs:{height:"460px",outlined:""}},[n("v-container",e._l(e.messages,(function(t){return n("v-row",{key:t._id,staticClass:"mx-auto my-1",attrs:{justify:t.from._id===e.userID?"end":"start"}},[n("v-card",{class:t.from._id===e.userID?"my-1 txt-right":"my-1 txt-left",attrs:{color:t.from._id===e.userID?"#209cee":"#3273dc",outlined:"",dark:"","max-width":"800"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{class:t.from._id===e.userID?"sub font-weight-black text-end":"sub font-weight-black"},[e._v(e._s(t.from.userName))]),n("v-list-item-title",{class:t.from._id===e.userID?"text-wrap text-justify msg-title text-end":"text-wrap text-justify msg-title"},[e._v(" "+e._s(t.text)+" ")]),n("v-list-item-subtitle",{class:t.from._id===e.userID?"text-wrap text-justify clock text-end mt-1":"text-wrap text-justify clock my-1"},[e._v(e._s(t.createdAt))])],1)],1)],1)],1)})),1)],1)],1),n("v-card",{staticClass:"mx-auto send",attrs:{"max-height":"90px",outlined:""}},[n("v-row",[n("v-col",{attrs:{sm:"10"}},[n("v-text-field",{staticClass:"mx-5",attrs:{"prepend-icon":"chat",label:"Message",required:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),n("v-col",{attrs:{sm:"2"}},[n("v-btn",{staticClass:"success accent-4 mt-5 mx-12",attrs:{text:"",disabled:!e.text,type:"submit"},on:{click:function(t){return t.preventDefault(),e.sendText(t)}}},[e._v("Send")])],1)],1)],1)],1)},ve=[],fe=n("8055"),pe=n.n(fe),ge={data:function(){return{room:"",text:"",userID:"",messages:[],socket:pe()(),valid:!0}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.joinServer(),e.next=3,regeneratorRuntime.awrap(this.$store.dispatch("getRoom",this.$route.params.id));case 3:this.room=e.sent,this.userID=localStorage.getItem("userID"),this.messages=this.room.messages;case 6:case"end":return e.stop()}}),null,this)},methods:{sendText:function(){var e,t,n;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return e={_id:localStorage.getItem("userID"),userName:localStorage.getItem("username"),userEmail:JSON.parse(localStorage.getItem("user")).email},t=this.text,n={from:e,text:t,roomID:this.room._id},a.next=5,regeneratorRuntime.awrap(this.socket.emit("newMessage",n));case 5:this.text="";case 6:case"end":return a.stop()}}),null,this)},joinServer:function(){var e=this;this.socket.on("connect",(function(){e.socket.on("newText",(function(t){e.messages.length>=30?(e.messages.shift(),e.messages.push(t)):e.messages.push(t)}))}))}}},xe=ge,we=(n("fb71"),Object(d["a"])(xe,he,ve,!1,null,"5b84a1ae",null)),be=we.exports;v()(we,{VBtn:p["a"],VCard:K["a"],VCol:P["a"],VContainer:A["a"],VListItem:w["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VRow:B["a"],VTextField:X["a"]});var _e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto pa-10 my-10",attrs:{width:"600",outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.add(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("p",{staticClass:"display-1 text-center cyan--text"},[e._v("Create New Room")]),n("v-text-field",{staticClass:"my-5",attrs:{"prepend-icon":"tag_faces",counter:20,rules:e.nameRules,label:"Name of The Room",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-btn",{staticClass:"success accent-4",attrs:{dark:"",depressed:"",type:"submit"}},[e._v("Create")])],1)],1)},ye=[],ke=(n("b0c0"),{name:"AddTag",data:function(){return{name:"",valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length>=8&&e.length<=20||"6 to 15 Characters"}]}},methods:{add:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e={roomName:this.name},t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("newRoom",e));case 3:case"end":return t.stop()}}),null,this)}}}),Ce=ke,Re=Object(d["a"])(Ce,_e,ye,!1,null,null,null),Ie=Re.exports;v()(Re,{VBtn:p["a"],VCard:K["a"],VForm:Q["a"],VTextField:X["a"]});var Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline my-3"},[n("h1",[e._v("User Info:")])]),n("v-list-item-title",{staticClass:"headline my-3"},[e._v(e._s(e.user.username))])],1)],1),n("hr"),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline my-3"},[e._v("User Name: "+e._s(e.user.username))]),n("v-list-item-title",{staticClass:"headline my-3"},[e._v("Email: "+e._s(e.user.email))])],1)],1),n("v-card-actions",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.user._id===e.checkID,expression:"user._id === checkID"}],staticClass:"success accent-4",attrs:{text:"",to:{name:"update"}}},[e._v("Update My Information")])],1)],1)],1)},Ve=[],Ne={data:function(){return{user:{},role:"",checkID:""}},created:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if("userinfo"!==this.$route.name){n.next=8;break}return e=this.$route.params.id,n.next=4,regeneratorRuntime.awrap(this.$store.dispatch("getAUser",e));case 4:this.user=n.sent,this.checkID=JSON.parse(localStorage.getItem("user"))._id,n.next=14;break;case 8:return t=localStorage.getItem("userID"),n.next=11,regeneratorRuntime.awrap(this.$store.dispatch("getAUser",t));case 11:this.user=n.sent,this.role=this.user.role,this.checkID=JSON.parse(localStorage.getItem("user"))._id;case 14:case"end":return n.stop()}}),null,this)}},De=Ne,Ue=n("99d9"),Ee=Object(d["a"])(De,Se,Ve,!1,null,null,null),$e=Ee.exports;v()(Ee,{VBtn:p["a"],VCard:K["a"],VCardActions:Ue["a"],VContainer:A["a"],VListItem:w["a"],VListItemContent:b["a"],VListItemTitle:b["c"]});var je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-card",{staticClass:"mx-auto pa-10 my-10",attrs:{width:"600",outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.update(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("p",{staticClass:"display-1 text-center cyan--text"},[e._v("SIGN UP")]),n("v-text-field",{staticClass:"my-5",attrs:{"prepend-icon":"mdi-account-circle",counter:20,rules:e.nameRules,label:"Username",required:""},model:{value:e.userinfo.username,callback:function(t){e.$set(e.userinfo,"username",t)},expression:"userinfo.username"}}),n("v-btn",{staticClass:"success accent-4",attrs:{dark:"",depressed:"",type:"submit"}},[e._v("Update")])],1)],1)],1)},Oe=[],Pe={data:function(){return{userinfo:{},valid:!0,nameRules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length<=20||"Username must be less than 10 characters"}]}},created:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e=JSON.parse(localStorage.getItem("user"))._id,t.next=3,regeneratorRuntime.awrap(this.$store.dispatch("getAUser",e));case 3:this.userinfo=t.sent;case 4:case"end":return t.stop()}}),null,this)},methods:{update:function(){var e={_id:this.userinfo._id,username:this.userinfo.username,email:this.userinfo.email,role:this.userinfo.role};this.$store.dispatch("changeUser",e)}}},Ae=Pe,Te=Object(d["a"])(Ae,je,Oe,!1,null,null,null),Le=Te.exports;v()(Te,{VBtn:p["a"],VCard:K["a"],VContainer:A["a"],VForm:Q["a"],VTextField:X["a"]});var Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{md:"2"}},[n("v-expansion-panels",{staticClass:"my-2"},[n("v-expansion-panel",{staticClass:"shadow-0 my-2"},[n("v-expansion-panel-header",[e._v("Chat Rooms")]),n("v-expansion-panel-content",[n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:"",link:"",to:{name:"allrooms"}}},[e._v("View All")])],1)],1),n("v-expansion-panel",{staticClass:"shadow-0 my-2"},[n("v-expansion-panel-header",[e._v("Users")]),n("v-expansion-panel-content",[n("v-btn",{staticClass:"mb-2 blue darken-1 w-100",attrs:{depressed:"",dark:"",link:"",to:{name:"allusers"}}},[e._v("View All")])],1)],1)],1)],1),n("v-col",{attrs:{md:"10"}},[n("router-view")],1)],1)],1)},qe=[],Be={name:"admin"},Je=Be,Fe=(n("0156"),Object(d["a"])(Je,Me,qe,!1,null,null,null)),ze=Fe.exports;v()(Fe,{VBtn:p["a"],VCol:P["a"],VContainer:A["a"],VExpansionPanel:T["a"],VExpansionPanelContent:L["a"],VExpansionPanelHeader:M["a"],VExpansionPanels:q["a"],VRow:B["a"]});var Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-simple-table",{attrs:{"fixed-header":"",height:"650"},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[n("h1",[e._v("#")])]),n("th",{staticClass:"text-left"},[n("h1",[e._v("Room Name")])]),n("th",{staticClass:"text-left"},[n("h1",[e._v("Room Admin")])]),n("th",{staticClass:"text-left"},[n("h1",[e._v("Admin Email")])]),n("th",{staticClass:"text-left"})])]),n("tbody",e._l(e.rooms,(function(t,a){return n("tr",{key:a},[n("td",[n("h3",[e._v(e._s(a+1))])]),n("td",[n("h3",[e._v(e._s(t.roomName))])]),n("td",[n("h3",[e._v(e._s(t.admin.adminName))])]),n("td",[n("h3",[e._v(e._s(t.admin.adminEmail))])]),n("td",[n("v-btn",{staticClass:"error darken-1",attrs:{text:""},on:{click:function(n){return e.delC(t._id)}}},[e._v(" Delete ")])],1)])})),0)]},proxy:!0}])})},He=[],We={data:function(){return{rooms:[],error:""}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,regeneratorRuntime.awrap(this.$store.dispatch("getAllRooms"));case 3:this.rooms=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0;case 9:case"end":return e.stop()}}),null,this,[[0,6]])},methods:{delC:function(e){this.$store.dispatch("removeRoom",e)}}},Ke=We,Qe=n("1f4f"),Xe=Object(d["a"])(Ke,Ge,He,!1,null,null,null),Ye=Xe.exports;v()(Xe,{VBtn:p["a"],VSimpleTable:Qe["a"]});var Ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-simple-table",{attrs:{"fixed-header":"",height:"650"},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[n("h1",[e._v("#")])]),n("th",{staticClass:"text-left"},[n("h1",[e._v("User Name")])]),n("th",{staticClass:"text-left"},[n("h1",[e._v("Email")])]),n("th",{staticClass:"text-left"},[n("h1",[e._v("Phone")])]),n("th",{staticClass:"text-left"},[n("h1",[e._v("Role")])]),n("th",{staticClass:"text-left"}),n("th",{staticClass:"text-left"}),n("th",{staticClass:"text-left"})])]),n("tbody",e._l(e.users,(function(t,a){return n("tr",{key:a},[n("td",[e._v(e._s(a+1))]),n("td",[e._v(e._s(t.username))]),n("td",[e._v(e._s(t.email))]),n("td",[e._v(e._s(t.userPhone))]),n("td",[e._v(e._s(t.role))]),n("td",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"admin"===t.role&&e.adminID!==t._id,expression:"item.role === 'admin' && adminID !== item._id"}],staticClass:"success accent-4",attrs:{text:""},on:{click:function(n){return e.updateRole(t)}}},[e._v(" Make User ")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"user"===t.role,expression:"item.role === 'user'"}],staticClass:"success accent-4",attrs:{text:""},on:{click:function(n){return e.updateRole(t)}}},[e._v(" Make Admin ")])],1),n("td",[n("v-btn",{staticClass:"info darken-1",attrs:{text:"",to:{name:"userinfo",params:{id:t._id,name:t.username}}}},[e._v(" View ")])],1),n("td",[n("v-btn",{staticClass:"error darken-1",attrs:{text:""},on:{click:function(n){return e.deleteUser(t._id)}}},[e._v(" Delete ")])],1)])})),0)]},proxy:!0}])})},et=[],tt={data:function(){return{users:null,adminID:null}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$store.dispatch("getAllUsers"));case 2:this.users=e.sent,this.adminID=localStorage.getItem("userID");case 4:case"end":return e.stop()}}),null,this)},methods:{updateRole:function(e){"admin"===e.role?e.role="user":e.role="admin",this.$store.dispatch("makeChange",e)},deleteUser:function(e){this.$store.dispatch("removeUser",e)}}},nt=tt,at=Object(d["a"])(nt,Ze,et,!1,null,null,null),rt=at.exports;v()(at,{VBtn:p["a"],VSimpleTable:Qe["a"]}),a["a"].use(U["a"]);var st=[{path:"/",name:"home",redirect:"/home",component:F,children:[{path:"home",component:de},{path:"thisroom/:id/:roomName",name:"chat",component:be},{path:"create",name:"createRoom",component:Ie},{path:"myaccount",name:"myaccount",component:$e},{path:"update",name:"update",component:Le}]},{path:"/login",name:"login",component:Z},{path:"/registration",name:"registration",component:se},{path:"/admin",name:"admin",component:ze,redirect:"admin/allrooms",children:[{path:"allrooms",name:"allrooms",component:Ye},{path:"allusers",name:"allusers",component:rt},{path:"userinfo/:id/:name",name:"userinfo",component:$e}]}],ot=new U["a"]({mode:"history",base:"/",routes:st}),it=ot,ct=n("2f62"),lt=(n("ac1f"),n("5319"),n("9f12")),ut=n("53fe"),mt=n("bc3a"),dt=n.n(mt),ht="/users",vt=function(){function e(){Object(lt["a"])(this,e)}return Object(ut["a"])(e,null,[{key:"createUser",value:function(e){return dt.a.post("".concat(ht,"/create"),e).then((function(e){return e})).catch((function(e){return e}))}},{key:"userLogin",value:function(e){return dt.a.post("".concat(ht,"/login"),e).then((function(e){return e})).catch((function(e){return e.message}))}},{key:"userLogout",value:function(e){return dt.a.delete("".concat(ht,"/logout"),e).then((function(e){})).catch((function(e){return e}))}},{key:"getUser",value:function(e){return dt.a.get("".concat(ht,"/").concat(e)).then((function(e){return e})).catch((function(e){return e}))}},{key:"updateUser",value:function(e,t){return new Promise((function(n,a){var r,s;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(dt.a.patch("".concat(ht,"/").concat(e),t));case 3:r=o.sent,s=r.data,n(s),o.next=11;break;case 8:o.prev=8,o.t0=o["catch"](0),a(o.t0);case 11:case"end":return o.stop()}}),null,null,[[0,8]])}))}},{key:"getAll",value:function(){return dt.a.get("".concat(ht)).then((function(e){return e})).catch((function(e){return e}))}},{key:"deleteUser",value:function(e){return dt.a.delete("".concat(ht,"/").concat(e)).then((function(e){return e})).catch((function(e){return e}))}}]),e}(),ft=vt;a["a"].use(ct["a"]);var pt={headers:{"x-auth":""}},gt={idToken:null,userID:null,userEmail:null,username:null,user:null,role:null,error:null},xt={authUser:function(e,t){e.idToken=t.token,e.userID=t.userID,e.userEmail=t.userEmail,e.username=t.username,e.user=t.user,e.role=t.role},clearAuthData:function(e){e.idToken=null,e.userID=null,e.userEmail=null,e.username=null,e.user=null,e.role=null},takeError:function(e,t){e.error=t}},wt={registration:function(e,t){var n=e.commit;e.dispatch;ft.createUser(t).then((function(e){pt.headers["x-auth"]=e.headers["x-auth"],n("authUser",{token:e.headers["x-auth"],userID:e.data._id,userEmail:e.data.email,username:e.data.username,role:e.data.role,user:JSON.stringify(e.data)});var t=gt.user;localStorage.setItem("token",e.headers["x-auth"]),localStorage.setItem("userID",e.data._id),localStorage.setItem("username",e.data.username),localStorage.setItem("user",t),it.replace("/"),it.go()})).catch((function(e){console.log(e)}))},login:function(e,t){var n=e.commit;e.dispatch;ft.userLogin(t).then((function(e){n("authUser",{token:e.headers["x-auth"],userID:e.data._id,userEmail:e.data.email,username:e.data.username,role:e.data.role,user:JSON.stringify(e.data)});var t=gt.user;localStorage.setItem("token",e.headers["x-auth"]),localStorage.setItem("userID",e.data._id),localStorage.setItem("username",e.data.username),localStorage.setItem("user",t),it.replace("/"),it.go()})).catch((function(e){console.log(e),n("takeError",{error:e})}))},logout:function(e){var t=e.commit;ft.userLogout(pt).then((function(e){t("clearAuthData"),pt.headers["x-auth"]="",localStorage.removeItem("token"),localStorage.removeItem("userID"),localStorage.removeItem("username"),localStorage.removeItem("user"),it.replace("/login"),it.go()})).catch((function(e){console.log(e)}))},tryAutoLogin:function(e){var t=e.commit,n=localStorage.getItem("token");if(pt){pt.headers["x-auth"]=n;var a,r=JSON.parse(localStorage.getItem("user"));r&&(a=r.role);var s=localStorage.getItem("userID"),o=localStorage.getItem("username");t("authUser",{token:n,userID:s,username:o,role:a,user:r})}},getAUser:function(e,t){e.commit,e.dispatch;return new Promise((function(e,n){ft.getUser(t).then((function(t){e(t.data)})).catch((function(e){n(e)}))}))},changeUser:function(e,t){var n=e.commit,a=(e.dispatch,t._id);n("authUser",{token:localStorage.getItem("token"),userID:t._id,userEmail:t.email,username:t.username,role:t.role,user:JSON.stringify(t)});var r=gt.user;localStorage.setItem("user",r),localStorage.setItem("username",t.username),ft.updateUser(a,t).then((function(e){it.replace("/"),it.go()})).catch((function(e){console.log(e)}))},getAllUsers:function(e){e.commit,e.dispatch;return new Promise((function(e,t){ft.getAll().then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},removeUser:function(e,t){e.commit,e.dispatch;console.log(t),ft.deleteUser(t).then((function(e){it.replace("/admin"),it.go()})).catch((function(e){console.log(e)}))},makeChange:function(e,t){e.commit,e.dispatch;var n=t._id;ft.updateUser(n,t).then((function(e){it.replace("/admin"),it.go()})).catch((function(e){console.log(e)}))}},bt={getUserName:function(e){return e.username},isAuthenticated:function(e){return null!=e.idToken},getRole:function(e){return e.role},isError:function(e){return null!=e.error},getUserID:function(e){return e.userID}},_t={state:gt,mutations:xt,getters:bt,actions:wt},yt="/rooms",kt=function(){function e(){Object(lt["a"])(this,e)}return Object(ut["a"])(e,null,[{key:"allRooms",value:function(){return dt.a.get("".concat(yt)).then((function(e){return e})).catch((function(e){return e}))}},{key:"thisRoom",value:function(e){return dt.a.get("".concat(yt,"/").concat(e)).then((function(e){return e})).catch((function(e){return e}))}},{key:"createRoom",value:function(e,t){return dt.a.post("".concat(yt,"/create"),e,t).then((function(e){return e})).catch((function(e){return e}))}},{key:"deleteRoom",value:function(e){return dt.a.delete("".concat(yt,"/").concat(e)).then((function(e){return e})).catch((function(e){return e}))}}]),e}(),Ct=kt;a["a"].use(ct["a"]);var Rt={headers:{"x-auth":""}},It={allRooms:null},St={getAllRooms:function(e,t){e.allRooms=t}},Vt={getAllRooms:function(){return new Promise((function(e,t){Ct.allRooms().then((function(t){e(t.data)})).catch((function(e){t(e)}))}))},newRoom:function(e,t){e.commit,e.dispatch;var n=localStorage.getItem("token");if(n)return t.members=[{_id:localStorage.getItem("userID"),userName:localStorage.getItem("username"),userEmail:JSON.parse(localStorage.getItem("user")).email}],Rt.headers["x-auth"]=n,new Promise((function(e,n){Ct.createRoom(t,Rt).then((function(t){e(t.data),it.replace("/"),it.go()})).catch((function(e){n(e)}))}))},removeRoom:function(e,t){e.commit,e.dispatch;return new Promise((function(e,n){Ct.deleteRoom(t).then((function(t){e(t),it.replace("/"),it.go()})).catch((function(e){n(e)}))}))}},Nt={},Dt={state:It,mutations:St,getters:Nt,actions:Vt};a["a"].use(ct["a"]);var Ut={currentRoom:null,messages:null},Et={getThisRoom:function(e,t){e.currentRoom=t},getMessages:function(e,t){e.messages=t}},$t={getRoom:function(e,t){var n=e.commit;e.dispatch;return new Promise((function(e,a){Ct.thisRoom(t).then((function(t){n("getThisRoom",t.data);var a=t.data.members,r={_id:localStorage.getItem("userID"),userName:localStorage.getItem("username"),userEmail:JSON.parse(localStorage.getItem("user")).email};a.push(r),n("getMessages",t.data.messages),e(t.data)})).catch((function(e){a(e)}))}))}},jt={room:function(e){return e.currentRoom}},Ot={state:Ut,mutations:Et,getters:jt,actions:$t};a["a"].use(ct["a"]);var Pt=new ct["a"].Store({modules:{auth:_t,rooms:Dt,currentRoom:Ot}}),At=n("9483");Object(At["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Tt=n("f309");a["a"].use(Tt["a"]);var Lt=new Tt["a"]({icons:{iconfont:"md"}});a["a"].config.productionTip=!1,a["a"].use(s.a),new a["a"]({router:it,store:Pt,vuetify:Lt,render:function(e){return e(D)}}).$mount("#app")},"5db7":function(e,t,n){"use strict";var a=n("ae85"),r=n.n(a);r.a},"6f97":function(e,t,n){"use strict";var a=n("e388"),r=n.n(a);r.a},"9d02":function(e,t,n){},adbb:function(e,t,n){},ae85:function(e,t,n){},e1ec:function(e,t,n){},e388:function(e,t,n){},fb71:function(e,t,n){"use strict";var a=n("9d02"),r=n.n(a);r.a},fcb6:function(e,t,n){"use strict";var a=n("e1ec"),r=n.n(a);r.a}});
//# sourceMappingURL=app.bb07157a.js.map