// This is the javascript for the tictac toe game

// matrix for main game play
var mainMatrix = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
// Variable declaration
var isWin = false,i,j,curPlayer=0,count=0,prev=0;

function isWinFun() {
    if ((mainMatrix[0][0]===mainMatrix[0][1] && mainMatrix[0][0]===mainMatrix[0][2] && mainMatrix[0][0]!==0)||(mainMatrix[1][0]===mainMatrix[1][1] && mainMatrix[1][0]===mainMatrix[1][2] && mainMatrix[1][0]!==0)||(mainMatrix[2][0]===mainMatrix[2][1] && mainMatrix[2][0]===mainMatrix[2][2] && mainMatrix[2][0]!==0)||(mainMatrix[0][0]===mainMatrix[1][0] && mainMatrix[1][0]===mainMatrix[2][0] && mainMatrix[1][0]!==0)||(mainMatrix[0][1]===mainMatrix[1][1] && mainMatrix[1][1]===mainMatrix[2][1] && mainMatrix[1][1]!==0)||(mainMatrix[0][2]===mainMatrix[1][2] && mainMatrix[1][2]===mainMatrix[2][2] && mainMatrix[0][2]!==0)||(mainMatrix[0][0]===mainMatrix[1][1] && mainMatrix[1][1]===mainMatrix[2][2] && mainMatrix[0][0]!==0)||(mainMatrix[0][0]===mainMatrix[1][1] && mainMatrix[1][1]===mainMatrix[2][2] && mainMatrix[2][2]!==0)||(mainMatrix[0][2]===mainMatrix[1][1] && mainMatrix[1][1]===mainMatrix[2][0] && mainMatrix[0][2]!==0)) {
        isWin = true;
    } 
    if (isWin && curPlayer===0) {
        document.querySelector('#game-name').innerHTML = 'YOU WON!!!';
    } else if (isWin && curPlayer===1) {
        document.querySelector('#game-name').innerHTML = 'YOU LOST';
    }
}

function divPressed(x) {
    if (!isWin) {
        curPlayer=0;
        var divEl = document.querySelector('#gc-' + x);
        var iEl = document.querySelector('#i-' + x);
        i = Math.trunc((x-1)/3);
        j = x-(3*i)-1;


        if (mainMatrix[i][j]===0) {
            divEl.classList.add('pressed');
            iEl.style.opacity = '1';
            mainMatrix[i][j] = 'O';
            count++;
            // console.log(mainMatrix);
        } else {
            alert('Try another place');
            return;
        }
        isWinFun();
        if (count < 8) {compTurn(x);}
    }
}

function showX(x) 
{
    var iEl = document.querySelector('#i-' + x);
    var divEl = document.querySelector('#gc-' + x);
    divEl.classList.add('pressed');
    iEl.classList.remove('far');
    iEl.classList.remove('fa-circle');
    iEl.classList.add('fas');
    iEl.classList.add('fa-times');
    iEl.style.opacity = '1';
    count++;
    // console.log('in show ' + count);
    // console.log('x = '+x);
    isWinFun();
    console.log(mainMatrix);
}


function compTurn(x) {
    if (!isWin) {
        var p,q;
        p = Math.trunc((prev-1)/3);
        q = prev-(3*p)-1; 
        curPlayer = 1;
        var tmp = 0;
        console.log('tmp  = '+tmp);

        if(prev===8 || mainMatrix[1][1]==='X') {
            if( mainMatrix[1][1] === mainMatrix[2][1]) {
                if(mainMatrix[0][1]===0 && tmp === 0) {
                    mainMatrix[0][1]='X';
                    showX(2);
                    console.log('here');
                    prev=2;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if (x===1 || x===3 || x===7 || x===9) {
            if(mainMatrix[1][1]===0 && tmp === 0) {
                mainMatrix[1][1]='X';
                showX(5);
                console.log('here');
                prev=5;
                tmp=1;
                console.log(tmp);
            }
        }

        if(mainMatrix[1][1]==='O' && mainMatrix[1][2]==='O') {
            if(mainMatrix[0][1]===0 && tmp === 0 && mainMatrix[1][1]===0) {
                mainMatrix[0][1]='X';
                showX(2);
                console.log('here');
                prev=2;
                tmp=1;
                console.log(tmp);
            } 
        }

        if (mainMatrix[2][0]===mainMatrix[1][2] && mainMatrix[1][2]==='O' && tmp===0) {
            if(mainMatrix[2][1]===0 && tmp === 0 && mainMatrix[1][1]===0) {
                mainMatrix[2][1]='X';
                showX(8);
                console.log('here');
                prev=8;
                tmp=1;
                console.log(tmp);
            } 
        }
       
        if (x===1 || prev===1) {
           if( mainMatrix[0][1] === mainMatrix[0][0]) {
                if(mainMatrix[0][2]===0 && tmp === 0) {
                    mainMatrix[0][2]='X';
                    showX(3);
                    console.log('here');
                    prev=3;
                    tmp=1;
                    console.log(tmp);
                } 
           }
           if( mainMatrix[0][2] === mainMatrix[0][0]) {
                if(mainMatrix[0][1]===0 && tmp === 0) {
                    mainMatrix[0][1]='X';
                    showX(2);
                    console.log('here');
                    prev=2;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][0] === mainMatrix[0][0]) {
                if(mainMatrix[2][0]===0 && tmp === 0) {
                    mainMatrix[2][0]='X';
                    showX(7);
                    console.log('here');
                    prev=7;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][0] === mainMatrix[0][0]) {
                if(mainMatrix[1][0]===0 && tmp === 0) {
                    mainMatrix[1][0]='X';
                    showX(4);
                    console.log('here');
                    prev=4;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][1] === mainMatrix[0][0]) {
                if(mainMatrix[2][2]===0 && tmp === 0) {
                    mainMatrix[2][2]='X';
                    showX(9);
                    console.log('here');
                    prev=9;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][2] === mainMatrix[0][0]) {
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }

        }

        if (x===2 || prev===2) {
            if(mainMatrix[0][2]===0 && tmp===0 && count===1) {
                mainMatrix[0][2]='X';
                showX(3);
                console.log('here');
                prev=3;
                tmp=1;
            }
            if( mainMatrix[0][2] === mainMatrix[0][1]) {
                if(mainMatrix[0][0]===0 && tmp === 0) {
                    mainMatrix[0][0]='X';
                    showX(1);
                    console.log('here');
                    prev=1;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][0] === mainMatrix[0][1]) {
                if(mainMatrix[0][2]===0 && tmp === 0) {
                    mainMatrix[0][2]='X';
                    showX(3);
                    console.log('here');
                    prev=3;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][1] === mainMatrix[0][1]) {
                if(mainMatrix[2][1]===0 && tmp === 0) {
                    mainMatrix[2][1]='X';
                    showX(8);
                    console.log('here');
                    prev=8;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][1] === mainMatrix[0][1]) {
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if(x===3 || prev===3) {
            if( mainMatrix[0][1] === mainMatrix[0][2]) {
                if(mainMatrix[0][0]===0 && tmp === 0) {
                    mainMatrix[0][0]='X';
                    showX(1);
                    console.log('here');
                    prev=1;
                    tmp=1;
                    console.log(tmp);
                } 
           }
           if( mainMatrix[0][0] === mainMatrix[0][2]) {
                if(mainMatrix[0][1]===0 && tmp === 0) {
                    mainMatrix[0][1]='X';
                    showX(2);
                    console.log('here');
                    prev=2;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][2] === mainMatrix[0][2]) {
                if(mainMatrix[2][2]===0 && tmp === 0) {
                    mainMatrix[2][2]='X';
                    showX(9);
                    console.log('here');
                    prev=9;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][2] === mainMatrix[0][2]) {
                if(mainMatrix[1][2]===0 && tmp === 0) {
                    mainMatrix[1][2]='X';
                    showX(6);
                    console.log('here');
                    prev=6;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][1] === mainMatrix[0][2]) {
                if(mainMatrix[2][0]===0 && tmp === 0) {
                    mainMatrix[2][0]='X';
                    showX(7);
                    console.log('here');
                    prev=7;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][0] === mainMatrix[0][2]) {
                
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if(x===4 || prev===4) {
            if(mainMatrix[0][0]===0 && tmp===0 && count===1) {
                mainMatrix[0][0] = 'X';
                showX(1);
                console.log('here');
                prev=1;
                tmp=1;
            }
            if( mainMatrix[1][1] === mainMatrix[1][0]) {
                if(mainMatrix[1][2]===0 && tmp === 0) {
                    mainMatrix[1][2]='X';
                    showX(6);
                    console.log('here');
                    prev=6;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][2] === mainMatrix[1][0]) {
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][0] === mainMatrix[1][0]) {
                if(mainMatrix[2][0]===0 && tmp === 0) {
                    mainMatrix[2][0]='X';
                    showX(7);
                    console.log('here');
                    prev=7;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][0] === mainMatrix[1][0]) {
                if(mainMatrix[0][0]===0 && tmp === 0) {
                    mainMatrix[0][0]='X';
                    showX(1);
                    console.log('here');
                    prev=1;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if(x===5 || prev===5) {
            if( mainMatrix[1][0] === mainMatrix[1][1]) {
                if(mainMatrix[1][2]===0 && tmp === 0) {
                    mainMatrix[1][2]='X';
                    showX(6);
                    console.log('here');
                    prev=6;
                    tmp=1;
                    console.log(tmp);
                }
            }
            if( mainMatrix[1][2] === mainMatrix[1][1]) {
                if(mainMatrix[1][0]===0 && tmp === 0) {
                    mainMatrix[1][0]='X';
                    showX(4);
                    console.log('here');
                    prev=4;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][1] === mainMatrix[1][1]) {
                if(mainMatrix[2][1]===0 && tmp === 0) {
                    mainMatrix[2][1]='X';
                    showX(8);
                    console.log('here');
                    prev=8;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][1] === mainMatrix[1][1]) {
                if(mainMatrix[0][1]===0 && tmp === 0) {
                    mainMatrix[0][1]='X';
                    showX(2);
                    console.log('here');
                    prev=2;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][2] === mainMatrix[1][1]) {
                if(mainMatrix[0][0]===0 && tmp === 0) {
                    mainMatrix[0][0]='X';
                    showX(1);
                    console.log('here');
                    prev=1;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][0] === mainMatrix[1][1]) {
                if(mainMatrix[2][2]===0 && tmp === 0) {
                    mainMatrix[2][2]='X';
                    showX(9);
                    console.log('here');
                    prev=9;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][0] === mainMatrix[1][1]) {
                if(mainMatrix[0][2]===0 && tmp === 0) {
                    mainMatrix[0][2]='X';
                    showX(3);
                    console.log('here');
                    prev=3;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][2] === mainMatrix[1][1]) {
                if(mainMatrix[2][0]===0 && tmp === 0) {
                    mainMatrix[2][0]='X';
                    showX(7);
                    console.log('here');
                    prev=7;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if(x===6 || prev===6) {
            if (mainMatrix[0][2]===0 && tmp===0 && count===1) {
                mainMatrix[0][2]='X';
                showX(3);
                console.log('here');
                prev = 9;
                tmp = 1;
            }
            if( mainMatrix[1][0] === mainMatrix[1][2]) {
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][1] === mainMatrix[1][2]) {
                if(mainMatrix[1][0]===0 && tmp === 0) {
                    mainMatrix[1][0]='X';
                    showX(4);
                    console.log('here');
                    prev=4;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][2] === mainMatrix[1][2]) {
                if(mainMatrix[2][2]===0 && tmp === 0) {
                    mainMatrix[2][2]='X';
                    showX(9);
                    console.log('here');
                    prev=9;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][2] === mainMatrix[1][2]) {
                if(mainMatrix[0][2]===0 && tmp === 0) {
                    mainMatrix[0][2]='X';
                    showX(3);
                    console.log('here');
                    prev=3;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if(x===7 || prev===7) {
            if( mainMatrix[2][1] === mainMatrix[2][0]) {
                if(mainMatrix[2][2]===0 && tmp === 0) {
                    mainMatrix[2][2]='X';
                    showX(9);
                    console.log('here');
                    prev=9;
                    tmp=1;
                    console.log(tmp);
                }
           }
           if( mainMatrix[2][2] === mainMatrix[2][0]) {
                if(mainMatrix[2][1]===0 && tmp === 0) {
                    mainMatrix[2][1]='X';
                    showX(8);
                    console.log('here');
                    prev=8;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][0] === mainMatrix[2][0]) {
                if(mainMatrix[1][0]===0 && tmp === 0) {
                    mainMatrix[1][0]='X';
                    showX(4);
                    console.log('here');
                    prev=4;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][0] === mainMatrix[2][0]) {
                if(mainMatrix[0][0]===0 && tmp === 0) {
                    mainMatrix[0][0]='X';
                    showX(1);
                    console.log('here');
                    prev=1;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][1] === mainMatrix[2][0]) {
                if(mainMatrix[0][2]===0 && tmp === 0) {
                    mainMatrix[0][2]='X';
                    showX(3);
                    console.log('here');
                    prev=3;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][2] === mainMatrix[2][0]) {
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if(x===8 || prev===8) {
            if (mainMatrix[2][2]===0 && tmp===0 && count===1) {
                mainMatrix[2][2]='X';
                showX(9);
                console.log('here');
                prev = 9;
                tmp = 1;
            }
            if( mainMatrix[2][0] === mainMatrix[2][1]) {
                console.log('paglachoda ' + tmp);
                if(mainMatrix[2][2]===0 && tmp === 0) {
                    mainMatrix[2][2]='X';
                    showX(9);
                    console.log('here');
                    prev=9;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[2][2] === mainMatrix[2][1]) {
                if(mainMatrix[2][0]===0 && tmp === 0) {
                    mainMatrix[2][0]='X';
                    showX(7);
                    console.log('here');
                    prev=7;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][1] === mainMatrix[2][1]) {
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][1] === mainMatrix[2][1]) {
                if(mainMatrix[0][1]===0 && tmp === 0) {
                    mainMatrix[0][1]='X';
                    showX(2);
                    console.log('here');
                    prev=2;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if(x===9 || prev===9) {
            if( mainMatrix[2][1] === mainMatrix[2][2]) {
                if(mainMatrix[2][0]===0 && tmp === 0) {
                    mainMatrix[2][0]='X';
                    showX(7);
                    console.log('here');
                    prev=7;
                    tmp=1;
                    console.log(tmp);
                }2
           }
           if( mainMatrix[2][0] === mainMatrix[2][2]) {
                if(mainMatrix[2][1]===0 && tmp === 0 && mainMatrix[1][1]===0) {
                    mainMatrix[2][1]='X';
                    showX(8);
                    console.log('here');
                    prev=8;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][2] === mainMatrix[2][2]) {
                if(mainMatrix[1][2]===0 && tmp === 0) {
                    mainMatrix[1][2]='X';
                    showX(6);
                    console.log('here');
                    prev=6;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][2] === mainMatrix[2][2]) {
                if(mainMatrix[0][2]===0 && tmp === 0) {
                    mainMatrix[0][2]='X';
                    showX(3);
                    console.log('here');
                    prev=3;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[1][1] === mainMatrix[2][2]) {
                if(mainMatrix[0][0]===0 && tmp === 0) {
                    mainMatrix[0][0]='X';
                    showX(1);
                    console.log('here');
                    prev=1;
                    tmp=1;
                    console.log(tmp);
                } 
            }
            if( mainMatrix[0][0] === mainMatrix[2][2]) {
                if(mainMatrix[1][1]===0 && tmp === 0) {
                    mainMatrix[1][1]='X';
                    showX(5);
                    console.log('here');
                    prev=5;
                    tmp=1;
                    console.log(tmp);
                } 
            }
        }

        if (mainMatrix[0][0]==='O' && mainMatrix[2][2]==='O' && mainMatrix[1][1]==='X') {
            if(mainMatrix[2][1]===0 && tmp === 0) {
                mainMatrix[2][1]='X';
                showX(8);
                console.log('here');
                prev=8;
                tmp=1;
                console.log(tmp);
            }
        }

        if (mainMatrix[2][0]==='O' && mainMatrix[0][2]==='O' && mainMatrix[1][1]==='X') {
            if(mainMatrix[2][1]===0 && tmp === 0) {
                mainMatrix[2][1]='X';
                showX(8);
                console.log('here');
                prev=8;
                tmp=1;
                console.log(tmp);
            }
        }

        if(mainMatrix[0][1]===0 && tmp === 0 && mainMatrix[1][1]===0) {
            mainMatrix[0][1]='X';
            showX(2);
            console.log('here');
            prev=2;
            tmp=1;
            console.log(tmp);
        } 

        if ((mainMatrix[2][1]==='O' || mainMatrix[0][1]==='O') && (mainMatrix[1][0]||mainMatrix[1][2])) {
            if(mainMatrix[1][1]===0 && tmp === 0) {
                mainMatrix[1][1]='X';
                showX(5);
                console.log('here');
                prev=5;
                tmp=1;
                console.log(tmp);
            }
        }

        if (mainMatrix[2][1]==='X' && mainMatrix[1][1]==='X' && tmp ===0) {
            if(mainMatrix[0][1]===0 && tmp === 0) {
                mainMatrix[0][1]='X';
                showX(2);
                console.log('here');
                prev=2;
                tmp=1;
                console.log(tmp);
            }
        }

        if (mainMatrix[0][1]==='O' && (mainMatrix[2][0]==='O' || mainMatrix[2][2]==='O')) {
            if(mainMatrix[2][1]===0 && tmp === 0 && mainMatrix[1][1]===0) {
                mainMatrix[2][1]='X';
                showX(8);
                console.log('here');
                prev=8;
                tmp=1;
                console.log(tmp);
            } else {
                if(mainMatrix[1][2]===0 && tmp === 0) {
                    mainMatrix[1][2]='X';
                    showX(6);
                    console.log('here');
                    prev=6;
                    tmp=1;
                    console.log(tmp);
                }
            }
        }

        if (mainMatrix[2][1]==='O' && (mainMatrix[0][0]==='O' || mainMatrix[0][2]==='O')) {
            if(mainMatrix[0][1]===0 && tmp === 0 && mainMatrix[1][1]===0) {
                mainMatrix[0][1]='X';
                showX(2);
                console.log('here');
                prev=2;
                tmp=1;
                console.log(tmp);
            } else {
                if(mainMatrix[1][0]===0 && tmp === 0) {
                    mainMatrix[1][0]='X';
                    showX(4);
                    console.log('here');
                    prev=4;
                    tmp=1;
                    console.log(tmp);
                }    
            }
        }


        if (mainMatrix[0][0]==='O' && mainMatrix[2][2] === 'O' && tmp === 0) {
            if(mainMatrix[1][0]===0 && tmp === 0 && mainMatrix[1][1]===0) {
                mainMatrix[1][0]='X';
                showX(4);
                console.log('here');
                prev=4;
                tmp=1;
                console.log(tmp);
            }
        }

        if (mainMatrix[0][2]==='O' && mainMatrix[2][0] === 'O' && tmp === 0 && count===3) {
            if(mainMatrix[1][2]===0 && tmp === 0) {
                mainMatrix[1][2]='X';
                showX(6);
                console.log('here');
                prev=6;
                tmp=1;
                console.log(tmp);
            }
        }
        if (prev===5 && x===1) {
            if(mainMatrix[1][0]===0 && tmp === 0) {
                mainMatrix[1][0]='X';
                showX(4);
                console.log('here');
                prev=4;
                tmp=1;
                console.log(tmp);
            }
        }

        if (prev===4 && mainMatrix[1][1]==='X') {
            if(mainMatrix[1][2]===0 && tmp === 0) {
                mainMatrix[1][2]='X';
                showX(6);
                console.log('here');
                prev=6;
                tmp=1;
                console.log(tmp);
            }
        }

        if (prev===6 && mainMatrix[1][1]==='X') {
            if(mainMatrix[1][0]===0 && tmp === 0) {
                mainMatrix[1][0]='X';
                showX(4);
                console.log('here');
                prev=6;
                tmp=1;
                console.log(tmp);
            }
        }

        if (mainMatrix[0][0] === 'O' && mainMatrix[2][1]==='O' && tmp===0) {
            if(mainMatrix[2][0]===0 && tmp === 0) {
                mainMatrix[2][0]='X';
                showX(7);
                console.log('here');
                prev=7;
                tmp=1;
                console.log(tmp);
            } 
        } 

        if (count===1) {
            // console.log('5*');
            if(mainMatrix[1][1]===0 && tmp===0 && mainMatrix[1][1]===0) {
                mainMatrix[1][1] = 'X';
                showX(5);
                console.log('here');
                prev=5;
                tmp=1;
                console.log(tmp);
            }
            // console.log('tmp = '+ tmp + ' 0');
        }

        if (mainMatrix[0][0]===0 && tmp===0 && mainMatrix[1][1]===0) {
            mainMatrix[0][0] = 'X';
            showX(1);
            console.log('here');
            prev=1;
            tmp=1;
            console.log(tmp);
            // console.log('1* tmp= '+tmp);
        }

        if (mainMatrix[0][2]===0 && tmp===0 && mainMatrix[1][1]===0) {
            mainMatrix[0][2] = 'X';
            showX(3);
            console.log('here');
            prev=3;
            tmp=1;
            console.log(tmp);
            // console.log('3* tmp= '+tmp);
        }
        if (mainMatrix[2][0]===0 && tmp===0 && mainMatrix[1][1]===0) {
            mainMatrix[2][0] = 'X';
            showX(7);
            console.log('here');
            prev=7;
            tmp=1;
            console.log(tmp);
            // console.log('7* tmp= '+tmp);
        }
        if (mainMatrix[2][2]===0 && tmp===0 && mainMatrix[1][1]===0) {
            mainMatrix[2][2] = 'X';
            showX(9);
            console.log('here');
            prev=9;
            tmp=1;
            console.log(tmp);
            // console.log('3* tmp= '+tmp);
        }
        if (tmp === 0) {
            while (true) {
                temp =  Math.floor(Math.random()*9) + 1;
                var p = Math.trunc((temp-1)/3);
                var q = temp-(3*p)-1;
                // console.log
                if (mainMatrix[p][q]===0) {
                    mainMatrix[p][q] = 'X';
                    showX(temp);
                    console.log('here');
                    // console.log('inside if ' + temp);
                    break;
                } 
            }
        }
        
    }    
}



function newGame() {
    location.reload();
}
