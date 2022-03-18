//This file contains all functions are used by both game modes. 

var canvas = document.getElementById("myCanvas");
var buttons = document.getElementsByClassName("Button");
var ColumnButtons = document.getElementById("ColumnsContainter");
var ctx = canvas.getContext("2d");

var player1Color = "#FFC0CB";
var player2Color = "#707bc0";

var color = player1Color; 

var dx = 55;
var dy;

function drawPlayerCircle(player,row,Column) {
    
    var p_x =55+ ((Column-1)*100);
    var p_y =55+ ((row)*100);

    ctx.beginPath();
    ctx.arc(p_x,p_y,40,0, Math.PI*2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();

    if(player == 1 ){
        color=player2Color;
    }else{
        color=player1Color;
    }

    Unlighter(Column);
}

function drawGameBoard(){
    HideButtons(); 

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.fillStyle= "#00008b";
    ctx.fill();
    ctx.closePath();

    for(let j = 0; j<6; j++){
        dy = 55 + (100*j);
        drawGameBoardSlots();
        for(let i=0; i<7; i++){
            dx = 55 + (100*i);
            drawGameBoardSlots();
        }
    }

    EnableColumn()
}

function drawGameBoardSlots(){
    ctx.beginPath();
    ctx.arc(dx,dy,40,0, Math.PI*2, false);
    ctx.lineWidth=10;
    ctx.strokeStyle = "#2c2cc7"
    ctx.stroke();
    ctx.fillStyle = "#010145";
    ctx.fill();
    ctx.closePath();
}

function HideButtons(){
    for(let value of buttons){
        value.style.display = "none";
    }
}

function ShowButtons(){
    for(let value of buttons){
        value.style.display = "block";
    }
}

function DisableColumn(){
    ColumnButtons.style.display = "none";
}

function EnableColumn(){
    ColumnButtons.style.display = "initial";
}

function Highlights(event){
    var Col_num = event.target.value;

    var h_x = 5 + ((Col_num-1)*100);

    ctx.beginPath();
    ctx.rect(h_x,5,100,600)
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

function Unlights(event){
    var Col_num = event.target.value;

    var u_x = 5 + ((Col_num-1)*100);

    ctx.beginPath();
    ctx.rect(u_x,5,100,600)
    ctx.strokeStyle = "#00008b";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}
//I do not like this function. Will create better solution
function Unlighter(Column){
    var Col_num = Column

    var u_x = 5 + ((Col_num-1)*100);

    ctx.beginPath();
    ctx.rect(u_x,5,100,600)
    ctx.strokeStyle = "#00008b";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();

    Highlighter(Col_num);

}

//same as function above. I do not like this
function Highlighter(Column){
    var Col_num = Column

    var h_x = 5 + ((Col_num-1)*100);

    ctx.beginPath();
    ctx.rect(h_x,5,100,600)
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();

}

//Game Functions 

function CreateGameBoardArray(){
    const R=6, C=7;
    const val = 0;

    var GameBoardArray = Array(R);
    for(var i= 0; i<R; i++){
        GameBoardArray[i] = Array(C).fill(val);
    }

    return GameBoardArray;
}



function tokenCheck(Column,GameBoard,player){

    var Available = false;
    var chk_row = 5;
    

    while(!Available){
        if(GameBoard[chk_row][Column-1]==0){
            GameBoard[chk_row][Column-1]=player;
            Available=true;
        }else if(chk_row>0){
        
            chk_row--;
        }else{
            chk_row=9;               
            break;
        }
    }

    return chk_row;
}

function WinCheck(GameBoard,Row,Column,Player){
    var win = false;


    var H_win = horizontalCheck(GameBoard,Row,Column,Player);
    var V_win = DownwardCheck(GameBoard,Row,Column,Player);
    var UR_win =UpRightCheck(GameBoard,Row,Column,Player);
    var UL_win = UpLeftCheck(GameBoard,Row,Column,Player);

    if(H_win>=4||V_win>=4||UR_win>=4||UL_win>=4){
        console.log("WINNER: "+Player);
        win = true;
    }

    return win;

}


function horizontalCheck(GameBoard,Row,Column,player){
    var Rightwards = false;
    var Leftwards = false;
    var Org_Col = Column;
    var count=-1;
    

    //Scans all tokens to the right of placed tokens
    while(!Rightwards){
        if(GameBoard[Row][Column-1]==player){
            if(Column == 7){
                Rightwards = true;
            }else{
                Column++;
            }
            count++;
        }else{
            Rightwards = true;
        }
    }

    Column = Org_Col;

    //Scans tokens left of placed token
    while(!Leftwards){
        if(GameBoard[Row][Column-1]==player){
            if(Column == 1){
                Leftwards = true;
            }else{
                Column--;
            }
            count++;
        }else{
            Leftwards = true;
        }
    }
    
    return count;
}

function DownwardCheck(GameBoard,Row,Column,Player){
    var Downwards = false;
    var count=0;

    while(!Downwards){
        if(GameBoard[Row][Column-1]==Player){
            if(Row == 5){
                Downwards=true;
            }else{
                Row++;
            }
            count++;
        }else{
            Downwards = true;
        }
    }
    
    return count;
}

function UpRightCheck(GameBoard,Row,Column,Player){
    var O_Col = Column;
    var O_Row = Row;
    var Upright = false;
    var Downleft = false;

    var count = -1;

    while(!Upright){
        if(GameBoard[Row][Column-1]==Player){
            if(Row==0||Column==7){
                Upright=true;
            }else{
                Row--;
                Column++;
            }
            count++;
        }else{
            Upright=true;
        }
    }

    Column = O_Col;
    Row = O_Row;

    while(!Downleft){
        if(GameBoard[Row][Column-1]==Player){
            if(Row==5||Column==1){
                Downleft=true;
            }else{
                Row++;
                Column--;
            }
            count++;
        }else{
            Downleft=true;
        }
    }

    return count;
}

function UpLeftCheck(GameBoard,Row,Column,Player){
    var O_Col = Column;
    var O_Row = Row;
    var Upleft = false;
    var Downright = false;

    var count = -1;

    while(!Upleft){
        if(GameBoard[Row][Column-1]==Player){
            if(Row==0||Column==1){
                Upleft=true;
            }else{
                Row--;
                Column--;
            }
            count++;
        }else{
            Upleft=true;
        }
    }

    Column = O_Col;
    Row = O_Row;

    while(!Downright){
        if(GameBoard[Row][Column-1]==Player){
            if(Row==5||Column==7){
                Downright=true;
            }else{
                Row++;
                Column++;
            }
            count++;
        }else{
            Downright=true;
        }
    }

    return count;
}

