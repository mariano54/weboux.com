function doFirst(){
	var x = document.getElementById('canvas');
    canvas = x.getContext('2d');
    canvas.font="12px Tahoma";
 
    var Bits = new Array();
    for(var n=0; n<210; n++){
    	Bits[n]= new Bit();
    }
    var loop = window.setInterval(function(){drawBits(Bits)} ,10);
}
var Bit = function(){
	var r = Math.random();
	if(r<.333) this.color = "#f13490";
	else if(r<.666) this.color = "#1e5799";
	else this.color = "white";

    this.x = 400;
    this.y = 200;
}
Bit.prototype.update = function(){
   var r = Math.random();
   if(r<.25){
       this.x++;
       return;
   }
   if(r<.50){
       this.x--;
       return;
   }
  if(r<.75){
       this.y++;
       return;
   }
  if(r<1.0){
       this.y--;
       return;
   }
}

function drawBits(Bits){
    for(var n =0; n<110; n++){
    	//var modifier = Math.floor(Math.random()*180 -90);
    	canvas.fillStyle=Bits[n].color;
        canvas.fillRect(Bits[n].x,Bits[n].y, 3,3);
        Bits[n].update();
    }
}

window.addEventListener("load", doFirst, false);
