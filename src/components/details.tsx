import { useParams } from 'react-router-dom';

export function Details() {
  const { id } = useParams();

  return (
    <div>
      Details component for id <b>{id}</b>
    </div>
  );
}
