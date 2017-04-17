(function(){
  var doc= document.documentElement;
  var fontEl = document.createElement('style');
  var metaEl = document.querySelector('meta[name="viewport"]')
  var headEl = document.querySelector('head')
 
  var width = doc.clientWidth;
  var dpr = window.devicePixelRatio
  var rem = width*dpr/10;
  var scale = 1/dpr;
  

 fontEl.innerHTML = 'html{font-size:'+rem+'px!important;}'
 headEl.appendChild(fontEl);

 metaEl.setAttribute('content','width='+width*dpr+', user-scalable=no, initial-scale='+scale+', maximum-scale='+scale+', minimum-scale='+scale+'')

})()
