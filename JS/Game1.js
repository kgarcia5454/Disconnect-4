
 var player = 1; 

function game1Start(){
    
    drawGameBoard();
    Game1();
}


function Game1(){
    player = 1;
    var GameBoard = CreateGameBoardArray();

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

            
        }

    });
} 