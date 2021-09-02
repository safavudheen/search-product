import React, { useState, componentDidMount } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';


import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from "axios"
import { useEffect } from 'react'
import "./App.css"



export default function App() {
  const [product, setProduct] = useState([])


  //Search engin design
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([])






  // const items = 
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products').then(res => res.json())
      .then(json => setProduct(json),
        setLoading(false)

      )
      // setLoading(true)
      // axios.get("https://fakestoreapi.com/products").then((res)=>{
      // setProduct(res.data);
      // setLoading(false)
      // })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // Search engine
  useEffect(() => {
    setFilteredProduct(
      product.filter((prodt) => prodt.title.toLowerCase().includes(search.toLowerCase()
      ))
    )
  }, [search, product]);
  console.log({ filteredProduct })

  if (loading) {
    return <p>Loading Products</p>
  }

  return (
    <Container style={{ width: "100%", overflow: "hidden", marginleft: "0 auto", marginright: " 0 auto", padding: " 0 0 0 0 " }}>
      <div>
        <div className="App">
          <header className="App-header">
            <div style={{ width: 400 }}>
              <input
                className="search"
                type="text"
                placeholder="Search Product"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </header>
        </div>
        <div >

          <Row>
            < Col >

              {filteredProduct.map((prod, index) => (

                <Card style={{ width: "13rem", height: "26rem", float: 'left', margin: "0.3rem" }}>
                  <Card.Img variant="top" src={prod.image} style={{ height: "10rem" }} />
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

                </Card>)
              )}
            </Col>
          </Row>
        </div>

      </div>
    </Container>
  )
}
