  # Soltia Universuty Search

Search and find university names around the world.
## Table of contents
- [Installation](#installation)
- [Structure](#structure)
  - [API](#api)
  - [Services](#services)
  - [Components](#components)
  - [App](#app)
- [References](#references)

## Installation

install project dependencies:

```bash
yarn install
```
and run the below command to start the project on development mode:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- The page will reload if you make edits.
# Structure

### API:
API includes functionality to call API.

API documentation is available on [Github](https://github.com/Hipo/university-domains-list).

endpoint constant name base on functionality and it includes API route.
> #### API usage:
> import it as `$api` into your component and call method of it.
> ```javascript
> import $api from './api/index';
>
> $api.searchUniversity(word).then((res) => {
>     ...
> }
> ```
### Services:
Services include a utility to use Axios and Rest API.
it using `$api` to call Rest API methods.
> #### sample http service usage:
>```
> $http.get(ENDPOINT(query-params));
>```

### Components:
- It includes basic components and specific components.
```
src
└── components
     └── component-type
             └── component-name.js
```

#### input:
>include search input >component. it get function to submit search as prop.

#### cards:
>include components that are used as cards like search history cards and search results.

>search history: show search history and get a list of history and function to remove history as a prop.

>search results: show search results and get a list of search results and keywords that were searched.

## App:
include application components and functions:

#### search university:
>call university search API, store search history, speech each keypress word and speech word that passes to the search API.

#### remove search history:
>it removes search history using splice. it gets `index` and `delete counter` and has `0` for `index` and `search history length` for delete counter as default value.

## References:
Used accessibility references:
- [fonts(webaim)](https://webaim.org/techniques/fonts/)
- [tags, color and design(web.dev)](https://web.dev/accessible/#create-a-design-and-css-that-supports-users-with-different-needs)
