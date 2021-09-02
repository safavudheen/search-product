import React,{useState} from 'react'

import { Card, Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

function View(props) {
    const[prod,setprod]=useState([])
     setprod(props.product)
console.log({props});
    return (
        <div>
                <div >

<Row> < Col > 
 
{prod.map((prod, index) =>( 
 
<Card style={{width: "13rem", height: "26rem", float:'left', margin:"0.3rem"}}>
<Card.Img variant="top" src={prod.image} style={{height: "10rem"}}/>
<Card.Body>
 <Card.Title>{prod.title}</Card.Title>
 <Card.Text>
 {/* {prod.description} */}
 </Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
 <ListGroupItem>{prod.price}</ListGroupItem>
 <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>

</Card >)
)} 
</Col> </Row>
 </div>
    </div>
    )
}

export default View
