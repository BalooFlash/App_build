(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[11],{1008:function(e,t){},1081:function(e,t,n){"use strict";var i=n(1023);t.a=new i.d({UserPoolId:"us-east-2_pYsMRwum2",ClientId:"5s8jqussath0biforh3qc3j7pa"})},1920:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var i=n(9),o=n(847),a=n(16),s=n(0),c=n(822),r=n(1026),l=n(775),d=n(803),p=n(809),h=n(27),u=n(1246),x=n.n(u),f=n(1247),g=n.n(f),j=n(1023),m=n(23),b=n(1081),O=n(1),y=Object(i.a)("div")((function(){return{}}));function w(){var e=Object(m.h)(),t=Object(s.useState)(null),n=Object(a.a)(t,2),i=n[0],o=n[1],u=Object(s.useState)(null),f=Object(a.a)(u,2),w=f[0],S=f[1],v=Object(s.useState)(null),P=Object(a.a)(v,2),k=P[0],q=P[1],W=Object(s.useState)(null),z=Object(a.a)(W,2),_=z[0],C=z[1],F=Object(s.useState)(null),R=Object(a.a)(F,2),D=R[0],H=R[1],I=Object(s.useState)(null),L=Object(a.a)(I,2),T=L[0],E=L[1];return Object(s.useEffect)((function(){"/auth/success"===window.location.pathname&&(localStorage.setItem("user_data",JSON.stringify("acces_token:sdfklds209384903mdfhfdsfjds")),e("/"))}),[]),Object(O.jsx)(y,{sx:{paddingLeft:0,paddingRight:0,background:"#f5f5f5"},children:Object(O.jsx)(c.a,{className:"widget-heading",maxWidth:"xl",sx:{position:"relative",paddingLeft:"0 !important",paddingRight:"0 !important"},children:Object(O.jsxs)(r.a,{container:!0,spacing:0,justifyContent:"space-between",alignItems:"flex-start",sx:{paddingLeft:0,paddingRight:0},children:[Object(O.jsxs)(r.a,{item:!0,xs:12,md:5,padding:5,paddingBottom:2,height:"100vh",sx:{msOverflowStyle:"none",scrollbarWidth:"none",overflow:"auto","&::-webkit-scrollbar":{display:"none"}},children:[Object(O.jsx)(l.a,{component:"img",src:"/static/logo_light.png",width:"130px"}),Object(O.jsx)(l.a,{sx:{width:"100%",paddingTop:"40px"},justifyContent:"center",children:Object(O.jsxs)(l.a,{sx:{maxWidth:{xs:280,md:380},margin:"0 auto"},children:[Object(O.jsx)(d.a,{sx:{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:600,fontSize:"24px",lineHeight:"60px",color:"#000000"},children:"Log in"}),Object(O.jsx)(d.a,{sx:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"16px",lineHeight:"24px",letterSpacing:"0.02em",color:"#000000",opacity:"0.5"},children:"Welcome back to Backed Capital"}),Object(O.jsxs)(l.a,{sx:{height:"100%",marginTop:5},children:[Object(O.jsx)(d.a,{sx:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"21px",letterSpacing:"0.02em",color:"#000000",opacity:"0.5",padding:"10px 0px"},children:"Email"}),Object(O.jsxs)(l.a,{display:"flex",flexDirection:"column",children:[Object(O.jsx)("input",{placeholder:"Email",type:"text",placeholde:"Email",className:"auth-input",sx:{width:{xs:300,md:400}},onChange:function(e){return o(e.target.value)}}),k&&Object(O.jsx)("span",{style:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"21px",letterSpacing:"0.02em",padding:5,color:"red"},children:k})]}),Object(O.jsx)(d.a,{sx:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"21px",letterSpacing:"0.02em",color:"#000000",opacity:"0.5",padding:"10px 0px"},children:"Password"}),Object(O.jsxs)(l.a,{display:"flex",flexDirection:"column",children:[Object(O.jsx)("input",{placeholder:"Password",type:"password",placeholde:"Pssword",className:"auth-input",sx:{width:{xs:300,md:400}},onChange:function(e){return S(e.target.value)}}),_&&Object(O.jsx)("span",{style:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"21px",letterSpacing:"0.02em",padding:5,color:"red"},children:_})]}),Object(O.jsx)(l.a,{sx:{display:"flex",marginTop:3},children:Object(O.jsx)(d.a,{sx:{paddingLeft:10,color:"#00000099"},children:Object(O.jsx)("a",{href:"https://equityswap.auth.us-east-2.amazoncognito.com/forgotPassword?client_id=5s8jqussath0biforh3qc3j7pa&response_type=code&scope=email+openid+phone+profile+aws.cognito.signin.user.admin&redirect_uri=https://app.equityswap.io/auth/success",style:{textAlign:"center",textDecoration:"none",fontWeight:"bold",color:"#00000099"},children:"Forgot password"})})}),D&&Object(O.jsx)("span",{style:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"21px",letterSpacing:"0.02em",padding:5,color:"red"},children:D}),T&&Object(O.jsx)("span",{style:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"14px",lineHeight:"21px",letterSpacing:"0.02em",padding:5,color:"green"},children:T}),Object(O.jsx)(p.a,{variant:"contained",onClick:function(){!function(){if(i&&w){H(null),E(null);var t=new j.b({Username:i,Pool:b.a}),n=new j.a({Username:i,Password:w});t.authenticateUser(n,{onSuccess:function(t){console.log("login success",t),E("User Logged in Successfully"),localStorage.setItem("user_data",JSON.stringify(t)),e("/")},onFailure:function(e){H(e.message),console.log("login failure",e)},newPasswordRequired:function(e){H("new password required"),console.log("new password required",e)}})}else q(i?null:"Email is required"),C(w?null:"Password is required")}()},sx:{fontSize:{xs:"10px",md:"12px"},fontFamily:"Poppins",width:{xs:"auto",md:"auto"},fontWeight:400,borderRadius:"0",background:"#000000",boxShadow:"none",padding:{xs:"12px 120px",md:"12px 125px"},marginTop:3,"&:hover":{opacity:"80%"}},children:"Sign in"}),Object(O.jsxs)(l.a,{sx:{marginTop:3,width:"fit-content",display:"flex",flexDirection:"column"},children:[Object(O.jsxs)(p.a,{variant:"contained",onClick:function(){window.location.href="https://equityswap.auth.us-east-2.amazoncognito.com/oauth2/authorize?identity_provider=SignInWithApple&redirect_uri=https://app.equityswap.io/auth/success&response_type=CODE&client_id=5s8jqussath0biforh3qc3j7pa&scope=email openid phone profile aws.cognito.signin.user.admin"},sx:{fontSize:{xs:"10px",md:"12px"},fontFamily:"Poppins",width:{xs:"auto",md:"auto"},fontWeight:400,background:"#fff",boxShadow:"none",padding:"5px 65px",margin:"0px",color:"#000",border:1,borderColor:"#00000059",borderRadius:"5px",borderWidth:1,"&:hover":{opacity:"80%",color:"#fff"}},children:[Object(O.jsx)(h.Icon,{icon:x.a,fontSize:32,style:{marginRight:12}}),"Sign in with Apple"]}),Object(O.jsxs)(p.a,{variant:"contained",onClick:function(){window.location.href="https://equityswap.auth.us-east-2.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=https://app.equityswap.io/auth/success&response_type=CODE&client_id=5s8jqussath0biforh3qc3j7pa&scope=email openid phone profile aws.cognito.signin.user.admin"},sx:{fontSize:{xs:"10px",md:"12px"},fontFamily:"Poppins",width:{xs:"auto",md:"auto"},fontWeight:400,background:"#fff",boxShadow:"none",padding:"5px 70px",marginTop:"8px",color:"#000",border:1,borderColor:"#00000059",borderRadius:"5px",borderWidth:1,"&:hover":{opacity:"80%",color:"#fff"}},children:[Object(O.jsx)(h.Icon,{icon:g.a,style:{marginRight:4},fontSize:28}),"Sign in with Google"]})]})]}),Object(O.jsxs)(d.a,{sx:{marginTop:2,paddingLeft:2,color:"#00000099",fontFamily:"Poppins"},children:["Don\u2019t have an account?  ",Object(O.jsx)("a",{href:"/auth/register",style:{textDecoration:"none",fontWeight:"bold",color:"#00000099"},children:"Sign up"})]})]})})]}),Object(O.jsx)(r.a,{item:!0,xs:12,md:7,className:"bg-auth",sx:{height:"100vh",display:{xs:"none",md:"block"},paddingLeft:0,paddingRight:0}})]})})})}var S=Object(i.a)(o.a)({height:"100%",backgroundPosition:"right 30%",backgroundRepeat:"no-repeat no-repeat"}),v=Object(i.a)("div")((function(){return{overflow:"hidden",position:"relative"}}));function P(){return Object(O.jsx)(S,{title:"App | Backed Capital",id:"move_top",children:Object(O.jsx)(v,{children:Object(O.jsx)(w,{})})})}},847:function(e,t,n){"use strict";var i=n(3),o=n(21),a=n(10),s=n.n(a),c=n(307),r=n(0),l=n(775),d=n(1),p=["children","title"],h=Object(r.forwardRef)((function(e,t){var n=e.children,a=e.title,s=void 0===a?"":a,r=Object(o.a)(e,p);return Object(d.jsxs)(l.a,Object(i.a)(Object(i.a)({ref:t},r),{},{children:[Object(d.jsx)(c.a,{children:Object(d.jsx)("title",{children:s})}),n]}))}));h.propTypes={children:s.a.node.isRequired,title:s.a.string},t.a=h}}]);
//# sourceMappingURL=11.820da526.chunk.js.map