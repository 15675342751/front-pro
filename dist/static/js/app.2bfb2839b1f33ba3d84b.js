webpackJsonp([1],{"+skl":function(t,e){},"/Cee":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},o,!1,function(t){a("/Cee")},null,null).exports,r=a("/ocq"),s=a("mtWM"),c=a.n(s),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Form",{ref:"formInline",attrs:{inline:""}},[a("Form-item",{attrs:{prop:"user"}},[a("Input",{attrs:{type:"text",placeholder:"请输入币种"},model:{value:t.coin,callback:function(e){t.coin=e},expression:"coin"}})],1),t._v(" "),a("Form-item",[a("Button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")])],1)],1),t._v(" "),a("Table",{staticStyle:{margin:"auto"},attrs:{width:"800",border:"",columns:t.columns,data:t.data}})],1)},staticRenderFns:[]},u=a("VU/8")({data:function(){return{columns:[{title:"交易所",key:"exName",fixed:"left"},{title:"币种",key:"coin",fixed:"left"},{title:"充币",key:"despoit"},{title:"提币",key:"withdraw"}],data:[],copyData:[],coin:""}},created:function(){this.handleLoad()},methods:{handleLoad:function(){var t=this,e=this.coin||"key";this.$axios({method:"get",url:"/api/exs/v1/getCloseCoin?ex=okex&key="+e}).then(function(e){t.data=e.data,t.copyData=e.data})},handleSearch:function(){var t=this;if(this.coin){var e=[];this.copyData.forEach(function(a){a.coin.toUpperCase()===t.coin.toUpperCase()&&e.push(a)}),this.data=e}else this.data=this.copyData}}},l,!1,null,null,null).exports;n.default.use(r.a);var d=new r.a({routes:[{path:"/",name:"index",component:u}]}),p=a("BTaQ"),f=a.n(p);a("+skl");n.default.prototype.$axios=c.a,n.default.use(f.a),n.default.use(r.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:d,components:{App:i},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.2bfb2839b1f33ba3d84b.js.map