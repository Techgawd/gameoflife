import React, { useState, useEffect, useRef } from "react";
import '../App.css'
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';

function useInterval(callback, delay) {
 const savedCallback = useRef();
 
 useEffect(() => {
 savedCallback.current = callback;
 }, [callback]);
 
 useEffect(() => {
 function tick() {
 savedCallback.current();
 }
 if (delay !== null) {
 let id = setInterval(tick, delay);
 return () => clearInterval(id);
 }
 }, [delay]);
 }

function Grid() {
 const [gridSize, setGridSize] = useState(20)
 const [grid, setGrid] = useState(createGrid(gridSize, -1))
 const [auto, setAuto] = useState(null)
 const [canAutoPlay, setCanAutoPlay ] = useState(false)
 const [counter, setCounter ] = useState(0)
 function createGrid(size, liveCellRow) {
 // arr is array of rows
 var arr = []
 // creating rows
 for (var y = 0; y < size; y++) {
 var row = []
 // creating cells
 for (var x = 0; x < size; x++) {
 if (y == liveCellRow) {
 row.push(true)
 } else {
 row.push(false)
 }
 
 }
 // creates grid of cells
 arr.push(row)
 }
 return arr
 }

 function resetGrid() {
 setGrid(createGrid(gridSize))
 setCounter(0)
 }

 function newGrid() {
 var liveCells = 0
 setCounter(counter + 1)
 var newGrid = grid.map( (row, y) => {
 return row.map ( (cell, x) => {
 var n = countNeighbors(grid, x, y)
 if (cell == true) {
 liveCells = liveCells + 1
 }
 // logic that determines if a cell lives or dies
 if (n>=4){return false}
 else if (n<=1){return false}
 else if (n === 3){return true}
 else if (n === 2 && cell==true){return true}
 })
 })
 if (liveCells == 0) {
 setCanAutoPlay(false)
 }
 setGrid(newGrid)
 }

 function autoPlay() {
 setCanAutoPlay(true)
 }

 useInterval(() => {
 if(canAutoPlay) {
 newGrid();
 }
 }, 1000);

 function autoStop() {
 setCanAutoPlay(false)
 }

 function toggleCell(x,y) {
 var newGrid = [...grid]
 newGrid [y][x] = !newGrid [y][x]
 setGrid(newGrid)
 }

 function countNeighbors(grid, x, y) {
 var vals = [-1, 0, 1]
 var count = 0 
 vals.map((a) => {
 vals.map((b) => {
 // checking if negative 1 exists
 if (grid[y+a] && grid[y+a][x+b]) {
 if ((a == 0) && (b == 0)) {

 } else {
 count++
 }
 }
 })
 })
 return count
 }

 

 return (
 <div> 
 <div className='grid'>
 {
 grid.map( (row, y) => {
 return row.map ( (cell, x) => {
 return(
 <div onClick={() => {toggleCell(x,y)}}key={`${x}${y}`} className='cell' style={{
 // makes so no matter how many cells it will be correct height/width
 height: `${100/row.length}%`, width: `${100/row.length}%`, backgroundImage: cell ? "url('https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/33/1817.png')": "url('https://rondexter.com/intermediate/equipment/focus_pattern.gif')"
 // backgroundColor: cell ? "violet":"white"
 // ternary operator
 }}>
 </div>
 )
 })
 })
 }
 </div>
 <p className='gen'>Generation No: {counter}</p>
 <div className='control-buttons'>
 <Button onClick={newGrid} color="success">PLAY 1 MOVE <FontAwesomeIcon icon={faPlay} /></Button>
 <Button onClick={autoPlay} color="success">PLAY <FontAwesomeIcon icon={faPlay} /></Button>
 <Button onClick={autoStop} color="danger">STOP <FontAwesomeIcon icon={faStop} /></Button>
 <Button onClick={resetGrid} color="info">CLEAR </Button>
 <p className="cellSize">Cell Size:</p>
 <input className="input" onKeyUp = {(e) => {setGridSize(e.target.value); console.log(gridSize)}} />
 <Button color="warning" onClick ={() => {
 setGrid(createGrid(gridSize))
 }}>CHANGE SIZE</Button>
 </div>
 </div>
 )
 }
 

export default Grid