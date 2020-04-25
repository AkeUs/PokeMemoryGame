document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        {
            name: 'abra',
            img: 'img/abra.svg'
        },
        {
            name: 'bellsprout',
            img: 'img/bellsprout.svg'
        },
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.svg',
        },
        {
            name: 'caterpie',
            img: 'img/caterpie.svg'
        },
        {
            name: 'charmander',
            img: 'img/charmander.svg',
        },
        {
            name: 'dratini',
            img: 'img/dratini.svg'
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
            name: 'mankey',
            img: 'img/mankey.svg'
        },
        {
            name: 'meowth',
            img: 'img/meowth.svg',
        },
        {
            name: 'mew',
            img: 'img/mew.svg'
        },
        {
            name: 'pidgey',
            img: 'img/pidgey.svg'
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
            name: 'ratata',
            img: 'img/ratata.svg'
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
            name: 'venonat',
            img: 'img/venonat.svg'
        },
        {
            name: 'weedle',
            img: 'img/weedle.svg'
        },
        {
            name: 'zubat',
            img: 'img/zubat.svg'
        },
        {
            name: 'abra',
            img: 'img/abra.svg'
        },
        {
            name: 'bellsprout',
            img: 'img/bellsprout.svg'
        },
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.svg',
        },
        {
            name: 'caterpie',
            img: 'img/caterpie.svg'
        },
        {
            name: 'charmander',
            img: 'img/charmander.svg',
        },
        {
            name: 'dratini',
            img: 'img/dratini.svg'
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
            name: 'mankey',
            img: 'img/mankey.svg'
        },
        {
            name: 'meowth',
            img: 'img/meowth.svg',
        },
        {
            name: 'mew',
            img: 'img/mew.svg'
        },
        {
            name: 'pidgey',
            img: 'img/pidgey.svg'
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
            name: 'ratata',
            img: 'img/ratata.svg'
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
            name: 'venonat',
            img: 'img/venonat.svg'
        },
        {
            name: 'weedle',
            img: 'img/weedle.svg'
        },
        {
            name: 'zubat',
            img: 'img/zubat.svg'
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
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        let cardOne = document.querySelector(`img[data-id="${optionOneId}"]`);
        let cardTwo = document.querySelector(`img[data-id="${optionTwoId}"]`);
        
        if (cardsChosen[0] === cardsChosen[1]) {
            cardOne.setAttribute('src', 'img/gotcha.svg');
            cardTwo.setAttribute('src', 'img/gotcha.svg');
            cardsWon.push(cardsChosen);
        } else {
            cardOne.setAttribute('src', 'img/pokebola.svg');
            cardTwo.setAttribute('src', 'img/pokebola.svg');
        }

        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length.toString();

        if (cardsWon.length === cardsArray.length / 2) {
            result.textContent = 'Congratulations! You found them all!';
            setTimeout(playAgain, 3000);
        }
    }

    function playAgain() {
        result.textContent = 'Play again in 3 seconds';
        setTimeout(reload, 3000);
    }

    function reload() {
        window.location.reload();
    }

    createBoard();
});
