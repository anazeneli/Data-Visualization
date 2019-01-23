function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
    let b = color(212,175,55);
    background(b);
    translate(width/2, 3*height/4);
    rotate(-PI);
    let h = color(200, 0, 0);
    fill(h);
    // fill 24-hour semi-cicle
    arc(0, 0, 600, 600, 0, PI*(hour()/24));
    noFill()
    arc(0, 0, 600, 600, 0, PI);
    
    let m = color(255, 70, 0);
    // fill minute semi-cicle
    fill(m);
    arc(0, 0, 400, 400, 0, PI*(minute()/59))
    noFill()
    arc(0, 0, 400, 400, 0, PI);
    
    // fill seconds semi-cicle
    let s = color(250, 250, 85);
    fill(s);
    arc(0, 0, 200, 200, 0, PI*(second()/59));
    noFill()
    arc(0, 0, 200, 200, 0, PI);
    
    
}
