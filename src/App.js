import React, { Component } from "react";

import Circle from "./Circle";
import GameOver from "./GameOver";

import "./App.css";

import startSound from "../src/assets/sounds/Laugh.mp3"

import endSound from "../src/assets/sounds/GAME_OVER.mp3"

let gameStartSound = new Audio(startSound);
let gameEndSound = new Audio(endSound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "violet" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
      { id: 5, color: "blue" },
      { id: 6, color: "pink" },
    ],
    showGameOver: false,
    rounds: 0,
    gameStart: false,
  };
  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log("wow, you clicked a circle" + id);
    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }



    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 6);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    console.log(this.state.rounds);

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("active circle is", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({ gameStart: true });
    gameStartSound.play();
  };

  endHandler = () => {
    let endScore = undefined;
    if (this.state.score <= 5) {
      endScore = "Your score is less than 5, you can do better!";
    }
    if (this.state.score <= 30) {
      endScore = "Your score is less than 30, you can do better!"
    }
    if (this.state.score <= 100) {
      endScore = "Your score is less than 100, you can do better!"
    }
    this.setState({
      endMessage: endScore,
    });

    gameStartSound.pause();
    gameEndSound.play();
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true
    })
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.color}
          color={c.color}
          click={() => this.clickHandler(c.id)}
          active={this.state.current === c.id}
          disabled={this.state.gameStart}
        />
      );
    });
    return (
      <main>
        <h1>SpeedGame</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>Start</button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOver &&
          <GameOver
            score={this.state.score}
            endMessage={this.state.endMessage}
          />}
      </main>
    );
  }
}

export default App;