import { CSSProperties } from 'react';
import { showPrice } from '../helpers/show-price';
import { useDetails } from '../hooks/use-details';

export function DetailsInfo({ id }: { id: string }) {
  const { details, isLoading } = useDetails(id);

  const loading = <div>Loading...</div>;

  const content = (
    <div style={contentStyles}>
      <b>{details?.name}</b>
      <p>Price: ${showPrice(details?.priceUsd)}</p>
      <p>Change 24h: {showPrice(details?.changePercent24Hr)}%</p>
      <p>Market Cap: ${showPrice(details?.marketCapUsd)}</p>
      <a
        href={details?.explorer}
        target="_blank"
        rel="noreferrer"
        style={linkStyles}
      >
        Explorer
      </a>
    </div>
  );

  return <div style={containerStyles}>{isLoading ? loading : content}</div>;
}

const containerStyles: CSSProperties = {
  minWidth: '250px',
};

const contentStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const linkStyles: CSSProperties = {
  textDecoration: 'underline',
};
