import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

function Project({ url, pct, title }) {
  return (
    <motion.div className="project">
      <div class="pict">
        <img src={pct} alt="logo" />
      </div>
      <div class="desk">
        <h2>{title}</h2>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          {url}
        </a>
      </div>
    </motion.div>
  );
}

export default Project;
