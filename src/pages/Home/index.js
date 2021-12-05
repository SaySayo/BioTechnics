import React from "react";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
  const { logout } = useAuth0();
  return (
    <div className="body">
      <header>
        <nav id="navbar">
          <ul>
            <li>Home</li>
            <li>Learn</li>
            <li>Fun Zone</li>
            <li>Contact</li>
            <li>
              <button className="signout-btn" onClick={() => logout()}>Sign Out</button>
            </li>
          </ul>
        </nav>
      </header>
      <div id="page-wrapper">
      <body>
        <div>
          <h1>BioTechnics</h1>
          <p>
            BioTechnics is an AR-based web platform where students from any
            background can visit and learn various concepts in biology with the
            help of 3D Models, which can aid in easier and faster understanding.
            BioTechnics focuses on full visualization and imersion of biological
            science concepts.
          </p>
          <div className="explore-btn">
            <button>Explore</button>
          </div>
        </div>
        <div>
          <h2>Other Features</h2>
          <div>
            <h4>Interactive 3D Models</h4>
            <p>
              Digital 3D models allow students to visualize and interrogate
              various topics; they reinforce spatial skills, facilitate student
              recognition of pre-learned various principles in the field, and
              encourage students to think about their processes and properties.
            </p>
          </div>
          <div>
            <h4>Learn with Augmented Reality</h4>
            <p>
              Augmented Reality's relative seamlessness of digital objects
              within the real world encourages interactivity and engagement. It
              maximizes students' ability to spend their time learning
              curricular subjects while minimizing the time spent learning how
              to use the new tech.
            </p>
          </div>
        </div>
      </body>
      </div>
    </div>
  );
};
