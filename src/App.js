import { useEffect, useState } from "react";
import{My_Api_Key} from'./config';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import arrow from './assest/arrow-right.svg';
import SearchInf from './MoreInf';
import { Oval } from 'react-loader-spinner'

function App() {
  const[ivalue,setIvalue]=useState('');
  const[list,setList]=useState([]);
  const[zvalue,setZvalue]=useState('');
  const[loading,setLoading]=useState(false);


  const inputHandler=(e)=>{
    setIvalue(e.target.value);
    console.log(ivalue);
  }



  const submitHandler=(e)=>{
    e.preventDefault();
    setZvalue(ivalue);
  }

  


  const fetchDate=async()=>{
     setLoading(true);
      const url = `https://imdb8.p.rapidapi.com/auto-complete?q=+${ivalue}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': My_Api_Key,
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setList(result.d);
	// console.log(result);
} catch (error) {
	console.error(error);
}finally{
  setLoading(false);
}
    };

  useEffect(()=>{
    
    fetchDate();
  },[zvalue])



  return (
    <>
    
    <Container fluid>
    <Row className='align-items-center justify-content-between py-3 px-5 bg  '>
    <Col md={3} >
      <h1 className=" fs-3 fw-medium textColor">Movie Search</h1>
    </Col>

    <Col md={8}   > 
    <Form onSubmit={submitHandler}  >
    <Form.Group className=" "  >

      <InputGroup size="lg"  >
        <Form.Control 
        aria-describedby="basic-addon2"
        type="text" 
        value={ivalue} 
        onChange={inputHandler} 
        className="n shadow-sm fst-italic"
       

        />
        <Button variant="warning" type="submit"  >Search</Button>
      </InputGroup>
    
    </Form.Group>
      {/* <img src={arrow}  /> */}
      

    </Form>
    </Col>
    </Row>
    </Container>
    <Container>
    
    {true ? (
      <Row className=" vh-100 align-items-center justify-content-center ">
       <Col md={2}  >
          <Oval
            visible={true}
            height="100"
            width="100"
            color="#ffc107"
            ariaLabel="oval-loading"

            />
      </Col>
</Row>
    ):(
      <Row>
     {list.map((item,index)=>(
      
      <Col  md={3} key={index} className="g-5">
      <Card  style={{ width: '15rem',height:'26rem' }} className="border-0">
      <Card.Img variant="top" src={item.i.imageUrl} style={{ width: '15rem',height:'19rem' }} />
      <Card.Body >
        <Card.Title className="fs-6 d-inline-block">{item.l}</Card.Title>
        <Button variant="warning" className="d-inline-block rounded-pill ms-2"> <img src={arrow}  /></Button>
      </Card.Body>
      </Card>
      </Col>
      
     
      
      ))}
      </Row>
      )}
    
      {/* <Container className="d-none searchInf">
      <SearchInf list={list} />
      </Container> */}
      </Container>
    </>
  );
}

export default App;
