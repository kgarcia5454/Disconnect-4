var player = 1;
var Drop = 0;
var Game2Buttons = document.getElementsByClassName("Game2Button");
var GameBoard;
var MoveStyle = 0;

function game2Start() {
    player = 1;
    GameBoard = CreateGameBoardArray();

    drawGameBoard();
    showGame2Buttons();
    ShowGameBack();
}

function DropMode() {
    MoveStyle = 1;
    EnableColumn();
    hideGame2Buttons();

    var row = 9;
    var Win = false;

    $("button")
        .unbind()
        .click(function () {
            var pressed = $(this).val();

            row = tokenCheck(pressed, GameBoard, player);

            if (row != 9) {
                drawPlayerCircle(player, row, pressed);
                Win = WinCheck(GameBoard, row, pressed, player);

                if (Win) {
                    DisableColumn();
                    hideGame2Buttons();
                    drawWinScreen(player);
                }

                if (player == 1) {
                    player = 2;
                } else {
                    player = 1;
                }

                MoveStyle = 0;
            }

            if (MoveStyle == 0 && !Win) {
                DisableColumn();
                showGame2Buttons();
            }
        });
}

async function MoveMode() {
    MoveStyle = 1;
    EnableColumn();
    hideGame2Buttons();

    var row = 9;
    var new_row = 9;
    var Win = false;

    $("button")
        .unbind()
        .click(function () {
            var pressed = $(this).val();

            row = OpponentTokenCheck(pressed, GameBoard, player);

            if (row != 9) { 
                filledCheck(pressed)
                MoveOpponentCircle();
            } else {
                MoveStyle = 0;
            }

            if (MoveStyle == 0) {
                DisableColumn();
                showGame2Buttons();
            }
        });
}

function OpponentTokenCheck(Column, GameBoard, player) {
    var Org_Player = player;

    if (player == 1) {
        player = 2;
    } else {
        player = 1;
    }

    var Available = false;
    var chk_row = 0;

    while (!Available) {
        if (GameBoard[chk_row][Column - 1] != 0) {
            if (GameBoard[chk_row][Column - 1] == player) {
                GameBoard[chk_row][Column - 1] = 0;
                ClearSlot(chk_row, Column);
                Available = true;
            } else {
                chk_row = 9;
                break;
            }
        } else if (chk_row < 5) {
            chk_row++;
        } else {
            chk_row = 9;
            break;
        }
    }

    player = Org_Player;

    return chk_row;
}

function MoveOpponentCircle() {
    var row = 9;
    var pressed;
    var Moving;

    $("button")
        .unbind()
        .click(function () {
            pressed = $(this).val();

            Moving = player;

            if (Moving == 1) {
                Moving = 2;
            } else {
                Moving = 1;
            }
            row = tokenCheck(pressed, GameBoard, Moving);

            if (row != 9) {
                
                GameBoard[row][pressed - 1] = Moving;
                
                drawPlayerCircle(Moving, row, pressed);
                opponentWin=OpponentWinCheck(GameBoard, row, pressed, Moving);

                if (opponentWin) {
                    DisableColumn();
                    hideGame2Buttons();
                    drawWinScreen(Moving);
                }else{

                    row = 9;

                    if (player == 1) {
                        player = 2;
                    } else {
                        player = 1;
                    }

                    DisableColumn();
                    showGame2Buttons();
                }
            }
        });
}

function OpponentWinCheck(GameBoard, Row, Column, Player) {
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

function ClearSlot(row, Column) {
    var p_x = 55 + (Column - 1) * 100;
    var p_y = 55 + row * 100;

    ctx.beginPath();
    ctx.arc(p_x, p_y, 40, 0, Math.PI * 2, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#2c2cc7";
    ctx.stroke();
    ctx.fillStyle = "#010145";
    ctx.fill();
    ctx.closePath();
}
