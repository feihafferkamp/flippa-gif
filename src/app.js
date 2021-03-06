class App {
  constructor() {
    this.body = document.getElementsByTagName('body')[0];
    this.intro();
  }

  intro() {
    let intro = new Intro();
    this.addStartListener();
  }

  addStartListener() {
    let form = document.getElementById('start-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.categoryId = parseInt(e.target[0].value);
      this.difficulty = e.target[1].value;
      if (this.categoryId && this.difficulty!== "-- Select Difficulty --") {
        new Howl({src: ['./sounds/start.mp3']}).play();
        this.launchGame();
      }
    });
  }

  setCategory() {
    switch (this.categoryId) {
    case 1:
      return 'Animals';
    case 2:
      return 'Celebrities';
    case 3:
      return 'Nicolas Cage';
    case 4:
      return 'Athletes';
    }
  }

  launchGame() {
    this.setGameLayout();
    this.addGameListeners();
    new Game(this.categoryId, this.setDifficulty());
  }

  setGameLayout() {
    this.body.innerHTML = `
    <div class="menu-container">
      <div class="item logo"><h1>FLIPPA GIF</h1></div>
      <div class="item">
        <p class="label">Timer:</p>
        <p id="timer" class="item value">00:00</p>
      </div>
      <div class="item">
        <p class="label">Score:</p>
        <div class="item value">
          <p id="score-change"></p>
          <p id="score-value">0</p>
        </div>
      </div>
      <div class="item">
        <p class="label">Category:</p>
        <p class="item category">${this.setCategory()}</p>
      </div>
      <div class="item">
        <div><i class="repeat link icon restart"></i></div>
        <div><i class="arrow left link icon back"></i></div>
      </div>
    </div>
    <div class="game-container-outer">
      <div class="game-container-inner"></div>
    </div>`;
  }

  setDifficulty() {
    let gameContainer = document.getElementsByClassName('game-container-inner')[0];
    gameContainer.classList.add(`${this.difficulty}`);
    switch (this.difficulty) {
    case 'easy':
      return 6;
    case 'medium':
      return 10;
    case 'hard':
      return 21;
    case 'superhard':
      return 36;
    }
  }

  addGameListeners() {
    this.body.addEventListener('click', (e) => {
      if (e.target.classList.contains('back')) {
        this.intro();
      }
      if (e.target.classList.contains('restart')) {
        this.launchGame();
      }
    });
  }
}
