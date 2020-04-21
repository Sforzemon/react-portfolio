import React, { Component } from 'react';
function About() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="./images/portfolio/ProfilePic.png" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
              <p>Michael has always been passionate about creating. From a young age he would write stories, compose music, even make very poor attempts at drawing. It was the concept of starting with nothing and having something tangible afterwards that was endlessly fascinating to him and drove him to continue to make whatever he could, song, story, or stick figure.
                 Having grown up in a household filled with electronics, Michael was well-aware of their use but never delved too deeply into them. He strove to be an individual, unique, like everyone else. Part of this expression of individuality was not following his father's footsteps into a career with electronics. So, when asked what he would study as he got older, he would exclaim to anyone that would listen, “Well, I know it's not computers, that’s for sure, I hate those things.”       
                 He, instead, continued to pursue his love of music, and when it came time to go to college, that was what he decided to do. Study music. He studied composition and kept his creative outlets brimming. However, a degree in music, without being combined with a certification in teaching is not a very useful means to getting a new job, and so Michael turned towards his old nemesis, computers.
              </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Michael Hughes</span><br />
                  <span>Central CT, USA
                  </span><br />
                  <span>860.989.8138</span><br />
                  <span>Sforzemon@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="./images/Hughes-Resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
    )}
    export default About;