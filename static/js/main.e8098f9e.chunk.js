(this["webpackJsonpecommerce-web"]=this["webpackJsonpecommerce-web"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),l=a.n(c),o=(a(63),a(3)),i=(a(64),a(65),a(51),a(12)),s=Object(n.createContext)(),m=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(s.Provider,{value:Object(n.useReducer)(t,a)},c)},u=function(){return Object(n.useContext)(s)},d=a(18),p=a.n(d),E=function(){var e=u(),t=Object(o.a)(e,2);t[0],t[1]};a(82),a(83);function h(e){var t=e.id,a=e.title,n=e.rating,c=e.imgs,l=e.price,i=u(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,l)),r.a.createElement("div",{className:"product__rating"},Array(n).fill().map((function(e,t){return r.a.createElement("p",null,"\u2b50")}))),r.a.createElement("img",{src:c}),r.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:c,price:l,rating:n}})}},"Add To Basket")))}var g=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home_container"},r.a.createElement("img",{className:"home__image",src:"https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"})),r.a.createElement("div",{className:"home__row"},r.a.createElement(h,{id:1,title:"Harry Poter and Chamber of Secrets",rating:5,imgs:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",price:5}),r.a.createElement(h,{id:2,title:"Harry Poter and Goblet of Fire",rating:4,imgs:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",price:4.5})),r.a.createElement("div",{className:"home__row"},r.a.createElement(h,{id:3,title:"The Hitchhikers guide to galaxy",rating:3,imgs:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",price:6.7}),r.a.createElement(h,{id:1,title:"Harry Poter and Chamber of Secrets",rating:5,imgs:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",price:5}),r.a.createElement(h,{id:3,title:"Harry Poter and Chamber of Secrets",rating:5,imgs:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",price:5})),r.a.createElement("div",{className:"home__row"},r.a.createElement(h,{id:3,title:"Harry Poter and Chamber of Secrets",rating:5,imgs:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1499277281l/5.jpg",price:5})))},f=(a(84),a(85),a(31)),b=a.n(f),v=a(4);function _(){var e=u(),t=Object(o.a)(e,2),a=t[0],n=(t[1],0);a.basket.map((function(e){n+=e.price}));var c=Object(v.f)();return r.a.createElement("div",{className:"subtotal"},r.a.createElement(b.a,{renderText:function(e){var t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",null===(t=a.basket)||void 0===t?void 0:t.length," items) : ",r.a.createElement("strong",null,n)),r.a.createElement("small",{className:"suntotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This Order Contains a Gift"))},decimalScale:2,value:n,displayType:"text",thousandSeperator:!0,perfix:"$"}),r.a.createElement("button",{onClick:function(e){return c.push("./payment")}},"Proceed To Checkout"))}a(87);function O(e){var t=e.id,a=e.imgs,n=e.title,c=e.price,l=e.rating,i=e.hideButton,s=u(),m=Object(o.a)(s,2),d=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},console.log(t,a,n,c,l),r.a.createElement("img",{className:"checkoutProduct__image",src:a}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,t){return r.a.createElement("p",null,"\u2b50")}))),!i&&r.a.createElement("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})}}," Remove")))}function k(){var e=u(),t=Object(o.a)(e,2),a=t[0],n=a.basket,c=a.user;t[1];return r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:".checkout__ad",src:""}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",c?c.email:"Guest"," "),r.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),n.map((function(e,t){return r.a.createElement(O,{key:t,id:e.id,title:e.title,rating:e.rating,imgs:e.image,price:e.price})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(_,null)))}var y=a(26),j=a.n(y),S=a(36),N=(a(89),p.a.initializeApp({apiKey:"AIzaSyDMBxmB570zoKQlikkXz2uXeoD_MyXvcPM",authDomain:"e-commerce-39de8.firebaseapp.com",databaseURL:"https://e-commerce-39de8.firebaseio.com",projectId:"e-commerce-39de8",storageBucket:"e-commerce-39de8.appspot.com",messagingSenderId:"569559037126",appId:"1:569559037126:web:e52d10aa2c1f29100d13c7",measurementId:"G-VCVBC7YEGX"}).firestore()),w=p.a.auth(),C=a(23),P=a(53),T=a.n(P).a.create({baseUrl:"http://localhost:5001/e-commerce-39de8/us-central1/api"});var A=function(){var e=Object(v.f)(),t=Object(C.useStripe)(),a=Object(C.useElements)(),c=u(),l=Object(o.a)(c,2),i=l[0],s=i.basket,m=i.user,d=l[1],p=Object(n.useState)(null),E=Object(o.a)(p,2),h=E[0],g=E[1],f=Object(n.useState)(!1),_=Object(o.a)(f,2),k=_[0],y=_[1],w=Object(n.useState)(!1),P=Object(o.a)(w,2),A=P[0],B=P[1],x=Object(n.useState)(!1),D=Object(o.a)(x,2),M=D[0],R=D[1],I=Object(n.useState)(!0),Y=Object(o.a)(I,2),K=Y[0],H=Y[1],z=0;s.map((function(e){z+=e.price})),Object(n.useEffect)((function(){(function(){var e=Object(S.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({method:"post",url:"http://localhost:5001/e-commerce-39de8/us-central1/api/payments/create?total=".concat(100*z)});case 2:t=e.sent,H(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var F=function(){var n=Object(S.a)(j.a.mark((function n(r){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(K),r.preventDefault(),B(!0),n.prev=3,n.next=6,t.confirmCardPayment(K,{payment_method:{card:a.getElement(C.CardElement)}}).then((function(t){var a=t.paymentIntent;N.collection("users").doc(null===m||void 0===m?void 0:m.uid).collection("orders").doc(a.id).set({basket:s,amount:a.amount,created:a.created}),R(!0),g(null),B(!1),d({type:"EMPTY_BASKET"}),e.replace("/orders")}));case 6:n.sent,n.next=18;break;case 9:n.prev=9,n.t0=n.catch(3),console.log(n.t0),N.collection("users").doc(null===m||void 0===m?void 0:m.uid).collection("orders").doc(Date()).set({basket:s,amount:z,created:Date()}),R(!0),g(null),B(!1),d({type:"EMPTY_BASKET"}),e.replace("/orders");case 18:case"end":return n.stop()}}),n,null,[[3,9]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Adress")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,m?m.email:"Guest"),r.a.createElement("p",null,"43,Privet Drive"),r.a.createElement("p",null,"The Wizarding World"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review Items And Delivery")),r.a.createElement("div",{className:"payment__items"},s.map((function(e,t){return r.a.createElement(O,{key:t,id:e.id,title:e.title,imgs:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Details")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:F},r.a.createElement(C.CardElement,{onChange:function(e){y(e.empty),g(e.error?e.message:" ")}}),r.a.createElement("div",{className:"payment__priceContainer"},r.a.createElement(b.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Order Total: ",e))},decimalScale:2,value:z,displayType:"text",thousandSeperator:!0,perfix:"$"}),r.a.createElement("button",{disabled:A||k||M},r.a.createElement("span",null,A?r.a.createElement("p",null,"Processing"):"Buy Now"))),h&&r.a.createElement("div",null,h))))))};a(106);var B=function(){var e=Object(v.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),u=m[0],p=m[1];return r.a.createElement("div",{className:"login"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://www.humanrightslogo.net/sites/default/files/HRLogoCMYKsmallRGB.png"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign-In"),r.a.createElement("form",null,r.a.createElement("h5",null,"Email : "),r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)},type:"text"}),r.a.createElement("h5",null,"Password : "),r.a.createElement("input",{value:u,onChange:function(e){return p(e.target.value)},type:"password"}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),Object(d.auth)().signInWithEmailAndPassword(c,u).then((function(t){e.push("/")})).catch((function(e){return console.log(e)}))},className:"login__signinButton"},"Sign In")),r.a.createElement("p",null,"By Signing in you agree that you're Awesome."),r.a.createElement("button",{onClick:function(t){t.preventDefault(),Object(d.auth)().createUserWithEmailAndPassword(c,u).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert("error")}))},className:"login__registerButton"},"Create Your Account")))},x=a(54),D=(a(107),a(108),a(55)),M=a.n(D);var R=function(e){var t,a=e.order;return r.a.createElement("div",{className:"orderComp"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,M.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")," "),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return r.a.createElement(O,{id:e.id,title:e.title,rating:e.rating,imgs:e.image,price:e.price})})))};var I=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=u(),i=Object(o.a)(l,2),s=i[0],m=(s.basket,s.user);return i[1],Object(n.useEffect)((function(){m?N.collection("users").doc(null===m||void 0===m?void 0:m.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):c([])}),[m]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders__order"},null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(R,{order:e})}))))},Y=Object(x.a)("pk_test_51HPvTlAjOMRbAmPkJYurzpFfln91kYehReicDEkCDvKBmbANDmaZHDPK4Nz64F8MPCV9cxf9zXoFhOPGJ41IGqDu00yAw7oziK");var K=function(){var e=u(),t=Object(o.a)(e,2),a=(t[0],t[1]);return Object(n.useEffect)((function(){w.onAuthStateChanged((function(e){console.log("The USer is   ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/login"},r.a.createElement(B,null)),r.a.createElement(v.a,{path:"/payment"},r.a.createElement(E,null),r.a.createElement(C.Elements,{stripe:Y},r.a.createElement(A,null))),r.a.createElement(v.a,{path:"/checkout"},r.a.createElement(E,null),r.a.createElement(k,null)),r.a.createElement(v.a,{path:"/orders"},r.a.createElement(E,null),r.a.createElement(I,null)),r.a.createElement(v.a,{path:"/"},r.a.createElement(E,null),r.a.createElement(g,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(22),z=a(17),F=function(e,t){switch(console.log(e),t.type){case"ADD_TO_BASKET":return Object(z.a)(Object(z.a)({},e),{},{basket:[].concat(Object(H.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(H.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant Remove SHIT!"),Object(z.a)(Object(z.a)({},e),{},{basket:n});case"SET_USER":return Object(z.a)(Object(z.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(z.a)(Object(z.a)({},e),{},{basket:[]});default:return e}};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,{reducer:F,initialState:{basket:[],user:null}},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a(111)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.e8098f9e.chunk.js.map