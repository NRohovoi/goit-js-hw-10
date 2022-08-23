import { refs } from "./refs";

export function clearData() {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
}