import{_ as N,u as w,k as h,j as k,r as m,c as P,b as e,a as d,B as C,n as t,g as r,v as u,p as f,m as V,f as _}from"./index-BuR_787K.js";import{B as F}from"./Button-NXaJQ94L.js";import{_ as c}from"./Message-D1TBuRdd.js";const y={class:"container"},B={class:"mt-3 mb-3"},G={class:"w-100 d-flex justify-content-center"},R={class:"form-group m-3 d-flex align-items-center"},S={class:"form-group m-3 d-flex align-items-center"},D={class:"form-group m-3 d-flex align-items-center"},E={class:"m-3 d-flex form-group"},I={class:"form-check"},M={class:"form-check"},U={__name:"createProfile",setup(T){const p=h(),v=V(),b=w(),x=p.params.userId,s=k({FullName:"",Gender:!0,Dob:"",PhoneNumber:""}),n=m(""),a=m(!1),g=async()=>{const i=await b.createProfile(x,s).catch(l=>{console.log("Create profile ERROR: "+l),n.value="Create profile failed. Invalid fields",a.value=!1});n.value=i.data.message,a.value=i.data.isSucceeded,a&&(await new Promise(l=>setTimeout(l,3e3)),v.push({name:"home"}))};return(i,l)=>(_(),P("div",y,[e("div",B,[d(c,{context:"Create password successfully.",isError:!0})]),l[12]||(l[12]=e("div",{class:"w-100"},[e("ul",null,[e("li",null,[e("div",null,"1"),e("div",null,"Confirm email")]),e("li",null,[e("div",null,"2"),e("div",null,"Create password")]),e("li",null,[e("div",null,"3"),e("div",null,"Create profile")])])],-1)),e("div",G,[e("form",{onSubmit:C(g,["prevent"]),class:"w-50 form-container"},[l[11]||(l[11]=e("div",{class:"w-100 mb-5 text-center"},[e("h2",null,"Create Profile")],-1)),d(c,{context:n.value,isError:a.value},null,8,["context","isError"]),e("div",R,[l[5]||(l[5]=e("label",{for:"fullName"},[r("Full Name"),e("span",{class:"text-danger"},"*")],-1)),t(e("input",{"onUpdate:modelValue":l[0]||(l[0]=o=>s.FullName=o),id:"fullName",class:"form-control",placeholder:"FullName"},null,512),[[u,s.FullName]])]),e("div",S,[l[6]||(l[6]=e("label",{for:"dob"},[r("Date of birth"),e("span",{class:"text-danger"},"*")],-1)),t(e("input",{type:"date","onUpdate:modelValue":l[1]||(l[1]=o=>s.Dob=o),id:"dob",class:"form-control"},null,512),[[u,s.Dob]])]),e("div",D,[l[7]||(l[7]=e("label",{for:"phoneNumber"},[r("PhoneNumber"),e("span",{class:"text-danger"},"*")],-1)),t(e("input",{"onUpdate:modelValue":l[2]||(l[2]=o=>s.PhoneNumber=o),id:"phoneNumber",class:"form-control",placeholder:"Phone number"},null,512),[[u,s.PhoneNumber]])]),e("div",E,[l[10]||(l[10]=e("label",null,[r("Gender"),e("span",{class:"text-danger"},"*")],-1)),e("div",I,[t(e("input",{"onUpdate:modelValue":l[3]||(l[3]=o=>s.Gender=o),class:"form-check-input",type:"radio",name:"gender",id:"male",value:"true",checked:""},null,512),[[f,s.Gender]]),l[8]||(l[8]=e("label",{class:"form-check-label",for:"male"}," Male ",-1))]),e("div",M,[t(e("input",{"onUpdate:modelValue":l[4]||(l[4]=o=>s.Gender=o),class:"form-check-input",type:"radio",name:"gender",value:"false",id:"female"},null,512),[[f,s.Gender]]),l[9]||(l[9]=e("label",{class:"form-check-label",for:"female"}," Female ",-1))])]),d(F,{class:"mt-5",title:"Create"})],32)])]))}},$=N(U,[["__scopeId","data-v-6c8431c4"]]);export{$ as default};
