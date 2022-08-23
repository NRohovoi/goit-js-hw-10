export function countryListTemplate({ flags, name }) {
  return `
  <li class="country-list__item">
    <img class="country-list__flags" src="${flags.svg}" alt="${name.official}" width="35" />
    <h2 class="country-list__name">${name.official}</h2>
  </li>
  `;
}