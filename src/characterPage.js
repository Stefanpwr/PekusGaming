function AddStr(){
    var value = document.getElementById('Str');
    var res = parseFloat(value.innerHTML);
    var value1 = document.getElementById('Gold');
    var cash = parseFloat(value1.innerHTML);
    if(cash>=res){
        var res2 = res + 1;
        var st = res2.toString();
        value.innerHTML = st;
        var st2 = cash - (1*(res+1));
        value1.innerHTML = st2;
    }else{
        alert("Brak złota łysy chuju");
    }

}
function AddDex(){
    var value = document.getElementById('Dex');
    var res = parseFloat(value.innerHTML);
    var value1 = document.getElementById('Gold');
    var cash = parseFloat(value1.innerHTML);
    if(cash>=res){
        var res2 = res + 1;
        var st = res2.toString();
        value.innerHTML = st;
        var st2 = cash - (1*(res+1));
        value1.innerHTML = st2;
    }else{
        alert("Brak złota łysy chuju");
    }

}
function AddInt(){
    var value = document.getElementById('Int');
    var res = parseFloat(value.innerHTML);
    var value1 = document.getElementById('Gold');
    var cash = parseFloat(value1.innerHTML);
    if(cash>=res){
        var res2 = res + 1;
        var st = res2.toString();
        value.innerHTML = st;
        var st2 = cash - (1*(res+1));
        value1.innerHTML = st2;
    }else{
        alert("Brak złota łysy chuju");
    }

}