import React, { useState } from "react";
import '../App.css'
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';



function Grid() {
    // react hook
    const [grid, setGrid] = useState(createGrid(20))
    function createGrid(size) {
        // arr is array of rows
        var arr = []
        // creating rows
        for (var y = 0; y < size; y++) {
            var row = []
            // creating cells
            for (var x = 0; x < size; x++) {
                row.push(false)
            }
            // creates grid of cells
            arr.push(row)
        }
        return arr
    }

    function resetGrid() {
        setGrid(createGrid(20))
    }

    function newGrid() {
        var newGrid = grid.map( (row, y) => {
            return row.map ( (cell, x) => {
                var n =  countNeighbors(grid, x, y)
                // logic that determines if a cell lives or dies
                if (n>=4){return false}
                else if (n<=1){return false}
                else if (n === 3){return true}
                else if (n === 2 && cell==true){return true}
            })
          })
          setGrid(newGrid)
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
                            {/* {`x:${x},y:${y},${cell}`} */}
                        </div>
                    )
                })
              })
          }
      </div>

    <div className='control-buttons'>
    {/* <button onClick={newGrid}>Play  <FontAwesomeIcon icon={faPlay} /></button> */}
    <Button onClick={newGrid} color="success">PLAY <FontAwesomeIcon icon={faPlay} /></Button>
    {/* <button>Stop  <FontAwesomeIcon icon={faStop} /></button> */}
    <Button color="danger">STOP <FontAwesomeIcon icon={faStop} /></Button>
    {/* <button onClick={resetGrid}>Clear </button> */}
    <Button onClick={resetGrid} color="info">CLEAR </Button>
    {/* <button>Random </button> */}
    <Button color="warning">RANDOM </Button>
    </div>
      </div>
    )
  }

export default Grid