import { Component, ReactNode } from 'react';
import { List } from './list';
import { Search } from './search';
import { ErrorButton } from './error-button';
import { ICrypto, getCryptos } from '../api/get-cryptos';
import { ls } from '../helpers/local-storage';

type State = {
  isLoading: boolean;
  cryptos: ICrypto[];
};

export class SearchableList extends Component<Record<string, never>, State> {
  state: Readonly<State> = {
    cryptos: [],
    isLoading: false,
  };

  fetchCryptos(search?: string) {
    this.setState({ ...this.state, isLoading: true });
    getCryptos(search).then((res) =>
      this.setState({ ...this.state, cryptos: res.data, isLoading: false })
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

        <ErrorButton />

        {this.state.isLoading && <div>Loading...</div>}

        {!this.state.isLoading && <List items={this.state.cryptos} />}
      </div>
    );
  }
}
