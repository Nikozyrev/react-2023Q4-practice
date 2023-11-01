import { ICrypto } from '../api/get-cryptos';
import { ListItem } from './list-item';

export function List({ items }: { items: ICrypto[] }) {
  if (!items.length) return <div>Not found</div>;

  return (
    <ul className="list" style={{}}>
      {items.map((c) => (
        <ListItem key={c.id} crypto={c} styles={{ cursor: 'pointer' }} />
      ))}
    </ul>
  );
}
