import { Component, ReactNode } from 'react';
import { ICrypto } from '../api/get-cryptos';
import { showPrice } from '../helpers/show-price';

type Props = {
  crypto: ICrypto;
  styles?: React.CSSProperties;
};

export class ListItem extends Component<Props> {
  render(): ReactNode {
    const { crypto, styles } = this.props;

    return (
      <li
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '15px',
          border: '1px solid black',
          background: 'gray',
          color: 'white',
          ...styles,
        }}
      >
        <p>Rank: {crypto.rank}</p>
        <p style={{ fontSize: '1.6rem' }}>{crypto.name}</p>
        <p>Price: ${showPrice(crypto.priceUsd)}</p>
      </li>
    );
  }
}
