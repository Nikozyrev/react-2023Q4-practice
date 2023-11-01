export interface ICrypto {
  id: string;
  symbol: string;
  name: string;
  rank: string;
  priceUsd: string;
  changePercent24Hr: string;
  explorer: string;
  marketCapUsd: string;
  maxSupply: string;
  supply: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

interface IResponse {
  data: ICrypto[];
}

export async function getCryptos(search?: string, signal?: AbortSignal | null) {
  const params = new URLSearchParams({
    search: search || '',
    offset: '0',
    limit: '25',
  });
  const res = await fetch(`https://api.coincap.io/v2/assets/?${params}`, {
    signal,
  });
  const data = (await res.json()) as IResponse;
  return data;
}
