"use strict";(self.webpackChunkyespays_task=self.webpackChunkyespays_task||[]).push([[415],{5415:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var r=a(5671),n=a(3144),o=a(7326),i=a(136),s=a(7277),c=a(2791),u=a(184),d=c.lazy((function(){return Promise.all([a.e(428),a.e(895),a.e(452)]).then(a.bind(a,1452))})),l=c.lazy((function(){return a.e(720).then(a.bind(a,3720))})),h=c.lazy((function(){return a.e(486).then(a.bind(a,9365))})),v=c.lazy((function(){return a.e(93).then(a.bind(a,9141))})),f=function(t){(0,i.Z)(a,t);var e=(0,s.Z)(a);function a(){var t;return(0,r.Z)(this,a),(t=e.call(this)).state={cart:[]},t.addToCart=t.addToCart.bind((0,o.Z)(t)),t.removeFromCart=t.removeFromCart.bind((0,o.Z)(t)),t}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("cart"))||[];this.setState({cart:t})}},{key:"addToCart",value:function(t){var e,a=(null===(e=this.state)||void 0===e?void 0:e.cart)||[];a.push(t),this.setState({cart:a}),localStorage.setItem("cart",JSON.stringify(a))}},{key:"removeFromCart",value:function(t){var e,a=(null===(e=this.state)||void 0===e?void 0:e.cart)||[];a.splice(t,1),this.setState({cart:a}),localStorage.setItem("cart",JSON.stringify(a))}},{key:"render",value:function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(d,{cart:this.state.cart,removeFromCart:this.removeFromCart}),(0,u.jsx)(l,{}),(0,u.jsx)(h,{addToCart:this.addToCart}),(0,u.jsx)(v,{addToCart:this.addToCart})]})}}]),a}(c.Component)}}]);
//# sourceMappingURL=415.6f9f9adf.chunk.js.map