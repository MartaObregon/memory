 document.addEventListener('DOMContentLoaded', () =>{

    // card Options

    const cardArray = [

        {
            name: 'emoji', 
            img: 'images/emoji.png'
        },
        {
            name: 'emoji', 
            img: 'images/emoji.png'
        },
        {
            name: 'ghost', 
            img: 'images/ghost.png'
        }, 
        {
            name: 'ghost', 
            img: 'images/ghost.png'
        }, 
        {
            name: 'hamster', 
            img: 'images/hamster.png'
        }, 
        {
            name: 'hamster', 
            img: 'images/hamster.png'
        }, 
        {
            name: 'minion', 
            img: 'images/minion.png'
        }, 
        {
            name: 'minion', 
            img: 'images/minion.png'
        }, 
        {
            name: 'zombie', 
            img: 'images/zombie.png'
        }, 
        {
            name: 'zombie', 
            img: 'images/zombie.png'
        }, 
        {
            name: 'toad', 
            img: 'images/toad.png'
        }, 
        {
            name: 'toad', 
            img: 'images/toad.png'
        }
    ]

    //create board
    
    cardArray.sort(()=>0.5 - Math.random())

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {

        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches

    function checkForMatch(){
        console.log('checkmatch', cardsChosen[0], cardsChosen[1])
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(cardsChosen[0] == cardsChosen[1]){
            console.log("hola")
            alert('You found a Match!');
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            

            cardsWon.push(cardsChosen);
            console.log(cardsWon.length, 'cards won')
        }else{

            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
      
        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.innerText = cardsWon.length
        if(cardsWon.length === cardArray.length/2){

            resultDisplay.innerText = 'Congratz, you found them all!'
        }
    }


    //flip your card

    function flipCard() {
        
      
        let cardId = this.getAttribute('data-id');
        
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        console.log(cardsChosen.length, "cards chosen")
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();


 })