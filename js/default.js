var separate_time=function(time){
  var sec=Math.floor((time/1000)%60);
  var min=Math.floor((time/1000/60)%60);
  var hours=Math.floor((time/1000/60/60)%24);
  var days=Math.floor(time/1000/60/60/24);
  return[sec,min,hours,days];
}

var update=function(){
 var now=new Date();
 var target=new Date(2020,7,24,0,0,0,0);
 var diff=target.getTime()-now.getTime();
 var counter=separate_time(diff);
 document.getElementById('countdown').tectContent=
 '東京オリンピックまであと'+
 counter[3]+'日'+
 counter[2]+'時'+
 counter[1]+'分'+
 counter[0]+'秒';
 refresh();
}

var refresh=function(){
  setTimeout(update,1000);
}
update();

document.getElementById('form').select.onchange=function(){
  location.href=document.getElementById('form').select.value;
}

var last_date=getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent='前回訪れた時間'+last_date;
}
else{
  document.getElementById('cookie').textContent='はじめまして';
}

var current_time=new Date();
setCookie('lastDate',current_time.toString(),7);
