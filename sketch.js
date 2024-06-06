function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }let brushSize = 10; // Tamanho do pincel
  let brushColor = 'red'; // Cor do pincel (vermelho)
  let isDrawing = false; // Indica se o usuário está desenhando ou não
  
  function setup() {
    createCanvas(400, 400);
    background(0); // Define o fundo como preto
  }
  
  function draw() {
    // Se o usuário estiver desenhando, desenha uma elipse na posição do mouse
    if (isDrawing) {
      fill(brushColor);
      noStroke();
      ellipse(mouseX, mouseY, brushSize, brushSize);
    }
  }
  
  function mousePressed() {
    isDrawing = true;
  }
  
  function mouseReleased() {
    isDrawing = false;
  }
  
  // Função para mudar o tamanho do pincel
  function changeBrushSize(size) {
    brushSize = size;
  }
  
  // Função para mudar a cor do pincel
  function changeBrushColor(color) {
    brushColor = color;
  }
  