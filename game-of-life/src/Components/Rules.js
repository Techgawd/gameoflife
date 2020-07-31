import React, {useState} from "react";
import '../App.css'
import { Jumbotron, Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function Rules() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
    return (
      // <div>
      //   {/* if cell has 4 or more active neighbors it dies or if it has 1 or less, also dies */}
      //     {/* <h1>Welcome to John Conway's "Game of Life"!</h1> */}
      //     <p>This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature.</p>
      //     <ul>Game Rules</ul>
      //     <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
      //     <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
      //     <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
      //     <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      // </div>
      <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to John Conway's "Game of Life"!</h1>
        {/* <p className="lead">This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature.</p> */}
        {/* <hr className="my-2" /> */}
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
        {/* <p className="lead"> */}
        {/* <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover> */}
        {/* </p> */}
      </Jumbotron>
    </div>
    )
  }

export default Rules