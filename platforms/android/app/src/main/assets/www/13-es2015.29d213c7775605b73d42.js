(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{hR5H:function(t,n,e){"use strict";e.r(n),e.d(n,"TabReglasPageModule",(function(){return d}));var o=e("ofXK"),i=e("3Pt+"),a=e("TEn/"),s=e("tyNb"),r=e("mrSG"),c=e("fXoL"),l=e("YzkK"),g=e("fY5y");const b=[{path:"",component:(()=>{class t{constructor(t,n){this.reglasServices=t,this.navController=n,this.newReglas=()=>this.navController.navigateForward(["tabs/tab-reglas/detail",{reglas:JSON.stringify({equipo:"",equipoContrario:"",evento:"",fecha:"",meta:""}),isSave:!0}]),this.goToDetail=t=>this.navController.navigateForward(["tabs/tab-reglas/detail",{reglas:JSON.stringify(t),isSave:!1}]),this.getListReglas=()=>this.reglasServices.getListReglas().subscribe(t=>this.successGetListReglas(t))}ngOnInit(){this.getListReglas()}ionViewDidEnter(){return Object(r.a)(this,void 0,void 0,(function*(){this.getListReglas()}))}successGetListReglas(t){this.listReglas=t}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(l.a),c.Ib(a.E))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-tab-reglas"]],decls:10,vars:3,consts:[[1,"toolbarGlobal"],[1,"textHeader"],[1,"colorG"],[3,"fullscreen"],["vertical","center","horizontal","end","slot","fixed",3,"click"],["color","danger"],["name","add-outline"],[3,"list","isMeta","emitDetail"]],template:function(t,n){1&t&&(c.Lb(0,"ion-toolbar",0),c.Lb(1,"ion-title",1),c.hc(2," Reglas -"),c.Lb(3,"b",2),c.hc(4,"Ubank"),c.Kb(),c.Kb(),c.Kb(),c.Lb(5,"ion-content",3),c.Lb(6,"ion-fab",4),c.Tb("click",(function(){return n.newReglas()})),c.Lb(7,"ion-fab-button",5),c.Jb(8,"ion-icon",6),c.Kb(),c.Kb(),c.Lb(9,"app-list-card",7),c.Tb("emitDetail",(function(t){return n.goToDetail(t)})),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.ac("fullscreen",!0),c.yb(4),c.ac("list",n.listReglas)("isMeta",!1))},directives:[a.B,a.A,a.j,a.l,a.m,a.p,g.a],styles:["ion-content[_ngcontent-%COMP%]{--offset-bottom:-70px!important}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#d74346}ion-content[_ngcontent-%COMP%]   .textHeader[_ngcontent-%COMP%]{font-family:Montserrat Regular;font-size:17px;letter-spacing:.4em}ion-content[_ngcontent-%COMP%]   .textHeader[_ngcontent-%COMP%]   .colorG[_ngcontent-%COMP%]{color:#d74346}ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;color:rgba(34,36,40,.9)}ion-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Montserrat Regular}ion-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:12px}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(b)],s.i]}),t})();var f=e("dagM");let d=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[o.b,i.d,a.C,u,f.a]]}),t})()}}]);