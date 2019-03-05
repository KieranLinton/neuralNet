/* eslint-env es6 */

function setup() {
    this.n = new neuralNet(10,5,2);
    var canvas = createCanvas(document.getElementById('canvasDiv').clientWidth, document.getElementById('canvasDiv').clientHeight);
    
    canvas.parent('canvasDiv');
   
}
function draw(){
    background(0);
    
    
    
    //row1
    let currentPos1 = 20;
    for(let i = 0; i < n.layer1.length; i++) {
        circle(20, currentPos1, 10);
        currentPos1 += 30;
    }
    currentPos1 = 20;
    
    //row2
    let currentPos2 = 20;
    for(let i = 0; i < n.layer2.length; i++) {
        circle(80, currentPos2, 10);
        currentPos2 += 30;
    }
    currentPos2 = 20;
    //row3
    let currentPos3 = 20;
    for(let i = 0; i < n.layer3.length; i++) {
        circle(140, currentPos3, 10);
        currentPos3 += 30;
    }
    currentPos3 = 20;
    
    //waights 1-2
    stroke(255);
    
    for(let i = 0; i < n.layer1.length; i++) {
        
        for(let i = 0; i < n.layer2.length; i++) {
        line(20, currentPos1, 80, currentPos2);
        currentPos2 += 30;
    }
        currentPos2 = 20;
        currentPos1 += 30;
    }
    currentPos1 = 20;
    
     for(let i = 0; i < n.layer2.length; i++) {
        
        for(let i = 0; i < n.layer3.length; i++) {
        line(80, currentPos2, 140, currentPos3);
        currentPos3 += 30;
    }
        currentPos3 = 20;
        currentPos2 += 30;
    }
    currentPos2 = 20; 
}
function createNewNN(){
    n = new neuralNet(parseInt(document.getElementById('inputArea1').value), parseInt(document.getElementById('inputArea2').value), parseInt(document.getElementById('inputArea3').value))
    
}