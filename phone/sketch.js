let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);

  capture = createCapture({
    video: {
      facingMode: "environment"
    },
    audio: false
  });

  capture.hide();
}

function draw() {
  background(0);

  let scale = max(
    width / capture.width,
    height / capture.height
  );

  let w = capture.width * scale;
  let h = capture.height * scale;

  image(
    capture,
    (width - w) / 2,
    (height - h) / 2,
    w,
    h
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}