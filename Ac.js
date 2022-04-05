Status = "";
AC_image = "";
objects = [];
function preload(){
    Ac_image = loadImage("Ac.jpg");
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
 object_detector.Detect(Ac_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(tv_image,0,0,640,350);
    if(Status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: object detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence + 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].height);
            noFill();
            stroke("#fc0303");
            rect(object[i].x, objects[i].width, objects[i].height);
        }
    }
}