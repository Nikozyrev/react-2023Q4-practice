import { Component, ReactNode } from 'react';
import { List } from './list';
import { Search } from './search';
import { ICrypto, getCryptos } from '../api/get-cryptos';
import { ls } from '../helpers/local-storage';

type State = {
  cryptos: ICrypto[];
};

export class SearchableList extends Component<{}, State> {
  state: Readonly<State> = {
    cryptos: [],
  };

  fetchCryptos(search?: string) {
    getCryptos(search).then((res) =>
      this.setState({ ...this.state, cryptos: res.data })
    );
  }

  componentDidMount(): void {
    const search = ls.getSearch();
    this.fetchCryptos(search);
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
        <Search onSubmit={(v) => this.fetchCryptos(v)} />
        <List items={this.state.cryptos} />
      </div>
    );
  }
}
