import { ICrypto } from './get-cryptos';

export async function getDetails(id: string, signal?: AbortSignal | null) {
  const res = await fetch(`https://api.coincap.io/v2/assets/${id}`, {
    signal,
  });
  const data = (await res.json()) as { data: ICrypto };
  return data;
}
