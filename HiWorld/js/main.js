function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    // text("put your p5.js code here",10, frameCount % height);
    // console.log("hey")
    var d = document.getElementById("text");
    var h = map(sin(millis() * .001),-1,1,0,10);
    var e = map(sin(millis() * .002),-1,1,0,10);
    var l = map(sin(millis() * .005),-1,1,0,10);
    var o = map(sin(millis() * .007),-1,1,0,10);

    var w1 = map(sin(millis() * .001),-1,1,0,800);
    var w2 = map(sin(millis() * .002),-1,1,0,800);
    var w3 = map(sin(millis() * .009),-1,1,0,800);
    var w4 = map(sin(millis() * .005),-1,1,0,800);

    d.innerHTML = "<span style='font-stretch:"+ h +"%; font-weight:"+ w1 + "'>H</span><span style='font-stretch:"+ e +"%; font-weight:"+ w2 + "'>e</span><span style='font-stretch:"+ l +"%; font-weight:"+ w3 + "'>ll</span><span style='font-stretch:"+ o +"%; font-weight:"+ w4 + "'>o</span>";
    // console.log(d);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
