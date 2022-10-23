//This file contains all functions are used by both game modes.

var canvas = document.getElementById("myCanvas");
var buttons = document.getElementsByClassName("Button");
var ColumnButtons = document.getElementById("ColumnsContainer");
var Game2Buttons = document.getElementsByClassName("Game2Button");
var GameBack = document.getElementById("GameBack");
var Controls = document.getElementById("Controls");

var ctx = canvas.getContext("2d");

var player1Color = "#FFC0CB";
var player2Color = "#707bc0";

var color = player1Color;

var dx = 55;
var dy;

let filled = new Array(7);
let Moving = 0;

function drawPlayerCircle(player, row, Column) {
    if (player == 1) {
        color = player1Color;
    } else {
        color = player2Color;
    }

    var p_x = 55 + (Column - 1) * 100;
    var p_y = 55 + row * 100;

    if(row==0){
        filled[Column] = Column
    }
    //Main Circle
    ctx.save()
    ctx.beginPath();
    ctx.arc(p_x, p_y, 38, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "3.5";
    ctx.stroke();
    ctx.closePath();
    ctx.restore()

    //Inside Circle
    ctx.beginPath();
    ctx.arc(p_x, p_y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "3";
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fill();
    ctx.closePath();

    //Inside Circle Lines
    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(p_x, p_y, 25 - 5 * i, 0, Math.PI * 2, false);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "1";
        ctx.stroke();
        ctx.closePath();
    }

    //Test of transparency ?

    ctx.beginPath();
    ctx.arc(p_x, p_y, 40, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(1, 1, 69,0)";
    ctx.fill();
    ctx.closePath();

    if (player == 1) {
        color = player2Color;
    } else {
        color = player1Color;
    }
    if(row != 0){
        Unlighter(Column);
    }

    if(Moving==1){
        MovingCheck();
    }
    
}

function drawGameBoard() {
    if (player == 1) {
        color = player1Color;
    }

    HideButtons();
    filled = new Array(7);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle= "rgba(10, 10, 255,0.56)";
    ctx.fill();
    ctx.closePath();

    for (let j = 0; j < 6; j++) {
        dy = 55 + 100 * j;
        drawGameBoardSlots();
        for (let i = 0; i < 7; i++) {
            dx = 55 + 100 * i;
            drawGameBoardSlots();
        }
    }
}

function drawGameBoardSlots() {
    ctx.beginPath();
    ctx.arc(dx, dy, 40, 0, Math.PI * 2, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#4f4fd8";
    ctx.stroke();
    ctx.fillStyle = "#010145";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(dx, dy, 45, 0, Math.PI * 2, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
}

function HideButtons() {
    for (let value of buttons) {
        value.style.display = "none";
    }
}

function ShowButtons() {
    for (let value of buttons) {
        value.style.display = "block";
    }
}

function DisableColumn() {
    ColumnButtons.style.display = "none";
}

function EnableColumn() {
    ColumnButtons.style.display = "initial";
}

function ShowGameBack() {
    GameBack.style.display = "initial";
    Controls.style.display = "initial";
}

function HideGameBack() {
    GameBack.style.display = "none";
    Controls.style.display = "none";
}

function showGame2Buttons() {
    for (let value of Game2Buttons) {
        value.style.display = "initial";
    }
}

function hideGame2Buttons() {
    for (let value of Game2Buttons) {
        value.style.display = "none";
    }
}

function Highlights(event) {
    if (player == 1) {
        color = player1Color;
    } else {
        color = player2Color;
    }  
    
    
    var Col_num = event.target.value;

    var p_x = 55 + (Col_num - 1) * 100;

    if(filled.includes(Col_num)){
        p_x = -500;
    }

    if(Moving==1){
        var O_color = color;
        if (player == 1) {
            color = player2Color;
        } else {
            color = player1Color;
        }
    }

    //Main Circle
    ctx.beginPath();
    ctx.arc(p_x, 55, 38, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "3.5";
    ctx.stroke();
    ctx.closePath();

    //Inside Circle
    ctx.beginPath();
    ctx.arc(p_x, 55, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "3";
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fill();
    ctx.closePath();

    //Inside Circle Lines
    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(p_x, 55, 25 - 5 * i, 0, Math.PI * 2, false);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "1";
        ctx.stroke();
        ctx.closePath();
    }

    //Test of transparency ?

    ctx.beginPath();
    ctx.arc(p_x, 55, 40, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(1, 1, 69,0.3)";
    ctx.fill();
    ctx.closePath();

    if(Moving==1){
        ctx.beginPath();
        ctx.arc(p_x, 55, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = O_color;
        ctx.fill();
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "3.5";
        ctx.stroke();
        ctx.closePath();
    }
}

function Unlights(event) {
    var Col_num = event.target.value;


    var u_x = 55 + (Col_num - 1) * 100;

    if(filled.includes(Col_num)){
        u_x = -500
    }

    ctx.beginPath();
    ctx.arc(u_x, 55, 40, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(1, 1, 69,1)";
    ctx.fill();
    ctx.closePath();
}
//I do not like this function. Will create better solution
function Unlighter(Column) {
    var Col_num = Column;

    var u_x = 55 + (Col_num - 1) * 100;

    ctx.beginPath();
    ctx.arc(u_x, 55, 40, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(1, 1, 69,1)";
    ctx.fill();
    ctx.closePath();
    

    Highlighter(Col_num);
}

//same as function above. I do not like this
function Highlighter(Column) {
    var Col_num = Column;

    var p_x = 55 + (Col_num - 1) * 100;

    if(Moving==1){
        var O_color = color;
        if (player == 1) {
            color = player2Color;
        } else {
            color = player1Color;
        }
    }

    //Main Circle
    ctx.beginPath();
    ctx.arc(p_x, 55, 38, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "3.5";
    ctx.stroke();
    ctx.closePath();

    //Inside Circle
    ctx.beginPath();
    ctx.arc(p_x, 55, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = "3";
    ctx.stroke();
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fill();
    ctx.closePath();

    //Inside Circle Lines
    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.arc(p_x, 55, 25 - 5 * i, 0, Math.PI * 2, false);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "1";
        ctx.stroke();
        ctx.closePath();
    }

    //Test of transparency ?

    ctx.beginPath();
    ctx.arc(p_x, 55, 40, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(1, 1, 69,0.4)";
    ctx.fill();
    ctx.closePath();

    if(Moving==1){
        ctx.beginPath();
        ctx.arc(p_x, 55, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = O_color;
        ctx.fill();
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = "3.5";
        ctx.stroke();
        ctx.closePath();
    }
}

//Game Functions

function CreateGameBoardArray() {
    const R = 6,
        C = 7;
    const val = 0;

    var GameBoardArray = Array(R);
    for (var i = 0; i < R; i++) {
        GameBoardArray[i] = Array(C).fill(val);
    }

    Moving=0;

    return GameBoardArray;
}


function tokenCheck(Column, GameBoard, player) {
    var Available = false;
    var chk_row = 5;

    while (!Available) {
        if (GameBoard[chk_row][Column - 1] == 0) {
            GameBoard[chk_row][Column - 1] = player;
            Available = true;
        } else if (chk_row > 0) {
            chk_row--;
        } else {
            chk_row = 9;
            break;
        }
    }

    return chk_row;
}

function WinCheck(GameBoard, Row, Column, Player) {
    var win = false;

    var H_win = horizontalCheck(GameBoard, Row, Column, Player);
    var V_win = DownwardCheck(GameBoard, Row, Column, Player);
    var UR_win = UpRightCheck(GameBoard, Row, Column, Player);
    var UL_win = UpLeftCheck(GameBoard, Row, Column, Player);

    if (H_win >= 4 || V_win >= 4 || UR_win >= 4 || UL_win >= 4) {
        win = true;
    }

    return win;
}

function horizontalCheck(GameBoard, Row, Column, player) {
    var Rightwards = false;
    var Leftwards = false;
    var Org_Col = Column;
    var count = -1;

    //Drawing Vals
    var max_col = 9;
    var min_col = 9;
    var max_row = 0;
    var min_row = 9;

    //Scans all tokens to the right of placed tokens
    while (!Rightwards) {
        if (GameBoard[Row][Column - 1] == player) {
            if (Column == 7) {
                max_col = Column;
                Rightwards = true;
            } else {
                max_col = Column;
                Column++;
            }

            max_row = Row;

            count++;
        } else {
            Rightwards = true;
        }
    }

    Column = Org_Col;

    //Scans tokens left of placed token
    while (!Leftwards) {
        if (GameBoard[Row][Column - 1] == player) {
            if (Column == 1) {
                min_col = Column;
                Leftwards = true;
            } else {
                min_col = Column;
                Column--;
            }

            min_row = Row;

            count++;
        } else {
            Leftwards = true;
        }
    }
    if (count >= 4) {
        console.log(min_col, min_row, max_col, max_row);
        drawWinLine(min_col, min_row, max_col, max_row, player);
    }

    return count;
}

function DownwardCheck(GameBoard, Row, Column, Player) {
    var Downwards = false;
    var count = 0;

    var max_col = Column;
    var min_col = Column;
    var max_row = 9;
    var min_row = Row;

    while (!Downwards) {
        if (GameBoard[Row][Column - 1] == Player) {
            if (Row == 5) {
                max_row = Row;
                Downwards = true;
            } else {
                max_row = Row;
                Row++;
            }
            count++;
        } else {
            Downwards = true;
        }
    }

    if (count >= 4) {
        drawWinLine(min_col, min_row, max_col, max_row, player);
    }

    return count;
}

function UpRightCheck(GameBoard, Row, Column, Player) {
    var O_Col = Column;
    var O_Row = Row;
    var Upright = false;
    var Downleft = false;

    //Drawing Vals
    var max_col = 9;
    var min_col = 9;
    var max_row = 9;
    var min_row = 9;

    var count = -1;

    while (!Upright) {
        if (GameBoard[Row][Column - 1] == Player) {
            if (Row == 0 || Column == 7) {
                max_col = Column;
                max_row = Row;
                Upright = true;
            } else {
                max_col = Column;
                max_row = Row;
                Row--;
                Column++;
            }
            count++;
        } else {
            Upright = true;
        }
    }

    Column = O_Col;
    Row = O_Row;

    while (!Downleft) {
        if (GameBoard[Row][Column - 1] == Player) {
            if (Row == 5 || Column == 1) {
                min_row = Row;
                min_col = Column;
                Downleft = true;
            } else {
                Row++;
                min_row = Row;
                Column--;
                min_col = Column;
            }
            count++;
        } else {
            Downleft = true;
        }
    }

    if (count >= 4) {
        console.log("upright");
        drawWinLine(min_col, min_row, max_col, max_row, player);
    }

    return count;
}

function UpLeftCheck(GameBoard, Row, Column, Player) {
    var O_Col = Column;
    var O_Row = Row;
    var Upleft = false;
    var Downright = false;

    //Drawing Vals
    var max_col = 9;
    var min_col = 9;
    var max_row = 9;
    var min_row = 9;

    var count = -1;

    while (!Upleft) {
        if (GameBoard[Row][Column - 1] == Player) {
            if (Row == 0 || Column == 1) {
                min_col = Column;
                min_row = Row;
                Upleft = true;
            } else {
                min_col = Column;
                min_row = Row;
                Row--;
                Column--;
            }
            count++;
        } else {
            Upleft = true;
        }
    }

    Column = O_Col;
    Row = O_Row;

    while (!Downright) {
        if (GameBoard[Row][Column - 1] == Player) {
            if (Row == 5 || Column == 7) {
                max_col = Column;
                max_row = Row;
                Downright = true;
            } else {
                max_col = Column;
                max_row = Row;
                Row++;
                Column++;
            }
            count++;
        } else {
            Downright = true;
        }
    }

    if (count >= 4) {
        drawWinLine(min_col, min_row, max_col, max_row, player);
    }

    return count;
}

function drawWinScreen(Player) {
    //Failsafe to ensure correct color
    if (Player == 1) {
        color = player1Color;
    } else {
        color = player2Color;
    }

    var WinText = "Player " + Player + " wins!";
    ctx.fillStyle = color;
    ctx.fillText(WinText, canvas.width / 1.9, canvas.height - 30);
}

function drawWinLine(min_c, min_r, max_c, max_r, Player) {
    console.log(min_c, min_r, max_c, max_r);

    if (Player == 1) {
        color = player1Color;
    } else {
        color = player2Color;
    }

    var p_x = 55 + (min_c - 1) * 100;
    var p_y = 55 + min_r * 100;

    var d_x = 55 + (max_c - 1) * 100;
    var d_y = 55 + max_r * 100;

    ctx.beginPath();
    ctx.arc(p_x, p_y, 10 ,0, Math.PI * 2, false);
    ctx.arc(d_x, d_y, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = color; 
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(p_x, p_y);
    ctx.lineTo(d_x, d_y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
}

function filledCheck(Column){
    console.log(Column);
    if(filled.includes(Column)){
        filled[Column] = 0;
    }
}

function MovingCheck(){
    if(Moving==0){
        Moving=1;
    }else{
        Moving = 0;
    }
}