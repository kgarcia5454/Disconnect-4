
function drawMenu(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    HideGameBack();
    hideGame2Buttons();
    HideOptions();
    DisableColumn();
    ShowButtons();

    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle= "rgba(10, 10, 255,0.25)";
    ctx.fill(); 
    ctx.closePath();

    drawTitle();

}

function drawTitle(){
    var Title = "Dis-Connect 4";

    

    ctx.font = "80px Sans-serif";
    ctx.textAlign = "center";
    ctx.strokeStyle = "black"
    ctx.fillStyle = "white";
    ctx.lineWidth= 12;
    ctx.strokeText(Title,canvas.width/2,canvas.height/6);
    ctx.fillText(Title,canvas.width/2,canvas.height/6);
    
}