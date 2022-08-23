import { clearData } from "./clearData";
import { refs } from "./refs";
import { fetchCountries } from "./fetchCountries";
import { countryListTemplate } from "./coutryListTemplate";
import { countryСardTeemplate } from "./countryCardTemplate";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onInputSearchCountry(event) {
  event.preventDefault();
  const countryName = refs.searchBox.value.trim();
  if (countryName === '') {
    clearData ();
    return;
    };

  fetchCountries(countryName)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        clearData ();
        return;
      }
      if (countries.length >= 2 && countries.length <= 10) {
        const newListMarkup = countries.map(country => countryListTemplate(country));
        refs.countryList.innerHTML = newListMarkup.join('');
        refs.countryInfo.innerHTML = '';
      }
      if (countries.length === 1) {
        const newCardMarkup = countries.map(country => countryСardTeemplate(country));
        refs.countryInfo.innerHTML = newCardMarkup.join('');
        refs.countryList.innerHTML = '';
      }
    }).catch(error => {
      Notify.failure('Oops, there is no country with that name');
      clearData ();
      return error;
    });
};