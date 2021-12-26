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
            name: 'superman', 
            img: 'images/superman.png'
        }, 
        {
            name: 'superman', 
            img: 'images/superman.png'
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

    const grid = document.querySelector(".grid");

    function createBoard() {

        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('id', i)
            //card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    createBoard();


 })