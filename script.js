var s = 0;
var hs = 0;

console.log("\"hey there,\n  have fun.\"\n             -farhaan ali. ");

function pchoice() {
  document.getElementById("endGameButton").onclick = () => { console.log("reset"); s = 0; document.getElementById("player-score").innerText = s; document.getElementById("result").innerText = "reset brrr 🐤"; document.getElementById("hands").innerText = `...`; }
  let ab = document.querySelectorAll('.rpsButton');
  for (let b of ab) {
    b.onclick = () => {
      score(b.value);
    }
  }
}


function cchoice() {
  let c = ['rock', 'paper', 'scissors'];
  return c[(Math.floor(Math.random() * 3))];
}


function score(pc) {
  let cc = cchoice();
  console.log(pc +" "+ cc);
  if (cc == pc) {
    document.getElementById("result").innerText = "uff it's a draw";
    document.getElementById("hands").innerText = `💁-${pc} vs 🤖-${cc}`
  }
  else if (pc == 'rock' && cc == 'scissors') {
    s++;
    document.getElementById("result").innerText = "you win 🥲";
    document.getElementById("hands").innerText = `💁-${pc} vs 🤖-${cc}`;
  }
  else if (pc == 'scissors' && cc == 'paper') {
    s++;
    document.getElementById("result").innerText = "you win 🥲";
    document.getElementById("hands").innerText = `💁-${pc} vs 🤖-${cc}`;
  }
  else if (pc == 'paper' && cc == 'rock') {
    s++;
    document.getElementById("result").innerText = "you win 🥲";
    document.getElementById("hands").innerText = `💁-${pc} vs 🤖-${cc}`;
  }
  else {
    s--;
    document.getElementById("result").innerText = "you lose 😂";
    document.getElementById("hands").innerText = `💁-${pc} vs 🤖-${cc}`;
  }
  if(hs<=s)hs=s;
  console.log(s);
  document.getElementById("player-score").innerText = s;
  document.getElementById("high-score").innerText ="⭐ high score => "+hs;
}


pchoice();