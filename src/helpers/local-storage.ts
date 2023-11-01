const SEARCH_KEY = 'search';

function saveSearch(value: string) {
  localStorage.setItem(SEARCH_KEY, value);
}

function getSearch() {
  return localStorage.getItem(SEARCH_KEY) || '';
}

export const ls = {
  saveSearch,
  getSearch,
};
