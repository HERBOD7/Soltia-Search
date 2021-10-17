import $http from '../services/http';

const SEARCH_UNIVERSITY = (query) => `search?name=${query}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchUniversity(universityName) {
        return $http.get(SEARCH_UNIVERSITY(universityName));
    },
}