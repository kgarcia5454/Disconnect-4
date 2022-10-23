var Options = document.getElementById("Options");
var in_P1Color = document.getElementById("Player1Color");
var in_P2Color = document.getElementById("Player2Color");
var Message = document.getElementById("Message");

const colors = ["red","green","blue","pink","yellow","purple","orange","#707bc0"]

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
            ctx.save()
            ctx.beginPath();
            ctx.arc(p1_x,p1_y, 28, 0, Math.PI * 2, false);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = "3.5";
            ctx.stroke();
            ctx.closePath();
            ctx.restore()
    
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
    console.log(event.value)
    if(event.id == "P1"){
        player1Color = event.value
        color = player1Color
    }else if(event.id == "P2"){
        player2Color = event.value
    }
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



