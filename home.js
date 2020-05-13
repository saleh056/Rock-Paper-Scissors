  
function rpsFrontEnd(humanImageChoice , botImageChoice , finalMessage){
    var imageDataBase = {
        'rock' : document.getElementById('rock').src ,
        'paper' : document.getElementById('paper').src ,
        'scissors' : document.getElementById('scissors').src 
    }

    // حذف کردن عکس ها
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
       
    humanDiv.innerHTML = "<img src ='" + imageDataBase[humanImageChoice] + "' height = 150 width = 150 style='box-shadow : 0px 10px 50px rgba(37,50,233,1);' >"
    botDiv.innerHTML = "<img src ='" + imageDataBase[botImageChoice] + "' height = 150 width = 150 style='box-shadow : 0px 10px 50px rgba(143,38,24,1);' >"
    messageDiv.innerHTML = "<h1 style='color: " +finalMessage['color'] + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"  
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}
function rpsGame(userChoice){
    var myChoice , botChoice ;
    
    myChoice = userChoice.id
    botChoice = randomChoice();
    
    var res = selectWinner(myChoice,botChoice);
    rpsFrontEnd(myChoice , botChoice , res);

    }
    function randomChoice(){
        var randomNumber = Math.floor(Math.random() * 3);
        var arr = ['rock','paper','scissors'];
        return arr[randomNumber];
    }
    function selectWinner(myChoice,botChoice){
        if( myChoice == 'paper' && botChoice == 'rock'){
            return {'message' : ' بردی' , 'color' : 'green'};
        }
        else if(myChoice == 'paper' && botChoice == 'paper'){
            return {'message' : ' مساوی' , 'color' : 'yellow'};
        }
        else if (myChoice == 'paper' && botChoice == 'scissors') {
            return {'message' : ' باختی' , 'color' : 'red'};
        }
        else if( myChoice == 'rock' && botChoice == 'scissors'){
            return {'message' : ' بردی' , 'color' : 'green'};
        }
        else if(myChoice == 'rock' && botChoice == 'rock'){
            return {'message' : ' مساوی' , 'color' : 'yellow'};
        }
        else if (myChoice == 'rock' && botChoice == 'paper') {
            return {'message' : ' باختی' , 'color' : 'red'};
        }
        else if( myChoice == 'scissors' && botChoice == 'paper'){
            return {'message' : ' بردی' , 'color' : 'green'};
        }
        else if(myChoice == 'scissors' && botChoice == 'scissors'){
            return {'message' : ' مساوی' , 'color' : 'yellow'};
        }
        else if (myChoice == 'scissors' && botChoice == 'rock') {
            return {'message' : ' باختی' , 'color' : 'red'};
        }
    }