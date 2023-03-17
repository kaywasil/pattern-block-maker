/*steps based off of video by Diane Deziel - dartless bodice block
https://www.youtube.com/watch?v=Whd7Sysg5lw&list=PLzJ0AT8AeASBcIcNIyCnuxwF_Pwidkdax&index=5
*/

//scale - 1 cm = 25pix
let cm = 25;
//starting point to offset image from edges
let offset = 100;

//bust or no bust
//adding seam allowance

// let neckToWaist = 24.5 * cm;
// let bustMeasurement = 56 * cm;
// let waistMeasurement = 52 * cm;
// let acrossBack = 22 * cm;
// let acrossFront = 21 * cm;
// let shoulder = 7.75 * cm;
let neckToWaist, bustMeasurement, waistMeasurement, acrossBack,
  acrossFront,shoulder;
let block;
let bodyFont, bodyFontBold;
let saveButton, noDartsButton, DartsButton, sleeveButton, pantsButton;

function preload() {
  bodyFont = loadFont("Anonymous Pro-Regular.ttf");
  bodyFontBold = loadFont("Anonymous Pro-bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(244, 224, 125);

  fill(0);
  textAlign(CENTER);
  textSize(24);
  textFont(bodyFontBold);
  text("Welcome to the p5 pattern block builder!", 450, 30, 900, 100);
  textSize(14);
  textFont(bodyFont);
  text(
    "Pattern blocks are the first step of drafting your own sewing patterns. They create a basic shape for shirts, pants, and sleeves, which you can then build on to design your own garments.\n To get started, put your measurements in the boxes below (in centimeters) - if you’re not sure how to take your measurements, you can refer to the diagram below!\n Please note - this currently does not add seam allowance to the blocks (a feature I'm working on adding) so be sure to add seam allowance if you use this to make patterns!",
    450,
    50,
    900,
    200
  );

  textAlign(LEFT);
  textSize(18);
  textFont(bodyFontBold);
 
  text('input measurements here:', 30, 30);
  text("I want to make:", 30, 450);
  
  //input boxes
  textSize(12);
    text('Waist measurement (in cm):', 30, 55);
    let waistInp = createInput();
    waistInp.position(30, 60);
    waistInp.size(100);
    waistInp.changed(waistValue);

    text('Bust measurement (in cm):', 30, 95);
    let bustInp = createInput('');
    bustInp.position(30, 100);
    bustInp.size(100);
    bustInp.changed(bustValue);

    text('Neck to waist measurement (in cm):', 30, 135);
    let neckToWaistInp = createInput('');
    neckToWaistInp.position(30, 140);
    neckToWaistInp.size(100);
    neckToWaistInp.changed(neckToWaistValue);

    text('Across back measurement (in cm):', 30, 175);
    let acrossBackInp = createInput('');
    acrossBackInp.position(30, 180);
    acrossBackInp.size(100);
    acrossBackInp.changed(acrossBackValue);

    text('Across front measurement (in cm):', 30, 215);
    let acrossFrontInp = createInput('');
    acrossFrontInp.position(30, 220);
    acrossFrontInp.size(100);
    acrossFrontInp.changed(acrossFrontValue);

    text('Shoulder measurement (in cm):', 30, 255);
    let shoulderInp = createInput('');
    shoulderInp.position(30, 260);
    shoulderInp.size(100);
    shoulderInp.changed(shoulderValue);
  
 

//   // create buttons
  let altButtonBackgroundCol = color(81, 96, 237);
  let buttonTextCol = color(255);
  let buttonBackgroundCol = color(239, 67, 67);

  noDartsButton = createButton("bodice block without darts");
  noDartsButton.position(30, 470);
  noDartsButton.mousePressed(bodiceBlockNoDarts);
  //saveButton.style('font', bodyFont);
  noDartsButton.style("color", buttonTextCol);
  noDartsButton.style("background-color", altButtonBackgroundCol);

  DartsButton = createButton("bodice block with darts");
  DartsButton.position(30, 500);
  DartsButton.mousePressed(bodiceBlockDarts);
  //saveButton.style('font', bodyFont);
  DartsButton.style("color", buttonTextCol);
  DartsButton.style("background-color", altButtonBackgroundCol);

  sleeveButton = createButton("sleeve block");
  sleeveButton.position(30, 530);
  sleeveButton.mousePressed(sleeveBlock);
  sleeveButton.style("color", buttonTextCol);
  sleeveButton.style("background-color", altButtonBackgroundCol);

  pantsButton = createButton("pant block");
  pantsButton.position(30, 560);
  pantsButton.mousePressed(pantBlock);
  pantsButton.style("color", buttonTextCol);
  pantsButton.style("background-color", altButtonBackgroundCol);

    // save canvas button
  saveButton = createButton("save block");
  saveButton.position(30, 590);
  saveButton.mousePressed(saveBlock);
  //saveButton.style('font', bodyFont);
  saveButton.style("color", buttonTextCol);
  saveButton.style("background-color", buttonBackgroundCol);
}

function waistValue() {
  // console.log('Waist: ', this.value());
  waistMeasurement = int(this.value()) * cm;
}

function bustValue() {
  bustMeasurement = int(this.value()) * cm;
}

function neckToWaistValue() {
  neckToWaist = int(this.value()) * cm;
}

function acrossBackValue() {
  acrossBack = int(this.value()) * cm;
}

function acrossFrontValue() {
  acrossFront = int(this.value()) * cm;
}

function shoulderValue() {
  shoulder = int(this.value()) * cm;
}

function saveBlock() {
  saveCanvas(block, "myblock", "png");
}

function bodiceBlockNoDarts() {
  block = createCanvas(1200, 900);
  block.position(width / 4, 200);
  background(255);

  //sizing square for printing/projecting
  fill(0);
  textAlign(CENTER);
  text(
    "measure this square and make sure it is 2cm long on all sides",
    800,
    80,
    150,
    150
  );
  fill(255);
  square(850, 10, 50);

  translate(offset, offset);
  let bustYPoint = neckToWaist / 2 + cm / 2;
  let centerFront = bustMeasurement / 2 + cm * 2;
  let sideSeamXPoint = centerFront / 2;
  let bottomMeasurement = waistMeasurement / 4 + cm;
  let armPt1 = neckToWaist / 4;
  let neckWidth = bustMeasurement / 2 / 10 + cm * 2.5;
  let neckHeight = bustMeasurement / 2 / 20 + cm * 0.3;
  let frontNeckHeight = 0 - (neckHeight + cm / 2);
  let frontNeckDepth =
    bustMeasurement / 2 / 10 + 2.75 * cm - (neckHeight + cm / 2);
  let frontNeckWidth = bustMeasurement / 2 / 10 + 2.25 * cm;

  strokeWeight(1);
  stroke(0);
  //center back line
  line(0, 0, 0, neckToWaist);
  //bust line
  //line(0, bustYPoint, centerFront, bustYPoint);
  //back bottom line
  line(0, neckToWaist, bottomMeasurement, neckToWaist);
  //bottom to bust line back
  line(bottomMeasurement, neckToWaist, sideSeamXPoint, bustYPoint);
  //center front line
  line(centerFront, 0, centerFront, neckToWaist);
  //front bottom line
  line(centerFront, neckToWaist, centerFront - bottomMeasurement, neckToWaist);
  //bottom to bust line front
  line(
    centerFront - bottomMeasurement,
    neckToWaist,
    sideSeamXPoint,
    bustYPoint
  );

  //center back at neck width
  line(0, 0, neckWidth/2, 0);

  noFill();
  bezier(
    cm * 2.5,
    0,
    neckWidth - cm,
    0 - 5,
    neckWidth - cm / 4,
    neckHeight - cm * 2.5,
    neckWidth,
    0 - neckHeight
  );

  //back shoulder line
  //using pythagorian theorum to find length
  //square root of(square of shoulder length minus square of neck height)+neckwidth= x coordinate for top of shoulder curve
  line(
    neckWidth,
    0 - neckHeight,
    sqrt(sq(shoulder) - sq(neckHeight)) + neckWidth,
    0
  );

  //back arm curve (not sure it's deep enough RN)
  bezier(
    sqrt(sq(shoulder) - sq(neckHeight)) + neckWidth,
    0,
    acrossBack / 2,
    armPt1 + cm * 2,
    acrossBack / 2,
    bustYPoint,
    sideSeamXPoint,
    bustYPoint
  );

  //front neck curve
  bezier(
  (centerFront-frontNeckWidth),frontNeckHeight,
  (centerFront-frontNeckWidth),frontNeckHeight+(cm*3),
  centerFront-(cm*3), frontNeckDepth,
  centerFront, frontNeckDepth);

  //horizontal line for front shoulder angle
  line(
    centerFront - frontNeckWidth,
    frontNeckHeight,
    centerFront -
      frontNeckWidth -
      sqrt(sq(shoulder) - sq(frontNeckHeight - 0.7 * cm)),
    0.7 * cm
  );

  //front arm curve
  beginShape();
  noFill();
  curveVertex(
    centerFront -
      frontNeckWidth -
      sqrt(sq(shoulder) - sq(frontNeckHeight - 0.7 * cm)),
    0.7 * cm
  );
  curveVertex(
    centerFront -
      frontNeckWidth -
      sqrt(sq(shoulder) - sq(frontNeckHeight - 0.7 * cm)),
    0.7 * cm
  );
  curveVertex(centerFront - acrossFront / 2, armPt1);
  curveVertex(centerFront - acrossFront / 2 - cm * 1.5, bustYPoint - cm * 1.5);
  curveVertex(sideSeamXPoint, bustYPoint);
  curveVertex(sideSeamXPoint, bustYPoint);
  endShape();
}

function bodiceBlockDarts() {
  // block = createCanvas(900, 900);
  // block.position(width/4, 200);
  // background(255);
  textSize(36);
  textFont(bodyFontBold);
  text("Coming Soon!", 450, 300);
}

function sleeveBlock() {
  // block = createCanvas(900, 900);
  // block.position(width/4, 200);
  // background(255);
  textSize(36);
  textFont(bodyFontBold);
  text("Coming Soon!", 450, 300);
}

function pantBlock() {
  // block = createCanvas(900, 900);
  // block.position(width/4, 200);
  // background(255);
  textSize(36);
  textFont(bodyFontBold);
  text("Coming Soon!", 450, 300);
}
