/*
1. show out put from: 1- 50
2. if the number is divisible by 3 then instead of the number show 'foo'
2. if the number is divisible by 5 then instead of the number show 'bar'
2. if the number is divisible by both 3 and 5 then instead of the number show 'foo'

*/


// loop die number show from 1- 50


//while loop
// var i = 0;
// while( i < 50){
//     console.log(i)
//     i++;
// }


// for loop use kare 1 - 50 porjonto dekhano hoese and conditional use kara hoese 
// amder 3ta conditon silo, seser condition ar moddhe 1st and 2nd condition include 
// so ar jonno seser condition ta age deoa hoese jodio ata seriouly sobar sese. sobar sese
// dile ata kaj korbena 

for(var i = 1; i <=50; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
     else if (i % 3 === 0){
        console.log('foo')
    }
    else if( i % 5 === 0){
        console.log('bar')
    }
    else{
        console.log(i);

    }

}

