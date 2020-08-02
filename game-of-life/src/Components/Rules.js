import React, {useState} from "react";
import '../App.css'
import { Jumbotron, Button, Collapse, CardBody, Card} from 'reactstrap';

function Rules() {
 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);


 return (

 <div>
 {/* <Jumbotron>
 <h1 className="display-3">John Conway's Game of Life</h1>
 </Jumbotron> */}
 <h1 className="header">John Conway's Game of Life</h1>
 <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>RULES</Button>
 <Collapse isOpen={isOpen}>
 <Card>
 <CardBody>
 <ul></ul>
 <li>Any live cell with two or three live neighbours survives.</li>
<li>Any dead cell with three live neighbours becomes a live cell.</li>
<li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
 </CardBody>
 </Card>
 </Collapse>
 </div>
 )
 }
export default Rules
