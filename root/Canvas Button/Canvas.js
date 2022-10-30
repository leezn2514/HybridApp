var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

class button {
  constructor(btnPos, btnSize, btnColor) {
    this.button_position = btnPos;
    this.button_size = btnSize;

    context.fillStyle = btnColor;
    context.fillRect(this.button_position, this.button_position, this.button_size, this.button_size);
  }

    is_Click(event, color) {
    var x = event.clientX - context.canvas.offsetLeft;
    var y = event.clientY - context.canvas.offsetTop;

    if(x <= this.button_position + this.button_size && x >= this.button_position &&
      y <= this.button_position + this.button_size && y >= this.button_position) {
      context.fillStyle = color;
      context.fillRect(this.button_position, this.button_position, this.button_size, this.button_size);
    }
  }

  is_Out(event, color) {
    var x = event.clientX - context.canvas.offsetLeft;
    var y = event.clientY - context.canvas.offsetTop;

    if(x >= this.button_position + this.button_size || x <= this.button_position ||
      y >= this.button_position + this.button_size || y <= this.button_position) {
      context.fillStyle = color;
      context.fillRect(this.button_position, this.button_position, this.button_size, this.button_size);
    }
  }
}


var gm = new button(150, 200, 'pink');

addEventListener('mousedown', ()=> {
  gm.is_Click(event, 'violet');
});

addEventListener('mouseup', ()=> {
  gm.is_Click(event, 'yellow');
});

addEventListener('mousemove', ()=> {
  gm.is_Out(event, 'pink');
  gm.is_Click(event, 'orange');
});




// 객체지향으로 변경
