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
