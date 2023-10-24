import { Component, ReactNode } from 'react';
import { ICrypto } from '../api/get-cryptos';
import { ListItem } from './list-item';

type Props = { items: ICrypto[] };

export class List extends Component<Props> {
  render(): ReactNode {
    if (!this.props.items.length) return <div>Not found</div>;

    return (
      <ul className="list">
        {this.props.items.map((c) => (
          <ListItem key={c.id} crypto={c} styles={{ cursor: 'pointer' }} />
        ))}
      </ul>
    );
  }
}
