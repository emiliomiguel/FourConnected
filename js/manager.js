
  //renderTiles();
  // $('#game-over').toggle();
//};

// function renderTiles () {
//   game.board.forEach(function(row, rowIndex){
//     row.forEach(function (cell, cellIndex) {
//       if (cell) {
//         var tileContainer = document.getElementById("tile-container");
//         var newTile       = document.createElement("div");
//
//        newTile.classList  = "tile val-" + cell;
//        newTile.classList += " tile-position-" + rowIndex + "-" + cellIndex;
//        newTile.innerHTML  = (cell);
//
//        tileContainer.appendChild(newTile);
//       }
//     });
//   });
// }

function FourConnected () {
  this.players = ["red", "black"];
  this.turn=0;

  this.board = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null]
  ];
}

FourConnected.prototype._renderBoard = function () {
  this.board.forEach(function(row){ console.log(row); });
};

FourConnected.prototype._askPlayer = function () {
  var choosenColumn = prompt("Choose Column");
  return choosenColumn;
}



FourConnected.prototype._chooseCol = function (col) {
  var colSelector = [];
  var that = this;
  this.board.forEach(function(row, rowIndex){
  colSelector.push(that.board[rowIndex][col]);
  })
  return colSelector;
};

FourConnected.prototype._pushTile = function () {
  var col = this._askPlayer();
  var column = this._chooseCol(col);
  var rowIndex = column.length - 1;

  for(var i = column.length - 1; i>= 0; i -- ) {
    if(column[i] === null) {
      rowIndex = i;
      if(this.turn == 0){
        this.board[rowIndex][col] = "red";
      } else {
        this.board[rowIndex][col] = "black";
      }
      return;
    }
  }
      this._changeTurn();
};

  FourConnected.prototype._changeTurn = function () {
    if (this.turn===0){
      this.turn=1;
    }
      else {
        this.turn=0;
      }
  };




    // if(that.turn === 0){
    //   console.log("board", this.board[i]);
    //   this.board[i][col] = "red";
    // } else {
    //   that.board[i][col] = "black";
    // }

//
//
//
//   if (this.board[0][col]===null) {
//     // console.log("hola");
//   }
//   else {
//     for (var row=1; row<6; row++) {
//       // console.log("adios");
//       this.board[row-1][col]="hola";
//       }
//     }
//
//   // this.turn++;
// };





// FourConnected.prototype._getAvailablePosition = function () {
//   var emptyTiles = [];
//
//   this.board.forEach(function(row, rowIndex){
//     row.forEach(function(elem, colIndex){
//       if (!elem) emptyTiles.push({ x: rowIndex, y: colIndex });
//     });
//   });
//
//   if (emptyTiles.length === 0)
//     return false;
// };
//
// FourConnected.prototype._chooseCol = function () {
//
// }

// FourConnected.prototype._isGamePlayer2 = function () {
//   if (this._getAvailablePosition())
//     return;
//
//   var that   = this;
//   var isLost = true;
//
//   this.board.forEach(function (row, rowIndex) {
//     row.forEach(function (cell, cellIndex) {
//       var current = that.board[rowIndex][cellIndex];
//     }
//   }
//         });
    //   var top, bottom, left, right;
    //
    //   if (that.board[rowIndex][cellIndex - 1]) {
    //     left  = that.board[rowIndex][cellIndex - 1];
    //   }
    //   if (that.board[rowIndex][cellIndex + 1]) {
    //     right = that.board[rowIndex][cellIndex + 1];
    //   }
    //   if (that.board[rowIndex - 1]) {
    //     top    = that.board[rowIndex - 1][cellIndex];
    //   }
    //   if (that.board[rowIndex + 1]) {
    //     bottom = that.board[rowIndex + 1][cellIndex];
    //   }
    //
    //   if (current === top || current === bottom || current === left || current === right)
    //     isLost = false;
    // });
