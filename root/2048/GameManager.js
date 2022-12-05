var empty_arr = new Array(16);
var position_arr = new Array(16);
for (var i = 0; i < 16; i++) {
  empty_arr[i] = 0;
  position_arr[i] = new Array(2);
}

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

var fillBox = document.getElementsByClassName('fillBox');

class Block {
  constructor() {
    var position_top_arr = [24, 178, 332, 486];
    var position_left_arr = [24, 178, 332, 486];
    //var result_num = [2, 4];

    for(var i = 0; i < 2; i++) {
      var random_top_num = Math.floor(Math.random() * 4);
      var random_left_num = Math.floor(Math.random() * 4);

      // 겹쳤을 때 예외처리 코드 추가

      fillBox[i].style.top = position_top_arr[random_top_num] + "px";
      fillBox[i].style.left = position_left_arr[random_left_num] + "px";
    }

    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        position_arr[i] = [position_top_arr[i], position_left_arr[j]]; // 위치값 저장
        console.log(position_arr[i]);
        //if(random_top_num == i && random_left_num == j)
      }
    }
  }
}

  document.addEventListener('keydown', (event) => {
      if(event.keyCode == 37) { // 왼쪽 키
        for(var i = 0; i < 2; i ++) fillBox[i].style.left = "24px";
      }

      else if(event.keyCode == 38) { // 위쪽 키
        for(var i = 0; i < 2; i ++) fillBox[i].style.top = "24px";
      }

      else if(event.keyCode == 39) { // 오른쪽 키
        for(var i = 0; i < 2; i ++) fillBox[i].style.left = "486px";
      }

      else if(event.keyCode == 40) { // 아래쪽 키
        for(var i = 0; i < 2; i ++) fillBox[i].style.top = "486px";
      }

      if(fillBox[0].style.left == fillBox[1].style.left && fillBox[0].style.top == fillBox[1].style.top) {

      }
  });

function Keylog(e) {
  //console.log(e);
}
window.onkeydown = Keylog;
// window.onkeydown = (e) => {console.log(e);}; // 람다를 사용하면 더 짧게 코드를 줄일 수 있다.

var block = new Block(); // Block 객체 생성
