

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

var i = 1;
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

        i++;
        document.getElementById("LevelValue").innerHTML = i;
        j+=3;
        alert("Nowy pozim!");

    }






}