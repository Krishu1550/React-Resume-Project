import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shailesh Kumar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">

            <h2> Data Analyts</h2>
            <span>
              Tableau, SQL, Excel, Python, Hadoop(HDFS), Google Cloud SQL
            </span>

          </li>
          <li className="item">

            <h2> Data Scientist</h2>
            <span>
              Machine Leaning (sklearn), Deep Learning(TensorFlow), AWS, Python, Flask, Streamlit
            </span>

          </li>
          <li className="item">
            <h2> Web Developer</h2>
            <span>
              ReactJS,  HTML, CSS,  NPM,
              Ionic, BootStrap, Flask, API, .Net(MCV)
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> Python, C, SQL, Core Java, Basic JavaScript, R, C#</span>
          </li>
          <li className="item">
            <h2>Research Contribution</h2>
            <div ><a href="https://irjiet.com/Volume-5/Issue-8-August-2021/Aquaculture-Monitoring-With-Machine-Learning-Technique/635" target="_blank" rel="noopener noreferrer">
              Aquaculture Monitoring With Machine Learning Technique </a></div>
            <div><a href="https://hal.archives-ouvertes.fr/hal-03798607/document" target="_blank" rel="noopener noreferrer">

              Image Style Transferred to Graphical User Interfaces</a></div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;