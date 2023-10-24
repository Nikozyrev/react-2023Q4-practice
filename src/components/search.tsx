import { Component, ReactNode } from 'react';
import { ls } from '../helpers/local-storage';

type Props = {
  onSubmit: (v: string) => void;
};

type State = {
  search: string;
};

export class Search extends Component<Props, State> {
  state: Readonly<State> = {
    search: '',
  };

  componentDidMount(): void {
    const search = ls.getSearch();
    this.setState({ search });
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    ls.saveSearch(this.state.search);
    this.props.onSubmit(this.state.search);
  };

  render(): ReactNode {
    return (
      <div
        style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}
      >
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          style={{ display: 'flex', gap: '5px' }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <button type="submit" style={{ padding: '4px' }}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
