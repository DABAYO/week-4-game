$(document).ready(function() {

crystals = {'assets/images/crystal-red.png','assets/images/crystal-blue.png','assets/images/crystal-yellow.png','assets/images/crystal-yellow.png'};

var counter = 0;
var wins = 0;
var losses = 0;
$('#win').text(wins);
$('#loss').text(losses);

crystalsNew();
startGame();

function crystalsNew() {
    var numbers = []
        while(numbers.length < 4) {
            var randomnumber = Math.ceil(Math.random()*12)
            var found = false;
            for (var i=0; i< numbers.length; i++){
                if (numbers[i] == randomnumber) {
                    found = true; break
                }
            }
            if(!found)number[numbers.length]=randomnumber;        
        }
    for (i=0; i < numbers.length; i++){
        var imageCrystal = $('<img>');
        imageCrystal.attr('data-num', numbers[i]);
        imageCrystal.attr('src', crystals[i]);
        imageCrystal.attr('alt', 'crystals');
        imageCrystal.addClass('crystalImage');
        $('#crystals').append(imageCrystal);      
    }
}

function startGame() {
    counter = 0;
    $('#yourScore').text(counter);

    function randomIntFromInterval(min,max) {
        return Math.floor(math.random()*(max-min+1)+min);
        }
    
    var numberGuess = randomIntFromInterval(19,120);

    $('.value').text(numberGuess);

    $('.crystalImage').on('click', function(){
        counter = counter + parseInt($(this).data('num'));

        $('#yourScore').text(counter);

        if (counter == numberGuess){
            $('#status').test('You won!');
            wins ++;
            $('#win').text(wins);
            $('#crystals').empty();
            crystalsNew();
            startGame();    
        } else if (counter > numberGuess) {
            $('#status').text('You lost.');
            losses++;
            $('#loss').text(losses);
            $('#crystals').empty();
            crystalsNew();
            startGame();
        }
    });
}
});

    