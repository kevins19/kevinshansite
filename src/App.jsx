import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import img1 from './images/img1.jpg'
import scrollgif from './images/scroll.gif'
import './index.css'

function App() {
    return (
        <div>
          <header>
            <nav style={{backgroundColor: 'white'}}>
                <ul>
                    <svg width="80" height="60" style={{padding: '0px', backgroundColor:'white'}}>
                        <g className="logo">
                            <rect className="backbox" x='10' y='10' width="40" height="40" fill="black"/>
                            <rect className="frontbox" x='10' y='10' width="40" height="40" stroke="white" strokeWidth="4" fill="black"/>
                            <defs>
                                <filter id="shadow">
                                    <feDropShadow dx="5" dy="0" stdDeviation="0.2" floodColor="blue" />
                                </filter>
                            </defs>
                            <g className="texticon">
                                <text x = '27' y = '37' fill="white" fontSize="20px" style={{textShadow: 'black 0px 0px 10px', fontWeight: '700', fontFamily: 'Manrope'}}>S</text>
                                <text x = '19' y = '37' fill="white" fontSize="20px" style={{textShadow: 'black 0px 0px 10px', fontWeight: '700', fontFamily: 'Manrope'}}>K </text>
                            </g>
                        </g>
                    </svg>
                    <li><a href="#about"><span id="hlight">01</span><span id="roboto"> about</span></a>
                    </li>
                    <li><a href="#experience"><span id="hlight">02</span><span id="roboto"> experience</span></a></li>
                    <li><a href="#publications"><span id="hlight">03</span><span id="roboto"> publications</span></a></li>
                    <li><a href="#contact"><span id="hlight">04</span><span id="roboto"> contact</span></a></li>
                </ul>
            </nav>
        </header>
          <Parallax pages={5}>
            <ParallaxLayer 
                speed = {1}
              sticky={{ start: 0, end: 1 }}
              >
                <div>
                  <div>
                      <div className="top">
                          <h1><span id="kabond">Kevin</span></h1>
                      </div>
                      <div className="bottom">
                          <div className="marquee">
                              <div className="track">
                                <div className="content" style={{fontSize:'200px'}}><span id="wrap">&nbsp;SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN SHAN   </span></div>
                              </div>
                          </div>
                      </div>
                      <div className="namebox">
                          <h2>Hey, I'm...</h2>
                      </div>
                      <div className="scrollgif">
                            <img src={scrollgif} width ="30px"/>
                      </div>
                      
                  </div>
    <h2><span className="labelling" id='roboto'>I'm a <b>Student</b>, <b>Researcher</b>, <b>Creator</b>, and <b>Programmer.</b> </span></h2></div>
            </ParallaxLayer>
            <ParallaxLayer 
              speed = {0.5}
              sticky={{ start: 1, end: 2 }}
              >
                <div className='pic'>
                    <img src={img1} width ="50%"/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                speed={0.75}>
                
            </ParallaxLayer>
            <ParallaxLayer
              offset = {1}
              speed = {1}
              >
                <h1>This is about me!</h1>
            </ParallaxLayer>
          </Parallax>
        </div>
    );
}
export default App;
