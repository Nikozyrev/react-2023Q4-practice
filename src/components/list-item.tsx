import { Link } from 'react-router-dom';
import { ICrypto } from '../api/get-cryptos';
import { showPrice } from '../helpers/show-price';

export function ListItem({
  crypto,
  styles,
}: {
  crypto: ICrypto;
  styles?: React.CSSProperties;
}) {
  return (
    <li
      style={{
        border: '1px solid black',
        background: 'gray',
        color: 'white',
        ...styles,
      }}
    >
      <Link
        to={`details/${crypto.id}`}
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '15px',
        }}
      >
        <p>Rank: {crypto.rank}</p>
        <p style={{ fontSize: '1.6rem' }}>{crypto.name}</p>
        <p>Price: ${showPrice(crypto.priceUsd)}</p>
      </Link>
    </li>
  );
}
