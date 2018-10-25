

function AddStr(){
    var value = document.getElementById('Str');
    var res = parseFloat(value.innerHTML);
    var value1 = document.getElementById('Gold');
    var cash = parseFloat(value1.innerHTML);
    var dmg = document.getElementById('dmgValueStr');
    var dmgRes = parseFloat(dmg.innerHTML);
    if(cash>=res){
        var res2 = res + 1;
        var st = res2.toString();
        value.innerHTML = st;
        var st2 = cash - (1*(res+1));
        value1.innerHTML = st2;
        var dmgR = dmgRes+3.5;
        var dmgR2 = dmgR.toString();
        dmg.innerHTML = dmgR2;



    }else{
        alert("Brak złota łysy chuju");
    }

}
function AddDex(){
    var value = document.getElementById('Dex');
    var res = parseFloat(value.innerHTML);
    var value1 = document.getElementById('Gold');
    var cash = parseFloat(value1.innerHTML);
    var dmg = document.getElementById('dmgValueDex');
    var dmgRes = parseFloat(dmg.innerHTML);
    if(cash>=res){
        var res2 = res + 1;
        var st = res2.toString();
        value.innerHTML = st;
        var st2 = cash - (1*(res+1));
        value1.innerHTML = st2;
        var dmgR = dmgRes+0.1;
        var dmgR2 = dmgR.toString();
        dmg.innerHTML = dmgR2;
    }else{
        alert("Brak złota łysy chuju");
    }

}
function AddInt(){
    var value = document.getElementById('Int');
    var res = parseFloat(value.innerHTML);
    var value1 = document.getElementById('Gold');
    var cash = parseFloat(value1.innerHTML);
    var dmg = document.getElementById('dmgValueInt');
    var dmgRes = parseFloat(dmg.innerHTML);
    if(cash>=res){
        var res2 = res + 1;
        var st = res2.toString();
        value.innerHTML = st;
        var st2 = cash - (1*(res+1));
        value1.innerHTML = st2;
        var dmgR = dmgRes+0.5;
        var dmgR2 = dmgR.toString();
        dmg.innerHTML = dmgR2;
    }else{
        alert("Brak złota łysy chuju");
    }

}


var j = 0;
function AddExp() {
    var value1 = document.getElementById("ExpValue");
    var newExp = parseFloat(value1.innerHTML);
    var value2 = document.getElementById("ExpPoints");
    var oldExp = parseFloat(value2.innerHTML);
    document.getElementById("ExpPoints").innerHTML = newExp+oldExp;
    var value3 = document.getElementById("GoldValue");
    var newGold = parseFloat(value3.innerHTML);
    var value4 = document.getElementById("Gold");
    var oldGold = parseFloat(value4.innerHTML);
    document.getElementById("Gold").innerHTML = newGold+oldGold;
    var nextLevel = 3000+3000*j;
    if( newExp+oldExp == nextLevel){
        var value6 = document.getElementById("LevelValue");
        var newLevel = parseFloat(value6.innerHTML);
        document.getElementById("LevelValue").innerHTML = newLevel+1;
        j+=3;
        alert("Nowy pozim!");
    }
}

function startQuest(){

    document.getElementById("Start").disabled = true;
    var value1 = document.getElementById("Hours");
    var QHours = parseFloat(value1.innerHTML);
    var HNaN = isNaN(QHours);
    if(HNaN==true){QHours=0;}

    var value2 = document.getElementById("Minutes");
    var QMinutes = parseFloat(value2.innerHTML);
    var MNaN = isNaN(QMinutes);
    if(MNaN==true){QMinutes=0;}


    var value3 = document.getElementById("Seconds");
    var QSeconds = parseFloat(value3.innerHTML);
    var SNaN = isNaN(QSeconds);
    if(SNaN==true){QSeconds=0;}

    var timer ='<div id="HoursGo" class="Timer1"></div>'+'' +
               '<div id="MinutesGo" class="Timer1"></div>'+'' +
               '<div id="SecondsGo" style=clear: both; ></div>';

    document.getElementById("Time").innerHTML= timer;

    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        if(QHours==0 && QMinutes==0 && QSeconds==0)
        {
            document.getElementById("Time").innerHTML = "Wykonales questa!";
            clearInterval(myVar);
            AddExp();
            /*setTimeout(LoadNew(),3000);*/
        }
        QSeconds--;
        if(QSeconds==-1){
            QSeconds=59;
            QMinutes--;
        }
        if(QMinutes==-1){
            QMinutes=59;
            QHours--;
        }
        else {
            if(QSeconds<10) document.getElementById("SecondsGo").innerHTML ="0"+QSeconds;
            else document.getElementById("SecondsGo").innerHTML = QSeconds;
            if(QMinutes<10) document.getElementById("MinutesGo").innerHTML = "0"+QMinutes + ":";
            else document.getElementById("MinutesGo").innerHTML = QMinutes + ":";
            if(QHours<10) document.getElementById("HoursGo").innerHTML = "0"+QHours + ":";
            else document.getElementById("HoursGo").innerHTML = QHours + ":";
        }
    }
}
