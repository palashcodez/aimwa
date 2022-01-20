song1="";
song2="";
lwristx=0;
lwristy=0;
rwristx=0;
rwristy=0;

function setup(){
    canvas=createCanvas(600, 500);
    canvas.position(665, 350);

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("MODeeAL AAIS LOEEDED");
}

function preload(){
    song1=loadSound("1.mp3");
    song2=loadSound("2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
}

function stop(){
    song.stop();
}

function pause(){
    song.pause();
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        lwristx=results[0].pose.leftWrist.x;
        lwristy=results[0].pose.leftWrist.y;

        rwristx=results[0].pose.rightWrist.x;
        rwristy=results[0].pose.rightWrist.y;

        console.log(lwristx+'lwx');
        console.log(lwristy+'lwy');
        console.log(rwristx+'rwx');
        console.log(rwristy+'rwy');
    }
    
}