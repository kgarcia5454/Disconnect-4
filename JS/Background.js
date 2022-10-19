let Background = document.getElementById("background")


var CircleElements = "";
for (let i = 0; i < 50; i++){
    var bup = getRandomInt(9);
    if(i%2==0){
        CircleElements += '<div class = "token" style = "left:'+(i*3)+'vw;animation-duration:'+bup+'s;"></div>'
    }else{
        CircleElements += '<div class = "token" style = "left:'+(i*3)+'vw;background-color:rgba(255, 255, 0, 0.47);animation-duration:'+bup+'s;"></div>'
    }
    console.log(bup);
}


Background.innerHTML = CircleElements

function getRandomInt(max){
    return Math.floor(Math.random()*max)+3;
}