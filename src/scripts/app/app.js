import Cheeseburger from '../../assets/images/cheeseburger.png';
import Milkshake from '../../assets/images/milkshake.png';
import IceCream from '../../assets/images/ice-cream.png';
import Hotdog from '../../assets/images/hotdog.png';
import Fries from '../../assets/images/fries.png';
import Pizza from '../../assets/images/pizza.png';
import Blank from '../../assets/images/blank.png';
import White from '../../assets/images/white.png';

export default function App() {
  document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    sort();
    createBoard();
    // document.getElementById('#reset').onclick(start);
    const resetButton = document.getElementById('reset');
    resetButton.onclick = start;
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
      img: Fries,
    },
    {
      id: 1,
      name: 'fries',
      img: Fries,
    },
    {
      id: 2,
      name: 'cheeseburger',
      img: Cheeseburger,
    },
    {
      id: 3,
      name: 'cheeseburger',
      img: Cheeseburger,
    },
    {
      id: 4,
      name: 'hotdog',
      img: Hotdog,
    },
    {
      id: 5,
      name: 'hotdog',
      img: Hotdog,
    },
    {
      id: 6,
      name: 'ice-cream',
      img: IceCream,
    },
    {
      id: 7,
      name: 'ice-cream',
      img: IceCream,
    },
    {
      id: 8,
      name: 'milkshake',
      img: Milkshake,
    },
    {
      id: 9,
      name: 'milkshake',
      img: Milkshake,
    },
    {
      id: 10,
      name: 'pizza',
      img: Pizza,
    },
    {
      id: 11,
      name: 'pizza',
      img: Pizza,
    },
  ];

  function preloadImages() {
    cardArray.map(el => {
      const preImage = new Image();
      preImage.src = el.img;
    });
  }

  // Check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('.section-game img');

    if (cardsChosen[0].id === cardsChosen[1].id) {
      cards[cardsChosen[0].id].setAttribute('src', Blank);
      cards[cardsChosen[1].id].setAttribute('src', Blank);
      showNotification('Sorry, choose diferent cards');
    } else if (cardsChosen[0].name === cardsChosen[1].name) {
      showNotification('You found a match');
      cards[cardsChosen[0].id].setAttribute('src', White);
      cards[cardsChosen[0].id].removeEventListener('click', flipCard);
      cards[cardsChosen[1].id].setAttribute('src', White);
      cards[cardsChosen[1].id].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[cardsChosen[0].id].setAttribute('src', Blank);
      cards[cardsChosen[1].id].setAttribute('src', Blank);
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
    cardsChosen.push({id: cardId, name: cardArray[cardId].name});
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
      card.setAttribute('src', Blank);
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
}
