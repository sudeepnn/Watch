const time=document.getElementById('time')


function gettime(){
    var today=new Date();
   
    time.innerHTML=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    setTimeout(()=>gettime(),1000)
}

gettime()