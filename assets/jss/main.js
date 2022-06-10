var button = document.getElementById("button"),
count = 0;
var counter= 1;
button.onclick = function (){
  if (count<=9 && counter==1) {
    count += 1;
    button.innerHTML = "click me here" + " " + count;
  }
  else if (count>9 || counter==0) {

    if (count==0){
        counter=1;
        count += 1;
        button.innerHTML = "click me here"  + " " + count;
    }
    else{
      counter=0;
      count -= 1;
      button.innerHTML = "click me here"  + " " + count;
    }
  }
    
};