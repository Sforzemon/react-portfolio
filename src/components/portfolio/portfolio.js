import React, { Component } from 'react';
function Portfolio() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://sforzemon.github.io/Lively/" target="_blank" title>
                    <img alt="Lively" src="images/portfolio/Lively.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Lively</h5>
                        <p>Web Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://github.com/Sforzemon/Employee-Tracker" target="_blank" title>
                    <img alt="" src="images/portfolio/Employee_Tracker.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Employee Tracker</h5>
                        <p>Node.js</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://timeveil.herokuapp.com/login" target="_blank" title>
                    <img alt="" src="images/portfolio/Time_Tracker.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Time Tracker</h5>
                        <p>Database Design/Sequalize</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <hr></hr>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://github.com/Sforzemon/Dev-Profile-Generator" target="_blank" title>
                    <img alt="" src="images/portfolio/Dev-Profile.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Developer Profile Generator</h5>
                        <p>Node.js</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://sforzemon.github.io/Password-Generator/" target="_blank" title>
                    <img alt="" src="images/portfolio/Passgen.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Password Generator</h5>
                        <p>Javascript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://sforzemon.github.io/Day-Planner/" target="_blank" title>
                    <img alt="" src="images/portfolio/DayPlanner.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Day Planner</h5>
                        <p>Javascripts/Productivity</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
        </div> {/* row End */}
      </section>
    )};
export default Portfolio;