import { useState, useEffect } from "react";
import axios from "axios";
import "./style/Projects.scss";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  let user = "undeadalien";
  let api = `https://api.github.com/users/${user}/repos`;

  useEffect(() => {
    axios.get(api).then(function (response) {
      setRepos(response.data);
    });
  }, []);

  return (
    <div className="project__container">
      <div className="project__title">
        <h1>Github Projects</h1>
      </div>

      <div className="repo__card__container" id="projects">
        {repos.map((repo) => {
          return (
            <a href={repo.html_url} target="_blank">
              <div className="repo__item" key={repo.id}>
                <h2 className="repo__title">{repo.name}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
