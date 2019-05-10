import Config from "../config";

export const getOneRandomPic = () => {
  /* eslint-disable no-undef */
  return fetch(Config.apiUrl + "/api/oneRandomPic", {
    method: "GET"
  });
};

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
