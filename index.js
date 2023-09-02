const { states } = require('./states');


class CityStates {
    constructor() {}

    /**
     * Retrieves an array of all states with simplified properties.
     *
     * @returns {Object[]} An array of state objects.
     * @returns {string} Object.name - The state's name.
     * @returns {string} Object.stateCode - The state's code.
     * @returns {Object} Object.coordinates - The state's coordinates.
     * @returns {number} Object.coordinates.long - The longitude of the state.
     * @returns {number} Object.coordinates.lat - The latitude of the state.
     */
    getAllStates() {
        return states.map(item => {
            return {
                name: item['name'],
                stateCode: item['state_code'],
                coordinates: {
                    long: item['longitude'],
                    lat: item['latitude']
                },
            }
        });
    }

    /**
     * Retrieves a state object by name or state code.
     *
     * @param {Object} options - Options for retrieving the state.
     * @param {string} options.state - The name or state code of the state to retrieve.
     * @returns {Object|null} A state object if found, or null if not found.
     */
    getState({ state }) {
        return states.find(stateEntry =>
            (stateEntry['state_code'].toLowerCase() === state.toLowerCase()) ||
            (stateEntry['name'].toLowerCase() === state.toLowerCase())) || null;
    }

    /**
     * Retrieves an array of all cities across all states.
     *
     * @returns {string[]|null} An array of city names, or null if no cities are found.
     */
    getAllCities() {
        return states.reduce((acc, curr) => acc.concat(curr['cities']), []) || null;
    }

    /**
     * Retrieves an array of city names for a specific state.
     *
     * @param {Object} options - Options for retrieving cities.
     * @param {string} options.state - The name or state code of the state to retrieve cities for.
     * @returns {string[]|null} An array of city names for the specified state, or null if the state is not found.
     */
    getCities({ state }) {
        const stateResults = this.getState({ state });
        return stateResults['cities'] || null;
    }

    /**
     * Retrieves a city object by name within a specific state.
     *
     * @param {Object} options - Options for retrieving a city.
     * @param {string} options.state - The name or state code of the state to search within.
     * @param {string} options.city - The name of the city to retrieve.
     * @returns {Object|null} A city object if found, or null if not found or if the state is not found.
     */
    getCity({ state, city }) {
        const stateResults = this.getState({ state });
        if (!stateResults) {
            return null;
        }
        const cityResults = stateResults['cities'].find(item => item['name'].toLowerCase() === city.toLowerCase());
        return cityResults || null;
    }

}



module.exports = new CityStates();