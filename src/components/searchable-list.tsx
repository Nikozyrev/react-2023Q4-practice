import { Component, ReactNode } from 'react';
import { List } from './list';
import { Search } from './search';
import { ICrypto, getCryptos } from '../api/get-cryptos';

type State = {
  search: string;
  cryptos: ICrypto[];
};

export class SearchableList extends Component<{}, State> {
  state: Readonly<State> = {
    search: '',
    cryptos: [],
  };

  componentDidMount(): void {
    getCryptos().then((res) =>
      this.setState({ ...this.state, cryptos: res.data })
    );
  }

  render(): ReactNode {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          textAlign: 'center',
        }}
      >
        <Search />
        <List items={this.state.cryptos} />
      </div>
    );
  }
}
