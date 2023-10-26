import { useEffect, useState } from 'react';
import { ICrypto } from '../api/get-cryptos';
import { getDetails } from '../api/get-details';

export function useDetails(id: string) {
  const [details, setDetails] = useState<ICrypto | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let canSet = true;
    const controller = new AbortController();

    setIsLoading(true);
    getDetails(id, controller.signal)
      .then(async ({ data }) => {
        await new Promise((r) => setTimeout(r, 0));
        canSet && setDetails(data);
      })
      .catch(() => {})
      .finally(() => canSet && setIsLoading(false));

    return () => {
      canSet = false;
      controller.abort();
    };
  }, [id]);

  return { details, isLoading };
}
