(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{11:function(e,t,n){e.exports={Overlay:"Modal_Overlay__3Lsc3",Modal:"Modal_Modal__3180K",ModalCloseBtn:"Modal_ModalCloseBtn__e-08E"}},23:function(e,t,n){e.exports={App:"App_App__eNl18","App-logo":"App_App-logo__2NVmP","App-logo-spin":"App_App-logo-spin__1VqlD","App-header":"App_App-header__1c5SA","App-link":"App_App-link__2Djrh"}},24:function(e,t,n){e.exports={Btn:"Button_Btn__2Ke4o"}},29:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(9),c=n.n(r),i=(n(29),n(14)),l=n(13),s=n(4),u=n(5),p=n(7),d=n(6),h=n(23),b=n.n(h),j=n(0),m=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:e.props.query},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e.handleClearInput=function(){e.setState({query:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",name:"query",value:this.state.query,autoComplete:"off",onClick:this.handleClearInput,onInput:this.handleChange,autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.PureComponent),g=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).ModalOpenClick=function(e){console.log(e.target),console.log(e.currentTarget)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(j.jsx)("ul",{id:"imageGallery",children:e})}}]),n}(a.PureComponent),O=n(8),f=n.n(O),y=n(11),v=n.n(y),x=document.querySelector("#modal-root"),w=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){window.addEventListener("keydown",e.handleKeyDown)},e.componentWillUnmount=function(){window.removeEventListener("keydown",e.handleKeyDown)},e.handleKeyDown=function(t){("Escape"===t.code||t.target===t.currentTarget)&&e.props.onOpenModal()},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.modalImg,n=e.onOpenModal;return Object(r.createPortal)(Object(j.jsx)("div",{className:v.a.Overlay,children:Object(j.jsxs)("div",{className:v.a.Modal,children:[Object(j.jsx)("img",{src:t,alt:"No photo"}),Object(j.jsx)("button",{type:"button",className:v.a.ModalCloseBtn,onClick:n,children:"x"})]})}),x)}}]),n}(a.PureComponent),M=n(10),_=n.n(M),S=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={showModal:!1},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.onOpenModal,a=this.state,o=a.showModal,r=a.src,c=a.user;return Object(j.jsxs)(j.Fragment,{children:[t.length<0&&Object(j.jsx)(_.a,{type:"bubble-top",bgColor:"#FFFFFF",title:"bubble-top",size:100}),o?Object(j.jsx)(w,{children:Object(j.jsx)("img",{src:r,alt:c})}):t.map((function(e){var t=e.id,a=e.previewURL,o=e.largeImageURL,r=e.user;return Object(j.jsx)("li",{onClick:n,children:Object(j.jsx)("img",{src:a,alt:r,width:"140",height:"100","data-source":o,"data-title":r})},t)}))]})}}]),n}(a.PureComponent),C=n(24),A=n.n(C),k=function(){return Object(j.jsx)("button",{className:A.a.Btn,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\u2191"})},q=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",currentPage:1,pageSize:10,images:[],showModal:!1,isLoading:!1,modalImg:"",alt:""},e.onChange=function(t){e.setState({query:t,currentPage:1,images:[]})},e.fetch=function(){var t=e.state,n=t.currentPage,a=void 0===n?1:n,o=t.pageSize,r=void 0===o?10:o,c=t.query,i=void 0===c?"cat":c,s="https://pixabay.com/api/?q=".concat(i,"&page=").concat(a,"&key=").concat("21072245-3acfda09a1d5bc65070e6b336","&image_type=photo&orientation=horizontal&per_page=").concat(r);e.setState({isLoading:!0}),f.a.get(s).then((function(e){return e.data.hits})).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).finally((function(){e.setState({isLoading:!1}),e.handleToDown()}))},e.handleToDown=function(){window.scrollTo({top:document.querySelector("#root").scrollHeight,behavior:"smooth"})},e.handleClickMoreBtn=function(){e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{currentPage:e.currentPage+1})}))},e.onOpenModal=function(t){e.setState((function(e){return{modalImg:t.target.dataset.source,alt:t.target.dataset.title,showModal:!e.showModal}}))},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetch()}},{key:"render",value:function(){var e=this.state,t=e.showModal,n=e.filter,a=e.images,o=e.isLoading,r=e.query,c=e.modalImg;return Object(j.jsxs)("div",{className:b.a.App,children:[Object(j.jsx)(m,{onSubmit:this.onChange,query:r}),a&&o&&Object(j.jsx)(_.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}),Object(j.jsx)(g,{onOpenModal:this.onOpenModal,children:Object(j.jsx)(S,{filter:n,images:a,onOpenModal:this.onOpenModal})}),a.length>0&&Object(j.jsx)("button",{onClick:this.fetch,children:"Load more..."}),t&&Object(j.jsx)(w,{onOpenModal:this.onOpenModal,modalImg:c}),Object(j.jsx)(k,{})]})}}]),n}(a.Component);c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.9178f85a.chunk.js.map