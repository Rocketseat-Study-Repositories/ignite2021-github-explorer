import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/brunogirome/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repositories list</h1>

      <ul>
        <RepositoryItem repository="International banking" />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
