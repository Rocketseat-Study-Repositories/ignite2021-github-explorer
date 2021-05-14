import { RepositoryItem } from "./RepositoryItem";

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