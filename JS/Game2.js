var player = 1; 
var Drop = 0;
var Game2Buttons = document.getElementsByClassName("Game2Button");
var GameBoard;
var MoveStyle=0;

function game2Start(){

    player = 1;
    GameBoard = CreateGameBoardArray();
    
    drawGameBoard();
    showGame2Buttons();
    ShowGameBack();
    
}

function DropMode(){

    console.log("Player detected:::" + player);
    MoveStyle=1;
    EnableColumn();
    hideGame2Buttons();

    console.log(GameBoard);
    console.log("Drop Changed");

    var row = 9;
    var Win = false;
    
    $("button").unbind().click(function() {
        var pressed = $(this).val();
        
        
        row=tokenCheck(pressed,GameBoard,player);

        if(row!=9){
        
            drawPlayerCircle(player,row,pressed);
            Win = WinCheck(GameBoard,row,pressed,player);

            if(Win){
                console.log("YOU WON Player:" + player);
            }


            if(player==1){
                player=2;
            }else{player = 1;}
            console.log("movestyled = 0;");
            MoveStyle=0; 
        }

        if(MoveStyle==0){
            console.log("ended mode")
            DisableColumn();
            showGame2Buttons();
        }
    });

}

async function MoveMode(){
    console.log(GameBoard)
    MoveStyle=1;
    EnableColumn();
    hideGame2Buttons();

    var row = 9;
    var new_row = 9;
    var Win = false;
    
    $("button").unbind().click(function() {
        var pressed = $(this).val();
        
        
        row=OpponentTokenCheck(pressed,GameBoard,player);

        console.log("what is row: "+ row);

        if(row!=9){
            MoveOpponentCircle();
        }else{
            console.log("No Token Detected")
            MoveStyle=0;
        }

        if(MoveStyle==0){
            console.log("ended mode")
            DisableColumn();
            showGame2Buttons();
        }
    });

   
    
}

function OpponentTokenCheck(Column,GameBoard,player){
    var Org_Player = player;

    if(player==1){
        player=2;
    }else{
        player=1;
    }

    var Available = false;
    var chk_row = 0;
    

    while(!Available){
        if(GameBoard[chk_row][Column-1]!=0){
            if(GameBoard[chk_row][Column-1]==player){
                GameBoard[chk_row][Column-1]=0
                ClearSlot(chk_row,Column);
                Available=true;
            }else{
                chk_row=9;
                break;
            }
        }else if(chk_row<5){
        
            chk_row++;
        }else{
            chk_row=9;               
            break;
        }
    }



    console.log(Org_Player);

    player = Org_Player;

    return chk_row;

}

function MoveOpponentCircle(){

    console.log("Player detected:::" + player);
    var row = 9;
    var pressed;
    var Moving
    

    $("button").unbind().click(function() {
        pressed = $(this).val();
        
        Moving = player

        if(Moving==1){
            Moving=2;
        }else{
            Moving=1;
        }
        row=tokenCheck(pressed,GameBoard,Moving);

        if(row!=9){

                GameBoard[row][pressed-1]=Moving
                drawPlayerCircle(Moving,row,pressed); 
                row=9;

                if(player==1){
                    player=2;
                }else{player = 1;}



                console.log("ended mode")
                DisableColumn();
                showGame2Buttons();

        }    
    });

}



function ClearSlot(row,Column){
    var p_x =55+ ((Column-1)*100);
    var p_y =55+ ((row)*100);

    ctx.beginPath();
    ctx.arc(p_x,p_y,40,0, Math.PI*2, false);
    ctx.lineWidth=10;
    ctx.strokeStyle = "#2c2cc7"
    ctx.stroke();
    ctx.fillStyle = "#010145";
    ctx.fill();
    ctx.closePath();
}


