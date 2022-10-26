var player = 1;

function game1Start(){
    player = 1;
    
    drawGameBoard();
    hideGame2Buttons("Game1");
    EnableColumn()
    ShowGameBack();
    Game1();
}

function Game1(){
    
    let GameBoard = CreateGameBoardArray();
    

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
                DisableColumn();
                drawWinScreen(player);
            }


            if(player==1){
                player=2;
            }else{player = 1;}

            
        }

    });
} 