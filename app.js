document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.svg',
        },
        {
            name: 'charmander',
            img: 'img/charmander.svg',
        },
        {
            name: 'eevee',
            img: 'img/eevee.svg',
        },
        {
            name: 'jigglypuff',
            img: 'img/jigglypuff.svg',
        },
        {
            name: 'meowth',
            img: 'img/meowth.svg',
        },
        {
            name: 'pikachu',
            img: 'img/pikachu.svg',
        },
        {
            name: 'psyduck',
            img: 'img/psyduck.svg',
        },
        {
            name: 'snorlax',
            img: 'img/snorlax.svg',
        },
        {
            name: 'squirtle',
            img: 'img/squirtle.svg',
        },
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.svg',
        },
        {
            name: 'charmander',
            img: 'img/charmander.svg',
        },
        {
            name: 'eevee',
            img: 'img/eevee.svg',
        },
        {
            name: 'jigglypuff',
            img: 'img/jigglypuff.svg',
        },
        {
            name: 'meowth',
            img: 'img/meowth.svg',
        },
        {
            name: 'pikachu',
            img: 'img/pikachu.svg',
        },
        {
            name: 'psyduck',
            img: 'img/psyduck.svg',
        },
        {
            name: 'snorlax',
            img: 'img/snorlax.svg',
        },
        {
            name: 'squirtle',
            img: 'img/squirtle.svg',
        }
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    result.textContent = '0';
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let index = 0; index < cardsArray.length; index++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'img/pokebola.svg');
            card.setAttribute('data-id', index);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'img/gotcha.svg');
            cards[optionTwoId].setAttribute('src', 'img/gotcha.svg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/pokebola.svg');
            cards[optionTwoId].setAttribute('src', 'img/pokebola.svg');
        }

        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length.toString();

        if (cardsWon.length === cardsArray.length / 2) {
            result.textContent = 'Congratulations! You found them all!';
        }
    }

    createBoard();
});
