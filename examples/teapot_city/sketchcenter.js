var stars = []

function setup(){
  // createCanvas(710, 400, WEBGL);
  createStereoCanvas(WEBGL, 50);

  if(deviceOrientation == 'portrait'){
    alert('please rotate your phone!')
  }

  //generate some random positions for pots and store them.
  for(var i=0; i < 100;i++){
    var edge = 1500
    var x = random(-edge - edge/2,edge)
    var y = random(-edge,edge)
    var z = random(-edge,edge)
    var pos = {'x':x, 'y':y, 'z':z}
    stars.push(pos);
  }
  // _getDeviceType();
  console.log(getDeviceType())
}

function draw(){
  background(0);
  //VRorbitControl();
  orbitControl();

//console.log(vrX()); 
 
  directionalLight(250, 250, 250, vrX(), vrY()-1, 0);

 // ambientLight(100);
//  pointLight(250, 250, 250, 100, 100, 0);
  ambientMaterial(random(150,200));

  for(var i=0; i < 100;i++){
    push()
    //translate(stars[i].x,stars[i].y,stars[i].z);

      var x = sin(2 * stars[i].x) *  sin(stars[i].y); 
      var y = cos(stars[i].y)  ;
      var z = cos(2 * stars[i].z)  * sin(stars[i].y); 
      translate(x,y,z);
 
   sphere(10,10,10); 
    pop()
  }

  //white door
  // ambientLight(100);
  // pointLight(250, 250, 250, 100, 100, 0);
  // ambientMaterial(250);

 // translate(0, 600, 500 );
 // rotate 
  plane(80,150); 

  updateStereo();
}