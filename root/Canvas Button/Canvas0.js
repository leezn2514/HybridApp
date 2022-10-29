var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
var button_position = 150;
var button_size = 200;

context.fillStyle = 'pink';
context.fillRect(button_position, button_position, button_size, button_size);

function is_Click(event, color) {
  var x = event.clientX - context.canvas.offsetLeft;
  var y = event.clientY - context.canvas.offsetTop;

  if(x <= button_position + button_size && x >= button_position &&
    y <= button_position + button_size && y >= button_position) {
    context.fillStyle = color;
    context.fillRect(button_position, button_position, button_size, button_size);
  }
}

function is_Out(event, color) {
  var x = event.clientX - context.canvas.offsetLeft;
  var y = event.clientY - context.canvas.offsetTop;

  if(x >= button_position + button_size || x <= button_position ||
    y >= button_position + button_size || y <= button_position) {
    context.fillStyle = color;
    context.fillRect(button_position, button_position, button_size, button_size);
  }
}

addEventListener('mousedown', ()=> {
  is_Click(event, 'violet');
});

addEventListener('mouseup', ()=> {
  is_Click(event, 'yellow');
});

addEventListener('mousemove', ()=> {
  is_Out(event, 'pink');
  is_Click(event, 'orange');
});

// 객체지향으로 변경
