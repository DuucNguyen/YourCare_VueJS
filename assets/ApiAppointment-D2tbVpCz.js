var A=Object.defineProperty;var T=(o,t,e)=>t in o?A(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>T(o,typeof t!="symbol"?t+"":t,e);import{K as a}from"./index-BuR_787K.js";const p={CREATE:"Appointment/Create",GET_DETAIL_BY_ID:"Appointment/GetDetailByID",GET_ALL_BY_USER_ID:"Appointment/GetAllByUserID",GET_DOCTOR_APPOINTMENT_BY_DATE:"Appointment/GetDoctorAppointmentByDate",COMPLETE_APPOINTMENT:"Appointment/CompleteAppointment",COUNT_APPOINTMENT_IN_MONTH_BY_DATE:"Appointment/GetNumberOfAppointmentInMonthByDate",UPDATE_APPOINTMENT_STATUS:"Appointment/UpdateAppointmentStatus",DOWNLOAD_FILE:"Appointment/DownloadFile"};class _{constructor(){n(this,"Create",async t=>await a.post(`${p.CREATE}`,t));n(this,"Update",()=>{});n(this,"GetAllByUserID",async t=>await a.get(`${p.GET_ALL_BY_USER_ID}`,{params:{userId:t}}));n(this,"GetDetailById",async t=>await a.get(`${p.GET_DETAIL_BY_ID}`,{params:{id:t}}));n(this,"GetDoctorAppointmentByDate",async(t,e)=>await a.get(`${p.GET_DOCTOR_APPOINTMENT_BY_DATE}`,{params:{doctorID:t,date:e}}));n(this,"CompleteAppointment",async t=>await a.post(`${p.COMPLETE_APPOINTMENT}`,t,{headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}));n(this,"CountAppointmentInMonthByDate",async(t,e)=>await a.get(`${p.COUNT_APPOINTMENT_IN_MONTH_BY_DATE}`,{params:{doctorID:t,date:e}}));n(this,"UpdateAppointmentStatus",async(t,e)=>a.patch(`${p.UPDATE_APPOINTMENT_STATUS}/${t}`,e,{headers:{"Content-Type":"application/json-patch+json"}}));n(this,"DownloadFile",async t=>await a.get(`${p.DOWNLOAD_FILE}`,{params:{path:t},responseType:"blob"}))}}const E=new _;export{E as A};
