import { useState } from 'react';
import { List } from './list';
import { Search } from './search';
import { useCryptos } from '../hooks/use-cryptos';

export function SearchableList() {
  const [search, setSearch] = useState('');
  const { cryptos, isLoading } = useCryptos(search);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: 'center',
      }}
    >
      <Search onSubmit={setSearch} />

      {isLoading && <div>Loading...</div>}

      {!isLoading && <List items={cryptos} />}
    </div>
  );
}
