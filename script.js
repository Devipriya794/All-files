let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
messageShow="";
let message= document.getElementById("message")
let card_values= document.getElementById("card-values")
let result= document.getElementById("sum")
function getRandomNumber(){
    let randomnumber= Math.floor(Math.random()*13)+1
    if(randomnumber>10)
        return 10;
    else if(randomnumber == 1)
        return 11;
    else
       return randomnumber
}
function startGame(){
    isAlive=true;
    let num1=getRandomNumber();
    let num2=getRandomNumber();
    cards=[num1,num2];
    sum=num1+num2;
    // console.log(num1,num2);
    middleOfGame();
}
function middleOfGame(){
      card_values.textContent ="Cards:"
      for(let i=0;i<cards.length;i++){
           card_values.textContent+= cards[i]+" ";
      }
      result.textContent="Sum :"+sum
      if(sum<=20){
        messageShow="Pick a new card...?"
      }
      else if(sum===21){
        messageShow="You won the game..!"
        hasBlackJack="true"
      }
      else{
        messageShow="You out the game..!"
        isAlive="false"
      }
      message.textContent= messageShow;
}
function newNumber(){
    if(isAlive===true && hasBlackJack===false){
          let newcard= getRandomNumber();
          sum+=newcard;
          cards.push(newcard);
          middleOfGame();
    }
}
