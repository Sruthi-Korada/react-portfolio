import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import './resume.css';

class Resume extends Component {
  render() {
    return(
      <div>
      
          <div className="bodered">
         <div className="contnt">
            <h2>Sruthi Sunkara</h2>
            <h6>sruthisunkara94@gmail.com | 778-814-4609 | linkedin.com/in/sruthi-sunkara | https://github.com/Sruthi-Korada  </h6>
            </div>
            </div>

            <div className="bar">
            <h4 style={{color: 'black'}}>Web Developer</h4>
            </div>
            <p>I am a full stack developer who is seeking a challenging, fun and rewarding career in the tech industry. Complementing my skills as a web developer is my expertise in commerce and fashion designing. I enjoy the creative side of programming and love to explore new ways to solve problems. This aspect of software development drew me into the world of coding and I’ve never looked back. I’m excited to lend my skills as a developer to carve out a career where I will be able to exercise my creativity and eagerness to learn.</p>
           
            <div className="bar1">
            <h4 style={{color: 'black'}}>Education</h4>
            </div>


            <Education
              month="April "
              endYear={2020}
              schoolName="Lighthouse Labs - Diploma in Web Development"
              schoolDescription="Collaborative development, pair programming, team version control. Computer Science fundamentals: OOP, abstraction, recursion, algorithms,javascript ecosystem(Reactjs, Nodejs, Express)."
               />

               <Education
               month="May "
               endYear={2017}
               schoolName="Accademia Italiana (Italy) - Masters in Fashion Designing"
               schoolDescription="Develop and showcase fashion collections, from the initial concept sketches to design and fabrication of their designs."
                />

               <Education
                month="May "
                 endYear={2015}
                 schoolName="Osmania University (India) - Bachelors in Commerce"
                 schoolDescription="The Bachelor of Commerce degree is designed to provide a wide range of managerial skills, while building competency in various aspects of business."
                  />
               

                  <div className="bar1">
                  <h4 style={{color: 'black'}}>Experience</h4>
                  </div>

            <Experience
              endYear="present"
              startYear={2020}
              companyName="Accents@Homes - Vancouver Canada"
              jobName="Inventory Specialist and Website Management"
              jobDescription="My primary responsibility is to develop and manage a website (based on Magento 2, Java and PHP) that provides an e-commerce portal. In addition, I provide in-person and online customerservice and sales support"
              />

              <Experience
                startYear="May 2017"
                endYear="Dec 2017"
                companyName="Accademia Italiana - ITALY "
                jobName="Teaching associate"
                jobDescription="I had managed 20 students. My main role was to guide them with their fashion show collection. This experience helped me improve my leadership qualities"
                />
              
                <div className="bar1">
                <h4 style={{color: 'black'}}>Skills</h4>
                </div>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          
       
      </div>
    )
  }
}

export default Resume;
