import React from "react";
import '../App.css'

function Rules() {
    return (
      <div>
          <h1>Welcome to John Conway's "Game of Life"!</h1>
          <p>This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature.</p>
          <ul>Game Rules</ul>
          <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
          <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
          <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
          <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      </div>
    )
  }

export default Rules