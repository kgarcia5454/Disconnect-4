var Options = document.getElementById("Options");
var in_P1Color = document.getElementById("Player1Color");
var in_P2Color = document.getElementById("Player2Color");
var Message = document.getElementById("Message");

function drawOptions(){
    DisableColumn();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    HideButtons();
    ShowOptions();

    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle= " #00008b";
    ctx.fill(); 
    ctx.closePath();

    drawOptionsTitle();

    drawOptionLabels();

    submit();

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
    ctx.shadowColor = "#00000067";
    ctx.shadowOffsetX=-10;
    ctx.shadowOffsetY=10;
    ctx.shadowBlur = 4;
    ctx.fillText(Label1,canvas.width/5,canvas.height/3.5);
    ctx.shadowColor='rgba(0,0,0,0)';

    var Label2 = "Player 2 Color:";

    ctx.font = "30px Sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "white"
    ctx.shadowColor = "#00000067";
    ctx.shadowOffsetX=-10;
    ctx.shadowOffsetY=10;
    ctx.shadowBlur = 4;
    ctx.fillText(Label2,canvas.width/5,canvas.height/2.3);
    ctx.shadowColor='rgba(0,0,0,0)';
}

function submit(){
    $("button").click(function() {
        var pressed = $(this).val();

        if(pressed=="P1color"){
            var colorTest = isColor(in_P1Color.value);
            if(colorTest){
                player1Color =in_P1Color.value;
                color = player1Color
                Message.innerHTML = "Player 1's color has changed to " + player1Color;
            }else{
                Message.innerHTML = "Not a color!"
            }
        }

        if(pressed=="P2color"){
            var colorTest = isColor(in_P2Color.value);
            if(colorTest){
                player2Color =in_P2Color.value;
                Message.innerHTML = "Player 2's color has changed to " + player2Color;
            }else{
                Message.innerHTML = "Not a color!"
            }
        }

        



    });
}

function isColor(ColorAttempt){
    var attempt = new Option().style;
    attempt.color = ColorAttempt;
    return attempt.color !== "";
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



