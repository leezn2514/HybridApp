// Memory pool을 이용해 재활용 가능한 block 객체를 구현하기.
var i, j;
var empty_arr = new Array(16); // 비어있는 공간 확인용 배열
for(i = 0; i < empty_arr.length; i++) empty_arr[i] = 0;

var addBlockPlace = document.getElementById('background');
var bg = document.getElementsByClassName('bg_block');
var blocks = document.getElementsByClassName("fillBox");

const {createApp} = Vue;
  createApp({
    data() {
      return {
        bg_block_count : 16,
      }
    },
    mounted() {
      console.log("app 마운트 성공!");
    },
  }).mount("#background")

class GameManager {
  constructor() {
    this.blockArr = [16];
    this.Block = [16]
    
    this.blockArr_num = -1;
  }

  ObjectPool() {
    this.Block[this.blockArr_num] = new Block([24, 178, 332, 486], [24, 178, 332, 486]); // Block 객체 생성
    this.blockArr.push(this.Block[this.blockArr_num]); 
    this.blockArr_num++;

    return this.blockArr;
  }
}

class Block {
  constructor(posX, posY, result) {
    this.posX = posX;
    this.posY = posY;
    this.result = result;
    this.randomResult = [2, 4];

    this.newBlock = document.createElement('div');
    this.newBlock.setAttribute('class', 'fillBox');
    this.newBlock.innerText = this.randomResult[Math.floor(Math.random() * 2)] + '';
    addBlockPlace.appendChild(this.newBlock);

    var random_top_num = Math.floor(Math.random() * 4);
    var random_left_num = Math.floor(Math.random() * 4); 

    var block_position = 4 * random_top_num + random_left_num;
    empty_arr[block_position] = 1;
    
    this.newBlock.style.top = this.posX[random_top_num] + "px";
    this.newBlock.style.left = this.posY[random_left_num] + "px";

    return block_position;
  }

    // var px_delete = this.blockArr.style.left.replace('px', '');
    // console.log(px_delete);
    //blocks[i].style.left.replace('px', '');
        // var temporary;
        
        // for(j = 1; j < 4; j ++) {
        //   temporary = px_delete - (154 * j);
        //   if(temporary < 0) break; // 블록이 범위 밖으로 나가지 않게 방지
          
        //   // empty_arr에서의 1 이동 코드 구현
        //   blocks[i].style.left = temporary + "px";


        //   if(blocks[i].style.top == 24 + "px") empty_arr[b] = 1;
        //   if(blocks[i].style.top == 178 + "px") empty_arr[b] = 1;
        //   if(blocks[i].style.top == 332 + "px") empty_arr[b] = 1;
        //   if(blocks[i].style.top == 486 + "px") empty_arr[b] = 1;
        //}
  }
  
  function LeftMove() {
    for(i = 0; i < blocks.length; i++) {
      var px_delete = blocks[i].style.left.replace('px', '');
      var move_num = parseInt(px_delete) - 10;
      blocks[i].style.left = move_num + "px";
    }
  }

  var a = new GameManager;
  a.ObjectPool(); 
  a.ObjectPool();

  // 블록 이동
  window.addEventListener("keydown", Blockmove, false)
  function Blockmove(e) {
    switch(e.keyCode) {
      case 37:
        setInterval(LeftMove, 20);
        break;
      case 38:
        break;
        case 39:
        break;
      case 40:
        break;	
    }	
  a.ObjectPool(); 
}

function Keylog(e) {
  //console.log(e);
}
window.onkeydown = Keylog;
// window.onkeydown = (e) => {console.log(e);}; // 람다를 사용하면 더 짧게 코드를 줄일 수 있다.  