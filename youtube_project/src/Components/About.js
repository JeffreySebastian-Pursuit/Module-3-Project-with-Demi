import React from "react";
import "./About.css";
class About extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutUs">
          <section className="aboutDemi">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFwDc4v8bGypA/profile-displayphoto-shrink_800_800/0/1570766906166?e=1626912000&v=beta&t=akN_j9fWyR9SYot5wyx_-gHkRXcNYfIf1z7jCdibYAw"
              alt="Demi"
            ></img>
            <h1>About Demi</h1>
            <p className="aboutContainer">
              Hi & welcome! My name is Oluwademilade Jobi
              (Oh-lou-wah-day-me-lah-day) but you can call me Demi. New to the
              tech field, I began a journey into IT early 2019 and siezed the
              opportunity to continue to evolve by joining Pursuit. I'm a
              developing Full-Stack Web Developer
            </p>
            <p className="aboutContainer">
              I am a graduate of the Year Up program working at LinkedIn as End
              User Support during the day and learning full-stack web
              development through Pursuit when I'm off the clock. At YearUp, I
              spent six months learning computer hardware, networking,
              cybersecurity, business communications, and general soft skills
              expected in the industry. I'm using those skills in my Internal
              facing End User Support role and have been for about a year and a
              half.
            </p>
            <a href="https://github.com/WoahDemi">
              <img
                src="https://camo.githubusercontent.com/b079fe922f00c4b86f1b724fbc2e8141c468794ce8adbc9b7456e5e1ad09c622/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667"
                alt="github icon"
                className="githubIcon"
              />
            </a>
          </section>

          <section className="aboutJeffrey">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHmjj1I9EaR7Q/profile-displayphoto-shrink_800_800/0/1603469546218?e=1626912000&v=beta&t=S3aR0cheFc_QBZaV8720HGGyA4KXLSqqZIVS17uOvF4"
              alt="Jeffrey"
            ></img>
            <h1>About Jeffrey</h1>
            <p className="aboutContainer">
              I am a Full Stack Developer at Pursuit, fascinated by creating an
              application that would benefit other people in different
              countries. Back home in the Philippines, people are struggling
              with pursuing their education due to a lack of resources.
              Therefore, I decided to pursue Software Engineering to help the
              less fortunate get jump-started on their careers. Through Pursuit,
              I gained my skills includes HTML, CSS, Javascript, Node, Express,
              React/Redux, PostgreSQL, Sprints, Agile, Code Reviews, and Pair
              Programming. Pursuit, an intensive 12 - month software engineering
              fellowship with a 9% acceptance rate.
            </p>
            <p className="aboutContainer">
              Apart from my career as a Full Stack Developer, I am an
              experienced financial operation and quality assurance professional
              with a demonstrated history of working in hospitality. Along with
              my expertise, I consider myself to be an innovative, tenacious,
              and accountable professional with highly developed communication
              and interpersonal skills. My professional aspiration is to gain
              new skill sets that apply to future career opportunities. And
              empower other people by giving them the right resources through
              technology.
            </p>
            <a href="https://github.com/JeffreySebastian-Pursuit">
              <img
                src="https://camo.githubusercontent.com/b079fe922f00c4b86f1b724fbc2e8141c468794ce8adbc9b7456e5e1ad09c622/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667"
                alt="github icon"
                className="githubIcon"
              />
            </a>
          </section>
        </div>
        <section>
          <h2 id="projectTitle">Project Description</h2>
          <p className='aboutProject'>
            This Project lets you search for YouTube videos using the YouTube
            API, then choose a video from a list to watch. In this project we
            use Trello Board to track the ToDo lists for this website like
            functionality, styling, and etch. Furthermore, while we were working
            on this project we encountered several roadblocks. For example, we
            learned that some API's like Youtube have limited fetch quotas of 10,000 units.
          </p>
        </section>
      </div>
    );
  }
}

export default About;
