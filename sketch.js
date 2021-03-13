var fSizes = [[55,160,55], [55,200,55], [55,240,55], [55,200,55], [55,140,55]];
var palmSize = [240,200,55];
var armSize = [170,300,55];
var fingerSpacing = 63;

function setup() {     
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    rotateY(radians(frameCount));
    background(125);
    finger(50,240,55,(sin(frameCount/25)+1)/2);

}

function phalanx(w,h,d,bend){

    var maxAngle = 60;

    translate(0,0,0);
    rotateX(radians(bend*maxAngle));

    box(w,h,d);

}

function finger(w,h,d,bend) {
//    push();
//    translate(w - 50, 1.65*(-h * .4), d - 55);
//    phalanx(w, h * 0.2, d, 0);
//    pop();
    
//    push();
//    translate(w - 50, -( h * .35), d - 55 );
//    //rotateY(radians(30));
//    //sphere(10);
//    phalanx(w, h * .4, d, bend);
//    pop();
//    
//    //rotateY(radians(30));
    sphere(10);
    phalanx(w, h * .4, d, bend);
}







