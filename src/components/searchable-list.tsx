import { Component, ReactNode } from 'react';
import { List } from './list';
import { Search } from './search';

export class SearchableList extends Component {
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
        <List />
      </div>
    );
  }
}
