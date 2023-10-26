export function showPrice(price: string | undefined): string {
  if (!price) return '';

  const [beforeDot, afterDot] = price.split('.');

  const num = Number(`${beforeDot}.${afterDot.slice(0, 2)}`);

  return num.toLocaleString();
}
