var player1 = prompt("Player One: Enter your name. you will be blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter your name. you will be red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum){
    console.log('You won starting at this row,col')
    console.log(rowNum)
    console.log(colNum)
}

function changeColor(rowIndex, colIndex,color){
    return table.eq(rowIndex).find('td').eq(colIndex).css('background-color',color);
}

function returnColor(rowIndex, colIndex,color){
    return table.eq(rowIndex).find('td').eq(colIndex).css('background-color');
}

function checkBottom(colIndex){
    var colorReport = returnColor(5, colIndex);
    for (let row = 5; row > -1; row--) {
        colorReport = returnColor(row,colIndex);
        if (colorReport == 'rgb(128, 128, 128)'){
            return row
        }
        
    }
}

function colorMatchCheck(one,two,three,four){
    // console.log(one, two, three, four)
    return (one === two && one === three && one ===four && one!=='rgb(128, 128, 128)' 
    && one !== undefined)
}

function horizontalWinCheck(){
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
            if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))){
                console.log('horiz');
                reportWin(row,col);
                return true;
            }else{
                continue;
            }
            
        }
        
        
    }
}


function verticalWinCheck(){
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 3; row++){
            if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3,col))){
                console.log("veritcal");
                reportWin(row,col);
                return true;
            }else{
                continue;
            }
        } 
        
    }
}

function diagonalRightWinCheck(){
    for (var col = 0; col < 4; col++) {
        for (var row = 0; row < 3; row++){
            if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2), returnColor(row+3,col+3))){
                console.log("diagonal");
                reportWin(row,col);
                return true;
            }else{
                continue;
            }
        }

    }    
}

function diagonalLeftWinCheck(){
    for (var col = 6; col > 2; col--) {
        for (var row = 0; row < 3; row++){
            if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col-1), returnColor(row+2,col-2), returnColor(row+3,col-3))){
                console.log("diagonal");
                reportWin(row,col);
                return true;
            }else{
                continue;
            }
        }

    }    
}

var currentPlayer = 1;
var currentName= player1;
var currentColor = player1Color;

$('#feedback').text(player1 + " it is your turn, pcik a column to drop in!")
var gameState = true

    

$('.board td').on('click', function(){
    var col = $(this).index();
    bottomAvail = checkBottom(col);

    changeColor(bottomAvail, col, currentColor)

    if (horizontalWinCheck() || verticalWinCheck() || diagonalLeftWinCheck() || diagonalRightWinCheck()){
        $('#bigboy').text(currentName + " you have won!!!");   
        $('.board').fadeOut('fast');
        $('#feedback').text('Refresh the page to play again')     
    }

    currentPlayer=currentPlayer * -1;

    if (currentPlayer === 1){
        currentName = player1;
        $('#feedback').text(currentName+" it is your turn");
        currentColor = player1Color;
    }else{
        currentName = player2;
        $('#feedback').text(currentName+ " it is your turn");
        currentColor = player2Color;
    }
})





// horizontalWinCheck()
// verticalWinCheck()
// diagonalRightWinCheck()
// diagonalLeftWinCheck()
// // Change colour of part

// function changeRed(){
//     $(this).addClass('turnRed')
// }

// function getRow(){
//     return $(this).parent().index()
// }


// // $('#test').click(function(){
// //     change
// // })


// // $('tr').each(function(index){
// //     console.log(index + ":" + $(this));
// // })

// // $('tr').each(function(index){
// //     $('td').each(function(index2){
// //         console.log(index + index2 + ":" + $(this));
// //     })
// // })

// // $('td').each(function(){
// //     $(this).on('click',changeRed)
// //     $(this).on('click', getRow)
// // })

// $('td').each(function(){
//     if ($(this).on('click', getRow) == 0){
//         $(this).on('click',changeRed)
//         console.log('sdsd')
//     }
// })
// // var topRow = $('#top td')


// // topRow.each(function(){
// //     $(this).on('click', changeRed)
// // })

// // topRow.each(function(){
// //     $(this).on('click', function(index, value){
// //         console.log("index =" + index)
// //         console.log("value =" + value)
// //     })
// // })

// // $.each([ 52, 97 ], function( index, value ) {
// //     alert( index + ": " + value );
// //   });

// // for (let i = 0; i < table.length; i++) {
// //     alert(table[i])    
// // }


// $('#test').click(changeColor())