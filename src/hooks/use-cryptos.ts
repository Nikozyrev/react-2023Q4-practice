import { useEffect, useState } from 'react';
import { ICrypto, getCryptos } from '../api/get-cryptos';

export function useCryptos(search: string) {
  const [cryptos, setCryptos] = useState<ICrypto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let canSet = true;
    const controller = new AbortController();

    setIsLoading(true);
    getCryptos(search, controller.signal)
      .then(async ({ data }) => {
        await new Promise((r) => setTimeout(r, 0));
        canSet && setCryptos(data);
      })
      .catch(() => {})
      .finally(() => canSet && setIsLoading(false));

    return () => {
      canSet = false;
      controller.abort();
    };
  }, [search]);

  return { cryptos, isLoading };
}
