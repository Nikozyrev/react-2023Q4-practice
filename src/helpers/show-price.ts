export function showPrice(price: string): string {
  const [beforeDot, afterDot] = price.split('.');

  return `${beforeDot}.${afterDot.slice(0, 2)}`;
}
