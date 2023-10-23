import { Component, ReactNode } from 'react';
import { SearchableList } from './components/searchable-list';
import './App.css';

export class App extends Component {
  render(): ReactNode {
    return <SearchableList />;
  }
}
