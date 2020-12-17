document.addEventListener('DOMContentLoaded', () => {
  preloadImages();
  sort();
  createBoard();
});

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
const modal = document.getElementById('modal');
const resetButton = document.getElementById('reset');
let cardsChosen = [];
let cardsWon = [];

// Card options
const cardArray = [
  {
    id: 0,
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    id: 1,
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    id: 2,
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    id: 3,
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    id: 4,
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    id: 5,
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    id: 6,
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    id: 7,
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    id: 8,
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    id: 9,
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    id: 10,
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    id: 11,
    name: 'pizza',
    img: 'images/pizza.png',
  },
];

function preloadImages() {
  cardArray.map((el) => {
    const preImage = new Image();
    // preImage.onload = console.log(`${el.name} loaded`);
    preImage.src = el.img;
  });
}

// Check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('.section-game img');

  if (cardsChosen[0].id === cardsChosen[1].id) {
    cards[cardsChosen[0].id].setAttribute('src', 'images/blank.png');
    cards[cardsChosen[1].id].setAttribute('src', 'images/blank.png');
    showNotification('Sorry, choose diferent cards');
  } else if (cardsChosen[0].name === cardsChosen[1].name) {
    showNotification('You found a match');
    cards[cardsChosen[0].id].setAttribute('src', 'images/white.png');
    cards[cardsChosen[0].id].removeEventListener('click', flipCard);
    cards[cardsChosen[1].id].setAttribute('src', 'images/white.png');
    cards[cardsChosen[1].id].removeEventListener('click', flipCard);
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
    resetButton.style.display = 'block';
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

// Order array
function sort() {
  cardArray.sort(() => 0.5 - Math.random());
}

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

// Clear your board
function cleanBoard() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  resetButton.style.display = 'none';
  cardsWon = [];
  resultDisplay.textContent = cardsWon.length;
}

function showNotification(modalText = 'Modal content') {
  modal.innerHTML = modalText;
  modal.className = 'article-modal-span animation';
  setTimeout(() => {
    modal.className = 'article-modal-span';
  }, 1000);
}

function start() {
  cleanBoard();
  sort();
  createBoard();
}
