nose_x=0;
nose_y=0;
function preload(){
nose=loadImage("nose.png")
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide()

 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose', gotPoses);
}


function draw(){
image(video,0,0,300,300);
image(nose,nose_x-50,nose_y,100,50)
}
function take_snapshot(){
    save('myFilter.png');
}

function modelLoaded(){
    console.log('poseNet Is Initialised ')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x );

        console.log("nose y = " + results[0].pose.nose.y );
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}
