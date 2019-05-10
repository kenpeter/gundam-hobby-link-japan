import Config from "../config";

export const getOnePic = id => {
  /* eslint-disable no-undef */
  return fetch(Config.apiUrl + "/api/onePic/" + id, {
    method: "GET"
  });
};

export const likeit = id => {
  /* eslint-disable no-undef */
  return fetch(Config.apiUrl + "/api/likeit/" + id, {
    method: "GET"
  });
};
