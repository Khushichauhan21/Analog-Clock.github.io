setInterval(()=>{
d=new Date;
htime= d.getHours();
mtime= d.getMinutes();
stime= d.getSeconds();

hratio=30*htime +mtime/2;
mratio=6*mtime;
sratio=6*stime;

hour.style.transform =`rotate(${hratio}deg)`;
minute.style.transform =`rotate(${mratio}deg)`;
second.style.transform =`rotate(${sratio}deg)`;


},1000);