import{_ as d,u as c,c as u,f,b as r,a as t,w as o,g as i,O as n,d as m}from"./index-BuR_787K.js";const p={class:"sidebar"},k={class:"d-flex flex-column"},b={__name:"UserSideBar",props:["page"],setup(s){const l=c(),_=()=>{l.logOut()};return(g,e)=>{const a=m("RouterLink");return f(),u("div",p,[r("div",k,[t(a,{class:n("sidebar_link "+(s.page=="history"?"sidebar_li_chosen":"")),to:{name:"User_Appointment_View"}},{default:o(()=>e[0]||(e[0]=[i("Lịch sử đặt khám")])),_:1},8,["class"]),t(a,{class:n("sidebar_link "+(s.page=="patientProfile"?"sidebar_li_chosen":"")),to:{name:"User_PatientProfile_View"}},{default:o(()=>e[1]||(e[1]=[i("Hồ sơ")])),_:1},8,["class"]),t(a,{class:n("sidebar_link "+(s.page=="profile"?"sidebar_li_chosen":"")),to:{name:"User_Profile_View"}},{default:o(()=>e[2]||(e[2]=[i("Tài khoản")])),_:1},8,["class"]),r("div",{class:"sidebar_link",onClick:_},"Đăng xuất")])])}}},h=d(b,[["__scopeId","data-v-1fe0a271"]]);export{h as U};
