import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '../components/error-boundary';
import { SearchableList } from '../components/searchable-list';

export function MainPage() {
  return (
    <ErrorBoundary>
      <SearchableList />
      <Outlet />
    </ErrorBoundary>
  );
}
