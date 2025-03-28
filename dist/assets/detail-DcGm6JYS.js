import{u as B}from"./route-store-DtioIOva.js";import{A as N}from"./ApiDoctorProfile-r3tg1Tfp.js";import{A}from"./ApiTimetable-Ji4SOWUX.js";import{k as I,r as c,o as V,c as o,b as t,t as l,g as m,q as d,y as r,F as u,e as p,N as j,m as z,d as G,f as a,O as k,h as L,w as S}from"./index-ruO88dao.js";const R={class:"mt-3 d-flex justify-content-center align-items-center"},F={class:"col-md-8 p-4 pt-5 doctor-search-item d-flex flex-column justify-content-between"},K={style:{cursor:"pointer"},class:"d-flex"},M={style:{width:"180px",height:"180px"},class:"me-3 doctor-img rounded-circle"},O=["src"],X={class:"me-3 doctor-search-info"},Y={class:"mb-2 fs-4"},$={class:"d-flex align-items-center"},q={class:"text-black fw-normal"},E={style:{"font-weight":"500"}},P={class:"d-flex align-items-center"},J={class:"mb-1 d-flex flex-wrap"},Q={class:"specialization-item-capsule"},U={class:"text-secondary me-3 d-flex align-items-center"},W={style:{"font-weight":"500"},class:"text-dark m-0 fs-6"},Z={class:"text-secondary me-3 d-flex align-items-center"},tt={style:{"font-weight":"500"},class:"text-dark m-0 fs-6"},st={class:"mt-3 d-flex flex-column"},et={class:"timeSlot-date-container"},lt=["id","onClick"],at={key:0,class:"text-danger"},nt={key:1},ot={class:"mt-4 d-flex flex-column"},it={key:0,class:"w-100 alert alert-warning m-0"},dt={key:1,class:"timeSlot-slot-container"},rt=["onClick"],ct={key:1,class:"timeSlot-slot slot-unavailable"},mt={class:"mt-5"},ut={class:"mt-5"},vt={class:"text-decoration-none"},xt={__name:"detail",setup(ht){const w=B(),H=I(),T=z(),g=H.params.doctorID,n=c({}),v=c([]),f=c([]),_=c([]),x=c(),y=i=>[...new Set(v.value.map(s=>s.startTime))].length,b=i=>{x.value=i,_.value=v.value.filter(s=>s.date===i)},C=i=>{w.setData(i),T.push("/make-appointment")};return V(async()=>{var i=await N.GetByID(g??0);i.data.isSucceeded&&(n.value=i.data.data);var s=await A.GetTimetableByDoctorID(g??0);s.data.isSucceeded&&(v.value=s.data.data,f.value=[...new Map(v.value.map(h=>[h.date,h])).values()],b(f.value[0].date))}),(i,s)=>{const h=G("a-tooltip");return a(),o("div",R,[t("div",F,[t("div",K,[t("div",M,[t("img",{src:n.value.imageString,alt:"doctorImg"},null,8,O)]),t("div",X,[t("h5",Y,l(n.value.doctorTitle)+". "+l(n.value.fullName),1),t("div",$,[t("h6",null,[s[1]||(s[1]=t("i",{class:"bx bxs-badge-check"},null,-1)),s[2]||(s[2]=m(" Bác sĩ | ")),t("span",q,[t("span",E,l(d(r)().year()-n.value.startCareerYear),1),s[0]||(s[0]=m(" năm kinh nghiệm."))])])]),t("div",P,[s[3]||(s[3]=t("p",{class:"text-secondary m-0 fs-6 me-3"},"Chuyên khoa",-1)),t("div",J,[(a(!0),o(u,null,p(n.value.specialties,e=>(a(),o("label",Q,l(e.title),1))),256))])]),t("div",U,[s[4]||(s[4]=t("p",{style:{width:"130px"},class:"m-0 fs-6"},"Trình độ",-1)),t("span",W,l(n.value.doctorTitle),1)]),t("div",Z,[s[5]||(s[5]=t("p",{style:{width:"130px"},class:"m-0 fs-6"},"Nơi công tác",-1)),t("span",tt,l(n.value.address),1)])])]),t("div",st,[s[8]||(s[8]=t("h4",null,"Đặt khám nhanh",-1)),t("div",et,[(a(!0),o(u,null,p(f.value,e=>(a(),o("div",{id:"timetb-"+e.id,class:k("timeSlot-date "+(x.value===e.date?"timeSlot-date-chosen":"")),onClick:D=>b(e.date)},[t("p",null,l(d(r)(e.date).format("dddd")),1),t("p",null,l(d(r)(e.date).date())+" - "+l(d(r)(e.date).month()+1),1),y(e.date)<=0?(a(),o("span",at,"Đã đầy lịch")):(a(),o("span",nt,l(y(e.date))+" khung giờ",1))],10,lt))),256))]),t("div",ot,[s[7]||(s[7]=j('<h4>Khung giờ</h4><div class="timeSlot-slot-instructions"><div class="timeSlot-slot-instruction-item"><div class="timeSlot-available-chosen">#</div><span>-Đang chọn</span></div><div class="timeSlot-slot-instruction-item"><div class="timeSlot-available-1">1</div><span>-Còn 01 chỗ trống</span></div><div class="timeSlot-slot-instruction-item"><div class="timeSlot-available-2">2</div><span>-Còn 02 chỗ trống</span></div><div class="timeSlot-slot-instruction-item"><div class="slot-unavailable">0</div><span>-Hết chỗ trống</span></div></div>',2)),_.value.length<=0?(a(),o("p",it,s[6]||(s[6]=[t("span",{class:"d-flex align-items-center"},[t("span",{class:"me-2"},[t("i",{class:"fs-2 text-danger bx bx-error-circle"})]),m(" Lịch làm việc trong ngày này đã hết. Vui lòng chọn ngày khác. Xin cảm ơn !")],-1)]))):(a(),o("div",dt,[(a(!0),o(u,null,p(_.value,e=>(a(),o(u,null,[e.isAvailable?(a(),L(h,{key:0,placement:"top"},{title:S(()=>[t("span",null,"Chỗ trống: "+l(e.availableSlots),1)]),default:S(()=>[t("div",{onClick:D=>C(e),class:k("timeSlot-slot"+(e.availableSlots===1?" timeSlot-available-1":"")+(e.availableSlots===2?" timeSlot-available-2":""))},l(d(r)(e.startTime,"HH:mm:ss").format("HH:mm"))+" - "+l(d(r)(e.endTime,"HH:mm:ss").format("HH:mm")),11,rt)]),_:2},1024)):(a(),o("div",ct,l(d(r)(e.startTime,"HH:mm:ss").format("HH:mm"))+" - "+l(d(r)(e.endTime,"HH:mm:ss").format("HH:mm")),1))],64))),256))]))])]),s[12]||(s[12]=t("div",{class:"mt-3 alert alert-warning d-flex flex-column"},[t("span",null,[t("i",{class:"text-danger bx bx-error-alt"}),m(" Lưu ý")]),t("span",{style:{"font-size":"15px"}},"* Nếu bệnh nhân bận việc không đến khám được vui lòng hủy lịch khám đã đặt và đặt lại ngày khác. Xin cảm ơn!")],-1)),t("div",mt,[s[9]||(s[9]=t("h4",null,"Giới thiệu",-1)),t("p",null,l(n.value.doctorDescription),1)]),t("div",ut,[s[11]||(s[11]=t("h4",null,"Kinh nghiệm làm việc",-1)),t("div",null,[m(l(n.value.doctorTitle)+". "+l(n.value.fullName)+" hiện đang công tác tại "+l(n.value.address)+". Bác sĩ có "+l(d(r)().year()-n.value.startCareerYear)+" năm kinh nghiệm trong lĩnh vực ",1),(a(!0),o(u,null,p(n.value.specialties,e=>(a(),o("div",null,[t("a",vt,l(e.title),1),s[10]||(s[10]=t("span",null,",",-1))]))),256))])])])])}}};export{xt as default};
