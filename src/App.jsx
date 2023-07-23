import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import img1 from './images/img1.jpeg'
import scrollgif from './images/scroll.gif'
import './index.css'
// import './transition.js'

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
                    <li><a href="#competing"><span id="hlight">03</span><span id="roboto"> competing</span></a></li>
                    <li><a href="#projects"><span id="hlight">04</span><span id="roboto"> projects</span></a></li>
                    <li><a href="#contact"><span id="hlight">05</span><span id="roboto"> contact</span></a></li>
                </ul>
            </nav>
        </header>
          <Parallax pages={30}>
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
                      <div className="scrollloc">
                            <img src={scrollgif} width ="100%"/>
                      </div>
                      <div className="scrollcaption">
                            <h2 style={{fontSize:"20px"}}>vv <i>Scroll down!</i> vv</h2>
                      </div>
                      
                  </div>
    <h2><span className="labelling" id='roboto'>I'm a <b>Student</b>, <b>Researcher</b>, <b>Creator</b>, and <b>Programmer.</b> </span></h2></div>
            </ParallaxLayer>
            

            <ParallaxLayer 
              speed = {0.5}
              sticky={{ start: 1, end: 7}}
              >
                <div className='pic'>
                    <img src={img1} width ="50%"/>  
                </div>
                
            </ParallaxLayer>
            
            <ParallaxLayer
              speed = {0.5}
              sticky = {{start: 1, end: 7}}
            //   sticky={{ start: 1, end: 2 }}
              >
                <div className = 'section1right' style={{backgroundColor: "#F2F2F2"}}>
                    <div className = "sectionheader">
                        {/* <h2>Header1</h2> */}
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:1, end:7}}
                speed={0.1}
            >
                <div className='sectiontitle'>
                    <h1>About</h1>
                </div>
                <div className='sectiontitleback'>
                    <h1>About</h1>
                </div>


            </ParallaxLayer>
            <ParallaxLayer
              speed = {0.5}
              sticky = {{start: 2, end: 7}}
            //   sticky={{ start: 1, end: 2 }}
              >
                <div className = 'section1right' style={{backgroundColor: "#E8E8E8"}}>
                    <div className = "sectionheader">
                        <h2 style={{fontSize:"40px"}}><b>Education</b></h2>
                        <h3>+ + +</h3>
                        <h3>I'm currently a Computer Science student at the <u>Georgia Institue of Technology.</u></h3>
                        <h3>+ + +</h3>
                        <h3>Previously, I graduated from <u>Thomas Jefferson High School for Science and Technology</u> in 2023.</h3>
                    </div>
                </div>
            </ParallaxLayer>
            
            <ParallaxLayer
              speed = {0.5}
              sticky = {{start: 3, end: 7}}
            //   sticky={{ start: 1, end: 2 }}
              >
                <div className = 'section1right' style={{backgroundColor: "#DEDEDE"}}>
                    <div className = "sectionheader">
                        <h2 style={{fontSize:"40px"}}><b>Fields</b></h2>
                        <h3>+ + +</h3>
                        <h3>As of now, I'm mostly interested in <u>theoretical computer science,</u> <u>optimization,</u> and <u>math</u>. More broadly, I love finding solutions to problems using the quickest, most efficient methods!</h3>
                        <h3>+ + +</h3>
                        <h3>I also like creating tools and visuals to help people accomplish different tasks, like scripting, developing visual elements, and creating ways for users to interact with software.</h3>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
              speed = {0.5}
              sticky = {{start: 4, end: 7}}
            //   sticky={{ start: 1, end: 2 }}
              >
                <div className = 'section1right' style={{backgroundColor: "#D0D0D0"}}>
                    <div className = "sectionheader">
                        <h2 style={{fontSize:"40px"}}><b>Skills</b></h2>
                        <h3>+ + +</h3>
                        <h2>Thing's I'm comfortable using, in decreasing order of magnitude:</h2>
                        <h2 style={{fontSize:"20px"}}>
                            <ul>
                                <li>C++   </li>
                                <li>Python   </li>
                                <li>Java   </li>
                                <li>HTML/CSS   </li>
                                <li>Javascript   </li>
                                <li>React   </li>
                            </ul>
                        </h2>
                        <h3>+ + +</h3>
                        <h2>And some more useful skills:</h2>
                        <h2 style={{fontSize:"20px"}}>
                            <ul>
                                <li>Git   </li>
                                <li>LaTex   </li>
                                <li>Powershell  </li>
                            </ul>
                        </h2>
                        
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
              speed = {0.5}
              sticky = {{start: 5, end: 7}}
            //   sticky={{ start: 1, end: 2 }}
              >
                <div className = 'section1right' style={{backgroundColor: "#C2C2C2"}}>
                    <div className = "sectionheader">
                        <h2 style={{fontSize:"40px"}}><b>Interests</b></h2>
                        <h3>+ + +</h3>
                        <h3>I've been playing the <u>cello</u> for nearly a decade, and have just recently started getting into <u>photography.</u></h3>
                        <h3>+ + +</h3>
                        <h3>I'm also a fan of designing things and working with creativity. (This website, for example!)</h3>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:6.5, end:14}}
                speed={0.01}>
                <div className='section2title'>
                    <h1>Experience</h1>
                    <h2>^^ Here's what I've been up to! ^^</h2>
                    <h2>I'm always looking to try new things as well.</h2>
                </div>
                <div className='section2titleback'>
                    <h1>Experience</h1>
                </div>

                
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:7.5, end:7.75}}
                speed={0.1}>
                <div className='e1'>
                    <h2 style={{margin: '20px', color: "white", fontSize: "27px"}}>Real-time Bidding Research</h2>
                    <h3 style={{margin: '20px', color:"white", fontSize:"20px", opacity:'70%'}}>University of Maryland</h3>
                    <p style={{margin:'20px'}}>Developed a novel cost-per-click (CPC) focused budget pacing algorithm for online advertisement auctions.</p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:7.65, end:7.90}}
                speed={0.1}>
                <div className='e2'>
                    <h2 style={{margin: '20px', color: "white", fontSize: "27px"}}>Programming Intern</h2>
                    <h3 style={{margin: '20px', color:"white", fontSize:"20px", opacity:'70%'}}>HydroGeoLogic, Inc.</h3>
                    <p style={{margin:'20px'}}>Developed an algorithm for vertex reduction in munition site boundaries, improving project proposal costs by 30%.</p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:7.8, end:8.05}}
                speed={0.1}>
                <div className='e3'>
                    <h2 style={{margin: '20px', color: "white", fontSize: "27px"}}>Science and Engineering Apprenticeship Program (SEAP) Intern</h2>
                    <h3 style={{margin: '20px', color:"white", fontSize:"20px", opacity:'70%'}}>Carderock Naval Surface Warfare Center</h3>
                    <p style={{margin:'20px'}}>Simulated and modelled how the altercation of physical submarine structures affects the lift of a control surface.</p>
                    
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky={{start:9, end:12}}
                >
                
                    <div className="competitionheader">
                    </div>
                    <div className="competitiontitleshadow"><h1 style={{color: "#414141", fontSize: "150px"}}>Competing</h1></div>
                    <div className="competitiontitle"><h1 style={{color: "white", fontSize: "150px"}}>Competing</h1></div>
                
            </ParallaxLayer>
            <ParallaxLayer
                sticky={{start:9.3, end:12}}>
                <div className="competitiondescription">
                    <h2 style={{fontSize: "50px", color:"white"}}>Where it all started...</h2>
                    <h3 style={{textAlign: "center", color:"white"}}>I've been a <u>competitive programmer</u> since <i>2020</i>. </h3>
                    <p>I've competed in nearly 100 contests, and have placed highly against thousands of other contestants from across the world. I primarily use C++ during contests (and occasionally Java or Python)--and as a result of frequent practice, I am now pretty comfortable with using traditional algorithms and writing efficient code.</p>
                    <p>I love winning free t-shirts, prizes, and more from contests--but the best part is getting out there and having fun! I've compiled here some of my proudest contests.</p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start: 10.5, end:10.5}}>
                    <div className='contestcontainer' >
                        <div className="contestresults">
                            <h2 style={{fontSize: "50px", color:"white"}}>USACO Platinum</h2>
                            <p style={{textAlign: 'center'}}>Among the top ∼250 pre-collegiate competitors in the U.S., with perfect scores in the bronze, silver, and gold divisions.</p>
                        </div>
                        <div className="contestbackground">
                            <h1 style={{fontSize: "170px", color:"white"}}>USACO</h1>
                        </div>
                        <div className="contestplacement">
                            <h3 style={{fontSize: "50px", color:"white", fontFamily: 'Manrope'}}>250<b>/5000</b></h3>
                        </div>
                        
                    </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start: 11, end:11}}>
                    <div className='contestcontainer' >
                        <div className="contestresults">
                            <h2 style={{fontSize: "50px", color:"white"}}>Meta Hacker Cup</h2>
                            <p style={{textAlign: 'center'}}>Placed top 500 among ∼30k international competitors to advance to Round 3, and won a top-200 T-shirt in Round 3.</p>
                        </div>
                        <div className="contestbackground">
                            <h1 style={{fontSize: "170px", color:"white"}}>Meta</h1>
                        </div>
                        <div className="contestplacement">
                            <h3 style={{fontSize: "50px", color:"white", fontFamily: 'Manrope'}}>200<b>/30000</b></h3>
                        </div>
                        
                    </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start: 11.5, end:11.5}}>
                    <div className='contestcontainer' >
                        <div className="contestresults">
                            <h2 style={{fontSize: "50px", color:"white"}}>Google Code Jam</h2>
                            <p style={{textAlign: 'center'}}>Placed top 1k among ∼30k international competitors to advance to Round 3.</p>
                        </div>
                        <div className="contestbackground">
                            <h1 style={{fontSize: "170px", color:"white"}}>Google</h1>
                        </div>
                        <div className="contestplacement">
                            <h3 style={{fontSize: "50px", color:"white", fontFamily: 'Manrope'}}>1000<b>/30000</b></h3>
                        </div>
                    </div>
            </ParallaxLayer>

            <ParallaxLayer
                sticky = {{start: 12, end:12}}>
                    <div className='contestcontainer' >
                        <div className="contestresults">
                            <h2 style={{fontSize: "50px", color:"white"}}>Google Kickstart</h2>
                            <p style={{textAlign: 'center'}}>Placed 41st among ∼20k international competitors, during Round F of Google Kickstart.</p>
                        </div>
                        <div className="contestbackground">
                            <h1 style={{fontSize: "170px", color:"white"}}>Google</h1>
                        </div>
                        <div className="contestplacement">
                            <h3 style={{fontSize: "50px", color:"white", fontFamily: 'Manrope'}}>41<b>/20000</b></h3>
                        </div>
                    </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start: 12.5, end:12.5}}>
                    <div className='contestcontainer' >
                        <div className="contestresults">
                            <h2 style={{fontSize: "50px", color:"white"}}>Codeforces Master</h2>
                            <p style={{textAlign: 'center'}}>Ranked the highest at 28th in the U.S. on Codeforces, with a rating of
2280. Top 1% of 100k+ international users on the platform.</p>
                        </div>
                        <div className="contestbackground">
                            <h1 style={{fontSize: "170px", color:"white"}}>CF</h1>
                        </div>
                        <div className="contestplacement">
                            <h3 style={{fontSize: "50px", color:"white", fontFamily: 'Manrope'}}>28<b>/3000</b></h3>
                        </div>
                    </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:13, end:18}}
                speed={0.75}>
                <div className='section2solid'></div>
                <div className='projecttitle'>
                    <h1 style={{fontSize:'150px', textAlign:"left"}}>Projects</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:13, end:18}}
                speed={0.75}>
                <div className='projectdetails'>
                    <p style={{color:'black', fontSize:"20px"}}>I'm always looking for new things to do! Check out some of my projects that I've worked on during the past few years:</p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:13, end:18}}
                speed={0.75}>
                <div className='projectback1'>
                    <h1 style = {{fontSize:'230px', textAlign:"left"}}>Projects</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:13.7, end:18}}>
                <div className='projectcontainer' style={{left:'50px'}}>
                    <h2 style={{fontSize: "30px"}}>Force-directed Graph Visualization</h2>
                    <h3 style={{fontSize: "20px"}}><i>JavaScript, Python, HTML/CSS</i></h3>
                    <p style={{color:'black'}}></p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:13.8, end:18}}>
                <div className='projectcontainer' style={{left:'0', right:'0', marginLeft:'auto', marginRight:'auto'}}>
                    <h2 style={{fontSize: "30px"}}>Personal Website</h2>
                    <h3 style={{fontSize: "20px"}}><i>JavaScript, HTML/CSS, React</i></h3>
                    <p style={{color:'black'}}></p>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:13.9, end:18}}>
                <div className='projectcontainer' style={{right:'50px', float:'right'}}>
                    <h2 style={{fontSize: "30px"}}>Coin Detection</h2>
                    <h3 style={{fontSize: "20px"}}><i>C++, OpenCV</i></h3>
                    <p style={{color:'black'}}></p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                sticky = {{start:15.5, end:19}}
                // offset = {18}
                speed={0.75}>
                <div className='solidwhite'></div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:15.5, end:18}}
                speed={0.1}>
                <div className='contacttitle'>
                    <h1 style={{fontSize: "105px"}}>Let's get in touch!</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                sticky = {{start:15.5, end:18}}
                speed={0.1}>
                <div className='contacttitleback'>
                    <h1 style={{fontSize: "105px"}}>Let's get in touch!</h1>
                </div>
                <div className='contactbox'>
                    <h3 style={{textAlign:'left', margin:'20px'}}>LinkedIn: <u>Link</u></h3>
                    <h3 style={{textAlign:'left', margin:'20px'}}>Resume: <u>Link</u></h3>
                    <h3 style={{textAlign:'left', margin:'20px'}}>Email: <u>Copy</u></h3>
                    <h3 style={{textAlign:'left', margin:'20px'}}>Phone: <u>Copy</u></h3>
                </div>
                <div className='contactmessage'>
                    <p style={{color:'black'}}>I'm open to new research ideas, questions about programming, and work opportunities! (And of course, if you find a bug in this site c: )</p>
                    <p style={{color:'black'}}>Just shoot me a message through any of the links on the left, and I'll try my best to get back to you ASAP.</p>
                </div>
            </ParallaxLayer>
          </Parallax>

        </div>
    );
}
export default App;
