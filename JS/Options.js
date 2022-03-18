var Options = document.getElementById("Options");
var in_P1Color = document.getElementById("Player1Color");
var in_P2Color = document.getElementById("Player2Color");


function drawOptions(){
    //temp
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

    var gradient = ctx.createLinearGradient(0, 0, 300, 0);
    gradient.addColorStop(0, "rgb(223, 223, 223)");
    gradient.addColorStop(0.42, "rgb(148, 187, 233)");
    gradient.addColorStop(1, "rgb(148, 187, 233)");

    ctx.font = "80px Geneva";
    ctx.textAlign = "center";
    ctx.fillStyle = gradient;
    ctx.shadowColor = "#00000067";
    ctx.shadowOffsetX=-10;
    ctx.shadowOffsetY=10;
    ctx.shadowBlur = 4;
    ctx.fillText(Title,canvas.width/2,canvas.height/6);
    ctx.shadowColor='rgba(0,0,0,0)';

}

function drawOptionLabels(){
    var Label1 = "Player 1 Color:";

    ctx.font = "30px Geneva";
    ctx.textAlign = "center";
    ctx.fillStyle = "white"
    ctx.shadowColor = "#00000067";
    ctx.shadowOffsetX=-10;
    ctx.shadowOffsetY=10;
    ctx.shadowBlur = 4;
    ctx.fillText(Label1,canvas.width/5,canvas.height/3.5);
    ctx.shadowColor='rgba(0,0,0,0)';

    var Label2 = "Player 2 Color:";

    ctx.font = "30px Geneva";
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
        console.log("PRESSED:" + pressed);

        if(pressed=="P1color"){
            player1Color =in_P1Color.value;
            color = player1Color
        }

        if(pressed=="P2color"){
            player2Color =in_P2Color.value;
        }



    });
}

function isColor(ColorAttempt){
    var s = new Option().style;
    s.color = ColorAttempt;
    return s.color !== "";
}

function ShowOptions(){
    Options.style.display = "initial";

}

function HideOptions(){
    Options.style.display = "none";
}



