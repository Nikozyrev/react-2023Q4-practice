import { useState, useEffect } from 'react';
import { ls } from '../helpers/local-storage';

export function useSearch({ onSubmit }: { onSubmit: (v: string) => void }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const search = ls.getSearch();
    setSearch(search);
    onSubmit(search);
  }, [onSubmit]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    ls.saveSearch(search);
    onSubmit(search);
  };

  return { search, setSearch, handleSubmit };
}
