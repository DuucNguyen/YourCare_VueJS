import{r as b,j as C,o as z,k as H,c as U,b as a,a as r,n as c,g as m,v,p as P,w as p,d as u,m as J,f as x,q as K,M as Q,E as W,s as X}from"./index-BuR_787K.js";import{A as N}from"./ApiDoctorProfile-BreSfu88.js";import{A as Z}from"./ApiSpecialty-Diae0_cJ.js";import{P as ee}from"./PlusOutlined-PYJV3-eW.js";const te={class:"d-flex justify-content-between"},ae={class:"col-md-5 basic-information-container"},oe={class:"mb-3 form-items"},le={class:"mb-3 form-items"},se={class:"mb-3 form-items"},re={class:"mb-3 form-items"},ne={class:"mb-3 form-items d-flex"},ie={key:0,class:"d-flex"},de={key:1,class:"d-flex"},pe={class:"mb-3 form-items"},ue={class:"d-flex justify-content-between"},ce=["src"],ye={__name:"update",setup(me){const T=H();J();const I=b(),Y={span:24},A={span:24},o=C({doctorProfileID:"",applicationUserID:"",applicationUserImage:[],doctorTitle:"",doctorDescription:"",startCareerYear:"",specialties:[]}),s=C({id:"",fullName:"",email:"",dob:"",address:"",phoneNumber:"",gender:!0,imageString:""}),S={applicationImage:[{required:"true",message:"Please upload at least one image.",type:"array"}],doctorTitle:[{required:"true",message:"Please input doctor title."}],doctorDescription:[{required:"true",message:"Please input doctor description."}],startCareerYear:[{required:"true",message:"Please input start career year"},{type:"number",message:"Input must be a year"},{pattern:k(),message:"Input must be from 1980 - now"}],specialties:[{required:"true",type:"array",message:"Please choose at least one specialty."}],applicationUserImage:[{required:!0,message:"Please upload at least one image."}]};function k(){const t=new Date().getFullYear();return new RegExp(`^(198[0-9]|199[0-9]|20[0-${Math.floor(t/100)%10}][0-${t%10}])$`)}const D=b([]),V=async()=>{var t=await N.GetByID(o.doctorProfileID);t.data.isSucceeded&&(o.doctorProfileID=t.data.data.doctorProfileID,o.applicationUserID=t.data.data.applicationUserID,o.doctorTitle=t.data.data.doctorTitle,o.doctorDescription=t.data.data.doctorDescription,o.startCareerYear=t.data.data.startCareerYear,o.specialties=t.data.data.specialties,s.id=t.data.data.userID,s.fullName=t.data.data.fullName,s.email=t.data.data.email,s.dob=t.data.data.dob,s.address=t.data.data.address,s.phoneNumber=t.data.data.phoneNumber,s.gender=t.data.data.gender,s.imageString=t.data.data.imageString)},F=async()=>{var t=await Z.GetAllSpeID();D.value=t.data.data};z(async()=>{o.doctorProfileID=T.params.id,o.doctorProfileID&&await V(),await F(),o.specialties=o.specialties.map(t=>({label:t.title,value:t.specialtyID})),o.applicationUserImage.push({uid:"-1",name:"applicationUserImage",status:"done",thumbUrl:s.imageString})});const R=()=>{Q.confirm({title:"Are you sure update this doctor profile?",icon:r(W),content:"Are you sure to perform this action.",okText:"Yes",cancelText:"No",async onOk(){try{var t=new FormData;t.append("userID",s.id),t.append("userImage",M(o.applicationUserImage[0].thumbUrl,"applicationUserImage")),t.append("doctorProfileID",o.doctorProfileID),t.append("doctorTitle",o.doctorTitle),t.append("doctorDescription",o.doctorDescription),t.append("startCareerYear",o.startCareerYear),o.specialties.forEach((n,f)=>{t.append(`specialtyIDs[${f}]`,n)});var e=await N.Update(t),i=e.data.isSucceeded?"success":"error",d=e.data.message;B(i,"Create status",d)}catch(n){console.log(n)}},onCancel(){console.log("Cancel update")}})},B=(t,e,i)=>{X[t]({message:e,description:i})},h=async()=>{I.value.validate().then(()=>{R()}).catch(t=>{console.log("error:"+t)})},y=b(!1),_=b(""),w=b("");function q(t){return new Promise((e,i)=>{const d=new FileReader;d.readAsDataURL(t),d.onload=()=>e(d.result),d.onerror=n=>i(n)})}function M(t,e="file.png"){const i=atob(t.split(",")[1]),d=t.match(/data:(.*?);base64/)[1],n=new ArrayBuffer(i.length),f=new Uint8Array(n);for(let g=0;g<i.length;g++)f[g]=i.charCodeAt(g);return new File([f],e,{type:d})}const E=async t=>{!t.thumbUrl&&!t.preview&&(t.preview=await q(t.originFileObj)),_.value=t.thumbUrl||t.preview,y.value=!0,w.value=t.name||t.thumbUrl.substring(t.thumbUrl.lastIndexOf("/")+1)},O=()=>{y.value=!1,w.value=""};return(t,e)=>{const i=u("a-upload"),d=u("a-modal"),n=u("a-form-item"),f=u("a-select"),g=u("a-input"),j=u("a-input-number"),$=u("a-textarea"),G=u("a-button"),L=u("a-form");return x(),U("div",te,[a("div",ae,[e[20]||(e[20]=a("h4",{class:"text-center",style:{color:"#1975dc"}},"Basic information",-1)),a("div",oe,[e[12]||(e[12]=a("label",{class:"form-label"},[m("Full Name"),a("span",{class:"text-danger"},"*")],-1)),c(a("input",{readonly:"","onUpdate:modelValue":e[0]||(e[0]=l=>s.fullName=l),class:"form-control",type:"text"},null,512),[[v,s.fullName]])]),a("div",le,[e[13]||(e[13]=a("label",{class:"form-label"},[m("Email"),a("span",{class:"text-danger"},"*")],-1)),c(a("input",{readonly:"","onUpdate:modelValue":e[1]||(e[1]=l=>s.email=l),class:"form-control",type:"text"},null,512),[[v,s.email]])]),a("div",se,[e[14]||(e[14]=a("label",{class:"form-label"},[m("Address"),a("span",{class:"text-danger"},"*")],-1)),c(a("input",{readonly:"","onUpdate:modelValue":e[2]||(e[2]=l=>s.address=l),class:"form-control",type:"text"},null,512),[[v,s.address]])]),a("div",re,[e[15]||(e[15]=a("label",{class:"form-label"},[m("PhoneNumber"),a("span",{class:"text-danger"},"*")],-1)),c(a("input",{readonly:"","onUpdate:modelValue":e[3]||(e[3]=l=>s.phoneNumber=l),class:"form-control",type:"text"},null,512),[[v,s.phoneNumber]])]),a("div",ne,[e[18]||(e[18]=a("label",{class:"form-label me-5"},[m("Gender"),a("span",{class:"text-danger"},"*")],-1)),a("div",null,[s.gender===!0?(x(),U("div",ie,[c(a("input",{readonly:"","onUpdate:modelValue":e[4]||(e[4]=l=>s.gender=l),id:"male",class:"form-check",type:"radio",value:"true"},null,512),[[P,s.gender]]),e[16]||(e[16]=a("label",{class:"ms-1",for:"male"},"Male",-1))])):(x(),U("div",de,[c(a("input",{readonly:"","onUpdate:modelValue":e[5]||(e[5]=l=>s.gender=l),id:"female",class:"form-check",type:"radio",value:"false"},null,512),[[P,s.gender]]),e[17]||(e[17]=a("label",{class:"ms-1",for:"female"},"Female",-1))]))])]),a("div",pe,[e[19]||(e[19]=a("label",{class:"form-label"},[m("Date of birth"),a("span",{class:"text-danger"},"*")],-1)),c(a("input",{readonly:"","onUpdate:modelValue":e[6]||(e[6]=l=>s.dob=l),class:"form-control",type:"date"},null,512),[[v,s.dob]])])]),r(L,{class:"col-md-6 doctor-information-container",ref_key:"formRef",ref:I,model:o,rules:S,"label-col":Y,"wrapper-col":A},{default:p(()=>[e[23]||(e[23]=a("h4",{class:"text-center",style:{color:"#22c55e"}},"Doctor information",-1)),a("div",ue,[r(n,{class:"col-md-5",label:"Image",name:"applicationUserImage"},{default:p(()=>[r(i,{"file-list":o.applicationUserImage,"onUpdate:fileList":e[7]||(e[7]=l=>o.applicationUserImage=l),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture-card","max-count":1,onPreview:E},{default:p(()=>[a("div",null,[r(K(ee)),e[21]||(e[21]=a("div",{style:{"margin-top":"8px"}},"Upload",-1))])]),_:1},8,["file-list"]),r(d,{open:y.value,title:w.value,footer:null,onCancel:O},{default:p(()=>[a("img",{alt:"example",style:{width:"100%"},src:_.value},null,8,ce)]),_:1},8,["open","title"])]),_:1}),r(n,{class:"col-md-7",label:"Specialties"},{default:p(()=>[r(f,{mode:"multiple",value:o.specialties,"onUpdate:value":e[8]||(e[8]=l=>o.specialties=l),options:D.value.map(l=>({label:l.title,value:l.specialtyID})),placeholder:"Select specialties"},null,8,["value","options"])]),_:1})]),r(n,{label:"Doctor title",name:"doctorTitle"},{default:p(()=>[r(g,{value:o.doctorTitle,"onUpdate:value":e[9]||(e[9]=l=>o.doctorTitle=l)},null,8,["value"])]),_:1}),r(n,{label:"Start Career Year",name:"startCareerYear"},{default:p(()=>[r(j,{style:{width:"100%"},value:o.startCareerYear,"onUpdate:value":e[10]||(e[10]=l=>o.startCareerYear=l)},null,8,["value"])]),_:1}),r(n,{label:"Doctor description",name:"doctorDescription"},{default:p(()=>[r($,{value:o.doctorDescription,"onUpdate:value":e[11]||(e[11]=l=>o.doctorDescription=l)},null,8,["value"])]),_:1}),r(n,{class:"text-center"},{default:p(()=>[r(G,{onClick:h,style:{width:"100%"},type:"primary"},{default:p(()=>e[22]||(e[22]=[m("Update")])),_:1})]),_:1})]),_:1},8,["model"])])}}};export{ye as default};
