import React from 'react';
import Button from 'react-bootstrap/Button';

const RADIUS = 3.36;
const WIDTH = 6.71;
const BARS = [
  {
    size: 0,
    height: 11,
    yOffset: 44.5
  },
  {
    size: 1,
    height: 18,
    yOffset: 41.0
  },
  {
    size: 2,
    height: 25,
    yOffset: 37.5
  },
  {
    size: 3,
    height: 32,
    yOffset: 34.0
  },
  {
    size: 4,
    height: 39,
    yOffset: 30.5
  },
  {
    size: 5,
    height: 46,
    yOffset: 27.0
  },
  {
    size: 6,
    height: 53,
    yOffset: 23.5
  },
  {
    size: 7,
    height: 60,
    yOffset: 20.0
  }
];

class CodeGenerator extends React.Component{
  constructor(props) {
    super(props);
  }

  generateCode(){
    let code = [];

    let bar;
    for (let i=0; i<22; i++) {
      if (i === 0 || i === 21) {
        console.log(0)
        bar = BARS[0];
      }
      else {
        let index = Math.floor(Math.random() * BARS.length);
        bar = BARS[index];
        console.log(index)
      }
      code.push(bar)
    }

    console.log(code)
  }

  render() {
    return (
      <Button variant="outline-primary" onClick={this.generateCode}>hello</Button>
    )
  }
}

export default CodeGenerator;