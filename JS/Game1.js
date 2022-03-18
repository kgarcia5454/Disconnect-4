var player = 1; 


function game1Start(){
    drawGameBoard();

    Game1();
}


function Game1(){
    var GameBoard = CreateGameBoardArray();

    var row = 9;
    var Win = false;

    $("button").click(function() {
        var pressed = $(this).val();
        console.log("PRESSED:" + pressed);
        
        row=tokenCheck(pressed,GameBoard,player);

        if(row!=9){
            drawPlayerCircle(player,row,pressed);
            Win = WinCheck(GameBoard,row,pressed,player);

            if(Win){
                console.log("YOU WON A TETRIS:" + player);
            }


            if(player==1){
                player=2;
            }else{player = 1;}

            
        }

    });
} 