function setup(){
    video = createCapture(VIDEO);
    video.size(525, 550);
    video.position(10, 130);

    canvas = createCanvas(533, 425);
    canvas.position(730,200);
}

function draw(){
    background('#808080');
}