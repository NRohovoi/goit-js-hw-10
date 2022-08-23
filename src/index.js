import './css/styles.css';
import { refs } from './js/refs';
import { onInputSearchCountry } from './js/onInputSearchCountry';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
refs.searchBox.addEventListener('input', debounce(onInputSearchCountry, DEBOUNCE_DELAY));