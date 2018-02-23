


//var x, y;

//var img;

function setup(){
    createCanvas(440,400);
} //lets try to make a face
function draw(){    
    background(0, 153, 204);
    stroke(0);
    strokeWeight(0.5);

    fill(305, 90, 130);
    var message = "Am I still in a dream?";
    

    text(message, 30, 40);
    text(message, 30, 70);
    text(message, 30, 100);
    text(message, 30, 130);
    text(message, 30, 160);
    text(message, 30, 190);
    text(message, 30, 220);
    text(message, 30, 250);
    text(message, 30, 280);
    text(message, 30, 310);
    text(message, 30, 340);
    text(message, 30, 370);


    fill(105, 190, 130);
    var message = "NO.";
    
    text(message, 200, 40);
    text(message, 200, 70);
    text(message, 200, 100);
    text(message, 200, 130);
    text(message, 200, 160);
    text(message, 200, 190);
    text(message, 200, 220);
    text(message, 200, 250);
    text(message, 200, 280);
    text(message, 200, 310);
    text(message, 200, 340);
    text(message, 200, 370);


    fill(305, 90, 130);
    var message = "YES.";
    

    text(message, 250, 40);
    text(message, 250, 70);
    text(message, 250, 100);
    text(message, 250, 130);
    text(message, 250, 160);
    text(message, 250, 190);
    text(message, 250, 220);
    text(message, 250, 250);
    text(message, 250, 280);
    text(message, 250, 310);
    text(message, 250, 340);
    text(message, 250, 370);


    fill(105, 190, 130);
    var message = "Does it matter?";
    
    text(message, 350, 40);
    text(message, 350, 70);
    text(message, 350, 100);
    text(message, 350, 130);
    text(message, 350, 160);
    text(message, 350, 190);
    text(message, 350, 220);
    text(message, 350, 250);
    text(message, 350, 280);
    text(message, 350, 310);
    text(message, 350, 340);
    text(message, 350, 370);

    fill(102, 102, 51)
    stroke(102, 102, 51)
    ellipse(330, 350, 35, 17)
    rect(326, 337, 10, 10)
    rect(329, 357, 3, 10)


    fill(255,213,204)
    ellipse(200, 200, 250, 310);
    //lefteye
    fill(255,255,255) //white
    ellipse(155, 175, 40, 25); //eye
    fill(153,76,0) //brown
    ellipse(157, 175, 24, 24); //leftiris
    fill(0,0,0) //blackpupil
    //fill(255,255,255) //white
    //ellipse(157, 175, 16, 16)
    
    //righteye
    fill(255,255,255) //white
    ellipse(250,175,40,25) //eye
    fill(153,76,0) //brown
    ellipse(252, 175, 23, 24); //rightiris
    fill(0,0,0)
    ellipse(159, 175, 14, 18);
    ellipse (254, 175, 14, 18)
    fill(0,0,0)

    //lips
    line(165, 289, 200, 282)
    line(200, 282, 227, 289)
    line(165, 289, 200, 308)
    line(200, 308, 227, 289)
    line(165, 290, 227, 290)

    //nose
    line(230,240,205,150) //nosebridge
    line(190,237,230,240) //nosebottom
    //nostril
    ellipse(195, 230, 20, 6)
    stroke(0,0,0);
    strokeWeight(10);
    
    line(169, 150, 130,155) //eyebrowleft
    line(275, 155, 236,150) //eyebrowright



    //hair
    stroke(153,76,0);
    strokeWeight(55);
    line(80, 180, 200, 60);
    line(80, 164, 180, 50);
    line(80, 180, 200, 50);
    line(80, 200, 90, 150);
    line(80, 200, 100, 150);
    line(186, 50, 320, 130);
    line(320, 130, 310, 200);

    stroke(153,76,0);
    strokeWeight(25);
    line(160, 64, 160, 130)
    line(180, 64, 180, 130)
    line(200, 64, 200, 130)
    line(220, 64, 220, 130)
    line(240, 64, 240, 130)
    line(260, 84, 260, 130)


}
