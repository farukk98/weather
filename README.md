# Weather API

This API provides weather information based on location.

## Installation and setup

To install the dependencies and start the project, run the following commands:

```shell
npm install
```

```shell
npm run dev
```


## Endpoints

### Current Weather

Get the current weather for a specific location.

- **URL:** `/weather/current/:location`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the current weather.

#### Example Current Weather Response

```json
{
    "location": "Sarajevo",
    "current": 14,
    "description": "Clear"
}
```


### Weather Forecast

Get the weather forecast for a specific location.

- **URL:** `/weather/forecast/:location`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the weather forecast.
  
#### Example Forecast Response

```json
[
 {
        "date": "2023-05-21",
        "city": "Sarajevo",
        "temperature": 11.2,
        "description": "Sunny"
    },
    {
        "date": "2023-05-22",
        "city": "Sarajevo",
        "temperature": 11.2,
        "description": "Moderate rain"
    },
    {
        "date": "2023-05-23",
        "city": "Sarajevo",
        "temperature": 12.9,
        "description": "Patchy rain possible"
    }
]
```

### Weather History

Get the weather history for a specific location.

- **URL:** `/weather/history/:location/:date`
- **Method:** `GET`
- **Parameters:**
  - `location`: The location for which to retrieve the weather history.
  - `date`: The date for which to retrieve the weather history.
  
#### Example Weather History Response

```json
[
{
    "city": "Sarajevo",
    "date": "2023-05-16",
    "temperature": 11.8,
    "description": "Moderate or heavy rain shower"
}
]
```

