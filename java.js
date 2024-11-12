var btn = document.querySelector("button");

function random(number) { 
    let ch=(Math.random()*(number+1));
    let g=Math.floor(ch);
    return g
}

btn.onclick = function () {
    var rndCol ="rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    btn.style.backgroundColor = rndCol;//  or document.body.style.backgroundColor = rndCol;  pour change le colur de background of bady
};