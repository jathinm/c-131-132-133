Status = "";
lightbulp_image = "";

function preload(){
    lightbulp_image = loadImage("light bulp.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315.200);
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
 console.log("Model Loaded");
 Status = true;
 object_detector.Detect(lightbulp_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(lightbulp_image,0,0,640,350);
}