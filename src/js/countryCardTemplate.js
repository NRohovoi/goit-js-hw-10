export function countryСardTeemplate({flags, name, capital, population, languages}) {
  return `
      <div class="country-info__wrapper">
        <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="80"/>
        <h2 class="country-info__name">${name.official}</h2>
      </div>
      <ul class="country-info__list">
        <li class="coutry-info__meaning"><span class="country-info__object">Capital:</span> ${capital}</li>
        <li class="coutry-info__meaning"><span class="country-info__object">Population:</span> ${population}</li>
        <li class="coutry-info__meaning"><span class="country-info__object">Languages:</span> ${Object.values(languages)}</li>
      </ul>
  `;
}
