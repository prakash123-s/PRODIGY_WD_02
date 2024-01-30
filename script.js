startButton = document.getElementById("start");
pauseButton = document.getElementById("pause");
resetButton = document.getElementById("reset");
lapButton = document.getElementById("lap");
lapContainer = document.getElementById("laps");

let count = 0;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");
let ms = document.getElementById("millisecond");

startButton.addEventListener("click",function(){
    start = true;
    onstart();
});

pauseButton.addEventListener("click",function(){
    start = false;
});

resetButton.addEventListener("click",function(){
    start = false;
    h.innerHTML = '00';
    m.innerHTML = '00';
    s.innerHTML = '00';
    ms.innerHTML = '00';

    count = 0;
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    lapContainer.innerHTML = "";
    lapContainer.style.padding = '0';
    
});

lapButton.addEventListener("click",function(){
   lapContainer.style.padding = '40px';
   let lap = document.createElement("div");
   lap.className = "slap";
   lap.innerHTML = h.innerHTML + ' : ' + m.innerHTML + ' : ' + s.innerHTML + ' : ' + ms.innerHTML;
   lapContainer.appendChild(lap);
});

function onstart(){
    if(start){
        count++;

        if(count == 100){
            second++;
            count = 0;
        }

        if(second == 60){
            minute++;
        }

        if(minute == 60){
            
            hour++;
            minute = 0;
            second = 0;
        }

        hrString = hour.toString();
        minString = minute.toString();
        secString = second.toString();
        msString = count.toString();

        if(hour < 10){
            hrString = "0" + hrString;
        }
        if(minute < 10){
            minString = "0" + minString;
        }
        if(second < 10){
            secString = "0" + secString;
        }
        
        if(count < 10){
            msString = "0" + msString;
        }

        console.log(millisecond);


        h.innerHTML = hrString;
        m.innerHTML = minString;
        s.innerHTML = secString;
        ms.innerHTML = msString;


        setTimeout(onstart,10); 
    }
};
