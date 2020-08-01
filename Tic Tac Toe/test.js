
if (x===)



























// function compTurn(x) {
//     var tmp = 0;
//     if (!isWin) {
//         curPlayer = 1;
//         var temp = 0;
//         // console.log('tmp  = '+tmp);
//         if (count===1) {
//             // console.log('5*');
//             if(mainMatrix[1][1]===0 && tmp===0) {
//                 mainMatrix[1][1] = 'X';
//                 showX(5);
//                 tmp=1;
//             }
//             // console.log('tmp = '+ tmp + ' 0');
//         }

//         if (x===1) {
//            if( mainMatrix[0][1] === mainMatrix[0][0]) {
//                 if(mainMatrix[0][2]===0 && tmp === 0) {
//                     mainMatrix[0][2]==='X';
//                     temp=1;
//                 } 
//            }
//            if( mainMatrix[0][2] === mainMatrix[0][0]) {
//                 if(mainMatrix[0][1]===0 && tmp === 0) {
//                     mainMatrix[0][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][0] === mainMatrix[0][0]) {
//                 if(mainMatrix[2][0]===0 && tmp === 0) {
//                     mainMatrix[2][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][0] === mainMatrix[0][0]) {
//                 if(mainMatrix[1][0]===0 && tmp === 0) {
//                     mainMatrix[1][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][1] === mainMatrix[0][0]) {
//                 if(mainMatrix[2][2]===0 && tmp === 0) {
//                     mainMatrix[2][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][2] === mainMatrix[0][0]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }

//         }

//         if (x===2) {
//             if( mainMatrix[0][2] === mainMatrix[0][1]) {
//                 if(mainMatrix[0][0]===0 && tmp === 0) {
//                     mainMatrix[0][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][0] === mainMatrix[0][1]) {
//                 if(mainMatrix[0][2]===0 && tmp === 0) {
//                     mainMatrix[0][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][1] === mainMatrix[0][1]) {
//                 if(mainMatrix[2][1]===0 && tmp === 0) {
//                     mainMatrix[2][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][1] === mainMatrix[0][1]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }
//         }

//         if(x===3) {
//             if( mainMatrix[0][1] === mainMatrix[0][2]) {
//                 if(mainMatrix[0][0]===0 && tmp === 0) {
//                     mainMatrix[0][0]==='X';
//                     temp=1;
//                 } 
//            }
//            if( mainMatrix[0][0] === mainMatrix[0][2]) {
//                 if(mainMatrix[0][1]===0 && tmp === 0) {
//                     mainMatrix[0][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][2] === mainMatrix[0][2]) {
//                 if(mainMatrix[2][2]===0 && tmp === 0) {
//                     mainMatrix[2][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][2] === mainMatrix[0][2]) {
//                 if(mainMatrix[1][2]===0 && tmp === 0) {
//                     mainMatrix[1][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][1] === mainMatrix[0][2]) {
//                 if(mainMatrix[2][2]===0 && tmp === 0) {
//                     mainMatrix[2][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][2] === mainMatrix[0][2]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }
//         }

//         if(x===4) {
//             if( mainMatrix[1][1] === mainMatrix[1][0]) {
//                 if(mainMatrix[1][2]===0 && tmp === 0) {
//                     mainMatrix[1][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][2] === mainMatrix[1][0]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][0] === mainMatrix[1][0]) {
//                 if(mainMatrix[2][0]===0 && tmp === 0) {
//                     mainMatrix[2][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][0] === mainMatrix[1][0]) {
//                 if(mainMatrix[0][0]===0 && tmp === 0) {
//                     mainMatrix[0][0]==='X';
//                     temp=1;
//                 } 
//             }
//         }

//         if(x===5) {
//             if( mainMatrix[1][0] === mainMatrix[1][1]) {
//                 if(mainMatrix[1][2]===0 && tmp === 0) {
//                     mainMatrix[1][2]==='X';
//                     temp=1;
//                 }
//             }
//             if( mainMatrix[1][2] === mainMatrix[1][1]) {
//                 if(mainMatrix[1][0]===0 && tmp === 0) {
//                     mainMatrix[1][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][1] === mainMatrix[1][1]) {
//                 if(mainMatrix[2][1]===0 && tmp === 0) {
//                     mainMatrix[2][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][1] === mainMatrix[1][1]) {
//                 if(mainMatrix[0][1]===0 && tmp === 0) {
//                     mainMatrix[0][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][2] === mainMatrix[0][1]) {
//                 if(mainMatrix[0][0]===0 && tmp === 0) {
//                     mainMatrix[0][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][0] === mainMatrix[0][1]) {
//                 if(mainMatrix[2][2]===0 && tmp === 0) {
//                     mainMatrix[2][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][0] === mainMatrix[0][1]) {
//                 if(mainMatrix[0][2]===0 && tmp === 0) {
//                     mainMatrix[0][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][2] === mainMatrix[0][1]) {
//                 if(mainMatrix[2][0]===0 && tmp === 0) {
//                     mainMatrix[2][0]==='X';
//                     temp=1;
//                 } 
//             }
//         }

//         if(x===6) {
//             if( mainMatrix[1][0] === mainMatrix[1][2]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][1] === mainMatrix[1][2]) {
//                 if(mainMatrix[1][0]===0 && tmp === 0) {
//                     mainMatrix[1][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][2] === mainMatrix[1][2]) {
//                 if(mainMatrix[2][2]===0 && tmp === 0) {
//                     mainMatrix[2][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][2] === mainMatrix[1][2]) {
//                 if(mainMatrix[0][2]===0 && tmp === 0) {
//                     mainMatrix[0][2]==='X';
//                     temp=1;
//                 } 
//             }
//         }

//         if(x===7) {
//             if( mainMatrix[2][1] === mainMatrix[2][0]) {
//                 if(mainMatrix[2][2]===0 && tmp === 0) {
//                     mainMatrix[2][2]==='X';
//                     temp=1;
//                 }2
//            }
//            if( mainMatrix[2][2] === mainMatrix[2][0]) {
//                 if(mainMatrix[2][1]===0 && tmp === 0) {
//                     mainMatrix[2][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][1] === mainMatrix[2][0]) {
//                 if(mainMatrix[1][0]===0 && tmp === 0) {
//                     mainMatrix[1][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][0] === mainMatrix[2][0]) {
//                 if(mainMatrix[0][1]===0 && tmp === 0) {
//                     mainMatrix[0][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][1] === mainMatrix[2][0]) {
//                 if(mainMatrix[0][2]===0 && tmp === 0) {
//                     mainMatrix[0][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][2] === mainMatrix[2][0]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }
//         }

//         if(x===8) {
//             if( mainMatrix[2][0] === mainMatrix[2][1]) {
//                 if(mainMatrix[2][2]===0 && tmp === 0) {
//                     mainMatrix[2][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[2][2] === mainMatrix[2][1]) {
//                 if(mainMatrix[2][0]===0 && tmp === 0) {
//                     mainMatrix[2][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][1] === mainMatrix[2][1]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][1] === mainMatrix[2][1]) {
//                 if(mainMatrix[0][1]===0 && tmp === 0) {
//                     mainMatrix[0][1]==='X';
//                     temp=1;
//                 } 
//             }
//         }

//         if(x===9) {
//             if( mainMatrix[2][1] === mainMatrix[2][2]) {
//                 if(mainMatrix[2][0]===0 && tmp === 0) {
//                     mainMatrix[2][0]==='X';
//                     temp=1;
//                 }2
//            }
//            if( mainMatrix[2][0] === mainMatrix[2][2]) {
//                 if(mainMatrix[2][1]===0 && tmp === 0) {
//                     mainMatrix[2][1]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][2] === mainMatrix[2][2]) {
//                 if(mainMatrix[1][2]===0 && tmp === 0) {
//                     mainMatrix[1][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][2] === mainMatrix[2][2]) {
//                 if(mainMatrix[0][2]===0 && tmp === 0) {
//                     mainMatrix[0][2]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[1][1] === mainMatrix[2][2]) {
//                 if(mainMatrix[0][0]===0 && tmp === 0) {
//                     mainMatrix[0][0]==='X';
//                     temp=1;
//                 } 
//             }
//             if( mainMatrix[0][0] === mainMatrix[2][2]) {
//                 if(mainMatrix[1][1]===0 && tmp === 0) {
//                     mainMatrix[1][1]==='X';
//                     temp=1;
//                 } 
//             }
//         }
        
// if ((mainMatrix[0][1]==='O' && mainMatrix[0][2]===mainMatrix[0][1]) || (mainMatrix[1][0]==='O'&& mainMatrix[2][0]===mainMatrix[1][0]) || (mainMatrix[1][1]==='O' && mainMatrix[2][2]===mainMatrix[1][1]) || (mainMatrix[0][1]==='X' && mainMatrix[0][2]===mainMatrix[0][1]) || (mainMatrix[1][0]==='X'&& mainMatrix[2][0]===mainMatrix[1][0]) || (mainMatrix[1][1]==='X' && mainMatrix[2][2]===mainMatrix[1][1]) ) {    
//     console.log('1');
//             if(mainMatrix[0][0]===0 && tmp===0) {
//                 mainMatrix[0][0] = 'X';
//                 showX(1);
//                 tmp = 1;
//             }
//         }
//         if ((mainMatrix[0][0]==='O' && mainMatrix[0][2]===mainMatrix[0][0]) || (mainMatrix[1][1]==='O'&&mainMatrix[2][1]===mainMatrix[1][1]) || (mainMatrix[0][0]==='X' && mainMatrix[0][2]===mainMatrix[0][0]) || (mainMatrix[1][1]==='X'&&mainMatrix[2][1]===mainMatrix[1][1])) {
//              console.log('2');
//             if(mainMatrix[0][1]===0 && tmp===0) {
//                 mainMatrix[0][1] = 'X';
//                 showX(2);
//                 tmp = 1;
//             }
//         }
//         if ((mainMatrix[0][0]==='O' && mainMatrix[0][1]===mainMatrix[0][0]) || (mainMatrix[1][2]==='O'&&mainMatrix[2][2]===mainMatrix[1][1]) || (mainMatrix[1][1]==='O' && mainMatrix[2][0]===mainMatrix[1][1]) || (mainMatrix[0][0]==='X' && mainMatrix[0][1]===mainMatrix[0][0]) || (mainMatrix[1][2]==='X'&&mainMatrix[2][2]===mainMatrix[1][1]) || (mainMatrix[1][1]==='X' && mainMatrix[2][0]===mainMatrix[1][1]) ) {  
//             console.log('3');
//             if(mainMatrix[0][2]===0 && tmp===0) {
//                 mainMatrix[0][2] = 'X';
//                 showX(3);
//                 tmp = 1;
//             } 
//         }
//         if ((mainMatrix[0][0]==='O' && mainMatrix[2][0]===mainMatrix[0][0]) || (mainMatrix[1][1]==='O'&&mainMatrix[1][2]===mainMatrix[1][1]) || (mainMatrix[0][0]==='X' && mainMatrix[2][0]===mainMatrix[0][0]) || (mainMatrix[1][1]==='X'&&mainMatrix[1][2]===mainMatrix[1][1]) ) {
//             console.log('4');
//             if(mainMatrix[1][0]===0 && tmp===0) {
//                 mainMatrix[1][0] = 'X';
//                 showX(4);
//                 tmp = 1;
//             } 
//         }
//         if ((mainMatrix[1][0]==='O' && mainMatrix[1][2]===mainMatrix[1][0]) || (mainMatrix[0][1]==='O'&&mainMatrix[2][1]===mainMatrix[0][1]) || (mainMatrix[2][0]==='O' && mainMatrix[0][2]===mainMatrix[2][0]) || (mainMatrix[0][0]==='O' && mainMatrix[2][2]===mainMatrix[0][0]) || (mainMatrix[1][0]==='X' && mainMatrix[1][2]===mainMatrix[1][0]) || (mainMatrix[0][1]==='X'&&mainMatrix[2][1]===mainMatrix[0][1]) || (mainMatrix[2][0]==='X' && mainMatrix[0][2]===mainMatrix[2][0]) || (mainMatrix[0][0]==='X' && mainMatrix[2][2]===mainMatrix[0][0]) ) {
//             console.log('temp = ' + tmp);
//             if(mainMatrix[1][1]===0 && tmp===0) {
//                 console.log('inside if 5');
//                 mainMatrix[1][1] = 'X';
//                 showX(5);
//                 tmp = 1;
//             } 
//         }
//         if ((mainMatrix[1][0]==='O' && mainMatrix[1][1]===mainMatrix[1][0]) || (mainMatrix[0][2]==='O'&&mainMatrix[2][2]===mainMatrix[0][2]) || (mainMatrix[1][0]==='X' && mainMatrix[1][1]===mainMatrix[1][0]) || (mainMatrix[0][2]==='X'&&mainMatrix[2][2]===mainMatrix[0][2]) ) {
//             console.log('6');
//             if(mainMatrix[1][2]===0 && tmp===0) {
//                 mainMatrix[1][2] = 'X';
//                 showX(6);
//                 tmp = 1;
//             } 
//         }
//         if ((mainMatrix[2][1]==='O' && mainMatrix[2][2]===mainMatrix[2][1]) || (mainMatrix[0][0]==='O'&&mainMatrix[1][0]===mainMatrix[0][0]) || (mainMatrix[1][1]==='O' && mainMatrix[0][2]===mainMatrix[1][1]) || (mainMatrix[2][1]==='X' && mainMatrix[2][2]===mainMatrix[2][1]) || (mainMatrix[0][0]==='X'&&mainMatrix[1][0]===mainMatrix[0][0]) || (mainMatrix[1][1]==='X' && mainMatrix[0][2]===mainMatrix[1][1]) ) {  
//             console.log('7');
//             if(mainMatrix[2][0]===0 && tmp===0) {
//                 mainMatrix[2][0] = 'X';
//                 showX(7);
//                 tmp = 1;
//             } 
//         }
//         if ((mainMatrix[2][0]==='O' && mainMatrix[2][2]===mainMatrix[2][0]) || (mainMatrix[0][1]==='O'&&mainMatrix[1][1]===mainMatrix[0][1]) || (mainMatrix[2][0]==='X' && mainMatrix[2][2]===mainMatrix[2][0]) || (mainMatrix[0][1]==='X'&&mainMatrix[1][1]===mainMatrix[0][1]) ) {
//             // console.log('8');
//             if(mainMatrix[2][1]===0 && tmp===0) {
//                 mainMatrix[2][1] = 'X';
//                 showX(8);
//                 tmp = 1;
//             } 
//         }
//         if ((mainMatrix[2][0]==='O' && mainMatrix[2][1]===mainMatrix[2][0]) || (mainMatrix[0][2]==='O'&&mainMatrix[1][2]===mainMatrix[0][2]) || (mainMatrix[0][0]==='O' && mainMatrix[1][1]===mainMatrix[0][0]) || (mainMatrix[2][0]==='X' && mainMatrix[2][1]===mainMatrix[2][0]) || (mainMatrix[0][2]==='X'&&mainMatrix[1][2]===mainMatrix[0][2]) || (mainMatrix[0][0]==='X' && mainMatrix[1][1]===mainMatrix[0][0]) ) {  
//             // console.log('9');
//             if(mainMatrix[2][2]===0 && tmp===0) {
//                 mainMatrix[2][2] = 'X';
//                 showX(9);
//                 tmp = 1;
//             } 
//         }
//         if (tmp === 0) {
//             while (true) {
//                 temp =  Math.floor(Math.random()*9) + 1;
//                 var p = Math.trunc((temp-1)/3);
//                 var q = temp-(3*p)-1;
//                 // console.log
//                 if (mainMatrix[p][q]===0) {
//                     mainMatrix[p][q] = 'X';
//                     showX(temp);
//                     // console.log('inside if ' + temp);
//                     break;
//                 } 
//             }
//         }


//         if (mainMatrix[0][0]===0 && tmp===0) {
//             mainMatrix[0][0] = 'X';
//             showX(1);
//             tmp=1;
//             // console.log('1* tmp= '+tmp);
//         }

//         if (mainMatrix[0][2]===0 && tmp===0) {
//             mainMatrix[0][2] = 'X';
//             showX(3);
//             tmp=1;
//             // console.log('3* tmp= '+tmp);
//         }
//         if (mainMatrix[2][0]===0 && tmp===0) {
//             mainMatrix[2][0] = 'X';
//             showX(7);
//             tmp=1;
//             // console.log('7* tmp= '+tmp);
//         }
//         if (mainMatrix[2][2]===0 && tmp===0) {
//             mainMatrix[2][2] = 'X';
//             showX(9);
//             tmp=1;
//             // console.log('3* tmp= '+tmp);
//         }
//     }    

//}








