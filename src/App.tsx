import { Component, ReactNode } from 'react';
import { SearchableList } from './components/searchable-list';
import { ErrorBoundary } from './components/error-boundary';
import './App.css';

export class App extends Component {
  render(): ReactNode {
    return (
      <ErrorBoundary>
        <SearchableList />
      </ErrorBoundary>
    );
  }
}
