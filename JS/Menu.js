
function drawMenu(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
   

    HideOptions();
    DisableColumn();
    ShowButtons();

    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle= " #00008b";
    ctx.fill(); 
    ctx.closePath();

    drawTitle();

}

function drawTitle(){
    var Title = "Dis-connect 4";

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