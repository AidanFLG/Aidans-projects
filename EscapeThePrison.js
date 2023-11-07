//stick figure Prison break game

//constants
var NEWBLUE = new Color(69, 93, 247);
var COLOR = new Color(0, 255, 255);
var COLORTWO = new Color(255, 181, 181);
var SIDE = new Color(120, 121, 121);
var GLASS = new Color(183, 249, 255);
var GLASSTWO = new Color(200, 245, 245);
var BAR = new Color(192, 192, 192);
var GREY = new Color(160, 160, 160);
var MOP = new Color(247, 241, 150);
var X = 305;
var C = 0;
var BROWN = new Color(73, 36, 9);
var ORANGE = new Color(255, 146, 63);
var DAK = new Color(124, 124, 124);
var Z = 0;
var N = 0;
var W = 0;
var T = 0;
var R = 0;
var B = 0;
var Q = 285;
var P = 0;

//start
function start(){
    startingText();
    keyDownMethod(keyDown);
}

function keyDown(e) {
	if(e.keyCode == Keyboard.letter(' ')){
		levelOne();
	}
}

function levelOne(){
    Z = 0;
    N = 0;
    R = 0;
    W = 0;
    T = 0;
    P = 0;
    removeAll();
    stickMan(350, 275);
    jailWindow(250, 250);
    stickCop(50, 275);
    cake(95, 375);
    bars();
    roof();
    speachBubble();
    topText();
    mouseClickMethod(whatsNext);
}

function whatsNext(e) {
    var x = e.getX();
    var y = e.getY();
    
    if(Z != 1){

    if(x>0){
        if(x<40){
            if(y > 75){
                if(y < 110){
                    Z++;
                file();
                }
            }
        }
    }
    
    if(x>65){
        if(x<145){
            if(y > 75){
                if(y < 110){
                    Z++;
                teleporter();
                }
            }
        }
    }
    
    if(x>165){
        if(x<325){
            if(y > 75){
                if(y < 110){
                    Z++;
                timeFreezingDevice();
                }
            }
        }
    }
    
    if(x>345){
        if(x<385){
            if(y > 75){
                if(y < 110){
                    Z++;
                drill();
                }
            }
        }
    }
    
    
	}
    println(x);
    println(y);
    
    
}

function whatsNextB(e) {
    var x = e.getX();
    var y = e.getY();
    
    if(N != 1){
    if(x>63){
        if(x<205){
            if(y > 95){
                if(y < 115){
                    N++;
                windowA();
                }
            }
        }
    }
    
    if(x>207){
        if(x<280){
            if(y > 95){
                if(y < 115){
                    N++;
                cellDoor();
                }
            }
        }
    }
    
    
	}
   
    println(x);
    println(y);
    
}

function whatsNextC(e) {
    var x = e.getX();
    var y = e.getY();
    
    if(W != 1){
    if(x>55){
        if(x<205){
            if(y > 95){
                if(y < 115){
                    W++;
                left();
                }
            }
        }
    }
    
    if(x>290){
        if(x<350){
            if(y > 95){
                if(y < 115){
                    W++;
                right();
                }
            }
        }
    }
    
    
	}
   
    println(x);
    println(y);
    
}

function whatsNextD(e) {
    var x = e.getX();
    var y = e.getY();
    
    
    
    if(T != 1){
    if(x>55){
        if(x<205){
            if(y > 95){
                if(y < 115){
                    T++;
                leftTwo();
                }
            }
        }
    }
    
    if(x>290){
        if(x<350){
            if(y > 95){
                if(y < 115){
                    T++;
                rightTwo();
                }
            }
        }
    }
    
    if(x>135){
        if(x<270){
            if(y > 180){
                if(y < 230){
                    T++;
                ventOut();
                }
            }
        }
    }
    
    
    
    
    
    
	}
   
    println(x);
    println(y);
    
}

function whatsNextE(e) {
    var x = e.getX();
    var y = e.getY();
    
    
    
    if(R != 1){
    if(x>50){
        if(x<90){
            if(y > 95){
                if(y < 120){
                    R++;
                gun();
                }
            }
        }
    }
    
    if(x>135){
        if(x<230){
            if(y > 95){
                if(y < 120){
                    R++;
                janitorOutfit();
                }
            }
        }
    }
    
    if(x>275){
        if(x<370){
            if(y > 95){
                if(y < 120){
                    R++;
                gaurdOutfit();
                }
            }
        }
    }
    
    
    
    
    
    
	}
   
    println(x);
    println(y);
    
}

function whatsNextF(e) {
    var x = e.getX();
    var y = e.getY();
    
    
    
    if(P != 1){
    if(x>50){
        if(x<90){
            if(y > 95){
                if(y < 120){
                    P++;
                jaccob();
                }
            }
        }
    }
    
    if(x>135){
        if(x<230){
            if(y > 95){
                if(y < 120){
                    P++;
                andres();
                }
            }
        }
    }
    
    if(x>275){
        if(x<370){
            if(y > 95){
                if(y < 120){
                    P++;
                nick();
                }
            }
        }
    }
    
    
    
    
    
    
	}
   
    println(x);
    println(y);
    
}

function timeFreezingDevice(){
    removeAll();
    
    mouseClickMethod(whatsNext);
    
    var ground = new Rectangle(500, 500);
    ground.setPosition(0, 400);
    ground.setColor(Color.black);
    add(ground);
    
    var building = new Rectangle(300, 380);
    building.setPosition(0, 0);
    building.setColor(SIDE);
    add(building);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(20, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(140, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(260, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var line = new Line(110, 405, 110, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var line = new Line(230, 405, 230, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var line = new Line(350, 405, 350, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var sideWalk = new Rectangle(400, 25);
    sideWalk.setPosition(0, 380);
    sideWalk.setColor(Color.grey);
    add(sideWalk);
    
    var door = new Rectangle(40, 100); 
    door.setPosition(30, 280);
    door.setColor(GLASS);
    add(door);
    
    var door = new Rectangle(40, 100); 
    door.setPosition(75, 280);
    door.setColor(GLASS);
    add(door);
    
    while (C<20){
        var line = new Line(X, 250, X, 380);
        line.setColor(BAR);
        line.setLineWidth(1);
        add(line);
        X++;
        X++;
        X++;
        X++;
        X++;
        C++;
    }
    
    X=305;
    C=0;
    
    var line = new Line(300, 270, 410, 270);
        line.setColor(BAR);
        line.setLineWidth(1);
        add(line);
        
    var circle = new Circle(10);
    circle.setPosition(190, 320);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(190, 332, 190, 365);
    body.setLineWidth(5);
    add(body);

    var leftLeg = new Line(190, 360, 180, 400);
    leftLeg.setLineWidth(5);
    add(leftLeg);
    
    var rightLeg = new Line(190, 360, 200, 400);
    rightLeg.setLineWidth(5);
    add(rightLeg);
    
    var leftArm = new Line(190, 330, 180, 360);
    leftArm.setLineWidth(5);
    add(leftArm);
    
    var rightArm = new Line(190, 330, 200, 360);
    rightArm.setLineWidth(5);
    add(rightArm);
        
    var txt = new Text("You esacped the prison! But your time freezing", "10pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.white);
    add(txt);
    
    var one = new Text("device only freezes time, not unfreezing time.", "10pt Arial");
    one.setPosition(5, 40);
    one.setColor(Color.white);
    add(one);
    
    var txt = new Text("Maybe you should read the instructions next time...", "10pt Arial");
    txt.setPosition(5, 60);
    txt.setColor(Color.white);
    add(txt);
    
    var ps = new Text("(p.s. press space bar to quick restart)", "10pt Arial");
    ps.setPosition(30, 90);
    ps.setColor(Color.white);
    add(ps);
    
    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(40, 150);
    fail.setColor(Color.red);
    add(fail);
}

function teleporter(){
    removeAll();
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var txt = new Text("The teleporter worked! your out of the jail cell! Sadly though,", "11pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("you teleported into a in the wardens office during a meeting...", "11pt Arial");
    txt.setPosition(5, 40);
    txt.setColor(Color.black);
    add(txt);

    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(110, 190);
    fail.setColor(Color.red);
    add(fail);
    
    stickMan(50, 275);
    stickCopTwo(150, 275);
    
    var desk = new Rectangle(80, 90);
    desk.setPosition(220, 390);
    desk.setColor(BROWN);
    add(desk);
    
    chair();
}

function file(){
    removeAll();
    
    mouseClickMethod(whatsNextB);
    
    stickMan(350, 275);
    jailWindow(250, 250);
    bars();
    roof();
    cellText();
    
    var line = new Line(319,379,339,392);
    line.setColor(DAK);
    line.setLineWidth(7);
    add(line);
    
    var line = new Line(315,377,319,379);
    line.setColor(DAK);
    line.setLineWidth(4);
    add(line);
    
    var line = new Line(339,392,342,394);
    line.setColor(DAK);
    line.setLineWidth(4);
    add(line);
    
    mouseClickMethod(whatsNextB);
    
    
}

function drill(){
    
    removeAll();
    
    var rect = new Rectangle(150, 10);
    rect.setPosition(0, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(150, 10);
    rect.setPosition(getWidth() - 150, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(10, 40);
    rect.setPosition(getWidth() - 150, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(10, 40);
    rect.setPosition(150, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    stickMan(210, 280);
    
    var txt = new Text("Looks like you drilled right into the janitors closet right below", "11pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("your cell. You decide to look around for something useful to", "11pt Arial");
    txt.setPosition(5, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("escape and find 3 things", "11pt Arial");
    txt.setPosition(120, 60);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Which one do you chose?(Click the one you want)", "11pt Arial");
    txt.setPosition(40, 80);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Gun", "11pt Arial");
    txt.setPosition(55, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Janitor Outfit", "11pt Arial");
    txt.setPosition(140, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Gaurd Outfit", "11pt Arial");
    txt.setPosition(280, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var line = new Line(175, 380, 200, 390);
    line.setColor(Color.yellow);
    line.setLineWidth(4);
    add(line);
    var line = new Line(170, 390, 165, 445);
    line.setColor(Color.grey);
    line.setLineWidth(4);
    add(line);
    var line = new Line(195, 400, 165, 445);
    line.setColor(Color.grey);
    line.setLineWidth(4);
    add(line);
    var line = new Line(190, 400, 165, 445);
    line.setColor(Color.grey);
    line.setLineWidth(4);
    add(line);
    var line = new Line(173, 388, 165, 445);
    line.setColor(Color.grey);
    line.setLineWidth(4);
    add(line);
     var line = new Line(180, 395, 168, 429);
    line.setColor(Color.grey);
    line.setLineWidth(10);
    add(line);
    var line = new Line(165, 445, 185, 400);
    line.setColor(Color.grey);
    line.setLineWidth(4);
    add(line);
    var line = new Line(170, 390, 195, 400);
    line.setColor(Color.yellow);
    line.setLineWidth(6);
    add(line);
    var line = new Line(170, 390, 175, 380);
    line.setColor(Color.yellow);
    line.setLineWidth(4);
    add(line);
    var line = new Line(200, 390, 195, 400);
    line.setColor(Color.yellow);
    line.setLineWidth(4);
    add(line);
    
    var line = new Line(167, 400, 187, 415);
    line.setColor(Color.black);
    line.setLineWidth(3);
    add(line);
    var line = new Line(166, 417, 179, 429);
    line.setColor(Color.black);
    line.setLineWidth(3);
    add(line);
    var line = new Line(165, 433, 171, 439);
    line.setColor(Color.black);
    line.setLineWidth(3);
    add(line);
    
    var rect = new Rectangle(60, 220);
    rect.setPosition(5, 260);
    rect.setColor(BROWN);
    add(rect);
    
    var rect = new Rectangle(10, 5);
    rect.setPosition(55, 380);
    rect.setColor(Color.black);
    add(rect);
    
    //drill in  hand
    
    // 3 choices
    //gun
    //You make it to the front door but they are on locked down because you where seen with a gun
    //janitor clothes
    //You run into the actual janitor who was with a police gaurd
    //gaurd clothes
    //another gaurd asks your name
    //Jake or Kevin or Andres
    //Andres is the right answer because he is a new transfer and they let you leave
    
    mouseClickMethod(whatsNextE);
    
}

function gun(){
    
    removeAll();
    
    var ground = new Rectangle(500, 500);
    ground.setPosition(0, 400);
    ground.setColor(Color.black);
    add(ground);
    
    var building = new Rectangle(300, 380);
    building.setPosition(0, 0);
    building.setColor(SIDE);
    add(building);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(20, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(140, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(260, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var line = new Line(110, 405, 110, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var line = new Line(230, 405, 230, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var line = new Line(350, 405, 350, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var sideWalk = new Rectangle(400, 25);
    sideWalk.setPosition(0, 380);
    sideWalk.setColor(Color.grey);
    add(sideWalk);
    
    var door = new Rectangle(40, 100); 
    door.setPosition(30, 280);
    door.setColor(GREY);
    add(door);
    
    var door = new Rectangle(40, 100); 
    door.setPosition(75, 280);
    door.setColor(GREY);
    add(door);
    
    while (B<10){
    
    var line = new Line(30, Q, 70, Q);
    line.setColor(Color.black);
    line.setLineWidth(3);
    add(line);
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    B++;
    
    }
    
    Q = 285;
    B = 0;
    
    while (B<10){
    
    var line = new Line(75, Q, 115, Q);
    line.setColor(Color.black);
    line.setLineWidth(3);
    add(line);
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    Q++;
    B++;
    
    }
    
    Q = 285;
    B = 0;
    
    while (C<20){
        var line = new Line(X, 250, X, 380);
        line.setColor(BAR);
        line.setLineWidth(1);
        add(line);
        X++;
        X++;
        X++;
        X++;
        X++;
        C++;
    }
    X=305;
    C=0;
    
    var line = new Line(300, 270, 410, 270);
        line.setColor(BAR);
        line.setLineWidth(1);
        add(line);
        
   
        
    var txt = new Text("So close, but since prisoners having a gun is", "10pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.white);
    add(txt);
    
    var one = new Text("a safty hazard, the gaurds have locked", "10pt Arial");
    one.setPosition(20, 40);
    one.setColor(Color.white);
    add(one);
    
    var txt = new Text("down the prison.", "10pt Arial");
    txt.setPosition(85, 60);
    txt.setColor(Color.white);
    add(txt);
    
    var ps = new Text("(p.s. press space bar to quick restart)", "10pt Arial");
    ps.setPosition(30, 90);
    ps.setColor(Color.white);
    add(ps);
    
    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(50, 150);
    fail.setColor(Color.red);
    add(fail);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

function janitorOutfit(){
    
    removeAll();
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var txt = new Text("Luckly the janitors outfit that you found is the right size but", "11pt Arial");
    txt.setPosition(10, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("But when looking for a way out, you got really unlucky and", "11pt Arial");
    txt.setPosition(10, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("ran into the real janitor.", "11pt Arial");
    txt.setPosition(120, 60);
    txt.setColor(Color.black);
    add(txt);
    
    var ps = new Text("(p.s. press space bar to quick restart)", "11pt Arial");
    ps.setPosition(80, 90);
    ps.setColor(Color.black);
    add(ps);
    
    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(115, 150);
    fail.setColor(Color.red);
    add(fail);
    
    var x = 310;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(SIDE);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(SIDE);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(SIDE);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(SIDE);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    rightArm.setColor(SIDE);
    add(rightArm);
    
    
    var x = 30;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(SIDE);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(SIDE);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(SIDE);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(SIDE);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 45, y + 80);
    rightArm.setLineWidth(10);
    rightArm.setColor(SIDE);
    add(rightArm);
    
    
    var x = 110;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    
    var stick = new Line(285, 340, 285, 450);
    stick.setLineWidth(10);
    stick.setColor(BROWN);
    add(stick);
    
    var rect = new Rectangle(40, 40);
    rect.setPosition(265, 450);
    rect.setColor(MOP);
    add(rect);
    
    var rect = new Rectangle(20, 20);
    rect.setPosition(250, 435);
    rect.setColor(MOP);
    add(rect);
    
    
    
    
    
    
    
    
}

function gaurdOutfit(){
    
    removeAll();
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var txt = new Text("You put on the outfit and it works. you pass a few gaurds", "11pt Arial");
    txt.setPosition(15, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("and finally the exit is in sight, but you get stopped by a", "11pt Arial");
    txt.setPosition(20, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("gaurd near the entrance who asks you for your name.", "11pt Arial");
    txt.setPosition(25, 60);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Which one do you chose?(Click the one you want)", "11pt Arial");
    txt.setPosition(40, 80);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Jaccob", "11pt Arial");
    txt.setPosition(55, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Andres", "11pt Arial");
    txt.setPosition(180, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Nick", "11pt Arial");
    txt.setPosition(300, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var rect = new Rectangle(60, 270);
    rect.setPosition(20, 260);
    rect.setColor(GLASS);
    add(rect);
    var rect = new Rectangle(60, 270);
    rect.setPosition(85, 260);
    rect.setColor(GLASS);
    add(rect);
    
    
    
    var x = 210;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var x = 340;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(x,  y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var txt = new Text("What is your name officer?", "10pt Arial");
    txt.setPosition(130, 255);
    txt.setColor(Color.black);
    add(txt);
    
    var line = new Line(195, 260, 210, 275);
    line.setColor(Color.black);
    line.setLineWidth(1);
    add(line);

    var line = new Line(225, 260, 210, 275);
    line.setColor(Color.black);
    line.setLineWidth(1);
    add(line);
    
    
    
    
    
    mouseClickMethod(whatsNextF);
}

function nick(){
    
    removeAll();
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 170);
    rect.setColor(Color.grey);
    add(rect);
    
    var txt = new Text("My name is Nick Simons.", "11pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("No, because I just saw Nick in the staff lounge.", "11pt Arial");
    txt.setPosition(95, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Nice try prisoner!", "11pt Arial");
    txt.setPosition(285, 60);
    txt.setColor(Color.black);
    add(txt);
    //the gaurd points his gun at the prisoner
    
    
    
    
    var x = 210;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 60, y + 65);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var x = 340;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 40, y + 20);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 40, y + 20);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var handle = new Line(267, y + 55, 265, y + 70);
    handle.setLineWidth(5);
    handle.setColor(Color.black);
    add(handle);
    
    var handle = new Line(267, y + 55, 287, y + 57);
    handle.setLineWidth(5);
    handle.setColor(Color.black);
    add(handle);
    
    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(115, 150);
    fail.setColor(Color.red);
    add(fail);
   
    
    
}
//small doors in the back to show how close they where
function jaccob(){
    
    removeAll();
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 170);
    rect.setColor(Color.grey);
    add(rect);
    
    var txt = new Text("My name is Jaccob Morotti.", "11pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Nice try bud but if you look closely", "11pt Arial");
    txt.setPosition(175, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("thats my name idiot!", "11pt Arial");
    txt.setPosition(265, 60);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Nice try prisoner!", "11pt Arial");
    txt.setPosition(285, 80);
    txt.setColor(Color.black);
    add(txt);
    //the gaurd points his gun at the prisoner
    
    
    
    
    var x = 210;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 60, y + 65);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var x = 340;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 40, y + 20);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 40, y + 20);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var handle = new Line(267, y + 55, 265, y + 70);
    handle.setLineWidth(5);
    handle.setColor(Color.black);
    add(handle);
    
    var handle = new Line(267, y + 55, 287, y + 57);
    handle.setLineWidth(5);
    handle.setColor(Color.black);
    add(handle);
    
    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(115, 150);
    fail.setColor(Color.red);
    add(fail);
    
    
    
    
    //jaccob morotti
}

function andres(){
    
    
    //Andres Dominguez
    removeAll();
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var txt = new Text("The names Andres Dominguez.", "11pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Oh, you must be the new guy.", "11pt Arial");
    txt.setPosition(200, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Ya, my shift just ended.", "11pt Arial");
    txt.setPosition(5, 60);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Ok, well have a great day and", "11pt Arial");
    txt.setPosition(200, 80);
    txt.setColor(Color.black);
    add(txt);
    var txt = new Text("nice meeting you.", "11pt Arial");
    txt.setPosition(282, 100);
    txt.setColor(Color.black);
    add(txt);
    var txt = new Text("Thanks, you too, and same,", "11pt Arial");
    txt.setPosition(5, 120);
    txt.setColor(Color.black);
    add(txt);
    var txt = new Text("hopefully were on shift together some time.", "11pt Arial");
    txt.setPosition(5, 140);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("(Press 'C' to continue)", "13pt Arial");
    txt.setPosition(120, 180);
    txt.setColor(Color.black);
    add(txt);
    
    var rect = new Rectangle(60, 270);
    rect.setPosition(20, 260);
    rect.setColor(GLASS);
    add(rect);
    var rect = new Rectangle(60, 270);
    rect.setPosition(85, 260);
    rect.setColor(GLASS);
    add(rect);
    
    
    
    var x = 210;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var x = 340;
    var y = 280;
    
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    
   
    
    
    keyDownMethod(keyUp);
}

function keyUp(e) {
	if(e.keyCode == Keyboard.letter('c')){
		done();
	}
}


    
function done(){
    
    removeAll();
    
    var ground = new Rectangle(500, 500);
    ground.setPosition(0, 400);
    ground.setColor(Color.black);
    add(ground);
    
    var building = new Rectangle(300, 380);
    building.setPosition(0, 0);
    building.setColor(SIDE);
    add(building);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(20, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(140, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var yellow = new Rectangle(60, 10);
    yellow.setPosition(260, 410);
    yellow.setColor(Color.yellow);
    add(yellow);
    
    var line = new Line(110, 405, 110, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var line = new Line(230, 405, 230, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var line = new Line(350, 405, 350, 500);
    line.setColor(Color.white);
    line.setLineWidth(10);
    add(line);

    var sideWalk = new Rectangle(400, 25);
    sideWalk.setPosition(0, 380);
    sideWalk.setColor(Color.grey);
    add(sideWalk);
    
    var door = new Rectangle(40, 100); 
    door.setPosition(30, 280);
    door.setColor(GLASS);
    add(door);
    
    var door = new Rectangle(40, 100); 
    door.setPosition(75, 280);
    door.setColor(GLASS);
    add(door);
    
    while (C<20){
        var line = new Line(X, 250, X, 380);
        line.setColor(BAR);
        line.setLineWidth(1);
        add(line);
        X++;
        X++;
        X++;
        X++;
        X++;
        C++;
    }
    
    X=305;
    C=0;
    
    var line = new Line(300, 270, 410, 270);
        line.setColor(BAR);
        line.setLineWidth(1);
        add(line);
        
    var circle = new Circle(10);
    circle.setPosition(190, 318);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(190, 332, 190, 365);
    body.setLineWidth(5);
    body.setColor(Color.blue);
    add(body);

    var leftLeg = new Line(190, 360, 180, 400);
    leftLeg.setLineWidth(5);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(190, 360, 200, 400);
    rightLeg.setLineWidth(5);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(190, 330, 180, 360);
    leftArm.setLineWidth(5);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(190, 330, 200, 360);
    rightArm.setLineWidth(5);
    rightArm.setColor(Color.blue);
    add(rightArm);
    
    var txt = new Text("Front Door Escape!", "30pt Arial");
    txt.setPosition(9, 100);
    txt.setColor(Color.purple);
    add(txt);
    
    var txt = new Text("Press Space Bar To Restart", "15pt Arial");
    txt.setPosition(2, 200);
    txt.setColor(Color.grey);
    add(txt);
    
    
    
    
    
    
    
    
    
}

//function keyUp(e) {
//	if(e.keyCode == Keyboard.letter('')){
//		levelOne();
//	}
//}


function left(){
    
    removeAll();
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 200);
    rect.setColor(Color.grey);
    add(rect);
    
    var txt = new Text("WOOPS! Wrong door. I don't think prisoners are allowed", "11pt Arial");
    txt.setPosition(10, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("to be in the break room...", "11pt Arial");
    txt.setPosition(125, 40);
    txt.setColor(Color.black);
    add(txt);

    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(110, 190);
    fail.setColor(Color.red);
    add(fail);
    
    var fail = new Text("Right twix is better", "10pt Arial");
    fail.setPosition(248, 250);
    fail.setColor(Color.black);
    add(fail);
    
    var line = new Line(285, 260, 300, 270);
    line.setColor(Color.black);
    line.setLineWidth(1);
    add(line);

    var line = new Line(315, 260, 300, 270);
    line.setColor(Color.black);
    line.setLineWidth(1);
    add(line);

    var rect = new Rectangle(120, 200);
    rect.setPosition(getWidth() - 385, 240);
    rect.setColor(Color.black);
    add(rect);
    
    var lunch = new Text("LUNCH SPECIALS", "10pt Arial");
    lunch.setPosition(17, 255);
    lunch.setColor(Color.white);
    add(lunch);
    
    stickManH(210, 275);
    stickCopTwo(370, 275);
    stickCopTwo(300, 275);
    
    var rect = new Rectangle(10, 250);
    rect.setPosition(getWidth() - 150, 260);
    rect.setColor(BROWN);
    add(rect);
    
    var rect = new Rectangle(5, 250);
    rect.setPosition(getWidth() - 250, 260);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(100, 5);
    rect.setPosition(getWidth() - 250, 260);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(7, 10);
    rect.setPosition(getWidth() - 155, 378);
    rect.setColor(Color.grey);
    add(rect);
    
    stickCopThree(50, 275);
    
    var apple = new Circle(6);
    apple.setPosition(110, 375);
    apple.setColor(Color.red);
    add(apple);
    
    var rect = new Rectangle(50, 5);
    rect.setPosition(getWidth() - 305, 380);
    rect.setColor(Color.orange);
    add(rect);
    
    var rect = new Rectangle(10, 20);
    rect.setPosition(getWidth() - 280, 360);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(6, 18);
    rect.setPosition(getWidth() - 278, 360);
    rect.setColor(Color.cyan);
    add(rect);
}

//add, "right twix is better than left" in the code above.


//save your friends(control center) or escape
function right(){
    
   removeAll();
    
    outLine();
    
    words();
    
    vent();
    
}

function leftTwo(){
    
    removeAll();
    
    var rect = new Rectangle(300, 500);
    rect.setPosition(0, 0);
   rect.setColor(SIDE);
   add(rect);
   
   var rect = new Rectangle(150, 30);
   rect.setPosition(250, 450);
   rect.setColor(Color.green);
   add(rect);
   
   var line = new Line(240, 470, 295, 435);
   line.setColor(SIDE);
   line.setLineWidth(30);
   add(line);
   
   var rect = new Rectangle(5, 480);
   rect.setPosition(250, 0);
   rect.setColor(Color.black);
   add(rect);
   
   var rect = new Rectangle(5, 450);
   rect.setPosition(300, 0);
   rect.setColor(Color.black);
   add(rect);
   
   luckyEscape();
   
   var line = new Line(295, 359, 295, 450);
   line.setColor(Color.black);
   line.setLineWidth(35);
   add(line);
   
   var line = new Line(255, 465, 285, 445);
   line.setColor(Color.black);
   line.setLineWidth(5);
   add(line);
   
   var line = new Line(255, 375, 285, 360);
   line.setColor(Color.black);
   line.setLineWidth(5);
   add(line);
   
   var line = new Line(258, 353, 278, 347);
   line.setColor(Color.white);
   line.setLineWidth(13);
   add(line);
   
    var x = 150;
    var y = 70;
   
    var circle = new Circle(10);
    circle.setPosition(190 + x, 320 + y);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(190 + x, 332 + y, 190 + x, 365 + y);
    body.setLineWidth(5);
    add(body);

    var leftLeg = new Line(190 + x, 360 + y, 180 + x, 400 + y);
    leftLeg.setLineWidth(5);
    add(leftLeg);
    
    var rightLeg = new Line(190 + x, 360 + y, 200 + x, 400 + y);
    rightLeg.setLineWidth(5);
    add(rightLeg);
    
    var leftArm = new Line(190 + x, 330 + y, 180 + x, 360 + y);
    leftArm.setLineWidth(5);
    add(leftArm);
    
    var rightArm = new Line(190 + x, 330 + y, 200 + x, 360 + y);
    rightArm.setLineWidth(5);
    add(rightArm);
    
    T=0;
}

function rightTwo(){
    //Two rights do not make a left...   
    //what are you doing out of your cell prisoner?
    //red light and alarm sound triggered
    
    removeAll();
    
    var txt = new Text("You know how the saying goes...", "15pt Arial");
    txt.setPosition(50, 20);
    txt.setColor(Color.black);
    add(txt);
    var txt = new Text("Two lefts don't make a right", "15pt Arial");
    txt.setPosition(70, 55);
    txt.setColor(Color.black);
    add(txt);
    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(110, 190);
    fail.setColor(Color.red);
    add(fail);
    
    var rect = new Rectangle(110, 110);
    rect.setPosition(160, 250);
    rect.setColor(SIDE);
    add(rect);
    
    var rect = new Rectangle(110, 110);
    rect.setPosition(160, 250);
    rect.setColor(SIDE);
    add(rect);
    
    var rect = new Rectangle(100, 100);
    rect.setPosition(165, 255);
    rect.setColor(Color.white);
    add(rect);
    
    var rect = new Rectangle(100, 80);
    rect.setPosition(165, 255);
    rect.setColor(GLASSTWO);
    add(rect);
    
    var body = new Line(215, 335, 215, 355);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);

    var body = new Line(215, 315, 215, 335);
    body.setLineWidth(10);
    body.setColor(NEWBLUE);
    add(body);
    
    var circle = new Circle(20);
    circle.setPosition(215, 295);
    circle.setColor(NEWBLUE);
    add(circle);
    
    var txt = new Text("WHAT ARE YOU DOING OUT OF YOUR CELL!", "11pt Arial");
    txt.setPosition(60, 245);
    txt.setColor(Color.black);
    add(txt);
    
    var line = new Line(190, 250, 215, 270);
    line.setColor(Color.black);
    line.setLineWidth(1);
    add(line);
    
    var line = new Line(240, 250, 215, 270);
    line.setColor(Color.black);
    line.setLineWidth(1);
    add(line);
    
    roof();
    
    stickMan(100, 275);
    
    var rect = new Rectangle(170, 5);
    rect.setPosition(130, 360);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(30, 20);
    rect.setPosition(35, 265);
    rect.setColor(Color.red);
    add(rect);
    
    var rect = new Rectangle(30, 20);
    rect.setPosition(5, 265);
    rect.setColor(Color.red);
    add(rect);
    
    var rect = new Rectangle(20, 30);
    rect.setPosition(25, 275);
    rect.setColor(Color.red);
    add(rect);
    
    var rect = new Rectangle(20, 30);
    rect.setPosition(25, 245);
    rect.setColor(Color.red);
    add(rect);
    
    var circle = new Circle(11);
    circle.setPosition(35, 275);
    circle.setColor(Color.black);
    add(circle);
    var circle = new Circle(9);
    circle.setPosition(35, 275);
    circle.setColor(Color.red);
    add(circle);
    
    
    T=0;
}

function ventOut(){
    
    removeAll();
    
    var rect = new Rectangle(300, 500);
    rect.setPosition(0, 0);
   rect.setColor(SIDE);
   add(rect);
   
   var rect = new Rectangle(150, 30);
   rect.setPosition(250, 450);
   rect.setColor(Color.green);
   add(rect);
   
   var line = new Line(240, 470, 295, 435);
   line.setColor(SIDE);
   line.setLineWidth(30);
   add(line);
   
   var rect = new Rectangle(5, 480);
   rect.setPosition(250, 0);
   rect.setColor(Color.black);
   add(rect);
   
   var rect = new Rectangle(5, 450);
   rect.setPosition(300, 0);
   rect.setColor(Color.black);
   add(rect);
   
   sneakyEscape();
   
   var line = new Line(260, 430, 295, 420);
   line.setColor(Color.black);
   line.setLineWidth(30);
   add(line);
   
    var x = 150;
    var y = 70;
   
    var circle = new Circle(10);
    circle.setPosition(190 + x, 320 + y);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(190 + x, 332 + y, 190 + x, 365 + y);
    body.setLineWidth(5);
    add(body);

    var leftLeg = new Line(190 + x, 360 + y, 180 + x, 400 + y);
    leftLeg.setLineWidth(5);
    add(leftLeg);
    
    var rightLeg = new Line(190 + x, 360 + y, 200 + x, 400 + y);
    rightLeg.setLineWidth(5);
    add(rightLeg);
    
    var leftArm = new Line(190 + x, 330 + y, 180 + x, 360 + y);
    leftArm.setLineWidth(5);
    add(leftArm);
    
    var rightArm = new Line(190 + x, 330 + y, 200 + x, 360 + y);
    rightArm.setLineWidth(5);
    add(rightArm);
   
   T=0;
}

function sneakyEscape(){
    var txt = new Text("Sneaky Escape!", "30pt Arial");
    txt.setPosition(2, 100);
    txt.setColor(Color.green);
    add(txt);
    
    var txt = new Text("Press Space Bar To Restart", "15pt Arial");
    txt.setPosition(2, 200);
    txt.setColor(Color.grey);
    add(txt);
    
    
}

function luckyEscape(){
    var txt = new Text("Lucky Escape!", "30pt Arial");
    txt.setPosition(2, 100);
    txt.setColor(Color.orange);
    add(txt);
    
    var txt = new Text("Press Space Bar To Restart", "15pt Arial");
    txt.setPosition(2, 200);
    txt.setColor(Color.grey);
    add(txt);
    
    
}

function outLine(){
    
    var line = new Line(30, 155, 90, 230);
    line.setColor(Color.black);
    line.setLineWidth(28);
    add(line);
    
    var line = new Line(300, 230, 360, 155);
    line.setColor(Color.black);
    line.setLineWidth(34);
    add(line);
    
    var rect = new Rectangle(230, 115);
    rect.setPosition(80, 150);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(400, 50);
    rect.setPosition(5, 150);
    rect.setColor(Color.black);
    add(rect);
     
    var line = new Line(0, 155, 55, 225);
    line.setColor(Color.white);
    line.setLineWidth(19);
    add(line);
    
    var line = new Line(400, 155, 320, 240);
    line.setColor(Color.white);
    line.setLineWidth(19);
    add(line);
    //*
    var rect = new Rectangle(20, 40);
    rect.setPosition(5, 170);
    rect.setColor(Color.white);
    add(rect);
    //-
    var rect = new Rectangle(25, 40);
    rect.setPosition(371, 171);
    rect.setColor(Color.white);
    add(rect);
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 140);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 400);
    rect.setPosition(getWidth() - 5, 150);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 400);
    rect.setPosition(getWidth() - 400, 150);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(getWidth(), 10);
    rect.setPosition(0, 475);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(230, 5);
    rect.setPosition(80, 240);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(230, 5);
    rect.setPosition(80, 400);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 160);
    rect.setPosition(305, 240);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 160);
    rect.setPosition(getWidth() - 320, 240);
    rect.setColor(Color.grey);
    add(rect);
    
    var line = new Line(82, 242, getWidth() - 400, 145);
    line.setColor(Color.grey);
    line.setLineWidth(5);
    add(line);
    
    var line = new Line(81, 402, getWidth() - 400, getHeight());
    line.setColor(Color.grey);
    line.setLineWidth(5);
    add(line);

    var line = new Line(306, 245, getWidth() - 5, 149);
    line.setColor(Color.grey);
    line.setLineWidth(5);
    add(line);
    
    var line = new Line(306, 400, getWidth(), getHeight());
    line.setColor(Color.grey);
    line.setLineWidth(5);
    add(line);
    
    var rect = new Rectangle(230, 5);
    rect.setPosition(80, 260);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(230, 5);
    rect.setPosition(80, 380);
    rect.setColor(Color.grey);
    add(rect);
    
    
}

function words(){
    
    var txt = new Text("You have come across an empty hallway, but it looks like", "11pt Arial");
    txt.setPosition(10, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("you have have more choices of where to go, but keep your", "11pt Arial");
    txt.setPosition(5, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("eyes out so you don't miss anything.", "11pt Arial");
    txt.setPosition(80, 60);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Which one do you chose?(Click the one you want)", "11pt Arial");
    txt.setPosition(40, 80);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("LEFT", "11pt Arial");
    txt.setPosition(65, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("RIGHT", "11pt Arial");
    txt.setPosition(295, 110);
    txt.setColor(Color.black);
    add(txt);
    
}

function vent(){
    var rect = new Rectangle(130, 5);
    rect.setPosition(135, 180);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(130, 5);
    rect.setPosition(135, 220);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 40);
    rect.setPosition(260, 180);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 40);
    rect.setPosition(135, 180);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 40);
    rect.setPosition(200, 180);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 40);
    rect.setPosition(165, 180);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 40);
    rect.setPosition(230, 180);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(130, 5);
    rect.setPosition(135, 193);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(130, 5);
    rect.setPosition(135, 207);
    rect.setColor(Color.grey);
    add(rect);
    
    mouseClickMethod(whatsNextD);
}


function windowA(){
    
    removeAll();
    
    var building = new Rectangle(200, 500);
    building.setPosition(0, 0);
    building.setColor(SIDE);
    add(building);
    
    var circle = new Circle(9);
    circle.setPosition(300, 200);
    circle.setColor(Color.black);
    add(circle);
    
    var line = new Line(250, 200, 300, 200);
    line.setColor(Color.black);
    line.setLineWidth(4);
    add(line);
    
    var line = new Line(250, 200, 230, 195);
    line.setColor(Color.black);
    line.setLineWidth(4);
    add(line);
    
    var line = new Line(250, 200, 240, 205);
    line.setColor(Color.black);
    line.setLineWidth(4);
    add(line);
    
    var line = new Line(260, 192, 275, 200);
    line.setColor(Color.black);
    line.setLineWidth(4);
    add(line);
    
    var line = new Line(265, 207, 275, 200);
    line.setColor(Color.black);
    line.setLineWidth(4);
    add(line);
    
    var fail = new Text("FAILURE!", "30pt Arial");
    fail.setPosition(110, 170);
    fail.setColor(Color.red);
    add(fail);
    
    var txt = new Text("Next time, Look ", "11pt Arial");
    txt.setPosition(95, 300);
    txt.setColor(Color.white);
    add(txt);
    var txt = new Text("before u jump.", "11pt Arial");
    txt.setPosition(205, 300);
    txt.setColor(SIDE);
    add(txt);
}


function cellDoor(){
    
    removeAll();
    
    
    W=0;
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 150);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 370);
    rect.setColor(Color.grey);
    add(rect);
    
    stickMan(200, 275);
    
    var rect = new Rectangle(80, 180);
    rect.setPosition(getWidth() - 120, 200);
    rect.setColor(BROWN);
    add(rect);
    
    var rect = new Rectangle(80, 180);
    rect.setPosition(40, 200);
    rect.setColor(BROWN);
    add(rect);
    
    var rect = new Rectangle(15, 5);
    rect.setPosition(105, 300);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(15, 5);
    rect.setPosition(getWidth() - 55, 300);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(80, 5);
    rect.setPosition(getWidth() - 120, 375);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(80, 5);
    rect.setPosition(getWidth() - 360, 375);
    rect.setColor(Color.yellow);
    add(rect);
    
    var txt = new Text("You get lost and come aross two wooden doors that look the exact same.", "11pt Arial");
    txt.setPosition(5, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("exact same. Which door do you chose?", "11pt Arial");
    txt.setPosition(80, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Which one do you chose?(Click the one you want)", "11pt Arial");
    txt.setPosition(40, 65);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("LEFT", "11pt Arial");
    txt.setPosition(65, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("RIGHT", "11pt Arial");
    txt.setPosition(295, 110);
    txt.setColor(Color.black);
    add(txt);
    
    mouseClickMethod(whatsNextC);
}

function cellText(){
    var txt = new Text("Now that you have a file, you have two", "11pt Arial");
    txt.setPosition(80, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("choices of where to go...", "11pt Arial");
    txt.setPosition(120, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Which one do you chose?(Click the one you want)", "11pt Arial");
    txt.setPosition(40, 65);
    txt.setColor(Color.black);
    add(txt);
    
    
    var txt = new Text("Window", "11pt Arial");
    txt.setPosition(70, 110);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Cell Door", "11pt Arial");
    txt.setPosition(210, 110);
    txt.setColor(Color.black);
    add(txt);
}

function stickCopThree(x, y){
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);
    
    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 67, x + 50, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    
}

// function stickManH(x, y){
//     var circle = new Circle(20);
//     circle.setPosition(x, y + 20);
//     circle.setColor(Color.black);
//     add(circle);
    
//     var body = new Line(x, y + 42, x, y + 130);
//     body.setLineWidth(10);
//     add(body);

//     var leftLeg = new Line(x, y + 130, x - 20, y + 200);
//     leftLeg.setLineWidth(10);
//     add(leftLeg);
    
//     var rightLeg = new Line(x, y + 130, x + 20, y + 200);
//     rightLeg.setLineWidth(10);
//     add(rightLeg);
    
//     var leftArm = new Line(x, y + 60, x - 20, y + 110);
//     leftArm.setLineWidth(10);
//     add(leftArm);
    
//     var rightArm = new Line(x, y + 60, x + 35, y + 105);
//     rightArm.setLineWidth(10);
//     add(rightArm);
// }

function startingText(){
    var rect = new Rectangle(1000, 1000);
    rect.setColor(Color.blue);
    add(rect);
    
    var txt = new Text("Welcome To Prison Break", "20pt Arial");
    txt.setPosition(48, 50);
    txt.setColor(Color.orange);
    add(txt);
    
    var how = new Text("How To Play", "15pt Arial");
    how.setPosition(140, 78);
    how.setColor(Color.red);
    add(how);
    
    var begin = new Text("Press Space-Bar To Start", "25pt Arial");
    begin.setPosition(10, 400);
    begin.setColor(Color.yellow);
    add(begin);
    
    var ps1 = new Text("P.S. Every time you press space bar, your game will", "10pt Arial");
    var ps2 = new Text("restart if you want to quick restart.", "10pt Arial");
    ps1.setPosition(45, 420);
    ps1.setColor(Color.yellow);
    add(ps1);
    ps2.setPosition(100, 440);
    ps2.setColor(Color.yellow);
    add(ps2);
    
    var intro1 = new Text("This is a single player game in which you go room by room with", "10pt Arial");
    var intro2 = new Text("2-4 choices of what places to go or actions to make.", "10pt Arial");
    var intro3 = new Text("Your decitions will decide your fate of death or one of many", "10pt Arial");
    var intro4 = new Text("escapes from the prison and the cops.", "10pt Arial");
    var intro5 = new Text("A quick little side note: When answering these questions, the", "10pt Arial");
    var intro6 = new Text("answers will not always be logical or play out how you expected ", "10pt Arial");
    var intro7 = new Text("them to. As a token of my gratitude that you are playing my game, I ", "10pt Arial");
    var intro8 = new Text("will give you a present to get you stared!", "10pt Arial");
    
    intro1.setPosition(10, 100);
    intro1.setColor(Color.white);
    add(intro1);
    intro2.setPosition(10, 130);
    intro2.setColor(Color.white);
    add(intro2);
    intro3.setPosition(10, 160);
    intro3.setColor(Color.white);
    add(intro3);
    intro4.setPosition(10, 190);
    intro4.setColor(Color.white);
    add(intro4);
    intro5.setPosition(10, 220);
    intro5.setColor(Color.white);
    add(intro5);
    intro6.setPosition(10, 250);
    intro6.setColor(Color.white);
    add(intro6);
    intro7.setPosition(10, 280);
    intro7.setColor(Color.white);
    add(intro7);
    intro8.setPosition(10, 310);
    intro8.setColor(Color.white);
    add(intro8);
}

function stickMan(x, y){
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    add(rightArm);
}

function stickCop(x, y){
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);
    
    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 67, x + 50, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 55, y + 80);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
}

function stickManH(x, y){
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.black);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    add(body);

    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 35, y + 105);
    rightArm.setLineWidth(10);
    add(rightArm);
}

function jailWindow(x, y){
    var rectOne = new Rectangle(75, 75);
    rectOne.setColor(Color.grey);
    rectOne.setPosition(x-5, y-5);
    add(rectOne);
    
    var rectOne = new Rectangle(70, 70);
    rectOne.setColor(COLOR);
    rectOne.setPosition(x, y);
    add(rectOne);
    
    //var bars = 
    var oval = new Oval(10, 70);
    oval.setPosition(x + 35, y + 35);
    oval.setColor(Color.black);
    add(oval); 
    
    var oval = new Oval(10, 70);
    oval.setPosition(x + 15, y + 35);
    oval.setColor(Color.black);
    add(oval);
    
    var oval = new Oval(10, 70);
    oval.setPosition(x + 55, y + 35);
    oval.setColor(Color.black);
    add(oval);
}

function cake(x, y){
    var rect = new Rectangle(50, 5);
    rect.setPosition(x, y);
    rect.setColor(Color.grey);
    add(rect);
    
    var oval = new Oval(2, 10);
    oval.setPosition(x + 35, y - 30);
    oval.setColor(Color.black);
    add(oval);
    
    var oval = new Oval(2, 10);
    oval.setPosition(x + 15, y - 30);
    oval.setColor(Color.black);
    add(oval);
    
    var oval = new Oval(2, 10);
    oval.setPosition(x + 25, y - 30);
    oval.setColor(Color.black);
    add(oval);
    
    var rect = new Rectangle(40, 30);
    rect.setPosition(x+5, y-27);
    rect.setColor(COLORTWO);
    add(rect);
}

function bars(){
    var rect = new Rectangle(55, 5);
    rect.setPosition(110, 380);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(10, 500);
    rect.setPosition(130, 200);
    rect.setColor(Color.grey);
    add(rect); 
    
    
}

function roof(){
    var rect = new Rectangle(500, 10);
    rect.setPosition(0, 200);
    rect.setColor(Color.grey);
    add(rect);
    
}

function speachBubble(){
    var oval = new Oval(130, 50);
    oval.setPosition(65, 240);
    oval.setColor(Color.blue);
    add(oval);
    
    var oval = new Oval(129, 49);
    oval.setPosition(65, 240);
    oval.setColor(Color.white);
    add(oval);
    
    var txt = new Text("You got a present", "11pt Arial");
    txt.setPosition(10, 245);
    txt.setColor(Color.black);
    add(txt);
}

function topText(){
    var txt = new Text("In the cake there was 4 Items: File, Teleporter, Time-", "11pt Arial");
    txt.setPosition(25, 20);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Freezing Device, and a Drill.", "11pt Arial");
    txt.setPosition(105, 40);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Which one do you chose?(Click the one you want)", "11pt Arial");
    txt.setPosition(40, 65);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("File", "11pt Arial");
    txt.setPosition(10, 90);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Teleporter", "11pt Arial");
    txt.setPosition(70, 90);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Time-Freezing Device", "11pt Arial");
    txt.setPosition(170, 90);
    txt.setColor(Color.black);
    add(txt);
    
    var txt = new Text("Drill", "11pt Arial");
    txt.setPosition(350, 90);
    txt.setColor(Color.black);
    add(txt);
}

function stickCopTwo(x, y){
    var circle = new Circle(20);
    circle.setPosition(x, y + 20);
    circle.setColor(Color.blue);
    add(circle);
    
    var body = new Line(x, y + 42, x, y + 130);
    body.setLineWidth(10);
    body.setColor(Color.blue);
    add(body);
    
    var leftLeg = new Line(x, y + 130, x - 20, y + 200);
    leftLeg.setLineWidth(10);
    leftLeg.setColor(Color.blue);
    add(leftLeg);
    
    var rightLeg = new Line(x, y + 130, x + 20, y + 200);
    rightLeg.setLineWidth(10);
    rightLeg.setColor(Color.blue);
    add(rightLeg);
    
    var leftArm = new Line(x, y + 60, x - 20, y + 110);
    leftArm.setLineWidth(10);
    leftArm.setColor(Color.blue);
    add(leftArm);
    
    var rightArm = new Line(x, y + 60, x + 20, y + 110);
    rightArm.setLineWidth(10);
    rightArm.setColor(Color.blue);
    add(rightArm);
}

function chair(){
    var rect = new Rectangle(40, 10);
    rect.setPosition(345, 420);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(5, 40);
    rect.setPosition(363, 430);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(30, 5);
    rect.setPosition(350, 470);
    rect.setColor(Color.black);
    add(rect);
    
    var rect = new Rectangle(5, 5);
    rect.setPosition(350, 475);
    rect.setColor(Color.grey);
    add(rect);
    
    var rect = new Rectangle(5, 5);
    rect.setPosition(375, 475);
    rect.setColor(Color.grey);
    add(rect);
    
    var circle = new Circle(20);
    circle.setPosition(365, 330);
    circle.setColor(ORANGE);
    add(circle);
    
    var rect = new Rectangle(10, 55);
    rect.setPosition(360, 352);
    rect.setColor(ORANGE);
    add(rect);
    
    var rect = new Rectangle(50, 10);
    rect.setPosition(320, 410);
    rect.setColor(ORANGE);
    add(rect);
    
    var rect = new Rectangle(10, 45);
    rect.setPosition(320, 423);
    rect.setColor(ORANGE);
    add(rect);
    
    var device = new Line(65, 390, 85, 380);
    device.setLineWidth(10);
    device.setColor(Color.grey);
    add(device);

    var circle = new Circle(4);
    circle.setPosition(72, 386);
    circle.setColor(Color.red);
    add(circle);

}

//secret rooms
