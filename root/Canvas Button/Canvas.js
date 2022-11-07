var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

class button {
  constructor(btnPos, btnSize, btnColor) {
    this.button_position = btnPos;
    this.button_size = btnSize;
    this.is_click = false;

    context.fillStyle = btnColor;
    context.fillRect(this.button_position, this.button_position, this.button_size, this.button_size);
  }

    MouseOver(event, color) {
    var x = event.clientX - context.canvas.offsetLeft;
    var y = event.clientY - context.canvas.offsetTop;

    this.is_click = true;

    if(x <= this.button_position + this.button_size && x >= this.button_position &&
      y <= this.button_position + this.button_size && y >= this.button_position) {
      context.fillStyle = color;
      context.fillRect(this.button_position, this.button_position, this.button_size, this.button_size);
    }
  }

  MouseOut(event, color) {
    var x = event.clientX - context.canvas.offsetLeft;
    var y = event.clientY - context.canvas.offsetTop;

    if(x >= this.button_position + this.button_size || x <= this.button_position ||
      y >= this.button_position + this.button_size || y <= this.button_position) {
          context.fillStyle = color;
          context.fillRect(this.button_position, this.button_position, this.button_size, this.button_size);

    }
  }
}

var gm = new button(150, 200, '#F6CED8');

addEventListener('mousedown', ()=> {
  gm.MouseOver(event, '#DA81F5');
});

addEventListener('mouseup', ()=> {
  gm.MouseOver(event, '#E2A9F3');
});

addEventListener('mousemove', ()=> {
  gm.MouseOver(event, '#F5A9BC');
  if(gm.is_click == true) {
    console.log(gm.is_click);
    return;
  }
  else {
    gm.MouseOut(event, '#F6CED8');
    console.log(gm.is_click);
  }
});





// 객체지향으로 변경
