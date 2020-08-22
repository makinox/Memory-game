document.addEventListener('DOMContentLoaded', () => {
  // Card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
  ];

  // Order array
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsWon = [];

  // Create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // Check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img');

    if (cardsChosen[0].name === cardsChosen[1].name) {
      showNotification('You found a match');
      cards[cardsChosen[0].id].setAttribute('src', 'images/white.png');
      cards[cardsChosen[1].id].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[cardsChosen[0].id].setAttribute('src', 'images/blank.png');
      cards[cardsChosen[1].id].setAttribute('src', 'images/blank.png');
      showNotification('Sorry, try again');
    }

    cardsChosen = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all';
    }
  }

  // FlipCard
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push({ id: cardId, name: cardArray[cardId].name });
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});

function showNotification(modalText = 'Modal content') {
  const modal = document.getElementById('modal');
  modal.innerHTML = modalText;
  modal.className = 'article-modal animation';
  setTimeout(() => {
    modal.className = 'article-modal';
  }, 1000);
}
