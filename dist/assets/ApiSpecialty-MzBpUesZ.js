var l=Object.defineProperty;var i=(a,e,r)=>e in a?l(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var t=(a,e,r)=>i(a,typeof e!="symbol"?e+"":e,r);import{K as c}from"./index-ruO88dao.js";const p={GETALLBYLIMIT:"Specialty/GetAllByLimit",GETALL:"Specialty/GetAll",GETBYID:"Specialty/GetByID",CREATE:"Specialty/Create",UPDATE:"Specialty/Update",DELETE:"Specialty/Delete"};class n{constructor(){t(this,"GetAllByLimit",async e=>await c.get(`${p.GETALLBYLIMIT}`,{params:{PageNumber:e.pageNumber||1,PageSize:e.pageSize||10,searchValue:e.searchValue??""}}));t(this,"GetAllSpeID",async()=>await c.get(`${p.GETALL}`));t(this,"GetByID",async e=>await c.get(`${p.GETBYID}`,{params:{id:e}}));t(this,"Create",e=>c.post(`${p.CREATE}`,e,{headers:{Accept:"application/json","Content-Type":"multipart/form-data;","cache-control":"no-cache"}}));t(this,"Update",e=>c.post(`${p.UPDATE}`,e,{headers:{Accept:"application/json","Content-Type":"multipart/form-data;","cache-control":"no-cache"}}));t(this,"Delete",e=>c.delete(`${p.DELETE}`,{params:{id:e}}))}}const E=new n;export{E as A};
