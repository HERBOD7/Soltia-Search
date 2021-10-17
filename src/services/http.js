import axios from "axios";

function transformRes(res) {
    return res?.data || {};
}

const $http = axios.create({
  baseURL: "http://universities.hipolabs.com/",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get(endpoint, options = {}) {
        return $http
            .get(endpoint, options)
            .then(transformRes).catch((error) => {
                console.error(error);
            });
    }
}
