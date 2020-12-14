
//押した数字をテキストに追加//
let result = document.getElementById("result");

function display(number) {
  result.value = result.value + number.value;
}

function calc() {
 result.value = new Function("return " + result.value)();
}

function update(){
  result.value = "";
}