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