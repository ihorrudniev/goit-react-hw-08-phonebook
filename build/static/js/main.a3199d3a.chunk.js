(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,c){t.exports={item:"ContactList_item__2FfXx",text:"ContactList_text__Ku9zM",btn:"ContactList_btn__3cLFB"}},29:function(t,e,c){t.exports={wrapper:"Filter_wrapper__Asx2n"}},34:function(t,e,c){},60:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),r=c(14),o=c.n(r),s=(c(34),c(10)),u=c.n(s),i=c(6),b=c(11),d=c.n(b),j=c(2),l=Object(j.b)("contacts/fetchContactsRequest"),f=Object(j.b)("contacts/fetchContactsSuccess"),O=Object(j.b)("contacts/fetchContactsError"),h={addContactsRequest:Object(j.b)("contacts/addContactsRequest"),addContactsSuccess:Object(j.b)("contacts/addContactsSuccess"),addContactsError:Object(j.b)("contacts/addContactsError"),deleteContactsRequest:Object(j.b)("deleteContactsRequest"),deleteContactsSuccess:Object(j.b)("contacts/deleteContactsSuccess"),deleteContactsError:Object(j.b)("contacts/deleteContactsError"),fetchContactsRequest:l,fetchContactsSuccess:f,fetchContactsError:O,changeFilter:Object(j.b)("contacts/changeFilter")};d.a.defaults.baseURL="https://619aab5727827600174452e9.mockapi.io/contacts/";var C=function(t,e){return function(c){var n={name:t,number:e,completed:!1};c(h.addContactsRequest()),d.a.post("/contacts",n).then((function(t){var e=t.data;return c(h.addContactsSuccess(e))})).catch((function(t){return c(h.addContactsError(t))}))}},m=function(t){return function(e){e(h.deleteContactsRequest()),d.a.delete("/contacts/".concat(t)).then((function(){return e(h.deleteContactsSuccess(t))})).catch((function(t){return e(h.deleteContactsError(t))}))}},p=function(){return function(t){t(h.fetchContactsRequest()),d.a.get("/contacts").then((function(e){var c=e.data;return t(h.fetchContactsSuccess(c))})).catch((function(e){return t(h.fetchContactsError(e))}))}},x=function(t){return t.contacts.items},v=function(t){return t.contacts.filter},_=function(t){var e=x(t),c=v(t);return e.filter((function(t){return t.name.toLowerCase().includes(c.toLowerCase())}))},S=c(1),g=function(t){var e=Object(i.c)(_),c=Object(i.b)();Object(n.useEffect)((function(){return c(p())}),[c]);return Object(S.jsx)("ul",{className:u.a.list,children:e.map((function(t){var e=t.id,n=t.name,a=t.phone;return Object(S.jsxs)("li",{className:u.a.item,children:[Object(S.jsxs)("p",{className:u.a.text,children:[n," : ",a]}),Object(S.jsx)("button",{className:u.a.btn,onClick:function(){return function(t){return c(m(t))}(e)},children:"Delete"})]},e)}))})},q=c(29),E=c.n(q),w=function(){var t=Object(i.c)(v),e=Object(i.b)();return Object(S.jsx)("div",{className:E.a.wrapper,children:Object(S.jsxs)("label",{children:[Object(S.jsx)("h3",{children:"Find contacts by name"}),Object(S.jsx)("input",{type:"text",value:t,onChange:function(t){return e(h.changeFilter(t.target.value))}})]})})},F=c(17),R=c(62),y=c(8),N=c.n(y),A=function(t){var e=t.onAdd,c=Object(i.b)(),a=Object(i.c)(x),r=Object(R.a)(),o=Object(R.a)(),s=Object(n.useState)(null),u=Object(F.a)(s,2),b=u[0],d=u[1],j=Object(n.useState)(""),l=Object(F.a)(j,2),f=l[0],O=l[1],h=Object(n.useState)(""),m=Object(F.a)(h,2),p=m[0],v=m[1],_=function(t){var e=t.target,c=e.name,n=e.value;switch(c){case"name":O(n);break;case"number":v(n)}},g=function(){O(""),v("")};return Object(S.jsxs)("form",{className:N.a.form,onSubmit:function(t){t.preventDefault(),a.find((function(t){return t.name.toLowerCase()===f.toLowerCase()}))?alert("".concat(f," contact is already on your list")):c(C(f,p)),d(b),g(),console.log("ADD ACTIONS",e)},children:[Object(S.jsx)("label",{htmlFor:r,children:"Name"}),Object(S.jsx)("input",{id:r,type:"text",name:"name",value:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:_}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{htmlFor:o,children:"Number"}),Object(S.jsx)("input",{id:o,type:"tel",name:"number",value:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:_}),Object(S.jsx)("button",{type:"submit",className:N.a.submit,children:"Add contact"})]})};function k(){return Object(S.jsxs)("div",{className:N.a.container,children:[Object(S.jsx)("h1",{className:N.a.title,children:"Phonebook"}),Object(S.jsx)(A,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(w,{}),Object(S.jsx)(g,{})]})}var L,z,D=c(16),Z=c(4),B=c(3),I=h.addContactsRequest,J=h.addContactsSuccess,M=h.addContactsError,T=h.deleteContactsRequest,H=h.deleteContactsSuccess,P=h.deleteContactsError,K=h.fetchContactsRequest,U=h.fetchContactsSuccess,X=h.fetchContactsError,$=h.changeFilter,G=Object(j.c)([],(L={},Object(Z.a)(L,U,(function(t,e){return e.payload})),Object(Z.a)(L,J,(function(t,e){var c=e.payload;return[].concat(Object(D.a)(t),[c])})),Object(Z.a)(L,H,(function(t,e){var c=e.payload;return t.filter((function(t){return t.id!==c}))})),L)),Q=Object(j.c)(!1,(z={},Object(Z.a)(z,I,(function(){return!0})),Object(Z.a)(z,J,(function(){return!1})),Object(Z.a)(z,M,(function(){return!1})),Object(Z.a)(z,T,(function(){return!0})),Object(Z.a)(z,H,(function(){return!1})),Object(Z.a)(z,P,(function(){return!1})),Object(Z.a)(z,K,(function(){return!0})),Object(Z.a)(z,U,(function(){return!1})),Object(Z.a)(z,X,(function(){return!1})),z)),V=Object(j.c)("",Object(Z.a)({},$,(function(t,e){return e.payload}))),W=Object(B.b)({items:G,filter:V,loading:Q}),Y=c(7),tt=Object(D.a)(Object(j.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),et=Object(j.a)({reducer:{contacts:W},middleware:tt,devTools:!1});o.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(i.a,{store:et,children:Object(S.jsx)(k,{})})}),document.getElementById("root"))},8:function(t,e,c){t.exports={container:"ContactForm_container__2H6uj",form:"ContactForm_form__3jZHI",submit:"ContactForm_submit__PSdTz"}}},[[60,1,2]]]);
//# sourceMappingURL=main.a3199d3a.chunk.js.map