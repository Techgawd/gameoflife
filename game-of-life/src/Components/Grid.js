import React from "react";
import '../App.css'
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Grid() {
    return (
      <div class='grid'>
    <img src ="https://img.itch.zone/aW1nLzE1NjY2MDMucG5n/original/aDnctX.png"/>
    <div class='control-buttons'>
    <button>Play  <FontAwesomeIcon icon={faPlay} /></button>
    <button>Stop  <FontAwesomeIcon icon={faStop} /></button>
    <button>Stop  <FontAwesomeIcon icon={faStop} /></button>
    <button>Stop  <FontAwesomeIcon icon={faStop} /></button>
    </div>
      </div>
    )
  }

export default Grid