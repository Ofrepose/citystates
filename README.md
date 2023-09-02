## Introduction

CityStates is a versatile Node.js package that provides access to detailed information about states and cities. It simplifies the retrieval of state data, including their names, state codes, and geographic coordinates. Additionally, CityStates allows you to explore city information within specific states, making it a valuable resource for location-based applications, data analysis, and more.

## Installation

To use Logtastic in your project, you can install it using npm:

```bash
npm install @ofrepose/citystates
```

## Features

CityStates offers the following key features:

- **State Information**: Retrieve an array of all states with essential properties such as name, state code, and geographic coordinates.

- **State Lookup**: Easily find a state by its name or state code. This feature simplifies state-based queries and ensures quick access to state details.

- **City Listings**: Get a comprehensive list of city names across all states or specifically for a chosen state. This is particularly useful for applications that require city-level data.

- **City Lookup**: Search for a city by name within a specific state. CityStates streamlines the process of finding city details, saving you time and effort.

With CityStates, you can effortlessly integrate state and city data into your Node.js applications, enhancing their geographical capabilities and improving user experiences.



## Usage

```javascript

const CityStates = require('@ofrepose/citystate');

CityStates.getAllStates();
CityStates.getCities({ state: 'North carolina' });
CityStates.getAllCities();
CityStates.getCity({ state: 'nc', city: 'wilmington'});

```

## API Reference

### `getAllStates()`

Retrieves an array of all states with simplified properties.

- Returns an array of state objects.
- Each state object has the following properties:
  - `name`: The state's name.
  - `stateCode`: The state's code.
  - `coordinates`: The state's coordinates, including `long` (longitude) and `lat` (latitude).

### `getState({ state })`

Retrieves a state object by name or state code.

- `state`: The name or state code of the state to retrieve.
- Returns a state object if found, or `null` if not found.

### `getAllCities()`

Retrieves an array of city names for all cities across all states.

### `getCities({ state })`

Retrieves an array of city names for a specific state.

- `state`: The name or state code of the state to retrieve cities for.
- Returns an array of city names for the specified state, or `null` if the state is not found.

### `getCity({ state, city })`

Retrieves a city object by name within a specific state.

- `state`: The name or state code of the state to search within.
- `city`: The name of the city to retrieve.
- Returns a city object if found, or `null` if not found or if the state is not found.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
