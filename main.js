song1="";
song2="";
song_name1="";
song_name2="";
lwristx=0;
lwristy=0;
rwristx=0;
rwristy=0;
scorelw=0;
scorerw=0;

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
    fill("red");
    stroke("black");

    song_name = song1.isPlaying();
    song_name2 = song2.isPlaying();
    console.log(song_name1);
    console.log(song_name2);
    
    if(scorelw>0.2){
        circle(lwristx, lwristy, 40);
        song2.stop();
        if(song_name1==false){
            song1.play();
            console.log("Song Name: Warriors ");
            document.getElementById("song_id").innerHTML="Song Name: Warriors";
        }
    }

    if(scorerw>0.2){
        circle(rwristx, rwristy, 40);
        song1.stop();
        if(song_name2==false){
            song2.play();
            console.log("Song Name: Happier");
            document.getElementById("song_id").innerHTML="Song Name: Happier";
        }
    }
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

        scorelw=results[0].pose.keypoints[9].score;
        console.log("!!!!!!!"+scorelw+"!!!!!!");

        scorerw=results[0].pose.keypoints[10].score;
        console.log("!!!!!!!"+scorerw+"!!!!!!");
    }
    
}