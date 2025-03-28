import{A as h}from"./ApiDoctorProfile-r3tg1Tfp.js";import{r as z,j as v,k as I,o as P,l as V,c as i,b as e,a as n,F as b,e as _,d as y,m as R,f as u,g as m,t as p,w as r}from"./index-ruO88dao.js";const A={class:"crud-layout-table"},w={class:"table table-responsive table-bordered"},F={style:{width:"90px",height:"120px","object-fit":"fill"},class:"list-image-container"},k=["src"],L={class:"d-flex flex-column information-container"},B={class:"specialization-item-capsule"},T={class:"text-end"},C={__name:"index",setup(U){const s=I(),D=R(),N=z([]),t=v({pageNumber:s.params.pageNumber||1,pageSize:s.params.pageSize||10,searchValue:s.params.searchValue||"",specialtyID:s.params.specialtyID||"",totalRecords:0,statusFilter:!1}),c=async()=>{try{var o=await h.GetAllByLimit(t);o.data.isSucceeded&&(N.value=o.data.data,t.pageNumber=o.data.pageNumber,t.pageSize=o.data.pageSize,t.totalRecords=o.data.totalRecords,t.statusFilter&&(t.pageNumber>o.data.totalPages&&t.totalRecords>0?(t.pageNumber=1,D.push({name:"Admin_DoctorProfile_View",query:{pageNumber:1,pageSize:t.pageSize,searchValue:t.searchValue,specialtyID:t.specialtyID}})):D.push({name:"Admin_DoctorProfile_View",query:{pageNumber:t.pageNumber,pageSize:t.pageSize,searchValue:t.searchValue,specialtyID:t.specialtyID}}),t.statusFilter=!t.statusFilter))}catch(a){console.log("ERROR: GETALLBYLIMIT doctorProfile."+a)}};P(()=>{c()}),V(()=>{Object.keys(s.query).length===0&&(t.pageNumber=s.params.pageNumber||1,t.pageSize=s.params.pageSize||10,t.searchValue=s.params.searchValue||"",t.specialtyID=s.params.specialtyID||"",t.statusFilter=!0,c())});const x=(o,a)=>{t.pageNumber=o,t.pageSize=a,t.statusFilter=!0,c()};return(o,a)=>{const g=y("RouterLink"),f=y("a-tooltip"),S=y("a-pagination");return u(),i(b,null,[a[12]||(a[12]=e("div",{class:"crud-layout-header"},[e("h2",{class:"crud-layout-header-title"},"Manage DoctorProfile")],-1)),e("div",A,[e("table",w,[a[11]||(a[11]=e("thead",null,[e("tr",null,[e("th",null,"Image"),e("th",null,"Information"),e("th",null,"Specialties"),e("th",null,"Actions")])],-1)),e("tbody",null,[(u(!0),i(b,null,_(N.value,l=>(u(),i("tr",null,[e("td",null,[e("div",F,[e("img",{src:l.imageString,alt:"avatar"},null,8,k)])]),e("td",null,[e("div",L,[e("div",null,[a[1]||(a[1]=e("span",null,"FullName:",-1)),m(p(l.fullName),1)]),e("div",null,[a[2]||(a[2]=e("span",null,"Email:",-1)),m(p(l.email),1)]),e("div",null,[a[3]||(a[3]=e("span",null,"Phone:",-1)),m(p(l.phoneNumber),1)]),e("div",null,[a[4]||(a[4]=e("span",null,"Address:",-1)),m(p(l.address),1)])])]),e("td",null,[(u(!0),i(b,null,_(l.specialties,d=>(u(),i("label",B,p(d.title),1))),256))]),e("td",T,[n(f,{placement:"top"},{title:r(()=>a[5]||(a[5]=[e("span",null,"Timetable",-1)])),default:r(()=>[n(g,{class:"fs-3 text-primary",to:{name:"Admin_DoctorProfile_Timetable",params:{id:l.doctorProfileID}}},{default:r(()=>a[6]||(a[6]=[e("i",{class:"bx bx-calendar"},null,-1)])),_:2},1032,["to"])]),_:2},1024),n(f,{placement:"top"},{title:r(()=>a[7]||(a[7]=[e("span",null,"Update",-1)])),default:r(()=>[n(g,{class:"fs-3 text-success",to:{name:"Admin_DoctorProfile_Update",params:{id:l.doctorProfileID}}},{default:r(()=>a[8]||(a[8]=[e("i",{class:"bx bxs-edit"},null,-1)])),_:2},1032,["to"])]),_:2},1024),n(f,{placement:"top"},{title:r(()=>a[9]||(a[9]=[e("span",null,"Delete",-1)])),default:r(()=>[n(g,{class:"fs-3 text-danger",to:{name:"Admin_DoctorProfile_Update",params:{id:l.doctorProfileID}}},{default:r(()=>a[10]||(a[10]=[e("i",{class:"bx bxs-trash"},null,-1)])),_:2},1032,["to"])]),_:2},1024)])]))),256))])]),n(S,{onChange:x,current:t.pageNumber,"onUpdate:current":a[0]||(a[0]=l=>t.pageNumber=l),total:t.totalRecords,pageSize:t.pageSize,"show-total":(l,d)=>`${d[0]}-${d[1]} of ${l} items`,"show-size-changer":"","show-quick-jumper":"",class:"crud-layout-pagination"},null,8,["current","total","pageSize","show-total"])])],64)}}};export{C as default};
