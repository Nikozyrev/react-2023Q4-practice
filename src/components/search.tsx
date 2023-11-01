import { useSearch } from '../hooks/use-search';

export function Search({ onSubmit }: { onSubmit: (v: string) => void }) {
  const { search, setSearch, handleSubmit } = useSearch({ onSubmit });

  return (
    <div style={{ display: 'flex', padding: '10px', justifyContent: 'center' }}>
      <form style={{ display: 'flex', gap: '5px' }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" style={{ padding: '4px' }}>
          Search
        </button>
      </form>
    </div>
  );
}
