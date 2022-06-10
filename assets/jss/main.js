var button = document.getElementById("button"),
count1 = 0;
var count2= 1;
button.onclick = function (){
  if (count1 <=9 && count2 ==1) {
    count1 += 1;
    button.innerHTML = "click me here" + " " + count1;
  }
  else if (count1>9 || count2==0) {
    if (count1 ==0){
        count2=1;
        count1 += 1;
        button.innerHTML = "click me here"  + " " + count1;
    }
    else{
        count2=0;
        count1 -= 1;
        button.innerHTML = "click me here" + " " + count2;
     }
  }
};