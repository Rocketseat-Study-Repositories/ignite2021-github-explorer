export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>
        { repository ?? 'B3 Node Analysis' }
      </strong>
      <p>Get B3 anlyses for NodeJS apis</p>

      <a href="">
        Access github repository
      </a>
    </li>
  );
}