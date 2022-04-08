// console.log('main.js loaded');
$(document).ready(function() {
    'use strict';
    // console.log('main.js loaded');
    paper.install(window);  //installs Paper.js in the global scope
    paper.setup(document.getElementById('mainCanvas')); //attaches Paper.js to the canvas, and prepares Paper.js for drawing
    // TODO
    //a green circle in the middle of the canvas
    /*
        // creates a circle object, three arguments: the x and y coordinates of the center of the circle, and the radius of the circle
    var c = Shape.Circle(200, 200, 50); 
        //sets the fill color, which is distinct from the outline color (called the stroke in Paper.js parlance)
    c.fillColor = 'green'; 
    paper.view.draw(); 
        // tells Paper.js to actually draw something to the screen
    */

    /* var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
        c = Shape.Circle(x, y, 20);
        c.fillColor = 'green';
        }
    }    */

    //create our tool object
    var tool = new Tool();
    //attach an event handler to it
    tool.onMouseDown = function(event) {
        // var c = Shape.Circle(event.point.x, event.point.y, 20);
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
});

/**
 * What jQuery is doing for us here is making sure that the browser has loaded all of the
HTML before executing our JavaScript (which is currently just a single console.log).
Whenever we’re working with browser-based JavaScript, we’ll be doing this just to
establish the practice: any JavaScript you write will go between the $(docu
ment).ready(function() { and }); lines. Also note the line 'use strict'; this is
something we’ll learn more about later, but basically this tells the JavaScript inter‐
preter to treat your code more rigorously. While that may not sound like a good thing
at first, it actually helps you write better JavaScript, and prevents common and
difficult-to-diagnose problems.
 */