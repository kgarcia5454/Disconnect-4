var Options = document.getElementById("Options");
var in_P1Color = document.getElementById("Player1Color");
var in_P2Color = document.getElementById("Player2Color");
var Message = document.getElementById("Message");

const colors = ["red","green","blue","#FFC0CB","yellow","purple","orange","#707bc0"]

function drawOptions(){
    DisableColumn();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    HideButtons();
    ShowOptions();

    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle= "rgba(10, 10, 255,0.25)";
    ctx.fill(); 
    ctx.closePath();

    drawOptionsTitle();

    drawOptionLabels();

    drawColorTokens();


    selectedP1Color(player1Color);
    selectedP2Color(player2Color);


}

function drawOptionsTitle(){
    var Title = "Options";

    ctx.font = "80px Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.lineWidth= 10;
    ctx.strokeText(Title,canvas.width/2,canvas.height/6);
    ctx.fillText(Title,canvas.width/2,canvas.height/6);

}

function drawOptionLabels(){
    var Label1 = "Player 1 Color:";

    ctx.font = "30px Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white"
    ctx.lineWidth=7;
    ctx.strokeText(Label1,canvas.width/4.5,canvas.height/3.5);
    ctx.fillText(Label1,canvas.width/4.5,canvas.height/3.5);
    ctx.shadowColor='rgba(0,0,0,0)';

    var Label2 = "Player 2 Color:";

    ctx.font = "30px Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white"
    ctx.strokeText(Label2,canvas.width/1.3,canvas.height/3.5);
    ctx.fillText(Label2,canvas.width/1.3,canvas.height/3.5);
}

function drawColorTokens(){

    for(let j = 0;j<=1; j++){
        let p1_y = 275
        for(let i = 0; i<=7; i++){

            let p1_x = 65 + (i*70) + (j*390)
    
            if(i==4){
                
                p1_y = p1_y + 90
            }
    
            if(i>=4){
                p1_x = 65 + ((i-4)*70) + (j*390)
            }
            color = colors[i];

            //Main Circle
            ctx.beginPath();
            ctx.arc(p1_x,p1_y, 28, 0, Math.PI * 2, false);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = "3.5";
            ctx.stroke();
            ctx.closePath();
    
            //Inside Circle
            ctx.beginPath();
            ctx.arc(p1_x, p1_y, 20, 0, Math.PI * 2, false);
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = "3";
            ctx.stroke();
            ctx.fillStyle = "rgba(0,0,0,0.2)";
            ctx.fill();
            ctx.closePath();
    
            //Inside Circle Lines
            for (let i = 0; i < 2; i++) {
                ctx.beginPath();
                ctx.arc(p1_x, p1_y, 15 - 5 * i, 0, Math.PI * 2, false);
                ctx.strokeStyle = "#000000";
                ctx.lineWidth = "1";
                ctx.stroke();
                ctx.closePath();
            }
        }
    } 
}

function changeColor(event){
    if(event.id == "P1"){
        if(event.value==player2Color){
           drawError("2")

        }else{
            player1Color = event.value
            color = player1Color
            selectedP1Color(player1Color)
        }
    }else if(event.id == "P2"){
        if(event.value==player1Color){
            drawError("1")

        }else{
            player2Color = event.value
            selectedP2Color(player2Color)
        }
    }
}

function selectedP1Color(color){

    ctx.clearRect(30,240,280,159)
    ctx.beginPath();
    ctx.rect(30,240,280,159);
    ctx.fillStyle= "rgba(10, 10, 255,0.25)";
    ctx.fill(); 
    ctx.closePath();

    drawColorTokens();

    let num = colors.indexOf(color);
    let p1_x = 65 + (num*70)
    let p1_y = 275

    if(num>3){
        p1_y = 275+90
        p1_x = 65 + ((num-4)*70)
    }

    

    ctx.beginPath();
    ctx.arc(p1_x, p1_y, 31, 0, Math.PI * 2, false);
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = "2"
    ctx.shadowBlur = "4"
    ctx.shadowColor = "white"
    
    ctx.stroke();
    ctx.closePath();
    ctx.shadowBlur = "0"


}

function selectedP2Color(color){

    ctx.clearRect(420,240,280,159)
    ctx.beginPath();
    ctx.rect(420,240,280,159);
    ctx.fillStyle= "rgba(10, 10, 255,0.25)";
    ctx.fill(); 
    ctx.closePath();

    drawColorTokens();

    let num = colors.indexOf(color);
    let p1_x = 455 + (num*70)
    let p1_y = 275

    if(num>3){
        p1_y = 275+90
        p1_x = 455 + ((num-4)*70)
    }

    

    ctx.beginPath();
    ctx.arc(p1_x, p1_y, 31, 0, Math.PI * 2, false);
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = "2"
    ctx.shadowColor = "white"
    ctx.shadowBlur = "4"
    ctx.stroke();
    ctx.closePath();
    ctx.shadowBlur = "0"


}



function ShowOptions(){
    Options.style.display = "initial";

}

function HideOptions(){
    Options.style.display = "none";
}

function ColorText (){

    var WinText = "ERROR"

    ctx.fillText(WinText,canvas.width/1.9,canvas.height-30);

}

function drawError(player){

    var Error = ("Player "+player+ " is using that color");
    ctx.clearRect(canvas.width/11,canvas.height-230,canvas.width,70)

    ctx.beginPath();
    ctx.rect(canvas.width/11,canvas.height-230,canvas.width,70)
    ctx.fillStyle= "rgba(10, 10, 255,0.25)";
    ctx.fill(); 
    ctx.closePath();


    ctx.font = "50px Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth= 5;
    ctx.strokeText(Error,canvas.width/2,canvas.height- 190);
    ctx.fillText(Error,canvas.width/2,canvas.height-190);
    
}



