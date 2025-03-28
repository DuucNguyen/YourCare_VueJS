import{A as h}from"./ApiSpecialty-Diae0_cJ.js";import{r as z,j as v,k as V,o as k,l as w,c as d,b as a,a as r,w as i,d as g,F as S,e as C,m as q,f as m,g as A,t as R,M as D,E as F,s as T}from"./index-BuR_787K.js";const B={class:"crud-layout-header"},L={class:"crud-layout-table"},M={class:"table table-responsive table-bordered table-hover"},U={class:"img-container"},$=["src"],j=["onClick"],G={__name:"index",setup(E){const o=V(),y=q(),b=z([]),e=v({pageNumber:o.query.pageNumber||1,pageSize:o.query.pageSize||10,searchValue:o.query.searchValue||"",totalRecords:0,statusFilter:!1}),c=async()=>{try{var s=await h.GetAllByLimit(e);s.data.isSucceeded&&(b.value=s.data.data,e.totalRecords=s.data.totalRecords,e.pageNumber=s.data.pageNumber,e.pageSize=s.data.pageSize,e.statusFilter&&(s.data.totalPages<e.pageNumber&&e.totalRecords>0?y.push({name:"Admin_Specialty_View",query:{pageNumber:1,pageSize:e.pageSize,searchValue:e.searchValue}}):y.push({name:"Admin_Specialty_View",query:{pageNumber:e.pageNumber,pageSize:e.pageSize,searchValue:e.searchValue}}),e.statusFilter=!e.statusFilter))}catch(t){console.log("GetAllByLimit: "+t)}},_=(s,t)=>{e.pageNumber=s,e.pageSize=t,e.statusFilter=!0,c()};k(()=>{c()}),w(()=>{Object.keys(o.query).length===0&&(e.pageNumber=o.query.pageNumber||1,e.pageSize=o.query.pageSize||10,e.searchValue=o.query.searchValue||"",e.statusFilter=!0,c())});const f=s=>{D.confirm({title:"Are you sure delete this specialty?",icon:r(F),content:"This action can not be undone.",okText:"Yes",okType:"danger",cancelText:"No",async onOk(){var t=await h.Delete(s),n=t.data.isSucceeded?"success":"danger",u=t.data.message;N(n,"Delete status",u)},onCancel(){console.log("Cancel deletion")}})},N=(s,t,n)=>{T[s]({message:t,description:n})};return(s,t)=>{const n=g("RouterLink"),u=g("a-tooltip"),x=g("a-pagination");return m(),d(S,null,[a("div",B,[t[2]||(t[2]=a("h2",{class:"crud-layout-header-title"},"Manage Specialty",-1)),r(n,{class:"crud-layout-header-button",to:{name:"Admin_Specialty_Create"}},{default:i(()=>t[1]||(t[1]=[A("Create "),a("i",{class:"ms-1 bx bx-plus-circle"},null,-1)])),_:1})]),a("div",L,[a("table",M,[t[7]||(t[7]=a("thead",null,[a("tr",null,[a("th",null,"Image"),a("th",null,"Title"),a("th",null,"Actions")])],-1)),a("tbody",null,[(m(!0),d(S,null,C(b.value,l=>(m(),d("tr",null,[a("td",null,[a("div",U,[a("img",{src:l.imageString,alt:"image"},null,8,$)])]),a("td",null,R(l.title),1),a("td",null,[r(u,{placement:"top"},{title:i(()=>t[3]||(t[3]=[a("span",null,"Update",-1)])),default:i(()=>[r(n,{class:"fs-3 text-primary",to:{name:"Admin_Specialty_Update",params:{id:l.specialtyID}}},{default:i(()=>t[4]||(t[4]=[a("i",{class:"bx bxs-edit"},null,-1)])),_:2},1032,["to"])]),_:2},1024),r(u,{placement:"top"},{title:i(()=>t[5]||(t[5]=[a("span",null,"Delete",-1)])),default:i(()=>[a("a",{class:"fs-3 text-danger",onClick:p=>f(l.specialtyID)},t[6]||(t[6]=[a("i",{class:"bx bxs-trash"},null,-1)]),8,j)]),_:2},1024)])]))),256))])]),r(x,{onChange:_,current:e.pageNumber,"onUpdate:current":t[0]||(t[0]=l=>e.pageNumber=l),total:e.totalRecords,pageSize:e.pageSize,"show-total":(l,p)=>`${p[0]}-${p[1]} of ${l} items`,"show-size-changer":"","show-quick-jumper":"",class:"crud-layout-pagination"},null,8,["current","total","pageSize","show-total"])])],64)}}};export{G as default};
