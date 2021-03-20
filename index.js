DiceValue = () => {
    const play1 = Math.floor(Math.random() * 6 )+ 1;
    const playDice = `assets/dice${play1}.png`;
    document.getElementById('check1').setAttribute('src', playDice);

    const play2 = Math.floor(Math.random() * 6 )+ 1;
    const playDice1 = `assets/dice${play2}.png`;
    document.getElementById('check2').setAttribute('src', playDice1);

    // Roll dice sound
   var audio = new Audio('assets/roll.wav');
   audio.play();
   }

 function Confirm(){
    var txt;
    if (confirm("Are You Sure!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
}
