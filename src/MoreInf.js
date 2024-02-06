import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
 function SearchInf({list}) {
    console.log(list)
  return (
    <>
    
  <Card style={{ width: '40rem' }} className='p-5 ' border="warning-subtle">
  <Row className='align-items-center'>
  <Col >
  <Card.Img variant="top" src={list[1].i.imageUrl} style={{ width: '16rem',height:'20rem' }} /></Col>
  <Col >
  <Card.Body >
        <Card.Title className='text-capitalize fs-3 text-nowrap'>{list[1].l}</Card.Title>
        <Card.Text >
        Actors : {list[1].s}
        <br/>
        Rank : {list[1].rank}
        <br/>
        Type : {list[1].qid}
        <br/>
         Release Date : {list[1].y}
        </Card.Text>

      </Card.Body>
  </Col>
      
      
      </Row>
    </Card>
    
    </>
  )
}
export default SearchInf;
