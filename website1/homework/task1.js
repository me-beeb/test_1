function verify() {
  console.log("a, b, x")
  let a = parseInt(elementA.value);
  let b = parseInt(elementB.value);
  let x = parseInt(elementX.value);
  console.log(a, b, x)

  let low, high
  if (a < b) {
      low = a;
      high = b;
  }
  else {
      low = b;
      high = a;
  }

  if (x >= low && x <= high) {
      result = " X принадлежит заданному диапазону"
      document.getElementById("result").innerText = messageText + result;
      document.getElementsByName('result')[0].value = result;
      check = true;
  } 
  else {
      result = " X не принадлежит заданному диапазону"
      document.getElementById("result").innerText = messageText + result;
      document.getElementsByName('result')[0].value = result;
      check = false;
  }
}

function send() {
  if (check) {
      let textCondition = document.getElementsByTagName('p')[0].innerText
      document.getElementsByName('formulation')[0].value = textCondition;
      document.getElementsByName('result')[0].value = result;
      document.getElementById("UserEnter").submit();
  } 
    else {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    }
}

function verify_send() {
  verify();
  send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("b");
elementB.addEventListener('keyup', verify);

const elementX = document.getElementById("x");
elementX.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)