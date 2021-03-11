import React from 'react';
import Button from 'react-bootstrap/Button';
import { SVG } from '@svgdotjs/svg.js';

const CODE_LENGTH = 23;
const X_OFFSET_INCREMENT = 12.42;
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

const SPOTIFY_LOGO = "M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0M43.73,43.2a1.85,1.85,0,0,0-.47-2.43,5,5,0,0,0-.48-.31,30.64," +
  "30.64,0,0,0-5.92-2.72,37.07,37.07,0,0,0-11.56-1.84c-1.33.07-2.67.12-4,.23a52.44,52.44,0,0,0-7.08,1.12,3.45,3.45,0,0," +
  "0-.54.16,1.83,1.83,0,0,0-1.11,2.08A1.79,1.79,0,0,0,14.37,41a4.29,4.29,0,0,0,.88-.12,48.93,48.93,0,0,1,8.66-1.15,35.33," +
  "35.33,0,0,1,6.75.37,28.29,28.29,0,0,1,10.25,3.61,4.77,4.77,0,0,0,.5.27,1.85,1.85,0,0,0,2.33-.74M47.41,35a2.34,2.34,0," +
  "0,0-.78-3.19l-.35-.21a35.72,35.72,0,0,0-7.38-3.3,45.39,45.39,0,0,0-15.7-2.13,41.19,41.19,0,0,0-7.39.92c-1,.22-2," +
  ".48-2.94.77A2.26,2.26,0,0,0,11.29,30a2.32,2.32,0,0,0,1.44,2.2,2.47,2.47,0,0,0,1.67,0,37,37,0,0,1,10.38-1.46,43,43,0," +
  "0,1,7.91.74,35.46,35.46,0,0,1,9.58,3.18c.66.34,1.3.72,1.95,1.08A2.33,2.33,0,0,0,47.41,35m.35-8.49A2.79,2.79,0,0,0,52," +
  "24.11c0-.2,0-.4-.08-.6a2.78,2.78,0,0,0-1.4-1.85,35.91,35.91,0,0,0-6.41-2.91,56.19,56.19,0,0,0-16.86-2.89,58.46,58.46," +
  "0,0,0-7,.21,48.31,48.31,0,0,0-6.52,1c-.87.2-1.73.42-2.58.7a2.73,2.73,0,0,0-1.85,2.68,2.79,2.79,0,0,0,2,2.61,2.9,2.9," +
  "0,0,0,1.6,0c.87-.23,1.75-.47,2.63-.66a45.52,45.52,0,0,1,7.26-.91,57.42,57.42,0,0,1,6.4,0,53.7,53.7,0,0,1,6.11.72," +
  "42.63,42.63,0,0,1,8.49,2.35,33.25,33.25,0,0,1,4,2"


const INITIAL_CODE = [BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0],
  BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0], BARS[0]];
const INITIAL_TEXT_CODE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

class CodeGenerator extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      code: INITIAL_CODE,
      textCode: INITIAL_TEXT_CODE
    };

    this.generateCode = this.generateCode.bind(this);
    this.resetCode = this.resetCode.bind(this);
  }

  generateCode(){
    let code = [];

    for (let i=0; i<CODE_LENGTH; i++) {
      let bar;

      // First and last code bar are always a 0-bar
      if (i === 0 || i === CODE_LENGTH-1) {
        bar = BARS[0];
      }
      // 12th (1-indexed) code bar is always a 7-bar
      else if (i === 11) {
        bar = BARS[7];
      }
      else {
        // Get a random bar length
        let index = Math.floor(Math.random() * BARS.length);
        bar = BARS[index];
      }

      code.push(bar);
    }

    let textCode = [];
    for (let bar of code){
      textCode.push(bar.size);
    }

    this.setState({
      code: code,
      textCode: textCode
    });

    this.convertCodeToImage(code);
  }

  convertCodeToImage(code){
    document.getElementById("code-image-container").innerHTML = ""

    let draw = SVG().addTo('#code-image-container').size(400, 100);

    let codeBg = draw.rect(400, 100).fill('#000');
    let spotifyLogo = draw.path(SPOTIFY_LOGO).move(20, 20).fill("#fff")

    let xOffset = 100;
    for (let i=0; i<CODE_LENGTH; i++){
      let bar = code[i];
      let codeBar = draw.rect(WIDTH, bar.height).radius(RADIUS).move(xOffset, bar.yOffset).fill('#fff');
      xOffset += X_OFFSET_INCREMENT;
    }
  }

  resetCode(){
    this.setState({
      code: INITIAL_CODE,
      textCode: INITIAL_TEXT_CODE
    });
  }

  render() {
    return (
      <div className="code-generator">
        <Button variant="primary" className="mr-2" onClick={this.generateCode}>Generate a Code</Button>
        <Button variant="outline-secondary" onClick={this.resetCode}>Reset Code</Button>
        <p className="text-code">Your code is: [{this.state.textCode.join(", ")}]</p>
        <div id="code-image-container"></div>
      </div>
    )
  }
}

export default CodeGenerator;