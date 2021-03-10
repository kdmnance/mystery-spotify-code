import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import CodeGenerator from './codeGenerator'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Mystery Spotify Code Generator</Navbar.Brand>
      </Navbar>
      <Container fluid className="main-jumbotron text-center">
        <Jumbotron>
          <h1>Get a code now!</h1>
          <p>Push the button to get a random Spotify code</p>
        </Jumbotron>
        <p><CodeGenerator/></p>
      </Container>
    </div>
  );
}

export default App;
