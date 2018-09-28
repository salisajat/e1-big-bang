var stars = []; 
var a = 0; 

function setup(){
  // createCanvas(710, 400, WEBGL);
  createStereoCanvas(WEBGL, 1);

  if(deviceOrientation == 'portrait'){
    alert('please rotate your phone!')
  }

  for(var i=0; i < 100;i++){
    var edge = 1500
    var x = random(-edge - edge/2,edge)
    var y = random(-edge,edge)
    var z = random(-edge,edge)
    var pos = {'x':x, 'y':y, 'z':z}
    stars.push(pos);
  }
  // _getDeviceType();
  //console.log(getDeviceType());
  setTimeout(goOut, 50000); 
}

function draw(){
  background(0);
  //VRorbitControl();
  orbitControl();

  //console.log(vrX()); 

directionalLight(250, 250, 250, vrX(), vrY()-1, 0);

 // ambientLight(100);
//  pointLight(250, 250, 250, 100, 100, 0);
ambientMaterial(random(150,190));
push()

for (var j = 0; j < 100; j ++) {
  for(var i=0; i < 80;i++){
    push()
    translate(stars[i].x,stars[i].y,stars[i].z);



    sphere(10,10,10); 
    pop()
  }
   // if(z > 500){ 
   //    stars[j].x = random(-500);
   //    a = 0; 
   //    console.log('FLIPSD')
   //  } 

   var z = millis()/10; 
   console.log(z); 
   translate(z,z,z); 




 }
 pop(); 


  //white
 // ambientLight(100);
  //pointLight(250, 250, 250, 100, 100, 0);
  ambientMaterial(250);

 // translate(0, 600, 500 );
 // rotate 
 push(); 
//rotateY(millis() / 1000);
plane(80,150); 
pop(); 

updateStereo();
}

function goOut(){ 
  window.location = "https://webspace.ocad.ca/~3161327/p5.vr/examples/teapot_city/index2.html";
} 