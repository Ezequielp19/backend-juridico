"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[568],{2948:($,u,c)=>{c.r(u),c.d(u,{VerUsuarioComponent:()=>U});var _=c(1528),d=c(1368),i=c(2112),o=c(4496),I=c(2508),C=c(1496);function E(n,t){if(1&n&&(o.I0R(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),o.OEk(3,"AFIP"),o.C$Y()(),o.I0R(4,"ion-card-content")(5,"p")(6,"strong"),o.OEk(7,"CUIT:"),o.C$Y(),o.OEk(8),o.C$Y(),o.I0R(9,"p")(10,"strong"),o.OEk(11,"Clave Fiscal:"),o.C$Y(),o.OEk(12),o.C$Y()()()),2&n){const r=o.GaO(2);o.yG2(8),o.oRS(" ",null==r.usuario.AFIP?null:r.usuario.AFIP.cuit,""),o.yG2(4),o.oRS(" ",null==r.usuario.AFIP?null:r.usuario.AFIP.claveFiscal,"")}}function f(n,t){if(1&n&&(o.I0R(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),o.OEk(3,"Certificaci\xf3n de Ingresos"),o.C$Y()(),o.I0R(4,"ion-card-content")(5,"p")(6,"strong"),o.OEk(7,"A\xf1o:"),o.C$Y(),o.OEk(8),o.C$Y(),o.I0R(9,"a",7),o.OEk(10,"Ver Certificaci\xf3n de ingresos"),o.C$Y()()()),2&n){const r=o.GaO(2);o.yG2(8),o.oRS(" ",r.usuario.certIngreso.anio,""),o.yG2(),o.E7m("href",r.usuario.certIngresof,o.K6U)}}function m(n,t){if(1&n&&(o.I0R(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),o.OEk(3,"Declaraci\xf3n Jurada"),o.C$Y()(),o.I0R(4,"ion-card-content")(5,"a",7),o.OEk(6,"Ver Declaraci\xf3n Jurada"),o.C$Y()()()),2&n){const r=o.GaO(2);o.yG2(5),o.E7m("href",r.usuario.declaracionJurada.pdf,o.K6U)}}function g(n,t){if(1&n&&(o.I0R(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),o.OEk(3,"Facturaci\xf3n"),o.C$Y()(),o.I0R(4,"ion-card-content")(5,"a",7),o.OEk(6,"Ver Facturacion"),o.C$Y()()()),2&n){const r=o.GaO(2);o.yG2(5),o.E7m("href",r.usuario.facturacion.pdf,o.K6U)}}function p(n,t){if(1&n&&(o.I0R(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),o.OEk(3,"Plan de Pago"),o.C$Y()(),o.I0R(4,"ion-card-content")(5,"a",7),o.OEk(6,"Ver Plan de Pago"),o.C$Y()()()),2&n){const r=o.GaO(2);o.yG2(5),o.E7m("href",r.usuario.planPago.pdf,o.K6U)}}function O(n,t){if(1&n&&(o.I0R(0,"div",6)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),o.OEk(4,"Datos del Usuario"),o.C$Y()(),o.I0R(5,"ion-card-content")(6,"p")(7,"strong"),o.OEk(8,"DNI:"),o.C$Y(),o.OEk(9),o.C$Y(),o.I0R(10,"p")(11,"strong"),o.OEk(12,"Nombre:"),o.C$Y(),o.OEk(13),o.C$Y(),o.I0R(14,"p")(15,"strong"),o.OEk(16,"Apellido:"),o.C$Y(),o.OEk(17),o.C$Y(),o.I0R(18,"p")(19,"strong"),o.OEk(20,"Direcci\xf3n:"),o.C$Y(),o.OEk(21),o.C$Y()()(),o.yuY(22,E,13,2,"ion-card",5)(23,f,11,2,"ion-card",5)(24,m,7,1,"ion-card",5)(25,g,7,1,"ion-card",5)(26,p,7,1,"ion-card",5),o.C$Y()),2&n){const r=o.GaO();o.yG2(9),o.oRS(" ",r.usuario.dni,""),o.yG2(4),o.oRS(" ",r.usuario.nombre,""),o.yG2(4),o.oRS(" ",r.usuario.apellido,""),o.yG2(4),o.oRS(" ",r.usuario.direccion,""),o.yG2(),o.E7m("ngIf",r.usuario.AFIP),o.yG2(),o.E7m("ngIf",r.usuario.certIngreso),o.yG2(),o.E7m("ngIf",r.usuario.declaracionJurada),o.yG2(),o.E7m("ngIf",r.usuario.facturacion),o.yG2(),o.E7m("ngIf",r.usuario.planPago)}}function R(n,t){1&n&&(o.I0R(0,"div"),o.wR5(1,"ion-spinner",8),o.I0R(2,"p"),o.OEk(3,"Cargando datos del usuario..."),o.C$Y()())}let U=(()=>{var n;class t{constructor(a,e,s){this.route=a,this.FirestoreService=e,this.cdr=s,this.usuario={},this.subcollections=["AFIP","certIngreso","declaracionJurada","facturacion","infoPersonal","planPago"]}ngOnInit(){this.userId=this.route.snapshot.paramMap.get("id"),this.cargarDatosUsuario()}cargarDatosUsuario(){var a=this;return(0,_.c)(function*(){try{console.log("Usuario ID:",a.userId);const e=yield a.FirestoreService.getDocumentById("Usuarios",a.userId);if(console.log("Documento del usuario:",e),e){a.usuario=e;for(const s of a.subcollections){const l=yield a.FirestoreService.getDocumentIdInSubcollection(`Usuarios/${a.userId}`,s);if(l){const Y=yield a.FirestoreService.getDocumentById(`Usuarios/${a.userId}/${s}`,l);a.usuario[s]=Y}}}else console.error("No se encontr\xf3 el usuario");a.cdr.detectChanges()}catch(e){console.error("Error al cargar los datos del usuario:",e)}})()}}return(n=t).\u0275fac=function(a){return new(a||n)(o.GI1(I.gV),o.GI1(C.Y),o.GI1(o.kD9))},n.\u0275cmp=o.In1({type:n,selectors:[["app-ver-usuario"]],standalone:!0,features:[o.UHJ],decls:9,vars:2,consts:[["color","primary"],[1,"ion-text-center"],["slot","start"],["defaultHref","/home"],["class","container",4,"ngIf"],[4,"ngIf"],[1,"container"],["target","_blank",3,"href"],["name","crescent"]],template:function(a,e){1&a&&(o.I0R(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),o.OEk(3,"Ver Usuario"),o.C$Y(),o.I0R(4,"ion-buttons",2),o.wR5(5,"ion-back-button",3),o.C$Y()()(),o.I0R(6,"ion-content"),o.yuY(7,O,27,9,"div",4)(8,R,4,0,"div",5),o.C$Y()),2&a&&(o.yG2(7),o.E7m("ngIf",e.usuario),o.yG2(),o.E7m("ngIf",!e.usuario))},dependencies:[d.MD,d.u_,i.wZ,i.GS,i.KC,i.Gg,i.YY,i.I7,i._i,i.wB,i.YA,i.tM,i.Md,i.Im]}),t})()}}]);