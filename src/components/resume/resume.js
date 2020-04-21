import React, { Component } from 'react';
function Resume() {
    return (
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>UCONN Coding Bootcamp</h3>
                <p className="info">Full-Stack Web Development <span>•</span> <em className="date">May 2020</em></p>
                <p>
                 Indepth coding bootcamp that touches on all aspects of web development.<br></br>
                 Front End - HTML, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, Handlebars, Local Storage, Session Storage, IndexedDB, React.js<br></br>
                 Back End - Express, User Authentication, Sequelize, MySQL, MongoDB
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Central Connecticut State University</h3>
                <p className="info">Degree in Music Composition <span>•</span> <em className="date">Dec 2015</em></p>
                <p>
                 Graduated Magna Cum Laude. My Composition degree started me on the path of audio design and digital composition, which led me to discover how much I enjoy creating at a computer. I take education very seriously, and believe that anyone will an open mind, and passion, can be taught any skill.  All it takes the proper encouragement.

                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>UCONN Coding Bootcamp</h3>
                <p className="info">Student <span>•</span> <em className="date">Nov 2019 - Present</em></p>
                <p>
                  Honing and developing skills to ensure that I can bring a multitude of ideas and solutions to any design process.  Participated in multiple group projects as well as solo work, which can all be viewed on my personal <a href="https://github.com/Sforzemon/">Github</a> page.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Berlin Public Scools</h3>
                <p className="info">Computer Technician <span>•</span> <em className="date">May 2016 - Present</em></p>
                <p>
                I am one of four people on our team that manages the entire district.  I am the point of contact for all staff requests at Berlin High School, as well as the individual that ensures repairs are happening in a timely manner.  I also oversee, and train, various student helpers that we bring on for summer or afterschool work.  I am the go-to member for giving seminars are professional development. I personally manage over 1000 devices and maintain timely repairs and minimal downtime for everyone. I lobbied for the inclusion of a VR lab for the students which I give regular assistance in teaching students to use 3D space to create art or navigate foreign places.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>I am a quick study and adept at teaching myself elements of coding that I have not seen before.  I can effectively reverse engineer code to gain a better insign of its innerworkings.  I excell at using google.  I might not actually be able to exist without it.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand bootstrap" /><em>Bootstrap</em></li>
                <li><span className="bar-expand mysql" /><em>MySQL</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
    )};
export default Resume;