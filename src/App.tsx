import { SearchableList } from './components/searchable-list';
import { ErrorBoundary } from './components/error-boundary';
import './App.css';

export function App() {
  return (
    <ErrorBoundary>
      <SearchableList />
    </ErrorBoundary>
  );
}
