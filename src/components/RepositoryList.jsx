import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList() {
  return(
    <section className="repository-list">
      <h1>Repositories list</h1>

      <ul>
        <RepositoryItem repository="International banking" />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}