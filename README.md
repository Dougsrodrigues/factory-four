# FactoryFour Frontend Dev Take-Home Challenge

## Objective

Write a status page for the FactoryFour APIs, which should be a single-page web application using React in either TypeScript or JavaScript.

## Stack

- **Framework**: React (TypeScript)
- **HTTP Requests**: Axios
- **Styling**: Styled-components
- **Test**: Jest and React testing library

## Details

- **API Health Status**: Each FactoryFour API has a health status endpoint accessible publicly without authentication.
- **Endpoint Response**: On a successful request, each endpoint returns:
  - `success`: boolean
  - `message`: string
  - `hostname`: string
  - `time`: number
- **Polling Interval**: The page should request the health status of each API every 15 seconds, displaying the most recent result for each API.
- **Endpoints Format**: `https://api.factoryfour.com/API_NAME/health/status` where `API_NAME` includes `accounts`, `assets`, `customers`, `datapoints`, `devices`, `documents`, `forms`, `invites`, `media`, `messages`, `namespaces`, `orders`, `patients`, `relationships`, `rules`, `templates`, `users`, `workflows`.
- **Error Handling**: One of the APIs is deprecated and always returns a 503 error. This should be displayed as a real outage.
- **Hostname Changes**: The hostname string returned by the API is partially random and new for each call. Display the most recent hostname.

## Design Concerns

- **Simplicity and Legibility**: The design should be straightforward and easy to read and understand. The focus is on functionality and clarity rather than branding.
- **Code Readability**: The codebase should be easily understandable and modifiable. For example, changing the 15-second interval to 10 seconds should be straightforward for someone with limited JS knowledge.

## Resources

- **Getting Started**: Utilize `create-react-app` for easy setup. [React Documentation](https://reactjs.org/docs/create-a-new-react-app.html)
- **Example Page**: For reference, check [this example page](https://jthai006.github.io/FactoryFour/).

## Running the Project

1. Clone the repository:
  ``git clone https://github.com/Dougsrodrigues/factory-four.git``

2. Navigate to the project directory:
``cd factory-four``

3. Install dependencies:
``yarn install``

4. Start the development server:
``yarn start``