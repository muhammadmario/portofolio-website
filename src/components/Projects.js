import React from "react";
import Project from "./Project";
import "./Projects.css";
import ikanhias from "../image/ikanhias.png";
import netflix from "../image/netflix.jpg";
import movieku from "../image/movieku.jpg";
import news from "../image/newsaggregator.jpg";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Recent Project</h1>
      <div class="projects_container">
        <Project
          url="https://movieku.netlify.app/"
          pct={movieku}
          title="Movieku"
        />

        <Project
          url="https://github.com/muhammadmario/NewsAggregator/"
          pct={news}
          title="NewsAggregator"
        />
        <Project
          url="https://netflix-clone-ddac7.firebaseapp.com/"
          pct={netflix}
          title="Netflix Clone"
        />
        <Project
          url="https://apik-mm2.netlify.app/"
          pct={ikanhias}
          title="Ikan Hias"
        />
      </div>
    </div>
  );
}

export default Projects;
