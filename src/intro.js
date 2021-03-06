class Intro {
  constructor() {
    this.setIntroLayout();
    this.addForm();
  }

  setIntroLayout() {
    let body = document.getElementsByTagName('body')[0];
    body.innerHTML = `
    <div class="intro-outer">
      <div class="intro-inner">
        <div class="intro-content">
          <h1>FLIPPA GIF</h1>
          <img src="https://i.imgur.com/nX3EwgJ.gif" alt="nyan cat"/>
        </div>
      </div>
    </div>`;
  }

  addForm() {
    let introContent = document.getElementsByClassName("intro-content")[0];
    let formHTML = `
    <form id="start-form" action="#" method="post">
      <select id="category" class="ui selection dropdown">
        <option selected disabled> Select Category </option>
        <option value="1">Animals</option>
        <option value="2">Celebrities</option>
        <option value="3">Nicolas Cage</option>
        <option value="4">Athletes</option>
      </select>
      <select id="difficulty" class="ui selection dropdown">
        <option selected disabled> Select Difficulty </option>
        <option value="easy">Rookie</option>
        <option value="medium">Intermediate</option>
        <option value="hard">Veteran</option>
        <option value="superhard">Master</option>
      </select>
      <input type="submit" value="Start" class="ui button">
    </form>`;
    introContent.innerHTML += formHTML;
  }
}
