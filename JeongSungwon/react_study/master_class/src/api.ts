const NOMARD_BASE_URL = `https://ohlcv-api.nomadcoders.workers.dev`;
const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json())
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json())
}

export function fetchCoinHistroy(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(`${NOMARD_BASE_URL}/?coinId=${coinId}`
  ).then((response) => response.json());
}
