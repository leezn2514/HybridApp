// Memory pool을 이용해 재활용 가능한 block 객체를 구현하기.

var empty_arr = new Array(16); // 비어있는 공간 확인용 배열
for(var i = 0; i < empty_arr.length; i++) empty_arr[i] = 0;

var addBlockPlace = document.getElementById('background');
var bg = document.getElementsByClassName('bg_block');

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

class Block {
  constructor(a) {
    this.position_top_arr = a;
    this.position_left_arr = a;
  }

  RandomCreate() {
    this.newBlock = document.createElement('div');
    this.newBlock.setAttribute('class', 'fillBox');
    addBlockPlace.appendChild(this.newBlock);

    var random_top_num = Math.floor(Math.random() * 4);
    var random_left_num = Math.floor(Math.random() * 4); 
    var block_position = 4 * random_top_num + random_left_num;

    empty_arr[block_position] = 1;
    this.newBlock.style.top = this.position_top_arr[random_top_num] + "px";
    this.newBlock.style.left = this.position_left_arr[random_left_num] + "px";

    return block_position;
  }
}

var block = new Block([24, 178, 332, 486]); // Block 객체 생성
for(var i = 0; i < 2; i++) {
  var b_pos = block.RandomCreate();
  empty_arr[b_pos] = 1;
  console.log(empty_arr);
}

// 블록 이동
document.addEventListener('keydown', (event) => {
  for(var i = 0; i < empty_arr.length; i++) empty_arr[i] = 0; // 빈칸 배치 초기화

    if(event.keyCode == 37) { // 왼쪽 키  
      var blocks = document.getElementsByClassName("fillBox");
      var b_pos = block.RandomCreate();

      for (var i = 0; i < blocks.length; i++){
        blocks[i].style.left = "24px"; 
      }
    }

    else if(event.keyCode == 38) { // 위쪽 키
      var blocks = document.getElementsByClassName("fillBox");

      for (var i = 0; i < blocks.length; i++){
        blocks[i].style.top = "24px";                     
      }
      var b_pos = block.RandomCreate();
      empty_arr[b_pos] = 1;
    }

    else if(event.keyCode == 39) { // 오른쪽 키
      var blocks = document.getElementsByClassName("fillBox");

      for (var i = 0; i < blocks.length; i++){
        blocks[i].style.left = "486px"; 

                           
      }
      var b_pos = block.RandomCreate();
    }

    else if(event.keyCode == 40) { // 아래쪽 키
      var blocks = document.getElementsByClassName("fillBox");

      for (var i = 0; i < blocks.length; i++){
        blocks[i].style.top = "486px";                     
      }
      var b_pos = block.RandomCreate();
      empty_arr[b_pos] = 1;
    }
    
  });

function Keylog(e) {
  //console.log(e);
}
window.onkeydown = Keylog;
// window.onkeydown = (e) => {console.log(e);}; // 람다를 사용하면 더 짧게 코드를 줄일 수 있다.