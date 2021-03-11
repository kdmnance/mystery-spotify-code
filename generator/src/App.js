import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import CodeGenerator from './codeGenerator'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Mystery Spotify Code Generator</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/'>Customize a Code</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="main-jumbotron text-center">
        <Jumbotron>
          <h1>Get a code now!</h1>
          <p>Push the button to get a randomly generated Spotify code (that may or may not scan)</p>
        </Jumbotron>
        <CodeGenerator/>
      </Container>
    </div>
  );
}

export default App;
