function preload(){

}

function setup(){
    canvas = createCanvas(640, 400);
    canvas.position(350, 200);
    video = createCapture(VIDEO);
    video.hide();
}
    

function draw(){
    image(video, 0, 0, 640, 480);
    circle(30, 30, 100);
    circle(610, 30, 100);
    circle(30, 370, 100);
    circle(610, 370, 100);
    
}

function take_snapshot(){
    save('img.jpg');
}