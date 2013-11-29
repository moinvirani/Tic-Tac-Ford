// create board

var board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
];

// Create variable to store the winning player
var winningPlayer = 0;

// Keep track of whose turn it is
var turn = {
        number: 0,
        current_player_color: function() {
                if(this.number % 2 === 0) {
                        return 1;
                }
                else {
                        return 2;
                }
        },
        change_turn: function(){
                this.number += 1;
        }
};

// Check to see if any of the rows has 3 in a row
function check_rows() {
        for (i=0, i < board.length, i++) {
                var same = true;
                for (j=0; j < board[i].length; j++) {
                        if (board[i][j] === 0 || board[i][j] !=== board[i][0]) {
                                same = false;
                        }
                }
                if (same) {
                        return same;
                }
        }
}




