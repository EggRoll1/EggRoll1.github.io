
  var pics =["/img/astronaut-e1553888957531.jpg"];

  var img = '';
  for(ii=0; ii<pics.length; ii++) {
    positiontop = Math.random()*500;
    positionright = Math.random()*1200;
    zindex = ii;

    img += '<img src="'+pics[ii]+'" style="top: '+positiontop+'px;'+'right: '+positionright+'px;'+'z-index: '+zindex+';">';
  }

  
document.getElementById('randomImg').innerHTML= img;
