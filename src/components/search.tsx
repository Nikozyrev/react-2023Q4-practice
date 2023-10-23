import { Component, ReactNode } from 'react';

export class Search extends Component {
  render(): ReactNode {
    return (
      <div
        style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}
      >
        <form style={{ display: 'flex', gap: '5px' }}>
          <input type="text" placeholder="Search..." />
          <button type="submit" style={{ padding: '4px' }}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
