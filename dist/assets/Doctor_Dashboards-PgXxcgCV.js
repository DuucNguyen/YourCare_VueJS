import{_ as G,u as L,r as f,y as d,o as N,Q as H,z as R,c as p,a as l,b as t,t as n,q as _,F,e as O,w as r,d as h,n as w,T as A,U,m as E,f as m,O as V}from"./index-ruO88dao.js";import{A as K}from"./ApiDoctorProfile-r3tg1Tfp.js";import{A as $}from"./ApiAppointment-Dc0HI9zF.js";import{D as j}from"./DoctorSideBar-DOcIG3kn.js";import{u as q}from"./route-store-DtioIOva.js";import{A as g}from"./AppointmentStatus-C_9gBi1V.js";/* empty css                                                                      */const Q={class:"doctor_dashboard"},W={class:"doctor_dashboard_section"},J={class:"doctor_dashboard_body"},X={class:"col-md-8"},Z={class:"row doctor_dashboard_statistic"},tt={class:"col statistic_item"},st={class:"statistic_item_data"},et={style:{color:"#3a57e8"}},ot={class:"col statistic_item"},at={class:"statistic_item_data"},nt={style:{color:"#00cccc"}},it={class:"col statistic_item"},lt={class:"statistic_item_data"},rt={style:{color:"#eb991b"}},ct={class:"col statistic_item"},dt={class:"statistic_item_data"},ut={style:{color:"#1aa053"}},pt={class:"doctor_dashboard_appointment"},_t={key:0,class:"appointment_container"},mt=["onClick"],vt={style:{"font-weight":"500","font-size":"17px"}},ft={style:{color:"#1975dc","font-weight":"500"}},ht={class:"text-secondary ms-3",style:{"font-size":"13px"}},bt={style:{"font-weight":"500","font-size":"20px",color:"#22c55e"}},gt={key:1},yt={class:"col-md-4"},Dt={style:{width:"400px",border:"1px solid #fff",borderRadius:"8px"}},xt={id:"chart_container"},St={class:"mt-5"},wt={__name:"Doctor_Dashboards",setup(At){const Y=L(),k=q(),T=E(),b=f({}),y=f({}),a=f([]),u=f(d()),C=async()=>{if(b.value=await Y.getUserInfo(),b.value){var e=await K.GetByUserID(b.value.id);y.value=e.data.data}},D=async()=>{var e=await $.GetDoctorAppointmentByDate(y.value,d(u.value).format("MM/DD/YYYY"));e.data.isSucceeded&&(a.value=e.data.data)},M=async()=>{await D()},z=e=>{k.setData(e),T.push({name:"Doctor_Appointment_View"})},x=e=>a.value.filter(s=>s.status===e).length.toString().padStart(2,"0"),I=()=>{var e=g.values(),s=e.map(o=>({name:o,y:B(o)}));return s},B=e=>{var s=a.value.length,o=a.value.filter(c=>c.status===e).length;return o*100/s},S=()=>{U.chart("chart_container",{chart:{type:"pie",custom:{},events:{render(){const e=this,s=e.series[0];let o=e.options.chart.custom.label;o||(o=e.options.chart.custom.label=e.renderer.label("Total<br/><strong>"+a.value.length+"</strong>").css({color:"#000",textAnchor:"middle"}).add());const c=s.center[0]+e.plotLeft,v=s.center[1]+e.plotTop-o.attr("height")/2;o.attr({x:c,y:v}),o.css({fontSize:`${s.center[2]/12}px`})}}},lang:{locale:"en"},accessibility:{point:{valueSuffix:"%"}},credits:{enabled:!1},title:{text:"Tiến độ "+d(u.value).format("DD/MM/YYYY")},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.0f}%</b>"},legend:{enabled:!1},plotOptions:{series:{allowPointSelect:!0,cursor:"pointer",borderRadius:5,dataLabels:[{enabled:!0,distance:20,format:"{point.name}"},{enabled:!0,distance:-16,format:"{point.percentage:.0f}%",style:{fontSize:"0.9em"}}],showInLegend:!0}},series:[{name:"Phần trăm",colorByPoint:!0,innerSize:"70%",data:I()}]})};return N(async()=>{await C(),await D(),await H(),S()}),R(()=>a.value,()=>{a.value.length>0&&S()},{deep:!0}),(e,s)=>{const o=h("a-col"),c=h("a-row"),v=h("a-empty"),P=h("a-calendar");return m(),p("div",Q,[l(j,{"active-item":"dashboard"}),t("div",W,[s[15]||(s[15]=t("div",{class:"doctor_dashboard_title"},[t("h3",null,"Thống kê")],-1)),t("div",J,[t("div",X,[t("div",Z,[t("div",tt,[s[2]||(s[2]=t("div",{class:"statistic_item_icon",style:{color:"#3a57e8","background-color":"#d8ddfa"}},[t("i",{class:"bx bx-calendar"})],-1)),t("div",st,[t("span",et,n(_(d)(u.value).format("DD/MM/YYYY")),1),s[1]||(s[1]=t("span",null,"Ngày",-1))])]),t("div",ot,[s[4]||(s[4]=t("div",{class:"statistic_item_icon",style:{color:"#00cccc","background-color":"#bceff2"}},[t("i",{class:"bx bx-align-left"})],-1)),t("div",at,[t("span",nt,n(a.value.length.toString().padStart(2,"0")),1),s[3]||(s[3]=t("span",null,"Tổng",-1))])]),t("div",it,[s[6]||(s[6]=t("div",{class:"statistic_item_icon",style:{color:"#eb991b","background-color":"#f6e6cc"}},[t("i",{class:"bx bx-calendar-exclamation"})],-1)),t("div",lt,[t("span",rt,n(x(_(g).WAITING)),1),s[5]||(s[5]=t("span",null,"Đang đợi",-1))])]),t("div",ct,[s[8]||(s[8]=t("div",{class:"statistic_item_icon",style:{color:"#1aa053","background-color":"#d1ecdd"}},[t("i",{class:"bx bx-calendar-check"})],-1)),t("div",dt,[t("span",ut,n(x(_(g).COMPLETED)),1),s[7]||(s[7]=t("span",null,"Đã tiếp nhận",-1))])])]),t("div",pt,[a.value.length>0?(m(),p("div",_t,[(m(!0),p(F,null,O(a.value,i=>(m(),p("div",{class:V("appointment_item"),onClick:Yt=>z(i)},[l(c,null,{default:r(()=>[l(o,{span:24},{default:r(()=>[t("span",vt,n(i.doctorName),1)]),_:2},1024)]),_:2},1024),l(c,null,{default:r(()=>[l(o,{span:20},{default:r(()=>[t("span",null,n(_(d)(i.timetableStartTime,"HH:mm:ss").format("HH:mm"))+" - ",1),t("span",ft,n(_(d)(i.timetableDate).format("DD-MM-YYYY")),1),s[9]||(s[9]=t("br",null,null,-1)),t("span",null,n(i.patientName),1),s[10]||(s[10]=t("br",null,null,-1)),t("span",ht,n(i.status),1)]),_:2},1024),l(o,{span:4,class:"text-center"},{default:r(()=>[s[11]||(s[11]=t("span",{style:{"font-size":"12px"}},"STT",-1)),s[12]||(s[12]=t("br",null,null,-1)),t("span",bt,n(i.timeTableOrder),1)]),_:2},1024)]),_:2},1024)],8,mt))),256))])):(m(),p("div",gt,[l(v,null,{description:r(()=>s[13]||(s[13]=[t("span",null,"Không có lịch khám trong hôm nay",-1)])),_:1})]))])]),t("div",yt,[t("div",Dt,[l(P,{value:u.value,"onUpdate:value":s[0]||(s[0]=i=>u.value=i),fullscreen:!1,onChange:M},null,8,["value"])]),w(t("div",xt,null,512),[[A,a.value.length>0]]),w(t("div",St,[l(v,null,{description:r(()=>s[14]||(s[14]=[t("span",null,"Không có dữ liệu cho biểu đồ",-1)])),_:1})],512),[[A,a.value.length<=0]])])])])])}}},Pt=G(wt,[["__scopeId","data-v-3e055823"]]);export{Pt as default};
