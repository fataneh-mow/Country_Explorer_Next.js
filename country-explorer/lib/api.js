const API_URL = "https://restcountries.com/v3.1";

const requestCycle = async (url, options = {}) => {
    const response = await fetch(`${API_URL}${url}`, options);

    console.log("fetch answer:", url, response.status);

    if (!response.ok) {
        return []
    }

    return response.json();
};

export const getAllCountries = async () => {
    return requestCycle('/all?fields=name,flags,capital,region,population,cca3', {
        cache: 'force-cache', // to cache
    })
}

export const getCountryByCode = async (code) => {
    return requestCycle(`/alpha/${code}`, {
        cache: 'no-store', // to do not cache
    })
}

export const searchCountries = async (name) => {
    return requestCycle(`/name/${name}`)
}

export const getCountriesByRegion = async (region) => {
    return requestCycle(`/region/${region}`)
}
